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
    "3wnw6bR1w6Nv7sroHg5bipiaVTq9FBVzi8DFUgPnHz4A2HHr3CvPnfQb7duym2YAitY3o44XdNnE7EqmyoCmp75k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gU5xjfhxhkdFv4AhMAqLP5ZHNtvgXoVCprrJC8bXbYwvKf2n8beJQYnDGVAdwvGJ2U13GRRQs1AoRt154bCzwZA",
  "key1": "5od3mow3Fs7tLXQ9CjE3Kp24zrAtApceyVK4pDzSicuDz5p7qhKJpqEf8PA94GF3ZdxvQHcazRYcsHwC59h69Svu",
  "key2": "2afxr7Sd8kQpLmPcHEqu22m96QeY7H8Peaty68FKRiX2Ai3tX36Kdr9Latp6pqWn3cPmhar4PrKQFmZuf5jd9hD7",
  "key3": "4N6p993kchom62VKo76V9n8KVyzMDhCT4AunYCRSeDZEZgHA3GfhTPkRXAvDjvXmAZBtytVQD2XtkH55sqF1aPZB",
  "key4": "3PZkmb6PU4Hxj7jLymN2PZootmDGGoaMXXhGb3EeUnPkpkuheTdbTNzRs67v6AZ9FWsCCqifTqGxusi44LXH3mEB",
  "key5": "3XvYiyKfb2LPckd7ncc1NHk4bfs8FppJdiy6myFbJdsSZdJ96dep881374jXwJx4wTYgY2usgqLeuZLhmPtap3sA",
  "key6": "4tURTbqDU3S5xuSkyveJmEExL33Hq6NW2CntENmvJAnGrErR61bnRJXGtpg1vJsgFTBufiwTrYPr3hAAgXLHww26",
  "key7": "472emVuQ455BMqHEXyhpboGkhPmJworpW3vK4zKniGhPZTeSDAdkEVNbcdgJ17fcUan46buunecoJmEMEDPZFZ28",
  "key8": "3SGG7qAbL82LVcfo9gmQxLZ2nrbihQTg5iwJxEBynTnBJH74f1S5nZvhCuqrFe3ANzh1c2nnt6WNGGzmZC6uyJ5V",
  "key9": "4mvdHVY8wNYq1de1JXcYWpNKzVLhs8Wzf3DkZ9wqsqZnXUeDuNLdojfrVbjg1xQ9DsByJEPAgdYks4pc1kkYfsfQ",
  "key10": "2GWKFCtWYZUDPXM1WT9VazXB86yomrE6QrNCYWctevAK8FPY34CDqxMbyRMnUYnuJ478yteYM73bN76Hz3dLAfKT",
  "key11": "3fSvDYXaaAMAWBn2sgYQdmQQu98hc738x2oRef7XZ1Ccj98dXvxVXYcZ25sp8FPmnGMFGnhDsbsWdycWVGttm7iP",
  "key12": "3ECYAsbcZZT7FwGM68n8zPxh5SYH4yh7WeFPpeC7wNCwmHzXhDW71kuYyetK3yHXWvXV33oVoudWsf29dorQDzxQ",
  "key13": "2KJRczMaqjuUuHSihYFFBdbtQpW4QX21kDKtrg1w99CAvqTYpXm6JKn946orTG3ML1gkXco9ojQGXxTzPGHrj7mw",
  "key14": "8vZhrei7oSy5ZS7gokePJX42gbkh96FpubNku8CQdRHj3ntFpVzhpmgQ3nAPvQkPdPQMutBX62ZnzZUwNeKmuYM",
  "key15": "4aMmCwNEF3pYvXs5BQhyvVu2ZWLgQSBLxXCCuvXPJ1BsX2VPHrttRpvhot5RZx8pHcH3SadUPXtHSL474vAQUq7Q",
  "key16": "3W5n824ahKcuZCMiKzqHybHFr9ZD4AssY7epKoGDKWDC943jPyede82vnKgAJym2V8VV3yRfEEfxV6HjAsWMMmZS",
  "key17": "5fpJ5h8LeqJ4uF4qks8fMXYJgb4Su8EeJRtfFSZXwhH5cAC4F5svVQYidPud9mEW4BcqSNjuLdZNG2cvJdbuZEWL",
  "key18": "5h4qviuQ9Qi6sK2JB7nYLAALTzwn1Zy2AAcFY5xEayuwoNGntK5Z5mL5Fe8XQUw5ETyp4whf43t64UKizeq4ZwfW",
  "key19": "36hMbxYp4sTHC16kbUUpf5qCS62KqhCLpyTr3WzCBtM4DKGLz74r84hM1ndnSxLsVSfa952Bv4zn2TxiQ25NuJPJ",
  "key20": "35xpoJTJ3HJVzLUm8pUkTjwVPns3TKy2s5mUGBPTcr6LqUc1oGhrRrGri56Vu45fVDEK2gN3h2mYPXmyk9XNb2KF",
  "key21": "5tFBnzDWkxqkSsmStyEAZNDXsxrUqSgaDhAiCU8VjwM37Y4gSbmNhgcnVa3MbVeGFmzizPw8S4ZcYNr3siYcmmVE",
  "key22": "45utSeJjdvhSi3wMpbaUJ4ntcAtmYQUXUo3C7U4MqsTxX2tW8nPHtmMZD9tqyzGi6az7fJ2mm7BY31g2obCZ4bFj",
  "key23": "4LA8W1LxP8FNaJ1chiwUmDDtVjSH4ACC7nbQMR7BF9w3u5soHU2Rs2W4YpqyWxAUzPANewYU4m2SYutSzuuYTbyM",
  "key24": "2XdrHkZWVwQWvGPNA9FZZMoj4J25q1kukZ5FSo7S1TSnViNY3nTervuqF14ZN7u6uTZUEndGktQVGnwKzAGNz7AM",
  "key25": "gXqFgpUzw9PfLWx23MJvXeiEWyuhU6y4QTpgbf22JLEBq6NL3MFdCc9Hzd8EyTESwJHHJgHkaMgQMTkuGeuEwTU",
  "key26": "4yeZt3V28smAgwHZRef7Qu7WHLjxojSFg67j8yL6C72jZk3xAXk2b58iqoehxxwPsJkNgS1XFwSzbZc48tYNDC7s",
  "key27": "51H97Fa584UaUKzbFs9ZQEq6vaZkkgQ8L5GfvR7iRtDFsD1ySW8VUk63xYqK2B6pHj5GTfCiXAoE4q6uk2tsgsRT",
  "key28": "Rw1UyMAXtWmYK5kGE2APUpSqDGyjWkNXk36fL11mFZx9uqA8yuRSpAgTwKqJmJik2r192x7RVHiEYLHuquD2VPb",
  "key29": "4LpXkwh2o9N4dAqjw1X93WHLCRNdBpGr2cwY9dNQqGLFkq22iEq6hxDw733HGVZwjuL49BsypgHzZ1QZ2iTkKhyc",
  "key30": "51ECLwedY1y6Foh5vBRXHuWRjnGmqyCF9tCdvPpwfj8KWSFgvhgiWrMfT92u7szBivfqBGG9ab2QAi4RwmTgxHqg",
  "key31": "4jiKdedgWxzZePsejWxLL4VvmSUViaGCF3WnDtzFhduuGH2fD4eCytsgSZbhtQNRwwuYjTVaJvYGyAazh9REC8e6",
  "key32": "2kTkBRzVH7sedwThc2bVjMRUNcKFLRaGyxB5VzKXHY5HZqTWG55JaeT9rkHmXot7beEXoWC1sFPXhjZb7zX5uDes"
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
