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
    "4xsmZq9dwvK7hWCekBeQ93A6Tqeo99cZT4sTqSqFDscnPMwCXehjAxKRBvFNHHmxgsCzMbfuc1AVHAwJMr5r2Bqc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DVXrXXn222rQGTjRUxFYYpt12L1jdytm3WBxuNnQ4tE6Em5ZagKHoQfhqDqutiFyRMs6ATT61TQp6Po3d6kNq9D",
  "key1": "4L22xWYWQPZGUF6LFGN6HrcW2nr6yxYjbWZ1vEPgT5SWz8af8yJMQxhCfp5iBq3yBVPNuQ4w36ziVGdKMLQH8kHL",
  "key2": "R3w3fwjuEZGHxMdSpajhiBBFTWDrPF1meoqowUuAGxVyfBVsvWYpaM74gGDVpUHhDvRUF6CXbneAiLt1yFRu338",
  "key3": "535zVq5GDhu53ecZWmAtfoLJbFGuSYj7cS1c8NhbFwid1ehp39m1RzitMdcm8PB32AiyWXJFx317acFx5zVCqi5H",
  "key4": "4JJtq8rbvpx6wdn4z6QzM2y7z5SnFMe1i7DdCrdpG7cPY5ed6LE1b3x4VpsaceeHmPfhHsWXUsF9JFhPX2HTm7Go",
  "key5": "YuT5J2NfqqA3bSi5tuxSKdsNdyFQtoHrHpMXH8hea2T7uyQYY9ngNfLE7ZQJxyTjvYnMxRAeqiLVmLFPdjCZ3mJ",
  "key6": "3HdUi2zibS5bzxHPuCKpGexoon5adXkvryBJbx6WqS6djTRFcQx9Mdiyo8fd6pJ7QQuz4K21oyk3EA7GdoDUPzLk",
  "key7": "2HY96oSNJQGaEgjb8j57NgiU1DBbA4JkrcUBA9tUK3XurPBGqbyfPq8Z7bNNg9yZ4k4cUdR1nFPq5RwAjdAE6izy",
  "key8": "SqvKQNXZ4R8v7wbk3AGQGbbyerWKk5oZ5PmjUX7ziFQP1spXxcyYNgPds4AeJdeZo612sNWC6G7mPmZroFLNg5N",
  "key9": "4EH7oxkWzyrHnMYfya1yUAYjECnnsKMNX5ZXWtvBxR9Zoo5epsZ77CYsrgT5iNEiUccu3BwP2Xd3NQpDisoCfPjG",
  "key10": "hnGjqdcfrKPhrcksUy5hVpz4nyqCguo97hpJ9ZMMfWy1DAjm5BV7VjQQypS3jAid7pkkKui6htjKseo6Y3XL7fa",
  "key11": "4kxjRZQJTUZt4A3vviNNH2pNpnNSvbE3TfV5Sc36msPtPg73JsxAendiLiBGMnTeUZT51SvxMuNXkNVjxVSdGs2y",
  "key12": "5UA7u5wzvqwWLA4Fjsg1y6HBJhrqbpvrNUBrkNTbDWefUCwQHg91YQwVts9AP2BAHubup6hQx3zrcceRgL4nnZic",
  "key13": "43sXy6HhNNuG5KotTiUdgriu5Kkzp6WePcYmbF9khMoLjSbbddaM6YQYt2eCQetEwKHeT2sbm5ZxmAPbDYhSf5Ry",
  "key14": "4rcrUQ3dnNcSGcMnbqEb8VzXt3hA6eP1JQvLBeLF5ndwLPAMFWpxa8FJCEMhw9ngKiUVGJFXjkPYAWc7zzG2oREG",
  "key15": "2h3Qr4kW9oo5J2uuvg4YUUvrZaXQADnmScGXRhAH7UNPEjgrhkim4aZt8orHirXRrAKVv8pkQ999gX5wNnZkiCFi",
  "key16": "3edEqkhQ1aGXou1d7mm5ZuJJrd3hW7MvJzVJgpHosHScwqwTdeyxpfZ7d3DvmXch8nikgoq1b6eeqNEFFt2e5Zps",
  "key17": "4DcRBorGUcCar5ZrcE42Vdxx3h1AazpWE7b2H7c5GR1eRenCMNAJwaEHUeoZhgPu4MyDe1nR79CSgcEfYLKMtMqv",
  "key18": "395D3K2aV8axd1YGrzpkw8NsySMq473MWPGmRUGXi9TePTGvUhN2Eygz1aGuHyDky3Wy51859fQ9hth9atC4Eh2E",
  "key19": "5ALSnwQCVooCz3mEofT4QeMXEL9aupMqMzjQLz5yZw8RaWX7mCovCnR8NKPSJAy3Pihv8fZWouYnKEnKS6HrnexT",
  "key20": "2msihos5uVkHBokgUTXD9tvRHP8fVnt4pzsUmr6G2z6UYNxaUMCspeKthZ5VPbmKpigfmD5WxUZsmomfjfxsY5uX",
  "key21": "5yQwxjf3pWcwgqYynHDt4hC3ZiEQqYkdE1XZUcCopcFnobMcREDZfiQihr5xcqeHqzHj1WtDXwYgsxWUDJPkbp6e",
  "key22": "2RjC1eVSD8VNZSCA6ADWL36g9jJKT5gBdLztuJKfJTVQxgY3UjoxBMC2ecyvoFwM3VN8wVBHJsVgpdA7zSNxQHNE",
  "key23": "2K93yrDp2MUV66NEwoS4QN6pqJE63DbZBSMZCduzwVEpJjxttsf37ReVxywpzr8ThPh7DiDamiJJQGDuiMPW7qx4",
  "key24": "5ok3JYLYUvuDX47FXp4c9tL58aUuSo67SVQGJ3o4DPYR1iNvZ7PnmfrkU89mRvuHbPXvCiEKEZXwLuMGR6yZ8aVG",
  "key25": "5U7gjqgHyiEsMUWE3TeAUgfkMenWUb7nzsBnSx5Hn4iW2ma39TbFR86XEiSkW9zHTuvZv7ZQAEC9pSGorHYJH2Xx",
  "key26": "5WhUqmeCTexRti6qF85Ud4ffxFiDDwJHLaZhtjKkyafhsmXYvLKgg4BB8QHrfWCz5ebmsoA8FNAvvrhpbEFNDxrf",
  "key27": "3kR1fLdBUz3xZSD1kjYrVmBDNrn5wsiDSv4H5u9RiYgAc8PB2JuuTx6cNEcetmFLshA3sskh3xUEK7YPeBtcBRKW",
  "key28": "3a1oFkJYnCCnSn9hUEyf8opEMy1udiLpGnH4Jadt3uUTTjpAU2UmyFg365zhsN5UmzkmbY5jWeUP67hQ2mxuGYu7",
  "key29": "3kciS21nHpXZwMqazMCAdc7VNDCPRzgPdaob51RgdRNvnPTKfkkXR3z4aW4cp5rdKEaBbbXUYPxVsf9fojcyBsjF",
  "key30": "xdac5defPntHkyTyQtLFc6bV2eTLH18DRjxNkUXLE5R16NyKYhyFW21AMDPPjDNZ2jym7WmwifcsMWXvRKyjG6w",
  "key31": "dEDs7mpzHFKZwqruhgSUjWz4GedAtnAAXp8cxiw5V8DPyiP9vxST5YSgDkyfunuCoJZXvjf9ZzVTHmfoqKf5Sd5",
  "key32": "UsJPnfaQEbygG3EckGr1gicz8yaAiYL6dXsUe9bUPcM4tfouFPC91YH4YoxNr41L1M1QZi3E33nV8JmPT1aDQFz",
  "key33": "5tqTDEYxczQQFmp9JHpNjo468TmFiGspo4tBCbo22KuEcdPzNXMAkukVmnrhsWds5Q1JsvAtx7AtHfc6oXzmjoCz",
  "key34": "5vGcnWR6eEvP7xWrYA7VbsGiEvw6PotnzLLap8a9ni3tc6WT6r1TBC3mXTvjmMU7DWuWjDTMbvwc5noCiWLpo55q",
  "key35": "3hGmFuuzMWsWDzjQHUWFqEMiR7Dd2rkAhvcz8HqwowaqwdszvjHAetVgmXzJUYiTG3biCAfY57mx3CNQsYqssyFq",
  "key36": "2JVL7Xkt1bpzwam8er8dGQcpkcngcEDUVtWUHckfnbBZ9NLyPdHzyjGYozgTwunmhQiyLP6PBQZH5iK8VLC7bP7C",
  "key37": "5LubG8LFWX39T1yht3wTaikFV6g5ZgXCSk18MbcXi5XyL8yhp1hN3sKAPnPChyfGrek93NQiCAeUdSnvU3TBA97n",
  "key38": "4ox9L71TL6kddWTGXFuw8d9fj3yWJ3ALdF55YFH5yG4HAubnqFz7HcvfZeqvopJ5ryQn7yqVe1dvegScQqQ5PKmd",
  "key39": "5oQv56PaTXVrjeYTmLrkP2h8oy5syrzMWWqVydiX3vEw9gJXbSDFWuttX41qAHWepVAT7MhczSGwpV9GsUCdmwLp",
  "key40": "5P4WhcEt7y7yUyVbLeAxMmg7tHm4YikCafuRyWvMrZwnU4qVaKud5qCn9NEFbNHoA4mpEcU6Hiygfp3Dehkdu87c"
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
