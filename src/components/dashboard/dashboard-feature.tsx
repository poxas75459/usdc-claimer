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
    "5rXys1kekD4PBQC5S7BEfDCNM5E6Rei1NVV3yJx2Avd8pSZ7iqqVtNa8CBnYySmcec6mAXx3DjQsPNk9Wv6DLzSP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sxWjcePPoCM1FwTcE34cUsb1nfsbP8e7nwXnQymMNwF1GQ9A6t1TbrTY6U1AKJEcYo1bx3XBoV5U6Nurtmk5LEC",
  "key1": "329kWAiTDUSXTW6oSvShccA7k1gK84wPSbJF9fYj4JrJ88QZoHLTYT827MMyVGDCwJSsm3b2ZAPcycRPiNtrnn2M",
  "key2": "8uPAsaXHjvPFzpFA9iGyhZwiHjxXL6hYFdFNE9Hcv2FFYUwKAiYLkTbMJT7cvmJcBQBRFs9ETtspkwZwvQf855z",
  "key3": "4hj2V19wZgZ1fUWmk613psPrR29SuqdSrYMJddn8YEJuyCFxxmtkNzfrFvqALCoKY3fjLGjAbyE8RJv7JPjZj4B7",
  "key4": "US5c4b3Ekm3JzuQo1GcG6gtzSALJ5bUkG6WvcycZpEfzqx2ToNEgthVMk12qrWeLpTPQrkygEtQGhK7A46rKbKc",
  "key5": "5wYJAsKEjwKso7u4xZcdm2qPygwuAfq2LxmfdE5Df3Z43J5LWhHTG1RbEnARhJAkU6njnYGUpYHrFThRwB6PT78A",
  "key6": "xqX5pqWiv2r9n4d3YokgzeKR3QbmE4DQCNDK2JfBYTZXY7uoYECsf2saREhXyLsFTLJs2EFKaNQGsTfEjqPtSyN",
  "key7": "3oueirNK9LcvhHnYWhRddUHdwviUeJndH25uxTk6C1WpZ4U5dX82F6YVtTU7RKf3jyij4L5GNUGKpiZ7PCUHXxbU",
  "key8": "2ynLFzmgCdZjPDJXBe9A1QVQhqiXSTCf5KRVdjGfLS4oDChGqm49t51V76ugms2Km2UphWLZHL2spk6VpbTAY9bg",
  "key9": "2mwtWQRopgHeVNk7piensEDCXhfp5PM4D13iLH63dmq2RXETFUXF4CN3Xd3mK1MhxLVZMQjLQJW2wN5JsXzbi4pT",
  "key10": "2CJPvZuVWdwFpw2wjJRzngqUTqgWqdYrKKbQrXgiDF5Nagh2rDCx776CaVC6gu88Roof1YqtqJnhQjrFGJDQGbae",
  "key11": "2GKQwahBm9xxYVVNNDW2jutv3Qzs1tbxQut65hVnsTKPb5vpapsvMUsbkHggfRDvjKeT3ZdEk9DxtBbc6wPTKDvs",
  "key12": "5RrqwaeJbHYQ3NxMMv2D7fP8dHRw6arKfCBmmtJgWbEVzfKfR76nK6gzfVBXmacWRtJpVGK5G3Utt3Hpf1xFLRRv",
  "key13": "8AoXLJbGK6xoPGSSzGizi2JDGRv83KMyayPBQLbnV6vujQTAfuiTMhKjWZpdjAJccx7vFP5u12aLAddfcuvXfGU",
  "key14": "i1NdEwEDALP7L6N2duxi3vxb8hMDnCnXuJNE69ezHLaZkihS4cz5kkMMSPH1ZLaa3ihXY9g17m6vAvvARBAvBth",
  "key15": "S8xZzWoAzVczVy7szpQz2T5DCxiCwd1H6gMUfJhx5KJY4UPLvVLsLQzZqRMaABBfZWR6adPszhUotfa76wXL6ZB",
  "key16": "4jqHqMgo5CgJK3hoVmiFPajPWJis8gjUgm4ahwaBAy4nmSoTMryvTydkE1oCgdfMnrhtQ8o65TUzS9AdLRkDdyeZ",
  "key17": "je1TcRoYP54Zkuvii2xVpmy6AyVkdhKkRkTdYgrnsZWv2rDBsaqDw7XDVmXDwmMhUkfcFYQZwQn19uNCYqcVZZY",
  "key18": "3mRU9Vrtp5PqAbHHKxtqH9t5S7qQQJQWXzdFriBFwRTPxJ5RNusxb1eEcCqEPkHg9mdLEGHTYgnyBmLhg8AcVtcb",
  "key19": "5ZMAt6aYYQk7Wi54j6MuFi4kVBQydSjeYzyc4PVH7f2GSNNwnU83LsD5KVHuk1hCMkbkRteAxXtoavQtuEwYDDaw",
  "key20": "5nzHgPWGwXj853yQFU7co727CcyQWznHFvC4bAYSrSjxTw4gBw8xnntCrAm9sq5pHmmVf8r48Xc5BefntBH4Mg1s",
  "key21": "SGAXphXGdMG9uGXon6GsM95qQrkpX4t2JXNdjN2ZS9zpii7rgDAT2KXxu5jhuuJeCPmtWruDH4ztbF3nV9y3Yzv",
  "key22": "5ze5GFmxeTo9uit9qa52n7ACPd2fdusLYkSMhnB15UAwawzWtBvKoRHX4X71qTDX8rBT7B1PYVr5XUkkDb5gRhFD",
  "key23": "nZyTCy93vzsyUff8KxA4S2dQKb8ByfhXzpS6jvT3AFCXHHpc9ByF89wR3TxrbjZkjqqV6qwYVc2ubppyeJDcbVv",
  "key24": "4pNSc5GXvWn3qpHBrt935YMrW1WRCaScUJc4sUP9bo4qSQge9rpCKdQRZqVLrEi6FNFZSAB1LeirvhJRputPq1KJ",
  "key25": "2juNL9KhYPDTcYMGrCa5FKpkRyJpyJFoYoH7sWJiJs6xrnXQ4ixASppBqE8i6Uu5JT5gbV88VnGEksCttYqFNJJ9",
  "key26": "5FEnPuLMo4x8jfe1QwUrHB2Lp6orGyj3wbLyiSR4uYCTTnazxwz8YbbZ67U84cLB4sR2mzUfrhHYsV2tSd8cfxXE",
  "key27": "4T2cDe9SsQ4cLod1yjVfpkn1iQ9bnFh5c72kB6tLNjUq2zd2FoocHVEsDkDojVvNgmV4KoRxVaij6bkgYyvqJjwk",
  "key28": "2MJ2aovX9pDsy3iXc8pLqR8vgwHM8uNrAFz7BrVMmN7BdRhVUo1rmPUdgtznow5uUf1N4HGE86DLMbEyrJYyx7sf",
  "key29": "5Qi8vVBpULJAhA7go5UfbK3FS3VUa6Jm26HhvBR4CV8U3J48BAxEifABayJYF9w23dwLT3TS28AnWJkPNT5B5iw6",
  "key30": "fz6th1dfpKRhuBNKV4nKukcpmgtgxPjrcK1WHXoFoVZhd3nDoaWD9deipiXQjGyvbq8Cj2NV3tdmAr4Q5uxDQpd",
  "key31": "4xqbmxPyu7c2syMCbsA9JsTpcX7nNFqtNxSUoFPNQ83gZKp7BfwGKXbEFK5LHMA3PjvFVq4U8oCe3vpa8sMtmGoJ"
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
