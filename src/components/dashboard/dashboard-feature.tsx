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
    "JgSruZ34BNApU65KYTdMnhBJY1JML2D6JgiNbuQhD5CXMM3KtfTJicdXZL3n6XTbhkH2xX3LVHpHnZCANnNGBb2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32q2TH9P9trVEo1wDpwbrfPzR2QUjiV9eKXuh5FQAQPsqo6scYFYLbCia77dXA2fw8LXNp3mvvfA91mqHmhqZonF",
  "key1": "2i5zTjejJGvdwDumsMoNyNbxnvPQWJZr9ihzzShMH6FhfvH7SdJDQSQZgYkzxP9EGfWnJduyw4fKtpCziYWgFHVR",
  "key2": "4KKEDeWrSDa2He7gDKvyKr4LKMbMA662uytbBdbB8b6Q8NVB5qoWBQJzp1xw266ta8h92SZJLDUf24E83ACnpjxd",
  "key3": "3fJGX8HffHZ4MBxgYPDTYGU8ceipgt2hZd8mzgZ22PnrJqrwTEnJjEM6CSk2JuUML7b16KKWo7HteVm4xmdmyddq",
  "key4": "4TZPv6QH36szGkb196JmqPTU5HXxwPkyMYqVTV9pvdFv1RSVs9Ab1NEcZ4Y2LmKqZT3FrizqAG4CCWx5fn3MAsmv",
  "key5": "2zHS3vqF8NnXxzq7vgjkt4SwiRquYxFbF3UP4dQooAyazkekYJX5QDbYEuHNbVein45QqfJQs5X74DfatB1KqKTk",
  "key6": "4tCY657XxUMwdPuPtk3QbrPeTfVQ12BJbnguWxzUJ4BUHRZNYS1mPNPeRK1zTkg3cxNnDofShiQh5UXhYTvzMcaD",
  "key7": "2ez7GcQ6FETptF5GJ356dgz7zCxTWXcVKPo4BGhvLex7kqdFTKFRbHyNiercpxWvccMqzmXJiFM5X9LDiHuNxc2Y",
  "key8": "jDzw4LJv7S7JHsY7LMb8fPUSdFytiMbYYJW45LNo6rnKJK9BaSGSPf9rZumcEAJScSjJm14qztRkR1HeoPYf1yw",
  "key9": "4BrmVkr2erfL5dZPBykfcf5oKB25UiaoeGj6CtYCsvszX2ozf5JBtReFAUMVLn6cub3wfqKt3QZE33gr28QzJZLy",
  "key10": "jEAEYCj8pekBhT5PZYz9pyQTnfa9LyYVcqEUES29PGrCZsxutiQ3SSYZ55cLg5xGUWef7jXzW5p5hEd51iu7eXR",
  "key11": "3c253wn4iBwoZ5vqHZCQdfxC18iFwYsr8e4FszYh7in4whNAS3edYBhqNXKwSjMbXcdsyL26QjWrMbTgHSpGmrTS",
  "key12": "4ry5VDWZTkj2Y8uiaD1xreiGVLJxbPnk7EwgS7p45dNm7TH9evwdPnbq7U1VxA84GhpQ2wSv3Tg3Wx1Gdagz9oPv",
  "key13": "3kEGRQcq7MEQoXXm1EqjKP7zv2b48W4JMCMrXe4t186SBfpb8pz84Bbe3YPyPZi6kwT4cmfuZFEDhB7gkBjo9y2j",
  "key14": "2PJ5BVMw48JRuv6wKFM2KsNsJyMaJwz6zJGgTLdjDiTBVw6X2S8vDtfmcyMQvAVoUVNs6ra5wCFgTj946yf5HrDU",
  "key15": "5sPqeo3wVDzUjE1Ubz9Cy3jRLZgCA5B1ji9jSPCFaquzbvFZqYDLJ66MTXMgQFgJKmJZsuLm7cL2YLLJKUUPBNdD",
  "key16": "3Zs37QCcjkppbZTkt9Nq7CgEZN2cG58va1WL5wDo4XHtCYBPvaUh3Ad6x87c7xAJyDuQweKfAGsWYeiu51ypvetm",
  "key17": "3gg9Nk741F58jXfEK6fQSqctZAuzNYEjWs2k1MmLeSPdDECqM2iRYoWmwQJi6zjqErf3PFLsYso7xeymMpjWu13H",
  "key18": "2auC3hMpwMs1PdW1MDWDeSQCNMy6X1dH2jPXY9c7QAKicMJbVDx3LvkAwWMDtK5C1UPxqc4wMnRmXz5hXaebL5fQ",
  "key19": "rGcEyL1HgP9Je9PWS5YgGURCsFDXWbFwcCBSFxzgwvcY3zCRpbiHC1NFUoUbTPubZkWwFDbiEXNiG4JspXiLe1q",
  "key20": "XjvoQ4nVCKtPgs7vUaudybTMKsGXrM1LnLThWAqBzwdXQ6Gv7EnCDi5hpooz511LYgR3oVxd5sAKErSSLoW7tkL",
  "key21": "2CiUdkgq1TWhLe88B2NyX64LtEqJr9go9gDir8eNFswzHMDtreEcjQmsuNWzhKe65LJq4khPJwQHEiNByfZBEZiQ",
  "key22": "3ddqFnouC62uH7RjvM2yZxHZxMetLKe4zmhiGvxtz7DiePU4RrH1uLWeigm6ayf4zSPHVwkU9CCxCm4dU7UZXwPm",
  "key23": "2ro3UMUqJzNwEtjoZzevNfvqwNTaKCbXDDst55LaTWVdLwUch356foUpZJHyRmF72qqspwZes1QJemfYTzD9pRjH",
  "key24": "2V1hz64EvkBQtfzBqpB51i1yV67y9dnpAE9kNVRRLTujQr2gQne3qHC99QkHxSWDV7ZuLF6veK27fbFPWc8C8S4u",
  "key25": "5jXzsBRpwtQwpgVVpyqpKFi4JYVecE51HPEpwncnVjYGDQ8CW6aUrirqK6jWKKdAwxFCNDttfMqxL4KQ9tmsrk6L"
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
