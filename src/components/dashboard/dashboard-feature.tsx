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
    "4fecrDHePNVB33Y3v96hbtRArUMRxqZ8zNpmwFUKkURAGRCgjMBsJcLk5d3VH8YHeiuNBqevVrwBFwrGgDV14Sne"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RHh4bA4LK9gSeJWUDDSmT618BWEbqLBgpDFgPsNDgy1SZY7gG7ghJKNSGqyD6YpRfeWvwno2AQX7AK5yPRFJExY",
  "key1": "2kmDbC3trhdtU6nFDtarXqjNn7obfKpyq2cnvoScvg4wvhfaeZSdFS7PFuaqpi1TFCWWbaJCAkWbo5RpH8jdwjAw",
  "key2": "3u6XqhPadCqKR8S6oUbVV5ha4BfpxnuppWiaMa33WEKUKhqUCfwnCG1ESYxjaWYHfxNsD1dEnf2obLZWECbvh31e",
  "key3": "2Hddy4vpPv7av8rfwCQYLpnVXEwkcx9xMjfCtzURkMkcCyvphhvgdoCb32vpqmQUprWDUVvrukPw8vfMLqoEfAi2",
  "key4": "3n34c5wVUBBSEJv4mzXyjFYi577Ph7YPTdvkyTkk1PbFVz7atMSN3Dut8BL5sVkdsR94qLAwMBYFkxQNy3w1hYhW",
  "key5": "3FUFU7SuFi8BMKtwxNrsCZ9wR2VMkGN8W7xH4DKBorrn5SRDVU5SUhYxmnEF7BDXstoV6piQtXsWsQ6z4NkNwMoc",
  "key6": "3vdcupzLHNM4piRsFQvyTuMds2C467yf6Ke7YjUEH2Q8fgjxxsp2vHNGQKK6Zuqu5iF9QXVWXjvWw6vu1fWiv7GS",
  "key7": "XnFV8eErjJj8xPmXUeKYJMpT2nVnUk1p5EFaLNrSQnkj2poBtkvTCPuNkGP4joosNAaRi62PBMbynxVdJ4xdChG",
  "key8": "27ecLJDHEtrrRq3ZRWdVDZATYsVFi1mCdR5g54Cw8xj1HgGrxbqfBavD6kb6sjXvXE7htPuKmPbamtNQXZGBnHr4",
  "key9": "3AG38VqNQNjaWRzcv3e6GJqJGtGJ3WrkECMG9ZVK2onsNaaAzs89Qm5ma8Y6vbMrvqdcgWU4nfk5veMhWctqow3b",
  "key10": "4tE7Nz6kNWENqoNwCnCoEx1CKecKxXP9jDe53szv9Z34xueaV4sa9kmFexX1QdB54iGRo1aeniwdvn5XUnQJdr67",
  "key11": "4BoybfwD8mKe3yepnsqWn2GiDegkwQ8jEEt321r4eUwUsSAYKpyqiNWyPuy7HvaGgjJx4zkWZH78U3jrjZiDEuqD",
  "key12": "46D9jNgYo5oGVVZ3cCDq7yUHkD2zVEW4AaUTuyGDFqCc25AodpsHiezyKC1vM3QXXucuG2Ky4cyDbXXrjrmyTRim",
  "key13": "5cA2q3xrkjiQ9dGDczk4z5msgQajaT6qguHKPmPu4fXfMCQn9Ar3f7ueRbq4VUCyC7FGeTytG91oro1u3Hq8MNra",
  "key14": "m8BkRNAUWu36SsyFACs8hmmzaJtzADr55JVHPdwEzuiaGiARUzffYG3oSYoefaRBEeQnTxi3qSuTdWJr9EHiVZn",
  "key15": "43qpvpfoqXZt9ByJsvtsPZrN3pQJ839oqKuR3V7hWsHTaKtc4eteAmqgcyUk7t6nZzcEo4LjozYXVtbKD8YXsKjP",
  "key16": "5HiaAcFNSC3Hruv9HE52sBQ5feccQHPKzpiJHixpnFVBnCaWtm3KtnafFQcNpfxG4YYSLesTCshxkCyyQ12aF6LN",
  "key17": "2UpnsGdoWvmLx8NS3KvCziQ4E1UUgCFiHxtvaTCxiQTMg84jLvxiT4PskxCvoDpCNXaTjTmb8f177Muee4QnhoLC",
  "key18": "4eReSBM2n5WKLSAav8iiZUfvaYuH6n1ezy6joGgLfPjUfh1J75khsT1KUW6n4JCNLc6hrwe16T9DuecYq8N4uPj4",
  "key19": "4qBuWJXGyrjsxx6dyjD9xZXucUU6qVDZYGXsQ9moqptani5aCXhakiibJ4Cpom6wJ4hiP9TsJjBuxuMJWEhU2CVV",
  "key20": "58iQ82LaFK4bMejUXh8hBrXQHnyT84tauECFnxAQPvtemwM624LJVfFDpyRFy2yXUnsXNywPcTuY7JkeajrmgXPD",
  "key21": "4fU1FF676AuzcGkjP3wUUx3v3hJtaxBX5WhF4unFyEc3md7x1jEAwRf9RBneK7TR6RrNbzxTHRkigtJBbxKAqNJV",
  "key22": "5qzimbJds4d4qaUEqWJBHH3UHLhKFBmncDDpwfXYN1DLypDCcHETaWwv2C1twyCfRxNcwNP9KBsAxAV44hLRmdei",
  "key23": "4KBE3qh2vEqpVijwDE32B3QKMjkjiDGeN16g5GWgJMW4fVrTkTmHFajuTJWxJPxFEemKsX1FapZS7196sUi3buZu",
  "key24": "jF2Sy7T1q65gE7RCquSV9uHEeivL5JpQkSQDQCUZvo5jwNZL54K9XHCDS7g7xyDwVgpW7S8at4c6soqSFAzfPe9",
  "key25": "4rE5NVoMhXSe7QJ68y4VJFtnf4sVpFfDsXkB4Ak5yBUucNPSKcGaW7qLzBSz4jWqEAmUm3okRZ15viygcB3WfoCm",
  "key26": "466Mu2kMJkjH9EjDgc836HCwFD1R2uUMwheCTpC4j4XQRciEaeFMWzTbpxNJX4NfrwrKnMmVt642v1sFaozvngjQ",
  "key27": "chEdw8cGJ1s4wM6vfJrpnb6z5HDRg5qnAL7fPbHYNwHekNf9NLjzVA99j3ibZN2utCSyNF6iKxye7hAvdBGMGLg",
  "key28": "sqEvWcjLHU2eDK9UTJXJugZqKZU1V2HhnzuWs2we88bf1tWzWNCZsfwJuHjHTgBTPdsj1oq97xN5HQyeCctQfg4",
  "key29": "35XyyNmqs6TYkLtRd7j9hsczHQKWog1HJ52wdyhqsVNwSDxGouVCixFxHjPQ5N9og4xXHouxhK3MPNMrzsEHnvWJ",
  "key30": "2gyWEUxpQ5VCeQa4DrgoGpRTrWfTGoTKnSFJp1p9d8c5CHL2ZiNe9ajtdjXgbXie5xwf2UANzhsgvUoTjWmqDFW6",
  "key31": "4Lb4JFAUVUxurag9KuqDNqtENsZtg712gvc41apSn5yaHHAjiyFKJJk3pzk6WXbHmhTrUScHynx7vfCwVZknLARB",
  "key32": "49VTd6F5hBKn5XJkE2xD8QSyPPr3GJ6Lr6ZnT7Mp4K5guPcwJ2juoyR62RhJUzFgDJgsBHiAzyj2nEsW2MtTfxoK",
  "key33": "4BWcd56ZCoCeKbv9T2DD5Fqzn9nhUizAKqHNqaL9PpdtS2b9HEgVrA6om4aQkAAZMkiTxPYDjua8NhpYeGQ8TB68",
  "key34": "4LRuzzCjqg6RgPBFhXYnsBpiDf1XnwwRsjcTdxARzcHeJ9n6SwwMhcBDLrU8PqCfvHzC7sifyfYkDrjPpmhQe7GP"
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
