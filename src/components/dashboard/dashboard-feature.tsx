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
    "5mdPWumDb9u46cECp3iKcLqGDbXQyRZ6Sd61ZRKza8zyNTg1d3LSjKdDtYeeb33XgTFi5oe6uaQSXCSqVyjgGxs1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ug7WLaw2UemQTTLhd113sswX1B1PfoFCMGwRpAe4wNAsZZuvrHrWvecwt5GHDzh65tk1uU2QDgtBUoiLuiryK5W",
  "key1": "5J1vRorQCNc8zjsM8Yh5zBgjFgXgdMXDRMcSPNkf98wTPNeDAfE5FmwG9dedkJFzFUtC3995LNZVKBdnc224xzX4",
  "key2": "4o9M76rrNtd4Sf7iUCg7RhKhkWgZxirdxexLCc7XWYxHrrGeQU1M4HPZg1ao2EvYn9pCZFvpGkZggAs5Zs3ro3TJ",
  "key3": "4bdBNPYEvKsPHQjTQr8mGoapX5YUNCvkZeoVEkN9eSRBhasFRCiG7gC9JEuV6qJb6zZ3HXPvDZrDDocWRjUfd3qR",
  "key4": "7TujdtvVdApaxHcTCorCNVyupCPCrDGo2yZhj3Vacvv6HqVZRyrnhU4guEUisA2Yrcm4dtRaN2UembS9kd6pFsz",
  "key5": "2UsKJvKdWPgFrt2VMwdhpGEzYA6jhaA6Hx9X7mgRDbjUj1zJU41eNRZD8oUxZneTUEaekXN5CqcE2YUkdSQ2ty3X",
  "key6": "4neL9hb3wH6oLQRPpNZXjGV8MefbbJZoTdqAt7Qc5Lk3bLu3JyYaP8Yd8KMCrNHcHeysWKrj4h37GCBsyzhxTVBT",
  "key7": "4XQ9BMeaAzpM6XJZGiyS16nPq2d3isnknbj7sw7SvE1YYCqXLWRaXV87zmqv6DGJwRSFLpkaV8Hfd5EUMsXtEau3",
  "key8": "2ZUvRnE7A82gyfaMerKPZwJUsWAUkhTQBdNh1DrngsD4vJKKMjcjHu6pyXf5dbikRyGD7a1WWRJjbDc7FPnZxbU7",
  "key9": "ovpCkQAEDA1EUkzuFL5Rr5SHb2nacyzfrLT4UPJW1Lvy6vz1mDXD42n9Qexe18SnXXH5koJeHwYKXbL49UpjgFk",
  "key10": "5pfGt5ZEUHR6gZ9WsoZ9aLSrQxz1Pvv6z5HKoe3z99tZSSnrspCH6DzCRfURo2Sg1micnLzJjiQTVXfqZFSPjHoz",
  "key11": "5D2r38GJZP2EKcGBUmG8NWYNwqghezNgm5ctxfKsAtgGharJPnzke2mGs2dhDhWV482BMV3JBGQfsgaj5Lz3GAFS",
  "key12": "4iH6tJ7sHDG7PQ1RReNzgMLRcJu3S1oUB4obQbAewPLA53kqFiMEoFMZktr6LWSq4sGJAkwxnwyiMxuRxcAxie4E",
  "key13": "NWoLrCgzcqBNFBSeZKXhXaD64iTzk4W1EGvvoheCgrzY1J2oAVhXapioJPnYbjGGWu5xsC9JszFHsBVyLVRG5E2",
  "key14": "4TpjgjHpKWMvmqBEEcNTE5mkR2Komm9w3eXfi1M9Bb7ALktcJx8nbLY65oFc6vUdSbY3nLpKu3Z2E6DfQfy37PR4",
  "key15": "274xASoBZsTrAEubUCda1hF3rEae6aKcrJKoUi62ui4H52JytdqBcscczyUCqViDzgf2sPUFc4Bd3PP3rcZczbxJ",
  "key16": "2iAHBL9tWHNQLbYr6RzGvChCwDuG4ueKSurCVtYJczX87my1hxo2RM9FXPFK6vpj7p6JVLRrGLeP5firmjiFK3Y9",
  "key17": "4E6m4SVhW8KtD4TKyXcKp6XBP39LNneexxDuG87hzaoepGLt3agwnc4HVvGSwFudwUGtvDASVwvwkp8kF8FdpygC",
  "key18": "2io4PnzBWtSTmCgERg67vdvx2sHsZQ7PNfYQSDLnbbMDac6fyux2PtooeKxLWvto6LayNpsaG39hCczhmwFpf5sf",
  "key19": "4eTin6RHzQsXjHwMMprmhYStuYCKu4BLJxRCm6dcv6Wfe6iU8Upeg5QWpQbZAKEJJXhV7t8zyMw57idBqBwKWo4K",
  "key20": "zSoyRouSFXTjPfUHiKVRxhMYrsvKAus8CoCtJowTPvQgASjoQi7d2qWZa7kCe1KoLwy1BaN2s7xjF9tLcHec1N4",
  "key21": "4cueCciihPw7hvjnjFRuTncZDD6GVJpHr3Y1K2j2bu4YgmanmhJAeJX3eDX4ALexKz8h6AqXWqs9nMiDXTxssh57",
  "key22": "2rgiJSfnRBSXURcfsqTc7Un4m3GXBbdXDx1EgarTwStiuC2retbEUcLuMd2WP2VHMhp2S4avBeHDKrCjpxqmeaLN",
  "key23": "jjPY9E5XuN8yvD3oiAsLcP4ptDBZjuiVPaLsYWhmNhih9nAzA34K8eiQSBV85Bvou8E6Z9jhnG1AkQPrxaRtAjK",
  "key24": "275nuBopP46QHuh6WpZ5sYsFqGXLGprBhnKrRHULJQucgCPQ1fJS2FoWJFPgCVnQnXhv5EjxWZuyddodukwJV8Uv",
  "key25": "4K4iUMEXERuxaR6fuEL1e8PD2fBMbGBKAXYB4QFaxRmhEmy1D8KQHkhgWxzwe1835JW2m2LXz7TdQEEYbixRqjWF",
  "key26": "3EvmtCAyxgRPrn3wYHRNCTfTLqoWQAQ25f4Zmkwg93Uu3hEJN4dmmPyTwwv65reQtPwuD4SAdR63KorW8A7w7nJr",
  "key27": "3kK7nQ45Vh1wqwzhzoYqrS2pPc4PiP6sNSTomppbXaCbjwdLpXMJ9SbBeX89X4ocvPhPNsfB85T4nyLenWNPmoye",
  "key28": "5fTGuABhiwti2tVSMg76MAdLaFGQgVssXGFHsjftUpXV4SBpgNKwN6wsNW5jJgsYwKnuSxb8CT3AdeXrTFGGn3iH",
  "key29": "4BGNtN3iGZmXEwAWmSG2FhSiTgPWwo259MFWxyV7F5BNa2H8fkBCzYne7CtYcRn8oYFvVUwVZRkeWjdPGVtdLAvK"
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
