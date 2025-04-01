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
    "Pt1uWueZ8DMso4m1SfLhLbLvrj9bQfU17yhWC1c8UPhbqEXzaxrTRD97MJiVrpXEgGrBVSU8PFHYtuCgVwynUsv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sDBqYRcQPXPKZTg9HcH937eS5GaLfFvREmt3dHAFcneB1m4mZjKt5dXb95zu6Tzra5ZZ8ANTdb6iMvRy1UnjnXS",
  "key1": "2bYYWe8FjMBPzieCyWsKLBY3w8gUzzUpbBqf4QcEV8aNwF7yPCswP3Hi57qG6RYXyE7BhMpkY5ZybB5x8TZmbh8e",
  "key2": "28me1wHJxVAc3sYzt8Eo8ziHpa4TSoYzgckh3CtZBfh7DdzULGQaNaBUD8PhXix5j9aeWXe2LC94bxiC5FriXoZz",
  "key3": "2pqjt7vXUfPHKz1A8poQbkMkZHEpKPimGepnCt8qsQyKhGKxokjZKoKv6YgTUGevh5MCdQVJM8PuSG8ht728jQS8",
  "key4": "3Qhopk3DJkNU34wTPg37xBJfEkuzSmjeqZBasCDLfo6pWFYCumdqTLXGMEPNgcU3P5P68RuXw4MzigE89zsSsRPU",
  "key5": "2RqbJn7X4wca93kxv2shqeZJ83kcPeXkYt7QxQA26NUwp6EXEEgvkFJMR6rCiaNHPpXMdkTxSc8mupr9x2DFtPUE",
  "key6": "5hUUgeFbdnaBQhqJpXdqc4um2H83YzML1472XgDn6bWvBEav61Nmveaqnu4216cSYgHSDZN39oG1J4wxmE1fwt1Z",
  "key7": "2rsSTkBsKEcwA64tEvPyhdVMn8oCqf5WvGBc1x8jxaLzApEQNJuu9xFViwDU3zqyfZYzsNarU6eiZka7MDwMYJZV",
  "key8": "5b7CAk2Gbu8bQPDqszttnXqHzBA8XW6NjV1r2DSAs6Rc5BtshL89Px7vc7m35iBhjgYLhgKvSxm78MVv1oqys64s",
  "key9": "2jKjVtvmSUeoAM5HH3UigvVajwyZJiAUMgqkojWDDkURVbSXZH3q7KJGPjDhFZzMrpkuoZcA85PVthcnJLM5u2v5",
  "key10": "2KDPhGu9f2b4AMsy1udH3V6XfwaUxSDs971q83QHvpDdiLNFzXxkTCBLbqWHcn8juXx6xKjrMgaSFqpDEWgcj2v9",
  "key11": "2a3J62dALP7s3vCGtKWWMVDYPT1bcnj17AzYffW3y3tZKXbWP9bgzPYmsTNctZjytaeFhLpzH3bCZ8VY8Fuy4xLi",
  "key12": "w5t9G6hpfBsDyzMnnx5XXYsv5d35qesJryMt25NoTWKuk4Db78hBknzK9tp9xMR8Lquh7UeeCRsFosypFZRHcqF",
  "key13": "21JtVyUNbbwjKcG3sqdEqvHvqDaiw4xUdUUVgteuQcE5X5WqzfgKah1zZ5pCBzu4CDxD9CVVmWteMf8nHqryjRCs",
  "key14": "2JNeUxsZHXz7M2BxkBiRji6LXxinQ1LQhnGYfCA1ucGhfTJvgv4STSxW3ApE7eYNnRxiHu1BaSEP8VNaEgF7sUsC",
  "key15": "3KEkD8EaySUGTBHMgrJbEryFPjb2ywTk36B8JrjNAFGsg1btXgNcha3yTCH6FJG7bWUMAiT7R8JMKcC6793khVRg",
  "key16": "3ydEcqrueWcUgJpSSbrYseoT5w8NzJ72HYVhXM31XPdiG3esHonc7tpca7tdRrEjABzY5gWybLWqkh5BT5LRqeNb",
  "key17": "54LbeLSdw1pGGavWL37B6uhrVnZVyAh41GiFKmf9K7r1Ebz7zaFx3Hct8AsFk6C5tHUVd775GtYTLApU8TqHS3mp",
  "key18": "bXdrU8iJ6on4p62JSfVgAzCqA3bYaXZkLsW9jssJUFm8cb8sixM8PLLtehXuXHUTwSTmyg73icaPgYvshtqvL5T",
  "key19": "Hi5EEHWLZ6MFBjnaVjj3T2gpiChBoQsiXm1jVWmvqBe66NrshrduukrzJCZdnSovnoEttxYunAf4QnudYgohVoR",
  "key20": "5ik5cPmmErTdTPxH2jZtvMqA7eHtVtH7NmYErAFH2bVqzRYQdx7TcwUb5jrTTND3qZVoKM6VFikhrcQBsJgbf5K9",
  "key21": "51zhv9xUKBZCSvFYVwXn2Gdqa1eeaGMGZA9V4xpfJtj8q7x8TpNGFWehJRi3NG9jMmrac33uDKi727L8U8Pesdii",
  "key22": "Bc5YwvCBpCb5RmttjoxgWzeYV1jTRF5TzuAW3cJyDXM9aAZsUfFE7MoRCcH196u3LSnxfFm8MRkZj1Wf7T1d3Tw",
  "key23": "4myzfhqnc4Strv8VvNPT8BkBLoYmbw4hQgg6QRoZgzhGqJfVnL6yESbLntrPt6tvMMHSbqguDEdsgzMgztYGQxuw",
  "key24": "5aDkYLiXmaczrc7VRvDNvjPtg4etWQysYAU6FhURxGESpnrTHnH5XbKgU8RMJtyfeFbuFhBddvY7KHXm9drCgdRW",
  "key25": "hvPbZhNN1xEiNzrsbukAUiRD9XkEdUjyUa8c2dfLGbCMYheDuV49FXqJRJhhD6Hpmh45xhKtHoZ8ek6krRDqV9i",
  "key26": "3szKwChNQpxchD6Cb5fT5PrDv4pkrLJV84JoGAR2KPPsrjL4FtgApdqCzrwYFYhF8hrhtd18vNzvuy8r6RX3zcTn",
  "key27": "3k4MkJS3nPFRbYShgzQ1cANtSkt5JSALEXvRFwPXMc4A4E5y29LiZFw7Bt5UKMzKDgfCrNpQBtvDHxpGjQ2zjuU7",
  "key28": "5gMYABPTw9cgoBTCtRFSQaKSrTKkSRcncLVvhKxEBQ8BbEBfEmkkL3k5ugCxDPXqAnFF1kL3RDmYM32QythoKcSg",
  "key29": "5TQ2KsgnJi2U3c1qWvY54wvZND1yASZJTvMpQ1YY94ouGDhqSKz4BP8tUsUGYgp3K41cqU427LzArZ1wE7pwNn1U",
  "key30": "2ZLEEva1DxSpEcdwyKYbtZn5JcVmhVeuVnoQqwBRGmq5QLAxmwgjBr9HixLGedXLBzSi5vAHUeYwjxKbjsjJwnu8",
  "key31": "3DVmXggLf6Z7ytEDrU7bhinF6J1JqigYGZfyAVCtYmimKdR5GRNV4rHJwgc24apPd7Yxt7D87VXnRXbr8EH9yPdz",
  "key32": "4LJ9DJ6HBZxivefxoAJQchVvwyRPPJakoVSEsehwUi9bvQT48esDRA1sTq9hNEVRh1wnULVMnoaozoFmqSJmEjf5",
  "key33": "4umHbbtAMZUoKhRsEf3DwU2EGsTedwM6JWkdHfEydkva9zRnT29KXR9F3oF3gPxSVg7cFTpwusoCg7UYmUt2tBzD",
  "key34": "4ZTUM2aGKer5PgvM4kVxPo8mFydk1mxFFNWa1sfhPhfhirfMKWYGxpMrbysRKKwV1rHV87WF9oRoEhmQNqG4MoUo",
  "key35": "UMRSw2mAKUeMVocMdtkVPzoG4LRAqiyPpPuaaotwgYCaskyVLcxZ9N8JheQnbrdpQ3Sb8c8E2osssiC9Pm8d2ar",
  "key36": "L3FF9u9cke1rgM8c4dcVU2no12pUGxWFMXsmRESB4hdQhh1WWYPVUzv4JQzidmQZQNW6ZpNiN1HrBkvcYeQwn62",
  "key37": "rKxPdxPNDjPgx9jdU1SSLbsNEmUoa79aCAjgH4bvE4pSUiuS6VNeY2ZZhFoi6QNovYmZaHxP51am5C3GgTZFXQz",
  "key38": "RXmUGPMUTGj9X1FuQy5VYSaH8MWiAA8YGhnPXAri84jJBeVUuYxxqQnxhPyshKXiFnb3oMiCqVrjSM8eCggRLFq",
  "key39": "3WNyKyFL1vyax2RJxFN31XFePuDS275k9NSg8p2kUUw5t1MGZkC5arMZVS9CBS3zsuFdE6gVzraA7d31CMgEcfqH"
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
