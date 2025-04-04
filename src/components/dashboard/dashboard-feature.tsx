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
    "5VvN5yps72uuWTMg9G9PmawezquUFKBHWhhJwFfJjmWR8aPQ9YmhJ1J25Zog2t4VgUenmG4eCHnDeX4UAMdLJMcZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RoXXn46zAQ9oDR1iHj9FvUJuq6mEit5mH9WhJSiWPQHUTWvx9Hv1S3q7J9565Umwr9BmSK5tUkhdhMKSket6V2h",
  "key1": "2bj6xYnvU1htL3TMLv1JwP7DQUf1FX3pGCpwUnQNtP9hk94ZxP1EzakbLvw95XhFxRK3TCosC1NJm324NWPzDJu9",
  "key2": "36dHqGFAJRo72SZMHv1DHi3TEg1Gp5JKRPENKNbNw1ey7pjsQbQjUhbzUhrShYevVVx9wzE9RMiRbEmSGLBaQJBb",
  "key3": "3tAu9sEECpT5XU4akoob2LZfG6Yr2SwQqZxnBZrvJfFmE8W7smtLrEb6AfGHkssrM49tuYgnjxqTJCoBRoXwQXHA",
  "key4": "ZXkCv6azENQHwNnDTu1QxzLhatsimFzKpcy2ekkhkvkUXMLKriZ1DDMxEXoRBqFKzpAGc9QmKeUau6ymYZEdQAN",
  "key5": "5myXrZCvypMkxk9jmyb3BzcH4Fo5KzzMHHZhDLddN1AYUXsLvESXrpT7sm9BUZFr7aXVBeoDhHvaahdVHAXLAJWJ",
  "key6": "3nHpX2dwgtQ4yFsxtZECywBNej2fTi7EPyzCZ66nKEE6VeDXxjMDNWD7bUiGqSFmKt89MLFSMCfXD9gH2ZRuLKuR",
  "key7": "2AocMofngdb2sAPPks9EViqnT8SBi7bEtjYBWqSjiJfL9D9kf1s46qyN7KqsjYQsBFoPXe1axxadTFvSAXkctPQn",
  "key8": "3cMbJU5MMZbLDHnUuKSWXGbo2Teyi3dkhKasn9r2Dt3PuV18p4W1cTNsz5jLLpUUF88UggcGnkopypT8Uc8WfEF2",
  "key9": "2BpExj3EjvFzUbifisBMCXUMzV8qHdQTwYcJwgTUkDWh8hKdcdfzzikrbXDHhS3AD7ULWyGBp8JYLAXZGm8EfuKh",
  "key10": "42NbwqiePYaUcWmrTW42y1SrCezStFpWjFebCqukumihTgi55rJWp5A1KMDKqFJNRLAp5XBK1A4GNyQxGDqyBsrV",
  "key11": "5C8dFhTfomfABy8muQZa34i68qHSrYXYPv3SFo4BW5QdMshPPZowcc1FTNSRiVhTCmMWnT2m7AUJ4UC5pdUAPTab",
  "key12": "66taUTe1AvcoMv1YJ3FTmFZBp2tc5aRnZ6ELAmFgPPZaDPpKZWuoG4M1Bw3WE2vbqHFyAZEbkxp5ZNUnmPkXquMn",
  "key13": "2NRixLaH81GjZxRdrgRqaEZFotPBCYqA5yQqzmSPyUB7QXwTjP4YFsrRU8VqynZW5rzo7VaqZbN2kD7U4QqZNHLJ",
  "key14": "4nY3PZudXbH5E8U3XPaqoJgwMXzADjZ6tgVWqQNX9cEdSPXspJ5CSffZVi3gMMZntMWRerFpdcEApEZjcyiq8zqG",
  "key15": "6X1JQ2GonCwHRVGGMdnumzYG9cbtCp6SdPNZHW4YQEU3YgojCVfbS4J1BTn1CBaEsANj9LCsBZX3EG3UCw37gtS",
  "key16": "pcqhsY3piZnn4GtqUn87gYrx9XmcZcyPwRSpxn7tbwegHJDkcSvT7MGT6goF8nJeSsLkr8ZaP4EKaknbPSQw6U6",
  "key17": "4bhm214gLw5t5PXJ1QTwTpsULsDQ36N7ycWEKgq5KjnekRaZDPydgAnktPS6x9KJxPPx6r9MAhMUw8cPdeBxJikr",
  "key18": "6oA2uQr5MYkpKy5Eq3YzWEnMpkzw2jh22yXZ9NxHusFXMwgmKhvd4P9ZM1odGLGbfowaHi9cbvkoBVSePhPawS7",
  "key19": "nHDYc9AfzoWk1pYV6u4Tw9PGtKtr4vhxxsDPWFdDoR7h4UZyEv35bjuR7XrRscmNanTgKnLByArV3uShQm5nQgW",
  "key20": "5hi11tQ8yFRUZ36M6SGEpLXvtva7L33DMZnt4nbccpMGMiZPmKfhrMjFThdhwno4QHeLeGATQicqSaAgC6ka9gSt",
  "key21": "YAf2c8MfQsW32UF81N3PjQ3wiw7diBxCY7LEfBxRG1rWwRw3Ea1pRM4Tww3J4csC7GiwjVxrhzqmUSMN6RzLKzk",
  "key22": "24PDHv1hautCEx3BJoA18o4ABRcskcg5r8A8sTXHYSW7Fzvgems4EWBXkpfbEDRdnrPfBiK5mwxsZS8wX17kks2C",
  "key23": "4AQfaVfJQmP29mrVQwwpuTY2Ykxbe8APvnyowzuuvFmadgP2yeuonGk1unEoVhGYaQYYsyJTDfJGT2b2ck6xaAjH",
  "key24": "4TXE4uHp6MX699GLRzXCkdaULeThcf49ZAxpQ5T86oPF6urXiqKGh5bch27kzefjZHrGX2gSCvMnHZvW7Rr5izDY",
  "key25": "5x1962FjVMakBaHXSqa16L2ZeHjnhoCUrRZ4YCU3CarY6M4MY9G9LHRGNFGHZi7wpw5hnbsLtLjkRGPGSJsVbmtQ",
  "key26": "62yiS8hJKcG85epLoTi9QpJsDQd92ZMcceWAuLDf2j1Uyrn9nfD5vpDVCyHL3ERq5aebEDLaaU8c3DCdgBA23jno",
  "key27": "3BUP3YVsoYvcJtPSUsuTJbKkKmk3stdRYrpXWoRAwTxnRfVoFL4xgDSdw5gALDxCjdmoipsVD4Wg7Au3BPAvNXH8",
  "key28": "C7pdcqPuMnTik7bVAjoJSb1U5YsCRodnbezwBUsLy6wjf9uyzHDGz9MUqoNX4yXww4S9qSaniLMHEZLsZmjcet7",
  "key29": "fdjz98RGt8UHFMegP73zp6zY5RzJvB5CCSkDsHgNCxyitCLCGje6CRekcxC84T3Q2kEG9ZymJUyHidKQFpqUqMg",
  "key30": "2dJiNaZDPjystfdCrGc7rN8Cw4Qz6ARUWD8wL7gpbvgEDmowF1J4xnaXPiF2JQ2YDetQKT3niqc6FnDAxzLroUGo",
  "key31": "4RwkWnNZkLHazLXRn7CdZBKfmxLnaeA6gqaVqSeVpKXxMvS98tXgH8SMTDnhVUh8svxmLtQmL12jMcUys5PtrASR",
  "key32": "3MUCf8aPqLqszxHXtSoJxgD3sAN3XKFBoDKraFsKmAdiH4wHF22yUpxFho6YBytf8mH1dXQWo8W8xMekU3D5iCaW",
  "key33": "4E8YUidyq3TsbjwmTkoiwMa5XzfwyqKaxNc8nP8WvJVs2pRS8WWLN6LrLjBPZ44QiEcHk5mPDbD3HvvSamsw9LMJ",
  "key34": "49R1XGpAiqmJHQ1WmLSLsaEYSuiTrqZPSz6r8D6z76D45rZ9nfCUkN8JPbFTVe9C68aFwmZ5oGcZ4bDemqeKAPvY",
  "key35": "38N3AAVFQuFyYeqngKA8Eoze7mCrbzkR8dCEukgBasGkC5dUfTXBBZsL5rfurSKC5Cjryb2Qa2wquPXE93sAyjbZ",
  "key36": "3GFeh5y8vBEcGtWRGkNyKDzGiwt4TxcdmKwb3mioZjK1apAds7nyaKMoYHeWWRzq5ZyTJeyXcJfan5HXL5AUAD5q",
  "key37": "2NQHYfTVR6xw3psnnhgGQUuDFHv9CCVo4TP31ag14bs1Arh7XwJcvGqphA2CrfQjKwzRS7noHGdE6uxoFx8sBdJv",
  "key38": "3ueJ2XcP8EsaSMT2dWLTK6B4qjo4jF4rUfksqJWmv4ZH8ViSeEoj9zJJQPQRD63CumzMb5uEU1LQCk83HKqTiwVm",
  "key39": "4vt4xBmx7eu6TwbqvX8jeHMDiL4D6Js5dyjg6i9HiPPvuctjq4iZUUQ9Fcc7fUth6T3ZPdmWzrZhHyRHYK88iCwa",
  "key40": "4W93Gz6snwiFf51MWRkNpfSesvq6c9vtWPGTXb6G86SmPF4PkagcRcUSB2gU356Ro5Jodjvor4Sn9qcqtBLNNd7E"
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
