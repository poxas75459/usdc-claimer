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
    "4przcur1uq2mXDxRGnFN6QLCzNm75oP4UoztogFShoG6Sg7PkZV5dm3cdxo7h2pgM5RRbRyrjEE5cEjmrYPg3BzL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24T31mM8WPuZ9ycP7JbCuKQsHaACBVaewzdz714MezJuxzowhsR2vS5ZQkEdbaCseLbKDFrjGL4eF7VeYnS9vgtB",
  "key1": "3dUf7UDL8TSwBBRVjespb8E6HtbGjbJhEa2eK4yRkM9EZPmnMybnuPj5s3Mk7mmSDpTkxCjhw81g3XKzFkXZVQ5C",
  "key2": "5MgqHMb89RJzdDyuMrboGZBCfYqVBiGkupRtpoXySYs4ZdmJBvR85qRwJeG1M4Dxbn15SwJFT8MLS6nXzaBmRqeF",
  "key3": "FNzXc9RijLckzjELq4PgRn9HaGTGtnB9bWfB4LvNuwppitRYbuMo8AVPCqw3ce48EH16gjGZgaavTa7ZCEvrZHx",
  "key4": "3Fp5E7k5LAUSDUkY6oYCKXGiNVjWb6ZFuVRrgLF17Apz3ZhbouwfptJWLVYnFHBAwXSbXBxANHi1LzGkJCBueHo8",
  "key5": "221fWiCJ6s1r988UxZxXkpPLonDAWBeYu1oWRZ42r7fLMky2XgrS8xEm14K5uAxXodNk1Z4yyYxgrZtXpmp3JEcs",
  "key6": "3j4Ddr6Yh6bnJe8gREE7gDC2ysWupWDL7kRWtWA4jDje7gtioPs1CYQBTVxavgfN9LTcb5mhTwYUxuKFCvuuMTtu",
  "key7": "58KjUeZcwfAzigVW3q4uH9gq2wNnxn2ZAmDbho8ERifV7Ju8NfHpoCPsoUT4CnobzCqDs1GQ9JCcNdVHBNY4gcyj",
  "key8": "45avnuAWSmLuQBPekrpWfdSwLR4SM4xy72cBDQwiZWxRhdWTPKm9DS5C6roBhW9xmH6cVZPedMTxzJKpQhA1Xnh5",
  "key9": "6764hLTh3qJ6271AFugVH9ypR3CBeQ5pTBoThSExGr9yAiqZECeyBE951zNhRPSckoDgWS6HvPBbaUYY7nM8dny",
  "key10": "4kip1zcGASUjr3gQvADq9vLfziA5h1nMckH68saGDbDVV3nF39CNzzkHEiJhxanKuCsReWjkpYX2QL1KpfZLAd2Z",
  "key11": "43THTZecTNj9FWQjhit5psjMCtxNoSPFCH7xKM5xqeU1hQjMNu4hBbVi5CKShANS4Ssi6yxogzR1ywQRYnKReWtg",
  "key12": "45J3yMzHcmMYuF6r6MpVdEk6hnBf1vVmfyAvAsZ6B7rLWKbuvN6f9KgzGWiActLcNA1G44iQgrQAzWef2RxHnGoE",
  "key13": "23Tzg5s59vHzHhws8dmfVwAWguFsYHwKF9eTJsmW3g2YRgqaG17bdY3e1GyHeBd3UTvy72nMcfwCGN4DF6cTpwDx",
  "key14": "Kmmvmy27pGBuQQdH9MBYqiVFxhFLsM5MLGCP8CH8C4sAhxxZ28whxFRDRx1tdttmRdep929vQjQkSapDKdptzoh",
  "key15": "4ZVY1GemqHRzGUDZd3DDaBd4sVGsFdLnFtJwoZiZf5JWZvJYR3dsG5DaqvqAz99zXpWvRGaur9BxPhKjJPTpg1xY",
  "key16": "96Ck3GmAn6oc4vSpBgYWEB8zR8X7ybxWbSxpsAosH2u46ag51qVKW3wtAuZSv99URdTWmenjs9pEsQfVqffvLp9",
  "key17": "3rvmwnaXUtFUbgmQjzXPBPmcB1rJuBJWWKawVU8ikH3aJvGZw6yt1LEBQVGSjNKfX1hJUDHEysDNvgszx5wQdgFo",
  "key18": "5DCFVRHcWDbtjU5e7TmXkpMVadvMWtfUK9dUXFjpTkGQ8smm7dTUaqZwia1KvDZSrcRN7GaN1XAMsqmgx1MiikcN",
  "key19": "5fAg6kzAwPoLKFU6gVXXP4mizuZveHiwuaXtB4zHibTi12PVmC1tyzedJsNpoSyTdRsuNQjcECcK7vYxCRQSXotx",
  "key20": "3Vs7rLujvQRJ5wkfjPRCRsYPKb85gbyT81pn79MpVsqigKXuchX1aHCa9w46fs287AD5k74teJFqqnchP9TQnwf5",
  "key21": "2J8TQdkGg4RWXLeDAfrfEjC2ut4eRZhvibndJntgaREt8AxDJ8BhsnT33GZe6qC5vWuodcYo66zM7WoXQ17NosG3",
  "key22": "wKLjcRcH5zQEbYYHh386K5qVTMzfdF8TrutQ5efZMu2qbZkWVHzcwWT72fXwjpfWNajA4qkiEE1Mtt1inos4DwM",
  "key23": "5xfNMxsqPwnCizNwGQr5jWh1MuJdWCqSyhHPKZef2q1t6A8EjitvZjcit9PYAS8VenbdQdDT2euBSa9GdNPbuaPY",
  "key24": "61aHvqwpZFTVYDqykcJYz5nPZctXymnYEmpeNrfYE1BwQuCUntpsdUSt3pTvqJJv9qKTegJmCJgHYDa32EsAVTWY",
  "key25": "4qX5dsyc6M6FJCEodpHDcH4ebASq1AjkxB7VFh8qbt4bPLsxY8WnerenXoZs1Wk6QxFN4RemCGNPofgNW3PU3b7w",
  "key26": "R6LgPi6Fk5UPxQcM95Ya7nzBafB8uJby1NCKtkK8v84qLUarMwm7NAiDGFkbmuTqsg71qx3UDaxCjrHvhw2ftWa",
  "key27": "3yiyZcNPxPNPPzRyPcwJ1pcuM1yopHR2gdonUNtdsmGi2ns8Zynf494HxE7htpFkqPKEuVPXdhHTufUQgMZee1Xs",
  "key28": "5fjFTKKTiBWSD16xWDDiKSCo7ESKmNMKJXipEhNSuo8nR6DLhhVSXqcNEqwEXFLEP1hPDccRrLn9yuTZtbG5giXd",
  "key29": "pTsS4CgAz8VBzxzefbNqPteK1NYSsHMrEMc8FKo5XevALjXGRRHLSAqWCz13srDp4wF4YoXpTDLSodH6dMSTn9B",
  "key30": "3CFuLfSa5JBTXuhbYbjEkqTaCDTnUP7GLfCN9Rgg5dwc9jAT91j9rHtiUKMFPUt5qCSiqqgudiRdX6Xd5anXB1fM",
  "key31": "4ptegTYAdQmD4CT441wGS2QdXnvRRj9NzP3CfjfB4gY1tCFP1rL5oQAFGcVZ2VhH8HB5Kryiz3KmHoahLoD8Wuhd",
  "key32": "2XBnX2f5Wr1qbZM2YAAdgJeK3Lc3udSgqsvm5SjQMRwGRYhYFkFaqK9Gqc1Yc9JdvMFu3FskoG4ge9uEE9SPkb3M",
  "key33": "3Mpnx21YA2uSHNa1kkrU7JKSpnd5jcrMifhX2NQqyq3Y7cvoBTFwDP2kYd42Avb4Ne5DtjUJSCtFrRKR6PnCdrRm",
  "key34": "EBPbeiE8uhSpqvgwjcHX7Fu8n5E5trbM4eXTEziWBWVwqVkWVR5XgS74v8EEQ53W4EDno4aEhA3JAc99Ku4Yz4C",
  "key35": "2S6PExkXn9eXGy5LQGs1HDorYDD7iLFU7wWrdsZGcviombq5NApmFde21o8syTmFNx6hAeC1KRaKaSyD2k33dG31",
  "key36": "5sX4g3XmScjr47HKjfWzqw5SG6W3idviJr6q28i5CErYQXMSn5UoQxaFm5nq9fZW8a29dyjBnFX7CVf9WDe4RiML",
  "key37": "4AkxZZKvV71i9ZAQqpjr8MJMyh7zYjpNAWtR5mn1Ntddqwx3En9zYdaA7qHykG9PMF35rnDUA9uJHMbZWASh8gmc",
  "key38": "26iX2HR5ryMoobp2XL2fdJgEa1etuSQFHhPgN1ppftcLrmwn78ZcXjjUYH4GEDFJhZHuToaUD3UU9nS1qkJKAxL3",
  "key39": "4boYWP6ZS1bVtFBKDhj1KuHXnCwHfDx2g2kQnNwCVXZs7eMR3BnHNrywbDJoLKWDfhpd8i5XFwrZFm6jU1hNnah6",
  "key40": "2ZdDQa6dCAtK3SyJhK7xa6B4u7T7QsFFPF6NFx5rzVjgaKGDzj5oj2G6Y9mLPSwPHwPd9pernDNiq2rbeLs8KgMK",
  "key41": "5HYQb4XXVWfVq8V3dHLZ4LjRbmCk7ADKJhyGiSZrBUG5Rw24ukYa66LfFvasLrgu62u6UQvZDRvyipFZpHRuGMY",
  "key42": "36goLLfhTymAD8QX7jHCCvyCRaf4gYKoMhWpvLsZagdYVXFFUwguhC1zNCgS65scyF3UByxEn2bpJm4FFFuuS79t"
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
