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
    "2NNMGaqjvLgGXArWhqkeRdPoNNdZGDWrMKXqirvAzvLiisVpZsnXCSPerYvom4BWRqdaeZT3yid97NZBPyWVUPWb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s5EKQRj8mVSZnysRwCoaC71XH6qYtFZ1owL7cy62TS7XfZNtCeXuvXPAzx29zj5Yt2P5YLRBtya6DVi5QgSxyNr",
  "key1": "4o7qbXQWUvjhwc7ddKTzjqY1967n9tvuNHLbr4Gwy7sT3hjv4dPuizARzQx2rt8MgAw6Re6YgadEFkJh7YLnTv9y",
  "key2": "4ABZLBYcNVobNbjEC6KzPHUUjGKtgXyPiQdQVbEiGPAQ5nNbXFXizn6EXWEaT3kw6xXK7gPcV1J7pjfxwR4RGjca",
  "key3": "3EQt1DaT2iYcP7bBDB5L3RiaLkgWHtTmPXoqD7jt9Yv7C7HHUaC8muvoGiMDenxCYyNAuXCpZCFUJGqXPU8J4tqR",
  "key4": "3RYDRnLJWY1SM7JorJUYg9HYHadnD5Fkq8edDVGXRCTkqtZRBpgNxPb9nVg54pgGMNkjDg3KVRf1jSbqBYBAipFf",
  "key5": "5rUo2hktouqo1eH6wQW1HBAMV6DDzRpYFS1fPrj2LyArcD1qKWN1ZcF8bggRfYqQeDVFGqQfiYW7b9v55SMquTNo",
  "key6": "2W2VRd6GCp465FPkTHUCXV5D9UXvraBm8YiAdZrNwVZn7Ep7Yu1mhijJEfTfb9gdMZjDXzERRuBJHw8Fkns8Cztg",
  "key7": "4S7Wk723nHhMNnJCQfdsYa3WFPbRRt4CwvchPYAvSXYLnzB47nfDcrkN6DoMyEf7gYTvhNHPL9XejDNyehiEgBqC",
  "key8": "4VCMjmNozEnKsFkjGdnNZDTmFDfGPVtv3Xi14FvUHJKjpriVX2pDUWavohRkDd5XveBKwtzD39pKNhYSecKCgwM3",
  "key9": "4fYpghAqQ9ZVB1sxKdp87T8uTKGGuf11ACZis2vSMSyMQvxxrumZgfrD1zBqMDLzzELTJ6YtAALVW1TgsUuZcsEH",
  "key10": "4emxCMvskHJ4n4RtPzCdJ6eMkSzoAG4p47A1xu8CxEXhPVg99YvKe3awX9NSeag9YrSmq6XmoaLRmfFPk2FHd2M9",
  "key11": "4pT5DEVhx3x8oYMwscGNj5RhhEex1CBLQGiX3arPRmTxUMC5cJydZQ8XivUwRJUE8rHcKjLwKMUZAYNjNNnMSTDx",
  "key12": "XYXscncYUf6nNqPiwY9ifPJVFtY5GAA3ovLT3U8jgbk8ZmzyfLAhnhkhivpZzqs74yh5oDoPmMYrNNtNfekXqK8",
  "key13": "5nQsEVB7Y3A8dExQs19LyL3HbW14GfUztJtiQicwPqxtz7YafHvd8tzeEm9jaJtkCzePHEbJKfzCbr29giMWtKbo",
  "key14": "5zo9XbJKw2deCR6p2JqqJVhV6bTQ6c6JPEaGsXkAKfiqkFcf1SNiZhvtzaEub7vmLFdkQovc2SURwY9t3jhV5YTw",
  "key15": "2QHnePL38QUUiNpEJBz8Y7L493LFUvTAxLiErfBujruojG7GtPFRBKYPS3BRBoAjcRu9yjq8smbB1hobNwbza1JW",
  "key16": "31MtfArA4kNvQb3PwScduvf62SnrB98fWg4Ru29nZpV3SVUN4uqZtoUfhG6ho4N1Hqz6a5GpgJ3EjquZsdK8SALc",
  "key17": "4G52mH1J8FM22AUCZq4rKtmAyhU3oD81FQ5yUf7sjTPVNeh87BSUTdtDXoHcYGKWNWoddiFRE5LNaiN7knqGD3S7",
  "key18": "E36op4bmBw1nhGtKY8Wd7RHGTABcPAAHD6sJjd8ZxC6dhUKYtuFCqPUqfmsFYZRCfd4vSTY8zCmHB3d5tArtR3s",
  "key19": "PQ34hkmC8TVriRwXN5oKQzWcpZ3qrRcxqGePh189T5JYzWSCZBx6FpP7bha2R1sT5mcHhxchM7E4bqwXd4HTZc7",
  "key20": "VpEkZXEkzBwz5K5vTXHa3tABb5csiSor2hZkwkGSBSHTRjqp93gFcpiJFDqd2Tmp1Qn8GEti984Z6hSYBC52put",
  "key21": "zzMkdX4hWwoeuQBpqxzMXLMrnv3cQunPs6w151GYMyHcCbmeqXcf16CcJsASufwWkf1UWzBWoq9kRJBYktQ39Cr",
  "key22": "3kU7edofiqzzFXXPeAvaH13ai8vax1E86TgwfZzNJdkdhArf2VHqy4AD2ot4qcpJgkQKAAny6x5iWWsq7NoSRJjg",
  "key23": "5aSEj8kwYrnm4iucUgn5brVnYkgoaxtc8BZk5Mv6cRRKREwJ8hVxQbnUQyfJx7RewfBXXiYd5S3XD8ygjQP5ndvP",
  "key24": "4m16pZ4ZRV6YoU8TofRVNKBiHYnbqk3oqVxQe8vmtSn987Rv81JrBf9hwxrQ3aos71xARs7b2b2nb6U6p4Ap1qyo",
  "key25": "4XrSWTUrZtdTeE57oBWUdfVkikh6mRzznVTJiX6Q79b8JUWVzNxm84BtfnhaxqV6DewRwvY9fe35Uf5vzpk5iuSH",
  "key26": "44dsNVd2YWJdnpUiBEwaprjWhmxEonUZKfbgKzSt35armhtKLLdDW67UxgqUHmtFQ79UoFEXVP18CbJ1xH8R5rjz",
  "key27": "2pGHeRX3Qc6W6713EPe3hbhXUFWT3zP9feSLquaK33YUnJXnLCDb8QvoevBzpcxupj6wofqR3q7JPXFJ4dgAZ2J8",
  "key28": "7pu8shZ9P8dYJYumv86qwxdUtKA332iJzGDth8tBk4C9iRGphUU1obgcG1VzRdDy7n3Fwdh9QvvUysosqTHHxhs",
  "key29": "3xFC2wJy8Y7iRtdxpUbGL3wzNcosdtywMzwGjjhgbqsoCRSGu7kbStipGUD7zR3whw1th4YefzwCvrQmv1URHLeK",
  "key30": "wHfhxoJssiiAspbNnD8Zom3gYjrUbwZkdLQsAQ9GPHHzvtrSfAgZt9ukYM51aGSc4bB76261P4NyXE5iNDfwLD9",
  "key31": "3BuoqRMvjsYwe7w3hbkLot5dnnQjqa6PFLxyCU5BzuaDTaKmG9s5hU3chMJ9FhXzBDqqwovQf8TctmZkaNw3RAYm",
  "key32": "5LYPuVJth4ruh3KyccBqdr69CLpj4GcmCLcsiDhx2V48NT1811RE6WYzCDyb8669Kkjwn2Cid6XfLcSdjfUZMPNc",
  "key33": "4ow4YRnExNDSWRpabYz9MkXSmQviVeuVUqKyjvuK5ZByfwMxEaiBpVwuyUwCNtymmgzBqUoayUd5gWZvoSrX3cUg",
  "key34": "RVXeG8QF2ihKbvZ4DCPFezd76v7UgCGoKYjCGSPV2f5AU3NAw1bsjwPS5rkuh3BnaqnvvP6Ti2pHxfSRiBBL4Ra",
  "key35": "21WjhQ6K6mvQLJbFDgvtPsTRbBQaLG1iLaUavpE6aaCtLdpqfV61NrvvJZiUDXz8aWkL3QcNtinin9UMeY9AN4Y3",
  "key36": "3D5AKPYsfH8V5F5TszhvH4wfsnnShvwumxz4eCxDiHV4F66J8E4RjjhLm1fMWqKka1hmT5aDXf78vCshVcebkrU",
  "key37": "Vks1DGirK1oGv2PrDBreP1XzCTAP5MfPZYcKC5uHK8ysxxKjzYCZNCyA4RBtYmHKCJTKefHzvv4HWNXparXB5NP",
  "key38": "3MUnL2D4XQAbQCqhGiSk4TdPYfvo8MTh8Sr5efTDzdpcwvfvHL1rGQjFJyJUzHGRmjZqAH1d28eRSvDcFZ7XWvyH",
  "key39": "4EqM3kaBNv2UpUt6iEcWcQTvnXaVQTsFkyXLQwQrUtEnsqj9mPYcosesjAQ25DQnPYjeNmJzm2ssN8FoUBhucw8R",
  "key40": "5xUunch75dDqGLtYSoq8hKc33NRhXSpieJMV5hdTTWdLpZCYSWy4F8b14GW4jvtDbojnfq3JMKzuPhpRiTVb1TMi",
  "key41": "5NNyqdtJPJiSps1Qxuqr9C3HawecVhqR7xpoZ28T21Y9Zy6oGe2vcYFYP74R6vGvJSHXMchEYa9nBWcv4V7ivfYp",
  "key42": "4noNc47YrfzB1kyPLA4DnMsduHEEAZQKnuUs5srSZ2x8oTmaKqjNsxPsRX9bCaYYacLJLnBHc1gU4UBXxbGMNPez",
  "key43": "3n1WjGRF2kJjPWYChuNdZYezmFfunsNQbgbziB6X1n6WQBugr2B9Ugkyh57AahY7cTP2Fdvv27Jb7DwC2ywY9uEH",
  "key44": "5Ld6TEtPP3eKqZhB8zVxmF9YPVMykcUYbKVp2jUbRN9NyA8xweP1kLPhyg3qDANt7Qymryb3YcJmRf92rM3GCb6c",
  "key45": "4N1NfGAaqLkyH4VHhZ1ADT7nuB3i5Mj83mKn44QFzrMzp6TfGJupRcAJXmKrwuMGj5kGDEUfrxA37wEpa3BGi4ND",
  "key46": "2xhBXZCUUnANnme1vN9DwJV8FT1r69W917zPFSoAxdzKMyg6LHPCU7moCthiRUS8okMf3k5NY3yhkRxEoFevYzbr",
  "key47": "5ZW6qsFo4NRbdM4UP6ivLiauDKRRywfBu3TjTCpjWdsGRCHqfK8pD6R3C5F1jNF8qhazjSPFTRocyeHDCg6GvMhs",
  "key48": "55hxpxmpsEkUnML464EZZqQHYy9PBtH4xsHwBxAUvdMTQPL6KLwWvy5VCN64XKdQdY3qxGvS3WmtJQ3ocCRL8NBs"
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
