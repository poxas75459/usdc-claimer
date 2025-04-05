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
    "3Y4ix8SmLA9UXwhrqAALwvYATJbmuntvh3DngUWFoAvdQcvbGhzypfd2d4ixNnA2c96P9B7TaexAdWhXnzUrkUen"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "evFMskXwRvL2EjvmJNrBvRacNyfcz1fEFgHvDjj5wSV7xHjBhz7VhZ2q5FPtzPX5SZsttkbedRSYTbqM4wfjnNd",
  "key1": "572X1xBbuY2Tr7xKFtcz1AkPhGmu94FnF9253kfqPEpzPM4estwh2fcvjNWReyHGGTCzVJi2b9w6qNFQr7qwYW3w",
  "key2": "53LtuJ7qK5dQEGdqyeRUT3KvoEYRjE1czJaefx2oGzDst2jpoHSgR4N1f9d3GQ4tmCbZAs5SH7pAfNH6ufvPHRcf",
  "key3": "3Fn7UTTFB6L6dMwDB6yFma6DGjcRVqDCjL6behtpsZsiF7BHr1DazWwfVAqUEPAwFCY5WEHtp3HJ7jg7RRnAnC6c",
  "key4": "2VZd74C34XJWEXn7mrxxL24gNvLfvyzB9SHBD9qTCtTtSENcsjSuKAVmqQDSLWujXK5GEHhAYh1DFnKCX8WosCYa",
  "key5": "4Bzoe8zxsPPKxAMAY6jcoCHSogX7681RDaU53qTWkSBvNVhy3GiRdzXAqVjR5UK2JnsXRcntutUgMhkhvPK5Fz3P",
  "key6": "3xSsRD8DYot2RCLTbcG5SM2AejnoZB45H6fbupcx2dS1wvxhUpaCCxFENnkZfe8iy8Asxv2AD5nc5dmLPcrie9e6",
  "key7": "3q8eLuznTwZaT9jiaXkQwW8op8rqJcf6nLR1DRiyinDL1UxTPGVJ2DxzzupSRiyk3T6eTACsZMy8P6RZpBFDKcUg",
  "key8": "4s3n3sQn2dWxYt9ZQ8Gk6sQ475bPVA2UNNFbJzuHDBfGnEeJ5Saok2mXMbMf85c2J5nX3zJFcRp6XZNGCcetVT1d",
  "key9": "EKbrAY2HwhEpEbkvFRG3vbWdka5mZaWGwcERmE4cktEZmisd7jqEufmVydqKMmE47RR66puVbZpxxWfUasyZxDM",
  "key10": "5upmbqnFAz7KRDxewkGhdR9yPZ9pgWE4F9LaJx6oRQPfJn4okTV2dubTo77S3QLc1dnM5cBuetJF5quFLRSKxxRj",
  "key11": "yxe2wWz716D4P2hSy3aWBPVJoddRwsPoP5qUSTifYxkbHf5SmSfVSWvFrYpurfvmknWjDqQSvCLUzkyDVXCYwej",
  "key12": "w3xy9nPFEfqQQm8PK21oqJCm4MDriQswsovnspVhXyxFuacmCsgWyW4MvvVPqgYTbbqeGByfNtAaeSTn5JCSbxM",
  "key13": "5sbGKqQ8NjYaGMYJbZCrGfcw2HWPH2oLG4nTc6Htot3YqV7QPmMxRPhwwF4Ja6sNe1zgZ6rsofzjJWKvUEpC7U5P",
  "key14": "2cQdB4FMvmc1j8gnzBQ4x353Wzx7HixuFBZXj8UYkcUDQRpmg1azMXDvbUPzXnmeN58rCj6F24npkgmGXDmQ3Xxw",
  "key15": "12145MQHF5YM5VYGLMMtZR8x8nPZMjHrxhxeHSkupDPBvTa1YMcAPhQ3sdeMvZcxC7ygEptbqqH9an8oJfpDhB4Y",
  "key16": "3TZds9A2wKRzf8fPf1pi3HWjnt4RLQdUSiTbZiChqCEt3smfAg5oeumuvZCa5NA6AtXL2Dj9Lr58ccURfEapf1JL",
  "key17": "3VBUxFaFyzHKS5XnYTkhdvwSLDnEZbmUoGR1o72ieqmFLMrPe9fXm1oXCxgSdnGZ4jnMg3VjWPJWYaWbeSxShLtK",
  "key18": "4wNLuXp4v2GoEn3o3jw5QERK93VCv3c4h7ei5TX8HpiRSyF4oPPKJXCdiiLNCUTZYtbZSqFRnPE5ZpB4Y6UiLvQ9",
  "key19": "3BX1tAoPa93ZwkYrFPeMQoLM1H9sQh5sX3UJRC8toffW6NzVyCaqpNhHbCdQprv4KzarAmZQAny4tV6UnF9RiuzG",
  "key20": "3BxfuEyZacTDVsr51sUwLDNFEtFpeTtLwKCLRAPU1x3gVqkuaDPr4ojREJzpYHcUQ6EvZ4MieLnjAia1MMevFG3K",
  "key21": "WqL8qrJxGyN7nPhpysVKryjiEekfCSZyBjj9vkpakfG4yQDWDAB2WToPZzcZAe4Rdnbqf22wSjbJy8TvTZqp7gQ",
  "key22": "3W9o77f5JTwsu9WbzHM27gRr3iVhu3AatPKmfnnm3Y91Es1BfF3DpuT11oY1QupZuKkznkgHMUWYNYd8XMQkd7Ah",
  "key23": "2rhipk8i7Wz2Sbidv4h8HapUzQnYUXDWDWqevoFifcNY8XvwFkUrT9cdv9xrexoxiyjtQQPSskrQ9ZgHDssJNXw1",
  "key24": "5ByoPjzhis2ECZwcSiJWCWBDGW7xrTai21XRT3CwBkQJqAKqJLdaXqeCSjSaqEE8g68ESCJzSYHgwbJVSCpfc25W",
  "key25": "2eSdbtzLdLSzab59j7qGwjZzAH9YSzUfsGNxpTHGwAfKxorYAczRenGbuNNM8kMu5LKPcD93Dcs4ckFuY5LeonaX",
  "key26": "S8SFjSx2y6StMzALrwWbaH3snSqtr24FV3fiuD2micHwZbPL4LHbjt25hPizu953JYVkx2GkXSs4N5EFvb3jMqc",
  "key27": "2b5KNTqzNjKb8jueru1W1QiiXdhg1uawtK7LGWbi4GWEuah5W7i1kNdipNdmmjr3fATFzUix9PUkxwNubowHBT8C",
  "key28": "5PpeJ5mVHwPuqTw4W2rd3uFAVuBksY6G51X2LC9rdECaHrW1N5LznF1qvkmpEcDLe9AHyMFUh1NhKBi5rL96kuu2",
  "key29": "PpKPDLRiy944rmHk31cpfQrG2RbDt8XwPVwrvgKxk7qxS3SNgjWpeaihWMpdS6buNj3iYmDRcoNHEE535MUpCP3",
  "key30": "2dShtPqJxowWwuVFmX93Msaq1A7YLRC5qVHPFXq9t5wuLv8EnoyS2vpzxaifD46rNu9eKNh3sj2E3dMJJnynLtLE"
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
