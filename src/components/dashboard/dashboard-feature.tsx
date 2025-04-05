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
    "5FBvpDruyRgamYbKiQN7hMbxEtVcWa8gLuqXoJqyfGDgnSYAzg5M2aXFRxmMQNAEe5C2Binke8s9QEbexPe9tajR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KiBkfvxbBiJmvesec8pYnLgDPEu6eiQcivkFmr2saBiq96d7y7WcKfBXXnGzsYNhnxgi743krYTpWjgqU6LJs5j",
  "key1": "5DepPXvpZy3hHDsXDH1zh57SQrZkMJv1J9euiAUztA3UPfXCbJFs2U1LBJYQCUfvpiAVi1oaUCyPjaWWJowY6T7q",
  "key2": "4nj1mVXHYF9fnTSX1jsbdTc7cFi8cTYZ9gKzxYbAjM1vfWRdrkFcdDoSArnqs4z245JEVx7CgaLig6ej7KAeKSJY",
  "key3": "2yB5i1rwY2rocuafkNbiCSSEpYn764ffYGc93ia63cS8YCS4V74DYdoroMVW5XVgS7VFYkr7wjgvPTyQV85BgCXg",
  "key4": "4tgvzFxn49to9DMsKXY2g65xsePXq5Xiqqg9VkbzzSsbvo3qDUs5BMkz86gapvkvFqRd7ES1BqE8oj1TCD1ocj5p",
  "key5": "xVTX35oGgALguXq1VdDs4iLNQFr2HGo8tZpSjYr2Fz7QDKhSbiQN77wmtz5C7JZ6KaUPhRVKnqNn39CxsE9XPnb",
  "key6": "5begJR2hJhQzZYCN24Vzi6HahLynESAWcv7Z3ecTYztBhWEsgKE4WBrZFRCtymDQ2vzHEA3dkLoD8pRG4TyGqXBw",
  "key7": "2fBLHLn3WP1KYX58uR1z454twSnVPr65g24fhakCSkSnroj5MAinUC6FvNGhMVvfmy3gwuTmXiPx5VXaCafe7o2S",
  "key8": "4dWmy3ZyknHiVvBvaUBPTYMmcbvghdWAHehWk1ttW9ckKTwCAEXo2PSeMGQTHn8x4gDkww37orYKovNnQXrAC1yH",
  "key9": "5z59FtCMDN9LMH1r9pdkXekkkf3eTe5b1Lg1DC2v2YpaFLtLbebPZ5dyEfQiRKt7kZKp8zNsRbPtjMSHs2g1tDrV",
  "key10": "4H5cHdeJH724W5CvsxG7wWF4utPGQADn5VR3Ep5z7UuexAVR4CCNqm92Czgyc8AKBCZEqxd6eJBfUiwvAeJ9uX6o",
  "key11": "33YRbEbe9acvc3fvdGdrvniczoiUpVAFmNto9Mbv28jzUxzXx2cVxUVNDVBEW6ZFm1TBk4wyRVNWZKKGXFNukbBH",
  "key12": "22Zsm5c3oZFrbzXu4Ns92QcWBjdWL5rVuMFEGKyJ3RUi6Utsjpaad2GZQpM1C6ZSAwsYGWnoSZUg4Y9Nys5mFH4E",
  "key13": "RPVJQdD5r5btwXxYE794fDDWijobRaHmQGFSiCmocuD4JHwFRgrnDyB9teiJM88UKQ4PBkAD9nxCPR3AoUoXUr6",
  "key14": "63LVq9UFbKj4Mp49y5KR3Hd2Z6V31ZFa115v4GmEtvvSCeq3kGwjjCqsD49UVeQtC1FvFC7d7QoGDVG3z4npJpkk",
  "key15": "5rQ3iXMB8YakjRrNfANG9QK1f4BNouQg459TEgPRkTtiKTaPbCU67WvBSnc1cRzmtu31J3AHVXiMWbhQBzXC6hVA",
  "key16": "2YTydaSNdeHFmXbzsbUgzBhMxbPcfUnDGGyS4HZdpFFP3BQVy7gf2nEiuQ4VymiMgfkhJqTWn1HSmTv1x5hki73J",
  "key17": "y9Faeaz5VFHXbcpfjGXMpdWVjAhKzmUAah2YJTuBkxoLBt4SzPsfDJa1czeKCCYUaxqWeGoFNkyp9xrkq2jGWo6",
  "key18": "2Zski6XuJ2vhxMMKXTJhAez4PtyFcn1uZak6RZnNL13o1zVJPZQsvGmGKB5xQnZqXbmQxJgvXXHMkyhx7PLKL3L6",
  "key19": "25XKPPU1WSioPqRBfjTcNTMxUWqwxrQmpMCRwPWquMb7EqTJtFghEumFPT8brhzPqm3EMfT3oRqxw43eSZf3x2Rf",
  "key20": "Y85kdvcqojhCeggz6QBvkYE5sh94A6ruxz7qqeb4Q6kvxMVhdsqMhB3j64nUJSYmmgsLseSDDZafoByXQvmhquR",
  "key21": "3YYUmH2vwzoAgsexRPEF5wdGP1JrGsCX9kRHsoUWeL1nmGERBpRQsXjzMoquRYrvcxrZbZ2zu3XqyMkutiCvRdTt",
  "key22": "sWFzykbFZy999WfX74Gcb42Mfzc58VtjJi7DL9kAgoU2ZmBy8x7akUcgNxBun85okGq3Bg4q93hvXkitNAYb8aY",
  "key23": "4eLxxUvpwwAftKY1tcnKELQr4vihrF6cNV4rAPaTQy5CFBzUUkvW26Js6Hy6izHS1XDKJfjTLSCMwFSuUXJcmScR",
  "key24": "2uimu7SpKRoAbNYbwuRhbyWPv9YtcMwwMcL1bNx9Cuf2h1QhUsQ3QTiAXjjSfJfHGddgspZg1fBik2dECxPaNtdD",
  "key25": "dft1ymdq2DVM9S7DFVWmEXsjeBx6jKYVrkUtABRm4ePQcbQe8VRyVPF3hX5kUFmqCwk3eYwLsQq9DHxrrcmc8gY",
  "key26": "4iU5n6EzCLkWGbgteFBBuRixF9VVTbDvH1o4zw1VAjsC1gQESCFNeQLfvGTZwV3HrieYEGdfcweeDZMoKTF2tGBp",
  "key27": "cNRFhCyJJk2Xabq9ufc6KTVig17P4W1iNmdJErT7zwRVXfuZyd8zBch3NFVjvjqWp8faMQqLUb6qLpuY6oRsFs7",
  "key28": "3rYvoxER5n9KmXz283vhnQCdm4NYqrxFZ4xWg6MxW56DcSATpUE7ozEQtRNbH9pAAHhgsLB2Hz5t3RDQKh8asL2u",
  "key29": "2u8ateC3wvSJnkrf5QbhwTp6rtKHxUpEANFMx8eD8WZEXRR9eE4b9JfjyD7nhbRwg4JcuE5qREmkQtMu2Sk7bTt5",
  "key30": "QcsaWCjqrxc894jrSYDdYPvDHp4YLLhFzRcgzK1Kqj6TxNLBJvAWqZ5UawgMv968MPnzAvBjCcxNMK8nJnjEFHy",
  "key31": "5kMZXS5c6oGTWpsxoBn4ntCsG7QGKwHQyRZoBYf9AWpNpZLZnJqhaMrjG1W8kiBfzsjJq5oHf4HRudFi3QHdmJ7a",
  "key32": "5uhhpSjoawtH5VyVY5Sht5bTXKanQwcqm1oubuyQVg1hri85KYVVJL4KhTErtJ55sfXRqvuoA3wJWNujRnDKkrdZ",
  "key33": "3yf9gZQYrYq5LS6KoMCRKLmUrGugco1QyeeBeDjKYpYviPi5P47k28wZPJT35HoZQ73VgYys2iDS1BscEryCiQzr",
  "key34": "Nbr2fvsQYzQZTGQxb3y6tAU5oQksy4ADQYHgbcGBVSCmJtDkWS4c8V3hm4xkeAzqsk9dhuLN3ht9R5d1ZrPuu3H",
  "key35": "2Rgit2sQdTNygfhXDZUof4VcQ9aabdXRAvnNqXSnejXXTe7xk3k7tMsGrnPofB1PXc4NUyY7BfufvpMjK7X1F44o"
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
