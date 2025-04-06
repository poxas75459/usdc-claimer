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
    "B2jRRoTeBaQuoySXkSd4WBcC4Mxm94dBHn3de8cZZBRwFD3XREurvjeD3MhacQBmEGCZ3y46cCor9bAXH5qYzTf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zqedNUHuGWzpg5ASfcTQs8ewhjLNP6VFvmxT6pBNQ76fyvDzS1G5NVwVR5HHDdTyB7wqSapy3FdUEcA39itXdDT",
  "key1": "5Dz2Ay9LGuSe41AeMNRd8h6dMMDNomQcwBodJ4j8WYG48fSrgy4t9m9NhTjf9JE6h5nxjqZa816tJpY35oPVQMnM",
  "key2": "3TzECw6qnws3okgbrQoAGp1Hgn9pczge7cazPMDZRfeLZG2KzPoDqh245qmuYhoJxtJ942HhcMfHCNd5WkXLS1GD",
  "key3": "5Gd3bVQ3XqRJju3tzH7FCnLcRkbF4zfvFuX34hkASniK7QWdHQCLsekfVWtb2iwarQH5YbGiyBMAyPSjwMq9bK97",
  "key4": "3KgKaqYn2fMW7ZstmeRRkKRDMQehDWeqWTsL4jQi7Tox4BPDtbWtGZwYNqWdnRaiZie2VTTsafjiyW5j9dqgYHRH",
  "key5": "65YQNXe6opb9z7mxojuQozKVj4g1QrXC4V8RucCyTpWiy5rDFQporJx8i4LFK4968aeR9iEQoaVaabfiXnchWhDp",
  "key6": "5TfKgQueRdfGacpFk1yQXmWRx3vbWUk82qcKFbHQLYoRDmjABJR4oC1sDSrXyin6mLWYTKTPbDqNniXLYLWjMjXE",
  "key7": "52QW66rzqxLFocHXdJ6tuzjQ3EeWpAFc4EM3jYuCiArrXpEHvWVC9iAFyD3SQUCorxP7nrWLpXBbh5ze4AftkqR8",
  "key8": "4qP2sPE8k2aA79u3ZfLFha663gHKAKez5mSvtZfzv5AJNRDYEFCkJJDUgcdJQkEqc5USvcM2HMux7BxJnC6XEb5",
  "key9": "5k2PpgwngrsjDLUhfTYkG3ktz1r6WjxvBrQGhUmoPNT7eAHs6isRNiRJLtYX4RiH2cL9EbvdzMtAwW8GUYUYxU8G",
  "key10": "2PiMXLemAaKZpeUdmwhCjpizutD7LRWKbfTmWkVJmCSnxqpmHwF4Kukouysykv1zMxBRPPKTLWMuR57A7wFQkTLm",
  "key11": "3t7w9AwumFLSJeH8qc6BVMK89LR5e6sQUJd6o77XQawQYftFDg9hijQtFX3ecnF3bkEabQmvHmyh69FfK392q164",
  "key12": "57kt49JPDEFpfB3PkyqGeKCk7nyesNrKrWenGeSTyzcn6oT2wCQKTzxG1UbVWMnTxupmVBpkje2HTjW5z2gY7Vvj",
  "key13": "5Wrxq1KEAJE9KBEHgeGYA5SChF2d2V1FS4kKLgE8h9WxXHCJ6kLfXQrGT7UU6TSwKpWsXnjbRNjp1MaSC2ECpet5",
  "key14": "3VxhquU2iAUq9nhE92qGzFS4kyaYyggyqZ3NV8NZ3PyiSLhPsxqL27GjYNAthex1YuFSgpVrkRdKo9vnhZHoTzeq",
  "key15": "49xk2NL1k2LHMm3nkPwsTymvNpCZizoo39seBQda1dPz25P8ErrpZj6YLfnXGDUFZTjcfGdM5WNiHrrKtypjYDC9",
  "key16": "2mTi2CmHbu7hcbKtUjr9jLkQxjX9fzJvTrr3WFB83tJ6T71yjvsRC17Dg1TRNH1EdziHC9DaxiEcsXkegZXWiEtw",
  "key17": "3yz3R4smdp2NPAFUsQB9aXN2ZJ5ZebDT7NhoaaXTPxxT2BSh6yNkasqdfGQRjhshJWE2ZLic6mD7pTyqJHBHfN2q",
  "key18": "2SKhGauEnv1dm3Urhih1pCedtptsEbWz6rEV16zZdqDXFya7hZs6KH5iroLu4e3a9YXhmyJn4LJHXg9S9cARUkj7",
  "key19": "23EikZvp84yMBhDmyEdj8KrMoFmvskw3yqDxVyC7FRAL8VkSRBSVaf4ivBS44R4iX3iVzC23ur1DuUa7w9SfxXWB",
  "key20": "gWVKwu3D7VFEuFHZjBcJMoU4Mweqq6mhKMadYsgE7hzbeqMYR5EBDd1gybgdzuwmGQMRoW7g9QMSnTJDdDK1Em2",
  "key21": "2JzYWACb1Xv9JcUPhn2RWdjoH5uaMLXqMjAQwjMyKaFv83RU6988ALeMUcPYZU47WoKCNpgyFKJV9EM4PdMEzLid",
  "key22": "2EnFpqtvhGpXwpaKAQ2dgjpYDNBRHjq71YNUhCA7rBgK2S8v2GRmdFrWkvNAs21nHGMwPkGcowCQkjkCLeoHA4vg",
  "key23": "hewAFK4wKex3fPgPy8nAwDLBF2PTYDiBKS6nMBq6ugM4PiRyKfxCohYMKpvDj3ukTo2DKAzmo5WikBvNJFJ8U8o",
  "key24": "4YZpudm9LUspCBXEJ9xjZP1uRBeBi5f6ccWtfeKynJ9UpmvmmikAUyZUxgq3KPTELnJfRCiVzFAfEJjhUTnaijW1",
  "key25": "3rMYwFgfCyY4o8Pnb26T9aR8wX7VDH9cL3Y4PtEKD7dinQwk6DqJoAtnqbvNQEH9qQfc7vUq75Y74EV7GnVLd9zV",
  "key26": "hfBBxs1Zuzbx8ecvBZySJ6vC7niUvbpodUk9j5FoSymr49nyKugw32HBnoLK2B4uCprn38nzh1tfgP6SJBXp3M6",
  "key27": "3vUbHbvq8DxYJw9bjCcntrbPgqttqodhGBkJTstgPbdrPViCreX9reB9Rs8VCfGZnoTpxMGuojDDwL3R1BiQee7m",
  "key28": "2Z5KSouMMjbMCZyFCR64Scrv2tBYxExpqhGDnyJgMhKZrbYSJ91JpcvQZiAe9f7o6J1XazgdZZvHt3p8FD1sdZNu",
  "key29": "HFAyLc3Hi9mrGceYVPX1v2cvH6Q5RSV84okSQ52BUCMeSSuJBFhjP9YryEAG9pmZcMnzZ7J2e1ETSFGcXzGAeUT",
  "key30": "49WUzMfFFRzF6pRaVhx3bFYEm682ype1s4GRXof3brsVVhpbuVXxtBfcut6bFZWfKuqJVpMjmvLhrJDVrcFsUned",
  "key31": "3krPy7dXq5pNz3vdUnFipHPt75mfugiq57Uh5eCQhs4ePkXQX39DfekUQjYRpZ38yKuA2zptTbaax16QGREVcxbd",
  "key32": "2xkJXyswoRAuXDw9H4Cya9gaTDA4n2PbtFfRVXG7jQc5FBwkhoH45XMdVag9wafVytHErRJxY7CTPuV1LmQxhhhW",
  "key33": "3wNgj2bFpgUzVVFtvs35LRi673roPARrq1hJtN3BQcNV3wyFMdiD9eGdeN6NZ3ngX7QMMyg1k6vZSnv2gS8MYm6",
  "key34": "2v5EsQEirHmTtP2dNPkxJpNF3qXsJ7UWvAtqwivQyWuFyrWpayTNMNZx4qX98bZNBqDcRKAtzfsgxfYT1VH6C8hE",
  "key35": "5UT4N9fwx36LbruP5jntyr21uJVny7PHpdFNdM6rDTPzUDKLecViHqPbY66G9FpWpfgSaZbsNP7wh4HybhiwS4PA",
  "key36": "3wzoGj8M1h8ADnCsJJgABTxqwccn4SoJaJKEma4wS12R4pW8Y3zQ4gDzhqryt717DJTidMQxhzgiP46Q32Cidhdy",
  "key37": "4wPzSH7tUpEWgXJzHcdx2cnptEqWgttWVPt9uTF5vpvc9SF8S3YSmnTD96LykfaXmMWSXj6zx7CPMaYJyhhUsABb",
  "key38": "3XsfiEMjUcxMDhh2ZU6fVj5QtJk9sYWREXqa4DpcXoXZ8UYrudR7toqZyXvBZqvWEhnBHa569SWaRJuNrtkp6JKN",
  "key39": "3wHKHxEoCALqeCM8n9nAYE2xpgL5cjXWThH7WSbf1WyoPEDeyKSV6kGR7oyFfuvfj5vo1Mao7jrZB5tu79jSDjMo",
  "key40": "4rXZWZD2a4R2ZZQ1QKAxCJQSu7oMRw88GERusmNozn6dNdvb7Vni1MzQD5NQeeEjRwPecFu7WzhFPgVsLMuPP1rA",
  "key41": "2tXPUNYkYS9utBPKqGk3KP77HvDdKx7WnVNuZAkYev1pxJcMqm8MenSt1VvERnAhYXpTt5CpsytEK1X6Fv1gZzeu",
  "key42": "34xY5PYiADqnyw2zCnj3yRMvP4HuQSHzXU1eQDMsaBR7E7bwimHXp5pYczeAJ3PphyFsJfejyqeGSf9b7wWLCXVq",
  "key43": "57ikei5A8bJdzGVGXUbUATBCNr4JiXobPgQiLt25UpCt18ikQLJRwNdZmzsd5y1Gd1HS6FkTJkTXkHdT7ZZF6N6b",
  "key44": "WU9DLz6d7v45UT1JjofjC9dmNAa3F4Cu4iKVnZ4ZjjaBmQGcQPfdiUwxJwndd7ah5Gi7eg2iwYkbDUn6ybSwUNz",
  "key45": "3VY55F6mXAbUYnNUQso91LYnP2jPdTYe8QJ9b9Wh65yj3Uji9DiKJVSBLe3YUVa2hdEW3WJKpGTQY7KaF4QjwgPf",
  "key46": "5DfZzYBth5LgQVGMCDuSGYHJTcf4mMmyZWgZW46JFNsZy4atjyVD9gSU2cQEYWuRESVJYJUcP95Uxv2UzY2EF2ck"
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
