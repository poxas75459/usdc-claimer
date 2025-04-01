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
    "5rznL9rutGG2dv3s9SViB5g7PsxpFyk5gG5Qu9Cvv6xSvFdDYnc1G9oX1TZb7tvqGiSMTViqSpbD45ZQ5XWid6DC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aETLiSn2yPfb8zs8FXwRhvnLneQhTDMGjJGxWaW7v6iqhPpPGF2c4k64iSkkaGfLiKzx4EKrBRkva1ag1gpcA1Q",
  "key1": "5s3QK3ovtpo8HWTQNwmRf5AyG4vyWethb6D1uZUVBjp7fJNzwsosuv7Mf3zLGdKgPjBL7btiK4auooGbo8CACCAY",
  "key2": "pSNBDhV8AAvaGu5CyrUSKtQPEDagFvCkzwMYajcdRzQUhCawBjzK8cc2C5A52QcWtesqwz2HPmfutQip3NuhG62",
  "key3": "59GoCvX21u3RGcVsd5wk2Uq8Cg4hEjFP3J9hZGqcnfXXqK6UcQ1sQiXFg17bSxg435VH1TN5UdMKD3NW9uBCgPJR",
  "key4": "2LUgQVb8tJdAQ8PHYCoATF5FvqxDwZtyc8dtmAEPcvdMdSWirr5kZpVJtuJriGo6zTFMESjZ22FE5edGkXPA6mJ7",
  "key5": "57mashfTzViTicJGF6P6JEq7rjQM7ve9PyxQt5ZSDKhbKqSoy6pTLMV2yRgfgxuGGfzPRj6KcJJLJpzxTYmDyLmQ",
  "key6": "32qVQgu9hyH2wUyoMu3QXFniKJjUa4RbJa8tRBQyxu17uwazsGpq2NBK6f9NZPHpn82R9ivibmM5uxZk9URfCgg6",
  "key7": "3KWkqJwHrprj4UrLaDkH7eFcT3Q7yDyTjai1KcoU8N4kXc7ohLtCrdpphLQkNTJ6Bvx2A7djixN6JkeJ3DpQx5LU",
  "key8": "5TRfudDJQVjXu2kxkdc6jHB6By9UBEmaVAAaeksWgKj1vMooCcGbm61w16g8Qu2XDXpG994GH7CM9KJuYb2QzzJz",
  "key9": "4CpLGevPTAMvgCF66EvtGb7eE1sXJzF93sGjpNtcZmKrZAxw3btkJG3U4SpYoZi1xyyRmguHLU9DPsX6ufmbTWcq",
  "key10": "575uFRtc38HdD483CwWDf37yzcoCbsVKRDoPUC7Eb39hbzmAawQP9BVMm2vTRZeyj61Be5hXG2N2M1yLPf3YvVM4",
  "key11": "5pmaBgh4uYEN6Dx1XtNq2NYQvSAJneSZgC89WZc1XPdxxKNVniLU4f49ScnQLTno9AWL5LcwKWwkWcAjBxupxNZP",
  "key12": "3wcMAH6yUBktr61WdnmpdwKVEpmqH62ap4m451oPcbmtUhjZ949EBKvEuuAAb7i6GXVxdnihKsw2sHZBBy6CWqVo",
  "key13": "5wgbqJq29eCiay2DXrrPMtAxgbPuNU9XJoUyzmSryv3TjusLKpmPiBn43q8k6KMbYjyoSEnit5kxWs3vWbAyaMFR",
  "key14": "EbYbycVWKehv3XFyu2rtdxFHpxaTwaMfe5eWXykbtzRFZ23gKqYrgRKxd41u5a2XxBpQWBbxywAfsN2d32sLTUS",
  "key15": "5m6u6exLydbGT4s7KwWXDxeoM2S3NjJHq71e5CEoPRuhNycq8Fa6LW7GeVbDVJ6A9dSHvwMrfPGqr7xRciRxaT4D",
  "key16": "5DT6jUmZ6dqkeS1bmU7Cb9BNJ3Zq9L3qsZszYhC6jh17ByXxe8kAidLEAxExUgLme51qhLvoRg2jAHQdfV1LRFn6",
  "key17": "bwFQgVdEzr6NHchgeU4jyryfiQKh2jJVmdnD9nAYXuG1bkxHXkh44hwW1xcsTj1qvSqMxbmp4Y3XNzn75Jyeppm",
  "key18": "4nFGQqkYUhxWMbHmM4vzzPvz7fYFNJTAGALxTvfPEkrqwrxHP3GFPN9nH8ZNuEPgfyb18n1DRPb1FEPBQTZ3Zc4J",
  "key19": "2QtDaAR6dYawwbmDJcwNvzg6s9q1qNFUGX3VE727RmGtqJRytTnxzpCRRtL273r8aYoysEkRPNymeKwExeaXd95s",
  "key20": "61xT9R8c5qVEYnhpHbyYUN5RBaNcC59aNZewjYSpS9GysaAFCjfsAXtdMFpUZaQeyc9rFVtkcftWYyj8Tv2xDeTG",
  "key21": "5UhswRJaAf9Hr15S3Vu1shUGkcUYCP55zCgoyK6h3GNya6y816tdZs4aJQZYsWGCXPbpeC6Kyio7mMhv8o33JRnV",
  "key22": "3wziHWvqE4XTNM4bX5oppUefx34FS2zWoPYwfn1bJvEUuVHzVfGg29vmHuyvU95sVGPV2qkhGGjQ9LVvrWnfgWCr",
  "key23": "3MSGyfhkvckSW4F25HwhGXpCJxpdnY5o6e1wkQ131MmggoQvKuXd6vBubV9ffma5zggrCss5bAM7eMmbrTtoVihR",
  "key24": "5oREekJkQEo89Fa2BBLJm7zFNs7MtsAtQCJSJKBoLdQxuPda2RY9RrEHhJadh4c8naeyRdmXWHo4vmq5TNK7xjm5",
  "key25": "3PJVeXWcMEUGbQCphAok99MhDsKCebP4hXFAXNW3aRTT8zqksUZopeMQoHBaqRnyc9jnPigQhwTrDXQiw4MBJ6T4",
  "key26": "3rB2ERGiqGcfZcBR2GytumrGCFyuVG6JkLi8u5qvyMxrYeQXaBmh55cLmMkx432cUG2EcqKYpYrrp7YmVpR2HRrV",
  "key27": "4EVeohiyAW72qwSxTpUtPygipbNVGhDLzCH4CpEmmTq11yfarppwPWcvEzDkckqKrxsVMrkTZkqhVGQo9dkdt5ES",
  "key28": "2hzFhUVRFdtPaVN5Uha1gS4jq8nyTMyuW1WjpiqMTQp7nWcTbCuDiHMrYSkfEqkxSfSfWtRjxP28PXiY48jcDVNb",
  "key29": "3cfmn8FTMcbBT5tqDJYH1qGwYN4nZ6x7hpQSmUPqhuEhiUoLDLEj8CFpeD7NoL5x4AdMo27UTSeCnY6Bftdhbah8",
  "key30": "2b6pKNE4DGfh6ycTDqrGmWRJBfjysmuf7sTNj9aFgpTi5ksYzAeriPieazEWrL11zVgiQjXQu4fa66Si23UGEpUN",
  "key31": "2Rn3QBs6zw23bvL1jhXy8KQvKGcgjeWd41Zx6rpoAWPUcVBMjuKtjYp9fwmPZzgBbiXSWpdSLsECkGoPf7grLSMh",
  "key32": "2ecXSM5yeDTyDbkKnrWb2eoRPaVpZdZd8o6PX11yaWuvBVKFgfTkLH9ZWE2hoZm8hBf7jFcuY3EKihH8MWKjY9bw",
  "key33": "3D8oDMkftYYTyydGNNUUfxd68dHLYb5ycydCVVpxLtiVF7v6SxGqgXkzB4esASeK7c2wPaTT4yn8kc7y8czSn6cV",
  "key34": "EzSPQaouENcxwMjNmVs7VW7H7vNaWbj4T9HqkEGXeKdjFe2MvEpsEnbC4mzAAnedg3C5aabzJhrbVEhVFGoaH8i",
  "key35": "32t1v6zi6QwCJ3MvtXaqaVuWKDywJjisZJaqu6kGhZwsQWqAk4FuiabGkg3V9BAYgnFE489ujePzRYLbTHByNvzG",
  "key36": "2ztV7zH7aT5DoBNAYSUtEfB7LUwiD2U312eKQMgSvJ44gFWK9nBGetLiogaZ6pcWUwx2KRceqzHDedeEG4yyEHp3",
  "key37": "5PwXYeY4SAFyvWpb5tEWzt7C6xCZgQTP3BuvUJPCTV4gVxMLjFzaigw16ULLJiXcJPDJVA3cqE7XWhebns4c2knd",
  "key38": "2xekX6usnFhJxfrP1g45GPAFZ8YNruePo7LDztoevSz95kwAdRKmJorXBydqJfUWuvFRqq8xGyQrc52aAq5KJk2z"
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
