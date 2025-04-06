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
    "3a5GY2ZyE8dczzqDLLPdFyo3GnWJpbsh7EYF7oBMVHA15gV1jeZwgFPphwVMKs4pp3YPyLaHn9XnAcpJyxFf94n8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vLYTAZtYEPpMPjD3HEJ9ryAw235LYcEU3r796V6PnduW9JY3L6A6p8c8G66ey65o4HeeSJdJRAHT6JTkciLT3pn",
  "key1": "4THShA5iBaEUNAwY1eg7dgFWjh3GTkULCVzLZDbFPkG8T1aptpT1jb5gZPMNKtVSC8q1PBumRtrxtwevcKqVgEhT",
  "key2": "2TRPfRQ7xQPYhg3x4B9Ybf1PCQUQiRqD3qyYQ2wNSa3jopnrThTrsEaTpgixVyWHPoDRrmucd1RvDH6AhE8U7NvF",
  "key3": "5ooSybyLPTcXAAVWjkyByPhDb6pmCANqBZXcpXBmTu5h9CnymPP1ovsuDQe17donU6VzAYYf7oS3fTtezzhoTmCD",
  "key4": "2nideASsNANL1cwbomX57NZTXMoZ1EyhSdQunD1e2eQAd9Cncqt8ipo2sDjSa8d4JMT5PNV1aVBBArTrCRFfTfE9",
  "key5": "4cgwnKso4McGFDQDPKsDZUqQwD8Z4fXyNUbFQZSKEShe5wzeMsc8hLvQFyBXekVcpev7CZLDjaLGRYYgFMiwhB68",
  "key6": "4UinsyvoAauB72JM2qSNTuGh5A9gXPVfwgPFR84NAxEip2tTpnieKyir5WLqEyD83M1h4Fhu156KAvUqzQd1Amdu",
  "key7": "GSVzjMMs4tYvtfhg4qQALjGs3JDYbgQMs67cKC6W9NhX6Cvs4d5Ywh6pyLsKYEk5HLtu7czGzXTwESwTntCewqc",
  "key8": "BtHwovvcMBwiMJ9dFpvtdidq6BdQMVpf6ya4iqBVwXEdTeG4TGtynmif6veg56JwqgXb3GuJSczE71PFDpzyCez",
  "key9": "4yAZzTSqLZqUQgmncKvEm8MC4HZWMWLMD8xNPekAL1mGZy1danZhqA51w3XZj88hdcHyXq1QBE4m5jkjeMrZZGxc",
  "key10": "5xeeGhUvHcBKmnVNp3aTTZgjTaXyba6GupKhinYrvmjUysFwXEFPEMwL8cFk9SJFgoWQUxKi9BDGAU26YsruxDTH",
  "key11": "4vkQ5BMvfEEgZJMckpZqoyLtDsXi7VXYHtJ6nny7zFTJvnke1SvgNjJhKdZqSX3qCR43441cyV127KiUMT2EnMP4",
  "key12": "5ubizCSCLUbDFcqtSJPKJwgmrFK92vKnq9dmkbvJZRxrvfNTH2rML9fh6ZKkhfC8Q5GSpt3tQ3SqoSBMF5jMHavp",
  "key13": "4NSp8qQBc52CUWsUN6rSxTBNAuDLS5BScUadscat1ciL9R2xeJ8yvmL6P5nLDRYLj2UeNNjMxKQKwSbHMPDxjCHH",
  "key14": "4aQhwJEDDQ6jfef13Arka3ZUtLiWzip8K1XTKSW5JSradAsU32cfeRZ3sLXRohtwBdE7banAYkMKXwVTeF8QphP6",
  "key15": "43rKmAfdhKQKA9YfZmMrW1BR5DGTruFCZxxDr7xmm3MoptgveYegqQa6nfbdsPjHVAtzCu4C9cMSVt71EwJoWmyk",
  "key16": "3we2ogSfExxRXxGmhJJgeqHQU7h2GCXQjGSXtU2cAhcmKCRHoaN4uc2gAS4HGCyRDXP8r6LCxowRtGHQbT9GyHTk",
  "key17": "4MQ9uFUvcuNiJUKVHrkRVe5yi45qwqDPHhB9T7AKBysunFhmnDBPJe73GvoKyXnskUTBS1MsxL3CU92EUVYWE1Pr",
  "key18": "GfG4MKeHUW1Lk2f82RDafE4HW26SnC8fiZP8tN7tnwdR3bg6nWMQHR5hU81nKa5duyLBmNjGCrm9vbB3RdWF3Qr",
  "key19": "5vYRwmANa5pxw4m97EKc6F4hpaeb7snSJdaGC2XKUweTwgZTCBCrXZhG1ZwtmngPM9oSDgGxg7oobZKaSRT8WgLG",
  "key20": "4FZKurL8TT8CC6bTnr5wn4ZNNjWUD2wqihWbdj72ufLu3G81fRmFdbNEhM7bn9L3o7Z7hwa2nTqqic19pqAVrNCC",
  "key21": "63ToHR7q6VCJRJRTT5spAkEw4YSwH4LEPu7kQhKvjppRFhufGMYFUnkD4HLpynNHYr4hLRsvnFWRgV7cXfJAMb7S",
  "key22": "4NJCaGkHSG9H5DsbCyBZ6TU4pbYonoqvAxpUdnMNpwZAv69Fb7W5jSd6xCi7FYksf7T29n1TTkaa9fzF8EokqfAa",
  "key23": "2VTvwn5qJgovjnLe5octge4s5nhzNrGF8yG8UYzdoHz5PJpMwBZQ8pF6TGrc4M1E1UnEdPKFx29iyEWRR6fYyRdF",
  "key24": "5zLAvdKHWNgHrr7pcxDnm8R3v81tzuBQLrTVJUJNyQ9qzAAoURNjJRVfjLJE3SHwBv68B9vf5Z4kR28dZTUn9M61",
  "key25": "4UQTHP3JXkTM6Lprysva63AfS2atz7Vm7vEtgNGVmoBYuBxC9Ndr84J9XWf9hU9mTJb5iRYaJWxSC4g3cbmhhUmr",
  "key26": "5jE1S4bcSyFb3QHqC8WSEomamLfHQj5N48K1wzuHidfYPdbH4jy7dQwqw2yXfvAU3xt2RD2RWaPCMLbJBAHdi1KB",
  "key27": "LsyYrABiAYjW9nU33Yt117jWHZWRRDwS7Qd5y6xH7iedamsnfD4zcpB994FupYM29KH91H9VUP6vxSSLwGCPFEC",
  "key28": "5pif9s5A5RNVq5gNpjG77fhDGV2wSpdbCEWC3UJ2hzGv4Xe7RVEsG2XLdJAcgqZResgZnHa38CXDaVG9RH1fDH4f",
  "key29": "2sz8nWceQy1dMh6oDivK6DHSvverwgjHru6XToErq4V2HfgUwsnhfYGL1c49e3FyoBzo3pQGWvtXEthRCWMPXYiu",
  "key30": "3Lg165PkEDyYNP2XqjdoKv2XVfdqWBfMeQgrT9vHv29RYyU8N8ycQzpN2aVtNcodXhhmzYXvD4Yo7XxSvU5F1oCg",
  "key31": "4DrqVvosf3rCeGWrGba47YXJQZhcKEqbXnyD9yCNmHpr2r7umUViqZTmR1HUPXaSdGEdBLucdmBZrJp88wmLXhAd",
  "key32": "55nx8RfN9zSQfdVyuwuNxZ19jqL2Ram6Yjyry5W4TGGvcHUL7KWKuRmhDhgu1na4Fo1kELQp32zK5QRkPqdhBXGi",
  "key33": "416b8Dx7CCb1x8m991AcAuXfRqnin1RGRUKiyv7159KCEUDq7s2NQ6DhNgKiGcphLxAqhYrS1YeRfoLj86EmoJ1E",
  "key34": "5YiQowTtA2t4m2XBTiRrDAKg9ohGeYQYwnxbZpEyEsaBfQ7pA51JtxZnqfMrqZ3GuTMDu1nf7S842cUNE9ekKxba",
  "key35": "2Rohak88kHxyo9uR1vBmdtELzRQBSgPTP4WhyPDxjDQqzuE1DKd4Wh22SmZavM1n3aKKKiCCrCX8b8fWBNUKgk2U",
  "key36": "5agWaUWTCG6yaEVmAgGMPSpGG7DSHWFV6xL6cUcHgV4P4gZVfPfHwodPbGFSAJDuL6gTkt13kDwYLpiEzzvzw8VQ",
  "key37": "2NNAi9jkbty6sUFs6g3mc4TyVNF8g59B4Up6LgzcceBXycX73zXEHB17Z7B81C21sUwbsBVif35seLCr3NVay854",
  "key38": "5wyGeppH5DsFYVA7ZomeoxjPc6CfbMft48K1qDHowf2wvwSfAn5rAfsrup6NwgssV6FhMfVCauvHaY6qwNtpj7ZY",
  "key39": "U7Pk7KeRmSJcUHjWit2rLPG674Bv2bKZjnyfquoLPdXDCnDU7F1RmLewbBefV3abFLjt8MLHjMGrBZPdQxnPhMF",
  "key40": "4oXTnkruLAgCfMH9g9DS8Xoecka5DGgv9kbrgHM93DMGEWnxTaFNqVEmrMP9rhHtbFYvjksBKbG7sXohuMiUNk2H",
  "key41": "3dqfEdg7KmB1KECTm2Vv8xVga8WgQWAsMEhCp5TZ4UZ9FudowwJ9Xf1GmcVbGM27eLRPZscLwJHiCfCT7n2avpGk",
  "key42": "462D4GWETPW16fDvFhPD6VCPHmPN3L8GpcitZER5ETQbKyAfEWH15G9CeU5Y7k8ax6jXNpQVSTuPkcrWTQpfYnwB",
  "key43": "4Vi5pXBoNRHZShsdmPphYLAWVLQMNYvTKR2SRLxB2iUqC73HUPe2QuhhVyUSCE7yo2GaMwrd2WhGBwnMXViGNvQY",
  "key44": "26g9ELZDeyC5GZopWnUipy1vzqqcqwcMNTuHnMg6P19EDcTu7eQgHQaJso12eSibZUMuzCDXxpTRtjdQxJHWhpd4",
  "key45": "fboZenNy8m6tYW1dCHdpJLEqNxjhrBiNCS6MtpmXFGgJmjzjbmJEZH9wZRiJrw495bHbertz5Lth5qocBjRtBD2",
  "key46": "3tWL1A9cKafspvAXqbqKp69dguvohu3GdpWgT3EP4deqYaSyM5hLRy4dE8hxdS3GQ6xLGzMpsiHZcXJryBYW3Vcm"
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
