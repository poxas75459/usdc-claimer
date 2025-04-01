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
    "48w1oUgp36nuMHLNPUyk7QFd4P34N9WSFPFpFe1CFvSJbXGx8mVVYvpRt1seocnsyBZi6UTtzXAWpPpMmysLJf9E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zMsjFYdqHTxEjBQd1e2KUsfZDoL828yCHpBzHPdYaL4tn4pLZqz8ozM9poEpBx3xJY75mJQLoHmWxKdGH2ko3M1",
  "key1": "4Y1uSi2QCPuPo3GwGD6JEzNHNbTYHQHsMT1tJ43BWQURn8a484Hvkc3N9EBaQXDYtjsQmmj8T8Srtmr4FCUy3hts",
  "key2": "52mvV2zRcw1fH5wv3dTfTthnSyhRpAMs9CRYVJNn9FiKQGeNkE8FejFpxjyWtir6mmWqtLrX2NkpnQQt8nPRutMj",
  "key3": "2QU7mNauj4xt1Gz7MstBjCkpaTJzvvZjEBSYoNdzKXAKHbQCEyBJ3NJ1vuQ5YWzQrtPD1xMweR9ZLMRwyF6grheY",
  "key4": "3iogXEPG6nwePDoh3SJxexvEVbeDTufeK3zn4KZcA3ro4KLGZyjSJM6cEjXurFKXKPfCowhcxxjNhxpTPVW7fEuj",
  "key5": "5jNTcorTZJmdc8LvFJUfX6vaimUbPJ7xFHpk5hDntRSvqRFmDcYrWFT2stWjqh5m1QgSdpc75FXBmFGfY3o7HXbn",
  "key6": "cPCypy2JaLTYjEcQJGfMhHv4pRL78TE9fW3ZQVitvDQgvVpc3aQrNxuUHs6UmPDQFsWEBy2wUi2YsHtNnq86ZSm",
  "key7": "394scq35MdpfGS1FTbUYioQZuHUCJwdxoLRW6bQz9V2arVMrDZzGETsbWBdVpUvEWAQ5y5DMetcKw5Co1cqgKXZ8",
  "key8": "3Jp6fe1e9ZoP3GXDKwZbQpNkHvCuVNr42Gw6HYV9Sq14Fzk9Wm2itbdgLqRELZdq7CcdBTptAsUzahwaTGXhdjdZ",
  "key9": "4xdz15xbidXg4JDrv1x16YZKKfLZxyTeJXP9cbT2UGRLcr8AwLLafVr3TZLDVAmMHKDR57tDcyXL6iYfB9CKg3z6",
  "key10": "3uZkJ26WAWuKSqeC3zqLscbbodNjxtpg7p99H4HNeM8hBf4pd4LiWFkYiUfApK8SbxMmhNJ9VESFYC3hS46WcpAr",
  "key11": "A1YGKewgT1L27KkaGBPiKUmE977ua2rb1sTWLksFYG17GaSueVe9f8biiekWCAAcLc89pxmBKBrrHYnMaze4xoM",
  "key12": "pYTBrPkDoUCsjExhE9ZxVo9QefMiGWnKe6piWyd2PMZ1xJT1wpNUJ8TinLCfM3Q2B9bEy3Nc2FaPpSWPLKftY5K",
  "key13": "4EuKUudNgzyAeuD1HQKDq1nRjLuERJCpFNyPoTGSyPFYJWvrjEJRcvWeTbxxzTNyFEdeJBXAuUNb9NCZhJpmohZu",
  "key14": "595wu11L2Ny5mcptBd3dfJZUXMAdgdPdHJ1NXFV1hr6JNvEDaHTnrSDtmHeM3FE9xj8dZVPYMvdV4ju2spW9pRdX",
  "key15": "3amNX2ZD9rLqTChViH72YgNiCBFDNQt7V7gv9VwNwsH84Pzsze4ZjxJvva1LbfyQVKR4XnwUtd6tSuEJQPSTVLbB",
  "key16": "2JuoHFpVKzC2PuYBUAtcjcY7MZDTYwj69xixMwMXuamzEeR3rCCrBXuDDPFHGJHFhpVorddiAWXrcHn2uHY1qiiW",
  "key17": "4ANheMQDJffDFoqJWKcS9PrzWH1QTWVpYUZ6ksonA35ZugiSVMih2Lnzrn7WxPJFCYEVe2eE2VoWPmh3gaKBJUx5",
  "key18": "25x1KKP1BpeDJYPqALJt3pBwNgPxdrshBAuwfNTip6k7Q6FScDj5J4Gtui8N3fLaQUKgb5RUMwLzjo83S2djaXJS",
  "key19": "4Zw6EboNKRdHd5J92UYZS2VGGQe1EAcpHTuAMLkXGnSmc5GVEwroCvmZwyT869HjPYd7wAX8DjLTcqMb7T45Riay",
  "key20": "3PLPc6ziXQcf4Xx3EKMnAjoJetqc2UmuYG7gVVghkRszCp8V4VHeBc1sq35G4eZ1xqaLySpa8z4nQANHcqQG9NG8",
  "key21": "5N8oboAFF9m68RaTk3HisdZMPzWUrmsvitT6HH5xpQnbd3G5JcgU9FQL48Ni8cznnQcjbdNPVEyhQuUCwyHKAcfg",
  "key22": "5dSYqntUmwiBteYVL9CBf7UjVqJMtsgrhztP9oKaTLg35xo2KDt1M1qkWRRRKeaNMwy8Ze54RyxcEdHoxYvqMFA4",
  "key23": "3M9Rjz2i3ji4h4fVQfkxXB6yETttkXojUAv7ZMnJs4zYoaKNjTra5QnLFdq1wsHP6tptRea11CP1yHe9CE6rf8a6",
  "key24": "5gLgDR2MCTRjeZ1DD59TvVmHPqnY9L9C1H7EjrMU2zeRpUy4wtQFciKq1EbiR3tdm1DC5cu4Ju3r2R61AjMU8yBw",
  "key25": "4ZeSJXRHSVUrcRTRNFZMTA3zJbkPQAPZ1mCELkB7QXB8Ce3eZcpnaNvd563yC9VPGGnqekdhRWVUA2HDcoHBh8Ae",
  "key26": "26Efmt28jTmLQBwmCLK9HFDK9UQCWqgBvsqbmXLCPLXehpHoC7o2B3sTmyFKJH6SeWhrzv27wLZhTZW1uQf2MHqc",
  "key27": "aTa9Yy8NtHLUsv4jDbi9zs9JJqdLyRG9qThFrFAcwHLH9HZzKZKNkVERc6k3qCPMLsQRYfSSJHXa6HE8NycJgTP",
  "key28": "KfQq6tdi3JdLv7PjhDGdaMDfq1tARvpfaQhCwvhbM18edvs1HF65eXonCJjdmto4FjezHHjQsAMksU5MMRvxAtD",
  "key29": "3BehMWi1H5fgQTmgn41XWx7GsKfJYzK8TBf3sK1p9gF8DRFtMuQcykuHEK86SNeYfS1rLn3ybF2my7QqtkkwWPhc",
  "key30": "2NSXEr8zfgufkofKwFxBGUQXR3nnPZ1cCgxtnpCyA46C54dny6gg5vey9Kc5ukLSKWctxycMeLCHCmika7bRxYHr",
  "key31": "5771whoNd5JB2QBHPVGjGM89XcMqKUa2uQGrS3Bm2yrekkKQs4m5Y6XsqWPVjgXbywdJANKY3gnTM1f8CLtH3SVK",
  "key32": "5Gzd4yM6VYoezFK4MhQ9mEVP3x4be8Ca1CHp1zAngLmErCHGiUhbciGLc9vx3rHYi24AHwAtKws2KDhwPnGALodH",
  "key33": "48hozn53MxFgjymepwCEH5buHiXUKY62hReDVpAWyVP6rEeAbiWq8iSM5gBqfz8nVRWAQZupxRZiggKdzRZjyknj"
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
