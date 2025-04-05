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
    "Lq5NbaBRG9sCqNobWm9Mj9i9hk1YLddvcHVBQGehS8PAAvyNHYEWZSd2Pux7TKdvMSww1jqq8SnRJzMwK749zA6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wpvEshuoXPTTJtBe4YFKntTAyyqhjsJHV7muwyjBogxqmrbnXzzE7AkLUhW5ruoV3NqH9qu4hQehfPG1owo5TDi",
  "key1": "oj76axPg2ZrLf6ZNpZcSKgRbrioToh1ANbDfXKuW9LJZDFtHLpzGPYfu4afYUb3EwCvBscNCefRcLk1xBTvgSv1",
  "key2": "2Xf8W5dAxNuaTgKmSRTgTQqyT5ki1MuogH2iHn1mXvWyofMGynuCF12TLWsPavSdtZLVXVqCJogJeLA6sbax2jLi",
  "key3": "42xiRgCqSibwyVzwi8MmtGc5SK9UTDDfogFZuZBivgPcEcH4Gzs44crhy2d64BKAVyeuKnkExPLJN6xveLVrdVP7",
  "key4": "46TvdQDk57N3FzJMW2JcYN7Qd5T475EFmPMAe4fSaqiWbbyTrEkaUDFn9fN9bAB3Fzwm9D8tqynhuNHAGCNQpmLc",
  "key5": "HR5Bd4XJAdFDcmHtXGwvQirEM6b6qHqHQodEvaXCVZRFGW3npghuoCLLPFtKXwqveRJkQTCVecdSw2hppsiAoEn",
  "key6": "67kFw5S7xfnXMZ1XHDRowQ4uTENuCAAFwPfqMpyG2xHw6rWVwv9wHKZuhVcaT29GfpqM3phBmaknhv6dBS43ihXs",
  "key7": "2UB1aRewrWLcDTAfGZHPAVq1SSB6byjuY9EsSJGA2RhgbX4PZy3bQvbQTLMo5N8iv4AHQRZ6rkWxUBNE8mwZhuq5",
  "key8": "4H7mPyz9s9YSUBjALfkuUFvc7L4UBWN7SNNmq4t2tbXqzVyY4huyiqnwi1rhNkPicSnkzrZCL9xLLsg2mNhCiZYu",
  "key9": "2FL5UnSMKenkahX26hvRNAztBrVDSYK7uyp8nMXbgWyRuPr532oWeuxbfwUcNUDBz4xW9kHygWKc4qgsnT4wqHw5",
  "key10": "4ubdwYQHKfmkruqSPxds7jJ9LTZCEUy7Rky7kUHCGwaTXzhVsKr7XY19hwdbXBRVmoFkjm8buzYPRjik8Q93k3eu",
  "key11": "5UwQsiNscYKsydBUtDSoVw8pTASZYiRxNhEABiZ13UPEKJNjy3js7e3HQkKEZRtbZQTZeVYsqRD8xdANSxR8scmV",
  "key12": "4LkXhrVNSDmAME24x729Q3fCsFvS51nXGQmtKcTxF55UgGdcCXB54hVdXpx4zyW92WGpSsScsKtvW4Hqu7xtDYp1",
  "key13": "38MZJ29p4QzGQbow128bgSm6DCcfn7sEzY3r8qvCc4vCSSGd8tFJnATruddCn3FzqfvCWNriJaae6Fc9RsPsowZo",
  "key14": "5P8KRpwsx4ctFMER2ZG8RHvWJ7fdKmf3ZZ7cQVT7ivCEuAGzu6G3fLUKPGaJ3vE1ywqH8mu41gmhn9mdjCAq8JBx",
  "key15": "2xieaKVjCsgoihJVr4Kae3NXs3cwABpRzhf6tvaKWswRKstaeQc8hFq59BURvUv4PvBzU8UGTvwg17PNRrHXAZE3",
  "key16": "45nFmYaKVE3MudKVxnAVn7TniACzadTza2dR17qZfj9pu8j1HjWaqjTwEUguDqefVRqwTPeXS2ZkkZRLeVj1sxxr",
  "key17": "4zhm5dqdCD9me7VgA5DFCqs2Wydx5M3GCtSdxSSNTRfUpm3NaomMTqLze6xze5PtYBZJhHGPygnzhmrjUD96Tae8",
  "key18": "4174d5TUyrDiV8EVrUYnTD8he76nuxPDmFyqdjJsXTVoShe49U6kt7N9ef7bR55FiKhLKYE39ZxTbMcqgH6pshrj",
  "key19": "3M34yaB65CzANoiPz9A98MyDKyPjdHjm64ovcjruKJbij1nRdFDaySw31qxskTBVVF82AdqkAymhmTB8kFcoeb3n",
  "key20": "3yc9x3kteGXzP8eqSAThrZNVZ3rh7uXq8q7g249vNDgLdavhpwWawD1JwPyX1uK433kse6MyiZqMapHzdkw9VJQB",
  "key21": "5qgQfpbUd94Cv4RJzJJaRoxL3zCX78SzWRU3dDPz2b62GdrsCrE3hgjvtQKefgyyzjn3LUyjQ7gfVU58WARJNh7M",
  "key22": "5aLRPmpjxzLT8LQkihDPJiSwxxt4jUJKwiXs4axds1QuYi11arZXQgVrohB6a2Ca2amq61PcizseTrGgFqFAGYyZ",
  "key23": "2cSsXdtKZuK8mCZ5sYkGSyzBqDAWPt25QkiDq5TBQHSvTRSNWzz831Kjj4F6n4NxZvjZAiFmDUwr67mJikTzPBns",
  "key24": "3dWwk37xoHYfgwG3q68uyLJ1p92tUmvegdVQcpNZe4NFp5n8LeFuBLhbPH5mPek6wc4B2gtC3e2QcHVYHCC9imwH",
  "key25": "5HzGpp4VnjVEKV1gdrpHURwE6uTRN1kUUNVNgiFJ4YANEg5LV2k2e9rBHkhQSfYV7hn69vVsAQ2TkG8oTTaQxByp",
  "key26": "5YvP5yU6ZRBG1v32E6B2qQjdkJRe2BaEw58xqftLKm5cRXrfSRn4T2G8aPboZSE95FSahkab3S8jX7ubNQrLwhbF",
  "key27": "2BvvqbPBCM2eSDVN3b9MauWuMw8a14RDtMgVM5DUC6WzCZRXh6HL7izjFbosMWPreDuULVQwaqNyFSWFj4Pj7cBH",
  "key28": "UC1tCEppadSj3chzutJudj6ZqP1MqazfLFjea51eqEKcveSTrcuawumqG2NMqJbV8dnCndAxXn79py2Dh8PQsbp",
  "key29": "4uNWNUGBy91323iBRBEW6vLg7uvGikNmA23NxbFqyxRrDDwwaKdAdwjWL3ta9S51uwcSsrZZWQLfhjZ17GijV9v3"
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
