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
    "Wpnw1aCBxwgVLo937SqY8TfQ23FQJi6B8Sp43MrztcH15n3sNruaFvjcihTky43oAPfvusjfVLu6Va5AeN3VroS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xyUo8HGzPZD6nLTqMY9qGZiDjrWSW4QHndK1x98rFCvorUkx5ABG2DynycCfTP9VJn9wiKHpZrnBmcfr8fZuW1Q",
  "key1": "5AhfAbbmyxPezC5XnsY7DFDzGgvqH4uyqMRQNM1aZrwnBycXgth84egAGU6AKPKJjtfvTgrpqajUVbEbSwP95ssr",
  "key2": "26Hvu19AcZRBMpM5NEDBXVZ3fxts1TM48oALbv7pFk869BoZEYtJncZZGPRRZEkyk2F7sbcttyQD2Pmntwb62Ttm",
  "key3": "5dqXmeuQGvWG2AFHeF34WPJNAnqXpuZfs6io9NTSrg2JLZ8PkZGyAu7QkKwmHRcj18hhFHo2e1wVyfUK6b5t8mQ9",
  "key4": "2B5btyTQiFnAZ3LQZCR2hQ9RS7sLCvUwL8nPAcBJKyBrzoRbHpeea9DK7rzJ31w3yDsAtBSqYn7ccZLFMeZRpiAW",
  "key5": "3dMv2ZQxFpo6wmFGiKF3U6VRNd4UNvs6ZcmXWJKu2XGzExrmoNx5rGKSkZJw7WUCcHYfJTJqbVnkqTkXhB5xHHMU",
  "key6": "5v1rbDyjGTqzbJu8zeXfWT1QxKd4anbhJzwDnnGe9ARhpTMbGhu9kLMyHRuvqy79Lni5fibgXN1AEdREFHPVWb2t",
  "key7": "5mGNHyFM9YNfsPLvvu7xavikhCtFab2Fz7JaWNCrsy5KoJukBnsbcMBzkRXVkaoyw8NS5BR5YXHWs5my7n1Hgk1s",
  "key8": "5gMmPzfsnD6xico4aovRThiQhw8UMiBBNYbHvbyNzJwPwebWkZaFp5LhjBFtrCthTJ8dATrh2Ltu7vFnPSUEgBf5",
  "key9": "337EbsU2BJhhXXqnywLvEDuWNuFScREggkWQS2qq9wna4ZaZ7NSi1R2fdoG3J6gpFXLk42t3Xz9BZ93idHeMBpHC",
  "key10": "4TxhmL6ykNjE8XYF1Tivyo4E7YeG2H1UEeDncCHMffPV98awPNsxnEVmQ1GStxE6pEb3NYA5FueriLbkF2eqQYNQ",
  "key11": "35e64ueXC7wwqCE5jxTiykA7Aos1uxZ54TYamt2sAYbs7VunW8W8kvhtFMZkoUTogypJeujqqZub54zJgCoAteVV",
  "key12": "5rpWJN141XTcFqLzTbmVPzGbhQHjAQyCLFk2dFgEJCdoduPdKcUqmi574XrcHkQ3XA7VLM87fXi8qu9pfV5DdkeB",
  "key13": "XsVoupTVQ6VLNATLBwwCEv7YcofyvTfL3QEq99WsVa72tgMXuxmg2KDv4pYrnzGWYCVgCWUoZyHeomF8itQ91jB",
  "key14": "4kxBbesdYeiyZ6BADZgvrQ2h4YAfmcbcCX5gmWnwm4KGVgRgkrQSuJWxb3sdQvqS1Rmn7Un8EidjHJeNkFfDBQDn",
  "key15": "1VXFG9dse4qTA9pwhyF1r9WgiaeW1UbzWhGWCJDofLB98CiQkuo55xThncxXVKFhtaaCo8JZekHQaxuqK7qWdfv",
  "key16": "S1kRFUzTa6JeMcFqNNdZp4dMm1mixtx1VCju1iLxZiKW7W2R8hCNSC7WwQs17xMFVzJ4puc1ttDJXxjJSy8aS8Y",
  "key17": "2P6uKqoKv5gzLK3U26LLSTNue7T3LtzfzeVp7tbdxcw3bhK4hho2rdmZCtUEUvuKtgFwuAfNSx3QPZQ9jhvxwK6s",
  "key18": "3zZxAhnpXRvcF1pgsWxrpcXghFAJoDvRpKf5LBVgjfx66hRJ1hRWAmKmwdviF7byvkMxgAA4P62p92u5iR2Y85j3",
  "key19": "3NrMuVqKAhrbhB32jApzv5kuPNxAgUts7YJjvwKvPnHRZivwSveuZv1v5dkFiDyjRaKPXKmtVry9LaD9pVch81hQ",
  "key20": "63pnaPGy2nvsQCCW9F5CQqBEnkZtuzefBcxQ8viK3wTppsUGDLY3SxskQdpSkvvhoLYdWUHbExhawrK9xXGc1EvU",
  "key21": "2cAXnXeirbq5zayB2VKjQiUs5AT8ap67uR8KHP6npZTTm84vXrRXkJZwbUoPphHU4VEFsU7NvX9YzJarGh5wM8Zc",
  "key22": "5qN5asix33Ubs3NCzEpREySoePPwNdai3p629DMKSfoiRD3eoQVGw7FwecqfyyGkiFGSCAySTRWghpRRErJukB6U",
  "key23": "fUEVxrLCxkQbu8sxMCZPiJgG7R8mdLDmfyTocHTnGjTC6DSeoUNuDM8m93WsvKvU9g3FDS3XvLyAeiDJFE2R3eb",
  "key24": "35xrhu2BSDgduMfQ5RzzEh2YVHhStV4GZQ4THjihdpcNCyu7xd8gMrAzbJPnr5Emc3UE1yWtepemH6W6sPkk8NoT",
  "key25": "32esGTDiiCaMnL5BGmgMHv2eUAi15C7uwhoYkM1ggqeY6TXrjKeyyGNbZMTi2WP8PA45KntcHTu464TPXS3xzjJk",
  "key26": "2Lmy8vbzS73wXa22T43Ra7kZ6ArDBNFjvEzxqAbrkpuM1ys8mtQp2gLQ7zMNZbMfHzMVCoSsycGoUGrsRpR2Mtk9",
  "key27": "5VBNHzj2QYMwuVXeFEBF3X2csc6cpQ5pNkqhfJ9XJF8aoBTeZr7TL3UZgaFUGyJrwPYYtKE2rRDxfypNV5PtAvvb",
  "key28": "guzCLTu2YvmN32hAspxZVCaDJTyFaHmoFPbJcrfdnGmb92FS5zQqb8qihA8Yu3AEBmQ65XguHRBNqFEM3bNTXe7",
  "key29": "4oviHiwNkmVNEJjFYriKSKn6jnyKtHUxZ1VTFyHr58XAUkr5ryB64Ah5iK9j3ufwA2kVTfxX8vgstNuu3ZWwGni",
  "key30": "4S69QwnPgceMGr4UXA9WZn287koAfMYaaqK1Xkk65KVUeHxSX9TYLjKYrPK7xQUWmRD1W4FKB3wY8C7xZijNdYLA",
  "key31": "2pr3y1NzqzBh7hnRMfDZMRtnb9CpTUZro4DySq2TFrN3mLRgH9e2QEaRQJTdQWi6JGWRe1nkhFWHpxfkgWcuv6tM",
  "key32": "4PiJ3RM3NEDdMYQVhivf7JS34Q3MHMnb3iUkXMb58FvHodEq66Vv1WnYFumUwr3wcBGQkX45rcMDzs1QnsMa81Jw",
  "key33": "3iUFt1axbqZDn9EMCM6qkjBaRhJR46tefYMF35yjxXbKKkDqr4J5VFoAJo8a7U7GA2E6FqwQTqFVgFJBVTqGsKF6",
  "key34": "458ubdzwtrr8qWPigqBhxLoFQRrhc834TiQ657vE6rpiqVyMFE5EVeEXbvumGwrcEgojfuKaw5rDyWRL6qLGU68q",
  "key35": "4AnYbHZgR9Rrpiu2NeAVq56uPGaeGiY7KoxgvD3qDyehdzspMd5s8RLiL9eAZkKdrVNerdxkg5FyBV6btTULCTKU",
  "key36": "5BrUEvQkh7YzpH6Y6JMgcvd3LQ1zzuM8rDCEbE8Pz1ACck19t2WqYAULKM1quVXqryH7sqBUmzfHSitP6gfP1VNe",
  "key37": "4jZb5KjnMotQ9uvibSerfeEtNuCPRZDmmvEeBspamt34hem1Zn4t5JMNH6EbyucJNmjmGiiSKxmwEwSVWcMvcFHA",
  "key38": "2PiveU9cYwzex7JCTNKp5GN5MQZSMpVxwDteutDP2RJHGkSbpnJZA8RWVwKPrYZxWmHbAopARAdfQWjupGhoVkqf",
  "key39": "4y5wzzch5TxViZwBbtQoGaCvpxpszNQmL3iU98NPMiFSsL2Jx2SC7rJnop3cSeihwRVY5ZBRjsBSjZ7J7A3VLBRV"
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
