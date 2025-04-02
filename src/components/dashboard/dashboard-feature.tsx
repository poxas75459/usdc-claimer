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
    "354UMEEQJr6fScsADkruoWng6jLZbrvp2r7M5MkVb4FXU8PkcgppNpLX4fnWDHuL7a4tK2862sf6M7iU7vkK7GW6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S9xtmx2PKZNKVFK7j5phcVT14e3WtCvRNkPAdHRXb4tKxumAceUKTnAYWx68SNfLNLJ8c8WEufZ93bWcDoSaNMv",
  "key1": "3KW1736JLSXWGZardzHaAWrRqgBNV4bzCNVzaQU3VYiATWABCWq91BPhpwSBBg5zxNS2p32VWsUxSqm8qaERqQRu",
  "key2": "5XRcXjYo6Zcm2DC2SKh2F5vEds23VB4sm6TrdiSK9HmZkzMud48jBQR9WLSdLgJjxJqXWYRycvd45TUbttmmTGtj",
  "key3": "xHxrZEqcZCJTvCz7EnJrn6ACAdV6eksBQAMusWfWsxNs6SRFMhKzcYAG6JB5istDkyKdKbZEScTftuHMCdvujia",
  "key4": "gnM73v9jfcpvnDY93Gb1J7tSrNKmXZbWVkdwMqyfQBCms3yXa4xMhQA3hQMstWBkuroUwCmTUAfbAotMiMEpG32",
  "key5": "21W8nf9jSrnG3DQCtGKFQFeLtbHW5SoaWFJJRfia174xrSRqUFYnUCfHiiJCB57TcB6Ywh5YQLRku2MN4dpYYiwJ",
  "key6": "4UdS3H3TNaksmDrzhti7Ebu9ZmBNQWNo7q5hXhLxt9S43LAaWi7Sx3HHgtsBYEGLe1ZeHhwyNY87VhqP1W2jRWHP",
  "key7": "41pd2xLuuBhgcUbzTe5CZePoPPmLmdc1Lv9UJLCfkTHcBLPArgGpGJjGTjYb3XcLuE9cXzHdGh3gwPmkQkwsGtu1",
  "key8": "3rFeEMyJgh5iaLx2Y7AdNdfiS9DN4aB7Z2SQRrTcBx4jZpc95TygCQVK3EX7dCQwFdMuqMbBoXNk4YeXbrk7HJwK",
  "key9": "5zb44hUiqzc4yAg681AqgdPUdagdqTijxKRmtmB7qg9jRyKh3UYduTfTRfZ5rYfu9zn7Aot6Zt3zmhmrTAVh4DLh",
  "key10": "2Jo53ZnmN4v81avZxypmE5CJRjHvurJ7wxxtKRuznBGvF8JoXmPuRmkFX6Hr8oKn5sjXy78gPexZTybzMqR9MnTT",
  "key11": "2WscsFSQPNWcKdgpvSF2u8FN5EHr2jcf1ceuJs6KdtSHvSwTn1xb1QekLCchgKripHMWnH5bf4zWxdup8gJ7t4cU",
  "key12": "AiDywjSYNe4HNzsZkkCTfVabs6Gbx6t8KtWEsf31eTWimXZ7XN4Zyu4NHVpKbZub1KsEXdsAJAYB2FwZubyGCUF",
  "key13": "dKtoV3EwyTFfrEmpFq7t7dd1gnWa9HBs98HabA3ycmk1ewE2Pz5oT2JywD1V4HgndifTjz24EpPxi9hrorX2F9v",
  "key14": "3nBKQcS3SrxY7NGds2MDUf9SJrTmZWheeHW1RYWhvJ9PC9P7wbh7iJGjNBpMN9NJKZ76YCJPz779XTxuBXptShyo",
  "key15": "3EqmESf6ptb3eU4dTvaRct1T7mdpduvcH9FytpfowPNkfZhU9UGQjmvvBWUn4JueLzLyMrLvaQh2gPhTQFYwF25J",
  "key16": "43bCR9xhxXEt3y2e8K8ujrXg5wyeM752dfP4nUEBpen8oghTp9mnLi176NuXUom5PSMjUcHbLdbAcMiHNZV31K8Q",
  "key17": "5sETEVD6KBQhAo54h6oi78AkYaxAgUVZBB5mjKUbdDYn7paiUg6txHVsLvWE8WdhSDT9LhzmSHQrbsB6e9RJM93q",
  "key18": "5gBwjnw5Euh6oKLKP69fQTaxRco5v8oVGxJgamrNEFEdm38FU7PDcjeUEPmf8PuDxXEKZYpizrcRxfmM4YuykKs7",
  "key19": "2a4oRR3jfvR6xddpA1qQDFPiRi8gcwa6iuEjBioVEVkEYsPUEyjWMj3AP3zsTJ6aStN7GkL7ARtgfGtnQLcf3F6g",
  "key20": "Nup8sx9tVwD8Re7C1r9Ys1Csn9tDa73qdsyz2LpDwhZzJ7W4pdCgY8mhEMkzcHv4W2YMhuVkerkBqH4WeRya5Bx",
  "key21": "4RXxsyEKr4t6v2eKSr2cv9ec7fWMsVDN9vqCdgLSw8EWWeHz1EoqfpbeaJgW7J6vRSUADNxPrFs6eA2ApQKPb1Y3",
  "key22": "2vMkqPmByZHkpCxwFbDy93t9kWiapJNepfxGok2KZKHmhkA6LG4d56usDN4ZKBai3P1uxJ1GSveqD9fcjWyrK6NG",
  "key23": "5beA7PA9wwaXPUc1EFaB6FQUH8nvxmuD96DtnT5icZCvpVeXx9THEsbHNo8f7p9cimgDETvhMcjW9hWPMgLpHn5v",
  "key24": "3r4va6gaQU9nJKZ3UAHSbnEPtXEGBKku7bbKW1uS2sgdTt4G66B76XJNY3NtDYJXF877cWmMLA2k3CTau2gLAjF9",
  "key25": "5kbYRdCA61xqoWFmauLzXdc9e6LrJGs3K3YGAGT91P1U6ri3TfyRXNB6Q5RCufMiyigSNKUa4JoUPM9PDpHLe2os",
  "key26": "5CbP8hTsbaJV4vohCJynNkMxBeyzH92BUJCUm4eKDv1q7vY1N5AEKS9XYABGGefmPNAV4EJ1WpnNTeHqYmxrwHw7",
  "key27": "3unTp77m9SUMmXBvmXnJGNPnrdmk6L1BU6WmWSzHLMRnky2PhRU8CwRuLxJuPiX12Eu5EuebUp7cQ92ogbDr2nMr",
  "key28": "5RiVefttTuuAGhtbkuWt9eKPVosqnNNdHJG9vJnA137ivRe4Mzax6xADbXpcPe5uGmYd5zFPQbX8XDxWe8zcRxvM",
  "key29": "3SmE1uRw9Px5FxeXByLQA4eEXwCr4HRb6zyias8mqW3dfcAqCrfiMN9BEx6MvnLi31ph2sBsCqbiffHsMXDZGu9m",
  "key30": "3ZG4fV1wrnjavJc8UxQGPgSiuZfqFZjHSVtNcrPzU7pg4z4UDDxmSrETtpLqDdzFAxae26RWt59ttpbJzChhcQno",
  "key31": "2vjzQFttJ7vNZzjUPS2VWsPuVaY3DrCdvwNVc3z35kkJWirfCSiDhc3fsPvSF3ZisSacze4RGkz9wvKHNA5KLfh7",
  "key32": "4Cmr8QysfiF1XdkCho3EXXgxdvD8Vrai4daSAXiTSst7EbhKHp9KYN8xiknr816G962WDUrKZbBAXZivvBKrpMah",
  "key33": "3MfRfL6TDpgfEzk8BfUJi1dsK7PPEzRGXPzuoTiin8a9DzMxqKB9PeWtJhbuQKwzs7KJEmudCCiM4bHUcnwk2vNy",
  "key34": "4Jb9r7J4CyoBcREopovW2eDxtoJ4untWPxa9itPpGLmYCB3HwXsAxNDFGA8rXiQseF5pxXyvQq2ur2pGvJBKUnGL",
  "key35": "4cosiKXqeeDApxkyGdmiQRvDsBurG63GL58V49StkAN17iEHYb7L8j36sokHT5cp8QqQoKtsAS2TJqemNm5TGDZG",
  "key36": "51srZbxpdnmxwTqjorVYpAHuPKcEyrp68VbKgUkSHBVbN1kVVHEPfGp2LzDuxRqRgRHEcoZREqQjyYQgcDamgWF7",
  "key37": "4oJwrLHkDRhDdGkfTuF25o5Y4N4QgDq74tF5UQsTbqmc3f3ByLb3iKMwpYcYQU3QSD8xLzjiTZYgywp2Q5aCNmh8",
  "key38": "456bWxK3VWpFFm1NKXvpzJBYeGLxCrG93XrEQSqqZPAHo6GkB6VPNZw9iHK8n79g8khVUcw4q8jWbK6dNXt44UfK",
  "key39": "m3UBpNzVrJHcDtQcm3LYr8trf8wmymsddQNGwq9RVxH3A2qX7Ez75rqw9H2F9r9h6sfRxDnsr4B6mZUKwTTUr8T",
  "key40": "3qRHUw5a9aZMbe88MEcfWfgEk13LmpxLGoMu4WAcNku6hziD75NTNttXBrXm5d8zCBAN98DZMtiD2b8qfhKhk1fQ",
  "key41": "5jf5Q7c2WcqwpkKvTGST4yRrg7qjoEdzmAvj27zve2U58HoELN6Tk35vrnj6AmNudFYtVp6AmPwj97hriiqoBUMT",
  "key42": "4XsjzM3HjmQfVKwGfoi8c8KjGPLFFXRcSECfSfACHG42icy2Q7WF4WcYMauB2qGpG4QA5K5zVLf5QCMHvuXKmaUE",
  "key43": "94V8J1VeiVTzMBLVupMXsygFs2NgRsLqqPboYbDhvJMPcDhD19ZdtVRnVqPfp7TcuFdVbm1CvPBC4FsfoVX3DVC",
  "key44": "3BctAZyGmEA7s1RSUH1XvCGmMGKa4j4hjqhdThyNjzhdf5A5o6Y1ikgPvusWgZUB3BEAo28KG46cRmPJ9A5Hs9wY",
  "key45": "29upyU4QNFz99dHiahW4D8Qmm416D48TrtQRAzqbAv238bSyXxgtVEfWM1kZQUr57fVDiKjwdpccU8JVnpCN5HUL",
  "key46": "5eVsXgP6TJ56KF6k5diVTSHaSmSWG7dB8gtnXDfrzaH8c3yjfS6iLy6yFmXaApvKZKoGiUSWmoucY3G3XhgUpVpX",
  "key47": "34RfwgQJ9oMTLwTTgefpbzLJFhKQAqaGgnpzGhwLAmC9KKJ7EDaVSxgtwBVL99mkwPPhXiGSsaFKJRTbvzGz2Pgv"
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
