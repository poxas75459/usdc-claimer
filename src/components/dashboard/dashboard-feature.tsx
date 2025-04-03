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
    "5mzfrpuFrwafrQPVnHvFtCzQGxVUujc6EDwp6FK2tK63yLMJMdGvH95YncmkGC3bgFS2B2HPFzZv4njik5mBoMcL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NHyouYxf3pDBpKzwXPFNs3iA2qe7G3p2KBtMX8GfoC1nQwqnE6MDTLwHiYzjAMbJtUFVwBFpoRXGmUNvAPB5k8x",
  "key1": "5GdKyTxBiA6uTn8AqhWFLzighX9Li9ZDG6NzdwiX8vs92Jee8tg4mcwC6s6VfAXVUZvLLEa4RMs8AUnAmUpHinUi",
  "key2": "nBwsHaGc7ZtfUrTQknT78MgYFWq3YFwD8pY4FRSCFq7Jj46aAEjNah3532p64TSebyVJBksVYBx7rFWjB6ugNnq",
  "key3": "2zdqQtVd9Yy4N3a8q3PYw5TfEMB659ybnvWUMHZfUMiXCnALQfHQ7ckiv9VoYbPswWdwbsX5mvKdT7wYgfegBb1j",
  "key4": "5LmssC6Cb5pUTXPhTG7HRMUG6THUyeH41eJDkwryQjPxNA84HrzintyqqqU518Uhmhy5bU6MiNRaGuxiuuTmtGbs",
  "key5": "2bz2YHjyLbmYC3YpaWxVpPqwpgNSgu9q27AM21a8aHUYR45TeSvY8RsfzxKBgxJYB3UkhjyfDqGRpgsRZ6LJPpKu",
  "key6": "3ZJSj8BkdsgG3naiEk7RBRs6yhaung4kGwXGbWeYZu7ecjoWCFu62ewVPuAcsGB9NGku7vYomqxkJ9NnEvpBrNCs",
  "key7": "2x9uR7JZjL9Cy84FQbWyRF8uigopNStnCePqgGbjrAFpd3hrSJagKSJG9hXyMbd46H5HPsgcjRHj2Sef66rAz5ZS",
  "key8": "3mLTnW8YWy3qBAGDLE3Vrhp8NsAaHv6LEJshcJFg3BYgdJWoVVmgSPRgQ5axX9dAF5hxnHU2pge56uP9wjChgcuA",
  "key9": "4PBZJW5gXe168euoNodadh8nCnjXpRjVxkyU3NGC2RTcXF9LkxUbB6uLQFHMB7FssEriRDmy3xnjbWRJ9g2cUteV",
  "key10": "3L3eSApgqGffUHabmDhXezFcMzQKiW45SeSqzTrG417HPyaDiU5CkHpeo5SwesWPsLjnhA6xASFBJH9KRthc9kaX",
  "key11": "RUcZLsTgPqeBNFMB6W1jqvZ1K3XfT5fn4G5MHMJvCSTjKHCgpSRX9UreZ1tsVKiQavhGYLSek4Bk3zb1HJiTGVE",
  "key12": "dMXZ8dBPYhp7YqbWucwaCdhBU43kPAXHtJVG3FHuYCdFgo61fFr69ZcHhKNXHJAoRp67KDAPwk884FKHFXnJ6hN",
  "key13": "ygWeGXJHD82E9UiCppiGng6PX4UiinxfjfHnkv4a1dUg3oT4pZSi8gnYZgAeKUPXoqqsfqycbGC1iPx5KHKv7DQ",
  "key14": "4ZEWL1V2iZ7rx2oZyXvW49DaKjHj1scBXrzob7RcS8hFpLevo3PAADohmgnW5csYpKAB9qKhxJU2WRLcBe1J26ac",
  "key15": "63MDoJR9BjFDc7ArYpsyFZuYAJ4GLYXX98Xa3mWxv7Xbso9VFUNw2T3fEmNk6TZpb8r9esbiHM97BPBYeawKUeAg",
  "key16": "46GyRb3F1AodT3g8THYdabWKSMZLxJxM3K4D43KKFcKrsn6LUmehrWyqTMSdYgLgEfZC4JDrvCqka6FCbKBRhjYv",
  "key17": "62jbGCB2aJ5B7yT3ZwKUmfiUonQkVPnZ3n4F7uGfNTsGRDMTZHQrJNqYA2tVrBdcUng1esWxXTZu21UVjgx3daJr",
  "key18": "2fKx4SabdUBgf5taLq32rcdgvfqqNmamacvBmzyKwerkbxpNTcXsfdMTXDe91okY54gWgKLvAzPGk7BcM6ogwmBz",
  "key19": "CQKGgpzo2AvkimwWzr2QULbLm8CULi6X3LuSgY16j7Kq7gA6o9yr6LDzpms3hP2W74kh8gbSqMEtATcHueLaeMu",
  "key20": "5bFMAMFRqux5fj7UbDxotSCTebCKzkqdKXrEXKkedcsgErD7FanHqcwjKSMnHw3H2rBMJKbYojaYuiR17cCGcLGL",
  "key21": "32pxdKce53Abk5HLudha69mtv3avwTGwdS4ZcEhzJbnUARVEEpHz8GR8VmokP47K5jBHvCzPsCJJ4pCoURqSe4mW",
  "key22": "53PGgvcdDX7hUZuSAtZFSy9XmeKiS999fF5YbPFCmSgwKikbnvN55gU3e8r8tC5jqLAVRjNm8oXNWKzcvhCUKB4v",
  "key23": "PYd8GHSGBXi9FwbL53Pp4w3SUa5qukUZE8mrrFY2MGs3CQM22f8HyVEdcS6TMMeByPcaX7GC2huHnWPfAyvBHMY",
  "key24": "3HMgLfttC1i7jMPxtVA8Rt7FwLk8ZHcTSpzJQGYsXsFhUXK3gFwNdbmQSLrh8pAyp9ZrVAnp641C9xKd4hcMAWET",
  "key25": "2UbUJQ3NrA9mhybe9zsqyNDYpYAPUASZKMX2Z7Q3s6kUSmtMofwgyKBpGZSRVxHUQSqxPRKZtsunTP1Duw8H1jsd",
  "key26": "2e8c4vS7TMPaVgL9KCxPxKqj42AoyTvQ5QwuHVcnyFYnAMr2oJByCshayHSZcUiKq2UVDz6v3b2h45rr14E49RNN",
  "key27": "NJXDbRBaVPFYWmTLsNkC8d8U439RfLuU97TrnVpx9HPtu6dLTNMKnUXMswJnUxEBA4V7bAKkp5nsw39H2Lp2RcU",
  "key28": "2P8YYDpqGP2iJdD4sB3cTSos9tkjWpC5FUZsSYyyFnNoxN4vdry5tQk9dirUaVumrMCtzW88YJJpMDGFnTnwouAC",
  "key29": "3JoBQ2qUPNsmGudcb3wzEGXgMRRX9JmKysAuFEqzN9F9ScF26EwWN366jxZ219zjTJsjFxPC4PgnDn9ELDMrcdcu",
  "key30": "41uFw3j1DriFq5HjXpwuH5a1EDr4w4SVLT2zX5EEqSPp3zSR3LGHauafxd85YHHcRqhhouCj6fDVf4VyVYmZnMof",
  "key31": "4iSCfbM5wyoPY554CNhDMwdGcZGgzhJ2sPJH6Z1wagr37U4ui9YonWYzBFYFTv1ZSSFg6xn7nHA5kjRjjftLL57q",
  "key32": "3mgiWyvRjBbmyhrFhZDhLL64ipXTgyE8nhD6RnBx5nN8fusEjJmkw4KVQ5NGenFKkCFxhiFSzYkoK1TgB5D5VEf",
  "key33": "4KbDyoTBQN3CkMn3GoTnXo818GMSm8wQFxYtQ6DQUwHtPEJkrSnMpU5HRjs2GnBars5qbJzrw93PXoJNaPv2yLoN",
  "key34": "4nq8Vw1fJSxhRTcEShABoiYynbccXdsGmEy8Cq7Rb9Mg2NGRhNJmiPdhV39wAmif3SkWiXedcFuWxGr4ZMgJRQCo",
  "key35": "46PuRxGaNc1ccLokNETGd9mu6Rb2NydfiA4NWaenwuV7VUz8AevfyHeeGLFCnoVeUHGK339sAPTSYkFxa393PGrr",
  "key36": "3QitskeUEpJMpDDoAA1TMYuj58jhwBnD3zPBCzWK6nrh2i8HskEPmvMEXPqaEcKQf1dAhwFS7EXqvgrgS17r1D3z",
  "key37": "5ik6DusPQrp79iF4pyLcpXnVC1L6cJzZPmQ39ra9DsJGs3D8oZddd97TWFonRmGGQ7mmCF8NmToE3SRHdWQ43obL",
  "key38": "2H1YFBnV2CQsGVZ4yYLME4PvSqQRbLpPT2c7hbb6aTmmobWG7m3dkNoURs44Ff6z5QaM4KTT8aT68U53aoofBdaM"
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
