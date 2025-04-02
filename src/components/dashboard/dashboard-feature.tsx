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
    "2pfpcVnCD9MgvM4kNTogFxGMrs7VeX8rd639XBEoSj8mGHvM7NroteTEUbGCEChKZ2JUfKqSuGYXAw1nCUiVh5dS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WYoEcdtw2o21UyN4QrKDR7Bg66zjYMHFkWrbpUL3pp7DiLHpjjQz182LteLgex9emchpFCXTMUwBdiHbcj71axd",
  "key1": "4oGkwr5Kxo8FoYy1prNgtgSDSfpHo6ETGRqpQzbEmFdePYCvwJvXrYwpuxWZNprKhtpWzZRzVPK7oA9W7284RXRG",
  "key2": "4tSYDr98QcUmnTe9qrzcTeXrTSbbnyqSLab2sXyDZrsJnfVbmCa2Gaa4HroP67UaMxJD5KymKoKLsRH9UHoeJHVr",
  "key3": "2XrdViTTCM3Hmpuc8Yq67iT98mBe2FQDj32CtrEaYL71rRjK3unFqCB2PSipxYhKFJfr4MKWpYsEyi88d5qSQih4",
  "key4": "xQWRKEMkYa4bNqjKshxDG26AVvYhY3Y5pGK1QUDQqBxK6vaRVY6v1bRWr5Q3mUJqPzrJzJdymzxfwBBaGagJGyr",
  "key5": "4pm67dj62THsnJx23pujinX3tiWuNaxej6ApXsbdaSevBFSSWtq6RSgM7TGWPmCs5mCNXMGMFJq6uLMd9hYsCMoK",
  "key6": "62EUxuAmYBZ2MmUtxkyif1M7Yzpi6ETahsi4GyJDjUcPaGmTf7KFyiaeXX7p7TPS6i1z4paBVwEbWVFWbXQeAydx",
  "key7": "4mdEsTfubF1KFQvHYa1JtkoYgT5LxfBNNoFU2vxeVQ3VEsELs6pMtgFBmZpiLZzFKMrbunQWMEAXDzbXGVKBmup4",
  "key8": "66Q3zw5p16ppfG3jH3iTiji2hMJHm5nPcHjn1YFEWriiaRT1t8ZJv7rGy3a34FK3TpJTno2atnECNUBvk9Vazx6V",
  "key9": "2xvMBd2GodSj6RuAQM5k74hHHJQaAw6bDCzT3YcmnLXSEeVyfC8VjBPr7NvjbRJqmMijbpjJ3N3gZjp3JErKXbPx",
  "key10": "5FYG3s1bJriXtvbTasBvWkunk7umPiWoNL9W1cvv2eLzW6FotoPXx9gSC1fqtB2U5Yvj9gMz2mL5hBxb1i8zYJh",
  "key11": "24BWyp8nX29Rgu7VX4ah5vsw97BiQiRUtCi1RzbeWgn7bDxfRtHKWD2tJcN3TVCoxyrRh5qkYV7ZLhsAnu5Bemre",
  "key12": "4DSUjpWy2vxaPQEGYHzgFobrSDop8oXxoS13Q5Wy4x55qhrWbZxVztGA2TFtawxsoNLZ8uR62Z9kahZacvivUX4Y",
  "key13": "291utcF4qyqq2fvZgKkdNrC2CVLeCepigqL9E8z4HVMQgDxiXFkysVpaYGL6D1kgnekVfNFd3YHCoQbFxFk3Shiw",
  "key14": "8BqT5rQAavtEcHK9HEaKimtH6vcDKsXSU4EyFsnHsFfDdFS2w4mvr21xaPba8jNGUg1hpg7CVMuAkNfm13eem8g",
  "key15": "4eiLyPrt69msQnAEwW2zHNhj76seUns9PXutuA1Rmc51TNzVGi2AwtqLqrd47key5CESzXWhDQjNTojMtYFP2d4y",
  "key16": "471VdbWAD94eEMQhPWJGmHep21bLzZbduHHwSk5G3jmSh1egxjxBxdyUrSqq97tS3b9A8brovCf6EHeuUKer4NHM",
  "key17": "49YvCBxbckeKB2oSe4NDdbYbeTspNBfQjWeKzvsWaJSS3f19vvQ5JgXN1qnYnWCoaRgjCU27hvsmAnbuiHXfoo5G",
  "key18": "BKaZ3McmLAw2VUAVLcWCMyubgGk4Lk3ExsRd926EXghZiw9aUzM63ShrxPDGEDTYqCS8xKCYYbNX2vJcr8yf3T6",
  "key19": "2DSxFQLBFFF72hahmRdsswifubaN5Q6fmAq8xCXA77kZQB1fcn9HNZFDUqk4v34mqZ2U45U9udFcaKET7qPhp8dG",
  "key20": "4Qu8zxf3VUTchtuiHQy4sk6q1CUGSAvAHbEMXqp9nB7kP9DzLxbU1mEgqXCTVh9ptEDQxzRiK4HShevQD7xX3Xbe",
  "key21": "2SBYKEsc5gt71fRSzPxquG4fTFPZym53uWNKWpMtrojCBGpWn5tmXWXVrP7ApKakbkcZdmfpxTFb8GMY6CccmYN5",
  "key22": "5V5JJ68yARhnmjg9pF9WMtezxytgWzYtWXc1tBqU84xwnpapUcupbeFxAfJuHtGfNvAUhLiWJ714VFJUnigqyJ3M",
  "key23": "4HdZrxKNLLQFQncTe45AdmB1ZxcbsTAAm1bVfeusPBsshgF78oDH8J2w1KQ7NFzaxLv1wsfeyXGCqUJNVHfwneaD",
  "key24": "5LatDELA7ZEvrN6PNZTPuJa5Q6iyoLEsamcKMp8jZCw5FzWSfC34M9tkrMcxjZcu1qjoZGFHpxiXVBDBC9gGJtyf",
  "key25": "551qFQm4wi95mM9awaTe6EUn9xZ8kF7QP2bcTzVY2saYMjH1TuaQpJda6axGyBQiwaX3NpY5DJJuQNmecARzmKVm",
  "key26": "3hvmoBWxj96zYV13z6yt8zco2sQre7uPnhyGMt5bRU9zquZngvq7Kyjt82ci9vo7e9pcJSoWUtt3f5ZnG8fQVebi",
  "key27": "2NeiXSgfDXKLeGsaaNeqjYrVwVLWM7EC4S7uVfa2c4pum9DCamviFkxFfHcfbH1xTbR9YfLyrM3wtWfK3yQCpvZA",
  "key28": "3QFseEjc6kDsqU9nGDyemUJvCFcR3azCov5zjWDt6PcUADT7D23NFDZByyrWj7kuBhS5cTD797LSZUHvDB56cEBh",
  "key29": "38GHEsjF92ww83dkKmxWM5GxKmAFLBzU2iFZJ6cA6rYqBwvxrEJ86uLNfYy8UP7NaWURysycoV2Vjz7BH4tBqQrR",
  "key30": "4y6mxMW4eY2aEWkQZjE7tkfifcvbzBCKUBMdWijVYrQv5oNfxYaJ2QMsr1WDiieQYfMQt3PCbDh4s6Ru6g73kfq2",
  "key31": "3ra8NemKKWWjw5p7oMoAP5TN3xDM2bCJb2Qc27U7MVMiEsfXyjbpmKcbRQkQVZXtm1vxy2Mwxw5GnNQMie5R2N3E",
  "key32": "4w5EPhVkaKa4EbvgwFLuoGDKDDuhnn3mwSbYLbTHBDnQ5BTNHZtbznoAtVEA4dGs4GWSHRMxk6LpbNp8DHSGZr96",
  "key33": "2uis51pzoQYRZtMTeJXL8e8fdgEGHZCAYy9zBPfzuHNu412weWYvx3F66tqGPNXKou9i53RFNPdvg4ZdDnmPrCcn",
  "key34": "4iQiHbaGK4rw3ALfBTDBM5XaU8GTinTZWdqqntKRRN6mZuwAxsFCx7dMTDtmfyLdKsxo8tL5aRDPkherJagka54b",
  "key35": "5UbXyc8EtH4EYDMWSfFh2xtVgU4TFL9oH39txxLSBWtox7MXenXLyTde2wf5hQG7FBPMqPCzAyUtiDYFQQLa4U9y",
  "key36": "4A1YpZcUP6mV5mFstbpQKTbC2oRHFd7hJWZYnTDXfgxyqHkp7Vk7ASm14URK1tPmBDXxYF5sD1vTd9LXMXfPrXx8",
  "key37": "2hEu4n4kGKgCir1p8teKz5ZPGaVJVp9mvMt8EWcmYqzHazz6t3hZYsfEfpRW8v1oLEHjQBf3hgPJBdXNsmDjNQ5v",
  "key38": "5V2Qq8qRGuZjpVaT44ULQc9L67Cfykc1NbSUNM6bNmiGztsdjVSf2K81CLtTDjJUqipcVADtPTSqiUznFpoAqLtd",
  "key39": "2KrJvFhsJhjhcWNzSXzhYis8DwVeoeFQUzRKBBhPwTkQPUwpP7AAynnJ7qKNMRxx9UaHpnoFcYKGd1etd3nBJbfs",
  "key40": "4qFkEWPSUN4YY37PTEJsmU6N17BAK2pQnwHXfr7ykuXd62KxRb7mroH1DMmLshTQMoS9MhF3zx3eozt3A5sWjoVz",
  "key41": "5XZQ3FAGG6drY5Xo4V8FZB5ahvBuRDY3WU2Vptq6CZuGBDMQ94J1GqHHNmtKqLhB4Z4NMocRBX5rHuPU9tXB86n5",
  "key42": "FHuq4QcwuSP2GQDkn3iZfvwwRdNA7uBfAWrc8AyQfk9iJnPRFEwR3gkqRwDocmWbSBeJMPJ5h3x3PADnWtz1bGu",
  "key43": "5yiuDwZCZD91MRKFJfcFXhAfRMXMZuaBNUfxZ5Utmc4R76EcswmnLELo9p513zmfRDpW3D33EizjK7W22heEZq74",
  "key44": "4Y8EyC2MU7dikrzTRYU8WmErRLNMX2ePQLQM7C4mCS957F41vMgSoToarXdsacuzu4dK58R1RGho5tWmSrnhSuA6",
  "key45": "4a2eNi2mV4ucKPegpF9KFpDesDBcb2a5mt9MTWgAYib28khJd28Z3CaKmBTbd6eQFztxGygiiXHoF3bCsjZMnD3C",
  "key46": "5TuPEkYJG18UciEgF1TWgsMQrBd5xpvytJfpYWEh6pXQ5MwvcpAJFR8rMhphQdQCi98EeRSEJ7VAtEakfvvBhJLc",
  "key47": "3nMaPant3zj244s1VnVwhs3ds4CFqnPoDgn21EhQiKQUXRhHx5awQsoYjaJ95GRJuDdr4VfNQ4bQT7bKwHR78XuG",
  "key48": "5DPFPZdDLrBshAkSgjLCe9Z4CcQC8JeBiPc5Q7SxfwXgdz3GQw8q4XDKwuYrAHdmRTk1zDvTMkCCQXXZXSJbRpjY"
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
