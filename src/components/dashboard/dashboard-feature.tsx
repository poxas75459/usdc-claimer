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
    "4CmKz4hmjvrMusLZN3gNGtT2aB8ktuwGBnxzeyP8gjKAptSHgRdQksRcbSZbq6uAzNFiZqzJF7yeCwZXLvDdr2d2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NWAmcScf1PY9uYCJjt1CGpVHiAGfHE83GZJSkMLB9F8bi8MSHRhqGWFN9o5pVzyLoQiGkjDZZ3jZJ21ExThjiuN",
  "key1": "jEJKDAMFesZw26BdHdnSDJVF9gXfnNT3rDP1s6AU75GEzNc3EhT3zTrYLgGXjmgjGhnFswfEyreDX5NHcR9xAKk",
  "key2": "3hAstMtFeFhowdPnPtmSt65SZ9FMxG93egzVb7CoHjYXD4BB6UEf4xHxkiLkbu1Z48A8KW4shAYWCBW5WKBBMnPt",
  "key3": "21stq6o4trSRg2fMDyxC6MBJyAcVzyoW8tamSy5j6SUxfaKEuaWnsEdzGT8qUxnpMGD1efrfMbYvc4v2voJ3LMRQ",
  "key4": "5LvVdvqu7bkbZbwdz1V17DpLga1gfQtT9i3gUFiAEnSUaGN5JhCySrF1AKaM2AJzULnqXaK5w4A4Mfaskho7v31z",
  "key5": "1Gm4PR9gkytqSkUFV5ra3R2At5sqEApQBs5AFayo2iswFamdTZtmHeJ3VS1KgEswTF5E3owbUtyj9hphUrKZfc8",
  "key6": "5ou58cPWiyQbi8ptVMPGkUTvoG8jgMMhXWqT4dK7v9WHwpdfzBpXoEKWxA2h71974itY8HfJVKnBXxaodm4HjUTV",
  "key7": "2ieHeUKLjbBBpSsxPE9dfk6ABC2a9amcZnUAwbDuxrMncrCcS9GA6FuScWkJbgpiS8qjjMF8Hd98eZSdJ3SffZpR",
  "key8": "4KMoPQzYWwhK4QvS69HbzDrdZqH8T5W3qkjJJqKpxz6yaeBcGc9dEbPj4RbhZZMiBHyybsGHFLPWa3pZN7j3if1h",
  "key9": "2dufZzx8PGLJUT711Cs3xPs6P8GsUkRqofYdj6ceo3daEScCWoKUNbDYjHHcMk4f4Ke5k39ZyZPvhr5QgQ72vNzX",
  "key10": "2eypSnTMfv7arxEzfr2WCuoW3ggdzxpvQpJijuoRTbVmeAyRN77AXbcDndGgSDJKDpP5z3qB3tcYx3cyehHRpG2U",
  "key11": "548XToDHLwdYL7DyQEshtLz9itkvhPsaEnxMJux921GJyV2QJJYrQKWzLxW8Qzyr19UYhS1WYvQJEQJzyS1uAFqs",
  "key12": "sYfEHQKiUi3JNEpbSR49zGWqDDFKHUpyrXyziXtPxNfkRYPqzVSU4r6pCGjRKu9p1H3zn3pAryXjTSMK2sNGE4J",
  "key13": "5CYMdJnSHyZi2PEz2835oAfRyt5KuuiBHykwTkJTWGLXUUJHkTJZ2XKWYnVrDBb9iFSQXXPQeN8venHi2GhCLC33",
  "key14": "q4quH7L71e7b7JzFu6pz151zY3kvxXTkLvyPE2Ghsq9DCn31s6PaF3au5QhFpZmWyTeiFuGUPZriNfm9sbvrJ2e",
  "key15": "2yCafeGhNRnsMeA3fj9ZAVG8QYkYgYHJbeDoVVM1UdFqfoStswMmWVSp68XFjkS7UobAUhPdWrKBLBtnz63QLN3L",
  "key16": "4xYji6XKBPDKgi5yLpyq4LDjujQ3yqA8NiC4BmLgJBuvPbAxLWe3E3Mjt4Fpqd2t891xCpTUAQajgpJykWARD5hK",
  "key17": "3X5q7ELEyTBZ47qQRUVvZgGzqazVA4ebnEzBhMBpbLNE9dLv3KiimhiijUfTJvbUxvAN2HdCNrBz6EBWckhm3LJH",
  "key18": "BedUAZ3ELEkhZwjPNyU45GgCCaaCV9jyba5Ef312R3fuz7BTf36fFv7Vmn2CqwxdDpXW2xBXYUQy7iypHRRAqV8",
  "key19": "2XjJNvngGmA3K66UQYeed5BEVLQWTcnzdPbDPzmCaXwvYcR7qh25Laj3FtyMB2AoJvr8yVUea88Yrzp73qKHTS6S",
  "key20": "4DczG4k3DLxWEWyf4iK4p5JDen3fFfg9FSgPHS6yc3yJQYyPqGsS1zRDs8AHxL6HWt3NpGSiM5sHPHTcXnPei6Bq",
  "key21": "4YX3RJQpzJUNqEWcuaqfHNVYgmrQZQTJ7QuRfLHtRW5t1TcVvoiWofEH2bFHAJ2CL7SHPCftN6fs6Mjwrif5d414",
  "key22": "4Gc98reAoy9VspRYrUYg4e8huqbP2S5FyHoDydFw9WKbuxPUP4T1yoLAeCunU4xJYhxqLX2UdyNLj11HK7sArKQx",
  "key23": "C4ehvrGHWNTuJXeqwFw9v6UxjdGcuZwqmmUZmQgBL16P5A2JE1i4PnL3jVJaoNM7oLaidNQnDcXYSYpZcTSPB49",
  "key24": "64CcDpyPxqXMQgrAhyorm9aJVVoy2eTZqvU3Di3jFrrJn3hgTNRkfprsfrnd3Avktiz4YKNxWMyzhcmJK5TbZPjV",
  "key25": "2ktYqxDNY3EAF2DznWiSdewHHCF6nSS8P29dYXioCnT1S1YJH2tr7ey3T1LHssARm14dMciupCQQZDPi9YFzbKWU",
  "key26": "4n3PCdpdMXoytcmfE4oTr81ArC2yyshqudsUYsKSiZrZJEphzbiMnecd7H57JD8fF8bqwN57RCt3sdvz2AGVoD2J",
  "key27": "2Rhae5boS7qxU64ytrkA7WzQQh3wsyMFHPP9BA3zmJUsZjLSgFgnVwffyA677rH96F6i5MCy44ic4roamMSYbBuu",
  "key28": "4qcEp9z4CmGBzrvNeBe6t9FZoKmfo3huysRxeWqDWft2BwDj3KebLmy1sXkuobL9nMsFmnQrwic8hU2osv9uvqtn",
  "key29": "48Gq74WLr2N22BWrLvCY5w3bY6zFKaD2ituZjqaNZJCdRVJwg7NwLzPw5YJj1qKPw1MvtJwFpFTQjuduzKxGxUNK",
  "key30": "5kkF48SWsYq2GNjW5YZi159itVkBCshy6QNygiJBDysEJAZKhLuF4NEtDnxmjDfCUKquptfZ24BEq9YqratJL1oJ",
  "key31": "4tTkiEoXCndZ4YNdCYk8gEZkNfSXteqhEMfGnd353sTqye7A3A4vcNmUcCNSubQCZULRW79etYCfJYh67XgcXNbP",
  "key32": "4pW7pYEE6jNia8Q5PXTcf8y4vCN75oQszcedW7MTgJwE5jVfwnxiHRneAkveMLjwKcd7kD3cKGpXYEGExQmcxvqZ",
  "key33": "51482C9CUBqtDqU3g9EWHFphoA9mi2xsfPRUrXwxfC4LWcbkZusq3KUvnvebQXpSxX7vKfgki8QjdQwUXW56eigg"
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
