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
    "36hwJcYtiKf3JvrMrG2DFMNeNzueX4vjzBkD4V59xE1V4jqsKZ6xTcZY3MttaevvoB681CKWAmow2VoP37Jw2eor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nfrn57KwjVLxSkVK72a2Le1kVwFeyrkBMTxmiJNCVMzkkB7kqsfcLpGZBGYEgsuFcY7Zm6RviDcvrGLREpacGLL",
  "key1": "5QPU9cXP8VG8bZF7Rd5H3e9Lb4uyoJCtwgUaJ7GsTkDaRmNwAjNtczPpGGSDDwbk9KDfDRA8vdDarooeSbnYXwgg",
  "key2": "34e5ijsMExHXGWZHxxtZjK986SfVW652SGhHydHrZMrAPD8jVU8D5yn5Zxvf8TsFte2uiuxRBikdzqJavkRMMKih",
  "key3": "4KSv3Ng4fvU44gDDHxafVN4mchnqJyH3B5GEQ7AmxYBi9ubiLyFgeE93HJcYpHgwK8iQdgXjFpe8w5f2kvWYu2BP",
  "key4": "64HY74BddK2TtKWAwpa1GqQfDTdrpaAdgUcqo6NTTXTMtcFawzpLEW9d4sLMMR8YdLcEdwfBJN9B6L7SYd5SNuNh",
  "key5": "5C1KXqJ3xin7DmSNG4Cs5QjewT7r3pmMNmzuy3whxzKvc3HuC4n8QRaak9NCKDohiwJcthTradnjtC8AdTD3yyQV",
  "key6": "2jMo5mD8v3kDSVzoiiUiiMFxhqAUArgLL3smDxWZs8qUA7UJmCYeS9tgf2VavE9QCz3cRd4fhnAcGj2vPBaQ1Vui",
  "key7": "5b4ck9CogbmqZqNkSx6qG7hzQ4gJFSPkBFx9bces1jRwBjui8W1BDs6mRPV3TvLjnVo78hQBnw75KFfejiwGogxb",
  "key8": "Qvkjz6fU29AKqAWvnrXt2pJrb8hCUzWb3DCfuwGcmWRfhav8zuBrVNAoFye6913AMxmtPYsXZj9tW8MvYJJM3ud",
  "key9": "itGWF72Hi4E476v2ANdzufp4DCfBUG6Q3Lx49qnEJrhSEDX2qjvRhhHbFQDXXc7YCfuAvrboB63qWg3L5AbHzeJ",
  "key10": "5z9hQf9P6ni9UpMd2kjske9wtSbAYqTCbdaEF6WDgaW2bUXTtbAFeMLAqnuyS8jcn58kKyB3FthSV9vB1k83RBeu",
  "key11": "4vsKLXs8gx8rTYyuSw56aVvpHbdJdHh61RDbicTzscn2ZN2fPd3UUPSuenTQZ1yuf5YiqfHQXGSyZhuAJLs1iQTU",
  "key12": "3d4x7yMYJ7Wm3HELBvoHiV2YEGqkestLxpAugJ7sYHWP6TjtDF3UewjBycT7BMER5rsTAhpWYPtfZGbVewfX2wUu",
  "key13": "2MpQij5qJsUm6banZvhbojAd9fBjDVax5KaPJwL4ev49whMRAAFVJs2VoVo7bngxua8EYnHscdJSgy9dpaevCS3u",
  "key14": "3ZNRZxotV6q2hfjsyufTq18ePQ5XAZhQowEergxTcbBjV1gCCyhutYjPnskW2ANzD6ctkWiWWbhjMk7Kmc4F5Rp5",
  "key15": "2RLfnqZ8yxgQ9YxZBJSCMX6HzDTwtMNm7YJqiZQyDAKiozJR81bCEbTaJdo6ib5NU3Wmmmgq9iPGp79tFwMK2hxd",
  "key16": "4xuk282cZDt2QAzAbdX5fVy9pFRy7vGhzajdybBMHBbxoKzbgVeP3F7VqUjUGD3BNzg4wQXG5rut8xQYXDa2UMBT",
  "key17": "2GK3PzTHGqSCwhZurR6pFEkT4kvAy85D1WHETybQsSUaHQZvPJjyiLzuGMDaoByaYAG21hMWkPGZ9rqbAkHveZFs",
  "key18": "5WxRtopHui6VN8BQGahSWa5uZMJA5RT5n6YNdKzDSpTD2MSQNB3czUXAKYtfKX4Pg3vXSekUGxrdX9cyj7iFSTgq",
  "key19": "3W4SWhyYKeCDLbTr7A4kn3kHeoGx8xbgHDmsrdJHTy8nUhqfgC3eKJuf7eoCVKSMwAhDtTxdszskWXURyvnwsJrQ",
  "key20": "zaEAqJaFmC6i2r7cFjK9p94PBJfrsXhm3uG6bnWG2QanruJvqd7z8FU31sM7bU3drQakUs7NA4C5JUa4u1h78b5",
  "key21": "54s8ysLKyKPSFiwPei7FSq1wv2D9m5Xt165F4ae6yG1ARuVEFGhDsKVEi1k4eWcpx9KSUKPMDBNBn2fzgWkJW4St",
  "key22": "63mSpQH4k8Z8AEdGoquukG52PtRgQEq6ZuUWEGPiEQ8D38c4vA98GsXWKbaSCVZ5okfRqC5vUog29RS7LsKLGNYv",
  "key23": "49wmXv2Kc6Ga4AxyaP6TJXgek186nvo5r2QipjfTE2vJyP7qQ2oSvWtu978LYfQQnoL7yk2vqdWRAUTaKRJGmM5d",
  "key24": "3QgKAPGXRX8LSryxm1ddXYX9Rf2YGy5P5bmiaTeNT5ebPoeubC9Pp4JSFoWVxBtPEEp4E8RfreP8sxwTYC3czwzv",
  "key25": "5HRja7YzFquMqK13hzVPmFLtwM9nTfV6YAoydDA8WYw9C3QW2UUWNhXjLuWXzsiYCZpNU7vKLVCXUFpMgc9KXBak",
  "key26": "4bsAobYHnfqHH5DXmAFX1qPnVUmhUG14hwxtJvy1i3p7imzcnq5uQRrupHb8ahnF5vBp6RBXV32Xabn56yhNpzoR",
  "key27": "3vSC6bQx6DdSbiRQf2zs2FSYhRrGBF6PhdMYMW7tstSqU48RNRqBmRB2KQ6L325uSNMMr17rwk5pP63vhi13ajyK"
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
