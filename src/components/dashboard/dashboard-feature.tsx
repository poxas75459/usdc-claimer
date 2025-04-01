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
    "GHnrrGvNLUV437cKdeyBf1HiJPT5iaxF9G7WzCN4F4ABHTZA1G8u2AQHW8jXzRqpFBL2KAhbjpSHbMLBygdNkY2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gP1eYEBvxZ6LsdyfYxtqRx2EL3JRREHrJzGb8abkC3NcS9caXSZtnqVdY9SSwrELWvGgD6KgyTZpxLAw9G5rx77",
  "key1": "2drdWthoa9RPPGzBtzqn4akUvbFp2F5Q3XsddLxTEdYsosWrHQvnAZNaPdBQcXmh317DXPXkniTMDHd876CpeAJB",
  "key2": "42jws2E8smty7Zzg6mFxYMaWyAxmTDhLu4nvZZFpCdRUZM9mkdzMSTsEtdR8FEMVwQQG1J7npwJGs7BuKpjRfKNG",
  "key3": "5JY3RGWd8xmfuuKoBx4wo3q6x9dAuiubidt2r7qKYkHAGphHK8u9uf9EcasjVdRiydbbbTmxp2EMTncniM7fYP2U",
  "key4": "4G17c6cs7Tq3mb5PqDPt8BKxXPAAPx2QvJRGmWiGJDGLof3H3Z2PJ9A2KYZczHyg2sSzFaySsMSnAuLt6Rp2UcBg",
  "key5": "QXw2nLwKXPhXWpfDevnmqdYm2iac7dBkM2KdBqZWD4Ti3T9YzuUnPgWLJZiBWURqzYQQPpyEEXV52y2Sh9zGKts",
  "key6": "4Dx7ibM7j5H5ZFAeu6itKHRyw5E9XVa6y8pXgvRG7V4EXo1oG8j1uBBz4hs5iZQ6LwqaS6TaoxBAFyKWfG9tCpoc",
  "key7": "2KNTesN7NwdELKtS2eTHRVd57bMmfAbLqibMLbtTU21Gb5KAjaEy1CnQhasJJkjuD1jP6UDcKe5Yzz9qA59eL2yJ",
  "key8": "5ftEvp6EtjWvCfj3oz1rB1jAKLSmxhtQKJpmD74NSpXka7ETuEUW2krivADboQdQ68hqosiKfDNiKhnMeGPLsYWP",
  "key9": "5DXHGtpD3aBNwtdxQdjXMf8xV8xdq7aGagPK6Bhmp714MhXmWzBBkmyxVkJxX1c1osi3qr6Nnc8QzyzuFMCK2uoL",
  "key10": "5UGaAeadthXmG6BY3VxshEFgU88jswRrc2HAgdXN7QCktphd3DWNTVsUCMMTDhLEuVmZGw5uXopYEXc9DD4pRhNC",
  "key11": "4KankFDMFkXrn18iBnj9zVedjEeZVddgQwurzTtsBCchE6Frnh9mDGgt1MUxZ6KGPQwQQtAPmJraKBFSiEHbF3MU",
  "key12": "u9GCAiLynem8ULW5dKcQJyg4dGmC7AW8A9Xfn5rozA3mxPYGzys3LvbzKLt7fT4CzTW3Hd82tDNTNGUPFYsA6s3",
  "key13": "3diRw748L9NBPvE7rBEsPXhAMYQZ6sxrxGKghudFgKjrq8BbzfsxAP6cGf8Eg1QeKSFUsEbFX7TN156B1vXFGBV7",
  "key14": "2mMGm4GHVco7EQcjnFou4ouFHs5Q86ngY6xbwM1uJHj935fSB2tMoPwEh5uDaLJZDwpJoicZzEFCkC7SYKFknMWH",
  "key15": "4agJmDEwnGXZ1RKaSXLZ1d8TpwHdWYrwTwRCvgX5zPBWqj6Pq8ggDby39cVCymfA9QwrQDudgwDzWX9rdAqPxecf",
  "key16": "4gSHGnCQ7FUoD5P8hftwaUKTxjFSfmSZeRZwV2e6JwJ5nKYPECsxwpnCYuxUn5REuhJW59CpCtNgYxa2kQgw956B",
  "key17": "2AgCXFQTv4cesy86LByyg8X9oEd3wAqqFM7HmpXgUZ5XrujBTkuFACTuQwKKnmtTxvT4eEzjRWyAo9zs64QN6uLa",
  "key18": "4hcEJaDMYMVczfJoiJnteyA6RsJb7iUL68RdvUGjce7iRVLfjE2Hw6hwTkpBZjLXZugvdvarQR9dDt1XQnn7xdpz",
  "key19": "5kPNJ2DhidLvBFHHJCrnnBSZs7Jy2RmRzLgDa3qZEYuEA3xW7QDW4qeGcUBz2ZyiL4jvnwDEtCWWUGq3EZxR6Mc9",
  "key20": "26BaAsTr6kQpLudsN5q7eLFziAwHzLnJTVH5ToJipmPgSdVBvuJb3iTtTnFv2EfKeKNjJHG6q5CDV6dpje669f66",
  "key21": "31hMSkgxPxABVxNf7a783VLb5V3RqkiGwYaN1TJoGrqrd5Sgb7fAa3sqyU3ThPGyuQicQGLSUAJ1jmq8xLFzpSLQ",
  "key22": "46RhLuTXnUPQj7VJ4m6D7pVCbtcU8xh7ZiXv9WLLTxyFAnz714hDdV6mm8CdMuEnMv3PB6ooDRHncyb63qqHzPBK",
  "key23": "4VMSm5o8CHwM1HAAsppKg6SKWB38XT2tdmSWrJPiK3CCKuusCDL4gVavdW54mXBzJunYnBnw3Rm7toqh9HSCihP8",
  "key24": "5eXgT7TqLmmdd75BeYFvJr52JAZ81Jry15PagXVA2rJG1b7wDgtWFgJCTsATzbvErPUetRzZbA37qF87oAYbbQ6k",
  "key25": "gHRfHgb4p2DG9xmBbKdXBTRbYSfXpatHRtNE1HTZ3mk7CBFUL8skyX1WLCf9fGnNwEXsL6PKv9avMx55tRRvrTv",
  "key26": "CKL59mDXTKgn6ptVyN5oAGmBakUcf6SrqksGUUoNBfFx9d6vvUa2aX8DLxKPF4pbTt1Vz6f63ZAxUoigA6yKx13",
  "key27": "4HzGxDUakVSyqRdezt3CvZy3cnAukz6g1wS5EyHbLXhnGErUrRAKfM8vuZoj83B3CV1uBTWTWbBVPAto5pFL1rha"
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
