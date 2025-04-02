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
    "2xFn2hdMdBHAEz18saua5MCX6VgHuLAfC64LbEBjf6FDcC5h7HNoakLvbmNcZSimKmFLN7BZBFM6Pb9sfyEYJQVM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zgLLFRdaebfew87Dy5QNHcfky4hPhA7VUFuymEYZWKKkiWb6bY7B7b4DSBUHfa8nMCxw5TA6zWGv2DkgAkJFC4b",
  "key1": "3KH3oThypWQx3npkfcUmpqWaMbPdj8oooFhreh4gm9QgNvG9Up1yUCHvwNHuN9TR8K1bWnjMfHUoWeYwoMtSYNwC",
  "key2": "31fqmRdTLtNkdSvwHT9GArvRFbcM2j7X8T95sc8m6oKbAgrxvoKvqWM9shcaH8wVELZan1fYce6FdkUjBdYGD4HJ",
  "key3": "3qsAKK7o3g88sxcZ5Vtm4PXLf1HfzsXgXJwmxUreARZG8tMCNtu9dHmaByuqsub1SDwxrFtyBYGH3cgSSrBWsaBx",
  "key4": "5NW9pTiNEZkXtWKhk2FaLKjfpeDiYv6UzNqW3AhnthC1cTT7ju1omjQRrbKzsJHqap72smfYHoHyGm3G9ndp7SFi",
  "key5": "38aDNCszHNfxHR7ntEWnKNZw2vUEqLJftKpDEySu95r2kDdcGzb1CqjwC3fvgutyDdxbGPqDouRSMdAsoKyi2Jpy",
  "key6": "V5mQJ7q7KZ2MLnVgrFxVEWNaSWMpzJtQTiTNtSTKyBFQ1fr3UwyfbTPQko1fgcm237Am68FKoFSaxuPKRxK7oA3",
  "key7": "2RpdzTBQM5tT3brHRSeCvrzxDZSueUeyeNeZ2N8kk5TZmbYbHaC1g9G6m7tWZ9VJG1Ui2KsoyHLf4fk3de68Bmyb",
  "key8": "3yLGpMRvuNtn76868fRbDnSU9iZibwQ718zVWdLoM1eJprgusVZmLFx1vtewJJYBC5FMj39wGHBx7NvU1mMRmH94",
  "key9": "ArYNo4KFMSya9R4mV88zKQfBvvoQ7yqdseA1ARE42zDtnmqnrn5ju8USak64wjof1E3v6sqeb7tSVafvKP19CCr",
  "key10": "4NyWESawVwiE1MWcQcjz49dfQ1XafHQSi48mcfdtgYdZ4mBFXAS4RLxA113j82Ew6nMrSzLraR7UTcL2QTENbLMD",
  "key11": "3G3nYK5ApsSzGBr4FGQXMs4NPQeXcaBdtMWv5SM6RUu9s5P821kmqr4CCJbLNz27aM1MqbK1S9mktvUhtSeTAYPz",
  "key12": "2MKh3QVUT54awBJbaXds1exvMZxwh4Dvd7FjEYWBGjWPtDf14qfnXDL2h3yPhHTc9SrKzxJjhCQxJKbvVKN357S6",
  "key13": "JUY6N5XNNiSvGVtinmBZB9nhDfaUXdk284DEU8uJvPA5bzCu7WGV7L7eW4AtPWv3ygN59yAwX1XkWMXTPUqgZUG",
  "key14": "5r29GiTVsmFZAot5BjaEQ1fF8Zk5nVDzijkaRi8F6uErRnECyy9eJvFesskZDRNe2AmvZn39ciabh72EqQabcG3t",
  "key15": "2AtZgwe8dmr1ZWexkjkAyXh4cvkzzLbjNdCN1CsMWugyUKns2Ku1P69rzzECoiRyk8Hr9Hhx76JT1qcHWUAsz8cw",
  "key16": "3ERnkR36wfRc1b9HGhRxPRktMYuvBU3dB5jvpxT4MvgT84EtzXhCRxXeHTWUcXEADXTMDkUS6fxszpQZX3RU2xz9",
  "key17": "4EPeXa2SNR6Aqt6CcVsiSBCZkGi9uqUNjfi18c3pCe8ST8v6sHP5QVBfZvwUvs5Pe7msVMZn7zGCqYxmi5gAKc4u",
  "key18": "5YVDFVvbc9m9k1dfmAHWpXCFuz9KjRqdehHCbeEi4VvQ7LfgMV4G2heW95EJWwTdteh9zZiLPVBpq3RpFXE4UVcm",
  "key19": "4ni5fUwRXc8B5X8QfphCVvSnF9KPzAvtM5Bb5SzH3jsxJmFMviz2VgjEUizUGHwcJjYLi7EYLbTPGKZ6A7MmXcKe",
  "key20": "4Yq6KkeYMS5j1gob7pqQU12eetkYzKEvnHobhyx9gbDBk3c1sbBsVBcGjdUECNDhbrNLBbPene3K4GSUXZ5tfFMo",
  "key21": "3cMigF7pmQ8ncQq7CCaLz3q7xvQP8jZKapi6cXYeyTtJpMfSKADujnCds5GFAUeJJGupvS5pTvWBiNRCXCsFuLG3",
  "key22": "4dLrrqVazTJvgnLwyjMutxoPrMFE2gsx5FwGkuS7NhJiR5ny6ShDNG3WBVMJpFQHUnzXFCnjaF5mzo8knZMkqNsT",
  "key23": "2mJey8JhgYucnLFeXsuGiPWBWrzbRJq7eP8kMHSUsm6HJvPJ5HYiUbSDys7MM5v19bWwpX3jLTn6Pyd49ZCZwEEv",
  "key24": "55RZ2WNwNFCohBFMEunmYMuHFCERfa41R3N4CqkkeE4QTgg1NBAtQZ1FBMQYgtzrgE5S3RL6F43zGfLV1gMXD2fg"
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
