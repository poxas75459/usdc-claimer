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
    "4mucJzuLh3iVUCcrvRmmCuxuRso1hKzHkPLcYhWotGhzLtc4rVpwaXBwKKWpSC7HVNsgcUE1o9pKayd65oB8h94u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YgkzxXWaaHZqRpNo5hBmGJ6JN6ja5Y7kV2KjQvLnh7G8JgCRRpMQuzWS5XHkTuZD4F4mvrPbDeYyn1qD62V9dFb",
  "key1": "5KDp1EBK7Mn4fQVh2onFPvhreTbVdqR31VJZMSfobzrdnabtacLAT9zvYxyQRGqnDCqhdYuY8SuPLPnQjpXKzPra",
  "key2": "2You6872iR4L367bJhUHL9N4JefRta18pb6GAjNi7fEFkGAVVJcJK89gx44p7xZ3mc8i3ZgmNqJNj2t7i7tiGzbk",
  "key3": "4KKKLVvEWPKqPTR27u45ENW7AGQ8j1hup7DmpuvxWchrbD2YHfbk9oNBbHR8459zmiijeNosT3bSa8YYnWKzXdaG",
  "key4": "TEtgYAfXwzqHVtkPbCMEHeP5VpxFoCLWocgUmABBQ5LD9ALHBJcG2QaPBc7AdGjR63v8sDfKxX1pm81dE77tysp",
  "key5": "inhP3ARPjsuVd34M2ZgqBQhVEEpHr99jJ6adGjj3dx2XNw4d1Ps6sj4x2MLo7tZ5YHQ3TSx2DacAj73uWRo5eB4",
  "key6": "3N2FoQCN5tksLdG6dWTS5r5yCL1zcTFMT8Sx5yrVcu3svGWUU7w4nKsMQD6YJYqAx5c8uqnptySe1EgLSG6RvjLB",
  "key7": "2bqMy62UwAa1uUzJ4MKjyKWDoneJRpHkxb1aoewr4h3xQisRNfXNPxDe4Qnhx5GsjRnaSCxWj3CNMnuhJp7pAvyx",
  "key8": "5zgcYhe4CyZCvxjnUnBLJstQS76MXeYp2QTTe1pfaQSHCuix4qAW3vRX9Qq4PkYyrbzzr2V2bX1oo8qY84V2nCZP",
  "key9": "TM4Brmry2KJ1JtkqDEWbYZNDU4dmAC4uzdMyvjxjH3QxbMgeiF3jWtqtF4s8Csmdv3Ya93JiWBGSBfKhPnAA98n",
  "key10": "zpNLg8fARU8LQBPakbqJ1nDrb572qkT4AsVjeheSo92qgd7qAcrcpNifh47UQLGfKg83WgYgyeKAQarfU5ufoE7",
  "key11": "3CijRwpJrocLgARN9ym5cMvBLERtFv8NHjWLJHKwGa4uZY9mqaR4kEAmYZhSd7VrYEePx947GtsUGP1Bjixeok2F",
  "key12": "2M7cz9ozLXqR5mLzQRqqZLCEuh59osp3f8G1tS4HGRQTXDkhCA4dS8WgciAhmVrrmX6EXF6JeS5kMR1uvaGxbJ7v",
  "key13": "phTkRWbXtoMRTYZqKc5H1j1SBb5vGmkFbLTai6gd79x2uYNfhwc8E2heZhfzv3bLkkw7Pwe9LNQvPXe69xNabqH",
  "key14": "HuGBphThThh6WijBvPUUbYwaXkjC7uN2HgB7DqZdmLYmjgrBj8binJUZ2h3dx9ea9b3oTfejZ4h8tJMAZvErKQ2",
  "key15": "cn51g1YfdNmbQnxQ3LXZpmHZ3Ni2K3yNPbYpq9BTyyDqjaS1cyNbbgonzC2ZYTXfmVevuW88QHhXRjZJkQUrCgy",
  "key16": "3bGw1yHVmZ1DzfUoad2qczdjLBrWP2SuTpcMieJcvCgR9AQrKpmnnpdyhEGnJf8hBR9hBhbbosd2UC3EqPkBoaL3",
  "key17": "3VDAgHpphwpo3y3DUTQygTQrLTdcy5M9t1rmLCccRDEUyc2rFn19awEaapansoBr6wfkgCzEtC6h9iZcEhBV8hYG",
  "key18": "4qceHJmsoqZfDxyBY7mkmA9wzZzKyyX55WPeYrSg4pXJiiREUzk3xLFBP82t9swdtQREXjnGQL75wqYGtSh3YWXv",
  "key19": "3Tn7vnBXZUnbWVy5TAPDi29n1ydeNwoLEmWbfWkHrUaCqtRLs89HKM6Kgrh5gXWR9GDUcvph8nwZKdZEiiE7RbUk",
  "key20": "34g9ogXGFWPWzGzsLXcFziKJrtgRiUJjctuevsoyHEWitoYW2FqDXv6ETXBojZqH84kJfET6j58rS6hMP3njE3o8",
  "key21": "2DZt1GYryoJQqLGksFVg9MepcbsLiELDj5Y7m6pzW3xS6KzQwiZ9nWTmabcqcsZ7XcsaYmRrVhoERJNnR45Rj5sW",
  "key22": "2AYTMbwACnoyB7UWqn8Hx15HjoFowEan3mDGMPh1DEdw4rTLbrJGYycV7JJNxr4KTmexyGQjDuCd7QSv3d8hD7ob",
  "key23": "2tv13iRS2eodKVneaWhQPgcgMjDKYoBfFzgRUUybbXe6rGThC7GsSV3xFLrqgDMwvrkVTqgJVGEd9euyxkBBNisk",
  "key24": "pmxjfuPJD9R575dpj6cejj9egXWhcuyvHwEQiYc9q7CzeXxmnA9gEShSHRUCLdp8BzNHeyB164WaBXuUowNLPCY",
  "key25": "3Qu8Px1zqyZXi1xfuUue7ETaPyHdrMB7V9Pt5ywzeGpH85wCzx7Jv488yQVPgnUmTvKZbVVyf7Eup7CfnH3eNokk",
  "key26": "p6qFdfSDstHw6oxP1CJVYb9ScKTDJPfpLXTqtstanpC4r3QxysfTHD8vh6teFPVZsWCa9jJqrBRrgcmEczPgZxe"
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
