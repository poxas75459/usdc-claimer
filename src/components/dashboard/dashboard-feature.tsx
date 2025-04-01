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
    "3Cd8xKDG7vikiuXifY65cva4Ermn5VZPDmkJm1PaqaUXddAH1JFu7j7D1DohFzypEKLU4LXhfrnP97V9Rc8xGTDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22YmzyLdMMEGi1ADz62n8dV7ei6oeTJgBoQGdgznSirp5cE1bquKTxhyiENexXJ8CA1Xzn9mCMYaTtHgdrCGi1BL",
  "key1": "2BqHKUaJR1h2pEHA4b67ivESbocGV2YmMrR3u3XX9FgGKYk8uJJC3NMtujbTMy3J4Rttc9SdjZxaMRrzcRpVSpv",
  "key2": "5dbCabYJtg2pmTyXVPifujDt2QoPULgBxuGc5UAjRYTNWFK3cBS1YjHQwKxEqZ72Scm5kcRqYZHmX7sqzkL2dpb4",
  "key3": "5eLrPFWHkqJRf33Rp1fHUTwhpDAZAkS1p3mJMKnFB6h3w7n4mk53CPiNrH1z9xWPFpSrhdjRcNcfhCEGN8z6DzYc",
  "key4": "66DsLuuAD9LJvsaN682rLVpLW23dKTkrjGQrEE9utB6F2FXkPSrTSsJZvQi9HxuQUmtRx6eJU32tnnaVU1sB1Xed",
  "key5": "3pARsPD9wyYBiFfhg5rEdJAEuTvofGKzFqAqTBN61GWLVj8az28rCZsNW23H6gYyaojyViXUN19h3tDUdUAz4UyY",
  "key6": "4rkn2gQSHBVzyjanhYAsp5wkqJMys2fUDr8RzxFK1MPJGAHmr3hfLBUZPFgesVY3cxwt4GPfoV9iNa1XeVtqYpHN",
  "key7": "5q8oMBGbSfJ8tZz7QXuCnaksJFLSDLoi5tv8Q5kMimsmxf3igr9vwSNAzAyTtnEDPboz4WMGP6w2myJaZoUp2H3M",
  "key8": "5z7BMDqiZapkGE2RVNgrfHmk6eGTUXQE6kDgJ89ow3XzHyK4NCi7rx82CVYyBiyW8JnVR9yhr4X6T682M26e1m9G",
  "key9": "4s8gNEt8RDJndeBPDYpPmHUkS3SCn13hMT1xHkXQkgBDd5JwBU8ynho7jVaaJb2qu6kqVCKXz2ANDhkHki6PB6bM",
  "key10": "53TYZfu821j9QCaBKvqAiDLWRzLMGdAJxVDjgdvPRWktsA4fUyHiHE4omEsQx7wQE8iSTq4EeqAUFQpufc3wJZ32",
  "key11": "3RMpQhrLReV6b9DhxbMbZYD7idoDe7ZssSoh8jtuiEfSPNWmne2vmNAm4kozGKYidskRdNQjkVdB2qSXF4TvZ6nL",
  "key12": "67GDgB9f9uSeoPRyAhLjUvzbF3sjmNouHWPoQHyUuf47ez57JLXkPjkwVU9oRYDH1ifASRE9TAS56vePFkDoANqj",
  "key13": "2BNQFTcwSi1JfD5auAwod8opwsWDFyfBtepBbscDpvNuxPNwsYDpNpAzpRqoeeh56yj6w7L9qdaK2awA5onZZR5U",
  "key14": "4S3xjbbq5yYTKdmgW8ZnZxXTzrDYGCxLRzsvbJiSDiXorShPieEwFiy44w6zt7LdSR6KCZX9Ycj57JJUB5sKEVXj",
  "key15": "3b296DPhwkX4uv8h58gbBXHPxbfy355jgRyyXdhYyPM4VTk7kGKn5FQsaBKPuXE5qHhT1skChYeTzMcGfuvTjBqq",
  "key16": "4U7VzU67CDzvnqxXnFwz8VbgZxt6szmPyxeqzNfEPEKfjF7UGS5YSUUiAnL36aaDdxYvs1J6WZZxSyKbdrUJuZcG",
  "key17": "5f2QHNojKBbyVrp8aeKnomrrBwhNYDLvgvbkfbC8vrF1uWSEprkRyKGUvKB2oSiEJXwdQJ9hPCDmhbYwnMHtgDmv",
  "key18": "5Zo6pb98DjiVs6ZwNdSGnbUjcV3DaZL4CpgaSagZDbJAB9ssiSCxXHgHAHPdWZL4RZeRdmwwFxnt82CPpA8v4Nsb",
  "key19": "3m5tkEimNfaw1k3dEYj7WJPb1SZ6mrtDEvCyxzxHNhGu751qXMAGUGrayELsMBQg94EouCqe21myKuxTHYZfS9Hi",
  "key20": "3WbtRhYwVycmJ6USHik19YyBvVwpD91qWGfEnfVfMsQ45NXQXUt4RA8gLaeWcYwQZ7awt6ExXktNFJNwpjzuY99V",
  "key21": "2QthLj2moNo6AkCEEDuEtUB1vZongBwmiiR7Fwpv29bGMGMbubkra15CUYpwnQXhoqXadJdb59vCTHVkqA1X2B5K",
  "key22": "3xUWAT86rMcBUWcZnuremg8KtpLsMjmU9kpmgX9vBzakJjbEFVAdzhPmVfRLFmxVRFudeeZ51A221s32ZjWUABx",
  "key23": "4qg7VRQnzrjNU9ZuzpckAGazxY1dEXEDhVijM49uWiVn5e2xTM9jPUWRWegZkJhctKGQkFGFUyHSH2toqPvT14iM",
  "key24": "4geLEwaAxNjeRJz19Wh2su5RzvrmM8aq3ceGeh4Vo1rN9CEzdc6HBAW6Mc321vsyHUjaiSGCJHifBa5Xx1M43Um7",
  "key25": "4izUu6BDCGMgwHrCaMLYTiALCHDnPkejWRnFA8coCoGgRyQtWD1kWrLxaxfh8shhHTYNapp96m3ZjryGUdsEdUXm",
  "key26": "HqzUnhEtA6g7U2MeE41FY6D8TXhhhZG7dDAWEAViDJJQLLPqCotCxq6riS9gvDxJFAvTXPTpEmGX98EpRLa4Vnr",
  "key27": "5n4Qyyc6wS1TiJcp8vpa7tT5HFU6jxGS1AhQ5akC6ZBd6T92XC6byAB3VrHFiSSRseKe26sNc73Fr9mXRUhBLmeq",
  "key28": "2WAiMGjsyvWbjanDUViQCw69nC3YmU4DdMw2ohe7spVfBfVGC3GZEDsRo8ZREXkj7CXSRCLgeo3AVy2BsUHzchPy",
  "key29": "3167hcJbog1x7E7mhaVZobJh5QgYK4NRfUap9t8cwXAwytptccKhup5ZNPWd6z1eXdEdZt1Z3gw9NSbFxNcLhsum",
  "key30": "4pChPL3Y39VJqWsnHSfkw43HoGavNxxS5mX4vC5r1ib5cDr6ouQGZaMsEdUqYCVc6u2hKK8LhjLLd3dn79Sx5PMU",
  "key31": "Vxo62jApn7mHpaCmXRsJQe9hWdf4DL5tFC8JJAVxouATZu3Yh1mZDTqvrEXFr3jZo1K3KfrCYE4zCGR8K5yrBns",
  "key32": "4ch2PXDwgDCZJuDQherE3zeXCtJ4Mfdkz2NhcyXiDguGuCUqsv1GVf6wfrs7eZzckQTnuBqmpzxvz5uqftYc4Xv2",
  "key33": "58pYopqRqhE6KDLFCDjd4PZbE2Puc25craDMeiFFn39S3RYE7JkfKZ1FKUvz4xAqS9bFnawvNw4mZRH25skNrPZc",
  "key34": "3jrPAcw9C7jZLw1jHBfrrczHodc92goQJaMqYSAQms44qBHacwU2soLeUV5hd8k7NkP5PyMYBM66CNQJqWCCEhCv",
  "key35": "4ReacH5Vbbsms8e7GRa91CAuGHUqjfNMgJhn1aiVW3ei63XQ4hxtmxyYsWDAVtAyDKtvynzuQrV7m12Jn72EfYjd",
  "key36": "5pLFEvxmrMB2r4JQYgzZePboWufNdCDqNxSd9Wzv4dQSmNUk6Xt6c6sjayKi82DD33CuHEbw61pT8dygzDuAGSeU",
  "key37": "3F7ZBdqDerNkztTkycoxo1sVcc4WgE1dDFxJethgfdWm2CQAsnR2gockNA9co9PmPd3TDg2A1Yc3DnR8kj29zNNd",
  "key38": "b41M3aQ6isqAMzXTDkbPupEYFLi2SLzwvJEHQzZcvttWr4jjJkTqPuPFrjk3dALonzjJfvdVE4AppXceLSWqx3k",
  "key39": "5LLwrndLvV7D9CTYVtM7epWtp6zPyYeSSAbSQSJv1fL3oYY5yv6ZVU9jUNi9PZLwwRDhZ4mJssfsqVU8Eco6yDMV",
  "key40": "5zMH7PahzVDwMnjkJdpzAdysKgKFfdv89cmmcTmah8VE5wxgBqSmU2rWCQL9ZQRT5VWAuy6UYE4VP8qpbum4PnQs",
  "key41": "66xLDexfxgcqRaffSRnDvmu3GtsGXvjxfe9xmY7ai85yKitNjCWEmbNLuh7Z39qYLQiGd83hKfDTkZFp3fBP5NJK",
  "key42": "35NvUZF6NPxAMweA8UVpdDbnQZJDjSLdHUEhUSs1N8zoWmCnj9qHFuxqpU4iZa8eqY39iYRroVyGXnB8kiXbd9X1",
  "key43": "GK37fJFAzbsqAvV7M2i53kTWaLtjG8CQD5nicMj7Hx4ThTH8y1ckxz4gWUAAAL4QNNfjywR156trGkDecRZcQ5n",
  "key44": "41UCfLpfkKUawfN8ScXbAvBGmeUgbHW38LpzYnuGkdeev9B5t9GNYyhAzBGHRpajYikNd2CWrd3YeUxAHAQbwkVJ",
  "key45": "4sF3wPQ9gPRTFjCuBmuyovV9qM5Y6J4LTEav6pYsSKjKKjCrorTNoiXUkoaHyQNCf7sKxF2UrNsz5JQqpJZE7GqR",
  "key46": "3wwz2SqkSSHaWpCEf2qTKS9rLyQ6FNdQXEEKudjndRUQv29LNBxDpeCdpd7nxoUWM4dHz4uM8Js3G3AHJoEEmfyt"
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
