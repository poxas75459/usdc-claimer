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
    "3N53kS5oCWvyuuGTV877JMXR3seYrnEtXn2yxeQBSHbTAJKCdyGmKduhzSeAzgmrd42sq5V1N3SVhKxTMMFUA7Zm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48nmn77BuSyi6oVmcBBZwsq4fhjwtxFzzvMr3LMLWQMRS5bMLMxiVgX7YQmDM9UwaLAd94rap7x3GgJnnHiUMg7F",
  "key1": "2XQBP6G7UhqQJ8oPpigaAzR7JittA9bipSiMu7Tyyv1H2DULGYTeu1D2cRitt2m5V8LPCPXYghmF9dSRN9A1rkaq",
  "key2": "3DCgiaRtcDUVGyTTnE1ZEYSHFv33514LUxH9dognYhATwGcHNb9mkwPWzA84MDkiWZBFGTRLa8pMXjEeteYTN9gV",
  "key3": "Gn5JpYbGLEQM6MyuF967VKYoSQvvz7qgpesS1sW6Uosy9KWerpjYNXHjbp97GshFJkSMvoUkyCLw8ZNFHWCyrZF",
  "key4": "2nnPybhZJoCcEc3xaawUUwDACjmEfxGfgz6hQWLF7EJJ8VHGW26bACinfpjNtb1X314RNokcHNFmS2K6Xb2YMSpy",
  "key5": "2jzypDnY4gEQu2a8jv6FGHMuZ2AWFZdDUH6jx7Bne28mCsCGqa5UKQ5PkQeBLpZdcc8BL6WnjnYCQQxq5gC1mf5U",
  "key6": "YPWDsc2sXrT21im3Vu9rqp152Fmu169piNXNEs66ZiwLYQcQJpWq2kbdXnVb7EAXa3y31LzmyVBnydpcYPFFv3E",
  "key7": "4uLbgvnLKR7Ho23kC9KMVK7aZS7wMsd6MAEwRJiHQ7eMESVXU7w1UjQ4gPtMGrU9FhfokgHfxD3LPCz1bpUadbeh",
  "key8": "2Z6r5jJJMYKwaxvpwcnY8aK2nrq556V1b1Z9bUBikUCmHXwhCdyuEZE1Avtkev3tE3CywKvo3DoeTPAmjetJbggi",
  "key9": "619x87Tkck7fizHodCDemWLkwTgHfkA2hDNU1D5Pnfo4TnSR7tXPm5w16HZpgCphdjZ2SnjHowvc3soETnkLCZGv",
  "key10": "3nyKtF7QuapxpMFrmdF3rtk4aE9ckJtEwfaUzDDfSor5kdAmjbnKcxRafuAXEGhT1oyyQFTA6xpMSDFKWQMvpJyT",
  "key11": "4Fbg8Ch9uEDssuU18veobjnXMy3NkKc3i7Gb8vZVR2j8KvyvKe28GGYRn2UsAYQFjHnLu3BJj3S9huy8WDMVVEjy",
  "key12": "3s61TpBgUUbCmbo6uFJk53koXLhKuwHHakEPfubB6MxK4YS5BsF1GunGX9TwbYhcunwzLEFpeMbJsqh7znYAHZZg",
  "key13": "2PMvnQe3dnQGQinoLhwXoPJxBhycAd7bXUeweQr1f8tQsJCGm4E2qGnhVFhvANZyBkao8S7G8dsAkL3VJQ2sTkmL",
  "key14": "7hR5Kof7pFqwzRyDjPoifTdeEgpdtNm22GPcWoCh7oQwsCn1ewc4a3euGRU28GqXMe1yfqerNDQwnukbAWGgEJs",
  "key15": "5ceqSkhAyNZtTHiwkAnYMPFXu6Yjn9ECxKCFxj5DiV2r1Ecp1i1b72HRVVjPDEXdRTNCgxGPouK9HxpayhYdSvVA",
  "key16": "66GsMeuTy9phQwmcPmzugTw9WzNP8x4sTxiEV5MoD2BFRLdcdyzU17wDwEusxNGg3JQeF3NZT9ZKp4fn3kLtveFT",
  "key17": "2kxUbm4VDM6AZ8utE8kvjCMT634yqLUmQ2DYyjUgcAFDSN4genzgrXDCuXBQ8FMwixdpJcyGffwk249B91tyogtF",
  "key18": "4hqS5WVmtgy3cEgd2XErzNPapd9hzJYQt5s3PK4upGyoQJ34SQahUufjvrFDydX7RNURyaDDR2b1xYsDMX7xJYtQ",
  "key19": "5ZxjeJ8GJWhJrY8Tm74HMakNFd3F9u1UorZ8ckv9wL5Ze3Eoi8YJb5uHkhv5ZJvx7Gwi9i8n2bWD1RPrR9nyebbk",
  "key20": "5pHcgfgbzXHfsuGxg6qMf8s4jVEJ2upK9cXJ5ry5DzdFSiQbhNdVR3By3DqDmNb8FcCJb1JqCHLMLsQ8NiAEkTrZ",
  "key21": "RVpecAAXs2jYzWZ1yR5WcXLT15RV2MiBbYxWksGJNSyREpchLRL2GmwtZLAQKy13tqstHgVaTZNzfSXtRSDTtEc",
  "key22": "53X3y9NEnzMrmqTKjTsXbEGcPf3MSy46x6VqQQiURgZVrQ7ZkkG1BfHjf4TYbntcUpE3wqP8ztCdkoE2TF6jrnRf",
  "key23": "4i8ALebqVquxXsBBmY5q8wmDhGSPgTinQJZa3DQsYtoiJbJG15rcofUgRGYekxdS5YzbM5KQo6mn5hVuPC2bvoPk",
  "key24": "aEUkXt48EdTPjszmhLsRuXmeS1GLpgeurBxpSYpYgupKhticKSFJV9DEw91DWeLBPJrP1k14WTbJxjQtfJsfhBq"
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
