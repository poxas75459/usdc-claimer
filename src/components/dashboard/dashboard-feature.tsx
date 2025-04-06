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
    "eFAsbSWxQodbLWPP2gsBV3YWB4MuRbbijVzd91kbDpsRZHmJKMy83ZhxBRv5UkcrTpswX9eqPwnGUv9HdcHxn5N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jnFQP7TZmziunNqdJe9PquYcW2Cm7jJgWg76Y5xTf8dXtWAKbzPhwEbJYxkhBKr9NnLmvUe8HFrscAPf3imq61G",
  "key1": "59acwTGeUxW8NsD5ffexWdBFxZua7T13PQcLZioWg3xuXZBpUnWq4rdw9gH9rs2iqcQ5bWnTEcei9MZXMC6U3zN5",
  "key2": "2VthP5tsMiiLkzUv4XKsAcvYDpdXEQTRft9HBaPYzrAjLsqhXUtihv9twwF1RjGHTjEPQ64H4NL6XYBcmvvrtH8H",
  "key3": "tP6W5pwp8oLRpYNBEW9afJdtWKDwA2wwWpKR9mdWg8pXE5aeRUyz3W3H1dwNm5MFMbvK9itHvi5mviWHjh4zLMx",
  "key4": "32J5wMQ4j3kcX6Nc6kyTsWkSoEDS4seVx7Ujre9JP9osHhsCfLbepM75yvTBHg2wWcBGooM8SauBdHseG1LPm2jN",
  "key5": "SFNMP3oPK8fJ4gN3jqXJ9Si6qADykGnsvPPpYcVBBMFhUHa7iSyM5WWBRhcEM5QAySReeoRGaz93zvrf4ue1aNz",
  "key6": "4rrMXFxMuvQBefoad4qVYaTtQ7cR2cJtjNMSc4hcAbsy1ipY7wyHg9nq9xZDFUUpff7hLtW7hxSe1DvmFuwjFcVA",
  "key7": "54HZdXhGWPGn896RqT1g9w8TpydKo4nG1hcitSourUjwAujLoCuWwgUqpRoSDMJ3sxCuBiUzLVitVc37MfuZZWkH",
  "key8": "4oQFKcta2ywSPi4Bx2BaZhNB33XYgqH6WkkQpkNdLEMHu82adSZ8EkRCzq5mcGdVk5wb9d23QSRwYzMNqPYxYH22",
  "key9": "24gJPqC1756k7w47TGq2qZw4G2gomq9jcGW5YoyT54G4F1rp2VDa2u8xGe7GLTkpBEqqYKGUosDzgvss7fd2fWYB",
  "key10": "wq2X4BLewocvzv4EDvdyYbmZbAR8M66t6wsedHvXoxnE9XTFpY8LtnrkbDoZDvhBJiz5G6UMJG4fX5ZzEPygcm9",
  "key11": "4uFqTAxz3gUSMpJMLC6NKSBjYeSuNBpzPV1JJZFjoEBRkSkk3S3z8PBjyZom5rMujzEW8jbqzWiVY1xjnA1jURZF",
  "key12": "3Tq8uvMjdGUyscPTGaGnEsMHEP3M7c5xVtBhNkYLs5swGWrj3Rqm6RinDVNyn7FFJsebCuyHD7NSJgDcwGTW9vR6",
  "key13": "JFc8UB39gokeGg6Lkpc2yNjR4GKDNarQynum4n3Ya6PXHK98GEbTUd4nmVRWXXPuMTe6NkqZpwjSLxE4Gf7VvrT",
  "key14": "5y6Bg8HdLKnpY4rZ8EroXfcpeKcHsn2YvJ6NnFBMey6WhGjmqLQDatWwJwnLhyd9A1DKsTSpKi1kmfsSoQZMFW21",
  "key15": "zPKvAKcdNH8vBH4cHVaVYdcktjAzUx79xSxZRiYP8yLX6uEjTy8XC8mKDZVqgCEBAp1ASpUNysgymkgoSwao7m7",
  "key16": "45VAZMA31CQ5PJftbAtF6a5N5inAM1X2tmVjgmCynT6R13Ao3TJ8ZSWwHuqvYfWGap15mzh249NjG9Q5eohkyt8T",
  "key17": "4zK9GD5Nv7Fa464HCw5wNU5zHo3yzfAfrNUw61sGPQkRgZBZ9Ejhb1SoJKqKAXJELuptYX4wcx9CAGE8ULPUALkk",
  "key18": "2TttoXEuLBRfBLWRs3zuUL4boqTswrCzQZByhAW3W9roPSsHijsiWZuGxNRYg8eKM4rKajFF4QSaT1ezMM9q885Z",
  "key19": "5tPqYJEt7WqWDYWgQ3SqaxPDoeZ9TCsKsLpWZL5mK9GpT6w4y8gfGQzJnLsAWTgYTLX5hqYuDCcfK4PvVvq3sPsf",
  "key20": "3169smg1EcyPQ4ZEi6GWjSKdjkpQBYRgZ5JgnhAGS9Hat5VzQUouvuBEPM1SoGPzdzbKpLeHjgXUvXKSEMt3z1Ha",
  "key21": "oZYM4Uy9BGSLnTaaNX4jDpsfRNXbXgSs7zdVk1m7cy5Esa11bJirSkqs4BZrDV3bzexeMGF9kPV478sYCTLbjFZ",
  "key22": "3AScFBrT9qw4RdqZ5A6dmJfw5zQN34pWQ75oqd61fb6ZCdPdG3irrnTTR6UvdSa18VZoJEoAG6qHadVw281SPYWy",
  "key23": "5w1P34rYYnguqGkqEm6AMASbDTpukvoiuikoAKxAK4L5EqBmrB1Rvwrd4JsTpNbiJGchVPNPcPn7RE73nZFRkwJF",
  "key24": "3VfjwKyptcqi6abWYaousEVyJ8z1coxm4Z8o4SHKiVA7Sd1GKgKio8Rjnje6xGFxZsppQ9eBhagp5Mb1HKtoBvhC"
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
