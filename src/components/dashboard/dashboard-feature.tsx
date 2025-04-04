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
    "4ZdLsgqwASQrzSX84rmWcj6DW5UfA1HMGXD94fib9z5d6FXz1KjUuadibT2kzMxLKayvJdo2z6XCcrkJTw2H87Sq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Efy64ZGTp9Qs9tmjdSUpEt5ywFss8DdSzgW1VGCWpN98uCvFVQZLsfqfUcmvBbAJkNzpUgCjPi1DVV5SrfKqvqC",
  "key1": "giecYT1GstQhJt31mHHaNQpCsQQZmDbJcQUDCLws1A9vMHxpvh5UbuodawZEoqi9XW5brc78MUEpSUvnoP9VDuB",
  "key2": "5Vq3Z96S5bn6kDLKhyT7FziKyfKUK9eteU3bnk7tL6dvgsRW6KUYhJq5mddKsF88wZXxR8cjZbMQASpuyorsybPe",
  "key3": "3YQoXvJfKMCWUQFU7gceBmFGKppzGRBiPLxvRQ1Ytp8AJAqbn1yUbGvcNhW2H3iKFs1NQL7bnZM24PT2vSrARQbg",
  "key4": "51qCcpEThCTvf7QWrvBhwK6DEy7A7NCNAq5PfurufMX2fSKZ69GJSvZS7cwzVU2Ebo8fWNTHN5jcHQwMo56Ja9gV",
  "key5": "4fTqakPjHpc5piSDFkmHWdxqpmrUnaFFqKih1wfiTD5gvoWkFCKH4XexdTapx1WDnjQxDefsF4hhPqpFctHFAZ5n",
  "key6": "MXAW9tCqG7e1kcT3hhY6Q6oJnasYVbeSXjx77dbhY5nmqzS2rdugLU56fyRK5BV311V6eBHWFZ7XK8eDU4j8QrR",
  "key7": "H4yXj2br9rVQNAfhWUBpoSkq1t1YZRaxYY6kkgBH3rpaZGsZJjMhYTJnu9fxFvDea7UJJSjv9H9ESPY98kweLNn",
  "key8": "58PDBEaeqzYPMt8eSaHBLSCbT4fYxRuV5fQDeMnA1VEi81iQ4tChSp3sX4KiM46XWWUg7CBZtHMmWETwonD6rrnM",
  "key9": "5sERgAbxFnK3A73ZeFkkurC3ePFbqS9MMPxVDJZhKdxkVsJeqL4iqXxCzthpR237TbQsYJC1HKqeeALQHgJJAcfa",
  "key10": "3DDicXfBusxg5nYfAb4Nj2wF2nP8QchQSvWuTBWqSBhQ5ccmcP5n19rYA5p49XPLwRFtWyTZXBo2MfcAv2GkshUH",
  "key11": "xCKfhJPGMgrbyt9sAjDkpdwnnBtkiBgnPBht2CqudXPtBT5DxawRVSVevrSokKbAUoCaZ8aWVw8JvXXDyGGm4HZ",
  "key12": "5ZayGKFowQ8m1jCL98ZVaL96RNJuq6nfCtydeAMeUQukahYAhZscnUzQJjKR3cJgBmMyXJNRtiRvFMrd4tG4gYpj",
  "key13": "5nxAiD5DXtxecLbvHN3fHVJRFziH3G4jJsraSruaoAiAPf8wQ5xVQbep8eWRXshxHjDHicN4ZKsEGNfWqyiGpyNc",
  "key14": "3G2ihmZm3i53ggELCKs8mZnzKpBEJWTEcAMHNwU91e9bGTbQbAKGmey4A5B7mzB1wtZpLFo9JaQHGud6QPngStte",
  "key15": "vGHYwA8sF5nt4p3fmD5XZLwxPcMfxcrv7i3TauJ69mVpW3jo4g3xaPEMMYKqAAucwWqahAfpptvD1xkKZ7jwVbc",
  "key16": "4dUvkzs2NhUqFYD9tXE5sFAUUck56Sg6Yk2qhbNj12Ld1P8zsuyYruphP8Mg3j838nU2nXLUY3vEw7BngatLjk6g",
  "key17": "rGBWt7KapDXoDDCs9rNEEhrnUwzfSAuqp8MMsxGskXTHTJEKsnSXLz7JQPxiKHfDonmKbopZQULtEnmFzbQJWkA",
  "key18": "5K5SCPbPzrRGwsS7762QwvnmhvTVRMz834Qhvwa4CDewxqfED7nM8HthjWbwoiBF41s3tcinK3SyrLupKmTAaCa7",
  "key19": "5dSoUtW6hG2MDZV3rXEZXnKHJZ3J2xcNwoybEwPjM1UYjvF8rxThkRo4GWnWxDBm119XTJeqYVSrfvb2AU2vo2C8",
  "key20": "28Gip8439wfDfhEU333tQu2vRejwwypfockfMjjdBkuY5zuMT8mfubqwutNJMuMY68M6VsQdX68Goq2hH4VTP4XY",
  "key21": "31JSQEevG5mg5mo9ms6oEugjF1yCS7AmJUvy9ognRyqQVZKYotJsmASpyd5PWagFr62zLETtbVUcoksp7K95UQ62",
  "key22": "sXLAGPLneZfGHrNzn9FowXDWem3ftGeH4eMDg2JogsW94Fp1gXpRqqeNJhpMxPHwsPrDsPAiWJNBp31ehozXLys",
  "key23": "3AmhR8JP41H4yKUpCwmm7HZvQKyoTgzCKx3vStujpRZUqogVYKL7oat7TBnVjgv52yegqJu3ZFhBXJwt6B8jQGMB",
  "key24": "51ZeqE7uquN7edVK4SCro4huNazrHy3dbqKtuW9FCcJ3LGHDGDcReFo3o96qyrxccXHAHj39GcDnFfdMwgZGnm7g"
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
