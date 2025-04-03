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
    "5P2k6tyCyQLz8k3KLubmmRrAspDzXTudQ82xJWvJjmAwBhofLHZhu8AXawj39XbfoFkXHycpgdmiqrG7bxudrzFK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W658F1j8LndYGLGxsWNrBVsd34JAnwZ2Ga8jSe4eNS4eVw8SGf1T9hPqJybsia4zKfkPKhLfDXQcUTUuvgot1ZG",
  "key1": "FgzaCkjJaxuWr2gC78h5uihRJSYipF6cTaC3kKGtnHhHNackm4qcjCxZUokThPc19dCn7wuETwUxS8G3LPht3uZ",
  "key2": "29nLAtmbGgPoRLXcd57x4RvMEC3EjgJcWGp2T7nVEsfs1k1QXEiH5APr1mqQeBjTWiS6Nsf4T16ccVryMJgHCmA3",
  "key3": "37eQKeuSmNvJ6GP3sYAWwWHULN7DZyEKmBnBbX53TrKejSufmVyauSLhutEZfFQ6cL1xFdiZe22B9ia3eGvLyamu",
  "key4": "44WNGFf4ZqqHAAE57D1cXvACxHuszL7jWKenkwqGcJwNGxYP7RrDAtzqcoEPV8X7dsrYx3YoaeQunEgZd84bExme",
  "key5": "EiFQ2qYzwnHc2xb45u2KPdYW6jRiMjuNcUDFJkrsGyRejuGab6qAS8HsUhKP9zHnJpUNLc11iwEMVSno8GvnZv1",
  "key6": "4UgPSNeEH6jHcbrZnRCWCaF1MJJDLh3mZSgr4mM84RzN4265itZutCQRMzGPoWNWtGJbx2ByGhuuzh8k8MVBKgM1",
  "key7": "3wVrjRoxHhdvUVk15cGUdNZPKFSANc3rocYZcgc91AC9DyzBiVSYPyr5cMe9HnjsPdiTWzXkz4vYBGexpvXDCCRF",
  "key8": "2D9nLgQZGrKebzmfeNm9vjMSdPRJmALLDgHt6AmdA1ADjEMaLvCWNCkWMu1zcMB1KTwqxBDgrjFqSdsiq4yB9kVK",
  "key9": "3mHyVsR9AsD97CsZZckYVotQUsaqG5SGTs72PHwHoK9qiKobyMe4jZ3ZwjZXhZ1eEtFsbCsfAFHGCkq1cc5zQThU",
  "key10": "2YJhKDxvZvPxf4kW4tgFem6BUkNoGFFGhnFhGhy6XVtcmExJGWX5fgw8Q573uyMLTW8Fjr7inicR27rwmzJ4wWNB",
  "key11": "5XzAUqYy9AWbGA8FHDPLJ6tV8yErchi7J9bCatDSi5EZ1JpNecuhfRN3Dyr94H5NNv9a5z8rQSSuNZ9kh5kTjiPZ",
  "key12": "3s2sNq8fDe7BS48R6h1QVviarpM5P1LR86DCCAgrDS5sWw9THjPE98BGGUNeb1TkX4fbwKZJP5ZbekVhkBxsSezG",
  "key13": "5p2GLYRQuCjt2iBpmAPR4HpxU2kfi9sWtF5cm1pKdNasq4RF8fMwyCJkhavvpKnaMWSYmLuGJmucBjxXpQub5Ppx",
  "key14": "2NGSgMFWBcyiwZwgfFkJ4QmcJuBLHCbtkJjgXGbxAiNVvKWujfpggJh3VhD7KqpzvvrGi2McbHFvM8zovgTNqNCq",
  "key15": "CRcAJF8RLcS5fTkXav4xdQFmfyAW9uKqL7QLu9mwXo8jEhd7dTZFNWPNWW1cwtWmgSqjupjctLuvHz5r2oqBuW9",
  "key16": "3sP1csbWtgMupHGkixBjhnJXWb8u4T1vjrev3nNpM8DEqAEf2DFHijvJx39tRTSWp5E5hkTXF1QYCEDAY4oSLzLm",
  "key17": "5Unv1UBMhT8NAAEb9Y62L1xEi1cKLyuZKyAgacyV4QHcqsS4qNVvB5AL9yQB7D7LGwJ6Va2ePsxsxWRUS9UvwaEh",
  "key18": "2C5KHxFXLNxqKMUG9VUNiJc6WfJLrCg55AgvDCkYJXs59dups58V4UoL3ipo8okii2wB7LxXept7pbiNuFxWfdYG",
  "key19": "2ifw8MZLGRUJ59fjXVjxeHDr3YK5z9vL7hNZzpUmpE7DewMGpPoTP8otfzHzyTscPmVzsrop95sqKNAgyusdFveS",
  "key20": "4r1qyx7AHbfT7LNjE3YGR9knLhiGZEcPR1aWTLpNjno7FsZ6YBnoFZXJiFb4f43Zg9LFYTipd2JFwicn4ELAU5gj",
  "key21": "5262dYWCrjyAHpXTrr8pChwZK5QQ7iW5zYxX22d4xD3jk827gaV5moifrgoxU9rSQb6E5rKkWy47adWVtf8EoRTn",
  "key22": "4M1gKTW4H7KhhnpqZTNJj7srMZx24Tu1A7ZT9sUMnnucutWBqaWaX91TKUFfCadSyB2drvpGBS1o91tqSGpudzpX",
  "key23": "B2joQ1riYTojTAjVj54C6VCfmEVjpVXh8ZZhDHYY1UDExsze92kxDzEsJ7DsTzRpFvDjiUMXFJRpcymgWKR8q8a",
  "key24": "53ZzUMJu3yZWW1fWSsVPbKQboufihojrmY8jFjSjjVoddBLUFZB1VkzmUAyToQmhNAn9eWWtaUS1YQQVnA5xVxsz",
  "key25": "5YVxHK9mg6NNg7gvCK7THoYaUjrdpG3U1aXsU6fCM6gBQkhwhZkkufXiL2x9j2HFQmnDGdt5GhFKJqCaLC96Btth",
  "key26": "27my2HkkpFUtas8SwVVH5yxQJAnHsRNRAu77PqcwxJYG8bN6eAQXGH6qJVgSnPqybjeZB8pCpw9KtYVNAQXDxETG",
  "key27": "2mXTDXW2GHapB82FiNn2xpaXNRwNtkrMivH9gCgzsrST18KuPAVhKoeW4qEn5oag9S4PXtRfz9TmjmfKKv9youdy",
  "key28": "2nzDRYpxWy28haE2dZ8YazfnhWLf4J85hhvBgTYcFZrk57myufbpzsaNzxqomRGFptkTkr8odXLArV6UaySiUg7F",
  "key29": "f6t5qYYc8zdV5tjcvuWFAczLFsx2JoqHbSFscwkHqdBP7jUJGPyvujSJeTh7zRaRGGZYaB7RPuhicBSbPRWJ5tZ",
  "key30": "61ESTnG6vBrMA8LJrija3rGVT1gWaMJ6uJpKJ9EzqFYhAEG42x7AugDkpfuUPLS2HoCKPSrYBn7uehwacUFfJZVr",
  "key31": "zDpb9DPa3BpBxKsQsKkGQLTEToFexq9qLhhKFsgco1bcWC2FAX9x1eVpEBTckKWoAMrVz4v54FbfchKmMseipWE",
  "key32": "4jGUnXoa48RrsDnVdnJAqPAZCEQ88xSna1xrfhJkmnomsVtb41Ru1bb6SLuwgb37qL156Yey7skf5cKdpg7ra4R4",
  "key33": "2hCN36HxGtPeNemeJnYJoq6ZHhwEQy24SQBGxdeJikiNoRg4jYV2p5F1jZLxCfmQdDYHkWY5vxsM44Dx6NiiDab"
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
