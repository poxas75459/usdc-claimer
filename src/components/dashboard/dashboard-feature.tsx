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
    "3qBGwTCEwmniSBmS8DDMpSC3ns4K3BHFYFXSp3bHd7TugB1iYMK4uyreMfrMhovbvbuqXuyqMR4K6twWCTWLPGEr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HvcjkeKQ3AMLtECEQZPndhF6D46VWDBY2CbXWZUkckcYPDfPK1jcezLWXYooTAmZm6cckQhrXtvN2FGnhe6XSh1",
  "key1": "2FgGDUx83fvw1TgHDhFUfU8MV9FCbiHQKwu3vea3WrmR2arUEuqD4nX3ZK6whLWUj8Lnm8aewQuv71BedhkVRQAi",
  "key2": "3cPHZZ3usXt9w4rY1bbzQFBcpMJ5SpWTyNhxfdkjUxCPfwMsKDoMs5vaVdS1YimRnf3VWdESj4WnQYKrzDntBpqp",
  "key3": "2gYRJmHsZmwAuY8Yad9GnMPxzNVSa6xKipNNkPFYcC2exQ3EY2avmqwwReX4ncGPq1quLu5JH6XJXmesvMmTX1y3",
  "key4": "4iV9G6J9MJiSojen683nnkCW2KdkdZyqH527bAPJZqTFTAFV5VXV5ZSL8aXC9DNCaDvsZ5q7cibLMH3mEvjx1nSt",
  "key5": "3ub8Jv2ncXoPQ7TTG6M64E3Agen5xKU2piWqjkf9fN8RoFAtZceAV8XvPVVJcoz5HXgaXSRpi8ADbEikqmRG4mJ2",
  "key6": "5YKt17AhtMaw35X7nHKBF6XSorQiJGNPUgV7yf6CxWFsLMbiNmd78LoEtEHWUJwxYNVeKFJqxMVDutR4rxqrnRS4",
  "key7": "5cR9Sntpkwodwc84ZBVF4g1PmCRxTaAH6EbT7KA7qRKijRyYvYyBnaTZd3SSvyauB3E7pCko35MNTQaY39qFEANM",
  "key8": "4V6LjJyxy17bNwuCqdJs76UEQPvvhBQEW8A1hWnABAtkpaw8XWELVHNzV1xFPZVuX1AgcjgsHq6YqN8aXBpS2fRf",
  "key9": "2i65GYuhfKU9cAHt7cKgz2tDbVeSVzqMtb83pzkpcL51tRgPkm7saWXjGwr3WGobLBtGH1gCXf18HJxmvdiaEcHW",
  "key10": "46fcbNCrqEB6NsEdBUxRjrLTHkvdqujCkpHE7VSgQUx1d4CxhNwgee9AoLMuiQAEomZhvBZNJjEcY7hvPro1yWg2",
  "key11": "36F58ViZx7ZJV2TGo1kdDfReEfqvd7j3Y1vDQ8EHr6MKZ4zGDyGGpT1Az6bn6HUbDU4AjNV4dAbpJ7xmA5Sgdq62",
  "key12": "2YL4dtRcWCY7zpksysMj5Bq86mgpUMD2hnQG5Bo2EUk3LS3TsceWxqw1Q52Zs9Enexoh1PhkM2HzHSqMkhrFUSXm",
  "key13": "398rtCpxqgGzyFS1JLPH5Lj8wB4FooBC8R7YxoWN8dqb2wa8uFVPin3XkPYW3vm86JYcVzWPbbyJ7tjY8AKs1ZR8",
  "key14": "CiKxMeFo28bovvdRiF4y7M4TnzbkE6N8YsbsvpsNdrcr1WXKCJmDU2qPikgVap8ckb1A1UoekqAd7JEq6sCT5KV",
  "key15": "3E7i39zQLkPB8RT3gqqUUeyiCaSVNzFniY2Ym9W4pXH8ZmX7yyzMxqoQ2jqReuRZquLZYgGUZ3U5Fqsqd8J7ut6R",
  "key16": "5VUFcMFxyRxYjCG9sQF1Lu1FrBAgtXRx5CCGwrUGkdfGYUgF4Txky924josU6E9xd6DP2DeU3BToUmjEkSFT2xvr",
  "key17": "QKqgvSdWfxpGdYz5TmxUjExkyHYkiHLWDqxdjzdFZWUaA6hGSPh9Q1fsYTcPHfCYHWs3inwjw7xJE3gHyPXAwuf",
  "key18": "4divbjtF3xNXtBePD5cdWjWwMKv1bAnvQMVvjKvutUx5hxJFags2EzRgoEbmfWBNDEzKvsY9qm4eaUEhLgsicV2w",
  "key19": "4mb8eaQojuEPBPTSCfP8rA6da394tE29yqXPHX7ZP7cA6pavoeExB1gfx5cr9rkRMNRz6FxdALfPD3dus2FWG1QM",
  "key20": "3aHBSUTs9VScVnFKa3YsCbFjxoTp4CumdmjKYx8FHf8rxhbuCHxPDsvz4xiT9cnaaSXBS5Ac3DJpRew8jegYbsSo",
  "key21": "sqfmU6FokSqhQ2qUbE8Xt9Hn7GJbXe5TJ2uRfckDwqjSHr8gmytf8xN6hqGJuQEgzBJ5ZJh9w71BXPF9NV52vw6",
  "key22": "5SJ9GKPSNgqgTrjNU5jDSTxJoWGeSnpX7Z1jzggtADpbBkyanFaKQiHafhhEwjfbQH23BgKjmCziaK6tGuGuRK5Q",
  "key23": "5wSkXwqhGJUmyMdip2JVaTfp9Bu3krCY6KQqCjegHYYMX3gRAkdGkSKohVE1ZxJRwgDSiaHpEYhFSFvoXcQHhn3F",
  "key24": "3xJUXsZz5cK9t2iSxtu82fUxXwmnToyiuKznMhmn41jDo2wG2TMeFogg1BxsMcq1mqWQWEbbiRbd54SCrW4SvPJv",
  "key25": "2DUPPmXYUcTp627jF6LCWaHNfCA4fgfyAeZ3CFa4inAtrSuubLniKEidXCYeGb1n4pYavjueVPaG8WtkJRrJXpvn",
  "key26": "DYDYzB5SfJpytMWtRAcoGjuMidRK4oDdub8ozrWQ8KBxTnAioqqVqcHUAdSQEQXUFF84ExkGnZqeDXTK2e9SfV3",
  "key27": "7gKvRgSkKTqDfaw1QDqLL3B5HC8gkkmPcXcMMmtegsQmjPTuT4Q7Rc1U7nhcuBMzLtdbqMdzoS2AHaiyu67MpVz",
  "key28": "2XmegryZqFsncFeFJVbiCer1EsqYMyrBb8KTVCjeWbPD6arBU8yK8TCBhgCeFmUZ6tnE1nc6CYqFvnTeczemCNQ3",
  "key29": "5ZC9MWQdrLRVEtT3dyzVdZwaDKSxSXdQGgfhYjvmYEQVgaQngTKFotwpoDExTfiWNS6GutrDtfHCWSn3HReqFMzg"
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
