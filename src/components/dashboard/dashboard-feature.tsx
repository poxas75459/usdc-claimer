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
    "5bLHB8kh14g7pKdSVCwazdoTirkZLDYTzxNhUFsoDj7Qa7ojspMdSdBwVDNUN7dxt7mfXLMb87d3QqYA1b4CcefS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PH73Y46Gwa4Q4qDVJBKuhbZA6ftAv9iNyspjKZxqxF3jxWqef1NWi6YCa4Hu8M2HVztoR17nFNVD9V9GoaX7jEU",
  "key1": "5BuNpmskEfuiasEZuFoRygbobQhQQrau9oHoMhUTMzrjPn7EfyrRroGdV34vJfXZneX2dXntEbQAeaoobxo43DSr",
  "key2": "1Vr3LNeVLYEUnzm3VQ4xMWuLxVaH3Nh3apcHoVhL7Yq5Fjm94kwPLGHVZGH5S4GnPX6JdSrRvXQnUAKHCV82RsG",
  "key3": "4i3HiuSL6TxuU4TpMFJC72kG9NcHPXcJoNBj59McX4RtG6MDj3fXfABakf3t1nSytEexEFfoVAKii2psbYnc5fzj",
  "key4": "2knR5z59kLBvHaso5hY42gvSfobiu85zhJmbMkEaJDbMkTRqQGpKrQmxcUgj1wRVi7qqPVoPyMyp7vavHCjw6RjG",
  "key5": "4xMKq4knoXP1VR7WWF3L1ukyo1dtUgpML78QU19f82J5u9tdrBN155AVvUtLsxx8rXeTHLCrtLrmHBBCjsXHB4PF",
  "key6": "573kVb5kCNvbrdERBSBcrFjw1Q7UTTcADnjmAcjE2fS2V4yFSK51XUTv1HH2jYUpejmWUkehYktFDtTQdXBsnVmU",
  "key7": "2RxSXFhLc35G5b6j764oFoNe32F7KLp6K7Bd7G6NT5PoyhHYTkDK1vM1CyCo5DJBgW3qNBRLLLG6zvYvo7kmHAw",
  "key8": "3AYha6tBqQTnfvbo3efCudqtWGU2rEWsVT2ziJZfG6JfEzPGAXQT6SqBtm32RHaoDypqAcGWvaNtA3thDHHjd2Vy",
  "key9": "Vb1KhJbBxbzESYj2NnVZDwqxMPZmR1fLHLp8wryshLP4njBwDQuWznwTSKGVFDXaHGqKWF1GoteVR18nhb2j3nD",
  "key10": "3mPmg9Nfn6Ysk26jwJA8gYs8TjrdMr3LLF5VSPXJH9adxjVnxNpqWBrH8KXm4v7mJrnB5DDcuDbeKUdbUmBbqj2m",
  "key11": "6m5NxeaZnaPdHaTTcbVYDvmGgd3wksuwhcByd2YfQerUzhBr87mPSFr6sevZnVw45sTU2DpqeAQT5tBmcmkEX9X",
  "key12": "2dcPjC4HBbXArqQ9ejH6b81k3PnWdzPqiFajhGdCUKDs64sgVhDaZrtqYetZ8SKvP8hxDuQHT5RMARy6MTSHcJQi",
  "key13": "fmRBNktHaeSzT75fLMGjBBzNTmzizj7mGeZiNrabpxNeyBATTCRNhUpAsQACb9E8W2Aj2VMkWfGF3iPFkA3kby3",
  "key14": "ZEnaGu2HgcoY73p7h9kFQvGR84DmRg8xpM6rbx9p7Y3JCoa4dnzxNBZSUgcrJ5PZEwkbHXYdfShXaWePukAN4gk",
  "key15": "2MCiuP4hW6c9HQDhkj37yHK5zpx4GfXNg3wz8h2zH3yQ82sL5FD3qAUs23hfzN4TzPiUTwaXd4Ymd5EHJLMVLuWs",
  "key16": "4T7rdnPU5JaMZDF1fES6XoqQc5M6Xa19psPsj9DXpVuittB35efyLMKMffwUTxcwkAntGF9mCKBKy3qqGdvXSkxs",
  "key17": "ziyxw1c1XgxR2cGsjh5QpvfjYWyuHGvMB8s67VdoN1k3TffZoPxTyGtL2oxnEu3vgCHUiyqNbqduyigWcFMmAuB",
  "key18": "26LEmfrFef9fFko7HJteGmVf941nYpAo3aVxULVmA7GB5hy5t8rWzwA8oMnhazk5DvKSGAAAa6oygKR7Ag1VpFKf",
  "key19": "2sh6oitKs2oXsaijjWdfshqGLNHoLnxg1DAGzZ8LSyV93WGjJi3xRo7KXPTd3V4bKbfdoeKhpLD6hihGtvrATcc",
  "key20": "2T2p1T6bVKWxisW6o2qDbP2vyRKQUikDjagHAzGAs8sq1xPBASkxCFC6ZNWzmGTkoaAmvsWJyRi4AiNfF3ib8QzL",
  "key21": "5NMoUwJCpEq52mBnF6D2k338nk6SQXjWnpwonGLNC8FztMjAqRgmJb9VDVpy5U99n3rpS8neGwHvch3J6vLrdFXR",
  "key22": "5nizCn58UTsZekRPHjeFxtbKkFdLeptrHB1uxfeqihYMxjATqkKnm1XezCpQbnDJYahJAiUHziBteHV3SaQvc93g",
  "key23": "2xYD3BJrZ1mMtwwjsxviNwU3GM8KTh351R9icrM8no5z64uaASRbXMgHSsszeW75bZnHz6JXwBYQsZojiRwgD36U",
  "key24": "3sREUJPkY78iMUWVxHPrxHqHGCpu4urrUDYebVRRSCZhS7bnJCzcKBYf9HpBzdmNkkDdfMLdcHs3mQ9Y2XZAALj6",
  "key25": "4JpaD3tqiPs967bSFek7Wt9HcqUSLtHbF9dw3RCspa3v2cBXwWYtaoqo67LwNfSD1H5knDXnVELrs7qJijkDsmaU",
  "key26": "UYTKaQex5uUMgW1dBTCB9EDEG7uz49xLxwYUf47cdQnU8ZF3BrApYbVVyQhpuJ6YVvf4sCdr1GphdwF2SKsRhbg",
  "key27": "3VnTvNNgCgpjKunYS2Us1WDfjxhWS8nWN4jhCY2QDdWHKfDEdBmSk9pTK77fpGvfKjHcqujRujeRhVoSiHrAogfJ",
  "key28": "29HNBDibAbwNhLgz23Ynr6Z2hPjTCDdeVaBH4BmYv6kU6fSSf8ygprP6M4PcNtxmVWpaxP7Q4y1A9g4hy4jCk3kS",
  "key29": "4UMBXgoK8VK4AHDeeW2TWDDg7GWc8Aksmwjsd2tb4vAjueXxGuJtenVL2UAZD5Wymxm5VaU37yzyzJ1MH3ZJ7xBa",
  "key30": "3aiCK92E4wsTEXrgv2WADrHT71UH2a19UpwEdUk7TRxDbtxBrJafnk5D7xPWPpvG5bcXAx91HfAtT4ea2orTcr2G",
  "key31": "5w9iH6qY4EKYMB8UGZ1VpmtjaTCyrBBF8u7ZrFVgn8QKk7JGAonwzxotFwVBeqJSJDBhckyX8CQVp5oQ4hrZrvMG",
  "key32": "2i83D1At6giNQXHAK8f5TCeZn3TjTGL9QRX1uYVAttfpEKBSZP1mhp88h5QAgAVPtiN3vx6CNaB2ye5Mgv2D99i4",
  "key33": "4yUYQFCwTCUnHJwWdBMD2kGEU2ncgzjHp1toXz518RdPqAhyaWF9qtWbZrBKyhB8bYBn9Zih749GXhLerWqu8Ub2",
  "key34": "4RYZd8bx2U6HNe87rdUfUciXNcyR2Qsvno7xv7AaFKwsnYAvEobT7mjXHQjvcxuNaeZx748K12nppgaUU57AshYd",
  "key35": "43ydqFuHf7gLnwsJvawszsXRygaCfTVHPEPCfiMfLF7TMuPUJkTEP54nvajThRLPvbwW2n29cr5ncsWeaXhA1NLi",
  "key36": "5gi9ZpwydYkVh3GNbDc2hmReRfprR9oZgnzTpZGuzByZuD3KSRaGYKvfC88gXotWSsoZ3WMz9UJ4ZSbbgHvtkou5",
  "key37": "7Q5hoBNAXd2TAHQYo7A6ABdNZVz1g62gyDt5M3UDDentcXe8YUjZLmxEAKZnX6fe96vRS24e2tZNoTZGubc9yzH",
  "key38": "4Pf7CyocMzNqtmMM57gBRsx9Rm3DbKNu8atu4doQ8wAihhAHfVnDbYNbjTC5qZAnGmZN18SaBahJ31ypRZkZpBpd",
  "key39": "UHLkZzdr6uy8LfjsJ5Tqs8vYyxKXsGNHuUHWwmRdCBbGRv2qtPye4auknUZxJs8V5u9X69Kym5q7KKjBQKjje2J",
  "key40": "48G51LTCGRzhganjSKusV7EueBC53TFu3tB8uCUpcDVQ1GEiQKJRFU8AvVaa9krzg8AR686wQfah1hXvxxVsoWQN",
  "key41": "2rZG91QE9CDNgHWjo4kL7GnMn4gEb3cmXVoKDn6fCTjbvq8hGmVMzYESdDd8wUwWSjhtBuFd9uBYxCaFvXittxGG",
  "key42": "4eUhh7Cj1na1hzpipj1mT3evCT6h4GfZHgNDjpUgiV76qaf2ZKabveg49yeLZ1CuKmXb64FuMNjj9GiJ3SSHiseN",
  "key43": "5SPb8GK3YyYqZW1VjWRGtUiyhtBmUFtXxLspxLvN4LxDzt13ActdtYb2pX3gw1koT2g3BF5GZqU4tmX8brisXHu2",
  "key44": "9mw8hWcD3DkajMPT8kPes1sGzqn5gX19hAxEqpocUkPWz2JzB2YHficyskCeCaBNJtP8DiVR2yMymfJLZe62BVn",
  "key45": "23moQLt51sdUpCBHK8AYfbKjDUH1684UkWZgVZ8PpbYjHCHBsvZzMDMsYK2n1e9bT4xMhYaAR8hi6VXsdbqsKWbn",
  "key46": "5w46ZaFyYaDpDUrNFWt7iGAY75G8jWPsQuR46tktjagGBhHsUZqbFBkE6AnWAjfxoZWd9tBmkjeE1m4op44PY6iR"
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
