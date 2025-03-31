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
    "4Y2qWN9Zk34hdzFuWrQ6M6TfCs3cYfW51gTg2szMwmKNhGwNmFnC1Ug2jsvg5WkeyT4viSV3brQhbim7X6Gj8wnx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EWdsNXKX4jij76tu147LbM8K3t7kkvgCmSxvnQ5xnYbSHP2B3DMVVBGNPYWNJpx22UBrZquM1gmjgincVw4eEg6",
  "key1": "3WLvsLMKbCBf7szFtYRqCv7cEEGQdqD3VvTEE8udT4ABeeg1symFegNCcVXjd6x17hZ1gxFKutMVNT3uXCDFyRWV",
  "key2": "3Y3SYvEBhyCHVN3Eh2kxdMM87WjrJaWoeCgX3pjYq2adiJDsDqWiaiGGucuePbJi2RMcuAeWfjG8UZmKJkSkspDB",
  "key3": "28kGg6vp8Utu8TPTNm7m5SGh2tHoet71ApPENRpHkvPJ4HNeeFfDSKk99SCUZqH8avTvsr88AwKgSgHA9aArQo5K",
  "key4": "3dui5hp6d5WqzKE52LkjAMqaLjePL513v7nXGbqpQYdE4HQUWPNr1U86Ca5nVSZDeNMmG4ejzYXFZkbbnDhD4yeT",
  "key5": "2C35dsBfNMGUwSwmeQWg1p51dLmmHwZqx7wPqrszrsip6mqpnZ7zfqbSAeQqXa3TsduuXWjEBZsmah5Q5ByTJozs",
  "key6": "2Xfo85dBsrf9dSTS6j1TzBbJCCFLCVXhAL3ZZBGJDeoa8ozZnQRanqQFXnnUJi7TWRMbUrERjYn4ZdFe98kPfkx",
  "key7": "3yzDBzjMt8qbqxztb3SeSzne3sfi3gUkQfk5vCQLXwGYUBYfYguXSXXUBLHhZnsn7oQQUwozUc2SmrWrwmuWcHXm",
  "key8": "5U4PzgQ8s8Bgt9SPgUADAKBXwhByvU37qi1Cscmi7DKVYL8jECCfPr5WkBs68eHtXEei4wRZMBi2HNSgYZ9RaJyH",
  "key9": "H7T7jB3wmAgMRA6JKj7cuTGiF9eGqDWhkKLj3PhuyukR288RiC4Hb2e2vHfuB9SvAUjjEtTrqaEgnANJXGZdgHK",
  "key10": "5aG57HLSVJHQuwCdoMrX4HNyVE2SmYZg2KPUUcaN9cVDJcwP4BCLNaXyEr5dAV25iLqRi9b5spHnqefSUhaqzKiC",
  "key11": "2TBQw5qsbYjLUghEwjMrk9rni7Fw4rJhQ8qMbBZPBrm6PPiLHyg5aLDN9mgmTadgaJce1LqiHSUZuhD3uktUfp3T",
  "key12": "HLBUgeNVGkVAesBpn2TRGAiMTf1XyBRfQHWLLfCtjvwdcRChr4G9DgnPHMewd1t5nN97PPNw4eG4VYkCfgEqR6o",
  "key13": "5SnsZW9bCiET9WcLXRs3LG1uQhkqtZST9fdASpG1ebFcuxcL7h2MpHxqtGUg5epGKPgk8oqzwTkjC3vdBKA35pVX",
  "key14": "AwuE5ZnR6XgjnNrZE7ocTR32Fpk6jnS4BMxmNJhHABg2BfsHLcTZ8GMHWZjzSdryWvuGuqMWfC7GNt47pKUqpHX",
  "key15": "DgVGH4qv9J6hhb2VWNtQznQAGxpxEkoqvcM1eGiknoueZan1futZf2iQ3x7U9URJAWYytRT4MHr1K4NZrueVJLA",
  "key16": "64HA4mGTv7CwoR5kRp8N3WFv4WExcjRBatFmx1zot9zVAzjN3nf5hWTRZbFsPDpMRmqHTHEYm5QBxETQqkV46j2p",
  "key17": "5cAA1dJEQ68315headLYYgxj6g4Zn27kfsg8DcWGrvVWDoHpbsYFMAGYpSXyD5YVQ6Rp3gBREgqQ8XaBpSiDFybk",
  "key18": "34wnsa6mUV9g4sRcX4zAaM1ASMZgM8CxegLHrgq5VXgarcKiZThzkKD1CkFecP74TTLdcwfnSYqHZ8NA1cqBJBaS",
  "key19": "2QRoexmAAC4yzNV62YeaQerzCBAwLzisa3NogriyxQXyRpAJV62NptTxgVty9ppxxChBF7rEi6rt7ssiyYgyQYUU",
  "key20": "44LpPhiZBq7X6FDC1NCrnmnhuwaZNVSfJyAr9JxTzDpe7Ge9mpkLSnwtMUbMsZVUTmzPKAKtsrqC2JBnQ6YhTX32",
  "key21": "5AfpctNJF23YaW3kdJFeRyvBAkEzYZsh8s3A5xVYR7xWUNkHjmp8x6YZiVtMNRsWhZbnLHoexXob2iAfMA9jp9HA",
  "key22": "3kWxn6jcjZByojf7Cc9rD7YGiNYinqgXK54r6S1tFKJAEKc1eFeuzp6wLydqYsb9sxrZw8wnyhiMDgkHjjPZbKEZ",
  "key23": "4u9v3oDjra1MMaUzkCfvfD4bgUryyDpgEx1T2qcEUGwb9zBZpRmhApKWe71EBA55djqB7aKbWxfK6GezqFo7Szmy",
  "key24": "4Uubc2vguxhRNzqNWdmpg4HZNpA5z5eMWSrimhhfRUJKvHGugjRKTk1ViLXrC9Y52eWNNo8wexaBZRgfhnWBiANu",
  "key25": "4of84bsw9QWygBuTEXo4EhKgXrQvUWAVMFB3pbYqR1XvHukNhH2jqUNfm3NeBeKTsHPAnoQNgVRk7dH9itPFeUQP",
  "key26": "3zUD2eJ16DqmDbdbvDmMGs2tYewv3B9uxtqXr6A4HoNufNgNDqQSM8GQqwTRdF9MhxtqANWANjyFhqUgESP79yo8",
  "key27": "5vowtj5SryuaNzTwp1n5uMwP3CQ7Y97YZjuRcSmm12xzWQEozcHynYvqxEX77kAQAdxUPWuD9erbu9KZKWu7G4ND",
  "key28": "2rQaTeZ3qsR6rWKVxZpTvSvyJqGMA7eNb8m9RT1ULJ2V3DrJYfTLAbHiXTtMRGNH55DDxupBqeTAcR64HVhL3WeV",
  "key29": "2VzNqvf4YypLyeMU6N2dSmLwa4CcxDBHNyNXWf1gN97RjCsE7rTEn6pL2hn5wxrMeqC6Db3g1WAYMvSxVUdnwfoW",
  "key30": "37cdiizLbsjFQP3LaZVxUfcjPtGFFdWSyGVsHxQ38MWwNREes7wYAzGZmAoTgawaNhj7V917xSwm9eXjFY2KZca8",
  "key31": "4Q25N19qrRMPmXVFD192yx8fnUuTVSyXwdaHa323pXoWvuJUsUdhvgDkCob9rom8KhBvhuBprq8Dj4t71oehKoJs",
  "key32": "RPdYN1MbdX3Hr5FxCQirRVyoUVWkT94WDGHoNd5wAQiUnopTJf6BhTtuw3EBt61R3trPFUKPFAHAHa3HVuFmjK9",
  "key33": "3ceptNjYp8v6RHymV6xYVChx6s7k9kShzXQ9kcF6qMLTscgjrJ5f6GvjQpWfq4vcpdY7NqJBiwenPkAbo3W4Gwit",
  "key34": "5C4xfDUta8udqG2g5TYs8Gg2UgBidQTmfZpYymgZ38AiJbFFWE9NrqbnXRCUHNi93BcpZVqgz5gWhzXiFavVyxDU",
  "key35": "5zcxhrYXj7HAbJ2M7by6RW5ysfQaEdNgGaPyakKAcqpXPz4ASdE2PpD9HxYgUkiNxYMgk6DoCd9Db7ygjqUAQaPk",
  "key36": "2fqa2LNP8MJrpW9aZ8QnyRKQonvsMCBYHVcMxEMJNQGx4X87hdZWfTDMuTijTkZ9zENA4YmSxwi6oCNjo5JMERwT",
  "key37": "5jT1ErTKq58HSYSs9jpEqbFn1NiPG9SinHttwyTaVEiEZKds8GjdvKeEWTssuSr5DcZMkYUgUmSu28KSFfCEMtSh",
  "key38": "3fJFQKbUDjEFoysc2WiaJ15JdErUhxunKrZadXHA2RZ3M7weABVxPjoc7A7zhuyPL5T1Eg7XscZMiDbyNye5XvvZ",
  "key39": "3x5EDUYPdPiaC3T15aKYwr3qVd21pyVMFG9semQVm98kdNMqTb3pqFEbwyc9NVybTRVUuHJmxPFKQqPwC4vGtRzs",
  "key40": "2kJ5omwbqXDkbgHUVjhVS1fhGJbB8arbWwSkyjgYWHpfdQyznvqi5f6FYWCGfhj3EhoLQjzzeZtP59npf1je2pSq",
  "key41": "3HG4gSgT6mkZCb73GZJqhzRQYxaRaAaCPr7J28Zw1LkuB2GUXLQcy63m79CYWQGtrwmPqq2cp9AGf7TA8k5GTReX",
  "key42": "43XKZA4x7hNDR2oNv1vwtacWunt7fRDw84FvsSBHrA64U9eETCSLRBkgU2SsJk7rsGUTqgWhpcW5ouBcpyPD5tMb",
  "key43": "5qNcjSTNgqq2xpifippJyAsyCqjMAb3BJfirU89F1bDKUuBS5zjDJfRrbxt1NM8xzEjnSffpkpvsZcWgpWWcpcSi",
  "key44": "64MjcFSXBNsfgY4FXYatLLMrSr7cEJWkEs1Ks3R6LxPgJgYZbNY6Kc7jTrGCBmyZsaxL4WDJHiHiT73Fuc4x86WQ",
  "key45": "UdxREC28wRpFyFuL8q5HkLjS69SYpcNr3KZD1RQco9v7YJwefjUpG8pVPmT7szcuCYmG2nyco6A3bZfTgXfCc96",
  "key46": "5C5WLcrBw2sjGnZK3x1X8Xx8HbLLwgPngHC4nvUzUijhvHH53Phi5urRRaNwghb1uuw7fegZ8Sc24u5f9xuuwcYt",
  "key47": "47RqjbbVM2w1HY56MyiGETLADZQU6eegL9EhebYpzA3B5rY2BgCrs47AmVdBTMVhhmdXkLFrQuJHKNW95GsMKkC",
  "key48": "3duvd4FCb93Y44G58zcU7W7QYic9i9scq51VRGuKvYveztcL6TZnsEdzgEvsqZP2koYZB7wq1izYwapXZHoymS47"
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
