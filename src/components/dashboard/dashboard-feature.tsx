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
    "eiDqvepACKAk3Q7CSLDiZWHsbM5xHKs16vY8Sp2PdkbrHjfaLGkH8kiLz7WNq7VetPqfwxrRZ2Z8tcGQbvZ3Z9m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SV2Zuw7Ed5Q3Y8nCK7ThmpZi4SCFDVFSRWkkUsTEYz4LC72xxQLXLaGmpzBhnFQQTQYCMtjMCQTFLk9ZTj182Ej",
  "key1": "26DJKA5TRWt7AWjohrv1dyhmHEkyNbKXwD9yK7hceG4vY78hPJLaScL91MmheTB6GWWLfYP9d7RXJvXYKwQGTw9C",
  "key2": "4RXKy62Yu2aRgr7WN85n9JHt27BiAVyqG2WRmiQ9Wsxv8j9XcB9FNocaKuy3ShjPzaX2CFuTtzRcXm5f2g6k1jog",
  "key3": "2G6ZbAx3kseFtSh5t1d5537teJ3oSL3raeqbcaghTUbKhAfmViGwuf9883U2zTmRg5NBLA39vLkmrw2PLRBnUQKZ",
  "key4": "3ERrCfpCHDqmjpDakazUWgPvTDia6FVeunvdNDdFftdYu9XPBFnBwx9zb2xdvUdZisSEN7pYckDb7eeZfsC7Ev4H",
  "key5": "4HU26oipkwekGimaFMUQsATSB4ofx16csRsat6WvehU8w3mxMA97ZFEUtbSHNZ1fLJfxFgo7coaKRp78bHux8B6a",
  "key6": "5VwasszYzMMddiZ2YbSWBsAfP8A1Mihg5qEjBh89PzBZ4gRsN6DVCHpGPvM7qH7CtggoF7c5oGvzY7ZcXNJHnRjv",
  "key7": "4hiXqwu4sHutxSvCL7HtCzz93HYP3qbriUE9h5S4CrZwUKza9C2FijdYxHQaGa4sg3CRuVxFyFppBHN1r869Gp9N",
  "key8": "DLNPocYyqp26PUwzhLhSuoXq6odG8rCHsAC9DMnTyRwaSgF4AXp3eiiPHFBpuW5u4J8aMqme1HzCtmBDwADd4BG",
  "key9": "2YarW4JTv5u5b18Y8P8p7DbwrLW9kEPhQffDLHzRSE7wLC4wZG1gDXJLCsuP8RD4NyP6nTwHdrq353P9hLA51Wf3",
  "key10": "4JZccYNoevkSAUewEoUT5wJEUJToPQDSMSCuM2pTj5bDEuZjQgVbs2iiXfr6ujPEsBEZ1TCmhHaVP4jQGY3a98j",
  "key11": "3b3TcyC8JPGFM9axT43y8YRVRAPAbss8DALW5rCCYgopFwy7u9Y5vtFCWpJfvmqpu8BvNYuuYnw2WwkB24yPnVw3",
  "key12": "PjFiMPejWN1qHdCwQZf7RVHErnVwnBuWL4DJ4KCb5f8SknVAUiSddy2ffWp4QupXnqQRVRhB7jnefutzGG2Q1Ee",
  "key13": "4EnHajaGuz7KaWyssJuX4WZNoBsBv1MmouG24kopckmBq66e6X3JLjE7i36bNz2qoDHqNobdPxrtGYPs72d9QzH9",
  "key14": "UdsSWQBLEbyhxLtFTJryEdgwJXPN3bcvLounLMsN7wmj5TVUbJm421gM9zFEEnLyx3znrjfKm5RrNBXTNHQUgk8",
  "key15": "5HfbVaSezBNCvR2qpYXJyggXyMob4Rpc37r15UMrs3BJiZoGTmgEY1vXDFS3tg5SPxPJmMFC9kD2xqr6exjm2PMT",
  "key16": "4c3VhBbbM5mgSAkPU2Viz4qWKqxg1iuSfQ1zw7qUA5WqDi4kWmeVwbjwX5GkXBivfoPyEoxUmwAcaTEU46hAbQp2",
  "key17": "nCt2pzC3ZFnVrat5UdzZe2MUohuJu3GxxW5ZLodceuiGrLcKhxcJDvr4ukvs5aAe28urEoNdKRN7S77Mk2czLLw",
  "key18": "3e3VnPAiFX3m5bRwfC1WqeHzj6Dzf5oVoPfnNxNBKHhi6cXSfFYN4aL8k2Vy5QwU9XWxNe7LHVFRTG1NmDXtcfxW",
  "key19": "5B5Q1HR73HRgCpidbGgZHjRyL2qsFXMjYCyD6PJALLHXE6xGVxUbUfdnFBfTq13LEejbCkiszD6dm5vkrB7xbSni",
  "key20": "5tRra9xt6FJaSTC51uaTcxw9rcP3JHpb4oHw8iqhdEMLMaZZZATu3ASBxvLU1vtMv2GYfNNTsvEjC26v6usJPaZa",
  "key21": "4CPTu3qwQtre2ZbaHU6ZDwnGXhHtrpafYdzYjKu9Jfrak8mmFGqxLpfDxLH3zhvqkhsukWL6SDy18pnfpCJf9AdR",
  "key22": "3naHgUqVWuMbJgNJDELY8GqbGg7wBBQQVNMVT9TUM2aXvmwDLvUvDniRWAbhS6TMBsDoKnouewgUqKVp6VSUvpok",
  "key23": "4YVGSsh5tA1P1KPgLScrDn1YuyakpNQdW7xwxERP81Va79g4LUd4EF37eJmjRHKnmqsxqLRJioeUcqN4WhTH7PEo",
  "key24": "2JVjLed6e8CvtNnt8MZ9M5dQ7kVPWqbM4kcFRiqjCtHTr9pkhx6ybuVfzz2SU3EH4SYvWmasASVFZsmzFyqyMv3H",
  "key25": "4oJEUGHCvzzkqMSuXnbYxh3StJQ2vHfWgvtqCpvP9weVrYnzwfKufEFbZoeAcERScCSJULh8jEqmMaXgQSXK4WgP"
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
