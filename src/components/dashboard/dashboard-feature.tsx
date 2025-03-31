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
    "34kGuJxDE3FEkW8yT5wVBVa5oQa3wMvXNoADQNHFz11GZpabkcWZVTfny9fRZLZPTGX1hBd9AWTQLd4oJYB3K1ma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29dSrQWLJ64wiUww3sTKDHMHUCFzHe3t6vmfYA2mR3jqmVoGP9LwXzgm75DwZRaJj1zs5UnBaAM7JWN9aQ2MQvxK",
  "key1": "51oXCSH9wvrPzJUnaSdexsv9swTYxzexCXHahWfUZttFpW2hBYHANDH4r43FikJPHQHGFUnZ1zrV1Ztbpp7HVqBb",
  "key2": "8NRwuoF1y7bFMLeTYjP5yfeh1Z1pim4Fiu1hXGqy2o3yY8qDPhBqWRNPuD6B3audiTG1KfU7WWALTEc6zLg49pE",
  "key3": "3SqepKN2DVNnz16dTcrCp6pE3AY4q2hgUSFASDBvTit3ApZsQ98ZZwBtcq8sWBQDX7APXVQWNCoR7WZusQscSFNW",
  "key4": "2VqmUoq4VnmQDQf3SvhUX76gEWfLh2GYdE9uE649R3LATcu2w9io5KF8oZEgArrsS7Rfbo37zt9FXrAJoKbUPLNk",
  "key5": "3M7MJNGDKRpEL5t1cNuPxxdst3wJLgtCzm7CtgBfMc1JTRJJuepJUcWw81WdBPXFi66MFienSZZZ4tpDcoQuKuGh",
  "key6": "5XyhjWxgyYZ5Q3m6iGo2paZNm5GNBzNTjzm2kKxB4aTUUbZ1W51g5R5k51Yo8NfwFD4xHGakznV2GPXkbZKg7HN2",
  "key7": "24sfDpW6rmXjRWvvVZKL7AssteFt2MaRfj7oB7PgsGapjoEMd84uwSrN9331tjEXfenoAp7oMrvvDfGZZke48tj3",
  "key8": "5qLDRnWj6nuYH6cpU2hfx9mNm2zdRCswHj4Rp2FZDY3L8inVmBhcREihoMTQ1jPyNNKzMqZfjX4maw9oXZKgYWTs",
  "key9": "5yHaD7EpmUFJi1Zn53JC9KPZiWBnQvBBAwahjs5pHTxt2u9EdQCGMD2scahPDhF3LTcBwuv1CivHzoLiJirQCAeP",
  "key10": "3fnUvUzkrcu4mCb5onL4EC2tjYesVrXZTjGQSDoLTAXygJSESoA5RPZsstZsYyEnX8ckCDeG1vYoNFXZWjgVVGY7",
  "key11": "3HSDVYveaCDNCwzAGXsFMUTsqAvhMLEBgzpGXv2MHZJKwb2qKT5kYEoYKRbodrsgwWYLfiqHYjEFzAR71iqLEwdo",
  "key12": "3ZpTEjESwfMHSbScJ98TuNYtDg4hQQ3WegLzQH3bPdjNsHJioECo2SsQY4XGYy5nyUfFnVUe5efCtD8MWR2geTaN",
  "key13": "3xdJaZkaRTEgv2UHvgL62dpzTAj6Tp7s8HmtpTidbkFntVXhrJAFJh6hWHN7j9QsFZ6tZCu9W1MkwkKCquFHF3QX",
  "key14": "kJEKEH62eDWprQT9DmoPVMGLxgupQgtt4egbr83ByovN83E6nqSkb6AhhF6mkcQiDjzonAJFfjf7ZUtZ5BYLvK9",
  "key15": "NtU5rxQQUdtKuoJ11ZCceM113G57DwfDks9eDfhP3EpzzDszskUi8ANYW3Gv8BJjFKSZ1gux9p11Wg3MYMtjgf3",
  "key16": "3NsKZveKfUWLrtWPMNY2DqPsyNDPPfUZy5HbNeCyjqdedGm7vSV1bktHx8dAZN4sWrTkK9T4y1Xxh43uqsmg3Dvh",
  "key17": "21FtWEdpgbKVxEtdHeng3Zq4zvsP4bieZdgcc6Agdfn6mfYMKpo1RzoDcZkDM9GwarZpqFpCCGN8MXCyLeateUno",
  "key18": "4W3hCc944ebDGzYoSN6JykGV5xrJc7vrqAD35h1PQgYQ8Cwfemar1vPAUxS2BfBTU6Q3K5WgyS4dzQfRrB3Xtc9K",
  "key19": "DNWCogVjYVaawqTjzzJVsnGmzWUJ7cbQo2fTE97LZJtDinfMw8QkMkjiXbAwz8dZdJv2SkKFNvJY3nRqPTRbr2W",
  "key20": "4T8iCisFfSNv6NoAETKVqJ7mkcdQ9F8jKRaHxwot8oRdE6vC4HG46Fg4faMTTAh5MUrqM6Fq89Y6w2kofFwPmP2i",
  "key21": "3gLV5g1NrQ4gc3viJGYG4hqtnGGFCZkjdZ8WVtNs2CtGAu51boKfsat62mwiMiL7JWvbxKri7A3Y2CHQE6YdqRag",
  "key22": "nKww18WxDpgaNKgWHNqNvq4Wz8KBb2BTQ4qrG5QcK3NvF53exXKy1wmsCZZ3kKpxncqtqhHRfrKMPtcvkhBuhtG",
  "key23": "58gZQbspxVj8Tw4K68U7x1WCN8xFkir3YWgg6FMCYHSKEdu3UZ2kkyV7p15mDfrEeZVgGXpF2A9rSGqAFmyw1zJG",
  "key24": "5aewScoHTptJiKtLRxdsfoXi82AqBEkGXEPwfesqrUVkPooACcwL4r93vJ315pp9FyknwJjHQ9b5zU5QZXkmLb8q",
  "key25": "4nZhzLQW2tD5jzu2THjWUXA8PXSL6vSfV1LtWj25iSW7GkgdJxY8ocSAXF3hPA2x6xKRv7eaQQ51Xx18ctuMNU3f",
  "key26": "4AmAGDPejXgHXWrv9FBrkKtZh3C8D9XXPM42VqT5dk5vtpRvXsZ2nfSjQx3Sc8XNwXtHpVhftgFzxsGbpKZfmCbK",
  "key27": "3jWrYJw1ihDGDZQPCEDG33PXmkfrimfYmNFn16R2qhuAy3F3gih89nKCEe5MM9LpnmGaDgVfHw1tXKttDeokKBdR",
  "key28": "36UbUH9piEGMFbmQGZBJg5roYr9H4VfvXwu7T3f1EoQ7xi8NB8ZgePZ65tkUVe68TWHKyBV6tyYVvvNyjhSNFkxz",
  "key29": "4uNp9vnpxttHcW9qybCUEEZMUxmcaGMWVJdJDjDzXj71DAFE52Ldwxh2PU52HoUtnxVcrZWXkejtz3JBCNn4vbDH",
  "key30": "2gWiLnWJdnT644ib5zPG5k47nyaqUURAMtF6MFoP9g9GQdRjyMMzVfCxU42JVBQsFpMqUNvKBozErYWYE1a5rpmJ",
  "key31": "3Fvt62v1W71Wq8dbkJDKfQG9aHKyL2ivqJg61vwFvxSDPTv477gLhoMxtGVmpT1aoeL1h5ajykjTJutK3bVbpadM",
  "key32": "4oJKpimTJ3ASpDmoqr4UAYQpFtFdawnLAr1vhe9RsPJZnkSNt6JTjgpPBmB8VuaLAMmjt7CDxPc5vGZ79Rc6WrPa",
  "key33": "5gkJue9gFERcWUWN259jx3dQtu5rv7oY7bZfaxWQ2aqCW1d6yDF4aQg1ra2QtEwMVU3kHb7w146DND1CTx9iXT6P",
  "key34": "2YU7SjZNaYNR7p9JDEfXxndXcviswbUsaqjYPf7c5J22Jq1uZd5LsqzttiXfSYqj4bJTY6UU5H1stuQzUV6oYrcu",
  "key35": "5sL2sumKmQiYPUigoJT4d9U2BTgaj4P79n6X8VnyXPw6KzN4xn3ya1s2DN6GcHRZ2BrQezKqQNg8u1Ys2y3MhNrE",
  "key36": "2GYQP6CRqacVSXfGgoSbfWV4neitGvd2NDiFnetXETacsRvtXyWVqD8h64mD8m3V9sta1MVoeqrsnYsgmU5iMQfd",
  "key37": "2LCtmGDLg998zbuszbrjFRWTWeWJGUcohR4CbbtukG4r9QBFmTLd12bN1uihVVQPHiELQsxMozQNsQV3SM8EDiLk",
  "key38": "3MgzsGX1W3LEzWbCqBYMySmDhaTUsmsgWvW11NkHbWoA7FuXTc5AAqnSn8hauqqtpgxhtes4UFVNZqME8vNmMm4b",
  "key39": "3TN7NLZWdnHoQXEmvTYndsvto4DbZU64YkKHUNx3o1VC9edWmkNGiPz3ryFZYuk6rJNhTRR1CTexhLC2LcxMFN7a",
  "key40": "3aXDk5TTawAj8PHuory4fDyrzaDEM5aQQ1GS3LoDocBpyFC9XXj9bHu6TAFBgFYtD52NMAcXExx71Gjskqtcf7DZ",
  "key41": "39FvKXm1yPQSQi1tUnLBoeDFq5sqhD2pZzwP1pkZjihTwNk6EjaRniJKZA8CiarJ7JzFooqnRBipQX2enPQyL8Mf",
  "key42": "2XUKWt8sjCgeiZJSegWcX74VzyCUyinP6GhSbhb2p2yCHSAC8Z6qLEPDSqFSTjpmPbhrWXLMLwWikRNdayMkbyqs",
  "key43": "4stqwKH8ZvzNeScRS9Lh2TEx9tJSfHkVUH4G2e8iA2Zk797iWtsVnMc1uR14ynPEWgnMLdt86UA7SUhkjDSKjVk8",
  "key44": "4FpYpcNU4S6o9GNf4fFxvDeSx69XqD4hFebxnGGWm8sJq33nw7qHHactzXYSmj4yW5LJ5mCZJCSUQQQD42n3sw4h",
  "key45": "EsRmATyx7XVKJmmPk9C5UPz8sroiHMHAJgBrdvtqhqArjHYdG791EKz5nvBBNJA5eb9u4m6PbNNzuTkw5mybpZZ",
  "key46": "3uT96bGARQ3W8QZN4GcZmssieGSwgWNAGEXLHB95e7TZ2PqYkvxNgUfHgnRpXt55AjKJfgG8zhjTMJQ3W9rid7Ff",
  "key47": "62Uwy1vi2sriZoqMyCxqmN5ZPgWSBY175H61EwsBAgH6yFwi8Qcjfii2G93j2RTqtz5VZ57AgdWRDXTd2yS8rFEo"
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
