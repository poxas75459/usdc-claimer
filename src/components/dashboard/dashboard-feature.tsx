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
    "441eubJKgK8AGPyUoJvoczUG4HPqiYApaHvAdjkazHp6Ud9Wm2ncFeMGJdmemkw92PRSPLE5gHT6LibRkupa94W6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B4CBHq3siynu7AcckGDWHzdg55mM551kBUszngLECrdATDShVxuVnap7DknDESVpGQbX9ZtF9XztJSZKi6dvxZh",
  "key1": "3QQYo9Pa8LVPeVtoL2u6kbm2jgtvq4JPZiURokHMLbnDLqJV1pQEwiRUVSnGfYNrTARgFrxZZzLCejmEcmnoLQuP",
  "key2": "5znYAF1G5xUUFC6gJKfu6AUQHvZXvthBeGqApEY7qLoELvgPEAmnD2R7nrdrapJwibtjNqZDCTKZgvtchmPCdk2B",
  "key3": "3AAuFYha32gxNF1VNFtQ9epzHYfdQgEhHK51tKZgsyDyrJsKd9YrCqpDgZHoMw3N1Ux27rUkveVQY7VS2Xqx2u6D",
  "key4": "4kF6BQRJnJkjaxwtrK8TkXwjsMK4QCoZwhDHBKwxsndkyiJTWMgfF6iAU4fEHYNyLHBRZiXPwWSx7cn3dKghADFj",
  "key5": "5aNTzUwKJZg7ihc1N9K2PJt5TP96rQ8ipaKPuWYFavwhPaHoPvhzfp8HcNjkUqjLwCxaMQMFq6cmaegCQgbXkR61",
  "key6": "4em4whA1rg18cVqJssJPnE3EJnatHkbuogU5UyC3YgCEFivgcCexMdobBKoKDbwjfepeZNLeCyxN1gvzmrJr7FPi",
  "key7": "2DibyhqdWLwZbjfUdx5GGVEFnHTig5X56qVWSnArVJHPbEpngDj8Y6ke3nsr25p57AiiKbWVdfUuPxt8fkPoUSp6",
  "key8": "5LjLq7YSb8AZZFHVT4psVgb7taXVd2VoDsz7ZnoQJ52zSCzZUMLJ9T2hbSTJGy5oaDH6ajSEmMZBC9w8RBD2Cchf",
  "key9": "35yUKZrnyFF7ihMuXbcmA5bGx2gUUsEiLHkY5aKjBFBzc64gpcffJatjZ2r1cW1bVR51JokqpMHUYfiKrj3DR2Fx",
  "key10": "snmpxneED6f3XJSWRyjS1zSCfdKreqnTC88i5ifXPEcKNLtbrWPWjBHsKr6gJLXSmJeCE2dXqH1YVinvZZa3rnr",
  "key11": "23mKJjDTvh1y89HLmfTDyQ7f9DoxhgXg6T4cRasibXx27VAvmyD4Rwvm23fYtPRkvx1BWWSsPxRMFVZqwCp4yTB4",
  "key12": "547rhA4fSgZZ2upPpXkKmhetDFDjWNbstsqVoNSRri8Me4p3dqUqCUYdrF47M3NfwMp26yC2SW5hQ3WMgWWkDhmj",
  "key13": "hiN72Vr5PtKu3wF3reno8kCKozUA1tGtghBDNmhfbo24V3wRu2RKe1wqPmTfzmfhCwEXG9LSMmBYwRqh5EndoEL",
  "key14": "57MZ8NbMayzDG974EVLXSGoZJ3WPCV8NNVj8poJnNtAzmEhjAvC8mCXsnynu5dpmUCSenXhRbJskVS1UfKPAfPuK",
  "key15": "5JEVhWkCnsxsZ6Lthqn41KgUKa7cgeTeQjJeRpkRJfEWxhtxiemp4V3dyJdx5HpuUSagWSXqXtoTYaxK34qzFNkq",
  "key16": "pp8mPQtKWXL6TqdD4e7kd3PZha2jJn6JKQLfVCVG3J5V1xCtU4L97jai1gBQ9MnADDyv4VGafyK1JVJ98tYSEJb",
  "key17": "fhUen5RFmAFUCAvPiqDYAGTQMG4vrmdN7wJrL7bQcH57iLisvpBWVMTeHdtv4S2mxzkFtZ8GqGBMVQNEnc5CGjC",
  "key18": "4ds4NrxC4xnTz1efm9xTtxAaWfHmpnT28qf29jP7k2GrcmNGGUkFhUGNYD8FX4rhrknHBu66TBNMGqwM2xPRkdv9",
  "key19": "mdiEpbXUhwam8n83yYEnahmMckrTAJM658eRowxLEp11rQgzSZxkTvtZMk6Bd5jcyuzfyVwek19akRwBpzhgRZw",
  "key20": "2tNpRotnqQLf9M7t9ssLCSg5jVJmdZiaCwDDz4BRTRAZouC8XSY2xxe3VCaM79wznR1QSXxxgBodBANU4FndsfAL",
  "key21": "3J3dVhmNSALLCZCEWPwj3vm5jnTHXQ5jNeLmiwPngZdpoRG1wUojZ3ftMgbT2YpfxgWnjn5KkqMmcp2G22R3HiYP",
  "key22": "s7aRagsD9qehxNTZUkyhcGB73VhHy8UgXJS2WJ1Y4TcFVrZX9ex3q12K3mmmHgEnWdZg6R5ho18Qh8dRy4xr1iX",
  "key23": "nxZaWTrLJQzFknnGvdTKNVWAhcM32oQ9Fv5fQ3KY3rzD1zSfBAiQ6hrvPKgYGxQBTMto1piaPVhDCrimLFC82xJ",
  "key24": "2Vs9t38CAm1zLtg3SEmYAmQd69SMBaz2KURC8zGRfNB626VVeBYCPbFGeCUDDmCZMrJYGWPeRm7iMpCxTdxi4tEg",
  "key25": "5XefgvBjzjLa5W3MNkBNgQxMMpGfhR8V3ZuAvS8DGfQtGRHUiV4zWyQB2miJ3LCAukMyriRCVSsPgW74iHgrJMZ8",
  "key26": "3m79wsqNtaWZXdKNUzZ43eG64qbF65h65TZKobKr6YzQgDEgwnX5VJebope2R7YMiVmF2AK7fRhfSQoDt1rHsLqH"
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
