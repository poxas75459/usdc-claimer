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
    "3ER99wFM4VdruoS6JRB5SeULxNdPpDoTzPyhTE9ZKjQcfRCB17zZ638sPEBtbCmwBTDNnq3qwuPCu5EKbCxzpgR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zz6XfBaJkKsm93DD4LggcKxFNEqtbBXdE2PVNA8HVXjqRHEdr7XLNmMpXUCgjwszwd9JrCXNJkuo5YYcCta7u9L",
  "key1": "5WgS4pUKLkNv9K4XGejoVH1GjTiZ3ommbZSGNjvmBuwBJSxvDfgBzUNyWykdjUorE4vijbSqHCik2zg4R6YRnLLF",
  "key2": "4wXC2tu9o1NSk67CJcamGeQzcDg63iX2hjgDMN9sXUD4TBBYQoTPuw21eK3jaSAiLnodyhDWJV4pgXFYQKWXpkyz",
  "key3": "mJ9HNuPThPau9zWNoPK2zpxVGShMCQz56fe3XKXX1jAN7vhqXnAsVfmqw1gNRfzE5heHh3YBjLFP8UaNzRf9NYE",
  "key4": "3AiATnkFwFUstq6hY9KwDAJesYASZ59gJvQmM2XVwwM1cFuUiUHP31sUDh387g8msp2TRm68XxZmXWjtwn7QJgxn",
  "key5": "34Gfknxtks6i92ePFF4vEsWnxZfrsxoNDWGjcJLZZSEz54CYdarFz22xc3qHV6nXXnhUdBnvjFaopbuUNSEpiVo4",
  "key6": "2xafWGEshMMKHeF2uc4Hn7Ed5WFLiGCtQZFEmiDkEykMUxdvhJNqhjNmJHAgo91CwVTLZhaBJr7fNa4a9jwwGRii",
  "key7": "3QmxgSej6deSGWHGpQ1iAz5vaHHEzY2UCKAaesMMzWktTm6x2i7DTTdWmAxPSSk2mtkEnGTj4bMwwavjcT5YJ9Qj",
  "key8": "2vBkkGJYrijhx8m93wdghAK1Fwvc5qiP5Qqv4fX3WiaNrjVi7NX5XGqhAmmF7gSYmbmm3a4s9JpZjfW31FRsSJiG",
  "key9": "4Q7WEWN3QVfa6aKpLbza7RtPNqCGwgUVXnJ14he7XEppYMmgHHkxFQj9PLbjQEktsSmJSeUUyE9rX9MgkD3FiE2R",
  "key10": "3QesfCoe7RZgn7Z4DJmqMugwXXqC9tjmCd7yh7yFuhjoG13sunCNZgh8sV7CzpzRXY9VJRrnZV8dSdX8Z3WHB4dM",
  "key11": "3sgfXYJawtFyd6KS2VM4HZesJgxdgxGsC8A6Pie8KFGLFcWbaVKpcm2bdKTr4V1famE9KF9kxGwMFVCkhdx1LNBH",
  "key12": "4ziZXYjFWq7KQyMQdz8EN2szo32jap4aWtzSsQwyhBF16PdwMC8hwWfxYsJ99K9T64qQ3Sv8pbEVxaErtnosVycD",
  "key13": "42nT61bTt3EAirbwJdRxGbYGfg5QZb3dtFL7nmdKS61PDEVCtD4a5LhTZh81JefR8K8fNT3VzVMSL1d4Bpaevakj",
  "key14": "2tjmrXYH94Crn57jCkQqp2ooZ7xHDMWGtBf7tieP49PA8D97tKb5c7kz5VxaUHBYCpnSnvvqGwMSjKyFkhRK61QS",
  "key15": "59LuuGgDDtMy53SDucvcF8izb1HTo9e6zFr1ddw5F2M53fyQDbY4ex8Bw6Sg36GPMYopJCpm5Gc7u5yDHEJ7qne9",
  "key16": "3TNNBPQPXSxs7KvokDiHNDFJir7x3RPw4SUGtcMt1ayvAVFn2JUVEE7T53eGMTh3j33ApaYfPAPRBDxoXUgyRd8j",
  "key17": "4LbV9WUDxSe1ub2VD2GzJq8nNaeRdukCHqMP2MdqK19r4uLaX7pZVBT8BghrGFyWPHZVF95D1tHK2LKqKUfVRjYa",
  "key18": "4nhPVWZTn9MJqp7isY3HkPxXDFqKGk9aLCNUUF6zNDSMYiR1StZqLUxL8kKkNqbc9HGnHGSwBfro4uZA3A3asDFn",
  "key19": "2TZYiaiiuniC3AEVkMK7EAWLi2Pcgum4hYJGCVLM2mLQKs4PgJFFfqciNrWEDCFkQUJRL1zQ2Mcv1rQtEubcSVxu",
  "key20": "gGWcb7yfc2QQNbSQ1vdZ2hyBAGBwqWoYZW5xVdGauc8ZdYLK6sxCnGpcKG56vSmRrkwF9NBr9cvQHcVvxKuGQBB",
  "key21": "5adzENFbTrRVyVBwtmCNmNjpsPNzJmQqHUKGpmCD3eH6VzAP3wFrEZm6uoHP9czXxsgAyohXCmF7gWh7S8y69Sae",
  "key22": "3oCdjTS2DvEjsNk6ayNoZpXfpxfZeaYgstMg6nAs9NSERQV7nTAUHMd9WCQJeLerHNc7jcNogybv6EHQSzGKsV32",
  "key23": "5T6q8iTuz8CMonBQWh73GpKfHPNRygW9qeRsVFDV4w1oi9T1dTFYGyUw3FDyvjjH6BcNps73Ps2SU4ZorDyLyv8i",
  "key24": "2tDwoKkx53NUCy4wVknZVfXLkgGi79rsW39TKQu4mkALpN9Z8mv6fKru4279Wsa4zeZ2JXirydoS8aQK1KSnKU4d",
  "key25": "qftwS8EZU271HDFSLdEkTkWkFeZMTQcgqpcawfnFBRVSv5jDsw1cav6UVu19o63XiDMLkkrU4P1T1Qt3WV9iwBH",
  "key26": "4ADMj192DR3MmMAMw5FwDinbHCV2M3fRtKkpDc2C92SSRCroKYtN1KhtfhoovW9hVfqEMGK464updaRXKgk8zk7z",
  "key27": "37icMsR8ahGrGmfGfofgRvoAtJ2UU38vVgAWj4uS67XajnCb5kMUGXp3hXoDqyD54j6HDstidN2fGjF1482CCpV",
  "key28": "3yWi1e6j8HMmLRBQJnN1BWEmAWf6iL81dJmziGVispTz2iA6ajsKvjo7nCqxsnY6CNm9mHnt1khMXtuew4iarySx",
  "key29": "4Zp74zt8ED5qji5CoEHEHVfUVMyYEsXVu6NJ3cDYcBRCisG7fCQqvvSTepeGsPPxWk3qJ4G7p8PPgxiR8L5qGjoT",
  "key30": "4TGS6sTyPJNSBNNQcyXsjYd44nLKf3esBMoC2qQS197XoiXd6dzCnaMBog33rP3jKTLXdgVbdfKZXCKq4roHngyk",
  "key31": "3ErcF3xj7KrmhK51ygNzp5zmc2PiGUW4mSrrDr3PPQV28JTASRBGRzHVb9P2HMx535tseat2jMgR9qc7vFsmCYWP",
  "key32": "5uCp2fqUgKTjcvt5LcXj3JXBJdVmELYxFM8YdEJaj55BUmTHnydrn1s7sJCB5HCnMXd5FnieKBK2KDyiLykfszCB",
  "key33": "4uLD57JKjCY1UUrmuVcbcRKPbZHwG3sc9MrF23MJgqiUjfTpWZBms2d2QdJj8nm8QjFZLxoXNg1vxtumHVnknaNr",
  "key34": "Me2Pu6YzaCJiuCHtnP7ifxbpL1cCrKwhyi4S2NRNUZusdU3gBxBS3KkFGnZcsj5J9M9uiyxysY4NSzfpRDSZcDJ"
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
