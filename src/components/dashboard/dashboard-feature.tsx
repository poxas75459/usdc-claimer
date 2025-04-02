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
    "Y2bELKqChiSaypHwSz7HQwrjq6AR3UFCbLzHqDRfKyr8jwB6iaSrKDNVHBye3oP55doj6X5BVc9y8Y4V2kEeuLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kELqk6oP5zDghMkMn57qBrcLbufAnb6q1wQ1C8Z2QzBPQiGjV7z4zS71x5B2wHiS9TVW7LYs56AFMtQcEUC5Pun",
  "key1": "aJrPW3xPPQ2FpkHGTZxG6bHoMeiWNzDsKkYPMucsFVkLEm5HmUW6y183jBbRDi4DeTpQZzJ7C44qExB5JVQ6UbA",
  "key2": "4dYZDz9YCuL9FebYRCVNUFQ23SVaWYTGkPpt1HxcMoAWQ9GjueWyg8rz1xgK8LyxoDuwiSWk7mELa4dDpub13zpp",
  "key3": "6oUKJjLMyUyrjjSwtuQQS5MzovdpXBsk8NUAxtQyLLAaGkMopU6ZVN3tozmwyy8XuFwMkVJ89bArRZ4qe5Me3Lh",
  "key4": "zvFuM6N66xBTshrvnLsbabwrziQYBpnj7tueKCKmKm3BdpCnZcvc4RndoVf9cKa8ju26fp67HvPbyk8YBeh7a3h",
  "key5": "4mKMRWTWgqhFKdghb8cEk6Qg1gT79f76acwzotCYeHXaKz24siyrJyPnQwcpm8MSX6HSZtrZbjkdKfBoKYy7PXeT",
  "key6": "2EcHQ9vkvvinTzJiRcD6ZorGQja5MVeKC9hmQQAcZ6fHx4A5rBjdUsp4RAD4KU8njpUxgytACLBukN7fRrAGSEEk",
  "key7": "1JHfihq9fxz69wTVGSNuy4oDsafEW9EvvK7zzwA6rmdjMVNZfj86r9mMqXjyVARrhVPrYqfgnR2P7JSfzZpjNnf",
  "key8": "3rXbmMYoFz6virY2g2ACmUASbPH3x7mgBNfPmTi9uk6Qrapnj2vGeVcdzvtB4wmKwGufixEHa6kS1LXSuCQBozrp",
  "key9": "5c69td8k5oqmm4XiGvhHGpzGGdVANivd1VJ38gUbX4tZJYdq21e4v8tGVNV3Aw7SqGoMiRXiBZ4xLsMJc9CzEyHV",
  "key10": "31VREXseKfwX5tu9AK7sRPEs3zwSv1VCi7uxXdTe1jDrLDoA8gcFEXbvYVQSyvhgZ68t1F5Sh52Kb4xkbLEktAvw",
  "key11": "4mABmYNZYtnZJ7notnwWLqQKrf9rxkWEhEBKiqoMbkFqAQ5fNrZuGhfGJzBG4UFmYLn4QcDH8Tmy5NMdtuEN1q4x",
  "key12": "3dMvHrJjPzVm5ypqtkBt99GmSdCyeDtNrcyU747zxvjtotEkgB6NSQJcrL22vJknver7wJ6rf8CzAYwYbeFjVuZJ",
  "key13": "4EMNVeENt3MqWKJZvb3vVYEEfnzMcfZ3Ex2TMYKzvGFdUZMHBJPqcR1aajqgirSwG9QSH6HuRGPsC1dkFhZddGqV",
  "key14": "4EE669r2zKWQwTRDQrxszZh4NCrhY1xDHVDkmG8b8jXo7qx9Xvk63ieP2eqFzdQSddzAcL1JoxXCVVuuWXChjjPs",
  "key15": "8FDfvqVmWwi1dN34zX8t3vva1ECmFGGGtFcc1YbxbGZqx6rzbR3mFiAZb5jR9SDB6tZbBE7dFEf8JyarKq7hixw",
  "key16": "4dJacpfxRQsSdkcwksuJdexbZQ97VyrzcFPW6YQp9SuKravSSyN76kJhvXLevoVhvNtVPs7dgAMpL6Wrvj9nAsht",
  "key17": "5ozd29iLmHcLq1ewn1pnNHuzfMsaSS3QB6yYoXhtDyQSWqxLYoz2u5s4yayL33RKpGGxUzEmUe9GaQzXWpWbLMFk",
  "key18": "bD5V3kuonHnFJLurACkPRg5pfWAVS8goEMHchcjtdXyVKAEBxvtheKqwkt82Ct9RftX73YhYbBhWtTvsMm1Gh8Z",
  "key19": "64LtufuUya71CGZKbLxogvupK6QNCPmLP2T1A5aTAAKPuKd1aWkhyWQ8WahnNFrnoyR83gjJ9jf2ofKK6q8eBYxy",
  "key20": "Awuw6LjLBDBiq6KpTdMR8mUN5fWvkCyUqHry2zStg48zeCXdWnQg5niVVqead9PFsz6CzmK1pm199nXeBLpk3V2",
  "key21": "H2w1AtUhEShQCp1BZDzDFNWpNZ2VZyZeYGL9ZoDT6TAZoFc4bzr4czFozctyXv7z8ZcJLHJ5TDig59jvwGMnJbZ",
  "key22": "3WKcDC7B8eJeE3zzJz9GgRMoxRxGczZXbYxP5xabfcNbh4bmhggH4k22T4yugafyUMK2r48upxinQDiXKahRFqao",
  "key23": "2bX1m2WJUnzRc9VU8yEEyNmEu6KYqDP7yhkaWYUU6w4HYsSmMvuwTLgVmcg3gVDNpkbmmAPGkncToNeps7rjA8KB",
  "key24": "9MjjKLyPVDR8fBwjQGvfL8XXms3b5GiuVGxuFhbUsZgkRbhkkqrn7DYXgHrqRnxft7NQPUsNtBM5sUaDgdgxnmG",
  "key25": "kjYEtEY1Ywe6hXqWbVvCRzL8wmfDmXEzguqM4P7fE2CxDxbB6R4DaZutEQLkznzjv1hNPimoqtERyGiV8stCYqX",
  "key26": "3opnMup3kySA3Ywy5h6FWfzcsYUDd9uhgg8EoqHv2FAgL4wM8atdKH4JyAP2C9PAMSdPAR98Lj5mavJGP9vNf4M4",
  "key27": "5KMCr1EkMASi9UAZRgqJN2ZXhjiFPDCThC4wWonNXAUuarcCBnj5yJQuQe1yPiMEXZesZPiPT29y5dPWxcqJKBYs",
  "key28": "D6JwFVDGUkGjLiWgFniH6KZJ64xrNX4ogVvcyNRoxvAGh7636xkCMCDzbW7Gm7nRRiSmPp1VwyqozW7Axi6y7WQ",
  "key29": "5eB3pM8vtjSffcyf3yXxUmnMz6md2SeG5PpegXEXZbTNQEbEH2TWXvyJRFLrQMxhQSTkCNfTUJGiKJCsMJ1LdVig",
  "key30": "5j18BsnoMAMmxNj7MZZYEuR7Xq4SXvt57xnbwqZEbM1GJS4EmHNm5gEAeouYTfpC37LekqRJLCngUsLaebTPadoF",
  "key31": "22Dhmoeq9a1sTTgwbiSUXxkAH2DULuYqmKFB2642pwL5mFdMfP4qLxSZQjdrCn1XCsM3JQfxGWbLR2tNG6nknBSw",
  "key32": "2LqRh5ykcpgchK8htrY5ymhBjrvMGiwSF17jqnYVsxP7SBhrkNqbQ3XqKGFWm23jjJWxQaNc3JqFECjTXx1tp8Zn"
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
