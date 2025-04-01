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
    "59sLXXbkpb5xhCr1xXBosQjnQ5bTS9Z3osxJvWDxaDYgccDCfNnL44fzoPyKMszZT39uTkMQRaKkBTtEbZnJVAHQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LeZz7btBVedC9koL4Fv2VYwRzbNBuXUFpyDYG2C7mPacXGS4VdoWigWj5edhLTwPPvGPJAmS6RdK7iZNFg9jC4r",
  "key1": "51YazQ2u6ccUeYvNUDHndVEebPB1MKXZ9qdqaAN6RD2ZZkC3XzuoZaLF4HL4Uvgz5rQAhgYytiG759TtoFHoKmiY",
  "key2": "3wyHNMh8gWZySf4XtXAupoQieYh1v2UpDt1mxc4ENp7inAnrGXoHU3m5Qg4gmiwoQLoEq1kBrQViDsXRAwvYZ9cQ",
  "key3": "25TKNN7nBZaDwjPUU2jAJNTcdQwkGYGErU8PdGrddBDXP3ZckvL9B99Js21RidASQVyJZYgfS6eoCHrcEFJzBq6b",
  "key4": "2ucaCpAVibL8YpZqoCULzQSVgxKDmLyt6A32A2rxeiKWYXeZedo9d4DNBodD4YG5Ud8B9ETerh1GdHX8yvnvUfWv",
  "key5": "52R5tnMqgEypFPXBBfoFxgxkgQkWWhFTUhnqznAFmLzE9PYM64y2aRSWEqaZoesdhS7BABGGr39qnfeDsVqKuFQS",
  "key6": "4JfapKGdrfypAppBDBUmTZpRPzcLZwGj1h24Wo1Nz8t8uDdygcGf6BenudPRHXdmcy8HPsKLMqr2jhrEimBS5rJx",
  "key7": "4LM43HcLtSJTkv3n4YKxVektY25W7SZsFZihQt5Aqm9FSC5KxBJe9Y4W3du2a9ZCkpZgC7h8QaDRE7tLqK7C1iWR",
  "key8": "vAJ9VYCAtJYLi5NJDmf2QofDtX6YivoabFETkHz8BLCdBwDVZE6waRkwD3r5sNuM9NUi5mP3WvtaF2RqyEAak6j",
  "key9": "atQEE9SHDwyHgU26rz8WQyGQtve9j6HrFG1fXTYys2qdaRfbEyUiGNdzsJqsyijYZTxkZs51DSNduxuQxhF5bUo",
  "key10": "3ck5rpu8gby15NgbrqNvRbFYR1MFb1TMHFZaNoa83FHfqKFaexc1Mn9BVN7m3ftX1HLfoSmyyTs2UN5woFz3WLM8",
  "key11": "Zb9JFx3B8jLd5nLuNKeZDEGmAuaoPhQTQwczLSk7dLksToTJ3QqndATSX57rbWQEmNwL6jvNrmFBAhyH3xZqg9x",
  "key12": "4X54EQtKpm9JwipLo8355xo8zu4eGkYU9sQfTGTUmmgz9RpLPYum7PjdPPXRHuvYNrJQaVxqKAyKJD8kQCsvKHyV",
  "key13": "243xY7azcUsxs1fuHEbTppYMa9acvPVrcvz7LbG2jmY9ANt9FNVBciuCfJVYPFjYZmj24CqjfAFiGsqHJZn5VeEE",
  "key14": "4WEds35AS4v5T2mW3PmtkLKqmBRqFoJa3Ed4YNCJAii6txWWT4vhChaKmpJa2qxqUS9RgPgHHzxuEhrLDSKqnv6P",
  "key15": "2JDKDT8EvJ1Y4u8enyVHLTiYPq1G8Hi5CxjgE1kY6e2SBHDBvef7KLwTqTHQs5DagaNt6TqaNhcXRRMJM2WWoTkY",
  "key16": "5dqnLKU9ERaZ5rSVZSXzQ163qUjNZpk7TtVW47wKUTiBKW4Z1MPkaxKzM2SYRRAWJ6gCePunhftwRSQCM79tLYAA",
  "key17": "3Aeyy1vhpnWzjqPgFqquyWPKrwkxMQTQ7uSsv8pZxkRMdrcFEnuBFhzzBkjMgu8CuwPrdUz2vVPTetUUknjmh7P",
  "key18": "3XTrdxzpgaU5XVSgeJPX25Nvjsm9QjEHqvm315J3sZXQ42Ld96JCTeuuSu5hKwPFzmQgb1ps7NVfFU9RTsBFDnYR",
  "key19": "5pdY5gwmhoWnEDm4Snu3t2rMGCwUCV2pXticNAcwpMzJWBuYUBGFaYtprLsJLr8k2rVcGoitw6no327Hz8XvnMFq",
  "key20": "2jz1hd6ebkPPJPiEpvh8a8JH3TgaDSMdDmJFbd2AZodEwXz4TzQ35xeeYG1RmgCeBGmwRXcnu5ZCeHQMopAxwg12",
  "key21": "2AoPBGQbQFQyMayJXg3E2EeRxfExG6iBfkif6nC23XJLi1qMww8vDUTcAxFLteWrceEBdQVFPjSmeAt5zsvSRYHD",
  "key22": "2s1QL8PgbGxPRGtqKz34kCoBR4V2N3HzyVPPTZiAk9EkYUvgA33VwRpS1TmY55bTEKXS3wVR7YcX1UZj8DzKmhax",
  "key23": "GR1gPEAYC3p4bbeCNDb7ZLm7jUjCv5G14X5HMJTizjdkwC5opWLUkQt2UQJSttZpA8Z7fukDWrSxpFEZxgGs77J",
  "key24": "3YmSGnu5t4kq9LPayr7Q3anaRmMxccf5vP7eQWvzuu2hdQK8XaJtJrMuwsNGF2EFsiuvvVB1LkS2n3R1fJVgr8UF",
  "key25": "4SseE2stFpEuN3AeH4okHf3CJNTCtx5ZRGuSdeYygpwDS8BTW3VVNTFBJnejejuVNdX9qLFqxjWoZ4e51REWf5qS",
  "key26": "4qPAiE7PbjC7yNYV8ryr3oL4V8Qvyo4TU6AfgkCahoXLQRsZgBLXZVLGaRNwQyCQKkUxVqqgiZ5tAYYMPpRuM1em",
  "key27": "51h7WfB7b4BVFYFe8skNVQugJK5AwyA8BK88jDhhmQKX7cnFBoBRsgsPzPfGgV3N6aqbPa7ecKUHx6oQdcTHSDgn",
  "key28": "5mCFNv7BNmJjNL97XKXTYwyM3Jj6qubKeNE2rcViPVfywFVhx87XaFtJyZT5bnNsmsEBbJzktDUhtxqqEyJynvYh",
  "key29": "EbTWRzXtxeSUT1gC6NN1iiDMUv7gQ6XdvozzkWE6rdSUgmZggUDxA8DHqLCQ4PbRDJGKzKiJEFmSZAGzupKpd65",
  "key30": "3U1cdpvoeUaqLDGiVvpY76qKq7UM6Bb8jKiczwD14vHeqRmZfpAsDUHg4VEzt8bxwJfpZDqNqk1SjP1RjjKe2HCX",
  "key31": "3yigYR8hciWmHJgGfBfBbtuJQ4TH9hcEgPqPQu3RBBQAjmkBE9yq98bPy6Yit5wCyao27kygYViDsGVtp87DQQGf",
  "key32": "435Kt5XspfbjrfhmoJsB5Z3bWYSJJDC63XNpS26vVtVdTbqNjgEq5oJyYv6o1M54uNmFdUmTF4skSpoeZcDqNXRb",
  "key33": "5kYF7fZcdctzw8qTZnjiGpon4kRgMKK685iGoUc2EUrZ4mj4LDd1JDNUYM4Tb5dg2tRiCX2kHTFLAU9gJFS2fLxP",
  "key34": "3sR7h9NHJGUaxCZBXKM2E3ggBu8yP7yGjoosJd1pySgT9h8Cz3sEwxrWvuEaZqv7m6JyifNmE68USKToW9bnuY6n",
  "key35": "5MwmefTTfDZ3DtFamGpPrQxxShLWs1dTaLGfM3cqr1Tu8pHE8HeToHspedKwYGmHZxbVD8YnbTwTGXdFpkY639aJ",
  "key36": "4c4CvL4dC6SuixAfvwMJZezQCpMeubZP3JtmjswBVyTRF9ngVpKrqiYvhGrokbVkdzeZbmJo1Twuv3jvjNKWZM1S"
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
