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
    "5gvYkNMFV1jWx8KwBYa28ZEEoZjuBtQTNLagWX9rCBCsuLU7oX8AMziXji72ycQeuxjJRM6eCBVobdLu5CP1bfUo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qp2RficHaZwCrjPoRWzEEry1C1dgYKEkUQhYKSqdM5pz9RhWUB3MfJ8gpezy422CQqK9bi9oJNAytc8E6WSteUi",
  "key1": "t7TSgub1g3E2xvCpTGU4hKaSyk4gUkr2NGFhdR4hatFKPRK2VmkpBmCmXmpH36NdZLLEmsnpaZirTckufVcqCcS",
  "key2": "4PmJSU5eELjccdayjRVM12d4HpLL8YoDVvjRs1Gi8y2Q9Jz9VNW3aMcNs6KzdstEszNfqpoBWvtro26gxgiqDiQz",
  "key3": "3UY2r9VGFtKpNrHXZn6yrwPpRHMvUWE2p1Nj7aZDwcCfK86DyAp4GdYL7sqK3ni38e1KkcBzAGbm2wH5xw5uPaFe",
  "key4": "5TzKsv3cstk5Pa34SF8z1tDWZJyZyuVDNnRiV8xAp7iCuqWEDMyHBrjQEB4tK3sbeTxtM2HHCjAk4UkVue4bfMdf",
  "key5": "1z2WpwzAxRvuDmhX1rCtU3xQJHJ1rFnecWfU7WbWDMzqWPy1DmZHN6WHCZuuu9NuAtQMn3ddn8PY4gdcyeyiM1g",
  "key6": "4jBsqyXp1jpmcMZvo8SjMpyNDRhEoH3FAd29RAcx1ND28cFvKDR3YdyfP3Kh83TZVtP3g4WXdnHmrah6SWFaGppn",
  "key7": "2JkGvtZhuneTaf4Ad19U5fbzqwpmS5u4RXCjG3mPedVRnhNB5L86SQo3P4vUqtnR9cpGD2BMQxqHh1aPxy87XP3h",
  "key8": "chtBVCpqqqMTDg4b5oYQv5796hmp7wMr6QpmxiHbVqabyvQ8dWthL2mXG7Ypc3BXFsbhFtydEDErj2pykr6HRJU",
  "key9": "3CAhEJCqAQdnRPHUGGShnqmZXzgdot17ofRqFrKCbDG15hPUTsSzA22pPLTAQVTAsb373xvanjQQSyUG4YYyiG4C",
  "key10": "2JjLLbPkCURGEgbyDTNXuLUVmzhNbPMtckzPJp5YsqhRj6FfA7qhCN9t7rZuRAVUeJfRqCJ7yrMLyvdNCHaBFPLe",
  "key11": "4Us3YegyQSfnt33zyP2hgVnjWVd38SFm5T7qsSVCBPCSRmAc29N6xWP148BqWtVmf864uexgwbz3Sb6wfQ2RnYie",
  "key12": "Ez8nPd9NsToBH7adkqcNUiA7rUMAKpAhzjU36zt365dur99UVFVn49mxLXUrx97zQWpsutyJ9WtEBgSyoR24CUA",
  "key13": "61Fcf7xhwvSpBj7YRCjcUvvRevAk2BudUbkaYXnmGBwbvwmST8PY9QkrB4wG3Fdj36BV5uQH3K8p39yaugtcLivT",
  "key14": "kAAgvBEnoaL9MRwMbYfhJ4yeYYpf2UvBvbpusn9tYNsQjxyKbCNbqCqbzLSxwXcEdxN6zSG9KWTafWgXDrmChP9",
  "key15": "beUkD7dqwP3nbyfkhzjpHdnLABxwqrBXggXNnRKh1TpKxSFQMPeE3rkgSsr5vBeqRgPsHNzt9FTD961sh3jfipg",
  "key16": "4qmvELdHaUdDcAgjQ7ygmEqqNfhhZL7rj6Mjsf13Pn8FnV7mnEWfyRc4iNbuQ84mxfEKbpHKfNd6jNCEM9JVpLM5",
  "key17": "vAbJTgj1om3E7bRU1kEv3efv1NFoxdaN7fDa4yu5MnbjY15CFTCmE6tw1NiZyq6t8qU35s19fcfJq8GkXD5e44N",
  "key18": "4qArCN4jaFFMrKP3RdudedytTa8L6VW2QbmRiKLber6YKiGke1TxXAmM5kyBPpFg8JnUE2bDrieKP1LUaHxsGb73",
  "key19": "2mg1E2cSJZubJRnQ579JYeW4WgkGM1ksqpLcqSkhdppdbCLpRN92xWCnfZHYQujwYdFjbJwNssgp8YCWZZ1BVxMF",
  "key20": "2o6sXSztf6tBWei5zKxhgQTSWFp19WWAtpgibUVcXwxZnSVYqVqFXyMP4t9Sdh77AyJrph7MknQXncopC2TFcdQM",
  "key21": "3czKTYa7YsEargqUjJuYogLzfSsiKRy3NZeYN221ab5aNeV3XPhBiXfKW9PL2PhxYAcqUGTcXRSqoNzytm9Gswdx",
  "key22": "3FKf7UeS6Y6Y6i3hhC3Zc6gNdjRtX4RZnXn4WEiUo9Necs8D72Nfoy2rAB6nMCFYoZZs2atHJiqRNhEuw6v4Xb8J",
  "key23": "53UFKGLTnFxHD7QPMUkmn3XfkkL82EQ91gkzub2NCRXSWwQwioDRNgFHWFB1ZBzC3vRCLxcYSMAc43FA3qCgNS8q",
  "key24": "3ark2mH5UxyrcQA41qSMEcqs7uqRM1t8szrKVqq6LpSCNGykqDktL9v89YPAw8uqZfWeuDpFPLCQrEYC75oMVSQE",
  "key25": "57pA6UiWDFkuPBtBXz7hKRcewBgKbhdcZe1iBt2YFn4TTvaHpdgfAiqMwE2cqZxUnwmaoKKPFfAE2EptG2H3Jbaf",
  "key26": "3yzdQdUPG91VQQXBkRtMCWNtLunp6Nr46NxD6dX7iohPL74CAKbwGXyv2RnTrMYrvsJJmnDvSyXoRHuTaUScVStj",
  "key27": "2xuwWmWHx7cbqyZ5YmhLAZ7tc17UhjzX8Dg5u2WPgALjAdP9YZhSraaku7RmbKQnj3Lcvf4y8HGddFtnDDzbaoEn",
  "key28": "nnfAwX7TrUmnnew7j75NqEBFk73q1Kpw9wCHgDE1K86bvfhq2j3WBo6trS9o9HLQfurJvhSSxjHVD6eKbVgSHYE",
  "key29": "2etqmzs8d7LyMURNkWrCDvW2um1899c1Xmyeyw8LUKNBWDiwRkASpL6ei1t5LMxSXNv6kuZmU3GJLy2TGat6CD59",
  "key30": "4j92vc4Hb7BveUtoBhQrjTtvEzxtgcSdEWKcmD6yJDaaUf2Jcr3oLSzdz88J7NWgRYtk6x2HgPqDokK2yz7SonUs",
  "key31": "3QtCRZux5QGspGCYYRGFEinqzR9z3XV6DqVhKshaXZ8RuYHsvx4tr5e4VSahgoZwmiEbMf6uT4TfzJ5MkkGc3jkV",
  "key32": "2GNZMh9Sv1Q6MLUVK4nkqSmjcJYuyGFu9NNtBj5Bc6ngNB5NLjJMe97Lwwyq7EuANmxSEKoELRcqv2Ze3gkqitCt",
  "key33": "jBXS4GsQgMHa5wuxtPHtF2pHMpeVSKe3UJmhVvE6yL4BLjVKRnTtZjqqWMRXNJf1VaCithKj6p2qg1bdrUsByCC",
  "key34": "58sDcMsDrk4uoqYFXFtb8pvaoPhXEXZbH8GM4h4TGpgizmFXZLtXQcSgGn9t7RM7gyUzx1ZdsShoXWFgUKRrGZK9",
  "key35": "33AGPazoqP2uBb2fqvE7QuBQFU7hTaSYX33iUqciJSmbbTHEneKmqqfBXSrGB9kNQtt8gSsk4nacq9MvHDuFAjJH",
  "key36": "2ebUyz7kM545LhXqPcNEgaVbSmQkpronVkiVX5nktBCDwG58wRWBJBMHVynKoBveArePfEsq4UPxgGcWFyxYcxSm",
  "key37": "4q5TeYDfn9y7gGC4g8jQDXihGEPSommg3VYgwyJmNhCmosBPL8nCmADmu9PxHCpioxEUMD9bGE6HRt5WqAJLAf6r",
  "key38": "YRAsyoP9YA2pZTQ7SZPCLrqmKWuvXr1VSRVMWp5BugSedRs9niz5nhuWxvtexyXx7vGGHCjAbHgprLTidrnhXdz",
  "key39": "3vx89mYeYDpNJLKuco2E4FvRSYgiB3RCXvoLqEG96TjAAuKcuGWYKk4fpdAU6U3qe8eeMtQ2DNf5vtc2ZDtdtnfc",
  "key40": "3ud1ZvbEXyozd7dHHXKMNtrDvAhy3HXpWdaxm3P52gLvd7nGZCGtB76vMsTTHtEeDL3jDuJS4tVR7Dai1ZGXKFQL"
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
