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
    "2Da4wCpgbyPzNXr37DxPSXb819dM2aazjBDHfwEfwhAa4MxJsEgjYNpAcuuTFojftDHgUBSUv27pV8JfWYM32yvZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y6i3QkcPcV38q8wRZun4McVPeQhEA9Qvga8UAH7oCRzzj7EiHeAQA3THpSUANtFd4m7FvrdUv8tmTvHEKyEYKC5",
  "key1": "4VbSA7oQuN5Cs2MuA1BSAuYN8TP6f5pxzQuQqEmQf4goLokt9Vp3uRppniRE3tnmxiSaGgY7CBsPDiagk4ts5yEz",
  "key2": "3vj5XHT9L3DNy6dzgf7m86A7wKpNgvJn4813zuCamLJp5oPficDqWwxYGL3W1sMLUQ8aPVYVS483tJp5oHMpq8wu",
  "key3": "625Aj19sqdbmq1CC38dKYamtFGjZ7zPbe5znrUHUpAcptVrazDwPetvYTSbtt4aydbgBGWok1E4i4FdSiTRX5Wa2",
  "key4": "2xQhpnEhviN4T8hAiN6RxG5pJ6MBwtzzQJX2HhQbxgjfHX3KYwKg9uF7cKgW2GFYKtiApZhT9h3gfo6tpUpCWTBK",
  "key5": "2RzPCY4Bm9gp1pecDLimLLHdEa5E9cgdmHY778Z2ymPXhTbFrwt9U5BG3d2z4yQuh8DR49MuSFtRTJDxAAppDph5",
  "key6": "2uXoSKQEp8nF5f7k8ARRqBef5pcDqPtPjuGLNPjo8oXbsKNaehs2qnYnoQtQL8DSiKjao32mvuJGK1mirN3VcD9W",
  "key7": "2P9rCjREXyRMZsmELzENY5vU9REHMi7yjAxNTdNAgFZTrwT6hTcVrfppqPR85rWrVLfiAizBPFMGrNyjjQMMpkUE",
  "key8": "DtabR8f6NyJqwVrCdBs9UcpNVaPetx7KUUjH2RKXWjEtE7Eq8bUaKgnuSh6xFeQEY2X4gF1taG7cThMZjNHc2dP",
  "key9": "4q51DYg4G1DgyBf4pLRcduAehQQWSovXVLQvJZRrJ9TbKu5uTR8qv3QPGk75j3y5tvBi5HhGzAtnJw1fj5RzoFmH",
  "key10": "3Q8YhTSTCQzxGkC2w9GSy1ovLwrrVaUfr1yJRz4eKhnYdWbb8tsRsf3fBVGsZjtNPoxAMgYZzxQwUEmhJBnUspGB",
  "key11": "3RgMzFfnJMukxjugfGsDWcPPYFvE3qejX8rLPyKuZPMoySaubjxHCDKszv82ZjaLYRQ2FxS7nvR7QAsnCX4wu1Q3",
  "key12": "4JzFXc3zaEgWMhVfX735fad4ZWBuqvTWuJcDGcwQHKChubbHdH29dJrNXEAqeVhJ3NgHVWCru9S2CCzv4hjKUvbt",
  "key13": "4LndZAtLrELLXqt8NqTH6REFwXRR9D7MyGGKPyUe2ARM8HZzLyy8cB7jStqH1ngKgWtuNkxB41QmQYmW6UGBgrWw",
  "key14": "3zvLwSR3bwJJixqVdBd8a4hGFPZURRUELeTw9RcowBhyiHQpGHSFovumZ5RLtFDpHtgaFeydqo7N4XNHJMzCWPds",
  "key15": "xVhEgpvsRdcf7dvJnaBobHqGdqB4KqUtFtKx2TzsMCCwCfSbhDmCAim7wVZRmrF6mrvefQLRy2pg8dttKFudgum",
  "key16": "3TM5C1ou3KK4wUC3oSnmTo8NgheLUuqJQ1LmzN7dwTt7cKdNBdaFttDayqiFZJAKkRYmWQR4Ma2wQPxVSkzKnVd",
  "key17": "2ucrFFfuhbcVi3DTFRS6KSmZD7v4huXZBBWBjbXpcHS8KX4deE2RnX7TPKfagciAP6ejSH7zU32YSS2y8g6WhbHa",
  "key18": "2Vx2WfuGLFDMDsMh2C5GSbnGZZ4p2hotm7RVivfZWWNduemptK85WdaAyhTRaGPhqcrLRcqcckBRkAh5rK9uwCWX",
  "key19": "5vBn7pAUPTDa3JQif972Xnpgo3shEqCwau7hvCKdk2MxzuYpeHVYHwtxahQBFqEXFnHtwNtg6ZJYBaw43GU6Bjay",
  "key20": "5H7L2nnkvo9Gw1qpdqetgppf5KZRT6jTPsCdcvUaEAbsuBreHs8M4RuLSkt9GovS1gTK3bBL2hqrnM2hyTtjidVi",
  "key21": "h3NqibgWQNnZfwACw6vxDCsu7HT2Tij6PabzaxriPGDJjTqca9gWTSWyJiroNdR6bwoSK1cnZLnYR3CyrdpBrQt",
  "key22": "5Yn6aJ9qgTYuBF8EhnbpYhvtMnU1U1GfNMbzDuXZwGCAQP8fVNt9LudC1aZqC9GTHC41xcjqeyMfpisHcLbzFZKz",
  "key23": "2gESQ8VqSoXVRz7vXZ74g5FwUFENmWTn2M5xQGdHimCKLVnYzNtHPEyvbH8ghFFLwXcrAXQFS7jJjFbmeB5JMz2c",
  "key24": "3YgNEHpzGUeZbXro2RvpgXMxcuq2g5nnCLByWDubNJjp3X8zaa7wRvYgSBksAXD2eRasQvCnFZ1xDAajJYVmpNbg",
  "key25": "4H3NgoAwP7PDC4NLM7Yt6GCUfkM1BvhpjPB4bYViMnGEfLxrTtdwHGVKBgrqfGAgWHmDKVK2AXAaCMqFp7HQaqSK",
  "key26": "45F2gwy1qGDXVHL99ZoKL748kLG5Z6G3NMm1z7FRqQe35NKJeEZVsynP5zngGdJPspKmgzxC4U8vkVU4UgbsfGBV",
  "key27": "XEjwnV4P7yeBfbD7VR7PgmbHAEgAtwupxVKEZUmwb5KVrbQbfweAVCT8P3GSBd14GDTHNXeJXELNvPgrXYz7e3n",
  "key28": "cTcf4jDEkNghMgNDu6EFJy1f4GX64h9xd7GGbCKA3xuUoDUTbGPD9scczoDR77x8yNpUWSFz9UaTpFCy7PyPatq",
  "key29": "2xAvestncKw2QzHt55TpoECKhrLtPsCPzQpS85J1NssUFzCKWHGJaGQ9dexqtewvQdLxDMwF76jL8hAoLQwdvSAY",
  "key30": "3hdBb3yKoGxdMZfgrHPVrPnrYcpLqyTNfMENYot7kXmQu3pPoK6VqzJ1My4ZU3zZ1qZ1DbF2Pq9LULhrXWYpGxpH",
  "key31": "3j9AgUzhAuoVZLomEaJgGtgksMmAffPpd6yTVmKx468iFtsWYuJpS2FJ2wP4AntZ9aQAbPaKPVKaPaS5EiSE9kYs",
  "key32": "2TyDonuSRqKkTmA3kzCbWVK8CcSvSpGyDWbYErv8cxP6vMzxtu8uGDdExecagNHn2at1932ygwmp8EbvoufVjcWj",
  "key33": "62sq5twfkcAsDQs9C7v5LnBPQsEFmxysZJaUBmAhUQnJePjDibL2HXkXTvqWatyqfidTExz4Pu5DpFdF5vT1zNZX"
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
