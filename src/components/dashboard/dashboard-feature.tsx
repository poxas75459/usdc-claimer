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
    "5zMJD4X3WwFCBLrUWcz8LrZ4uray93z5jRRkkyrnDAdp7aDXy2oK2RME35THVxALQVUPaxd6qhKKMNbsC3qwiV9f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N6fKpWq5GLa8B4iaKMiniQSqHyuK1h5HzrYbfswm8P2T8NMHCxFvr2reGJyutFSK5do6rNYyVAbBkuzRaWyWXsT",
  "key1": "38uiUAzuNnmiLMb8QzvfHehaSNAz7wkjLZeMPkjVKcs9LzVQeNpQPu3Udci4iARM3pHHKVdbGsCtDPcXiW2KPyPW",
  "key2": "3KtQbsUCFnjp5LAWbNWvtj72ukkxPJcpV55AV9A4heK9xG9k7sDhSyrUfSpT7jGpWfHGLmn1YtQVEu3gkasL2ifD",
  "key3": "zFKXgcBG9MReHdJ2H2KU3vmfU4rNSTbr8jHk7SzQWfwDXNKCy3KD85hF3FF5vexiPaXErWCUt4wJPm5R2vqriqc",
  "key4": "35F4yHf9JiK5b8bJnUEDfCdrnmZ2a7hP3QtK5DH3tJJhTLPyVJCRvWyxN347wzPWETnAX3F6TEfHUj4DXAzpjJWN",
  "key5": "3cQsQSAsiJt88xXgHapgKD6dbuCMU8MuEA4jeD5qNXMCFp2A4yzxeNbbzSourjGnG5LNPQtfNWQgjnQBfVSH8tyA",
  "key6": "5hkZGPGxjRRx95c9Bep83qBXVTaA38NgscX9EPJpcRyVY1zxNLFz81JhxuiPhFwcFkhWyHw3Y8JjNbnozUPx1iut",
  "key7": "3MKLqwtBHHC2UUsbiYXwcvzcyjWGmCp3jZVjA3CBK2JN6YqqzCJbrZWSVzX99JV9ZdMD51nHZDLXZ5HrQGMYvQRM",
  "key8": "XfTKA2TXyj2AmQfxUnJ1DfYqvecAqmWRLCbJisznmgKuBszDPgqy5Qe5jxe3jpxAVWGnGJrgbk7H1Y437DqcGbT",
  "key9": "5kGGHeQ3Jf1fZ1M3iFeSZNbpHsaFfU5TygjZgX7HQ2PzRThk6uTpKkCWZhKRXBLEjMgPSD5kPux7Uh2Pje7gcNaB",
  "key10": "4ejs4BshGBT4Yhaa4DpnfHFhpoSS7FDt6xm5bca9AzPrefQ7RbuqNpXqmHDvU6z4ZH9NByDvDry6N3qgN4xocBNv",
  "key11": "3w4Xy6JUBu1ci4rt6jYHQaCnCYJPrTxQd75Kmk68j73TUBvqjWQU4scY1cSf8e8ixYQxGptKKCXMUS1McQjH62Rp",
  "key12": "2X1uzv7ZJNioM44uYYC4obEZRt5Hc1213RABfRm2uUrWUFRFNhGbHvEALoFrYRkCFV5JepSFc1xUjp49zndN16Y9",
  "key13": "2x3szK2uCi9FHkPKch5DuEDx1RWeGTjqUchxT5JWjp966LvpaW1T5bB94vkHdzLpE6fCgZbe93DTxY8xDdXxxeRL",
  "key14": "28wrCt7fszxzBR5T5N8Xf7JtVemhnmTKe6UJJ5hpWudmq3dQVfagXFLJhjqrbRNsMd6gFqv65T2fWvdmaypupSrq",
  "key15": "5U8iU6R3BWbE7UDHNkxeoDMku9exwQe1yJddxPMXfiGGct9Ja1QtEPraf7SGawKf77s9VWiWTVogbV2PQGyvqoKY",
  "key16": "3r8wCjEFwYyhKQmeV1s4XshbhY7cfCumD71aP3zcNbB2Cej6UanPJVjpc1Gkh48im3MDQajvv6xfn5X3aA3AbPHY",
  "key17": "2PkVxWhyWQ9RTNuL7qVxsSoVTqnsw9dc6fjWs4H8aaQNNmvqq598Cz9cswx2Y9CN3R5ys4BXTKUhZk8656avdpiQ",
  "key18": "3k8SW8g4zGbx6VX6Quqvx6JWYDjStH4bYvcc79LW7SYc1rHHcXpxdaSzgGRoAnqkk7uku8MJ3DxQY3t3cyTbcUj8",
  "key19": "ji6LvCeNwiZw9X1VZX27FNx5kChExjLVBEmwhc56RnjNn9cBPu6FLgjw15jXGUu18zohJ3SLnhX1YEK8RbJz4B5",
  "key20": "2iAATjRzjATwj3WRaiBSjB9SpQTWLaHi9k18SRDMYbRPnfpXCSNS4iRSGBpdiDZvNWCwdGbswUQh6w25j9D7wLvn",
  "key21": "2huN7vMn4oULubVjHemLZf4kcAocHdpV8951pB7ZFxhjBYBrEpJvPSHT7C9XrFFoYsh9i9Tsy4JbKpAdpSVhdBzG",
  "key22": "4Deewo8ApaAnQggVusxYyEnx5T1Z59MnpkN98F4UAYHseY1JmAieJxUKtDnZXHUbr4tnhpPd8z6PMFMswMtEU9Hj",
  "key23": "5YpvS6yXQPPHaMbcndFzHoYmpit9QupgD6jeZ5KQLRuzySwMdNduyZXftAqE8Ngo2smBHeXrRb4ryugRLGV9hTse",
  "key24": "3Zd15KsGA9ksJmTvNL3EYBGEmeuDdy1uJahy4vmgUCr5VcA2uaGhZhMRYZsNNbPtdDNvWh4NLsEzAAFwV6snQVWd"
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
