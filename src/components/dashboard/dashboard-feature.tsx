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
    "5ccdB3WS6oauwFSMMpY9Xyr8ft1dndcCuyRAW6J8NVDBg8RcHq9b6F9NPpAZTrzCWfn2XjtnSE6nyMUfa4cTXURZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jSosoCYuy3nU8HMMxbugZ2MUiLoiKxSBhAqfcDcnrLGXJcQrj3ds4hyPGae4b1WTHHdjM1o2a1KZF7Sio6TrRob",
  "key1": "4yUAtLTiL4pDSegctaGRSPgS8FQttue7MYhsSJ2oxPko1bFSKQnoZRM9zVWNnwnD4AgMYpyCUSapAb9VCRMWVVde",
  "key2": "5cKibfvGQyNddbH8EhKFVNaXBYrHf7GB61JNDuw5rvEVnTjTVWvvQzpUJqhynri8KsLbjET76GT5VQe9oRNNkEM8",
  "key3": "66LktxQ1AQ34hWwXVwQvDjzB1cqVaLDj3PEyMZpVgjwMCEBcpooPhPEBCN8sPztCXuuz8yoV9VRwc1CwosXAHSg6",
  "key4": "4rYQDAr1Q5Ce1sTWXfobTjyKEDhEs2mN4hfzhhKQENa1bFnBEc6awSk2kGHkzRqdqFxuPwGvrSpHzb7tBeWMRHAz",
  "key5": "xW27yPfQu33CUH2gizisdTCjsu8mn5NyARaTD9K1QEVz4w8NNzqabKoXviwAndF9QGkr6BW8k8mB3iV8zfFBqGB",
  "key6": "5zTm8XZA3jPWNHwTTeVaxHuN7omJv6K3kPmNnzaqMRRa6GcXnzcCQGp18vf1ru23WfTmFzUbFpiXR2iCy9hVenZe",
  "key7": "4NRcYnVyUkQmRBfW4xnw7RcAD4a3knWVwPWBLropRsDvDYBPrBsxmTnw6e4pTrCDsmkEz5y1PhFx3XaR6HreWakn",
  "key8": "23G9at4oGVoYTX2uAYZevtCXUt7KVFcMUSVf2rKSZuGBGsnZXZWCHNoVMukP1AYayu9QWu83PLDPLbBSt5hDwTRP",
  "key9": "4CWQEXjy6jxWkNx4m6jt18hH5y7kbL9ypNHJUprCiiHR26fRktmP3Pq7GUuKWntBzy3wAxBtSMntWYnPzaBTK1u9",
  "key10": "bQEd9ujWsifi8DK9MU83WEzg5KQ1g8kPBTqbVTdYHeGVLegBwB47Kp1WrDeWfVF7AVe7AJfDfAUWHeg89Gg8QTb",
  "key11": "3V9esbmLAfy8pQVyB5pkZnLcgrgzfJFZCc9dn7YsBD8WFM3Yx4SrupuurgCQAAjsWaXzywmUme172J1iUCCoeyQX",
  "key12": "4VZCeGCvq4JPu4JK17WdN8Y5K3aKCcPm5VvusdVUowQ9nkXpv5KpjJrjZocwFgyur5XeE7dfULcGUpsL2JLWLexJ",
  "key13": "3piXNKubhKntPVu6X6KWZqb4JqkBaJDUbSRZZgQvLExRmtqkdEKsNAf4dmVcycFRARxyn8jrELDBXTC8jLUDpmKm",
  "key14": "7KDFo6A8ZUcJch4DCWj8UDUHUddvUQGSxeR7qo3WZCqBD69Qgpoi2n4bhjXmcuYT5vVBxjckcGTXYghB73xVaRd",
  "key15": "4yGezNvqkVSBjtCRWFPCFaoaeJ6WF7ZZPJeEE4ewNynhHJoyquFmSPnV4xEvRh1NqibKro9r16ygEfvvxeVSR8wh",
  "key16": "4oaboG7rSJkHwFD5detFtH7zninytuPhfmfkiYPvvox2f57LuZ8xvgoZauRcyMWuvxQEzGXk72Wt4ThF1vuv2n6m",
  "key17": "34ZoxdDvGHwLkWMiEYpWzd4nP7BbafoHqZLSiu9LxW23fvC4MYPK9nwGiurfQq8VXtnL9Bc6EcPfrCPgs2bNejDU",
  "key18": "64LAywCkdvFxoCQCvpccHtfZSDBijbyfhbpqzoXydAPW33FRiYxBaPt4B64sjbnzvJcxeHBjmBDinu8qgzBZX456",
  "key19": "3yXmKN2vtGkm1vFfazFhdbrTkLXc31g9wy2ZCtwiNCKGvoXXTkUkX1fwPfdr4VHsEytbfoRuGpucnrcceh9QJDF5",
  "key20": "54C1ve7c3iMh5HN3iUoE1x1WdUhPtwpyDBzJTNUGxVR4zGdChv3uNntdGBxKgJuRv3cVSfnt5z34wJLLN6YxcxM4",
  "key21": "2qB5FHijNiYGbRimTMkFaNPEruhxHWPF5CxiPsew4aHUnc2Qpqmc4Zn8oEhTopLxkAoLSosCDHcaFDat4AwNCTDz",
  "key22": "C36MWwe9ZAvyHLyr16ooLyS9seG9TDYxrmLSkyvcEokjFNFeyKHrojcBAA5cyPnWyiPqBHA58FkKVq9FWb3vNW8",
  "key23": "dVBGxeXWXydoKLcF3kvCmiWG6FzPVMXMDAZPv5QQ2abxJTXmwFdTxDBKTpquRpaKcjvEL5gqUyZP1W7Shko9H4Z",
  "key24": "5rsEwY4jzG5EbXkkP4xtq5a8Wmc9aBznBwS5domLu666WnwH6DH2CGRrTPp1pHDan4TKhLPoRPm72vK8LbFFW5St",
  "key25": "33PS4e4nPJfbRobg3dY5fiFmqSu2WYkPj8kVTFUNgaXRgrmvq6DdQJYX8L8NZH6mVPyt8NEbTCowBrLaYQLGZUW9",
  "key26": "3wPM28FHWEgD6gdBhbFyxgmp8vRn3Txb73kQEQmuGKAMJ5N1soYNpJsHRPUgq5zkaXtr7oFXcVnq9rR7WA9G9piN"
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
