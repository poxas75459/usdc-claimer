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
    "34W7fckYJsRvwJhkAGTHFpahLbJ3cFzboStF3N5tQE2XzjhPF7Y1Y9iQ7BKQVj6ddfdgiEHS1MboqTpJePFY3Nmo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MriY5QqtuTH2vcK2GxB6iT3U4g92t1dWiDwaF7Q1yiNacSZLqKExjMgg6bKmFEziTEwMoU84nvg13yDJgfYKFXv",
  "key1": "Ar4asttEBNsyv7ucV3xvFyFLEtcXpjZwT6LxvpuWFBqRjiHC6mzJUs1Z8NrqgQBUvhuostdxHQwtFbBTFR2zYa7",
  "key2": "2t27E6DjF5gAsbApPqNvJVbE3CPrm8wZc2MKpqJPSaDVF1BxtYq6HVc1C8k6rJxwoLfvk7pcjVKsQ2VLjfkmktxM",
  "key3": "dhwcmyQaj4LsjnQN1rNRvvvGS2DFh8hgEph6NbVvJTEwG1LCZa7AM6Wo6xptTMphvaxXNYmA9rbLaPwtf8KKyid",
  "key4": "3HbZyCN9uZNuY2Dn8964i8nMr133MiYaj1UAue7Dze8VESw8X3daTNnyXKs3XpCe468YECwQLqGHh4QVQ4ubtyNz",
  "key5": "2Pgyb6ZixvYGZcembVD2iDcN7gXVJCgFBaq9HW8ywiwCC99mT8nMEcWecpqPyTFGjawJ8jxfhziHR3AwbGrYazf8",
  "key6": "5x5EbQPecpBAEUBaboGpfEe38x41kRC5P6xhMtmYbcdR5tCYoqfeUzaCCbLAY16AekeUgnmZPVtSVVJuYehXCvcq",
  "key7": "4MUaqp4vxr21SqUNRFcVxJMyLZQ3iSNatUwuQFeady4qDh2UhDDyHwgRwVez5pR8EkhSU6sizcd5TjjWDhifLQq7",
  "key8": "3SNabaLzfAUsQbtxYrQXoKW4jbqW6pNzbtcSvxCqXW5wPASZiKBPdngyrLLPzLp9nMSmKXMoUaC6Rjo9vw6aMovy",
  "key9": "hnmUwPuWThXNNkQ3ZqNb2NLysf4j3JhFd19eZRP2SV61nhAyyKvSP24jxbMSF2JTHwXZgMSKLazqGrdUwS6EsZS",
  "key10": "5rnkedwdEWu6CMphTiZnhMG4qz1cV9FgdmZLQ3CpACGsek9i9dqBMxv9W5CaE4BemHYWv5bPoaS33v8LQHLYjsHD",
  "key11": "2nFHkkPRy5nbTnumHr4tsQW9shQsd1Qnuy6xmaLmHpbKJoaUDPnsLS9wsNu9hwcnMP6vprLULFoQtYxDymhKfBmc",
  "key12": "2yYf2wwzkXdU1vPfBUhjYJGLSfrLn6Z9MTkr7fsJhatBm9YZEMpgmUNxiuvyHnpvdobdHh2QDrwJfQQujz9cGbKr",
  "key13": "4z7Np3sniWzbFVgRR7bmrvoBVBhDkFZL9p2QTEzYCHqQHpGsDtpqraoDpTgyzqQkJSbcR4VE19PnFjzwLtV4wJmt",
  "key14": "2AcMFVBvRCfwBjnZbfDJ57LhUnUfAKPKfSKbJM1MCgWVfxmYdsgi9CZL9jJD7B7FhnVjTR3ojAUszYkd9ww4qjg1",
  "key15": "4vzLKQBcqWY4AQfeJdPtUNX7UpENpvGZMtFaccA6SYZZ6oHHaDMcUwxUg3zYGZbkLyvcRMcMrfN1MFgwZoysiSR8",
  "key16": "5G8iWS45ZsntX6TU6asEc97KGMJjyYyRoa6xdYQSaybgTCif1PXXgP7nvB57Fn4AqUZD9uvLJtTtvEBesLGeFByS",
  "key17": "2SeL9cbGycZM4trMnizbe6n9MnUkrNrKTtNxsvWqZ3c5M9CR7jwGweNS5p7fQsRU362wmjzMaBUn885iWJ5SztQy",
  "key18": "5cAHrs7RJpVTHAK2WryEoi6oVidunS9LL1qVKL1bqk44tPMkkVf3QfAY1sRaNus2rt5jjFAVFphn8RifLtpWbfZH",
  "key19": "33tJ9jge84fhEYXu4f3g4eG2ejshma2XpBvZ8VeS8se65jLzMTtstxhFAr2G5gQ38qnvZuMwQLXXd7NohZL4FKum",
  "key20": "4nc6uYgfGUpLvMtmzNPfsvtsyWq6JsME32enSbk3Ae9hsS14BoKvfPXDcerEVp9BfrbVATxrb827ibUQ3FQfDxq6",
  "key21": "ByKCLRU36AP7yd195o9jjv1ftyZ1q9wpTUJKXMF18V7vHLB4BuY66CZexBHgrfxaecXtzbBnu3pYWtBuHGTqevy",
  "key22": "4scPqmeWXgpKfznX28a22GcFg4Wa6c13azTqzjSW6u5kX2JXnzfSWiftdRCkWK5o1tkZEUSbYA8snXueasvZ2iFK",
  "key23": "4oLyHxdcRoWXt7hXLr4rtdY9HhGPZ5rTnVXPYz4p5XazKdWH1KXbv3uvCodn2SETxsHVe4Q6tYeHe3LDJuKiPUtM",
  "key24": "44ziVCzkaiTyZuWDayS7edRtmdyUBwsD5tjJpddXyYSEbMVuFrZpmMdmRwZGxcaUhcaSXnk8j48dWYneMiSgXPg1",
  "key25": "ZmC1fCWQqjrR2EngdywSk4KoxZyJPvVdbKg76xKbzNvvqaufM35gkXZieBsikyBEH3q9qDLaq8mn6zUgpoeQdcv",
  "key26": "2tiR5ErwijuwNZev6CFHSXzhKBdBN62sNTmLurH5tX2cjprE9GMDEkKEEShbB3MZn93bczB6khwmrfj6EaL3scoD",
  "key27": "2uCEQZ5gSZC2gT33yGi4SxUiyHTUgRmVVQ8yPuHRWjBR7t3b6uXzKMa2z2Ew4T913PAzds6SggGaUohU2Mc6gz4j",
  "key28": "2XyYM5EteeM8BPaQQ2bwDkFmwaYsabZn1nv5T8bFtgSvkCyviT8zQXeVPTmJX5y8dpRoeyGWPaufpwVSoX6dLCfc",
  "key29": "7TTotW8WpcuksJ7mc2AzHH4ZWFyZgtd8VQWj1n7bHXraa3poozThU5jdLMVV1HrceL5J2VPsm7coRrBLkL2sKZq",
  "key30": "4aRL6yseZNQwk5L8jh4otteVdybb1nMnmjtFYEGUTyCpLmoT2sNkJcmo9P4C2UT5yC4ucitxhDbZoGmLTf6Z7cWu",
  "key31": "5CkykJUv2E416NUscJFka2TmZhUMAcJ6etLCzpAxdkK2SdEEAGXz428RWZ2ofYVvir1V6mBiqE2mEoSgH6LBNs9X",
  "key32": "2RRQ52QiMTn3YuWk1L2LjHJuRAMPKnGd6hEUC8ynjFGQDUz7hUBpoDZQbVzNEDxsZ8R3gyEv4TDD9iDPGwQUDwrr",
  "key33": "2b8kPuWGB4C6EnzZb4He5SeniGetChgTvC7M52eLSTVPNZp8AMuUrMeQa1miymBEaVGSB1F13vwVDEQtNRJhc3ru",
  "key34": "59kdPREuJACjWGazwiGb55e6FnSnsKMoHpQHWYuV7wkhoE7UBWYDLA7wfpxifpd6miifyPHQLAemxMXVUb6HL62Y",
  "key35": "4wEbj6aWAReJYziYcsYDJho2kQ867YxtcLMXvq5sSr5xZZmdPrpbLp5RqdrP3hbCx9VzGZL7cVn3jgf2MiUCUxUU",
  "key36": "3LozQzae4SRJ7o6aHVUzAf9EqojWFVAd9s8beDRmMRKcphVFvBcUyfsgvEwksQV9Np6fMPw1BsbXMLHUTJvCaFsP",
  "key37": "5U9ZxeiGVpWq3sYpnrFVr9MHMqtY43fNdDbW7ta534AnWNeG6S9Nz1TTQjL4CKh4CYxYioNJxmkdYERNqYzYmYgP",
  "key38": "4wg3FpQiR8ip1FtM2M92TLgX1e3PKPPKTxTEqDYe9TJpb4s26gVUjtdJpX1SwBjBinMWfCsAPYnNmZ18qC1f18Fr",
  "key39": "c6kDuon3ZHtUVA3bae3VcNhVyPJm266FJZQmfvvp5fUMnuWRGwN16jvTXqRg1o8YbshKXwWnJGbGSM19bHsjoSn",
  "key40": "5Pk736Vy2cDwSVDDTrC8QJkH85uUweai3FEbFx6YxVcFjUv62S6BxAoisiYEhh8qqMLMk38q6EPDov4vehbLk4by",
  "key41": "4WSCSuBN9dAA26MwyQESx24bgT3JQg6XXpKiebZbSzEVCS5hexFk7ZasKWQciizAGFFAGZScbZGR2qrt3MoopC5V",
  "key42": "4mqRStTmJKZiB4Xm8Mp4KdfszUHgbdQjbNf2LjbYxghSh3zZeubVBLpP2XL5rwMxcjPpZepB6ixdv4xAwhcnhgQH",
  "key43": "5AwBck2v4twQzzQ71Prq8M136V496ptJA6y7p4Sgww8qQ2o2Nz2CZyjtsRtz5tXSyyuwVeX2ZRic7xHcPUuWp81H",
  "key44": "umUnJiP5qg2qWzEVZisvSKirz2bRVWaeUcGPbDY77u4JM2tZYVMJuVo4ERxBJNxHk8CEzEu3QAgdFNqimW9fPQ7",
  "key45": "3TegSv6Lp6Ym7ZcC7DhJpyEnsqNAEPiWKLWiCUym8BrABQ1TA8RJ7FkXsoVLHGuF56nmzSM3bkNej8kCLgJ3YkyH",
  "key46": "4JDMxgYSL2UpXno4tk7qSAE47fSU6seboxM4ax9q2rLRh2ACzkKBigLvm51bdh774w8dJ57d7xMhR8vVe9iAW9mY",
  "key47": "4F64zkJ732KgAHpFrhDazF22SJtEqx8ouQR17k1T9VM6apWj2EZtm9ues2emVLxyN5WyrBwTL2Z1eMvavL9abQ3v",
  "key48": "3izAbgytQgR3owxMMxATt1aFC3zN1hgQkJdYYhxJsF56itR7f6P9sZu8wAPYhZvMUwpMx7D4Ti7LeZGdJGCgAnZa",
  "key49": "31iqEKUA4wAqLLXssqzUTv182V8mCD7zZ9F66Lk2UJ5PBiYpMwbqncgyCCSjWgKZdMDKwwDdVsW9kUqShcnggdKF"
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
