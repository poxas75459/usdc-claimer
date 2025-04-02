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
    "46q7UaojBTpxhPKxmfLdDscDPsUX9yZuPKzuyW7SXeztMhcNtYJr2gjcQAxQhWE7BEVpA41oho99vFsCsj8o8WRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Uu3rfEVmDQfAARzaaPnFXx4EKsJpzMwPrcUBRES6faeC9WLXHDh8bUyPpG1biM2BSq7z3kyF9zjeLHRyfcuThtG",
  "key1": "3Rnt4f4nTghAz3JD9NmmYSupGgzRpAf1Q6CZRifrNe63WuFTpZScKfDxSNbCCz3UKxGeDjNZo8J49wu9ug9BnMnV",
  "key2": "22cKnkEfCbFT2ikXrJu89Wrkz2rEE9onW42NMB2CuoPBkWmsoY6RDJWyBJdfJZtbyxkwaMZbxZShvCUStYdPKTg3",
  "key3": "2Eptc2Pbr4oKYXLQLXwGCy7EiCsQovZt6dmtjQbB2gXafgAebLVxvjet3VFcQNdgLPdmUdmMehoTs9xStLWuKm5h",
  "key4": "jWRTQjEPecFB8VfWu3vvvxHywvYcvdMhWTAxKT53mMJpGHPhewYBahMvwWL9q8bkT8g5cY3RbRNU8K2cvpUmywN",
  "key5": "3FFnknK4rC5B2svxjrNpFB36FEKgHMYDpuqmN4K42zZyvE5Wre2TWnXezyGjvN1GecR5TNPLvgwhLUbmsDZr54S2",
  "key6": "5enM2RDNQwLKvgP1rjipbF8TGTq5Ugv2wU9Ejyr4tkTEjsFiEvtjk1rip2xeBRwfgcPbV2d37WUKyGN1QwNjLXUB",
  "key7": "2FZRQzcMopok4vWvmA7GCxdDhwwvSFyV1u9jtx37YjL1yFrtgKsuZc51E3SAVhmr4jGZ4zbJtWFMWUFbY3fT6rLP",
  "key8": "5HFE3UnBWSdCpg6ZhZmR7xnU3MCBVQ4BniUqrPjDchJeLsj6Qy9BDLQWZDzyCzhHqKStysW8ejQKxBTv2z2gHJ86",
  "key9": "6dFK5C9s8jXMzBbi8zUu4oZYNzASas5Wf2Xej9preKiBZrNH4KRjBtetKNeBeKWJfkLWZ3cpDLDxyPGCs8e1sKL",
  "key10": "34SEbgC3UfNa3a682Mo9fvWcnQMsufZDunftR1nKe19xqjiwKAszUMXChVCBmr9ARZ1sU9jjiwA8zXkKf5i2Vx7N",
  "key11": "3KbAG1GRYPWpdWTEEuKkqB5GxggKWdcXhu53NraT1NEoZYsch2BNtuSVMbZ6JFAA9uyLLREjGt6fBDCJp6SY82VL",
  "key12": "qiUK7tq5WF3sPkpvjV2xKLUaGLGsjPvbYYoFFsJCWee61Qd3dE8p7gSMrJnb8T1CxXZD5rniX7YjkHzXZj9DmnV",
  "key13": "4daHaGj54388uUWc3gstRv1huLzref5cEKsWfcsk2vQH11xVaXSzLe75BjxaH6XitXaDjpi9aji548xxSJLCjCkm",
  "key14": "2UpzQJfrnh7oiGetDBQezptoasgW6B2KGiD4vSEU4FJf1RdaT9uehZwrxkPA5xBRQ9rzsikR6mQDsvsybme3dAgs",
  "key15": "3GJHqgjBtYbkLc3cN4cRXockp2Dde9keqkeeupgmYHrVYvH8zN3Ses72K7BaSzKuhz2zUURycbFiBuuSaZWgxtAu",
  "key16": "2HB6cEeMSeDFYUankScX16XKekRQ3b2Bqyw5qMcm1tTDdif8m8SQckMiTvpeQDrhtRFJmwWf4SJxYBZTuNdiS8Y2",
  "key17": "mXpZpq6Ui9acjzYo9VSMvRZJB6WRPrWDmhr2nbp2M9eVwnqhkNvnjbpVPYGoBeRdj7iiKDrTirqRpuGbU8kgPcD",
  "key18": "24ke8QEGx8VvGaGRnYtKUoPhKukFc7paJXi2iZg1eJdT7ytcjfUKzGdUVVm1UeABFTFDy6JGzMsXfCCQcZPvbaBt",
  "key19": "38V4aB6Gys1EmUuFSPrGW9YeVSWm6EwqUfj6Dz21XzaJ8HY3EDfzJFRrwdVkWchzrmpuSLX7dutwHwYGQsKsh4oR",
  "key20": "5Bd3ycYV4Tb54r11KSCe4mJhdDXHGJTEAGaNwdmQRAhVkbuGo5pQCSg1vPrRDT3Jdsvhjk9ZwYxXeUSL5tftXVBs",
  "key21": "2bvAUhjYQhgPbtWVFC9XbCx6QiRyHx1DFv3kBKQSV9m7QKwNLigMPEYH8f9d9nVawsUqPUXccryDCwLqGK1raTKp",
  "key22": "DWjVyw1aJ3CiXGSqT7kECPN2GqeiJSMZ4n3fNsagMDveQfAXdqCvH3LdpPkxYAyBuYcp7ezFB8MaAhR691UoVjC",
  "key23": "4n6S4DNKRcpm9bEuiJXu41hfmbnEoZQ6EEV68WMkujC4aDWJHeXUXmtDhAwP1K55xrRTPz9L6jNwY9bMTrMi5yem",
  "key24": "3Lb5FzW957Ns76kaZ1VYF6Jpb74A1ViASTSjQNhU4PgDtYsFeXGp6Quw1SxbjFpVRYtdriTzuc68Rgv3f6pco66e",
  "key25": "jtedpqR9Se9xYuUycMhSoCQpS358g1ZNroGps7XVGw7x1Cn92jJicERGtThC3VhmbmCEfZDehfRrKhRvn3tr2pM",
  "key26": "67fmXo4QEFsk72cLaA5dSgeguCMFf8fdV5qd9VLVYVGY5scX7GZgKQM5JNK8vqDPKHdNLrTJweYoy7b8XdgPbbMj",
  "key27": "3Td5sidz5KKm5GirGZBVrNHvfmDHKECZJKBEjVuFZRDR7HcEAjrSL9iZmc3Du23q9PUR8wfKCNPxFe2gX3xtiQbt",
  "key28": "2A4WNj3o54pkdpdzzCVngQsd6G5cRRubfqP7wKyHSHYEqn76mag7TYGf9nB44GDpVjt2ccBYDUt1csdgCCYvY3wV",
  "key29": "2esHVBfyom3mq9jFbrQWuZLvNApHpxnhmXToCP3F2crKBX9QSjtxrWJjxEsnqDBoRjJiherUDnFQSLmrUSDhUz9a",
  "key30": "9vZCqDJPxjK3TMrqGcRECzL75qXcSVzXjrwXQ54Wpr8WQhyF2iRKV5qy7Z2ePqziuCoPkz8ukQ45TgmSFkqUq2e",
  "key31": "5Qkg6kDrpnnRe1bHz6oJRNRrx7L3pRgAhQ9JTXvvDZ8Ykrsu3saUncf2LVa7zxv9efijRcF44BxdCbn3hxCPeC5H",
  "key32": "4teWR1XvNbJdo5zkesDcmNthujAEVTFKMgkKoWF8QXHvRykhS8t9aP8Z8VYAUBYWjjAecuP3XGFe4R2i3SYqEWFz",
  "key33": "3yXMwRLCrUMZfvMksW5eQ442dpaqmLQABYgJ4kU6sXfj44s6tNMsa76Am2qmU5idFsY4N3H9e6duMg21aCzSLnD1",
  "key34": "2Y9erZxJ5ZmheuzqXhujSDxALAyqrqt1Z6di7BG8iNamqbre5QNZV1cwFewnLjtfEhiCuVHSt8LE2dahbNF7757V",
  "key35": "2SSr7hb9p5hhStp9AQRjmVjWLnsgkuBA1XmDyQAzzAtACDX5ywBpQ7zTz11tc8m77oJCWv7UNSigQx7UbU1Sx5bf",
  "key36": "57qQk12qj4sa9wnKC1SL43vK7EUm28mht1UPJMJbS4PVbPgW6kfTYtCXq3vAPoTocvEBNJxiqCCtViU9X4F63QmV",
  "key37": "2qWBJCh3kmRu2UU2BzzNyAP8VFcxwaXcM2x58L9WGip9CkPMW3iSj2q2uvruV9MqU7jRuSUr94GiDBgXsagou1d4",
  "key38": "63Xr2NurQpbT6uSJztBVBxh82X47FgR5zXNdDMsmAyTtRRWqNtzGL6Mu2SzcELd4k8gSK7gMo8CbQvjp4ijhmhxM",
  "key39": "2nEYo1prq3WzwAoZvezrYjRicjRdmeoNc6ikfqMKwSdhryJBsH4tPU9aYxrxTNgGojK5PfHwz5GFutRD8JufsiRo",
  "key40": "4fV1YsQAoEHigk4r8ibNDnqrwyvFJvUta4Vg13NALbqfxhHSG1ASsRPTTEW8Ay4rrMdWMakCzDShBTRCn6wvw7Fw",
  "key41": "4SxBrmLdUM4aij2PCdg7e6JBcgSndwfXByR9B4NAb7P3kqWk9Pkh2u2TbwFPByNXZnnWDe5prFq3DZMMHkS1AcQU",
  "key42": "2MmWU6scN7UKQBax153hZRgYyQUeZdpddnSUs6dG3tSVG8d1gZLrJpV6jxjsJJW8eJbPy8L1jP57wktsxsDzmZcq",
  "key43": "2fEvJcmkdQUdh25ziPKjHocDSssDYqDT1aASFL98iZ3AVTN4xAdGbYR5eMYeXzXkNuX3m5nbyy9XB1EZFjoJLu3",
  "key44": "2NTpsqr4rfTVaX5S1oL4t2sjL16rJm29YwxtXcPUnYEhzp7J218FEquSh5MhZneDe4ydcLQMj5pLstAnewC2rZGW",
  "key45": "5vELC1MRQRAE6abpdCWGuqLU4vnzVjQsBqNzmMVUqYWMfgk9E7aowxh8CB4MERgPYtQkw9QEHpoJo9HJxJAaZjy",
  "key46": "9gcwCNkEN7wGK4Rn3fCpC2zxS8gSoBJc1AktkGn3TJPHCTUVj5v3MGmG37oPhXKrA3QLpdeo3VqUqrMpRdea2mD",
  "key47": "5ai7WrhsjcBD5VkX68paQgsqgBy7PSe3aDrep7LhrxWe3xGrnAcDdT85mG4nb1CPq3hBcLRmcW3hQV46KbbN1da2",
  "key48": "dxL9W5iNQgEdnYbEUB4jZo5a2xB62ARBZtzRCcrEDsmrw9Dn23x4LngowtYtzQnYZy11kRsHRDzdKoms2CUT6kK",
  "key49": "25iTTmV3f7Aiy5RcE8b3QTezNNdUgpD1BHQC7ZdKe6zoM8DYXTVQjTs2LEbnsc3tvdzLRSTCSAZgBFcrqUNkmJJw"
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
