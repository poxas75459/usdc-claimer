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
    "4CWu8cCDgHkfXoYUFgANNF8MQcxdW7G59p7NQQzAxxVVKu7eS99hqs8f3gkD8kCs74hUyAgpA3y5dcgoyEF98Jfq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mGyHuAAeTXvXmwnQ3ciavGtU3k8dKkGJEEpbx5o5Q5ABcRNNe7GXi2WFMq6uQXyEbpJsCrKSjKUCjdApdbJ3Z1r",
  "key1": "62bEfVyx7KqETiMMgVPFnw1Q7KgNY4fWupKvpYs4tY6UFQsq1zj2LAqe4U7Xm3Yz9doR4KNJPguFUTyvoFHenUYd",
  "key2": "3qVYMNbpJQ9cM7MYHs3hgYqJZHFb2m58yyfqYcjJZtniLr9rt79C5JKLYYJvSn8sXyYrQoeaoeFMvaJejDERcTzw",
  "key3": "4MNUqRasjTicEbfujxmAm6DuacRTM3mp7XmmUDtnVmn96Smp4ga3wWZrD5zuSkJSojzH65tr6dfoPyXMT7uFuCEM",
  "key4": "4n9A1qZbF6BCYrGzp5GfXzFXRJ9b4QG3n5YiJLSUFuB4kVNfE3HCRSNToNMRk7yz7R24t8F2zFrmoTCHHstkQQcA",
  "key5": "5df6fTwTNPi7Gt6DYMSAAbpP3puwS3vbb6icboTA1hjCnbiUiej6w6rXdUg4CwutfFBBkZ9WgATaEJDKJKBtaNi2",
  "key6": "276VeWwzSjPpw3CZwoYXfwDjjG8RGDNPDcxCp8eNnJ5XDh42EGntJvXkKRbkxWAnMBUxBB7731Envjhhko6DPjJS",
  "key7": "5aj78HKUsGjmvqtXEPoAAbPj6QL58JK16kprKxsZxk2SFdWmW85XaV8ydPxjCXsjW6JkvTBP6LNeQUsXEgrLCm5b",
  "key8": "2vWwrxQm9iNqGU4aaQuznNwSRA1mdvidJdRLq1R54dpCsftW7g947tr6fGpeBBjc8vm6ER8mq9Mm1oTJcq5Yxwbo",
  "key9": "4JCxEPMBQiXnCtRGZrBBYNwvuqnDC9GrqrzJ7qMqEEHNgBegjUhyTxcLoxwGNnEtNz7HqBa6FRpSMoELn8krAmpP",
  "key10": "4tfeDxmJqiux4AFuP7TLpzScBn1TWaxHuyCnyL75Tg5z84Ndcjx5r7gW9CcStV9yjHcjv9mBWv4tuLrNwdhp1LgU",
  "key11": "u2fnXiNQ8Gn9mFsmZSgRoDRdUe9yMxtnka8MTXP65cZU3qdstXHZzqJbuQnjShCkah9hHXjjdY241MNyiq94Hkx",
  "key12": "3nPKKW1YMj6Aa9gSfcDToXRd8KiKB48Qp2SgG1iPonxUn66ipFsf92NPrpr2RWjxdGUgU4N5usGQAb81aLTfmZpL",
  "key13": "2cPUf1orJaEJEmW6RLgLpmyJPNND5JFu7tag49fHi3reyogE9MynXEgZvJ37bfpoEHf1nL89r8C295UzqHLjJ9gj",
  "key14": "25WYd7NPBqPZen13UEdBemJWsxTVdyKVfJUra1zRAwpRocVmzvY6ocKWq6HUdCddbB6s9P7D2vGwZXSEMSzCUatX",
  "key15": "5b4EuNDAXHtCvFXUFdRCJUCzFKFdbXdBTP2iPmMnUKsU2chDneC3qbrAerUj7PPEhHSYQA8VGemua1SWJgmMYDAV",
  "key16": "XFQESqGnyeP7rfee9kgNhjeMCyT9LCtT45uDxvEwcmbd9SVCDsQKgchqsysmTp37sxmFjpotvB7o6YPnfLgFmCd",
  "key17": "r7mhboaD9Kn3jt6sYLZ9hqMouVNRsxwnNzYeGfEU4HG2E12ZLHBwajnBP5WS3vxejGXg3XsYw8kMYD2EpeDrE6f",
  "key18": "4AVxYEEPNrk4hmLofRfJf85m7bkHWgHXNaaHY8fjscg2Q9M9FYV2BPbDcQpqXrb9yzYZWb9riSHHkKnEpCRRVy8B",
  "key19": "4C2ogaBcZRqCc7bTqzZgxXFxYV6vi7Yq8RUWMPe86Qw3Eq4ZipLmZSfWo8ZoJ24Q6ZCB9vVH3LPRmWcn1txS6fDN",
  "key20": "39DQhg2Qc5LC8CC6XfP2WV8UgiMd8VH6naD2zwnhpoyy1Y4x7csNE1hcxEdyRZWV9izYKfWT6A9RHCXG8NxMz7Z3",
  "key21": "5hTzFYd2pC4rqyGiYDFqACLkjvm81Eo4TmjpYeGFWz9kMncNuy2Y1WpGfVtQ48tRBV9DiWukXWimUG91xSQEMzpr",
  "key22": "4Q2GpLFqh7diQe4JD8Nbuq54BdYAW9SU71fjmtPGfrEBWCiytYj1rX8GUWMrcWSXHWk8iT1pzqKPMaFX2FysTYLp",
  "key23": "2gnmAAD6rySZkoNfDxoCdkSBgyDr8CmHXmynrMeJC78RXk3nhemCacFRsAFzs9TNvzCrDuRLJgWAgt8M5XQFiZu6",
  "key24": "4o8M1uUuspJpZKr86jqVjT9LRZgEvQJqQCYXPUQMqiRrfWygdVpD8snsaxK6acniT7Xb2vMCCsr9NRhsuhpChLWw",
  "key25": "4rNqAMX7CPPHfARwVQmdX6dcC1Z1GZpiTQuY3vejFdVybAh3MUtLPdLhK2q1QJfpe6ard7Ts3cKmUqhqyWqZ5KaX",
  "key26": "3LpjSeQ1FpZSifRpF1ED9sSYn3V4jJRwfFRc4z4YTMmjCapQWk7CLBzNFpTTYE5xP2JbWAA2k79LpmcpWk7pGZ6F",
  "key27": "M53dLkuDu7rYcdmSRTRgemYLUUMD5Eh8zqJDLUaGbj5ARKGjYMBg75TYnUoFYfynUnmj1BZ6UXz7XyE5trLnBw5",
  "key28": "4TkAgqAEbTLm29NECPbmucntQwE2GQ8sjFjoiqcfvKx1gfA9oHmQiRmPRW9QVGTk9iRkGMxy6pWH63iFnUrKoHVe",
  "key29": "2Yz3j4YZNLNmK2XuLWdxphSrBC1ckqZCXRmULCwddvWzHjHfCmeUxrzL8eSwimwUNSzrWTTnXg5Pb1ZvDTpixHZ9",
  "key30": "27tpS8GeN9ygfovFwNowYXAA64hY5Jbb58Y6owxzC2yRZo9h9k4cJwadvncTMDXZE466zTvGotfWa1R2nPqMvLF6",
  "key31": "44rnu2MJJj5fKHGfXGiDzzNZmP2LxpeGStBX1v21AUcPTbTiBPi3EBy2BvhHp5uvtYqdQV5QqoFUBm2iYnv9Av9k",
  "key32": "txrZFbu1b61MkdjxtvCehHnsQFNjJnuVUyR3WVMN3gJ2beTjvR3xr1QkDLLJ5zft6PsNGkahVY18iMEj8P2xCQJ",
  "key33": "271jfF7GjrAH6jTSa3WjMgReZ4NCZXAcf6zhZEerxcCL8ZSFLUN9Xs9u4xSfsBHGLy5MnmtvagaxXe5Wj9tHcT8h",
  "key34": "CVfjg9H6AVR9X5UzDAnHJ3858mEkkrHbKZBAwVHRiSuqe2omt2bgCTzk6rkDHKPet5C2FywJQkhqMgpqdsDyf4w",
  "key35": "4bu8QrRpXVGRnr9AMXp3AVkvbTx4Na5CSj7XFTUfeyF5FFH4WMfdEm9GkJ23j6tjy6EuWD9x87jcEYyAdNHBLUnb",
  "key36": "4AVFxbjNTSuFaNg7h6WYPED7G83xYzSwMc8rjAJnTbCj92iALLA915Xpdd1VyZ5M3Z7WSip8Mih34r1TURd6eZHn",
  "key37": "5Yk1Mt629fUw1JxZYYEC8betdvtHvXP1Lr9QEZRXyDKNDWWN7t2tEFExExPSwbTNY2pdXg1aodQHeKM4PAC3wW6c",
  "key38": "2SENLcYk4c441EggTN7B3BWRPipyfES4gSoB1aTPaFvPANdtebYHaBuaPhrCDcr7avdcND3kfdvX8VWYvf4LVsny",
  "key39": "3kq29vUNRf1iDtuoLnLq3GzNRKeQ616qA2Yw3L6QeAEARXSAQ1Rh3wo14cnkeGBzAcsxdqRRmeBVFfdMvVCjBrSQ",
  "key40": "2ERDvUpfNciTurecqd3rK23YBFcJeB1xBGRYDCm9Dqzj4TUSVfEx8PwHjuX1bjAoqPUgCr4z9ZqFDwwVCdKZFEuL",
  "key41": "2VjLCZfeKZz7y32p4XR7rHTkyaqGWsQgZTGJsyGXd47Nq4Q1KXPc97Z5XfpVYK1un77K7p5gwnHzYKCdbdEvAt2Y",
  "key42": "2qLY3UCjSQhR4DxVwh2WZAwnjexVfcDeHNxbz1DcbaHsxyqCSqj2VpWYo1w9VNfggQx9C25CxB9GxPb2s55kvEud",
  "key43": "3wfDNVCCo2jzCseraaQtdCgBqTrXPJMvAxy6uJFfVQP9a1XJ6KQxHvGzDi4tPg1gCC2nvZVc7cncWd1pvsdrEubd",
  "key44": "45V9xu3bvbJF7jyriAMqnTXVh1QMhFLpomZxUrqzs9p4GkHxTjUBrAjyRWhyKDjdpasLAKfLr2Mas6E25EuCESTn",
  "key45": "dcvBsApdxLs7SrJcaaLh1vh61RTga1fuSf5zrznw9p3wScHaLCoNHfY56YTMP8J2KpFsfNFHLqgYD8LWjF64PEj"
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
