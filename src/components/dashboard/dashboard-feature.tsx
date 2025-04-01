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
    "3MihnxoaWh5ukYxwS7SgkzxpWMJUwDg1x7gS2BYRVViotUTrXQytGBWpMEZrsL1nPwqb6bShv5UpB5uQyhYdtZgh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5URRwe5C7PGaWTswZeaikp8qez7Yv7WwhckNK4jmw3hnb7piwfXBxkkZvKwbzriP1ddeFrbDrkdEwgWJdFdjMFy7",
  "key1": "63Lfj61zuf9JuhpvX4krhdB5ziSqaGMG5oiC9rK27tKsiCG3rtyo4LHexnt1M33vm8TCyyPrxLiu6GbJCCcPc3Zt",
  "key2": "3LbtiqDb16BzXg7EaWbR3HbYAcV1hJaf2ZbBdeas9EM1donSjk4WgJTvhW9hNp1SoycBqo5DYWuLyG6ZNkgJGebt",
  "key3": "5CLVoUQwJZu14UHXqqrB8u6jKL12U52ixNL1Rho1VmunaU3UDxCiAtmkAaAXCiXXsRyerGKV3kTqJsotTERpNF3s",
  "key4": "2fezPHkd1s3fsWo52zfVRevtmFkQgGaFQc1B3FifHrYVg4Vcv6hs12Urn1MpvgkRaw6oLtftPvuTHC6PcPG45nV3",
  "key5": "5qmyLrXDwHgVr3J8JjEyLBrZzxhvxCckA3NWv1UUau9JfmvCfKUM43epnU1MvxUAS7ZoUmdT6Wo7RmJU5Ko6DV9f",
  "key6": "2yPeZ8JDsCPcG3TK1VN9SYGQBNXtjVJx6jPgK3YwaspjVmLWDGYxTJBnkHEyJPCPRoJG8kaGyrnMmAHMvFpybj6b",
  "key7": "3NHBoGHD4TxCkRNjSMpux8jSuuykq6cNAXC5gjJtaKG7cuBHvuUnPQtnQ5HWk21iXTEVGNjzWFXT9mHTnbXTEoHN",
  "key8": "5eV1mssHxKXnGAUm2nrLaYBEfVXNfe3qnwmrqd2zd2c1Jn8AYtf9iQ6CnAiQmTnKVtmx7sggAxoT35Chxbn48wBP",
  "key9": "2MRLcxoT5Mb5jAu3Drj65zGiQFFEt4vqDYGGfkkiySV8MymM7KvAXy3qcjBkBYqQiCGBLPCcRRdwaD9WY6nZvX48",
  "key10": "2NgrVYXTxEDqTbDH8JyFf4ZttTPpmmKX9nL6pbbPK7atsybWJ4dYkRJonjrBvvH6hxmZ3HU86ZUTXgHZnpgJ31YY",
  "key11": "5py69FJX38MhvKmbpuZZSGdNV29vBJr4TuuwMgq9pcxv27VgzaX7GridGFVTCs8srwQpkyQSwoYE3kxr686Z3ZVe",
  "key12": "1xiFFcfVLzaNU5fWCXpqqwrmqARWMPUdZugf9RZcEQ8cFpiw3u2VaE1fJdj4SzRAR3A5A4nPrhMmkcjPgVCSmYf",
  "key13": "4aGA2ZWiFeyLwaL6M3d12TwM14x558Fb8BoFaz7K1aJg1GRNRgV6rn1y3tikooATw4WogqnD3rhV8VbhJGv4DB94",
  "key14": "5cwwTh8mk1a75WPVsKjtrRDLh4xziZCHEvs3viPhEn2qAu4ywJdntr8e3epcFnBPUf6j2GtDFPVnJmMxrfEcEg7g",
  "key15": "5rBqKcCZ6iSoGERRGj9CAXzYT4XwZtcQ8b7BjqMLcuHVsSASSewDE3ryn24bYFVEERMVp3CK5DR82aGTCkFZ2zXK",
  "key16": "4Hs31xFW2gUoLY51u46FBwo5H2dJXK7utsqW2cjTtDKDKTNveHKhQ4SPURYTeaFrVqJT7SuW8xtm7GRB366aSs73",
  "key17": "3sp4cpnjFw4bcjyz83K2mpVi7t7a4NfJLDLuzkqPnHZnuBmK8nFP5ZdirEM5Hzgcc8S2U6BFnXt6KZ8qC19zgqWw",
  "key18": "3t1nnBQd7eMGbFFeR5pr2U3VCDr2aJEc9WkxjPc1Cw6q2c2rJDPCMiJeonMyzPo9FPdz259Gvb884GqQebcLPfLb",
  "key19": "4V66NvSJuMsD4Gvd3FaUoUTc1gtoCZfD45bmzTGbyUAPKCwXFBVwKHaZzFfEFZ8yF7R7C6nPcJRkK1mZvYUvWdRz",
  "key20": "5zcMyeVzEMYMkSgWMVLD6DtEDMMTjR6wBoT65RKQTQcXJ2YYVujT9vwZV29jkfguFP4qKcA4ZKsPR5GVcxdSvERu",
  "key21": "5Eav68us82kPfi9EYDtHjHesitHKDs1WrrS2kzCiP946qNFwAjfdwgZvtmyT2NcWSKGrP5CLogKmbLquCpiVPXS4",
  "key22": "yFnFEgXXsnmnCw45NDi9ot13iTjWa4geMxmRt96MFQ2mUHV5Rxoz73VyKxk3C32W29w1b4kfPjgXbbAkQdVdqC6",
  "key23": "3FjT9sH1xQ2T5ASX8Kd34exTE4Y5LfZcHNxdyB3w3Xi7Grr1Nwh4F9sqovb4b2B1nUCpatugvJy7sG1UbVL9HUjM",
  "key24": "5nzdGCg4PgF774CRCbhTkoRbnQ9fEW7BEC3699NuMiQTfC5yQyZLe2pzjhV6hNjkqPUw2Cp5u7qri9P9nSpgxCe7",
  "key25": "3SRRSZY3Hvn411fC2YYNixNGduHwfmehnbbtQ8f1pDMANYvsbtXDkC2kPEsj8pnWob2GHL7QXVonqP9mV6Hbw5pU",
  "key26": "2BYBVWX3WoDYSzJLSEH9SJ7jpP8r8Xwj2MQZd4n4AnbL4K9H8JG8oZt4VKzD6x8545YScaC1b8TjbuFH9HpwyUyF",
  "key27": "3XPCkMrZigHxaRFQHPQmExEH9JzEXVQ2924QFmgNkS982UCEcZ81qUnvMwUNdMDii24bHufpXz42Z4ZaYZ4gM4QH",
  "key28": "3Z5YPQJfsbQnp1LP7S1RoSg1deLKPX1RwgE9LFiEEQKgPBbjYTYcws3sVrxVHuNukPZNnXT4EfqZuRbzPAg4QtG2",
  "key29": "2mLPar1U2bR9nbW3a3cBphuoYe65Yoi74ouAcW3CRT3VzgeZxQiGqBmZBVspY8k96kVkdV3BFCQBu2PsBiv3nbf5",
  "key30": "62E92DwTUPsQfsSkPkD4ptnVjjhkvk6tCYbzXK8sw8rZnSgpkNz5MpmVuKNwBnkWExExQEqS95FYMeNygFk9ZYDa",
  "key31": "3HKjZiofP8NV3MtH6TktXnXbissq35o4b4QUxE3MRzumPuxB3TD14ZgR68SCMvZbocUdbQuk9SLi3RjEbJ9tHkfp",
  "key32": "3Vc2RfGahspzKE9JeQjtN6PwGdZFW5qkDwBoHfPPi5mS7ucExtpopKcDXHbYFSGv6Bu7mtvzKFwNxFyJYqfbiFGK",
  "key33": "4DgEg9CoL6YDbJe8tAWA3wWXzVXLzf7p28FZEkoG3fg2ybo24gZw7MM6ETAPosE9rJhTbW382BTWBq2r1U7mB3J7",
  "key34": "2fjxWW5EUGGkjpapdp26v6Zo4DSm4fpbQAnAcEHaccPTRVNA98264hybK2bxNRvzaUwTDhYEgxUNs4rEWZPosdTN",
  "key35": "33fSYkPo2ASBxtKB4rmruRQZnLDMt7zxFrYdqJktaPdyu3bYmx11QyTC9mYvb9BtHhygMa3zMUJmdkQimZxfULz7",
  "key36": "4reuV55R2unvfCTPKjMnd9A1E1m97KRwJsHVPdApcN56KmG2Vr6QPiucKZ2c9Wp59oGSwwu8c3WM8mxYEidBGRmi",
  "key37": "2XBe8qym6FWaX9Xzpqf17W8vZ2ubQo58JeiuzLrPhcqQyrv3F7n2prVrvJbCnsRNW7X2HBknPGrgoB1JcErapRH2",
  "key38": "342XVNKN7Ra7QuwjuMwwchnCp7FYrqqxNMUCBfXXgNMkuYi4TtR1N5pYkHkK2gLPTNwLiUerWwFwNhDbG5FRTmzh",
  "key39": "2m4pGi5PoFjNgrWv8kGsNfTuWroDKmABtLigd3HQsN1FpvNLHVSCi4Zr6Hz2HngS259oTupTJ4fNvj8RQQY33iox",
  "key40": "4aTRpGLzXg6wWpT3zh7hq43b689y7UNKkVE1rGMW2kyb8uMvsCtJospRwfu7awNo1Ze2zVytEJ4AjiA3yRUgFbSy",
  "key41": "2sDSDhpYRdnYc1Ei6sD34UbqYBKMP2FBpk7wRKayzS7mMRuS8jqMD9HXgiLr9N4wPeuWQeRKDZskXKjBzubBijch",
  "key42": "4cewEBrgsDJ1z77Jj6Z66jg5dzeWzNcyfU5wb6kGuSsA451wfD7AryBXxnuCU84EGzScsws1rBeAdHJtyhKoFwBT",
  "key43": "x4gsBDgmu8SdGxAihXziJS3gVpXJDr3vfBCipcdFnwd9GzBJBtQeP8ibQg8BXuFNpoGcpuqZHt8ke3bb7MxdDV4",
  "key44": "4mRnqYUVv7S4LmpEcuJvNpgdWjPLHsBZYpGZp6n28LtNzErK1iiPrC1YYS5PSfnWuYERF8J22HhwZ1UnjQmYxqWS",
  "key45": "2ZfRVYoMfjrjtSzzaTXkLWEGLa4hnz8GuziBoh8novdmwLpWKMTBRfX2NuJ33sCYhkeL5LTa1yzkfFgFjVAfHbTh",
  "key46": "5XfYrPZD8k5JydZpvocZYzwu3CJDSbdVMHLnGVgqKng8it46BbQAR66FgnW7LzkwoDQ2H1qBvitCZgppYDN35tdt",
  "key47": "5E9qLmFb6ZPftGqUEU7xne89jGuo8xEpgGKUn9k9soAmPPHBnapGMtEbtEJboXsJpYJRP7mhfS3SpPp3m5qWd6kE",
  "key48": "3WFe93aXEqVVfMuDb7MnBEajQBp7AM4mPQaAXKwTt66EQPVAuspxykkfSLmhdVaEdBxYRy6McMUHPXwTk5JWJ64a",
  "key49": "5zxtmqA4UgXEXL356oc22dHxcW29UDiEtB6ygY6CkisWrUNTkdET2J59dkCHPt246ba62Y13TP6DBwkBzJdbfAy8"
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
