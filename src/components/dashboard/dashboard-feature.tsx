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
    "63NUWjhFrtSGzzqt19S1GFDEabShEdfdg4wuZECpHhwwbTRz7bgFbdRZTH2Qz3cPA5Fg6cGhDKb3zjuq2gMWL2mf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U5mqTxFfbgt2vbuazrDqbgPxtutcNtZAC66amVhWdbdsWAWiB3XC9FWTo4wcGeu7V54NaRduPVYagxVfb33MejC",
  "key1": "4SUJPN5DvcVt1f7URMifDq6kz9cxdQizKASRTXF83rBc1f2VoHhfRvraY8FqhbbLLrbReQVYBhcg52UPXWM7DDGZ",
  "key2": "yvbxUYPidwvrG4cAwuHTkGNe2njybbwVQBRL79A21nmg7eNy7aVbywDDec9rfpB2evx4CMd68hRvjo1vcxjcsS9",
  "key3": "4HJ85CDC5m5zPxQxvE7MQPS386Fn8mnucYByCqeXcscZR1LLnpb2RXeM8f1TmihEUqUEqZ4MiCTNpSsJS62mCqXW",
  "key4": "39Bm29VHY28rt99H6BQeqS1RuKFJT3TPTRzxQRWsa3NPFfPrW4TL47qB4jfn1VBs5AE4V3qzSKBvXDokzznG3oDb",
  "key5": "42QutXuQkWhjjeML1Hcue8D5mMmdFPyBiWLosjNm3HsihNxUwjgieTop84jMsJ8vERvdtw4nKcqhzCitvsyTg219",
  "key6": "5aCypxN6imgaeknZMP6YDUgx9eTvHkCU7DcVH7vvag8DxAvs4ngwFL6sf43z4yTLE7GSWnRJJKbPyNhefEQzc7Jv",
  "key7": "2qSp3VtwkZxN1SGaZGCWVK7xtfivyi7x9BuXNSQT45Fs2T7ahKdFdB4rDgbM72HqKrXf6o2VtDjb4X3uYnAUjtyP",
  "key8": "596FiDfBymuspvxJshTubMa4wqZA9sV51FEzpzZne28chh5tknws5qExDMVe9e86E8xTZqpSkQomPKrdFTncryMS",
  "key9": "4qznNnkuHUDDAfrc3rB5T7VafinQwmK4W6DyntcQYb1XuFpSuWvfGymq7c77nXPkGEewRCp15PXZsYfZxsUyGVaP",
  "key10": "3kugu7SdgnkHpny3p5oWS1DvjsJwyF5nJ7UMxJDrFawcAsjdbmotmvWfU6Mt1VUnM4VFqx9ZdawzNrvpeYAeF8W8",
  "key11": "5yzhtsRArqAauAz5T6w6DPowFSjnYUJga74dUbVSFSeMyqWVyYzVLmh2n4DrCvEJjvGvgS4tinaivpGyPP4GbhUZ",
  "key12": "zYCizZrXGwBHqxo6NdDEWLwnTWj1iwT7S5pUKnsdzKgPAMttaVQRDZtc6YuDWa3yDFFFwjhvqi4ZFr6pMuWcMNF",
  "key13": "4zN98rabYh4D389FBFhVXdU2jFGAGvizDbkHUyxx4bmczF3rrHX9kU3LQCBaEMZnRKWi2X2esNxMgnRBDwwh3Swc",
  "key14": "279kh1x2Dg4tmWurkas1PqNZQJbPgrGCVgsR2UqjXmQC4RSuTGbEi5s5eybeoDQXPYtaotUVEL7i53ZfpKte3Up2",
  "key15": "32nyzzMekaa44uxMmpKft3Pzi45vcqyCDDu7B4XRDFghpmBq2DaGsLxAr1f8ciWhoVuN3NmkSj8dLppBTUiM3jQr",
  "key16": "2WULeEPLtq2wMSbmQS9BVbST7Pjrp5Myf6G7gRcHBsyGmd7jySCCvQxAgQW596rXDAxF2pd4s8RtJEVK6et7eF1L",
  "key17": "7wNdsyZ4ZSkduxJ21TLvzMpFUs9e7Gtp3iSJ82oQL4SUxyHzV8GNi8gtGfsDYRToqC5tFsAdReHhBo9KCBFs3hL",
  "key18": "oxZqxXFyGhLr4Rg2wxpECMkJJirLPRaYeeGyEe2Wfg6943fjQzy1pvVfVVTwY7QRU5enUMiiGXcCrf5L4Dryttw",
  "key19": "4FSKvWKoNuCkoWBLWsgYHpA1U8hQtaVkHS7FinmPjcdynBXhLLKREMUmPK46gWdH6ft9EYQmxPquHt5V7nyMxabK",
  "key20": "2Uac4YxYSYNx2M4N4PsuqxWEd5fpRxLq1FQ4euYSbxz435pcED28HoQooFyarG1Tw9VVK7tt78NU8FmJKQYtRd6T",
  "key21": "4DX37GbudDi9gHf5rGm8p1mCD2X5D2fucKF158bwC17rtp51dmA7xSMAx6EQzz9HVdBsw9toikWfy4rGW2pZZaaj",
  "key22": "1wjbDfCo3CB8DBkWYGF7Ci1kUVB91eP2VWt6hEgNoZeBVBVzvcVzuwYuxcy6AL3cJbaMhS42eo4zggTbyQaonVN",
  "key23": "5XBLeVJLBGH8veXxZuq19Yku8kP3uKBfGSSjxvkmP3pyicuFdch5nhUYnfYw1R9rht662KmeJW5Pdkq6Js7qwKEs",
  "key24": "2dhPfRjJdirdPEgTntFgGni6oGwpFud53qeNjAGMLcTsn6HLowqHGCw1eDNywC2hC9VY1WDXXHh7pUn3gzE1U1zG",
  "key25": "4n2rvgFGbtrKCbz3XR9cySHnaUpG29QcEb4MBXuwrG9aEg8r3oZ8A9uAXu8vYSa1uYBUnwJtriJZq2QSt7wG8DeH",
  "key26": "5c3MxQs3qE1qdjjvPyyxpn3BTbobYhz3SiybW3vr8K7EME73zvSa2hSKhupUVk5QGKnqsxKVV5Ny2i2kqjXd3Sg3",
  "key27": "3WC1cuPfSLdGoKEPype48ZKJL7Fc5daupne4o1tnCJxMSKUCwkfJg5fFSvD8xiS9zQZDqEyVidossFsj6pbw6ciR",
  "key28": "3WoHJbzupBHKfrQhAzvMFa823H9XEEtJThdEY8zCSXCZNLkaa6TdkLURhAib2J5YSHKMGfQxJAAo2Hu32LcGWsxh",
  "key29": "23b8oiKQN4cVFwFMYgk33A84YrUvF1nppHj6cCUZXiPHuK7ecNQbFZLKRqCyGjbfcaofuiq6QTJ7zuV8Rae3Jb1p",
  "key30": "32CFkQu1fkpgkxS2j8VSKiXqvmgTFPC5kEUVKUkkrhH2AnJw6z1Wq6yFMrX1LwzEwrjZgUk8g7FKEK6aG7tXeqK1"
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
