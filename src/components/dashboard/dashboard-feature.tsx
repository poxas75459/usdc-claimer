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
    "5dQJJgKWwXD8edK2p4cmkRroS41Fp19kC5Dwt4HKPTpPv5gy7e5wASwuiwnnoNCybSWaMqcpUiHp81hXh2JnhPXm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XCEvx7CiaAVGpbexjmR6eeMiC7LTzEpeVi11DcxD1TE4fmtYWdQk7z6khhZQPiVFeERG2h8m9FX7B5iahnYfvuK",
  "key1": "2L7hkH6Jk32MWCmRAnropjsdu9LgFDdtGGtZWpXaGZoW3AdxYtgoQpqR3sJ16VsahqhP8ZtDmhChbs1hyWMsZnmZ",
  "key2": "5M8nomhaRjFsYZ6pF3jr1cVk5yUTZtx7jatLeEUUmp1hJXayhpRjRVb59h44FMRFsQXTvb6H2iv9FFaPhV2kUC2p",
  "key3": "5dZ3f1Ft18QkaRH9KgSoyfZwW8sQeZpujNViKdipit8yTed7WNYbDA7TfpNNY9kj9jNsAUn2rcszuFTw64RqJVar",
  "key4": "3PsvTMvUfb7Z5twuLhQqdcSXJHFDZwTn9uaYmckiqBz3LFgAdbYPfGYL9uzugSzq22JtX51WzPvUU9nDCUYyr7aL",
  "key5": "3YwgFeUxtKZUiwBkhE8i31QNnSvUwQkoQzT61U7e8nhkWfW9eiZfUUYAqVsL1XaiiL99FLthr5MqJpz6tN7eaiuc",
  "key6": "4gh638DtxDchXvUYc8G4xRpsrDyJiCzboZs213MZ1ocuv1G6f319kGQzHgDZ78zA8e1uXS5e8EQragVaiVu9vW9E",
  "key7": "a5RtZeYiJCFyiBaqdfAZYEpNouECtmo4L5YVcbrrrhBpehWqWcLoj1ry63aEH4vwdmFQ8zkxee6vfnf6W87PhQC",
  "key8": "5LR9wToraWzytegybxGe9LqCarxYQWDoWHexo9u1XUThiazVuA37GGrt9rAwi5UMn5f9yHKBMCZ6jg6csHjtfyXG",
  "key9": "5Bq66g6XUYBhZRX8mXkuXG92UCSALc1J6qwZPJFP4n5xmh4cauvF5obPnrFB8tAnN4DCNrVFxa7S1heBn3vbn8q8",
  "key10": "xyX4nMhZvB43d9PFAUaYJER1ipxcj6xDThx7QAoRUGswqVTtX5MxXqv8vLxzh8yEKW4k6QjoyDZahUE9utZSDGq",
  "key11": "5Eb1Xp1mnJhsjSoskkjSRWFsqKFaSXLpG4ZPBkLpJ4uv67YqMWzDiUPgZsmzL6Z94cpBbeewJHMevJQ7NQu3Wjcq",
  "key12": "v4aATfntfkYR6RcmLMaxVVksivRN96FrgFhzzZMp3YDUb5t3NA9PPzcxoN8EVwN9CvwMn9AD8uUifpMiCfgjWTD",
  "key13": "2QoKy5cWZSkDfVnUaHk2e4mm9DwKnxdxb2qSByK36tWSUkFHd11FFbQ9k9mMAnyFbdQhNVyMVbtvwkH6sspqzdMx",
  "key14": "4yefKuf2wjrPar8e1Rz23WaFDFeRY2EkyPy7Nr5UeiRNxjfbDr4b7FJNwt1w6siZL7GjheQY8mv4MzUHhHETMXrQ",
  "key15": "56em9hsTxuP2T6jzAK3J17pE4CZMEyuVTR4KX21237bgYizgHNPfhDt48tC7knu6oDFXymXv1GhPj8QuK5uRqv6c",
  "key16": "5StgEPgQhsDb1KzMx5XLNDfqu2ShXLnQUFyJp4BVEFizFM5wY7GpCpK5styo9u7b1Nf7pB7ou96rZwAXaKPbSyFd",
  "key17": "3Re4kBfsPNZNgA1enNrQMwSpG8ti6ewyTmJvqqUWVEUfoxRADdiEjixee2qssZpPZrwypYAsAb3VgWNVcWspksRq",
  "key18": "67iytWAzCUA3RRNzbsJAH2qXhhFE56FB8RYXsQusweT1KU17a3NWHKvhYWBYM2zRjJk2u5q8ovrVvuQXvsQaps6y",
  "key19": "sXTWZzZAqqGcwfAVB6WQVAaV2j2wyguCD5jJQejDzjWZ2e4mHsxPMZmXnstsN8zCF9RFda1Wi5N59522e19REQX",
  "key20": "35XbVRQoLQjZz3tSZXVuVP9eAvRKm4a2sfdHCCpPLhsyqbaYVw6c58sNPfFTvJ7qF2jtfr3hKsxfEB78mEKQu8UN",
  "key21": "2ewpe3swLUNf8TYRLsaxMMkwFqLGr6VhXb7w8am9YR4YtF9dEwBZZU2xq43WbDJV4LD3mWW3wqVT8bzCqQk1Qx7c",
  "key22": "5wGr9Vx6KAr8hY3fTGM1nkrH6y3HxT78HtAy4ykm9ZSHtmp8gHcTPNgsGvz1Pgq5aANJUwMZrZdU2GgTonKTZAco",
  "key23": "3ZRPBKVuSddfpqsPNanuTM9vk8XuRajwwwkMUMeFkHAFpF6f3hFMz1dnHCgPZgKG4z6kpQmCmZUfK9qw6wZn12kK",
  "key24": "PrXB9vAx1eczmZ5Fg1iD8DSsuRMvkbVtGvAEMWzWdxnUWLqkFhpjS5XnBVBi1Lyg3i3m2FV5dA12n7KyipsSdGH",
  "key25": "Kdho1GgcKEeGGSEFyVVUgUMUZnbhX3gwnURtJBchjRcDT1mDRL5qCN7SXSVCiKs9pZd6s9s9yDkDof8hke91ndr"
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
