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
    "ayy1QU8ebhrHQPxPUWsGAC8NYA96xdLbNRdM81hPK5DSvsmKuBHMUsFQj88z9TuKZdCwSrVx7JcnsrPEGFCKFzU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A873Baqrt87gxniH3BXjib12ta2r7UDawm6gDRonAMjaEXdKDQcLpfxBHmYdA4LLHXR3XBK5eg48tjfRbB1Prs4",
  "key1": "kMLvPWnC1LiChDvn6egwr4T3FAUB2djfx1LDE19LtQDu52Ga3P8E4kVxw1dSCm9ADqkLSpo6nbcUER42JuJ3HJZ",
  "key2": "3LuG4Tc5SywjcKSNAmpjDZPPPjdCdxz5AMj596t3F9jnJcuTaGfa8tpRgrn9SkwD6g8Df2qi9NFJmYmswWSHnEHk",
  "key3": "51jMRsrfZN7r8S3g7dHDWQTMgDmrRBJ7HhNYchj4a3CiHKV2MKt2fgiNpEw5w5rSDQKSBMaKpCH3WGfc3Po2eH2g",
  "key4": "utpW24J5LFJAV5Jjqcve3hfXZHDsMYVfZG8rV6R1Le4ayqEMhvZuK9TakQnamwg2BUFy59VN6dSiVtwXFhAqMNu",
  "key5": "4vCmUxTcAf3jgB41bSfBSFPD1Cp37M4pbPBTvRwvrp1F8eRHKRSWfeaSYKbYCiPaCfGT1KcKpKiovPL2ZazsY133",
  "key6": "5LfZSdTfp2LuvNDXb2X9xf4we8jUMZKtaxzDqPDyHoXy2Eo3iSH6sTKwRF5KXJe29cuxJ8htzCtqbrf7sC9eypPa",
  "key7": "5WnacVjGSQsCT6YMbhHbQYXF6PuS3N2AbyL9ccs4jHsU884CpBAaHsnoBEty7tbe6y6hXJuKhSLa12QoWnZ3HxSR",
  "key8": "iTMzJNh7JBAmTrN6okLnW43RgRPPimgEpJpsFJHgTwdFtEzMP5PNETw8TBnVzn1Q63ggLhaWQaSyU1xK67AZD9k",
  "key9": "GW2PLQFCMJUmhaCnXooaPi8ackZKmbHErSwxJ3rFkoVjkiCFB67WCCNoLMDdqkx4Mt43oGhigy15QRCtPQY9PCd",
  "key10": "3AoNkEMcQdHjB2HddaheVePBQf7dauTvzKwEvWjXPmHR1eHmwNda9zAJVeLF9LEmc4dKK1qFMKebkTwU18TkrG1E",
  "key11": "2JTwFptMefex7NQW88sP8wU9ECb2D7Z4js7TrDFwiZChDWH267ia9J6i3WrAytxutjyKABSeCPDdWoWNGwJ1V5Yv",
  "key12": "avqvzxsBLRuyw4zjGmWkdKm7kBuqq53799mWPqMu2rYiLfHqiBSofpaDX6RjwGaEJAsnTrWLGsGC9kGtC96r57L",
  "key13": "23G5EMYburHEyY8Z3tuXumsNGpvNa9VuBavKHGHLrkHzmhaFVf8GrCfbNRJ6ec5zY6nxtx7jjmGY4TAnPcQScXWx",
  "key14": "5AaNBGumVCQRr4nagBKcjK9FZmhG5PZA9DNc5gQyxbsR5zqexMDABaHmr1DVhbaXBKtJtGpAqoDjomLZyB4b5cnD",
  "key15": "4LyEgLBvQBTVVLmenVjcHo1XzKykDAyVsu43ybaz2gSTBkUaYRrbLDoPj2yQTYQpRhh9pZY89WqQXEVcFjDDjJwS",
  "key16": "36M4Cd8TY4Z76h8EMBQWpCRGBx35VTpHwiqnFuV5acpcFvt41yKrAWAiBdPR5wHqpdpho9ySFa1GQLkWm18vGA8u",
  "key17": "4Az34QwTgpHaW6qSsyGZ3g79Fc8ZJSgK5pzv2s15MAKY9CRhVdWqhPuoW6wfZLZkGnUh9z6zrq8BV1zFrtDYbpJ4",
  "key18": "2Zj3YaVYSGC4m7pBo2CmPDcrJJxPyXjpJArsg8QLuKGTidvfKKdQtZcBK2x1NBdYHTihdLAPcze1YMPzLq8KsZY6",
  "key19": "2ri9c5sJcvh1mBEfPbpb9wcxbdaYmuXQQHvkUDKKY5vrPDZgDwVuuD15MUP15FAcCkMaFX6zRq1Rxt1vefTDac4n",
  "key20": "4cbx6WFBUFMYnxxvr8RZdoWa4QTGV5oWuLWKkhpcMkx1FgJCCk6SvzdfGb91bf9zuKZRPjULeEVjUsTzGucTQmge",
  "key21": "2KTd9mHtjJ4STwq4yGfcaPmbh5PFvEN3ob6Dp35vPh33oWufyjRTimk8ouJzA5HNdTWYwmW4fRLUCwVvFkmR8MHx",
  "key22": "5AggcrEbhF4mbPRGg3oGHHSdHr1geeprjSxPaxs1y9dECy2kXedAeePZN2BGXbt4CkqyTFx4gMxCzcxdANtKuGT6",
  "key23": "4ahFedh8wS2MfoNq7gANe4A5E7PgudJC6VZ3H3BTWze9KxzFAg2r1LXD5kQKqqfAVBQgBbNZ2fE7EkehpBk8L3vL",
  "key24": "2KjQ95Vy4diLKLh6yRxhcT4kb3uqTCKqKxZcsujH5GvuoWY5dbfapRxf1o1uCPYV87ToiS2qFDXWUYz9meegvVos",
  "key25": "k4jeh2G7FAN5igioECiS3xjNcN8P3odz6iq1RfYLiw9iETv66tzBfyvtWKP3dQ4Jb1TzD59LJAaa363wyTWhPQk"
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
