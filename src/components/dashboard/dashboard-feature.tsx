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
    "y9tpjuTXWKXcrqbPAK1NjdTZhJRVD4cuCe4HQutzWeP1sdqtVBkGvLzitRoBEBQcDT3SNH5zB1KkdSwjrSoQvVa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P5nPpY3qS34jjK9Paq7bHwSfSZoQNL5513xMb7GqLdZTzmEGoQjpof5n8aix3RSP6GNxAhxdqsq3kL358kB2PSb",
  "key1": "2vRoSBm1W9n2FZR4njqbnCF6kuV9my1F2xAQJ5qHyVYUwVyXWLXK1PjKYQNqe4HGoq1Hq1BtJrNqDsRpMEqNgbtX",
  "key2": "ZAhgVTE1aecwzbZjHKX7U6i7h64FoJF9CFgoDqfepcorCE8TTqs1uRPDnEeu8pjxjfZ6rvCzSSHDiXacCdP2Ntx",
  "key3": "4cESNydUx73c9mHrVGKtdShNx7W7nPvrVtEdz87cTKLSe2j8UguroVzi3SohVFwc7CcAB4HCWtSqBrWFSWXUH9FK",
  "key4": "53Gt1tFib3SR2LjnrKeuuB8THre3f7WHrFRhGaE9jXbjc1SHvh3eVuXxeoKqduRfKox4tcQ1DQQcuYyJY96o2fzX",
  "key5": "TXR4mp94VwEXU1qp83eM9gxEkDGzZG278UDbo4GTthTgSzQy2aNQSfqvZyrgoJmQeQZ1ZHm76nkyS693KTCdXC4",
  "key6": "3Qqi7aTGq8Wp67sJ9bBkUk2Gg7DHVcWm1W735cPPa7obSga74GqGgKSQiqMU8gCWsZmp1rKFds1RVLXYx3ctLdPb",
  "key7": "5VYCeTg9zrd1jVL4zD3ZqdTCx41GDU3MAcQh4mGi2az5pqbBue55zg86QrwRnVsR32ak3ECnff5gRv5PLGsdi28W",
  "key8": "z3Yw9xyFuKPSBESKBD1Xy937HRiytL8WZqreUwgFsLUCZzQ1G1tEgzXhM6ifCnZNnGpbaaC8dBxZvDB4KzVK21t",
  "key9": "2eswaFHPbUmuuMk8SHGqvZmBbfmJeJnLGz6H44q4qurXA5AxCLnwp4wsU3CZrHn5NQCgKwyystFjmtHQwH8PbtMz",
  "key10": "2UjDVpqJqFo7PXdFNbtECoZWLyUYA4m6ZqJVX3BVaYuoG37PyZbfNVuSGmLrkqJ6hrL53NDnJmbh3rt87LaTgRxJ",
  "key11": "2hGn83FBEcma5JCUcsDvLXCm8cqA4eMH8fhT8rVLh8ii9d3EQyTjUGtZHQG9t95rMqkVipsnBeW9CiuPBmwGqHFK",
  "key12": "vafjck6meuh4r1rTvEpga37jHecMATpXsEZTW7edBymb9ZaABCGDozwuUAsuBNuCumJvu55JyaQASUzsoGspwoG",
  "key13": "qiQTCiT4jugXgJqtkoakEB88eyvvgZhJaprAG3HLTRWZfJVKEPQTHqwLtLya6hpXpxoj7SrZCkc5TJkVCdzysom",
  "key14": "3EazLMNZhWtrUBH7FB9tiG6q55gThu3dW5bY1rT4NzCpDZMEHZn7UThRjA1vCrHK6vjkJ6PYnvX8GBsdbSuJcNkC",
  "key15": "4SApwnshsTz13QjyMjbquQfDwmWh8HSp6jjgzMoxZibXqeLUcPUgf2UXqgmonrMFX8ukppHQkwfEP6xwdYRZhKTK",
  "key16": "3npjf4BbGrxhyXMsUUWYpvUr15vPkUZ9EQoJPR87qUwb4ypQEnGpfWWz7JdiP3vszLttCTCDpU6m2VUX8KSHFQAe",
  "key17": "349QiVSqNk3dZaBnLNfsCd51hrU6oDF8zjC4BbBrpsA3vuZYJJmgMrtBZszDu3GphmtMFGguMajAgKmjjteqnCCp",
  "key18": "mpiaBoLA2dKwvZqxSVrm6NUHAs21UZQocJYFwG65CmwQLahEfTjVMNvoUdQ8eh32XyrCqMY7NYnoHbqkEDVxn8D",
  "key19": "wRhPCgQpRKgpbjKhLZQzCGfSDPz9yH6ZiQn669zvvecLKbkbVYMQUJUrXbwrfpoV8mT2WkpenAPyhUNgqeiqS7B",
  "key20": "5NhooLoLP48G6GUz7XFkaabB2GEYoJQ7e6KbQhJFpiGkUjhB64xb9U7v2cUAPf2ydH4bSQjffmG1EabiCFi6F7ce",
  "key21": "2Q3D9gqtSa4eukmD55nMSq7BedJEvtqSafaHzoJZbsHdC7GceH1LH49ruy57A5CTHSMCHhvznLNTT7dzFj8mugjD",
  "key22": "5K3x12NQQryoyLAoFN493t1gr169fy6M7RvbL1Qe8x5vygXszZR9fZLBNJyVkxRmxyunnsXseLr9DxUgiX2bZMtq",
  "key23": "2srSegPvua9kMN6UKfkVV9Pm9s4GekJUrJjsL52zk19DiWzJF8waXiL8PhtoC8QjS5cYWH7eF2Z6TFTg4Ks3MYCd",
  "key24": "KkxPEWjtRS6U6Re32GxzbWGKDYJqeGux5YG48fr3gKRnxuXmqYodTiNyFu7fRTW67Zd1XGKv2hZHyeqZFsb9tFU",
  "key25": "379ioqjv2EkLBogHj4tdYNsvmQQMyx6SCDHoH81jaRRWnhK2V7r7nR24b84Qc92b2Avsby9AUtxQGWv8zn6Nui32",
  "key26": "EK4oxy8ByfBi5PqfiYauDVG7QZG5hcUpWfSfSXmxEyNsek7SoUYAdSxDB6ApHp3xZqy5hDNdpaiiD6hCuiGaE8M",
  "key27": "3rfN7yUaYUKDi2FPK2ELxvZ7TU5uPS2gzGEqULxb8sYLLpGSqL45tnzfpaUeQAytcenE2pMewzDYxFiqa6RXqNDa",
  "key28": "iB2LrLEMsNsXC4iWZ5bzPhq8exQJHWuVVHJh3M1zvrGB8Vyst7we5y9tBspNbxp1EjnXKqdUgSQ1yVpA7B2MbXT",
  "key29": "3dtCYg4Vsnnb6dw6s12gYvQitMFfFbyhfoYn7VjUiUK7Fhxz2zvCQRxAirRsxBKezJXY1beBbWFeLefmmbAgiXrx",
  "key30": "55rybJwz7xK5XYLQWmrYknqQUE81on1w3GLUxikw17TjRU3MVhHD5nFdHkw7wBeBmQGKmUFxNbBJaMn1bjn4SvCo",
  "key31": "38iyWnSMe6xtXGHF6KzmRVPopkJcEcDN1s2nn8BiY8QieD2PvHMUZh1Q7RUFsux8X8JSJry18F9hgdXw4LSqavne",
  "key32": "5WGs34H1VwykorQKfGwwKuD8QWS1Gqe6qMcqgYwW7pzdnzFtf3mEKBK6rDDVw6zWyYG8KZTcNciNN6Ckh3M77rjG"
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
