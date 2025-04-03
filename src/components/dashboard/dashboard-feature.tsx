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
    "5u32JZ3DBXyiNr2BpuCRRfVp1SYMXh3918meL8tGmC65rhS4pT6Hoj1WLePUZ5v8sXmpB2HrtTXHKN7Ezgy1kwGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tRMqh9KzjPKDGXaNuosNopKSVsR6ea6B2uYiHkSKg67JBZN5ridK4gTeEdYhD4oF6qjraRELjz648dw9CJK5EZA",
  "key1": "3dVpGVJdjxGrtZEXpeyMzfQW6WRa99ejgVsLd1UxfKAbApMPg27bkiDg9G58CeHHwdjf8Ja1yLUHxdCkADMqUSvC",
  "key2": "hTtb7AGTmJ6DF395Q2yXLG636VBHxzpVWg7J7o5MDioTkEDJVmvXMWwUu92v8udH3oJyqFkF9BxK3GtNikEZhiR",
  "key3": "4zJutXTxMYsfPjNkQ5sADLYBFR39oY1scQ2hgfaCRciYRDaYB13QgksoMiVBBH28Gdxy9CQDzf4LbSM6PMzzBCkS",
  "key4": "3knadutWCLwb3kBhuDm7gA5jNSYDydrH8HR1DQA7nMEqAhCfewcVcTX7E6EcvvDEGqYSQCMZPY1NF5p1KcgHo2o3",
  "key5": "n3TWcKGHdF2tJHejiofMHVdq3P4QhimZyNY7CVKSsPdART7fG6Y8HAqj9vvtRccKHP28UKPQc6KVmi3sfwoaefP",
  "key6": "4JFQnYgfoC2Z8SS8Cv1XWEN1gk4xCCQyVpw7PHkNXpyW67bvFXYVZ7sYZqpURXdupfVabhLrqp6yCfSV3X5qaLdq",
  "key7": "2P72bF4BSFg4FhGp96MnQQfvSQoLz7xjXGnkYQ3RaNWHicSLWQ5N63qBHmi2rgFy7ghZaVtkj8d4EF1ukFjckZZx",
  "key8": "4Gk5PthRpAB7ciWfw2yHsb4Y7CGD3W9wNvciZjHSCUPEH2ZcXGryxmtwFBcSaswFJABonGYmUnyEzgNZVy4ugE4U",
  "key9": "2LahrfpygBcaUA3Yvm9eSdpYZ6JzH81ZS7gA3RXs2q7uWrycyP8dARzD5FAbBnxza6vfNPHG9wy8V97ZHLh65RAu",
  "key10": "3oYshHBiGtRWJZ7sUatyg1haUwJCZ1F1186CYvajYrvNd4uPuF6iaxrryxhnAN2STRcyYhM9p5B8a2De1vfJb6DC",
  "key11": "2bKzwpFrHL6NGDdSQgkm7b5sYTcpJsbypwwcnxeXjH4rM8udDjqGSgpfYgz26C52kXs2F7svcWZDmKFrpmj2E3qU",
  "key12": "3evWdmu1Jok7iSnFhmSAAgbEFjygph5yfcB24NGBZvmoYTUePRJKo7rBBnovkUrYYx5mSE245bH41A6k6GmpcUaa",
  "key13": "3vf3qzyzRKzFniiF5jHVyxyi9DmWUuiZZzddnVJpjUqs3KKVCiXxwUdGH2A3WPxRs5RLfYeBJvucktKCwsyXg3P7",
  "key14": "4v1wy8zeNDTnfMgCdTP5VYwkPWh6kF2pxYmVufunMxrkWM58J9kiVNs8DhBJAuiEyj6EUQaPGXwkPJnjRL7WYi2y",
  "key15": "3YmbLVfLSjWMnqrtEviWWptvHvfPjt4i5r66sKCvqr7vnSqxCMetY7Usv83XVaG6pDdj4JgKCF3QDTMkACUzuspN",
  "key16": "y7wmZxTYtKXe1hDgyoUPShZHovvJVKwp5dm9uZi7pRdMRS5DoXTEsezuDw2Czw2QnpQnTyRPjRhs4by49u1eebx",
  "key17": "32FzSHSs2rYxeP5X6HoHGBWiRUjpebrmEBtppMyCN3ARtz1KLrZHra1kao2XoerT21wgXBbCjPiBYxXmxTTpTUUM",
  "key18": "2u86VAsn9kHj5NNUKB7RXqP1uGCNadp9swQw9AQDAbpjC1vFNhDDtrGRfdCQDsvgid8jaHTbgpUa4avPfV5FZmwu",
  "key19": "3XmW8zHLSbF1RjtHD8NFmdDPDXtZ7x7JQBRAouf87KPvvc2pTuu9tzW473zLVHynjBHHL2jmAemmfWJqtZ4Fr6nC",
  "key20": "AJPB4sgXrToBnqZ3MMKr2GmSQnXVmP714x5tp7VMcyDrRrsaCBMwpfwxaLPcng4oj9JJgZzWL9nZUtY5S6JNotH",
  "key21": "3vLjApVWKmtYecLUKhzamAsvtJcUNwEjxAVXjK8JBakswRVqfg3Qnfhh9WrtE2izrd75tTi1Wx4y1ZvmKL1wKSiL",
  "key22": "roEvLtYGw4WgPiqxS1A73hvy1D851FL8rZ9zK1HKMYk3fVYWnUqNdH1QFwNcfwpEj5XBu4gJm6njbZwR4vhHK6Z",
  "key23": "xGzsCWpvgxgSNXVjZnomRGhCqRtA3ToDiwiTwf8gfmcR67WfEqnW9gVJdRgCSzzvoWuJ51nDhdftKrWePYs5LFP",
  "key24": "wDMi16krP9WJVN6sYvjNsSCcjqyoL6DhJ25mKSZgKJhnmgtHooVRxEwwVGTbw2WjxLQKiaSHv8xQAsqoLkUyRUD",
  "key25": "5vU8Kpe9KdgoNN6kQaAqhA2UeS3ehaPigKJwB1sekUWyLgJUVbZ57AiVYrmvUmKaLBz9hJ465tVZ5mNwhsbC9znP",
  "key26": "6oPsufRUr6ShjjWMsmCJg34Vg2in6x9mbXzPJyk9z2gc5xRrk4ceth3etsf1HaFWWCFpXe7ckNbiqnzTd6yNH3V",
  "key27": "2XSMEzq74YCfn6fHeREtJFGjj8vtG9rG6cX9ZVYBRr2Q4JYyCJXBjgqJEZwohhvTJehrkcAvZxSfpiexXtkWEMsM",
  "key28": "23mPztTXQoAhqFna7EEemaMGjuMNuGNy6nuaeUcoFZBKspPDR1X8Uas2evN3eTK5jGmQrqokJmymUb2GQ6uxjb72",
  "key29": "2ydbF2oZZJWXE5oA2HvAUC99wBJFCf5Dg4AKWcX6EzV6jW5nySNJZXdVCQ9s76jUDLNYHym1QUdK68pdpw6FoQze",
  "key30": "51i5hreRygDAxU1jsdqMQPfgDWEhUdJ57RsRJy4r6XbMgGd4aqctBb4Z2jpPzoojQ4HbcwYpoxDnnsPPJjUkYmaw",
  "key31": "3yZPFj3qbYJJoPgJeze8VKzKKdbrK8u1NMwCSQw5SDgmQwETzxgdcDA6s5n3mKuQwio8vP5NPa1d7v5ai8kg1xwo",
  "key32": "3XuhN2XaH6wn4rPW6sMHKdf6D162kZdeVYJogmtMiBEmQeEoY1iMSNjzcihdXH6ZvdTBLg3MbC2tbhxC3bhuhCT",
  "key33": "4saoBejWnD3RDKnrCrYnmyFUpkAqbW2wP49JXPQWsT5uVt37Et1kqnf8DvBUN99GniqMCYjudV5ykL6aRhmh9JG8",
  "key34": "3XuY9DrqAAKWYgYhknfYnkBa4TUo5urz6h2q2xa2ETAS8cmKEjLaZtLfzBeTAXg1s9JV2dFz7KnFivKNXzS8wsrA",
  "key35": "4xDyUy5eQXEt41xTh6JVj9xGbwG1ubBHUde4p1bsjdtj6131jXo2LZaZ47i8YVMGJXrgW1iF1sA7NS4DH4EBuBsz",
  "key36": "4DvPwTmzKKXKGwTcUvtD7nth6fSXCvJyqUGQMSp9sZnUXgqatv5LbtqWhWVEpdiza7NvQgAk9exYnVERhDUbq1ns",
  "key37": "2Zm79v9RtqvCprvRqJavKXumGHWKfNBwSpJSSoTvDe26Dtg2beKEAeT7tzr7PugZhjZoixujhpVfTm4WTTDDwADR",
  "key38": "5w3Wcu5jYyes3tjTdPpQaa682v3aXpmki9qEgvKnSEhh83ZKF8WMuwKWskggKrUdAzLeFWjNtn9QhRtL36m9kjNN",
  "key39": "BZFHcAir64Yxgj7KMMbievdk2LtxoUeV3KjZnqURBw1n6nZb5876FZzaEJya41Etu5CbZYJWcscNgW72ZYBgUks",
  "key40": "588bjk3e9KAuwXauMVyaRbtvg9iccpcKKy6z6qRBjWMmGDBeDi4wYAP2HemzcxCtJJ3u5b4BPHBmp9z3GVdLokNP",
  "key41": "5SDCyNgnkP2wnFnr2Xt55ScKciipPYgZdhWnn2DwXPVSKFQ6hpbmnyeE3incwE93d8u9F5aQGr2VfcXRSr8tjQxN",
  "key42": "uiVZzqEXiJ1rVtQbYF8FbaekPW4XSBR7Fo9XHoGHnJWkTK9ze3EJZXHfAawpfPybPefZT6v5YxorbahErNkHst8",
  "key43": "5dxkpHk5hBKtHUDHCbBe5qPoT4CV2nzZbZj1qq5QxBFxVGLEFaavHwfhfd8SP4jg4EfKmMrauYXevmsyhFJtiibk",
  "key44": "G5fMrqB8FRctx5fsTAurjvLqvycUNZvvnJDrHWKZSkGdrdcMTwFegrWJjwgbWrVzFEiyeHVJUiqwnoCChhTzY2U",
  "key45": "4g95CNXRrVvdN83bmYDkbgicVXuCDvXK6a8vKbe93PLVGUZC5oE7s4FJqukm97j6qwLN9WGifaSjR7vQJPiZsA9a",
  "key46": "2cT1iSWJb8Y6dZddDvK9Y26AuZifYvdRUnBwb35Up9FegszPNKoNVapAVm6m9s2JDVXCwLqSfPpip5kxCwD11dRU"
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
