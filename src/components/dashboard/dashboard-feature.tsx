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
    "4bxXkdba97NyhoQkncDZNyDZEuEC2jQShzkFAfK2HHF1u7HxFdNBbxU7VGeuDQD5mcQrU1Mz1Lhydzw67BWBy4oM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sAdKQRr2PwNKTSbmsu9YFTTVuNLT6BPnutpidjfyECDE82AiARXLNWmpVpYHneCQSVdtoAEwHo3WyH3qtGwczV4",
  "key1": "3QYnbVUFAPvzrEpoDzhCmyDU22b74Zu9Q3j3c4EGYQ8vg6qMek1i5KNHLdWAZTfvMJTcebddjWgGRTB3ikhBp4Vd",
  "key2": "5eRq8fpq2S7rwnhPYxcgLFbR4yFae7UMU91fuX4ZBkZ2fH4iDeTuiarhz9L5DRWnFJNusoy16wQHEbAoqjN21JYt",
  "key3": "2aiVkn9uCGWFX9QW5ahhjSq2o8s76AhmYe58FRrdsVqeXFawb21QCxJfAeXGitHpRNQqoV6dHxCnDB8rQ9G4qTF8",
  "key4": "4kBWfcGE8KwwcRJ9jbDFoDenPcKWB3Ka1BgjSe8RFF2MJPor8T8wrfUJ8tVvKCfmPSeM3m9LPnuq6uGZaBdXwxBQ",
  "key5": "TLNd8v9qTDc5GGSEDaavjRKAF6jDdrEnTbCyEvdNJ21CKWjJyaSXraahBJbAgucWH9nFyZycxEX7zN3zLjSAh1m",
  "key6": "4zpKrBvosVhRA3VG5mtD7Yu6BDUe85Px4oz9LsULu52Kz9dydQtM4JaKaU6WkXLjsAQCEh9kr91PyTSLfvKLbW3W",
  "key7": "YSgrm7ZyFaxUFiCEbPENWJ9FzA4N7LXRKLtJdVzWV7RMqjmpX7iFgujYUEyiaVrHu4PJHJUtvLR8f7eLNcRr4y8",
  "key8": "3cKpLo7XmvwAnvDrMQT42byGVYCVDYdyTzUEMa8yyMPz7PoHe9FuUcPLBVvknZrr9PxZRX6H8MD8EqEPwxdM6tiH",
  "key9": "5o3NEtgpaWxCDmFf52EuSVG2ZQB2MNKBusvvt2CzR5uktMyT1HEPP2ZazRm7Td3aFvrHmToyKrSymV7CBTuQPK5K",
  "key10": "4gfj9GM9AC9jAsSvwk1qrpJfxyNMqCJy68Z9hHfu5JWVM4117hgJbhxLpyqtd8U9hH39ZP2HTDK2vUHE5CevF5DZ",
  "key11": "2P7ZynLmBsH5XghpsikCxPMKFjWK9tS2oCeQ1F4zbkTj2nuzAtgaiRXVbun9CpsG5gXpThTiJqejQH5PjsHYxuFB",
  "key12": "yt4jgmg3AQfSg3XL74mrVYrgs986FHgmZsfYwCk4M2PttMnZtrqPWFn7wD6tqGaqgyK444ffMcmMTb8eaeagWkw",
  "key13": "8K4HAXBPLBwYEGEh6Fi9fjC3HUxXKDRZ6NJyd5FNGc4yCbt4r7wtefkNKyGMKTCpXgmBwPBmAqNpfWwwwmXQsTr",
  "key14": "4P3oDzQ5Z5eThe4jWx3Ds66vQQoMRLvfrXpxt4jUy1R7fTPEXqrZCamjQsB5vqb9zyxaFD1rjhWfZSDVTURniiwr",
  "key15": "u92MpFNYj2B4mUWVMfHNY218pws1LMMeM79a85mxGitrBwRFsZyGXPcC8DEig9WgSoFxNmoRD3cn3uZySJvydN8",
  "key16": "peB8x4ECy4kNVhgDzsTGSDKDXUaXLvQX9JSJ93yKXeD5TaPe9HNXffv49f6KSMZW2MAQgWQ5XbnidjBmoueHij9",
  "key17": "sFy4a8uuKAFtnPD63gparricuYyZQqJRZx21QT7zj7hWEaQGX8hXtRzMvc3Xio9i2P4XyBM6hPSSECLgJg4Sge9",
  "key18": "46GKB1jRHhU7GxecCJsv4B73CGqTvm5GXMmoTFwczt9nThadRjEbWq35oKga8NPkYnht1v6EiDbKTsJB2cEjyBnd",
  "key19": "2VuZE5m6YJeEMLDs7AThiMAeXgDKS3bs9V88aGCCnFbCn67F8tLzm1Mtfjizp3CBqJwHY919fivePNBdGGqJwEQY",
  "key20": "28z7Gaa1XtWjxMvXH5uBuXBvywVzrWGKggWwsxz5pgKEruP7srGLschCZdo61DTjSxhu8J5qX6zpDSQhz4tR7k5W",
  "key21": "2DNKPo8g3odYC42HdcrjcBobWx6dkX4DppQEXrCRGEkrkLhW7iLKUM3HKQqSDjS8UEtpTnrmWw3h5JHtFJQv6oxb",
  "key22": "5mQEWpdFL3xN2XCu9jDfHSJqNK1CBzugbc4mDTxdztRNgGibZetbMKwNpgrDcSBpBfNj15Mgh7tvUFEFyV7aZWKk",
  "key23": "2zSEzE4FoFfm1mEiFvku7ZMxqfJ5FR3cXWT3pfg7XDUQgoiVN6E3RbQMSvxJzC8McbzXppKZYA9gF3m1pVVZTgbc",
  "key24": "3x6wDiUKPDjLkTZ2JomNSZrnYqgcMnHwpCdpA9BdtWYjWrmLDaHBdLKbJ2MvAUuxqfVhrAryQ3BKCA6MkJvXygxG",
  "key25": "4jEXZTktREKXHqxhAp8UNfh5GXFmHJqWf3teUifW9eNoLq4ze7kmHXTGPUounLTMTPqcRtuWn74azeGx7aku2eFo",
  "key26": "38BKy246xqsU5PaJXALZFQ5PzCDidivxKibXbPFU5GwFrx4fzXLhGmPchN7eDezDnp21KzXECws9xrqFxTfyX1cn",
  "key27": "2fRsrYzf8SjRTD4xjPuD2ySMZ9LxsBcgE1cpwCqco3dLnk4oEUkey496Xn6K3Wi6MHFoXVWRURz6qy9Yk9zwCkxo",
  "key28": "4hEc124a9CVeqXBZng1wdG62637aoFxEdzJ75wkjkMerQYM5fDWAoQFx1rmmWpxFwwGBRt4F4bVcNBZHjSTmNen8",
  "key29": "2P7eMhtspRmfWsi8zgyAxm8isRxJQkzk642ZcWbJTyxvnoNbr1TcrAMBHkdH8FQP1867DrKiLjLdyBZTvyCfjXqm"
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
