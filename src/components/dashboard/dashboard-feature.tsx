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
    "4gv96WM4vKqJUMspoQF9B3PAMohqVr78ms12cD5fgCyG1P7b1RPjXynFJ5XyJU7ouTQDAGFA5PcLuKw6a3G3Bmpj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "abmpThPeL2sqA4kYSAFuj8xunV1zjihfSiL7n2XyiZEGGzaDvX4wJqpK7QwQqUmwgvF63mB76vrKBgfSQhjtKBU",
  "key1": "3TaejFfLNCtnLo5pkpvCB2P7sTZZf15kKJuBmRgyze6tb827zfqvCq4USBQBet94mksgFCmUmeEE7R53X5MMmW5D",
  "key2": "5pURWLezuCLQtE4HBwUSSuvPkNDSR8FpitrAUnvFG1EPeJYRiWGLpCyK2R27bgiT2EGkVZ1JDJ6SsXvypBDQMCBH",
  "key3": "8Jq2n7LFj868Y7YrmUrYWs1rZXe3LDqGVUKGZ9Mq3NpQE36dDbryiqh4B2ju5R7QEaFb7hfssHfcwmDwcd36oUy",
  "key4": "3NebyvbzcQvnjPfdnMBoCs5wPmxdpSg4Bd6NGie1KEc7F3sb1AcTC7F9fyDVqHqyTzd2wE27GeH7d1YuqeZ3zyhL",
  "key5": "3voGESLajF7C3tDcYM8NHHUR29XZmNETRqRvZLa2B6gDKu9ULf6QKh9hxNUPwtKChAJ27t1zNafaLkAqKGWsS4qn",
  "key6": "2UpNBe5v6KqnV8zurwa6g6bzZfGGgsQmD7gwZtcAuj2pZnLQYGqti5z5TLqryhruQvxMCgr1UpSzwwXvY5Uht9Nj",
  "key7": "2hwZ3xzBHaiXJQLMpg8iwavBYuAQaRgk8zSaCjQeCV3k8BadQ64QuHXHSJDXDBhamScE5TSHLfRQUHmZqS4myxBU",
  "key8": "4gCUZuddH9PpwuRp49LPe5bPGbgTMR6BL3sz5TNFRQkghCPSYR1Uz7urGAV5e4CCQU2w1FNJbWWY6SDWPzn658h6",
  "key9": "647DyQGMgRmvTj1jPKr7ynQtCif3znCm87oFgZeWpkGN6uGF94dtzxbAMZB88AcLuE1t7X7YFeDfA99hmoapXaYt",
  "key10": "QypSECUsAK9MsPdXaEJqtU6bu2NqYzmrjMbPqTGWbf2MhDBbZbpqx14mR2Bc4MTzZzVbShNSjEazXdLhi4Fqsoe",
  "key11": "3J5oM5pBfZpKnfsZh2gpE5i12rMXGgstyXgRXK3end22hjU7m5AprDZ64VCPax1rHHUrgJDcQu9DwJwngTHVbfp4",
  "key12": "5wnja2nTz7rSizd5UPUhmBifvSuSL2ACgVvxKNozAiZWSs8GwVV3oozZtyKFfDVR9Wvku5dpuHbX3NYx6iewmokX",
  "key13": "3dLzmMyRjVr17KnyXs5SLTh9cmiMgpBWMtPZwd4kxu2Asbyc1Nujti25Ei6sS6JCXvqDsXZbPtBAH4AHsZaT19EA",
  "key14": "2zEX2j3Q4ALiWKvNrAr1TVSSiGayH9XJF2AoQXa9LEJkJBDYwxUwdv9mpiTrA5AEiSgog6MapNQwjwE5VHeXuSD",
  "key15": "5DBQX3PgXAkNGwFLsxYPMQKoTXkVSJLLnrMhYdukJC31TARnRQUy6Dha43Fh9cRw5Ay43C3vxAHBueB43kkDq15g",
  "key16": "3TnMHGxaoad39UnWPhS8KRkXSZqmKgm2Jj4ySpMtJZWCWWv9i6bp6M9RoWqZTarE2hWJYapHhX2ZvEUTFsYPkhwt",
  "key17": "5NkjkniizP36smQDUET7MKB3V2gZWmzFcJ9N2fhdwyHhWfJTVqVUianTE1fVu221D4a7xtedzudLi3ogMLFpZBaG",
  "key18": "tKzvkHnmbkYD2R4KTuPmEq9ABqY7UCQhLjdhZS9Dj1wHDv4GTCw9PfdbkNjWs1a9AuEgocojpPrpiRLg2HxiV3f",
  "key19": "48diW3sfyzYFFAB2CFNDFtYBPv9Yv4kA4fb67Dm7tjgrCSH9YTEozmcrcWinfTM55NAQCTs3a3ji1fP8Rq8hR1W6",
  "key20": "42qavUvdr4uNNZiwHV4opjmb71s4zWQX5GvhpCRAv7AVjzYkbWugVY64tnDiqFFg5wK8vjV4XkWTBPQs4NBKJQyL",
  "key21": "4iZNEp13B7EKJUWhnmZ6J5byoabJnahqk5AxqCdMhJaGMxWarpEERwRLF7fVNhTVqpHLK8SkGwNB3FL5DfNHTaqu",
  "key22": "2rVuW4nCXv9W9rLCLG53dLXEwfbSPtjcRJZwxB5ZYr3AiiCFkXQfzHDi8KMeQV4qsXdMpREj6WkD56VFn3nA2J24",
  "key23": "62nZDrkwhT2kEtUkHn96ZZKpG5XnYjkd7RmpzeCqded9rQNYdyNFVyGAcyZqyufNGMegWdLR4e3NFhLDmrhUUtHj",
  "key24": "UPQz4sLoeMqn1DKw18wxXhiYj81egAwPXSNNAdvKvsDwVtyEcBWSu299RyBWhAn6qrjgQuUxsqrocokRrdF9PJC",
  "key25": "3QX2CxrrsZiHicezAcYfrFFMsNryfXEvbuqcaRyba1HMEAfBvfsU764LkD99Qo9Xfh4JcDqVwFbDwVoSCK3YW3zA",
  "key26": "4sAVwApGdecw6vdncuauc6qdQY5hGUoZJjE2XPiDdEcxSP61TjmYkvqYrXYQK6Kb94XrpioV5CpUSsjHkefaLH8c",
  "key27": "KcuF8KFJd6qZvtZ6uNDjs5idtxhTWz7b8uYFBVzt6xu3WksQzWqR7Waw52u97qCswsb8ozFfqJeKXwrRJTtsenz",
  "key28": "2XNTqSca9ubk5DtyQd3eWqY7YwXwUUtUcVRaGRbUB4XiHGXZYzY6uNVSgX62kDSspmrTq8iF8q68CvNeeTa34H4A",
  "key29": "5FNLGeQRxC9PbQEMyFP25tnihTeZEWcpreRYiWY1Q7eyCi4NF2FuzMiqrbGVySYTjirqdNYxo1cyo44ksr6bBxz4",
  "key30": "K6wKJm7suhP9H39uEz88xmEVRMu247SwkTJooX3WyxRAwiaFzu4eW1mNTQm4LSwXgLT2nciT41RzskQxop9JJyX",
  "key31": "Czt6szKhaJeX9qohfYUGT4dZ6d9Xob9s9DxjX4E2K8k62Dv5rgF4c8baiW91Uab8eHcyUsES4QYAgXQ1952B5gc",
  "key32": "NQuWMx8p216GypQNdPQbEFBLgaeKeY45qAqnr5n4xhaqAbnLrwfiZ37ues9DZARikjZhMWiEwt4rxrWmrhvn1do",
  "key33": "2oSGHQPACJqgdohtjodW1vxgGDGbNsXe8QZN8KByTmPHqYHASi77NHGrE3u7k73rv1qk5LeVryz8r7UwQ1vNJHr7",
  "key34": "299Rqhc2xxXFu51exY1D42khNLPUDAeMKuMJUQDzAEkMsPZn19MYgK7jQCr5vwPvK1wFEHugQgjauCqeg99w4njy",
  "key35": "4P125GuzkMHyx9BRioff7gd64nAuroNxscN9AsResksfaCyBVCCEWX4oLecTLxT7PpXdN1L8MxkiYRjKzFLCsjkt"
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
