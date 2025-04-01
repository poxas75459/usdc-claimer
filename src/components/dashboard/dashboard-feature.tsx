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
    "5w4uCvH8sAV7VdYBypK5bhZrj2YJWvxtQZ5SNFqobTBAdHkfGN8EPESV9nLnNhXhYopdUVTrPmK7woSc6kxtBE8a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pwmvp9oybbwuqNs541n1FcnN4thALSqrwqfqtTDL3LRPKpnEZmSyDCridZbM2zh3y2t5d5afo3kkQdUnCdWJDyA",
  "key1": "x3N4d6ELfTESbi3qi1bn87L6zm6o6u1UiA6tghFu42G9WChXNDNicSTioydpJenPywXAVLUZKYUoUBNcLBvsxPK",
  "key2": "4qufrXtiLd4wYg6n2BukfVypxw9xVS3M7Emx3JoP2zBrJzrmX6YY9bbLdxLwSV3YCcJy2mf4NQK87gw9uRvia3Vb",
  "key3": "ximU5bK2toX8r8YKFA69pkqHZbcPBcVLubdKZXGobHjoxB83vMsXNzF39QpR1yDPtGG5w2uN2zNsNy3U76KKF67",
  "key4": "4H2thysr8xdf6SdcgEURpBZJA7E8GPC7XGEgf91kNSwscbq1WNn3zVTMmuHu7x4J6hA28ut4ExJJYbHkUP8YYoEc",
  "key5": "42H9cDQcfWKp1QQT2X8y4p33bA9pCNDb58mr99fCKNjw6Dq5ESjhbrzK1VubuxsAHSJDsMgLf1uMmEice9RJr9yc",
  "key6": "4goQ2BYM2NXkyQabKPDMc6NQMrp7rtc2MKePf6RAo72McQBVTDSsBDVMpHQkAPcEmzr5bYePwpchm672Bj7kbtXF",
  "key7": "2YKdxfDQDqdCA5NPGg3bHBFEFWEsiNSLbsebczdnsgbrjaNbonK5xPAJd1enEw5srng7yDkxjhjLV6N3H4aHBn1U",
  "key8": "zhhDZ4xLxeasgSJ8yD4CsUr2GadqDyvbTh1wX524vx3tTNssnztXUKSfM82WFiYxyq6JZh21dRMkRUf99i9wVKR",
  "key9": "4aiTCb16bck73RF8LVPWVnU22iu6FaTBjHWwcHw4r7uB2mL3nsT2EV7pa1GKUvTNm1YCQegJLqEEFv5UKP15L6j6",
  "key10": "2KQiy951aXyMG3vPq32RUuuTDMU6brhMsYMZPvZGySfCMCog84B8WF398R9Py3cNs54MhpTRxGHAAzhRiWvH4MrR",
  "key11": "ffNutkqVNuBbi1cLqHRGK5a3Ki2ypDbwSQQfyYJs1ehyaSGckd1ZFicNhYRZKGz58ETx77mWmSgZoLdeNQoHZw6",
  "key12": "5oeodVMwpVfFjFWsuPPSiAnPYjEGHcJgz31FDTwVqQhGw7gohmarNJ8Xrc2T7QeBSBAnE8wMNWkYjnjdUnnPUiVJ",
  "key13": "4exKHyqEZwfCynBqJj1LjdgmGwdaaCozKpXmiGckGRUxCYeJnNzUd9DoN9fCRwTyiKcWsPUMCzzdJdajWy2D4h1B",
  "key14": "4sbALzgrjGurv1NCJfhnCQbu2JediTnjLTSgoniZEMx9tgrAzP7VQbiopJDbKBrWia6FuveYPTSEYUuBktkAUU4G",
  "key15": "4BjxbeB8JxKgEBA7LSnSpCczzCQ3RmLUKRBbH75FFw4gZVaM8FMscUFB1hGSotVM7TXRzHZxM9Ko4Z3spMD7SESU",
  "key16": "2mmj45hHDSWdFTyJjVK7bxJHfeNQAzoB2v4A7kLR2SyqCJS44D7UozEAxi1HoEfr6Mh6knQGs8f967hxF9ppDs2i",
  "key17": "2hS1d5GhX1a83VdGFAdxsZoUvBMcS1K4Q22gFbd2VN3R7ou1kZL9EkhKev5scnQvuExPhhrNuoSRzNBwxXP1gHzf",
  "key18": "3Rz8BwV9FpvQkhKTJMJj2gFu2YdZCqNBXF8oH1GLELqoDQvdXQkLoTykzw9ufH4Yc8G9gtPH3fneFD1r1r41K8nn",
  "key19": "2DMexPkk2pahGwkcQK6NdaA1ivBRBzZaWX5hrjvgePJJt75G51cyyToCrUyvH9wyufkDFJ1uWwxpxr3LC8YD4HS4",
  "key20": "3oAGFN1UHA1zh8pVEiahJFem3BtaYgPLtLt7QAMT58qEEeoBXfkdAbJZF7NiETr7ai4RJBjRMTspNJTgYAURx2cr",
  "key21": "5paHk2rUXGAuAUuDijC7HdzXpWbVZwNNxa7uvTvbMcQf367SNa5yFFds1DCuo5n1Hz3kc2iB3JQhMRPseN3ZKUb5",
  "key22": "4qfSxUnrUR6NWAFLVADZMwPc2MLJCe8PX1pbs38HcG6wXnBBJEiY1iFBoXbAFzCZcdqfj3u1fqtJJpPpQXrR9iMV",
  "key23": "5MZH7KeVtD49pZwmP1Vs5eGrK4ULJFKX2PgoL6tgDPRZ2kvvVFYoJ3mGzwacqWSSMNdYv3Wef1JmrBoo6SLR4eB9",
  "key24": "5ZLc1UN84DDG1DykB6nWYzCf3ucbWfT3jhfvevQaTqeAgfZcKV1WMKhzVSVVUzZDSaGxHVdWC245V5VhBUu778zT",
  "key25": "3DLUtuepdY2okaU7jDaxRUpuAdCdvHhZLZvhbm6GqzDFQMZj18TtauzTiGzcwXfreVnnojHbNSrNF8ynZL6n3R5g",
  "key26": "2guY7zbCnCkJncz91t8WRwYxRiyApKBgkk8rpAQJd2Mv25JaZj1LDEB7tbaEV5QntAUkTi7tfgob2nVTZRgwrT2X",
  "key27": "5Fmrc96L2t8Pexi2qAZuAvvqKf2xhgBSKjRmHavQUnnMZ7CYkH2uj8w5Z1BbfKnHr73VWdz8zh4GdYPQHNDsZjEP"
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
