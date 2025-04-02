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
    "54x175ANszgj2GXSpFyLA8NszKt8v5STChzjoxbJChcVVpH4wbAsaRL7Ws9R1RzzCW22sun2aopA4gepjwe8CBJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zAKJ3Y5inL2X2GdUnvMAgfTQmkreMsjrkysVxXETUaqqWPAj9HhJDpsZWdEZsP6vVijBtt5Rw9rYgQkUffbPTQA",
  "key1": "2NCowpwQmkNa8CxwkyQ5ng8sQTModWJrtnFzMkaE8QoD57fQcHvdyj9Jv2eVqcqTSQ6JWse9z4mnx54N3oniDYUK",
  "key2": "65NohN3LB1xRn4k679RFJmKMnE2nfqKgbgLb9kN1ufdiXUzCNXhuGfSLnZRnUk12phuUpncCwF61oUgkNbkSCPNX",
  "key3": "27DjRUgJp3TiVdRC5o2LootnBkcupR1JpiLXWCU8ptKK9gGoie4PUL5dBXsuhBkouk5zYVwnBtyq8zeoPugTfVgj",
  "key4": "3xuiefHZG8BbgM3Crcv9CG74N657G7YqnGrJ4HicGQt7bzovujarD8QzcN3HcVLqQwikbwYt3wA3RV3w26rdE782",
  "key5": "5NfCg5efAg4g2J3vZXLRiEuci7o6LhjAjWJUArBS2Nwpnv9MPrEz3BzTekf8AJKGcKCCYjHrFTC3bWgC8QJRrR9K",
  "key6": "333S22Vcw5Ha9WefaSpV9naor65kmnKMCVPnvtBm3Q98Af36LGNd7xdqj6RXzYAnz8MGFLhbvCxTjTuDbBh7L8Tt",
  "key7": "5kFfaLUpJ2y2KZ21H6EjA2LNmbe3wAATLWjLE5Et6KmcvdU4yxXhBdFD1GtQKQ71ixURGeftFn91edUxvFM2KRrr",
  "key8": "2FeRCvP92o5eJVn1jN3WYFPkJAMncuK9gic91sip1YiPMH5xT4XWuoS3PM4gJAigj1uAVvaDbmTH5QFbfub4gNC",
  "key9": "3ghQFHAH8TJNdkHyvNeYw3wa6znjP1bppdWESi1UynTEaHks3RnCptKbezLSzNePRt56dh2eHJsxjuhUUMvK1vLZ",
  "key10": "39FHvnVV5CENcv55ZWjQydgTZE1eprnb2w3D5kgDUkXbgjTEsNZp3EB8ZNQCm1P7iftziyanfWdy9r1GQFFdH3ws",
  "key11": "2rWgzf8RCxmsEP8b4hhczZDCdWYKJRB25pfWcph6vy1XQZ4u4TkQNFhjgyKcQiVwHozEWGz7P5yTTWV4En884doF",
  "key12": "4rnd9N6FoMncyWmHUf4RvsgjVUNHMQaoP6wjc1qkzuCZTCVd9RB3cbqyiZhHJXBXaKUzT9eu2T2pQTBLi5gRCcGN",
  "key13": "2kNwQsRozRhGsPvfKNHzNN9PDR9ZQxtA89Wkxi9VkfcWNpG4iwH1G1w19zyToLz5EQoUjX1P868bJnPErunbr9A9",
  "key14": "5vVPmm9ztiPtjwfv6rErUk1AemXNQQL4dJ4criXPBy4JgawgwfGTMiLLML5HLZ14xtS8VKzcxpF9TGMit3a661j",
  "key15": "4d6onU9TzwdokLU6u8WdQESWYzPWAtQeefroG7D8pHepRdBJzNLfVD1rU4XgDu7H9bgDoEzyZXpxaCiJbxLZMeBU",
  "key16": "4Z1MrWXggHxofUuR6Zkgnuh8rqCS2PF5necwrmJ3W6BnELjsJQMMjadpwyAPCsnSophjDn8nSJYAGFQf5QJUKrkV",
  "key17": "2C2BMjH3ZSoEQd1Naa61ghcDAQGYbbTkHetTeAAhwNZVhEG7iPrsik9kNWq5ZDCq5iD6tTZDXbRVm8JHqaXQWC3X",
  "key18": "3sfkZFvJrfUpha8wSNqGoYFYPr81UgXdkbWR3VxfqX1LQfBShDHyTtmKoozFzqayjM8QMTTubx9Hxe4Voja87tyt",
  "key19": "s9XgkdjZ5qUkqc2jsJX97h6MsTZCDTiMDMtpeMeWQQAiSfMdungW8vpoLA2zc8zRx1iskMzXEP7SmoApCPfyad4",
  "key20": "2BJQoy7CVQJ9nAdyjJ4Wf8mYRbX2W8LkTfHvwqHaozQ7MiwkGmNiMS373U36xAMfaM39Xkpr3PF9ax9t22Mpyuyc",
  "key21": "37QhSafFftLvBqyMJEQiCsnQJJVt5AFxMWkXxwWSsB72QTAPMvbw3PugLkxRK3azP3KdQHENSb4yVkjTyUcycXUJ",
  "key22": "485Z8T8ACp9zyitJcViALFUNDNRPx9DEWvCRRg9Bh8NP5kepjLDypnTfvQuJvuKM8bJThyqy6TczkmyXhErgfbjh",
  "key23": "4zhUzFd5JcxsJAsamjBXSwJcGEVW9YCxrLJmWsV9aYEDJuxd4zcQUhDwzRCSrWSJiXyAoDLdRhdohZiqffy8Kqb8",
  "key24": "2hLNXnP4h2BEeVAARdcDAGZ7gSL7Bndn4Ax9DZM3PZvXZQU1KAHRWuG3mZpX13J3pMkG48mdiAxbXZLXNBTCFxVd",
  "key25": "X9FyFMMmj5UyZq5YvmKhZ4PNfBiKVzUWrYe2AxVaupG8bwQXiw4n9WerbZh4WAhGHv7d346JynFpiVe68EpJ9DT",
  "key26": "5ffpsD6FqoyZPEbsCkizq9piNgUURkk3z1AHUC36dfVfpZRk5i3dKzPejPC7f3FJ3AGwRiMMosfsrSEp9TQyjLFn",
  "key27": "3jnqJpprUyV53iLVMXjvCAZKy7wDWR2xZhRdiDyTB4hNtvEi626JapbjMJBiFSJ6Hmv9wRe2pxwqpK2yBKiu3Twn",
  "key28": "42A1TQoCYmwa5itWcst2ZteuKxuAqZgjUbDfCPPtU23rrALotn5m6TdQqxrKXfSuZ2Xx27gmJy5tNvkmfqAwQVTL",
  "key29": "2io8FiT2WJ9Lvuc8FizuoDtURVhy8ZWdkJ1VCBttLZ7YKUTp78FDeMvhBZFoM69kxsGo4F37GcQ4CgETt8BE98as",
  "key30": "ebTWuJDBHBNFRe1FPDcx7bzyiPb4DmMm97MAzfYaenAPn2feScabRVNiFXLTPrSWMBtbMovSZRk26yr857rUvZH",
  "key31": "3RKiKUB4awoqbMJrkX7U7pHkvBBGDS21RSQwFxn1NVf2nwR8qcScjzpHfE5JsMpfyDN1APzbvn1FspTxS2kNZjCL",
  "key32": "3WqStPGn5CdWEQcghnK7yvJHbj94GK78ygcai1UfH9WSQPTFj2iNc2epoWdbes7XVRrUzYsjvJiDtwf8uThnkZ45",
  "key33": "5BuJovCs53E2vBUMvoNFqpZ8XDV7sj2KUbCw1Gg58B87nWWCv2f8MHi1nTccjm1Wy54r8J5LLArgrkNajhMspJeP",
  "key34": "2MqY8Vq4VNnZSXCoPtpEU1SvJV2h684RZ3iAhXKdWgS1C9jwtAWEfn3xuqQ6QQeb3YNvnoSGkn4N2KfqrmaQXgps",
  "key35": "39JxJMcPctwKH921bJjrjo1JEsbNG6Z2qEZipi1vnM4wWtQVtZQLRiF7UWA18STEbsHK3bBLT34cTHh71yNcgvz8",
  "key36": "46qiqX7CPtko5DTDXw8RWh4FD2eeAbsWPXrNHRG2BdMw2EQ564u8ftM68bbqjHXYr12pWPGAXwBseEFXrprUYEqP",
  "key37": "5VqUXKgNuNYy9isXB6iPhY3RfALdRAJ3fpAr6gHb1rYgHxtuHfXLKBZfkXnt59RF2SU7uFF7sErDAYox8HjxW3To",
  "key38": "58bLYqQ6vFeE8aik97Ur9kSD6Y8b2EnzgT49FdKx7t8xMJCrHVhGzucjDZibPwQL79K9oKNb3kfJ8XchoU8CXdzp",
  "key39": "5dPn4ECR8fH37vFhyjonB79LqyepmGBRUDbHoDqpMdSPHfFgaW1oCMZ5Rs8XPoGm75eNtELGY99NYbQSqSLtey3b",
  "key40": "5iWvghobxoqNELT3UfP9tBCuYWKF2V5iyq4UPfPaZqpguxnpfnshG5ygjPJfEtGWpYtsVDyPmpGxzKu8hfvCSMRZ",
  "key41": "T6ktT7CXSTDz64Jp2Se9zeKkkBX8jn8cXLfFWLV5enu9UgukxVEJ4G5a3xahn8yhYesjusYefv8X2VUfUMZE4gK",
  "key42": "66K75uTfSNbrcCLstPAEkaereJsSXipyZwhhNjVrR75Ar7rmjDESmpkCUPh8pCDPcGbPqwVyB9V2g5qPBA2RmKLZ",
  "key43": "pfRDc12uf9J3TtrzLqJwCZGRsWKZK3HL1Q2jWqy5XNTeUf82m9t1j5rjyk9pMW6ERr8hmNraTSgn9Mi1q1owdMF",
  "key44": "3u3GHTeAXfY8xnBjW5guaBpdWgnasvHYkRfJUtH5WgPeo1HU1wBzNL5zMLdyvkxB3YMHD9piKkrbg5WoSL192P7Y",
  "key45": "rbnar3ZP1kBpyBqLehuwrRKTQv8abxbLZfLLZAFzNR79eyGgavAuipK6BDBeHyFU7VSpdY84VrT8eRKNekX3fgG",
  "key46": "53RLXtXeveSURUdwK1G7F6YejzyPkx5AaXD3aYKxGmjZxKyHK2Q2R6T5PyTt812p3WDVEzFqepWKxqYnAQuNsCUf",
  "key47": "21EM4zRhRB3qnAjTufJB7H9WCx9VwCmkq5mpeUSeF5GEPHwjjv5sTD3AySwSKqKTN63sML7p4xDfhk2zoFqHZqm6",
  "key48": "5WJdPGvStyP9P6jZnjscHMEbU2XHmZYdJJdHJM5jdbyv8FDMHAUmkQD4nuDJTaaBhiMfatvGatvVcAEnJe3S3dZ3",
  "key49": "4c1YqhdaWdosDkHQFLM3mQYWH4jZqFqdUsBPoe9N6zhhrQowgBHGDExeBdeV7Y73hMbpcBLYaZwRrsA1HEN7pJuH"
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
