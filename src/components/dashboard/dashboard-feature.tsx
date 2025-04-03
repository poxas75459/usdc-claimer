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
    "2WKTb8hbJqFVbPnwPXtXLPF4pdpSdF8uV9drKaxyUPVa3ENQsU5E8SHKRXey88GAbv4bckzvchXq4CU87GEBgvpV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34S2j4EWFUUoof83qkLKbQzUnGNZsNM513ZTBdWpwqo2AT8XammoEGhbdd78SsXPVQXTrPpoudJZFpEat7EBK8w3",
  "key1": "5ArEp1zWo1nbTBTc2c8k89ByKuhp8e1dxH3JbEeZXXiZNQAL2xQ61UUiJwUfEBfcsFiqHpJ4b7u8uBCtzwTNMcCC",
  "key2": "HZSL5aQa6BvjJXHdNTWvtvD8V7LnY9n7DbHNrgCbkU8268nNUtkCTX8rJfsrheWYsVvozQ91UtZvFx1Z2Yex6xH",
  "key3": "3TQMu36EP2BXsHsPgRiyLZZp22YuZdhJwVBv9GXrHskHyBMZNfAXDSPj43GcG6op7MUrCyCpm3w4yaARyEyWqavQ",
  "key4": "24aH82ExS1pFUmgwFc8WenueW19Zu4JUi7vxfZQfg3PgX7eiaoBmj777zxU948CUhmvFsiDyGCQAbFajn5hQVfUQ",
  "key5": "3v8tw3rGriYYpkYxsFC7aysAMFpVUjr8RUohkZPJBAwbxdy58rKASGzzhEBJi4HHbVxaJs9XHDfx2MjsBntL4np2",
  "key6": "2x4TVVZMZRcrfqUmusHvus2BqXvk57NepVrSNPPRs87s5FhXCWqWo8Z6VeNCcfmPJiwMgv76Kj5EG25zsAvmgH4B",
  "key7": "5ksE6QaGraJJCamNchhzUrd8L7MdzBvTzFZfFSsXJetPb5L7FTZRBxp752KFazgsrijWK7411v2SqbJ2iWaz4XQD",
  "key8": "rJrAjAj3JkYCwCaNDkHJoBTJDhVUnKnHGm9ds9eBNPzvUKr8prSJ9zqWRnUVQTBKhpURWPhWtMBNLV8xiVVY2g9",
  "key9": "4uMzbCu29pPUAdSBhKc9BdACkAkkRnYuTG1QDEfL5JUzULrh3CxnYd7NdpHUZBx1ViAtupvAozKGZn9gjYgE1dnb",
  "key10": "3S5AtVoVFd4u8QFpHTrcQNjxfHveGZkeZ6DKPMnSzyjGG9wjffVka2UL2gyiJRoZ1TTDSw4Lm1JNLnW36WyCTLEB",
  "key11": "2HX8AVu8rw4qAkEquDiPPmqkNHZocTmEn6BTz1MmpocPu5Ct7mSjcXGwdEuPQ49zABhz7VTY8jBXGiyRCJoks4mc",
  "key12": "2fAn7ovqabUh9hHAgr5mHMeDWsiDkx7yt56epEsu37vjtmgEWFeoyXfy4rej9AYYNxpELwLfpaPZN8zFo312KWss",
  "key13": "34fSWpz5s8hfnwKrsAbtjWuTnwH4VEmpXy7RMgvbFDz5dgN9eRuMaCqh1RynB664Ejohw8opZnTPDDmb1Fp7SRJ7",
  "key14": "5Zt8bL41qZX4H4GH1HFZyzVzy8aupEa1MgJfcfsZ8gZrHjbFGVvtcmaD1r9RK6y1j53gj8bHFXeGysoYeG1B1W9y",
  "key15": "2KGPXzU6RH5GSTSdKB6JTAE9Q2JeAU3TSyQwybU43kRjNBfEFZsftiXRaK1RFov5uWzHSqpqL4rFGvSmB9c1V9at",
  "key16": "ejFCDxVnU8YfD6qPYkJrc6VqSaaktwDTdE1ekw1M5U3Z45eH1akBhrjxGCPLwXdWS7PZSvKJKnNVQudfBTfvWpt",
  "key17": "3aemYNGuxzS5iAg5JWTumkdvPU4r6bdr66sYbmAYmSxhBcF89wkPc2ZVkqXe6tbC3aMXenSKP6C1yL5GZgGqBTpc",
  "key18": "4LP7Gkb6Egz7fgXhrVmrhDUT6fH5jkEmjhp5JXNp6pXB9yGS5gNUfv5e9yb1f9eVaXSTyLdfT4jRvZw9B4vccBmk",
  "key19": "46o7idK2GYazef86RfVmhXcUQnNCtkJ11ZvPJ8hPEB7YopGHw4kdvENwh4z4khaMQx8ZCaT9YS9VumByFp5PL4Po",
  "key20": "4Ht1ZzQCPwdQAbXUGRqsR6MnxtwSXuYqjTGtN2VHDFczoRK1iuXwf5QaUyeYCfe9PGFPtGwLYdNa3hpPaowuBR45",
  "key21": "3KddYiEj7AAwx5aJvLrsEjVzxK5veCau1ysn3YeSMjfjTvGprcs9T42NoT3M6uVjixSrd9Fogp3Hw5Cduaev8TVL",
  "key22": "5ezUnNQ9hGZrxv96xe6cqJyXAxWnNCnx5A19FuDux5uAEgmrJeXjy1yQmStnYjRGRkFFTFdrREP7CgayTZZwUS3w",
  "key23": "2zgfdYgxm5Njcq4929zVsqoKEr2NpuhBJqicuWZWuSnQWz6NZi2koVAgenKDX1qSLqXU5okeFAVAUg3rEKnbVZiN",
  "key24": "5ZXRbaPecGR3p84PhJWRSnNC4ZJ9VYK9yBJY5J9PGQGE5AJvPYtDmTuNF5DuPsuVVSaoZdkkKKtzvi8ddxb1i96v",
  "key25": "4zyX4yGCeQSTNFit8wERgXEVqQQ1jJMhkjRFsKou12VGainGcU4ABwaXo35XhK4ygPKCpDLo39RB9FE1CHc5WFfm",
  "key26": "4uxXk9y896VQ4QkxbZ3AC2bzQPobxKGFXmykLKLBX47V6v8vBWXnhXdT3FfcUj57Y3BtTW3115XMdiBMt2UFuyfg",
  "key27": "Njv9KDs7aSxuoizs9mSexnciWRtrXPriV3A1dLVuHyjYjkLdCSLj4YbakJz7ZhMFDzSMGB5VgitfE3mXyLv6aGU",
  "key28": "2Ld65jeg6fApcoexssxHhXJExVSvzyXRYVPQKttJKyae9b51t2UhMzTt1wYFYPbmj8UNkKfDUF3r9V2ePxFeo3Qq",
  "key29": "3iXUXhwujpPyxhraoxYzwS1ZUaxAhr5qhGkAoEpxBFvo2qbZYC5Mhr59zfbGmK9HE83SzEz3t3Cni8CyGG4xXuZF",
  "key30": "PgimZ7kSsHy4d9RRBmNEbNcR6pskvTdNHyPJi5CWPc1UynA1vnX5eUoSUGf4Muwu9tYxCLN4CqFGgGhXju7mHqe",
  "key31": "3VGpNtXYmtWhvR7GqEQq6MtHtqquA2wqZKwFXaK3SKYwYHJzizUu14fc7hwY2CrfWjnRNA75V4H4BpRPPj9wGFBa",
  "key32": "4jufeEz887mnjoLQATVWoXwccgHu3nZJbYnUYoTPhfiPTGb1asUDXgxvDn3ZBErxnXZcsuit28xmCddtrVXtFRfr",
  "key33": "3drEPi922pp8YAzgNEctPZhTepE9Gg1MfuZq8fS8t1J8Ddk2n2CMVCWFDg1PGikPqrLaoC1BnKjJyYvyiq9JJKKq",
  "key34": "3MuWGoMBFQW8m488pzUFHJYdinbyoEGo1jPHDa98r9He2fGNuVG2zqctAqW7fcKZ466TxXyQ7rwrieBXDoPz3vue",
  "key35": "2cmQd1m5jaT1rB7vst8vRe2hycnFSQcGPdm8yT8Vp3SaCBEzdYpDKyCNNJtEw7XMuHiEccoseT256w4UcDcu3iKP",
  "key36": "461bbmQKWV372sxvRyKMzdqkpCzhVisaCyuRggoWiFNGUYfVfS2UxyRyeCWaCXN6F23W242pB5P4vyNtUwG6Qm1M",
  "key37": "knrDZfVciaEVU3U9sDBtZLYEtK77VPChKNc8TNynM3SvATy757pPMPsjCye4weVctosJSWAWRYAocxwmzQwyR2X",
  "key38": "VJTjsko87fhoJSrkTjvFm5YPAKcYdya7pa4pdRqcekt16Te59zYXLihko2nsLWiqESqEkvQxHf2ZDM2a8Bg5jAp",
  "key39": "2tyQTJJfwncriXqwZouRLsfvvAGieydJGCcNPtAXkLeowSrwASM99woXu39gx1JRezrwMCjQysdzEF8oN6GoZh3x",
  "key40": "2awpuCDe2Ys6wf9hkANUiAkCM57YTXdS56Fku173wGeBPC1cuoRDbSQmdcDhoTYnE7BQZX3H7vMeunMR2zDRA7QJ",
  "key41": "3JpBS8xtzEfj78928DhD4UqfbQvMDwrZUkigaLzVAAxrvQjLF5zdS2aw4oaUvdhk54CdHrqAUGvcQszSr2mXvPus",
  "key42": "y9H3YhD1VUKUH756LA63c27njx6prUQFprjDaxV7ifrvJQWi41d3rJ8tQNUtdUJL3qLwvLbaWHof9SBf6JDF7BM",
  "key43": "5fwT9kJc6tGpS8CNrGzbT8WXX3LKqYwyHPfh4JLVEn6R5iExwsBHrTVTqcHjr65sEGLJBW3RmUg6adfR5krXxzdb",
  "key44": "5sgnw2P6i88EiMwqgPSkmPPQjAsdKezU6pi3wSqPMJ1kst7gUsYv7VDpiYVYz6dQMbuZFnGEJuBk4YCSM7WNJyov",
  "key45": "5CWuUcWu7fSPfYCWGQJZBmDciSwn2QcmFJ8Cv9tvq9BZT6hqSLw1fjJuFMApvCBrSL8hqktKoUAv7RwZBXeYA47y",
  "key46": "tsSghXaB6fB7cTUX7sLWaFkaT4T76L47F4a6wQ5xt3Ka47mLk8QERvTEFPLDm7fPztu4WmuBHbUrxRWUoTMyabS",
  "key47": "2VFAhJwGs46M5CjWnNSQH2HYm33gGvEcNHoixRcCpT2j8Kgv55wjUNCuiEBUWbzRvRBo4LqSznUnmpzvC7w6gz3R",
  "key48": "5myKFGDV7UZ5wYPyp57PnzafS6ASvaD6XnhkXXtUew63w7Zec4PPm9WBemCxdkBCCdN5acyzDjKQNs4yXzSkxbVd"
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
