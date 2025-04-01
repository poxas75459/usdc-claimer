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
    "5LweTGbQc4Gj4yVo9xMwUwbhh2AZEEsEdW3MrKjoADDLXs6MqtNRBJBYjhS6PSp8cM2kza9xM1ohpn4m9QTXdm5K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v2Z6BUYdkwC4gJ23YkSrwjXEEcELP4NAcEhdrQTrDbvsZx8kafJC8mNtrmxrtG4UxqwRi1akkqc5YLQ3BRu83e",
  "key1": "5Xp8ZWj9g4HfWfQWkJdE9oUeALF3PuH8s6FnoELVwju7bmATFtd9Hsav31DiyXJqM755bXijf5nCBL67q4XtFWTS",
  "key2": "2fjNKAySBkjGUraRzY4Ax6ypbfzTZcQ8gAj6j54zbY4dwBScduDgXHWXCCGqwbfVTx9ZBtFZ3eJ5RZ1Doeugjhji",
  "key3": "57zR7EZbdSsAtdtm3gcuQ87GpARiJbS1z3Hu6uScCZeXVtQSftJ7no78cK8AUCFEdPTGZAwxJxEqWWAoATGXKSf7",
  "key4": "51xZ5QkYJrmRFAwwqVyRYgeeFcSarEnKZP87XW7h8WRgdbGfttxeeqWuAgA2RQoG7m27cciSonyDF3YqurEPp8eH",
  "key5": "1YRLUX1VtMPzd4BJF298gmrXpbKTSfthWVvK3TAbeazpMnmG3zw78E39jHP1kQj8D8VAYq5qbuYVZJXWHhABLCu",
  "key6": "4yEDEqxHaVKUr45oBBCuNcpMCGJ8fV4DwotJHBArUjpTjsvg6Sr7fFv7gkqFuxihsAHcGkarNCip7VFBVCkRy9yW",
  "key7": "3orPS9BDBWEg5Voqvc6L67vPWoACWu6r5rBvkxyiLQeDhdw9Z15XdSGRec81Gaeb1KXjq27QXVyTSHhWP63ccbE6",
  "key8": "5J6fHTZF8erDSLsB7DBgRSEDZ5PwgCtmwicNSQEsHhpvEUuhrgi5cCWEEfmwqb9p42b6H6Vn7FsRjc8xVvUGuqsh",
  "key9": "H9C7J2JwT2CLmMcVcEAFs53KVEbFkHeDNBw2dwwc6yToPpwXXW2Xop5KxB6q1SAjqF816w64VJMQjfpEW3nzWFw",
  "key10": "5G7eSadERA57vLUC29CoXhBuDe7F6TQRsD4NPwWPBRrpJbYsnZgswodPKr9SpHmz3QYeKQESEduTvuJ45BqehZS8",
  "key11": "ykutEHPnZeLSsxx4PxYk9AD9HdyHQbG4kL9UAiZdCP8sKfx8gaLAPGV2z3qTRr5CZ2ZfmUrZ8mj1gFdxkgKGjbw",
  "key12": "2zDcFa97X4VZWeDLbJUfTVMMNBfFfVpLzV5fYGAMZDXkPtk1yEyADHJ9Dqwh8vJHD19oYqvk7YxkmKm5cgya4Kfr",
  "key13": "4cJxcZ92gM1JGfsgs3a221fRVi5EWC3igcrW4ShPMdiGVDZayg8vQwRr8zbVZB1R32Mr5m3M1RwTESxQi2r7oVZM",
  "key14": "34pPxWmHvGsBDTq8Upg3ixMHtmtGJw1zBcVQZx41L4G8meMyA1PL4tAkgkUgbqXDAv4vwv63WJXEnKNr47huM6sn",
  "key15": "RvgBaTrRKCv7fxqS4mD9wRAj3VmL9y3vGYmrVcyUsE4CCMmuUj6jyEHjt5iVsRHuuWdjWCDNCMHS6bBMFJBaXiY",
  "key16": "3BZSVNWdJJHjRPx9maEjov231BnipHM1Vf8k8sqc63AP6pBxxyrpc79mak2eyiqWyeX4pXkb7HAjvEMP93jarTh",
  "key17": "5xCUiBVYpGRrDVPGqcJitKuAzjPZx5m7DSNs2bUthxdEmFQQYoyKjtm8Kh73x9KVtUPvvv3MLAA3wnDBaY5XLVXe",
  "key18": "3naxRdEGemS6SWMX9cY61zLSwGRqWB4EkG2x6aFehCUWdrTA28vvbLmqAoPoZAHQY3ohfZcYAUKm48DkcA59anY",
  "key19": "4B4NAzCDf8Kc7qoYdKU8BdpEvW5AmVen3ky2U4wBqEAcBdshurP2CqpHTUMQCrqzuLAEA2dKYeLfUoYkK4jYN5fW",
  "key20": "2SmzYZaQsUzQKvmEQoWvB5uPXzSA33Mqa4sEdqSF1H3scuVJagwJdj2Mt66o2wYKQYo4DFvTofqG6emohJcpJgEo",
  "key21": "3AXLYBqUhUZG2M4DAuP5Bz1SVPW6UBpdHtMEYRDDud89yw7EUYg6FJohCZdxa51QxBQwvYMYkCwoDDJ6jwZoXx4k",
  "key22": "4tEycsvZ5T4prUxVmSSF9oo7CWh19x3zHZQ775CvhZQyUnyviok9Ki6eTob3KwsDaDFNisB7xkuV29VCXo3x7Gg4",
  "key23": "5SrT5dcZg445tSCS9nLFC6vcps78WhKnYMiNkRZBz5PNoNHtSTfy6HD3EBZNR5wjiJD3R5y5mTsCzrpqjCVZF4mw",
  "key24": "5Tu9fRH8sQ4hbp7GPnRCX59P2MnizHRBWLSWco8WnUCYgDGNUuA6udQtRwGJpXByEVNFiWjEGSpQPuUqqDAmfZT9",
  "key25": "4y9yLH99Szdu7Q5Rx48hhne25xxuMGLSX21pC5VqKm9RewYatXiHAoJa7dSxcg5v4a2aEdobXoNcrfmC7GTLGnKu",
  "key26": "8q1P9VVbbrBi6o4tG43USc8gwUZgpoEPhHoSZKazESE9uJC199gwzLR22EzLenjdBCdYfnPuEJh5TLGxVziXFe8",
  "key27": "2qrK3y2M5Um8bVuFVhYBqnTrfTcJn1osnzhhENyuXHKnUvHWjVNMWDQwEbq8AYgmFRqv4PaSyLifKXwddHg3kGrb",
  "key28": "2epipmz3DBtyTS7SayP5LLpAxNM7gDdax94w5MdW6yCdbA12PWJHyrWYcUH6mnpXQ2cTYJNGNAQ6YKdVdqEGJaZK",
  "key29": "66mqxYWT9dsEHYeb74hx6Q1xEnNSTWByPCMvtMxdz1PeJVJwsfR7ggEUR9jLJ5tEAoVzTqsZG537Da9HahBBRKAd"
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
