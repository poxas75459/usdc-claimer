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
    "5UjLEmY8ADpUygDLXRGR3URvudLNAdEnDmw4Bhrzw9atqnKF7yQr5Lf4jtETG22bC9dTsaYmyAEb6rDqbRtk3583"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UxC8MffeQ6Zz66ZPRuiPXUYDDPgvDp2KnXWSdV2teNSAxfwau3CtZiPfhC2LVVq6GPKMa8pP4cqXofTq1Qzi4qv",
  "key1": "23kCGuNH4GcRDcoG46TVhVJNVPBr4YJeNrxb1kPaK2rMyBKChUL6iwsnYxerjtyUs1cU64m75XA9qzYRbftnd6fJ",
  "key2": "6755Nw8EazaAh6ZYfbeAiTUsdLW3YR3He9CzjcjxWv79JPXQUhLaNDGyvS4odv2GTtLt2xhS3WWFBSa9XpN9Use7",
  "key3": "29dM3KwgD8yovXRmpcgganHwph97tBNXgDp2knJophqvWx7WiiZYxQQASJ6u2dUovbYBrBHYfoyZdLhVfXkoGBdU",
  "key4": "4dXUamNcuu722z6bu6Yw1KAftongG6Kr1xessR8iUsew38ASZ15y3aZJsR2AFbLYp2haFJvnLL7xw1Vqi4LPj5su",
  "key5": "2eThhchMzEQYLPgTdmue9Z5KsYf1pzbbc5xBbYoRBSoXGSJCj6GpxmhkN3rCpL6P5iJ8xKoWvpPpvFTHhC9PYSnM",
  "key6": "3J16DMfyHa147qmABtEXHDigKRPZbqm3dxYpUtcWMhrut6rEQm6hvLx8yrzZEJYfobimPhCuKZSiSG3hRiL4ZD61",
  "key7": "5DeUSxvKVBkCAKrzV8Y6V3wsvcoWyC3cNp2XKdsjH6qx69HVaxrmuddnDARQzWuuRkc6P2aQVKWeB81oVeEDJVEw",
  "key8": "2Sz7Y5SfgQt3LVwHskgrbwC7yQkH2pG6dL2CbwEjZe3FUozcoG6XFuRvkFr1qGF42XqVGsrkWvEVVixwtvWTeKtE",
  "key9": "5jYSoyVM1bkDM4VhF4HfkXX7KVNczEA1kEjXTV2xSEUKdisddBxATYVgDLQzE9avDAVFr5hAY7R2sLWMPdgmtToN",
  "key10": "415iW64KnHs7ew3HCT6zRDbduQ4MzK7ytDNk4g4TuqQU37vH2mAwzSx2UiKiwGyXQQzXifhgSWC8MP8kA3bCuibZ",
  "key11": "4PBrwPXJBEdj27TngtdfaE83ouoK6eDeJqkYAuoMS5YvqCF3VgWJ7mVyacDiYbTYr72RZEBKtLhWP2XbTfubaG8C",
  "key12": "3aGTdW42dhAPBmpiULqTuK5Rwmd6kiozQBY1K93ZT22BMLfsrqWAF1w9H8hiEiLBjj23ZehRoCfVEt8K6hi8N4mS",
  "key13": "5RVSbHf9egk7UH5X5utwbcux69v3HrR8TCnrRv4KEzffAPapmhWp9PWLXTAKazQEBdkzq5MZyRDWt65bQ8U63Kcn",
  "key14": "2wfskmzwycSemsUfS84Vs4eyVt7cSPFiG9dpF5tiDiHb5izcKNATfULsesAYyXgq9LxkuNu5XQmttgo8uSxE7DPG",
  "key15": "39QUDnGoDYdJwrjrzAf8rxFzHu2rijqxCLfkH3Dr6hPsYG46cTh7dHZ1idTUsJCp9tw7h9w7qRbwsWqCushHotns",
  "key16": "4i7ngmw78bTW1AGpD9eUxjyofUZQ6g9CBtTG7u15U3aPPRQvtxvrq1Nn1JhSed8NjB1kkXJ1wmA6rpgxuTGt4o4u",
  "key17": "ySJo3Rk7KZixFZWAAgovqERBFLWMk1wEnguf1bH1rPme7b5LWfrrLJAzcAdMCFYLEfXDLmh6zSwLbZ31ArVUyiB",
  "key18": "2hjRHDio6pNJ3Gj3hdCbob6VibVfxzRRXuQp1Sf9X7L3TZija6RiCuov7jeQWi941qNruk4QV2zsJhJswt8ZZGRG",
  "key19": "3WfXzGtaGijzkkHypoYKFynGeeutQnWhXDRK4hygpscFJDKYVSPR1DfMPrXpjZwhSGaoNSYSEoGfJzDebskzSoRF",
  "key20": "2agYWtbdUMKRKK8qhzQ6to8w3keRvTq4SqQMqGgd5GJsnQ2RaG9F9DHBRqLkoiScL5qV331nKVHLpz6rdUuyzU5t",
  "key21": "4oHmcfqh8kmbXXpnZNDs9WTfEXXEMJXt23datrtyRaB5Z5umJf3pekzSDWnRHjdJyo2cryTNbUiB3kD3Svy9i656",
  "key22": "5o8XU163w4H6Y6YqCA5c6yW64QDjp7rRTxr3LTSnNCwkhJLbTsUqcfKZTG2EvjDZXCWf6pHLwR9M1HhazQjHpdsW",
  "key23": "5n9cBXpGsyeU9NBs1iAT8cEHrwBRigN61sef3Wgcou4hYH7f5eULW9HAcwqnFHoy9qKdiqtvm4uUDGCVS98ZTS2A",
  "key24": "2WNDB1LKEVW4fwaCUhoz3QHbZLSXgS2K9boHxkq7Duu5HbYw3jHZfv6eXpB3NKxu4iYjCNgyCXsUXTGBzfTjxQGD",
  "key25": "3FpPkacpaqxcs9J1BqMdYb7s6an7ZZVJeWfkqpr4REApQtrzF11DY31KLtCsvxUBQro1m8nKJgAQ4CGPE2G3PcSG"
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
