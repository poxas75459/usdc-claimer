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
    "2idE5bpDtAviUtb7zcqUZp47Y8f878BzrMape16jPGqGAjRgzhsRbDucTvtmS6mgvbxekPk1weVeDvftkAWCns48"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MoH4AmGpi9bz4Mhia1fbpKShj9mzQivTNFTj1E81Ur7Mr3rXF9Nm3heZALFo8umQrKZ8qQWikKBdqFMuxDaqKft",
  "key1": "2woCdrT2E5TApbqZRSPqwgkSBHyKhYQstf2fEBnS5UBnRQUHxAEkTuZHyoG2XsTStzQhXgHgWmMBVte1NMiWxED4",
  "key2": "2kq1Kv8jMv4r7Ed1p14EtRfSDxPhAQHFXjxGinsbpe12EXneGRtANSqQPBBaw7NCAiUDnmQRwqJqH58HbtV663V6",
  "key3": "4YXSbs1dLRYcTMSDRePx9vVSTAjLTUp2vZzwKw9fyX8Q2wBnNSXbpfdPSQi2Ah7ZLMoeM67kymH8sRih1nVHrjKx",
  "key4": "5CNLS1R5pzxhpAkyP2Ay93UNSXJMj2Q2Xmz1STtav2obN4jXqCat6VvYayoRJGYcvYE3MfFmRhzXtkjGZyjrC3eM",
  "key5": "2z5f4PDRWAyrhZF2yfavdLsFHV8FChJSxznXU8axZs82RBRRufx5c4Svhw4qesbu4oq796Fgeb5rYH4sNH3EhrWV",
  "key6": "2GzuiDBueEBLhmvjNuGk9Ac2yUB4AmRxCQeiD429SFxwwehkKYVf2JRzFLsN5ZGVtYmnLZFMHhbNugTxqjZF6Mvg",
  "key7": "3MH1mLrA7XEf2qjBcFrpnDwPFcnq9TjSiTLbpAbFuKrtMj5xduFXc1bWx2J6xAroU2fz9T4Q6T4sdCkRUVXb9bDa",
  "key8": "zh9tCb3XSXC1XJBQ3Q4kWfJPhLqkFazoN4h3t4doZRxyF7z7ipcrxk4719WFJs81dvXXA5yHfBqjhY1hbfYwMxg",
  "key9": "4rrBHV1TEnnPkgjcLqwjKsFQboCU9c1tVBDKmbdr8TAhovqZxx4H7REmURmbpg6sJmztwwum7h4YQc78ybto9M4j",
  "key10": "3rvzcM6gDTK87rE1t9pzXieuz3QLdb5NVc3CFpVuehLe5F69fXP3VUzDj1unqdVeRqodBdQcq45mFUAcrhRNMTJM",
  "key11": "5Rhk4fJcqjifrV88xoAxt2YA6NDjVJw9ZKoxwYp856KkFrsM4ipH6oELGz9mRf3ZGg8Sybmmzckn6XLd9zgXnk1c",
  "key12": "5xJM7eJERbN2a7fRGyBNzoD9LCBAyuD61rK5ZzpyeP3NTpNwCfxeCiUGx2o6r4gUJ3WGR5MiYKTXqTgKQWXoKgJQ",
  "key13": "2BQESw4rNbAHYxJYFTkopfhfMqekvexEC9iBTewq75sTmpcEQ6rtaabjC7oThwPuRtFeshtJp9phkviAHXQiHu96",
  "key14": "QYHTR9oiUvcdwomvVZHWERxk1L8AQnGo5Ypc5fk1txKkv6HWGwi73EJdKammXmVEzgPy2cEkYTdKwEwjuunzoFb",
  "key15": "dwTis1JdVphiuAmtBcXSPJF2H8uXTgJYCo4mjk7bLHGbsQ1vKUGqvjXUcbpRGzmF4QgBKfDr7CuSooLgXwLUyJL",
  "key16": "2iyg3DntmQiKFKJKbZijW5xFb7jET661igkV9zP7pGi6cUVPSA7BZH1pLWcbxafxtRbsvSiTJ51DfmupqYrZaEhd",
  "key17": "5a7Txyi8MrMXPp8HGUecstgth2tUp7413MbQ74ozFM7cMq2M84C5LR1YionVbYxcA2peDzHb3SqHfY51AvhBPoKi",
  "key18": "nH4ZzJG4SytbZ8Z2WoMKoa2xLFAc8ciasgvDZ2dYHBKzeE2bbE87QzYE7hRY86zxrPwwaVZ4QRKvaRiQzrUFnJ7",
  "key19": "qk6VZNyokAeqRruf5sLJSWa3HNCEhEZAiSGKoF7rMzUQ7bQgcTapshQ8q5uPdGD3RWEYSCCemuuaWPTtaw4DyY4",
  "key20": "3TyJEPTsgKcHbk6MEJhUF9VWYgMH1JTQLVJ6TPEj57Ur4ddKWrNyGtcbBqWgu53q9tWF66S569WC2ByxyvXu4J8z",
  "key21": "3AWp5u3hbu2GycFG6LbxWAWeomYLy7WjGtV9N9dqeYrWATzAkkcH9t3N5a56ukVc3ujsavMiEx9zsifKQx8DsoPV",
  "key22": "6o4a9coDMMAmUgGqjDmAQ4BimLsM8tRFkQLMejUctwQoR4D4ui46dVbmrBqjmwQkShbjeJnkdBa3rCWHR27eoAG",
  "key23": "6whZ8eyBp4qaUYcdmutcgEuZ6hm2qsSHjaZo26scWz4TwexXgeAubKg4n9FzW7Awx76G7Y5JUTZYCCnqujVL1pA",
  "key24": "wiySDdM9yaqcsFE9vhUUVCMq5zi9FkpRgmv984QJBX8oEcx5gUiSMCyEi826GTAw2i4CBfaBb8sLeg4DURiR54q",
  "key25": "5VBLjcZW9NehXCtjhELokxBbBoLxVQbCiGy4yH3QbJJnQ2gJeWhf36byXa8cQkxghkUV3CsrkvYMqJNPFmgy9Nse",
  "key26": "5dmSZEMwNvA1T5GrYYtt4rechKsvbmndtrUL4UNnwdBvdH1XWJKjMYWrHCzzycvSiSRwXZvhXqomt7AneZidwzdy",
  "key27": "4PRK5sS4xi5TjxgiEGkwMxT9kGJUP6GtfLCVubqFLg9pA9CD4uBRYqzXezNEhoUZNSah7Gtrb1zdfUGMMS24pJds",
  "key28": "2PBQRRJP2XLSMiRogV7h1D16J2cWAikqh8esa1ysAAh8aJiWDoaNJEbCUCe18WyxGHaBwA6Cxf19kMYHFxGyRyit",
  "key29": "xy5xRL68zN5zJKzDrQr5Cdq3RbU5GWdLFhVfa8TvYEBAA7MHDM3LmeHfzoYf6R3x3Vn88QLaoUyRwa2maeqUkSp"
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
