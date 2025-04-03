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
    "KvEX61a3mFEFmMXg9iskmUamTyvuzWYYAPmNxdjnwDXeHHikCKaK3Yhzvaivjd2xoMDcf9JEsNrmaHCwfsoTJqF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wy9NVseuzyFYrkbVAewSbfTvtXYPJah8bVhWyoZ55aN58wHDxShSSYiB2RKuTUAxqYjJAx4zqYhAchrcK1CFjs",
  "key1": "4Hdqt3UkbLwHVGsjBtknJoVSou6STgME4GapoRFdXCqYCCcMGEkRC51TnfWxwoo5YB5H1pXRVusLkRwASVfnvpbP",
  "key2": "5wFCaG1FM7JTQxxb9DzKmR9m7kSxLufNz4wmbkoauFSCT3R9XXJwPp1U3bjQgQ5w3g3PBhA3sNuMtfjipvu7gv7z",
  "key3": "HjV7NuXHfZdEWinWkpkGWQ7LHBmRjtHyu9TjN8GNzrn4ghgemFLbwt2HgVQafuJXKLRpEKrmLsRTVPh6qHsWTeA",
  "key4": "5C5FTBU8jrpyUtE7jxKFEEW3xg2tAcmos4vm5YPnVHGTNtpqqx9tkQJdjn567q1JCyhdSfLjG3PQ4ZN5PCTpyp2P",
  "key5": "5KY3akzxpKhGxWckUJwzSTjFFLKty2ZPsnTGBQ1nghN8JvtgCoW8mrmysCE4Y39ec4ycyVkUEttMKKQWknF8L9Mq",
  "key6": "2epeQUHHRhk3B17nKbhEzSu9a75eRBHkVieZnWwHyhGmayUmZoMPC1MDYogXZuNJUaPX3SAubU5WVCYG7NYrDGcL",
  "key7": "4ductYSiRvEXXCHV6DyU8d3iCYCEGfr2c2ApsuTeDkmUYArjAzXFsdCRG98D63Eza17UJccAPSnWYd5A2YrHYouy",
  "key8": "5gAgBxKzmHcVPDVFGiRXw9TWHCbXb9cSPyW9FWbizRnGujQE8aXUoAB1WpcnCDqe4C3Y382MquBzGuGLVcQUGQZb",
  "key9": "48USVa4ihUXfg49tGm2By25S6o42YAWq8fMeHk8W1Aqn3urrABXMujBvf1TfDG3gJqQyFmvo6sEVk412bEd7R6Cq",
  "key10": "5Me8eeKPCG6XS58hdU1wrBesibjyPa3kfWiciediweXPb5R8nbymerSQajPdWhbLx7WLEyQbxWabwC6FRFYDwdBo",
  "key11": "3bcscmAvmFgYBREXzigB9h4tWmSrJQKJmv11Mh5Jzb1TZ1WHiVwSPonnnXEmvxKYVKTvvj2pVDQ6P2enqZZyzToj",
  "key12": "BSU5iyCMqzAnEkwP67nFp7sMUqr8AafCAMCFRM8PNrxCDZLZgt9F34gGTEwSf6HgMzPs6XiMpfK6Pc93CW3RuRC",
  "key13": "38NPzNS4xyYEC92xG6zpSMkZEtL9B3yBNHbDNsVnJqhUqLgUYjFABciuShzH71LhFDVRaE3cavLohadtbHXA2ShK",
  "key14": "5wox8EXcLoBD2oCLrVK2kxmXZPG2T4XhXPYYgBeWLpK3eLL175nGT1bj93cmcSKzSESwufcLf4E2CHgtwY4CTMkb",
  "key15": "3CAMg1uv65t4EVBFPZTKVqPBCmc7myGZ2XcbnVDDKExbU8aZHiBrzJasnuH5ybp48A3PcgxH92CFsN8PTy9Q117U",
  "key16": "4NLifhLheoPzqixbSAKDidjaJWJULTgkb52hzAD6WSxiMG8XPFzq8BJEYFUPNPndr6MFJLLJHaxKBLiCmMvTeGjk",
  "key17": "X1QCc54H3UgJDpCvn5HqCGpJAvbSv7pGyb4CrTPXtJaGTm4CiWaiQyAt53aprqAnxqm8QnT7337tLizPsvGRLyC",
  "key18": "5Jrf4kjAxq1uvn1Drfb6qfRnVSh26vUbj2aTvnfkMT8mSW5tDZCes8iJmrRLjUmnwziYgf1TrokdiExbQba7Gpp7",
  "key19": "2KvDf5pnH3v2Vb2tvcRbNisSdKJNYmdMkj9NGrdn7KVsVJxw7iidsi1q38k19DTKrzQSAShJF7BZcUoeuMBSx4XS",
  "key20": "3sUB82YPgpAhsssLAa1ZnntCfhhNScWJrG3VVCciSLcp124yJwQYiCNfTf4FGuajtiqtvroN3wkReut6BFMPmN5P",
  "key21": "c29BykfRnjzsGAgAcG6pb2aKhbZPXHCQJ1kQGMAAXdfB88rcQx6nWJ5JSY49Jp2VHfwrG3e7t55RdJNuonmLn95",
  "key22": "5qnofPPEVq1hByJS5hoLH4Ge88FszEagNoWHtTuDbZ2KoGwGSXfGE9pjPbMw5AwwCuQQ1QBQ7LRGDMBHnGPwhXvC",
  "key23": "tMw35VnW7SvXLLAug3TqK67pVaUGpcFfaM3aypPYyA4VhPRrAxagnc3pUApJUn55QCBsX1YfDaYTn7BSDMzsH2h",
  "key24": "3d1Qj78cGPUsLgbtdeGLECBc19APTMPHUJt9EWkZz28mXKWSkQG3woqRTvJyVf6m2cKrubzBEAymXSNfaeCgutkc",
  "key25": "46yxjnSv8S15WQ7VgNJjTwq3PFWJv9G4yJbLwHsb8jQAafu7M7gpfEJT9MF3JFrRNuadZiCBEqaSLbQpkh1eJ4jt",
  "key26": "2yhuvChqhQ66q4zv8UfYzWSFP72NP2V6XbA5FUygDtf4au2a6qsCsqQMmGPp8kXrzBLYfc3eQYMXi8Mq4BZXNLJu",
  "key27": "2zdL7bWwiNVHk3pp9jiQox2z6oGiLP2ewRieEggsu4eNe8Um3AUb7Jjt7yYZVKeeKsUz3xGvt5PGWWhGMNW5RJST",
  "key28": "2TXRhZThjWUHRMnJQ5XYCK3gUyzQzLYo4d5dDJLLvs5iCbQHCsPiYgFLrgU9UafYxEWvm39AZbArM3UZ6jPSSgE8",
  "key29": "4EWmgn8brLADRGS6Ao3U8SnDWYamzrxZNorSqXqPdhrmGvn7Km8wYmPqkmuBq9YDpV65okfvCPxJinKsprTeF71c"
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
