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
    "5wVmBcTaowq3DLVsFnCDBkMUi1Xh8vNkMV4tqtbitTWWfcj4mEPRNicz7cbhsQZG6vfBYyWivqDqCx1JZiaYdjyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YzDtqjK6UAEPigwobDXRDYRynACDwianrX5wRWvc8txPXBwSUNY8qudrh41oQr8PmtGUJgzCFATZKdzL7ZuR9tK",
  "key1": "4kX3ewAHNvNtDAPe139ua6SFi8JjUekvrJVDcKmQqNrrG6f7cXTZBvHSHicXdHQiK5wAQoT7vU1MGMycVUzpetLt",
  "key2": "azxd2fqmzwK1MXgor7YB96NtLcNhAq8Py7BhdwXaAXpKWoJtgvQNArBtHehBGVeXuRbMSzErSiPXtwu3uRSfPNY",
  "key3": "4PNtRjX1pmdZ9PbbovBseuzQPY1VVgjaLBcYC1uwAqXVgawiwmjfTY343GtRNVX5um8FK9kaak4ky5FAW95SgNqb",
  "key4": "3xorF7ZVa5cUTY2WszB7PyqAo6fVS3eYeVg24XvdAGqgAWorZEwhyTeYmvToQWf5KBpYYHPMhjAxdxAGXzz2JJoZ",
  "key5": "5KgthCWfoSKfeQmJmrV31ua3fh65LqYTjngJcb4CY1AvfgG38mEA1w3mUXKg74X2niEjwzC5Dsqzriz7VNSisTy3",
  "key6": "4estKMtj1vh8Apih7F9N6pupNcwtNVbDQxp4pE2R8TdrFKmAxUrcWeNBkWp7ervdLqZUsWk6tuu5nrSbbi2fLV4N",
  "key7": "4oFz4hEKpbEspC87jn2gJ6T4Jmbvcb4naSzWnD6FxogpU64h6AsehNj3AMbKDPuTCjHdao3d6DS2mqbLjpTdauQS",
  "key8": "5ytHb9avxyKTTdf9CaM4SAK7mw9XWTZ2N4Ur51dX8KJWA9nMtDM9v1JT2XvRnEiybF4x16Ny1PU9h3HpHzVonXNa",
  "key9": "5AZX3E7GGxCp7ntgRiVuXc2jvHbWx2CXhhZ7RLmzRN82Femrxzy1CUkYZvoiW3zUnJ9iZXKkC6jxegg1ERQ4SUFn",
  "key10": "3soL1mby5woFCk2zcXjtPa9vUzQFCa1PPxSKgLekxuVjxYdTtjr6G4gHHRbG2RxV2pDHWxXGJbFG63P2ButsNmx5",
  "key11": "9fiWuogcyta6fetnyts8sJyTuR3VzsgU5STpmyD5J7oWiwUpVbNq7DRmh1mSSaEWuKvDRrxchLNJPMoveHcVNJT",
  "key12": "4XtaKADbF2S7QG3uNBvyNFxy9nymveKoPzNZhBWAyeRjFUf6b3NnwaMptRLeo2iJWN8L9jA7Y9Z9v9Fh1qWBgfvz",
  "key13": "5hAN8BwnjAUntEHzMmKgpzWthP156nUsHCYRGEUa7rGEXQMh12HEwhQ7DeY57kAM2ukm1Mkepg6KTZQbQxNnypWj",
  "key14": "ctUnSw3Snb92XgzTuGC88cKKb9W5L9u49WAjRcDK4PfV3cz9EfjB8nuLGESywDrsNGYGS1jUjXdLskd2ETkJfZN",
  "key15": "3r4GHgQCh2298Gfe1B4foBXe77vStgCojy1x5CkWwNZHZNjCG45mwLJCSoJDxemRNV7WTRwwUv5pigvzWvWwDm5t",
  "key16": "8hjiEJpMHFQRo5t4LUA4qCKzHkeXKLJaRHL6haK6ifokKYcZ3sa7XvjWWDcQ7rbZyEAyhWXuUWsWRpMXSM9UTGH",
  "key17": "5uvdsTtCEnHvwSbgGaRM72F6Gnw5bLHELFi31ghScgrSCL5NM5e7ND1TbFgqBR8p2ctXEPrJi9maonAtWGRNmfbc",
  "key18": "4ux5LGrwWjGH6NLTxY2YzZvCu5cU6HGVikncwSUEnxtAbpTgpMPi2ZasrM3s5kweSeWj5iZXsJqPvi5SiQYuviGV",
  "key19": "27eWRT1KZzQM4b4twrrLNwCoYwj4Vb8wfVXTw5NEdEXuS9Zto56zm2Eo13eRPJF6Js8u9sC6JvYFAtZviRTi9fqd",
  "key20": "5uggYsFb9h4FUcTPVymeQn6YmcTAZot7P7iZxdFsY3gsKpHLhD9HLtPyBfn54xZ72AoK4E8goYxc7jASuQPtAQii",
  "key21": "cZ7BvWJv9iN8HZVf7gw4SayooG2jtBwjA61S4MRSvMTNJA6MiiRkx93k3TWMKpuAHCjywLuAPs53nmPZDfYwwx2",
  "key22": "38ViWsfUPHEEdHMqEqT8amhBW1jNdKHtPEPrCHrnECsTnqq7i3wDyCAdaUSGHtHVwnN2MUdAbNcMyZLN9nJsdn7u",
  "key23": "sjzKtx9ZC3pGHcWz6tMZrdoTgpznCcxX4rEeQEzDD9rGRaDLps6RGU7GK9rrBGqSX4qnvetg7xwKMiMXEf5ujE4",
  "key24": "4QddnaFC3Ye9LvYn36nZMQ1sYVsb1XFUW1b9m8Nhge2RckXZEGvBaATuTmDrTrE1tnhB6CnQasrCduRU75HkiKXi",
  "key25": "431C4s2Gq1aEuV8RJPePTyvJvQzd5yEgaqjA3MFahTVKQokTSAco2sTCakZUv4XQGoiv43ARxU2N7gQWLp88d13H",
  "key26": "26pBv148Rw8rfRAXXArvyL5LBf2fw9XbYMCFvNv5cXpqewE8wv7PjTH9jAk71DvtbDQKeJctu6d2wh3KCnWe7w6W",
  "key27": "2EMkjfqSfGV9WHeoUm4S3vQDSyvhrQ1KXLYf76VtFkVvh9nDN2MWVyLt5AVUVzuZKQoU6V3Da8cdj7z4fQzcr99f",
  "key28": "2Qrw9TXNfARmJ8DtatxNiKDCDv4RW5mmWR9T3hJTr4hhfzw7YtRHhB7qdBh7XzsdMnxHSbeKoBwRHQwtFknqRxEd",
  "key29": "3xetsfAij3NHTp6wjvG5PaUdagF3WvNaj5N77vpVDud7BDWvjZc9nqHpmxncFzVFAfoMEQvHw59SAt5nE6nU52Yn",
  "key30": "2o5obrxK1Dk1okSHxEC7BGZ5EVUnmJwZkHi6d1EJcJZUi3p6cMske1rchuUB5Z7DBecUqoZS5GGJUbzAMkWSuTdB",
  "key31": "pGiut4KJoifb9xBX656JVXcBxcRP1L91RS5kMQVP4VGsjCgPYiVG7YPmLG7JZwupHPu5ZPb5jSYtpeR6i4EsUk4",
  "key32": "3NfChEa7kiCd1CBrTs9j43G9Kqp4GUkYQo4Jw25ehQotSUdY1W35AbvnoptDvdZ38DTtYQpf1RviWDiirT3yXA2a",
  "key33": "2a2zjZQTcEhKLe61a1WTDCNKYtjBTFcidZpHpPqk6Q6CnFxf1D73pDYw4iqsU2ZLnUY4UzG3azFGRvV4tHyDqTQz",
  "key34": "312X59n5YBRHZZbJPff5t9bLmfz1gZGHBu6qR98HdRaJJpVdXG6Fr64SZJ7ZzZp6zfSEFprYegMdsRj4KcxDiCdF",
  "key35": "31fTtNCJF13xJJDEg8zkWmZMTc3tGm1GEbeB6xCZVZd61V1PzpYHxnVfEEYbe5t2GAc22vFJADZos2GMJ1m1tF1R",
  "key36": "5jqZFT3ai8NCwE5SChnoBGnvjKG5i5HHez7muo1o2ddp1eqRpQfXm35XNhF19PaEZbnuD9iRq9Ne7GKAyskivo62",
  "key37": "4VFRtG7mAYuHCrhJBcndER7rQt5e2S61EVpW775Gu91dzbsuHzuKK3snhkqPpAn9SHNHsMrpcGt7HnxhTjTQrC3U",
  "key38": "2GXdZ2Gvp2YvuxdxtgaVTfkMmGjXTCHQBJjq7npY9BCXTPxyC38e7EBaATJK2QUPJ9NLkYWu9izypZAGRLjbZxXB",
  "key39": "4YhJzzmh8SS2R3TDvjzEvyajR9GuhFpNPRRwzzhJMEVBb1YkSHzAAtX5eoumf8S3Hd6uqGRzbWxUsep5LekYrkov",
  "key40": "5XbzgMMbJscuD6HDh2wSrc4CZ7AH4tKnDd4VesNNBEB1QkKAyAaGud98jQNU4FBAmBU14fYhixFSocwtKYi9JK86",
  "key41": "3jfr7uByzsjVdFU8HvmRcM6if9gxbHsVvFgzh9RDJJny9KyHae5AabERAPEpmQKBeN9ke68bVjGYbrih5AznKtXm",
  "key42": "2A9vWua9T5MRpy3yK6kYHqK1eBSjQPJbnSjV5nmZnBPK8SxTjMbTfs1MA2NBUN9GewrnHihCe4zYz8ussuJzW8uE"
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
