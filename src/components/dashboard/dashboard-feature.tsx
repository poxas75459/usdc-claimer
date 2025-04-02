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
    "2uJrzwjJoiFrP9fRZWWPckDQpDd1R58mqSixV5jdAavp3Y4pMR47Aov1aiUFyVDcN9rkr76PeajSwrGQGBDKrWo6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jicYxq8opDEmXtUYAtYWWPdupgwuoZxPJUmANtQ1S5iGwJQUoafKcWKe8h7dGCWdzvJNFqtHro4a6Hvst9PfCei",
  "key1": "656ecUdMHQmSBpE14tmAdQQgKX3Y3VR9icEaKmeYBJYt9JUC2auojSB5rJQRK8FsXSVwqgFp6j5iHJzHsRZw8BJy",
  "key2": "roDqvNqMetyG21HB7JTJnTUNrwaosoih5e9Tv26QZrbZPRp2RjBk6h15hJxEg2XehHtBKm6UwmUP5D9gBC89wuz",
  "key3": "3spkBqeUXbQsVgoBf8rBt4csbjcirRzDDhtW9qEnnzn3CD9wqhi2runTfhPuUEJdBPXKZT2sWkJAtXKNWMx7uHac",
  "key4": "2RkXNj3yVtVtNePAQyrNRrsMEYvhcfMsEkAswTp1eW3n9MYJ7hLqJ5L2VqVuQg9PdNPy457HbRj58Kv6u1iTuFX7",
  "key5": "5pER5bJjYnXDxkr3quXcDZDeBJYaSz2p9tUbXJWPcjFseU1VRkTvuQ3AtXwpNEHFZob7XSbttHmG2qZNmhU7bfdT",
  "key6": "464H9E8YWXcFKy46muuM7P3UiKdfqh36AJ3gMwVtQBRDyeQWcTzWBMFAP51uyQP4GpZjt6xBB97dabfHNGQJ9GEa",
  "key7": "pXaZa8HMVtKHqNKgSh6mh2tgYbCTLBe4DqkA8wNqJhMedMSTX3qVxfTNQTRMCSUD8NrKuBuhruceVzcRbfZT2L4",
  "key8": "4BGoGxcwYCDeUkDcMPZ7qUi9EdMcYF7tUsDdk1YC5zvGsQ4u8E8QD6Gsv7hn5pKSkCf45oUH1j46CKwqyKjzZLaL",
  "key9": "yTHXhiHXhNs5NoiRfJsZUf22CVTVMPiMFsYCwSYj1eLrUdY2HpasmUatTnbvdAjNAipuEGtLHi3hvZton89Ryyd",
  "key10": "4drWtzgww6DeyrFsxNMd8gHQ6gna6RWbbUtf6w5Rni4bbFEKTQR33RrdXH2hovnSJgpVq3dzwy9X8ZU1VJ4Eznbs",
  "key11": "3Z77c8AkZPmDBgWW3b2SBL2Y1DxeDFNBqbCU9KL3traU4S2KDVBgnNBop1A1Pd51fF6jXuVWh7ieQkfJwAUhhr82",
  "key12": "4jMEWZ3GH24Tc6Ao6n7nQnC6626FNHqqUFdCkmpoPQ7m5KPAfz3yUN3HmJA9P8dmugta4dTgss3ePNexXfb238tS",
  "key13": "4xo9tpLF3qwt6epQY6bBZmUTwZn3278PxthHWCEab1iobzJTEjtFyzYiUwstN4rSFFv381JGWZDyYnAio3REbVS1",
  "key14": "etjvTJ7HcxSispzngw5Lw4hNXNZ2y2RrEU1i6rEmpLRbpEjEkoAGCnJ9myTed5ZihBr9Twk4cg8JZ3KyB8JnKMZ",
  "key15": "C9mGPC7kHcxvBMGao1aQFLU5r8aef5HGHHQhF2dHnGhjjkjaWBZGUTtBtE7X4cc9rQywD3Ji9eHLXns6xJgMJBr",
  "key16": "31jC4PdPsuiwcokNf5QQoqm8qMjAWTv1w9BzYjrBTGbDuNKtqEVT8oeXzAs6SgRiMFwE7GgL6mvRFLpJ4qFf9THS",
  "key17": "5HncGASSJ8ReZhVX8RjUnLEdppypHBGCvfdHSwp5F6FBVJ92qTBBTfYPvHw6mmVYKVSY99HxP5RojgX9EwTroka2",
  "key18": "3hbHQGi9GR14DvS13LB9ceG6LRubkMvEuo7vnUCDBAfxqYP846fihioRe2qFjtnPCAtwZU17uJuU2ujkfAi4sBEQ",
  "key19": "2ZYcR3NZ3rGjhQ4CbufSShKzTAiGAnghdaFzBMMSi1Sft8a4w6DMAKXvSTLE5a2pS72JWX8KLgi7zSoUTZroXCBo",
  "key20": "3GiD7KXdeKkttkakhY97hYHxbrqxu7hyzZZRFT2vyZcwz4378TgokmLnQZQ4td5gC24si48AaoqyHBHhx52GB86P",
  "key21": "3CYzkmvJLLGMPLW2LUc3aFRPMJEwDFbacqRGdv2ioKBjQBKVgDrXEkdSMoRtQ8HSyL1Vuti59EhHHfovyKUcPwVr",
  "key22": "3AxwuJXGi2Hp4hbDHdEQmDNC4Z6msLipg4GGZ6RLMMjrRS6qF9MnVdCGC9RwdY6nhysZinPp6QAJ4mSP7KR4YY29",
  "key23": "4Apn35zvfAPe6iJCVNWVMQnyVAfuQeryreX8QCpDXQRFfHeVyTgC3zDcRxk1jyAnckZ5cPw6nwQzT9B5hcvGAH3B",
  "key24": "4utQ3yowndDCrDo3YBEniX8iz1hHqyJbWeyJ8GbqGpUMebPFxKhzAUmFpXFFQxYMngjjYBAzGr76R95PWyhbSLiE",
  "key25": "5fysthHbGYm5nWXWZQXTHMMfHjaEQEgHA8KUctYxyZLApdUgQunqoxXnaBq364TJgT4ktAHcnKmEf6XYZuVp978w",
  "key26": "5xFbVewfHhk2Yzb5zJf9wiRCBmNF8WkKdhdEXrKpnC5nyietmgUeZiR2EFB8Mg8xqaazSAN12NpNDS24CvPw4Kon"
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
