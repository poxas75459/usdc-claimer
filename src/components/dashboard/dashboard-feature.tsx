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
    "61xrgeQ8GYiEMdZf13r1ZAPGLNM93Z1GGfUpJiVJadZSbujnMWYd4Wm7Dggfdfzv72ECDKDp6DN46JDgySmdR45u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fcya7retZFSG9954hQPKYNBKdgizadoSYrYMWUtZs9z4BmnDaotTLCZ9XpYPVBTpDaQxAYo52XtowuouGs6bzuE",
  "key1": "4eZKHvK6DrzmsnY4tmUT6sFiRtstmh6sAZ5wNcZGUtE8M1tRiiGKgzz2ENcf5PGKRTDYkHCsh8eumgPF86ZEtd9K",
  "key2": "5FpaPf5nqMX3rwhUdjnC1n4KW49tSVS1JHusoNBqrySdMh9cc1mBNdceM9nDu9MqeRzQT3TaVGZBdfEBQb4DBf8i",
  "key3": "3Q5FoharECTQwWPh2LGDmfqfPBXfZwmuPGgMDTTFRKDSvt1W6yiRYjQ3ot4aTt74MJatPduA3FWuq86c2htQUV4Y",
  "key4": "2PBYLrHS4veprp8Nh7jEWq55PnfHD78Tqu4bUZ2Q9VrTZJ1XxoaBDGG4BxBkrQeTJfkWpV1JbckGyNza9w9mCJkJ",
  "key5": "5KtyAJBTjXzxLs5SAmMDE9ZXmjCbtP1vovbA159jPNsKps4AxEsSVFwqTovDMQ16TU7CKSSvmgjFe48FnxPGApKq",
  "key6": "3HJDBemBDw5DP12SWbfvR7YEVpQy4Y6BQWqqpCAt1ybrYrjnce1tqobptJ6knKk2yrTXibvcfSsfPcQyUYQkBg86",
  "key7": "4WagMGvP7V5HbcgH4ZVo7AN3XbSfmrsgH9sfCpaTNfWNDK1FfvryKjt84qC7cnLuCWQNTAuCRzC1G9L4CqxQN13x",
  "key8": "r39N9CGszGpGi9WZcPrvavEGJ53L2BQKeaeYwXnKP92JJYQ499rwVrCPkvwVwJBkX5CbhW6JiHtKTpVciAGwLTs",
  "key9": "5aSzpYumGCrgsGiLNK9sxMmhycTrnwFWHoBQ6jmqDZeyenpLTKU3D9ZjCVkiQjJD9KTSC73dnT3WVMNXHkLeph1",
  "key10": "4VAanAbVDxqXCXycfq5rA2BLFrKWtFm4GFB6V6Vmr93tHYQ5mbjqMz7SCVUHwTByNEzXpMYHnCwxMAK83HJDDJ5A",
  "key11": "5jwH7btEJRufUvacB1kJ42TYdn1AgsrqSYAMw8PRqjESGQCbaEhUsBBjRMCiYmvNWNeCgdcqzt4VxyqgJmZxYhJN",
  "key12": "2YjcFsfBUrUm6ku9jHyax8WUoPCjSutN1rpZCbaWe84HsiYMyUD91KNPr37FjEqCVecMd8Zmm67TTpKg43fxSEK7",
  "key13": "3ckM6pcC27PufApvJ6KUPY1WGkBz9AV3zHrXZkR3Uo4f1Va8o6etkeitPJT8TirJ5Si8NHtvR4Vp3hfYAdKTDXsq",
  "key14": "4Je26ZPf3ReSyVyH5Gxx29X87XEV4Xfq6dsckkzWxykrSCqWTGpetjySPv5LjtBkqKU49JWMMRVNqxFVguwQDMh4",
  "key15": "48xn3UXDFderiMHRVTnsGqBPugwswn9Mr2kvu85HkfEJRbj2VZDfSzwvNrVeyK3sQWXkCQyHms16Hr5CG1RZYRUj",
  "key16": "3zas2FNM2tNFB3hmvcNca5wJ51kSNQV7BDBeq6WNnLvJdFRGr72eN3qSKrf56XMrBe4R21ci99aSeS1PtFo4aJAN",
  "key17": "64DyHg4yCYKEFjkB7KH7otZEa23q9rNTLZq5uvUn46RayqZopZnEYGAQFGpGDMxpNKvWTahu3xUGLu4cz1S33MQ5",
  "key18": "4qpETo2nEyYc9sqy7sE3beXc4db2b6VB2r39V6pWw7PSC7PvwHeMcu5GVSxQzeeFwLnvPoFzBMmMWf9MEhEtX9fo",
  "key19": "TSfbDnNau97o37CuxVic8r7tNq13Yt8udQvKVX7SRCscDVDdMh64EDchv5i7vwdCyj5wWqr8kZasgkpNGKRtFSJ",
  "key20": "3novFaTVxS4iSghuvAxxLsGYZvJshqKuBPL1TyP2rmGmY4obWAYsG6R7fT3wirGtw29Xk1xAM72iWVedk3TearQP",
  "key21": "3osSjVhM97vFtPf7J2nEvLsizaC7yMrZV8QponwzoVyLWoQkNbX4dBte53CVmQWrRfSwDfKWVrUsSSWztxKggfAX",
  "key22": "3mFnymvAi11H7a6zxoyPccUTsHUdtSWueA8jGffata6CYk5VLUCo1SYHwiaK5gAGPSaNQTuqvwiywo5Y9guBTzNo",
  "key23": "5r4ux87Wh8cj4XYNCJtP7S3rDdMGZmZEXV6Ed3yo2inEbyfsBxuRQPrnUipzyyKyDdmFw3dTDqYU9hQU7dzgz9pY",
  "key24": "5dxKNAfHvximkySEPDPp3WQAB8dQMGgMqywsTE7v6NnJfxKPEYw1fbfZg29MscMKEgTrkDBeVztuTJAK1rrZXcQ9",
  "key25": "345EKLuy6A64bEWtfAJapZSGiBjzHjPMMafvEMCj2YDAp7Zsgr3PWF4C9FhXRi7ynuxLtEDYatHmWRZaQdQ79joF",
  "key26": "5vx5uZ32wPWmrCraSR8sD3Xk3LNYoTUMP6NxAtgTuyQq2e9ef8cM4WnnyBggeZyFB5WBGuxxrtnAeLLCmvK9yBCs",
  "key27": "3Dzyr9AQ3NJ9gBgiWebgJzZy26ADbebYu8daeGAm5XcVoL57ESMqbGq3ufA4ZHY92QEqb3TjkstdpSf5PWVDcS9",
  "key28": "5nx6WAtfdujDGCfNkk4vp87sEMpbF4JvZJmgVnQuSe3b75KQLvfAV8qisUyQTpy8HaLDa3QaxKFXThpDVYyBV8Gt",
  "key29": "5vG7P1VBpnYUDTcVUKtei4WvNReZC8LjQhmt3rNcEN9uyMKBTcsWYf3FQaJRZba7FEjagEFVePvNt9AY5GECGCzd",
  "key30": "daehvyiw1uP19fe4rVNi1AM4XZbRTDPqpkhBSGtjhKHfP5GjMYLbgYaYWHRLbKGWLPPYvfnvhMY96MpXBspTVDm",
  "key31": "5z8v5jx7qKpuSLUR8zngg5p6u7nUmFCCjKxRtkY6kwpphsHT5fg35Z6Ci6adV8UYePgiR4Ge3barFYqkSAKGJCzJ",
  "key32": "4vetTnqJAFvkAt2mqTMGph4ffo5hz2KfJNGcakoGqAYNuuYhiR1G4d92xJPXwSNdWyLpMdtAnxQiNNMaGcwgyAyU",
  "key33": "5hypB9khDBpgR96v7XzCXHQahyknmHyNk1sbeoke3WrtJSpYhhUS2Xm8NU2atzdDsidA8BYjsVtwN3jcEPo7A5Fg",
  "key34": "3uDCgSbiidxaUqNLxPpmrLp4pbUUmsurUkmPahG6c6nuqT9zs6XL7YJFuVmNjiWCEnBKkCFWDfVPFGLcXBB6Zdm4",
  "key35": "28UYLoMBPZrksJpHMfRiv8proLMm7TwKWyUBE4THJN6u1LLYPoPZVroWURoLCQmZ9xhJuTazqf8si1QRaX6rYYjD",
  "key36": "5DMXp8SnTUgf9GFRh89hJvnKN1FJ9Z3E5HGN2t7H5s4uTdoe3ND1xBE9PqwtbQA9ZNovqkaosvD4jtKPP7Tg7TcA",
  "key37": "4ux6V1Eo6qgTGiLAYCaxKZ9eosEsGJoq25Eo5NCHEmhnaTvbFTq3K5WtxmBLjW1LNseFgnTTX26kDx93wFkbWWHd",
  "key38": "53zGWUeJXZQU4R6GeSFp8SeaKKEWctV2PXkfTX19o57roSb7vZiMb43kiBCPu7ZEQ1CJCrFCyPZCg5THMbHZWLJk",
  "key39": "2K9RqufjukeAgEa1pK7XgbzS6GJXnqTqcBYvyvhsQjQcGhGnuiNv6Jam5oTC2QVMawS9QCMWFkQnwoQiTVxVWVL6",
  "key40": "38K6HZozJnVJNEbGi4WjzqkavaQqZoPe4NyHtj5RpdiPgxbcMDf3W12R7Rszg1xCMqdS2sNj3vLh1WASM2jU2f1F",
  "key41": "5T4sqHxvTWTne4uX32V2eroBXFTRTXUVa7jMueynzyKnSJm9fdLKdeRXJ1VDZSow5Naz4m7YjmXZbPmfdfqZdJae",
  "key42": "EbKHa5TuY1VzDCuqHDYSYhHbvZyL79VMBDpaU7TYBAhktn3pJTGFB5wG3SESQbdEV4BPduvPWbwJ3J7xrygrQkj",
  "key43": "2y3xFo2PM6TMmbWrBQez25aDW4RXn2P76fWPERuozaexD5AEqBUqg7SWHs1Rhf5KzicJH2nKQNL5TzdqPvAFFoaU",
  "key44": "9aUCm2nHzkwq86QyiEFHB2NLQZKy7ThDtHRV5KNamzHvyjnHYLuTWcbZSs1wj5cFL5un9Q3tuc9c8h5pccLKXSH",
  "key45": "3HrKn2NFtB8zrDmMbzGTYNFWARnAMLYKPwnT9APsL1QU7YhLxRvrPN8whyaazs61Zb9RCCaDWQfqeLatjXxhSqr6",
  "key46": "2YRo4rEH2rpnWsJwhMXKXhxhSK1GngJ3mC7V7QEz79ZLeL4sSfYhXX1UdRdYZutZNudg2V3fSAusV8ux2NKyZUHm"
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
