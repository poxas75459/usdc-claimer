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
    "4d8cEqwqiHap5pXfxC3pQN2cpUhVfo4Dy4WCxpMmefRLrDhh5XoDN9ytSYzgnT2Qop2gj7wagoRjCLWfs97AwWje"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P1my2Sh89CrrEhkJgAkuemMnju2uNkpsMeLecgxCxCQ1oKGihsnXfSbPiR2gMzuJD7SBRNwbuPiiaX2NDAMjjPt",
  "key1": "SPMmVD9ddeW2NzsQ6mgUbVZbCPsT723Y9chVY1eNuVHEx8kUn7UvvQuHHegS9uKhL1kKqVc7vmu3HU1y6rjZEsC",
  "key2": "3owFUE3LM51d7TuVyGkeTrpeJmw85DbAVbi8xYgGZAC5fPrswEyYUjU3wKYitA4D67BEX3aCtMbzfZ3jsxo9gm6T",
  "key3": "4aYvnNttkccEsKNArH1mKCuobQ3oA7BTtL9e1Bvkr9rWBSwiK3sLDcc9Je926mhLBvr7kSPEn72qi9Ku6xiQfNBH",
  "key4": "5Pmq5Uq4ARtdHnfRRXTScd3Ts4N4h29oTpQCdxViokgXAJKsq9Hg5sN5oepcg1QoLMzYU4gaHRdcBvk7v1WgnKX2",
  "key5": "FWLben22pnM1uLHgFfbd1Zv5DwmxdHfwSQp1WJGLt17p9AYPDBQT9pwH6BLoWbErbTT62cF3buaJT2pgDr1dsMo",
  "key6": "56epwJFEMJhPVkL7jvme6iAGKP4eFhdj1mmWuhcpo3qF5D9Rj4LgfWaaxPCQGjZGC51mzMMYtY1qcemCGpudrVKp",
  "key7": "44ME7dwvrNY4P5jc6ApemWdwxsTJQNSt1vXcHk81huP9y9zWe4LAHJUYGC4THiFwBHsQVhWNaafvQz3NoeninsD5",
  "key8": "9LMTBimAFH81LxtdjBwdaongRKJUfAeupivUH4FoFJCJDErkn6oLzpfJNM7aq4hA6mvDm7NVR6gwzhyBcuTRPDY",
  "key9": "2qiPuvbEWHrViSRTcHaPe7feD1Mysb7zMq4wXc8wLQdmX8VJtBdiuiBxzEbHKSDyq2tetp3L59MajJJFq5KFVrKE",
  "key10": "49bSgLwm1jCLmZrZZHfSJn8j2oPdm9C3a3YnJPxb5xTjBi4Kz3aWRaYgJSJYxdUgfjykkMbe97fnCAtGpB7KZMxW",
  "key11": "36crP1zceZw9ZhBQyyLTKSUU7vVRzm1n6nDzXuAYud6AwCT82pKnhWBCJUSwvUxnpti4KYce2bAqoVQqfLSJJwZs",
  "key12": "3q8SSZVymKxR8YuK7mXnaDe3hqS21MQ9ojtJ7rDw4yNYyxVwhF3X4SXvsRsMQ1utvx1Q8ygiKUT9UoGYsmEXviAR",
  "key13": "62y164E2tiEFaDW8dehDTUDXAm3rLd8gSN6qkxwwMEZvJutdNeCxyJ3qrSy1FcUCDWCAgDak33koKqXGqngGPSjt",
  "key14": "5wscgBGASH9rfJXD1XY6yrcGi5ozNsbnBCgREQ3B8DG7z6XYFhfR26Wx9VBxL51qs8Ss9XytAWEXU5VGvUjrNXcb",
  "key15": "3CMqxiYaJiiFdmiEsYeYNpYgGdDvLdJVqJyapJyrmpBYbCTxnfrKicCjU3mm5HLyJG8iNd3j4wBnivpPXjMLMGtZ",
  "key16": "gmZgAaZ8ob4VFsxDj2VqZNivUFDNFvbrFXtfM5H83dNDQbz2BKs8d5P4mj8hAK7XYJT2k5mLufAmZCMyioEotLh",
  "key17": "VcCZA1XCWhikQDFtLKyYnEoUPW7uTxpwnuNpvzY6xe7ZEnzzwTEimy3hRysYDvZiY3kGtJueAunYTv7dwaiRfcW",
  "key18": "4xvcxqRfw9nf3Mq66zX7vMSWQYVyT9JqGfuuUaVrf5TWjZdBECPRoAtHxzWz9GztxZVAvmo7o9mN4ajnoxpN1myV",
  "key19": "67K2wXnZhDBnYzWNRaEPwbVVgRoEJpyQTkqh9kPPQCGLDUPZFiHVJHNocJXK7hV8qKwHz3KKyBt6UJrUaWZtmSmT",
  "key20": "5q6puXvBMwx2L6ZTBAHp7witPowsRjVDd8uedj9yBFYafRhmXVoqA46GxQSDfrXXY9NRtZCBMzp3hc2K3FyQBfZ5",
  "key21": "59CrPQEwCLkdQCHVqsERc6ahhBhirbVukfw3prXoBtfyfhW3z6c5tapHcRcAhyPJNzjTj6Tz36yuEak5NtDWJPNG",
  "key22": "4NzouJaiWMkQ8Ver7GkurNjTuNK1oMk51E3XGsUT8Y2gKy8GmN7A3njW4yrMhygZsKXc93mgoTnviZFSdGvi4pnQ",
  "key23": "3SkmJEjKjG8LZVaxdzAku4FqQ5ftk3DWngCNHu4gxDQzb8gYjGjr3KW2Kg89uJbxFfT7o5AQjUsiNaP2gmz41UMW",
  "key24": "2Wm65vsGNNcHTtrW4RXVhPJmBWyFZoe7b9tq8YyTDzRbf1RE3AFaZrnxj2FU4YEGqdgMt6Kv5gZreMdXxY3JLd9r",
  "key25": "34zkgSJpnWmB4rGqjTEi5yyKi2pgnBBmbj7S4GrbU8wHGErG5Mc4kYKM25zrHnnBVCthDSTDLAkqjW87TscgnF7o",
  "key26": "2xgBShSjWNV1zyzFS6sGdkdLhCSJMVUYvAseZjiMUzHX6qSBujMbtUz3AFZauau4cM9zF1jFqPyGoGJyRsqW2ud1",
  "key27": "4atYfvQchPTZc9jysvZCWPRqZx3Ej7gKsQ7kQny8TMEaLHKBoFLyQm8QTEjCGvZsxLJ14PraKJDCWraetHPH99mH",
  "key28": "2SCdhx5Xb9Z8VtNTX8TYUgoeG6buvX2kpHDPcXirJYjQErcMTWKa67cTY17dG2nh8GJLEA6Nu5C7wAcXPsx1t2bq",
  "key29": "5iAyaurpfyE8WqZzZTweVpV1dT6LZ2mXqB5jvwPf8TUrbySfEqMUv6GgBrXBHA3wfLrTLAfHomekrvYo8kBQCiak",
  "key30": "5H6WE3XWiLH89TUhNRgExTzKaHJDCCqNudN17xWmcr3kv5UZgpkvSWmVHCNueiqS9cRWhGCDqf4ie8ReHctz7ZAe",
  "key31": "3bpYy28Ux6n9uw3NPznmyYAqTKkYnrCvoBfCccDXqD91G7bBJTwrkXtbfAeghRfQZKu5tcSBQ8WeXtAM97M3rNUr",
  "key32": "25yWJzfZr6U99bdtJomvtHypcMUauyjcWsw2UWQ8SkUs5QT5JmVjaBvHEk6U3nYdaeC7iRpG5bQBJahuWh4SsR6X",
  "key33": "2R1Kx7RaCwQjBSZ5UieNvRLh2EgEHQKyqF3Ww1MbT7ZP5iQeGULwg9FFPx3uz2vkyXZSEEq4eADB52EoAkTgUq27",
  "key34": "2bxHtQtfnH1f48D6vhfv7n66cZRLWSh7ZWkSxNeK9dYJGGwejNnCxKQnmii9tbwF7VChyXa191JXtWb4j7c71dnK",
  "key35": "4tdVAgWCC1XUZwoBaSvDjvbuhEXx2gz1SFgCpBUVwuNX7eADpDEiH4C5PHhYTcpNMSkBC4fDrxiAX7w8Xxwr24Bz",
  "key36": "5g8v2RLHACfwMkPhLmgkox72qC9wvduyqrnJBTbva4vUGfhg7gGLWrziGcEZpw84uw1A15YTYXeKKYnvxFgNcTqw",
  "key37": "5pbEZZLXCyybfKR2D6bmR7bM7mrFpyXg9JKMm8kdBN84byXCTygiAGqvfRaB8rLYzjWVdErQuBpoPQBypDFTG4HS",
  "key38": "5krGUq8aSZ6yMpbzyBf91JJ11ZceaDiUGX2WQsukYSShLZwcgucU27LYTTz7GEA1Kn72S5NH9zQtEZuooTxEHmKt",
  "key39": "4fAVhq72fbMaeGTXUFiu5Ayo7Z4ZPwNoM3w2qBLiAskXNoB9eaNgr29XJwx3WWq8Yu1u3dt88SHHQU2JxNJJw5vD",
  "key40": "vhHDGDu97LXT8Y7bYAc4VA1PEGooW4LyAyGk3ajn63AGGyP7tuwJiuBaTEgc3SuAqo3ZoB96UnyGbcwZQhyRFp4",
  "key41": "2jXrXXhYrqMf69vyi1NgGUMrCUce3nN3v5ZpdVwbq7SjKo5k25nm4DxWw7XVn1V6UCCw3bsVxUPFN5cbkyPzfz65"
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
