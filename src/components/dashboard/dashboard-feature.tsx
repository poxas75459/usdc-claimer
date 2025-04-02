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
    "28xgjNVnB6YPbiBjfZidk8qAHjjLRJv1VHECj9PcmPJLVpu1nUNVGdMqpbpabw3rEpEcfSQb9xpUmcBLoB3qwbgq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "298ZtSJwXbntvU83utAexq4TbxQqNuyrEgVnFD6W5MDRcDU7HaKhHohFsYqKjdQVUJCEfr5NqAoKeDkDr1sTb54u",
  "key1": "4o6odzyS6jTiRuLThQWCawifc5xhtZS4dQUisjGPWEuu8GFtDq4KG2v12hj1EbXk3ryhxz8318Gcuu2SwkcN71SA",
  "key2": "5xsMQg4C6gMcGzr3UMYrjVe5mmSy3ShWGqy7B7qs6x9X8s5tgWrEKzCxjLJVy6gnNzry2UnhyLsH9mhvkNfoEmZV",
  "key3": "4Mm59jnYSLNhHhftzAsssb1mUewsfET6o6d7x17JGK8kYQYVgLyEwkGZkpWVvtBnJ5v42hoZFz7x9MLKzPYfYvQQ",
  "key4": "41DUr1dGY4FY9jx7LYKgFNHGkJmwcaoy5DD555qLP1X8GAs83wfqpj1RZpj2etQ4kebkt9QrnNYaWxECJQdbFQP2",
  "key5": "5WfjTtYxCdBV2b46wyfVcGNiHfv8whg7928dYDNHJKmwaHVTHKe6SLtQMnvdaiFsdf9CYpKedKU6Z9Ce2hU36H2h",
  "key6": "5bfAgytZ3gxHTjGJnu3B1dDpEzJ6qy9QyTk241yLwAfzABo9zrYbQWmWqfGsuqXtpSoFF2CFWPimMDYKaAqGZ2js",
  "key7": "3ocnnBWA1fsDfgWcvBPhiHD6nrsv8ZjXcqdjbGnc8nZf6hYKtD6tfMuBW2wrN2Yaq4NAkWeUAtjssnQsM6EKujks",
  "key8": "3ky29Xeqs9SLVWXR9gSr7RkSSft4FrCCTepmeTs2PUHEk678iVtCbBRq6pcffdV82aXxHy1JuhcrPMr7fW5TmBov",
  "key9": "5VVYw6BTw9e4HD4siHY7kwFbjM5LGmQmGiXEdmovhYm2zMhZsqpVDeS79juuTuf2ATkaEuQYuDo2H7QHsmcf3B3J",
  "key10": "71ozWHPF1SyEJpAa2wQqm4zCZxfQq9VzH7HcjX9VFgyEWpun6ZXMMR1t4G8iyRQR6FVEGwu1XFQhrqcuVGeTLZd",
  "key11": "4VFxDn25QpxbgTDpEoNr8iNjQDLGBXzFoopddJspyxNoCfqqWJXB1yoFmASvQ3x9j2qcAsyyfgHk6UFhjqVp1xQz",
  "key12": "3U5be8wjphxnvq2CAyyUAzVrGJM2wYFQNPMSBkf8kPrp4ZFWrgP3bP1XPVedN8H9E1fxAk9ptXqRGFKhefvZz2Kj",
  "key13": "5gUjz5KkGvCVvtPEVPMAtXh3UMD9YPk5tu6tTL3hCLV9fdCURwoUVD485bKCJ7vKRMBXb5DeQsxWXtcER4eVmp31",
  "key14": "5aE8nBaH3vzB8jbCt13uB5MVPcLH73YSiubGd1tAQ1tmiM88dK3qBgrMDfANV2oG8YUJEyhio685UCP3wDs7uzPc",
  "key15": "2443Bjve4VfiS8pMPMNm9iou9WEAgrqksw19K1yE2UfZ7yigUgSqCyGMtNxr4fbsd6SugNkbtLPuYtK4qyqLAyMY",
  "key16": "5f492zetoPwD9hJy811XVXayEFhCSe95QBFExmpHg5kW4g8iEsvvHKyrNYXZGe699NEdq3TnEbG4AyfHQLASboiz",
  "key17": "2LX4yY38kw2gnp9Hv7gG7MftyT2vf7ihxkdrRX2kAWT37HsWGRY2V1upVMuPAUc2UfgTv1LseUMHpAFvtCrKUXxL",
  "key18": "iGBM6xHPh9V92aRLgd9c86U4zbA5FUwZ4urApPCXPusqTVptfGNvXQaBe5ssaVGGd3R9qt4SJTNw3hjrBBPfWfU",
  "key19": "2SnNGws85bT3Cv4fd89e9gBrmtzzFNFurWcNmzHNYAsYrv8Ai7TC6PHeJikE4svCxLTaoqRqDZRwN9d2UariwVe1",
  "key20": "3cRtV7FDdrYiujRR7CZnJJXQKza1wmMbdu6sXaiMAw9nMBPTH9Fv9YuamDksCvJSRKnzoVe6kWibNnGnr1NWbLt4",
  "key21": "3yPzqQ6hRZdQN37XhFSnRE9U3Rhh5J6bpBDrTKaRGc9UH1vN1Yo8FkG7pMmj5hQV4fXzw9bgwbSfMNkH6d8nT2Qv",
  "key22": "88r5yD6EdtXmezepoAEYRSmhDsGnUvz8MtfT7xAPdseGQEhj3AJj36C1bEwL7tKghhnEUyeSkfRSsYqi1mFKmSZ",
  "key23": "25XwxSrnykPkS8WTUqZx5S5Q2ULsFq4Tr9R6Z6fKYagBnqhGEA7dLZ2zaztfDc9ccGNMiEAmZc24QgQryvGWejzD",
  "key24": "4c8bihGwvuqKo6dmWS8NtvC7nR95M7yPgLN8kTayzQus9xUHZKgdZvdKaT76QZzYrKQVQ8BJ1LKLtbaDechqDaAT",
  "key25": "3cCQEXHvdnJVH7gfgUQAFzDWC9XSHo4BDQXkV1NXQ8xTxV213hUiFTgprLKD5g4JFphz8oj9Yv545phgLCZxe2x5",
  "key26": "4jjr1kQiHFsXi4B8ZGTZWjmXfnhiFmWXaDRazvPJoY68TPoLBpWEtv5Ay6Dr3WDG25nxGSfnyVTHF8rtcoQ45ajT",
  "key27": "3a87eXJ6Mohzs39pNqdq5pvq5WqDuSt4kzouAMfuwWvfjdeYD1Jg8EiznHuADEmEEYYampVG78RaTR9suggVo4Tg",
  "key28": "4iT2EjXqDn8uzZXcXs8DPixqZWdQPV7vsBpEWbDL7qU2AEvsenndsX9JRmADdCtjoLf1Uh4ZbVqS3yFTP512FDQA",
  "key29": "4VWV9vTXEyA86WYVagAEJDUGaH1WHa5n4rjcRVX6P6y4QCiM41UqwfmCaZeRDucsneWgrnxB57jWWCsXJ44K7qSe",
  "key30": "3SqBAXKumdw4PEWZENApycpGaxgwJW2onDxi2uFyfpPDF9G7NFUzfCyk1ZZWueWtnToWQAXU43JT5FGQVaVxmJ3D",
  "key31": "LA6S3q7qcMomsaMxsYnMWorC7DBgqnRa1G1awfxeQjy81rSitE8WzPe2K7LGngXxco3badi9ePKJtBrwSDo7dtj",
  "key32": "Rns9QZ2oEcZJxT77VjX6AgPumrgh7iSQCGi119UpJkYUUmHYHZaMxpak5CJxeRotm2uviA5f1W9TnZ7gNnAfwSq",
  "key33": "3RRffZGYu4aQ3oQNEr9TGQ8GWD5QHkTfB8YhEriz1pF48uWSmyLG3JAYZogrBVnPr8pPrKg9fVUHR1ZrbkRe19pL",
  "key34": "4WtbU895r4UKkhDX3mqmNt5JsEQEk2GXCBsMzCwwPdQpYLggoDoE5Lignf6BrXfmsxmhxLR32LLCpihWe7y99X9x",
  "key35": "3HBAkHrdZqRbdz6FpTYumvPo39qzz1CZED954tv8UjttisjwPA28tUiV3KL1aygB7eWHKk3hGu7F5yGSHx6Fqn8o",
  "key36": "5yYDBZPfghG4LoAYrRbpU5ahFRm57LbHayuYSEn33WLWWPNBQ2PU6xD7WunC6bJZLSKP8mb8y2RQ1a7uEnjoM41L",
  "key37": "2Urhn4DGDgpRzFZuoYeRGwt82APZLYBjTNEPjrbnEKkWYhhgVDABFdYPfMpFj64ikfdeBYHmp2JNypbVnVSfAeGF",
  "key38": "CqU7vegT6yrBmRrMUR1MExBVG6QA9R8LTB6VGe4m2qhuGmVTnohqR7b6Mh87LcRFAnZayuMXAzamf3WGRiiiZgw",
  "key39": "4cRfw3xAHuUceppJBurMk9UKLyuUZGEHGxZSZmRsX511PQ4MwAr1hX96xY4SYKA7YnipPhd45GngJKum958Wyh39",
  "key40": "3NgXyS8QUwzM1BEmUdUERjiKfHyZewu4pbreUihFT3MEdCLbp3JvpwXWesbG3229HMKs4ciqaPwJB8uv5xnjd6ui",
  "key41": "2BD9PRWuitCJH1qc2PgXD7witM1NHyzpnEEaZVpnii3xxX5PKUUvYfJXrv77jJEApjWRVLVe1ueLmfC9f9WNpYnY",
  "key42": "67jbkvT1Q6R67Fi3cqBhfP7QD2QzacyiKeeZ9f5VNvNQ8P8xGmv1UA1sULS3CLxiLPrfNLByr2VwjBS3w5xAocnw",
  "key43": "2TFNTNzH4mYHjv7mSEaAJiifFADdFCpXYu3dPwZAhiQeS8R8xZmATmZ5A67SknuSLGDtsGftFJoh5Mqbq4dCvNw5"
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
