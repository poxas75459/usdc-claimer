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
    "cFc4AU26LT6xW8YZ95LtsQbgJmcMkzpBbERR7e21r1Z1fnhQfEj9qARW7UhFPDFRp2oAk1zZ5h7jJiBRacXWb51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yuZCMFMhfXWaBUAZsaMrEGx43BvfqXbDtXKScqvhEy4v3rWTVei3unNngJhMinTYk3t1HgT3w8p2p2bQrhs2zwv",
  "key1": "2tZhvePJA4kKEwbkTc3ywCXDSN88TKpXMBBbgPFTkmVL97teMScKy5fL5MEWEoJ9D2z9orRf4sBQ4Yib3HydBcvH",
  "key2": "2nNKyjbnDVpT5YyVzA7zfqJ2jAEkKyLyqLka8eDNoxkxFv5CLRLq4ZLmHVxPvcA8SPtRrFb1hKRG1VxPbnC1ofzg",
  "key3": "2fJGQzMhk4jU8LqnHvRkJWw8qjHFrsraeGxavnvTKjQU8CY88iHSQad8XWh3GGxffH3tZPC56bb8oZNDbk85kNRP",
  "key4": "5F4Hg8dFQiLvBMhVJCYpL9sdBfDiq3bo87Cp5iDVGLnWJzqEGaL2b1Q7GqyvWHaDLCswYp4c4Wg5TvwTTBnsBG5z",
  "key5": "3yeqwHLkm9amvT8CwBLjSPuGGz2N19e3Tyvxck9uL4JY8kNcELerpfaQmaoHQ8V4GXKPZSEN91Bqox6Hw3ThbTpY",
  "key6": "3bnYQfKSDtdt59g4sqJka3yqXhXZxEjFhZYrVUuysa1dPuGyWJiRyni31nS5ckCiifMnS4kEHDHpxxVbfCoPEVuj",
  "key7": "5Hc9YVTmffrw1wBa4WSoUYa2Gu9uu1Vdg2y2F9PZtahKu6rG7NHNV9MYkvNQR74sCirXEE4dJU9WUK9bjjdsLqPQ",
  "key8": "B1X18jdsjyTasdurUrB5EUiR7xqgGNntMxPeDMkzbuFERXVXrSvthomWscma9i8vJTH9q5NUo5zpffnhxsXyEu7",
  "key9": "2AFq4aqgomCvB3oovr6VhdhWXzP2YSY62gBpCTgJP7P3dcTMj5em5FUVufYvDUsUDFq2vWTiiVNKdFcbV9AwQ9Js",
  "key10": "2R4CVd8eHd8hfEZ9Y865k615sN2Q1YWKjTf2Rm2qzxExHepAa3kKaZNENwm2PqFnDX7Py4NxuCBBAcnLhxGgzQdP",
  "key11": "2sfUZuH49QNsVf9xnNzLCC5k8avRSrzDj69RqDWQDYHpKMhHMDeUcV1P7zN5H76YLRJ4KmgnfVvZGiMJAmbg9Peb",
  "key12": "5LGZv8uHyPvXYh9Xmx5KWx7izdK6wixsKGxepFLAxVUTUQ1gezhQy5bymWw62XdrQq7yFMeDLLjUR25fKjH4Q4qK",
  "key13": "2R6CMvJazDjYbqrBHQGCPZWgyF4M8bJwA5HwnucBZysyWgTWqe76xrpH23nRuoLUCVKk1CXTEomaGxSntNQUA27W",
  "key14": "p4JeoqtSh24Gs5qm7mBw5Y3zUDKX5qD3PZGn3PWVTjwrYD8NmuD7PmqK3LPoAShhDqGW4zbfHtmJbMionNMeq1f",
  "key15": "59aFiSZLCEAdLGWqK9LGMm88F8oZtUrBi8ybPEKKgkEX7pNoaNvsM9KrLt8ARVt8Q1GbpnmRMyeecNUF2svoof68",
  "key16": "6xwNKXwQZT9GYppdgstZ5p9gsk4KYj3DgEtJDcGkegQpUdjcimSKnrt3BasXopJL4MFoKXxRriqasqC3L67nou2",
  "key17": "4M7ZsEup6rd1N8RBXEJhQB6gUYhn8rz7wHG5jk42mXng6nkWVneJkZFJTPHhkvhS1zX7urPog3bqzNZq2112fsCv",
  "key18": "3nS2rh2M2uLkfpWXevDeFc22fUpMKQzViwFVnKPUF2jFQyYaxvW4WMatXh9DV35mSMTWsB4gYbH81JvErz6pcsxG",
  "key19": "4faY1J3Whfzxj4kqc1uo4UqNRSZ79zKCgJ5uAhQe1rP2Fa9Xi9hQt4Uy3H89UMLRaRkKCmvm3kUcyXrxWmkLXqTG",
  "key20": "5k3Ke3CWimVJd1T16zTKTuN1zzhGFfM57sX8GMiWuGoP1FqDeYmPsJgGDBzPFH5SK37C4Gj4W9DqUxpf7KDqo93j",
  "key21": "5ptgmbaHqcKvRTmV32RRYRuUUMWCWq4odBsPbmhmZD6pDAA4eqwwvqqYJ2pkVtSf44d6mws3Hq3vd5HqW4FDQBC5",
  "key22": "5ZQGAD8i3gosaaUmnZhAZqieW9GQr3TGk8vWFVCc6DsNZHEprbYrZxkjz7jYcAXf9m4xVcMXJmBQCQk65cpmNr61",
  "key23": "3og9uu3Z8eoBdrRze3JBrYLcwVpfLcgDfuaWZiikJsW1z3RNBsE54R1YiDFTyuTJqwCxBMK8dyLEhHcU2bGgjwzF",
  "key24": "4anP1Fh8nCnrgvikaVFXGMQSFBfaDuLQebqovd76YxtqNz4Z7Zbr5yuFnGSLUAW1FLrQRDEwkS58xsESPvWukCmX",
  "key25": "mYduQiXRLvwAFpcF7HaetgvTq1MTbSVzW4bwG9YGH8HAwSb6jTCAADRQkfNnHXr3sAoCwPYPu4iAg67FPDev4of",
  "key26": "2bcimLYgzCbAujdLWTqKBZNNA2dfXXUKLXr3WUVq6M9SuCyXjXFRG4sEpv63Jz7WxABJm88D7hUtXrZmh7iV75od"
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
