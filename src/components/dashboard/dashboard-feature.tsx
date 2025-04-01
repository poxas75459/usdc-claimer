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
    "5toJxHSjaPMDNNs4hA2KZdhV97LM3sBnH45n1s59xbFPdAnJC8PYkieNWsc4A4oHXWxDqsXU1gKC4UCCZ4AihMxz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2StTFppy5j1fFJzqfUFQJri6yfJTHtEcNen1sc4Rr7MnhhWpMNpaqJMpEyUmmJhzHWzYu7i9ZxfhtB1ECbnD8xxP",
  "key1": "2SYmhitxAHPkMqff1DktVN3JUzhFsfgtmoefX2m64c8Eza6wJnoez9g3A6xgw4Pmk8na39dywzbNZYnbnD8TtzKz",
  "key2": "64RNu8PfXyjH4An6xiUWEs8XAkuATPkBCBvdcVErLRPqZHEj131opddRH8ttqupY4ag5hU442XH1A1VWrL7k5FzQ",
  "key3": "3SnZ5fNc2nhL6Fby8oMz4PCFLoQQU3ymR29fuTSwhXRQCg1ivNhhBWFibpyehdYwHpryL77qKaatRvdzgDUfmWr4",
  "key4": "4GNgAKuTobWGixsyL7o3VoGc1E6Ahb7Uu5aTr5J8DxgYQ9QwAFujSNKPWVPDSAk5iRMHRnueZ5JznYJhxwwakmJK",
  "key5": "3ZR4zHkqbYAKMScA39Uep62jYnJMqH56d8z7VFo7eJsB4sQbeAZ48j9fTGDrsYp3TTcvMNGbzjmVbBwKDk6yZ5qi",
  "key6": "g4EdY6AUYDDxeQiiSEzqofj7C4zJGo8PcU9RYKFZEqgZjyhvUaAerqeoXkvFj6ZwQkwcVtxnSBxtCRbqo1UPe2Z",
  "key7": "5Q48FAih6hwEL2PdsYVn36jYdGJBYm6AVxGTfncTQiuRGBbSHREd89zaZpBN14VTw1ZH8Tx4Ce1LP2w5s3bijoME",
  "key8": "5AYEMVd2tKxmh88RNGyyAJbzekx3MTEmDVZ8zcdfBWbZ67phtCiytwpa6nSD6HTmcKzgD2hTAfrSWqVaAHr8rcNz",
  "key9": "4gErMyj29J9EbdURqvpdz6ta3JfVHFv4TCUySEizPAQVDGHiSrNpHv2Nmd8FfhDJ5KFqcWXCNTn9aei2A2U2DSKM",
  "key10": "5P2kHkcW9dVTus2rJrSi8zmzyYwUavuEdBXUqJ8YeuHVHBnWzpemUeN66raCE4XVs3LuFez65b5KJHnH4JNpJszN",
  "key11": "4UgY2UkSBfVKrU67Yk87fBTUTgd6F1eKE7nbZH8pkQZ4zPnKAtkZMxybbTEtyfB8P8pQTuz2h74SH7vAdEzs2JFa",
  "key12": "2qtefJEMKuzTSfwNNnbeio7Qym3Eybk5ZcN89wkhciR15mv1S7j6Gb1WvKcsp6PxzzU7BhiymBWEc8izFh92Zko9",
  "key13": "5y6vrrixomR8YDtjb7pSHSseA61JyS8oPsK1CVgyXfKR6egKD2Z9dMZAgW916uhx3HRCaCaDYsGNGtJeJNJzxFFU",
  "key14": "grvQLq4ik6svx2KoVuJRRSfazJ2wdvPJapSMk3in4FHRdZoftjFHBNNyVkmvfBV1RL42YnACtJzKZDCHshGsedc",
  "key15": "4CCvy6b34eqhGnUca4u3m5rotK2524g4B2YmU43J7b1iHvnGqeQLbsG5DFG6oSMd56vdAG4YSdcpqVPUTiaamoEv",
  "key16": "5xZNegScWmA27fwUJf2WmzYAmwSzpKZ6Y76eYPM8k2a7SXq1wnuJcW2ncCSaj8Un8jRqZ8qTyC6iReqikV8hud7c",
  "key17": "4x3VZWwcoumMT2VnWsmvWtikey5wPWSbMwTFUYqUr6SZpXKuAsx42Fzy6p2LkTHtiUE8z7YNxxnVApQKW2t7B7TW",
  "key18": "4xjaF8V7ytJvmMVvZqnvaqUvDY8RJZwZFiwwhuPWh9SoNxzp5ZQxpMwMXmdap3ZB7956YgDJZL7GpGynk4USvtu1",
  "key19": "5w4buJYtaeVD7Phum4AfMMU5vHaAiEPG3frNpMN3BbaXHMZLnxYPkKNbuiYSYEfDJSsijgvubS8831tScBMRrDGi",
  "key20": "HSuQSz286WszE2yGrtVPM1opWUWZc59SKSn24s97dSVHRp43nBey3NNcCqmUkijqDCcffXgYHW52PN6DuS4jsKy",
  "key21": "66neaoJuFUXNW7dfzVSaaXNXWXEgmAAK29jXBZBKD798TKubk2yVd9any1i5BZWXV4AC7ni5YXooNwWs99P2gP6X",
  "key22": "2ziDJUQGUt6Wj7n9QKRg11b8YejPxbPRUkRffynJrLz8A42XLsb5YiTHLnGevFtJb4LMrAnjccY62b4befyWagJu",
  "key23": "2pwHBe8BZuGsDsEET6VEmsM7U9Z5WpmHcQKG8W3RR5oZzDa5xvDRYi94fuHi4mrDUnUTbKpgPUrtCUoSTrjW846G",
  "key24": "2FEmsmpyYYDWyFoPC3nXMCe41RzqyBc2g4gNJqP4h9xH54AGMRRm1wqs2zPbMYLv73Vq2gVq1R9YZdrKhZmijvpE"
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
