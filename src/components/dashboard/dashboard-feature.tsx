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
    "4kVCqdw1PE3cCbeHVjXyX68d6giha8FC1A1Drzh94ZVLMD9RRJtKRXDbpppShJBiBGXJyj9sZfCptoyfDhXFD6ZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66p2kJwsqXrPwjMyJHZ2FwHs6sLbPSmYshrdEZqEFyZizy8p3vGwjWrn5yzR18qmBLzh8Apx7ygaBxW6YxerboTJ",
  "key1": "2ac9E2vLYtQyMp3qe1nsHeWpx1gi12YPcS9vhRFg5E21Re9yBqqwS5fLSQrLu4yaDAynWH2CcnFpAUymsciMLAcb",
  "key2": "4Rb5Ln4n8FsguKAyVRbZGYTroFknznbHZhVqrsv2Q27ATn3pgVLJx1C7hp6QbV3X3jtXTPZRqBh2ATSfqqTs4Jah",
  "key3": "2rUgapm2eLPBKN4ASXs8LA7nKau5qreDHKHcGVJrVX6bTcLnjr9QrwSQUSmXP94nTHAzsccVJwKb3cAMGM33FJB8",
  "key4": "8qnC6znab61uFBwszkf4Sz8W8J88YusXw4xeehuMRwK5WDNn9wuQywLUZnMGqG2Z59n7cEAcLCkxTAsYjMwS1v9",
  "key5": "27PdbmU8V4YSBTokut5zN7oAfzUN7i3o56Wy1T6A8XbgsfWW1ureDpCSU8x66RnSLVYEnEmG3GXWxAdBJei3Yqhs",
  "key6": "LYHSzbsRWqcRkJgkELD1VsaYn3DbzdPHecfuSQfuHBnLSJgVrCWUD3Lsw2SrEmwSXXTDcnYJyxBQVdH3Cox9cK8",
  "key7": "529HPS7zZD64A8i3PYVMqcubTgzUoUkJsjfXKxm9aZfgwMvUh37WeW1XiAPQnFXFPcNL1YPcmCgxcL4LFoAEQFro",
  "key8": "okiHCevfAyFq5kGbQZAMMqyenNahrit9LJBvTBSGxsTgHVAKQ1yV5syPUsS7zWiaDziMbGceiNAdycb6RQxyLXh",
  "key9": "52Af8AT3NigRWyRx9wwMmyB4nVinSrtPLxyDEs7pgLBrA7nPzJGZTpTVzz2JZEeW5MgZEQ23UWamgV3mkPNfiC7x",
  "key10": "2y8mBpKSLqL61TqL39QKWVLA4vFYfRcznyzYbWM6a7mju87CM3mn9ZF1trvzQ3fWUBMAyqNE23wZL2zanep4c6ir",
  "key11": "55KqDDWbTCGnQRpgQPLzJoZTpxVWz5MjCujLM9Dhb69EeG7CnKU1sV8yeB2GNfnGkFKEebtReqXKVkry4kjai1ZU",
  "key12": "2bYtTVuWwZE3nBWVUoe2WiC5KdV8SLTJzZjRupPcytW8YRcZcqA6Y1qo19zdivXGH9tvv7iQQnjTy6py6roigxrn",
  "key13": "56CLKwgfBmGTuhZ1mTgQUGFxs25wnaxD2HHRnB1pu9wNxmQWC8K91sAEJpKE7QAhXiubFCvYKJyhTNQHUS5qrAag",
  "key14": "4D3aZXufP1L9b9aUqbRHpV45hkBq1MgBCpvQa4PLkpYNge1y9eXH3AktNZg3qvUhmAeLK34zdboiD3K19nfVM4zG",
  "key15": "QsDYZVUPNKawQhbGXzqLN23Db2EcZEjEuQ4aBVmEJRWteKo3sPX2vSN2mHoXEHUotL6vacecZySDYaye4ErzsLy",
  "key16": "66EkBWrVkH98aC8iqcurx4cg2WUuVayNqMpM4gXXRuuX44iYTJxNJoCLoeR8VyuZ2Lz4PDRLrV2jT6hZ9snTMEch",
  "key17": "3SQYXGVYPnQ4BRnZhQa2fABryD6PFP9Ca6KstihTBC16e8Kccx3PbzuS5dj6Ff44N4xwNoLUJShtZB4MjQM3QB4g",
  "key18": "coJ2gdP1gcC1nAko4Rr4K1oia8TFvbeUCKYvxKuWBhgC6YR1ELqXzS13saFz3DBNVhvXcbPWSRm12wowQnEW4EX",
  "key19": "45cDbY1CQ5TTMBhYYyDwXTLACx6jS8XCEWuyq8edV2hgoamRvxcvTTiL3RoVe9ew4qEubwLgqBvSurEi7TE5McLq",
  "key20": "2f1ZuoEbVBJH6NB6kAiGf8NXkLpMX6zZAQ57j4gVh4ofABfR2HjBS4WXSKQuQw24BP8GGYV16RXfUnmczoZvd1DP",
  "key21": "4M5fiE3mcPd7P73QzkWyVd39dsvzfvi3ipLYdqp7AB177kqQpoA3C8koYajaCcdrTm1WWcc49rUdpzN2pjzFhucU",
  "key22": "62vxF3UAhjiYsw1Ffo1AmJCTKeRsbLpH9PS5urUyLSh7zvzSC5fMManJnQUcUwfv2dJuKp3pWkvKy3Kyv9CFctrU",
  "key23": "3n9gqP8eM2JxLbmtG2psDYrccx2jQqCCQBo6h5tUjBHCfPJzuj8feUJQG9v3ZYnu145sR6mGc7165QP8Ft4jtLNd",
  "key24": "3KjFx1anZufeG9A57eofFJaGywCxdm6r5gtX6AhwChRhFyRBD5HtQqkgahTQSrD5quPgGDKk2WF285jAkCYMsHEJ",
  "key25": "2wzf48ANTZaqpuXjb6cFfcFkX7HFz83jUSrGYpnUhFD4otaGkoxJY9xVKgUGawmoTtcQh5QaNYE7NjtpC1xJ6ZN1",
  "key26": "5FDggo7CbsNTwzhQVHvKMuu9c63vHkYj5LSG7eiwau9uyAAMs8qywJkmFnEjgwiSgo2YN6yzHqgxM8aLp1WB6z6Q",
  "key27": "5jy11gADhJXoXmk8HAQjZw59sd3ekGPnjoh18LyPTMq8zzqdvqdx8YbpCMgJ4H8GwjzQNrt7jK6G5oTTPJEmvHxj",
  "key28": "3NpnxmjCGr7YrfwRiEDNo6fQyexV1MzzHydKzXhPhRg4KpR81Zkoze16rBQgW2ntEE1yfdGFmuVYDFw5JaZbRDqs",
  "key29": "3dqwPiGL64MW1ZPcMRAR3a6m9JR6bChHohgExPqmC6AyM9jiJz8cXXKxqVY5rmfbUUNbyE8tWTDH4HBk6FhSfik7",
  "key30": "4eJyJCZsDuL24EmxqsnMZvr1N62U8WNWkEM325g1MWfpACCFeSvGr8ksGpdu7e1Pxxxor4xPHwB9WgWpR3hzTmpX",
  "key31": "4muoqN7Z65PexRo495odZsfHT4PDWE9E7EXtPssBHems6h3WNiYZz1KYkgteaNq8m8SwjTB5yZmtyW7mXKneDGWq",
  "key32": "5j7784uE24scbmFz83mksZVdr31wt7B5BUz5rRNYvSqWYyhpoSxXg9ozNBSi5Db5LReQreQHUkG5wJP2zh8ys7z2",
  "key33": "XEzbVF29h2QsGCrU8bpyxE4GspNevPQN6tJnw87ZqDbx5w1MgM4Q22Xkm76goumwXQ7oRGMJXiJDhkdu6JLdy99",
  "key34": "5XwtZKnkoKajTLN2krgNjRbxkS9EG8HMp8X8sFCSbgCPAyJrBnXu3Gcoo1ACygm3ya494TbPXvJdhXeJwL69Bzbm",
  "key35": "2YTiuvPZtuJUpWdtxTqTfL8HzPmhNUbRkEhJsHtVxx44PUH4Eqd9wBYP5mVfh94QiLe8dVxLautV8utUD2UTWRoq",
  "key36": "59AWf5PbUUd1PhaHUH6N23GvompJiskissaLtV3CaJNdVGmWTS7F66V3mrNhRwkELhRMAddmhZaauTCCjK5hJWyf",
  "key37": "tVHdhmnp1uUGKhvVoaB8YdPnmcW3cWRXogqELdv4BgqGUcSRThrdUnX4NAvm7Va1MqMpdCQTADGR9dFTW7maEfq",
  "key38": "oHr6H5WKn7E9Kjx4r2TJ2FuVZpgGE5dhMzLJgn5EjiJA11NCTVM6bnD4CZ4UE3CPvJA1PhrCt82NGU1hvm11kcx"
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
