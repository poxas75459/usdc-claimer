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
    "3PF86RnVPLVfVzKZAd3ncjgFe6aU14r17LWkt8sc4KdDc8CSguZLEwXHR5JdNpVguRNXNbMcgf3Y1HFz588aLjdq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FzxZzXynm5bNCgZXvk3ezpZcm3becQquKNH7gTa2N5qupLTSy6aCmEikRmoz21T16XUeLzsZZVioe89KW1UR8QB",
  "key1": "3kA4C4CTMktNGzn4xe2UDusPHFgCCrJUXpBPyRkTxaxyRhZy7yYEUTcNjAwP1PjH1ZTHqervhLMxhL8ZF7vfzXuS",
  "key2": "27P7ycgMksNpB1wwz9WkVFVQ1oMFBxcxWsZDMqct6o4hqPVaqQDudpSB54EF1J9iCHPVjxYwGzKCn1wNxFhrDRk5",
  "key3": "2XmJPKRTpoEDRQfaJgWTTmBTVqDw9LYJRJFXFp5DVUpQCKvWTdRmZ7QiiJhijbS4g7wvaT7paZaQ3NQw9znsbBW6",
  "key4": "2KMMAvEDKHpjgJHdnsJdz3j964jZQiubP91ycpvkb6vEi6Eg1qzHoaTBpUPrR49gS18JfBhnAnnodG2Sqrb6u3Rz",
  "key5": "5yNigFGUeYqG3ZLV5XRCNZ6oah7yM4TZEozxhUSYwW46pvfYmgyvqeCmg4LBAsiHnKkfKmRzLmQHj2fUzeSRMz3",
  "key6": "243TPs3w9zgnXacn8QkJWzFTdER8z7pVKPeFaSepztYgcxf1vX4NeyXNWFSMziuvN6W8AVxwenWqBxGPVC2Sq3ib",
  "key7": "4pAsUgpnBzm6PieYwPzipbjdWZezH73zeaxHhb6xkdCB8da2Jdm4itTpJ7vZPwvBLfKQvCN2r8hGruaKvKrr7rns",
  "key8": "oSBhbfMV5BB2uA5CRiNcqSnxx8zAJvehA9JJHpn6Fr5Yo8yPMcdhFTpkK9WrpNja16px41ayyYvZKK98cExpFYM",
  "key9": "38DpotgnoyiWeX2fXjwQFoL6emnJQAD9HSjTZBkJXR3BFMj8vpKkwKrVrYxxE4pufsD9PJSpMvMZjUvwzNt7cZK5",
  "key10": "5xVbuaVWCUhev8feGuvf2mU2Wew2jfPyR5io5E7qvNz6erRJZTDBSA1ZaCGf3FmTNtJch16guThLSRwhAQRNbhUZ",
  "key11": "3JMhJHCXfkoYBnK1Vb8SYC3uy27vnY3GapChX4Gxv6mWyYiZoiFENPuo2gZc4BjhWt3XeA1cZDSWRw4yfXekkyn1",
  "key12": "4YVn18qxMCm5eW4TecdUGXQwTNYmnRE44VPAXvXdSb8EdnwF58ieVUJ5fvoUiUB2yqYPmJ48HVRVBk3vLftUSn9m",
  "key13": "9gZR7RKDHWD5iofd1HNauT4meBDto9XNruN1ZEmhVbJ6g6gomXjqxeLK2dD422iPbngX9S175QopYPP8Hbn38VK",
  "key14": "5Qesfrpz9cAkwn81kw1nboLa97z2Qd6ueoHvZJiBuQNjyHdYxyv74SFXU3fp6nWWw7fGi2pqKzr4ErpjnqrMdTpB",
  "key15": "5g16G5mJeV2EKscbXRpuiLmz89qqvEDd4BHKHsTUJawg2r7MWs65GnWnsnF2zaLQ7bJYGPe4CCvxwzrWmoR6oduL",
  "key16": "4YzS1CR5eJEntbRJUG4qAbQXvinhnVcb4b8bd84nhMV9Cqe7bzkwHHK1pd9n6dcWwP9jJW4qbARfUo2y28FXJTEQ",
  "key17": "63QJDvfoWM6HzpNC4RFgQUoYpP6JfYxj6BKxUyAXGDfQJ4bnhGRZchmixL7NHzY62wjpvkLYHvUv47WTss573ieM",
  "key18": "WdsaBAj4t39A37nEeAYTVTV6gWUSYgyXz4GReCvxf1E3fWEiuQp9NZ7gevhwZphGUngkgxq135KqgZgJUUqNe2Z",
  "key19": "Xg2vZcybeHs72mMMQoXWEXPEjHMgtPXCJciZgadmw64c4GaxJUh2WD6fyYFUf4U2yyAvq9Tqw35do8rTjwAjsuM",
  "key20": "4G5Bbagx6TxfkttZjr2Jt46Bm8Ci8nKkoaQJHsDf1gEMrmKJ1tSejKCJ3crmw7uAdfJAMDz2MPk91N3q9mfC2rLn",
  "key21": "cuFbW8MRXvids9RT8VWsiVmzMZfdkUacXfgQFSHmNKDfbfkjGeRtLv85KAHbakVZLbzB7ezv1gYzA1cABewSHC5",
  "key22": "5XYxHzWMNhmLX5PcjcoewgcSm1H5L5n2NCFbrUsm25SgYgHS7K9cWG6nU4AECsvczZ2W6cViE8MRr2Pq35Ktnaq1",
  "key23": "3pm5kMtdvYnbaZvmHmnfwohmSLXHgJmUZsXhYmLb4n6Vf4k7iqzjrdHQb3m3h5HQ5ZZaXGiLwutqKPKAoDnu5Br2",
  "key24": "3W5WWyXc5368AmjQfnXYKc8Wj4GfPr7v6DK64RbNE1gu3vVYhvQmTi4nCSRdnbmm7Apwv4TcwT3DjqtumxoJaYJF",
  "key25": "3B6HBm1W3m43Qd6vSjkm5mDYBMcJnbKNfgMDNxKYtJfJo1VBvuBcq1mTMJXdRWCQ61rxoXpJVX1czqubXfBWx3Hn",
  "key26": "8S9zBU3GKtBKcWWTWzfeXNj8b74ZChYX9ck3YLzGvRdKyy9V2PFcPDzoj5mqbqMHAfPv5njZwQkJCsUaARjSYJZ",
  "key27": "4yRUDAqxUNbCrnH1UkoRZjHDTWHsXbjHsBUugFYTuCxWcbKzndtyzPJN3fm9hfbB6qEPyStkKyjNDN3TC5DzYvPR",
  "key28": "4CF9qo1otbr3VGTMX8xaBxLfPqFBZXQKGQGqN5tZRJUsR6jote4C6h6HGhwiSSogYikJCXr8N51kYnWcXwbWHEow",
  "key29": "468PWnbB8d6vbFjmWNiNsyTN8TD46yLqj8b8LbdweuAYftfMdu8UHuUi2nqT5wNovnrQgF1Z1dRiZwKKAkVcequX",
  "key30": "5kCQyYWLVd3nVSsj5nnRRbetN9aGreNGB3VrPCcx5PUEBDb98mL1AsbX6yeRq6eSmf9QrxvjafBvGzKWTLHu2ZF3",
  "key31": "4na6YpXhBnf2ieF44eZUHX1c9aE1gQwHDWB5PK6efS1kzBwCzdX7PK3d2cTyTveH1RC4D5CdWV8tEJw3r9s1RRdE",
  "key32": "2BhiVrotTiiswzXGBrkigy2288Esw76NkzgN5Kk67EKFZDSWfqMJtR8v6K3PZhtU9j5Gw3nKtBx8jP9iA57MfyAn",
  "key33": "YcZpBofxoZyWCtr7evjP6NoktoWCooYf4Wvti88dskXjLHcWDnmXuFqL4NGCmegG1hv3DQBSkrert7RPrEHdzxD",
  "key34": "w57zUiEKdgyYrPvBzUK7YZgkCo7LnasJi2BiiB8QHwRH4xqzQjyp6xJgQuvwZv4Q5yBX1BgLyixga2myGz6dXmc",
  "key35": "2agYnguNPYhoUxyTsA4W3jeL3acSgR47B1oL6KVbwf4qTtw7fBhiSNiBtQtRfr84NhMxZPPph36JgWKmDNjUBHBS",
  "key36": "3JQWcNJjTnq2gkExkmTuawwTNAQUq9mDH9sW83La5Qmb3CnpuK5KbR3fCuqxhac5qSQCrmnkBH5Xc52uqNEEYzxS",
  "key37": "5en7mwuHrdroJhyMNjJKjMBwJy4xK5PCQots99gsjsLUe64GxkFMjWPDpLvAhdPtiBC29n47KExv2Z7zMsPZ1a36",
  "key38": "59kYwPvL2vxUTATQTLVUq1s11aCLvrr9ceiLSV6sxC21s4AZWzHZrxzTtbcmQz4wg1mdj3MdmHHNRFgcM1WykaaW",
  "key39": "N886npA6LEKrTPWY4k2j8qWEWGWH8VidDX5FyqBojmMJvVxDY43NAqhVmkZs7k9EGHrGi872n7LzAXwgLqUx5tn",
  "key40": "4ZqCLppY7gBX3LrrGq44oK78z1fZvyEze91ovfW2Jd8GUGY1LqxuDckYm5Wpp6QVurXuVN8T9vZVSsLQMCuMLJKQ",
  "key41": "3ZE1U5KggLKNaVaKWKd4LY963hYbtNunNcipFbVQ4PpbSch1a2mjKFsxKkMb6aNpjamtemXq3Szc9mxh7TBoTmyM",
  "key42": "4rTZgR1ARZ8iq9Gnfy8oMcekS9We2w4VDH9Hs1RGyUuv9AAseY25BpV2mQEvY6AYn9vptTwNdY8BNbzugrmH24oy",
  "key43": "46AgFhvCy4hFedHfKtDnKnZTyrY2rvJ1rDTWdnBkhndsGWUUZturSGBHc9iH8ytD2QFAgytLEsagCRZP6oRMPnwH",
  "key44": "3eT14fLxCwhMwBYKoJfBmVfBLsErHPREFiWHkwqxPiahNFoTxqewxwGcnzKhKZvQ4tAWrAZH6PdTmEWZ5kDVsAUV"
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
