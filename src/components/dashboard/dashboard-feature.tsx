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
    "3cQst9E8qauzCgw2qf4zosXtXx8r8KGoDv5tMQTEQK5v5b1ghfmYXnpVThgNKjSeXdFucfxMB5EuAiyZLbwRwrEQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xBbzn658mJ6gDew13MpNHGZJAQ8CRRWbFm4qzVbjGgpftDV6M2GjqPLR4xtnLxqDDF8F224EctQnwy4z8TFzZHN",
  "key1": "3MxxcqjU2GK2BBno2gXyKbiYLGiXNiiAvsTzbssxbZa8x2vXXCaWwd7cYC2jkHMdpPHEMRDasKS2WhM6kRAtVsPw",
  "key2": "3NAzmPAeyr8Haum3iC4KgVvF2dv85tV5DZCF4TgQdxEkgX883rZTuYsE8iD3YjSfZLS1NopuzNSU3Rvn1EZg1R5f",
  "key3": "33hNs3HedCnkDZPzxfJp1ktQxV8xa4MJs8ecVj79s3frtemq8ddQ3SLBk8qq2CLmfU9o8gwqNkhHNQhq5BPXAF5Y",
  "key4": "5TqH4xtCbtkHrBgb6RhC3gjgyCS2LaA9fdha8qJLA5c3S9KVzxUBAbZ2aZ6eSQR6QZoEwvpRSvdBmYRLzkzjiki7",
  "key5": "5SYv5YTaStVT8D6HDJqm813Ta1MNhSRC45iW6K6xBt6J9YY7AewRjvDTUxMn6vNV4P7Vg4QHmaYze34hdckRf3Um",
  "key6": "h4rjjF2gzwqTyD8WEd6v6hgZnqJNJFWj57P76u7rQr6bWpvsqK3DyD7PRMqYAVrQ2Dt5hAJYCBU2XdoES9ExLhG",
  "key7": "Ebty6uchA2G5NezaMAAYPQPEmZB87fmJKVdADNheqSdZYqdTkz79ZZeqMU3YQ9U8b1XNEkCeEGoxDVGhr5gPZpK",
  "key8": "2KAwQfv2V1PY8TPk2hWMSKmcF4Jf6qyfNQ4sb4iBh6K7btsdV6FmJwVx9Ymq7LGg9HVZMQmh5vpZYRNQF6CcJimb",
  "key9": "2xpMBt6eCuKUaZLTziXLS4XpZWFBeCXxGptu8JuF5uqbvCuW6eLEpHEqCdb9XNPN3rHm8rjC8PhGxu74FHdahdtf",
  "key10": "4wZUMAPvsjQjMfnXmDkzG3QAVz7cxwLjAkztMfBQbT2sbkbkkJ69vQGWembUf7p5Ec4u9WYqBMSfE3rt66pS5TPz",
  "key11": "5pDKfEAEFW5z1wGEmTUFUGNS6oUY9w5NVS5aAVqmymSAc7mowZrbA4P4ejLSUzaY4HP7SsPKhUSkny8QhbCsJTuB",
  "key12": "28sXSx1VqFBzEyfTgQ6oVurwNVpLetYL1E8cV249T9tWhLSrZhB144Y11NNAy96XL2wH866PtW6aDsV6zYmLmfMj",
  "key13": "4Pr9xqFPAGn5NZDWSSKCSYE8PKujDFuNGZZWphUcZaNyk6vADRWA3oqib6RL41wpz4DK8mEBnHhdmRrwYut6Hz3G",
  "key14": "3NWPyyb7KrctEaPKyGj9WeJaCfQQMx7CPsLyRiPQQB15589YM4QNutb7sLetzptckvcpnUdUiLCowQxFeaipBcbv",
  "key15": "36YBpacSh6A195bWgUnEyukXUaQJhdJQNDx2XF12KcB3a36x9K1rxi9YGDJqVaPEczLBeqUwx4XNM4JCLt8W7yGu",
  "key16": "33EGm5qqM2QBhSc7DKV4EcLAwB5ZJK252UED2vrBFvCCRcueymYwasj2CbhiLmciX9iESWp85xFWEJokAtBnDRpR",
  "key17": "3YJvokn28sw1ZpNiwuBAcPK4oHJ4fcQrqzN1ZS4eNyAcLmKv9QH8nEarAFcKDY8hj93eFCfLPoRJk9ynamKX6NuY",
  "key18": "3JNgBNvGKuHBoq8CwUH844e1d53Kn3E8Gnb8QnqFz2p9Be8E5LeXYj6QxkDCB1aB9vPnUtPWHxm7bz9pc5uVWkT9",
  "key19": "2YkJ3Q4gmEFsQTcBTYp3Ske4GEe1BdicF8jdDdDWvgkfQEWE3FGrmi2aBpqZUYminXhpMyAHP16JVTitigrjfec7",
  "key20": "2tz9dwaVCvWfbeTiuDX1zeTQyNa6k1fZ9HK3Br1KGexVPq9hbkoGx58TvyYt9kYZRVxzoAzrhSHquoy8RafP5cWB",
  "key21": "2UmvwfuEv88vPyG5a7MnRAwmoMUezr2z5Kd9esWA4Pc8JQiFQi4metRo4nQW9jAdSrCcGLS19pEcRbQJwoULU4ym",
  "key22": "4MvdCF58i4QtEPEUvD7jyowrjFv5vM6KUMk6YCWR8PvVXYdvyaSPTLXpdYYzgNqjCHZ4Hnhf8dLbFseEbNDKfXKo",
  "key23": "64tr4UGBNpfh4Y5Zc3SazDTp5tAN7dC7ofQXGYWM7vcA4DismNp28PR3LbFevnL334u3YNrSp9RkwzqQHeWt8ksy",
  "key24": "2fJmxTkQtqrj1FLBbx7qVaUaU8rhvrZ7XakU3nC1JYfApN1Vmmkw3v7Q3gnSGmSrWPPaHAmEQm3tDAawmCcQ8B2S",
  "key25": "3GyMqaCEgiScYnSsFohEJKvfnkKXHSsnusNvT24GKHDWqHqcJ6vwNmwocpGtZDKrUDobB18C9sFf9fZbi7eYRpsB"
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
