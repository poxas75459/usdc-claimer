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
    "2cj9PjWxi2aPwy99D82unTPyjMCQSpvPZv394Dn523fXhY3fEYeL2dSDyK9BatSGaEQHM7PfpC7UHZYSZUnxBfVJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tSMKVdutzusCmQ8TKYAHg5K2MQnKQJ6ezTLwQgiqHokoJJX4QEfzCGbfsDUG6yWMZZx3MJVZ5simJ49sD9wPm3r",
  "key1": "5BgpMCQ598TXXnBEP6MCJAzndaYoPQmB2QwgCJiVjKYmwfSekC7bGJFHvwthPz8Hn3syYjVQmBW4tc6engpeHq6y",
  "key2": "5UWJJAqSrNdh2ZXgctAnr2uDckwaw64cCatf9Vv8MGDgyutosfsVTW6sJzGXQt6M7iT6vZ2M5kVj1o5dyiCSgMGi",
  "key3": "5yvWvMdKdWZWLxrYD8EvQanihJNooDxzAasFQbQCMBqLhppkdjjUPreMPvPhrup8rXzihM1nd4JCrnxnbGk1faMR",
  "key4": "3hdSBxFKNrSL8ZPFH7WMNXbK8Bz85nQJPE2E9Zauw5uKiqiXLw4kAoaaqrBf4fAj5faFpJuN55Fq7T5CdGtjBrb2",
  "key5": "44M4SiZoYgkHmEwzJCZtpg8jwTNTjNx8HxGj6G1eGkC2WfGFDqotRwRT584PrC3opTmkPiAJLJT8riaDtALpPzcN",
  "key6": "4LhUBcx8LNU3WTZwnuS6oBK54z9XfvJrLJw4YuTrE8jmWix8d1nQuvz6UDEuw5jVVMTDXtU7UVGdwtjzMQgqFQaU",
  "key7": "5R5bgCey4XVT4HyDi4WAGWt1Dho3y9BcztUQRqQVfYZwkdjcdaDEgkN71xEo1XHXjL7cJbSg9B4Fxk2zPKVRTXGr",
  "key8": "414YmFnp6ttvAXPbfh6YvaWPQecwAhkapZZG1hkWNP49xWSQrCdMskvGCC2AFRbccCTWCqNo4sPQK8pBi5oef6oM",
  "key9": "4CHEQTtN4oy3UHj3j8WFsfewYe4vK7DvhVNk8pTHmCzfyMS5BKiXCDUtgUfLNPSdWLVnT19kFAxoC9ivy9su7LNW",
  "key10": "62Dp6PtBgMPSqJRJHg2QqSQU4E1U4Lk2cEPJscgwEbSuznyd9jkRHKUorFaghKfnarvyAmKJVzgDCrCCrftPqGek",
  "key11": "4Yd7AgXHaGGY4SQfMUEHVZf4Mfa6RBQu2BaKwJ8PZFQ9h2gdoWE21NrvrLiV1g9HTKpCjsvtWyYLT4dkVDqyH2Z4",
  "key12": "56QMEEBirRFeyXy8L3UwQNMTpAHv17wcwW3yjZReERE4rni6RPG2XH2znZhJ4c7nnKb6eUC1fa3gA3nZabgcNwfV",
  "key13": "5WHHv7oQKAwxdeTy3iaeAqTKsd8gRTMmFNor9vpgWxMsix5p1m2TEeG8SqmYa44emRiuQMxgYv8UHqzgpPoResqh",
  "key14": "5QxZ7DTnxqfC7U7x5us4KyzHN9i2xYuGVtYA5XkH8Kh34QptFXSn5TRHfuUyogZseqBDzRPxEDJoYTxthYyF7pJN",
  "key15": "2FUTSTmETD55B5HHZpatcLh7ttcrCYvobX8Sk4ug4hEihSodhpymf5ijFDyLCsygBgsgiZ4VpFBrEnFTa7oLGseS",
  "key16": "swhvTwKwrZnQE51t6um7qKzVCCoKNbpFFA2r4G1U8AJYvRPq4okavDz2MqPpuvpkw9L1jGqJz6WeYeD8BkjNenU",
  "key17": "4urBJdqeaC4gdbZP9VsjWvDKof5bH3kbjk8ZnKANzmdqygj5GUHzKpoicocReZaizwPbxwnNe1aGMUA5GA8ShvpZ",
  "key18": "AoSU9fwBHSfP9vcFyq976tiLVywS9wGZ6VSaDnJnY8w9uMJfD8rnxvg1QytPiSJJq6j3hU9QgymSnQZVPqxoKxw",
  "key19": "5sSLbkmsnJntEPXUeXbRs24BSUPh8j1VF3BpT7ErK4wUvABWedTHr1LjEjX91eJrdb5UGhoWk3PCegA3ChxaCgc2",
  "key20": "4NxwPQnnaF6mRLik3BLp1rD3hXv7mr2Dxy4YcagUrSE7zGyrVVALne63quE2AwVBKPjNDxXLonJLeSmFEkTEyhk8",
  "key21": "5LhEBDRi9k3wbvUZLA72bg7aex3mpcroHeLV5bYSmB5nixFu8JoGCFE8eN7yNZFkJ29hwKZVKv58qmxhZ1kG3pC8",
  "key22": "3SXGvvgB6yXPznDum94WxLhfu42tmuBub2DsA7oPTv4jMEEzftH2Pzp4B5e9fBgQjMEVWqKjLTDC8E2S8Y3DoF37",
  "key23": "2fDDAPAJwraCZVXTAt7QtVfwYtubxzs5EmJhGYwrbkRK2ke32tLBfMsjUj9PYR5x7Y1bUGZkZMHgbSHSzoEqifTa",
  "key24": "Vjwm5NgvQepvt2oNoLkQvF92Mjr4Um9TocE5M9rQ4LzWifmfRdn6Dcsc74Bi9dtbB12kvDJrtbsC4x8moBpogSy",
  "key25": "66rewG5UcPo6rREeMLKbFemFhCqRx7sY93NKnj2G82wWuXWqoTE21Z6koFtZVx8w6F4PmKcmSEzD845RWQvhtcHV",
  "key26": "2z2BJnXwg1JH1h61QVRSPMg2XZytVxxV9V4KtgvVbYwt6mrR3sbdSLwhhs9nHKvbLA6HHixwHTNxYoBRbitEJ7E8",
  "key27": "4ANWw5M3r3vXfKjnS33dxtNfA2MrVBCCJVNd31h4PRjUq8NaBz44GrLY82pQoDiNGSGLTmLWxXYhTyS2Xkqse9CZ",
  "key28": "5rpPnwWZP8PzQQs8dUgigLqsh6iLWThVLPf7gwrH8kWCv5payaQoPdX48RyrTHH72XFwf9YXakm9p49E1bgeZKuK",
  "key29": "2nuSZ8x8khcNRyismCnUrTUfwBXfvxcNc2HQZiFTeMdsbbEWWZKX72ghSVUbUihfZFywepXKcm9ve7Nybjny8DhW",
  "key30": "3HqRr9NVcmun11h1mTkhWquzKMnkvft3oPLACgK9nv9sV1rhVFjjGxDt1DenaWSk3s4qSxiQLC39wzg2XSvdvQLD",
  "key31": "5myzDaJU3f2rXhKtdWz2yuyeCJsp9u1UUtGjbjMF5nN6drcMtApKiKb2JkccTMgvAdUGxbzg7zhtF1RBcqQCz1PP",
  "key32": "4sLvz1uA8w5qUP17tetMtvqWZhAPt9JpLe4B7Gai34DX6mzpZTbHuCkrEYSqFuZMyTT8VEZYRsasbew83Wd2ra3S",
  "key33": "4mDVnF6kWQcWWUG6NjDh2HxXt7Q15aUNPK5nkpCusD3H74vkqgL7ZfBU4yVrPB9aQPT1Vgq4Set3GKmk3jAiTzhj",
  "key34": "5aAmj5TgyYQBbYqe9Am1fjM2yDTKMF3LS2fpyfxxZto67xZWTbo5pdVszJbax4UFHx2JVmXqUxgefAfTRdrP5HhB",
  "key35": "5c5vLSrtNn1NDXoMJWxHXDA5Qxg4AagAQ4ah72QVJ3HEPStCmSuEB2yn4MMtkk5bAKWHDay3MXk45brkWoGV6S6U",
  "key36": "2K5zGy2DqDR3ThdyjrcxBPinxXkf6swryJdiXsTEn92TMgc99TF8xru2cqpYX7C3fAJBcdddVf9Xp8UKPUUA4vrr",
  "key37": "5KHfk8Lg8t3kyKEmFojRcybQjoH5TosSKGb3tptTtGUk9nHYkZMeudvEVqFJyFAuCoY4nLRCNDg2AgTWBJBhgy7C",
  "key38": "4L7W5tsVRNUF5V3fyQBSZbM3fvcKQKEUJjyKaqjVXsSZkkMUefE9qqzqn3ghj7DKS26eapkZzbmXj5zBpvC19mgo",
  "key39": "3RDb3cXXRpjTDvCPxvVjZoGdTjn3kh7RgxmCYFfG6r4PL4YQZLNQ3U1vnQ8aQS2WggiWXnLz3UUvvoGRkZpinbt6",
  "key40": "5JzzBTqYBiMjZTdV8of8rLXNUyiCACoVyhptq7n6XHm7Z5KWRvj4Uk6tyqJ8asNrpn48DopfEtndvxoLZyA2U75r",
  "key41": "Lp35uSxQscwax2WN3kXk4EfywoQHAGSbSWuURm1xD47mrEnfywJ7wgX7k5ikBxQPPKUmCRZHxugrUsh99XHXBCD"
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
