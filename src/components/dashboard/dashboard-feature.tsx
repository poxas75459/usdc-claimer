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
    "2HBuPwoC8ARDPsC7xuXr8xH399vM7RMCvDEbdNWv4S4um2XMxVehJ4oCEnyJXkkyjjS3TmLJMn5dcDwifSLoHZmL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ejxKmpe6LZxscAUYW9TXwKb4wiszk5VNKgXsYEenV1VX32DLq8feFtfNAeaomVPCgaiCSmATYZjkRYBihVWRLKP",
  "key1": "5hDX3g5mT6cMrKB5KLgxchkTami4X6T8Gf1sk4rxb69oEbb75stocD47SjtaLxmxMYqrV7q89uWbgrfZHhLzP2uv",
  "key2": "5QuKEe1mtVgH5wvnpZ8fQ6E4sRDEsyaffdXLzzXxYZVDCdstDbQoC3bVqzAnVR4EnM9TYa3ifndcqXKjGUSLhQVw",
  "key3": "66nE7hFRsVbZhBwv4VKZFM5BHg2oX4dkb8F6WmJHx5yGn3hyrVDSj2686WzFNEXkdpnQxz16PfpwFwx3upWoVhpC",
  "key4": "2rG6KmAfubEJeWyVHX1DMBJn1nkXPzqbpq8nd2kssQ1ZRpXUkmW74GHkpXFDZn5LecKfEyzMFSpMv4c3BnZUHSz8",
  "key5": "4f7ypnAmxbo9U8YBiwMsbNengWiqt1n7JvfUa8GR8vJyYYHzaNnrR9etmDKve6N34PBVAiorrmgLuvvUZGkyj7Qb",
  "key6": "2Q8v2gpDm9BeyH7AFuNAoGfe39FAA1JioUjXPnFj4TvxoscYjTCtaMumCWWp3tvD18d5gn2tASM5iXV4KjJnbdoi",
  "key7": "56UrhmZDpkBWnsCMYjkM5877uC3xqH1hoMFALFhvGM7LJaFNCHzVYwqRMtn6U6NWk3jDvmqpb1KcyGwm7vbs2hLw",
  "key8": "4EkYSuUBdVfkCBk4aEibG2gscoeUECbaqBLgegnVrbjVHwaQLt6n3KpBmrPFNi9DPHj4ECWrWmikay8AvqqUkr5x",
  "key9": "3sYUkktW72peTyMUTexxmN7UiSi4Jac5v6fvtQfwU5yYDCkczuWdk14vEiFoE4NbrZvuiTGCC8PVjqjzVPsBKwrS",
  "key10": "xdE6o8fXzdF5SDubikypEriuhpP7tQA4seQa8s9bgZLKSTz5Dd3de6mLPYVihtp1BcELRBPJQDemvXBsrtL4yEw",
  "key11": "4D9iEr3LCCzdVGJk84hNrrRjqWGCmBk6RJXk5XK5vazWWjfePHSxHVND4n7FERT5PMGo2itUBTqiZeMp3s9DRAsj",
  "key12": "FgBKkGCYHB4oDZ1DNL1FDH9pNtf2c4ArZZ5GtskeGp4HLUjxw931QJKHDfU8irVWEmCRwHDPs9mtfwvnEfUwKpu",
  "key13": "NMzvkygF3AHRk9JTZNiNTe2W34gxxgpeHVdszHALLrbfg9pPDD6HT9Ue7qbLFnac7zukHfxTrBgDxm9PszgyVtw",
  "key14": "2HZcMZ8kZAE6yw3fTbBdM6nX2vfkVkrnysZVUrERqwERQpLgjQ3CM3BHNpXrLSSmy5jSZrmh9iSyjfHmP83YAqqi",
  "key15": "Bid6i98W5VpFLBDvEKqwQuaaALqTJkeqyDaBQW6QXEeAYA4UB1fBntRo1TZ5ZXf78tFa8rvCBjzfzn54ezK1B55",
  "key16": "49pGofVWFPhh5gSRX7kKtiF6Ph2F68ccokKVAC1ahpSm3LTyTKe7RaL95meriiG9RDf6LRzSns2fMoC2YEqnW5yG",
  "key17": "4wuViVDXSUAZrxq19Hzye28ZkDzwPs5Cnmdh959ka9oj5snuDFLydGgF1SUMgMbbUJYFzzpNBR3TXVLhUYjqJ9C6",
  "key18": "jFGbztHKRCX5bZ4stG1RuxicEj2kLEL9do1wTqzuCXo1Bzg9QBsWCeh61GsiMSS2BgS8CHskHBa5UMjbM6iXgqZ",
  "key19": "5FA4pni7RjFvJASTiRkgGsmsNNgJzv7zHXcj9YMMBgmuwnQXH17ZesuNckjD5BVADb2eibZyyR6ZyN7roz2CUA9c",
  "key20": "3wkm3Qi3rjVaYaBEHbBt1GMLae1hPhKg34tEgKEWXQGuiu4fvWidYtGNFa6VEnb4vz4L4eSiPYuAjfJqWnvu71gb",
  "key21": "5p7qcmqpUiSLKQ9DHcKBQViv6U5aNkyJfW1Mnr2fpsM4P1dj9u4mjwbRYkgA76VaR7MCha6Y37a2e9BavpZkiuPS",
  "key22": "3JqeKjtstDbUizMMaoDPJaK6c2T3ydoj3KHKi6c6YdaMFzwB1bgzHLKWLVowSeefF8xU452XGCScXvuy8DeZxLf7",
  "key23": "4UEQzWvD4dpyk9EZoDC8zBKDrhKUUVir2vq8sQ1z281gWkofxLc4EZni7ERixmUWkV8qbS8Ubbfm2e9B9zfZGoku",
  "key24": "3wETLuHFPmHa8XrkEzEPRmR9XxhBrBaP4XA3YoGobjhBCpVEpEuhb4wzmAWiYd9uco2ja9RcxfAS3X9e2WkRWQpW",
  "key25": "39efa7oKp9QVHBWcRaRDjn6Anr5fagWtG3rELXBmrfb1k7iZjLmdJDeskNQ9zzSFNKmYkNkvcEp2JDgiKd9jMPnN",
  "key26": "4NA9HL4rGxDUcvAF9R8tRz9VVAhbbQtD2b2GJdkamXYUvr5GAtkaBBbUU8yE34CPnDitKfFaaGvKGyKpj3Qx64cV",
  "key27": "5ugjmP6hJKS68C4qgcsQ5ZMCMjdHc2pxW45AqSdeoVSqstE3k7aXxjBTtm31mX8QdC3B6jNsHDriGhV5jD6w4QdW",
  "key28": "2PxaFDh9F5c9UUaW4uYmrHWMakwPcGK8Nyni5iVDXgHRPz1bs4aPmwEQ5y6eVgzDmEQ21PTPdpoxJbWzPPP3C7LJ",
  "key29": "5wcmgvb6wCgiBpSrufwLLRAghgEpeWq4zLnMZjwriDuQLFNmMtUJitjXvkpRRBG5BSPX4M4JWitz3K8vuTSL3WFq",
  "key30": "qidWu9qiUWoCeSpKVZWKGid4jsMBrxik9epDtb3JXeAdeobPMATRQxDrNDHM1MYhTCvpUjEMrzm9pfqn9ZuniLE",
  "key31": "5pK1cCGPBBad52NcaqtqMrL3ih229PbSwp2gjtN7F9UaJANfMD3ZzR2vZ932aNHZj5mphsrtXSYgkkhtExNFztZd",
  "key32": "3y2oRtbrpDjyq6Wio466MXr2gsXc2DGoMpoUcCuAHgabCZ8NwX6uBNK5KXmoqoqt3KsBrn5rBySboC22uGP1gK6H"
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
