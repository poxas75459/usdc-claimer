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
    "F27uZkKsQMvTpkavehWUUuhjHcnrLTjfT1BN5CVXjLTEL56zEKq1zNSdayJn9muieRoC6aweXJzxPHFnqk2AN5S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2phrxsveE3A8mm7ihjETxN767sQ3zWt1ZgaGshbwZd8PzbJWF6pTpP3arxtX3Y1xjMx5Rjpq2JHc9DFa3385t4CQ",
  "key1": "57hcjvzZUbxFACqc2QFEEhvMgT9PxsMnRNX85r6g3Y1SHqVCkUJXRUyeRZN7DoWedYayjML9k2tbAWsD9QiBAqXE",
  "key2": "4jE9FYyJNiNjkkpn3Nv9aU3CdZgWPGKwephAJZSn5QDSo428tpd2utRxjPZBd9E1J1NDqb4UNPMqPTNywX6XBAve",
  "key3": "bE28YTCMi2iHopp4NXiCQkb1ShMHVT6fTCKAjPiq49QJhBmJFodkAerYC3DwBkWrkfRQ1a6KP96PwTYCcBMKabi",
  "key4": "4DS8fHAszc8eLHcj9664tq7Fe3HjS38HxnNNwrPHxuDsQLR47DCmz61Smht8CquzW795h6yRw9HvDa8ruTAbNNhy",
  "key5": "5vfX2qH8SbMsHeMULnDRR1QQDrdpbqwm8s17vqhY41eKXwoicYHpKwRyxGh2Za7WFTBAvCAmwq3K5pPcwsT7cC1U",
  "key6": "5tsSaJPz9Utb2Y9SoUNQ2xHRpBtWJkqarMeEcwTtMtn3gGBLVqwHtX2dWWW421W7JsvD1CiQzAzs9hTAX1ksBstB",
  "key7": "4zkY7svHcZvUv87xDHiqcTEza1YqUSShJPWMSrgYLutJTbP229KJLpp3dCixYMoxBwvf9QEAkaXvHDR4Mx9B6z2Q",
  "key8": "3c5LvjMjmpB6AUk7vUDdTjr5B7X4oaqupRQAPpnySNonmidq7grngFgREwMzvpHMFX6nhaYbNiTDfBzszAPRpznk",
  "key9": "4fZ1DborHS8fY577tHMWjYD1EiunWauAeXi4BkfKSQeqN8Vt9vPWiSyXsJtzYGv1nKqiNDbnKuL79ZBsFg2aWMLF",
  "key10": "4K7e5aCBLWy94cBVFxeibZyvqHVPFy4Ti9C4S2TMaNjXGrVDuSerrjpqNkFP7eE4aGxuvtnuK2dYYHu22yMg2qY4",
  "key11": "5KEcpmUa2NuX47Pf7TbkYDzU4NeTB5JsDtkQpLKwbpZTLBLDvKpVAqzEDnW3mvzVDSGjzsWmr9WDUYQNwFWzvKNQ",
  "key12": "5g3ZWiHcDKzDTypgtgGevWbDQdPx1dwzFsKZz3Zdavt2nA7sTGCpGS9A6yWvX65AEto9mZYW65EgMjL8srJLTX7",
  "key13": "bMmSxvBn3UyDSwd1MA2ig3Qdtds2MArsoEfrz246AcAyqDFjquC1AidtZvGVwwtvsC21NLcGXDZZYTVsj39Zt8f",
  "key14": "67apMQmZcyY8AdV5sLf9HK8AtjMhjSiKxPCR1GdmJZZEX5Ry4y3qvmJWjbGJQ4EGABcYz9brqyJgaBvjMLosd75u",
  "key15": "gV76wycP5FfvJdY3Mje5QDz5cT19ceSkKgodibMYXM4i4b7HnJHJ5zrHGnVWAfxW7KJjPNbS7fxUhJhMNMbDm57",
  "key16": "58U8or63PvMwsN71QDDQm2HzK1FFRaZtQzNH2c7ATNrR1GnJNdR7cn1n6xghiggZx5x1w8xHAfcsbGY6krcDZSDX",
  "key17": "4L2ddaTxkGXLuyhfQyPx3GcKy1oMEoBVZUGo2dDwLjEcij6YrK3TFmUa4nWgrJEK1ZZSAiXcPyoMr7vLGHNnTegT",
  "key18": "37GAaNinzeYVdVgNaLhcyca66bFN51xt11LpAiEiMj99ACJN5PhVULCXK9AsnTFrPyKwifr3P1tWTEEDHdVgh4ae",
  "key19": "4D2PKBLiLWgToGgMKvCViDkQHxgmAWBzaJ7RN6y8fMj6doqDZtqK4ztipd57gooYstoB3EucpqSWSihyiBuWtE9j",
  "key20": "3TcQJL5XfAwTFyeT2dsG7jebBg6XrFpnE4DTGhit2kxjRnJHZpnTQE3myAakAXsXQKoD3W7K5SQT8qwZTHsg5wEe",
  "key21": "4K4onSWWPjCUJrZehFnsE2py8w1f18tjTk55webTZkbs5R98dFVRFS7984uPs4c9FDDPF7Rg5uzEVb44oj4C49Dh",
  "key22": "3jpvZBozncZyoEXYLDAchtbPsYTXsJZmMQ3REzbcHoeLyF7DEQFsMx8pVsGx1tanBxACwpcafUZAqwkJgewzU2BE",
  "key23": "4cfdQ55JXksgSuBwtaKszKMLKu1NnaTvqFcwap9yqsFausWydAUsWKCGJzQHqk9pjAjuTWNviLsuTYiEF7TMyNJ1",
  "key24": "2192N8ff1NfVRhP4MBAJN4Ckmc7zTPvYUvad9MyPbWhFQ2919vRveiP2ATSXfzewWn76k5nK8parLaWHv32GntY2"
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
