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
    "2xmwv1u7wbvrD8nHMrNREZCDhWc14HpQts5epJAmSKY94J6zDB9mKRxavwQkKsYGViMfNmTX7qPFW5cw1FCGZ6Fu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QSYsp8MEVmEkewaZaskKAAbg2vHvTwmrCAw7bDfdPeNU4Vh8Z5kuZwUsdJ3K68rfacPUxXw9im1f4y64kus2ktn",
  "key1": "38P8bLZKzi58e5WGgZvuLan7mSv9w9at4kzW7xc6VoXzTUdUmQpyo7shKUSDxffnMo2snyYSzBCAG4gED5gu1Dey",
  "key2": "3eDiHSWe6mXGcnRnXfw69SPfvCvKiyewtAqyNZB5V2zBC3j3uLq2S8vcW4AHsgzniC3yoM5btc8va6mwrP54wrVR",
  "key3": "46mQxARDLEHq5wpim3n9vSi9iJ78XM1EEVedYwY6VgZtnyKLenNY9MNzGyM4xZcdra4TEgrTpiptQmRxqeabXQRt",
  "key4": "wGWWYYuddRCr1AjwRyNUSPq26hmRtMq1DbPycFsUnQJp4StPErFJAnbiJ9E1u2D6DotcvL5HTGxgZMyCSDqDat1",
  "key5": "32GLzzMDAovbgYCFDjhkPTSGwJrFHKxrSFiEE7vpcCVpoDmofr3sShTL7Szoh15ZhDBcpnUWjwd3Miy18H4wwd35",
  "key6": "3cSu7EHk3D43ATJdLK9JUdTndpxYFAXX67T6apPUagYN3vVw8U7uKiAz6mbiFSj5bkvyAZ22pjPaqzdMbubV9aRP",
  "key7": "4PupnFuEbSQj4kDbGAbYF3hZ6ZeRSMyEyU39YX69spxuZL4mvkrWFXYu2JukrS41g5VqMJGAJRAMCi1aj5i4PB5i",
  "key8": "3pX5cUimg8VvxKP4Yh627M25Wk8QNzMXbkN3Wn7AKAfJnVy4empTAET66QX1Tqga3YazpKLrusixe4bRbshStgpq",
  "key9": "31QkYzgLUH9Y6Qe8cfFStyZ8wjeHUam3SwHbrNnybHNJFZhfubFrWNqPM1RXb6LGEuVW14zS4a51ZrPy2Uzkkgma",
  "key10": "35FKq8ag66JjFd2bnqPLg28ox2gD1Dy5pTDcNexnphkXhrySbx419xsJ6dYaqJ8QMHj4xJBZ8hYeH1Ktn5VFcALV",
  "key11": "3eardA2B2mEfm1cv8VkHmisKzahzbjjA4W9E1aq53WsLaL4DRtEFffBM8S8yf7EtdD5muBACzPSwFFnehb6GqsEZ",
  "key12": "33ogs6hsNUpyqZ7bx9dq9pKnMy16BrobCd96rfyLMErLayucMzFWNMYWPUC4YmuQ3LyM8XUZ5gDxZBdTJy1p9kpN",
  "key13": "5Y8gQZVQukq853DZnoqGxsQfgWzSDwjHRGTNUgstPGTMvjmLj17KMWZfdGZM6mCcSTeVjxGAq6mz9Zn4GDQzYPiJ",
  "key14": "m16iKSfvugJMWLhYJac63gKNwa1c2D36u4AHRpxQXMaU72KhnPwPUuWXhMdY8M6yfiPp8Ro33KAQE47dmCjB4At",
  "key15": "3p2eBhCVupSMKxeeewgYc7MysnL8BrNVmnFgQaRi84rTtEFQt2H1AwAfoZc3Gku5tbgGp2DNY6Q9b16HkWcKxDZh",
  "key16": "38ue5SDTV6TMGHHPBKnbJmU99317QQc1yhSzHrBZE8uEVFtNCDQ7TUQYNYh6j3A5v9EabPpYaGBbwdJNjUxVhh18",
  "key17": "3ERjZZEBUmQowEbYGD8a6aUqrGTGPzE2NSYX38TzXHNcTZME5YyKAUNgtAS2tUCCUeQEteeJcvcvBTqBKtHiPWxM",
  "key18": "4ijt284wesyK3rWs1Dk8EJub95vf2poaxmS5Y62u8PoyARfpY7HvBhDdXWQdFrY4mxSGcgTEDn8MoUQpczsbVvJb",
  "key19": "3rADg9tx7bC4LebfCFLwf6puuS1FT7m9DQ77zSS15xW5imm2GXbyKQcQShdzUfnPkWGtp9zAn8WfZyKaM5rVjAzD",
  "key20": "4o28MTjmHy8LzeXd6WNDJRPMm4PUfWN64Z6GMKworEbX6XkQMW8TmJsstCEJG67cb7qtaNumxXtWyNAkRBvL67B6",
  "key21": "M8X8z3oSGhBAda789dgXi2n9VVydGkHdM9pXifUebMgy9kYbNbZKCzJAapTEaqymgZZrfnPBMTc52dvkLvyvxoP",
  "key22": "2NXD4G1fMxBfJPtNGx9arEpHYnPoHmyJx1ga4Ni6GnYtgBPCy5GxSCo8LqNvnFgUGverkxNhF9gnNh8g97UGrPpw",
  "key23": "5VJvQNkp3nxJjk4vLQxbhXezPugGRigZwFjZgyS7CGpjJXehJwKUnV5pHsKpRptsiKNuvi2kRq1GzBw1n1cnhM1B",
  "key24": "2CrSXksKq6s4Judvdvpywe2tbvJ87EvipcyATfMwYv9CqDQ1bEehMFeaDMpvCjtuocJFaUm8pRmCeCX2mxcYzvDu",
  "key25": "Yrf4wfse1d5EbRccixLi8w6oBGxoEcy8BmFNWc5E29FyWJGZS6XRYm5FQtABgFLCmsj8DV5QqhhCHPjjeNdQ2zZ",
  "key26": "haooo9VnC7Y3AB1ngbX9ELLNDio3qvQz3DVjcLgPiWG23MgmS3U83DiU5jDjiAK4B17mCdeqWcdXLZk5AaCG9eK",
  "key27": "4eNRyeymBN7WK8ky6zbLBJtwPRb29pcBJC951pstNywtjW3CgpiK6UGKw6NNRwc3RHNxzDsxPrMyq9EZDyPqeiQ6",
  "key28": "3KuHn3cKiLUfDynVUovAqhwfBYTHdnwjdHNWnLGmx5XfcgShaX2om5bPwycta4WBq5XyfN3zqDmSwn25uRh4YUt6",
  "key29": "552E8qAfb4QR5Mw6DQ7Uom6Yp4tBuV864i9TRWEQhgjoqoSke2iQcyPVKqJeGHDYSFbfFdwyV7L3cb5WTvmQoVZu",
  "key30": "5eqMs6Xf6SkJXYKjYHLj8R3zDfksh7h8FXMdAKP9mSvdKteh2R18bgYN35wVnu5Qwb44sQ8uJkDzr7hd3TNbXYuE",
  "key31": "Z52uH3Dpcxx5qif2GD1yZRWcqG4eE6p3ePvppdZhTVim9ZkDey2YjkmzRNrAUjhesrQgn2sbxhENjA83LNSP1Pv",
  "key32": "4rjorohuPwmiw8tzpUmp8FCyoox6V3QxWAFEaogotGtb7J9BvW8WEwCcqDf8mDoBgrH22ePccS6qdbnN2D1QF6V5",
  "key33": "5FybcQ5sN5xqf23VwcWZdzukrP13KdLvmmBz64SJ59Zyph5mCEcmcTF8qiXYgc9pgnxJw2ZRmLBLfdsKd3XDZcCD",
  "key34": "2tBCiABcs16jRc7fG2BbnSdpbxcyjv3f1o4wK6QxcCSbgPxWuDz541r2h6WLMXkRgMabdLFS1tKS2kRbhnpTABhn",
  "key35": "3ukuBGhXnRMXXZuy2pQbLe22oZnkps3UdKxK4nEQzh76LDy9aKTRoJTGf79X8wCgtG6576P1FVHWRJV2moYK1WmG"
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
