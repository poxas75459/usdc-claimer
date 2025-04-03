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
    "4urBeM5oiaX3shm2Z5MLxFuDE3Gm7PTeYuiwLDRuBq3NRr1xGPke4SJjLBQiSxXyeHX6KYGYbeo2qWLuczWTBGBc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3si76a9y3YFjnNjJhrBQB9jwFxESzjU2GCaVy94CojfHn6Qwgo2cvf3F6FnpnY3UrwetDSb7fVx7qPoFWex6MoGH",
  "key1": "2gnjYrVNU9Zscihy6afa5VKfixSvxh1DPtxe5G8r4Y7xTV87a2oCss5WufxKerRuMyKvjYiBWBvo1yFoeCrMfXFz",
  "key2": "5MVr4YkyHg2F6p672Z1jswBwxXSpnrikQHo3K86ynxf1MTwbxFBME3NCDSj7Mq17by5SacFN6ZM6jBh5BirTQ12y",
  "key3": "3jPasqsvnSLMxe59KcBC7PXPPYKf41d3eMGrGegUk8zEjfWGeGAQGkxcG5bB9YkrXuKDyNxQFkBDZHmkpme1FhHP",
  "key4": "wYccvGivnDmNFq4J8F3AHNGy6fNz7c4zNn9K7zYFg3ftwbTDnuLKhYnDgHHkJu5snypqBJ1eRXgwdvzP4Nuh19r",
  "key5": "2dJErpgp59ecTwy5q4jFey5ttiQHrkqWmiAszaWK8FmCsyL1DvVazZk2ukvHApX96ErRVmMi2CHG1YDzhcBeTGJE",
  "key6": "65C6uGKd2HGZtAqUi2Q8H8mH5RiG9YpBPCFoSmhsCzF2ZdmAYEshWPrfMFRXnh4RunaotmTySDqXee8Hvdhgb25t",
  "key7": "4NEXQAdcFXTskGShkdxc9CLabFYui3phWh3MafzmfSiEbvJEdoWvrKujfedA1fXX511gPuK8BQHP3FUmPv8cujx",
  "key8": "21EHbYUmdgTw7sdLhjTMGwkAEnEfvNKPA7bh75sW2tzxUFaie5E13mygHwu8pHhjRBM7fbwpbudy9sNSVTcjEUHa",
  "key9": "4mzqCefX4Sm1YPkicno2tpH1XWtp8h34fM3RNYfueN9kxUCA56pEwM9XnWRk7QA3cidUmjhQZZUW5xMj7asjaD5x",
  "key10": "2X94cRqJHxfKCehSQ3LoSXNVnK7QSsDKFqxnqx3CQdQ4wg7sriDAgxzkW1Q3fC91VtstFPz68nZdPoFotEHpUvZ8",
  "key11": "3gBE15g8WUrBvEMnhtMNjh5GUJKYwQVpNWEvrk5R1c6ULV3nWgPvbtQFC4H81Wpp3F7JGcqAsFFHQebEfLCuaY7S",
  "key12": "2zrH6RExP3JBWryLpji7j4KQWiDD6RSsVvuxJG7ktkRQNeetxu4oNj7Zg56RyGeY6Kb7tPshcGHCf4aknvrdUSep",
  "key13": "pwF92dhTJ7TGpjbHrNufvcHLmpaHXEP2bVhFBn7XBhd9KHJMoPpQ6YGGMrd5HX6k36R5h5BC3HpfCH39x8JWGuB",
  "key14": "4Rj3W9hnPP9LtvMN9xpxUaUMTD5VF2TDJEm5wKHKFPkjWWkGUc1ipRdWtch8ZnZ6WtPCmbcWoHDACigdC8BqE3zH",
  "key15": "67YKhTrxCLPD9KUJDmaMnonoWMEwsBCNoV1a64RGNNZfz57tkHn63SZQ16UkCAkR3fFQnhRaixuixnYniMctsr5C",
  "key16": "5tPHY7evUe6pWtdiWCDHVbrX5kMJHasKMpFJsQVuSc33b5ZaRXTMEuaPEVdkkPcGvg6Wqyu29HtjbgW5A1nvDQ5P",
  "key17": "2k1ow72M1FwaXRwNqfvDEFwiHHwR7ae3pMz8SUnhmXb1dnE52xe1VdJo7rvCsBvGNG3BKWE4UjTubAAqotYBjggs",
  "key18": "4Ter3F8EtuDLZgrti96XR9Q6x61ztD2hrFX9u2ZGjBzxCJdHCAHRGHPNCsD2aLdvqpf9ce1Nkm9Qt6JZsNtTAsgb",
  "key19": "38NWtTEzCPPoQTriUXH3uDW2djF5j3D7qmcFm4YwhPEp3NVdN2KpsZvgQSaCpBPQgJVsGxqSAm58oyLdzWqEDcLp",
  "key20": "61RVrKtPgzxyubFZzqkFzsxEjb8qnt7FoLAUYBBjBL2ymkCM9bahCq2c9PyLqgZ66XMA2cG84CYSVAYNY6iiQHTg",
  "key21": "4kymUpex2iZvKrAWcJwTW7q4iAEAaCzBSMPLZe2ZhCmxTxzzvETZyQK75266PJCNvPiHdZCJHBquUyLZb34fuPgj",
  "key22": "42SGwSs2V1AQwiwBkCPD3wp5AP1Z1sKXZCPtd2TCi3Gn7A3e5CB8GSN8jgviDHSHNtqSYS7znHY8cgFq35dZe4bt",
  "key23": "3Uat9y1cexraHW6e91EuoCj9ts4okRPxkRRgpqbdPec48eiKkReUdevBxdgiijpJ8ZjASdFfQV5zTWbJY2n7qT5i",
  "key24": "nNNbd5eN2CS8Vj6NRXw8ZdVfHHGLLiCkwVjJs4sS7bFjNGgjB2TGNT5SEorcB6cDbKHbRmsyHmTG7QJBX1jucwv",
  "key25": "SgmpFPvS5MKRYFAF8qz4AWmstpJjK8c59KzF8gCj7SamPhEZYRZ9bNfW82PKmXwxL4eGm1Cpxv8KhkQAUmxFjEU",
  "key26": "4TQiMr58WWaiHJvRNEviwzBYikPuRvTs3RvHQNU4pi9yksCF88NhUBvY2r2mTdnpfm8qu8tLB5qza9o8bWkgXshw",
  "key27": "4mbXe1BRx2xTgeLAcGL1Frv78dHDy3bow2M43kAmgzNvYuTj47ecrjLzHCV4oocwFnfFDot3UsYeRNYjGcqSH3eU",
  "key28": "5eHq6ySADu3WEsbPJbEB7mnUa3Q1Jc7eb5Spx1cf6URZW5wCFbTCLE9LKDp4iwVzCHh1RcTHn2gf2PCj1RqVbX4Y",
  "key29": "kQETYj5rahr7s79Nd9ZCfnt7gtPkFVX1a21zeeSvXD9FoPgJEcoAc9pojECvBrXWsNxv345Se6NvQKbtDRzb8Ze",
  "key30": "5PUcAJ694ezVoWfUgMKNRc4qdPvrtHKWZCvnVrrRg55kVxDAzv3Ms1KQVKWnsSGfsnovTcnLJ4he5mqJSrbxHNpR",
  "key31": "4gityq56VnRpDN585pByvhNf5B5NX9tQwaSgvs3apVs75roxf1JDQ53mHfZrhepyziQmXyLPZmEFK7DL9x79yyxs",
  "key32": "2f2sxvzSYHcbWFkPZmr1ZWCoq2NH2aT7D1Hvv3cw9somRW7DQ7SVXHJ1TAZZtwhmJX4DhJaP9Nk6WKpBh6CZo8PP",
  "key33": "5RSY5uVgbYv1hjnifvtXvqnmnyQc8YQtrXMgcgkxF4zr3UwJonGRMZUdTES4bPZt9B8Y5UrCHEgXSku2g6XfgzBr",
  "key34": "3v4MehLb2trU7yMxd2dPqScfS6svKxJX2qJkFPXe7NfvajFdsTd9NyWG5aYWvoWSUA7EaSCK8eS1tUPjKmbBG7K7",
  "key35": "4op9KZWbvfteVbpBiHLFRR3K9WL3oG8jZMhBBxQGygP9NW25NiVRKCxZQ8MsnoAtP3NSRRgVwtdsERdHGwFDjtDm",
  "key36": "4X7dyjcUEot1chzTGkwbaDV3iTvVw1LmrRqaSsu4f1TYE1vnaD4xU9CLSxWTJijXXNR59zJU5XGhohTSwmgeagin",
  "key37": "5sh4sHkS8iDQyDDGTzteWbWz6FgwSsH9BD8KJD4in2sptANaczrhFUE39pxz7roy38uJ8KJF9J3gySrDSBnkAMSR",
  "key38": "QyFmHBN98kfYEUXUy68dcKSPmS5UUo8dttHTrP2pKhuq4Jrx74fZMWHFqzUBExUwqAiEgJoxJbhR3VyWECJfP6E",
  "key39": "3YUjC1i9CyAb4qjgRgT97Z3ZSGEmqPSxhALSSLadCx9LxjkN39x2YcMFWQSiLCKcpcNguEweeyw1jkvNkdx68YLm",
  "key40": "5kuXdy4y2ZNCeeswbUcwNvNBE3MaTmFdfFn3HHHRSwBf7qu8VutAMwzYUucZ4og4ym5c2mptXGCmrAFthoQuPXQ8",
  "key41": "oQ5mD8aVufHMv6VYijktXWeCnyU12Q8e1k88iH3KsCcpJ5RX6RCFocFMAUdCse3ugWg88SRd3bvDaFN9qqhrsZU",
  "key42": "Nv3X7EVWQx9Uzzk2rVpTfu8zS1WZVc5F43af1W65YCZLvS7ZrLuuE6UiY5vDUFGgqhFkhVGTJf6oDUUymt6YAt5",
  "key43": "3NeKocodCVX8nnSrXe5J6HtGswE4rxk8TMRLaiH2scgVZu9dtTcX58nFfMp2S3xNo8ta9W1NYXpeFjjnBiVrQrwK",
  "key44": "5tH8QE5GCFmSw1iKL7iimSRzEpU6FEnaEHkyUvwfTQGvsk3qdCkdjM4hwFiiL1gX35kCsQu22NhkyVi4b38w47nX",
  "key45": "5s1xTLQurWPqdx1NSTa9eVTuT9MVZiuPftE8Dr4CAk8iZEeJoyHnFHffkW1PohPfNoVi3f8mjGKhqLC7PsGGwwkk",
  "key46": "4nnFPa8WHsq2Y6npL86RUL2xD4b5vR7syyx7FzweorL6jXiqvHqRAwDJkXaZ7AfDvspV73d2nE1XHtXNcRgymmEY",
  "key47": "ZWHqMtHDLTezQ4wCYqy8F1iAoQRR2AudsjGEAzUcF6Wq58b7TXSW3AqGJ7UMrkbYszj1VsLk8ix4kdJfSAi58pU"
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
