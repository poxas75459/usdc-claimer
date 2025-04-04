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
    "3WHmvr7aAdobYJNJmUuxXF1B84MpouZQzTzvdbWFknxWKvYTMDcjfxYY1XSRgNR8yc5JiGQq57iNtc9yULiQQran"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fRWm4rchtsg2LCpxfeyegndATZMpaaGDAzArJXBhfJ95BMHJ41FTqWxziPVcB5NvKYMMzzTBEvTNpZhUv2XcKyQ",
  "key1": "5WLQE4KN57A2zgp7HDjibifR1Tg64pmkkztem3jWKYNSS8xn6fAhtK6eYVMHaZX1ehMYQgKKmBb9TZ8vEgicWBK2",
  "key2": "4uk2m4enYamFffFPjJzgQLnVqkmjRFuMQRkqS4H4yZNZRJPaVsYpKUkGLTWutcSTy3GsBorLaUvWaLkgt2Mk4Qqc",
  "key3": "3nDtDM8suE8oML12ncGo5guJPptuJ7BUjkpRJecQAy1urg3EMaaTrXDb7VCqeoE8en3rNdg3WpipYQJxD8xpdC6h",
  "key4": "2fZ68juE8AtSVU5B5VDzfdacDpwxQhp7e4YhzdDGgmbcJHDXxDx7xVmtXvUmKR5vExfHtMHbYN6re1ZRuULRqwrw",
  "key5": "31KjshgGbe1BHtQiprF561LhFoGr647im4AfAMwFJNQcgxWRam5eFgLaRFqTZWRCjtGpMTPMNk2GDr7Eok167G1V",
  "key6": "3zVZqUFoEupL7BuYm3NmbRVEQMR5aow6kmiyp3K4fXXWqG2ob9KyCsqrP1DTRbE9m1oPWtwTLjq7R2kunEGJi2iq",
  "key7": "4mv46kczcR9UYeDbsRAWnKcdtNHE5ZxV737Epw7FYSTpoAfcRTNRfrzPMgkWD69818GsBU5GDhBrn86wJZJka8Td",
  "key8": "4mq9sNSsRQcS7fqJaAFBYpG8opvFzG1L5DbSF6GprF8LCwatR9hdADE9VTMucQ7EfUMtJL4GVLcjnaZnRcmvKkE5",
  "key9": "56V5C3RX8UXNDs4EgqubyG1LaeX1ap8trN67sEwXr4bDthGHinVNYANN1jL5tXoxsDGo5QqrYLLC5B7znFjPcLVf",
  "key10": "4NPp72orHEuBvZLeieQvctSLEWy5Mf1SDAHFuthySwLHHJTW4vcqpjRDcK9wKfGzB2fkp2R59wtzdeaVoy7o77yn",
  "key11": "4AT9CEBH6GS7XeCS92Gz7Sxuy2gC9iADncaDzBYZTehaKYT2RrBD2z4DxdHAjNFGWtkGTRSkdrhxnRsDdkDUk1a1",
  "key12": "3HrQDBXKsC1ZsssjAUAXDDnzxjmM7FU5JFd86tBgoxUHiwXWb7gFVtQsXiHFcXAdyJAPZY2Td6R6mVherpWHg1jU",
  "key13": "4Bx1VaVMwJugHp4dtywnyJ6CYKcCa25QnfNaxoN6CghVLiui1tKhSGP2SD6efEzvB4kuSjKoipcoLLd3Gt57tCy",
  "key14": "5hZkD5iKtDbd4DScsAuGFPLy3Bozbnu2nMxQAdwnKpuaubsz2pfp8kaqK4dLrpqCT2GctyeHSYgZygbroSbvNADi",
  "key15": "5FW2NnTrtvk1tNM8AecNn3Uu5fK2CW4MkwKfJnBwHgYFhh2Q9z5ehKFPv8XURL7JqcTLvoQsgEGqVkFRg3WnFU7N",
  "key16": "396z8RsQdaCvGem6BFgNo6BYugryECJVS8JBETKRiWDsck8t7JBUBz1qd2vLHtLj9i6PCycxtZLvXeKRkrwVXKkr",
  "key17": "5pHivy38izwVB9cnNwHbRfgT6xPhwhMrsx1APYjcwUDWcdJ29f2taNT62UtfwyABCLcZnhtCT7bzSMTDTYhh3zGd",
  "key18": "5ReQXkm22SVMJpLvY6tfWUX11tb2W3D6kLsBRBydi3Wj2P1UKvfA4G3VczdzMKpqpbuuhNi2WWy9Mpwb4KD1KXG5",
  "key19": "awbzK69m1DvGmimmLaKuNqkUTfEAUCfEUxp75dTRuPXZLs7fUPTgh6m8maXmDziRBmZFcW989Tz8mumTXsXDKgc",
  "key20": "2qjJH6J9QMhR3jxUX5paWYrgBKv9oLiSwxXg8j6kx8haxztNgSoidz8WF4Ji6pAPqvkF3XoDQ6T7ATkKpVfKoKk8",
  "key21": "83PUf7vGCBAQ1XGLg7ofKMon7wS6LWE1txa1qGf6VggeTLLwXzLLXQgE7t4Q9FcSF3AEHKpNmAjRyw7HwGumWbA",
  "key22": "4e4c3YxFhL65Vsj2oopjZZcaszYr4TfVfV3JiWLFRmPmHzNSWYGWfTDr7yHdKsoHohR3wuWAgof9jSFg96nciLYz",
  "key23": "UGDWeGJMGpPrFEQfQBCpKALCNPErhoNr3U1r6TsrNjNUgR6LaxYj5aXhog8A5YQ79oFGmsR65QNqcNQcNGEazb5",
  "key24": "PfqpJYP6rBExj4c1rac29ooHbT3BnMjdovFdLcwScYUvECH3kn9Hk39rRDwUnk5XAtdErh4BuF8WfShzE8mmq62",
  "key25": "4XaqarXdnkUSBYqW2cwnVVJQJYiWgH6CcPGSXTtgti1eMKMRYAAdnGMkEDoEhYXqKmuu1yA1fqi6aHXb9J3k4EZz",
  "key26": "2ruG9ipXAyUY8jB5hgSJEg2hVwNmLQb7ixHHr6ZERATHdC3LndjwwwojhtQTgYJWoLDdD28SfPtPkqEv1M6RrDr5",
  "key27": "65CV5fbg8CgSQ1rDMzZ9teGtZ8ZReCjEv6vihoLSWN9Rw1Fuf9YbxH9ZtdnBsu2J5ZwxkJtk1ihgk2dmHJTJ3SS4",
  "key28": "4aQy84fEB9b3BBVCocvjz4ZzdFC585QohRDmV97BzHhEkYw1Qz3uZCZd1red3ExYuZ5xjk5YoRLaLUJ77BGAntzA",
  "key29": "uEtgnteJsZmChsvX69zZU8WTJNiSwtJur4kdpVzJ2fePi2Xe18YqecBiwoPYxKSy9ATURNkhDCHZk3ttWmB74qa",
  "key30": "3xYH9J2mXzHLyGuzBs42BriDxbQHiE9PXJES7YFqdjPrEu9eo3pNtfERpBCsAgtAkDHq1pA5GGuxrBTVSgz23LGb",
  "key31": "5yLdzR5sWSsvRt94TWbmSgxZf5sPZ75moYtUSn8GhPDYXYEjYErfuMGg3zHLhYRzYJ3abkKYX94q79hn4M7g4Rd7",
  "key32": "3iWBJoXb5rAaRxnj1nGkXq7GVz7XzhG7dkjtRjooDXe8GUNuW4obYEvzndZ67t7ZpempctWmeRtbt4JAxkoJNhJ1",
  "key33": "3CSNDYjtWEsdd9p9WiMnRv4AtXSDV6LejdEcsi49gYKg83xTt8JHCz9oj8fcuVCxVnkoq6EfuuD3vbyZUyyUp1hh",
  "key34": "2nnDu1gjsjb5BazTK4EfKmbqLLETGZXTdTgettHtWzrmgxLM3aK5ECyu3xdyjbRZongRjHdCis3cD1qX7hweooh5",
  "key35": "3EpeT8uXZCHExEq8nTjVHQSn3UnKobsehSCHXapHZy8ckshLeDq74y3cY1qoNMFet6XXEFS7WMLh2jMhhT8kL4Da",
  "key36": "3BTM4RZk5omnQ186QGNT6VeF91sbnnKRHjohMJLZwX2iuz7Mi9b32avkdLNrdeVJTj14RJn7fA4F7LCUVRr6QYZN",
  "key37": "4ejMzZYmC8C8LoJoQqpkiUReiDCQFjw1Y6SJ8RqNc1LKPUdZNQja77GktMJ5HQPKwran3wVXuaf5vHyec4zXcLHz",
  "key38": "2bPHwtZR7RsJJhtxa6viutGi68W2EQtdV1z81F5PUVpA2f8tNq2vV7BVtsv5uWEv2ZJbQr3xzAfH41qb83RGkzvA"
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
