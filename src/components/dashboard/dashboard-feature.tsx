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
    "4iohnj7aUmcoNqFXmb9WQVKkhg7ECa7ftydYit2v5SXKW72RJkG91Nbk7tPY3FSyZN1LQsM2tZj6Y4BdnD65Sp5i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xkd24CtvjpQvWBNnZXpgUpw4Zbi6VsTMYT7REYVxda48izTvhzP46DvzbLZqm9dMiHXidmAFybPNP7p9nmZGFbo",
  "key1": "2for6Ry49jbPkLSu7LjotZ4eFPdu2wv9kTGTaaJTHKdfLcxrH6rR3kUCMb1PjsAtVBve61N8yJmzyg8bVbMRZnqG",
  "key2": "5CL1yuagc2NsAFVMDzCvPbaMxCbw7f2N4sLzRTrFZwzWsVXQtkZidgvci7u6BiVej3jfH2SuDfNZy28reeVxx7GP",
  "key3": "3pesKrkqw1GcQpgnFkpJoEf1dFGD6qT1MoxZCggBvuqUHSPQEbT4X9s99RPnN8b1ihd4F7Ywd1qMnDPeo5nXBkiU",
  "key4": "5jwyA8niPVDx5H6rZgQNC9pCEpNocNpyEHn9w1aLgwY1hRx6Fo7ozEgQmZNuSNpAA9oTye9DLnyZyzKQsdoRjL8s",
  "key5": "27taFWqtpQmV8KJfLt5ZGdmxuFPDPWbQmHSDn5aJ4TfedjdDm5wwTxypQzhoSkZgd7vziQ8ANAZgDA6UmpF54S2Y",
  "key6": "4LpnRsDx7pJTCPbgXxfpAgzrx6QSDnwXAp8U7p1S13KiEA6cLSMj5Ken5Gh7Luvd85zRbVtzAQwSqNb1Hj6WSAr3",
  "key7": "28PQhq3mwbKfn6Agby2R2cfYgHzarCLVsTx96P2iTrNANmFiXNKUttKbCW9QnkZM21fFu542UQhaBRZYS71a1hZv",
  "key8": "2dhopAftwJQVRT9GZMY3VRi7FejXpNVtaYqoDEz5BWiCLi9Yg7qrqbuGicXLZoXosMBZSh8DZWYKHiDRdL5ShkSA",
  "key9": "5bLrfhR8gnmT5YQdG9dTm1J4kE8qLsvfCAN5Gzbisv3oBx6LWEfpCcmNdYYzgea5eSiXEhmP8ynhXWHYpPT3Wx4y",
  "key10": "5hSVJEiyyuPgHjLYHkVP2KJsQ144yMGNrTUvHTswK5verpKo631KzhGSc41nDrsgdkaiQAiLz8CCr6CTEJZACj2r",
  "key11": "465aVqV23HLxH5mUWpoBZywsK7JyfwXQLQsK4xwSxrhbGnG3Csmwimt1P4tZ2MW2xqRhu1WSnw1gLcYGpyXxM4eB",
  "key12": "PNbLrkjhLCaNhxgXr1jdPQXTnH5aQqhMCMMkXqoMwBeSd1sNNBNFD9cX6j1ETXkfAJ4uTsmGTGzgEHsmrm8ueaP",
  "key13": "5CthY2g8aNkXnwLhf4ZRj4KMY8GKVvPRVHpZhyRM1trofGHKa3UxK14rXXmMcFUjXJrP7TKUCTF1D5qir7p76nxk",
  "key14": "3zYHjb34EmmUhLLVKbgF9nXgRGAD5FxxwQN6GeR23y3LabZK72sCGwKD8MDgWk9KBWHd4B7f1JaVBgtGJZuyCxk2",
  "key15": "E2gHKMzg7RsBUwvx9mPeYxLFN4g25YQ9BDJvgg7YQZwKjPTV2oP2wDCTPdxZGsVXAGHBnnG8d8fSJQDv7kzfKB5",
  "key16": "4c6Et1AWDcAnVQNxKaKZNvQDWEMCFgcMSXrjVypD2r1QoQBa9Zs17JPbYAiE67cQ5WWj1bpnt12YDAKpmmep4KW6",
  "key17": "5mxg2vanjbesAXEPVMwe9SuCqfuZpXkVt3YygRZz6MD8GNJ4etry8CsHv66itn12C1ryUBWB6YFkZ6WnTLVjgTmx",
  "key18": "GguTKKV6UXzE2WZgf3i7GoT57X3e8wUx4QkwPW4mkNoxrS8Cdwht1TNQXEgwfrdpfhQAKZ8R1EKndnJ6vRVWzU9",
  "key19": "rtZgtDYSbjuhbqA8N55e9FsWdBM2XCziTMPv4DfdUDhjxKCtM59TFG8zmW7kwUHDH2fHteM12e88ijCDbPtqxjh",
  "key20": "5TCxywZibSKN7BJ47arMnga92c8YbEmoeJQRDJiWWSBEZZ2ZLcNX4dn1WKUJu8TiiGLjk5RS8LYL91mb6LP3uXpu",
  "key21": "26UAPybo5npU1B3JaHNzgDTBhfzKpwXA6o8WdxeqfULc4uDnK1VL6D2eyQ7e232WXp9fhpjZLn6Nqk2YTG9n9x6e",
  "key22": "45UbzF1NMoREzmiDgAWq719gvvwoRJZ8dtwTTN2gPw8YcERE6oXMQnbuJxAkTZM6MNY1KkkKhCVJ11qQcx1fgZ6A",
  "key23": "5qLkgMR4PmazzuMuernStwa5jjiSFZHQKiAPUsgymkECxmxCnQpL5Zh7TaZBpTATv5B4QGPteWeYqcFCsE3pQ2sh",
  "key24": "3eEHHkySmoFE9nQZZjuuHwkvyd1f1Gf3iUhLNS355hvqBNitRs2xgEvbVwCdkpK8kMHVZRX7qoYnpk8YvzkZcLzR",
  "key25": "4UkkbxTv42AtQixBhyUxrf6W3e7qePtnfKCMHotuzoYKHyuGkcsTXTMZXAskHxk7egyYcUJGafiv4MRo8R71hnD9",
  "key26": "546ESHbUe1yaxM1yP8vDhJrZbroqjHgAnMWx2QZcNg35QBmT4JnKam5My5p6sRiim5xw4Rkc6B9fcFut7e8uX3bh",
  "key27": "5MquU63JwXczEL7t6Ht4mTPsccGYMyVL84uSzqTX38FpeH2x7xi2peAZ9V9m1JMGFck6Cg5nTef3EtVqT63PuoGb",
  "key28": "2wxE79KAN1hdWKCBNMwX2gnNy33Qop8vfeDUWTAQBmmN5WTYnNu1oxXhDgBv2bvNoYUxarp1ZUa1B2xroFAMK9n",
  "key29": "3zYsa2rrRFrqUU2ZAP2mjqHS5XbgA8na3TeinJpY3xmGa25uKBWMjrNHu8utxk4Ughk2kAkLAHGLD92RxnDfGrRv",
  "key30": "3dVgdaa31FfgJqPwWjbEXUhB1fSBTWutuifXKizAhuGZRvrXWSZg56J294DM2qChgsMezLPJC4UsNVg8N1BLa5fd",
  "key31": "2gY5ydcaP4Gn3zWQpbadjTpH8oJjAeDarRtKK5EDwBysVg7McxSUbznwbyuMnjcDDoRQTkcPE26ijahiVY5xC4pC",
  "key32": "JrvU1sHhzhafGhPB3cXuwWXzKqYhcnFqPJ1PUDHRT97s7reWuNTcNoenLZAvkBXVij9Lmg9jVqi77sRc5xcTmJf",
  "key33": "ufrPM4Bnrz26twMP9LhRAzBcCP5DWzK5Ce2hXXK1MRvipygCJGuaZvfMsFjmb24KMGBjDpGYSrhoTYoUpgnxqnB",
  "key34": "Z2iQPBgCR4GVkLxCMNqhvHCKEBrPgPPgvxX3awXq3oDvzGJKSuo5mhY29ESNr4hZC5rMjRQnyztm2epX17U9VmZ",
  "key35": "3niUEB3Tq1Df9ZkQ4SSEHsU7ZCyH31MgkQqd6FoLMcpwDujp1Dpn7Tmpd8G9kP9EWZ3NNug59Ymr2D42nVqrK65T",
  "key36": "QYN3gTh2ULmxu8pTQLt3Qo4dj8JpzLQL6ep9suiCANLgDvpYC2tTfwgvHtgBPY9yAmMFYGHykx171ybezm92Gj9",
  "key37": "3V2SyqbdnXkBnuvH5Z9EyRjxYTDY6rNYsGWBH5SmNidM3cDrjRJ2WQnAvnJmSrjdTLnGPaQNwCyHBAsCHTUghzfd",
  "key38": "d8dRMhkoPGutJnXKm1HCB8F3xnvp6qWtrkyWz9eBnMA7dpce5LkENwgBwj3XXdZ8mkxQGzggTUWkWs1Koppzp6C",
  "key39": "2kXC51gDSskBeg9Xt7NynmdQjKqwajpampuz5AC3gfTXwsSyY8ZaUz2xR2NWj3eY7YfbuMXduADXHJ7WTAmTivoG",
  "key40": "3d1L5knM5gvrGcXaGVQMb2ZLTTxoMUWzfGtaTJix6TSx5W826sUBFnP7yLt1FN4DPLWy1Eg3Njxc1ksuqDx5mWXC",
  "key41": "voq3QEbbFQCDnwe5Y91hVHSc1TuAKgD4SFqJZF2ZRfjZERVvBFSW5YbgtuPu9anUXKdy4f65WTYL8caekJmg44e",
  "key42": "4epN8DX844E5Ljp3Vg99HtyKKWpF58kYbiwSVJZLCMHu5pi4y9rXuGi7r9gQCvUkh31RdKChFFMv6t2Q3xBy4X9j",
  "key43": "3jBmyz7BnayQLDdQqbUErSQSqVq7eQFjNENXjmxfUMsk3KAZTidAvco8B9iCCgiZeAJfB465bFAT63fLztQbaekb",
  "key44": "qB47TnhiHFuTbNES2y9Z9Rb6HxgopwD4ckYPGjTWNiMfjSQNdohY1eqtGgVLfkQ8aP9dqHpTnnQW9xcKLqHxcYu",
  "key45": "XNNUZABVqJcdTUzznjPULkWNfc18UBXeu319h5AEkfvm3voDnTX2MeGCTK2stLAYzEphEKGFtkKVGncc5MzK4bt",
  "key46": "tHBZriNdq7KQ39E5fhHdu3EheDjTSvuzdCn1zMUFJNu7t4j5Cucp3gGT68Zm5nJdLmsmjaHrzkxVZ12cJ8S3baD"
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
