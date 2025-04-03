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
    "4Ab45QEyZzQKTEXoMn8eCgrczqaj5MRWsjAHzzpP1rd774TksZyhHqvtwSspuxcteTduPvK1thjLGPbHX22uERnu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oRPrj1hABNoN7eVfyg8Q4P9rdbEJyiGcVwSS5VWa7KFXYxQ2t6HyQWUz7Uf9mPnUGJeCdqLRzbee8Hn72iHh9gQ",
  "key1": "24a8sMZsbThEVECrAy9Vgen9spgtMfNPhjjHfQUnDG6U5D2u2q7TyueZj75uoxLku8evKmevVKe8XXmYs4syDM4D",
  "key2": "3EkvDqQjNfNFrvtPh6p4zih6RMHEReAFVj2QojYeKcxduBHHSXerg3UubKJP1muYfEPxM6MxfLamsNN7u41iHaKA",
  "key3": "Th6Eo44DMGta4FNWDSXN9yzJdLJBQrJJAYupK8tTfFSHX5rKUTCkGjGVTkX4ZCNkJSUR5AhFkXXRbUf6VYLXeLy",
  "key4": "3Nt5sTGuiAk5JuXzfx6L1p3rcRT65A8x9SeHUCrkLfpDs7q96fZrPBWEAScv7J6zdPoGPwLtmrUriGyFN7Am4LiG",
  "key5": "2DkB8on78P4F1LL1Qh4afaExP4Wh5mK558qbLSaKNYKHr8VVytSshNFjoAbY3i8dMYdCtYPL9C58VALAvZfwMLnD",
  "key6": "32vEQpux7v32VhcVktV3EtkavZHTLyRKABsAgwdCxFf8QofgiFQEMp89MRizwUkaML26TT6yJ448oZeUsQ1mcKr8",
  "key7": "4zbwQLYR29ed57rvmzKnAYWffCmQK5sHMUGqY3hzNNtXQaWm22zP5aAaN1KfdD4G4XycjLGR75h6qPxuLZyzH5Ke",
  "key8": "3zfUm3NZBvo3pBXEJZwixkEgDkee4kaHg67bo6iYrsziKvXpsw6SBtrji42zpbm22w78JpFJpPjhzpczcwH3twLv",
  "key9": "2es3yuEmaHh6UnmDFmQn9wzUz4MhLPGK4ksGPdgiuTqQi45c6x65Gqn5wJkANUeAc9xJ43Th14hAMQRR752E53DC",
  "key10": "4fvMkU18f4qcw7bQ5Cwc4pKbQQJr4MNVZW2gc6zAUt7g2hWG9ZyMUcqH1P2HrxUNGFs2GXFeMNaS53CGYFSN1ZDx",
  "key11": "5ThEQrLKNB78JmuaUcph8uw4MXezBCqCWaCjyLsAUdSK2w7bSZ7v9dVMMVBz51365NxVryV9R3jEQyxLmGQqvXo7",
  "key12": "4PUDsMciXZGzbDgi3jYx7seV7UeGGMpV4kTUpe2CFhvD62NUcbpBtY9jvNtnRUxe3RtFuQyC6yU2utN1ABoUQH7Y",
  "key13": "Ak8inmwsATNqcEYFYrranLfhdqwH8M2d84NAXS8tUn8J1RnAw5wG6bDQfmeNqA5GtLXkn3R88w2zFyUU9CKiSck",
  "key14": "4Tbtp3WBbAn3qvVrVsEzxujfFFYP5fTk81mqcbmf24QgZbmidgZaeNQrP2GE1XGVjo8WfvrGbv4L8CmyU7NPLMrH",
  "key15": "dsSdeCUF7i2JV4DSwEvxG9WL2N4J4fPaJPMREm7a65Ws91BM8YKEXAM6wbViehj24pUACpbojoosFpMn8RWVY8X",
  "key16": "zXNugxUS6o7E3BSLbZ9qRsKXn4D5oT8g3NPfyz1JzC391xJWYoiQrpAJBToTmP2d16PrBBVpTBBbxHrp1sTZ2vr",
  "key17": "3BK8SW3bnXzouRuUBccASHrgwwss81U7YoX8ePmp2S57ZjbfScaWay1tLQXf3YUzWJoxv2AwUp9EcmcKXs12qfGV",
  "key18": "4WTovTnT8RzUAa4y1DvBZiqStDT3B7FEmBsBrFY845Qrz2hwGKxm4arjRmA7FawXZVn95jVuv9if4T9vygitkq2U",
  "key19": "5zsUXNLNuzhFjvwKx3rSHDNJjpXbkC3Dw8v1BNk8bvv9eC6B9XfYXMFTnUnky45YnF8nGV5EvhBy25r77gpxae92",
  "key20": "2h6xHPciXV6nmtdLZVSpxoQPGReXEyX4gQ7R4oZq51pHynfpdx7r4fn2UQcR1NGZEoHaNNrMGPSBuNc6z8r99Kr9",
  "key21": "4EBZ3jcJqxBxQJnk2vbi1NNm8MJ2YvGQkY9yT5PNnBokBoUR7hHE8zoL6sbfDkKYmvjFZnPmkbz1psmHjwDwDtmP",
  "key22": "4FpeBEG2cnuNvUhiQc4QGUs2MLur5xhnNp1DMJHwYf6jztPv1mHpHAyLJqu6BearBPBBVuR1v991t1RRUqppaR8U",
  "key23": "3FEafsYWVSskx3cQdPKtHYDczDGJyRed24UvVAhybZZwo7Z6QJhtujGQ8MdZexecTpTGfCX48wyZE61zuwpLoizV",
  "key24": "37z3Rja1pyQCz2SQGCJXM3P6gBitD2nfV8iLNb8QWkX5bou1RMTrQjHQK2gew7MznJVYiZa8TzqdCQrimsXkEtY",
  "key25": "4gjPJYb6bZZkjBmAgwni8zcE54DiNV6QjJjkaxsF58prHzXWUFeCbhRrFxTcLFYSj7z61JUK5K67kpPU7ypdj4RW",
  "key26": "4pJNZd1r5o3Fe4sDXNNCtB7kDZn8zynANFQzPjZMfzJwGunCbioNxz34wPWwdyVCc8H46k4cy7GVD78ahbNrTZCk"
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
