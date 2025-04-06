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
    "3RQLSeQdwq1iUVix9g3WCTBemdxHq99Wjh5RX7obuHSk6Q5aChmg9SXLXk3k1XJruuZ2i6NEKSbyw3fmLd5KHsv6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xLCqEjSsD8RpKs66pLUGbcjXSw7kTQJWgg2Uk8EXd2FsUG3dDV8QENS1TfSjKLWawtvqgD2sQ5uTSiTrRAGMJX2",
  "key1": "3Z3EbBfBgiBvd51uHtYogabu4W2mHtaiXW4Li2HcbmZFuMJm4c8xYeU8fuCKYpptsr38gsbswQjoqoirctqAoiHe",
  "key2": "2xyo99Kee1ZypJJnMoTyeE8au1ejHRxMifDtJsTn3eiQfNGv6PgHsEPUg9dLA85hcqLbqwJTvCPSeQfx1yTbD9xo",
  "key3": "GPUtV61PBg6mmnR7m1nRMQrz2WDWedToxyKqH1h7EoWLTVqBoHu4TXT7vrrQXgGUr9A1GPhSxp4AyLZedAYVQJd",
  "key4": "5JswHzcsGQftKFSRWuuvgknqyzRK3V89Jz4gchuBcaJjZUPcszU4mQC53oVpZDhP2eMCRVVSaKzxzmEFKDsjVnjr",
  "key5": "9NJ4cB5Yi4Ws3oG4tBTRoqMaU2c6V8Xtx4ac1qBQ6dy1VoYpuYPyLxRt5HszDPbbs1BLSAveL3yGNFmiHzjAfVJ",
  "key6": "5UdJm1VMGHo2bEbHdAjoXMGXrJzJxbBnS9hZd58mMHvZbfUxPdJjnih6ZyrEekXSiGzMNN485mwPWXHLXxKPhVp4",
  "key7": "5wZia8YSpeBjLTBL5WvQZPubbAoAckyWhgjVUr5niNYhNoRcdaQAoeThUQweH6F8EGXGRcEn3s52KzSBab2g4tac",
  "key8": "2sdh4swXKfHjUGmXcaQpvwsKsY69NGSNjY8dA2wxU5T6eNYSwRfd7uv2R3TsqyfdQAJbZt5Euk5ShzMRrrV84mwn",
  "key9": "t6Un6cBfEoQdhdbuxEx77x44e4vnQ4dKSBZ7ivCu2JTk2hBq8Yppg1Poj3xmZJRnvH3ciK5QfekPexyhMszKssj",
  "key10": "4qvVwzDr1VA675R3aZWeh5c8y115bX5xrGiRGeA2UrmzgMynEYWV6E6YJZSfQ8dJR1JFUXNWwyzun9NjUHZs5LYb",
  "key11": "54A1DVoeQY9qMyqaLZZenNPuFCvMJsUhyfWNnwCvMh7Xuej39AALicMEiXBpDy9JUh55MtXpUeWzW3Z4d5vKvoVT",
  "key12": "64rQ7d7GhNPPPR47t2yqsJ9xqcQ2RAoNGCjzX7YCWkngbPkdeqiGmhUej9NRrPvQdnzRRe8qGbaJxTz6UbpRt4F",
  "key13": "2csWUG6CZ8VWPXseiB2SYY8cWbsXUNvi1LB4AYh6sR6M6Z2VH5U8Nq5xMKsKw4pYpZ7Dm5V2BX3J6n5wx5mtTcmz",
  "key14": "56hGZV9UYJJQ73mEWPcVfLnX8ZQjH5MgTdqJuo3Cv5y6f4kFHfUJ2odV4NGqeFXQbKhiBF6BjMmtGtPRYKstJ4aB",
  "key15": "47g7nakRxy5AbBwGPJ4U93nDegyzGjGgo2asS8woNhmajst4SaVggM8gxEnA1L14ki2CkVUeVyvxUPQ45NZZDyzW",
  "key16": "44B9iLarj5WtsYNnGDAE5P39DLmjWbDRk2wUoeoHyQEaN39fvEXAhmUGdbN47H7g4X1JsGgGpBbyX3msVDv9Qvva",
  "key17": "PLTs8ijVwgGrzi5PSP6ComeU7DUh4bBYXJrALG1TbB4VMC8FwsUN2gENiehgGJsPoLwyDGWV3Se9KcQ2kufymJG",
  "key18": "3Mcfj51YZScjeVHG7XJXSenfyJ5PS1kSgMcpi1mdiDg8FDs1ruVwAuAcS3bmftpTvacDRfibvp6eg1cn8UXH7XVc",
  "key19": "4WRZ6NHpTUPHQtbKRM4jVLzyqzocnyeWmrm4a7XKN6jtY9QaHxx3VFdhFWkCFGajDmsXEduWyVzpMJdmQxan6D75",
  "key20": "mzoNptjzmo51KXi6CagRiUHq1KMY2SaYTdysCNyiJ83xPv21y7ubHfTBnXHUVRkuQkgqd9vLdJjffBhAmdasQXo",
  "key21": "5fvcCAfRWYaNytTGyJ7emtSBgxhVMBWkvKqNsFb5W9ZX1r1cYCFTAyB8AqkvotQJNkCkxGN2a5EGdu3sAmmKd8EX",
  "key22": "3kiy5kbSyfGneT7FqauBdsvdZUZyj2btBU1bjtdExjsM1cU4AxdjhsB2wXZjr5mdxCukQGzYPCygD57HBhtc9zRf",
  "key23": "5RXqbw29Aod5Qj4G97pVyJ43APr3TrUa4k1Mbp3QPfN9Bxk7Be8twx1xuW6FV32idKNmmuxW34eD1MQkcXDgjfiK",
  "key24": "2iBYAzkhTPK9GFXbboazetM9jHgUbqdNmSqLv7h83cY1VeKMdQ5E4mupADiAiB6neTz18XVxfAGYa43GGbDZ5CcC",
  "key25": "4EWz1WTMq19L9i7ge1oy4XPiQdKG4mrb9Ln8chWy7fnXYZuVmxGhYxN11xg9ZK6BkJUEig774hpN4BM2VDrUQvrB",
  "key26": "4r918to9P99mTvcXWjVgRqZD7baaF72i8vuvV7rEQDSLfNXKwfuym1ZHDnS7ufTNcyw6DsZLSF7u5ibLbje5V3xE",
  "key27": "2BTRjo8ZZHB4R1h6qTX9QP2g33976yio5hMN3HHF1vrWEf7nLif5GWB9gZXSh6xzxcZYmdTeeatYkWJqbMezNtjy",
  "key28": "5tkxQXpV3rswn7kVDPJGcmkce7C39ypCDBN5vveHH9gSvhTVTDgJqaT2yydea3XjKmyaiEWqUkrRXmStj6eKJC3i",
  "key29": "7q4sjhYs9ci74cQbRG6g8kmwBLMExuWsRn38kaKaa9hcJyFSYu5HwEgHgzhNYvF6TQZFmjbXiojWNv3tfaEy6T6",
  "key30": "55YEZvUp4g2xd8KNQZbzeFVM3HuNLjxmf8QqWCGP1BCpAkUgZmVeQBtu8Q8bwVbLMfDjMe7JzREyTbGPcU3H9Cu7",
  "key31": "58v65Qv4zj67aewC9HmQGY7XvyupbrHk6Jrh7tprwWjAqJsMVF4y26dawsm2twgDuEsnLqQr4t7aynFZmL1ADDiC",
  "key32": "4VvaR7hVkBzYbZA4Rh3LQdFhbKrVk3XGVZdN3Rn4w76nhnRiavThy7dkQVe9nfQdvRtyK9MGpiGXB5xJKyZN3SAu",
  "key33": "3vCs5m4nx4FR1wRJuBj4QPjCZ9iFVaqMC5Pptf1TvPQ1TVxmaapbEwSm7CXSLq7EPTcwo22p55a4VqpwzhbjU4WL",
  "key34": "52CY6TjniG1aBXFwgN7awxnvQqY7DpB2GFNMEzfSCzw7BC5Atr7srX2t9GDNqXedRyQVxkTKJEE6wxdi9MULSUpj",
  "key35": "4wMs1Js1XBoVK4vnq2Gqnkb95enJAfM8Xh3urTCtKmqTDT7y5ZTQ2e5SoMLqbTHzxtG4iDS4Yxo76nkRd2LFKHbV",
  "key36": "4mqWe6Cw8pEQv7L7m9eapSCzynrK5hHuWm7avQMEiwgpjaPXQgYyUWQLi17dmXihziuRx6kigL7uF4no27GEVZuT",
  "key37": "2oNmdnRsSaLKJDgeBzrpvUWRsq4YzbnGxDcTZSubsF1Zfx24Ryu6XQEHuih5NhPVgLRgLQs247TJG8TD98eiEj4J"
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
