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
    "VURcT8phMriWspS3s3ENbzcZd4NMAJocAQcRGkhreRqCASMNawQRSFBy6SbJ458KorNVvRQixJWx6DGv5F6hbdt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vg1p9USL83D8UqpkXepHKPs8B7rR95n8Wuhid6tsyPuQAQ5dnk32ksDrse1NCPaDh8zUUa9GdPFi492LPQaG9HN",
  "key1": "33vJ4uwPAmDCG4qJJfJ5CVwoyeS1wM9WVVtxE9Q8eUCzHVqRdhgCUys3GHVdkRD5R4wScv1ieyruoLJyGf46tQqP",
  "key2": "3eiL7to6yRn6YVMNh2XzcG9Fx3csCoTk7FgBZk6WzUiwF1jQooM7EoLga9RQXgqY2SGk8tzxEqkKtW8qh5NSAN7u",
  "key3": "413bbMd617ftuz5e4oAJgzrDcdE7ATGp3AZ3cSpboWBVyYoqtNWHHeVTUbgbHxjntMXywNpPcyjiitp61ikFwTwq",
  "key4": "2ybiZB8WrTvHAFWJkrxB2zk2mF38qLspmUAu95noZktJGE48GBXP7q9StdpjdQZ2T1pbaYbxstiHkP8Bj9WRnfGS",
  "key5": "33kLjDCUYbW3FXnLwff35cbo9sxiBDpZVLGJxajD2GbxMfLMGnmvMbRF9AvfxURbsKnqwiKRgBY7JTthuaWA4Vbn",
  "key6": "2o2MrVxLwKNXRvtrdsu5fpZ9eT2LFiWT4NbUWRtTzi6maeuntkd5pJU5e5ujAqXpDAK7bBfXCD6mY8vVLuWwmzUu",
  "key7": "45D8s7uZiz8NAB9ruP8DKD3MtAZvLe2F6qBMDQTNY4MCNcZduqgJKmP66UZuMskg1DTvthPpLDo6LaNtyK8qkVSD",
  "key8": "3wVXz9Zeqzrz5yvyu67xLbvBgSzXAoiBnPjMLV7yNBxkqoNQ2g7xB7NYQUNw1R72kbQWVh8qEaaYwtYhCoRkgyQC",
  "key9": "2Rz5wfdnaVcARy2pjxf4GfHyNMZCNd3p1QbGp6ErCLBhiteANgL2UDdvWKpXLUL2UmCSgiNbR2eaGDaeddkRkdv6",
  "key10": "3uX6KRaEHDUAx5CAULDs8xrwywCWNaUDxSETpmXPBLo8nmN7pf8fJHfaEosGAYqEPmnh5RWjhoruFeE83TSo8iyG",
  "key11": "4RfcfyJRYVkFsz5kUxWxbt9pYrWuc3DPsf555cBHBFwvq49zYnQeM3SDmeqwCDM4bRqxTMbw84jcHhGxcTxSZdAe",
  "key12": "4Gj22fHGAWjm1rgo5U77zcvH5rnM82kV3dzMpe1JwXTSRJiGSPzL5U3SNCPN7HX6WbGEf2zC2yhriBATMbzBjXGr",
  "key13": "qChLWR5bcJjZ9KnLzo54zNFowkxGcqj5tAsyNAvGKxMUQwEm1oDPUp86Qyk7fH3teVdsvjSkyQ8gzxtNacFf9cn",
  "key14": "4Pdnj2Yq8LjQG2u9QuFpiiL1jegpABiArjucF1GgWhAGD9RHYwjgQkfJpxxsyN8NF87zdd4bUfSAsRKdaQJxP8N9",
  "key15": "2fVdyetg5Nsy4nDjmZYCadru4netz7bEhJwthCd8t3J9x6WPak2WNZ35WyPJshBVHFRWGPrpRmq1Es6QRzS49SqC",
  "key16": "k1Fk9tJv77HxcULi5aK4L6TbKMrfb8PGcUQZtyoumByNbsYJsNFAhXxUq7Yv2gNxJuk9asg53YqEB8i28rFZhEd",
  "key17": "5keSPpB1wgw9WzJCTW27T7wMaJsuKnfKrEAS7DRkqRFo14HbSzYK2gyizyBuRFDeHDacTetVFoUFYBvqADxaooHd",
  "key18": "2TRWELZcTaFA6QgW2mEs1Hn5ySUyzx7nSjQDZWtAVLB3UGZnukXQJW64cP9xrXHkjGRUviuFFKmsiNzwwC1mSB94",
  "key19": "2eiEotcZWFkYZ8A6Vp4fi7DExf9mxWBnBFyQBJHSpfwpvo26ZX81U5fc5EcXLPUrgmLtkpYG9wpFzFLMN9bj1LMF",
  "key20": "4qYLt5wpYBubWQqmbUTaqw7z64CbHmYXTdN8sKGBvEfS1Za9YKNoaShs8gE4oqHr9E6mUdE2nBRPUNgHAGZS5C5k",
  "key21": "4xcFjRhyCAL6fEh9tE5YB7bf9HtAf8yY2NNAXMkh3uNcEcfHyWvUgyjRLfyNi6MybxJ7gMe8q98aL19qaoiLzLcq",
  "key22": "5m6utHL4cQn2UZhiExRWudFWbLrfR4Hv7riY8aP2F4oUmnppfqenZE1xHsjVFYA4V1rUJ2WN1j37qPtJZtgXBuV3",
  "key23": "3SPHiMTeZt9nbK5HA38QWV3X4wtNXhcxsEh6HQA1axnCZRbJZVyVdLYCccksQRCUFV1avfcxz7KNn8F7anbH8x91",
  "key24": "5vPWccGvbR2Qu5AhV1a5BN1dy4TGLHZxy1rT7xt5zjhsg2JoKHM4YDep6jKCAyFYbkvkQdgp1WcQKoEydb78JA5Q",
  "key25": "2punj3RZ43SzsSwEzMSkMkC4YNwEUAT5uSnxeL1TKA3U62J5aPYBroZ68pRZ5jta5oaZCWUMhNr4X1itHxtew7eU",
  "key26": "65Y8kja8AM7UnLJYJD2EDasyQS1NHuLdJAyW9NFcaqthuHe6VtVoHXzG38WqLe5DCBwuiNaer6414nQs2XHZ4V1H",
  "key27": "3MnZcBBsujX4t8MxHwek6jWKvZ218vMo1ESmzqDP6BetChJ8YpfsyZU8UWptqnhm7uhG6A3tfKiuWvcDW9aZRg2g",
  "key28": "4mYWXQr8q26RZBs3YdwtLM3ZfbVL5T24i2sJrY2p3VQbXR6ZKtE9MMWSZBE4FcxJNkcYAdMWQJ7BkKAxguqD73ad",
  "key29": "27JgApYCPvFow9Kn9uV9XfZDkmMMU3UFa6t8EG4wB4FdWKMz8YH6Q74PGmoSTS8QqDN1o5CJSqqjhDHt3Tmjb2m3"
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
