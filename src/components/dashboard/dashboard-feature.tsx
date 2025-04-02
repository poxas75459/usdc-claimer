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
    "5CQBgLhzqU2PymwhRpFdmBLNRVjjSdgMAqHJeJDdVVj5UxxxjPhqqnAL1KJEAv7edo7C6ZPatVrMr8nzKMH6cgtT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KBeoR73zRcvPPdC7z4dyqu5VUNLLjFQZ4uFY3oqQzpHJYzwuGvo4MimnvJJ7afJAtjfgQ9WM7RCYZMBmJURc24V",
  "key1": "2F6Uc6MLZFbmvEosfqtN9aVtcKbuDFE6LYW4Ht6AzsQTGN7MuAA4zdM1YHPSG3Dog582AbZBLLQgEbHmCPndJjZN",
  "key2": "2qTiLDHNmi9yMWyUa5L4JhCBrMdemNmyrenFkgnMwrQNER1QzPshNYmxWRwqsJnPXLkGajzG4ZyJ45hpdmGHm1de",
  "key3": "3nsdVoXix4Gg3WKgFKQsA2QCBPhsHt8SVDU5vQbGLotfMKtJNRxrZUJcJA5nxVNZZCLN8qSKfBoAJaYoxs2rSihq",
  "key4": "34DHrs56FVevCKRiZ2SH47j8ZdqNLdC6iqDwCMiMt2JtFt7cMapuaPPQz1u7pw1xp47xV6A9XjmUBvxpWKZ69kis",
  "key5": "647rb3rsfXM1euifDgXYGjzqAuJU1EDrDYqudXWtvp2vGe7uJNUSiySfSPj7nKDVaZUWccPAmvEUhmhP9QyXPQCF",
  "key6": "2fog2uKqJiTMhKPtccKD5Xwqjgf1HECcb37AwKvfKJStUYwvuajKBTCDBMWq7EQ3fU8Nap6KG6219yW75f3WWbTK",
  "key7": "58MdhnBZsoiH6dHnwzcNBKQG3cFDQhNK9jdS3dv26qNY7TgXSPg3jztbCUhe3VSN1CeC2cB3Q7fU1M4RfcqUsyzP",
  "key8": "5Aw1frY7wu7Q3kgDNejSUrSY5Wjoq4uPAbKTxgyX2Qw9Vxcu9JGfoetYMk3tqa8qAKQPhrCMJkd1Dr3DTvMey85u",
  "key9": "5DLsx93o7Py6d7bZ6oCxDF64LwuUwbLjHyURjrzJvC3BYwAhS8vQ3zqujm8Q7HEreMnXx4CZfAoLC9CBELo2BG2",
  "key10": "2kRzAshzdm3N2iqtWoHiseGCkN4pxQ3d8SH9VqPnMafBxQeqKPA7x1v52GCVnEkeZfVbtvTEZTRgHY342ujut6Ro",
  "key11": "4wNBEJKe38hBXWXERJPt5ers3NPmSRaEFLqibUJPp5j8YZSehQC1oVpFhyDfDVwZsruC19rPU7MSKtXGk5qXATSr",
  "key12": "34meapW351UXfVoLDbnFpp24pRQiJ9chspmcTgLcP9qAqUHg3qqT8Wf9sCwwwTuZp8ZmcEDQyJw4ADUjhZu2Y14p",
  "key13": "5JvK4X1BU7FSdV4uF4HDdHVz7pZLsntDFDk6A9v8nSMZPyjgVqeEo5oZRkFBPmsDytX47FarAteyMf27TCxhJMLt",
  "key14": "34u73eqF3kTAqe4EeXG7iLjLfJAC69yy597rypZ6yrbDS8KUGb38jQ7SMfMTxd5TTvmMyuXQxkH9HebmK3HoY55a",
  "key15": "5ocnH6RpDe2j6XdNXwsqeZq5djduogKvqmYP2vJKB9oW2PiXmgo9P5xFKiHR2muaoHXqRCPiEN8H7uzao2fTkkc4",
  "key16": "3PvcAD5n2L47jZQpVNu42QfgujhktvU1cqgtr8pdC4VkrgUcsJJy1WqEk7Jb8jpjv1Qv7Ly3BLVcyo4dCUjm3WVo",
  "key17": "j9NNUPYcGrFsDDx4nGxHwChwDosz5QJ6eaMzSGKqscWHniZRwzLyamy8PCQNVLap4e8NEwJCQMGHM9Wtmk8DBDm",
  "key18": "3SaEEhGfvmrUCwWDuw9VCJZU8zpJcUAh5R4anTfwMe4Zo6D4DxHr9EjB11p5L7NQ6jtokcgFGq78bJwonxmLpkGm",
  "key19": "27SrwcAKDGPK5ZvKfSBzokVLauiAYRcA88WsJUebrzCYPcfzd2WRAeqdqZi79b2ymSuLR3qPKfKQrNybUNTF8L4E",
  "key20": "2yN5wgTcQzowjDLuAnxkpoac5CPduCbSKY2vNYgPTxokd589iDUMVidrAsWwRnXK4Tgfm47tU1xspA3QK98kEMik",
  "key21": "P61yMxPYsdkh6p3nBbQJW66tNbkR4ydRvXHE1UT7B2PvwrnQCfW38R2kwz2bVUuWZchRKzkBJ7SpSUG8iArzYei",
  "key22": "2PoFAsMHCHdT1TupMwttDUMVf9ex3nDFEBRBoauE9FXK3mpPkAhoTpdMJvQaMRvyRjgjQbhA1VGL6t2zNvhWED5j",
  "key23": "5Geyus9BFKe2Eqvg1F6LZ1Grp1m11ZLwPbtCfuEMioa9H2UU1CCchKbwFfgnUTmexwy2ohDKtgfaWFjGKWn7YXFm",
  "key24": "62Dmn4zBrcbkoEZNeLhxr92Z5vHfKMZvV7DVWas4kWxMUgQQa5HrAzNjTTvprTfajCowMf66cuvMYqeJSVy59WKY",
  "key25": "3fAS5BEoW5AkdiT6VSL36CVmmj72YZCVNirWtTX6EgNMDhSag3tDqi5F13o5pQufjgZzsfYRUbZtnKNirs5Go29K",
  "key26": "4pZdTaqMcXPDFMMb7TbhA8Wh7dAHvEiNspMY3xjXRj8dTr3WJ554VwN6SCUxMoSsN9uedbaPgt1ETWU8JNJ6dMAo",
  "key27": "ZcASMLavpyen4cSZqU38NMjrgCkfKFids4SKoDMyHEdAsGsj5NycVpUCGw5wEcci7hk2ikLBiyLpv82xfnN5XGc",
  "key28": "5CpaFd5D8iSWwdDBi9LVmkKnqJCvXEQZprK9qeRZ74P3FED4CzTEYLf3joqLVESrb6dFASybJ84AKU2AgU4DGJsy",
  "key29": "5g5oUQorXCEc9o7wbyFaXufnwat2fn13tRFETG9DeU618T4GB1oHabCpRDw95froXfUUSFZpJ45sdwy98GKd4iy7",
  "key30": "W1E5bkqv6PLKjkfSAL5yaCYquUc7NVKQe4CLtt54JneXB1eEW2jHiFmQV3cSK5VybRBx4WjDHNKC3ah3Z3peQRe",
  "key31": "62qsvjbgh8CBxsfn3w6rCac21j6jkC3fWnAFUDDFnbJFBHhXkauAeUCgsLEKTNpScngZeB1RyqSyATYUvayVKh64",
  "key32": "dLW3DLoodmNkHSvvWxDT1WrgdQ2pHqyMfZWshfGGmkJ85KLyHA9kENpZEuEADdesRDFvcBYLHnkKY678mTY3PYR",
  "key33": "9JwdGko9eJSn1mTbB17JsXHjnxVXkkkTj9nLDzYfCQbHpE9RURsoAc8y1nT6DFoarGjuEKFFosBR59YhYjGCg2d",
  "key34": "44AgMjooisaZzQqN6UpYXXxRZ1QN7QxsSdFLTW8C2jMzehg7G7b6uVAJqqjXwy4d6RfTuUShiHtpSbye4hwZjgtE",
  "key35": "7pFyMzGw2qB3sjuKRWRLu5169khDG5HdQNZbkrTfSE97TQztZ73wB4Pt7S3irSWkfnVGwc3ia1jf1HwhF3mbopq",
  "key36": "VBDjunrUet5HTw4sx1qYJu594pAVmNBxRcnfX43dffvBHpSMFNH8CnpsBQCWCxusLsQX5f4t1tV5wsFWYUoRmqj",
  "key37": "2K4Aq9GBdmuonN9gcajgqR72MrTDrgG1NpCZkzUL49zEHrvr4ojy3tBoQfrz8eQDuQx38cEk4Su9LMsXCASbp6QY",
  "key38": "5tCdc8wBMR9mo4fQMfjvzNhaPhN2GNHdNsga3SmZvQ8AZS1e3CHgGzR1gjnUd6jTa69mYeW71GtkrRu958GUgmEB",
  "key39": "4u1AucSbUtqktDytmxLCuNZkoro6nmaWDLm5w8AQbpLyMYm5Hk1wz7jg6MYA5vyFHer8aNfDwYrgcZwF3tkjkvB7",
  "key40": "22vvkx8vo1WeDdTdsLy8GYqoMDNE3W7Tu5hMj3XFnB1E2vQuSt9WEmwDATHqqKi1pPUA87MM1DXVpywFjULC3qmD",
  "key41": "46BNjGuoRrjSjiWYpWj7TqbJbBeRFRsyHmUcHmBb17quNQroQQEwDKZgLs3sDvSp9a5PvNUuwi9BjQjBvo38NJXe",
  "key42": "4V8mMnYTjDNZkw7ufvC2BNX3HT5Bbb78cKE8y58HwLqrY6JzJ92VHCpJo6XyfzcXWSo5MfuyZUgUJfXcsrLcxr7N",
  "key43": "F8JuNWggG1Wqj2jSo3VU24UsVoYVdXsQA5fFugMtaachynd1ZTFYf1ntFUeD3QauzhpoTxucdeMvx3kRUUqwkzq",
  "key44": "5nSuHrVbHvBc6vXes9s1aaZw8F4XhLzsy3vhNN4yQKy7XJZL93FX8ChKEXNHZTrBtHs9shagF5sCfNToWYGRfpV3",
  "key45": "58hDbCRaiCTyaX5uWLv2ZYd413rKLxpgFx4dccHpXmwr5nYyUrvdTpr5wMme9a4BfUEgHNq6oesALkU7hw8sQZdT",
  "key46": "3NUNyGAV5h5BDcNdUBNrdhdUnfgxmw5GDGa2FNAZVjucoqnRLu7rw5VzWLQN1iFXwNTg4pdskaJYnENvY28GoP6K"
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
