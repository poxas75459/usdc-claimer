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
    "62ruxDVt3iJFtouXDfnWmyERETvvnezcH1LXGGkEnvrdYSPKVYkZfaYBX2CtRtjUq5gSX3j7vYW2mguFcfo2UyQA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FGm3nADthrXDScsw5e8v4db1jYaXU1gmBgWUiGoq9E45JKtkVKWkY2Q3nFbjbDiikVRskbHTztP5QS3ZYUgyqwK",
  "key1": "4MVWXySENhVvDPZHG3EBbcRkiD278A6qA9LhjGbwkmJUQ14rAanpGj6ThpyNeLR7MvNw2xAgiD7sST4rGnVRgNbC",
  "key2": "2ecPTG9TKq3StKTX2xiqpt9Cf7pey9DMuRkwSjXuKVgKfcHTgFGwDZRBFYAHsPngTMtXnwjo81KoegcTQNNeuJVA",
  "key3": "21wxrMNDHxh61vetnTESZQNgGzzSbpAmC3PpRH9hZa54TrXQBy64xtA3siA997PtYc9WXSvmNYQvKd7WPCuAni1z",
  "key4": "4gMKnp9xkAFvvbWyxWAY8h14JpumJ5MV2UKwfwXgNDmXZ8DMdSmQhMF8d1kjr1XbvH3HvU5Tfcv5L5Vu6qx9313X",
  "key5": "5XaQDYA85yXASzADQ8ZaHbjtN25y3fH9rTh4PDTBUPF2GrRSVrm71NhEtTFr37gZqiaYU89bDq7Rcykr6o9xbAnG",
  "key6": "yDrByu1TxrsEHHaeadWpZcFTrz1NjQoi15BByPqV14n4cPSwHHVwmHUZc4xc4d33we2oa5jrnZQuFRNgC4q1L91",
  "key7": "ejoCspPS2qwqMMVT34YUoua3AL9s85RWgR8C2ZUkVvJYfEUy6vbdQAsfsJJ9XAUMhEJFw14pwKqmf8nhqL9q2R3",
  "key8": "3vU8LJuwKcPFAPpXbvaeskhSoL7jYTHTQAcv5YDmMej4VSSGXtWfrHt4WUZNWqpBwj9aj85hnUy2ZECyMgAPJqtC",
  "key9": "4TgeoKiYnZkvXuAmyLVKAC7vViwbWirf68EGmqTv2cGTu73K6JWj7JyoKwFkmVYBS8oxz56nVcHrZi14SiMh78nJ",
  "key10": "2SZiqk7TdHTpWQQUL88nYQoA8Xc5sKfpCYifuEJSwcunvotGTw7JE9WBZDuA1bpjUHQTbH8bkznjfA6P1XSb5TNE",
  "key11": "2A7XtkvSm5XUnW18UHgzi1dK5KrKwfaThkvUCxrbw6Y9yQHwpBfXQPoPMdyiMajSCnJaabJP4nP2JakJMy796JSp",
  "key12": "5BjgGM8xxGCGJ5MjUy3fJjakinQEmuS5gdYYbudmW7J2JZfL67LUTM6DxqkUbn95XhTm5bFyLNgd3HLoiChxZiVx",
  "key13": "2NF91xADfN3PReLXQUYt38denxFc6bweGzBQ95W4bJMNDSg2nnCw2cEF9djfMh8RhgzycsvEDxG4uv7mQ4EfkkjM",
  "key14": "2ocEGAQnEHe9yAwF8Azo7mWvnWqYXtdBimsAEaxALMVNd1nPqAPsFJgAJSVSXHxVHdRh5WTQamEHGqxzbSjmAys",
  "key15": "5FhFsm9VpZ18EqDrrB8NBbwb2vvC3oTtjBQD4HhvbhwvD9Qz6KnLZ3ovvH4WB89Wq7XEzi1bKZc4tT1gdFfweLt1",
  "key16": "C1qnU9zn7ugpZtLPcPqVFWEHC4BHWjHc7pUn9cKtxgPUnx5LmpK8mM1yNTP4Qdre14RK97Sokok5ddZoKrQFQGW",
  "key17": "5K6o2MTWn6adujMEuv165vzzSV6VMDjUZR34dFQQ13LEWbuP6S91uZmXCoUA8fAamNnBer7qZftYvYc9ta3dWDy1",
  "key18": "wE8SiwqvXGhC23t51rrxbDTqEcDzAFSbha19ffVoBy3hDtrhubAhik24ExC8FXbsJAzCyXkgk9gwhgAcs812YEL",
  "key19": "2cyykZU2wqUniCo2JTfR2NFprbkZkMc4dvWWgnCsoUpXzT2Ey9hdGeZjHZGizXPf5L2zVuZRhXH276Z1nyvs5G2Y",
  "key20": "NgKSLgkHnd4MpmtDQkCm8qj2RM9FHkVQUaA6HuNZ6NsqXwKHgUKdyHfW93UB9AntaBfETVw2XibJTgyMv9V1ZX1",
  "key21": "5jwUNSWJxqb1o7GEAFbVHukufYeXDdGm839qzcgasvvxmdHrie3XpNLx1AVTfCU1kFvt8H3mpHk494uZ8KPeJxbH",
  "key22": "Xjkug87KauMYeqG9qFfDRArQ5ezDAsufDFhZyrbR7K3Ayfv68Kj6WUaHWBAXHU21EJxgZW1e7rfJWGwcDUVz6kF",
  "key23": "54zADejh9CDCbVyDWQdCs8V9e5CK75Wqc2kHN3FbhkHMeGmKsHGtjATWHFX1LNLaW63Qq5dt2hNoL4YeLZDo8KQ8",
  "key24": "5Wb1pWngUBdHfk1jCAq6X63zJxXv1fzqHNqS8xitkqZWtgZCw1q89WY2jG79cGhzbN7p9nunKeWi8284xWy9CoaP",
  "key25": "2vP2EDSFh6iUjWLzGhFCQny7H94E8NUQGSzkwvSUGcCWhZqSiB8z2ywiEmr7wXHKemCbq9y1yVEGqTy8iNqPvkMv"
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
