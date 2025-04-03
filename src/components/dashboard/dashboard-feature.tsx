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
    "5g3yLvjxHQ8KQ9yEA2zhojxXgovLcFMwx71gw7G3uJiyMbcLqQmSxJSXLxHR9JzuWuDitNjbhhRxtrrT1CcWrSzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25uSqmKFeEcQdrmEmqWaEoHsP5JC6hyjWSvw8v7z99AgtuQhbUVWp87rUWYSYrvtEdf6TF4JaxwudxXBdpa5wid9",
  "key1": "5cc6ozs3LqJR9bw2hinCCHqG7jw7AZ7y1p7WDwSRCJcdyiaFbFsjwG2PoWaBF1moCsCCdXcTXGwNDHc5uq3dR2Sk",
  "key2": "4hE7GbYRBuNwb1g6eh4ZZBkL7TdBirSt2VNWWpfTve62roDTmZMmiqEQtuWmKvRn85FiPSMi89YSQQeXynjM3a3T",
  "key3": "4F5J5zMWytWmyVtL6TD5W5ZdV9tcCqZJyT7R1oe7QaN7FQuXgT8bD7TciKJULaGTvaNh9xfLbciHwKy1MjcYkJjo",
  "key4": "4jxCGFDF6NSpdKrtmfTcXm9ozyk3fazSE1hYLKzLU3hcyqrdqdva1pz2SaADVCkFcJKtg2Y6RErVf7q3R86R8cBE",
  "key5": "1eK4TB4Z5zBkG7txuyYDRfc9ZV2DjUT1yRGf9wHHM9zTScMwM1T416F2NEPJTDDwoMxbsmQmaC6Ap2MoTtAGR1c",
  "key6": "tprmE6dgJMMHcvmwt8916o7U1YEiP3D82sfQvmikR36CtU58LuKSPU12K3FH2DogEwiikzBmrLEWzCS5cS76cfu",
  "key7": "2ZbDi45J1227Nre41HKxCw8DNwahWnZ4ZSKdFCA1p7DxwdLBKrQbRcyZV8NzGcFxcv3qsRia51kgjXJQkJXzVmKR",
  "key8": "2gZTf3gMhALPKbz2k9FXWaMY6NbvN4p8zLrj4EJMybDDsMHEJrrm1eHeLAAu7nwM7r8Kub7PHyQ7B2PMRC56BFxD",
  "key9": "4KdciwZigsveq5zA4pTxXj4d2Hi75kTCu8tMAzPiH8JavaQUxY9XssaGoxb6tvsVdZpQGjwYcH2cUHNeKQgqm3yg",
  "key10": "4B33ZpXuYbYc6n5vE1xapLxnu3qoLj1JCBHpHAB4hp8PB97GujPgF5pi2akw2HHM1E9SGPmVkuTF8LGqWbYKFMDj",
  "key11": "37zcHM17YdRr2cBKGwUTpftBuJtxAdUWCRYErbSDKiS5kPTr5QZufqnHP1wnEr6dPCmn9D7p438dAcWJaMc3ugDo",
  "key12": "2hJuyM3PHGMmV5QsTN3iYvydpmnYpppeSFW9BAnD5x8cfCpeYLZVuskH1KF5Qn9tYpje8rEt2BpSX3zxP7hG3Vzm",
  "key13": "4MChLLtDdx6sEnWWenAiVqoa3Z5b7c23eKR6va5bBtRQ8zUQ4Q3Jwo5QGoRwyN2P2JsNUTGTsNfqg2dkrA8BWoKF",
  "key14": "41YXmE8rPfrRJpF7AMSgLJheVfX581DBJLeuQwXNgEsac9vyYv22v19DUvMQMbsjrJwGy1XRkhmxqza8QA7ii5zu",
  "key15": "24XYTU7y8ebzWSME8jV9mxWxBMMY3JF9RqqfL2nwXoRan4utWdJE2DhSYAZyQgoQuD23UQtU7XnevD7FAUrWaYoJ",
  "key16": "fkQTpEESYWjtg75ruMeEe2hinDWZbFcKTq77ConWQ51eFdm3o8VqMmLdMgEMR6a5rhA8Nw8ZKDVB1cYZYb9ybW4",
  "key17": "4TeASHs2uZq9DFfexZVHUudwwsR67Rn9kwEYg7cF7mrGDDGZEWZzDLCusLc1cHcGLfFW57P4sHX3Y1kntRZpJ9oa",
  "key18": "3zJyEjHCNkYbKW7boKrLa3m8JKePLRqCJsKYBMgUMV3kvW3d63b2yTDq9RqnhJ4tcAWv5My1Z3qgvjKNuje9PWya",
  "key19": "4trpvnchqaRndKy7kXEDpQ3r3XN7Z5vvuJ6GSbQ2UD8GSrDpb4GvM6RxtVCjYWRENuPBJm29r84jAfNS4xaZMoRd",
  "key20": "5PsqS5ZjKDkZCiN9fzRTAiW9FKiVKGTRppNo1NUibc28sCDoY8LeDe1ixGdEXbgsALbAfU3sfEFNu4zBR63rYh5z",
  "key21": "31PsHLL3p5qiEJEPXTnu4ssdnNVDjLqsQgkdvqQx7miih3gSGdqScDzNE1GbeVSRBn8i964cRqmhdeL7psLrkRHP",
  "key22": "4XUrGezvAh4xhnpoeSCy9oEptCPY6Q1cCtEi8z2AfTCqmYyDA6GMdVpPEE6o8eMBr4b15LxmkVhAtypJ6Rornyw2",
  "key23": "2PtriRPx56SWD7GcGqTPPhPPWGpceucUbG1bH3QVSX1hBTCdpap17FYqpHH3gfGoKFzpyoA5XPLvoSQpSYpiETU5",
  "key24": "4phaP2LbY33aADqHPJefwhBqMFTKbjPY654oZ2gvR58zptup7b3Nq9WserezvZJrf5FHrd3F41yvSdksGzBo7Yme",
  "key25": "3rNr1Nj8SaAcKzAxxepUKQUqDJSzJtt5aomxSKzgdauRAvG6Be89RFZfMV6wUaA9sHR1kqYMM2W3RSczaHebibYu",
  "key26": "mvrf5nLKwgSHYYHetaRMo9EK1LRoHcjcasb91a63V6RsB7NzPUPRK9P6xMfcReSfP15J4Acnb8XzkT4ZoFbyqT1",
  "key27": "5NJLSgRzaRLBw1X4uEQkk4XnfibJ7KLzWTzDd4dVw6jXT3bJ4fFwUqp6LcxBjGysX1r5kYoiu8rbRaFTSjPGeZQQ"
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
