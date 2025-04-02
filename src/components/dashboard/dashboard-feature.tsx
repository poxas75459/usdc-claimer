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
    "3eRF3aV2WZLh9rh1KPPbH4LQJSXya2CzUcztu16Kbts9HeE5hmWx5cKorH3GCbs8yE7gCEcromNs8xad5pbq1SWx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fJNPxW7PynR8hHk7cfAsgr2LGFpauyDBcL5i11nNv7tk8sedEXquqdgbAFCvNi5TyEwgXGkJZ7gTmfTKrHAeqSR",
  "key1": "2GnkzQrxWuD7k1h2VX2kVgAQzzBXMpoH2meWdKFEbCXTQRf7tgtAsuB7dWy4FV3LnTnQcasYpxaBpJwt4THemX4Q",
  "key2": "2QexbYd56G5xQ4Re1djHV8CpZi8GyoxVNernGXmszWsHJrXEvhhxveZ65gfZhcWjKAReuzkPWzwi1MqYZoEA9jSv",
  "key3": "8FPfvh4vqBkmZPpEGN1SaHdsdXM9bu9JFmnLWKSxpDdPeGgGR1UWBCydEPQBtWpTaVcnzENMY5bKCCZvNQMnRqR",
  "key4": "chFi3qzJvc8wy9MmWtezdPeaKxV4UhTXQoexREjyRc5o58AH3BUCG7RhE1ipwA9cwy3GowFuQ95bRfkum2iRsrF",
  "key5": "5uWEWYgFfzuYnPzGLt7yhyeiVPpXnbruNmk96wKHXm6U6aaVYE38Ez6yy17eiY9kkfP4T46kCx6KNrmQZvDziW2E",
  "key6": "2YgxKPnkw1r8fRHWVCtcdqup4tZiY2F4MLbHzxJWXaLRyrJzVmqH7fPAZtsQgpTUWJr6JbhMCWm7QoY3qULmfxsZ",
  "key7": "4Q62FXxXbW1C4JUZfX6SCTrznbBzdT2aRp1vu9E1qo4UWNNATP3cHUXKcKCqqDJg4NC5Hnm4LYARtebUP8tv1dCu",
  "key8": "2oPBCHarUTjVYSWWwau4hEb7svAg8NA4vTCk1p7tTonxsMiGmEtB9fGVixjLeDkFh9qTDhZZfNGhpVwVtkhufYSM",
  "key9": "uzN6rWtmEido8KtGmoeecBidsV3moag9JvpNgdsjZBbxjKBLBP7c57e3Xf25EcBLVQniYQrDWWKRiwgcwjV5KWk",
  "key10": "52zyoTfHBaF37QCCbaXwfvBbxE6ksTEuFZmkMv5mGJkPtovV8S7apHdAougueKBLbmwKiPaX7doKgcJ6YGfAYUHq",
  "key11": "Ep4ug6H9vJ4eEzEtVfr1N4S573bGKnYy8UDb3ni2mnHko7S9FXmJtZwWbSADc1hjN1XmpBJmS8Kzk3bgEG1G4KY",
  "key12": "38dYyhpPCsNsCTictWUDz7vGRjddCfCGexTuV61s4YeMeoVvQKJYAepn9JgTKmxZ6MgNgJeAhra8nB52S18MjuVy",
  "key13": "JVDeWNESUS4ZdDGseEa8ebnCWNisZ2o7yS3PkcnfH8VWAcQAHzTfUbAMBwePq88BQc3zBPFdaLtC9SZeADHAMqQ",
  "key14": "5ZC7BcH1sbnXDyfBULLn2f9C5kCmmEipuuUBLNrKhhLaC5uVx594uwSiUa6MbqDx4E1UKwyWyRcGh1TnvNanUK7S",
  "key15": "3kMzhoL6Cpe8cpHVBUsGB81oUJ6RXhCEzFbHR8YNCUW5A18h2jtFs1xE9bpqfNGGqPqak32KfPTFAX1HjFcArJSw",
  "key16": "5WHyDFfZ7icvAVzGv92rtMRKun9KNzrajtDoopehMtuMRrjS3jRr1BVGXJy4jHeRqU3FZWdRE7iTAELYeaHCWUKn",
  "key17": "4kLdbkrcTjAPnvNFnGdxCx6rzThjniuK3Z34QbwMhbg67hiz22W6eMixStnDPi76DVi9m2u5iFypUp8C5Ujur7wr",
  "key18": "3jGeBb5M47bBSCxC1oTrKUad6yJbcNzZrwQsRposCr4eprW8vnJNi1sugVAaGKzyqZhGtWcx3kedcwq1qymFnmub",
  "key19": "3uNyv6ZjhazdGShYDSYfw8PRskHVRisyav1RyMMtnHT6Wq9BGmY6voi8a72p4TmGHSJ8bQb3Q7jz1ZB3goq3JiSE",
  "key20": "39WTGEJ6gcSgpUVRrods6qW4TVzQp86VGKxTft8mkJn73Eie4CsbJxm1pQAi7dVV9z4B7ZJge5d15Y2XgbkgREuT",
  "key21": "3Fx6KS9pjsCwKQGx4hSGUQhqqQkQeZBBWx31nZK3q6knQ1AbU5ZdkFbonqNvz716aspmK14XeLFpu7fGEfNqbgXZ",
  "key22": "5whnKQzWZhXK6aGEss4XQ1TJtACGKFaE4JcNBeLeJx7KjH9KjwxwbAjKUNzuHFtAKnX1qYVBHAQcy1y26btTaYNC",
  "key23": "5cvaadpGUz6WoEwVW7NdRzMeHPSNdbQJmwuAPMokRFqbLq5CSNzZw8U8GCkzXWvYiudQfWQqevooMAgwz8iPkEge",
  "key24": "36rtWSqfi9TXdfqc6Kvdi2t5RMrmfmsr3CAaMcusvDgi1tiAaZ75B3gzUUBWdd43LhKRWTXvjoDmWbpT4bZdRx3A",
  "key25": "5PgbVYjugNQVAoFvNRoGQ51HQnggimubkuDY7nbg3cUkBv15LsmDtFSPM1VGRg9fJwNK9LNXK9XcCziuJQNZ68Tk",
  "key26": "nqrDJUbAdhJvyBu9drkZ3KYPQiYPpNwxDwvgPr3UUs62Y62L6JhBZFUAg7vssbeymdxtDrqRsa2kcdvwywJKUcx",
  "key27": "3zt6fg3FHHjxM8SNFLeMCqaKX8qyaXrULshxEd6p5AcWRdc3tFJyoNMFqk9uEh2DriKVVvHYqXfdQEvAJ8ciKAjD",
  "key28": "4mMpLksiv9zWBZP2D5MY2Ahh2SGofKzgRgNGsjLYdaN4FwWZdZhHXbjQ6m8X46xA5fyiGSUmnBCZZoMDtMpgTheH",
  "key29": "2YNtB5vapdyJtZtBKcyyqcE2P5DGGAKQh3RYQhkhNDe5gxsNhqcHF672xWxcZeEHXViVdvdymJkHDasWwC2Wk1qk",
  "key30": "5PwmuFfnyaWyWhmKUkCAX7iVoYdKFNa2Ab9THdXUA69maMsH5dLeKdtxnvbwQXMBpx2pS7tq1njYeJZmfm7nscGd",
  "key31": "3QDx4iBFJD2VAsraQf3utgR3v3NAtLBWa1BqY1PEZZFwuGnvwGx623C9XVoMGHoQPZgESQX4rNLo3yMf7aVQ93W5",
  "key32": "51zSk3oBfcBrBXmBsC4VK1vX3NPx9o86GZqfh6hxFBtmFq67NksJFeRt3SPG8Jy5G6UXL3pFBTxoqWNuuTyxvv5n"
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
