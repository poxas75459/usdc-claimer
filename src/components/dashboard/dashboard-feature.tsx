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
    "2Yotk2e12USEXRR7kUF5fNH1jAxtzb9n6soJVxa5PNiQhPfxTp3JQ3NNRTTc9JmwCPDp1wuiryXQJNcHEiP5fwCM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V7GyUX66Khc9ksBRB1rvTcjXjM9WT5xk8b2hQf3gWjsBJh4dSiUEshTCN8EsgFx9o5CvGkg8Vforo7Ke72XzBWG",
  "key1": "jhhGBQsytSQRJjeuYNYaYPb1JjLXTAQoJTskzVGqfyTFAcNegEqzpVKKmbtCW12Un3pEoyv2ZbALsx9DPWfa2qa",
  "key2": "2Xqn5Ev2ziiexcdn9SXgBnNYMxcH5J9Xakig2qL7cYnE4HuTZExsXGYy3PY7ytjPSfawTbPi8CCUECQ5CrVDnYqS",
  "key3": "2XwUFtCZHYHT8VMSRAHhuNXaXFfLSX7Hn3k9xsrndbTMY83XpAt7b4vJ51DNEXBBeJ6Yn1curts2RDTbhyhid3hL",
  "key4": "4vvN1sxQyQfdSpbdCCYmMUubymfN5WWgA9chKzd9XCvhkUgJmjKGQWi8hFfWSj2SuD2He2C76XTf5krdxMP3QckW",
  "key5": "BwGWoEpAx4f4CgutWAaeeGysMBi7znxxBh1aPiNrjsDhKrdmGJkj1SpcRC3zEArHWyFEeWbpKyoeKw3QRmZFqhu",
  "key6": "3pLYqE8FFHoBZRK9gpXBhnbQ4omSHbSjUeAiNje44yMvXWPJWpoaku8sKbvNo54qDqpKpiesMzCDt7rThStK2rAb",
  "key7": "3sw1tAJ39d4vDuuw31R95iYiKkCM492X17YhSzou8zKKM9D3YuLEKcaQizZc4NUxYUPfUNYCTbtJqtWQypGHTKDj",
  "key8": "5Lf2n2jbQNnPYDyqR2W61wPfsPPB7qZVcrGuQroWXudVtktopvHwMDbVfJd1a1pkDiv2iVJyCPMVKyYisjEQWZdt",
  "key9": "58ExqA7tEyC7KncgfVC4AtAaJWDke7fffPqzqGhqWB6vyBSqQGXoXtWNT1s8vpF7PnGGH8KxhEtueYpfnKjy5Y6U",
  "key10": "4nNEKk7jmpGxEjoKBY3deJnD2pPL3RkmfxvcBKEhjT1ZuGEX6zmVYbgb2X7MhA7ufnHSBrbm8e5DFvB8ZerANNPA",
  "key11": "5jBaY7Nxm561cBctmZGPMZfTn9sEMx5JhEbjdqxWrAf2wf4GQ4q9njjaRBBJnY89okn4io6PNukzHEp9Shx3bXDV",
  "key12": "2qxGHPcf6anyKkjQMmpnpTm426BcmGJW2qA7wkAz8wJahRfRMFary35sGKX45uBQXyaJ83Gz7ANJfBPxg7rdHv2q",
  "key13": "38g3dqtBqUwjD1iheSBbFh5Nx95R6ZLCLMkCjf4wBo4dmsmpebDrthUCqcQ9HFwKCag2Vn7wvngKGnrTd78M94gc",
  "key14": "ysQ7bizngfjrBz6zav36P3SytdwKGho8XT3JwcGzkMCQ4XktJ18JEPZjvB6qemnKyHhTSG56VP3pDRRzZKqey4G",
  "key15": "4pBcVqak3JPHKA43JUnd9qoQYhrPjGWk9drpkjkEzZYbvRTDRq7aePKAMH13ZSbH47rCCATJjApbiMB3rR8CGYAp",
  "key16": "2jFhA9htXjDMPQPMNDksGcZa6BcVdfoss8GDcSj83Q8Mt2VB23jsJwnvezj4brtgTwLPuPzfsmpxGfCr7jcUWwEw",
  "key17": "56W1cvs5BaRB9UoYDHKSt5WTbib6LWR4y7zcYzXsjjAg7bLL4qNZDGfGiHZnB2HZHz5pgVERn4r6ZspgG38absnV",
  "key18": "4rTvZh6DBje4f4YqQXw4WZoc7Hv4cYPgv4c6D6uwPTaQNhnmtmYXmJ93TzXt2aXvkqqo1EkfD8wvyUuJeanKF8Tf",
  "key19": "3yvczbggia3CN7c1c2pfSTC4ihLnFE83L3yJkF8AoU8YkK9o3Eb8FrjpaKbHdhHJQDYyqZoVWoC6nimssepYQK3A",
  "key20": "57kLyymSitP6nDhKr3dnT7xuquna28nFQaKMVkgUeR9n7KfuFaoNGySg58xDgtU1LZ9NwH7Ei7jBPkRFnvoSKatb",
  "key21": "4EBWh5aamse8h3KqY2Di5q4KUYk1Vn7WwMzbSbWzxKrLTKqrrCvRstRySLNy1ZhMqVCi4nfsJ83L2GTFn3hsVsTT",
  "key22": "4HGgYJKL5kcKEHVSumaEP2GakD7knzgAm23BDicBPMCDmJHfEVtmG78m47XFsngLukT3J7QQ7jcht4BprxW1nWqj",
  "key23": "4kNNp7jxjRkD5k7KCxbepZT7vVU6W19kcrf6WJ8fVWdHyJvR7tY819coZYR2E6QtGo59CStNePwr6U1PxpedNRuQ",
  "key24": "4TmQS5yTk8CKKmB2Jwvh6qYNwGt8xqFmysMMnSBPVejcuP69qfHBSVzp29hae7yt48dsF3w19BRs6PtsFfiUjnke",
  "key25": "2fjwPFGVeuhh3BgYCnrrHUzPmKZC5hQ47uoDGxs5GXvEAhLVoHmiEKFb8ab2upRLC5AwE5tEpDXCcRVdBkHpt2R3",
  "key26": "4dexriH9DxrfCznC5PQhUdiFgsEHAreniEh9HAeUY6PLFeWPupKQkrYdXzXDQ2JeGk3AZ3KRdpgNrN8E5KrDDw6t",
  "key27": "3hUS6HXLntPxd6PWihcMsE1Z2YfdPxeUBannAoFRtd4GcCFnf3tce3eN49mNjx1QtfVUUcDFF3tRN3eoRMoRsbmJ",
  "key28": "5wwsnJ835kmc185vYgVrrEX1jCDt6r9fW4c2X6DsGTh5bKMBm3jYutREjg3PAG6Nqa2DvYszpvgEvyNhEugQ4sXp"
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
