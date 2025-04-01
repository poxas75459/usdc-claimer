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
    "VReeVAWeWw1YjtXoS3ejt3m61SZwLKHf5WcjKKpR2RdgdpwFUW5vP6qrvKxjqmVtWwKW7LaQc6mYv1DizEKQ6eH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cZnwrVtQGnQWRjL8XK3pemeTKRft3fHftcmpdQyQwJyAWkFvZunSGX6fhpgRbV7WSq9GmsZmczno26ohi6iV2zu",
  "key1": "M9oZLRspFb275LpD9nc2SouNrLDSQcoztG6gbKtJgWAMXQdHr7RgTjDCnj6XAPFQA814QXpWQvvTnTvEKHgJoGX",
  "key2": "4supjJiW3bBEre9W8v5okTNRgCDMMkrjiMarBLpd5Yfssp1KU57LfZJTN5YR9qM83G6HCPL4aivtjWBzABkGVNHz",
  "key3": "316qUR52r9T46PaCffHFDdyfbvQWobZaDwiZALQVynKhvhG92WooeMYMhz5bgeEoV9XeaktaYtiFVxXW24uWfVJR",
  "key4": "53FfsJs5rXa2xdhvuoyvjugmCevgjU9mqLw2qa7rZsZmRHfi5RBXxmprwMZwnEPVaQHZFsbNdSkxk69nnWC7shUJ",
  "key5": "5nqyTgn51fFjiPtkZUNJMPRrTF892fv2UT3k484KYPBYrKFZ9Vp3sNn9WhePYBsbPV51hGSfij7FEJnXmqtKjBj3",
  "key6": "5sedAHm6WxeLz1VXF8dEYowThhG5bbW6fqoYr7voWfGSG7Pb3BaVTaUcnXhkv98daiGwbCibGht8rJMGrayddRHQ",
  "key7": "kA56YyLY8HTftJQssMxhoiha3mT7y7xdLiSBRmaWFc4fcgczabfuhgTmxjxBBvtd49m5HDV1kjTw8n4qeJLF2K3",
  "key8": "2UFSnhyaPwjw3zbRF3o9tdjM2fBfSS6uAxJ7bLFd9abeUcW9RbjYVsq8p1ukwYANAdRriKKHkf8wJ4WpwseDugQZ",
  "key9": "Diayfw7z9w6v1gtNaDiBBgiHshozLa1fEDBPZKNtN9Mb2qTh3UsJJ33vuo2NozbkirBeyyT4f2NMyRgryJwGC5o",
  "key10": "2GdScoXfpaJU4oVV3xdF1KD8DiDcm1oWCWKQMQCMuCtjYRHdX1UvpmxbjRhq9krgKEFq48UnpyxUyArJHpck5yqg",
  "key11": "3fCvKUZwE9XSqDhuxaERJtNCFfM6BqLV4gvUCo1dU5J95v8eLFj4L8y2AovHVShivMRYwxjdsK9i24ZAoBMmXFW9",
  "key12": "cdJiQ3La3Hr5vLRGkuDWuiYxneYRY4ZF4g3TupsQSpi44ofCXicdD5DMqDFeQq738zw6fyh39mMDqb5zxq2QGaz",
  "key13": "PbX6weH83GeRUsJcV6cSH7qYS76Y938eBvcio6p8dAC8BDB4kKhEYu1ELxTHo5AuEA9EGom2qn61uygpsiw2wq5",
  "key14": "DVtthyvGP3rY2rjEYhkTudevnAyJ9aQTva4S48fA8gcZxkkaNyjweygEuMNd1Qp5ETM2B5vv2UxATYF3DoJPj7W",
  "key15": "3N95roaYDZwCcYBMtA5aEdNUhpAC6EDWa9QnmZesRdYWhuoZZAsHZRwwyy3kpNYEXnmguMUk1TjjtyW7BbKSifGE",
  "key16": "5rfMGdEFaaDu8EREodLqfN37qo4nG4nrkXf9V9CXHz3ftNoSVLH5G7RLBigoDvbdk5NV7neRvXpFYvbkDb26DAN5",
  "key17": "TSz9bxirVdDun95eS4S1ZmPYT8A2gpdwZ8ST3HUCvobVayVQy59FJ8mFWGvwZBXagrrCKsftuCgVCG2dRLwrgb6",
  "key18": "5yRsuCVKeDkXi2yBfrhjyoh8rZHs78dLckm4ZDaERgQxUMoszT4hbZp4sX2FsrSf5Q2MLy9S923yWk72HfDJkXpY",
  "key19": "5wSHqBycs2oXzPkfnaqbhXUc49XbhjFcHUtRTe99Z4c8GTcThutftBmE1TduFLDUoTaLPtYuxXUbAKfgAJ8V87AX",
  "key20": "3VJQ1EtQQHZgC7iu62JZzGhhWwGymUrE3CmK5rt6Nw4swJgDdw3nmEXNMKcH8KEsXqmXZA6keCs2RfcG21S5FiQh",
  "key21": "cTVKyBAw4DYWZZZzoPUJ47Zjo3JY73e4w6wn86xTawUGBHKDGzYjLgkXd2ZfzJmRYzPEZNRSZR1woNN2SpWDYfT",
  "key22": "2oCMrhqaNMFBE2XXrCLzVAnGfV2jKXLPH7P4uoWbAdgAF6T3DPFktoy1DBGoeUQ7RbHYSmjsYx8hDFwvvm67QGkY",
  "key23": "5apvJjHY6ndBJDQXosP954nJvojTgX8C8xvqGVkNcTeoEufXXU4KhdZ4f2vekqy2VnjV7v2X82QD2jQHTGjbchG8",
  "key24": "4hu4Mckk7GRTw4Bh8rRj57sxcuHz6NXk7XNXaUUv1vCEzg19Ftpwe5LHbmojY2wVEZNxngvRybTrgAkfXrY8wr3n"
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
