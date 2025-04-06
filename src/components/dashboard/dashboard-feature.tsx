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
    "22bLL1srqA8V8EAQHvHuGetxewcSQRZWxHqPKoSNYn82YCfFQiBbD5tRj32MYEREgK1pTdXfxStHsWGfoZFbmJZ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EtTWtyBwWhZoVWuNHq5oMiTFR6RYxyExsKVYQ26xS4B64DDt7ymLdG5tfEkq3Tm2A4Y4GVVBipiZKpr7qLqX9ew",
  "key1": "4oy4Bh4pXkoHFNLB99s36VuWhkPGvLtzJJcNDP1tYMgSrvMffhqW28Lb66uz8omYyeE2yJb5W4q2iGpRnjNhZKRK",
  "key2": "2vVN3Bh7T6NZXHUk2V3Y2YdDKsmeYJXNh8AVTfqQHWhDwizUAMuTHocbJ8Nc6p5TVwuneGBn5zYeSJurK8489M9n",
  "key3": "3QfTbGCfu9uVXUMeWqQqiJcNJGoxJL4vRMoX3Dcfywz8yLy4hy6xcvrRG8iLSaEy3UUmxi4wymocsQELWZUQkRv7",
  "key4": "3fwNfCXQhuRwrcSxbhN1Y2rJeVo4aLcSQKgDJ1i8VLEMRiDv4Xqcp5NmbWeZkUsv7rH268Yx1z5fvR5a5VGsvGth",
  "key5": "3wiJ83gGVsqzoTwgbShLaRrpSVxiGagWEUqP1Lk5JtY3eyFaxF3EV4yVS9GuaAyK31ZL1mJj5uwtk41AHpPQmTpP",
  "key6": "427CcGGQzZWBZRE1BUKBgQ2utTFcFsQdSfSbAv7FmF1BbefiMVhV9qTdPBwF422FWKg9bpgwzofsvZjARJePvNFT",
  "key7": "3WxanifHgu2XpptfsE8rmVma7vyUBDec6ZoBoKEM5tj6Ag5giK61xyqTdHa3QdD7SAH14wMMhCMESnU5Rq3AWTcY",
  "key8": "3denv4oboEKUU4Q5dsHkpmBAcjN3Ny5SA2huDK4AULYMadEvEoVT5m98WXBWn4bkBxKrQ9YFg4oxieDAjtdEF5g9",
  "key9": "3KKv9VjryiQDi8Bm5GTtSfJQ6QrH4xa4vRpvvsHSqGwnQ3QtU6cZ349Lt3zmmKeGigzXGZHoyH8KRVFVAov2jo8s",
  "key10": "5B6eHSc98nrZDUfFQkVhwZ2ZyvwhZoarV8Vog8TYxxdBo3EjfhNP5co8uL7uHsrt2nn6KMuG7zgnB8RQzgZjYK7Q",
  "key11": "ew6xqG3wJGCF8fgG4EuwirGYdNRSh7BmHZThgtuAdpD5LKaKUFAAakpSXKq2zuTY5Mu9zwtnRYfe4oWxRS7e3Rt",
  "key12": "4pR2GCXeteckgYQRn8eAEq1P9s1JKv8V5Aw8KcAALQBRSLEDetzMGdgPkG8FnWXeXKqUgHoFG2pARxeN6yFsee1g",
  "key13": "4CDy6vTmF5giQS5BbfWoj41JSSAMWu84ucnj4tagnbjtcmrCbYARbH3Knts3RcomsazwJBSpn1FMVayxXYoTmkxL",
  "key14": "4HAe7FXVFa3uL5MBm4fPbmzciwxiAKcnPzMSFPYdxbi2tKxQTJJ4bchg2wULLyWWkJ57zaUUaYBKrYXVKKhkg4mL",
  "key15": "2oQ36pM7GbGt1NLX9jK4B23XxGbtqujSZE5F62UTnCVxk6DvCZQB5VTUMSbUMUZhwzziyjYEfePH2ksWz7Nv5FaR",
  "key16": "2FajExjdZvsVi7ozfbpjFQ5fyDTByv13c7KxfBrJcXnL8G1eiKfWr2HgD9PNu2sG4uPwhXNPC86h4HXps5RX7u9Y",
  "key17": "u5fYdVTq6sJd86Dg4mq3C6S7GQpgkYUL8HGZKCTsAJEpT6B9buQwW6WhLnEDS5N2c2USDW3bJzggQdposMhPssQ",
  "key18": "23YQvazrb3gt3BK2cH3SewSLNgTCtEDUNs4VfXeYcFFk6P5vHVcmkCc45vgHSU9ZSG1WqGpWqo7DDRUZZ4CttR8k",
  "key19": "41SnVsE87o9z8R9X9UzcKajLPQqVC9gDUzWXdHw6u3FDpBhCoVDdsep9L11YPF8GGSyb2v7cbV8qb3sKZ1dUN5DB",
  "key20": "528BCc2RNtAQDfsLT9SZ2dP26Hu1anrYLHBnyK9EMsKDexvJjGKCAqSWRABM3voifX3nYeCPjZAPrsqnf3tz66AK",
  "key21": "2enHBQMkcijACLvo5NoPKQ6MWrXx9tm2ptQN8yKJmQ2Y4LqtBNGjtyoXZVjd8URfXKYqSbXGvyGb8v2aDV636X2C",
  "key22": "y4RZ2SmNCHAq6pd5XV74N4shFA8i86SpuqvV19rJGyz8c1b3o76n62ue3tNkZtLR7YZQGED6FsYT1yrdG7cXHKy",
  "key23": "5n9ULvNEeeKY8TEeCzRyXW5SnXzN27rWBxGa25mSwRx3c74KDWg8WLhXWvW5rHvYs929K5BFRf9NYuc92hhXeT9X",
  "key24": "4RmbNaC9QWFQMpgiPYp8BwzxVyEtNyUBRtBz5aUUJmewUrpHhFvZV8MSkv556tCi5QdeRygfwUKasnW9ouAjA8Lj",
  "key25": "2uqUyzy2VK8TUe3VtFymvBjkZkCcMjagAFvcoJ6u1tehsrqXQCkKQrxPXchxWMfCcg3SeqaVWge1DeAxwUStsUEY",
  "key26": "2rW2Yn4rXbExa1K4mEZTBCBoVuYdSZGBZsDiWn9o6gd711G5dTTYCNZBdArC5NxUXMDvsmmPzySEn2jKkwjqDtxs",
  "key27": "4aVbnoNEpHUwuPU1H1PRvN8CrufMbZaR3EiXDt6Usi5cyUtSMw8pZxsu2LbSo6Wt73Fbh1VCXnv3tMzefqAMKKrZ",
  "key28": "29Y1cHQt6v6W6sUn8bUyr7dGm2M7F81nUTXkvhcyyL6wfyLEn1MVsneMEBWoMZVU8F3MNGMjrHnQz22SYgaUqQTx",
  "key29": "3ZeC1o3LMCSgG1oPnLFkh2Kvma1ax9uwo2c9y6AGhxK61u5EdSVuyuKLd8bWF5rF1MgGTU3r4Hp7bmXYwC22e3Pq",
  "key30": "pPr5nRiDZh76ruG3zkPmZKntH9Cg7YH8M7kmexxqqS2ycmCidKT8LVxjFXEmxz2mPumxTwWSt1CDZuesvnei8pZ",
  "key31": "5WnVD46whGrJegtL3mQxpP8EWYkK8YxPDxanZdECyxqEtaAAMUTBKVedXZohFvFeSAitnbS2gGo6SomU9RkMkjNU",
  "key32": "2zcUtD7YxpzSfRLa4gfM1jEkdHvvhfehaPtSjXRKCb6zgKUFabZapvVzPx2c78t7RjnZ7MuwMG3pepYjnjMMsGJ5",
  "key33": "2qzzFrekYgNFWKmPcjxGXa2fwAWpxcnAZXa1yZLmkjGEgRcL4hyNwAFZeHgro1wzjkogFQUvXNLcNqaknWeZSxo5",
  "key34": "2YSu28M1rHZBpvf61TAn88cPTt9uBCtLiDD4NS2G27ZgmJX7PLyjx71tz6kd2p1FWUVXQxuX7w45Fno7AKE9BSwe",
  "key35": "eNgazrgL6yShHPUAAXMG4wFRabTPUCGQfD2ZTvMBPVeSgzigaTnfD1dRPYVEyCeioMMWnJRvj7D7jae7DPPKc5M",
  "key36": "22sXfek98JZWggtVNGw1RMPPPVmJ6Ecgtv4ytiV1V4e3QiNvyqsjqm8Tfm6aLHThRiaAHivGHu5qdfHTpCANn6qy",
  "key37": "5GPtNPcqbbfjLmkAE37FFu59hRRHMjAtDcDCLnQzsV7WBhZZzTAnX7wjr1NqPzFrzVhg32qMHzz3DYA3FQcS52y3",
  "key38": "4tG93ZKHVAnwT8BgDKGhtn2vS9iNvgWJZcmyYRwu9D4pZrRSmrSsPZbRPo5HaSDzo1DkiHoMWagni7hn4sZ4UZa6",
  "key39": "j4qcxBX9H8LKAhyERG6GDTNMJpz7JUWk8X3a6yANrEcLTogSg3n8SEu4yefWLX4XuNij3BZWtxRafesTMMRe1h3",
  "key40": "64xLiqBm8AiJ1xEkUDKnBo3fTzRsGxzpbgdtSiFpW5YkJtyYJ5QtvnkKgtSs8DMWYxym2HQCxgpDSv5KvuywAibW",
  "key41": "4UZsRQq7Nd8TLNnYmhtv1tfbwHyttd86r5eDw7mpGvqKbcbJhbf1C7RYooxFuEZ2rbunXAy5Fr6sJ6eLgAK7ZWXR",
  "key42": "kwzVTCducyqxjMR4Xaja6t7rGyhSsaSDxNjqTT8G2P7P4JRmjEbt8LckTHoYdU13hY3JubWtCxh2rvbQ42EWhgt",
  "key43": "33jHSVJV3CSbHrTNqcGeFwpyRStwMcry96X6uHfqHeubMnn8sPQQpDD59aCGVpbQZvzF2FsywBiqNHZUVQYVNSFx",
  "key44": "2SecjcEBzW4JePTpgtEpvwnPt5mVmgWdRohqxRrQSHkEAPHdCrFktH2phNkAi5CZwEDE5DxYyZ9BpkhU7f8bGv3R",
  "key45": "5g1KcSPjgP5oqWGq8EZzcz2GHyAFWSaEkEi7NxkfEAeLn3PvPnTJndAddxaCYGTJxfpsKN1AYaJNzbCogniszEfF",
  "key46": "53qFgAWkpY1SHvCod8CfdwHJwYBqY4VMiCUqWQ98gtnHpWMKpXycDngmnGRfWUkHUGC7mixgGMJtt83n6TF9ko7Y",
  "key47": "467kPWAzFV8vXFKKkiQCpehhQyz1ZiiSdQsf5dms6PdpeuERmG7BpNHziGVF5syPEQPYTqtpkj8v1mzSnTwatqwB"
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
