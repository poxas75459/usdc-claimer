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
    "EbvEiXKDZ5kqc2myjHZpdfhfQg1Qfc7VNmcPAS5dHtDRmqfz2MbkBfJVisMujFPmxGTieLuAseyJvyUXNTP6VqB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B95jTp15Saicr9ymfhXY5Gw3fwbN7bcA5GquqVbxx7yaDX8XxZoFgrPb3F6iLoqrFwskvkDSHVZhNx2K2PxT3Un",
  "key1": "4DymAz8mBotW48VJrV6gnvoQddpvnQHS4MxTnCZcnE7y7sMokPYoYcucTTsRgrdGcsfRLy8Krj5ZmsFsJxFQdXab",
  "key2": "3P4kwLnvdrWKdiyNUzTzRnPyDiugoQSyZwiUXQnLJjhhSQVujdU5NkQL3VTLU9A2HUThBgW7BoXMgpfFXAGD94ZH",
  "key3": "4wE4YqvUuZV5dmqWi99nom6BcCx26Rj6FLitiX7wAUwLvBq2E9RDTQy7aAH52H3hiB6bro1f8TH89LdHoEQrpVmc",
  "key4": "2X3ojae5BUUxuQxwthCY9dh8aCKY1JyedgbqCXKNrtV4yANKRWvABJDitzLZmhFeNmzWn3bZKrTinotra2pwcVk8",
  "key5": "62rKomxrnGTLC2HwD7qChEj2ChNKMHPwsvxuPTaPmrNYVdo58sErv8ZVn8zYuC7dNu9YLc1jv6h4VU3omdiBJDxB",
  "key6": "a2JHp5j9oSfm8AJjj9dAVUFn2r19pXAFrKWLqWQLJwbvrpccMmjyvFWcc5PsZkktHJZRV5fvE1dMDfayMKYTCCT",
  "key7": "4CKfBgo91LedEYzrpRsQznH8BxvEWDHceVWqwbuHBwAfad5EFQNphPv3uawGGEmZSK7dKATe7AWrEasHc9GEziyf",
  "key8": "3LS9JyeW2DGgewWGYr8mEzuiMDKaFoHdhjHvJwUxabf4kfVTHydN2xsA4L1xXWRKZLwUBiNXdskSW9YV6ZTnMeHy",
  "key9": "4uQeREBf6C5c6CEH9L6mhq88EU5KjFjbjGzvw8yUXrmFyANY89BBG2Mt3L7dHAVkgUTUU4cLXyS2vWgKfjwGJdPG",
  "key10": "rHoFRRdiVEK2vakSndGsLLkLHSv2wKxaTF1ZUzR28ca32isBC4g6ya1Waj8UmUZdXjaxAKHZzKiaiqnhqaPKcbD",
  "key11": "YLfLYRVnQcmCBpWrWogvXQwqepyr2mNMSMidNfYstGLmit6zVaGp7qnxvU9XSRvPDJ7wYPC5WYXPrPE5Eq6jVny",
  "key12": "3gNnpxfxhW8aM6wq38yWaP9RZ8TMt6QfqssomBnuuFcsHEJ6qxvNNRLQ1mDZtqoSqm3rfJe9E7DJZPJvvFidN2h7",
  "key13": "3fPnr14iKhxYe4R2umXtugJvgPLnJP3ER48MRG4wG2rF1SyCdXvWykkC1L3e16ZfNBVjNk3G6zNKHisUJt45aZnx",
  "key14": "36HB5RV58V72ehca3X7jr46YEbYRvNdJoMhhfpnzufTMtupPvC7SgjY6oU893e6Ccgw2SdBNfuKHcoFWwZ2D6Ms8",
  "key15": "2dpAQbGg23CjVP4LMWLd1Sti94TjHRoDLuBnqKoc2K4VsCLWaDr15hJzk8x2qj3WYEKE5GxCYVfSxfqS1cVYXTcb",
  "key16": "4XnzvAsaTyVGoNPvzdTogRo1HVszyECSeUthS3ZfeWeXWqB5qUtH8ssPH2CCdUNmNYnRoGmeYGAHw4cyxKn652NW",
  "key17": "B5skPMxBBWpV7zuXgAFVHyFiEdHFUfi6ior4cnqdp1UXrmWrzwcvvHcKoTnacWyGsSEfvVK6MjX5UZ4LMkT9P7Z",
  "key18": "5DVXCzJgXtLuKWBw27Y2hHKY5rrVMXCUYXmUDRh5KwyRTuuBirAFpR44MTrcDGxwjyWDsAVQjTbUCcTb1cbmKrNH",
  "key19": "RV1JoBmHDJ1gnh8bxpUKEntNryNDpxjkdzbmU6f4rRKEBYAuzwRATR7i8aBRfdZRThifxSJGh7tYmHEkvq7xq1a",
  "key20": "3t2ahjjeCosynPJ6kQ7jAj6wRmcY6gukYh3MqyX6Vki33ak7qEDRepVyA4aSUEnCSwbfdGS2eoBH5fQfrH9LYeih",
  "key21": "39drMYrT7pMU2RoquagCBtHCRB5vD5zoR5UkxiL84DBjaAKqtaLHP79sfHuLmnQQKhhc5jvmbqDATV76XYda7JPa",
  "key22": "46G2Pqkzm5Hn7FMLxHHkbK83kSsJkwXWDBq4BUqap6VQvDYmyQyva1C2BMx8KzRofsHYNLujJidMvy1mmJPq2ggQ",
  "key23": "5Do3PQAcZXCnGvWTvkZswJFr9LX6seFG8hYNe8ZRGYMFkdAEzCxpQ8ADhBu8hr2V5iiphQbRh3ZonoCWP71yjjU1",
  "key24": "4tQJGLhhp9wAFE9FpF6fFhJLjwmUFgiLRBUWg7kuyi4Kd3Bb8UXxtaPetEXu9DnVzV7Cc5Z3nTWW7cUVfKnNyeTd",
  "key25": "3xwLfTZdKKEZ9m87KBDgrrWpgkxmy6Q7LqZFERETdDbGQdPVRxJQvvVB6mnx4cwFYRZeZMg9afuGpUt5BgtAxxe8",
  "key26": "5a7brh1orSQymrd32R81u7z1c5z34b9PDky68ZeCJ3HmU9hM7vDjA9kfrpA8tbvfPucgjAjdJrAAZNxq9ps7Z1bN",
  "key27": "5zz5QqdVC6DjqCogqEQxcS5NHEAUAW53KAwHDeXSZhVGcFzv23qLcr7rfrXRoyKpnFYo7zjpa27HJrSYmvrAFNNQ",
  "key28": "X2ayYwckis2DExUr1PDfXGWWqm4ZB2kpSenPANbddnX2XHkS8nEBVjNvmDrGhqwxpUEibvWG7r7mocmEALqT2fD",
  "key29": "2c9WdZ78wz9HYFsF6v3nTWrip97HVKoG15cPHhD9iwu8tKX1GoYSL9Uy6Cb1cB7tnBgCppDHa5xfGL4mu9mxXPbJ",
  "key30": "3uHkSMyc3iJXTNcqjjhFjtf9jFCTQPqnKfivit37ecYtnzAXXu8vABs6YYRDtweX3GQEMzgMMdxcpGHYQWPTFmBR",
  "key31": "3WUHigcb7UYYKQgKDPtwW52V3ZsrzBEWUMA3DASpEDhZBpS1Xrp31w3EFVGjrCtmN4M7JceYLJ4ptPyYiV5brYus",
  "key32": "5PB4BEVUG127CaiEtJuR9upRCUNK4CqPcFpBoDifEGCP685ug8cwv88DEuYBw5PkCUd3hmqvV231hbGGnicHe8HK"
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
