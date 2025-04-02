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
    "4HobizjeRtHokn1caoqkcFq9SuzrdKhrmuCSqxSD5JjsgNCWcJE5PwAUbGx2Eef2K7uu63puawH2y54tPQqKNSz5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cHMAEn91yQY8cULKJZmBd4y3FkhtpgqMUgiADVAwNHC4y9XsUfc9asQnb42wSJqVHgkDg2G7SmrHEWiGcVuNJea",
  "key1": "9kMipKcjsAq6KZYHDMpqF4gtaeNgszwSb8rqpkjzjPmaD59SKoUTAPe6ewViwWRzXfeCLqimtHhdm1zD1GdM9Lj",
  "key2": "4B4SAToqdSaRY4579Y3NvBRtGkPdgXfnMnv2MAvzSmta9mpZugbzNPsLJe8NnGSWbDBJqh7tH7DQMmETZ2rQEDjm",
  "key3": "2Ng26EDAx9FEvrKdCVUwQ3m6kcHAsLqGXhBSrqNLML3FnWw91p7GmHeVRvsXYENEAZcpw1TGSb4Mmw7Sn4pVrCga",
  "key4": "2VXWFKQ8LgXzhrZtSnQGsZyqaZXfKSyrSYaUpu2bG7ByLNEbC4UqqK4gCzNdkSPmyzuhpSqBBJK8fffjBDTwGEXJ",
  "key5": "SCgmAaQUG25Jrb15tqqs2GMWdW4g9MaX7Lnx5ytNH6fGnUg1XSzdUT1cH2JxKXmSnBE4b4RV3j4bjs7CgKFXwqf",
  "key6": "qZpz2kFgJ7Dc7kZvnA2Wa22hno8kuQ1YqqGVemizEhYFKiU8C4SoJxDckmuhpoxsT9AnJMXXaYde3pZ1Gy6k1BT",
  "key7": "gJUZwx4q2wF65ovTRWZqkwe25JRp2PKTqTzw356YwvqyE78nfVYuoxmmTUkKp6cFunw17Q6PFm5bTKnWURjmgZp",
  "key8": "3DHJBpipDYte1CLgJ926nKHxY7uBaKG3S9GT1ShWtBpUsBFyWNshLNLWiKgTL1TFnoyRP46BboNuZt6khth1JNdn",
  "key9": "3ZHiHa5gSZhGqR4zrLJBJXG4h9qPTJ7XDVT3W72T3aF1pqbGUwkPdU1y5UgA1oX1AouLJYMSSzCD6ZrNFComm9dE",
  "key10": "5Ksz9iKxUuh8ZDfENJtysg2p6SsfunEJZhWxp5NoYNmcFfW32LYzyrMknxtHzYEGLkA97L3FXskUkMaWZoUiHWvR",
  "key11": "2jDJ94iAUrr7Pt2xJ2hNJvoADMnQYTaCXgr7bcfdXweNAp9mk8XyYELBsF6ezDEnnnwdYj3XkYrn7J1ooRPo96w4",
  "key12": "4BRUbAzkerB1xbXQCuXyXN1zvHCs4RKSYwXhg1fwVpvMeTnq5RQ4JtRqhSyAJWydpHktjZw7RkGAiJPRhPa3iajV",
  "key13": "3Zy7B27JvZpCrGFJS2htoqi6fbLidRpNwXciKAhK33rxLRQhszSHuAsccfoM6QmpSZgers6e4mj9YhZRvzX6hXFQ",
  "key14": "76acHWFZq6xaGvYvwSaoPvrnTNwcbp5NDE89Nfhn1LHqx6dqgRnd4YtvTx1yTZR3ZQFdPTpw3NPSdAMH7yMjzgG",
  "key15": "317Vow5DSsPSdRKYNAJ8pjqQvUVuf3QmVEFRATomxqcATYJQmspeWdo6mWYHhyfZTaZd9Yn2YhoYz3ZKq6WHhrKj",
  "key16": "4ttwoSWK2QPLFzKY7tTs9L674AWcqjjCREDfnYgT9jtrt5nEmQwwCiwfR32KFtthHUjvDSoPnE4CTFzQuHKxQhPa",
  "key17": "4t1vFt1HXDuyDJyCXMhgy9zrXovAiGKwEuvPhsCSEaZHny1rCZ9Eohurt9v3tbM84rjY8pJSKvUVutvUoXmfrm7h",
  "key18": "3LhjUKWGkwP5AU6NbPYmr6oGvj8fRtwFc684Hnu5oXDLhzVxFx8XpTuqYsfTemgGY5YN3HL4k5Z6PBSF7GGrryNc",
  "key19": "2SGjTy6t6uHDfRzaRnTUnxoNAWLZo4SKxCdfRjmGekNiVDedE6qt8tEp6ugg2GT5PR9rvFEGnVCRvb113qi4iLa4",
  "key20": "n8Y3f1Ru8AeLhCC8JNa3o4JEyf3PMVL1cUxYUYmLgxFreqiudQkdyuXmhyJozVyDVLhuzfjFfweWQ9EYTRZFGH9",
  "key21": "Z6GvU8wGMju84A5AimGG8A7xco4fEuiwB7bccnWsiw4X7LbXoT3StqJzDef2v64TpDJJQmmtwZ4iEEbBHzBrsSa",
  "key22": "5ghr4qznmFNN2pjHKZdgCVayQMYyPidvrAvUMzUgACgriaBigX8qvnjxhZni97ZTC6BZN9XVNTubJ9M96mTNqXom",
  "key23": "3VjVfkfjDtWvheyqmFURCAbkwz2gkRtx9qqjb7aiuwwNBPjnBe22cC3iHx3Mbg7JPTMubvPRd6rERDinsi1tuxUo",
  "key24": "2W1M5vNpPDfQQxwCieXQLUs1HJ3vWEpqrq6jeMKTo9radJi9PD61ZWHo2CFxLKpWme2154z9BNyjWjpz32swqwCy",
  "key25": "2iMck1rvg1S868jU2khf8YZm3ZFaA2wk2c5L5iJi9DApc3QHE3rth7Yba8HXzWessCuVCMqxH5mWJJ3FCAycSkVf"
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
