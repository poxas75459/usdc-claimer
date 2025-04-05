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
    "ushkpFVpCLrhZfugVHZdVjUMVsshTAzN41Z7jr45j9FicCishkUh8aCoBukxdB3VTQt9AvtaMLefd56BPtByZw7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n6F33bcnBvkSak434XCoFk1pw1ZC6fSEgvJVd5cGia7ecSZmAoCQekoLgTBcV4PJ9ormryTgG9JBT5fHqntJ7bh",
  "key1": "3rtyT4ty9qGNsMxifj7qR1nVC1K5PkGuTopWF9gSp91xARvfxr8erFoZAYrKuP8QtSqM7qnT4SHyDgAXv1PHDvGV",
  "key2": "5mejrRCzLzZgPsjsexW2kaab6u5dHiSjdnWzvu9aseNzv72YXsNwXCsyfnr2vKSxVWCnx8Z1o1mSp6HbLEP37Yp2",
  "key3": "7yHho9UUETyRnRQouGwYF2xXrC8iJCj4s1Lj6tuotL4kV8wiAtjrfExgZjCsGYPEZoPEfp718Xa9jeZQbpbTFtE",
  "key4": "2GurPaHWhTDsLNc6h9ZaiJVuwe8tKqpvxf5BkXka4uMVx7DTmGF7De7CCACrqro8umVU9XkjMhyCwkRdmaaTnHKv",
  "key5": "3Gk1TtPfJL7yVJhm7fvGeCbwkdx5eN2s9iTBuCmjkfPVJFLPyoqLBGRSnmmJPYKnQdvsokyYEDUTFWAgH7EWHN8S",
  "key6": "gSq9vz5e2FWVJHc7dXrqmsY3qSo7pKTYcKS9Yj11KVuWYfHe9djWaaEMNCveusy3XnB3t8GKNPtGHPp39XbBen3",
  "key7": "3X5RdDgGsyYYpfyViXw8weBRoxQzPNvmVSSXdWeB9WDbfYvgMoU2krboCc7hkxA76NiStGeNP4vCqN6vePxpXDwt",
  "key8": "4aK7U8fQ4caww1uGftuv7u1kEns5Yo4azvzmpQihSLDsEKYpn2riPWknZGHcFhALVEth67hvvjK8XZrQoZDWsCpZ",
  "key9": "3nPoKtmS5LDFFvmg4Be7icU5GZN5y2jurW6RdFcEc7VEqAJGbSkCg1RFaCJtmWVu3wM2Rs8Jv3gMLrpdDDpc4F9Y",
  "key10": "2KBQJ5BJ4nvzdmGhiaFL21MDtMKft6uGfmkMmLfWtcunKSYWcNFgKLwiU9A6LWn78uqFkj4nydr72CCEZVvySWq7",
  "key11": "2Z918HXWv2KjRRfZhN3NVeT8YrhusxzKzfrWtSUzSLgimwSxwSMHb2otNUqnuznMzAdBVPSCzn2EhEyjFJiYeBnW",
  "key12": "4C3bFmbDXLeF1KRE1hanDV8WWcGSojMSS2TYjrGb1oE6j6XrYoqSucRm3kBTanm3WHifcH7QCFAQb7pLWKFKfyFq",
  "key13": "5gW3tS72BnzRszu4xpsdsoA2HQi286Q1TQxKYhrpyn15GgXEYUMxYhX8n3Y2WKFThJHDZrmoTky6giNjhv1QowNK",
  "key14": "5UQu8MxJVXKn8SC55NiivDJy9bJSCMY6GRe21QFuDK76nRnmTPtw7THMob6jEkJBr9Pv7TvzEgBEq5LVzjk3nZ61",
  "key15": "4z2ovfY9wVPzce1axvCwAhD4mzCUUL8MHrm7m3dWifAs6ZLa76C6aazFtjjnGJAzemYh71AekULHk5wrhcfQz8vb",
  "key16": "5wMwZMjyiEzBrRjYTyAFLcxvR2msq14utdTihbpKptWYPkbkib4cRSosXMtKzmfMgiqVcUSwKDVDeuPU5EDVgkrN",
  "key17": "bWpzgY6xdysxeBVc2CysrPYbPtoAScJbmBBeLCeCuKLgBV7hAjDKQSjKrnRwL8WqscTN1n32gAhUmQTkxNs5m3H",
  "key18": "5vQzYQTvXmSkvM4x29ainH4jrpTCUBCrQzSN9WWQVsmX98ZHGcPvJTxKKPbzXHtPBiL1rTnb81mKHZoFMNThnXd6",
  "key19": "4BQcx8xzbFA15RWsAZTP887PzuPsHTL7HgC81oNXtBQZ42NuB6v8CeZ4vNxGMUCa9DVvEFrYpKu5J3URhXTsAiDu",
  "key20": "5wbJgF6UJAR11EmqCXZqkYk7aL22nQFueGvt86FdFs5Eu6iA9GQY4Ts923RteARMEoVPAnK2SKm2mbHvd6RT64qW",
  "key21": "dkTodXzoWBcdy4cNpJWDudduFb9hnpAn2UpEneaVwnyAN5gFUPzVNkLAKy7M3Zut8JVY8g88irYRa6oUhDCk9Hv",
  "key22": "4Suczx7GXK3vry66p63sPkum3KHJCK63csgQ427qRSdbY4sJPFU9xhagvGrKTarWVC64EwDFzWv1JjiGRo8D52c9",
  "key23": "2aBjYWGE2widcRKurbTqt7ALitx9kV22Lh7s6tDv9PBX2zy2GzL3YKYQrp9Yg79bnzx7rWdfCM9jqwKz1hSb1Yaw",
  "key24": "nSnATt5hiBcKTiGYKiFgaHXUrgJhDiu9ieKzEmCdiZ15T4u1vvRqk21f7aWVfmdMEZkokoWP5Z4rvCZgh1TzmuC",
  "key25": "62k62yVLkQ8xWpi3rnMass5QHcyQiot2gVVUHAzefo3xeJTL75nZZoTNKMCYLEjcBzehyupXW7SagkeGy3m9DpCf",
  "key26": "3DpX9toFKwvGhHL6TDrj3Mj8zZyLF1uaM7DdS76tKfVKYSefQ4w9myT7iNRVobrN9dG5xWLLBgHKPWWSJQtfdcum",
  "key27": "VREwFTXxkoY9moqojEyPgQ848jKWiixRZP7j8CqPLYSQR9jXTyeAbqduS37V9bjQygdHFGLpCRFdetwkuHtv3Gb",
  "key28": "41rHwswQPNajWi96B4P4RokuCiqJXkX5T34Xb5FTC4vrsS652QU4ESLv5TSvBkikh2W1f1B76LeSwyA1YXEFPs7L",
  "key29": "5irUZkGiYu4PxFMEu3taGNBgMSbpNDQ4UhEq2GHbEXGqKEcFnqS9C2zKjigrXVncpH9NcU7CbD8Zd1LowcRThmQN",
  "key30": "4sLya5AiVK4nVrefw2YtweKt1VjCJ6m7tuKM5A1M6TCNhgz6VxeV92uX8TzeUCp9GX2evTD4Sww5iw5FtKAdRyS3",
  "key31": "2GTCQu7988rQsw9x42PQevwbjbjJgfaGRnQpGjkT5rReYu9Gi5hAYUEtiQAFj9kNQhGPDRcCd5Dfg6wcRMbm66CG",
  "key32": "2sS5Bz1K5frq36mWXPyECgjuvYP6bAsrnnP7gTKLt7mpwaTTj7gmomy6sjhteWG745RuprhmYDkf5a4SwRw6in41",
  "key33": "PQMqRuZEhS78XTYeQdVqh9dSAK227QQtu3qSAVGwsYBw6q3hnUCsXpEWTT6zZimLgHfP9EU7eec7WiY2BLB2aH8"
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
