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
    "4YvX5ULE856Ww1ESvGfLM2e3P9dafzH8gqeG7EqZjkchs9exPdsSAAYVjQnV5DRrY1zqe5iGXaB85f2g4BC43LsH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HGkHQZo4DcNvFiBZjB6DfpK62eHvq4R1f9YWWpPoAS3vv81asxydEDSK5uSzydao8oB32oPdU3apMWhKHQtguvh",
  "key1": "YqtSRUFeKZMgM8MMDsNkUcw2mUNFjzjuzxzgvAqdpYpza4Sk788bmBZnQ6jLii88ohXhXaXcvnrFL55v6F35kEj",
  "key2": "2vDULhs9ztV4L4c4eYD1L6GTcmrKtWSLQvRBfNeixRtbd2gdd1P4NwAhMUVQ63ecdpsRdCYqDJ3LV8VP8FhJFG8h",
  "key3": "Lje6bbdDp4sDLZMdi2Xscu3cZj4wRT41YXtE7Pko1UWPzq3dby2DehW2KM1uZC2kZ2iPD1hY7wtoSBUjseP41n9",
  "key4": "e8CL2qzMf5NLdu52hFJHQxtKbVPV1pPNfHPAYvp6Rk75DFS6jiCn82UQoZbsCa38bLHkyxSSG2VeBHGDz54uhuW",
  "key5": "4LSd7JshwqdtWqa5smz8hjXUaFa66fdFWcjxQUWKMPvQoHYn9ChA8d6fCMcwwC6nvELW9LYoNJuaRPTRLBnTodk6",
  "key6": "XMggQ8VekDhigVyppk8sW9hJGGPF9SvHKRmWCqBWHhUWqVnWSbkurtGWWjALHLpfYEd6NnaDnSKQnsinenTjDrj",
  "key7": "2Q8cVrtjtPA3s5czJT6zDRC9DXvYjng9J3eeijUD7Xh9JHWydUQgkReRSEopHrETyznGwnCpN2bNxhbTQAu2JZ8K",
  "key8": "44f49dTak8ZZP7DHawbCiCfNtkFGRgyfEXy8whzfYNZ1aGQAT9ocf47skm5vCjtzXZHjTkfWbELVCHZRRsdCHnLX",
  "key9": "2yNJL7t8ZKX8okzA6dCAjsUYLAKVsyjY13CB2dJ4mUH8LcUpvdRAm8r6Fycuujb849wggWaHgFQKTNgcPsTf1X9Y",
  "key10": "Wu6dv9bUjqGFSe2AATTvQvzrsZTBGp6k2WhCTZeDYMKhkFYFqfzSjD3EJMY39SQJBmRgV22hCHxfV9JxQ9bATC1",
  "key11": "3y99dvYKZ3KgthvgFx7WG6PYQTVa5s7QdbNjYxVYizAvYgbPaC6gMe69ocG94tq4Rvo82XsPnPHftphhJjrz9Yx6",
  "key12": "3GoWFEFayqPdyQ5kz2apcmU7zEmpYZxQbotMWbBKGzw8XD4am7PtZ36aNu41vm1HXJABc3dHgU5FiwzJ9z4Ue4ER",
  "key13": "5AkcNkNPDbZU7KSmuMHcWr3uoM9j738nDjF2MvHwxkat8qxxjHxawzEhLBCPb2KJNMoEnVWxhtqpG8WZiSkZao46",
  "key14": "2yaREEDKZmAUcBbgsZ9QUdX2f95b7HNtqGcRVhvdGtdbx2utwXN6ia4oGSRq471tifiWtArW9uorUcTi9mWWyiPW",
  "key15": "3n4eXBaLgSC77M1bewpP8Vz7xsXGdrC3U8D8n93Qm99SeqpaxAN82HxFH66QLmcFtqWJek1Mw7DXBE68iDp7uUJ",
  "key16": "4bch5PCsmfxRbZ4TdEX6sVjCByXBc2Z6bqNL1znGnCR4RSf2Lv7y3YhkZixAE8vdC52hXVWoJ3QpLgdMLPi9MWRG",
  "key17": "3RFFrxjFFe97TsG6MUrbAyWh9X4poPSjfJc6gBte8HMwqJeR5h66CUi28kHZXS5BQQm49yxZ1ScVa17dm379JtEE",
  "key18": "3Bs9r28ED9GzweJZRN4oTeuVEMd56APfAEKQZjd9tKeWcp3fwgSVFoatM8VBZ49NA58c4P31x9pDbNXk72S8bqP4",
  "key19": "41CKEmfkpdPEt4n3Nq7W64B95afYZk7Liqh6ERHi7xYP7JQSMk9mqRPDxUMDnzPheFcNPSguXHkCJckXakmWZEzp",
  "key20": "2qrqWcYm47FeCPUZ98Q8WkgEQfJ6NeDWbgbEji5cfMwzoJPQ9x5An8kBcz9eXvnuWDSz2gCfbGcRevyid9Kgvuvp",
  "key21": "61tyzZWztwj8ij17NaM7ADcVkQ3sP3qtTWvGPZqY62NGtT6Mm64KPyaPPwmDjhQANUdTerJmQZ8jdTAX6tGACEym",
  "key22": "64QFeFZz7h49pg6hSfb5gxBQisRB9GaTHwGuY9rGddQjeSfPte1ivCjPDn5gUhxNEDh7JBfamCQwwW5EHdDw38bW",
  "key23": "gfcvbhGQ64T3espsP3XTCYcrqd9P7U2b4z475ZJ2YQDpcp1yoEdmePFn3QdeFKtLRGsMDSHAgGWVQcZ46e5cniF",
  "key24": "A3bzUzBDG5y6cy5hc7HTa6BaNiEfrLmkMNLqg4vPf6muKD69oVsjLZ4WM1h1uGh3ejtBNwFBVNZW12d2kv1676c",
  "key25": "5hSbzCYcr9jdKrzCvuCxFwFbN5gHzxm4JYqvSY1bS2dFkrA3jH88tjpfpXcurmgse1KkmKxBzENtt6ruregvaMAo",
  "key26": "5jGUDqtdaJ7ASG8LUUkrG9GnoaL86kjyxYJ5aJK79F7eE4tGZmDFgUnTEYGwooWtGUsyYtBE5VmLeyoUbEmZRZud",
  "key27": "62SBZgk2Zt7kRMv43yhkyaUXqoq828C2qUkL6onuAEcRHYiFfvpcDin5cYwtV2MMcv2vWQQegvKspqNCnBKjvmgJ",
  "key28": "qD36XDpDu5irzANjkbyD1Q6T1L9QMF7Qoh2EMntKcJKcWFB1DNzn1HBMgEoaGeiWbYQCiqFJK3uFzSNytJmGxe4",
  "key29": "5waSdLMs8ubGKXznNzMZvnDkn5CYJkBWUzTdaKAr7QfURxa1NGxfu4vhTav6aSuheXz17jQcw6QtRbuDZ8wFThMH",
  "key30": "s4LFD4YUwjGQKYGkYVGm131suRriyBFwrVyn1Lz5VPjMiP4oNsBa5xn8bX2sLzxCDAK5BhFQX4w7PysiX14RaLw",
  "key31": "637W3ZmJf6ywyrfLL3ceGM5ibgDkhWxWBUK9sC8cspAnAQ8TqERPFvaxSTxDNuT3xZ2MwYhBhN76m5Q9YY3YBPDP",
  "key32": "516M3V2u3beQyrhVB6ZXsyBkpy1nVpkBjTpP5UQg7GgFeEvLsw5kb9Umr2LscnY9wJ1BUeVZB5m7vifqmqa2iW7A",
  "key33": "2n2bwUdPX4nu5rKQ5pDq1GXWe6RYeT5rxcdAP77ewy4bD5E8wRaRjD6nHgF83J5BhSGdNfkWCUyCDp6qCSbnp438",
  "key34": "2LnXKWXN15W2iLGdJmGhGx6Z8g1LDthALD7RbX5PrN5kuSTMLXhu3hvQE2nk8my1uqoPWie24fHwPR8BT6xVep4e",
  "key35": "5GfP9hGdtKqmfmbpbam3gjkY5ABsH33RuKKknG5vAxUkFXHkbpCBpiz8sH5ZumiAiJHMhPJGtGSUZqDh7NtSEnZj",
  "key36": "3Mc46rf4wd1b2c7ETYSrFgnbjWMKsEDFVhXcSPaeYk9mWdd4KFgZ3gs9Ek3JgfDiFpGFxH3MaskCRk6tj5ATHyVJ"
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
