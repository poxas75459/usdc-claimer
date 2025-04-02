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
    "3mogRuPdruZmkSDoSSt8tn1eSGkkUsT88pjTA7p8pmc53vkLk3iFeHiWXSHXtaz7zUpyqqV19QSFbHyFaSCpyC7H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ac5qh1FrZjr62nPLNPnxKZatWeLnwrE5kt3fyGGatH9PwRWzHKUJiqLVuVJ9GQE5jnf9UJqLsqKoKTcXVbwsk9u",
  "key1": "27772QjsRd9A7gaxgKMve1hApVpX8VD2bh3bZNkteRDNN7hBZTrYxkshVBwvueSS6fWF8rS6e2veZdWDorEJruFR",
  "key2": "5YwqcMdBN9eboQjE1kx39pUqmz1BY4Ua7LhKeBwf5RrGEFpEPBVNBa9bdi93wvLSpn31gcbJ9FtTxRBxG167JBSU",
  "key3": "axh16EVfJwHPWr4jENzNuwMcj6ZyNFCZVD7G7Noc9MmZyKbKvk8q8apS7dgcowi9b91qQNxJgQdMZYDcyKkBcGU",
  "key4": "2vcKMLHwkkmeBK8mTQKQFohcspXgKuq54R4aga2PFrhL8UVqETfXqoVm93gNQ28rciNhwvn4qC3SfePWLkkXBgbG",
  "key5": "3P7ciUr95d4JUxXZ35XJpFJcHKJRqQZvHg61V2frhrHaKbY8WatpSMeeZTgRQxt3JrQoh7m3SAau3d9PtLd9YBHV",
  "key6": "2NCTpgHMKVWd766NnwXFLMUXfmMfTCqom4yUEn27A37yUG4VPkf3ckGPtENThTTXaiDwkgAQEz7pZ3wd8mTJ7cxS",
  "key7": "2ErUtWF66bGoCkEX43E1bHX39A1qXK6JxDJNnQ1eCDxULTMnkTb3PjtDLzmebRoFKvNHT7H3EWoeFRLsjjrLQMSV",
  "key8": "H6LsG43PUhUJpS9GYNrJhs4ULs26LKqZa7tzYSTbYEcRya4TsxdqV7jc8Hf5zjTWxQSkC7fdJmHKyHP8SkwzQTG",
  "key9": "5Miy3tj6EpmsLbHz8DucjfkVCtwGszntVkK7vPkC3qMMNkpTNqKFCs1gSxKLJHEydc8nc1VZZknQSVbtcsfPUgQd",
  "key10": "2qBgXGEe7TBgKkHbZUf219RiEQYuNkhjS4a9hgmbceA2CRiKxmKkWvNH1kL6vFcG2vR9wbAmZ7cZBmrfdbSUmvzA",
  "key11": "n8yuB55ZgTm3sFihFv5YSKB5cMqwPDb4WDz5hAn1RzBkTAspAJcNFs22aurhxLgveGKSFiJJTJZv1TvtAKJyJvE",
  "key12": "57jKgLg5ukyV6twWyaDZXkeskvwyjYH4DcNPXjPDnfc6RbsEBWVwrQeghg5BJFsHbDaYJLzatpRbzSt86AvBnSdR",
  "key13": "4k8YLU6WF2YJrtWYXa9u2Ri5ZG5x8WRRBpsQvHKKHyQ1tCHwaj9boiUzPMn6XyTvK3e5GNECQXug3Z2bsxc8ZEdR",
  "key14": "52q6Ebi4yDjVyJ8hkV9uF4MRjQ2AvrqaEZtHVQrKkzESE3UgwYHUwTvBSQuawfRRRYaqEqnQ6uKRv4noT4Mp1Bd4",
  "key15": "4N1YioqiY5T38qBrqWnNcupNzgMDCcocaKo2jnUAXBsvX5iQs3LL1oakG9A1a7mQojaqWvvpetoS7u1bFty7HBYy",
  "key16": "BbVNhkXEyRGHqAGGZQxy8YxhGaJb4eQ9TQB5Nd3wE3xinrY6kqM7dgAKKpV6ifGe5CVDj4TbNkZgnxcxg3SxQQz",
  "key17": "4ebfPEby64kMrxiKKWA3VNeMJYBk3uobrj2jrsANi87r7tofnMvrhtJmx8pQG3wigr2sBSrqmVbpCLQ5Kyn7Y6hz",
  "key18": "4BkdjUbXXaHvrQAYUPwkxf1c44rYGT2y1i69wwyJMetmLkgpdLKWXbdrLH8Ama4qnhGeGSEL7fSZ7rmT7bv7oLtq",
  "key19": "2PE89TAPWx5KPGPZUM54podyQQFbs8oi8w1B2CJgC3RzgYTbhQeKpjCCcz6gfumrS4sHFPG8iSaCziZqty2XEUgD",
  "key20": "fdegfMdD8o6wEeTtfs11RmwdPHSj4JqMa8kMHSmcGW4WffevLCBmJ7uLTBTJcn7q9g9ddYMdcLaz8rpEce1J27z",
  "key21": "3uP7U44ABoq5hcC7radks2ddi4LktpCGnQT8kLjak5KfxHG8gmYbd52b8xPk6vfzshGnb7W9RUvpnrzPJNA3R3Mf",
  "key22": "3596zRZZkGghNFrMZLTeYGG8Dwq5fPvzXQ97jGG5MKHb4KtECw3y8LbKLgwxLGfifA8SwCSGyPwFCUjbJWQLmqrx",
  "key23": "32s2ujXWmm1uqTQtUmXHvYQapnWRqC3hEU2yZZXsJPZi1PmRqG9vBK8tRHVnnZ5DVVuYow8a6MUBa4GqWPZsc2US",
  "key24": "5zq2iuYgrggsswsBFizNBLnY6XiDBEaiBRSYY84wvrEm85hNHmJSLrvutY7nBBPM3vKJMQpvUqkU5q3QeTGQUJPN",
  "key25": "rfDJynqUQ8mU75uCahjChXZUXF2mNG45GGi23iPNb9PSaqnR6eEw9wFthT8NjSyg5T8gJmJmivkYXbmYNZy7Pi5",
  "key26": "HAkSEU5pYpfQFP9WCGpRdN4hRUYH9R6y8pyPeBVt5E5qYhVLFcXLXdLuekHJ6FY52PZNhmywGJaN7BdfR2drxva",
  "key27": "4f9ytC9xQANTboe17bJ3HMUvmgpXm47CsnS9Tayt4V29Sb7mcswtGBHouq83BbpSvbGxAVYmfPizM3FJAeCQ4xeG",
  "key28": "GhBMiwQ58zgMMvVmPv2tnh3D6wYcRB87yPcWqnzVoFWW92eftbvFWrWXJgeSYaywyjsPR3u1Mjtuwkazeps1ehm",
  "key29": "49a3TMXWQTw39gxfskQ9UFDgKoy26v7ZYv2eBLQnvFhHLhav7UB42uPNjKEHkwpXwAL5qbNq1PZZuznx3Rucd9g4",
  "key30": "6738hXJHs4Aiiupc8uNrXwPgdje35D8bKARUKUZngA9Ab2A3qVJSSJsLBHd9PjzBxtcdVwRS8rUNFmerZrahogfg",
  "key31": "2w5cTsWiM4rx3iTSVZXiiFrwL7EAXMBryEjSvN3Poa9nUa1FrESnpFMkdw2335rQFPCzD1yNds4oX9MrW24azPPZ"
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
