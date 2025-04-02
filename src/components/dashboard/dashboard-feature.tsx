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
    "4o4rUTcFRoY8voqvdRsoVs1zk9sWZZjjLaditWHks2wTRPKFL4e5iznenVYqVFr63Pd1SGru6gdpbcoDhCCpus9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46PmMVXdvjAcMGCkGGVq37e2NujykVJLQMLW8FBfGBMKEY6QgqhjtSbSRqFEeAtkpXJW3ScMPSxuWz12XYMrA5Ty",
  "key1": "3KiFNbcoFSkBDQVnjsvGPBctsL4h45zvdjCvo9WFrX4AAmpxxRuPJYTj5epDbBKBQ1Cn2fDkeXm1dGv1VRnDoZyX",
  "key2": "93G94XUwqVAFWhbffP9rvp1nqDKDjfz2ja5p7GBX6Msr86GtirDPwCemqdv1mmVmpGWskXgso3vDVefwwd9X7Jo",
  "key3": "3sYdYcNRUX8JyDVLy7opWqUpqasTBX51bwDAEeK2dAw6UiKREiFotcvum3zvjaLpEbxJmeBSeh7uBBqKmeknQgj2",
  "key4": "28JsWGpmRSMqdWGxjyFMG19Nw6Ncdk322yS3PSDPVkr217HdnLQmjA9U8jmtovr9xMcWbkr2sxw1yM1knJyCPmoB",
  "key5": "4ZkN12nQrnd55SPjeJArm66nBmbhbShNNj4mcipBa9baU6n24F99ACZVbbEzNQxWT6uBNsxu8yZheA7PchfJ8AWh",
  "key6": "21F8NWAt8NxZFcCqFcrkiVyvgMxHkJMDhYfB9tgeGNWFEjeobwNRwwhm6PqFWqpPtnTCoqAepbfR578QizrGdBBs",
  "key7": "34o1G3tJgFhnrTtFq1Xi39hdiLguv5AXvppRsUgDXC4uvqo1FAiz1mGpeLT65yfwja4zv2ExnbpYsh41j3wqEdQ3",
  "key8": "3KJmQYgKYj68NcW1kvXL6PM3kb8MgQHLc8fK79C5PjxR3PEBoicjj7zCXwnJ1xVRCuEoVNr2VaAM7CSpQUzmDSf8",
  "key9": "2sMjdZvVTZ6NLXvFXxf6KAbwnamNZZaF4XRvsdEm4Xd4g9du9kXkiyzX1cr7D8hyS9yUDvQ16a72EvGNvAe5PTFd",
  "key10": "3ikjqt9Nf5tdBKZB7F5FdztLEzqcEj36K8TgVM2kkLLwQyizJcuSqh8MBg7ZHyMVsnLtguqtPYU9yCR9aLEWwXn1",
  "key11": "2uUmgwE5UsCu6Ck5R8GmWD5NYQzCJRPdsWBPTJ4NYaUQZP5dFFYNaeSuaFBpC6wX4QaURiG66TY8RV1AyA6Qtwjy",
  "key12": "5kopxvzJvQbykmqYWGHGfSi67jAaVCKjtMWxiV9rbhMwnr5tGfQDSwf2fUTToLa7Zay8BhU8CeX3bddw2VqfBa4r",
  "key13": "4BLHbVQtUf9podHw1FJ9zmtB6WVop9qFWPwaoRaEHsqGaT2fMjANcgs1mMFKwLhcWwvckXVkGXjxLzR2zSEPPTvc",
  "key14": "HvutP82tTdU3Jwew6v73KJUWNgWEgjidpjJmhkqGUiZyuUv1VokYy95TpXYzRH6QkjKHv8yWVShDJmMQmzYSNYm",
  "key15": "45678Wx4dPUMWFgWgbMMpsUDUoDrjH1YKrBuUedHBAnwUdv3hqsMsZR9ddsnYzXxL6DFWr4bUVxFvX4Uk6xKJ9XE",
  "key16": "4Cg3WJzwWQPViN15nDVRF5CuUdAXEjBdc95Sj3fZZirpYELbDGHxjYsnneBtH1gBhHq3L1E5U9zu5S4Wjx7dssGu",
  "key17": "5rnch13LrgN7wwrpwDjZJoCgfk2CCktaFBoZUz7aDjjm3W4rR23FzmD65SWk2Z2Ajz7uyc7QuTUdLNVoQ12mTSno",
  "key18": "4EDsQen5c3TezcVQMTcLvdm83E7pfwGUWiP9vCLpe9KX98esSddej4T5ryXqxsAPdWXo25Kzcokg4gRayYefEkrY",
  "key19": "38jMrJ9UQiMyeWcYa7U4sZ5f1dvoinQs5YjJ3yNkrAKRSu4gYBs5x6ac9TqDoX3LPXEEsFipNDL9a36LKMRPuoc3",
  "key20": "5WQSD8C3EofeLq2U3LxXxZNLzhrD4mCX2AGGjrZo4EiPdz9UYrD2SmiDiFL4JX1EErrWGfiu2MPpw79Umgb69tJ6",
  "key21": "4tTX9rp1ZjTrAos18ZuTdDUaVvRaKkLUvF4FCZTXAihzNiUANzSuAqRUHNZWmvmVmsM4yKE6rjH1tPb66txZ4UFy",
  "key22": "2T9SvaUHwYFJZfZaUD5DNMQSUYS6SWAZro7HEhZpQhDwqzbDYnDNzqP5VZuMWruQWZRZcg7S9QTy3N5osWoTW7pR",
  "key23": "3pMYzK1UrzTXiwfKBMX2ao8Xnrzs4kXLd7SEBeEzu2NcpkJ8BDmuiXXcPgEfDr2ssxod9puGP8VH6o7JZJQ621js",
  "key24": "5Ym7PCe5tu93TM5iZizYMPA6UZCDCs6WfFJMwanNFSHLZ2TXRqzrhoNxqPgSGJtbpZjcS7Yj6xNpaye9BCzyZrxq",
  "key25": "2xJwpiZW1CM5sLcqXQ4gctSDstezCe2DDbWR5K2RYjomxzTEdddDHxVqieE8DdVCGxHtAD7aQU8UWvvLY7q1mBdt",
  "key26": "432DQ6vYvCob2JNzQPeN5NdbAWu8gkQCu3ayzBaiJHxEJvd5APmmi7fX42sQ6wv9QG4qdMs83R6La73Hesjoetes",
  "key27": "5NTxpB7sEgX7rNAHvsoTYH3KWsa5xPYenCkGFumSWFj9a2eJMEjD5QMjrBJbBZDLHoGyvDikQhTM765F4rXo4wa8",
  "key28": "31baxBcHfWx9TWCo5WLsCTZndSuaFgdC3CZh3MKuPdg6szfe8DSgkef29cAswTTco12x4QYLhNxNKi7SybBPaZfE",
  "key29": "63ueU4bKoCv1iyinqKkykAryX1kEcYDU4PTHp8s8xpR7AdN5MZtYpV7WDJEDsdBZ6qzxXPNk7KtGzCEfxSbqJveq"
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
