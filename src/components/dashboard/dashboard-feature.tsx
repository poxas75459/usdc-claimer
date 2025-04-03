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
    "2tnhr86fvbhR9GaaEYmYBz3d8VdVfBBFfRXcMY6Da4MXNDEu5n1uJSrUVk9Gq6aaCfHhPDFYfATnYZaEVdcJcrU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pDqTy351SeEwyeR5GibfTTXZaUHzNF8rF1i1uGGsAU18Pmt6v5xu2kZD3BCJ77y6qvvijNH2CAhFHGFZDdyPRuB",
  "key1": "57TrfS7HA3h77BD4L9bXpUHtj1E1Uhu2Diq5RWK88KwdGKAkg5yJRQr27N1tuT15iyjG3srKWw4wZnG6v8KidrCM",
  "key2": "5yGnjnTsd5xwZfaTtvwj3DpAcg6hL91Xp9YgkoAB9zcDJhG6Xykd9J31jZMpDcvVXp6CH55Pby81Yg56ViLFnYkJ",
  "key3": "3TnhibpDaz5XHSGSZypeY6Gzcz9wRNgU2ooBhr6Uq6nNv1qMvxPVEMzCSPx38usAB9BQjmZkMj656dEuUkadUQhC",
  "key4": "5jT8Xrbm8AWZQKVTP92mhJhfx2nB95nHktYATZghrP473Uwiyyf4qb4W3BpabS1zyinhs8xGbZUpvLEHDUot1u57",
  "key5": "4bDci5PV3uwLgupeHP7ng4spqwJWoRo4dqgPTmCgFRwEkJJ9Jn4jhZhqw6xFEiSjrxKbXwCGXWvjPgdYu3hbwz44",
  "key6": "3VzDYxYT4xhtiM6gTZces9gTH5kBJYhf61JmtmnHNNkphuSkoA1w1RtGYP7vRFxHu2GjLs7cWPpvKBgD4V4k7VVz",
  "key7": "3zutdYUnXtHVtKjBJ75HwfpbGGRRWKCT4579Not3LASQEd9DskXnQ67HgSD3sMMg518g5bNN4EpHqTMu5iDCpjng",
  "key8": "PxPZddoeu68zxrwWdF4rP81zDZY3mJkcRpb5Bwsw1AK8Qi5ZyAxoZ4N9TA9yCDEswZhbMGx27DJCgqzUYTJBYwe",
  "key9": "4wVHXvrosMmyMq21yMARhKgy7USRrJp5MGid2vHV3MivUPfuydy6h2sFQMjzjgDwV1eLoN6sSDSQeSBcsxUX8GR2",
  "key10": "5vgoNXrmD6tU4jcMMTtzaXYxgYWnTyM3iUEMaz1KPALwuMn1wtEndhvrJXD7guZdBYkYuuCUZDhjKzSYXeijaNgh",
  "key11": "3rKuaVuMGyB147xBaji1cWHtNRrKDBqXZ6xGhEVHd71otJFwMzMJ49VqFQuQoQywcSUN8ZrhLS3nVDNaRBdVTsGF",
  "key12": "2Vv4iG6o9UEgsa8mmwrNGdTdRe1dCJ8xyP4ss3qva3EnoPB3j3YRTwHjkat3j7u6pXgAo5T6QVn6mCRCt1gqrX6C",
  "key13": "EJnLmFdxW5RdUKEyjBcab8ghQm1RcLUf6NyyXGie6S4d9hydeeSmRvhHdyUPKraFvtD71ywnqT9svGb3aoVk97y",
  "key14": "xAe9fgFfpRckF7VuS14ZEZWbi1au1L7VxNZnkUp53nHtjU8E1FzmoSNnMetqgofgFCv1CuKbrkbsrJVR2CXLQ2L",
  "key15": "2Sy9kUMqVLWZPGADs44bokQAhf3Fzqd5FSooJgxnv6xNfuGjV5iKFmq7GRv1jF1635JZ2LVmhfhrRFiMnG2dvZGr",
  "key16": "2FeRHGUuFLuefeTHUuaV3LpTYwbSxKattMnixPM7BAmfSnkUo57qEwD9RP4EvkJv3J17V4QSoMDkWq3N9SPMoBUg",
  "key17": "2DGQdJMPKzTkVc6V1Nu3h8guPEov61bLNJ9fQjuHETFh2NWn3a4mY3g9URr8vL6qhTCmEUEPnUKGbZkqHa4xncKh",
  "key18": "2j5RbcT8YwxeRMv358DHfv7vFku6R1U2yF8A3KTJJVndJprkFRZkMqJw4Pb3BdiJapfKL5ujmM3uaTP6MDXAkwiU",
  "key19": "3e2x67U7u5gLur4PZgNZyf2eW3m87ynMfPPSsektKDhrWgUtz6Ub5TrJBLbSQLvsiKch1JrWTvJkJYUGvqNv5hzR",
  "key20": "3DZao2k5JfHhjdm88mu3UZYx3XxEiJrWvWyBbHrbUZ7i5wLYFTZdjXafZrfQGNCq84tf7oQoxHqULGyD7RYRPkZR",
  "key21": "5bKb4pwdbwdyaPw49bZKo9Bv2HCYBTTus2Tnr5dc8dn6mekWDVcjKtBVBvymZ2cejifkjddfqWWBLnTi8t6fwkQT",
  "key22": "2XFdr8Hu8DoBbnhMmbEpDgcLKzKXfsLVeoM7XENDpwNwpkNofbfbwj12DskggvNK6DSzaS8nhu2UXX3dFrRbKtFs",
  "key23": "2KWhfKgLHaXH4irMQTNCyG8CPNkYsTjuYXwJ4WFLcsgaanYKLyFfzj2RKLmKMKRTaphjkQps6PtYCFve77xswXCU",
  "key24": "24KZZLi3LW939dk8aBuWGmAexfQ7JA9RTryeFcWBjQZ4SbzsC3M4AAtKrR3SEmNCJAAjUmB444z9NJdSNyHcasxe",
  "key25": "4BM3mZ1kHFVUvKekgx7tkok8MSoL4uArxZWwZzvwWVW2uTBNNeSHiNmAt5zhbf2wiSwvxVjKXGGumdpd5xmPuNZZ",
  "key26": "1JKTUvbMsX5hDCqYZHemKUkKKU98FhCo8z218QA49HbHiG7ixrcapxWiYHfnGLyH81UzBBBYRnXVyhw9m7YeUVf",
  "key27": "3PP2SBeE7Ly96MNpxaNzsmo9XGXhk9hSCvDYaVCh2GMMwwHxUNVMdDbfRzMz3S2q79kYjG1J1fKweDDrT5b4YFPc",
  "key28": "5sMePXhtMRfFqHqGGhtcoGQCuzDL4BqXhGUyREy4Y6psKbXUzKnFhadsPMg4ARsvF3wrSLgbTyNDE19BRiENkdRt",
  "key29": "2kXcbnEPd975BqhnZCwRFCNNZU9GSjZzJ496F3amXYkfv816Z34BaiF6BTj1LaZiXJ3NB2qDNzKNZieXYu4MB1zU",
  "key30": "3hz8XzCRveN9fUF7o97UvkHHrzTS8hZDsLtE9NxvVFLSv7U24SYnPVoWpSsJSaMkvavvK7jCdSXnVH7YSURVYXXe",
  "key31": "46SgXcGRPd3mUdsQHf51vrG2P4R1T2kKceP1ekpHFND22JDSov8R761i118K4tnm4AXLYmgmFyeRiDMTjaCemXA5",
  "key32": "5W35u8vWpmqodKiQv7bP1NjzLJs3E2ngLeX6SYTMSa1XumhkkhuFAwrNzTZphb6Noo7XXXfsFgYmAhaBGfnxZog9",
  "key33": "4p5HE7sts2HGUcTvzDYL8413G6yxLu9jbEsS6BLqN3bSeDbAaZtELkhwfE85vkrYDyVTMBFYRbawLg9ciTbMwU11",
  "key34": "3yNuEH3hPkpVxWqpjLmsWTogiNfDBa1g2VQDiFgxb9L7cVUzwk4e2jgaHv1eLXpD8Tomi6zPgqDXP9obaUsbAwPA",
  "key35": "539MHkFFvTQ48q7y8FgXvncvEAtHxuZNJ83qvad2So9n3R8MSPbzrECQ1XdziYma5rnun1UQDBr5v89RNhTiJgnj",
  "key36": "NaU82eiXYqWeUCBoMBXJCfX5UT1VVMvcAxke7z35iF5Cg8WD6KtJRaWjL2soed9PHMrKB8bRjJzHcnS2Ypb4wJv",
  "key37": "49w3GZyftiPijBqxf2naZg2Uafwct1LD13HqEGmehArjdsdWMhon3toTercuwQRnbJZsxuzKTUDkQWBa2h15g3j8",
  "key38": "GUTemR3xQL5YTSEYTd2JA6SvomV1q4CY2XWnfo6FLU5QZhqxf7j98UNNcgHrinoUnA9uNJascJysaxD7QgJ2jRc",
  "key39": "5j97aBWZecC9v3ESmN2iLR2Mk1KPQWaNXRST8zYvvqZ4v7pn6rGEkbnixHKApSA4usYWmUdwFcCz3SMw1njSaQ7R",
  "key40": "3L7kHBJs6j4SstGioR1ZcBSLmsUfVDJSv1EjEUkZVymJuTCDHx3modGJfzkZSHA9WbGyauWrzLM2uxCKWDH2bvis",
  "key41": "4y4SDCEAX4ZpABAYe2U6tYZPL36uWKZ7X5PozfVaAFQqBxJ2qM4kfmxXq7DsFJLidxz3deEKh1DiLWg53GdefTQw",
  "key42": "TFH1tA3amh971TrwJnkJPRizZyJVVP6QdzHNnbKByYVgPGVQW4KMWJTfZkpEsefu6ysufPYcchCy9xKv8FpU7tN",
  "key43": "iLaSgu3kyMY4oPPn3mPrjzbMCK1kbwwBPgLFynnPzWYs9YB9xp5fNxnc7J7BdA6YhYs7iPL5pUHaH6vXXjRYH3u",
  "key44": "3U6yCzW3HDgYavHDg2AgW6Je5AsxYnSSPqqhcFBLL47mbCV8xpkjpSD2bVg1zJxjRTbtyzfJuXtzd7gproQ3LPd8"
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
