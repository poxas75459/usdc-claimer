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
    "5xT6KjwCj9rzKsZFmwtH6VnDgbH72PU1JoQq97sCCxyxhkiXW8PcswJK35JjHknhwjL7Fq4zJubmT5h2yKedyBvH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JnjRAt6j2csGHVnrTJmgDQ86immeEji7f7FhSij6y2iKcrAiTg4nsMHJvtL3JbxXETDeyJacZEXC3ZP9dTAiEqL",
  "key1": "3ZKmgDn4fnQNWkhUJ7uFJr8xAcySciLbxPpBMswabL4iNwBPnNerYGGL7nBj8VPaVxHwbswvhhyZMBJaNcnjUUP2",
  "key2": "4vqjXRTuynMmMXwmCyBozJMmumcwjBrqTfZYHp5zHkmd9Z9p1gkxCyTqsp9CKQfioiEqUJo8J84SBnyf1qPGcxHW",
  "key3": "2v5WGgnUn6owSxGoKf6qHeWQ8nP3G1tNRp4ro89Bu1LQSFQdR1Pt7K8n3WzWhYxbyYzPmhXqRCY22ZoPG6N7B5P1",
  "key4": "4zh3dwuxDP1uxHi7hJBPJQVtt1VPh8uFC95PxkRZqfxtXeymSEqiFDbTSgMqh4e5DWsCKExa4H3usHahXrfz9dpe",
  "key5": "56m623iehJprEipUkmWULyDTgwiP4Y91h2ePyxBm1pAWGYmHHSLQV6iNTXyvQRbXtMYaCAQjgqL1xjcwqyXt6Ba7",
  "key6": "5y6CY1YydEpqanoSizuEepd1sUQd39hJpPzqiuHe2rMf4AB1RST375Cq9bQEykTDrfxDeeD6EUeFm1LsAzTk7SDs",
  "key7": "4qNvvdrjtPqJJrPuCUbA14eYEAxg5YWPgk8Gkntc6fUSXe9obQVbupEQcLmR7oBqpgLupG9DF56ziNpx8WxiUZ6q",
  "key8": "4wGqjyF3g4F1f4z5vA8YVwe9328LAZi4ns3EmwRt9h2o1Lw4uVcMTGmJNLEALqptFEEYWmpQ79dqzsa4TqGpTsHt",
  "key9": "122Rfhc9bout9YTVHRufKnN9TZgaQEXNCgerN7WV85DdnzaqHoqFfknZ1NWnNgXfXksNSJNMhUYhBNf5FWVGqFmk",
  "key10": "KMA6yxicwMoofnZGwmDg6uZe4Uh3LZob8oZeoSbsJoQz74B1j1i7TkeLSPECg7kbb1HV16MENxQ5BgDjeM2znZm",
  "key11": "4crk63mQmiy4KxdFSvrXJqv6se7LSmv5zzFBTW16HA3wZ9k6P2DTb1CGrYDU2h43QjdZ8G4sFvZoQ7K9MFqaQxuZ",
  "key12": "FNrxzNkeioRxMVtpD7WZpbH1q8hnhPTdwps94K1HqKhNChWvJtWqfbwnwcGXBup1jWd8ZeDiovXHstXrFePPNUz",
  "key13": "k8t8zHz2f6oivGyRrrVutB5V1gVXycygDQRpzwKuLbNNVcdSLo81qHe2A7sfyuBtYo3z42Fyps3yTkue1LQszag",
  "key14": "SUn6zYGhyGEnoq6sNCNyM4isyVDJk6oMbs7ZsCKpC7EepVaNhMJH6xo7uLtMimdvG99rvCQWQR1YVLWuGfzjBPj",
  "key15": "5dsjZCQkuatZesEXsYKZqfB5spvnoimThewDUaLCxz7uRfPfMBMx9Ep7Ate3rF55JLKPGwZg4VfRTJb7MRwHuoKv",
  "key16": "szaoPHLFTYhc9UXdpADxHhqqTeLn7TDjoQKUVuUqx86iua24yogBDmiQgnqkWXFfDzYg6PaX4FtBvCJ2kWzU4QQ",
  "key17": "3jvnZ745TtJ42Hfiunav8Phw2sWT3aehnNrn8k39iKvbeA4dvmX2bHKT6E4zgk9hR1nTqkmN5AyQCfDnpBZWtgwK",
  "key18": "3wSz3xVGXjfvPBXmtEXz3MKR4t1DjR9xQgjfoS9ZUWde8NiMaRcDK4gc4US7Ke3Rxi3CVgJRW6VMq6dd8oMTwLov",
  "key19": "5s3XvQPAb6hg6ichsn81nGvKvzMqW4DWsBWaW8TmUmdcDsDzQmeQc6WxAWsGaEK9PwfWhRy4G5eksa6nRJSyeVFy",
  "key20": "5qwVrToh2Fn8mhuAR7EcHcManf2FKTJ8KHGc5x8PGuCExSbzqoNp1BBbyC4UUY38Gcm8oWPgpUSuHQrm2Z4NSmGh",
  "key21": "4nQCbt4P3hGRhmAbMrjrd6NVne7nx5QBwCbRY7VFEcZjLBNaupVbNX4qL1oycNUioJXhKJ1PqKdSfqQgRnXSJxjq",
  "key22": "3QbAxJmTiX1xC43wRHQ5z21WzMEFmKEXe35CjPcXR9J1hXLJpZwhWXaDhDoDNsbLMUfAr3nMokkNwYaiHtV4xdcd",
  "key23": "U8u2R4j22bxcbGjEEiF55ScutnmhnTH2nfVWmW6VPSXFcn9C9EL7HCAVSfhhoHwcwwwdK2Z9MGmhCykPcVuKhsb",
  "key24": "5KxLeJM3cRScafz68gtAHx3tfbsyEDq1tiXnzCESpieBVGe2EWjtBuQ8JJFmQa8Bhb9M5STKcAzpoaVMFAZs1c4i",
  "key25": "23AfzmZriPCAaKsGp6tjw3toLdJg22wYwxYRUXnSt6282AKmbr61kQgm489sjKzk7ioGzgPgYgtE7AbdxCwhzw5m",
  "key26": "cyDQ3u3YP6BwY2dKJ7HPvWA2h61hyZxhgdJzB288FTWVMZCjB4GX1fbqfBMQ2XA3Vft96nkmU7nJZ1nxaHtPtEq",
  "key27": "53tv2tNCRzjhuH3t5bzGmRqJE9ibCcnMkm4Z6xob8pQEDizQAhtwic5Hfkp7uwkQc38G58wDDXEANoA81qUMDPJx",
  "key28": "Pxiz7pcsuBh5ABoPVygJMS7hLvweYKivaoyNTMbzfrF1Ur64XXZbqDS9A6L6Tb6tPsZtMjapJfFXZWrCpvtUF61",
  "key29": "2nY1vQfdgN7t3Z4WxLZAg8DyddcDFcggazcvaG77n1vMbAQe2CFhnYf764wZXGcuh3vLtypko42gnDAxZhr7BGyB",
  "key30": "2CZaqWRxWydRobYyEs2nM5jVtX5vgWKio5ujQoc6xYfZQT7y5moZrNXUxiVLu868e1yL18bRaqCFb1i1qgTGzWDt",
  "key31": "4UFLymumtGjuBNidLRVLDBWwNM9PtRneQos5ZANaBrbpc9Rt8CabAvN1zKHxwuKqeUjxCQvmYaywL1SVZqZYef4s",
  "key32": "3xUvSdGSoNTncjMYbbrczHAthdAjqko78YK9c1fXKpycRxMkbrwVdsYrByUtet2gjkbuXCoYYEwToWhq6oYZs2PS",
  "key33": "65Q3ZaoPx9bcJThgJywmNBvEijTpGJX14rpsJxzcsX6vJTcdEfW8kR9wKZMfbS8LMuyLZ7QBxEEMAWdEY55z9Z2w",
  "key34": "4MEVApS9pBKnvdG1wyJpGydHdYYGWAVDiHTFohrKDeMSQvroXcL2xfDkMvW6Zsrit7MfT6usRXgfngwUUUsopim9"
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
