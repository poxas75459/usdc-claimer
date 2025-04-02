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
    "4X3j56y1aJEVJUoiDUrxCFB1v557rnzCzBaF9eRyriY28gM8oDA61kR6m5S6jWkXLEBuXvNbk1qz6CdGet8hcQno"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AcpZRZUSJE14XoETB5pHRWgzDAyrwuW6UTFtmdh7XjDF6bUsSFswMQHVpNNMRuX7JeYyJ5qkZN82m6oGi15hgHb",
  "key1": "4kKViV3EVo44YW598Crp2YWozat9xK7bDJ58MGhYW9h6ggsLmxojyfUhBGk8nDMtBcxhyaneP3V1KkMz5J7rv4jJ",
  "key2": "BLpK2ivbJFVEtTT4Tgbqi9rYYZshx1sqRv2fevoVgz74D4pEKcT4N5p8Z1KTzee8yzRAfGLCwRVhzQWoZQ8tRY2",
  "key3": "3yqKVrGfXTGccrcrN7XqNrU7GuDZqXUb4r7V9vA29DVtE3yQZbm2uLer14XVDaG5NAphCScXHKwcc7GP2qrbCtno",
  "key4": "5JDr4VUBoMbb61VbuyBQeTSmVa8yPYbtnQhEQF58XhmXb1Z9dcwMLhd1167Hxf4AANHvpRBrAx7Y2FwjWurvToXU",
  "key5": "4FJTzfHWFZTgCswdKnh8KrUdeY7rDCHHbZSa2aiNJkNqXEPhsvz5BviMCRzounNUcaPodSqkpqs3yMgwrpW3rdQv",
  "key6": "NP2qBmydN5kyQ8x7R8p3C3pTkKSaJmJYYwCuD8xCBmZJAtUpem5BN9EaurU7JWJvVTjVAJePk8R4cAuHdLKFJis",
  "key7": "3CFaPscnT5oQjs2wxVW6VEDvbZ5nffq1BYdeFsLa3bSdKPBTqjsPt9eTEd4WtPsAp6mE4xGhB9yrEuexB3nuxcpU",
  "key8": "HAdcB8PCoLgBBcfWEkSLU2GAJXbYP4TcTeUCnjKcFyM9kGLGvmvFJ6pbF3C82zjuoMCde6BZ746eMTFXMeHRUiG",
  "key9": "2kRVevV2DJ7EmWPB7pT97Jtf7Pd6puaCuGRhBRQvM9XmYiMrjxmCzbirpFTr7dKEiwmpr4sYSnVM3p8w3pPuHXQm",
  "key10": "5VruavSc632sQJXWMDNRG5E9U9LRuFSrrgoHKZyWdZwUZDYFrbLjodjJXPJUenpgXyvMeUHFMkyzHQEBXMCNd2Hj",
  "key11": "5Gwok1aDoQ51E7cT7LVpjyHmQxXX4suhfcbFmyuqF6iJo95LZyEvdn8rJEM9UtH9NhKYRE5nXwFi8GDNmmUqSQ69",
  "key12": "42jdTNF5q4Ue4u7hBDQkKhrFXcco2E6qfzKxNxp5KKtRfPXNQycRuSYiHPfRy2axqFvRduRN7Rwa9FMc5ovA3fy7",
  "key13": "2quZBLAYTySniGkt8wgw2Y9uNCLkBPy4dStzZ7qx19VsMPEEj4gY5TyZ729zNnA84nvR72nRUepbMXQ8fSQMVTT7",
  "key14": "4nyyi8MhrcwuwGFHfMMqkbm3spXxfzYPAtFztL3nNtSqxTLdNDBr6Jhj2AvTyg3ERxnJR2tPesc83DSDfB8BpMpA",
  "key15": "42kQoork3eVp9ezixK33D9XTW49NsNAhgv9DuvVtVnHF7nnZdjPLafggDHsm7c2aGp1cEYkEfENrMcHV8RCXbTNk",
  "key16": "w3RWtgPgcsnExpJ6szQr16koFQGB4dLhoje2pAVf2KAuhv1SsyXjHTbB77bWRxFYgdUngNPWbj9hTY5oXYwwpUE",
  "key17": "34w8a1dmPTk1s6RzbdCGqFib9N9HxuHb2j7BfXPtHAjqiiohQvhNi8VS5Ex2J9AkUNNSWwpzzowhS7er7x8hWur6",
  "key18": "5dAvyKXnMLtL57DmYsnrdvhwHa3asqFk1PtqEkEar3L8SdHdXowX8Tb3KYasy2tiZvWvcm3aQwyXkrtn8xM6wFbd",
  "key19": "czoYXxeFwkTNZxqdW1jSy1Y6xnmcrmR5E3bqaYxP9cQt4BgBtXfpn8nnokmpZuxDbyDjPmJHrBuZUgquXPJSLHq",
  "key20": "4xpSjH1KbVp9D89Uv97Dp4t5AmjthomQoEvXNCz5PqN4z9mcW2132kTBLgFXMKdLBQK7v5BsqSFfGR9TumD2gu3d",
  "key21": "3Y7F7gaEHxWt2EWsWr31cr4pf9Zz8YpPYKLqnysQyrCWPdHPgxzbeSojubq2WsSSjBiNXWMWheuYzaidMrmsfxVD",
  "key22": "YSR39Stfnx3UCNhyc5Yq1Xef97g2eVmvNfempTCsQsMtr6um5KXBnzKXFnzNx8nowzTZzqgBC5sSq3GdUvGZwGs",
  "key23": "5KjGmwjgvA8JWZWexmYGPW2bgbft8gn2QKwC85tiP8kMz53QWpcfY7RgJ3eXLrEVhYzbXU5zx6NLtxpBuix4mKw3",
  "key24": "cVyZPjUCZ6UJ9LUbAXk82S6FJKJ21v9Eb8r7b66QqzQCekkKQFDYPdQja9GLpkHcBjCtRFebzytn3fBZueNNq6U",
  "key25": "RB2MufkDP56ERRm5gc2NNzYyyZe1Z81gQLnCdpTgGJ4EMzTfsZt7kFqdhyDUQkn1q3nY6v2hzscPW2nn1Tkoyy2",
  "key26": "gvHFYKZDypXjt5EwDJ9koV1jruw1RE1Kc1x4yRj7KtyB2diW5JA3MgHe8o6weVMyBb7wzPFfyc5VQLET5rsEErE",
  "key27": "2SsDckHbCMRF8mEfnbUSaFN8XWZ3sDafi1VvrU75B9grQ8tD1bwjSvNzN6GgbRT1PEEZPxcBK9WrF5jXPMn46tL2",
  "key28": "4BhViSJAG2AuUtmqCL8bAeVsmqbhGzmgbbf28GPoouVeCEishjbBMLGG6bXUpB2B5p8Cn8jcJ4vEz9zC9yLYe4Z7"
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
