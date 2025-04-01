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
    "4JeXHLHexN2qNYrS8rk1jjcDYTqhKiKf6P8XsH7R4aTanthCH68ns5rxL8gZMEoaEchD24BkjZxaap7wNADqs4Mc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m1i6tyD744qD99Lwzc1ACU3y4u41s17b2F82UeEbbpohZVaF4fMGKubTT9SsbxpAjjty5nhCzkr7atxBoDQ23gu",
  "key1": "58zNXTwgn6c4WU8g9c1b2gtJckMT8HyrKwhdvNFygeuwKPBiawYUVZPg2Dr8dgsYiJG7WMZcm5H2347doAnEDHdd",
  "key2": "2hj2bheL4xr7NmYae7zQWdkXWMZtVngd7KYmsCq8Je9nVca5rAKTUvizyE16fkAbUcfQn7GordhqVJ69BFEzPz3c",
  "key3": "2AifAwj6uDS2NRVaZeSux3vZm6Yfg5eaHWn6pqC1ysj4PpU3nFVPPoEo2NVeWUp4poXmtWHzEQH5zzC5arGMocMB",
  "key4": "qpchE6kGQwBEji8XmssCTYQZHzS5Z4FwT2LJNLnkAQxSbtyaTNgz53rbb4GNMYyku1QvmSypKTZP1m72162jU7b",
  "key5": "3aNKRYoootWWQWSuZKt794DyKqym9CP6G7VMkXobLzU6aBu8irdMZoNZmzL4DnW8AZ1CzAsNk4bMsNcBFmHHGMNk",
  "key6": "3M2maEgVawRa5kp4usPu2X9jYXShKeKPJ4pFsWAsP2MxHqpdAbsd4jAfCVUDCZKkBM3oKWRYQyXrFWrvjpWEWZQv",
  "key7": "4fsyU5nwQ5rX8fKKcmmzP84gJRyGTwrRBtSWHgkyRhHfVVE5m6aA9VFWkrTcVnYQw7BqKr5Po2MursNoNrCjNvEu",
  "key8": "2kxM4EEEs6CTaiNLd8DgX9Kd8aEAStj7j4RJBj9QjjkTQBPjr3RmcS9Gr6HX9zH9THSwm5iDpFzapPvJdThrX2cK",
  "key9": "5FNyq1X57mYM3ffQcmEGHkQfLpRThq3evxGdjKK2YQKBNaFKbewJDXc9LGEUhmPeyg9fdFsJPEDtVwAp7JNDFXsn",
  "key10": "4Q46urWaVo9Qf5ebQrgxyY2ns1xJfF5WZrshSzbdbkhib1pYTE7VKGhMjy8C1Wq3NBzJbg1hVxfPF5oj8TGww3JM",
  "key11": "2CkiLjgidA1vBFD6WGyZkvmE9NnEqfWDB55Tk7uFfsMdWAgUPGbkZrq7nRAXtohUod8oMtvwP5ghRyQYE8moSYV7",
  "key12": "42oHN6nc6p8g6S9D8stpwbuCacv93d25cTfnoPxSyNNUJJFBXY3CvERiodJADnFzsKLQx4fmMCDHut6GyxuNFv1E",
  "key13": "Fj2xUQuM6RB2nSYy3zo9vkBvoCyAB4sZMSRRtsnRTSfkK3Y7xdadc5vJjukr3fU44QmUG9MRrPKAXHDz1w1C6E5",
  "key14": "x3BJR3379mx2tq4rs69SamaeFTmSceRmUSM59hnSpcJa2FRcHjeG9YuMftbkrUC3CpDrcpdG8B67tw2GpDTdrh3",
  "key15": "2RKNLBojMHni7jwV6WKQAnYXxs8QsZhfPtKiJ8PdyMYkgPDxk8UFoixBFUYxpA8NMEa4Rrs2gGRzX874Dg5rKh8C",
  "key16": "2Y1W1uJzahge88CgLBHMuc5Yv4A2TowAhF1yQ3fqpYtasy2a83g6Fv9zzekiW5r5D7krc1hKzvCzHzebpzeViBrp",
  "key17": "3TcChvUMzguehDX8YJKqGBnojBwcWWVrFYmkDYDYrTmMADvxm5fh62Vb6EvUa8v59dVq8k59HFy2FGC4BMXbBELL",
  "key18": "KXdBpJv6Bipxwn1hvWz9ZEV1idwZv5aqEC8jSZvL6mfYVv5DXr1f5ZGaxcoVPgE9jUeC2Qj6mG5Yom1xqh1Ykxk",
  "key19": "33q8GK1HwDw4NesUJ8iGdYN51wn1YcjH7Lu3FjoXdxy6px8DJqrsmDyjdZ7Wvgq28hcrdg3tKRnVbV8UtCD3AFxJ",
  "key20": "3yBRdDJpZpwtzegEGtDnLB3GQ2PPWriLbfAwbQt12Ne8rCdeoqVZ1PJyfoM1Ho9MQsq9A3aqWJmwX2PdyeKe5Q59",
  "key21": "34uKqtEB1m2UGcWtpKm8CPBgvE4FvjyW9xWwreJBvmpvozHYbe28Hncf18keARLzaDCNGCUQWxYrrcZJcabweAzu",
  "key22": "4NhiS5gSyGdjrHngmYyLdWdEZwQgDBZ3S3Yxv78HN82CtR2nPPU6XXLCHVkKNDcY5PiwTaRT6qq5NaRhrKpUWvB7",
  "key23": "5pPAfBmp6NPHSvPZV6GzqLKtpxNpmW7vMegmcyYvU4QuPdi9FN9hSE2AhMp3gNRg8z8nSnt3HR7uL6R2qjqrrrT3",
  "key24": "3W9BfZAtFqypSyubhfTxgE8P3BF3sdH4nWe1hct9Za8ExdTguVjcaY2q3RVdw5YBLwbvQSKPrkGWXfRnDu9Vtbwb",
  "key25": "4ksfQMqNk3QDpjMKjn1sLCeRBEAbGJFrZykcV9279h7ZKM7wnB9TfLnWPDHYpDj9F3D1MyG5fb6wW4SdziH4jz6h",
  "key26": "3ot6VXhDvCa6oauB5C2pd8LvhEy1XVGuD9s4UpFgdmiixzcScvAu6HqVZhVZcJ7xtiYCCeMYU41j4DL62TyvymF5",
  "key27": "4H5RVZWL96eJgirT43TrEqMv3aR19QegDuBdKbosaygAfHpmn2hVL1Ar9ctecaLP7kpxsR5M714dMBQyzTaa9Tka",
  "key28": "v1HjKHKudiZ6JFXUUWjXcduDYxf78dh1oaqiXjEC5EbBCsmwH1MQsLj6qu5Jq8YK5nRDQb9sudzfxvxcX8fzNBE",
  "key29": "2Roa3Jcbr8aL8RLXAvtseFg1EZstWbbS45U64jDt6MkiY9cAt6hMRVnpVF2gEYMtR5dvnuTQpU6ddpA2Y1LawHxp",
  "key30": "5yZ1UhBHHzRtdnHbsK4Sdnzgs6hjb1bB3t9H4231c4wRQcpRS9LwHSjeJ9cPzLSmAQYC4hxbzvc6PFsVqh5tWPGU",
  "key31": "2URw6vtq3tgZBTsSeYVXmKbWMguhGZXnMpjyCbCBz3H7egsw2So8MZyUCsTbF312Qpu3afrHnLmUA1zKnLbgfUXj",
  "key32": "3SFyrqV7uq4xcaZkJ9y9PziBrhcnFgTvEVyoiA4p92WmugDqFKafyASE2U9J3QneTYGaQQwmHZ7tgT8p5HfiNBat",
  "key33": "5DjiANA6sjkBPfZ1uu2YNsULkrqvNE9mBbJBEhNdSFC8StRuyBwGH8mC76FFvSs3rbDuAAQt26ENDvHuGBmjhwUx",
  "key34": "2nENVG5Uw3JVZGTWk6st7oZzs6gkzVMte8qiTWkZXR7poMEH6F5EPeU2RuT3LwhqdsaEd7ThraGPzYmjncSUpMQ5",
  "key35": "65SsF6HSctcQfj1mqNkxJEJ6RHfaKtPoKuX5cBaXrNYMkC7JGCh1V9VS6bsXBuAfgQobQjGaRuCmhwBPRuhGR6po",
  "key36": "3tZoe94HdAwLwv6mQripLsgjVgxzfJLjc9pUQee8UBSy5bijY6w7vdp6ibPJhuQAPBKLgrwE9bg8h4AvrUjBY6Zr",
  "key37": "2iWgdc86sAC2rRCZrdj5U15C6GmH8SP6iUZecwMPJsEGStn27FQj8niKHBgc3QVeydXA1t5fQ3e3Xi1hkc1rRYe1",
  "key38": "58Nuap9SspYFXTMwPtmsLg2QSmewTcjwx4cfdP5o61tvVPXYNky5qbydBif91JkrxSwR332zJWKgxGeTVKWMPHQ4",
  "key39": "mvU1u8dSac5Ztiyo7ssu1Bwy3fiZVsKTGcb4TGcHtwyexmXWzYQGo1Z9T5VoYy2eysj23kuTFG9MDmTyYfLBuNP",
  "key40": "rU3op3c4EqXRD6inZrBSSzFTbFK39ytBMZBY9EAFw4pn1js9R72424TPdpg4MZLYHQmHtiR837v8aogGpnYsf9R",
  "key41": "3yHotKnYCzn5aXteLLXfV5ghXrZZzPjL9jenm6QMxnwszLmWXhYj3g9gMjmJuarZA1Qmi33Ln9sd12pwJLukNe4n",
  "key42": "4uNyUJPUmAQ5dbkY2H2ZEGypVxdid2yDaDnmJUu6YaBsPABXiwHLeghf2V1LVu95dyhNnWxTVweu5ssm3DMyquZM",
  "key43": "K92mErr1whMpZ9t1dT2evVnvv96NWBNKuv4K48xJhVF4frm5vxVurNophf7SSpJ47hz76hFLZ3cXoWA2ZvZgZQd",
  "key44": "5NVKfUemhU5DKpLTqWVqfp9RmWXSp7yYAE9io8k4v2fxiMshUqqKM3J81FeTLmft2nLJcNS1Uk9pYcmAid1H9v6d"
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
