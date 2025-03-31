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
    "2HXoF4eryZ1a9cWLMnCrovYLMak3yXKuPJ8kX2HUvX6cBee44wGtXanJmJEeqHsvoCQ2mmxqi1kpbFAoedCkUaqA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eMbzbx8owaWhsTd9xFJfHH7p8nQM7jLVK1Fo8EcKw3Xreae9dGReNkxnF9Tsj7dMjYqNHKx1Lw9iPuuLg1fG2Lh",
  "key1": "4UjgUtQjZNcLHuhPTri9sBunBMhEfXAq59dBHurTSQFLE2SeUUA3ueHj5A8mMD5CBuXyPGSvT95fRZPuVD7eHZkJ",
  "key2": "3Bwrqsh8Ykc6tjrNtXv9ZFGxhgaTiZKiJymNDVQUwYmWDncifT1jkybYKCirjYkk95m6MjXrKgdUhvgc66X22i9h",
  "key3": "mV19gPbA5KmWbYb6tTEqzkccr1E2YmVSMxAF2iLqsesSqRv76FeWmeiVoWMLNGUyJBLBK6K4RADgvoqR2ekY5WB",
  "key4": "3r9yzuy2yFPuvRBvGV2MrJZD192S7BnmS9HJrHCJkjTrSMKqqqHLZS71pxMdi5q3bs6gjB7bMpqTGavpJgrG7FaN",
  "key5": "6248AsanmbTptieSi1ZRF2hVof2x41fK8LqaVsAui5SARV5SsL1nhD9mBtGQEKhmQ9TXCrzPcRkEpk5dzeUVAbEW",
  "key6": "55vEBWZzR2drKGncbKJjob9BapycDgUrJAd73JSMe3PQAkPytJwy8nr23SbvXvC9cWwN3mL5mC3Pby94GJDKTHG2",
  "key7": "3a7GPZcenAi7MJqAiotZxXHfz4S86DZqZnqTzkofAs4r9TTZFQEerd3ZqFJb5MmUeAZJZmLqUwpDUiFewabeuCjS",
  "key8": "9xvNovtF8GuxRwzr1ioixbeDaLXamo2J2J5rucXVw6EYE5TJDaeszwYXGkngGutAHX28fxPH2yttuXA1z7b2mVw",
  "key9": "2eMFCrjosRdHtkMdUoYSCwqD3cuQtpduQpfn3jnGU8PHni25MQV1wAT1W7iJxtYQsDMNCTMEdZXfea8hhsfiAzcE",
  "key10": "5LqsG5q7k4x7pKUcfBuN1UG1UYnLBjPdGAYtWVjT2hQhiWUK7PCLvLna617eQFinMHWEEEDqeGq8ivYLnsbJ7zAC",
  "key11": "2ksUVG4eHiebmWZ2r4yKCgD189SJcsHDDjE6re8w15ANdssJwHS7REpDx55cZMqcqRd8t64UX69gSyqS5rPfBYRo",
  "key12": "54HVNwLuTugPbcmEV1jKJDxQAKBTQRwa2bophgTqV8qcV7bqEAL65Nq5tzX6vx6DUp4e2Zg4Y3krvG7c4VBrDqJQ",
  "key13": "2GmqmKC4xGVyfoNTy1RnNtXyD3dZqhozCKPVKUEzKgR5ymKXjKuhUk5DY46Rxy7WLHzaKECYJoVSGa3vEbHZ4xMb",
  "key14": "419BivuEXLpWUK8QDPtLjk4WN7cS38BX31ePAoDasQWzNaBSjCNEoBpcqKEimwfSsQGQw3t4yvRNHwSZbaJCi3rQ",
  "key15": "34HsVZAXDDuJEkBYua9kr77rQ2u7pGV5hvEjHw3yUS3gPaaNcGEcykHAk5ZgP2XNUQPfrdPEnmDq6ub4TnRFJEbU",
  "key16": "4Hq8f9hfndCTAcEfSyg2HVk7b8mir3dhS3J2LhvEANaFNPeM67hCG2TVCpMjpVEtpp8Jod14v8UXAPpSqK4JEDaQ",
  "key17": "4TfDiF2nQBXWJy9z4kcjT6FefXm7S8d2LmANdxjaXdRnEMvrW2M7mjXreUaGLu1gqm2TuMHWQ3cJG6nC4bEpTG3F",
  "key18": "XTf4oPd1UsusyqPYm3VCnZYogD9Hr24xuDdBeJQAkE3oWTpu59UL6ZhUAXm4Hq8DecG18yuqUtq8neqYPFydxFU",
  "key19": "5PunfbFCzWyrmZ4hg5yVkdaHbYRDQmcHGfQ3BYHWa6HcebAhk8a6XfVjGc98AJeZQgpXvcfnu6TLkXWjz4bNDR4m",
  "key20": "4KrTnggW54GEdPV6Y6Z6HAUQMiSBPSjCe2URdAQBFJZqvZg1BiphAH584BLLfoSKbcqWqGoPnwU8JCaB8RKkJcBN",
  "key21": "WdMeLcKjTtLHY57z4SqxRRUPbKg1oaEEQKmvRB3x6HGjiizcDMuVmoCXnt3N7H6GXjE74XGPvPhEKPuKLJr1Vgt",
  "key22": "5d1qZmbmKWi9SmgsSV7oSQRyUyLMshojbzK9g2GDRJBjz5Fx3enxYhV2D8vauC71KGyMSboSD9AHZRrVATkG5Xv2",
  "key23": "34K9SZUnc7S9T5jMPNr4edhECeAj4F8nXSYxdRqWjbwBC4eZCbGYFjirWyHgdjAythWXbNVqy9KC6BNp5L8JzrYX",
  "key24": "4YEGn4D2f5knuf7JkhV4GNXviaE4NVmyXmfvoG7JXACkAKbUKkxT557nca9TwR5ASg7Hy9GG63md5jovu3Rnp4rq",
  "key25": "5de5m8fB9GKDS26BuDwunTA4TVGYGxzjnk9ZGyPhhzNVJRgU5jZxEeAYGPyL7Bz1oWb94iQEbac6dihTTB5FX1t2",
  "key26": "3T2nw7MzMDDoXp6GAH3cUMg1mMKqLEUDWayHPxe3cdG3SAV7vRftRZ4DYiG6qHa6BiEYZsBSd1DvVBxLNnZYX7bZ"
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
