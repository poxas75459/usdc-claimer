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
    "3nSwz8rSngRoViQkKauxkVB5fir2LEYr7Sxs8mn9VeFgjCM2uqMKvWG7fNrgz7d8UhXFVUuzdSqvZ5Fyo7RyCwXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WZCHFptnLHzATzhggQbdjimr3QRfamWY9DDaRuRq6zBsPeVozjXDVejrBMBPd3FZifs5bTQGYBjJA5yHoNXYzbd",
  "key1": "4jrBKtsrBRHyvBhmFeEx68HtQqyrnLrngYWWNob6UUT3rtxHQCwmzgfqkec2A2c5DyVHmZ2vPRT8kxtdAnq4GiU1",
  "key2": "3gSnvgFhBWrU7NKb22Veh5mK5fMMaxsFyfASDGzGHG57jQebMksy8MfJfjj1rdec2Cr8HJVCsmjt1PtbAPQF7gvJ",
  "key3": "5R8Sa9XuH98tmtuxcKbfthe2yDXQcsqfngbGh1cKWuZ8rbYwpXwMBbZoq63voyZ86xCtxHW1HTY7uVasapaMeAT9",
  "key4": "3xaBYk5na8sozBWtXBKT39pZiobikp3J9ZkBWuQP3fSxndYi33JyRYeWABUvGVBeMxLfwNqophMsyhhHgC1xKDo2",
  "key5": "2aZ8g3L5f5SsknA246hrpzKoe7bw8dM17nxGrmTvxdEvCq9EpqgW2QGacHyDkNgrsthhSHyqeUoFVtukJHjTzdn8",
  "key6": "67KC3TyKi3Fw1pFimSJX4DZcZRjAGCrWi6M4MwzdzmcAeKe9rL6wx4pR28fDkAy8Nt3SnWGY3bo9zxj3v122edFQ",
  "key7": "1AwJww7hBvEfqzZRf2rWQP6BHwvAQmmmhrTgJZTJLk5ahy2KtMMg3RMxEwFLfhRiViudEpDcFWEFLja38yeHpMJ",
  "key8": "28YkvYpHZSTtpFskoNk712TcefaRf2riXvsptgbh4xQp6esicgieP5oVwKpegCyZmkJy1uS49rcXqjgwuhvyLHRJ",
  "key9": "5UZrz6fpJ8nykhRNf6DC9W9sXEndH7M92Vt2WXb6K6K7tk32Y1pgsrVsVgiWbdqva1vV8rFFV9vyT8pGimPMVo3R",
  "key10": "5hxhjpwBvjjdmdi2AVLMzvNaVdiFqJ8hdM8mCBw5py8ojAgKvjNUszgUZ9AargSTVoCDh3tqQw95E1HhrigAo8Ak",
  "key11": "GoZFJn3uTi8xAqZ5C9KNYJRgdwHEL4vyWRJU3kN3A9CjL1y82qfgohZrZJxUgEDBpiWWGeMghNZTNM329Wcj6ro",
  "key12": "2qu1xr5boHUaiiPTmcsuGNLgeT3U82nHPDHDZLXppYxxCZfdLnuiCj6RvoDyadeMpLtXFMbjjKMD4PJzvYiFyD7E",
  "key13": "4gmiFnWDWjvoJBKxsiQCCHoLd7JEWs1g4k1Hw1hM3ng8XwsjfwVMe3ntdVpmBRwxdzPokxK92voHxTTvdVpAhcQP",
  "key14": "43JaogyqHpQZz4brT374qCKe2fQnu52dGwpBdAgDWeq93ur4K7vMBZ19eZHparLyYBqL8hJXoRWAJvhNZyN7ShYz",
  "key15": "54jP2Pi7nSujDQYWCQjWqzgqJTvJJbMuQyV6kLER1cWuYLzi8vLgcGyEksRuq5WVNkHkBbQMPju3o1V3mxRhe4RC",
  "key16": "5VmYFMaaRztT9ooCTiTMswWvWz6KWdjqMAhxvwXKX8PMzyoDMyBWuC21X9JuydjzNhvs1oXPw9a9JqSfZFiYjTfW",
  "key17": "2RoZfSNihwVfJYpiZwPzwmuWYbV263apPqXpa7T4qZSKq3WBfxwtpxzzTi7ekD6AaVcJuCrspLY9AEPb19AhUQJR",
  "key18": "3vHM7ZwEPwzqpCB6YsNs57D1NvJ4W4wrhVzM5cP3Xrw2LcWvZKU7amtBpJbPtADUnu34JodAjYFkae7GBE6kaJWL",
  "key19": "5Mr9vt2RL6DjwzrXBFZ1kAXGw2QSUhxqevJqzC3Wd5SaK71TF5nLu9CjK6Choz72zvt3c2opStsvtwuVXb5Azko8",
  "key20": "4rWyBFWUvhcnKnyaKrivWZKgibrjnBz8ZrGDoawWPxS9o7cE9uD4p8zfj29fFkozi3AQdj5JgYnsKgEjh7TWMJhK",
  "key21": "3SLahT9tCLbR4D813bTrQw2k7TPTqL4cudJjwhrRURNRzjB6wFJMqkq1NVr9ZhQMJB3CTX4CcFPPHwmSsBdW8qXn",
  "key22": "5fdaHa6qzbAnZdr92kKZQrcsD5Ga2xDoPWHZknxV6L1YjBvmjiUNvRD7TBpdREeKN6pGCt2yJeeBberDce3D5Y9H",
  "key23": "gsgZvta6iMnLz1TeCo3kQEQScqWetFipjZhEpuYUmQEVqN332fMosDt6CcKfjx5pqVvH6NQj5xDryfQEhKoAWqa",
  "key24": "jHrGJeLQWukgr1jfSGi4SH1A3fKvxpvYGUpwYM3qSMzQgV79KSDvPMEcnGDdPNtgBtjbcw7NL6Wb47wTEaG6WGw",
  "key25": "4NccciJ5NNDStwTcXkFcem2ivRYtviCNgEvkmSY5fseMWfisKcMLjQAtNgpTnpePx8U3oW8wLSDgK9oAx9XrN8xc",
  "key26": "2Rd1c5C25gsDVLgt3h2Nzg3Ei4WcSMv33idahykpLy8gBsMsFB4vSsu35gNqNxoEeQCER2wf6u2X1ebazfDjmNMn",
  "key27": "n7EYhazwupCiAQVvDdd6W7kMi5qjDyqm4rWs67mYH7LEGxpcPBf277qgpzsqsXi4whjDD7kJJQnGRPBynKcG9R6",
  "key28": "25ARHZ3D6pqjNTUZdTWyv5j9QajMWByc527gb8N7mRy3c6wVGLZEfEf5a1dgi6QfEaX8ef7bcAhtzkWbp53tajUW",
  "key29": "QdTXXKcjzdjNgY5dTVhWjQXU55wLdcFCaQZAj9GtprXMmAg67vgdt7SbbgUghWFr1g4ADoJfcoDwdTnUQgCSsVo",
  "key30": "TvNbw2hMMZzTSpcwyBwoaENABoyoMgZehFSCdFwwTSiLfmP3nNqXipEuw5p9r3rTcnssqe735dPviabSLFjboCU",
  "key31": "3Ed57G71h3ELwdC9DFTGGq9g5Fdw5wh1xmZRFFRpMzpQEpZTn9GhU9HvWiJKPnynm2nFjJnpg1hEMG8CBZ1poYYm",
  "key32": "3HCago62JYcM1ApsngobBBsuqBySj9LhrC8xsKAopPdJjSC63WizJguMesb7d4maizK86ovdy7uFo4z5V1yoFrZu",
  "key33": "3n8S1WzpDjaw3bH6drLGUV29gupTQJdRz4u6DWrfvwqzjmB32vUBt7GvLLjM3LXn7RVPXWRbiirhuaVdqiApdsh4",
  "key34": "4cPhV1oSSViBtdnJi11eeKMukSLBQFTh51iJmqu4MQn1aKF16kJe8dbsJszqg1e43ucjdd9NmeMQjcgvtBkvChuQ",
  "key35": "2fW6eCyzMZeXZeLqzACscDoiU7riF3ScH3MS9gwiZaTbYcqYMFAaRCoTMJyhT76BFrFDextJMd7xHEen89YKBvVG",
  "key36": "n469yXHpwhGp85XLw3SCjgbXuAaSK8VxkP4vp2h5a2zUtAFwtQxHXDjNi1kxXpemN1XmVXCA8bNKXjufwGA8nBM",
  "key37": "3riap7dmzZvatR96d3kFLv5RYoMoTLQjhMwgtYszPfHM8qJtba5AhMZ9TQvPXYhy2X987DBU1v5gvY3wsQmHXtDo",
  "key38": "5wi9Rbbg7sTBGk9PLTzp3SQC24uoLmejK2yERmni3267zCQhSWrSMrYzKpSSo2zhm5nfPhd4KQdPWKKmFqqHFcf6",
  "key39": "2CjdXqjagBNxEU3SnyxA3n1pYVbmBdFF2YTKSJZLaDKf7Wr2say7ZycpxfiAm3QN4uP5wXCpgQSb577tqUiqq1fB",
  "key40": "rYYwFRUdSQD5NGtkMXDMPoprunNDRj1b2EiCeQRbfqFTMKANxeRTS792wv6A446LJCGaftE4iS51MLFBfePtsCd",
  "key41": "5P7jYPuwrgRTtkeC9xHi4rwSHeG2mCeXwkceVYFQsNnzbceiZSSHxsSNGdyo8vyq7zL4qexT7mLjWUJAyXGTDrDa",
  "key42": "3kbzXRUCA3tuJiRw65mTWeZRmrG2bx8DteDVaRy33DUYbUTCGpnpQM6bcmqCz7HVepU11rxuDNvzGJw9hF7ruquu",
  "key43": "5KS5Hx6GVvFkq1FHUepAF1wkt8dKhSHG4KB9Eyc9zAH2XvP3bY9tkkj9gaUJhbkKbpF2gUTgPBH1iZhhV7H5Yzmu",
  "key44": "3WnTmgMqdh2tjdw4TXk5hYAVfsEA5sP1GcGM4oHWWtkp1Xe2aSpGn7jA29erfyQb5t6sUWRaBLWTimH4g4oaEPxX",
  "key45": "2UAhj5o62UvJ7spFHf6499tfy59ZtWSLbs7VKiiF3HBKnavBV4aTHd2MV8PJvFknArzE5pJ9KFSkacn9p4iciXJU",
  "key46": "WQqTS9WEBy3RyJhteHkJzNGhzqJFnxjo6ZuMGPrcy2RTQNMmbGP5WCGeasDPSgPGe8it5VEUagPFRvQ1mRMi2k4"
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
