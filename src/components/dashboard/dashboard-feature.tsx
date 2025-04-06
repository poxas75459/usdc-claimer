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
    "3LAwC5eeoJVuiDRXwtEAc2Yy3CQBTYEuHgHrq7PbdpsbDYM4HfDnX52Hpa18rYi6uHdTk4cEAqupyZVH1NCWvVrh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59jsYJEtkd8i1jdRk7AougZeaYgghUSdcZbGK9NdRj6Zum38NEmEQ5T5FKSCdWXiH5vGsMYrRLaHtwUCyaeS7Tt8",
  "key1": "64iwfg1cgGMpzDVozz1QsDaQeygfk74t88Zi5n23gzG84y47WJNnVG3wSufVTCrctCmD6LN7L2C9miz3GpTGo482",
  "key2": "XaahcqGECayCWTK5VQ5UoCeqzkaU4oUiK1t9esxipFNKhXWnurUw11E1usepvpCYwLdbKmDWuDP83cXxDT7ZyT5",
  "key3": "5az74fFmtpkwLSktwCXTKP1WSya4GBPkWRecNMDTYCNTnQtLXaZWS6giNCFrqQo6Q9UyuwpQe2V9cqnvSGTKus31",
  "key4": "2jtXEMwqXojgAx9xahVDjAc9sUJ8xmGDLxRimeSdZ5X6GKKfPcwfvgYjD8sGU6N646mS9zzXDovTE4icyeHewWv3",
  "key5": "2EWB4QNXQtX2HJH7bt33QhJkVoZELm56oc2Xjx16tymXj8nyHfqFsChFgcg5zh8jMw99TVgQKQVw1u8HdvdQXXSp",
  "key6": "5r5AJittNoSLa5Fzz82x4tu5LnfvwgPDsndu8Pvu2eXz8r2azXaomign8uxSRLt3bWqbRWugGLt7UT8jUdvqextu",
  "key7": "2JkGG9C5BhdJZSkDkD9SpCqk3EYaMiizWKhJHhAWQL7FQ1L7wUo52hheDNm4r43Ut2XxaUoV9MtiAcXAGeMc5yvp",
  "key8": "2JjcLqnaUibeaUAbAc62GQNxpsyUbm41iA4Z6uLVQ57m6nV5yBAp1KcmyCAutwNsEYcpwT3G8aXtzm5xru9tabKP",
  "key9": "4DZ52soNUxH71848t62RpDdSJPMNuKZTrT4rvNn5u9KpW4NfqWsqHdM94AGB4wYSsFAvG7Zid7uCAeN8JXupNARF",
  "key10": "58GQ6EshamYbUx4HKqjedxRRLpCC6DkPczjxEJMERVDveYsnhtXwNCDEPmFsazd6XsNt5SH63X3CHtJwepjB15pG",
  "key11": "45iLDLmFSYe3z8oUCM9cniYauxkg2bmr2CXr8uPmbQSe9o7KVTfezyMxSyZb42cqJpkra2jMxofegXsk1RyeJpK9",
  "key12": "5LmsfkKyLQm9CTNXA1XK2Prb6v9sEx4RKJFRovX7T2fpA4RX3Tp77P5kjp94mzLDwRVLBayxPZF4DZLpkxrG8Grw",
  "key13": "5XRkaMD3JhGXC315JyjqFsQCpmySsSkbj8mBAf4Nsn3nvbtjenXqx1e6DzMzgJLgZHYxmfTiNSE83yW6CtNTnjjs",
  "key14": "3gTxn18LZy5Bv5y2k8BwLdBFuHxHtvte32f7R8Dpye4ZxccCQsQnxUT3oEf5ESrmpZBVfQxK7H2mKUtNRXZUhoDa",
  "key15": "CFfPmAnUYR69xhktx2cs2KMUg4pASLnBk6jYroLkYLcttPJgouEnyNHzFAnfA14h5UZiVbNWcoe8WnBDMjLCHmg",
  "key16": "5JL9S5wzUGxKgdJ47dyYTKaU1E5HgVoQPxmsZSbndraoSxXdu7gLgDUoyrArHXmKvFT6Ha12QFHyuozCYW6N9Q3R",
  "key17": "4JsUMjsU168E14i42Xt8rAY2ocsJVtMLFtqdXXQDTRguUqas1YuZE3eFJnoZgXamWzayvfuNxbBZTqjySU6hFcJZ",
  "key18": "4rcWy2dJFS24W4cy9Qj48oKyS2yRdxBaDyuTHuGmxUrin8mbnyQFMtRjjwRBKz2MceeZvy5nZgtB9MehkR4rMWkM",
  "key19": "4P2SemoJDQSqF12Fu2doCbF2dghwoz2mzBsXBNMD5cHSDGVqe734QCY9ygxwVwFEFF86bv7vk2yNoMT9RgNSNqrB",
  "key20": "FHYRqwVY4DokEcUqUXwWiQAit2zHQBnapYkQFGQJYzmAJjD5omrsMYRpoirHEVTygcV3zeobv49VCKf8ZsWDK3q",
  "key21": "2McBb5pLgXJ54h3qUCWcrNeQskNLJgBtuQRFdHDWB9wji3kTCSr2CCbCHbkvShERiUBjC2YdgADbUS2RzQZaXLMr",
  "key22": "Ld3Tqbur7edBDJmdj6So4JCvAAv9bCbWw2oxUeK6NS6SSWQuT93hrtPGQ8qNuRHBu4uspVnG8Sevd3FUA8JxiFn",
  "key23": "27LduqUYCUaz8aiixZ6MQg4wm2pTA9scTjDnxEuMiTL4HLxVCRLoiTebiXubQGMHTkZgeTSdnDCnVpkhydL9LPW7",
  "key24": "3nFss6YLr7VCHBRwch3yTs6VGQgLjPZvCwYi5BQuzxoYpov6fHc6QHMj2WMN4BNrJGyDiczFx5qyV2vanVWkbr5k",
  "key25": "5fap2ynXGukBErWZoqxzMCrD6yim4yYPrfcb8XhdFFY8uteBpjpqvwnFbg33bt9nAMDZsAhtpLNV9MDa7aFMjhTQ",
  "key26": "221zAX4FA665wijb42DKgiK8j2NjJafmiXEoo3RwdR4NX9SN6EbyNfktdAheHzffdSTu5WcppBNAwPD3z4CUxCgQ",
  "key27": "3i1WzqugiZupeAFg6VxeFw6fpEXESf4chvwwuMJ6shRVLgZodLPoorg45wjoHaqLrmqjnTA4p5whZgnyx8t8nPv3",
  "key28": "38jWo21JSLWSxv3qB3jQSx9yj1wZKkCbcsW8Sfj467ntntvhju5tLhDgEZHK1zHjzxq5gf1KYCHsXy8BgXyMbYHV",
  "key29": "3tszMKt4UAyVNPShKqpfV7f9NgKmLTs3VZPwALvTyAMtTPzfXWVNwFTvaYAFPBiFKgbF9N8new2FBUCweKRdbQG9",
  "key30": "3pyvH8dFsGmo8EcatRenmYm8ocrPkPx17HPn9xCeVxDZc1eWjBPxwKhAQgMDhAhyhaA38p2cKSi3rmBmWPsMbhKw",
  "key31": "3JQRrcNH3LYh7kUFuZ8cYyJvEkwg4ogpEp7AzDZ62bekvkYVzx6KuV53zgMxm1KKVjL4v4B4CHbyRs9BYZTBjUcH",
  "key32": "5DM2C6rosypq4tk2WxSQDL8sLFJoxXodSaPGYKRjgzFcq3dNij67gGMSEEEmq4jDet6umFdXbbUyjnYsyVCWzwGz"
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
