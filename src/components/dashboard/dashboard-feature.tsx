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
    "27WWYmyGb6bi3pXasNW3YvAjb9vx39FBG2NnyiCRdf1ZJMJAdPQZnrvovKrjNojZ2g8jcySUC8kcXJ1SyBFdhZrr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FrPW7RRdriuvW9T7wLYW3aTqWMNQVwwbtomTVW1oPoovy3dARRhVxD7bg1Jbphx91WVvDBKQ2mcknW1X7JbtZHN",
  "key1": "4p7J6oXaG823XxQmmqMAr7qVJTTjX6ZRxjH4Wcd2bcKEQvn7H2rj7H8kLA6THnJ2SYhJm48ncDUAweYxA6a858sq",
  "key2": "4xdUL8NvyDZhAUwGpsYokQ1uB9kywvcKQYz7UjxsPimhBZkbbnu6ii6MLpWf5UayASQ7NRipyQghyiXQvSaUB4Qi",
  "key3": "4v57D2THeNhupLvf9KWHkJsUr7BM56BW8Nmw4RQsg7Mr2H55RPo1kuKkryHc6PNzS2eq3tBGCkUpHDX2k3PEC8Mu",
  "key4": "5yhex8kpuDaGN1qMiS1FXUgchnA5vjpk1Qj22oWNqsj3pDtx99KPGBQwbXhEcQ6Awr3xt4f6vKJFSPBqveYdwtbz",
  "key5": "3iAgvofz5YzXeYg3xdHW8j6MBkkuJpsLDTWogTtgr9JtCKA8FR4uKZmQp6ztnGWKFuaao3rr2Rh6fSHTKQYwHotn",
  "key6": "4NPehT8skvcyqUtkP839WbZj2jXA5RqgBqZPPx46Xtmts78s2e8CBGMrZFGVD3cvPbTGB7zyR7xdnL4k7goBH2wK",
  "key7": "4KZLJjx7Kt1RjM3Eu59621f5aPKXqwUPvRjd7W8wQkvjbLrQKyRdhk18hcSdAnyWAmMsBhK5ZRBmLKsMBFXHfKfg",
  "key8": "5GHrKN4uD8RKJY4SCqTqD7gTK7KZHcVTNLWKqjW1oGr9UNAnzviRedAXzhyMHhx8mXCw6UUGQCtjeY47XgKiyGPT",
  "key9": "5sCSU2GY2MrGyyvnaJDYjPYjXFkMa7nzUkofzsumokngLQqQuKgWZ1hVbsiYnBnn8ww5gC91inaVygdcaYDoMSWA",
  "key10": "2TVSgddGGtGHZAmvCmvTQWQaSwHsqRZ3ZhKxxEmE4p8uV7aHszFsVDM2vcvhqrKrkPxqZzisfBBMyrV7snjb3k8c",
  "key11": "5yPxdVB5oSqQAf2v1xHy2Kq4gsu26YoZFKiFDGkdYbHsUuXbaRWpGQqkHq6uLioRB2KMhNmccY3DUZvzHLjQS9Gz",
  "key12": "4Mk5hKf2or3D3dtCaJfqv83PqmHK4i2AuVcuoGwiGsvoS3DJovw7VtSBWQz7CsnNGzUtWNur7vHSMMR6pNtVSbdf",
  "key13": "46ZhD4JzcFsLY8JwrWoDvGrpHhV12KLLrB8UBqtLnMLts8EGrVPrqd7gEB5k3LWTx5Tj8pL5Goh645GvDMiuXLSU",
  "key14": "d6N8qNzX7hHQogSyc9aTz9WWXdZBPRBJA9GM67ZPCpt8QzJFVcLUnFFUj99FeUHsSxjrUXaxQ229nAaK3JgLAiE",
  "key15": "271gi6ztDyLzUDdZHWioLiLg8KPJ9xKyhkCz139ujsdKDyp2P5zEL9Jj1z8VpAubsjBLamZYcV9ZyMhxPJsUpiz2",
  "key16": "2uF8P9EkQfpcPBb66NPqEX5J97ZCnYUqig6wNt2DHuPoJeFTyWoPqoYK5y1roT4XSrZRrhjXsVdYAt28ZVJpRk9h",
  "key17": "3HAYGurMU5vbrMRzNwDVpczCk8PyySqLoF5b9V1bgsCuq3NXEhwwP3PGL33WBJW2qQ14EG4tvyVJRZ8NYV7dSwC9",
  "key18": "5Z3x2xtHe1q22mGujVbQ27P8iJdfu9Uqqv3zKxr5LE5MH8Ax9DMkeMexRrS4FtKYkn6c72VZ1QwQ9CKaxJEmAUtY",
  "key19": "5PdmhSoRd1m8SEzomGcxmNaAk7bcxjTqD4vJRUebLZaatmFw2z8chJ5Nx9bwjYseBoNDQvzc7U5gVTsj6SZmkHED",
  "key20": "5bAzwGiK9Z7zjHpiykuZaHfE3oKqr9xn5fSDeCHLkVze9GZHMmkVjFodTQueNjUK9JwpwG3pkNuEWUBhf8Kfb6FK",
  "key21": "5fMdaba88YN9hV58pWkNndx2atoktaKoppr93Z28fWSW1ZFwD4JG63w6Ck8A2hbXwstLpY1j6zTWKAed3S1xC41Q",
  "key22": "2NKKtUkgX7YFQgUGg1NeYTDgxRHjXcLKr6fftonokvm7vF33AEBy4fhXHVZ8ijh2QJP6Fvhi1Chmq3LFLnq9H2eY",
  "key23": "jDbRkGoENj9geUSTsyeXenvhTX2vfW4hScDYjApYPzMnSZr6TWexrYbkEbx8JDSGn5AwJhHg8rHEZtdgiajhDgS",
  "key24": "5jRhYXizduksDCpWPCaiF5sbVyikyfsHo9AxuWdskcVW2GL4SZmfqVDq92qsJv1QNQRui781uz51Bjjsyauj2L16",
  "key25": "3b34aDbGh5njFKhK3MjWSJD1zQXf2fxkvKCaVL7bYYxdVn3mCw9uN7sgwwPkjgHLFZFy4mQUAJVsccGXSbXGvNgf",
  "key26": "3hLp1JyR3doPqGD3W1p8BykCDY2yiq9VDhWzZ7m7qYmFhwRw2g876wLcNiQq37E6jeHrfS3dyYqxBHinGR73LURv",
  "key27": "3XmNHbgbocYat1QQoidp4fQfSA9gqqib3hatkqiyzJmFwQYtcEjBAsJrYF6C3RgmjBunHmqPjXqBLxB5K1vTMga6",
  "key28": "44uvWzeTEFLpyj8ftYqpGi82fNYTn8zxCWxDSdGdPgVMWobbcvqyU6XiiGukGHyJJjyVuMd6QPCAYeyjWrRwazWP",
  "key29": "2LPGu8QukVEZDwY3X7SfwbPDXTuDpCQqzzizZ129JbvoHmZKJjxAkQoheYP8ak97RJ6iWdaMsbRoGioZ3d79WnfR",
  "key30": "tShoV4XrGxrB1djwdsrvCNrLdD55tTB4pxn7pL7rmKdjtu8mqFeFMFeiyEWEB8dXTqxXTBvxXd1iWZKQ7Ho1sCb",
  "key31": "29iYNnXUJz37vFZYMk8PBPmfosuGXhN4i6fovaVxLg7BmkmdxjAQgJ4RheiYTTqDcG8yGL4gWpGGLZosKXtkr6f6",
  "key32": "5JxXZRLB5Yz4sBUMaAdXxv2yjgoiBhpCjZkXUKYDYCa7bsptKnxh9KRpJJfoLD8RYC8kHtXsDeArSu1TPw7hnixX",
  "key33": "4xvyBquzLLcHMrKE269My75Qj9irEf99yqhSUVziJEAfkxLsDZERsCKfgzT2tpmVgDgei2PyepHpW7VztXcYpACp",
  "key34": "5Fsu7iQfdkN9SAMhQSFByxQ46buoPD1TaG4hmwDrXrYLWqM8znfFh444Tz12ip343bVHPTMnMAKUU4FGcLBNfG7R",
  "key35": "4TxwE5d4GMSW6yhTc11FCEsYV9Dft4EyfBPMqytQoqsBGjTZxypeakCQ9UgxPViVVUeYmfStLEWQBLaQufFfm9HQ",
  "key36": "5jd62SKMHCp3DHhLkeGTmTazqfaC7s55LJG3N1jk7v9nUjA8DwNsfdonSf6TYiPNMG45zAbyzuNhU68TnjzX4j7m",
  "key37": "r48fzVs4Xj4gmuzZP2QZX76pTF5fZQxhpCFURDoRYStRxscKFn5zQ5aa4LKSSAQwYPZzHEQxYbE7DcaArqr7YpR",
  "key38": "rGR7pzkx75PwL3SNrhS3R4dRq2jkoQuHgDEg7xqs91UNyjmNdyPPCYMfTwvztR2p7bvd9gynizqLZrfcSHrXkgK",
  "key39": "jsxvRrjfQntFWoTRYVk7mrDeHAq8m4T9YB6xDQ78xQZXdbVgWVy3JaRj9QZkzJiSsQ5TmurzQwNPNFwsuVAvyjw",
  "key40": "2uGBj9npXP2VtNSDVq4ajXhnvUBGeVpQQCLj9t7E3re9fiwfXpVLLqnrhj6kCByiW3NuopCeTx5KTkuGvLbpmT8r",
  "key41": "647vGW3icquLHj56xwnrPmJM1uLuXqFyzm6B3ePT3FVc8drEVFsYMh8NEELAuYPQDZZrNidkgkfLfKghyJZ3PwPa",
  "key42": "2dma567EP7JwDNqrU4XzRAJvFDpqaRQaw1u8CDG967EQaBxV7hsSVhPKEKh7QAPubHqdUd6tkMEAxQdLcqS89ojy",
  "key43": "4jGFkTXzu1hNSLRovb9uGDC6ZPoXhvYjfp2ftSoy4g74sGxWBVPTkuVXyjGWGWw8tEWhbiU95XUKBVNDrzTGcjkv",
  "key44": "Waa7iBD93iXG9Q11StHdHkGGAaBrn8DNN4rjx8A21EmpF77k1dxn61DkXr49iaECDM7X4vU4qXpHkXCqtYGGiEf",
  "key45": "2rkb1cebnmF3ncsgtTRkx3t8AvDFSg5Wafd7o2RCYrwo7aEG3rAekwmSaqHHrjehDXNEBmunZ93nUVdSosJnXJaZ",
  "key46": "2416SeEGG77oPnAVC3Qc3ULSVdH8Js1p1EW3iaGXQJYkFQTytHPk5thHqfFvUjqJtAmfZCkB3iiUEzdeiUizpT1K",
  "key47": "2aAkXQiubR6yH5skHxVJYu97fBWccwLCQW8mziL98Cp3vecDChPREeHGuQmJDw39rZKicxdaDsHGzY76EFGVDGAh"
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
