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
    "AqGN2aCR9UmVZVyZ3GuQodcx3PcHAX4x6PAJMxC6dvEkrtxBiWeebiPsgXvsrqNiNm9BfrP5YF1kpsen1D9gHkq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SHmagzVWPmtd1NX8fcVTcYNYtE5wk2b6b6TyHJzYak9y18iiG8uBHfTYG66du4oHuSCPwuTfjK3CDV8627p8j8H",
  "key1": "vf8nLcnPtekfKXZAtv7RLMpapbJb6s71Nsqh67jkNuR35bY6YYStxJ8sF62snQdT4igjiU5WZx3wLofcYNBCB4V",
  "key2": "5oMcQjfhGFDSnLXDnqFzEYzAVWJWiA8LW9i4fQF4YMzh7pEJzXnCApDhcYhsdZs15F1A2M4cFJTLQ88q28DtL4iP",
  "key3": "54eBbcbtpbPjMDCop1VPTp3TzmkgEb3nBq6JmU6eHe1pLW69Av2fey4oRN8PBWU8gtADrWGcRyxkjKt42P5P3NVP",
  "key4": "4kYEv45vMT8CtAWxcWaALMD4122M5b6MUFYateZrHZoo2p1jDrNvUdKD76qKCyACe76bUYo9RoQq1NhbyVyESPfA",
  "key5": "4ZUJdimUMFgMTy51MQFeYhoKWZUxTiVFx2GuAKsDwQbR3AkZLFugZ59CegqZ7w9nuKXPLxUdfnzbBtLgRNqxqS7L",
  "key6": "MYNP79vHkUGrGayeiXvyMxosVgB4kC2zKpxEr5BjWFRXh7q6sxhXAXwmY9LRV4VRtjmoRPh2StVWdXgZE1XfDRk",
  "key7": "4URyQXwTkCMi4nvqvtDzzfeDxozeaY3NQ6uQ24S6auJKCbwCLsBNZQQB84EJE1ki2GZnCdJFPhmV3Y8wG5bJdvZX",
  "key8": "2ZetPwSfBiEX35Z6y1yCEbADQESY8PPGETLiLWH75m8uB1mg1XCu2bwXLMgS7MocSbvALzMmaMcNVLYZgidLqg5R",
  "key9": "4L8XpERTZZ23udigmpewDVZfk3WcmR9181SLuZ1831fVzGZXC4CgJ1xSrc6FMzNFRmnYf3qsBLFGjQZNaMdxUXcZ",
  "key10": "4aU6Qrte1QH1zpbBhP4GgNN6ziyhLz8FQuVDt4D5y1uN9ghnGNmhP2iE4rWE4oEUNokMvywnCY1fmWRHa61nGXH8",
  "key11": "VkjAT4qo7gYnY1JN7xqcdqmiF4ZnjfMq8anncDqEZK9wJzbTHgA3ipf1pDWs2Cr8ZLhYGXP1w9z2FtF6za6eduA",
  "key12": "2tGQPq6UaDYCHN5SJuSibj1bDzLximFgFbY8yqLUcjuwdt8uwMrygiiEQkMVUKKf3y5ma6TyxFFnxWP1woAg8EJi",
  "key13": "5AjpH8FewNXM4GRMCXdEpxPesGXBnd9ncALKj4WbS25AhnvYsf7EkseNqgTiYuiMqCdnNZ5pifgSLjNPX6ySKSqJ",
  "key14": "2kuXHnJcHx1ZiFfV9NkTJ1K1MnaREGB2fGQ5tMMxhdhUm1Z3rem21DymXDKzGBMZff7CY2waMzCPkSqmhDY5E6by",
  "key15": "5jNBd6VaS6fAdtR59q3xjeg7wfN6jyuoecB6Vc1crHKAnpDYhpBB7x2n2qHW5YbSP2hhiGzQ1fJrpyJ7LcNaZvE8",
  "key16": "hXLkTufbG4jXfhrhzBhMnWuk4UJmBdyY1nY4pRoiguMoG2V5Hc4zMYs4hvpUXdzmPEEqGiwCtAGKtLahtxcKX9f",
  "key17": "5dZcqhfAkK5WYEtFSBHRmSXH8GoVUZa6SVLokF69L7BTz9sFp4iTRjqNwbJy3wzJV8W1wFpcVTetaR8iFxjwh9WK",
  "key18": "33BXUe3KnC2Uw8uqtAQx8gy1Anud3hTgwa8dTYPjevWPcNqDvaypkzqjUP8i8xKT9kgQyXCVnhJxCub86i1VoxfN",
  "key19": "5Lpu1f3oWBWHp6NuBxYAnDcN1SPQpXtAsazt2h79gA6zfxh9kPn6vrqW4SKeRmVCHzFKCMQ8gdwVk4uD4h7FQTT3",
  "key20": "9snQka1dP2LsGPZxBn83ekHzUTuSXjammxdawZe24e2ph7jqMAafJuFQLhA1XN2MxXEVdgDrxeE5LSZLNuXM82W",
  "key21": "62UAH8wWyosTSNHosmmtUC2DhS45ewTjHao7pqWoMs1QuiLr5z2329w1DXSmrKwzdSJgxSsz1LFFdeqAH4euCCLX",
  "key22": "2WNk8Kiy3NcTpwewyU6mvrLnDqrX4s4yLkSaxW8jH86BXb4ChqgkyW8DU7UGky9kccVMNh8rEq1DLvFkhVzc3MdT",
  "key23": "3xM8vq6kbnL8Ycqbg6YCduSN1YAqwdhQ8fgHSa6Z2mH9rcS6QMXKz3vEdvuWZfhtxCegH2nWZpnzkHBTvrACboN4",
  "key24": "4VJje1LPHGacfRahEGXU7sDhV6PvXDYSo5XsG2etcAnho6U1oGDnetN4DwD6vFhH4HEb6PeHyxGGWhrxvgopMJje",
  "key25": "3wJMfpmx7LDLiyM2smM9DcJ65tLx7mQEvdp3RJAwJ5YKgNJwL5wsaQjBBKMmy4vEEzpq3ZD4BgbEZq1JyicrjCc8",
  "key26": "5So9ec3RjygeRQaBt2A4wohFzR3KXvWRkzw6QRhg1yNzJ3Dooq8umE7Lip9cNMENSZz2d8D45TFGW7NfhW1p4dRp",
  "key27": "62AiC3vHVD1sKcsjRtMXFrR5zCVMEpGLuDanUKbxfhHVjMwNVCvkwS1chQhevscwzF8J5YemwiDcKFXwDyHwv1ay"
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
