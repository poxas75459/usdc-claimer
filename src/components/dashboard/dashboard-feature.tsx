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
    "3xL2vrpuYqVwgApFXQqqHUPAk57519zzFixfBjxVAtfjAhYRpGiMAVhJfKgdtoJYRCM41PRdM54RHnujByrwTmYv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F6qdcR33Zb6qSSvdG1YyUG1VHxJhgiNbz6UgYpmuNjTqV3wxykdj3m6GbjR84DnKYVS9kZ2w35sWLk3MFxB4cLj",
  "key1": "3VhNqDHXwiwjdFjutTQ3LPF6TsN54nZmjiS4Eitpb6ofVTvde97Jx6r22NRC26TAKDVgPBYyn19WBAZbvy2HZ25S",
  "key2": "55e7BdtReNuoECJUB6XKUtdrRDKRWsQ3zovGXcPPCGXepVCkZ1jSwjjy9r2sjcu5ur3o6voB65npBThHRLMcPP9r",
  "key3": "2x3nw8gXj9KkdU1nb2y63CrXQbbwCTbePxrxcvGis6jeg3LpR2qGxjNE9fQ3w3TiVmqGkcfuQJJrhdymEyHE4ntZ",
  "key4": "21uPaWqp3ieQWnk8ocb83cCgqmB1yoFDTUdduSgr8a6eJUHqrxov5ghH5Ub5shaDdm3AGZxQAbviLVVKb7jZur3J",
  "key5": "3k2r1B2gVoNVnn9snYERwgDQkP2EqmWzNhhY1DpUjhno2z71fxgSPCrpk56iAmJVbnyEVXaAoR2RmqqMkhDfLbig",
  "key6": "4637ePvpwG1G9Md3zZiye1oufH5ojsnzte1pYufuj4PPwGt1NawdNM1nSbVRUyCdmorzPbp6rn8fkE8p4TAy3Vh6",
  "key7": "49U78TG79YHTG3tbtxWaSFuF977jQrhhutBVYpgzb7Pf3fXQvZqDH3ZgFigSz5Z2sXnW5eqNWVG7Hq9puA82Z5X5",
  "key8": "bVpN5AXVgAREtkhfXtJKM1QQ34E2kLvH9LZRx6pM85YoYK7cC7SvtKXQUfGPvV12KzowK1ePLxDQrk1TUQGtiUb",
  "key9": "3aAnZH34LMf3J8PDCKv7JL6b8oJCAJ42aLoCJMBmuY91BdyxUsd5KBWHm2mFEnXyZMQ6d3sbmxTCVKRpxVgBBp6U",
  "key10": "3NmoeVrypkAiNazVjMnZ1W9j69GnM6oqebMzL5tpVimBRpf3axdhNCsHaU8H3Lb8u1wFDafhHybCafmqunt4oYE1",
  "key11": "2W2xxTtrq9oSWBnE2K8HSXjDcwTZkNZAtSnfB4vCfRk7giEj7hcFuQ16Qz7GhHpnFm3KqwvwjX77o2f79kBSSGS",
  "key12": "35fGVEwhu31GBfB8nRSfUtC6XPxTjLDPvHAudxibpNZQjLM5244iqHvojU4n9aHbok8jbSehUQ5ZhcD8GqiMnpat",
  "key13": "3acY2GBroWQ2Gi4wJ3vc67z9xCWJQuvwStKx21prNV6buGYtWv1BnKKC3kDkoZmRi9oRDYBUoRwKbrEfswWrLdwT",
  "key14": "3UJgKsi5nHVCXHH7oUkTfHE9FF7Yp6ueBCoAHKvTsP7DaBe7JfKHZzvjEK3b3gtVsvYcChT2yYybnQvmvPukHfFq",
  "key15": "4vfYM2bq4hNY9sfVUJinvhf3y5fUBqAMNziJcQajAWmLYo5scNiizHd39Zr1jpPDZmFbUz6eZTaFRZJZZu96WocD",
  "key16": "2a3N6d5rxkawB2fmtr4NPp1DmoaV6wzQTcQmL9mTKUpJsxjdjvSE39tM8ojc4y7ErwyrEvrfkUAMF4FgKrZw5TSx",
  "key17": "2DHPgmVUqUY4pHiZJ8do7iMYub5s9xwNRXH1iVKAjmApkFHgx2fxudRdCsDofVppE76pkui5ZWnYmhQJjUGoY3zW",
  "key18": "2f648hADS8TBSiu6XiWpG6sExKCMqePvB7crnwyHqLd9TjoGUJoKEAtDMkWCtrwfvU9s7VnR78SqQQcH4TJua47T",
  "key19": "3iyoPQoRoa7LtwTcKkqSGvKHiFafZKYL6pR2hNM3PKJ2Nkv4X9e2ei5JFT7aXKQdw7LVVaKrqA6wnZsEeayi78H2",
  "key20": "4HSutTnws9G9KZ9eQnbG7Hz4RSq9XGE2YhEXZ5zkTpMe9EuDN17ne6AaRH1sdNfnjtKj5qa2xQRrcKTiidbLkimi",
  "key21": "5eiMJqZzL3Dmq45hYbuMCdVwoUXg9apFBEHphsQefDWVvULNnHxdRLnLfCKf3Ybt7SHnHNyaWBAwctiPgPFKm6Ez",
  "key22": "5viVomoGzeb39FgYBvkTnDjZ1nf5kHXTGfsLJT9sWeMVkKLsW8nHaUPdSA94JG3GhLHqg2ogt5HwH358ARxRjDLJ",
  "key23": "549Th3YR6KXsBfz7DoSSmCv4tnBsqrx1UmnuTkjyHuGKSieuqPVA7epSR56z37wFUvVdtRsppKpqRBp9fxFbHWfe",
  "key24": "DtdgGjX9167XkPPzvhmE7fmtrtMjxuK6Pf13bX6NRDSgupv1uSVtqhdyRY4Lk8BJodWPUgznJJDrLqfZg1BeJik",
  "key25": "4Cm9PChpEisCgvsi8TKuzoTZ78tFV49Lv7iWKeBY8yi11gFV74tfMrkXSmwaJK3MRJmz38L3drUtB8S8dXcXXHxp",
  "key26": "4VAWy3ttNZmuCyH6Fhj7iHu3VbGmbbFtx3xzFJHzoSEaRmp2LAcjp2ANME5q6Xzqvaudar1Nc3fmhsFBctmoSBFL",
  "key27": "3sFvxh6EJxDe4bZKNKjpQxC7JAxMehHUAzpQyFtQzVXTrNBFCzDA723CukqMujqQSrKL91dXRTcqeryhRedoffRa",
  "key28": "61P2GhF7hDevQhrfZicDVJ6Z9RKP6gJotow1fkUfGkuQeT8hJXkT6dKK5H88vecMSWbXidnAT32PFx635T9p7bso",
  "key29": "3FpKTgrqndedfoC6KEXJuUcmNoe6Po5kDaGUHYgjVSXj55yYWag9W49Jw7Zx6bXGpdHQmbwqWr3RzEhCQSVFXpTa",
  "key30": "2LoN873uA9PerXSqQ1Qq2DfmNkdDkLKvyXQzFoJtTDEzRDtTnkTWZsYsJPNGZzoEe2oF9txfChUiWSvJ9pHekd8z",
  "key31": "4wurXyJNXUB4aQpjkSKzV2VQ5yqYCQukivYMRFvSCbgeq3cJeNa6kwc7VfAq4SpPPoN6iLoe4iYnr1mx8jRTDLkd",
  "key32": "2EZmvwyoGwZc5xH2jSgtV3dWuNcQ7HNYzZLbLraejceQkmksP7C4yFTfgV8xe4yJDtxCmqQqbzT3LGi7BxvMc5WF",
  "key33": "63HLXwpHyczps3ypEkMHiQQBXiGzWdbd5fnGckpozSconPRH7Fdz5KDFat9CgQdXK8yNpbvejkWaEFuQB2cdGPae",
  "key34": "5znZ3JozqcGjpq9rRYCxRtFuhT33VBEjhWAR5YYbq97C5t1z6RVrLqNTARo3VjSHa2N3Gmfz5A3hEm28PNC84RYo",
  "key35": "3yrtsbTZviFPLqkZgU7GitexojReFCq518s9UyaR3ENxWR2eFQoyYbgiU6RayEKX8SCAAVkWJ9nch8Bu1theYDmo",
  "key36": "4FWTM5TRFZwvS6ww19RxddZ1SP4ZnegyRb6mbwfhTcxgy823yHa1tYUEBh5u7AZkE3xG5SymXXwTQnNUpBA5LbNo",
  "key37": "2VuCHygqmipKnRpxF48h9ZjZnpm4Wy5DeUJtWJ3t9PaxV8hod6vzWnmex5j4RNgnBt4zQEseGWrbyXSvfuLZ1rCz",
  "key38": "5gqHK5UTZ4pzmmaF6dZK1i25NKQu4sNRnRAvrNu5tBaJpiqYHs6usAV5HLqH61HxamfbvsR1j3RoqMdTnzR7c617",
  "key39": "5N2iK3gvVoD9kr2MKTM1Xf1wgJU7nBknMWwPcF4KM9ppV2TNq2WbdtMcw9jzZiGyr1zT2mFEgo92Yyx9KejUqutv",
  "key40": "URB37JjMQqytA8AAc33VCvu4jnXfDf42ewJ1iYZaD3yvWWaRFGpm9k1LKHYCzTzdnHafbHoLMeebi44nGbbdmzT",
  "key41": "5BYyAnJft2aMCiz5KD2iqDVrdhHkVDrvUpZjpfR6B77wSYAhWicLkFomtm2ugU2feTtmTSu6YkrUX4Ens83mkqsH",
  "key42": "YWwfB6HKfEt27J4wJoVQJVZuCfopZkqCPyDw5W1txnwcwaAaAUCdJhgh6K6XTRCYzD5DHiK5JjkEqxX3H3xEF9j",
  "key43": "aqC7J9WKNxFdp4LyquK9JhAUVCuZwshyMS791J7YKAM7SziBR3Jn9w2JLLoMUbRmy7jYScLf44mtCMTeG3xjujd",
  "key44": "2B9nHC4stHFoMgntpWKY9rbQDJLdA3MDB9EfDxZnPLSKpPr36mfnQhmKq3FKvGcg2W8DMYgbwm7c8isXuQVhoqP4",
  "key45": "2UqN9PJMkmzn9QbhT2APbCKQroZX8KE4i8mN7YfTGMo2h3uT3sUhSLTNc5ugSjGsvT374xVRsr843ugpVaZdFSN2",
  "key46": "3i4mhD77RH5LfC5sqPbs6cBCXFZFnPEoEhemqCQqnvEgyTCUkL4sRPYabt2WH4FRPSKBk365rEJLcsvHAuMsdrJL",
  "key47": "4ETzgW8XWoH31mSaHgC1DPiy3Gj31QUHWg6H9rFCBfca4uzSSPDf8Y9yM9ju3HqtV3zUbVj2HscNAw2RaRCmpuAq",
  "key48": "5VqGSDZekxPk15wemELrA6fXhJ5BQr2iRr6CyCgibgjwWprFVNzikfwZ7UsDKxsZ8vpiWmSgtkeec5GfT5xcDj4g",
  "key49": "3mnomPuWw8mtr2RFfEQ56zvDQamaCAt8nagpTSTxzQGqh9VG5VAACkihBdmj53kr6hr6a2YiNQbzKSpQZy5ozN6C"
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
