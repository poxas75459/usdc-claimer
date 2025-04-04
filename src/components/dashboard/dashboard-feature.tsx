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
    "F8biHMXKjKH1o593sUg3y2JuivQuhbjsBGGs5teUsWr8JvC49FskJzBrw5vC5YXe12nbWeasJMcSJRTsTHZo9Km"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66xFNqnVZVb4BCWhWeQbgeHzpNPT8mW1BCu2ViFmQwgineamEPJCE5UsnymHzDCpxKV5M55JyDY7z7Z4ee39tWAz",
  "key1": "54czpwgvLUF72hj3NErL46xtBKc9M1MK3uGGrpSJu9T9h4doYgNEVKL2Zsx73h2tWyXqDfC679peFHqM3Tm2Qoqp",
  "key2": "323peQ4ausmsuA2iMUVFfWVUf8UhuRUhohCfiCBYZm1U9TdKKVa7qgcg7W54HxYcquuD27sPUUBWtemj7GnCPrH6",
  "key3": "5kYMW8nFTuKTdNnDbSgq4jvHkCMBnRftq4yzQrLTVeLQmgntMULfKybT9eqNJk7BAHfASkpo9bN4dtcevu6BYJzM",
  "key4": "4Yk6rbMeP8Q7xa4hHDCfHQ5R8f5TSNyBVyrYbpQp9LKV3FWuz5jqs3yZw8K1rQ1bTbWnpCEvuKbztVgxod5dc5n9",
  "key5": "Q5511ihoW5rap3z6wuykGEYQUNZgu9erHgBPEogZp8B9u47HfhmcRQ8yFyP83XaHV1GuLmi4ACpoKz4YJ49SANu",
  "key6": "4FqQ27NbY1SvQX1vKAmi1wJuWzruyY9V7axDUH5ct8bRTEJSQiD2JmheQ2hhQLi4KUPmrAeA1wkefwvJiqpD44db",
  "key7": "2LRVbm4Ni6kd84DQ7cGJAnKxL3NvLkjiU8MR9oziQxztYctLZ2LPu2gaK4HrHzCfWGkLdUcDXB2nTvjQWvWPb9nP",
  "key8": "2ErgVQbRgaKxjxdEvDb6ZxWiTMxzkHY7Nsyu7eUzVURYEMaEmgwfhHYfJtj61UJ4MESY3Ym4XmJkhUMXyQCmVaP8",
  "key9": "2ZRECbzBrv6vjUBbTMXu3PhPsBD9g9SYynTgk1huFXtaPGpS3LkswktAUDMtXPUsdkiSUvzdkfWLHLQXbAATZWpv",
  "key10": "4iujGn3iGe2PNGZp7uKp5Da3rPywMcY2ekYYjHtNAtkGvFkYZMmxdh1g7apQmVPwfC2GG7827dwF99zs3wByppNF",
  "key11": "2RB6uJmmp1RN8nK4HKrmFV2pQoVDGAWNTWPcFWq8iLdCicb3UPKUv4AWpULSEq3igbXFNoDoYgBWWaJfFMy6U9k1",
  "key12": "2uX2yPLGDaKG1MPz2y2gcMqYZ1aqbduGauwx6765GUi3ZLVseJmgw54cuidqFV9RaeqaQjUXgpq21q6fR2b4r3tg",
  "key13": "2uTb4CMYNxSCMUM55bqsCWW9dj4cPbenWucJ7akrm8CCHKiR9UtJJcaGZjfcVvoMPEusByzSDgd4GKrAiTVQJtND",
  "key14": "wAHxvV1hNGSxkLo8KxpoEs5ebq54kooGwFqmJ3nScCBpqowPaVcBRaXtD13oF8M1Jf4Ciuh9mDfE34wqqe3fMWj",
  "key15": "28zvziptQtJK9AJwQCPwVKC3wCsAMJXBgpzqpmRs2eguug6UzByoET7Twp3vwLV7jb33iLEgYcV3HVDkqZmXK1Pg",
  "key16": "5JJTgtwMhSUcKxL4rgpqyCV8SveWXAF8zVMiA2G2NWDoahwGtDtzm5nR1fDhSfckCALjemyFeJwdffieVJjShpf9",
  "key17": "38JkKciHHvJEVjDfBVYhWofu53fGUxqYiBTA82RsxhnPvPFia1XMocHrAvYFpyviUnCdygiqcykFZWkjiDGpqkvn",
  "key18": "3Frhw9x3RbzB67UmswT5GLZNvcRWD2LNKVedVEzeUPQKz8L6eEGyN16aNMmSqHhsi7kLjazgLKfSS2FRJwj3NjyK",
  "key19": "5n6EcE8SMRTMF56WhufZRtsEFf29eth8t7CnNvZ4q98QCwWzHUff8LSd1dQ5LxmTxaR9kX7emWi6rarCDAfxM8VY",
  "key20": "2x99cdnBVs8CztcTsQwbVoaNDhGNZkyvyo5zFrgVJijU81R9QF3hqc4UX9ivuxzwrB8kmCBvq7CDArY9GrXzFAgw",
  "key21": "4xZ8nHirPkk5QLoyXMHbNEzZhqU8UakwKBQqeFUz49EAuVVgkKPv1QB2RwhGu8fCC6iTbzM3uFUHpqcdM4qKSLSy",
  "key22": "5P3BE6fveR58d7XLH1RWNm8YtnmYRyMDV9wzcT32oMwxSfMzxWcTH17CawhcKzCWjRNGzcuZ3SVXxYgZGsB4z9jp",
  "key23": "4aWoGCHSqjzw1d1dFNXUmXoG4kpD4UG4anP4S66KxjEo7MUsJ1BbzgMWE8MgG1q3wb6Dmq8JN2Md73s4FWBiaVGn",
  "key24": "2D2sH3wUTnDwULvehZ6CcUQ58hAV5n3PAxK2j3JJBqyoz896XzKFrVWkKbVhJMJX6eKj8wFj51BbHW2DzTypVFDJ",
  "key25": "5DmfpviLqW63KdM21xSZAETw64Sx6wkMoB5kMjgT2Jbm9s2L6Dg9jtzKq4tAW6PeBwX76Gr6XcaF15HzGha6qpBD",
  "key26": "5pcTBoZjXoof4TA27Y1gxCae6JDiqY68wMJ6gXbFsC6KWm2fmcgUrhnW7EEFMPEBwQbMfZR9BdnyMer1CXPz7VLh",
  "key27": "4L4DwKPSH7gMtur89ZGkbGaPk5juaAYsvCJVAcFhK2GbUDMJAtFc48n5njhA4zpvMEsHURnerNnq63egDj6jcF2A",
  "key28": "2JxBncZvo5jnxhyYcGTDNU9kJ9UuzTNMQzJDWP3bpRJrZXZ14HUBKYWvFyeCc9aKU8Gdqpy7Gh7BtrpoZ85596zk",
  "key29": "45djffdtF3FguYRLfxxQaLRvvyBVzTvJZg6ZWDdwevdWuRnCJ4X2jUhuaDet6gwgfV7L7pPwMpAuNDoYFHMjxzQg",
  "key30": "5pK2usDZ2zQUaDZUc5gaRxS7jbKAu8ozDizgFn51GSDMdhhGwLgGoX9Ex2QcjNr4sXTq4sYtDo1ufPpWmRJC9VKg",
  "key31": "43GdQZythJj18f5Adq59vvqRU5BJZG72iBSgcjLTbobRkexoMeC2buaWLK6DdZQdeRTzzJEeMPudab3vfRnvutPh",
  "key32": "3MGRKR2B1pivQPGh6XYbAxNip5NWsHtJiQp5eup1wYyRDTUKfzQWtpAoBxVBJ8mNTBKjqSuTv25Jt3tjfRybPZDn",
  "key33": "32viLeuQ3CQhTeNbjyHc4Nu6DCeUpqaS1JgQfPAMkVygT3Au7T9AXXiU9m71pAgFARi7d3B2vttpdj4e9EVrz5TD",
  "key34": "3tdm41gev7CCNJxvtxckmxdsmAd26wGeXtC6ek3GDm4bEV585Y9vtYzL35jM3aGMkzti5QfHbFaU7jYSpfgNzKJ4",
  "key35": "3hSaaTXEs4oL69GFkPbi3UK5u8ncnMJNuenA1w1cpANqriEE5UKskRqbBWvURDAq69HtKSBaa3TYb16uDJGeYfMf",
  "key36": "cz4UpgjEoSPWkyT9CB1cqipx844UKkE7GwGhJzHo7GXaRBH9pmc29PETUo62oDbhT7Kwbr1emFpWmtG1oGswT9z",
  "key37": "3ewWjXk8vd5LuGn5fWT4f3iYrZJ4LAmk8NDQZ6Td7Znv2dC4w1VKy4NMYLn6rFWHBGCnCJyWm6UfbZgQTXxnvGJh",
  "key38": "55fCXaKKaiLu6g4F5v1K1ixXezEEPwpMGWQ1htYoCx9fmfaupA9WfcisX3U7K4MxvRHedDMyjUCnrKtaADXFyU3r",
  "key39": "2o4i2tXpnaYcWp54x2DGoVDVqzFvHmVaJMtkoxQkNdGF6X7qnHEs2MdsyEu2b1pu1b6gF2YtQkh4goGnrZCcuFQj",
  "key40": "3CUywRvCGjW84YFyKtyaFMTxArBbQeY8PdvPdePGECExFqacxNAank8AxYvMkqTdpHDjJL3ApZJ8gVvriKKEXpMN",
  "key41": "XkhR27DtywG8bXMKNk7mMBvN1vNeUheQF6AaLL1QK5SZnqTKMxCCEtjkiRicckA2iCkSDVaCpWsY8jURbnKxSgy",
  "key42": "xdx5bEGiEideHrnKCwssKzc7AwCCJkdDSMYS7ihbcKvY6QngMZSUyiCnccmomUGKYmCd9r9vtfzXALtPFnZ6oNZ",
  "key43": "64DpY278DAHQwLHeyjFTarRADhvpwkmL6J5moCMHbFG24d8TPRYqwJ8WVcu7PfFgJhvKmEtyLsyzCodaaTUvWCsk",
  "key44": "4C2ursgGpoNgsWdveRVxaaiV2MGyW6KfXG7jFMnpFLu8DrV8v6VsHyof5Jdi2FxsQyv32YSC9EFWCiAY6vys4gqG",
  "key45": "5LAiMqQijRniZMx1iSKEv8m3QqZ21Tmxjwik77vTuQFJrYhJnueqe49F2vGB2ihvav8tHKmZGq45ZGAzigCBAPmx",
  "key46": "5csTaf5bQk3cgjadNEHydmZoed5zZuKEFYDCEo8pSfJTWFhFwEk8orDthgxMk8eHsfoDC5vZt5uYYhfXq2k46idi",
  "key47": "y5Sakf3Sbq3KSeCka2kWPZyWDn31LAAFztTDzi4RP8stSVMFUP8coCQ1GMZRQBY7GcHR9vJEckdwTGTmVp9mzLX"
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
