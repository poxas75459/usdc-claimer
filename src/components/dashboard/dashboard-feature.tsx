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
    "5khY2hnvBxaHTSc4Ag1MSJCtnchDLDsS75Frb7mJKPetWZ39KUiTkS5QrxVcYo5eGkp8MhciFafbktRLaCHJF9wZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xZyLFcGXxJJsqXtpWC4sKBk6Z2K2ChAYWFkw985EGe5WfetgKd5ojsMTREY2MNWZAfMhA8GfJETXsXYa6yGwMw",
  "key1": "54q4szXxf9v9RtoYZWBzymwUK2b64mAoevADYbHK6VAgXQGKaoup9RkEYYyDvqia1dLz4jdn7ABDfsHSP9kSev7h",
  "key2": "29SDEi9VheDNNE8nrdXLqrHd1u71LYsmTmEcv4qojyjT7gUPvqV5H9tJNGthuBuXKvei6XNLGAszgJbRRTcwj6zt",
  "key3": "2rpMgfmj9Mcj1bknQ4He266GEnoDQeBWgwhs4rvaRaBsbKMDeT16oqh3AB2jsj8WqPPEynTsJXpPMAzHqHiY6129",
  "key4": "64MRzowXBPAQiv7BgjyWxVvam6HsTvrgTUSahLAtA5T5asDFKDHfcWZUG9z6NTeNGoy1NLHgBFJZLgY4d7kGVynp",
  "key5": "3fvh28y52Y4RSjmqvLBRbyNjdRjxzH7EtaFCNVpy1r6uf31BMrukTFQKJwpprxT1QsKoMBs6oVfgTxekQq53bLja",
  "key6": "2mkzac4fj7XAoyd6XB7eU2KmHD2S4cAgqTBRX58b3rY7CEs4TxXNaBZ7WVLWBqutdCUgLmNW78gQcWpWvCgNMygp",
  "key7": "2SdXxg1ht8NJ348FXyfkCvnVw4Vsui6U8mcZRwa9Ma4AA9B5sQXpxrGzGYWPCmx6ZMcHr9UVwnVK9HGMgNahf1Cw",
  "key8": "3R386FYgUGApMAiL1iBGph2dEnZnDQ1B5z3qPymgDtAjvcYCLkJMSNgSmmcBfAS3iUx1n3o2EYBYMBNLepcqvPRY",
  "key9": "bTRoMVDi4sgfmuBNtYWVAXgV5bB42enq3FWKqGWUNiYykRvJLKBSx1k9cpX5wu4ohmzhxFMywizE1hrmADEGRFU",
  "key10": "4gr3CNPFgMHvYqrmK2vkf8tLMLaDhSbrKGd11LTyzb3dqfzmrqfgy8vuQED1qUx6pG93E483RpqYZFKXktgXoCoz",
  "key11": "41CbpbvENG2ak1xZ39baB7unskLtwhrbvXrxqMwaYbJVebjncZscFcf9yeJXySPgAHTJNJXrcxRHwt3k9nZvvKR5",
  "key12": "33K6RiL4mzCg9BJy7ebg1h33JExMCskDsMV5zzqTgqE2in26whGb51qT6H5LGguXFmL3AVbt8fkS4k4YtT19uYFk",
  "key13": "3pBspUuoi8hvRWB4GypuX2JbU9x3fjXwVgvJXADrJgtBq7EfTogsEyFuptYRrSReZjA72xLQ5UGAD8EECNxZeeUS",
  "key14": "4i8nF3dLhY5taieRZ8CQY2AGYUwkXk6EsqfWQYfjhijJAqqCKuDa8AD2gkhK8oyHHyHr4vUD2jcjY9q1qdbby6jS",
  "key15": "HK68CkBdUHYGvbe9U3tzmg7qQXykofm5ZEpUFgY6DX6nPhxt363bsVdkxyqBv5nvmeFXnGUivimEUwoyK31ZFP3",
  "key16": "3tNF48xguj7ZNj6z3g4M97qorepDJTZyuhRLvueNanDLPiBaj7p3JUpruS25kQWHC3rs5o51S8RVuGHiLPb35D5n",
  "key17": "XsXFK75s4iTh3ViBbuC2ducFQHpewAatKFu3FBWKwNnV69xoq59kjaRsXNyQhwANXuEiLkXvkf7kmKfZxaDUbWg",
  "key18": "4Tj8vFxQePmAZwtjCmU7742ERkqMNKBiidfiLE3F4aFhkQtVsfp5gLT83A2XuWyd76zqNMUdDS2y4ZwCW5QNJcQy",
  "key19": "SJVEFLCuzQVrXD5qz1AwcXPBkP6ypB7so3oDMZMFo23mBVJ6haQkQcNgdHkqxX8EbXD7Yqfpi9VY9HyWv2cU8CZ",
  "key20": "2mqGidJ7pjr9VVAoiJsNn2MtNa2zvcemJUFGepA47tQJKQ7CuLHqsaWbDcjTUYyQybRSYoabNp4m1jkWSrYf9J2",
  "key21": "5i5ei1Tz8YfgYhMKfYke4p8gcinfoFJEfBvnXVQd1AUuVmX4i5QG7xkkpKarXpTUVfoZF2ekRc2BerRvUWxbQnnD",
  "key22": "tTw8C5UNEVyMmw5bStv5j7vzxX4mHDDCTssYneyRGCE1iyHTYVjWvs4cuaqrSwLpZiPZKnF2xeJutXyQ338c6WW",
  "key23": "4zH5FAipaWphnrgtAZh44962Ckj1MuF9rUDS7KYzMsdVBDFHi3eZtbbiw3ZNdmDPWQCD7849MVHRb8ix9AeCQiQW",
  "key24": "5mJC8cQGcP7YaZw9hNA8u1BSJh5etetVg8su8aBnWwzCaSdHpXZTLRTrfwTSgkm2aCyGMatNfTkp7q8x66yfYWyR"
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
