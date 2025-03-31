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
    "4RVJ92s8pmUra8eSqSBhH2GmK7dd7SXEGjrjYgfVfATteAw5bXbke9TuKZJvnpE7bc5Af2vUsKJLFa93FuqY5kQi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37rUquyyA5e8TieHSnAwPJCm9A8sFa5JZxgKVbvjRLt1uzGnJe5trRhWoaktbKB4hSCRZGgcmzUyWUc3phhhv1iF",
  "key1": "3ygbWdmw9kad7pjjDfE3tsAYLgcS17ns6xe8gkqkN5mUk5GwTDuCdi7UHiJqm7rxfYSawzjWWuDZJMGAfazXMyZH",
  "key2": "3W3q7XTjep1uLiejGY2pvbiT9k2fszbjkubN2z2wMZcf3y6cTR3pBmCdnkYmD4JLBtKdAaZ6pnBLmCAvJ6YmZ8st",
  "key3": "5JuZAkAdvEz64bpzn6dVYaqBRVZdPRSUAhmBemQXVwWmhmJ1vUD1Zcz1QRzjVV8PRBHqkf2TSWdSLo2LP7HDPDgZ",
  "key4": "2wjV7dNh96Bax4xizQ7Z3zNQaM9H5GW3SxReMDWnRRTCUFkq6omiurUe5tsEuTei9Npo3ai9ZJzE6znMzPm9cvmU",
  "key5": "5Ce5ZGTtt7N4HCdgwwDRJPsyLNH4DsdtDkqhUUg3QKxTPpwR7Z7k4grRA9feQibKRFeUvHosYs4fDuvxBNaL4xCg",
  "key6": "35nfk66Yk3ATiu6HmNJmWScATV6Xwh5GX5p5n2hqwoBVUNsnArqsrjDqLvqhk2RLGWqXKaYzC9TYNQTkemqoke75",
  "key7": "jMUTSwmQp3PWsZkGwneYZKZRfbdhU6HZDCZawVsXksWFsiHgGhuMLfQgEfL7W2p44Pxfq1jsYf7gpvbNKBzY62W",
  "key8": "5Nyn3QETWeKPCdJUXM2qG6UpuJ7qPu3MhLgHo3XDcymKy2LUHt4DuB37nZbMThouCW9dzBEB3ZRCGWnnhsSSotRa",
  "key9": "KJKTyKsydKxnj5QGaCmdyLzD6G4Wc18QKThKr2JGnTqA7mRrpFd8i1aTgtRHBijrvRTbBAnnxPA2WVzXVZGoSDH",
  "key10": "2paJbLLWprCD6uCdcg7uDDGtQkjLZpoqTa4FTn4r8SFVpdHbykBuPQwapAQLNLHyTkyjSywNRx3nV28FQGjUNE4H",
  "key11": "4c77SFwBgpuRnvCBJeEyksZqQfhnapSTp5WMrd6YUX9S2QdcoiaCDEWoBhzE2J2HGcwJBhwps7QQDWhPY8H2r2YT",
  "key12": "4jb291kGj91Txh3D4FHW9suxJVCYnX3nQZXZm3LiCnFT25AKTc36kfSsdXTFHRGA2VpCgFCyXyGt8TnjuLNzRn9",
  "key13": "JBomJNpm43n4j3zFVoDUPJNpV14rnc4fpnt4esDUeAWH7zmws5wCEHKMMiqRTZTAXJecBns8reiykHfQ4B9Tc5m",
  "key14": "2nQv8cbd6wK5BkLneekY2gTams67JEvqac7QRHJC8rk81vuSDEoJKL2UGByBndP53G98PkbTWanDHE4oDy6AyzyH",
  "key15": "4nDFe37Xe2nMXB9qvij2TydXvVCVy8haimjhjJkE1NTqdSdUVsPC1MvCjWAd5HUaeRM46t4sjzvr5p6K7XbFhotr",
  "key16": "3nAr8iDkNVx7XB3Z719GYoz7Ui4zSTnBWGFRhjFuPBvwENhAut6ZSubNiPJx54hsP42d1ycbeCvafLvfzj1qQmmh",
  "key17": "RToxmCTJpNLciSKC5VeihP4apWDidy1V4V1mtreUa1oXWUSVFK69WyF37jhZrB22zv1hAajJfsUW8RQ89dCR4xr",
  "key18": "3fv3vegnBKPxDWsaJNs8EopLLV17oG1rCw2umQZxzs65xMxxy85WF8GcLQk3FPgnWCWacqAGJgftyJ5q3jmAsnt2",
  "key19": "56ZMiK9NtdAFcHhVug9MzXkFZDhar1vMCfXsXmk2ziUfdGxCFDiJK2QECWLfgJykSKbswBUszNase4AQxvuXX2Ka",
  "key20": "6FxUSRjNi4W9prc671LDsdSrzEeANbixQn39CQYhE5ovKmBHPNZV6VwCfRBQuKWsTLr13KpyYobcsU9YXiG4qxK",
  "key21": "pH7T1SnJKf7U8nad4Hht6YDsbzD3ojDFN86VJ99hgB2xPhqXHTHP54w8NsZEWdE34LwVvyFRd5fFqHyeqy7k63h",
  "key22": "4H8xJuNQ7YPENZ6XSsGsjgbdK5thRUfnnALBmoc5Jpi5eE1cyX5Q2zqPrRunYY1tkJoHtHSPnbMqFf8yfCG3uaae",
  "key23": "x2Qgmdyri5pRHT8KZKMqVztpgzFh8cCaXPjeQoQBo8Fx5VuPc5K4CVZz77L8zBQVVAbg8Hq91W6aMi1L36r6GVP",
  "key24": "yrfhcfukyh8aR6ND68cNs6cyuz42cJzWCRnSQTQK6s2CUb57CgTbK5jxoz5NDseVYk89Aao7Nhni24mDcVzCwxr",
  "key25": "F426AT53rdMm2FHTAXzxAUc1qnzu835ngFVme8b1LWpVpZWuoG9hWJH9u86ExNGGhbD35CeSLVwNFoNRjHiYxW8",
  "key26": "3WnJNC13z6t1x6s2L27zfUBD67EpqVVTrrMHPYzhv1tqUNbZnyxi8EYSGZ7MJFRvSt21ZpqvvdrSmJ7G2HZAY1Yy",
  "key27": "4oQmccyzvDtotcmeScQnei3cqYLZEGFKJobDZjUQB96658VkrJhUjqS41PKZrpNtYsZBjY5gJxoauQkUMRdiVQRa",
  "key28": "BNWren1iibzNDBkVBU3nVFzQGMqPcHGfV2KJRzUKMCx3LcyWsCAKTLAbQk1wV2y7dCoEuRi1fE9NmVXivhYYnc4",
  "key29": "Tw6C9aKTNURpSrvkCG98r25Z5KvWj6pUyJuQLKzWuChqjr8izpnGKsJBSdMSG7nWXECkm6NVcdb9datecfdhDQU",
  "key30": "61yyXScm33EN2unHMwC1rzwEfVubx9GpVf436kTFALg35H3mw8KZA3d7vWEisYzuW5MPopBLpKRTb5NqdjsPk2n2"
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
