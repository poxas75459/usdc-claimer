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
    "3aS8eZd58mXJ8wEFhtY4ryX1HXnfZTnbHJFuJVrUxgpztgFRiaxBCQ5TEmHtXjJdJgBKy8nCTpBBFecjawhuanvC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gTC1NNqvfPMu4zAysMnCswQUNHmAEBpvbENJZksjAXRXC3v13ktJechZd3e9ZU2kTAfmxGtzTTWLgs1pRwzFAg6",
  "key1": "59GKpxuCzXUpxy5KHphU3Bfac9aKAD25dxLhTLBC8d3ZWgsCZnJ7o4xDjdjmRS2GPh7YkMyZyv6xxPKP1RsrEjpu",
  "key2": "3nY1Vf5SjQh3xubSaBFGATAJ7da33DN5qjuAW3LWG3Bggvk15JDBK9HF3vDZ5VyQDwi2Guj95VCFybZkFQHF1eqp",
  "key3": "4oTczxv3knejf1ZcfKx7JdsHBcQ8VtyGiq4DKRs3uCpMhi3mTV4FfpnjnLNLogSC7sDz2gdHS5Q5rMxhQdpCbHGW",
  "key4": "43jyUWL1TJaEcLUfYCorTPGNLTvMQEuTwF5UVfciA6rw5YzK5zGmbk5fRQDrRrvvECvNnV9VSYoz4wSJH6B519Fm",
  "key5": "MsGXaNzAmup8pCRJusfeYxWEppkrzLhKHCByHwToaTm8miy7qKVrkRFmF1fCLxqUPfXKMeaEvrcovQ7ZAt7xGZF",
  "key6": "2tkb1KXzkdydBMz9NdwtDUYbfuPgXYWvrcZQDobNvkkeJ5QaPpZ9EUu1hjUZB2gZ59R6hr2tkaCPSTQnajE1WN1H",
  "key7": "4rVnRjzrbYE6Z8Xz5mydNQibFZbTFVFoQqVLLQtQ5R1PhrydyPfXHQGQQaiR6pA9WzkSTN7nseFXGsffNTatx7Qv",
  "key8": "4HJLiietBqMMkxe3kdCSVwZEKE3sSSiyCPxDtVxsJzPGXdNdmtUohKcTVVp5nkUkirx7Tcw7y34wrqpJpW7VSkWB",
  "key9": "f4sxFHnr2XviUt9xXGJ7Yy1dptJ3cCckWHCSSMGgVnAPbypvERCcse6vUHLpGPCJAayHfTiXm7q5ThwTEqeKZBM",
  "key10": "P9D2eJtZDcA4qxJAz13Adz3uTTBRq2DLRxB3bYyKqJMGPgeRssMavNV3yh8WQWsgbZ7sssdqzc21qgsb18GrDDC",
  "key11": "QznKJUNBLN8MLarLQn3XzczLUiKbhzkbfJLPTAgJBYbzjzBu2ipBHeddGJzRgf5mdbyLbGXgK9VwRP5y7Ns41Ke",
  "key12": "2nV3LmX41fJBgiH6ZJCErQQC92Rw6gPug8PS9mWpCenxVy6kT5XutE3hBmXP4tggNdPCurBvXaoa6bp7JJtZcbmL",
  "key13": "aJTGFchnTPmc1DYXpUrLN7U4gJtdkq3jWypgWT9mXb7JNSFkXDaS6XCrkNpe85EP8enEWbsnddoDgLjPyL62Jec",
  "key14": "2nEydpV9jZspPWtQew2Q1GT2cND9BFXsrFeYCsMDogKvLYmpwT128wSVNJvd59KyC865yjSFL7xGm5ZZbmhnYuKV",
  "key15": "3dVUUmbkKyWsn5MQdRpzVQHJ5V2dgT6tBwtkPVcChPg6p4L2LcLXF1ipzFhvuNyDmEbgbYWpFjPYENVG44XceCVo",
  "key16": "3GzNWQjiZZ1MWmMibDBBWSJ4uo85tzVTErYb8vFEs5XsgBFWxNAPA2W8peDNtkhTVGs89gCzcQzcJzLbAW5QiAkw",
  "key17": "2iDqj7iiXVrFvCQZbdvYearqpRKEkCCgMf1qRhKqfkAUXne11erjqNUSSqhEe9qM6HrDoEB7bC6XDL9QwNkAm3HC",
  "key18": "4nBY38czcEY3mRhjMRQ2qjSWV5pGRdvsyyq5APzmui2bAxu9KbLPtFk4RZFeCYCVw4uJWZ5Xx6w6Xn7G5kcP6kwd",
  "key19": "qdAXtyqiNz4HYQzNMEQuam6GDPqxzk3YNMdD9ar9TwL1Fkkns3t1x9pPuUyfswwjuPeKTPNkUxQFQS5NPiMne1Z",
  "key20": "55uLh2rJ8rPzVDbj37e7nEmetrrXuhqSGnKhmxAW2S7SxYL9EpJZdhXM2bUPT8TTaEc8XRLVXPre8daMjYKVoeXo",
  "key21": "4UeKHd6Ev2TTuBYHXK2Yue4RjgBcxmZWJKpxYXJj16vU6X7JgsxYFtfLytQe4Z6euggDMkfanf92n4fzhZxr6Anw",
  "key22": "5tq9UAekNQurDzgnpBLF3f7YiJPErQgQ7dAQTqsKGfrXuv4Xf3fBkitkgQd2xCwkRudXymwZgR4fbneM22Jgzdf8",
  "key23": "5L4vsAwSTmSPWYjpswiRowHMXyxfVHZfNqy96QhpauYuddekYdzEVAPmpwzEK8wegrmsFnVAekUmCtHJR7kGGuR8",
  "key24": "4RFaRvxgcjmkQ188G2ugCdFc8UNaTnFFGqWCkRLdVK5bxTaTVCyjmSmKjSrYGLTcGDcLegnRXvUCsSv6HdFFSRnk",
  "key25": "4mD6gS9i8SuLyFFEhaeqPXYJHR4AAyGgF3o3G8UP6gs3rWPicxZNGVojPV48GpAzKqLQVyfmiKLA8zD1g2ki12UU",
  "key26": "3CFseqqAWdE3AmxTCycQWs3ucdfDuTJhXtnmu6LjaYqf4Ct7mj3jau7an3Y8Wmv2AjU7PRxE5dSPvUrYgVR1H5kX"
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
