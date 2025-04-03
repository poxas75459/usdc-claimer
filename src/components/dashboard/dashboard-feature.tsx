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
    "HLscTXHG1Kx1kTBgQBufHhZan2xSC7pcPikXyGo6vtnZEkzoRhrnUugGwRmGXyZp1b2E1eWQC7DxVZv5JMoyyXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9xKAgXunvNamZMjbG1FJ5xXx5mMo5GnRAhMtSzQxTXNDW9GyGz3fztsSDCTy86aapSHiPPaz5iv4LDpdWKoDrPw",
  "key1": "5V5bRCUQUDm37az6Zi6uNyvKfxiHEbSpjhpwjJCwb3D4bJtNHS1i2C22MvUgPSPK5fmBxyWnHVAk3tiVmF7TqiNF",
  "key2": "41UkMWFhkGADkrCAYtHmmqzhru4te643dPejqeyhsZXTPTfzeJob1QAtU8qWSsvYtq23AimmfF7Zq51k8AwQdN3o",
  "key3": "5Qg39cFSLguFT4vYcuNL3DfSE7KoEscmtjsFx9gBqQJyFpw5bbfrAHH4okP4KUDThAwJ38hyJ1KquN3c2Jhoncxk",
  "key4": "37iATDPw7j4cAUTpGSc2UbXzXu8gUMK7L2PULhGC58HAHVHf6oxWTv2SvDX4hu4VxK3rg6TxTA9jjMLbFVQAieh8",
  "key5": "qW84U3fqD4BJun3urkT1WKJwhRvafK5UuGB7d1STExYwwRGffPB1tsb37wFCrDKdJJeTMHweLArizqZ6NS2zwh2",
  "key6": "3J7dnVQ4RVPUDEeQsmgp99TYNfgP39sEDgK4zkknG8h23d9zWQMVQtSu4bmvFi955siAo4MuTMoUYKJbJjPJtJZw",
  "key7": "VaW1S1TU3ddvkmABBRanWZSCVF6tqGU5pSmbQUYVqWY2DcdjHoif9JtgKNDGUJPVAfUEFbWJXRazVWFhdS8mmA4",
  "key8": "223TRySjAuJrz48D75Utvu6exZJShmgLZ4vNXdkheidbKxPMGcSrsQ7jR6Hm7JVVnN7gy64Rvmp8oiRmbFibbFBh",
  "key9": "4VvLWNtEsppTK9yd54qtZ3U4ZK1gWiBV99rMq8mZczCiWKeiyv84psrA8SxLEwCxfBaJPubAVZHNqrhLzbYws2TJ",
  "key10": "3NYkLmoojvRjtWTzknLrEXHWHmivSyJUdh3BjpEQKfLtyvNDuHSCrRUZ5LtKbBNF4xTBrCYUzdVyoScNTZeqHQ7F",
  "key11": "5CGMBmSgYNVZ6N78E5jGS1iUES7XAeXAPJHhN21oXYkuoCF5BKu1NeSYa4LXfhkA39fsznoghnx2RGwKXrBLgvXr",
  "key12": "276DaZ1qnyC121MhpwAVBV16Joog5YoSGQNy7mwcB3HtPjQjiWkrjVUyTwdEA74EYGSAsHomPdCPZWAm8RCbfjHc",
  "key13": "GSxmpDT4wLxefJcfKb3Q1XkDD9f4MFppBYs5x1m1aH1c2fkZyYivukaoat6VFMenpww8fSvPwiWgPJ6YyDoRkQA",
  "key14": "4pFmcD7prFfjtenDRzJjzXkwaXqmanfGnmtmg1QgBTbyfHfDoTX2aUp3aVEZ6zgcPLZuULFiRkrfg9DQGAodmRP5",
  "key15": "2LzTxdrtXybDL2Q1UUrJh21fEdDv67sqyRAjAw3D29boWJWySVrdx3rVFHwVHfGGxGRwshZjnnX8sdpBnMabsZX1",
  "key16": "cnGbrod3uKrnMavqg2pmHSdEQArRNci8qBj4KH7bdLxQ7cFXJi6AU2uMN2go9cuNbEVCAZ1WaFmDo85e8GeXSFb",
  "key17": "XPsgLyerqdiodYPR4G24zRBdkD4EWzYT55SMw4FZLMUPXCCJT1n3gvMmPHWALnvBs6Sf6x4jpvCzjqCe1W12C37",
  "key18": "47iZYkTEkAeMT3NBngXKoAb3nCsavwNFGAtgpdCrD1w886pEwDVMhj7QZw41uk5A81o87VeX6cXjijAvoCVbXiUj",
  "key19": "3bsg6itXvesLtdTfBamz4ryT2f5aCmB3hDWtAJnbpyXK44mQ7ZJnGPuFtjZvA9RdEZxj3Va296hdXVdwgJzwgkHJ",
  "key20": "5QazixRVt1XTQMvmr14CTPmWUUtsmqpb3Zb5W2fcc3qgvbSbGBq9cREUtTVtYYoWEiWqJk2rNm327JhdSEZFU6v3",
  "key21": "wYxxfjvwMLJi6a8Tqn34aZC1ZHMu1gu9oTdHMSk8GbyyjrTeMz5ySRYUHAfNHJATvufCPiU1hhveCPBKj8ReuTM",
  "key22": "21NnKWSTMrVCaMpD7SjqGBsmtjJXe17vSv5ANxn18iUhUSCAjJqQZt8aoXnPYbCbmBxmuh7W2Yj7KaVwmECV19B9",
  "key23": "4DkzdRnwgt9bL45ALqk1MazDsT8r5xsyTxmn2KeDkFEwYoRSUtXuwwhtfq2yGo4VK2FQgKa6dG9VhoUDmUGpYSXb",
  "key24": "4CAgvgTZETAHuj6hYjbpTcmPSaVYzV1wG4D3dGf8Tgi47QBHTegnWCqVKLNRaiC4xSedRZMoQuUtiQC3nvmUps8M",
  "key25": "2NkuY9sD5MCUCVwwvG2VR3yyhXs7VXRYZRf6amQVViA29FyC5yuX8itUtZMTQe3yw5ysdVJ9PN8f5W2jYJ4akY7K",
  "key26": "32BqTYcvYn4L7P5SC5DAX6jHuxf8GgYnpHCNSgnRt2erzSgZXuKBQmKLmeKNELArTKVJzNRUQH9Chyk3qw6feGXp",
  "key27": "2X5P4rwMeD4Vhab5jFs7qRt9RAkYw7M3d3gqFBq8Nu9ZotUSUbs6xCP6zpC3fy7ydKmrsEwZ3KnpBUSf1ze9jgn5",
  "key28": "2NMgg9tZovwmvwq13d3imPeHR524eVFKioYigqwimcvQyP6nqKa3THMvYQUtziky1WiuGtj5vTmWaGF5QyoK8thd",
  "key29": "3pV3LuiWH5ngaJj8fCeybCxewVdtqQBhtupvuHwALhUMinxhiEKBihuTA2eNe8E152T4bB1xcx7DrxApXXJrBB2r",
  "key30": "3QpPVCMKTiCEkzFcJWAjgdSYff7QhgC7nQ2bFJ3mw2taoWYCDKHPts3AcBuMBiA74ewowxqD8FzS5ByTV5g83XRW",
  "key31": "7rmq5XcqNN1RMkJ2TNtSdgJMwdpJGNEWRbf9YnnhCEoYszo7dkgnvPRUZiZk2Hzticjm3ARsJRmRKLuDW7xiWSQ",
  "key32": "5xhWkJELoNLYfi9BW7PxEYju9AKC6oyjbvJDwTv6Jnr7Udi9www58CtwC2uoLVQGxDA99GcZWjuXKD6z3bEoUSHe",
  "key33": "gYpwK4sryLxbqYPiG9Aw1aHfMBijMKUMHqamQmKD6YstJ37wSRaQR167SbJJvgoJKJTRSssggiNnsmTYujZAW7G"
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
