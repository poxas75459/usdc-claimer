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
    "219U5Vse8qVeSJKY4rccsWYJgm16CPyFgGynw6HdskRNuxtseoe1FUDx2RwMVS2buLPxDbqnPxPEZJxsvpJGHELw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LdCjPQJybRyQ4NXMfB3FXMDAefPXVLP3JKuNApN8EJSGVDVieMSJAFp4YNsSzTG2hSDEkAdfMR5LyrNbdM2giq",
  "key1": "2Vp1aea4LXp5qCBqMAypMaxduSDAybqaw9cR3bBqMQDqNroHR4i7PnmfCgRDm3hv3e1FL4SMipUmfGRjdM78tg38",
  "key2": "3Bt4QM33yotMKb8hiE8AR8zfVeZ5WCcuGk3HfD1RhvNyamwqQvDCg8X7ZBSCuFRzKa7TyCsWtiitv3EEsbvM1vS6",
  "key3": "5gkiUA8hDFduoBicKvT8XGrNScQd4E64isWZJhNudXiqeeSwFRUKY8L1yN4KJw9M4bvSQCyGzCuqysrjnKzbjKPa",
  "key4": "5SUJze7138zd9y24N7X6FVTipPg2rBbeyvZZ4aWaQii9ake2x45CtKmoubBTAfn3fJNa6jq1hcM638sYfJCAprs",
  "key5": "LsE9enKD1tDR56myuN8X6XA7h7ZYw8pPscPWWgrFaSHfHSVwckTWk57fWDRbMZLqFRWV922MnkkowKqHW1SUAFG",
  "key6": "5LSFXy857ShWWPcaRqTiCLfXMPa5fBgYt9f8bK5EyQft9BRjiadZoZ9uLJyKaK7RQoxP16CzEmqTUTQwixXVW86U",
  "key7": "8Y79nBHtkxPs3sJCTURXyWNeyYF4WQrccUzwhR76mTMkUTM42ddGPBYZnNzdKrWULpS3TF7qNn2y5M79jt8qYNy",
  "key8": "2NWX3Exfh5D1N4r9fXg83a63ceBKqbtp4QYi3AX19KJyRS7Hpd3tDkAAKA8udAfJYpUcgFekdBhcBXHwKjKZAX6j",
  "key9": "5ZYH4r3EJJ76PzPqfZzzFsiWroVacw17k642XiKE2CcV7N1J5oWCMeuaN7MKnXcnhpdsMEfLjA5Z6ie8PqFiDBS8",
  "key10": "3JPN5wnqf99MvanymmDTmWqHUYyyV5W462BCZvuELhYPiPRwjXZn4UEmhfBz47bWYD3pmWu7gZSQmj3y2HREgTE8",
  "key11": "eB3Le8h8PRomqzwRDbstsPsL7LFTSqh7C3W8c7gqLict3eGutAMEU7QPySku36C73kPrm1Lz3dZich6NEYVQnTp",
  "key12": "RYJgJjR1kEkNeqiBL2sW572DbN3cZCpfHHySbcwnNjzg3X1DFQQgTjwFro5Pz2hnNg2rBHnQYPLTY4HnFeXUstJ",
  "key13": "29bHEt54kPYeMz9NT9f94pQcsp8VAPVKYqKdNBtD3tzscfqTm9bn7tKer2XZrs3ccHVMrEmBMWZWrMs3tZkzVP6V",
  "key14": "DyFS3RFboUKpFHEWLwEgdeo2eQhiVQEMsbAWFKgXwQsfzF2tE2A63SfgAJhwELjtJhf9iQokF18CCK8nhCpuNe5",
  "key15": "32MvehrAAYeg6SPwDmou1CmsqFZoiJwbzXn844Sk7ea8ACzzoxrPZBXzpVtHRspLLbUrbXxp5ywQ4Xh59sq8fvyA",
  "key16": "eGC1ndZYxDnWVQLUU8dYpW1moc1n4uNVUg5kHSmwntQb2vyiCEGHaYQX169G5qr6Dna1WbNP4MuGjP33yshCv3x",
  "key17": "3TgRUMF8DzEfFkUTy7Bf5PxX6z7H1s4WXqmxLjaS8bf8JAe5PTdPufd8CwHZ5t1Q6GLiUK8Q27292ay1Gr9YAsV1",
  "key18": "3FGJWAnuU9tupMDhzJaRQf7RBp9r6HxFh4CK8ZbJJBiTXggtki5b9LRNJS6hduEq78MDeZNpB2745rY5VXrc2uYY",
  "key19": "5eiBPCbWkQRMAKg2EcjkjFpDQGqhMDLDVEoU875ixhSNuvNp8JdGRzCk3e3GtUKDqR5qNWkyWycRZMyba2TpMcub",
  "key20": "5xHvgk8xw3vY9fbzNomZuKVY8VKkQVSdEHTZRr9Pbhi2fkbQPbQ3V6QGhf1amNkykpSEhG3RDSh4kTaiF5eJdpfh",
  "key21": "5SSELDnD29uEdGe6jJAbKcnpRtAp7ibEWzNfcYxWdPEsqpuVzDbeq1nGJy9zEmXFYQ6kCwEiewPgbbAhQihN7vDL",
  "key22": "3cPoeR3TmDBjG5KLNQWYQLJYmuKS5WLS4LuAHXK3DHE12gM7F2F1LxB9YhPY133ytJveyJC5ZcsGFFSFwen6oGLS",
  "key23": "5MxTG2iezzq1akdmeHkWqcdEV9n1CXMKt27isX5QYXz44wqaa1vQYXQzkGr9SzanYuDJ9ixUnBEosdejHrMP4Cft",
  "key24": "19psG1VjmLZ7TvyPBm7PufSHc1Mg5HX2pnTS7CV9DRajjdK5jrUaQztngs3bjCNvKbYq2xp2obK441Yq91NpsC1",
  "key25": "5f3qQrL1sSqRXh9mqFkwchDeMm3mzHDxop8WFFB4VDnVnEvRNCL9ma9k8oXEwnmCjrodmhAogKaR5BKZFnQSpm69",
  "key26": "2TMwTYEM4Lza9QrDv6sujbNDJDYoj7kSbHoVXzMvYoqHdn2N49xqtVz86yGttvjVXecvBC4wT7cx7CKH1KKYaR8w",
  "key27": "4Cdv1Ebc7xCd7doLPqEkyVZAN4w61fF8yKfzP59ydh8CxEVDVv2qXMrbSrtJLhAZeXrd3KosuWZFTUwmocrLDgFi",
  "key28": "2mjxBf4esD7EHUPtEbCkw2ix7xCPyxGpVfLMioMsqkTa2SpnXExm66Cr37YJKGcBytYZuho42gFnq7p1Q3KT3Q26",
  "key29": "2hEfqC9ghHzxLBkbpWXCHZjzqc8Yxxbu9zywwBfExwPvwZVkfz8G9pzVpcQ3dAZrVaQ92jqTiJPGQvFvqgKAuqSC",
  "key30": "5513bCGhJLUFstxjWtj7QNUXc9Qv99igL9YPGXhprPBXn2mU4seYYgFn8724p9jmkfAT3CTxgaVyW2heQGFu9y7G",
  "key31": "3om4vAee8GGPuDki8hAXXAKysgmte9hvZ7jmY2nBhLFswhgvinuC3DU9sb1iC9pXLCgACyzME74Y1gP8pmHfE6sa",
  "key32": "2ysJNGeyuhVk3ZqnLHVEKCoUbBxfWb4QBqNSGHJwSDS52GCh3PK5Uv1rru2c69jpFzyiAnRbtofcd6Ks83YusAet",
  "key33": "8N7gwy6BsJFEjL6Vx2MfoJFLfTnL3cQ86FCBXEHzJqGkbrAazJqTzm4fctdRYEqS1KcH99ZHYZ2142iPwQqLWSB",
  "key34": "5cxUKhaCqR99f4fokJ7hVJL5CELS47QcyeWeFUY91XygZP6w5AZHiJ3kJJMTCgzh5NF8Ckuzvd1fWL6L5Kx72uPN",
  "key35": "836FfvjF5CrdYw75ogGbRpueBtUZX8moUPkP4jgJEVawR2Ljg13Y6ivUxSc8uRrXd8eMSsHW99aYD4U5fi2fuKm",
  "key36": "65GR8whyrqW5V8o8AK7zjA2GToA2ccJ4UCtX2ftpcC2MmJMtvjziyQmcvqNVYdN94K8nPxgZN2W7HwDtjirBQDi5",
  "key37": "2MazUnvefkkEP556WrBoDLRDnjAvYsfCqrecgp5ondrfFYBymSFtkerenLbbsYEQupkifXFJ9a2UXvtguca5FqUX"
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
