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
    "49asFwnAHpXct5JWwfRKuMFozFvBpTP17FcNg9ve9ADFfgW345rRyymkJEZx83GDBpbLA1Z1DzdZz9dfbtsHAGw7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H4NrXMquHHK2LUR2fzDTA4m17Q8wpLfPLa2NZsh2UXGqtdibaJ16cmMWPxg7PezCYBL2WwYc6NgxiuSxYoSU1Gk",
  "key1": "431adWmE2oa99UFhdNytKMtxrDQj8AkYBbDFk395NdFciELJd9nyuypq2mEPDELPEXDrEjLtqrtmWF6cVxpLq7pE",
  "key2": "4HKF1kuppTeAbmYLtJKvgDyXJ7ifgNXLBFrsePQa43K4BeM9zefVWzwJYmWRDxYBpcZdH9TZpuSHjcRHSgevYKy6",
  "key3": "3sFzkBjqV7LEBcuPWEHmYA9iYAgCxv8289Lay8P9ygRKmSgUpX8S4B2MRNFZRUWTCSghoFgyq5epHxFhbSrrHyW8",
  "key4": "3aE59x7GW7NdsRXxsWxVNj9g3SBKoqBM1Te4FDyZS7Tnv3Q8yUW3qijGC1jPRRGBs9pYypdZgn3eyKUGMqt1jRNo",
  "key5": "3QTxvzQnzhigoK9XTofgr1v6mMhtJKgjzVaQmhajJ69dmHxXmbLb9e5q2Rt4QKpUHxzpVLiQfj9N1pPA6qTXXKme",
  "key6": "3bj2bvGd9WtADiFZrjWG8YoSj4Rt7gkxBGbJacVz3WxhfwNdNyLgaAi8sABbu5LpGnpVPVUMB9Jq8ChwcJWnrkac",
  "key7": "5hcuohHfLebby1B3XzPpphSoU9d7wpHggtPPVidZdkpimkhp8PvitdCX2bFnumVL4wvKyWRMFm3d9qmDNPLaAWu2",
  "key8": "5vQ9145NnRP9wsbMkhvdBj4a3kZdTeDkqjtJf3G6q8TdoWbCbPXuTfpunxe2YQRG3zvih9ZxvZvfhxPS5AirAXXG",
  "key9": "2AQaUFei7f4scGSMU6U4PXn2t1hGboPwfcbHeiXCCysvW66WTBTk6ceeqdLa4LTKD6weu1pY5GVMBnAA2yMF9qFP",
  "key10": "2StdjeiDYg8YVymQ7RbvkchHi8oR3nkWVf6HD3Cf4CBXZNUJjv9UQnSnZjUSUMgb3dxq1MqznznwBtmNo72EmB9N",
  "key11": "2F4zDGxhuAsMndJSXmNPsJDmfpMWb1ppk744vYYVqc1zE5deQRugEr5j64oYF3SJ46ScStJ2o4ARPpDATkqbfjtM",
  "key12": "3MyJg7fZXKAyJSKCUQdW7T6e2ypBYLUGxojUGGCNLXXSciaY6C8WEtATj4MqWCiDo4f1QmssXUeocYHpgYEy4mAB",
  "key13": "3j2iTmdJwJ54DAgZcMzvUaznNQDCCrT7ZXWmsHLbXvM2p8RwsF9GWN3VBGeDwbWLH1KiNfJEeE4DJWLzeUBvmnj5",
  "key14": "2f8CMJ2ky2HadMR98ktfGkxM5VV2rKZNc24mwrueC7NQcpsJ49KLqfUzdZLWzSJMF9m64CkSyV4sLSd1uwifHU7a",
  "key15": "av49ucqLBZqQXvw1xr2xQA7gQx732A5ULuhBjK1LRsD8UuUGCvQH1oRwiroK1Ja8AP1yTwRu3VugJxXws4jtG4Y",
  "key16": "388utkqthghs2u5ptLveswi9J6Gj7SQjY4BCFv2xB9sFWS2to7YCwLHPKYZ62yoTFX3JEuQjTx5LpJ4w8MGowcQw",
  "key17": "22cZesvr54q7dgTKXbrstZ4vVy11FhoNr6Rcchx7bvWXYbtFVq6pivE5jLDaPurj9iXALZaaM4fNBTsPc18a4TUy",
  "key18": "1Wv1qTZE7wti42zMa1ixQv8XiTSLUcEPbotoNBUYjskt3GBuBDgSGQHte89GHaQ8Pg8GuoA3hXxcW2me56sLx6B",
  "key19": "xTQjiRq8quFWx3YY4DwFKndUpSiMMpSQBW52r4xuCdGEBJG3g3vgxswdQWHKtqyoeKku1ybWqRbUUopmTAkupdA",
  "key20": "3xye12MG5TgLvTwVLvXfPd8RkV4UPWj1hDdzjJSzZH1au5QNovPJwRwidUKyCshSep7AcW9eN58d4tkVWS1YWWEr",
  "key21": "36A4G4hB7e2NdnbZ7mYuzucpSy4ZSaNpWX8PWYQVTqdaMUMqacpwSDRTnK3g6ysjVGzGA285fW2Y5CmefcM1ZitG",
  "key22": "63ZFhZC6ARtkFt2JZ2wuvu8vbtzh1q424u3YmPf8wq2gLo2KKbZMWcxkSJNSQkB2aALY3pedzJdXp4p1k6LKWSVJ",
  "key23": "o1U56aJQ8ze3pTdwEKUjWUntAuUYgbHn9t9DbtGaJfsgBdiVUsXBFHuk7RiqSBuMaFidHpFXTYQiP3L7zAURv71",
  "key24": "2m2Rj1ex3vyKDgPUXcGDqHGtbcU34S65juisyrWVQD4bZVn4U8iELvnUbxhKtPRzdLj5y4AWs24NQaRJMsUrWZtD",
  "key25": "2rii5TdoohSQf7sbco1JARfNMnLJN52TwNpr8VLt2XNtXcgraW9o8Dq7e76CSnBVdjSqavhdyugME4v8Qkxo5jKn"
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
