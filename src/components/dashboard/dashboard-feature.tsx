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
    "3GyXmDBjuAJmP6CWxunVCJKaNBfDMJmUGRSZgNgyoPj3xTKq9o3vWtr2Duwbg4dupZQ2dk4W7vdZvMEc2dccwnPb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mtuwPUmKthKRwjfp4dHRXvmLwFSKG3ZysH5Ee6V6CPiCPjebiARXcMdC6L9fMv5iTNh624Z44ogUPrCrTxuXktf",
  "key1": "4n7AkiCocSyTstQa1M7B8K2ugU5bzW5Dh2UgRwvCy9Guq9VqbfgCHYJk6mHWtKf6tPbSBkRDbVk424CtyBe25vJJ",
  "key2": "4mE6PT1AbSceQZaQPzLa69akC1dJ91f8gPZMRR6WGRuKvKUHrc2aQyMfXZZ2CAkjxRwN77BjFdDEiCg6oBkRkUdD",
  "key3": "4SEDAJY3NozTxbGdDPwR1Y8LjwTwNwRakK5okqDZK7PsXmpPNGjb2LzjHn3nvCk8CyvZAJhpwJkjfpEWVJD7i2ni",
  "key4": "4T4CpHKDHxszCkD7BmDC7wxJ1CmQQjTHphyxfwmB378j5vA347GgURbVtfHPAc3wtMrXvhUtUExqJMTXETSXuzvD",
  "key5": "5obYxE18swJzBYrgGhBykY433F4cKEry5vwGWaf6McUPFaCp72Wj82eeMUqyHHAbDKCjSbjNU2s6VPiaLgF93mHb",
  "key6": "3kaG1DCQd7h5xJLSzJwWjwkzKk1qhC3bUMvnUHqshmeVPDXDmS5d7dKhBxQnStgmzUmGYk3wDgAo9roJvuwhna8F",
  "key7": "2zz45BYhZH3wSksaPbP3Y5s9tYTgzP3qMoFr3j21o1YYnkWT6FTkjtD5JPE8b78FQ6fChZzU81mcG5GLGjKXnYw7",
  "key8": "2wUaPLNFMtepGgT7phaTzXthqnqnWncTsjHaXQxqnTThvMJpx4roDhnVmNLqCMK6NPaRGo9EfGukWo7NQ4KbPxm3",
  "key9": "5Zj3kMmrryYMbiqGFyRBmssHAghNnECxnPchLB76cFAw1JWpAq6tYs4yibRrpyB32pUd7XWdiUzyNeSQ7tydpZEZ",
  "key10": "5NjWCp6iMjPUdZjBm8FoZGBfYhaJpCvR5M6d8qrB73k6kJUzap4raFGGxyc4WW8Gh76K9KupHWB5jvkvA6t9ozjL",
  "key11": "37HSqeiamowsqSvsvhaiXP5M2i6QFaYaYY9cguiYngDL1cD1deee1cznxfiQGxxrrEH24NL4oKNLyLa72ht3MiY1",
  "key12": "22uEy1ugD7VJBbFrVuAp3r6A2WAHQJMxCqJ24hMi6g5pQTtnxRmyXjKabksxFbkoq28DAdcryeQtmu3JoYLk4jiM",
  "key13": "2Pv5RonXYR6ghegAXp1zRLikyjBJ5Fz7XJHPJP2LR46y7R6hK63aQzis6XaTtH5Q2sHa2NBJ23tzybCtiHFki5RM",
  "key14": "2JEJaNhCRENnVez5hFchzhwGZrjxnUU8Aq6HL6WT5hcp3ZAeQdScFW3SNzcPiScjRELFBd71D6TWsMAsqosP8hFc",
  "key15": "3JHmiKB78FzDMCi54Vnn6hiE5pFZSZyak6179ERpDLQKjb68HSZt4HNx6wZBphMFvE7vCgjWGstJDaQhnuAD9rf",
  "key16": "5gULT8h1WrEc1cwP6W2n3sjamGXMpnyk5D86Mq9kvALCjy7K4pQnjM7pRyHqS5qtq5FP68wupmvhegdWZCDxWbCz",
  "key17": "DGcNTrTyFpifREcsYpBoCQpyeDT2ao3UTYZrN19NWycqGB5mtB6pARq8mFz28SxPSQmJ4crxyWBk1cac6ZFYmbA",
  "key18": "W4JZGfo2tdCMPhyQNeUY1Exef7hXgmEtzY14bXsCmKWLoQ3xPrWxLkJsfYMU1qAb67ZFN4e6moQ5JMhgdv8qSd6",
  "key19": "4UPiPWaMKVTB4E3hGueH5XzczHXGkFZ5cU32tmQu5pzQob9ZnhsRQi95Ctm9TYKH2jaKztSTAuTdbxeSsYpFEsP",
  "key20": "4Ep5nuhisU7LGozgHiEMj26dWJnUhrdtnbhNuUwos1VAwXAzw4aXzdaRoT1RkJCRiXZcE9dzzSAtZtp4isB14LDJ",
  "key21": "2DuQuwdrSQrTBBD5Wbqmm4bACQmyWjgFY36j9bMc2Rf9qzif4H6DZoMp2QGe4XUNYxxx3wzkWrgYuAexQULAYL6D",
  "key22": "32QS4NNJPBytWhDkA1Y78EEfhC7nYsnPMPLbv5ZnT8or7hSs66B1gpFySC4oKeGNvjCgMtJ6xXk3FtjA4Hf4EjTd",
  "key23": "5cBy1qWrfdJTCcfGY5xe4aaqf8ozKhzELZrTVgLckpskC2XGepznfhYSt8XZ2K7wjSd6jqvMCyY12GzWdEN7RRgW",
  "key24": "3tTCQGAnDBPqfqjiyqvwNrXBtRmoEfTMpQdrqB5upU1SMhEENActr5Sv2R7zC51RdSSq3CrCNHnSHjEgLdTHV5G1",
  "key25": "PoYQgkEauHmRfCqg8Cdvyfm5kdSnyLoDUsTDr9HLvZc3Xi2Avedo22opZrtYLoSXkDBYjS97BR9ByqjJX2DWdMN",
  "key26": "2JGY6bAoKtddQVYXEvjpdDNhoNZ8FEADCqPMf44FnvAnTTjuBkRX92WoLfVeLYwPjpqYk2FmGypFJPmVMEu3cCqE",
  "key27": "5uaSKoX8SZrjxetYpiW14mGvbCaQr2GeiDm1oW3au3WTXCwRgvWcBRFEPFTgp89HVbTdy1YXBZeHbDQW9CRGfuU8",
  "key28": "2kXd32r8uaDDkmNRjzkoNi6toezjX5jZ2JsD2FfVonDDgTxAsLyntNo5SHg1NVdxyimQW3qb2RJr7cZD1GXp3gLt",
  "key29": "4Viqu8kD2osAYJNwLkJxMToYptjijh3CMSNmHgPmBwQuErgWoX2hNDhm9GB7e4nKfCo8efcGc7VzhPXnHPP4uoAH",
  "key30": "2MUM9erTspFVDMM3gDAvKRjN1Dc73pnH34D93QNaboeKfy52RXL8xB5NzHTQ8LbeubohC4m6NSZfuetG4wjpj6ZJ",
  "key31": "RHgMeALTjeugumqiTVNAxW6NPxF9pCov5L5G3jyvRcVferffppebdEwihAoBtD1TdQv3oiWygFwZ4nTvSXxV2SN",
  "key32": "agAdREHV8Qjfaz5cW73KgzfK2AiWz4iJ1S2xpKDK1oqi15cf3jd8vDNF2iNZGcFEN7ATsgtwabxXLxwCsbabRwM",
  "key33": "3EJ8QFStfD59aVhVVNnF3qhRM3Wvwgj9vEQSRDRMeSpRi1QNeraN5ftYtM4xFXzyFmoaPuiUfTojQ7rMKvTM7L8n",
  "key34": "3EatSd19sGci315nH8Cy7sWtNFFRHtKKR3xguM5FAN6x6dC4XUL6a6urSMzqz57oGKvAACSiXhZ2nWphLkoNnWD9",
  "key35": "GA6ZFL3RaihFJtRAt9h236e9dr7BuG14vJmNS5VTEj5t2J2DyhF1dZPucwhhYe6qZgojJsyTc4D8VGFFa3BRWBw",
  "key36": "3gncDG8KfJRNjv75DX3Znp6jeT4wssgofhHhcAbVEEQiEm2sB6ffKmpp8RBAw7hEmSBoG3a6SCr7LZrqS8pugiSx"
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
