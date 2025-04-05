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
    "52fMoTo4PKjrJxs1myGec88Kusb51o8xmZxVguPKepvhC3KdkDNQZtb24Hm5x7WMJMjekM4J6GWV9kC1PNw6oQ7E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RH7fPcvp3Am3BU2urm2bPhPxy41cWozmE3Zkd1xtmGgaUHrkKcKMbP5jJLnUU1VpgqGLtHSL2vtDBGDKqWW5s2H",
  "key1": "SZYfsxBKhNJc49w7ne12Jdpuo3M4KCWJW3Qn94Uu5BhyhAfKiTxwWnDPjrD1KtnzESHv6C7FJM5VQp6gLQSPKgu",
  "key2": "gBeHsMRvZQX2mSGpJDNXbyter67NRckWoNhw4yKCHj13H4p4Z6TexeKYEQAJ5Vf6quka5aSjNHTDTMjXoAARjLY",
  "key3": "3GG18xqyqotnZrPznpb3EJmzWy5z3KzEd7Cwr5JSSW9D5EgNTTMEy4be7XBFfcK2Hpk4H1DJpUhn69PbSmNKRNeT",
  "key4": "4Po7JTzpiy8CxcsKSR5Nvr1yDYRZL3Exz4HXUDUcYsujpAojSb67fDpYXvcc3oi6aUjec1cqwDuA5T2rS9zeFCGU",
  "key5": "5enHVRKn9gS7J2xKGy1xHyKUJ9mb8Fig7KKYgBykdpLqy24wYK9ns1G7Z1FbN1QEUJ5GGJfJ5q74Tsjiv6hhuWJa",
  "key6": "S9HxbEaUwpyH8mL7HjiLWPciw6xseMk4vGA5wmvrckDW3yAiyYD4LD6p4fsoarrjsWDm85j5CVDABxFj27TgbkA",
  "key7": "2T2CPZZRcL9qNcu45bbiCpmiUr7cNZd9DHdPvAcFJsaiaq8YnvRQn24ZoWm22V9KbnpmTE67Hc4HmNh4d7yCFE3P",
  "key8": "4nUJH5AEgtj8gW3Yie8FTJ7BppCq2rPx1mLvkH33v6HbGTJS6rcJCnkMMBoi7jYnq5L8XpGCbu4jj178uHr7Lm9T",
  "key9": "5PbmA5z5uyiYPXgwfqm2djgpVbGuUfcAjmoY49LRhG1GZSY2veJrGXZyuaH9GoZbZJHZATzrQcJNUnjgCNpAMFcU",
  "key10": "4YCTrhX9EpR5hcFQ4rhmaC55hAjAUyEaHwb6oE4nAdXcamJwjhuYyhA2myELKcNZVhDKMde8mdKQ9HaiuDSXbjam",
  "key11": "Co9aqoC1KoEFrGvK6QZRc6aZxDJXjTJYq6JLMnukbeSUri3owKN5dRFXxmzTGGy5dYNd4fvuQpr4Megvn2RzfVg",
  "key12": "5mBxv4FZKU4QAiTTWrGTC7ZpxknMansfUftnfUAev3HUh5QqWandcdCmNq7BoAGWrkFRfNQJWoCap3rGPq4wRHfp",
  "key13": "55i5oP6jsctQf8H3Nf5wQYD1uVHnS6WibjTuUuAiQDKZao8NMkhHzjewdUa9F49RXfKMHTLohFrFkeWaoCXoZLoR",
  "key14": "4oeTJFAigN1oFMKUZ4v3AeZ28zZP7DPRxzGZzJRTB7Tr2Jnhrwk4rbrvFfqAuaQYe3TBXRYxZ3ujpBwkASDiikY6",
  "key15": "CNxw5D5fJxVdjJg1TG8DxVoerh2vX9mngBpMMwkaF2HntHbynDesuFkZDcH2msHgomcrnxLkrZFH8dUfKPZHfC8",
  "key16": "4EP78FnvSMjtYnhxuogrHCVbZg62oGD2DTJUd5GzjChtmJajnvuP662ZRyXM4XE2D7necEAdGPxZdggz1sfrx9eQ",
  "key17": "3hmPLxcrHmkkUkDhP5T1VsrxW88eSb8FF5jWHdBTCX4qMDwDo9sTAHPXE8jvUARe7s1fYytWdpnwSD9tRkyvecAX",
  "key18": "2tvLk29f2XeGXuy3ipCxjfpGE9xRtVt2HkPpsZNNt3VAUeN2xApqnp9HZfWMciNdsa5KZbmshZtvzkDbNSVmS4DQ",
  "key19": "2MuyUsDG4qc9UXKEfCRCQnDpuZQuvhN2dGki7Ltgizj6H6e6M1fCb2HqLmBNndExKUMoGVdCVF8Uc7wJLiDsjDQy",
  "key20": "E5av4Mpj6PfBC4LCg9EgHZRPwJF8pXRX9w59yDcFGmzCqufMR47xbT6KpctSDjzVH8y5k28zypLLEeNdimj4hi2",
  "key21": "4j9PLWpDjWZWvtsNWiR5kYq4mx2S9JsCtZFC9NZWiTNZCLtfS9Kcn8uoRc6A3scbGbstmY51t8siycayMBphQBUB",
  "key22": "61jJmRVPkpLA9NkgfwFTvG1WQt9F3Gw829H95nauNztB2rqzkL3auTFaZCf9y8N4wxNchuofD7RYzh4of92h2aHW",
  "key23": "2uZPuu7LyuGU9TdVjraTBQL95MdU1wmRMwC9DMFX6GRXbvVWK8HuekBJBzdmkgXY3p7W1xh9C3VGbiFbupcyr8Bj",
  "key24": "5gvgoPZd9F948EgkTrQBRkWGMaCtz3iidyvkifCLt7sk45y4Q4r1eARpgqbAH8hvycvG96XMoNYTnESkU3zGGiyX",
  "key25": "58Vg3zZisDtnBsy8dcHMRx1wMhFGTN2yhiA6o4BrtVYxytFMsuQf9dGcBrajJ45zFk34P5mr1rLFcpyPnkogCMHW",
  "key26": "2v3ZY78w7q3Nx4K1ez57wnWCRjrRLMnanSfugnxYSXLkVveu68F7QRHtshkozZTZAv2Mr8GtLVXqk3fQH9vXKP4n",
  "key27": "CJgeaPDNAoQAyisZCX7bE4EENrTceeW555Mfdo6h1WN7tyzR8k19buZ7e6hdMzjrvvMUARP62yiGueiUNwZEF4Q",
  "key28": "45XBG8wHtM3TQ2HxAJSiQMsw6ddqQDEZSckbFB1Zcy8rZLA6DZTvT2A7YLHSywDJJppKTBTfCH8y8FTU8sbKUfJx",
  "key29": "4xYYem5RF4cKuwop93Lzd3ZbBzn7TZrjwrghqLKB4HWMdN1SjNdmkbrefQbmiUhz8SzrwREJzGUNA2EYcR6NfdeY",
  "key30": "31pXNgBM9QqhmJzAp3cfWuHAXFKuKXT5bkZaofdcrwqWL5FNMCdgnCdWufq3fkhyjz9RhaGUPUoH8ty8tJTPfiK9",
  "key31": "5tW2hxoP5VZiLKtWcuUf3GL2MSwY91DTHoXRmHdJPGoJDddUbNLvYF6aCQdfBZ7g2xYD7tEZjsKiXPWTVNYb78qD",
  "key32": "2nCCFkhGq7aP9sdU3TeRuzRH3UnaVstaejgUUfAJnGeJui99gduZPqLATDKrahVTBAiAZ1a8sMNkizuiSqdZ7Lds",
  "key33": "7QsAXth92szMYzAWBb7sMwbEJqnvaM6rjadunND1EkTUzp1vLxKBSsSfy5rFvSEfHPnruuYGuyCgnGi3QZ8YnKC"
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
