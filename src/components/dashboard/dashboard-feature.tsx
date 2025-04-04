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
    "5wj1bNC2GCeM2crTGJ7fW7PYhi3UGSjonNWz24i1EdKkvTuQ5MrQgT7YkcR1hRotvdudZeebnQnxpPK47hnpg61Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hEpFNwBidHAYxNeHy7xTvMz6mpCPgmC7LKDCqd3bHs1PQ2k7uKLmJjB2GJwdcMk1Q6Rmz8y8F4sxA9nrGyL77tK",
  "key1": "4RA41wijQ5DdtbPA6z7qM8seaZ6uP3g8LVVyfR2L3pE8ZxUp5VZm4WXHMk6eVuDka1MsgJx2QR1csdAnfJcFsa6U",
  "key2": "2nXVWMP8utGzFujP9Q7feruXteXzeVnz3b5rchKwjz9sxsRMM7E1uQW3wRw1eKUg7MWd4x28cZ5WJE8P4ZgGxNcw",
  "key3": "26vhBnKbYWzNeKNKxpZFEDiFpfLZiVkwPZLbhXsJzrwp5aVVdzS7UaHEJwL293ogivmkrS1sPceX3AC4Stc6vLdk",
  "key4": "5Wmq5GV5JkrU9ghB483WVpPJjdAWMkZKfTBniRLCn5W7w8exLWFx3k2iPFU4f2qLBqNKmyBs1F7tK3MnUYxbX6Rv",
  "key5": "GqHMYwVTgzWswziELSTYTySbANytBqSDGW6gQhMZJmh7ej1ME2NDV2ZMKFmA9FzUcHiKortAMChSuacsrzu3TjG",
  "key6": "2Zndd7hji7SumykruZaCh3sCzuy8McRPdctgxw4ojQCF7i4U66wmxETE3UnbmKkYjjNTYfRHbbWmifGAKzp37nHT",
  "key7": "5oJ91obYTRFxa3C9ruA53pmKxZyCBa6LDxJe4PPWJdpLUntz6kz9ov5R2MBjdrkQ5N6dXjZGnQhyqNAp3mHaMeBf",
  "key8": "3osvS8xZ2w17RwKAFMv1c3zbuo45edxGiPDVrDNisemzDKbJaAbVCd2wPoWq9d9Y6dVtjiZnm8zJNGcn37P46kMB",
  "key9": "3uV7XDpAPQpmuPJfUa7KrZj5UfQnZ3J3Sr574kJf8oHpZaBNs5J3QM18tVvWvxZgG1YgGs5xX8r7u3N6vHUgoz4x",
  "key10": "2QUP4Ydd7qx1kT6AiYYRD16WdUmK99XRoUjCBSx5EkebevuFWok4SXJbGJfMT97dWR9iqXCyjZnWTHS2G3CHxyHs",
  "key11": "59yEqSAnVHjSNXHA12eYrxgVn7LGmCtgjPLkrzipk2rFsv27pcwoug1ju3HfMAFwQqeHRBKqn3AHdfnfhCojzM3d",
  "key12": "wZmguDXDZ3Tgi73KKPB9ycdD5sgLNoPdnzdzEaE3iwoHj9d16BAm3HxrbCLKDgVnUrUnZKvL6aJz8yzwtfYuSc6",
  "key13": "3YB8GZSLa1i1EGcYAMgxjd9ANUeoZLHVTkYWHaPLyfENi6zQBgdr4GaoJTypMZeusXsiy4DeGk63aFuTczbqJzPG",
  "key14": "39BCLPPe35uRSv6p6SWbUhU2uBq4zugUWuGFFPoZ6Ss1wPHvLqRySQjPWPwRVwEEodNb7vZwftvoEiKhPLhTzt5B",
  "key15": "5WddfXxct8ZAeC3j12y5G8bCWih1Cb9sjGTMdrbqThim1mkKBQL75Ton2KgtECiBTad9A7WyyagRTZMpQcNrGsyM",
  "key16": "2iiJsqysg9kEqzyTsCMKPdoDjaSqxnNbeBJWquoUzW8C3QnmZAWqHEavS1AWeEhRmnhN9QpNK7AxvhQzAJu6YyNF",
  "key17": "2TtpyvDbibbVEDumN4zQ843dXArARnCSAYnPNWW8EkqZDfhqyCrNZfsZTQhLSmMfBVeSfFLihshaBbngUUemJq75",
  "key18": "5WvAb9QMMkuuoqvqWUGWR4fZbujfTwPLC31NG4RthBq6JU4Gq3CYy2CKtJ58Qgawss7cHbrwuUgTjPVXqZfTVY4y",
  "key19": "5kVyfXiyoXExiDDrLvHHs4jvig9krdSkVHWjhvF9BFLnc7sRJetyiccewV3XmftKgmd6KjuVYHuyZbrqtMtZGN3j",
  "key20": "3vcVENE1CrSVSNfaYNHoxviZHmvGpkuHbmuBarU3FP9h7ounKtfkhYt6aa7WEp1YxHa5Q5648pEznKVuQwP6Xwih",
  "key21": "3NCKF28fD71Nvx6vsgTGKBpJ35H7MyaKbuqGrZbAswBtLSf53u8JtRjLA4oqWLViMRpof9AocJcNBXdqdreh6x4u",
  "key22": "2yFz9UU5GWEHy8qP9FPr9AogEMa8dtALvHRjkXbCqR2GTEbdkaw47rx88PHraxpJXfqNrbQtxC4xW4r8TH5AGqy9",
  "key23": "3iDykLLgimwmgiMHWpsg3rLuavHYcj9RDjthq9VGoX8NA1CPVJWzNMX2FLdkobwPcv1XAHuyaPqtnAESZZuQAFmh",
  "key24": "4ripTt5QQgtG4ez63ePuJNncwPLAaS5AnGzGHabPtC854oWv6fb77jQXedwvudH3NgZPk16ssWfC4LVwGUMzAPan",
  "key25": "2uDut28k32jWHv9cbJTEiYvxLav3yXYPQJkShbED1d6wjwfP2oC1Q7QTaYWvRVuwcjnrEF34hQCkedVSAMACoqi9",
  "key26": "5SbrdLEDxzqrwHcdLLQ2WXpi6BTuRDKrAZL2T47V28QBvSKon48BvSYVBdNjXiBU1rgvAvztB9jGQqrwPixveVEP",
  "key27": "3kBYnZ6B48P6SyJ4fvFSHHaYme55LGr1jjB6n7BUvuyMwTEpe8ZGy5TxeY96ZahZGpxUp6UzAm3uDehc1LVFyeVg",
  "key28": "5Fu9UNT3XurMMxrHjUgEc4zP8tK3KNL5bUk1T9wzJaaWQau3V94PGo5mSvb4YC8Vb2YGwxLFgthUFrnetW4SGPfA",
  "key29": "4MKQoTyYTWRT8hFzFFepYbARNXZKp5iE6RZfxeCRB5SN4QE1GwonFoz5NXzvri141HtUNp26vbZtALS7A7ATqRis",
  "key30": "36q1KLZogEaTEYR36hm5hhtLgxverCRbUubPvRAK7xZGXgrdsjXzjMm3fGZx6pCKukFAiWapn4MzjvQKE1CpFKMg",
  "key31": "25Vj9DLRVeabwfTdDCZ9jnHVjrGEuHceZTnGYwFajXS1XXmCiUrvUK352Vd1f2QqPrQyjVwxzkXCRRzdcFX7whJP",
  "key32": "2AhUsNhqZKnDwB2a1vzZLanUsaN63Wn2R1tgFz2nfPeTufBHdTgSAzHzLiRnFwsZKEr6FCcfxcr2GwXAtifrdprW",
  "key33": "5arYbeLwKC9eesT7GWFidFkNLsb8vKGMXZHvGjEReaDkDqLn9scXJJhTgEJ5isrVJ5PyCKZACpe6sKkwMHuZJB7X",
  "key34": "tijv4LXXLj1dzaLtF8vXJhmWDtqCyRDkNS5JPpfzGr1VRBFX2sKWg5vg97Ha9WQZmmxmNmDWQPRstkT7SemWP15",
  "key35": "62wMykvw1MMyuejRBGw69NB525hTcSiYLft17hjqrgaNJsNNt6oB22pxR8D4irL94HLjQgnezguzxgR4etNWZF17",
  "key36": "2HtsDCTUg6q1PYs3v59WRxwjEDxHs1zbb2UNvJxyLf5PVMWa7WQGjG1o3w1hcW82fS1JmeBRAM8WsNvho5YTHiAi",
  "key37": "rc3jf7h4UKqPn2WMitxKGokrr6vgVJg7xdy8JWR3PQFShJiuKCJetkX5VtB4Wsv5sZbfvAzRjaxPcbY1vqJryi8",
  "key38": "63fuWx4K6VzJBJerfobwTPRd2uMXPVejzWHyhEgN3K1aYpHsmuz8e7vtbLswbakDSCx2ZrriJvf8tJ4ZfwWernb4"
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
