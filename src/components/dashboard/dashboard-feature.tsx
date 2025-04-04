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
    "5Zoid65vTm2u5EJkj34dsw3Ph7CAKMFNVYrEM2Yu2wW3c8oMrGud6Vcfyk7SSQEjwpBQCYw6FqqxEtjpqvMgGiQN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XtoVcM96cvRWq37WRq6FRZZ8Cv4CB6DuRmmyy6W6uXUhre7ZciF8jRnMcmxT5PtPzVQPq5JMuyQ3ueG1Ugt8XUN",
  "key1": "4YyDUD5WrAPNgxTbfupzuDqA5Ni1dtXb9F1zqnAdvjyYgdUjNZqQbjr7oQMUMrT6YaroLJgvPabuQcQYQKyhFwNw",
  "key2": "65WB487PKyPn1pUEB2UuyDzQaCgxMk9Si3vVAbZKe5MFRqzj5LALszHNJxQTtst6ogqCxjSNEhWfj56m54NRCcpc",
  "key3": "2UKvAzgJoGuHDXLpr6tvNYzgjJ3rEhdtVDXHWiEuo6hNzh5CqZJQBHx3zvsWSHN6QccVXxd8NgmSMGjt1wVnfqKH",
  "key4": "2pLt2pz5RdSApiQ5v7q8Vxjgmhnb6cokiUbRT8BfR3FwsA9YDebuFH64dcDnUxjZoTEBLkqxbnNmDRiQGgLM4ssW",
  "key5": "3AuuefGiXiz9TqBnPPQQYKT77Xh1AL75azT494zdkkyTyrJXKw3aTDUYGvTuLsRnk6agvpZvfbNfGCnEM9XrqRUB",
  "key6": "3LB5cr6vRYR2sWuoZ6narpGGViVecxyCXEzizfeHYuougddw3QzNZMNWz5hMXrzp4ZfLZRc7Sm4mCaBENtPWXLfE",
  "key7": "5VMWeu7aB4Hp89x4hJfkuYPRpNW53tic1rYQ2yjfeTEzGS1uZKwAcnjF6bqRkhQSTy21Ny9dFNq3WJCL8PvYyuBJ",
  "key8": "dJEBYwAHZcm4gCbuwAbQiujxG5xFXvTe5xX3XdBiTqLFsCVhYGa4FF46sPs54o8hExt69XtDLAxXmfywZ5nXjPa",
  "key9": "2s7UejoZFTq9vtGVFZAPwFXUNUEHi3UJoNcAAaWvarf2BPC9pnNZTYMSBF8L5qLSu1jLMSPaJfmFuAUEg3rBtM1S",
  "key10": "4KrU4MNiHuyn5Kzrx33o1FDmwKQrfCTgJ9htx1sdB8menKwZUw6R2KTJXJW5rnTADud1aC5hkTCszChXqVWwpYs7",
  "key11": "5qf7aWwRTTTh1T9TcZ12FRXJEF9p1KSmHmApkeEKidxtTe7BwGouhLb2WoDAs8in6wf2TUzU3t9JBSuSB4gNL87X",
  "key12": "DGbTTc9BrNXexX3PofL8o6QHAAGtYUGVb6feifqPXGgmn3ciZehvCRxhzN84uPC2Pkw47yiiqog54oyVZovGQxh",
  "key13": "2ceSMBXUwXKdW1saGM7XCZgmccpmSVmyKVVdGsVNWtjx9PSCqcovZDSUVGDMzf9HPpFGQP8mpAmKEDCxARNLfU6A",
  "key14": "3jmmb3Mgj6hYqixrhqbkdTf4m9kFAnEgF6r1ZHDswAj2H3TErqiK3DEDytF3EJmeWp7AaGKzdyA7mdXk8QAzCmwj",
  "key15": "4RW8Gm4gVrNfFQhZ59LWFEoYpioG5XbiJ6uNv9bDJe4Nw9BWTbDci2o4y3E73s7XMSeYoSNXV7nb1ic9J7vApGzy",
  "key16": "KVYLd2LUxCnvc1Eq5AzkzWWZpKZxp8hyf9e1JwCQ2kwmgvtmDVGeaokytPyixMCp4XDKUb2Cqr2HYXZhSxFAXkB",
  "key17": "AMcT5FmmurNSG5Q5QUY8Gc5DX6evXRHmmrHFAG2XWT2UWuGvYAQ41sbtRxn3ZbrHumqDMuDzQXseFyN2qfM4q1B",
  "key18": "38sj3NSHiFKuQYVo4xoKBxiNqZ4NrBUY1f7fiKSQ26hafMBuzCcE7ZJjRnHWHGwHxbwpGiLr1jp3Baas57DFZQYJ",
  "key19": "1TM9zdM9RyfP2Z4jcY5NMRhtvfKhDHanW8p49LUnvGmVtqoNhxf1WATEqi1twpSVPdrQTZPCgQrWviR2SEvkW1e",
  "key20": "PJZAF8rs2h2oi6LSeDJuEu37WMvMHy5pgzFu597JmZzVedH6hfT23gLWGYm9Yi9fhkzvhZkZwm1b4wUEJiT3erT",
  "key21": "5VnsMYi86po4uFCvjDggg6Hu1jUi73grA58VyF41Jq7XKPfBVuD6waWJoNCr4YjzEbiq19hHsunuoqvwUjPbpLWx",
  "key22": "28HmeMSW5iejAAF49NLtHyCwPm1wuN5jGP5HCeYojeESvmrMjo4hnQDbQmiUx7JAUnuVnRE5bmhvRCpM5mMpG4WL",
  "key23": "5w9Kv8hy6L5wMGjcwjWPfpvbYpf8Ah7RMt99bsmwiCMhkvngsxa9C8WyAsUtddNQoH1VRxbYh3stXeBs3Rjs2V9u",
  "key24": "4KTFSmMFs73tNnnJTBZ5fxjiMvuVz4cJv6bt1X9J2vqFpzSDf4Vr5U7h5X6ZBqcJhQiAqzpBoKUYyWK8k6Emw2tj",
  "key25": "DcrSaoXaDWGhtms22GfAfoV4SMrWGey79CbiNLKumXqkd71i4Va6VyqPQKXUVZHG6e1Ur1VY2UYRerDJQn94R18",
  "key26": "5BLsBiPB9SpvfCqYvZ9456ZxNjCznrRZSEx3MSsu9WVA5PyJD2rVaUG6beXw6Z3esFuRsK9hBL338Q4iz8t2ob6A",
  "key27": "4z6cixxQ6a335B4Gfuh5kUqenTbr4svXzEa6X1bHGM1iKURrRbaJ5fbWiz8ymKqc3D7BXjsGN7XmibZwLTJwyv7P",
  "key28": "31M4u5gL3tPnwCPyAUrjdPeLbvh1ic43o7km6hEtNreiYc98icpRd3FVxEAVSX9jjQMiwvaccvMoVmzezb7K3mtP",
  "key29": "4fzcvrH2qMJ8EudjmeHJZPWmxjSf1RvVK7EHCqkaR8HkMnN6GMX5KXH8e3eJAZ6fnUTnhA7LNUdhZxhLq4grcKoA",
  "key30": "3zhEVMfKqUVh5SBTQbNRVTcBx7X4htJZcuDekjuS2uLiLzifquzFkjPyLEK5if2kxkwsbyFznu6UJ3PbHHFTJC3Q"
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
