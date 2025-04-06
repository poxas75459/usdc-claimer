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
    "3Ntv5vkwQx2RR5g1zjUL8FMRop3EZrHTnoCXCT8B5H8paoxCAbi4v4xX1cS8Spj9T8b7WhC4uknuC7PXhQqcuxSf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q6q9rpJcyFWxTuUH2frZcaUPHVPBC8pxbPLVYPqXU9V7kZMteKS16VVDTuk42sdViunMmvc8kBkryLPjhdAYLKn",
  "key1": "4oHTuoEJB1UEz5vUwGGc2mi2DDj7ydHNFgxkofbUSRH6xhwvqWqbrAF7bYKsACNQVyALVXAdnMtbrZDZKtXC9jGV",
  "key2": "24hrpSbtVAjb3St4m5jiwHe1XCAKFr8iJsGnuLDjC7UM5tGxaXuzSCPuNsRbkky9Liq4ntT7FX32Zr26Yyjdf9xs",
  "key3": "5FgdvMsmeLDoH2Do9RASr8LeeiYpUSRf42rcu8qSjaNeUB3S9RtuW91NJarGgXvorTgubNGkNn3NmMPcdBjdBJja",
  "key4": "4b9iuTmbEnuV23ccTUD7yHDR25JiTWhjG4PF1qbVUJwxFrupwKQ6Y3ovFbQG2f9jbJhTucPgVzmUpMTnVbWN9K3K",
  "key5": "UGua4tNmcJens2oUXLGphJymf2FRz6zbbsjWqxQmDT3gSoP243HtGxFKoeB99bUiBiXgaaTzFBTVycdg6xCL7A3",
  "key6": "33mheM9uEb34u3nS7owT4nbCT1ZG8DaJa4CQ8pFfS22jQnAWeZrwWehvGXvQ4Cf5LfpqqmDWrynn87eukFgT5kK6",
  "key7": "2b6VXqCRn47E6Mfm85MTzWkFhfJHmoFW5NTk9R1yXYgnFjFBSCaBgksMfY9eGkeXxYG8BapkA2VadzeoLGeSXras",
  "key8": "67FubisCEHqW52pVdcYickbpT3QFFF7tGRQcvMsmZUaYMk78PaZUBNJQSkJ85dpatx9JZz3B51HxCmaBt7mAvQFn",
  "key9": "4gqzk57mpyActqkKvijUuY3bUekburo9sU5WdgugBkus2Ry48ZtzYp5Jjj8wnYXzf6Fz9Gw75h3LW4P1qbkFj4L5",
  "key10": "4QEQQUYd1ayuZRGANqyJyrXPobW9WuLTXbfB7j6hPazmfE2tRMBYZGeaJS4JjxCx1VyNbpRV1kpEspoKTdfSorUP",
  "key11": "4jXPvgtXPBescoaKnRRmsjwfXChneBSLX8NKG6okLQBskW7dJMsvFDapTCfsr6DfFdPPXATQmxxjn5SbNQkbQ9wi",
  "key12": "2zgcfNyPFcZMqggSyoDN45rb3MiSPkESTBQjbzg2nB35QXcbDJh3i5we3Bd8pNTW8hysUEaU8V23QGfRXZihGqeV",
  "key13": "4CKYfuYTVp5wiZ45paHw57d7uqrEGHhWR5E6739VMzdyJvjpoYVoe3ZuVuu27N38J2EosSMJH9rDuL2wpT6i4UwB",
  "key14": "51PHnRR2QMJbvPFy2TkxThmdY7cYgu6WV8q6BMptcf3PD2iVK83XuXbP3aLMEqS5HLKCDVxsnKvQJEzoYnNtgL4p",
  "key15": "3NAqruYAdzHaQHKAoE6NWfv5dJXCwWx1Kyg5DLdKjjWMzzV9H8CA4x6jJsJYozpXjnB2hpmiEpqgfWKwMzAjMpjd",
  "key16": "4mfunAYZ73SEYhRKCZymhAbd5eCuVVF5dmJVMhsUZ67JisqAZTZ3QkPwPKB1ZCSV3tEkqmH1C6w6Nji1FB9rdNv6",
  "key17": "3xemae6ZCdt7NMDDNNFni2Cc5hMscXB3WA1nXgBpfpzuD3RpKkXNwd5MLECqRHDdcWu2fnyWoHU7E584Ni711rTB",
  "key18": "xs5Ebd6w3fxQAPfbdsZ5LNapMBSukPqbWiQ8hf9Gf3Si7QcNUfbo1cTPYHhdJXhXNq8wiPyBuCMaDYFeNk6HCau",
  "key19": "3ubf82bZQQGGUi9tnrqGq7HwJcR1cTr2KzCVtzHcXyZkbMejtRAhG8nYXhHH2Vc1y8d7ybhRvaPJqZj9DJzyWsWw",
  "key20": "2w917M9Ejsqinu5LdcjaweH1mSNFrLp8YEcr821pvhpfL7A55hPEDT499vuQZUhrki8PwXf8E7uFYb1Tahg2fdj5",
  "key21": "3qPGniFCunKjRUg2ApNtAr4SZPV91PmhuGtJu5MSrxXsn4Ya2MUVcL6xPByEZ6y8RtqkExRRhzZfAFEExjEk16D9",
  "key22": "5W8EKBj3fNUndbsb2TnsH81mWM69ACLbssUyFjqZHGCVSYyw5KtK4Xz25eNDWgZTWvbAGViQxeftt36wuRTrZhon",
  "key23": "3Zy4GiHe6SNUrwM8PuXYuKQwx5nJipXYKdgonkJSDi51UAMBRWkeQGo56XErwU5TYXdET5ijhRwvZELi32SNpJuX",
  "key24": "61b9QGmJLc45MvEAXYmZWTxugN3nGwEEJwohKQFPyVWBfHM38Jd9PBYHdaPSVmSuWi3m7D7sxcYxdawU9SbJR3hf",
  "key25": "4eYDtxj54Wc6zhCFJGZ8iFNFBjKbv1C8SM5ZznYYwsjPE8F18UHFDUathcmgCaEN9ByNyFcchnJubPnPLS2eWk8p",
  "key26": "3GGRpdoy4Q3WfXDGwev5rY9KgGZrbWNzWKAmQn7y5R4BGSsNE4AcDFZL6Fm93Uo8nbUS4ug96VnLbm5F9Kkf2iBE",
  "key27": "2fq8iBVddWWdCKXs7Jjow3ijMz5TBDt2pQekK1B8vxBBYnZ4M89kq9KZPhx2jTo6NG67NCTwhzqsBsTQhixJyZAE",
  "key28": "Dq7BfA9Nkc13BnGPC7CBUJiBLy61Rg1njww68Vm67PCzy5MewhNideVv42PRZdi1isTTLDuKKiozuqFgRt3ZVDB",
  "key29": "3vCC3aPxmazUnY3Rxg5MaiAgY8oc9UynqVEhFNYShqmh3ktw2vDmpN2T7eFLFy8BoKT2k5GRFtPraPq4RVknTQ1N",
  "key30": "3RkyeaiMKXaK6AMFGTfacDMKMAuur3DGQKbqPs124xkfSm6kBRjrKVb1KmE1wkDbjFHQLC5ErL4LYXd4yy9RdJZq",
  "key31": "4hn77mtUFYpJgwqzs37SokNGtyzoVEJqEwzg6Si9FzrWJod3rw7hVwMXCcee4E3BE4FDQXgQoJAHu2CtWCRrh4NA",
  "key32": "q5sh2Uc5JJfq7xaehiqajXFgKUV1iHw7svq837gmc6oE3qJ8uXgx7nU5QU4pfmvkGxLUbhW4jB1e3CAUPPtHkQR",
  "key33": "62c4GY2Wnydyy7av3SDEgEZHwPib34u93jGqTFaEai1fYTjubGgSQPMpnK3oicQvGe1719RRPWnnTMtUUKYeWqo5",
  "key34": "53RLkEUxJ3BxqbLoE2aGpJmi6iU4s67NqqGtXmzduxpiZfVcxTGXryTSE8mhg6sxPercTvqKXCrKPUvzpCnCuq9Q",
  "key35": "36gTjxsc1M5tBKisGyxnZaeWkFbcifmKBJKu2akzuPZzYhrfDjWnFHQ3PwDrzMRV6HP9RTmPedyFXmKHepz4p27n",
  "key36": "3h2QoTvn5NWcX1G5bWc6EigwYgp73QR75qTkTaUN3sWwKgoHb4FsLrN3N74pG1fUvxa758gfgwKw64YGbmDsBjtE",
  "key37": "5UxoXqBZwtgageyREjo5vb4eVrEx2ypu4LygtzFo8R2SZ1L5MV53V3XPiwyy5jhvoq484X6kfWMPN2HW6suyzb3s",
  "key38": "5ncGrP4YH4HbogQYoZGCZAiPtV41MmtkLKRJLRo46UU96Ag3Tasbk8i5RNcj93oV1LkLC866P8csC2BQPzj6R9VS",
  "key39": "2goGsY9rWzNYDtg1V7Ms1KmrwtNqvndzwPkpmCehqg1oFEVt9PLt1bwDAuWehSPNza62TDZX2WAqaRaVnwFcPbW4",
  "key40": "39aGVz46h2HUeHsACRwBa959CkDrAzsaBNsyp9guAHxsoHSW2mPDu7rLM9JYiSNGB2fPQbGtk6bHu1HUWyFhQb5M",
  "key41": "2VR4i7ws2qKGxenqUqHruKTic1FUosRzE8KaLZu8KAHq54e4Y7EbosjRBMf3GJRoB9yvqEBTPVxHEQoWALojHPej",
  "key42": "26Uyj1oLNN6iUKXajVaKPNF9wy31wyGGJnCFV1RbqHJiLJLk9zPqn6tZ31dZcHxSzXtt5vW5JphJRgrt9HHmDiKb",
  "key43": "4KPpjkAwhVrnkWZcwxhTJzC6cWM3adBDbYrzUU6n7SjWWErEwaV494rGYbiZU3iBhPCV8pM1GSoBbcjaDKGjK1sK",
  "key44": "5LWV56kaMoEce8kBjPqb3LXowKpza2mfXx2nu1DVKe9NfxBdSVkKCfvNPRFiYNpGeED9VRjDvN4oZ8YQfR6VsaQx",
  "key45": "4dgCn11gaB4KUQUb7kBadacL25iiGxu1JASJr7vSp8g6ediKKN9SsvJrgCxKiMkJDE7bHK5rVTJDA3vGmezEYdUz",
  "key46": "vLTHVCh9rBr4AyFkqasXMRd5RhpkqGNgC2jzWnvCrLQQT4BANwbaMxoZCpS3aYW4kqh78Q7vtp4FppXUsSMYtiQ"
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
