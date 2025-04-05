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
    "aboXerLaTsjAvq2dLqNFk1CLJAr5RKP3DarrksGSCXRnzDVbqfgkGGmhbANzeFSx6d8xpdwpmCt5Gm5jAsn7Be2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DL31tZvLGhqT6Zq6K3ddwtifoB5NSaKVwkdF7M2w8JGbjMGFPouoAiDZQFsNqKtjT8ZQKqqsfCqxpnCBumLinp5",
  "key1": "4x5dqBoSZqNMw1ZoyTbUwUL8oWJzEahvkSxGEYPczwYkYvpM75EAoom7YVSUba8eq2wJBVq1AdxuiRLzzs3v7R2z",
  "key2": "4aVE7Bbq3NJyB3mDVP8Gw4DBt3JmDdmDQkTJUBkstDzgJ1cxMuTZBXYrrwvKP9LTtFwK18uCJ1qqVLekBwtM5nNR",
  "key3": "5daGLURSvFpoNcwUqxBR4i4UnkrDBevDfokTUPSw3tWrYsFtwfHJ6RskcLYYcYmo97HmUd2XJYv4gVHRiaukjqYk",
  "key4": "3A7wL6WpNCm14YGwUkP41W9WsgS1sfYyxKzfHekMmkoKjr8mAiNpXjXD1x6kYrHbGafLHKUhTu9si1p11V46EY3X",
  "key5": "339BmdFp6ttVkNYT1rZ9A46qCTz2mXLyZUV31znEu1GkzKQfgM8i96KFRz5jiwYjKtpZ3H36PePWdMYTWF4HN1BS",
  "key6": "2fasT2g61opQxt1MDQNP59T448PWYuG64AGgUeFa271UerLAvNZheqFoK8Wm9F9LsGVCu9bv9k43vVkJukkhY3E1",
  "key7": "XmzCt13nUM2B52cdz8QeQ8c5j6THymyyLQtfFfGWY4U9pL6WZPdghiXnW7zNFBAzGeYzdpLDPQyHaokzDhnhQV1",
  "key8": "4XYarjq7DzgHEoTGK27w5mUdede1rXG8rfUS3YeY3dmspdwpUPHzH7ySku3C2sEDAj95tvDD1vyBcUTtNXr5UMKo",
  "key9": "JVMoZnrRyrydQ79LhvZRCutRRWr8nR1SAmzRan4qZGm8oghp8FP4bTCwQu5xTTaKc9Qbjgcgvkesd11ThgNmgbG",
  "key10": "4T7SSXLBYf785sGoRxjZbQhDahkbrsu6vyoUUfXohKdnLiU4vkMtgH4Yh5r1DGHUpM1VPqzVbRzUb8BK3S5ymWeH",
  "key11": "41ktWWjZmAWHZWtHspiZbonahgs7QGzLkEeL5jAQiUsWLWGdD41LGmFUKX5RLzJ3M21w9becyx8Q412FEwnvBJ1H",
  "key12": "4Uj2Cx9ob2yKM2MRmQFkm6JiCrRcrvyHnwQvYMVUrBLBoBNYSPpa4b5EwxBAPLdyh51eenk3Ab51rU5Yks8Bep3c",
  "key13": "mftRyKR8jtp8KYja6PdWwXAYb6QMJbTwpJkWYw7Qo9VZ24EpnpLXFnhsZMvfwmD9e6GoqHYrm9G8Udfn24wmyFX",
  "key14": "2H2zxvqUKDXDR2s9qqLGxftG1ZmG1NT6h2cc8JTxRwmxiRyeXEhzoReyB7bn8nnFETPqro8PbSL3yYLs1Fax6wpd",
  "key15": "5xTPV7H548B6VyCz9W5jY9NjSLDngvs45ALc5qCW7hYds7ngt9teqedUnvGtostn5T4ZNg8xXpDXRP3vqrAGumpM",
  "key16": "aynnKkezinngL6YLJYBBvPUekBMmwJ1LoK1uY4mKfmiNunCB36yKCA9DJ8ZTWmb1ctVvznG4s8BgKTkcRig33rS",
  "key17": "4v24jtC7veuJmkGrQ1DnWiVeJ555rpiQiqrv59WudBGkDsjngAfquBaBDJhsTz7Dfy2ATi2nd8eqPBx3aweeijdN",
  "key18": "3mgQ7rJZmEX6JyFrhuUDH4mLhEWM5DmqZyjNCf43aqcNhiWLXHYHTq2fN7uYyCca2ZZr1y9ghYa5fpHnZAA64ZXB",
  "key19": "5BSWEL2Ay1UhiD1RfDVVqapjBvMSgsQRfVEAtEonUidn8siNU3gwWs2c2qTjxQUJBBmn7CZChfExTBaU6x4cLxi7",
  "key20": "4Q8xYiZSfoeYZcYfqheEGewSGkKWoejakPRiA2487VpZMQEfAiARzQuGvCPfixvaj9sdqSkMYeRuvUWFB2zdvYWk",
  "key21": "nQHtcs9Eye1hvdSTS5goMR7J2qkYvVTP7UCqKfL7oue1xuiR6B63koYQg9iBuLLf8HdDwi2oDadoVgKFjWfrxEP",
  "key22": "4jRSR6TesjhVqvAziRjpfPSBS8XwSvbJayFbotD4DGyQvXUfAc8pyv7wrfJGbke2g9ZMsnp19PcziUcrJhLYndUi",
  "key23": "3K4AL3kWqC7Pgn6qSSkcrtkieCvTstMPxC2kRLQ8a9SHbXGqpsrCuq51MAwdyEEKXpB4UuapDewfF4NvbPxRUrck",
  "key24": "4DQdCTJqgfe75Mziw8e75JzxjdrQsGuyjwimbNVogYNU8p9zas6BUc9sMYG3Ef2VMjfZy7oKBzPppQp8H1GqaZBo",
  "key25": "xowknMGc9gvvHjVePsSHLL26Mm7ddB6Uf7Pj5VNzpHnQuAvAx5Lvf15tka23gESjnWsN1Qf3rQ1QoKzAY9U17sV",
  "key26": "4GwGLS16kwW6zaX2Zoi1gJdwUgvF6yPensRRh4dTJGk1G3RKP4YVtJ6JgWEfRPSa5rtnThMyA7ujEYUsH3Te6Kdc",
  "key27": "cUSrrAMm1DNz43pADuPxQ9kQVWGcDEgYGqxM8kne5D9UToTYrD2msaguoxwkR7QaKz2hQoJyPMUNhfgeGFZj1rd",
  "key28": "5KNkSejnXYpPQ6rB4eqxGr9n14ZQUVMhRrBNKthTyGngJPvuxoh9KGmavnGrV3sjhNcm6WLuFHD5yC2cJWYKfJKm",
  "key29": "c6hU52et8WYWtdybtYJYTDStbzyskrFYCSUEdNLgreBxUEHHMqTEzEJaDW9go7ZdoBA6Vps45qAeZtNjaUUZpnR",
  "key30": "34M4aZVCwk3KKdRf4GRFEoJCnBZA2JQimcQ3GpVT6hkxVzX7bWQ9V2F9XLQAUzW8F3fNT5XJv5aAbWXFUi9RiS8o",
  "key31": "2bSwNFUMUfgk1K7Y5qkwiVh7ufsAcbGrE8kvvuemgAatgwnWAz4Gbfdt5Eq1vMbDUekzRq9hkEdajhdj5zPxa8qp",
  "key32": "61E22g57S3Qd1G6Yp1jGwa3evK2LGnMoqhMCeGE4ypKg3MdKCK9w5YPsYbUZ2pk6zLvTmnJqiCW2K1KKYHLbRzVx",
  "key33": "4iMg5MV63wmP6TjrSkLfkPF8tngWXjVsPvtqNUXP7oozXn2rEEYE3256N8us4Vo4ZtP29kmpJYfLsHPCV1sxrM7S",
  "key34": "2c8Tj82JnrcybBq1477p2sBrPQG2KHGP9nGnUfM8AFUx8d9XV3CYi1pqbRPxFURfjFPszyryUdiR2tuerPFfJaJa",
  "key35": "5KGtfcCUAAC3CNdq4JV5WW91qLgrK5TFZtxYVL6hTPGCaXtYSJ5BP8hcjg7CKGx4bxwATVDLRVhmhCubm8XsH1ph"
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
