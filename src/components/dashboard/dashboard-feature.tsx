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
    "4ghDviEJX5UWiyX7P6SRocAZCZPgByXL9dzNT25jAbPZPWHM2AuUz3RJx5JMhqbQcuLomwp9EHWgBxJAd6xCr3zh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DziESfqsgkaVAox8yE1Aen8c2B3KhaAcb4D84qL5p9H8Dwz1RizN5GoEvQGuvYA41X3AcdfsR8NE1YTVXdPMWAh",
  "key1": "45sWvwhwWzShACYxrPhcNjJgQM64eSpjAvH7iKAvLz6737zEFu9C5cv96MGJ75zGuQPqvBHQNVNEYawBFbi3dwKg",
  "key2": "5yfA5CUv8ewdDbaJnRHQXEXjDdqa76knMGrdj8urQPcHrxgC3pQJ4G1WatwewW6fGzXvRG2eJgKz81qfUSDSm6kM",
  "key3": "xjpoPaxibZ2GjWm3aAm3xV9qN7ZEJJutgfBR5KgNbv5qQMNWzyKWLptYP5Ufs8PBm3XRs86Q45pLSL1TUNXBTD9",
  "key4": "4gUEfq2qJWxrYUCoSRUrxvYRdhv8pw8tnppH1gw8DQp6XxFrKoFMYSj53mzBJnHAZ9iXb1C1St8JvFWXR5uZrte1",
  "key5": "34swqoHoiS5n4fkGuNzEwCTpuUC85UQwcNZMMaW2mvkHXiAxwKeB57uU1wJ3i818xuMFfLR72W12U5Jc6GLQ98Rn",
  "key6": "2rSePGq2ty3QLYYKXHUR2k9hJLrKpn8BabXXwQwiSp7ZaWJ7TipqkkBSXGcYpY7GMCZ1XNbD6tPUyAHTvuXQo1Vh",
  "key7": "JvXQNovLfKpG5H48pq7v57wbZK91DHKMcCuZ9Ty2FstbhNMoYpXq1M7rjg9zUTjc8drWCpunAWiTd7Seq7nkEnq",
  "key8": "6SzDvE3VM3vV6pajWnk5LRiX3nRSAK8Yc8PJNmTeHXiYX6hjBU54UmURNvcP68PGkrLsEeghQLcfpkaYzsFdY99",
  "key9": "5HPAVbuLQzBqugFqv8kvCn1rzXexMusji7zP9tr1ZbAc1FyFNHGehYve6YiFxFedWyDmaC1gobUT8mSqVQucvShG",
  "key10": "2qnqbdmP7zEE8ynFLwxdzQGDjQD6XQVhfMftkSVn9qwawvmCtVvZXfuzys6xZCuuQKWCWwJQYefVbTVBBViZgvFh",
  "key11": "3sqyga3DmZh6Rani9SWU9ZKecoamP1x8Np5opxGpGWS5yBYUjWjEGJZFBwnAHuVLQMANmCY7KSsKqZrkC1zETzcQ",
  "key12": "2hf3CoVaDPr1o4Ni5YqBh9JBpyVejPF8QVFEPDhuTqN9EvWNZrYFBzucWyLn6o1DRYuAfi1tE5KkknLwS45m9D64",
  "key13": "55E4Jxf6m1qomSygEuiCrHKDGDF2erM8JKdFE5k6k4SYNWSesHTyYk4s34FP5ahF5T1JcsR2mdEVBiU85DQ8kF9U",
  "key14": "3mo67GmNutzde2BS8JarJB6A8ixAqitbTs7TL9i3EbQgQV5Ea4G12gsvsLcM2WA4hydWqhm1Tqtw3vGG3Bngq96e",
  "key15": "4v9bRBP2nnKCT7AhUnbgVqzoSGbsBMoGQC6N565NiE9gnDERk2Y5sLcWvWNL2ZJdokLPMeQvhhae3uqi6UDtW5eE",
  "key16": "2WBnyqcFY4XyZs4DyUGNQEpY9xmQYTJS41AVsRMoAV5udfX9ff6b64ZMVCxaAAb8cns645rVTutkBkezAWa8dJY5",
  "key17": "2Z8G2teWQ3YGKLneVigaj2XGjpgCYY48VWgM7yfunARYEpj5Ya1nUvuLi6kK8Q2j6fXqWmzN92nAN4kWK4Bvey4T",
  "key18": "BRCw9gvY67USyixNHSm8XhpypYTjyY3ccHBPUFSD9PXngeKbuGHWtBGCGrU187brV1TpZBEhfpCfvRGmw9jvzGx",
  "key19": "917QWVSH2yXTMHFSMbmRbYk4azec4mLrTQxPxG4DPeSeuLAcJunoRjXLt3xPyamKhKRcMaTGaEQCZqhcFTZfkjh",
  "key20": "i5DJWkzTRU2R6Whg4Tncn3KyCKdERMkyqPfS2GPz6yUsi3YYtcDuF2f4cVfDzZef8cV922jhW8YpZ2dTxrsYNth",
  "key21": "5XbDR5sBf8g1tGyyDqHHLPdtwh8bup3gzb1HsASRtoJ7FEEYqgsYmSCxCRXes1NUfJ6ejfaGEHCNrET2t2pcNBX1",
  "key22": "5CDR9WeS5qpS8t4kPfy3q9Kge5ENE6dY8xRKZAUgKWFS4CsY7gPk27NiBXrNddafcQ7CavkVHXBx5Af6PDy77QE2",
  "key23": "4xhhCQkJfH5kgb8p89br1DKhxPaH298cbmFWrMeve3ZV6NvFtLu4x3Z6SrBm8gu8pA6rbV4ugbmSLeX9qs54LKzv",
  "key24": "4WgZ5tF8LGuggMWq2xRnsn6we4yHpe6h5fMqMio8Q8TQoicYqnuAdRCJuScuqVpVZaZQ4vFeX5FR4MU12AxqCsGE",
  "key25": "4SZtQSuBhokDpRURZoZB46s23FKHAqX3WJrVyxNvM538bqCsXakr1jNJC25FK1pVJ8SsCtC4GPCci7TcraZqgKEh"
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
