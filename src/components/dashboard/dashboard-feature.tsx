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
    "5r3dcBVTovDGUJbtWeAQNs4KpKg2y7vAZWbTTNhtRdeZv7ajh297prbThGP79ZcHjhyvygcipQ39ZUQwyjoctG4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62nsVt9Afhnmup1G97uNeBhUnpJg6Qk5jEyWAuvf9nXGNXrEkUcARnb7RyHb7wzgjF2T6aTseKteJywtEQDdyEeT",
  "key1": "UcGTy3TZhUWvAbxWh5NbnGkWBHRbBCJJRyQ7Q7ethgwgqnCNkKVefefnKt7UTtbxgwkn17HV8CT5TeLziaRuHVt",
  "key2": "5nzDnZP3HnPD2V4K3W6nNt6UYjtTVuSGs1nF6W7sCuF3G4mVYNjWV2ee8cLJBNJmda1EDe7qXD9BJAUyG8S3pGtU",
  "key3": "3AzM9CakEDgWA1rLcjYkEez7wJvL6NBsk38EbkTBL7aAkZymaMpei6rV1A3Lvc7b1GK68jQ7MpfgxVNGbpqHxs1g",
  "key4": "4vJd4uVQLFpYMwFkgsecCdQR5JFkpEg3WGW1ejbJvN6Tr9RA5xL33iFn5G1xo7T2sytzTmHd3HMqoEpWqgM2efob",
  "key5": "62wXwhpPwxCDuLoZ6HddR6LEYQJppjtwiaNUtNo6JMsWYVPywGDi9ba5pq1T4xWDrABfUyeMUzgUfFa4q5pad2kG",
  "key6": "3P4wsMC9MTbFTiEmHs3dkxqZS27jnCfsx5GSvXVkGqyLSnMhKVUqmypoqf9JuRMcLjVoCSt6Es3NmVY83vGGWXZj",
  "key7": "qKpbeAnzym93QZTrJSSNyqWUYLmQmadfKzMD92B1dczwVJjn3NfyeWbW19x2ssntGyn1iGA5woqmU8WfoVd31vB",
  "key8": "4uX3aTJj7EpmfEEKeoh4ex8sjhmvWuk1gjmGsdiGwDZ9X4nHZePhn6radQtQ5FKBMtuVFAkPjGSdZFPaSgCgAME1",
  "key9": "5uPE5eWPnm596NkSe1Gbkd8YCcGHkPCvZvZ7bBe72TupTPca3f59TnGv12dutdG3hHWWnKxrwDroh9R3K8Y2cEh5",
  "key10": "XGKHm5hL4GsfSsshzTSNH9QXqgVFe61DvqoF5NEPTo3QrVzWQ4mAxqokb5WHtbJuTRKKN625iidah7eXGSGUM66",
  "key11": "4Pf4ETz1v1LXKZW8tL2yTs85hwysfwuUTer8jApnyeMGgbarDxxdXgQKeCphikxKiEwChptAmKjjmQXqMREkQSZS",
  "key12": "2SNanr9k6R4tmmWMXATYi3WJRAVrfgM9UR6YtFDnr3PUKt9junvtPafuAb5Dxd9azJYaL38Wv926oCm34cFSkKNM",
  "key13": "rWqxNEBUMNfhd4NUbgDzzWLSRP256hBMedfPbxGxfuDib2K733YZvr6AhMPFsNMG1uy5dRQidSFHBWPKz5YfmuF",
  "key14": "53EEEB6Zz5qhPiXzk8yGW2LvasGRr97y9x5MdQQ9L5FocPqtnLoxv7FUncbtZbEkph5aqpoHHfohnFoLPaQVyj6j",
  "key15": "4fUm5qjj5ZFPdN7gsyVHx6uxmD5eJwLhfXfPcUC8gz4JAj8jDCbjf1ha4V5BEHAWs5Ro3J4UaY1cM7sQtqt11NDr",
  "key16": "NNd3LnMKAooFcxtSdJVLzqm6rz9ez2n7veHts6AFZQf5qvHz4RDjTeYkE7JH9BaRXWnZRGBbhZywcwT9Qb8nzoo",
  "key17": "65oRBbwWgWBRiTq2fKswyftk53drAXtETF4wuAc81CSBRJXbeML6RUHUU65oGkzt55DggTd3yEFMi6rR5tbdoNbY",
  "key18": "4o7xm3snGNSb2JiwFHJRx6nYkySRDN2TvKWQ3J2a3mX2tkyicVUFsFY6ja91iCGqq1NmEtxJUbQSmciRojBBedJj",
  "key19": "5bwavPEtxxctqQro6xUuzpkTG9eqw6RkB2tYiX1AVzRr53bntLQhxBzhrdnYbctWBQ7qUDWCHHsnf6tMvhEuhyjr",
  "key20": "PNSRaAum3bBvw6z85KFkbCQ4vxsWmjykVBEVTPoWdYVgztBZbtueUXeCZx59TS8JZn4vAx8q2VxFnJt34SNKLoE",
  "key21": "55p7xg9uW4NMEja7WbzEG4WaXTykKfHeCdTmq1DYmv9uay8WXqEdJt7zMzjLBRM6PU6g2TJiuquQh9tmZgyT6WHS",
  "key22": "4jJXaViXiUvqNYtwx4v7fuEtY73gu1VNMoqRCFGZRsKCePvWC4FDJEA1acuKUdGiSY1AhB6uC25vYf4AD7trEsX6",
  "key23": "3mxgKUW1yCgqSZawUBReSp6tLrkB3SbYsog8iUB7bnbaVEYck97S2UeW9LJV3GMENmAdmMMwdEetqVoQmR7cxzgJ",
  "key24": "4cnGP2tDwzuubQRmiKypsLkmfEi8bwdCKkTUWX1Qh4yNUwzk7iL5q4LtjVcHuFKFwjHe6WXsYDRcnZVU7UjUCstt",
  "key25": "4x2he8ZYLs5WnZb53yHhX15VXr3YLmsKa5XgfDubmaCfFeGD3CKrRmWvUhUEQPNtjQbgCTCCmRvizdCyueUpdg5N",
  "key26": "3NEi72fXU1VHB4B1rmccdUtaHkWLkABxXtuu3LuSmEmdy5AArXoBZk9FZqkncA5AS1kPPDTFp1CcoVw5L6eurLAq",
  "key27": "3ibhgnLCjLMht3p4xA9zvh4hztarB12YTdYfFDFPp1BUJQW3vYDhC4G1RoFmmQEYo2mFvQTvmzvauWvC1cqq1kFH",
  "key28": "2dhJeBS6UharAQ1UfwvzaxsrcdFaDHivenmtSGwJRqhyc4BheZorYdRffZLBqCwjrsZ1n78YmxUbGUKbNcSnPMqQ",
  "key29": "5yS8sfPNyn3b4dczjQgQBxL97Fai5Vm4cwAYJH4JnZWBA4pSh6BFiHbxVQEUyDarzbn7fEc73JS2WqSQtgNyK7U",
  "key30": "659emiva9CQWK8ymsjBMXw88DT3SMJ9x8nwGmmsoq6tevH1Tsc3ixRPPYKBXsfKtYBHH9gesU1cbQeZFRBhspL4n",
  "key31": "3rLFekijb8PSNE7FJvTbEmL1DeoEH2dTaGgiBCYsNgGiDLe4isrBmMEMQFDGXZGiwrnZDuiBc87c37dCgLG2Fz5w"
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
