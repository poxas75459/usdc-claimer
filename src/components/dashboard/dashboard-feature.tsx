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
    "421iF9FxVmKis3a87mYVBYf9CJmXW89gp718GXBTKzsxBeoR83dScp59m94eNC4nZQutSygcP2nyp48L9GqZZ62g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "374TjkoshQPtF1LDxg1WPv78NHgki6DcQxVVtT5EqYeqfLKPofBaSCFZSLHJoJjimmxGzkHTboQ3G6vMNxVWNpi6",
  "key1": "4HFxfCLmX8UAAezomTDYLmgVQj4rdbSWZ54sSLxN6dFJrMA1moymKgT8vCXv9NmLu8LvtXissKuAvfawtqcsZxPE",
  "key2": "3Y1JZQz1CNLwL7M2JyYioYAFBMPUjgry8BZHmJFy8p7RQcha5MzNWb8DDFJy2sqmdWDoAfXPyzwah2anUQ5QnFAq",
  "key3": "K9rf5MA831dU9WmdrAx9psoRBYbqxYmyes415rcnKvtZaW6yGzH58qNodQSiRbm9cqY3CAnAFCgRAWYq61TDydd",
  "key4": "61GrpSk5HLkWNZ9owuCdmDuBRYhBCufHSXFruoFjbTjZvNieNqtSaTbQuLkx8cVvhVJ1jvRPo1dX728BX1WGzSXP",
  "key5": "FSDT8Yyo1xhnssv8VCzmUjWADHcL44hH5eSXbNjRAEvjnu5ZxxMs5qr6CNaqnFvkugDyot1ET5XbLV3TSwQDzZQ",
  "key6": "4GWfRfraBEzcmDmJnuHim7pEdLc6mdwW5oGHMFdgmMMjQ9g37AM6DK3VWRJxFcm2yQZaDuwDcx8FPrnELRyVCSGz",
  "key7": "616TwEdAVwncdo29bKxvrXDKrJFMWjzvHfrMXeT47YtcREARNosPgpF932hjp54GcbzkXrFwwKGPLnUuB2Mr1WZ4",
  "key8": "5pvZeuS3wQYeNdEy3JRCCefzA4qYkrjhMQuaHXAqydFryySumSeTxqfE5b2sUsqNqbuHquHfunpywpKiSD7j5cTv",
  "key9": "2CfGLQFk8TnvsBetNBVDRZpr61wonpXSsgchJEmavz1Zdgmkyhzo55xKH1ScFVpcbzEKHfRchcLEPQSiWnaUjags",
  "key10": "kNQA47syA83MjQTcWcbKC9XTeG4ydeFiPN3xNUzFTzQzpfhyconQ1GPUeVTJ8RUJS8Ucp7K3sqJmDVtt2BsNjtN",
  "key11": "32kNruiFn1pwMC15jm3VcRaZ5mVDwwcURTTKKhcDcpN1vXJnPHo9XKn5u8JVTL6KM7tpvxUd1SqdCH16F5qS6gNv",
  "key12": "35d2hJX7f97rZDAwG5H5vVMLSXUnfsPi6zAZY5ijL7eHTT7Lz6gd8R1pEzxSQRTzwkRNyd5adLxJgHfixw1DA43Q",
  "key13": "pHnucoQ9EEF5mkFSmLHwFcYe7Y1HsRsBP5hXq6ASZhZy2esLhvjNV3dia528BpYHXBTRfTQZbwjFtWi63BmYfnJ",
  "key14": "5zDXXMRpgN2sbic6GS5NXQPSkBZULCN1Z4B5gRaQT2ssw2738yqvBPkE4gH5c3DwPrafCMpKTVoYmhjETimx8Vzv",
  "key15": "4GyY2FCDYccHt83jZBucEfF9SnfPfz3Z42jyux9TQCbkiApvLa2kn1JxKzzWxzttH4kzXxwpiPWbUvRMkHq6y8Qh",
  "key16": "3PgBsNKPmD8t69vuiJZNKZQcCXGWZV3DzaBKTkMzW3T1fTtX45HXSHcD4J4s5mt3DMiyx5PKr96P1i3uNrZ26HUm",
  "key17": "4k4qrASY6cqspbRuWQb2cTrazS1pQYKfBemYGFoq2U2qS8pudQMLsdMH4aZChoVaiyLz62L9y9ApLchwgpN7Mdk4",
  "key18": "2jhz3FwhTWJCSJuxvN3TogUD7wBT2834DzbjY8FKZY1ZG1dYjBVTXNsxUu6jv8xtPFLwjr2R9N7Zr7MjZBisrqw1",
  "key19": "283G9FijCwfMtiVhb1ZkZ9FQdZngrAjP8DVVGBajxci6dad5TdZACmNBofQTxV3UWavr9JZCsAWCZGKUfus82SMm",
  "key20": "2bhnacgqL9jx6gKjrcpSvf1ZJEegRJjNVaqJAjLLEX8aj5d1SZYMhr4oRki6sYN2mrxhuGtqFSyWe9pC1VXJjSjQ",
  "key21": "2dgZunzq28DR8WViY6VnnMjstiuqKUmvuqRhx7SCJTVC4GHjT1wMY5mRQsTpiefyfSN6vZmWeTL1ovQrVNc3m9ab",
  "key22": "3wnumCtPYp2L5rXh6iApfJvY9DQDSFQysDFKou6YKjmr6AmhEfo2w4sKR35QYKTxH3mCaAvMxtZweSHyAhb6N5Yh",
  "key23": "fRBJMLSeKvpAihHZXtaUhQPKSVrhuTFECiXrr79fJBJn65475B47NwNmGeBcaaZZM4xCCbp1J4drFiMQnpVyPoe",
  "key24": "4c5KVTAWxL8dhDYeX2Ae9P5jF6TBSphpgmbbuZigcBmR76H4C6tR27EoE4ZEvWDjpbPUb81EJ9KoKU5EkzJSZscX",
  "key25": "aeLEUrk9eCYBdoKQgRzaGbdRhQ9aWH243wxbLdFLeszZZsUBbjWANPvxE7Dz7djzbc73bcBRnHQwmVrjkyXqQg8",
  "key26": "5Pje2tXQgHHsfDwMnKoB4Kyacwaho5gNuXggKrBPsvJtszTErpX1APmvh7jvL7S2FJSHCgLAhY2ZXxB53v5i6Nhg",
  "key27": "3cDqQ5HXic3uK5Nf5whgXK2ZM7Wt9tCr9bBmQDUZ4WqeDYNUfAkDNHdDSWKXr1bTSPDMQPS4RxRCUSrdiBYipUdK",
  "key28": "5EFoRQZTRKyMY7S87WzrdiQebixzoD2RMMxzS7oAhBM5GW4DjnxjYfRu1kwZbtqGSqKfTWGMbBTGWKwHt1AevFmQ",
  "key29": "3jpdhKk5c8DRNvBRhLEAKDMXXJ9d2Q4tfVfBMUWTaquzTntsNa1oMRRR61QbKcPzQLXoebXDbD9M2ncp73NENsqu",
  "key30": "5xD25LY2Gc4G8Se1ZJdtrRvMLny54VVprAbqL7FLDfQ4K96ESqcMDYPwNQrV1y2qHdpez5jeA1w1TfWgBo3VXru5",
  "key31": "5wAMAKKtCoNdw48mRe5ymTeAmECiC9aTVjrEXD2YGFdnak8XU7wnNdpjCDRotPawXdubhEvft7MmKkCvqptTYJH2",
  "key32": "56siqeW2icJuvmTxHvptyYrCSVaN38xBjeguf3qXPLucX5w6QU5bsQAvGqqzpS7LSbjXvbLzKUBQkgQu8LPR2kkJ",
  "key33": "2PJ2D4uaS7qYGCvGdbztkBUAWaqyjTam1XMu7bnQPnXGQGcg4qY2bs1JB2fqj3mtfHTTczuaH9HHsnTHExzCTRFv",
  "key34": "4VjSGmtT2g42TprJpkmbSFEVSZi4p1ph2p17N2o6JoAKvXNVfMkSBKarR5bN4vyJMTxftZeJg562tijzYCi7q6Dn",
  "key35": "ScUPZ4B28B7DTD2Si7RfKDmkiafPM6dGjdRGTR1ediXdFnKfQXSeZVZ8X86d1VjKANqxR4UCDZanZgANx2BXA4M",
  "key36": "4zwHGX75fvVv2vjbARPhp7eon4FN7CZSUbkb9WdT7fNjrGLHs84GV8HYtdb8KUFYKCGKUCTzf3UgBaNEfztzsnwH",
  "key37": "4RXc54YpSkCrGch2GuXhaSFpzWP8GVx3PSEgMdLqjztieDK7KNipJdMXbeFPVsARpoS1eSrEUpzdgZowjoY4o2RM",
  "key38": "FA5BZ3oqaeyjdNhBdESiStCYX5XArQikhNCnRqkfK3adUTAVBqHYVvoenmiMHEUV9fTTSuwXU2xtvLavDp52vFG",
  "key39": "b8NpUJc6M18iqVdWDhCG4Z2yRWZwvfzoDtqWiCZF1UXP2DXr2nMQEyq8cFpLpgw5LpyQcvrKwoQFDKFSgasb8F3",
  "key40": "56MX5tEwyuwpdGHSuLPopFi9j6bGPWNXXwaD1Z3rq86gvGq7ddJL9io1PWi5wfcGZeiia5raMZqoG6YisZj9GrAr",
  "key41": "3tEFTmqPodthyDyYcAjQX86waKBKHS3a8XSeLpRnxZrRQ6TMhouhqjXobk3AbiYc2EUctgCRfPEVCuJiaYqde5ur",
  "key42": "3LV8C9PVTFBew4fKuVdK2vNKNFgvbrMJZWXhPmXFLrvcTWv5kNDMbZfd1EAxgFDozHsn3JnVWiDtG8v2wGrJN3ZB",
  "key43": "21vMdR9hy2ZD9ugZ3zpQGTzbRtoj5NepNWBtDUJKgqsb2JJXtgfCWAMHe6XmWDWyGEqKDX5NZo7NUCvWiKD5ejm3",
  "key44": "5QH7ME31pKfzafHVPZJi6xxmRSbtKVbCP2XndgDUPFrY6qv6SVkcsQ1sgGYoo8kXEY9jk8ALRbdYABorTcLp5DkA",
  "key45": "nRYV5y4FQkqi4dJxS5SpdVnd8oKVVMnMJWmHRwdkuXcs4T7kAtM6G8YWtNLiCibxCCFkZJMs6EaZsP1FfM9UVc7",
  "key46": "aYCxd3vP4dWritEHyq1EAkcxP2V3yePB9PnaUpSx3J8tR8hZrpiGefeaQ1g364CaMoRVQRVuXiGGNfxvbGQpsGE"
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
