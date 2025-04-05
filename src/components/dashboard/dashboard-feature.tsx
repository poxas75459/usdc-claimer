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
    "NypgRgxCmrMN1jcdCkChCtYb6XwS2RifD4tHT3jBjA53PhvBLfqvWKjjDyAEELPDNzuAqL6AiB2tG7N5sKnR34b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rYaQJJBEdkkwaHAB6uXxbAcaGueJwGpJnSNW1sTwD8rRLvPpzcSuh7sUdqjmkS28S9atm3hCJURyKXGyN9tP6DR",
  "key1": "152RxWjyiy5d2vW2SeScSNkh7AnnNYN8P4t3ko5EZHzWrYaemG64TpqBqvgCRbLWLZkGZx5mzNRvU57nbrdTe8Y",
  "key2": "ANS38mHGsExu71zevEbvBTDpGhLekCFhh33XPCMGSLJG1nKxHP288iJfeBBtRU4aE1h91FLep5G5dchb1uXRWWr",
  "key3": "3MhiBxW8WzNtz9D4g8QfhEdtv9Hats6nwcPmYNhSoTszY4uJYkay7aBygyUYiczzPP8zCFd11ddUmiRnmyFQPcSg",
  "key4": "5Q8857kVnQ4jmBmAL18qfqARHXnTfc8nv3xRmLnXVYbkZ2BPAB2Y7trtSE32kgKxDU5R2pTT2hAAcYv8z2NJZDX7",
  "key5": "5Akd9byuPnjwDP8nAGRNSZCMPqQthaEe4NmT4NVAGasU6ByY5WfnMUWDBEKZXTjmkEzJVod7J4VGJdcjFMqaGdAM",
  "key6": "2BtXFpwbRjyWWhgvvG7Vf9PZY8AkKpPFJvTGezk1BPp8UTSNvZUceanr3u3P2EjB2wLSAssurJr5n5xaWgtWnA2M",
  "key7": "21wJ7YJN2NpB7dx5kX4EiE35D2YpXDoGKjKV9BccurdqQZ2pL3GaV96oowW1vDMLBBrsp2op1JqE4tsXBJ5P5aBm",
  "key8": "3czKqqc9LeRHetQzkTGAhP1dgyhRdgAGtZEP1YBv8AL9Eg2TsDNqKMCpdJ63AgPwR3kis1hnoJnbXArp5jnD4mUS",
  "key9": "4q2HxBj1693WW1YMwiJk6rJHNcW5GmSv9n5weoDYZATzrLH4znKk6vUUGNR8JVMqiSFQWGotx5dTTFhH1844mmam",
  "key10": "64vSag2jpW4WZuoH2dq8bpKqMjTgim8J8pezEtrUw36S8mnh9W4q9Grkj3Wa2EmkaQrta8ntikLLxgjoCzpBp8UW",
  "key11": "5Qdh1cBj9Xs771qLNGmshvmFJbcNbhTsbkZkHubRKy47gWEBgsBd7Tnv5FAW5DFSXqV3DPK4yfCeuLuuXY59cc2P",
  "key12": "4o3YfyV1mXQrbRUcDHki7hu3r4C8NX8oXAboycoqMdCrPpV1VMe7KzZw5CgUkiRkTN7399qaKxU8J4f8bU8cXa72",
  "key13": "3poFuGKkjd9ZBWaSUKJnWxj1sR2EM5eR6fuVY8B2fvuzAAZ8EZWWdorDJmk4vnwA6aoukyWPiekLTJdTPg5TiRjv",
  "key14": "2RfGhDnhostFFKCq51Lm7h29tcWgMovDFd3omprn64ne3GL79JnVQY1qdDdde9R644BWSpv8ctsWsReqzyU49wFj",
  "key15": "5sJrwWgNH4i1WdDrU1Qq1iAh1j8vstsTXChnEUT2Y9PnDLUk4VRQYVVGDZr1e3iom3gphgdGqHBVGT1b5e7uhGX4",
  "key16": "2Y6QAWf2HDmq7yNXzkbzLk9U3gzdo3UALyV9KbJfRjgYD3jWrSpRf1fXKBxMYvY3HwJk3yvMpfC2GkJTpGZFaDTq",
  "key17": "3Misn2i3J8zzdZag5Vmoz96gxXA4RacxApPtNyXJjFvnn6pshLBf1UwfZcy6KEQaapfGVvf6DVHFA7tvCfrEwumJ",
  "key18": "sywab1intCZr2PsF8S2NdUnhjcRoMvjT8nuEe33NJX66AQAjEoyKndBHZNw4GUZ3TNqBFMyFdeXxawEzAm3CUUL",
  "key19": "63iK33EWuGLDfvS8nMTusssjCfDcRokJnHHSFFH3pZYSAPYfarbH62VHsUY64FzxUCY2AxpyMFcBYNy2JHHwtKeP",
  "key20": "JNAGskRRuNbJHnYYSSVJ1Kdho3x7XKxPpLmTJ8aCv3fsdVQFxw2UVw67B47qAabzNDsThGPPbmjy9H1dUVirAYL",
  "key21": "8LF1TKeAzgj1R4BTos4ki7Q7wUTELaedWhQs18rrxe3WTzKs1QrkTztjNv9c1W1yDDDh2t5gJZABsoKU7vfe7cE",
  "key22": "4oj53supqxZ4SyjQ3Z2tf9GCnLGJMYpxt1iKsQjuPiBM8Ry5sye9aPsbTszmuNxKNURVGuERBLR6LoXNzMnDMBJR",
  "key23": "5atrGsk4BoYwJXZ228ivpiK9g7EKZx8k48eCRwGVhj8ywtRYCeNnbhxcdbEH1wJzzgwcpr1sXLw4oPNpYVNioYF7",
  "key24": "3nmTg2u3viK1rZxrJgzpNKxEAwNkph33nnxuZCkmjzMPpDYc5eYLgCDKneMyXUgGPAjSKfDdCrXg6YtH2bXTPSZg",
  "key25": "3qMjF9c89kjtHfdMeRY7Z3bdKRS7XTNQciEa2poko76rrSMYS9qJBdwQU4ur9kFAJwzuoEBmhpymoJYavv1DwFxB",
  "key26": "SZBgvu6u9gtmi4avJihH9oixjJJgz6TEekGa8UkzB5zxcF17kUB5wnGMnuHjq6tKhMWCM7JZMQNTMGakw7tJFJv",
  "key27": "Z2p26TBeHfC1LEBxYnNTjA1dSBYP94y37kKrWsJj21VsWyjgFQ3hsjanW3kLkaeJAVepssphPpjEqHBd7XxLoNc",
  "key28": "5N3kn1xec5roEUWkafupycUZgFKhBHsPn7LP7Nqsn8jri4RVcjFNsCw5L39TsDbSd6AWjaojXJnR19RKNPT5NBVA",
  "key29": "2heuRDzrK8v6B8QMfCWL2GgJJLW4vm9KdaXZCRozvJL7UWaTo794DbowMkr3rZBG9FRGsnYoDTdvXc9dB7SHMnzH",
  "key30": "4n95JqVddqLF1stgDSB3xW1nqEpcse66M9usm6izv2sGm6o8VYAfuh6P2swGm8TcZ9iHqetUJTncKzUtMdVTi4pu",
  "key31": "2Bfv8Pm3MB669ME1DND3csjdBiSzCjbtMYCJJJg3UjzHtsMfsFuZ53cURXup6psMzbZyivt5LFkZYkvqCMLcBMqT",
  "key32": "4WbAMrpJYtrzF2pjqcqePtk5u1VzP42i7VU7hGd7UrEjrpfKUjoVVeT9WRcSRUhqz54uagCCgkZMNoVxoPGMsg7s",
  "key33": "35zgbmqbxsfYPGXPjs3ohKQhUFWio67bJ7cq6sA4oYLiHGfmWUcCpt89B1vhoS83ZcydK5ym3FWB2Ev4pP8LmMPx",
  "key34": "5azxPm3ZHy9ckyAGw5TB5jomy1oRJD2QSZsE3Dydbund13GenPyWCCB3cGMJaS2zoL3HZpLoHRsVfmNDsbYudhSS",
  "key35": "2kKzNPL543HNL8swzpELzMNsuLzCagDrzkxbw1tivMmp3xPnSs4P4f6Fi23wdLhXh9b83U3r56S2sbgg2w4Wg6YJ"
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
