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
    "31CRksKYhPQkEUgCoMjqtPibCHbHSFHA6r812tWoKrL1GPLRkZdGCN3MWKmE3ovWbR4DJJBKen44t18SQ7v5jHjY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CKabxGWW9Pum5f1fN1faYEQGHoMZikXmg1JMqKeyogru5qgnNHcUy5MQiUks72hR8pbZyt2gcg4jHzUrMFTiUDT",
  "key1": "4KtSa71W9mEy6iJoTxJ2REfUjhCcsb4ByipDuVDLB836ChudA1f6gJyDAyLEXLSEWw8qFZ1rnzwSCdjGnkGYQevT",
  "key2": "4LiiTHZjdYqAYz4Mh2krFStDVwvjSfAn5KAsk6U3j2XT4KDVGk23ssjqtohqQ3okpYa6DqCL8Mt16jM4gNMrWgrV",
  "key3": "3ALiFMPdVHJYhjFEP93bUNqV7ow7ZhtcBcKVq1Eg5FXyYwmxCNNEWS2MmX5TUbm5oCHQsXx2UH9Xmgf3UH1g7GML",
  "key4": "3SGmnpkbAMKyJkvmcXgB5MBSJMjxNK72smWCzwfK8CN73kBaxHRzHtA8hGq6YR5QnubzFL1aqCkV1KcoWq5vnbi5",
  "key5": "3yy56XYuzXQJyYKhKLzMbUyYXkQrxjjRHiBMRwFDGNFodsjpc8a12j6N5QYmCEs9BSATFoWTLohNKoaFaXueLkVU",
  "key6": "5uPQD8rER73i5YaUjoVZhBBZ4joxKo6NjfFyrPVPjrhgnbnguQZynt6spNvKR4wdJtoPY8shWoE5aKsrLo1ZLCzP",
  "key7": "9JLsB13eQbQ43ocGNCbCRANVHPVxjY3YWJkhpUcMgcevRA9Hen4oQsgqLLdmS9CVEJvev48qasSudTPz5B2EZ7u",
  "key8": "43oxwGQTP7cxJHDSRFd2Q5UQ4KdFLBfAz7MshWrFWxNpyX9UtRPQNsQgJVdpdZjKdmwwZhGCAvhxgCeREJDVADtq",
  "key9": "4SzNQZahJmMAsns3nJx6h4E54wqHvUse7jGgPkL5q4pvVix1QBFz7i1gphWs7xETRQUaf46aPjpH6Jqe8fKtsiRB",
  "key10": "2MQ2sAaZgdbXvEnzW2GZXtqPLkYTCFFnpe6EtdP2uWcR9Vp5R3BcAdeJTn3yTTkn1n746fjfujmCmeknybbAjXNm",
  "key11": "5Nb1KQnxzhvr7Tc6YS2dMHCxZ718MjGsgZBF31aarRso3KUuS5g4gQAzBDYcKd3FsQcsDRqf1cMpJU6YohmRwjJZ",
  "key12": "52L13xtZyuSXEpDKaUaRyDeWh5hu7CbadXCZhaSQhgtbBQjKSMrBeWytrMVcVyxH3Mrw1FzsvXwaCVsq82y1s7gk",
  "key13": "33YRj2uE53PRBfjxUKiMf1u3b5Leqb1RrGW6VZTtNUFzwb268Qb7VJGse1nTJyeD6QoJFvtBzL7pkkzaAsirLq2h",
  "key14": "5ANSu5wt9fvqqVZ5JmY6eJ1cUKopNu8gspARxYi5cyJNRuzHE8hb8kzeg2GssQCsAwzfQToQZfvfi2XKBPmdpbxQ",
  "key15": "4qMDyg7dX95GggArX8fFDn7uSXrBkzhchYtQUWmrVyK2jgSP8xeXNWNFMPHwJ5Hea2PDG9atyVxn7qoy95kMp79u",
  "key16": "2wRrRkpQsafoGUVzDyCXmDGhdnMHm1kJTv4TDxe2PV3SVgwkJjm9R7b7BWtSfUKa9FfuTCDRc9cpcfDSc5vUKDP",
  "key17": "KcUJK1kzD6RgvxhqSZu2GXqYUnX9DEt14PVS58sqgarTyMtff3tMZs7Q4wVRz59bYtBbvSesmRsNGAuQmpfgXXp",
  "key18": "5JWgvFYc9R7WRfUxx1QRo9MbkNB2MMqaUqTCdaQmyrx9rsa2vdqmBxA5nK7HuzepjZpdKjSWM6Yz7ZRUYvRDiucw",
  "key19": "4NBwNvtqMK497LLADsxy5seSk7zrkzr9TqBP2N7GxmVeXeSzWkFRtjDPxotAJqsvBr2eG4wCwNWcWEKAqzrpQZsL",
  "key20": "477gxJ9hNUNia5Z1iUnVhmzXmvEf7sASL8bKuLZVjEL6dAVpkxHqUEHSfU5Hv3YgUMn52BSfy7YVbuBwMHFPxtkc",
  "key21": "3R5gCYA8yXQjGGzNHSwJpAnGf17imahNKgTvuX8qX2rMhJS1MXZ7QJ2QarUgf7S1Cm5EC9UJ1HaJLDfvsTmc8u4R",
  "key22": "3fcEUtkaPujM3eUy657vS7VWBPu2yPxCfBDvZQXe9NzGbExJ416upHrR1Z2KgexhbyJzXJ7q2gBabCNWvD5Y4qFa",
  "key23": "aCBBjZWzQXTkFkFyoVWYdPXkEwGr1orq32unXh7EHSBrspCjY5MYYb4t5tE9bB2rrazSh6YsYhK6EaSS6b4Vf3y",
  "key24": "4S8YCAk5dgc12jSR5B7aph248f3PoHCCZ3sbXFAKGdYwv4KGSEV5KDK3YXVCxCsS6H6Qikfn1Cm1NuXqHf3pMdAK",
  "key25": "5NNqeKtNjikzKgH1pUKmAtZ5SadyFWEMA5Q38M896wfw4em8pyVrMzTZKVziR2pKoEJKQbjQT5eyqqJQ9qN3WGiz",
  "key26": "WTmfGPbRYr9Xj7sktg4Ty1wV9y5skSFYhjD3bxeHPTW6iBDkrxKRm1JGSwYo932rTMNejJ7E9QQPQaht1Qh2uNY",
  "key27": "2MSSBoZ8SvBFYuMDVXsp2T8yBEiGamMpy97duw3KruY8mMeBjDoH8Jqwfbb5RGLCNL4WBE5XKHjgAp5ChAxpAg6X",
  "key28": "5hxukfuoLegqbKnFcpDimPurmVxGXAD32FcxjTZaKKobm1fHinXR7hQCsx3FcUWZSAVHzx1Fd1aqZsrVzchHYiiW",
  "key29": "f8bvZMQf9xRm4iqeEA8zTvoiAkHSZfsFrZSHAVSkDprAWRobhWV6yTaM6P7LBdrcFpn8EiZWiCdwZUYo1gwcHDY",
  "key30": "2S4ADPRUbdMfTwF3D78hJGyLv1prMPaFpPe4noaE2Bpu8z6oKkEZWWYiBJiFTHYfbukEErnbf1sGK8toycAu5uxs",
  "key31": "Cg3vxgHAygchshAJro5eqWzJEMjomSBdfJdPpMdreL7TFYbPeeAPscbVpPc43DWemiDcVKBkQxTJHT2zXsMYogE",
  "key32": "BGkY3io56FR26qvBScgttkEJ8nkRy1VFrJTA44N9HXzbdJjhPt5Wp3nALKXhTGbjwPjWS6zHMVb4th1RN481xHg",
  "key33": "5bU7UpisySBYZVYLfKLGB2zNghG6KD2sAyYbLCaajy6XQNpELMvbUVz9dbLJtqdmYt8eNiVeu2B6R46BSshGYLhx",
  "key34": "5253h8zV2LbKxTauAurosWenStpDcgj4Ls5RjZkRZKFJLojxVRvKcgdxdrKNPiwboknuFdfAo8WWJodYwJfkFkTA",
  "key35": "2tcKjU3nnthzu6ezBGqaBfzpGCYwJM6GyzHgTafHtprrfaNxNDLA5T2p7tA9HBxR7xBf5GrsSYMbXGPomaAqHJDP",
  "key36": "5Evurkpk6smYNRZJze8hazsYpfBakNNmt5S1FgDYuqVFtHLAjHdeTsud7p6NkkMcBYXwfcTRZvqQK84LLe1QARnc",
  "key37": "3u4YCoVXEnHE3R5tMVeaJPzW6KxXVjbvJuShvva1PWgtqzswrzSXAXGAwLt2cTo1NaLgzPrTcJ5qfTJcxufWUQ7J",
  "key38": "44dePWdZhugf8zSx6WS5r65TX1JV6RW9AjEk2oHjFcUoVgdzkG7NSq3NZJ8XSC5ajaXHTbHvL166yMf8FhKaKds4",
  "key39": "357z4ngwfsN7GJSkJ2EeKvaFEtdnf8ogokd4crwBTdZa3KFUgKYAopcF7y2f6UNZS4VR9WiFb3cFZGZBNSzp2Kgf",
  "key40": "3FbgdeJhM6ePRo8rTY8xqYYLMRR1VEusg3J1GKyq7TcyE5LHWhyxN3DCNXaizRZcrajKAh3AoivWgiWUhY57mbP4"
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
