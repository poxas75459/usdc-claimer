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
    "jF5uN8LbbrbrSAQTsskfnb6kRbKhCKQSYedDWBQAvCdGp3UBR7v9n4tEFBrTYfzjtwfLRjRaHMiPJgwYUpw4ZE3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9LQrLoabbGfh6nU4LE9E5gDqzmLCBfULCMLSCiZoZMEiqLw4aJHhgaxbYDFTZnymK2eHiCJUX5h2CVUTGm8hPe6",
  "key1": "NPmUwNFKrikKnVSbRso2w3B35t3rVHvG4cMZmRzRSXsHhc6qmhJtCiFnFJUsPmpGVHvvcrpaXFnW9d1KsKLonF8",
  "key2": "3FrUe1qdUBTQduZ2fL6nmSRfHQ9Q5S7e4PKTejcM1ZYkbh2Z7ox8GEQ46AyUsxHWKBgZzfNNzPY1hfbRyaFjhXR6",
  "key3": "3rKxAPxQE2vQYENRvF2RnFAeBW1v8Bsv2g9V9HaDT94q5z8qjwX95v2obTFycWqydkEfa6WcZWW87bYxmq2gTSgD",
  "key4": "5MZ3nLzyCp2Jz97s7gzyCvHEkHnYmp8fYrgDafFAn9R6Wyrk62PmVQCRvHJE6Ey927bNLUh9kPQuPdhbCy68RRbq",
  "key5": "5pZeP8ZrjP9YpRoNQx6S1YiSc9GnpD5k1VvYTv8M9haRXnTWV6G3XMzAV65TsDCt2QrfrjSy2WSnyDQdVx5mx5Y8",
  "key6": "4JwTAsvXUQ97oE4Snc3agZzAutkupiAQsMTzd6bza5khkrMaQ8uvrndCnygcQkuVDCZVWaZQgKqdJwZaTDKhq8Kb",
  "key7": "YnXXW2p67Xas2nvgyxNpCUjzTW6WrtYM81UMso6p7czi4bvvWPvqvLH8DEKQUJxoNQXukXvEuFwDHCrmNBryxpi",
  "key8": "31SDX4FgSGp5nVJpJsXiZ9o7HqcpMzgf8ydvYK6LouCaqrJG6pZwFdkTKbP6arFt5nWbn41Fn34bQztuMLCxfFoQ",
  "key9": "N5JJgdrPVt8GxxkrAL3J4hLWMgXxVfL7vgKYu6AziYoqwdquuFceEQwDBbnKeRReSLQvuzQTbsb5DWU1FgKBH5M",
  "key10": "2fCCMtTn6V45eJrcFwB35MzkqGGiuWT9LudoV2f35puQdFqpB9RtSKTRGZVQceEavGUzzSiMTLf65NBQZFfmzsLN",
  "key11": "44izi7hpRRtSzxfGjMgAZy9npr3UZtBctRNCabNkP2pgKSwWo3xQVz9h2J2Hh9tnyAAYaWzSZqzdCQEwHXVdmTLb",
  "key12": "2rENv3yARmDM6hWd8fi1X6JjAshfShGuFmwQH1mtwxqp7hJGpFzrnEWE8eLy8EA7eRh6daca3kwucFaiQXosc5t5",
  "key13": "4DygbEbtbLmubViQT7rxzr6Rhx5TWyYqUaSv5HMEaEQZrwS1EFMmMZvPTvN7kuR7X2e4TNnYWPdwjyabuzNBdY4t",
  "key14": "YGVG8yntNpx8HvQG3DJqNXvmQxnNacfiPQsaKeym6vFyTQp581KCLVYrQo2S6XeMjRRqMFRJGEtAaxvBBxWdHdM",
  "key15": "6hABA3NrZdtRGHxQbfUb4K4CUzjoeFL4B9QM5osNVqaytcS7nmtbVc9C4dLwgsZdj5uaE4yyZ6cfm3ZfYXdFw9x",
  "key16": "3t95MVLYbtudH16qiyBV8oCdWSqgKffLd6MLPgEaMuYufarKPSWRA3wVRYWytUyU1iYjSN2BaTutG1HVYw1HLitg",
  "key17": "4CHqHFFXDs8iGJzdm9HMPqSv3Q8tiUSNmnkk8VRo5sf72Pm9WZY8C2JEDG8draBu3LvUyuSrGPXgGh9ka3XyvF81",
  "key18": "4ESYSz4dHt9KX47eroWKv2KvTnpyCyqnX9SpvHziN81qLXBriZrUmKQvLFidThhmhpSN5dFnBJbmJX7TQwc8jXin",
  "key19": "3ie8M2cjwtVV7CRG4K5PxpvgkAt3ZnHpfweLJu5tYW8W5qkbffocF1hqpFUVwh4ZWQfy2eUdkVtUXfiRpq1RvMcj",
  "key20": "58Xjmpgmhzzj6ES3wVGhhJcjEdU3sknBD66uGMdBeFETDwGvusP3VsTniHZdxZ3deKHpmhRmVaxNoerVxn7d2M2b",
  "key21": "4K8oQrNkbav9QWt41Pw8gzmuubqyo4oym238Jpaf5UwCikt7tLENmjypZWY8pB2CxA2EoCGnREZk29MbE62MdTLw",
  "key22": "28v8onXmNZtgqqCD7bCgzvDPFPJ5M3q44PqM9Ehu7Prw6RDu8kE5L9PVWB8sipqsRFCd9uoDkGaiZX7cZxBkc6wi",
  "key23": "3geoTGNEmY5nbH7iNPUzU1avj4w5tUuCcvvucQQ3KCrjvUBptqrVftitNVhZx3xGxfewSTDSYUNutQTHb1vEVNxY",
  "key24": "3iYQaczAVHXVgsChk21xsUPgWMf5FGNdwb4gKEpb7dbDvk6uYbU6wzaByDAacw9Rt5hnFCv1zE8Pp8YEryknJW3V",
  "key25": "2EgZ7p1XcoESBEeHHnp3DynaaZ3ZFM3HfVMYfK9jzzpiHgMSRQduZZVmZaeSztcXiiXb5gjDijtPmFnZcwapFpfP",
  "key26": "49DRrySrMvzY2bPDggwFRMqVka6SNWVVWFF31PgX9ustc8z5usiQBbmiJazVdVqNGtKy2uFxZXPG5DCmxCmMamUD",
  "key27": "C7gqEBKikwsaoF9xAYQatsjLHuN4Hp1fPwjDEkZHh6Zb3DhWNhUaJN9LqfoBdjJJjh554yei2mgCb7QCP8BeRAm",
  "key28": "3CT2MryaSex8bedU6cXUwK6ae4WJvkvMXw28GwXtJQ9k98bgKFHUvh8nNzaKxGgzviWPiq1GoG4gTj2P8dFacq4S",
  "key29": "2LL6JnennuG4vviKGqahctWyVsUeGHnWsy4Vy5HXW1t8QmogqiKFhmw1VYytqNCckhvfwvVjUdt5Av9bWqnf5zyP",
  "key30": "2DEyBkRHVzs6kH3y18HkHimVyLSW4CY6nABrkEgaft2QLdcdwSbpj8qymFGeTof9xmMxm6ni684pFTX5rWXGq3kB",
  "key31": "3JwrWMhQrYNUDaqPtn52ZxuXwbmg8QAoHS4AUZQ1zAnsQwzWCU8UnECaLMxUfGbF5CQ98VWMbZtg5UQBxDUw5HUP",
  "key32": "4ix4G7XjBjJ1uLnyPuXodTgvwisqwoe9YvV2p1A3qLunMJK3JAtqJjeaTCWWJc23TLxU3Gz7VwCd3tEwmU3kmyet",
  "key33": "3EFLiBz3vyuqxbZdzE4wheWxdb5KqsDer2hFp53MZVNZrP8mGtMUPveTrGPav4bXdnUVg7JY7ohQgX3LjE3jjJ2P",
  "key34": "5rgbJL4XBjRoFdZfiimAtVMt8kKNpbgDXM3nJzyPkx8enGxPQLfkjz26NKCH6adoccyJjjg2p4jA7ABNUjHj1Yui",
  "key35": "4fRSnSu14koQkvXdADWpi7mnrNS6H6Dk1KNP6KxG9LwvXm2A3gFdfXSMsY1g2FRqhSoGZeHdoL3hfZSibh6xNHWW",
  "key36": "4w14WaqDfWWFfBmx8dzthc9rFDkmpCq4JHHLhNh3GhQY6sbzB2r27ECQdySFGLSttGFXyxtAendzDLbGkxkaJKd2",
  "key37": "46fvZg2stLRYt8de7p23E14hmeUiWG2zTijnvMzCwSRk4Szr434ukma1tYBpvf9MhkTEtbGgqno9Agidzm1A2zZA",
  "key38": "5EBnsoBAhkwCoths6PQN7649PUrRr8DqZM6AUYYuffqqBvzP45bdxNuioKD5Bd6c3KUNXRGtb1XaSWjwr4GGnrQ",
  "key39": "67mxPqxBkMjPMrFoex7ji5wUe4gBZvj9SkiJ9BHk8NxatHnJPSPVtY6uArdvFSJ8yeQFTcWUCeNqAdYjtt7vCmda",
  "key40": "62fL7Pkc7tQhAruDXGuTwj4XPYNWoKNiiUCA4NWy2xZestjdnqqfxN7Y7GASNsVTSChibZRdcua54PBJaLDch9K3"
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
