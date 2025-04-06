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
    "u9XCkMxGp4injZ3BViaMuVVT2JHYGJW5aR8VzP4nvZHtudDqVnsSZKaAR6N2m7de1PRCcbNcro9TbRp3J83SVdn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "377VAvWq3fYLX85Xe96GWCZJ3PF4gz1TUHMN5HCe64u1NeQUZf2qgBpjyAGgQUTcsx8NJbEEc54uvUgBPEq1fPJc",
  "key1": "gb4nzEh8hFxNgLGc7UunrZotRzR79sqa2mf9EiemEzDArgww1fzYk5bCuHmwBdYWNDpjwm2U2rwrqeHkwvpzXzN",
  "key2": "2DzqirPwp1aQTBtSsoedVPPwasfEv9d8NPn3QF4XWUiWQ4CJxrw3dZVmfGxJ6eb2ss8LAJy2NXKT7cQcVBsd9ZbU",
  "key3": "5ViExUgpYBwcm1wc3kbKxiz8WWNE2kqBJEjRuVNTbShkiPgyvh6STKkMWQLeRPgE24r6bSQMyXoRsEVFYKbKiy5T",
  "key4": "2epAyQ5ZkjBzVbsFxnLDpgz6SW5aHFpbzMi7Ga9ecDqJyaBLK43XWFBHzAwv5Mn2CHUa64BShAdKRY3ozMeDqftJ",
  "key5": "5cTxSjckMpBsLuqyPNCmahTMeTrdUYSDnwttCcqKo6z6FdL7ZBwmbEVUEWKBTWDrCnpHrdqkEhZtQGsg4CqMcgw4",
  "key6": "4JmfQAg5knmYnJbTuTcP7iEn51phjYNmiLULM7UPV6HHLVHXcG7r36X5zAvL3rAHrCR14noJuVgGpMHZBmN4xVpm",
  "key7": "2tNG3H8cbZyHz3PEuefnDszPuv34vSDdX7hgLpgWziMcAZVgijfJVSRgFqynenndmuMJuAumVQvapDi2mo6H8JU3",
  "key8": "53jtnumL6azeLEUenaJ6D96xnVuLmDz8Lp9x5sQq9JQfhw2iaXweeDDCbuXTWccNs8XYayoQb6TmLdCYvD65p9Ew",
  "key9": "2DsbR76Fx4cpP9EKnezyKYEHHCXR2QmQQQP1KkF65TJ7eqqiPu6tqGk5Dw1E72XPe5fc92fvdV43234euDenjKPo",
  "key10": "2eXT8pXrm4PnjuqgTvVLBret1TBvXjisND386QAf5btuzh3PM6oE1fAURPK8ArScb4HMYWqq7w2VPFX7ZsUt3UNy",
  "key11": "5GGGZ7nFtjWCAwqqgNLSQ2HszG8yMcXmAwe9UJ5yYHTsx9cofKMwXcNZGbEZ7rnH26chFyavVr5Dy98ZPQJL8knb",
  "key12": "2XuRpxuS89BQkLxz9VXd4PPdW1kD6u8jLNhnJ6CUqraeS8ErF4U2eMpmp3JqNc8HJZK7z7o81jXaD2xHChqG3TKz",
  "key13": "2mxcbhgoJoNP1MLRSFPfZMDSSDy9cTpW8jfxCUJncg1go4haYZxmNfwj6CCLEtnQfpsm19BSNRXsUb8QPoUroyxr",
  "key14": "5VknkrVFhW6xBgzFmcr8TzjwpuhJPmzE6CSZD6De6nDd3SbipeRd9auTkfwFC6MExvj2y3dmgVWJrDzfGmip7tMc",
  "key15": "9RCWNm97VdwBNNK9G99CHLaLKE1B5roG96MvtyznRAcYCgAPQyPsw8R82ZSBwme7i11msEyn6NRSRQ3YiNfxvAt",
  "key16": "4J133SwPmhYUC6M7zp2RSep4u6Ud6zXuSqVveA4crBokbfNvHYEVo8itwjrhfxXdf4iTug2vZxuZUHcwnkj8dnS5",
  "key17": "1GNcUYLe6m6iRY4cecne7yq5WbjyZ5C7vuaasBoR5kpLXhhBUnzsiDxqzHPushkcxjD9MyyDYNbeVzWvfHmCCYz",
  "key18": "5i5GpvqbMv99XYAwt4ktaVRBGMf4nw5YZvGXSTLsgEyd6GtraT8uEX5wi16hMuzPrUmhs5cvdAzJt7PBLoP9UfwA",
  "key19": "5eQBg5EgXG7WCST1h5N7krkTR3memyHzqEE8tLKgy4xMRVw5vmwaCvQHzRCbFhzyswCQmxfUJ836piqTpQPDz2f2",
  "key20": "5HCfgbR8c5dcYLD77CJfWkRScddwE5hAbDvXKjwSjWJfFrzn8g8zpSpMDYDy7VyVo3iKF4hay9gWyYMyFzndNBBj",
  "key21": "5rUUNYgMyMzc7zvCgu2NS5eUBfXxaed2Jhu6s9u43xRGA39vyRsWdqahL4hG2UJAn1P97YP63dzSVY7KCEevEN5E",
  "key22": "5stiqytC6MEogACzjnkVjSavHkCzmUGomC2mKSEoMejVB68S1meJ9x3C7RoouSaActELE9BBsU3LHyku3NHYkQVo",
  "key23": "2gXggErXrP8Ffav34Yw4bqz2fpFyEQdWCxqwLWZDNDU9ewrfsZWdcx2pnMrvTpD2VwPKDSXKCN3kRyNCiFJeK9Xj",
  "key24": "6UK4PJHPFLg2mwDTZrXF6XtE2h3F55AbGYcC7aUUVqdF9EGnEJf4NHzcxmF2KkKUH5v8yr5sxg2XyKq65h4EPGV",
  "key25": "5oVWWvRkCDC79nqrJJNLAjVAdq7asnGYrm5sKd6qmUjaMrEVU9482L9VyE6BcByiqk58v5ooypdXxMWqYvHCN5jv",
  "key26": "4piZXeAEefdnERHfvCZPDrU3AMFCNbdybeAPbsaDN9r9H9nhvTg7ECuzXaSNsHw65MjAp4N48TgrM7M2HQjJQjfG",
  "key27": "5C8c5dEWfcmZoF7efYY9RrcQpPhzZPhQjwJBY39RyXXT5w5CXyGvmJezuRc7NxfxNFdfgPqX8kbbU2wroFDcETFq",
  "key28": "27GJEUQ8FYFP8J3Fs62qUPPKRqBdRT1aCeciujvdTkV9uMUZZoSnDWWQP5HuTuDjn1bZrNRyCc4Mzm9XXmozZvZ1",
  "key29": "4oKYCQUGo7gDqW5sawsvEgioDUWXUUYE4KzzY1Zbb9evZ2UQVporR6NekEkm58axne3otsL3tp2gc8um942E1UVp",
  "key30": "UKtE8kFQJSSZv8pbeSJ1jXxM9t2jWfv6WyvtR2RaCyD82TV167EdLMpqgbA2vbQmKqCn5nZ8wEjSBwqoZ1qKCHc",
  "key31": "4W98Nezw5m2rGQphPPZ24bqnbo3fghzovicTb8KkFm24JQdUrEeJtzisrLckb7UF1rCi1PHHRuPKrwB2akUoGTfx",
  "key32": "RQpBpiTJz58FqkuwgfqULtJg8pBxg4doRcQ9g6NFJaK8xiKk6EZUQYY1myU4AXCuiMTn8ibwtgR4pJMX1j5hd5Q",
  "key33": "4H184grPEBE7YoBk6ZX7jtZcUNA7A7LoSjPAnHiAzAwi5F44vF73oDehcdnLbzhBKHk78vABrjjDAkNASCZoGxcC",
  "key34": "4kMZPoG9sqbPAiUNovYhHW4LT2apYSne3u3q5DDeHv3BTTrYFVJVo8Fccua3n5ew8abYxeYCfms89BVdHQwDwRqQ",
  "key35": "3WNWB3Lw4FZt7HffCtKpsMLCJc2ZjNz3JZaMYPdHXaykgcRK6qDd13dL8ZVS4rgijLhkwLa8n6aW9wXT1UvkECFV",
  "key36": "5UNjqUkVmgiE31cFywgyAZcUjWWganP5MeaLFgjcqXruKYFLfGVMZi6CeDWX2mLoqZqbuhfgYpFpc19D7ufaTEZh",
  "key37": "59Lgr7CaHoHbvLwJ2bp2jzFe1MthP65KqpyoTJCAeK5xsVxV4E5veZ6aWx4dqnTqxqej2aAossFrwC4xiJmXznu1",
  "key38": "2U2krKsHwRFZzvDsHmyoLfjuL4FdC4cuf8C1TpcGejeysimcT7KrGJ2QYBHwm7tV1wGh1rkmQawnFyf9ishAV8Ck",
  "key39": "58uhLaZrz9Zpo74sVA1JRYJqt6YgTX3zuyG1T619RvdjRDwvoYZCuAMjpRuHTgqThokYijJqeXDY93Dg6Q86QPMu",
  "key40": "4G2JxN9Nqsq8LtfGbUmGsATYH57RbuQT3sYgVpuZLcdvsmvix6FL9DMme9mqMXKGC7bZGzhicXYew1NhQnQJU7wm",
  "key41": "4XfzYfkZ5yvkKTZFC9XsZhg7r8tscEPfb4kDY6DTJnZHx4MQ4GuxtHuqqgyDPubuqFLy3yk19AUWD5ifoVmZNj8t",
  "key42": "3TMJTdb2n1RjVSs9kEJpxEfZ1undnbGihrR6sqvacokEX1TiUBsbtEbsjC74TYoFqQbkVGcoxUwGpkQx8wn9dy8T",
  "key43": "63QwsUC1Ruz1QCJk2xgaSJ2GCeVuHBgJEcjUf5ErfyZsj1sb4eY3xLKb5h1fhgZLQyVmVwSLi8Zd9XG9GLTL88oC"
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
