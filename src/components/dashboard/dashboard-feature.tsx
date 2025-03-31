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
    "4YkaENABeJ8dckzx9DkaRCy6m8AuFtf52qohPrU8iyWfxXQLTVv8EUX7G5TdekAuFia7BcmYHFRaFpDdxYESeMTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iA2ceJgTUeWCvzku9HyfV9RtyoL1BHAvWDWbbFkVruxumQt8JaEpjujHi4fNeprJhCsdb7KQ8WmNZvJVYTgkY3e",
  "key1": "63ryHdKY8kkZjccr1SeBBwX6De4BGng9kT6xxxXWaRyAzusZZkeUkFXS4GPQo8Kom75pcQv2QNawBLdACiAm2cgX",
  "key2": "3wzfSJq5X49uaqDpKgQ7R6SnCWqDZY5fXrMvxgYmae3nQUKWAqJ35E7DY3AeCdsKkP62x9Ko9iUMWAv1iWT6hJms",
  "key3": "5wvLKj86xkumospG1SffWPxQzJdzmZveHbib2YWrEdbGB6yAwKyGXj3upCF9fq9WzMMXoUCJHhGTcP2srV489TKZ",
  "key4": "2ySxhXUt5QSPeQFJV9MXAQCEWheMKPAicriPBt3qjscZ5tcWy1XWB654fycfPRg51z1o6EZ1rAoDZ1x48TE7jQzJ",
  "key5": "2gMgT57DSpXewv8nac9QARUoUr9ATP4xsrhmqMhhPR8G2y48DFaQ2kLeaCn7MVZpgdPF3ooBYVUNhC7TQxVKhxyS",
  "key6": "3p7Vkq4P5H5fuCB4ZPGUuUWfRxsPVQrduaePy4Yaq4V6xLywzhC3mkkzwakyeDLKwyghPJXUGVuoG5c9NnG76zPq",
  "key7": "2yYVAvY4yoEjHbGPDaBxx6ornMfi98W7huG4XDGYTTVAUk9mZfeNvR7M6TFoSV9cCxqWQR3EwwgmwKpdBdL7cZ8g",
  "key8": "4f38EDvrC4VwHV5p8rc9BmK9yVJ8WxN3U1rYemhDXZAb5iPAP3f2MoMKcvbgCAXzGLgpmXUQqu8o9Up92yH6gmkx",
  "key9": "2eyiLFvquaCmkTKAYUT7XvVtDLF9zcFkr2EyJhUug5MuPMXBoyCBRph5BQrxqGZPPZbsNhikH1yEoisFLjPpX476",
  "key10": "5KBwt7V9P12vibuC4tXjuBWRtaJ36QT8BVvgEyJqA7yeh2Gkd219A2nvaaxYySRJr5rzr71uSW19qbBpUcjPCpiv",
  "key11": "57L6CcA3fHq4XGMxHAZjNKqzGSKJBMnnRFRk8o2skn1Frr6dAcNVSmwuEtFGuVan2ZKQsi4Zqf5yoZgkkyLHZzz9",
  "key12": "4hh6f6A2HBsf4AHjWCNgKF7xdSYy7sL537Nbu3jY5DZCVeQWYwaXECsSovwz4YdyoNQ9UcDCecdvdxuyJ4xK3LQ",
  "key13": "3PW3YUUU4WnjKU2uN3oBWkbZqH4KtvTiuqBWctsdJVYTbjJ2U4EeeiW3toXTHDH3VGccj4PRS7MTbMpgs99DhQPK",
  "key14": "3pc144AfmB1GSBfuRv85Dh7c9NcjQHy9oM2sUuxvmWiRT6L5Pe2BxNTS5gBtdxP56XMz2SHanrcSHwzqVi1Ud5WQ",
  "key15": "3fiyQTXT65SQ3JBhLzaVEwhB9aWxSMj97d91UUiVwdCqY9Yjk8xdiH23k1cJco7rMw2PH4hxeQ2LUEoQcT1GZHct",
  "key16": "2Crzt8c6T7btWLJzZ9tzNyVSHgLVoRsRaXfTcr7dyGipQAFM1EKouALfdQ92UCKEerQw3LyXGmjupwwWsKMV8jZs",
  "key17": "2XSR6rc6G4KNo4YQLX7sQvSfwY2zn5FvbYg7718nJtptqj2bQU7DUg8XtUGDvDgSrnHSo8PxwoNtaNHMZubSxtjJ",
  "key18": "yEwjSLQKT4r8DVhzqHaqFW4LeH6jyzziEKsx8nYicdCwHJu2bWgZ1wmDNVytJyttSraDTxCEXpYG8fN37sVKWbT",
  "key19": "3oUzFDKN7mmVzpxDkcYMzGWoyZNM95ZhDyVe6GSnCAKi3miRvMBHiUR9enC4MX9zSSDjFcvxoZR4rDFj8xkXVN4F",
  "key20": "4gxSYKsQWck8i7nKsq73y1uqna1ZHgSDkccKXkPiGCmMaSp6G3exWVH5ry7t9HtYUo2xpVm2zfUAfZ9VvSUdiYKV",
  "key21": "3uigqmR3ZtAUVCPAF6Gn4pTdZ1sq9cMQVWWE5PmEqZAQySFHzLTkDkgX1QVhfniEP9RdRM57Lhu4uipyJfhnmQ5n",
  "key22": "evVRyPMyEP7vJ5z8AXThjyRQ3ACmPfPQgSqU2ni2eCmKgqgxPouKczEBkKSGi3iALQ4DDZ1ULNhAPJNwgoi6NHT",
  "key23": "3aUzRDtSzeZEQpEWRvYMWsHPyPZkr25yAaPoR9VGRWCurGvSFNPuYedHd8fmALYLcPJywedEJ1DaCuAemFZshFsk",
  "key24": "2zDp5KTAMtNYiQLm5ohacyWRr7nhqRG558CXHMqpdnTvB1QsHHQZx68mLeXq1679WDrcKmsvtPUcZ23wgCAhfeBG",
  "key25": "rh1mza2AE7pa1FwKEcLPviFBTR1GXc9fsZr1GViCeU5xt3qyiVEuTevbhubd5guBjRocuoJdaJNBYj749DZFZUn",
  "key26": "53BBrMYdEdge7sDYcgzccxDAHn1yKcHcrkGqSqKBKYc7JTgUhrbzA1vGQtaSLVkEtwVyKskiFDPFmMgvo4wysbXd",
  "key27": "48aFYXMnzTVFNu6BbEiDLcRQykLGP1JKRjJU2cPt3JhZv4i7gJDRLWn5Hk5rdQ8oFoRDukF2LRgakrjEFkFSTYsq",
  "key28": "4wDBiJuJkRddh3dGoCGDU7S3CG1gjmXVBLiV1ALxj5KSaw3aBZyjGnWNc5QwBd1KoA3oPVYuuvMrBxdMyMUzgETj",
  "key29": "2ZefgPSAzwBAePxZkKd8LePzJkX2gCe4o9hk8SCAMzpYUHs75gAPz9uTmuCzWoKE8ryKFwB2pPFU2FqTo25cnmP1",
  "key30": "2naJx57AxCaLe7n6ZTo1HpvaJ6Lg16YU4MYVo9jD5T6E2fUeFMP7oVJNy9iTWnebgKH8gyNPQhVxstVwjGczwabo",
  "key31": "5waMk4grP2Tw1ETNQHsN4X9wmis1tTK71cZvgAW8YdBfbH6yDA9iuuvDYbtyUDLU8urVHrzGSz1Mvt15MWhT4xo8",
  "key32": "RkKSYV9AjgsGNxWvWzT6MA4cgcjbucRkifBM4WmT3eyfMoDdof9MDJ2MuA2nHa2A3dymqsq9Ma7XGy3dY1dHn2L",
  "key33": "3xJ3pJtZhz5tcCPH6Fc6oQBFwHxLjoHpWGpEDWrWbXxE8AkEyCLxKV2ynMxcBfB9k7GLbUXSfhsHXjaNb7hRjY6v",
  "key34": "2PuT6VSMVapV6NpvjncFzuLUpY9UxqZcgryz1eQyFy1sJN6uQroJbkB4T38K8sqEmuMGfMYZcz4cN83DzQdwKkSg",
  "key35": "2c726ggdqzYe5aMEbdyCGpMZdZe1Q47dYZngcZy5w3acwycSb9EhpBhZabbrBpUNvazoTU9xXVzFedFHdia49Fqf",
  "key36": "3osY8Jjz3bXKTeLx76tLaNEBfU22wMUQnacmQT6eEgToeoJ2hwQWV1SrbawVdBaHPccJizD4aBcWkULfEHMBnbmE",
  "key37": "kAjXCK6G2hkoKnYqjJJVHY6KrjKZWsGeHrxcPAgTsLcaFe4YzMPxnqN4Tb3UPc5pe8gDSUa3A6o4aKi67jdcfha",
  "key38": "398tRxhDAD8FR3169qTNHnLGE4sUStY5tmYPEqupPPLEgKpid2fpYFcyzN1E9BZP8hK5S8i46HQp4ACzbV1iEgjg",
  "key39": "RUTWyH9ddtkL8UP9wNoTenQAmGB9TLZTfgSmSY5B3Rbem77AbhdgBHN1PSzAVMK1XHEmZH4riraFytAjtjLCurg",
  "key40": "2chW15eJH1Wq6yU1Y8yM3o4vv2mvh3MwU2PBPh2i7ybemhpbfTTw8q5P23rrHNLyAzRqX57TNMvBihsajeV75qKy",
  "key41": "31BnUNRrQbjqfBocWPEaWjeuGcYBzq6B1E2hy9WcXtDYJY2gXr9UyCPPM1b2d4xwGAjE3oLFwe7pJJwtrqx1hgtG",
  "key42": "5JDQxXu4c3UjkhDkuZTc1qNMmZXwmChmxZi7T2P3TisqoGp4JXmSwDTTUcbMFPihnzRYwPtv3mGzSXDWV9nypVaM",
  "key43": "2g7WWmMmBJ4bfffGNiVzCn97s8T1YNejoe8eBVNxHKq96qornhrcVzzQ5MckdbXJ6M84StTXvXyMVu4qxEVuM5KZ",
  "key44": "5sBKWsWyX2rvLhRegPkbqdtusCrenBGwJyErSJTfufmf6f1XJzb837rmb3w1HSZoT7Ry4sBwu1uU4zzuzqcg6S53",
  "key45": "2fPkJALDg8Kh2kdL7uJS54zjc1oN4vkx6pYynK5VMhmjZnrzvbHERb3SVWn4GBVyd7fhNAmRZnMbnddRJumM1iMk"
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
