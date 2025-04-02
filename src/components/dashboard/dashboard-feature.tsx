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
    "Hu5CkqvXE2tpLuo31EUiJP1n352tqDNRwuqXfqFpRWtxxk9ap2Ch956BnyVavCPsXGveyXubT7kpNdLNczAn6DJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jmfpp5kWhj1HCrWUFQAwCdQoar46LBWjwryHQAan2uD1W4j2cHa2FgYYhZhfUqGVtwP7PxUZ2xPqmLB3JXuS3sX",
  "key1": "fM678KgfNpWFXfpfMKz37xyfkcAHM5obFFZqLQWz2mMhbVwEYzbbhqmZfjDqsMjQ5KFBvMT1LHwBN3ZSvSfJdjv",
  "key2": "5j57HyjVgUZd9QCPP6eKjmbT97wapNyLijUFuYowwQo4dztpEW1MJeSGtXn9mUj8r8gQMMvHMVVk9xSK3d7fXT57",
  "key3": "62heyAU2Z5gKepVjyEDJDhK2dqrjyy2rsHr3VHfQsBqpL1mQbg21HsHxKPm52C21dSt2SVm1vU8h4tqm6gwWPyJQ",
  "key4": "27dP5aFDaY6pzfW5sVLdZ18CNMDkGMqoGDQFRDr6FJaoYKyGvErSXSjjtYRe7hKFohM1ochHn2eK9UhiHh49g4mt",
  "key5": "5NDw8iCWPjnciMLXaGHnZKakFFsFc3498iYKcbbtFF5jRsfuxKcpxogDKU99CW5L5jBhcJgB27Zh4doqxZzcGYgq",
  "key6": "27rAPKCuAwKw9NtCT3snaT47yFKqKjJqu2Bvck7qm7prJZdtvnxwYhA7E4LA8VkhwPZFzcKPLtJ4vkLKhK6mcLkh",
  "key7": "5xqZjXGBreJphY6mJVdQeQHZXqpVu6VsbDgFRw9Qg2Hw9KdnnQJdBn6PjvsBYZec22C9pPKQ3UskLr9M4VvNHFZ1",
  "key8": "3UHbLAh75oAh2eRBFq9GfieCFmADahzdjh3mvre4R1SXhFPbM124JVa47p425Ler6RMvJxwUyGU3L8fbSbRhjt3m",
  "key9": "2d9pBnheLBkru8z5t13Y7i45MYqcExkT8fn9aKHRziMzhT6cW6iAfMVNSrtGjyAk5kQfRmoUAmB2NwD3xkUjQAnX",
  "key10": "3CSLHJ7kZACXwrqdhALiAfry4HSjZXa6MARbVcx1xQgu87ncViyRAvvC2ugYcj4dicTZTb27nNfoL9HXeDN7ion8",
  "key11": "4mNYThPjoefqTJUDkYWpvCfcz9GKt9q2RmqVovLvf7ABCjxAwhLJLJvqtWqNjaUGFbGyyyNrmZmme4Jjxt913YeF",
  "key12": "3Qcpb4qGr7mAM3S4tNdfFA29Sq4WtuGc79uvKhyVMZF6TQ8f4FMQr9oG3D81VWLZY7oRv7fHxgxU3XXfQTTngpRH",
  "key13": "4UdQ5jKyAvLxBMqVgT3UBV2hcaYdyL8r7uvVJZ1vd5eyZa6GUZYaNeyosdSa19Pkhkq59NiM17L1w7VaWCMj27gJ",
  "key14": "LetkUxJvH6hXnUUe14R1zd8dTtijT57i1jJcn4MhpNcgYRW2r2VkBT3yHSM9db1DorJCH5M6sCZZXpYANePXjMH",
  "key15": "4UvKeVDx7D2E3uyA56amTpfSL3eKzsxYA1vAfm5huCjZy1EkFQwrrHtvn7fPVSLsiKBn2AEgJEM3K8YFzVDi7Stk",
  "key16": "LZrifAEnhHTquk6bzV1h51a514xrBUUogHXTMenBDEAZz7L2XwqXCFvp6vgPnNBome8vutNZDEwmnXzVkiLnrAg",
  "key17": "5vJ9yoBJ2mjmXoDZtR8oFWiUYuJaVPDd3DmaLcrodohtfmtyRRsHcHLCeyJoWkncuBu4N9bPUbemGfUX3pD2saMu",
  "key18": "2FwhkdTJDwR7MxsYBtHsvx7DjEDRATTAoT18TRQGmgT6TF7o6KRwyjmkPy6TpEykEtquqfrAeRouQDbqsD914NHX",
  "key19": "3ZQBWwB21ktkccpmkCwvnZBrrymucymydMP4PsywHENJy85uNeY9TchKvTbxkMfvZVt2ixKUHw9WeH414HaQBegY",
  "key20": "5HqUuWzjU1NQxDaYYMm7fFeBqPEFAxeVwwA3Qtyzpk1ftqxCxNmA2JnPVRv8JSSdEG2kr8xnncGQRCABcFk3ehxS",
  "key21": "3NebSof2NZTzNprehtfTSnaarZUHaDFda1cHryCB1ffY2Sm6rkBV1p6bjvj9zFVusNPzumpvhCtHh8p2ae46bztr",
  "key22": "2oPnHP9MkepNDjBceAXknvhcJgXcfpLQKMFTxfb4DSrAW7xq6Sw12ERzSe3iijanGjr1fx7g2bvyFp1b5Jc3Bq6L",
  "key23": "3evuxhyqe2xgZupyLZzj12E7JwtcXgSBEA3mJquwC3q3btSNkNYc7mTV4nqTLXkFkoKmjBtosEoH8U6iWzsQQbo5",
  "key24": "4aHdbM8qN5Qr9EgHuPVkQUsFxGndWxzSpji2EF8yvZ57F4bWuwNDcfhHjoNjwFKtNtuWrYTQGnsWNg4j56yzmHfm",
  "key25": "4ZSLb9wdmC6BtR81zGo5oFUJSuhbVM7jZ6YauFR8w6xuhBCytfWeTeZXVk4L5SWWzjpuNmVbkRXSUajideUdPro2",
  "key26": "5KxVEou84UmK818APQD1NU8KPiNVBCgBHPa1rAwWcwBjoiTnPe3AfPCe2PNCgJRAuBm1tWnF9No7ydFPAAM7M5Ba",
  "key27": "127nehB9KCYxtkJAHa5nA7NEHE5oCwR7GBJ76g2ZderEDBo6Bg5utn7XCfGtLjqWKV9D6hSUtEeVLM9N6JxoQaq",
  "key28": "5pNkgyDwFQPZj6f2ttVr8P3pWb81rTSQ7XSTHD5CKQzjmsg2PFqATNBGzsUJ7E9EUgBM4XFTDvxidFBrfKr3AG6V",
  "key29": "vn6fhL6tF2G5ZZXxbuBbc6vtwmvFihKhGE6muSw1mDyQpZtPnr7evYQtXVpoH9nZyw18bJqcXyKA6f41TXQsWTf",
  "key30": "5qgGkWs4jiTKt6mNc79ytKneNpUq2k2MhZZWddYf9e6g3Ddama93y6xe4UPAUrxmYM9X9Fic2EzFXnbYeHBZYZTU",
  "key31": "3MimJLF12StmSv6YVgiPDTiY9aGYZ25yvmo52aGxZYbJzxSggRVJv5kGdJ2j1u6v5h6LUj14QvKZfYNxkU6Wt5Mx",
  "key32": "44uwr2FjcKaFpuFzqrpXtpNQAR4kKbdW5hau5v7nLEaKdYxCRPe9dYcDo6Df8dTMPtPXZAUKGbKKZPBas3osZPaz",
  "key33": "62MuAEv8iRqKzkj8QvttdQvBceuD3uJViPQVs4LjzfNVvjHAHLPGP2LzjCkk3mYuGhVmtbq7ZDXQeXs7RroctYN3",
  "key34": "2buHUudFi5yh3kg1PMcvafQuT3nC7854JAGZaoS7StCnJNZwz27MickYwKaaUFBmBSBmWYCEWSLG3pfJ1KFdPk4h",
  "key35": "2zEAg4SwWMYMmCYuD1vXjgQvh3PdFRuQ9GxwkWL9zWamcUGGeWSJruNm41KgVccuYcvraMFGYmtB2Gwc2yporVwm",
  "key36": "4b17y1awgDuE3qRQdJNpnWwneqw6sMHw4istnFQAktvVSrPNGY4PqWge72m3rRcCp9xhPjoCXhngqc69uKVSgaXK",
  "key37": "636e4zMJjxTF3aKcJyY5iBc4FXfUgox7VAf3YYHcZdWSUHftxg6sg86Qo21PoHNsBsrDExQ4ZMexjtHRG8GVrGvG",
  "key38": "5F62NJt1J41yrdQ4574b4RdSvJF2vs13dzXsRzRHFiwqBot5ve6k8FHjLhvVvxS2eg74eXTokps7iSepmqKzqQGk"
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
