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
    "4kcVVi85khnFdU9gS6HTVnWUZpSJzgqPFWfm9Eeww5g7gvw9EWTLYG2RB5DUtcyWhp1feFayaSAQd9NGREsVNtsr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dkRjNg1TteDBTkBiS5P6gKw2yD35ZCzE7oy8GbghMjd6TcjaHeRz1YFyo76Z6kBqmeQftkULi6sMySLkTA5Btf1",
  "key1": "2vZGNJoibbbAmYdat9Av8CaHD9XPYKWPVTr7ooCr7tnHgroEs6b3gt2JBEyEmBGtJFWx14jZtd2meUrzaNKAXpUj",
  "key2": "3E3hSNHVpbG2AbgDos92wEDCyEKbNrw4BBK5zw2K19LpCesiuEGGKdKtb1UWwJBq8eEVaXm44TeeLf6iJFDZNtfW",
  "key3": "3QyWGnXnuULkCYyoqc4yRybAhvoA8e9yBfxa4MLBqMCT8nLRhqJ6w86SgRPMkpGN9JS4AN1yMVBs68Hn1RhwfnM5",
  "key4": "2FTTpdzZf9zKttStpDRbnSym9ZH1GNBUbrgp5oeNA4eArttQ4fc6st19jXgBs86TE9TXP4YA2Rc2GyDg2TJvg7S6",
  "key5": "ZALxKsRj8spbpv3uTeH5i9HA8ejgqNzeVptDzXFmiEPwb2N4qULozJtrQJ5pNRjzsRJWkUZmorQRngFCRqGf5bq",
  "key6": "4warz8mcsJ7CsUwF8xZfrUNqShbRb2nAmg148NVwxzg4jtru9Rb19KxABtVjLTDio2v8Aa7UonZ1ekYWj1BtJyXo",
  "key7": "3CY9S64Mcptth7fhRx6LirdcHUWYKP6u9yLHTwfoGBorSQo8QW7QWh4HWkh1Bscq4TgMFB9QySv4RoneLmahe1GV",
  "key8": "ATwVAeyYwuiUxAXDFPFSCr9t2sCHUcyDjqi1vHWTvA7WQwA58KkXDyzKMnRnESMna5t8yKY9k2MMvkB3gsMuKzU",
  "key9": "2PqE1ZLcWw8Qf2MUwKFrtjpvhBPduUkkDoF5Hxtr7kdHsApNK9TNLBuqXtW8MjEmou31e2SRxxGa4YPWmCzQtm2c",
  "key10": "5oH5Rxq9cKQcG3GYn4aD8zTka9KYdmnWPWDRcoGRCRpHdMcS9iwu4dAEc8f3Uc3nSs5Aqgk6DKxadEBDfDXyLgwc",
  "key11": "2E8MmgiwY65L3Wa8kL86nxWeUCDwzVmLtHDLfuK2NdCiiZH7vWJFbLK8z94KAwayUmqexTv6wW5GFsBTB1iwhSqX",
  "key12": "jKRxkdJuxtg7vn2Yj6P9SXdz6X1npvtRvJrZsg6FU3crSqipjUrr3cU2KeWAhEvdWdSrCwgE56QtNfQfQCTgp7m",
  "key13": "2mmYYA2cRQ4qYo6PoGEdnYb5aERUhJcJD1zKS2Lc9MpAmq6vgnQLL3KE66zpAw5Xs8TAqWAeUTPUaEFMRk5C6bZA",
  "key14": "3rU2ibcHLfuchV8uDT1gDWkY7JNMqtnMVS2DBasDXkESYTgACSYEMMk1uEuYw7rbKip3TY3ViB85mQB2KoKj4oSD",
  "key15": "y5UWV1c3fPbjfkSzT2QMqrNynkKeDF75M8FFoSRBcGmA7KJ95oXD54iTxUM4ydhaf7RpJNuPpXBN8yeJPjPcidx",
  "key16": "5hiSyZkUU4B2edsK6UhkEwYsEFRkda27nBP3vxb1JqWiSP3GQAwbEZGxAk8ZLqpmLneq2c5FrGPCQcguEdUKNT1s",
  "key17": "4yx7eYtfpvhKEwUiV18MaQSAVRj9F62nZV1igaG4CP2mVtfDDUP24hUTvs2e4MuaAaz9UJfq9S3MVMFxWUTeTynL",
  "key18": "4bhyvAY3xLTzxWid44ZaqTZYURupys4FFU1toNmCGFtXvzwYFSjhweeDQ3VA4jkLr6XJfGK43HAFqGNcBYoqa6vd",
  "key19": "3KuCtnqRwRDQPCEXM7Pemr4YHEj87RgrZD8qaGUxEDRYSpCLCgufEVDh67ssQXF4VYUEUS7LuJP6sKbrfFjb5adU",
  "key20": "43rS8FKwoKeURVZJVgLLgJuUZZqzY2XZ3Qa3Vqo9qj5yeqBttATZCKNqywjiJFUyKqkcYodTf6GZmNhNvDhHxBFN",
  "key21": "289GuVcbeCkxHpqZhu66hiiisUJp1ePxKBUtSXcA2sv4FKD9czqcKU1eX1KGfof7qAwZDQyqHe8dxbd8qapQbRhH",
  "key22": "4c6Wy5PVy8AAaKvKoLSY4HG3EfdnWCLAS5P2BxCbUVGdEj9sPgCKLhG3eQHvtxCUsq2g4vDWuxjvyq2UKoW7DnGW",
  "key23": "2wtE3hYuD2rdSnRQ1s8uRLaHJ9BJ3HBavH4GdPQnck419F2PW8J9KuTCC1FFLaXwTbWL48bgfCJC9AjKiK2EQmvs",
  "key24": "jkYkRcz7o8tQMrL4HKQPW3WLK9ncfhctuL1jAaAxdiLZWBTof4EVgvKctvzhtQHkb2rH8EJanufXaKB4uPtSjqi",
  "key25": "2JEh8a3ZaA24iEC2jRjLj8bht1NMi9Gi4KqR3BeK32q28HPZUQZRyAg21DcHzJdJVgLaRyeQqEd3K3V2VhyHd3G1",
  "key26": "4VB8e5MLionCyTfQBes5PBQcrAHVU97Ag3jug63oxSSNqqgeEaDc8E97GFZs2fA3Q4yovNSJpiSkE1EK4wpZrYJ9",
  "key27": "3QcbX6FiNFxuL7MLx558CJQruY9oc2GRmywoYYD9ECPA1xMjJ3ZaauKoKsvJhgzMeeLTXUMF62xc4ZwYSdw6UP7c",
  "key28": "3ugbVdtY25dcjH5FT9NXEkxVf5PVz1ghhoYCqZRgcXXBxApppVHr9StKseAEKJEJUBoFpBXuns6amhG7xXaECdgV",
  "key29": "5ZJcb3HFzhKDJoYdZfDDQ9w6gUVxhLscFBEvvcSv323YjVPSHdbmJpiACiPghwQe9ayhzRKsYZCNhakmnQPCfzXL"
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
