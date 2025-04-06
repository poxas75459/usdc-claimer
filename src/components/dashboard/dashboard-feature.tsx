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
    "3ecwc6wJyPj8P7H8wyLVF3m3S52W5BjFV34MMrE3GZUu7MLXTqr6GyJHBfuwXCeQEDexfGWqnVy8vDN9rsZRRADb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2su33NQqiH4zYNnCCD91NUxBuDp4J2uWqh3PjGm83FinhXR96CdaQv3kMhPJHJPVnjno61yLhkpNLH6vtDXZfk8G",
  "key1": "THKxaxpdbEtgbKnwNLkqbvSYvSt5RfBwjgpo9eAe2eaKZ7MSpaG2G7v5dZDPTLVztJpU21hcN2ibrbF36AkPrkz",
  "key2": "3EEJhv1DxbDkSYVT7BxRBPz9qmXwgWFpy9oF1XPTkfLDauBFizzv56WXef5CUggobRSCyjSiVRbVGQHkza6bU4ii",
  "key3": "5wfns2V73fpAnQ4eti63xe5pBSGZtkpW9u1qkCy3dEWUXrEEatALhnoUt4cLLNwBj1vrBYv8Y8yKGLJMZG7gnnYn",
  "key4": "67RddbaHhKkTFypniMbjQCcjADfwxJJ8AyxaYgTs4hA8vZ1es2pS8WQ5dNt9i5Unyu1fhXddK2Qbpq5KNVDRX9Bo",
  "key5": "8HqaSD4Qe3HVFpVbGFhg8jrjKkKQh6RN1tv6ME1EDegZQCMsZtbTfECGh4FaqKUe8uxbsCAP78FzJnQNadirwMc",
  "key6": "4hfhcwW4B7RPpVQzx3UGGCfHZwZy9J8zvKUjM1RZq1ZMAFDYBZ2wKuozna9YLPfV5fQhE9fjYWqLBRSqfp98PBXq",
  "key7": "5JszcwSa6KY2BdvKQbh4q2aRUSYyASfMK65gwSphjYVKHwvgJ2Nu5Md6sMLfrUma7Q8aU2abpZuKmrjQpZND1uG2",
  "key8": "4PsNdKZLobk1CX9vmVATXfhCQPCrr5KEhuryeCsfXNCeCr6pGsXgTLuACC68V7kWNJN4vrjvPLk8TzfVyeCJaqaX",
  "key9": "2x4R6mz7hfcZKd9RocScoY52tB6gqE28rKZ9zfu1q4w1rzCoH5cMr8YTs7C6aERFEsdarFauoKy7usBMF2yG492J",
  "key10": "2UnPTmZJN48M4MvgCgTW5Q6JuPcQhLR24qvbncom5oGnsWBNVEiuJ91d831jMBzKfJjku1cEZTtxLbegJxcv898p",
  "key11": "n17PDsZ2cvwLWWS9ENDUq8h7mr6SDNVR3rSRJUSSfp9bg1K5zfkvziwoRLijxghCyzDJzMygtJAmPbaD9UkATLB",
  "key12": "2ppMP4Ur66wnKbPqLpHJTj25bENbFwrW38tqqPZkPnjB3fonN2ip8VwGePcjTG4phow65Qpspp5nvRxgB7YZWeDG",
  "key13": "2qKdtgUsajjJpNAgdWyspmpBpCNn9i2av9GMXqAQ2PXqm2GxyR2h67SApHaYkmLpikiRR6FuG3sramj1J7Liji3C",
  "key14": "5iVR2P6j1qhf3HBWKgQVsFV67E8xXavfsWzadeU5Tv9SDJimRtKgFsLcTps7cmu1paYxS2691CQ6P2uA5WvqzvET",
  "key15": "28WFYdL1A65cUb63w29HGiPSPeZjqYb6EB27AeZrubue1HMf7GbBar2QnELrDVfERGmgP99Gff5zyNicKUbJk7d5",
  "key16": "oxsyy2gd6cKzyYAsRo5YKwk7C3jZCsuLYTwLor5xWfuAeDiaxpRGUvdBzyuzWoRyZMyAQ69gCvKRh8hzsNCt7hv",
  "key17": "5FZJaLK7dwJZZwa4uUHP9X8jD6P7SqQrdPVQSpMxc4mBFMjugJmZbqxtVqTdybKqT8d7ixc15EifC81bCeM55dwS",
  "key18": "Qb47iR9WMisutHxMCxP9pCHW2WMKvgPzqmGdJrUNYU4hQoac6CnNEZ62i77fMcYBxmM3fV84dUHyop5Mr3Gfb5a",
  "key19": "35jDTqN8h1GMoBZh4pb1MHnaerhGY7a4ij8RWHHFzh9h8FijCxDpgMhGHXmQgn89ks3h7ZD11hqHd14H5xa4LYTm",
  "key20": "4LUnbjhdiLupJWHb7ZcPg2Yja4zGk6hPXX7fYptvaPSDoTe1fhu4WTiqeZMdHdDaVb3YrfXCDDCiYiMTZvAHt87W",
  "key21": "43KhZEJe1UJd3VYkPxhk1KwAWZWgukyDMkXHAd8u9CiptESBMkQCV2JLQ6MsjauA2KaMBvrcd3oRDohYAGJbWhDm",
  "key22": "46srKSjp9iPVmqJDmLVAfywQJ4PzfX7Jw6d6xVy8DDPtrgDK61Kn85eLaQEUUmRQcr5qb7R1hRobkdiUdapwgkrv",
  "key23": "3pQi42MJmfGESYfVejoNfDyfZuQjzopih6xnHxQRCctdk83P48oeKhajauSbdk1aGPJXBbF92uydATWtWze4JnvZ",
  "key24": "4PxytX3nhSHa7GZpe1n6r5GLKp8o8hQSJDwRxPVK6nu1q4xD52LH5hSsJmRxwnK7YA7NDug5RAgxXvS4x9n8QwHt",
  "key25": "5nwm22mVCpgTU6aE2CgeU6DDZLtbCUo9vTaAhPEmAR1ZegFeoHUtyfek4VoHW717NyeoN5XG46AJcXhT64iaryMq",
  "key26": "3y3K2JiUSuoBXC5RGvAyGL6XATn9WcNAByoAFUGJPNUttk9RYN3HHjzURFkwqfa6GimLcHk7ASfJRkQ1n2nFggo7",
  "key27": "66uh4V7w2AMgaiu5NxEemgL4obqDPmYRU7QV29Dvwd7AEgzYV7ashW2gxN2Jai21DfHxSNg9vTPM6qdcCHG86v8K",
  "key28": "5oVBSo2gB5zKfXDhEpwxLGHnPX9uQfpVJomRxLeQp6iX5t64j9SLAfvkwqF6AGLEosHeZri6FJ3NFvdsuFUdyz9C",
  "key29": "5uUM1Bq3H9vfoxUcTnnW6YryFKMrudL4PS8HsTu9CXvwiDLmzpwAnqyWidHgiTZthfUz5DMR6AkCfoeMZe3GZibQ",
  "key30": "wpdbyTpvQa2iNka3btRqLKnvrepTfzWEgMgP5415Kr6YU2qkrsNz4EaumYSynhxruUsz8m79UR9Bx9KnuSjsn3d",
  "key31": "5fXopmvRNiXrceuoswwMiAgr7v8xHEVWSSREVUwodyS6LuXohKYdQfG3tkasBC4m5HEizuoPMA6UBDayNR7Rfmnd",
  "key32": "5PSwJFwDQudXzhbaTWUrPKaNfGcAWmWiayCgGkfbHYygrgJK22SWpTUsKNotwwDWwZkj73xTs31wCEKmz76w9DM2",
  "key33": "BfpDxzgddsLUAtZNMMqeK9HN1Y9PU2pkwkhggAnnxLYeZcSXtUesMV9ujJUWgc28YXhf8JN6YVZg6L612hczmSt"
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
