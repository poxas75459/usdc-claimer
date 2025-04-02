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
    "528Y1CGeqdzFrwkmPZ4FEDYpqjj4F2FrMG5JT56vAP4qXzbFsbLgTDmmpbTBPRAbAV5kpszWSEoY1igZj6JMH8pK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YMP644se96eaJTdLmtStck2b5jPU17dS23ab95qjfw4pxn35mJv1NfQwNZPPneYPW1hyhLgTuyhPTc2tNdusf4x",
  "key1": "3zVj5aE5KqaWNrrzQWWS7BTaeJGogk3yYtJdnExK9RX5tVnRnetyJnX46pB67GsmJdMtUJ6sLsGE8GqzRbzHxrsP",
  "key2": "2Jv8vw5obJX5yBogbmRVmYxdKpVuXVo4XkU3ZHbV1ZwDFyFnmEWTfL4i9PGPLAphjsibySHQwLQ4nAymZF4CD22Q",
  "key3": "5ZxTn8h3fJUGX6RFea3xqyBxwDwQ9AY6Sqqy5GauN7sV9ATKuB5huuDT3JQgoGwQVu9Zk3uHbNbG4XjvtqfyJRXf",
  "key4": "2Sxdbxryn2jmMzN4kvB1oR5sNRvmWEPUVXuE8iFQ71tMpgg4Q2FkYupR5Zdc2W4rWB8K1EgtVNNsqBQtoQoEvqRF",
  "key5": "5HaedJvtQbkre8vkkfsRT3xPiiySFW3R36BGRTyCaDfJ8T62Lm458zLwoQqU6Mpzzo3fWJEFmNecXjEaQztrjeWV",
  "key6": "Xv9ASh44exsdz2rPTcZTmpjMLw7RiXtyqBi3zgqVSzEB96nEDebE9zCdJTNZ9vNQe5fqyfMeAs1XwCkSPNcBVhi",
  "key7": "2VEXU7o7dzFxTX1pp7gH1XvaYp2YPoxjWubddvXT4rUf5Bw7krqSPcJrSsZq64Cbicdvird9nnPvgNkwkpeam2uk",
  "key8": "54rm5TTXWMh6fV9NX5UkYASmSB8WPVTJmXgtEskUZSMjr3G77w3pRBDzsZpmBmWCQyTLberbkKbisiRA6gAcWNLF",
  "key9": "R28e2co7EDUYbot9nxGS3oPcDaX6u1WoWFDAeLNYNiyTCRgTDTCDdBFR9CiiDF5Y5v7fTy9hrgnDEfRsvp5JH1W",
  "key10": "zHxUYLrckVS4XdbNGLhqLAmq4gu9VrohUYtVr3TL78GfmZCNuj4SnrFxMPqGFBUssZVGGem5MD4EYCcyWwm1xuS",
  "key11": "5MrpQ9ku2QB5ChNQtENQ5TM53YkSv8NPpaccqvoLCsQrtXwAc9xZ56o6AEKya5RGsori8NRXLKZUq2yu4pz6GuMb",
  "key12": "3qVqvh7U6qYtc3VjDFVa2JLauvefpMR8Zpkvw34A8MBnyDssEkAuCRExVpyzLXajK6Eov3V371NbQvTqtH1dNaj6",
  "key13": "th3E2ykNXtR4M7yL6xVni6hznZKtgv8LTar1u2QF8jaEwoBWEHmntEsv9YFaWhvzMdfCk9DzS2ri2k4k8o3VhQ7",
  "key14": "2rrBHnEosSx644SDGRSZWtK592k2SP5qizSaTnSaLEZa6zJV8AzQbFXXr27NMCY3ZKvjqsbYM36BShSKWhcT1R7R",
  "key15": "5qMJgq78xjSUX7vDcrL5HzG9RAj1igodwJFb1qQjL5v1NY6MXXtskvXTcTvrWzH3LmRbuAEFF6Khcc7N6V2WPsyh",
  "key16": "2nqbjjgtqr4n5V6AgipQ4qM2mo6PgpiieJxEHkqaGbBBTAHj13GyhVL7JPgSHyUACF2G13fQFDS4ZNUn46Sw6JV",
  "key17": "218Wfs9rV5S7M6PA7nMDo31pdQyuah19mJiNkK8fbTz6npwyXt8nBnSffrZm1CAwRvWQddX3a3cd6658F9rykRtm",
  "key18": "5TaqjHABjDLosDkDk8dX9CA9gD8PMyfR6DB2neQMej64ddEvod55RY4CEwvba4edL7k6zfxtMrHLVxus5U5gfvQm",
  "key19": "5wDMCZKYWbzeSJdgSx3KjPGDeZJbMgD7R2nyDyJFUHewn42ny7vsq4xvHrpdsMj44CK2NoStFkdsmMcTEwSi3M7g",
  "key20": "2TWUj9vnEHGh9vvt3qaSJVYCPgNGrrPwE59XZBkkb1BDT2H2fFqCqmtsAqM4S5M9CH1FfiGvbyrXLbmTqK8rjXtq",
  "key21": "3bbUo9SZmYnEJgioCM7kNer6FQuAJejnDyhJzX5uzFNgk4BkSGtg1buQTRdChZN23EhzGFa2oEfGFPWTxcfz17Ag",
  "key22": "5wU6TdyUU3ViUjT7NKM4gjbQtj1EKtLLSx7buWTPjyXbLBMZNV2dnWrByYcn1QkEAfjXfKByLRGzeahc3maXbVre",
  "key23": "VrcV2RvFppwrSERdV3DkBd2s4cKDWqtL6qQBSuq2tqDetNr8PYzZFqNDqmt7TmS3cWxKWAtzJ31p2qX8Ma2S1Ex",
  "key24": "SV6X7YWZrjd4hxX1mnaWHwgjUguheE3PtEEGSKr4Y1ogCnamvVQJdyRjTHJfVZkdmxdacxbQxSKtRbGoSp8BmLM",
  "key25": "rewCWCRbLpuYWdhcF5RL3aQt353UqUTeZn96LtUTEZd3CC7sZ4hk3jRt867E1kUg71AgV8VUhBWsc83Bb7gxi4n",
  "key26": "3StLsY3wAy74idHknJnSJwmu7dBMFwL7vcDERMun5cQVdduCRHXmg1RUoT4oghGqkpgLiC4f3G55URyrGUVEzqTm",
  "key27": "3Z2SpawhhAmvEs8YRp3RfDW7tsmrkbvZmuGQKY1drHL1EcmGLyEY6zGqKbiahd8HhQNCadMtzHDoxnYx28v2nLxS",
  "key28": "3tkFAqj3KWpUbpMenAe4L9gP1N4Q6GmK7iAn9MtCUYQjKqDdBYPTk2eCPqigyWoz8uaFdfL9wmsUCbgNjYWzKEGM",
  "key29": "52tz7SqyT5sWdzvFLQyPBZUsk65nujD3zwLHj1KKGwp3YkhaS9kdSCNk8WiiV1UYH6WNNYyTFoUegyd5mr275wJh",
  "key30": "26RTVg9p5mMLH81JhtAaX2NibB5QRvDB39KV8vPMCciYRqTJAF4DLUhgrkxiXRTmELRwbt21fZtE8j66dKrkNqna",
  "key31": "4fpwpJg7eHWQ5FYvapEPtTv2o1vnYMTAM4Pggyb676aLDovxTfruabaZEqpkDYPeCkn8hqZ6ZjTJod7ma5fr4C9a",
  "key32": "52Etp7tx7XQ13vKwxQ6JbUXj4DXUnAGdkUMdBtbXtBQguEbDvAvbqL6TLAFdyuDsdoaL8EXFWNpHf7KEQ9B5ujQM",
  "key33": "2hDkCvzXgFjz5KTCUUSxN4gvzH5UCsZW4PwhQfGWbbN2ZjQ79QZs9sCEquj8ct3fN9rYaDRXxdV7ZTjQ4BbhpdWv",
  "key34": "56bdNmZdHes95bQsjBKBPsTMfdBzw3UZDK6j7UrGaK3pQtnkWxzfp3fd16QjzFmYkXqbeMK67AURxP34NZstW4rv",
  "key35": "4bwYLMK4pSgiWh4d3s76BXrrLoQFmn6iVtQ813xy44bcDnc27EwtZE7ozHNFUcAjeGkgu9HtTa9ewnHNebAjEaDc"
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
