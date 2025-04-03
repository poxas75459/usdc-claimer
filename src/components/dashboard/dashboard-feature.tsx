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
    "3ZXU5pC9sbCWUMK9pRcCRUntJWQBRk9UrqhFn5a7quJja3dL9i9NFT4eUPSrhm2TvYSuKiteAtopatPW84u1e3NE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AkZqPUgK5CZG3TM9UnecZUKgbx1pmm62QzcLjKerBq3ZNb2UskbrfU6qsfq3QhZbPT4vvn987rcRo9TvN1iuQU9",
  "key1": "38Fy8fQ2AAqqPrhCWmtKAo6dc3Wcd75MjWK86kAjZ4aAh1EzhU2BvfKY7dZ2Q5vJxHr46A54bLkmNgkpJM521z3u",
  "key2": "5fXFZ3ySWNUPkR3e5SeiceUReoB8WHcnTUZEdbbuNgZHUWWM2VuRWCL6NfcTkeksHDqAzTkgD9NpVbbymVJevDqn",
  "key3": "52eU7XdpXqUsdyw4zWNTXuinxHgmjd1C6ukKna2SCdVRPQaSW9Xd4mkgkYFh5PuYmBiNBpXj5M9G4yfoHPyiMbze",
  "key4": "341QtZuHDucCCEzCdAPUg8H2D4Ev7oqH15qX1VQ3LNAucTFh6EXeJFRCrFTfFTCHkPANPQxvZE1m52JP6m34gYvS",
  "key5": "22K4sx1jXrqQvsHi2fBMCXWuywxYBKaL8gAWMa3mMUBwGMmwFBAKCtiJ16GCmwhwhBhPrnDJDUsipxEFUAW68RcB",
  "key6": "3xM4NWMq9ndnWYZm1TZMenbtuQWjq4XBSDjvgaySo7uGgfs7MS6xr3GkfWgabdcKzpgEDhvSvWaxWBMvpWecLvyV",
  "key7": "4EQJ1gMTTRAWVbUHDbiQcjEpGckmVawUJzgQrc7oBdF4Ei9UZD49SfwK3Cc2P59uZgJWsFiPSKRPYf2FxQL1kFcQ",
  "key8": "Wj62pDSEdeTw1acZR4aYGAsFRvBTjrMkao56Zm2QVyUmNwmRKb1n6KtiEhZ7qeYUoWp5XMJpmYJvNpAujQJV1dL",
  "key9": "3Tm1zXyhzfdxu13a3Khuxz6qbcQf5795vUKQLH1nZwLVyARvQZakRJZq5ab3Yv8VExjN2c1n6owE8Kz4RPyCxJme",
  "key10": "4vUjMt1fCmoEXqFbpRZakrSDpNzPMQqys5iexpQ9H7yNCZjM9sceHfQ8iYJcNu7UC57F7RtSdjDRaG3xVRsSkweP",
  "key11": "63QGGpqpN3ppxENhK7NRDSyZJZYkqhRirNgSisZGcHK1ndrsDjGJjP3r7SQ18UDTKfRi6jWvn31GshyA6dghaaGp",
  "key12": "Tk4WorHrRy9THi3udoPfTjwNAEZgaiUNQBjx2c3TmVvdJcqSsnFF2jaWKzKQ7x1KhroBVzeqHdAD85iBPg87reh",
  "key13": "595qB7zkyuE8MYSATbWai9tunCCb1kQPUcaLqaafKABhhUz5yB1rmid3ri43Fdmd82XCgUTfrukwYJbZANK27z8Q",
  "key14": "3hjKheMuK2n9wmHPTfBAMQW1gNeHxwBqjqqJdbbbDkxNYPyFSkB1RsDG9NSsthqZrnr76UB5GgeR5NuHhzssS84Q",
  "key15": "5EZPr8ADNMswXD5GRMm4c1Cpw3nD3sX3E67YpmH6eULpMmVHfWQtea3KNNHR9WgtszoYjfDRQ4bsDsC9BtdAk2Z5",
  "key16": "5Jjt2ryAt4gZTG6Swv313YXTLVzrJNTjAGMz24F3GaTydL5Kp27D88DVkgvpWvWeyZqFEWaANrtLjEQ8s8pDN7Ee",
  "key17": "4YhcENSvzcLEELiaDjVopZd7fdamXHLx1tq9uFoEizaHqLbiaXPgb498XFNCUeJp4Pbzkq4oLeD8vRBxdk7U4MAM",
  "key18": "4zQXGsjd4Sp1hDVE9D2bc9VWGf6f28u63kGA4w8r1S4hZUvuesTmZwQvNnnbyrifEhrzJYmvhR1WTH8KUWMv3so8",
  "key19": "9EH2aGWBT3Ak7DKPG7BA93jQR8vLWFfoH67jmxpGHx853PkmW5Nape8dX4dhfidEKiPAE5qh2j2sER1azdzzQ95",
  "key20": "FYpQ4Wwy3vNhe8fmvNQwXBEn3ddxdXTxmEGgMxVZRhz1xqedKYLG2zeNHmLp8ReDQmYHNDod4o84YjvjFGGXFiG",
  "key21": "63sLKixVHACFevfhy2pPxZgQLgRyB7sfPWEoutaWZMztcH2mhrHYnkSp9FdS7jGfKCNiu8a7RgFAoNtg6yBvVnQP",
  "key22": "4RENiFJaTP4MR9Ztp5Dx32HHNiAguhU1nUruCAV15AEuzeAUXEiLUbbDVGDb3qj18Rz51ukSnP4xmW9uDAWcx4f8",
  "key23": "54pvWV7vVRM12R48w9m7cqKL5pTgomXUbDxNXRMPtbLRHo68GjPSTWuz1PxMWmQ9ZKNtYzHKpqsKTXE63sdjHnQZ",
  "key24": "2ZQWCJpV99qpyWv6RwGuBNKRVCgxKD2A4fvddXbLS4zCNMJZMS1xXnnafN3qpB1EwWaJkp5Zus14akJQtkn7cNeC",
  "key25": "49JUUV8wR5FyQ5mhGZ1eHNGczyZeK1frgGZRm7KSRaqjbyt2Tx7BxxynccdpFy5NyKDZYYkXbws6w4eUhmfnWD17",
  "key26": "5sJowEFbMbRuY1ZLxPKhjuh7mjcuJayfWQRhuQMVvg49zP3H5MsGHM6pFYL1S7sJSgDKBZ9CJazgnus7MudjimsC",
  "key27": "2JhTsHj4puw6VrMTCvTBNSvFNCCFG1naMA9qef9x3uXzeDmcJEkXkjZWzo2f1RqmHRpmrLV4MMWw2Hymh9phcewJ",
  "key28": "58ifdqoTDJKd7xt8m9YdjNBDPhodzqDXdrWD8RvHz6z4J5khbiKupx57f8WYsrv62WffbNnLoE2CcftkATnwgiQK",
  "key29": "3QuwLPkZGfmZGTvBsvZuKiwapHjeTA8DQoeiyNJED85bo1FFW9Mj4csjTp4NRJK2QEt7GbiaAm7EzUyujQpVP39S"
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
