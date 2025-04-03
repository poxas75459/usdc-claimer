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
    "2rnWaKmc4jNxD62b3koTVxUmxVt27Zsb5x5gNFy595qMZQcWBCnsUJongjLkS3KonvJTCWj48fFB6rxLFf7BSVDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "466xXXtApWr24Adfw9HBW3qsauLRdz7KGUhXMgUYXUu7qhymz1e5aaTqiH7xDiGTE2iMEYZeGoXaXFuNPFm1fhXB",
  "key1": "5STrgfHx9kcCbW1xSiXtsgZuBTVzoVnC2Ys633nCZSR1nxEY6yC3soT3YSUhWka3fb44WD2sKeK8VnPzNDE6Pt6S",
  "key2": "5kVoDY2KB683k14grsKm4kLqLXnPH4geb76zseErC48XjTA8ocR5ZES3ZzdstBtDk29bRppXsptD7kZ5WiWC9brW",
  "key3": "4XkxCqPYpVQnSHWnj6ZTR7s3oCFwzEkJHWpQugEzi57pueo8f88xsKVDPCNV2U3Vs2eToDQdQNDVNTbxhxD6ZJCR",
  "key4": "5jxGC3vYqXpmkvMn3fsNxmXTJP7mYJxUAce7h8xJTFDEqBvzbukgfyoPfFv9pPCjSWgHskv3FYe5qZ67RCU8vT6U",
  "key5": "jFJp17TbkD67FLeqMdY8Evj1oqiHGBVoUSYEoqbffs5tLdESy3uR4fCmkbwzvkq8qhuH9MxH96GPm9jQt4o9oWU",
  "key6": "5V8u84yLoicX39qPZD78L7EvaAHh8JnKFCP2a9yXtZiGyy2u6PFWN195dW2mptsVbkciR2LJxamudBowsw3ZPiqr",
  "key7": "Ueh7WNuWsxxQYhx9YbuuLnYfqV6EG7eZCZ47ya3f6ZfMEseiMPWR1DMZnWYbyasccW1yjVzHgoNdL9AYVPXZV23",
  "key8": "4erT6AZDfxzGnNXb818QmxZpiVgScivY4CffeMuLiFVe73xPXutbdwmKvYhEZt9JkWLRL4BwEoYddjwK68epvFgH",
  "key9": "2NxPt3vFaJjCQApPPx1tQEWVGCE7P7D6xLCJMakEnDDdwLVskhjvirZK15tKxkoizcVdsADD3DHSdFdBiaLTGT7p",
  "key10": "2iJKvsYRk7smBU7ucXnHbYYDwpjboQa9mtNMg71Uv1BABYqdgkEHEPS5gQTAEUPLmmMN6aPNaQVMX6hFUwZAgkCu",
  "key11": "4pRtRRcqgQ87jh5x6581fsxQm4oyECbVUmJi6AyB3WcJtksG6kV2cTkJsdc8QtDBsEs8oyzhoPAoLi4N9usqLqWq",
  "key12": "3gZYwU2ZuRApgEjdTtLCik49DbwRueuAZw24QXBWmYth5BiUU8paTPzNe5TupLtKCEVvv2zq7YivxVzZBKBdytzP",
  "key13": "AZqQxoyZ3LwtwAnAZk2byr7xhXChKP9FVjmyUy7ZHoKxowpX7jecrTSsq8u3SHPUhVyd6QHWxXBLX6FvW5pAWKL",
  "key14": "4N4v2R6xfGW2RJ5UyBprDrveB93FVHFms4y2mNEzwG179ZF8Q2PkHAh35BrGea4Ldk8SRTkswhXET4frJPxuJ9b7",
  "key15": "2QhVQVvt1NoUHG8E6qKU6s4efAjRnKE73YaoBGmBGTVfhewryAmmgWXdfgn9m4csHuoa86icHBu33rQiwJsXCAUu",
  "key16": "w2BjLNZwZBkWNEdaprKtAsR6W1ay2V36Br2aRNsEAatESSJwUcp7Rit3QBP5ctKXdLgjsZLaMhhD7VVMnQMDirk",
  "key17": "4yXsWY5TbWT7fragkZBGdrvFy34riqgNo1BGwmyLYBiyFGUdWTV1MX7uypKbQodcvPFiyfcXVaz9yeeMiHi3Tgip",
  "key18": "391niuPv2XVcG8zKJu7T31Lsjehh1eEeNyvpGHyJBGTsTCbz6JXiLehsRGPSVpDpaNDXxNipHd6hkxDz2DQnkDXD",
  "key19": "3DMdYBSDDHpe3L3d7cYKDHurSF29b5JhMKfSynkVrqMU9uLmL9PmAGwo8u1T5KiGyx8iwq5C5x7a5ZoE4iHXQ61M",
  "key20": "597SaaE8YavtXCXFsYTuX9EBuVrTM2mzSi1izKAyijjEB8embcyK9atRRaX2LosoZzyTFHNjq9ywFLq9QmYoUG1d",
  "key21": "5NJcoR1fY6NHk6e53HPh5ZgQePncGPfc5oarY6uX7ac9ajHhbaUPo2Dw2rZWUvRaSP3Vfuemjnof6pRGd3hRhfVc",
  "key22": "2AKT1YNSwTapPsAZkKeyg1fQKeUMTL2KnpZUxxJ957eErv5ZjiWH7wzch2AGgeyAaKhD1AWr92TPhXmu29p2d1Vj",
  "key23": "uQBE5wBvL3Uf4r6vshztnQ5qrpgD3kBTzNRq4r2Judd9F43576R9izXwNLZ6gkWHvgjn3Ms8DNv447wzmKHaVnF",
  "key24": "57snrN8AKx6RUSPiVvVEKaTC4Rqy9bAGypABRFTUNafVxYccEWEt6WYmSghdHHY6V4HzsnxGcBhewuLuX4sVsRwY",
  "key25": "4qmePGgTaAk9MBMb4pV6NLLnrfwYhUXtXYeNCxuGGr4GS3bTBbV6BNJ5rN1kkrxrozM56KfUZF4yDdTrmVQZkP7Y",
  "key26": "36va3pSvAj7DDkxCUteHRmciVPvvWG6zznuryu4B5a2X3jMJJrfxWzy6RrRhbnfxb3tAubiUVU55qxxfo61nEfG7",
  "key27": "2NCLGbNKdq41pdJq4khri6AZuPJC5aM1Rr8hV5e6FAQ3mEekXqEAJskeD2mzqheyTcZctcsNjPH1KzrRmUy3Empj",
  "key28": "2fipcu1npXxjGe3JcPitoNbCdXvmwZ1uTP22ji2xuKWwE4XKjTBTd7vyCn9TMwBAJ8NPFZMWtSyWC1Lw5gbWDLZE",
  "key29": "2dAyq1QMxG4xevxafHoCccp1P9vqFxzVTCAFiQdR6Q1wytYYinqZWdKuh4LueEZfespgsPSULSMWPhpLReEYN85J",
  "key30": "3Vqyiv5GvmJvd86DAd3UpbaxihuNoh84thL1W7MYe57EAHaThv6zUevAsjggMn6QFrdE5hngdgDp792FLLDriAC8",
  "key31": "5HkrqqvdWVSybVtdM2MoEYiMRedUK4BdyzheTfxWkfAYcrCFR8E3V44hb8X9XgW7gffrKZMUV3V6RyoezB2vXq6H",
  "key32": "PkCmPb2b5ms4H5dk7ESKq4fvgTXnsqQ1gr3hVTVWXuaoe3fqXP5jrrBMshF8q3pwQHL9jhkpg5Z6GaRQTMHFRx5",
  "key33": "5kiZfWkjQgiq8jcK4Am4FrrnQkQJHxtESSocWtmU2iPW1tVWU3KKKsB4bXyNZGsXpF6PBhcz9uRdtLTxQMWHuYRD",
  "key34": "3auCaYjXt7pGF6Jtd3a4gRfssD8DtMjzViMpEzybmGMknXVPfxMTTtYaM3Ybh76h7MXYPFMWBpSKsYeuavryreXP",
  "key35": "3Dh3hkCzySV6jrRcicVK13VR2Yg21RoQbLmgo5TdtWUftMRTFJcoYgDkUviUMx1sGY2hmUMHe6kDZfep7aEEDcXw",
  "key36": "5nfFE64nfHGPXyyGuLgtPHpRZ23EkTZfNWptbZbZHKziZQRTaY8Ks3786fPMWLDKjt9rPKJYJsQNKnCCyB3ovc7T",
  "key37": "4UUWtnJMZJxhDqbWcHhKR5ZNEH6YT8JMJLx18Xejgh396w68xnGPruopQMrBjJKUYFxv6xbpyS37hq8Xjjt6EoWn",
  "key38": "2VWuk98AkdLsoRbFkDSJ62BY9Thi8MV3ak1fELH1B9dw9zdkZPdBp6aBj5j8k5UnpLaoyRUvRebGfv7AehS2oKKy"
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
