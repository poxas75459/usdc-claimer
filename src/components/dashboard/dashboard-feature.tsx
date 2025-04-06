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
    "4i9FEyG3BZitLbPHzvaVFet418gQ3iL1xnATnPH3CG2HqRCuAER6sLAStRFEehub2oafvy2soPhfyWuaMS1srhSW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3msaEYEYc8Tgjubqauc83VLuY2mLwEksmi15dF3sBRkJ6W3knQtJmnKwBLjQhkAW8SWunWg3p9X6dSqKz5WvQWpN",
  "key1": "yY3RUzy19zmn5Rpq1rDBYbjzmaekZrMwtdz2W6kT6EtVHua6WraEgwfReutoAsVs857bB7oCwXLjk1f4bqz8yji",
  "key2": "3Ho3CL3m1NTzD3xCtiBiDwkkn5zS4dKMAYKTVhC61pGccUeMHV1bpRwHAHtXJmBxJzDwFSs1gvtzjzSYD2cBjr7B",
  "key3": "5ZbW9R2rnxmJPVEYf26YRJoVH35GEnbwwrvCCA4aFQbYQXPnPzNiqMt2f7qYVz8BjfJc5tBMRJoVUHBHhvCbXUCu",
  "key4": "9C1yTCTjbu4N9cBfsTw7TowGfFFzJNtG6haAZYS1UpvKtFyzLEYAy9gWmVq3pYrWuwiNXpdugZmswoKwmR5yVsX",
  "key5": "2gnEjCszkbPaFRLPfTsNtDhMa5BXCzEtCjp1o2VbekQTHC56NUHBgyXE9HTJsRW4bADbvypb48FptzgQ6xj4foh5",
  "key6": "579bV6bEaBgoMz2Fr8wi6BggCdz7CHZbDeuJBswzVUhrFP9rpHn4HVHDB1SM3ieeGi2y4dGMWNgb9ciFGH5fp7XN",
  "key7": "4TkE12Lj1Njkx5su7zfPpSSZYXXmWcExZ4q4sNonYBAbvZi7jgmRHHHLh53jmrmvAJgx41bi1wgHXCzZg8crtH6r",
  "key8": "3aDe9tTTZqK2dp9qcvavjeQwHGBDYkYyQRUnBxeLqtAFsjyHSmQX7BguqZNh4YNAy4Nu6DAwG2afp58S1HLYuL4r",
  "key9": "227a2ZcAGNJctv8iT1wabgoTTArBSHkeHurnEMtz1tAWrVq7h39KnRXbX82vEvLGKSpEG55wCzLWnfJTSW2Fi98S",
  "key10": "522BWRZymYbJQk1zrjdyxziuragxnFXmHZhmFWDHTqPpmitnYbQJdsgBp5Twd3wSMDqFJxvTrzZXFSXZ4LGG79iM",
  "key11": "zNnwmiaTSuv13MtTcSsxAt3Fzs6dKP2uHRdRrEa8gCfHpHoafeEvDSQYWH5TYazG6rvttGhZqsMuv9dGQGPPZu9",
  "key12": "51gPGMFFs8Zavy24KHY95QMyyFZCeZ5aEWzNDVbnc3HDnJjj1j7qLFD6YA17cS3L62igneNwwYmzGwEjjq2c9BE6",
  "key13": "31Af2VYTiMBmPC63zTJ7xybitsxTHKtymf4Q9pBV6c1WFunfcALTrQ44P61hVZre5QxXbcADKrESBi1rWgjsHagB",
  "key14": "4u83DS4M2xv8oU5Scte8ccodKn1p5XgCYpfz6ENiT5snjXEEXXMMtncrg3UkKvc9yrG45WHJqoquqxiEHCyWRgoJ",
  "key15": "5fVDVrS6QXK7bjTzrgQ9Gst7m3pTwg44xWWCfamoT6S3Gui3CWuHmqeFKgbzYQvVAAvadXC6TYnEGPRHpu5HDVbG",
  "key16": "5EDnR8PoJhQtx3T1YkhCimBT4X8JbhTKoS5WK6CJUyD7otrjmwnfzhqMcK8RFrjcLp1vhFvsWLgijzPeM1steqDa",
  "key17": "32o7AzrYPA1NAJ8fKivRPZ4ShV3aYfVXfiM4EXxo5aNm8gaBvQZxojsgAdYTuUT138JJygHuQpnh7f9wMCthufH6",
  "key18": "2Dr4Wpe2tizF4CoeGgxNpaFTnZvs4Sc9gmGCtaxTjZjbcSsA6ViiYC5ukVuAhQv499XyZQtbECj92uuohQGom8mU",
  "key19": "5btKpgEMj5nmzvbxpxXDEKsxrfjq4PsJkj5Z7hVdTmu1P9Lz4wvsV8TBtYGH2p5htpZK82YQsVizHychJh7vk71M",
  "key20": "2thBm1f7WzoM7FHvtt1mNvYvwW2WSyQqgw4ZDAJVBgH5FewkRPUKNims5bHRNh65ows6FSjFBKvwheTVHzv5oCPL",
  "key21": "2YTh76qLuDo3GG3j9U9T7xhitoeJ7zHZWLXey4J3uHPe3xVvmcT54RC2mYECAXzZz3vsHXMPMjkLdag8HVqnKDVE",
  "key22": "281DE6JHhHpmSCqhwRXiam7m5R9tu1k59kV4K1sVAanG94bzQvUE5f3tkeAYa6yXJkcjPeN7RYB8VxwDmSmuEkyf",
  "key23": "3txkA9Z5yxas4Upvm3uSmz11ACyKfYQR8SLZWnPCvWU6Z25L2x4Mp6BkrzNPz3egJpPRhr8QexTKKAG9haqtMTkf",
  "key24": "34bjBSzEjah43jbXRRXLCJSqbwzTm3KUy4qXhX7PCgS6seRPvGuA9nYD4WdHztibPhzYJDmpiwZx3mWV5s78owM6",
  "key25": "2P9Xrm3AHfhzpTwTs7fZ4Rf9fZMgfx3zqdjz5r4x77YeRYu8R7JiN36pDEwUpUaZpJ9P8BvDb157zp7kbHDL9tQy"
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
