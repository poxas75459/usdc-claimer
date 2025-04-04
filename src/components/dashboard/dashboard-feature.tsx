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
    "Hu1m3fjiH4YRZH7YBZ51WzvQNiPyFHWrgvJcceumaoEnRohi7qfLtScCp8XZovfoLLyegBjLCgw2z15HyuDN3L3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EPQA4KsxtcuKzVkuEjR4hJBSkSqWfpJ417q8mBALdPGPtGJi2gTS89AzKqPXifU41EzyAToewxPbF3xSh7f9o62",
  "key1": "4zdfYiRYmDSFH1WbhknLwDYM6kM7G1oeuGMRzh4SvsZkdHs7pETyhxKLF3PFDSGeNd7kSbuoo8NhWP8RNCTVQMfA",
  "key2": "4cH93q7fHdiyXZhQdsTws97vBZT6CvZFB3t5rZT3bYSvvFChKeskayAPLx7SuRKFBJqGbHbHE2gpoXhfFAXBLTju",
  "key3": "2Fbb8AwVo1F9cGUCv89T1AphkEH7nZA3qb1N5X9xGr7RRA2bT3qiuw3HEJeeg9zsQ3q3Ea6h7GNFJcbnnYwDmL8V",
  "key4": "5U8b1XS3PvWS7oYgtbrAWh92k8UJCxZCH7iDCyNELLdLU9nfB5V1eWgzX5bsqzhJVEUdgPbYLs9tDfiDt6pYZxhF",
  "key5": "af9TsioFcgrt4EuKN6b4LMjrL93M7w52hF7shnNAYcAk7GDjWULcphAcj56PGdtV71CEEpjmzipdpxXj6oyiVPv",
  "key6": "5DtCtkB67k7AVE51S23gYfjNWn649XPabuR7Wi1cPo667SxVGRkDj2zZWtQUSKsujghNR75dYmbsULDCVDN8uYof",
  "key7": "2ELCgKfoDW7um7szGKGRs5mzN7YpxUUufLbNs8NmLNWb3hF7Y5CTaUwKqruBvHcqHFYAU9K5JBiwYASnYbRQUqBf",
  "key8": "3N9C6dJbR9HfYrMUbdFEZxSsbC7zN9csG1DPzX3r3ithuA4Nh9VRjzWpVkqFKKgr87r4q792RLftssdpMAR6UXkE",
  "key9": "nhL2T2eExdEtJe9dZsmsGsSk8RcttqUrqeKHLNSbTWzZFY1pruWpqjfbrEV2oYwfMn1W2X8gSixZnaNzftiEZNH",
  "key10": "3cWVoSuxRk3R4YNERNK68zpWVBDPSDsKmRfRhHZkc7yhucykuUYFUjnHZJX8ZrYmyZtWGXeeUqhxktsfhEtuKkZt",
  "key11": "4yyfovRYB8airQam3fzixir1PJWeLzFsfNgkSDYNCjBuCv6zkN6gKiXh4H4dPqMGpEFtDMhyjvV4iRM7zmsDG6qs",
  "key12": "emYGVMRSNb7p8sSJosQbksZnBj7MLCTELWUhwfS4dkkGKcDzbWkD5dXhY5tSDqa1Hi3LdSDstdKo71K7BTBwSHw",
  "key13": "4vNfckdapuS7PiQB1YWb5gQ54AzmCmN3Gwj5hbkFUVDdZk2KGF16i7idwwApsf2VvLDW6Q98TFmPd7Y2YgqKfqmg",
  "key14": "VJakgKFJJAAgCPferHBds9RuhccXzGSYfx8nNWAUQTwNxjPtbjqtgeeG8s3J2DemPxUB2ZoYTnUrmFjAshPWAWN",
  "key15": "neVA67V5UxrRTSfnt65udbbcXYBWe3xMNbNdWKLtk4vZbpwHGHjQwmAsp5mPaF25Hs2ndj6DSP8qT4s1fA1CjiB",
  "key16": "N7UE74h5hpWX7SMeAYJYfas4bvA9cJMWcLXemkWvpj22GgXYD6RibrzaNBeW6YBGdCjCrrRN8AuBFSkna6RjB6n",
  "key17": "RxcdD2RKDvVfr1DuzLtzwvDV837Hogja1T9Kzw2aaT5k6pFzXp7JdXS6JrWDwy9BM7LuBuvcYqDoXEnFekD5Hsn",
  "key18": "344xxn748x61ss59QHQqbg6DzdetHyF421jY1ZzZdBDsTfGuEc1sS6Zn7fdxUp58Q3qz9YUUtMQqB6qTVaqCDQGL",
  "key19": "38137DmfockeHNqtcNeUk7D4AS2HWNvw8AgeJRmKHHwEnefLg3xF7ZRByZez7QusDPR8hdEA99nMBF6UBo1LSXfe",
  "key20": "2DysTEgeMbmTmhxoMVgvPmDptqgvG5C3UmySXysSyq1H1VgBC2cGwTQS533x12JRKmneNUzWmZsudCyqHinomCYn",
  "key21": "4hPMSEPP2PJTpPcQvqi35mFQC7zB6SQC9scxK1dJwrmKC4SQ8PuvYjkKQqtu3Hv19h4ZyGxxWFBPgfXMKnVcS7FE",
  "key22": "4zkCRreFGzbLZb1VdCPw1BJTQh3sjeoimd7aTYczHR3aMS1qTTDwyhBY1B9ppifFz1iKFiKxVbDjJ6q3BSAfhZR1",
  "key23": "5TT9TLGhv1QHewJKD7J43YoHcP23a1h6uX2ANbWuAeiunemrFfexffkeDGyie74CJmgozRrqpZ7zCbniQ1dv4UYL",
  "key24": "3Gr9HQYGW1u2eJt4Qj3r8FgBNyzoC3VoyS4EAca2YW6KPKGtVBPPgxhHSQgQSP2vVvKXgu7DpfGDxwn5qJx74o3",
  "key25": "35uvuLrqaVbn7XTCFgiic3ka6y7nJ3MnyhKUqFYb31akbF3KRWRKWv9Mr8dUDZNbMV9yjXa24moyBcTL6v9sNqyG",
  "key26": "2XiauaBmFsMuWUpgv1sZ2QujZTi4rCAQeouxyhEeXFWZczgvtCwYzq3TVYbdBVoZfnqZunxMhTk7KuWMHh8HU6qa",
  "key27": "5LK4vbTRmjPzPxMnbWxMVuGqoKwkBjbqVJa7mSbgtphpzRz8j9NsBvoZTiw7G8e8aNUQzAv2gDZMvE5xsk6EUHCd",
  "key28": "3CxWvZVfZK4AeURudjcE5KCi9yAEKeNCSeqwUvg5hPxeJXAsaeDd8wjpzUot6wmb5bRLYBeWi4GnvbfPZasD3NHa",
  "key29": "2vxVhC6YsKJVDmy8wjZoytq6xB1BrJCZu1iMVoDj6t9vukFtBZ22Q2dTb74LDzKmSyoDhjE5S5BcH8tZwaHhvLVY",
  "key30": "233u7GFL1knHpbuXpn2v2tEssqRkvgGqCH9dsMKoiDLog8kk66nNPqLCkkNxwFTwpTZbTr4TAzeUtZLGzcFpscF1",
  "key31": "3LCJqhnDAHB3CFhui2KS1FR9n9PsfpPkryHzTkYcK69eTxpyWTWTHsMs9Tsm7Usdnj1ktVhgHEGpn2iDs9P5qHWC",
  "key32": "3NgH5hJCpSYYcfqgvfZvgoCQAehRAzEqNGBehMvrNwiMHb8dhobSjV9twYTRXZ1xfJhobUB6yZiVyCqASZWum3ay",
  "key33": "2B7NCZ1mLqU36g6gBM46bdbDLzMG1oB81n8ffhqsQLqusQ8VLdpV6LujeEbocCT5uRYXVoaHiqnngWzmDRghYk1t",
  "key34": "2qgvoJSXyYKageWgAPxBZTXa7P2TAzGjcZ5vRvJDQ8H56trfvnCrjxdNjRM9FKCGMuGCJRt7jq11jRVQ8yaHfmw"
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
