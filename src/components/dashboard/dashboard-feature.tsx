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
    "4HignzbjZjonwBLH7b7PDma5cbc6Qo5LDgiMynW2BiBKWhF7wFskZJofFCo9QTqKw6B7jcbC2q5AGND3sndEYdQq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zarecds3WLcZhjLWitFqHR7A8E87G7okiS4RuQsf4f797zuEMDZw3dZXKYhrSYofv7Ni1oenYKDmxxyYLuqcWST",
  "key1": "22rHGuVLyTkwtoAn8wAowGjp9CV1cGLPLobypsEUVAEHHwfXKDZ9Pv3vvDiTaN2idRxGPnfqN7p3QaHdYeHSk3mg",
  "key2": "5RNs7P1PS3JHr8Dj2CSxa1w8nYfiRtajSxEgbxSyPrqFrf5wpbxZ6yWPfJb2h6JQ5Tcxnzch5V2Cz1oR9S1JU2z8",
  "key3": "54Ck4L1BQGQiNRK2EHHPZERZjHH4WB1qrAfdrpwoQeDGK4FJTFNnT7sa4EB8X8E3RXETx5P6AuoR9Wk3HmyGvg2V",
  "key4": "45u6aNByApDgZyR8jqpLarSJCimUvfRtMMv9498AuQksGsCYfLGeCi3aRmoXqAd88dGwfR9BrDtPoS5yTXfCmnFK",
  "key5": "Zok75m6w5yuQ9vSGcFC7dxbeFiRouzqKaYNbsDkU3ZoLRsEvkMDxaBE97BhwW6bjz1FsN5Zh43s1fhwL9kmBTNH",
  "key6": "GJn6MrDE2GuK1PNpcfmjdU3aA2HHkQREMEiyXHeH9aJ9KBMwoZgvMw6PGCwkxXGR7kGtKCL4nRfwWsMo8mSdyQ2",
  "key7": "k41Abojoc8h6eEfjegqa2r87hs1eaHAgGMd5a1Dv7VonjKcG3EkdTbEqk5gM7PDquPTHrbxuPAcMHQ6kehsbVAC",
  "key8": "2Kb7jzs6xd4xJB69JP4RejWYjWcBDphtYYzTAabBSFQXuvXMXj2K5KkHynU6fX6HxTuDZZpQV42PzNdU6U45yKky",
  "key9": "4Xp7FxYfJUyJoghEv6K4CGZHf2m9C8a5wSfW2kwzyyqVJD6da3AYLdrX62ef1Zk2fS4fgMKDQWV2TJk9idSaMbmg",
  "key10": "4GM2LY4J88nokQ2zjmkmgjzV9877TDB45oQNBH66YTVACbz8fAoJ5EdkUiygYQ4ksh9HQxS9qfZXoxz7bRvPnVRD",
  "key11": "o1ybWzHV5Z2erf9zjqCUY235rHwgShEMkEeNsbcwqQQk2FiZsNTAc6q68Ya4mKKbi4AdPQx5HeagP1Ss5Kxp5rB",
  "key12": "44RjC76UsvMHdA9pSZSJwjHYbWtovGYhQ31xooXgrVQysvPDDxXgrDtuBQMgBuW6YjcTjFontZwMsDRJkk9jbP9s",
  "key13": "46BumkquePoMxZhMrnycZWY2Ye1RVT3dNZxaE3c7inT4ZAF15WsV5LHybtXesqDYkLjq93BLRutQgNgjG9psqTfg",
  "key14": "4XzBq5jKxesy42FaH2yZGsxpdQDajz7nE6nT8fkrMnEkmkatEwB6f7cbySxaHDb2g6MQmSruXa2Qt6MxDPpw4Z6h",
  "key15": "T4gMWqZS8VDTjkDTVG8HbBmHVo5DLMwSoXBEVzxKScB3wp5VFy4aDr6wUHcdUAmKjrArCpvodWRBkwq42x2JvAh",
  "key16": "4DEMhp4SCbWW4GK2PtXHBXquGRvHrXS9gGFkm5B7vkGDqQuMwArzXuBVxeVbtKDdSV8j1L1eMuHCs3PASaij6QUC",
  "key17": "5rjBqrw8uiiQKbsJHP2iyGp9jukuWTaTk7Je8LqttMShC3suJuu5fnNBR7kZKGuUHyM8rcrMowHZ7kV3eCj7FzCv",
  "key18": "4nzmfwRsMVnWvoJZ7pqRDPQhRcuF17tQBoF8BFusxuNkAZHjB1YGYQ3e8NcRJRRTBY5v5QtXvwETL9sCbACZt5Ha",
  "key19": "3uFmSTDHkYsXNqjExqmBQwnwQyxqwzKULBH39hrWXsYPDwM96Jbve81Br5eCGmjDs4axpYm9fyBqBspL9G2tfhYx",
  "key20": "3oRTe2jzKx2dReQRciNcJYoFQ4s21dUSQYmRxPLhdfW9Ematd5wG3NBaCsvbMogzhks4A9yFJgdzByBWjbwCLxdk",
  "key21": "2qpQG745qoZZUAbqE8AW6DKF7acmX2ZFgVr8vMogTWzVC46hrKnf6WFFpEHab2xv3TwrKbfwM3Pnuk9FWcH6iW4z",
  "key22": "v2YqQwS1LXQHKbTTzBRBhR8iGmiN7ALUNqURQ9rP3Yf5PJVbCJWnDhvbyitwiBkrsfGo5eGyDhGry4z7V1rRLgm",
  "key23": "2euzS7qVjYLZ3FgogfeKQaHjGUEM9fY9x3K8HmZthK9GMWrEUZe46ZioexMR7bwZoGVMubecQAzpPDnHcQWYcuiX",
  "key24": "gv2dhi8R7VkzWNaSyg9TQJ1dHohXpVZv2ZLxm2S88VDSLYwXmWKXsvZAP9nHzfwDBic3RmJcs2AuA9ZjWKZ2AFG"
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
