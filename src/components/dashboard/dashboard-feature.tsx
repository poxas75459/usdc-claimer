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
    "5ysHkeiZaqWNsyNqYyz9UV4hb7vSSSyyqsadjNfR1MfXivRdnnCHdj29V4Nysv6qyRHqRYM3M7GNtkypCmqdFjD7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SqjCMvx91rcsQvREsLK6cB8uZjYV9Q1w7jQnqLrC7AMaHQmFsHvvKEx7mpa3hukvFf8Df3CDmxQJFrRgcPSWe8k",
  "key1": "3h7miVH6Wtm7xu4sjmbp3ut1vnLSWEL4x3G5fP3wt2qW4UmcR2HpnDKDh3JYFc8janZASSbtjTFH65L4CeoHMc2L",
  "key2": "1nfereGWqFej8Ux2aNyzTt9bMQruQf3FXM3xXGGGc1zJxZmcds248MW73jKnxXM9KDrEcYp9pJRHdtbhd1MRaXi",
  "key3": "53ZjygXHAJdKA5L7aaqHLFECcDWReMbGvCE5QRYnq93eqxWZRpqxseXfRYKU6md2FSbcN21jjQLQJ3no7c4qFbfS",
  "key4": "5p5o8pxTafKT4QAMHBB95MxWBHo1PiCJ1HHboEceXjRhetsZL3Q6XYVRkTV7JnCrsXVzcMJY4L4iVCvbJqdqxS5v",
  "key5": "21r1kWjiMRQhaQRNMiuHiFVjUjjJQXftDhiNv5eTqGQutSFVx6kfkyvdS6RZrHCLMsKfJbcNHmjJ3vpuDiaVJMwe",
  "key6": "3YAWsQe4BhZ8Wr9w2oZ52RyricUh8Rj1ZKCv6DTyyJEBcQYukhdST36tm6Srp6htjM31VrtNbxQnAYF1ycgMKfuh",
  "key7": "4a3cWj6TRQAYfEELB2RYcgFzDr1whTmJ1W8zb17wCYoL1Ded6emGnKCC3SR9Yye7y3kMGXLYHrDkijYGmuqZB5EG",
  "key8": "RfkR3xpYpefhKV33TGu8PpsxsFYfDpQ13dDVhcvCmgqdNdCdAEBQ6yKSS4FgeuQzbkZHzSsLaKUJFwkyuK99g2t",
  "key9": "2eCJRoZUXPQfPHEfP3ma5aGMLU31iyawzFPGiK27xkDnsF8Cgd4U24ATQUcVhGtw3woengaQLVNUY3wg21phRZWS",
  "key10": "5DNicA6n6S7os25Js13EqBC1axecuFXtfnisxHEBZNDcz5RsRnVbxey6GuUJT6gFqo5hae5RUZaNBXQz58V92sme",
  "key11": "54Gt6CafnxfjBXbydo4FAWMYXzZmYqnN2QabF269GEasWw7QkPoyX5PDvLffk85CiU87wsnjp9fxSQTtESUFRGUm",
  "key12": "5uLCREdJo9aWaAASjmNP3F4cWjKZmcbqaRc1XuEwN4d466FxFXfqybEtLYWa9yPChdVCbc9CfHwX2qKfAtqBUH6c",
  "key13": "4to5pVxHqCFSdfWVsXt5SpHax4KrMMCQc5iMco4Qek1zQ5Pqubj7xukBKCsB4X7fMZDEgXwFrQsETJ6Efp12qfBJ",
  "key14": "5PMnGy8HhrWr1iG1MmPSQyhEbM51PtvYjqEZKJpfLr3oszasKrr6dp9J1P6VZdWxyumbxaiioJLV1qMkaymGTRAz",
  "key15": "uoo8FTZZh7zbo6nbPsHegAe1hu97tA5gSpsjmNHUCKtisukiu14Cixx6L4HNgmPbfX9XVouaC27inLfaqFtoyKz",
  "key16": "4zEuv4oprimCtoCPz7RdpQE7gFnbz2PhgyPMAKKWWZ7HdDW8Prg3UAwhC5TJPqf8XbjXPNcQKj7HtEF4FGvz1VJF",
  "key17": "BBzRP4uMFDJMCk37fFZtnvxkTX1Fb2hirGeWXx7sBQ8c74phZYUq9hVqdV2SeUCM1J5z9mKxAp8oDqoC2aDUzyr",
  "key18": "34ah9Qie963PCU6jYDrW8X6d9aiUatqCTz7rp1xt6Er7PhW5ERRtLJCTSePMNgU1XnL3bhwXmLUPJFYDUuSscysC",
  "key19": "2bvTwFSkY5QKTpeqghmrmHsu17cstMecmuU6j2U4nGjQqXQbQ6D62Qc8Sr1jnUs3od1YSCJwBLk1WKuqAYbSiKb1",
  "key20": "2ysVnkg8LY4yiyT6dTBmscxdMNWk4cdfwu6kpSu6aXfbm4TuNHQ2ZEbpUeJMwHZLSbx4tvt5efaiMqDARLiRnWee",
  "key21": "25SXKRaNc3CpQgH7jFMpVDJj2zAdZRkmbcnzAasMX6RAsj874sTRs8qtgxHajWAov8Vg1yi3jDA2Fi1Y3ph1LL47",
  "key22": "64BYyUZsUcDaFwuR6RYoxfRDJEUdeQEMmVCd2MDyPyD3zUGqHtcbXHRmcH18M9QVyykHVHqaB4gC9dwxmhssMsLD",
  "key23": "2pZA7xGuA5qnTGycC2NfmjK3EP4v2nupRLuCv2t1dgD2VZBYKEY2cdLD7Etq7rAn9M5r6QPJJSPGBSojzWNs4Jzx",
  "key24": "3KzxYqYth9fDPjRWCRXMob8Crd8MNL3s6ug1GrwWfiHbkGTYLBzEG9CbN7tJL7DPTp561ci14M1Hv2J6vJzb2Mbj",
  "key25": "679oM4i9L6ZBgJafn8ZhJhesuKTpePq8Q3vRcv9Uuqpfv1qXAso4bBmmtA2PevXf4PKKNLMLViUdN1ozavm9GUjZ",
  "key26": "qeQuQECjZAZ6FwPy8vDyVtC6pPw4M4K4F7VFoXRneUAtvmbiaMmX5kvLudYGdk98PA1wMN3Eru3Bk3gGg7jEewy",
  "key27": "28ghP8YfcJTN5iKhgUA8nKNrJbWYhojio79pCY4K1MhMK9VySKJiFpfa6AjaNomf4bkz7VTrLxgf6stfTffvbz8J",
  "key28": "5X6UBd64aoBHQn32VkrrqDfdTF84yenM9EytZ2z25VuBZg2ZksAi4DQYW1kJ3qmCY7Lr2DRRevXsxesRsinBnbqo",
  "key29": "5WrqUE3mKkJjND3hToBZ3JMQNW5sMrKmJYBUk7whBVi43E691gPvN9bnABd74tD1DAsLb5Uhd5gqUSJYhLfi2VPW",
  "key30": "3XUciAcbDhrKiS24jCMwhrZi2TzLMtMRH746FDFWRLxYps3USk37s1YRXJfURZAJh3hDZEBooHLqNZBe9pK6Euqw",
  "key31": "2UceiuqkhShHXRWnwmdfij5PwkJF6L2TchWyL3EPKPVP5JmLXNJR8c2t6XV9PAo2x162EZyrwAvSX8SpvGor9gZh",
  "key32": "5YJUgHMc8aQZwvzfi862pqKkzpX6fAHtuDkQZNGVF9uxVxMKTkUb3VRJxi7rfgLpL4GHfKR2D1AF1nzEk3tpwyTn",
  "key33": "3Kj5UE4qvf5cQp3GzqWBVE5dBVDx2E9MyjJnxqgrhrPsSGHXBpyqbpwHWe6TVbFsAvfxsEV6qADQTA9d2a4ceUz3"
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
