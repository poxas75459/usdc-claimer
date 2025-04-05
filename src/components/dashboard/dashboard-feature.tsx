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
    "4L6vxivDiBFRmjPSw4X4kaWbM2wCjKAEqZuPXcDsRqXr1mqTwiMRRVDfZCRCfpGjmp67qEjt3PsoayiSLEH5UFzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZwDZkAYgGLDCXWQMaV7nmnQdG91P4ptY1bjNSrw7YBzhMosm39WqVis7vx6NzyMfWAjXXnhJXMnpxzsE8DRzzZE",
  "key1": "MTaUpsceXABHtukAEcKZ8vfmfEp9S8B8Yesbfeyxk2ghZvgGgquewBLdZD5vb8zDndYrGm8CTACeBVkPePeXWiE",
  "key2": "39GGcQZbtf3nWT5yGAReMXapTeBX8EdBTucJAj1vgh5DsWjD4VEZGHVS9gB9X3JUiGSQfRNHM9MHy11is3doX8Aq",
  "key3": "4rvrdSqztRenF1fZtTUpbYzjEF9zPvm4pTvmZBVJFpGG78Qgk9kgsZqXPHBSvWrJpbKjgdLFqR3cu5bdLz7CyD6v",
  "key4": "2c1zP9tiq1wor2ScoHGuvy3nHC5bQnTWYFdV8eBwKQ5BQWcbBpgmkdQm1VYrvadCjus6nZ5d7YKKibPTmPAd7rxV",
  "key5": "5o4bePE2YBz4xFSrvWQ3N2r6H8qfyoq9BJBP8uVYJD4Mg15hhUoMvPzYpMfH416yS5SMwaNGCHVb4HSs7EMjQP8H",
  "key6": "5uaPtUsUfujM9qvq24UCuh7k8CZp2GrmWWgPCpVSuCuJNfZSSF33373rdhcT8R2EZpgEHsqcaDDMYM6j4cZYt1we",
  "key7": "37Dhew7tqoaHyQdWo9Jofw9nJry9y8GVJfa2tQ4cFvHZ4poosJLBrCHiiP1Cvjzi9MURpT61vPsrB1Zz3fhHC5zP",
  "key8": "35DRoWGBJpo42Kv4TTwfeZP6fbyqL9Xokftw9npL1GWM3XFF2bAoJnsjDXCCUxJkiWyCmGg8B7Z81f3i9p5GjEfq",
  "key9": "4Kd6fFW5ni3DGXpGVGLDTrQAF2eLfk8bykBKCW6wYMHPHmzkeMULuNGqHKH9QDt8uenjgc1R2mW9nDdKtDYZNs8t",
  "key10": "54VuvDmmJT22b4ic7fZWSVnWs2eZag3ukojthGUJA1JqhaKPupwf3aBXUV2goqVUDdHj3hHy2SWbyjBiZdUAamTz",
  "key11": "2yHpnKQLvDFgJU8onu3BgJq2RZsChZ539DqidqYAuPtUoBcvpCTkFVfBhig5RFXf6DEv8x1xJ6jMJcKNWnqFGGhF",
  "key12": "2TyzJRqA7dZymNsuxkZasJGPzw6Pd6brcZrrS3bKMMwcLH1xhXBvk54tp88nNUKPjgJuM7LpF9rbANetRFvGUH5s",
  "key13": "2cF7M21qm1868RcfC6T8mKfSu1sc2ov2cQZMiYJjC1neGs9jtr85DVjcq9mravUuRedrsws271HFgdioVuBebhH",
  "key14": "4twCZUix9rKnB8sdK8MPjaNuyxYyu89yappVqDt4ZegeuMRrMHmKiQzzSgahYv4MsBj9AVn5y3uaEvkgkucT3qtu",
  "key15": "2fMFwZcDoiEBtY7KA3DZksvsFm43hNx7y3o59SymRj33W9k67Gvd9BWWeodAJCKSC6kZ7QoWLyBKbSifCVGqb3dS",
  "key16": "5cVmmiBsAmWHbnaDL9MuUTTSwq5sjzjwRjVcq8RbNjgwX8G5E6mo1SPnXvzzNHgzMsFWXArid6F65jj9x4xxD544",
  "key17": "4wHToqXXnrvV7Xr29ucShe2rQgKDp5jJcXTajeCEbcsQE1D2QL4sEDKimpnBj89QEfNusFmoL83tPquDXV22S7tX",
  "key18": "mSe8GcRUmfFzg3AqdHm6vqzNjhxFXPNwt6WsxtMqQWfGpCM6JDpMC7Lmz6XdUPepQRRoj2vhHtEczeRHwo1oLRx",
  "key19": "4LxXofs3B1YpJvoUnvZTcRabxxuUULTD7DdhiHp92ptKQRB6Kfh3mRdnYaGBviZbXnXbyHpFEsGSQmHvNFTiAZDY",
  "key20": "48fSokuET3MVxEcAN1sbeKPqxMWixcybHJkHJNNdn4tNMSZTHqwqPvdAnQycCQqg7jouEMR82dbpTXEx2WXLCGwE",
  "key21": "3vzTE8nSE3cetSL3mCfmhFQaG5yFwJ3C1W74HWubxx8NPSQnnLdZ83ceayyA9Kj9fycXYGgqZV6Dp7mFgLTpKzEq",
  "key22": "HvbEd5UePCqsM4fyuRx1gcmiaT4YWB7a8ZK7R2r6sXi63WhHR3HNU8mtEjXYMxThitZskRtCpGJPGri5KRF6Ewp",
  "key23": "437WUhGhADcxmdDuiHL74hHxFVi2T4ZR7Se288zDHfVsm5ru4nuhwUzKMMdZBWy2yVnnCNUUcqHMJrtJTcz4Bwah",
  "key24": "2gH66ocu1Xm3tRPJgFHyB6wKMPmEZrEbaDQmqF7nJemCixSdmhjL8EBbBaJQzKuktuyh7SAJfykvyxchfmMid9Mu",
  "key25": "4naAuprANETqaTWM6KzAV63w5yfwKbNhJRqzZeex82EhD5wrdwswCk9RbC7buKFrDQnFKTqNyg3xxNHNxgx3CXoT",
  "key26": "D5jB2xgMtG1aZDtUShDoWFei4Rmu8AjiVcn91u9ZeUVGzbB5rczhzcuqdj11f81QHncP9rLGDC4r4cTahGmTLbC",
  "key27": "Amp1gcjfQFFZWQaqpXm34ETFNPdkgB5jk9VZCW6rzBKiVEEfwV686Gh5YGrmZ6dAAfESkNDgMa6c58StZEh1D6C",
  "key28": "4Zm2iDfNGgtoAk45GRjCk4YiTNAJv39pJC2yRWU4FRdLqX5fYGAStviaoMzrpS5hRnUui84kxzCmrJNfbuevJb1h",
  "key29": "SHKCzU4BcL8CwQA51y2bzXmw2KLsu68Mjym8zvXJHH8d1bpkedqesX88tGzfRjwGbNpdSf4owANf2eeh83MFuSz",
  "key30": "3LrZpFEraJSKyP8JQUB2xpChCYtFJquJDDka8GmCszhwWcssz1wH8E1AZBM1rtcPLvMqSa2w7JJtd78DurFJgFji",
  "key31": "2PT3iXVRDzmnj9dKjvGguHJW1cfDKwPyhzB8z9Gh4nkHPsF6g11zptwGNDoAzHx6mKMK7Rdtn6U98tX846AHrnZ5",
  "key32": "4BGJT4738XMxAKmkrTqvLzRipATqAF3LpivpRptuQMWKzUogi2HRUEQNFnnSQjkoBAmeLNcvmyfnzRpLez7oJt3F",
  "key33": "5nXVd6ZZY4zZKfUNrW9iGt7YMZbTypefBHxGcnf2Rpc4RkCb3TL3NNnSezLGKLVQgDNr1SFV2AoAnYs6cXVGsVBh",
  "key34": "646Rz4wuVAtiYfJ85Y3ixDzRTrFBjT7Lxi3KCfLJAbfZtzjKAfdf6Pwk4iKb34sHAUzdtoX9V1RyX7DgYRcMVg9j",
  "key35": "ppooAsXgzbBqwgkc1j8DQwmBjUMzrptZvDCKaV3KAn96BdJU1kajsVy7sU5VAjxi7TKJKCDyi6bLyzAx4wY3VC2",
  "key36": "4B14wy7iTFnaZSqAFi9kK2BjP6chLok7ZSsQ7QCpcsZjGmCc5S4m4g82PsdUNAcKzauL6NZTWASAo3HWPdRYtGFL",
  "key37": "4nt2kWaHb44bv2Z1jnw2GE1pLb8LoSihz8pCRm8sRPbtqxNUaY8H1B1GQqCNBySzRrCQ2zXjZ7Rdbi11Z9VASmfJ",
  "key38": "4NXHiZWog3YiaYEHpm6zaio9GRFxXcEh28NrBaHssaPbTsTKPbRg7FJkKLVKFN4SVF9wgx73J45WSqweNEwHcXXR",
  "key39": "3RbMCuvbGxcjGDXH4ht8RG14A2VhXNaBGNqexunZxBygHzWxM94qBzga18K9euBm2Bca4FQioDTuUQNMGDPhJLtR",
  "key40": "52n9xJZrZWu4SUBBq1kUpzA5YSJ31NDCp9khq9pf3rbdbrGkW45XyL5kZRw8kVy16MPpN2H4kL4SHBnX7x4FGuSB",
  "key41": "2VTgcmxbqMfy3hVv6zBLRjhFWrCjSCnJ6s46VZo6LGb8PS2ryauv1uiKtwBHAW3kw5TqKTgU61Ur1eKjJVjrHnFJ",
  "key42": "64DqVZTvAPq4QdWChsZK1Fp5wiRHNPhBC28tyMps1sdrLRyksk1z6qJwgLkCFZ1PFrXuH58KJU3HW5h76SqaKpgN",
  "key43": "2X66hqZdHiuMYKbf9zt8uNXh3Vzc3yjwqRRspjgz5zDpfLfNAt3nueN8tnUeAKZy5Bi2ZhUX6bLiwzPxR997yEC9",
  "key44": "2zAxFhUC2KD8fq5DNecucXQqVjF1zXv3LhstMTnS1uRUjyYC5dcEuHBUn7nY2pAWbkFYWMR9gztJ4rcXaVfYW2oi"
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
