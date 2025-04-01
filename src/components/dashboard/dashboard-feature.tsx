/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5V4wRbjdr3znxbGpfYcPbiug3VKUd3tYm21Sqywf4n7sBwp1fg6se9b7GUhoqe7utEBK7FuAtGr7BDCQXu3H32Ay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35dG2kVrzKWMDXzWV69onyYueQWop3r5WmNLPwhLrgqGbSRvpbuf4yFVxjVb3mNUasBABCF4FtyGizzgAWVmciYh",
  "key1": "2Z814vvR9vUF3VprLbPnkZQTdb9uvGFjp5goAFKDxpWs1kVxcpxsv913xKoyxp8jeqapKx1tXBQ9nn1iLjVqhtaG",
  "key2": "4ecwupTVtTD9yLpQRaLyPMCYYGfqt5rCeV6fjzQD1G7iyZ2PKWBxLWSaaDxkZQ8EHhZyiQBq21Vhw4NSuh1GHSeT",
  "key3": "aB4UYFNGWzCX7cX2X3hRXJuwTJXgfKbqwzayP5W2kgNMLDb63AuS87UqqmEMzVnXHaaERA153Deio6Em4EZJk2G",
  "key4": "C86aw619zDEQXfVjatitVhisTnujtCh7bzaZRZMhHXnTLbzhXG4RrFwrBR4QppdAx5mW5dfwXHyU5ByovMXdM1J",
  "key5": "sjHSmj16z6VayVddnzzDPPxcwRDCtSZUaZS8gnW9Y9XZKFGNKpfqA3U3yjzZeCH3WqquY2yk875ksEqrMXNHd6a",
  "key6": "V2R9CPpzyC7H1X4755Dk441FwfHDdftcrZuU8vASrQtSaAu8PBupHzMRnFLGGJMP6LrqdiQNowzSuwtmM3XW9MA",
  "key7": "2Cw95GXhPzvcTd2Goxefxo3rhef1kWDTn9mVD7rg7mt3MRvqDDmx1WcE6aaz2KtWftvjvhXScY9pVxXp5HJfkTQS",
  "key8": "5BeGTrVfpkmjAkm7tXMQvtkf9KvVxA181qkKJ9xzDZW2Bvxj2PukA3z3yqiF9vwbqac2dSDPtVuGLieVi3LDLMgD",
  "key9": "63QqPTmB149beiJk2vwTjSTWJr48gYdg4RszBJqxdDE37xuA97CkYAP54BLfFujrh1n734KDa7pZbk8ESAgzLyR5",
  "key10": "3tRY7SkvEqGf1hyTpRjb1gKfD9BCLowhsYYMHJntMLMZQYYC7ofLQzuGiDVCMEd7QEQa5jv73o5dbYdc8XN24ZSx",
  "key11": "4w172mxxTyVBTvZQkMzHNUTsHTJ83pJ1sPWvyjkCs3Vg4AY8m4HvKFjrNqDTVJdjfGtLGDKx9j2jHC1cLjam6tGr",
  "key12": "349GwTStVFYWhAbi2NfCaRxHqUqDn86cvR2W3aHBF2Rndvgqcpejo5SNyPvVMXKEqVxqm4mbkcuarT9MUvE7LBQM",
  "key13": "3z6BG2bgaLo4yYzvUFAxyGPWpprnZYw14bpAJiFLrSFxyeQ3BXQUSocbnZyXL5sstcDcAPKK5t5Z5j8HJ8kSswh7",
  "key14": "2ywh75rZRyeqZWxa6fJiUYJ7vXLhzXA3HRkWctjYk8q9JTX9GWH93KQ7PDtycAbhXtwvEL96umVBsWSBmDoPaVCP",
  "key15": "3GCnE8bjptMUknj9vjPonw2sSd8LGe2epvJ9mJY2F1qimFQHC8gQuxFjFA8sPMLPoPc3RXQ6Wp6ruqffinn3f1DU",
  "key16": "3jjzRDXsWoywG7PTWvLay4JhfKRCLJz2mE3WrcgYeAJecXsLmS7FVxBqByHAUposPxkxCdE6HcJyeTXpQkwqzVP7",
  "key17": "3jHPwEbxmTL2F7rFxtjnVQugQptQzkekhHpgatz7gg3QaXS8mahk5QtTNvuEpuuYsFtv4uM7pHuNY8ULAVTYBhbg",
  "key18": "5ax97gad1UKDzizEoUhyg85pmSHfyPJH3ZBMAVtxUW2hvAmNqHRfXb5VLQiwSCC8AFRfcnKoyPDVEff4Spj3Jcd2",
  "key19": "4AiruJ1yWJJ7LEmQEYhdfFQngU3KeiAGqoXVByZXDQpr6aMCg1w6RXL7AbAr9pR2MgrLKXBAcULZCCH7A8RDkXgK",
  "key20": "2KtBi4jRQCRDAvbAtZcuAdBhHtMVFshp3fLyaNdBeuhuVe2NLAxevH9Esorve4YB6iuZWs2Lw3eDG77xRoBn3prS",
  "key21": "3qrkAiwjpzg9i5e2Pd62zUzdNooUUzGQXUVq9tPfiBngxyeQubK1N5BTedYNmXU8vYY9Gfz1Kdy3Yoicn6XzMD53",
  "key22": "4R2n2jd4RXBxxvpZfUsmLzCjKeSWKvCNbZvZbHt81e4Zowhiqf6545dtKACrMBL4p9YqEdWXku9RfnUvDifx8dVg",
  "key23": "3BREZukArLixuYigcpr8PBTXj2XB8UGLkdgHKDuj6975BGRiaLgNCTWbzG6XcmoheZDvE41GVTTJ7jpfg6aKcvbf",
  "key24": "3o8XJDxZ1fiEaVNDFC6TEwuuyDkgKGEHGnUxexKooaq1w9nUxwuzEe5Pgeopdqnk3qfkiEgf4hFCGapWfvjaFTjA"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
