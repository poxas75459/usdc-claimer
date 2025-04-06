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
    "GSjwJ2wEtT3t6B7idciZ9hy35fAqL4PHpyAfKiEhaCh5n7PBFMWkzD2XoS7b8RMD7mnsSKdPGsi2npANZrnG7KC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RCxFjwMNs8KHWvWJ59X3zWQwDz9PEZ5eifTD3VhAjqndR2PBVDfgn1YqdmgwE8YK1yjYhkAjrSCGzZkcMHcZygL",
  "key1": "3ZbC2RPbTd3xa8tXZMsXU2FwnHxdDhdwfVpL5mu3UVAUbpra8nJN6PcHzREN3TJo1NUGftCHZzf7MsTaHicnZC1F",
  "key2": "3qGXfNLMJnEtKzoBysFdG5bJAvYbkGUf7kTgxJnJsaij3mqGus9ANHb3qrCnDzV9tnuktb5ip615YyuFd6Vdjn3R",
  "key3": "p6T4ELQaBdQRLsfJDRmhV3qytqC2yNz3E58Mv2oP49yHEU5sCMeCLe3orT1sbUEwe3aAqWF2bZid3DGWuBK6cz7",
  "key4": "2EJZ8kDwyXrbCrogCTbRq4znHWdzN25PNpjsi51XpKU26gydMdsgFbenbKg3uxtXt6HVsx1GLUfsycm9RCCqACcE",
  "key5": "yG9P1CFdYt8UVe6aiZ7rTBtdFTSiZTkS7AwhXi4gteNeKJrNooyQX7bp6gaMUTxyHDw6f28zfe1vwAFsfw9TbuW",
  "key6": "4dANHJi4VAuq1rmpBgDpmVDFcNQBjzBuMR2hHscxJZSkuXacneYNmS8aptBU3wzf2V4mX8re8XWbCKM4QXE9wd2P",
  "key7": "5yLHLHVtDs47MGXx9hRphuGLgwSXdaz2cwyt2ht8AS5CWApqs7WTU9jXptmWio4CspBicUHGNwJUPA2r5LxYfrbf",
  "key8": "3XNerbnSWacgonKzdPGhrhGypbfPaZ4apVb2Lp7izoe8XPsSk2gYNhUuhPp7mbgf7TcMtLRNXmThceb4LcFpcJGL",
  "key9": "313sBBDw97UNjp3rAuTAS3Y8QQEd3n4CFfHSagxAW1NPfkz51ioQzPoL7wvNVwksTbyLWcVsRWEtGGkm1JF1ZPB",
  "key10": "B2c5efankAKatZbGJXXrEjUmy6EGER4PgnJjxhGZZSwRi3BtyWQf7jjhrxhVVjSvk3YKiC2XvzwZqkGEKy4TrxJ",
  "key11": "4nnXZ8UPGqKnTYbyiZ5z7RJRr9JvzCc451LjzB8MkHnroyqQdLycH7DqCuDWKcyYNx9Uhh1pvNCak7Ce8tsTSSof",
  "key12": "BoaEUiTLL7hJvhRAAmYH4iN9iA7XG5TBrYEfx2aR16Ref5b5VH5tpajc7R3YJ9jKPFPkL7mDhiRDjmVdreyQ3q5",
  "key13": "5VwRzhw2AgfWjPi9dCb783h43Fz25aFQgQuPDYAEpUNmnXmeJFY7ESyz7njB99P7VkLD6hFyKJGk1zKHVRwmN9w",
  "key14": "4NUx2ZrDLNJZJS2VpR8xcv3A2u3tjMeWUJnneFFJ8X8NYD6UQfg6FMUrcALAwasViQocccfbfjHB6mkQEeasXcL",
  "key15": "3GGQ41MHJPnvKkPHMVWtaPUSNMZeMD4Z4Fxe7NYgzujNHUAHBMnjxX8aBCz6VN1eb7Uu13QVeK91BufmXp7fZB2B",
  "key16": "3d7smMrszrbpQWXqynSAkMn1q8zL6TC3HAdrsvwYMe4zpViEBEeye5MFKCCquWRWG3eMGftFnTeyYgGWH2NPdBCZ",
  "key17": "3xt3aNwJs97hamoDeu32HW9DweXgKxVNkoPaTgXU7dyTJHDoZ5fBj6XjKytFAcAeTKArPntZL6d8XJM5396iBHKB",
  "key18": "5cmqbrzJCt3SJ6mz6wQYZ5UBEUzWx8NV2KUwvZTzP1BYEJcDUCHKTTk2Nuj5xeska1HPvQFTV4yZfrSbfedZ9G3r",
  "key19": "3zoEuFLhTkXG8TiWcHRZwgfDS3qLtipmbgMsqUQgpUrEuQ7xajveSVTirPyBK4ugrYsBTt917N2XmPaFcu4ARhrM",
  "key20": "iJGYjZBByRBR46MfZthyBCnKESC3BEiTeJh7GLM3jtX5wxgEtadgAk7hZutP1GvtPHUxnBihD8EWSvUr7YgBSL5",
  "key21": "ButKyNTea6VE1VYXHiEcd7ZBUFHxFZQrdcmNDHd8Yy1qWJxU87GakHgK9FMCCNjiiuMRaJPLbYFu7Mjubbdo7qV",
  "key22": "4zT2QCUU95x4rwzgWSBYVfXAnkG3kC2xxhHMbepddXzeATA6zrEnXAuKdvZrJyE1krvXBrmMA2jVxmzMJUvhfPUX",
  "key23": "3acxjz9wDq81HyQTAa9NYJbgGaXLWHxzyNNainyVw1xN3XiLJ9JYW2y17LathbyYZTFi4uBShWS35ZW6gVJ2tq6L",
  "key24": "2A5fDGUEnFBuiu4QpBkdshu7HLeEWymeSKdqxq258aDfdnWq7LQSNL9QxfWputquCHwokwnSPnXKkmKiYof1fcmY",
  "key25": "5bBrVLaKy98f879uZuRA11BSRbN6N5MeBPaVB1VWQ3e5mpY4zvMXfMEjeoUGt2FoKetL83M1vBL6JtWs8nem4bML",
  "key26": "21TgwdsZ6L2QNTRC8xCSJJSyHYmTbLp499TfVLn98vevuFS51iBYUoXCciXXzPgTXwr3iNqDdDJgAzPKPnMAFL8p",
  "key27": "5hp9Dw7w8j7zrEyrfmLyKLGBMyWtmpsmcapPqLvAHMj6WaqBLX3KfaRsUT1rw9L2h8YQWenf3xcyQk4qPtzpKyvP",
  "key28": "4DTAtWgibnYeArh4wksxKshYxtizjvUFjFqbbfqVHzbXEwzG3igosqT1ZeayJiEAh4Fvp7JiiYkSBeayVG2b5tHZ",
  "key29": "4EL6AKU1Q2Utuuu6bmSiKLFcRKtbvTG9i5VstV4rtbfK9EBRmskpfCD1acqnCTLyWjM7HfbhrQ6dXNLrHeZ175EU",
  "key30": "3n51VFjGvbmpSWH3vSgaLHubntvhrT8CrLWzD2yyVocsC752pd5ViT4RoHhpTtUR6ksUP6bAbRKs9npcEJDmbx6Z",
  "key31": "2yQ7c2YRmMnHNHJTAvZU1UNRMxeaf27RU3QfwX1wVvLYDJ1RFPaUQLHfV5kMTEwXwEyS79aZjo86NLc3gSRhnqUY",
  "key32": "5492E6fwa4B1sZtn7H695RZ68W8LFnatfzadRjJcyHoXsFEKNC4sPpa99hgCC4WUX7hPmXCSUd14GLxcFi5CxRxF",
  "key33": "4fjpNyDzjmU7GauvfzHojd23oZMJC5uAzrcWBDBqoYnGgsHHjPZGMooNkkPUXm81ZtU1bddeGMpScx8MfPLBiWJa",
  "key34": "VTqLP82vvtw9vGxNpCG6kkxo5NrKqRiEg3xTKtwh6RnDvaKacDSdMJhqcrAPgtmenYXZ9TsSXFe6YZ6uPNmKcCc",
  "key35": "3PEf4NXLiab5VMw9EFq7EdghWstphxmetkTpeMdcXv8fQ36YryXz1oBiCLf2J9aA6q5ib1e2JGi4v3n1Z5Pu4R1D"
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
