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
    "5nuCZQJkgKwxydMUxgsj3QbNTXttEKVgmZ3G31rfAXUsMHbDoNRjfQRnJCLr3bJVDRh6q8JjVwxn7RHoLwzaqATq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B7tjbamxRvfuvSsPQ4GHPTEH7T9FBLbPPHnrFUJEzPTzfSdX8CLE44feqXrPukXpvqED9QE5tbUrDpThce94Bdz",
  "key1": "5sMT3ivb9s4my2xt5kfNFYuc8jHWpRygozACsrYns96PjqJQ7arNXDR2pWqu7WRAViMSeSRBUBiAxofM1M621pTT",
  "key2": "4LiKwWwCwnNQ8pcVCfXhLmG4xjtf5GCk6YXXQ9q9LZGnfH7BLB1UEPKUPgNFbbNv86Dcb6xMwnMR3xUd5v49ZBFW",
  "key3": "2n2NJtuo9ZRo5cthRnUUyDxzjfXGmw9Ht7T5QutHbVLVeQYJp6isQAobJaTbYN8HenkbXKMR3QrxwBe6qVBvHe9q",
  "key4": "2YeKErtmDL7GtHLZBQipa9a9ckSyyb3ifQCmvbEPrm4s7bUhVoQE6av1QTN6whw87BGemBqt6G5s9byc4USqhSra",
  "key5": "4NzvVNZNL6gMwT6H5KTwdhAceF8S28tRyGoEMMQPMdPQF7ArWW89cUwMjTg9KqWhd8ENY5zCuEadvANwe6S5frKV",
  "key6": "djhXNQDx6FJsye67y8eRjj5Avzma9Cu4KP43kY9p294TrWS6nm8KWhDr9YNLSW1T1HyjMbb9hh8vup5cD4eirSg",
  "key7": "zMVX2EapdA2it3CMuyxKsCgkgUBuof5JPGxJyxwpeNxf1FZuVPYJ2fF5pf4wbjDarQ5zFbw2R3vSWRK1fWhdvwA",
  "key8": "2oM7KaxwYB598aVtTPxnzfntf6kjgowvMYbGVxyj2NYQGFxWpXFYxPWNjuDeHK2D3dNXpMNrGDm8CHQKWb4Tuad3",
  "key9": "22KscxXeDuKLAKKuLNAzL2hvHbaUAER2rwZe3YRYyGLYm6PtJMAPEUvDfhzBMNjQfMpbSihvQfGTRoca1Kc7uibG",
  "key10": "4TDtZL74wRTNYAspbTFJecjzaho5FeWcenVUZz8gBfHrnSWqW5x678z7ved4Z88fRtc8oszWeFuAt4cuJTo5zUEo",
  "key11": "3kyAR62RQzkP3Xy6YGTRxE1F5SdzhsAYBEG6quxQbNknaXrAsRaZ24dCSzBiHhvWDm3mHgYJB2EHD11pZoN4MLh8",
  "key12": "3pP92wwB2CbRYQQLLyvncbpyjjPSMzuRi9R1d5bvqBzZKj6adQY2wrADtyD68YDqTLoDiipoa9jhtAyhJrdaSUAV",
  "key13": "38LLqX8DddH9CiB574K9DwQZtttiVbkCJSVCQZmH8PfGduUYxHiKKM6bcYuqg7qD3hkAE9v4DR828s8oiuUNwF3r",
  "key14": "As5r3XCFHcg29utgMYwnWH3kzjH45VGnHBt86dd1XN1ADvyeHKkcFvLpoqiMLNeUC8ZU4NszTReDMtcsPYHMmp9",
  "key15": "5fRYQvxg6LTAVFq7r19HYrxLn2E3x3j7T481aBdapupH5vq9Kna58Wkr2wUYK6Teb8MXVKLui3V7xAcpbqhWmVy4",
  "key16": "3bLoieoE3LvaNW17DNsVF4wTnnbGHVbhJdwD7VZEQxA5d1WLR356Vy9dTkKhVpW3wPytjK2QipTJY5v3hFvtqm4C",
  "key17": "5Uh4FoaR5Tvh9t4SChupFducGt8E2qebUC7FPFVJziJoYrrMUzGyPYSJYq93eFu7qWXaUzhUZUbuykPYaGTsoUvM",
  "key18": "5RC535Dv97Ah6Jk9nTTEbVm2CPZDLrTmGmaGnRBJwqf98p5vERb8uoGDRLz1ZDARTxWFV2tZRHyDkaN8LPNiZ9ec",
  "key19": "3Uzct8WbxQgHDzqQU8j3GR9z3sPjqVyv3MugD2FEP6HcxwxBanWrNj8NW6RUUBa4S7Kuv4rHJk1wwaZcBcjRmxST",
  "key20": "3jiquwLPxvGqPfrWGcerbp781uvu4SzoCgmDJSkdPgLirRhmjHPxoyCHYQ5hmcmvRnJFYKVqhZvcsvUXFW6GcSbT",
  "key21": "4gR8KA1vVNS5Nc24CVn7Ay3fcMV8Up2BhLwtXGkrbkWZvb38xFcZtD7oGXcCnwApjB3xKsYc4AgZ4FVWakLcVcGk",
  "key22": "62xG6mtu9CiSSVVjUWrBWjhewEsG1g361hZks4JKLr5U5AAaBEP77KjkZwYEs44nw6aDHLw3mB9mvot5cng65Fn7",
  "key23": "38Nti3FJTtU6HphNkULg4jAmv7uHzp4TTGkEcZXbLozfoLHQdXTVcyRTHvsyNXuun7yQPjYb3MRebFEqbao4pu7H",
  "key24": "2K6kXkosWrEeEd1aPUruthuVb1Lwx7ntMu4ApfkxCsE1VAnQDmqgAkbbUqVmt7rnvaYyLAXt1iWUjfjndnZeCHdX",
  "key25": "62MHPktMgRPjyhU73LHE162AFGTYKpTa4GUizdQ4qH6pYvRa53rWoUsXbtC15qHqKpavGtsV7vHM5DRCVtHoQcwd",
  "key26": "4zA7YUq9nSs6QTuqs1jUwfQVv4TYHjnGCR8icytxajD4HJquX76ZCtVypD8kdjN792DotU65bQJbmJVUkRprWzTn",
  "key27": "2AtM2a4mR1tZaPgAuYsrtKRe1GmUbiPUt86mwhre6nbg5wMPQmjMWgkU2nxinwWxhFEZvNPADFPV7tzTAdGqZEex",
  "key28": "2wq6Na2Nc7FxfcJg9ewCT5Xw1nhdDyPAmy1PYWoH8bRCPUZMQ4o6uHKun1JDvLJvzpEueWsecewqC7cs3B9Gs3vC",
  "key29": "WNz6vU7ZsEyqS2w6QGnNB7hNhU6a18dU6n57UtWQT3m3A4BEVa62bViVg9CEjosKWgng1MGoZusQb1TxC4UKLWw",
  "key30": "52tLD4Wg3HVjwRUGAG7CKNtVSstXkt3YEy7HWPMqGCsmQojaDgGz2pZbGQDvFFsV9TeWYRdLnoD3214mZEbN8ZHN",
  "key31": "4sGgjkv5R4WoVeAn1w4MTuxZj4a5sZ5E1vxDg7FXiaXHzH7rCYrRNNfYTSduCc6z1xN7HpvaBquMmhciGQHkyPrM",
  "key32": "4KkovY8GR5xvQCiP5w8WjT9GATKAGQBgUboFBR2id5T8Fm3UvpVcZEjYnVuZy6JJcEhsbci6yZCsN35TtotfW5UL",
  "key33": "2xneLKH8jULnbNcf4a1yCGvm4FamPeXh3wLysfziponiD7pMgiEkRMwf4drVFiibsjxcbRecLBfu9qv5qeHNgkMK",
  "key34": "2tXixr7jkjuz8yMCS19c33CRH8FkRwkfnvU3AGKDGTWH6MMoirZrA4wqX1CdK45u4edvgsKV9DjH6vRm21xei9CW",
  "key35": "yVRvhdgf3TiahtdwCgsNVFy53HzTz22z3Y3UGftqkPEUdi7XhAyn479zKYSAZg9qhpHkmByeQSxZPAg6iT5PET4",
  "key36": "5UW4pGGSKjampsKUgaDHaiGbJacrxzcncuJQVxfDQqFM3MJTMK2UhsM8os23Aw4igpKdMTRqbAv3Qsb5erGBe328",
  "key37": "2ComaMydcSK7Tkx4iAKYq7cqQbfFR8kuRESupxuEwedyBQosTKAKwLmFuMBhjWu1yD6SwiT6gKRr8Q6xnEbpokjt",
  "key38": "3KXq6FreugmojhYL81koq6QWr6n76MBDiP6JocSZ3jayFnGoPsisYNwnQbm16vei88ecmiymLqEU6C391iUE3MCV",
  "key39": "2L3JBxsRfSSrgceLEZUcEppbaeYxddsC7LEcgXZnWzeabUZbescfg8rsJhcg7vKYA7cyRY7jMMSZty5sjeCk92Ra",
  "key40": "3FuEYaBJtjVG1NfgiM7AUeaMx7HWms9PNeiQ5ShXnPJAegxW1Znv5KPbmkewsST9LZjFhdM6HHrfCGHsqK6eahJ1",
  "key41": "2d9KPfJpYNjMs7aTVXpcDkP4eoo3RacpSJRoS2ZWRqFcbzKKoJgx7nRtb2b3r7KL46jhPJhPuyZLhGmqcz3asgRD",
  "key42": "4J3G6WgQqfTe81jtxL5s2ZQLgFS8L4mi657kDHe2TXEYWTJTtL9d4CVNLX8NxRtFQpMkr6rBXm6PvZxYDKWBiSks",
  "key43": "2VLD6mdaoQGUr7EW7SLsTctXTv87ydaspxnH4VdNujRRdhWkwoSzccoBsEpxahzYU9JRHMPG44mbEMmsZupt22hc"
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
