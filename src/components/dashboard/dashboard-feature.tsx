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
    "NmGk7cLJwKGn83T2Ri5WBgaLHiiUbv6QgELAqJvQ7LHWxmcyKS92yiFNanhYZSRnvUM2A9hLW1fNF1Ym5poqpxg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tF8zSgtiNshAEri3hqqHh1gHcDejcSZqJZpUErWTeW5scJFgGbPrj66aHziUdfih7rJZ71VFXXAx3ZuBbPpzsuM",
  "key1": "5HTZQhqdnq3N8zhKunDFuMeWRP6mNQ8c4AkifNn9PQjxacr7zEJaupnsoE3tZJTgYw2PqzJtyznQJSa9krck5z5f",
  "key2": "3cV3UfCe4reEmuJBu4S9uy9ycBCvRqbVwhQbXqPyUjJgWTDA4CzUWpgzTCrPwm7wtHc7MNcf7aptmFHmsRndW7KA",
  "key3": "4Luk3CHZPwr72HHduDCwaCS1HywtkpFLzBcH5DSxb2BYLxN2EX5qJCAkJvBNN5JEpNrvQGPDkP4s6Uc99PuEnW26",
  "key4": "2jSqfFmmyq67r1CDBqLRWw2wAvKfD6xtbouN22touoSuKKtNf6Nb7iAZNibQchEXtJQ1AHtQHWBCxQhiVQY3i6Qi",
  "key5": "5BgmNbzBnFJuF51D9VLAkxz2RGFg2my28t8pZaKKtz3TFuEkp1Po2aoGSzN5p95XFEAbjz6jzW5qQEt6JFmSYhaS",
  "key6": "2n3T6wPTxSd8GNFjpNQdrVtRD9qnnttVYYP1YYkZ7jbwTu4n5zCGyaRZdom6B43DBKZBdNB5CrSG8TGEdM25ETSm",
  "key7": "5sexwrxTouEZKRofs2SxYkSQVpmGoNtA4DmCiPBr3MuQS8PFbNEyXyNsZGqT8PXf5NmjanGrrQy5cKGfpscemHvH",
  "key8": "3JAxC5E1nafn7wG1J3PcZfwXkNJLBLz7scdKEVfzzfLEPgXVnGMvB8ZkcykjJhHf7gaK22SfAvXzm4uKhDWe95XZ",
  "key9": "3y9yNGqzQo7cCfCRj8Uo18zyuaqXWJsHr2jpyu1AAkP5UW7E91qEFcewEPfCkAwgzwryMf53pWohvxtAhRGj4miu",
  "key10": "sBLaDoma98GzzG7NM1JxJrCV9RXbxXmaBt2XBbQqYCisbfieQK2UEGBcjPmSCxxUoTZgEdiu654gU4dTkdRC48a",
  "key11": "3qE1VNeRXefDyz3DRy7jufjeDMThtbdqnCddCMV7B7oAdJc3Bq5xoFHZ8oyiGJS3KsaTBYHdKuMKnQmxhvnrHRyy",
  "key12": "5ZWfQJATeGJqpRQvgKsLnRD52Vm9QYSDRX19uwWvKBuSnjYD7zWbCx36SDLcnJuztd6DG9PM6SKnKYGcA8SgUFnD",
  "key13": "9wCQAccCxiC9k8ZN5VBjMJLDfMccZXLyuTgWCyCu8JJkJXsdX3wmM4M2Cp814ZRAQKSAC1qbtJzyk5oAsg7L6Py",
  "key14": "3Hku9GuS6Zke7Gv4EmZ7ohuV8T46sxZiMrwNqiVBs9x2KBuDvC6CcLH5dSzaKUjrdZvPh7reMn8155VC4WKQsiUZ",
  "key15": "2XhumwP6b1dwxGscZx51v5ZMydekZaQV5eDgcZN8jZVHnESpoefFR7GMbqErS18kk1FuLGwoKqaFuTqnd7NqbdhC",
  "key16": "4Gb9DHqbMQDmh5EhMxo25odV2WpHGT3UpdM4viuXzTotqrHLvj5DCVr1HqJB2rJ4s9XBwNcJqgtJbWftTeG9pcGY",
  "key17": "2Et6VQf8cUahVZBywXA1JosheMPDUNetdbvaZQttyapBf9EJatHwKvzhUY3qfGcwwVW4fmq9jvp3MDzsqYNM4kDT",
  "key18": "5gcia5WBPXLB33HDa8uKqdBEde3L1wvdxx2JpWj6X9hxgxHHTGTX8kbEJdTnvLimD3GopEAimT9a869UpoHcJr7N",
  "key19": "2i6PsARsV2e8uBX7jqMQsjmjiauT8ZSveiyC4HJcPRTzxUVrf46FLoT6HmQGXGjiZFd1qd52ZwKMW4B3EbzWyAvu",
  "key20": "2bdfAS4UARMKMqgYRXCsgCPwwtQBGhnxHu2j5aC1duhmP7FpCKBXnyyZnwVSH3BQ2TDdb9GWzrbYhA49bWs4Df1j",
  "key21": "6ohjVCFj5hLmK87RS4PKFyEgswqgAPx3DuSQSYknBLNLBMbEk7Wc2piAi14Uzqo2CpuXExWbzBegLiqBkes3ot9",
  "key22": "3fY2fsGjbz7Bagxrdot8qTbENZTJ1sr3pP1xeNhUeCt2RevtDi8Q1G6UAmMWY6dHV2A4aaUz6bsVgr8SQkGwSYvx",
  "key23": "4BXhLefJooZjjq9vLXToiE6VBXokF8eLBTaH94esxn4FbZLBTRJRSLH9Po4Skk4ZJMq6CvoVtaxfxFSA2Yyyv1gT",
  "key24": "5UiyhMDVURzusC1vqYJqQSJE6DCqdU9od6DQHjeR99WmzAH1jLrmjVMDhVUNHcSmmi8wPCVFK9AmLiSokncQNMg2",
  "key25": "21gLPmj7iGkvxaN7PJMgYbiUSwCjnf95UBegDSpv3fg9LRR4He6tAY3mGBACzkvNuzn4t5H18sEKnj4485KKgx8X",
  "key26": "2Sr4oHbacKpiBx2CUsvU5CPCmR6JW2xCmyzJsqvEe4SHEeLpaT7fjAYgRWPULc8Rjq7NPecnJA9K5eSQXQtwgdtc",
  "key27": "B65zT6Lj1Lj2J29T2a9iHeDuBRc7Cm6VFGWjoX1NiVdMva5chneLDnNAeVXy8pCLWS1bo2PcpktgCUviFV6duDz",
  "key28": "2nqnSSFSTQj3Ka9AzMtrWPqunVFzMy9MPpCq35NK56f2TkQnmg5J2iwQefmRsLkzWmjBYSCMEdFNrAJiHVGY3Jqr",
  "key29": "5BLt1Sp57KeF8VhespypCPxc1ftn4g8dL54U9zBgwPuoVHWr1RWwMm7m3FyfAXGJzFjvRKEznKx8MdM4ueGzBx1D",
  "key30": "4BLbVoGe9jA22n7LmSxDZCSSFujXSEAvNqB12E2beFUtiWHFvt7t2HgtD41ky5w3rDBYioxShNxAuvhDs7UFdGG7",
  "key31": "2wTNHH32N6BiEMwmuDfGtsyr34MPork9D3ZMafS47grZA4eSMmJXktwhbFxNapi4GBHN1FSijqT6UvqQ4wJSDmhM",
  "key32": "21s6WDXcd1hGomUGqx7uYtkYpNvvQtrbkPefzRWR3tfQmxYx2DTvhevMT3nr18Xb4XoEjpCQJ2uZyrbvLz766GUe",
  "key33": "4ZeuZSEu7WRTfkyrfoqKfYGbENP85GVyCt74BVkjsz77ffDsEm1VvSryTshpETBtfu56omERQSnuf89QwyS4dza",
  "key34": "3x4g8KoPhdhHV98o5ya2it6qCkCtWLnAZ2ZG3dHXkxLM2H4Jrv2AUHV9sY17HfRsAwkabuYvkDiJTFQvxKnpgdDX",
  "key35": "4ck3UjC6M2Wo3SQbuzWBHarDbWjxWJktMkTQ3P1YUezhXcFnWNg3qmF7HkmPphVUvF4BwmBG2yazNZHLcpmktFF7"
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
