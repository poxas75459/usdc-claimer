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
    "3fzbUQjD8R63jqXMiUrLLjMygQ8LA1PNAtjPWavTufwEikQNJJeumAa2JDjtZWWanWw5PsrMoLDTDzWsb5cnc1u3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XbGFAi1ycwGmmHviBvroVthQy5RrCe5XUVrPMF1R8jYXeX4o7vAsngsYTsQc3x8t44LGWnthSJsAHS3JYJ4z5B5",
  "key1": "32P949oBYpRdhXyADbmpRagQvWYryZLV8VCjzDb6V4VYmGjTPEZ4s159ZHkFhXgvLRd6rUkhU9ntz6CAUhbmAyGN",
  "key2": "2v2LimxBBwo3nhPsTba9nictAicisHemaibMUf3mGx1SwcwTuVS6JDjurpdu76WmDtnP8W5R51yGpb7jqS6Da77D",
  "key3": "43NefSD7zouTswdkJ5jQMMHc2xs87Yc3ZrLvpGT89h7S54SmaA6XJUghq2yfvupSfRuaxUpw1LptmSBStCFCJoPx",
  "key4": "rYTPctwYMxWLnCZM8a4UAKKaR8CKv2BXARrD8X7GiFXGvpaXeV6u4muu1XMTdcQtnMvWobp5YeYTQ4ro8ZgXG2A",
  "key5": "4XP8YV1NRyQp2jesGECvxsejiLYv7NiUVJxS5om1vAtoujG36MS8rsfFLMT89rjnmZKeGWdoRbQ6974AYpdg9ZdC",
  "key6": "5VyxZcuUAccP9iHZccWbTszDXs2StANpN9Hkqjz1kuhonhjqJTWouiRQNbDgZ95TYDJvknhRmYvYZmAaxPQC7K36",
  "key7": "5pTDCPQYyMaQnEZRKzRJtA93FeZDfqSbZN5EXtfJY2xUAiJMS1Fz32SCNsMuiyh1gbw37osP8AzXMozTwpxrfexN",
  "key8": "3V3dYuP7EpmcxoThyWLhVV4GAW1aJXt6JjPbRh6uSTsRMw2sTvyorY6XxThnYPLun3HdP17TtwWAjFnTmSp5xjDH",
  "key9": "urmRxF3c33xNmztE1Ei5ywncWT2i7bo7Fv8SNbfGB4hcikBiPZc5ikPKpXsZZWgV53ERtbXE6BkhnXZeKwrFwa5",
  "key10": "56NrCBTPmbYjVGbQaDBFp6QXNpwnmXnT2NFxpA8ky9p5PrC3auTZckqdYR1amkUfGP8ubXmfxmt3LqqHrCcPdA3C",
  "key11": "1bi8FerUW46ntnVG5eMvt14WoPnf5tqRpQMuVQ1hMHBvyPY7i5WqNb2i3iLBkybK2NV8LWE8dpcL5mW4bwimqNB",
  "key12": "58NQ9merg5xXGjAvDatyC9EMbF94e9QQaDA7qFMcdZaPywAa8yohMuxhsmTu9AUbutwrPAk8xY8dGGWzPBseF3X8",
  "key13": "55DNABPY9RsfueRV4gphwq1GjZf4p8De35QqH1jE3RaJkkz5M29FPhLciDfADForNuL8PGYCs7m89cEEC3NhzVd8",
  "key14": "4zosVrnvKqDRDDT2xh43LaopyCcDgZEHmY9i3gapWZnV12jWVcnApSJBjfi65Y3EKUq364Sbud1G18gLA9uDCkj4",
  "key15": "Fsa8bJ17Dwig2JGmboUGXHhv8Zrtbv1vd9XoEwgJ8r6Tm1zctCz5hkRtgYaAyG7wDks2KfCaBLNwnZ77JZHvbYS",
  "key16": "RdyhtwuEoKkMjgXbTQZLKDnrhtr1ekrfBtCcdGdhCf5foazd7a6sQYYV6wtoKL2KXv2h1Dz7UxYuoWTwoEwiq7F",
  "key17": "2wxbqabLdeEPqsX7ywbaiNe2MyMjGxbaRcp3zAbSXq1f9kuAEdy5pPG7mJUsgEBYNJzGWECEm7eYWh2gnkiU8Hsr",
  "key18": "64eZVbAmSx9GNSpNp85NDtt4ozLW9dumJMCSVWyUtPTfdxGbArWJagQhvvdmDqqk1qP1rZxLna2mqEVm142raDsF",
  "key19": "4KD8z4HGgGsPfuMTwVMN7uk7YUwUfGSfkzm6RS3YcCwtVZByHcqbjqaEEjJnDpMZnXYeueZ7uCSCNTxM5SxpWN4f",
  "key20": "QJkkVQroXmkPetauuwK2kfZ8iFeKD6FgLB5D7vngBh92beeog465MLUroeKtXYwfebj4er5G81deRiZTfvTS8Lq",
  "key21": "UFDSxqv7N1NFE61Urz76syPXByEJfSpGR6DDYerXeJNqrt5khxsZjixq5VL3WyUmPfUW3k1YoDzDE6zFTZ7HK8k",
  "key22": "2826HxFYQRxHEuumXNyMC1rGsMU7fpM7gD7Mn5rrNeoFHFzFBxU3iWjxFzMwoGqnm2nxiu9WB4ufUQpXb5G7wVjh",
  "key23": "3E4U9dSbwCMLJCFuZwzH7ZpRasTjt7Gyve1JZ3bpjEe2ADXgUCP5MCapszd6fNYjA7HB95L5L3sT8atd4pBGEcEp",
  "key24": "5SZJ5mhucgsBbTrfJBeCwWLfjGz1NfEyCkj7Pfo63weG8gJpZLh1tckwgrQ3QmRkMKJyyAemKk1JgcXXB4RSjkgX",
  "key25": "3KjPAFhv7LEzgBwCQsuQY9c6iLhpCkzPUDGpJ9UBCrjFHoe7zwCakGULwS96S2t7n8jq3u72S1KTgW36xMzBD558",
  "key26": "cqKRtsAC2ZJ4LsTWdXjLsvyWjYFQ2vU15Yd92WQAaBMG1aYBiXRmUw64RJK8PPqLx9zvVjLCG9Ct3Cmjczo5Wdi",
  "key27": "nGHupPgLY6Y8Ttth7zbTzbe5nsf7e5E1wgJzt95FDBrRsqgxpLV3HXcdq1d4mGviGQv7kCA8ByLx1zoU1H9EJrf",
  "key28": "2yTxdbTWk4EZRPN4YzG66KTMob4mRvkJ9dq7g3M1Ab6h5qVcGGAKTqnnpdyQwFHoainRdChi3BgRL7qB1YzQxYhV",
  "key29": "4Pez6Ut8sdvVk7EynMRaKYms1j1KJdFonzetdpjLBEzZLxH5V14Z5xAgr65Zf3NSgzdBmAxsM8tmCHGS86d38Yie",
  "key30": "3afp6E4LP7ssRXMZ6bqrUgTQCcPME87M7JYPudPxQFuJyLAqx6XFJwuBh5qTtmAgc5hVUZPhCNL2kD2BtcxLinZh",
  "key31": "5BXg1WyE4qWysjqZPzjs9wWwYgZqxJDqbwo6xd3eQP7AuWmUAshiG85U64g4Y6V4hEnq7vf15dokHDdKhxyiwRUL",
  "key32": "2PgQW4MkqH43s2LsJ7pccjkCihJUtqbQ8RQSyXB1Wtj94HQqKG1udD49q3dJTC5YrXB1oLCwaH6Y1PZQK9YfRJwG",
  "key33": "3r359c718FjySoT2Vqhbu97w1xHemkDY8PXcrWaWKvYrmiTPNUmuQpBxNd2xzuB6ZS1V28tXDKjrR3mj8Ny2d6Pd",
  "key34": "5YUZsd8WbWbnFV5F2YMujqfN4x3PT3N2nt9qpZg1kfhAe22EiXFutzBA3VHbCJPB57KWnXX3ST78mZaUC3Cu6PCg",
  "key35": "2ugvuBdaosZUUZgDFV59B8onfX12XeaBUEx8zAXhWu4tn1oScA8rLVkdVuf7G3B8Q4LFEb9Mh7QdVMnb9jKrPHRw",
  "key36": "3t4ZaPba6YzcEi29VpuR5Sd28U63yvQgrH7KCayQLJ1FuXMZsyv2s3rk7PLZFP7eWwLrCPN7q88qDTkUaVtb6zci",
  "key37": "2CiRocTX3dNDsKAMV79XzPnuz1dtE19DmhEFroALGVqVF69vLKLVKUvviboMLCczNzzMnDkBBVzCsttyJAavgWsr",
  "key38": "4qbTeXuKTcKSV3bPNAQPaW9YKSuXLd7SgnnHjCCK4DKKrytNdbzZ9qeeZXHFJyajsgS4NDYBDiC6sGCPnEfgEAiR",
  "key39": "2UNZbRMkqDRnSBLwor8xqYT5J26jQHVWbmN2brEuqMLzC98W4viJpmjmuorKUg1uPL53ic4MnaDhEpnyeV8Wh29G",
  "key40": "5nbMb9jvTA594r8HchGUARfpXfymX7zaCwQnEMKctRQLMeK5RQsofWYyzZbwTQYURKCn5katBoxR66mmwJERfEeP",
  "key41": "3iHX2X6KVmi4PtrvRophjaEV8JQs55R6dZDLk3WGjGT4X5g4gE6SCRauMLbaVvVHFuHYM7ZpqQAKbMgxy3B4MnnW",
  "key42": "4ZLLhN7dzLkMPYKHJhrL4Y7mjKipmPVjzqBGdKmu8NZic3yE45kXCCpFjT3KfhFnA4vLB2cgL2qY41ohoAeWfiMJ",
  "key43": "3zGbnquciNUv45KQC1gWjmNZumNnL5ANVUrCXaFvnvmYqtqpjPt2dWLondyHRXL9T1MnEr5Fu8PZLinmP8SKsMFk",
  "key44": "5N8zBXcLtLs3BnNLM25aZyBiJBFNdmK8K947BPvhrgJLRmNkeLEcYi2FANc8bWUeP86daNXC8qMF2DQomt1mdvh2",
  "key45": "4xgXAcrpmB1aQN7sU2Ar17RTFw52Mfon3Lqhyynjk1RERemP4kSiJtjxhEUW1LPpts3KdiSALT4hCSKc5tNydb3Q",
  "key46": "yAQb1RXJ1ytjZquyjjNfsJth22m2XTYHnrEd1bieYdxqhvXaSS9pX4N52CEUrNTrAJJodRquu9caRqDKB1y5JQU",
  "key47": "gUnTindv9ZymWQZrpL146CoYGrfDriqRwY8uXWNeJfJmWwGMF8w2eaVpcC52pRke6cHJRbvQ6xe3kuqok4FnfGG"
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
