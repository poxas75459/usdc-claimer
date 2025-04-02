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
    "3JLnc4ShioK8H9C57Pyd26XecJHNfTDVxBLUpGxUCtvCyh6hQTcvd3sWxr5oDMAu7aDzjdN9u3CeV9DYb7SVxmeb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4amiyVdhARhnTNNchMeQUzQXv3RV53BUzg6h9DTLcEMqtLewp6ooDR2WtkWDSsB8PWSaNLzpx9WnyuLgGmGEUSuK",
  "key1": "48NwDhiFvF3FnNfPSMEZ8KdCULD8TNS6zzXAeJfRLABo6feB2CtRgM6XSQnHi8hMxknVYMGfZbozERcv3mRVXJ6A",
  "key2": "YS1s5Z6gg6uC7aR6bLfoBW8hc7PS1qMiD4PoJhaKtWJRVuenwrj58dSqG1jcUN4nL6Yx4vab5nJo4k4vU7cQ2Jz",
  "key3": "2UdEhRGFCXy6DfvyAu8bbqewQnsB7aKaeNzEDqoohiCeuLShuYtH2cj6wuk8zk4YRow4fVSsFwzNgwtTGgXKNXK7",
  "key4": "5YBcwNatwiHdBLMy7aJQskoGaapKVJdNZstMKeCJKxrEzHr465zyniShFHzE3m1cQwQ11ahesjPHndp5iRCC8dYq",
  "key5": "2zqCPq4hFttk59GqmNe9G31oAkg122vZZ6Gepe6ZumGok51P17vAW1niaXz4HqefsAViVbt9pkQidC5oyFuWDiU2",
  "key6": "4qf5i3D8ruQUvWVCDLdrnwPXai9WaTMdEpCBYrXPMCN64eeWKEnk5CHwmxgxNzc7QhyqgvdckY6wn82fWYouTjef",
  "key7": "nbKwQe5HPUWUxbEKY9iojcX1yeNZX7BAJoov21AKYqyvZtM7FAG55BL2K537YpMJyLKESqTKFZ2HvhC6VWHR2dC",
  "key8": "2R7y2H3dkpfbRMXLNUcPne9L9PArKogKkogAdkihGuCdWNw8twD4bTKqELjfpcBa1dbXFMrpZLrMJkTzFWQHbCDX",
  "key9": "2ck7Ang7DwtJFQKEuY6yPahNrujUijYGVJe9BMVcpw7baExKaJHExqj6JCPgB1EWYTLZyJUKuiGjYdWmGSiuKUzE",
  "key10": "3m6C4Ku5A8LoZ8gPSgqRC3kiXdk8a5Qqi7XvTPHTwK8R5jsFTUCBHTioLYh2Uibn8CZo3CdtKHLE4Cj3L5HdahDy",
  "key11": "58kriPDrwRZfx6VaoAGesonHgRxsizPqoEpqioAqnJbi2RtHjfbNaaBuon5vACDZ76nuQ8J4TUSp7WDPH6AHknrd",
  "key12": "B4aU3Bwv6tx5gBQG79YeVtGF1k6g4zyZswVTD8ogSNeMugi2b9JRMawLihXUyKE3RG7MLdbZo4kCYJis33DSQ5K",
  "key13": "4XoBEoxsUpYLJXgiT6ygMpiKp6dFGfHQvx7HhL9jJ9Msi8CdeF3yVG9kTPt7p4eDxu7HfJm935sYQmu5GEsH8NBb",
  "key14": "3mXpvbyKVkGN8CmLp8VmKTtwsrM57jpHtxjZU14SvbBCaHdRHD1e2LNTwsvmSMBqLjP6LwD9Ekok1T8XSyg8TrTj",
  "key15": "rVZgsr97H8jgDv8VscJ72rQUq4F5abA2AEb34XtUAwqc7KccUwzPfgvf8knZpxwukbRFd7kzRLhxXLcL7Wf4Uhm",
  "key16": "5UVZ2FwVf9zWxF8XV2ffnoPSmpd7mny3Lddd98mVGy6yjHVeNXT9W58P8y3G6dcADsEsyQYGBMvPqZNKPg8z3fPF",
  "key17": "3VzMkECSLcahRM2Y7Ujno9eHnhL87JfMYeuJEanq4Ko11WbJXf8wFJmH8SzcYhp5vejo25MqC6HQXeFMLQR31QM5",
  "key18": "2v26RXoDfiS5hSwRBMUC2JG88TorvkLstC2RmMUBQz3DptQEStNrRdfSnvjWq1GAmqE38E8Bg8T62RnQgwuwrg7B",
  "key19": "3XCFM3N3oTYvETp381TXkphfYZ1rq2PRJKBVmvnq98hgymHEwkAStvUW2N4rmAce85b973fYVi1uSaWVkgoBZSg2",
  "key20": "4Bt2DT7UdqD5yYZNiYq6dvWPuJmHTn3oNiAmUxX2SQ8p7f5ByNeGyPBkDy3HP55qtv9LyBocbPm46aBUpzgWZmfE",
  "key21": "3upBKTQfwsK5zi6iDqMqRoBzaPj8gKwRKykEw2n2GEzwHtELTypydbRGhJQ44Hffcr4GKJmkcXJnupDcU1fL5VwZ",
  "key22": "M4HmtxZPLmzNDfxpTpsuPAU8M7GiDXweda4FeMf12wbVoFuWY2VmX7jaPndFadELVHQQ4H4AZuMx3Fd8DPuYtSm",
  "key23": "2RFTPrqGN26CjbVTC3FUw21ZiE19tN96GCgwfmPFF1phXQhyLNonDyiB5e2xks6HWzHcbXnEUXVcgj2jvGbMr5Cc",
  "key24": "WVP2XSwiXDWHRjtC9wgdVbF9sGi8PnZ3R3ArvGWa7eVAkfY4PwhPM2Fc4RANYR2Biwm5cR65SVrBdZPtUmd4LS2",
  "key25": "5fH16nap5Sj2UrMzQK3F8tydaPwsAig6MDAPh5uGzmYFsqcEA3w5CPBzJu6kUd16hCKnwhdjW4CuwwM3eYL8j4is",
  "key26": "44PLtZGzW5vZc5AA7XRJq2euXzJNGeNBj6zhtwfCNUTiW7Y89kjZ69tSYrrgoNXBcR2CZcfLpG5W91LCAQNvQU63",
  "key27": "4Rbe3QWFnDapZRFqMwhNh9RWj8YYvYNWX7F3FE3Hd4CUitVMZs2eabuSipabpSwVwP7N8YWE8WeaxiBrfcft8Lfr",
  "key28": "4tXNXMt5HSbvVCZ4iexxs5cUv5yNjNabYAZezvxNwG3ZH3Hrp1eo1PUvfyfZ8fskxsMMvPq2wDERpKBM37spWETw",
  "key29": "4S8GDvWUwthyLQ1H2TRm5rcWHXWVRbhbqm6kYriE7WLtFHhm6yqus4ZPNeqTmdAGeNWEzYDvkd9sLLiJdKSLTGSv",
  "key30": "4wjVSs6tTV1xGSrWXW67FeBZVUnMW2PLPGZihmciUJSHMxC8WMd3jy6av3QsYPQfx6LcAX1KRQim7XB77JbPQyhA",
  "key31": "3T5wK1A7G7fbLJgfSMR8Bwy5BNHi8FvcsQKafpwNbASkozJ2b5ZapPUMPPsAaSNkPpZieyRwgKA7xLuRgfcCndRV",
  "key32": "4MFcwYXswY9BHWDmak36kBs71NvMZChBzEK8zZ6zwMgG12MNZdGBQ6uprGYBmjjoLS92mVKmc4H4z9gKQZ3S5H4i",
  "key33": "Qxb3cTSUVriaqeeyeeoFe7NSnj2Sp56fc2eKkGC8arWbSMM1RUYxZHZ885xvGXQdZb7PQDzrNw2pHVUV4t7dsAe",
  "key34": "RfE7sKQPqdrFr9acsYv9YeWKGqHnNL38XnMcHHJzHt1V4Gt94x7qYLcquU1BKPKvPxHskNmpf622b18DSUf2dBr",
  "key35": "4JkrxohV1ZgLmKeLvNrZ5DEwEWwNLx9HnxYpyqM9W9mRtX1bcvDYbkLS9jH183R4jDojx7XHGqCczYztLLESugn4",
  "key36": "127sSozC3R55DapPhYvmqB8ZpUXb6669g5Nb9zNWZnLCzr4i6FJ5EsjMQzy59gVmZxYf1waUs98JBccyjnu7YuQK",
  "key37": "4MsMUCVb66uUk66ebkzcqZpniJyMTtMbWXmLepyo5pvHMscgammqe1ZkUrzAATpCSnwzKuXna1HPPktqBZ7GUNSE",
  "key38": "2GKxySjakRrPZYvN1BcNtZhtZ6b5e9K59F3aVaa6tDYuyrYeqVWjTGpTBj6cP7fap9myPBf7nSbuhWStinPtx2RC",
  "key39": "2NaCE7GGBdMFMPiZ6q6NyxFYkGvaetc55mYLtp8Dv3hU6FAzKFFxYHLSg3WhTxqLdMxWxvd6BZffWNABDHYwU3nE",
  "key40": "2g4NxqpVKQBhFwrqSAghGyk4eC9j86DSsWnhxKG3gT3xPiFx4cdyGTQ7LHeeZxawg6ozcZg1AxFBVhtdx2irTuDA",
  "key41": "3Lc4ybXqwho1mPYPpHzxLUXYF13n3ohnYN7duCcA9jXb7sstxuKmX8eEnm4DQvzLUjnoVUcV8zBCpTVAmjTEawRp",
  "key42": "vptVgTpfUyDARN6HnuB3HcV9ot2FvcKmQwAyRS1AGNx9D5hJfRJseErW5iQGWKdX9i8LBMDWEbHrdiu1fk2zviQ",
  "key43": "3EG8goYtkn8Fn2NQeydUzmpFLDMuGbBioe9zcHwZhv5xc2Xv1PQXzhH3TBZNN3GPGJCiStUqhctmLcu2U18gxtj5",
  "key44": "2AwtD4kP7aetFB4SH4n8TcFVgeVxPqwrSruRzudndvGsiMAVXbBCCkgZQfxRgDv7A2RVy2j3UR2KN2w52P8tDDxJ",
  "key45": "41dev4ZzQY95yEy1R7CBJ7zYdQFe88GoH6CRLfBJxoe1oms9QwYr39DMn71JYtke6GcMDLSAyMYimo6HUwBWcJXD",
  "key46": "4gM9KvtyCi3Fj6o5Pdcos4sXfShzyFBNU7ALZHQLTzyGqCUccSgkpXoodB1bbefseKi3thP9c8p7B5SBv3zXjvNb",
  "key47": "23KqFGAzEMXp69MwximprLepkMpHbHEKjVDKuum3i4SvX5uVch2ygCMnwggURjYRB9sSFL3PMTeDCErw2JAPwJky",
  "key48": "31XYmf6uTAhLTUj5yDaijrZrA8mpUTwjSQNe9WWX2J172VxAyE5E1kpE8orVVq8ruJotogvGNtcERCkZQTKDGNNu"
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
