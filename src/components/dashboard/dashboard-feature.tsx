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
    "3P6rAWg6Rkzvkwg7EiSNQmxjSkwcKzHJND1Xv1offvUcSNYMmuk4eog4sKZewviVpz1AJ3kWKkq6j9SaHB6A2WPK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qy6inbWB5YweaJUXz8tNfkda46Hz6Zbti4UkVrmmuN22sk6TewvTKQeVBmt56G7BhcxSSUpMs6cmAhBhKwGNaRp",
  "key1": "4QwT48TTFudCo9QoqP2vHvg3U7buWPGDmFeTCFP1Wro9uEabQxUUWc6o3SCxcdLsdDJBEAGd4XxBT8pUBF2uCmhr",
  "key2": "Ytzmp6cmoAHHD96jFNVR9jWqA6vftFt4AKjQrUKkEVHNMpT9FYbPDM3fJY8cvGWrZsJ8BinCMziXykRzJpomVVm",
  "key3": "3UMf85oqbSvinhQizfab4qFrZumwfWPTkCc7WooEUg876VgpE12RoAskjEWMa2n7sUHcUoBprC2VRYS56JMawGsS",
  "key4": "4Uq64YExEQnUwWqd1nYJijHUbobs8Gd7kKxGaXizQi9sWnfEC7dG4BMCu8qjbj5h3ASFjvGZnuu6PiBxqZK7qjnY",
  "key5": "45aLtFxyWG9NXrpZyWPKSJbHJXvqPwESvcMmBPauexNo3wTFZ631JkkTnHi28wFbJrU53dgsiectUtVGSQLmbtPF",
  "key6": "5a2P9CZyadcEYwKymUcx7Zue5Jj39PcDdmS86q6oW4GqyrZuuRms4qDeCCZRnFoevRaWhAodxjTSdmWp7SeRSZMH",
  "key7": "5DTdSWbcCrDTHAVosFFc6HiLKrE515D8BPMBotSYMyWPTJ86RswFPB9mvHyMSbdGQA2b1CJpmppoiP1WWX4enZW7",
  "key8": "RVR2ZQWQ5SPavWA5WgZv1ixD5fTrXoHyRTYXqXMdirBEtw4yNKRpLii9oQHa93A8CJUX9TAvhTN1TNMoQ8LNmbW",
  "key9": "5VRAgK9fndHf3Cvgw8T72torBhotWhHYknoCaaCHU5CrGc5nvpJ5Q2umSZNx4cZ6oaqbhZCAgW5mUxFYo3fEneNd",
  "key10": "54RtNaetM2bQ7Auo3vVuehxDZcm9qFY5825XekJt51wkXALAWaAyN4FSntpZDjoySRqTpedkn2pnnH4NZfUjyBfw",
  "key11": "5i9bEuBL5yzfWXtWcbn521TScs8Y2GsUJXdabKU3ykbsFDKtdDH7ZfoY9iQnWY1kjdTTQzn14YfQEPdkxqyEeiyF",
  "key12": "RZ5Fr45kzaXTdyNevdB5fMDMtbnKaWgDgtzm3ribbZ82sG1SnjnQyx8zJK71U159oSBQgqCCeLqypBCd8Vtwcs2",
  "key13": "2yRSn2zKATwvMvN2WGgGBbsxeobwJyVCFKRLtAcyjgAEX7fDUXJEtYj3rbCwPBkwYUGXGzp7CS1zuShQpvWRtM7F",
  "key14": "4mSo1iyDRuy7EZ8iX3KXhyyCedSth8qShWiQZgrQhMKKU3fhruUoQMeSz6aagB4AF5m7FUJa8EsHovjzJ3iFcuyG",
  "key15": "3fgHwbZXuvBwUwhJy7F6Vbh4JNbjKZVUDmF5eqHa4BFBexR7KWkFRYnwfyqxdfZHtYCVjMv6f1utKSvyRXwYmdAA",
  "key16": "3d4XBncn5mXcAf2fJ1LKJJ1jLc5xjpeyyYhuHzN9QNZB2Y5pT2QcqghUwHdJyTi8N6QDP58DVTMfgULaMfx8P9F2",
  "key17": "VmycadM4kk2C6E1FPhgQjQDuYUwnaVdLaaH9oYGqupt3sy5vsAVLJgYEtFHdPF2DtWxBn92ftda3XvABuQ4qGP5",
  "key18": "5AvgRQjiMHA9mi6kDnkzBYUA1n5qtP9MC6jSa95JVo7F7LkE4iYDxyu3aMaX7C4Dx8KRPkU92KpwWuomxW5NwH5e",
  "key19": "gh6jzDfepPM2qgrRjzJhvUp7MJm49CzEHNLTUPwvmdu94y4mMTjJMqsCaBtKXh7Yxc23yp1vYr6y43RXxmh1nrx",
  "key20": "mxygRzcUW2ACkZY3i6qJLBKuNc8wE4L4x398evSVUUxgYMEuZDTa2rpgNYzjW2ZzZQ3B3BMWyMigt33PbTJUx2J",
  "key21": "2u2TkeDL5YsLwjkaB1WsBSPsBPCibmiPVrsEmaXcgFEJ6CpC2gtieFeUYhBzfSftv4H65wNGTvucFizUKzhPFRci",
  "key22": "JW1riwjUsDVyPfHRkgt2eETSncVzNHUqkyqZ7Md7Gf2C4z2ZbPZ88tk9wRNCrCPRrR3bPKG8ZFqqmVYPpQrPS89",
  "key23": "4KetQsesKJevGKXPEEcG2oiDpSmLLF7kBpHeTxEPX3Jf7YUPFRUMK3QyrfRj6rkZdtMyoiWJzzKPjNQyZsLhLpfm",
  "key24": "4ans1zeRWw9Z7VYoC1bpNAf2JB7HesuJ5rnV7iMaPNmnU4gEYpiWRPPdc4dSvUYb2NFQxMYWt87a5Jyqojg3DEzv",
  "key25": "5uQeUreNUb4vw3XonutG4YHmV1LtFuSVwoadpAC8CuEy6uZrg98JKVKbZ8Uix4fjQH4vMb2L4qyGejRFnNi1wtrP",
  "key26": "3Y3PB3urCB4yRVNUbwHdJzmM3s37EFh5N9pqmbtLQY2NbwnioE2JEiER8xCwSTs8XRWNM8eAvfLDHXHiBjHdZtQ1",
  "key27": "5BkxtQXmJqndZVqpGTxYHHdpHbBNGvPfc1a6e71oGyXqRap1vhs9mNmsq4vu6n9orpk2RFzeyn4eJkFhKvWrL5ix",
  "key28": "5vkd1nHxeZJMjXg84ZP6PmNqvQ5iVRiUq98Gci1HL34LABcXxY7PGdUJDbYFPSLWU2qKH8pKWPeNvWdhinnnBs5Y",
  "key29": "2s4G43PdiqAW7gdjvom83sbxWeH3JyTp11E5AVAvqSNXMKb7bnwj5LAGRUfqEeUGRvJRcV27C8H8A5jWKe6VrQgc",
  "key30": "H7SnUY7MhXtu4qHQFf8JzLpMhGk6S9znQrWSeVqTfP25JK8EQvAdum1XGFEscBjnFCm2o6JFACVJH24nF6oRiWG",
  "key31": "2eQiMfYLTGeb8gnSmQCDASPhYVKrmAVrUdaqUaAqu21HHeeQkJTbSFGWtNHwywamtN6EHz72FoxzzcmtAo91n2jp",
  "key32": "4darsUfG3bxWc9Fs2CCM7u68RQYveFp87NvYH9ixuhznK1nUEgAZgo9MSonwWxQEipDo8WUKhgg6GQsc5o2hKpiU",
  "key33": "3gEQFV4cvdhtdNxBacurJYUbviQPiuZpuoCYtpC9fod8tLoVrhgjdjtSwKqjtxNMmDePV9QtUW5is1Dys6uBYSvm",
  "key34": "AhQYWnbMd5hNrThuzveyYeGioZiF7vpvyW27KknxNgrA4mgSLAJC9RJsKwCsVUJ9VaGbfqmcz2XJSmSnoSoZoW8",
  "key35": "3tWV39asX2ZPxT4KVQ4Q2o83AhBoN679rEzdyqYpgy6nSMR16vBe4qKuwLg6kRGXqM3Ujk82wBrRDZX4QxZfxJuZ",
  "key36": "3q9dkEtfjCM77nYr3T7ev8mnrZzTdTcEaEVaUwqRHR2osYSXGvoP7U2WnnkiXt8y4rBq8wSVouZR5NrBgghsZW4Y",
  "key37": "3Z4P2pmXV7D2as9DaNX4DC3dnSzet9DftWwjTEePz2SREVRuJbYR7TG88HUHqmDL8KnhFyDpv3ZgFFwpein1z1nb",
  "key38": "3zHnbN6t3zS37SFj7h2zqWLQ2MRcJGGFDff75C91yNjwSW4Wmzy5dG5HhxeVU1ZzwBH6tWCg4TpB2PL18mg6DKfp",
  "key39": "UA682MRnhXQc4jfjxm9Gv2oaniKMHNXuCjVj6VgM24EgpfUW9ZqWzC3nMVe67qLqyYX7C4sofE3GVL2uPzL7Uit",
  "key40": "neX2xU1ttX5x1vTSrDYeYcC9jVNJSELZpzdsAeWM4NS8UQ3WCSQye2jBmrcpFMrGy6VUyJWQKL42SGgfgn32iht",
  "key41": "2gc1BxbkALEh5XXnFMfBecrh6biW6xwqBL1foPMek3jt1NDR8NEz8w9XmzDtYfLbsuE3KACTa8v68WrtefeQvDWi",
  "key42": "2vZHCBMrdmnfhWPegdo9RFjE8gTWsLPSPDwbGUv7tAkpBdNeiRuie1fEZueWxrDKah1EbLp4esayY1nsCGHHpzP5"
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
