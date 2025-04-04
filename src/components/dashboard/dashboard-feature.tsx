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
    "2jdHsRzEa3DQWoFe4jsU96esjtZZwzPQjFt9dAzmtBXMW7o1WYNHKqUsHfHJ9r3GZv2Pn5ckZMzRSzps7qyEgasq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "evw59riJQ3mjkiTzJ6tSy8xC3Qq8YUEX3UVsZovWh4urQfgnkfW5bSz3R8QTx2SfTrqn8Tug41j99nrBikUqkuy",
  "key1": "47YmDQRaWJL9i4HvPQ75M8CyoikkMvL7uEL2EzbqPfDq9etDtoPjF1HTbNw5YJ162z5UDtVhFfp6og35waoCK4ND",
  "key2": "5teiVwN1E4YMxi8kYAitTuZrDW9wbYNUsYjLk1vmsowFTDVuT8e5nY9fNaHtPCUL22wAKVNiu6jJfCSWKTQYh4XX",
  "key3": "5ijUQU8hTpaCjpNrEveMhueLGM7of3jmDBGpFBkwU6WqAB1R1WhZX5W3XQPfoeAqC98NAxcvTTqRyAaj5EfcPpr6",
  "key4": "3bNuKznXiHfMgPmCsdBApZDpA9gJGRCDuQGQuu1g9zHiGhVHzJ67CMf14pNfkQjQXUWEtgtiSUxQHJzwmM1e59zU",
  "key5": "3JaEXSdMRVDox7vRMEQE8s6LTrggyBGLH1UgVB9Qiv5JMXeSdsH4grdD7x8YF8sHHps2nmakGdATupVuLVj6oHfk",
  "key6": "61WoqyV58VykMq2y4CQWJBYYVjQrsZkG6eaQoUrHA2rsJ19hTtdEaHbVQFjjZLBeUBsz8f3isni4CoGz4nZ2dBGa",
  "key7": "2AaE1t3p3FVoATd8Y4RLhuPCRv6cuSfZKRzQqwvHZRHHcY4EYuxfawmZ2SvK3XRyuwUDDq8Hnw1wfmKKYAMcBiNu",
  "key8": "3C5t9GYmL7z6qStPb2LPXhPXhScsFUWqqjomEKqKs8d5p6JVMV3X2VYeY65prXoHahTp6DRnJnixNkoYPiyCVFoE",
  "key9": "JgqUB9zBSDoc5H4YYviPAvykgnGPpA2y4Ffriw87dGRxmjcVMaEMqM9mVkDLVQ7A3RYZbbV3N19fjizgVNC1esL",
  "key10": "33c8AsEPtuXQnX4Vc2aWb4vrLWwq7ESrzU631eCTY1rR28LU5DSkBGugXgDm8ua9NaRJ1sKAFckCSKMvyWZp8e4F",
  "key11": "43EquPiZzQpWsrRWSkwDLBW6e9PqKJuudjUVeVg2DoyUCoNQWaPqPKYQV4ytMwwfxA7iEh5DGfmKJDFw6sTQ1ea8",
  "key12": "3AZjS9hS6Fo9XGWxGiTJhgjUoSCHxiGTBQJ7S7unU2SctAzWutxT9Zfak3LcgZkzHuH7gKwoPiu6JptQszWTnKCG",
  "key13": "47oo4jgMs3ktAPLsCjXHJm2jdbfjkLQDvNSBiioDsHrPUVGKZGbNqLjqooPNNbtNugkQNBykBFAK4deQ7TyWH2GH",
  "key14": "3EormwcpNw1w6C9REWF8VXWVVM923834Wu5kDZVYAtrkdRANtBKTSesGgt3uzcxHKTFhyEQxwsXVNXbfFz4gQFfm",
  "key15": "8P5nUFFzoW2AL95yDctFAHLAaFHUYq7wTZK2YecZMJSQBMHPrN7tVHsaQzVY6REDuPQJESekvRmNPWdEj7jpsYc",
  "key16": "5jouD2M1uMk1wx6xYxLFzvZ47hHPfrswRWAs8x5zWq7TCwSV61BZvddzGG6kRxAMJNBPdkaBHPfCmDSc1oA8e3FQ",
  "key17": "3VwhAdRwz63v5Pnryyg1jcHr76R548tUPNNvdP5ytk6zTp6fVoZk5k54rsBkfCvZkxtC8u7MVE7WVe9m9VpzHjUb",
  "key18": "2LWrQ8CApxqzkbaFT8FY1iaDUTDwLaz1cEmMeTp2i8NQezmhifjcba1oqtLfMY1T5FXSmuKEE5Ec6QvH9mMcKEwS",
  "key19": "2TKxHTwXiTuvPJb5gBji5u2Gj11v6FV1zeRNu3wBeTGmUbzBZnmGbQZ2x8AVXogQwKsVhfh4FZQLBMWEtCwhDygX",
  "key20": "29S8h1Rx6oKen2bEcJrr54ngTXsiKezYHRV1kDP2hBSg8ynAafFub177CLK7kWcDHQrcBJumuaPS4CtpXWaPLDk6",
  "key21": "4qw5CH95Ycb9sSBZmRBXbrc7YHb1RokfEAiXSfGErgTjeKg55TD77epoQoXM8dGJ4PxEZQNdPJFm3aRDMzhsG8h3",
  "key22": "4SWUN547iU3Q957BPN5tfUNrGkLdACDQGGcywQP96NPwLeEwp7UaEiHApsQsMbeKb5HdfDmDuTbzToE9HpEjDMK2",
  "key23": "3GFV8wXC5QwRRkfUyBdd9sWvGa9DBQYHu7qFGfGiG9GP73owyUFarcvtgFJUCD8Kh7u79ryRkKWBGwuMJ12ueNRd",
  "key24": "29QNSe1Jtkan7JNMbq39bLStrFj6hqiiWGjAoni1DZLssn9wQRW9YdeswbaPpiq8FqkwNJPhGzxHSFj9ZvCNRNvS",
  "key25": "3gNUcJzqEqa8LXnBDvZFvRCXonduFVQuaFDAAViaEaeSvid2PoKYcbrvXZWHzyPL4KbhkG9iqnAgCKdGtJLngCw8",
  "key26": "5Ae4NYz3k5ayGvkBvwrfmV1CVbM3RpV9Z8kqRhj3efSJqugoMKgmGeDJbjxktamRFsaoJqwcnoTz5Lbse6XaQsDX",
  "key27": "4JPPWeUnF75C7B3pRZa5hEqXNqR2Qyi6W3pXKuR6ueoVwebVSjJBd1svZJkVa7muk8nDE7jU4QCwHygNtGLXeVT1",
  "key28": "1FbbVPxow4jMakHohc2LoBFWdHtQh6aJTVaFqahv9xwBMT87LPJb5pz6m8XJLbLntHBSzHgUkgMp8qWiPRkbpCa",
  "key29": "3XYxKUdGhajBFMW7NRrj2MeG8wMXjwj95J7hB7LEdXGttFBzHJWUix6BZ9QQ67Pxc2eWjUNFke2SNJtXCVttnt8r",
  "key30": "4VFzup3TPmMEkszEizdyFhVEimjff98hy1fJF2zjdTpSGiuLAcKFpyXK3Gb8SV289JQZTQSQpTcto1QD3KVQzfun",
  "key31": "5uSYrwM5jNDdeBsQpptY5kV27VhxafsyRFU1s8Xa9x6MJon61emb5BPZgk1KcPJpmhPjnwusToBWvXqgetx2F6ET",
  "key32": "2B92xQzy8EoaEXnrPuM4RtSjkkUK7mMziKqRmUn8c33zRM2ZDrYKjpnm2rZGseysjc16TgD3rFJRDeMgb1N3XS2X",
  "key33": "1YpLemv6C8urapLpPYrXYcJr1G9chPpRkLcgPBFv2Akf1ahawLr3B8VjexSmcbgBCCLNEZDftFF1nnVUzN8ywjP"
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
