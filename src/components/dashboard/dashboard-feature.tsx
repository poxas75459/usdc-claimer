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
    "2F5G4i8KZHoir43mzkp5ZNT2HJkJnP48N2Mo3dLUyUVLVPFxtkPUxy3V2PB1ubHqCfHsxyv6hbtsoyK45TvS9HtX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GjbMWvTTnVbeqwB4zA8V5zVPENCoAA2prurxfJDTF3dt4JESNGf3CntW9DVd3Xt4Kv1G3w8iiSZtfjTGqYUe1Ni",
  "key1": "3bWKVmjabfWjrEeN23aXnfJoHF38uB7wZAPFQMEz4gyoVoJKvRVhPscxehJLGyuiLEpeVUvB5YQQjUG9d4PDXuKx",
  "key2": "4qVVSUuwLaYgTKyNTFNFdwUYnfTJLW8iz4mpNqin8rtsZe2HJb1yHTQbwfRgdZzZZnfC2SVq6s23DmPEdDaytJMQ",
  "key3": "5KFSuPe6M8Y116oz2YFgAWioRZvvxZgq9vXhXC94xhdWXCq8d5eiULkmQ4tHs4Sh84fBrrNKdhyASuCin3im675x",
  "key4": "4HFJhhrRDMeofs3u7Ftanwh5QSoSjk2hSDWMkFpwT2SDUAg2N66vL5T7xMgeyXLiinBMqayLKfTYW6wNB2qE869Q",
  "key5": "1CqTKc9bERYSPk5tNw1ACgaaH28rKHM558rT9L926gSRYQqTCjAkGwDPazaKq2TvZfaEb9UMaLh7vHT8JRr97bB",
  "key6": "BZNhV1ZgQa2JxghegZzWkz7SdEmxES5WvDckZGWoV4z4qzRLw5E3PBma7ug9ZhAPoouqysXPk5zfyboL7hHhpWm",
  "key7": "4aQ9ndbAUfH3WteR2ycxNwUt6KM7LbnTUCngBocH7ZriNFDWEqC21wMdVNkzLUWDF71s9BNxSkEo3VFzJu5vW3cz",
  "key8": "5yT69odv6vJXDPXZeBkm6Sjvq3uG8TXM2tMRuDwjAhxGSGmMqNgogATonE3VV16Kj4C5M9nY6Vdj6KsKmTutas3U",
  "key9": "4FtFjocsJ4GGSz4eNoo1Lvq2C9SuZTB389xgLjmjrhuc91PmRDAQFdo9wh2NxypMTNabqNMqVFj15dXzcAfgcvc3",
  "key10": "4ag9m8EBKqWFCfBStkUBZm7nfWtxWNTWKZ25xHmkJ9E3RXhC183g5ioRsyxADctR6prV7hvqzH9mzMmvs2HHgkjS",
  "key11": "VXPWFRG3S74kNqPVxUADqZzi8swf5QjUoWzR9XmLoabBfdWB93phBANgZL6X5SesEX6h5YUbUEUiaJkxpx9PaMs",
  "key12": "4z7DKtKKqqQk9u1kvAAzjm5NHbjbvfLsuTJLweDMa8t9339QsPcZ5jPdjaStSE9c11tVwTLZAhWMbWjxo2bBBN8e",
  "key13": "5aMayGRKJgtiyFxt5gganDPiEug7VBjP23wiELk7U4momNUao2WUCjhRsrpuk2k2UPdh17Uk7heghygDut6h1s8f",
  "key14": "3anjYYrHw2XvyvU7piRfeVPEvXncRAsod1PbdNciURsEgw9B6eVd7uCHKo3ATZkiWM3DtX7PvfcX8fgq6qHATv3h",
  "key15": "ssdBA46h3PgUWqQuTwhbGZTm1yq3vvZToGqMsWB3JZxyNq4tguhtX1e9BH4WHkvMuX4Vq4bi1GL71DfVY6Nzror",
  "key16": "4rwoxLxAL2AMTxKWAi3csT3PaMoqoMVp6q1QESoVDQsEvZ8Shi5Nryx46nWX9QVv8aujPtYC4Kon5SgHPbFrxbsP",
  "key17": "248jPYCRvzf1cNB3PEiqhwqoFdSEw2kLBDTDQJQuJ5MU8aHxsx4wMqyxa2pcgaEeN85fZ7pUgZpMkZvBVF5KQV7n",
  "key18": "4s1Uo1eXXKgQXj3WRDfYV4yCiyxtttvokkf5TEC4GRP7e5YNCLGMoPsTBH6QvkSvs61CR8CMXnZz7PjqvRq3vUCL",
  "key19": "2VPF1SraL5sSVVq1vtA9J9ukfcPDyJazSetZ6ySHjE6w7JMwRtNPGxsMEyHm2dfhoDKvWvJrsu5L7hXhUHHhWKNk",
  "key20": "5N5qXKmCJUMqC2wV1j45rTcQDpjsu5NftEhDJVPhvDV5LBepgUi1RFnAFDN4g5Q8cn6cXMC8owbYYmmSFXSvcpWN",
  "key21": "4gLLSb9dqbkzsNn5P79BPB4v5zEqWvqBLGygt6PWtqRatheyihPTxEbuJ2eb3y3cGwDkGe66UyCDF7wYsDSCJ4Bx",
  "key22": "3mzziA56QvR5guriPUprHwDnPN5YMkV9pCHXjnpRxfL7J5PZ7hauUwV6tNXC3fdjZn7fLPDHo8q7Zh9rsXz9ttJv",
  "key23": "2Cc1SVHHcE3j7YHMYY3jcMJ3Bc9imZ5xA3pVyafWBE4Lc9iy4ontxhcVywtumvzLqVCvbbQj9DUY99umGEadrhTV",
  "key24": "2iajQfsPtodatWo6pUaCuPAgEUEUg5mwLQ8q6EQXYGhtuygVCc5X8wTzJhc83sGajGCVgN6H9dYxcnRmrvx2EQm8",
  "key25": "3WZgthUn1DsqNLasUF8AbwP7h4g2BqE5EU6gk9Y6m6J6DCPhM2RQQ4Dt3p3iqPern5cKjUUZfbbideuPBzY1gSwk",
  "key26": "2VFLJ4oPJSEexQcW9XcwaHB9uRBdvkFKHYUgDKrwUZYpxYqcAbbBTPhewvuqN4ZZwAUHMAN9EHQXUEi9iqPcnKyN",
  "key27": "3mDLr9PGAkkCXNN77fcgc4Ez3FwQWKcyaLw9GRx3sEjo5usqNwvjws2Y4Fws14n3PHyK1vHEhNTuQChT88ejfQe6",
  "key28": "2tC1rQb6i8pt6nmt38fD36wPEQm7Dnnj5v55h49jVcRv3VCfTndaCw1AjhAqCv1Ktim6N9FbLJF67Lk1EbGvp1wd",
  "key29": "3KWRYZCLCU9eJhHUzHdZC5Ezit75imBCCja7QGpXS1HARgCxgUSusj1eHN2f2zY3ooSGQKFCuyuBTQpRV3oZtELs",
  "key30": "4FXf9nFcwjAcUYTU4vErpE4e9YvFdTt2dFk99WjyGtG8KDx8GXnL22Vahmo227Y7VnFxNdfHJDUTkzzGR4LJ2vSM",
  "key31": "2WCRbE4LSgspcvtp9CRoPnkZcgEZcYSo6Zua17vWiyrBqRtvYqSVKyK61YDXPy5Y2dWzdBxQT1o4VxsVTRgZ26bY",
  "key32": "49gS8jJuyFhj6MavUFa2HfjyoJ7kyHDWHiRGof7bY6aijWBdMc1vtrA6azBt2Cqkbz2Fe61LwqEKmDDZP56xJfCD",
  "key33": "pLyE5PNspmt3JACw6hccRg6sHsUyDz5akvpK5Ppb7Hfr1JK9HMrWZF3PhJDgyckovkh1jNixkqLKvmKqmyZG72F",
  "key34": "3cePMwceSnCKtyF8kTJQzscCCnMxXwAFzxaB2G7qCL198iiGU9L3urPsSw4SwvFBbaAEZPGUWkxPfxQX6VVVHRLY",
  "key35": "ZX1a3UG2R6frYaumcdS6vPHQeF7rhEQpa6GEVhrhJTp9R7YaMRLmUnmPXgNaxqcs9NMmAW3dX6qWqDwKVhSgPjX",
  "key36": "4qTMMNk7cmEgafVP6cvjRJFboExVKcJFkNjd1Scc6ScPfBt86t6QeAcjX96eSYVxBKooqhZjozDEUUE6DH4F1geV",
  "key37": "2UNwH6Dm1WKEwxMzWeEvQom1pQqZoG3WwfSVg1BKA7UX2rW91a5GaKH2srZH5N8yFSmNT3PgEuGueyUjXg19Cmkw",
  "key38": "3LZYqABgNrW4JCoAwbSiWEG2yifQngZcvG9mCo4GmDSPi8TcDQmdQPP5X9VgEhm5MixqbgiQsaLytP1fjPBEyKhE",
  "key39": "5yQ4tZRLkxDMYn5f7bveD8BPezWEGq7Nz69LJvH9A3mDwQh9ZW6gQ2bc2NiDt2S4mqVM5HuQwdoGc1dbE9KyLmPR",
  "key40": "46GC4syuRdhi9jpjmcupz2s2tMq7hvtw5AasFnwCbyQUU4nn2XW47iHp8wQ5ckoF1qmpnddrgUKcK3XmNuF8K5Y3",
  "key41": "deyRyYPPpaaMLvcBsftPXndVN1NkjHhmvJPmMhRjYfKyZZgTgxjK97MxBGhaPeeaB8nDoZpR3Dw4SmPN39Xs5Za",
  "key42": "4hPYScoyHiuUfT79kbYE4D7va76DeSE8BFXq3iDgr47WuLxfPbw4SVWHnExhPVy8T6pLzMcUm27Yhp3W8h2hGt3h",
  "key43": "4NsaSXUC5mM3gfoDgUN9cJSBQTmfVSypubmQAJ1t7wHEEi79o3ZD7cMZuQ1T4ixDKC3Z1hGkndMAC49LoPxLCSND",
  "key44": "5XWLhNBWQwGvqM2GScLLZ5ni4M9HmqZcY8ZyxYRRWy4Nbub1qGadC9ndMCXw1rwpqCfXC34NAgrRs8Ainp1VtgvV"
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
