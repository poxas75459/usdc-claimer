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
    "gsXfHW7XqiNdF42hMyhMRkjF2C8hHU5a5rmg1NtCFYP2N1f1sFuoyrxtpDzjF9Hcs5ToJPyn1Mn64iLMrbTcCAv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rVtwVYVKgA8ZQjxczJD2UxRWMYCrfe24wqbceTqTiTG4u1MAQoqjtXLYXxyqrXdxKwmEWpdpceJvoeA2tC7sYzS",
  "key1": "5ibi9GsgCsAqJSndBFxvgqaGbNPpLCXHs5qV9Pw19Mg1vkoZyS8875oYsd4ubFjz4xAxyC8PBeFxTUoNowGCtsjV",
  "key2": "4cwn2D5Bzw4aQqP8JySTDH7QZRNoSGTCxoeBJyK3tnBZpFvDGYpkHbj2TwMmQcti6MUFx8JaSokMRHc2WZBePZgM",
  "key3": "5sQpGYmXJjyuz9SiTL2ULgAbGXSQE6ABusYAGbJoQpwKAPyRRHUESbAmAiXKpEB94z99Y3br3BMAtQQTSpqwgSRt",
  "key4": "4JtpCxX7ng1c3GUhnJGtfwoaogiW6618iPHmMvMAq6TGYUHdNrbvcJoRfB1tWG3mKb31WjRwajzWYZWBctou5UEy",
  "key5": "3PZoNjqDN64t2u3dJ8UAKxRYzG315LAuA3WkwXKW9EzyDtSa43cJqFfJXRsGURNDrtsanquNTZp8MERj1GprYoEf",
  "key6": "3x2M47fY1VFuLs7xRFvhtPCYKPBXbPForKt996G5c7CLjfNTxm9ySD95vUS1SGZPu68tpnt7ZsmBmwctkmTMyUWd",
  "key7": "2Uek8EkbZ7rwPgPHMiiipbTY75nX3fp773kS6S76ZGLDYmoxkGSK679ZbnbCdp36BD696bsFBPee9GR5gj647ZUa",
  "key8": "52a5YduBqwUj5yhqEvH7pvfgqnSPzxMrdjFxdE389UuZDN1FRy7fhnJ2NeTFAxVYdjEnamGmJaBo3HsmPHPzkP9K",
  "key9": "4h9bd7rUXEEy2esPLrLUsskZY9LKpaeg2y6nJW7jUBu357nU7f5SxPUC6TV6wPxoTQSgCyF3e1PqXKc74voDUUpQ",
  "key10": "2WoMC9b3ZCgZf2p27W1Suc4oXmZoKzdRLuZF675zpH1KK88N5iHcq932iPDRN3964asZFc8adtNNJaHg4nDjHDxd",
  "key11": "3ivNZ4TaZBEyAsBv7Pk43FzBXJkPYf6Lk5o9ddsAsoFNrGhaEBqxqCXG9wTzwQPGgsqwTJUTajQB36XCTP5Hoe1K",
  "key12": "pkBqhDAK71dquEywTdiv5MW6PQ5WonnuLJ7rHs9QQbcBAfJHPuK6H72hXkYJ3uzXkVBiLBgjTqMf3QJi3H7r7WR",
  "key13": "5HkPHCKTV5CV8hYEKYPz8mMpMPi2NnJUj8BW1NQtDhHvo8ViyHq77Ec4rCAwVuCsgSaMUkAoaXSFUjxtk96JjjVC",
  "key14": "3VLPf3hdmNAAkH1R73iKf4HR2EGRTBjvoEPq4f6x3kgt2VfUEgfDbPrZyKwgwhW3NKXQ9U8f9to3MZ9Uw7m663dQ",
  "key15": "2ugbmEtSjm8wnGwfUBDq28TEEiGgLCPoDWuFuGkLarq9QF2AzoevaFjFJ1PmjtPVJdtkBhcNcPhuuu9ZTFAiXyRC",
  "key16": "49QYvcVdZi1k3oviUcwcLjJMA3kGnz1SaXPzTyN4eJ6umiJasoD85B7ysw4rWzvzAWSTtKDPTrSkCgCu3kVHvMw2",
  "key17": "7vw6vVHopQfzXW3HQATD5xa9SUPdFoay3Ke5twfdWY8pu5sZJ8m58zKkfp1Fx6sGvNwckKZrGPCsbQBqEUBxiDR",
  "key18": "2PcknJTXnkmTywryhsfY4mDtBFGtc5fEdzUYyAp89qRYjpqJoYcvpHMqCWVBMrpppUjF2D5y4kuX2SghpJyKssRU",
  "key19": "5g8imgnK3Hc86GcJq9dCqz92fV9q8aAHLvc1DNjbKXAoEEUkos6EWZeV5DiaQMf7wp4uGFcuE6SHCwVdTPC4pjmp",
  "key20": "e3tHDzU4UEbi3UWHkDR1CwMTAg9uqbiraoCJ9FTQLPS7SMwkFeyfZzqN87cuVbs251Um1qWFeQmZqAvMmNRCgCk",
  "key21": "5N7CtFUU8QFPoD1yB5WSsQxiERi8fdZCJSpmhvrcCZt9QF7qs5qufRmT7n13FF2t7BbZUnk4ffs4TtqdxMY3zNVT",
  "key22": "2MEdzBNSfPBMwdX1B4cL9oQ71yEqERovCKtYpMjJLRrTaQMLeJuaosik3ZjpDvhPc7bQs74rgLq6SP27Qizu8aQH",
  "key23": "3qNtyUyf9pUEFy7yswXxfjsYCsfRsyTYV3Si4JC2KBKBAcG3T1PfgDBXTW2GN97bqGt2UkLbVijH6WXsJZrDtvsm",
  "key24": "3cGj8G2rqriQUFd5N4HpHjuzZS3wL6fXQqn22LXuatpQCBn5d7fYayCArVygkm6okKs29GFHaYzUdWsR1wDjBf9Q",
  "key25": "29obhY4JEP1FVPbvyVEC6jHTzzbX4hbf4jZU3A8L5SsSwx66fHjc7XXM2aGrP89Bd1JDEwnWfLPArtqoEygwtetq",
  "key26": "4xHMQ1Y4ne5a2cX4xobqUMJGEyLrfRV9GBWnBMERoUktSCaFjqtAuJgn6MGfi8YrxsrJtS5KQL18vARC5HV298JU",
  "key27": "wfvca4R1v2sTb5yNkTYi6LtvKrssZYiY5BEuGe4NgbbJXdgzpa9x7YLw8bvPBn3oeWTqVMa65RLa3ccboP8uUvP",
  "key28": "4VUcy7oonfnKMB1nYeiXvmEvfkD4cvEEJGFUowrfNCx4cg3M2YTwaQAzBQxnpRqhaojhppPbRBjPWNjkSEZ5X48r",
  "key29": "5FZrrbNiJMhm5HvCvWCb3XG4J8KEknmyVWbsKpLB6cm6tfuxvp3UvXgXFh9znVSTcYSSAabTGbcvfDqGLacKsHfF",
  "key30": "cwmjy1d8BfnsRCnVebBG1w6DDWkueEubGzqx7ot8nsZWcSmuRpqnUNN7VKAJDvmqPbFhsVBVKd35MGg756m7z8j",
  "key31": "3CADfVafr1HERz1dtjkxi4ZBq1iUrhcy1PYCcwESXNMu3KqEGHRV7aKkUgf1tR5zzo7CvnHJj1HAQYxHaCjiB4Me",
  "key32": "2rSzgPsGR65awY1AkNQ15faNNJgXxp9pztFBoXWDrA6MUJJt9BQ4LXEKmswhWHCgMqiYkuQGxZHSeHF4mKr7ApGF",
  "key33": "565F6tXgTpCXYh49xmgRmaZw2ZPQ7nuhUBMW1wF6tW5Zi7wNVJsM6gkw8W4TJJVifJ772TKt42zeadg6HJknnq33",
  "key34": "VcMLKafZUmkoD7ucoVVUAm4P2EpKwaybJ66EGhGKTGVdAB9M7aEL9eUhYKawhwB1Fp5aJhCKNYmc5iLUzw7MUzY",
  "key35": "5d3ich32qMwtUjN8tbui1LPKjGYh3VUdXHEgFMmEajCnZR4sdaHmHfeHYd3rvdhSJ3jviCq9wsh2CxJW72vdW7uY",
  "key36": "48hAetWSQQEJvFWeVX2W5z2Urn7uJc7QKoHmqjTFNgMbK9WAsr9HUtnwY5qX3B94mEC9NS9sELuHaqxTvwhTpoXW",
  "key37": "5s4GzPfm1h4LYYJVQmrfL24AsfP231JaRtYT9FtdV2ZAFYZxptCbs9HYiyijjGL1daNLn5u5f3be7afVGfBQmFuX",
  "key38": "Sn74uetghLs1LHsmeNTdBngarcQV5uJsrgkeU45QPL6DQ7MNeUQH8cEJJF9a26gUp7vhR6i7DZgwKh4GcA3QhRN",
  "key39": "2UUMWsY7Hi7Gs7ek3pBx1MpUnaMxqTz3o1GnvxTq9BnfV6DEwrPsibigusTBgCpabi5AZQioBEJ9jN1qBXFE2z4E",
  "key40": "5zG72ubGPpPHcs8vyR4qpUQS8oGNKeUthaCHmdVpJRzPQiZM6NbRNVASfWGRo9rZqYVPvpq31yQhLktA2i3ZsdrJ",
  "key41": "5msbjM9svxQeFWd2DhkZ52TEPwzRTLRKcAG6LyQQNUHhXYtAp1z6Xhhg3QMhdHXWWb92QYPzEavEMH9QdkJipG5j",
  "key42": "46MtU6h5rxA4ySarQEqfMWaNqNhQpYtUkNY2nsg3MAxrX37zXsJH8nnge5WDnzwH3YP2B8Rzzz1vkh9DCvvdpEb2"
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
