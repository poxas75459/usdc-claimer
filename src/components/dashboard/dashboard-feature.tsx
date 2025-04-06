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
    "5aruZ8DBN33LPtginj7xjo4SC2XjAwDgJzWKgw9PhgK4up3LpEMVTx69kpi7z6RgbJZQLoCL1AhAdErpa8ena1Rd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5raJcweh2HB3kT7Dw8D8ymCA4uHu1NQyP2hwMcEudDnAQ124w1hG56ARDkhTbVSJ99wPXcbs1WF4oGVX2WZFBm8s",
  "key1": "2WnNWjnL3d6yGMd5rcNTznerJvUF6LJXQF7RANVbtt7zmZd8FDc6k2ppdNyuCCaYTz5cDZKViF9aNxdZ3ouojcWW",
  "key2": "3pcKUEXjmUysBJgeekUm9Z87if8JHwZeuiGVbw3R5CdcaJ9XMAu9kvyDTqBhGTqSaPbY65yjJZY6vJURSDSLgPVs",
  "key3": "2CVCjtefRLxisa6pJ2ri5N5f8NbKhQe5fZmER3t6BtDYwXwN5CRZY41Vb2yDqTeYmsbXZuitxACKNZbAVmVnCkVZ",
  "key4": "5Gv2UQovFZZ9Xx892dRMNn5AoQSJoHsnBRtkPdojoVvyN8DcjJJ32juYq9hbrR9d3UV142VvLPSSsbjus5XN53aa",
  "key5": "24TJYRaKPhHfUhhhULnTfxQpPL8VDPXCoBv33Xh54FrxoSAUQhj5pNA6Y61jwMxnuPFywvDJ59gL2GX5LiAepu5Z",
  "key6": "5gZrG2jfEVoabLMhvq5aivZwyRL5etbdGQEnD5H2Q8q7ZFNaWAFsrQbRcWzKWjDVDshbn8VjcHteZsS5RT7d7Vom",
  "key7": "zWhL8T5x7uBm1oKimYzThVngRAabn6wVL5gNarqYkL7be9Hw7WVEdxQAt4Z1kgk4w8XmipdmvPGcnZNrqpVqsUD",
  "key8": "2mHA9VN5YVMA1usgnQdAzn6DSFaZbKGZqc9p851WhHtPhCPRzEbEVGoveEyVhH4uqeDRFDerq6vxpxnww6jdchHq",
  "key9": "5ADa7mekgFZteiPU8sXKhdAhZRWmBBk8LTbvXoFSxdKdjhaFqrfMrzxLbWVtQPSdq52P4KP3kLwARDchMsT9SiF1",
  "key10": "Ppo7QGSDdS8daBsLJX1m5dWPMx1Eb6racfPknj9kzFJbwt73qwjX1ic5kjPn1s4F23o8uLuCg7QvBWjKNm7kT7h",
  "key11": "2bAqfhxj4MwDEbyabp1YNgbyjMZ1kFnjw4Doa7iXXUKsA2Z9tHUMhBQQXqoeA1MkYx2bAeBoLry6K9dDJNnhnT42",
  "key12": "2PFSDPqGwAxHugfDLjXJ3HQ6GcrT6at9SsAwAm4bm47ZzMMG1a3bUKm1nM2AFDHFNrcHqrzRFcj7f3hNUVGdMmwi",
  "key13": "3mbWWi8A9vY6Nt5RwzsxSeoeuo3m15c9LSGudGjJeT5pfDAAJ91gJq1q4wWxn3hxsDzJevXZcCykWFqR447uLuUG",
  "key14": "3TLfbwFq88qGRHzRHfRQSbfjLdkBuEybjT8VaHeWca92hs8Fb4F91vAH6bbLizJRrJkSfyFLYgDtYoSxiqt66tq9",
  "key15": "41jEfDRngPLNs9ebHbpyN2VWP1Qc5VSYKjDQjiMNHT9q4AzQbiaRrzab9YgakKwN3JXBUyfP5jfRo2uAX6wT627p",
  "key16": "664K2osy2o1p9XM7G3dfW8zoa8m4C6TJNQEkdY8gLbGybhTToWdDrbZhpZmNaNzr16EZ87T1froCbiS8T5JC9Jpk",
  "key17": "YwRMLFTvCdXRAsg4564WRE6FE3KFdPnCNgZ4kKtcD3HJw1BXpmT2Q4GbxVjqd7Aghmjr2UHWJLh75WFP2BKSBzp",
  "key18": "4WuvriZQo1ScMN4Wr8ipCzZ9WAQF7nH2Tk3THmfBJxmvoZjqpk7SxbeYyCfKt3dD4W71kh1RAd8eFkjULymmi1QL",
  "key19": "5iYyJ4EBHxiNhZLj6mhCdRV5a6zNcBTcHvA9AM3E9SkjxZVrVWuRJS6NPQYfRZrJ72j3fY2Ro4WH9aBgJ4TaxpZ1",
  "key20": "5ts5JifbEUehK34eQDCAu3YW2syvc81DHN92DBaF2LWfiUZgF82wFhrjLaatsHyjDXZ1YzcGAE9LD6yXJGYZzg7x",
  "key21": "5gweafqMDbuqpTTDwxe4wsZkg9pgevbMSLjmmV7TiaxDWUrxNHitqsDun4A5pKkfYcF2BB5y7haHJHfPiLQmdz5X",
  "key22": "4jYgVhyjQLPxu18AQWV6cBUpeHYCCeTNEx7ngJrsCfEKzkmnVni6f1CsytWRpVwgwV3aZTnEfpKuiEbAozyLLYNj",
  "key23": "5wit5pD9xLUFhH61Wu34Pmt58asffauXMZcXMs2P3mo91VHzCuzDPV57yUya6iYhPdJGnomgL9mfC5G49aRF1XzM",
  "key24": "5NBPV6mNcMUj9VC447L4JyGbSxGB2zAd7MDREF8u2JTbsC11g1WU9JQJCchFingRavf2PzH6q452rm4NVZVbiXA3",
  "key25": "5thfFzZRBgMGPMwWm5f7yQwWwNw6BevAc7qyjKZ5K9yYc6mv5eWQ6tfCdciPsri2QwedzzGmMeUGA8gTbWwwi9dP",
  "key26": "3ZF7EgMChkYeCHnuSnCAfa4n83azWd6BadPG7z98n6mu5SpQTJpUvCakgWccvN3d6ViySuWXVtDDE1o9vksJ9X7r",
  "key27": "3NAxk5RdYxoBBMFpQSV9rnnGY4g2u1uyUBXNZ4Y98zHZifykRJLqquZib5YFkLYTafT3zWcgJD8mfxh3D5jJQLH9",
  "key28": "5Pd9ZvJ5d3cyXTs8pjWxmHH9Rnj3PBGC8xWqnDFf1sqTvj3Yesyx2E966VhVM5pub4tpPJBKnBocS1yj3c4oSTNm",
  "key29": "5BH7oKH7mub5psC6bU7Tbq43xy4ukTNaVQQSswBfNNCae5ZuXLZXqLCHJpgGHgTMjTkGmG1Sq92QR9qcxF3597gx",
  "key30": "2fqR8iQCXQrsWRjU7WWEJhEueffhpBroCFxxvbqTbj3rx39xQiwgXAAFWvR4CbAk9xoMP5zEyK7gjqVYz74k4h9b",
  "key31": "5W2yrUU4iCiqLMug6tDeaNA4wmE4jpKsQCoZqejTo1vj2szsZD8tjjFbQEYH3LN89gGdAg7LBdoa4fnzEF3ttX7i"
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
