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
    "z459dWqDhzjFgZhF1jAUrPifoVeiZ4D4muCLEPjzRT4obbkfrcZAnqqNneFrWtAoo7LTEy7PLgcFyZHHxYLFcQT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PkmkjJaSPqMU8wPdt2M1ppiCLnLigBYonSiseHfh19snc3whAXyp6Xio3FaGtPFvvpFhrgsX6Ni9EVWgdfEKV24",
  "key1": "55DeVVC2VRAxatJpwLS6wrz4PUV6efBfcif88BvDEvhhCsgi1R5832bYYn2k8jAWgDxf6Njh4i9Y2SGMXhwRKQKf",
  "key2": "gzm8BRnbWNer84jsdgoHQSYwyDkMRa41D25cxSXTEmrWiUwngpQyzoFxF3mMXCoseXsGd2oF6PbsQwFcNqLgiJm",
  "key3": "2CgAmxdB6gARbK43PmMxSfyFH2WfdmropHSqj2WHD71fXtXg8pcbLM2nrpbW3phaBGX4638e57iK4nVsbWVeGGhk",
  "key4": "4Di5H5XGe5S8ja8WxUzPBf9k4mY4Ae2rodLS7AqK3hLvem7c1ezaM2A724HfFRzS4ssj2ai2SxjXVSwHkLACPAct",
  "key5": "273MhJQbWUsCUCTcBYDg7AZ4jgivZrrZnYR6GTcnsiDKxsrmUae1X2pv5sj2HFdGoii3RSP81LhLatJzc9HF2ZKk",
  "key6": "5e2dd5dTHEu8axh3ADW8rweaaxSh3NgsD6Ycav1rystcuC8isKQVwW9BmdM1D33TrrrU4jYFXuz2grugEFPM5uEc",
  "key7": "4BRP3DojyRZQoxQUddHrLcbbuKxZEpEHXQCuy1J7JgjdCuaseLyyCKmzCg1MpW5LQy4DrX2KQaLP59gXwMpqX42j",
  "key8": "54tXrQgM9Gunv3KX8cFM4Y16Dn2yAVgPJXGwXBWkXCuCZoSzkGuPCSrsffBibhkAqmLXQC1ynTZSRmHXx7xeATjH",
  "key9": "3ZtA8Vgi4G9xKWXbpxqv4D1yodM9y9bwR3hjuhDmw9KCKsQbMAf1zsYrHgmPcNz61f3wRB8kDTftbfhDum8yfzfF",
  "key10": "4QrKhQdCrLdvg5CK6FFbqzWaXvV9s2aqv6qD1oUpWysSDCtXvQbAKDMCHWZFQeh6wrzMJQA4EeRur72jaVTrjgmo",
  "key11": "5tkUY4fK93ZTzgYb8mhgocHavdz2548yFCnZxPDLefqCg4Pr1c7Le8Sn1hr8Bau882L7sM35WUTofUpz16bxozaE",
  "key12": "22HYjWTbsjFpFesSn2jQG2t3xwXEHCB6fZXdXnYkps1QrhaoToPcP7ppYPk8Q44qqe8HFLZBDYCLAMqvtHXJvyzS",
  "key13": "4vMoftNgaDgWQR9SigPgFm8YjYEoKGNPHZTmM9ePhduu8DPbpLfENYbcuETMZS1myt7mZujD8LCN2GwnjwtYTe9H",
  "key14": "4fZYFe4Qy4LDBTnPkVKNZt92Stomg3zUXTJ3jYXfX6Qb1BWcBw2hghm5cwUxmswt5RxoFqFL8Rq8WkHRo8fttY3z",
  "key15": "4yA5u5rHEuLLG9k3j1Zoo2L4kqKRLZeW5p51yBXaGeDtbs2XXT2rHi3YitnaUUbnbM8NpLwdu7RpX2Vz594u9oG9",
  "key16": "3aHXBK3up4Nabc4Jq1KnzvX72vWmd9GyJYLATg7UVRN2i2MqCoqfnWxVfxs8wCZitQm1iVVpsBkAa1vo2pBnGWD1",
  "key17": "2jvgJEXz7f4dFte2vJBDfbZBhBm2KdWDBy1AHUaVDMZc8w9wBGsJuCbyXAh3YBXigAYe5Nc6NdxQYmi5Kibown4P",
  "key18": "3mQutX8eHXn76AQ7NuTaaojZAPCmV3BzUMh6iR5EZHcBZkU5aHAhkuRB7oyyzz5k8K9GvmYGZzpzkK1ZdL2FotBg",
  "key19": "2ywpjuacKtGr2X3c57pacwEsykmMfz8RLfDiMoAYvkGwYcCDFuBuxFDrDSh7wX69k7SUmLbVa75i3p6bB8piS8hP",
  "key20": "4EtkFgTxyNhFbAjkL8sW4nxYmqJh9aP2jWC3sYiX6asG9XmkvVQSVNgZsXPepsVZ8VLEc3TmffZYcZiNsgbHZgCX",
  "key21": "24BpRSk6ksji1wzNdZddZdujih5zXEHqLCANqGBH7DYKH8fSLYm2n64goHpHJg636rvQhFFo7rymbN77DcSPxsNd",
  "key22": "4B6irnAQt86TdxCSBivWrAchTrgCQp7X6F1zN2pLv4kF9bEHHSyNTpF5A1TLqepGB6p7fMf4jBvCRLvnKsxBgXhw",
  "key23": "3qMqevttVaKaFwWomHCcm2NnQ5dBApRCQoYMoVb6LYjQdXYr3vSpU3jdsB5wZzRRZxhpC6zxCzYm6gsyY8H5ZHvH",
  "key24": "5yUTQ6J19LTgBHzy2WZHYLNYGnLRuze4Z7wSX9WGGtd7QFHJKbG8TahB7a1HdzvarE14sujSAyddJi9KDPCtasSq"
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
