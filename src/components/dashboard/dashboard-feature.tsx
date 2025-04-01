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
    "4CCBAVkKdgw8Xg6k824D4ayLw6KFhWN4Aca7F2BcUwixTuJtxAFHkP5fqteiGVgoshHF47zaRgEd1sgqgBJQsPnw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZqXzGzFyhfq89kCqgAndRa6s31mDQmYYPYfUSy7XaqG1rn19ssZj8UxKmMBq8fVsg1XYfgnhuj9goatca9VujC9",
  "key1": "3FqopJEk9zksS9pWr8HfJiXMuaBSUTk1fvKFeMT463CFDvNmM5gChXyQxWTPtet6byE7JQp7qqiiDucQWgwiF6Wz",
  "key2": "2D5C6UTRd8ExfakT3AZhMXVLJ4q7Cofq7yMFnfRaTYLsAaFFkdcExYBs3PheQxysc2CqqiooZQJxmMqRvrwXHT26",
  "key3": "2xwPcmCrrNbGLjwafor85jG5QrU3BErBJAfSYcDGwZXwsSKCym2hwrdMVeG9nRTXVAKMwFbEo7PQ3t8WsZWTFyfM",
  "key4": "2Tddr2Kpy1rSL4yLrvrH2nj9KnnQ2hdxW4E3Y5Z6AcRbHdsUTnQ51yinbMxgx1eGvTGewRMw3YrKSWU51rYoarTC",
  "key5": "3wBcHo1vKKToYi1gF2vhCGYkCBUSMqMDABy6uWZRPHRctjh2RuMjtfDqraGnPPhcTEJ2WpA5wkJpozaJCNX6uBwo",
  "key6": "3KzHR2qJTG7eDsm2HUc1wPe3qhZkqqW4CEouNE6NXg16ThbmXrEx1kFTBxLi4t6ivZn635Tg9CMjEpajD1kLtt2G",
  "key7": "sbw8MrmRNHTmPo4FRPenpYMYVLx9Qs7nrkGHgCrbn3VCezFWrkEUtBA9hZPy8MgLA367DDMBLHFn82FuBRa6RQH",
  "key8": "3p3SihfeuJmMPJFwEJotzitqzFz3rFHBfUgDiPVCK33SJBgKvKWHCXaCgX8juaz2QNDwq5HCUpKghgtYDLPZRvjf",
  "key9": "3egvDGbvfpHq5WJHF7P4EptShHdpFJFn5jj94HGGcQCK8PF5N4ZD8kYVMgW53QNC5geT8VskNg14KH8JafWNJ9jX",
  "key10": "2nfyBbVRadQKJ2dsoPfuvbdtt8NUKUSxWQJSkphHfwa4sjpWgRoQeZNCX6hYmgg4wGE5kDYa2ef8NKmw7S5yCUXV",
  "key11": "4C2QeKDCQosMiGmbbViHbRC6PtaympBGFrd3d9xoCwPxW1wJRZvmqTX4jee7voxA1he23fFbkPEKV5BUUWfMmK83",
  "key12": "2yrp1FHUcBhYupDk17atRZesVREWoSmSFdJi58AajNWah3WAfujKHPxMVdHsSQGehARmsBXu1xdsjirELetHVP93",
  "key13": "4ksc91gad1SnL52v6suyXofFqj5bWRDDPPsNKAohPpWpQXpGAnswPrdaV4fWvPnVaTKBBHQ2u1ZHHMAnNWoHd96",
  "key14": "3AGVCHw7LWSQ1siRfN6jK1VpiDHhvUHrbb8VfEeVNRi4BkZCURr6VniXzo6tUMWaaPcZrD4ef1zxjHL512ap1FQJ",
  "key15": "2dwEb49XQpxhN7ctZk8QZCpYjs7S2z6GT8r6AvM4AYhktQimB9ZLqJpjYJQkGpbhyahwjbsbqmvgrTHDXApDa4AC",
  "key16": "NeuEucwMKUR7ZQGDf4ebSwiKSLxCMZkFe5UkaWygBj5nekiMA64vsnZQXzsqs9NGyxCMErMnDvky9cG83jVnNpK",
  "key17": "3b35ZaxNs3J1qGYUNWMhFBHFbBmSNgNKNUQH52AVpRVrdZNPp9mccBwRb8xKDF7CPk2hMoZnrjSHduM51ErJd62e",
  "key18": "5GVEjUf4PzCqu6sEwjJB4Mv3Wk2gwWsRrVcTHTpm8h6GCRLMQLSoMM5CNaobHspWmujgPAg7vgXLtBxRT8aKGVU6",
  "key19": "3VkBMtTMab19N9g8Muby9PGbJ2wFFBc4PRCd87DfoAuQM1tF7gC76eAYm4Ahf3Vh5mo7PsXCzvLVfKyQnif8UgQB",
  "key20": "23knynQNnkBpXNkzGJKYV3ixE8fxRseWYzZhoiiNzgR6ehc5EvmWfYq2Hzxh4JwhdCPUyayFTCeR3K3fuU1KZXMW",
  "key21": "JjkXT1nVMHAbyS8HoN6eisATa5xaAxBDtpn1hLvkf7hEUs5MR8mbxxPhxwvTXGt3MP5nJCQUNCamaQz1yED2BAf",
  "key22": "2f8MM1qicqhuveEQDbSoYUHrXwkbasNL4qhs2vbhsnqqk9XfKwjFUzrcqQcWM588vRmn4Ekvd7tikmw4FGPDMHw4",
  "key23": "3sHUceNNpb1gVJHcAA4BtQukqazgv3t6MLYtkHLZYizL1mcwDxQ48o1DihLPHApdYDeXH91AQX461ePrwybW43jK",
  "key24": "2pv3Z9Chi3rkugoacxGjEvPsmqAempoJFqhhrxPabZ6v5Gde6tJA2Xc9QE4izYRvhy8LH7z1hbB8YB2zNUhYBYr9",
  "key25": "soxXGhAGC5eULbSfkjdrcE1K8RS51wutvQ2JbB2cdZJGgFZVDAuaVixDSche5VfRYbfXQ1vfvs8vSFLurCjGTuX",
  "key26": "3C3NkU7GLqRuJ4bHjD194TvDKkXp2sk4Tpy5BVhXq9irARtqT1G8ouqU8M6FzxTRUxMwaymMJ6vPeR6YS73uuu7U",
  "key27": "4t8rEi2HUSAUtCMmJJz3Mui4NUHa3iLGPazarZg4eR6SxhrGG9KF9r7xg97yFQaJG9ngYEfpczcQ5rcKffZPWDeZ",
  "key28": "EGpg9FAEgRdmi6MzuM5La8PzkQtPbWGzgWRJ2YpUiS2bqHxrRccZzU8ezD2iLm9ged7Sdgi6q1PzDTbGaUkSiwQ",
  "key29": "4XD86Twz4PgTwQxFwFZUcF5inGwxdvRRgbWVsecWXk6C1DEbEszfPjVjF5vKgWFgfL7ukjBhzXn1mE9HCgXCTR1A",
  "key30": "4LQPf3jbyaSLhCkvQrJ53Vc711NJe98V8Cepco7LDXQA9pMr6twxN7ytasqNzNTwLpXBatCEzDs2Hr9yzLQSgu5w",
  "key31": "41Ye7MWGTfdP4UP4b3wEqNoYtuBPJiMJUoU6Xh9AuQFUa23aTuiQWZrvnmPjsXjZRsKWnuxey9b2ZFEmdme6D92H",
  "key32": "33prcHucffPVQozi5QcdMT4i6bvaKV5HukMEeLFMRw3QQwyKaFSPJjq15trTo6KBU539X6Wf8wBaU8RMEoZucwWC",
  "key33": "4X82zHm2tvGf5g7CK6EAQSHiG5M3yCsqX6vtjqbrBv9X8sLKwBQa5mHytVCxKGAeCfAsVPyoi7rqxCpuCnip6ZTJ",
  "key34": "3BQAio3AGkvopW7HTEym6zJmPWZCV9dJCb7uNwE93UTWqX6jvpUtnpvFJXY6weoRVXqojxZaTzJWZFbYHDRur3CZ",
  "key35": "5CEwfj3GkcBuoryWp1oWF4Xyw6ZHMmcYGYAd6FEFgf2TDn95EYoZt1NHLg9x5TBgg7CEPkKttKD9bnxn4LQw4toF",
  "key36": "5iHoy4nRAUCY2GoLQnrhroirwMsoGnx5pg5EdRk6iFT3oDxqsb4KRHEQ1amx5uXz6h4XbC86WQksDKQNfY32zBx9"
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
