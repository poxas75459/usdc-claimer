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
    "kXkRXPnkdF9DSthcdUySMZ9XDcNQMLH54Dxi6HUXcbChE7atxD7Pb7WcEbRR4vZJKzYwSNtto49tzFXBJb9LN6b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xzprWYyFp7YeNUMoCQr6mDct8bz5v8gg1mT45YiDDRAXjJZfceh6eM2na4DcGMYQmRiCZueGrMbp7PaZUNfFCrm",
  "key1": "3FXpjMhsJhruS8pYqRQ9LQyjr9niKXbRywjoWCQJmA8m5Nhnpzag9FAfXghPpwzADVxoP99d2SfrxdScy45dDDuF",
  "key2": "5f6amTpELPdMXyDqgKwWVeKRhedNGbBZJPBeb5bdpnw6CZDQ67BBTqpJBGPNSjizveBhqSwp5qcvqBDtyTF5wJnL",
  "key3": "4aXYa9G9RFL3B48EF92uzCYaTd7pshb88XJp8q5zp7E26tgjDdL95N6mhLoebpw5QQzFmTqbEst8hFPfuXbs9tqo",
  "key4": "5pSqydz6NrobqsBUCyeTz8vHyz7eubC6ZrFZZ5mcVAjmP8Lv9DBhAHLQEkP9o2vLLDLawzaG91rPWD5rYm1nmikB",
  "key5": "2YvuszazKEux4C6G5LPrwUeEjsVNe1HJ4kqo53e3ED8KtLNQy9vivNq96eSnNK83miPSaoacEd6fH3nZz3B49E1K",
  "key6": "3HKgf4KukK6m7XxnmL136s7c1hiYLBn89N1dSfZQuR7v3akTuacNZoBt9iKJ9e9xRDHEMgv8zmhbgKH4QamXv49h",
  "key7": "373VPZRBPUKFUHucn6qsAesxiNVpUGgKPKPAiveneWfLA2YXQ6hfGtoQF9K4Fs5NN7ACUeaYzs5Sxu5zV6NpWTvy",
  "key8": "5G4NFCocvb3GSbpsdDTubyHp1HmJrjwK6chHn8kCkUPQrV2uhjjbiDtE11Gpw1WQkm9XtpiTwahWeGe4AAw6HmyR",
  "key9": "3f9qikSk1DdwV5q7pV44LjQkQqdVjmaESnkn33azoxqNnP1x2c1Zs1XgshVdhsZFFXdYA55YjFSMyD78vnNuhupG",
  "key10": "2vvJdowEF9SFkMwPnh6ZK7q5QyN5HX8Q6SCAvqknHuU6q5hc87d2NhZgywM3TmMonLCb6viP93nGuD9aWdD541qz",
  "key11": "QoqrDXJy1Td45Nyqwcb8E7KTEKVjQd2Djni18CbK9fsAkzuZRMPeg76GB3ptHcUVF81ZpVSJs9nyhyKH7xRojzt",
  "key12": "2f7tN6tERcyTFREkEZbFCb3XwAxVTFiYDeAEKzA9mju7wDpFALzwNitzkVnudRbxJJ5zavXMdFeFrwCvTGBYF3hP",
  "key13": "iNQ7jKXh2EJkqfpGureZcb6TSWKRVhhkPBWvW4iZNVmWsGA5tqZFZSBXsHMQzMaonxYRdbqz9roR8ZYkLaJ9QNC",
  "key14": "zqfhnDnePipTpvB258Y2JuUd45wd4fSWMTSyS5qerRzY3NQtTFMKxTRgQbXakm1zFGLspynTeRYUgyPah3ReYd5",
  "key15": "3PHjrVXJb5fVhSCkbES1PEWowPRBr3ZnGTUTLC2CxdqWaXXUosbYqhKRd3J4TVbv863JE8PgYVMt9LDjr3zR7hSR",
  "key16": "L4BqcRv8fFT8g7Aktvmhg7q1KpAhPw8axcegYAdXdNJyiAL4GF8k73XA8g8bECHhShNETKCTWDcTt4boSxofi1f",
  "key17": "3FiWZXSPyoa3VXxYg6tLH7vEQsKJ1J5vnMK6ijVoYrt7yy9kiRWeLSkGgq66pNKdehwhcDDSbLCLGe5ELrjhPMJJ",
  "key18": "oPGs9z11v6pGmuDfG6Q1hP53vLyBDbfdxSi5oDwxmwMhhJ37QirXTjWqnKBvPoxBEcbPz7wmCUeZTa8mUXZQ2WH",
  "key19": "UD7wRhSaksgbe3gvwkTKuTAzTAtEDFGRsw8caGp4gsUZwxjXJgMUL6S8MJRQrPUCNytxxs2dLLZ1HikV8TW7su1",
  "key20": "5EFsPSJJ3tac1wN9QhwA4wdUFp5Rxbo6M2PZAKax2D5oKsCVHKHbh2Y7A7VezXWJic8QJ8GACVGqhKyW1ZuLZ521",
  "key21": "2rF1EEHbwzBSxhnoH4w1U8fP2R4WwazaDPyUBzDvPbXPaYGcza4gADcocmhpr9n8ZjZHnnkmHfcppCssND4sH8NY",
  "key22": "3qw45tTekknRLeeZgDT41P1aFg6hoexD9Cb4urLLsVWLWYv3v31T1aNtUgU35yweZjWxpUyzWEnaUX8E4kRsWer2",
  "key23": "3YJT6e9U5Gy4xPXHL3JeCY34rV271drhb73LJpVeYRAzu7DDch4QPzA7pu2dZKLgBHiHR6scFCT45ZjBkqv1tLzc",
  "key24": "5PfsQ5XdqXt16UTqk5gaQNUh6nwbdyK2xAxH7xfjpbUgNFBxGpjwQWyR4vcVoNh5ojhnL6WMHPdCBwawBvVRDUKJ",
  "key25": "4pMi8qbUvhRPwo8L6SMUkPKnJ5eGVaY9T8kPS3RcmPiuSHwR3Rsv9zAZ3ywLQGo5qdJ1ThZHVYn4nmmKtK2ZEbKw",
  "key26": "2wQM59jZNxFAP4ZRaEeRqagj7b51xNgTXS455JqqFBryhbzvKTbDPcGrnCaYeePLyeVrV9gJAVqXdAzvFZHebfAT",
  "key27": "2RMwiTVijoK5hiDzXmUDafpBjx6actUDmsS4NXKyMobLaiBkWF7rztUdZuSF3TEFwHp4FFkZfs8Qw43wADXhcKam",
  "key28": "2DLn87VYruHC7NH5cL1k93YJDgLoMwpJiM3VzqZnx8yg2gdsvnYMsMMH9qKcUwKuXYjzquGPkE7MWvCE6aPKZq9y"
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
