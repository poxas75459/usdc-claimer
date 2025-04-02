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
    "9A2M21U41xtMh2aeGtbMuEXTfEZgSUqFZsV6VBj85rzG3bMcx6yyzoL3Hb957wtLhpzWRgNpd2A5zyoi5BvbJox"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vveiaeZVpqmWTSq7sraU6WZxvW3XHjzP9PvtCEFYhfqjfQXpETVfFoa8TbqRrw1JzEX8nprAz5ndnUawwCJsdZY",
  "key1": "25RmvCF3UvbcH331CFJuDeFYTKY1hKNaUnofXHwhYJ3PpzBTZvDuJ5VwR5hjtZFcf2sbUPfYMQcs5owBbzyFovQD",
  "key2": "9i3RvmbdWbSrKuyd5V9Bh8kNAnG1wF3LAJCqu5x1Zpc4a5HD78bqmJLzxTr8ZqqpKpYRZGdHjPwUgnDq3jFLzhV",
  "key3": "66yBE9dKaCbC9BMnLoQzdqLczbtfHTcSRL8xc3ipgaEVhWZC1SQUmyXKErPgD6AiPowC6g2rWtg4qHMus6x8SxXL",
  "key4": "5nbTR6JsQ18mSgrCKXHxvXCirP7VXpC7jgCXwZfFi9MnWAGjZaD7ewXEB69BaAH8dGL9DtesbWxQ1HzrU7Ktcg1L",
  "key5": "LyZcRmcHAXCLdXDJ2iVnYcq4Yoc6VNhjqDCMw45akH5X5VFFdFcvas8MgNpKQNweKSRmMXrVjPz8bBr65H9PWUB",
  "key6": "CJkF5EP64fBi3gJK5SC6mGRkZtQ3vS7fBK6NcvFN8eoHMePtRYg1YJ16qrQKVeD7LvbZwetoBkt1RZ6chfRymBR",
  "key7": "5SDH9C9mKe7E7bqtqBWGLFnuQbqHRkVWFS7apeV6JU69BuD41uGgZR8gLjT7rjSQGG7Q2HDh1W42hrr1ZxqTisbg",
  "key8": "5yuZ5QHAR7GKaGC5F7Kg9VgzB1puqak4Y3DGJ2nxGT2Jic3Ei4VYD4rpHLKtEW7rNF3Ricx7tCp1jn5KDHGYLqqN",
  "key9": "4X3suJkJuUzRhj5icjUMeB3s7xy4EiMY4TkLVpsUVdNuNkRQWEABvLdiewd2WUKTh3rrSKDHYFEp9ZbKFUi6QBB9",
  "key10": "2KtVzEjuA2FTKn5q61944Hs8Cs6LXomLRRqewuhFtXHseKH6xcH7mzKhaDzVxeVzG8ftfX2tgfo7MbfkyiuaqTgR",
  "key11": "HBa7HYMopWW3q2n5yFEdHszsKmQZUFf2HjpFCsQxGZtB7qJNRZrB83zwjdtx9FmdHi34t1aDBad11Rcimy5dpi2",
  "key12": "3VGXvS9drU7zSTMqA62j5ytNAJyzr9RM5HXH4AWMXshCtEBMdg1C3n65bELKx8wMooPsvpep3gaHRn69ZvNPpqcV",
  "key13": "CCxEtFoGYK5WDmVCbccnYcTwGhRP9NDnJAya3q4HiKCoEnCAs2V9Q5PxpB3LPKYVPpRf5vqZTLion3KKWB4Rmm7",
  "key14": "3fAszwuWZcVp4VE6LEDJt8kWhDNC3W6a227NBCCop1R7hfbQgPm5hjQ5NysWYvMzfQ9qo1Fm7svKk7s4kZhDs1cy",
  "key15": "3snSeJrfMUwgJaeNcpKdLktAaNy3WDpo32n6YxB8Kzo3Ln3er5nSoB6p4HPwyyWH4Q5iHHHdopWBvZFNwnMx5rxw",
  "key16": "2ZCyZJDeR4HLmxpg65h2ENDD8dSJTQHpZUc9pkcgWsYsEj1dDFpnnRFueBMiUTyc6VspR9R6ZDURiuGgDNbL5nEh",
  "key17": "45BJ7r8gEfxs4K9HVC5miyzZpHMtK91JRVm7EnbokxiCgPkfWgGhQpEqwMfG9GA5BUHNYLoorTutdkzM7izT49Hj",
  "key18": "5CbmAUMNa5ipFpkdHhHs6smy6Ys6D1iUfCTRwp9pkfMMVttMTBJsJPQMdQdUdFnVcSUCLyt4FXKcsHZ4PqYRAHPb",
  "key19": "2JYyZjzzYiTRvUy16CZdtDyaBmekhwNro76odjvGdLTcMYpQpsbCTQEium4GdmskMhrsWS5uLMSU3dqd6kQfrTRn",
  "key20": "2o7fUpws2r4xbfauabGjUfkVm71BVeHeCEF8aFfnjY3f2RAwWRc8w141iAjJUK5TwdosKnmUcFVbsR8rt4tQK8f1",
  "key21": "2KeNF3DRKQK87EbaKyyEa3mRJALWRCrrkvZX11bo2NYwWtXEi67ECTnjE2k79g4qJcNKT73wRYpioyNADwCjvotK",
  "key22": "5zX3uUUt3Qe1DUcfZhpQhRM4AR7gtHWHMvuXmRqKbn553RP3rjvmi7YyG5TEctjieDg2xfCJyUuMvyBmdktL775f",
  "key23": "2TksZamHUyw2jadyJWomgMwtEVXkWqTFSzjNS7HfgnGuvQbq99Cwz2V7SuBzbundkYVcLqxhbhyU9wNhbRcsVTM1",
  "key24": "qzZjH9aCvSEKFSRHMufdky1F5nJc38buNo8PF6FZPfex5TAGQPbMrdQAc3p3kYbrN7KhhSBQsCAETd1rfDgKGAB",
  "key25": "3bYyvTDutZr4BRTefE6bhVz22wrzdcrfueFj2Bprs2kTL5ntrwep64qyXerz9ccnd1eGxL7gC3Ru4rQ5CMR5X1ww",
  "key26": "5yjTUYX68JGKMMB81zw68GuAqUhk1gZrjm73XxpLFzWHfSRkiLt6tL4RkVJNc3s9XdXbvgq6DoFnfh4LGsHiwRhv",
  "key27": "4UvizoBD3Q4DTriZZHqmfTgpaxTgmGWWDDsRCwQ2bjEMLT1sLhn7ktz1Hk1oR9bwrYSAM4QTHuJwbEzQEBAXB5iG",
  "key28": "2c6onm5jr5jcvCkqaP7L8bbE8bm1pPT5nDrwG8zBRk1c5p3N7iWTDNs57AQNFm779nQ1ZrcSYQ7rAw5SsBcFzU9y",
  "key29": "5cKN3dHGx6i2XdfKngjpYEfHC2JXk3dbQj99qp21M4pgM2MF7egMcDgpuUr6Uj13w7kMzYn3WU6QXJgHXBs2JKwA",
  "key30": "2d4ZSQAJcZnQnnz5WMxUH1esqS1sQHqtBehoTZH5m7ui2Fx8i6pCQnSkpPzmkSCBkz8tBSYWKnfazvRGMHSsmJzY",
  "key31": "iiuc3mpE5VnCQoZjc3Jeby6yTkc61pbgxVyZr98JXjcQmcjAE7t1hu9PsxtBK75F24ZZ65yr6mTy6TvU3GkUWtm",
  "key32": "5nUPwaCy9eXDT6qoa6bqSnTA2EJATdCrKWp7Ac3zXGGUWuKSH4yEUccngayphwQEyYiSvxrq2DMGNRW9eGenueZu",
  "key33": "mj1i5uS9psDj2dRvjSCQqpXnYGfL2oEKneySGJayUzW8NB2oDZC8V2FKkaBsviG1Rfj3aBEgqh8JobeKboBRgMT",
  "key34": "3cQpx43pSUFv3wMnv3QN2z28EvAonKHDZXLoTq3kuRcRoRmT9eZE7xZQDvEo3SaCB9gvHpCvZMmvsmzkv7tHNyTM",
  "key35": "4cKJTmRje2EBeGJKbYYWefZHcuSXcbS7QLjbZabgTa2jg6WbkX8k27w4ShcLaeGAcyYNjhD1mW3i4LcZjwpdYVcd",
  "key36": "4pqNUJ9Lhp96zprnVreLeWQJcYixL7dTGsj9FxdCzdJ7nG4kzyazD8iBD6VoeVP7s1sQob2x6nGAc2Rfn5njFkqb",
  "key37": "62kF1ZcWwDdJ9ErExNfszsTKHYNNvwCFBYhPMoVKCawHNUth41bh9uTZy9ET8MZugQeLt8hPR9N5Vz3i48toTRys",
  "key38": "38cwGQ7dDYvwiVND5bYVuSzpNt94XncbTSvxBrV2rGfJTbDb9PqZsQNrN9CoktUhUoRMNPkB1xTMh8u7xfJVWQPt",
  "key39": "3XKP3SNuQiR4RB9MeCE1HsfaToQduq9T8ayvTtFnxVqUfmCLzoRbGVH9xspopUNrLbsFwbmN16sueepaVynavYfe",
  "key40": "ESBcWZ1qem6NHnBTR4E5C2p5UAKhb5ZGjdv5C6dL7P9mDDHuWJZdvTmXZY4UtyjeAaYzxfofiNBCwPEvSSWBsgQ",
  "key41": "4ky7xH5zizPxrXzJvnwmNpGHdfE5xRiWEw8LyBgWkkGsHFgAKPHqVweEynyA96ouuuWErYu6AHmE94HtX7TbTvPH",
  "key42": "2bzdxqBH98yKjc6L8XqjgC3n4pqmdmVnCbNuimg3wNoec97iVLTmgoraVors2BRNCrkQBMMUYi1s4VhnGCux1f58",
  "key43": "2vHMTWGvgvLgVm4okbQZ7YpjTFKJWpXXQ3hRvN7NVgrZ1cnLJZTZ2oLvekxzyreY9sCufZ27HcP3L3EFAn1EUEmD",
  "key44": "ebtFq8fYr8idJBKN52jP4ZRja74vqELmBxPAwiP942moDy9ovLcgaXVg4G1G92m1mfkYVuxbPf3JrZafV9vMn51",
  "key45": "5iF3Lq4azGAWKNBvRp3wHVW8VxXdSmc7MrbumAC9LbQSAjxdUQLyPj6xN13b1M9X1BVUUikd65nbAe9UCZ7MKdtK"
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
