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
    "4BPFNvKvu1X9XdGy5tMVjUTSXWBMv5rn5RNnqZcxoX96cwtdEL5Ub78Yk6i4W1cz2WJu5DWUvYqBHzuissFB2phR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tpB4CWQRjpsMcSXh9crXHVnjAjTgQBu28CPP9K1yNRxAtwKjUTbC6Z1a7mpLhaizzujrkpiAh64M6fGRrzvoqqG",
  "key1": "495TxHTw5QGN6LRMKqsRwPrnNAKhjpGs15QCiYYJ77Msov1Q2N3evfvCGLypoU45n8SWH8CbDzTMuYBaoKSjsM6Q",
  "key2": "5FqSbx9D1g5m7P6KaMdLutUPY9g77KEosjxApBeDVvJp5bG83RKGoSy49qK8rT8eeSozYnRvE3Q9sXGReuehZ1H4",
  "key3": "4w1jRxMLAyVdf9tCPUxjWo7pCkyPfCP9Le2CkRYboDy9KQLzMj9Uyv3dp46msP2Wbt43AA5oAYzWC3vUHSGXoSsr",
  "key4": "5eh7AThm7VSH4dtJq2APsot98NBjwcNMSgobvzi3KWCJ95vVDyAKsL21uG4eHKfQS5SuK4rbPYGMxMXd2KBD5kEF",
  "key5": "4MxHEpHEefeLhmsNzbHtYeV4Pt6WLos95dWNxYD63YsK4gNqwzirupsWekBGMtu3uo9mTHrVtn2VY2SRzkLNCSbt",
  "key6": "5ALzucE2RgLriTY1s9Mwd2KVRgvT24s3C6ezHPBPWq6ZAej1dQxi2wmwvk9t937jBLFC3NLTFrj4vXu9pbpgP9CA",
  "key7": "55r96xq6UirZLuuNYAbgF5giYptBxnsR8AjuBggeFHgkuqA3j9AATLNu785DJ7kr8NfEPzmwLC5oNs9fvCSWFVC3",
  "key8": "5m2GnY94uksJbWmbTPoNoP1d3MMieMja1Pzw271YnVtjcP4ZthE98YAqDQpx2jyAGgqgC5HvsiWLXfEwcjTfJxUq",
  "key9": "5VGmriLor438wMBgm1NaAHKWodtitGugz9HdMo2JttgjohsdshwXNKGEAzcmkKYvMgNMj4dD5SoEUWFLa9R3Gogw",
  "key10": "8yHkVZz5fMcqs8WW9YbpoAub6Kq4vusHK6E7M2dXfhJT2Hm53DYDce4XQ4YTJSBeSDxshXC2YFrS34j4AGuLhfZ",
  "key11": "38Xny4gW7syk8LJFuXmaxae68ZoVV5J6noZyjeTJT7CwQvaeQCBiaAfNrS54tWgykz9mFvijCmkpkX6szuQa23S4",
  "key12": "4HgqixzWb87K8YgtNev1DxRBSLoQ7DU8JCXNQHZVKMBN9oy3wFnPt6njcm7QxdHRbRd69whgnxG13qGz63rwQzQx",
  "key13": "3m8jqhaQHbypMFTHiwJyxC2NTuEoCKjrEKz7usFp8d4KFKBBiU7DzJokXPi6RLmjyiixGtbXU5G29krpdLqC6iKa",
  "key14": "3GmZ1M6ERtH2YkQdgaMVHCytNTpCpJEtwXb8ycvFw4aJiGqmuDyZiZF3Tz2bdE3mRb1wQ5oga5BfNcjzkLDtQFf3",
  "key15": "4BKWeJ54RfdciLCvaXjjEcbxNyfBr9a1Ka3CdWWv5G7bnPaSZffyhtHqRebx2B8qBvR4r1PTEo7pBcy91y7VzRAP",
  "key16": "3nULDQ1JMuH4C1Wp6GanMfhVzH4RtowAnTFU66EHyYhAoeHjUxCBDd7YP93mE2WyabFfRMpj1KsQPRGqZdreViRx",
  "key17": "5rboAZnCrfbkZnJdhYkSmvRTiPvoQn5jo33XnYyKEgUssMmCkoJvHAsD8VG1thtXuPnVzLh6wmsDRoAiX16cR9oC",
  "key18": "4PAbhCkLxjA46UdrxDcLr7YphheiNRA7SR1wdspRDJMi6FZjBhWgNWQJC29BgaJ7fP6wQ9RA1orbUDNZJymU6q8o",
  "key19": "47mQKVJashpUXKSVhB4hftwYVX9NbKZH3iPQh4zUUz2KkXwAo953RP7cjg6t5bN7QT2ykbAhscUcxaLTbPydWdYB",
  "key20": "3MDFDxLZ1bPMgDZwzkuyW9Z5Fp3sF7nBnRHxQxSzAwBdP74i34fkhL8a6WW5JPeqhr2kk7c1BRWKbGkPMPzcmZFn",
  "key21": "66tSkJ7bzCgZY4Yfm1P94YRdtb12cdYZ8BM23nwLA7rfRh6xAawexKcgCwFu64UoxDkTx2tfiJHSsvriNKgJar8s",
  "key22": "3fuiPiTVZKBuuHxeTfiwHvd3z8nzKwjRZnLzwFRTjisqavWdGsdA3pSaTawaXaKwDtzzxy38YWJajkXFCBxDeQbG",
  "key23": "4u5kGKc5b8vwc2aFxgJUtYWNeYs26DPfKUZ6ihjMZjioQmv3i2eb6r5dxkrGnds6R7fNQ9Ytaf7cav2SZLz9M5BQ",
  "key24": "3pzZMPrYnsVihXMePfuxGMDs16cZezDJgqyVw8rGbHJM5ezL7mWTQ5hSsW9v6Yd88XCGqLNFmAJd5EUkGSc9ntfb",
  "key25": "5hyRXWgGf4a6NayeTP5tWwSwAUohWSNSLX68aW8EkifzkNnPXCiJLdwUGoU7BzNbcn16rfq7DGgUtqSJQoievj4J",
  "key26": "2bigzW2jxNLEvn5e9TkmF8qWBJbM6L5psweirczo6MtTkMC1cbB2JpGj36PRheaom2sgrdQjeWecjrDcSVHyWfMd"
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
