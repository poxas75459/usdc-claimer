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
    "2K3GoSqENPddwYvxPpvY6vPyqiq26nhmLMtED22VmGHznVCu9texcnEb31zjdoaJD2Hx4LtX5fb3Sj5RFy1uRGJ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kGpJaHrL9rbP7p5xBhYFGMPPrtduSGCm8A5Rnb8bLBEqN665m88ud7L7A1UnQAG5m1xgsvqZPK6vUTatBeUQj2o",
  "key1": "3NKFJy1MS7Jty5D1Uqz7xZyEBCSL4cq9icnn7pLkZpcuhyvTJWEbAousRVWvTXUxweubgcibC9XTqNZ4EdcrJC8X",
  "key2": "LN1dafHc9WF7tXgJVj4ihX6Nx1A3rcrzR2e9KgMDzakrTuFLx4Xg2tSH7xzPbudYvnL4jKwQCbRfQ3o85XZs31P",
  "key3": "2JR6tdgmmt9Rk6fVu27yitp5S7fgkQ2yinxivHk8PytXmSiBtVuDKvGRNeYNrhtHj9BcA57snrUxrZvmcfimFXzD",
  "key4": "28ZKqRYTBTiY51Jqng4WjmpcbrZ6ZZzRRUSpmuE1MNCKtGJSmbaCSyEspaGKWgCassTUf2ckzCxtPv3waMACJiBA",
  "key5": "3WQeeeyxGJWsWupsEsZH1A1jcz7H23QbGfASzejwMxpGgeJ23Lcpko7WqQrJpixfxbARDjU7hXgNNStx2hfQE9P6",
  "key6": "5rP6JxhCcGUY17mzUJHCiJR8GXiSsQXQ65MHzoBCJ1DhjrygbQgcwevThPcMsk9eMnT8vUVa6JkxnAK213exxxox",
  "key7": "4ZHLLwA1BRf5g1meLDAQQ6nTq3heLX7QPLaWWZmnvtqr1nZ5gejcwt5fWmQn8ctDjHDqxNATWt2PJLfnTkFc4t1h",
  "key8": "qMDhbkLRG71TnxHWGe3mYLtDGkdpGVhMyi9opDGbE6u2y7gmBJTeWcDRyavezK3tjLnm8qswN4XinDtnXEYr9Jh",
  "key9": "2VeazQdQY74iddUSBG3xGZLEEvhuqLSaBHDAZJSVVcMnd3GHhdEaEiu1DjGLoPxxUU6BxCvKkPjwxzw3q46WUiDm",
  "key10": "28zhveaBxEm2o5vV5jusgCmjHvngCVyUg19Lh8AFPcqzae4H8AP46VfRa47ex6ihmYJ7Zj1Nm5ASPq1yNHLuzHU5",
  "key11": "39UC27DAxLiQRA4Pc4BB6Bca1AbgRPr43FWcVskbcTu2WriqAipkeQ2GbY6KRECFwBau1N3BRbS6iNm1a1wvRMim",
  "key12": "61QTE7Fjc3Q1f71jJE5vmmAiCA8XuhDada8fXTDAJeQq12gFruqTUqdBYsK6D59ZKgTsKNkxqTrmm3cWGaDBMoF1",
  "key13": "cs4j2j2oyoawiEgkF8HR2vYMnkQUqurbmfXsjuFQNb9QUpbFtpPNXG1JMeURxXsYK3EcH972PVTqJ2NUF75maXK",
  "key14": "2GYGV6C9BwmEFoi8oWpkLE33aHjuw2UxyXNowahcwbi4yU3t36cLg7n8gvrZEoju3z2N84VSfwCuMMXFE5a2sext",
  "key15": "5irTRde81UgohPZcvDkMMhy9JoqmXu6fvVnwWYfsBY1Y4xGf1wcGsfPm1Eu7FDodGUoibNhZkahk5dRZsGvh7SU1",
  "key16": "3oYfPWFqVfnP4hZ8KPkvBCJcWvQjJg31ZWXkuTRCNCUeWeXkLMcVoyP2DWiS8G782h9113Z6SuVvjBSVzxvoFMsU",
  "key17": "4Upwp4hei3m4Ld2rLHBCKdt2otYGACXhKjxXE4qPMtisweNb8fH7FdaQU8zYMhTgUcKpv3yfCmrbkptH43vuw4Q6",
  "key18": "1qyUMKNqSVvdrXkxCRvuHfSsPCFDausMDrxtLwWqGdiC3A3S3niy7hEJfVUBu8VQVEUZHutTyx8CEt3dvRih5Zs",
  "key19": "5YUdmwiaRZHXnZn2gPNjeNmjKsazhh6xc1vANVgH7Ax2ZAiy6h8mTBqoBnDnPGGdFJfzrCUX7pFFTWVWgPAZdGAY",
  "key20": "4BG3cHErEXVC792sGy8t3YDZW9RPm9CnyH4VhuLuQUMtAEt6c7GwQB5krw7jvWirPx9Yja7rj8iwa1RwaExFVviH",
  "key21": "5DLJAEqUfPY3rDfm7UkAt6E1UrWDZM4dDkC371ccXkLLk2qbxgMFx5mw7bvye6KL4jGBRaTUKmozqsbjh2BeEnYF",
  "key22": "3iUhPj9YMhdAEngEw3Qr5sCxKcMCv8Fe2NZrHP6k77GH7zyQoxTSXRLpx4AJ6XEwFEjWkXPggEc3kHzjtFgFD4TZ",
  "key23": "4YpgrrSqShucFnrN27CapTpxaQS8PnJBZF7FndZCEtHGorVo93y1nKN6gZ6nkPMA8HWhXzzvYqHECnKj79Qo2MEo",
  "key24": "4U5yhTrra3g8mhWGsd9rd6G8wTezKyVfmnMA8JRixVJQ4LSeCxxrW9848RmnCmw3PzmwmywhD1aeohTXJt3B5RrG",
  "key25": "3rbta1iFmAuFrgj8L6KysZWiUoweZHzYzeNwsEQXexd8TgxgjvMiQXQoGdkjpDqCQLQyVtLa2qTx5z6ftafcNmoH",
  "key26": "4LhK1xbhRddzMS6g949NXzGrknRct2FuL3nqkVekGHmrtzuq3tpm291uu6Sd15R3vYnkDBME6reZBLwDQRjnxWXm",
  "key27": "3ihZGPyJsBA3SiJvnUTixpUUpnzNDRMrdmxnBN1UshBVpxs4Lz8MD5e1mHLq7CqMyS73x6XcV1hSNhikMNkwWaJY",
  "key28": "5vqr77dokZMr35uG3P74i7KssWMZHNENzuiF4qbTXuHsKGxR73fjP7BuGRwBvmCmyzC2eySm7V1PaAbk3fYyU26c",
  "key29": "41XWxmhG4jPcK1uWvy2zWgEQNrZu1mdFcFcz4WdTMkGW8HYszhYHCKSJBpyXimTriTbyPb4upu4tDVXkaFPKmbpg"
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
