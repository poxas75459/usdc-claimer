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
    "3FKkN7hLe6SAyfdG3Stfriv5myY3Z7y7TgsNPC1mSBtoh13HK8X61qYNceX36xuKsFH66Y3irkExY5w3qv61X22g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V8FN24Rp7QYj7VsNrb4hneEn13ktUHLfHhX19cpPgCLyaSeE8wPxvGwrVm6Se5wtXaRF3JyWSL2MHtmv7Qs7Ftp",
  "key1": "7QVsuHZTxm8D1E4LADrP7rDaFYyPusXsLtYZVxPA2rcN4RxqjWHjmYjJqSzy3FUbnXrJcabPwwTLarDipnN1WPe",
  "key2": "3LN5va3qD68mGS3CA64h8NjuKQZB7XeaNtcudPNcX1V6ztMk5xcpfUxfSJsPtz9razBwWBYcAHkhHPivYs3MjLGv",
  "key3": "2sXe95BAddTHRQEdaFDjHeqbXuzGzKL41wsSsRvabnE2akaBCxDJ5EKNo4UaSZyauvQhJcX2HTwxDpVjaKMWMzEq",
  "key4": "3hi134KVVetrhHkXzQ17NALa48QnPqG8k1XnE44ke7dh2uAMxVFNzNrxLS8FMj5WUMfnkx93PjqD2umoRJc6D5wn",
  "key5": "3uVUGtn9ux8PhmLK5qmua4cpnsxcLXBc6wNEFRhMggKjgNGEnBYjjeKjxv7Rwii6YyYNYyYijub7Dj9dhvyoG8By",
  "key6": "4YR2pvqjbCwWQSZVZ4YoSstJW5F2xn4KuJYcMyEoSVyv28SHxR1E6TL3tEt8ZHGr8JBfkrQzxaa8sQCW3J9DJ5Cf",
  "key7": "5VxFzGBQowGjn9sm1QYF8iQuYx8QE4WD1Qu9ugh4vWZSFzLm59YKJKwoS3ZyA1oZEB6567B1pZdcbaASEcnoKfZ4",
  "key8": "2BJsAJTnNR6zDnKtDzbxEqwcdCwwVRH3pSJtu4ssER7387vh8VEK1zo941h8dvRzfc2geZAerLKVeoJQMZVsmAb1",
  "key9": "NaKXUhgKPXptAgdK1KdfG3zUDDaweKi37mUFQGUE8ASAc4ZnnF82NVH67fqUWxEeap3FiSCeFAHRogdqS6D9amr",
  "key10": "2kzr1ogUkDvTwr9mGCPdX9BNUqawnKo5Jg9EC5XBB8jwE7dxfFGRT9hKz4Xjysk2p5oy8SKr3bdSdxiGUHALYcJ3",
  "key11": "5NFUqbBiwLumqx75uSHEKCouZUmzAedZSfs6fFzsbzkzZ9nb2tSHKoF7p2jNzXocRb78ywmTSoL8brTxgLebJhCS",
  "key12": "5epHWDpQRqWpX8qjnAgyXhzW2zCN1Ur5dv6Gp2FQLJSxNfuB49UrtnxqmJpWgPLwEyc897xdzGgWEDJAMJYVDcEy",
  "key13": "LrxZNRmMuciBhyCvrT9tDvCjZeYuM6gJ7PvUiRLRcgbEPi4WDsjvNCyFxMnA3hTmJu8piKhDhyEDYYbwzXA3XoM",
  "key14": "RWLDHUjmBQctPPkcaxdrzMywjLa1vVTRz3Bm1iytmiYydmhLuvFuza9pfCqpHUxorGYPRNJLm2jEUvFdHk8yLS6",
  "key15": "4PymtMGsQmYAB1r3ZyDvafrEuzVCt2yjTwwP1aj24JSXd2RFJq7AmK8ta6Byqirt636TUzuqkWiwfjsScJ2yz7YJ",
  "key16": "2WjM7dD83z7fA9udoneMJrFwaPyPe8iJyQnSBx3LMqQBCn3CFQoH9PQ3ezVZ7UgZeKJxwLpUDRT8Rbmi8zVtMRpi",
  "key17": "4VsNxWRoWsQgmjxAFetEk6anFASwjza3opEnck4uQigN7kWqmw7Trw7zw51WbwoAYBKMseLrLLnWGgYx5Lz9kT99",
  "key18": "gNGKr6xyxMiYJVtn8DUG73ELwCvk4VBNFG7v4mppihvhccVzmPDgUbBQmUK9N1eJgkCesiz4g1rYusLMP158JPE",
  "key19": "3sovf6dRTVTuzFEhL4bbo5PuELNRj3pr4BagtnFsAqi752wvt7D3HuKEjQ2sujsQzUj5gnA8qLHsVx8gYPPJw5rV",
  "key20": "LBMNCmtuoosbNrN65Ndq6HsK61tLBBmRupDmuGZ24oc7kJ5XzX491S3ECgaBTLa72nPtDo5fkVpP5mVzZiLVEHx",
  "key21": "4p7kL86UR2BmXiqH4uHJZtweEd5dPHTHU4MC28WoVFxXnhv6CVaWRSpMkSZbSnJUKPg42mCr3Md49tfa5ACT91Jd",
  "key22": "bD61MQoy7jwK6nkpNarEYeekm6h1Muph3UE3fpg9HD23Gfpt5R9yLN7ZzMQBnak5drsXQQiimccBfS25d7sBTL3",
  "key23": "3pT9Z3j6z9vwhvGyr8cCubqD4axwfoNqkdRx7F7ikAbwTowsX7FJnyiNAD8cAQWJG3cHspsSJvfntqPmJvpZHSVc",
  "key24": "4o927BvQCe7kknKBDZZWdw7uS8hdz9vD6UdYUiprxSrT6thb7qUCEugdKL8LW8h59sPyp7CCxZLraX4cLbLngXsw",
  "key25": "2VX5WXFzBmeJvvoMtw34LjSWUQ3YeZnWfD8DJaVR8VNsRcDPX8G5gtjVbs2KZQiDJRRWoSPmYFFhnEGVAb2V1EJH",
  "key26": "3uAnJo7s9LM1kCSrsw8RCgrtzrwtteZfvpzg2K2qbGjiXEX7v8YbiJ6ae3knMsGhdcqnvAxH3CUkmhRnY68F33EE",
  "key27": "2Myn84D5n3HUCGPP4XHqSCzQfkdVbcvrYWwFVzY174mV6mC7AKfYRwrH64uFuE9Rn8V7XCPHiFKwhsDY3QMApXsw",
  "key28": "4BxbhD2gacnNdLSRnkjCQxm7679oMRRzAaAc3PRXN27yG6uDwXg1ouLr1MfBHBaBqR5K3Fm6Pj3DHPM84tb3fR5e",
  "key29": "5ELZbmaPiv5C8EyYythJE6rqwF6KHihwRYR2nm5ArMrXsUWdg4Rcq4nRd9Nnt6iANwzwpSR94EugMNQ2Eb5pXr1E",
  "key30": "3LkLYeppVAfxo71ZyBif8yqjy4yFMA3NCjoXQGrCBKgFHW9tASXBZmEJpGsNkntCsqYBdq25TwMtXgRb3bRAyLMq",
  "key31": "4s2Km7g9E99pN2nXf6RiEGxLNHsjMY44kKdkMKrCfodntLW7V6NGijhTjsj5NuE1RFbBUpr9dH1YXNEfLAfZsKmh",
  "key32": "57qEjK7jk36t1ZbuDF5AVp5jRf6KNXHfWNnpBBWkAJ8JBEiZeeY76xFnpz5n2tv3w6pfdQXvRMtL5nd8AekMkwpM",
  "key33": "35D1y5MerbyhgqGyRjZgZJotA37Pq5wX57ktDcHfhCYjDaNj38jUsoMTaX9mkSzoZ3byG776msdk1D9pNRtyZQ5n",
  "key34": "5ktb3BqSVUzc9Ny9a5jDX5efPLnBSnuzXde8HmrGWb92CktSyZuyaRrkjLt55MdXkjiD5ebUtVb9U3mhGgR4aGb6",
  "key35": "tbpHjopUy6xtuN85kRzZaqcKjekVhMe6wzwDd1PFqyW8XwgsokLfKr1ShWuWVmHg8q57UvTCMmDgKTU7fSj8K6z"
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
