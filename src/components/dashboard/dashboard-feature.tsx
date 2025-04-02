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
    "3sZkJB8RJ5XcnmSBSDCgV1WyQBW3eJCkLAwNmw2TREkBYE1tYix9Pgijcd6yW2QJJ85hsvSZKzzwetgQur87Ux76"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T1FSZSdXpPQmcnX7pEt8qwRgQ6NPmQb4LfaSqZX69SpHnJd19szuDnTaFwzbRv8JWGxMFDSBykmPAXzZhjviDqg",
  "key1": "5PivPSsry233k7jSp7dTE9Cu2zpMwEWT17i8SKND2ks5pUoCVux5sBx7bwLaQASWZdnmEeVku2CvUfp8zdGQtvRJ",
  "key2": "5EpSCRansrRW6Jb1AwMo3cKpLv9ruCgkxqi4an5mzQdqiZDTe9YNpZCNYebGYPoT1thJzjczzQBm2bq9jTLjwWJQ",
  "key3": "2SL71b9nBZVyruM2Ebb7XZHUeWUdAhs1nej6AvZZK4aBLo9c4d7E6yRbhoHGkNeC4akKQBFqF6etXWS2vhZPW6By",
  "key4": "5WxP1PcrJYw9nVXJ7pjze5CgcDCz845LBkerjnbi3fwUP5T6of4DAFNKjpWXy5FgQLVfk3NjwwngzNXpvCziM57L",
  "key5": "3pR4Cm3UPiEuW7d2krNVkaebpqeriJgrNL3NAsoM2ShiaLZjQAuz4dRQjPR52iAYNVHGUxxvXS3Ro16J5swkCvtm",
  "key6": "YE1aLb63GmY9K4JQsuXXnoxmUUrGg6dtd7NxiUdS7auDBw1fWg3HTMPJJTdotbYxcvQCoL83wiVk9RDN1aELcNq",
  "key7": "jErufttwEyuNvq9yrZYoiQ5fihKkEezzkzMqxRNWzRuyZqDkwrHrGBjPB8Ehu7s5GbRTRHK1L2e5ACYSTVQxHBZ",
  "key8": "3qUd75Uq851c18AWEekCYamUmAaPb1z2mGDQwzBCbx4VkNxiZvUXz7AT9c7PzAEuPzmnUYYuuZ6Cqx59dPupVAGc",
  "key9": "4JhAuw5baBCyQeRDqtBa8azYfo1RzNNoKaqn8uCr9mpVE3noYJtqRw8HJaEdMZScxuVZajdtuLysQ7bZjNq8MPfo",
  "key10": "dRTQPmUZEw6VTJkfkbzqgMQw5EGvXrXvZfziGChAF2mSWz1kkbMUiWX56i3BvuAzpWgnmhUtL5kxCM6DRYzi2JN",
  "key11": "5szz4p42iTPdBsrxsYHJ1h212zhDh7793cwQegKgc1M92RATYGzXgRLVfJp8sYKbo45P39hoXxtwfFtbRrAGsJeJ",
  "key12": "vsa1MefN2Aa8bKgF7BJ1U18iyiZnZLzEhXMhbyXVDb7nyRBpgXdJXgKTVBF7fEbbEa7KBppXXdvhfDPfhKnT8LB",
  "key13": "5uQshE1tfYwgCXYdwDKCwCuXr9ojFWV886TRN4PWodhgXUhwCsUAZuMaiesKGEyxKwAfvJpPQaBEDerE2uFRdoDH",
  "key14": "5e6AWancdKevzXdnoLktCfBQ2r3xh56R2UEkSNVANKm8Eg3GnKmST6xuD5mxC1oigELZ3qXQD1tcDe8JF98soVfu",
  "key15": "5wDhQx45gG96g64jXGASpYnXsfA56g27az8uMDG6HEa5ezi2jR7maybRbCV1k5ziEcaBcQc8eHgaTxB2pMpkKfmH",
  "key16": "2GFHDfXjee74GoWuPZxhUcDMxn9VAamx6BMr92XP84uALsTzrYMTFjHzHEGHFQnGrG614zphS3T1TiqwgpauY8ES",
  "key17": "wSddPeuVNgKErr96iFJFfmrp1vn3R9CJWtVYv1DaqVHAGhemsm1BMxFwufrSRstC2R66XGopd9hCduBEtXRg7HN",
  "key18": "58hdRe5kcKHgiidPaByhTkdXwD8BxrQUAXuQRivQZeE2CNVGEmv9axKr1kw2R9FZcDJHehjsoHCo767qGTtcNrPv",
  "key19": "JYBUuqiuLSPWhdXVb85LEyne3A7JBoMrZvojJ8SUTy6nvhYEp8RdLvRtc3t4nFFU8JYhnybHDvkgNfLfziiQQv2",
  "key20": "5iBxJnQixKFD2SzRY2dA3f9mteX3NmimYmA5E7CpAFiast36xzgHtcMjDJhu64f6MKau7ktKdtyES4x8ZR8dJe1L",
  "key21": "5BWF7fpW81g7ux8VcZKVbbiivmoUqDWNTRQjb6vNcgdPd4Y1EKHaA1dTENpgM6zQTWpNW4nG1BLH4yaBaKuUaxZe",
  "key22": "48CKPAbUcJL3D5ixDP1tR5CCBeJPtVfuJP3oEFEg8H3HA1V1DzPRReJhZv3DN25RXofwe95GXGbUw1mUEhsXxuHF",
  "key23": "3XG11ZzoTZgqg28Kt6yv7KjPtwy5aAKCsfnEnoxeGmyDf7zhWuRcbuQDq7W18JmQctexGGg6TabtLJrs2pqbLW3e",
  "key24": "22YtdGomPauANhesV65KpTP63VW4EUcFfAP1uCBE7BnSjRJ7TZDy8TvAEaoSCBSK327AdTonbMEfKyGJHciGereY",
  "key25": "43n1mooBXpaXW4ZFno6pvpQqcJSwaCHuWMEQTa7FG7rAWHsKBCWd5AZL7LCjiafTfWPxL6td9ghpYrnPKQxonPNG",
  "key26": "22Cfbfjt5WGBugyNEf7egfwyzK614ZrMojYm1G5xQNpfDSRrwZx68rKiqF2NakgM1SKnWUDxmEscx4sCWjh4nwrj",
  "key27": "2uHqRCiJAPf1iN6EDhYU1wWPPD5eJDWTcvuAMLtiSAAjP5gSDuQbek6PTxhZEvsLUUWGts9JnAYUN3B711o3J9uS",
  "key28": "4b3dfZMVqDJNd1yAi2Gqy2YcvcWc8viyG7LpbPkHQzqmbwM56V1Hib27TShmXJMidneF7TGsLWoA9wYTzGCRptd8",
  "key29": "umU7yeqFQW1Na6wSMRviShAzQ55uoSbWoaWhQVEoJQrd3Xs4Z1dui52NeSyuTyxr8ecrzSyeiG5WWzkotuYtAVV",
  "key30": "3U3MkQsybNtW4Nfucu3osMmp5MK87f48NAg4BXtGRn4c6dVfYWRCje4sdwywfFds6nUuJmovqdFahaa6Yc5H93S4",
  "key31": "4SWSX4GRHqccyC5xLn6z19d54QS3yHRZ8p8MhNZq2ESYKchTEXgoDe8xgk52CzxPkfgRMFdjpSmh94XAyVHkkaHD",
  "key32": "5GTxP9qeGVKpUrPa9qtbGbTbCcpAMrrYeKg4Vc5am8iGiLZNrCLkwMJy6JEKVpxyGYXJeG2ZwqYoNLoByyoH9iei",
  "key33": "64LTv5GSLuUg6gL4VdfsVi7AbAxkDyXR6bhsFtfgN9TUPvn294mtKH2uYncoYpMmKoY5UZBofEj48aZv2Y8R4FEV",
  "key34": "5rFzXE3jrwfTbrF7RHevpggoKqotQvQ9yzMtHRspC35ABsZcqMm21nZsAcmpJZBdJRDJ6gH9866YXQPn2K8UKgty",
  "key35": "4Ms2FiEehMjG5chvm2zzzyHaXAc4L8dCYySb7PXpP8Z59M81AmmtLK19FR47Lc1iL1zcn7jjwNPE8dj1Ni7jemii",
  "key36": "4Epk4RGB6fcZG2ZoXnSX41dRVVJ2CPY5kyN3vik4jVMDPk56LAZk7Qb1vGagCukU927eKXbctgKdNmcRCGVjcoZT",
  "key37": "4BukRqVPDSqnK8Lc136L9sLRKeJt8WhfVapWxnYkHJUGkJMbqrZEnbNiLBa6uWFBW9kYteuVjM63uX3Kyn9GNttR",
  "key38": "4Y4xgyBzP7fhZgrQtDDZDFK96M9p7kj5AEcAFxJV5KtK1k2s3EhpLHCm15KAHaGAe6zrvWm33L267hFDZViBF6YM",
  "key39": "4zweMqc3YWG6ugTNzpKTLmccyw7t8NKnpaof1Nj3mPCkD1YAkxXAMvu1ogMTePkdY9gnSt8kZBZqKVHRwBrQK68n",
  "key40": "YbYQyDVZbPi54MYT6yEF1L4qcGR642gT9xRBF3csfKFVUvqKR1EyRvvQ9ghoC7ir2ydxGZgV1Cek3y6nmxPqGtg",
  "key41": "3GX1m8aypLog3CGzVQoNrRkNqiy5V3cvhUEu5eTqCZPrxAbcyZAaq1zs5aQs1i8yXnBwJi3iw7uBwW2XZSHHqz1E",
  "key42": "5bwKa7b2q38YtRDw9Sg6sRFu1mkm3tn4Nbg5UB9GpaGhuRfgfC1ak1BSU6gYYfzcA18FbT52UChkCLvBby6Wnhg7",
  "key43": "EsxMgyVuRQPadvARdtwqDuojmxJAV3ta22jopj8iZLpxd5nEmf8v8SHHuZ4fGij4kgJpkesaJRScerorcY6Zxxb",
  "key44": "5qoQaR2Fa75eP9JHpZFcah6MLBB2akvtHQow7ntaLSL1FuHK54yQ8jP5ydo23x72y7DmXa8fFiAfV9QP8xGWY6BS",
  "key45": "2qCrsRnwX5Ht1ErGs9VT6wNNoPEnSHmgAK3DJRP9Du29Mrm1BmDHt2mvXWQqSgZvaYWcCaUm1Xy9FaTWVLaKLwJP",
  "key46": "7ixovgo12uBwqobHhg1GseWVVy2VNhPejNZSyBiTopptjS1vMMU5BRpjWDm5dTPY2BncmVDb6SAiikWmh5pprBc",
  "key47": "4enoLasK3ZjiJ56nMikhEXXHzhYGgFJx8aNfpYg4EVdGfa1TZNQUAzAmtAuveYE5j13kFR93Ho65pftcAWE6Kc7n",
  "key48": "2hdr7Mdmp2y2HYvEmrZZVDxxkRzhgbz3KJU37nwifJCcHni478NWGF8StGGmBVGFpyboHEoSw3hpLM5653s24Dum",
  "key49": "8Zg1YhQDLpSJKgFJWcHrJRhvfnaQpVMxMoxCfBLbjqFe86dTgGYUM23SB6YgjZNHq5vZiv9BWqcntTPCMsxS27U"
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
