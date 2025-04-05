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
    "qHHPiFTwq7YruiAuJFzLjxY721w1BuRYn4LPbLgVak4xoNdF3cE1aXv7FAgiCEsgTwFMpE8co5ZXR9K6GfXBuyD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qJMSHed7sxYnVBxZb7fbjPKrypsQA2FMXfdLpw1Vmegb5w5BwCveAjpNs1vaGm5emfReRYPbG9QZsXNhT1NQTsM",
  "key1": "4yqEQ8ykQe9Rn6mjsSdPjb5Bpu7QkGYcS9Sy5LaRnLjuDCb57KPzw8zAXnUDX92ndp36bFKDuaeSWWGTGvXZbSRp",
  "key2": "2JDxK6beSHqfGN4gb5YDLmUXXBWX9gfTErZ8w7YLz9gdDAcpqcoRuXFZLhCUiHQydX7KiqdVSQ998viYX9zn3TN2",
  "key3": "41mk1muyukHgvmT2qfMB7xdJJiU6CAju3bqRS1icq62QFHFHYb9YW9d2SXfofFaJ3vKUcdWxtiHGf1ShMVueq4BR",
  "key4": "4GNp7FTAFNQeqPRQ4QrwEfrsfVEQ6Umzv9fhChBGXor9t62qWSLMDx7NZiHtJMNey8wj7gQouWDDRSzHwr1rYibc",
  "key5": "2B8FehY9khAhKw44be428z9J4cwdcwJjRRFkbF57ULCQ1nuzTTKiGzJ2SLczqUkxyaBEqWFZsgHPgDumUSfk33b",
  "key6": "4PsYSQ6zFGSdMyWAAaWBGdAEaQs5pUXrUbbJHppw4VGFKHCWRoQMPSpRxaQjDLEUBtm6YNw1SozYowZWZqu3XGJv",
  "key7": "2xo9ARyYTYvUve6J85Fz6yWTiae6noTVgCXhwqERs2xztSkLmtDiEAqDPH3BMUrUVMMxwSUBkEg81A43zysLYfEo",
  "key8": "3cTqFVkE2ncaHT1d2Tar6Ze6uoh2Em6EaV3mkeoMkBCuFxZBHEoxZkTszR5SaWLrDj85HuXtayPQyG12zoEUQejM",
  "key9": "2URagCiJqKEyZZjsDfoocVGyYrboQkBX16nrnK49qPQBmefPW2SpFaMt29snscUn7BvacTc2s6SVZDGFfeLG2yjh",
  "key10": "2UdXCqhoW5xSkGC34hTkdzyA1pg6a4MkxQCRZr5v9KTgRsNgkEpyXobEhQmVRHmf59598361uRXXFCruM3RUcUcB",
  "key11": "58X2rJjCazbtHJY8dX6rgK1mzyvCVhMtw7CoBSw8FsesLE8xGQAhNviP6VThdTb1SqgYrvoUffkAcdG5x3Q1pERb",
  "key12": "jonTUkW5FsvKynRMqFiDotTpD5PPoTR7Wvo8FAfiHbzGngHBfoQH3AUTjmpexBFfS3d4tZUzXxCLrbLq7hVSnmP",
  "key13": "2tuFRPn2aCSbXWy3uL8npc51pBLqyKWE3S7iT9GS1TAAzPSvKha7jYZLZ3bYbLomWDrBx43KxS9dsDgJHEPVKEXG",
  "key14": "4nrgUPhAzoF8rthdEzQ31wg1ajsJKw5LUdeVVYUszzoLrJQ2P9jm5xUiPkj1YNuTdgP1hfCy9zUmri1Ge5TW2TQL",
  "key15": "2AGZUoqXLyqH5BstNUCP5CLXcNfGut4eXxdkPTD1vNR85ZxTM1Pqcxdrc2nSuBgG5Xu8ieUwnrM8i4zLMPXtgATA",
  "key16": "PRuQa3r4jETFURnmeFGFDsyD5KxumXVFZuUhHkMqHS7ftYPWoXC79ACeissEcvzeq6Gf5gdJLfwRVEVvxBWf8VC",
  "key17": "539sH11KcU2XB476N6VScXQSqzsmDnUSGhMWAtGbHLM1tBLspMebBydEd31qASskYdYqNEgK4ECbDkkhYFcbmQHs",
  "key18": "3nm8EXwccLGFUAnM2QwKmePtZFa3H2FWoEmSWmPg36t3VjexGK4gg8AvwUXBfbLZRKb5euW8FinAq5gYeqVpU6rU",
  "key19": "2ihhpnX51jzdnBmGFXQBeifexWA11R9DyJ1uT74Ghbv23ekA8vBd2bvrhfSieXa5NeMqU9n6cBx81XLiDN1opYzR",
  "key20": "48KykUGVyC84CgPy1NPXinv6w4ARtA9Fd2M4bJY5nVGRochpTj3wFGzL62igj6Cigk7sNoHi16xC5XFXT7Zw7cBq",
  "key21": "3vBAtLw2xFMdDNA7uJGyXNQ3kByhAAm484pNxMHRjAXjVTyHzcQcxbheT7soACtmjo3EDDzyczLjgbGKCfNMEdLt",
  "key22": "3NfiacAYWYPXc1NpkcxQCSufi1gX4LoTxXMkJbim7e2cE6KxHvZLT2bkTZ9NjEs12TBe55usDC5qa5edqbw8E4xV",
  "key23": "4yCXyYqmJrV9SsRk88sxmsp3kjyejBSxQc4F4rL6gXy2rcFrtMXE2zHZfz27xQgCnniTLoWJpw8NRMov4ZDMdDca",
  "key24": "3bE9K1gYjS91qUR3LgDYVxfsL53T8xueLQ3Ng5VYcwGYExdu2RYADSYCBGFb1RxaKXnFGqbMry3yGJMaXxKqXkLD",
  "key25": "4L4g5ZuCxrujB4c2UmgkBoM1h2kvxUXgh54AKo9NWgQU9MjXucdVUybvcQivHiU69fG6VUhXmpAS6RLPFYjwjMja",
  "key26": "4ZY1CQL6NRSBSWpy21Ak75q9NceB7p3f5DRL8wxaPzc85RiRNEEvCtabQkzM5RSqLNgdDemY8D9XESEfEixa2U6y",
  "key27": "hRZjWa4bUgu34DQr5TmK3yqpmC7tpzFa1oZCycSAmz2i9Uyuhoocm9SuePuf8z6scPgan8JfV5d2qW9uQ7XYjmb",
  "key28": "9hrozzjXszkfTqmQk85UtqdqNn6KCJe5ULmEg38sbSr4KFDBpThkak5YnWZeUgRN5fJgEL8dmPvaBXyZmuokFk9",
  "key29": "4WyxAjmYJo4HwgFKnsWoUam9zAsA1GqwN24ZmqJhRGKfV14zgXbEkwbbDghrJvngcodcND73Bvk83rY1pBL9suMu",
  "key30": "oVkwrFno527T6LNKjzgkFg54Bc3oDaakVnegGDhWUUVQbcpmVwYzM4iyHrrFAuBe8sKStQXikHP2XSQkp8sbaDh",
  "key31": "535dePHjq4a1UL1fjUDVynuNG9pKa6v3V4nj6bjqKzBdqnxUvbFPX1Z6W6Yy3JQBZKB1cTU4hvc8xhf52cwokHXc",
  "key32": "3pMRPMo6texW58d5PnXYFw1bmjeAa4ws1FkMAgL1nbz2zHHZMFAjBV2tgmaKMqTsQZMwQanDTqZaKWScPg8hdAFc",
  "key33": "U6u4JZDMFRqChsTi9mdP16AsaBWVXCPbuUVKJSd3YZNkdp4DbUvaCN75T4vhWWMUXyodCqRTcQJHrLAd77Aa1fD",
  "key34": "3XKBqi7h5Gqy3FmXnP6uPJFgqhTDpauD2iUpi6TUXeno6C3ah9ePULKiXWjYcxnJh5hUpNtDxBUNQ6YUADX6eCFW",
  "key35": "4DfEPMosNva5fYcp1SShMmS44Fv3YFVQCWAmZ1JD6k2AamaA6XETXUV1hH3Zwhn4yR5iLvAMxFsAJPCmgcjtnSw9",
  "key36": "7TRYNPLMzfZSKyrEGSjfQoXKDZmtvamquDCGtDprNgTh6hWkQs6gHmv25BdjsvaB1q6V3AnQL1vkBXCeTqAFUwK",
  "key37": "2WavGXkVn2zxBuyuHydvXw15U1NqY7ELq5c7D82tdM1xg156i7DD2nJuCWHfr59vK1CgppJ8CzJDSSTGLwJ59hRo",
  "key38": "41p2gVjbN61Au77Y6JjrccbRxiWtip7Le8Vum7g86Hp8nSg1D5u2EDLcxcBFjvk1zUyefdN1qNorCkxAaPF4FKgx",
  "key39": "2MC4A1HswfhZfkpDdgMKSiqqrubpFKARgzsU2uh3gByjzEKC7aYvXaJikUKAvDJssMEWF91xBAzCGJS4hEGAThYs",
  "key40": "JHrW1brEYuTrJEPQ1vcEQDZRY7TzBRJbz497Deij7WUc3qSHthUZ4pC9XxwjNm69RFNpH9RCprhoBvGxH6g5iaP",
  "key41": "AWAKckaixbf3KX4jx8inDTHY4k3weF7MuLJvcSBqrEoPDUBm64mYPzDnprySyYNQmPBrKHujPhgarByc3kzwZbg",
  "key42": "5jLTDYSit5vYcwyybHM9uqL31aiDGHerBUnHidRq8j3CVozj8Zfq14pBLaVTeN1ySyeLVnn1qM8iUQ1BpNKV4V3n",
  "key43": "2aaRVf47K4zFaLUEJ1RRtRSFkRNafABbBWFNDx9yVxoF1nRuW8W1Pj8feoejmQzKmUabaHzhaP9o5hMoFK1YrGNm",
  "key44": "3VmJCpnU6gKeCzKJ2hVUa3pBpVY5qswzDnzc6UG9ymNurs7dP2iwAdQ52CVvBzSpUM5DxFPUWNRf25ZCrcLgRCnJ",
  "key45": "3fuKgGgnCf6BrSRR8LzbiwtcST8CWf1kJHJf6cFvLjbi2ApJFjHxPx7x15D2oBRGFJcBjHEXoSC6uEmCh9hQC63p",
  "key46": "RspezZUspDRjMQSpAqM2D5EqQBVZNuxzeergzNU1oXWPLQGzhRfP9Mwci9xgTygDzH9zcG5B6LXe89aTy7DybvR",
  "key47": "2XWf7pcG9jXujrMHo1wXwdNkYGhrymuDcCMD6UzF5DUTaqpFPwKk4DqhiFNk4HtzXrS1U1WDsgBktVPH9cTGx48Q",
  "key48": "36xxt1VuTmxm83akTY2nB4GXW1gJNa5fUj368s8uUnAuxc6bLVqiLzy4yS5xTxCeE8eGG9zJkGddiNGNhxtnm88j",
  "key49": "3DSudSNHf2nTNWio4RWtcsp7Qq137ioyTQqaYsLv1wa9NPXmdzzTEPdnAreSFwJdk7rbeuLFa39bbPdc5UVRgjD1"
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
