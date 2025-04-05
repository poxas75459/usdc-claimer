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
    "4E9KnzBe1gx3AQ2GuZYUvGz5zb4xMSxjALsBX1U8SqYuEiZDbKSrseSiBWmd6imiw8oS74gxDfqQrstF7SpRvWTu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZHXEz8GWu5QuzN3ZK4qffh8MuSgdyb87BZgYHpxS5EfxFYX975Acxq89bbfdmstTNr6NbCs3cnLq8Fg5C3rPPhj",
  "key1": "5H6XiAG1XLvADmduQnHH7w21sKXpkL98GuZaiGZ2VQnr3GegWfjeCUVSj2HBYPZ6U6KdWjBzMwFuT5cVpASwUYzN",
  "key2": "2Z3RxeniRxgbsdR1ZeYaV51U5XdFaUW7EuamkBurji4w8hfrC8g6oZpRnvrPu1DAZrPQgANDpHzsPepDWrtbwt3T",
  "key3": "4Dg6aF1theKQSBXXLRYdaf7aNZhHHbLznSdBuyCiVJJDUaxrHXF7JSJfWJJ1tNtu9sndtK5Qmumzqed2TeZ27za1",
  "key4": "2MhCL4DcAW9zRbVXfW8TifLnaEv2t6cNHwMofKArwhtAUBcpy1Susw9K8vUueTqLCLRkjE4DJK6xNUek8ZmK4dyo",
  "key5": "5XGg9aPr5gVD1ToFfiVsuPFzQeXQJ4uuBtDtRDb6AvmxoneqFzDZDSLiV5CtaBdHgDJjtnp8t84LFof8EnhYrGhG",
  "key6": "5gtUgR5EFQvtDhY2N7TW93e5KEzJ5AfYZsDZ8Rw6Tbfd8qq7VAaPz6v4dR2Qzu5kEE8A3pfPeDo9JADqrBGUvaHZ",
  "key7": "5amgJxFrgQHuTxsvwdMPGp79hDGfA2oTzmntnniN15AGHpTK3j6dcSiBAvTNNySRbHP7LrcQvKabNe1grm8npJ1c",
  "key8": "66cMYU5TFsLzCHubuQQW6Qk2CppuNeB56K51Pytr1UfK5TKqeyCpbEkrtoYrsZvq6Vd5iA7PMaWSpxMS3EnceMQx",
  "key9": "2WNMrXA2DTe4bgLdrxpMQxsfTHPwNpeXxSC6gFPw3yUurFJ23geNAHHrfFTjxXRgUZf1J7NPZS8WGaum4p7H9JWg",
  "key10": "2Y4JPifsVNmRPSFbvfTodiBwKemdrFb9iMsmaqRdNp8zo3s6UTHBwdCixHktthw8CmYqbsFEy2RgApbD1eXM9FP8",
  "key11": "T7hsV6AL9zn1dVvyuv57sUgHM2twdMiRzyiqGr1m9seNgqqz5SYjqavfxJ3auKGSA59yyckv6QiEiirX5jncE6j",
  "key12": "3odunbEtgBt8qngDfrtGPctquguwyYDL3gC4NYgLaMiQ6fD37GiKLaA6CHWv11jR3zJftFTmJRWwcfEnUXEB737r",
  "key13": "5GngtFzzb2qVqTgSdzskvXV4CKhuVep2prLWNjf5fwhPyco6vwtWAMQtEBmsm8Q58x2tQb29emE4LrH5NyeAeZgB",
  "key14": "5XFgoexaCugaHYaNfuKw78FrWS2HB2AZD5asAmggHBtPqLQ8ikec3rHNYNmxycwnZwqvYsPrqu7KvtxmKVHAdhsQ",
  "key15": "38ANmucK5xNi4ZHYQUh9rvUmMwQYqVESy9wbn3Nz4M2kPr9rDoLNJKYuZZhkLWaap5BDKXngHwZKXej2TBvKfT22",
  "key16": "4Smj4RUBLBRz27BFZziB5uhuiR37kSLS2VU9wJCwjWa5MJqoLTjA9gUeyGxnA7xZw3AFWx7AvbENo1BUio9yninm",
  "key17": "4kdGd3MLyCDCXCHWZgo8oejJZD9HscHrypzKFg7toFPZqfNcsi4iBMNrnHkhsHSnWUw9jQeWHphf6QnrNL7Eew32",
  "key18": "2N1F4XG3RqgR2CjpNRwBYoygZWb92ziaX55vWcuwVG3HxRmrRVSBsmtMZRQTq3ncqqGfqZQHQ6bjPrvDKZSbd9Hr",
  "key19": "22yNz4Zb7BtTzthryRAeViXKn4ZhVLinH3hLAybz7K2TH8MmRw83ZbN5uYmnQDWrKjqNh78af9S5agidG9vEpAXF",
  "key20": "3tmftXZhYrAT2nPaCvi3ePUyWn4zMitqX53TCGngwtj7CE9oxEAEC9EwLdUJyMLn255QxWj4zW5zCwT1TmeRdnqC",
  "key21": "2B8hwr7xpNnvNH2vQSbn9huuFnhLwbLWqL7CKfJ3FefXi8fDWJvyvZohuiSx8P5ezaaYvfDYnNurwBRR9mAKewF6",
  "key22": "4ak5S5DoDPtxvAcT6XiXtHqyee2e5TQRtPg5Grw7rz5XnjV47cb22w5WqHKw5Kcnf9zZZRGkNwBAQPeYyszPyg6N",
  "key23": "pB9zSnyYST3S784VMoU46m3bdFPzVBUwtXN146NBTB4X4ejGCWC4SHdg5n1fW5Wnhw7vzu5bxeexhJ1uYrQ8BLC",
  "key24": "KAtkPYUDjK3mNoEs14gUmdMWHCMXamnKCP41F9Gy7BPx5nT3W5ZyiWX3mzFhaWQomYF2uMbiLJFvNYrdUrebyPW",
  "key25": "5zrYizv3WXfG9h72hFbmx2SiygHw5aGGsUoYBtnRfMKfmuhcaTSqnh4Bmf9VSjcttHXVpLh6vkwn73vj4BcGbAzn",
  "key26": "2uaztDvsUHp1XHzQV6AsLSKFhN1jxmZgDyQgmZFWCDAimSruo5dxxKqfDERSuwYbcujrH34nvQdai7VjKRWdwjc3",
  "key27": "33PQyVgZTfSaWHwBc23fBVE1JucVbAQLBYwzWWsteh9SsPw9kevdSFi8fadZaMnnYNu7pP6YJU5fSAq1Y1Qekp95"
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
