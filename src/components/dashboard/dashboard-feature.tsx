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
    "rhqBgSc1amEYPRVztQALqj6WYQocT7Qr4jyjDH5qve9Pqptgvy72pqdzGALM6StcRJtvBAGzgNwBH8JSGmWayof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SkCjGvkKNXrAcHbZ6Xih8XmEKN9Yq4redCXZbpY7FhuzzpABufApnbBjoS5hwR2LX9rAuw5J7ZkLcCFrcg2gnfP",
  "key1": "86Cd4sj6fwVdZ9m7vEzuVgDUaHnb9ax3uinjatW4SaQNhNV6Qa6V6Ds9a4fahcnY8tkAKaYFZwi6vozYT7cU7g9",
  "key2": "mvVtb5GRb53KXak7cvCsNqdwNDyeQBG48BWzyTwCVq9iJNL1Rg9dBNW7YtpRyxCEhxSBJzSVFHL4Tqh7HjaQd3h",
  "key3": "56QBVoeY6mPRirFRFiHTpbb1mkL3hr6BLggeNUHEkwUtY176nX2bvChEvDCj98Dg3VmyvetPPkaQ9vNbzvqCVqgr",
  "key4": "63uGkJ1Pt7vMrQzYyka4T7NAkXeyN5VsJCes4TgdjWvSipv7yF2gyNcUuXJmcC3iZoDz9vWBFoLsQVnBz2xC2KDu",
  "key5": "3TxNk7TMpLoyaYzoAp43SZQ1JUSoTfAUb7pFhDLUasAGBy1UfADzGrf5gUWrbWxe9y1ZNTdrTfRtFTJ5YX1C25Gs",
  "key6": "28S9FSFPekS6DhobbfRBQUVSeLkYfoGF93xBnVdFCu4LQE7UKPFw4kCETezazcdG8pAW27a4grZBsaoL2wJmBsx6",
  "key7": "4DYVa5Yioq6PHSBkumGFeStr7aVHwa4zrqi8tSZJ1uXddZwNXxHMXTnWqfCCH6E9tuua1rtNgQsKD2VkJASGhosZ",
  "key8": "62pTBH2fZEAYnwvtQYY3MCfEG6BLLUD9dgKYuuCwmjf5X5HD9s51fYZYnx6yKnPi2HqRSU4FQMdFmGHtqfVhQVkA",
  "key9": "3YnBH6W1oEwcxW7NeyU1cfXr3ikUheR1AgwCBnooJvrv4hEgDtJ658xRcFozSmf8tSS41fUEuyMr7bud7Exszr7h",
  "key10": "cgfxLcLaPytr1knoBkEJcJ6MFzKNhRVYZSrrQhrSywGNYgrae3jsYEpjra9HyUsvQtXhdjdUuJsaydreG8FZiRF",
  "key11": "3m19P4ZnTac3mB6wCtucfsX6B7ek3fUjfyz9dVKjmR34KKUNFpvDSwpcsKBJpBMBxBpnhztKVYBD6nbVPpp13tyg",
  "key12": "Ru3S1CViGVkxFAThKBic5hU1AXaf8JcKajzfcxNDba677gk7yTLBw9Yfm9iKbDNuTBHvVYrhVQR9YMmmpdyPbSh",
  "key13": "56gqc5XtbrsU7XGUNQXMFkbzBmzBVV9DRnP4QC6TkFAcmWSKmiULKzFGf654TpXEVkKZz3zWT26kicmAgJZ9wZQa",
  "key14": "5ZkAdEzfmo24x8LyCfzxDfjvDkntDCZSe148b2jnxTptqyqEgddSAf8GxN9cgGT5tt5W8fvZGyPYYEE9Gfbj1V2x",
  "key15": "5kjKAhnWzeh6eLJoCUTrqD4zQiP9F7RfXmbTdxUYRVf4NqHpVTqge3S83GdKAPDqcn2nVHNL2DjrHcHQohZ2XzVV",
  "key16": "3fSNDAD8de3bPsJapp3sWo9jt17kT92WmL9jy1f4W3M46nNpgBwDBNBMcneqcLUuv1aneEvTYddmyycE3jZMipRM",
  "key17": "2V7WhL2mQJCCUguyS6aekAyFi4tNTa8YNHbF1fvt8jNWEJsyFshvYu65KfhyxEDYuP9qUYdimt29CNKmiXao8Vqa",
  "key18": "FgKKdvYL4r2t7Pt2QmDVNeraEWsC3smLhDcJCLnTd8qLgiAPD8eyQigjRtUd19tdTHJLYbXotM8kjohxqoaVyEY",
  "key19": "3mb5MstrCWWQRFH5XYofo9qxBkP2TCQ4YwxbBjqpiMpNTi6aGytRKnvkoS2yRdnMkA1uE1YwDBcjTVX9edpvFQXA",
  "key20": "4kLnYsGS5MnP2qceCJ8GSNdpnPT9vCZrusZcLwxFCoE926dG8muVXgpD1j8c7dEarRn4Da31uG7DLtiLUCvRRJJp",
  "key21": "xhqaemjQNHD9kjo3yrFVTFkrLcY8D6SpT6v2ZsPpSd8JGWR8SXn548QDCWrJScywdSfbzEANmvkF6TozEjZXeaw",
  "key22": "3ZPVcbDSfC6Gc4wRCcrMxwMURwpRQ8PRaf5TBg63FpQ69guzbDWKttSvG2RFNqMeTCEegwYtwoaunqMYKtdpTaYQ",
  "key23": "3J9HKfXDhCqfCDrW5n5hCadh9jY3JN8N2StMhYkukeZfhdT3jyPLL1E6rbPgqxY87VSEcXG6Mat7BBTJCYRXDoue",
  "key24": "jbfkvCyy7Eogsf17a94BgnGPswiWDCVx6VynJvfkg1BdHhX3FsbrvSK8ahbtRHfa6VVC7DiyCBEEdxhiQwPv8hP",
  "key25": "43CuohksKE9txCidCV1pkYTQHARHEKU7UGH658TJuGppSHoJkuWh2ge46JiLhBtoLa5229c5B37BAhNBUBoUYFxk",
  "key26": "2eQD5omtyqpR1XGDh4myPnSyn8iVZc2LVKrTusE3WyoGLkdkQj1xAeCc3uMAswy1mwY7YjSBu3SGG4CMSV2x4KQp",
  "key27": "2WioJBnZeaiKbc6P2rUNvvBM8yiw9ceB3wxM5a52WzbLMiN3bdZiVNrEwy89tqWTyr5QVjKkxUuCKFGG5FJVuoK8",
  "key28": "3B2yWU64LLkU5hENHWDbze5NZhkhygHi6742CxncM1VrR1WsY3jDL7iT1nu8sb3BDEoYhDfBcFo6qVTR58ScZtCM",
  "key29": "4bpLF3rvfNDFTmCiw7h7E4ZaSuhKGJFUpRiQk7DwoBitxqwimLzXuG429Rc8onyiYNWZFBPZYGYfV3bGmqXMECeB",
  "key30": "2dHcuy77JERnGqpfaBa76ZGrsAJBivcK7EG2o2C7CNCQkYjEgk6TdHfCcaBobLWNZBtPP4Ce2kxKgEyKgbZw1Nyy",
  "key31": "3SjjYxKth7Ppi1sWKYF58svTL43uY8uxBrHgjnrc6P6Kvb2yLNCHAz4ZobLWxoWErD1rq6R2xQRjJ7takQKmpQnX",
  "key32": "18BcftCh8iCHhimWwbCipuhvQUN8ghit7eANqLWiBbqW6jmP9ZNGPPHk7HWG9vwo6qAx72umiM17hKohQkcEDiF",
  "key33": "2es1RrGDny8M3WgPzr6MPer3fEST4D9JbQxMB17iXPEpuCawHE471YHChpgDWTz6YAAZJXRSh1RyS7CEQH2YNGFR",
  "key34": "Xqk5zKtBnFVW7ufw2o2H4woAy2xhDsi9i7fqQLfpEijnCzRMDVAmfmQzowu4RZvgCWRKnt8pvz8z4SRsFGVDj2W",
  "key35": "3A5B1hPudqqnQo3fLTxKvZgmWBHAakoCHjTLPKR2vrymMaVY3nJp2QwZnYKTU6GFd11HLzYDHaEuyXXH81t9WMGc",
  "key36": "2mWPL8T5pPaYvYdAFq6pTnvwLSJXT1CH7cYppYL2tukjoXS5Nz4VPsUrrdb2NJZxQVCF373ED7nQaTG393vyVBaA",
  "key37": "2Q7ehCeviGaYd3yvj7BifpzH9N2A7NLQ2PjpZz9TzfjtXNPx7azLcpF5KCkyuEo6SyK6pAze8zR3sVdTDZVC1YAJ",
  "key38": "2Q2Kk9Ft6iA3j4AwzkKkHmUcHZYFJhCmqstvjMdbM45kcV88tFVQRa5hNUW17zdRc4Evi47uEX5rQ3XBE2veMzM4",
  "key39": "S4UtbEvepw8LDbfEFWDJCauyX49eggW4HrYsfeuCnFm7bNRT9qJHVYc2JmjVMtCQFnSHe6gPUcG2iRAFLC5AACW",
  "key40": "3vqY9pgR2Xvhp2n3AtWLtjyhmZXEq9KtCumJzPj31GR5WMrJNsdJ5oKcV9cTHmJ8bAQkSJfgG5TMVXyzNLbCyk63",
  "key41": "4QWG8GM8PYajAoKLcE71H1wefNySk1GrzYjbjP4ihMbqMT5it26Dnx6dbTxf2CzGXGMBVqeoQiWnQNUisRi8vFzJ",
  "key42": "sM8zqPwKQSUaRcNjDR6NjdxpTC2x19nHoky6se3xh14h5dB73LGhqTedvTRoLTCdMdGsSzmgUBFopLgfr6vtZo7"
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
