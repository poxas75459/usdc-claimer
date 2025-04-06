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
    "4Vk8sFnWWumsMdz52BeQNZdAz521AYM7kDQSd9DadxDmmjaXn3FJ6NTTWn1waVUxfY8bMMEwgNWVfKZ6DDfXdLws"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RvtgmPPhgTQQSiJxUe42Cyd895KxBMmxrDodTzMt2gpMZ2WfXpbmtjocYg4uH4fCydAZoVNwMNQ5fcjRLPqvxZS",
  "key1": "4iqfGAhFVtVQ2F1LgCNUFKNjuBcWhjiPBQNgasq2AuaXa7M4K8DaZv6suHEEdy4Cmp2rEiiWTCPibD5CFFom8q3h",
  "key2": "34XEkv9JomrXDCPVeXmTAxnejJ28YAr7RxanWhkrMepA2wky56QZT23c8yx8CK8GP2t218V6zPt5cz3ZhWBr9UFc",
  "key3": "28MGrdd7zfDgbwSxb2YuGLLqSsd2sBW1xLKiEV39BmbLntX1v7gbTpXK5qHZ7BpXS2dV6KJ3GidqEd8g7bKcJyGC",
  "key4": "63MXEoY7hEM1KD89PerBJWuywJAB9MU5ouETUCm27ptM6TYK6NnguqbwdBYuvTS4ouiPN2Y2Z7sG1x2NFLTmeGCh",
  "key5": "4E6smaJhBiq1aPrFwvHnT3ueTR9Z7GTA5EPFG6VZ37Nv3iVyB1PfMhyaUABBs8BqPiv6JSqSr31LvmLKycTEXn2U",
  "key6": "2EviJYUcxfq58XXveznYtdKnPAHBP6xLAVWTdEFC63hu2pDB8Yow2TDJNeXwPayXq8Y7qMrgknRVnRkQXyLCujQm",
  "key7": "51b8SvX8qURtiBrg3TMCLCtLSDBDnDfSr3cKGhLAVyrCGcGGN3kBbpXyUGChB1Hf4yjZLYKGeo2LYhZoREcfuGxN",
  "key8": "4unVD4YjVQLjdLuaHnsGDocu2rRvF1XM44BWzq8mW2C8bgAwhXEVJdXqpP15fL7gpzQjJoZKh6pqDFtLcbqJSUGQ",
  "key9": "4uAGVo5EGiZYrMepVTt6bjZi5esYZyuhqr9hsDGvoEpNTwNZ9k2bVK3FaM2zfC88QxKcREsW5XWwMPMVmtPthFCT",
  "key10": "4WXSaRB1qtJtPsyjgdNC76kf3TzyY6Ey5oi2BVr96jzAE2o7Fm2FgzQanLjGyxs2qu6bNDzSWvxMxWbHPtPvo6ix",
  "key11": "2mVH2AsjiEhEtGx2GGY1UxqYUHjVgPzLzrZu5EkkswnHNW1RCwXQ3boZv7Qb67h41VjKSHnMdwYtRfxC53f2wXX8",
  "key12": "2DgzQ3nEEtFTZXnSdz91A2QZJtmToYGHj4mbq7DDfWdSXkjka9gunZ5E6yAjuwE5z2LFL4zrNxTsUZ3FEaQGb54C",
  "key13": "3Hbg9k6u6KrVs8CLt44sGJUHf8aE6B5QekXKY1f7g1G44w3P3dbQU2Z9SGKMEQJvmnFMmxMwDCf4y4knsMELfTi",
  "key14": "AyxPjxJMH7VUzC35sqmuNi2ozfQpN58X51Pw8ii8PyYjufr4zefZGHnWZcD5F4ZJ2MtEJhXLRqd4MM23hJkoxdp",
  "key15": "49eRfzXcKjWC7iF23BJrynd1PW9Z59oeEQBAK2Wpxp3HCFa7sNzpcwYimMeCiLve7icBcStEwy3gyxvxMUDwE7nE",
  "key16": "4FKzxWwD3bnaB4nxhmSty9T95gush2R3K4VSwbmZXG978FHP8xNRxtJKfkiHQPEGx3pJTiszwEG4mmt7778cypoA",
  "key17": "2wmZfo7YbE4NoyEgw8UtYyXURvcowVoTf8Lv237SreFDYa7KVeuiZ6u6NEQEdHBxnj2cyqZLUKsNGi4AHDrToJM3",
  "key18": "4paU3qFKYFqYityS1R8GWrTdSiRysd95pn9qiLVFBPMdCtvcJ6z3wcKhq1zSy6841GqjXiZMLHcYHAS3M7KUhDgY",
  "key19": "Gy1KrLM36Dya2cQKU16zALFy1pSYHSzWj3AMEZjnbgKphWbwmXXiU5xuZBU1TBBdSPfoWCZaWD17MqoHj1w4Mgw",
  "key20": "2JysGWc4eQvzHT6zKmcEzBm68Cn7adWXZjUjDAjX2J5cSVWKvuQB6wVjFfLozg1WhQ9HVe6WevEH23rg7z7wTor7",
  "key21": "3B8XiTYL9CmnxFnYVWGZiztLYhEJZkSWbecMWQDFdj56HEzNujbPtLVoe22XXaLHwj7hVdNRHKj88p1gLZnFHbmg",
  "key22": "GX1AvYKEbHEfUpBBGFHkbZkYK2S15uMbQwF9u459MbmE383fUqihQXLg7RLspajiw5hHJZdBFVogSEgSKpVdL2X",
  "key23": "3bwtMvzo8nUaomZmMijfiq61o719cpoR1jS1nqgosXWDnn7mxhKAG6eLBGj5aMVYqXQ7V7myu24JX4mVpwA6mUJu",
  "key24": "fnEJaQfd8fWGvQDtgm2zNueUT5GPKrmLJAVWgiQejDwiLbCViU329zHCDQeY7YVakx7XkNVmoorP2STsaawCUYD",
  "key25": "4zF4CvjNwFkLtgGWv4zyFfVfoveq6mPRZSZ5ormXC1san6MRXDWkzfUGDkPnvPyjPsFcwtPHEf2ViStng941H2xn",
  "key26": "3WBXYo6WNUokjmt5PzZkfEtt5uy7GUnmNojJymGRYaa1zVwyHF9pgf32PNN57X9AAwD6cQ8bpUoMAKSkiatSTUpk",
  "key27": "5pCTJSVCQFU9GbxCzo99DkCKyCbGCownUukXL7uo5F1FBqUHoa1vKVWZ4dWUmzxBVxNhKo6X44V9oEpc1D6Q7KYe",
  "key28": "2y8K9HpWbypZEGVzTh7yFyJWjDAeCo12XxpuiosqniGVD1zUayVSKWRnAjFDpbummESG4b2vjaFeWFsosctLzRbD",
  "key29": "49d2v7SKY9U9DVa94hR8Ln7pbeUSRjbytCXh1z7g8U34W2iKfxRL74j7B2X4A6Z2dFnyxdpSVGq9Q8nxVycna4ZV",
  "key30": "5ijyKpiLfLwVKuTqp32uubcGzUZtRUgKFbWcF1nfehDdJwzePrjD2tFLeamYnKrtBhNsAzSYzZD3CaobmCZe3Lud",
  "key31": "3cPmTLwidhUZK8jiKDbm58RpTszBTvikQCjV26ypR35tosEo7ZpAWaNZhb3JmizjPqcXpCKnbExb7JyX9o56aGRH",
  "key32": "NYmNeJLrqLo2w4Kc7UWXTmCbGQmmVtNeHHL9b1qCmF7HwgRPxTwNoPyXPfSEMr8cfPPcKyusnJgetJULswdCyek",
  "key33": "34fXyzVMuGA7HGgTqU6jotAwHp3yq1iZaCp8XvJN8h1KKupTxtLtHLzseszNBr42GaSF2heZWrA9kicAGnjAQAsx",
  "key34": "4jJqf3TwJNJSMHWEMBBoUFquPtN2Q8hQxPanGMAywEq3A6RY8GTS5GbC9fcxyjBSadrE91M3wuDmWSni99JdM8eL"
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
