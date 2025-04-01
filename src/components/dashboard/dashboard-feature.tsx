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
    "2nG7PCcgZnQuihAGRLGfqTprTW3oQQb1sEv3wNRp9g2pyqzPKkjWLAYEtujotpQr58rAwSUGCtcFDaQVWYgoRDjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UbrwmNcC6HofGSgHU2F13jPFiVPBiKmmNEyDnuwrEwaXtnhPQBMdH3BkLHMkh85peZfAgLyuBC3NSBxcL5sHRLQ",
  "key1": "37DT7Yc4RapMTNiJaf2qKH2DBdpgtXiy1WQUt5f8DVaxYMEz5Y8DJAfGDWZd15CYFP62cK3uA6xJdxsv3EyHi3aB",
  "key2": "3LycqAQJUSaXWMqxyHZJhAjqb8GGMp48Wictwdz4oGFqWNtKhgbVqfshpi2MfxSZ7U7x3S5suFsSLDQKEUWsgxXN",
  "key3": "UsRD62fytyE9u1bYfFKWaGT9sTFN3dKsugdubYRxkr9cVkS6g7EUh55nMAAECHYbf2ecrKjzgVYJ8FbqRmggFKN",
  "key4": "274kxxSj9yfpYuqRZd2WktrP7H7MZEPw3yBSGNGfvjZxHbimgNggyHMeigANhynhNUsbeEeKu6G2jNqJm4jsGMRC",
  "key5": "5czoGaWdjjDR9GwwtM814G6sEPKAf8KLXzxT8DgnrZ6CFr2t6MA83h8pGFqLnDcKstwMSYYjyqqzpfkaaz2krYKr",
  "key6": "3XHJzsjbDmpvN5HqLaYNqR8XzskwRb1AKZPM8yDdYGYhnX2RWR2CeRhfStR54cCfXawUYyUm9j4hxs8dKPcdiwhC",
  "key7": "3E7VidyJxhwWC6q9RFQGDH1Tw7jndfpUm5YgDP92p7X32E2yJKAH6E6pn1CRiHXTwhkHE91j1rDrUR3tkyytiZLr",
  "key8": "4XDAXk3EKwdbGZiDX4jRrMWGekjwuWG9Es6kSA7LmSSZG6v38zh3S2bJneb6i3pXxHeX2Wp2mqLV689JLfuaiYA2",
  "key9": "3epMNDPTpp7hMgUrpwfn9hVogsfH3AaEeqiuBUydvV2HeRG91yCEmzhuq67zRcHStRTwGHnASp1UnPYWoLAUDWGN",
  "key10": "3yZ6az9CWkjXavWzuGwpq5AkUCha75yUNnWDhqPddYTWmSThMfL97TBmFbPecKRa4uMn4bMHvXN4M9uyRHknWCVE",
  "key11": "2BSawrvuCWt9BxBmNoJfUNzJq7fB4U4eh4EG3eS4CEuyKeuKdYGJW9h1NyxWtYNtN9cxdrDafM5GB3UkHnGUhQs5",
  "key12": "D1AGrn8ZKe3ij3gQeH8hSgqRsd4d94c32UyaduTJw3MNn8L4Q7JNaERazhQhGTYkUcie8arTgknHLqCPhXyY4ZX",
  "key13": "4FYHfzwn8DFfTMeuJxPt2XXT5xiiDsChEHkLHmCLtAAsyqJ2jt3TgcjN3sBcy5jsndt7NVhuUCNsNE6fhKKbDzhq",
  "key14": "2My5hroDyDQbCKLB7iULxHDPy8CtYoUrBam7xrdGZNajABS1AqHaXafzypNLT8T77QJ4pRk6d6gDumNHtysSmEuB",
  "key15": "45uQw39FJo44iyhqaHwvWrSqC16ujaeZn5nXEm4R6sX7sthNd8vMvWrbQUaaZGxDCrgnTtzAoNg8PjdQkgaTnkMa",
  "key16": "4YyLkBQHhxnr6SNX8496e2FiPs3QWf5U6RFExLQUycexSAhDsSykwPMXF1YsVmymcc5u2sEn9zxVqN8bE1YK8kyy",
  "key17": "22Qo1Dj1wBQCd9DaP2o1hJKnGffRUcBzH1iPQ7Pt5Z5uH3EN47CAVEWhXn9wcsvDjhB1zFgepJKazQTDrAdNKdE1",
  "key18": "Su7rSMkGeqPtLvqYZmSSADxusuEToTEy1t834YMeB8ept93nXTbv41sxzEYGPpym6J9MMMj8V3hnmas4WzQXp7u",
  "key19": "5BjRD2VEsfeujuMgmQBomLzqWx8GCympt3CZt7wqsTKJsQV7YMq5Z2Aoxd3RW2sW7ZQkkxDV9PSJwZ1EpY7s4rVG",
  "key20": "4hWpgTXQUBoRVGGqfotW3VAJcqovG8uBNdXTPy1AP2SBbZ9DNC2eQbf59tKS5Reg8yrqAQNhKv5jafUFFMP3cVcm",
  "key21": "5wR3u853SGiYztXT11v27Gn5Sn2Li8KagdbVFqEZFT7stR2Er9FdeARvzxYDFhaD3eGU2QtjtKwenzVWdPqNDD2J",
  "key22": "4HM5z2vCae9DgBiVxu8kKz7bftxThDCKt2xVuZUjyh7Wy1YuCYR9BWHxyV3a3zjzDqEMSjs61VhaJG6HExNAvnwQ",
  "key23": "2P2tYuP5UKgijG3zrfQxcj6NqzhrBg183wpWNKXLk9TsjUBApXDEwaZTihhEUpatMXSmbKgAFUoGtFYUi69agykP",
  "key24": "3ATm5FqLPid6f2KYtfgujoYM8NiopAGYqgV1Q81xMWgHQ3GFnxzRzvPbySsa2yHCnkqhBhQfV3QGnc7Ca3kBhaM8",
  "key25": "5Vcc9uw9CKKqiBjTwXnbNGoMUAR1wCK9cB9bcnnP4XfYqnQoAmMXMiNFuXdpBttT99dPKToSh7Di5cpBNQawP4Np",
  "key26": "3DdaJrt9mqcPahydXdq94iDaqQwNryvTYRRCpUThWFcYWwmtjaH68e1KwErj6xRwr4Q2MoFRPQsCByAq1r3xQYiV",
  "key27": "2WojBQwGQjzQJfN5XhhCx3qEivvgDyrgiGsgtBJCdadyH98jXXtAzHEcuX4aV4ToywcEHjjoYKy1QT7yTCGejwai",
  "key28": "3apLNU5Q8XwTdrDipaTTdVVeP2PaEe9r3FTG71eNu2HsqECXvqo4os43eaoXrv6avYKnzZU54MnH6pXHs3nrgfde"
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
