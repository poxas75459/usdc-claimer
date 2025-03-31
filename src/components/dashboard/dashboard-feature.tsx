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
    "3gCpwp8nMa3qW9BCUmw36U199AEpjGBkhCxUGpKKAR2K9hBvUXj94q7WZAEMzVokWb5uAXth6xWJZmsRkdEnqH86"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35NVvKRxKpcAaMc1o8Pg3f3bvbuxndoY1S9AbteiLzAEYGQW3pmWF6PqXpG58iYEGaKBb89eX1nGb59jgNvPbpwh",
  "key1": "2oQ3FhutoBLtixkzpKbKaUirKmiSeF66g5pySed5PrUykne89QVFkuLTE3CVqhNWHrcVV2u1LiVMJo4jNdeu3pG8",
  "key2": "tqzu3fr1jiRSQvyjPdKtFdUStkxiTM3X7qs2P5objSZz4JRbZNTrLCVpbbgnwz9pAQeMyEb8D7bk9rSfqsTBdBZ",
  "key3": "2uRtt9ckEPWbRveXGJMkxpZqZHYAA44hag37hL7usjVD3Cukipcxt3gXTd91NtXjGSZ6A5Jz4MMn1iLgJwreik2Y",
  "key4": "4S6vKnqEkHG99ULkWhi4bXpqFkqWov87na2LH1bKpvwfmdcnGEakmD9Z44kPprQuALQoqivGmTFrFQWYcvLq6gzQ",
  "key5": "4LvUVpiBMvED7qL8dJAUi3A9257yuASeoWtPBmBjGzkgeTP2E4bgsdWpEo35Xujwx7GYwpdj7gDjKfd2hSURJYwt",
  "key6": "bPuhE2QdJK1srRyE3eQ4SHEHmidHctHeB4YZ4xQEE6GYSrUrwqSsGaVfap1dmh3y4FpFABrRCTA5aMGN2Y83eow",
  "key7": "2dzXpTBXnST43LmCmfM9hVc2S1rUinELffwCy1iQrXtGVDfhtvWyuysQyBvWkDkw1ozkmvrf8QnEXia9jjChnFp7",
  "key8": "38xQ7PArQeBVdy938sdsSjgWdF52f9LefuhdQMW3FCgp2GGVzbDpqJ4WPGX1FjUCmtdma7N4yPQzjwysf2e5yfEa",
  "key9": "3b3vfzSUPTpxP6PepnGoCoJBkED1JPzJq7iTKqcbCgxnNPi3N8cFfCM87sNZnS23FrG7ePhg6Gzx7dCQ8ozkedRX",
  "key10": "oZTrZtzFCauEHiXEGgPTsRtHxhJBfLrerUCEXtvavbJCDyDPsNmervtJK6LycFxGzm2TPbQUQTAHtJgZuXHYzMB",
  "key11": "g88NRd36pVqtub4HgLjKpksBxe1BGwZzshrco6Yxh8i6Nxqa4do8d1gh5oJtJdvXzVv6mWAaEKeNsWpbard1JBm",
  "key12": "3234cBSTUeCAsC9LK6kRAXTVNbSyTWg5FYvrCmV7gcnGUzJqNji9FBT9mNrumUvFFJhta92Mp7jzVU9w1k2N2wbU",
  "key13": "5LMLi3EVRhkna3S1rP23enjK5dzX31qCP5SoFLSQ1MQ617YhW9nLqJcEwYNa9EnZ5HA5jPJy2B28pxnTByvzibjY",
  "key14": "5s2gLe5s1kn6ZjTzBUSJkvjWP3N3D2iH44Dob7PszujLE6mzmLNmJVQHXeojawekQLwqwEP2mzdrymuJdxWcpEk6",
  "key15": "5EVGm3HSJUeksKdFep5nfH4w1xuMA367seR4CyeuUQr5rBCf37745WtT6KhTvCnHB5FXyLYHyDPnYTtGn1VCXq1v",
  "key16": "2U7fTTXp6MADjiLVHrPKPAV6D2PEJ15j9ib5d191inHeg9CjzZ6sB6nb2ssfozSwCCeo2jxKkYPF1dQCZtYKRUR",
  "key17": "3VjK9z8gVjpPPc6LQyxKhFsUTyhWepghKCndJsxJHT29mMGS1YbpY5trceg2PxhDasfqyoHGe2jwH6KjomqjbiPs",
  "key18": "3XGdXdC3bqN1x8Lyg7jxNFWyJVeaFYehuAZM6bFP8JkSREjhx2Ga5MamXtP9UcziSHcUdjYRt5gcPtoRtXQz8e6D",
  "key19": "2aNp8RHJg6CgwLTr2fgsj4Mu1uyHhTsude5Sagi1y31gvCEP3zLFYuWMdi6GpKjBRJAekHFJz5a3ecxFzhKswnub",
  "key20": "5fcp5HhkkKiyUcPuLpfmsMJSSEbhBuQkjkUtFLNeCFdY28PbAP8BTzRykHfuQJj1v3kSB7o3G8WLd71jUR2wAG2M",
  "key21": "44gDYsTPUz9EDobLF1KvgS3rZyWhwPzPzzaVvPKvmV8UTWVuG5HdGwxHjqB5bq2WJDyqMmJsxjt5DqKdfEDV3G7n",
  "key22": "3rGKurWdPyTe8YJ2oTbkQxafBNgQUx8EZbSqvk4e6y8SY34A7U4aDnjQnQU9mX2YR5Grx8ycgRzmxEp1uzsCSN26",
  "key23": "3QCniuxf81aENfynWT7bY76ACQcD5qttRY8LrYEYPxwioE5u56BJStgfSuu8bJKvwQVPrR4zjXngaoT3SpyHrmB8",
  "key24": "3431Zb91qq8d5yg3CRi2rNc6R81Cvdc4cRXMqKymBMok7wpr5vDyhkG4iiH9ck651r415mC3k6WXNWRnyvwC4bED",
  "key25": "2Ctopu6rx7zgxg59pQH74WQcGtNp4RfCagtCrfPLBZiFG7u1icZSpDiazdAgmDEfvDpjqEg9a5qyRPT6LzBMjZxe",
  "key26": "5ddAzyZ9yJNMe2sxZwctfGW9z6TgmKzuEHsJgtgsktpbz9DNzH85QeEr5i2HBPk3rSzroBdXk5srVvBVrJMKamTi",
  "key27": "3zcE8N42hnwXoxsE55m7zegCuQJWDmDHMjZYqZKuCa9ztRxewLHe7iemmvePtnDdVkdrAEWNkwYu8ZXNZZbqunmz",
  "key28": "itG6FiSgLbWk9KVdyhm1QFGmz5kaxvZW8Rm5rzLYQVmEg95pMTnwCrj1UzqPiFyrVDqJxbHbw4nPJPB1NkUnSkV",
  "key29": "649EN6k7xQwx2VDFLHv3KmnUd8amFmkTsJ3hCBJsm8DfU5qaQxHjT8oWherXF3h9fGVcnEPLWnZFaHurTmMjGtuJ",
  "key30": "5XijTfbEEiuPwqFU3FRM38ZVPKrkD7eyQ3zCeGQz4ouHfso5FhJ66ptYNRGav6dCkwuU5uogkLpde7jsRyCBqV3L",
  "key31": "5fFeCccjjT9yr6xvZQFopmn3UW4MAbiznUWk6vxa9Czic5yy2tm6oyityHdTieCFo5GasS3ar8QcJqjwAFmUek8R",
  "key32": "5XXF415onFyeq79xTbtkL4EeH66D6iLx3YFRZoaJ7qx12fgPBe4ihhVFW785naDh3p1UNznLJtdpqgAUPknc3suz",
  "key33": "2pQ825axUgaPQaU4UTDpgqCK4GY4JcK7zaLck8HKUKxPM4XtidmhTWxTBg5w9tkApCLmJrJyz1z3duS9EN8PkyiB",
  "key34": "4Xrnwj2ZUPfcSrAGzpP1VPSuLPMTUndqnKvg4TG7xgvsDBgzs4QSHmoAo1tNRPRsDzYZ8xMzbTAJB3UR3PyMaYP2",
  "key35": "4rkRgwnYYSj1zYPD5vxrCHVWY1eRx2kVtCPEJCTDf2jT8UZY2ujJWgzMkpfkuPwwXhAhYMkQeus64vgSTkMRnivc",
  "key36": "ifwD7eZhsQ6xcj2SkgXjgSpFW41yDjRGQ9SHKJXN3REgHgTnCs8MGjeWXeuCp3LpnkxmQpFKJ8t3ojJodGHBqHp",
  "key37": "48BQjhGpNDecW11pXpGTA19z15wscgEZCoELk2fYCShAn8yS4zBbysHwPU8bMy3iV16hd1uYi1hSjMRkxaQEjnqQ",
  "key38": "5ptrVg9APbaQYH9TDWq1ckfibcQQrQ1zzPSKU95UCEZw8pqit2yVBJXDh4yzZ8QsV5zeAyCaVMbpxF4vv5qoXNFv",
  "key39": "37E9Nu4TH4VqfpX4JA4sE7KjGiz6nyeBSYN4AnxQ9fBgtM6g69HoiqZHZkyXddQxnK4F2uGfbuko4ixYKf6Duwgi",
  "key40": "5FXXnCeG9txzqWMDxiWMXu5G3gfUCvJLkj7aNw7yp9oG35b6xc7zwEsQ8QAWnZf1rER5N9nmVBVqWWz5xjNeAVBr",
  "key41": "aJTvcDJGVkVBsGoDB2pKVBsvdtwkUWCSLpWSmD51sNH4LCQ1e5GQADCwLSjFjJ121fGDaxUc2jzjhUz4ZkD9W8N",
  "key42": "5QN251vnbvmbn14mPCfVZuv1VRrg4GBqefDvcUsJwt7YaYoNi5vAPxkUUbScYCfsHiUTU51hSvrzvCpP2xuvxKpP",
  "key43": "2JyoR9opDe2UE9qhP9j6KWY1x3eqW9SHn6tQ1aDPFR3pi1GDupLVeqwQ95eJrCxJv6kJfAGM7RgsDiDCZsyjcvJp",
  "key44": "3GjVasreGHyYVsqXZT9Has9hoPFHp7ZoATm2kqPD19AgEEK3wkp895sWSQotu6EWMWM297mHkze8xXikynsBGEc2",
  "key45": "4Qptk1PrWfoU5KBD698WGyAN6oTxV8brwFFFkkAseBdmAEGoZVczjcvm3ct4Bs4TJgc4PFBYw4RVkwEW78g4nkmB",
  "key46": "37NPgze2vSPW6dG6k7wMYRQC6EfALriW4ADdMwhfwTpNMDZWrbN2Ryfum2x42W3J3CXTHJJwjXN2J43eyiEeSt9x",
  "key47": "PAZ2s4Lwi8PTJXVawNPN9KGcHDUdn5uCLcUo1iizBfzku4jyN4gxHrqTNRMSMNXvUzegpFXUnUrfRhTFBxzh6bY",
  "key48": "3Ky3zBHeB2Y71gTj9mP3AE7Eh7emKRF3MF13bXpgq4cGMbAGj5wRkDrnMXuwXGBNobnG7eL8mzk1t7eLNohd8t2R"
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
