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
    "3oxmrdi37dvU1YbZn4Z7aSzujPd1bCCnYgsnVwyUuctEX8iwFRkVwJwtKfcWoyrjN5AjiMhEnD16bbiBr9ES8jMQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8kr2DoeFXHQfSXNQY85rQhBsXuK4eFB97zgcAAFBojeRVNSN24DU54BcEZijA54zHGmYEDiHmztEBWCC4MZDyyx",
  "key1": "3UJWFC4t5N9KLMeg6YzABNwWqr5nwKE7WpyYzHUx9y7Ye7TQwc3WDfTAfKdbFQqh7wuwgtTg4JXPVsnvg7yAGD1T",
  "key2": "5obvLiEGU8ssAyoMzJKkfkMTtK6NxZhgGRy1BaLGkP4YrjHPEdThUDpzX51pCuqSnQDz89iTU6KjJAEjQc9knujr",
  "key3": "3kz8xqgnajMkUx6iugNQWSdvqTFfnSXRJyFeTUVi63s2HL3XVnrm81R7qv4RfNBdawTiojcNinu2mQ52Edhg3G5N",
  "key4": "3vYXQo5XVzicfJNTx8Au5fuWfT7yz5tYjiRriF3tXTUXoFr8irUU8G9cESydE5jCK3DefygF4QPJfsZix29diBAV",
  "key5": "3hVMr5qkj99h2ikJ8tyPJLhVwoPkFvh7Yxumn9tQsFdmAQBkvRBURtXu9F1DXrP28hUECWU6cztJLjCvCvNbdrPh",
  "key6": "5zq4yo4qp5p6Je2YLoYeGV57axxHdzMHV3L6Szt8egbW6FrR56n4HpHqE7ZyJY2AH2miKXFEyhDHBPqLs7H9p3if",
  "key7": "4e3HgMYsNGSBfMPQVxnUZo6XVFvAu9ykqcYGsKPhx43tAnmyv5rjHsMSt5kk8FJT2gNHC2CWR8BXdyDTsAEwaJX1",
  "key8": "2kHSSxuDXPbbvCcHLTK5uR65zhTnrmXwfC9Wnq8ckm3rvjKyCHPRbKBdHyTQeobmCwC2KmfUdGKgdFNb4afpvFau",
  "key9": "91DL7bsvDVz9DzEUfpXriUEEVNfagabok2zGHRFeBYrBXQW2wUrwFASEUJEXvWjcaKKJuVJmg9joZ3zwEFQgbJL",
  "key10": "2VT7WC9EFqDCTe3Lp3iUEz8uVyiwCHdWEpMBrs6xYPEvs3E4nAFeVkzqxfJR6Ut5SSp5HrKY9JL7cvG6bbRT76WN",
  "key11": "41D5ULwPqiz4rYjNJTF8fWxHsDBrJhQsF5hijSt3v1yiCx2tsgqD9sLhjY9ygwCJXpZK8vHfrSYTJ8rB1bZ624Z1",
  "key12": "3MRkB4Ctdv3zW79jg6Rv21epXzrbey7niGDyMoeTfexVvfKsicMiCt4DocbxfuH23byDzSNNsfUfpJUtCq17nJGU",
  "key13": "45tnKBA1TW8TM4noTNuD9hpPTcwm6C9fcXUdyTbFrECCMBFBuvgCb3xcX3AGn9M6uNq335ipAzxfyfSu4undsFMM",
  "key14": "1Q7TEo9E7JuYbRtGqDUnat31et2mkQYg44pBwjgVXjSQzcHKt6ooG2dCYUNqsCNjhA1S65JTyWfoWg9QCdNujCC",
  "key15": "t4W6ECGR6UUhTE7M4LFW2UwCGB6DvqfzpYTHx9amQsbuNsFz6JN51Xfq3bed4WfVHMCACHJbrjTbzYefXorDXnN",
  "key16": "34Nt9nUX614qjKqsqUokSrRRMQ6BPL4kAX5ct5Rugfh8eVNutFbueP75sUeRy1xsXwhL8262ntdutpRUXSurHr7Z",
  "key17": "YDs6FREoZXsqxrHeJzNkffgdMuwwo6qdLJRwc9GGt5WXD2eZr7F3VBSwwYWk4Ap4hx9J68Q9kdSLUfdjUyoDTPB",
  "key18": "34HkiDvRhDuKQ6sDfX86cuaPb21zM28rDA3Hc9Yhg5SMYwFjtP7zkQUqSPKGAWvTKDRm7XiT5JbJ8xCcdEhrnrmt",
  "key19": "5Zg6T1gTdm4utAwe6KppuxYoLZWokXHPP97ANGyfQzFHByoH65KampjYpbcdh1MprKNTqJyx58MCUaV9x2Mn7Vhd",
  "key20": "4WHE6M6M23bxWCEooFhhtb9KGgr26wBbYLtGvSNwuVAfN6yXwD1SbBuUtjEFzbCQSvHAxmmSv7dprSUb7iZcPqhC",
  "key21": "ywcvzAngMdwbTst2DEa7b79E2fw6SRrf51t5r6YoTj1bxsAYgHXTcS2Yz8nXkcFLKNXRnhBbqMFncEMptYzvD5Y",
  "key22": "5K5gJVKCex7ecWfmWbjpW1toLtaLqcA9ZKt9gfxVo1oc9XNgAgMy78nYCtM1t3yQUT3p7V6Tqb4aY6T3GiLzGDvn",
  "key23": "4Y7RjTVDis1U832tKK4DYTUGYyC3G8iQv7UqQdvMMHRhX7CUTrbux69QYRL3RMZpdqcUgPaeriW4wHxSpUfnp49k",
  "key24": "4MyiMiZCCgY7U7z4cEP2QJqiKdmVrLbkHE8Sq3DThRBEB7necpy3CXZtU8o12t5XXBTo6mX25sF6LXXVJZmQMvzL",
  "key25": "4WJkGqJT81vPzGRUcZq9jgs8LU6FMAuHGVnmtpZytFEfGquv5FYr74htB2ymKX9rFKdY8637rNsxxNCM441SyRE5",
  "key26": "3G4ejqtKKY7thcnvH4ArpQRja2w42wGWFNgJmZRAJCrUz1vw7r45ZaDd2CXFTvY2vWvi7E8bLKEphYptA2QLnrig",
  "key27": "5hnqvpmU4s83MRRQrSzwZ5bE8vn9YNX1dGrnncHmhMuvx6NYfGJyZv5N24YeN2QU9GsJt4wsXJpTEBRuM9bBhwNV",
  "key28": "3s9447qXfV8ceAfXQzuqnSuYEo8BnjReMoXJgY9ymLiL8H8jdzu2hYeAnbDPYchshxEJ3ajErtzE3CtYYxS5UbYy",
  "key29": "2nQrT88AMEBDDNew6hv7vHgRcu45KHw8zSHpXWnheFJrMVV6SaDnERMTNX6uVhvXB5by7tKfpSyEWNaDgTZZtsrH"
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
