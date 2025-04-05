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
    "3hZpGEyVehXKCD3m7gU7jtotpKjJsVafZfaE37sfUW8vFdaf7EKjDdQ3tZtveuoQ7cr2Q4mGp3NoLER9kHLNNHyW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y376gdk3Armbf2EFjxZCDJ2PmfA8jDPu6RGo8JFm9QQWZ487UBuepnoYbUECqW6zmbLYXzLPKAz1Cr8YwAdYUpX",
  "key1": "MV87bJQ2rqbKwDHUeqyy1tGPHBC9BwnT6fYzwD5q4BCAbod12kGkcUdCLp8WjdE24JNELW156dNpyKq6QR7fyXW",
  "key2": "4RZ8CPBSH8JdV4qbG9hFWeHk8wEuZWxfSQHrUFoou3AyXxQbYB19KZPnR5Evo7FmGM6ed2sjYBp1exMNunBZ81Pp",
  "key3": "3E9XS63odVNv7C7ZuiafzGwjNGNShirJKXvJ9MrJrGnHGqBkewy61cdQ3TEahoxafPd2NccKrGdATVCZjuMAtTzj",
  "key4": "3CKcTGsxYUjVoy6yXCn6s3UCh3i9wi2rJ9x49ZJ1e4pASQKPP13vvVRLEw9p3iM8K5SzeiRd83xtBVX7WaEy5SVs",
  "key5": "2VsV36jEypsXWD2EKstyRPRak7nWLnnD8ZnXJQaiWVjJ47Wj7icXeejuz3DQpvDzBE1iyyZjZGazyySMBbCgKrdg",
  "key6": "62H68h2cyLsUnR2yGmofbVQy4AgMjZop1t6MDypRKT39RZ6MrWoGuDxXnCZSFshDZxyM4WUMkgq2KTfBNqN2GyM9",
  "key7": "5wfooGwLw5kogib6VuaahQBoxptCaiNP1w8gRLkCcqfncEhzqXAQNj8v1vd4fTTEWasiD7HFrYU9mxLx81uJqyav",
  "key8": "3SjNubLgW32syTURxw5pNoAkNkSrRX6YHhQQMczzSG3wB1GbGwhio3ApazMFEpaPZGCEFVVnUJxnTAi3dFNumZwz",
  "key9": "21HKGcY6iHeCvQyJEdJq3D6xaoFuLSwUh8iHZ9coVMB3JdvkM8wLkBnBDJWjMTnD31uHajo9PXaoLcH9893W4rSv",
  "key10": "GaRkqfD4BQzvnua7U42sD3noA73FW6sbnyF4LhVwELjUCBH28RxKgDcSfxxfnoJH7N3tjjLL4Q2E1i5SNPUne2h",
  "key11": "tK9DhbnznfynmJZMaQ9d1BpiZzMYf9VDjnJfdB7d9rjr6LXr9KJYo4sNfdKFZ6yUftbfe35DyrNNvZYygWPKkMw",
  "key12": "4E8pqt6V4NCvx1wiMm3V96RqHRJbYGC1jc2ypsCKHLGTnkqtwAAWHig1sGqdDiwh8W4tqhMYiSLjkKshpFZAgaHA",
  "key13": "4xq7gP2Bf5JREqraF8riBLyN1GPZUCnHQ7taG6egHed1dAkNViNCtQbZKTbjsKNiPD2rqzpDr1gZmS5u6Pdjnrhg",
  "key14": "5dReQjSDs2bccRedbLkDbUXkrg6FXjF1Tv3cG889KankkvM9QRaqaTdGLfq7iu7c578cLmWDroaoPTWg2md6Zov7",
  "key15": "4cBbtHk95Vd38u7fhpxYnzeXSHxvHwBDMxV1RT9d1wJgccGR6aW6X3EEJDuj8VJocQg6VqcD8ZKwHgFu2ZoqzZC4",
  "key16": "22i9hNgm4Bn27wS4ntpqSQGpJZ3Uy2pgd1ZNxqzXKG4uX7ndfL54rz5nyTD11np7FjuytZ96YM3kZWrZJajFcX56",
  "key17": "ZXS5M6qEDLso8dpoRfpExgNLp9jgmv6PbU7yrptfxcJem29cdogaqWmXCkAetZtmmRuFAiN3Ws5d4PoNH5kCrry",
  "key18": "udpMb3KSz2Bdsi7KCtc3QLoqoi6SUK68uuWJo9Vg4xWXjVSVyUBGamnR2vYCe67TqNxcUUDqsw6MtuLNgtDvMEp",
  "key19": "2Z31tjdhGpGqBac6kRghBpSo3LUa2VvVemMD8PwsU93BeQNaXQE4hLo8o8zWqnWzqJ5sd3AD2T2HMjobcvh2JUWb",
  "key20": "36kLEY5zPyN1wgZu73QNgHvMye7XDd9CATjp5XJkiTr22pB69HupTW2ANbwrmXPS2CoT3odbM3gcbBaPrcMNeKuF",
  "key21": "2V3XBky4r93GC6FfA9tWymQkR6ZZLZEGhFk7Ab2bdf56cSk4RQSZJwmDnCjgEawVQ8nUjgUNQ153hRYogGjjHWJo",
  "key22": "qf9fo3W5uwbAZnn7ArH8V9BvJZfYiyRktVGCteoimdZiJpPHuSbLEvdQdggyatjdadX4A9VCzovYzRqjQvuJx69",
  "key23": "3vyBZUaaNR4vPmvQzc4iLcPuTRzTHcYqNZkeQ64H3F5xHYjqyccBPmsuvfB1thskSvSk5BSztyzo29jbE9URfPRs",
  "key24": "2kyL7z1umKmAi4qoQ38J7tgbSABygqKmrbU29yBbyEapU9qXYeuB4YoxKRhVf5DerRoy5cotxyivUDa8gYW5MDPn",
  "key25": "4s3pd9jd4twpuCZwqaLX2eTGWh49Qy1oPwpiYhPhziieQUSqUXHwqy3U1wZoGBj3f3CmrSicpQocW2gAbqKEP5eM",
  "key26": "2Cfzb5ij3pUopu8EvhE9L9VRHHm9U8Dreesi4EfpNydt1xKqasLSArbpHJ9JkqSLBFGJfBhhhbdvzjvqDqQ8y69J",
  "key27": "4cD6MQP97Q7z4iowEz1zRsyUMKuy7uJo4owLYkLNcMRQQzGLnSSLpCzERqXTjosYM6Ne6HNVv9UYzL5sfaeRvq5q"
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
