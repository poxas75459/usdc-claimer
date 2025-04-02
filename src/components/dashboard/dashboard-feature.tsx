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
    "3JQDf2uQzhfKbwMoEhx9K6scuNi8Uh9sK4uaPTpEj4ieC7E7ibaZMpxxAqytM4s39gTgr3sc92HKLK7xtcY3tKwq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58MjLAB4ndNZTw8gP5LX1QS1ofYgNHd84LtLTJb3kevGwoeohThbCbtKLcjAEdha83Y3MahireYL7yGmFVK7vs8F",
  "key1": "oEXNAezMQyEv2RLKDckXm4DDMtPqk3SBVthdH5wz9X3t8FmzHs25jhUpFmJE6U3FCNvJeJy94fQXt85ant6VRze",
  "key2": "2JwSZ9ra7iXboQ3qh15m8AwqzwCM62gndWoof3kTbMDuaFTFkwEQp9NXSEqBk9TjGG9MgL8KFTZUordVpFCypbdZ",
  "key3": "2o5BzAfxoGsLojHxXiKrj66YdJD6HEJXWGHrW8LY21NfrzsmGr77Tix7BZrCZR1A67BuQ7kxn6VQKdxVUFvNGQZN",
  "key4": "5STQy33XgRvYQJL5yz4bZxR5HttJdhVC7mFm9EYNEFHGcfNA9ZJ28kLwQzpfW3uv6ZxFCYkKMUDv8eYLaSot1YUr",
  "key5": "3wDrGsbfbV5ttYum6MGcEPNXGnRtVgmKMYFBhtjQwroX6c2e8andX5Tzjk1hPB9J4jY4nZ1f1nLei7sWNRgwaLtV",
  "key6": "5E5DYneVQgcTKQX2kd1JwGZrLB6cUvYf3FntWR6JfcDi7A7Zm6TXtpiiKhfUPpkshK2e24d26tWDr9j65mprh2hG",
  "key7": "4Z7jKyrYCwjaJ4NBrrsXj2MgUrx3wR9C18t4sZsUM1BtPB4psnnqpEMrnxaFXkEnymKVHzTTSnBVQcAi6AvZTQMB",
  "key8": "5hYDCk1zSd9jjHjHrVmLc5wChkcUvMpbvfWxLZ9gfSdQGwqMqLxQUo6Xuws3yqAkC5AcRYen7pWDVPKv6HVyrDaT",
  "key9": "28R64GUvqWvNRjtCWXR7QwNPkTbmGLojMtqHoHiPiTJb287zeg3A2FQU9eHVUG5gvSRAxjau15gisTsWF54KTCuw",
  "key10": "31rMe7nV4FvNRhvi4DUZxzvMPXX3Z3abxSZrxrb4NqroFHR3rm8bTxL7gr8YayzrMi7be5hyDjm7R3S7k694UBr5",
  "key11": "4hkcuxpmJnvpPHWkgzBWFQbYpWF2AoKm4HU8oXVfF1sTwpsDhxDSnNkm5AkhpoKuP8gxsqcTfBQmY5zEbqt9Mija",
  "key12": "62GnJQgR1zF8uqFe2suTiHgWpjzuWTxXgbmatk2d3t3FC52WMLL9WBBizvgLQHnR2BTcqKik3Ei84JLc1VPccPtk",
  "key13": "1XKeXEjStK3dfEgB9W5V4rGkJK4yQXDNW87EFACA77Yf56tHHQr1hy9yiRdj4Pok3rSupAf8eydw6p5U6B7ASrC",
  "key14": "5CUT3V1fiizjq9DNNcfTcJafLZABYaRLkgX7C9TdFdKSNfpk4qU7FiooZiH5Se3djm6qc38CtC3PQ6bfAJEDdeAT",
  "key15": "61wDyF6inJphGgWzz1tH81zjdSsDdYaxUY5RujkaJ3wCpbfWj5croDpexmDVYacfRp3NEPp5KEAaGTcvKY8fZBmL",
  "key16": "5NUbQYgEdHWDLmAQsEtpJtDxXBaFKWk2vzxZqimozZe1cyvrrKdnmqXruRe4RgP7AAc1pgFoY6Y9WTGmfYZScJv1",
  "key17": "5tNNSUBaVk8x7xCRqyFxCtQmuhwke5GCpS5fRByjnyhPQ7M6H5Qn7NYE1Csc3N7Ca67JkJhKPAut3uoVgevNDnQp",
  "key18": "2sR3B2vtPCFCjFKJrrEJdJyJEpZfZuMVAZG3Kf9XwmPeGrm26VNCzPGoX8jurceYoEEFYKBk4s72fJiwRmVJHx67",
  "key19": "Uk3c5hvjws7AwGSkYrR96kvWhCrsLrhHhZBp3jwU2FBvHGNtJAUc3awDDbMXDPrXy7RoWU9sdF8RiCkG5o9D5xH",
  "key20": "3KCQMdA96qsGwsUTqWhx1SyFbs2nV6woTKSLuRFQ2uATa8sDAwC96p1zgoyUbubVkBUtL8CdyamAqffYzKRc8buo",
  "key21": "3cX3MdZsDWdKoiyAfs2h4S7kyVeg1uSigGY41Kd7MeipQwB75mCNVdbSDukrAMs19WBLNnDP8mUKciKUZ4yjD16E",
  "key22": "33t1MYWsudWRx1HCpEvMn1RQNr6iMnuR84Nj4dcrS4dissmCJ6JgwXiU8UaxuWLsnRjYoe1uSUhXRwMLKQB5q8wU",
  "key23": "qomTwjNQt3BsFqSszxxNxmXMxXuiCD6d5oXAeUcpnRmcGupkJnxYhiAy61aS1oTqfAgpWdd2ee3XM4BCkZuibg9",
  "key24": "2tKxrW1J5nYdWNMEPfUPXaQcNyLDMzhJvxwQrqVWkfFnHUp49xxTJ6wb5MT2RjKB4oU7auNNVmGkxWXLib1WThgv",
  "key25": "2T91eoEkC2AJa1rSb48W19CBmA5Zh9cgKP493JVHWLukPhDgFjngGvFTWWF61udp6nQRhDs8BepETwe2rudVbyTx",
  "key26": "4wJHNrgzSbwWJD5xy64gznZMVGHA9PeKQ4X2HxNQmMKGKri43YXf7CBeGok1mdNWYe7JBQzoZP6fXDPvUnu9HPbU",
  "key27": "4A2nmwoUQs16HcU6zMgQBTxSWk7d1rzAD3xw8SuHg1WhA6khBeRvFPeCa6VYL6dH7m9T65VKA2c7jtbceHxwDypR",
  "key28": "R14bNzf1se59h3SHqMEb6c7ARZ8oNxj8ry5jmXRLxSXR3oXGk5GkLwaynDyYKfqsek2bPEFWFo2H4EcZ5cpEzZP",
  "key29": "59FZJpTU33X5wDLdBMLa3vTKCnq3drDTR3Nxb7KAPsiDezatMR8BW8em1DD4Lxa1yrkhh6WESrudqDK63DWk69r5",
  "key30": "5CcRjhrApYh4rjqKfsAQem6nDrDE6dAwVPxyGW2mLqYcGTugUsqhiSw5wqZQcT62a9kUmtWu2Zst5N1stuY6mtgi",
  "key31": "4MEAgVb6PEsA2f7qoG9KEgvuh2tX5QebYeGXhGmdNio8adjgnS7StdmTULzuGWPt7XPgRUMFap618oKxTqq7UNUK",
  "key32": "3Mz4QChcYr3ot4yB8gpHzEesMcKD6yqFvXXQFT1xPPV967WcFEfV9QVjWSisRkmHunEDKQa9FHLCesfqj3goo8Mw"
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
