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
    "2b8TujLBJAQFUXjsEkuqMpZ9DE5yPkrKBmunP75zys9KAtrF2wrUKHdYhykwnUThQY6Sc9ppzwsWP4ZDKWveKBq6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c5scSHktyDh7ek4Y6qQn6mKgXebrvAsgsWCR4Gy6RmoXNYdrUDZp5qTq1Z7825obgJte6m71TidqDUdLu8huLw3",
  "key1": "4z1yH9kfgyeDb8REu3etDqCEt3ggKGYkaDQUX4V8adSeNyDV1tSe1F44Wgv4AExnv7itPKGtLGYk2RWBYfRhKYA3",
  "key2": "4mnHTYTf8zu4zdSWKQVwb7vGpYKRuE1MmPPsdHHRFaQKs8ohamtdC45hP8n968L8NfeVo4g74zcTLqYHTb6AV7r2",
  "key3": "4RiNj6pELi5YzS6FwLaFFiyiTmaP5hZ81qDYRVpmuBgHpcu6AzKLmHbJdopGu2rSfybZXu8iSDD4JeJJM1pNb177",
  "key4": "23t3qJmEtWNQqNMgSapgWSPXii8JQKcLGihbTx1JA1t6yF93sgeLNWYqVp269aJ6WRgkJg93BsJKP8x59GGQm9gJ",
  "key5": "5zJRMDh7aheA9n68f7DfjVtdQ4gaiSQPi1cWDYwvNqqJyN6zKAQiLZGeZZN7C2PaQn7B62GM1t9HbNzBP1xUnUuE",
  "key6": "4xwnAFXn5rvP7hyjbFePdxYs3NFPHWgLYMu5hkUC56yPeX5ZWAQGsXg2ruFY62NfD3MTNy3kXFTJqURv5HoL1PwA",
  "key7": "4jN7mUpdqspTG8khcwBUZE4wMEisvxkbWNAGh5wdg8hQVhmrtboM9nrEqHA3te8FL4Z4AqFpW8wBt4h7ttCEF5gw",
  "key8": "5DkqsmDgHxjR1SxPrT59aWYBHZFMZgFHro4g6Ep5epQjrhQV1kozuLiXEMDA8aaHoaVspmccqiRchrR7xLEJLM2E",
  "key9": "3LikzwW5iW7ztNGHTq1kAxssgY5foyf3mzNGRRB3PKKMAcaqyQqY28tmm7L9ursAU25X8JCGHQ6z2XPYKVa8etWZ",
  "key10": "5tGrxVHFnsgLzv4VQEVuoh88pJiBsCLbjv3JU7y7WJqSvqHLzTJimwM1C3yhpGCr7Qn665q2oN9zzmfR2AwnPcxf",
  "key11": "2Yn6kZ5AeJ6xJXUeEQ3txNPL1vRsBPSRkCmUF8qqg7PD2SpPh8Dg1YmKGUF8C5vuiw7TJQypcWqfi687FW3biwvr",
  "key12": "4PoDTMY6XLLRAQQtsNLXpbX37wpJ5Hj9HNucUjGeKct6ngAGVTHmthvHZiMRY4ReafBgAQQ4jjXof5MfEZNYf6Y5",
  "key13": "5dAifY2GBsyapT9EJMSY2xpn9NpxBETYLTPQuH4UjMwswPM6UQNhQxzT3BxRx23poJfvNMtv1NsH6dx8eihpUPvT",
  "key14": "5Cb19TcPa8y4DdiLNE3LXQUy5yNZXugQukxwaFGia9Ff6KFcNYyLrq8n5EJT4Ab9dHNKjAtRT1usHSMbnJF4RzZp",
  "key15": "4ezJaZrPYDDDX6hqrpurCKYQoVxbzTZiatKCLsKk3nJEY8pjusEEhhJtfDpkpJmdstVdGjz5ULt6CTvzBkT9NreV",
  "key16": "2u9NwsYeoXZDxZAC3ViN5UGfsYZhkKL4qxTM1EPSpnMkMv8DzT4cn6MbaKz6chXN92z3sLWYPZcnG5bz1sHE3abR",
  "key17": "uDx43d5dhnpuDvYxKarecxoaDWwrMJbXtKR8rro5U9hkKR1TvUDk2MzT1PpTdVY3soLZNwd5y8Y8esUkVSuDA39",
  "key18": "55nHJgsBH8N1D3u2wS1KmwMkuLptcYxaFeEtdyyZsCrzTsKvQtwjB3CESLiK24h1xgpFeJadY9r1u6L1xBsDyxuX",
  "key19": "2cFm4frJfbRXpX2cP3r8sbkSU7YNcN2fAyEq4DVw4XeP6VzjzevwP8xhoWbPtGRjdkduTiukt45iSxsVbrVBkad5",
  "key20": "5xKrG83Z5pBWUP1yGhypddvUzxn3HdM1cwopHQPKt6fYzGYUKMcLq1n1tNtKGtmWcJDCEVwjafvvseQyx5nfpsYN",
  "key21": "5s1DGyZACyNWgCekPNrDovKkwrECiy3nzQ4dPTnQE2o9HtunPz8LkrjtqkKs14stY5uRMuMFpFtQAKrdwLt4GfpN",
  "key22": "2zLycaeux8XiGxee8JtGAyWXuZ2f2keGKVwzdtjfv4bRffzpUhHRKv2GpkSNus1Wa6SqiFafC1kmCDBoF9eePpFT",
  "key23": "4Tqz8AT7ToSjDqiSMYxw9Ct35KiBbksqLMCbzDamsHrL6LJCoYkrAAsmSTUH5UCXsQfDFJTefyNq64o2YY5BfpYb",
  "key24": "e7kH4tfFrSnbaruGA8pdHsFocezYxbFWKujUD84BGy7P57ET8CjykEQCaNNA8zAdwuabiWMs2rHswuiyL1GJTaW",
  "key25": "4Zb5yfXEm8vYqmNXdnutEACVYakKmaDMQKmz3HLAE9EV1Mptc1grEXuANfoPVt7Dyxa6MLnLDTzZSBEx7gBt1o5h",
  "key26": "4NbQPi5shEen9dYXyv9qpfS61bDvBZBEpTS6L5v2QjqamGRyCvWCW8v3XCCchHJ31HFPwceoYNsEbGkCQzMgKXbM",
  "key27": "5riQzvSMe79MFQ6XWk3qo7hY34wy1f2ZXtxV575iKgR6a7gV42jtAYtexgySegWoP82qNRENkeshr6112NyadaTB",
  "key28": "5fyAsGJqVUQeUM1ghgLYrRF4SfyXMYaYffnwJ1CqkQzJPmpX4B7wpbHhrXUNm1JRbNinsNxwkPL4xUyEddDCgWtP",
  "key29": "27Znxb6zQ1BfbtyZy7QZR9faGmRFUQYYJUnhSoZ7QWiX9zWser4RpENxAxdMn8GhKpJq5qx7FMh9VEEv655tcZMK",
  "key30": "2NHscq5151DygnJHUV5jXBPQcHniBox6CPnAggLyJ9yigFSGnDQsVSY17MnCbrG2j8NnAJwwhf1DVN2WV6NLqfXs",
  "key31": "2nZ6ghL2c2nEJaAgW9vdCVjX2Jw1SLLmLp973oYe7yW13rUtGoaJwij99rdNrpeKfvygjLHUnSaouebWkXd8qPc5",
  "key32": "4NGFF7jibjureWHiKCgEmMVxfmjDYKsJM37FAZhQEzxs1jPeNy23FSRVREvghsY8TCdP9YehUyXddWC21doXzYuh",
  "key33": "tk89haKN876XFiTKZshriYg2cZY4Kzk3aVFtKNNxMRewbv4iP9vecEpsPGn3RC3pwnHHQed746c3hrQzgWU8Wok",
  "key34": "5BfCXkBuMY7Sr26CR9JDQ6F31MC5o77iHPeTbh4tUKH8xieoxmuL42wznBtsrz277x15hmhoSmCZdsRto1etSc8w",
  "key35": "AuVcigUfAgC2oVBAoeAuewXgsFFciQRGy33SD8XBRK8pTH3sUqEDKLGtcGb1At8vG1RS5HHN5NfW7Esej2CXUxa",
  "key36": "1Ayvaq6hcycJb5GLVhMX8p8Fnsk6MZFtgTdq4kUNeDzsRRWrzGWrC9n9wrhhAuf5Y38EUrk8fKMgWq8ASYvpSPN",
  "key37": "BvvxzARcveWKkDu3j6MTPGye6tPnbqqCZycTcg9aBG5Fcf8nihuJXpMMTPXLBvZjeMQD8Vh7htcEzVVU4rAzcG5",
  "key38": "jS4yGimBp3J8FLcKXxjodFmap9CUvDekTmMJwLBUNQ7xcuoyNpM3oAjpsr4bYiMkHDyCZRiBCrp9AWmSgLjx3L3",
  "key39": "3RvqBE3u5bJg5ARAJnBjkju5ad9ARF5jfU9q2i2KFtV1XYiyoHGxNp2VchnhoVhmvY6wLqSD8gmx1npkFBuqmPVi",
  "key40": "5UTFLEqFSyKyArQurYHRNdS6YPrmyiDSWn9GAKTaiKEW19SYysEi1UAr7UshDH6XdCwYAWnbXUygAP2neumS7Aoo",
  "key41": "2y1sc16gEPdRy5yvtLzKt2iQdks6gXbpq4CwYtAFL528kQwbhyStevGKD9BhmnhyZemiBPXG86tS4GvoKnf7UjiC",
  "key42": "3rf2c6Fc8oAWxYKSsKS3ht2795ig2YjPQRKBRtYB645RhZuTXET7BewxbMpLvaoGNSxTSr6vTGaYsG9xhuLFDZq5",
  "key43": "2vU8muf3oK1yZwMdAzD3YbHsBDgbkVduEDYPgpAwUVZpA8NTgSo4LwHjJyQHB9jXNJuDatwbz73uKM5JzXTj13Qn",
  "key44": "ksxMC76L8dGMwQ7a5yDn9rp1bsohSyVTLDwA1yeMEBumZNkhQ4A8oDV8UK3cgYo78fQ2X91mdHbBsFrYykVS8Lo"
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
