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
    "3Tz3f3mQUPdoCVzzyrEQ5wyKEf2QiFovzcQsaqnVpmMN2DYyV8XEWiGeRTTRQ1tTXs3GAHJNMewAMqd2N7D3pbS1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tu6VuUo8AdhmpLVeNnhk4xtUGVvKzAjbEjTYyE3Vkw1K1mj9goiRtjjXprroAuWKZtDHs1Nuw2WjtjAYkhakpUS",
  "key1": "3t44UiJu1KzvDkKjm9BrV9zJoeVuTS95tdADWFAHnuT1ne8Ur2K34F83pSrZ22VXKj7gVHix2xevH2rYG6kaK3zx",
  "key2": "66UJerxkLX2RcHRNoEJBqbZqiqxAUR9w1C5sUf9EEBivrQhzgdaotTRX8QSfCftaAbVXZsExDamNaaYXMG15iUR",
  "key3": "67qsQg1P4mVK7yabEeLqwEhpnfNChcJRmTEmnCx4GF8zVkEGGV5hCjfGVSe1uMf2g2FnjMWP2E9pBjCQGFoXywdf",
  "key4": "2aD927K8QBBdavAzwmXKX4q6wEtiFnqeXqDuf5LDPt7AW2fSiJWQa6PCrvWHYq61CN68Lzp3Mvqg7b3ganbCkUfN",
  "key5": "4jJnnvWFZVMaSkyuyNmcktsEPtw1o5k1CVuM8rWhU1x24vSLATxzzhJ5v3bFw1ua5Vhy6MFVuUeEzUu63VVrpqPK",
  "key6": "5ME8iFzrY4vsbtV6RRaawzyCfYq6ndDgRSkJH5R4NbeKH39W83iGcbh9yZZZpwoUM8BG6QrBYovoAA1AU7k4aNwP",
  "key7": "2UAosTVfRNgDb3L4MQRch43Dz7mMhqmXCB23coAdj348D66kjBKDF3GNGNHm5nBya1p4Q8G1vzoxpug67aA8aUdF",
  "key8": "4AAgsQzptaSpaqqEzSDEChSqUBhMaFYFdKxQgd7NR4XPHJEpWP5LA5ZVB6jM4NbCGfqq1CKqkyUgkRQpfvbxozP4",
  "key9": "5gJNsGJAY5L1bKr4QqyNqqJqMBRLfepTPxyynEx4yX7LkGhwx6262niekbtcfchg9WP9vnUyrpYuKA1YTqpX6Sgg",
  "key10": "4E5pWHbJA699N61zCPSD8h5wjNWrNEBAKaH2ZigbiCnevcjWE8bF2CXVxLGFmeweDBEyqmhpbmWM9tojnWr3fTQ3",
  "key11": "2zKb3gHTtt4pZHfMg6z1Vpi1SwMyKiZnUiiyT6umzyTAcsYYWP8izsnt1tAkMk88g9qsRFBXT25CdCqx4jQZ6Xkw",
  "key12": "2M2oKTvjzuNwT8pvaTuVxrQqDa6GB6coJK23UGhGYmoyC1cXKNkRz6QqhnVoCaLnNkEGPsf68AGjy6TogM2fMkaZ",
  "key13": "2itc3L2gX7Xc2WQFzXRYEASg15gdG3rSq7rVd8QMZcwgBePWDniPeec9wAYZFqQgiiyuSLhwVZTRJZU39a6pMNwG",
  "key14": "5KZHgmzNHCReqZpzdPWztBSf9gHzFucWhDDub65qJHDTWByaLcdCYmoBWNWfqouWPgEDGiYx5ucDzqndVgwkP5Wj",
  "key15": "sZ1cyyNah8jswYUNXnJAnXKtrQ21igyr87T3bu25dQyYPpSueKCisbptk2Fn4D8iY9Pw7iDFPxVA4chi1PKbmQm",
  "key16": "2q8BiWGfEcfqWXgcsg4RsrQSY6bkgb6MWJ2hkkeVZDTsMGWX9DaGTgdMg8jzHcmqK5WZK7rDf4tTzTjtp2DbwxpQ",
  "key17": "VzWPrLHod6h4rkYbPmtVWtdSSFY2tPobyuNFMiVYaDYNJVP5R8VcKek8YUcvjnabYtFc7xBUHKhxhVcnv21vMfs",
  "key18": "52ssFWxKmrSmN2N7tukpKtd7ATH5y9xehg19cfSPQUZ7Y4CX2fAqM8v5d1tEGZKVTHKgjW4USDEf1DTJXCs5zp3x",
  "key19": "3gnbpGXpWEmhH6P1o1TC16yotXWM2waYh9v4vfznNaiooFMxLC6Ko9bKoxKpsxnYujEUU7Mz6U3C7s8VL8AiUm7V",
  "key20": "2zTJ7RoiZgZoF7Nn2hUvPzoFWBZDjtUPS8uSwoEWffQkgpmZRsrsJaAe2B3r4ejag3Pe1VuwJmaCfmyk4VhfcfEh",
  "key21": "41XN42y2Eey6u1SRSaN1o3ARmvRiufG9nZ8Ck6g22XeWW4YjxL7nj6M63V3KHatiA849cGF3316Fd4s6m24crb8h",
  "key22": "5da33fzAEoRNxLWJjkk1pZ5mdaPKHiQk7WJxtRsDQSkBF5ch3yanBuV5jHpd4hBbPT8y3834Be4MtMSYTsTgCFUx",
  "key23": "5r5ncW4cJtiVwpirmdLufrPW23Vd7WdmKgTiK156FQKHYSDtnG4efrHAaNH9ym6wqH4wqiYkVMXspnYFHwp6di58",
  "key24": "4orTLr3ke7w5mKknVR5srDfhtejnM8ZemU4CtLaM9NWEHZRsQfnKtotyLGuovLUU7DKGeRDEwK2PZ7KDH89nCBLN",
  "key25": "4FfDGx1cx8ejAHyXgaq7dbcbYuWe6YFYBNvyJX1YpncoVCcL4ZXf1q9cPMFUEb56Tra9D7QY7frnRCFVM3ucAVbC",
  "key26": "4dorE7nMomqTg168hd12xWaHqVPumY5eTsLCayhAV9ZzqiSRZMLYFVdLuCSpJXfiKdkCZHZGnL4GR42Y9x6huCvi",
  "key27": "4AvZnvWSM46ivQy2F6rDdsAGuhLLRQGvMUm7wadHzE8Y4Lj67avJdGWcnK8vHQAdc2NkJdJ6kJPpfEta662wCEvb",
  "key28": "3J4QTNbJEgNvwRhvhWdodSzDY7yNMxJ8UM2gegoseUw6kJPu39fnWWR3mFUx6p1WuTJimFz8EhKs1brL77yPGg8j",
  "key29": "5e66fTFU6mirx2kjngWc8gPdQ6s7V9p5uheFxNQ2pxSya6FZ41s4a6tpPhtvvkWEaBnzm8SkxAj2KAkxUJWd5RCn",
  "key30": "2tnALgU9CwGTzRWTR5JocoHyUmpynuUsBxsY3As5yphygTRBax13XXizrxv9b3vzzMNxGKVDo91mcjWedrrxiLQg",
  "key31": "jK9rRL99LMxjStKBykbcRvrw7LmfUqNKRaiD92jKnzTVPTUAXKcv4Pvh7BXDkfEPSUTr6vJPz4jD7k3yBBrXYeD",
  "key32": "4hYLUwCDjwkjMmYb9qVq7DWia4tXJRFyex4HU9AhkeZwrsdtGiR4uEyR1Csu5PD8JamwRxBEfpxK9d7rNuePGVCS",
  "key33": "Y5MYRReYZxcEDPVoVgW5JGhxy1vRq7H6nbwRyiCTY7zuHZYhGvkVvvAhhwVSecWR36hWGnrFpipfmHS2wRdJmKQ",
  "key34": "5AtRCC5TAEvESGBiJiXYqemahDcVFqs5r7rchkn9PcZp3WsSdpaX7MHsjUqF4bCfHgcXNDHBHWezyt5EhV97186d",
  "key35": "4qcTcLqDkL68rMjG4RDa9QexEt52399PBJuHHE5VLs4iNXTsTa9RiWkq3cPy5tGsHvYnwa8bTwP726t4FPZ6oBG9",
  "key36": "5QgqJ9y7et4kT1VU9UoCnbf6gWBy7w7RoPUr389KbuiizVNyJjpWc3VJ6WiAipNQoZyuLzLXHSvfCY4wTesxjzoi",
  "key37": "4SsUFxuj2yJFncL4mYvC32Q2beJ9AnFSkzVsC5TZnMTK5FfA5jnQQpYFKskn8idqkxLhfwAsQZtDnmXG5Sj1gsUv",
  "key38": "5Q4wpC5UkFhPyc19WsKEvg4pcPogWLtAXgGUNQPbjUrdhUqkWRowDg3BvVoe4GF4pLoNiLkgTEfR4qrvgbSw5SGL"
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
