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
    "3QL9FJd44bkeuMdCh1nqVrrYhC6gfryFv2nV4AXpacVRNy5YKza8PCnVH9XEsSLZmU5w3xHKZYEHiqkkDqCvXQZv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vS2iv2xB5DGB99Vd5v9dP3V8XY7pR41c6Ko8Gbk1GAzHxXYbyFwen77cnUCTgiBfEP154ax1MmtcwpJsqde55DE",
  "key1": "9vivmrYmaD8raFQzJxU2gZJN6y4zwygmNPeFesx9haM2AHvM59NG9M3M58fCPs6S5xWLrms7v4sahUu9hgCFZRa",
  "key2": "nFuCmJk56C5HLXXuEjSSnrrtPWjjuw9rcEPDyuJFSVQh4k98YW5gheSxTBSVnTGkeRgcWLASHQEMg9akGMbkvmc",
  "key3": "5RcSVU4JmGvjMNaPfFp2QP9aBLhBAaJeQwbea4W4xfMoi3EHHwz7AKUdmP1ebjqJ1ZLvoD4fFm4Er4SaQ13eV1RJ",
  "key4": "4kLHvANNLRs3w2bwsrcL1Ty7Fon1F4Wx8A9SA7npvWcbV4noJbDJgqtAgBNXPDygnMyfdpKocywuQ7JeYyb1t8sb",
  "key5": "4nLkFsn9sD4uSfwhqqnYZG1dHRyp447KwmHQETqPrXtifnwoB9GNRnGGHKjkdpb9y3U13HZoinoY9cf8nXkYnTEe",
  "key6": "3NpwN7poHVrSGKS5zojZbkxyjJbxdLM5r6vT2Vn5GoReTBKSS4NSZovauBExao4UtyJLNoeAiXKzAW5pNZ7mY9xf",
  "key7": "rtdAJsYpK4DVKnMEkFa3uZLYWK8WcTZwWJURzbaFnaaWeh9jjBBQPni1XJa1MQcnY7b2QBTKZUGK138ravavJaL",
  "key8": "5QrFAWKkFc3d3SmtCURgw9Vr5njPnxphmxAKoS8pCs6Bh7uRFmffCXMMAq7QrRPPMqG4BaixT5mtTm2VH3GvJJSB",
  "key9": "5mHinE46vFBagSVhRZRTQsg9xKQKY2rt6e6L9vxExMz72F8bGCefbGuDXCrahq7DCcsxHZ1XH7VRKpLvzAyhk48Q",
  "key10": "5nV9P1SVguoCZqccfMDySZURFWb532AQTuxkoY3BJKMEd5q7PhMncttLGDzPkWGkFwMz4QAHuCS6Ei8ZYoBZpGR2",
  "key11": "2RLZHvUSf4w4riXYLBaHG5r6SavmRBC5RBYq9bcAFhkn9K84z2U42k21WyUbwXH7knbNwdG8qAcEU6pmqBhVyGqU",
  "key12": "5iXAWuLHwy3HxnSFrAe4xV5zmxFSpp3ARqQAboFbTNts6M6TdJd2PGDxTkGEMhF7rZxfwCwnMAj9UL9Mk1xiCfY9",
  "key13": "2ngNpLFnZBfE4HtfNGp9XebpsYZQR7mk5A7EKhsiyHHkauYP7f4bKs2n1GcToG5dVpmEdabXX1WQNyXFLf5fGRkv",
  "key14": "5RKzavWoBJwJ4M4QDbQRNqvjFPgxpfGg1QjseSSYF2svcbhZYz7BVtCRUdVJ3KKuNzKVR8JNjfyjbccZys9EU8jE",
  "key15": "5Ued1zGnZGjufeJ2XrYA2cpLQve9fUBck2GihwCFTqYLcXzK7cpoWCUeqjMsjwMdBQ7HXAShDqHhrcRKqy5vP4Q6",
  "key16": "4tg7sqAVu2Xqywc73xjUtnHaDNnD7eDNTGwhxXzLvV55LwNLxD8hGkc1ptu1LQkKukXNEZrjmvBTWi4BchM96Z7b",
  "key17": "5tSP71xNaWUmHvGgCzcT77Ht5FqRmtS7P153ZtitXpSayZmSKmMZUfaahNGV7inczmnwTkNnzLx5LySfrV5RzPTS",
  "key18": "egv6ASn22Cr4kbJnDEGkvyxLv5xRnro7nS1w1HhZeBfFUvfFRBqCEmo4BXQSoazwSvXhNf4nuHgdcabVyQGnzTW",
  "key19": "4xEp7XdnfCi1g34xZ5p82mc8munfQPB9FMAeb5MgdBcE48CAdFczArWCHwMa8H7DZ8WzXtM7WNK4VQCtbQ2VTN2H",
  "key20": "5FwgoVTc6ocCNz55Gi5DpjjSCCFpjX7FQJt7iwvps6MSQnmetBPmHta21dAApjyViKfP3pGzV3SMXM6iQtRSnMDt",
  "key21": "2E78PpEPba9c5tEBvo5GW6u99G3SzhwRP2GcJizy1mR6EAyKFya4o3LEZKmbJsxrQUuyZZgqJBVJF435HAiKSeLE",
  "key22": "bx3Lm7Uhs1pXpz1XHWq1KEyNu9cJ4afSccc63RwcprwV6a1KYiGGWEvFAtGUUtkvHUxWKCN2f6eb7YyaL5GJoLh",
  "key23": "31KDLUt2W7DiMfEzC3Y3JQcCCZtFHH5VstKd3MmGesbte2egh33QY2E1v5aAdEz9GMpkKBGVUPFytB4L57CXmRfw",
  "key24": "4uhPTWrsKMUw9PDf9DnQQYqmtKi62vWfWKvtegfg8zQp4SiZdghPbuW9BmTLTDtH6tLVi9f5mMC5EgEk4waTGRQh",
  "key25": "4Nz8dTVK7aHQj2dVpHrSesuMii8ZEyCg88AautXpXaduq8t7Qn8gWziPbUVf7Ez1heJScQSdNAhACo13usx3NEom",
  "key26": "2yAouiyhynhQeSLJartuiEUF1mRHzxG3aBAhpLPJFziHRPMMfNgTPK88mPCknXPWZKkYrKMLwisj4Cvb5fhgF5E5",
  "key27": "5uPe9a4qnrPt27onyxAJ23E8akNdz6TJWmm3MKDFvRy5JDyiKjpdttqsP4X9WKHMx2HaMe695g5XcDLhGD6JfhCm",
  "key28": "4hji1mVsJEr4SvfqVTeLgMiUb6D3aXnTV17sebEgRrBbUQCjvw9FdRVuwjAmrkdTgTYnYGgDYPD174LYvw5EbJeJ",
  "key29": "XgSTLgaXksaiX2E9qiWf2foEjvLEVatUT9YUP8vwSBzB41Lt94o17RTLqyv8X7mb6dN9YJMqP5fXRmZGTtryWLy",
  "key30": "DM2YsEvGoCcQUezjAbjwCkCbbtFRVdf4T7gfRCF1rUzKYM8C75eCcz5eg8kU5upckSguWCjy1hRxDWUdweiZo5U",
  "key31": "5uXy6eQijtbPoWoZ1v7ubtbmtkvpLAMKi3VAbhjhSiZ4ddcet7q2DAeodH6Q4QZFkvPsTD7FwkLnJqzabKWvjZoB",
  "key32": "5CJUArukXdRNqmApbFWNb5ncwmXLBub3jvDAFXGvSAdsLkyPzStSHrj62TPLKUt8vprhvPbGJCaAVGRACwusNe12",
  "key33": "5mei2Mo2uyN4BjQb9iBpziaQh5cjNc3QX2M3n2WHVagcNnGNEwUWGAKbKRLxF2z9spNpGLDtk8dhtQhpWbv1PU6H",
  "key34": "2tgZRVxmL86iQ9KXGudcT3Q4aYpWjYgCepWcgmQgM8F3Ucg7x67w3PGr2mvDwmKwczFM136TJ3ZzaMS74fgHh8HM",
  "key35": "3FEkSWLczNiUivi5Sr7kdYv5n84ok9xKAK5st53Y3bVT7ReuC6NT42x6EX9HJ5BE5NA7jtisCNXM4rUa5cTYobjp",
  "key36": "HFyGBF8YwArNJVT5qudDF5jXUp4aH3GfaTxxTtVJbULQY6VKrvpnsDPT9k9MQ45evcs4SWXqj1Ko4FVtnrKdmVd",
  "key37": "41v2y53Dk61NHadNYyzKMso98JHWDRDyeD589vWJzGP1YXnjWT2edPKERk3UjKJyYXbBbHamc2F7RHemdBsimncE",
  "key38": "4ZHnNDxQPz88EcYnPg1uo8rAK5PDGNqnVdcAFoNgDjdgkDcvYiW3EpmwnSDjgHAtUWTtCw7RhXPRhRvoU8Ja6KgN",
  "key39": "2wD9buD2g34k4MiYRvjcrEuRXqRzpAgEfCQ4whbe6ZvtLwT1ZqXSVwm6EgfTDJc5eXyAWDiMgTzwLY2qYM8RhnfP",
  "key40": "Dr8awyMYVYhzziZsqGcjpGyUAv7mErMMbvdS2ndJkEDyw6P37ZE9767ZroroE35wLuzQceSvWPTHGU22DvXupJX",
  "key41": "z15siPmsPDpuVqunXPshGqXuGeeFjEMzqBvwoxcbV46gdtkCPYQTvVkVhdDrmZcD6sduwzFVtbnP8HRGeJY5BLu",
  "key42": "5e7uCd75jyk2neHwykTZnVjt2L6BmYGyE53YhUcXgyjHKKHCZEQNEkMNBxw8qmDhGWTZspkoNsz4tN4YKi7wKD1g",
  "key43": "2ZJuhYFSq6CfZK8sjWUiZDMoehhdgL1K9WMT7kFtoukCSX8FjqahcQ3ZfDsRyZVunzeTebGgUvr7ixA1XrMdBt5c",
  "key44": "2HX2jkrwhvYFEhtdpGzNgdB39hduju5BsBQ4eqHLKXU5kbuQ4RtcXs77sW5uHBUZynzUoxQMNmDFr8spqmkEvwrT"
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
