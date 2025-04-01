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
    "S6NqLYqE3LN241zx2L5XjjjNxuVnuoNwBTbuCK1zyQXtDUPYLDxVhMpAGtYtPkCf4NjEKEtbfbvN69h81jQrFpD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28WgDX2F1pwqnuu7tKkUfWgUNSKwebW9PqZQWxoddVqMQwJYuyvGcRXwYfLFK42tje3ZePxdWX16gSc1wE3ktD6w",
  "key1": "wfQAQ2uJNJmrTPL7kn6NXfxNLbLdW2baVwygwmD3gERFo2givBgcpawPx8FMAAf6vaRrPmc8bXDT1FDMaN8Kbbv",
  "key2": "3Nk7zSSPiRCtgjQLooFWSUwKMLBvBvZbZuhrKnhpmjYXYNrJLLf5nSa6m7AuSVZbgLn5T6t8M9w1x8SEfCFBBuBr",
  "key3": "2pg4Hta3anmXbeGfaow8TiLtSmh52bSYdYHdsf3TJZ2giAWQGgux4CFkx2dexJEWBw12iRAxBKxG8QiWznXMum9k",
  "key4": "4HpawvXhL8M4d7pzvTWQvk1Ui1w2xpkeVk8t9hNi22LhSU2ZyXVZDjU11yFdryQeJZhzg3Siwi6pR6jr5bmUp9Zv",
  "key5": "3VFJP7ouY21iPHqepeAKMobwhnUHXW2K3E1hZqoziWMBFJjuKefhLgPiyR5fmjMwsbxZHJx8WWS4XmCyEm2dqpgF",
  "key6": "3e4kKtKbAeLLcWW6SJAKsVcjuxfNQjjxgqhFUeo9GYgeQjNSkK3ZFgEcasVdb8PbrnXGUTBKBtYeBSNJoPsThcDF",
  "key7": "45SAjM2ZPrBeLwXDjW2bsshxngeb4AGBkpuR6rjqKj15Uf5mLNCTwNhTtG7pfsyr2J1jD5wAFpEPczdxopArgA4N",
  "key8": "3wDBeVNH2UQ4g3EamdKDrR4KoJXi7zGYwgHH7FhCT9cUgR9pXjv4ZL4QDixhBfjQzTka23FTCv9QZPHwo58nGJ5e",
  "key9": "4q1gEs2syymYX9AHdv7ba39UbAbRc2dnWBzhbsYMZSdQTnxL8bFXy3na14YapfjakFJpvZFCH3noKng4cn71PXw8",
  "key10": "2ZSq61M7mNvtk8VtP7TBrP9utGAcDgmxDzTRy2AZHdFS1N75Ykdt2encgocJ8VmEezeKj2VQC3SCDTcLzkAs6EgQ",
  "key11": "4hPeAQYkCMAd2WeuzSmJWVm2aGLGTbzFV6f7HTXvKPpSTHcaq9ovuAJ9Wo6QE6afh7L31aCpTezKKFUWnjUro4D",
  "key12": "Z5pmciT6s629uJW3yaPdTqtNmc2CU2xpCRXaJGx5h4piPix1o8NTfgLH3VV6MxtK3zkforgsoRFx578At5uxPHk",
  "key13": "317eon13X6rdMvGFsetAc8anoziVvqZ4HbMrDNbgrAVTsjUtnsZtFMGxwrtZyswNnpmZNcjmf6w3bub8NnjfNHwy",
  "key14": "cStmDHo4Xz5J6FV9cyqNaSWDaWov3FXd2fFUudqvGddfVXLBRAamh9g5WHDyWcWLyTKp7NfaUejtFvRR2MK5AFL",
  "key15": "66S7YqiPpH5oWgCiiE1Wur9MEH7bdXyko5gLqXQwQgN4VkmYaUijcADH6oR2SjMiW8KZuTWC4BQNXb4GDSuJk1GC",
  "key16": "2Vt8Sb2Hnq65oSG9yHAnX1JDFk7isfjQam2JLaMWuzHpkr53DZTZ5bs5rdwNCctMNvCv8Ph7cNnTUqgL4LREcKAj",
  "key17": "KYbofbpA3ygThk4QaD2AjyLAoRaQZnJrkpAKktdp5bTyvBPfm1E1NnM5Pq2wbALYjXGkgaExciJK61hq1Si2tT6",
  "key18": "5QpgTCn7JU8WxAKKjC3U5ZJxNpj5xQoNfG8GTvAkW3AenUnjKXJeG5bwEquibcePjV9weAdg2vjwY89ZSmZqYZb5",
  "key19": "4rhirrxZikSc3fLAZQvpLfNkuFQgsAbGxrTThyWGBdaNYB8Rcngz3vXJ1skDmjDsanTxcynkRNjUraBYci9rjWNV",
  "key20": "3xCT9sHxUP37RKDhhhWuNUo4YnxtvAwDiMPoxaJnD6H9MCRjdo5RsDZtbxdAvMkzPE5LwVx8R5yBfq6t7o7kuVqV",
  "key21": "44QnHcZGXDKZV1o9UXTAijndDCigM8ZCA9y4s5RfYApkopU3UEfcTKDH6tMrrCRGb5SuoePP6nCzq22AaC5WCH6f",
  "key22": "2hxQF5DahgJchsTkQqigtyjuU4V5r6VevFoD5h7NhLCgWVZPMzfib3S358YPNGQ6e2A45i4pSTsX9xtiNpcb8c7S",
  "key23": "K46p3RPqdKTdPGEzZYnumtc44CK6pCCMk4PUzMWNPo45wsw3y4uXeg5QsisZyhvVft6UVNL8LNmFeLBNrMh5b5L",
  "key24": "4SDXjT3Q7LXuKgxiFgUYfycPXtKcxmURduHQsFpH5DeHgKvk7HYtK32VN2kPF2M38x9znLKWbERTY8xdrCYANo2C",
  "key25": "5WTPrktvuTgVYcd9EtjwhoTMU6h966tgbiPV9bgva5D5Aq4EQKgprxCqumJ4BHHTNTtskwjUcNhYfzZgatvjcvws",
  "key26": "3trwSHYuN2BnGmGqDhgsuCiiYvd9P7G1Ph8Q7N2TnZ6XoXbZCquZ6api7iwFEMLEMxypsZvTy4X7U3oJrrXnVpvr",
  "key27": "4KybDN9fkEUR5ffdEqRXhEhK1rhyFCWNAi4hGJ8SvaWn2rfkU4t4cxR6m4pA9XUujGLzHLKYq6ZSLoEZmmYJzgMk",
  "key28": "3rvs24hzqLoEuAvixh8BF5oMoBiToU2Pgywww62fnQ1Jhr77dBHh3nSZvg44YEcEtnqKwuFCnVhEQp3SQbjUhpqP",
  "key29": "5By3Y1XvXNPGJJMnzV6BzDaqyxCX1D7g81uSJegTUP6oqmSxaAUduT1dnqgWdoCVTD6cpZdL327KuwwT4xLBGZKz",
  "key30": "m7g1R8zUYMvvUrp4A1pWR4kmTCSjYQuT42bfcTKyG64KcdkfBDXDoi6EppxXBostivx4gG6xoQqvNvw6F1UyMWu",
  "key31": "4XWAdHHysvpc56Ri1Zmj3jJxpuMC5MNRovsk1hrqrfF8JZxoCb7jQH37TBSAMEqCCGgEAQ8igZEknepCEfNgLd4N",
  "key32": "4MrstiuzpvNr55opRRN3YDifs7m5NXuVD3teuLFeTAkHWZs6qLPnfuf9C6tR8yaCejGG9ERtRGLpmarHfAMKezVg",
  "key33": "PVLDuNqAzJJ2wSbo7ex2z8HYNkAhK4ia2Uet9gXK859jz9xzxJEAifgRRUExnX8svxWSpKAvz2TbvmEudFq8NNf",
  "key34": "xBLk4AyrkvqDFYeGidxbLvSSvA8AhBZWvxoc1GH26KTqF4KQydquqtRkQNCYiodGFiY7tKA9YakZKPvLSoCfCpq",
  "key35": "5xe2KoGzkMt8ZjAa6hAaWUJgpuLhWDhfoUUia4gRsLsBVS3M2NsHT4mHLtbUPG9kZtaFz2dnF6fAd53NJRpbP7bq",
  "key36": "3Z1cKsozaUCnVPPtW32aSFuTNAg8riWvKTXfHP3cbf1eJdDruMhfauMGNniVBLfVrpKP7FAtW8weRPwSWRzD2DSj",
  "key37": "5A1dv6RTmd3CTKY33nEVZMZDVuTeBFJHjCHvCxo1jiJKrzCWGH1L1JZneSZGLUaaR9oxXdW1KiBSGNQMDEwspcPW",
  "key38": "3LgHMuXQr8o2eqRYDr1dE94dAhysAJJGeWJksQ6JfJw81h4oxHqp3QebReAktGN4KRUcupchrp6uC6gs2vBvmgjw",
  "key39": "1NzQuLjBtNbFUL5Q9aFNMTPk89EXLxW4SWuWgQkBzvoLiR7LpidBmUDUPUCvsNLVhUQNazhbxMNEsJ6oFxDygZx",
  "key40": "QEPEztz8oKgPfFYFrnErodPguuPPXdfRNV9n2r1RQaguViBq8HiVXK5n59MMd6YTkGBJxep4ucBgFCkGAggrwDj",
  "key41": "hw1H1hcosjENVDmkPQzbVBzJMRqkdcvfsdmhWTTdDUFiPAZYHMfoYD3a1At3CJ3WuACL9EPG2mQciXcuzdNHsYT",
  "key42": "67G62kJhkzdabvbRV3fSQiDjHmRp6CLVnD1gWV9YSkMvetrBj3SZKiVcew8eYzmVYGkGW6YbjpyvZ8PP3iR1fqAD",
  "key43": "7d6cLUM6MiZNU29JKr61cMkYkeiq9euedjzorD7AhxFQ63XE6pHViwe9WJjhhj3deTitRovyYJGeSReLQDKQkiA"
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
