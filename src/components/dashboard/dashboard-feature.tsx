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
    "61ii7yShR1v1NnmHFR6wigKhWCM11ceo7fWsW14c1jsoZs3gReN6ydo8DvHSMQpKqcWTVg2GQH7PLeN9Lr7z4AqX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PAcpWijQEdfojqk6TZP6QWt1hK8K9mVdU7VbbGfMjrLW59FoziFyThVEc5vvJXFjrediZfoj9GTHdHidha5RAWD",
  "key1": "4LXoRhM8Y8CtKwS8qLs9uux7bndntZEWjdvqvzQFchY3bCKjtHA2LJKJQABDo1GhyTvfc1fe3hMM2hYzojJpXd6L",
  "key2": "2TC157BHfR4vF53DotkV9iGQkdLS6uJ8u1vFeJ4dWb7S38gWPZ76jnUpcdYcnnAns7iTK5opoZjC2v7ZzMyofnB8",
  "key3": "2vMFUNZCUP8Bb3iaZ1Hm2nt4YnDwZMmnP4W5kZeUSYzjXjYGiRzffrMcve4PTWHRB6BuYv82YuRqm1we7wggL3PM",
  "key4": "4PTCGDjkzKME1oT1PKKuQsk8kHBmJ6u9VnoJTb6RHkh3gCp9fedSqYk4JgSVEbAGJPAYaQSUPQKQgxdKLKXn4m1Z",
  "key5": "zuFxbfSQ986TP3m8dcVEViQiitQpAje7MvGnY8NMcCBNLYK3GpKQJQ3vjWzeFN9Xtc6fW6DyvEVoAPRxBhuAujg",
  "key6": "4oWHtVgowatQpeHkj5BAsn4hrdhaFu2sTxytH1qLiz8N9cRWNBpcVKiRsG8JZh3au1nkMoQkviwQvyYEAR7hLafJ",
  "key7": "2yq93NqiK28RcAmxQ3tXvpGbAerCghkokABMnnd85XcTwKvPu3JzYiMsYyAMKts66jYmQQg2FCP6kg414ywFKT15",
  "key8": "ff4LAC6B4QAcKZGShmmduTuUrBFnrkKZBSrgwSXqYf438wDv371fZM17emThqv1Dov17KTkE88iiXrYUTqLHuxD",
  "key9": "3cWMffyVP2cQfDdbSadR18KTSE9gxWBGTKFfqN36SXRJWHAQnU7HvNHYK1gx6CqkA94UBvPGwwDe5umcFXn2qezj",
  "key10": "TfDJoN2hN98vokDwGinRCqSJmq3WdQgsQzMF7EXoRhHuQv23sJCqtC4bjAjfBs7LMpYmzEV9266pCB1DRtoSgky",
  "key11": "sHbh6PaMXduSWoNiWLmzwJabz4op5XvFnyMmX9JFGt9UqFJ9HeQYxiEgzgftXN4vFR2AvHLYiHQ7kFU1dqYHAZA",
  "key12": "5z1uiGPVjvUCZWP5a73773tg2sW4u8afJDzrrabFJsTpCiDVqwLfmGvSeKFv3tLCRMAK7hUdEKEjxhmSwekwg5FF",
  "key13": "yqRLNRp6uP18jo56aPLXhwz8UpRdEZ2UXSQwYEAHAaib8Z6hs5wHBbAQxBu91gafn9Wur2kKhHiBwFGCXtNRs8x",
  "key14": "WteEHAYdKJbgtkG2h3r3MRxuWgrdDbpJixuCEXN6ZA1527LLKoreiNyiaBvtbt2e6ENEcw8cnSmu4EY23sijfW2",
  "key15": "3BtaaQLAUPhcehPoNAWptvarp9gPTwhyYirPdTCn2kNw1dRmNUy5nG4pivhx2xC4R8Knpkmps9a3uLfiR3gKFq8A",
  "key16": "2RmSU474R28DyJomrJ8GwZMGA2jbEfHaHdXdCwcg6zxeQf8amdxHx8yWpd2RX7LXyMbKVTLK59p1AcgXXPvVxkHC",
  "key17": "p4CSnUB9wmLuUjPS46UeeUxs5JFo2BAoQmVfVgBpGnV2fekj2WSJVTxkH32wbyJWKPPZt6u4RH8zTGHwBWSYf3y",
  "key18": "3TQjgezc8K5fEVp9rFwiimqPbRaRFVdLRkiLh79YFC41Me1qK42DV92L8CDjKMExBsMKihxVwzJErpsmqBY3n5XF",
  "key19": "4PVixiqRATR3X4vdZ6SdYPUBFQpWG6WPFjLvZopBd4pd7xjgi4QsySbfPct71b3kZuUFXaqZ3nRC2c5q4Baiv1fv",
  "key20": "2uerbzNwox8pc3gYPMNmSB2N8Eh7bxkHp5XJRR5A2hvyWhQhYuAeFZjAetxWY6geebPn7W2oe4cnMMMMCu5MiQpH",
  "key21": "ta35soWyBjaeNmVhcWty13r9L2cW8z8grciYNs3t5XSEtKNTZadMHuyrzamBhjV316CEypNHvoWFSFsanWeVAz6",
  "key22": "25z1WVp1GcaAJqpHngTA3atGLJPmJVMin92R7exjaZzurAHpKJJyLh8KqLQfCREdNk8RxXsZaYoJHYLgFX4j8AAh",
  "key23": "64M33mhEVTEE4R4w9dXNYHeJvGN4k2uS9KZj32im66M6HuzCev8XiGTbDJUySRcS1i7LM1k5qofdfDtaA7VRj4p2",
  "key24": "91zpbwPRr9YnRo2bdL2an5CKWgha3m7NMBkHzMqvKYnHELDwXznJPQ5WEKMhJGZ7C4jYSZxZwM2tqSh4gnFGVwd",
  "key25": "4dj7gRi7aKhiK2jeHguSaJpvPEmH8VdFsrG9J7S6Dcsyxh6n4Su3HvH5sZECy1VLxpf1MoVXb9XQPtczKWvasCza",
  "key26": "5U4eQFfU93r9NjjsUw6EgThjbLJTjuWJiMyUCatkBeXaLdw21fVN3MLK1Wa7pQjWz29Vimf2Hp9hjMHXNeht8r5m",
  "key27": "2VMZGi5ULMgNmnsWjbTSwyJDxVsXyFX35sTT49vo8uPdGGZPsHkB2Fx9cFyrj4wknEjP8AKFS65fqHKjmAGiY2d5"
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
