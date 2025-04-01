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
    "4owfLoikC2ezhiyZHFEKCpBf6uWcbJrqhRUqAm71vF5gEJp2irEFHy7wbznJAVUkxQYF6iar34ynBvTEt4z5MWDS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57uhvdzihimzJFdvntXT3amFZYkACQ3smNT8eHrFPV85eAHte632XuUmtELxj4hce7B2kWWZwVf7pTRzXZgX5vr3",
  "key1": "2Gm94Chtkgz7MFp4oDWwz3M7RVzcw8nsesor3MbkrspdfeDLYWzPqUXW5F9RiCBH1hEMB3maQTYCmUmXHhoUQczE",
  "key2": "X2gZb5u8Htz6BMyDDhgha7mL6i7XEnfCF7hJqGsHYEd3xxJfyjx1tVEkBJBnjdChquXAk9cqDkqH55LHj6VHmUW",
  "key3": "3S3Z7oergDH6zK1K82HXPW8vrEyu8RtqT4ecYxUYgKPDjVnvuKYu59w6TLnVrZR5q1PUfWfRCZtr4Fkw4xweBajs",
  "key4": "L79dtAxY3Z767qGMGcPX8yEcbbZS94h49tzWdExHSnAkTByfWkivYsVDXyWzJhq3rKMdwUKEBPb9agd9xs81h84",
  "key5": "4H97TURtU737uB5C7YQa9JYPyLHkkqisa9ZnYsAVunMpVJumXSJn8wDseWeJRJwY9ZQps2YyNJQFbFDARW55fMzn",
  "key6": "4Q29i8P1GukF4Ku5147SgggUXCoBaagQvJwv1uBg9kTcabkCtP5NUGYmoUZyhJWsJ3opZiKcd4uizS8ishswJAzq",
  "key7": "ph1QguyEAAkZqxRgaACb83yXzzmzVB8DmHntLmQScQbR4tUcy8G7C3TQ7XYP7RrShTSykHz8Ebcm3UdBH3RPjBL",
  "key8": "4hZymirajme8zcKCShB7ijeLsMa8ix8WwwmFMUHEMTXVoGK8A6HLxzsMsXzLgsbj38DdzppYBvFprXrV1t9NdqLt",
  "key9": "2rR44Etts2FLmwNquCCZqg2Xu1J9g1o7Lb2dxtVSsAaDdsdLA3SFaJ2wH6VW8YENv3EyHNKx28q6d6TDNEs3qkCb",
  "key10": "2d3LjGqahRoQ2HDo2Sx55mEmmHQxWneNszrDJGRU7jwjpywWJvbeJEFPse7FQaeT3ohJnxP2Q1cuZGHeet9oGmuc",
  "key11": "2Dyi9BYp83CgNufHuXHcuoYJPySnEZg3cJrPmtBRhYUee9FVz6dMsRfeYEMkSn4ZYCNcns5JsjMWX6E5LJDu1fY3",
  "key12": "3HbunAapuhYCc7YLeyjR9YCnd79VRAPqZzjLbsugUBKuFnBz3LFEqrstzcUGCkUuHrteuXAWnSjKFJaJJFw4f3ie",
  "key13": "nTVP5WwcDK1ir8JHd7x78nSMCVx7tJwwxceysrJZorrThn5B8snLm2JSskV1MH8ky8WdSPezrmjBHx9eqe4ZAY7",
  "key14": "5JNGB7EMJp9U1A5zwgPETyquRYRoXHEi1PNsNKtb6infgDUeR3CJhswTnKDhFGCRBrP3y6tTHw81tvCS2gnsrsq6",
  "key15": "37uTtak5DrdZh3c2weCQVMoKKaK7pYSSBUBdSxZQLA3ioPLQA1wCFKT4T1ANdW8ZEDUusMSUDtkNy5zubGeyCSKp",
  "key16": "2RYiB73PVZXiS2KK62wW2Mw6JZshwbW1HQ7j8nfCLDFLBY2Cm2VbNXrqUDtfChXcidBFdfLpZjbyD8CG7iYZntH1",
  "key17": "SWCMWxNid5KQ7y6FQaZqAj4kCMFG2NsHRCgWiCicyBSYdAgEmZ6qyGT18Vcu6xRpPo9Yh7mrEvrzM6pHsTvaXnq",
  "key18": "46JPmYexnFPKQ3MGTdUE43622zAxZop79TdZU2iRpKsyN54HkBrbxXHVXww3xHijib4mUvmrsbTfRHMS2ofs6zjA",
  "key19": "2PEmfjLGpPBj5THCCp265ZwykY7PkJVxgeHW4eqpgkia9QvZTnnDriswF6hmEgjszfz3ShqVnDk33V4pyR6BwFEf",
  "key20": "3U6RmBVYX31mnXfspT4Qmp2ZpRSgXngYvVMpJr4ML4ryqHBBmdzYm2Vtuo53CQ2exdP8MaFq14m2N1Z7yH1PZA8L",
  "key21": "48WpztVwyvvoJmuixd3doaGFat6RVLinW5KTV1QFXy4uZ6YVvR5MygXSCwcmt8kj3mN62udPyhGj5e9PEhHyfSMv",
  "key22": "4SDzxC4Gj3vJkdrxoUxoTrmBedpg4E7ChwkC6ahcJBfohcG928kVRGkRAwsFdeB16vYphmoQXKVdXA1bZpGs3gcL",
  "key23": "57uXzRNPxrcsoUkQbsmaqn7FedT8e9BB7CaxY8Yu8nz5k1ANaanwvz35w71Uu9rnVY4P6uHFSwAFSuLjTtNs8Dqn",
  "key24": "K3wQr1FMrfFCuLM8uVS1Sx7P8BuKFGpVVaPiN3tUuyaFNuTQH39NbFs5H7bPmMq7ieabfRwiFS6ffHvHzfYnx8M",
  "key25": "5Qn8oCkfdzRxuYo5tDEM5zoXe3unP5viFziEHhyhpLuwUi7hjWkfzmCCsGvmtf5z2vsksqtpS6FaCnFuQVjwgPi9",
  "key26": "5mCJzqsXu9ts7GJnY4jnZCxzPJiyG9NjJVgo5dc17LkBzzQjc3SajKfr2gbp4Nee3ahonW7MrQp6bv3EWjHQDkx1",
  "key27": "z8mtWhdSQjsEJqp7X6Mtd7VGAkSUetX28PiJYjiqxGqxysB4RVLLtrHmvPEGH6FFHc2p8WXmsqHsaX7GociVk6b",
  "key28": "4Vdva5HidUDmQayNp3QYVFP1ScPSFvTorCdoVsS5sQrRyQADnKnvY5mQy25E1DN6tpwho2xf79AUsRubnBkkgLe5",
  "key29": "3GryiNzZp7tuxTam3L6Q2UtBqWZVG7AyaWhbDzhJdySRpB8vaZXuEJvsS2mNv61qMWBpJCefpZ7an4M39zwb4mHZ",
  "key30": "4LzgFQ8Y9ckRubpzmuEsPs7A5HbnxvqM32UqP1zhAcHuPS6B27rFLu1fGWoN3hWm66ktNyETvBtV23Ld5HC4WfXJ",
  "key31": "33bJnakyATuYzQ5YQv7AS6mLRtsFz5RewfppkfRoGcJKT6dsWFAuzeTKMfi2S9EkJayH7pNrpuENNigveqQ8gTU5",
  "key32": "3txavR25juLfUKCGaiSWfjC8VBDuXYyGdLaqUUEojmVD3zRtEKB5qsKSduGzzxndjfufSkbMmfXPHGHx6f4RLGEG",
  "key33": "5SAN24bLEotZXdhX2hMcDY98k6q577h3ajHNMx26xBb8JBzXWQSwHNJRtWrmxkpQaeWqxUxqSkU39U54AFMP3mJB",
  "key34": "4RWavePFVrZYLTsKcyg5XJvPGCMAeuf21XB1re4m9MuhZ5UYPxDi2NBZffEH9kkaJz1Xh7rdbXE4wjmuyKVJnuVV",
  "key35": "3ZwaXurHJUUQYdTaUwHqfgeK2Pi43BEF7f4PKE7ubB7feR6xtZ6dMqu9ecgfNHfGfyedJJsBuQCjgWvoKqqLn3ZD",
  "key36": "2VppszG3sM7R53sHeAg2gKcQJS26f6Ximt5ekA8DTHvocStdhSTsWYhCUnVN6i7vKQ7N682sdNQJQzMtQsjQoyiG",
  "key37": "3QJa7nxzA4yAnf29RPq523WnEm6Gk9BJqXrj7mk8Rm91u6EofHibvVQUzPKLb6QYdWUsPKjgdUZodgHNL9P63PNy",
  "key38": "2oiqTTmrz7PT5Dk7pDh9jKu86UHpR3dRJupvL8fpcHt663ZVq2W2NJBAEUiyEzVFaD9M2XaYsMdq6E8gj4t3VJbs",
  "key39": "3pHzU8Eo6GgJD1QwitfkzNJCYzAF42oWXrpL8mrLS1JYmVarpQLt4WqRLoVLtDMmnYjsU1XY46x7kjssezNyTmJE",
  "key40": "4bZgmM8jhXyUquuoymTy7f7Fs8ULRrczx26Pfy9pHFk79j5d2XUKUY5rgoBEpb89kGRBrZACVixnhHMm5heNakvo",
  "key41": "4LwQ2fKU6McfpYzJMunH1b3paara1ANmmFjegeEhowcfq7LWzYdWcJR39XFDUK96SQkxkr9G1UqG3EaizQasmEUN",
  "key42": "4qH7iWLKHPng3auokpE8Va2HUGKuvirVa9UtDZxMb5wFamTf7Jc3Uc2h5cc77Dj27AJ4qnwihcBqbwNy1h51B3bj",
  "key43": "2hSUrFHQdbZFdv1KUHQ4YvQXEj3tGHAjjGNKVjF3z2T3XoZWUWM2LdgHsjuDVwVS66uAdawD6BCPyzw97Lb9x6xU",
  "key44": "6QGNFM1Udo1h49onFtySNT33szPfQQ2GJtTj289DFeJZanSaKaBB6zgaCoFHpV9k8iFwGwbY5wNfA2SNDpDq8jk"
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
