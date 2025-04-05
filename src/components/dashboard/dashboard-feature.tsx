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
    "xbJi8jvXT79kKi7iyaQRf9XNH7ZSfkA5NKXbjTh7uzeHCy7ePjFQDsSad2GQTfaaWFQNW4NKut6pRzrBURNnSb1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kwm3bUiuqCZBUCrMc5xBjqqz1uRkR3kBCBZT4RYbkVDUzrvS3TL8uBjiHj1MNie8SsqdsVvLtcnZPGatdBdhuDK",
  "key1": "5c4RgjWS7skMw6gMxNgYnxNPkQjQczbcvbgNf6usmHxksVW1SaeXezxC2SonZzTPeuxdf3qvPXXjEtbQodbU5ZSe",
  "key2": "2GDG17GfaWZhVmYyvBr9jojcjCSmg5uzVzpHffLYuFAe53b7XMxZbpq8uMKc4HM88uoovGcrRobt4o2ogWjDQ3M7",
  "key3": "2PPryxpwYsQG1xPapitBgMqVpfJycJKNgg7mZUQXKHnqRBPpegHcJ2knd7vGYTVCHfePZYdtsDCpAUQFwwjJ27RD",
  "key4": "55dYKVUgVtZBFo9kE3bV9YxPh3AXrfRdAALey215Vi8WNHws76q1bT7YE8RUDdyTJSH6Yb6KTm79ZwKL6hvSw4co",
  "key5": "37bPEFq16GX7dYB277Q621ssoUm6Ux4fKVx3voA4qAQHhz4by59Y3A7oh6dymMpu8apenzEn9Gw6m23FLphRaXpT",
  "key6": "5bZwZ3L4jin9YR9yEbokYktw4TDHGbU7LMqdE5D8fkqYBWWJSPQNSBF4B3vTbAPUi7nZQXT6KYnDSde4r8URKM28",
  "key7": "31ijNjDcC7jNT7GQMsm1mDmHBJa7sJxLLsdcDn2QXhjj8bm6JqkFtdwxwRQoxudjWmxfFBjj4uiQZ6vgU25sUejM",
  "key8": "4hXkhcxVmHb3UzgBiJ9RGsAHZT2ZkCnockPp9TnhcUe4f9MgvUjd2FhKfVpanCbUxoFuZzczT9qH1hcXC83Z1Qhq",
  "key9": "2w2H6zDQ1Hrt2Yqvj39FRKeKv1TboZoNYbjvL2k5CVLopF8bB72wRm5K9wRJ3ZwFWYCwg7Azm6smjgSHmPy6xQKV",
  "key10": "26D7HDn9ZdjaA9gCHhUc5WP7wNJ3XDqRSgSyVqKABfirWhhtj2Z9icr97LXi2Ur4SB8Dgq5wsYdMKi3cMdwSkxb6",
  "key11": "5KUEEhJF799XSvt1ZqwGdL8Rf1nNyTu5kry7VdNN6CxzDE2r8ifDFHM5jVYcqmQRLnVyzF7CnxvfioKJavN8BrVa",
  "key12": "NRca2bvSz7GGnZ4qg5SfeADENrUjDb1LwMikxF4BULHHQ962V2eFg7n9V5MHw3N682SFG5oxmjC94bcyKSXtJ7Z",
  "key13": "4wdtXQnnmmFncJzhDsusn2h8uhGBD7Etd1ESgXMzyyWYuwzWCRBLDL5BxfNmnVRJCF11FMxxp1tRG1UAN2oNyA1P",
  "key14": "5oqpgGieAcavvBJctba3C9EFKQRv6t2rqpQny8bvFXrYp7KRYnk9gnBfpQwD7TToUje1YixDHusjWfaE34ky6JPX",
  "key15": "2TS8he9swPQE7LcpzZKcjn8E2uGnV9cVkmqqbms4wSy4E5p12WWUc4Vnizu51QNEavx2Y5bDhssB8YJTnwt5cESR",
  "key16": "rDfHVHu81nVhFMg3KaEAxGTeBfuCBzKE4ZQ4q8yyy8QyAxnYaARoMjZMYs8KBPH6NMiLMq7WSGnadT2GfVnpgBj",
  "key17": "2LKKHCaALaErGLwPhAeBFJY5qMUax9FZGc1vYFiaN1xF1dYDwBmHAyCtSRQoN7CMgmW3RpoSEaPBfdNU29BrVrkQ",
  "key18": "3AaRNFNDJ7EhZwveDViSZaHBZiprVjtQZ8Afxitd2PyairQh6ftxnT6zDKF3Z62xonYrWkLFnBbezh2LVpVJymEV",
  "key19": "24Pt3Gqsr8yWpK8vbE8rVa6oWXe3hnQ5ik1kvYTVKxq1QHtfxE2s35eynahHAyYqsr7MY5ruFLxhda5Qy85DqY6v",
  "key20": "3wxWyUNroHRug135uEQ92DwuxeXUtQaHLAwTctLuy6rECt5QHrJgE9wcxMewG95a9Jkhie3ECstFp7KgNUrm9cb2",
  "key21": "5ewdPKs4bsuXi7jZyrDdW1tk7szNjpCLhY6oHGKMoxg5P5nUXNwiSBxs8Fps94xCe8mydWKkACcMgsrgNSu8Npyb",
  "key22": "5ixbGUEPdyHnFHJvPpCVNC9pEUrvV5vKH5N2NXfBVE1M2vBYuwXM29VJSMwd58fD6uRyAFKr6hvkGjqfds9eM6GT",
  "key23": "5wTMrmjn24h1Jz1Ewz5pGFE6X21M314SsSGTQcFCXufrEkbNJH6MTLieVjq9JmrJwLCvVheqgGdAG46nvFEqmaXk",
  "key24": "37CdoHY2RGv681JyYtoDtzJp5q57M77HPbxpJNTLNbZm4MJYr1FbqquWocsY6XznadNQvPZm9NjUwfrauP8Vnajz",
  "key25": "4hySrpZpBF8C9TZ5vyrjP5h7AfFR42VucUREf3AJqEF98D5EY2nSBET9hG1v1wT8F9pEyHBu8t8nCNV8NPXMxryJ",
  "key26": "4scjF1Y9EEdxMAPPsvorzNYUW3rZjyyRQTmdU8aoMhqP2cMxoRoqVKChwdQCC1iw6ieQQxNtWMTnD7pszkeau1zE",
  "key27": "45mvXQBHyvGbBMZE5LnYm9DLAJyEJhabifUChVieTVE9UMgR879S5rr4csynagDFn6W8arbFvCDNmhGi6TrToo2m",
  "key28": "uuud7SLbVN6rgdaXS4uUXwh3agf5TrjXmvMLwvi7mXQuWCpvxbZv41kcZhYViJ4KqZj5eMfCcAPvpD5fvTXHD65",
  "key29": "4pVox1q7QdghYoYvEFcjRJDYSy89ZGdRx8JrDpFDRHP4APxCPsMBAC7vMJhbLCm22cspvvcuFQQm1mJTpUVHUwsv",
  "key30": "3PhCAoWA9z8x6xocJbebS2u6JophrCnvzNnRtwd7bgw7Knz5ZGNUEbnXhheTYR5hA7bmACi76s34KWRdifXnrCys",
  "key31": "5QPmA4qfdxq3qiuDGndxd7rCJwXypWt5XNBmx5mrxEPJN6hTWwCkP8sEdynjfEPxG1gpxcyWkgRwzPjWxuvEDTxK",
  "key32": "3jk9Tq9anGNh2xxWX4o5bEnPSCChbfwV2xJCVfGGrQ9mZfhTfu6YQoKGCRuTWUCK28aNc8ZbyCEmEirBrXPSBJuB",
  "key33": "5xagSro1PHHrgpbaTPxpiRMLzmpX8aVf6GUtEyteRp9SD6aMy1ifabD52wBAnqzxgFUfPaiTZh8tsverMJbmfXho",
  "key34": "4zVbgMJuzXYACwZrWEheWL79wpWkbji1AajPmNx2AoYpHb8HmCJ2BSqsn22YL6WKH75fdKLPrFzBzorwHXhWjbW7",
  "key35": "2q4XGBioeEVe7exk4YUruReU8Hm3QQtN9pTVG8maohLZdHrvtNrY5WV4pxQLFrGMUTdCstNVPzFa8C4wGQnRsCHV",
  "key36": "45sY82VeiesieYXk591i6h5csVCavdhL79vpmNFe6M1jLbUQtRKvhe4EEStgojzMRjGvnrhVbXmwozHbuM9DoqTx",
  "key37": "5httVzLAtj6kQMBYgWGcG2uCZsBFV3KL5ajrJXgcrNfzrau2ALK5koiWrpX5oaTATiiCgMDFsEUpRKND6EWsq2Pe",
  "key38": "19woKttf7rfStM4aDJyGFWfxEvExZ1iCjmPqmUSZHzUGf9Qng65asqVfY6yhvd7xtX1X9Dr5pfAkaCNA82obAs9",
  "key39": "22yNTDZs4ZcuVBWBr7zjSAkjaPojKsWkPi8qQVtPZDQCYoeHJNbavy6iktsFKfWBEpKzDfNpDN1z6w5tYXSrW4D1",
  "key40": "9CdRkVXxexyHAR8nGaWgeDcEkD4fEQo2qbo1HxCeFXAy4QQFGNmEgsb1QgGeRVHKpUhdc98RnQHrgYmtQjasESZ",
  "key41": "52ukQfqd9vmK2BWwxdyU7EykFPrUyw6X22uLkoUFzWPVz775RTwmVaQVtTkZW4dc1izCofnuoNw8wWiRxYK2FH5B",
  "key42": "3BPovceJEtt3Bx8G9MrTzXkTq6is32okV2wHQZ7mFP4TGXtiCLDhMBoEphu6paQ7oKtUrj6YKrGEHxEjUSY1wDes",
  "key43": "5AJr5Mt5ToMwCuks1Hdp5u4pfBEkkiG7ZedJUg4jY4MFomTrTanQsi5brSU7PiBXCXH6441DyfjRRnEbaH4dhChd",
  "key44": "4PZYznmJmMtfi6yPRmWU4mUB3gKKNPmvf2JQTC2gpi4BeTm3fKxQNmZrtSbmTkhesdSNcYWf9EtxVANkFkJrFbYj",
  "key45": "5bPN184NdFN5tKUDxnFkamXhbLvPqinzuUDVnQbvTfRbGCvKJWHFwsYfDfR7WW1zwnLNkY3bbhBwJ6LVTBfnPM6a"
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
