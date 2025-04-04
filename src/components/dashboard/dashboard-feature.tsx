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
    "2PZu3yBfzeuvpFPt25pYjhRbWKcyRyaVZCjizmPUfiVtiRSWJL51ZD6xahD8kBgCdV8WwxpjVxbUZpJUs8puPUHu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jQZMUTFYpC7ZKx4pNVNXGQBe3NiXbfJzGAMw3NhT7RTVj1nFvWZycKY4U6sV1QwuJH2jhnAVkPvACHvxab6XUQF",
  "key1": "2L7ck4qUM5TDWy9FodH6RW1Tg21hs3DT2r8eesYsnhWgECD2vLmk4jrD4o5erqABGDQ34cZ9McYci8Ebw5HfYRwq",
  "key2": "7cYzDy22ipUc1D2n8eh6mLhPM9YmEJM994Rtvm9SqZprYSeGeximC846BAhEqPtu16hqJJchmsECJqngwsy5V2Y",
  "key3": "2RZo3x8Y97TyQPeMYqE5k5eWSXYJUUL28ybbCgVdieNeyPKUejRUxpGgGzykq4FoZuv2UwCfUwFAwEJw5t9pCtA5",
  "key4": "MzkmYzbtai5NCBH6kVBJ8mwW89qXwDxWmPMKGfi5QiNJCGzYRsdMST27nc3PBmA49QYXjSPvBPDnFmEe1d7bc1S",
  "key5": "GYXKkGGJfmAgJ4YLnCP6LDqBkTRrY6zNzAfDaEZ4yotNnMUk1USdix9poHHPLGBFBPqHUeVMC3kGEoMdbgG5k7j",
  "key6": "4CxcqCaFBPiKxHmRbixSxs3NQsPafspuZyEzTqRa9NSAN6FwywRbdKMqwX3dm7rqSce5r4fkoMJNd4uKt1PWTkdi",
  "key7": "3KFUCZSNNE5HtTvnV2RVLqRmWFDHi27VtmJGKR1gvTSxndM72ptCpuEK17HTge4Jyze8ucQUpqqqG57NjpvYChph",
  "key8": "5eALHE6dJdMZLp7xWtuJJm2QSLPn6rqNn5PkjchT3rmcqmAXk9FMYjf8oNmYRzwb3vBhtrAAcLFMvC8MdpziEwFX",
  "key9": "3DAeBwFN3Vvunw5kcAYGqpmNhnsqyW9DrVBd3mcJVG3L6shFoSayN2x591ipnTctEWKGhGGLzYCBnJM8dfEDbZn5",
  "key10": "4p9cjHVf8m3YBrkoFmqRqWMMj9AdQKSDhix9VDU9ginqzaLXmfu6TjiDQ4Rr33JfbqnrUZJuwUxaqrjP6YsA4TBG",
  "key11": "4NEHBcbPKkXMVTAb21bf5VT8ZEiVD7ikDhmscvrFefy1z4cQuknBwMXJtPUKXkzBwHWZAH59CYPExch8XRsCZSTY",
  "key12": "5HPMU1t9E3UxXZ6ZPWN7zdcXAtwDxnFba6V9Qx1SzxbFm18Cvtahth3rvqLb1akypsMZfpUurRmiokrCX7TJCLLy",
  "key13": "NtNhkEjZCzy19EK94Pcx95TL5PzyJAqriAKvrQmKuAhsQFThx4ut2Qd2k3b3THDJoLr4rnpCpjBtDUDm15uhMvA",
  "key14": "5nyqqfv5FwF4kD22PdwLZYuFGtBfSetBrW8oTN6y8do8jCxxUucPPLqn2AuHfsL5FJ8dNcrW6LoxgW7vopeu4pWu",
  "key15": "wsNBzb5aaCrdh2QyYEk1p8FBt4VVqDu33b3i2td1sFaPytRrZQAKjj5abE9oXzPTeB4RNJd3BWURGNDVPRSdUoE",
  "key16": "3yUspCHyZtkdpDKDehHMoe2ih5Db6Dco2KfQgu6ZoFcWvBiK9t2RJiQLrf7xWHqiF73LvBBtius5sbWv1N7aHkpz",
  "key17": "Z2KG2Cebu3KiDJCWBrmcY6qdBgzRczhztqVxxGUdKeizq4kf55ZNCLZD1bLE88FhKLwEErbvQb2bHLx7HQUcpBW",
  "key18": "2kmFiMrwDhoRFpU5Fsf51nU453BKPgfUNpHquGpiuP8iYEeF1VNXU3f9uGDYgyyetMwGDWAPzZ1sqZa5QZLgv9bt",
  "key19": "62j5hRBTzUCMsTn5ciXARDJVDAm9LEdm9BYMXu5pLVmgT9RozKtZHL1KVU28mcukXWWE2bE8kFNQB9TvXm7Xpoem",
  "key20": "6216MdZQtciWmV79tt5WrEsNoKMaFFb3CzofbkYtpV2ukQ4SUexi5svkVqeWG7CfpeaxJekzz4ZqdSSRB2VqFGsG",
  "key21": "2kjWPKcWJrvn4HyRiFNYvszgJVFU7kQJGtfF4obSEXPEtG3B9iUcC5PV7zEiVyA3UUBb59CFGWZR9wUvWoYgZcTy",
  "key22": "5CgCjLPyerKbATxab221F3PnS1jEaTgLHwCRh6Jwm5Q6C1s1qccy4eRMBAJwUHQ4ji87ZwLVxsVzVE74sgT8snyB",
  "key23": "r3AoyiPhhjnTT8EfhHQRVLvGbLfAMDA9EB1TN3Jfe8v9oTbJD9qfZBphqnTYdaNBtpxvEzGE16ZCeNCCEXW9hHz",
  "key24": "23dTKTQi1Tp33SXNJUNHj1k3N2PYtnnASwvgofR88XMZgTingz635wy3Ew7SUwPcuzDveDVKVQXn4EWAF9tfG3UP",
  "key25": "4KAPE19o8t9bemTsx2V66vMHev3xtdu3SD59tuSC7PEXQn1twFNkrVBx291EtVMm1YcgWUcbfYBBDxnCFTgRzhju",
  "key26": "5ykPCyAKX8VfxNFM75ZqFge5rcxkZw5HDUoe6LNZxQRsqdbUFcSMFhUjixja4ixdYZFw2kEp6Y4WJCn9CjVqmRkB",
  "key27": "2XuD9M9DZ8YxheCMgVNxqW9H3EqyhZDtbNeK8MCKmYUx1q8eckQXKVGvc8GhySVXsJe4SWYV4f3bdn1YRH9hsyhC",
  "key28": "2sPPqWFqaVSNm4QZuBwSSSk6CuaDcXcBw43vAuN18V48Tg8cDifEMTD8ZevuwYHwYTQdox4RJqxoxu8EYwHn6iLR",
  "key29": "2s9AshxrJNURMbeHyc1go1DfbJoMQ6fPodZHzhie2D74Tb1nqPZkHA7BGZuD8cE5vwj58W6XTdyw8CtwbvhyDeLP",
  "key30": "3TGtb5oRz6VB6gfzd75gKK1wAm7yqnjr8Lz5ZyJgyWga37QzJSDJthfr6LLJJn7gFTTtCWJKvVKcshj2wqnok2cw",
  "key31": "22j3wGbuS63siYZ513viPg2F1jvTvoyu6XMojjdT7tANsgTEjeYrtAkhPxXTybxC4QwCN7kN7q8mEyQfSGicoJjR",
  "key32": "4dGkp99uM38v6fZS1e3RADgxivyU4JDJrudq8zEpTYp9aENHm9iRQ4CS2DrPRxyc9AXxGE15sebm7BXckcfy6aQj",
  "key33": "3TJS8jfccXEfraGr7X2kbPr1C9Yxq5EbcNznMxLmAy69CgRLfWJEwrqrdz2oCFwqbhPjGgfzsxw9AyPmT4pLQPbJ",
  "key34": "2fsv5krGURaZ2v7XkutzcHBXDBjSR11jZcLtuT7NfmqFQii7rCwCxXMZyvgTnsCCQGk1E9ikD1aK11zGVXZG46c9",
  "key35": "3NaRdfcqyg46VgZqYFNKA92veoHKbeJKHhtycFDnX5fz4yfjf25kWbxJpzHEzgWU3G98mhA9uHnU86AkQxDtbV78",
  "key36": "4K5bGFciXWUSmooqbu8dDESVzmj7hnZb7bYBLsrDWsX8jP8ZtCiKu7wGMZrv28fhy35TZx4iCf9XEsh4Hc29V9sh",
  "key37": "FRknTKS4FdSoWxvL65Bt8KkBqnxVnU8yMhUHeWWk8ZLey4dfrYEyUASiQTd8KvGTC6FutVCEMQqKJtkectL7fMq",
  "key38": "5Ve7yN8qPDy4NskhZTdZGFggLxhVqVapYyo6iN3zXuzMDWZZpdq3kwh6NQPcukjPNAgjVsmkbQU5etb7TrrqYaCr",
  "key39": "5tGDhpKQXReX4x9cCNjNP6fafLeC99UZmnu7gdg8J92HcsJxg1HgRNuDhZMzR5g7wRD6rGkjuvDzWhxZ4ALCZ1CD",
  "key40": "4XQ6LiM4UKnN6gb7abhnPXwaX43edwvnsG1QbQ9jtKoWEEpDTCrg8zbhwSc3vfsvUZyqLQbsJR3g9EcQwKe3XSbS",
  "key41": "9Bcm5kXWvS2RqhRm7Nw1SSV7KNaNmeuBt9UsGsDnw1E47Cq7Kpgvzy5oeKD3Q8NcVAw9y1ECbyNsoE3uWEXCinw",
  "key42": "4D8Rh4b1gnwmD4PCgiYo2Zab46yZMZnPrs1ER4qnLGRZJuDSzY1fJjAWkzHAwJsDGrEwcVkEebemV5xpwcPgLYE7",
  "key43": "2APEwY4YAtNPhk2NHThtSUgibhY6UZRwUGmbwTycTTY64SV3QWjAh8AxbC8JTDMefnaw2Yk6uPZsjVDyQEWE6CbB",
  "key44": "tFx1AztHzzgELuT8sBXmSws25Y4mQ2YgYir92FCnvEiu9ogQtn3BanWPgyE8AspcmwtqwyZBFmmeZtiVkfk9PYc",
  "key45": "5HhfQ5GqcQRavL2xRdgyXGwBpjBaqCK2eFMBbMeca6tXjifupL4bPhfjaswVejhXXUcCJuL1vBKGFbb2cJ7FGeUF",
  "key46": "516CWe52tn3T6JYiZuRKxXmjkjMf7Pa6WhaDk1dfPHkWQwon4BfoMGvVnRoFPnqDyYFtr7tL4mXWQ1DM2oSFSzeq",
  "key47": "3jpp4cxSPep8Lr3Ui5xNUx1CozEzJaZdJTmjmZde6pbik6dmfzHUrbrQ4iugCr7EMHdXUGD9jKx8VuoJbGKLSw57"
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
