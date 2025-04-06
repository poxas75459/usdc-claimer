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
    "ytqVa9u1zcCp1uG5bE3qkhuuiiCTwDcgpNU64PD4JhLnSQ8PuP7oEfpfHKwtkB5MqSF7TCdLYsZecqQoUr45Nec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BEJW46SzFSd1sTvxF5pJgzCTu96Y2KJLMF3A58SsFPrnDjju92iCEzYaNw7yXqTx2HddyQjunPFcurfWBwwaYiX",
  "key1": "3JHgQwBLaKRer9KuLLEbukqzMx1cw6Hx7DvWxq7ADdBkDB27dhh9rmzaDwUcnZJkuryvNvSArJ6Gif5vZNbvT4Un",
  "key2": "18Wfurnxf3PwqxzGLGb43KUJPJjGUgvd6Tq5EAYCh9yEZYf3JK1aCA6tHzNa5C9FkWaQYmBjZsjkKafP9zRev8K",
  "key3": "m4RVM4Y9Mymm7N1T56JX3pbS9pUfoWJjMs2tvZaickG1wvH7Lu6gQWqEVTVJJVPRi1VbWpGrK9ZCGa1doHe6L9m",
  "key4": "eVEiFjHqbUrcHWtiMb1HwRmxpZAmqrd1hr7UUYkK7Y2LsFn8UwVs7M6ArrBs3Cj1vydtraQmsTg7dcX3mvZLMCj",
  "key5": "5D6zpRh6tqPGFrV588m1doWSCZKbi3F9KdKBvfeQ4J817bLyTHYYUPjJTZLzgT71g9cFD8uVGY5EEyuKUvLs5M4i",
  "key6": "63cDwkSHCXgjcGGDBUc9hsSiKNzW9ocKFCZ5bAmmzmCUXcqTseBtvgMuGXzkWznR3h7WtSZ4jW4bAPmpjvUBtsbL",
  "key7": "5qxDFMG44YuNQvSTRXRVrSkhQ199wpNEAVqjK9yVqAj3ugP53gxHUoBr3eXXvB5Fj4tqsvyr8Cmgcc5En3RJJo58",
  "key8": "fHHzQPqPAqZteewwqZ5BEPGXDTnkcshJs48tsAHBPTWVjy63cV7LN159qf33Js1fFTgGaMuzrns2rmeKdoWJas9",
  "key9": "4hsfuzZCiszeKF3fmY9t2w7FgfXVMYKpiWQDjP9FixtG2Jv7ZkczbT5iVX37cThUbZoXvenyVU8BL7yUxwTsoHqj",
  "key10": "Abirm7Tpg4Yg7ZqDaDy6kidrX1rrdTLS4mpLYueubJ9y8SrcNZCPq2zT3LfgwsGfbKNmpmW5oZbs41r1bMjej4i",
  "key11": "23Dd2wXJoDRpyeJacAM4TBGSCG6dBxutaHTdokzNDrSGfmUHQDr4ipPMAfKCr5pCNqnADGafRxKQbFxSxPS4ARTw",
  "key12": "2K5pL68saKRwLBTJVr4JrK159dc9cKZjVzwhpemajktmpwZ4EwNM3enXZ7r3QLMBD46K8CRf1LThprQtXGkhr9FW",
  "key13": "CFYXEJe9Lc3gxib4974ftpRXGqC1jQgfGLbxykKSM5JjT7YFSp4ajdMgbNod86bFCkNqWHuPisHLo7TteW8AooV",
  "key14": "5qVwaCeXn76VyQV37h67ttT6sAB67cSdakjw3iqP6wfhDDT5vANGzF89rfHAvCTPAcQ6c5JaAL3WmFtfMQMwMyNm",
  "key15": "26wh9NSa6XfbuzzVhhuRVp2NyKXcNGWzmA1W5AV3Afy5jWSqA4PdHdjpHwjP7go2kY7HjTGSTuF5kNnVec5LA48j",
  "key16": "3UAfLqaoz5JWtJZ6EwEPvNx9YUetXwcqMTBFweF8fx3YHwVv7XKNHyHZTD3xUjWHRFLZNhzpPkQmrqLEGkxmSW7S",
  "key17": "NyGCZn927e1AtkZhDSYT5V8gYyyP6GbPVAFuPtkfHWCwha8JEcH8cspnA4yZUfgLt8LAEuVLHjkCLAe2wHF6eoW",
  "key18": "4Mo2ev3zTL5ifM2LdmgTmw2HUCdqQwLGH5ZYG4oDVN7R889Sn2dZVZnjycShgjTvGDkeWNt8xR6XQ6NdnXs3kjnP",
  "key19": "phyycxGgG51fVvrkdYM3N4hoZDB33fGuhQnaSFuMoRbPa7sffK1oVud3J8RzDhuwgmn8Tb91jf563QBL4h7nV5A",
  "key20": "PFvVY1pzxjvBMu6HmvZg8bp8BKu8CE329cbBfwzMv529kJAnVNugBtYsPvX8VjSWWSaeLwCxbfKXvCSaA5gY7Qf",
  "key21": "35BS8Mx995rqjmDyfJHLGF7sgKh88LbyWFYPXRyvacRpUXbPcf1Lb9szjr1C73wUSUEYAdiUaPmgGqfFcN6zX7GD",
  "key22": "444qYfcUez9UyMYMjuG23domkST3yd8EQRKBqKXAAMGpm2u579EZ1iPZgZfKxsrPgZHughqWYwPzv6Dg5ZyCZeQX",
  "key23": "xtDQo7pU6wPWWDxmwVpH7JgvWEp9WEGNUcwLZjsbLRsQrFVZrSwZyUCCA94uzV7pEZ9QxPNaaamF4qHC5aoUcDQ",
  "key24": "2WFdSjxt3WwKmuWa9zzxUDY35aa42ttEbErwY2pdrPsmPNqHDAXDmMYm8LxgTRw9RYRFGxbQad23L2u3X4LqEevm",
  "key25": "2K7hbdHgT81J9shmHorPcgaoPseP5FKw7QR5LDQxGzVpYerqZFjquJxzhC6XgJ9rodKFwBW5ibYBwL2yAW41KUJi",
  "key26": "2tjVhiJGyDnJWrCMJ3zNw2zpxLqTJKXyGHGCmoJrTXYbytAhWtptCno8fwjHJga2bj9A24RvF4bY75vwgwC4couT",
  "key27": "5EY4qaYCrosuK7jNLFuNNhodjkMQRzpoVVJhEHEASWWB5gKYniHgsNcQkWjQZT1L5Drugsc2MdyZp19TwiqFRdQv",
  "key28": "PAMbGVmS81wk3NX9GYvC6XTXXPfqzhnXNvKsqA4D6yu4xZRcEmMKCeAesNYi5PbTxfgf8tb6BH8WV6cRF2RKbNJ"
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
