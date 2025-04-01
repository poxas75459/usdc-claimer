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
    "b5tZniJu3LBtySwo9dHv39qkT43VJfG2YXqR8A7HrxWhB6sTNZ5i8hPq873h9mKsWNrTWeGv1Tb9fKftp3PNxwt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aXyBq453vfE3a2ww4MVoS5uFzEXas7V9Vpq3AWBG9TX12QsXKXKM2Py4Zu6GzP4LPb5cky5Xawhaq7To12aeHdJ",
  "key1": "43iP7box4WVk3mUu4sfGzXtYsrU3XY1ojebJoRxh325DTp4e7GgVgDRnktugtV81jdipc5V5MwesXeiQwLWJyyj4",
  "key2": "2uotmciVw4N2GrbRZtsaMhUCyokkkjqRJZCfwwSrv5vNHSxUGen9c4SWeNvR9VD6hsTeVFaoCrHb1FqKZvNVpg3P",
  "key3": "5n4z5aU9PHF4E4JuXa4AwVqumihZvvw41cdN8CVicofbVBfqkZwpX8kC1i4HNCchByj6XURQ71Lx9CpQBq4E6fJq",
  "key4": "3bzUuGG8mWpdkm1j793W6NKdrC9h9nTgZtdxqtuMnEBtvRPGBoek8mpDeMfsNZmZJVna6BfqppbpNpk7Pmn7U66q",
  "key5": "RPoDK6GPuKjkQacijQnhF7iutFXEVHjZvUJ47MbrRbnzyvJC7uQYjWVxmWPcpy8zmNjqZaAGUEXHwUsjyLRKHge",
  "key6": "5NFECrSysADkh9qSX425cCYtJjHa8PuYrHNkNUsVBtdwu68Kis6t8kaLXqKfD6N5Dr3BrVychaopC4he5em7ChbY",
  "key7": "2HxBZki6x2TLcCkXvaRpVuTjckRC8eRDQbBpTvWTGbGzRQ43x1xq8gAji23sV8isfaudpPgAmLM9aX7qLiiNrK4o",
  "key8": "4KxF9tTB1UcTwJdAfnFMbXNk73TkxQG8h4YcG6h21X2gLtnTbytd3ztZiWHzNbt5vNfi3Ax7u3W6iEdPNXfYPGvH",
  "key9": "22sUPeaH56w1GY5TDjHhLYCQiCEw9JHDHibMLbcBPtBYQsZz3zgRGFbG7SQ6bWk5RxoDJggwsDBFRGEAfJQ8mthV",
  "key10": "53SaTAHQ5z8gDw5WD18MdDRYeECphxQiPdHr8hKuLUhWahWbQqByL5SEhVb6vpXNqB3wHnDRq6ctFwrUiYcZ1Sce",
  "key11": "5KEkXpU3UawxyV9swwZCWJFb9fECVCJLVQd8Lyr6GBe9EtuRfD5xNpXFF6RhU1rwJoKQrxHvijtueS5zaLz3wnx4",
  "key12": "5HWgHYr2pAE7cRTY2AR9JMJ4oP73XdvGJ7k4e73981EDDp1s2AAFqiAQMZ9SfaLws3bwR2zQGuwXpvwYyS5KfLye",
  "key13": "4KjNerJMmMRq5MoCcnrBxMFCVHSaoPhDhyDv91idaqTtkj1soRGtkryN1wAKZKrqo7ePeyR4B3jQQ5zTdDWaibza",
  "key14": "3crTBYzsXCqAb2nipf3uMyGKfxUsLkGfg2P51jfrSFteg26EkDmSzVX5ihFN5NbP6y3UwUJYudhwcZEUqboni79",
  "key15": "AHQuwJ2fkXyiLkKFMC6PmvXDmfyMK2VBmzL4ECpYCUUgaKwRvBncSTYMrkFQYDaxPpsTdgb3NGPcYPgX4aikwQd",
  "key16": "454V519SxuPuBBE54BXuS35GgkyVQv3eujqXs2TfCbGb5dWTdqcXRotiwVCzfbF2Jsr4C74XUFAkF1zMGWx1gnCK",
  "key17": "2gyJD96fnHAAQia4teoDqSYGQG9suVMU21pNWZM9CUdwTzU6FZPorLKeaLp4AGMjrsuW952X7X7DUkgcGDhTBdTw",
  "key18": "2Tjj9s2PwQ4e9vuwdciE7GcmbTMqEVjLnncDRpeFYip53YKxgjDexQqAoytVSCKtvjfQE4o6jWLjqkQugnYxCC1j",
  "key19": "3tNvyrQL5Xs5emZjf8g4QHT3NjEnveT1quQsBxY6s6YGL43YtNRvCnhLqmmSuGU7hYPaQRLL6nwRfzyba28yHt9k",
  "key20": "5wGvxBiwsHrxxLGiPyWswsFXJcb5ZnRYWJJXwM4EaGumUm8WSqrZP5jXEbkN96N6utpm6cK4ak3kE8tbK6ciz9MA",
  "key21": "uLMkeHr1PDqCEYfRSzHUe2dEjmhE8Y3cpmqJEdXAuDc7ZmoNKEaBsfCNwThwGRC7xUF9sGs8nSAcSQ6TQEWoYhe",
  "key22": "5NLRLZaUtegXZDNgLNtSnrEfaeBUt7RKP9S7BtwAvVDP4PnNZaKq2nDTZ5SxK5Qf7TWtWkYcZYdP8Vaa84STAyx8",
  "key23": "2vw75nkCoRDrBnDTe31v9mHpy1PrCgYWNAeH5y4yhffbB1FwQLVFUpReLzRZMoTfXkouLquK8AcNYxXwPQYFjecw",
  "key24": "2ZoTvyzLGyuYacpz5TByu4mBSnJxYVB3ix2R4Snq6R7cKZKsP8NsaA6VeU2paxsuwRRjzLuv6xX6H7F7WeYMCWZe",
  "key25": "21MrmJ6h9ERDbWbBv7QpVwaHDzVXoKJxK9ZP2a4tNEVmLamhjHzEy3PaZ7hwuzCcfyBAFBhTpLVWxqqsmwSZwNRW",
  "key26": "2YZ7Df7pQEVdccpfHXg68zBD6RP2xFhzmv21rx7EUKM9LJox1LL8BP6CdJnveoYc9CQgbwRvKmyuYZGXq2fbnULH",
  "key27": "3BWXK29U2cXS7wy8KUB6vhaLJPNbs6s3wUmiqvHS2fHUL6LknA8kVB6bZ1sXMDbPUv5m9rrn4Q7sTixKxdPDHYex",
  "key28": "2k6EfD7m396b7BqV3ajdQdzs2PRWXnzRftQS4zhrsTdoVmgbZeAVhZfMveXDQhh2HNFp9pXub25jFkrgvyjVEj33",
  "key29": "HjAE1koxDZ4AzmvqFfNgXKr8QNdw61zGPraDNDPapAV9iXLKGCqXFtsMHX1ToZYtsppujG5B9E6RJc6ipkB4yUp",
  "key30": "5HffJP2hTMXFPgwZv6NAWto5da4ufMoqQ6iFJu4Ltsy96iQtvmwyDbUjgtD6PqJbWxmkefK9cT5WgwA4HMHJcrwP",
  "key31": "3zjJZj5W1BmbpvZGgJYLtTaZ1jzobUEAivJ69QXGX8pkUZEt72kyJLDqXvmobb6m1ZoWC2MAPtstD7xee2dNmLhA",
  "key32": "5tYvNyd9McSKD3F8MmqAmh6pDCLNDPuJazKfhmqNvudiC8KkGN9zEmApSNurUiigfXEkw6xqGQ8pWTqoVjFA9xyJ",
  "key33": "7RTnarZe3fyaijBmpXYAfd6eAnGQFtYbivfiYtC9g2AeE4ttCXfDCZTWmXzKv4t5Tma1rGRjRZrk59GYZJu2Ad2",
  "key34": "TxT8PH47n7q8LayMX83bXDf66QwN5ZVF6ZoGhw8sYVLNt5Gzqcyhbu8138PQ8BJET58D7BmkeeEzbvH7fRiVmZs",
  "key35": "SbzkptzKBmNV9yxvhRf9N1JyTGdDxLyRtSjGRQvHXiXaEeYRR8pvC9yu7f4qKa1Bd3HRqRstWrXT6H6LjCukJ99",
  "key36": "kxRQVSz6sKzuAjqGn9EfUN5zRcQdgoEbPug72K29GMdS3HBTUwCKD1Qbw5v2Xc1usr8mfmewAb5xKAQPXEmdWZo",
  "key37": "3Na2jYFpJ3kfaFBfZAkGep3bQHGmSUhu2HmR9jAyeizP3hxX269HPrFogmkHEZ6mwTpuZ9Akx65AE7J5gNk8ad1a",
  "key38": "5VL9cYRecoA84TJoa4zxTJL87kr4onGwJPxW7DEfTCtygGPurcbAJoSxef2nbsAsMhs1rY9QGiWsXyAmTnf9yVpU",
  "key39": "47QnMFHbvxUyP9xhMRnFo2qKKmmXujdMHEzo9bxvRmxFmWYfL73hC2LPsdEQaWoeULVb8c1mforSzRdbrU1VCVdU",
  "key40": "5c6ThvpnFMXK3A6nt3S9WYwJCyJxFtssswNkWFbcsw674gPQNG4fYFzPXHeX1TeZY5s3UT6PPnKjvy4M7shWELHU",
  "key41": "43tN8nbnc6nTjAFddiCdBTsXxnR8QHVxJ9GcNrZhW2wr7q8Fh8RfMA5LCZ1gutNTvDZ6wAxuH1EbJtKF7eV3pNXN",
  "key42": "3L2mNzGZPYgy3xqoQEEnKLuCgYKaVdfobVXCaxioUSidcYcNkDGupzNHMCYjQGdmQETR9ZSXEUYnwfVT3LjJ16Se",
  "key43": "5JELNmHLzEkQzv9RH999gnzUEFSVjnfF8H5pGaW6Rt7RevqaiGaz5Uj8d4X7TLwTMDaN8dAysrMoL6Pxq44NsXYF",
  "key44": "5s9iNZXuTWQn6jpPNK6bNC1vbwdmXUXYPPuahPXH22F73MkpKJCWQXRUHVkNn6MhNMB41m1zUQmCYaCzLLuEecUG",
  "key45": "3eRsLbys2KPrmGxo2UxtBJB1nGxTffU8zFdYeXK8amEKxMnRqXTwjHn3YnhsiGNfXUoFccELb9wC7bRQSWhsX4vE",
  "key46": "4DtrNvPKsEEw9Mt4G9PbWJofx8bSrWpSSVzNfx6MYET4xngKWSFavNPKxixvvUmQQoYrMFUYFQ1EFuC7qs97o2gC"
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
