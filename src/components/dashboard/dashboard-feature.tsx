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
    "5ZcvHHsZLzz8pJxzsPEe6NzQWnjjjxSEqwkvu4ra2DagUV39EbNAo3tEBKmoNSmFssoDVoyDSzDiimCUGMFmBmqC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f3qpuCfDud7toCDv18b2fqZb232pPfFgVDpn3gZvCbeNUtEMje5Yt8YFF3GXszP5JMZu4s7ZGRGuRnS5CH3sixP",
  "key1": "5ZpMH6tEX2rbZwLP4JrG9gdFU8pThhzkC3EbZ8UsCnL2NaVfa3y3kKehEeys3hwo9YofpRkYYtPkDoBcMWyCc9fh",
  "key2": "42xVjVeHpzQuhatpo3kBKP1vrxHbqAyALKVAfZ8ww5dM8F61Mfa7YeRVaP36pEiG163qLeF8AeDxWtUPTMCJofZZ",
  "key3": "3F5udPXAnGDSBTd94zjHmxHpruhV1utiJdoBEUvLEgTnwx5Xq1k7vuUBuBksz6JFSVCQCz9w6i8g4KBUQLpjdSY6",
  "key4": "4xNx3VAZ5THQbvdgFAJ37BB2p3ZCdHDiTEfewFKTYy64t6arB3gdNFLBPK2xNfX69QiRzrn5Nj26bVb9hEjoqe1t",
  "key5": "2nBubRKpSTMV5cmMttrDqPrkHWM6Rf42rRXohVuz769WAjFMtMp7od5Kk7pXaa4HZMHyNoreSShibwQxb3cPUM6Q",
  "key6": "3fZWRvDzeYYnAD7mRa4ZxdJ9LJtHZo7NHATSE7u1sSL5DvynrUJ1EYTeGkUsMDG5Uwoj94YaKD4xRw8cJZJCoKfM",
  "key7": "64ehcUBsZxghdzjUnkupkWvP5Ud99m3JVqo8HcF8hmZtMv5DugWBGuo7gEG9CLavhJUP41JWjWfQMJC2UwuxgSk1",
  "key8": "3NndVj9k6JtKTrxTB6KC2EuJo8iwMuMHt2SX13fCoqB9hLdjp7vTwMEWrYagdfwf9F9MosH8rvCzsNA6wogSKksn",
  "key9": "2P72wB39AmEET4EaChvKSyoRXBuXDeJb4v2N3FS7iTLeRT4oByqdn83zx7swg3bFMVEeQHixuVt5ie5b8hMH6cGr",
  "key10": "4znioen3h8wzHvcGjewsbAJ9Bj8a8BGRHEmCLoGxsXq3u1iNGbYZ2Py2UHwH72LQdqtg5v5rbSCSatrBhaesSp2t",
  "key11": "Ahid2mHoCQziKJHBUvApW37YUQkosrfzgacZexVqomKuQzfq8mY5KrfUzDWvMdbcRoNttb8RtBRB6U4rGKBg1yz",
  "key12": "4562Ehe7RKb5iWeAftqmHNmPnuSBpcTWuKyrn3Vn39yiAg7iPaR5Dc7U4BN34d4NsASwEVP1Fp9KMF51WDkyVUzg",
  "key13": "31PXh7eB9D9ycbYYnXeYBSy74Pnpt9AEVXsKSHddpcERFherLmtyE9vBzEHVEJGtE6BfAwhSuU65c7csWtJiKDvQ",
  "key14": "283kaUi5qrVGRE9Z4CydSPVtTfgMqXKvZ5ZNHTVwcYQHxxDrT7WHWNDarNpDRW9b9c6RCBY9N5qoyoYFptHRbGk8",
  "key15": "3Yaq1nGmkphoLCQVq5WuE7JGPZqmF9F37XyTobV4eV9XUdC6WkuFaLobYE65se7CyGEid9nmb3Tg3NPxLSBwSPWM",
  "key16": "49UygcojjKsrP7fLE9NLLF6GEEB9kqxgfxPYWfvtmBL6saD1jx18MUtNmbSc9PqPXJv7KSnR4jWSb2mpPkRMarLk",
  "key17": "3xS1Xd1qe7C6fNy3zanE6k94cFWr85wdbLecmxK9hwRdAUNFMHW3cmPjs94RX8NHGw4MvAmJw1ARMx11c1bwG3xL",
  "key18": "2mBT2qdw5WqQy3TeTjtVmAqdSm9ZH4a8jR36Butj1YcwU3rcHgyr3ZRqG6r3r6s8diJXwB12iYfoyegHzFkbnqTQ",
  "key19": "2W4gnx8qejE7vCgw2w368HEBkcdZtnLHLpnmbF1QUvogqUyUvvaddFo4UB77C2tdLaCx9a4F2mPyAEmsA3krjHwG",
  "key20": "53PrMygnUspKz2HLJQBqiapAPVTVHRcWE4jQhF2Zfzs48f8w3HbbTcf4oFaDmNS3KmF9fhmUQ38ehVa2LzNYmtJn",
  "key21": "61JJh8Kx5YtmsFLXQonVPNByDwzkVYxLDGwdpDgQYmT1ovHxqYd83eztySj7ZZ1xZHiCzgxaN3xxYroBbq933Lmm",
  "key22": "UvNaYUTRgxqqJRsQx2SDC8o12BA6nt1BLdjni3jRtz6bfrvsimm9FpXo5R5NTDdzqHxGB5jenKgdFe7RLyCrm8F",
  "key23": "4jMD9AZuDs6emNo3FGY3jBcRFk2kBoxb6gkWNA9yw9W9kqjJgMsxSxHZPiv4sCYEznK2qfwZF8mzb2HpTqLXNEb",
  "key24": "7mAtmDSzQrtP8ktF4ZXLxHGcb2BtMXY82Koh8LsF7ZpkGCSFQ3Bijag3VvkztKWJyWfo2Cr7s6EbqiQv9iGzNuM",
  "key25": "cvAbyaowwAvsDkSgaaZYtvPqrqsyLGMPAAijdQwuy6E85Tx53zmig4kSi8sdbce9T7XUNUs5uiNRabNJ1aaCpoH",
  "key26": "5MrGpmwRCtP9SQE7pvB2bvyNXZbWMyrA9BFgDRtnqWr6CTEfGMdG6Bg3zz57jwLsVUPP3fiEJ1H1UnWn8xgL1chF",
  "key27": "4Zt7Gwm2KSxDNwxrH5WZNq9Un8AfTscvrccFqdRuCXvKjD6sp3LntboHUtXbjaNdQRCgvxBFZ4XmonGfcDZLteBS",
  "key28": "4733wJCbKbJkEUsDwj6Ew4jNp98P4He5xjzHa97cg2gVvWT7sYDDNBDRF5BGvEwEoMskS7Ktjs5YA5kC6d5V5KtT",
  "key29": "28nmcjvsN1MYM3bbXE39A3ayKo8rSKen8Vaqyu2SordCisiuJunLCDi91ezYz2Y3CFX2bnt1h8tewAk5XNUUXAEV",
  "key30": "3ik6bDkDcrMACkxu2JdBTqbHaLrv63E8hYXtefs1xC9nUMAgHLCv8WrnCvcXodBahuLAhoCBhrCSmVSdoXUGLXYr",
  "key31": "2K9eJ3Q6G3HNkBtucxS7TnSDoEEmuDd6cTy8Tu6PvoXSRpy59bZq23pwKbLiUoEtcCHNYZvsE6nAvT7jJDCkTox"
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
