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
    "2ERXmzeWpeeJVF9MMRe7bJrazqgiNxAbJxBG7J8h2ty9iMMP4o6Fn56Rghcwps4k9YgF4yGFHLsDjH1uYnt9Yb6w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z4R7eNn2GNsEMgKQH9HifrxmPq5RJrJSrRHtCC6KrHSWLqMtNNmPUKfcLaPSeJGZkeAt1ZWq8FL3QcHAMMhMT96",
  "key1": "4zoqKLDJV5uji5uk8fFWobhoxQEtQiZytfSfGxDriD8SjKpubPbavND4VNj1a8DChUaYQDhjtDRmYLJYWBTs119T",
  "key2": "4SsXWiaEr2mtdPGSdsHSz7kA9nMa5JL4MoUBUNf6DDDcmpxzgUoYCrqgXxv7PbaHg2fXTDKZAwbqnaY7eKcf2JZB",
  "key3": "578JxVQfPTCcy3zdcQ58pKfJXkZAJWBz3cw5gyqxsDUeenPHfoq5tj1B91ZkVibFT1hupRNRx9BxJTQozG235Nw8",
  "key4": "2AuotxvZvaEx4JUn4ZhXqqZKTMoyNQNrmGXD4EGDSBrGGvqJi3NHFq4vTaC26oHLqvXVM8es2Zdq4mkuMeExZVYv",
  "key5": "4YdoEDy4ouHfXStxxE9xtePv5L85V63Em41VK7cn8Fty8JDByEMYcYFCszB6Fmgi4uLS8Lq5A4wTizaX5uHNfoTB",
  "key6": "rtn2b2Ve9RCyv5UV1VafG7CRJ7ni7Q3DSpgtDNHUYjBVDZSmtPXoHAoVEuNxUADAkL9EtEi1JNAXvztMZfibfNp",
  "key7": "3zbjPAtTDwmBNq6wy7pzgrhry232PhQHiZYHEpKXQWAuvXMBipmcHoXPeq3CVXrQxhK65cpWSG2DyAchdK1Fqr5u",
  "key8": "a6MYsg6yuNhs4JRxewi5Rp9uxoytCSfy5tgorfeEB3KnbgJAVMMj9GYdtsYnzSgjEyEJm997rh1dYZvY2fh8XMh",
  "key9": "5WRyzRjPgjAvLfKnUvAop9RuBetd7uN2H4JYBchfzm1eadbDvgKpSrcNZjeH8iLJpuuEasVXG9nyfFpMArX6NJ1d",
  "key10": "MnNfi8puWKYmVPDgRo16nHWmnPqY9U2AeFFFqSjNjnDFEmK5evVFL9heRtosv5jUnv5gCKcSueqgyZErdbFx9Ba",
  "key11": "3bY1BaYwmcmwp2grGRQN4s5BZUmV4hQTCPK5jAkwChJY4nMvohBD9M93deoaMVhBPMQk43GvEG1LkWmh2D1zRrCB",
  "key12": "wTynBkQEBwkYJzZqPhsxBMqVGxB7SkwW6xggCDsmCkwdw9y5cuRQD9nTVLHtepZAwL2kaRHtdf6ZNPeveQ63RQE",
  "key13": "m3qvMibJeNKMBhnZfhHyhD6LPPZwbFA3dNdx2QM4Xrs3DMQ8iBahpw8VqyZnfdr2kbEffGb9yL6FgGiqhrtavn6",
  "key14": "53iW8fhNstp9grBnhETz12bhnrtssGXwbXSPSajbgNymNaV5WvqgtfWQigaxdHwrjt38JwKQHsNXXtJCUyrUQB8q",
  "key15": "3DzN1G2sRvzZCh9srBBLxsRLbcepnfVWNe199HhQwdFVqvnGP7YnAuhquzf5ERnBrTJptLeb8ocLNvyAEMMqohTV",
  "key16": "2wfWdhwx8ozkTXDnWfooomRZZkmSJA7FpgRWfV38BjPQjFkHoSnn4cNTFypeR8ofh7GWQyEtFwCZ4wwnhhQe3TuF",
  "key17": "59ovDeMgj79eyrJtaki8rvqoDRWaHmrpjXwNMQEC2MEhBgecT8DymCdUHas7fqKQdD1qu6tUFNo45WSw1gVG4g2R",
  "key18": "3x4cbPjkgwQKJPWeMYCwVYxa7WEi4uAWaVbwHA3ywz2uY2Xgxrjma81wv3er176zvhVU7M8cUgJJjo85AM9CEvNm",
  "key19": "46GivCtQ9dpmDjCu9vtWdUtAtJKs6aoMg97ZuMfbcwndGDzP3g2mgGoUP3cmvBzKAojoZSkVDZKxBh2xTPkshEPz",
  "key20": "TFnuDX1EoLFPbAkUzJPuW8hRkakx4PZBu2vbEiZ8H1YgyG8M94Gmkea1BJ9un6gwxPy368xuakLTY76Dk1nRyc5",
  "key21": "2neMYWhhNtsjk9rmPQRQd1bbm6soNnHK8BGiKHLH8QYnHdgjaxutoUiiyqKo4ma7PhnJCKEMSk29uRKBbMvoCQ88",
  "key22": "5TR8AE3Wm5YJFEE2KAq1Tcc5A5GJiJU7P1eNDNK4jVoQjy52boRoGg3ME85pBJfz4H3vr2U3oVbZT2hAnJWUXbjk",
  "key23": "3YYsDPXc9WXGo7487ByK6CQn9Dxhkzc2VSmKLTezEwyF25osYbso1sSDEJAHhr1JwS68jbqpVAZc9oNTqshtbnQ8",
  "key24": "rUCVn9Tr3hR3XpmawgwUq1Ta1CzxR3EhJrmXFpJqvBH2onsMMr1w8rP9q3QGRdBVj6AGiM8oAKJmenVGTgnpm8u",
  "key25": "2MSZUo2d1peXkSMU1XCTnLCgTh3bH7CV69UuvdNaUqYWbZqv8Vdrk69hAcNiLTT66rSSxuAokmh9gDkqVwz2htJi",
  "key26": "5ZCwPZJ6MpSu2Tej8yTujuSZUToA95VbpWKm8uqgH4VKdjZkYaYMqVSpaz1zKqiF8UVNuXsBoEiqrpViiTBVcUbN",
  "key27": "38PjjHb4vMnYH89E5Z7Bs2S5h6JZv2Xh13eXkuMgK77YEdq4sry8Mf7Bie8fVndNv1m7ouGUPw9TQV2L29h87v4B",
  "key28": "47xuCeWrrVRswubqLgUSx6aNibSLDqgiNSW2Ax3E3DwXeRZttFH9SGnL3ep4ajNt3ezzBvR7YY14jXTHA7iK7kJV",
  "key29": "2LB9VFAWcnknkdwr8etVdomSH8pC6NUytRyifNMf9WknToMNnQMPyYqGVKMzif5ak7B6DN62m59tEvwnigmAJaik",
  "key30": "3UdJCieSj1CfFS1CJZ72xMVamKahiexUJkjWA4nGaonzh74d4nLoQLDhNcVXmMum8bM9vCHTgfjHtpXMGXCobtAb",
  "key31": "2tebP5bToa8NPVGacWqH2qY1ryBPbyKt7N3oU9S7ARC2GTCJFyCUpJiYxGJswKLQd9QKntBMTQNj5s66TTvgAEGF",
  "key32": "4FzbXep1pX2EaLQB5W2RSyhw7Kea9StXAhBEetZu68TYhYSX8asheZYQodMZrFvU4SxDdFzuLNxmq2HC6WJMSobM",
  "key33": "3ygMaqmK83h7QgutiuNHtbUDbJrH3pDm2ux1apBbYWpHEFX9J5hDNwockuRGx57dLtiZS7o1XRx8qWpBYAdN9A7J",
  "key34": "5XFXTP3RSg7i84XGwWZLqkwcsenBjJfHi7NNgB74pZi6qXc7aNYZqC3zUn24iRvcEAwYisAv4Hc9ay7pUECtXZnp",
  "key35": "N1nP8eEWwyTHLgUoq5jqabR8jUhdh1CoUp3wSY2dBGVSzoq2b5L4d2bAJS9rBqvwA9iiRj1pzp1zmzxzoGnK6ND",
  "key36": "4ZgjFMSeA7eCtyvWeipnKNF98n3Mvyf98Ks4mh7UwiMTkVd8DsLwifQ574ha5CYJzBcAmFLAkf1RSV6vARGr9Ba7",
  "key37": "66eWhG2HZQTWuH51HFigrgJzhVQjUwtWiAgMWJA2GgF7S4VrQsoxiPvybajSu9ZsG2eMw2tgTDLhfes4vsH29Z8x",
  "key38": "2gXoWv82uuCNYvnJE4kaCbGidRxQbPbwGk3aQiYb7Co4ghr2r1xXnXwFKvbUyqpShQacGcCoxvwnJkW6yp1WztRw",
  "key39": "2A2EPSGm3gsaCqmq84hb8ZVSSvcgmXg7cPSMYSaxLoBgStxK2QsisaETPghnSFtridVxJM15FPqufLrNzP1gYfJH",
  "key40": "2yAjntMxiusRhh1CVzsLJ2mvRh6hmeT6byixYRsv2RKRhzLkNd6GGjcuoWwMcZ7vhvsxDdgVzWwhY8CzqxZbhHmY",
  "key41": "4BDg6tkSabDPWzzJW2FzUYyfRmaq5fiSKiQbcVA8KnrTcjisdHbQC2vgmpP18NPKtZKwDf4r9Zbt8vZ8DVNfcbVj",
  "key42": "JkpSJdsxJN5AkwDWci58v5rqhtByWR7TZYi6nScmN3YxLbSg2R9aB2LSzQKhvzF3JPW1DKrhRoLGH1W78BCJbp8",
  "key43": "5L46ZtZDJfDJpZwY6tpNVjugdi7YZsg7fhNdHKeSZjHRGE4W1P5hWHPiioWUSKcWJBcCy3pSq8M6QY9ygVDpo4te",
  "key44": "2tVZnyGtbi14oSEWCRBJJ9a9mDCZi6yg4jkv5mk5sEH6UUAhjYCUnBVfv1g1VgeAzdRwRLTx8wXtGdCLquhn7LAN",
  "key45": "5JsEAyu5NLWw3jBBA8zGUTGKKWX193ajJWWosW78thzcCQiCnqSNc3Zj63MNJvSztvxqUqjYsxDtp3agRFjbNiBA",
  "key46": "5ZbKhCfkStSDAqfgsiwsG5TLa4gNKFBs59LoE2WVLmDDbD5gjppcmH7G82dUYNPUL1v2eMW41ufN29UUZmcFfJtR",
  "key47": "p3AaUCF6M8JatKajhJBHMFHBfdeizpL5KYP8RdFJ1z8gDRfX1khgV6PUq7isj3jWF6eCZFNptoJxDsixCzMtE5d",
  "key48": "2b27aXQDPb1jZ11odzCbRBE7tJuieg5ELDvyDNaXqAt5oqwaXQ4A6byx14jduJdCWMYTqgvTKbEyP84MGdtJh6mb",
  "key49": "78dmavyUM8pJGuWeK2BdeGAye7sTwEf2vpm2A3tagvbwrTUq2V61xiaH31eWstS6g9z5qb2F1DUSRWv74zkz3Rq"
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
