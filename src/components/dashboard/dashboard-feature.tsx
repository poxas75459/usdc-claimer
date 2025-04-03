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
    "3WF3FMLqmBdG3i7TrAH8mmmNfeNnfsBMLu6o5phrZ8bbLF7J9edcGfS3RT316NhG9ubUh2t7s55wjn7nSyvABeDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TcjMe9E1bCHNzun8qkyL4y4jGJQFnK8TUoM6Fn63WWy26sh1pUbLkFUxrAkpZN4UBgjQpFpu42jwMCKu6rUddfY",
  "key1": "2kymNWFwipmuYzyz6MrMWBB8fsN8eVZXCT9xKjokSizbst64F1edBNTP5mdnP5zGaHavrVZixM24Bhh6tZ7U1wLj",
  "key2": "2cACM7XVqM6JMc8QZ7icPqsLjfKciszBCU7AJxXDq3FGuf3945Aj2QuAGPVAtX68Yi7uueLdNEEMi8qVgcswXncD",
  "key3": "3BdrZtDsjdEG972YnvjqYpDXyood7HgK2zx4VixPfXMWGdUKKpdyuXY898BfP62mvMASzx52LxKprMuwk31NW2wb",
  "key4": "5czbSwSJhapGAK7fgrpUxoLdbkatqWgi4kBP6dUUqSSVLvawgPU8Vbn91q3BTskxqkQGmKqDH9jBSWarjTQKKwiF",
  "key5": "55QcV7envUwrSrZ3PhPHQvNSJuLDLxFXytFgNe7r8rsHAkkwxgwnqrSFx98nqqTX5pJGU8Ts4LE4oFfxAsEvG1jy",
  "key6": "4Wwptep8g697x2ZY7Dst4gHnFMpdGeViSjEB2SSjMEEjDHXmCMTq2xs1fibpYEZwZVc1ybwK3r86ZGPsTAZ75pvP",
  "key7": "2W6e9q9vJTn9zcggDJnpxETNtDQ9NhzwgeQDgARunTRXcHiyJJ8qsVKHEyDiq2h55Ks93seBc3rWSoTsdk2Q9krG",
  "key8": "5DrGxgo8V8Dtj2thoizwzTNh2jsnRbePiZTSLunq5mAbBe8AhEh5ntFC19EJBGBKDVgKPiVFCsL8Q6ouDU9GFuyf",
  "key9": "37WpzMuzxSNnVyN5m6VkSjBgPLV9PcXbcUKs3dKv2mtT2i6yTrPxkS6mMjKXBHEcb9oXQV4SRYtXZueHjN6GoMwq",
  "key10": "615ezuz9uy89G3wy3TGQRdGrNqtzGTHKhwzmxcchV2c1aq1sdfijNyefc6Trnnz3Y8184annvCwAtePSZ9ncyshx",
  "key11": "3YF7oUEYiBDq9jt5MyJSciakQnQ8hCZ4GWsoRMYVBvYdWVfjmtSovQ47k394gpuDZagZqLJLCKMVKK6t5GNzx8jH",
  "key12": "5DQJPpbXF85pfwjfykidBsYeejLU16aQEtLVC2Wwk6uwwWgKu2TVdcnhdAYzb34CqL1tspq9ospmSFezovXVEezD",
  "key13": "42rJz2nqmPmR6fQKrFDms8YJGkk6fsJ1Lsu1MJLdpSgo3r8QuBXiaL4iMkGMswbvmNuxSXSSTL1ArTnAChY1kcK7",
  "key14": "51jqHNSXsnxGykQVzYra8dHzGVvnwC3ekNMwpk7zmLkkDrDUJ7qRR6MFwuSKkwpJMrHoMTwyb9rRAr4Tnno446GN",
  "key15": "3QaC2bQBgfAKyjibmAz1qJogDuDHJWDzHGbxkBmhGyix8vznf3hkJXihpFwqgbUWRHSpnfuDoK8TuuSjyNC1DH5S",
  "key16": "267qZVF32o68AnKnC4Tfe4VovPPG17o3ma2whChzbd3V4mz4pSDZz1EnMPPfYGgjoQ7HfasKZdRhQth28Cs2aYGw",
  "key17": "5rxhwSHYCae93sTn1iZD9HbbqfbLo4aBmNQ4bZgWYdcfP7abuzCMzXrLiRGgnvyfRmhqxPEPx5yjirb6hA5AShs1",
  "key18": "2bTkhBBdGpswYNo8wMBYHR4DiD9NE81wvLeM3HcttHe3f9QiXUcueeT1bahcyBKryGz8JRrweVMqPF2Q5U44Gys",
  "key19": "2RFrGFKn6VxcyM25YDspxaAU2DVu1na9vzyxXrDQBeZoFhsCPNDzPqca6rLUsp5QpAZV9ZWzn7rUcecHKypxHErT",
  "key20": "diaxjMj3HQfPJFgxgB8qmKPPU9msCcm3ujWuvSvRXVaBKXrsxxMGHRrRCnEsHLZGMdFa2UVn5fGsguU2GfnwLki",
  "key21": "455AHsSsSiB9qVtsJ4HdHZNqAMYJqpXJhAPbNaPG7SUXHBjK7jM5gLW44jSqPHcXFLkpZ5vvhGyH1uWBAU8rYdSX",
  "key22": "2btydVLokRqGQFa4JPrEPEVXvJLSGRuKdk58bmGX1knysU8nyLzWZrPvVxxZrDHoW29GWWXXcFVmZqahfziiYL9i",
  "key23": "359FFZsFpUEdeG75w26mq87MLc1ftaXxtZ5Y5yegJJm8RzcAfDXPLTL3CcLxuukdqbWwv2sFYXyLBFUh9DApz8T4",
  "key24": "53iiPEfWFENAqpvpUGpRm3ZkHVs4C8VWmTTykTmSJoGAAnchZtcawpR9BR23Eh7tj5i7fMSkx6peGFLE4VegUWiR",
  "key25": "Dm4vQ2EpB3RrvJpTpXoUkn4jjZjX6YorwBjPqxEsCRWW1tmSG6oXTPb4fptpmBGJa5CKRotCETZN8kGbyX7xbKQ",
  "key26": "JLBtgSgD43yGUJHCUR59FN3DAxqqRooHhhmdinrTgb4VRz82ZcQ9QfS4RNZUVhjvvj5t18ceQDoFhshEKG7f1PA",
  "key27": "41JymfztvUGYx5NTEdVHKnHvqK3TiXgN8oxCJHep4H97DgRcPtG557FUf3twdewac2LN74iX7wM7JahMBRqLfShE",
  "key28": "5qP1Qd6QUX5Ka7GVvXFzz6f5XWLdAXy44f7ZpdFYoM5KSpAUSR2SiKxUfDKeqv3RWhbybUXTT82QGC8PCgTE7DH5",
  "key29": "4m5WruWG35xgjpSzkQusGTNEv5CpVXTpYPSFB9bkprKzuQaxg66E9664tYTqqttymXEBeLBsuFSM3C9myGgeLu4H",
  "key30": "2sq6FLp9py5rjWuBjkfhv85nYi47p7YfhH2FwqvrP2TA9qjJ1vFCWaYhD6NHqYDULEJsiV5XSt5VxLSxNHgTiu9y",
  "key31": "4h93yD3wyKyqjfAuW9qbp5gPqMi6edbMzhwED8Hptt2N8TNkqjC2FFqeahpEZ1j8QMTuN892RK7jh5jDxFuFqRKF",
  "key32": "4cJVfGZ8iTAvzgJuajwn68yBjt9TBJ4TrPUC6Man7EEG9jSbt14nUFdziam6P8Xq5cRRtD4QTN2Bw4eAEvhgP8wG",
  "key33": "57VTYTjnBgiBDdUyy8GgjDhzRyMZJM8Mj8X3gKg9QT6u3vvrGLMWvvRcoktMPqM4PD8Vs8FKQ7cvy9HuF7ix2LZB",
  "key34": "4eGQLFNzJkXwvV3cYYbAD4vwPUk2hyZhQobj8yyLVfU1bYsHEhs8cdoGJDsDx1yaDvuKytDkH1ewD7pWnDMfGH1T",
  "key35": "4Y6kaMTB9WQ91vUobeEMXSoMfUrewXtPcdC8Jt8xc4dsm9GH4MwzpFRFFPQYVnWNuvPD1XDTcim3AVwYXkdSB6qK",
  "key36": "28oUxNjeP47ZvjTTwBGysMS2BkmgCTsrenbm7Y5NMTzJn1c2LUD8HDGxWFQUn3GE5Xhuqjk4q9E8r1webjY7sEkp",
  "key37": "47P2tzooKCeTjnWdqiZXApKScR6SH9TnZyZhVhjKn1sZpLPBii49AMVFW6chCc7h4qgAWncUKp72URvCYeYcRWar",
  "key38": "k1fLdA9AjrCqVJjmCaRswfhhpU9VRzYLgnRJqihASD6tsqSezLUbstGQs3KsAG5a5FqC7EZSKfqxQTJG2uScUvA",
  "key39": "4PqWDBqVfSx3ppwa9b273JYXUZQmJacAuj7RUik5dcZQo7nhheVbq1VvGBUwXM3HSb8yLK7PxakSisXVZcDF38NC",
  "key40": "2ojEr9GAa8f35Dp1TcVP1RodDe22rCUnaHdKvaq3ULfqE6eevcfKbW8Po8ZvM2P2r1PusCc8wc2VkFTbX1xWkpvs"
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
