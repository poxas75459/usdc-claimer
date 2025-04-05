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
    "3p354p4mcnjhFW3b5Wf8WjGWowyCfyUUhfwvu8MwWq2jkTwWSjSKpAWpkS2XTrKgE1dHEQvQWaZHF3fN2a7X7toG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YGN35LbtUvm1fWPzAcR81GDUCr4vegTizCZUCFH7yoavmrnq536yzjnG1FxT83XkpUXszssnC99bJSCXXshZLui",
  "key1": "2qos59kmo7GhK6yDZDH1YbVgR3pkBGT4Z4Zjt4Psby49qYkh6MJj3qqxVjacn4pY1SAfmG6YPRaC5iPYetHXrhu3",
  "key2": "43d8x5yBTzJUPMcwpx6vvztoWtpmmG47i7HmjcyRWQhkzi52TcZCXAtjTNkRxfYVHFB74VoBYhPLMK4FY3KwE222",
  "key3": "KwvY2dZxwTuKwQ144kjYYjchBqeTBRoa6XBfK2DcmfVLLK3Qn6te51aSW1ebfYHbPthHEn36kS97rDbufbewiRM",
  "key4": "527gcpF9jQoWUFMDsLBye5BfqwE9YcgiSZ5Svz6q54nqCgdX7KhAFvCiN8XkdySxLKABaQXYmDTirrZvV4MKmsnK",
  "key5": "4y2xVjNhxNWxvhvPfTos8F6YMHYGCvSxdvv2ZKNdn9AgcjCSGvYwow2jSWhoFtERpJncuPGwaXkfwADPNtz8BU6G",
  "key6": "ktbivbbjo92d5M4dqf6QgVkuoDwmjn4KCDwdm72gvGpYDzeBbjMuHZUH9Qoeo1MCvdL6SEv8caTZ8GMP9fXQ8UP",
  "key7": "4i1xKNqqtug2hhrNdQ7bpAT7BohdkBkaJNuUwLvcbVZjWPWswWhfjjDuFsMBCmNgZkMxMsZbxu6C56yxDQHyHnZu",
  "key8": "5PHdR5EN9iLcLGpdibK6Hbfdd94V2QXbRniGKq3TffBDMwW2dR33LkhWomJGxzH9j2WXSZB9FQyiM6ZgZwqkrzEb",
  "key9": "2twYGzK5c9pzWKURMRhfGUhtrSn7Q2sd6MLKqPynFYRQZH3FX8xuweRzKDxZdbnMju17nsjTA65QjHW7nC5Fyrgs",
  "key10": "2azzJ3ME5PFnJ1y1bqxL6gFsYcwRRyWjg8kLknukxK5xCCN94i3hQ9cqumGp25m5eQsYkkQxsyJZEvK22jaTBaHS",
  "key11": "5LsiCoXkdzoMrJX4zd4GsZr5VUxYxQkswXYDAXEZx7tTexDDcbisWTPnZKzhSBau7QbUpi8BjYDFKg9sZMhXQ81U",
  "key12": "vkH713EzsqF5bUzhBb8SCWF15YTfDCBsqCFiAPpc4EMDE8VDpJvpTCURzupCv4N9VT4J4A7vRjXVTfivFh7jt8P",
  "key13": "2zuzyjDRJw1Hbofma8dcqekvNXDMmmDZQhdS5cMofaQTsE37ov2Qz6wU28ogpEF4yXPXDuRU54WtoEUPmBadAbjy",
  "key14": "5R7tp8s2YArSicrjaf2PAuJqVyqqW97eMShCp9PVyv9gGYBSfXhKAq6NjP59bdPgR986GW3utC1a3qGUpp3BvzK7",
  "key15": "3ko7txbycRP14dYEAvx2VTdBUq8Bd1XAbTDnxF2nQKbeiJhQ5oyrrwfTKKRpMqki6Awjqw43Xrt6WYV4YgNcZa3a",
  "key16": "3K36reCH3QuuZwDkaxNXt9ifwcTYinyiKfjc6SBdE5JWpc2exMELsF5u3uNNxThxkRbZ4iYbyA6m5u2kxbNQEym1",
  "key17": "47e2FXtLyiMoKBnGqyraB3iURLq3tmkooF6scULs61i6Kdf9WZoi3hXFe8VspJVDGyyr25xjeC3jLraBDVzN1hGb",
  "key18": "3CnVM9ivhv29Tt3s7SUWNK9cG3uqDZ7K3aqVKYEvnbyp5PhSYpYYwAacEo2hyqt4GJkPrLyjtPzpYJNYKTKSV4HQ",
  "key19": "jWwhngL9da9uR72xJrHJoqM8g7DFmRFD1a9GU159xNb5TLCdSrLr4qVrMNUev7gRuNXjbuLbtnwWnhiTcEC49rg",
  "key20": "kMofY3NUC8CUKPJb2DhFVV2iWFn7w9ayBiV1KZjYcyRk2ET6r247Xgw2sDF1XAXT2ea8A4YhfKqxtGzKV8CU57k",
  "key21": "4Q1SgKYfpsgazKwBEJDQJahzKfnpGC6LNFaZ8cLy5y6ugtNTpcZiRhYbFhDLvjLws8iBzVDrT5jDerXVxMYuATnK",
  "key22": "61i7wYB6bf65pKK5aRnu49tBGDnb9jjPSPWt4FHgW4AmyYLSbBmLcwo4dKLMXJLb47YE9MufV67AUzHPPwyHUnH9",
  "key23": "3ZDxkossMm5ytx87SZET3H4v2JVGRr95CAoM3FXyYhsvNmxnWszwbNg8e54d2kHmt3bQaZdS9UpsxjpqabBgXYyu",
  "key24": "3VSJZ6qpzypxFHvAcVQGriUmervvxToq5c5rzxkjTwiEEVhkTuGzujWdqtwxwYWhXqBJW5QChZr78S8fmZf28haD",
  "key25": "2UdGvBJdERq3zwS2bvyF8A3atZmCuw14pepgXMfAUUQmeVzrqad7ZHXtPhUfWiRPnxTveVSD97xFo6uVXwzfiuhw",
  "key26": "39NqhvxkmwE4bW3hHEu4gNVGQN3JuKRM1w7qnHTJxwho9Nfca2GhjbtBT6ari6wxZmtCeQhZbPJ9tZU5kEHR4mvZ",
  "key27": "3PYvTXUy91V7KrFLHHVG2RiFqXMjzQ8ZeutAj3mRH339xebpAcax2jGAv2BSxPLpKRnmV5rFLXjQXGD9Y9pSRVsD",
  "key28": "5Gg2E2HczJHhijtSkTusoVUfx316YTaNYjd2ajwj9MW7kRV8Ud2poWNayghc53DF84PS8N9YY4FiohVjUpRtzJTd",
  "key29": "3mDS8f1izzY1N5NSDFEpHkiRNHkPaiCDjAuusCdVUNErV41LbbXNTEsS9EYM746e997nMbHagt7WofwPaWbs3XeV",
  "key30": "3Lp8HiCh14PQAPZSmHW1389UXQrUb2nfrXVA7B71wCxbuVc24hRfs9faEjLSwW34Wuh3EifdvJ399zo4GfF4JCMJ",
  "key31": "URwTwQoLy7nkyS1oCTj8P8t3sWUFA2Xh6H5mG5HmYSenCdcstDbT9nkiAC5eYj1gixkFzBy4JxNd2XmDYdQaPNC",
  "key32": "2TcQ2CrEWupEP1m7paoTWqKwu1QYRCvaiKpkDWBnNsiPzEE7R67BdsABMiFpJgjJ7qyKZG536wkaDM7BkQDpn956",
  "key33": "LvYDNahnJj9SJmFrPGWh5xZwKpdCCF9MwM5JoBEQH21eKWC6aRUW86rrVtri48oNFRE5gEEmxrGp4nzYPBgi2cA",
  "key34": "5RFys79bVV3Sr7JB5tXkuNXaQKNAu7h5nvxyAQbehGJ1brqxkcTCBQnbhnb92vYPQXr9Ps7McLiVWraDK7rcCWqd",
  "key35": "wtjBBL8GWGxjyuxU7xkvXtzdavQiEEeTpQH7ySYFFS6fciyoLKuSocbRQ7vPkJP4iKo6NhPAewNXWTjPSJ4rEBY",
  "key36": "2apMRmCn8rSPeAZzfeqcDyDXxfedkkkb26Yc4QotYJ8aTEzYjSC8r2ARFBHwbPHomvjF26Hya2bK85hxmkhYfsMt",
  "key37": "3qLa4kryLNwZtHMRCdSFq2P36XgbSdYpSCddv1YdRozGmWizAurKzWRPNsBnHNVamg4Ym6g1N4g7PHhEhzE2eXk6"
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
