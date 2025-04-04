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
    "2i4op1JXFfB65zb9N4TUCoAXda9EXy91RiMeaCTNXaD5KTY5Yvh1eR74dhFoqebg5MHaTMfknuwqqX3Azwfp9jYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wRcUpxaWyvhbRBEzJFqEb4NRanMuA15nrYh45dRWr66CzeMjMBgPBYPRjZ4KqY9vNSQ7qRrgVViJi6Vds9SWMZP",
  "key1": "3CSYvwVpMPHNDVXQqh26y7wWkTsDyhScrspzWm9fg6wUkdPHUCydyamqMECjyUYE9z6mScnuonGDYpSHQtQe72KW",
  "key2": "3GK84uhMVgHVwR9P5L3hi4Q81Lzp6hhqPAb1nrD6uRBB7QjPBHvRTdGqr8hWUsW2EehWVJwLdWEiRLfajaeEzUxU",
  "key3": "3PSeuGX1EJMDfZ7VLonwU2wbRN7Nv9Na84p8ESGDvj7onqixXeUZY9vNHTRt1NJ2QY8Frr7hJgRUrrAmqvFf6xeC",
  "key4": "4cURbn1Xi1ZWKaFnmmitV9oY3v9tPsKnKPCu39FsyNriy9XorCQUh5ioesuay3Swkks3hN9e56BBc4kXbaNy5nXr",
  "key5": "3ezRDW9RP36o3ixsGqtMR2mvQii1RUbwz55ALCU7eJwgvxHvBuJZq2ihsFFYcwfq7D51WfKzBpFHV6HtxSqkPchV",
  "key6": "5bD4sWuBJJLbqMSxXFTFniCqo946d5q8nhJXipZF1nAoj1V92urqB1bch3iudHJsfh7JDvMmJBmfS7MQse7Bzb7o",
  "key7": "4DyNw41bZmJKK9A51rVa67bfq9vjiqYVQhtAUSJd563mXtB9cZsLcWdsNvMqiPUzHsxjngLwiJkN1aU2u8ven3hd",
  "key8": "5bxmnzWgth8t3973ukP4iRGqhGJmjy3sLGdqxi7Sid9VTkNvR95fxGB92GAt1QmovQ7JtZegsm6PNzAT6Q6WiyBC",
  "key9": "5DS157faJAsGZnsuAniFrD7NNxFajWRDQ9VsHkfvGFqzebL9aBdVpW6i4E9LPt7uyp3pFLt4iGBu7fmhrHH6aUXM",
  "key10": "3JxvWfzQMniTM5N54iqD1cqpNrFn7wdMywP3Yj8MNBi5Q2o4hinurbKj1s1hTxfgMQvpQejcUPv5xm1bFRYZcuu3",
  "key11": "3YqZhWnbfjJGe5WbZwFH8P7vHEgjaMoN3sMTgNHfQQ6gWYrNFXrdT8ucgCy2r6sUBYiYDiWTDH3hLZy7q7HuTmEp",
  "key12": "5xYos6BKC4PXbJRZzD58SvYPoXoTpv7UsrCjjRqgkjG5yPAebreaCmcLtbzYuPw7fEJbFjywRbRe43rdygtoTce6",
  "key13": "2vNRWKGZviCUF4FNsQmAi6wcX3m187a3Xx6cBhfhZzz3BaAzhATqq6z1qrQbXb5st8h4hB8RJuH3bWvoF1EZ3Vk2",
  "key14": "527RZSds8VFdW69oSzoseSJZdgQRr3cCswjJ6L5htBXBurp1Sm2f3AWukyV5UrmbBNKoBb98UTke7rjxXZVKfT7z",
  "key15": "4UBt4ATwvGtGmef12FgfNZErm9DS2TCf85xKSQDtSxfSfXvuu8qBX11ZZ1PHfBPrvzngv7gBMA9Qjyy6oGZQ4WF9",
  "key16": "4LRXd6kEnknnCtzXev6yDqAoXX5Ni4K75ubt8igbLDRrvePiZPWcDT1D3G7tBbeGyAJF4PxNbuAXSDphSWUAdtab",
  "key17": "4E7S5vLWxERbNrt5F4YAqtuu8dfSSLRJGpWmwXv4tTauzyYM653v1MMSTBdn8WSnoF7qdkoRVyU3paeyfz9xhN3M",
  "key18": "3sjtBBnTwmRmHQRzAJEhZct4vJNjv1M33B9ryH9tKCHPRRyGnRqpCeEBxyRC45MQ6o2ipBUxBP4cnBjWKYHLBmAJ",
  "key19": "2A9SbcnevsQHRAe9dmeYyw41yCVWiboCBDo8yK3YDSEzUPQoG4mAhb1hCrzFvQZfdVonAQVUJrJSCceUgHa1ij2G",
  "key20": "2Ux27sGmSpaxAuiXKQUo5MmT5cQ5eSozSDtKNPAQAGfDb14GVpZg1UJsGYaNB33vSoeCvzcuZaZbNi1s3pjXNAJn",
  "key21": "4vwQ4vHwz1TRDC5VWTdvPsQgVFkytVkcnnQir8zw7QJDk9usa1ktTDz5WSJ3ibNm7M13xvnZTb6rmgFZHCJRFmUH",
  "key22": "2frBePzmRUiHvcjhUk7qpy5so8ANXTzfwN84AkwajbmZiBJzZsD6FpYY8NbUZRt6Z6fkLco4gepEMQp4GDcyFpJz",
  "key23": "43sgHjzqUTzYWysqmmDNMCRR2GDYYMVy87gbhu8b1ccSPpbau1RxoBSC8NCoYVGGh3BasoMEs4AekaiJNXMZ5wPn",
  "key24": "2TLtA6Z6ikvMp6fYMMTpEnoTjV8cG9h4UAT26ycV3NWoevHLfAWf11WdgbCEv6SGmh5szrf91nsivTGX789zYb5R",
  "key25": "2jymNRH5jnRMzxANqcR5LGWubAq1gz7ZAGj4QvU2eyczRpGahzdfpGzR8imGxU4FFPY7YHw5SWS3vW3Z7sVSfLgE",
  "key26": "cQ6GDi3Qpt5HKkVVhmBWCxTaLDyaAvnM7aVgTPG3y5uRzVgU4HVrDqnHaui71EFpqp9FmmEeb9nXvuXL43ZPfA7",
  "key27": "42qJVAwrVcoJij8iLWvvVhgJRENiyxMW6nkzMZe4zcz2bCFnxa1rAmxAQqp1JNG8FFaVwmHDi3DW4aVrVdmMw7vb",
  "key28": "3dbiy9ntXYSdoaamGxYz937tYR6i7BSJqZWK7VfzPpzLfYEeuuxXnVGfgatYNzizJTJbpzAcSv4B5budrQiYtnpW",
  "key29": "4GJQTQYP4kte9gf7qsrZP3eEFNzKiejH6q2reh47E5oywZJVnccCkfJ1Nq6a3Cn68xrTHieV1JScEwa5nuJ4XAUU",
  "key30": "rdbyz4neKWAnSKVX4yEp3MicBhSarKmT5dhk4MgxnLtXyqzSJAo8vdGpprH5psTa2HP8puMFm9LbxseJEL3RqVb",
  "key31": "3PSGKPSE3qKSkbckgNHranrJ6EUX15ewnKFvBQdfi3KD7SqyfBwgFHz7Suz5h8reJqHPE5sFnef19SHcvLb9qxVt"
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
