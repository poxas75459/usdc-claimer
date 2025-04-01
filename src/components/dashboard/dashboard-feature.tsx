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
    "44Y4Yu1iQvBqFVVZG8ypn4yhQG5nX2SN52HtmC94jeW2RXvn273aHXTzV3fXfJHhKUje8yJ7st9rQA4qX3tbuvnV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FmwAHjgyC3t9rNGAbZfp3YWay8ABREF8PLBPyKU9Lf8H5Zdea6CjFfmin6dMrrAgqwej5ZDFeZDX73dWGQWfCUq",
  "key1": "4DSKUd1XSkTu5SwFwCmhkRHg4ubd4EhHJvcQqoubWoYcnorgH4SepEsF4PcC6HdaGEdyxHGzi9mKQoWyneiNJySa",
  "key2": "49HMoFKmf62LzqajzRQUrvXNB34r48zwm18HKaxEJH9cNYTZg69gLybT7FnQXojr6fa6e9YA6ETH4K9cRXSfaC9B",
  "key3": "4eck8VrhoCfTjaWAakJGtyj6nsZfAmkdGzsTeSNe6f6CudgCwdQ7zKNREfZ6qRKkURDoiT4umPi2WoL5oDVV8R4q",
  "key4": "4zoixeGb7A9d4HG9epMx1PSx8sKxQa5ix1kM9SztUtuXrUtTv6PzY8unBLMMzgGPn3fTViptpKsGPQVpJpLvpFYe",
  "key5": "8ABgoaw8RasZKmeHYSsXPxrww9xiwYw4fm3soRtcAHJni9CzV2NLXSxvyVo56JkZv9gMVwBPbhykTbsz826ouGe",
  "key6": "BLxKxAvzqshEWxCeDFC1bMzauWWwTuGJyDUNj4HVNAWnknHZGrK36q3wVUGmav3N1zZ3P2mHUtyQhHw9wEtj57c",
  "key7": "y3dEUYAgt9GT2gQ9Mmbsn8WyehZzBaEkc6BQ9mGj9cTaxYPfB1jWr8Nsf7zx25ZXzDhGKhsVzeAPKeTzrkoF1nn",
  "key8": "3ecCrZK6mGQZQW99pmVFAD3a1SAxT9nmuUfA6hKLZDCwQJbneKqRd8S2bXAjYx8aNVdGyVxhZMsfyaN9U75X1se3",
  "key9": "2H7yLaPQJZmiMteDS7HGhgbkA6LTMeLxUSf5n32zMALt5Q9iQZFtvuNQGCtwcUVxFKT5qiFeXvVm51ciVbRprDK1",
  "key10": "4WM5ujjXBiY3EQyny12T5WMjGMZAoyJQZTPNAY8eY929rTqjYxvT4Ze7vv12y2gigzLC8cgGMR6evZir49AjG9v4",
  "key11": "5vgaPtZi46fHJcPWU1myUehtt6vKWDKjNgQ1tQpD5daj5aFHgn9EVaC2kAadoXrgRprp2QNxrDty2CZaRwSMokZX",
  "key12": "41LTwENY6WCnzumPSVzwFjH5fgN9zNqAcUD4aC5zbJus6KPeZG6mG5C9TAzpdda9H9XbGZSEdAgS1YjyryR5ZBN3",
  "key13": "4e4drdvT3ff3zod5HcDYoHhH2oACcbCWW7yCQxiLCLQKoEAcuPnx2pVnh1b7uCJgXaWzgc6P6XjnSfGbZ25NFHT4",
  "key14": "2w4dkAgXFXGUJ1k7ZCLHwT47iZJiCfmnFLNPY8aAHvxfe4BYYrbDsmyPWsFvSRWwH37Ap1UMfxdADYrkkQdaWFCy",
  "key15": "4WUwGs4CweHjJSLdXV3SXEVUCJH7iD6Z2acQmV1wVorg4zWtqXGnjx86GWLegkqLa1BYZAvdEcD4oVgJ6ssgyRBg",
  "key16": "2hFhbtcRWGDMjmiV28ciFaVKbH17nSGnjqCYrrMQ8fCVpph1Zf2oGHfSZRwTMDngfCfndgcpmM9XcVDfhuQ76bQ6",
  "key17": "2Lkfyi5PSR2u59L2FWCGJv1WqockjXkx79dKWCM8rRNHom8CLhmAVbxJYzK8uv3Q94E3eHidEHL32g3SJzRk89Va",
  "key18": "JGLfbDZVfkB2t7GartbcGjwsuL4KEkqXnsRdvccpMrpFBGNca822abpwHUTzAP68pRQqRXyfAHDLWTqT4jtvcoa",
  "key19": "rexVjwnBq3FLvsQAExoco6GCdNhtBucD84BdACHXRnVAdH7SNytz181aaWY4wj6b8YJupAsEyTyKKstTwjRP8Nu",
  "key20": "3H2Yh8ELj1EhXj9GENt5kgAfmMQ5zG1BKwFZbjhaeVG7Gcd7pXbpKL62qSgzhBFMKQwT9CWPYAMepX37RhjQm26Y",
  "key21": "vstEVVpAJJCRbKzV2XCNUBZWimQ9xdGSNCdkX6Ep42bj1caoTr1njZfyRC1taxiKSvnS5Ji7qB3esxQTWKuDpCN",
  "key22": "bvoVUiUdJab1cPgFbUgtA83GqPxrN2SYwQdRDx9bPXug7FDEsCJcJDZMrP47w1tj8DXzZ8ArccNctHatcvHEAL4",
  "key23": "2cTuqzgm9WwaKH21vTPAE2wBuKA8XgN3GHkCMV5bcR5rY3kPuqaUvACQdeiT1tZvdWeNKcC9wHxTTfitfjPneiX8",
  "key24": "2MyTJwdvGYa7UzHcmbqpDA9qN35WvK1FJmejLU3F77FiuZgWS862anbKkRezzPvY5FPpWt3XXDuKWypS4aZ7NN8z",
  "key25": "47kRLFs9ubXx1dBB1ZDaBgJgBW2VPNU2H7nEyGsJTeDuU7gVLmFsJQU33SvHYyf2zyRo9CBmwvzadwG7LTq5By51",
  "key26": "jELNuUNXFcovSWkCcxjN2GqFh3zMg5pL7aSYRJpZfKvTninCLd1d4EVbUYF3qrHzaLyKvHDcrU6ha8iZu4Ctrud",
  "key27": "BB9SxKj6woCaYZmtkrfXLJGHYGu9L79YCNWVJJrnkCDgrDNd2siNrF8G5NS3ET51BLzXoiZG1XYY5fsSwtazt18",
  "key28": "55T1vRTB6q5vu8ktSweev3Hjnv8hqU2Dy3fFw82vxuvwXiVRGsw8PoeytEA4LzXqmVKFNd3Cx2Eg5gzCZGjK3Bok",
  "key29": "4gczWDk9qhCNJ3VEQstELUQy1xFTBpy3yCKTneV1T287k2xTc8t99mN6pKTMyZCj1SFJY5AcQcFszaaoFiDGRybH",
  "key30": "3xrTrZ1VCdi4BLtpvwbQrES8DAsNPF9gnsbQZytuiwZnZRw7CsyVWcVEsWxQxwBfx6FUhdpeq4UB7Jdj3P73Pgj6",
  "key31": "4xcD5cWkGJZXjpGzxSJ38G2YVgjwjQKt8ht9gyRuWyGCAfXJzz1qMWoTtPp9avsXjKtBP3AU5WdWCarAYv55yGva",
  "key32": "4vGqdeFFhX2UBDX4Xpq1djVrvugeT8BhgTExXseQi59VpAkRuqiUvEumfztXA5Fsadb9skbh7ofsSpna7fsKKm4t",
  "key33": "22FEmFhoa5Fe8vYxwPrDxpTJr18gJ5Sm2kFZWjFbRV4aCNYNrJEXif2Co8SWxYmsWECHcfuuJFJSHNAKBCCkhNxV",
  "key34": "4ZBySEfcikbHSMGJ1vcZAukHRdjZYdSC9hwPYKQRouPapzDBtngEsDbhHvj4iEQ3cQxapp9gfepdM5XXxMxgnYoN"
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
