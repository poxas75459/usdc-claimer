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
    "2xqnHTyYGvEDcNcGNSUQa34NrYNXvw5749Zhauo3day7LjB7g1Ajdx6YZWiju6CSZ9zj6oHwTP4g5YZsMqyZnLTQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XJ6Kk2kobyDhYjSQb6t7ySgvLqdPRHag1h9o1gjaxdBWW22fUZrv6Fh469NS6NCWhPjGy4CRjx8mdaAMrgU3amA",
  "key1": "5yvRmVRRVhsdYuYYzv5TGp8q4ZGof8Zk1Eg2QCXuTKQjJxv8ZcBeW5HA5sEJu8MgMeXCjzShPads811Y7GNg25hd",
  "key2": "23itiCfx5hGLBJNnp3oyZP1cAW8qmCgkLRYQzGdeUbuWUg3x2TRggn2DdnPt3xJkSsfmzyCZB4DQmQL3CLBwzFjD",
  "key3": "4rhk9YXui2kKNgKf9gcxZ17Ftf6W5MAuCvpbF27Bj4gzxLdrK6KrUgCFhMnDyJAEmGVjp51nQvxXTHCA2oLstZz8",
  "key4": "41eddv7D7DLNMkBBJipteMRidhCfEJiA9bxYmGc61CqaqeSxR5FkKcYX6yN46xyCQ2eBJnpCkGvTJwao2kyMYzF8",
  "key5": "kNbSXPUd8dbpco5mRaBF2sEjwcqerhT6qpp99Vf6Uq8mrSHRFSbdJscN2r14f77fXVqqTHnipYrZm3Cab2Rk54R",
  "key6": "4hG8n252rnKXsyyMhwMbvsweGLKfjABdFB4tjaqPAGA9xBnFHhEvkMfETwwACT3DqYYoGvvQ7hLD9aP35HRw2vZb",
  "key7": "5f1LfnsSQf7pWvMb5jPLNaUezQC17DARUzgTuUVyJsNm3G39x6JUCK6tL57vmp2QCqc771J7CZjEmow96u4fbdEk",
  "key8": "55HtZWkvQyNtE81ndDG53wPK212g29uRikPqqt8yz5xSzDj3QeFs4nNwJGTevoM6cYKJpJuqkWNuxKvVqZe3s6aC",
  "key9": "Y1NiCHbMCfRehKg3ScMjz6LVuv3UwrRwKf2j92c84RjtM1ZQqwgEztDjeiYxzH8eLgeC6vc8eiP34fxvmvSbHui",
  "key10": "2j5NBb4ibBrcUNrBdab5m4AK3oujYmpy88xBQC1yFFXhNRmDxqUngmf5s4mRLs9w9CR1XBqBxrCtGCzsVCP6z2Za",
  "key11": "2gkz5sMQ9RZCwU3pmMgpsgTq2Jt4dzHDzijVTGjAtJgkkNFKF7aPpSZ2iUSACKMFZQhzFT9jaVrZavZHEw2w5hGv",
  "key12": "4TsG47QM9wwkrkbLdT6ifLoHKzQvbKdbzM5aSukAitj9BomSuyuRfLjyyHG11zq2ngkduUa76ewrRwrjihEDgJGa",
  "key13": "725ZFXiWoWUhN332kVLqjphqtJQ2X9gKiz5azPBjkwqqfFJMWEVQzHZojKSoD44VRNf6RdGWgjMZnqXG9P7sxgA",
  "key14": "3XSmMT9BAoBYBKx4nSXmi9YspnyWYYuXAQ9fFrRtfrCes8tceYYZcY9PwRQNMjqJuvA9mxJj1SE75ahk4QfUbWHJ",
  "key15": "5iNb3hQxuPeZYhN7h8RjKdUndYykUEAgdaoU9FAUCk2z7wgKeU6miUYB8QKyRbF2MpbLTeawWHRr5w2MQ4mpxRzR",
  "key16": "4Gb4WjWEkw5y917kyJtSemZqFJGCYXwTMPfhjtVNW2H8RaUUiWbpigz77n8RYNBgbZ1UmK12HmyqLBZn6XCmJxkY",
  "key17": "2NRE8BZizJdvhfUe4yZFcpDkKqcKnYucCH1DvGtdKRJNvQHTMrUZGnMDzTDhcNQHVSXWV2L6Njo3CQQRtcchcSFy",
  "key18": "2XzJreZF5kjMzqDzKcCGU9YHKU4uTnBFPKN8mW1sX6Zw89PmDH2jd9B4z3L6TtnRjFBugwv2XCuVo4CcfUuvXZTa",
  "key19": "aZXdi3kT3cKVjwomu54Z7WYhwmdMrmNph99n51LSJgmWnZfSTDboWQvPVx4D1BbFt8WubxjCKPVVSNuKGEn6Kj7",
  "key20": "63g2L2Tw2ujLFdPTFKz1ULHgKbSWBiHyg6NwRZYHTq7NyCgqFT6srzFVxeUetDbTkJ2yGMiNBPy42MVBbXYoqCQh",
  "key21": "2SadBFdBbWJDXJNFSVshP241LF5WyW6EEadHSF5Eab2JryX9M8cmXF6nwnBjWA7VHy9mWk83AbT4g8ah9sjuiiqs",
  "key22": "2LSC5QhCuaRBKBcBx1kcc1yuBVfAZTtGSJbmBcuio9kJkxmmH4sMeMV24YTkW2DGLWpnEuQidHFiAj1BQJfzGXMP",
  "key23": "PGuKVaEkCJ11U2HbLy4dRuSasgq3z8oViDNEsZd2byHfRDZHqmJMdPUzGREvzbapPP6xXKsxauST9jpo6pfUgPR",
  "key24": "3UN5Tr3WXk7iYxr4AGHeK7Tk84N5YJgQLT7Amwf2g7CnoLAD9Y8TFT7w7vfiSJQFQeoPZKpY4SM7ZSLPsLhfeaE4",
  "key25": "3TT5RomC1PmaRboYU56DBKqM6bEpxGwAVFPWEUas1hRUFoA8H5iWJkjLKBS5xrBsaV2nmKTgJg2yp8ZoQpMvKC6s",
  "key26": "5iGmPkcHTC6E6y3sHNgQxWPTtHJ4uTG6TVTRUw1phsRK9i2ASFjpb43M2ds2GRnu8U6N1mQik8xQpgWekRMacTjV",
  "key27": "4jbgP36Pk34MG4kbcLKyaTEr177Nq2YuMUkxq9ReymYswMycpA4KLBtLXXQMDqrUc4QiTRe9E8PkXLdB2pCbkCXH",
  "key28": "4Ayut2TSgnKzmF2a8jVreoo9RD8vH7jwHu32hRcQ1Eik7oibpx5h6KNeBXRjDmGmGmQ7pF88FtqNsYpzweNwfPCB",
  "key29": "2HhMZyF1tJpFBjscaw6FsfczFWGrgmnG7kZPTqDwFd3Q4gbjXtZGmJvCmJLXZV13A9ea11LWv9PUw7wa1eAPdUXJ",
  "key30": "4MWaJmc2PVVL2r8zyxaYTJ45tB6MMmgtBhLKpCR5Y6FkRZ6o4YnJoqHi7nHYNGJ4g35xmwSWQGMVS9XLRJKiujDh",
  "key31": "vPiBTwScay8qpNijwZx3k3Q5D5ZywcerJ28JeYHv5mZaoiJJoVkxd66KH7VBeL6j4LoH5kC9bvYg8eHkEZPxViA",
  "key32": "51CoBkcsjqs6q8QyT5wspm4kkyzssoWiy9eNbr1B5Xui3jp1pZ1bHiqHTwnTXquKFBabvXtngYSeP8WX85atx8Qn",
  "key33": "4dEjaXhCx2XRVBn73XPyyYQrRhZ83362fdJCSvkjzLT8NtCohSBqvdXEgXmxrckGp3RDwzAu9ow83M7t8NrxENFA",
  "key34": "5fCxoQ6CFosULiPDbkR35x81X27ktkWSunhXj9BMP8BcDwrsfimE9v4pVBpBLA1gVLAKoXdRgcBHkCQpLmnKXBEY",
  "key35": "4adWN5hhAGotWVMc4VXGQidZgYPxeKHsX7CzzUiBvEMe9arqtPfGe1JuUcHCrfKNxSGYkEdbaV3NMY4uq13mfY6d",
  "key36": "3uh7oJnNE5vXFyNdpMYteKVbWrJghzxKyKMHqjrRsgq2x98s7NDmr7NkPbpAt6whxvaAKrYTBECsCQt8LDDbsqYj",
  "key37": "4M817CUap21oAqu9zzET1ccy1TG53XKcHbREPArfwErJcmDuZtt4tsKyNEqt12pADcWNqE37gKuS9NujeSvJiWEQ",
  "key38": "24z7mp2A9fRtUQqkMgmECqUUjnX2USnjyqX9jRNPtUgB4FXo7SiqcEX7VZrsE2J2AUEmPakKkW7xRxy9sYfYgcjQ",
  "key39": "3CGSk4b3PtaCBYXAYe5cUDB4jBHT1njg7N66aUN1yBQZAUFick3TYqDvia4UHzAJHfmr1MhhEdgHUpfGSAjubwRc",
  "key40": "4HMVU5ba5Czvokr1q6zbPAPZpVeDzxxaZvBGMrEk8RCSVG9XVJDcs8v5X7YqpKadV6aFs4ywWVepwJA5XefPpC8E",
  "key41": "JfZZfcMC85rRK42bDy34TGQpLfuMH7gB7dgLUnraa7wsBjLtmo8waNj6dUSV8KjyMEyMGDoGuYieYaH5TvqxAPV",
  "key42": "4Q788skWAHrP7A8tvNX6msYMqjt8gbWmpueNH1Y5D5XzptWCkwRzJVQkkW5DvpgQrFV5ESeGM764sYdHsmqsTfjh",
  "key43": "c4PdvGNyyAWGVyewZMBJu9UTepNqj4T5G7HV8UAMTKnpX5TsypNZucXces6mwmqTHguKCMPTxJNs1eoMbb6yC6a",
  "key44": "5DZ2wT8spVEMiaEXwrph5G9nVNBf3rokiMxdZExvmA99GhJkh6ndncDfAtnoqacLpwDAZedMa58j15eNmYk3XfT",
  "key45": "39B7V4noXjCBn1yEfgbiGScVjH5aBRghB2fqFjvWGSUSn4nDCPezQUR3he5cR9z7wCb9NmjDc8gWjUygYrC2Khyx"
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
