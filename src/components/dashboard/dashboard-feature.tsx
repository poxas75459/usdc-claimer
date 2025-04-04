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
    "59XDLuSTo1jt3EofHqVfFpVYqyKJFhXSJAV8ognzNqc1CXjLWWjKigZwtkKfWsfBp12SerDhSJ8M2hyYeb61PZDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KxxJvcz5Dm36mxefoM22VpEqY59E4ZV7oksbscdXNtLzXpesojqvPzezeZQVFAon97LYn3QepxH4QANEhAvRmd1",
  "key1": "5kjxTQi4bLaK7dDJCE2EZTrhjbdJf7A73JRFstbBkxyS3Ygb7yZ2f16f1if8CP3TD3Y4mt8e3vhKACxSoeeRSGM3",
  "key2": "3CcXmyeQNSp1BxXbpkXVTcHyGi5UbgW6yNUcz4TgxBCkMTZCSm6iAG8vgLJQKDz61VU9UwFahkAe4KH5kGqJ6nUS",
  "key3": "4DWo3UMTsxMtyohWTBi2jFXj9g2ENRXEs6dfv5FmHoP585NZvwHZZ65s39C2eBe7JiAqCmSniGMCqLwgsLMt4f4k",
  "key4": "4zaC1KkaRv8rnfL2tFPe56oKwaGH7hPSaC5ekHZJY2YXwTazy4wAa5NvbHLD78DLqZnRBYw7EtQw6byCoqQjxC4u",
  "key5": "3aBGgynBK8Na4cXNJ8XZtBsfnv6y9Ux6t4Lcc7FwXjS9azYqocxbQtekfHrqs77FUju3ZpjbjwwJuqV9Xn5s4ds9",
  "key6": "2q7s5FRdtAfX5GXkFTBxv1RQSmX1mhwuS8tVUAsxAGzHwHB6vviWfqE9UvANmcDCZoebmhTjnWXGQATmbrCxbG7C",
  "key7": "4dshY1ctCH5UVoFP5BdNtUBQYhfqEPAeGTPd8Lpw3mAK2Vzy7DKNw1SGhpN81hjAzcby5osfpbAGNx7TeU7fGEMX",
  "key8": "2Tp34TLtHxapztpXp4MyQBVmKnj33NKRh3Lb5KjcNwTnj5LuwHa6z62oVAAcYsTcENABV86hPvLPV6rDQBNXkGm7",
  "key9": "Cw6feqij35YbqFMGpmNyGVWmi1XzesTF3Zv1ETGvtpLXvT6n4DgDRSiunQgHQL6wgstBt1zQp6ARLjcwuBBwJjr",
  "key10": "4w2EXT7hCSUqptEMWJAX7mqoC7h2b9uHhwyRJS2sp8zwy51Gpr8WZmbMTBczm1EEa95WsDzGKidrin8a7nnJJuAW",
  "key11": "pVL7ME2pEBqDig6fydUgv24P3BiyRKMqqsV98zurYgfo21TBCGZWQ77SZ2MPJb65s7Kd5PRKp5den8tBSoHDxsT",
  "key12": "2kmxpQEaFopiTLK98iDanp61Pz8MqfrB5B3dnMnvJFLTTaYVFAhk6X82WzGZ1Xmbm6jzds2LeQMRNZPPmKvBK1xE",
  "key13": "4uzBfYvAHiH4rbAubbDbJJuyNjsurqCQES5NbJA7yGS8H1ECpHmACpzUBvTUAAZKawEmvZQZEFEDYc88tbyKHpMM",
  "key14": "2LswuFgjHA7f3ZfJXgKvSZKvakv8t2vguTEU1HhHXYot4StCmGeZPgHVF9oksJoUdnrszSWa6QCURtxMbKGuyzBx",
  "key15": "73h5LBY9btg2vG4dR4xRn2rtc8VkqSWPEsgk4cXgMQcApEGmdYhFQ9gpMBG7sPAjBGWirN3DKNS3NkhQsruN62r",
  "key16": "QJXttQkRduVWCG4xyic6UpJ5L3r2nK47GTmYmDNfR75mPXAwjZ9vQDRNbtmrFhqYUU3VkAt3C7HVrYhrYqqCiun",
  "key17": "3CzweHcQYpsTqGMuPw6wGuWVsgnvAhyfAeFbmGcJYmL64N3t4R7XVcRKdqavG33ohChNrbT6ANMz68vicMvSDno5",
  "key18": "5RtSRn8vksTKyCknB4eXLQvaXwWNqMqMb1cEZaKDu62CbYCb7tHXWjSiAVyKrN4C528ZDu5AWBHKBrwBfbL7jodF",
  "key19": "2pdamjYytRiBi5mLaWRH3AdMXE5ocaVgXYQmeduswuGxCHnuQWrqifyRUk7uxjHvp1bxJkFg5erKr5aHfVAiy7ub",
  "key20": "iE4UFRRybTrx99pjm9wqJpo4modibpAniYaJHmUZBrzjdBu9BgxQoyAAyGW6pKpm1rTgSfvuwQhf5bbaBKSC7bZ",
  "key21": "22WEK4EZFkAmZqJPe1xe3f8qCDNBbVyRD16GvFoNCxPAGMpopZjL5QcbY7CdPS6RYynuVs2iDcvimRr1WcfQqTP3",
  "key22": "39XVuasVnNq6KKxEeNHMLYqXjbZQft2UeBFFxBHMhLugLsv9fWnfrJeX25F8oHbBih8S1w6QgLWHLk7JedUN3pQS",
  "key23": "5DF1ABFpTGbquXFqdA1EwpPbVJmPA6abXcUwbWTXqmzjB8v8r5Ea4HBCjeinNmAsHsMwk4ixGuX9fQRJAW4QvoR",
  "key24": "4coytrYEvnHDnqimWFBFrh5QhLBVbn4Tsmo5agwLjBGka2vkUprmQsrRfRGJZ6rHBHRqNYM3223sVUuhtz3UrELt",
  "key25": "kAwxpMjTdecp65dUtSrTJdVSrYWvb7LjvEkeXcMVjp2UVXDb3Jw43PqSRyzpSSRjo73ppt5NLc24LBwdrMBebid",
  "key26": "4HQKtsTjb4AQqwPv6m1kdqgsTHe9VxXnPBAcyXd2UoErmm6X8YqCdbkPuxgwvfYXBR66AW4ZvfxkPnFx4gWJRFu6",
  "key27": "o2euhw3UxXnPuuB6iHcFAbALRsa5mMNSaYdP7TCNcFtvBdctQ7n2UujndfnPvc5izTJyWWegGxPLDSScJbNhSfD",
  "key28": "2UE1M35ayGcaa5VztQQSvzvLThwoemdCtFi3aXuZHLSnK1J8jgDrd4QTdgqctn9W7r51LBmV11MJUQ9mV8vGQjQM",
  "key29": "5cNYnKTp2ZatcnFAyMC7qcqvPgqgq4zsECwkqhuwiyUtoDGwb2V41BCE1nDYT69ca2noSG5kKJUq7uArRpsTsPEh",
  "key30": "51FgoJTEiC6H1gbAmkikpWFrRoSaihuAtYoCj9LgB1xsBYBN1CgZPxhF1edRhKrbCCG8DR77v5Bm6CWXViicmzfu",
  "key31": "512sFWQY2sD221SKcUCHNANteqq8a68rSr8r1L4CdcnEU2AupG6CTXi5dKv2HV493QZXtExLpA3iJCb4K4ZjA9mQ",
  "key32": "3JGunUAisVx7XXN4Xfc8Zwk8GLMsYhKbqwwe1HufmPKvk9iy552GYKPz46SHh79J5UA5HcNoCdbFfhWtbJw5vxvh",
  "key33": "4w4TcXp1tcChBaZtxbTtq6BCg1mESTa5N2mqe7pVdiU5LFyngNjxzpAw76DyQSVzNtrrLBLG8NPaxHnSaAVV3Ga",
  "key34": "2MhxqTGtVNBWKvAfe36o5rbWLu57AVmXcD9YgptPnLXqB7AAj88VkPyoBAuoj1vCoLenhwvhwCipxscGU1J8xgSD",
  "key35": "483URMjAj3xMgYz7XizbXfBpiY3JjByx9JNoeBMqtwCw3T6ZgZnTSKzS2k6eu285JByek8CT76xmG8pQ7nXQ8hcS",
  "key36": "32BFChFcF9jLgWKtcFAC6fpzbnCFUrnzAXTLkGFSPGMeweTZSXZEiN1vtiFHTAcRpvNoedr2A2SFZLbDtMaunjNx",
  "key37": "3KBWy5EhBezK5LY2etW5bdndk7gLsePpYBWgSYGAZ61xsTZoMz9Lx2o8XjMtFRRJ2qGTAoDjib5wKt1EFZuPMwar",
  "key38": "RYBopaVfDCGXnNoZUyV5Abw1d8MwSAQP6g2e9ncP4cZS59RdZcD3pmc3Tgr759etmUr4aPbGK8Tj5myCbjsoU6o",
  "key39": "4UQ25nYGMM1zi3bz7L5iHMfF7kiafL7e57kiEDpdp5p79LyvS8mu4RewLRtpF7sPghuXm2EZs72rEdXq1TpJqTus",
  "key40": "63rFVE4m2hsZFWvCXneJ6HpkpS1VNXyca7XhLpr5ik3bUzA8roHSFPTTuxYvdaHUgohRBUh8kuMxA8WCmvbTgGu1",
  "key41": "5rJ1HrkwXuE73n4vds4YNSEC36FABzAua9gEhBoVsZJASBAefxiq8yLzbbecH5ko7YrrnSdikmHXeGjBK1wY3sgt",
  "key42": "5kVtiCboCXyPJ1ngEAoFrPcqy3c6wZKtp9Hp5Q2p4dYKv6MPndDwquNgXfM2VTSAxDHEC7FK8sMWDbVSzhV33oJX",
  "key43": "2Et1VNvWuN3a68VXg5pZfnxFFEuPC1a4qC4ERxCZrZWt1bA1MmobNAnNZZB9P9jmSsXgZ6zuiTutD3AfMPPdsUVT",
  "key44": "5ebTGZHwPfWWQLd9Vv311tViSGgt2yNPBhZaBuhuujSdoLLtgvrrtBs1LZccV3QwDb9Sf11DLViVUSiYNbPaogd4",
  "key45": "3Z1WBzbBqm3cqyFZjMi9cGaKmZKEGC9GaEVL8ojQBACPPh98Kr23FTzEoLCkHH1gpnQv9nbKEYgwSHVwuAGeVHez",
  "key46": "4cBU1bHGtaXz8wqwdNbhCHXpFyVHse2AQ4mtm3TzuBC8VvTGvFHm5iCmo4E9BMQqnS472JfQVm9AqgYRu3Sjcc43",
  "key47": "5w6Q4UPFFmQk9K6rfWFsXG1XB26hC4vUgQQnhzeR5kVC5MrSr3grk7jUDDgYrGawWeYm9nsGfynGTnTt4G7ko7yj",
  "key48": "pcU97kqX3goRCs6p3kfU31ktuYsDpENcWoVsPvbwxacZkRTbisG1FL5CQe3S2gLy9gmx13z9J7gGCQV8QzHx91b",
  "key49": "4C4pQprDnh8dy1LUKjvUunDN89auxcCneSvG4Gd1BHV8W2paefyEpC3z5Gm8YK6JxdEfJyWh5fin5456KzqxnnGR"
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
