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
    "2xD8TNY2v3A1bPdsqvRtR9Cs62qMnE5bT5yMfTFwiB8cqpVQNJbz4dyuN86VJPJSPnac2S1T5CPWibpaUF7MYMvW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n2R9WzpERFBver8mR8X5XTwsFbBxMEwiwkz9e1BVpj6jjq2Ywt1B93jbU57SoMkAnF62kvChRqGPHUosbSs7qus",
  "key1": "331EA2rEMvytRRwDwfgbPu8brMpFYH8PVcQS5xuSpEo5PV4FT3nwYhASQNq9gVG8U8SsCiewXaPtVa5W2LMB4aj7",
  "key2": "5G1HqyV7phbXm8TW2xnbuN63hMriJAuk8LekHJgw2x5UJJwhJBJXD1FJcXRcTbaucruZ33ahCyVsAq21yMS49qeT",
  "key3": "3WdSNyRX5hVJzsXdLWH8iNJ553BbmKJVAhP9yDjaRG6pqMNpVj7QcmKP2MavJ8zy1SHfhyPQei173kytYmLuzQxJ",
  "key4": "2qmgjv74FvYVrpqT72wTarR3oyeoSyEYyd2FWoCkEPcARhiKDBR7NQtJvor2Bxbntdf8S99CE4dC2ScjBNWSVKL2",
  "key5": "4gZZfq1UgPqb454xo5rUMvpAS7t4vn5y1dUuJtG69MKg43rbD3ZpGAamstz44yHPoDXXpaUSkSKMpkMwGXauhT2k",
  "key6": "3DzP7g3ej34wEqh3JqHt1Hv3bXyMFsbfqEcKDbZWrWCykVNTB3e7owQM1WPUAwVRJAVSHoNv3wx8H6vRSFm7K75u",
  "key7": "3dkTCGe4BQpyYWTNsE4xdifkVMjdJ29Zro4dmJSJsD8FurvQtYjfDUmbYhTr6RLfxFz6ifuBVqXehdfWrajZFeW1",
  "key8": "2K5VsG4b16hgMcrUQ9n3V2VND6D41Koo36V8pd7KZKnTkp8V14HQWMRFptkEc5sxuQaPPCUWoeb3VBwrGU4UqRNM",
  "key9": "3AKa8u5N7sV7jxt2X7hoHH7srCks7k66vT5RdKF4FEUYgbYoMN79f939uZrhib389BBUNyrQwBoArhthNmEEMvBY",
  "key10": "2Shc79ma9RuFyYesPZv16d1gSvDUHUSPkianPcENKbUeaXracg9AGadHBNYK3fu78XWLSE1Z9JZsEWTQ2vr2cjSM",
  "key11": "63ZoAsmro8T3QCdVZEDD8eizdjBy7Nd5aXyDcNJtuV9uyJNEH3cGdPrSv4qKYXQvfHGeJ4YjA6GkzWePxkDiEhvG",
  "key12": "5f12MxWLWMj9b236V7LzLAzEDwiU7qNWCY2axZ5oMWZL291iLtsmDxj1ar2ukEJrHuTUz2Rapm3vfYnb7hSrsK7v",
  "key13": "5CvJsjUpiwTLrZbSzgepSSuEQSCfvf5q1w7FsUMbmyG4Jj5PQUKspBaUArt5qbMVDGTfovCK651vSCfWu9q2FX1L",
  "key14": "4so5aUUHSs499DdVE6h8CKHd4kWUaGfzH84xfWf3RK22MkbNN58XDtLo6EbidLohKbNEEZTuhLieeZ9hNcnGRMK4",
  "key15": "4KW71dCUiaDyuZkqHSFMh2RtzCigunGAtDp8h4jnboR64mzAkpNfDxiwT9XBm8vEdbypC3ZTPF843bKWjFx1kwpG",
  "key16": "vcAmDutMg9nSKGRsJN46Zf1fo8CaYPDanbYa47ACAkyx48CLL17pGg6ZGGtBL79S7ewYtprAZTneVNsCEzu8aVr",
  "key17": "4LV15xHcsHRqxV9WFBqfoynXSfULaxBWVcNrNz6HdEhV4jrmnx311vdkyAaaEoc6tkjBd164wyj5JDQEQUfSU9Tq",
  "key18": "4XijhUst7RDWE5f4QCxhUf1Bnj96hq6Yc73JFtiTRGxJUNfTDkp3KhgydBUihJCqKkzfcDpu7vgaTDBHTCAgDWi6",
  "key19": "5PhPy16NcQTgPPohHTa69eXzdWJt5aPLhVmqjQF65BT5wGE8EVDS2dZZ6Z14g8b1d9GDfKRGCt63NotfcqaiNfZF",
  "key20": "28SUb2uUnXdHckEsP9Jo4DJDpBArLt8Sh6R5yJXq7wdm6Yg3dNuSww1VFzx44SQKL6WxwC34xvY6kg43jYsrAUCR",
  "key21": "2A75gHjoUixXqGK7TzmafrtSga7AKYFBXVsQGwRSAU6STjBJQQPc2TcJvTCANyvA9cBEcwvygSbT9Yf91S8K1FUt",
  "key22": "2bqBnYnHj3MumnWXgzt7nasoSJJTCWX22s9xeDs48ayVgmaxCeSjXCU1ZCSiYQ6998Y1PFthJtVgM1PYyhwm5x4p",
  "key23": "57XowFbsVS2adux1pMiHVg8f4kfaHz4YpJuvVWn9LgbyosdLJSazs13QqGeiVn2G1rqx5FoGbsg33rRkwqHQsw4d",
  "key24": "5HSFscQ3REBkXRfCKU2NoPVN5WqNcWnEfXuYz4WEgnjUHAxaL7RN2naaWM84CY5KnBxaqxMbHfkoV6PfNMQsjp6G",
  "key25": "4XXsj9VcfaEzwop2yYmHdAETvxTP4G8Qn1F67jq4uQ1jTLh6G2yKzU7zCVdQjAFxdptEuVz3J75Tq1SnAr1NPao4",
  "key26": "2uRAdkpYd1Tco9fFsbVNSnAfQSxaHWhQHw7Jeu8AEtPjRcgi5nV5emZujGUX3XEQ18cSwRBJx6f447xMxSmJWY44",
  "key27": "2wnH52Rza6SMzbHHCVowvYJMoA62k2WuTAEgv5LSeUSEaS9jQmtmgPx7k6VgrCs14aqAKerox6BjTuJ17DmoZFG8",
  "key28": "B2WxhYXrLGjUMpR2pVMRr5SbNDpyF3Z1mCCu7531UQnGHvAiPn8cWNQnHy2CUcVo8rv4vn6exWTZQ5KY6VbwUsY",
  "key29": "XTu8b8y3D8YRL7CLsxUUvKPzzrEjNx6tgVFf4w6QggnPUpFApMYcJvuqk9sMDGTAmW9NSbDD1NdZKqw7Mob6Lwz",
  "key30": "7zqhoKGoFDGDLTt11HicNEZPvHKpj4id8GMZZNihBDUbMnkDMjeY7a4w1Z8zEcekqCqiXiqTipM7Z3jvAjS7mx1",
  "key31": "2iQYHuVPmEX1MMzEtq5RbgSA12vFnH89EvyKXdNRSEjvVLzz6p5NBdr6k5knsWowToyN8Lk1zHU7sNfCx9CfxUqE",
  "key32": "45zTjrFhkjyJmDpvqRxwaWBkkHUCkCpd3tKNdhtDaKs3qQHLmxHhWuo4mMFuKcmehTMmWBAT5cYPexqvYtxaFBnT",
  "key33": "5vEHnqdA9wPKazWhVSu5G7Kjp5ted7f1nbiSjro5LRQBPJHwMvoPCYRM4sp59ZGgKX3VZcKhLcd9xXzfqSEyHUAt",
  "key34": "5fmyqcMB4sbKD9p8KNsNVfCQEFSDT3FTdQpAcHX2kK35iuJjeHKjo3bRkNDX1Rd8PzV2mPaV7keqt23eLiCiZZUB",
  "key35": "57g7svjn1aCRJPuGuTMJaxWjSe6xaPWh52Z6AMrv98TBfnTm7juHWCsZp7yYL8GiG4wx4Pd5LZTryzBCej4T73LW",
  "key36": "2on3A8Kz5a8buVCJ8CPUWeD8J3aKtbQnhFEgTtDovzM6KMrQtMZHRYzGaA8p26wvyFvmSDFyGAo9X1JhZkyu7Nk3",
  "key37": "5yJh48rCuDzesRnJ7xzeLCKJpS5cBtn5NrATHYRdVN9g9qow5SU7xsEsycSQ7rTSjs6Rt5PuSZ3XfNMcjehYA1D6",
  "key38": "5xxBW5jAV7PTjfj8g2cSkxKDwCrZcEXAJyfGDHhwvzjKDUCtjybGbwAzMhwAUCS8ferBHrtdpyLpDbQsJMqVqQHa",
  "key39": "4TkRUaJk5jF5NvWQLJ6rbmfoG9UbtxkgjaJ2Eyrxe2VKvsMgvSrum8pqEq19R9HwzjXP9ZkJkSxridwvXiTK6kwq"
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
