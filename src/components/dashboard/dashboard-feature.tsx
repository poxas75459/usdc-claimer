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
    "5RxTo8ZGNHmdZUvKy1LuXkkLxvZk2YaAgCoFWibe1d6j4McQsHpDK92NKWVRq97Yz3sEPAy4oWXhqCARqYuLYtLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2verfLQqoVf6V2DN3ZoQkUEKrjP8upbHPr1pghTxMj1fyJY4BN8XzWDLFxMpXQqXgAaJFrS8xzHaenARjVckaAir",
  "key1": "4wsJe5RsGbccf1hmsJaUFpYgvpqqVryhK5gKFYJeSzcTi7w3UpF9nF5eGThomFeqgjkFR3mrkqYx2cpyqw6iXF1X",
  "key2": "4bVerda2FdmZZvXnuAUTHBRffnJq7aVM3DSKWc2rnCBxowauftJrk6UFaSiwenthfaz1fmx7MzVf4mLvtHJSMEG9",
  "key3": "65vq4gzwueRQbewfCnaXkdABYUniabDGaDuKhgHgyQCQfwTzm7PLmtUAc2ALKTeameZ8Qtcf8tFM9vCnxkHDnwV3",
  "key4": "2oifR6aEahuzwgvomimHsiGKhPERHYWzCPwXFdrSWyg6deiuZByk5NKRCfw2P6HxrxfZZDrnJNwS9EcDffPWa3Xj",
  "key5": "28XL7PGHY7oCGamsRAvdnzV4mZ7tLjmwTYnELmd3qVNyGGyPkqqx3m5GshsPFMYcKhUh9PADGqYNSv3EXWudXPEJ",
  "key6": "cNiqg6nHfgeiRph8sxNeAgjZa6oRpszsb9dmcFkETGsMhXGdgTo7MgXQ1DLtBnkf6puMcA4cNoEbkCUf242eUT9",
  "key7": "3aJtoFbaGrfufXNBJPm7LSfLhmYJMqciHRn2N7dTRJuQmk6VnE6h3SEj37G9wESDnPgv5M6mHovmF62PUGBW96u6",
  "key8": "28JNXxXuSFVs5aE2swQDEn6KMQFWR8eBZsScNBBLpqzsL41CdVZ99GVMSKW2Mozf2NodYWXUCsTonKZjwVG38rXc",
  "key9": "234w8ssm4HKw1mGdhgTMTbukBFAHvbcMma1Ljj4qt8MF6Z76UvMhURFoveTiQHmf7cVL2fid534Cz19ux1yrH9su",
  "key10": "4DtVGkeWjVQfGb3DRNX6WkRq8JeYKtXP3omvc8HsFBBCupJgVayn4KnX3AJ97nUPUxtRbaLiC5QyV4jjxDHuhtCr",
  "key11": "5kqunQXpyauJaiEmtQKh4aCVnRLY9AaqwJBVz4HSbB8KKtmaibCg1Z1SGVacmWCrzQJYFcUZh9PMKHk3Zma7butt",
  "key12": "5zR6ZTe7RHAxGnFaBrt88NnNGuvFbg6NAZstgVfx1s1tWCh78SMoRFBL494WHAkqZgXHaj6Ar3sdsYidsP7H4rRh",
  "key13": "MDM9ej1CHhAxgXeBziho5Jh9h9B3bPsFMJVAMbAaGA4QzabrRV7R63FR4ePCXM8DRnSTpic3dDFQkw5f8d4JyfV",
  "key14": "3EkbFkiLiZimcwqvsUNWjSusjwkB3VSTCTSXXoZB9bkHt9QLkrGrumJzJrPEwu8s3BELzUpS4xGuHKnUSm4h4RDB",
  "key15": "4EqJAJzzcDaKu4QGG5J3JjCT35qswmcuqF2edSviDgUTGxPHzjx2C1eacs4p5SsEDHLQ2PvS1nUaqbCXqKnAU4xw",
  "key16": "3ugecB5uTu6EwmiXFqS48DQwkVbrsmB7CcKoJ8xSyAz3GyehSUaKgthApf8mDs4Ae137aVYcR4Pd79VgCdanwovd",
  "key17": "5JxFVTRGW8fCDV7zp2SUFnNMyFiYQrXPN2vNR4Lr6MSV1JXWjc6vCoNnm2sd3t2vXEMRtsget4SMLZFbmKDqhoYd",
  "key18": "3NNhJSewZdsHLNqzEZBUkdPKAj3RrwohvZp6o6goL5vrRxV5VHwWJ367cf7xS1kz8RVwkB4Uge92EirrAdj47yYE",
  "key19": "V92hMnoGpvCaV1v4dzKCBnAgsr9p5eBDrDbRX7cyeZ1T6P5VcxmPaFGZEXRtQuxa5X5fypt7S2yGxes36Ch28vH",
  "key20": "2mos52YH5keACgWtTriDQdVLBgbnbmx3zPf5V3peXoYyULBaP1MQFeWcsi1KWnZHBQAFr4WCdsmKx5VWHUiZ8Law",
  "key21": "3gQu96qCwzZEoysY5VDZQJUSRthEXqgBvEnshmECJxjUi16zie3b2qYUe7f78sqUxbBwHsnTS3qmWbXUT6NuuXf8",
  "key22": "64cKJenAnkvaki1PS23qyY5MWrRykW1cVo6APNSaYDrAkjBJXWZQTKzxxAims6zzGuqJYvHf9NiVP4bc1XAWteHS",
  "key23": "5RU9brDCEPvM7DMfYUSL3FrgySC4tLNT2hMLXS7GB5dFYJB1LYa4wEfmYh4daBhenBUQFJwDArECZYct9k8GtFjT",
  "key24": "3vQCrg9briDMvCUstbzuv2QbEBPyA3naH7jh4xjUaxLTKUwL7bJsbVPh32p3u5TiGykHayvbxNcJB9tsWFzWSq5d",
  "key25": "TmqqWCCawBZanZ1ezgaPxrwZsU84eTixhNULMF9zcBJ6QgCTLiXwdwVZy5WkC2kLNVniMXQwABzD7w4pRf7QBiK",
  "key26": "5bvXPx95CPSg9MBThhEVXL8qbymXeKYqYYFon84JKg94FCGRUDhH1cF9Qih8pedu8882p45GeyPhihoWbrzk61Qe",
  "key27": "2862ByhcQM2yMQNr62DYsAnX5eLE7o55KhcpJ1jqYt2eMni8S42Kx1Wux7kx5ZQqv4yj8ga9jKxKWaJ9BcppEW4u",
  "key28": "2tdyEBnSvmLMiKcyxre4N7BamA2nP8Q9Pc975g5SXf1a3fxepAaozPnrL8D4rE97mVVYDHzp6hGVJrJPQYAA2DXS",
  "key29": "2uMFyTLjBjcdqooMVeCqxAVGjJfzGDEtLoMcDvnZoiaFAA15s4sktgUpqjqE7AwCnkruSnHqw5CsSFridk9wNJy8",
  "key30": "3QnfC9hPpic9G1jeAcQskGxF3Uyd4jMWysGPGzuToDXCpbkcfKKntqWPAJxKNK5Fmg6vGM66Y5kXHBuqXjNgAFZ4",
  "key31": "fzUdrE57KGw24hUgpMGxdgBn4mh5kSUo6e35Aqk1f3KM3PndL6uj5rqfhXxNp3bcRZuGTmvRW9wwbvMsuF9HVaE",
  "key32": "oytTxbm7e93CWyuQka1eH2nkS3KTW7m26YogoVEtcajmARHQ3hnPVvCe2Hs289bS7qwX9Be7A9aUm45fqxYtCgc",
  "key33": "2R2NiroyuXQkP4vcTbZYZSXtNDAksFmLCREEije3eaDUnom2iN7iq9ShBebSHPUcwm7Hj4ZSictwueL8LqCu2vv1",
  "key34": "3xdbiy16PfumWPaaTrebn1mZ93aa9PjJQ6gxn21HRrzgj526iT73bmwGSjfyDPqoXB1a1bf2v8zLDwXUuCNLP3BU",
  "key35": "229GWFQdDTia1bZ35cfTFpGLM4xHCCF3KboN1RETGeyV4GzEV8Q9R2cKKNZibswpKPfVFSv1K9SmhmsLv22JbEsz",
  "key36": "43MVv7eL76c43a1WyNWVCcj5BckWtrgTAbtwQtkEBaufqPavvnxtP2eBr4ghYQQpgDMKKkYh5zjwPcG9otcvepVc",
  "key37": "nWJWgYxA9Jre6eY97bRwQNdqr7zYRqNB5Renm9t7jYtgV6ydeWKdTWcQ4Xod5V7KTDz46YDymwTMUPL6R6Gb6Np"
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
