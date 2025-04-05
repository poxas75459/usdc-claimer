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
    "2Cx9sMeGKanzWmKtPjfBNyVExSuxBan9zDugWohhrpZX4cvhuCZyJbZmp8hsj2pQpjQvmfddfaQ3u95qC1BHm7Kq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53Cm6hNmaitQbqGELZjwrQLJn1jNWUCckwH9hQx4AFStDG8bKUbxic7KPpr2vkwtcjn1CMnNzJWVHfk4xuAewUd1",
  "key1": "49SKTvZLdNzoBnWkkuwNwFnHYiKptYEMYjRp7C2AhFBmWXZYsymNSfqmQWYG1KjigeofFH23rntcWUbcxtnpWgGw",
  "key2": "5KhZd3CqgpmVeiticDhhXnqXaLkoqn5mvcBbLrsJrCXs4huvPXFbJHAPDn2nkNnBu1iofLfbUw1cH7ChNW16avRz",
  "key3": "5j6G7nnXSxq7xqDsvMFDe8Au1ZfweYUB2p3aw3FGf92fcisGsSYz5KyWfDxe9bJzTr7ZTwisEwVgmcqNmf5ZNPq2",
  "key4": "Wvp9Ckw2fGVNjmXFPoNzvxLm1s8Hm1yH7yUCmnFR3E3MC35HHLmtfFehKuvSo9HSM4FA8XWY2CWKAXPBz4FYUdp",
  "key5": "zR4yjiEGtZ2cvK8Sd6RmMX4yAk2umqFFugDqEMJ3RRgJbJDQg49sNxGxWvVuBJBB8hDUS91WGzF7ML64cNaVAis",
  "key6": "3AAzvDQ6bsmTrSXMZD25ginNAnwAXCuiVqQkCdTnFvdhyPvThQCswz4p2H6RZzyQa49JpVuFsu1ftekCNCT7hRHt",
  "key7": "5dSqbYc8HyJwEG8zn85vxMgdtSfVPRSkWs81DUXi7o39PCsBqa99yd68cp2ToP8KpKryz9XuV2SaryZQUW1tUJty",
  "key8": "4ipe5XYvSaahWLCuEfuLKbXnBnUztxNVyabNesmdwM4USoP5d797yV4z6oLhojM8KX6WhwUuA8M9gXVXn6ANsWQb",
  "key9": "4Mn1hNwzxLUn1p5nnKZN8Qc7Ew16reTZWz7QUFGLbeiCcrXtdwYwGQu57fc3DevvquxUz7v7XHy9spfRMbC9bdZ8",
  "key10": "2QvRvyez5n4FTh81MFyUDxMBW9VndCUvnLYq9FvPzxnDp4igzHpLtQEfLdSJBMnfhQqLfo6bA2RcQsvxQuVPV8td",
  "key11": "4Mn6ekk6xcUGAUkzJJyh8r55aqTEcHmYVkA6ZiQiKKPs5AKt4dc4kCbd5Qto1tsuDvwZB7RjvqKHZg7LhRcZ9qWK",
  "key12": "4HWRvAhPZ252EcP3kFXaX1F3dMfQoL5QU9aoUDao5cvjS7Dz4zqKTD6X5f3B1HwZoxdHt2WEoe4MLouXcs4diih5",
  "key13": "67BeWhX8ctprZnzZrdPVrmoptZAE5GzAfTt5RpgFfSS9yBHetFyce6DSoDoKY6h8KWSHwyUa6sJh3qvgp2riVjzQ",
  "key14": "5BHaGVH7LTkNwGEemFFzECgn6dYqbjrvGp31pKtQbEZBypeJZQdELmLQMkeQPBcKXGfT2jBynczA4MwoLdYC9Mby",
  "key15": "2WvsTisM3Ekq5HEYkekFxWXPMrkUgxZEvtS4pXxa9LQTjsXHuNRLwWknpmakT47WERTv5YEuJ1pNuTF4pTuA9PSA",
  "key16": "4wb5pomYbft2rTCt5qPiBGT7vpDqWaWRmLnyWpVBtkByhCv5PPdfZW8ogEWCX6E5yUNZe4Q9g3pmak66iyhJFxAt",
  "key17": "3aiygULsghDooBj4udk5nYHP7BZMV5a2GX5jk766XW2nFJoWt8jASrfY2roiBierXYnMi7RRnXboGpfWdTkYcuxM",
  "key18": "3VmWZQoipUhwQdLtJUTxfJYNMK6m5DWrSTUSWnh5F9oLFsL3sFL1mybPiZ7kqNMPYWGGAmPT2DRvX3Du4bjTNxg2",
  "key19": "2VyFcGFHZAQLEM9s4iZLv6aGMKsYtqZnWWBxh9xBhDYY5Fa8vxVNTo2vLiF83NBaDkKKCQPtbac8DycVQuFuFTtT",
  "key20": "2c4VH7E3vHv1KkZD9oPfXpf8Muxz35u3C3dSVxnsL4fmMSR6pWZQCarB8C9urfPgZubPyWLDNKLUjBJqQrRDZTmi",
  "key21": "McoqsxGTeUQcxma1QJQqcDxWaEZDQCUvVKg5dqdik1tx7G9NhmN45QVLwnjHuAQ7ru4TMnUBNBa4rVeVeN35Fbq",
  "key22": "3cM8jYSCQGmqUQNgtMUFxZgLfmYCRCQ6YRYj5yftnmHNtRR9GGW1f5s8MQAD3m7YFbXf61yN9EubF4YP4vd4T8tr",
  "key23": "5MHz4jT5oB5pmWYDbfoPALFF8TEKH59Ca72RFQM3ybpKcg2NdEv7X5Bcwew9ydxtuh5yVn9wJXAjaDN5DBTu8HwT",
  "key24": "3TJnn45kYXnR1N1cCFiXyoy7tFATjM7Z829ryVvzFisLhxEZc45UvhtduihpUpuCAvuMRbrBBvb8phXuAn9YcDSD",
  "key25": "4uBesH9BUboePEBtV5i38Rc7XwBUtD5oUVyaJq7DbLRL8DPKn9Wp8r6pshnBxXfSsB1SZkzZRcviX8jnNMwx9vo8",
  "key26": "44UAcVTzVSjb7cVyWkB9HGTkM9R3wwMGgkXCbPQXSfe6Pxkgu1K5HmNftZbVjFjhwHToXhSFCyP3n595NJAxzbmu",
  "key27": "5CefJFjm1rdeYaFWAU2s5co8oFQw95VNjjhVDd4nK1nSky8jFJe6qWaJAiUHbkmNVcB1j7uthF1Vf6RVyN8ymNuP",
  "key28": "3pk7EvHGo4hxd7tzkjrHbicqoxEEZBVUZpJL7jbJfNKhp4T4fW1Y8SA9aFM2XrNyvG8VgYV27vY28p8MefT15yUf",
  "key29": "FBPM14Jfzw9fC4yLchScnWGDmKxQwFA3p2gYWzJp42dc7dD8WkjT9CXVCUxymBDydLyQrJWPuPcmsvSpbeq3UFt",
  "key30": "4sNQehQkUis2k7F2tNiaiDdDLegT86j68kGwGuwtLxjB92iTdUtqSB1QZkLh1V62UAVF7WmgmPo8QgT8R1v4Ptyj",
  "key31": "2HfjompQWZzDmdbM3VMVjk9c2gt7GG4f1zPiWsGQF3xTL2YwDP7Hev3AygXC9iDxcJXRgUsiZDkKkRTiAMNDGLE3",
  "key32": "55fZmVp2GLH6pbT7dtSNaT6diMvHosRzVCrdtBqLyxNe1o8jirdS5LQP1wyb6Jt2b2Ckr7RhK6VeyNepkdcVFTnq",
  "key33": "56ngMWknNtFLxJe6y63ZqXLpfVWLZ2vRFJqG1JhzSEWoLA4Xe4KJcEZ3bG57zmEXuP18VBLZoQ6YTsUPc2bDZZmC",
  "key34": "4PSgYcy9ob7nE18bhFoXj6reJpnRJ8mdvkVKZunwyECP8P9JWQFoTQNrzTRJvGgbmr1ZCV5novA7JHSYZrBcJPMV",
  "key35": "27C5stiPvjfYKzNodn8QDKZGzHxnzYN1weEu8BZzJKYEjRgDpFz2qStKinKW7ACtAY16hWLVGkxGMGvwpEPhpnFR",
  "key36": "4A2vqyjdPBbutMjBa6YS1dWRXGzYrNttxr26JfXehzsgsZFzvYgsx8XX2KpF7iUA85ZWvXBWywUsnu29pi3LkzT9",
  "key37": "2buvcq4KcpihnRe411jAkvc6uV7PE1ApRSGVaqtkduLywBizC92ax6mhrXvgznMZgdFLayj99puqcqQF1weTffKr",
  "key38": "4Le5SEgmWZLvZea38dQFfFptfvhE1oWsNo4xeGh2VEDAzeLRhoGQtFbiRy7MztRK6rgM2hURrEUrPZBrruUSeMXY",
  "key39": "5BRsCXiyBiyTJFqhRNxsZWUMFarThU3gAyYrUQQqyPbGfryuRZXz3PSaXfag89tPH97iwM1NLQMudRFUdEwG6Kja",
  "key40": "4XUdxfrWDjKdghHBXXfa1XteXHqEbYcPBPyriFd3SdfpgGiYq24ZFCSgHcxNptH2PcmMSo4w4tvieS3QK3mfH8m4",
  "key41": "4cUBdr8AJyX8t7nSwh5tNMJtscaYPNBQu7VfLrudGE8qs2GwT7BRmSLpkmpNTYwnSotnxeooA6pVa3RBMYAJQpWh",
  "key42": "5daCFUSF6nfCFqVnUkNoZcoMhKp9293ADMPzSyN9beaxj8toLfLXsuoABWh6RvL52vNz4Wu3pzej7iYv6UfTySDJ",
  "key43": "485JJs1hVD7fBSCvY69GGXDQ62GhyzseTFdimdLe7R7KU6dSFX8yp1V8xvtJ8Kf8vsbtnPPVknGPtQkmJadeVfjf",
  "key44": "3UNjds7rhLHT6HtznwpLmkMpy9jSxq8BorcLLUpFPTGLzsfyWF5WtCXM23ZFQnRadmMD5CYdzZwAFZWdXTLsLAsi",
  "key45": "4GFc2ij9WERgEGLDBFH2Q9B6V9CVZG9J5hFxTw8ZHNEfJ8S2Wr2K33fj2CqRT6UMAXhhz3sczt7huzm8hdsaeV12",
  "key46": "XvzaBdNTu1QTn8dh7zffREqwE1NxPT9xpfbnzPf7EFSWYLC93jyVtB7rXijgTFZFtrapG3B7QKtZMC6KczaUZrn",
  "key47": "5ztdKffuPYa16apg6Y3GE7L2Y5u9QTsqgALNFpsnMx9vaVQnHDSFz6Jk6LGpTAjkwbYmZGwQB2NRZ6t3D7JqYx3h",
  "key48": "1c2N2WB5gLRBH31ero3pJhoEcaL4UjEipPb6SkTqa4bKVhL6vkFiyD1rLGMLvzsFa1YXYAHsaJ5zr4gmVYqLMhK",
  "key49": "3oXnUQ2cJiPtKaNdXXqUNLowtm9Bb9kpmRtJDEGjQCoe96PP3oRfhnN7vSAEZK6BA73ECDBUjHwHKn7L715daGMj"
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
