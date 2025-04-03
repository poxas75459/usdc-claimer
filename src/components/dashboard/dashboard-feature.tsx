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
    "77zzjXF6qapbXoWFizMnFMCferGsrjRMGzubSkPu7teFLjyY1eoYiLhnR23Mtex7CUXVb94wTPNTLHamYTi51eT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v5LoJAdx2zbSDy7EM9wPPPSHTsBAZT5jmej3re973hVgv5rWjVqczJfaxpy5CmPEv22QCJayrbBu9Y7t5yH2tqy",
  "key1": "21WhPyuQwp4UwnE8BDqVm8W6JnZwNhWw8sxhAxceJvcRNwpqTHMnoHnxcKb4Cby52vxsEqYRFLKXy6PiXJRFGCtV",
  "key2": "5Dgvxdguni4hxCJ9KtC2DRcV2qNPZm4KMvoMyv7XvJ32o1AcuQLJnXTfaiMDxnT6C73ZMUjjTH1FVrAeirLQAXT",
  "key3": "33nVxcsRywpiDPMSejynME8pghCVRwL41Czy6DUtyV2h3asZF7kj1vQdFzgBp8Yq2JVaqVAksaVWVKYLfiBCuJcw",
  "key4": "3sxGxue1MyCWT3sDuXRZREvq8nmzZPxRGaxXnJV45L89z8YcqQrjqEzdTvK4ma4UnQhtL8TXQbw5F3npfJBXFcBY",
  "key5": "2np6WDiS1j6Z2PCxsWjGAAiZhUzr65ggR9qGsbpXugrDWM7QJrHDKiWGVAiMrfHZoWHnzX1BCC8WANLnBw52faJA",
  "key6": "5B13mE1R5nPZ7Xiss3bxUkiq6uLGDMoeucoUNyfNyHSq9tvmdJ6SD5FDq8A5NZbN3VrsRAZRBre8N9BvUPdQiSwY",
  "key7": "4U8AyL8yjvPavFgREqYd1XQvL5ffaBLGAX9mR7RmCTW3jYQex7bAD9A7e2NZUhXZCm77MgSZzFCvujw4F1LURWmf",
  "key8": "2PoRSu2ewu7jw5o3ziPsMv9jJNxX2iVgKYy5FFr88FfVY4iEnEGBwmfPzb6pxz2MJZxghtDkhMxNSJGqUQWQhSQT",
  "key9": "2BrPeL2SBc3QtVWQCT3vkPF1TNL6jK3RhYyLNCBpH78vs8oEaZK5czsZuBXep1a2D5cPrYJ71FfBBSqZn1mG2oNN",
  "key10": "4vmWw5WNdQ4KqhVvdmFfx3j2bk77DALWjsBnTjrQQF72ygUQLRCJy9T6WEN5iE3curo8VeVMSnQkzoo36pWqoeZe",
  "key11": "R7dMWE657dCmNq3dqXQqPdXqBYijibTtC8qmaVaEGeU9yzg6D8ijQUTPNKZFKuJwuzbfZt8A9CRcVPCQGzU9snT",
  "key12": "64KWeFZKFKGiE9Ty1SKC5rwTayD5z6skzG7xmSC6LU6qV7FrojthPYStoePr6m3g2wGPe9rvoQBY7MHM49wRXyRc",
  "key13": "nwbPtoLVmWUATX5b4iq25pMvV6wF9Act5tgV5V5QszRN2CSufACbdGHSBFgYd8ijetKczzzfXhDvVfKHJpXGbxt",
  "key14": "26JqmVzLsJ5adpKrd92MXqLFRYCCth2CCxJzHxqyfC7C5dSgS8Pq9DzPUDycgBUMud9yCGKH9KHy63eiJYYgEZ5E",
  "key15": "5TH5DJGSfZSoyNVd2oaXRhb4KdpCuthS4xdLdQfW5BjWStdT9URm8ZzeF2ULazT91QjYa4gCQdBPseYpAyVxunma",
  "key16": "5UhiXhKAje3hvHNj19MgoTVkL6hnVGeyT79r3CpqhkHLQ5NHB9Lg9MTG7Z7ue5E3QRyBsfaKARPJ7dVknx7NCmKR",
  "key17": "4kPd1yzWCv4W7aYoeEAnp75eU5NFEzrs91iySLXQQM8f4Cz1hLYF6z7hi2rrU4MMQGrj2hMBtu2kUkDCzfaH2KXM",
  "key18": "4dqgPog5ANZvJNGDUvV2EPA27anpmTyrB2VdY1WeyUAXWzYsas8THT2E8fT2evNuwKimL5FjxoziT63NKi9NkDAc",
  "key19": "bMwTWjiQ4SkoyUqtDhE1ZyaHsuY4TZiAv7v2Z4e8SPWYxfjLcx9hA9cyFqKtVDP71aZbgTn1FvEAG4croSKGjQ1",
  "key20": "5ScsFavL8pxVj1qrXMpTXqMzJJb82oxfgq1FMZh9zRsCosvA46QHZmH5rJTDcMqKdrVVSCnfW9gy9Gp1bokjmszL",
  "key21": "2brj6KgCXEVoy6ya2C4N5k3zu7DvAv9b7ak5ZxVCnxopZXbLoBK6p6nGEYATF7hbohmTFPJQcJkegKmUy8oeqkHP",
  "key22": "5dVq7W8R1B4pXvBbkMCHjgnMsHBGXakSdPaWXeBumtrCDi2YPzVAqfE5SQ6P9fk6gEK8ckBsrZJY4xEHnvXZgnAG",
  "key23": "2hrW9R2ArvfBuSVqvxdyAWuRwxTuHJGwKASwzxCWciTGK31ge29H6skcfdPGqEHB8R7Q44CnekYGwuUKWxQ1g9Tu",
  "key24": "4uaz8Ttund2vchgf7BQWV1TKK9ZqkGrmTJsXgrtyPMGtrgFMgZxGp9SbNitQfewB583yMwud371yYo3mV6uwEtQq",
  "key25": "4if7WznyeR1GhQJkAjKqGoib4u9pmWHGB8fXjWJpoHpC4carMMkZ9r5RFCtzNUuNWybcwFussdxso2QzkFh6BE52",
  "key26": "2oDBPo8nCsUGou32yG9TLyGiMxQvyxv64YtrG8rV2bA5mBQxyqYyznALDoHpy4ktC4hsFrywLnx7vKYJFbKBFnxq",
  "key27": "38CE14Q5A6KJBF7gSdyuH42XV99XVRk78J4AYmXsogm9g7Agg9m1GUt2EiromuHfh9pFeWyQk7vq38Sc8cEo1z5v",
  "key28": "3VcxQt1Gwh3EYeyNFivCM12dTsXPg6utQp9bNKuyZGKwK43ELhSocMeP7cwWE4vnTrFDg6jMXDS7oB7ygdf5xEC6",
  "key29": "5Hida9MFE5QRRd8jj7UXDL6qq43rbuhbrZ3dsCYBNGgJhkgobvbWDbkXnuAbun1W4MDsLC1SdBW9XeFvorFkv1FS",
  "key30": "2i5cvGgEM8iHuJ5iMSGecYF3to1wNzcFPdZNxj2Jjhn3Ht78kYSHv7QRKdodg8xPWpaVPcYwSvCibQLzUuyzdyiS",
  "key31": "3gBcirRghEH3d1TFLEkguHFnYnhPvaSk9E7jNFWHrcrGpVwh7EMSfpu423bZkUpv4MaCCmMqLec7aNsCUCUj5Kbt",
  "key32": "LkBU7gr6PjTwwPL3SYG9aPW8bxiTp1LFkymLRqeGXQKoYfh65Qn7HZp1RfKvqvABhLhBDjiFx4iyxrd8kdQH3Xz",
  "key33": "2RSV7LmAA8tywcgrJJtknqMmKR81EgZGjEXmdWns2hxHxM1L6Un5tg9yRLmGcVMP41Cv3bCWjq7qkpirQswbHiwc",
  "key34": "28KCi5fQqTyqJ8X4KqXQkX21skqzCEasLJrd26HnvHUF17AQAXMRM2srWtBQsBau4C7xwaZs7Mbjic5nCSRLRPrk",
  "key35": "3nJCTHTbVx5L7yZPf6rRy51joM7EitssK2kv85qmQPAPb55NrWVSeuRSbANtJ7qrREi7V2jPwztQMxQ2k5bWacsn",
  "key36": "4n6uCUhuFh7QnB6s2bf8CPsAsYjtPZfyaArCZBjHKyDYBoNvAWg5keWJfPFKgVe2mRGv86AQvk25ZvoThz6WN9m",
  "key37": "2joJZpRFrkcYLbKN8ocaGWvzktN9kbb4nRwuWgxJnsBcvzFiBNKW4kmsfpBkPQu1z5dCyKBi8CScDodJuVk1xd2e",
  "key38": "rWVNZ3PfqZ5VuC5vAp46UiWqqGWxGF8U1kTXcvLBqkxS6axGYXcEWNxNLrxPBnitAXHajXfAoAxDio9augAaXED",
  "key39": "2LsSJazxRhsqVdJTfT1jqAmM71wd7UwU1HbwEEqMrGHv2M1Wy6mdsMWsFexSiv9otCQRCNgfeGenWY4v1Lg6ELst",
  "key40": "2ERyjvs1tgHXUTKqebrmQSuLszj1cHfb63aDj6nyuJVHTAs68XjrbUcZF732v3BTGSLuXKhCu6Dnp5VzzCLd6nVF",
  "key41": "5nchTr55EySmo4v6QhLjtU1Q6yp9QtPuSRZGUcBHL8kJePxQBPgZcWTJQRD52rLzHHL9kGmoJ6WnB2UZbqqLpmfs",
  "key42": "giev7aUPbwQ6XfG79PgrbJBSTCXQS7e8MUL26o4AFdhTsXmxn2GBCojAoZk5Q2nHmDcZrbg4YD63KRitXgdMe1b"
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
