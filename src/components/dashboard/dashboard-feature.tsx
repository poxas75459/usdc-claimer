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
    "32xddiVBFiUBaj7WGgwZ1vQRn71PRcBiAwfHPgyzsUceNcaTCUxPDyfmmc7sT18bwcdLXEdpJqDS45pg89RWHMxr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p7uvXfNxGu3SLSrA1pXdfDCLke7JwGWN5XLaChWjMHPhTvzFFKsoLQovMCnby5eVDjdfsqw2isdPnVkD6CZNpqM",
  "key1": "4AD2WpjNXiehPshEXt84VYapnhN6ZSDneVCVemMvKEXusES1XF19VmgjS2TBiWU3DJk9dcufvzc2TMh7rZ8SauuH",
  "key2": "5M3WxdmwxPJjZuqtFRd9W2mtZsaR8X55ErTMCt3ciWpoV6iCzUo5NWjLVJMvZsLotb1bAVR5EZdCaRLfdnBUUcTz",
  "key3": "4XDWQd5AFJSJ34nUUYSXxoPQbVSPWjhp856dhgJ3tqvPeb6nEvQA2egSP2esDfZXqW2yQLszkzBDAdA2RQ74NeNM",
  "key4": "2X7KJWLPJHUyUrYG5abE8PxsUEsRZr7Y2jNf91A1ibgpokWMksC1Dy21RAeWbRx9euP1qPSTHkkdfsECSuC4eMMa",
  "key5": "5p1mAxuZ6KnxHtttQMYABXknAaq6YKnqhjSt9dSUyvYNwXDowra3Me6B8A4dadopX9ggX2gCv1yWUN9Krtfjz4aK",
  "key6": "x38GLTVPJWguN3pCvE1j7P3kLzScjifdM8TxDE2EJ29NKExLKTpEWgGxGrURRzyGAL447JEXg54PgdfBudB8R3x",
  "key7": "2wzt1ygs2r3edcXZg2f6zDscWEptQ47xqp4qPV77rPj77pn6XErP1x6HN7nETzi2ufqTPh8ccbowFAZzjvqxSdKX",
  "key8": "93oyNWjzsVKJ1KLkUVMwZ3CMB3mDLo1xDNJAaThN8o3JBnzwL7KhaAMrQyaUk1wbFJgoonzGfzxqP797teMwia9",
  "key9": "9ZxYnrc2mwzifJqBbbUCA1kZgpau3127wQqxYimL263eaxBprFR7fLE7bbaipffUiWAEZL9XXcjxpdmKJ2a7s96",
  "key10": "tZ7zVqKAWF9oS331oaVUxz9Uj65ChUMqPmpHPh2V37t9dVHAr8J8cYUoBKbomLqkkwZdTg9i9o2xf8q3peN5wu5",
  "key11": "67dXYqd6vnz5vs5poxADzD1m56TcHqYNqEXyHKfgEPS4M5HqMUcSokBD1coHbRAn6NEW4dUwY1jmubPvWP4ysbzd",
  "key12": "4Q8DCgWxvYsdEi1KACqe3fu7hRK5SXPL1KPw5LrFrnvaeHqaVRANfJ8rcfbv7a2EbEE1fKhfYENaGrVbFi94qSbp",
  "key13": "5mYA9Wm4FpcvwA5g15Y2xeUVUmqGmfR4YQ3S6mhiTyTeVQuDPEmniTP2TzATdmV1srXcoeknFEDZt6oni41Ru142",
  "key14": "5RczcxNMWAPq1WmquXCCXjLXHUuQQyoLhNCBwPEpyESDRrnoztFHdCHH1J1mPvEnnia6Si24ohY7yVSFNYHZGX6J",
  "key15": "4ndVjGZ9K2LpVRwe235MHCSo39xYRHt8t2NcKa1CKsj9y58gCCRerzV9Z2DWtWEE3cbEzrThrJcvHw6a6LpKBGx9",
  "key16": "3SAuWt4tN8BPkuwUHgxaNYY59pxWbFnHzGLghFcmqRDn1JmM4pshXBst4tC2srmyzNKQ4vd8NGSaUu46wZTy7zmB",
  "key17": "2Y43FLRGD7qHvGxGxs4V86kujx8cxTEZzbjgnbLgtbnMiSmynswib9xYx1DTtBa9PBSQV8CzA5aiGhDFVk1kSAEG",
  "key18": "3XghP3H2dqFB17GomqWmTTNJVN8o1N7dkCKatRHfwpWyo2MWHzak3PypvkEc3thMzZ7PVc6sEgQNFEWnM5JzMDC1",
  "key19": "3BFW3LxnGWx8dHp6K54BXEiR6mb95YwYa5e2cRAzVXJbH6Kw82XJJk2HgFPh7LrKzcNzvZDNtDS6dkNBaTEgeCB4",
  "key20": "2aEqpfTqur5YaLtE26DrJw98toZEi1DMmCmxvBUJyQR6NFQyX2vZoNqFe7v9WdtReceVmEuo3r3iaCANtc9PcFUg",
  "key21": "3iYTV6YQ8P9jhMryZxRajeApeQ53aSax31KP9CkuCCzK6EogK5qZWgk91hjA2J3SAbB2CFdcNjQqHj6PN5rEh8d1",
  "key22": "4HDMe8r6Fz5hedkXVPzNggGTYSxHJwUuwk3fy2TcgkrR5WX3AHUqkk6nBxMrmoj6EphtWJ7vesg9Jbet2JmHsVfg",
  "key23": "FvGHN9kg6wRFa1jvKUUeLRxoqsKEacPbmYfSSSpesteAcdcRrP5sAKydkMR8sUpnzJxv4pnVUQDfsG2S2FesYwn",
  "key24": "3pgYsb9LY81CP6f8u2XJj4UXt5dFdEjQ1xSvkJjLAkr35E8Knc4s77fQBFFkmxysEtrbYVyMrpiT7QPQh1RL6MVf",
  "key25": "5sHstxLAY7FFpJHf6m4pGo5yWnaB9QwfohD13HqJDZSRReFJib2jToprZ3tZdGNosDTtdtUNcgxv5QRqQChtzgH1",
  "key26": "4S8uciUsbA8JdMgYxNKPvS21ZKeauCeQ5Rq2eEsF8YBHSaDqhZtL9YmDyidz1Fcm9R6w37CZaq5XVW7UJKePY9JN",
  "key27": "5oWwsZPobRWRpDLHTYqx6S6SFefSfG98XvbiQCDtG1dSzV7hviJPaPBenjYyAzGzGKokKoGHN5XcbdsM8A6aJ5hy",
  "key28": "5pEpnmG9sPLcokpnztD1znfWtzd7AqGZACAPdLYbD57GaM2osSbNycpBnPYY4jBLynSuZaaLkjD6tnNEKmCbBHSv",
  "key29": "3hLwZzh4JRFJuLth3YbsVC1cX3UGbrGjmGscyXeRPnXKTTXN8gcUxb99mU3cVXVnPGnpZsPhzyDKWbPr6v1rRZov",
  "key30": "5zEoYhEgE8eeYxmzjhoJfxMvSzYjjp6xNX74zxNX19cn6BBQabUYEzv8RnaQ9uAnAfKLKnaiSLGq161QQYn4Xbon",
  "key31": "htuzo1RRJozog8LFqXb9RYwiAF4Q17QkLPu7G7jbFWCfEJBC4YmG95eH6AfkCJD73kYbjkjQe1LDU33wpoWu6DJ",
  "key32": "2egenmbZRdgGgPwCyfDW5oysVE4rMqt5FhbKrj46cV564wm2wVHZFq2oNbV9zugit9vtCjoZWRiDBrUbm3sRsESK",
  "key33": "49tYgRFnt3o8vfPLhq1YG9eVoDH2fGjhHPDJUHFBv44R3hSo11Qjof6AQyMoFz84qTKMxCLnQTVeRJqEB163nEz5",
  "key34": "5NhhjQgvEiiuaWp3Y4FvQTJYXpspNFKRFVRQLR5SByWTvUN7caugTU1dchaUBcTooyB1AEz8oHA4cMcDrz79tuTn",
  "key35": "2MCVQ9uyMnn46tMcb4sr44QoboM7p4y6WhyK9796f5WgxiQLaAGxa5cwrDzM4MabFKtFWrAbRuWgRf647jj1GSeN",
  "key36": "2SWwVeaWXmcV9q5hfmzZKhStThkvaAkcdBTmyQPa74k6yRut388AGDdZQtYfEAY4V4Nmger2cDt9VB1uFKjCQhDB",
  "key37": "427yQFdqhmbBPYHbZMf5JVAQXBZbv1YQKMrUtRiEcHbphVE7MNKLDqsxYw3hpbYZCVZiorinCjymBb3NgQP2sVDd",
  "key38": "3qtFaWaJA8SYg45BeBjP6xwE1P7PNy3TEG5krkoFr1xXptM6758GbBmsjWtUzdcKXS674wKKNTLX3TwQis3hUkcd"
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
