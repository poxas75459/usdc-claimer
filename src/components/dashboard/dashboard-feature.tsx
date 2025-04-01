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
    "29ShgUmA4o7PPZ5SC6gfkzbKzjRfZsud8yRfcx31dY2arcjVyUN1FhbKPzXXjjfhs2SzV8cF1gp7CGnZ6Tp8hZD8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47ZAp4k6pMreJKaeqaj1C5mS5PmtP9MD1MyifvukcvnLrHshPsEeZn7d1kiZi9kcu5e8M1UwPPvQaKhcYb5yfDfS",
  "key1": "2FV9viEjLsAc6uAEx7gR48QkMxqnX6rkfcSsXdk3tdp77yCdSkK84nJNm7R1ydC94zQmu9pf7eLzh63tA3VGCuNf",
  "key2": "5gvZQojSGZZ574WSqWbjFarQDRuaQEBVGEKTQu3BWk5Qx4qXowZ1yWsfQpALzG35MtLNRKhNr4LiwzRpmQpz8qdR",
  "key3": "3Qw6E6emc3z2p7gBkK8BirHKXKayQ7DPVs6oYMGxEnWUjTvViBbX392Q5hb1jZRYNiDZSAc1dXiUMVbNcDPzhEes",
  "key4": "4pQY7Af8KLfJpLkzEGrJwuBKJMbk7vnyhaZgfYBUfmj93PW129Bxc6ic4UfFuwDarrC4TmX5RjK4yn6xXKR4Wo8n",
  "key5": "3BeGrBHA8twJYm3oD67rvFzkcPi7ZrKtDey5AKA4e4ukPeT1ByYc1PFvnE8Hp5boP3hxdSDJ7u6jAZ7N3nRcwrcW",
  "key6": "2yEdhiFoA4Bj4aBQg62A6EmHa1oLMqwSHAdYDvG5qBbebLqpAKDq4UmDB2st6aX3H7XgYiGryfiZtZdfKSmpcJW7",
  "key7": "3j6Smhh2PVsuxnZah9vaPX7MwNKKsLDjdurrF7t2fyDuT4FNzRoNZrifcd8TvreWqdofEYt27yRxN17TaCtjs2Hf",
  "key8": "51NYwZSmn1qDKw3gW5oYXdu12TFMCTqafK4HNxPjJETXV86R7tyy4sH6UHV2BeXNGJguBwtxnzTsQVLPFUunEKYm",
  "key9": "5TsxZnLbvveKTCrBPUpE1xn3kF7M5rWxAAMaYS61NDsaZZjbvMT93pwQmxTVWMiJ4WQQDQhcyF63HAYzCpe1ow9y",
  "key10": "3rP7f6QBwamvoNrAqQxT8hkWrQ6wfCBKbRVNf8eJcTCaEmuoxFBEKkLESZoMtCK1Am7pXfxz13pShTSWUrjV67kL",
  "key11": "5EnfDZ7WQRJRLJCJ6p8mUDMBtpTByxveiWhKeDvY2v9SGsrdnXayRKtnXuN4R1T2ZgGXmmidaPhzs2kQQVnXbkKZ",
  "key12": "6tPH5ht9iuYFQh4dMurYGwujmpX2QigNbjbJiQCWLNdf1M7Civp3czRkRVacQ1FMevknp55Ds3QQhsEzPkPLeKH",
  "key13": "36SeQocn4yo1XeZ2woCucZSecwQc7KyKhvQas5j6u5nTqpcDo6uCz22LUNsVCzALafkZd1beJn1tq2EStruxioZg",
  "key14": "2w3QiN2npTnR1Cu3z55DzyhRrc183aaMzKxaRWAfgsbyuyABZbNpj9zn7ZLpj7CTtRcDWBn8XCqMSmisx8JNwzEg",
  "key15": "63K874air9d1E4eNuT1PgjLfuBodEiLmigtBKZzV1PCqJLZeBga5f2uj6bT174aANsoAs7uMxyt4uDenKWm21w96",
  "key16": "h7Nm8ENDch89mpjfYpytAageMbcCCRHWenK3GCBSuroB81sXvx7uL94VA2JZrG6ZJUaeFGmvetia4SZ5rwetpHi",
  "key17": "5xC1tqrENGPZMbFMt1jzWvHry7gMXAcf3QLi7x62P61gQyUQ1gYdUfieekWifTC1GkqgJWFLMoA3xzSQqigj7Xzi",
  "key18": "3zi4CjqFc8tBQo5Bqi9oYK45wMDhDTF2JQQQwDJxdGYRWCE31gokiesBciBvZLePfjGcrL4XrUrDc3QPM65K9LvM",
  "key19": "618CNTy3NkkS8fyA5h2D5mQDWkbEjfhz7KCoapJupJcAZNoeEDVaGgQfQLEGeiy7FVaHtJf4vL7W1BR5yN3oKiaP",
  "key20": "4ciDaDR8DZpwQRUncCf5gC3bEraw37EEDBJAwdMTmAGsGDtmRXaYM1mDuSLgggSEZkqtzxNPKt89FkCidaz8mWWH",
  "key21": "4heaDoXAY7Y35XGeJTDtDgLyKFmNYaTzsyHcM5QAxk3eisD93pCNt5LL95SkVeNr2LZBNskt4pa98GCT9MYdxe8f",
  "key22": "26VSKGeL6xPkz4oCZqM9hpTH7NfqLjS8vDc9jzxVC84DByHagUXFoyBurtPyi1wdMy4dF4fBspHmoayKmKs4B8y4",
  "key23": "5ngSFcByJhph4RbtNBxZVJFYpswYgZ9wcNtPDTm7p5ccBL8jtfFCkujUNfacrbsPARBBkYkny4TPmcRd7eYYPcmJ",
  "key24": "3Goe4BQhoeBcTxj5HBp7FwzPie47XJpN9XaxCUCiMzEEbphdna9LucbuuixuaEbuwzVqm6n5FBKhFxkVQtcukPfp",
  "key25": "4KBpTZSFEEp58PRND7N3w1M1vibHTUfQERNP4nSXNEqTxSq7sdvdnqQPZsDeQtM2TrDx1yELcGWssH4nAMaSoyKk",
  "key26": "4wGEwiT3pt3x4eYLq871JhS91jko5KCmT15HpfST5GRyAjuDRU28cRT3vBqtNcbD22H4hAH9ixAdACdW6dyEZU8g",
  "key27": "2JVCvNZn29PrZKTGjBzuFJkpAtpYMaDMpG38t8Ut6YVBRXaDmnmem5cC5rBK5rxDNqQEWKjiw7HLihkCMbdTudj1",
  "key28": "3sqQscCqbKk87u8E5bCZMRoRuCAXZH46Jx176jCY9NDhMAyb8SaGWad54Em9eqfWZU26k8fx4nkxSUn77rAzR6WB",
  "key29": "2LMLV4x3DX956A7XdxvxoTqDa4V14Chz7AKgoGPczNSZcRcZAW3cjHmTmWBeoQ5bjUZx5TXWJmpxtvZMmjtwPaKo",
  "key30": "3DmrR6mcF6PgpJNHQQBJvcQDtNUh2GS1pFNWNndAc4ihFB6yvPLJGu5nYmP1phScXPyC1DHKedq7LYaofyRBkBPf",
  "key31": "zHWPEtQsz1WGdAB6vvwvThTQhvy5QYMGZxrLEfbiZVjRPbCm4tGHnt1s7MNMxPRFr1ZMY9ewcYnmkhd8dSuXh93",
  "key32": "2KszvWgWCUnk4VoiNapvsV5VcoHJb478haooNtpVWSoSyGCwPG8PUdWEMkcQdcjv8PFeGSHpM8CD4JmcR5i8k7sC",
  "key33": "2BT1dHeTFfJYV6kMPufSCRUAYwkCprWLvdE4TpVm5HL779rndrzVm4fbauccs4XmPfpHSwfNXbWQ3NKgUM6D1u17",
  "key34": "5oMhU24VCeQ9w127AdLCyzFDpSX3JWiJgBcFz6cSjdNfrUoUhnzNfHmgjKa4TvLB6VYtJLqAsX5nRDwZ9mCZpYrD",
  "key35": "3Vg7Vu2U21Rjk5GJtPva6q66vuyJ5jf5XfpedEvUm19ybgpCUDeEu28HBxYFUEGkmR32ZJfLYE83ye4kG9zovaX1",
  "key36": "2V7zko2FWNE7btrzhBHgeD4cG5aaJpF7xAAWXY153uc1hsZsViLnGBW9QuvNgTYWQ41zCVAfZBDiUYAmGkdzGZWP"
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
