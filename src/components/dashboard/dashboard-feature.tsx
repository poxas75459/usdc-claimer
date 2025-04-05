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
    "2f32nfMcv96Mr4NhczvvvtUetmpxEd6uzxjdRzRLfxdpCxftUdcy7AvV1AjwXBj5h7fQSpeEBDrC5Es5XZuVymoE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55GfDPRbDnH2uUSf729pwMZ21UB8E7sDV5QCE1nv8u7a4APTFHapmKb2NBSEnU7UYVoCPat2npkLhFMkpEdXz63E",
  "key1": "2TnAoGgBoCkBQsHnwuAcEM2oip7WmKsFq8WE11J4rFEmCvevFA2nACsjqKJpue1sRrNxrawfxokarvNbYKEf98WV",
  "key2": "5PTTtw5DE7Ykhpnsk1YryQjdx7zNHuj4Q2GLm5Sy72MjGQ4YSK7DsBLjytdEsbtj2CV8o3cJfQXmstZKTBpevuwd",
  "key3": "3EPochnMmtjtR4Qy3cxuCLWwwLwDz9BWxZyszMQHxx5UPZ8fcDGvt1BQUQW8nrmG8gmwNoBj6CtXmjm6e5srUhx6",
  "key4": "32GSbDvGNYy4aeHTDrFfpuRhDnB2rU97evCFLkydMmBdzjJqieeUwPFgksa6TqJpNjroWHkuKcNpv9JrzwyeDsvf",
  "key5": "2UdXDYc1EmmgvdsyvaiijE3Wp9X9iZme3e41xJ9sSpD82QcR3wTnjqjGNxXroTDEisQKVAS5AAMg2eX8ArzqoK9",
  "key6": "28VSupZM2NWjBXMD8y5RdLtt15gDDuZNXnsactzeWSpjF3Cg5eSbYqNfZGQotRXRsPxMK7ZuBiyeMsrtns7ibbWq",
  "key7": "3zK6qBycgTZMb7eNUuMW486y5t3Pdq7ubSrdWxmX7J9SA8tSxLNFTaGe1SA9HokiL2qHGGRMfGxCqfiH3vDYMtQb",
  "key8": "5cxVNUBtFfQP8jBPU5GsNXwEQxeWNoUi9Tt3TVesQ6grYYuzqBdpig5XmZ5R4Ye8XK6A6WqfjgX1WjH25gUfARV5",
  "key9": "2FNrCWZqGc6YGFRixVNyo9BX2Fmpp7KJXjpdKWNQrR7ycPoKX7yMwEu1P6mu6ayncxJEZ8boyrNQkKrP2hjAki3Z",
  "key10": "5VzktLuZVLBoAMrXDs89AutESyVckk53bVGWCWTg6vGP6Qtg4WNaUbdV7cBTPpRZSSb1oPPM23jLbKRkJkuLBJoM",
  "key11": "2vxsKU6rWtpQEU4XfNLfh3jnc47v8XuaznUjGCvsxwJptkaKJvDrL6wrZZrCGSYQcw7eh8jPStqBkGiqRySoKQpg",
  "key12": "4uNDLyc1j77tebyZqoxUKJB3PriJyuT9zqh6hkgMMx3sqMkyZupQRwvEcq1qZCajgu88C7W2sd3icVejazf9afAC",
  "key13": "5LVeV3qqV2E6em7ruDMNBXAWLA2pPqaXJtLBRdr5gZ1LuuppXDe4RnCx6zMwmpyE4cWWAEmLHCCiYrF2SFquC7D6",
  "key14": "3kzNvKjs3mCPRxqBsQYrbppTzf5nz7VgpE2Lx9GnqukJ26FLigmJWxaNFgT3WmWTBnYHyAxA4SykLNXQMwRWzsbX",
  "key15": "2SxRxQpVr67P4jYUMHTo9K52KU2Jbwmfvfar97WP6eGNq3mGuzo5zmDH1EQXdThE2f6BMZKBipF8NpqqZugGFLE5",
  "key16": "4Bkeu67EWRySoMpTKaWFN4gyRCMEZNpfhfLwmANXy3GKP4mnK7ah8fMVYftBB14npyFpWZe1WCgLm5KqXnLJAdcF",
  "key17": "53ngidTKxD4QNLmwcFdoh5U5Jf5V48AA6RcMHoYpVHUe5DHitWsAsVw1EWEqT3BCjHzjL4sgn5JL7YK4oAb5jq7u",
  "key18": "4dnoq6tX8X2ek7amz2Y21MyDcsx6MYNMTcFDsrXQsugRAJE4Vd5euSAhAqHwuSSLzrXDrTCtUDw3zQxA1LDiQFrp",
  "key19": "5zN7uE89viKz3rRsLL7xHqcAxQ3eMESWeqDRjyuUHJHvah4VNTEMgnLJKGXQddiZ8oKcyFqjprYfr7bdxqMLtrq2",
  "key20": "4fsBbz4eUtQd9DfvKKrvb9NNpXnQLEkj3HfGqA4a8hKeiPJ2TAnaqrgpABoFY6JiC4ehAn1XwTrXrWRmwZ1rbAPj",
  "key21": "CUR2tWUYAPWGrxgTg4wKjjS3b2NNJSajWs2GAbCjV7RHfbN3yedkrJeMKNbvHqddzLGjNMgSm8KN7dLx7YTifMi",
  "key22": "Xsb68bfRdJcRz5mij3hF9v5UwvJFm2SfQoyGsbP1RBvtzpJSn3L5gSR56dkZsbLEFgi7oGAEg5SekHLAhX3hxMd",
  "key23": "4uTH8Z2d4rjLMWBgJ2z8jNCCbohbfR4gVA1KXzEzcFEp1a2JqwPqZUsZVrU1rfbywLrgkmyEjb9jubYwsVggAkJ5",
  "key24": "5LC9YYSLv3cbG5KAk8waubnRrjXmLo9LZfrkTrCp5iUPJwoLSh9Jw4FzKGTgMJ2i6oZjDgZiACpCaSqSjTGR5GpF",
  "key25": "25UZEq35jGYtvXC9uFiug7rEZCPZ155duk4pRFSc1umV9tEANhHaUiTywSmUvbkgSpk6TUSLSPpyijqkrSniEA8M",
  "key26": "3r9aDNrUaTPDcELNFzaFdy83r5sMpoG8zEFPbKYV6jLAbhN3yeZ3p7tzu2tfcuyr1C9oeDh5FbnYSv9pm9z1G5cv",
  "key27": "41jExZ7pMoov6XaLiMxRn877QNPBdc5oMKpBro8HFQ1BgQixWmjUoMpVs235tUAQBWL5bLL7qrVsVtZ6xiGjUsus",
  "key28": "4LYyFDCCG9xpqV682GfhU98NbDwS7aVN2hLwspYn2jjf37FKE2g8kximXjJHMVbBJ3QDzrkh2XKmk9gJ1UbbJxaj",
  "key29": "3DWy4rrmbx8a1KVYrbF9pUafR52B3RUA1bzzX2ChHFvSP6zs9BgcfMPFpwgceeJzbMBFcw6o5N9hUkfZmkwTe7Pb",
  "key30": "3pKcbq2MPDuut6qSWE9tbBPyxufhfWKeArbwgPSE5NeUSt9bLMsGsAiCUS1ftpuCpspBtN2U7kkfdxKDJYhpJQpA",
  "key31": "PaJgWr8gzaqCpy8ngYzTMPfLEP5Hjf2z1C5fxeLpHovzR14dkWmbqiJ612DmieKguAyJiVkrPxGqdwhFyeDU9EK",
  "key32": "4gKDUm5LmPLdm66n8154NuW1rWYmHEQjFEt9MPkJLKToS9zDpHabQormrJSspXuk9GvGFa2soqGR7erWeV95p52S",
  "key33": "3XGWnB5ccgoQKtLuBPNsvm7u9c4i9CM3bkLGQ9ut2G5Ckrv9x495LqKdDs9t78TEHgne7RRgT4mrEZQTTfvvYXMt",
  "key34": "3LqNTm2sdNBaV4e2pbM17wkLUfnwrB7PUoqVaznjQZRApcY3rmdG9PyMho37aQqWzespek4Ff2RteGeGpeKJWxgF",
  "key35": "D3ZUJdCmciMPRkrTKu4t1n3xNUkjzjHZdgXWuqdLJutBPQfZz83a9Pz7fZvuHvaJ2x9Ep6BM3quFqT3aT6puMdy",
  "key36": "2fdevN2QV7iWCMWPgCwZ87C7dXV2wMdSXoMZ2bonVsu8eASzSXEGrSXQouzirqXyMi2eyZDaMKS6nkJPaYkbcozv",
  "key37": "4XZiR6fU2kE4nvmzmXAthJ8v3PjD4JBsKy7M7R9dHykencz2joQF5aaqGMvvhz7yg8Ju81ZYZPQcBF4Vt5byzS6a",
  "key38": "55fKAbKRmjrqTE9VYqq3hDiHEKsUGNxww8dzWdSzcnjkE5hrkNYAtyKKEhGeBjtUhWDiTVn25yXf2mWfdhSh8MeJ",
  "key39": "3dfsG2AEAYe8nSptiPbddGvXVn1xX8mn7s5mKEU51RofDWeUsEQCU85hmEB2hnMk4g5SeXszEhccgVSRE5zgSwCR"
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
