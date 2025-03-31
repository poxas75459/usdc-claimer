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
    "2QeQ58s2uYPhztNgbE6anNXeEFpsHUKZskQ6418Q44aUQZ2MdNNvcMeXaQpmrCgAXHTqQVxNxscbgehe5hY2UR6D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZLpKsgpsictppKYtxesukZLSzoy7AbiuzWxMPJG1gGvX55Rs3whf5Y399cywteLVMuo2poL3AwkWtaBD27e4BQG",
  "key1": "VLguqeaSQ27ncXHeboVyuiSewNfnaeqQWQrNrDzkwAa3ivSYLbDsyTLhtdNH821bScFMbbcJ5zB2eL2yWpzmhg5",
  "key2": "r3Au191Dgg7u2jy8aV7LRxgNwhAW6ox9guvBeRRUM16qrxvYYDdMub3yoAKzxArab61o5TWN4qVBAvbLrmPh1Pb",
  "key3": "3AjKSerEiNPPikwatKVGffic5cCaEHZEz3uiXRpDcModhChoduvhkyAQMyv7pUSMSR2KMT1MksEYf4x7XxFqKP8r",
  "key4": "3hsdiWZYpUqryuJNYpwnVGX15Xf1SXFF1HVaUTy16fUK5PoU6VV3FM3NLoE637xzDji9WirJs754XBqDTbbfAPbJ",
  "key5": "bPfghmzh7Mji3DkL9GqW5S7R29FAVtZjpVMXd8ytsw8sWLGeZ8D4uYQhPgxsE755q9zNW5oBBDKkCjUA2To2b9M",
  "key6": "4YWcNvkc7U21SPJV6BLYbVvznQpkBPAusvrVbifrnrucvVoBAezXPZafQ1sY7LCQypGXFkZoKFSMaLP5ELujhbzB",
  "key7": "2bE7EfxCr6dxrgV62kaBsSuQ47YdKg2GzhZbNPRrHjVfZnPTcMdx2vpWd9y9JkjvuYZsUQZdtDBhtqfbtKyyJYDz",
  "key8": "5gz8rK5CSBfeCQwKMcoinTQpK6qG2nsHsgYowjxH6kPWTKySyetzCL6qb2YNJ6FNLgvvcCTLBZDTrfgoffunDFCq",
  "key9": "55tj1udMwRZ9d7biRZckhGtX2p6ZGEJYum8YPXwBLDFebJo2mzW6gVSBv5NJLuYa1fKgagmK2Z6uUvjhHJaREa9X",
  "key10": "NkpSY8ZsM2H3xdqkiHKcpUrWztTFRE7re9wyw2z1TDZBkcWcRwyvULP6jct8XL1X9XuFwMQBrx1s7koMXYqNi1V",
  "key11": "5hXHpkGjXmSJ5dzPJKZNbreHMzhScHBoVoEoubYWJ4YWLW4dvrNETQfZwSsvPh6XR5gXAhbzhEgyy2G5QVFMAPQg",
  "key12": "qAAnSQCqRQeoDnXHomNWHyd3hYs5yXwT3nEaa36P7WcjVD2U2SWW9g8RygwZBxoU3ruseCFQe2UxwenyFhXtMx4",
  "key13": "5gfcBzvKeMsEUaG96tS4YRpZ5qjVPsV29yBtasrXn2TUEH1gGdLLLh2HwhJ58j4ZPXRpBpbd3TGkLQic6GcGo8w4",
  "key14": "3g3SPqrwiZ5pzUGoZv9MFmJFJZsSQLGuQDAzKWFwhqwcrDQTWRgUcfgZqoVDQaecwjSqagxLQocUBP4GKjbaTRW5",
  "key15": "3D8zhi2GqL47dMpuTRuEpL88gWtC7Dy3LM2VQnWS2DuAm3sYVRdZNeuraWDAVKD51oT1wkFABY7GDZUQJenB6xpg",
  "key16": "3XRnN3Qy3gQj8rQUuqyfduuxcYGtEqx1GcR4eECG5Ntoz3efQGQ4FmujuhkWwF39KQnJckZnqzTFQBW1CyVeDzuG",
  "key17": "3t6XScw6AUaf1TfpkCJatqRWk8YhPGTtGqDyW85r3ekGSNiaQRvN3M62anMYeW9EadGcG7LbxFUSiv8LGATUuBjC",
  "key18": "4Cnm7zJP1GSdv2jdaJ97Q4UQELcVnH56QeciU1e1S8HZngL397kC2xMP9Bzsfc61urUqDWoWn1inmERepzpvMfKW",
  "key19": "4MMx5iFrpgBoZhWDVRmCWxzw6JXvdKupWoKpYnfRZ5tqcczdoxcNrtFyADpkZvDqp8L9Qyx2SPFZ4iGJaBhWUo1W",
  "key20": "5gfiLVCCxHDjY9gGoRRiy7uEEW4nZyRBFw8wmU69ekMhBaJpKEtCqZ1nhfgm5wECyzK6LUAzyR9jDDvJP1MujMgE",
  "key21": "chpDMttE4cAVuxwvPjMznY2JYXkFNqStZ1SnAriN5QU5NRtD1TJzU6928FofoFh3mFtZWa7CSaJCe6gKNEdqAuq",
  "key22": "5z6yWfPfrBHcQFyskSyKQut6BthH1rNnGDq513TCk9GLpUXEAedBk4qYfPNyRdUzZNvqhxQGJfvXKRrKhLGDAMhv",
  "key23": "5ZT3L78etkbj4hJKToBumCtJiZPuuAMB5ebDt7cfZcRKYKvYLwBf7mvr6J867RQ59KjEkknuPWRVZUXpT1SqHxBu",
  "key24": "48hczgbXhWxSJdYN5b5ruPSQqKZNanPRL87utUb1V3wFQEttD5Q1qdbTUtoqP8xe1md5NPFxjZXcnvsir9cS75j1",
  "key25": "59S6vyhdYLGiL39B4rmryaQRGzFzGR1P3r2SEqg6oNVRXk8j4BFKLJ2nPDHaVBfXgfKdb9rdYHFuntvWS4GUzZe3",
  "key26": "5NmqXTGBum5MLEjiW3NNLYmfYRa5sakLrS3uP4ZWDTmsdVoNAj2B8tMB93PJGrB3WotPrrjd2vhvDuEcH1ZNdk4t",
  "key27": "J1TjNemHEhbj28p1cLeuDspnHgRoy2BD2DEESD6nsY9cgTNAH8qxtA9SNw3ZJsTRQdjTdZE91zK1Sn8PhaNEy3d",
  "key28": "4n3S5D9aZ7Uzo7RdjNyeWwjvitnizSZKaFUjZrKxB753Z7WvLu9YDEKSR4biFPDXK8F7xEqj77Skrva81At9ahaW",
  "key29": "26Zjze2av9Se8oBsibYTVnkadyHYy7sDLP75WjWmZxmSMTPiE5oQ8ihNVTCQQYvvLBEiUr2nxkKffTDArEJCX6E8",
  "key30": "5ydxJgPExXHAPRVP79MhAexU94BSBPM39HNgtdsXrRLFkwpWNYa36wsdEt9wkTspT2v8Uox3GpAYU4YsgfA3fxsx",
  "key31": "4kVZxqq7CfDod15VBbqoiV2XaBbbUy5VVb3sPv7bwPXWfKxxQoEPQaY2mFEfVXMuXX4cJ21ZJpzMjLTfiWryUbys",
  "key32": "LodP1VYfMaFK1sRQBkh6UXW29Hv7Smj1i6R7xCTi2nNC4dwyaywVz8Q7voZH3j327uSeWHvg8p2hf36mu9brXZQ",
  "key33": "4nD4KELoHT2MMDYZGnfnjbQCVTAd3vqhe1o7HpixFCN7dXumt4MrtL6FvmWuoGdZKfiuW4BLuSmNDGYexCHXGXHu",
  "key34": "3oG9R91AnEqQFCADCQYdm39wGzqAR7nVLF8Jn74uv33S6oYTdh1vm2qdjZCej5qy1qGwdYbUqv3Ua7Gv8McMiTbj",
  "key35": "2ATrxQi3XExNNuAYeEnuEdiRVexcoFi7Uknxvn4UQ8EueCCJUX2HNTJuhNb84qrdRJhcKBVphvkcgD21eTZHk9ZX",
  "key36": "52wPjnDYiVunDL594E6j9ZnSS7ngv1QA9bMTUcE6yPEo4gx1yUXwfiiGQGhGN3XZHNLV6McrCyX1fKVjkRT4DoQw",
  "key37": "3diAoRvJstppoUC2TAV7We7pizd8wSM9iBbPTT5Mh4gafFgFtKaczsbJnm6iFNgukD9NCZhUZa4RciE2DrHTzxg9",
  "key38": "3iXsYtHwDRGVQijqvXbvjREgqLMYM86h4WvFtvWWZq79CZ2YBrNkQwYweq4DkwkUgAzwu1xbB6exKnDGZzisoij9",
  "key39": "51QUyhyjqxsQDDbUSmfoMwDWgmQBByZnRWsk6wSt9vqbpcmMbe6ESkeR2Zo61ZEHcQkBjBreDCmoZRkfChvCGaUq",
  "key40": "3Y552BiyDp3rEACLN4XSXfDMBB8jhKtX8kwpPwpBo5MdWmJBKVqRpV3HCHRrKbqC3ajKC7kTmZ6r4M6TbbMVKQxb",
  "key41": "3pztaZdAGHaapUNShyqwD72gF7HxBfhXjvEkgFBAoL1uJ1y12iAtBha2fkZRYZMjv4RATZrnTUwim3tMWJPL7r48"
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
