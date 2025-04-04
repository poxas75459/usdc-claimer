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
    "9xojCuJgjVWJadEkUeosHDeUm7Gu2AMQifHgGtRvRLmLb39snx8NQqDwAqHDWYCxHwWMKcTpwkX5GMA2kbTB5JT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gYQm7JkZ9HXv8Gr95LK3BZ5FUeN9YLuAd4zfD3EcsbkodjcAS1So65dMxk9BH1oy5wUD46nYvKLQnFmJyhLzM8D",
  "key1": "bQKfMMHE6AJfsCHvYkPdzrvr95dDWHZC326aKDVC8EPicoGkF8592S43fSNCvqzrpAbswtwrmP8DZ7emc34njch",
  "key2": "3A5rTqEffJtfovXjwQrSfqiGvmmV8bthobL2fj9zN8fgx4YxTVDpwMW4LKocEffgG6vtRZr45G1PX9CxoekjsHCe",
  "key3": "5VfLUGbS3BLPhuqahnDJxHpfThA1ys3sB6mp27AoT3eUfKrF99iUePKYW9z91U5MVSEV9dn8x27xudEFmrzu9bSQ",
  "key4": "4smk4W91JCWo2bqRMaZT357j3AgnSGm27e9XEjLvR4PUCGfNgmyzq6aF6vA9oEyn6FJwgtytDPFTHjsBHbK3T74J",
  "key5": "59UNQ7xD51oQ8j8X1P3Jqs1ZWfu66kNLAtLVdC2yfcnkHTBT9nJvKgDfhFtmAH2TNofrt2LsBmWspBVxqTCgamyn",
  "key6": "NaWPqYaQt6esPMwUPSyGBdhcvbtrKa9DS8ioVE5JXmDGFoVcAFGwzB3FLQZrn4GvL1Jw7k5uVzydRKTKYAqhjLR",
  "key7": "3r9L3fh3wK6Wf4dxnzHBExV9tLRLD5yULZkoN6wRaV3RAu6CHP6EWmyPwGkaG3rQTVWFFxN7mXC2m5o23aWNSFpZ",
  "key8": "3DSbe4eMNmMh7UVTDgxyDvCLyodV3C3jdpZYzNxvxioTrcEZdXNbefVrKFDSeYNZ9WZoJqR23m2VHSurLWzpbSgm",
  "key9": "5PbS9DbE6yrkZB1njRzaPCeYNw2VbeW1BX5hDFg7ysMhHHWouz73DjX2AMj1prJou5MVhev4HWqz67Lucu8qgFix",
  "key10": "oxnFc6WBM2SBA2qbUhvS3JJYybQfqMbTc4bKtrTtHJXeztPZXR1KMw5Ne8VRXTUdfzTc1aN67mfynhKvXtNc4Gu",
  "key11": "3cctXc68gDZ8EisNC51YqeG9ZoKDb4ciAfcXD6fuJqVUf5jVW39dRPt9XE5RMEC9VRTV41T1ReAzWgg1uUCa4ZWA",
  "key12": "5ZoPaEQeHEM65VBtvz8TFRcifZ1qCn4NxoRSgwMZHuYd6x5rF8x5LPUyRSKSVyc261LWW6NyPgPcJBHzvUvgogty",
  "key13": "2NC2CN3nX5YJB4xDjD5G3CqAuMvq9o4yVqqkyxJ57uU171HS9tjBBwbFy1ukNEaxvg3AwuYZKm4ZQc1wJMMYMbvs",
  "key14": "2uUKp3rkT9geF6a24MCtwwYWp7WDP47VmmwHxVWq1hNw2ivD6nxUgL219NMB6K7Fzx9V9Avr7WdNpHmsN3gx7JFY",
  "key15": "9gzroxZN7deVoRZVuWYgrTGhcFU3UJnAPLDkA8TPZZ8DiPbvu676S2xRUaeaF7Wse1xfQTmv6dGfhmNVrkBpMhn",
  "key16": "61237DkPEsNVdKa3G7ReyUSYgvKbjuNA67y8v5pwAqUkAtN7aEWV8c2AtxP4h7Fjh51zAfQVeDL3XtkK8e6jZjos",
  "key17": "KfzJSeEMb7Lwe6ppoeVwqye8dKsixQQgqbcWxTr9PKkrcY2jyv8SWyHiazLsLwo443aFPE66gnvhzhVQQJD4EZg",
  "key18": "35wyqWjkyM2TmfEvFFHbra4mF86WQa4EzxvXicKPaVLRm2Np769nmL7kfHTX99PJKpKBJXDaBX4cmrALg8sSboDf",
  "key19": "tgQsqwwRMP8GE5UqWuJxHYyF1hg6AN4dd9Y7MNZQM5frj54fiBY9F3ZVq8musjueXh9p32fCELkVm7g9WNsvgsu",
  "key20": "4cwgMeMovFG34oWdn7RNDAywP49GFJ7SRCqGk1yHP92omDtmeSVZhSHaomWnv28TAmhr7svb733gfQeiZT2S9U1H",
  "key21": "4iQb6vAwpZ2Qz8UToaYTJfDsg5svAaAFAC6MVUYBBk4DQqeUcVDS2YHf3vEWPjkimHHpnqqUKzheVcsYTyXQmh4L",
  "key22": "YUM6jMgsMeFxeUqxXhKeQzKq1guQQvci97nTy4z1b1sWujVvCFmXMySKBdnboCoJYmKWr7gb4VzmEshHbWV5vdz",
  "key23": "3c3D3SD2oWiiZSqVVe9zVaQomys5qKrUtn8wCZbPJhxAMNzeVLQegNNSBza7cPo1ttWn3YqP5HAHdB4YMASXu4EV",
  "key24": "3ja4TWsnfjtanxQoecAQaVvQcwJfnUquttFgfdz9ka7awoc4kTjdXPYMZ3QXXheUojeB66YrQkFvsfjWuMLJPpmg",
  "key25": "Y4BZkZktoimZBsJtXSvf33oyYWMYsPhKtdUcoqunqFpaJd6i6cRMjZ8sHzzSTsvxM3wayfwQ5BSjsLknWKiCiUy",
  "key26": "2opS7kAYPHbyu816X73SzGBG7ifCfrYJCLZpoVXepjteJ3pH2q5QB8J3za7QHDwSDzR9g5nUBA6ARFPGPQ9gdQcv",
  "key27": "42cFaFmaDrGUxKdm5zefR29FsqHDLivYHzND4F1envbFnMb5UiJMv4ec9hc4hhpo3KJhWfQR4GpeM3zzXeAqqtcv",
  "key28": "5zcUtooeAgT25GLaVkfQVVszB4iZ27LgqH4LJdR8eBZqKZaKySBnR1WBLLgFF1Qix1YvvGPDCjPjQ6mkBgsbS2z7",
  "key29": "5weMGSipNvFRLTqZi6YgN37gEMvG1GrjWukL9fqSxq1HUqbKPCfPetfnF7RzGEPTaSpF7pc2N4zxod6qeZ9DpEPe",
  "key30": "5c5eXvGH5QJZfR5Cd7NCNZQB5LHRosyThuijC6xzvk3wSNuyt5eTSDsLrFBQ2JTz737RrdBdXJ4Zsb9ZSx57Mn13",
  "key31": "5u6zNfXP9RxmZNXK5LB8G3eukHkbYD3J5ho6ZKtUfuUHN6PLfxec7dcw4teBdMy8Hjp3YnjmKBuQh4GDYbmizf5B",
  "key32": "5EneSssv6eJqEPjN12khgaKAri2XSJYYXa2AP6eXfmVnkdU14Cwg4wFS51MeRTEeHiRiGGL4utz8MoNiLvEvwWfb",
  "key33": "2WtwiCXrz7mTY5zcmFsymGMYxptSpYZMYpKohFoKT1xSvic8wuMVRzE6Gr4xEv5iTJNmS7Yx8qMMZq5R6BHYYgMX",
  "key34": "4zgR3zqPgF6EFoGFhyKUpe5HhBCWCxgu5XRnwhPsJ4XTArbz1sstHdHm7kNZ6Ughz8AMnfyHSdHUjjVn3jCypabL",
  "key35": "2kqzfZczHWnUGNes8QK98YC5Sy3CSNyQnmiiSAtCyQzbQF5ChXCXFbRujXqfHyEL2wf9YuRLA3Ntj9hLkENvxsyZ",
  "key36": "5cNkjLYvMDXtR5MyofWGqa2YyQPzcpUqaYLrfpEV9zoGGWWqxmeJoqEXV6K86e7RKB9vXDR5JHc3fP51yb8yxbof",
  "key37": "5RRfav5K62VckQ5HQcsnnv2rBE2pQaMKH2JzXJsqKejnV3FgC7Ha2atUwZJ91rbqowrb1eXZUYE6BMvw5qz8uZNW",
  "key38": "4bHZtR4794H6EZnp7qP4ysTC63XHAGMwQpFrwVLV6MtHgQQUinvEuXbvzbGS6be41U7vyNwoX82CyDJdCjqSDGFj",
  "key39": "4hhT6K3zojfhV6UuRjWEqP61Hkj1mdNVybqvb7rX9DnuXJnK5yH2uRDJicTt4KRgvRRJ3ygvS3KT6dnd5BAvoPJR",
  "key40": "2RCFedZbx5L8Q5tpkitEVchHnQ6eFUqXCrfy4TFArPm7QAvSqF26okon1e11FGefPcy3HatKYdJGzTDpZk3kYVUQ",
  "key41": "3KuKV1xDRPkejviWKwNdJVZsgxR7N5J1D83TAdgN5fUywatAVBcfYrzfqzmysm3nS84aFXPJBWB2P2vtyKcGP7Qq",
  "key42": "2Np9eWjMb5CHpJtm37UrBd868igc2fcYqsRjgZTnwbkNKeEKdc1DCSh7ZgLp294W8P3oEzyjL4rXuqHubT5nNmcp",
  "key43": "4dLX1dpV19UMiPzBYLqyyoAKuF21hMFi4bAeAcLxZWei5FQ6Qgmb84v99xSmtDPDJyHuMXJzXPmz1Wmth8yErAkr",
  "key44": "3524ojGB6L5EJypYSFiZNY4YemPGQDDpQT65B9BGT2ZXsrvKdi8QioFVyAWAvv8KLTUaVJ6oMwG9MnEQ1tdqfnTj",
  "key45": "3o6VLE5PXi3HkMTyShAC8zvRXFTVp7dxNEYzkZ2stWTQkcDcrSUdbkfG5an6MbATAYvX8D7p4qwTmBKsCSFD6AGe",
  "key46": "5tzD2g6Ku1gbGfgdmP7jk9oRTjfxCehKUWrnDHidYV3sB1SyXNUHa9t5sif9WzDb7W7xuP5iJSDrZSPVeQbsojwM",
  "key47": "2cN22TQwyBD8kcLjcbAjnuUH2thYr1geGtdL9N1dq3GrB6Ufet3y1b3cZ8E2Km9q5RmC8LaydVuh8y6QV3K6wbuz",
  "key48": "3DHKnnySSZzQTgEGDCQxYx2nsr1ye4gVtatmm4FhdPEbK4k8qdoukyfs23KeF1PLKZ7uXV8uzNs9uVKYFvXeaVja"
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
