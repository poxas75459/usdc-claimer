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
    "3JnPXTBREFuxQswLXBECNZYzQn6WLSAQypehdgdy9ArX3T8U9Bm6VUyr7ioxwrDYMJKfgA5e3LvWtFQrib1EkUXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZZdJHXGhi8zzc9uhBP83dRCdYTVYvgUHFuZemQzuAba5NCJ7S5SEVFf9htfRoRmQaXV9QRMeTenhUuCEGSnbVA5",
  "key1": "2ToTs1wrM61jA5zay2u1eHJSMc6s4idTwsx7UfvZu7xju9vzPPnPRBwMdCZ2BvaZBGc8C29Tjq3gjZgJecqVSmX6",
  "key2": "23yBSMVgRuBJVbNjCc27o57z69v84rRwV5hw3qobJNUS7ksXZTpe6W5vmoGSyQbZMM55eDXbEmawkw9nLUr65a65",
  "key3": "51XchHLsbTRhdqJb2bekuAeMfGuhQ3EDt3mutd5MMZXZmrU1q9m3mF6cttZVVPaPnwGy7UchC8Z3JGdMNWkymvD1",
  "key4": "542KyvC8GHKG1NDovYwZEjMkQCkG1SjEHsB4YJmeSpg8CETGZbYJC7JPiVQLD85TfCueZ28SLKKe6kfhQPEmYFCv",
  "key5": "5JtCEdaouBeka8svxy1u6U8tr8fRjFt5GEeXVfF5t5pqmpDbaYhxAturqQYZmqq1c2Zdzbq3Q4g37hT7y8x5mMST",
  "key6": "oNT28eDqp8WXQLxoBcCYiMvVRkmVCpUXWBEr826LG3PQ8t96zh2XMg8EH2cuKi385Vc6UVq6RDR8uhabKQGbVdi",
  "key7": "2ymunCDcYSZ1JXfhHtTpBPko3y1VNQVSi13NmEtrquHyfiE38zrTTxMkCykrhjgXBcuToG4RDm2ADEPgsPF3G7Ed",
  "key8": "3qEBqSxKAtZcPJVCKa9s7WKBrct1rE1i2ao2htdf4WAHUZbTdGax7YzVG3c4e9Q5fou1yXy4t3vftBQ47rNofnvZ",
  "key9": "4sP1inC1mkRURe1m4GL5P27ctQ4CfSrnFLac191xpksZjsFdfJr8RUDwEmGiJikSFbhhvGNAftAD8Etw1DbWryzK",
  "key10": "rMKug2LjFVLw2PwvCbZZCQfYCMNsSpsnaucyQsAKcwYeAfCuBv7G2LRqmSW55RGxX9FTmeuqzkbU2eWJQNss5gL",
  "key11": "3qhevcgmQ5ZhHh3JbVgEoJpFqE3DjnDiFw7Z1atdyrdbyfnzwRwX3MncPMJFXuPxtQAmtPniWwt19Qga21ikxCGD",
  "key12": "3t6S2UjYzh5ehcRSNyCCZxThJs6atC8KD8NW8d1pHy9HnS3Gp5qsHqSJzwS8nNRPa7q7KwggX8SMY2dpHiwLi2xD",
  "key13": "3k7LBRFDSB8rym4gyvxUW5wSqGKrV4LJxwxxVrGttn9C4i3tFtfFysTpHoZ1sWS1qb5dVqfQnJBpEqyFrLEEUjRH",
  "key14": "2qq7G4wafkYciEcGNRQ8fGvk4uKhLXCS9b1MMs2nn8dDJFJsfnGfjpJYgMkS2BH6BJDMcEXwH7mKRxwdS4mYG2EA",
  "key15": "3Y6L5ReDP3CYqe9awZXzoUAsfBmAyHHCwwMiFWF9kYFcV5auv5MYo2ZHWXBiQAcTKp5gim23aiwUbrKpcLCammNz",
  "key16": "5qhCFxyuehn45EtaFYCxhBfKS8wLfZZQYizdg4QDbHvf5YmVwLqBHbWjX5VAvjNUsq8MpSWf3fHjcR21iyxNGTHp",
  "key17": "5gKyFLmSCk8q2Y3J9ReWk7wYcLMFdBtuzBaj2EoXWXBmg7EkBRu7mnenDiECvZVaiAzvSpv86kib6EgUivFvLoBA",
  "key18": "37V3JqfdpMtxe53kNkSWeVkN1bZQXwqHsWTcRnttyKSjqAmhqViJj47SQsumyqBYu8u7AFS2WP3kKz6LYECnRSU6",
  "key19": "3ntQeU2VwHvr8k2uKh3SSv2tq8jsHmXxxrs8MP7Qq9Qybqy1pZoyvsoYNENbs2hkkn3xdD9oeYFdp6CejwWBaqxh",
  "key20": "4CEiWCTez53NZmE5qsh7YRqrRjfzYHGgbo5qCJjA9GKzJMjpsF6G1SaWeyWFw6yM6cF6uUxXZ2r76F7wm9SL2AFs",
  "key21": "4fUkBxUgRH5qBadcgmtLvomcazEdLFxvProqo51yvqFF4Ruc5CytkeSvZDdwJSimbMLUEKkXEiE5sABxLZLgUNdF",
  "key22": "3EfnLvhpEebLoPJRgKNjpCUfeTfwCss3BpkBWygq74Znm3JVxc6cSoEetiaaByNRseuDL7CrHYVtjk4TSsGx1Aun",
  "key23": "MLiNtrNGcwq9m8hDK3U1T4QgJxTkVh7xNPyaB93FVhHSsz8ckYLthf7TuvetZugLu9HpQxh83B7HjAh1tfHxqHc",
  "key24": "3yPPTCbaMrmY2Hn8UEYA63LiyH4LNmRpNbzYbDu5pSSZt5NdCbE1DYrQFxczu2Dq3vK2YAC5hvfHvzZGYS621Vgc"
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
