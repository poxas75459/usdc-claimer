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
    "YCqNbsmfeth8hAQWg4N4eYSpAw5kmhcatQPJZ6AcUec8pdm4gqKo8C5XCvhvtktWXU4N5kkXBscyZLTkRLChCfD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ufi29RpMx8uXHNrqkJF9QUsTnVi9XtUYeQ9CpNgdhFhrewi6rVCqKpL5WHaxmd5ZD1xeK3w9kh5C6D933s4Vduf",
  "key1": "3riU7WWdZ14Xnn3K8STBgkyoFN55M6XTvV6Gm3mXyWEs32oUK4C6SG6knNJsb2BuGMjFG3rQ5Ef5Yc3ujbeyGpsh",
  "key2": "5HN6tQUXjNg1mPUzMwe6wU1ng7pDjXbsZ5ACzLRo2xXv6dSWoxTWZUkigXX6HcjRvDsKHzv1pokGV9xtLoKSZYja",
  "key3": "2vhRgsgXatJprXUoWXpYPbCgVFAXCjV5YKFN49i2Tf34r3CEGD2fbAiWdQqUtVgt8yPcwPzKiAmmq4AXFxioH3ht",
  "key4": "5FuS5T11t25pXy6cGS5ibj2fywku4txXg5miYrM4hu1rZuVscN1izUiRwA4ZKqG7drNmK72Wp3FptveCCva1NExF",
  "key5": "4fHB5PZpDjyfApx38WVK3cpq8AHJkfdpxp1PEnCiPPGynRtHW8XuiwBBoTmTVDghD4KZTWgU4Cr5YGbKWAPkzx2p",
  "key6": "24nNYcYbT3k56G6tViVT78MZf2vrPya5eWYwmdxV9oCuhP9Zoukqfowe3w1k7TmyeiJ4fDK5M5soDmHwh6N6Y8x2",
  "key7": "GkbEHYhTpSSKLVHGNjNeSsikcTfZ6c19dGw726dHawuJR7bd4sv3tiYRFEsvQNnsrKEsoJPVCoZY5EQTGkgqktD",
  "key8": "2ZNUZEpJWV61qweCT3br6w8bt7pzHQR4yNvfribT27XgxQny9Uzv29SE42HV4cF1TkGPtZUdUeaunwackvkQzzVQ",
  "key9": "3DakS3FvvwX5AYPE6cNqeYPRtdTgNsG7SVRwofEMLKn6mZxaMjjDPNz1wtEdbe3GUyrxAY12xiMmoGoGV4hdE3Mo",
  "key10": "5BSdFx8YZfX8Px6PS11E7Nwbz1oxRZdRfDiidKuSxQPEM56rVZ714fcVRvGvWUrir5d3xok92Zj4Km1NB5KvZgTw",
  "key11": "Y7M2YscPsUhmdueAzGuMGvUCT5rHkyeC5oXnumRuVpG9CUcqrhcBjAbp4os1WSJ7T5RjiBwwywPRQPvAsWEfWYR",
  "key12": "VpCcC3XhnYnMw8aMfRgyRCiEFu7rmdJUsdf92GsCGSYBk9BipamgAWVNQ89Bm9LxMvsex3j9PwURTPprWvjhvVx",
  "key13": "53vpgEVc3FGnMroPXKjqWq4kkvnbVdcijEAgsUwWkzHdTZqM47V9WqgtQ3nYf8CyWfZE1NBeEAWs3oHh3dqgMCGp",
  "key14": "2HALYhUJetDSCZfEUWWXafkTJUkfnP7b5ZL1eFty2FCps61ypDHgHB2AtAteRbytvtc2gitxFqHWJVCzWsrEGmEK",
  "key15": "4nV1cCpsNUS6jxx5nJMr5mQb6fZTwdfjcsHwfthnJXeaCWC9R2ztp1tVmFdfLRSvRiL5JeWD61aJxs9Uei4Z699F",
  "key16": "3UJ5cAGMWMNvDvbrr9PjrdYa8mu8boGpnQeHwQUmnYxXrCD7P5ksqrPoBFRYSw4wANjf2vrvTQUqKxQJeyEfNeY8",
  "key17": "388Xi38Q63NWW8LHxhsDeTyXBwgSqtcdq2njLU2e4hNKkPeKy1GKZEVZwNmCd622cqwsrKMkS9qFPfGWS6myA4mj",
  "key18": "LqDviRg4fWT5eYJma1RubRHB8Ki5pBcQFDruZMTrrpdu2kFSrAtM4pfm4Vs6RrwRwJ9jsrRCgxh6kZAXHcYJC1r",
  "key19": "22mi2fFDhUnNqhdCJDcsEXSQq4mBpmR1DhrvqgyADTu6PAjMi5omfA61kHEa7Z8D1X5NBqfXc2MFUGoWiFnLDxaR",
  "key20": "3zKYzDVvspNN6Uw9rbXb2vZLPRJEPMWjKoxEMZxKsUFy3m4ELoYJquEA8Kh8tcUFu4AqEAQbgjeby24LSCYfpfJD",
  "key21": "2q8pSmhsZPdvjwWaLV2vjXu72V4mfwVPyQcAX3TL1owT5LoxQkv2iGCFkoU2XRLGYf726g4fwW84xTfVP9N2pMdU",
  "key22": "2vpcpEKM4pBHwtn61j37NKbEJBr7wJseTRx1cW8EdWM34p7NWqtpLeiP1PCdCBKqjiAAacUrdYiQz6eoA9VQszud",
  "key23": "tLewCAYKyU2HjG2zwdy9GwTNtncdXqcLmrB3JpjcVgDFZ4KugCUWfyXzoeuF7vuTpNYozZY5WVTcadQnUGSrZ2P",
  "key24": "4L9szGbxLu8G9erETFUWGAetLnFQDBqj4i7ZD8UAC9cpnV5iK7FrjvfV9TMLJTV34gZpq6JHDEkyr5N1RuAJoqP6",
  "key25": "65C8FGGbh2KwNYexRJBruxQPyw6ndawCnzbNjXrGemQiJ3p8RvjQbD2LHR8SfVBJ16WFtTVBXioJbr8HatMYSnXp",
  "key26": "3p6R9BiWBGTwjeVWEsF7bJNsRA4b86Pgm2714Rq3JKGG2A1NRkJhpwKEipFufn4yuboSRH5VuQ2jc5L6HU2fZYqk"
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
