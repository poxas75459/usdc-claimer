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
    "Tn3wz6FNzFoVQPizu7Yxgpc3CxPhgXrtoxW7zRT1GTcvjiT8wGuST3Wg8gwwEMUALiretAgqMxYLkdHTbUpPFm2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61DEsRoyp2UjtR8MFU4Q27iRbKJApCmUnSm9VRF2oKj13vdQf4pKHEE1PjmZHgiBatsducoHHJR8FNPv4h9LSNcH",
  "key1": "3aULZtvCpqk56ZLJLKUXM7JZKbBpjk7hCnYrvX3zLUG4gW5a3QruKCkfySGf2Z4eF889a6hikMXFMWEJoYv8uHD",
  "key2": "5esryuEB5P854k7gLh51vRQzXhDXGaaBTGqNSBqiuKTD9yUW5Hey8WnNZaseNz4DPc4npb8QZFtmxPoeXbmn4AUx",
  "key3": "23agQrsCPE3DS1xUSD4aPz117T1ivuF769xrQ8Juzb6wHQCb4iXXr4UPmpdoKbNJcyZuLLc4sW3PH57pHEXDjaqK",
  "key4": "32dUeKfoAt1b4qDCWMMguM5QR2rBd4WQCDe1ZATiRGxUZBftJ8mHNj1Xr9K9Vfjfg4sxs8Y2h5G6rbiRFMRsaupQ",
  "key5": "4Wb9k9bYAUqWcueYDaE5ZfLN9ehJX598ECqmGacTP1KBha6qon12m2bYxSAvpKGBw4WLEtH7wmsrh4txDxQoPDhF",
  "key6": "33gxaz569XHqPK7RM3fDyLM64ukzNU2d1DcPJ3AfYV2EpcyUYpgLPpXaK9mZwwXJ6JpGuiXniWSVWt3umqark6HN",
  "key7": "kpLaAS4VKnNFFfqt3o7pizFpim1y7njKcxTWxon9X9ych3yCYCcuCzENZjZbZDRhZSRngDA6VWwvg5tyTLtRoXm",
  "key8": "iUAu1YwDMySbFB63YEqiH6DGkMKQqs2drMKHLeNHYVvJAvttiVFSw5sLwodABinHAtvbJBYeF3rzSAs8gfQULo1",
  "key9": "5UJAe4u5CgtEyS4Dby5chzvKH4biT57Pt2wzkHwLLyecAjL8kRndKjQH4MpQmZBqnwBsDqkCWyc5MtgW6DDfWLaH",
  "key10": "3GGuuhR25fpRrc5odDFGNJosfGn6nKtrjpvv21dBrRKTkuommED7h2uK8EmvyRY5JJ4PVCiMhVYkZVqSytoBHaXe",
  "key11": "8tPqxin4QYGPz9eg7Qkep2wQFHVvgJdhGL7mA3curkNF3185JaHfkr84QVjdgDPmLbtjizMGj9DbU2A77fMXf9b",
  "key12": "2NGjMGyiLMmjhWaR4NtZb8YYqH9VF4VUvJatwMrAZ9Rbt3d9FRAsbN4Awpap1St6uxPrgLYsfpEk4Mtmf77Jm92F",
  "key13": "4SxiH7WhdZnkygeC5FZFzoSZLzjtYcu2DnSfKLmyZjUn2kNdMytbPPCzTcLupbeXB82GXnnoD7hq3cFupeMe88Kg",
  "key14": "31i7KvNVdDc5NNiztJWpX9GpZhfAcSADrxi7UVhYv23XH67fayUaCo1jCkJvbE4e42WHFmeZKeciaUjHnq2GSdj2",
  "key15": "5xm3AfmMiGqxrnktWrajCZBdvpDrBszUrBWvHBdf1rXFEUEV8oTgxyTie8AYWBzqyrtMFrTnBecpPKsvzGRJ1Ntj",
  "key16": "5Z4WgQfLcqGUKCEub9n1KpHPA8eX2GYeo44AFwDmG3Ji2zDB9tkKQHLS1ra5qpGKnpVnoX7yYQNa9ohDhHVE9dtW",
  "key17": "3FJjS5XPLJfvmaxsomQoLUrD1nwqZy5Wcptr5buK2NagZgbuqizTWahS7vh5biL7AEfsF4QqQZiVRxxMTCuyGfjn",
  "key18": "4YqBfqEXaYdRdC1tTMqK6LbgWAJ7yANSCGDstHenVxXnyVZAMD4UAv8Hy5W6LbeEo5QywoAq75fj6AjuD3hVrKX5",
  "key19": "2gRUReNFnHV9JC7LQ84WtRHAuA69VCG3kGe5pd5cR7zTymRL1Uvoiq1NJpusbUS1ZYkaCcd9gmyXyefCR1cQtLKJ",
  "key20": "2T78wC2hmUmKRJtGXpe8eKgmTQCUHAdK8XuU5gPpjUK8ckxQy43snyFnSuHv8sEPWv8oAzLsh5AekabGR8k62dmi",
  "key21": "fZDpiZW7SVXmYZkdeQirfQL6K588BRNgVx4rqrpxfRmWmEpHd8HJaRjvRG3yTqkiQiJymbCza6HD8awfHWejUVK",
  "key22": "4WcmrCyfvqekjFzFqfvX2NWTdTjtUhjuztBdxeBosbxvsHVNKqHZhonZisGRnL16xG5EBQuSnbnT8t7crPNJ8Jho",
  "key23": "4SMViSznMfTFHk288uHdDq4vo3xctApqshT7Dw7ZLLWhuAqwj3sPSkJpiSUUVtFdb521suNzfRcd1QK7uALSbnY1",
  "key24": "5ygqCwiU85oxZf6nNi2VXhcVJ5tXBSLKGypyHRVQS3onB35m9fufDMJqXALXo3JvYR8vfVDmmJ2YiMRXGswePPyK"
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
