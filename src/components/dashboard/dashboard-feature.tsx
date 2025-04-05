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
    "Ce1buHMiTYnqRTdGAeLjvMXRubF4vSNEjaC5pjqyRUVYCQER8uJarTPvY622yQ6DVbnfTGvQFDtfxhJZDfmzvMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hmQNuVvnWrACjQfh788iACc2M2JGZ3A2iF9zMjVqJfLxQ8MwRzesVBaPWby2aLQKBKmie2VoSF6svKWcvPAcRQK",
  "key1": "2BYcTktNoGRjknwaK2QgqGWcBxYA96J1cq8Hwxj2J6mqbaPYz6CvNDNE4mYyfXao6SPH9qiDzWxAwQFvS2YmN9F3",
  "key2": "c1EcuiEPnuyonAJix6ACS5PhXjcGj9gKPVsf7q36FGRPcs4twUy2GJpYqZ1bw7wxHuGUP6wJw7kg3qftQMTsSpx",
  "key3": "4qo6DKVBvfYLMX6f7pXsH2YpRJzdvuSNrzPMFBSUJ74dCLPaKtpHYRvCrpxD11ozMcnbrgyFi5JsvDfUiFFcMDqU",
  "key4": "5axC89X2tS4fi7PNtNmH8cZWKST8rFfbAqutVJhM9wDJ1jmsxbKpFNE1WBuN5vPuQo6AGnEiyieoQPr3rDAAu6ig",
  "key5": "4AFx41LfX7xr6RGRce5qU9hsrogoagqVxndPBEdMBe9CRRYY95TK79wm7Z1A12qvuUiN5CWxFqVaMsbMNiyaUGZN",
  "key6": "Qth4cgnpUW6zLG97JfvGq3UAxAuxLh55HzdjGWoxjY3tiecrTVQpTfYG7TJ3Vkcf1dCXQfGpsAF1iuCyDkJErXN",
  "key7": "V2mWWCokkn2C4JMyZzw5V2cDRSp7fkp8xZ2CAGTXyXXDcVEA9ABPu87QKYQXoiiXAKb7W639SPNfTJKHZ1sshkb",
  "key8": "3t7yck2BCpGevPS6VAsvsThymZRtCFLC8MBoYBccuXrAd6YSVQsQcGG8YvjNZjadkifRKAHqTbiXrr757FhnGwyx",
  "key9": "kHAfXmQcNwracZ5SQh6xk6ZewuB8khaZG8bcu383RpZBJjbJLwQAkG4JCA7srTF7KSZ9rWSPKSdJwnrQmWbLHNv",
  "key10": "5eGZyGkwn4d52fnA3KhdTHTJFa4tNi1wGd6zrLaQCHYrWFsBDyMAjyLcnKCfqbYVKXgbQUHvUAf3rJJ5npHBa1A6",
  "key11": "5RAEhX7vz8yoAcAFNwHVAKxi9xUhEfPYyMDbk461PpTMvHLFDnYzxVcmrVRdc46AMWhPA7DbqtSdSZcB9nQLCB9T",
  "key12": "3xrFMAPy2AvKaKQKYMQjoXbHn2JjuTbRbtCsUa6FQzpKZPDdYfUat249zcDZx4uw73tW4sV59f7Z8CbWMZw1jKVL",
  "key13": "w2o3xQvAfRRP6FEULMWr4EJ5uLxvw2BnwhDGZ9ZUJ68hn18aAnscKd4ktxrS2UFsYNdfpEHma4BhgeMDYgwbiir",
  "key14": "48uW6JMb1iZ4K8vpgLRXZ4eeXz2DcxD4Ds6BRiVA1mywf9Qfv5HWfpsu2pWb3dirD66UXa3vongtgbpca1ELzD4k",
  "key15": "3AGNcfJNxtuDQsP36ApBPU7pPWFhJxQ5DjpauM9FktCs3RqbJXYeYsciNXtLg4ZRRfJMFm9axbMCXnXnGAzTg9r8",
  "key16": "4RbbiTxPwJHtUMtegc8nYbfAo8ZTFM6AVnUrddMKejRvnzdr6QzNeMjRTPkreSY2KZefFA2fyaUNefb51amuc87K",
  "key17": "4fDpLKYP9Cmon5ebm8yFe7ntdP1dQyAmvfJw3N1yPTEEpyJwbGeTPUMjGCUX6P3RDBfPayBomq5MH5yqrNLXmkD5",
  "key18": "281Qst2p2zKBbU8xBZz566G2VUfYvNmT4vPpG5ysWBaUiwdeNQ6hPcdsQaY2H4k7gcZeDWeJLmaGVmwQ5UEEzEhp",
  "key19": "jy3vABL6ZytAwg6NdTWPF1kyLAH5XcUp5yyJjroXJ3kNrVuBDAVtnqVS7ZeCRSG5DvaMqWNrogJQPAKMckT56KF",
  "key20": "3TnJo6X9huGSYK5tJ8A5BHu4JoFsKB8dbAg9q722uF65V3o7kyuGfxTPQGzryv9zzQQNGnim57J39dJfAPuy3NNv",
  "key21": "35hog832NfBpR29Go8hxPsgUzL5xJyAzxEV8BtjeM1H8oPuMYGVUKcUCnZhLJg5ZfDvJRpt9fAGZzQwiiLasXscc",
  "key22": "3hjGQFXDp5ntiBZ9GaLZbLqkQEWdpU7kPwsrhuGpRMkzGErfHKXp7dYTuYMbE1v166SW7M5VztWudMGYL7B4x9Pz",
  "key23": "aNJwmtAivxMnXrQRc6e6EQEtVWnmh8kNbkLXNRXnu6F787eESz8iC7Hdb8xnPV27R5rEK5Sw9w3bgjsBLyDQVkT",
  "key24": "2gHenDyAHEyY3nVMtb8VaJAzi3goZAmFhaSQeuEnya9WXRwXdxKkdqebhj6AK9JRFF5ASrrd7N5VAWayucYrRwaz",
  "key25": "2No6ijjP2sjz4P3TCBZXtDBZ7MWXpVS32iNxvZzrVQ8f6D1P7R36bwuSSoK5s1WmptniPnWyUjnfNrMtCdLHzKWp",
  "key26": "MCeWgjeockckPdBekgXGcAhU8HPGsP5G9XFAUW2UFbKBXqeoycB2gK4eTuq9Eb22NHuPr6EbMwBwDSQ2kNRVpik",
  "key27": "pMrGef4tdRzchVTwgPmGHvMbsaada5JshgWA2mkZSZyb7SEdEjYhNLuC22wdhd7QpQMoikL9pq7RytLe4h16X5G",
  "key28": "BdPLyi3uog8Vucm2rRJyFhfPP5seHhe7hrDqBKh2rYH3jAEyDu266Dhu91kyi1vfdMhH3Die8CYu4W7aRVg9BZW",
  "key29": "dEGPiw7oK36hfRUNkZrWRe2zdDDBUGJxcwBkRWcMWAaKmD6YF8UA7L2AjTbmXGmqCDrmr4bzv5kZiL2FL5CjvKx",
  "key30": "25zqyERwhFh6H6nr7JbEX5SYk5TsCYuVf2j5b6Y5GZtPcwVwFc2JdC927Z9UCAqGKLZsHtbeurKA8FTPciDNp9dK",
  "key31": "64PSheCwY9ZStun52vnkJFVgYSeZfSDoSyL7LxHKqNEMCEqbmehwDJfyCuD9L1JXARU5bStB16iZKsZQti4VRkvW",
  "key32": "5B72PMmSXfFaCke2EVyzfyw6b3MH2RosiE5w1aEsq1RgPdewhfGKtRAe7PAh1UN7d9zPnYwhLtrS84doXxCBkshu",
  "key33": "4iXHL2UFV5WQyzt4wcaKK8LLHEvJKENwtqwtnw3wSaZ9ZDVYBsRVEEhcVUHkGpgv1NtSVSNat5txBkrc7G1fgMsv",
  "key34": "4mmnGHjpPyPd4W2kLLhA3sAUCG5TbEnCTEsPwxpXPGyor3WwbsUafGETr1uiwF39XMfEKEkhENFnUgxBaoaTpSS8",
  "key35": "5KEy1ZDJZy9i8wKJNDcWKGAQ8bSeo9VCCxiD2wrABtm1dgVVkcVqM79jZbCrZAfdqRZaveRae7VYrMWupj3XMQvS",
  "key36": "fEYWbVAvddDwdweJiSkvhnM2yfiFutVNRvENW67T1Uhd4qLkAvnV124rQ9g9hVw8LynDEZzGQi87K8LS99sHysX",
  "key37": "65uv9v4fgHwoo8wqZxVgMBcsVQZvZHshiGc8EWCorjkq6SNtB4ZNcEKjNH8wsqXC1AyMQvsk3DFNtk8FbzkHjPBJ",
  "key38": "5DahLhDU94yncKvHAcAT2HEkrTphg7ojN4zRXVkFx9CE7pjRk8K7VbpuEFVvTRa5BGtQhCcHQMcTi6j4cnKS5mLS",
  "key39": "3eWTjRHBhqefTUwdoVKavbJ6LDVDttxXuB5bvqhvT3EEQZ1rRvCj8S7mP9Kn6udhFsdYNYBF99YbeGnx4Xm3ArPw",
  "key40": "5sRW15PUNiaAPVsspE64CYh9BNYSYo7ytgTQcGzas3mmnod3Zq3owSyshxB3KCQajHzcJE88DnJV5tsMyDrCEqsH"
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
