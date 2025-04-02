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
    "2pQ6hQwHuoUPMqhjV736xoACrdWipWG1UZCXaWnFF5QTVC4P5CC7i3Y3b6M26cLf3cYbz35rNt3WL7Xf4H9R5usZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oFmtQXqvM5HvHdVxVdWSorYeEoAxKPXMkwYQfPJwVvPhQYmNHMqJshcAbE4bDowG1HsqQfPfM7rGY5HML7JbqVL",
  "key1": "4so3gbZADWGBvPu76po41JUnZ6kNshHaXEJYMjfHSDuPokhq8ecD73woaXuJZnG2KdMsvum6huSgs5Z7dVwskbEs",
  "key2": "5ccfyUqL39wogSHp89XwXa2CTqu1bSVyW6j2w5yzsVPpMVobN85jBd6tUR6CER8Er1F1H7QMbkiXxG2LCxrM7BaJ",
  "key3": "4TD5Yp52V5Vp1o8e6gt9aPEmwAchbYo5EoJzWUe4sFbCAehyuEBSoSrEy2pjhNCtZkgvrxxgovoMGVi3oVnLfKpw",
  "key4": "2MZSfRbsY7RGuMiWmMrDQjy686ixx5jpKq8mUtXhUzjUwdmUEit6RnDN2nvb8ZhoWUusyBnWK5g4D2yoKSQh21am",
  "key5": "56SW2GhEkwAnfK8KY9qsby7NkhAba39ETBGo38WP7mR13McsBbJoskiiavg1wiNKKi3QWk91zG4pYKCWyjzXfzzw",
  "key6": "67qVcMtfZ7YMBDF4XNpS9AtM4PF1CYk3r8qsuau7q2PL5D7AsGishrHN76cNwZBKmeJU9krHd3WEGB2nYjZmY5iz",
  "key7": "5uYaANeLQamzyNPDqrhphv45C9JecnB61ujaixCbmzB5gtDgBYTJAkMzKqvgdURsEbVVJrJ1zJccyFk5rrT28E4V",
  "key8": "5tUJUXdaaUfBjRSd84iVbfDVYx5XjdwHhG3qbuPyUUSZAgFeE5DseoWXAv213Wk8uixQbfGKos1GZfZLgm4hbnVS",
  "key9": "kKufycYpdGsWMm2ZiDdaCBX546aud3NZi1vt3quWMQM69iuZezXTrU54nU4XF1WMJrYbgCHvtranhNoes9WHG7Y",
  "key10": "5XthgnXtmtX5iua5WGkP6zME9ef3LFN8jmPkgjKXtLnrsoFEn4mdh5xTkPLk76HZerNUjwZf57scy8nopHEr6SCU",
  "key11": "59WxQGn9LCYR14pRK6T2LzeTTmCwtZFYQmEvjzd3TbbpmBX7SiJcMQkZNJcEGxyJ43SNfbVR1SGmd7R8jgdmaw8j",
  "key12": "1FUKN25pehnWMhQjnGzfuSwNv5G9edheWwEy2Czf7GUKQNUGfsBnsrZjw7LwQpHxDWVsCzQfxmB39RZteep8vij",
  "key13": "27qdTP15pGqSFTSXYWBNWDkEQ9kYTrFwLmX1mWeQGBjGP2BmPTxQLhpoEPfBZQqdfbsBK6yz6m23sEMaaYjffBL8",
  "key14": "4ahiASqxF6RTcrHMFRbm64aeC9LvMmmtB44RCHTK2aUqnV8b834QZUsUtnGQRk7Y7jDTRxn5eU3EaMTMsX9oaCW3",
  "key15": "4RqS7ShkuR8aQ5D7aD6Z8uCt5JHeTh1FhadzJytgFvR5ehLgj9j6VP2EtESvXT1r8TWHWRBq9wW4cDhQ81LtR6dg",
  "key16": "pP9UEx7zYdrRqkJBGPWXLmg6wNwzj3pc5JvqGyAomcms7RUjPL476PBkBLbTuMV65HzX6QfAKQF5ZYf7deox5sj",
  "key17": "2x31ZjpMG4PXpvQJXLg88jbksVxho6qifVbuiamrLxiFrHNQmWTR28i59CGxhD6dQkJh8oSLx43ZnmuTvntEE994",
  "key18": "4YRMeLPs6E47x4xv11L7sb3dpu4GbdxkZ8Yp3DT6x5WQyiPxE2TsmwKy9PhsS2UanHDeLnAWeLi4AX5QKwfjFg7h",
  "key19": "9ShKN8oRBph9DMK7ngtQSAkUCt36dcdwQCFPwyW3czbyCW74posuLspPzimKCjvQJq2dTcLjED9w3JEJ3cYe23i",
  "key20": "2ZDqvK8uEgUtEBhJr8cuAnS7kUFBWL6XjSZ9QteQb7pKPE71cTmGt4u6pAa6nrXJbBEjvbx4gVM8LQnKzCpUcZaZ",
  "key21": "56JPJ2c4ErcwshX84awrmfiJKgwdQEmhrTa74uDVvxUHR4yrNJqL8GYJCRqHM6gcaTVF9R4Dkd7wKWzw4KtJH2Y3",
  "key22": "4LD3RGUty8bhF72yd9Q11VrStihoas2FyKKnnuPAakG3wyZKfdKoJA7jwvgW8gv6Psc6kt6jTu9qruN66gkfTrVJ",
  "key23": "2Nk14DaWsvaQpuh5FagTraE5QWYziLChhsoXvUQBoU8RrRew9LxDXNNw2MUt7s8BpWTsq3Qr1cvgWXRrnfehbdov",
  "key24": "65Y9tdUzKMTjNSouiYdfT7LPb1k414EzbfLgEj64D1v3NR7uJYqQRfEfo5Y7DKMMTe1bEdPtZGR1tmj1zyfzSU8",
  "key25": "47MVbZETqY5T8YscDCJKCckSVVD3ViYSiWmWJ4JuR8fDVRtjFw9xzEEoBtbz8jVnx8eVq449qY1aa2hG5S91d5Cw",
  "key26": "2JwX1Xnfkq48ACEuUVarHzYz5Z9SzQLD3ULSxV1zmVito9xmRYsfehVQJN317gVYgDu2cw9vhJ1YUR17XFXSWTmd",
  "key27": "4AvZoHM2CgCe5zYDAeRgZbSU9tckVh9bchk2ZjYG4NTtFXsKjhWLZRHbo7aNsEv9FS5ewh6qtweb1LoGedzbdcVr",
  "key28": "d3ZSEpthCM9VmydDijsZa9PcpRk8Hbr5LoTnKAUe6F33CrHDdbx8vQMMyfLbMcQgBBcmMRjzRps6mb4QFL9uMDC",
  "key29": "4JwJqjisMwhhdmsvNcrVD7Hq4AbCSo27d1FDPAyU9DTJC1XgWfGEviAMK8v6R9d6mECK8pifPKKacA8dARpkY3zj",
  "key30": "MTAFubyxuvRLUWDMJSiN5U5DEpsnChikjjZYuBojYDYMYhTzYZBMkgCawq6aKprtbkKUnSk8Ha3AqTShbthoNr1",
  "key31": "254G32fuxBtn6sLxpXSqDxizZDrdXVcSWFB4jYJGiLa9XM5vo1tgveDuLkdFbWbuqRdP4rjK5r5gJ3uB2gBHfr4z",
  "key32": "4jEcVMvxbws9j3aMtejxFqJgmMWt3KyC5J9ZwHnQwS7nQeJQ9HfaxsRNXoEyJCcLcZA3Yn4AgguT9p6JJmUb1EqS",
  "key33": "4N5J5dSGSEPatTE7SsCGabY6QSQmqTFyNg1LJqEeBGwLuHb8kwM5iqHuVgyjgsJjwsYnkM1oca8R9T2YVtraSA9i",
  "key34": "2BcP9XQcwbWLJa745gcXwVmxpTi2qGXubsG4JUzZ8VstUeTGZw25Km8wmNH4MM2BWZWW7DgCGsdrQW2HYpyD19YV",
  "key35": "5UbuvTwadoqScddK1i3Ycpaqj8xEpdkmWqE85W9xoFS77xbMST9FtqziqAJcGnHASXG6WyQBpmr1uzRd51H2wpGx",
  "key36": "3SP9tXEJHMbiz4PbwC9bnujrbqmbCQ9q5cBGJh2PAe1PDJ9xLasBFwkp32WztEqiEeTeStcxuNVp4VDkDu4Uj2Yz",
  "key37": "5YpPmNSz3iWho3uR5SYvG92xAYwsZGRnWUSM7Rcc2WpdQorzWgrXcCaYMtcszht8kTmT2K72TB1pxTfVmEobDDQs",
  "key38": "23UG2xQMvet6C32tm58k71upq5UcRz7vza81SwxokraQwFcYHi8mTA2desM9jrsLaRedcmgcz47U9CJHSaa4w3Pg",
  "key39": "2fx4Y9MUxqESLht25PBkeJKPNVGWDaV98nevE7UebPJsCDVybcEpeiicmjm4MJXYRYQSzScCHth3PUHxUZ1Erk51",
  "key40": "2y1PdrZPyPAfPsAQiafU3nDExbnrUrMhgjjR5qxf4iEdJ8mrtFkDzvycE59wk1r7sJqN3i2uRKm8zBjZTrTtCD8X",
  "key41": "3iGUuaEwWeGQN5NFTcSE2uUYRL4jfLTbSuebNquRXYGpp1jzbmeJGGHHbvrnajAqbQzVcCGXe7WbGGnKBApMUaEg",
  "key42": "2fGXybJKiM5Ku6wBK8rLgAVJezjPzJ9DtV11uituZ4yKyeFKmRo3jcfcJ8w4zbkZ2ybvYZuFEiAPdWj54135iLgd"
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
