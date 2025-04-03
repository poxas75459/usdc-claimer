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
    "5BfsB7e1XDZpU6VbG9uHonAem8eTBEnmFjTDL7sKF8nMdd22UvFrgNDbBb5dPxfdRsq1mEqswNXxTwwrbHwJuLBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UKEFwkp8HvoCMGRPABFGPx8sBXShGC16NjXYYf45zSvvurE1yhJ45MwCjAEd5THSUTz83dcVRo5cgqanRX6QACG",
  "key1": "4uqxF7e5KRgv2LHUEhhntBYsk9CcfMmfMrH8wVnZEbf7fXjydo7AqWQ83XaAcNkFTPnUpUB3Z7Fdq7MM1QNQ2xex",
  "key2": "5HydVSe3C6H3kEyRDw83nGyqCotPq9iGpjijCzFuDzEDgZiHKA8T33zhCRTHWTSAsM9rwFnFjyM34v2sEqXa1pRz",
  "key3": "3XDkWczZhTpFxycxvUH7JFseKPr3usXunuNudmdMoLGLHtAoE9F5CwePo9Hv42FZMhjZbakwkvJdjaRvbu5ZgtP",
  "key4": "2cGhxLmzJEFWfRE7JF3v3tb1zefbbprrDssWuNUaUF74AHqwCYGXAB4ton74rYTXT54ECv7jmwBkUw1jYcc6QPEL",
  "key5": "RhP5pbncrbxEF72U7MEsr48p45PZtxwHaZJV5iaVUnHSCVAqReyKvDewCDtq42q4N9MPF6ZrAA4X3gVZa3TdHsQ",
  "key6": "4dBS5KFQuPo61BZ7ysUeWpYWZ9Sk99UezWrQpC9iK7DPojCKQuoYUoNTkbLuM3b4frDhw857gqiSWvQpBBPy4gR2",
  "key7": "5qJTVQZVqpejs9fQnzJKb4dfrfnvSGAQA37g77YCYPZswpsDPcY4CjK9Cn5SRurXPqpAtw5Aj35hmHcuBoukiSUo",
  "key8": "2Pk7n9aUBWh3BhoQgVQAh9ewt9huv3PrKmWVmSsNkKfZyLNxSivcTPTd41Xe2euy2SPa6NK8JxkxCjcXBgQ4WUqA",
  "key9": "2weDUrex3JxJjccJsHPaNCsNuigp3J8mt58KS5Zz85XArLWFy6tcR9BD9m79HgtAEfj7oMepGJaCRg4qbWTU6nZw",
  "key10": "2udEfgMxbqg43Y3HB2nmxvobyZAT4UvPizGqpd2biEpFPN1shyXsbDuJhjoqb3H1ySKP5M76VgfCxhQh5NLNF19i",
  "key11": "5D8BLisbFjrDz25rJgQNy3ANafREzdiaH5RnWFJnqnsqa2vn9aKZKrky4vRdJnAiqvcqpFzA3qyWhXk2hyX7gTvd",
  "key12": "37Kdx4NoH6dSjGgWbt47ucdJr8gkKRGsnX5BonTV4gLjV4og59pJ8rgxTF9fxHSGWPsKwR5Vx7bDN8VJEBb625tj",
  "key13": "4GGS3Fy6wsxXdGQsyraW3PiKmg2fzeUuYzAmg87zqKyK7BA2Fceje5XRppHnV3j5J16UAEkHJDJnHoR1XLXveMeJ",
  "key14": "3ACa4NH1s3g2sS45EanBqdrkmA16985Sp5AfmAEkQ6k1G9KqJ6wQyQSW8FMnTYM7WUv9eTEVcfaeUEedrhoWefmp",
  "key15": "5EC27SRTj2KktRUa5XiD9KgU9KTnkZJs6GmqyUQCpjAfCN7mjNRNFrFey43bwK7WsKPp5TaiFJ5Ha61niFHDSNaA",
  "key16": "4kghJPgEq8GtTEU5DBgmgvNm42GNa2de2df1HHRjgJ38XPV1LL6J5dFwe8a9biw2NcpHXowM916gYGBFBWZ7PX3Y",
  "key17": "2RLifsBHvscmUr2WhirKcScoTD6PyfLbCtzWJCiodYVdaL8dzhwUBow8Tg92yp6xuCBEEYFDASoFMJqjJW1Yc8nM",
  "key18": "3KLfhLVx84pHXkqqz6Z5ZU56L1sX438Ta91Cd2kXRjasjUogfzG2sLLSMqJ4RgTfS9c1tgHk7yzek2h6vi7h7auK",
  "key19": "53z1hqKnxdYCAy3daDBLgHAgs5Fnyq9m7r6iwGewbXdfygDJiMBsJsNFTBeVP3Kmc1S2dmPUrzd6d4a6was8dNq6",
  "key20": "5ZRh3n3aCbxrcCCREMBDppLNVFHgWWsZKZYHZvZSapsfsZJeBm7BPTj7f1sCowhnT3mZkEo8ziQnpX9cWDANomtG",
  "key21": "5pQjs7QekHYdyWgUKXBrWwCFjTecWwooK27RNPw3cXcsSCJgP5X3TPMHMuevyFXaA6VvjR1KetvLYMAJg9mZVgp2",
  "key22": "39JrW3eBmjeHhzUJk4XN4oZ8KnK7stiH7FTyQbzT3m3pgErsZRjnkFEgEjmtkqEKaqmxBGmwLHo1oJxC1Jkuyakx",
  "key23": "37yNArx8eRhQdgsE3SQvh9t3TD1epMcPi796wNrQ1DCBhZDCTGtLt1erXZmtvtAxFFjWHLmCEquNWetzmZVrVdEP",
  "key24": "3NZ2AKigf5gLuDqdTXPmYe16V6pLhZmh4jc6ZzDVGyTAgm2Lo3Foy8daF1a6NeVQMuqi8gWg9Q3Ne3iymr3iX4p4",
  "key25": "4yfrPTsvPKQUnP8WV4Db1mdXB1vJcsjd5EbWzppUcpVCtumUTRrLrM5s2VxaMGGzrweRJCuspwgjo9xqNeGWXFPJ",
  "key26": "3TjP2QytKc6zTNeq1x2fo68hjmcUosbzeZ4iLSUYviN7S2NDyNpPpANvK91akv1KpbUvXDErJVSMGSk2UENRLH5S",
  "key27": "4hKa8Wp1kkRVPE2HsBt29ZrWCnthw4raPMVF8jFMH6ut5T6ZQzdc4By35pY8WmG6Pk5KneHru1YuAdd9AjVcf15i",
  "key28": "51q92Yus27VQLGP1J79ZbvmAJ22hGbRGMHbRjR3ej4B9r6QmVixeL9X7CHBo9fSjSFmqvxjJw6GDZuvavSD5Xtv4",
  "key29": "22kEnm9hatKHb4qDE7jXsFmYsQDVnrPyTJHC6aDdxaahRsGA7mbiF2w27RPDMa4zznp2EAX1J2FGSBM3GWXUXhLp",
  "key30": "3MQ1RuigcPJDGzUbUaEZbH4LzESDRv7VBtTvKmaD8oiZFPBaEGrSkTK5ouKBNajJfpkLwZ5RFzNT2HCEFRdz1nUU",
  "key31": "51ezTPF8Gukj9tZhKZU8ceqTfpzfuBCA4oDb5BdgiCbQ4Zex8kWM6S7kJ5KsJ3KoMhhSmWubCuB5nqJ5k1Vh9vYe",
  "key32": "2MEgpVAvYfYjFNFCw81YUnqDwNRnJ1Fhew9mTkwesJquCUTqpCh2qwjrkFuKmuW9g1LwbBe5UDgUQWo6vcMHxoG5",
  "key33": "5mUAonwVFf1FUs1m1beXARFNrWGjty5rtNjhrAmuKv3jQdC5t6za4ywRVuiqMVmtok45b4NRj1o7FR7tPiTqDnpg",
  "key34": "4VPeUrb4LMJRrdVZkGdoGq3Xis2fGby87EwHhMj5hAvEb5iHspY6nd4e4wpioPKJqH8YGUPAftnxUGTbrM45GbmD",
  "key35": "4KGiefLTx28aFJMnEgP5XqkajPNPdSjC1wzivM6Sc8UfcaUk1EDxrYu3u13htNXBaXdLuYdArr1Brr8TuXqxxxPn",
  "key36": "2y9epGujuXJrARsvnMcRUaVhZoY6tPxfzoZG1DZt6GVm5bGumu5kLm1bNhorGekuMnS36uCxv4FJkRNCs29hqAoX",
  "key37": "2ZXP5GX8ovzpJ3aScFHy6wPbjQVAdZXvttaBMxAEpiQmmvQfswic2f3y1oStLskxSrVnqGB4y9vdmvd7oaNuWx3C",
  "key38": "2W6EBGuHsdcRssM9u4Mvk3zHcqtUYAqhbKJ7eMsMwE4JeQWpYgPoNd7yTnMQihimb2re8hQJ6zmc7tQq2e6tfe3P",
  "key39": "Ng7o6UuiHZ8EQrQHT1ZANTDPNZQjxQoCHcA68nGnAR3QdF6dad81BUGem2h6FCYFRiXgjupFXsZBbP2bC8H8XFt",
  "key40": "sNGSKMKte4DhEfvtEAwN4UHGM9Z9mnpaK4g5bqG58sj9Q4MmmoJwGRqARh9bQg9kRNva44xf3esbaZu1mkyFqLN",
  "key41": "3tAQTBT38fx9wnjC4apRCpehnH16HiqSBYb4CN3wMbeQFHAajtLZMkhYKxKyomyodFg9wYB22rVURUwF2bHXfFKA",
  "key42": "yYLA5zuGPnYGkjZByDKEvASo7djQZH8V6TP4bNBvXEPcEdBkShdJyChex6ire12ZjXpHtP363gJ5FfQt5HWwS1A",
  "key43": "2e3FvLJSjEpgMGAwE31moXMQB7EYfWP3dcB5dYUtnWUcbkxDyNtAeSgZcXFWfC9XuwQbdGXX1nF1h8yb7Tzby6Dd",
  "key44": "MwjRYqyZqPBFwfh5QvdmAZR5f7UXBe3s5DPQ9XSGmk8exF4pL97bqUrfdc2zjmoBdohaGtzm93mnQ11JjoSsBLQ",
  "key45": "y3jg7kzvRFxZFgy1dVcnJ5EMLFqR37PYj7iA2j6hvrepBZNd6U7jZVS5J7eg69iFsA2z35PPthyye4WLTJC6bDG",
  "key46": "2zVvDrKxwq1eZrd94vRQ44NFhW7mArmcSeEWyaT4j3V8FkLWqPMxbQDW8Sb2drmyF2GZh1eQ9AJ3tT9o2QPH76Ak",
  "key47": "58mRXtpxmYKSa9MdjJsYgvKk6Su8BH8xcjEHuS8poAuMM78wP3EUdmQXB9d86BjEuDY2nkfB7M9C91cFWLEo7y1s"
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
