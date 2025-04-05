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
    "24cfHiPLzjDTHXW8vYMBYW6rV7UBfReLMD78nWrGeKBMuD6VX6UAFu3TYQRpWXNm78DJFPNFrJHznncv7cfcVKeG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NrAjQxZxHiRGy4y9raTnWD2Hun9ZxPQMRMLX357jzhqgsjDdMZEeqv4nBwV89zosEXBDgRJLSPEmxyd9U1iw9m3",
  "key1": "4i1weiCx98zP55mCfSrFAXRKMJgnR2TibZ78P7dWeMr49Nxu6ANZ1YhASuYngJ8yMqboQ77nwJx2wVTp9BStEduc",
  "key2": "jKp2ZKUEbtp2hak3bXGqKwjPY6f3KUMBPYR3Lh5FFqGcoPQa4nPFtbNxTtQwN6GoxzFCHivFEjXYyK87PoUYoGk",
  "key3": "374JQyk2E67sRtbB5NyWSkcjgPAVYwZszXYLoVdCW5wRiwZcoupx6BpfpUrTfSAiEnfhmupzAZ3FWPGYhbLqr4y8",
  "key4": "ZF27pxeFDKHum3Ki4qqWB32WXeHxdFQNQKU4jVyiWpM7sqU3LQj7YK2uTj1C32opC2MF6e1rS8HFHJNd5ewqi62",
  "key5": "GdXTvP6zPczHBjzo8ryaMaVxqKvda7i7tM9TibTsJsT43WwdrLsCLhe9uUzsJDGdZ853dKHf4WMupWQHScGhxjp",
  "key6": "22fzaxPqBBSgsCzMbrok1jV5Hu3TzCBkFnxPKADStRwRtCaLQJeJW8YQCJq9FFLc3XE46hfKyZ65LGzzUC3D8Tpx",
  "key7": "2NUGoEywi1nHc7iedQzZwwmVLpp9RK9uMXuSB8QnJnjVX1ga4Uvc7myjxHie97na9eLDvf7f2ZeAHNZHbjKKS1ki",
  "key8": "2Zy8GfcqU9f27Ks9LfcJJKvCc6p8fP3TgXDyG67AtmYWXTmWX7BQBwgLyCgouR1dJ4f2PMf5K6XjRqXxcXLasmuo",
  "key9": "5VgzYaZVrNBtbsbwXkDxx8dZcNvpv4G1UCuXJQrcnk893wb7fFA5iLBuZ3Zmcndpj1QWaEApKrzkGd3kDmkfUKCs",
  "key10": "6LXdw83r3Nq38zU79iGU2K1C46evuWfgWQqewYGMpH7FuZzW39DYc32FB1ekKgvhshc6rGNLb3RJog2V4C6wFjk",
  "key11": "Lr9VbxnyupQ7WRmuB244q2ScqZy8vMB7nZpx9DehmcpnirLiTTtxAAeApE6Nm71n2PoQYAjUJSVWSD7pFAiKok9",
  "key12": "2fVL3JyCFpVysuXnNhC9psUJjums4ot1XG2T8JZyuPWkQGNQNn8gWzDMzC627JR1w89dkWdZcZYq8v8y7Sgw4Ta5",
  "key13": "kBLow7bZQqbd8JHMYzTwBacK2k8F8qKsGdQvRDvy5CTQAVZydHELzohu3Zx5kqxkxZnqN48KrRYZLMx5WhVyRX7",
  "key14": "2KScaGVxeT6eLtnoZKnpvXyWLEy7Zpjc1pzfJJs4vkvfWqxbB93PRcypSHABvsHzEZsh4sr6PoqtaK8zxCWx1GpV",
  "key15": "3nufT6bP3LJkYmqgb3R5Y1c2L3guA7yPdXyamCTtEprBqBMMGjbxewAf334i1vX213aTeXwE8RMndje8Nh46G6Rx",
  "key16": "3KsupHf1afQwn5NuvwYWogk7Y5vZw6WttzwsMd3MsVBsD5B2Lj7gdxXvYrS2M6jVY2cgrVheAdJdmgHsEJtoxu7w",
  "key17": "2kbRo3AThZNpvpytQ55ANjT5nUedov9rfBmCJSoCjC1MYvjwXNtRBU27PdddGZUbHqFbMp9JTKaW9YDuj4E138Yk",
  "key18": "3oFRwRc7gJ8rc8y4y7UokCoVgdGKSmSMWLacwWVo2qhdiDJyHbqqJ5xGzteyJNHu76SkE7AL2cJzHjrdmtzcMECa",
  "key19": "3Bu5iTD6r1Z6tsc2ZRLbgwW6B633sNkHqCs1pauoGDygWNWTRmRhHBTtciLqN5dPCDDL4DEZAUZNepYYD3ygyhAL",
  "key20": "E44ciguKc3qVCM9MBaLYUSVFbNNKNH4vfyY7sRZ4cn3YytM67Z3c7TtEZrMrjYA26adhy3aH2Yo9HkJtctfkhqb",
  "key21": "3LLty6gZTx87jT4RNXARavuxqfXzRCPEFbGnvLXbLySxx8uYUtcXYTcQa1XHy1z8hkDknXeTz54tsx8yYM3mGqVA",
  "key22": "4yGbssWU9SNsVrLQCbQepjeVtEUPhCzFPJgjfUZ6v7bYL5C25syhw8Kp3H32MUXfdxAGSWKRnRC45L7cLvdbUxA4",
  "key23": "5YSi6xFd6zvnQBKVzXy5SYj3ighBGBTobMGTv323MmwXdVVaPbFMETaqezArCr7mt8jiw51V9LxeKFLQoxFfH54u",
  "key24": "4TjaFmnTSddzSJcj9habnJ5Lbv2mP3zabbBoBHGkToDNdUkF6LWriV1vyMiNCQYHWQVSsPcUSQaJupEa6S1Ho2gY",
  "key25": "5N7ff749nb1mcDduampMrdc1QqkgoCjVBeZkEVV5kf7dWMFrabVEzXGKc3tLX9bZKBLEwdBdCLpYLTdqgypLu8Fh",
  "key26": "4qSXJJLQL2BFGd4Nd2aCC6MohxzZDqYHUJ3WxsNsdpTNXh8cctgGxb3mPWotXmRfDqm4FNiWLG8pkokxsUVV74gr",
  "key27": "KNQGERxA3afDFw2uuz7HsWUXjG982PAfVb3RX8SXyiDrcEbvdzh5dLjQ6fH7fKbxupRYvoKs3UWYSXxpJdveRtu",
  "key28": "5hMahHisB9NgVzLyE3kKMSHiiRaqd7spuxLV5ZKYizHdmHxesrVbLtA6kFiVnp8yTgq8XBkkWMuLTC9REb872tXc",
  "key29": "5BQVaTFCzpcwgjfTayxa2NwS8LGjgBWsfY3fLDZaEU2ZwLji4b2dcE3FU87FD2rG8K5HC5tPVJHUCkfwLEPjHe1C",
  "key30": "5XdKd3ccP6zXhUcv2KUeR1rijUBgi7UvsjcFzgHZWK7f8Z9fKwsrfM3WT5hrumx2UGCZ9cfSGuoKRtRVAznziMDL",
  "key31": "644jKtV8g6Qcuk2YvrSnguQispQnUNVYTjiUMNDh7hcEyFtGxYtW2AZ8G4jkoou9T1xw39X4CZghPAqjTeNoMeMD",
  "key32": "3iiEG7h963gWE6RAPucz1WbEhdQdu9bV7tKCzJyg9SsxLg1Li6w6T1xizBrfDSb5FPdXpfBfXYpkM4WLFLaDx2KQ",
  "key33": "4pihLaCGXnbyMgFfskw6UbzzNRQoQTLU35Y54AzXouLUrqivQiZqk8MDSb49k7QeaQMRzHabiin4HmNuyWyJLNmz",
  "key34": "3m9H9kj8zRx6gB7D7EACFTdrfvhNPmYu389DZUu4k9Yn1VaG47S9YDVbhdLKqD91CXJjAdD9dRXvbAXnGcXhooon",
  "key35": "3ifzxiisbkRaCZdaykCPghVHSaExkmnPSW6RYstinngd1G2WuPFSdZjq82bUXpvVWWku8zT7nGRTNSjrmdWLhJKK",
  "key36": "3DTbkvUffyS6nYaZ655y5oXZtdmBu185qvhoJyn9q94s3fyULxTJyLxCUTT4ZKH4Bz5ht9p5CXjtFNBURuZiLy5w",
  "key37": "2c3uUJoQYcmW7NCZF1QStPnqr3V2jf9VUxcZnp3aoDaQbS6xMpmMJrqgBq2QXX2z3UzfGzg8bZtg4FdMNdwwnCR1",
  "key38": "Akszgssr2xrnShAXp8qbXBmmpU1rbPqSyX5WhSQUB5d6Z8U4suFbKPsWeExWtqphcMMuPunWxGfwRZcoFFXjRdT",
  "key39": "2SUHdvBYwSRFJ4B8Xehj7y465UjU22iirLx6i6ZVN9PEn4NuLKGvipMjh7Lt162PBzrTPdqBRRv2Ys9dfG2fXpTM",
  "key40": "4WiyvowAyDRJWuGHZ2oHF4rPtR26Ta5MyRvxZTySf8VMMjdzwkQBTur4KDVcCHabpd2MhZwz2qkEGQBm2gth66Po",
  "key41": "2E1m6Le6jpF5Mb36N67KLp4EdSCRczgNXzgvb8kxhgx9mNSo3KUma1RiKx5CUAYqmr6EqdhtjDfwnXrN7Seu6Vh1",
  "key42": "5CfqGhZ9FqHBCSxhCfSneEy6er5hYf5W32GUDN1gKScCSbFii35FCR3APj8MJG5mKkvunQGyvwzYyn8Jgc18kwDj"
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
