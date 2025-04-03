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
    "2sezZhnhPBiHmWkQKAQQBcH9uPyft3Tihx7XB26Gh4XJUgKBoxyWmG6Lgxfk7VBM1hSaxSykYw3oomN9hmHbAP5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kjEva3uNPX3HY9JVpKpbwNTUwUirF4yNeciZt73cn6b5fAmydBWh7bVAPoiNVK5N62xL4JERwEKTRamxgjsGX9u",
  "key1": "3S9Va8rQWNTw1AL7dus5KxoEdJnA1Xm4rFnhQjAamRd416cKz9guaXnkt2yiz68vDwsgkksN65iHoNe2wybefj5z",
  "key2": "2WN1r6juPce1Ye8W2qVaWakVtCrRu21LoRk5BkeM8J91MZHv9Hk2ZJC3NnS1inoVRZmDUxm1AEfvEqggGwTtq27v",
  "key3": "2cAh2CUvQXTnNvF9YTUikkPKt1moZvvSi3AsbZx7cVn7UzqeaBP4JLnUqVmAiLg7TEVh8vPqx5F18wYGL57rbiMn",
  "key4": "54sJH9juueKMMZicaWm7XFvVctJ4tXvV2yDTzuEtrmXpo7SEz9AvHw4TV9T5oACAEDz69H1KCjbGktwBTYacXFr3",
  "key5": "4rHMYMoWsWAAqEMdQBPj7iN2qztcJtZZEca2mVcNhdGVgMSxa7LcEqZYvQ7CqbT6eQRdoesg69rGhfbLfLRetdnX",
  "key6": "2FmG5s3KZZewHGXUZKXDpUWDYDrgogHvrUDxWuEuX3hgMrnabDeypMN6sPXyRfV744SnkKQAj6fjayF8DBtmQ7gY",
  "key7": "4aeaGH71PkGAaMR78FtWTzHErfoMmFXToLtQPwPjhgdrvuwYdVGydJ5MjyZt8jLTk1d9bJ1WEBo5haoLEsnRUhYK",
  "key8": "3biSDrShFeJxjqERzAKieefcUwaDZ8zFwfPUpv3MR6B5RWGonfesud5BnPAKqiaF3UnxWXAeetJu4ZofQDwsxYLo",
  "key9": "3nXcMX9USJBaw5Ufoytfe1rdvCKt9m8WQ8Po3dFAUpnq82EsotJY1jTS8wzDbyA7inNYhErXUExY2jG9UFqC4mhi",
  "key10": "Q1UgC6gx4L81CXi1RWgh4HYHcvfMQSb7qQe3MfxDW1jrwtZ73KvPgHAYkRbsSoJ7Q3YmCKjGV4FwhNiQ7kXE11F",
  "key11": "5phvDoREZE8eMngGegsWo97yNT5irCmDzD4YWYxxedehnAZqFyyUqgKTgnXRDo6z5CPMk8ScuCR6uLmbRAR1S63R",
  "key12": "2JPLFz6bCxiFEprfjcU8s8kMLduCHHAiH6uazLaVco22R6ofRojoewwYoy3KpbBVHqwUiZz37o66Pm6fgg4F3qdN",
  "key13": "38eyU1YsTG8oCUsjkkCQ8vMeWurfD7rmciV6CjGhDh23Bt3zDb5mwPckHYVQiwxFqgh9TJZgPCwdcRZa4TRNu2L6",
  "key14": "x8HoJvnjjo2aixGoqTCTGiyRwpDhzgvR96MxBoXCbDFrz91wPhgdJdmCRUb9nYdrD9bZfozTa8FhuVQJnyG1vr8",
  "key15": "3dyzr3YkTz1m7Wf74dXUgKVAPR6QPnJvGqqtceSUXn2THJvoBUjxEn9mf9yVfhkP2mdCTWBoXxbouFwHb1TiredE",
  "key16": "64NEZPRvtntMxKxt9rtSnwGdsQJRSRBsenjad8HKspPBvsZ7MyjV9PU2QCTWmJz4s2NyWjzwbf1woTE6NaLgHhok",
  "key17": "4ty2VPxp7j4CZKftZzzfAsiEStiJTYb2VrSd5W2hbmKcUREUqVXJ7ujWrQqUWL73ENCFqXD5hGT8ZQHkW1PLB8cd",
  "key18": "5yTS1rPAkf6a9oU8YB6SvWr2PkPUvbTH6V6VCpnMDkwsv7woEj5At9rTYiGrfKdXT5p9f7jyAAy7edjQWiixbDA4",
  "key19": "MDtuB4XDriF2BNTvNAYk9V3ZDrB59h3ejpvomHFGfLw9mxFQkrocHYrJNuYMcLkK1P6vcju16sxv8kMLtN66bDq",
  "key20": "4LJb4aHYKky28eYwgiKcuhYapzaDPyAKDbqeu6E88nNq8teSt4pyLeLwLvCXJuYrsZkXH51baWUK3PdH7isMaL5k",
  "key21": "2iPcr8y5pvtKzDH2RjVwSM4KNbvbngp41jQ33ZLHypBu2L5HzTtFcSbhMq4pnxm5o7m3vZtjsUbA69LzMigMVLGe",
  "key22": "36svQ7xLMqSjGzuu5t6yPuMdkuf4unLcjqPNUUf8Z1AtfMQYnmfoY8j5pTYtpEYvSp6i89NMBFPSLm8gemb8rn7H",
  "key23": "3yvsttwLb17aAN6T4vM6yr2ae9DkPnWmixUkgzFmyb8dodWuHs1kyvRsPY7EwJdBZo85s56SZwNP6oL2JsWXZXko",
  "key24": "4Sp1CwyiQxnT6BTEx89s6x3dctt3vHfRLJvhaXYgo2cbPSpW3AkFLZtXYFHRqhJeoNQA5ecMPqowsrL8oAGLmVYL",
  "key25": "KQXnqEpLURCc5mKWRe7HjHjnsSDppJqmbf7Xcca86hytFVQy2o5ANkbSMvNi96BgCaGx7HPXVi3UYbdSZRkrikb",
  "key26": "jAXitHoKekVBR7wrcrUf9YBsvDdwfDhxTRC9WhtZuzQLaeNzqC2e4i7noScFb9XrWYSEHp2TAzJzk5ZVWK6a1wW",
  "key27": "3jz4EYP3uYnfzZptfv9vD84gm9n5gmpzAEnwUyLvpApRJZRjMRNsLZBhspRm1cwwoqqQTe6VB4S81GgDUxeydJ5i",
  "key28": "4KTRJ5SSXDBfzfY9gKbZovRSdeHVeen2uT6DGDmZCM46sFrDCFD9kDTuHHotPcnH3vku9smqe4T54aWPuaejwez3",
  "key29": "5jfuceeDRsjfut4jjVfJcggRrNT5YxfkoWFR1jhjCcjT9QDpt15EXeU4ztiBfeLYz75gcG46rFU7u2uGey88GMaA",
  "key30": "5ESwAo7ivba5Vf5KxMamDnJ9zQWizJSynSYqBgR5wPr4uzDQiXC6CeTXFg3YEvkaVHknUzxCJrocNgtYUJ4B8jQb",
  "key31": "vNHkHNyAEMtkwxB1VKCGQtjwK9ekq8ggrDDMTEZMayZzsJQHNfqkL5QnvQRpA7rrMymdsJmjsdUNpNfF6XsRUK3",
  "key32": "5kVzGsPXwytqKWAFyXpNsWSx2NFQUy7YzBGYa9hsfCsYLQXrD2hPS4CfmeKSK1XLRVTYgZYF2wc1A71ZCLMkLgk",
  "key33": "3JLzWNTRW61oJWvdGPH49J86PGhuGMhpFNL156ip9CR8RUHg1PtrLbkXDZ9au6wf28fnrYHQ3sbPFxnR8sHYkzGa",
  "key34": "5nf72Zdo8Mxrp4Uoyp5q2sTr1qsj8ZZebUQ1vMHUSwjkZN6Nx8QAQvuYetP3aKR9aGSNFKsQkoYqML25Uom2TLsM",
  "key35": "7VMyKwnAUnUP84kbu5wCnc1n58aaUQadiAt3u5pKByuRqH8ZyvRgV2UhRBnXoweXcAY7NxuhqXNd1TFPJKrVu7G",
  "key36": "5JxfpvFdTXmfu4pju7HwgbP2SqPScoQQxDMrh1FgdWWmMz4bhT8hyKk92KS5pZbfwCL4L3TWBgnYQuTLbA74NM7M",
  "key37": "4nw8a9FYvXznWyWB9pFafhr4ViUDcB7ryMdNTZ24nwR3n1Ky69mf2pGxHQ9UfdBNtPsW8Qha4DrEBo14uK2aH7VJ",
  "key38": "5mVHag7mkEnKrn4XuH7GyEvyMfrpq6so4Dj4J7ACycb1kVjPvKgc5x4HzPfP4iFE2kAVZMRcVEzxcsDpSX7a7qjX",
  "key39": "3KXRxtTUxWJBLNqE99vcNGEt1Zq3CjGtbsBkBrGyWB8kbn15qm83UU1H1CyGNTRgjgn8eo33LmHRmfGMvQiUJTvF",
  "key40": "329rqZi3WWo8drrkxwH71tKuLRWBndJEz6HWqBA66FtRxUqwHWoC3ToSebBvmAjUeSwm28xjcvGEqNkWAei7tGmh",
  "key41": "5zZx9iXiKQ9CsDhWJUoYdjyGi88DV1zSfzZ6jAqiYWJXSwE2bS238jkxhneC4E9ChsPBTNzHBj9YEppDRtBe3Y99",
  "key42": "2iobzcpLXEYTPoxaghsvViRt6nBE3tC1JNeUB8RdsPhr6Fq3x4x1nTHNRG2hFw4qTk7LKhPGCXDPrNZkWqe5sYSN",
  "key43": "3htWdKYp67TcfWueTXygF81ijk5uoiX1Y3aLYYi55vkah4ubrHuy2ePZ4NhhW3kB69ty2CUKE2FyVCPeULHWWZhv",
  "key44": "2Ybds5R5MshtSgASZ4ZJVBzKuBysrYBf6g96eyxPQRQC2ENkzXyxZrHrQAtkTBdA6kgeeb6MVHFZVCDAc3dsXHDj",
  "key45": "3MHLMNkbhRvVgKTkxnHcbDBHDNNdKVw9jXar9BjLn3MRGrUBcz1Lo6jQWFeSsA2feaToqnGayemGrVGdmvPyXmSd"
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
