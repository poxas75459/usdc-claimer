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
    "2Uzhp1zZsrv6wxzUNanw41asA5U6rMz1pErF7zffAfV5dwfa18R3Fz77Vwn26HFAnJbSiVbSHJt3wUVBvhxSfRn1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uFmNDbufdJoUFEf9P5W6ADEH6x43Hj8mvxnDeLjzV7q28Y6F2pXZfyosD6YbgikN9FvKR3edRtkcb1gTxFLCdt9",
  "key1": "4MYBzEdngzt7F5Susswj1F4a7RGcs7pgtrSsKqLhuvymv5HuGGJVtFmjdJiNR6pgz5bMe4zHGDhrzLrbSJNzNn38",
  "key2": "5HWMfGccGm8xVJmZEVYFSD2No2RwVrrVd4FwSL9o18Q21HE7phVQ2bjYb6X8zmha3b6GeTyqs8QzqW6Z4Lw1fz5m",
  "key3": "5XuWDqNhdnqhXnQLH6LHdAkhzBgrj2TWfdH9K5aK5JVBiso3des8AmPiZqndepJn6N6myNhiDRneqLma8VzCUvSg",
  "key4": "3WgjnNj7ZLd6gnV3RgAE2eybKA3ddkY8eeKkABX3yMMLXveujbh1zvwnrNkcYsZEE2iCMZzANpLn5WfkU3F7v7UT",
  "key5": "3o71ByLsTMk3MXyZQPoXvEL15SbaPyrT1fwGGXFpDT1ziDT44bp9X8QXYJnvh6px4vbmZYrpFwj2pQhYLVWNP4J6",
  "key6": "2zqZ3vmYh2vUDv2K5yyJZq75i91ApV6dTdtVgGjBRdgTowxcUqXRXKr7Dc4d9Gycfyrwomhn9tNndHFWQT1UahNF",
  "key7": "32PHGVa3dUKd1QLtwXzezcwGjXDJrwZvqJSjcP88NaXASeMRPEytCQFm9rkmxXaR7M29Rp1z5QoLgo9MxSeYhB9a",
  "key8": "3kTBEX2n5rbHcyMhGH8tYXomFrg5DGiVrDNMSjb5aPtyRmsd6geboNMRs7yg8BNVgLgxNihD5KnguJsJJV9mCDHG",
  "key9": "4Aq8JQ6d9Vi4NYW1W36WxSxyRKnFSTpKKQV1DVd6KQEgjVCtRp5YMNtkEN8iLyGmpp2FSwqwQ9sXnf6sr6TQmyMK",
  "key10": "5Di81HLWZNTdLQyd4brpMudJmZ7v74UTEbzTsgFjtMi97fcMinjxpsbEujXQWu4vVCWAbVArsMdT8Hnn5dgHng82",
  "key11": "2CtWzd4pQRYKqXw2FCwCUPrqGUJwQEhXrRENUhZAWijBroBEn5SJjyvBcpHuujmNNeZjYVjNTyw4UsfLmovmW86y",
  "key12": "2LtabLz7VtbNbmfNrg82yx9SdSSJwjGgwBRsQj645eKrtpoY5MAK6imq3rW9nE4Df9sMGiPzBA2t3CVfgv3w8ZRT",
  "key13": "3a1nAExXZ98umm1VKtd5ewJ4bGowx9ZW7bi6DoKMzLxSyQXTBzMe8SuxqHmd6WADGYZMcmw6r4kBJ184VcuVyJTV",
  "key14": "4PKUtdwmgfSUHG8sKaYcBgFbBDg95TEJUfHye4CgKeSjzcQrsgyi2nCawLhmewhKWHZeTPXFjBSMtpRwBTgPD6bJ",
  "key15": "2MuQPkDhkyRw5c5QkonzC9kY28Nt4bZmDUaT3UNmcBbKaZKU93fz9szQf28JHnCzzJ7GCTvBvKoVphMPeWwRkDQE",
  "key16": "5pBkfBm4ccz3Swy2bGrjqsbU4GVEzDkcco5a65ER3PaLZ9NshjLbwXfc8RL6L1VCGTn5RrNu6Drzs1dNfLbE3vwF",
  "key17": "5DBGkBuUsLrLzwNgJvmPam3M8aM9qR2R9Jesz1MBcQNPNq25RrmdJvEPzXMz96wnJXC68GBkRS3WsfrHi6WBw14Q",
  "key18": "nP3qdnqdHG46bQLEUh51BDMnanPSLA4X7cx5ymykx9NxWAmKopapqbtfTFSnCHupgKs5vVSX5gBtS3NKfj7nujw",
  "key19": "CYsGyXiKnDj5mTkYABAEyVi7pd6KVkHVtYZRodruSF4qJQnKaeV829scDznQXk1yrZQTuktPcTVn1v7vfvn2i2R",
  "key20": "4KpedvZJCLCHZ5yvCzvaGMDHWYfkXjJ2jD7GLdNZLJYwXNJsowukAVFCHGAMWi5toADBJf7H9u4v5ZDS58bV4uLk",
  "key21": "3B4XiqxcdLFKKgQfnytHPUV5yFg9mUADBfuLYr3xPnqqLPMAXMHVShuF5VRcLrD8vPQFT5UpNddai1cF2ixhWFkU",
  "key22": "UkzyoPg16N4UCgANUpvbL1z9TAmHKa9b8WqPpc3WFcLoM39fkdCpfCJnBAbJyt2oHaXUrrEWRrBt1QBEGgzzKns",
  "key23": "3ddJSiYBHZNv6qjHzqiCdYKHAfWofnCdeXgEzCCQb4i3w3qpMZzVF9agM3kjcdJshoZfpNJYmLKqfS8jPP2VbcGY",
  "key24": "4xT7gGt4Rea4xzMwibkWBxQsxjf9BJNWmN3vtZdsmjAsTV1hLHsbRoFzu7yKGK63eBwVbwa7da6BTaQewo1gi396",
  "key25": "3gpnsyzgt42opYkHEnS2cKzFcmQQZA2WyjGDvEbNtaNJqVn65wXFdGPwt7gsKzf2CbkKHthDAXcKTMxyQazCRJsS",
  "key26": "DqZ5oQTSn5ZnjKyEtF3tLjYLNMXiLvVjh6YaeUhm61z6gRrppxJLfV9K5L3gCmDoBkQrqJHWKa8K3HKALn23AMx",
  "key27": "473t9yXKSaFKheu798Ez2HJz7zmHQLK42x2962ahg9z6kwFqkEkCbT45zYmzAm2QUqKuqGVUVZcEDSr8wBKNZpbW",
  "key28": "2CZoyb81PKJY3MNQS7SxPtoPktp5ceZ8YDfXTRQD2f8i5TT8KPJPaHqonbh2JrxwqgsYmcCZz1PFjzLor4NuxJCC",
  "key29": "4AaVFbTUnkp9L8x7VsKgvGagDBKs2rpzkMEDX5DbHwNR24GbKH3qrRVEKCwCy3j2chXmnFQaNfSPU4NZD8SAJ6vS",
  "key30": "37xmZQRw7coJAgHKPvyDosNs7QcyADHwjxBQPp2NRVwAFLFsWtx9TjFa8Xv34PtR75EHd1epmPv4d18hN9JkrieN",
  "key31": "4ZjkUa55UfkaLo3cnSYoy5rE82NTocSrqKLiGT8SnEFpio2YjdpoJQqWmCm4RZAvqLDNAtH6tdb5tZG3gv6MqgvQ"
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
