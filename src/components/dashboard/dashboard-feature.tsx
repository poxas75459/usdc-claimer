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
    "86Td6wx4wEAZZ8X3uFSnrTt1fEGB5T98QSAJhjdogUatS7dBNcZY8QqGAt9L6wL1nfmJqQ7ck3b8LufGrFiuwgS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yVtMcaJSzGDJTTHnpMbdMb4pj1QCmX4tnvTsUPvWryazMZD3AHfQLabwZqyXJiP84ofgVwCxLqx3bLqTPAa2PJ",
  "key1": "3vbG9e4pVj2Zp7vhpzryQrzhwPbqiP2yn2YKCEgSmBzE7uhZFnUDSEsBSs2fTEGCy9srKv3fPHwfF8BS5BwQm1Vh",
  "key2": "5nWbCX3Xr4kStc3nKKQdU2iwjgJsKyDqPzXr52TuqwoCJhBmfpwM4FczKRxPj3mbPcnfZcEG3mBh6kbu4UY6TAvp",
  "key3": "5SCHkMMxP9ULXWgSpkoVsM4dEZq5N73NttBKTsydmhjYoWRhMtijfa7gXRZeQUrad7QQzXcbJYd3o9wc69sXUHSJ",
  "key4": "43nfXz8ZbvX4erFtVTY23B4JT1DTcfpQWsgbPw2aRo1hnZUYimNS8m6UiSSXiXqaHwWR84cr216ct3xeJQCw4QEe",
  "key5": "3DPk9je77FyjBFhhQGaN2iKvwXJMxKNzCF9q9431HufwwTNM22Sy1wwRHBhqSPwYVpRFPnSsnUTarf3hXM7RWkBb",
  "key6": "p5u6uqKpK3uaZ2XLsaMcQ1qw3163fK9Yc1y8aosT7MxS5DBsafMyUcRqpMZzjgC3zFQD8udmngUjAy8EAkuNaUh",
  "key7": "4sigSuAGbPcdtvJSEvLJnjveuicmkVCAYpjzFvHcfeREqfMPLpTbBPqrQ5psK9VGX5BxeaE6wCis3XXYsuSNht7f",
  "key8": "5UA6do3KqqngnHtkEks1Yc3JxQdfXB7qYqdQHW6dHXsHFVb7z61WDPA1Y1NswMvQGiBQBBZFsbANX7yMStwij9Zm",
  "key9": "64MhFfU2SVChwKsWacbkLf9yG5GPqGP8bqNBf6Cj5c8qrr2ZJ2sbB4C4VSeMdUxNmxNkAzWpfqYvHEZxabYcaziM",
  "key10": "2njBrJ6NoXvV8umufpZKsAkSqyc125qNtChZSUHKzFZJpCshcZTGiVUJPuNEQ8uNxpNwcsZH6HQ883oxk4E9w19s",
  "key11": "4PAvn2QxoQX9WHEJeBP8R87kpgwRsTdpf9RWLNisjzWmXa3kJEXpGB6Q9NET5Zfud6bxK19rRp6BvvE9iivHvruA",
  "key12": "2jLV1dn8hrTp5t3UhCSaZgwhDjsZ7b3SdAsiVjNnPVZGWXFCoJd11BvgSgcBi2oDPgpoty5dqAM91UTyfjGk9xXH",
  "key13": "3QmwbWic2oz9v44AhUnEZrWeTH66tqqdqYvZYKm7kajXjiKoJXcqmLSr77eP3Hxk23h3Rz3at36dKh65zsDo5yp9",
  "key14": "HbWXccfqB8CdoDdh3NZ3o1ex7N3ocd6FsK3RskEcWvo5j9mS7QAKRP2GvtxXwfM56L61xRoFDJoJCJ3UUNoWtsB",
  "key15": "5HUQYEtoXGwXki9BRfkT6aicf7KZThPuqgFvPpf1qw53mihi4THQJZz8k7Mf2wZNCMNGCcGzHrotDvSC8cwZLPrc",
  "key16": "4XK8eqppTsYzaB3dVi3s6ct38FRAoA17jKSinDvswKraMWi6zLN3rWdFw9FF6fWHKtZut9ZZBpihtWLTB76711B8",
  "key17": "h5NDZ2UqaBbPkdub75bcYVuwn19iqYestuu1cMNioA91sje96ovqjyUVH63tuVMUuTxAiqvYmQSgeRV7iMBQouf",
  "key18": "5RrEUSJ1L3eCXuqqRFNByC3phJtiBJRTzHhQtV5cPC4hoLa95hrZjDxnhWivhstepRn66VA39GZzPNUk4YuVw8aj",
  "key19": "3ednLPDbMcczvdRPh6wNwVvFuKdizkEY8zLhiFxatHVADbVrNtKaECWuK5gSXQbcHZ3SnCReMNjjqaEiyRPHq3vF",
  "key20": "2DYBfyUurCCR1FjZwxhmGJbK7F8t66qGbzEtVoujQAXGiBzQJyj49MHf6KMPuxjKN8NczuMonAn1G1vkVkyQdbQ2",
  "key21": "36iRUMnSthgfSS4wZvQtZ8sVo3B8CznmjiVF4LbxCqm9rTnzjnDNsNtNGcLrwrE3ZjUovQ7YESmQDiwJ28oZ9WVv",
  "key22": "2QDdyoXTE3CR6fXEBhgqgGTMW5ET6cRPAz4kEZt7XgZTAYj4217PMRDuWPgDqchcSFSncoYWirSYHiWubfWZdWED",
  "key23": "2oxtjyWRz8WZ7bP3M8mLbYbDD33SC2fq6cDzSDwSE1Cetvzk5B4Nwb25wxDLHtfCiKR6z2w6KXesiJQDqvRcgPEd",
  "key24": "5i4iHBdPaGyXXXim9xi1NULn8FzsC1yqX9rFNHmQDHSee742KtrrZjkof9xLWipYRKrpgmwdbTKsBvi7VaXpqmMk",
  "key25": "5uUrb5qRxsDi36GNZocJABeBPDdJFbSMyw748ud2rV93yeCFP6SkJwL9Zg5tSjyQXyQT5t7jrPjh2pZ7yZSWkyQs",
  "key26": "jaL1AeuoyssFajZGwLDreXgtNH9xxu4E3gSHc4jUV58HgNUwaT2zQWd2Bvwj1nPdwuxfCRxjSeRE7hKSCKuHhmi",
  "key27": "3o7mfBLUzKMppmDZPL3553bvBagStAM7XAvPbpXegHGChPTUB9gYLbMDjnGQgnrW6JC9gKKiNn92sVG7P85P8aVi",
  "key28": "dh6w8Xa2FwXrfLwfVZsecvWcNiyPyKU6poSeXQtoq5QUN221mcFZLEpiZk5Ar7DFMPwJ4jUezyGkJ59hEdo313D",
  "key29": "5ovHUzw96SsEBnjdtjYBhimhP4Z9ZbiQx8CNVjRm7sQG6RGXa7MvYj6bVL5i6no369MKYpTcmEGL71TCpgy2o9Mi",
  "key30": "5gYNKcYtTJSeUb4oXBBTTFtZHD3W4CrgRA2JadimL4uQ2gDjHtaqXE7NSrcZWGCrPnUbrUa7ZL2GLALmNUVX3pdH",
  "key31": "3JrSSyRQRDbc1EcCUErcAaUgwRhTdPdpYUy28APSzffEJw7HH14fFBcfK9kMvY7YBH5DCR3ssTTBGB3M1r3hvfUc",
  "key32": "hKwXnNLAg9eYvHHguMJpFR2yig2VPCkVw4WeUWge9FM3ptp1AwAxeA2kvxrmfotYyLtNg9yoKSWGzGCETrYJuuv"
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
