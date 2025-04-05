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
    "4Vp62u3oEUaizKJ927eDPiAFCDRLTWBEnNCeBdGWmL8JpUJH9BmiBSGUwnNDuUFdQWphzXoty6bsyMxFoWGQ31wt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RYGXtvfEG5Zp1UBNfxmnGWYUJZBmefKTNKbE6zjqUoCKvoF5G61HMNVPBjCbn4YaNkvqdXVq8yNNszmKpGx1EJf",
  "key1": "588WzB4SSFQYikGQGQu9ywqG9KGWXrGiPswzNwR4kQJNeq7MruWXNgG5DPfWwBg7KsUsrDkq2j8mcVhZML1isEQF",
  "key2": "2jGiW8bsXKXmuoeD3aCTaQbHdQGo53PswwXjRt1t6QCt3QQj2U1qkYJmB7wSA4YtcyLKgTz54qPUDvKS4rPAK4Qw",
  "key3": "47q2heVzDhnRNSjAtLT7aBgKy3LsfCTwxuzLqzPgJSXoBUqcjRrRwVyL9dGM36aucJ64HE2CnjV7cQiW5THaxmjn",
  "key4": "4VUo2TkztNbmcCL752tjf3GiHzgGSwhfmA2WqK79UhYKBWNUURKV2FF9LXvKgMX3onH8sirWPeRCqSQ6jRBbtsdr",
  "key5": "3dHe8mP55YmGXeQvjMG8kgvEyReXWJJzjuYCN2vqUgCAftoqt7KPRmyJk8CPJWDjEwtvQwE5wBtuYNhnuN4zqsx6",
  "key6": "4LVwTYXgA6iBscHP3VytDuDSUPmZFAuxTpY5iCdGhxR9x1vraXDR55Hz38gNP5ptxHN3x5wRZBMbqeqvd7Zvba6Z",
  "key7": "2R7sYCmEkfSdXgvTwGAYXP6Yv6bWWAgnDAk3jJBTugaGXSMnrfqLt3Sq9QqEx6bUvxZJExLumvwzDVrFe6qC4KAh",
  "key8": "4dgozyT1BR7HmsKDD2RBMkqwhBEhbA2r8v74rC1ArzUGSwnVCCTVQatV4wPkXFiT8noZQ98owLqNqzHMFAaBXckC",
  "key9": "4zU2q94MbbDaq7FJq5e6XuZJj7igBrFtHtxU6BZ5Gehy1sifhoRTaM3hwfBP7ojqtNzoov1x4fhRcc7SB9bgnMSD",
  "key10": "3zCLqAVZWjrcxGFWhE5heFz3SGztmgWdSZrneozzjbKdNLfrks4VhjxaB3QQWPffzmVGMy47M4TjcFbtmhdyMbbw",
  "key11": "2kRmtN17CP9UV4SGeyRT9vANw47dPm3g887vqfDeZZBhtTqRieCrhHaQL3sxNYJdW4eTKKUozGtUatuA4jdavTQc",
  "key12": "646WzDzWTLxQU33ZnXjHLV1ATW95LxmVUAY5UKvTa8vkyUukjbGNxq4XyMYNXirr5Dw6tV9cATMbPVgnFjnXLnD9",
  "key13": "38GVDFN8uWSqPXTyDXiYpvG7rNjCDTQDjy8hbsV3cC4tX1ib1uX27yy539S8Y1HMuHP7ujajhiRhLLLa4yhxSKmg",
  "key14": "2YjAyN2DMSdiiSXUv4tw58Vx5u9d7YDUASKE1GqfrXPgDCRvTbVuGEa2Haj1D9PvFkY1wVezdAyZe3niSwiC2Uqk",
  "key15": "3m2nuKafDKMEuS6cZKPSCf1qttiWWv8LDJz4cbhQDPjFU2FNguxQJRzgjtSCD6VTLn19PmLBfuHygmqf1X3kV1xa",
  "key16": "aMsp3v6zGMefY7RHj45FbewXjFaspd3gc6XgdS29kM32tEVw27HsmcjgL8Yr6jVFmckRLQSzVMr6bA5na4Dvh4y",
  "key17": "3LzmvWM8NNmQRPYYHiexMcHdgThCNaH1fVdzxDwPq9jjP23HJ3XozyDtkLjv84r76BQ2Ytz1yxh86bgF5KmvCKjs",
  "key18": "4sTuVg75n7LJsdjfKr9DCXtA3otVPpfrCUgwLgQxoze4ZTiwMUkqciLDV2TkpsoZ6D3stszBBPTqC8AhJsKA89kZ",
  "key19": "2gQmzd9aJYa9dqqFZ3eZqe5SZmm8KahmPEdZyGKm3LvmqEEv7v3WuJL2akji1dF2Gz2DB94uavQ3uDAcJCnmKeCU",
  "key20": "vCXiHZstMR5uVGykQzo1VbAdUGX7LsVDbu9Ywyse14fz1FNyxdR2k7i3SVnuiphFob6pZpVAzWuQuYcH73TWB8m",
  "key21": "4jnHkjHEF4GyfVnufgC9hvK9oJuQBZohGxbjMjoQ5hAp1ZYzLtfZD9RFD9R1o3h4bD3cwasfu8qCQjdd43WSLP5i",
  "key22": "4CueeUdcmGUkQpnNdpUouMjDkgqBDgp6zmZwRHtVdgwewfmknWEwQ8dVJqZ3qduKFdggNo3KhkST5gtCdnGf4xpp",
  "key23": "3XjjESA7Egt329P8nzgQhr2mnLHdktHS9my3vD6TjfiSzKP8SitBRcCLwZvp9ZsuPk42ESWor3X6S7JwD74mjEnt",
  "key24": "4iXaWh4ge1C1AQpK793T5AzdPidc3XvzBH5kW8ju7FVvSZPiyyPzWM4ETRsotBxWAQSCTVFN51caPJ9XF7AkW5Xv",
  "key25": "5MkGnikoCcUUwrxuRHn2b34PS9bW95fwcgAwz2gBznn1Xb1bnztizmiq88nGNyrzfLXNX21FPjgv5yZ2BfuHhBX5",
  "key26": "4JcZAnTDNoCXjD7DEeqBGXbF8ntAwNthAraS8ZiWKTF5112iKmSWkwjoaNRntsvarq3FoM5cQSW61aZYYg97WmY6",
  "key27": "5s5HHGirynRzo4QWQ9iy5SRHNYt4KB3dLfqmaRbNFwJPhfpz8t2hRrLYLBkVFG6XdZhJqJq65ABP7xey7RanUZbz",
  "key28": "4d8ZfxCKtmuwswqu91ufzfLPivYdvW3CWf1LawnCDQh5HFxjg4SaBS7DYMgPeE4XcF3QJ8jtjH9aKBEY1nbvLvrM",
  "key29": "2Gb9KMWHGjVgge684yo49AUrmWjQGZ59GfQfT4ncaWk5QFRUfyL7PtEJS8k5c1NuonTVxUkJa3CRzzBQzfgNf1i6",
  "key30": "2GEZuhn2z5tb37DwZ7y6WMEh9EHPy1Y5fgmuVNBxJMAwmtLQNxfr74wNqr1z9Coo7ejKZBCtmC2zPhqGofMjB56W",
  "key31": "vCahPN9icHGBVAd2U1hDGgcNDXLZhCwGnK6AdUhjoo4ER2vDHUU8VsLZwJWWoDNc8YZLsntraMLZ6rE4oxsFKMz",
  "key32": "4CjZkcmsQL5cBfhpAHMVmfNMpJyieQk9gNNvsuNecB8xCK7zfgQnyx2duLfyhgVeN7iw1a78fu45ZkW6aQ9tiPrd",
  "key33": "U9XUptoxf99kMmHNWzkMe4SxwyJp4rx9YnmeV1JqDojRpUdM2vdEJ9CLboMEjSm6TKtC3XmUEFfxcY2LHWaPbNq",
  "key34": "3oy4Ump3KkB2zaXfjCspP4w9jepcpPAJjmKPWxnMSuYhCdiM8fRmhY7MYFxw91LKnhrVDQoC6mM6XBi4JLJ3B8AE",
  "key35": "5gJqK4B1HXcTErs6fXcme5r24zudvPZR3usNieARs7yJtdcazX4TDyULiCETtjqW9RatyBLMmfKeHxww4M2PZNbC",
  "key36": "4WZKLYwHVirSXizSzs8aQfpidw4oNAqeYGVHzEFPuQ3gDZGJYTkgcu7sxxYjCbgHQKQmbF3H3ShCjLgedM9vkyZ3",
  "key37": "4f9kMADxq1WU2qr99PNo3FmkjBUgaJ9ef8xAhm865HE9b5KBdD7ACnqDjfusQ1S6TwNJGpsA3JPcCQJdkkEvcdLk",
  "key38": "3tejja4uYrejkcTwwLiC2hdwvBVdPRxPdTC7AvvwZSvG19wkgYXE1Zv5xYgtRf5G4vahw8WcXCPJUdDtf6xpxgJC",
  "key39": "3PqiGStfZNqZ8g4fyJvJSDpBM1w2KVXczdaX815hAQ5VfNZsWsWGvrMquriRgmaJDkm513C1gvR1p9vS3yBMqHWg",
  "key40": "4sSdkUQxsxGXkCkdZqbKivGbxfnBeccx1pt5RazUEpzKHV14DWYyfCHDsMNLqpRKh8KG8scUBSqHMs8txVsCoV41",
  "key41": "zcTmsDLZKxtZQyELbC4UndjRbUUZvZEnrprzRTBeEQCUxdiNjjRWaEVybu8zLDBbSppH3YWzgB1R6kEi4xBmH9S",
  "key42": "5aLFe2hVZVmMmwsPSDCLWSRBCpWA1pCQoAm1P9jJFf5yXK1iNoVtWnwage4GF6EtgUrCr86nNkjAHxeG3GDeHuhp",
  "key43": "497NLtaWg784kndZEtWkkmHwmgNVGiyxd8T68Uj67ugFvdqto1eNqMAU4orfJhzD7JiKNoXWMtmHvnRG1zFHK7An",
  "key44": "5RFAxd4KKeojxzBCMfM2wKy2LpGn4fuN48u1ekztf2SBiTBSSArxCzBns7paTXPL6zMXAPbnXC97LXNivvxTakyL",
  "key45": "XTekPmxXRq4g3SFxip9UR1ibAud9v5mpqmvxLXj5G1pQisPkg5nFgWBRZVPpUHPxRdyZDnhjnaQ1CKtS41dPaFm"
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
