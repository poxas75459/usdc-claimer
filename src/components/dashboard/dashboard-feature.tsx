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
    "65UgEcb3zvWEzve6K5EeUF2aqEqzVQqLL3MkbeNqfAyv8PPYvtwrcZWxHUxQq6kiF8X96PecMVUSv2FTD8szXx5G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41nVfSrqc3gFvRSot6jvYW4YmdCNdc8XgCwikUpdhptqETD2pup3Rjwnf9gTFpVHsNkdAQRYe1rEiMhjRspyVFzQ",
  "key1": "4gMwuYCv9gtaEBcVtMkyCwV12oUubjVLM77ZiBgCMesXvhdMFAqddiLjGPWLoSsZEsNoaLAvLwEWj9cpen5DSRct",
  "key2": "64dsxkUcqcAku6Wrk23RUCQCF3TeC9GR3gBQPpMm3vFj4LNTwNfnTjSD3kfGbEAVtAgdshCepzHTPvukuUk6tLMy",
  "key3": "3inuRBwfv67ikHUzf4doe7yQgwV7B6ohE1UEWXtFT7fXvKA5FsYMxLE1CF38CEsoVAsKmsUAUVyao5BauQo4nGkk",
  "key4": "2WYFXUpoyNqXbDymginFmcDNH3MppkdAWLWQqvfQ4c5NW9PpLs4ryt5Xmvo1MsdcohtCirRDdCT3wD6s1TpicxQn",
  "key5": "rq2MdQnmJiK2Vu5DJgaLE8tLf1hgZ5rxVzJYfajaQfqbNS1854CbSgpiMzn8ut8WpgvmYaRSXovrtVzjWkSTuUN",
  "key6": "2fFnUd5TZotuLVzNrENvHGxZKkQXsM1yrJE1iat6rJ9s6dLHdSxJM7fEowCK6ioEzzDCiyZckvqN8TFvCcquDU7x",
  "key7": "22XXjn7ASbTHb37Eu4kzMfn2Rfx8YKVWXyQH35yxnYSkDrejPxjXTBHdHoHf9VbDCJVqKEoov8zxCBdZqYmL3n6p",
  "key8": "5VaSCVicYzjySXaGLefqGLDDEFLyUFisSqcSD8SQnDtYhv81cq7Q317RAJAiQFMV2SabTLfW7zK8fkdEKukRDBYs",
  "key9": "4xBzyNfPLn21cEtmiArUgVdmivvfaCud6uZPWrnvn6kCLQucbQd94sVVitPL2GvLJLAerjF1YonshduuHhx6kNPx",
  "key10": "tG36TsxeXcusCVNCjUTSNuEVihb65DgupT4AWqQnKstakeC2dAXBLTeftfdEC6AGcrao35RkKbJj1dT4KymrUB5",
  "key11": "4btLNQXMupfcFN3g69D1ZkNBVqrZXTxxBqJ3oWbLjjbFzyrRVXcPi8DXqQrPtZQdy89GoXPF5ncbQSpSFxCAqp7t",
  "key12": "wcXWm7jdstQ2Gb4aouGLw2h8xh9HVEtiSxfSnyxTnNv38jzZoLzSBXomYxqLwJjTZBAwykzuWXGotex2k8zn5VA",
  "key13": "22EFmSrgQ243FcJJ2KCcbGMuLjsEdeXG54BMjiw6vNSvq8fPCcn19EvmkV5R1mEsi1njSvCzwJTWsyezM3D1csE8",
  "key14": "3qMWWuwoNH1UhnWLSUJ1aUC9H3yHFmKHQskf7XMT9R5R4Rnm9iFgoEmatQMqzViRW2fqyotYdhLrPgF2a6v2Can1",
  "key15": "4WD9C43EtHWH9UN1wcbdZWSWpyUWe6vrrxMYdewbbsnfmwsSNPWw5nq6gWWEGthgSiXorHRxs5ZXk59oHVTUAwhq",
  "key16": "vAdRqhtELQi7TQpoExApMbkLSnc5hRaG3WAo7J7UDq9UodiLKnGwU8u8TqUcZ6i5wj9MhGGe7S3nUCbW6dFHn11",
  "key17": "5QG4rjwQFpJnGvgT5y3pe8YSNuvrCrrBDcXWDobvDNXBRb3PtWGCsv4BQGzNrdb4FnwKEKgoukGXWUyRCZsZ2SBE",
  "key18": "tmoFkfT3gQzfMxn1SfhbDJnsHjCrwGYsydrSersCSzp3RLggBuKvMqTcR1FR9scgub1hiGu6wjurZh6Q5CmiDKz",
  "key19": "3GBxpmNHtKProU7J9ZGZ4p55HZFEJXFVUQ63vxQVVFccSBem3tnAKeDASJc4WbodCpCZ1L8CNZaFLR8q9Dhau38L",
  "key20": "5ypjRCUfUGLXtBkn9f1FyFjM7hfbnr4gJpHkEmVDbFHp8gAbS3wqSRVLDvExbETYe9WkETe4FQo4rSJyKJp7syiT",
  "key21": "4SmKWLUxo9gdnNPfhorki4jLHapmLzDJ5VHZWb1PPxRP66eq5xxQs5dpcmK8xxWa1bMADzqp6vxy4m3oLLcGZxFm",
  "key22": "48zaSw8vHZ6kcpmkyKdt17bNhgJ1HHTPRk9uZCXTJtu49hfpbQGFpTD6ZMbXunYumfyCnU1FQxAPQ3GqUiw2ssu",
  "key23": "57yS6TrfbELMYmufAt1BepY7CQEbVigP6KRoGpeB7DLYxTcMePyU56EBPMWxXA8jzBawye24JRphDcKJzCG2qLHT",
  "key24": "5L3hMrm6u4RjufYcEhicy8XWGFbYnnoqpNwQ5NsfXRC9ZPHYbZhYr6oF3FSEa6TbFu1mRuLRNwBGZerz6KS8FGjN",
  "key25": "4GnZJYUzKDWPq2ptyD3sX9vynDL674J4mR5BZ34VEjpBngjFya3GELKEyu5VyNFxtuzaFCJF8NVw1PgRQgvvQpVZ",
  "key26": "5cu6Tv5WJiXN5F692U32mVTNCWVg37dY2Ehcs96YFsH6PYcHYdE9fitR1RpEsqDkvbVsqhzyfbWy5Lo8t1N9xzs4",
  "key27": "5c6wsmkzoC6Ezdh5d7FZy6bS5H79CK63vdddRm8EeLpWpmtbq8ovtt4gMghPKoTobNMGR2YxDPmW393EPWzVPftq",
  "key28": "2nThpqr9dyAR2itjjiPUPwyoiibnNLHgZ2rLpjCoFVHWhgV79bem8RdPzbTpdsUejHd5kQpeF4WRxrfmqXtbzii4",
  "key29": "h79avaKhPwUGHrvixUZVZME1WewTdtSeDFpBtqxEFuntZUcMQHLZy5amQsaywifhwL88LEN3aG1MgLiD5Ba1FsN",
  "key30": "4UAZg73yH2wxn65AERPCCBHaQJ3P66hfzS5bkZPq2Qii9CeQ9XLsmVZk2Bj5m1r5YbSeyZfvyEAMhpZC2TBofFLj"
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
