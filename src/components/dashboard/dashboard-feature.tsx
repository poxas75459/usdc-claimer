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
    "5rudqiXyjMfyWnDhh1iHVtFutunTNLZhuR3AcYQnJgWztGR5kVFhKsokMMU7oJKh9uyFRZzmiFBDdoKkAXq6XoxE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GfDgBv7p9KxzvzFZy8MoL2psS4Vo5W1TWW5a7hipu9UgsGLVEmqbQNmUdHejQ8PqfZDLZcmRJVCCTJ8vzuWpSs4",
  "key1": "2DkNex8r5DY68TpkKsGne4ZsxrnaLoPWiZFLToDRAVEBqNR2gZpJRfKGA4EUWqLg8B6NCsnMMjhSLhPCwqdgDZZQ",
  "key2": "23AZX1zomMxrqGyd6W3ACa4KSEcic7UwwUcETprdeubPfWGYZUTUzfcEFXFQpk9EqWDEfDjorfbSTCbTmFetkQ53",
  "key3": "4qnXDzSuiuA8QaRqYENpQn3UBKyv9LmnkxaVPHjD5mGrb9sPfDkvz2JE6YCzPbzFfvT7h8FQZ6RcsR37VLJHJzD4",
  "key4": "VDY3SG1mpZbBKJhipkm483tjPyFZ7qpNHXNJxYMSKJoy752y57ScMaaubzJdcePw5tTn2Buc5uwAv5urkbQWDmn",
  "key5": "21XJGgnPtxyfSbYfHsGBAuKHP7DaS8W7G3BJf5B3skU8nEWwtJqoecLm82seXQj92ABiqGuKdmFMF7Z1bqWpWnNn",
  "key6": "2csQuYRvqHB6Go9ArND1agWwThAQCnWjHBgFKUKQfAgbpaQzhTiBLSsfe76Nt6puHigqXFpWDbjWXDECgrt4uWVm",
  "key7": "3pPvdiMY4zkURWyUpaxCB4FSbJJD47PuSmXBdDikgLBkJmssWQzMDXWxQVFCj7AZGqrZjCM6CiTtLsD236F4kRXg",
  "key8": "3drbVhHvBHzJopHHeHcNcyRaqi4FDUbTn1uZ8yAaSgTY6AZoqsRkNrxeYmYKHRBWgDobQEW23nwbUVBdMVsrXm1n",
  "key9": "64DpMrb2Zy1vucysCjewgepvyvorzHnLYdi4V6d31xkRecpPMBieHSFqY38NvQsJTMiQanew75kiRZi5bMtFmF8x",
  "key10": "4WDgvSc4oKUA85GD8REctfvxyVKxMqmNUhYDvJCe4fLbsddmaa8VL6ji3sJv62Vczpf4MNpbAwWb22Jj5RvzDsu9",
  "key11": "2U2rrMLnDwzPtCAHgjEAzZRZ4gHW2YHs39VnZpzughfUWnzgM6ACuRLRP5wCHXzXPiWNHS9V8dWZNCjLwPZ8ucDi",
  "key12": "24humnoTscGscPLQBK3cUJPNYoKibG9BpsfGCTv91Sk4JoSywmnSkxPTeJJqZXPvMDqoLfgnpSAGYmApb32M4JVT",
  "key13": "3QDD4yBrcFcMDGAYjdChXqMtJXaDyThc5RK8d58Lt9QyzPDBX4Phc2EPJTheBrN9kpo4NfPJSaCCSbnV6cQLHwNZ",
  "key14": "3qJyM1UHpvHz2aauzcoHVWu3z46biXA5WwvE7oEpefWU5qJf4ayuBVa9A2krHYkQxZ9oD9bzrvVRudfc6PBVWpsC",
  "key15": "4dS1aRmz2v27kzzh7MXZjxgKqhmiqaJB5dt21xdvSFcHZBbuyMdWTNkjns1SEJYgXAY5EYc9pL3RZuZKcghXX4Pj",
  "key16": "2getyDY5q4ENyDq1qozfgU8eZz4eYrmK8fXQzWaSdAFfannbcVbVE5CQMaf9ZrEyJFhVYtLwxogEVDhMvzrq35jc",
  "key17": "35VGFqQNb1S8C6ZLtjeYtNQT4C6RStG5YDUaZjkVCeTEU1tiTUiKnx57kyyZsByauuPYE4r4pbCvP3q85aRKCcsT",
  "key18": "51Bkr1HgZyECRmiNLgMZ8QfEnNRsycNUdCDkJbm1VG9yrrjHAbgcxjcbYFfcASATnoeqFhgde8sfxptnyoArWK2L",
  "key19": "49e2HiF8G9VR9SPobeUXPQCvLzMUjqmHh7RjuJxpvPSMaNadagJX6rdaB5VdBXyEjWjAKASCnEfFBo3wDVJm9vZW",
  "key20": "5wgLeXLEbBcNmMzkbnKeCMa6FibC9JQPaKr4aBTwdsRvp9RgxmAB4og7PvxBLje3LDpuewgYtFkTwDFWkxMadysk",
  "key21": "26KLLjxhVRfxPjdEmZraVSaqYPtM1JQUfnr1eQkApzR3hZjcFGPFh4nL8NzJHEzj6uY1vdhL5WQmXodcdVZYSWws",
  "key22": "SPUtkRvCoHXiWA9rzKWsnhGBafX3FeJDmwkeDsLZbBd3VDdfd8EpAbp6KvXJqr6fhSnHCPEqj1cNVnHnX1Q3CEe",
  "key23": "2QzVM8YkEUqq4PivekAq732E1H722N95gmVWBeRWzgKpCchBSWMpyxAnRjpjgcTLRcVSwXxhmpKATe2ghHvmq7GE",
  "key24": "31nMDSnhVRyfatucDjHMrk44fQRzZeT6Hc4ski83sLo12vZnwFfHvgEsKDVdYgCy4tB8FpxNKMGRJck9xifYeLNX",
  "key25": "3F5nYuBuEHXwwd2gS47hN556ovkrnwoxoQX7no7f7wainNEc9P4yfGisSektHTEKbrcspfiZQ8En2k41kpoAiUNQ",
  "key26": "3LxMt8RH3NjQ7FQgGDY9GFVURujfh5mNe4ogzq8sjuqpKZirXVqrpYrVH4fWc1yhTaEioHk66yuvCrHSuh3yAYNh",
  "key27": "2Z8H4rtaqNDZ7UyrerdBCXhEARRnfSTdHwM3v7ybYbUWaxgYJreRGg3FpAjGmuyqED2tHKvcYxkdSBgUi236hkPo",
  "key28": "4ord61tLbToAVtd99wS8PP9qyZbfANSZbrXHirurzgRFpwzAR3HQrAnDoyZzeEwHRyJMZHPMVFuEEZVV12ZdAbgy",
  "key29": "5TEURpu4cWLMDjJTJcTKwT1kfTPSZd1pVwxawpZyo86snKTNXQrAoVSFKXv2noKpfjupzb5g5cU5McnL9UjbSia8",
  "key30": "3Q93yxbymhdH6vj5TUx8ZkoxQvYTuysZAcvRpcesrJabeEM6xWJ4MHvogixFyVVKmq27gY74Si1RL7wrLBsLP8Sf"
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
