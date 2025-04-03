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
    "3ocxc8R3STBuBpk4SFMQVTum5kQfDbXUnNfKnEGknHS4pXwR6AhRtC9fDEMErFdDFJ424pQRVMagwEQmqmRFRZJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47crmCWq24MGaQYFj5BgnRoHhKigXfgtpDhtWvbD3KzF1rtdzjoLyGtFQXXnojegkqZFaNVrJDj3e3RxDLvpe22b",
  "key1": "RGQevNACzKe9ykBgcaufrrPQzbD6Vdy9apvJ7UtPjKk1b8G5eMP9y9BPp6GF91nqTP6mFWpwAmpnnxPZKritWH8",
  "key2": "2nvBWYycPVU2ZyExeS4BHCFz4f2yj1XPeTu6W18nXRcNif2mHbCmCcWBD45bAnZZ84L4RybLdHGYUJhL1XBsrXYR",
  "key3": "6QCPzsMvgihofa6NzHpFD7ZKnEYdNM3CokqNnp5SKnY2rffpA5TdqfpdsjmBPFdqUVtfJYV7SSZJ6wPnCBFmn6z",
  "key4": "3UYttPnwPT8VtuSf1FsiabuYi3C4E2BSb2WouuEBNjf3gD1oh6cCzq8oW3AkviJpbNWq3LM9MhdgnQQLmCo43B5",
  "key5": "2FUidqsZjiZfFbNVFXut6thBug2t6TYVXUQ9mP23LeYdcKeWtyhuL9ZmiTFtBGMQECAbntVCDzHo6LPxcZsfJw32",
  "key6": "5vhnodWYUbyRZq9oi7jAxSYDhq6yXVjSbAt3dysiqAwDM7xAeWZ5tUYXsEK2C2MyPLVRhAbVvFy75yupgCcyzkxG",
  "key7": "2CU66Uk37JaW3kGVTkpFBMscpUw6tr2A9kskLxYWJ1WdRsZ9jrEYPPTda9VZN8zyr1L33ZzxSDrPwK8zs2dmczP1",
  "key8": "PDHrUYe6DXdgE5mkCMJSxksUo5WfZNFTcxiUiHh647CdU3Zyjj1Z62fmrmMjaEMHfJHeQGyXeiP3gkQs4qNg5c3",
  "key9": "4vBsTrnccDQxNRvzvriPknurHgPfD3kLCeptXwMEq3zK6qR2upRk554o9pgmVijMkFPE3pSLZVSGFGUoptERcbeq",
  "key10": "6BETfQYoxfZ4zrV66AEEKeYGXvS3kBf4SkKqFtsVXdsHexjvi84HHyerJRnDsKpjLH4LaXDKWEHNX4ZkTHQqA52",
  "key11": "4dQrmnCpo6iZZsvhLN1AL2HRRr1cr9972idjb9fKf3WhX9deBKmFjjn3jJDqmgfZAP4w72zA1VtJXgmcrdnuEniY",
  "key12": "2qjupaqg35XCqDbR76nfZmwRm7oSoYF6NPXmVkT2LWkcW9EjBnz88qFczzZ5R8Fn28vg1P7QRYbPsr8GBX5pBhsk",
  "key13": "9nTMTdv4Yf263c6fcPkdyGUiSE5vyCKmwsd2M3rR75XnCmPwBFMcZweExxFPGbGH9hLwvuD6ETkCnef6fioh2Q5",
  "key14": "63aNYJwXB7vzZTXzDgJ468SLZNFQBnBqzghFnoDRzX6CXdzUQtsToJNFWYq4t7LCdksXSHNckN6FB1h1BYMcy89x",
  "key15": "3d8XQDjiWMf6UxUX6TJHJcHTQKKSCxP9Gy8EYM7eV7hnFsZBaTMo2BJMQp3qLMqDPeaotx3Xk7Q2LHb2bU6W9nee",
  "key16": "3LYzTGB9kDfKqF9FZGtMQbZQzB4VCJwxXAqX7BBV1sEE3qk4GnLyiABek11wBBLRndBSrfTD3oFo59BJjkzKQeqK",
  "key17": "3PY2Ts6MTCearVygTzh22fH3qBCdv7vhiahi7P2aNvAqKvtMQgdnXYyTkqLBjxN1VFL64QcUci7BbFtrvTedA7TX",
  "key18": "5n77CvK2bPijNQn3Jsp5Zb6X7EaeEuGSz2P5cGRnedNsPvMTDWCrZjyEQjMZfjj5pG7ZUaTb9Cm6N9NYtSao2zcS",
  "key19": "4wdtE6ZT9D39BKY4XerGexPmjdgpr6su4Yo6b91D5GCucjXjsiTVFT1BugLW8ADD5HFfbm5r8QG4SKPyow5wA1U5",
  "key20": "3XDarb1WyQKz6jy3Z3Mn2SC9R29uTGmQpZg3x66SMCH3GTBBivesiQAxQ6N9tm84czqcm9AJvvCZStGefsb7vyZk",
  "key21": "4rVaJ2HM2Fk4YwDJJ42Z2EqhvDWe1rnxf4KovaG4e33NxpLcV9jpX57qgvfeMJnH9XmpHgYQqH4zEGXGPNJYnCuz",
  "key22": "2XQQ2uQG2A9Wz8SZPgap9KYbe1ZCCrDswqYBGCigNXUbqBEk8bwHyV991XdqxhQYc8w9TsW6D1qHMwuAFr5odaCC",
  "key23": "aieAKQHReDMj8wtQ2GCRFx2V68AVkNv6QGBgtLAx3gPRyypSh8xjUPvnaTAMADpgaFgZempJdeytKtevFBmHF5n",
  "key24": "7sJm7LgPKHLeGXuaSASk4wYBtTXWRT7hV92rWbBr41rVXTiVy2Y2KgKjNkRrfTPNp2oB9FYcbty2Stibpgwq3eK",
  "key25": "S3J1Eh6qsKC8hnwB6jhk2nNkzoj3gpn51ztxCLkgyAPmaAACC9edp1iqtde3gpFnxaTGecFM2hPZ3DWBjiNqyPS",
  "key26": "UZ2vwHafxSCpdtfqpnfu2EBWPqZvb6XFrxCsxBv1EhJAQC2zj4rMaR2Qr9DaFsrG6vCTZcBHmJc4xx53uwyFW6Q",
  "key27": "2TSB1MGMj5hpU6WNZKQsVv8V5FAx3fPah7m3ebjkR5heBpQKSTpZPDhB1E4KU9MGqBFo2AXMk154fEMxG44jtqTV"
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
