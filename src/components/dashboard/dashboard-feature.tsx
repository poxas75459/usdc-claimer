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
    "2HZsXmogNRZ4ERjisEpwixLaMWnAn3e98eSWBk3yuo7wF1Fy6uMNZuRecTiMJBN72bZm4AnVZULYnf8RBUN8FTJc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TsZsj1s9zsKmF94xueGoFhU7QPWummNkrNpyWDFwRovYdqmMTc6WuaVo9ZyQLpdC25hTkFnYUoZB1QrUPLhiQBC",
  "key1": "25o2ZDjbao2AQMoNLMAmcwvqfqBaApfTaS7aRE62ZvBpJFJ5FKCw9Q4i62b22C5Hs8yEoK3gSHcwWZ89bm7fnoEi",
  "key2": "2XaNraNVqAjRiyQQVRsqosjpJSvfPyVXcAESj9zyQYHuLZVHz3YhTDxwYXi3X7W1iEcnRkJ4oLassbpaRB5Bo3EA",
  "key3": "292ffXPJzCjCMFB5YhwKHCgGjGn5Ua7NGvNmm8G3Lpfxir6HVqYSQKpg6BJewy8aCNYA8kS4FtxhEGT8SFceMA9k",
  "key4": "31ZLYDvnrpQxsxJUVe3oFhzs6Wg2qr7vMeA1A7BqFJgmbQPGTPrAKxgsSYNXPg9xfX9JnDKpdp147NSEtNqyubLv",
  "key5": "44Q6DYVu4fv3p6Npzk7c2yuvoD3GD6DtQK2Yz1gWekXD32jCc5oQvLNWFr5oeftoeaqkbMBfUENDXdo66iXpwoYx",
  "key6": "4MpkTTQn5rQz6LEYrvcU8p6jYxXGo52Kb1w3BkDegbzkHVP3Qe6Eu9uZULJDFFdxYNsmWXuuWCMbcZHqRbSmepgZ",
  "key7": "4vBHWFSDvPHXWkVqg7GS4QGP3ndsvZCnqKTifkMeTkGHzNShesJqcLGDascV8ZtvFC3GBayYHVsXXJmd5reJPKPx",
  "key8": "36PXEUDfgrKiLz6ZyxXzm1V2gfBMmS55GQthy9ZxqP52VLA9s2TXFBXnt2WKsmUnhaRv2xGLjAkf8XgeKqNkqNKx",
  "key9": "2UqbToUyPepgAtxjKg7nvZbCMychqC1sZyi3d7QTpQSdNAjGJt4ZjiJf1dG8KKET3YnocRjNbUhk8Rt8DpZ6Ff44",
  "key10": "56z1D3gW3udkbnCoPHQ4ymGC9VvARNdZsLHJ4g4fvaQvw81iqhbvWvHSYvrTMQMsv1jjkkVwTX2NnZG9VbW6N96",
  "key11": "5NzExAAthMNrc5LCnd4cimTwdYyP43PujTiotwhX4STSMwgYVspMznSnL6RKCkE4JMUnRVBJnVX3hm1qQE3Derrq",
  "key12": "5NTmTZbKRNzx216RnLtMtJN91sJWKqd8VWEm8sAYgzecGCWTgiFdc9iyumGdhpm27iG2i3PwhP19ofjwJQJA9956",
  "key13": "9m7845ei2skMYUcyrf4E7H7tSqKjQCKsZVZ6M3jEPLkAtLwwENG6PikfA18efkFDLn6P8sP1aVh4cSbvdEwNJ77",
  "key14": "316y7xvQbGRxUExXC52sg9hmVoEx9SiESkxjvU43nrnSVfFALm7Xk7j3LkXVdRci5JRZbNX6td21CUpGs3xLVsD4",
  "key15": "qXXJRoMuVAyZMAsa4MSpFLwHqwREvT46FfBuyJgKMJa7oiw8vzcEuAN1t6XtN63fxoWANiV9rEjfx7RLLw4xVjj",
  "key16": "3qvjxCZVSXn1gMLkSJMcuik5GpjpajmaVruKQ7vzKgUEQiTAGiBkQGXe99bq33RwVGiSMsP3hizMSdau6KxsHXfG",
  "key17": "45zR96QepFT2KyYXMZogFFifKgiTAUPbjWqBTxNUf6AX6MKARvETf8W1zxW6ERgVgR26nM2ZZSNzSRWqyMcmAsLM",
  "key18": "28ozDMj5amsJL7ZmGnpKKWetHBqckWX9Dw9aEbdbLrhsU1VwvjwFok4UZP84Yz9b2krmCL3urYYsyKVBoHXev14N",
  "key19": "3BydQ4PX8yqVwudtG4fY2UQzs3SWqCMztA7uBcfzqmWyKy6hRh3gXWLk16V4BT4u1EBHfSGhXWJApCqkxzS37K4m",
  "key20": "4ZUkJSeYDpQ1tX2fLWucdQSfWizq9eSLheMsuvUXVtbXyLcfHo36XPT57P2LLSCZrXG7YNanKfnDM3RcSXDNY8oE",
  "key21": "2vnfPLVrNXuZGSwuXcerSayxBDUmpEtTygNGoDpX9RQKUgNxddctnkGrhhL62eVzM5NteVG3nFqnMpUM7GV2FLd3",
  "key22": "3FfRE3vXWtF8nzgfPhoRVF4hRUuU9F3tsYqagLFf9kMi8zgv1DMszMfGeZxjHfv1DppYt2UBBPrk4ih4y4v6b97G",
  "key23": "2dUyjZVFwwmYx5g9LCu8F2Ci22ky3MATorgEUk2BPTSdEbEwtB5WrpxrSwCNKypmedco3m9MhCWZaiTzigMbhDsV",
  "key24": "ZP6mx4WEL1Vv3M9kgamTfoEYyfRKcrnn58CBXuWnj4tyU4vtBKcoxE8CwuCDCtsTVZYnUVzBKtKCKRnToDJqa5v",
  "key25": "s2JxCMJtStkmJUrnSnsZ5bwdLPQfpmJutJoJX8CueGhqxJ6MYAiUk6ZrBh9AEFU9DuQasXApQZaRP3PsLUwAagw",
  "key26": "2bAuMhww6ie8abeF2eHkgEHYf5egChZs9HKqYtQrp3FEyNEt1XN6HzYS3DgNQTkJPzFQb9wdLywzjp1UcwkFcQVM",
  "key27": "j2CtfkGgZDbjj13QDhnsco3FS2LSNHM6iWS5RRd6AyWQs2BVuwxkxjuNpbFGGdm5MuGswDm8zakK7P6MoR4egwU",
  "key28": "4ZRVrDpxvNXqHqdzWCRZL2TTaQMC8HCCzMEZEWzwTqTYJS7i4xAbyUm5sJNjsHC2FZ4ayZH6LGvWzuULADFjNzMH",
  "key29": "k2cbVumneC9eUnYeUqyp8kkf4anudSrwXSP96ZwgFDmXu4M8XLVrsrPXFyX17joTezHnz7q9Ngu1HcGVKV2mB4T",
  "key30": "VPLSM1zKEuV5zj71mX2xvaueLNXhHFJvSKg3PGGjZ442cpYkFJbixHRqAuWUrQZkG569ErubPsdTD42PEWfkv1E",
  "key31": "2Yb3ifQhaUTCfxDARiMfSRmqFkXmxRxunA4NyBmaKeF98xQs4VSDpKkPBe98mTvYbLABA2dnT52w2KPm1Erc6d9i",
  "key32": "2YSsNogfbwXJKC3i1GzWJr1pqfwDkKJV1waYLaK7Hw3iPWteHMogTfN2hMNThYsPfmzkgNY3CY7NQHE3Vp7biuzt",
  "key33": "47M8deJQdDJ7wsuaid1gm2VMWVLwaUa6ArNJ2U9bMHyEqj8ZNi2qmiP2P3Me2n5FofuKPMwwJg47AdwYH8FZC61y",
  "key34": "3SWDSjrynS4sAj9oEdDsC8q9weyBfwDMVNR6NNsGCCMgPMRqatJfhpN2to4v99aAUtpwCzPSnNop2M5DFe1HDve1",
  "key35": "3qerPh6pStfjaJDQx3699cmfbG71FA6hv58ZP9oadijPuBBYu9qDXtTbes8gbnr6aN4uWmrKMqHhebS2gYGAZfSe",
  "key36": "2x2EsS8McTYWkGkVsDJukX25wzaEoCyBgYr4KVTyv6EM2X8L2ByjAG4TqKRHTqzqhsyMr43T9rt1TgpGqY4a2Nwf",
  "key37": "4oqPmsuwx67Sd1yT1htw5tLp7145NEu2pNqqar6VX6i5HjRr16MCZTyPUrS6z9ifSL1oU8wjrou1JLNDeq5jEsPv"
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
