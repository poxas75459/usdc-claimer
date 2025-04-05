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
    "24CRWuA8321CTsMNedeKLVandi6H795SMyW1oEt3Mp4DNxBGF4T6rFD9PbbrgPxiMRBPbgDnY4iKvmZESPdpL16b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dTyPCAWcSJFTsFS9t7qUfYUXi8qMA5YoNagS7d9pKncc9AA9TScxGAp8DhdaXH6YtYHpmr9ewcmuu48AUS8mcxJ",
  "key1": "z3C76D48Guq6KmynK9uuorcH7j9W3khf8zfRRdGUqdhkJyao8nkL4zQ3xSAicLzsa2tfsVWUD3hFgDUsjKZ2J63",
  "key2": "36c4Ki4TeneDhjcoBLc4q6QtLtfR2u1a1NEfiESsdtxcTfUaoJJnWT4mfJtVEvwsSjqfdg5HLMHejfk7ZvSX9AoP",
  "key3": "5uTjz2bAiXcpLBu2dj5unXLSpYSPm2DRcmu4YbWmzJSDJUPPYk3x8H3JvGYhRmHRHWsLQnZqpcbSWeLHDLgUgsx",
  "key4": "5rhdsA1VF1knL5uW7jz2wCddndT9WzLEsTczcWirQX1V57YWNjsTZo3YbkcmcM5iyRPGdG17BRRf8V6ws4aicA6u",
  "key5": "5ZJAkCYovDufpdU6ddHELyGMWqmn57dNDXVDkaTbP2Vhcc5vJYXDqPnq9NWMvrpWpP6fodQ6KAhnz2T5tupctxGY",
  "key6": "wh4AMut1UbjbMcunsi3mcryj9bysxJVUJbvhRVENhJhnJYFE7grQ4wriFyrhQTxqEeBNyqBUYY4gcyvtbSwtNxy",
  "key7": "61FRraxjd6XsEPvFZ9paYFn2GDPod4nuTVZw1tsn6WvmCU4VzYu2GhE7zoAfxdY4jdCFSTbfNTBp3DuKbVNgVjbx",
  "key8": "2cNLoALwEGkKA6jurSjmD2S59VNsgi2Zpdvusj4ueBwuQf44Uhx5kCeaVauvG3gwjCHhH32QVHjNCq5saYDQNCmh",
  "key9": "3D3CLQz7c3HZEM7iifZ2gtWtqx3UtgyMyj9vipE2MksEQjh4cUA94Zf4QhRdbqMBmqW2s6oCJnWUSL4M7SEv1o3r",
  "key10": "4C3bcZaBgcVppz4n7cWZG4WipiSbXUahvymyTj2bUN7urPAWtwrMecRVsjMxo9oHfXx3xmonKBERiVmPU5k4AnCw",
  "key11": "4jHuwfWLejGKTdToTWpP44djHztRBw7xhFumxQaFe6LFU9ULBQXxRNQvF6v1NBCXPKchYgbqYShhVzcpCFv4oMxv",
  "key12": "4NHnGpFqgu53HrU9FcHbApEQW9dMXRUVeKx74z5H76HZwWmtansmv2bANJ75Xxy3AnT5prY8Bs3MPKUHqG2gb3P",
  "key13": "xoCRtkjkfx4Gx7Df6MP6nReZcv4Z7Kb95tfXZsnoZBd86jGidvLRmsFDReE4vL7HjcxRpuYbMggqBj6Ly7mdpfj",
  "key14": "9F8hceef4V8WomR8MbKdtTFADhPq3RGy4z98ShWCPsQRsG43ocsDcwGW31QJQ9GDxCgqXFHXxKqavLxCN4ThJXS",
  "key15": "5J2j2hgYdUZuckNeGAtfc8upGdXFJN1ZGfmHV5TZ2CgDLtNVV12sDqgMsApYqzr5Y5hTAPrtpRQCCyi5TdtjbDSL",
  "key16": "516nhTwXjdNft1Xp3VsqAxKQnWgpaA9r8uEGLuqVk8QcuTfA42QMQsy5232y7c6VcFueXznuVKULFzKmBhX1JVEb",
  "key17": "4MGSooitsG5DYtHR1LMvJhHmoV7YSjKuF3X2ToT6iPQtajjeH9oumTjzxGpHC93j6ANQKsWKBwfBkFZ3Map6VPq7",
  "key18": "5HVs1YJ1JzBwa7A27zTzQHCKp1V5wnUw2TsmPnU7K3dkdhnfmbY8NXMCGeSbs7q1v6rp7BfmjYqzS7pjUtyNdZ1H",
  "key19": "3ZnF4c6ycmoqbyToXd2qKchJnXocqpyneFiG3gvJrSBm2coizjRgPwRnVFqspBV2SNh3y8GzsHY4j3WvN1VnxxQ3",
  "key20": "4rbiCtJcNEpswMZM22FJWj7pkY5CsCJZaBRGTsarNwdLGR9J2jnpLkwiEWVDh4c4ZZZ1v616nszczbTRt6zVQ17a",
  "key21": "3P7UvxyYDrUDtgh482m7RWDzzvF6Np6syfSq67NUUSZzZtGY9PKoB4iVpviY5HZ3cyDidWqx3LEQEEaocFxELhT4",
  "key22": "cVCmzEqZGwTP4XED2xPjWkMrnpuvnpK81NGcL2FyXQR1pw8146xDQWCDN1z56eht87jFgjZy67GvwqqS26GsAZR",
  "key23": "5GsQbfJpVQsGSTf9xyFB4BogvecJLfMiy1M5H7dAt1rjGymVJS7Bjxk5LjU44ozQ7p3UX79MVU96ZdXDfBPxUK9k",
  "key24": "2eBvXgZENCCEGej7DMsnzo58Y7GjXs1NFGA6ftStVGNKUtUiAXnMweS2eUJ3DLViSRAio7BRCxGQxMUMMKg7ejx6",
  "key25": "29VAHNWipT6bUckNzradYg7bdT9Chunhnmy9k7zQAcpQKPWt5yLBah7D2uzjv6Z7TTvbbeDwQnYADTjLnacib7jk",
  "key26": "5wNiNVYPv1b3Q8MeTmuZHsZvrphPTfw8wFdSrYVVQMUSB3mCNbYvjVVHyizkNDuYmgUE77cLGEHEcXABnZ82ki6Y",
  "key27": "5PV1geZFd8ndFXfP7XoYXkfv3xgvsPJyGUCRYVRaxDiZbFmfj8F7nVWb8LQF6TFYyn2edejm2jV1qULMip32KhM",
  "key28": "7tsCbN5EjQe68m4qR2KhsLwsBh8VTPLsAqmgg6gsZYFq8r7GGNsAFCmHz5Xu1277dr9nNhVcmav3rjxKoXHVvav",
  "key29": "5JDrXsXb8np6myxMkLGbMuQT5TsueLBAZiUGSrNdDRyK2Po42jdcTt8v7f131o3pAxmrDxY3MRisavdNDSLPoewk",
  "key30": "39ryWowwXokRtTYGY9UcYS2XqivJ6bvJwYwjrGZpCiUr4c1Z9nj8uj8mNjxdQJmUm3GKyJq4BVGhEGvG4uCpsS4",
  "key31": "nYEFm5zprtwo8HcQGWLFBAxsPYkvXtgsP8hUS5PkivH8dt7RiabfbEjK189Xygr8Mbmr3n9VcaEfqfXwKx6qVio",
  "key32": "5sxSVhV639n5WQ2Mebxs2omdL6AZjPJ4MtyYHGCnvFtue2V86whHwB6nYnf6Z9TrjWi8wb4vPkckW7F4ubPpzFRQ",
  "key33": "3Ag13xGxX3xtTPfazUi8JNzSSjRhHvnzTqCXCEqe7Ddd5CTxKS5ZZB1xBWBdSJNg4Fc5uBMozVSHB7X8Z1dxWSxM",
  "key34": "Zg77aBTfYJxK6CGyTvuDX59xedRdofckpdE9DfrzniAMPGd2Bdgvx4PzR5Ve4TDe4Cwj1K1nTDstnTL7UVF4WhN",
  "key35": "2FEN2aqbshnrBctPEKvqQqjyLie7VcMWN5Lf32ZP2nvv7is92XVrr5LArH7erGrvVDVJdbFqcMbAruwFub1mzbZq",
  "key36": "3zdjnBmcn3B9jUG4uucrfZuWsMWp4ArdheGrcpHoJyePSeS3WcKxE36y71KVHbyJL7TU88V1HvR7sqvVzVCaM5o5",
  "key37": "4BNHKFZiZXpBxDj59UrM74XRskaE4kqdfeMEHWDkPrpZV5oe2zoiyYk9xCsVBVnCWrPum6AtP6j6fHuVbeGXwQmP",
  "key38": "2wriS2KtqWPCD92f1peodos4Hy1ssH6zvx5nEsqCrtfd9JQUtfvC27vjAb2xuWg3sanfN6L2V3GuLqD7Y4BtYzaV",
  "key39": "3RsUioZnYvfLpktVzn8DdWMx4b8Z8cwGKKiukkYYc9GYsm4UwxfuShhim6r43qmj6MEZb5dm2Wc1mV2xWNJweeSk",
  "key40": "RAHZJ2NpaAMmAU11ApAsUitMZAkX53Mor6VEcVcUQiMxX9fus1LJiB7UjQgjWZeGiKAW4U67LUp5zU4BH5gdnzF",
  "key41": "5F5JrZbREw3Ced4K3Ms3cVvvEGwafaA7eLxwB8rZkvPTLft94SymrbweqRgHfAeSX2QPuot17xL9jixU4zAGBgwd",
  "key42": "5pG9c26zvXNicoU83rvzHyuM4LmEmJTyucG6bVzYU3pNsiDapEqT4X9X212f1CugRcGYR41kBMMMYNkQEAA72Rif",
  "key43": "3CuayDdnPskjo76FTFYJcTvTMfcvSNhJxjGBwwSvY9bHRaLYdWNFR2XuATBS7iuPgxLXxNUWyTEzmuYPWzeSupHS",
  "key44": "4xBnr4Y1sEYCUaXtBscu9n46mGsdFkp6ouD1R9YG3VjYda3g84XiBZqqQQeMSDDb6ncEsSvDQHmwXEKUJD1rgJfW",
  "key45": "25Xr1MNa8Ux6W7UMqoRWXPATvUEZzwJkN9i5DUTumRVRfC4u8w9Wb958uGa9CGMMGwWernsrYs3mwTxTCzpdcU6P",
  "key46": "2SWVEKAQPM5GK9ZUBmufe3MhmtmZdcN6VQNqYE6SWiuo2w5Nhv1aevTbSHzUWpzxZhah4fAyfHCNiWmLXD1x1Sgp",
  "key47": "hEmMFuGbaBKEzP8aFJqqyADsLicBKsHWsL1K6WTEyow7MUdUCZELcM9aRA7wMC4sQa8fHVcvyhLvDT1qxNgZKfg",
  "key48": "3mRKtEUMm5QFT7eUZi5ohvD31tqNvoupBw1HiX3xkttbsmvDnUjoFeKQyevhGnadEsdsjbHPyfHNWzHszhgj3sY8"
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
