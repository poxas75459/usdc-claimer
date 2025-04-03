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
    "466fe7upKQGCg5ZiMdFLWEatsmmCLhSffuuy7bfyNbTjZtagbQZTMbWeVfrQzPjASNoPSMD6zteLM2WJF7UBfSju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hvwVJAoR7T6dVyUpFWVw9d3xkbV22hLhsMuUDJgyay31sE2XEJBGXN543ZFxvtj7ub2o6mZskdyvhzmydziuGhm",
  "key1": "3AerXXC4WXaqSfGStDMpLy4bQ9oXKDKbB7X1J9tWt5TRRa9Hu13LWdnRQgSAzF5BS6VcCgLSQssvaphGQyxnsMjS",
  "key2": "3eDN5pau5Be8fqzdmjEZE398o89EvhXRQNEo8M9QetJw4yuSg5i9LMfnpeNV5jWAW3QHP65J3grakShmc4MoMyAd",
  "key3": "r9Es5gc437FrCafjcTpxbWYhyvykjhtyoBvkkqmEZNpsg7hyMB4wKLxK3Qy9H5gqy2RrJMjf3FVdLTA2S5Doq6X",
  "key4": "54okr7BXDsepc5GBiptFJsDK6RSLQo9QMMguqtwcYBeaavhedjD8A7SFQBXcx6MXjkwCYksqHqFATpapYVRPAmUx",
  "key5": "7jVFVAXDLD9J1SVXyHqAbm28nVZvXmJVG4bfY84Z1ruZdHgyzVR1NxeVTZv329GitYMRCiyMKjBtz7exuUhmsVW",
  "key6": "4CzxWsbBujMKMWznyarAUMxuA8PHo5FWrM27kNGUCgJGxXq4Hzv1PufFYMXpNBRCJw289hMMHk2vfY7Ep4bfAHdg",
  "key7": "67JMgdwgG4LfUBYTgGXyzBccoMivS6aGeLyCAiiECcVos5ZCcLcUaMS3hbGTWmVSHwKkwx4VH1JpCVnZ9Xa8Z62n",
  "key8": "5u7VGhye82Sfy7bmiJUa3ueTfjFsXkXR9E5WbZou9dCRe6VP6KGsDfLgjasUstpPiYdQ2FGpB313qyyh6gLJy6MW",
  "key9": "3KCYJaRdJjTwzqkmKL722xaHiJdaVXp6fqwTToUzGqZAzAck9QLAY3GFFBXdpLy6e2Ad8r78GZZxcWym4jP9PmsZ",
  "key10": "4CAhbcB3gtR7ZmhhSS9KeMCU2Bu1zubSmjqW4pT4RfxQU2wNErv24MeiHjrAFkX3MfbPghAqi2HbNxZk5ZgXmUks",
  "key11": "5kX59SLrcDH3Drp3tPUqrsSqUzC2PB6ge75AqWUbPUdKgYj5Q8RpGvupLGsRfYVF6XM67JRQhW4rXrNMCGqzqxnL",
  "key12": "3k4koATKcttXdsT84Ye7ETVhkSthWhBudE8jHyNQYPczdCYq6C6XZH83zkNdf2shFSgSnXvWZBYNV9xHtCdT6uoc",
  "key13": "4b3uSYn4tw5s8qqz6DUWT4mSsbecrR4toDyxnWwrPAgsBEcumxqUEV8cwhMEm8WXKBLr68aPWZ5g5s1RNPSkmMaq",
  "key14": "3VNtY4fv9sDN8FZ7XSyqgASMS7JkWeKyGrCuDiQ6AZSbmBDPVMMxpYmio5b9m6ebhAxrRhbGKYpgRX5xsTCAMj3A",
  "key15": "3TuyEScxjt9Fyk7dPnQuduuPhX1yoyYpgJUFibSyptBpP1Ki6YkieMuC6VAtKphZguCkXy1Ye9ex8yEYYGb1EFYn",
  "key16": "5vmdKdYjHk5yCTh8rWupnESNYLzirWYJ6LumaGaZDrp8z3PZvzpZD5vMscviBkJDRrgXp176frukTqS87KMybMH9",
  "key17": "46PCRaY5XEaTnrYdoK8FEyg5ejWDjhsJ4DcpPAaEwv8nxJ21pRDJkNfXNEaCAg8zUdgwyHcC2YTbDRGv384y7JJo",
  "key18": "3ZTzH4jzLo6kaVYDHwcPsDQ7ZDkJrjv6HCpdfSTaySxpQiomiisYUgw81Pgpnhq22XzrsRE3QQCe8b7xQNJXmtAZ",
  "key19": "4frRi6tL5LmTLFJqFc7RPndaWVsekuBxxemN3WUNSwLYWrqTcs9SH3Bq6uLqh2hwv3QTpTaSKEXnZzptrmMghC71",
  "key20": "32vvuxWJTZBs43feHcHwW1iPczbToo4F8d6X7xdDNmJjwm1bRfqgYaTfrx5t584Jwoma86pwGZBSQ2BvgRqkNhWg",
  "key21": "2JxrNEKwYF3WsgAuz9bBhtrVfKWJeV2PRWeV2xJtUp3GEFCkvZNqZSazC7dTpXvSUqRPYYzrH2KGZsyBLMHAzAGB",
  "key22": "3q1xCBw1RUtp8RaSdYv81GfHPG2noEaxFD9Bu2xTnHHoY1pnNDr1Tj5a38DVV6jPw3DasQcgmLwkwU988d89cJL2",
  "key23": "2c91pbvLQpmz2dehrEo8AE85eHErCRZqJui7B6h6BvcRF73t9q5JJNiRum7VdAazHVXpbEqfz24iVHa4YYH8M2xt",
  "key24": "2Jj3zoG85h2YgkTjYFaSLTiqDSkp17wXNrpt3dBsCkf3ydAPYbX48bjv5QjaEJDXYiPdFNg3cMn6MJCmfzJoWNhX",
  "key25": "4QNhNxgymZeyXba2HNt1bSQaaenq21kNQGFEncCq8ADnKgPoqbQnTRgYPrSfwkFZqNUi4hnwmem4JnVeajSjc62Y",
  "key26": "4XTQHzWNUhq3VS9bKcV1iT8dPW8c56NvPd4vNhs8HGCybCcdGmiXxtL4XWfJZ2An7EEQdwunfmfY4sPxwdDYPTzj",
  "key27": "4BfFSA7nS42mc4tCgCTwPSDMqdL8vKkksk3wFM19JsmXBi6LqMPtCr2tMWQn4oBvNtHbYKZkDXhDKYXd34AJZijW",
  "key28": "G1KLP4Av9W2BVhWtrLpttJ7dwHgpJbJTxzjgwgTcwFKjpjFetKLJfgdYNeMuotG8Qm5tWLRbVYcEhSTQ5moUcHp",
  "key29": "2TU6oeCzYaSR2s2pFJXQ6MWUop9zzDt3Sj6KT6L1yJvoYEwMVXjdGhvvuRxtvdnBBtYa6AySZoc9k4B7Fa3v1QMU",
  "key30": "T5TkHzUgmMNfiqTVB6AK3CRha49xcx9cAcQHMKN7BdeK6KUxrR2pDYxbwttuyAkNo9mgyFnoSAoesSwW3JP73KK",
  "key31": "5wo27bPqj1YKp4T5QSTmJuYdcTRtyHbkSos4aZPUiLQUkigYRNWi7TMVMB6HNDWfyZLkqpiSp6BG75eVTxmxjPBr",
  "key32": "4Ri5kWMEGuQQpVeBWeUi7Ybvi3NuSi9ctPuaodMH5noH5tVZ9Jm7fsBMr22tkhbBA2TxCLiMzYunEDMSJAUotD8Y",
  "key33": "3cNthNbBGJNuV1jnpSqYq4pCN46CFJqfVtvzyJiqYNhisvvnG9fcsgsZsTinzmwkhAxCfrUgYsy1Qbe8kJUZQ9uR",
  "key34": "5VStXeRGMoA4AZei5phQ63jksfu6fBYMvWtHsiy4YgJtntuNjGwEHfKWBL9phCgEe8UnpgmmsMcWgG1WLKeBhJ6V",
  "key35": "tWPtqrpVAb1FeZJoAmHYigNBaHqb4tdW1kt2Xt2UhmBKESwJs2KgdpUBTKoEeAE3SCruCeyRwJ5bBZeWmJCh8nq",
  "key36": "vgnVhwR3hLTKeHiEmfzau5H96KLmfV419L8Hc3WZwDXX49yf3NWdVGX4US3g742DJspea4YmV2YwpdCeDRpCXNH",
  "key37": "3eSD3rxQ5X4m5seQdqD9bWtwAdCqdbZ3gMMnXskEXSmzgAjwvHrL1XZxkJC8kMtTCtfBecxiE9SYUam69GHV3nyH",
  "key38": "W29mMgTBjX7ZyfbdDWdaCPaUNvDAry7He4GRGSorAW7Nxv2h8Qhx5errgGwGWg5HG9M3AufdEPdPrW8nL9TYvTp",
  "key39": "36TAjBpSPoaFQgbSGUdtJjbHcrkST58CaTzCvvhLnecLFhNtuZxRx8vqZR3XoKkXQ7tdp7Gg1hdABZKdXFDcGPTe"
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
