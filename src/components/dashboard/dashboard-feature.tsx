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
    "2QcsCEc2XooWnADvPPa2vAmmYV7bUSiaSs81619F2LCb2XNG1t2MKiqmiuEbDae8ooZboAxxV4xyyJPLhebBfxod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ae3tDsCkp5jT96gcAwEQJJDjaEtKZgxrwRbULVQu1FcikiWXNz9E82aU1Jtmuk9hkvMQc2MRxtn4emzR1mLrfcA",
  "key1": "gyy3njMujvMZBFcUth6MFWGUi9fJKkT6UjCAre4iFBszfni5bXtXPFtdYBBKM8mmUFDUAzQQ2Mhy2saqJKK4mKf",
  "key2": "4ea5rUMtReLPCbpBkcNoSHvjutf9EgAdRhLfMwxmKePgQ5VvUQRVxcu8rJNAceF3PC5yZ2SU3FqhYwTx7ymexf68",
  "key3": "5hPmd49gXTDXE9959rc3o9Kg4nXHxi7Uo1P3Frin1x43rHMnfYtVc5bRpUZJP44Z57Zp5neWXiuJMH8M1GDKb8hX",
  "key4": "DNu1FEhNgTuFFvcR5NLi6UGjbdh8hXf7MejsdWr9MMkVXmJMA4cYHXLrnRMFQjJhobnVqrCYmxfyZQ9PwBhhUhu",
  "key5": "4LysHq922ShjtypxGuq2coxq6sCAeAspU5UEXaqy6TBh11tgTTY8RHVESAn96W8VUgt8XCyyDhFXGwfyVaFoGfuF",
  "key6": "5ZRK6LqG8YUwmdBMi3erMJDD7Jtge8gC4kuZobczjxJ1VCK12GVd6qJ571x2rCkgEQVjpbqLXWva3nwZkXEBXrpY",
  "key7": "4xdDHPjLxJW7FSRpGJ4MxChYsTwkW2BZT3uWSHVfngziPvhFANnBXXv16cnx4vaCUR8yfVZDsk9NgPLCkmhhSW4K",
  "key8": "4RaPm8FKh3Q8oQzpKF7SySF3DvKenSGWoVLZooBCZa1w4cJRUCsJeC6fzb7J9yiPnMhsUgDhtmjYFPPer8os65Qa",
  "key9": "5zNYum1YNXm2UShPFYZfXczEhmpH6ukzcdUQNN4R6FpNvnGGuQRRcedkYnLU8DkmuELi1igZq6GFsRh7biiw9Z1a",
  "key10": "3GubRxGmnmictBJMKLezDb1rzZJZUu7ES6q1zfcuveKmDiRgnETonXJo6Hjmr56TyL3Z1P7JZJ4nNTFN1NbVTwmh",
  "key11": "4Pm6mMrS7os2P1TGptW4jx8VcBjuGniGk93v2WhEHzuQDVwtoaP1SJNXNhzK8rErNqh1YYyuqMUyBmnq2vZnTYSn",
  "key12": "4WuDMFfDqfrWbTezpSzxWggKhztqbfJHmEJ6NTHmHts3Z3QNMeRS39hmYf6KZMFZw42PzrxvGmL7wTQ9g8DmVkpH",
  "key13": "64dKzBqXyzXMSvisjXev8jCJSc9WwS697ShaWSTRn8k4ttM1n88toiqF8otbxtnrNSwdQ1ovSpok4JqBJGLTkChe",
  "key14": "5Mtd5A3HNpKbNWEBJFjeLL8JqwEfYQqf4hvtCqwx3ZTpMG2YDhxdmiSYgAxrLqp1BzBmgRZNUboyV1N5GGn1wWvN",
  "key15": "379LcyNkze7Uw9g6A429TfphXb8PwXkvcBspXBUCdgLxEMq4m9eSfRKDCkd3fvMEbmmUd85EpghQY9Xa9EXh3e3z",
  "key16": "2zUxutGTo51xv5xvBEv2pTJTfB3XkbLVXLVnYaguWwm1oNzGyMHHMzdUZVGi7edAhpDb5hq55gjUqHUXsGQcYAHv",
  "key17": "2cduaCFHBKdkyUnRySPWNSYLKo5pzkgLTiF4AHhSs8HWBD2PLDwQ3HSBt4fCkvbyX8Kv5FNRmuCTBDd7aWfvsNHP",
  "key18": "5GH535bh1bGv7zSCXhxaYtivJ5jufg5CrR4F16Em6brEVhLXuQeat18wETDHXrS44bEjbvtYbRPQ18vi7tEr2SP8",
  "key19": "54A3CtWegaSNVfZDyr8wfBYEMH2ttqR7eSyXJad8Qk9uzbdRrzgN19f2ASaYRtpxzh5gENmhpDEFssAZRXFeL5wT",
  "key20": "GJhugFo9fLYMt68N4gviHgDqAdhn8aif7AWi8yRMHdJ1QGWbCA33B8Co1LDHfcvicyxjgCwp87pUz31danQT8Tr",
  "key21": "2VukoJxeAmY3zRFE4WHcxzonkgjPdp9Bt3zWycumLr3J7rLF5XPtpVTTvBqqGSpqGRJ21EFcSCJgp85USPjBsstu",
  "key22": "5pgRkqHbSX5t6Wc2XyxyswexaZySa5J29awRKdSapuatRJXtGqX48X6wuNgsSZAzWaW8VCxALm4mPYamsErmFZDx",
  "key23": "VvLCwaGDBMJEhg3NjPYjVPMt1P3ysLFF38PBuHxsbE9DYdrDq6RBoVX821ewU4qaHgKqrnCCaQVcAduWb9R7ZsG",
  "key24": "2XyZfa78NW8tjFDvYPjSA7o65Z51JdL3GZ9dnWeeMumoLMBgZtCnNpS2ACfTNdVmssmqAW9LNFEXHxH28t5LxMBf",
  "key25": "2bSvs4ibDouymUmaTaQ8AiuPn389hurMfhtaEEYEadwjaQC87itLzjhsBSq4Z8MTiikDvyqRaRwBKZ5qxhPY6UbL",
  "key26": "5HFKm9fpnByXyi3b418ykNZjSSqbFDCRzPjCM7vjPTnAYu4EeRi256xSp31HHyHMGxtiodinbWexB3wa9oeNK9uh",
  "key27": "2WhtijFbstvDyHhTA1rmVnjRa2NnDBg2VBxJwPAHx91tagEVVyTKmjK42A4UoYfVewQSH7Q8A9yQZQ6tYYNTDSH3",
  "key28": "26UpXH2167i8HRHj7eQP3J66JT2mhY84m8dpN2i6VoKDJVMHYxZaZnBhHBEcB6ESYMBgznvcofSwg2NZHnVvGMP5",
  "key29": "36agqy7jEnM6Zuy6M2RxXEVkzDUr7XMGN8quG9R9e2NMwaVeRgnRo86LnQHcns3avqi7w1vSCG9tUYfMZGTvVMkA",
  "key30": "2ULgjX5JzxirYFQ7eJnmePcU6pGkG7nGZ3UnZqsGFm6snE7XE7dPubxB8Cjk79sfWk2jL2ftPr2KN3mHU8yrz3Mb",
  "key31": "4AvyMox9T9vhGKULhNVLDy2FH1HRy7pGH96cnUQja8KqCW6Km3TaTnLMu6oQnJsPtrA2j9YRRSKJj8Sbpq1V35DX",
  "key32": "aoBD3sw4xen5M8Z9QXRKp4ezMAJ6m5p5RWhaoL6byoBtBNoAcw2ENoKv8CYjnaFc8WQTr1e1w4dY35nLKB7g819",
  "key33": "2C6jd74o782ruhbRpH9MnecRAvK9nJdbEHAwbqrNWX5rnjPgZMhPnMcn9imRhV18t6uNHCn8pg6ryCymBqiUTeDp",
  "key34": "qMsX8Dfg7eJDLjSAmaN1xSrXQ7oH8XnPyedoG3hLL7Bzbv3S3dCiFKayVhyAHjojD3UqSCJsyiKmRnqkHqiYjom",
  "key35": "4u6XWFtr4urPnWEYJ33ujpPXgaRDGfKyEXoGgGoM9bRaSonhZEQLJY9REijCcBDvSwgw2zBL3MMNZjdNs3mJFVGt",
  "key36": "4e7N8Uq5i1wwmhf88UcSs3TqNQZaC6SkcXzmaRi6oiNq1qjBnuoP6KzPf7WdNxEZCvrGcGJsCkq63TA7UJbUJzj5",
  "key37": "5ZuG9jdh7D5NWHaAPSTno6igQawEF2ye886hzBM81zwAmdcU2xMDyatBJFpyT29VCGEz14t1xg4ofvXgvpd6Z8CD",
  "key38": "41Mr5B7SsR5Ei8i3Ac1CQ3cpS7yywuHW3KgoemBcaUdn17kHAYJFfjNCTMejbUoqwUc95VevAymRjgkpQLcoNADE",
  "key39": "4pRficBCz39yZm1S3ENeqnwpAEsLRqHCPW7cMKRAhgH5ghy5KLDZiPA1QzKJmiG2Gf6Ua29a3FUtqgG27YseFRHb",
  "key40": "4o3y3VfMQ72rGMarCxA9bbtgGTRxbDTMT1RCAK3UMoM9h2oGi77deq8ybTUe6C4Dze2ED9KMJudsAxdBpNmgzohp",
  "key41": "5XpmzDxaxhFu93Z1HCrkGZZ1AJdWhXk9xb6LGw8eYfiu3E1SHQtp9xLQepExT54ZMpkKawuZWQkwJitnyr8oKEdn"
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
