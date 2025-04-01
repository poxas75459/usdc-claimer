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
    "3Tp78Q41duzxgxD6suuKxFi8xonPn4tLYerqsPZqobTzXM5XPKfuBdUj4TqmNHZrTZBMb3Ek1sSHiAt3XciBe387"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YX5ci5qX6rnqEzvBtwU5sPjhH36zmxcYTwKj6gbXij2Q3Zd6Rd9sn6THFnW1Z625h3BxpbYZdRRLm64Cok2opv6",
  "key1": "4AJucAUxjVtirbiMFMhHuQdWNzrsjaKkTgxHeLrwMTHZ23tbqeHubtBkQnj8q2Xy3rJ8ZpdzgxP8qiMoNUDWeXom",
  "key2": "3bvTxEm6jdALZgEtwENxypDJMNfRjyBFash1aaFkDiMjGe3uw9x9XzgXHhGpxTBxjiDNqUQj84RpAQuetxFHLCaW",
  "key3": "2gNSm5pnSTZ9TniTEH2WhR9JuTp8qyuWxx4Q4zE6hryzeF57HqZL1x1Fg6PuNUuDGXLnqQrzdbL48cTq8HYZzytn",
  "key4": "EYpqhKKnV4nYzr7tsRG3qAFABsvn6PmMkZNj4pMw2ZaEJrCDzgApguwsxoFd995a2C6gxeUQnEzRLpwVjeP1YwQ",
  "key5": "2hdn83u289b7dBzq2vxKGWCgNo7vir2cT2ZQaeZWxnxFr9d1pYZyd2tQv4VMcBsu1N8QMZzULEkokE5XvM5xUycs",
  "key6": "5TyCy9nAygeeNzJcEcDWLwgVgYKgSiV4C5sPHspYDaNTymRJqYBFLK5FjR1pyGCfma7RHyUphKcesVptkTpqR83b",
  "key7": "5uUs23US9EbPy2tzh5NCbp8aiNqFwhTnbdEFd1YSH6T3smD7pDqibwq6ESG9WCvp3s59CW3cdyFbXURAT5jtoV2x",
  "key8": "4L9WkdJWYKuy64Z59HABnG53XMH2xVAfVzoi2NRU8tSSqArAnpWweBs4AhB565pCsjj8r15WawKEYKZv2yYs3cnj",
  "key9": "sATAbnbMFSnwhYvqQunLfEtHXJaZj47CERFVS4QVX3uTChJ1nE3ZXJ56a8ndCQzw87SM7g5CiXk7aXuqRytL8FF",
  "key10": "3FjDL9DxgtwZJ5Fo8d9Fafi2t7nSb3UpxdfxfkWUr8bZCtHCvAirZ9FK5aMtMgBSJVxQcnQ9diJ1aZk8tsNPqZ9A",
  "key11": "3SdBcLfgW86UiHD3XDKEA1E5gh5r8qJtyxeHJ2H8gCyEPhws7dgPm51pfwyr8WuzLss1dduW8akvJEqb8zVJLTau",
  "key12": "3MhG7nBykUtEoorDo4JQu2piR47xKWpWaS6kHnDHpVdv6SPHPRP8JU5hfSj5Nw3ziecf1MN9bWV89QH8bDWKokwY",
  "key13": "58CxmJZjdoU1KSL8UV1TPxyuevcLejWQtg23uDuHXAzX2zYmwsmuQGyJtKwZE3AYAhXbr9XJL8rqgeyJvqAiAgnM",
  "key14": "BPJntBpLQBYmoXJGiU4nZux6pmxnunq4SzprdJT8PS5hi7p5U5uFre42iRWRJLkbSgQjzDNrLzFYsSLiMu4JLAs",
  "key15": "4EJq5TZNiSSgid1cuaBQc4qS4SsrABjgv6XXKC3KYk3pqegLmETyuhjRo4UZe51sSmtpAMCtmvJePPCDpdWud7rE",
  "key16": "4c3qCSRvsjYqjz2xmaVRZEETK6Dg8oj4nxsRDsSwB9yeLahyH7od2kojFgHGA8NTorNaofeCUSJsxp8RGPXszBCR",
  "key17": "4C2f6V79edjNbjkrbPtByvRKonkoPMyVcisTbcyBBptKPBtYc98eEYtR6nD6r7YCG6v3P4gGTLdKbZAHwQpCNaAv",
  "key18": "36pDnUnGE2WtyFcJs9ShFr8PMzeJKZVCJKrRr64m2hFLBVbS3GBZbwoyBXaKPJBtUZzgjwCRRUSN82wPcX1WjrAV",
  "key19": "2zF5GR3viVUcMsobjiiP22SpnQYu21WMa3UNPQvTY575ZWrBxBQrrrCTaXCrgRpJ8Ty8Gguq9NskzmiNZApypvPp",
  "key20": "343dQC3d1fuCCjpeRzaygsnrR659rPKdHByWpMo7LdUuzTpXL1m56YbtA2TnneZFENnWkbdMsUhTjoCRfSPLALYZ",
  "key21": "2W8ksTGZkuUKw6SK5zXWQdWq5zTr3FTGhCVzgqkWXADUJ9tcDr4xswXH7iSCjD9twsSo9f8v5pR1zrAeXs8mqriv",
  "key22": "2hzzC1goKuQQarRJrhFoLjJu1wp9TEVvUBivgtbF3Egn7P4aiKQRZoFrJ4dcWmK2LZZdn4XtkJ4jpLmjYroPSEHG",
  "key23": "5zcnY1Yv4fBWsmCCVyxChUA2KaxFRfYe56iQFu5fpQdgRCuBMhH4cbperCgNnzL86HMm2kiPEfpFBdwBPax1BwZu",
  "key24": "2J5vH3f6G5EjdAcjNsXKZj51Hs8E9MD1ZSEjKoVWmKmMZDHcrrWG2f6NLmKd71GawrQW3sqFcJLXc6ZdSnsqGJVi",
  "key25": "4w8o3XdYEASXnckYwr9LZbPEL3FJqckJJSfbBDVFHDkTEieiFRyG4jJaWRGViGvWwhkbUhkCRFVc4XxXLQBJP1gH",
  "key26": "bRaBo9eQEsnT7AzDp6gPbBmQNEB6E1nk5hBzoaUcHhp7VRvcZRAy3C3aHPiwLVH5WvRdKN5TBDkfZtJu6PcmNvv",
  "key27": "5mm8mLsskoyNLpMBkiuxaLgFJy9zthz8nNxPggC7jFFuLurwpCbjvymqSVh8YvtufyGNLxssWitAVTZMhpiXUqq7",
  "key28": "5V5kqWYneZ6hPX3n9JjvQpUZuENyHdSpPf7ouVcGds2J9QHGCmNDLerB4LnjkxCYWKu4G85ko5DzF3QtnW3kHgyo",
  "key29": "5W4NsyrNFpVeAMFH8tiqRArLP69GdiyYo3bCQjPCvVxkNWUAEV1eQCR7WX1q9ntBJf47w8YXr2gkA4MUcpZkt6XL",
  "key30": "yWWo1YXUcGAVuguLdUxd3tCSFxhDsARokGpCyWjhQxwy4geqab8DV9g5xRW3haxbTmz2ros3BYVDDPQjp7bdocs",
  "key31": "BazxgiNsY9uCViCjg5Hob9epP5imDFbVzs9g7aTKUqvvXhGQZBaeQWcYE233Zh6WUkUWhLNHhpQ5e1EbyjxY4LM",
  "key32": "4yPrnkdLApG18FPZtdu35M4YCSKVYiRkDd1eJRubr8XSXhSrdWpNbqxV9n1SRCVETXgAHVKeTDehH2usjGicduU1",
  "key33": "5odF2C8EdJnd9zMgkLAVe8uNXZ88czi6DbCDiWGG8irxGBhrqp7hPzJe6LAX3VbwUKvGDdMVFRgXJRBgzSq8QCXz",
  "key34": "2od7uUKFuug73fgSRLCpTyCc5mtbWqUzdnH55BW635SLrrCswTEqN78bQAexPYvBw1d7cr6gU4cvGymLf5kH8Wx3",
  "key35": "32tdSZqn1aN3wfg84Uvam8cbczty9FqUTjSqqyrUJqbkvWrjdE4KxjNnNZ2ph61JsDNoWmYEKJw6CKxcKgXExcKw",
  "key36": "4hDZjGyVzYWkMoE2PZigzavay2ekZzQ81t8kMMunETxuqn5nH1ypiGmPJfwudwxMz7eM8Uvjs6zjbwpQfnipoU61",
  "key37": "2jjPRbisFxHi4bg4LAALHjZRFPaBf73XXxu5LZAu7RG75e4fEopH26m8SdLKt88yPRzL4SmnnewMae7RM8jbbfk",
  "key38": "EFy2eC5UQkJ5tn2RMjFouMbVe6Wt3aXKXKr2PCg8uqwWCCRHBtf6922w7toZx8m8rKo5ADJSKpADVuT6tcAxehJ"
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
