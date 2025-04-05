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
    "4BP3M6oAq39vCYjG3bPp9H8AYmNsEh8o4xRKh6vhvsKNagRGd4Lt1aaYm6G9uifMqY5sbxjnEtsicLmR6v7nhsDo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xDfyiabJNFYAQ5DwZfm6NNrxjschtFifVLJk2yBpErx3cpT5dGv33L8A2D2Lh7wNr9qJmkSHVF2mKSLoajyq9DH",
  "key1": "QFpqXEwCadWFh34Vzz1n7oduLULTUhYuA53ECADchnt4u43pTRPUSraAutGoarL6DYcZpewTgW4i27P6XsSG1YP",
  "key2": "ntFGEV4G85JxBDWxP4VYBqjEAktavmiCyD7BydNBidViACDJAnt2i7HPiRZYkb36Whsf7HqeAgFZDsrkG2eytun",
  "key3": "A1Sni8xfzesf3fdF26Ky8zAVGaFH27gJyqEtV6TXbVYqsbg7YhWJNW5JpSVvjf8JSLQb9zWTzW31ZWDJWmNki4J",
  "key4": "5QB93SRkwhnSRwPVsokhtgs5Q3QRZAh9i9W1Wm7hnwYjitDm4jcL5guB2DNi4wzwpDAdakRKuFuJGuH9TeFbqXSb",
  "key5": "56uhPoxdkpcp3eMwGRGg8cCuQG4N8bgcQGB243o8ujts2PsDkYhJWFBviM7a3vdYdMXcaox4BXT7vGGXAndjsWHA",
  "key6": "acFneb7pJyiwdyXVdBTkb7FCs8LxnGUMrRhqSW9EqSvaB85u2pUQK86RQs9w9TSiugSjcpi1YbMR9WoZHF1TeKz",
  "key7": "BdgFgVB5DBmqo5SdDGbtPLgAw9J4ySKDEnZRCcbQp7WnYFAiaj9oKZbDRnqfJJeQjVUMDa9L8aQz3Rq993ZhnPT",
  "key8": "KULhjSaxYAEvJLbBy2oiFfbwBRgNpi6pZp4KYgqXvqWq5XwyhfZdpEY4rZfM9S6c85T6upy9PXSgMubHBfTkv9H",
  "key9": "5bWeFjBvxarpu746DFzUNzEcuVyVTa1WvvhvfwbSpbkyG9ZctgpCcutiBYoGT82qvD4JT6vewwrZN2DgPHwpQi8G",
  "key10": "4B3hyxZJM5MAaT4psjnB8UTEnLgqRZqghoatY66T7XDeZqaD1xemaRcjtk77fpm2NJPdq85STJqoPib4huhoi3cr",
  "key11": "t9rtWiXRkrMtwPvWSpP3ZHNo9U3NxBVx5LsaSEnw66Akdt3qbvgP84Eur5DBgu5TcbKGyVmW8kTTcNw6ZGfRvcU",
  "key12": "5AqpUgFoWFf9oZ1dK6fWnmcKAGCx1hfQdmqy7PbrUtdBCzPGVRGucBUJbFpVStpcpLiWnvqwSkGCEUbJgVSk8ek9",
  "key13": "5axHYneh6qp6siZsnAU7BDhfUngy1yoW6eSnTwVpRpNQ8ZMMjoUsAK5t5Ln4zAY3cZhw8w3YLaB2cdsQzxvqXtw3",
  "key14": "5u9R8AZ5T1f3f6EvD8wkKiTFLDRdKHjseLne77oEzVgH6J13f5i3js4K5X4AMxMqrp6PpBnJfCuvmTxEuwvYmwBV",
  "key15": "5wMotQahtdYvLh35jueedNnSL9LwUAXd8Cbuh2nDFooaMQsko42EZhn4yaG2xdhMSaukddTvvqTENceUkvoBVMt8",
  "key16": "4Pxig3qwNHtYdnNPjnUZ4KLGm6m4H7p2nejrZjKtrroRVFcsrMhxQvUosYTgQMeUhQ1kPoXa8sjBEnjqYRQpNaJg",
  "key17": "3wooqM1Q1Y89ywjWiPp5TYSAVw3FBmm6N85a8NfhsxAMuMPPRUQQpgYcvoaSXKKQdKtW1pwqy4fMguQYr6aGWkGj",
  "key18": "yCud5cq3mgEuG6yeESWKdgq9BsiQtwdPpB8P5iseKk55L8RJK2u8RSmpQXBMaFiPg9qpSq5jQieqSnKU4TxJqQF",
  "key19": "4wutvuNmL4WrFUbqPhwyyGsYsX2MkzSnjNLVaLGo9UY3qfy4KNksQVoHRVyeEdaRdakwgswJ9DHra4tk9rdVRxAb",
  "key20": "4nkk7foVzUUK9R6CddJu1uFdnqizEMzGkQ4LbTikvVv5Cs7aE63ajhZZVT3wkd9tphXqLhEdiTee2uVPSKabkz96",
  "key21": "KRhToL8L8B1UxMA29o54hromagSRa23s4edJ5GGYGgjrHaYeAjk7fVMjV9P1zjcw7YRDD1x1dJxy1TEtMLnBHKM",
  "key22": "4KUVjYAQdeEL288odCbJkBFcBxkGkmDmkM83ZFq9MVQRdowu21w7c3wuMFRXqiDGLeb9VbCwWuxpXqKDY8miom9p",
  "key23": "5e9d3i2xY8WdAiYezERSukRD9MHWN2Ts5UE9LPwUhxXsvv8FjLSuH67NjCqwatDMbvfzt4cpRc4i2FqYgsMjXu4H",
  "key24": "27m7yajnF57yCW5fcQB3NSjwZ9n1Xbdq3biHyijx3S4gYkxXDG69EF1J3Bf7J3ZRBciqSTdDqV7suWCmjM632gkf",
  "key25": "4cwbCwwwohm7RmpSthoFExkMZLQWkWwzk2Tq11pBxAgsjpeQs3rxYyWCnC1frhBTUizW3DhjiLZhfqTtEwNvLtbc",
  "key26": "4RcHhrDcyTvNmcfsMpecGFAC6fVveUdKgCWoD6UdrNKPfcbU7E1z9vsnefZCHNcubzstAKrP4bzdMcQkofeBWj8f",
  "key27": "P84mPDsXZHpfi7XYe7n2qKDBiHCDXQD5qHD6AxWFmv7sTnBuGkQcU2VVWxzK58zStfSUFkHoR7rbMU2hwbDeDXc",
  "key28": "SWqN1Azw9koJDbUPv2oiHWnCqbdrLFX4oYk291eemDadUcPoybFJVk96n6WS7eMLX6m6se6W3LGbcgkA2WNxaWa",
  "key29": "4yc1959npya5CpaTAU4Yu2meT478U4PEn51PMB4mpaVc56SUVdVU6ZMkzvXKodfomw8gjjyCP9PH2eW3ZVWLLAaR",
  "key30": "65Xgs83bZXvFJm2bLvUFqPXcdQx8RZ2SvdBgiLmzeH4hVKY5fFzYY6C8MupxFUeTMJB2LiXadvEdPQ7YVqMfmcm9",
  "key31": "2XcpDo19aomUvMtcxBWazaHz63TuwA3T1UXAXt7XcenJoJ36TezMw81pUeEHwhz97VCmxdwWxcdXE4oRYdFg1N7s",
  "key32": "4bb49Ps54KDcxPCtv33zhgneTngmcoQPNrXwoR61eY9vQHXFYVgDQv5yP6Yhe7o5rjpvyXUPbcZYQ3PXcSa4CZpW",
  "key33": "4Jn3hEP29f2o5UKFDgp9gJ1m9qSHWUj1zW9ikdAhrD8GbsKxaWWAK9J47k2vkYDqEZHuj7vgGKL22rZyJZxA96bp",
  "key34": "5w2yP8FZgvz4c2MvffBgp1VcGrqr9LBysRVEcLREifaDbMatkBN1rdc2pgXYezHPtuMYyJso1dY4MtojrBmgitxB",
  "key35": "3LFmqke8ZpYXRbJJ3mJz86w6xmnHdGLufMRZSRjAJx5VoGX1g1VpMNrDFwaMU3ivUWu38i4FNKMNLxotfmyXPgyG",
  "key36": "4KyArC4tzRTr1STjeWv39LrEKVkZgzd5y7oAnk7MMRMUJu8yjjyVQFy6mobEN2GpuozjUS6Z369Vx8rhVc9zEYzW",
  "key37": "2BNa8SfUXMwuVyBZq4hYKei6Kc5iSiFSqtbaG96ePi6UHznkvMPJfTBf4Jw7XWkxoPvcXkrh5BRYEETTtUY2GqMA",
  "key38": "2pGMRfQGNwhPHmEzjAJ5BVGry9FtdA6N5XDnSWeaMKuBqi1pirodo3rcFu5jT5qPDJbtQXAoC56vwqvhZgTrFGga",
  "key39": "27EMTJeadiKL32pjw4ctifkvJPomNnquQM8nC4WSanHie7pLUBhDLg8tb53MZeiKBG2b8Qy6yBuLZtLMcy3qPFN3",
  "key40": "2DYCu1nrwV3xSGAsqExe8aT4gu43b9qCkqPxy74gpNnBhZazP28Pigg9ut1Kw5rc4WbhgwfFi8myXdzXUcZ1TsFm",
  "key41": "2F4jFAmjT28Z3w4YM5esH2vkPknQoPNmbTmKxMSVzsQJDY5ag8hWH777hrjPUYceDjhk8W6xK1E3S6ujtZirCguX",
  "key42": "4muNNjoB8mXieL9m3mWXrty5HwrkrBPiYQXk1zGUi7RjWbhfw5t2CDqNaMZqfwvEnL5L58wVbQ7ud9ZdC6VaXKj",
  "key43": "3hc4PLirofSH4BH6zPYmigVy2hd2gSxDZyhZLJAJJPqKsgXG9QD6XuwoXCkQhZ8aovb2ab7QvQTzn9AJMCAPCrCY",
  "key44": "49bNMTvBriMRfwNBi3uZQNf397Rncf9Xxv8VesuaJSJCJX5YypVnHcHiYTHMzazK1zkC65QJvKoBQWHFfwedWfr1",
  "key45": "4e6c9EDoWprm7PLRp8y5CZQc8VY53CxZzgUFX3aYD4JYpd2hqEb7jfpHdBRpCVKpDu8MenY3YEJ7hJEf6oW2mwZH",
  "key46": "421NSFv2qm4pnHU8mpdhVD9hmcXbHBDkD4BY6NZ9fDYbmsrPsBny2G7UFhbsuQv8F3zkCAhT1dtdHdmxWjLBV7ay"
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
