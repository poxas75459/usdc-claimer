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
    "3RSWovSS2GjRzDB3DxaPDgpYS4Z5HpcsyAUusxi7CYveLtkLCrAMxshaizw7zdQrkWMYKWe1Lw96V1w45L9NKDLx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "594ezizFdrdkxRqyjWfxN88eGNtBmavtsy1rpfMX9WF3AUZgLodkg6XneWU2imBDAZibZ42beNBnCSsNCYwcwUXm",
  "key1": "56p14ybWw6w3A7qjkGGPCajusqTcjgi31Y6Rj2V22gQ26tUCwntsue1RswUADv2B6ApkkVFXeChNEZrTKWFeyyBv",
  "key2": "3uP19zJmpjERhUWtfsRQUqPwQFfDCJFJ27R45zbm5pnofdZW4YScYq6QVCZQJi3nSY5BYN6FFkhyGibeuRcchGp5",
  "key3": "59e1c3UWPe4Umx4TYiJJbDCQYDChsJQvcTJB7RoCgkrsVrxGGEa8518jteEZXTKidt26RP1oxPbQPAT6n8HxSiZT",
  "key4": "3AdSsFGXnMh6JqTdTvK96eaKCqKSr2RRkvvh6DQj7R4bZLw75J1ubzSa62MAmmScDWibohNNz6gJiAxvFaKCyPNC",
  "key5": "56tkKJPS6VR2wV8XWpSH5fUcuijkhk9n2nhygTtfZ7X8EuVFopbRH3StZCzQdxxiXAkWoz6dwg7rP8Z92bgthkYB",
  "key6": "2FM4Czr7GpDYBEHwv1Cs1eVeSpPuhpcTEcxXAsGt6L7BtnxZuiptuEU2obc5i1Rvqt9akXSM2TYaNP3QiKLfDpqX",
  "key7": "467TitbsHA3LqDdns3H8RYRcC9zJpHFiafNTh9n79Vfb71gSwzska7x2Fzg13cbyizZqA2DQ3Bmv7xgT2d7P8X1L",
  "key8": "5GbzXfGb3EUyJSwJDhsxM4BjkewumfPmdj5bwoBVTdgxjJ746CzngZWBLEs1ab8JYvBa5YVeNPgtVzJkeoLLK8kV",
  "key9": "5doCFY1butcbmcmdnskGmDswhK5RPcJqyEGgoEqK8WcdhAqnwcszdM3EQj8BR86XzZ6Xb9VVkzd96bgAPPnRzvRu",
  "key10": "4AhapKJiXnFeeSdovN8dca6UxT3SWudWYK5RjPDW666h1bsRKkvVSLyC9FNptLvFDwpavPCYjyqLwKZ6UpWnf72Z",
  "key11": "2bru1Fn2tsZZhdJ97HjhL3UxPXVrM3FncbZ5K9SiiTF2Efz7WCb7syv5iytYhHf9FRVnzKjU61QNRCdzsjZJtDwL",
  "key12": "3QvBFrJrSwYzv9grpNefbyZmfuVRmXaa3gGDK1dHc3b8XSrjc2BoWiVtcBh99Wt2aUbHZ2EyhvwuYoSQ6Jt6VKZT",
  "key13": "2GhJc2UsYyfmf1xhAHkeiJDP2MBnBwen3PnuN9S3SCVztu6t1QgkRnuiseNtPnqzqwhryHzuy5LWn6EQUkVqBbd6",
  "key14": "4ESXxMQyPDAfFb65fnB71BkMFZoSenC738Uc6namR2eQE7RBcKPtKobix2Y5RdypHsBQhsSCRqmWw9BVQLo9ExKx",
  "key15": "5RCzp2prE4vjnJCbJfSU6H1Eu1Euz4tmWaRGfwDyiGx96qZx61gCQuzXseysY2PJRt4qQ2nmSTTbUmnbvQ8NsSnU",
  "key16": "ZLkZmrKaH1fAEiCmHwhy6PsJtKSPcjzHZPRFGJQ2qKbKChoF4MCmxxs6G3LGxjpmw1tg1anySjQ9EVPHj1Ud9uv",
  "key17": "4eAdnbY2VDT2oDjYBMDqqkDNXad5FVByWV5HsG92Vsm6Tf2at2bsmb89uTnfhPiWxY7RMzP72yC99JYZRuzqFoFK",
  "key18": "2irMNnvXtH3UETBdSTDdoPcxFJ13yQ1qdfZCmDVegSSZ6gikwZrQcTbvap34XTqRhGZep5eyXQs7tFyXVJebinkV",
  "key19": "4nT2kVhtz2JFC9NFexuG5jnxovHZneTTJsdF5x3ExvmKxgbyBmkcMLdssMSC5qNYaF3Aq7FsTFLtZSo1ezXK1agX",
  "key20": "4xdt6Yr2wNVai5gaNnxMij2GNBfT6eFFKENYQQ2XjULymD8HdDqGoYa8BRbtXcSv2KmfGNWqqLFMerj9XyGtyW2d",
  "key21": "PjhAyLsWafh6cxyQ7fcbd3MnvBZDcSDUnKMcYtxjDRTa3EUaYd1hekTg9uY3pud9CC6EX9kQ6MyU3eUctGAiFPy",
  "key22": "eVg5SGG6gM1kxhn6JQeWQfYAHKHZegDZCzfpLMq1nLm9SQU2azGy7Zr9exG3eDVRPN8BgsaqeqdD62n7VALc1KS",
  "key23": "4D2xPvbkuBizD7HfPsdQMLapFwcPCEMVLNYcVJF5GXCWM6PxEXeXRShEMxB1SSPALMz1qxdyZS8yApWJr5Wfm4Y7",
  "key24": "5UvHjeCCDALVY2BAuPvfbng4ERPAWjxEeq5R6BNQ8X2RDSyYnm7vRyXPZvHJYDTySaydrVzAVArbN3GGxXKf1qMS",
  "key25": "4DE7bG1SxkZpgLxRSrUkJjGcdZcC2oFUR1PPC2N96xcFnJdjdiH8MsmFiXTWPhVkx7urEV5TdPLUgP8EAojYfQQm",
  "key26": "4HLAzzPsU5yzHN8iFQvS8E4xRNgjgqN2aoWNjP6rEsRjJ26fwNH6Rbu2e56ZkB8hHgmaiiT5B9AjMPq44D7yp4nE",
  "key27": "4WcaEMu3qWuzMP8UKNWJKBdQaoWCrhTd1SuVUaJw28Y9pDoXLYzKUeX6j81AcsRhEa7LGzuw3YeHwKMUJG3RtoVM",
  "key28": "3CpbgXRrzMjh6b2dtwcxS4gcpPSJVqfPsBmpa28RdrhwZG28w1x74TmmDTE9ju9vnFpDuqSCvmMB2evUAizSvhpm",
  "key29": "4qvbb6p7kpQNhoi9bG14WtqdWhPvGvmktRGWe9bk5zxP8zkmANgcH7JeSWfZQbRvTHkyHtUB4NGc5emNLs4bTBTU",
  "key30": "4osZVHr7firUxijdi3ESfUuwNkQN9EsebCPmjVuDb57M2pC3fhvMVSbmzDPmQzhXP6u4m5r2tt5dzqYTFKQVb4JJ",
  "key31": "4exkdBMAvmYeZjMWbYKdJY13Tz9vAqAMqv5aHs7wQLuQXYNLenmNEX1Ts6fvuoftp8Y5gmDmBfveMnp3paYnST41",
  "key32": "5WCzqXdMAtQ9yJDGWEMgjciX1Ww1NSJ7gmQgKmT5bs6aTnw9e61TGD1Ya4h4REDNeve6TQWRP7uemH9HjK56jqyY",
  "key33": "3THkoL4Ur8BnjmeTLhea3tEKPysceKax14JxDeZPoa7oXo48AXVSHTLXWUnjtnWFcdM41Tkseajo1oHj6CBUbHcs",
  "key34": "5vw1eSpX3ZsmqZdEeYRqCwzFbUavt2LrSygvCm1n4erbeQZhnFUnzd1K3Xq6VorwtAHXcuUSKsAFddJyfqsWrfjf",
  "key35": "2V3EvMy1GkqLout68SQMz3vdM8KCCGBZUbFbivwCCjaQmLuRg8BgpEhAFcQMCUytCpZNLweV8Ezr1vERd62nkxCN",
  "key36": "3TEaMKpXN1DZPGXLBJYvRtywWLCVyTxzDzqnBiLd5Ubyzuxct7ZVFHBMWttb6YkpWNLMzbrBDfiRf7mZSKurUNDK",
  "key37": "2zgk3pfkbHqccCLoLCEDQ15goMUUihvS9YTrZhUgndRSrEteqJ13yNXCWQ5ZkAwm5UCgZ55Umk6FTKp9j26uP72b",
  "key38": "oYjbDSfiG2kqrzEyvhrTMHVM1kTDzf2B8v6EmF8B2eAkZyw8WdytEFEMPm3Pb1tN13ZqHPNuFubcE5SGT7UzqQJ",
  "key39": "2dF29LSjo63ZmccRQ6KXjUx6TVJdGyxWKzZ9fRdCwvrArkMHtpiYqcGbGhmMrys49r8E4a1kYmxgVW7VWGTQHkqF",
  "key40": "4ySbsmyn3DmF62h2T7YVmuiWEZzzqxX6aXx3gix3TpHjPU9LnjVAfiCWUubHGSPB8Sa4fGMcwXTT5owKkzUPUy9n"
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
