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
    "4uj1Tnf13FFXqBpytxkqwm9K64KJCkc46WaQ5YhjqSSBr2gxMGeU3k2GkYE58iPLn39EtaMfPa9JXM86Kau5FqRs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DgwRQTjfX6msdaaEduWPTTJuLRuAFmDrKSLd8JHCdk7qkFFLhw8w4PHZUAEMNBMMuTxowfYxt2V8D96UNdTByoY",
  "key1": "41PRoMGkcLZKNG4JuT1RGqfFC82iMBieM6nYbTQ5kyJXA8sQWvqu4KQU69RoisK2iqg55tDoDwE3fA298LjN3c96",
  "key2": "3oDEKDpKLwekhM8MDQ5yMfeJFMhAoNKpWNxzxxqrpsoTpuCbA7FjDhxJS3H2QDiBDeB2owB1NZ9uUNpiCJLmSMjF",
  "key3": "398QratJh4VbSEWJzGfb9fNbcfBCbsr3UBBYnaNkmC4QmKmpBQpN3NLtMq1A2akDC9qSzfiZqHkWDqWQwDAwYN43",
  "key4": "2Jrp6DEWmVKWRHJGk344YjzzNn9TjHYVumrUiUVZ6LNHjiAE5Uk1GPEyX3zP6fjVWZUcfXwxUf1n7DG6UpmxH52R",
  "key5": "2L1hF5kcdhJmH61a7CYvmWWLQH9YkfcZenWBbwmxdvncB7VaTeNAv1SjhM7DeY8BxYMoKTCuCXkAawhYmX8UHiu1",
  "key6": "N1jVjYYJE1DMghbjLrjASSwmFxYKeu743Mc5ZH52FBLcZGyZ9fAGsgkz2BYRkz3WNpLoChoMtdzMcRThmCR2TW3",
  "key7": "4x5xRiisN4PR1UDMuRHV5Zh4CfPHz5QWGfuczcvycyaivpKNKuamQTrZavhJbWZVDZaTXSLjM5JTdmXHrtydCDaw",
  "key8": "5FGBT7hEVQx8eDFJici6kbXdFhpqPCU8MULjZEbQi1zp4d8DVAuEFpi8Hns8NwjesmwtQdJBFN3gYSn4BBy6Uf4G",
  "key9": "2aozYLoUSBegH7yNendBGhGvCm37r59b38wd8qpJ9Ui1JubyAHtCnqRTqUEnD98gqGEp6nEqgU3B5WcsMHEbhLzq",
  "key10": "5i8pZeCcJuJ1rTMnEv59HEzndSjCLkb9rVXYRbdrXQ8BnWvD5wEwWCqjKZoCVZB9dyYRdTMhcfTr4ySeprtXVYDa",
  "key11": "62H3v4ebGywvcvk3oarCfzXw2c29xWPcGZz2bFtsu7TgGwJHv9C3fd5XGmPS8pXUQLXWP3ts8hV1HXHK7zphJsD2",
  "key12": "3L9hWixcwQXQ9YkBVjh9RN6DUfdhf6TpXdP91MdGpcp26UDYSQTEv98jRVgia1hiJvvvwsSRzNDNKDt4fTi84c8t",
  "key13": "4mdSj4MaRRnzE1xxvGE2UxnbzXDbzg4kwiE85UhgfXmE45B7yxK1ewwxRSqXa5qUuQVxJJ1wHq7SLmPbNLS4oRLf",
  "key14": "5a4zDBD6Mob96ntjAZxkGPDFEm3YWXun3z5r3xbQV6cnTezZW1pMbMUE58453cWx92b2jbDNHuuAgYf4fNgHWKgj",
  "key15": "5Ld2oLmBT4jrUwFcWy1nr3dy4XveEMRHuzDQen94rxiktSRBHuikJHtQRh7knAC9a2Pf8gG7WMeSDzHX1atnLV8r",
  "key16": "41QZQCSfh9gZkj3qHnTgVPhS1rnmhExDHWa3q9AhLJ3QrJdnkB3jtYrLedRSv14hKD3HEAsYTmpxdzZvBQu5pqVW",
  "key17": "agBbgvUUW3MDjsFFsjWK5Mx5WKax98ndKeNsQB5E9hMWnv3K1zT9tDUfLm8rp3Weaz2vjfjca7hTqbGS41X1rmQ",
  "key18": "2YwFyMGUJ8FZx8492bBj9hBfvsHjHoZo4C5Xq7BMLM6b5EhnP34z976B7P9Q8i2uPVjpLGBkXU9ZNahniok41yBk",
  "key19": "3eo794MYKZSCq7PreVJ1RpQMxie8kbqcJyNX65EzoroTmuoR4Grux7Cg8Dqui77qfymDTRgpngSM8Pk46WiUCrMN",
  "key20": "3c6RmFrLAUeFgybL2Xs7PV7fx1W6yoJFxeTp91Wz38ypaQRFaseXkLDVxgTgf7XqVCfDngdmbiMF7R4FhjAwaHnX",
  "key21": "5B6sd9b9niARnbkPixeDesCok9XRhNVNp5w31eEeqjSoX8ZX51vSJVfpLQ2zbid2zcTkJ4ExeXtuN4RLAbYnHUt9",
  "key22": "35qDvTkjQGhDeoqryy51ZRVSi5LdYNrfNCcYnaLTBZ3AP9K6icPadMkQLEG64tCuuhD5yBrYnYGevHhVr4sjsmLL",
  "key23": "23vnmr3PHbtrLA1tFF2mQXrsxoDfvGhiLrujp9TA87SX65cYWBBRaMo9bdhkSpYMv8k32GhmBwMDRg7w6EiMXFgB",
  "key24": "244YXjwD8T2TqE7kSzVZ8WPXddB46E4Vy2mDWxheq1zP2GzuHn4yxQH29CMkQRWxiqsTihwN5WYWeFKLkyxptydT",
  "key25": "5T2KvqUVDKcAEz8q1vJyj5ejZqVQg3e3FF9tEdEYY8CvP526XJ6cUDJxC9erjUjjtiHHpgs7TzKzmj52YKpzwGMh",
  "key26": "5E9jhVt2VWd1X8nXr93NjkZa6Zq7AdnkCCwUvwuwezAQyuV78LU65Hw7YFy29Ho3HvjQ1U2su3dugAQU7U3rXrSM",
  "key27": "eWhBXKZXNcJyevBax7h9zNiMhWuRqHpzqdtdYVz4jo1Yi3o3KPRZ1UFbCXY8rbshodqwn3FNrM1gvfs9F8Babcf",
  "key28": "41JvUwbwABdn5Z6jCd1fJvD96hYnz8zbn83Cw7vrhPnxMwGPekbGR9cN5YtLTuu7KnTwss6ef7c1VxNkr3CtTHCc",
  "key29": "5tU94easjLRufBPg1oUqKENVDXjnREcJnoaTsF3xZegd3vCaezhRhJ2NMWoWyvSbCGyybz5wBJnXC4KKvFsLr7Vb",
  "key30": "5FQTai7RWr5DvQw2s8N1SdvgNqLStMt2G8hiUVUVSdbEYbkdSuvD1ABFDH97CgT6Uptc2Zsrg2DcScu2KJ4B4eSt",
  "key31": "2771eMye6axu96VMMkypt5PXUM51pCmWvMcH3szTENKKcowsp2rP7v1RuCXoEEYqhDTMnYvEAov11hxkQrpPWpTK",
  "key32": "4e5gVKjiREyDZ7frqVE7FR459hyZu8WfUC5ZAHen7djEPfLMjFeXhjWFBa55mxU4pV4Rxr8Wx1FKh8EsdUbX5GmU",
  "key33": "5Beern7fHdgTjmFSxMLWxG3H1y84jWddHztV75i9ip2TPt12Hevx83AvtZzCu533BDcfwgjSt53Nhv4WGaiYfuHa",
  "key34": "3fPXfEcDPVUAmWFeMmQFqMAp5tbZ7XFyQkCLkRfYrcFnLcjkaSxu2wcUJrEYGbXWZ3dduyh1ExdqwqUMjTJED61z",
  "key35": "4MmWEECArpLdxkDHbbj7chwNNsrY9D59Yxc3MpVBHMshBjUVGJ6ZuEjcnf7UYo4j3T7c2hACh2bjMMJFNTnSJomm",
  "key36": "4a3bKJwDn9hhX2KKg16FVPKDct2ra8hbxoTnZWma7D7EfG4toJxEWsN6N85NXEUmev2vYxW6ttFwJGYwtXqfgWp3",
  "key37": "4YxSPBw3P4yTSgSZUWWMVzMvxuXkyCiSV8cTVABSMqgDzrbdHa6Y3PSbymkreonEtNoaHL8MNGu1zaShhuAsxtEZ",
  "key38": "2pPmShTzoppRU9vL1vJ1QexBhNiYfvD8ZGeChy2JfXbE8hRM7nHxUo6p7t7SvbT7QmthWeqDPrZ7VqWgxWQwY3Qm",
  "key39": "3FETUnBPQaoJVDjoPQfaTGMaFb5aKr6aQH69ujVywvMkGY1eVvYHRWF5tZwJBaVV9NBaSx4K3eh1VEWuXyFGU5j5",
  "key40": "2wpGFtErzMR2YS2ks9kthvompq3Wc8saC97c4HxXscXFE2SKMyxnQp13DngY2AAmcoMGNuQUabGn2TQXtcMPs41K",
  "key41": "3LY59WP791dMn4zm3Zha1JE7NR8RPP89LfRwtJEsoL31WSFFfJQs7ZV3m8o8WC4Z1dd2DS1WKhfYj2suD18WEyNg",
  "key42": "5VXdo7kknEjKcqEqu6wPXP1aj9fAa8JTwE8ZHjKFhcoJAYHgyyhffkNRzPe2oe6zRC1NXhxBWBm9gxRTHLibrTX4",
  "key43": "jsscSnBtnbWoSrsUx79MaSELjXhP6am9cf2Tc4zcTE9VCtQTe72WiHmGNz3Ekia9Gf5d57Eu5JoFatERmRpV2vz",
  "key44": "5x8mHLSpsnBrLEhcys9Dhv3Y1RPS3h8gccoBcnAo1X6G3E3CBEvTHt5KrS2WWoDiF6sUPzWGM1Rm7zetwTTE1k9a"
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
