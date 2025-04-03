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
    "UMfZMnNVxzLMTGpZJ3z43KDYjaRTLwDSu3PnKjiu3gBFLdKLSTCGMroy2WFEhUjo3phaPrFqdjgkC1Pi39uw1r2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ixzX7PpoNohx6jcEb2AT5nvgMtXXKptSJXnRTht8uCFkixeNMY7X9BeA1oaPkAZ2eidpB8Mf5AJASQTVFv6Hqou",
  "key1": "5Epio4KxQtT5R6U6G23hwRufx8kWDpNFKgzHcvb3LrdYY96Zi2aCzwaQu6EP4JXbhuBr4jvrZwhNRCSvVcmUWKv4",
  "key2": "229p6eoBZopA5mpj4C27dmFF9dRYYvgqzsor5VA8NcSMqoAVem66jCBaEJo1oRCvHC47npvZw2PduzGc6sYf72Hr",
  "key3": "2Txi58st87KfG6ZreMW14biwKUcDtfiH6pEv2e1i93HvvghfHyhZEim2dqPLQqoLFFHG7qGxX93sTVHuSUdmzrRE",
  "key4": "2tDL4T87WNHwnqHVDyCnqT1UFeNyDw9Ztt5CPMa5k1J3P5TV73r7oXpRBs8UzwiZm8PskKamvVEWTPLZ8csiryxY",
  "key5": "3g5JiigrG1bbY1v2hMo9pMUDC1q4YCPxwWSZFAB9PotmWtV47efneKLz4i81hqPPwTvLXmzAhfjJZ994VBsZVZMv",
  "key6": "5R6zBqgagoLV2bnWFVyqydVcWgT3c4afAKdyCRwVWsxCmNKd1xQ5z8SawwgmAWPsnhdmyJq6NtEcWA8SAaCHoHWS",
  "key7": "4MhjWDCar2eXWRapo4GYAVT81jvc1ho388nAMYVygJ975D2bQQi1gukH6WPmmfGzjaSNFQU5umFdE52289TnVTyB",
  "key8": "5N99xvk1EYzyMeC1oa1VSXKLEnGBCkwuFxL5xtkEG4cuN7Yibq4Ypywvp5PNM229WbTLpZrjKFQ8zQ1XQHF3L8g7",
  "key9": "4Wspfw8A7xaxyKUtqTeMv3gQWfR1BHGBELsHD1nq2zh63VThutbhyA8gwcKyy556QY9BZ9a2RBukhvQk7H6BLHCB",
  "key10": "2AdrxUoRHpGMW79odHzPCChf6q1g574KA8i7rNYTwWF11sWyxx1p5cbUpWFHD1WCPWFuBYjXkzdYyzAKbKYDwvyG",
  "key11": "cMvAAhuVH4xqRe1mQUCHVy6woKxM9R9ZW9yaPf286qpWfZfUDTqHkRCATvimHRzAjG3X2NCcLYhWY61STmxNCSR",
  "key12": "ixmDwvXCYEZSnTe6R5i2SW66fC6rNj3tPytLniDDhyyWHmSCXRJXxMiEJaDFi43ARDgn6ryw5QQv6CSCMAPbCSP",
  "key13": "2jwwK5SeDLKSttSmruJnRreXyn7Rc8avacLVVgybhqtHrXXyL3drqdKvS4yAKCyW4qo1urYemXNeH1a2zEbTLVb1",
  "key14": "vCjKpnAVirsDvkyKEPqyMufoGkxSXGEHoyA9aVEzT7xniVqmjJzHJ2T7u6qackBPz75vJGBE9BaDRWtrZkgBF4t",
  "key15": "3gwoqQ5MMMwgqQRvPEKDV4AjRFCn5Y3tbeCnG3SMwHGZ8MF78S95ghd9LuaR9vDLiJ7bHXADSQS8XYanY21dF5i4",
  "key16": "YeB6i8DiS3rdNW9GpdSY2kHhASc65kunHkfWDFhpr1NEBJNRw8DjYtuCp1iK4QVBXGK6SKpFhLTJUjUUcd1nyyg",
  "key17": "3xRVUpD9khiKXMj29ezLo3zfxABjRDBYF1coq8AHuLnzHhvEaP6i3Kh8gNnRfggwqMRiPFksBNWWkXqFbC2bxBZF",
  "key18": "2ezNH8VbSnpNF8vWumG6brbhp7XHjuUZNhxMyZkugZrGxsNYEM3hZuzQjxUPa3HPhPLBTwuDpbmX3kHuHJAG86S",
  "key19": "NZMzYY8ieZbviUaMXjCWXejUTTjWhGJAJBgjUw39ykMJ7U6Zzoim51niYwJnxcFzEKK4pXUJBGrdxc5LCRbdxz8",
  "key20": "4HF8sUZbFdJtPkxKp9B8W84anqUCEn8LCJLPST2Pc9zBXeLTYBJ56o1ndPJHn7Q5pPqCdi38t7pWGg1Nn7BoHR8X",
  "key21": "tGwJ4XaGoonjqfJH38xqDcKY3oiiNkvSuPVVKyQasTNoZZJpaZCF7RMxjLFrXcRtzFWF93tsXweSurBMFVWdNWX",
  "key22": "PPmTQu3Fs3RWhxAbD1Aw5zeH52AEdo38ePtRS2YKm5UEx6abWhLgJmnLkpFXpixNqxkDRo9wG65M2kuZ6sArPhP",
  "key23": "5g3jvu9VZhxW4t2Vy7mtySW5bduRXeBR3PqUawNFVdDJYjLN1sR7uWiQj47eshevmuxzkAVYXKVDUiuiuyP2LE63",
  "key24": "RE7Cem5rKXMUyamwKLN9WAKz4VuGJdbWA7VNhcvBMB1WVWySXCeQkSXTa5XJK3kqrjxJj2pP3xWXcZHcAziFC3Y",
  "key25": "2sfg58oJ6DsJRZ6fRUhERmvXq7ERi6YWbKoR5iqSJbapX3AGzF9mqwTgwhGBFLTqhNBknw21G41fYbMWYP3Kawdt",
  "key26": "CWTikgzLKZ8WQrX2SDJNhf4fGG6xhSDxZhVDpXncQYWT5HaxRpykFd1Hm4x8qMJxVbKH6U6Wj5g7sVgtDMWSiF8",
  "key27": "4pTHdBWzfv9fk8bq2vhZVw8bMzn6a9YEM66sQDAeex4sD6cvfzEpnPWiybhcTbcjBChJdNnpWbqpdry58z1BrqUF",
  "key28": "5pDrHFPwJpauMJJCJLY32Di4dg2MADpCMhDyrcT5cadPgUAXKPQBdeWWaSuvED5hCNtzm47RHVLAGym1vUN3ppiC",
  "key29": "2VNNQyCN5pqWwyVwuJf3aqytKmpYBjEgxJmRCxGJ3gGK4oyUYUXENeRt3wAg4PNW6ofnCNpLwBuYqxW4VrDBjY8e",
  "key30": "3bVzi44ULV6gtDLa3uyuA2oXjBPGCSCpbSoP3xVpCiJYLyS2ugehYTS9wQBb4wJbSsrsrYEhvFEjrsP8dhzZSoS3",
  "key31": "35SgKyATkSEG3utgarp5CWA8GLp5BFJ1wGQzJ2yGVW4VxxP1gnaMJq8YQL4M5ramJ7QuzkXSqdnkqgXxjVpwV9rW",
  "key32": "2Ko5HwBKWZP7zpq2GwYmiCnXKMDvaRZx9VRx6ymoSq1RPWo1jokTwZCuxV3ZUD5hRxmbALqre6pwc9aAgg12nnmT",
  "key33": "4vtwMvemRYbTur4GcLBLoPJb7Te4HUUoTqVDDp9L42zb4ygA79n8GTGtShxwwkCSExThEasecWLSv2GfE5Xgk766",
  "key34": "5Ge3pzeU8RKQ8UxMuMqowHAHgWnQgqhzdcUZuSuYyqxV86URJaGxyTG1JEW626hk5onKEdcRprN4ijQSgxxxLgXS",
  "key35": "Q5dJ2WNYaeStNNcoXBjd4iZx7o9L7WbbeW5WNNiydgu9sjhaVzyrGXLEXPHniLdbePzYpntf5J2CiTAW9FexFE4",
  "key36": "4UCbAWT8vyztAMe6gzKrun87FqbCoWpXAYJ6vErCThbaqyn1N7WyucijC2RC3xu2z1J21TNgQyy2TKJtGaJyzYVd",
  "key37": "5tUhHXJsFK91VmVj25xwwFJ3anqX9TCfkadxQSB4nXcohbFriGtJ1N6LrXk7sjm3sUaAhtGYGRasuGpfzF4PyRXE",
  "key38": "2m5vyBXc2pcz7wufnQvMdkrqSsPEbfW7csfg8UV58Ckncf6LREzgSj1j41rR8m4zzc68xBWsVv5QUFqc5J3X663W",
  "key39": "3JfuFVKrTmoUcAEUZZ89vRYAF56QdbX9VTx2SejjYbSGzcmYm8Fs8SAKZCEFTeipszSGnoCkwusinAbP11XZjKpq",
  "key40": "2LXsdTr2oc7H28ovigKNP13R9tTithjVoUWjZXm2nPSYhMz9Cfmp1k8TcTn5xYsBXGVppScn38HzW8jQCvSaCeem",
  "key41": "25fijZ8ikpMxGHGjbdEbcNRiFxbvce9Z4DwaRKCgHd2X7S32YiWkDZrAoi2oox7GSu2pPbfXJrbTxWiPFhfyPpxs",
  "key42": "2RTQSZZVzqUAtSJgaUYrswt1b55bBjJiUZMhz8Tz9J5sS5MUYd3HCJ2BqkzQ3L7ZFGUeZNhavGzCGcRBSkaJwkGU",
  "key43": "kAyop7q51Z56nBNME8HSdQoPJkVfbh1K4y4QKvEui1qhzBbJG6M9J78nadDD3BuCybJbU9EMjFtRGGpbuWgjgKR"
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
