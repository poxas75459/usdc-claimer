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
    "42Wnw9MWP8rJZyTQp9cXnHaUAgxfTxKKXYKdx8osYtpBKuYSw82CkDiMbJ4XDYJF3Dt211RZ6rJXcTikhqSyHs2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m5R1HufpDcp4m3WJZez2jL7Wao2YYcrj1v9tsTUL4W7C1VyheHVrqZ15gHy9UJJrSoW9tuKxNf6qhig7PXnrufa",
  "key1": "3wom96CqbTshssjqWRgxVEXJ3xbBRq2kjyjjbCvS2GNePyJsgLvpUoeMdZQ9nhuHoHsJvkqZbaxZMf2UDTD5Br8h",
  "key2": "3qmYwjPfFYFM4dQADLf5ni4S3XmErPzKQJNtcfAbjCMTAqXG5k2XXQb1Z9q6UGVtkh4zaQfei6Mn6Rwmnzr2DF7d",
  "key3": "3WfU6p27hf2tiNU4NtT326wR2vyfCwCwo37FxXQe5zdrxEQLCPi21RBzKQcbhkFZgi9qQKxZH23pmZu58rgmwbzi",
  "key4": "5RJ3azQ1nvLBrpXioHHynWgcziwmFg8ruFfzMW5cuEPhAYginM3VakQGLCf7VTTxVaj1fUyf37QQmXo4Euudx59S",
  "key5": "5ZyAfpGof7RzPJyHqEgQRSdC5CnH2nEnwLptiudptbbNMM94FkNddnEeAJ2kQpK6F9Pgfy6eb5ja9K3xQdbSPzPf",
  "key6": "5DVVrPd9E95wVNWa1WDpKipGiiwC6eEJoQqwPsQhH4tmShbhKQddrznarC7AfYhfwKDkCKyUrK799QypVbBxiSAg",
  "key7": "2ordpaDgT6Q1DuGfbDUf18RhZBzfktvJjTiWtwggc3TkkMvufrrHE9TG8FLJjWsTyGNqFuc5VrdrBAS1TJ6Ak2uC",
  "key8": "3eqHY9nUXw2K5BzbgYdGS8LgLx4yYDc7zKBctNXe4jxBe97Lz8YwZJPhPHPFMmi85VyMiBKSG5gei7YjWyrw1nKn",
  "key9": "2NNZgZcLd3ivQz6RVLJGUEyLnTQAazXfZGomXYozn5fkbHq9Eve7oKUE24toxGoRrWguzD75e5rLaHjC2EAxc1FH",
  "key10": "3h9nL7RwFAquXoQ8KdqBKMsM5cvFPfMVZYSEGgDDACizw4cSf6475fW9NR4Yixk2bWM6C9ZnESJgJVcdy3pyfWxT",
  "key11": "5Pj7UjjxL9EpJg2S5smut8PzNrKL5fqWvLwhUsWztFjgQQogFRSBgHGuX7Mx3k4QFxQCqykoXowJD9SHWLiveB17",
  "key12": "5CLKjcR1ztSWZNKJHVskqKcFsznVD658wmAzocybahuYzMZn9AS6ABt6wVinPNNKou2yZE5eEc699LgVxnyUj5BS",
  "key13": "K9ESxogSHsMsSWWDeRPziybRqzHZntJM2WbyhomPasqi1HgJUun7W4o27mEcsyZzseaW4vyHMM1bfEboUVxyLS9",
  "key14": "PfsdE2xpUY2mX985HmfUfDFpntgPTLAaSNgHyQKN54N5Ha2stPo6FCfqmpnNERy482HG6T4TdKFfekLFyuaoa4v",
  "key15": "3wzYbB7U9apQAmVCein1ygJUpA1u1KzagcBwixYr7UZNdc7SRx7fX2eqqT8nEGZQkmdkHYVCCwsUQadHgzA7kuk8",
  "key16": "2DebxCs9F2qc2qd9qSWFzVrL5sZoBqwRkRfrQ37MvrgdrXTZc6RpbdqDAgmCNftgBfiuVWQKuS93ffeygDQynX5A",
  "key17": "2Wu9oHL6K5Jvu6RGKvvX6PTZtosVphNiUCKTfhKL6QeNuqbykUfiaqKZ3SrzNmpGtz8dgDorgdsVXt4kkCG2JPxV",
  "key18": "4nQPuHzbdeKYNZ7rGaqFcSN5EGuT7d3vJZxHgwLEooVr1Gnk7VxiM7NXLKMFSDy4nz25accMMzdQer2p9XZkj3z7",
  "key19": "4Rwf4yx3AevN6AxtkwwpU2JZayy38XPb3tHVNx5CisugwcJwcaroCT93jzuDDafrKNiBcXjKNCs49RMiq5LB1Xt4",
  "key20": "5iXqwxbSG9uuSEiCZyfLjb37Xj81mvpRSVp9YisdrSBcbSsomB73G9S894LEGkMckEbxEW3v3HLRnHYnj5FPTUwy",
  "key21": "47jf3eLeCaeZSuJZBrPyFbefqQxQNvdqpB4iNKMzXNpQAA6bqc84LpAQCxZrFoTAu4bWt4zBCyDpnXnryxWxd9oH",
  "key22": "qduEVH5i9DKhVwxx7BREjpUNygYVvJqNbvGGJfAY5akdJdTakP3viknM3d67JLZEVSFTk6aFHmK96xNjoALuyUS",
  "key23": "2Nt714AHdMemfyt4a8HubiNvz1SC8SAKk6eZmya9CTGqoDXmhqDH6jvnMGwB45o2oLNLbPDrpjgsUWp83fzpHv7N",
  "key24": "2T1nPZ8Kyr18mbLGuxMLu1EpzRq8H8mwU9V1fPFw6Cy8m4Qe8wnhdE9K2Mw1XR1gjQfRDy5dwEknDw5j6bk2c9AB",
  "key25": "4ijUbVQLeL3mZtqeLkHhgwn8dgw4Pk2TqVrA8b6Atqvz8Za3KPUp7sczt92Uv2EjTaePF3NyQyEvWgR9g6qUDHMU",
  "key26": "3PDMbKhW3HDKMtxDPF5WuR9quFchn689EteUyRK4wgYCJ5edGy7rSxfwJ3kwgM8oQvogDyeHkieLE78Ut5eXSRq2",
  "key27": "4pfPqN4vzooeUXKD5M1h2DvprVHdMrTeVuDkw1onyjpg2MxiowKSesAvDMTCp2QUJtEbfdrxRN9Y9a2Bot6sVqSR",
  "key28": "5WEurcJ71PP3w5UcqdCxNJ7YdwJULACyvtxrNALTWBcbZiP5rnokq5u8PQ7RsqFEHDEJED3wV2FA56mjwudf5aXn",
  "key29": "4AZh92dRWv1C36e4HxnBeaVQ1rkgGQ91derHKFXZmQMhrcA3tXaYyyywBAG4mgTbvMkJQcRQ5Uf8kiuABBWRYrtt",
  "key30": "98vHbjmthMvgS6JhduKYVK1UBCZhsyfiUXbN2JFmJvM2Ry4d57B4c9MnyEnnTAsC2quscW13sTuhcShjxbLmGbf",
  "key31": "4KbBd3CoFwbcu9YB3g3ctZgpPdAT3GoB6XjepvLUnnMU8eCMJDUfEiRNDjLLXNHEqJLBJYat6qvZJ3vEMYEqzaPh",
  "key32": "42aA8XSbcKZA74JiTR2Xvp6v1pmFNEZcUG2wHhF8RJYrYSoSY1ZDiXwELLwPpwRBeBnhNmmnFCZJ6pyEuLGYRHuw",
  "key33": "23H5zv8DqG6Tke81MijaM1ag7CPGSSwpEWLgoxmWpdqLQKnhj1XuXoQUv3bBSrr8bWasxmzfQ6u9dhAkoWMC9xJ8",
  "key34": "3qu1XWwnwVrUpgXypXRf2V6Pf5XzZ7SXmnHSVm7sw88w6nkktZqCRh76iNNxzBfmTqJ22tGRxs4ky7amPQH7UB4K",
  "key35": "3jC1DhhXZpYaHdgkkHaj1dmVXTeyKAxsntSxPd1VvxmDb21YwvmjWFhrJgaBXbC5KczdLmvD2ZZdiewVcMQ98qt9",
  "key36": "rRq2Mbxbm1oJN8g64r76yU98odK8qxpa6jFaez4rRqfT6PY2zTpkfvKLfcEgqCnE2ECbJFEi6moeqLybBWqYdvD",
  "key37": "4BggEHenkymf4ADZVvF9stMLDWnKhgCKVnNmm6vbeHxsuceb4Hs5nMAd3DjQHYR3xogXY5Rs1rDCfJ3rs4fZECYL",
  "key38": "8tL6Lxo1qJNQBXUsCDyRHrmTHASQXS2PCwFHrVq3EbbK3qyFCioCgU3vGqXPgCHPNaj4inzsdNWCPNag3SNbqqp",
  "key39": "4RpNVESJj3oyRFEnv89WRy7gqr3WudPVPoMTycDQ3zDinc6Tw3c4Funyb14AjmXaPq4uZPhojJRQAoMyNCHBtz3i",
  "key40": "5h2Bx3fvH3izNiPiYtG42FTWEyz1RAm9TcWKvSKmTY1vbv4C9ipTdFYVv96BReoL1aZ5QDuvseJjrtPXeWnupjyo",
  "key41": "2T3Yhu5e1xKVQPM1ur5bT9pmuoe1wiPCzFAbzj6FCZPqCEbLbGV3R3BPiXK3qk1zFBmgTRgXyRMvZHX3mEzo9hyT",
  "key42": "2HtYbpukrDJ6v4NpQQJK35aCqGjCTMLsbGwaXV4M4DnfPCuNbxFk2nuRRVnsuHanvUVCY2gH6uSbjhyLpAHdHwsm",
  "key43": "4kUBStiT4HWq4iXShR1ARL5p3Y6zyChVF4vEPn7ko6LkVPrLnYTUYwZcVBQq6Qz3A93w28EqtkfxL3bVqvnyHdCM",
  "key44": "cau9VVQPsJoBCKA2XLvfMStqzKtXW9seJsTdJnpentWWZvesWYLDTDVexYv6MVtLWL7kQWGYH5xjYqaNZC6CgQF"
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
