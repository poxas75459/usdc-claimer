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
    "4HYZCmsP2qHUh7U4dysodGtzU3x7WFvfshpm8XZCv8f2wqxoufPE9Ppv8FSvrLyLDBia35j6CwhcwrejizCieM8r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZY2jc5g5joBU5JUU75JwBBCWWqESpQBijaV1YLibRABVM51ZGQkRCZUvxrFgjYiB1jcdpK9uM3ujQfp3nboaSTG",
  "key1": "5wCVq2UQ5aXwEM7WZvzC7sTQe1cpA2xcg7odGgW68sQgJHR4UmfNeCdC6dkVNytHbLq7dgxHMHZqgwSxZJj5345x",
  "key2": "5FZUPKNAKPmW1aLEvLNPcYNEHL1b44xFQgqUt1oCCmV4gxCNQQVT8DiRRntcESxc2Bdz8oqKeQ75qXsNoPUvdK7x",
  "key3": "5YS6yKy2QApDHq4ocTKZPfY5NUVL3FDsW7RieZAvQwfsEMHE3jZciUQugZbYCQixCWULTWkDrRuihRVtUptpikv3",
  "key4": "3TPdRwR4XHdLUYTCT72sXX6apUjHyNcn2Y7f9MYyzgBMcMEJqfX6vZrFnfgehNJVQc4vdSLVqfBTcxjNYJWH9CwQ",
  "key5": "R9Xs5acJ2ixKweS9ffdqu7ZXptdU2EBEuYEGY2wVJj3qbe2ZPrD78yu8uXmPQjJkyRYwvPNqSfEkCcVCEEU6rDh",
  "key6": "5UAT9saGKHc6XhYYBkjS8W5EhDjDDYBSLxRb3FpQHXhXvwRMhm1JDBBZEcFzY6L3fc3HxGGab16MAWZfpjk5THtF",
  "key7": "SH1jKTH791WRpwDvtdT3MzTHVCa2tQYbadikKi2L4TyaZnr31maPf1G4DoMDFhRdJoE8gNtFVBcJ8ECnRnZtupH",
  "key8": "cxTNeKXJwwHvK3JqaNs1Cx1fDbAx58yoKRcL9fTxuEoTAQCMx8JRUBJu1CdyiY76cGEfAZomHQJ6Pq4d1FKJMUU",
  "key9": "65GFScWqG1qjv18FHVWZSAyZmxf6UKiFfxu39fRQ8BNQspdjFWyHGmWpBCXW5F3RmnJe2sFLxLRNcE7QUbcjA5dx",
  "key10": "4ka3ixpdCJuhCjofAzCsCA125EuMyzRicN6yTfT3UwqGrpSDBhxBnCA5wf3T6p5MAVa9CXMy97FCBm97FU2GUAD2",
  "key11": "Hz12tSRd9YYP5H6W35qi7N2bR9L7sVmFkfn9CtUYj7KYTfRfJpQhsr12SrQ4yjb9TZkAQLREdyPH7d2Mcf92Ajs",
  "key12": "2j9RbHYQGTrPxBrVcG1NT8BdnSC6AWhmcSyZiSKhgWyyC9tfkwtKxZSaGsAPuVpxBPV57cVHWUKrrDbs6Gg2p4Nm",
  "key13": "42fPhQ2cTBrRxNFBAXuq72sZy7oyFbJjnXKNvctK3AgQSMGo1aZt284noYXnahHwAnqb3z2CEHxJUiMBth8M4FZJ",
  "key14": "43PMSiW6AdoPcfsdxYvpAo4yoxX8zQ1qqUoHKNAMwWvmqLfBwnh6yCP1bBC5uACr8Cus5VkXdPhJ2TEMWgcijBp",
  "key15": "2y9xUywM1xmPn1mdWGqyT4EbTL5aBDM18T4NheFE8euETeWa3uvMZNqyboEEDhnnMXJwFgtjrh7uPWvVN8EDgM2A",
  "key16": "2rtuNMp1vKoEJzenbV4RhfguohkPA2TGteN5Z3sGFVk3QdZT8QmxR3HChFLpZcEA987NuyV6z2yAp69RpD25rU1c",
  "key17": "5ztbqxEJArrhtxLSmWLMD5QkAb982FWZLUsimWaVD63dupZjyMuEHnbGqFQpEyVtJjFW2ymwRRpddsrXhmWykJ1X",
  "key18": "49evRjsdiKUXmDcxEcSqbYwJJcMdyysNSFJnWaQxcGTtt5ffnkJ3r1qiKUJSUitEhTSYsvGmwfdRGYme6KCExi78",
  "key19": "5v6b61Yogd9C8cvymWEzgK5FkPMv73EEXb9TPbhbWG2ofzEK3upv1yYAmeCddoSSS8gfpJT6u5Gb2eWruPsZUpp3",
  "key20": "4mcJ2MW5vWd5tz8s7sjP4DNguM4KKa4R2uHZCZN2LTGzHGYrJ9LpShQEdYVowbBrswFqGzrUHFTgPuVHsa45Zvtz",
  "key21": "qPq9jpycWqWVUzG9mo1YvwZnuJze6LSEY9Acq4PHh3DaurJy5KJ4FdkUWVGEdHcax33VxMr29pyb9foJUFd49wz",
  "key22": "5en25uN8LcpvU3rswZzP8ro9L4oNGdaBdWeF4pRFg6ZC94GUvggZZNpwYRTYyhSDurpxk8zWp1d8iYa77WoXtxvi",
  "key23": "5cyyXRgW2FwFjuYfZWgkqxwZegbWkN7ankav54UBuBuzE2JF2kvPgD4m7yswxHYt4ohKZQzvHUNEi4QcXSh8pHoc",
  "key24": "5xSwW2Q6NCtrd2b8618TYkwnXSQvYGMwwSrkDZjhYGUSyjrTEcUv6THm8gjRkQMseFFSkKjTFGDAg7SVGiXeWYCg",
  "key25": "ju7ZtEi9EmeMrzWb45WBoAhFqbUH37EzqCgjyvEY4uCJ9qr1K3eqyjRKDMnMJ2dnFgm8V24QPNrCWpN8JSQ37dj",
  "key26": "1MH4RSxL4s5UFx1WM2kLJHj1AszfJPYRgcqcBv1rBGBfAvxDxscw9X35DtVpZ9ZqPwcWBMUbqgd2XrPTGifHZiN",
  "key27": "3ipzG8vhCPeVzwveQkz8Zny2pQ9Y5DnxRNQKMoWNBDYaHxnur6BAs1Y7wkzi9HwvNFuYeLrKqqiTmUfd3MLWctiq"
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
