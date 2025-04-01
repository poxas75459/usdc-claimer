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
    "45N5dhxnb7QLMWzdh2cBzXhayH9RuKAWjxsNA9KFsqrAJ759WuLgyMgrGrUr1Rvb8SqW8yqc3dNvL9XzsPteWQfV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FXVo99e4e8pB1A6NhNGaNdkQs7rMi1p2BiiyQSPphA5JCBzCu61fyQZHoyZ5R7dpiy9fqDXgMBdA1eNoczifzkT",
  "key1": "ZB5bWpGY3s87BT9qu7k8K9uiiwTTJSckDwxNej9vYPt37bFV89NbuVpvQEGMwJ6MfBq3pPwXyo1XnzoWTNooU9f",
  "key2": "49GETFzzig4gAQPzGNy6minYQCnoeNUHtnHTU4teDZnTqHfwdSCGzdQmjU3dmS9KyWX6UQJXKXMPhxvf7KjEzozU",
  "key3": "3N53GX8xeswC5vuUL1pVuDazYWkgbp5waKKLxeXx8eGwusKT7LVmFKNLm7DGf48FLUiTHXkxFhXXw7EPsohgaoNZ",
  "key4": "57KAudn8zwMPCwtPSEk9v7TbaPZt8pXX1xs3qDohsy2zgScVb5vKCWB2TiaJdnpk8KJ78Ak3JxbwxFKTYjk2jh3V",
  "key5": "3yNhUWcQ2hzZpCNdjcYSgK2C7ooF7VBRbADBzMVWJfEHUHmwwodbt7ZZNErzLh3ZicrsA5tieQNJNKbfy2xX9NLk",
  "key6": "2Q9mM9YN48btMXy2TgDARkx6hAKXM9eMWG37rNsYdhY4UBGMYCuemtyzFAuNNtdZjyxq1J4LNtDHm1rFHEmfohs8",
  "key7": "3dajBhjn9wyUt8hrRFCkriTP3PCitAhwBfbro76PNkip58GRHRW6yGkaUeDfQDcUT3zvEPpscuPPw78K11qtWb2s",
  "key8": "129c7Q2eqtq5CxsxEKxp3annPSF8wPhAPm4tAqG8xYeuCM7N9MSXs493zzdeEpx8RtUqDKRFsAmoVxJFHjmS8W3z",
  "key9": "mdHNopWH44cY6Tn3mzATvewqx1jJF2obKfXFc6qBq9uBYEoaSvCXXYo1NTZ98zipiZzovfpwq1rnPghUFVwzeF6",
  "key10": "7UZQdTWrS3HhATgZwdGhd5FrLNks4EcE514AGHGpTFWtR4Q4ZRY31jKqndtWDRjJ9Kgx46S9L382JWezxNAPwfo",
  "key11": "3mcTCqp7Gxg2keFG24JMfpCHJoFn66mjGoo71FQ5MCAA2eyx4gkLCU58ntLTWpoY9hDwz2Hbaenem8hQzYGHLnDT",
  "key12": "hmfVwEe5uqgnTXHjVQyjUMaYy5CYvXpxNZog9EnrJtMwmMe8nUFdn5JrBVRMZaENtjTiGAf4Mf4hHn4LF5eJpqF",
  "key13": "5do6AmyHixhpgZm7GyRmHyuYQYYhJBiaCFe9BsGKt8s5u73gBd4Eu84og5YvZyQk3mZJ1sJS9nR1wHskeLEBgpUz",
  "key14": "2Vi8H2wpF6Tm5yFnqwYwWucaqKKWEuJ9n5xtFJKyT8upb3pLhKML5L74NqLPXSvVHekJLPECCi5pPJci3EUhsAUy",
  "key15": "4Ekio8VdE3KgPU1EHBEPxMWsvAC8b2U8wSuGtdZoxtCrDq9qm6zzrKW7XogasxMJW1a7EwWj5fQimTnSDkHtFuz2",
  "key16": "21pmz4e6ydbqWZdHkom3d8oka3Sks3tEJyBRmUNRkeDQD5DbgX2A6mhnD56nkx2Pm5GkbtfoJqtiUKvbGhyFfdMW",
  "key17": "4FA5bRYirCxnQFhBVKua9QCtEeQ3dZoNFyRPyFMe1BcGdAfGaoLMFUrzQGm6xddNg9aHNTLdxBK7DDNmZ6UVyvjH",
  "key18": "4FcpVg1cLWwetGdMGNK1QHgQURAq9onf9nzmvreFLc1mL4Pc1484boLnbzeF7N4SmucSRTchRGdNpEbMWDUFr33d",
  "key19": "3gfs1uKV6ikbtxZGukL3diweDMn8njmkuYdmEUzKYkKsgu9H9JQf35VocNSFoDydiGU1aVwdhzVjSi2AUsfL2H3C",
  "key20": "3Jk5LLt2BmKSYdVLCRpVXkuLnAtbueCkUmx1KEDBKuuUZPnGwgKGCFcf1HR6puDwaPGbU7kFFU6hS6khkRqQ5hko",
  "key21": "2BJFQtSts8bKgp5d2piuFSYWRNFYwm33ZFmvgiVsrSpLQv9hc4X1Y3Gs8FiZMcpiNTeoErPouLmEwGEHwJNu1ynw",
  "key22": "53Xg33bQRitH7xg4TorWB1ExUyZ9fZcC75CtpfTPxViWSuKWTHVBvK3pHe1TfQZn85MKBCrLbBStywnebCJZFcHD",
  "key23": "5JUpDmy6DPTH1fBVQAQ8x27NBnxWM9x8yzFWvfiiWPzaYywC35631kdix2e9CnAC2WLGmSZKnV6H4R7VcZKTWBeu",
  "key24": "2Pf4VvQiq68z2uy82ViL6emGQW7e3SD8xCrpP3654v5guH43ddiRKzuTSVwBZLhE6fLx8ba7BFn6QeQNes3qvWHU",
  "key25": "39baTwKGRAYAhx15H3KTmeuqBSENJfBGn4EJLj4JbswAGLgHxPPYHDSgknHQjdHPu1hrS9U6CCcGBX9ijJmRt22p",
  "key26": "2j9ePFFhykeeiZGGxEgse8RgShzd1xRqP6QEibWbzw3fBakhhDGxcCAbnR3nb7HiE1iyhvu152sgsA9zhvHZwo7H",
  "key27": "2MDpWV2PPx6uAVC232q2Vw7L2RNP7uqVMxr6xQY5UbFktP715R2rvAwD57oRBsJai2gtZxshoqd6TyHCPGTv8FnU",
  "key28": "4N8Vh1WpnsfLQCcYEZ82w9V7BPc89qC9SUuiKtcontL7WVPV2Woipi9dYroanD9MhBGKetoezA4rcPxqCqms499",
  "key29": "2fSt2c1AregfnpR5Efg7pv6rCNEe1G9c4PDdNMPiZWEMqjnpCvoKAgARKFge1c9pJtAPxocfycRhjYE48NyxoySy",
  "key30": "4C2dgrv5SgBzAmMVGjVCjSuHcJmiLAiXoghWgXWH14fR7idyyQ1tD5ybHRNZTPJYoq54h6HpcK8tx6nV8K9LHwuJ",
  "key31": "2WUuCtHjp47VYtThTARV33X6d5jGRaghtN1URD1k7gm9j7Sc2uqgYQxoxQdWzCRsHXvHftM3VbVMLbssp3LoHmkF",
  "key32": "4m6akPjbAzFtGy5grxsRWtrMH8YANdkpJvAYPnU4jNF9LrQTELR2B8yE5RoYYM1mF5tKAbXpBTzgJhS66Ss8dbes",
  "key33": "2eLsheVfzGFUbWbu45zzLDGqKM7ahSvG7KDLaruhy8B4mZ51SnrkKPDihSELESGRQ9BYcejyZ5g2zB1rxVfdPDhJ",
  "key34": "5rvsLrvQxECHAoMm6kByCJ2JyQiBRFEgC8ZbNvfz7bXWmpjwW6P1uaxZ9XFHmeJAaaGcMo5cjoceWFRnt2JcpKQL",
  "key35": "38bM8RQWp4xvybdF7Lv94YgGUsnE6K8EtNcrKLyYtTk8edbtYPmPXRTgY4M1rsRHiRzKyzE6xCdAeceagbJrWQ3y",
  "key36": "3TjmDjecdR3oDgKzDZKDAzkDmLDMcF6hwUYPbW5uVF4ijHdudVxxDPipRvfNE8baEnquafPE38bN6XkqFgT7pbCS",
  "key37": "2fZ22wVcxqS9L7R2sCg6idUZo554R8mpjrvf6fLS5g9Y94YfGxJrXmc9U1JhoS4aJYgU5V2haYn1ssuVNS7bVgv7",
  "key38": "5U2iNbTkoN7NinQYAGo7kRUzVdtAL3tdnF11FaxiaKTdLz8wyGBpvWh4hYJcCpBw73rRsCbRPhTjgEhg5iq1e7XD",
  "key39": "2gubMTkENTkJAkTHQBza9D7Bybf2A1RGcXgcped6tAziJvVvheKrGMisC9R1VKv37W3VXajNqdt5pwySWZBAwLpr",
  "key40": "2QLSGxeL3N2zpiyh2iuUtKCtf8PC1cThYTAgpuU7UXhQG8bxuvpp5Q4E7uvZcFtzaVrfPoYwrAwdjM9LjVNKBWR6",
  "key41": "wPghRLs5roTrbDUXso7WdvQNxwmZLx5tWcSg8STmLuzjk7ZkSiscJbAH8En5117M5WiZeKMbMFTAiPBXLrhdKme",
  "key42": "4RRPG2Wix3U3KxYQsd8Cg9PTR6gzDifdua7TaXfc7dsigecywSuJYiprSfkDd7tJyeQj7LhQG1kC2mkWrfhaNt6P"
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
