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
    "3D7iLaduC79VeUmzo7q3oubopZSzXjkmEea2UnB3FuybV3RbndcfphCz4BtXSsaKxrGqUWtGP5h3iFabJLtzv97i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22nt2q34sn4zgb4ccueH5rHCD8KLHmWn93m6e26hSvzhuXPut71Aa56P4SiCjH7mExZNB2hT9DFZGvdkjXBAMCR9",
  "key1": "d2u8eK876vR32x1fWijCcvUUdJWzLdqBYWh1bkL8nV6kfF4TsCVnmVxELTYvX33pGUEGWK1ye6izNgfjtEaDWMw",
  "key2": "3K3GjHQ83LWTCiXjpygHdkeXKoJLeBacXGFTqVKLQSdvnzdJ9vopSVg3ooC54oFVrGSUgbDGEL3VtsqecEfYfH3Z",
  "key3": "V7WLtEcpomoa1SuhccH98wMTVDfFykFbb5JooN5aN5UDcDtXQPNSeUYxscDjYKLkFAAGh4hESCBaPqtFGSVd75R",
  "key4": "TkFxGn3KBysGCnKEtMLJp6q98yBzvjy9NKN2K7Du74jU96fLRR4wQvBz3uxWUvmua7pbJtxCSXWY4ViwAB2LZs3",
  "key5": "42onXEjxFkpjReSf3SS3RNy7fveDLYSEX1o8akdrVfV115Ku8bf73jwCyratuUKww3Ye3hSKZLwHVkv6zQeQ9Bw",
  "key6": "3zyYVGLmf9Vs1BaQj64GMfdaCsjrA7DPV12M8Dp4Y8kS8ZNUCXfCKNENEevMzz1NqbcGQiiNA6s9KdTjr3RAoSuc",
  "key7": "3tk7tcJiEA9MzxuoUu9V7AG9SXipDCvtbnyjRhPuF3yHw8FUJjoReCsV22PrQRkC8bSfbVcYk8QMEDG7WqzUSy8G",
  "key8": "1tJCzRyxETp7qJqjkq1mygNAqf5S3NZTK7qc9Fk5fcVfPdyG816siZShCsp7FW5fqpLHpD1ZyZeeqtXNJK1HneE",
  "key9": "3CfCeMzVM79Y7G1HJkwFwYStNUVx9eg2XibfCAeharnM3XXAFZ25n9rMWE1jfufh1vTxr8Q2z9zXxyNH7d2mdHCq",
  "key10": "3H8iwqUh92UjJjCFsuDUXWTSGvD7kmNMVcpW8hZ5nofk2dudA3XP6yM1PQFK2ojRbrBW56zaCP4d7xV1FYwCwPw4",
  "key11": "26WTizjQL1SLXNPhqkDHXdAhj5sNkQvUo567LXcuMc8Wg13XQU2zAYY3Y1EDhqS11MeqfDecXniF147u2TVQ6Dir",
  "key12": "2c6RsUwMmLDyHH7SQr2Jy26xM16kFjGYsV26VQfo5cPssmb8bN24miub9FUFKa5UvXgCsU7xLU4TbHhSSCaSZ4yF",
  "key13": "5LYrqggGL9sWbHM6hp7DX2tU1JRWLJwB8GtK2HopCpgwM6qetNLqrCJoXNyPXEiuYxnrnaFY6pN7k2ndyU5oJ6DC",
  "key14": "4wu6yQqaPzpV7p3MfRaERpAZTf9HSfn8q7Z4CCuJ1f2GixbSZYvNrqyCy2No7njvnqrDSqcuLQUi3RfbiCND32we",
  "key15": "eyvWwAyXMxAt1B2Zc5bh81kBXbZecmWPHBLMLuPuWqM7MnuWkQezKdwmfUW3Zqt3PkkhBH4qt3457VT1bqUvVik",
  "key16": "62n82KAZTJwR8CNuaq6uSRmrVSCoJUNgVzjCL81X3R9YvwVd9V4hqLL34qbjngW8bJWt9XD2MumUopNi33v7PoK4",
  "key17": "3KjJ4DxGQc1MS8hWqbKeV6vq3c3ftjSS7YuYFJgF2FwnqKqHbXRDFjgQ5MwYpHd9tuzXLgQBLfeQ1oNRLBQHdK8m",
  "key18": "5q685KnxaQLnZ8XwxBvAEfLW8VGT6TJV2S8FjHcxXbAmAqUUdMF1PMyBvJJigGE3Ufy6bFAmtZMSict5RUfbmgbK",
  "key19": "39TRgpxBV8y14T1B9gp2t7wfxryR4wdjCEEvu4VefX7o6VRT2sVtTP9iaKbPH8fuzZnGZ7H9wiLd5Sa8CW7bfLvo",
  "key20": "2YvzcZ689Pse93wZ8BZx1s1NdhzpMxzqVvmCtA3UwyZ6Y8ZPhYFKdDowH2p4CxAYbMPU2vCJmsSfPj1vBnDHNoCm",
  "key21": "3JMLE73YScnufMz1me7smpLoSQhy3HSNngcJAKCj1xH3qW2ae2A3RNUsxyP9vnoNMASSRL9EVokjJu591GW9z5ZQ",
  "key22": "5NTgPxhjWacomkhwEXZUZkZBTiuh9pLi7kb2qA6Ybpb8JXv5JLrY13ka4taAj91mVmoLK26LUW4MVjsoDuAkxWty",
  "key23": "23iZTSWDK8bRGrXCTMD2fKV3dfhmp7v3gEa6Vh99DMvoVN61guxoPDJBZHYK1Kj32CrGZnhqLwBBjckGZTXTss5B",
  "key24": "2wzTWpUtf6YEZWPYw4bdgakzfGAWFBp1w85fXKgErVgCCP6MhGStShJzU38m3H9pV2ZQagtSrAsnZrT3iRy8sAGc",
  "key25": "3tFup9eHANCEacxfbYdfzdY9deDCfgPYwhAr7H8dt8FLpnnN2pgdDaqhEV2iHxqSfaQf59XZodcxDa8QNjq6Z13u",
  "key26": "5GWZDYv5wMFWvjbEn6Ngep3vtQFd16zBysmVo8dRvLQSybCSR6Zk61NJDy6A2AzwgKGdvxQaf7M7nfLWZqWBnwK1",
  "key27": "ESFZNqRQWby9ABwoW7a3aELJthEMWh3cLsQbNZoxmidCyrwN9iQCnua4coeWc6mWzQqcoJyUCqiBbTXnpDAMSue",
  "key28": "2rPyLDhcX7U4CsiEvDFNnDiApoPWufN9Mk84j1wu77iPh3gBqKWw9K2ptMndYKFNrtEKvJ4AumntCgWgBZjiWRXk",
  "key29": "54mrVVhvvVYhHJNRkMnVNqzbYnzZ7c4VrwVNeFKQh8Tj9kRnqCvhezdjS95fevPgEaeCnFyLPGyMivmFke8LNoU7",
  "key30": "5KEe6L19vi6HBQTLcBHdc9v9CiFYSK7a3WD79NDCTrC76YriL8yZCc918yQ3wFtrE6DEqdToKNJYCVRWeHa8gV9Q",
  "key31": "rxyT3i7fHSa7fSssY13TDKaXuUvRaaa2N2348arW1yzJrcikwDtL1Ep129n6UrTGhkppKL8okvf97jSWtz2D5b9",
  "key32": "2SB2hH6owTBhQr1hDiMPhN2wrg3TEVyfa86mB7L22VtimW2UYCJaYk12ATCvE5xcotDRvAeYQJHcZJbhctraKQ4f",
  "key33": "ePXfkP7mktj1qXv6s33rk6wcKyLxjfqRoKpwwXGqv7TXgx7ASvFF4716kuFzdT9akWLVHzC1X3QpWb3WBmxhsHi",
  "key34": "2sAZyg9YFkKpbjUUBy28TxSAS43hX9dGCP5jkZFE64sbQnk7qEQ8QxvxbPHA3tCfpTg33zL3fyjAPbQKrGoTwN8Q",
  "key35": "49A3WEyvFzPpBANEVo6Zk1jp7ELMX9FsFWJWgLu2jTshRB5mEv9hUztiaKtQsGRxXY8npxzERpWxmLNiHTYvVrQV",
  "key36": "2V6h3C7SJ4CX7ut2jW2dbm2ZCgWaSDdCDqDhpx9qqAumL23EPxU55bWv89TRdHHzqZcgJtYxjowqN1iZj8DfHZbx",
  "key37": "4XWN8WwnnM614eK5TcnSqmcyA6nBoGLWxDLxXeTFJ7E31yKVeA83YUYHYURf1AXf6VGnrdwPf4xms4J3gZ1YZd9d",
  "key38": "6aU6GdNGkT9AF3cTFbQLuhE3pb84xwgytX7PuA8273w59yWoB9TqvUgkQCvE3NWUueKu3nAcUqGU8Q4uuK7iBzs",
  "key39": "PJPmod6nk32HC2uC1dTQEPkZi7dCEFKSPuMKS8dLsQV5S7ZSpAyD5f9XCbmBRs3cufvywNqtNayxy6WQYKANRpZ",
  "key40": "4oeoC6oFtMHTnv92fMjNVj2tcFGAmUzSjw8VCcLsutAm3TbCnKhfLrgigsUJFbRcw4XqAwpwarf4qeWDq6XA6PLT",
  "key41": "5UMhMqxkjYiXUNHwsWrf2LN8p4qPKQwZPi6Go2LgY6pmZroUPak9iPWRq19z94EcNdwCsWCZ1uGh71S5cyJMkht1",
  "key42": "2PHK7cJpXxLVQE5NXbCrMXqxwvxFHSvcShZN6JeqziS6cKnaHZPd8iJWr1dGp1J6ookoaFFWnWy4hRCw4CmCxwKa",
  "key43": "5MREnvKfu8cMpxPmyN7KU3iMsRFKCKt6jvRKLRHoYRE65GhB5J7kcVEfMPzybAvdepu6xaMxhY2Lsx46pU8giMUR",
  "key44": "SJX8CDDZAmMWf4EWNn9A4owBf135iqEXf3ueNgfpphMNiF4CUhSo3SKwZ9C1zcjtZ2uUizi4n7XUPbmJjfCLiU1",
  "key45": "2ARjyGSoTQD27pMWJxHf9dnvqQD6qQC8M85h3qYBvLyi75CoCVG9d3RKutgY7UtzJBPNFxzqcLqDPYCLStfJobtN",
  "key46": "2M5pH5UEmiqQuhhtft3hYwoGvTE5y5PuzD4s2jhZKhQPa4tvNjqFkuyXXz1XZ3ZwxYWT4K4UYrMmGViRUQdxH7pq"
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
