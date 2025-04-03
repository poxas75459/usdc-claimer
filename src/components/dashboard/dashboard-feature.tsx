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
    "XA5HtiJAtxN783oCyCMFfWQSRCnVmgtgmz3LbCgY6AXPLepVAELGCUyhszjsLcExzWKfxEUgqmxfNhsLZWgkqhS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CVSVtPeLoFVoqgo6d8QJ1DtLeyEZM184m8BhY3rv9SZsLJfyNnERvSoCd9aDjH3JCmPeNN3VXpSwkpWRYraAkHZ",
  "key1": "2GwxJz2MhdAyMpddv5j2kNo1wGWAxUarMq3CkqWAWJAHvTps5U46Ak1XYHUdorxTCykVXaMT1dJAbDyH2UD1b5gA",
  "key2": "4nwdyktSBr4mdmS54wAMtRoSezZiVk3PJpxXL8uPvN4uUcSBWTAPJxYssHNinC7umuitHiWXyg5cLZWhRuqMfdbt",
  "key3": "5pXmUWE3m6P7mR1vswV3ER1PyQzBVt1AsGAa51pwhcA12n61Fh2vxXYJG8vnnotLqWHoNvFXh2HkrpEMrUdPx37u",
  "key4": "28KXiNzixRSq3FJDN9jUQL9YBHbvjJ4LTbgvnL2kvdFMqryHv48Wxwv2C27yimaQwtK8xDwKVpeU5gPJY8Dsb3fs",
  "key5": "2zpExECFdV1cGvX8i9fSuqc62gVf5rTQrDDaurRg26xrXNuRdP2oyDr1WNSGvK2xZqK5VVtxuHk8JKEqcdRDHBra",
  "key6": "3u2XzkLdsJKfaJkhCYjjB9W469TiUCqviVLTLoYtUCFA8qZN7Gi2w4A2M2pLjx1KmyzJ6W2LjUWvbs6TsMj9T2fT",
  "key7": "2WZczf24kFDsKzt8H2o4cv6sMXPT3ckNFTitVzqYpdUj9dfL2SqBS19ZikMMe1swn11SAmDjuhuE3YAjgatPTVf6",
  "key8": "5Ap59ayWeadGi1ys4dJckcMdHHFQiZ7VttmtEacUQCgkAAcyxs3GL8DdKMPfpRgd31sFxpKCoymkpCZU7snJcphM",
  "key9": "4hJaVMVvoY5Wf3ZU8kj3SXfgpv5phVk14a1UX3R1DeFmPKVpwzMYGB1Z39pLU8h9E16xMCUvKqpztcNHFuD1HsMc",
  "key10": "3kzGpEwGegNGXgQKSVfEXwa1mRYRTLTcMtCTez9qeh9bae8rtkiQLpzTWWmBHPbGWwykM1uKqTXTxq1AQN7hQAhQ",
  "key11": "47KutsWjGWeoBFq3piKpL6yVcizDMvEDA98f1ovB48dxCepS2pJF5BWTTiBwz5WotSrx3AYCBSGcMVa27hX87Y9e",
  "key12": "3Jt79eAqmNdABniZdjDp5XvoL6Lo61esDQNJnAPhgW7u3VnuvckzkQNCrZLvE5JhVnBTnrUbvNgsZpj8rHjbjvtF",
  "key13": "sipiJYZD17RdnJMCkBwHuTVEtDaFf28ww8AvdoMXC2rhMfccCA7aveZH2bW2X335kc6v672Lgoy1u5Er4m9Qqcb",
  "key14": "5m5UeUzznqMif9VnSBtXwFZehYVvyw2XzZdE4abSyFm6tdPZ5DxsJiogQeZk7Abt1fC2gog42koXaTYHZvQvDkKd",
  "key15": "59czaFVrF8VGnVFVBX6my15VyQDrXTfRfm5ZuaG9wV8m1GcGf856jVv5Z5hsjELvyxbMHYU4gY2q5kMZmFeHq8j3",
  "key16": "4Tfotxfnj1iH8u8p7VBSdBdcbXCsC6RuXfCGARjy6cMQeNbw18x3LmSY6rj96LkNEGqRj5i1XPEgNotjxNgyv2kq",
  "key17": "63UxhvSsYAU1pnVQyzGpc97AftPcquVvp3gwTbFyrD5NGEXjwexPLs9TxBAAoCPR8zijSrgkiJRTburW77MBvZiG",
  "key18": "2cmK3zYfS84gHhXGcgPi5HfySiet219N4iPnu3hB3AuSnMGzjXeus9rfHC5cPDdzEsV6XbN3nAXCFEUUPSVLnN6F",
  "key19": "2ZVboEuqXmVf3xyvXpLodufyNBG9cawMy62b1iNVMygrAR2zsX9JUYqiwEBqSbZj1QVJThiL1TUiufun5Up4aTRU",
  "key20": "3ZaBzzUb2AJJx81kd6uz7rdLdCHh5w2gEFrLLrrGDfmQYPgkzoFhDdoAzWMGADoPZFd9c8Cnh7ofDDvbeS2kqeeR",
  "key21": "4jsZsMK4g7CGXCeAX3g9hMJV1ftYLETK5L61piqjpgadQGPTQTsRH5SMX9fBZc6EXyruu2JNrV9CNvv2jmmEhQDc",
  "key22": "ttGKKv9oyYRmz84E8PuHfVMJA4cC9jzpRSvApaYW3nroUGmdcDicFzPSoPZ9GwrjxbvUZVHjNDueG5kGARRMHMf",
  "key23": "3tZS2QfvxqZDFwypeoznH9LpERyqQ3fYgjhm64npNvM2q2ye235z1Q1D2Tvqvff2mKXLn9MzZefnHWebN7Nyw8ia",
  "key24": "RdqN3Gr34PawkiY5LSqvCdyK6Rpt5URVQyRwWM61NC5tMfMqDgTMJaV1BmSst2ob6Etfmb8Fz8Ma74GtNXYuYzF",
  "key25": "7cQa5KsJExTnomWXAswF7agCmMhamZkzcGu7E7LUuKkGZZ3qPSrenYpEvvKETCWc5xE7Set8d8oFypKc6dTDRZM",
  "key26": "vaJLt1FLZp2UFwCQhTc6osULC7PmSfNrCJNpLsak4ecXyQnL3ijHohnuW632AtFyZY1HJrJqqE9VJk7Ni7iyaoZ",
  "key27": "3xn2VUPNVVosxyLToJuWW9YrAPc3S1hrbLJszKbyff2ADbpKV6dpsX8PtUe8MPiCREVyo6QsxvS4N44HEEVzrJ85",
  "key28": "3LVQBkaHZ2bDm3ntRPepnCYabvZuCLKcFzCsBsagPqu1xPpiRmU1H1tt4EnmuGskBkkxAUQSSA8yWHBsh43te19L",
  "key29": "4Zs9ni7FX6i6JnCcNnL8RSWt7qB9Aoy37SJEhXJG6HtgVHCkXxRFietRNfFaAVNW7zq2DywmdgpXmt2snJdz9QDS",
  "key30": "3JrrQEVnXBKxTCYUtVBktMaysGzZ4HX2Qy9xYMCNH4743wCi1teLsDPvaXtjujpX6R1ZeUatJ9faRjq1TFhXrmoJ",
  "key31": "5viJyU4G9qtN6FXk7eYoD8H6fze9JCmbqmrkPJh5MPtaSm8UVzr8sGhMu1iyYcgpp5WZ3oqRrRAzff3UQ12yruuJ",
  "key32": "4gmjVLuxEdx4CUoaTFUhKDW4MRKDJqtEoNqjYVwH7vRgfg1QYGJpDpDJQQDnjjxnjrZMhpHSdX4fQifkLNZCVv9A",
  "key33": "2f6QpPZRigHMbFCGeqVbV4LcPemUzmexHfXDVf4kgyJx9K27rwZbkF9GgFQFv9JJJtGFTDmfLpab5qkwXsjH4t6D",
  "key34": "2L6jK1MLZPRAWf4VZ2XYXMssWXjorVNiJXpmEf3qf9bNgjeJXfAogkCVgABHbEwsvFSSUHS89A48pdXiyrPejh3W",
  "key35": "2UHgoEuW9ryR25w5yXwNMWxadpCoSf6AvLYTQf8X15ViD8EDK42QZWwyjFqsVtdCKdBJ62FvkDNrjixanc1mfBok",
  "key36": "nCUkBn2jFWo7uQm6JbtPTH8ZumSU8Ea5Pq1XQmomCcfa4csZ9orviGbqitnoMDzGPCeXgqs7FtdCXhWbdPtvXdA",
  "key37": "53uaFwM6fo8r5uV3PywosMaCLMbbPWWeyS7uHCsYWgQPU39Mz5aUJ2b3AuMrQPQ5ZZ9V75WPNVQWieiEuCHgurob",
  "key38": "2aWK3z3GPtXMsJs7RfD73EzduD9Hyo2VkeiNzdbsF3vcgTS2G2bSGQEYbfAns6cEv2PvoeV5MoE2qz1UVpF8geRT",
  "key39": "2CKicJP43ju55RwLMDWZUQXwmTHvMBfSDsg4a5gWX9NjJuf4XPwTELz5svrNEdvVZBMgJTzqfYc3BC3uMQfx8Szn",
  "key40": "wBQXHrtBwcBj1Fn7j6gV5kQSCd3tL53UYUiACaLuZTPvDVt8mikyo8YjKBJs48pWcLhfKkpZqJt7VXXhBSYGA5h",
  "key41": "xMmpL3c4PvuNUBcSzZ9WTp3B1hJ3zNgXJC877YZ476DiGKFoLTj491aJ8x33DWfi9WcKsoMNjZtxmznS9EeZZpD",
  "key42": "64MUBMxJoottSpNTeZ2UhjjZtUzo59p17Etgccbjhna78kcdebKyVLx1CLQCbxVVLvBi8i3XroUSTGib7JG9Au8R",
  "key43": "5tSMcR2aTjf9XnR6XAdhAH4eJeAV6hjs1yZ62Md7qTcUXTAA3XcQEhHsHEVwQ2MvKpfzxTmB5Q3teNWgHwJjAkn9",
  "key44": "3cbSg3iUuPt45GWHJcDKz2LQ2Bd2duo9BnuxWLeL5RJ79xCdFMpzAAvTYZ2jHrURdvdC4nEwTGKiyjD49mBM7CUA",
  "key45": "4xrQNt9uCwS2ET9J9HPJAMFJwm1ZYvxH7kAP1fB1BzEymkddRih5xFkYBZ44PFSPTU5ZHRR7ZCnSx14gabzDHMH9",
  "key46": "568ZbfVMwy8VpV1AtLRTrKMezYYWAAt3tR9CxS7x8HmB9hzDr8eReXk1XpZK9d88mmdoy7gjkbceznyft5QoB2da",
  "key47": "5gJVfcgLCvgdz8t5PN5WPwpk4QnThaYwYkYKR48ue66cDmE75U95Lcvkh3T7x1xpp78n3UoMh78aR21npZxWaKtS",
  "key48": "28SdKitJf1phVXcVyzz5tX1KRicKc6XW5KQvqBg4QaqFqGSAPD2qJKKDbiqfnUNRqkVZz1AXMbhGPZusvjF58AGF"
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
