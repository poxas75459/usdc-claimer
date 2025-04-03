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
    "27kAnejqAi5Dbd5j7Sr6K5U3WTZP8jom6R7CxeKKbuMcyBwRW5UC7GNGPBd71HXVoy5oRCCK6TykcNjwQ4uxEsuW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NXXeou4Rid8ST3mSMU1YiBeFVdgUCYcjQrHdwhPVDkjwH1wbvHZxW5yuCL93V8SHwJR7viUFUmM8mVkdaRYLts6",
  "key1": "2pd6w8oBkcKjejMKQmPPH1cnyBN97fvAqyCYN4ewFj3Pu8zcMoDY4WJQLjdNh4SiH1xCV87qBeYJtVjysJ5hojXa",
  "key2": "2Z9DRyGC4ztptTM5iqdFWB22TtoFAHm1sa1ekDMrARpDMKyXA1HfNueBqz12yjbJmBAem1VviaMuha25HSURDpHH",
  "key3": "5HPZTgmdckQ4yurFLp6Ci7dBBLQNpoeBdDnnCruTHwSGTvaTsQ9DkrcEtYznNVBYc5yzqm73D2sY3as6oeVxAMLu",
  "key4": "49r8cuU6a3bbSrUcxWWR8BSkXZ6fzBC49KTd1EpyhDFLhTPzsTDJt1oK1Zxmq1tTUv1tA4LDJaqjPLhoUJJmDQS3",
  "key5": "2spMvDPiabnxf72zLfQPE69s52HVjEH2EuQcAuX63RREHv5Ucng9HiYUmFVYuz4VbDvSe17QYVRZR2BovU6vxkqd",
  "key6": "WxdtYzgGzmo3t3sPfJwsYMzgt2APzFQR6qroxLJh7siMB7rit6ggDqT3LnZ7aNfmncjpZFj2rkt5uU98egM67uM",
  "key7": "2DscPiGj1Fp58wUvMvmNcovmP5jPSracAYW6KFfgVtYCf6w9f11WdQq5vrpXRJJPxvq1VJTkT9sP8ey6yPbPu8tS",
  "key8": "539Bzh4TuEkzEW3VUVNMbBSTF6C1Tgr75SjVT3EyVQamtMPanqCCLtocby6CZ7mPhxZbx898hGBdqk67tYAG6m5m",
  "key9": "4jGBtErsePsXKPhs7F95PzvvYWgyY7omosRabWwxnbtHbbTQKSrRmT9Chez6wLp2246gAyDA25B2VBNAWGLc7NZQ",
  "key10": "3nBm7gSJdYzwP99SDXvTf9HxAchA99i4YcWKtp57P7D5YpbR68QrLdNTsDhjAg9YAsLwLzS8H9zAcVCaz2a6xH9Z",
  "key11": "36a79uex5gfgnSPWjwiCp6HBjndRiy6QhBuipEk66Go8Zoc9PXcRYckwoPihReVc9cQy7KxQnaqtrRKom6haMoBR",
  "key12": "5tGNHFYXFYJwkrsVcfngFzM3cQEnnhTq6rD9FNahmhsDGKHRM4dxK8mG1Z4ouAGdqESGm9jjSe1hVUiD5nWLAfFZ",
  "key13": "oUgEwh8wEoLXzSqJHEPV2AVdkDHKAPFoiVyjmJgVbYErNFjYEpkn4qpiFy5BUWdLdUzkqPvEGFAnACQB2tQmctv",
  "key14": "dhKRtwi27p8FrwpUZMcZz4VSV9W5qLfGVycsA8EAx6Dts3Eph75grf5XtUukBts21UnzWbYB699aHNk2hRnHT2b",
  "key15": "2Vsx4VxNNnftidcHbV8e8vCMsaLdCGc7p9bp9eSxXyKYkP6tfn1D469cARcsHFETXyHwhrRqWW5djoPN21M14aiE",
  "key16": "5XmFZ3FcyzVxu95jx579f3Qxb5jVyLTzY3q9sFBPhpzgftd2dX5EZv6PqFgLs1my2di8SEmXiZouASATvkkMhbcC",
  "key17": "5zXvKUb89ShrpxoruCfAEfhr12gE6FVHNNMm2H2PXjK5Y7c2ZdZu2nFXuWFmt4YV2z3rGTshRL329Sc8j5G1NaAE",
  "key18": "3UAU9DpFyjkhd9VoLQixmdWxbv8A6uypsFuKTuuWRg4f6BZZUZ3sjUQ9NyB9Gp9JTMYbS1KTdrTbUvn2NzXM1DaA",
  "key19": "TaQvEQF8SoYwFJkHoeTdF3VD13jPtty6SScFzojjMjzWmBVgevb1cEJrVefMVgp3xySHw25uaydNtjj2iX3VVS2",
  "key20": "f7PL1WHg2xVsBUvBosv6VZebA8soNjGEQjJsjXWaEL9DuFJhnV3C3JX1D8qz1ADdt1iyZ64wndpTp591e8AGeqc",
  "key21": "swS2CrbNVbJ4sFvz4czwye6f4FbH8SQBfdVULATrew9X3HTqDLzictPEE1J2EweXDaypmztYMSykGT32QSJXcjq",
  "key22": "2RjW52oFrReacfVyhr9LJ5JK4VgpvHvBfy3WYa48dwGXYeisdEwHk5WtGCPEA7wRfPAGmgeS5y1nJiotCeHdr4uH",
  "key23": "4kkyKNkD98DoFdU38e8sea3qcGQLKgbiW9QdzUiTJFbvWwELHPpZQHNM4KEv9PwR4wxaUYzHZVdZAHQpVPToDWcu",
  "key24": "4BdDYFn3Aj4CugpeXtJUe7cEKcFxFXY9MQb24e4y5T4X6R1h13cxyN43wHk2XmYPFEezAW3NJLcrHCLfCR2abFip",
  "key25": "3pqH2v6rHwFB9MYb8VuWBBNZKFBK9XK213BggQbgKavxoL4qRXf8K2zG1nUqrkn98YANwt5uhfNy2F2XtufxZgSF",
  "key26": "CFmt43ZVRifJz4WqiTqfNGS499sDs8SuB9RneUpNBX8P8xpDrfL1S3tmBq8yGKsGdESEVByRrfa59QEcQuMZzDA",
  "key27": "41AnQ4TUxdnhN2mAxcXQTe7bbM98bcFRQjNYyrou7KMGfUvNvHJ2MW4nkR1Sprj8ZetQg1s8rf4MB7YUwCCCcyG6",
  "key28": "4G83L1Y7ALLHzQ6WBEHfuEyN6x1tNv84qViLPTk6rSHf4SEyMGRV7mi8ckTPBRt8VegJ2RqDb3XgjpnYW9CbxrxK",
  "key29": "3wScBk3DQPqdxJEEs6A5hsEcj31moDEcK8CA6Dih7cQPPqtGbEL6Zx5mPojes1Jtjce4RdL24EG5p2u4J98NnmrD",
  "key30": "4S9c7cqghqmP7jbRGAJXZuthhUfuE7VTLs1Yno6AncBrUNTvdujz96ZHHwZUdkiZDqb4FSuHWoiu9HbkwVsBuWBS",
  "key31": "4RCECtrjucMGN8MzsK1R3sykHS4nrF6KjWxbCuckKh5wtFiCK46ZPsRQj7AtZBgQTDHurziChY5uZ424NRVsXjMd",
  "key32": "367rdzN3LkN5KM3zUJ4xoMdytSF1bKzMS8Diemx33ZdfomRpq916BG5RDYXGCHtikm7kxzzH6w2Dq5jirzGhrwT",
  "key33": "cYF1MJdHy2cgEExDhAHRWeCcER3i2WUoRdEg5PmQeKvTW4zUwCBiz1BfHryEFUJ3FefRnU6c6NeASUwk6JU7nJJ",
  "key34": "vV3y4dATotbd8RxzcHfetdUEwNth8CTrcNDd3vzoY2g1rfT5tYGvexwdkTCHKWg16H53Y6aS8Sn3eR51868B6RD",
  "key35": "5fNqexbtBoyrB9wFYJdKu7ggkJZTvdYhi2fPiAgArXPK4WFrVGXbMuRXndPWMDPsd6eNaNe77Gkw5N6rS8T9UGZJ",
  "key36": "45C4NwzMAyn9dJfaZnL4cgMh8Chk6s71venaq21vmWBECPgpJMrM8sXAV9qoR6FMxmvEfp817dnJ5wNzABxxAUnm",
  "key37": "4VFdc2xECMphZTnf7zDM22D9bWNshVdQqPTEz84JQTpzufqfjBE9jb9bFeaZtfHP3qpbMVmivmMWHtZsuMQ5xocK"
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
