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
    "3QsBtDsegfmTFKhi7GQkkfAyYaD7qYxc5GEfc7fJHnocwhEjNonqiEYkQ6XoPmdfNLcsztRHwmJZgU7SBhKQv1LR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37Za1F7H3o6kRwMNyMeLBoUBE8rmNY52PQRtGpZ8rrrj3fQWzeSFjtHPE93F2e3Z48pTqKsf8tEhZhToMB6yk8oL",
  "key1": "d2DZu5th483dcu8cNfQJHRKQk8KT5JwbeTPkgJHrtbicGGcL3JM4q8puhagfN4ecntR41ipQRcLwxrmiduxNmV3",
  "key2": "3pS6Yz2JvAamHxWQtoiRFUEL2QLLeVcQTGCBaDUZZrN6JrUCQw4xNppMUps1Yoq557vg9mwdm396DAB9UQ7QC93n",
  "key3": "3LkbB2gmoaDVVcmRPgNUYsHrdoRNvxEuwy6XShPLtwXdggsETGnc4u6ibE6vPL8xVwBrmfQPKF9ike2oAt86DkmQ",
  "key4": "2kXpBnM2iKiGAqpRUvqggBDh1ntTSS2Xb8gHqy2cQbuPcc1HJG8YtHM6sfjGgYFwT5kNSHXTLFCnWCaZW1QFs2SV",
  "key5": "3dMQo3AwX6XauAaeyRHK8Mqty3PQNf6XSWmEKCDTH6A94hYgSpNLSr8gquNtidMaJEz934DCae2TAqZTvUrGA9fE",
  "key6": "Vy5WB9HL2mDwJKbgRXZHGCvQFFZyCWaESzViPjYTmVfRxpnSvHXR1H7Aiy66gLuf2ZX5zymGn8wtdDV1UYW37sQ",
  "key7": "3EkA3Zs7P2USJhtWJmsVzw4GvrY9ENGvULefoo8eM6vREB3V2HcsfpqPEKTYGZ9jfCQ2J5788XbVpT2PU55DrKNh",
  "key8": "Wvqdqg8hejLL2cebmUcTzTvYZTnB6Kt1A3nXHrQ3ihfsHV9rJSFsphfnKqGYTMMuKwgpbuB5Exkh2HrRtyo8BB4",
  "key9": "FjCpGCij3QJ1MdVCQ5UnQvMPeahPW1jgxHzdYJHX7xFsP2YpFzRXgz89P2GdwYXgUq38aRBRY69QvQRZtwZZGZA",
  "key10": "2ogpY4uKxhEvhS3HHNJiUfste7JhwzvXsdgVGvcoR8obc7rxTwi9ifkJC4WYuGe6uPARaFjM2TPiZ7HB4SUUmkCA",
  "key11": "3SHeNZX2rS8xgH8AELjrAdBS9G98gXqdbypv86WMYAtASkm7ThxYr5BsiXWkZc6Sm8W6b32TcU4DnbpNrwpUF4fE",
  "key12": "5Ad6xoKGXSaNfoMdeS3WjTTadbemwp53DhC5oexJu6bp2bSzrG4uz3Y9GJPhGUd5n3mdKYh7ySQLQAo5ehz61NC3",
  "key13": "bf22mkRAdD4m3jaFB2qSYt5SnsC2L86yBQnXLruhsMQqkvqiToVPPMqqpcAHw9a7PQ8vm1rvHNdCoqg5SeHmy8T",
  "key14": "2RpZctPwisbQ82xde9MfhvUPs3FsHVvANvPZrvesg4boQWgPHBgtmdaRBQC1JgT2KNd6YtNQMwg8HYg9HpjFos2N",
  "key15": "9MUFQhmFpK1UQVKEWrwaVpuVkYfGdv1Hc6mVA4747cs6wzJzwZeY8c64jWLSzMgwoupMJDiUic6y1rRBcKvA9F5",
  "key16": "4K49j4PiR93p2DFexkmxZJhYQQT84k6exyRQBEt9mx81XQ19njTThMqtmv7qj59axFyB7qVCYDoxQAaCk84DpsGx",
  "key17": "668Bk5cPwsgbhh5kTmUMstcjhkpD6WhayhSk7DAUvnryPqyAo9aeEgvpczqRuyB4vxrdn2L4yYjveKBWVK2N2jFJ",
  "key18": "3MpRNAPx3uJm1CQs5wokB5f7GCTRZZNMxGoF2fx5phy8H4tEWyZwvv4B2TE2rmxLJ1qtmCFcgQXrFMnjBtj99TAT",
  "key19": "2SuoU1TSV7hp8QRfe7HZvQvvmBj3xDasczBQArJBYecSC8JiTKxuVVD4BERHNYf5SpYp7Tupev77VPJPE9j3NoqP",
  "key20": "4vjrNzkHFzEL7Dd9b4Jx4Cnt3mSpoVQcimrDErPnTgH7wSUjP15EfbX6tPECGnH6Et1ueKULEBfh3ALvPeWfKuRt",
  "key21": "38BfsNVvnS6dHAZx8sRFcMgbDGbCvJHNi1M3Eoe2tgLsPNbLd18Ygzt6MiBt8P5nNVEvmxHuXwSTLeXCnTt3bjuH",
  "key22": "5MLB7G7DGQF6KRJCRavS9u15UraHU49VzE3YdBJxaYJ8gfT4A51XXoT9mdN2ZgCdvzyFmhfSx4zVW1vBzZuaW82K",
  "key23": "3DfaEhppw3quNsKG6eDJnV4MzaDByERmeBXgUAbsgW2qMdKDvKa1Vz8VvopM6UTyxWkjxEYpkJFt65y8wjz6aTCH",
  "key24": "64SiqMAdygVWxHaHeqzCUj36uY2cfMssxMDdo83AmfGCnTzcX13H3MwgqdkKtxjAqcUunmd9kEJVGvDFZq72fchE"
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
