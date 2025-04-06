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
    "2zzvPVA796aZqXkpBUSMkNUgg1HYwuCri4S7qb5XCcPRWFAFEePGgyzxM3CwUo3XH6TpeDUkhmSNcU6ZN7784fLz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b5qexh7kM4iArpbwkKReB4XgRnXqrQ51xi4Gq16TaLwhtTQ4dBq51i9cb17a1WzfSSZsUvzjkgCBWvScZ39bvgh",
  "key1": "7US1xpG3aDaS9izkyQjSwYLZqY7NmveRRLWm6jhvRWy46cwtbTjXuBwH4uvJpfbSwNQaoBQPwrhWao28SgLESCq",
  "key2": "4VFo6SLuW47vNcX2eF4umpKdvE65XQKB49SrwuJ5N3N1H1qiDEB585huWe3NNcyD27NY7PTfTGzJppos4Wazjebk",
  "key3": "5ysgGXzZKepgw9SZ6G1QsBwwhQhLgTsfMqfyCzFgG6P43BL6Guvc3BbnN1664b6ftx8oiMi5kmDd8YaZmcYRC1LU",
  "key4": "61ruEFToVS2PVRetdx5B4Jhw2wYMDAdhQvijpB1Qwwc9GYGKni6kwoJr7ZsN4wdm91QgVJ8V9efNGwpusqXJ3vEV",
  "key5": "wJfKeUcWfziXY6YxVWkTSoAgsqnWRHEcCNJ2YGVL3vpqFYH9aN42DxoPhFazUHMPUHdZht77ezmzXGh7aovV7gB",
  "key6": "3tcvLvc4UFwSG2UKSx6SACMkGQvgUghcCA4ARSfqJQPJ4irKu5ypXFyY41pMpEvn3xbxZFEAw2v6mKDArbqv1myo",
  "key7": "37HGSLpH33jAKrAvVXpGUz3QZg9D5KPnAr4TPrr71pxzRhW33NMa4DH5AyxHz1XxxaB3sMTsxdEQtjGgscABJsHN",
  "key8": "42x3UXDD6TfXF7YkR23BGzDnmUoZf7ASVB19GfFA2XvJXoCaLDHFX42vPhghzsrPDqo39pEWRz8D6GoeGDqo4Lfi",
  "key9": "4yfB7qwdSPr84vhX4uUuo6rnCmxqfjZzQmtbnrKojs88t5PxXuePr7v4ZkbkyoBeBxy9b71gMcqMzHUeyKj1EF2W",
  "key10": "2CikodSMQjKb2MPqBXJJfNZetseKVzwkVCf2Ccfp1MHtVDy3c1sjgMSUqoaT78T8Z4pCHUJkkyLTKemghD4goNMB",
  "key11": "4ENrBGVSwWMJ3qj43m1bYDiN2PvmfdSyxEFhWFqc8Aqvf4uQTKYZfbRijkqXEFwfm3seGaSd5dF9ShfDyhSP1NWf",
  "key12": "2YtmwzQR5rGoj23vQKeZUXfyz657T47sST494dKcxsrXVBcnDfVyuZ3SoRP8hujc16wDmVQMwMaQZrDM8cgkczm2",
  "key13": "5aVvrFPnY52NmVR9nZ9Fy7UDSUG2QbmFkfy1JH898BwttRw9mfqjQTSWkHniZFcyWhT4nc3nRn7LYHczVbuhzEyw",
  "key14": "q2TgppJAS2BBgqwqFp1qfjRxn9VkM4CbTdy9qBjEFxFuSdepjcW6itA8uSNDWdgkFa6XfCEbWWwQCfBBrxzF8zc",
  "key15": "2tRjNr6mtb2qo6QGGi7kBzSTA3V2wze4YRL81uLMoSUoyLBju2wPhBqEy4MutTb7KK6FF6JdKXM1Nbr4YR2Y13Fp",
  "key16": "5yDChDeF85Ya6acnH18oSrPfJCq54eC3upcaScME11cApsiPy3pFrNKgPDs17Rz3saAF7yMZMWSrNAMYdotRFfsi",
  "key17": "5FkK8J7GZF4smTz5Xeeezd2zXbjWSWnF39uC6vrsUEt7Zc9MvsPwZ9Ysm8m7pG31JqZyigQzTrz3i8VD6CtgJswE",
  "key18": "7vhRgCXs4R7FfHfbhr8KZSYDpKAZFPQZaupqdQf9FsaUVn7R3XU8LHmxYtS2wtaQugTorSHn2zU98qcxc6KQKGJ",
  "key19": "3EJKC7CwZDvpJKHLtNrpLPYQwKUnom1EBqD5zkDfGp4n6dDWbfNyy6gkrnNkaarJgK6YyDuWfhV1rG3uSH6ALHGY",
  "key20": "T7MCdLfzrJrQsGnk4BqFafRsdiHKisq6p4RZUhnBRFWiuuCiPiP2Ma5AWxj6TPeiWbuLtKnKe5B4269LrJSc34Z",
  "key21": "2AACRK1U9fBc4kumMk5w6SeqRu4qGkqmgEvyaYBodgAcMdwDxRKG6wTPTYee44TbxmNURcFQF93oNC1LvLsv6FnQ",
  "key22": "fnaFregZvWjT52ZDSzJ9rTpnsJhGxSTexYMYy5BJtNx5a8tKH88qNAm8W3h82rGEryCRdduDgyTowK811jkUBhM",
  "key23": "4N1JNxC1bXcbQkiXZyrcAGZ5DekK6K4JtAswNCVWDcnFsVDuZ5ymgpcCMavZnPRd4EDii3SrEVbHctJAWYc9PppQ",
  "key24": "jnjT995QAMyNSK2cgDtwihmbMmjsVdrf1xugK2G4YdWYAduyGgsMyUQgcqAmpf3v7Fr1hWs6SkXnnWW7pqJJAqL",
  "key25": "4QLREA2VRPG3ztryosHayyrnihmLgMmyYUGfA5ZPGfvBL43EEWrhah98Vn1TYDeAGwwAcKiuMo8NqVZFqZjPGWwP",
  "key26": "4WFS4uDj84SNMbnm63f6TYd4s6DYhUzBWyX2PeeevM2N11WqoCA7wQahsY2FgYHmm6GxnRnEirgM8E2WXGSKpqPi",
  "key27": "4Cas7KFg3wJVQPnpKU5Zwc6YzuKD92uU2grfQWJzmshQEoPwWf8FqWBFzJGwzdEVD6vMDPaA1yKJZqhUepNDv3Qf",
  "key28": "4nzCmcz8yiVQ5RCAPfnBev3c31Qn8kMxjiv3K7qp4CekJaGB68X6bzdLDnoTKmBi8hwNCggrpd7TJQPodyCmehRa",
  "key29": "5LimHQdoy44oQvpjfJ9g8qFtCcya8F1LB78yEGJAcRyLmtiF6qHVMXSxSZPa3R6gSvY8NmU8Kn755WqPiXT41sJk",
  "key30": "2hiu2KEWTegLLtEy3pv9BnBZsZ6jotmU8T49GbAwLdZTgnoU5dWFjCogJ1nUY3r5ZZ1frquxGhDmwomZoFykvYAc",
  "key31": "2eZXvpk9y6ipJyFw8t1CFBvyZSKRQTng4a2cpEraZvPX2r3EdnebDjrYaj4by4X9z78EBp6P7PyiD6y18qKqAxFU",
  "key32": "4SDNXQ3SGH6j5Griuy7kWrZmxtJ2qVWWQxsboGBL5EuqNCvi3dhEN14gbUBvuvHUzXaZB1v9R5NjX26YHvpnA4Mj",
  "key33": "2G4MXSMXmrEsWPTAHCZVEZw4qNogmR8KPc5JXR8CUPNJLwFJMW24uNgWpYqhFMfpZeYXi82pnTWaq7EkJEeta9bz",
  "key34": "ZFqW8AGsrQH7rLCuTV14yiNBrxMxjLTJZNBTgb5w4WNt7ajVWghZQtuSm18iHaDW1HLz79LrPm4UPBvQp3CfRMo",
  "key35": "4uLHDPFr2W46B17ZTL5yCzhC7ASeZHBpfWv1a9UhLStHpGFCU5Vcf39EKbQUiQy6uGkoNGpa8mEbcdMze8tT1r9b",
  "key36": "4R5wHbX6xYKcw7YJwGKoKZ6pmXcNFRj4wkpAUuj7uh2W4cGCyNFLPHTM5gVLRdJ9XyTYkPLTLr12G7r9xGAUH7Uc",
  "key37": "4BfgrfHiY6XWGR7RxdLEbfcZEuw3DQQThrCgY7b2DEB3c7wfbjGQ65NvBNzzVrRyVmGy5B2faD1MTCkDnxZTWNEG",
  "key38": "2zyuZmx9W8zcaiCchb8baDjUS4cwqsAYz6kLUdXiLZbK2vFCgMfaY1RzJ9zsbmuTtNefAWRJCbEbNwpxcZ5D22Jw",
  "key39": "5jhfKVmUGRAHfnqRCw1dcaFPHDt5SZTzG6RFXqVuo28BHCEKQgmHpiKhUVSLGcMb6AG8FffKgXEz7dXTFsDghfs1",
  "key40": "5rLQewUey682UZpVGkuNdqehVa5yxSZuxJfK8wjDCEsYLJ4HTzo6CYVNvNCPQRUMwKU13qVn9w9AeaDodjCdZudw",
  "key41": "67iA7rqaePyYcCv6wzaWGwriBvheJKC6UfRwMQRzM4nvY7Sx8GT7YtA6q1CKQaENtn3ruv2n7ThMgSownJFo7uT1",
  "key42": "5RthrUefVHczFnGEM4x9DXaxNQmChHRWrxr2xokXkmG4ciT4S1H5HWNAiwj1Xd1zceeHgviPpciDXQKx7qyEfBru"
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
