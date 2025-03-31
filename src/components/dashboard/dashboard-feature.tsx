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
    "2S4sYapRPLQo96uTz21ySi6GUUeCGHNzkrmiuKbBmHDJEZyvXmKeBnoUt9FNVEooxwBPZZshrKnfa49LT8ucrqQb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xmQn4n8LDgmZVsSqKxqBRDmZ9PLzr7fTczusaWTLTDSnHN1mXXokEd6bGLmvqjJsXsXvu2aM5HyRaf6TtTBkbXZ",
  "key1": "S6SUxuZXcicPEak9mPX8j9Wfw7r6yjr6oKM8yt5HpVriGKAtGF8PuKMVaUnyvrLumLxNRVfW3tYQ93qcoKF55Tj",
  "key2": "4ba9G5iZVPp4Yhh59PHBHEHNpuGn5UYzNabyAVPqZebFqiNQHxe8eZDsoXtxxinZfhRqFutnYoZV4WHYkYDmLJyG",
  "key3": "2w2YXoN1aY9hCM4XS4vKURfEP2siGg3MXaDCuNrKSfDkYq3vnbN3YGishrBtCskkwpzVdApyDX5robtL8syxWCNv",
  "key4": "2issF2fRkx8A37WmzGkWpkJAc9YCbxbDYjxUhyrNjUU6G7VS5QaF1LCwaCqBqXRk16yzHaE4zCsC6GVdjrLq6SWc",
  "key5": "5bRSZUy785YfrE9dQAVgGe56SwpWRWypkV8AmkHMwQVfKJ6KFgWYhRUSW14V1A7GLuVjrEir5zGpepdehZmFmQkQ",
  "key6": "SCBva1pVUzTzHje4fF19oF2PqrmnzeC2fPS9NrSmnGStpcJ8JhwnMzP2G7uzjpA61hXmbipHy4cjj363bnaT5S1",
  "key7": "iUG5DoBKKyJvavgawr9CzUuLWdRyaugDb9WiLrncrRyWDPNCnXtrnShTmLimADw9d9WtLL1LRjak312uVzR6EEv",
  "key8": "JEsyLeJp8vYr5NfJJCpAuVYcnnmcwwttbb1mSm2nKxS2uiPLMz9MFcX4UXKeLf432wo8P4n2kZgkTc77tuqcCEE",
  "key9": "357SXqdZY51eYL9zopLRYdtG8tBj1PnbrUtb6wEzFLTtvSbW4B6LLXmUamkdssasLe3XVjrzGU9RQfdZ6LbK1qEE",
  "key10": "4U8HrmzgsS359mhXku635UUvoPDo3d2E6dqKhAs71BYQwoJp3gmNNmSDy8HV251zTkJ9duYD4uuarBEy2116nn7A",
  "key11": "2h2BPBhnGv5juZYW94YrvKP9iJAVJr8YGkgrJF4NC266gBY5Vz7r6kPYUhceQfTy4cp2HupJ8hjF6V2szn6d5Sa8",
  "key12": "3ymsZDyTfBbV4hQbVvX33oVjScq9CknsJ5nXwn6NN6ALWm9KxjqKhWsD9cqDidJRsVRGTRi7nU6T5VY5ofVP3eSp",
  "key13": "5NAwLWBY4WFjtpMkMFHvBUuoywb6KoZWCFkiR9EApJAH2LUjeUhuZaeqy2VHjBW4cAPoqNdvLLN1z8zHS9Bn1rtL",
  "key14": "4ujjvbsnYeHveKv2afsgTLf3N7iKvsn4cBauxEsnRNFT91tRBiXZM2SBNgDbhXT2HAVJxHdci5qRDNsAxPZMc5kF",
  "key15": "vrGa232DTP2dm33ExoXQYNZagPGN4GQC6giTvktotAVETKW4DnGzrBL7zmVL53JdMsNkXEPcmScjvyfMKvsQWqM",
  "key16": "4qjFDquFDHnvvCMzYMxcRcUk7kjNiQkj2xzNuYN6r9rELy53wJkHQ6Bs3kb5Wn2moS8xNTfHEwfaibhEm8wUEign",
  "key17": "5nKrixrtEyFNY7eNCVw6FNoMUP1dD6sCgrAoNg3KFNMdxQdRmVMktAwYJmu5GxNLN2MD1b5fafif7JEJ79cTQpDN",
  "key18": "2dQG1sSYDpL5EDRHWVH6EEBwtaQVZJ6GRrcbgcuFDpdAyf7UEKTu5ywqBSmummCgP3iQBRuPnern9osgdhyrempj",
  "key19": "2geyzHKv7rEfnsscmdBbh1axvGqdieVTXhndrQ5hqFysCc4AsJxzheuhXpsHR3AYWLZEjaH3soaKvqRHrKvFjEoP",
  "key20": "2nfQ6zbZdhs62ynXSv5VAnWk59yeE7FUZ1rsDnzUgFTMhpNesRMoFfziHbjSaUYMbrkZvvixDPf8xvpTfeJKyRon",
  "key21": "kwG2co7bkKY72PM3U431iokSfGLgAk16QCqu4xz2kegyMQ4Hx7xxBxK3FwyRwxt5ZJa2tWnestGMHMGSpYUB17H",
  "key22": "5zAhLAgJvnHw3Y8jSQALvEV9V7ApSQfctRs8CU7o8SvjjEDLnfTrTG6HH8qG3DKBp5pVAtVFUjSpf6EbYsJZsMHP",
  "key23": "2MJXNPrWAqQc8vME58iN6ECBZoDCqinMZhGzgYjZZfKA8UCLdQSj58oGNZAc5sJre966Nd3ziGW6a14rJMJGBfQV",
  "key24": "5QaN58sPQACtz2Mp4968nAcdTzKwQVzJ9vHMRXoLo39BDR52nbkamgvVDfDSewsBatHRZPYvEjfRaPNNNJkRsdyD",
  "key25": "2wKjf3iuY5gybkAhbB7H8d6SS5AduEQuoBUgcQVNLxdRB13mvweCsUcVgxtNHN64cPfGMc7JwV9W4375TazcCcCC",
  "key26": "PnZdtNoFKUVFKvaNCxZq3rUVziHMHE4DEzn2kXZbREat4wsyL7HTR8tBQ7wxcAsqUZm82rJrZDAxH75NLRbMkhm",
  "key27": "5msuDE1bVryddDmV7BF7YxsTwfk9upxNSBdwBXes9VwMu65L8QBZXLCsqpA7arPsURXKCiNAJTw4xqn5vsRdTeH5",
  "key28": "5nCMpdLvpLvuNVTcB4XRXEVfvAuqspJ48nWh6Ew77d8cTAgp9uCzsuyN6FtAecPMfXPTreRfdsoKp7x4C3D3VMSr",
  "key29": "3RYwJXXueRReNUmg9pyQ3jY32ypjquMRYMyRJVJ7aKx4CNYDkiyALUBe5sk9Sfn3m8U5dEyfh3KuJkxAFK78mnJD",
  "key30": "3aXteaJvZkdadK1eRcPXRqxiqZQf1YvaBr7MDLAekqoAm7gW5Cbqiop3fkMe8tMLcf5T75ydu4visnJS2warQtiT",
  "key31": "4xjQZsiLeHPJHkCkHidkk2JRDzLHPvCwjwC4YDvHRfUaByBw9ph5UxthjviEos1Xz81TCZixxQnVTB96mHHfPRPb",
  "key32": "3brGtnfvh2Zz7KqVnkhBeT86XoSxRVKceP8s3Jfd7Y62Q3aw4DPSTC4Yc4uqT9idPBaUuZtR1x4yKACSxekvpsuw"
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
