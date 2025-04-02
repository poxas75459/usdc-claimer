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
    "22U1utF2n2eJehdbLNdB75LP59zABXz3oe2ma1kv3jUNuAFYCoG7K8CBSLebLZHTUPTrt8iPuQUU114NVfdwvta4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2THd7HgrdQFATjN4m1p5zZW135HWcWqmKNh9Vx4tB6vM9uZm6n1jHpDmiSMJP8HYShv8FiDMMHwFUV7etRX4nE2b",
  "key1": "3wnVb9ygi2kAdELgxLXYnUDRQnjiDsCm4N2C3GxoyJ8XcZdCrSqZXEf6yLD7tBjYUJLyTZEukXbw7aUmFtB4MYHT",
  "key2": "4EL1FcQ53uSBjpjo9seJPxrtFKzn27DwUWiHd2kNYR8FfTws6gs65sMXbd32wZrX7CFuaPZnk68eNeaEV8tN3xvi",
  "key3": "2XmkkXm8T7wy5DXSnGhiPzD4xCs4rWy4dhkxmvcFZ8fxH9Z7KtCapzrDrjzbtMuGqL5GWeAzHCTWwQ19tSKHjFbn",
  "key4": "3R6eUU4kzbZDGVpTQ1cj8SMrq6wzXKTt7dscihBBFRyi9jAEr61tmo79yy617Q4FTDDgtRhMTzuPy6wSurRb4A5c",
  "key5": "263Fzp8cGfaqksQSnsH9XZC9dNAZ47d6U8LZGAB7cz1YKCh4gmzgLqkYhz2ZocNMUY1Yh1EMGUsuj5daZb9Adw8h",
  "key6": "2PfaUDLFKLg4qiJiz3AhyPo7vNYdrTBMb67pRBkgYmnLWARjJcmp66vyv1rp66qHKYUphG3eeMmP5yhezAFgAMiS",
  "key7": "39F5wiZaQkWU188HkEnpcr8pHoSu2d3cHwd4ziK4vmaDZWHG1eQEgc7oimPg7JYzM1quXwg1G5sjgtJ6oegUN9fz",
  "key8": "2UudVBGbEgXiqxwr2Zq3kwdDtG5KVohBDQiKK1KPsJ86396MUyJeDMKM3vJEWRJXFaHNGy3GcFVVdgrknepC7Vbr",
  "key9": "4huyEcH1fjvZUFyNGoes3iFURyFoW9wQo5c1tf9ZE28ihHJzA7yjw8YPAJ7AwcY4AnhhjJ1W4Myk7Koa4V4cPHKL",
  "key10": "3RgLJYuJxVQuwuqFctBKprvgR5CtyymUAXVyGrYxcNNELPPwhyib7ixPah9d5xZ11HdxQS17sPXu7yCQwd1XTr2D",
  "key11": "p9zUwwWijYEcvUJLb9NQQCj6KwgzQntu1cDyVRoQgFPL16pZJd659xD3KTqcYZZWv3z6utV6invNf2QTuWGz3a7",
  "key12": "5vXQ7y1eEP2TYYsdZtb6up23eaDeUCv5Bwq9oTQZG3vxSq5KsmD6raj3t78ZEUBiBZ15yVcSV76wH4vrvx4roxqF",
  "key13": "3hKbtvqd4S4KiWyG45oDeKMhAaa5NjeShgDnFwMobPT2Qu8pYMJSTy5YLBA481DSbKjV7nvBmvyVmegZBcAxevv8",
  "key14": "2kw11DjG2cywVbeQGZLS1Dvo8k3tD98yPUbd4tCjiHz1dCNwmqKzHpdi4LLJscAJyCVb2oR8feUqZKtUk6KAu624",
  "key15": "2NB6imLWJD8FLyNmqb4qEqqYm3rsruVZkdcJfEprceP7MRhR7CpnsCuN6Mz4uUPfwMt1Z95UBD8kPPLhcvJBPh5H",
  "key16": "64mYvaf9oA6FeBG1xfaf5fsMqt3pGHGQj9Xt5jT8gHwmSiDiwpyMLMPSktto9dgZ5R6jHj3qL3fMWznWCGjcJNPD",
  "key17": "bQrimyKEMJa5YsebC3r4LXfqSQLfGdMtsTZSc9YnrVF2bg53gLiddWoaaQYLc14Nonq5byVkULeEcxFMobztbXj",
  "key18": "57qpKmyTmN1BDtg4QFXpGeXF4SUCnpdEc89TjBW6D87P2RkEegmas8FKsUEsbBfpwF1AeYGXFUtdwrDCp6JUNJm3",
  "key19": "2EMtEXesKycaqYjkJTG8BepNCndGKTYMKWbHX3DnuG1VhuYq4LKsx3iDvot6wZ85ExSDRXakcEW9cN7nnC3nys1D",
  "key20": "67MRerWyHLU57s9xpUMtnng4ojMmhXbYzT7tjTf5AVSzQVgkKmDunQByrVB1kwJB8WPLvCveHAgLNy7ckusdu1zA",
  "key21": "4U83Fs5DDFSMbNC5fqYayiJgdTTY9e2t8unJ9E2FUSpDtsQTVCeTc3NfoPTGcEnFWCx1dDDa4ep1NRVkuWuRYWGr",
  "key22": "WDB2shhdrtqevKcHx2ny2Umf3NfqFeyRrkLBvW8z7uTWyPhyYHv4SJJx3dCbuYYnKYMM4CURRNw6u3GhvkG3cEo",
  "key23": "2M5onjmSTfr591jRkoP4QAWTi7tWW8wBXvMZHNsdXMSSxbMajCtHq529VHj9HoFD9HZe8ETiwRNqAgxPTEzBLeFS",
  "key24": "4bEFHaiPXAYVhPhTZ79KotcCLUGjVNzS7mvZSf9iMgvnciGF4cZyFbBdL1HJh8EJPz6VtkQ57jXvq5UH11izUPga",
  "key25": "5BRZmtWbDnqbgjGYyfJ2XCXUet9YjRL4HrwZnGJszJTUjnyreiCVwsh8y5bhXTpEKSbAAzFFqt6XferDngpAXRpo",
  "key26": "orPP3EytH8GMRQ5SjRy5qjPmEBkG1BwDo7g4cmCknkx4ptZbvh1X2KNwpUKCNjpGaB1MJwFkZ7wBAKNcz9usEn8",
  "key27": "2TnnBPVYuLFhtNJYW2Hhb2cbGWwxFi5C8Ng1sWXJjgoyTSFa4jnQVHpCKVUQ8iZzPXYbbNGioQbjDjqEyKw48iqv",
  "key28": "EFMB9LXRsgqy3D9aDBp7dE1LrAoJ6iG6ufNPUW1NCT9zFDP4NCmJq2W6UcNQHpsP5SNtbJvG3a8QkcLMH8M41EX",
  "key29": "26hzk3dNw6tiABVDdQo46jMp32znA6QmK1bJkAR6gsGmJPjakaHg1wsk4aQQyvrJBLkpSz5V1qKDkTVrNUMvy8dR",
  "key30": "towcWvR7JvdLv9ukLXkbPF8vmTsSUbpU3BUkj9hR7rtKvi3wE7DsM978dBgXLsEyeRoAgKvAi8T4WBZ1heFzZwf",
  "key31": "2NBta57hzKKw5CU5NfD4sDiHjScGN1ZVfBGXGQuRWCuD2U2zLAkDpkSHRD5RAhj93oaAiaYGePuM9q94FaF9EVAF",
  "key32": "3vD2Wd1QXffZBkrkVFSPU2WQRJP6yWtNfym2ErH8uKEfLryc6bZdhV2yKnQgMmyKK9ThyUUnhQb9EVKRYGF6tFeh",
  "key33": "5ufR6YEfRPAMXoNPYC8d5LJnMUca7nKYjkkm94gv9nospvnZMifTj5j9ne8p8USEAm9esbxp5H8zS3mtdLPKHgHs",
  "key34": "2PebRnAKj4LfRJybJsVeveWDA8dATeFH23ZqxVph1JxKNdbqsTjEpud4FanM3ReuvyTkW1x6jHA2WHyoiDLaMkLh",
  "key35": "5eb2CxWx3qAS9KNnDqnAD6CVcTzXoMfxDhfY6oi1aDRKJi5kK1Ai8Web3mLmryrwrS2wQL6LoZVyym8XXjXNBVNu",
  "key36": "3JrbdQ5AJhPDVKhamGGxGPfZiapBNizTqjWC8BpgBPoUXspEczU5oMnuu3N5a15LGeyAUifv2E67j2xeDQQAbaMv",
  "key37": "4nT7Niyo2rsz4HZ4AR32HiH6iq3N2nrGRhV278te1EAcwuQ5qCss4J48G5w1o3kQNcu8wdncEYCPGFCJfoXtTtdn"
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
