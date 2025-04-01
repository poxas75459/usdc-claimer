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
    "5ftfH8mTkb4gRCxqJXpKBiz5U6wy2xRBtpNT43ZQQNKpBgdgYF6sS82wXAibL3BiPWaAgYszV6nn2vamaqRZyPkX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21hVZwonLhSyho5zEaHUJkikDTF5B94tR5ZmhTGAQWmULoLDc8spey8Z5r3iFbcnQcx8sSy28KEVXXjJjoSEetjq",
  "key1": "2UPq9NtszPGNyJr4T9Dpz9YUdznbBRzNW6VXpXp4MxcqFASKgpKx4tFRJPTYhfaFjcJGp7Xs7vyhP8UHGoRTwAUP",
  "key2": "mTsArqDgPVTPEzeacV6xFdEQMSM8VS75wRaSpQ2ZdoNqvKXmaY1dKVNtaVUCna3EespM6X1FE3t81WDzX5aPG5K",
  "key3": "2cwHS4yrxTVEMS6q9FLLvecTo5oo1noufq66uK7NBtyEkufLxwucHBH3N6CFbgkqq59SGB2tmm6fVUTPQfqdkLkv",
  "key4": "55fG4zrE7aPNcprXAZ7Eood6h2pssXCVgbgcdxrcNeJ58RG3SUWjrEdpTvQwbD8hL6vBSsf8KawwtuS2TwZsscLs",
  "key5": "T5ttTfqZkV5KwbGzjX6ykfvVg1deH8W3mM9VnAN5nwqBXff8JpMtriFNdaQaorUqChQa3UCeSbqNrYTbHpiYpXg",
  "key6": "2E2dkWMX2jBDMN5kFZKBHW14FQUdvaUd7dsUfNdJNAwoZs5wRHTb6Knqc4Yz7vYE5orzJViyNwdHWomqEqN1j1Lp",
  "key7": "4q82Ky2ACH33RFxWKNGceazDVPRueWNK49SJFjb7H9RdZhDJ1WH62qwjgqh3vXzimx3pACN5zd35XJFD3YjZPcrJ",
  "key8": "2kP5H2YDFe44nq1ELVQ9Wwhi4qTfjNL7KpQwDz4Bz5bzek218Lw3XF4ph9BsGKjCZxPd99DVVmyTv44EsprgaxnS",
  "key9": "geZx6G8WQW6RyDXA8erkYTkQKqJgy55ig1PUypSrh9FeHzDxqSs5Ypwt9SvCN6FpmWgB1pRuzHfG4p4LzzPcbpF",
  "key10": "2r6SaLRxEKMXyJifGKRN7c1XwgsAUMMWb5MxhTqhX8Mybvw1aMuynqxXYjZ7kKwVqtkCM1qTWVhxp1jb2UsJEgLz",
  "key11": "2EdhNd6ZqrjpSVqKv9gJGjBDyGmW5X64h5ok5SJmiNUR1iKQj7uuDhqkxt4PEMc8mipR5cKXy7ZaNbHepiT4g5SU",
  "key12": "5KD59RBcmy4Siag9kV8zJ7QdxTR9a3sqio3fHAM9AgCCPAb5ccN2K4SKKFAEvXe4zKvzjzYUsuiPQ1gTof2hYqXW",
  "key13": "2Qa4ksJuzojBFLLHyuHs41eeYZwXTWwH7dD3MyNj8c3KVMZY3rM438m8PoJe8TVGku12uTo2uQJo5rhEkQGKjR5d",
  "key14": "5Gc2MmSVprL9tKm3jwSzmkTjNtweEYK1zpXUCVXnvuR2NKgdJ5ivL6pmRSmb1sxfdcdsrLDzcE9CYXGNGqU4HWki",
  "key15": "299EymBUw8nFCchfSbNTW2VumCEJnzXo9VerH3PNcep3mZNyHQeBkvNzFRdgLNh84LVTrwjo7XBTi9HvgbktSrEg",
  "key16": "4jj2CPz2wV9tAnSiAjWkYSFvYgW6ntYKecbNMC9rvWiUihBAtofeXV4XdaXisqRfzuAdnjbN7nSVJruDnwCxWcYP",
  "key17": "2PyQKZb6nPSAZfXmSohjS1fqbKpxcX9zrYBnm9d7mAsYrGtt1GJNcoiRVWk1EcG2etq8Z6G5nowziYuFDKNoNVX7",
  "key18": "674M1KWP49nFha9dQXV6Ti1629MBb2iixRmxefGr9xMSWkWrhE9yww4EvF1M4B5Eu7nNyLVpzYviJ9qKV4CmkAMF",
  "key19": "5ZChb3PHSKYGx1LZd1hqe8HndxFf1xgZXdGjrivhdzqTh64rBhJm7kBSwPWZFqamd4pB2oVu8SZ2urWRki4su2dm",
  "key20": "2uR2qZjFjfPHufMZSdPKzgHGEPX5gec6vYgj17MW3d4sH4pGQ5FjL62quBbRyJxaqAyRBtcddhtLzPmQNLWfVx56",
  "key21": "z5yFL634iAWYUXoAuaHf2DuyYuczUgQrT5eEoVC1maJMhGngGXsv6WDVKFVvww82Nmpt6CC6rHU19veS97tjrHh",
  "key22": "3jV4yAUy34sxZpSgMWzjbraryUPtV2xyzKq2F6JxuS4hQLdSM3SxYp8NM89ZKE2fdvksfdA85PpThQVXitfgsEQ9",
  "key23": "3ixUfkCodRuQYsEpfn7tSVL2wdGLAjEQ1TApN3ntuKEMCs1SfD3jHNQegnJ3JHNLDHnVDp4MjAvDRLdvfUZtidNo",
  "key24": "4YzxTu7XCTb849v8opyboc7d7G6Fg56WQzCDXBdK3M5MzhWZaMYowbJdmFa9GLYKcakfy7JaJXeF38kZtwfwM3SX",
  "key25": "5ZitTXFjLND1vWxcq8UZmdXbSpkFv3SANx9wq9Tgje4o346WxkBEGQ5U4za8Ec9T7W7rB36dBveLwdgo7NWiN1sj",
  "key26": "24cJ4heTxxrWXEPWa8aCPPVL9mxeXFiJ9ytZESx7BTzBgBWBoKK1XGzRT3ebC2y2p8mjKMM9NiXEupjBARSXk2WK",
  "key27": "3MVztECknANz5mfL46aKaz1vQYWTEECpy4usAE526hvKJe8msJQ7mXcZgb4Zd68M2K2UrA66CQvbHKEECqoW4ePj",
  "key28": "4jthDV5puZeY6mwKfdXSyzYw9yhxmR6vWzq4fx52rZzJ6aj7QJePbzDVa9V4CxwHUG8f1X5g6CnjfsqZvzoBkamG",
  "key29": "2wNUHRwqR88HVgCTRTbmdMJ7wDMUyP3NyCbCFJdcmLSFnf8JD8v7ZRGSuKporytR96FSDeMnCgmjXjMfCHURV7WP",
  "key30": "5uQg1HVKnGrS7GiJb5Vqdw6whWpd3j2kF2NfN74gQgPxk7uR4L961eimdGesrKyzwj6CwuD2gcTACRiaavB2QUUz",
  "key31": "YWX9WQi6TAUt7EFHSC5rMG7DN5CSjuMwjCdzx9vNKzYJwBFsW1EPJiJgQ9nNrdDrLUCsLjrbACj8gf8ch45xy4L",
  "key32": "4sTnYsBEGcxCYQTNTX3cx9kdcpAUvyNcRHimL8NPyZQNx1BMjzQ238aqbwvk3w8LMLMBPNJCdrgBcp9R7kJm8o5N",
  "key33": "iY788cKn4ek3j1UHq2qKJXkaqwiuVCpw6cKEAuwGBFuGsgu5Xd5k2PagJ8o8dt8BzCcYDydbRYhbyCHp6eZ7rC1",
  "key34": "4C8b4YwFfYDG1uH9EmHkzsTXkGkMPgz22rH2tm6AesUnUbAvKW3Rnd4g5SDt9HKJJPK9ViUkpTg9ouJu8YeaxTqp",
  "key35": "JgTABhzAg71mwhyLNxvYnVoiyfGQ3jarpoJr6oBLPX8jNXSpHi8BySPj8fKcqgq3kXL36Da4zDvo2xTWMPaZKum",
  "key36": "27hrGeXUYaYKu7g4g6y44ZL6sc6CJiSJ4maehSD3nuWTAAeVDCVSQ6sTdwbJPAEW1k8Dq95ZHpw4ag6HgtrTaKdK",
  "key37": "44fsKZGhL3QpjVBYtqSx8XCafYxYCeeFb1BYNiuqbSj26yKkGPr8NQjYFH6JrZRBRnrUpPY9Hg6FZ5hHRd5aoum2",
  "key38": "3biDPYwBV16Xs7xh7St9bEL6sq6Hq9kYnHh9cm8BcnAWnbVhBy35s6Nk9wjWFwJxspZj2wPxESBuDTSBvz11dJMi",
  "key39": "5UUBVo5PaEdZ7L6bpPAEjqN6REyBLrnNRKajSEBxNp8bxtJZMTi4MpRN7BLrsqwJonC1akBVUMSn4gWSdNmpmGXB",
  "key40": "EaCDPUfpbdmD61qekavU8XcYiufFFpVckk2a9SQ5JdKjuGyD1cYqVigRcagzMyDbpmYmPNJg582xUMGzc6JEpa3",
  "key41": "36eywaof9dfoCRfKNXorRQTyWNJbor1BiJHG259o8mPEWT8qK4ooFdDFq72MWUHpax24oEtDM63C55MwMexoDH5j",
  "key42": "uY1hupckNeAEqRVRT6f1U4m41TQGc4svGdyDFesDt9wqx8YomeQrFYu6NaqTF3FxyYguuEgUNLEQu57ZvG2onrv",
  "key43": "5RnwYmz9GDhsFh4D1bw7ssdX6iSgHJoTXbok6ovACWoLiAnLUMoGBK5dTz3hYS6oitTBz2U5yzBH9NEuzP5yvdbh",
  "key44": "5PM2PYYKXsDwkAa6RJLaZ5ZEyWqKMqDXre9ifUuLCw6tYf9Mzjm5YUJkkLrYCREzyxc93tdoUdYypL8irT4LDeRR",
  "key45": "5aBushdE8Px1YfWx6yUAzqqQvzz5Z5KiereR5f4d8FdZd3firnhvNaHsciCf9JE4uQyfLDefYKB3yWyituWczqYM",
  "key46": "5T4MGCiHq3Uar4XxYrDi9Bn3c6YoW29d2mSytucVypr2rJFEfrFvh7DbJ2y2L7AuMoPXW7URoQBQ5rzeHwUKdaQr",
  "key47": "3pYwMKaEnegRDaphm1Z7LMZB9gv9iKzX3cpmVjXoksxP66nDmAcdctySePcm5DSsRiy368zy7jY18UsrJTBGRxiq",
  "key48": "nnv5Mu7WRGMu9jHVDhM3W9vWgcmGWrEgHufdomntucyNZBS6vhXRcjKvFEBgC1dQXUhG6jPg9vKQihsam6LXrXU",
  "key49": "4G7vvtqDtvtoWtQY5HtaaUhYxPH8kPVSHR8WUby1339gDU7nqzkZpu9cLXBbRAHtzakWSPJshi4uShunLbniiV5P"
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
