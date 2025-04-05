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
    "PCxShPpomTYTmeREQe4R8TX7tgKr91b8qwKELUmJF5fiFV5kTPw6cbXMWeb3hwAh2Luiw9RfMP5DAR1Hkfezgj7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ct61DbWqMuXs3bxwpAYPUeAKqL6EkESAcZfQXDRwuuY3RY2p2Czgpr1wumPhqWnonMPrx7e1jcXPkQJL4uSwcUG",
  "key1": "3Tm1YQySyazXzewpunG7G8PXyVT1MKXZ3H78tjzBDLhprNVCu5P682mJ9EaSdBB7Z86W4PrZqTLkJjJBNZwkp2dg",
  "key2": "UWuoXei4uTXewYdGBRXVLUvuXXfYLCu3CVQv9ewz6kXbS2MMop3xvQTzL9b4GSQz7tB23cJ83DwsVHhznPYNyg5",
  "key3": "5gXZ9To6VQx45DoDMsTvDpCuZLw6g9gjEC6ceR1rT9d93QLBQJ2LBoEZ4aG1uFsrceRW29KLEmyQ5FK4V8Jrw265",
  "key4": "3SFrXFAHnzUH56pquwFm39W1Xhhu6bFBpHngDr4h8LeGCjgzNgNRUbdKBWqQtaPT7EYTXCiih1eKy7n75A51k7us",
  "key5": "53HJFWa9JsXrC37ejQQgfh91CKxucVf8cSkhPw3axWiuA3BKpFFgQHRgfoszyQdfSBRcs66wigbnk8Rq3mvSynE9",
  "key6": "47NXZyYyLEFwCfWQzmgwE7knRukECnc5VhYWn9t5ZrpyGBJ5yhgNQBA4vfBeNw4m1oybAX7tWEkqdq6C7NSwKN9r",
  "key7": "3AfAtH5a23aui6GdFQ9RRc7TnW44ixaTYC53xxzWAfqtdLr4ctfA2vPT7WWaxtCEF24shun8LegDmXKnoP8YiALS",
  "key8": "4r2VXvcE442AwU6wYgSGFCLjtf1YifJNPMTXUMQfHsFH4wGrJW6MXGN2KaV8Ac7r8R7HTZ2mAb6q1AL8GswkddEt",
  "key9": "2SY2uMMVX6hYME4vN1NA8BWsM6nW4aKzyuqcTijcwxBGkAFLvAeA9VxVDNc62TfZXMdrP2a54JNV32SpeBCLP7Lf",
  "key10": "33WnpJ8qZfKDFqMg1zPQL74zMQug6DKksjiXENYLGxKu5wT16SwHQm22HyA4ZAGcpoHBZiy99XK28vVjqJmPnCYg",
  "key11": "4dntV4BtroAXj56W7XhzdQo2nTotaipiJ8qj7WFNThLNwRNHRjSZMk6RakvTyYL9tzhSNfTJGqkPj2gfVgnD7iqn",
  "key12": "4NEse6kb3EVeRCQCDSqLvARyZwiTFzK6ASSqVKfZLf6kQV4fWHKAvuUuTyM2FuFhDxunhbyK4CCbfV9McxqGrrdp",
  "key13": "2znUXte52ptT2kpZ4feCdGLMBUK5wots9a86HYG5tnsn4Yrxysq3433HzuV2X3NgxeMecsekR6F1ZCqYTwMTYZTU",
  "key14": "39rfoWwzcxApyEKvPuVbzYQgVbCRJscGB4EPf9EoM9mShHPefi8Pe4LNiN9NVSRoLSBEJsY5PfmGeDy7HUMkBRF",
  "key15": "5VTtGTa5R1nBbabHG1c76EFjEzSLoSn6vVTyQdPyEUmu5uVw4WdA7b1LUvXfGscawKiJ5SmN1EM9yqM2sk1gz8zJ",
  "key16": "5wD9ddqpfHs7dEEmNYDNi4U2oNFXqEYQh9sVXzUbxt79suY3bkKdNqruiSudXf4qy6CkZiDSjSiZXBSw9uiCUuGA",
  "key17": "2892VDFNtPNWC7fA9avsLB18XV3MkLhYVZeCHLXTQ57ipccmbQWYbLNvE25CXTNZAregZC1f71Bd2YcFCwbqaiKw",
  "key18": "7CSTMoajE4Fe1GtSbr8w3EuoNTVVCF2XrQ96eDL6oddNjGc58QZQ8NFFooe2t4u79yPA4BHwtigPwCovYHWCpYU",
  "key19": "5H3K9V43ZVo79hKnpPkHkj7xAJAUGzgsZDonbyM9nWprR28m7MeCkaev9ejXEtLiE8zFva3sbThQdmccPbkXi2fu",
  "key20": "2qnZCn2DU8STXvx6XrzLKYesr7gZU4cBaUaSnMgR4CVWty93Xr6ewBSqSC5wLpsBJCNNbBLRTBxzTKr3xDRBTNke",
  "key21": "22zzXrxF3AAUe9bUA4TsNJg4o91pwt72GAFyeb4nNeaE3ABQDjLc5ZBjDFvhVuGHGLEeUxX3DMHmpdxrMYiL6iLL",
  "key22": "QNR6QuzMN29e2NGgVuVenrrBxuwAxMkbt9Tdfi5qeG7rFohjmAWZ6RYe6LWdYrJTmC9zzDDQW1YLVZz2qJzs5kh",
  "key23": "4DiKpLRLQzzV6ADmqx4SPWdFiYTW2QJ2KU6x9YGyQHx3qZFjPy7DYHu6FameNJFHei8FYJiUGWuGcoBkXJYHcji8",
  "key24": "2ZuvHGZ3c9KcDvQyv538xh1MfKxutfA4oC7YrKYAzEFD1soy644z4pv2N8NqU9UETVR1vxB8Z8oFXfpTapi4itxq",
  "key25": "WB5DxTdKtnc4wKCdAWY7teTt3zCvVyDeG5phPhf1dafsYRdrGvkbrYgAWoudmV29naCTN8aV88KTiJysyBSNrAw",
  "key26": "4qpGLscfCWTrhL66BGX4pJ6cWR9xiq4MLXs52xZQ19AyGBvqbL1VYwviZT3qBSLYTr3jrXcz9taQMMgrWAP4mFwG",
  "key27": "44UUeHsUyUSFZJF3y77iFWC4KsSeCqtRXZ6TSTEV1TktbeBm25zKBzkHLAgUDm1ShJzMiJzhRzyBe1L6epxkd36b",
  "key28": "4vsLzHAMnw1vqVZb6kkKzNkd9usa6cp9ACh1n657YM8H9hSQRDAdg4XUaYE93UrMo1pEvE2viXBpVBuYEvUH4zpj",
  "key29": "8PynkH2o5miXyECfRLjSWrx1TPDyxtH1kBXS9L6jzbqQovVhshiLndFv6jUbQGEc7aL85bNvJn3RXQGQndgCV2A",
  "key30": "34o8ai287GtTmXXN4qURzTbTP2s1LUpzvGZUeJTVHm2uukSjFpmrmaZ5HfjWSvakev1RQvkw5XruDnaKrBrDkMYU",
  "key31": "26fJ3PbaH1sMxbSXyDN6SqPLoxXUMNCtaAp8RXbJuU5E2RbUTvwZHnM4huiw6v5nhqNyzEpRWfuQbjqcwoPbV957",
  "key32": "4wpcjYoH5SCbnmEHMJzbZmGpUUJoFdh7tra5bfdPJq83zoDEY5RBBdT21FvA8es9H8hwXWUVnYsFbP8T9D2MLpUC",
  "key33": "3eNGp3d4boCf2HTGAddxCWXqyAh72QUqzv9DugWxft2LFRsRMQWtnm18FGVeS4zN9ouqmXheB4NH4s25NGqWg5X1"
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
