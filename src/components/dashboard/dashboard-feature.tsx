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
    "5gGPhGABFSrpw4gYdnJJS1oNMaEMEu6RBeKpfK7WR4gHNcbXoxjhihmXXFntPxqdWThFmexhEgKW91zTCPjNfkDG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bA66eG5rx9F8Kt8Mb1mY6NRU3xSdBYsGHW3rXYYDHerpYnMpq1vFFXPY1BdjUYHDJe1xmaaYkVhMh87tBeieehr",
  "key1": "3j2KgFrDKwSEiteM3KDP7nqhFwGmEnLTuV6i4YYM598NdrY6XX9Ax66LqCvLwXhfsQLhRhpX2W4CLte9hozPAqMU",
  "key2": "QFuosB9afFbXXy8zmdua98jGSbbhHdZFFP3V7yBadav4wWx3HxzWZQpnKES1gWp2Xi8UNzBihhYoosPw1GZwzqc",
  "key3": "ezNW7odBjbaDSjb1PNF9gYutXosdGop8cCYZaGLkCxaYBxwJkKVrhgBAPq2875BU3Zqf9DmokUirPNJo7VwDjiP",
  "key4": "4bUQGW3pEhvj3vgve2EpHpShfUz2GvLpN3WZiXJPr2BNZxf5dd4dMti6w3RnKbeoBHEsfa1BhZ2CjMoS482iWKCu",
  "key5": "4vKT65NA1Wr7AW3G9nigb5pjE3SarPuw8LKGVnyGsYRDSKukwt2YmvJ8QGCGYAhVAFg1M9ynp8KFZs2MFSr9bSqy",
  "key6": "2uCkan2dRPGUSTW6ZwxCTr9X6KC96p5Bg8QaweeyPpG7Q1rNh7STRc7ivjotoMGfrgJNJiiL4r8rpHYV69Er9pt9",
  "key7": "4z3aFzuWzhGMS7Co8TwU6uiBbjrktUzPmVnrZgXcFw5FzyeqBnKoC1YzCFdfLodz2rh4qNqefCmx1yotf7Unumve",
  "key8": "2JtQMZQ38yHTURng9RwyPGKUZZFKTQJ2Re7Ct3AjbCb6bkVUt1SY5qAe7bKqCbxAczZfmAVwPJVVe3ozN3Z4Yn49",
  "key9": "25S49SY8pt3FjMC6pxymBv7z1piWXuhwaiSpvEfMpN3geKbFD51SL4ueg2MsEzKKjrNBKRct4cuvYKrD5e6tUmxv",
  "key10": "2qAj1fUZwhi47VcXpMtAYFxMUv5Kf2PevBh4fwb2f55m59GRUiBJUnvgLFee7LBXuFmfQRSGzeVVzgQLfCHFL5aH",
  "key11": "2dhkx3v8zAgyX2SdFK1bVfNnGoqP1sMUMiGZDH4qzioa3fwetbJrZTtvxkEAy5iqxoCWwkXug6nUy5XxB7zQ8t51",
  "key12": "3bWzQvfjeX1jjxZNbZebyyzXD6P5o5Qt6JKbfkkGT4p257fR3CUjBZF492THPcpZ7BiASY6RN3aDCSTkNrANCQYH",
  "key13": "52VnfYeUb4c4udx5y2A2B8tBzUyKDuoQ7qiZm1MQBAB16M3c4p8V1gpSPsBAy2qLLJDxA8bRacjrL7ToRYLuckmU",
  "key14": "pnYPtjEq2pRXxg7jm1seWiWM1vvfHLBdt8vwFCzgYE7jWb2Q5mqE1tbiodjQWZ1eWL7yooUhZXWiyXQinaqtX2c",
  "key15": "6xh5GVv8MdKbpDTagMrWaVPLzNAShwbZx1BafAjfxxBdXvaMa4HgnTzjFxqddZFP4xcByfDf6FzCeQt3zdtQFgs",
  "key16": "71fsXp5Gk8gv6qAF6MJ6hHYo5FkDnnCsqpmpXNnHBGtxf37SZxPHsGK9ryjTBce693NodUZ3cMr91xPz4ZAj7nG",
  "key17": "3bvj3bf5jh25KdNF4eXPXiuCbBTWvQKW6feSBw22z1ME9vDs1nGMJjwZKK78akKJEZz47JGQE3qAFXYKSeZgexzr",
  "key18": "55nYMZ4spkP8VR2cME9MFchaaEbEmbRUTWar4yRaA47mLWXBwbtbEN46AH77YeB2AQ3P4TtavjqT9rvLHbonrsA6",
  "key19": "3x9oqttKTBdCqcLjuN3Sbb6ZbqZyRRbGprTgKaDjvk9iCPdLJ2inDbo6yVFj1yjyrQL7p84g9dh8wkEBr1VLmYDA",
  "key20": "2cwLefcBEfCMfrZsZ8AyUwf7Xde5EmqxKRyyzNkSkMA59GbKNjRXXqx6YRoC8m1UtaNxnLs6AhYmS2rPppeUX3Yn",
  "key21": "3rN4XXpLeeB4GeoRPMNtiyvYsQFTqHDez2XWLZtenS1KkCLFznNw9kCni8DagRRcoSGpVnDgL6v8K9Ru6YCXD88f",
  "key22": "5Es5F9wr1CVfQZCpDp9AimTKo7zhaPPUbmicy4MwEh6txV4JcfYbcNftQC755g2fDeb7SXQygcNAWr73DQPR96YS",
  "key23": "ftQsgUs7HxBKLcWerSo5SQ4rKV1nUcGYpMS6BPCmPFzumB7tEQGNvCJqFH5mgUV5UmowT6Buqh4GAqn9wgqrL4W",
  "key24": "3n2T1jpZ149DtWEcP1s8LDZ97dviTT2ndiqRHW8VG4XwPSNAoJSVsYdyDTrP8mCaaoroCuFmTTyEZSvLitf1cn3A",
  "key25": "4wUUguJPszwRxbcfLtNZYUBF4ax982dAnRJksJveZ8rL3v68WACZZnrWAjkvobVF6FzWe64mr99xshPbEGBphZMM",
  "key26": "2BWUpCvgSYaZ83KtSNLzDXzTz8NpbG6J5qKKyte38GzVLgXvroBHAKfZNnwpKUbgS1y2J7kYNFqcufXQcUNA649i",
  "key27": "5FjWDB4fto7JTXWRhMqu3a2wF23cuc72x9MdiydxTSi4h9mrN2tPTGrPPeBNBc3tnwguSdRFjsy45vDPZ5DWA4k5",
  "key28": "3EXR8qurdB9jn4UXwq2z7EWRw6WsFbritjdPSuFNYXMWaoZrNZTxzmypfaH8XSPHKzBWjNwWJfi4nq3Xrj8B6F8F",
  "key29": "w7didyu24bFUFaNKnfgEaBXcBMHReif5fyTufRjLnrmRS3te5S1J22jNf22zk6NuM5CHTJP96CMdUQC6PAkwV52"
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
