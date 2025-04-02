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
    "3woo1GJHuYCpGTGSKXxAfSSjp5gX2q1ZXNtxfiffTb3CM5YJmpZEtoAMgLf5mZuqfBvDvbpKUdQmyHMr9h5knjR6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HULTuVNQjA5sWS4pyJBiXdyqnSWoGvuXLKp5992VN4TZJve4ydqnp5moRW4HuSMY2gyVvh5BABbV9Fnz7fk4ETX",
  "key1": "i1L4SxKrbkhUvHZFL2q64jNeNGedkvXiMA3kwtxvj2FDyH59WtUd4X83fmzczy8w9BzgTP1CF2tkU9A5UkbBhjU",
  "key2": "iJYx9S53ZAyWU9Zb5KiBPfSo9KufkQacD2aUQtXhdk4cHuvM1r3Qy86ZgvqViNk64EkU7sz2Nb84BFdyVpmntSw",
  "key3": "4kCxD9P3brk3MQh4tUYsm1nfpJtnRNtrdSEaRffbXRwFGqmcd5nGrpkn6662GgcoeGPhwNh1ypVtEzsjRQ4hrXnw",
  "key4": "2mnT17Jv4YhhQDReymDdMMLjJpAcYm8MhVJKn6AfH36gyEgs9V58Que1R2DeSzUJyfDDLn7WbKr2vD2iMJPrgZ1j",
  "key5": "5z2kHGAKWxG1QuowB2us3ihjw5oABYVXVuCZEsof4fJVVHViYndScjvjQfP4aGVr2FhU5JQ3VBC3ChY8wBG7wMwh",
  "key6": "4NSBvqgUoEcCFH6nriXXpxdZ7kP2hdttTqDPfAKqKsxFdBbto8MUmgwJF3cTxh8PK6mnx8Byv9BnjgsyTfFKVgGr",
  "key7": "3e5YyBgqUhyJt1Q6gJzQXpou21fxno81mjSxiatv3pPnyTVrpaC8RSqcegXS58H9h1Bgodq3BuL7boBdjorCvxVj",
  "key8": "3VpceV2iRjuYQk81FqJBdXDzeSob31PhRaKGBQc98cbJha7i8kmMBVBnbzXekywk5sNH9oxa9jExVZosJKQHnRwo",
  "key9": "2CxNbAW9WpmytF6dXE2Jugtq5fsCrktvdWY4YjMA1xafCA7Cxy7t4sHkmCtZCVFHbnfSZvi6oiGVXZ5ADGak34qy",
  "key10": "47TXttzgekv8CDc88LVZKdnzPmw7rhbYF7jpxc7msBYCJXsBU2yX759jGHHEQYSUG1CpDFLBrbcYCpkU68Sym7Z1",
  "key11": "2MvimPjy9mCkPiBwyzAmirTPx9X1bQK8ayetT4jZcPJCouVhzDiXw9X2LbgiCy36MqjktzDGcsvcAijdhAGVSi1c",
  "key12": "3S3afW86BNLb76uygUMLwk62X6rCH6UaMrjAjBx2ZXCGdpu4F3PkJYfeX4U7Zkp3s5pU3mKZiRdd7MWh6ADiA5yG",
  "key13": "4c6NYas3w9TVmoSWcvRiBe7gzqT3iYTP2Fon7nDa6oyNLYGrvcQJxWmGMHVZ157KXBqeHXqQG1CWQwwaQnYiJxQA",
  "key14": "o4DGy1WXsbxwcWoJSbQajJTtBdVb17ta376JcB1CNTGSgBawpjGj4RzqNQrtr6XNNvUHA8QfLN3Uy3z5eDBfEJi",
  "key15": "5utrG22ZVF4wLz6qSJYMfafsRFkTEDN4CUQzU7tqmos24QG73vJZvDPV2WKNjprCQXiV3DJkWNCJAdKX2dyrYZ2q",
  "key16": "UWURk2vdiCjeYfC25GyG338yQJYc4P1SJ6kTPPWivnAUfvh4J3j5q2dYSn58N6iBTaEMiABHofD8QTX5TFy6Feg",
  "key17": "4Wn5nbC36sAFH9e49XiDSEpKYnVxPcq3u5kbuBF7z5ESJxxZ7oRsTuzbqYy416JaNhmjtxThnouBuUe2r2vhccpj",
  "key18": "61RwSgZsB1pCqvYWeyur4KoH7rQu99JnDh36GvxMhRdnN2SwWUhAjtrvUPEBXwT25M1pziwYHaQajabSgpF8DGQ8",
  "key19": "42qPo9aMZmasenhVfoqcyhcb4wXgoDo8DjEhPQJPWNfzXQB4R7iMdBiq5ojSkTwKcC6oc5vG5TE9hiVazhNLG2h5",
  "key20": "3upnuJRo8XhLrzZWJDy8w8DGWBKEJGuy3KPwS7Vi1XiPaFDUzv15Kx4ywbrAKVFW2PpcyaDSVfAiaBpymhRwKAYA",
  "key21": "2xuPSTdw5WkPnTqK2KbZsqE2S6d9wzuGXd3rJT7YRKuVhU2uPf85pe68cX9dKeK4AMn9VzC7qSvPNcEuLD8oCKWx",
  "key22": "5QMgmSo8r12TqAdirbzNd2BE5djU8A8JHekMSAruvZMZUx4SX9TiYEMvhiVuyWmTAUqjwiHFRBeFG6K7kN5fKGV6",
  "key23": "4ryuoC9RwCQVsE3rq6S63qPBGzTqx3xg3FVW5mhxJxHjSCYhxYACxMQ6ghjda6BoX9xXE4hFkx4LTsZ5QYs2y3yH",
  "key24": "3Nddn4DBrD2XxG6L2oZ8Kd5wwGmsRSwXm2v8w2zH58pviQRTDwcEA97bji7yWbMZjarnzYR3CJKxrDkioABArcbM",
  "key25": "4SmbK1K4gQrk1bwf4F14SVfqC4aFqqmJkyP31WroNKXQtbc7MrzpK8yPAoTwxdFAvcUHMGSHzChQyBYT1FBz8ppX",
  "key26": "3BcCPdVuSYSq3pv19Nv5uUzZAix1GqQVpRkW6x3vTg1CKpnwYofbjGjCuQ93SdhU9oaUjgJgRCXdvWXpCcL5z7FD",
  "key27": "3FoniLtVp2gMnNRi8FtThCLsLF9pBeykqYx2aZkLjaghnKEqgCEjFQBSJREL65JCTDiv7q3KeJRaMNPD1LXDxEkq",
  "key28": "5JkxZ8NbqdzfCxvetJCuNMJYC8zf7FiHxSU5WpkBWLDcpJYaH7roFECnUDqkPjc2kXYfTQhPZkXGswKyZ8Qp7J94",
  "key29": "EsSYuhDKHsnEMDAPy2HjYbmkrHP6Dx2MqtxePia7B1ygF3fjwM1vtTkWDDCvpYXaBZKVBHFCvGwgHEpS3RPqjj2",
  "key30": "WY45RnvJ7Hbs4PMsHGAcQy3MKfWeLRsiPz4x8edyETd45xxKc5Bo6jGzvxmoK94qMXiKismY3TjZLvrWvaiSXVF"
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
