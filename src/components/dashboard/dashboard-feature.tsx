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
    "42TH23BfDoeNcHX36XAYSw5xjRZY5BwGQi21SEyhH4wW8UcmGWMZ6nRrmEdQoxwESZ3hmfA6cUZfmV1N5vVNEVy7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nSqfLsFLZ2VVtwMESSjn9Dew2SahGnGH7qL5fmej7Du4A1wdnGK6JNvRoMNSDSv45fkaLvX1yubaSXrW4dCt1Kt",
  "key1": "Mutfd1PTEMFHDAR27ypLW8wmgdbE79KbXYjt2dXNVmUhD5JiuCuVWUk8KmLFBSioX5m4zHGRqU7tdGskBeVuBJn",
  "key2": "4JbNzPgrnmXmYiWaBcF74L7PNCqwDXPFdP41YRFAKMQjhSQGLRotk3odd79maCtBxv5y3fwXx16aHS2R3HHx9iPz",
  "key3": "3u2i5Yhj6iEjVWQwimFjwNBw2NQzxNM5jsGVwYuDuyqDimZzH4dvZGp4EV1tqAmCiXwM6QvPvx9KCkRLEY7Q61dQ",
  "key4": "4rXgCU5v8tdhBsG947gN2pQtmCNaQvZ1ixQdNM6aWCEAosYTp29sD1VA1NfumJEP2vTFk3M8nqTsSyGVqAxb9Wiw",
  "key5": "3vNVo74p43uEcjVU3qhVP8SpEj8Lrcfdo5WNJYqwkg9FX63usz8TFRBdJLnP465BQ7ZtHRpdSZrYr7ZwWW21sTX1",
  "key6": "2P3cSE9RmZdm7jygSSURaW4zXLeQ7tXcrLZj1fZdFMZ8FTkWujSGsHj1YKXUER1m6thRWHCerHReDP8ggzra34oZ",
  "key7": "46rQfBqg8agkfCFeUtrHXnssYxyvyWmstpL4YKac3Ekkhim5jh3AdRW2aM725DutHpqJoXN1NKvUyN2qZwuK4MRe",
  "key8": "xdvUcXvRHkNvibwSY39aSEkdCFpKd7zt9U92Kh978BLaKZHKMY99zvK4W83YXMD9y51UwtbmK6UF2WJ4ec5vquN",
  "key9": "264EzRridaK68bHdJrXfoTPujb6WZP3A7WEGu2yXBDibK2UkNNZqm5qiBRS6NpU52QmsKnbDeVi2xFJJsMegjXHg",
  "key10": "3v3EnsEWHe1FG1SuAjkPdi8LrJM9QQqFSzfD8Rf5TDqBHyQsoykGCENBpytkQKFyj3qdWgfy33MJaxyUoNeXro4J",
  "key11": "5ZCFGTWNQHfcahMH24qn4r29jxtZ24nanxUQQNiKcErUNpG7GomntS6Av97wV2hf8BMujeb1DZPz3LPLQmUAKfbq",
  "key12": "566w78HqcU6hwdCb2TMozA6LGs7bMsiz98gyjQuL2KsxZxwB21SmdWZMMHXiSavV8AFjtCF2opYmXNHA8S7QgSQg",
  "key13": "3WUyKSPoLZGuBztS9zZQ3ax8jrkeyWhf4vvjoxbnmcv2xibiYHu12WCTan87vJx2ESN5SWH8gfAGutrS1Fg6Yxvt",
  "key14": "4GvrFR5BtnCNwWrkaZFdMzHNnJFszseubKbDwpTPjKGd9Pq1KGVyXHwtwhEm9SPxjUDyBCfaoETcnmP5VApcXEfo",
  "key15": "2nmrMYvHZunHknZbFVRDegYCRaKPdgD1HDUQvdkPp2ZReddCRAqMoDGhUFLag51JV9xVU57y4smuyQzko8ryLpPj",
  "key16": "5b8SisPzN4ZACmYXK9QvhejX2nURGAfrkNes3BZ2YYwD6hUvsQNNTze6SajwNRnrF66oht5ZjyBLU3i3rU6pqNtL",
  "key17": "3YW1Q9fn6D7uYQq49EMjXtAcoCreXtMZfCkmubomXmkEd8DLN1sKmTRCLyqeA7NuF64f5giFrRXh4s3UMbrSrf1t",
  "key18": "35o3i2fCwEkR79psq3MMKWBy3M9yob6bs7sG4arEzACL3P52Z3EoWFS2TH9pM9aTWtMjAhvv2Z6qs3vacUhkAZpR",
  "key19": "2pQrAwxMSq8ahFd3KpjkweAybm6ExMPpswnAYU7psggvd5U1kzHTSq2HuZZdj5AsMuZegSvDh7TsxWD5kQ6aVKeE",
  "key20": "KuWc7m8yZgmMN6pqs1Yk8SoQW45UFHnmvFtsejvLXUxKCtjyoBe7BnF2gCQamgz1uuuM1MUgvpuRXkmGpmESjKC",
  "key21": "29jUyrsvJchLhKPDcMZk5NGKFXtsxfeV1cQrhg8spABEXyhKmJC3iLvtfYoZszq1aL4HUG26Uk3ZG3cYkw3u57yQ",
  "key22": "3B3FpNbcfWV8hNcmLGTEzyyRwWYMowtAWHZy5Pu7PKVESHAT5amZzoB486wF43MeQ1WQ7AXkxEyuwmnCoKYBJRA5",
  "key23": "4JVnygS3dTw5kuBc5SwMccSuuFrmdW13Xzz2nNB2AqMyNmZYBrCBBjnt46NsZKnbUVwduMBiE3faMxKYQGYq1wnc",
  "key24": "32rcaf3WhsJhQpKDqGcxqvv46idVtAHFa9pFjoD6mH2KmHofnZTVE2e74eGuGvRxYKM4y2221DeP3xXE482qv44V"
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
