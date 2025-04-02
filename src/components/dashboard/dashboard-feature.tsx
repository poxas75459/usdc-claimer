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
    "5xQ5Veui6HP9Y1dsGLbHadzPBVP552V3zEKBTHWjtwXspA4431UgB7w54qvy6dS13b6foDELAyCJKXzpnse8PsBW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JG8MxJSoAFt86ibECBJVMh47YhoeGb88G1qPvKCmwqcSwyWrtmZiYefgfum3UxZ64pv3Zwx65T7vcBdtYeshjzd",
  "key1": "3W2cRqYGcgDciR9VpwZyKEcuVMwFvBw39QYP1b5bivmampZFbgzuHZRZ7j8KodVPwChTsesFrk1uUsrxHa43nb78",
  "key2": "4KUwiMTACwXb4uM9yegEPmesKr3eWUYv6HEd6h2uc5srkHCSChRmRHhtSkBQffySLzXrSkVMKRS2B8SGACeC3Cnp",
  "key3": "469SLUMCr8DDExxZWpsKZzgwfJ7USRCzYsHR9Bwr8t17GsMcb4wx3XSTe5tP5xj8it6G81WA3ub21RxwLb2TWm5t",
  "key4": "5AvPowTE39b3QH33uz3rP3dB9SRjoV2Pd1ya8ErjEzB73mYMECPoydSFmhu3wnkzsQe983NVtauohKr298qsVtM2",
  "key5": "5ZbCNwdGF12DcW8jP7k9Dn9LeuNL5TxXoDTXZ9FfwSMbBmF4VXiyKK2BzBQbbELfxP82SeXLbd9nfVeFF1CBJs8B",
  "key6": "52nGvcCHRk69vkuhAz7G9gFgNzGBTmUhpE8NAnKEGkeYePMGmTUzgrTFhpJDECzhSU6kDcNKq1dLqCE9myTciQfP",
  "key7": "YSvZMssTxJnUJSyDbj7W3daT795biotESLkv4chPhQTC6LZPv9w3fZkBmAkTysG7EeW6MeM6Srv7yNHCVwpnDhv",
  "key8": "2TgZ5Vaq8BgtenyvMgvZ9u24jBK3aPXCSsDYGNVHXDjJqqw43RwbyddgrkzFX9Rqrxugiz3sTUQ39Lf7mPQkDhsS",
  "key9": "4pcY2FfmbVQZje6ALp4pyUTF6yD7RzYDpfF41p3TpDM8NV8miatzHLAJv1mbZGBm46jgGURoWvsUeuDyZGHut986",
  "key10": "63ys2vJkHMhX2S8yMw4uTT3XEaDyzCDtqoUaGiAqejed2kriUq1TgqyP2PXV2g9VQtnSvKT6FuckhxFRSsXPeS1h",
  "key11": "33z3LzNQd1Z83yHscj6kCPkgANG6YG8w6hWcWsN7uv8UrRdkAzjMFoF8XvNaofNNdXrynDUJNvya7jj634erKRrn",
  "key12": "3j4WWtDreRQo2Dh2iri6syFR7VPEg5pdMRToWHk45fQE8Gm8x9K1djXYn67g7AFACQXdrgFa3pfsN7vt83RgUFPB",
  "key13": "58fNEERFkp1uK9Ros6tKJfG8oLk4KsNQSd5KR9yqhEhMkUDDcmaBnWyG2WUsHYuJDWR54nCx61ckKH7ZzmeqqqK",
  "key14": "4B5SNv2ewoeeNkaA5oS8LjnxsDtxUAiux3WK7JA9aKwh9NfALbeLrjSSWc49uvyS4nBysjzenpjhX3YzyNaTsgm",
  "key15": "VFC3cmFqAuuxuJ3dWvMJHaz97QW7NrkMtjV85LLHqaeYRyrsEhYdoiGMGzRWvCo5oHQJeLXYYnWbZ5aybZPrqXG",
  "key16": "2k1XxPp1749r9NGD7rZsSVbyetm8rQTLzxi5pDSWZD3K9cEoh4j6YtC5KaJagTQoqtcxvT2iMghcX4CPnUBwCJ1h",
  "key17": "3dJVAo81oSJBtMTXBxAE5m6VsGNP5DN8PthxPjZgcYuzoryakUtxMiU36ziS2thutb4Ljtygca5vmRciDvpWwmJ5",
  "key18": "55TKfDZQ8SuNpo1gJ3oRUmDS1bNgCJXp2EabSeerYiLBpw249M9nBoEGzJssdkADtQYkcLiiUmWftpNK9An8qMRx",
  "key19": "3JCEYVPRNMVSd6f54m4Ne9XrvtA4cVT5a5Ep1FVJMELUP3Zzcr7RAX7CwHqsoWqwmdi1FNZxPJfeUMh11d1qB6oc",
  "key20": "4NqDiqr2n7H24TuUVY4KwftFv38RXZrrm83Vz3d693QhdVorPCdvbdrfBgiuBttzRct9Dg9G2V15FkAwk71YGxkn",
  "key21": "5rJZ9TKXBzBgb2FEM9VaRvPGJ8e4QTcMmcMmgZGqYPwjJJ997JTk3GfQ39TR6nQbwZeyCYgj2mbnKXRs7eJM7ec1",
  "key22": "VD9J5ZQpUXeG6GexX1MYz59zCak7GX8ETAr2Du4wJyqZZQ2tZNVztGYPkwoXQTfLxcSKP8hA6RFEwtGdwjLNsHA",
  "key23": "2zvLswqDigKwiuKQQzMyofTdftEpQMK9R29ejCZktsNaQF6e8xf6FZiDX11YksgL3ZM6U12rAiNW1YHKxywhhzQN",
  "key24": "36MoXDDPQhXCqW1qqMB4k9we96c7dHFazN5hwvweBguf2vjSsWWDwZUoSgzQMo37HwxzZSQPoveNjoyHPQsGTSW",
  "key25": "3YEWEoab5AJqXvedCCZyGCb2N5LBTjxBJTYVC6pBcGqVjdPrJwZge4YigiZdG2LPJPpng6ZtjzbBSZ35EFAEZJkz",
  "key26": "3i49iFyZCATCQaZZq1EMyAtfyFJCqmMEYgSr4UKUvPx8by278AEhmzojrxWjNgrG9VK7fnMzYtAhHnysvfdApNh9",
  "key27": "apxdxcQN24ESg1gTXL6LtnU8rZb8J7UFwFCsnHBMMuTtcp2gQy3GxMAAhTo3tkS4zCLASq9EQmLhXd54rtJ9bKx",
  "key28": "5xtDvUrtccjDwR8fTT8MC1YaSugRSUADtT9s96gw5xGpLrQ1MmhGkR9FJ9DHejAN7QQeVSjAqcfKoo4NLWnqRML6"
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
