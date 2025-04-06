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
    "2pyv1e26dHBTisQsuNR8visF7zdTQWpiAfa8g24k96qHa4jhbj7ngj6adsuU6VgW5paUab7wKMjV5Ay8Tqbw6igz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BsXoStaGGz8Dh81VdJKLSQnPdF2DD1w9So5XVEuqF22hYh1pRBino2yBP7nkAeATCrs646tMNPD9efaZSJ5iD1R",
  "key1": "ixVHG8XoivF44ZzZsMD8UFpNdV6SC6WrcXKpS219kzuboSDxn5WZcbz1P1fQ5SPbwEFTHRvppdHBrwFH2rE7jkk",
  "key2": "4NHbGwgkGKLAcYo7g37tde4u4aFghSDP9cwsmoX3KnKwXNECvkxefiQyuP2GN1YTLyg3RedbhCUF3xx4rPquqYrP",
  "key3": "2CphrPwPBt5nBMxg6ZZBEd1umXBuYnpJgKpcr4dB8DeKM7hi6WXRKWLYbeMqtnr5siyG3iXKbQhwsYCbV3RBuWWD",
  "key4": "LBtitLyHRB4whU3nfxpYJ8WZninJLnKbiadz8sjaHS5zFYRmxneydQRdv5d9LvAjvwmQ5wKJzR17fMvDCFaX1eb",
  "key5": "4fQgifu7VQ5KDe7EzkWUxkKgxnCbsDkB3kLXZ1JMtcxFW7ciVpuv7iyF7jNmtTYvHd87Qs9kNunsQDiw2AC6ngRS",
  "key6": "2Bqjox5RbZsrPnfhT1MRGQTEE7xjPKMzinPfy1j9iYXdRUZUb9jc1hy8KZRCkWQHbBjCwSEgnCeUqj4kQP565S8Z",
  "key7": "rNCp2Tc1L561poRSjM1aL15cmzeE5b8YXYa3YCyDQpJvFh8XrKp7YQU36LfF5yp4mzboLKnPXxkysh6FtLnB4uQ",
  "key8": "4MbvX27bAac1vZT45zAz4qVd7ntbzNFMTUvrdj4HbbbcmJ2HHxbPKR895J1vj72WKh2FGa48uwk2fEX39sBKipLD",
  "key9": "4dJhYvNhYLVsTdhChKSUtLfL5zZ3E21G8b4anhrxKnCdGLu5dGVYL1fTZuGXGA2dSLSB4EJK97NKckthg7bQ18q7",
  "key10": "2Tr4j7W9UvYB214jEQg1BtXwF7s2vDQrhZ1atSYiyBC4f9T6TwhuKJn3D5iFvDqiLPCaha1fa1XmcXju4dWeP6vY",
  "key11": "5DDazg6ZTNXa9mPw6QWVUikXmtvSFUbvoopdu41mGmdbG4Z5HHECCt9AQYi3gQtY2aRxbd1kQy9MHpQaN7nKDvdG",
  "key12": "3p9evUoASxRHmZR78jpuRMh76CfRAMsgixzb53B4DRNZNVmXUkdn2evoeZdXWttoi2bqdVWnGXQxL3SQRoSQZLeR",
  "key13": "58PVKz9fkxaiUuFS4dbQxqC7bCxwnGKcnAawtawvQdDXEYdkjrLUtRYWxFX1rkBxqkxKcfD2QaQ6zSRfcUXgvP1B",
  "key14": "2rGZvybhg6vKt714r87B5wYqvxdUu7ioY8VNvJ1q5acdG3zmLanpy8FuJHRBww6bQCaNCeQ9YUd2UxCMiYQGaatF",
  "key15": "5kk33SHmWNLqB8zpUKSPxBwt8351naHrLCR4mmbDGRczL5bBtfCVqK8hvYiobHWpxkWc8o1TGWyAat5JDMCvzHrJ",
  "key16": "s3L66M29yRfj88wzDcis4fSxmMGLjoLuRSeC857Dw6fhVborgmsnjAMPsLh9HiKk49UJRGnj2rYcyFSdkvyhFxz",
  "key17": "2NrsmMKZNDuLSS62BunUzwhBwDQ21TEAUCKki9p5u9FE1AbN2FawavZZEA1wDCCN9W2KJZqbaKvsByw6Y47b5vo4",
  "key18": "VwvebhzBAx1UYqwdQz2iatPvZX3ztZeeL4as1UuPYpq9uWgea7mqu5pospFtfMyQRwomw54KNDtgncwyChCWNrS",
  "key19": "2habYXwaCwqKatG86ks2AXC9iy4guNE5QAGTWZ1a4ACU9ZNbpj1hxftZrMYFnTSb9sMFzVtrtPcgVwwGccVHRErA",
  "key20": "67fAeL55BTcQx6RDBsj9xWLWG5yZHDSxcJSKBaqTmZVgY184SKVQkwAtgmRmTggRXHAfMdQtwEgNfG5PHzTmgVmc",
  "key21": "2fVzvTkQYPMbYTAFSKkurb3U1oFcUDVk4RXrQDiysNWWsLt26TdAqf5n229Py7XSoUvRCzy2B8A2aVPMoH89EVqL",
  "key22": "rN18tqw3TUSuNzn5HGNcvfpUzaLMNeezZ6XMQviybHjz1gine67T6dy13FLpEjMXgHUvrqSHDhadEr3w3sBLzCa",
  "key23": "4eyGRw8gznqwQFyLSkNRPdcA6Pb9afVincC2795UJKn68i54rQ7RvYWE8NZxLYT94wmcCCiKFD5XLPVpmH4oZZfs",
  "key24": "y8gSrXcQyzMrX8s4pM6Fv4BvF5MwmZ1W6oyg4wV1iq5eA3aGzxbWABfGkeQguWzs2DyY8LNUejQFbo11pymBrj4",
  "key25": "LHCsnoqJix8mUVuznPpHEwAE8B8yiTEJ7aSKFhoCgZWhrNQfSSyHoXX2nc6GxgYf3eRL4jGhtjdxpSexuRndgKi",
  "key26": "k7HVirnPL21Ht9fsa4KHUnoSpDnbHRLeKJeK6HSgJgAnS7njYy2ANJhDNbgEtb9NpNjdyg5QVxEpvToFz52AahH",
  "key27": "4UzYJRSrUdqDpRbpZfWEoB6Xm7aNWvmCQKe2dBN6QD5rP8TGfYMaxbbnvtDxG1ZjdCJ8gErmULinA981DHwSBQVS",
  "key28": "3pVbgnjy5kQfmnjvVw2PWy7S45JgSnCRP1ehkyX9SHR51w235P6xujnnQg8AhTgMyHp7CctNzEBBR9Bif62qrbut",
  "key29": "49QUSYqaKQT3RHr5WSuQLMt4KBrHMaBJe8szRWGdVWBkRrm7MMUiMKNH34qcffxKRq3vBwM7qqkmbjdYoeaj3TSp",
  "key30": "5e7v1A848sxCwoo6p57uuFegYXsoZRCeDKd5u8eL9DM1HGEexCDkBBmacnoSwUMcyo7CxpqfJN6qzvgHaFToyfXc",
  "key31": "5mgEVe9D6rtuNGjapayejzccoDbMt4pDRa9Cdhe9jgyaxY68cE3gS5aBRNzKyQuauGV9R62yr1J628js4VpEZoDu",
  "key32": "4R44tV63az7HDtKJ2amccgg7uzTvM25ygvWqvVvuxUZoMMCyaUtZ7tdfXb4AB5Po6uEVLGNiLrnHXiTMYryfJcXg",
  "key33": "3ZHPNL3hrDmNBJUUWwWCi9xfDRDSFiaMu7GEc4vX4deRAGGw1XuQ4ZLahE3jiLKcVrjfAZWnW63XHLFbmhFZQMUA",
  "key34": "5ZF4uyrDE7V7eRMGacR7yJfcyiQw6ttkdg37cBE1ncSWWxtuipQuhqLupTMBZ713ZVxwQW6Y66VPP7kGiQH7PrmE",
  "key35": "4CYcA6myBEnWp1n6M4fzQoiPk8zzk5gZA8NuftvxzQTN1UmbKZwBpLku5pEipvbBAmjrNmWrhnhWvCN91uH6pcGK",
  "key36": "3T92AaynhtyLkhU3tBudLhR95mUyzQkQKtktQ1xg5sJZ7YW9JVJyYSKgHaGv6DeY9W2bffTMCrAMdRtV3tS2FaoE",
  "key37": "5bZRa7445849ZZHzxorthf5VcRz1dmdsGrT5xCgqrcNnBzw374CfYkK27dwRF3CoELnjxFRXvYCxPCU6XF7qMiGx",
  "key38": "5mtFWuSBhUrzafga1zktJau8awn5MzyyDy37ZKoBTEijP9pYCaPx53BwAj1pEqZg5nmb6pFApPbaxLCaZ7EX1o2U",
  "key39": "5ZHKsZwEyymkLw7GKPGR2eVgvRFLH4RGDvTFCczPUsVXDKDVo5YTkMTxdEbBKXwFBgJMCCfJNY4ufKVzp79EhQii",
  "key40": "4pqS1LdiFaMX6aEbWq6VSnAfsGvbW9HQXjb27Aa89fGmf4zftw6xZBcbWuQ9RKnDekfkgrkFRacDGCzmYgpcdT8h",
  "key41": "5uX456okEHYFMGUZqqEPRQaXNtUzaZwqPh5bL6wazyNwsG2b1ioqLpw5viKAntEyCMoUgTkFfau5iL1R6kVHbpgm"
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
