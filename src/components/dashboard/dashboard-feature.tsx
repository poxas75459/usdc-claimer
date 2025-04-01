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
    "Tp9fK8pQYHY8o2nCaEtKo4eAsvo3dT1GDyrefDc22PnEKMgegC5EPWqsDYut9HSZy67BHHxGo3zxTE2QGcRH2BD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EwDnrT8xPEiSMKZeEDeFAoKUibgymRjtXVRYzYdj3ydgRXYKF5VCGEZx2NFFwYDUKtP12YYYYekakxz2hfMvDgR",
  "key1": "446Vu3Py8zhx7HHN5VCJC2CJsJuxnRfrMVG6DQEnaxfARCJkriVEJncpFk6cJ6E54mhhvk1tbWVzeYp8wWqTfqad",
  "key2": "58GEUupynXpFsWH22PH2s82qzPNuL3r4Qy7RpyXaEUwVsyoeUujX6jLsBSphJNGCJBr3ErvCaWrBD5MpJTBL8TLT",
  "key3": "5ddWEDhePpXxsNUwwg2xZ6kfshvYY1hVvSJbDhT1vBeNJaZtY8PVMWcPTk19kkv4gwfjm7zg9n9vKrXWhuYGqrJR",
  "key4": "61Uai8FhKjgR4MZK7FH48EojTM9Vq9niqhmFydwK3Mj789DhtSKz8iok5FNVAk19TurTsW6pgxskHb5Me2hwk4MW",
  "key5": "4L1LKjQAwWAvMNfhbZ3oKK4qF93W61MmMEouWAL9P3ppcijGCpaesjjUaiJ7sGoeivoaZS7cHAHcKpBovwXLwduK",
  "key6": "5rN6kUhxNtstUdyyve5otaGXdmuERVh1A7uwGj6TTvkjBd6yEs9emoMEGkyCn8VzjNBMaWUC4zqzcmFWBWRzBZRb",
  "key7": "24mAhACubHcdfEX66SqAJgAweSrGiDjpNQoFAN3ajv8P3VNJtta1e3gaEAwqrPnfwhgJpmkihQK8tvcvphgqUL7E",
  "key8": "5gS4TDNv5eTakK1NQhPjQH9tkms6gd3usv2YsCj6qZ6G9878BYhs54gLLCSEFdWsewtWivcNG5r2u5HUYFfcFGg7",
  "key9": "41xb5F1yDsdQufxDTU6MpJ74Ptg4WyZrpK8Q4xVJcyU8CxeX8kbPMqDfJWREYBX2nLnJ9WMjNykThVJWs2qhaSra",
  "key10": "2jz7tYLZFx3GJQzVJ8sG2BcLAoTB46ctwbwmPvNoqDkL5BPaeCy82k5D94NpTujPLGdoTcwz3JFz5TKvgmiki1wU",
  "key11": "65ipJQt25GqEL9w7z3H38NBn19bPd1Xgfh427LCHEkvoYE72M1W3sK9Xh9mcKQvkzhgyvyBujygXAuvQotWdex7F",
  "key12": "aQXEzBdKP4R4Y87jpBEHST48Xjy44tcEXyVq6BEE2UtaMzNG9cMfaXziLN4UiC4CqZPc6uTngNucWTQoYehyH3W",
  "key13": "G5u6ATm6wotKyZWHNEswpBg1C8Q2Vjfh3NtfiiQn82vMWhHX2uaouoFt64wr82pqnpVKR37kkqaX5mdEhQGAwaK",
  "key14": "5PQEKEFpo6bqZK4V4JjVVQviyprx94Mkh2mAceZSMygNc9PXrgTCxkamKWGSaNMEiPCwEjDGiZpzwVQsKxKVK4mr",
  "key15": "EUR9LV81Cnd2Runwwh9aSCf3LskDgXgGvHbVut3GP1G6NVvC6GBb3UWpgHXQxuKLi8S7jxAk1XLGdcARvL1rBRa",
  "key16": "2QoKhCSHmxt6isucEanLGpQYzGB3evEydJcqyDLZAUYbgPuwmFHvwCg8YPvpoKP5gRYw9WMeUCS76rMtKbsaGcTo",
  "key17": "5LqRx563nDZAx4XRBgbiteCmrwmd2ktmKJmDpGToqNV8TfN1bhir2rAHSViwPvSkLiNGffVzTXYATTiuZRKFjwJg",
  "key18": "pu3g4f6bnDMjT8gJDwnT2w4rxW9Jvi4XzSocfGVw4j1KBU2FzqYTgKUS4EVEjSskwLQGM5TBAEtXMfkbvNSa2nF",
  "key19": "3gkLTwRFKDY8ZyLAzjajA5XZuAxAFFwK6SFX8nLzobwHnF2cn3oCops9Gnvxrs5eQ8BctekXzNxLhLoiXtfekd6y",
  "key20": "4NSALyUBK4xmuxwMHH2dDkWXez3cXBAcWM8Yu2XZ8D9627fLPvNJPsxpDG6Vsg6jLsbxW4rXFQoS7W36bVrtTQXA",
  "key21": "58v9YHr4yyAY7d7K4yXyJ1t2cw6txcEmFEhwVmgnMJgVMduQLzSJwsnCL9bpfqDErEKrSjSZovNPhUJevc7Yct4g",
  "key22": "23jRprPdHfVYaqMaB6fzaYeUZEDjteAJP2vdZ4xef3Sv2gW5J1NydxKWVyvFvDWEE54xH1FZvAGUCYLb2a4UHArJ",
  "key23": "RabAJdrvEkxTdw8ajzgy5qLS9bcENMt2AUYrb94PMzkiWKBFNXY1axcRfPLBswtskCyDKS8sS1CTgPzE7aPTtoz",
  "key24": "5qXc26Djq4G9skEhcseV9d6hg8kLuYFNdhLRH3pQUjkfKZvMHF71nS725j4dPCDxP6WxVTMLwZ4z3BF1TFqksUZG",
  "key25": "VCmBWwGjH11NtjtzJRYGyska4Frxgy33CR2xkmEv83LBWsjzTaorsK9dZ6F34Fv1YHj5DG2Nq5s661x5mwQMnM1",
  "key26": "2iHYYxFvSM4oV4hRiSza5yNg9WdE4CcQQVu1fq7K8dGk3LW6yk6xomnaZBwuB2mWPsUQSCLUWDxZNQgMkvcajBUu",
  "key27": "2psUv6rsKrEVymCSAJgEPLE7N8FXt35H3RX1avgb1fgCad9U3trZwvwQ9n6ARuH2Dh5neVXJN9CZJGshRKmb3PYj",
  "key28": "bi5FVnpNVrCmVJJFVC9idUqssvPoTpqLvzvwrBDS5rP92H8ymwV2GtCitVwoqe3pP2aeqpJ4dypp8SDiAFDowPV",
  "key29": "3NGhockFJ734aAT5WiQuXmP7rWvmCQaxdQpWpU2z4QHQ8UfPttc9cZs8UukuS6nf2aWcoL5P9aAywyMRo3mn1nrY",
  "key30": "3FxeRztpUFoJVU1RWLrkyYVe78rJuUdcVTVXZuazcAcQBH4NtAf73Pm63PdKcrFNgLujN94V61oDRq2wszE4gqoG",
  "key31": "gM7GYcg5xYPxe4L181PxCbpxRWmQTYr57uNLSQRzv2LPnLsyFXX61qunWa3TrTKdaa5cizAh9jqct6bC53MHQAT",
  "key32": "5dbLRoxikdv4CrPnNp474kNnQrFzLsX2iKDPenbKvG2bfTMXyMPF4aiNM5KPUzek2J1EFt1iy9A7RLAhBLUnXroQ",
  "key33": "5ro29t7LZMyNuTRZmSSH7z44z6PrJjAQL843AMG7GqjZ58bmseLEy2PiVBJVKojRarnsMq3vX52B2d4yGFPckwQC",
  "key34": "3jzqVxTeaZeCebUCJL8xfBb4qRPoE656Js2uBSJusrXZ22wvv87VCyt2tW3AD3gw54z9JWhE5fXr6msZukzfVLsH",
  "key35": "513FLWjXzqFjq3cZ2eeBH65X9Mhmm71vzbbpdDbu7ropj7eKccEnxZaUk9LxfWugjdji1QvhvWDKNCJrh8j93ahX",
  "key36": "324oaFpgM9YvCKKpz9muTHPrNTdJcTMVXueg7dLx2i2q6gLr1CZQm7wU9wqr3A7Hg5NCntCz8cTwPB1Bi4TuGwhX",
  "key37": "54fNyL9KjMwUdS9D77qAXV82AfRctBpP8N1YC1qZHWKyS7Zq2LDP9Z8KJ1APgrnSdqnK2ehyUnKFuMCCaLTiSHc5",
  "key38": "54joD36AoRZVKj2q94vD1eGLXFDgFQeCywHZ4zZWabVzVRUbro2uJTNNmkQEBxUqBUsudRhebq8j46PadVPx6gE7",
  "key39": "495mkj6AVPj3ZdGoKuMTPBRRLTy3QY2seevcpvCxC7hhtxj2be98T1ZQ2DkPFwkU8NJEEBiitj8ZnjmDbH9zrk8P",
  "key40": "2Lg39pGvkvk4xu8V1mcAn8cAYBoVnkcpLcsg4tGuwPZBeuhBfiSH3ofZEnAHmCN41awgajVTTXT7bNkE9Cts5Nxu",
  "key41": "5tLkdnvpXZNdtQ5ZiFTMPsb9rGmLuG3gMd8m1GiwbRXggT4rpqYDoFALPSzYR6fc8GKsHdxDuPRHqugS1haEMSrp",
  "key42": "4iGjNA5nLRbPgbhcqwJi2LGGdMbpiEQAHiCwNLkXr98o5f1yay5piKW89sqoiEp3YtL7oHbNvdjbZ26btVeLcoSd",
  "key43": "5TD4MuRkL6oRwGcpSxsHxJWiz6LSEtZeQUYau6byWm2n4RrA1pxHHfLF8Wb3ivfgKETwF6VrqFPBeucTg6xTHwNv",
  "key44": "2qwkz7HJgqbBuM37FVu5yurhE2DHNGzjygiMZuUJoNrDw8EZDbQe5CtGNGbwqziE3mHbn45ca5MLaBB6hhCdgcPQ",
  "key45": "56tJ3qjTF49ZwsovbjcVxfefjTUatx5vvpaLDTQCoAT2QWwgVmkBCWiPFiF9ngeJJwXjUR5yzUHojBbsrQKiwpPU"
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
