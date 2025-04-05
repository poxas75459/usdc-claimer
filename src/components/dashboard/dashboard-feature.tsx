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
    "4gjpxDHY9phj6NgufBTnvMXZXS5Wf4FDA5kZrPV43LswFuMHhd3D39NMqbLoFNX3M7YwSHN7BaZdQTXXuHy9j7cJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F5vwPr99p4g8yrFzBdA84xGbfLUqf7JWaVwUwXqJSECSBpGLBGRjnLabSPu16k5gHUnC3AUsACDaGfYYjFn48rc",
  "key1": "3cy1FRkjK6RMyyB1cwLDykEjmcV4yp9Jp69DZ4JWw6TGbpkuPidNJkdrJASnc13SCDxLKDjqKrAKG3vx2DF4sFj2",
  "key2": "5sdqhFoksp8hq3TczPTSYuHxJMgaXHViJ9JpKLEMfJE1oKiTKsmYD62WAa6KcdjBzwqahETbQpmrj65Xnvm2GnXS",
  "key3": "5g1qvg3NGEfRQP1yAZZtNDen9x4yVSpupihWUiFW1C8nqNFNEjFe5546L4PjcfBEtDkgfX6ctudEp6yVK8kNsjQ8",
  "key4": "5myiMT2PGwKoF2DtsHXkaDCXyeeZQtY5v3Qf9F59zxQAuwPKQAkifnH2G1x9yMQGefXd4nWDNfpdnhi5T2eeEb8f",
  "key5": "4VHDJpenB6JsE8QJ2R7MoLwTmGktiEjqd7ov3QRYVsDwVPeN4thAkv6K78nzS3YoQEYErfZCN2jw71jdEPpHagM2",
  "key6": "67RoK9rH4XBQhmVK7ra9Mg2JLyqSCysnVHuP85pKTSW56WZ9Y9FT51wqfs6WgLk3WqVcgG2Q9KnUTVQUbHYW1732",
  "key7": "5P2ifgijT8uNamP6zNyeL9od5DmxanetrnJe8yWBeXadbYMpHcTkzcZWHRkrZ7D68XDNcZJ7kdszt9C54mR5NsiQ",
  "key8": "jTgmeRkoPiGJLmBZsireNXu7i7Yz6DLz16yB9N1xTwquCf3QmbGkSYvw3ejS19k5jYAHJf1D8fBNwFw3V8rMRwe",
  "key9": "2wNyCuvtLbLD1ANyJiQvCJCzEMUw7bRAPWxazLwgkUkKYyTzSQDNxhRfMkshcAURE8qZ58NQAx2g9qE75kirMZ9Y",
  "key10": "u2PNtE9h3atBUzLcw2W1W3RR4CLH24Mggc3ttPQH9zoUSyD7Tk2LE9KX64n28divHxJMXp9nNJUfGyZfkdn3Ko5",
  "key11": "3sH79CWxXvpAR4JLsvpcXQ3QpaKLdEUFdXQm2RFPy75Wfo8AqDimpszYJYoPSSCadU3i9oP3ejAjcJU5FXW1pfjD",
  "key12": "3XpVbGA7xrcMD7uBzUtycwEcQtnf8EfmtY38xpmE8Gx9Cuc6VxgVf5Cd81zcM1xZ9bAT3okck6UpdMw4v2mz4Z5Z",
  "key13": "1Mja2HkcrpUM4FEWZPHLftuermmgrQq2K51EMM1XBJSQzfZw9Xcn8bS7r2RSbpz5xCqc85hC54TVy6v4FMP2z3i",
  "key14": "24mmSNXZooJT7iz53zLw7tMsyNXCrxMqmE7ypEwfswB2hzJ7MVD9Puf1BucRUHLbi1KkGJ6e2xA49vxp7BbbvLYz",
  "key15": "5rwbGTehGeiLXY1XsfR3QtiZ7MTi2exzDM2JQfNgcBi4yhJeFariEYW1mt3xwd3WyfMgG4gYe54rjogbN9gA4i73",
  "key16": "4odhDYcUuF9d2avkruVmS7dsETtZ7UKW7pEsefCXJMek989urS1kZCBa4XyE5krLb1yiNMS9TYE7gcWuJ35adJUC",
  "key17": "5BU6V1XBus55srqWPxqVqjodsbsdBwUMYXReJK1KHaJiXezpVVHPM5MiXcoEkEvSmtoKcr37EsYtXrbMJwwyTiaP",
  "key18": "3nHcrSMaiCf8EE8xJ3Sz5ggaYRSH9nFpX5jxX4JE7bhGaqdTsaSwJMejwpcHLtJWZ6xd3TdGqN2bxX6ogF3oNxkH",
  "key19": "5x2FXmAeE7j8TJW1cegsX5bbph34atVyWrKfaxUkVWftnz5kk8Mc3VbUFQDMj9MdA2VsUUYYxTVsBGPhwpYmnb6W",
  "key20": "5oTLWH86eU5Q7WYuJwtzYaPMTwMUohpRqXmtBMxsGD4tVhtKJ9kVUVahoffjAjvsGAao8pRAsc9SH8YPioncMEMy",
  "key21": "4Q43xPCNZBqBR3w1Zv9XiFk6RsuZofMNAxLHJmbUYVmy7nw39AEVhB5GykFaxkg193UehpFxSrxZx9UShCbvT5ex",
  "key22": "3G7YTtoJgKTkUu9YtZoWoATivnbPsgqoFqCB236fhZUUeYfzxDsfMB219i3RjxgWwRkQZeeDbaRUZ5Q8LtNohqkX",
  "key23": "3uCZJC53fe6gGrnYBZ8TFzkkBBRkEoyeL5pCxbTqYo75Dz4UeHBfDjUQ5swYVHfpXSETiVcz4nWW45Khgr1Dvp6Z",
  "key24": "37A4gPqVH2AMXtRhGdpddf1ewCZydFWF7RVU9VRHfKBQM9z8U94uPukJXdzTu1YHWgCSHygdGkHa9d4tQ7sfcqCZ",
  "key25": "2LtByyrbghaphQmdFzmAdcTSHn31bV4C6GR64gBZj1K3Rhd84w2woEuZGf8gTx8M9W4xPRAa6j3e23HBnfJW6PyX",
  "key26": "3wRZGTLqYvSXMzi65ssQ7yCFuxWEYLoBvnr2SzWBvnVuxb5uHiPiiLyDDqqzBCb8A12rc1G16MjELkX7AvAxGM4a",
  "key27": "22SiN1LQeFC7SCjLx2jaA1NhcB95jBWnZBtarFExUgfWPDKh4f87FfkJcjwq2RznLmvj2YoWXG2Jd82nJkzBCpB9",
  "key28": "3Lit8GmuKqtgWKaxfm1dZTPx1T2p21Jz1VVfAzCptrogCyJnvqoDbZMM6w4UkL4yYdHYzPeHFgmT2aD1ycN9oaE3",
  "key29": "3Ux1reDcE3ZVQZm5x6kAWbJ3Fg2U4pP3SChdFUhEoHSiDmq8QtFVeV4eQgkctWGie7AP5b5WV8h63pRHpHa7f3RG",
  "key30": "51NSd9YXmVr5afM7mHKAEMuJfvAVqftYLAabreZ5YpnHjqHUxUzDAqeE4nqHQhF7MGu3rvn4mphBgA3CWHTgMftr",
  "key31": "2fFMiN7rkzKL8Eo7aaCCoNKgU9SmSShTLqsq6g8kazcVYAxsi86BuctULBFmcxPop47MwAMQdugavg41VqCw3QX3",
  "key32": "5jVWVE8XbryXVMtmktmbNxtYbkRfhieCXQXm81wCPbJ1jALbvTWEzEJZwT3hkPQMtLvwYdW7rqcZ4aePJdszKoEc",
  "key33": "32FFKqiFhyoYHitEnuy8joFefp3hDGiJtmCHCdvaAKg4EvbWDEekgtajMX4KkFhDWJX2CWDBLhXY8V9N6VWsbYFE",
  "key34": "3H589dc7mVoPHb8X7fmyuR88adfNDizF6o24SjFmTqQyWMqBZS5HhKrnXsEQacrYwPVs8P3GjY7Hzx5GjThmggP8",
  "key35": "5E4kK93RsKHDpwAdC82A5YfiwSHhG3zDiMzF89t6qkARhLMqeMNjpe8yRjuPWtfXUkePzL5WBSP1Xn16yembQ8nb",
  "key36": "5n9Ja6UVrwJxBam25UHJ9WompUwgzPiQgZaCfugikN7cMKkSN8B6dgApryf4ZmehNxVaHmiE9sQQx6A2QXszF2FD"
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
