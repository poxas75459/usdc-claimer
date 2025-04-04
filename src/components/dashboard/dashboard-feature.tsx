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
    "36NtrjD43nfZt4SsfY31XJy5L2guNBr4bJKCFC4JLmQ3SiQ4SLBzv3qEwqPbpQjKnQBx12vmFZSJ9x5nNky99hcd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UEZpwNYNkjpPKK55DHWHkbdXG35aDtTdvh68W1v8rX3FYBd7qRxJ7YEZqprqsnD7dgsbF36wjPkX5rhNgHPxNYQ",
  "key1": "2AoCf6zkjoCEsuV7rmUSCrPHYJ1k2eLsFCmpp9ZES7AVTPZJYL3yYbHiA45JJ6xkiRdweszCKJmycKGNzzxiANtA",
  "key2": "3pL94o2WNr9x9NFE84HQ6NNH6NK5vHJcu91UbDV4YYgL6K9ukfWBo9KyVAcBDgamM7RpPnN6dEDBLqGh6mHajT1X",
  "key3": "SNRnA6oPRTcPiagkpzyDkga5ju5vnRqf3d4GBHDQoofoRc4ywbTVBNnK4zqkV9TAvRjmemKecuNzE8G5ZfTmVZe",
  "key4": "4Ckszdi2WUW1zbgUrUCdHrTGCguh8vN8grnyuFATiRj66VSJoijWLRexDT1jdZDBkQHgZH6pCKjhDD6bP1CW5AoV",
  "key5": "2cFA2qo2jfT9Fn7tnUXDVtWodYrm1mssceriGomwjWmnvsX9otKrcFKCA57sjRLqZx3Ca3LBBn6qbvT25x4DZZfM",
  "key6": "ewVck2EFU1BcDv5TE6aBm48ZEtvWdsDekj7PxqntzeRhZzYd5VweNQQXPM5E2hCVYw4jCvuRTUcrJrhGc4vt8qx",
  "key7": "2AX4fBtRwM66kRg3T4XGVVryF4xqpmaBYqnYexkoUwRpubDkqNiDr9XKf22sLUAsuK8yFR9sNDd7sDNMen233Bop",
  "key8": "yN2zVgdPBFLRmp1dmG6WyEcLCsASymLCzN6U1mfFPHDSfwzZHLBn6NvggGizs2z6r9EnG2f8N5NHJYoG7vNpeT9",
  "key9": "oaf4fpMk6JBRNNBcc1iUmDGFD3FsekxD8ZZQXMtdLHWX3ipmTf9MojMTVApnxBSicdjeXF7DLWSzcwq3VsfSL3p",
  "key10": "2GxREgML1Cjq1qTZbMS1yZrhA7L9vdiDVHHLWw1DREUM37YHQYv4FVWrbQJDaW26Ffha2js6gY1raEbQY9GU333C",
  "key11": "22WsPXbQu67YqWugXrLhdGcoLpjBAJrPdehPwfvcoiAx55nQq3kucGZdzsJWSN2HQScK1L5q6tXdHogGss633vSZ",
  "key12": "29pS4gU8LWHMpiGiHgZg1XiRukznHrVSr8vagiDbEpxU6MxWLr26rM3hVGFerwWb6tPw9YSfaJoVPQVQVrkqbSDM",
  "key13": "36KSJazqiTJP9hoMUZqT3NzKWyQfAj675YPyNgCbDf1QNnrf6m2r8QZsgkPd4zi26ykbQWmENZmP1dhxNQadivNu",
  "key14": "2u2n8fdHDomYLJVr5pAXM1Z4AyjP3rJUmHucRyHPYr8FKzG79NNpmhFXQ9b7FjSTURejNGyjhh9hyCvMkQE1vvgq",
  "key15": "4js23wFP1ZkAG1agt2P6YRCkkJ4ZcdQMgH7wYR6Xbsvn7LkshNih3Vb3XwERY1ZiE1ppXWYfzW8kKMvqiG1tAe2r",
  "key16": "C3npVVbDpeeGRXTJxPY2jLFk2QW4J7ztvnrD4YBw6qhJmLWwaQBnZLEyksz55MaFjgNaK6z4XyvKEbYxi4TRjxz",
  "key17": "5gR1VhzxetUg9quWCZMYgz7hnKKTdM4WPunyQ2qv6NHcBwwspkzoorqr38ShcrE1zAyEizPveuR1YDohb9ZEQQcT",
  "key18": "44ub97hkfmpdzEiGKvtoLExJEcaJbDhwWinrvpS8ctBuX8by7ssitYgEYhzPE6dFzxhzPEn4sCFPZ5KSGbXtx5wL",
  "key19": "5f6Tbo5752V8s9FTjNQnE6W5SxBpsgz5DYLMkNhQV9Sp2f5FoeT85xCLN359GpLn9C85MTaaqACe67kfebKHqszM",
  "key20": "hzrDof7TULj69s59GT33rFZNudZSedWyteDN7F8UC1T1yaRXJdmDGt8Cq1cugUMfsRmcTJwUJq28czj7ox2Mm6F",
  "key21": "2qSHNHn9QkfVLkgPuJoBQLUydnESo4awqFKuViJ4agUCDrXSi5PhThcH56mcp7pWy1mGQ4gMchDMPX1DqCprCmjx",
  "key22": "2sRxW8Kr5ERk7G2URbREZCFB3zdWjC6YjET3EC98SitvjfcouFtNYJTW5T538wXpo4nnaVEivvyRXHq9QBc6bqTv",
  "key23": "56aAoVW4Hz9RayLrSDHfW3JaHsNxddUmg6qCsBSeTiqv18xzxP3YrnNajG11HxziqW6myVGN6LU6yCvVarepXoEv",
  "key24": "ztJS3vuy8tuPSzFkqC1btbxBoKoQ5n6A3yhykTP8FMmVHdxZYFW9T78DY4QqXcQ1FHRLB6Qnjz5VReBdjVZQPzq",
  "key25": "64y1fPxpf9QA2j9yD2g9CZTUCg8WNYVgsgqEN6MHT5JtamJ5KFT5mrmvQGZaC4fMN12ekuH4GucyXVyhdYfo5Yyy",
  "key26": "2QemmhsAwPAjbEpbzVuN53kAGoYaXfVMuAbQWKYDRcWQbFJ3p7ftDXzz2pssehaNWFMWBRCjYzWPJMKHnAg1ba8R",
  "key27": "4bJqH3VKEp3DYrgtyUzsHkVVubkncztH8D5fYQVEmnSbQqyM3Q5xpmtcV7Hde8RBAaLrHBtAKUWGx6GJ492ZZvoD",
  "key28": "4yPt3XyEF8GVbhkFtj6fGyKTii45KxTdChn6g3Eogq83Bykv52ZCQBcEF7SBkJZq1pYECEoTGfSXrtA2Zx3kiCba",
  "key29": "2bLDfKxGpLtnHENX23osfDtATCcFxmbTpcf8xtvQ2LcQcsE1Ri5UN4p3ymFcSQtC9P3upXpgewLpgNmWLG1sYEiW"
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
