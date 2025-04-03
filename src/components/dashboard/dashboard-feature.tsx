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
    "DtocxvgQaXe4D1PjnNvbGJcpCi6viE1eeXYncPUWmyXoJWi5S3MMy3SZWYwWs4y7d6dSrLuXWUspJNRm49TdJBe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rb7nDyewEPWUK1NiKHtLNpvfkn2K8atidt1ZEJYa4o2uMfC4j9g656m2rqnKigYPGmfyQuT7hkVWWHBw8ovy3y5",
  "key1": "3bFYUuzdFpx4Yq5XtwTB4daoZkriSTWFE3ttxqCoquJDPQ251uQm3ctV3yBmZzdb8HuMr7enC8zA1HVCfGYDSTww",
  "key2": "2bXTUZG5spgYEAmqa5M3zbWsfAqwcAEhPLZprRpV45KUtRJf7PnchN7jrcijDimDYLW4BrxaYRSsa9HPSuLBzpRu",
  "key3": "PZgL7Ef81GukrjGkLz4CM1ECXyJ47kcbqEFYHxPDGpzk6GY7CD3baqQmmQabToD5ph45R673ThUvypCfxM6EYVi",
  "key4": "4GRGhDhFRGXeeqJRyLe7z6JTFD67NnC9J7Yb6gow9mE2sgmiR7gaeQSPtXowtECnqsCV66DFhmWvtbqk5p7CvzhS",
  "key5": "3FZsNsr4mAGTecuDCXY7qJFZjBFVYziHciRH8fqAwwSPE93Gp15nJkYjUssHXLSdyt7dRxP2JrjtU5KJ3SwcqqzS",
  "key6": "4JvgYhDAxmdjv5iB16ZEbWUyajNPwKGcFQ5HTB5a1viiKi5y8hm3KbE8y5ni5DQba2TRYB78VQGfBkV8ST8B8pDw",
  "key7": "jZCDAGDnaS82QBTHs8YPkoUgV9Q5qKMZZyteq4HLgFvZWx2c3GavHWB9WoyTkcDdFHH1CFLbbJrYBkZJB1TogMb",
  "key8": "64Vbs2Rbo9kxfB3kGqZH1miioPK2CjBLCk1GgJDhirLhFGF5Yg2rSuJZY4zPDhBrzHnC4f2j1W2jf17aahcnYVBw",
  "key9": "3hAKwyyrLEv9FFitXQUjeT81aCTyb4iSXcHhghX1P77FU1GNrvy7sY98wcGQ7WLoDT6mK4z8tEZh8vx2aeTijWbG",
  "key10": "47qFX8fo2SEf1LkZHxvfqNU58LP6ojBGopsHao3RDJhtD36gAn1g6maH5V5wKKiuKZL6BQxVvKFpihCWJ14CkRTU",
  "key11": "3h3k9Jwy26DzhwvUdhTXPnGd7HPtfYDUGDMLkKHjDvLB1eEwxP8VxWRDZovd1wQZxRRWiapmnjsDBQ9k3rjBGwQa",
  "key12": "3ec8YJMC3L2rhP5hWUntVRPBwAEv5Vdi8cMSpGBAd3qhKhDyvjGc3UuuLEYLEBN3PUCGfTrS3o5BURBsbDAAMKcF",
  "key13": "2qfRbrnZ4f3A6WEdrkACiQigPP8HKjBiYg6kKf9P4zFh5AgZBSnpxCdzSuqupU71XuJC2enTrWNbYHKhPQGCSFxf",
  "key14": "27QMvhwG55Fr4gQgQGDRT5WnEKDW1s8oKfWfyyhPDKhxzvrgpSinn8ekiJ7XCmN1v68ZxdQfdLkfSoKoT77Sn5q5",
  "key15": "5qj7m1NrEYFrr3t1huyPSfwWzpo2ZWJFnaVmY6gYcY3mab3ADNepvCf4rmjtrPVqf11yu7fzxmPeNJeSikGSFpLe",
  "key16": "3ajMYTn9KAtELRKAQHsBxW5p2zoiKGFVNbw2Fj7iURRZ1NKW22AzDRpEZz8NHQkW8cB6DbjBDhvCmmHL6cTwkFNc",
  "key17": "5xas84sMEjyhuGSGb4TMLiNwpSKBzRY95ixvv6LjcByh7Xq7UxQNoYj3smZF8hmBTusLTTicuiKAeNgwHg1Hiyhy",
  "key18": "36Kb8RyC3uiNUm9dB4qHZJPvnZ8nRMdpP5NKXm22HAzhLfSHCQzugbSKHGuorCBibQxa1LVkd22dwcNBUv1gG4m",
  "key19": "3vGjKekcwqYHSQAUymEu9RtVKntpwsgrNCWXJhBKMH93fvsHQJgFKPf2uxhf6UAC7MUNMHyXn8PS6872ttVmxk5Y",
  "key20": "2ZS2YwBkuos1SEPXW3CsWzsjT4LjmkUqJEFGtugn4xuoko3MRntJRCg8uLJnM7azgQy8wCrrqeV3xYfNRtmHCJro",
  "key21": "3xwPFMKYf4BcafcTLnJyLYRVwMAX2HUzHQd4QtW2t1zk5z6v6gY9F1qYTNfB8dHzmLmpc7TirMAMSgLHQQyQbqQ7",
  "key22": "3ag58cF4rDevFJyfWSxDfypnxZWw47esCDqsEBLLU4Mbs1f23vYD5hDMWgq3BP2fUqR3QaJcQn9vRA9cXVyaJAin",
  "key23": "62K1HnTobA1b3QZZUsRXwXTJKinG7mD5ofjTUAgW1TxzQDKg4F8Dd7i9LsD3cuNVeKpMYpQ5hT2AgUW8dvfpeBV6",
  "key24": "5CJjnNQ9PqgFQz9m93TPxYVjgvdMeXucsQpFgBBDtbq3YG8QDzHTUj8bt3zhKct7PouEefHN1GEYkJFq8Yb9E1xM",
  "key25": "4Q647naJjJT5eHBBmAtWeRRX8KA9S6KSh7hPmDrbzaVDsZkQcMZzRj7sywV881sCziURAF3WG7i95nEaGH94zJ1u",
  "key26": "2488bERxNsQ8DZ74AwKoeKNRDJZZXHJSK8F1Q3rqd8zSdceAfuAeUcsZhyXnWmQdewDEsV3HeMFynSys6MsS9tkg",
  "key27": "5ffXW9Eo9oX54MGDpKhS6fXH9HpJYFRmu3HC2tbzje5EnA6ns5mR2iHjd8aAVWCHBWXbP4gWSDcnNd5xkBLnYmYN",
  "key28": "52b2bEzvD7tNpSnV56kheoXPej8oGq6M7qcAT3xbj27Z6knFXYSzmAXgDmmb7SHmVdrSkvmBqsH4LePamoAmgLYe",
  "key29": "3bG3gjedkbnXUd7gJTgKVg4pQ6NWeezYn4Tnu7ZhfKVjcXgjfWrBVSdjfvbzgZk2skTgD7A3CsJxAhtE5CgxxWic",
  "key30": "5e83v8NLVZk68iNz8YU3h6TudHQihSLsuZLtNMDJjnNGM9r8uncLcNhEunCaEVHEkzcbU4mbMiWHCV7iUSTjUhwX"
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
