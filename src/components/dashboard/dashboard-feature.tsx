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
    "2wcHRigYxf6XdYFdAksZ7yF1m64adtSrExUXfpeyx2C55ccZfDbj11FEsDwY8uvmWeAm2QSup7sSiNUq39vHMjmS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y5RACugPBCRAqdA5go3PTu99YiPMHKK77z21txaCMf6A9aWbfQvmhnk7uAe7AoyAFsr4AHNFmFyKmu7xtWfbFtZ",
  "key1": "q3VWrJRbRgmbv4546Z47ifb7Y7XHdFip3wKTCeAMhL3cJ5NeAu7MCRhdH4bE6QboJYiPCAk3Zw8d7CpwHF3uy5o",
  "key2": "cv3xVrtHGhqNYyw7EBr5SYwrFBQ4GN8u1Gj6fAiG6KoiQTN7EEqSVYkwSBUPaVrc1KMC2nHAj5vG89fysvs5vGm",
  "key3": "5mLMWJaCkKTbLwAkgGR5ByG9czyLey43ZRQjoEkk5aBGx9TYKhKwjib8i6QrnVCvN7iQKVh3HBe4Fj6yQaeqW7eb",
  "key4": "c6LNC6s83Eru7Whai66i5BWDCcntYr5JDcNS7Eu61ggT45fekfhipsxBGrLPEz2hB49AhZhmvUuJqvMU1Zu4Rzr",
  "key5": "42GTpCnkLwibYXQ8KiftfQbuiakh65z3JYDShPH5H6NuiJZ1cmmhJkdkw4h54PyweGz7YfQxbXVTxWzec16QquG8",
  "key6": "3zGxvd3dvguPuZ7D9tAPz43xvWzsMUEeiDZxTeSzfZMXAat2uz3TBVnPiHt6uFfAT1cq5skPvqvtqdCdXJNpUq5P",
  "key7": "3i12JKH6aZXJwyPRkR5AcwXC7sng7YQB7EBzjsQpZWni4wGHRhjNnkP2hC7u2DRmNQTCXkiNMK7ym4kPNbR8eM2q",
  "key8": "4D2zrjadb7sApRMkCBK8opp22VFTvXgx2az1xqHMMWvbCT2yNhQdQxw7BaFyL1LXLLNfrKpyDc23eHiBZQhK8Jc7",
  "key9": "5eKcg7yDeRqu3cL4dSSiN9yQczUTtXq8hkmkvXhLyoJariaf1trkJazHQtFP4oiH2DpbvX7Az5XzB929tQHevV91",
  "key10": "4zmEpbVKfRgs5jo3M4K2z3dzrgwKAWmvkS9FJGCL7rfJwJmFtYJ8ugsKvbZJK9S4vxhM6948avcqHVGtKg3NDgaQ",
  "key11": "2mWBbTRR8iuJ4oERCWbHp8dGdFrMNtFBdKPjuEYqJVAB1jbYbNfuFbG7qC8qXuPJgiv4J5SAqg6UaTWBJgSaKzQz",
  "key12": "mkTdv3b5pXpe91tTHNwWFLhPavxinLwsG4HJLKqS4WcqiNhqvniQJk1AVetUmusyxSgCUgF4rAmaC6fwwhcfhnG",
  "key13": "4UAxwefjctcwxvbnGn9sr7FRKjgNRv4HT6b9MoV55PjPsbZucHLaaGAB8z16h68so9LGUNneVR4sk217d6yXwNyp",
  "key14": "W49BoEKMtEgQe4rm6GDNQ18iZjnekB8vXgvJ6cMfUyADP5T7Zx3VDwmKpY3RRWCRAn57QEMdE7tJLEhxWUimj7B",
  "key15": "2pruTaECuCvDxuySjSJotgDLPA8cf1MXyBZNqsUDZaZufe6zte2i2suDdPp5JfH1pRxDmUR2rrjSYFmFaxTqpxdt",
  "key16": "PMiov5jqj9Q64Hunfaa4KbYB2nVGZBG6sr8QY39Qpi4ZrpFmq4Jm6Ywx1Q2JSKqmgYpGhMmVxambQC48uaRWHwj",
  "key17": "2EjQSbenv4YbxLhLAAHv6E4EiPtJr4iTgNBhoA5GMkAW6NTaaeeDinPAGcPUU9gWJidSTjzkioTkbMbvzohzaHPG",
  "key18": "LqgPt8ovCur5Q5JdSiM4RVUg6WphskibdZDvM5f4UHMteYvL4rRL952LSwo6QiwbewehZQya5f7nUM75v4zQdFe",
  "key19": "4E1SSKyBLd15kN3NgVsZtpJotx4Xgo5jZUC683YbgrJ6Y6ahUNKopTkMieVpLYYPkB5m8adJSyeh96gCS2EWuSzY",
  "key20": "EhQG5qx7N3xXocLGbLuxwjm1PxJm7MjnNMKnKn5nUye6Hp2PNbCxk9bn8T7NsJT83fouq8Kk2NfeoHdcq3oDzYk",
  "key21": "4jZH96sbsBKy95o332A76m8TDtakYrnHftqRpxkXyPA89wjSPXYbmxuNiyUDDxrehugcLHuitncxe8cfxnCVKPYm",
  "key22": "2Rc7tjkMa1pVmhZwxKVBKfzkeprUiXreowVKMWfLwdbCBHR4d4iSUcwYfLVbKLDn2Z34q73Dgs7oXq8xsMTLU1ev",
  "key23": "2obDgR3uQGf6QUUDcyMHrg7rf3p22jvQCATGAH3BWGywzdcMBHBRypq1CDfq6HkHR12Sy5N33DYZ6UfCubUxfUrV",
  "key24": "o2rAzSBqMhYVHBTEKmg7ofhbt39bChmLQxdnu3nESBoscWGskLK6QEwrsGn1muVbSu2Aqr2CEJ5zHYJV4NsyEy5",
  "key25": "4BFBfPs8GvREzbuD8JCHaYoYMtycnVPGs8pHHSSqVK4vK18mNEeFmx1UhyawLtHs3Te34qnfLqht5XroxmW8St8W",
  "key26": "3PNWBqow2yD4ohSzUsdz8QMmGzaVvv4UGwpe5X4TWg4DkHHpF95EgbhJ7kjggitN6A8RBB7Wi6WHihMDuXDEZcQX",
  "key27": "44xBEkVVG8gne9ZUmdKs5ZqgPK4hq9xXGEv1MJKXtbdStV1oAXbbyfX7D9Hy7rVdWzByGb5Q2atSy76JvRt7R5Nc",
  "key28": "WB8dUFsRmQegQR6tp6XN81JcHKrtD3XdHmpgWx6dzmG1usjXB2VEtSwysAsSh3GGFgBeYPX53H5Xn9ScxgTE2AK",
  "key29": "szbVZxdzojgjLFK5jEWZYA14VGRcwkjRzxYzEz4NJTe1q9oLSPBicgFUcm36s2ufU1vu9YPmzfrUe1nzryGN3Na",
  "key30": "3zrg8UaYmMcRwyRjkreJb2pLRZj3fuPuZq5pPJ5qhU8hdmXcndesBnYj7Uo9wLdCBzWogsmnJckJJQzttfhnJYfE",
  "key31": "3uBdgGEFWy6GBSuX2Fdd8h1UB3kMBNGnevViZ1LFXWavLjiMKFLk3H3jZ8t5sodHoXXjCUFtBHoYpEHefEi6HhDh",
  "key32": "4TXo5S348ve76TRZ5jcmQXCGQuy7n2zSnphgejrL1JxF3mDoyQwjAbEGxxzmqy5HRGBnGpahyyD4ReEn2Vj2ZpKy",
  "key33": "Jt4W8rtvtPzbTRsH5vf6FTogFxFi5ekpbL6AG85N9YsMk6JN6nB1ZyJ1mJobKJTySLk8HQuWxJ1tWprnPmP4fXd",
  "key34": "5DqiEAxKe5Fj6i459vph4WhX1zrRaVR4bkNG47GCXfA6an7d1Yjhwa85DPVBKWLQCzy7fiuFWW7ye8VvvR2mc3Dt",
  "key35": "9ueP5cG7cdyoQGX3prdff6rmMtAy854hLCb27C21tu897Ey2XTxvwA4e7prJ6oayV4KV5g9odp64a1djdE1QZJR",
  "key36": "4Yhis8q69ZKNQitw7zNHa4sCLLs2Yn93smTtVcHdsKjxZoDgsGxDC8AAusdqPsRCWMdSHnxLVVkXydBA8JFFeA68"
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
