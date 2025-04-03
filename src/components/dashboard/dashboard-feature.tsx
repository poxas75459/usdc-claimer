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
    "2v6GGSLdwZFbZG5E4mBaU7G1G7336j9bawSaER6sQvMg1gBrzGgtA8reEEbXWRgHDG6fTcdrNC2YNRq625b96UYA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qgr28uPH29N7p2qwKuckYozpYSs6rjnWnMw6KX125XV8xW1ejhxTnn86nXGGXGPEj916Zts99ZoNrwgq6EUSpXp",
  "key1": "4CXZJVJXaoQ7rEd49uNdfQGoDm4dQUjDP4twRbtFBHkfcr11zeVtggLnmtLBmtNNam1V3dj31MpmkZPn6UTpjTfx",
  "key2": "3CdzxGxjxMoX5ECJG12wb3Bf6xLPStSsjZZwiiCJcxrVWVzP1WKY9oHRTjKi7NALcY9AA3h8nLVCyE9BziauFLw9",
  "key3": "5PCEHHTUge2UJ9XNp8rdC8ZmVAHEuFJdgnyNkMJZhExNhX1aw2BHwwwcDi5qmkDkmKDnuUceLJxu4aa8qLUsGDY3",
  "key4": "oHZjGAUn9V8zqVUZWf7pcqjJFAD7diAF2x3Ru3TZw9T4bKgf2LB2zJBgQodwZhtaeaJmLQcDYhukitKQpm9mLoW",
  "key5": "284hovFWiix9TaM5wtpzEJfGSZvRSN9GRZxH1sw5WXre2k796XeUZC6ky8ccRnvgvvKzwWJoC6SeZ9eXp6Ts4sCE",
  "key6": "4G6ZEHrGzDaADZ8DUoJWDdzFGZPqKkqEPqGd9DKTcnzr9VW79m4vEu9mWGAyGtceRxVgEpzptJjoFr7GXHekS2tE",
  "key7": "2ZTcgwuycoLrhrV7JjnJkHMdjS1shXrwgyvPyoVu187w5V3fQDWMDMcWXGoS1xL2FyyvTp59Xrz8TabW4ZpMyTe7",
  "key8": "2Q81ygvWj8UpbHFkGRz7VLrAXYduZkqT2mP4faDqcdTZyHWPj3KtqDNmZsWULz9p3BxrD1aPmQ2RxjxMV6Le5njp",
  "key9": "3MczyfAHf9TP3h8FRZQPUAYf2USxLjz26DxT4Kaeso8cHadxmgu2QkTxrqSKosQFgr5eb75cVVs2erxG62FYAKcM",
  "key10": "L7e8ESzi528PNFj1z1LF139qWVt6gD2BXFHMh2jWEZfvSJJ7knxidUgWzg1rrmceZ8wv6YkmFvea3dUNnJEvgCh",
  "key11": "aUt1Z4QqYtJUp8Jj9eUFdgiVfMWrrkFbZ4S2mHBWCmyJzdE6p4R8hgCVvSsC7tSLDfYPaUiD2AXEYVKbzuRkbRg",
  "key12": "2DfHenjcbhnBaXQaktssgoNSchTGaceqczFr77S5S4QJHAgUw7Fz7VgRQBxPfK5YJah6xpHU355uorPeSKjm81m",
  "key13": "3PbWyd8BKgaL5h9UvnnRKUAi9pLa3cbrvpknF4uYHnmGAtzapENnt3TryhBzMqyNxk6ugjn56raQaXhAtdmYbaVH",
  "key14": "27urDczBo5nyQsmz26AkYQagMFWpfozjFD5DUstFif9kBryZ4UYHMWGTRoiZP6g7br83Qzej1qd6vtc2qhzYrJD5",
  "key15": "DUVSpLAp7hqVMyCCC4DmtXmjrCCZSn3KesHqBhqVFUQv49WDrHxtm9QrvvehLU29P4tiNxNh1wJJtJDN8UFnsvb",
  "key16": "31zUmGhXiaj7b99U6hT2RZSf9FWatpveQFeGfdnjkV1jtoUWpQPCVHmEYKvaYDF16Y14PUUWaQeEteAt4GbDvrKX",
  "key17": "xFtnMypcn824qYA5CTDQ2pev9Q3MjFGBMx6GwwiiAS5F6suA6NyBGCKbYPmwB78Y7eXonjPBpnFySTxwQFBo8UM",
  "key18": "2ji4h6oyEsmAyU1Mwr9vsoGLAbwUPkiJge1wmionS7JVuPrzAFyWC8iBKCPFRnVTWJFwNc6tEMgo6GhYnzxTfaSa",
  "key19": "2oepLQzAuDg6rT2yVt3RDZ414EWi845pZ7KUDyKKFaC6Bj86e3LzVqPSoTcebs9tRU7vavC4MmE4zH5AvrjVfKRT",
  "key20": "47HfDj1PinVA5gHGmTA5ynpToCbDoskszFqJPLM8MHfCWyoZ7YiUn6vmgwGj6pym62FL54t973jNFBwHUVfE4XFG",
  "key21": "ATytpZ3piqGbqkyLRbbY6NLY5kw1pEUUDQyrxMWSMmJSSsiHndL6AQNY8F1zBErM8qDg61AtjidccW46Jb9vtbm",
  "key22": "55YXHF3y3scFnCKSJdMUhc7HqcGaTL1uE3bmX885Kn2F7Dd2W8tFsQwJXjt3dSJxprgssCJGDLKDtKqQxhvPAu4F",
  "key23": "sphs2pjKH9CJ597fSr3qvxCHfQkvtsGpAccz8aniSgmETYRwfLKa5p3MKkjVs3EENRrDgYZaqu4Qz3WQ6JFwy5s",
  "key24": "5R4WUxtF2nATXEoxphgjQwQ9dmBZLp7zFYBkuKi2uMjwxd49TNnm3ikWqNbyupdPwUhQZdE54RzAM6D4vEsueYoW",
  "key25": "2LMY5oi9xCBWPAeSFKwYzJuCHceX9xGMQFmpCGFGMvc8xDBHg7kL9voi3Uwp9FnHicKFQ3WoYjE7zYGHd6mGXWsi"
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
