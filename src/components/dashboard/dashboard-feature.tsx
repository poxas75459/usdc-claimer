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
    "59Mk5q1NTiJ6RiMiZDL3gVsuYH2SjRj18KbyY51AwToUaySBzZ41yPUVtz7grGxaZtgNFcZJJFaixgX8Qx7rgjGa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mf41Z3sJRCoeAAvxhBcBazo85zezWmsRRrrmGq4Edfsy2MkdQK5SNUt51tBkq1Nt3Tmb7w9MoqWNHnm1KYd1Jje",
  "key1": "5BgWqhMgTESewgCcYaqqfArBYNpNiKLpVFzWkUzoDj26ecSoEiuTjhyV2VQxK67eF27tQ9dVr7eFGjTnLvbfXraU",
  "key2": "5Y3fCvyUhd7wrz2MpPEQGdbricssJfJ6fppuEfhCZQE9kKUfaqK6EL4VJu6xd1wWpMa5jNPkru5sDsMaiaxqYHZC",
  "key3": "5bcR7YUqtP76MzN6a2YkRcv5EXL5U4Z8DnwfNN1SWW3KTYxocSBwJwQFsD8acG8mJswgn81axnvmeRLJ2REL7Xr6",
  "key4": "63WrEFusSDE3xdDmVLrNQXJjoGc5P9kUF2KtvK75StKGG8P6mi4tJHU1Ndbf4LhsDDXXEJB8VDwk4y8nDAjUZAcp",
  "key5": "2ic6m1gCyc9SJuMspGK4JaPFKkX7vYpbX2ZzEe3S93zfZqH1ms323U2tMQpWn2Uv5JoG6DzUEoS9BpTKYJJaWewe",
  "key6": "5cooz1sLhR52HrCXwGczCsz6iDhLo4rTZFTsMYtMRnDs65hG1VPnepV4asV3gJnYUXkZtDBKn3LL6WRAxHEwr5dd",
  "key7": "2bnroxji8ycKd6WDauzFgV6pumL1ycv3dTTqKfNK7gFekHdwqqG8KzBpk4RmtZCxgppC99hzd855n4zdYnWG9FiQ",
  "key8": "5ebRNReJEQyDUn2uu9LkGvUBj73ZhnRAburqeADe5JrqAgXgxnJqNMqfk6FJSFiYP1MG5mtNjgZbfDJXB5yotYEP",
  "key9": "26nSF7tqKuQ2Q7C4MKrh1VMbpWHCQXvqsH2DV7pDfKVTxXtbx8ZaGi6p1BRXmBrT6XtyDjXomBTQAUxdWqcELaeN",
  "key10": "276AXLzwP7HV8egM5gMoKL5tCFUmBbF8gDsUfDKiuKaN2jE9ri82FLVo1NWXubsYx7ACp8RZA7zmhGkS4hcfAQQb",
  "key11": "fgZU99ZteH7vnuLhiMu9Y4Bpeq5aUSvtk5rh43HRgwH9qP46m7VEMhhzMXxncmr638WmKea7C4nWZbBuDhiU2fr",
  "key12": "3sp1BrYLnsAfEdzZBwbxN5jYpvbY9QL7CJtBNGRPRGXHTupKhJsZugbqrFAuPp5CK3tvGwxkz9UF7zHkL3qgQXe2",
  "key13": "fwBB6bqDc4V9ZHDPdtLGMTnWZgxc6cjKgKDkEaCz5T65q7iZQNatrsmWKQHH4sXWX7jWjN2qZVZNWxtPeBLy6Uo",
  "key14": "4112L9KM3RZLFTMtfG6VhL384Zb83A1Cu5yUq2pmwp1ES93KpKc8okmbfT92n7mQUjfRR4LPh4tWvuSzqJbHrzRw",
  "key15": "4zmwgwiesRJKL2Uwm3GiUjrTyMvSWetMeRFiUrsDefVCwxGWRzdiEoUrifwhiCEoaJjNPnpcXoPrwvpoYTy8NJRY",
  "key16": "4WGSqPQzbppAGUV5wh4cLQLKiM3BHoBYLh9zSRkc3eiEKbeW8Xqayo4oKBef2UaioTZrdPJhXYkU357T4QAHDuPu",
  "key17": "4nS5JdvazJvxPfDjXpCYBn3XreyqeuQtzDMorVrEfSkewXHDSD2XvHWZXwr57dYfXtCZp4Mg94Q7CKA5u6174Jbm",
  "key18": "3LM3n986baTTK8zRifQUBLz8Pe1BuqEkSfRQ7AmEzwHNfR2bfYTubHpmXZAp9BcVwQ5QNJBcmudGzato7iUKR9s4",
  "key19": "2qJPZDktYQbfG3U8TRf6BksoAJJpYZADfv5D4e2X3Zc68Rc9YrfxBHkr529trxyaJjq1R8nCtWyG4SEK7y5k9X8y",
  "key20": "2wBnuC19FtChiSKsahKz1JD1NMynNRNWt55Qx37GCiKGUTkTUatvofCBc7ZDPT8rZ9dr36pvDmcSdUiFaUmzNHC8",
  "key21": "2xTMEYYkyNKBc26bww8NzAi3zsbaTRAK1mKGqzp7ZHkP252zQqF7gC25wyb1QbJ8UJHqZNBBAQPz4yEsf8quY1KV",
  "key22": "zNonvMchornMYgWNuZ3MgpbaC9YPE3ct9aiyASXLhEHg8EYCM7UrL8uoZQqU8LvgxVzjsdoFF1BWK6C8rEiMMwv",
  "key23": "7oefdmJL9VBUgSNLCzhWZvFM65n1Mnt2NoYU4aRFS66fQxU43p2ehkBbdgTsTKFc5wpoijWFSPWb4RKk3RmobPv",
  "key24": "5HbAPGNdcd5csRkc6QihnqXrsMJ6wwhWzgxehfrmCajmUz66LvWH1d2RCap6yp1eVw4r5E1nqoW41bJ2Gig4huA3",
  "key25": "5QygTC68o4UrqgYjCxL4tQs25yUJ13yLn3yXTpvg8u4LQ4MTdTqm8kSMk2VtP6i5W1RUaeNPj7CoiNZNCpXK35cX",
  "key26": "5YJKxt9cy8dLrUrDs9r9GvQzLxxmNkJfdCbWrYYByVyjajZke4XK7LwSYZmVKYnQArFhY7SWZyxJCJ76ojDYiNwd"
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
