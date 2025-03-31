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
    "2ypDPR8bp26scLAS7dbH2bPg6Gb5Zvm5mtJhnjQPk6qfCXZFH4fiirC31AafYHHeP8Xy4mzEbHrxBcbeMm3WSEww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "guhdjRAtfHtpfn7ZwhMBavdnttXXU9CdSNbKvH7oprMjb2WLJwjAH8i5arETibB8f4pahqiTuDkWcbnSR6e74Jk",
  "key1": "2GsYmEkpwneDS8azDfVATZwZyBc5TzMsPrBGHS3WnmwHe9WbcWyeni6uVrgPjvfLaWiqKDSGFpgUtwHsayfR5DUB",
  "key2": "5RJ29fhCgoeWXaiG6C7z4QDbNq9GZwApqWUTKujance1XuCmq7SGmzBxxjzNFSsfAemHgzp8fQzmwqqsvVAPJRUK",
  "key3": "4qPqpCHAb6NV15qn6KzGvh7ygkmd4rwZdU1vNRSUGhtCDRtGNZA4mS5oe1sWmQEAbvF49UvfnB9CXRgKEe7SP48t",
  "key4": "4uepL2sqbnsY4AuLwu32AEaBFVHFN1m1xHGZG5gJRY8kaVnxnpv4GYzN6faFRqRm9nnz5Yua2aYmeZucbVX7iGvZ",
  "key5": "5GLTQyATJVjniodkB4ELKYV2uhJnv8huGpgZdSQC1zVQabv7XijymtiWiay5911CkeUhsuN5Urd4fotYTdVECrtJ",
  "key6": "2ye7XCNxAxVrnJKbQQtMCCMU1YRvXAeNPcFWme79SDKpjRUVWDsaxrnL1qkJG6qdx34ioXpkEjg7kibm9JPYipLr",
  "key7": "4my1F2fC67FMRtqNvapgtQ9zdjnpD7Hr6VNif3EB5ZDrA9q1M4L42E912ibFqvXkuZVJxiceofPcYEMHAPwuNyM7",
  "key8": "58yL4Cdn8egm5QQD2e5xtZqHuX1TP3Avb6iccLh56GSCQjdUqgCx4rtiZTriJit8MsA68jR2TcM6XJQnpgJkoArp",
  "key9": "4Xdg2MknznvAViAiqTrxkj3pCMAKvZC1eXT2pXJyiBMKiumx9PSUjdH7Td7b7F48jGXDP7AVDgvGRK8SQ2VUbtYu",
  "key10": "5enF9tip5LXsZjjBzRGsZ8cdUwBvRazhAW2er8WXv8ENcotCRLxoaPAQmMmmwKvR5XaqmpjHEnoHrzc13nfaics",
  "key11": "9C1nQBshuQpapNn4oMjwLKU1tnRGehmTdX73ToJHKzVyEiKn8Xi75bcwXhDRYWxvwti31m9j6YPuNo4bpXQ1zZX",
  "key12": "2nezCFRVAdu3SDG55amDNtMGB91LQgqy6bR6MDiBZJtpukodyYiU79eQvRW12MY6mZZsMJoZDfDD7NEjnyDDgbmW",
  "key13": "44FgYN2gQtNTPtnkp5hx3hzq4NRFS52nFM1h1VR7b6sCnqQjr5vCEaKVqpKTepH9GYE9zyMwf7AvhXHiArWAy5wg",
  "key14": "3DVkVdYq6VQHK5pheKo5xw4j6G6z3Homfq5tf93tFWEpQC4pv2vjukM4sPfhqgPBQyQ79yqfBW9kv6BJysGtPZRf",
  "key15": "2sKwgLHXdCrikkQ1x9cagC4Qw4JccyUU5uchPw4Gy5wANco2AAQQrLsEGmc6ayK1ZGJSXMnEJWPE1beE22KxUdZu",
  "key16": "oMVP9T8NNVJxGt6CpYWkCE4Z3fnob2UkYBDLr4kT5PUHyAhFz8JJBFynt3CxE1RVbba8uJV1JwwDqTVmR7c6971",
  "key17": "25vj4dQoUDuXk8jRCccAX8FdVPkeb4dWhNdEXVZoYERHEuvE55pZXXVDM9JFQSiu8KbDPfxvWo1pNLN33PUxipyW",
  "key18": "66PdjRArRGagRCW2fjYFhRcvhCN5YBcGr9xh9X8Zrszzoc9C73x3qpc7sfHUHswXAZiXgsb5HvtxJuCmugyLxD81",
  "key19": "4XMMBR2dWK2KtAr1PzWbgQjYqzbs8ZREH1kpkL6vWJuzicsTsDPkHA5Xksk3mZVH8JtBmqkdf3PBEJ1p8PLMGYTs",
  "key20": "38vZn7GZGpHgBpeqm7WdMj3bVNdoSKt56SXVK84iG2d18KsZen4Tuuc4AQoT4mi9kfXHGbWu8qwGghSbCuTJ3Nfp",
  "key21": "5K4H13yH8RAScrxkedczoDYk9zWcrCpC1Mwu3Wjb9D5o9ppydXuLHWP4QJdkvumotoQ7BJnxF7cM21wpXbABN7UV",
  "key22": "rvpe28bzgKbu6j7BbA8gKeh6sn7s9KN8zC8LRT9vLYUibdVM1p8WSKDVSR726Ju9YwgbGYGzpw7N9CoVDvrgXtb",
  "key23": "3oGvKSugaT3oN1RoSW12SbG3efRuD12GuypXnyNbxBxjrnHVd44nJgKYvZohcM8GxdgMVk9ApAF7ZvEJDiZMR8AP",
  "key24": "5K66aJC8Rv3CHxQam1swqzgu7LNxi4VTr6JXhwcgkR5K1drztcZZvyi96B1n9pDTGkU345y2XDPhKHbcLreGoBsv",
  "key25": "4hsZyFk7uzbUucN4ryCnaNcyjbju4h1KuGaXy992KMAH5fxS9B6TWqarpeGWt5VHGuCs4VYWBvu3F7sWU2jfd9Ud",
  "key26": "WwYuA1BNakqk8foCFTKNRsbjF1xxQyqwZoUNYKV4mHAxm2iTvapN7FAahtk1a88uvcxU6gZoXpD8SvpCuBfEEZ8",
  "key27": "3yhak95583qKdYJnuvEixXsv3HLZo3USweNSLPaixHKCx9DedDMkb81CnjLiLBenywyY1Kyc5CbPecYkoLTtao5y",
  "key28": "2tXyPqg3gW7EeLwSGp9CxcGarwPbY7rJEmWrke6BFt2gDg1R6cB5dCyq3jY69kQc1ta3H9Xf1qSmws1XZkw4b642",
  "key29": "3fxnCoVeVWeZyBem3zVTvPFKf4b9YiMwE5QDjGtv8p7heQNXw5svP8mSjE9YWNn5WMhXr1k93UDx1qLZR4d77uaM",
  "key30": "Hr2hhvAiuv89xZzxLCtzSEpQZsaz4WU3UoT9MBnjgWHgAcCrUdofSENAvjuRYwLbXQGpztsbQs9DT9ahBpp646u",
  "key31": "29bNfSABWVoc2FeC8yG6bSgni1xxGredmiZZe3Q3ErxVeMCXSrjRZSxFjJEXHz5gbqUGtw8x7TCFxpZHvPHwo1Gk",
  "key32": "B4aypcm55F7jnQUdNA8uWVBaHkj7J6bWdjP5sTdQR7joB9YNNAmwjuBAo9A3ipxivFsSsQACjd9qLoDSfQLrAuz",
  "key33": "4oaHZeF2ct9iwQEfTGdrYw3snZCh7JYskvNzk9467CX19quJdEWjksacwcSyPSsZtsXAEC3d8SFYBVqWnjH1Pw9x",
  "key34": "mNVtZQs88QbjoGDbY6kUGafaFLWzEusj7aDDKEJ2bCLeDAQRWtHBTos1vQhFcpFovEhCiWFKQ83kGseQ8DpbN1S",
  "key35": "42gABv2UiyEprnJWDPUdSdK868ghoV3M3gcd4kgvS4Wng7uZbYt5bqCdrKpDkuzBN2du7gb7xw5iDexpTq9gwpyH",
  "key36": "3Kd5yZfJcVaWu9bPvstCPAV5DK5m5wkUfXYpad5UsFCu6PNcNGt3pVsd6fvSfTCxehPEGvLmfifuLVAgae4aaHjQ",
  "key37": "5LGeTr87oQjkFs4uiVFBKRx6ufRES7S4jsY1errqigWpyc3YznkT13woAUPvyZKvyH6UVv3JTVAQoMNNEtSbK16W",
  "key38": "3PiVnqsRUYXJqpGjk7aWNGyCkrAE61Qk2PhYAvBQ4n8Ag7z7o1sZsdWZ1jrmwSV7kj525xSrRGgXeMEKt5yts8j9",
  "key39": "2f2ggZhLo9Zi2WwgBEuBDSZSqnNr5LfPho6WsT6UgLmzffPJxqyiBGeBeWgqUKSpStpWEJ3L1SRYW5FdNbDDH9Ee",
  "key40": "2unFrep5Hgmv3JqwqzguV1MympmimisiFSSS7Kr1meq9rHpjXzAsRZVcadgz9DTM8GtHvqS6XeLDnV2myZrrAr9Q",
  "key41": "57M2WY52qmekoYzshJCvR3QJeJeAvi5brQBS8LHrYdRxmHWDTrb4EHuag1VaftF1VejuiMELzWKoScBKQtuCBGup",
  "key42": "4oUHxPfCTPDyPrtM7TgTjvc4MRtj8F3iCBaHGjqGYghbUGeKCud6AESbuL2av9m779M8s47bgJ88nmoDTDGrk1Xa"
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
