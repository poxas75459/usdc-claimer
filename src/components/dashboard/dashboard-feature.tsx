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
    "dDEGctrswuAnpi2evwVWehKuqm4aVocva3awTWAptyug2ZSz9dPyVzhAk3TG18j17sbzFz8RdEZ15FRTkRykQef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fieeV8Q5yrAXaSFxUYBrJJjGWnezB32pmVun1i5mm94UVbZBTrs2989uLLjJQ2w3rHY2npJDn3uHvxMMENnGoCH",
  "key1": "5zbUhvfXqZj5YrDjaUWebYkj5rpNC5KHv4if3SMpxL8bojdC6SjXvJfuH73rjQEmnA2DQLpwGVMkUJZcdrDjbtu8",
  "key2": "8NZxFF21kDibnuYNZbvbzz4tqz9QLJ8yMX7JjUCuy8C49meyt4iwzq4ZjatxdwU6sQjjqGEYM3dn3LhUGTf7gJ5",
  "key3": "5k1utPZRqBoryfBGWDEMNAEXhnPJkJvnUG9akBAqxxZoGKG7WxoHkWmpqqLCtL5KTQv68zHSspG3nAia6ogwSskq",
  "key4": "3cghsvgqA2TQXNGYYJwYjnqBBLUEmG3PZf71Gm9rwJaAAYppwt77eDrCB6Sb8vBEE6EeQppUWjxwZ7AYAfTnQRqg",
  "key5": "3zZGULhNQyFUK6HnEP8ktat8JtQeFWbwLDGCh7A5TxL7qqMCcswn8KYiCi7tLeAxLFrKqjyAynVtBkcr5yAscR6M",
  "key6": "3NPoKGdxtUdmURZCSo9bbfaG9b7kDYzXw6JvyirywM9hsGJVL5uztrLfWyASYs5KquyHXXJNdV1joaNtgDiwczSx",
  "key7": "3J2W2gRJARTcFpqfNUP6Np47vMY8QHdzbtXdLgabyV1PQtwoLjsasZSjXVKPo4BpkUwCxgQABUrQ4Qq8ssD5LVp1",
  "key8": "3oTQYKAMetJmscgzPsdmWXteuFEMaDetFxd5rXqkjERYiJ8YisZDMVD72ARZx1v1J432QZPUAaSJde4sYURntaba",
  "key9": "5THv2TZPHQGTLLavKkmDayS1qsSGQGGk1wWGfkCZp8mGNqBjYz3q1rV9PhMn9yUDTAQeQQVdAuwZmzsPhH31jd9w",
  "key10": "5JNA6PU8JiMQYQjnCgHsWTvhHY2vXkDZ6nacTLiVSKbLjZt2pezHvyDvnJ6PLD4ZJ2BQkC7rX3JXkEXo1WjKJ6Yh",
  "key11": "3ipwTqiWs4iY1fdP2CvzssT9cpCe2Z4CnStM7twgrn8MwNYJCCjwZjAsWgX3QyrB49o5KXNzB1dx5VW1MYTbzKW9",
  "key12": "618K6uUPm6wb15tLwJJ2g3s1Z7YnBoEoq7rHDzqMz86QekrtaVTDLiMjDvfHuhYUZoPQWMJ2neZimV7BP9Tx5xVQ",
  "key13": "5yyhv3fvVtFY5JZZmGBKq8ZWhXUxcYRzLfCjssCTwSdT4cDTANgK3jXj9YVkFz5smowiuDSnExadUg3Kfk1R1dHq",
  "key14": "3TfLKMP4PVeYZ4V9Sx8eF1KaYS2DVEGRxAcqo7n2Qgjp1oB6s4JEnwzGtMDaafkZqcnJcQfYFvxuGXDAM1ZYADLL",
  "key15": "3LTyY6Y3PaKir3mstWtbVHz5ERaXGTiiZSbSyDeekZKZMHWVjs8V56pbudxVz21MZqBdL2bPoasttfKJKEx1ZGtd",
  "key16": "t7js78cMpD749kMhSYBoSpVh553FC1KZRwnRFAjBjB1GWMNqgVtfgtzNcuMuyetoLSQtaWiQGP1rffx8hH1B2LY",
  "key17": "3BRX2ygosq9pMJahessM3aenxNCiKBA4S1GzGrri67yb2ZHb5xMi71pjRNSYz7XFYUQs5mUBZ3jFiSQZdxFvBjTf",
  "key18": "3xPBrJtafgJTt92ssTe2HTr8KBjPPS24bVotwYhtuQRjFvrCLmg8d91VYeNP3ZSkQDNzNHd9f3UpA68orQAJjA2Z",
  "key19": "MPJ5vd7jnakqawHvYrZ4quRi1fa8X7eddSCwwTh8QiZF6eyC9R6Z77SPkN77F9ABNSXLEuoqsUXVxacRrf5WYCE",
  "key20": "QkdyjZYNPkPZ9GkBWgGUAJoqChD3vAQSydjnPXsunfA4TeokoumrmnMuip5EabghQmDYTSVsQAP5KjRUPzBEhwm",
  "key21": "4XCEQV1JwEcn22H75qH1ok8XbSBybMuEKGNnGdESgHxcm4J5HVfPWZs81PQBaBSnM1CXe6JsPQkXytcgd5nBokzH",
  "key22": "2ELviCNVUgqbAbcdzYwaUg27mzLtKbVbZaKJffhG6M1fSL94wg31mm5dxKCnTFNwWNGAfzXEyoyYdDuHP3fm9Uz8",
  "key23": "2rqYNhdWMMvttZQjEimJwqthsP8yVQHJUZXK8XFrezfqYmBrSLRrw3iTdM9eDib6rJF7hM8sS4SL2uGLxQCRQc5h",
  "key24": "4AqoUz8eWX11KDnV2x71wSHztsPNAaQ927umV6VcHi9ayuKc543TNWhQHy7AjLTVyWBJzK2mVujYvBTzuDhKWtdV",
  "key25": "278ivcXVR4BZnxP2g8EjAfvYjNwHTZq3AfawZooZ6QvDNmrsxHzvoiYiqGDBbPhheKJScEhUgcZPoAmx2f2dL9gp",
  "key26": "5bqwktqGpNe3UrnHpnnU5FRaket6572Veh6PzsukzaUU5pWgEgUyanrXqqAZpumtDfvY8WUnBufGkMnj3VfSzYcE",
  "key27": "5mHqXKSxD2iLd83H3W4cqvTLr9BCPaSjhBYwCVRYg57c1kA5mgXHaeCPFfCTtn2WTVSVT9UPg2bCyzYCgHLq52zJ",
  "key28": "3hrRu6c5iqAcFpEAyxnLLDuvPbtzxcsWgmiT4qjBAGwkqpih4BRwuYyu7q5EtK2MEWdzc6xzuiDnAygPq4vXcFoQ",
  "key29": "45he5sAx5ZHcaj7dEK2NBqPYj38bHhyvuAZG7JCRcNoSeCnLi6QCu6NPzvELnadneSGmViUjpwrLcSBTt28Rk3A9",
  "key30": "2LFdN2roauVsPVqU7ZiaFinVqxHGvHeD8p314CLZ3wuXAzQSfub1x2kEbFs7BoXTJXdW5yVrGnDfHsvCtrnuL3eF",
  "key31": "5hx6NRLzV6byFpnhnEoyXHA2NSYGTczfQW47WEjrXuUYwfXREzTaUKwkw39gR8uvz8tVdrsCMbgqVD699gF5r4k1",
  "key32": "2SgrRCuDMqkNZgVyZfYcJc5BF4REx1wtXg5PhUrJgynB6Q1F7sRDpkRJv82yrpUBeEkv1khVBBEUs7PoM7frExFA",
  "key33": "J43KHewaAuJg8XWSSLNfiG9rWeRLcaHFMRnvVg7qVhsUmzUpnLjG8pmeDFaGyKiFWmvaScghftgdwKjYCm5FBya",
  "key34": "4Rqa4wAq34zw8v21bqUigw7isPR5RPJiQBfzZdAgFq7x4ni3byuvwHoSCQ3ra6XkgmyAdwiabuHc5gUiJbN7tRCv",
  "key35": "37LmFQgUABuqCrUKL8p19cWyLyqheN5crjSpm4H6uyMRGWB6nU6uQsdpX6andNgLrTMsSCqm4guYBu6ChCNhJP1J"
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
