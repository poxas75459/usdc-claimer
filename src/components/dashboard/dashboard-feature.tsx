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
    "3t61ZELiricpmxmoRVSpTtB63nsi4n56j2FojAr2D1RfGe4A3ax4wTF1yPR7GondeDqEG1ErJc8Y2wMFKuiT2wo4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f5UJxJyK6uzfHEWF4zXmgjQi9GP8QhU2dmz7NZshEPSR1de5bdF4ydvVT3PSFPQara1xoTLPHUdSHEX1N5K4W9R",
  "key1": "Z2AA6nzsuE8xUY4vjY4f1jELBnp3MvJvVc6PrzcmmDQ2S56kJCCsFqcdTEXcT59Eh5LtnihcKPYi9js5fc5adRM",
  "key2": "3n7YDLj8yDyodKxzxoNSmhfnxdEBc7h5eWMG8rhbhbkNM4FeJobPTjgCXjPUcZArTBVGoYExCTQJmG6j7Yp7Y22i",
  "key3": "MYqAnqugmbg1gwqCRgG4heDdFRviajkDPwAaJgsT8BfFCnYQyVJyKq6kwQ1q4qkpPMRNUUFxiycvo46oVdkEdRT",
  "key4": "47z6ZD7H93HcwBtJhxBVSiMrm8ziDeUGthFZ94bQ4ByYSWRZzWgdcXyfGt5QAohQiJ7CigZNf8bKkEqZoXc8pmbY",
  "key5": "5VwER7rN5CkBe837PAAKfUfWnUBfw8zsRfjQcpmuMLnXwJbBHwg2cffA2gLsdgLwJn7SNpSYxpwSD4tdE4ecsuaw",
  "key6": "EqPDpmdvMBveB56uWBf4RuZ8X93sw11ojpAHbT9fzo4wrD5Rcymz9Ff5icEda4FKq53xYdCnZPeEzizTfJqh5Va",
  "key7": "5cUDEz6fefuhwoHNM1689vxFkCv5cMeyAiZu5TtXFnd93oSPmBrPoLLnS8hSYvkptzdDf9oPVjxWH116bGTsFFNG",
  "key8": "54RTgK74h8NNyXRHhuZXKJ8FWmixqbyFPACtyEFtZKonX46zLx3h4AorzJtFRg3ASmgiNm9ZYLeU5iswVB8SCqY7",
  "key9": "59cpJpd8RaMXsWYYX3h94AgNuXNam5M9yYmiHHigVnXSp4YyCoy9Sxb1GR9bB5p5Nn4Gro6PRobvMsUPap2TuAmD",
  "key10": "2bqgqwjPpQUJ8571cnVyTTMbQ8Q8KqhZMvrc6KvCf2yDp7bV7Vcbe1UmcRYGsQqqgwDM5dzpK3ehVDoGUcS1gUH9",
  "key11": "5Tk7jNmngerJA796ztX31AtEWsfd7edvuzKNb9JKq9CBKoL3UP63vqKPgFnefWsVQ29ThLqsbK4GfhZ3yq8nGt2",
  "key12": "3q16UArbWbpSoA25ScF3sui6XXbzs6ETFjHvdW77GWiecyAxMmtbeYDGgG5WrQ8Nayh36DeG6DRN3PMzgBSSdMo5",
  "key13": "zDc14o1coJZjosYsvQEboRtNfVKKHhBqtGAHCfUQRnh1Qpk8PCt6mX3TXeDPoKUET3CWLA1dj3TqN9spBgDiPGm",
  "key14": "Pfr6ASK2PebyrFSQnQpHTXFBVXiMPHZorm3Qrmta73syH4Z4ThJRU915UwJa1wtqjVhsWJVtMoc5NwyVEoBxEz7",
  "key15": "43xn9MVi3qAmDy2TbnnXYNCSXSi5HuXBRT5FZFVMbf3Paqpv65SyLVuyKAxMkc5iKjM45XdhCnTx2hXvDWAVwTKW",
  "key16": "5LZ7jDKqa73gd6BVPTeVvW4Q1vUin89pwUapYRKVBSxynXzKRPS1ZwVmNp3xETWLKNJdFF1JcbJXdPBuskTJZCYE",
  "key17": "3LHmcz5vCtXHtCQBhtkBYtyBfEoyEqWQNES8jVtcp9x1m7KKG92wooCjhQQH2SpJxTgGWNPeX29R1qJHNpRHGBPg",
  "key18": "5pN4TnqshhQPWmRswwQ4EWaX85wNSaZrZv911JUy36Nv4BDW3tLAwAzCzNu1w49WZWJLp59u9eZWj2wvxcbC4Ki8",
  "key19": "5gYujVuTMctViSFYBUZ7AqXDWu6sp1wgb65zRgjFAni1nTMiAxvaDQkCv5UMCgGR3hZc2SJJydFAJWtmNLEucwJC",
  "key20": "4b2R7K7QYxM5tq4x4N5v7KP5F9zddor2fqdrVEbi7a5JAjX4JYMVNNiZPLSBA4JgY63eBt31gARTUsvPN7Qr8Ey7",
  "key21": "2En6pEKqk4RFaArfCkfzeJhSKBvkvdtVpW1WrnTYjDdhvLRQxZFkhptH8PivmikVELNB7q5XuCBKYEcqMwQMHqLj",
  "key22": "35bfmPo3AFJmf7vtZeRomuPBn3RqZGSVYZDoRAUaSTY5ehZ5fpYY3mMCzUqTjEx77Upt9PN4cH2H2pXXkyduKKfd",
  "key23": "ksnQDpDav8XEW9ZXkrp9vzSbohBppH9dEQaLXmusgPHqqK9ugqAbfPpmuRVyWBR4ZNXynGrmYRx74fXcns7bSHn",
  "key24": "2bzrReyF4UMSfw1p431TGQxk7idngBJ4Maz5f2EoSHqftBqtn9M8rsAMVY3CAW4y7hRdg5FuuJ7uVJdBcKinZqQu",
  "key25": "29DdPgA7ZpSGu3LzL4dTku69rexDeFwWsnTVmEKPRiEMNfcwiELrs6a2b1aKRfhDEHEbZnDEzBTtrZxg823EfJnD",
  "key26": "5Maj2fCGFbTtMvnCe8gEciZPFRCkGcB7SzAq37vnJAYwbzp5tGCjKAjAWjzZhtUamr9YXPXtdXmYF84WsdYMNMjh",
  "key27": "5tEamsLacrcTT9X7pKS2tdMByVBpvTM2oWPRgmYkmdQNHJW9dSmrsVQP1SACr5JocASRNkrCdnx6PSh8HtxUsA4w",
  "key28": "5MPjKvxj5GHRVSyM6xswgYxE17qYYy4f2oEdKcaYY5XeA1TB45LrJ7BztpraL6g7CDHU8DjCcpdY3hf27XiqzhEm",
  "key29": "2idRgB2uQnDsHBn76KBvXBfzYJyFrc88jzLBeLXYD62K9w4PLGb7uT8qrSP11t612HYyT9HXzaA5CvXpAcLpCoTw",
  "key30": "3pdPAZvK2XBjfrrPbeSnfwjzCTdWS7TxXYgUQpNacaSTFgEqzGfktVkPPPmPZRBernhfXcRbp8S9WeHmCEGaxtH5",
  "key31": "5H6YTsRHo5kVFGmPdpCcrMg9EL5LPxxX4cAPZMdXQeY9YCYysPzjsLBzkveFoYiLSvRKHsLPBmhk2PaHmv3d7MRW",
  "key32": "4ASdyqxL2vm8DRs5h1dUGXvJhzKhkUiwmgcxoBxXHRC6pK6cZbaLHA7DCQ4zrGMy3TzKcyYmUiDHPae5WPB1MPmw",
  "key33": "52eKfqMFg4n29Qm7ZsZeg5kKvMSgeuNScfxRsgbaDD4sS3jt1rM5VCMnAeF9wovyxnJdMYeMQBV22RX3hcUvkawF"
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
