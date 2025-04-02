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
    "55HpficXh2v7JYc1fYtHjdNXDoMtxZUn8szXmNXEwFwLRoYgBUthhAD67K8FiDUatC9qv2NDtGKHs3BiBz3ZgMKu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UBFXEWAUbCAHbuoFZdLrifAE9xXKPUoNL4W8TojvoHxsRnUCPyp62vD8gALKSGDXGjHMioWGnrdjtQpzWMFaAzm",
  "key1": "5i64gKkKsgVQ2tzdVDmweyRsKXydVsMq9Qc99U6WX2egv3UzZFkBr29yjLBttjwMzUUQMZ4uqoaXsrBye4TDo33J",
  "key2": "35NoNkLQmvo6cuE4n2E6Y1uVBv6RE7FAAFKx3Agf7AEuM6rMjwXgb3Hb3MfYmaH9haXQahMAoXDpNAQLHqsuY5ok",
  "key3": "3mrtc6LBDjzsPWQGAJP3oZzw8cZSxpnYaeLC4hh66jU5FrmPeyjNvaW7HTJkn7MZnGkAF2wr7NV3C12zQGz1okwY",
  "key4": "497tbMWnAGzJgyrxCy7RMh4tAgg4bTcLMQ8nMCy4CBfp7r7XmpRPTdGC9PuNxaYQUWjXWk9pd5LsbQhetq2LPKhU",
  "key5": "3jNj6juEeUFeP6TKeXxvNURJLsig3rfENTDa7no1oMTS3wfadrijKga9AX7ingH84WvCUkEopccTBYq9MR1SCMix",
  "key6": "662zBCUwBCrDsNoYM1q5DS1qyAMPT7MKnDjEugphwZtEaVjtb58WBPMwXahrxFodtVM28bzBQx1v6ymDmHAcXcDr",
  "key7": "2P3r15rz1kNS6Y3CCG1ue9YZrLDs3h8MU1vWqYjcUBS7wDH1TCJ9o8fQQD7sVwrGp46EHWRvdDriRyJqoaAxPcLV",
  "key8": "4Wnms3qSRxfxY5LLDGqqWrfZt9jpoCfmvn7E3QLyDu5iTz6Vm2hZ27uvaJQ9fmjwugUT5ojvmsvG5QSmZEqgNTQk",
  "key9": "fwMWvzWeeV7onxkvvdoThoMkjeSm9Xm8ow5Az6Ko4jPCv8PAVhJE4XHVC4GMecaXia3FF6k2pxDabDabdpE16hs",
  "key10": "5cKVRouNBXpm7PYK4gvzsLK4bDJ8QQYqnSCAZFfxz7m2LDqKry5U3ccVEXw1oJtrDuTE2xtEzdVbc9sT3CHU2WSu",
  "key11": "5qfNTKM6nNDrpUDcoAgPFcKP2p7Q2dbceyQJ8dX2PYvFAULEmHqTdjaAeuA3NUus9UCbAQoU34BXesNiaiZoqamt",
  "key12": "3K9nYjMoVMyGNd2rrnTnGZtgLfrUunu7hKSC9N8XcoDKCuNoV3GmDT1sBEn75ziVf5au6fq4Q1THjhkLQMtdC8jX",
  "key13": "3gsHJoaVCMWyJRGtMB5AgUc69nKmWCe6jtzDj4QR4cTJLuBJxp1fddp2765QBNbbX8caEQGS4QpGiW1CjNM9izM9",
  "key14": "29xE8oXmWuhD5MxW8iqcc54hczqMbkSN1fmZzfepgEG6fbPYBUXBcKQbiaTDarNdb5vzqHptd5SpAbFRTVoHXRrD",
  "key15": "3Hws7W9buQ8kdXhnFE1NpWnhepZbDFRAnfZ1jJCcyD5FesnRB6GtLwN9hQDKdXhWtL5rMPC49eaBcYnwUnkuUUxr",
  "key16": "2UhJmza1nkatHdi5ZHc113MUyeD6jXvQ5yHKwcsA8jmT9RnVNBGLYSyAdhDWjgsouYHWFEFzuwS7cP626bRtWSXY",
  "key17": "4HRCArcijhbnkC22mAmDieiecT9PvKxgNbAXLrGTmnpUm5iLMi4mKPUyKpYYCRn5hYjTpvWPoknGaU4MGvuBybN8",
  "key18": "3CSDt1Wca8AJxc5DY31tTrKQjKqrmvPj2n4SaGunA6H2oQd5fyBjSQbWoBiYcPLUt5eKzmxpYtiApVVrTEuZboEG",
  "key19": "4TMA4o1mEopN2NHytkjPDTT8hQESfbzXXPfGZQvqsTHicDGU5Vb7CeNkPH1audFkSxVwxjoBKV6xkiaodZvvWYvT",
  "key20": "4QFC1TvaPwNUQxbRKLFHHBbrmu1faPxLb1f9QhbhbMNBcgvHE7Akpo8gwYR8KSDN17AsigcUYT23tHGpuLVJLjrR",
  "key21": "RaY2V7zGP5o8oo3WLg65Y433Ln7Bh3EZDP2jXve2FybehnTCbqjo2Q1M4gfyNSoEKD2BMCmqrWd86GrP1qnMkxX",
  "key22": "4GNKCG2F67pgAqweB2qWmT9m3w5w3J3ejYyRn2kbX3Mw6K9ingtLxSFHiPiPCYCkdSjQtLfChvXtyTWFtnjHjDpJ",
  "key23": "2PCni53umPSrciJ6RkQUezCSwEgaWxCsVotw4GRsjynZxKYiidSqcnueDXjWFJkCatqUbWkcLBYwEo5pzR8o6CFV",
  "key24": "qXfTs8Eqzaa178CvKjPHQ5jF43mFJwCGAkTGyzEUisvFb8Lqcbb6KM3DTiwBWoqdcKYxEgRfUnMBVwiZNWRvpvf",
  "key25": "5ehf4vqzdiGNGtGgnCnZsR29actyXDwgFR8VxLWzSi35PCp3cjzX8rnGM3Nn6jgGewMAdzjvp6t6x2Fg3pfzLtap",
  "key26": "2X1uzqgi1yQ1BxgPVjBGz84jt4ugjehe1wF2rH1pu9mw5jZR474uKabt91kXo4E8sVdxNPuowtsUtcqTA8Rqvnre",
  "key27": "25L44JGixZH5RcC7mkXwgoTCqxCw1cdHuBjidBS95bf5LsY26BVw4LH4HAw7VozaWWQTkJwuJuJ3rKi89UcVatRH",
  "key28": "2dNXoRhskwWngrBKfPBZay6y78JwDg6m6MWXCN4C8WDEgcXwbdBkq896zTaUKiW2vCwvXxbcwk1K4V8xwqBb7g1U",
  "key29": "Y9Svqgo45uqUU7osYuhmp8G2QDApdhPqBcgVdPXYKCp5RirtG7B84ZP47QDFB8yLraUxHq84qpiqwe5ACLnmdyS",
  "key30": "2VEfXE2CaRLhgzjTKEBMPrs6HKABcdjezYgjfAq2XJa1ue5b5J9CkT551noyeDGJ1ivQp6wBfh7Ly8iQeUYjavvg",
  "key31": "5f79XUWRzbbZDvTaKnPv8QN4ojc9YkcKDgpdwiAjESKz19vibDhR4AbQf2zEDTSYZAgEXbwXeYVH9WijasmTNvqP",
  "key32": "2FvN7jdkYJ3dtcHcQEWQHMzGFAuKvhQnFzopBuBpz7u2ERWG3PNbGiiFATa5UM686Xqh7VTL3W7Ub8Dzvv8gUteo",
  "key33": "4ArE78bTL7bPyRM5gW8VKCGpw9c81MwxxpfQCWBccU5pgnbnVqAzD5koyDP9VfawPWDjraJpTYx2xyTcG6rPnjRx",
  "key34": "3Q6sqanj9uHfmLUPoFuE8uSnTA9M4Kafd7K5iw4ucMiNxnq2owzFUak5rBrdDYmPGiVDy1EZSANmFHEgar8ugPXe"
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
