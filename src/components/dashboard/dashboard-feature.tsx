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
    "3LyVWZ8TS1G9vumWXxRjUw2fy7TUMfKeazGFrm9UWN5DTn9oyt4zSJtxAz9Y86nETPf2j9NrxZwaeML4stRaRpZy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rXu3iPUWKVNt2kh2vZZpBZNj8fwhcHGnYfkmT8YTGJSH4xmcdrFNW7UX6cBdn4Ug8pFgvozdEGCWu6cqUutBcXB",
  "key1": "4cyQbGcs9DDv9oPkh5kJ17iMjv6jSu8JZkgyg5o1vo5AYbh7f4QYjnfZUyBMf2Bm1giSr8kz2T6rLHupC7YX7ZUJ",
  "key2": "3jP4MnVxwNViGEY4FtqDBmKiXvGYENWLqtvGxjocATPHszR7U8zbfa81RbxgiPFusUvvJrT4Hxv4Ja1y3pv2j4tG",
  "key3": "2fTvCuhYYJdDyB9XiXBDZAZhCfUAqBdekW2KjZo8RK13bkJLmEg8WvitBS3Xi9EdpxQKXGetThZ5pxiLhCU5XhB1",
  "key4": "53rYyXfLp6gE7zgXMuozx5VaoUmF9oT9ENW3Ht55ArHoEYWQsQoLFJ3rvjTB3cZH9AHdXWPcbQ51pUciocf7DVic",
  "key5": "37die6oUo4F4DMRMrHakuHBF2KmunBGKa8QuK6toVRrjYoqz5yZQ1Z9jrUDQayhRXV8Uytzx8RHBXkBzXHvBKdPQ",
  "key6": "5hLtiGKMQnzVcpjV9cj4D1TamFsSVXuyT1E2fh2J9Kxeo4WgRVYzidA6F8ygMzjc55zLf2rAupUF41TCptfDQNE6",
  "key7": "38GcyjZNvd87m3wd1SYm6Z85RBxgrZatMsrGEtopeXkAuDNaXtA2GfJr6hDR9wNYTcTWhqkagtXNJUS2NjqqH7h6",
  "key8": "3rCdvygHT6k7su6yH9aGHr7wTrts3r1zfbAoF5Gx5zpjSdQMWtag8chsFMUbT6G3364QxEpqevDWsTAwTrUbCk18",
  "key9": "xHbEKax6JRwUJxFV5RUuF4LyHuWdzX7PjMTanVQUFypjt26WZXe3JH9g2aS3a2iicEW9tcSnr5rHZzZhLaDR2Sb",
  "key10": "39AvJKLQwaxboQhs5irxXrdrnnbawZaEXVgqPP8F2RLEC2Ss2SGPGwdGbbRLJ2N5JakxrpGp6BT4DjQuGJNKRiuL",
  "key11": "71ZNmPrRs5Nngpj6Rj7B8bVi8c6gpks3YAcT9rQh5fnGxmZkhdtfUkin2P8VYD9qUYrQqUnFf7SCHB5vCXtBV8k",
  "key12": "62BdqoxSkYjx3Hc48VFHh4ypzUrmcnjebpC6qoakynEeinRGcLU6oQWEuvcfAZ9ASq11XoJmJBj91oSpHyEh9qjN",
  "key13": "4txivCEtbqyfN2z8Q51fsSK65CuexYF47kon9c3nu4D6q99kCFXusfFJHoNemHHfcSm5Xv9oueoVqUFmNrWeUHnu",
  "key14": "59RB9peoKxPHW2X9zVonRC4UQnwwc755jjTj85WKtBUYEYFG67oX6ZoHsoGdZiPbvUmCv6uvtRpawF49DtRPk8mp",
  "key15": "2uw1cWRsS9eSJYDT3cM6QkEvkGNALtCgSHDUK7qqzzBBY7P1MBVbMqy3vEeWYH6qLDrxH8s8wmMbKozL9P1m1yFF",
  "key16": "RBaXTyRoQzSMUaBexSzWb4BJ4dPP49vNK4KfoYEo1o9JAppMu6cKHxaPmWaUkVohLCJ8YDjGfmHjfBGkQYzBJbE",
  "key17": "3Nfu31hLRjEg7oJYMEMqYz2BNJ4y91bsR44UMi7rzVLERArEbfmdMwfVmPhNnxZcB2n5fcHpLkwSAVrCnByTsbQU",
  "key18": "DCDY4Rw6GTFfiwXt7zF3hSbknTLnbGSaAtTGhrXVJEutUNf8P1bXCDNvpNx9FeN3JvJLKnwKJqmPrcasUxMqVa6",
  "key19": "rcb1G1pPRU5cTMuhj58yNM8MRAfUCbtiUusa4tbC952iC1HqVibkiuBHzk1dAN9XTKxpNjvGy4tRZmKR1H7xdKz",
  "key20": "jCYYzVQPgSpu3nsfde5nXr2BtwX7pBo21nmpNdCELq4fH7oaMmgVEKqsX2xzM787Zz6WvkubTS2HKvmwccyRBES",
  "key21": "3FCttazh98Y4ijev3Q9NSLS2HGjVveRxmpxxRzMncYJC9P7pwcLrkhFgJXCsw3zYspQ5bN3TA9H3bxMz8MaMwwAz",
  "key22": "2S8tRKuNxyrhart6Gz2yhiLaXeaj3LS5jnoZ9aWtgyEYvJbhpFbpFJtsXyDkqxwPC77ntLTPSvALVdxz3PaAP8KK",
  "key23": "3YvXYCkN9obS9MnMENHkX33W1jLSuAVtf5gtRMT1vKd5XsFDSW6ir65CrP3932gmmz3cLLre6Lr3sGZnbYR1trAn",
  "key24": "31sgXnhAwwJjCfT1ULMqthkiqfdMsoA4SrqQcyRT3uipbp2Bg9vRSu3qBYrD4BsmsaEeg1zisccxsNS8SXGiJSve",
  "key25": "WTCmxnMMm9wDWSQyP4dNGh7EUb1KbFXSMigkeRhXm9RzntCaCXAHXP78r5jvmdFB8AGooMqx4fPbPumocehp5iD",
  "key26": "39necQNrefdNVXogQwtx1wpuCJiEfrZw15C4ux2pjQc3AixMWL47zv2f592ybyPa8w7VdGnzFRmmd7VfxzGCDavn",
  "key27": "2v62UckaxBGisDUDfa62BzRALR9qKMtWWxNsTiwbZcUb9bkqU5hoFVFi6Y8unR4d131VZmHZLJVYhjoQ5raZajyP",
  "key28": "2REcEe2SvN3mDR6KCy7LG5F5PTXgLFquMj3dCqyyMwPxxe9mjKrMeUzaU8U6eqxzFPJcTQeZKnVh5iN5ka4vmrmg",
  "key29": "2njiVQKpSVsBkGdcVZtwmMU2qiKkhtRgMJaHBSyFTAaiQUfUh4HmxFQWSafhoYRRQ5PdgdRYpkSm2iZmJaYWHn1C",
  "key30": "3Zhf6M5cgjfEptEvhMhkcKdnzBc9qzUN1kC9AmHRCaEuWpf2pkst5RFU7KLPRXxb6en8J4s3ovxpZgYrqYfvJWdQ",
  "key31": "2XKC73ukVF7PBERDbXTDRtA7M2kRh6H1Qwv7fkZ6airr1yBSvqiVjf38YV3C8rRVMQgysGpu6w3VUchrQJVgUXwc",
  "key32": "3ErDHGgLHvVpEYbyP9xJYpZpCBikbKqpVasWsDy2QFrfMxpcLMWB16UhbDLVbbngWh75xWPb2msZJfoGqhdZ8tAn",
  "key33": "56ifRHfcFPxM7VaYuJjtHKqgKpkgC1MismqHRYuhDFWPHN6VRDNCDsEfBWcFdevFEB9GutjJbLjCcAKdw7nXDdjz",
  "key34": "n3ewhAgKeyrUVdjL1NZJpK6dHXguo9hXidDMj9JzxytveMd3c8EtNSUWGN4Xb86kzjKMK7YcqGtj1xX8Dfuzz6X",
  "key35": "24VgZRnPbdV4bLViwnUGNWaiqyQ9UoWFjaVxX2ouRDykCJNFs47eJcccN5d8zSMxCKdWTMtw7FvjFKddamEKdoTA",
  "key36": "5Z1KGf2xm1x5627GqEXwRZ8yP43Sjhx8MbyEQAb4cEUkCtVs5Vvd6uFv9TLWWibRGU1FmTbdpKe1sPnrD5wGj6K6",
  "key37": "51eTc3Fezb2VwPRXMPHMgScGMLpVbCmTbrguwGaEEPAsNH9aa6gmWTjguHpzkGjkEiwANLEMFotyzU68h99Lqibi",
  "key38": "49q16T1kfN5SxKBTPtjDEx1VdVhR4Cn3T8xEF2W6JjWkwV2RpTH8RaoToShFifkwad1iGFFJG5tV9735AxtC2tY1",
  "key39": "5u5kcK4tT8Rru5kbCRg9mwKX4wffBecMSPbuPQxHjRcVjrQH2G7VbK2ZaWnB2YzjTQRGFb9M4epKkE4MyGX6pSqQ",
  "key40": "5gNYiqgJwQAmHk2pG2P26DSgECwHJWs6MwnXnfw79U72GPNH9y59uxYmvbm6yWsgWbD5h95X2bXTkZUZjEVsdBgV",
  "key41": "3AYm8RCLG3ianpZkn19WKTLNTGHdPmNmF2TU5tPqtUqGtWNhx8xqaHVwkSttjYim6FEtzMUw5vZLZtvVuLZLSWxD",
  "key42": "5mDbRSjiXpMSeRhN7u7Kp9BpnSJUjrFskByrmjVgtH8LtP51VmZZc9ax7hCEYNs6qMekxtFxU2ofTioiD35wGvbA",
  "key43": "5qa4wLRnvrLBYHdReUNwbNYpbuyp1SMMUFxdwkLjFdXhfvhqzVZohKYpxsckzJzTJARXVAtHjuYGftuJKUAtK23C"
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
