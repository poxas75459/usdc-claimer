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
    "5bSBo3NmUeWRGd9tdrnNQ3dj5RLFcZo6XxjqhyvFq5BZjCzKMAvtKa6FghneRvk3ErScTPMRmHC8mq8GtiwzxJhg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4suBFspjbmuUYnDMQ8QddZkwWEW3tCLto2D8SyDwMznETgFaqYGuXdjRUS44fF8NaKMSAsSQNdMykd4zNTfDtZ5d",
  "key1": "48FVJkzpatoFn3cVCXzgQjbpgHeoMVpJu4Ta8d1pg8GL5mRd1zoKrYdQvyQgTe5hjPACBmS4HakURgDJtRH3qX6d",
  "key2": "4APhqMESXg56ykfNEu7TdPWyJg59bg7QoDmmnzCYea4khA7UziKYmPgoYU2faCejviFVjS3VjPDMdyfJRvM1kAbC",
  "key3": "2gWX8M2KCMa5ywsQY85gK5yxbmpZWyJKAHWiBYcPsyjzif68asJP7ht8kj6JsD6ahkwH1hCQgQZQ4kMSfYofwavT",
  "key4": "36rwJEn26d98DQPWzUit4hwRm4zp1zxMpqxGwaBS5Xg3N8wZRbHenRusAtXJvA4vx4qB4VCTepLG2uEJWsVbYb8U",
  "key5": "3HT1XSm6pQAJbiYCWSz5xkDFiFUfvYBw37XS9UvephTfUjFbBE27h7ookjxUauLx78qaMcxbZS2DUXo1EMNq1fTc",
  "key6": "24anHWcvjPbyhhwrjD8M2V55AXPkQeBAEr2c4XQN3avH4Ti5CSpxTQ3GvDKL57xV4yZpUa2ihfBgMzNVusgTuL3j",
  "key7": "3dfoCR6t2vA9quJvGrNUFAhAjRxjSJ5uv78VkWvCmqUydo4L8osFQZ1vYftCBPuBFff5FgskdrATsn4fMP8bPmxK",
  "key8": "FyXT6NYEGw1zWneawQR1epTkpzzb8hjSmWpzBKujRqoFeG4ghEhSQ4mHSmmTs6tLgZ3D9nSNPKRhNMtAy3EhNed",
  "key9": "5KehntxQdsHzxZebsnvpECc7efwRrAcLyWmJBWgWsHAKatfa21SAnwn5JpejzpyeiAiivw2yuEKXN42k23VKQeEv",
  "key10": "W5wBDwaPcPBXUePiTdGtStRvRUrjsBfJ21RAJWxtpCRzvmm1shTKWXiYiUa1EZhjWW17fYVqeZGu7gYGNmrWQW9",
  "key11": "iSC5vGpYRqgGvZttHCgnR1np79qXkS7Fjxmm2F416ubwkioqGi72tVQVdvuciMC2spVpg8tqayitzVUbCPcQjgQ",
  "key12": "56ZKPJbqpzk23hbzGb6pGFbUR8o1HCFXgJrVuCXHC9GgjGd9VEcMVESoDnGwf52zgmz5ch8hAJZxghLCChDrPAiX",
  "key13": "5Ny33QErauzWWNHV8hRfivFip2fcs9YDcZMkE49hJ59aFDMiP5uP3y5eTxaBrPguMEpuobqfrtN2ecDNa8wioGm8",
  "key14": "5vncBYMz4UsTrpDv3im8zyv1Bchh8dR5n7Gb9HFzCbyAH5wFSFy6G8CUMTuMVnxV4DgoenHEF9Wgc5yZVvUp9Pin",
  "key15": "5tyZofd8twtyQuZnD9mqPKnJvCZ7ijc9M767cg544qyGAE55HVzhrjxd8SbWbQaSrqtMe9qcM5YyH87mjat1CLQ6",
  "key16": "3eBMu495vCPNy885EYGVymxBh98tu5SvFKVMzModNSdTKCH7MrtUWnoyayW15Hyb6kAKxRr99k32tDqbjYiW16wM",
  "key17": "5sABHmjUapETucumd6gJ9ab1z3fK7vkW4haMB3CBQKEfgJvTuRBVShy4qNKGyN1khWHFtHBDN5PMTMJPwikG2mpn",
  "key18": "3gCeY4qMU41HKEwCzdNwtJEqKVZGpw31zsDPkLAF9JGiJVunuYfeQ8BRy95Vhopn2hvRXC9WvAezohFuk5Kca4mF",
  "key19": "3o6PfaT6zjZdEwk66JcqPf6MnvSSaSt4Rgnyrk2nBuNRDEXEoAPFy4ihQQf7H691QipspsC5AsnNotpQe2U76QpQ",
  "key20": "53KRDiDg2aDCxJFhuKc2SikuLuikJ8U3TqJ8S8U2mHQ69NPWji2Dm2cVkNfzvYvjUEsAU6ABySMFKA1KK8LQWQyk",
  "key21": "2jJH1p9aRdfgWArtMELSBK4NDJsErT1jrAd2t9AsBpZHVxFDuXS1KrfmnVZi7zbwyYznUqEGYmFFQ44sMLiCbjQG",
  "key22": "3CoPyvLrjQLdfjy1hMhMKBENpcbRUNr5rqkferwZJwyS4GBceDdGin7dwJumL8CSuMUfrktcpnxsF2xA5XDgdhUE",
  "key23": "5MCBUSVC7o9Y7qtkf1jcNVyu1Q43sFWnU8DTje2V42dDp7k5ZzCjGvrnLvcRqWTtjVzVmGVN1aeUHWMj7SciAqNb",
  "key24": "DizAU8BTsvebFg4MTv86N6pMTZS7XBFbCUMWYqoVeTTcsAfd5EB3ZTpgytNEobc8qngu6HAReFqJaW1BDLRNHfD",
  "key25": "4q5qVNsn5PYoVvi4Pbpyxj7bV7eceo2stouSd7uJdNTP8bcsHDkqa3Xt7oLEf2Nn63U3Luwr8tiNzSjGzfFFaAMT",
  "key26": "3XGdZzfHDetmv8y2NoHJLc8v1GpPXApnM8cAE9oVMwQKNAZBBEPwmUDf9stoS9GKLieynuzFRbiMgvayB6C4hm9k",
  "key27": "5sQFRf1nztrDhggosH8a4Z4BWrdcofALUELYYgA4Bdq71GiDFQuEw6F3rCZEnzh4Q89pfqcNFkGEo5KEsgGS8dEw",
  "key28": "5j4HAqpgzqn67qKn8ep9teTdqA7N5kwPQopxPkEU1rVbfg6bJiMtf14vAc7ikPjJvrm5HDNNet529tWNa86fycf1",
  "key29": "5Hqp9UoEvMWAHC83xrdeLrozLd47Yucgbs8Dqiq1qKm9veHQTFVFT8VRKRuMvWqX9Vg6JwuCmN775zy7NchzA7eq"
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
