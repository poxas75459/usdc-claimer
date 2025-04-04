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
    "D7eZn6TaDAbSHtKFU5w6hJ6QmiziAKQbio68DjmsuhK1tFy5QzCFDSpGzDxMD1wdNQwK9PfBd9pfmySRtcK98eB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JY7CSibJJod7xQJasX3oN4g6X9vzUcFh3rjT2pPjyc4XWCDeY1VdsquqMZqsnvgu15vaMDrzmzB16h59kifupPv",
  "key1": "SwVrvgHAj6rYLTam8FVqT2AFXXntZkKyfPu5jymFfQZLQfoYUtfz5kTAjgg5EwiwUgBHsCvWecCK3mSGPA4PevB",
  "key2": "5pozyKM3FXygX7ZdSrM8XB5FxE1U37qbnCioL8bccK9CEkp2Vh6aNVGodNXyXXsyFvniDVKfo5N4QViLzY83JtJK",
  "key3": "5dDJDoH7qG8GTY3sV9E5N5wC8MpL6BuCGaDt2BHTPvdaFrZeeZSERsimj2FYjJfZucf4gHUGnpURyqUuvAm2LaVx",
  "key4": "43FcxxdMAM8avZYy6DTp4hh7oSRbeoejH9ighs1myceBSgjBu82sN8gEX5tUH34Bs2t3vZbQoRDmHBbzmceNJeq6",
  "key5": "2yjzVfozi1qb6MJnTuPLi2Uv6ACtPHU6wuFdg2iruSyM5AK8UipkMBuipXoUXWTa7XAbkcNUj3HyTKiC3j6pxjag",
  "key6": "7yhZrtqMDCNngpqvAMKuz3evfksxFccm7WLDZzg7gub8z8uLKVPfFmtDtN3toksPBS8tSxjPfGJ8MDHyEqCYG11",
  "key7": "4ySkLWDZpgYCgvuQBnWWYV6CRCCT3Js7r79m18U4bVprkLfmcnnmfv32kZc5Jp9GgKSjs66jwV1ehwik5bunU6fE",
  "key8": "47hbVCXmCmKD2xvZ4rhe1AfDCaak4AJkCSucgG1Ni31ETiyRsrQmx1g1NsCCDsTq13J9iwxwarLN85A95bNjd6XQ",
  "key9": "3wvN1Zr7Dyjn8d4zng9Rzuo6Nz4L1m4LXAEh9tok1XQ6YgZrkKVrH3qfR8XbM5GTVjRW2udpLVotrv5xuiD25xhW",
  "key10": "5sdb6X7k5Smbd6dcx5P7UT2ELEnRgfwkmFZGtP31zzAVoxsBHMWoNyWJTT5S8CMKZg96L5bnbaWiTdAfUS8hHyzx",
  "key11": "2TPsChbBF8EozLPLnM3VQ3vdV1E5cyaGc6omTuG1EP5awHeg5CEMcW4eicYzoq8kQaiL4yhviVRLjYhjZs178eZW",
  "key12": "5o9AoKr8DqrFHTYuzW6F1pNiTWErCvrJHYkpzehWQTeTbnj2jcPcghPV7JtMqzavaadEjXokmjE84dibrM1oPM96",
  "key13": "2MyvLEySQKCY6sEkX239mk9Dnh3N2wVCZCpKanevbL17bwq7NW6pXwdLMDkH826ZtUzzaVtjTs2tJE6Wt2HscrMc",
  "key14": "5pgGnkgVpJx7woJ5zYwswi8q8TTtwipFH4gvXz4PD7J85uMKDrNddC6MS4LzpqbLwLmCqmASa6wQLh657XSobxWJ",
  "key15": "ECNDPjpX1oUB3GVSkVfjbDkHRnbG6UCHB2bNtHbpnomGwTqqT9FFwAXmaGpcRa3Ri9LYz29zq5PkppjsJFki3Ny",
  "key16": "3QRj1KLVkkyyMgnXDQL5yyHfE8v31aqH6FZz2LGrfzreUr3WJDTbzr21rvJFKdz5HFdK6ygPyFg61MpXsCyeRP2z",
  "key17": "3ppke5FWYn5tbTS5doDFQHgtAzmqNNwSAH5tKioSLHWvKq4seuuTDSUFaofZ4Cg9gtBoUKQbd84Bavg95D7t8uPj",
  "key18": "2GXs8BEjDajPugZ6h5uB6TaffV2tZDvA2jvArHutCY5cFwcfCxYRbxdyNNCnAFAHWgCuAdnzVu2of1EDDq3cr1F9",
  "key19": "4SnZcBFZrLvYC9BNySeaVrFH1CGjiscVu2SxXCMbSLaZdBQD4RMsBjz6TLZhhL5R7qVhBAyYNoGMcWcPJEA83tRf",
  "key20": "5D8c1yQ4JuqUmaxogZY7yfBG8TFVTFk4G4STn2BGUKVV6qEt11YTADdYhXCS88FD7Qyj9iqSp5LBn4r11e6s8ofn",
  "key21": "3VtASciAQJFyJrgSXj5FyCvnLYzsobBfc36QdYnsGQAgboD9cAUBAK3JALT3Y46MoBhwbZJ4Czfizs8kqeBwu3r4",
  "key22": "45xYMuWugpDRYoT5ciiRkqNRVkybCzEB5rKTGcC6NrgdfAsXLuRwBmX9AQQf6oAM4TjhomdfNBdpcJuonUoqQxK1",
  "key23": "4kpv8gvbKmUPmwByFPKBUEuJBASVbvHVhtgFyWJ138vr9Pv8NT3i3XAvTxY61sVSywzv1gFvAoJQVuVaNfyHp2xy",
  "key24": "46BbV9BZkRprWe6DyiBE5BVXhTqYHNhzruJQ4NztMvMwkidJWDRW5ecQ2idbeUzgzgr3RZGnJZkqT515Ddkir8r9",
  "key25": "2byz8pq9kosbJ6c7XxHoF9gPaNNEt4y5ZXbf4b3EGd7diaFCfF9gd3EA5edvxLJ8gWy8SWJ45f1eby9fCvBaX6bq",
  "key26": "5Aku632ZXr8WbAMuVNh9q9znHFv2gj8wsqvoaQnupCMymyui9UcyxUbVJhpDMSJYp61KZAHyeThtgKC9kRWkMysK",
  "key27": "34hJQft6B2CWfEV6fwpMxb5KL5Posq7bpfh8DMfk599A1U1tqc71MLPYrHSjQpjRX8PdPCPQp6hnKWEMjCHjRhSy",
  "key28": "216XZ8wV1TZdLhhe8GBayyxHEooXgmYiuT4fBJbGJz7Ur5qNaJHoG73J8WNfL9wjRdviLxR6GfM3DX8Zy18PH7Ti",
  "key29": "5VWtnxXFzeykS42epExv1THuGzJyeXcfmQTfXdJ5QNnmgRM1XFkn5CfMDf4XLuSZHNSpJyz6HRPsfiRByBkavFXC",
  "key30": "2LS9uRg7sMJhPVw6VF2o9bhUkaUHT8cHLMfBgi5yB1ieyJqiTZTwm7Kcr1vAV5SfqBJpavU1JHXwkDV2ZHPCXsjY",
  "key31": "37DVtq2xbUeY4jvtQuZeV6mdhpRBqH9zf7QRhqWUjiaEpCxUYjSQqwW9eFRBzmDQnhjyd4Dirgxj6CK7MVmYQZw3",
  "key32": "3TqQjeZsTaekSRkMggEY185X2H2zvhrt1jDQMiVN7SgiZPV94Zs2faHwpS6obNArE81gvYzPdaz2GVFhkmAsH7zF",
  "key33": "2aSPJBG36ViyfuxiSNEAsDssWyqnF6VLC9B18twxwfTnpw2Y7iyKLWAmZtiLr8eCrJoip42yPw8gjMd4HyAUdCRG",
  "key34": "4SqUqmqgWuBLHoqnoSJMuEjftxeah3Jz3wsdoByexcuKtz79sEiqPMNCs91E8ec2Mn8Sd1y2HGxpWcBbDGcwzbsm"
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
