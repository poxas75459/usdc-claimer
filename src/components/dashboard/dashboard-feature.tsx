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
    "3taibm6kcKymZKQW1F3sFMqbt6WaiQLadNAJxMFx6RtjMy5VMzggquE2B86Em8KLdfLodx6Sa2VJVLCTH3XM5739"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PHquWmjhfykCCMMSLUY2ycVYtByag3tepMN3c3ReUDR68KVdpJkJHvhMEJhMhJHbE9BVE6SWNHW3TWFcqbarqCd",
  "key1": "2XX7JFHL79kMEAdhDKBeHfswtBbdFHWGFbaxzTgpjrHGvHNN7mHgxCyFzJgvpKPiEn15vjCz94iVtpiUb5AenqGQ",
  "key2": "2WWjwyRhmeFWmb7DebZrx9HsQrkWnKAGELPrwyPV2TGWMoaN5KhixeXoedHdHYq9aSMTEuTuZovj96KZ5JjQ8Ata",
  "key3": "4kB5QuZDK2c9uFgsx6346iACKftxCHX7RG38EZ7QsuWqBhZqrKcAddSzUAhKy1yqfPX2xiWYgtDZcgVYzRCCngwN",
  "key4": "5fwchf6UU5A4FGKvd4WAyT3sfyYj7o5sLpjLo6gdmn9NwUUtMPqiQjxaqvTrfHQFCNhpRDFX5Xz3zC5vodyEUkRg",
  "key5": "3NGTnRAncsmvxzhB8pTMt5QtpKDyfZPqXJX42PF42qqr42MH714rP54DoyUjEAnmTfow3TqnV1YJ1VLuVhGPRKed",
  "key6": "iUKTMTj8ekmTgVbhRpsX1usmSQr4aMJKCTBbTETpAgTPQFqUyyKLDUnGUy1bnwz9VFvT7F1JmA57rHjhRvvL53j",
  "key7": "2kzStZq6wNwiJNiK2KBK7pHrDAeGC9WwdmMrtYFmow2uhgMc6yX6GzzC4DYTaPqsEfoz1GxRAdLsGbm9oAp5rEBw",
  "key8": "2mK3cVuZaqQgqJsvxKnofej6ZNHzFwZfY4HDB1suuMgYumqVBaN7hr4UY5aNtrFQTvpyRMjRQCjXA1k3p5yzDjmq",
  "key9": "2iJ7xcrWrW5YUuG1CZs3SvtnJXwdk7Cv2xMAgBPnuzTxTULRvJaAeZXb2Zy54scePmYHMQUr9DZHDYTeTFBZNFrJ",
  "key10": "3TwyLVxiJA8XwL3RySjLQRmfVjjczctJN1Yo99XSETnkGZxopjjW2rUt9PVzeH2ib3sDLpnHd5UMJWZpdHakx81f",
  "key11": "2bZCVNeRzuqq8SHjeYrxW1UmApw9DEau2sRAECFJq3h1xqUqTAPFBSeXnQx1de7horAdhEim89YUghpAPMU4Cp1H",
  "key12": "3tY8iGhimB9skBRSzdMfqAp3pVQ8WBQLALGZatSTB1X6WDwpL7koy32UzZto2QvnjJmE7xrwxWPPek3mw6DTcLzj",
  "key13": "xcH1xsHoD2rERJVESCE9pVbeJEQJDqS6FBvBPoF5p6UfLKBxKwK5HtXzvJk9rXkYCJdHVTw5z9QhzgoY86HQ6uH",
  "key14": "3f82k3tBE13bAS8wSsTdcVTaewhq6LMpnrirS48yWCfBzaEjv7LP2L2BkgF65Rbf8TArRB7TyfVKLiLsKLbgwNLc",
  "key15": "5DkV8fBWm2QNGmVtFY9Ars9hd697RaGvAr5iHBfjg1rFJRyAKafe9w6KGGGfRfLWwa92KjxpYrRrzMQm9MrLTTub",
  "key16": "4yFAwHM5t2zpaLLj1UwjW7Z2kowyM8YncKvz3HgctbjCnJjBmfAt944ui8CoxiBf1TYVFf4BMsPXq2bftYFJUmsT",
  "key17": "5QpzwCsKtiZ2nzXrSehY6NCtFVsyWGRoPvTJWT9LqFx7LY5Ud86G8KPrAyFTRcCWD6XtVrGMpGp4zLaHPR8hUZA2",
  "key18": "5dBweoWZUD4W1ubzT3Mp97tNSipf8rMcXo5GC2RAka9dnscFi86AusvJEyev9bRLGHJGX6SoFyXnAcGRs4e5iPQH",
  "key19": "2NdmmyeuJBQBfCd14rEKsmQHxLVTqxzJGQaocjJWSSwHh1mNkYj7yqQsZcuV1f5PzYgm7L47QBuXmrZfB3yBGbnY",
  "key20": "4QKjy9fM5VXfoeZ9wEt83B1P78Wzrpdc84Jszf1pAgjRgX5fhZNZx4VNrGipXAPfqMC77oWyoy2paXhc5PdBYvzn",
  "key21": "aJV9CuhUhRup967racenSm18mZ7QcAC6K6zciNagF4ZGdHpKerYbpDsv1vyKvm6QRiaC1vE8rdYNGjBFvRa3nJL",
  "key22": "4HcQcUfbv5L9Q8XHrSD6ATNXMBswssB4gaimKtSmUVhsu1hgmya6QGJSbjfuMjc7AYwLabDYzdsxRGEQ86r77Wk3",
  "key23": "4a1pEKNr6b46QgFnzgPqfYi6ZSawgu8yLMk8NgJrxxXJFb1BoLtFFYN3G2NmWrvVXzDtqfwBjppRBo74KteKFqEW",
  "key24": "2tonSDTY3bRX31mLykw8PMBNdrcKzxGLfDhvKnXVQCwKoEMqBDu3PD7jQa39hi1BxDgdN6C5pAxVUZEFSvqMDSfA",
  "key25": "4HSywYvNDPuCMc6URuEVXyNBRjwi3wCxWJkCFdFFTjJhS2yr7cd56UeJ5dx4W1b8RL9sVCX5CJUVfsjcdQaLgEN1",
  "key26": "59p9fXyhFY7WKTYfzX5x9gTMrSbmGuPVbMoHoJPFFUN3wFVCdagGgdnrhc8Fjsbp8URaRvHrakKGh8pDcPzGJXuW",
  "key27": "2U6uGYqecx479XQWbcbEewaTVSR5BvMadmD8PWNYqAUaetR6uvZzuFJn9dXfCu3NeaBisTMpkztbxt7xpDwHFvZT",
  "key28": "5b9yWkZkJgu8tBqqHLn2YovfZPZN4ztbqKPEVAiPY3x2vFvFqFKHhuej5MS71RAg9bJtpEj8k76WurbbYi1GPh4z",
  "key29": "4yxbm4c2d7occU2XS5XJFynctS1hYmCFTx4n5M4yQzMXHzQTZufmPe5Wtp2hksrMigbzCroy6qq69ipJdYcfeTDe",
  "key30": "5K6WBu9s9szKH9wFCY3inXNqq4i4ifwbSPkKmtgnEoTrzVNQAm685dmdB3btSBM4xAjNzy1ZcRj7VLEBygsvv4A6",
  "key31": "4NPK5EzevMq19K2mPZangBUNYtsNZcTE8wdF2H46GXUkpUthoVfdWt9LcH6DBwj6Ek71fmTMW4q4LMZud3MeNVgP",
  "key32": "5Z43oTwPB9QHGSKCSeRvTmWCwhza8z2TaPpwj1feYYdrMBn4G8Z3gQTv2m8Yn4ySpkdExXpwyoSKT4WFEG5SSXyu",
  "key33": "2LANnaxwgK1B1rs9SQRzXd9GhrH9YPsrsarRodguzGToufYMyr2CxzhsrtwvMvMCFfgWRqJFnL4bpQqns5h8B7XY",
  "key34": "U2QGnkYiJNLJBBNm3WfdwBryRdgDVVmWypNQ9icHsLDARrRyKEr2FJ45zSq7cXGHN438roktd2xYY45LQyJSwAA",
  "key35": "aVUrTtwNx68w1tF3YT5MWqcqAr4r9VAguEqtbuGDYXQ7uWPCiL3cPHVeYxfhb52H4JwzyaZEuNk8ebznJJsfpvx",
  "key36": "21yJcwY8VCh5EA2q9NPXBoQ8c14LYZf9oTm74PgPHsBGeU3L6SR3R8iHafmWsP4YNGaYoDHtoc515hzw6QNuZuGM",
  "key37": "4NKskkbHkKtFKpsrGZYPmsMCdfAPqmijas35zphUo5sms6ay3fCk5SmBQgVtWpgq9nw1WLyyWiNSyN5koVbJ6vVb",
  "key38": "48UQ4XNfojoTVWv9HkCq1URUyVvJpFCUrvT5kJSCaKES174Xbqhn2BvrJbwjLDCRf6LoapjT8sHokuT2ex1xHg4s",
  "key39": "4YbEYpVG5hHcU2Sh5srLzyNKp23a8yRZdRZEp4Av8p9AcmbBDUejGsF3dntwLACciha3ujDsYtSmEV4XTTgRgo2C",
  "key40": "b7SG6JR5Wkj5WmsaAz5QNUByneNEiDoUNfafhCzuK2VioBANSzHD6wS6nw1DhctxhetmPCrhEmTKaNYY1LnN8zD",
  "key41": "4JFP35cdugc18L8g3Bg9Re66651ACvRjpBHou8Nbq8uT1V9Pffze455jEWgRuhED2PY7d6T85mnJwEK6bRnFSbkS",
  "key42": "LWeoLXuPBcGBeWTCMYsPN2vvkEmJwaQMFBgpWRrcdCPA8pRcY8F7vFg32WrTubtL17hn3EP9rA3dgSS2pWJuuSP"
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
