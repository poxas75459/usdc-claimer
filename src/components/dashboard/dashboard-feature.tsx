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
    "2QNw8L5tJR7Lda8zRvzfRNDEMTZJQC1NCykfUy5CrWpYUH1vbGZZKhLtd9TVhozT9qBEgNyV4M2VFqZLSEUwEr1e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uStQr7F3KVvUJV6cpXUm6svowheMcWJiKRrs4gaWyADLUSVPmp9hNYtGi9chbFs2BHHfCqpuxqSSwckUALfNU4m",
  "key1": "4shQJQy5839hhUBMLToLfJtweTrgVkRih5XrrPkGECiZiUsUuK5YSn4dHgK2Ajy6G97ZNpwGXXMn8YG4BdEY2xUS",
  "key2": "26UvEmcCdRytD2K2pz57wg8NGWTvXzddm8CncRRZYBi2SSSJFuumfoB62Y3bGKgdXue9C2jLomF7VduXe1MyDMjd",
  "key3": "3TwL6n1bCneF1124LxBcpmAMsRoGriAaaEFwiMm1WzTDYY1HyrBHiAGeXNQGBaYCvs1Fz3NUY4FAWA2hxT8iS8ij",
  "key4": "5uefwvtwKB8Z7voe6JswMu43sbPewrvBNSZjPeGV94QD1eqTM9ExDwnULM5awBV2WQnF1qCFr6hYDzCDQ6pZFTuz",
  "key5": "5SpuG6iPAKixU1xB2kMGb9moES6ikEywcgGSmbEMafEGpC7iDUvQAhikFHMWibfZUfKjUHjfBtXgExKWdhCE4Q5b",
  "key6": "4gm4a5NvMBphehX8zhWFAcWGnPWURrDroZEmD4wS6DCmCk87Lx7G3gCpVHbd3ew6Ui2AtzQJaw2JAyqaoeiEq4yY",
  "key7": "5YBkFgaseuZym39Mz7SurbiU9uUPEJRYRvMq83cfbi1UJCdpTh5iM4375p57K1DpGAP7oBh1zK8XGEu1HEQ7goSA",
  "key8": "51tHnYp4so2wcx87g7GG52DSap9tqbDZZgLBBkusSs7btLAWgmFBUgF3Us2SYtkU5jJpcypPphVcoyxVpkfKMPyB",
  "key9": "EweGJdpN4BXabA5FTduZnb1c2wFTBodkL8P3wrqqnoErWUeEbrLgLajo5ChZuiFXREaNcv5geBX22JsomE7eCEk",
  "key10": "4Q69QhbhxtfTXGeUCmFRkrM4VECHheqDFfprhwUyfZK7L2gMT6nkuqNeUsffhzWATBPP4Ft2rSF9DqhSvc4vkRYM",
  "key11": "4abLFv1bKTcaeEbjVAVWGZm8rBmQ3GfSM212rPbY4WYh67vttgimxNPf77BGynBXw9PdKc1djvvAgS71d6E4cnea",
  "key12": "2DcWE6niUE2evjJRdUD6ojmkmjboiUnLmPnFpPquTZmM89coTPsbDpPPMFqm8VgEHVn7ZJG1ZcKP1sskALoe3zK",
  "key13": "4FKULtpr9hVgWY7Zbq1yMY5432nkLBDFijaZ3vkbYkAFvQJnYnLJr3YykeKEgg4Ker3VENyf4c2UC6eU1jCBCrJi",
  "key14": "679PS458QrNymuzLRuB7tXQ22VtnV6fzdfB6893KoJwP4yye7Bs8Sc8C6CsuD2VAvTyKxWvFHgJdQAYVtLexohCQ",
  "key15": "5qSiwS6fa5XsdSSA76maho26ZbdtRMKkztaJHGYV8UG9eegyHbXue1fmweZo8JGYkauj3wTwzbPMW8WqNdkLYukQ",
  "key16": "3deaW8sdVq6jt4eDJ6weA3jayRicV1V9UbxsCUEgzcVS2RSrtYf4G1e4hpUSA1BZh9fF6A9oqxhfC8TKDpAaAZ9R",
  "key17": "WzfCeQQa5UinNwALxj41M6BmGaHWaF8beGQ37d5DUatmuVY2ybL5s3TwLK9AEUQHzfkzc3shGRn2vGXrsoqXdHk",
  "key18": "4ac4s3vCiPcYanbzEyhkNKuChaqNjwwSSjLAWQNYnBpTzSq8vc8rfsXyAhxEJBKk6UJvx5FWcRq1xMDYtV9MZreG",
  "key19": "3KNETEfDf3U5u4vH9H1cacgbjSASdBoA7PKzGvC7pHGqhCu1TVPdrtyYc6CkCV5t62Dkn1BGYFh8rS5jBUziZSGr",
  "key20": "3PyMPLaSrZRfZX3NEyM38fefv3Qm5kGaJu3w3MQLbehZ9YyHQMoNbakjXGjyvhqhaZFS5syFjMZfoaDynVxExojH",
  "key21": "BJjcdRfht3E5AZMXBUTpx4BQQ2dDNRKqL6onQA9h3414nSm4zDj4Ah9TetfKrvPPN2sCMsX7KHVLCBfhENp64RT",
  "key22": "3E32szQjaf2XFVe6xg1KbS4bTVTuzAj8weeTN7EAGAGuXU7tCnUGPXeANywJQkoZA5SvwsEfgCs2yRTLYPuKnpe2",
  "key23": "4Mz4NX3z2tJJZPMAEXiKHH5cHy8stXLitLFmTaNPppyZ5Tg8FCmaqN6LQp2V54ctrooeAYpDs3RNmeCeoERJXQ6y",
  "key24": "5NJ1PCGJCXg4nqziDLb6pe5NRnFWpmAPamKBEVmzWafLCRWn7yqfj1u86u5Vggs2GrHETPY6jmxSmQrHru3QZCUr",
  "key25": "2j5DaNZRreStNr4EYL2X2HVHZmtmTEG4hGpZzhgrEkiuiyWRA4LDh9628zurXZNgVrkhXD6HkMbupBCBw22vyECE"
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
