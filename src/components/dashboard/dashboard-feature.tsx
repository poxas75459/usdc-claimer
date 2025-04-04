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
    "5vBeLEdTYfqt2o1FQUxwjZPWYQ3SJT1hfz5mW48e9kwteeEzeMtZkTnW37Cj5D1e1QNzv6MkokgxSbm2hJDAshg7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gcSorSRuokweWdvY5gZCDoMwatDmUF2FzjK5xXDA7zmxGPZADq8hwcbHp8Jq5pkks9RJmWpmH5Zr2hjbCfYAEXN",
  "key1": "39KnM3s5UhafzjiMGwC9B3JC2JtPKNzwhHXa1jEhKQUr9hsSnMxj39JNTTWPdK7f4aQBN3RskexEkBonPRGQPND6",
  "key2": "3Ej7W9gAstENEp5yAy5Cts1TRkfstKd79xfm3XDHrDEP3v99zLp1e17fHNCxb3SpA5aXDgcNKiGbYG8LeR1VGbyr",
  "key3": "3RPzKQpXBBPTCPP8ZjjZp8pi8yhj7B5BmZpBxfKGgpTFnZiAXtcuWW3MZ8qgrEC44xAsxnmR4Cjj92a2TfMWixna",
  "key4": "2mvVQaEFW7D4YNfmf8i6nRQDrC4SVP43HcsTF5D7x7KbjW72eUVjxqKdKHBdQzq6t95sPDXZLGJ3hqMQ6qF5ejtm",
  "key5": "5gzjKxNDMTXpDERAsVbXghH7iqCsA1JcUHqeXriVyNyE2a2WF1G8V6VYRJjWmazL8SK93h5fRPWELGaEWJjxEPU3",
  "key6": "5AP6jqGWfyp6C9orEiFcek1MgTJ5j7ekigAFTYdz8ZzkTgnQRBnph8KmFwb4sDVW23r6WH5H28J68wGDodhYjKun",
  "key7": "3Sw5Pn3nfrtPGy5QjH4d9dqac3nYNKW6X4WHqNNTr1as3xwNEvNM1rS35rochMZh1KNcXAJmqprtQ1etbB1fg9Md",
  "key8": "26L37piEzEUjn7TmzemRjE9oTvK6zt9hkaQhHd5y5X1VrqaqMzYfNjsXXig1mmxKz3k6fpq9vHFULXkuwdzf46fY",
  "key9": "36AjRzKx5JB5vn3CshZYhJjrZPBejx6epZyXSd8km8u5ctx9whqqxAtvfh7G4oPgeuZ4o51o2e81QjQC44DHoa43",
  "key10": "3v5n7mFzcm2MbubYVupNY2H5ASyeF6P5h4JwNnbMh2jyq6zbCA8p248yXFR4coRWM9tyHJ5gafS7EBzjMsUgWREW",
  "key11": "5sFwSSuRXwY9NYpQTdyvntJjbGbcbZSwbTTFjjnGfTZaqz15BZazVPAhoxpf17LWiNgSwwvG9gk55XgfcPjaTXUd",
  "key12": "4FGJXyKQFCRtp987CT2V1cpBcdgYN8K8X5kFhn7C3qKdmmrkmHZ3YaVN43po2PBrnnS2oHLWiCnuY3afCzKRwvLV",
  "key13": "1dCVyoH89xoSserRJ6zRXAcZiQanjTqzon13zwazk3SWrATFRpod24sTbbE1ynh26g8FEXJAcoD3gS7UWz45yVX",
  "key14": "3P6iCVa78dfKsxocJcbthnkHEGZVMkDAiXGerjA1pKXeBFWBSstFe45RQpwtupEq1AdirGtT49cGZXEsgZepK6pi",
  "key15": "RTCn1naFBVT4uavVHVvjoYeeHHD3TZWqrPod3qzxviwuaCaBy6sy9hwQYB23TUeApkUQJvK1AaZFoWHozR5vbrQ",
  "key16": "3emnaEBCwXUPKVcn5fZqVGX2Av4xYkx98wGegNyPwPGyUXGN9kaVVezwSmj63Tq9RsHUUKwxp2moeCXS34aDZsvJ",
  "key17": "5ScpNbVQemwhrR5wCqDThPfGo6nv2tfe9sFh4bnkAvFf8ZbCuVbwDKC3NVMCwr41rKDHe64TojV4qUB9ea8NLuow",
  "key18": "H7UsgQbke4pATMXuQkDEow1PXVsmH2bCm8NG3K8YX5bTYQs9L6fZK9ZkaTojiuoWQknZ8EqiBFgzBQBfVST71X4",
  "key19": "5y3KL2AQkyrHDf6HuqhS3MVJhZACDJFt4eaZxww6wCpLdUc9iSZoBL7ER2LUdQMBySKUZqgcPwuVbkzhp1WuazSP",
  "key20": "3x6xDyMp3rtopkkNQVJrFrzcCNhykwE1YRJ4GacacWmJthEGoddjHzu367uafLa1wBuwmr5a2AxkL9J2HMPnAq39",
  "key21": "4qacKaNYMjKqTfge1znKq8NLWqRFZzN6e8AEBukbVtvsLvaeqbnkcfLJEVmanmVXPLoJ7hXSEsYNeCHFgxw8GkAH",
  "key22": "5xXzfs6pv8AX2HnnBxhoeN58HvrKMZgCCCuhpXWcbh4A7hbDykTfmRgMDqt3MGebgpB644skxXg4deGDPwU789BM",
  "key23": "2epD1Wt8NJjtdeQHKfNUMSKJoq1iz7xfxUk4duBog7DXxkfYxxqfC3PnE7XscYn5JYiQuYt5GLqcNf1sPg2Ci9iA",
  "key24": "44nADBqSS9T3MLJGzwnpGu58mux36kHShMYRK4auP2Twdcs7RtgjCR7XzkDXNBkJWRviTWaP3WfceryXc1Daop1R",
  "key25": "2FqVkW5KTCokeR1vYgbJRVbyXty3wQmXLma94peyvad4kh3pbdUppsfSU28ekTHLPtEqwhRaBzZYEWtmBi4MSpcy",
  "key26": "eQPeQqpnPGXU8mZjydvPXQGsE2Vke4YyxEhGrPqJ82rRK9f55hxgsrnt7wtYYRsL6N4ASeG6rzBY9iNcu1RkUrA",
  "key27": "2L2UMWjr5w6dvjWMmB1JMbMAG7LiDNjJiaUPeXvPREKkc6iiAigreVxq9zCrRxAAXWW4aSjVXW6QW4uqvb5tSR8j",
  "key28": "4WesHAt9VZ8Pmxm3gJ7J4AFSXwjqb8JEfviV6KvrynYLjPbE5fsmWZ3uVqVjoQExjeFibX2CX2eBVmD6Jhqgt9cV",
  "key29": "1vLQW1fhJwphnFgeV74wM2biw4nWePuc6mfS4zkh6aCjcXM6Acm9tqjX2m5x5RQDy1GpzoBAPfBkggsqYTA595g",
  "key30": "3iZrNtNCC5KBMFKqHqGQijKt18czXQ4BtFZsZBX4pv1zQawiNCHTaREgwDU2i8jzzLezhLzVdPHhq4sBUUuyoEfu",
  "key31": "3HaknjLmeV2YeofH8H98MY7HhcurndWuixbPFyvJumWtee3vWHMCwsATHwwqehgudqbuQPf6yjVSqLJ7kFzx7MAB",
  "key32": "JSp2dNBSJpfqSWaMe39Q8J8bWWuZ97wFmPNWhTqdagCrUq8xVsSLK4aoEmTXeGkUeWPy9XfYfjV3eKMfw9EgWYJ",
  "key33": "4SHZx7PgxSFkGnamHreL5Z5AabQi4mUyUdTD8MfaX5muhvUq795joCjkohDEabugEBynTuTbJHbn9WM3dn5ZMZVM",
  "key34": "4jzf5FEbpJZMq3JtcjqhVPw7QFDXV8w7LyiZ3Kf9AN4SvKe8Doc9zj7XZWUoLu4BYBtiSrvhCqTZsavkbPfbw5zd",
  "key35": "3Pqfx3Y9oE9EZKeuHRjrZ2WuFy9N7dzuFu5zMfi7Ks7aYEpCA28An1z48pChim5YAHcPJxGLAfSibp7rDyWEsd73",
  "key36": "5ci42xvp6pbCp1d9DJPEBV2TXhcr5ZffypYfCZbaBLJo6yYYR8g7CKcBYjj1YcM4FvbUTwtJRiVhfUUfoyLpFKnJ",
  "key37": "3p7tSeeW1Wxkm5C913b8VtfAST8Hy4gdL8qjWWL2dB5gCmXkauHngRaTLbBTauKz5mLtTvy7s1a7QCq4crL3TWec",
  "key38": "2ca8jgsmMdkHYkpYfvXkSXvGSs2Y3JiKXYckV3F7cPqXvCsFjMr8reKdZGiZDXvp47Mo2ECR6uQKXX1f6vLDGdAE",
  "key39": "69JK2ra7MvZM37GF3UUMXhTZNxiV85sDxBNmkYuNKkPh3T4tjtdpHQ9e5jLiT863KF2BasfHbYjmFR8Uk56KZpC",
  "key40": "2RUk5x5dDHfzpd48w3TaFRFhkX5k49WoLbtzN7RCCzMauorgjY7wubmKiDnqoYovhSDr9vbc1aWYpxt4zybhpGi6",
  "key41": "4tp83RWga1n5WxP3o2ZaFWLmgGMSg3mDnn2RgLTink3UXzdXtvWov4QWYdAErY44jXt5sz87rvbUHBLP2ihDUGx1",
  "key42": "24imQqD2p4Dke8LaJxytRwTZEA8GXn2nz8zWXyNYEJ8HCx8Sxr4cVqQKS29hC5ZVPnM8tNDXB9LcJ2AM21tRPW2Q",
  "key43": "5fM5ZCLYZRpe1pzr3drEzumba12oRdAjo27Qpm4wCEeyf6vnWdwtkdj41pxW8LYAbFGY41sNt36szTPfpCdGtJPr",
  "key44": "45PuDet9hfcoNCwF4xhtw1gsmY8GLTSe2WjbjRj6e5J7xGhbVznMGEBAfwmuHpHwSq4WX8cWjTkTSGMoW2yAKM2Z",
  "key45": "4Crxi8g2g2SuwNwFBMqswKPqnCXjzvYWtzS9JZqSJ9RpsqYSVej16UV4m6SmBENihW3oLNTRspWVhAiXV2EBkzw6",
  "key46": "5nJbNCuF4jSwgu3PdmxhVfJtAo2XzhR9Qp7q3b3RKMmvjWw6w4FuiPPBXcRagceuHLn9SQ7hE6cEKhBGKPEQjvUD",
  "key47": "4RaZ8sK3uY8exHVpqj5rh4xpfjbXaAP9ACWSW2KQnroPTv6NdZCSriCEE63HSWnTXYr4Zn1QyyyRR26kBRoa7c87",
  "key48": "3YobGxtAypgzHqNoKhsDsaXAH1GYbz3JetZHQaK16WxZQfHoJiomny5LEqut8kzUAkG67H4sB6vvHTrJfmPpoN7x"
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
