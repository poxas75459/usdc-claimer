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
    "23G6SkTyFHXMCwf9wRU1K8Eqvks9FYwoNsq6Q2LyNNgUw1jt2yc7p7aaksKTjQF8G88wC5VshkwuFJr4k9xvVoMv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dbufgxYV8yUmPVyEj5qtHqtSTEYhhAWTD8Kfn8VHqidXybu1Es8HyuU1iiUBCursMq5CpqZatFfofRyKNQQsj9L",
  "key1": "37fu4vj5FktuAYRjf9DaSxqm3dcGZHoNFtECnD3Si5dvBn2vJtEEtX4TLZfJgvFMn52aKGc5J69itgKNajduv6EM",
  "key2": "uQ35PzKw9fdCdhHqUfW6RmJUpA3RuMA4w7N1Lxc6PXhE5gGDZtvv6HGA9ChrtkgWz2y5Gpgz8iKVLL7zVDdVLsu",
  "key3": "5XFgsJDFgC3Ku2Uhck9qh9acn3ErnvMXbLNE3e1qWJtjJVSMv4Jt1WVekCq8aZYdALExcu5ZhLVueHCyMRo5UpGB",
  "key4": "2v9UV9ZjGZR2K9bUcy34MFrDL3JzkHoWgxCsCjqr5km7KQKuGPpH5tgSgfuDTssBU5QhGWEwdE5mMxReh6maMRfr",
  "key5": "64hfvjDMWh7HZPiJFhGQNF3AAWf71G9VmajzxVa2oM2Czmspkp8nKuDuBqg1H8wzV1kLdCHAfepxZ6zv5dqLoP6R",
  "key6": "CWLpEo6Phgy366rPj2vJUT4KJWTyyS42iSJu9QPror4d49HRawpewZHmtazAsfUuneR3xT1veoWejqwBZPUsZmX",
  "key7": "3JsZG4LQLgzpnqJfSRZ13QJE6Kb5N6XrBxp8jnrWZJtri6GCVqexWhuwc3gFerJ26YvpMTWvKT4JqMACH6LiRCsz",
  "key8": "4ZNqEestonLEQSp3wvt4iKhonQ9eHQUjUNGFrPEePCfBNZfY5tWaYYD5Usnir5zmwuXm8MTct5cdmhp6BQ1WHyNm",
  "key9": "2rARwPQ22LaZBbDqNhfCMpXK669ChMzwFivW14RrDfZen4DKNc9TzNKfLWsYQ6Z5bx3eLk12xU4GwbojmttyfKTy",
  "key10": "3oqActRhn2UMNtbBZQxodzSdLXxifxw9Gt6VEgfD73h2apuiDRuigSrpccfDxjiEeYMjD5wtPZta4DHs8KAcEVBo",
  "key11": "CsSzaTftfEFavmvTctToK12yZjFv57UpHWpAWUaSG3MUsCV85Ne4Sv8ijFYgwqUSFj8fEaAYdutLD98jtEcFpZc",
  "key12": "4GDhavdJgbEKP2Ntx82Lu6vvFurKSs4hJ7xqq8r7EhBhWbDrMVFSGUM3Bm8gdvcgPMY6eRdkdtJZAzBiz69YhZYa",
  "key13": "4HruK2sdkDZ4ohkE6y2mnDjhgeJnXSwdAZdAkuSmSbGZTAcDt7YSjRM38qAQSYVbiEaUEC3yii88S9mJVHDcSoBq",
  "key14": "scQgSFeHKdxPBo2ynQHHoLxoBk9Vqj6rWpPAZBjSqrG75cXnwsgjbVUKt8Uog2uNayC1xaSXsgDkox4RkWfNLoP",
  "key15": "carMhMaWPnnS8MF7wtoHg4AkCSGinpWk8WtrzLM7JUecFdmQDez2HKrfMd7RFAAZ1sYjmdueKwj1VfCepcYRUvL",
  "key16": "2JNtFtMd6FDCciKcrDfMZkzKFedLcu6gJJqHT4qRr5JTnYKs4xNPaztGpBU5yYryQDQ4nbYyF7Uv3PqrPAaotxws",
  "key17": "28qraEGHknwBPBQ47hZU73uGR3cMVTZyGMAtEHg3mJkxZg3LNDQ8ZorPDn1bDC49Qo4WrC5cqBP6Vs3bR8VpaFFz",
  "key18": "4PPBQVsh24w1cg9qPt1Gx1pthcmycTe6yu1vEsQ9qgr76bnnf4Uwue1ziFdFgNWUgEJNfCcExewKWRQ4C9rHQ3aE",
  "key19": "4vJ3HsCWcAJyeQkanZ3XpYRQDMcjYjzs4yP22y68wRLepkUeewnaoNzKnc7J4aqJ6U95fGjymz96GB5ZV8ptMVSA",
  "key20": "4UkHmnzrkN61AZ3WPRu9g8tU1j9ksTCdBTKzeXeedHq45mH6GkPXmmgKAhDcNvqcKZuWy9rcx31Qjg1eNCZf6YuU",
  "key21": "2BcPY2FDaNLiqwUveyVGntBHh2EiFC4C8YYyUKwBNBTZE6KRNxSPDFpicgGbN73tKcD6uumPgtotB5rYoCZtyV7",
  "key22": "3RpffkBdVK4ReRyPHLnRxSHfN19mZvYwgKN5ywVViZ8FqyYUrJC5D9cuANJAtGoAGmm8pqsvtbKXBzsq4yrY2rFD",
  "key23": "2dxvV1twc8PrY2TAdKiKWL4u4iKmhfrZz98PaoR6iwcBhqmLJLSNpdS8L8LdxQfnXo6Zvy98u5hvCAE6ShsMiFXH",
  "key24": "3sH1vrykPPSJyNdA74T9bQRE8F2jXUrqr3ooorLMq4o2eKeQgesPKXoFyuSn2Rhd1VKCVqHatGcV7FLkGR9UG2Po",
  "key25": "4uhu7vYYARPgtmxwGEiVJTqjQgXxrR33Q1m8tDxoH61ijSDgVqGwkjtpkJsKwj8m294qz2FrzrQ3qNnm3vGSjvHc",
  "key26": "3Hh67orAFF1Ubftr5mzmSSXdyBnLiUPT6MrE2Rc3umhUSUdMAc7nTFJyHUiHKHTKE9qdXYKH1tfYPzM7eMACdLpu",
  "key27": "3925Ce4dp4vKa5uC77QhgDf2g7A8QTU3QDbtS7rCzZxcyJz2vTMHfGKUMpjN8eH1V9uiXUBU7V2JoumsN3JHiEAv",
  "key28": "4YFmu5NjxEwsLpPFSYMoq35CG1ULYS9f1CWYW3oQGjnsTYajU7jWNmU9w5MQqwsYbJPWs3UnWbuWLQSZDtMcNbWd",
  "key29": "4J4EtPaRtNnNsBrbLf9NYgtdcMuRDb5MXau3kVSYYbsK3mPkT34LMquuFuDZL5KmWeQGaoMooWRMVrVgLHtZTR4B",
  "key30": "5abC25ZdYCSjGigs4kvEKtM5vUVyiGJ5TmoQGRb36hfgp6G93sWGqidtMJSjgsqje7VBE2iUQLjncj9kdA74xHkH",
  "key31": "yB28UnLnmErcEAXJZiJZYsMVbN9dcBU86ccxERvAoD7aWmT4CrBu3dvQi338wcN3kBEh2B12R13bWtpVm6ikaK2",
  "key32": "5u1AmUgeKj3RYjupgRy8bdpT4p4Vs4PYozxQZMXCkku9akrV8afQukwTu1dMJUYsTJ5YN5JgaYPgzyEVk4W5wJJG",
  "key33": "5ystn6ci6XVvSd766Bqf6v69mdwLb8PXZecS2vPUaETN4JPCFjD75DaasDUZgW6gwGvb3m4goienE5EdEm1faTcF",
  "key34": "3HQmKeFmNsVuUKZRsEGot9H7rmkxRawQtwHFj6Kzc2dNX4oLPoAbnCQhMw1TEs6AdqkCwzgnWibpRV5ArfjqBMa1",
  "key35": "9BzVitgLLsWLxHeiGf6nkYQigX2hXiiNcbzaEtKbWsiVtJkup77gn37utQGfSp3F3FcBDLSJNvdsdFZSesiwKUU",
  "key36": "4FA214ZhkLBJ73bMYbZER9zEHU2GS1CyG7ovhmA885yWn4E142MkYMhsR1yJcwBtFq6kTSzkJPE1XbSAbPoXeTAm",
  "key37": "44uzyegBLzgG812WJtfoNgDtfquqRsYKMLcurT9oYdNhk16pKVUrwGx5QeqLj9Rg7V127ptGXkiK73Ea18ESoiyC",
  "key38": "TR98979DLesfiDrTc9td4H4hYiTmky1rKCUXpjf1Px8GUaezRqdRn8KsbBVED27FQmdyt6Lqh9fy8cmK1vkqohm",
  "key39": "2e1eADgw1UkqhrHcrhwqUf6L44sEoQ77JsyKHXnLoiy5zc2B3zrVzsvQbckfAyQEJMMYguHWgBCnVRrn2gNN1xYs",
  "key40": "2Ly8R1UR6TC7C5GCaNZLGoEXJxCMFwRKDYWzuA6TvvDFjmB6kT13r3LgdyPnuHFEhZNx5BHu6Vcqxr6TqQGucbyb",
  "key41": "3dyVvCqcYaVHkjqYVE85TJeMninJtyQcX7vsc6Dfyax8QaypgxDLzQwsgjQsTGw7yXXN1CPCdtTR6DrjHsfDgKP3",
  "key42": "4b3RrFM9CbCZ2YUXJuViZt8PnaNScEVKetGLWYdHqbeKh3iuUGxEp5BHS7hkkGJv1ejRRm8UyR9ZQ7bZRBKVnAYz",
  "key43": "3S3bJVD2KbVhWsLTK7Jqntq4hZdbqUuxRvUXgjFD911tZp1FSNLxwkQ9yKx2abDWa6Pkstdti3pZocneqSztGEaK",
  "key44": "3HPiRydFXyYtScC5SRutZB8oVoUHAHpjnrBL7g61DnXdMV1KY7W7CDT6Bfd8TND1sahZrDXm8yn51hbrrC8wfvQa",
  "key45": "5oNfc2ixESHmhhrYf3VEruFwiCEiyEX9RLLJSfbGsjMz8Y39C9swfWRa8r5ND2krBY7cbWAhrPbBVcnz1jtqyEkg",
  "key46": "4mmmEW9Fj3tiyPKJXXVUxZQffwripAkZzHf8R97jn8KeqnFcXUXM2ajQbfuanswRkGhYAG3rGvpZcwqtcJyMw2pS",
  "key47": "4Z9jtfGDmmoj1igiHxmne141LuxeySYTVAyeJfBnEt9F5mRCLoMgUvubHeAXHxtPiTMUz7k6GKRAPz4KAU5A2ifp",
  "key48": "4Li7zrq2fuj9GVmtErajCJsirvoZUXbaDj4BZCohcsvSoLSgAQqfzmkSy9NucK2rmuviN6mA49LCnsco9dyDqev9",
  "key49": "62GwgbhX6BcY13aKhM8jj5RLrLEtMkiTbcGZdpHJ5qzSVkKj8D58dnjFNajjejr1bgafgQ7RPwHyW71UoLgBDSX4"
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
