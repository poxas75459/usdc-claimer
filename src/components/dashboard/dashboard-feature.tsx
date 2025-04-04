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
    "31ABstXS2MPjGX33f81QZaVXcHdduCrFs7g6EPcmbrmNoMjZrQpthGvpWs3ihe8H4Lfi2s6nbB4huhUzfygDx3pq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nkngdtkDRaPM6PzT4umqdudVrKWVur9zMnzwYgmnAmfYEFJs4xmfQo7FnucmYpWh9fZZMqAb2En7Y5kj7GHcs4c",
  "key1": "suKiKAqKwzKZnP6kkxnUUoqvYUsQ4G7CJiZFpdqu6mMkqpYN7KTDyz5xTgQXqGrgLyzqb91WNTaXRXEfSbxaPF9",
  "key2": "5R1Hp6cBkQbWVLDXyhjZ8yjTjfTvFtHRegtYoD6bNYoRpTFPBRvVEQjmhpu6xCDnnMzSUeXBB49oER7GRZHnbL2c",
  "key3": "2ZhRhtDspd3pXVCvsUwt3s6SmKn3imGiYWxc9SMkY2PdjiYYgteERi3RoMESKv5GdVGWyNyNeMq946oAG9h5dXQH",
  "key4": "8EXQ1VRmSCKFMQ8PcXHdc4PB36up64DzSuEgptsXdU2mJ2imXjaw9TZRDC5Q7QfGWemJtahba4Hk89mpK1t8xG1",
  "key5": "5fGyKXLDwpEcoHSkWEBowXJvAg9CFqqjBto4PaiiPZKkN4ns8hkNiYYE42wTCjcCuokjsXWqgpkDUe5W9jd3z3AC",
  "key6": "2jjW2juAFzb4Rw6Wbtuqbg9TKS31m8zBnkYV4QqwKMcWjKENpV2AhLUCuirJXUZPpRoQQww91Sy9L3TrukAV8MzZ",
  "key7": "4RgKKk1ZbruSKApKMW18ogyK6QrFYMmEJhMvZ335VjpwYD9Af3igzmghSLVA4bz7ZBqcBMjUm9ETEYPriKBaMYmW",
  "key8": "5FLzAhLMRcAxx4AYoSdo7nrC3aZ5bCbVLX9PVetq1FEgWcp9xAq9oJdxLaRWEfKCBE3JcBCsQLmSrUjdw7WZpEDj",
  "key9": "rmDMTzqxZfxDWVBG7bapDCjLdZj87d9WotMmiTwErWqJ6ZutTbyTTcH3hfYH6LS4YHnZNmzpLr5oVcnJPh3gU3n",
  "key10": "3bbr8XVF4tKA5ovSk7KiP8WEuUn4zdi8VWJpYryRRBCS5LgYk3FHXPmxAKV39fjDCNqq3otdS6fdnPr98CBmHAV4",
  "key11": "4rYX5XXubzSP3dKh3TXPxmWXWANKyfxbSDMhHpf7WEZZeFcf6nuNL3s69k9ekNG1igSvPNDcajtHaCj5hzTJ1S7i",
  "key12": "NTGqkoMZyjGmWqeuE3UKvLDLb8DjYqNAYoc6z9jVubMB8yeLRFarFe23ibkdhB3c3DhxVWzC3q4nzA8UEV3zh8e",
  "key13": "4UGPE2pAadFw4Aqnw2FTedo6QP1MCftyhd7JF4NShpbYycQ9P3Q4gsCdULXu4uwLNjnWNnaPrXn9NDzgzPL4QBBe",
  "key14": "56KteeR8SK4fC3fdSkMT5U2fu9HCkAWm8VUEPEAGNZNXKUG633v4GJtQ6Q8chgefZwh7PYsM3Mc8U3KRFnPZJZVR",
  "key15": "5GjXnDDyQ9AikGDX3Q1MkZS8dzxgDVqmjKPVT7hQEZWoej6SWCnDmLrFVowtfVNiXPr2M2URHVpXHkTcgA9GNoor",
  "key16": "3tghyjxv8EifkPybFyVntL9f3yCKssx6dAXcwAHsrsXX6uXJQ6tKihg6JaEXdAceM8DnF3w99MgKnuMEYDo6QHMy",
  "key17": "2tdw94X6c6qHtbyepdyyohEPa2BRqQzay1MHd18RCRDXx9yho7VZf8g6pCj89Y89j1o4uEMCykUAgUUwK7CC6aXB",
  "key18": "38KZHgU8AyeMgwwgvGUjQk3zrDUzF71s2gng6QC65zCPc23bujV6fzWpByjn97uBEbfkoM9Ac3j7TiTRyWmzpupM",
  "key19": "5HNycLagrEkZ5g3hRfSUTkWLNrxPxzXT8XRVF7ZEd94DnKYFzpVvqUyQbYKw4cMokBDowPGpN52sVLuwzdPTFbQa",
  "key20": "56R3HoEL4nx7rpNiqwLnoN2J6J24WpTKdf5KRGz6otpyRtYCecFs9Qk22WXWsUawdA9Q4t2qukuLXVs3NBQf8U9Y",
  "key21": "67iyxnzf6cRmnAw4664yR7jURAMDwyhYab4JSxuXibDsysnQjMgBrxrj539GTEKkbHzptQi2jehiQ4MhrLhi2fT7",
  "key22": "5Wu7P75tjKchmEBYiuho2E7GnFhcXdXtS6pvJ25uPUTDxFr6CTobVwAA8G7uBAe9EDNBKwqbjbfpeeNVEHoiKjrG",
  "key23": "mcKWZPBAFkQfA3EjhCLCsjeAWboGwKp5jA2gga5jUdUY5SFKD6yCDMPe5j8NdcU3rRmenR7CVKgXgzjVzcJbGKV",
  "key24": "3XUwJPnFwRNw4cde7GNQBG2SB9GbYpdx2tRMZQWvZnBwtzFZ8Dnt3sqdFqDzQofpGDsbUZQdjWBsnVNfLMqV5c2g",
  "key25": "5spck2DNShL4HQh9DG2LZzSDwMQK135JPWtSH3HATFuXgtYYtLawBuBy17wvtuAr3eW6dbHjMfNj1NnEsoBEgCk",
  "key26": "odfGSiPN9hCfkrAXCPNPQ418ctQCAq5dqF1uyKNLrsczNVcqHunU3wG1PwfDSqnsv81RZ2DktAk3DP5yoEvbNPZ",
  "key27": "41KG5ew25HxuMi1EfUFUJeU37eAevAJqfHwTtmunThCWPt5Z7r6o4WzWh755MeSingyRQzeXAdZm6VC7PtGNu3To",
  "key28": "2ojX6Hang7VHUrnGmN2yse8pFFfNtcGkCQNnjFR5Tjxeq4NH8SqRX9VsVneZdienX9BtWsmEYuL6tBR5XwQd9vnT",
  "key29": "3qWfcPNqNrJLnKTudUfe7S6is8WyWJkZZoP6YkTzHqLn7R397jBLbXGFts8jUybTvDT1wgLr6vNipd747oHRfqfo",
  "key30": "4LbwqfwgCHaxV2w8RWYobRxP6WDuHmpEoksDRKnn3jWdEXjt5FUFkPG3vXdqvyH5FdBGzV9E26mXTGvXsxqdcGii",
  "key31": "DUUydXwNX9SixcctB2DbfdjqrDJPphSFCfvpkrrvE6kwxfcbEJmM5Z3H7JdpyZSRAU5SRizx7k5Mk9fz5HZHruU",
  "key32": "5k87hqy1uxNQRgmbUaAqQ2h9UTSErozrDsErxcjzwxEGgb9d8nKCy21JS4AeJ72icipGCqhvMuQCnwY8wY5yP9cw",
  "key33": "4wHZhfe8LTuV9kD7SNaE3PYcjCJDy2uySG5hmtziiXWsCercpkVDqmNVkbFQLD6enphthJkQrRCndLKUvQA8p42g",
  "key34": "hCFeUCVfD3KhtBLiDiaCxpWpvhfYgyvm451o8NjA4SS8DoD4LUoMMkmu2wpTxF8tzRKezuVuta9sam9XWmV9d8r",
  "key35": "3LB1HNmQMKECB7rtJnqgty1TZ69EKPUQ25E1jp5DDPKHyhNrDE16VXsf9kYitaW99ihHLtWkctHf1d8AJHnrk6hg",
  "key36": "5M2VAyCzpvVQ52jSGSAdMgyBXaKCDjTPHyNU3EDYREG2Atp2XHe1A1dJknmSrUBhb9zUzBobYpAA9h6RB6PG1aJr",
  "key37": "4GrGX3FJKYrtnbQKVJw8Hp2Zp6DHasJTSkDsCJmU27TXcUTqps93harJm7BJn1BN9jHVvrZFKerCi35mxWi5LchB",
  "key38": "4dBowpq4JBKfVzJepFBi1ZikGDojr8dopn2dBLDdDCKFtSVTUSr53ECYQXCKZFUR8sX1XrokGBgF8jLcf4FXuL2e",
  "key39": "4mcF4xpvLGRZ1qfe7uMYBs2ACDTvQxQivgp1NwdQhqnHv3wXHfWxXzk39oF7ByGCEaH71QTtg4Daenv2DQoWcQsM",
  "key40": "4DUSHEmoFsmnjUdJKLgxLuKRdjCNsNhNettbXRhUgLomcJrta8DjRHhYJ1RW2urZcwNhqSsuXiowXsHQzKj9KdvF",
  "key41": "47uuYarG36sCFSes3jsY4gLtukhLDAurY49u6wtvGobXBg44TbJLdCQG5qo3N2QrwLB4M3wUhE8nGMmXabRDXGsc",
  "key42": "3zhhfyRMg1MaWkj3wxec1TzMG7hB7fmH1stJvyqaRqPbPoChomU9i4ip133SUiUNCfeSZDy9xz4Nn3yXxvBbY3No"
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
