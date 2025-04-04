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
    "4xXt6ujJXnf1k5QZCnApmctrHiz4epY1pVq1m6NMCZys12JK8vDKErGRonDi2K1ocC1c3rjoXeyRQiJk7r2t6PdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xBBp9w4n77pmbw82fSq9SSRYpxjzaZJofcynqKQbfF88C8Sd42wEGsDn7kHKfp6cUZfoZcbSP1arqdgpJrP2EFd",
  "key1": "TtcCUKWCXEdtHWakr4UonzYoY3BRAk7QGT1VVza1rMbteoF646iidZU7821hYfz9WrrBi4aGaHxL5kvPBrG7GGR",
  "key2": "2ajbDMzAKDHjd26XyTPmCZo5YeEkDstP7i43bfckrcsfrk7UnmqpANpb8yHqJf3QwhvUDAFvZESHEGFzTMJfqWUx",
  "key3": "5vUGk7TiPGCca79tLxNELkWKhiPbLyp2kxYTzp1kG8rak7B6e73sZ8cqPRAkFtrefvkXWjQeKELp1Jir5qAsfBeJ",
  "key4": "3WB1rv3q4fLH6X3WZE5Gyuhx7PUMcHZk94MSYonWGUWpQFLmT3NuTGirimFwho4cgjDuPkYQzBoiZ7YhCB7GYbqF",
  "key5": "4YojCFMZtZeDeJwWd8EVYUzGjdK9Nrz6jbbku5w47GJQUTEn8aiPY1Tyr4gd2f48wh5d3LZpdeMrERgj38dqPp6K",
  "key6": "46AF8CfkVDLN5g8q8RaSh4tc5e3higoVmKZ1aXxTHjtjBzbK2UjyNR2hudqr94aRuifibZCfWthcd7hRWMW9Peqb",
  "key7": "3DWNoNbBaHivrCq1MHf4kCkzqp7xD7p1pV8YT5VtFqkLrjGMDuLcBLYdMarH4ubz6DPj9skRDbb32FznwCWTKkPL",
  "key8": "gDyWhW3eTHdsUTT2623u9qoiEgCHFSxmNH6Uo4ExPKHeDdsaXiQA3W8ZNGwhgViNc7SX2HV1u6uqV4pwBLvUsE6",
  "key9": "R3S5UMu8H5nEPpZxq5wWcWVED3st9xQRXXX5No3d8cZGhxnW2T4q8bkiqhRBA7UC1MYa5YVDZJKXsDrjHZESGJR",
  "key10": "koekArrkhc4iGirQyF5TjKijgH541FfFnPxgwTnJ9fynoSE6z8VmknNWyZtMkjwJLEB6atLyzWCd8gNiyhRCcEs",
  "key11": "3EWk6CznkYh2rcGkjoF3HCpQexKVscrmFn5AyXt3nYfVB8zyUYwKUqUV1fknu3wyMVB9o83Xx6EZLszWEWVEcSDH",
  "key12": "3FiSt3QzijNUH8zGB5VysHp6LQbx4TjYxKAktbq9jZPCToh4DDTSg5LmNxjMyzxqUMmh12D96tL9J2YEHkMb65NK",
  "key13": "f6KAeQyWAWRZQUjodwyB9Am87ZWNKhfu6HjnUMW7e35S1pZFE2hA2or493aNx9MvKkefH3YFMvSKqSezDCjPWr2",
  "key14": "47sNDvhnqXX6DbcTN6SU78xJZh73oby3ThbUSNSpHwoGAz8YSWLXaACe3xH2j9WAEir6dbPcTYwu4ubJW34o4ar6",
  "key15": "49FnJCK7sjrvqtwp7KYZxB71pxxv4F9SoQqcrHdUURUJZaTqpS4AxUgYqNDwk5CUCrGhgK86HNM7caYMujVYRHMY",
  "key16": "3Q7hjH5sfg9PebvdajUGH4386FDndqUagrYkreRnP5x4PYwnfXqk9dm1gh9Dyrvs5d25Xtvf37TCdN7tmMfEQUUb",
  "key17": "4Mrs4pDdYbV4ixniHk7Uu1ZxiwGQnZX1Wb51KHEcH9nDg6dajd6Jf96wyFDbWaAMvHAFhWdRg1ngwqjCQFjje7QF",
  "key18": "4VyW8tbYj1F6LsJjhM2MffKn8sGUy2f1n1F5eF2Xdh1DoUzxUFoa46odoKn2WZdRBBwj4BnrhJb8M1cJTvgo5Zxr",
  "key19": "2ET4LVZAqnFaDYsoSVYscsPPbwLuDC3JimLxcFuHNb96VMFiqUaaBTbSBk4Xex1eXgBHrDw7Q7Af8PjAo16iFNyN",
  "key20": "479Yzw9rPUwnbMiJGAwvMzQufiMXD6Z51NSxAGkdamtVZvuqHvyPG9GbmVtm8nPCqs8QRvLehtpANwjtj2byCNPg",
  "key21": "3Cs2y5qH5nyxwhmkvErKmSmNqB2Qy2pXPmpAADuNoUPSek3wvdpthe97jVs6m2H8p7Tu4169NpKknAuMwd5hXJaD",
  "key22": "5BuK9qtqU1BW6jkmg6J9dcMWYjHpX4wCQUoX46vr7aBhqXeRztUWLgZufKs4geofroKVsaVBh5RyQv7edr4t52JW",
  "key23": "3KrraLSBnjmLWXPBYnB2WjHnhSyrGAMRrTFuE3Gw7LTzHqqBHGyG4tkcRLRj5d1Lf3QW9uSdYmcSHEGJJU43upX6",
  "key24": "41iSuTrbc8dj715X31F2zmt88QBdwRdHLTjMNJHrgovT8Xqukf89qheAotBYrg5w8VEqucaA8UV7fJC1jRc6BJzF",
  "key25": "23WwPWBB3vfibHQJxDAZWn1w4sEgATHpv7baHMrNM5j1eFKGUfnrkpx2UMfAf8vmZ3eqQ56zfMf3FcygrQwdVU7V",
  "key26": "4nz9YthNKWnKPJgNgP6VXn7si2bjq33LoWsEJWAeT6h1sVCEeBsgxujJjgvMvqRyheEE147EuQuad2WEGLcnudHN",
  "key27": "4TNcULbsrBj1sNUkEuj2sWb1mq9udrfiGUuzZ1n5P5U6DRdMbZg1DgmHQSdTMkPAQDL9cZJzrGi3Fks52st2KPiu",
  "key28": "121j4pVh7N5Bmi2Mje5tSddphE7kL98H6xjn52LdTdYSQ7CsDFGaEPmo6qiSKq7dnT6rBCBurFVgUeYmAcA8yAPy",
  "key29": "4YZ48FSsJNbVmeoXJMqnjMySbSkg53R6CtitB6sjpU3yTo2jrkZzvMV85s7yHyou2eVHZYco15cq86JE1KoeRM3u",
  "key30": "2h1bot6mJs7kL2ctXo238QJ9hCyJv2StyiuM3CjXqdLfhixiWUmCXDz6EZ3n4KcnvTTzHAiajy8kTwqP6nwKVAUC",
  "key31": "5f3PnWCoanfLAbCjdPoNRspNB4qNJHrTAsz42EbUJjN6rHPZJhxTCm79fg3mBv4RMiFFDG5hUmEmaFpLz8373tyM",
  "key32": "bDvZ6s3mCA3Hc97jedzwVcXDUmZYHazxcnQtrGPs2ww19nMdyeiZGqQ1enoBARbogZDHUcSY4d33NaDzJ8Fp4UN",
  "key33": "2txz9cxxNqozRahx71wJGSEpgMUm7VAA2RWWB4YKB1aPrVhnyNSTRM7GGBqatQY7SBfHN8DdhqV8EdheY1jiN1yt",
  "key34": "3X1sMNhzeuRwX7MNuhS89UaBqHoxrC4tPNyx6bk82Nag3s22pLXFGnB7m52c3LnEgwEsRzRyLzb4yGLFTBxc6dmy",
  "key35": "5wYbYuFigsV7ZvjimquQhA5BNV2endsAeMv7cEC5sq7NjJRk44utSVbHe3ioVpFhQtEDSrVyvbZUtE1665DbbctL",
  "key36": "49ncetdNpa8wb2CQqvCbeVCVK6KsKvgvPmFhJXDz2VYF4nrRUV51VNECeRoiR6bWEEY6teAuqmNx7oNXaeVDeTe1",
  "key37": "34XFqmjhL3gFtUv5wNVv57RnfQ98jTnqWxi9GM6fJVTPvgLebwJ8mUX7hu7A8Xkt5uL5uGZwxd7NGH9KSvaGTXXG",
  "key38": "3jD9XVrDtgscUvJdCvThXNYdjQoEiQnTmMkgQ4FqVmydd7JA7htMbVWYkd91kuinarbpXPEpmXxH5tL55WuhZUZb",
  "key39": "4DLVaEX8rxaQK9KPzMyrmkVqCNqCFKTc4gpmCPffZJgVoH83cwvAHcdLEitcKknKMWN65XBuuWybb5Gui8MNGNk1",
  "key40": "67pM1BWMWJLtyKs22hh4Zzo6gz9GFdB3X8QYuje3LpEepVGpuKvxXtdgnE1WP9FfAsfUmjUzv3qCB9ppHJtqL1TY",
  "key41": "26fEXjDAsUQdEqeFRA3cPaLdr4MtHeYABYyR1SEY2pmTX4cNckk5fAKmM5rci6BTs9fNGhNj98BzH4cFHwUkpmUX",
  "key42": "2wXusHHZJmDUwZKfqrkoeUxLGa5zCf495KdC8rmhswRgp6sdfFHGGNwYzYFamU5UxvFuXbJvEZ3c5hf9RBGhYEo8",
  "key43": "owSJQ2xdip59yC2TcbyDvNkDGKtVA9ghj2q1RC4QsgvKEZcECxdMk4hJEfrdcDjjXJt8nnejMTNqHCsMftdGxSi",
  "key44": "WN6GfC58Xbxa7eWhW6hJ35qet5pKVJgDXBmvQthhMoSMK4nEKFpuvE45Bo5VKA3F1egLmpCXp27xdXf9KtnxkHd",
  "key45": "4DqrXV8LixxpcxBYtXtWCTAYHB8osGM9L7cFPYy2ywTiSxoqxQUbv4geuM1M3d4u725cpkiY32FWE7JBLtkbFcLV",
  "key46": "48YBHAR2PuX9P4kXm4DD4bYZGmcncJZi42HnCAfbj2VRzBeiQe6CYdxj8Vamm9dNQ2WwSB2if4g8Lb1hRqnCzcjm",
  "key47": "B4DcGhtdCAHyPzgy1Ne7p445xdBDAozzYyncL7DUyGFtw6obYVFgshMjuSDwMxR4dyPG1Ato8BZmEPAFzGQLgPq",
  "key48": "54TG6qFXRT6whsksomYtuEQW1J9dTEk786zEEqAEQ5WjBr7L7EYHRmUrecAhEMHyFqCHr7adngYSqH3QFQAFsyoV"
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
