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
    "4YPF5Gz4W8KG7LzfrDrRwyVaNMcNPbD6iNzLc6ojMio6UGwkshqy9msKHdmVki6CBAoMRHB6yWF6VD7C1Y37dxzv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v1z28cLTvhyqgLToir3PCyLYizjTHhXYkgGZVjM2c1oc8cYe1Yn9z8YUYtF47QBWaj4gtyjwoL5LBbnPKNt8WSc",
  "key1": "NJmSTYasGLXoF6Z46qfKi6SdGdpSRYCJewpqB7P1VZb6xCS5ssRwPgRYgrC8qrQN6BkTjsvPSJ8npjNqtvRa9rT",
  "key2": "3UnqoJaLU7HCvM7ghvxmGf2MTEdTDp7oyn1JitrtwB75p9V6RqhWUiJh4b6MC3k3pzSvdAKXAuYxrcUMDZ54wyN1",
  "key3": "MUBqoEnJWZuox8FrgmRNBZcmzTuoL1sQFgbPTVynC1JphB9yF71gQgticcUEdbL1GcRsqE1FMZzW9SNScTSLW8x",
  "key4": "3jrf9JHvyt5Awf9gMR8Fg2RPCNN47zQKnkirZSRYLpRLSiLEcduePrRrKrfZDA8NC8FpEQXYozKyYchpG6e31ytG",
  "key5": "5181dBes5SjFd1Wn3jLyUwYGkpeDxrCmvBoBCafgXybz9LNoJkhJp4SRYsoeo1FvqnqC58yo6VHRL94E8hz4o3bb",
  "key6": "4LLbPLjChizJ3DwBzwH94JRzabHZKcjmNapJBdFjSQ7cGgGMQTezTsD9sRXAep2qRWaLeLRH2Uh2jjNGA3Mx9Lex",
  "key7": "6yEky5UuqRNkZXgfSXzwKBXuTY7bRDgSMF7zt9dUDBWjxTNEd7q6pBzKumANoBpSfyiw8XMkKTtMiiLMHT3w4uX",
  "key8": "jhnLFktY4LBjaVX9zHBrThL9roxv5QuSYbr8mkNcV42hg8awJmyRdJKGRwKEKq4RJCFM4p3iZARwcWmMrzW9xGR",
  "key9": "5Vni1uC6by2sfQPShLLv2ywjtp5KAWPye7epp1D9Lnq3fGkvtgtke2HnyuRsPUFwiz1EBVhuu6sjq3E5YQEt8v4w",
  "key10": "qXNDZVEbKv7ow24bHaTPu8eQnmK8EArxdxU9PsmCPM99DYcAhrphuGBFJ7nydJnCMuBMGzvAc74275RYfdtWJvp",
  "key11": "5govyiFgLbRS5BmfhTgm2eSvF8xJBPMhKNg5nNFydQg2nhn4ABTmeQ6N66X4RfzhQjo5S4sY2tZi3AU3gRiixsu4",
  "key12": "3jypiT7djFBMeXnmR5ZXXYuavPunv7WDjCxJimBy2D9bkTDxkj54ea6XZ4Po2Q6C2CppJSPgmPwjWDThpmXyUBkp",
  "key13": "3Zmpy8dsB7APMy74YpifKzxu8zUesfeRwVDXYttJ9seDCAgaKzY4h3Ye7AK15pr4sDFs1Pq7WTAvhCshSHSg56DY",
  "key14": "4YvhRYwdd6QFNSSw3ugXHZAVa2kAc1VAMUvGes8ZdCuu73EKvz48herNmH3nzSvVPuoGmdpKVYwrtq1bokAUuKYm",
  "key15": "4nYjPiWipbakQd9fvLsgPZ9Nvk5QG2YQii5FVpBvEd9Hp8H2QSXhNNHUY6muJv3CaWLvy3KqVahfNM5h9ziCUQQF",
  "key16": "2aXJSttZVwsebzoqFRAabC5YQiadywS5Z9RCFVPPAQmcHne3Nm2QW8MLsnqGbmW4KPH6r52x7n3gXBXXriAa9yEA",
  "key17": "y4oZWiKCXVdMh5D9AQm265qMMPnVzfXPoc8Er9zVP3DVGy1fZuVbGzR9L1koTAupLRp7PfQsWD8UgZyLkhLpJYr",
  "key18": "51PkxXfKPx6DXzRTjpyTFidLDMt8UBYdELgoWfFAgg6cXU2Hv9CbMj3bSwj41iZ3hRr1G9g18bMGo5z5rqhf62j",
  "key19": "5fPxgvTgdSmG6hBAqR9axF8cvytnhXZaij9vqu6Y2jmAWo2HvSknzy7ohY1K7K9LYrfXL6Wa6cxETPL6GMaRq4qk",
  "key20": "2Zn4NTVhLBhNDtRDvWKS4bd1BPZVZegKF163kphiZFW2HZgRNnZ2AbbEnhmjNYGRUVPheUY9JjCbXJUiQ7CKyMXG",
  "key21": "QdnnmpiugMqLgtiVKsYCWgAtMQi2gW3MVAgKwngwXaBSBfdB98kfrVSNexX2MemB3a8xRiDDjdm52W3iueCWqxC",
  "key22": "4h9xk7Ha72caJaVJ9mDRFJHzGaJ1unEvFFLbYzpJKJWJSxKm8m5TPUhvpmdfgWNZkyYob3cxesPULHHc54rZ8xRo",
  "key23": "4txduorYymBWPmGyUMTm3tUGdrkR9kk9GwaTQ1CH9gAd1JM5WS3wXshU3PSZoTspeD4MAtk7X56DBffEYricWQWJ",
  "key24": "5VfJxtNLwVmcuGPYeKEPh5qsPWjQ34n8ijYh86DHPhR311ygmuGazLtxPgu4jnQM38Xv21r8EmX2YqbehoAQLMtZ",
  "key25": "42osnFNBjZQ7WR7XfRWA3LSAB38KkSeryhtpbdvk55HmemVbJgRyTWXwdob8T9Fpk72vryoxTNvsgXhn14jK3YkV",
  "key26": "4iMjFWPukpF6vj8Kkux8KjyQCv8MoMmbG23xFEYUrdiqyUnodXAzuH2rSFADP61jjVn3THe2iYS1kXGkYrAWHfdj",
  "key27": "2EepdhrRG7ojY3PfkGWaYrubmVLsy8bDin3DNJ9ejzDcHCUefkxJHYiUWhPrVPyxXvjGmHQEZ6jJoV1o3rWAixYZ",
  "key28": "3MjyVGztXtEw551DWo4G3HFrPMwuSYq4k3TeRTdfXE5odDJiRAc2TNf6kMNzVBzjyuG9jUrnr7jnJ3t12LZ9GYrB",
  "key29": "5kg4VVwFSrWuwD4QEJ6YmMZukkF2fS2sCTp6N94F3QAAZK7pj9mDkfrkhptw18VF6Uta2MsTRULTxPDQAGd881h9",
  "key30": "5mcKRKJZfdYki9PLaR8rVTDzkXQBEWaVjunuWTZe67MCCGsWqSVwGZtBYaLsbxybNZncfqAQJQCFqaouZ8LTJumP",
  "key31": "24AWbxSxmRh1WYtCgWxDtBx6ysbBrqMhDJsPprCXqemh47tkBusjvMcSuaQ27tHb2Ri5zvtfXKcjN9HogKbKqcUb",
  "key32": "3eWJXq7PRJ7gq6KUFxprMcMiU4nGvwe1P6gkXiogAwRwm9yh6YTFpFDQNzZLUGNg2U34Qqe4KKofjQDYUerqnLb7",
  "key33": "HKkDtCp3Lak8YeJVXyxZvWVipn38Ta5dwFu9ifHUr5y4HJqaqdtu8iZJZfT3ytCUdsUUP1tVxKmUuERq4jAV6Rr",
  "key34": "2yPcA6PyiisVYLrPAv6gxmfbxg3Qom8PYxLjn4x1g43EMiVQyyr1yNm3bTYraVmwzL6Mw3UxrDEUkHBGAn7X6MrX",
  "key35": "2cTUB9o9brY8ZmjiRJENUP4troDZGK3Pj8dP7MimySDg5jq7DEW2UBf2PJ8mDkt7665nB9UagXXzkF55au5dPtWs",
  "key36": "5GqKU4UrxCSJeGVHRfVUp2hpBJQGiHPBuYg5yzFfjF11avZFx4Dr87Z8G72HJxtBrrMeTqenU7Ha9w1iLSx3DXdd",
  "key37": "3zkAptqUR4oULExaQGJ4NNfNrjkQatBTzPkvhxTk7sFPQUwyBFZURNVevp5rDjsrJYe5QNnb4dpZfx1JbhXhzHj5",
  "key38": "o2mytPQtFCbsXM91LmNrUw7VMKzFaC7aCCMkxJdLXFhdWR9FZG7kcb1Tw1CeHWofYDUbwLPX3C1sm1JD63xTtKE",
  "key39": "yrfn4kfpHE7V8BUXeRhbrexugS6pUW1DVifRayCxzrQaJ4feZpWXXWGEcaSLnSoi9FUWRZqXpGJfJzMbEuHRz7M",
  "key40": "BtNf5UTXenpHbvdEsiYhiCrz2W5rxj3syQaTKPgnJF7dVP3AQ9fbxCX9S6RAjh3Qd8W75yLDaUCmmCchsmiFAnD",
  "key41": "3QPjp5xQSr9QPqierGBW8gibmvSNwniSfRUziMxXqa3HKL2KVL1FjugQtB1BPmssgiisqVutsGFptW51WCssa8ZK",
  "key42": "64GCvauxBBP2XT2mRd2EtPjpkNszfmczBBD2a8RdAivnJgTRxsmR4gosq26Q2ctmtQGpkSvPPuPqdLgv1sDLVPKv",
  "key43": "36J3Uo1gCiY4szmSxqayG2Re8a3gHN68Ed79m8cdK4XE2LkQT7ooVGuggvUvG7bDUUNfJiGkkttmGMo1xyPQr4Pz",
  "key44": "5fS8Gng1mx9G82rrotMh28fnNPpobsQqet9KLPiFqeoXF8jj7MXkQVz92cy8U8MBXBMeuybdw4M8kgL3dSgKjWnc",
  "key45": "3kGScyqcoRsz44GtVfTVVwbyhS38HScEwFAXohc4TAbBAFRFM6Fq4CtR4YmsdQ162wgst5bvJvKZt5kkwhtxLBNu",
  "key46": "Yr9d1ga2TuZkw62eZELx1Qz1ZLpm5tR4Nh1pgXG1ysS2vbp9QvqjeSC4WciZo8cMD57skUZeguWUkPeFgKG8jvr",
  "key47": "3rzKahe6vpjvjruJMgRpCf6FMsyXjer9MgXvxFFK4Piz4jz8deYzhnwQ2cGqEFnvbFWfzVVcR8qWvD89sHUrDqMf"
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
