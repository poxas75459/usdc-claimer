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
    "58endAjqUZWhVPCyTLVxSmw4T8ntCWabRxrEi4yGrq7t3wcVNyEtaSbdBoxKwp8gGFc2cnEQ9FpfNJVmYLZ26NXv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JuQVcRrxVavaX7xg9eSXRNZSbQHUbrZtgFZDu7u6Lcb4sig5HJ1GgwqQ3RLmhrZpZ7dYNBBAcAJUwNYmRTqeAj3",
  "key1": "99ddvegcPsMPmTZFDaiMqvUdFrpwN23VnXpcGoojc4KrziVFyCT1njMTgPyNr257xQNSWWzCVCBRfrb8ztnnSdP",
  "key2": "2S1Jq7PGqyHoj7zxEzFHEYiPKsZFkrJnDdBN7A9vf5xcjfcwBAVh2H27FddaLoRwsdtMEoLiJ4ecpjmRSMiyCtu5",
  "key3": "45DQAkZNxwj7Wh4ZY6YNpLCDaszpKfKNFUit2fSJDNui7FcKfSKB1vrq8Y8Me1uxor2doXvbiwmkgkGg3uASzdGF",
  "key4": "4ejzkB4AqkZ8c1b6Twt5C1Yu6BaDjDJ7cw5cvTd5bCLjBuoDHDhBCxkFBYgxH62gVex8Z5ZcbGTYzvwWv1Tyycjh",
  "key5": "ydDp4CwGRWUmmtj8CpPMyrKAi99xdV1pRu7iWgRW6RAMGf8PN17kv7quggeVAAtg95gh9F4H39bPtAjns2QjRuV",
  "key6": "4m4GKEYfYGK4xN8uywRmdCP73WVueXsmGMGWzPYJrARN2LwBgbzCfcPfSPK3T7U3FR5DHDYFtrEt2mVqaQUkcb6w",
  "key7": "51shP8upPYpWDkc1uauGFGHSKGXePxyMeJSWdsUcF4bZjYPtGjaJRZMkiPGqtBkXX5UysgpNDjojH79PB6CNXhN5",
  "key8": "2hrjSEpcVUXjTs6itiL3Tmjx6D1DWzuXdV2ABQYxZsBtZ91BWgC5dA9JPyPwVyCdoTyhUofedSZtcccj84NJsoZF",
  "key9": "31MvZqZQFGTjtDHm5q6XDyAM9Y4oSpxABX1TKTzGcUfWhFbFRKPgobcPHu2h23AS85inPLvax4Ze5wRCuPBwhWMZ",
  "key10": "2wjfeWctWvUjUajtYQYB7eP6n1QVcoHxRu9qqra5WQQMsfRDENZemehk6H4dmAufYkF874BNwzdNFgeKv5rvtjFd",
  "key11": "3VQQJ163zem1QxKXXtdgp1gP4V8wYmjZbyRzBWTMarivV8jmQ6VSXHGuwGfXGh1XCgUtEqRrLy2rrpBog8bS7mFF",
  "key12": "4bW93LbHC6ouRyVMSQXaHoHnghFgQ4Txqz7RkD2KR99PLe8wMWbDdnfmzMDVtbDz2AoihZ4dYxwSHeuLJrfwFkhY",
  "key13": "3oy7F7RD4rVBw7a1FkgUjZqLXBYR7TstvojvpJeSgYEjK1EkAdsDcDSxKKs68zEKuSsxinxyPkctZSnvn9CESmXy",
  "key14": "3WFcpA9Px6UtqEfMY677u8LUVSoi2mk1PN3EgZHv8YYrxVk8croBcWkC1pcmCZh1n2mqiAy1C82KP7jHpCLnLPQi",
  "key15": "5fBqZtYycigbRLEYsT4QQHdNutfpeNYBxQZvaTvkT1ExBcbvRGGaJ7aL8QFF3r7anmUuiTS3wRVkz2QzbUm5nevN",
  "key16": "3AtbSQh6vvPJmBpF31Dabgzj3FJvb3yrbRa8H8LR68iFD4DfsrBJ1fMm6JwmSBrSh1SBKaHb7YZMjaiT7AJvVjdY",
  "key17": "3mDUFjFKr3nrHzqPnj9B2fsCQSKL3bfgMMy6vUdTpeNUrRjNFf5yT6U1pmTLCpNbKdu3kQm2Fx7F6QZXRrcfqS3M",
  "key18": "4LXeFrab17Rpy7Un4HbPLpWhNaFGLLPCHTbqznhGwgbc2QyFsh1chER5Rvrd3yfdcehZtg6X7pS6s63a6vDV3iSL",
  "key19": "666dJSSu3q43xg2C7U2dVWcyb1mB38DJP8p7FA1PYXQMXMkAkJj2nCH2ipovaQtAUaPWpv9frYgpHEtZecv4iLMz",
  "key20": "27TWWkH3gabepDkxKqWHXSgjYh8t3ZR2pRTucGyYkKtux3zFwJ94wKs6YMwssLGm5K9viVTUmsjLhqGrwiZRQgKd",
  "key21": "4F6VCAg2Sus6woF4i8dNVgmSv3x6YM9DhbZt4Fv5P15caaLNLoS19xv1UoZUm1LpamGuZVLyMQ5hNcEVCLtRpUHa",
  "key22": "4hUgyUahkkLxW9PADMmh5FZMBvX13z5TJBmzYf1K11HU8tnFornteiuZgQ23wr2W6hDmWKLHTEdE3xyhJ5q1ZGnp",
  "key23": "1qV6G3uHCjTQdJhHDmoeneoqm8RpfNruXepezxX69NNdrMJ6vxphZMtX443zPLiyefDvmSRArAon123JsL16iUJ",
  "key24": "3Lpk45NjYv97KUW8Zv5Q1ZvHcAGKehNy1RRGZFrAyLfCQ9DdSnGRaiJ4vy5tKTk1sSNkJVrfX4hZXtgvKM8MgwaX",
  "key25": "5vQWgsJaUPeBCsxW4Pa79HRXE7t858d4Q4YagJ6aonhWGYbAFgGzxVEavcRQACxEHBMcz79YW7woggjtKQhTYyvM",
  "key26": "4S8gX5FGYYb5bWMGRShs6dr29ATck5zVKd39QW5X31QGTvanFHQ7asAkjXVR7puFJtmaHbDsyebF7svi4KbaCpN4",
  "key27": "2Ay3kBP8hTsdHu4rgCouEZNPaaamWzFHT2MMVLer3sHZ6mtmDRv2QffqVd1SZHsksgWJo1puGudTqjCxP46JtUHE",
  "key28": "637L9ANsWaZq9VGmfNHiDecqhfavH1vZtEayrhFX4wRjunc5n8UocJGpbGCjqxWABhE9NRbQXFLJr8i9Ar5FT8DH",
  "key29": "274CHLM3tpBiyCf2mgNF3L1uZR4otWHZK8SDbJUJTBjePLbDarbNuiXFCGX2pfoFaBdjDZTNYBTzWfLc6vZCt9qp",
  "key30": "5g8tEqn56nok8vQsb5ocHLvyy3a5C5pXyCAbSYAMPPxmkbJAhsv7PMvhUtQgLXv5voWDDwuUX8FEAtrzJbeWMAtp"
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
