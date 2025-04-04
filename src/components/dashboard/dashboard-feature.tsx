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
    "4St479GrAxuCx6WaJmoSHCHB2xLyx3mq6pNjkV9nRzTwGrmrUQFP75GvXwpKEPgVWwUBDVLvPjAtRnmt8mLBpazS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "amtqZWoTi6FpdXn5VkAbnem94Ndwrd9rUPqezfMPB97ZbPzTMG7fgdg9RsuzGxgRGXbNRJhu7N6dhKu48MNxR31",
  "key1": "4jx9Szm9QrEHkhFYdVXLrH36GGYWgXnWeas8MmKfcAqheq6yeJ2nQMoanV4NKhvGCRSozVD8J9mrQ2ZMFxiPKhSj",
  "key2": "2shaQUwZY2LEPtywv9vzHEHVVpfXGpFDfLcpRA7eKeBi5ZLNmDPtoZVCGBnWQ5KwHRun59ZqFFEDkSHrgo42Z2Gk",
  "key3": "4ZdtyJqNBgVuhETCnkTGAjFD487LJH9vdDDWib1N7N7DYdzwV6hC6srtikBJZU9BbkntU1LkR8vVwVAoSHKCPA78",
  "key4": "2FER31mijmZjzsjJjKQiJmTgqAoVUenbBvyJEDxnJqyMa2VqonEtSzwWRZS3AU6KPuFPsFyezmiaVg4UCoF7iPgS",
  "key5": "b1vae7xLDaZ339JKtyQcSwUd2YjNU6Wo5nBCebp1fnTDiyQ4Nr5ucTk8hpRJ559RncUcVp2UQJkJRzfJPvGxaXg",
  "key6": "43gTaSgUX9CTc56XBGtGtmcze1E1jcR6cWKtPh1m9xdNq87NYLa5yPVUKBMSy89y6bUXVtZyYdx2eBJXvd9U9ko8",
  "key7": "fAnMSVpwdWTN8efF3dhWvtJw4uLCxkXp9dz6Ma9bk7xQy4KZa8fMB68P8pNhDhacXrMLkQSDzNwzsMZMnGkHpGw",
  "key8": "36rWicc6raDmEPgvwf3BvrQttLou27i3HTh1EJHR24xSncGwmtsvzHKkX3U2LTrR2T4sKBZyeV7zUCTfD29b9DHz",
  "key9": "9An7ZC6h6WxfNEqV23jn9GVRH1TucftV6nn8a2oU41e1utdBkzHFjtSqQT74uLagAmBgwNk8T5MjPgxwbbP2TCn",
  "key10": "4XPSSE5XtyvPQDWTfJ8PiN7Rzmvuho48tsh4GniNmHKjpWYEYHeSV78PBimdgDE8CdFaMZCsBuKYuxZ6SL1Dv3df",
  "key11": "4hcBEvw8q2gwKQGQQ1ziQ7uCEwvBuHj6DuXiH9AuR1sYkCX4n1m5nn9T9XtS1BtqhpRupMgnBVkPbcF79fhSJSGR",
  "key12": "2mpxeUJ5v3G5q9dZgvtYzpZYoJN6Q1Yn6QcSn6Ayfnuy64f1i9WkyAYsNzKHGfkNXU5qYu1WnWdq3bv9Nd2Rzfjv",
  "key13": "4PTJtHpatJKKt7mo2H2SBMRuJoS7vk9gPbvzMCtvyX87MGzMG5URp87v2aXjM9YrZYnbEhg5XrbgnM1hDFKvrw8b",
  "key14": "2pRrTSEn45VdbHfgYftkUj8gjJUd1YqwuzoRGJtznLopT6inapwiWJy54LGx92tpJmhgrWgCATHvGeTUFQmeAAaC",
  "key15": "3t2HwWeRGRKUznooQpsVe4AZs5w4S3f3HQdxPCtumFKiJ2PiTM7AMuvYyFzsorav3uLGZRjwrHHwS8HEXoTrCfh8",
  "key16": "5PZt98grzzM6zuuXgMfc5dq23eWRnmydTjFSmZSkSwY8j52f2whucyVDP3C1pPFbgc5R7FS6dHsLdu2C6mfYCkP3",
  "key17": "CD4KcLoA6rW4V7djZdeTNWUTs1HXZ6KVpPDGYuxWrdbYTvnCKiHUNSa1rKWFttLBgXWQxXhHPv3tHdVK33t9fSp",
  "key18": "4c6oSSwkYVyFd5LxjDic7DPQmc8DtnC5vBCPXxpG9deK2TNgavcy9WctVnaWuYzyTQ6yTsTKUNzCPVW2HGiSqBGb",
  "key19": "4qm9B9x3cpqCAWd3wZfeWEPbUzgQFRtSV6zVKJtmq6u8KWSys9UTru4g7Kz3BW6dR4vNePKLMFP9jTAridcUskPd",
  "key20": "S96NDDbZWi3zPmzA4a3TnRVQZnP8XHZ9Qty9qxRvKt9UMMTjww5Q3d7V79Ptp5sXfzJwbo7wUkmr2xBvJF7Epxj",
  "key21": "5392b4sa3BPu3vK5bEdEfnhgwn5ykW6gF4QUvrZo1FAcCCGMENsU6q3ZZbHNAULjcbKaYzbQEqhgxhvfaCt12djd",
  "key22": "2ULX6nVJENgy5cJGppipTabEj7APtSqmMUSheRvjm4rpUgki1xaUNio7JVhkCmLuUoxpyoULezAkKJ1QFa1JDx75",
  "key23": "2rhiCSLf3cRSZmyyBnEE4ZvTPQP7ghFXA44wWXu1NnXZEHxdfKWYwEGzD59MJvhM92grvzrBLdR41ADzohpxkpyv",
  "key24": "3ifY6apnfCWuqLWPdYXcBgbpRwDwpJ8YSQhYYmX5Cjh3rSxS4hKU9ex8hApBoT7wvpZ1eYrWFDxpfna6CJXxBYB4"
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
