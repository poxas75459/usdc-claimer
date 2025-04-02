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
    "3SewqJCRWRPBWGAbLMDZkwb18v1Mf4Gmq6smaCpW5WWpDqLFmrumMjAmUjVqiTvafsnGNFKCRY18Xx8qoSMUxcFH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uqPwt6SXxcKD48yPGjNpWXg6ppxfxskHgsasjKuFAX3wahWq6rrhMc5ZvzQy6NzXKgR6PHxKoN89X2EM22pq6Er",
  "key1": "4CgVPw72tbuSN3yzqBpzNpkYkkmMukkuGAiPqEDDjkCgyYnWEhSALcQ4PB145A7yxgWb9MpK5Z7NvrJ6Uf8UB6uy",
  "key2": "5zGpCJpnjShjL7ZXe3q9qUBeEqZsH9mJFXCRhcENywQqQTsMt8DA7Y7sBSmy4w6gkDRNernc9eh86cXpcn97CeaW",
  "key3": "25FpbXFfSBQq563sHDfZe6g5Hhs51NNB6B43afaXLorZVENUdxsAh17xz26q4PnW5uqLTWj6pTBqS57ywb5hWicp",
  "key4": "22RjsRxeiVRkwAx5tww1kh1upG4KuL5fF1U7bHUCbp9G4XCfznoQT2MnuPSrexMZ65sMufKMYCLbyqR3qASxQN9X",
  "key5": "3SGybfKqc4Jo4Y8zCgFgaVkKkQf4rHG5vbvVq56M8meQpnKUGbAZ3akWFNBBPr2n87uF554iie7GzcEEVtQZ78VM",
  "key6": "5e9VazHABtDXXeezG3hdPmpFeatTDfE9cpt3cXRKPCdMRDLJX3MjkD3s5PRshVMSTM442AmwVMbLUVomNB2PUq15",
  "key7": "4M4epRJ66TRzyKmNmk7XXn73B8dvWbTizRx9yHZqpya9uiKyNRh8GRsWm4ZeynWGdZZdE3xFs72zqpoNZJyZ9Z7",
  "key8": "Jr6vruGGmpNfqC26ffgzQCQ5ovFJgZ6PaZaNCjakEp4Fgp9PZ4QPoxdJ5ZU7ubk6x6KfpAvJayGtqN7aFG5rSUU",
  "key9": "34aZCXtKyVXwd5Qtv9z6dwjsDdyW91m3a6sRqPNj2EAx6tS8RDAJD8XxwF8Yk827i1Rq5ci3NX7o7LqSvAKtwjfy",
  "key10": "a5pJQTQY8she52rYSmmhv5yT4UGPtAgtCjR5nPQnXpkfKVF9YnzV6UFkTGsyqYJiTXYdv9vgZYbidTqKJX7cPtG",
  "key11": "48FLeksRvzJJMDtgpvuj61pkYvq59Tqq8KAbv329QEoj1skQFUrxLwqV414b7yu7hiLht9NwP1bSiPJBKEQ9rBV6",
  "key12": "5siwck53FrgXyheAJ7N43yc4T5UywbUw42QbFzCRBhAKHxTmEvXiwCR7Dq5rcxPnYfMcukScNP844siy5iZQvK98",
  "key13": "2iFFJDsnxXR6hWhYyi4xAY5XDkWEi9qjX2FrtcpntN3DXxdPEswPU5gM2PaGN4L4TNNPWsxrA6NXxqXVc9naACTG",
  "key14": "xfhT5BQTXAaVZ3CFZpmrrwPbv4tvJ9xQYyRYEHrb3HqYFPWGtXBTtorHyo4yJrH5jpkznxqfRhedm9pyJ3Z58bo",
  "key15": "2rBQUqgNArTXYNzfvQo5EwWosNzye9RjjoXHyNiwzfLdWkXiuhmTLZsdrBEY4aZDm5QCuPwmtTd1mjypQPNkPJVH",
  "key16": "2DjuDWCKWe2QkFGLVJ5L5ssaAGHSJiXAZrS3bnyH1rnm74Si9WdWqQ1SoCHbJKwpeV3RTw4a6m1AozxuvuJQP614",
  "key17": "nxNCzaurwMuo5bcMi4f9JVmQMTCVzvDoFBpyC1LHF1kPdYWRrSX4tPHezqt8qVgHmonmYEMSvQcSaw1tdCd3XL7",
  "key18": "2yRFCNXPF1KsACm9o4C9fyyrRSyznWURUnjPf3DZrzmEAouvERmVJ8YwnL8MqdcJj4cLz4h1efurZJHFT8mdg9Lp",
  "key19": "iB4QPrYJHHdQGFYjRCJ3kQbrrYtEJkkF8PmJ3QEk5nZ79PCkcxHe6Vcy2VTsBYJ9xX4PiCwduHW5hmyzyprai9E",
  "key20": "4Q8F5ZWxz68Lv2H4JN81xtdVf7iyPpSHdb34BHCyEVYZQfN1H2Vo5Ehg6VEZ4WBumpp62n27MpvGL7NiWt4ABaur",
  "key21": "CC4mD7gxk1aRLV3psYkZCocWexmQYdTzApS5eU7v9kukFF17vArm7fszNDivhn41DB4RUyEJG4FfPiXpFY3nvz7",
  "key22": "7UzGFHBsXYCmYZBXdhTWkxBYuNg4nGEApYrKKtfuhTn71NqZAarybeu4mWdBvR8agAwxDRsnNGdALKKQC81mzkG",
  "key23": "4q8AfMA5H1LzvGiGXP3DHPpeocX8AELtfk1ceAnVhwvi1GTeHhu23VyYBE2AeY8aSN8UGL9HepALd4qB5CoRuzTf",
  "key24": "3q9daXPLa9Uzcfk4obKh8Xr2puUQhi7bzNVXV7MUipQmigp4joV6sRjTW3dLee8wwbF6BG9pNSstwwGUywBNxr9u",
  "key25": "3GZ5dQAQTiZ5wwNwjQwDtzC5JyJjbDaYoVHL1SxC7GpwkoUJyvjdP1RoZw4zt5GudsVNMGBdRs1QPncfZyFwWgvC",
  "key26": "3Hc2Pes6y9no7ZpzWCDUnzWTP5oynxvsB5UQyiNG3XnUUNkaT2kNAPCV3XU7XcWQeYqf8UhzRqMdKsoQDMcKRAeX",
  "key27": "335LwxeGyr2kvYiWDNR1jHYtFEjrEqpUojyAfDREgqhm4KLvFPbDL18BRqotMrzk9hatzTJ7cYGnQtbZjYohvbW3",
  "key28": "3VGKaPqocPdYW4X9RW5uBBhsRnh694svc2BmByBuAavaMDC4tbp84r7V9dv579ceXtRtirNZLAZPoYrPhXUQ7tvE",
  "key29": "esWeTFhnJNLeaadKge22Mu8jSPri717kmK7Yn2wWP2xbA8N4jFANwcpk7Jb8b899Lb3Qnps4NGzGKWujp16QSQH",
  "key30": "2ykvhf2nujP5S9Q5rEFv9J8XNUXY19RHrekbwjZPvM32kL54prpGW5yaKtrD9rZDqZUBzZFyJrfk1z6mvHKfkwbq"
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
