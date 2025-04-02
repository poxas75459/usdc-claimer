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
    "4VaRBCB5adaJPwLTF73YxXT47wGM35GJcm3ECtbYDZUXgYhpuqu59TxjVbXJXR42bzf2YUDgg7218xUPZxDJkxYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rGXvq8MGdeTCiLpkXKT6xqTXopB7n8TFVurjuhW8nvgi2zg4a37sd8tGNdv3g3sZUfbBUAQkt3J9NxzH8Ced6Q5",
  "key1": "4Fgzn2nirx4V5QKr3q6V42Fn2MMpd5XCK3ZVBBWRwcAXvQTXYWgHmd9PazSZQko86zDkdsKy5q4oFckQuuJm7GCr",
  "key2": "57VQanJiJgUxZfWqTgQqN5wcxGmJaQPTBVJacXb6wEoBu1LBBr1a6XKMbdJc6vabuEXardXAu82ZzKvSb5LGgwJg",
  "key3": "4HKML4Yv7uCmtqY37B6JuDrLLmSk24G6qhSERwLamCHJiRgw8Kd9Ewf7CTBaqxHHoWa6QpiELKP5P6yYzVx3v22W",
  "key4": "2dzqG446MbQoH5Z5nUaL2KuncKXvbNrYp1V6fyV8YJhmowArRzmw95KFqKTjhUriZATSWWkrr5xMpNqH4BgqcmFE",
  "key5": "5msv2u1H34jBaWpjgEn56vdzWYrndZwWe7SDyu85E2rVxiLxCiHnEazUe3RDT3KyGd97ergwEGFkKgUJyTtuAMos",
  "key6": "4EXgTtzx4HaA4K5Bebi43yFdMi36V4doCBqyZ6qQTLtLsBFeXyXJ4D5Tn93FPKxoAzeGxrjgozriFfY128LJYiCN",
  "key7": "51cg8hFQmscjjZiThXVBWboUCg1vuT8WBjdbn14bqeYodAanXAUxQ5sBdfpHVzDnSxfh13TVKTnJaF6vVLkUXJUd",
  "key8": "4AYtCsdhRS1xxdoYvfv5yU5Jd1f2WpxS4KjpbUVMhsiksTAnfSa4hB8JQw26CrKVYWS922M2SrBqJkQo2U2NTKPs",
  "key9": "5ZgFxCBCQRqhDeeDc7VLXWpkj2koFBGQtK3XM6eL9vYzFJnyHrCKEZhu7nEWp6HRfehXEASHrM7Fy3SKvipYAq7",
  "key10": "3btLq1eTL211w6nBh5qx7VW35RMiLMQ9qzDZ92uWoWXZM5kUPZ1AL2piVh9eK12DXAV3MZ9ujtc1g4P5UVug3kjm",
  "key11": "q794B99cRGdcJxgS4N94wQ68DQWfkq3WKoEWcurdpbcPtW57hugRasNCRRCkr5F2TgRdymxt2gj9W5c7UckQZPL",
  "key12": "6aqWJeEgpX1uy1yGFCSJdHQ3Wj3jNi8shsrqCui6skV13Hyf2yBnD1Ud5PKYr5AyW6PzLWNbZisy3Vdov53jhcs",
  "key13": "23qKBM1WFPooGDxknaEtLvS9mTU7Gxbf94Gp4AYCwq8H5Q5L8hEfTQ291XwkCFyF7eMCnC2RAZSAN37fRT7xuMS2",
  "key14": "41pvQHzn34DrJBNqCnmaZAGrWYPgqYAkDLV1k9219SCc9ZARd3MYLP3UxdYHgMPMJcoKyYViVRs76E4dSvGVK14s",
  "key15": "2ADwX5bBjSiQhA6pgvw3NWUP5sjh8C8KQNH2RChLVchmyREwLidAGNHqApoujSKtt6ZXxAwkmmnMaxmDcv2eFThq",
  "key16": "2fV5mzPMJgmHC93p8tMmFHEVXARtUBojACMaQNkLUgB5dL3xHy451L1xvg1M9tuJCGhFxS9kKcVd8ENPVLzirGK9",
  "key17": "51La5WGFnE4isM1uAszUBtMs7gbjGrgLfCFp6u4kH7xHMefp83uETHGin7SzK7dhpFDEL3uohcGmRHZLAVaKvMRc",
  "key18": "38JY8FY9tUcHV4wKwHdProuovJfAn9UCaqLPXHZq6JUEiTxC1wXfHtq4wVU1eFW2wctxcirZZg5CHR412K57Dnzy",
  "key19": "3AaK4oAMVFFTd8RwPaF1bgYdT15bG9A9eS3ubPmt9SyJn3XQroKtwH4JLyBNngjieEiaeA6VnHtR31Y9xAUt7Yhb",
  "key20": "2DDwC5zJo15brkfUiQapNnjjB4NA8sC3L7HBG8JRnrFjUVLuf9Z4MyqbvRamU7WjsG5ae6PpTo6GdRs8sTYGLxuF",
  "key21": "4LJemRHh4p99V1k4a4vjNfSr1bTNP8dMMJQsv1GjBomVYyxaZJHu2rrf4eVHGijXPTv5ofGCwDMpMqsAATUwhGz2",
  "key22": "548aJ4ideEDdfjDMBzXQJVxti7ue1WFcawdMnqoxSyHyeuSuaYG18UggT3S8NoWTSkKnUD55JmNbmEjLXHsG7oGZ",
  "key23": "51Cob2MVehqWv4qG1A3wwPfXWMpLiGuJrVYJgUyBPMB6TZMZRPTdH6BrV4HdTVfnnWJztXPPhvhXrzjme5ALTzqH",
  "key24": "UqPrcRPdg1bQwrPR3cpr6YxPWtuzazadGKGNhbAiNoQvcFMq22t8zeG2PbadhXSveuyVsX1FYTPK46tTKCwKpiQ",
  "key25": "2KUgFBbc61vcCwEAMwiKPcS9LWDLt4fR4SeVf4D2xuKGbP8W3BVZuqL16GB2Hhn4i8XEWKE1SAs8V7R1BFgZcexn",
  "key26": "28qjzA9ZDMTrCZt24qDPJb6Z1K5tfgMjS4avy5itvZN6BP7gJ6xbC2W7huUAosMdt2Rf28ux4q5tPG9oNzUT7g7M",
  "key27": "Ece9dNZNqV3yqn9VPw95BaUuVNoPJMksrgwXmqkPVVFvqBBHJziwCqHTmK6GwHaHJb5tHUXF5oCGZ89uauSFems",
  "key28": "5PcN8vhy8AKiV1RmwnMD1ffMibxwwokHiBPj398rM8kc8vE9YN1ibRfFWhsVN2BaXSdg1R5NUXRhxNkUbYSJXb9g",
  "key29": "4VYPHAGS7Whmvno5soQd9HJyevrjYa6cUcwKQQj5Nj9eiCxQkHYJ4sF4eLCVoy4ZptarxEvJ7bUiiNsYBZy3dyy6",
  "key30": "66gX6EUV2ohdGMMBoCa1QPn997WnNyy8Z1isVg5ZMDMwnSyK7kLMGo5iKjyfRmeBg1XbVtH3tT8JhNtB1nAnLU82"
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
