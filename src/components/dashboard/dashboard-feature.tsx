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
    "3nMmJbEjhou9XgN3RdXDdFM2gzuKwaJKtNJetFpAtVnvRisj9t9ZBX9pW5ttTG3bFBoUy7uqQYnpPr24cRNoWG4b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UcTSQs6mEzf7j9KZV6N3uy6VwfbBbtwg4vwsgcjAE1SN1juvyoLhBetpQvan7eeTM6z5XUS542yoWBnrp1Gn192",
  "key1": "4wegiz6BU8mwo7DghtQ6ZsptwWJ3CzKuT8QQGV3EcVSfwPYBrCVYUUxgfCLehAPihQbvUZoakKnS61ngwLqsxhfK",
  "key2": "3XvunH9PqHTGafBgcbNoGt4nx1nDdjRsrYQ8gVyHLkhaGzzmT1UqzeYCwmQXPMfnKRkyx3zXU7y4o41PRKnzyGcc",
  "key3": "4XQhVwojz4xs8U6m9mXckApLDNJx8pxQXdkCFien8yqGH2bwjdrFbgTNjgDCV4QiLmVxMjQPzN2Zh3s77SKjsdYg",
  "key4": "482bPR4664CXqJngA6a9CWepvJs9sgRCRRyABQRw6J86eNPrp4x77EtTzb7XH32iYPkdKWBoJFgNQDJjxWLoLe6K",
  "key5": "5H8XDrzNKthj4kAergxjBzfCQ1hRMja4pUsDcjnsECTgYdqCxSLbWNdW3YgMPXUwGCdL9ujsHKqnLZA1BcUU4gTu",
  "key6": "4eRT7xNgYobu7w3Mzw1zMnbcGtgVNmTxA7c79UDXpQqQ8zGN67FYSeVef8M4ykLdw58UKcZUfs7WiudC9dgZnjnB",
  "key7": "2wkdqeV3gMHtfV2srHyp7a2KqRA5DZoNkRB7XixjZ1UwCRczu18cUcpGd2Qhz8us9cRaFoUL93rRL61T1hAapJG4",
  "key8": "5tfWjzCaS6FS7r1RJUk8Sr3BbJFCGjXW1TLrp1H7uGUX7c26YjZNy82oMveYQrHeFXDRFsH87P3cSbuvcA5RWtAg",
  "key9": "3FGzXJNCD1RvcGFDVHHcw8UPKYKfs1NMGVcLoNyZUcZiDopwwgxges3QehAWrJrUSeVHdZ2BbSPkwLxSZnpDKdZE",
  "key10": "2zh39AgyxLTJdn6yrtN9euMt8XvMJDXSVz3wQ5K6qeUsRtrDxDAiwyRTz3rpnsvAQHJEFrew9JXeBrTBkgskcgfM",
  "key11": "F9xpF4B6V2FB3zHw3ytcNcgSiSDqcP9hHAZcGLN9tw32e5rMWNTKhvr7d2JFKRZXPuedBhHxR6VaneYs3K7YGMJ",
  "key12": "5Guy23FHjf6hh5TwYzDfun2Y9YJ3ApuhwwyJHWp8K9dxpo3FB9JDhj77zD31WXPbh3MoJmB6Wnq6F9W3iTNzAZ7x",
  "key13": "3Hg4EBLDfHzfQJPTCHuq6eH9BGHwVvttasaryEydzrJytmrmYQXhsMbfLGuRmE8SGwGrbBWeo51zfosZ2uMY8qCj",
  "key14": "28Xc75AYBe9KVeA8JoagbtH6Zy7p5EEN6mDaMhnmHbMTNeWBsPkMRVintocqCdETy4KmbnFyopczcWHpzyirBSX7",
  "key15": "4bV6q9h3upaBYdxk4UvvgwUPH5qYJLX8AUqurpxjvQHjKUGGNFczRCUyWivdjRAnRHskSpUoeik4b1j2VhqgU6pd",
  "key16": "2Q9EVmVQ6r8kEefTFFqYDPPN6SUirD3VHnN2PkM8GLCtqxEQauvFtjMXngo19iFtdSVPWKe3n66p72qw4qDgjErt",
  "key17": "2jANUFU2BZGN6aL1AovWQN5C8Zwn1iKUUkxcX5gkgJrvCcwKfeNkvLsVmu3E3kZEraRGiTgdMnUhocu2242wRbdC",
  "key18": "4ntuwLTbhUCRWxGAJavyMkqPAY6HJJbLdvxhvTE6Lt8QEmUHh7nic28N6x8ULrKQTdnPmY4JvHgFLGDPi5T65a8Y",
  "key19": "zvkUzvgE3hctfz6vQcLx4qkgTSi3vdtyadjT7UXMaijkNrY6iqQAwW1tisyWamNv7yAAgG5XDn4NBvvMgUrn3ih",
  "key20": "2zLHNWbc4C9RvgqpGJN43gneSkjUFBBZ3TDARh45xPHWzyPa2Gejpie4yYCZr6eA1xaTRSgccWeE1FKH2T49qF82",
  "key21": "5vVogLBhBrKNLT6b9PXbacQZxxz5Bppu8q3pmQtSbRAKAViRtterPKRuepCwwPSnky8gJEnbtiJfrZjNPhGFXqHw",
  "key22": "5EZbwcbnWVdaepTMS88VA8eSztVVdapJ8K6m8UxFXpKkPMpetBU2rwuCxB6jzr5BXCJAnqp7XJCmrSiBmXdwML5S",
  "key23": "5GiFEWWZCPqWFGhgrfX33iR3byKLXmpPF78QymEvTmhrDA2ToUxuCJoop6RKxSiLiEFP1DBcpPcQfnCLJqe597AB",
  "key24": "3A5f1zn9vw5NghV2kmX44ZTzYZN6HkytfjVNYSrnLDyHRPCJtypgPpyUyrekmoDe739sw7EGghyU3CMdMEw6efid",
  "key25": "5WocHtj8BQDfNer5NnNtZKKm5AZAsj6kjYETRGsvc97ZzsJ9tEjf84BrdhHJ2uTve5jsFq3nyeLbWK51NzEK83tg",
  "key26": "4Fd739W4rfYJEEHpuRQWzr8z25e6gk8cPo4mbgHbJjEP25qnfbvDWMfJLBf41nYu3jca4FAMAW74xyPMdSNuXJy"
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
