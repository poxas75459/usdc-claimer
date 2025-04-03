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
    "3w3JAa27RjokrJPiCUiTXCkiiksf2HDxGCcp7i4U5AGu6FxZtppj2uuoTiuQv1zG1Kmqbxa1TUDhgzxf8zd4kqne"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c88yRCW8RA4RazhJqW2YNc439K2GdoKDD96H7zYwfh52napPvmNJv6uKDezRjzsCvLgHoR16zig7tryG8DhimiW",
  "key1": "3yW6gaXsUN289C7iacDUi6k43dx45G5AoDswYAp37mHPJj4BFVDPoZFmXbWi5j6wfRY4ifircos6CobYvvaxYVoN",
  "key2": "298YL2MuU2uincCQCegCUcbmVjXjRwkD68LNRK9qMm1veMSBRE8tXcdnFtEN7YYGNgAJb2chjtwDAJc8EdHHeHr6",
  "key3": "euXeWvR9UA5fzpUap1iLubq2GsrUB2vRvG95FpyNnbjswgSYFzdVhyxVnvy6C2Xaj83Kq2kF6zyxFhusvbJTVJj",
  "key4": "2ceaB6RKo1h4dFSXHp468KVqg1JsxYjwFgr58GvxHPR4DAgVWroPS4QmcD2NahRavqVP4FLpxKuUQCXvjYB5JVox",
  "key5": "5FDR3S467vNggSPSjU7ar4gY1a1kLaU2G3PcDz9Zq9ozZZ1m4iVycMZJbgRuJsRBRMix8B3pFKXkkWaTHUXsoy2w",
  "key6": "32VTpbpGYMHzoyQbueQV242WwSfsfmgqHDo6fMscSinkFLAqMsQWPKcg6JpeaQpUs6K5oEf1TzYgRh4Uq1q9UM2Y",
  "key7": "3Y7CSGgxAdzZUBE6oADwfrc8kqbMM7e315bBQQcfPBQipeNtcfrVMmmuM54zVmivsJ5YuEsmtdnmVc7b1vdqe8qX",
  "key8": "41yuuhYwboDMKeJ8JFFJeC7g64f2A3QpRyQdruq7ErzYvX8QFeGSscJiVT1weRMSiW46nrZX4rbyifNTrNJyo9dL",
  "key9": "3X2kqMRcnmwBsRGYAumxGFjKe9Wju6tMw9nD3rdpRekBJY6tiYzi68pusCEyUDPfq9WQj5ewsmmsL4nszNaXmXHK",
  "key10": "3JhrGSht6Z9dkDSiCoemsfWn6PQq8pDV2RBsg5VswgWidSb2SK2fGoMJRvRiked3AcMsa5Tt9Ft9XXbupo42UMbx",
  "key11": "4y81cSxdbxbhxDLEUaP7o1sJKyBeK6V4y7dQviXDVtEHHmjqhydLQ782ni6NrLiSj4nzk6TNgGdFP9U7NNvDacRX",
  "key12": "3VTHsqxtnT7TTQN8LN92oyexWPrN2pPr9nhzNV2Vtwi4TZvoQB2jycdnVMHyueGYAL8VefZcUxoDcjaynKjyiFKS",
  "key13": "7S9KZVx2Q3yiUYV93hC1GADihWfpy7FmzUvzHgAbqie5hWfMzyrozF2fHBgihRPtVFqGoyJjcPJ5hVdEQAKtYoT",
  "key14": "2XPyFEKvRHW2cUQUtDjQu43SnHoSa4GP6Ga5NjdLvzF5HapuziX9xBTywZ45XEn8jq7jnE2E3eGxLz1arp6G7ZgP",
  "key15": "4rN3WzLpyweYgjzXgo9Su6WCnW4b6CaZ7AfzZZKpuFGkyGQJNyKLhY7ccJpr1moQVFhauXB9xBEBS3U2E3WnHJC5",
  "key16": "4VwsrGAPBx4MUL8r4fnvLAafnMrEGmja5Ya2HMhScgZA4rz3RzGde1K5eV7BjL51hEVovr5w6pY1S3wovEtxAS8Q",
  "key17": "2xyax7NjhtesfSxY3zELwQJSpCvYy6bYRXNqqnNV5Ng5KsDyWvjk8jinGvYv8fbfVZwv7hWf6e7XHkKAptHEgmH4",
  "key18": "5KfVahq69J88X2RjGbDN2dYxnNP5MJgKKD1TwC3HYY78dPVbGneUy5DcKDv6Me8vibRQfKG37ncTLtD9HAQFMUFk",
  "key19": "4hinYSukBK3VgbG17cctYb16hDne7f52mGSpEf5TLKPcmmp6LDEHMrH621EJ885yFJokEk3kQgco6LVidw7VqTSn",
  "key20": "2EBRwor5njaQoaxLMJREV9UKYDsmEnGpuvCKJ3Uim4v1gukfwznEwU127jpp9ucj1f9MmoU2gfJP3hmDNvKgpot",
  "key21": "jR2NoWhMcg8ndHb7qf8pJVK8GiFEJms4S6wovbGXwThJDvkL1VbtYr3KTm9khaGcxXs6qVm4FKVmYaQJ8cyhKFV",
  "key22": "2LYuSZmWoQh7WAoAhzpifcTvX4jN9JMpaeRQ2Dq87TaZ3ueqgbgV31X9ZBTAVwvw6arZV3ddLdYNNMp1VfQV5uLZ",
  "key23": "5GJ9upQHqmHQ5mxzdFBhfhLcYp8jLVtowXrqNHt1nEtcQrUpwwofy2NpKrRtgj7PZ6Z3Q2dcthkA5CWJFb3hs8wX",
  "key24": "34ajc4hu76kdPdoAX2CmvNFB7EJH7uMDZyRQijSqaR8ktZ4KTBfwdi9NA4jC2q8gSgefmqKK4xAyxPCVZddnHfaC",
  "key25": "FeDZZVVimimxm7skJCmmbCSUaUFi31d48wF6jSx7EtP5nK5bfCyR1gSeDxDKcq8kvyi3zvjTurzpwJVGLL4SSHg",
  "key26": "4rqSqgSErjeH5C3GcADkR3LbQRQo82jVWD4LuKUKSNQnowyzppQWFGLqmbFFgVj7vfk2JMxm4NnkZw1XKVX9HgDU",
  "key27": "5UJxzZNW7QBgMYDJfBE3Z4T6USxz232xivb1RjMtDhsgYZxuYbirvVDV3acaS2GnYhWhxraAsYy3nJk43ExZ2F2F",
  "key28": "nJHFoMtctYi7qcdXHmM6CayCQjsHAtb2tQk1PAGgrnYrEvUp3VAxpsuptocyFu34fbwHKsv72PzPsF7WvNwhGUn",
  "key29": "z2oLo6Es96vvQgV2bVUqWW2pwgXtA33KBwRZtXMxmXsdhNGp2pYv2RY9jtHe72GbiCpm6xXCGG2mgjBrZjKEboR",
  "key30": "CVQbjpmW3EHvPYLec5VAbyWVZasXaw6St8FSR31VkguW6MsunP5yz1rrZQytefeughNeUCJh2kewo9SGk9oPXTP",
  "key31": "4izJNXgyZLdHwnv3PDLHxwANwyCnATERLM56aRz7Svnd2FFqqDkjVAf5vXM2SEEs9LG48Ld874VpEgmGbSd7f1UD",
  "key32": "tFmQigVrUUCN7kyFUN9hUTjrtEBzTZvaDPv1dtkM5VfxgPz13LrGPDnchjxMiKpX7q1NMdR4bwuF25AGe2iagGJ",
  "key33": "3sXVjpYdCb1xxEhdT19BRsBSUvkZP2NAXb2yejvxPEnNCmFatjvdAtTzPE5uq1iwQ4NYpfR1N6miKQtrSx9NTk7v",
  "key34": "5xWS24w3uMN7LVsyNHKre6wVKFUyfNBSMYVoDVTMC9GnBgocPc1dz7JJDJvumLa8biGQ6GEF2Gb7cjBJnYbsi11B",
  "key35": "5KNSeMaiaThum7xz5kMRBPgH4AAAvagNTc7enB5FcNr6iSverXskN9f8KeNjAeW3nTTEXx7jgixDMS3Xs3uJPfxV",
  "key36": "vm9Y3wKJVVukt9dcFBUUBk7vbXL1B6Es5CaccqxX3oEx2Jao1mGhtxaA3j9N9ZN9aH62WHaWm8y1EFMDaaUxCWe",
  "key37": "2m3WNJSUCKtPPsHQ5C2uN84r5xiZ2nK1aQvzhVNcjvtPKMoRmH2JzYC3KNLnFS8Bx38zySwkzqApZfUN9TnCKf3K",
  "key38": "3EQk6fD7asdkBoJMPiA4yycLR9vw9nGknnuHxtyMs3kZs3i3hedY9ctWoriux8tnn4X7etArPdDAYLkTDn6vkcrE",
  "key39": "58zhgjMt6kAFzpYS3pAuZLihJFRxZRViSJW6W3qnyf8uSWkm5dtsgKzCE7nPN7R7eGqKsKuLqqDqzb2vbRAW8W3W"
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
