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
    "2j98skoN2V51uahKv53eGcD7B5CVm9mz5W4TP18oeWdfTbo37t1u7kXie4FQ1teA8EkjjKGgJrTPdst8fmMYRAJk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VwgicQMdNyqVHdfVn2u2beSzGD7VH134ub3UAdQ5Fep7eT9tfZCc1CNzp8SiqYtP1eZs78nrxywh1SRiuhMCYf7",
  "key1": "4WAkK6ZnjjTjdWHrGL1924SDApWdAxcPifVKgRUKgHpSJCCkPuS3bKwLxw2msijh2fndCpgPcnwr8aaEGjC46tKa",
  "key2": "4EGhvYkA8G5C1FVU4M1nC2hS7aQngqnLRtLPS2aEWNacPmcJWThqo41yVxQE4Xz6rbbckfiDLYrbS62SDTnumSWo",
  "key3": "KyuJHroZwh3eGYhfGWwS1T6NRgiNMDPGNpYrNM6MBEjof8DUrSjmm8DgV66zusk2or7jPis72vPu2JZ7m8eyv5S",
  "key4": "43uSZxDAbYziLPy6TSC9nNAWLrr6FASfn99eteFemYNzoRCd6s11Lajjaw8uTs4uamEX3xKPknTb6hYvip8pywKf",
  "key5": "64xRzbs29MiPQvFW2TjVexLUJfV9TJfFUTZCQVKFJNr4hgxh773ZEKKTANi2WB2eon491WMqz4iqdNrKMzJua9qb",
  "key6": "3inr9fStoDm81rQeVobatCMftkD8z79Cs1JBbpLxXeCb5y3A6tht9p57vtMGh1KBRUF6uXfvxteVbTrrj6iyMEsy",
  "key7": "5hpuVZoAPHsafu7Lj97xCqQ94xKVSwr53b5wCdXbnBM91GZobuBNoqaBUtRtujMUGMmmTzqpZe22tNShqgsaE5p2",
  "key8": "4KXK4gw4TRSnHPjzjdXBPmQg2HYvFPjCRDWmeHTos613WwJEazmgpaohyP67Av6iKEnXmfw94HBjQUKVrx8988ZY",
  "key9": "3rFDcte6riTYkQsALbieTnfDMjzmqJVEHSKpfoARCzYxfGMQgEaXTsCH9jRVu9xQ485j3E71xT28aWytguF9daNn",
  "key10": "5Ww4bfRvisPKg59nGEP4PH7VqfcGRRYoyTEyHRN9A8HnHX3ecFYkawaKLzeRtSoLpPmMiUBR8KgjksaDTfNnHQMP",
  "key11": "5KgR7qgUf1uHV2xWpbgtHitpKFNKP2CVddn31Lr46bRnTp7stZUYkrdS87UKTKkEesZ8dTN3QRYcPfSTfSTitFFi",
  "key12": "phLJKp9QLqZu53wN85EHGfpkGNDtcccsZnimg2aPVurpuVkNyuXqLXuKtabZTo51CoHzhwsW8DrVgDvtvcLfQ98",
  "key13": "2UMJtot2QEJZfKbdKcXEq88vfJ7ShMvvNzVbrZubfAbdDaCGZpQwfeEoHfaduBpPtK1gHaupv7hpmChCkbChok95",
  "key14": "3SgPvUjc6H1pg3EU8JAPH1oCuAkj8dUU8GTPbe4S4e5Zha7d1HhSc8sCNbobxFdhoWE8eSE3M9WXDwPS8TAVhtSx",
  "key15": "nzkaBpUv6Jv4mYRArSRxhidypihUkaaHWimhsWvpCAMV9hQNciQTvAmBSTf33PHytYUoyv5YXGL6FdA9QdMu9Ci",
  "key16": "2yecTb84p72N5V11wzcqi8HvCsVENnmaLNftK7ur5srEA6YLhfQ7WwC72omrWdka6R6ALvzDT2PGNbceVvFpQkZ4",
  "key17": "3s18XxAob7NmDKcadsdD5W3EAdUbbEsWh1Y8Y4CR8UnNDmJ4B5YVHz46EkG8CC9XvmWUn7crHUsBWQzGYcfrZcwz",
  "key18": "43GqJULA89ekuZFKuc4DUVDUvymCZY3g99Mfg1rSgk63s6po1qxatxKKKs3i2yjdN68U8PpHXskGfNgd7LYufVC7",
  "key19": "488j2MFBSiLgDUyUe9YsLRnhsUeKmhvx35CeVjna497X8pzQAtyKCuEg6trha7T3cBYVYgAmJeM6UskcrLxwWsUn",
  "key20": "529G8RgYuHoD14fYpAFpf7tThRaiN3tGeBHewfHhNa4zFCfeS3Ugfo1D9GcdouCUwE4XyAcXWTYqPs3Zi7gumDKf",
  "key21": "H322yn1VYK88NZHtfmmrSmfofJBgQxcKBhnpC5mWFY87XXz5bMxWLMcQ1pfapRB2NZREaUxd9CFugwp7eidfojf",
  "key22": "nh8r7hRUfoAavv555cKKb9oG9soHVrfjAPHoykhM2fRiYvNgph4MGMi37mTmdbjDq4TS8uyQKM8JfoQhCtT66TZ",
  "key23": "LsBRk5VXK93yAUFtzT4LmjqV8PHCuJndjoRBn2PS9bap3j9uWAA798huTmwt2GvrWXJWwAw4s7hVqhGJrykzjQf",
  "key24": "3WCwWpG6uXzPrDSfAF7JKQwtDbUox57QcuX2ZEnQnVjoQEsAshLCP442anPjJvG3XxAkwH7ZSkwEnhVFi6mJcJNB",
  "key25": "eUhGTfVVvTLBxJEUXJaNb62FvZh3FJz41T83rnGa2qET7FqNu6ihQm6uytuLc67mAjgzorS3fA37UnZhzc2SLGS",
  "key26": "2njJERyBRYbB1pH1kNUR2ACcLN8eZ7LanSmoKv98VXQGoy9LrnPMBv7cbhemBDyFkCqUdzmKvawCZj7DUWUux5Jc",
  "key27": "2PU6VJPngjoHFNnuYirkkBA6q2qNftaQZd7uAkXdLxpxr11EYPmQdFoXTuj7QEcesXfwcvWaogdrWbM98iw2XZVm",
  "key28": "5VQLJmrGsjkFiJ1cv5NRy8SWadfHzS9MSWvkw5mNEYgdFoXvKqQji33DH4C8iZiLGq9azGhqM9zKKyvNNGHqytmn",
  "key29": "2ypGtYaRu2jcnrHpJ5FTgnHKyBdPTnfPSE9iLhPMJarPtJe75PMdd3GpS2wihGGdGLFG7pzwcSN86K5w3cbK5d5w",
  "key30": "4uKeNNS7sD6gXNDmCkcKE8PndWrwXqxj1qghjuvPCXKmV6r3GZVQpByCLwNBNAyfW4KXQLVGuLTy2c8LYaGsMomk"
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
