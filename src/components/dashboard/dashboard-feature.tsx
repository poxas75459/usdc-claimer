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
    "4PoB8S793ZLN1TzYouA5jen9mr65xGQw4NWtyCtqTJdzP6Qom3kVRDTsrABKMmgLEXNLkjtGP5PHQAF2eHuNjVTy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WjR829UiJ5hnWHo7UntLsw4y6ANMzmtjSNmuowTEfUbMq5uJTJvDidxVF3B97TXTbwZHkGGX6R6PL3TtSGJzbwt",
  "key1": "3No8tayVLBDyJzT4ELFJda4u7vX3yqYw1iWTAtQd3Q3WLGfSXMwV8nsYsxSjCEAQL42mVDUymZWjtXDyJTPTZPfE",
  "key2": "29r2HQzmC3wwb53K2HPTECxS7Bot9pH6EucP5d1AKzWhHkaYNARVJpymqoL4RVU1R4NJ1K1Ns6RnwD2bqotWa9Tf",
  "key3": "ZS5oMoHnvwWcZXZLw4xVX2R9BsPiBuNeC7fRMcgkUtEVKqc2tuPe3ruRv9uaDpFBwvAjW1y3aK4LYTGqPkx8AAY",
  "key4": "3YdGPJ2KrVPmn6Gok7LHZjJsgopPPXnYrzxRDjBbuLGxuZDghv1iw3AmGeQvUzJewFo3BNh1yz2LdcjZvw1JNRrk",
  "key5": "53g9Avk8qarY8Jxnf7vyj5yGSga4FCKhyB3LXd365mW1fTRjnkXE176Pvhzufrx3zbyhnhvNspwsgm92WG8cxAkq",
  "key6": "4N2663hsjhU7eEyXNQCD8nUWgm6aUfsErdDF1QMhRjWNyUoRUkD6o3BG3bLsURwBoYL91uGqHf8KMh5MK1wWEdf3",
  "key7": "4WgEug5H1tHGcGGUH6e5b2VoNyXnCGw2o91T6md9YQndU3yyytKLmK1XquhvMyiuWsgrckQST4XKF3zZZdWNTAMH",
  "key8": "2RL5BhbK6Wb8qAAvmcgi7wpjhPQr6HTuihhKyz25doFVHjG22oCXLQc13rNxnNZd9UFxgaKD37DzyGv4eAzUyVnZ",
  "key9": "34az2mCi2GYSXPE1Cbr6kb7eR72yioYkMA4G6moECY4h2nWspCePdg9rczGJ6uErxbJPeuYVdcb8T3Z5WDz47Cna",
  "key10": "DvQtyrwcYGbSdgdHHna8WroU9xd7dc2BTFmrDTJk5zoggNhbZZo4sJn8qCRXKrp7CmtTCkJPPorw5mvp7dyEGjh",
  "key11": "56CukXLdNhTXznhKiqbksQichiMpQwswUpebUKmS4KpofoivXgbzr5y1DTptQ5j6y3E3mFS9xXHY29BVUBnz4eEC",
  "key12": "3uMiQ7cW5xaBzvDDV2Zjacoz12qxLeRF6zZUa6WnxUrLkvs6qoxn7fw4DY9dPuKd8Q5gd3mEFLmndu17P2iw48vd",
  "key13": "2JFradYQzSp5ZKYfWqQPXFo9KJmxE5Dz8EkNv9vc1fKD3NdqHaYBXdLnYXLfnW72fyzCZJrapAyU9oHSbmCA6DE7",
  "key14": "YV6RLDiwo1DCK4MFYdrLyLE4bKqmZyixGF9g6tWk679tqxtXCwHNKidBHLxPTyhtALULkLe61TmN1KVq9ys46qp",
  "key15": "Yq9mHvp8HevaWtgP69QZkBNb1m6GrC9UXptf5NAHivqMZes3QUkhEg9dDUsbZmotwox6kn5pM4e1shVn9TyRtp2",
  "key16": "42vCkRwhe4F7kog6XMtVTXjcPAisqVhCHWbhbAiXJKXoqDto3fAagjjNoDyniU1xKq48sS8JNNv9Va78GJVB8uD2",
  "key17": "kb1jEAnpsVDYUbpdsRkU3i55Kv84nR9xUcA8K7zzdwynFesHCBoA3HZ3gbjxdvAiZ84hnD3aRQ3GiMckmpqc2M1",
  "key18": "Y5wCpuwWRmK8Z15k9iseDdLJ6cKEgwcEyCgDnhjWaY1JrCmXMZYToH9QvSZwCCDQGKNRGPViUF96p6m2ddT7pC2",
  "key19": "5LJCng8r9a3BXbGc3v9gqWY9MK1VHE4qdtFeFVMcNMpswjxYVfmTb6rrktgi8EfqPExtSNNx52KfCBzbT3uiG8EQ",
  "key20": "2opdw281hfGxKeJGQdjoWV1S5SKt2c35KvFwGbaCayfzmqwNEC55WGHg5KWBbCiprDqpMaNftoJz3icomrVayvu8",
  "key21": "y7KiKvMEd8ytqhENSYvpVouNU4Dtxa881o2p7zSnZcCRQhdXvJZ9hXFX5P27MLmBYwBmKMTn1mMXytwLyDFBuAD",
  "key22": "5mf5dhjWfUFjDQf99Zdfs4hHqRvUezyVd5cusRFhLZtR8wTwHaSd7bRpCoU4L5cBsPJYzqiwzP5cvZFabg8ywLbs",
  "key23": "3m8ZvvUNgANgzQCkqSPwiKFmScbPTue5YDYLbc9yRe79Qh2ScfyYwvLSytoffD6qFyQD9E2EwPPipNGPtmeFJUt1",
  "key24": "NmWDhRiM5EPmQ3CBuAifzovEEDmuTevJecRueEEcyzd4zh6k6hEUXhyLyZjsaz7h16x6u7gyoeKd3vM4JVmwN7f",
  "key25": "4miydwJ9FQo7C4ddVJzK3w4aq5eowiMFHk2KzJcxYAGLfLYU1zsQgECC7L6R8SLRz5Zn1D2qKVHP9Eb9Em4sSLTc",
  "key26": "arUC44onG3vAHZm7wrW9cvuRW1yrPzsByv6tBB85H1bW3j8hDiyxq2BmVAFfGDGFZ3q7KtQo44qgH5Nbf7tkCVT",
  "key27": "5zyq6xhyYqoBuG3NCSu9XDo848cZ4dgUPJyi9ReyV88vow7iudgwuDzH9wWCocL4uZTzQkcJ9odn9fdEcgAsDuMH",
  "key28": "2t9XqhqRgNYB5ovNGsMthZi1if1ZLJQWwndm1m8ufeKnh76wHwWmQi9TySMAasBWQMxdobEhXZt7T82jKP9qhZF8",
  "key29": "5s9imN3i8BMeXdvSLPrmt4PNyYPcNSGVYPBNuiYhntkBNRpsq1tfujPiB9wEUbr6rRzFNaR2NzYgPXj9LkbNKKUg",
  "key30": "5obunirRaYALbLwCSSMNDHGee1GBTNxikmN4jnan9ncMD2Rms4YLcRNYaEdcrnuqqaW3RD38cikS9HZZkfTy7A1c",
  "key31": "NvLPRsZ3HAqMPcKHRmDHSAyAWsgKW2CFzyKiMgV2HG47My6ynrREyGqrCKA3qWXnQMyZEkz9V39uk9YzKJiSKPT",
  "key32": "2irwmE3Zxzbmd5E8CDPWiNwKJHs5X8qQE9cSViSJCGbH2adgq9p94rLD5NkkiUsokzKvQXkfXA4BRy7g3fiBwecw",
  "key33": "5uRK6yBXLzjyu59dnC8KAjVWkV2Sk4pBhUm3B22XruM3tNx3jVZJHMr4GFShBPATu6ctMVQzG4weZUwUMxZoiWGW",
  "key34": "4qAyWMLWcnZJZgToLuA3afzV8SRbAUct7NkTwcoHZSikGVvWzWDgdj2ah3ZU3d3WNih478uXehhjRtweRkwvA8xS",
  "key35": "4f8bMRsCmUDfuzq4qVUhjunowpAUyfbbFoSUbQTwFgFNiFKrcNM6X6FQBMGsR6khuMrYp3qwT2w6WyxTJ3SBBC4e",
  "key36": "5XB3LaUdTNkTw73xZHCXCqRpdEVdhVptrQezFnNpjDrmJoo73ou6ASzhpcUZKkZvQ1edSW7HfTeu36aqvK2GEQge",
  "key37": "2nCRxiKc2QFyu6uKP5kX1FNTpAs6PyvCxT5t2wdW88dmY4hMbD6rSXtqFQMuzW4gU12M7kUNEiZMsD9E8GwYUfsD",
  "key38": "5yrNE84kTX5sZDha7aTUAe874WJ3EJFaTrC3YUwxQw41DZuMhCSULjMr8AutKvykFPYZPXiWvVxkyRLECQX5RQXT",
  "key39": "5Ntxdah3aB5USUTJ1PNnQyVKdqQ37XuSFjywC41xVeSSWkMuUQK3gLqHw9XVC2GaMAcELPUZciUpJADdtEqHXVbu"
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
