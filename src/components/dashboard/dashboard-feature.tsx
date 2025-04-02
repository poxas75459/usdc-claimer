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
    "2Xz7ETvT3dXcjkhEfpvWAi5iY7EQdveMMCzBJBeYvovQwsH1iYYk2YcZn7LosYcKLtpJxRjniLeVKiC34sqpEq9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W3c6LKREwZNpgr3hja5yaSAbXezZ2anmXStiB3N2SfhQY1SUayRr1EbG2UGB7nT5Z1Qrb7drjrSFWDeXNZTk8ot",
  "key1": "59ndcFDukBts6yWZMSURmus2zipRgeMS6MEcRSUuJPJ1Kw7v5qveyca8JZ7rDa1EnRFDzBtQioXeVLy77ZHQzPTo",
  "key2": "2uwkzvCDdekRb3pCLvdqF6RJYwpg3FLLLSrAXM4kQbrzu5NYNqEZZdjo2Gc3tMTZQDbcmBv1SKuniiAVc4Wgi4rg",
  "key3": "V6t1FsRN3rPrWtNy9DgVNthZNWWyLNS557Yimbnm6EEgKPhnuDvwTg2dFwDeeC356n4uFcc2d6bA7tfNfcaVBeC",
  "key4": "2jknTFz1pTRnZrKq1zPGrSFVs7GGLpd4KvNxk8pw7uZUiiQyfBbczMtHD7uuNvvkdBPYevo3ncbHprc99bptjLgB",
  "key5": "4wY3M3qetoGETVRAmfh5hmfYkfSCyb63CZXvABEGK5SWwpX7a1KiWLmbRSRzmJ29ZuuwNf8myzXNYxB4ceQNzE3f",
  "key6": "44UC6kk2xyhgh2frg6txc2qG3qszhDyz1TaXwWBhEz1XZ5C2P4GqS4QirABM97LjYaTg2rbaAtwXBhLtpdKH874W",
  "key7": "4nMTq29nUbaKgMQh6Yec9kn8bZPsM2CessiBtWTUpPboZxNCbcn8RwNaiDNoLo6XT54tPLM74K2q8yWMvbkjG99f",
  "key8": "2xZ9mq7FkjPUHwtB5xWwpQ899RGEtUbHUBgM6gwWkCzjrdwuvutzvS8TWDao7Wjcig56aeBarQ3sy2DUGRBFtyYN",
  "key9": "3PX5poFEdbVzwwqvxcSG8dPVXgTngNvtCQWZdem7nBCHerKt17srbv3ckCJccAyFh944wxVNP44VjMcvWay3EaAj",
  "key10": "532tvngkq5nTkgMpzSQQEEsdpj1DSZj1DbNm1GvKY4Pzm13VcKdcnH5EsYhXA7FfiqXKcWN1rdFbuQPXKN4JfbBC",
  "key11": "2Yx7ui9BY1y6ern7ttvyouaUJjPhhWWEeePjgcegbdWJDrSQBAKauWHmj9NWhsX6rjSisRyjK4MznqmfWUH5d66N",
  "key12": "4i7o4wVo1efXQ2tytQn8WMqvMWV6Kq64pLKtAVf9m8XRVTGjUYNEFbYQBwisY54FBWi5e4d1FVZn5yFGuAKMfgmx",
  "key13": "3DS3DWcu1j4kfuM4ETcuXBy6fCWQmiDv3Js7TvCk9QxJbAQqYLCSoyGo7u2DBxXycPm9upqjCArJNpZXkXrwdKP7",
  "key14": "Kg6pVsHG15CAyfEtD9fGidGMafuHavUPue6PD66qKb1gwj1mTxKgGHywbaJdFfHbJD9gfh2e1vufAKt791hLV7y",
  "key15": "5PXaCpr1KPR6nUp4RP3T6aM5Ekd1aWt4eHSHvbCCVyBgaek7HXGfWkAHa8bcxe2B1paYuHy3cobMsZvKjvrmJcrm",
  "key16": "3gAjEAzvyQjh3bhDHnZfweouSK7b83VwByFDdPARuM1vFAsKYJYmeopnN4GK3EvpYVgnb3Zkf1cqF9uA5GrCak6B",
  "key17": "3YTXCCU1K2vRJDnYDWS62w6FF9dcfz5sCR5rPT6GV78BtroJ2TfY1chJYYCvqpwBadf76ATviMQju8E8isYb2uDC",
  "key18": "3GcxrVkuTZKn1fhuVaQZ5pC4eQiT3ibfdVsGMaUKfsXtU1vdWEpasmXnCR1tGZLYgAUVJDL4FAgcSuHHRvVQZXud",
  "key19": "3UsucCfjjLoSVPQJnMSr9LSLuRfR21jNoF1y7WDwLHyQh3zPEfhvpE7sKPFHn3dGENX1FoCoQyHGhmZaHWsKDysS",
  "key20": "5oJepS9TFLSnASUa2aKYptkExjej3ZmpaEjGGnitbTuam2BATicbq27eg2JKTJaatQ6fcnwJdUTGfw9ufN4frXf3",
  "key21": "j55N8zMxwPp8Qk5nvSR2izifAovgqjPpHn6QBshZeNPKxcPRe96pJuJUeD9QwYpq1fQ4KiRd2GtX95k56THsiGS",
  "key22": "5u5S2uLgFXJYHeXqnsJaZS7D88TCrX7QECJws8Ay8d5tW6zCwV4rsBRLnbsQjZfhTF56YmxF5WyKPwiV2tvaqkt2",
  "key23": "2tRGJp8c2mR9w1Gz43DA9eQWuN98duQVVK3SfswsDMQDMYgfLb6cC26XDP5iDbZ8tUVfTY7wEqzyoUFhJYiDZHCL",
  "key24": "2PbHsNA8VGdGVq5gGhAb2Hz2M7SJ7JvHZKp8jjmGMyD8W1PaMsgT8CCyCSeGEcQyVkgZCyn5pQLbKL6PahjboM4S",
  "key25": "3u2a4CGerbJYuFWscqH5yXwn2Nu39NPmkejozU11Bo8Qas1ki2AgiwRvQPFw3Q3S64wYV6GNdwzaXZ7BvYaee9u9",
  "key26": "FqJQsPZpDUPRuS8qY7vs6TFUUd9qCZkbXSTbaZoNbkaxviJjBRmW1UB1keEoBdkwHof3fpJzveR9hDkhgUm3Cdq",
  "key27": "4hAZK1srqJ9PwErGo155h5E1pC2A95Kb2Y3DS9JYNGePbZRZ6rN2AoQU5hBmZ4uQRgBTNhwSPi6Vc8ebL86i9Rn2",
  "key28": "3NsDn5Xeb6gRv5ZBenfn5k81sw5zHiGo7rKEtH7G3AvqVEd36TcydwhWZ1kSkaBo5Cu2PRdCaYBxdWXBv9sJwzME",
  "key29": "4pKtBY99aR58oFkpCjJqh9aXjJDzrZEjHffCFs6w7ZNAqxS8BKZUdgZchhvQC8Gf61eaHF8hUGFbnXYNUkweCRKr",
  "key30": "3gnqXbiZ82iW6rqHbvcWfw9epGJFL36W4K8cUvVhvmdxDvjMZ9GBEn9Hy75CmvDJLUJhTiQCZ8GucBEH2n2J9DAt",
  "key31": "3KcsFSx4zDBLn3kKiCmn7dt7hQ9PugriNuMVoiqDLY6Qe179JfD4fv8nyi2ga1sh7kNSPiPNvgPeMsv4rZ3CJYp2",
  "key32": "49UJUzmCGhteoobNUbq98K45paugoXYovr4KwjDTfYyF97U23vp3pkiQ5xrPM9w4ctnyx9WoyB4nWE8u1qK1s1us",
  "key33": "h9e9mqCfMKLeiaz1EG9QpkwTRBptnK1SSVuowc9HDNYU3z6sM1DnWA8CqwAZcRYjSRHaBvgwsdge6qqvxR1fKyu",
  "key34": "3SbxwqZpic72y9FrXhYco6YNPXvrAqzFB8GEm3B9sKqU8PFjPpaUTMiZch6ihGcv2r1mak3CyG11QNHwiy53Vctw",
  "key35": "3MxPrMDN9DD416bJMWTtDtRyhF8SMXUATNV3AyBUmsQWXr6DzEQ9zQ5jRb3bVvvkfxYKJHojj36xmJXqCekUn7pe",
  "key36": "3tCRkVaSUkRvwrgEZZBCvTXiHRRD4Wha9MYYtVJum66dbRnMQ8Jcy5wTZZBwToWGvLGafsNcNWGNE8WTtMcW7Qf8",
  "key37": "SXv6vGDRmLqYZPRo8Jg5komrKSZzJGHoSAHksPZ7k85hAHA7Z9XBu1a6eDWk5r5Y8GdUST9snZqyZAxZTa6feAE",
  "key38": "5X5xcKYzHy5GzffKhwgsFZo2SUqLtrDtHUFHsJpUBSPVpTLoc58zW15AaxyjvdXPdEFqQXvJWGbNjPM2hfHeypdZ",
  "key39": "4Hghr1L9CBf6CY78CgEgTHT9Rk2C4iFfedS95chgNRestbgRWCeSdUqBN8UDHAsgxb1e8cEbDXuK3dVDfBEhxZJ7",
  "key40": "HF2MG24R57ZkxmiBNPkfTcAH9fnYjYrGUyjE2hEWpxo5VSKJdXxYV3vQ73BFAHpXMWXZkGRtDLyavGuQYjsw75B"
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
