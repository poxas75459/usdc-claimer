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
    "3f6jDZ2Jye7bbRCPwp48RFGVrBqFvS1nTpcwcHfQZ8qDBVXSr8XVcXEeCVzXCfnLkvm369xe1CbhcBANRMDonw3b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5teoCfUt5W8xwC1tWDyM9p934mS3ZTAohFb8WhjDJSotSFdqsGjLzEcZoovEAoyGdcdQuQjupp1pw3aGjRffZtTx",
  "key1": "48oAJr168gQLQCn162YsJFfcXk9tJgVmjzXXPNkqHL4DoVmKZg3ff24JpZxxDLMFaU5qjW2aXXx1FVThK9efiPG9",
  "key2": "3sMTXHLSXrTqFtif6v4YC3fJK1uRTUdwNzJN5LQh9CW6ECeKN8Tu5LVMDPRSyLdnxVfKttorfWWhWABfbtgPWQjP",
  "key3": "Fjr4EHyvqZsn3sbSK63RWDWfAGBRxfhgUDJi5xpqPRax9f8zbu1R7Pma9gk1mnYA69V5SBwrA6CikFQprMhp4UZ",
  "key4": "5Ao8TbFNt1seiE67NeGcQCpSKhGMN1fHSXv5o2zWmceUw2WYmrLZCxLnGQE8HPcCod7uMMdd552nq25rzpVpe2Q2",
  "key5": "3vAhgBsgBgSbCpV7Kmx3StYiXcq7WaVM6HeNmXrPDqN5jrdsiLcTkBoijj3kwyCEeu5j4w11QxmNxQuc199AbXxf",
  "key6": "4CtzYaei4WuEdAF5grejFnhueVxyahfjbry1Nkh1NpcsnKT26kwCMjXMg6EG7CCpdch5qBRXzKDkLSzDrDH5ywFx",
  "key7": "2Ghhghcx4StEk5ntiP4h4t7PyeXAba3m4cU64p7Cweeqvt3QGmZJvGUYjWWns7oNNWgVY4TM8Cax42VmBdxSpVK7",
  "key8": "3GXjJMf9waWShufveCSU9QjnGJ5zxQMWj6ung6ieJvcvtkEuVzEHFwQ8zy1J5kt3tuAnK2iFheunbVB1fmUmwDqR",
  "key9": "2kpQZygnVS4DdKVjemh8o4rQLBz1G1SXZzhYvCtdjPf1sULUebZDsp43aYa1RZ2eU21SHXKJ2viw5DU5mqjkMTw9",
  "key10": "5pJMa4KfdZNH4kXzjrVMwAU1vy5rZpaymu2yxxvJutAnkznzrGpVfH7fZxjdRFXmwawbrsnTAJd95pN4hJSzuovP",
  "key11": "3uncM29bxrWs8gvFSbTpEdTdw2zzJXd4TqSvav7t5Ducnx6HwvpBNHMm758saWDep9TYqevGW3Cs7QksTBh3VRRN",
  "key12": "3mMrMHYNhHuGtaSdq9ABiFx4kostpDbLeuCUhbqoxKEnv6U5Smc3mK49Rf5pyn4dpP4jmKAEhLaAEAE4KYCCmUCr",
  "key13": "5ViUbSrd4myD5f1pSgiYHTLXs5TdhLFwrneDfrm65FcShAYRwgMrYrz5vzwuKTpNeNEZXKAghXxK2xwD6AJLSCD8",
  "key14": "2omUuRe6Rm5PvGB4ZRxrg837nmF8vmhYKKnXbV7Mh7FZAwA2iJmnnxr7TQRZAMMuJ5duWjWfpHdtb7LLqTJLDdmr",
  "key15": "bGz1zFKeFZaosb7pFv2WYffKfjGWZqnUtWjqbXsJ7sa4aPi4LDJBMkiePSjrTDe7Ec5sMcqass74STNiBZ7xGSz",
  "key16": "xHxg28NNWD76TuTw3K1mu8gQ1kg9hAHairMT31nagQRSVcpFzz5H17AvqDVV34K9w3h728KjE1f5W9j4RLr2YxV",
  "key17": "4RbJhreUCgy1bSkCpSZeSfdDfMkBESkZEXvogkZbYEzzWQeZEW9Jb9XzVsABTKCSy38EixkDfPrA463SnFT8Ni4G",
  "key18": "3KiPCt159gCdXHW6MckdM9vzjiV13txCZxo3bLQE3Gdi2Lwu3VQdEGnrgJVU63SyxVNwL81UWr34ZKeNLeNH2b4F",
  "key19": "3KZNRRHeXse5UkGComToXHLNp6CJSTjGc7t6f3YBVZ9mEciYePmiMLpbyJWBHnXE9zPj4LauC4PVyMmjnHX5EpxZ",
  "key20": "25XVPzcEe16At5QVyxNGgPJQpn2sBiKnGHpS6isfzkfpfanNvtYq8zpA2MCFe9zGuko1h4Q2FZT5A4vRFcNohBLN",
  "key21": "2qnq6ganxU5oAAsriQA2MiZHw3FyJ8QcrG7u1uDakXaRns6bbhnzFS7ujeqKEbWt7xbaiMngpxoNEUnzzKzh3UAQ",
  "key22": "53piXMEfLMSoprkP4PKDExMXxMYJgGfcjgXX72tVHgTUUCkUHcNq7krKnn8BGXdvhF3CrqvMZkLw8TeNgRDqxn3z",
  "key23": "24eHipKJxSxfE21zGrfJZU9kyfbLUEozYS9iEvBVFPcCqwYs7GisYxgSHanb64SEBmmCdFnfApETTnkjNnMGkYAU",
  "key24": "4pHBKPvFzjxFtyGBArUKNs9cEaXx6wKiL2kPVn8wTvpbVBM2ubiPTXqHNmPVJJwAHKDE17wiU5UJfJp7wPdZ8Bir",
  "key25": "25HbmgRLHHLcvPcEohzyECQcxj3TM3sHjwBm6UaRZX4b5jwkBe6CBBaCaFZ8w4LPwvp1i35XcVnkBPJBiqz2TJZK",
  "key26": "tPisxdnbSajDV8h4heQw1u1VK45X6Sfw9UeNiaNW29aS4wagWvGNuHKXeMK7vPhK1edVKJjJvoArw4JrjZG9WCD",
  "key27": "2pHzc19MuQbBJo38oZixHjYH99it6hekpckUaZLPNGGUe2gyyRQQVQo7qjuA7en31RBTynJcWZkbaqRF13nbEyxG",
  "key28": "3J8KKkmYyzYvyZSuaQFKpg5JHtUJdfTU5DDph5qM9dsJe2QEebXg7ZSZea7dQX7kruC6phFz4UrDYdpuMA1jfJqE",
  "key29": "3EGffn7A7xK9LM8CXAJGd2KQsK3NB719esy3PzUxypZNstFUmEJFBffvL712ge77SWN3y9pMRYVQ5kPcmPsdz72U"
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
