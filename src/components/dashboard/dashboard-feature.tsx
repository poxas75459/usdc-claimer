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
    "38NDf7VfvdnrfhM2GMePw68kwnoBJ46oHBfpanWMdAVGqvsWvze3TK5sJFUV4WrS3VT1EWLE45jjqWLKULTTvwqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51zYkPzKALRFhaj1M1Pt6GBWkVPQj7dPrVkhBpMRxxV9z9NWKyE59jrar5rn84tR4NihtpB1eFSd7fBwwZbeJ1c6",
  "key1": "3uxNmB7T5Hwo3y4JE5yMYftoaRbkUmKkxroHCijqWRSGR2hyD8cGCtcJ1ySQft5UG6zhF2tMm7xJnthVJ5KW5e9d",
  "key2": "48wEWu8QsVdvGuCHYRbQG6RL6Nqrvq4gPrwnUm7K9YYch2LxZaL3aEsGLDHsEwNWfMEqgTgKUUk7rzF8ZqrqkJRj",
  "key3": "5ndUrfvij3DevmH8246KggDn52NX9fM1CaXo9nUABBSf6Gae8K9gBaDgcWSg4neJAPKr2M63fNvuDnfweCzGZBuE",
  "key4": "5ypB9mWYNGtc7DHkfe893VGh6p7XQoLXsUegeRid3bcUyYMrWkjiBJnENfWMnpxLDJ6P21Cj8rpxBYuDpzkb8pSg",
  "key5": "3eRJpnKFAtmLY6bRRS9tLYoZ8M8DJn43MZhQbgYU3QJQMZk9vZwSYfQCCnnGUZsc77FEZZ84qMtPR95tzhofk6vb",
  "key6": "2KjYRjDbB2sys1uqxCTX3MYMjWtrcRGiUYg3Wmk83xYiPPeBpFNTfr2Qy6R49jmgjgStXutp9yNK5svFENeUvxTZ",
  "key7": "4nCyV5rV5xK3i8h1qmYDReiByWNxkpp5Sxrv7pcsykuUnjXJ44DcfdNt4KhFhMaArEU5JddrF9izKpwnMv2oL98V",
  "key8": "3rKdA3wYmA96hFhVJkcXTQa9VixiTNVG2ZJfTtrPTroq3i1PKaj7FwBrcd6jgCe6MKMzwDxDoEuLtxz9P4PX4k9p",
  "key9": "Wq1837KGZiajnj8MaTQGLyBVz15bhJ6KDUunVAnAQVYdDuerNxTZqMFTFYBtjDcu8tcPF4bcaJMhPNpTzZMMmLd",
  "key10": "2TB8VRGdsiH8ixwtaZorGqEVHQTfe9VEXqmvZ92hBHG27pkfBpijegE6dNgr5kkiwF6UmG2WV9tyxMintewcRGK7",
  "key11": "3YULLvAyHpJ8CutL4nYPeRdNoJN56kTowZNQZiuhjwt9pma4YokyQKqBJVipqYcoFhLi9Bxw3LVE9dpTwnLwZPaf",
  "key12": "4rnd9o5a2tyaSnkio2wMaefgbQs8t68ZidaS1trvqngHhHTBb5NzYF1qmJqGsgCEAUMPpgAJc5tTUPQGoqNUPEKi",
  "key13": "492HFtCsmAaFA54DEZgTLkpx5AB6hx5GPHr86sRDp7Rw555yenfLYorgcKM4he1yFgeeK2zzhyAoiYy8c8141Kv8",
  "key14": "3FHyLF3E4SeZ6z2AAv1nyeyu6JeTsBBNjQR6GAtcuvck9EJbQ4TVSiBRe3qvryHJU8f6sJ6PGzAgDzu9wK84rLrE",
  "key15": "5NjadBYHhRdvRwwDGvju2swmzxZ2TJyTyxgTFmVy73MvwLNJuvf2xN37TQMJhFMzpQh4h4eW8AFHuDbN99UmpD6e",
  "key16": "2Mqkib9uq8PKPCmpwxXaLSyxfnxg2egcBNkwv1WwMDbyaBWrt3SHT7QymumPnba8tRTVQJ1e4f9DeL3Vsip712Sr",
  "key17": "5eYt1jC9WJsb15D4SKwr8bBEngQC8z8R1VFvJiVhK7jndzsLCvByfkJZHHD36yEtx7pRhYhyL2asEnQ8F2ZufNbf",
  "key18": "2xugbPghTCzzjK8LMEz2kw2yjMMzyB7xUrvC5gQ7Fczd5x6YL29oEnyRPWs59m5iWkSyVWcGBYJdKfhLemzGkLd7",
  "key19": "54Rgu3DvZVtWwDHeUkWYNFoPntUTEnMCXJwsFVxBdqvoVhjXRcRhdqXd1gecfPbqRxCPcy3JKA8k23zTXcsCSUfA",
  "key20": "3UonQTV7LkRYRjwfdgPRKM5H7QRidYLf8qgkD8csCtnyP2mMj3B3twysWzVTTamBK2ALNqzq3L4MocrbjiTvq7Ub",
  "key21": "41A8m3kD9XmuoBUHoXfvDX3svtxPWdEY1RShn19MhgJCfeTCf1YZFQhuHDY1vbVCrktutsk5Jrj3vYaxMr1JaXiu",
  "key22": "2LUt9G7rKmgcsqVPaygw9L2YF571p8XtVCsfTDVZw49GWLTbNWSqPUxPreE1FqwmhQV34WadRUucTKpzUKqcgaF2",
  "key23": "48xUsNPymURmX4Y4SN1mmQTZFd4fkvRANn7vqHViXs6DcXTJorfGtq1GWHgEJrjKtF6oVEpbjoxDAzgajxYDvS2r",
  "key24": "3C6PZeVngSWdREGNfMFXZqVScyQexkj9qvFqKfJSZjTEcancWwgkVaMyuwkuFK1qHtFVPDZp3Hfnn5e51dgpNUYq",
  "key25": "4qzJiuU7mJZzQeBynXBtmQtRUbTnq3gQU9vny4mjX9JJbwE3jRt2rDw9NojJgfiWv1wJdUmdS9kifQVVhAkwe6eR",
  "key26": "3h7rnLGiAkBkfqGV5qBZ76qKTQ8nYPg9zUPYp2TgiEnCT4YguHgi58jbxU9oDV9dwmkMFHdGygbkN3S5WBWHjr9w"
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
