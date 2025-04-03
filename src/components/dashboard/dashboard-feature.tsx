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
    "3SFdyqPASGi24b38b6KBDqLkpaRCKf2JUjSfNPi4ck8VLnnZquZDt6cfm44hVL5qXX8eFdXT3h6DLHcdawaZb1FY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L9LCH5SCxQZYNaeWYXMweGYrfB4wKJa4ewEQbLwDFxzqRehkPRa6CYAtjTuPCH3d5XMT7g3iyduyADjvVsK7XdG",
  "key1": "4cJBLmsWzH4hBYB3c3TMui2XjujLt4bgLrNNWiYRM4jMXezhBshNY8LpUSYxgGx9FurWiKJuwy9eqRKnL9zojssL",
  "key2": "56YB7qp6W5ux1JUhD37PzfAwKFKLqjPj64FJhgwUnXKTPJdoXhR1mKsxzxUS4VwsQuTyCX2cJAiHxitPzoemBke8",
  "key3": "GKHRgPzHPMYpiMTosSTriTTxUchNrw974StVSEoG1FKcDeHDRQ9LTbau24JALe5NzzXWhSWDcVe5S5ZENDFtRXA",
  "key4": "4wfL69Ye1bNfZ9TQ7HgueLVKMXzXSB66A9AeXtXdMmMCf5CgTF3ZmmFZBXiz2UeHziYhagjn4mq7mrFnY4tDHhUY",
  "key5": "3zW657MbB2KwRY9Na1grbpeVESfWd4XBj1cvh347CxfA2FpFqo2wUDLok95zjdCgvb4JbcPLD7naiwQ4Z5oTS89r",
  "key6": "NpsMtTtaQtbPKDAKU9JL8EJVob9BLtUXuKe9ZXH7rnYBkR6mbNJbV9zmBh124rZuwYhCLE5EVwpxWDdQzSxWLpY",
  "key7": "vQvnsEQCW7Df8hvQ8k2fambA1EBFMcFpEZ6AV81Rpwcr5UEB9Tx4YbCZAVng7wNfyx985k8Ac2PbEyfWb7671aE",
  "key8": "2EipdRUobFgLT7CMwP4HwN4FugQ6vmPaRW7soipTQgkkmtryb68y7skPWoy7Ptz38JUcmhvJvK2cpWQTAP5wUEyq",
  "key9": "5iUVeNWyUgAL1HHAmm3aDYrfMyaVvHomVPqhm6U6A6E7QAE974PAR8m57F3E2WkwejtFYLuJ6JzJLxc5EXbo3g7F",
  "key10": "4Dm6vRrpav7aqJ2GSgXaDkDwnGrD43rXvbQdtNGahiki3LMnKeTmFGBupbGqNZbniybdp3qMSWo1MLCV9WctYYHj",
  "key11": "4XMw1Vf3eZEsmyt9DUH8qpM4jKnzJa67M2L88dBLxxPJJQijC9j1DQb7FrdNrQkwgJiMiFjfscaw7WUUZf9xCDjC",
  "key12": "5z7wniBfQwtNq77vWdoPWqEQip6pzPfZvgrggLP4oGPPjFBkSm7pFGTZumoD5n2kRQMaYaDENEogLQnGrFLVh8Pv",
  "key13": "3s3biPYMoiQAF4hhEg6mzPaf4fvNKxKiMyT9bo3v1ASQqm4aW7R6uaCKN9tZ6Qxc5XRVASZiTsZiDyr9Wk67gUVo",
  "key14": "KMrtE6jL5GaFiWfjweSFnXUn8n1LYtjmoS25MDewncoGPxtwj7pjpX6UTAJoouNxxkyhAKkhp8raUfk92J5T6Ui",
  "key15": "32BM4v5zLsVfZZkARnMTG3VzzZUrX6Vcnc9zvnGcAoef2mcZ17eQtUoXHbLeSKZHEYwivgqJsocP36cvYEpKaDHy",
  "key16": "4jpZmWQDRCoMCyiGd8xo24aNNyjpGeAFSgUnK1SLFozKtSqUUERp1HruVBd4BmYpTsumP554x3UhPbryZVVSVaWd",
  "key17": "4haCcHeToHmAJCz7RBJJhbaY5tc3o5P6raSZPSRyMbNQH5HMB2RdhzJGZFUjwBFXTP5WFZDyDCjdfhwTsFCoGJcW",
  "key18": "2ndwr6XwrRe58B5GP3cunT9HReTVasY3DgrH7iF9b5FgzYXtQwPi5eAwYynqjhimUmBbR72dPxMyoLkryGpNmSn1",
  "key19": "5eXEZ2zbRhRLcKCYiWzhJpvvKTJC6mBfRq2TTXdLVFDLNBTrLvTZ3o8qDB8qHUs5ZRNaB7YFRZiQmcmxoMYX47tm",
  "key20": "32NXiqv58korAeR9w6GAuiTUgd3ZqSjnWbKCFjdTyPjbqhXNuDRJchUr8TAvNv3H6Un8TNjosThpu3uJhtVP8hEe",
  "key21": "24smvoB3cSG9AVHy32TqUm3Yh2aAFxH5yw9xAkLF6oapa2H74qy1QFr2icBZEwLThNBhzZCtqjopb1dJZGzssjKL",
  "key22": "waugxVKkhwkVEP8b1ggh2sxYivb6J3wmViCSWtHkkUAHrzxKbVryUEXaMZUCdqCNNPzWMAGufknmjEjy2SVNyZY",
  "key23": "5cBkTuW8kQyWwrZCKFjqvZGkzBYJmrEXDGfRpmv3ZWuFrNtC8CpKjVFxyy9PjwBCaQoQ5qyq8CqwVdvkPtFAjpZ1",
  "key24": "5pw1xqBcwaRZji5osFewbXhzV1Ri2QHCcbMwn2aZHhw561pEK7Mk4ougbZ1nNKmo4qey5SXv9V3R38x7UE73oR3S",
  "key25": "5ijCyVvnq2CUzRMYid1PZ6vHF6D7FzcB9cRgsdC28HJ1zwVAQEvrFMkKyHL7fPjfTauSVkc5ELhetnjMzvzhPD3t",
  "key26": "38C9kj9oV56FvobLxqvtVYxWwXcU5ke6ZYBseHX1Fpa5kirQ9rAxeo5D9M3AAFFXUqACGqRKi9g3Dk94bcPoJcQG",
  "key27": "3yuoNu6ZXk2UQ4ZCBmoJcWfPUpB3dMU3jMAzYZcivY2EA3NLmERBnMT8hoc2ScarNGxJW5NVqAvmVH2BXA1PbMmi",
  "key28": "hjZW6KDaEudnf5Fvr93R1VAhujjVAbzqyLwzzfrRdoPkvJuopufCvjRrKrdYpj9BobB6NkyZyagRYbmChZ9ziew",
  "key29": "2ww99nLUT9dKqo5rNZWkQJ88tsvvipF8Xzf518fyZYHDFuapcSo2Qk6cy3v34yhNGtuC6aepdgafkPsgu1ADBSHB",
  "key30": "2eQHUgNTqyfTDaSEmQH3mPTwNJoRkv5qzPdBZFxm1i4pBpEoVSVqJLE7CsrjwCDAXxJ4dxQqcv5H5iPGybwQMTj8",
  "key31": "u12aKQBCpBxdnn9xFmJ2ZAEvn9CcXvZAnuLBz14pcT858yqTBn8KKGwWDTVzJS77vd7mKGK8T7hXn2peZaVL1Eb",
  "key32": "4cJweJtTGxhWXQNHpbCPdBQN5reKu1ZMPxrmD3GVFptEYN7pbLunf5X8tTy2xQkhmKqzg2Q1CAacgKWQVce9XPVy",
  "key33": "31vAPuGheDHajLwSDpfahcpEhkZdAp22Wq9uPJJJa53e3D7oZ5ETD4CVWR1jnhpiGzn5TgZKPW5GoxhMkEJVh6Pt",
  "key34": "2rTibK1vH3bcEJtGNv4qgBQGabxCx8pjeV9m8KcP8r2cf3hm2892ypSYPVU46z11ptpchtjSJnEDqfmAtQFT8yzP",
  "key35": "52bwnFFU7RGQwrkCqaFyuSrsRni9NQVWdHs99Lvb8q3AGoMj6eohKoCS3h5VqH6VzSim1nzQtpcQmhegtkvKs1uh",
  "key36": "4eqXcH7JgCTE43cfaiKsPcczwxCUHsB8yZjB5ZeKmsaw4oeCydi8SbiPbthuZW2noV5XZRt6Gcb4hdZLpZGdLyRp",
  "key37": "4CS8RhJg6a7BKhLJ9nwpLPMYGY7GUBf8KFVxf21QXefDefcLBq2rvKaxM3uonZhzjuYSQ6pPNovaFScFsLuPiAws",
  "key38": "517LMhsMNAvy8qgAshjAjiqb17yZgL3359HGx1YCJAbzQYRMRoYdAUdvPzvmdjW2GBVjjuik5iEXf5HBPyDcWe9m",
  "key39": "54oaCL3AwxVnVPcQMTyfgPcTKaEfwDp13cB4hRSvd2h4vzFH1vW3DGxrGHHkZ4QtHVqsnh5ibgkN6woybA6BsSQ6",
  "key40": "5VxX8Wn1BAcPNS4bwNA9wRNLGjcWH3kZJ7zufceJeL6Cu4N5seYphwNMzCfXagpREdYkvgmetZLFFcc9T58SWLpB",
  "key41": "58A7DTNbU3EGrSPyqNJhNa8GmPJM6AwThC1syKzdjLpEZT5wW4eb8iEvQjmhZWt7YgSycG5Egr8HUmANamRyDASh",
  "key42": "3qUwmKR57oVb5ebPdFEiDCDVYqia52LbTMC4E6ZCYhYULGvMJ1zufxC3xXwQYZGGrMePfS3mx86zHNVsKBz1BYgd",
  "key43": "QocFQF8NGjYWbi4gXZbWXbHv56yJvhBrp15R4TeKo3bHGVLjnEvqnSjpmMY6WeuV65TLQFA5WURyWWMkHKzage3",
  "key44": "56gbt2BVvSZDmLpUKV9AWSCnDYGA2BTfHv6Zf5pCg1qNB4yjp3h7HftE2KV1mFb7KPR5iaRJGK87LJUGmVkjfQUw",
  "key45": "3uLL1q9xYHb7nLKFC22HhpybAJRbEpCTicMVfunZX7sJX5vSkv9G2D2oKf9KvZmeZT3QrDhtS4f3vKe1k11D7Dju"
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
