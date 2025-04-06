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
    "3LvRZNeZd2FLNkLeDmV5TrXCYh7hBttGetjMN2fMeo47yTEgc61qtTFuY8P7GuKgaJ72xor7EoR4UwmYkMALYHtG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3drD1HuXXzmBQaQSRU1HeGc1yh5zfrLrAwaeviCK9wLjakDYNdZnHJFugiPzT1SKEMgTXrPpwMzSdhGiVbEqKE5k",
  "key1": "2KQpkeJnptQuhDvCea1ZzgAcJYFfeAy2Cnp4NUPNM8nWkz3QPan2S1oqVc4m3nTz84rL65U8fX5RTDkoUT4aofDQ",
  "key2": "S6yUKk4YjpyDo7JWDj1b4m18Kz3H4ZBxQPTnAEFJQ7M57fTULaHEUe7y5wfUe7pJVQ7Gt3bNNF3SLqvBrTE1m3G",
  "key3": "6zQFcG2PRvxhEeqdQmAJavSzQaRLQmLKsna9YNgJFYYSYUM2JeRYx297KGP7Nx2zonar4Zmth2FgqGxKSb24LS6",
  "key4": "61rdKPWYv97bEiRfwXrq4Z3LSEunZ44eJ5rQJcxHEaKnBhBS4rxBWVos962g9hqbtmT2P8a17o2A4ZuYimAedZWD",
  "key5": "jhFdNi1WFWau7EGWL6XMDZBZ12msdXbAH3geGWPK6jPBmgckYDEzsVbSG4hsBo7ztyrYS65wiTS3CitRJBv8Bn1",
  "key6": "35mJjD5EdCcn9YyfYRqGtjhG9FtYjneuyNzsZwJCumQ2ubwZKjZadio4KM7NPYEA5KgeSFbFq72jBWapaHdkAMPq",
  "key7": "4atmCb7v5EGksRYW8r1EDJ3cAuL8L1dCMgY7A8SQ1J3JDyNvC7pfbY3DCZyKMJF7TNBxZAX19Ltsozg7VmqVXVVJ",
  "key8": "29KFbbSBXbLSCYWM7aAGPRm6GswecTuxLJA3R4xN7HeSiGxzLfQGsTgNRmfyCnbACW9LJ7Bu8f69gURzS2fd2MiA",
  "key9": "2fUMkX4xURuDqrUvoQ8Q96zPfVKLesfQNnwkB4C9p8CYGxLANH2hfGqfeaR6QDKQMsk66Pr99L4YG49J4N2rrL4W",
  "key10": "4oJhDsqs2PVYcGbbbHhvPXWSwnz7mQWPUuZnVWSzCZqysYqPiUVGCkoXEuWgBRRKbqdtkLEiKxrEoESUjNZA2T43",
  "key11": "4KhzZbLNUkJnMDJrGGhxYBupURUiLVPZVC8vpsNEkLY3RFTeXFeYELETfuwzghrQ7UUveqYqicL1pg8mMMNuFw1Q",
  "key12": "5c6qvdF3CLHobZW7kkDnMz5zWfZyiau6z62jNrSFkQbYj4N9cfSq8PwxM8EjWVNNscomuWDR1dbLCCUj4G2ns6yX",
  "key13": "56yNxd5C94YjXHLoqQnwVvpqXWL3KnD47UfrtQ2W2hNvXrEZ4N6TXkh3YkUGqvTBhWtghcKbCRFPsPVZWr1Gbcf",
  "key14": "5UUE64GHLr6gCKWRE8v7a59kWdXb2CeQmHvvvS9RM3NA8Dd2vCB6QLBM5WRNj1vpFSeBu98WcZsVPVitzdLU1UiP",
  "key15": "5tEVpZMzuAx7sASi5eNcuRrtQbmhuQEoqDoHRDjax1BjCxSaMX2P6E8hL63gNFdh6E1uzwPmqaip4bNAozQ284x6",
  "key16": "5coWPzv2amWZEA37FeLvxKkCUMaTUwRJUnqB3b8M6AoauTrMSbP1JiUTNmTpuXbWw5SpMT8uzGReZ4Z61ggT63dz",
  "key17": "QAdk9cxLvbBCizdfD1ezun8QGrD7psQbjMh2UiHVtMWtt7oJD4m8ciAMuiwxd2jrsHBLiA2DGTBmj3unAZyFmrC",
  "key18": "MTopUZMJKxc9dicKRnn1wVpUVTkX9ctLiVdM1DGoKZ89QrLvV47wEXB9siTtK5wi9J68Fak43e2fUcmpH8Hhqdv",
  "key19": "5Hrj6aG6jsczGhGAXk884wePxHLpfn2NeB5FfrqQVHKj61XCafiAtkaGVkjX5VDP6a3eDiY2qxQCMQjS71YYRXkb",
  "key20": "3avX4i4Hu7KMmJtbZiLpkEU6twJUW4QdLuLhykmVUL2cY67Hmn3EAnx98pfm5zojdPG3ZroK13HgjXz2QcQxwGS6",
  "key21": "3qtKAHda1KHn9JCQEX2B5YZpzkC4HzhN4B32yVN6A3R1TaRYF2JQL8rApToqUaaYASez3y9wZQu3Jz5JWGwDYYxH",
  "key22": "5pTuLnqyFSpakwmzQH6ye141z5pgcXjUVnPFiRxtBJzbAmWBU4XF5puPjA3kUP8GFN98myK1ueCpNXEMTeEr33Mo",
  "key23": "4yTw56LBTbTKsgC3AQKS1sFWDMAL1mxmWUZpDVc2UzJuCuG5Ca6vHyyizmBSnBs5Jrs5yyTvDui448KY4JY5rZoo",
  "key24": "63pRkbvkg9S6QbaJv2djsF1z61aZP3kiJ9wNsZQKuEnzEKyrfYBN5qoSwUBqE5WYr5iDfBtZLN9GQGuybvFasVC1",
  "key25": "4MkH4Jmg8LHgfpkBcP1dAu2TTYeUbenkJwB1NuKyNHLginS8SYreLKZb7qoYdq3gahsMQcMt7c2mu9G9RKpcMpJt",
  "key26": "2mVvhW6HLcPQTuzuNMfG8AdwmUPmsSRYMYy4uw2zr93b8rTT454wLLQTvavpSvxeu9doQxjixmQv7J5m8M2JtRcN",
  "key27": "67rpvjUXvjS8mBg1mXt76oLSx43uYXiQPNqwc3EUdMvfgMsyRNdyoq1fxzCE1MWjBfXpSMedXCqE8jSrPRq7qJpQ",
  "key28": "4ZosaHzUEDDw9NeQh5bx3ejjuvijFuVv95TxPCCgQAfpyh91d7rV6YmRJo2Knw8Dki77gRHtF9zagSStv4geYuya",
  "key29": "2ErYQ79JdCy2kuHTP7vux2merxKX89sw1g3Y8eJ1GYEuaxcYZo8p4oVz6sdhhxJzxboR6k7UWyyaYbeXnc6euwnc"
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
