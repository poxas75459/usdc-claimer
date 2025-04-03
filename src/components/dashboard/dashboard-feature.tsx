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
    "4LmXbpqPAKdp2xm2gWNXzMpbc4ozgr9fEbrCtEJEYozSuFD4TQEutyj6tqPFisqny2ngYUH8xKZcZSmFZnMgzBFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dpxCs9x6uzeBcwT11zstKPE5i7SJSBDiaWprS5MExddVbU6PXuaXFNTpLYFXucjNKLVesSqEt2e94qp4Lg6tD37",
  "key1": "6BWtzNWkMdX544EPcEC9eYrLjJJwHZ2BX95Mj1fKHLkRXmMN8UGxEw47FfDYG7dTUZTR2NNyZUStSS3F2s7NqzL",
  "key2": "5D5zoPzaQRxJTCffF9T4wcTQn12wU2xaujincewS4y5Xb9bHJDZoGkbXhY1p5MNF851NmSecFsMpzDWdXRFZ588J",
  "key3": "5j3R5mJ8D48Sbyxq1RYG2dTxTtLFp5TryGX2Fh3gFaVVqRmrsLzQNi1V4P8oWQoFAy1sHoFFpZPEJY6XcR46CHD",
  "key4": "K4nEca6krMc4Na9pcCHt5WgrKoYrWuU1x6ht7D7TaZ1E5U4zn1B6pQUgDNbyAFrddobHRkDnZ56gYt33T7D1Mah",
  "key5": "2TKpynT8DzrQZT91AcBK1rRdptorEg9YpUbEeavcJb6NYNq7QV1ubwH1wXZCzrKDf9StkgmWZHdhFM3PsPVa3Pgj",
  "key6": "2kvEzFBSbnq81xtoZ9m6mXirbHPNLaEwGd4mK42oXwEw6xShAGXBrGWmv8FWm4pS3K9BSKCLEzXr6pP9mSWeXXW6",
  "key7": "5pPH8ZgvquU5cUEi4cRxWtiDJhAJNSc9fYBP6meRQT36uGoKPB3aYWKiwfKRESYfCwHbvWY552ZHkppF8j9DZmux",
  "key8": "ZBCno57ZZwBcyXfZWLoVZVjmJ9WMM3kFcEwngNm9Sd391Pm5oJU5r6ooULCjAyQgXWy3dxwXxu7Y2QAHFEuZrDW",
  "key9": "2aEbbkm2hRYynFva4MW6rzkbonZmyCAyb6n5DKYWVJSAsn1XQsxAbVDT5dbRTQ63XwZon7Q1tMLtp9DhvkHQdsYz",
  "key10": "3AetqnrtgmLMGDseqddKQhky5MMtqZE6rzeV7Y1GkeDGmqyWtR4wKnbgwoaQxu7amPZkei6kotru1oyHBraS4aut",
  "key11": "4xaL8Cx7BEwMvtXa33q3HwnUnhAhuvoT8sPNWs2j8HpcZzL1UFjPoeGAk8z7iLUeuWZPApPoDvosnxmTqwmgXEtR",
  "key12": "5uwMrZ8Wh6uuey6A1zV5nsXG324LQ5HkXcdRZb8xFGcTe6wrcfUrWzZLMuSXA8bP79iQ4LDKHpEt2tCoGA3Z4nNm",
  "key13": "5hBXoPHaz1TMYnV5WbzFJ1eo76iPcSFTVYHQ1QNL2Vr4kfEhiHT5LT9acjEmz1N2J63dFNA5SwRUTbC85kDnU6fh",
  "key14": "BiP6pRzR6rRyxUbiayCeA5z8ZZ3ydWjgq1msCsYy9cUnYoXW6nxSp3k5uGhGWLXUhGUBp8RziAbwUZdK5k7oPXy",
  "key15": "5x8DbECRZwyukb6V98iHkW52VUne2YeLWdJHWHgUzEmfgxQ8isNs6dS9yhk9aRiKDMEANm1YxEg7nG41n2SkxWVR",
  "key16": "5LZhfd8JNg47tKxaXWny4U9bzbVize8m8Ck9q8UTzBNCKLZgsh2BnnECPm1zx5Sqzadqm7aD3wBPituk9QtD8zWe",
  "key17": "62fXw4PwEMrv5DEydpckbdGue4FSBYDmNa1gJopENpf8858mek5s2hPvLq9Gbe2JWDri9K3T9YksdsucdsXe1VPg",
  "key18": "3urRkyDuQeJmJumKrxTTtLvmSqnEpWmDgKpSeuS3XhhehfahQepxyd8VXaXkSXtykiY8XfbonaS3XgSBqi3fQ8TU",
  "key19": "4cZqJFG6JJk43xb3xJ3aM85WesWChTG3YE8eeyodyTQ1zz2G3mruXRJwZrA9znZUDxrB2imcASWt49LX5eYs9oGw",
  "key20": "67ZXVbDVC9Tk4bjaDDUTyF3fwaLzJWBWcDJZM4t8pZDygsQinbLG73abPTZ8XR84x8sVoZmndu92M6GdzH1hfSGp",
  "key21": "mCzwgewSnbGF1oZxhXRtvg6Fi7LUJ1LLcpNbA2Qiyy6M88kLwonyxGpYrLC4o4JxVV3qbEYkNa8uBJ1kwsmywoc",
  "key22": "5WQyzwQ5n4JJCDrqDjQNRmzLY4ABrBDPnoaJVQuS1Mg59dQLw1uDjRx3AYisbSmhDnpr5YDN9RKjtAQE9Vo75hzR",
  "key23": "55K9jsbyHfCwbg7qtxhU6HJsnaoGn9DPN6Qf2vYSP2XALLyMjzRFwxbR1chatxxsHcW76Tt9zEsrPtcTbQwdX7fR",
  "key24": "48KCXXUyfZaf1M86yLWTtQpH4sVbxFSVJpALvxy4E1af7qe7hyfNXvEducsNhp7SFsK3U97VXjxMmA8DjZzF129m",
  "key25": "32drGEvnWucwuVfoj86DesFit177C8Lo6fhKYM5UnEGh1dMXtKjcJfBYAEVhcSpTiKBjCQw9cCFT3ACbEv62R8mg",
  "key26": "3fagobcNAa7jADEEkRggPrF99QUHe19ATu7CKUNCzFhC2R24wy19MmmX4iU9SR7133vaQuUYEPRoZsazcda7xvnB",
  "key27": "qibvonQSpqDBgTm8NHmYUm5PLyt6oYqtaCGHXyNpgaiBUVbGPNq5NjdnQuoD4NkQ2KvbJ7rAFC8viNpBx4gfWCK",
  "key28": "65NmyZPABXzWNziZDK2tvuxqzFbvWXpYgZ3gk76vb6E6mpb1emVTUxmjx3JSGzE51PQ5cNV5q4nCNiridWjuoVed",
  "key29": "3cst1fM3ZzmXWqJDxstBjcjzHgjoVsWDtgZsCW6qk58Ncz5oJucKViFrktsLBgtoJPe6bDpoYRKyCD7EqtR2qwyP",
  "key30": "4PsGGcfP5Q19t36YpbF2Ngg2GGE4gJSTmFYsuhE5WtWcwdh1eZGRVMevswMsEEb4wXbUhe3Q3yweuwngAFHaLmgh",
  "key31": "2X2tjqfrYQcgHZ3wTAughrpsGNXuxKetRZ6saoujXCLG9tbm1Lo6N4n5DVaHuSENmHXoTBFgvsrspGKsxoSYWCmg",
  "key32": "5TercqhP1tgQo3Gg66ZAq6F2qGWiezcf72ZhNFG7Yh2ZyrDjN5zfWZgYokMcojc3HHWMM5HAXavkGg4bRys84Kbt",
  "key33": "245kJ19sAnbXWDoencJaedJTsMupVVnpqz3AXQrwUrGtg6NEJ1ZFg3SM8TG4rQNM5ENp4s642CZ64ffVYKLwHA5a",
  "key34": "3yf9YirCG83otsytxZyx2ZRREvPVgfKU2d8jqrNHK6rz3GzpGWaYdJxLuuM5YHDvexQmvmvpzf1Yv6K8RhVm9UFS",
  "key35": "5MbnwFc7BC8YaLzNySqeVmDZGHXKomWY3GLno41yw6b8b2BncnQJKAt7Cv1t3bevrHc9urDUaL1dm37PT2C5D1Uz",
  "key36": "3n6pZSMRXrKt8BU6mzTRkzdRkHxCMETUur4ZeF2VHPhrH7SBDQcbE9rDZ7xEwnwBhGAwPAfZh5YsofLUgYkQucq4",
  "key37": "4ywu5mjD4ABRTqCPH7YNf6KrdzUGiwH5yWhPuqMtHUPC9BhPkZx3JhXsSkZiPB9duuy6HMBYfSkdozbSBUyeVCkJ",
  "key38": "4hi1rd1WKLafs5zqeL4Ajrv9orLDyhvnYsaobT7we3puw8AyBWG4FCxSoyDtfrQMYw8oBkt2bGFfU2UrPQJpDtvJ",
  "key39": "5189jb8VqbDooF1zrBhsrSPp5t9HGTAn94jzJANmYRQpAC6BGL6mU1JyF9zXP1aZzYw7k7zaHje1A8gMHa5quujv",
  "key40": "3UPeUKfjY6BRng324RFxx5gduWxPicaHThL8XpGqJNeiPx222m2sRUzyn2HNg4u33G2u28Wxq7x2hBdbLfw5PkH7",
  "key41": "4brsFsX8ecaz7FFW1gpwxUtEeCZAYsUDjKPaXtkDCsVYgsHZqB7276frVvyTLiBbpxMuJCJAfcGZhU2Q9VFyzEgB",
  "key42": "Y1fmU92omvDQfGXfzL2HHThVJPbp5eDFN1bn3TiH6wFySVAxA8Av5eVrdJMR8Q83zCXpkvDCC5sMRoPUi1NuVX2",
  "key43": "4AUP5uyQS4eGQu9GjjW2juTh7oSke9w6BZe5RZt1XJ4LrHqoqAo1WHSxw9nyKbWHTwqkcMYTgpCr1ggJiqsdqMmN",
  "key44": "3jPH39pHk2BQ73birSgC3gn98K1cpyJtHAT7QUs47iUK9XFs68Vvgkrnv85jKR1KHB8hBBJvD3HxEtpH2eB4YmLE",
  "key45": "4Dy478q96ivowATF4JMW49KiLQqE81bb3huubzNhXBGXD26PnPWwgsNaiQR3RRLNxs1M5DpmjzLfA6hL43b5eBpC",
  "key46": "4GyjdjVWvfPfAJoxjjqLnpteZosuir5Gd5weTipaEvFw1oPFHqKyr6snXKwNFvDjK6bMDECoWkNkQwhVwyoVRgTk"
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
