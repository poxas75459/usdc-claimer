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
    "3f3tM2pPk7sRHfUGeRZUdbyKhy641WSVyXnB3X7gHs6ojZ1PUi5bkbLaiC9LvfjwfmhP7tT6mvYznrhqdTL34XsU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ura2VK5X56m3e2ipUCbKBdczQvrfnfuY7NdivMSQ2jKXKUkFqZSSghbb1bX1YatjjHCsmsaT5mzsgsrTDUWsidz",
  "key1": "2Z6c5DSRwVjEyhKgKCiDTAdaHcnw3sUqidHzgbWSSrqU7euEeRfyYfnJvg6cetPBtGRKqTCozCQm1sxNmc6rXAN1",
  "key2": "3qb1tEW17hs6PbNwPZLET6CA6vDK2B3EKfMyqsv8ZdwCzEaSDhGG5DrvYYcgK9cQ52o16gVkhdQrrPrzRj2iaM1B",
  "key3": "2HTcJyppotDXF5jyKNWtbK4XzAs4V9D3PAAgQL6Whctn6PsDkq27hGi3duQ7vNbQEHYK5Y5FGHkE2aNH9SRDqXfR",
  "key4": "4etcSZspPdWrVnZR9voMk7Eg3A6nF6W8EitBmyzrKxK7fdJkAEbm9gt7oaS15qUXAPCz4wwEG2kfUHRXxvithvuj",
  "key5": "4VdE5fRWGNTeztfE3bqfSrHzSAeH5mRk9ydhnQt8WfuVSMb194iWAM6EncjJjqdQVwTMm9csaiTbNqCAaPvttjPs",
  "key6": "2gHdfaR18jQQp1ks5kfuNdVPUPeL2FqbxRQnsi6KEbrWueZxxD1ywi2jRSz7KuFrrQSfjMcdKKmJC85WXFKDpePC",
  "key7": "4gtY8c8T471i1baXL6ebVTxGnaHvd1tcpdDuPGnpy6nJXSBye3vuABYsxtdrcWPvkA9ameyxfDSPXttaC7aRN4si",
  "key8": "3zXxCQdoRAHC5F9GBYBFpK9tRnT9PfxrLQJ7xqfsZmL3wu4hJvdv2z8SzpxthBYqQg2wjuUANL3qdZ37VFXaKEEs",
  "key9": "4jv1SvaHrUHJSkYaV5JmxQDhdNLYfP6obHU3u7Y4zPkAPZyUFQaJaSmjWyoMZ8y5ewbW6ZM1UX1NvJA5AtVc6BgK",
  "key10": "3PcWBTFf17upNcYnHancCTmmm1GZCizcYMNCcaPVJKF4fjTgUdfyKRRZiXXgveBafQtrL7mV6asd2BVnibq96D55",
  "key11": "2MCy1NufS2QSf3Y7ScR6KWLFSA8mAhY6H1S4uJFTR8fnEDSKJsgbZQ5a5X1U2W5LyAPDQxbUnkea8yBWfVMGQv6k",
  "key12": "U83cnbrULf3GwUam8X8CE7c6yn2hKJh3QaYoXLbmLvhRAHnX2B5RtWb3NFpuhTKW6TgUamYsc4SPUiKuk2r4TLf",
  "key13": "3FFij2wtJDQ2kdrhbgXovMJg72WFx3NgqLtduqRAfVVqtn34tzkJSMZY5o8rHEFHz3NCiqSxGy8W84N7nhBqWNFA",
  "key14": "2egkABQrR3CXmKr1sM9Zn8uNV3qW9HwsM7A1sMLMFN37MHtfuLnvS3oqqohWGVe854eRq8ANzMbU1uA3ffjYLxGu",
  "key15": "4sRkixBvnyxmtjb1mJcPZJ9vok269974xZb2BnxdesVyBJJQREk8ubfG1GQUHSsFJbJ7BT2AZS9DzNYWFrN15nNi",
  "key16": "JC8CSg7U8t2dZ6ssevwrjftmSLvtCB6szjZiK4Uh1VrEyK1kGcCviHW3AM7B71i7v5ewRgjcqJZEGLWB3WE1vur",
  "key17": "4DMfaPQ5veNmBv52YXML24M59onS93whs3fz1f5NvLQSxF5HopfzxUxE9sFPEPx9SRYF4Q3m5xpGiVWjGGoMbfQP",
  "key18": "3sb8gKb9YCuuiDsNSD7Kjygk4ViAn593zgRw4r26S3xhtWWfXCMiXUuxwNGNYP9uysHfLJFpRqUnF6VVzYdxmERZ",
  "key19": "5cQEU6F13MF5p927AzcD3bMmDNsqUnzQbNRnyjQXtkJimYcuMVEiw3ZYVqaPcq3sB4cfdiY5SfQPxbLiJCeXUseJ",
  "key20": "5w2W6cD46ZcAcgUNPdbs5MGx1SCwEZ4bJxMDvexwyj7Xn1qPm2K9zYPJpFV6UQCJC9veotDUupXaLn8zGzgReDsT",
  "key21": "4NN6UsghnuQxvtUbkt64vmsCZBucpCzo1feUBreTZC18KgdRtJYEhp9eRKF2it3MWKq9p2wkBbNRLgZsVoFTdK4X",
  "key22": "zXn5rcpvtzwU9qDunN7tBmdGTnvmxfTnxRpjzanjJZCdCmpks3csgvZkyxUydHQUyJ5A1cM1esnJRvY77bYuq5r",
  "key23": "2i4kAftXKT8AgL2ScY6bsWWKpPycGC2Feuwz3wCSBzkBBWLABxpoD7Y3URTidaHaZr2Aqt5WJ5WWsZjCoFwM2xdF",
  "key24": "4NaYXS81SvHnbtHPQtLYN6vFfsj23m94UqxZfNvGtyCHsa4BZKnDKQXhRwdKv3WBVK23SbyZs7GHA5ZdCs6jRUhU",
  "key25": "2iTxUvCXd2T94wEiGZGr6Snyvh6U1HmTm18PyaUDiu8XjJWk1VCruiWYPL7U6QgcH1HbafLvU2eTnVwBuTnMEyni",
  "key26": "4Lmiyjn5H29LS8DFYxjLaZWCKihTtw8vSkfv9DFz8SSLTSQXNgbRC8Xti8TuYwuY7eXCbjSfSkc1tP8SJvREXTiy",
  "key27": "otaKH3CqyfYoJaRKKHAaTXnqT2VnQX4JyBmGKQEGJRhmoX3jtVehXfG3kasQZkFaN3fmF7AiBEPFD6z6ZLvnumG",
  "key28": "LBgmzxTV7GJ8qNfTmtnZ6ArC3u9BkztZaVShgSwQavkwySP98kgxa2Z7SD8A4qHJKasm7axZjdruvzgWK2Ft4A9",
  "key29": "5C8D5RTSH3QXY6NBf1nNaKQHGscJEFKVAJ7drV29LFqXMCkXx9mZv2YBF5gCJYhFUm5pQMXbQwW7Ae8nRTdZCiUn",
  "key30": "3kLQ9e3f3F79ZymBFk3bTyLWpv7NBDQMJcFohzUwVEdLRKSuhx3Q6YzLeb7ddDFjV1TWxoV49YrPuRrYwh7ZsJbv",
  "key31": "28jiz1Gzcm5ZapRwEdk4exFMuPZjauCZKWitae8vzFpELo8Jn21y3Qssoj8FeMt45hHwFwWjZjuLpPBumL8MqSJc",
  "key32": "3TbwieSdPEpotAsPrE38pZBPoxobwBMrnK9Haso8yJPjVx74R3cCTkAgYSn9fyLbxRpV1mAH8ugdLeLqfKHPYvUE",
  "key33": "3pBGP6FCpA44ffRnb6e216HEL8DBnH1NiZz5v7P6aZ1aFzkNtMVbXMHoFo4LrmjYCUdjNeZ3qWrUFD4S3tPX7Ro7",
  "key34": "v6u7rJmGqhXYvtv1wnFPQrqxEp5Ef4rTfpjiePhfpb9yEZv13DsCk54AkkAMe4ASHGUQE1kYmYfb7ohcPgdK9LY",
  "key35": "Xq3yzjZmcdYFNiDkVmYiUbw4shm3BQhN2XZWwivfT1n85yEhqB457eiNvXZsuWAwWypWFVBohD62u67cq6rhRPA",
  "key36": "2YLDFASQZnCnHPJqitBfZ5aZF8MoZrm3KM8RiRYh6CiZZ9GUztUzwzcSuFPmDvC3kqH3F6H6Wg9S9nDCbsVfAkMz",
  "key37": "3BaeSicWfEMorv3BGQbxJRTqPbdZgfYGvZmvL9hPcV9SZ7VDwyCcRRidzL76yPEKG81FoTV4nU7NvxKmhJzkgW26"
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
