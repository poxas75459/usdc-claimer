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
    "4QyJwXX6DHrYXvV5cSHtsT4rf6ZnRqP1z3svkbbG48VBJajpgjvTGa44nKmZ7ecX3rtz7VBRgqYTUvWG7b4p8pM7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35oksaMtYcwF2cHaWPGUu47Vet12mFmCM2zEWFPXioxjnjY3NgFqtrWrkjXSnQTczgXm49kEavESsKQqsxFH4xc9",
  "key1": "2DrhHKJ4KF4oseiSMhWjrUX8CtexRpi5NoBAZqZ1wmV92jLS5rtVpaYZxyj6UbR8t1o1EzW4puB7WJhnnUoXt6hd",
  "key2": "5zomVKL3APe6qodyyXaZAuSwySoK3fXx9KipNud66padqX9pZPM6YeVdYLJWPQP2DJmNw6FQiMxEWfSMUrY63pnn",
  "key3": "42BGsnokh4VvWQbrLARHygm35fQfx5LhF9p4Ek4JDecVKV1yXVrpLFae4VMsVVXTQDmPxQz5bWUaagcWFKowWap3",
  "key4": "5YCcMPCvzRKX4oucEs2XUyufcsB2PVYC7moMQA5oD2TKdigMonBEnBozc2W8cENbqSfpr7Ygi2P8sNQDXvHFEA82",
  "key5": "2LJ1h7xbtiwhmBSLFA4FmCY526gyLFfBMiy39WQdR9jfcvhcsi63DLhuj6mDF1FKSrwMavKCpCHurFK7vyP79SeP",
  "key6": "4qS36nqDkSKDt9n2oEj2aGitAgmw6VbgaFhiy2KJkCcMWD8cTN9QpqobNwr8qC194XmpcqFfmC4RBedzie9N1cTe",
  "key7": "3RVFBVmXHm1w51pecWCcLNsr2FU6reHJszLgXjiEeNDw5Jp73j786hyTizEFXgStvrwG4kgdVwpgmoDFp1xyMn92",
  "key8": "4yRFGLHe9c6bxcjyG8iNQE6hDGDL8RWq6AN7JPWWVCTEqxRFFfnjHhFPKMsAwQuNz1VczjVaFdaH4yLZNFYnjxLU",
  "key9": "2Y9iwiMrWqjSyJEPyb93RbxceBpeP7xGtFHB21Y1SePsd4zdsFU66N5e2G2NDHsd6futqgpaKMVWzFnbjjc3T8PB",
  "key10": "2tnAeRzUX7zteWcgUizFgV9BosnnSTTtaHBprf98B18goXUAr51bAQoDYM7M2eC9PsGHBm3TEzs7wV1xA1fs9uK6",
  "key11": "4uYs1Pi1JrSvc36iuwNfJV8zBkvhHJNqrgrL3cZcRD4n2HgZJrMEijgLcEsvu44yTdLznpEbbn3T6KE5aFZgweu3",
  "key12": "tovRLQNNiukLP2FMcxMhjwJZCgnpstuL4tdaV7WVEAxXNrHF8bx3qA3H39gNyixuMsfVR61gi5xyamSNaK9MgrT",
  "key13": "43Rjy6jSQZ6v77quQfS4MKs6rmL7CY4Zeu2BS8TtVU9SNSwfFFyKyA1nyZQJWi4KBCfKqFnbo8HiTaH4WMp1JMZ2",
  "key14": "2tBYBMaHAusStmPEm6FnnxCwpLtDboMwMo3r423X4N73vLvHeaTucsdMFzy9gxJQBWBF9neujn7pkAL7NoaqqV4w",
  "key15": "3cxXAeFAWi21XfWciK2g5VjP9eVm2fr2w5FE9sH8xGN4i5zuR4ShxwDYzWfjMzHJor2U97Wv7vGUC5acoEU6KYWh",
  "key16": "5EpzbJ533PZ8JRtZejdMdgSpTh8gxVvZQFVp7vZVFK3pvFXQJ2VWx9yZ1MGYzp9jhKYcdAJkSpAhpouLyD9aG2Xu",
  "key17": "24LgrHf4sSgo3k971wYjmCSRuUSPPiHhkNmqHdfNisTks2rxGuA8P5ZrLCAtJN8ggoSDzMuQxAiidQkmBa5gE3rX",
  "key18": "P47JFnvRrNJoQsTX98sM9Gv31YjFbeNDgEBkub71ExoPaFgBbJiBLWrMomoXhzAN2wcYLuxPU7AkL2qsvtq8ErF",
  "key19": "UiCeGhrxbutis6FxD65jWDiEixM3XNv27ZugXUotyeMUTEMBeuTuPr2ggBJsa8YCvRR6Y6x2dqKAVg2TKtpEa1Z",
  "key20": "31MUymghG8HkYnGPUCEX2mJ8jWcM1PoeMjNb5Ezr2myT9HJRfCRWcQaVidsuvCsjYozXtf7fUbrHUo6ARvWtc1Pa",
  "key21": "3fwMT3x1PgVne2PSqd1mqHmd2Y4hmnkhbY19wjD56UsgRBjBrBTnZHe743QB5oq8cUw12QTmLKfTQrtKhGohYAw8",
  "key22": "4tbx6bxSx1VsxkuC8YfmGjn6zzMhM27pCN7DNGymNDfz1nhbJRWHgMGkHYb2jB7Zka3RNgwsgAwP9WNdLXEceRo4",
  "key23": "2yTwi9E8EHTKbZe1PbgPP8g6RJbxWiTRfWnYdk6UgSqR16FVXf2y77t16URc7P6S5z8vJQQScQ73EeEwpicRHGCi",
  "key24": "3kLhhfEQtW36UHsBzPxEPa2SQFCy4WA7TDtqpo5FuDqtx76gAdmZrz7qzkoRBxbcx7a9QuZRe3mkLn8vbYq2jioc",
  "key25": "3Dy2NGsnJE2vVYnbQfwNiSbxEtqog3VPiBeZEcs785NNud282A7mVNkZpgVpTr2mbHowuLhMgSjnnFPJ4BUBWyKi",
  "key26": "3sTZWxWNDnecDkxV42iZTzo2NNSvcsYE8tZWiv53xid63DDWpoXVTQDxxKTpxigFUHHV3Jiq9NrZoj1cvPBfhSBW",
  "key27": "5t4BJ8hazVz955JtT9B8vXoZdsS9hCQhLCsTTCvys8foMh3B16H7Vhe7pzC7UmMi7W7BGcpcypy8WyEBKKvwhcMz",
  "key28": "Z9epDPRuRmUi9nA4YY6iNn79kf8MdVKsF7cKJH4Svrg8f7aVJVaXWV4DPGNicm9GYy981HFTQmn3fz2uhFv8W4S",
  "key29": "MDEuhnNu73to6HTGmqC3Lttf3ASpP7MboxuPqkJUrzLo8kAqqKGqEsFm7X1fXzuDghBknuTVr5CpHCscn5FGpxo",
  "key30": "Hp7pDMieTDmf1RMZfAUQp6d2GhyxBxybZcuD5gYdwBoRxQFksxmTjmDm3wGNKMmX4G4FmdPgjKLfUL78mHpC5Fe"
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
