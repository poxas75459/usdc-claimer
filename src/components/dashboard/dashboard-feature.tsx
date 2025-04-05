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
    "41UgMfzqeC4mzSWv5uX8EigaCwXzzFxQoukgT8DxWmCsqnyGE6fWuspXvdQPcmDhYJ61KKx2NtdMaTwkP6KDWGWs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qBbDAc1LmgwUaYQm2TG686rCaUwW3UGPg6xZ2J2r3tJAB6tQZFkiT7FVyuwqSh264zro6jq3vvCncV4SUL3fZVY",
  "key1": "3B69jUDTXrcGEZ9npXLB4Uj3HbBL5J3xushrswnTvsqfhFgWKuKmusGkGcYZYPh9zACvWuGqf6KtvuvGuiJfQByz",
  "key2": "3xCiFmAxMSMtQYD4jnHdz66PqaNnAqvKXkCnCsubHsTYyK5hsm8S4qMKkhJ1tSm6ZUcRQLuLnsqUnnxY93kz6HfV",
  "key3": "32Yo6MyBWXDSgSFjY4M8dPqyvMRPLChFPPgLUMRGxMmHLfmZ4m5DhXznfjxZxFB2tRRXRGuhiAfg6voUpsPgVqya",
  "key4": "2eBc3FG1uKumFbtJVpDLNcBsDF7LaTd88SFqBiFEQQsYgAypxz9yZ5JdKpQ2FurB5ok5vs8QjyDdjNWWYnqe2aKA",
  "key5": "uUAnaut1Ewg2vnD7BckaJET73fJ3jxEUexHxpEM1FB917GW4ZMUEHiMyAtNenfsJQq1XGuoybXzBhAum8R6eNjo",
  "key6": "3RWb11DAmfWhwchrNoRB3wQNfT4FHLaDvbTJoL7SW42DdMZzfop1szBRHJvXXYtRSc1UiTXCWGAYfyMAaqqGmGM2",
  "key7": "3K8PYbhd2WvyCviNXqmeght9nDeuJcLui4iaj8tTcRhn45Q8bMNmcGqN7R66pHoReXsdJ92weyV8bLYuSHv4Quwv",
  "key8": "kvCTzZgik2PBBGr9xYYRrXVEvtUgBy2QwFAoib2cUfC5rs7Ah26jNBi2FPQPCdRQ2aQ13he9wAy9HfGekQnUkLD",
  "key9": "2aLWx4tMu6Y9RpJh3YVvj7KfC4mYKeDHkv8iSH7eTxVtnPXiCwQxRV5vooAqoFQ84U66LEy3k9SVmc2Pm8q9fjpT",
  "key10": "23ubZ3tW55UNgQYgrbz2Ruh12BRH9ZmvsZdaU1JYppjNC8HZGTQGeJ9tvAJTDckL2hr59snNhZkknpjxNxJbt3bf",
  "key11": "5TaQ2VwhDbjeFy8EktGndGziH4uhYYN8qgxPbtuNbax15gHhShn9Azs33Bwauqs6FkCCpJBoXKsxNmhvFHF25rmU",
  "key12": "2xkN8qFXX96hRbj9PPKfcKCCmhnqsmKTwBzzerPHNV4rPgSbuVWrAyhov8CZuYAYDx3mCJFZZoGXbqKB292xb7U3",
  "key13": "uC5G3mEpPsZAAsRTotfUK9EFSwdSjaKNp6PUTbWo5pKVB4PZJ7HVhTf7gdMHk6RN4PH4zoN9ZJL4FfwYJPvgBtb",
  "key14": "3N2TWSDAXWvBzeDgBHbCPjVEJBjnGYjF85d6JCbbkX1HdipcBqDBrCX1A2q58P7cLhoxUUDtnZhN9GxGhjnwEg66",
  "key15": "67GeZLBXdJKAtmbzh5YP5KREEJ7S3ChXUqj3k4WMvCGgkvM9MmRy4jxzqjjvUxQyKCeJDPt2hvEbbpAXtcvvQQy",
  "key16": "pwNk9v1wf188uuMb96Ti35DP42Zny7r1j1B4DCDqXTXHKABgERPpTb5p5sVxtbyMbxfBP7VWQsf7Pcz87k2d442",
  "key17": "4TcCPYc6y4pVpNDaV71YHu8NwV8jLEm9yupj8BzcKfNUF7NSavFzYECkHxKExuVDKNAJ2Hpbfz8qNjFVPoYnhqtk",
  "key18": "5tv2r4jXDKUuuQTsH38xb5JDkj1JcazjRpMTvoH4z6JaDC8riNwt1QyqgaBwjZiqpLPPZJxR4vsA99fDWz3cu4e",
  "key19": "4r9iRN2uDeVeBkHnmderCPCNLG7pSrdZKYHi9eKJTTWXyeUF5RmDWjtvyx7e8r218aTB3j73sKk5gKCBMAA8mqTq",
  "key20": "4orMcqyaydouzzUp7TRtoricTGu9639sfMvsNQtNeFrJhzwQzKXWrWmmP1iU5pSjpJDdJMcaD9x4vRbCNtwcqqTy",
  "key21": "5aq1vbULxN7wjuBPUoBSvUwzC8rs8nriLCmBLcA6DvyfbqsJ3s51stXiGZFdssTRMJw1t23Pu1NEjphqrhuUF1G6",
  "key22": "RmvLLL33acqSpLhzGNRNdyuCpXZNPFyLA4mmaipCujtaCGdormXFZKgVTqBPgi7kC9Eqb5isoFKwtcd9595cTHT",
  "key23": "3Ufw75wr18FBbAWrKSNMWrwxYC6gomCmfXSXTBtpJwciW6tZWo9xLUvufE5LSra4abFhMKbeWwzotvy1Yb7kVw5n",
  "key24": "7b97BX3LwyciYb55ehgp2C5q6BFptDnCgysqgcVsQztTFEpkynS2qnhaNrZ8YxfC1naFjNhMe1DdavomcjZGpGE",
  "key25": "3uYkWCY45FpCPQYYXCm9zFA1SWFX33wp7xxkgKqsTcN32r77qTGcmizh54ttGYpeaEKp6sy9okARfKGCMGW9ysKg",
  "key26": "28BKMzME13DbiALPAYPdfHpctxs2z5paP87C4k5C5TiT6G8jQGVYWHkc6cnQL35Y46SqthdBC2koBUGDNJKbzzHx",
  "key27": "4RRW3HpsMdn9MtYuhBqDJCFSghnb8WiVhSjYg6qK2MMK8vsQUbqq8e5EjJXA5NGsfrS5ecPH8fquuRRCpXv1QAN8",
  "key28": "UN9nJhMfZhmBWLXizB7oQz2hfNuSBw25MHzP4VvnqDbVsy33cm9F5VHJW6545DaiTnpn3fk6ABDQC4V4dcJjeBA",
  "key29": "29Zhb2AGgLXPDgykSgoWpnmFs6LhEdGAsEuV8bZgJLD7b8DCsQyKn5LuxZTZc9KWHbRw8GXKgrnqSYFRi32ZNb8J"
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
