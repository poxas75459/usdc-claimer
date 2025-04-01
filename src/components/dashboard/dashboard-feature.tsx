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
    "53BYNayrF3Wpwjo5fDji7KpSrMjoLyrecmke8Swi78YrCKV5jR9ZTNjxjqii6kgqok7WxFnQdtbPf6QkTuRxnKD6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Djg6eZqBsLT7Evo24Fu8PobgNxGCKT7q3DDW2YmumdcTw2qZmJfs9TmbLrVxzNVob5BwojZS7zZgXo4FAFXHFo",
  "key1": "4RUW5ouseKzWVxeJaSWGvSruYhZVau1AqafRzFdMdyZrtDa5LY9WEzTuhoBR61kV2HFrVpPxLd3bqBWsSt2BMyNN",
  "key2": "41q1zJkgCbH6WbQfEsMRXJmNjhCR79SWyT5PhuLM8PJumzRL8et1qJ4Led2PhzmUENSwcm7BnJfSTFviBfPdeFwy",
  "key3": "4nTkZzpPWLVUEppiJFQmi6Vby5xBozW8y8KTFAZWNUQbUMa1pif87MSSqGKhzt7F8oURkwvxJTWEhSPDrt7xaCRe",
  "key4": "8Qqc259wZZGYwTRLmsFtBDaHimiwVWRR7zk9MQHC5GWbM9kKkmY9pEeGgHwHUo6xvGNNAmuoR2XwuyWanUB2xjv",
  "key5": "33QbG7MciAax8iFPLAkfmpYMZi7hyXpTaJqNLg8jjXpEBwFd3X7DXBoQhG374cSTzLpbwhd2mSzr7ce1KN1ByZ44",
  "key6": "2DPBgKuDBbnhdJqtLJ5vKr2HvxffxCoP6HZ8BuDokNbNy6NzQHPQBwmD9xhg55mJvDyDJ4Ss3sAUG7yRyFJukDx2",
  "key7": "2LQuFLqhCpBaPRzAAJ523Wu28ZM38oKx4ezerHMoq7ther1LPBEzjPidjq6ENXKf4gRJopqsQspD69wcEnvY9QJ5",
  "key8": "zrDPPnpnyuzpeJqF7jjWzyXb4xx2YLhkrDJP7rH8wKi3fnM3y5bGsGtYimoEanpCuKKoKVDsKTm8EZ8cjtEeXkJ",
  "key9": "2aA3oCaHhSDCDntX3dqvSnWVRof36RBKJGaDPTjQ5n47Sfijne77ZqcRN73SswB3hRzWyUirDs8j6dYdkfuUdxCw",
  "key10": "oj43kGK9BWTfBPcWRpNJEAZ5P1yRtkR6fDZ2DMVDqMMPgjVS8SJhUFyAet1Ns8Apw8BJzyq8CK6LXPmxdsQiCAG",
  "key11": "39wKpSc2P4DeoaSVqys8nJVuCb3t7CiwThz9Rwp9Et6Zr7MLGyijiuBQZry9njXrPfW5zf5B7ysxLd1wDDBVzEZM",
  "key12": "2pdMnPUFyS4k1g3nueN7NmjpKbxCiVTmMMoXceyip9D9S4gDrkgvdpmYJdRzhdQDNtyx4vkHQ54FKPoJAJ1QyHro",
  "key13": "5dEWCGKpxdVLXD4D1FHPLFBSGFmuQ8k1Ag2F66QHA9MHYGT1LduYzu2uavrg4Pv2FFA9C9C3rpBWyiiyMFHTZXxj",
  "key14": "4srdwnxQwPnh3uwTBMain1R69dKmyDgPvt6pLii9LwmQ6cJUQR8Yn4r8ZxBmkW5ta54z4eGg9kLyPuv85NPVAqUy",
  "key15": "5ytwk9Z6jhbaw53GpGfghtcdzyuZZSp1JJjbbdeeNBxKNTrb37mXab188z7CjHPY5mKQ6bQJiFsYRuc4zyqUCMyd",
  "key16": "3cwQrcnH98edo6zZNjWogRJd3XpAgkJVfDuSP4CFL5GJoTEExWdgw9bSL9nVKcCH4XscnaFW8brcoJrr9ugnhG4n",
  "key17": "joN6TjvKZ2qbhEzkZ9iFT3GrAKFv4T46oNAafJJ4EE3rbyEEChiUXjMbdHXCybAAnX2nVNtPYGX16U8kBTNBSu6",
  "key18": "ykpxt2P55NxvFR9ECb6uWyCLRHjoXhGNVZn6o1jgjXcbj83SRRNBgzeLYdMgujnxNCcfnKyzX1YLcc4UDPJKJQS",
  "key19": "2fwoMGwYhFGncQzCmBddBmyobU1FWwhfyumofXU5PpCXiTh11qEG9n8UPZYnxCjvTjie4gKnX9PSe4SWCBLfSeyV",
  "key20": "4skn99mjr6zW2ZTfe7RyCgBJdfypHGZchsfUDpWCvpw5kbowh1SvEB1YJ9N5Jn5tc6TzFJqC4qwbnUCNv4zWSEeW",
  "key21": "4ACxh4TPm9aPKCwByyxxfewFRQmBcKB9zHAtxv25w7KKd56MdsftWyRZFatyC8G8U4AXtEqGVJWQBRzskc1RTjAG",
  "key22": "2Mots7Vz9rjHrd3cG1bMHyFtPkvYXVjymvCgQFfTGuenpVZVEHd8xqm8uDdmS5vVwPo5cbMizzKRFH7DuzS8MyLq",
  "key23": "5zSCTzu2HkAbc8e3R3vgPW7UJu6XEDTXt1hkuAbWUuhUinp5Q1EhFzgYnYWZFkp1wXJ4HSq6mWKtdHqUjiNRpJiN",
  "key24": "4oSG2HJcs1fNfPaBoMivgpoxBtgYizpzdYCnuJ4Z52hjhsAbidFJaujkhndR5TteAxuEEu7wDfwadCbdmBqum6Nq",
  "key25": "4dbDKepLapjjb2bdhQB19Cc5DBWPUVackvbMvhac4DPSAEhZsVTyW2mDPEQvBQrj12GfQGWFmFkAsyyCiGVaQKRG",
  "key26": "2eh49U4bcENPhRq7T8BXAf5pnT8rQULD4p3hZLNrcQhtvh4tmSJJAF4VXR8bzeuH4kuruX59W9YK3zCgi61nJ8ts",
  "key27": "9PB1z8VBgnRJrGDjotyTWKmnLRGKDu7DqQrndjcEDAYi2mmFXHWUVta6DSeD9ybZh3ijzDj6xw9mYxX5j1x8Lzm",
  "key28": "2nFx3KBE4bckVw2QV2K9k4TbVeDBbp3Kc3xCmUxvWq7AqcfFWWVxMbZurUV9AtUv1aGz6AfaMtxrDGPT9vnp81vo",
  "key29": "5zkcwAd1qJ7NwXVo3sezGhnqrNCMbgN3M4Rp1pfERBYMGvmWGZVP1Mt5RugQAVhjexN9aqfpkimh2BckTJCWxYyY",
  "key30": "4PohMYzX759qUombghJn64s7gnd2fExDnTDyxVP8tNeaV5MYGMtfJYkgoNiRbEbSir6FvVKjNdy61XjRBZn3t2qo",
  "key31": "4uXxuGQqko46hTBnh9CCRCZZmQ8GDoAbKhDeMd3o5CqoqGVnDKEzPx31Pz9iwb8wYsRYLmdWGBceF18VUFebtaoK",
  "key32": "3V1DTDF3sieQhtcdk3HeqLddz8hwTvz4nVGuAPzskHMPnFuPcfP3xs99RVduH47djjxesxVBRbT2UwVaRvgjkCz4",
  "key33": "4h4jfneyCLTY7S6Y3wHK3D7Axyf3vPWdpfWqicUfZw6cU28tRhXtnk69VGJoxagXyJmYmezwjrHFP7ojhhG19Lbc",
  "key34": "5jrUgLVgXA6CZm8h84vUszEW9kVcgAqkjtK13iguhN9YtfSW7gQqfRBfGUwQmEUjmtDW9f1hF1f3YDe5pxn1eCx4",
  "key35": "YsNqu4KuRh7Jf7Aoo5diLq1N4qoj1nmTdzMkyjwEhWtsguRsDgbKJBC6DxHSJ8Z3wHAJPV5t1Sq76fVgUKA5Bay",
  "key36": "3f3w1S46yABf9Qzijv7FCcedQBF8E4mBRjijypnyhZbrn1usP6N4Ats9g6EWXAB8L4HC7yextTYPTytDQBP881jv",
  "key37": "55APfX8rnFGQtQ7BTwrqS3db7c9gZ6JzgxkQpWjrTwiwZwsQhdMQGoKZavMgnXvAjAicwvr5eChkT1SvQt1ZgkSF",
  "key38": "bhRYSWkfXPdxv2PdHUkmDqMA3nDfFcKzxb2utx41fyMFVsQiEckg3r3C1vmtCMtU87fcTnNKNqZC3q95RyEJuAh",
  "key39": "5CUL9RxYVA3g1UAiFJSzCwDSR5VMh7uKZ84N2Zb951snuj4jp5WrUNaShFenrwC7f372e7npQhW1Zrq5DhFxgc5r",
  "key40": "23aUHmNMTatSpeSg8dEq125RprCHeQYwQyPSdxh2kaSMXDTHj4De6tBQqE6SDkBMRVYtsFiJp91AoHHWp2iVhiA8",
  "key41": "mCchLyrAp8NxHSu4g3fuWmYgiXaTHWeaJDXmERKYmSEMAfMYMwkeeSqDALCdXJi6Qw8rEnyNBNzu59RoAdfy7Km",
  "key42": "23oeA3Fw7f8dpVPqqybf8i1LvpPZMHyrP32crvBCsZVMFe2QBoNC3fgTYsNF4aUFg67VvoLt18orCAdjXtxBspTY"
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
