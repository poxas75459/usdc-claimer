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
    "ABxazn3ktfZqboWt4wCaP6tgUTP59Xn7zkMGMbTBqNto5ZXsnguv8p2fFVSjjeraPkmS4QHzfcaaZtq8MJ16GpG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Eu6i93eRk9WJczr5Pf4JZm7MetdtnaMNj7swbHt1uWQ4fzuhzdUNfHQaKfqrjMjmFSLEYpQ14P7V8iHSdEwQJ3n",
  "key1": "5tkjnD7Gw8uxoKA17uFbjVWzGGbQtrTttiZ7B3NCFUQgVJN2XjPRqXrKD2yz4fLUZx4ihBYuz2Cg3U9N4rnqi85J",
  "key2": "3c8dSqjZQPvRHw9TaNbdTSDL5xsQGFKrZMBJapnE587yVghqxiz23Wf2QKuoFFiiQwtQAcVXMVmB4kyon63cpoa1",
  "key3": "35r9th1bHRRxkwh7Ka7G8CFpbPSLtcnwyAX7JagGM5RyTghnCS9tAFQdp6bMX3iaj1Tt5eDY8VvwGpfkTX3VFmne",
  "key4": "3j3mpZRiYdtcVyNBSFabVFQzXwDEiLU5Z1d3EBzNw6zm8dmnzUjc3nrPCk4Qc37fqpvhH16qwwHTYj6cKtMRg3zG",
  "key5": "2AHHdEUDqumjXDydKq1sxeTJCrWyzjeoX2QNrwCTd3r4PmopSCXCSdaRzmuGP3FoG9jWPk2eVNZWBsSsuQ9HPLUa",
  "key6": "6HYVkzNSCkWo1nYYyQnXKA1TqVBoAVruQrzqKia3gHWJW3GtRzo6Vbqp5M75cv1FAU5b2t8tGakgxA5bACjZimJ",
  "key7": "2rMkwCQERSKjz6iqxwtFaaV7BNv2qgEmgX8qZ2Wn8sMTtacuESABJu4KHyZx3w6dKjoNymrd1RjPKd4vjyXJvWn8",
  "key8": "2u1aH4ZYpCHwNDptCqErDXqKnQUt13KDK3LSFYath1wZ1UwwGExPZjkmfqjdzTJDH5vcoquBw7Vz3LyHMjPZS5Fd",
  "key9": "4bHy45LTMfGJgbCMjQy6rssnxJdpSMzSpGBV24L5BJFdVmo8YKXc5YxmKULnfwxwDKA4zk5RFrjyf7L2qRAYkaUg",
  "key10": "4jQEsJFSJV24QKhKcyN3122Q7fATDxPdDkao4jM6CfKH5WHR1sDfEn69c8thw7YYBmXB4n7rQBB1DZ81LYhfYXBf",
  "key11": "3WYoyesAaoZQ7onaQn8WK2U12UMASUa7Zk25XarhvknkKmv5DbS6fcJAE7qYaVrkUGZY27xhJkNektd6nmpytHTV",
  "key12": "26Hqkhd4iZQC2JgEmRhgAbK5Bm4EZxnfymYi4Uob7rejmwUgMM165P8ESYBu3Fn8vPJzmsTWc5kJbtDgFHhQxYFm",
  "key13": "2QP9LH7Hbhycx6Pf6jFtLZaZ5znWuKuNewpZUYNoWW5YpXMqUPBzHSVGZQSU2eC68XB6DGqBfBASttmven1esT6o",
  "key14": "368bWbM5zAXfh9tx8SvqosSpahoXAFwVoVXycDcg8CHS29BWm9MQmUxWhKAPRS2vtPTGkiCjuFE3YjLSVnmJWsww",
  "key15": "564W78Q9J7ya4XzzbrhEutTQdgK2Grk3cX1bAd6eZbxJUeFs2zBDPuRZaza8BkrfT8o2HTe43rabg7UvLtrZxgie",
  "key16": "2fG8WqbFhcMft25xJMkBXjDmkEjrEizKcHYiGfkBwBMJamxrJ26DneZDQhvfiT1CHfj5USuaPdMAyRgcRJnD2dWV",
  "key17": "5h65s9bUbse8kXF9uZpxi6kFqKypGP9cZD6JzjttFvcwf4htZtHiFRFBavda6R6c7JgWFCrYij2AVPQh7zD2b1wB",
  "key18": "5hdWSjjjhq9Zx1ZB3h4siyZtKxgrv7nC9yHSzwLpGEwKdzDaP3ArYF5krQGbDjxYeWAjCbZepwCwocqn4QBTZ66N",
  "key19": "6142vcgnEcFWx1h9XUKHFG5iMn2GqHz1zpxN6bJ5aDEzvZXs6SEaJfRTmACE29LaGwyqnjekkJX4VLcPzoppddNd",
  "key20": "4KcGmxvqAyE837V1tMqGdVumMBdTsMdmBHqhkibyVx6Y2rETti15WHko5VAgw4Us1SGWorRR4dcmEJVbNvN1Gm4q",
  "key21": "2WF1vWcZnnW7ah7KAHz4s8MrmtJNLkxTcfRHVVLa3sTMRzEXvfcguLki7oSfWCCEL18LkMFVSwvuDRo5H1S4QkHq",
  "key22": "5VGFuzwzcMMcdKKcJpF7BfnmUHBYxjCzzTVUinnJ1PCsc9EBHiqV1ieUyAGkz6NvzWxSVRPkd2J6UQWpJHC1ynWc",
  "key23": "5naARPxzupM76nfPGK3tAk9AHLJZiU9FfjB24mshmzPgiR2sQAj82GHKtaAYBkPSyRZJEBxvUohBVWXWz4bdXTWc",
  "key24": "4PJHhfMh8su8KR9G1AcxWShRtMYZTUU7FyAL4SANmALnGq9nT5Gtid3So1dQ5QHGZPbbPKUxGV1xgt8zyJbXUrPa",
  "key25": "3GsSTMBKEcT1UWK9r8S8UdiPreo5Qhekku9poy6UGrLsdBUNgF67iQEEoqwJGK9cDa8GVmqMQ8KJ5KHQtVHwPBJ1",
  "key26": "34vFLCVt4919z1WxQFmPkVjBjFFMrcob6Si4e2q3HJtqgTTSVJA6mnUzjfbMQpNevvMNMVsJThYmZpSsuEsPiwUb",
  "key27": "4sUytUF3HZ5AwUbZdk3LsW8gEcKL7dgGfKGdpo4ecwsV6XuQwqog9o2owjpJ1WZvd6ka4Rq3qNx78kJA4zeX3id6",
  "key28": "3dy438gmQRU4dSpnYVzbDvhG77ubkWhwUkvwa2N9PKy4TKodgSvnQqGJNLjHX1GQcfGu3rXBMKBKXSCLb1VtQUZv",
  "key29": "3KVYtuTeuSapXvGXo8HMWSc5rs2rcVJD17N9WQ8fVU93a3eCX27xeNApgom5C3BMeHxJGPSNwHGCzSkYtiQorMcj",
  "key30": "u5pGyyBUqcAjuGfMS7CTnXsqbea1gCSiSF62AC4DZVUZSeaX2AYsSxKKaCeY4EviTZ4K1WQTaAUiCj4zNsGzKg4",
  "key31": "3Aj96ssoZZe4E517PgQZYJhqbNeXPPwxbmwEGWMwnJ2p3eTRocWarwztB7KmEddo3q2XQJVdF4fYVRZszgmya3EQ",
  "key32": "3wMx4Ms9A6V2u5hrA7T3oxUbCxgraz7AL329b6gWtT3ztDiU1ebdHAvXgwuda2fpMM2pCeTHG9Guv4azYsQj1UaL",
  "key33": "5TtFsKW6JdBtCSJtKKcBvay5pFMf6ATTqz6G81oAiixVj9EbMm2dHPFS3dasp2ZjWuyHxmxSYSvzpPAiEe2Ytz8f",
  "key34": "2iRcM7KY5mHLyx4SNp27V19RysiT7EBv1Nem2JLme5BMPkv4awAiMH2c73LDdikmehXFbw6oMBwv8uh6ccqSURFa",
  "key35": "67rToHFHm4cWfR4WJwwxV1WAGx88aHGyysYnn5Hh6HpNKZRecSaoQRcrXAjh6aUgnGrLAfAq9EQEz4TFkuBA8qsU",
  "key36": "3a36muaUQXwXc51MGKnv9ad91H67NLhQZPhUxpNgmLNrJhpCcAL3LkvNswE1vUsiZsbTkuj2BJPyd4YcwyqkoRvg",
  "key37": "2R9juJbHqvpKWk5AKEQd3kK5hGCqDCcwqBNb6z4vfy1Xrex7xNGScdsx4d3LUoGQyPUTFVWpGg1DK5YBaTXZvnfP",
  "key38": "3FwRDD9kUZhYwArsbc9RP8Zc74ZEhYGLrnuoMzH6D9qG3a9M7vtkLHktN4NnxgQYSipPfL1qpDeC37x1ZdFXgkUY",
  "key39": "4HEV4YNiX8yabUa7Pdxrmn8zvP1A1gCVvVCJPuxcWrg73h6JpFeZEByZi2eoDfwwmPwFvd9EGWadncfBfe4YVDpt"
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
