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
    "3XYz1jpSpY6HZ2fVaRJaB1kwAAFnStvb58BPmoXNsvXnkxzVFAhkqcU5pZUosDcadu2Cjd89sUNmUqLm4RorPZLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55n7JQwqiWuWuT6i5zNHrDCzqP6pHZPdz3n1XQAtKbgMc21mzu3Yn2LcLiBqmGuTFdgzNrsB31GhxvsoRzXyjyLt",
  "key1": "4JcciH7go3SCYgcRNNoKrpZWX2qXKaQbXaHrA5Qa4iUR2ZPpU4UX2eW9eY3PzTtSkGY5xvBXgETn66uvvP7Z8nKn",
  "key2": "65iXkL11SW9YJcNbJUrvqXxRxsk7YRPUDNm3JrTgQvixMHHoenkfUkLAKdnxXC9bACfDcg4z8Thnxk3DLK591f9L",
  "key3": "4VebWXzxdQRrc7iq1KZ2VSezLh446Feb3csF6bVQ3Y88AKzDT15vUr6cwZcqUt1m4pBiM2JnFuz8Mj5LUmPwcjBQ",
  "key4": "4GqBjWhPYSF7XcZGcFKMbR6YthxL5duq1kN6zQdjNcmaHJKT7nvxKfaKy7QfDAah4pMjwdfq6z3CjYyAsi2b8xd9",
  "key5": "2dYhvhwjtnHWGWJAhe7iyrbQXttzhLNdU7C95ejKgpY1bTJPAk8sWACgACwUnGcZu3KgMFEgypjkiPnpkk7nV9Dn",
  "key6": "WeCgvRiqnM89BELddKdLZxpQEK2v6jVHdpw2shKKYkacwDw8RZxP3CFtdEK6xoF8F321P2YMKMroEi4U5ZsRiCr",
  "key7": "d4cjxxSupNzYwqfZf6o8giz3jzsHypGx9L1BGDQPJkiekhK8CwG6CdNupGZAQ1T74LS6XgYtwfjXQeQuGdcBd13",
  "key8": "3NY7xRiN5LPTRJJyQuWVZ1cXDVDz6hLfSfBYZjs5WtqRoaLt2QcsY6jtCkPaDBgvbH3tf3RZBNQar3veBt2unFEZ",
  "key9": "4j569QkNZdnBk7oqg6swE8PsjNxu6tS4BQLwvBr94vxaPdsc5SAR2scaPXLdAErnZBfsyeVPC4scdS7yYpRVVURk",
  "key10": "2NxoQwiwHYPqYKfztvCSBSzwVv38JGgiZ4zk43cp2rD6cy8dR2nV85VZEybiCHE3ZtXRv6N8bXKzmagTqQznGHbe",
  "key11": "5Syk7pq6yR9eUtUPN8jExXR9JNmF5UsbBQvtfStQ8oBG3ZcW7uUNQfG8WpK6wnGtjSYi1tmYtUfimAfCjpdGsCLj",
  "key12": "5Nbo9kYJzFjE5jkosw9zHeNFw7qSbTFAhYBftPrDrqp7rMCiAGzjUeBSqHnUjegi627wUFk6ozknaZuzng61fiNi",
  "key13": "46uLePoXuAqCHm8LfSRbMe7sSJ2igcgfhdR2G3vQmNNbBWtQucDCK6KPb7Y1cySCCg9mJ5rq1ZH1NgdFd8tTwEJq",
  "key14": "3VhBDabZ6Rg8aoWocvNiiSyfVgbzNa1ehbtjXnMcHY5NsCfgvX9GCWuRGZtDKa2xzagVK6hQVfrmUCTccGVU4uiX",
  "key15": "2Nv8z4J9f2BCk1a1VZjTfA2oijt7agPWafVBfDrZBt8beDQWRSCPkoZVacGrcvxbxyoBVy6vLFdszDs14JvjEozk",
  "key16": "2H17dzYhxiDgKj5ZmEA7Q6xpnwckmKUwEaqZHD12Ps55S9kRjD17ujUGUaAxuYi3hU9B3yNCRPCdR6AsYbwks67e",
  "key17": "5qo5pBaDXdkMyXewAWqzSoQVyLeHeFMpGcNTK7WixHSrSpY1Y8hNvTpH5bBNLR4SmANfXiE3EZHqwp9LF8iJzf79",
  "key18": "57oiYWVgaC1n81UgLvGoXRnrA7UDuf3WCjoXaweGzeHu6naen8ZrYx44YuKQrKVotDBbHZtQajPWsntZWPGUJCHe",
  "key19": "5fFZKUGWnVPAh79YDszmigGsapQv7zoC3ow8GPCa5AbBbEX8DYfwC1Qwe7AkgkeHjvRDYBqZJzgDK3ndqFjukQGQ",
  "key20": "5PXqM38caWHvaGGaTYe12EXjRvNWwkxChEUK5TPnNaFSwSkgopBH99wctd2qonZor5fcxBS7UMp3eX4RBXe1AqKA",
  "key21": "3B992eGDmYSmzydn5HUEwiUPQEfWJyPyj83BoEYunRTsbMqE7stnNfhYwZHUCBfWx6VL1XoVrvFvZiRAHGCaZXwL",
  "key22": "EK67XoBUrFqqqax8oBsDaZ5cAXKKKq3j4pSCAJrEUFp1H4UPhYr2Qg6YHm9JdUE9NrYVzR19VmutQ8d7CBMs1Ci",
  "key23": "UqzUvTTBGSjYVrbCmUjeFxgFzCQ8fib1pac7NwGhMovrXuEvNmfWYkt6bDBRBPxm9PNk21xR7tJNSaoDEgWxmDU",
  "key24": "yv4AHokALrxtJr9uZmawv2R1GkxucUuPaFiVhvuDiC26SYaQrgbMmZLwx8tPC9oxMe6sZ9gV5h1NgW9aCBjdXBk",
  "key25": "53WEnBFHHK58NwNypCmZWwyxQR6AnsQLExFQUDAz4rvXAnA4QbguFWmeC9PyMtr5m7aEEitczxpVNw9NW9Z5Lprv",
  "key26": "5QywgqGrePUrEhpEQnpKNtS9YKzb6C3WuH2zk8saTqDphxp5u4Dwk8GaqPnq7TbAAcpmFbsTPFVYeZgYJABsTQKK",
  "key27": "5WNmt6yfcMtVNDcQ6f3xL6anxc3z9wxXGVwiVTL2U4WNQRZu6YGo3nXBZrYMs83qPGpva6qXSYgshQfAw1uB53Kd",
  "key28": "5fqVLna65Gh76wKDHMxnTXz83FxbZhCFfpUKSPC7JSTvF5rM5AQGX2KL5F2WzHcKiZNJ5ZLfHrTwHbCvxTPeZ4N5",
  "key29": "5c74oxUUM53sCrGCYm4CXeRb4njm53S6DTrUAByE3porDvmAjP9EXHyVgy48bGLkn1DoUicgpyt45FJDowMKMaXL",
  "key30": "2ZRBEZAHUmqUiG4aMogq9N2tUAAJjeBfkNjTEFDqZ1sR3mm1wjwh9FJbBP8PAQW63yik9jKPaRwxkSRmcrWHXSFo",
  "key31": "LiBgpo3Trc5CHaN1BUDLA1GMAwbfNqyjuVrN3t2X95qt6MJEMkbHwiDcDXnaEyFomngPMqHixStNsCx77NeGbRq",
  "key32": "2FWYzWCxtpawbvBSzK7FgcHKA7qH8tATXdn6J4VvSTSggv5gya8tFCnfbbzyvF8HQFRR7nZrAqv7hznrJpnZX22S",
  "key33": "4fozZHCa7WA2HfF7CbU6WSKQLsXyPKyPykqA3KNVGavvXc7uDr5RGFW3poRetWvNYrBqiK6tW66UszBkMhv646sN",
  "key34": "9fjBjUjkZERanqf5VYiw5hWTYU6aiftcruMVHemuj3TVC26EvBgBgWaRRAokRQJLHRttm9geYqYoRYExtu5NHba",
  "key35": "5w9m3A9M6HtxfQpSxUpa75itKbr1jfq4KEUB9QKE8Dkr2mH5KyJ8hkidRtgxFwgRr5bh3vzoXYZEGyEXKGNGhnrm",
  "key36": "4gETSpwGbMHhXekDs2ZxnoCcj2drk3BTG7NSaP4cazr11MY8ooS6zVS1wgWDR6Cy5pWTsetGHmzB5rjgrKUC79Qw"
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
