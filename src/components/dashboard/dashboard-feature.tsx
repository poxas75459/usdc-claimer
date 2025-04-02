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
    "43FSn9uWc9dzhMcTixgozMnuZUGNZ63pKZLHSyErd9FUtwkKqBbyvDKjdERBVpu7cP9D3qy7irhnkAxbGzzSUSqc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "244DbFbKxc7MvD2oy6MwP4c1xJcJoo9XuBsKG9nrfzn3CurmZ9uNjPz4P8JFvgu8Q9CamovmqFsfkxNi3JtHAjX7",
  "key1": "36MTdo7rNuPAJepyd8dWp9Z1yhPdnoXFWNGxVVJb8PipfF5qCYNUL18cQXYabaW8sW2UDVNwK5CBN8emXFnAcNYW",
  "key2": "3wxf1ceq5ZxxmyVSCcdoPJ4knNoXWHtCsbPzNtMYTJJcAR68rc8FuvphDBnZTM2aMoVPjA57ZrwVUNwaQoSxrtXT",
  "key3": "4wu8vRrF9ehwSBKEjBWgiuVPA6CWQC421sLLfb77Mi8jhKs8ySxWyfqRGuCwMhXD8D7Ty1acwrrChfP4twitc6Pc",
  "key4": "U9xVB2Si3pdRgBdjEBFBW3uwsySZtsqAZ1YqE6A33VLYEzAJM6DcHi62YBGcaUAHPiUoZzPWcV4AC4ceNqukKfi",
  "key5": "2dRk4qi2NuZ2LKeg1myfxKNAqHoyHmv3m7iYKBx7jrgyDtCHFesvQvR5o27TYHbCdVMBaRsav7zjK1X8c4FgxFiV",
  "key6": "tp5qFFjK7ovZNYT8EdXTBYiLQzmaNZtWpjxsa94PVxqyjXwTDWko5aMRDhetP23NXd6AN7LVUCp3EH2h5TESpcw",
  "key7": "5gd5XwEMpCoPowTmRdR2w61E3jpak84F6zteqcD9yazrexnxXtSzepdVJjU78KQLLGAbeVsJqNtoy4gXEShYJYnX",
  "key8": "2JjPC64WwCCdMQrnmZ56d6ogqzxgZAaLCW8R79Fcj5bGBWXfYoaBzKnu63ANy8ApkMz8CzF2qeKC3dVHuXjrtnnB",
  "key9": "46Vjx6Q29PnLAEsLGovKMMZB7JKUdzvsaAF5yVM1DEyk6BFUqQTcgsjWQWfrk8cQsra6UU1Gvo8y81Mp1bAxG32g",
  "key10": "YTyjPLtLYkwc7eU7BVHsmfb7Pfxoo8hnpu4xtCcWE4SpkzUVSzfAPWUxdiZzC7RwqzzzbQFVkGHJv81ovQYWgVU",
  "key11": "5FM9i5VFWjMWX65FsR5nZzCDsPZWKtLbrXBKJ4nmK7jEQzX2Dd5CDDVXnf5HQ6zdtbonT6QMm9x81mYvvJGU1CX3",
  "key12": "2V76PveTWddFNeWNHZMbPDfmB5vhNAddidqzhkVHRQG5PvmmvJZEG6CGcwRNyyksCYzQpSS3YxKCq5dasC1Kmjtr",
  "key13": "QV8nuR8EUCAXTcG8vT41WbS4L9dENTBh33RTPvyoUMPdiG5nEL94Q4fhypNEEjQbZMi6CN187UgLW29roZwtFw9",
  "key14": "3NX5Fjj63Vpjn1N5R5VCzbCjdbgEPhsPRqB3RnofcgzEAfyrFQdT4e3mMxASr9NKjPFo73Kn3UF3Q6K5ykZRkWvD",
  "key15": "4QbYNkC2VdNryLMZfuZnrgTcN1c2MVLnZsTWfayupqXLMxza5gJHWEyUVC4UmB4HykT8SvgNjURQP5SY5w6t7p7B",
  "key16": "2XhHGBvZpcEWGkjEsV3H63Nfo8E5gDf9vRGnkvmhdotCMkbNpcUCUFgQZWY6Wk9uu3uAd2F8Erpc5M3dqyX9YEg2",
  "key17": "5ttrvyPzNrd6konnU9h6TqJ4WGzfckEnyewEcYgkb8Jwt6PMtBtnZUbZLQXS5BDQLvMt2QLg6be6BDMwLzcSVQrq",
  "key18": "Fi6QVi7s3cBR7CmfqaBJLDsXMxAaF3tXHNEudyPssBvp3LzH4LyPAnwfabx6opSY6k8oQJHr8VbfYfcnEs1TVGy",
  "key19": "47ujE64ZXPsAm8VR1cGw97cv4vEVpARzr3W6vp3sDkqti6VxSBXfNcyeiZHkacWQNF8Wzm7ehQaLyFsVLFjzp1kz",
  "key20": "2ipUKMD7BpftzjVrrren6wx17o7xN1JPYRcx3iYTfRVWXgeDBvzRb5zdpUXB3hfWAx7khpK3L6mYqoUoobzifiQH",
  "key21": "5xLABn79DzFPjkPBa5wfHtXGmCoSPxyJjL1tfKwb7h7wTJHqggTjkSNJ6h7GaLFQiRmNxR557XERFLyaAVhRCteW",
  "key22": "5hBTKB2ZNUNoVr9pUyjHofKttb3VEY9Uf6fMjPG3LQUimHvYLxQRumUNerQtnRHxC2wD2Xep21ozuHEwjdfnv8S",
  "key23": "Fq6p9CSUU71dnDdSa6dGGD4EtRCwLdvbbfhwLg7CpGSstY7BfSGfKWvASg9fai7kiB79JLq2fvVMtj2fdJwZCCr",
  "key24": "3vWEnwLJbsFPVL36VdhQbbZHhy4fiBzw2ZeMjyJYvhg7uPEnWEcUrD8H4SFqcoxf2HJzcc8MMqMxW5eCvH9vgXhs",
  "key25": "2XWDh1uxvDxbxSKP3b4H8TcbTDZYfWDZbdq3RDhoXCP1q9TpN9G8Qur8K7eQNstiZMfRcdxkADwbUsbj2ugLjUnL",
  "key26": "3ms4sLsbrJti99au4Q22DtJh3GXhudghQmiJv7Wgx5BsjpExnxYPE28apuYPPdd56vjXHV9REtHvATo8u7upAXMe",
  "key27": "5FhTU9TZ5q4T3SM6rz7LJRQyP6imGjETkWPypV5fn1xWPuq7GV4mvJE3Y9mocRNcXz9PFoPXWdGdZFLRWu55hry4",
  "key28": "4MsiMP1mhufnbavxgtr1Nn5mGN4gi1Sy6X2XRjwjgmA1UesejYgX6idGTDkimW8ngwEGfJiHzep4oBsugWGL9kJK",
  "key29": "4JP7LmiGpELFwEZfRW1g7A3ZccqeEoSyBw5u91sX9qCqgJj7aW3u1RuHDCdjQWkghHTR96SBfuoickCsX4vLT2mS",
  "key30": "UgLWyaxVi2qz1BwmzfcDrXGTKwxFouxxbSrJd6X6r76R2SqKgUudh3zwSzjckmdbRHf37i5WcDT3J4qUGgwDkPd",
  "key31": "29mnBRkkeKs99DTV58za3duv1FFkdZLRUT3A39xx9udXHLqev5tPRKUdnZu4GD1N185YuNpfZUALCCgX1m7tAf2e",
  "key32": "DZ2ZdodrBLXFyxTA9B3owSsr6axBDQfGJU89g3V8j4GXVBUNJPqPtkpiZRjx3N55CHAfwh13JBXGqzbybvdfL7t",
  "key33": "5JybfjZEYV37HiPt7Y6ZdoA7C1WX4pQUbCXiMRk9qQp3nSKxXGLMBTuzQeeBwapaeq2vNZ1CGRDtf2Hr6mbtNRvg",
  "key34": "5K2vxgXbfFYHySbyJ9D2s1jpcpm4BbBkNV7bWw7NU1LjFCt7n97XzeqReYVruqXNZmq1C9ejyVBFQ3zJDmkhJMgc",
  "key35": "3e58C2edokHVPKzzdqs7wEWASvDdYDjjYnVUpJgoEt12SXjdf3sMSa295v51tVbUe2bL2yewmM75x6VchFjGDFcB",
  "key36": "35QgtAfT92HVDpts964Yrqsv3Cu8yLyiu59GMtVMSt7MHC7frDPHeNkzXyEeNkTUyjViMtdMXEZZao9GWDKqZeUS",
  "key37": "1JcQrBSfSDVCBAyhg45ZN76jcZ2jThU8G6YjP51PS6Rp3rBEYY3J2yzwADrobnZgpqGGVvFy3npa6cqzJnUEWVZ",
  "key38": "2Tr3BfGkbSmemq9JEYP82oxFEcSBQEan5mLDvD7QxdPKmGok1BYDuLQgwd6mHCWFfqDcaqvFGL5qLxPEK5hpjjxN",
  "key39": "9fvm5ozxCc1YW1HhHqrMwE82yrVGXZe1x5ohFMwqP3QTnWzfNug8xXovW7ucwaXXhUs4aVa4wr5HdxnbjjqKxxu",
  "key40": "WUo6EZqNPQpGBkJhtZqMxahDxteF2oqbbwh1ByHAFwoyXTqor16tJHCzYq6QShB84GXPM3a3Fg4MUvCS6La5a7V",
  "key41": "4feusmyvwJ8vcYMZo2jZX7XgP6xqNuaWwX5fPuM4KqDp7G1k6W8ECpVjhs8S6wUdFjebRdqctoE8cpVrUZAihYm6"
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
