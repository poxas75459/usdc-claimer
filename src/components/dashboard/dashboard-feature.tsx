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
    "2wmuKnvFbyMwrQXEqjjAj4edzbKkbFTp5NJjUdngFuymM6vz8v3xfSiBvGoCz2eoLPpVmZNvyDmXfdbvuJphHEmc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BJLYb1kZyDjCMNnVGuYo5e2ajpHftJ2MccbC3D3h3dt1oZPQR2YxkderrVL3LuiiEx5kyPbyLY6qH5FWxVRu222",
  "key1": "s5UoC89ytFK132uqUA1RwcwsFcg3b8FXtZwxP8SHpSErrYjwKKj57Zipy1k8iQDmV8ZHYScsLBzr6YjRHrsYUP7",
  "key2": "4sZZZUGKFEW4NXPfojmrkfjDeUc9RB3HrCRHKZcyrYMQ2EdeTaJ1iCzKq6VZrKFWxXASbyXCzPVhfjWpysUgHd7k",
  "key3": "57fy29V1Y3oE62wvpkEMmKJDTisFoNsj8qXhatJaGBY4ycXk9vcMUxTZXMJxuYcPHYzcaiNDnqNXwgSpy1cL6aen",
  "key4": "3AzcvynQN4UdxxJxapQhwpuBfuR4rrkLZ3mgeb5hmehz4ThuMpP4eswLCmPfyaxemaEo93ih14WR8HNtjf6WhAYV",
  "key5": "3e6eK9vh3oA3CaR4c7zbeCQPvkmPXVse9JL7YamVtocdUa2V9deJSUdE2Te837yTtMNUmGyD3D3Kb6HwJdcg6UGt",
  "key6": "aKUtR2shB127EitK45f9pqvYz9X7NZhfZva4JgP99eyn3BUZSfuJmEFqmxeT6ejU848oJ1XiDbhqwWPHmqq6ae5",
  "key7": "4HoeBdqAk1WWKUZrC1x4bKr8wEY4KCQg6YaNP7E62rtgmefAZGDVkELgVKDMr1B2cVSKKJCsUFJPGdLuf8HMypBD",
  "key8": "4zpnAYe31Y9uj2fP9ZR6FDrFjrTnSQWiev5UpcreezRv99793qUL3hWXL8C5mKt3D8Z3scG4L9fUWL77f2tN7C6q",
  "key9": "QcxEYHXbWtPRJK2B3ALRA8umTKF3gvrHbhcdVaTr14kDcBXZK1UJLDEJ5vuXFkXYivka3XHryqL9fnjGtmjZEKW",
  "key10": "23ZQgg2XmSx54k8qD1gxhmYXuK8fnYMwxhLCLrhwdBNqNWsCSr2vqT3BRcQyJKuG2QkV6xZgvkYJuSNmpkMUkSv2",
  "key11": "4rqv6CjRk3qzGEFoi7jJL5KrCa9NLQJdTmtCs2sdaJkKEXpikJqLLpLAN2r7MVhEEZqewwVy2xEpMfAVq4JA5hdi",
  "key12": "32P2NQAzeserk6PxMPaRiNgLBVgdvc7JFjFkbNsdVzfrzXCwtDe1Gs58CNmc6RujnZAdrP97J1d9wTv92FpFBeho",
  "key13": "45u54TmFwfX9wYkYVDjFMXNV631p9xzeNaHymPXvHesDzLQBkfRrcP73gyAM2kZTHsvMZhmwFw75ATXZCVmYJTXe",
  "key14": "4QkhLYRKLJTSPY2V6JPqpu3u95Po7Ffg2ZyZKSxVq5fd4bz5BcMMgFu24nZ7gSqKS9ZNaJb69oKF9kJSmsbFZDYd",
  "key15": "5wDymMTceUQfnrMsKbeAbSGgb64orrpwaQsutryZWLHwgfrHK4vynV7oaHfF6sWmjqpFK1cXe522dZ6y2mwnT4Zh",
  "key16": "4Tvja2JsWHAxdWwLEnmuTMZ1TJVQc6akRkz833WhFghpLjccsvmppHxXwbBDpLQk9JEiemwzN15tYj78toSPPJiN",
  "key17": "3AjFcZ8VixodjscFDF3Usa3ABs7fUxt9KnyUPbtTrDT8AwVKFduPQ3nVxnm68xYHAR94CD1my8X6MhajHqPxYABW",
  "key18": "29SPYCB6Dzkq7doC4YG624BXoxyiNzphBswM8at2GjNmnp8UdvUP3DFWVK6Y5hYLSctQTbYK5eEjsgHuJGc2yHdr",
  "key19": "5tUqCC3TjgxANmYL27EpQvTjEfZwNEmexriFKfuNLEvGFJzm3Mo6Si5q7m9k9DCzE64UBVS9Q7WUELdYUrxgTFV1",
  "key20": "3N1XeNKese8WKVCqHSHqisSZuraxmrU8tJQMPNAYs9xSosmd4ddiZDZQzp5opSBamgwKKoJUvhw9wTd1bMURMAVv",
  "key21": "FhBUngRgW9RarRaJXav3Ly9QQHWrU66XTHEWAqJ6294VuLUfL53zJcEuCyxchBUUyNcYPt35qmkqRUgtqLQHYPb",
  "key22": "5rNBAvKsPpeYFMdQ6ePyFiLisKnPHpPkNneWq77Kq28hgbieAARnA2Nai1ZgA2FaGcjN7ySdhBUChZMt7BFmpsYh",
  "key23": "4c7fRnq4ZDht49agzrV9V83nk5j56d79UhM4rW8jKr8pK6TFoeGzMgn2P8iqGCnF5SC95SuQzfrhgJPCxUXkLcFH",
  "key24": "5VY6A6B6JCdjdRdYSyHWZNC7sR3yNWG7FJRNLRbqDnX2MhDTFghTjMo1mpJziKNBAvDGtAffXytZ8yVeHLBgLZQC",
  "key25": "2YHCpWB2Ntoct7nJXosiGQjrayBr17wMZjsS3ukYcgHy7BGpkMDbwQVhRgxAF7hWZoGUw5PEfHxtTu8SuE7dCg5o",
  "key26": "3Q6jX8VRHG9UTs6kj3gRFNnH9VN7EB6KvqTz4BWGvSBQP3rsASwPRypjJQ4pfyRxsXPhJCfTBHX7sNBoJveYXRG",
  "key27": "kCDRyNwNvSXbxh88Ss4qccur6XAoyx5UF1z3vrQkzvsQm99MiHoZ2wfee8eXRnmaciJBoaocpUWo3MuT29EoMCZ",
  "key28": "4DY9qfibB25dABrE3J7r4NbaGXraZpVjC3DrWCWgc3qM73YBy8TwVKAiSkd9oLe3Kw2NLLj3xE2X8oX8RgQAhjKS",
  "key29": "5Gv27jjZPYpHNp6uornTpVe8gYXSQqpozmx6wt1CkdSUgPGPS9M8eLnAu9S5v4VMTZCXkLEMtUosubL3c3iVQCmA",
  "key30": "3Atx36Ubzexn8jsTKZiHomxX5cusihDLSxR5vCoar7Cm7ujUex2Y7ytMC1SrBZ8jXV8DbLEno9tjVqAG6A8XmFap",
  "key31": "5jmzzRk4xQXXDXW9vFGHmSBBVG5QC5gpTrhZcAqVNCnuZmXXS4FEsNrQxywjwp6XjYZZxqdGkHvBy2dqdhpw6DXw",
  "key32": "8Cb8vbonM9Gsh3Nx7Kfnj39zHBCAtLKtaciqpQRUCnq8BqTS7t2Yxv3PETsfzyXSdL5sV3vhRpYuTaztfsVZVCt",
  "key33": "5kq7ED5yjg4mZZB7wCxF3m1LMzZqUL6xNtBmWCymHods55GP88NqWGDBfLNco1gm23qwj84qbjZEuoJUiACCKzw1",
  "key34": "5TuWYWimP3d6JLpR4vwjCG6Kkaq515E4H3GTeYDApbT6mSyvi59usd6yoviBAMjDqAZMvfZZiyABXahFmqTe93L7",
  "key35": "6AWivFzsWP2bMMvAHgQZ1pFokeoU1VAbCc6fMz4PXvMeW2saMivLXUVWHcXqxyNLE9Khb46XH4EqyCgXJmM5doZ",
  "key36": "2H7pdEdeJUPmdKXtSqwPr21h7dhYmcbH3RJWyAYZPXgiMMH2LhoZwoQE7v4F1kV1FGKnVZrMjAFbDUU7PokV9m7x",
  "key37": "5FguuBEg7PRXKWuTbt5suEjkYnkVRboLJh3jLC1r8VBcGrQXqm42vPk7C7DbEZEEYiu7cbWzohvmemuo7w7kSRCg",
  "key38": "53t8EMb9G3XqKbXtpKmRjkxtSSHVLdq4BpWCxD8WsFJqCsgk94rew28bFRdDBXovcVRi5m6jk6o9zJ83bB2nxfCN",
  "key39": "4zwqEGDBnYXxa8QV2XDJLhVtba9BLypuWPtVavSA5B4hnuFoVN6E9Vwe8GHnt8Jwwy51CF3Q39kxyeRiSoHhaQU9",
  "key40": "2MoHpVtLTUHiEFJZsqzZ8pZRrVRcB92UPNfnWScVn5x3XdBpmwfuo4PfXKQDpTNWJtXsqZ6iVorsGKZM57kjNucW",
  "key41": "51eQH75mstEzzpMxMkHCGfCEhFSMiZR5asgPcy3UJ3AA9ccWiua8NZKBtxvAvXbHPVfkQVHUfxn8GDdrj9GPN7t6",
  "key42": "2xgsUkdwTHmvFM5FJQ9JujStyLmagTN4pkwSvF4DFcSgnbYbx2R7pSpFrfYM3JoULkF436qPpnZ6txnbtMwPmYN",
  "key43": "3smpA26tsYDUeguPxS3mmaJVrGB22AJnYm9nMVtNW6AL3ZZdxA9XcfKxyWSGPkkdeSURbGMp4MhgibjCRCpkTS3f",
  "key44": "5EnnzxNcWXi7cNU3eYW59j56RxHBprc7dLoSVo54tqGM9L2kZZUUBsxzsaKVXR36cQX2vtQXss8ex8Lx9ocDX4Md",
  "key45": "4QMxGFSLwVU46fCrfE7ks8yEAdCed5jtekscvJeUH1BCL3jP5dY1mZxACW76zYVEtUbH6YtRT8GnkNeo6AJaPepc",
  "key46": "wVype9jrVYz66ijY9in5PTu1hHZBDmWWGjLg8NqW6uvdXnsSBDuBNazFhLKCq6TwZ4t4RVeQcUJ5GvTGczkjbdq"
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
