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
    "2W5FsfT32amkhmrNJ4DdXe1QZB5e8Z6tgWAXNQLUmYf4WepnWBhKjhrjM8WCDuWUB7fu5rATtjEe1fhGCECtrTQi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hkJ4y98R2EGArYUQu6Q9YwPvx5v471Fp4KFMHdiTcZcyUnPv5MHFQBdCLwR6uBzGLeJHaBoWV4BH5w61GJDUdZp",
  "key1": "5HXHUsHtx1cfJj3RuzH7TwV8Ui54gcf4jkesZxy2aWLH66ExrE6j5a8v8BbirrYnTrFtnY6UuLYEvg9jCkJKVVHo",
  "key2": "56yACKyB6CCGeeYbKx47k896ueUGGr7JY31Mjv4nD6Q8JFu6DasUWun2qWf1teYsVGt7KPbZCxxdRbTTo1WMWPgT",
  "key3": "bWD767gEj6ytVqU1XoywtUjhxquQN8AhxZ1mJCXG4apZc5rbLW8iAF2jTpDRKYdnXL2gshrPc5TnHERADBbhyDY",
  "key4": "4wgNxkLvQCQBcDACLK1o94L1daafh7BabCtSSPrZ7xQPkBjc5nyBA13DTvcpRrD4Ntatxo5xCQP3VpN1i2FkLJpU",
  "key5": "V9ZDxavymGphZ2kSa2fUt5UXR3SXXix23NtL99SLEM3CRxBXG1ETR5TEfMnARNvELk5FsKZZJQPqEWSL1wRfDco",
  "key6": "3PNSy83AYtEgkpSQUezmDrpK88VSV5NbceL5WBFEGaAgW7UZjTNF8VPJGv4odHp1bFZiMVMFopwWi3zBzTeEAPhQ",
  "key7": "2dNiN31Ri4AkhKwqHhuMxcxYLoWpVho8mkg9kTaQUgNBGUrorMuKf3QKba6dBJQLwVn2iqQKeDuo4SJRNC6oskkj",
  "key8": "2wLzwiRRnZPcXsn4wmBJNiXciKynv2AZqPsPS6orYVSUab4LFBQUif8frAz2SBMZkqNrPZV6Qxmwn5QZEZ31K9Ew",
  "key9": "3oZRTCFYRNPCzHYdM7UGMRwYP9EDvE1LAGA7nozjRAQFmfAojgF1ChGS9dvvnT2V66kgTYnZJrkvmi8oTPDARimt",
  "key10": "4C85WZtKTxouPoR8w3FnYmS3pSo5samgUpFAbZRHiGJqprJqRiJbTfYq9KQ9YCuhsxM7tAbrYZpzLuwcG9YX8uPh",
  "key11": "Zdi7VRrDTB8wo3sfoyZFgUg8TbSWK8dWu5o3zV9moUnJQhjXvtWGkUeZzup25Y29sSxbPX32jzrqs2Rv8FYXHgo",
  "key12": "3xmRweyndghqW7zThSJNtzuRfBZKCM88Sj4C9Kg7AfoXDamWizbnUrvTH323sfD4mzXKzNYujXrCjDnAY9ugbGC2",
  "key13": "5fMP8as2pRdY2PAxJUYDaciSnDBRdY6LdMc4jV8fS1mWFY4Ae5P35qNuwhoT8YcrwnY6nuuJfWxMSiSnJbAY9mUQ",
  "key14": "5EKZWF9N3CydhGKLKJSrGx7C7en5UMwyCVMLu4xupdM4vSKJt1mHGPHkyah8s6bU4V3UGsetZf82k3medGSJFCQk",
  "key15": "2W7Hn6v8m7WSRboHmXbpSeroNSSspohpogZT2dk4gELULaqxogFBAFgTVd16M6hWDyd623V6tMG6yYB3PsGDsQ2Y",
  "key16": "5mzEsQMSzY2Wesz71ztxbLjpEAKjUVpkMmC188xqAXBCPmXDjPJxbmcuUx8Lpfbp1v1XhKWb9Kdr3SUksrXxiGbs",
  "key17": "3mweSdMgd3e4W96DvZzc7oeZjqYY6pPe6nDMj6hcq247GZojqaBbjZmWbRzUgrSmxHhHcHa9bXD8mtuC5spk3wCe",
  "key18": "2kSidaGTP1Lx7Mja1JJVPbcRwJBETaku6FpLAnoB6SFaBqU5WacykTCKpw4eZBu4zp2Cpro1gpf1TdupUjXmUCLf",
  "key19": "2Ven61B9AbCSufHeCfT5rdZfw2KpNewLN1SpAUf61TMbtkhtYhqtug1qm6G4unYsKQGPfNGEqTxaECet3S2oJ7nJ",
  "key20": "553aZJFVjAtgYCAF8micdxZKetDXQdRUYgkeQp8M3SgsEB1HzzYMv7yGoeMihdWQB7VX14PtGjvCRcDfsdSXPVAq",
  "key21": "5iRVf4XSUMo8gFWNnY9AXZS4tzdG2HqtfF86x1GqiPQjSAaj7MAPhcdMED9QbUKWJN7kkuWtxFpMjoWnceHnw5KU",
  "key22": "3wUDSamTuyBVj6sN3uNcYgZ6KEtZrC5eFXdzhWF3E33BtG9CYo4UFdbDGTKgNzT5HYv96bHVVy9VtaKcynocp51j",
  "key23": "4w9cSg4ojR5vw5hGUrnKGvbtdUY98moUX4mzWYoFd5524QAnmmKKLQc4v5Jshxi249bzu4i8VkY3Vs2PmQcsfoQE",
  "key24": "16qKfLdBYvrmBcBmB5fWbTPMjdn7GaZmX8qvjjwgnckuCB8vYcpcGmA1pUWxDYTodC4F4yAaePRZrgoo8LwpRNn",
  "key25": "4yBpQ2XgonBzdYfo9GEcmNymPQPh1zaB9G1SDMrKf3wC7emwKskzYzkbZdx11DL5GPPjMvyqcQDErSPxmoCrsXAe",
  "key26": "2qxVgufPEbCaNd9PDqQ5UrrsAjhszXcJrmecT1acuHnBoL6dqGn7ErWriqeMfDTKMz69wh3qH87mPuXD2miBPNMY",
  "key27": "4zKVYoHno5j4HKKr8eiPKjYwofB69jgJ8Pw4iFDEfsj9eNBujRPCR2ekB4o3zymZRv8Qm2yWg26N93ctg29hq548",
  "key28": "4Md2qvdoWppNUEfchPahxXFGRJYhuwkLAnNgvTwi3yrgtx8Fcizm8ULdwJaRFUsuhwSgPCuj3t2W1e7gqfDGt8DV",
  "key29": "SMP9Zb6y6dAPokYh2FXv3BUrMSqXnGS17ojfw5QVkK92VuRqXEq1kLt8u99ahLg2NTYGEWbksr651YSM4u8zUyP",
  "key30": "2pMrEZD775WJqRdC3qWzHGELfJV2P299dnB9oCbLA7VUKdBpC79NCXfu42FQdwCN9QjKrzeaEQs8QntKUC1HREgA",
  "key31": "2yNz7bUHMJaMi1YkaapeJFDXhq8p4v564dL832sGrvT5M2TFMSLZMumim5hqkxQyBYGMPXjDxnsuLMtxTpqsLDN2",
  "key32": "5BTWFqC3V6NNLo8noPfubhLhkRTWY6PqAYR19d8mweqYcn6HjaFSxTt6KU2vdTLnQQJ1W83Kaz7psqbVnh4KuJCt",
  "key33": "35HWbVJfK9FisZJF5AtV43PYEg7HQN8sQbbznrVi9oJesV3jQRzeX94iDrLCE7noPxiMjvz14e87u7518ZXLLTUx",
  "key34": "3JSx58rVyTSrEoD9vSebqDTJzqE3fHvK7rFkL1H2GTJsdmSPYJXAWLvwf9wLhxa5su5kY7qM44W8RNAWLvy8P3hS",
  "key35": "c8uA3DBfw1wT4F1TghHBHgFz3NhxhTwdRr7e8GfP5E2mzr7RjzDWpDqvntv8n8Hz9UaHyTvnjfBts2MdTKD2XgV",
  "key36": "3yLX9fxUhUHyT4tfuK2C4jJfMokSrN2fcNBfR4QcohihUGn5GuVFCnEaPGctuGkjHCEQqgx2WmmYwZTuZX4twFCE",
  "key37": "2UbCaFnqcrBuE9c7ohqBiGkRX5JKaGKcMCc3whRo19QW6jJbFv6qXpp4vhn2hH88B3ZYdR4QHqVGGuNERGyj7gfu",
  "key38": "2TL8HVtiZmGSxm8RLk4tRGNWruBuUFUiMmtqw1qLyZiE1o84SGdJzyfmUmtA1bjZTHWrJhm6fNjHGYNs6TEUhK2U"
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
