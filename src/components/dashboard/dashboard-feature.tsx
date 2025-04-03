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
    "3CnGCstbf4k1fNf4QNqnhqdeJKYCpzjFteVXYQUUxXBAj3fynbTP3UdQn54ckWmhY1moMMwkPs8325MFqcsr5rAq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MPQZH9iNiUErWH8CEb7pMN7CbaSfutoYSJF7B1upZNxFzfuCUP3kDSAf7hAjKBLsZsFqqsNA2ceEp1Wje6umY7t",
  "key1": "2u4Snw9RgJ4uTTnnCiVeJSVDgocn5ei7SknvK27EmQEEAXBdnAw7vZQd7DZFNZz3ZkRg6E2gabzGggLvgVp9Z7mz",
  "key2": "5y3ZzNM1rL7nvjJD65Hi9YXRR3CZrKLCwMPsBuAEYZoALGnKdrxzDoQgHRooo5cFjzGXjrrmqTp1BWbHPiyGpA2G",
  "key3": "2oDxE3928J3Q8ALqE6BB3kqXnDVevcCNbxrvnn4XamhG6diFtopTtH6VfpMbxLuBp5x7M1ivn5nqVR87DPk5Zep4",
  "key4": "4aXEwr4tQtLrwTrD3nJuLx2N4GJyp6umGrGFG9shREtEm5GeHYLcak6kerGebnv7SDRMsB64pg2a5BfAP6inhzVV",
  "key5": "3WxL2BMoM8MVf6akcjFYXz97F7GCTbpdqQtQZzhK2EHDcE8YY8qbt1MZFLGEkjoRRLcPCDN6E7PT66bKavrmAxQN",
  "key6": "4R1XzqkzE7Y4Uw9DvADERNnQGGF7eam85C5afdWrmvYgHZefBEEhY2WxhU9ssxgVAt4XYQmNTNGT6S7zZqjTGSqr",
  "key7": "5bUuBwD2WjrJPB2cvetk7Y7sjsDtVGnS3qa7Yem1CS4zptSFqseqHugStfBDS4fgGk4yBnTSwKtD6qyfX7151ido",
  "key8": "618r2fmnYvmptjEDCVRxDu6qoDLPScdV4bJm1rTsSgAPXE7YbT9mt6533gHhgfbf9FLcpAhGrEREfMmssLZfG3uP",
  "key9": "4wqP2MRF8JQ7nTupUrMhJ1UiKeVnmmx7KFxu7frFY3hKzY6Ec6rKb6Hg7sDDTYHUVrg1TazwvqjfJXX9upDNmJVc",
  "key10": "2gcLCkJvGjEKvcH6GUNpvfs9vVPKxLmuXtWH8rGYuhAbpaqdd2Hr9igr7u8A9sE4mPVYoBXah8XtWuo85ZibzZXn",
  "key11": "4oxoWGWfoLTD49XptuTkeakV6d83W2vsioLfJD1P1bQUvBWNnPtb3bXC8bJdwg4qpPCfSrfT2G9cUhLbsui89Qo1",
  "key12": "3kKoZsazyUZJXvGnx6hxFXdep5zyFrgmy4kKzGscpyGitFFHSZToWv7RuTuRFr68piUi37qSTdSYesfsg6dqGpTZ",
  "key13": "5bmgZ79LGXybBkAGRirKrJzNMdYDyRCLTF8XxLbvsYxGsabD8FJVRf7XHFCBtqsM3cz9qGNpy64EoXw7BacoQpP2",
  "key14": "3xLhUKeuJDFrJY924x83e388kNLziweL5DQ77PQmLfuLisTRrSBcFu7q4gCPJr2yhTNqd9ySXGwRkyEHa4BM9Q9r",
  "key15": "63qoTrQkuEM7iMgLkHoCXoChbrxFteFYGL24Ehd2p9g2V8Crgz9h8K75N5HvEScYjtaGMfh6eZqciwkFVYsSFvda",
  "key16": "2HosyyPDuKSDZ5zNpcCr2PEweVPvHFMq28TUrp5cuZHcPzQ1cS6aQNSNxNrFje7RpStvofNtfdchpcPzJB5pKRPW",
  "key17": "4UE967HFQ2wZNLGLGyHwf4tgCAxFiS1jnqZQ8v6yXbHGLMf9gVSJXWNbdMyD48oRTecuLWXBYxSBwAbPwue1wvzY",
  "key18": "2TgE3MmQcN8JkEtXm197gStivrQw2eCN5a4wCPMiTK6ietHgf9XXXyj88CMmK9aBurMPAHM1NDxxw4FmDnkkfiBh",
  "key19": "4hjpyWmrmdeoJd1VnNYUiVhTpGQpAmra5BZv2VQk9HzbQoM7oU64gHxR2Ld4ypWCHeyyn7mFqAq1Bu1qjMhYgJmG",
  "key20": "5bwu3NJsGT4SfYxX3PUtUk7VnGpSTNiUL75tyzS9E8u78X9BRcXmapQPMrGqjf4Y3KxzariZviz9VWF9jKfyQB98",
  "key21": "4HzpJ27jGpL2Hd6TUZXicBP1krT9qFk6THZCFddqZnpwd51RmML2Fyu3tQTfNa2BHnsbkxHMk2kVVu1tbPSMuUix",
  "key22": "w5g9PmDU4NUMm7txZ8ZSKGGJsYj3CrAnJSW7WgfUAeJCVHhyijsnQja4e78HSfMNZLZij5jiavnWiqkFkp9GE99",
  "key23": "9CbBmr3DqcKps8nMCwWcmYNepYEEJaJRP8hPqWApsG4aJ6aTqbyTkq7opftGmbWs5evaoKkiBpQNX3VJn3HgraM",
  "key24": "9FPJ2kmucovkiiskLrmfdTtkonN91JN78179EooYbwHGCNeGQAU4ua31iz4n4JW9gUB49pCiwCzG3muykdNcvUJ",
  "key25": "586greyecnkXTvDam34rkRBbMLqsuwcQJLm6mWQfaGZKc1jSMadtHaLYDRuvxHHv3Ea4yWfiTKKfqUEj1hDgiShZ",
  "key26": "28bmwxzW5w6dBt2PMMLJkcqvZjjrCevFZcm1j2wmvJeBikQPeafUAQMRT1hohagQ1DQGTB4gEUrWNkrrKz3BFMPA",
  "key27": "4GEWApEaHDUHWJsLcWFaaAw5MgJd7QnvLjNyckrUhT4qHZMQroaxAcBCBRSiAu3WkTAKMAzxJijGXjigKJkYKJc8",
  "key28": "2ZSUNsTFCHuuvtoarJesKLRnHeg9P6TJhynyR9KkeRTZH7EBkjqxPFpSQ6b73uYmTEcsojBFPBTrwPKp65PYmh5R",
  "key29": "wNdzKX9ZKUyCc36N2pguWJi9aQfE2KGBV2ShkhJWexZNRxjpbWrpoMhhRKqc5ZrGPjvjNmMxW9sBHyh4PEzWpk6",
  "key30": "4JDYckS4G2C2AjBpLvNCKVQXunVyYK7fphoQiTJ5Qju5DiHGTwmi6ZhPFpwmqMH3g2D2xfvvS1oRFKszZsCLN8vD",
  "key31": "3Gfy15yKgdmSCCzhVxce12uKFRbQuyZnohuM3spM1Y9JyzwCY8yHNGvAXcWfZHYdAS8rgwzDg2N8h6W3Nvnqpaw7",
  "key32": "2pJirwgj3A7YQwSwFCNPkLTW9nvXhyuNo4cRxQJUsMJi8KAFq6HvxNKhrmkQXwgVEwc7HyVJDCVkLS1J6HwQcUHu",
  "key33": "3HsvCMf9iomezoh1aDo4aG7LD4cE5hyeuejvN2LBJmb2wCsWEDtr5siukjHp7VsywjSWaji3iwxSfp7X12emUVv1",
  "key34": "3sYyp2kyvgEbouvJFq5RdWL85g9DfTXoM2274kMVdsB7s78jdn2SXT2VYhnqxnqAp9FWKxJQavqZmu9B9HEyxLYg",
  "key35": "4CR3wPet3XzZFPpMmsC34n4gZfGX29s79cJ5AtQvJcBWubhWQykDvAVUdftUAzbXwTKXM3E8KnFaS8cW8zByz7ju"
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
