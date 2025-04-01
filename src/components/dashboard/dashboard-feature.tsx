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
    "uU5CbhcxFJ3j3QWQh2GX6YyvVtxftVULDQTJMBpHtFkj8xArhZWiuhmDohKQpqHkuScxmvPrXidywANAJLarSN7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MJmZFPtKVA94MsQ7f1w9CgTcwXEruDcE3LAxETNuwmafa6oWVbTVBiNtqkKuNQHYAhbMBVZdKr6TMJYMioyTH53",
  "key1": "48muq19PXPkUpvegaV2Q8g8JbBGnosNbcGRTV4NQFaxCjQx9z26vkXdgmjMFPktPcmrBVMXXa8pJt76nMNTdPQ81",
  "key2": "4uDGrHejbTLDERPsdoQZc4tfYC9GN63t6NCunDxCWnYQtz9mg8H8acMCeLLsCy3YhHTihSjca2bisVqZcTpcexM",
  "key3": "287Zj9TyxBZkXkPwggT4tWKkuofKHEo7Zg2oWvkkjn8qtD8ShiRAfetLJFyojq1GRcE2mTtYDokY6Xe2emnZYxk5",
  "key4": "4ktanJTF4RW9CNf5P9H14sN3iispA4itLPjBqXLynR5dczRK3SRAz21Sx4MF8jcsTA4M7geEw3VfjFsgUTD5Y9um",
  "key5": "5bet8Vsv1AXVCodgykyU2hKyFbaBaH3SPT7wmSQd8YH2Sx4DRLpQq2Nq98CdEG7YYQqLNm3jjvJ4Xi43GsWJgCNt",
  "key6": "2khTiYTQGhTi5sWgvHy2QAmDY3kMCZ1VYwK2EhhohqjeYP6iQ9v12KRib5ZpaFhZ2WCxfy8kyHeGdk1Z5gtoaCFa",
  "key7": "3DQXincxnb6RDJzAe3jm5VNyjCos2YytpPTqHhoyZfzEk5dKvHBQX6p6JSj2JhZYxJ1u9BDhSAfj2V7fLGLK8Vci",
  "key8": "3wePpXVztV4SNnEQt62o4hbii41Use2JyLuwn7GDoewWv3iCPgCiPohUXCK9zSWF9G6MzUthXzrjkpc2DZ8GVKsL",
  "key9": "66nkR33SCYS8utUjtvF6QQKTvE5kuBZStfrsTzi3TReivAvCjHn1cE9xogVn4bdwuWYUDxzFFRqar2wS6MKM4MGR",
  "key10": "5RvEovtsHLVETuUXRPVYPawmTUgVKnC8JXuh6LrNsxyN5waaG81pHZqK5AQ82siJwb1zrt8dZrKgxu9ycfaR8xEs",
  "key11": "3uh6mLvVDBw65dy1x9WD9xy6wKigN3u4Wi8wtXXF5yPQo5jb8ZgcdnHMb8VKwVjYn54KsDkhbSmChsm6JWDq8sv2",
  "key12": "4Pv9YUDzfcBi4bKgiKHwYV9LPqyA7LyYQyjpn4BPwX4n3UqK81kFr6JqjtPPoE7cwoinUxbDHnet7X1C3jEuRibd",
  "key13": "4GxPipSwjDzQxmmkmktFfbETZGfAywaeFBAeGFvJ9qdxDyBs7DkPs9Y5QkcvMgaccmLxr6fWJGfpp6wnm8kY6U3m",
  "key14": "5dipAw6rgKrwRhc9Wh2frcQzrW2WrFbWbnENpwPTvjiRHG2W1BLNK7wvZ9nsPEMKhwcFiJe5Lfn8x75PwnFTzV6A",
  "key15": "5aCr9XnCux7DvKDiQTVQvHFwoexnb1QTbGKvKygGkr3tqGEzZzU3h9jeksnGAZ9b4xaVtSrCs2bgKR6645YGL8A6",
  "key16": "xEtHVdxMSeqwXsx9tH6bLpmfvVKUpvhgj3WauVWjWUKzBzgg4YHHEGnNGX5qSQz9w81LgwkLjXBPM1kDdLQkkGy",
  "key17": "3Np3tVWU4TjPMAi2knNoKgGWacEFiSy2GYWTGDn14DBBhBsHFBhbkb2RJZgAUxd9v82jf66Aqs6d6LLMRUreWCQN",
  "key18": "4v8bt2wDxiQinNLKKrT1BpatYhxu7psRwPD3zPPq8L4sCmWk8Jggbd4Y2rUF53R36DYgKrxuwJA1G39aUDBsbohS",
  "key19": "4e8ZfM91yrzDzSYggWBQHCdJJXsw4JLLKHUXVKr2FSqrdbSLqJCSS8jBze1h5dGKKTWjHUJ3PhgHErDKAHdYSUyn",
  "key20": "4PGn9awyFMpXxnQGrSs5fsYDno7mnS24W7nkqGExx6occb4v49vD3TrYFTX5nnuf1epEYpksqbSEY7uZN7ypBGWb",
  "key21": "4Q2uSLDhCe3jfMYmrH79LizSct8ny8RqWxmcCDWCEfthpoFge2RTVEnEskMce9m8PMjS2BBUaRZsiSbmQp4g9HuF",
  "key22": "5f5zewd8co2RMELZBndoivAok4tsTrUJKW3NgUqYuQAXUv1pXJ4v4nzZfrCimhoD4dBKNvtqawBPyuYZRBWiKrGp",
  "key23": "2SnoY52s4EzEZJa3dXv6T6nyNpGH8ENN1hbNuyFgNy7NuMiKLsfKmAJrMMoS21Ke87wigrysERiUZiZs6aLYJVrN",
  "key24": "3cpsbx1Hxvyi5CG9um9SfyHxHPWdyfWBnrgKKhNMfFMwRCeHihBGVVbWM6iz6kvRBje1RixR2pHPV6WqFRT36zU1",
  "key25": "5FmC8Q6kCf6pNSMX4nEUWQ4LHMLk59wTiFzd3xpMFxE7KYquUCvEZAoFHfEBke2D8sJbQT9HjYFSXbHp7zFyZb76",
  "key26": "43W3yKtx4urJxZAEXLWN8jFUy3SD7vyDCUWwjPQvttkXvzYHUkMS7HbjCH1agz15wjR2E7eYuJdHLCJto29vrZr",
  "key27": "44DTKoT83Chzz4x4wNwD2DqBtkjGu8bqYJ2mzxNnY8eGBhLH939KztmW5qrKtz2RzNZNySh5DKKotMJxRUPaNmhw",
  "key28": "32aAG9pGw1hKAGmvs6GtWopnCiH7yRJaFQvPnK4DrSDfCBZeYmvWTJtQ2bAiY87fAuLsv1kgZFdUNS581v2jbsSz",
  "key29": "38c4mJuGJaPYXPWp3m1YKRP5Hwn4gSK2YWS3ZibKAcpDwkqSxTR8sxQdbrV1D5EdKGGmT3byetzgpnbj9HXYtEEa",
  "key30": "4faTbYV9hakRdcyiExTX64AxHhrTgJiGBwquTmfwX5Y2sq4KMsArjfMhjKatUxkYLX8FtKqaDpN4ZWVuiRF6HVUR",
  "key31": "PZ7qdnPb8Z7SaAJ9Vp4y7J5epPDoETX6HncAKBzC2EVXvzCpJ1R91XKdic9EU2DjuZKS6TPPBpCqSmvbhShLLD8",
  "key32": "kHyBjGX6Zc2wgEdqGgzKhU1C5D9H34mhwYTG4J55awnBvpCcxfgvsnv7GxLmmg2iKwkECHtZgFo2UPGaeVRE657",
  "key33": "63mtL7pcVLWWVjZfVT85Kjid38qp5N47Hi77YWDrJymcsxiWqxpNBggs7kewvW2DKYznnFsFc2C3hFKp5VDGm3QE",
  "key34": "3RCusVCKU6LN3r7pJY5eeB36FjDLeKE3eozQ7AnierzVJuViGXpSPf3NNyZqpQ8BK5SLVDqic7TcamXNRBcBReNb",
  "key35": "5NFsZ4Po6voDoGpbhdY6AEFUtvBeKLMyDo2EGVS1eEmxAs7zZbLsX8pTfefRQDZyGZXUQjEYs5VFQLDCFkK4vuKy",
  "key36": "2sRDUchSV7Rng2KktZvMPxNn8Noxqak57STNRY1zTrgc6onWnghVuH6ShB1QxTKoRZoar4Aj4LNEEurhEbUTYa5P",
  "key37": "3jfwVwJWY67g8KqC7YMdXaj1Rbw3MuvxkdCNi8Sb4VKLZFJvPFKQ7ZGzLWMshpfPyuDrw2KvcPyuEAH8w1NPJeh1",
  "key38": "4a2CVFRmgXbswuYthBLVw3PXBTaBG4SdfEP4QPmdJtE8fViZKPDRtUH5xFd7LVo1p5nsFosmCRTkJMJmpJxQKTob",
  "key39": "4h8hf65Hh4e3FJXGSxseW4AxEL5XsVc2TUf9YVsD3tQKXb4yPywMY3xXMyQ2uR4634dLM9KpuDn8rCbmA4CPFGCK",
  "key40": "3KeDGP25r19PKDay9TJaj84tiDb3SyU1cBUvFwmNctc7tifH7Td9RrJ5Rkp44L6VXho9d76yuptVEschmAw2T3Gw",
  "key41": "5QDAVyFrV6hJUt3Wyzdze9R3Ghec4M3a3EVcQVviSNi2hPYJBfunPGFJWL2wd4mvUekVnZmhboZtsP91A9kFu4aG",
  "key42": "gdASgFu1PqmbXYDdWhuUcguzqTudUNNLmc6RwpqckpynZkN4w4TNtNPJddk48ALZqekBWGZypQXUr2f6JNCZ3wf"
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
