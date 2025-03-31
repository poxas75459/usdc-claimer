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
    "2JvxQbdhhPkeeXD8et95tjqmJNnKU37GXHueRJG7ReL7BuyfBVh8772b5gkiYfLTxAh1DU78rAHgM9NpxcL2pjqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uveRDJ7nQVW9jaSs9APvvySwrRzdMGeYdkivbzjTZsGood6Ung6NoW2B9xDyU4ryA3BFoC8n4T1KAK8XHLPDwpY",
  "key1": "2ZfeDFuxvrzJyLLqSXd83QDShCco4tkVWXeuG4w4WNVT9m7NvtdoP8AQaBdiqgoswB4xCX7HR5zKxWCh75v6exJP",
  "key2": "3zPViFrb1fdxCr8UghWyeZbsAv9bucAsy3vepRrwy3YP9pk6KSJj3tLkHPi5HNaMZkaZsCqNnYD8UJZYXv1TvugG",
  "key3": "5TnxAfySqPGhTwrZn8pGAWnRmznEd1eao561s2ecW9hWSpDsJNauceMF1JBLpLq828iFLRj9Xzd7wcrrpe75vSVY",
  "key4": "52C8EFmjZ9Fw9cYxvGUDrpaBYAWdoNAzvsrPg5XRkUQg3aZLLNhaUrAUHEWDpErgQMHSSSabexwLHCcd5ECyT4pe",
  "key5": "5TAXzTVDNBXafwkaiyPeu3HWD88cDamaXjUdUY3ynZ53HB4LLNQGuK1vAtQYECcQryU9txqRHxEWfeZNq6a4Ar6v",
  "key6": "3JSHY9CXyYqKuETqzH5SY7b2AnSve3F6YGe8ceA7aUEoGGZA9d8CRPXf9bJjq36u5vDgxAMUSN517qPgSLHAoCzs",
  "key7": "2DHZCwLdyuwEmMfLtMRGTFt6PWfWtz1Fw1mivgojNqJrJoqt1wSofPZo6y5wuR6ZjfDtKCNAw3hGqx6jWmSAi2q5",
  "key8": "4KXrWDk1ybD9QVZTSg9GWC8CjmvBU8rNb5589ANWZ8BAhPBj5VQviiV7mGz9S2oMj4i2gveMBDL5AmJy3y38WxjS",
  "key9": "59zon9MJpQqWXYQCbGtdxNcLspyceCi22Q3s5p9znoqrLqZ2oorFJitPGjThEW4C5hPrutKfaCFWDKXjU3aJPJ72",
  "key10": "rdTbiK4SJsnCgwYBn1iPAouJymRQiLGkD3refDxiqaZ5y5jM65Bxe7aJtqweQLDtJmMCQoA1xYiYGXpTa2BRvcd",
  "key11": "62sryV2PHx6zEub9krhEpb2EGYTtgwNdgzTbn3RpgVYB1wWFv6V8AJiBsWwp845vgiAYUgzFyr1XjWHQDmeKvWhs",
  "key12": "24UooEEeY5kJU2Z7mScdWrwTUribbC4ikNU6AoArVUNqVT2XKc1jRHjxajEPnHWC5TWMWovy8snoCEJvRbCPh1fG",
  "key13": "418n2Xpsd6CuopGroCUW6EnNoV1xAXrX2hu4KxE5jEzHSTwYo33bVJBeC7gUCU5riDBEdbKwpZjyxu9xYpG9ZdaE",
  "key14": "2QrTYvZ3QsRrmHuYVRqCuzQfs5UsWLRWZ2boZcgPGFz8cwb4DuDAZar6vETpPn1vjQhbtjq7CRRuxo7uK3Ance91",
  "key15": "2c7Sp4jwTgDHHbsKe2KPjA7wvm7Q4RN6FbPwXj4ioU8HLtKCkHCQ58Aft4Px5DXKjfz2o1KHEy2P1dDUPuL5jrBY",
  "key16": "4sJD8tLKGKJbVzFCqS8SsXByqm3yCXPwXdz3TfkXJXL4hxFDGfEJ8WQH2tkmAx3yM5axH7d8KSz8AAKFY1iJnYBD",
  "key17": "2QNseoWHDr4XdteFbhjG9ipMWhoWnwDeu8vrn6vMGSvt4DtorHqxZkQ9fk3vifSfjTUGAwr5RnPht4DWFJ6t1hym",
  "key18": "4qqbXMUpD8PVoNg7cXv6mkuuwG3YtYp31DHhaJiu4hGfNSD24bb4g39jwBTA6CvjTcGv1MfKWZ5jq57Ro4osiyx",
  "key19": "32fBNRMfdwz14VDgrDb3hHHf1b4wHR2fr1Uq9ehv4SjgWzvdsTeRurBsW9v3m3gmENmpmG7zjFDQQMGGMZ6W4KL1",
  "key20": "3HAQ7oTpKZVScFN1nCcopFsZ1ifxvwrgzU2YBpQBqCDhCj1oB6ZAE9gyYgo28uKxy4PJwfWKfLfW3ZJijf79s4Xk",
  "key21": "5x8yDEz4mLg7x37cWYJo77wm1L8ZwHueguwVbvENgXeXFBwCa7CFKeaAjtYZxyzt1YLVDsWqXFeQkw3s16MnFxsd",
  "key22": "5bV3gcHnCSxCa8fGUHSDcfh2MXTzuqKfd7aa389SKipSWQLpYp2U4t8E3dkqUwzyQzZMDmxorEbjKw9D4PZDJmhM",
  "key23": "3T7nSMS2LfMvdiYM8SqNFLaE2aiy42e1ahgnBf2ZFx9T9L7hSmbtCvfZf6DQH4dkcv9C7xERycRcf6p39RvDWpEz",
  "key24": "nXy2RWpe7ddFRZE99vqvqWxYPPyMewKqJmsbmpm1qfhYWGd3zS5ZBn6dmA5LCQT6m2QUhd7h3ZMH1jyeCPimuAY",
  "key25": "HnB9yhHL2xcp1tqVcQKnWqeGNVDHjLgFk3rf5zL3LQD9SLxGbskx5JY6WA9XSAeywP9sJAL14meq4qAkhEKDXSo",
  "key26": "2fQkjDfsAkrjrzgK4yc1N9GZTrYwrEWHgbRqWjPCAxj6yeYr7kCzUcJxga7wyRfupXUrRcJr5wADvypmaQpi917U",
  "key27": "4XsDoiUxF4kQckoZkmUrs1nVMnzqe4odTHkF323dBdNVPPmTiHwcCea8QdiQiZ5PjDqdvXfdKJm97GJh75mtdi7h",
  "key28": "2JL6j6TgWJa8gahwMkduhrwLWF3LTmRb3S2KXN7LQP2rsYQANSrywJNnnuwzUtiVGaea3r3boC38MNDT84n75rce",
  "key29": "urRkWzCC8PD1JnZWCb47dWFdXTrznUhbwUEvSwCe5PesGRkkS1VfydwDVrhjLaasfiKn7c1hzVo2kFK1nS9wg7o",
  "key30": "5VLEga6aR69DqMg4mS2QqxqYXw9gCRc1ghutUiJjeYnvQjPZtWbmkE66acaVxFeijpWNVhHr1gdpdswGACoBzJb",
  "key31": "38E7HLHV65YaxknwkP8B5bQaJRTS2STyL5MFhuH4G1p2Nb5YXookqGhduQANH3focfCDPbWdh8zXtjo4FbqvGsEc",
  "key32": "36428L4HZRJ6qYWCxvHFR8VeNW7XmwyjJVK6cXb4LobzQLjvBjUc8pirHT1AUsS8F68im4L7hbEon8QC8HVv5mM5",
  "key33": "c8s7GAMi4GhhuxKWiX3mnF3fuHPtPuc1oAZPSmxw91Pky3EJVqvsQLLMpdpk8x7AKuYSDupvCLMJYrYFdB8vcxy"
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
