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
    "43PmwuJpCCtghCsFK4FP3HzZKcCfmeoQKdGpbwvgyN1avjxuJZ55EbfPLasTLRMs4uPHkGsGRtAeWjrKqf1ydYVr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fMP1ifQHvfQy1Y2KnXxwhbjZjK2RSEmp2PFJnvewyetFGPB2aPtpX25e1j44C2YWWLmbeKM7S35kryFvn2AERU",
  "key1": "45v3PM9hqdixmPsPyDx7a9QgN2kRv5jqs8fhwz1py6Q1UEjqezqAFVa2v2vCoVCVkp4UGHwbUewangC1vLoNwzSY",
  "key2": "545WtK2s5aA171UeskNxAVf1cvYZySzKXpJBqWjjAZsyT6GfK7ifFd7YSprkPzBgZn73PUGCQqP1WmWMZ9s9ARLZ",
  "key3": "52Zznes8T5V3zDbAhVyKRyhY9wSq6YJwMBZRWyK3J8a8Kh2c3pa5L3Yz5KscH6gfAV3Dz1t2V1pu1UVC9tE4EN9F",
  "key4": "5fBv9CthgKnamxFe7PpnTDPrvsWw6vVrs1UAgHLknziCCrAYYLYFLtupPskZv42Cmiy2DCVTKeqddQuWSZNbKWa4",
  "key5": "5pZ25g47V9sNqs56k6UtkzL62kcVjixKiG6b9fVP1irbQsXEQxE8sF3Cxa9eYFd394z5k5p3zSpvA8hgYLCMjrRD",
  "key6": "3JZ66TX6WoCg2Nw6E54T6twGb5eEd7bLq3X9CcaYGpBoqQfhC1yo31zSnC15XMM4ZkSAmLn46ktKJx3HxBArYyWY",
  "key7": "6zH6VfA1MbsyGn3EjwC7kYPsLnNkgj1wRnrpQ3hqEUFP6UH47yepaaT1WLSxASaHfYfZdtLX6r3KVjd89KsXSwU",
  "key8": "2XfXFtfVZqXfVuPHGcu2afEeCJNPzRfHbztqNQjgSe6knEiChx2tFa4QBNTKr5MNGZRmpLh8VSMuNd8MewLyTmAD",
  "key9": "3Skv4uwCoWQfTCkJ71PfUSEHTNfjShUj7sn1ZyBbFXHEiC4PDsZVMDmJG9U223CPpePjDAMZyuy7HfCYC6uUwFCV",
  "key10": "W4u2fU5nWNEpDMRXsXEe57jAiphA7w1DVCEre7pnneeoXBc4STFFUxd8FmdQmWfcSvCVHWJ5JSNMtgJkTuUFNxv",
  "key11": "5AR72PoZUkgYnDkdoy8mdqpdQPM5NwjviLs1S8eaX3ZpL7dRRRWKcA2kzTmQXfK5G3b3yWnxrfYiX1Y5o1aW8q45",
  "key12": "5xMmff7zUY8qjZj8vTiC6AYJAy7ABpbBwJvE15TvM21Du31oMRYcdQ7eKHDLYfWAM6Qr6hEPo1tBn6x3tXNNpLjU",
  "key13": "2tV79aEeWMWTiFJa4iztiQS4yS8mBximFmaTFsDod4PAMqo8M2TyJBhS1ko27kHXx8Uur4B23YUaVirPdSYSMcNw",
  "key14": "3VoFL94Nc4V5yTEGrMsEduTPbNb7dBDkrTN1w9VyFQDexw39JRNC4J8DLCBtAQuHunzyKQoCuDRDHoBnGhFpcQep",
  "key15": "5LDFr5ufAnqcdshWWQj8BpYUiMEvPARjdZp6DGNPp5AknNL1vfrKmmEWhN5PKKgrJmMBFiCCWviHrke8Zm3ieRK",
  "key16": "54XKfEMhDpM4knmbWQ34tzsgDjZUE2fLA6o4WZpjeWHC7f6scEDMtSoMZuXNcvWKCUidLqsF1RqU25NNDzN2smQA",
  "key17": "4uoXpArfukJ2ADo9agmvWAmAJEtnW5daVStsmZYzkBhtKc29Fm2v6Jq5xeCiJQA6VQdidePJ2R5f2aRFUB8UNU3",
  "key18": "5soXwC19LpFg9Jc4ZdLED3YBZzQgKUq6MYJk3nYXifb2XX2MNNjtiJM6VczCk1FLKZ4MCN9ijYsqRNTHqmGvGRsm",
  "key19": "3pn5ptnmaeUroGAbJwgLDoRnfxyNq7tPJkNyeM133BMmS8UJUezCa89D8cNZnEUbf5V5iVgnf5UF62C5S7Wgh8f4",
  "key20": "5QLMYSiK1nzZu7JgbiqErCCKDakEHeG3iYG1ciFj3LJzadgHvryrj7tr9TTqihAX6f8SpVcw9cdjMYq5LE7n3yWG",
  "key21": "2rQw8RcPPRNRpp7XdW2iE6GYB6Lk5Gzp4YgKmGKwvuAp3CzQXxPkgsz1zxYg7TVECdaQ32759XbcAhPMRzXDBq8t",
  "key22": "sUBr9R5hdZRRsLSMQ9HGAQ3Vn459m23KpfnojMrevaQroj7xSQTU1pdmJXcZty8NfCsCKP9LxgMJwtxyQ2Tknfe",
  "key23": "256prtsasCeXS1nMErQwUZ22NUAAcpH624yLgQozY2PJvQXPUz6q1GPY4jQha3sHZLU5Txr78eAuFmcBWteowNY3",
  "key24": "42gnb5bLGRK4rGiU8h19T68dG4JA7sHR2WRCV92P1PCkj4EiSozairfecqPmqK8RhsM7zJBFafQRy5tYA8YMy7AS",
  "key25": "yP8CXP7dr8PbJ4aq6ZASSD58AkQwryZaULFUL9331YJSZtj7SdXHLwDtDSU2gpoowNeBMqjhERwpGpCfg9zbN8q",
  "key26": "4fNq8KZ4opKpZumB8xcisWHfUKNMJQEveRqJKz5nnYjPxYP17S5xdtEDCvSHqkHaumG7JcD3Rj4i6gqpE4iSrdub",
  "key27": "3B9Q1rTx6jAjVnA1UF3vzY9ga5X4QtzfnsKrZNe82fP5umfdwPq5WKSH2KbTpTWVZCjErp3mx4Mn84qjnzSKqCAZ",
  "key28": "3qz7Y8gMdst1tK8byeBcEw43UUdwAZpU8R4p6xLNvyR9feGMNZHRz8ftEYpGGWyfzHqtHwsVDvku3JR4HMqiBFqw",
  "key29": "4LCgcpDbNHZHMbMqNwEF9hgHzkZ3FCLwPGYjbJL8QTYbDXs5yzZoNf1eczEpL6EiLUsJcgVVWn92TswED1U7gK7e",
  "key30": "hDmKnNN76FCspdNCJAPQcEK11iMnxrNWzkBkrRWvhbJPn4FpkRVSEsBXzJxfTVAi9v3nLBfxtP6CHs3dwAGyJE1",
  "key31": "5cP2vwUYxebAVxVrk9EBUHd9xfzt8pBC9nKgDkXHYmVUqe2ye9PD3WBirJD9u3S5teNM4r5tJpRFfA24KJDXsUzZ",
  "key32": "3rAtWfKMxsyHhmn6Binm7Hp6fWAnN9tVcCF98kCYfJCaTVfEWrTudtt3Z3DSDv22PK6MTypxmPLXZDdr41uecT7E",
  "key33": "3F4PkAS2pMDYsn3EGssn75ep5KKweiwtHBHxBKajFbvELqzwordPx89K6Qj7KpLfS7PyGbSS2k88MdZShQFsdjLz",
  "key34": "2K5hAzmamGp25Pj99aVNKsNz8cjdCCdgBtqDM3oaRZH4cXHJqpK7UuidtKcaEMsGSzVyDV3hR9vVYRoSZiWJRmHM",
  "key35": "4vAQYQB4zNKvr7nCaEVaVvSrdqruoWn3MmsTRcSHtF2Jug9VxiZhLSXoDWpRyvquymtTNahefk4rWDcTH5tQo5y9",
  "key36": "3xwdrxthcR1d6RxYM6sGS5vEd1JZTpAseWzVW8MrrWeeyxRjNDhhne4n3Z8KLeHDMv19GEefz6Rd32pyojcAonNY"
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
