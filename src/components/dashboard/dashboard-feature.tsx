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
    "4kNdWkqiAukDxUYnL9binuFZrJfxeEMK75D4LEwivPy4SL1DUsM2ZsVCTSeZjmK9xBozyuKUN7pTJcfra3EzDw4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XDsHPEj4cT9b7eKmwY47jDCXxFmXqZx8cYQgzK5s1BBQHpLQGtMK4c7dt4tiBSQ5sgqjCCSfDkn8R6KWWmFErTm",
  "key1": "3vawbka1sTNiR1ezpyNgGXSdQZGrxHSGifvcCSzW5stMMHnZLqZQ6MVbfKSBgRg4mCMKs7EXhr8pQviFUffzsy7C",
  "key2": "37BjtoZWWZw9Losr4B4P49ZUayB2hZexFzX4QQ8KWdBqq9BfaUrru5zTf7SphNjVn36Zxj3H7mf6zSqE5yVffqz",
  "key3": "4SCFiw5WPwXW4oZNaFDD8Pg32nwypkEBDr64Vr2Xf6FKZRKKZdCN4cE2VbF4Eyz9avM3tvAKPeQn9Yk9PM5K9Zh",
  "key4": "2hu1yG5p95JJARfLQtjK1SHSCcBLNBaYSebcqKq5uSoXLEanc2Wq7wi4FSrKuuVgASwGS4zgxJ6UBe6SXs2Ga3SF",
  "key5": "41vQhmSfi6m6yuxrMq47h5EkzEnEeWxyWkb3AaRFxJD77QnKji8Dnq6HfWHoLoYUQodpEyL4idzaqTX7XEHA4HYL",
  "key6": "2Pno9QZVJ7Jwc1ZXYki9PDE2qqniGBWv3bMiXpfZYnb7qKezL8KhrzjdBebQ4QBCJmUtcwj8Vakd3RRhWwBK92jM",
  "key7": "4A5WErtZMy1snmnsXrfWWsqhokHk5YRYE1kyv6HzH3xtx8nkFKaybytbMVTTaYUxWFZmb9QpwES6UsFFfonM64au",
  "key8": "3VeXniQYPaywKw6srSPiXYgQSh5EXbxShGt36VfaTC1KWhwMSpuC7a2Uz3SQBGvvgzQ9sXSXqmTwvd455HfLULua",
  "key9": "2RYz5AVgj2MmCp6dWmsZeaGg2sboRRmLtfWfY3ucXsAvpjUYXTj9B957qLfeKPii91anzyimA1Htyyh75E7GJxGQ",
  "key10": "317kixSdsV8K24CqBBC652q7SQ69pg5xachGeSNwnoMtYXdNLEtG96oE66uSQkY45CD5MBKnDzQcf8xhMBuZNWkC",
  "key11": "2SkSvvW2NDUcfAP7uPoYKEg4wPTExnUra8snTPCueUKsaoxKi3WCP64GPbnNtTzDMgMSho7ayve7oER7kfuJPJnG",
  "key12": "5rhpKD3QeGFm91bJEmorPaUZXfdPxHrkt7Q6LdDP6sakZubZ1gMmPU1PfjkmgZHrPs2Q6bv58sAai9zipq1ZPP4b",
  "key13": "WYZzR119McBUUZkUCLVoWHAfcwAsgoNEDa8TaJw7JAy7L2hzB1E1mSnTVcBxhyznL6XdnJ3TLTHwhaxbgyAxBWC",
  "key14": "57zykzzyokxKgJzt9kVxvsPa8mmUCgGfMLW1Eg7ZQm1ncSF8NrKjMc2YdgirfC4PxrmMzpvamBzS3opQgwQnG1Tq",
  "key15": "4y5uAKPTC7EMQrXjwKoCmb5iGY9LCrL8dAcNSLHTpQ8gADg4poadKUK6bUPc6pjvwNTzxbQNnUHbWgGXffwYydKd",
  "key16": "2Jh13pFgv3ELFrtS6jvt6m6ZtNuDmvKZ3KxWBZWEZ2aaKeUmEtjLYXc9ho3Qo87BVUjW1gSfVV1QzmUL4CW4j7qM",
  "key17": "2Ay2hpzwzytcMxQKZxwf7FG1VozSXW5MiNGWJaUbvXSa8ZdVKSvMc8sFJALvNjfuWibGxwjFWsYdrGmm9EKbCmvq",
  "key18": "4KsZTVsq82TvybKgTJ9QiZ77haviCKaQ81gZ8TrpaTaBwD6zs1aorYmnQ6AKdPZG23pqR3QAWAsa7VY5KNA6DZXP",
  "key19": "TkfgvZP6HXkGaMh48RV485HttrmxRAU2qEcPUVz6YMz4LSCTECCJRtz1iVYftvM2Vtf3uvYChKbSaXSXD1Fkfxy",
  "key20": "64v4eGNsgobYF6hjHTmBR4K4qiqzZRrutFUd6XDPWrfgpGZkTJasujqNvpWbM3dmwXjQSMoAxZ4ceLAVF8hRAPVR",
  "key21": "498E1Zu3bT21g5qDnQnYUUt7RPd4VKyHBhbyK2dKp4ygc2QLRrU5aKubgxn3FYMw9Xwdsb58FUrehQZMSbz5rVXu",
  "key22": "F47geQY4AVrGA7NgFRQ7NLenNigaS1oe636MyNHDBYhKc3rdJECsr8eGhTGT1jrhXSKVXQXmKoqUkvr84bbXaL9",
  "key23": "54fBhipYXPzzffCnuVart28XpYCS7YGhY8ofM5NEHMMgNsLMViRsQb2bbn25H6b71KyJjRuRY7pVcShKnfkGChhc",
  "key24": "5eXoruXUPSxL8SiJyz6N1vRoqg7FpqHtfp9rXF2gLCZv7ZzxzEkstwXFqd1nWipBumPPTHJ67MCf26kn1fpiHkBC",
  "key25": "3P7JTp2ATbYpLqzr86ttL8cB54tufGRvzxJY78JVNY8sGNa3zxRF46ioWaNvyGVEXtEHscm91KbBDnukWZHr32UW",
  "key26": "2wYr44kvHyzH4SBHZGxayqRfAyWhXgW1JcsZjJoZxL9BzX4jPy165WZ57mLhtc11Bt8o8eJ9SubvQ99VwoHbwZqq",
  "key27": "2xp2nBvaXSRdoxuNYTLVcc45fbdRtEi2nMGQmf7fB8aTvfaEnmwZQ82qzCSLNKf4PxpRvuraDmscatTzY9d7Ywh6",
  "key28": "5Yjn7E1bYph2NPPiE57p7Yt5MV3PmQKCNdAq5iJfELn9yRR1vjN938WCNBus3p84H1Qh69AcyP1BMVLtTaMAVu48",
  "key29": "5Bv5w2CSLSyENKF3SxB41kJghm1aC6rRwQc6gJN358vZyb8EH92f5zFwF1wrvRPv7TcsFyMHFWVfyMS8VLXaTNP",
  "key30": "5h8pKfTTgRBXivC7UHTaZ1tQNvh5Xh2MvbbtPTRadVsWE9iXG7DJTYbFbXD5iBHqzdeHLntaRjoyY74d5Y6TMUzt",
  "key31": "2YhiHeFfCNDUk6gX9tjfuQzArY7bEKVtwmgQJXywyBkkyRVZZb4Y8DxdKfZnKKJecu6Z7my8Jy341X3X2m3Gch7A",
  "key32": "2JUgYNrML4Gpjo6dvgG9NPB72bNYyQQ3nHedmao1B3euwsZXqPuKc5hAVYvik82FnXb9yLjdqUBgPPhEotQymonk",
  "key33": "4nwnqyjETBiqwvqYfijgeEhhZ65S7X1iPLPy1YqcnHTQua9v42jhTWrqJqJx8ncuitJmMjRLKDviNkYYJSysmbxB",
  "key34": "2Skj4bj7UEpQNw4YTRwAkJ9M9SvNyEWNvijwzPvRnRAfpUAYem1xLVCBPm9cKDtfrASemQyZ5PiepCQP9Fh6ePzi",
  "key35": "5duPJmb2Jo7Q5wip637v6AzNWEAxcaheQ1QV2q5CPqBVAmtDyMUz6dQ8UHX2sFTsSLnPmJpWdPC9PXfmWp5R651c",
  "key36": "5MBctXKtDBJhD78iy6sPS9XiVVCcbJvYvWazc2oc2cQSJtAsqVJm3oynCHXuqcQ5JwWnkZpZfaijWXBo5nJtnPRe",
  "key37": "jW9Y5ppBK12wb5xFbcUAgPW9ShFT7ZppQWesywagRQuavw3L8zAGNvV6fGVuQJLiiR9uRjKP3UTHVex6x6LEhqc",
  "key38": "3EREiem6nJVHxFx8xzHch9nKTBW69kaTTj3aUp26upLts2wZ9LD18LTNQLMNt32CWurS3aZfwLeNRNU6jwMY26wH",
  "key39": "5ebfU9iudgywDdW9S2R53apEJUrzUS5zTYBcUR98GF5DerMFidre5BmXiVsmQf2vWpqoBoDT9EkRW82QkRawzTws",
  "key40": "3hPt8yDpX7s9PG9npwt91ghei6i5ob3WqSNWw9GaRnKGhjcGUjgEc4VEURbKSJ6xusEW8rzvSAnmEf1m9B8WSuz5",
  "key41": "qpkfXvmye9TKuyfevozzX9c9Qf9BJPNLxVKd7cQmDAA25uZRRomJMrojP48GNWmDq4AEWgSkW29CxRKiWDjZsJi",
  "key42": "5eqWXVv5WT7qLqeAU8s3UoQ6PjXcPv4Pv5Jv1hTJVWTFHcTdR6ia91yMaKQynZ8e5Gsbxi4qmaRcuve5FQfes7DD",
  "key43": "4wL44Fg9WKwBLUHkJRZMect9vF3vHSWbdo26ZgffguUWBSNnDbno4LibpsVAL6KFTSPnLhnbJikGvp176b4EfthB",
  "key44": "22xRgCh6K8Kyxy9o4WdgnVJrfvEX3x7E7Gvn97yjp59htYdkvo6RyW6Mxr9go98Cr5NxyEhLCjxJgxNWLKDZCTBC",
  "key45": "4hLiu6WYcnzYPpNwNDkiwSkjkaS6Mx8siG6TRVDWWZ13pDoCgaXD1rxqheC9w7miSWiUgJfRFb5wCn4xJXzXFXzG",
  "key46": "4Mv9697LUGHrmiPYBHRoapu8QtjxcUXsCiycf3ZKJvUKVCY4iHyDEVivZbbcP8Zxodz4a8qZhCWdaqYEGTEpaf4",
  "key47": "2Z25XDR9vAtgsPyH4TQeeVxshRGp965wCABELAdWHYPGrYa6xvGywtnUBoaaE1thmNYvex5BNmXvpdkkisMp78bM"
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
