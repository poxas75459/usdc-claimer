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
    "8RADWLu2k7KMB7YeBJmrJ7U7nHn9z8ThtodjTJJG8shxaUK8MEjWzEoscxBmQGP3eHfo1fhdoAVbTp5HdGstzbA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ycQy6Y99CtjJoN9pNRrZrw89oyAA51AQ9udULd7yhr3tqULZeyx7Y8Zwae3cxvTQKkEU3L22ux1o8Jq3Zm4FtEu",
  "key1": "2tt9DtNS5G8B4jTw2h53kVLSTUUwnh5mZ7f3P818k6QeeEJmBLr99J1fNp5PXQ84bSvN5jxe4bUfsEQKoRsBXkn7",
  "key2": "3dTXzB7NBJRdHze4RTJEzzdamKK5kfiLxedKPMSrzC7fKrjzqfH5GRezEGc76WAKprPuM2GjJ4aTx2NgvBc7P83y",
  "key3": "5n9FxmUz2TA5ns7KKUYswgr9Gecj4Tn4wnEcv7rVX6Nn6JkqkTResgEAPTQAvGwejASRAYnoGL1MLogvG2ysVZQX",
  "key4": "2cLDeP543JK2fHTWAjX9V2DRKN9WF7RKsr8AsqDdWHGaxz27hop6ZEauszmddeAbXdMrez5k7UoirZsecfccDkvH",
  "key5": "5WBaEu2xe2ovQkq3euZe78nF2vww5sUFEPYTt15Bv2Ri8gxvd69GvJjyELbasDYQc1cRNdUrVagzaRWLdGM7qkuc",
  "key6": "4zXBCZHXfEpVo2eE8JJysQCFpQyAVEhdiQaNdQVqyDXZGroq6y45c7g6RDEwtcLHFXv9efc9RTTaPNqCS4AsUhV2",
  "key7": "2Uu5fc85tneSVruMbHMq5CGFyjeM6mZutBrHiMvbtnqXNj6NGXkxgtHtzTMFRWLDZAKgfyGXdCAScrQHULnRac5g",
  "key8": "3UiZGso8KueSMnhB3Pu5nDTqRZjSicpBXntbA1YQVjWJKcTJ1sua8ZstKFKoG3wJQzLn4RJeA7hhphr273j6zA9w",
  "key9": "45kHDoefz8YGhPm6t6yUE77Puk9VXAGoCmdUPaNEjgHPrsYWTQVTr8PQEiP2725hKzKLxmPX6Po2kJneD7Mwsi72",
  "key10": "51ymvhSU1o3hnAu4qKV3pKNANnPp6VuWpQ7xb7NnJhtAeR268bDBoNDUURbTzPrmKfkYgJ4oeyHvAU9qSBtKTXXZ",
  "key11": "2gmsAsEVGVTaqAnm4AnvUoKihC88mXdTgjd8cx8vToRoJAgBCULnPWSH9SrjC5gcdfPnBY42qGANS466b3Tu2QAP",
  "key12": "4mCz6XqsmsajsJ11PV2tF8WcQoggXXq1AsFeFmp2JnvGHJKSj8XrLZ4qNc4TVopi2uBQWdDqWt7Zbv5CSVXk6rKD",
  "key13": "3vCdLvZA2UMYApRF3mmGUZEd1TfB3utEyiGCrWhXcnQukaCVLCibJkdfGEcASu5UNSBbhYwMSAVpb4gg78Ws5NAh",
  "key14": "3ACYvvHxoj6jdPK2EE1wvFDAv7y2TTzuEeQyVK8564JvFc5cn5RjzREJvfxNDfHA6drnrUctRqKD6LmWE7kpyVp1",
  "key15": "57G4iGZmDd9sPyPbjPLaQ2qc2En5iKgo2ZB53HCe3p8WakkNDiHjYSc1iSfzZb3VXKuukacsXWQaZndBruY5fJcb",
  "key16": "2pD5TwU4tyoHs93m3Vy189BzD1Nn1fYniuxC51b1JhhFQAdpATJPQDVH5HCXXt3Cs54R4PYUfoZQ4BHYL9FRjcHR",
  "key17": "JVMsGzMBZpBCnPHGyChNdr2Fqd16mUc3894MkNQvr8XexqrnWSBaCHKFPQ9pSyEwR22pq7PjtUfLaqwyytkaNHW",
  "key18": "4egNnPgpCRptZS9SYtdj1RMmaJzixfyZbAxbGXbUR5TiVFuBirwUvgU7vFiBe8zNF3PnK3adL8Dz21aCmzLgf1Co",
  "key19": "2MsPkxQkfqw8CbrMcG5DQHqTu81Rwhjt7NrToBx4PfbThKVv836hZEUWPDGjWFgNj6cLZpYyJdSvZErMpWbtWypn",
  "key20": "3YYJ4osVTz55cgMDKiWDZFrxxtvgF8Fkk2EdMWYv6rC3VEvKk857jED7xXyepbNbKVKPYVnnp7fBUFJLhEkyLGtQ",
  "key21": "5gjiMPM8z5UQMPYcRBgtKmoxiXEaHETgweNmbckbSTRcWBoMwMENMGUvw9P7wbWbwjacejYMpnmU9QQMBjionu8D",
  "key22": "45GXLTczsJLyBoXGtVAFTKjfLtnBbwFPWenNfRkaeyULAVbXxWehTVcaAnMEtrPmoss7U1pqghPiRkZLxjeC5sYs",
  "key23": "22ZHBnSMMP5VbuesiEp5b2PZ77jPGTmCvZF2NmkBUhMHREMF4HV8sk8rLZnbEDRouVw4c7CC87bsgHbabaBByqis",
  "key24": "58Vo1qu9HoZJf9Lgo9YTTnmaJvYggZ5KtF38zLwBk9vaU1PnYnZGexCMdBuVRpwZjXYTkDcyhJZBZvbwtFA3YKAG",
  "key25": "3ACNQumyqCEQ7xnbxxZniShiKyCByRBR2uguaGZHnsazkVUMeBqomuvatjYFMWX42VX3iKvXXbV8piL6rYViyXEp",
  "key26": "PFCSEs9UDs1dkWntLScAfmSTjMTLtQjJDoGwaiFVqWK4TDyUe4EYWrVM7sXtDKyUUaCAszbjJ52PYiyhwd2yzXw",
  "key27": "2338w4K6SXQqoqK5qENwTr2porM6Z7UMNgsZ12N9iYYxiRiCsjJUyTm6wpRW8PpYftZoKZUXQzYLRVJqw88gnSmv",
  "key28": "3sUZvVaN5sG8PJNhx1T1DWDuKDxD9zSmB6NExjFbkGC5MTW1Y7PntmTbTpLbCBiZmMUCJtg3kaMLyrsGEwRe5BQq",
  "key29": "2bpSinF7JvxVuZE8iXT8qyNphnCPCkXAHZ8PSJkRM9r5XxyTwuYSeZ34V8A8T2fYQAcJgXJ6tQwyJa7JwkCzKX5K",
  "key30": "5CC6VhijDXDabC2sW1YZSp2jmk37YkXXYTSNxDnpZpe4ea7ogREKpPYfVWY6druFxpTcp8mAHG6hBpSk9wkB6ryE",
  "key31": "3fRftm3fhmBfWqdKTv3Rq8LkH24sz3i38GzRyYZpPhEC9GYDZNWVXQEyyATHR2KpS596Zne4STZGQ43L3i4w6Ni6",
  "key32": "664ZSqsmnjrNYpRaZ4tcqFMoa5LLyYMgkEDpaz8D8dovVwigrWUvutYajS4UB4LKgC6H9ZA6KXMLYnDWNtVfhtRR",
  "key33": "2eByWgYu8Mi1EffUZkvFsQDtGwrHW6B41rXZB97b257UcUKkR3ugNbZGTz6rcc2QgB3oM42Dr77zjBUwGciufiDa",
  "key34": "5d7NZbjmBUwhSAC8SErwui1TGD8K2T4fqRtLrLu8888v4hcwEW15xwXRcggTwdTZvk1GcUCMoxn1up97UEAioATR",
  "key35": "DQan1yxvVYwVKUXCTgJJe4ZEugCbdPm32nnCgo1hcKRQabJuTrdQKK9BnJBBqR6WizZ6b1BNf3Ho6Xu3Ye1QE6F",
  "key36": "41BvhJQ96FykLhGZhuRagTakZrFkBkFQCaAmiCJhKZ5D2pgXGrwSC5sD84h5kXd6DmWe61jk73S9UmCTjRTwWSte",
  "key37": "2KrhA82uHa5g7BBYEQW88gwQmH2Go8Vhwpqih7XTxeaqApj1Cv3zBtzSq7YKri9Qyk9GVPotXag7TBaXornkgnwu",
  "key38": "23GSFKcUN4vySmnR2TQo8GZJ926iAvSFSt2PHHjaYgpeqNW1kUgGDUHPd299fqFrP7zLxj7Jsa8ErNugkVadvQbx",
  "key39": "YHKwGzDJC1kAZQTpncNDAYZmdNweoze3epsMzPiM5HoH9oNrzaF1crFKZQvTk3abxaMu7LkjW1pwwRos7Jvj2yo",
  "key40": "5oUrtZAdVf9N4SmeLvw8w8ywJW7kgjnaknbZdSmufYWuMsGRJpZVDUVYe53VHTiLg8eMTgd2MsFx45EnGBLCwgPY",
  "key41": "5YqbMdmHiB1CcRbXqoywVjJD9EXCCKZaKNhNubpTHrRERDUb128AbLak2wtQ8pTsdFrssj4HNFiYiPLwdLoQfcEo",
  "key42": "268v8m5j9f1BobDqkc9QjtrNx1JMatiiDYGtCQSkUBpKAdW8LArnELZr15zU7tddCo4LitWoHgdqqZxSYffUDpPV",
  "key43": "457iWsomfy22s6eAgG3EFqEqrX8H8vL5sc8ztmqT37dRu8JWkgBbE1m1gF3Kekpi7TaFWtto68WBX1Zj276gMcfk",
  "key44": "2Ndn6WScAApxgG4DcVehwcJC3R9NoSgg47bpf8Ap25x21nyCAa6zcoxhdG954HP17P348EPhiGwcMNZXEWsTzcYx",
  "key45": "3nyFfVdMzrjci9qKvg3CwJSv7hN2Vrvg8wQp3FTXVBzLact4FoMQsd1JjPLTf3ye55cP7HUDvC1zfYdHpo9SAoaq",
  "key46": "3LazY8D3kZJMetphCRuVxXphcPWxKUf613JYcgEhhVjwN6eP3zPDbvWMuwuF51aBJb2n4quJYA4GGnhDm3quGmW8"
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
