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
    "33toqunQrMJFPJdmV3qjNNa7iM2CRYijSzUP4nagaiiJXovQBW4PARPze5umBtJLy2yhzgpRqGpq9Bip64DGTG4b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wXcTypAgPm7YMGcdD71sKmikQoAgiRfdGWY9amnN6pGiDHLqM8TTGCv5wzjeXFdK9j4JTVYXL39dTiB2YxssaHZ",
  "key1": "5ioYFtXncT24tLTSqN9MjMJvnJ71ycv2CAwocGHcMn5yrasr1sasw3LPAAYTbKQcW3mjxFk1mJ3SD66VYAcQopLw",
  "key2": "5yXSrirLrvwLWZtuqgwrU7qUxynWk6fVGuJQZ1wgFf34zHUe6CrU122fEn28q8ZSdFimT9VtwovqQBy4mDFYJrZq",
  "key3": "4gpThctJ2Zo5ENJrbxc6Nbu5Dh6FiRdGFk6CDN3P8AnHARnwj73HV81VFfEsYiQGNZ65gjUt5fVBYeVrDYoWqPoY",
  "key4": "5swtZMWYJVQCMay7oD2bTsqPpmZwhmXTdLa4dK9Zr78NzyF5Z2n288CEWNLiJkugGFQTwi5CSG6pRCYJWEoqHsdC",
  "key5": "2s9DaD3VDAsmHamRZUDFQ4Qkz3S9oR7iBieuAhyuAioSimP6KBSGCW8RYPKEKZyLsW3QiRcs57PDaSkUuJ6wsFXE",
  "key6": "5zCQEgFCKxgkCi6Z3HswWg3qEpiA9LKeJCUUoWBkVJAkRcsem3XGPYrMvxi7nWfJViBxig6MSS3H2LEDvnQqu8Wg",
  "key7": "39qQETVoTcjKGbukiMzhsmc8enrw5vsL6gD8bTVUmFieTM5DJdjL9vxhEHyxdDUJMKEbC61f68mEhiC95Q23yrmY",
  "key8": "5FB5uy6oax8RyVGvaMToANUYAL5RFqhQqPwz3gmeVBxYmbADg6b57GnU4oQYVg5JsmZDmG8uuwfhfH7rwumuXFVv",
  "key9": "3Fey6p2hmHtx2e6gCoBPrAznCWK3rof2osKDwwaD7rKJzFzxRVYL2PPatBNwqqkYbAiaQrhMUP7tR9vNBQVrMhwJ",
  "key10": "3ivaufmnAiwJxE4HY78cdYdtKew6BtUCZAR7ToVZqdUrWAupYeV1oCT3QvqfaGfnKLWvYfqVpHMqELyNcKJgY5hF",
  "key11": "2o6y23LqfK9XRnwXBdzsnCzH6CK9nM1vQThBPzdJvKbrqd76w31PgerDRD5cMbXM4m7GtCcabSibp1t4y1vWp2hT",
  "key12": "5sEuZwiqRw9wwtN3yZynq6FgST5KqYRh17HVurcdtXqP2KiSLPs8vDdHeEfMMwpUyuS4EFGQWXoZJmzx6udUAYxz",
  "key13": "21JYXpLSyf53bhEJoLfWG4eoBkJSN2YExWRSooUB15DSx2RkNLMzjGEKEE4DgSMiUCaUFLCSCLkgqEDb8cEcYoxe",
  "key14": "4NP8rPbkVG3oHkmnGGyJhNfnqRd2K4G56h3Pb4s7CCKVhRNN6YSRu8g4N2Kzcrojs4DMDciRvcFixfZQYgosRRUf",
  "key15": "5pTXW6qqV9YHKSgL32gqjrq3qSM5gwbCaPG2VVmU9ryQqvy8fTYkBwqhnjaPpPwmoQ42wTz3uMpQoVcRbbUQ2fyi",
  "key16": "2dZwAEe1JhAUazTtt1XZLbYdm2YwiaBfNuoioRfu5dZMiQHubooq8624RsPK6QYzmSx353oWbpfEg1WN6MUDdctH",
  "key17": "3CV8aWeYLzGsAnEsRD364eD4oNyB9SWWGC4NYkCS1ucrNrsSTnp3cMjmQTtZRkKFRPfbwNfGpvsQL1NVzv42x4cz",
  "key18": "63vgwSd61oXxzGi4LUxCBcR2SKExSiEfhuWUygen2aJhMn5jyjiPTxyUcWtAB6L7X65tYqNuvLXZKRksxv6ac1PC",
  "key19": "5BHrAKwHGGS9B4HDGNig99PpGtp4NPwNurr6oVwzVbwzigZSnuUWdP5eNTTntTrkKJbzaCVGmZHZuXtPd1bJnzx3",
  "key20": "5RZLeAcBEE2JfojaUCwVUqP7p9LnLpQCxHZA8j16MecrFysPmkxp8Z8AbpQyLaBwzBmHeycLmcL1zsbXGe71yTqk",
  "key21": "Hj2AySHsXCQUrb4R2BiWnAvgC5YTUctZrcGXdDfJbYpJvQXsn4DBMReG48Fg5duV2VduuVMzJXdS97qNyc5WHtG",
  "key22": "4HTvA2C3KWrNGbHJC1kguYPTLFigvC3iRBaHetzaNiLwr2U89Uvv9FkkwZbRreNEJfoVmfEbCUk4bCW3KxTNVC1z",
  "key23": "5tDvjRcKX4gLpzzq4kPzR3hCTtCVaaQVoPLj3TT8RagkVq3gqPis3Xv7mFakqvi5BfZVfZNzkq1urDvNqVKGRKr9",
  "key24": "5gYJn5QJF9yizbeHRtrVDpdBQgvPUUTU8KPwhxixyGTXKWp4gtZdvnSNFdMs4Ukra1XBWdeqFX6Vti4SctUmmdX6",
  "key25": "28B2QhJq7v2GTEAihFDHRkRyRtE263UCAMcN8JhQSST2Z7qWP4gs7TPpfeh8CUTqwnwR5Ys63mvBZ7ZAsGpGNevL",
  "key26": "B5jPxVQGmfMQL6ZbnzcWT2YmzWRQASvhfqgEjnbHWPiA9SbEiGEUhx32TXhhQhMHUzSceYRpxmePJirdk28GFvQ",
  "key27": "85whUrSVy4E8YAV4kosG3sJRcJNytyBtZ4KacsshSxRKk4GmhwkvuW3hsGfATC3AvAQ5ciAjeVqWJX9p7ktZ2YE",
  "key28": "3hM7fu1Sx9WWvy5gDZDagzcVrEgnnC8A99WWKQtRd7iTAQPnRTqqR9qHfr26np9Hg3p9gc6nqnEM4G9q9Ax3W5jB",
  "key29": "2PLaNPzmtCRsUKPnnVoLyBpRHxEAvDcvUk7cQUsH13MT1HJwGocepb4ZRTVo1GbrfsbT9M8GCAz9vdb9jKuFsqVb",
  "key30": "4DUP4kwEtcTwhGFH2hQKmTxp3BPgo1Mr8nYcoe3MBN8Yb9agc44wmq1Xx7biEAscjmZXEqhEoSVX6Jhaqs2joER2",
  "key31": "2daNSAcNeacbNxtqujbKr5ASKSoWxcVvrfCL1N7pfMDswXfepcA8vkCt1gdQuve1xGvybAZ29kw2PGihGFTqtNkC",
  "key32": "5suom1t9P1AtB6Nz9PiRGJs5A3x8Yp35Q5XMmgwFSeQUs7uk6BrzJkXSYDRL1Ue3JhAy9cFk7std36RStu1MQAKN",
  "key33": "2S8KkrCtWF3cnwYWeJBXF1MH9E2S3pinx7wa2tDnvmYLBLeKwmtec81gFcdyDkpViMkSHdzHCoLDwR2X9u4GGZC8",
  "key34": "3MU9zgiRPtxAxj13FkP1w8f5tLEE378sZxNYzNntYSWCmXhGQypQ4wCKfE2482nGzdS4Kw5p7PeVxaQBP9c8qEcp",
  "key35": "3EtYC1FjjaPw5PiU6gNo6PmaVUDCaMiAsy4RuZWowhXWG85cgW6m7KGxjhcmj65WDncQ3aHdVMcDpvVFPkmVuAL1",
  "key36": "BxbXaA5eNMy5SU9joKukFcFVostc9VaxEurqgdz7THN6GxoRpr5qie55Thj3wyLCZnwQcDg9fLf4K51icDhGXhV",
  "key37": "f9tWFMMwDkoZpmgo33ZguKQqYduqzNyUcadzF7AZQ7ZABEPGg1BhTFp5CdyKGPUuHszixBed7awfSDnF6oxiSBh",
  "key38": "2fHm5KTjXAZZbKF7TfpWdiDJjtSN4pkBnRoq7FuVkRcBNsCJcWuREiYtgKaFyCweZUuwS9vVTk7XqSjAkpBzG6ni",
  "key39": "2NzYzn9KTW781r5LqCJHuxcNeetQiqWMnSwCpwJ9aoqmpmYjjw4KBx27B9rtUsn1URGcCuJQqDTdAZz63ih6HYYb",
  "key40": "5VZcHWUogGoqUhteYRJQj6uVLaZVv3CFnw6m2kVQyPybDPKqJbY7nqvUUJwktjwD7nqkkyPdW5rAqzKNMMUEhqRT",
  "key41": "3hNXgmJUgBLLqmqK8iYhF4D5aae5YrSVpotzWC3Y7y2cswSLf56UbGddWLsmKSkavqa2PRmxrAcYADuhtNrNBq1E",
  "key42": "5irhqibqJ2fcLxMffYQHqeVnAj8hJ7swqrtn3u6HwAutD91LyXWQjEqu1RwVdeuNzwWGHJX5hEYoZ4DodxPcShKV"
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
