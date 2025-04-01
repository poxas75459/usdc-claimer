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
    "5doLubQX5A2fxgU8DPvmYKtmAPR6BEpEkrNmq2Ed4r6wsHa1RP43KE1ELApSKw9R6MfivD56iXMmV5T2Gw3mLDot"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28iwnj5hGm3qNPdf78QBxPPL3Ei2NB8W3V8e8Le5F2wx8hqHzGnNN6uavMrsZ7LgfysAfr1JeTsXLH1RYiFJ1zuF",
  "key1": "4uNMafFbpgF93JNkWpfaPxJwa67RP2hARYwUGdW9BgL2kRrheWmc7WWUQzFzPD3ZaVAtwjrVwvs4QA3XxtybGYQx",
  "key2": "3hLNN5bmz1BitdFU5KXwDc89UgMhnsyUPji9CyrFLqw3LvGpXqvtyKckuFqiWfacqJdqrkhurTCkfhiwZ7L1wPF5",
  "key3": "49SvX4WdCy2p3EYR6f5Z95gUJAUbdaA8PE5RLuwegqa2PuLNvKbdXvCHqE7Kv8s3UtmJNM2PCor2mtj2CyNtWzns",
  "key4": "5FpE9ZW5h1z2JefSMhBm7qWmvvuEcf4aSaXtoVeeZ6NuHr1HHS7K1peQvhy5yNZGmWFe7KfBfA1gVovzJLe9gkyM",
  "key5": "4BM6MTokEx5zQwwp4PUUxGfyjfYCfYM7cinbRf2xxNVMv1Np7V4GaC8c6Gs5BvFPPTh8aDprhSHmaYCVPreCQJzV",
  "key6": "ZAKdMXJPDqQ3mKT78mKSZDTgmnfKhYbyumYsHXUa9QPqHWbibxToLWfueVh3Ls1MvTT7SY1fdjVm7QWovuAGfgt",
  "key7": "5V57biDnLq9vTU7htSCYC9BRtb2JDSn6F8WYZN4ELFDQG6g1HLc1PerCcUaXfFwvKaGFvcHmq4p6tY5XpfAwBjS3",
  "key8": "3ZVGfm93p33n1XTH5hqP14SK8Ly7FXdRT36tuFSDSCn6tLtTGAkM9ohoB5PYxzHK2R51Z3DwU1v6G3tfVSNx5CMi",
  "key9": "eyNo4ADuoTbWqrd4oAkYmtiyNF8YPMaDZ3XRD4CPZgWDrCCcdhYEd4dgxT7LZ2RsWgxe6G2crUMgE1q5TEAVP5P",
  "key10": "4PYQkr1gxY5B8GEzwa33ERq1U9vv6qpB5FgrHi5FG7mM1oNGpn3WigU7nhhxz7ojjuEYA3pC3WrzHGheqFgQ3sHB",
  "key11": "2qLZnC39D54Lfipwiaf5DqLTAKS82GGqjCa6pWR5fNPFSGWTT2e4eJrdUdMoF5hHU1qZZaAbYVhQvCzopwdYEUNP",
  "key12": "5RrragMaMHyYD1P5Qo4L6Uavyp1pa9ijKP9wyfRj7UwYDZfLuU2E4rdbsaeaGsEeYy7VuD9WR545uJRXP6sERUbJ",
  "key13": "2RQh455HGanCoR96ozxucnBM6bfk4WhYtcuY4QJZrdkvMrLpn5p534AxrFX8QN5385Rm6K92taUzdTHBeddtk3Gn",
  "key14": "3rjsqsuGEqEGPThhAQ2a1ptcALMfzvUGDQ4G2XZojaLhHFe793VBK1LH2aZjZguNh6xMyVLB5jdrgLwBWfBp6Rnq",
  "key15": "2aUa2uxWDJAHszanfMVMBCfyaU6CwYkYJ2QfiaUhRGgFRdyc23HhSiQwPXCrVR9JAU8XMmuLVqoNCGZ9BvEv3jEB",
  "key16": "Nbvxqsd6aBfoSKLsyg6CEeMhDiibr4rR2s46owLKZGkv7QEnQxUhkwyWwuHaoHQEuMJt6F6xccTdWiuPtMWZmoP",
  "key17": "4UyQtjjgjo9HG7cp7PB6pknRZR5Qjpxco3x6pHqYW4v5TR21fmfKkwycZqN4dZUHikuAES4pSrkEYD3f2vkWbaCy",
  "key18": "3cAqLm54cXniEs7d11VrRtin3hapCP5L1BtGeUyzS4wMjrnQrNjBYFNjnCVM59kUU3MiRT8dKjHz2ay1ZiiBDaKm",
  "key19": "u9KpERLYo4BpNiaJmYg9ciB7yvtgJqsBTkqcKQA43gjcYENQZSQzWbKbGpjMjH6s8n8a3UjAAbeTjzcNVMthnxX",
  "key20": "5mPvEXctR63yfQeRxRtFx838BPHUohrz3cvKaUrRQ266EJLRpESoPYTQne3TMgrJrqwhfWmso4qXdyiqPaAHQbqA",
  "key21": "3V6UHqtJvzcxgDE7BpAAJvx4z6FhdQUc3RTtBCX8A1i4bGfB7tvsMWd5hewABvTjHrXqXDQy1XbnXnGGZA9ATQDo",
  "key22": "5KTEbxJ32wy3AjH9VhyoCjV1BVJ6A5bZ54mzx8KLsB1FsFojEajFH4g8MDVD8Y52zr6LSsUn2ZHS2abJVdRnzXjG",
  "key23": "2KtBMYREzryvJ7YSy1jZcMx2spVsJ6teAarLFGJwcZNaU7sSSXai4zZTZdau8gvtbWqPaM6barMc2cbzVbMJzV5Q",
  "key24": "4He6rqC761hczqCD7venAJESFTcowcPMa5g2Zs6tfyo8E37V2h12CSQAVWGwEvDwWwgBChYbB9usmq9pgvwnZCxj",
  "key25": "NHsibikrqBQCYtqZpPbgjvpZGD1mVzUXmMLdMJ7yhST4Mmf4PDrsz3hpyJh3z9RheFtiawTpa57BkcvPYXTLxj2",
  "key26": "t6iStzdCjCePMu8msLQQJksR1cR9NugHEyzd69XRS9jsKrUH2uuQKUZhRXykogMdsoGwc6sUK85wxV5MYSH6zMq",
  "key27": "4EEzvdheqNPKrMNbbdzahsJdnCf7suXBFJijuNeBThzzh3uMb5WpCCXGJZ4Ecihh8uSxp7m1FRstSTWTKMe6ZZp5",
  "key28": "gbUiAhm5vdQm4Tu92KSAwXkA1RMHut6rbQRutYBhBHEv3Pey8AbdrT8YNXZWwABTEjBBKLuo6pX2uxuYQYnLYMk",
  "key29": "VEWQZMP1UeMhjSWs9peZ6ofkY6zk9JJWWTswSdDYTLnhftRGPqvqyc833FuvNQ8q31AUDCtC16ZJpsgZs9XLRZk",
  "key30": "3JSNuNj8GhxE9whprx6PBZK9T4Y8yHDxszEqHfRhgmydQa8T4HPVn91vrzmUDG2c9GhbZw6zr3uKJi1LJRX5nKZB",
  "key31": "3uNuCHQJCpoaoTCaxdjTooToYCqVFvk8T1kRFeugoQkiGkMEZDnV39uxuCcWMg5YZ7yR888pojzKePhtTCmx9bLk",
  "key32": "5UJ4YXsDfvW9aAutfKVCmyT1vJQqsbeZeK2iU623RHC9Bj2bZXgWXXyZpX734mtHX6Qv5rvY4zNBrUA6Xn6dxYiE",
  "key33": "2mhsoz8Dah9h8beZAy2aFQsUhks1f4yUKEdGbcem5spDkNePRXYuT3QZTE1953KKWzQQf198eCcAJFCS29VBS2tW",
  "key34": "uSGTT34dthqr9DyDXcS7n4qUGX2LkWRkrC25P8tpgzyEuKVZUfZbY1rXqjce95q9VzpQtmguq1P7No2ji9Xze8a",
  "key35": "3gA4587J9h3zeawE47SJgEkeuMUhaksG7gFghi1uPcgDFfHyfDQgFtbEDiv8gs2SEs2Ykbo3yR8ycPG9KeUePD2Y",
  "key36": "2TdQ2W6NV6pYoZ7wDvmChXLao3Updf8iA9neaXsmrFN8Kv2G6eAk6RMZwT2Mj7QvdwpbbSRjoTLDCRYehDJhGUXq",
  "key37": "2F3owgnYjrhgtBndpbxpUjo2cE3bFBFZLFdB48FJ46UozvpyJCGGnah9VQqw7uCK4xFd19L1Zi1oLaaDjNQE5Xe1",
  "key38": "2NEQ7qynRS6y7tzespLaKhEy6noxWd8m6HYJyR5vr3Ma9dZsAXBhmV8Tbqp7VXoCp5uQbMaBbKsHpS1fXAg4XTu",
  "key39": "664yLEqQk2hDmz96L8wNabVv8T4V4Ar6RKmt5uF9jwZkPQouXqrDt2MJDLD6fePjx36Dhv4VHMSr4skZUkcT2hG9",
  "key40": "D8vSUdTqKTn99ZtVXxCWBESLT7jLsUfad9MhcbbBmS9qkeswqD3DzbMVsBeLzywRLfqxN5QvZ9ZfMXQSTpf7vwj",
  "key41": "3hV8YcFtragvWXp3Z1eSfDvnFzBRbSPN9LcH5QBf6jvAapxG6yUDd6sRz92x317vpU3tKkijWqZoBaYN6SRADfhY",
  "key42": "DJE3edVgT6JHoBXCnLErYzB1NogzXQ328JF1UdqRLrX9gf4nE734Vrdt6SkRLU744egGrJuvE5jsi6JRha8WJPD",
  "key43": "xps2MQ2GLyY4zKnE5VTcUp2MFPavyPpoAm2WXLqQ85S2nCCP7wsQJmrfECQz3RjynwDiMsv6kSJFCA8kq8MTmwz",
  "key44": "2wwTSUN8c6yUgSGRYYr4RDFoQe15nBzw7k2aN12MMfpp5P45y3ctQ9jQqsAXhC6CpY4g2RmfWw8ojeaBYKCoSjWf",
  "key45": "4vcZYvLTLUdE1a7jGetcuzyzBNdNkUuE5wrjWUoxH47UGT68Uv4mdj8wJgM8dBB9KfQiRAWabv8U5KEQeCMuxfMV"
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
