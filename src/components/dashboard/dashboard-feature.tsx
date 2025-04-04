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
    "5jVVg3KEUpnMqCHcaY3quuLyERS7NVi73fbiHN4DwbgDtsykrqaUZGb6jxNQrPAwunPbCj9wB9MqrD2azjGc8Tb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bAeKCRZuad93uFGkFVi47VW4iH4ff6H9MwYSdFZo8R9ZfkBut46384HoZfBCqCT4LByAii6Qg6ZhPdyNd8aKidx",
  "key1": "25W9i2AXQ9U8z6EeuQQDJmGWSUVPrW7LLLH6GQidrvoozGSAyTRRLS4zWyrobryWKkokzdRk5Nzv7UJqgbCYwnKb",
  "key2": "2wv61EwKscbwzLvNeR1NFvaquEEVN8ysBieUL3iTnha1nULa94nVppV43fYz7sSobNLfJpQuR4gj1PsCLuq2vTLC",
  "key3": "AKieydTav61BnZyPKXD3eMPYAtwt5Epjv7JASEXGBq8LAefzbdqRbVjrLCm7Vd2JQ9Cu9UtYAsgFWCJeKLHn34y",
  "key4": "5shQgqNXSfdDhhyYC2SKX3QUQ6YSmtmnjr1NvY2gEM31zzSiAQ8ANHpV1VHEYZ7JRT9StKqJoMBUeTfz3z2VNLBq",
  "key5": "2adaHAqLdSES6dVJwsxLNunGXfrW1oRR3s2aRLu9Lfzp9PL4RQTiCY7hWqLCsmu4sE4CJaFAn4MMnN9pPY3VXwmW",
  "key6": "LEw1GHaSjDg9zDfCKmhZZ7WeLzynFrf2vXCYaatbPZ35Nfqo7B8v8QPrNhUomVXHJthp8tqoL3mZ1KLUqVmvt7X",
  "key7": "2YmotpQgT9PTjXLpNanjaHEaZ33UyqqLDqkmyTRM4BNjHVGr3Dzv1GGdUPjL7HaZdCjMNGjHzQsBChHExycc3GBR",
  "key8": "3vgUj2B4YGu6CNzzUgmGUdcdsBEjMS32TphHZKgmNWuWtvX7dzZSoua7rrU4ivVmCCQZoFSwwa8ySBxxCPXAcEf9",
  "key9": "2q59kF6CGQ8ayCXBBjUXE1e9iRzfQJpcbc9gRqgEwBVpZvqa8LdM3sHQCDhBLScM9bHWcfXrJh9wbjtZ4JSjsbBk",
  "key10": "4S2aNwowoQq9Z3zymvGzHxvTpNyxJHRsYKuZhMnMhHx4vWqtQTCr1WUup9AX9Yp8NsBzZKJpjBfMFxBGe561fDFZ",
  "key11": "4L5aRp3eZe8GWX7XZboY5swyX3pD4MaZQWYJckvB8V7kbaF64MaVpaxrM6W8wbu7cbspBxe4ErRYdkEc2ZPjb7W4",
  "key12": "PX2FU5FPmFFGPfKXPTkwF1nBKqFX9xAN1EPezCZqC1zTdDwqw83BHkbwyEnbTR94qo3ZuVeawAgzcv2Vu88enVk",
  "key13": "26pF719y94Bmi19WKYhb3VG3YrhcKu9P34kniF4zdZh1WbV9qo6YXiQAUxzjHaSeyGizQJLLMr4kyB7GyFbbFMNp",
  "key14": "5pKzNadGawax4YkzXnqK9ssz1uqWHbyud6XrynVSsaRJ5ukBmm6S5VWH63r6F4vUVYcLteeVxz1dBSPQJH8CtiKp",
  "key15": "4PxL2DUWEGtNjxGVL1GKdRUkeMaR7a9zdHDH2gc2k5nLFiEXwoU1jTn6QvWZzkVAQMe4xpQrrx2HMxNm7BViHAdq",
  "key16": "46UFGyLFfb4A9EzPQ5jRfzfgxCpaVmdFxxS5vceo96nRkffbBnYj8EPsYUopSkTm1D44yY72CfXVHhK1nQ3h78wu",
  "key17": "5GLRB5EZEZoxqFaxbXnHCXxy6X7nXAqVZYBiYrE7ZkgLxq3kbzqqthJwcug6YmG2pXqm4r6tHFTwd4bmSEzvAtfe",
  "key18": "4MZGGAhH5qoAAYsaBcuEMCkSXmHBdCYN8sihQz8s14F3Jgqwou37kBsc8QhKQgQmFVHFojFUVfANhsxwzexCC2cy",
  "key19": "hcaQERpyHEqR3smdK9WvpU8zfHePoBHBAdb3VsCVLFRCEFarvwZr5ajRPHTTtZHdn1NQSF4J8ovwPjQAdLLNrh8",
  "key20": "4Yu4Di7Nv79GdtTskEzh7Fzs5nAnaH9wSJjFGCTSMcG4orVV24zGFbr7T6xt62raZX82SG4AWqa8ueAUxMbhYdJ4",
  "key21": "5RRdWJpoRTPPHH6v8qGux7WrNC7DwvcVkCevGbsARMc3esb3ryR4QcevQiWD9yMsBRC9uqupj5rYs3nXg7XZduog",
  "key22": "39UiVgx14eg3gSH4gN2QEGedkXSady6E2jG1qZDBpoqoDpj1zAXa1bcFfJirAThVensBBwZEe8Zwxa8seLRMwKhm",
  "key23": "4nuWp2XdQg6a9FQJaXLcnMasd4oeV33xsvuijdYW3BTompMrrY77ifUjjArtExXPdAHQ6NzNF8uJ1PEykFVd9XpV",
  "key24": "5MQD4Zc9Po4tsgu9ZehGUB2ans4EN4oheuoL3cbqYEBedmB4nDQHonnzpcEY6jWBo1cn2QfBYyxN6PCMi1aeEfNz",
  "key25": "4j3RvBrYy4v5wacyxtHDbgVqECPXzagb7RbEQh3tfaoivg9UK4YGfkaYdAsBPW7rMtrKExi2uUaavVpvsqkE8h3b",
  "key26": "55enCWsYSr517CgdQiT7kyHgADZ29or9qyPfVMm96GndsZ8SytKUdGUZR5xxXUA11agpxRpWMmFKRBxNGabyJHQg",
  "key27": "469c6U5wgfySP6EP79WT4s9KRXyAJEsfHkWNTyiDbdoZVsE3dvDXHv3K6PFKX7Aqp2F2t4mVrAmZ8jaZU7GFabdd",
  "key28": "zGuPcqQCHkLNSfbjhFFsSpJK8s8tBBk3R19C3xb1JkEKaW5c8NsLsDMVZjDgVgjsLKe8QDm9qvMix6oGtpeRsKe",
  "key29": "2o63SsWQK4A33FNUujRc1XkEFu1T1Lkzrz96Tqc8GLzAzxHif6JDrfwytDK6pzJt6fXw4VkgWB43huLazvCks96t",
  "key30": "5JiqAiWAViyVdvshcqSMyhqE1GawRkkDGSHMz1Ya59Jkb2uXGA9W5sXC1PtFSosmHQtFtq2Fc58fScaKkp5vmiuP",
  "key31": "2enGG7YFTxGG7tjbjR8AoH6nRXtrnS7duZ6rcE1qRArzfHdAw3gmc5VXnbgrKwUm2hWUoSmLREp8zD48q24pgKMp",
  "key32": "3rn1PnDGCu3Q9MQJuw3Yhb1fL3hUMzXBHjYdTDRJRS9wp8gY7h52uAFdwmGbVLBzWVqzM4YXWXC1cbdb5MjVRctb",
  "key33": "3aSLrAY6JV2nWW4JDury4sUoecMMDhXpYXdFetiCT5NnUcpHxVeRqPZN7592VLH5snpdAFaPZWnYj3TAh6qv3THp",
  "key34": "2XhXd5Z8xnFaArzGZ7Kc6rA4Yfb9ztLK85eQxgseHADq2UhqwALRdQcqxZf6FLScc3GgHJitCbWeD8ya9ufwBr96",
  "key35": "RKsa2m3LrRint6pFfyTiUDMuNeXzZ2CCpEisG7838XvyM484F6AFh5bbP9NuxREoXWpfddjsP6Ba8FjdNdnBZ3Z",
  "key36": "2FwXtWGCqDB4ruEJ6q7HqEFppncG7aXgyskasDp5jFxCWW1V1z6PBBgsSVRQ4ht4s4XKBHkzUbzSsP4vap8F9zyH",
  "key37": "2NsQx9Hq7WZVi2oYKL8tnXYYUqjUNPrRzjkKdP9fDAsGSy3mjk1STNP6qMhEVakWVXTosZhhPJudhFGkDcJYnQoe",
  "key38": "2PFsVZ9U7LKjrJTQGecgGRdanAeHhoq3vvoSQNHw1wKUA2Ae37ESdSxqpLJdNfD8ZwQvRYN3v7DEivSR3g2YBDZG"
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
