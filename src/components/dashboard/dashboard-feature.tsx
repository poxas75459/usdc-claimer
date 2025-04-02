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
    "BWv1wsPM2hUkuFzFukjPMrcn39v6ab5a2aEcDDuHUNMsKCfaUmYRDFZ9NbGPTeqmy5yeB4SyJnuFxAvdjcrgEnK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TjHDb4bQgLK7Lcfn5HACRvAbMNaRogosTcdeYjuA5KCwTpiKgyvhojoJx9MdsuUBEwQKCehTywiCBh1hHZCekHv",
  "key1": "44Qg3qS1Jhu5TUjhB9eztSEVG2mV8XhwSYxv5W7jGu6RJ2cYriGVGeWGBjoEQixQ2KXx1mhkYuuoZpPEL7aVFfAi",
  "key2": "2CagsUvum6vagwXLnKVa31TFmxPR3ZjENgR1MVU5UX6tuobV4HDvrqaeQdGHumBTDGvsmYrzY7xnrrCA9W4YA9k1",
  "key3": "4j1GkZ4SLyQL9VfRLLhtXcsfuMaqSjnCB4RWqRFnMXfuVJ4k4ejbbjwr6rUDBrSRLgpn3zw1rycPaoNnJtjmcAZx",
  "key4": "439S1S5SkoGm2kmGEf9dBZ7QMNnLpp92Kf6PX4LfNWW66cUrFhdZMKiYoYarnokuBXjPNCipYwq3Vffwy31y2vNe",
  "key5": "5NQdW8iJ9JvcRztQ3fEdPPNKFtKRzZhX7FbbLvDkvZZmQREBZcywSVZkuuH6LeWHjiJPMy5kQdC8SSwoFtw3oXdT",
  "key6": "2GFjiZSjziGMYBzia6K9X6TqtsrTZmp82UvdxVFfeTS4K3caZ1fXQU7gkcaib7HD57Fz5Rvsuqtvs7Bn9NyyRENq",
  "key7": "2weEWHsAo2KK6pN7JcpoLVAGJogN2UKnSuLh4f6ybzoxpZ1qr3Xs773UaJhPF8W4QtY6LdBMF7NAzGwgHJjD5zfG",
  "key8": "4uNQvB8wncUTd4HXAG9DovDigw9AHEjFoqemkLKBGyzhQnRy825hAvD9gVhF2zCx95y5bxYhNpLcc7a2npcHAhJF",
  "key9": "4rpPNoh2jtj7vpnLj9UeEHHZXTdTtHdSaMA2DacNb557giJT6Cvbuue6vb3aimN4U4wA3FhNxzo9G5CC25Ex1dBL",
  "key10": "3hhkBNdZX3UV2KyCDnFpGJXcT48caxaofoN2xVWCBMT7gGABTbV4Wgy6ioUjTcjeis8AAEE86j1pGmiiJ7P99sVx",
  "key11": "2dkXmZLfmJQv2HvDyJC2PHeaaiomvTsaP9SfJ4wgjN5KcyjqfaMBg3qpi4bmiKLvRAPuUrTLNmXQhAzQJ41RL4ag",
  "key12": "2pnaZqQG6WRJLSra3Ewjgcy1h5KrB2SaWCv2R6EqGKUfxeE8ZNVFoF5koUERVSZtrF98CQ1WbpMohGf5Vj5VL3iQ",
  "key13": "64khK1PSDUt5jhdHHHZh2ghDVLQnQcweNtvtysC6XRziQ82TmLmgrkXNyL6ZQyMW4f5jyZymdYjMCDa1SeQFgkwL",
  "key14": "5x71xCZkTqssSV8bp5QkSLq2T1HgrshymD315BqjcDRyHxACmeMokMnFJrhcXzTYuiPYnVtYxgWZ1ZKzmoiYs45n",
  "key15": "7av8ocop6uzNoDnZ59XLgR68A6P3pWrLtwmCtj8cUWbqCnydc6oVnFh5h8C55meXzQCPKEW9BVqeKsBfW6hhPTv",
  "key16": "3AWWQzWHhyLi8YdwsTZzktn44zweeKWTTHfUukWnYvzGEdqXuqxSW4xhTpUXbmExw7AsffiDcmVS1Ehy3nwLQoKZ",
  "key17": "3KDpxa7vEXrgke9iE3tHKijy8EDedhANjP7HH1UibEbnxywLhTZuznEwv3kPCjDrDTMUCX4E1q7FLbvFVP3dmxmU",
  "key18": "5CFgZZK6xa3RpZRDfDKbWbRfMU2FYUZnmXNhhoFeeAgDtxvQWMo5s5QKZwqkwryUHws497xd8eHfgPMJQWYCGFCs",
  "key19": "2U78M3FSBSi456fuNHQdy2txzXK3PH6SUMuxXgTxTA7Rk2J9QqibXsyBw9pAwAKiYJQ3NUw1WLmYzXPMTFDfLUBV",
  "key20": "47DC3brKMyiB3zeK1WpL9zvkPn1d33v868WVohSPnjPiimTQAncqf2VHbjh4iFeaf5FTLgVdv5hMtqwMpjRSE3Ly",
  "key21": "41ack4P7EysimiC1pZBWUTsu6yRZjMhyzFEvFuf7yFJFMUwVbjghWZ2Tf1qmJryiQS8sYj5E4ntCd8uiQvZV9rD",
  "key22": "5XMAi7QmpBMvNTeMY5fw63o2u9nJNYAmssBtA5TZq8nTyYSuwJu8EqNYkudLXMDba84wrokj2wniTr1iFfUgG9fr",
  "key23": "4tBc893MnLRPVAREFb15yhsxk5zL32WeA84UBtqG4HhkkJtHmrKJs2XeJEkPmVzzctN7g62iD2fTVGrtbop7o2Pw",
  "key24": "43uV2o9HJ8qMPqWRRPfQkRtVuaBXPb3zbB1aMRyHCc5Yt1evACWddeSvJGeoiMSaXhMQjLBLh7aPN46jjgzeuAqA",
  "key25": "g6m4v4jMF7zjFs7kBZLd3K2hYbPfKqBXHBJszrAzD11McQyiXn1TpMFyH9adQ792WXyzV8U1GPndqq4p37DTpJm",
  "key26": "3hxAKWsKfbjmYaYokD1tR59cLVvwiVBPbMEPWZtbkDRckH1Nqr7wSj7BzFojB3AGQFQGm6ieALeuTwYg5WJ3Md2c",
  "key27": "4Jeormk7MgXrhbDeobakQHHYSRdP57ehnWUQimXwAq7ru2Jy9v4RapW288dduSzayo9rtPJTK6V57jECH3h6zf4Y",
  "key28": "4oyErUyex4GwXrNLYXe3U8wSs4BG66ub3Z76KndzkwJqjQgGUFBVuFVGQyDu5RxShaziQmfNbCwjzZMKg4mMt71f",
  "key29": "2jZPfUuc3fmqYrSwc3LfDCoEaWgKoP9u4WX4RgMAWDWbLT73VX9WtXE9EgBuajbWyGa1uAENfQrUVwURADpwdoSe",
  "key30": "3Kk5iccR48p1pbmMVqKm6iq6Z1u9vzmyVnrEMDPWFyqu3v3cL45rCAJ4up6gXV65GaMawAcmMydpMAvAWUg65shU",
  "key31": "4p4LF4iMit1EEVng4NrTWQ5N2i6i4tjVdYRMWymSvecJPnHCh8PUpdwppss37E4kyt45kDYmLShhmvPpbdyoibWG",
  "key32": "5c7XtLWguKbabfHDaN3YnUf98p4QD1uxZU8Ncm88Bdjha1Fq153ibeii5ELHjm4PYLKkbbgtWCRZY2EGqifJ8qPG",
  "key33": "whvU5ev8TtNEGrw3MwgkvQ7RNyDz3ne33rcBWWRNYk24HCQ9ecy27JuRidPuxrgDStvxdUY4aTiRzkYDJP1i2Th",
  "key34": "5VQxgHMx9tkqco4rtsE1cmkWF9kuSQZRqVmEWR82QhfnUPHrsJVUSGXzmuC6c7ABRo9KicdRHLFYjCvJi7e5PSxG",
  "key35": "28UKrZHBJ23nqe1V92mmuQ3Vst7j7BVEU8qQGp2dbvy4w15Reezt5XaWTgbsGftSowGA9HKLhw7R9Sao7myUKdMy",
  "key36": "mWkNPFnQ9bkrNoxMds44JffmXP11HuViEC4Vxk5eALMLbnE6BfZMbQphM966psarTuTS9mpmz5Z7CKHWHfj2CDZ",
  "key37": "2WWhvZaMZYD4jgHtADSesrjHDoP9NvSpPL9NkySLRoxCB6CJxNZZSPLc15kAk1uausMpp6JnEeVtxqF6frYjWk3r",
  "key38": "26NfYuVueE1n2736Xs5YjbADhXcNodWoXGTYUmuiRRSRb6cuKsUp4P7dgqraPtxAadhLfYeoMRdQdRoFSKm8XpTx",
  "key39": "4SFJ8QBCNpw62N8wwPbkQedfXKmCiS68frat4LaMcqBobXRVGkxGibSEZAD6WNaGVdDxodmBzFFXzBuwdijB7311",
  "key40": "4G8wCL4KhFkFTEkQojtLuUXLG6vFeFbCoyFrHEGTLmM4qXNxRtrZSnJnJo3VkEgCcy6Np1cyGE6UvS4HQ4Keo7GB"
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
