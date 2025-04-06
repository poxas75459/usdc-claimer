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
    "5zeJt8eKuq4tAcRDnndrDGtaPjykF6HVcwr3awozWdQGUpvB2cEsiDPD8nxQTYHu4E9McEsRXVN4pcpZptUpxKXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b5bhbRScYQtP2of9cuZwvtRoZdcNfhBAQoRAjiWMyF5Qfow8xKUx1b9heGx3GRddbycN2qQYQ4gpmJcGL7P5kXu",
  "key1": "3SB5zR7cM1c3R4GugtvakY1KVijVdQtYHRhEtTMNM5JUdRBuEc7X8GUqTPrPuStqm6btc4z9UrxREVToDyKdeG6J",
  "key2": "4uquzQeNKudYtLJo3QjSRoAZevFXs4GYN2DVNAz7GpzGC2Q9sRKTYmc5JX8tWWvxq1zkEBfryDuj7BxPs3kYNj1o",
  "key3": "3APuP7LfvUwn6iPz5oZeysWVhVmLGvmK6eSfotJrk3w9HUWnKTd2AddgfyuwbiuCZDuqDayvvwe2qzZk6h6oAMpf",
  "key4": "48oEAHad4TvfJWnctPHfBzCoSHUT115iQsjMCq3qXE2NQDTbxycpZLgy4Z7V4ai8BadQB8eH4bVuYWwop9cb9k6C",
  "key5": "4SEvPk5HVaXU5bMtGZD27zbu8XmG1puFtXYUnkbtxzwCMr6kgk3Fvbk29AYJx6iuKgMtG6Gpn3gY5YCjfBmd1e3d",
  "key6": "5FJqUWoeq2dN4gQjx1N9kcGAJYk3Hebe6KnHZTTsugTtMrCw5UTqKBTSZAwYmeUy1qHKKZXMHgVtH5NLugzAa5jw",
  "key7": "2ocnV9dLaDK46ijFZaXdSsvyZ8LVrxCuZP4VbMVXHHkJXq5FdYL7o6GX3kr5jYSjYwYyw5zQAkzYGa6zYS6Cq5Ki",
  "key8": "2GCPwdHjDBJAM8V7NvAcYXJPCyRSgnhRRNYhQT9sV5zrBcCRyEbPQuAwdmRfQmgQVv4ij74SPmWFKDovuDMnm6kE",
  "key9": "4gtZ3vuy8W11K8tyvna5fbx4qKD2WPjTHyii3hjrCbe4frMAJJ1pkwRMMy9SBM6kn3MDWcNKGrCtUzE9UuDZFSv8",
  "key10": "63oesEZmV4XEiza8YFLgTpk638ssA2crXPwDDrdxnSK1Hya2higSGVLGTNpiBjdUastZJSDSWDsk5yZWK1bDcKvQ",
  "key11": "W5x18MGbTx3TDNvrmQ1pj14PRVDWRVBQV6nx8coWLwmoV2S85KsKQHEF8S3zcBCQRFVdHpzcZhAtJM8cNsXM5BB",
  "key12": "C3y2qrV3FSG9Kp5AReMBpoW8NdApsUz5MVGUQZ93mh7vjYXpTAmGeDorbvEJtaN6sJfdQ9wzMiaNp6Adc964dXg",
  "key13": "5ZvBEWcVc9tQG34AaKthtMgctjP5VaSRKgux2bsGUVsnyU9kdc5AiUySSiQ81cjDutiBDiUX9krPq9mJsrw4BXfd",
  "key14": "5d3Sop5nYK2EyNM46uDyToWW2C1ZS8EB4bt2Kkt8apUyHcdD62bq6gqsDABBji1ZBakSwA1GzV8wCRCfWFcxFP78",
  "key15": "5nBf4UPxWF1tCFf3317toKjeyxe6mrcfwow9HEsFzb5G9Xqb7CRd9vs67FDwhcy55TjYx85QwvsCSCfWmmkufWNb",
  "key16": "3wx5be3cvZBt8Ya4geYWQFUfY6Fv67DNHmyjhUMrs79esbEfepEwXKnaZiSLgSUi9oirtFzCuiXhMWHX6VoufmXC",
  "key17": "2ccurVbpNv5YhxNYp6XzH7v8DUpVySqcKhLgk6tDYnqG1Zjq41yfHfgFr7LQr9ZepexY22QJH4sWgAuN4hmJ9Xhr",
  "key18": "33Lv2kPc98GA4ZF6smLYx4Ej2EZQu91pBSR3YptviGG4E6fThzW79puWxDfprnwXKJouoAaL9XsimCwYJbTk3Wox",
  "key19": "3Xcg47Wyyiu1C8khno8abuMWPKgbmKWYr9d4YQHRM9uDfRKBkVWsLE4LftwuvLWiJvVoLjKwEP6CCxC35DZLLuKh",
  "key20": "33v5Ete8PoMqSWAJq9U6rCyKotmvi6aAmm8m3WJvYJfUAhbuNDvNf9qxYNaRc5U9Ryh5eRMU5eyBNHXeLpJnkfXr",
  "key21": "2gh6Vvd8Jd9p7R3tLnJDrdeHvvAcqvf54rZcKndaqKxqLg1nRLVWucSgj64P6mBCX3cuvabG8jSgVRu4U5HaQktb",
  "key22": "2PQL2FsRDtm73XfTcUtdrADkWwxKUBZTPBzKk88KW4TAfUKsX5S2E6jiZHexqM43T1kMmK9W3N1gq1A4oc5yvjDs",
  "key23": "2hANhweSAK9dRKXAizehgk7eSQQGtFSBqVvqphHWpxT8LJcU1BBGRbGRjc8Pehwiw9uwKxyd7DQvPHXD2CAe3Bx",
  "key24": "iWXsafyEVMq941szR48Ro1bKL5yePHu8ohExQswWUezpjKxzrZAEE9a7Qc3esGc4hW24EBZh8JAF5mwh5WxCiiV",
  "key25": "2x57RfaC23tjuxFdHfFyaEGFWzHfPThRmiD4QPpqDcR2hRnzv3YB66W6Fqu5Y4aCKrC3xiVPuHDV9639gdzuShgE",
  "key26": "2VQzSCHTuVHXpLdtshmstehc5n9RpBJTq1hswugLK2XZLXNUBxKwAMvxcv4bFvqQiXa1n3CBA9Syns1s8vkvrmB4",
  "key27": "jpLxMkvZwZ3sNTSv3t4VMeEat2t8GULymPTGirXWsxHbufngJAt11Q6a9evP7EzgEot3NSuAW89YWNKmRQ31MFm",
  "key28": "j5EkptdSEmXRewCbbiSQzxNquLEeCCj5MFCAcoQP6NKb4JPrzxtnpVPysp7oWZzbuX4r6zKZx7Kh9WMoYv3qwcP",
  "key29": "4sKaGELPsKp84C5pkkJxVqyki4GtpMJ7LE1WH4TGnuD6LgF6MUt1JvEvPdoGJsmzc5iP9x9whDH5G6dPC7cihuTe",
  "key30": "2goDznPNt57LZSzJWRaEx5xcLSuWEQLfa1VVN3JB1vADTvBbCTACsR1JRhV51DDyfmNxnmWR3WaWwDnfgM7TTWnL",
  "key31": "4Wx5RuaWSjdXdtt6Z3xkRYWUn3SiFcxVZpTCXPR8yQAMaiAoXZbz39qhyZKshC3Mys9wMa5z5q3dFJ4ngnNYnymo",
  "key32": "4fQD5rdTBivELyxNfYDTLfNSJ5bcDmB6wbnFybVSYu6p3Eto4vzmKMqkvDXZ486GKmLnhSgbmBXsg2jCpXhWByJu",
  "key33": "5dQTomMLGruvvST7vyLhYqcqVVYvC1Pnu7cM4jEFt5daksTGeYxqJwWXQSMAmCRP8mMNQ7EPPoxDPUoSKTpFDXk4",
  "key34": "2SvvNsqmgevqnN9f733VHfPRMi6MWp3Zk1XMryYcs24eB4Vie5qy4oMqmeUvSLmJZchRi9ioCXfNH8edCfJ38jMY"
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
