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
    "5huW4DyGxmzkSSn8mhp378EPANw8XnHq42LQ9eB9kz9efzBq8W99vh3uB7DbTC4AXgBd9BL9T482V1rSZerAMz8B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37QCXwS5JPhFFfrKKr9s9zbworuZdedxMxi4zhPGBu1ttQRrsMmKY3xnby6omVd5j8tRzsxdUtaVN8oTonqcSB5A",
  "key1": "ohh7mFTdpFPyhFEMhMj79dvkULUvNWSnZVyhovCtGguN8D7um31Xv2XvaRXGUenst3DEQws89uZTqe7HU2sMNbX",
  "key2": "CYHTbLbZ4VLG8YD9R3g5W86ouJFQ3TVBecUSLABcSEU4QJ9mvfUBvAT4LL8vtHnpziqZSzCKPMjGZF3AsXVCAWi",
  "key3": "5xuYKSFrW4Adw83qYpaP5SUxUQbkHFdYk1dQfagppQc7AyjuQcbi7SeAhtCpgHM65MaodTaevT57sMHCeTY6iLjM",
  "key4": "38mmzkdnNcz4c2WQ3tW3mPpMur9i2kGBUKgwR7UTHTQSLhNrSLs1bAE4kZweQBQmmpf7bEcLizNph2jPrC34eLKp",
  "key5": "574heZc4eGszEt1vhwJr4pXjeHCoYz3n4pAxMUpckCJmtW6BtfuNw1qyYtsosk2GQdKNKhWCgrGspBFZAmMUSnFL",
  "key6": "yjzoW8nvvoLa7g7qtoq1RUbVGS6UcyKkJucQsGW97VQuzz9Nn8s7esCiroaDMoFT65CsmVwPdwah5rXUMxW92va",
  "key7": "5ABFcyaaqGbxzQjrEbqJrdimLeZxaJ8UxTL9Ty1Tbt5j4bzbzBHsdtF6YNmbUdw6ZzH32LjqNDmqMW1zmJvXdiWM",
  "key8": "4a31AodvoenBepcSLoq3DBDfENxnHwA2P8D9zUVhi4JkGeqKcWRKfV2suSVzuUp4gmwKxZJSFpyJfbDyhTpQZid2",
  "key9": "3GU1V9xXtJ9S5YeqchyywbhTdw41QzVAMBGWn4G22LGma83oYrZS936kA6j91r343E48mqjGpuDRtpc9nsEuyQWm",
  "key10": "55Z8fpdVM6PhnYAomwvUueaVoRZEq3kt2YemwgEWKWRYjVfbMCxQyhABwwg2cuDcWyiLhbpeRX26Ptd6mv3NafCq",
  "key11": "3vezqFJwQAKPC37AUAf4QqDTbxQ6aihK3fZfovd2WfGzScJueWSWgsP1ku6t5bMGvHi3YgjqmspWAHDXTUYDbjRk",
  "key12": "3hjB7JmCZ6rHBEBTXTzRPGM2kmouYrCNmqme6R3HNb7yxuFXePxbaWVaNihw2sg4AzQMiYsK9d3ojLEXqb8vdkdq",
  "key13": "3iiFCJyCHuMphq6Jxp9544u2b1CqwkEPgNwbGfGMH4htt1pS53DqASNrRZzZoYHQvNKqM9wS8F2KDjaG8sfPo9Ba",
  "key14": "3STa2a5RFLqXwGgbFP5bqY5rWU7mPK6dgt2wEdCZ7yLE4jwtfbpUeKmv4tqAydQZMsHhnypvthoKypkSJUoLTg7r",
  "key15": "2g94KSjUWbRCiPAwJcTjKBozqEyWfgSvUXaqyAZESmjvBWRSr3yBxo1xwq6pUHaiKNaMnUVtKTGxGv23PeER5p7h",
  "key16": "2Ru3Ri1yLAkSMMrZ9dryyfKXXLEchaFcfTEiWHMUgCDJAwf9XLPQuhPgtAqUHTffiFWjy4SzL4pF8ez2ycFptx6D",
  "key17": "HhBBSaoUHGGatLo6zvfYUiosxeHWT2jUphFYuauhKLRm1qC5nuKH9noRCX8yUywAXvbB1jS5TF8Y1vYa1BBH8su",
  "key18": "2Y3HUNyiMFS2hAC4mSQS9JJqifaB6oV24Cu9YDX1wE75sR268twsXVTP3wCDJngnwjS2iKK81h8yWNoX9fy9LgZD",
  "key19": "CE2nkSQNE46uoJcLZ98gjY7eLpEkd4VmgBtam5hJgrupFuZ2KdJ44Pw1J5oYuNuma7uCmaAJFCSQJCQiy3f1F3Q",
  "key20": "4p7JVy2toqx4TJGTewmcA42xHe6ZMykpDZHyrVFYD78sgsQjwhFvQFdHN2TmweC6zKjng5XjeTDLM5YUZeSK94yv",
  "key21": "52o8t5EG6ZfsniokaTgbGNKLXemHW6FSuGuFi7Jg2fSVu14cZUBwvsWPuvbesCFQTLChEKRu6icfHKxZqBHoeMWF",
  "key22": "2vjnuti4eNonV3Y4QwLUGR8qYezGkj9Z1GJDJDPF8XrYdKHZk6CBC1yN2udY1d7rxPeNTnmBgNM9mRRFtWmUrHiq",
  "key23": "3gsxoSfLT1ohB8id6XJQpg88QeUYNfb4yrmXpY2LVHWKhX6zReJpR9Jyf98HEczPLXxqJNTzfdZLnZ2ppXbmibJv",
  "key24": "5dhTinGX9r1jqFpt4CzuMNYTEmFzFKVfTTcAqrbUH5NPiLo6UEmAyFmfqY6zHRqm5af5VnKhgSahMc2eCKs6vPxr",
  "key25": "2nsRYvGhnbwsw49GcccQcxgtWyUw8ecbZDhV8hdRVQhEtBFZh8Y8qDAfCGxWxJTQZCR3MaQXSrrULkFtdFTjiL1T",
  "key26": "4SXosHhsB6HS43PpUGbHuFefLmgNSScSFXEMeqpisqF9uFdStiCPGWx2RQ9MS4BA76weVSehQLpFBdKgTGjW4kZA",
  "key27": "U2TmESR5rYkaK2bWtbGqwmx7Rx8a4ydmtyTujDPv3UWLWBKqPCzVm26iGLhKCWpnyUphEyaqFJw1987Eky7qp6m",
  "key28": "5YcoLNzD1QH9PKacpF3NeK8c9Btbj4LxMwAn6D1BQ8W5qZQhu2D5YrQtLUGwkSDmBVoDghspRYDzpJzwritgNqUK",
  "key29": "q6mtymCTqoyJin3PUUkCaQFcqK8kzgPfNxaW5oyNkLbTpmLxsMUFYikDSyzny9F6iJJ9RBHfB8EY6xMwfksMsAa",
  "key30": "29kJz6hFK3xpqEZXSLSZss7HnANKycqNzpw4BVDRVQAFh6jLxyziif6k2A7irYhtjSB9ETRxkbNTsixXvhFkSs8H",
  "key31": "jFUVoCpskU6vTUdyepERhX7xaECVGDdiDGqUmoE9qk6EE6p89wMQAtRKD9QGsYtyUchuTtDm3DwQa2jjvKxzyEg",
  "key32": "4xd3KK1Jn6PVH7xqx2bpB7UXy6KjXSkePw6thpRsvQVQEWBKcuP8Jqzf1P1n2hG1Na2Mh3vU9se58AUf7j6W2fwh",
  "key33": "4Brm2nUbj2DTAaxDjuxHNmWHHogsymKnXyvzgp8ZqMzvciUpEQ4eDtbsJpW2DrTy78GdxkvSTuVtnHokkw5VcuHT",
  "key34": "hTJpueC8r4s5e9FkoG3wuA6MvTCX2Rj2r3bVN6sDXrL4QLAPDnCas9KqKNx1p1uc4pU7sozkaRSeCDtDM3SHFxq",
  "key35": "xopUu3AmtqTV21UsvepzCtXzHFq1Ai3JEXLBfRvWt3dNep1fKwxT5TS2KYrQm8xDJG4sV7QUS58C49JFK8nvGLx",
  "key36": "5rRAS5KnoNmaQoKkdsutYaWVBzekLVA1dPqXmFvUWpvSnStqHLizHW2Wvi6q67yWWSfgv6KuPa6dCkgUJFq3ijZa",
  "key37": "4tbyoSXGoyLifsQTeGacfbRqGk92jpMyxAhqnPrzdCrkkVdDT9gtKw9MfkhpwMQkAEJzSBjtEYgvaS3KzBbnHnPs",
  "key38": "3utr54kEfbyCXyVTMrQCy5ZA6AYbUb3iknNUPdgqRG67zMnFv2K9nCRFigpw1KyqEcmVvs7X16HAiJDHr3zTHrgZ",
  "key39": "4mTCh1JkMpDGE2woH5hxuvx4Fc3e75RgNny9bKSRFufNRpe38c4RXxyH6MQ4bfk1hyFbUGEjijxQoodgEfsspqSW",
  "key40": "5frnGeN79qaabPsX27myRBiE8WAcmRyYW52pamQPkNNHNfk7LJ4nktTh7cehLQGAuXnjm7fezoYmqaHoYoSeCPE4",
  "key41": "4Bw4AeQYZ98uHVmKHcFx4gSktRuzzkKNMBdHwYukbrnVUkaJA2ncbH8MVfFFKoFLkAxyCrc9mWQGcyU4HiZh4w7x",
  "key42": "2sEXLxf42DjtuDfrTGr7zhqm5mPQ2eZJzKiiQxumi75ZRY7kEz9NkBN2iwsze9kvBzeMGGzkBxiJeZjrxfnFhVk7",
  "key43": "WciLpa6N7TpcYyDF76AqABp7uTJj3TQiqstUuMLj6Rw46icREkHyd7RgQMvU2QBeSNVbtPqGBi1hsqC7STnzESJ"
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
