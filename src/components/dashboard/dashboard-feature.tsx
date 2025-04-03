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
    "3ZBfeYWwZtQU91FM8U8F8V2B5KvVUb8D2Rnyhv5hS7U1V5j5tyS2CdonDGAbhFufBK8uRqak9ZbjfLRMhHBxyAEF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p9ENAK3iSuKBjAjRCyYZQsRvJZQdd5TChEZhLx4jjRT9sVrA9gnN8XbgnFC622q6YJ3hJeDJpguGiYZeoQynbiq",
  "key1": "3D73B5qHwt2Ccw3N91TTgGCQa8bpFPHVh5yQMRXBPeEP3fJw2Ae9fB7T16YSe4aBhhCEVHP1d1hDRYrvFuophBnd",
  "key2": "3SVUr3B4tWPKoDGPSN3tkJHu3V6T37YKPFoVPY5N57UnDfhnRKuUdfbVgVUEEYET9ecP6M2mho5gH66HdFLp7bLh",
  "key3": "4ZZzqQr6cypLh74wKQHxfocsF7myvE4xVurFngU3vchkzmoTT1U3bwgKaWdWHcnDF9n341JTXH69bwaQtLgZRukT",
  "key4": "5hfvXYDnEqhwZbt7kmz92UXYkRWR8xoqYC8zm88yet6g1jhs2yZN8A4WWE1fyeyp5sLjnurEZmSGra7F2C7DAJ6g",
  "key5": "3RD5v2EJV4cqJ8UnUfWHdUVddXoCCeeGThTZpKG84yi6V21aaPPNja3hvdMw2AoYodod2Y83NjoJBvFGnBSvG9Ut",
  "key6": "3i4Y2KALoDHXq8XTaQQCAfZKsFVMGP7GjhybbWWfWB9ZeM1KaT1gMFCs3eo6S9CiUAoYzRuAh6isV94ZrQagZGrp",
  "key7": "5xbuJ76eJZhkAJBrPMk6tzTvnozYemWZof89oc43QVoper3A8wXz7uxrZsy5ypRgxtUUawwuBa5gNAzJG8noCLJH",
  "key8": "26TxJJmvbYLCMXmEvkiRVZMPCDjJNVzLzZf16hAkKALccbMChmqya6UP8Mx9HVT3ZLnmBf5LL1RGs8kbLTtjVxXc",
  "key9": "4Yw1KS9VtdZvAsATgshKfEmYaNbFpgCUTa3rQfYhorkZa2jt35twGk7DrGDHVxSnXwiw4tqiLe1jQLegmonSxZfh",
  "key10": "G1WvJjQki5V2sRVkNutijjEk1kgrZ4MCHGxiwAwUdQwciXeiW3UFRsU2kitgmwawPegqwJTkNC5whHz9MiN7iAK",
  "key11": "BDH2zLdEVi5SMECFLP3oS5QjBxsSgmA6jEKwnjXMMsHhvf2sqY1hRQJCWUgnTRobFMEYXKWZvfV6nXtJqTdYHbj",
  "key12": "2gSaNFbsyvj4b2vuUda64JUkivRNgYwvUbhEWNXyF5BbSVyFQvRkr1MZBd4aRmkZtNp9FyYGQUZmZXsRf9kscXmx",
  "key13": "2HAgLJpgk2KV95Mo51QWsMG5aWZ8WjbFTJ8VAkEqxqqWEgJf7on5Av7HTDXKVL5d7KhfsRUsdH8Gyo6RH1QDnrYq",
  "key14": "rQ61gwXnPsBDK3pnEACvDUokVp6pWATnouPuXra9WYjMsWbFdjr5jxWMbkK49b5Uq83SPGLFhYjxa75DqcuiU79",
  "key15": "Bg5mcrM2KKn1JKeu9YGfxoXdXMJexiSzN4bMnraadhr7Cr1tvH3vEBGd5GBNj2B9gZMeCsWap8pRowSCQPgkxzM",
  "key16": "62iF5cTeRGctCEs5jUrJw1icE488ZKMM2bid3ujP2CqgygjSay966KD7BFzAeBYGpaBdGY9tEFDgUkFZNZKjHLh1",
  "key17": "3d6NEG1FFZxgGCy4xEgLRMxPPAY1uYcav3ddLnzTPBTnp8TNnAyVniWoSUFLQHriK1JXip2S1dxGfT8pNNnVk4cc",
  "key18": "2c7uqjW9ubid4bd5V5vSWGrLGdHwZ3XBnZDoeN2eAASyTronrzpz8LjVumFiqqUct4afrMP77zwTjTtuYmu5roDT",
  "key19": "3gbeBvUgt5Go4MYvxYHb2CFdQHw8z88FCyVDPtyRCD5n3SLey1BqXYuGV11x2bpTCcEDa7QchRa1fv2nd1pz9Xcv",
  "key20": "2guYWV6TuEnwsUrPHWqWGfpPbjPMfs1XmgYUc4RqsKVGpvyAuPd3kMjWQn7SehBJNniycJWjzWqU6EXBxAk2pdgf",
  "key21": "5m2vZ3DLMDTPEqGtrwPv4aQihCApNMW2mhKinH7992AGN1RW3KjLN3SS1d1SxS9vBvsz4kwq2oDBCkVfiWPGrWkB",
  "key22": "3Lv1S2MUEbkMFdjaQzaguBWqRgVW9eTNhBLZGQyRGVN6KhXz4FjssVqsmhY6wbQgkce1uqQHFh9kXrQMqw6fWw7L",
  "key23": "3m2D89hGoMH7eqcQQuDV4cG2KchQzjyv7DhwJogmh7UmhZiv6Hj1rSgbj1YeYw5tmBv9Unus9ZYLG4Dhd5ASTLej",
  "key24": "5snUqG9n2PJ5kbSKZkKUWfDxAXcQdeJMcLrfXczQdhr76rdWVYojfASdi7aDw55MxtcmJuy3ZrxNJCqz11CU56bf",
  "key25": "5CpVjXosEDBpCBCrsum4JtCmctWUTrNjEwG7QV6VEBBET3TTzvZw9TpkQtMBCDNweiNutQWZuTo1C1r7V62f2C3R",
  "key26": "4FD5Y42f5w7XLbnW9Mvxkqsy5i8yAe99ShsrEvwn9KeYbmbAR3EdCJiv8HdjmqdEFaSNqDAhdC4vWVBf5Bo6NEXC"
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
