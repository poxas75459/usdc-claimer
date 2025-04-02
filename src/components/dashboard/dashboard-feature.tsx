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
    "5NzfdQVXm5moFEsGCRJrGYJXs9pz8iAhJgz1y1inBBmwTPfBh77W2QUEDKPTW9kfmjuYsyiRqciJU9jTRke15rGA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ddgeQGsgdyp2Fs3hrMK6TpFfJqE3jkbyDn3r5FEQ4xLrSfZkCNMkEMBPRyrt41eU1pJVPu73C814G6R7FRZe3g3",
  "key1": "2UpeXHZ77qUEsD756dMbdA4FWL35g5EjaJwanqgsGjxgR5UnbfXpviDKEstEB8AxNdKgQxrvFsaD8QxKxxA8TUMN",
  "key2": "43USoZdp163yAGamcxgRCz8EQvEW4nTWiA6ABdhrzQqmd8N9hdMmYZ1bLRBCeBbCeWgXF2FH4uWzFfW6C2D5e5nm",
  "key3": "5MboAi4TEMAHPr3aV6rWh3NJFXt7DgfJSfg2nqKHCW1ffQfXXoGWdgCUNtAunCFzgcnDmBjTzvCUMWEU4EwDx15V",
  "key4": "39ULca1EtUQwTnaDBYt3z9rBxyzBC9XFoQ6D1reJZsFfzMZFpiARd64hn5P93iDcV4aXhjT7kTThwqS6vLn28xXh",
  "key5": "mWH5JVpVqGCT2k627KmnFLJoGVMESVcZVsP7inngv5TH16gtXvEbFDc2VccmYDUBPSz23hcE35NGuvU2wwUCoHg",
  "key6": "36mwAWzhdaKgnD3bm1YRbkacEgpPTLesDGsQTsj3t9TP9A3ytYxvM4m5UkaHvNjTiSGwoPN9ALx6C8k2GuY5KBCN",
  "key7": "UpJEqURoRNin8tcXzbn39duJC8g6Y2yXE8kNay2va1wuK4qinQLGA1jT6n8LvCXsYNnfhjGxLkL1H6AzktTrGu8",
  "key8": "4Uq2VdYeAdwX8tN11g69D7aa51htShZqpnr1SfccanbGrtPwcV2ACU14WuinowbFN9pQ9iBHwtTHy6tCQWVHsSW9",
  "key9": "5W853fo1mN5K2tsYztp8SNxPqP9onyVmAA8vrdBUPB6Ji62pv2mfLAYghQUZEDsWK46SHPfVuLPWZntNu1EhWLku",
  "key10": "2yJq5wSY8TDw3bqMPp3NSofR5KKzR7mjJdwBjRW6AWHqFMwxVatdbRVhHyyUSShP2sj9Ye8aMQxepreWmGq2MEi6",
  "key11": "2V8myjrfG1xe5gMvk2FihRac73QwvXvg8k6StC5VDFXLjgxCM5pPDA6MxfcyoLikFkCwjZmN4Sn4sG4UHSsRC5TQ",
  "key12": "5pxvT5huWSBUpnuVk4thJFofiJKoJZjf4pmhwcGLrc7eHZ5uZpyWJYt1sJWqkQA2yDEpe2nhu43vC4VfXvVKxwcQ",
  "key13": "yxtsCB475M8MkzsieaGQAdz9KomeVumywg2D17U8uEEYXfxG6g9LgVW8x5JeCEqmtWSWYf26LFnG57xyUMUpj3c",
  "key14": "39b6TdtaEnWfmygF2kdmtpz1pa6sCRxbYHtNEBnKjJaL6ocApUMCDcz9g3GuRm9ArpQ4ZoXPucQ3Vv9wzNnd3Fkg",
  "key15": "5L73tHiBa8kru8MGGTN8aCyv9EQcCNSYQSdjMZtJPjedYX8RHmzbV5yLyk28m1NVZZAAsqMH5QiiQY9GUANnEXJd",
  "key16": "5AXortZ6A9wBphkYhQhDGpKtARb2Y9NyygMZptQ8PpKfogLeYgzMZ6QfGAmeaTSDdYS12hUoBQomtueptDVk4Wgq",
  "key17": "5PHhigec8rtY3rx4zZ7BJu8J4TmDEqiNdCg258g2j969jtAjAucQQ2ZxBrRy3Je7phnDQBGJE9ee7HRWnYbEYLdb",
  "key18": "ZxoNBPn1AYSCEKwXy2UgHHCqQ6QAJTecCuuE2neXDkf8dtQLSYjpRcG4aufjyPqjbXmiZfnW4CFSto8UzZAk8Ko",
  "key19": "23h3aKb6ad1Ehhbu9JY8Qxj28nkeVKDgbQiQRW76sXzH3aAYsEzsmcLRFFFLAjqYJZXyLMKzUs9uqND5KcBD45dF",
  "key20": "5DrHf8szWJenVfnKg1USEjZdKkVL14qna1xCiHrNUaJ9g7iAEM5A2cUUU5UajPq8jkX1wRieWfTuTgRmy7TriFi1",
  "key21": "3aqtdFCzu6mCi8TrBSpzx9njrie8YF9MNEUxPyTrcJsrpzU8jJdDbKDKDGokpuBnoKpaiuCniiqisr7iw3c6aWC1",
  "key22": "297CQxacgFfEjy1YRNSVX7mjh16nFWUowooUnjo9BuEXnauBg1qgf9izo6AyB8f2QoS1Rvbo6Jin99RFfjYvWLTW",
  "key23": "3v22KiKTFyBcPSnMJaEh78j9EynQRVQokPxFJKDbrmhTyhQvzz8vi4jqpzm9Jxy5pDLKGWofu6PszjmyVHCXgfJC",
  "key24": "4kshHTsLb2LNDQVmntS36uQp2i87PTftydFkEdZxH8XpX6PDCwTAp6htk63jzoTK46cp5LktpoQVW9s9KAQw8NY9",
  "key25": "4gohfK8FsrRWnkAVY59aiH4dT9tT8swpZVbmFq4tiZScfZo5aLj6tu393ev14zBDm9a28wBbnsaXKEDe34mxKAc9",
  "key26": "4YNaK8iiuSxTw5bFv21RJmsrTAwFHj5GWtWGkyMWLJ871aAZdv8LH4KndSmGUNrVHVrvtb9CxsYX3XGgFjQAzXWK",
  "key27": "3yrX8E6ioniuFiNTvF15HBXsAnakeEHFHNATGzfuQGB8dvVDMocnCDEQdbAptLpLaUFcrSivYeXwKDcJR4pA4kPf",
  "key28": "5APnjKsqAM8XGCCzaLjY8rCK2NczKVWmFK9fo4CuVsD88Zbwse4oRPbQqYng667szNNuNyqq7yjihMRU3nA1bd95",
  "key29": "6M4WSsg3Ym7L5fGgQzp5pYA9EXb3hvXbBzH4FiWLGUsEuKFt93rGQ2DYEB1KNBLAztnbg6iSmXg2vgvoywFaCfo",
  "key30": "3TSHiqbn69T6seWTfxd5Bibe3R5dxxmd6yrJtrjS5ngKG4U8Uzs3S4usbaw5PgYg2ia72Tfzv78C1wz69CvqLNQd",
  "key31": "4brB8faFWGgTEz5RD3UppRxMBuggMZk6SL6Lk83YDDC8vuWC2rt1qnKH3EqoKGDPhH3Z1h6nLBnevGpuTTqrGVX1",
  "key32": "HSPDm3LSHMdpXSWpHRpTw3YfVK4BF47RycF3d12MV4SNNhfMzaV2WgGY9UwVv6aPab6xvpa4ny1Vazc7DMsn467",
  "key33": "3x23CiwCPbtfpuEno3tupkjeBnZFLwosu1bjgdkdRH4m7N4AF4np7MHrjFhtdGfp6nwLSDJYCPD572ydPwRSY1kY",
  "key34": "4r8YAXzteZXe5SbaWF7SLp9ujsSBzGcAVXhTrECmpwx1HayxLzNzi2JGvxz4zzLXbx7QjESVJ87HZ1W5cfH9p7fB",
  "key35": "3riaBBCVCEcVrhupKNrBCLujD2Ne8dxvYbQ7Xf4f5wC65Qqm99u1jpZkwmahzTRdtzsHHWCV7NPEaiYkAXJ5gVyZ",
  "key36": "5UU2Zg2zR1nWdUoUqbBJc3itLupFmrABWH2GnW7Db24ZFvhpFtYqNx1iQpK94LsdGDTaUtV4byT2vfBxAPTGqwNY",
  "key37": "5vvmq99S5TRjBPyWvhzo6kS5dhZ6uConKKytuXY5RcK9bX6RKTuv6yFj6ce2i3JG2dr5CTCBFJu3SfGn96MYvY7F",
  "key38": "5AekA2h5rCdMRn4fBkLE5BkBAJkxDdvXiQWJc3rvtKLYMsqhhVhkgKzB9Q5RhJQHZJRDcjc8xTSaXRTfPFgPPCH6",
  "key39": "3Wc42SCjddey4eQixYsLD4jnH7H1L97S8X4cWfSFEeoJNsb7gaPkPfatDJGwivYgptCgLdeYcivufC1bkfMXsCvS",
  "key40": "58ttmw7JA1yhRpDn9wk1WbkzA91Xp75VYUYXCms5mCM8mfKqX8bnMoSBSvnKwLKnNBYagt3jQYtYy44y5u2xGyHe"
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
