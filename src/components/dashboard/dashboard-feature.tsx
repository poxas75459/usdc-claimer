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
    "xdzM1nPBNiNPAqCkz72iUMQpSu1XdqXEZaWgBv2anhg1Hi2US5Lp2xFG4F2daZhTPZUv47z8F27VC4b4S5azkfP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "389Lv6PpPjMUR1kLMajYQv6diYWJR4FaXSfQnDk6NqfC6nCCUYbuXGqGhoaXK9TdnUmeoaYiqXSMQ54oVuKaATuj",
  "key1": "xrJoiPbjf5A7KLKwsKgN9xBphF824fcVMjKcxDabdRJ2RRH1PDS7hLP4Y7CEnzgQiNM7DcmEhuAtuRDtNgjZ8Lj",
  "key2": "3e1pK5Ym91zWcejPEMQd86FG8nECbyFa8mHT6NTuQhp5r71rRoYCmUGpVrsM9QcZ89LJ919Ki96i9xjWiS1MFRYF",
  "key3": "5PEqPbpvvmdKRhJaL5cjtR9RJoBFnhsujrwhzWFy97KrtCBek7Bto8xdiEUt8SUHPWTa8yoMgo8vsLNUcntWfnkT",
  "key4": "2bDc2aiE79B4o4wiUGtR6wkgbiFhzT365N9xhgwHpZSJovxuGYNEXpGkSpA3KNQBCKx31a1L4Fnw8zjKcQipKBy7",
  "key5": "3i8wGTH6u8KsSiy98R5x3JHBjAvvbcfD9QGgpkY2YJa6r6J5EAyKgbdfoCd2GDHV2QZ4AG6tULubMhb16gt5ydHQ",
  "key6": "es8uDGM4NTZNcTdL8UakSEqB9yJ13kx9k7qSiDE7KanJkBznUkfmLn9vG9MZpeudWdP9vCctmxXUKpgt1vowDkn",
  "key7": "41kfreA86KLTUF8YmGoaLgZi1bRGAXeZ4CoTH7yzUNjxb4T7Tj8GWUxpUx5w55APjiVH9J93ibHa7EhgxizpdTfx",
  "key8": "4ZQBUSFjeuPeoVJKst2GUnBMQo6m1JdqZj8pL6hFV5MpkHagQrmeXKQKKzYxhvEZVdg2XSusoWJvJPohjVyK8Vct",
  "key9": "2s6i1rMrKXEWB3iTX4KDGEAQdV7WQ9fRhESG1eTEgUN5i8ufhpghmhea5Xrs15vN5SPU4heqvHBajD8s747rC738",
  "key10": "3Lgu2RoZFu6EpV47849B1XjdyoxZpCpu3W6remNFvno9ZDBPiXFx9Ta8QpuM9fVZ5e9ZhTmJYHmFJCRkqgQsda8J",
  "key11": "4niCpHVfRtWYZtHR67LwDgP9p5iL7FfjzYi4CYULny6EXe8fBWPAw2qe82fkEuRueFwBSgegFghp2xwcYJCFXHfo",
  "key12": "baE22TfJPSvwP4AAYRxWsLTL3qnjXwvU7BA1MFH1wcZMgXmrrKpEcrpkZjjAU4VQ7gBLC2mCrDrdYR91mtFWNKD",
  "key13": "52cWMDpMz8eavdYpXZtdek8cdypqeib3wwXYYR7FLS3iDvPL6RCanZ7T499LWWMFbuHcwPuQwymzyvpjmhvps5MQ",
  "key14": "35F5oQaqWEKa2vEZ7fQ2tZ6B2VzrJ2KhXoP8PYd4PPQEwmAmBBQ6ATt7KYbn7FTe8neZgVgsKuYzNfW9Z4PhNtsV",
  "key15": "5VnckgZTKrVywQ3wHvFKWyGtKzxiRb4h1uzExKd7aXtQfzath1zrLaHJtXW5jMGqfJv28p5EbxVUn3erQhFDgm3D",
  "key16": "3f3krkF3uVWSzrAxcAV4h2dWTUhvUhYwpt6JFDqhkt2HzGvRcrbG9zdkgggifjFSkLJHoBUGbpFgE4kssxwCx6X1",
  "key17": "2mTE5h4ungMo1CFTYLx6N85JRj3FGpMyapq3e25Swrfjve5YEtZPBtDf66K1qJkKxoYTwUV2Bp1z8u5BHhx7ZEwE",
  "key18": "339d666aV2bddMPmBNbWJKGibXF1yfTXSMhNnMYdbbEv6cpo7d4aoYRzAJ3NekcK1suRtSUyEVE8tFkoxgFscRPj",
  "key19": "jmLMAH3hWcuFGpv6ezabX3iGqjjHD4NFRJhWYP6oLXZVJawmc328E7K6ZNDwzx5U9tzPCALcHuprrQrZMXuUwkj",
  "key20": "2jYS2ET71z9c24dhAeUzhiiBzdfTVHMzfEcVEdSsSsUWknQK64CzvCainUjBykNo5QAQbwAtsxR7v2UR6YVcYTWR",
  "key21": "4pQt74xFV7GpuTEkvLW5gNNEf12RA5mHc7Gft88eSu6PahJJyzvLbLGUHm4rR6hv1jLprcMKkJsuhPkjNvzjbSSR",
  "key22": "3LyMHMHb2zH2EZcw4Hn5zFAB6KqPYwmQWbydQtAgvgfsovPh5bUWL8LAHxcbY7qCFryRMHqSb2TJ5KrjwCJjV2pA",
  "key23": "46aLdQPBESwFBW2eePweGS1trfuNVjm49L3vcQCsifU92kp8d63cBJMKUgpUji4CuZeE95Qnsuj5J3wQ3d17BSMf",
  "key24": "4y5qnx92DXm9uZsP1ghV6qdCN9TtPhk68Tt4PwSpgYiXpiQJHmT6kTLdDh54eEECwT1KhGRwAFBpTJ9doQ5fAAgW",
  "key25": "4xrjpKc322CvjKdYxytX3TgkVeztEZNPEp3kwJqTk1x59fTEeD5HvY96tTJXi6tJoox57ty9KrZFVs59xLzDwdpU",
  "key26": "4ox46qk1HpbajhpH5nCmxBZA88ucoLSEsxKe6RQsfU4VYj7yLzaDLg22cdTBy81GuimFCP61H32YswDeHeLNuorC",
  "key27": "5pN5w4Gnk1QTnzraxg56yz9nESSiQAnm1uugoL9F2wbpawAPco7JLA8kKkKwXr4x636wTCkKWfiY7NjReMgL3vLD",
  "key28": "2Z5Hb3K7KcvFLRtE4eRpN1rsWT4uWCLhfSmrU766n82kzG7ARK6E83YDQJVBpane5XkrgmVCyLbkd2gJYbquAs71",
  "key29": "3dpe5DSNQYSw3PjqKTQmNzsjgJUfy282YKYjF7W29Apv128RGEXh3LKsrCotGcGdL3hndp1aXJtsqwQWNsvBvfYA",
  "key30": "4J6tAZwexWrMeTvTiG8dJgrRcjncGDMnEEYEyRxxjP4BMqwX4bEDE1J1SyvyL8nYPKaJQM6W6yqbpJ5d9nnjkKL7",
  "key31": "YkzYvWw9Png4KjsunR2e8eByeLWxeMJ39cZNxPDcxD8h1VtmMASJc3EJmecRMw1R14E4GwNgZZ7DX2taUvUs3vH",
  "key32": "3uPGMtu4Tvzbkoy7dm2E5iVzrEuHhVymb7yUFkCNwUyS28uCyN5TANR73f4PGqifX6g1Bdjx6U8i1MVG3Mc7K4i9",
  "key33": "3xtR3izhDeAgSpKsf479aeBQA9ecHJ4NuG1UG8AxnJKWH8MmoynGqYERwNZJM3bSdaVnbTxuat7cLo7xiNWBgc5V",
  "key34": "5eV26rT1HDu37AXPp7Zm5M8horKPVPujRSeET6Jwp96VSNNhwLySP4sXbgqwjsVxP44HBtARwpLPEN1eBwaj6Vgi",
  "key35": "5gfjbcAPgQ4YHExhKb8ctRjiDQcWsSj6L4VESRag6723VDDnVhSf3iF5gaZDji5eDMftCXcio9CmrCNMa7MgimLe",
  "key36": "46UupFxiFYWVWUjAEf3Ytj29ToFLZL7fdqmwvsDzyjyEec3qioYqty5cyiNAsLjR68HbSg52WQ96ay9xpQcfYdkM",
  "key37": "2NopHUSSqtuffb8Gbt6zaEgLpsXfUYxhfLznNimukd68tjWkBFotvPBHgjWvu74h9bVgMveDwda9C2agP5vEaJtN"
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
