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
    "AQohbLPJ2r1xqL23TzqwSRoN7J2TDQKrfoGKfjs2hUfpFCUAuaWDu7RfMaf7XQfk6up1382t4ZRuoFtbgs2RxkF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dtmWXjb41a9tyDVp1zXqfkBVsepj4cAV7GrS8VU6N55dWfdDxMzJAuSPMLKtcgztUBpxKvXnj4tBuGVcsRQcRC8",
  "key1": "3XG1m2UrRttrkJyQzKgyq2sQL9WvUBMT8PQJ2Q2Qsb1w6v5BGq47bpmhCeJ7aLDCi9zgBuM5yFHb1o4sfu4yDW6S",
  "key2": "5r9AmruM1cGT1hdXknHYQYmkhgTPYbDCeEHyGvxnz3izHCFkypbF6fifvowPnAvnKAJ8YyAtjoTuMwCWzdgxAVix",
  "key3": "4npKukuw4AB3YbPw1Lb6HZkuo1DQp7YDFpp4fnWELVmmJ8dRon6QdfkWEQ3ayXWaixySsqCPnWvbAZighfbx9rdP",
  "key4": "4kVSWCmoFzzN9M2PFKMVApr8w8FHyT8UvgiaoTX62YPQKdK16F62k3b7aHTQYUejubFcvoyPQWsoNxcYHo1NpAjr",
  "key5": "b1Cw3tsp9rVFTJGSmr6CFnWx4Vd4oK44D8ZuNZHwW7e8MpkHLm5EYSGaAJcuqnK1znopkM21EHUD6KNxNDobkQx",
  "key6": "7y13ctqwEbi4SVaToSNM7XxnhYs6Zm9zU3kkq1JVvRHH3e8FJdHLU9hLxiTm121AcfQ61Yb5t8oGDc4sLkgE4MJ",
  "key7": "5fV8VdaAqLmcvG1hzJyBLqHoXBWRAepA1c1QqoqJKTXJUWeLhfMsAdhG2zZZDmKhAMCdWjTURLXRDLU9tHyWL36e",
  "key8": "5uYvnWspuDdnH4Wfksyhip5XjYW7fdFC2nxoJ9Cxc4dAXd3VmQUunmre3hkRzhfAHvBbLqj4FLNi9pQGEuLHMK2n",
  "key9": "2veXoytmkKVsutgKNaKxoRXwkWaBfsTsZpLMH3z1bSG2Q21FhrmMrBACYomc9qSLkvYSXBNsRB9LJw68wu9j2vTp",
  "key10": "52fXY2NX73yZWKzKKhNgMg8sE5TPDWeH1TYLNznKjoHgzYqY3y4PSchsSbLwQ9kxjUNgyfVKb2yYcYNLaPXDAC7e",
  "key11": "5Qr7Z39BAAiU6ZGS9biirWnfv8mBoZq9ejxAGQmSExcdjEQFGueEtSb2CXxa6aMwgmAVYXX6JDYvHihEwhYf3xdc",
  "key12": "AWH5bDT1dYCKGBxEKnnxnTh4h5gvsbDPkdL3EgqzF6anefXGRbBgLxjnS2Dq2fNTMBRws25aQUYYeDMUj7GHZTB",
  "key13": "2AC6jtUpqH2YkTwWB4CxSoYT9tFTU4EXhj2Mtt31be3DDvohwpvBEyhCtLgzWoMsjjxxMPWpdghRcNrTqNTTqzA2",
  "key14": "4pbyvCrF3msZyYYBcih2Q4QoLGU3KMdHQJzxXHaRhndPsSZdzC3cs1HJhjK7Hpz98GTLeUuzPtLeD7iHVhpEhr9H",
  "key15": "4KyVV95A7wxh9X5rocn5HdByD6s7LzaL3vZ79DxicDUCaaXZuBmhkAe6rpgRNp18hBYLqMpmjaEKYzmhENQJdYvX",
  "key16": "3R62FNuv3ycbq3bW3ReHkwRjfjc4byWqU4WdBENe9D2KS9YJoriMyQvKB8zUhaestbQ8MNy2e3qE8CVWjbNCzpbS",
  "key17": "21iiCPP3K6jdjf9bNwQTX5aJn4M2cH2xH8mD8ao1n1uzmw1k3RFspjYKat8eDi9oPGZ2wRgfLMRHeGquUZDu5phE",
  "key18": "2bjHz4ZDEHedyHoSFJj3sPJEdwB55KjCg6KMjE4jP3tu8mv63MvwUWcYAkTEaveHx3ejnwjW23pZGbEcUa3uTn9T",
  "key19": "2JgjAuU76DkgmiUMmnELum4ANfNarVfezttQDMY1CuFAzzvBoYznMkkxsWy6V6QuZ2JnGr7jizm9f9sit2ukNJLz",
  "key20": "4N3EHBYZ4K2sPeZ5DS8DzyqawZtKQtphRM4sD1oxcqGDHGCNXrtUce4WW8gY4HFGBWnncU5opFkoWZSWmSDtdVf7",
  "key21": "5xrxjs7sGDAMmKyQsDUKvX3Kc2WzaZfTDR1a2xStE8oy83Ld6b21MYFnPLBdYBupBbqKR5e1BPCHkgSnLsbCo5DC",
  "key22": "2AWpdDS9afyZd5Yp17yMd5edHzDTctU1jjP4ozaQZPW1jpFfkdrMSY6WSCfqP2BxcegQz7i5QpDZvQBjLm5z2MRt",
  "key23": "5uZ2NNN8JHdWwejFWWiFwWt9uBjnNb6DoXZGGovExxoYspc2uwbScHH3r5KcSzhZkF4Qpa8DMLtVcwDtVjzqihVv",
  "key24": "46qUYvR1pUXJsTTq3NphdjA2AMCgYVxjAVv8fKx5A6Mk4pQTgSyMi512zmqkZtkRpUD47ZymUiHcnKDt3jYmbQSE",
  "key25": "5BaPNWYZKpCEKD4tRK1dvMPoVbfMLLdPEx7EMQvLjP8KeAC9fX8yt2FrgkBFLGrjadYp8vVNN7xEtDifyYYEPQ4y",
  "key26": "CgKepHJtuSufptcD75A6HFAGRBddSPfYyc4vphpWZQsZeph3bAZoHZc8ANBZ2zWxcLVc5k98a7PUxWrsaA8oYqd",
  "key27": "4vUvdY1XcWuEGnATeYLNjs7Nf2AebCCpu6YdT4GXAJ7wkdTXuDsAnw7Fs8nf4bpcR5xk4sb86jsKDrmpBZhJVQNw",
  "key28": "4skV9T82EakytZNp6b5hLdhfEAQA8Pw9GdpQExkRo9pDXGREUdUPerPrRmUUDj3ABNi5uFiCF1G9wQTsKzmgBRrz",
  "key29": "kqrkwhE9KVQza9vweNrwsomrC6aDWVvJJLtgaUEwm95JCtQ5NExEKn6L7F8GURcGydYH6zaGVnvVt33PAJUb5ZF",
  "key30": "5hFEos2arzbFo4GL89kyznzaTcBnF4py6xbJEaVpjL1Vr3C8ow5X7MYj2bYwXYbhPTCbR6qdRUYZWD2A62xNEzwz",
  "key31": "VT6cM2aSNzR9AsMxp7Ahna2oQ6PUzGAdSWAY2CmQqNwiMwYdkpvpUgf6jhSfm8RW4zntXS2VAh5AaSRoWn9qWcK",
  "key32": "XUJYNPCRWs51mNwJMyTsgb3SzfgzdFy94RPnnrC2aAHW6zFtpWwEsBCu66mBW9Yeie7Cip2Z1ATP26NBd9jSJYy"
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
