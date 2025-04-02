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
    "5GAQcxyBBefHL66HHoF4Nu2Y1WnKszCZ9Lm1iF9wCbAsUjDEr9yJH559Bzfqcr6N8uqLMzNhxsMnsDet5sYkNzad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VXfSn9z8VR9DTthbALkTNfhPT32nKBrWKoGaefKe558pGWPBAAwymTGmRuWnZRoCf5zSyJXL41dN3pyqcCpwfyD",
  "key1": "2Joz3UKA4oEtJEYQGZui1m7m1NLAabiKZqWPWF95XBgCxcAEegkXggSdEjgnnKuuEotjDZDvZTVMGrJzXe8bo4Dg",
  "key2": "37zxUXYEUPdym3fUC7pteU2Jc6dJ8biGfxETwjMu5UD1ZyKQqEZHcigySecuyMDbdfLqtoUMbky4r1ths1H7ziyx",
  "key3": "Yh1o2yc9E23CT4NiBpyekrK8woVWXu9J4ZXXwVbp1sQdy5awZDL777drEujUbJTboXtHCZjEymU3CGhfVmLarcC",
  "key4": "nCDgjXASVa5HvEPwL3gHVGFttnxWmBWd7JwJkxKRfkirfJwGhsyUTYX5HJG5oYdMwddNwm5uQJneNodjj7HPjE9",
  "key5": "5bBDL711687EP3gvJF7UZ5txzYP5yPzN3oTTeiTKMTRp3pZZXyzggLcsnKYk3RwCMhdutWrAf626g3p1synWTbYy",
  "key6": "4kFojdqXE9JPqzH3p5Tb4wPVMvwNbTBdv4qeH2PT2pocobSvbd9mBw6F5MHMyzp6JmFezEgqQE7ckku9fdGEuwqS",
  "key7": "5EwaroErsdx7bAYDdToZbYvosUWjcgcLtgL9jcMXsPnhbm7rSJB5fn8mAA1JjH5L2gXKa2sSpBZrMM6RwEJzy1Ao",
  "key8": "4brw3jq2Ej8yemh1rXLWGp4ocb2MQ9pCsTmCKKJKMC7aCJCLa9SCmLWKtq2wQm2PDDATGVoTHhXxHFwc3nZe9oJ8",
  "key9": "3Vg51BxbEEKEXXPqJYGVKWrNSx8zt4GwTKbTs9492TYemRvEwQZYtzVmM2vQveUTDLNsSqZWTXkjgZdNVDMuXKPM",
  "key10": "oARjixyymZ6CSrMwkUePoFS1DCpWTfcyByUpgNqii7AESYrBcECwLCq5fpjweEQKvyHskfZy7wLLBxuTsrrHvQ4",
  "key11": "4brmfWGEqbhGfVvgdTW4So46RNRt1j7ZZioXEjKvvTpY662iGSQTLiNJNnHbR9Fa2NCE5PdkU5wvL8357Wz1RpQh",
  "key12": "adCxhrNpaCy7u8x9QJs1cMPwVrApdk22uFhaWfKx7D5FvFmHQrqbBKPVL371nBJqunjTb3ingkBqeYYR3zXtecY",
  "key13": "3ws1hzKRBXnRSpZNDB5JGRX3C9LtUu337ogfPYMKKhDrpM3NQDnefBzzVXiagZesTRihrV4QPQNeTn92ALf9Z9CT",
  "key14": "2xGzRcUSLk4LPXCJN7xWmTpdGHnAmtUmzq1FbKTLmeS4xc1zs5CE3FKpPzMBobhAPbnJsAxLnyqhfPdRPBBMuFgD",
  "key15": "36PWXdDFCHtTWGpsJge6nnsD362trg56per3AfkMjJ66ToUmNphC5zNsEJbf6taqpH5MzLWphumx1TmWjqrTrG4c",
  "key16": "2keMiyTKwZdQ4UtTNcxqNgtV14bJZNeYQ67sCUSJ9ffFAwUj6iea4BMKL85DVXFNLWJoCrCDyiwFfmV3d3VQX7as",
  "key17": "5VcXG2eBrErCYMJ4NkckfQN7wvczMzNSayTEufJ4bZderujxLSeNMM93musrwT5e4yLj4hPR6PZMPxB8byqXv48g",
  "key18": "5sA7suY9AFNynMdsdufR6GtdJ61hz79ntEAJdToZnxGmbwTQPKsLBC7hUvdRcEBpf2TJ2w5UVjfMEc8byMk5sVHa",
  "key19": "h4pDAU3WjyxqWPEnVD4YkmohnqyWhPKwp63sumRwniDaBLRizDUrc5UZyNfBYnvAZnwVKN5nEJ7DhYPDZ71sbdw",
  "key20": "4XYuT89eNVvxXzQQvJwoDnyiMgyJny4wfsmptqTbQoh3y6cwjSHjAS2wnVS1d8hyHUDL3pPjZaVwAuQ5DiEVRzRp",
  "key21": "DWXGhFZuaVqsp8JRVeYnw48gAyWZFqWntaK1Ef6NV4xmuQraH6N1xv6rsCGoFu2fJriHbeDxatqfSiHt1mG8RBA",
  "key22": "4Jjz9CxALfKejThSqHFP7EZKzaiLMiNSe5KPSa5DBXTGeA7oJB3M5PcbEpspouHxPqs2fzjz2BH1z2VHwwHZGWwx",
  "key23": "5R5he3ZHRkQtDdikJU1x3phDKofGBNiFNmz17ybUSgY68mYH4uWaHFYQyDHdhGRaGRNiJgzgUhG1jo4t2bHxgZ45",
  "key24": "5995Qb88BgoYCuHzHPzUFeTeVqQoUSTzdPyB95Un7N88E6vZfCjHC4ogYM7q9ABa8fxDEPgtgomGrmsEAmq2PCqP",
  "key25": "3Np2DPHE4Vby7k9Jb1QjodzKuifSckJwQBzT881VkPGe3567sm6MfGh5WfrAszmDbJ6KdYxznfCJLmZtkYQDsvSY",
  "key26": "5TMpsvn3R9ZcEF8LQAk4UHwMAH59wwoPXJyp2tcYj42ixHLGDmsgvs6Sr65bXDPzFSmCzhysyyocrgECxFMS1HiB",
  "key27": "3JSYjR7SfvDHWPtgZnZw7rfETWVU2V9Y8wsLWE3ESsiWudeqV1my94DdXohiBVYjksKpDf1KRSYFUSLsMy5VpnAA",
  "key28": "5QGBDtpe8DZhKSBLMi2TiyF4EWgEYnkTX4P2kQV4x7dVd4Z2mNWzsNxSY5w1KkWJfM276EjGrMwTuS5166Hgsa2x",
  "key29": "4gFMyJJ9XVuxEXKiK1qFi1CsJHeTh4QsAc5essc3ZTLcRp4TfBBZh3qLXdREURKVzofTiN49cagqmL4Fvq7kgF9h",
  "key30": "2GPr8Hr7pRvFuTVPyxs7gQi3zztmNSXF8yJAW26v6gZXUkBMHiucXMBtq232GnvmVVmYDTsP5HYgGean6njGEZD7",
  "key31": "cADUGbnu7yKJkXev74aY8RafxVMHgU2w595jPvQZi8BdWfgXeYb4JFxHi7JtEfRaABaKUR5xFhcPkA5LtRn5bQr",
  "key32": "5sn1BAhsYZBGMfebT36jUomkKHwrFQtnjyDCh9Re8nqfryoGnWspRQHN5KUPnW9PsqK5k6hSa9WuRwTSSo5CLoH3",
  "key33": "pvmqUmxwajhkEo5H2V8tYoDdHFySZekgjDgtSVt54qsZ82dkRB5BQp7vcmyBVz8AaJ8RR6HCCdt87WSd927Nx7X",
  "key34": "2PwSLgh6xWuhX2xEGioKxHHVU1nVhDWstDHQwUDkgbQpb11pVSvEkAV59CtqBm4sejjgHd1LxjMgeqbmLx4c7PFG",
  "key35": "5NE2h4njazQPxb6TmuuupufHLi99LtTFnY8tJNgzM5cWLuCYt57bWnC7DyVLtMpEz4m6YQ8N7ZUHjBXrzZAw2Lie",
  "key36": "4jVUzbCcwpjUvjTkCRN2eBkYrKj1BABQKC9xaRTzT6xVgrWeV8onH6L7HQ7pbpM1w8fP4b5cv3xzgyQeyAsZ6EqF",
  "key37": "2UURQQ6whU6ePnZXvSndNhbHCVQJ4aMHDBGLnphbrHYJrc9WRtkYZuhZtLVQVMoM3jed942Sh3zeRxGKeRLkS7f5",
  "key38": "395Bs9fTwjdW64MpMxnCiNyMkcUfq8XGMF2tbktxuqMDCgJHkCPpNurnq2fPg6ye2NhXAkka2BjiyNAfCTQ6qPrF",
  "key39": "2yeSDFGBAUHLtjDrSGHoefGVAsugnBqAyTNsWw5iFHKodddzDYaK2Fz2GhGvZvTXsjQYpHq2N6A8fBVb2qLtvJJJ"
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
