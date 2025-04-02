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
    "2azosXn6GtQ6fByS2UT5nzwy3C5VAHpX5UwikYU16PNhUV9iQSirybraZDkW7iBGxKSbPKHxaPCgKq8W3Crrq5Rb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T7QT3KPNbuQksbGdS77Atgf79beybz7MrFgRUoKVGJBDBc2tE75RS1vdfHY3vDPW7u2WPJrviVnuxPPSrsV7N8P",
  "key1": "46yiQtEW24yobqN5Tym5zzGY1VUFzFyLB5fzbvX4Xa3JJtNACkZSzeZhcQt59RoQ7FE5TnyrS5ziduzwbiQ9XMNH",
  "key2": "3uUtFFFJnzNWsWp4xW11i747Npma4mdLLsfGcsc4CZhFwQEZmygETD1xLnS7cg94zn6XsYLFbDJ5MMtdR2gbDdww",
  "key3": "4Hx3W8amqDErS3jSydqzt5P6qG1wz1EHDhYZ8o22j9hPUHF4569rCtsuFABvkVoidC23jntr1uA2V48hrbHwFDDP",
  "key4": "8gK7aHTU4SLAmFFvymgTi94vWg66ccWAgybmDtbhDV5cRrogoCvG7S7KyFEw1CAjb9KwdvZSD27foAQSgMc2GWm",
  "key5": "2QsuDVVSqVPbybkvCv1D2CffH9VfAChwajZEQA5HcyPHCz7T1oKcSrcEZDFWhcJzTgtATgqzEFmvEoAfHZrtCw6W",
  "key6": "4Pz3CxoQJAsg6Mzi7RuizfvKYUu3EMYkA4Z2jEvDBxy7iQ3qjJLVy3CEYegY3orsY6UqfniRs3Ad4upkKhNzATb",
  "key7": "62mnqPfFWGvZy4EscwQ7tkppcWKTHNXCjXyN25Ld7BYDUvZB8c6SbiosPPHaXYj2wSmxLoUysygY21Rw4CvhGQ3W",
  "key8": "FvZmBQkTSM59JLYjRF1ux6MpF51A7Tce4F1CRMTG2AsG6tVzgq4o9vWkxGS3o4m45BC2peN2Zz9kpKymbYms2yH",
  "key9": "3FVCrboBEyjEJEv5nyYsw81xZt5cxYxmFF6FJQjwULgzY6T4xTpj9KAw71kSP8cJBBtn4U1Am1aCULW1GkAXJxKY",
  "key10": "3UzBddPuDX74vQ4bvsH9wJoY6aiXfzee6imsSGLeNsa477UMY19LHhx8LDdw7wwiG6v4zpKWmiYm3W2baXzRqqUb",
  "key11": "tDCvvv4dgHZeGkzP3oJGHcywrdX8Pj5u7wSsE89pzmQj7jXbTseLhvU6AibLGEU3WfAMwziU6Ru4pmZM85vy2BU",
  "key12": "31xyswCw6Mef4dcLpXCXCAQKx4eHxNo8QwF7YmxgWpU9T4M1fiYy797ztHiDjYSiFaij9xYDPk6oT3RQKme6kagf",
  "key13": "5MywqAybvT8MSz1nrUQba3kdNp4t4R3wPACkwLzLNqcBJ2yiFgaELtJehZi2Ya2EuX4DLvxPdqaPFhxAkM7gyShA",
  "key14": "2317kbMk8UYXKmn8t2odLx265tuyXvNNMQxhHNZipYSMLPHdJjyoqq1nCZPVHhU1Ks64As47pVg4LM2kU9HSWa86",
  "key15": "rt5Ef29mmhuq1ynqAsJ52CA4JBcRpR7nLyugNtSJ8kRDthXS1Ff5znvsaRxWABFpKcDipAeHF56xjAu5N4idGNJ",
  "key16": "3bTBAKWKWvpmDdzxG5op8ZwisS4PAChZ4Csv4PvBX78qJGr3APoMTpzuYQ4JhrquFXcmJnwgGPLWUMxPNDbqkJR2",
  "key17": "3hvprtpvyhzhavECJEQc2NqhFXjUe7aYnKi62DMNgLsxV1iMnCPGSP9mUGVzQQKnu3aURYmNeijKGrCYPo7pEJ2G",
  "key18": "2jYz9HC6khehNQeurT4chWzd16e9EmEJARQEQqbrP9WLf9PkdoYNDCqjSUjMZAQfszTXgmdmLeydyesxe2wfd92b",
  "key19": "5BvdW2K9wqrk151qr473JthVzLpjP1UELt58HSASwiou4UZzoWWCnQkvLrPx2jg89XdvVSD1BB3dUcruczpvCRpE",
  "key20": "5wpXYtXzRk8hMa2zrACdKkoGta1dkih9mPZQMNf6ADmndupUqtSywjjbo3Qj9EWBWXGdL57CLbwV171kwty974pG",
  "key21": "3vGSHLp4Afaq8KeRehogke4bzqKFisyZJTo1w5VKdHnyHSMqRhicqPNnD7YihfrgwFjoYifj2R1fji3HYpvCfShH",
  "key22": "3jVzgi8HQGzrqbnPjAY5h5WmK4vJ467skpbqJZL2MFYfMkpQMQN7xvnzqEfM6dMB7FwAF3FwjeF9yMHTz9nim3to",
  "key23": "3bKt3P1epnrLMjkYYDYEm8N2e1twbcRgnQzs6Pjkt2nGbUCQK8pRv5HPxAxjkE1gVRFbL7wKwn8rFwVX4noSio7q",
  "key24": "2Pu7zJGSPdDqebVrus68sGrXjy92Ms4agDZHGQ3Sp8X1pPSHBCgpR9p9aVUH4zeWQ7RtboLT4QUru769tuxaksQe",
  "key25": "5Cta9hAW4F9g98DBiJ7uKuMPxaqcCAShXPf526hpiK3tFTFCz4csqR1eob5x3Q7FzfpwVxUwhVeobNrgimNhF1gx",
  "key26": "M4Rq4FgZRdDn4K4WRJ1QC32VBQSrZUXQG7m8Bpojt3WK7ERo3LpgC7Ya6uGE2x4FdE83k8LXWX9teThWrxroXZr",
  "key27": "53rdBZCumfT25MTGNziBcnuFtdDTY1yGTTN6X75iu32rhQB5MSAPWPXdCEWPwbAXTBMd6NJqVEjSyjaEX6Q2H8TV",
  "key28": "5uPb6c1mKxoVW1ZMu7AJnjwGmZsx4XKeCHU4ww3Bqja2Y75r8HVN9Lq5aQcuubNr9ZUefTbJiUpY7PdLRKz7BVBP",
  "key29": "2dQae89GX5FtmPbVDVP3JDatUiTymp2Hy4JGu6LkewJYccfM4ejGNQtFga9qLYCfNHPdfmD85YtYRbR6y8ghxxSd",
  "key30": "e5GcYuFFU1X8TPDY2byRnnZqQeLNuVMDJucAQTrJb3GLrMHoy4mcG83rndK4qWxvCA7Lxuw6b3ZdFdQQMWA9dCU",
  "key31": "5xQhUdPadUBCY4AhcTxCFt9ctTfMCpJCtDMxQm1iZW14fPq5pvcLcsFfpUcz1sPfKT7VYLDLimdY2pv5D62jG7hL",
  "key32": "2FK3sYwdDrwPsbq6ELrUj1QAWpSfpK4xDM8Vbgh63N42iGYtCeYkjmcGEKwJdBV1dsBayykUMjd2s2YjKBfxJkrk",
  "key33": "59izrDtoFZ8gnUor784hZCcdhAsxH21LEGVSV3VH2Q3BmzXmQXmrzkU5ScN6o8geJn5VFHYueceNodD3222Vhpdm",
  "key34": "4fw7koYm2wvGLyUojBedVuQcMCd9HKKvHJxHpZ1XNYfrgCiuicmDNxFae4hFMmhPUtLhK6Jomk2N1E7c4u8Qtygb",
  "key35": "4W4a8jxpAZNZFwYuAhtNf4ifvqc5MbPKAsqjDu7HAsFMtYkfv8r2W3uLxSNHEPNrmNw9R4tDwFugH2vtcaYbtxKw",
  "key36": "2iXrj269L86YmmV7v2c92AgF7CMRv2mQ7hwpzLJQXTBMPN8vyLJzvD8V51d2CFq6xQDan4bhZUVKXcbXmY73qRJX",
  "key37": "3e7VRt1sRMtVsgPdPRDN9nYWABdSiXCh2pjqaHQWv6mt7eJoKkC8c5RKpsXLyTGGjp5TiXRJsKnoLTFebLDkXdps",
  "key38": "4pUPqbgRT97QJqrgTRPeCKZKTWLbR419XfGk4pCodrCF2u6URCaLVUcsiLxCymDhys7b5EffB2kPprCUQBBK23jp",
  "key39": "3toVUTdGwXBgra5NgBFe5e2ZbaVKtBUE1njF2zoyA5mJh8gamRQF3VgSXNwhwkpD8bizbE6e3PyLj4dnvY4sWexg",
  "key40": "3BCbM3cU3LKjCZ6WNXUXJ4Fg16XKHwmiactpk6J4YSadDcRcFTFMKYmGMEGrKMDRqWRQ7aVqVTjiBb1T3AXqE7cB",
  "key41": "3cCf4GnzFzFDVFnShKYYY8363sgo6w5egXrp1wFqBMctURYX7wMALaBd2ZyLfeRSzH18c6wKxsr8Vj8ZN5fiChb5",
  "key42": "6jnLwi7fEvG3KiQiNLeQPupRuNSpSgqse5ZWza5a6KVQWi1TPhj12mHzKDfdGLSe76booYPLsi35dFoifkYK1PU",
  "key43": "hLHa27nGFcabPNMM5GhSgt1tDoduLHarJGViSpRD11rdedigLGf9g66omvXuK3zFYvuM6PERhsGWFDey1b3qAxy",
  "key44": "3f9HJ1os612DpAcZSwd7KiGbQLvMxYWgBxKqRMqotENAwGEnqnZ8En9j3duVZLY8ZrdcEAtVoBcPvRQpykQZ7wQq",
  "key45": "3mjWFLcEByTEJLKksEn2FM6gGj8CgMmLSWf4363m9FCU88davzD39bbANnGMnX1mnfa1gnnBjE7mEhtekdkzLaQV",
  "key46": "3XEyM8M79HSYM1wy8BtGYsGwPY2aa58KMwkExVQxn2CdnsVXEvxnUsqAgTEByce9kyYfRiJZxYM76LkW3c254Q6G",
  "key47": "5e1XpQMM1TyB2kNoaWLVLeM9fQqHJ5mN7uCcabSqUxY17WkALTHaBQJ5inPF7h7Qh5D9FSe4kETwDymtRxzVYR2A",
  "key48": "3sWZR5eNcNLnaX66Xq1J6DvqpzEevdCs8g3txLdCKksoMQeRY4TutntuJXWnFPQoR3P7a9aNBaeGmGhewHPSwLyH",
  "key49": "4WAzBRow4KRMAAcqvXi3Pq1yDtrkYxTr12SBu2DhXX4Jfund1TP9dKGJsxWj73pSKWEfDXQxa1eETXbTRcZfaaBS"
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
