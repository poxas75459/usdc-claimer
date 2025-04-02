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
    "3awPwZBUVpqyGmQA8EtnXdPmxjb7Jr6bDy1ncqJTDsxF1pR6s87a8xBDnScpwzzxfS7EQ23tSz83awFshTrQYeoG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64YvfWmGFKo6muLTVJPDjpof9GERe5joAZFMQoj32Pk7RpppwftwNNPf5q6pCv5SGoTmt5Nv3yqJygXHAyKaK9eH",
  "key1": "VM6rkqqZcBgfLHw43FawVfRRM5xTEG1wP6w3uoUsmXYVgmwEP3dePZ4UnJ61gHJnMfhPpZyzdBbQ63bKqhQjwHm",
  "key2": "4tf56koNskqu6VfR5QbLuHUD97xhy4B1VLBkpXP3p2Qy7WnMgsUsSNys6PXgRiakCPZskewX74sroyGAEZpCSC1Y",
  "key3": "4x64aBe3n64Scx8m6bc4T8FT2urikMgiwFBEQ8Q3v7wf387V5ecvxKXCipQx4hiT7PWAFBacefGvDnQfvz6QHFKM",
  "key4": "3r7wKfXmdUQH2Bj1ebZw6AAjW235dKmS3SnTEEJZgmywXPNrFUkKXaqXHfHkD2orgq5GGUiTzTByzZ5ebxrTXAZv",
  "key5": "DsELko5Uf1EcbxQCoQCFa3bRXtwfuTMYVGo2J8u31NtN1V8YW23o134MteVhqE3JHoTDX8YYAWskJXWyjB2r5Nk",
  "key6": "Z3eHNYs4ngrpUuVnyFqZbjAFjQ2UX2ucCmJDu2g63KwiUF3nV2LneyadKGsdwP7PfVK2xVYKb9vxEfY3NirqB2Y",
  "key7": "42DMGBaeBxNzYTgteQXKMeCqTSSou6269tQL4aiQJmsiL3uBKh95KwJomymzbGTfih2unZxjMHYSbJmvo83quRPa",
  "key8": "3jTx6LEt7AFnRy9HvSpuH5McTmRNHj4HUuu4MyHS7do6HbJrbc7hYdTCAYZ6UjZXjQixusfacTa7favEjZLnniF9",
  "key9": "28iqVmKugZPE3P1EFYiSqpwJhVsbQgS6asSAbCxPHezWtjFdf41rNBT8RjMzXCjGwAnxzJPj7DgkPgvMdnDhgkU2",
  "key10": "5s11Sk4Xuiimi9Ne8qp7XPyfKwNzYET7p2QEcVnZ9E4Y4BvRMaaFQ5Exc68inFNjSYgngvLYQb7HiWVwLA6FuMxU",
  "key11": "mjXNpwW12jjdodEEfFKTJqANodicaCBc9omkwQgSqCM8SiRgfXSe7hPPZwRRGw712NqBesLGrTtAGg1wWdQ2pKt",
  "key12": "2RVdhs3eBYwzsNXWkPzeQyyFLn4hVM4ieLu6qfxMAWjB7Xv3QF2ty4U8uVQ6kYYAm2Bg2Xibs5cDK3PcrtaYUGby",
  "key13": "4qytQixWKvF7rJnDQkjENFkVhMXuroYrJjNCrmuwp6iBQkcWYewbEsJVbU2q9HosPp4iXNiNBYoL12nnT2x6ANfB",
  "key14": "4FifKYg6NufbLVcEuUfcuWmiLY7f9u8KC6NdA8HAPRbrQ2tud5dRxAr8oSEXmSBKT2njTCDbUwQovnMx8AyzNtAU",
  "key15": "3tipf38cmWjsTgdBoVc5stFFQuBqddsERdDZ2piPgRCUtf4sQj8bPsDcXWabeGzrNuMWn1NtUSTuCoLCe8JpwZhX",
  "key16": "jk1end8inimLQPqLkVPA4AwJhp7mH5QVaAKCU1TvBYcrd41gK1BDrUmTrN1LUFeCQ8VsFgemLGfHoDLsjEZGz8n",
  "key17": "3egR2gHUKLpvcijBebFxj1igHKzn4HWoeoCsY46DW69UWTPSU57vcvhT7RTyG7LvWiNpKz51y4HGEQccGUi7eysP",
  "key18": "5ns2XvPUosfhKU3eDVMSiE4VoHtQNE6QLLVdcCeNwBQPSYWfdtV2cxk6fXevWeyxaP9WHrdvHbq7WAkj8mMJqhCc",
  "key19": "5c2aJnzFQuuzyze1JUYNkVs3rv4mD3VADrsALXF4xQytQ2UF3edSDe2u1Gn93owQ6Q3GZgntXDhKsaPW5qAXDiCu",
  "key20": "3n7vGWBEFsw6emYtyonfCNhKokbJ3NbJyMcA9oWY8fPy2jQebcTmMjUw3ohTDeCDpQQX3yypQdG3MFF6ZwUqmVsM",
  "key21": "5W94XZ8LJxFjFDm6aF4qbbSLM4VNeajEpHCsqa6kJpcWNvemY2q1h3YDV5NNCoG87fQcaqpEnZVkPHpnei7zYz3Q",
  "key22": "5nuXA1zYJMi35tGZYfMiwUqAg2c5q4f1ebjiN67joqLZrtXr6mcQs7r3J2YJADffALrzFByaZReMpRe5HBfdgpv3",
  "key23": "4mqErbw47eScf7ohLg1ZggphGtWjsYYcX76xvkdTR3vC2MvyomoxT76dnyxbem5Q783X32J9P9riqNoS7wkLjv2",
  "key24": "3Mzh5rLbCg8bthG773GniXMmBn2NztjeEe3WyYrGAdgX3LjP7L3vqWu1e2PwKgxKsb1zYusp3GySEdYbHuwNvDxr",
  "key25": "5FkRB349KQWHea4dmz6PrwpokhXXL8R6rpxkhPbeFzMrdh2CALoFHojbG2YnEs16uPLEBiuNTiCUEubVvsgqwTse",
  "key26": "zm7cSgJw2zZ3XNZ968ezNkDN8d6pfBN5B5AyJ721bhgm5VvGZqHvr86cUZs5HY8xvfN3sR3Z9Jw6B1FeYpfWCgS",
  "key27": "313BNKxNtmZcmAHoJJzyEicduLrSiS84cCykEBFGenznX5GvBZYr6HTKVgA9jqisMYqU2un4EH6qP3vHdB2N8CbZ",
  "key28": "5DbyXsu6xQcnCHpgdFZs2fRSbbKh1HFVVPXiNmbachF7uvUvBXnyG556VQA4aJhVfLTzpWzoboUoJ1jviCHT71gs",
  "key29": "uugsmWkeNSd1EWiSrFEx6fBkhVXrufPQwZnWkNpY58Rm3YuAb1gtGc94v3qGQJ1ZJm5YSPo8uiquNnekWAYtdca",
  "key30": "2XAhqcRXj8Z6shbVCSo5Rm3mjBp1BYHo3iFRirqYHo1eSz1B6dQYuoTDaWNocmcajeGPQztURjABtpPJ6rddE68o",
  "key31": "baBysvUr4KGJT3c5781qnrHz9m8WGN7x1hfggpu1oWUNSxqubBUn5Cu1wtMUKcXhUJts8nuuePt84CY8ATPfy8Z",
  "key32": "2hLhu9fmD8uUivANu4Ejjqh82mPmrA6o62qw81DARnjx1ShBfFUMpjwL8QaSqpHnfBUnHqeorqtB9aYPyQi7ALtL",
  "key33": "4wDP1epVP2hxyKp46WdjTQH94xuNbvGCFmoZchkDh9X1JhEELgD1GG7S3uSkPKwmzJz7yjde5LZsz2sskfmsAcyP",
  "key34": "65VDETHoypEnojxQLPQHFP5mgcZ9xf9YExZLsZNiepVMowEJd12vFByPnoHwVYTRzoAFGVNxzQqK7JpWdMKMeyt8",
  "key35": "2STTWM3BmpNjGvdsVox3gbVMV8t6sS8DaS7koFRbKRqComDxNVHD1Ez1WdDQmQJAM58dqKNLKVSH92X37bQf4pzE",
  "key36": "3JxzeDK2MZxUjn14QwW94NLNKV9FxagLcJCjYs2rMjMNwbraDGC7hXuQHuANGd82Dm1CRigw5fsKeyxHVESM5E3V",
  "key37": "49XFoDjs38jonDFjUUQ6PBA8mLvnPUpFwSQWXP3mE1Yrx7Mjebzkw4S9SNzfaZkFZTiAjE3MUokVBSze6ESq9V6A",
  "key38": "2sUMWDUME1vCFNsKqzvwGrT3EgD6wb6ewFCZ2WQFc7tbST9Wdt7ppgHfTizqUd2AuxpVJdhv4RhRpoN9Xz8uBh8J",
  "key39": "3A2JgndnBNQoAg9mfT5sPc5YL1nj2DWaSSYKeA4vtJ7i3Cr4C376C2UtWBUpP6KiuHN8eBqKh9H8p1yd3TLvigpv"
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
