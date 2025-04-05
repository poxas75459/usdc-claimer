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
    "1t6XQgWNPqsXTtJnJNWqTCPe6WvmYyGyAb9U5rHm9rcijSCTqK2M9QhnqPzX8JVei92DNcmbSfxbrwK6i5cFsQL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vBJfagjRD86RLeQ4n9Z2oDQMmEuk6mXXKK1VrPoDYd6r9enE1aYRt78tmy4HcPkbYA621T1AAmFNrYTvpK5gp8D",
  "key1": "5h988i5e1DRBEyscEYQsFmNJETFZDX8MHMvbKzcsNNBzcAaLgUaxrsmNsVUcsrUii1JTQ5q2xKvXxpZPoZBdjLxE",
  "key2": "5x4M8rUKQg7q6JkmjtHJnfUYJg2herkQqpLRt2yHCjhKs2xyAKyU9gz2co7oUvZfeRqGsvf728EJkYQdivb3zrpC",
  "key3": "Fw11A2TbJ52HenRgdXruUL9ABQNHHm153ptyiQjCDbRj7N9Acm8YamfvBj1kv8CaPQsUK7VjgRe7PK1TJ7Rx47g",
  "key4": "3RtH2AVqUdW31LVZeefYfbw7Nhy5RPXXtA5CTRYatXrwoPhGuDpR3CJNGQGbdv5iBs7TTbHVuBNwwG2jaTyWXQBB",
  "key5": "4os1ZEUmwBqe5n4TQAUsRup84uGkHygHgi6Qc3hA3bFN8tySrfvTk5rstdk3TzzKYe5Aft1WNkFBg5GmdTxtmRCT",
  "key6": "2HLvvDi1nAUskWarES4By7FWVnGzhokJSBqnQGvV9WnfStiDbR9iLG47G3ttvpkhXFVW3H3EA64annpLEM6QrCUa",
  "key7": "5LrKr8mGM2zNFjhc5UF346oBZXBsFK9tMTFQNvJGj5fvwGZ4o74hBe76pgA7Q9GKobKYF9eRaino53jTfV2Pbp1U",
  "key8": "4kAXCcv2RR4j9Hoxub46RyaD5YjSVhUhgALEa8eUhLfbWehV7eqAYLzXGHBd5A9rFXYDhPYqqN5aXjG7WHsFfWRR",
  "key9": "4MBFW5FroZmYbGYtCtb3jHD7a1eAaNDJFtQCSMnje7Xounjc46URrkpUiAhMhsYx1wD4f4tWeo1HiWFCYK52VkfM",
  "key10": "cVUWdJ1sz9dZa2dTzQrb9Pv8R6fxBbymmQ3kCKexWyFGvPiuhbSFgtsAKDNCB2jS2qCNXTFoqQMRVVooNF3HWZT",
  "key11": "5qXPAzErBW6rq4FuVPFX4QB9gsiQP1JseEJj6v6cBKoFhRUikHemgKjemL6kwGajUXfBxvvdGj8JU2ZVuwtVR4rH",
  "key12": "3MQ49LjQEfxSSas4GDGaRgMXEy4eTPc4tsCutfmSoLEoM4Jj6ua3Jsnxb6yYqfgDXSuxafrw3B3LcjJDrVT83c7P",
  "key13": "4dp6pZyxYrDkfkH6N8BeHVqh4nzehXwyG8B9ZkLso38nheSL7Zq1deYjRDfFrMyJutW8zLWs1YtdpjNNza1iDW5Y",
  "key14": "GiCdASUkpCRk2gWv1YXUFXDDwSpAWM8ypMFkZkC9dj17Vo6L6xsDBPABd7ypd8HKogSnNueQx91CfqHV6vm4j8F",
  "key15": "33ZzCYKUa42iKvuiMoYCGyJ2wkQqzVSXGFuf6SVix4K2aqZieB9CPJLv3qWfAqmFR9S6kW315xcHoiDUhsn5MM1f",
  "key16": "J9R6mHentq4pAzRit1mj975jB5BHgdGoXdy17F9dPvmWTqQQwXZBmuw7sG7pTx968FH813uDqa5SwF2qxxiFgqE",
  "key17": "3YMiMfrom2FsTZxM7PBLoXGHQvLHUEjCezHAxo4eBebzZMthGFa4jE8KMempaqBAhxbQX4LnYDbwBZQSVLk5Dbv7",
  "key18": "DvNhLZ3ysfHz68tj19ujYQctUGJfUkEvma7Fdub6rrPivdQUzzKAb6Nhnfa9h4sDezuEcDLpYLkdEJnnfRLuMh7",
  "key19": "3j6v4H95jwzQcmqsMqr1a7qSUDATxfqMtwFeSzzWv4khbqzizRzGjjSAzhWs1U2t7AzKpvjCLJRDfBBijT5FS4Eq",
  "key20": "4mxETDPkZ3ZmXv5AG44PPFFXKaABcxB4dF98PeZTy9bgA42G3mXaSGYxpvz3YrVJFL36rfyN8sBrAJEkmtGZSuqB",
  "key21": "5a3NxdBDSgALjuLkumuLuFq18ARfbsmv4ek5esswYbBgghF9zCfLQidLSw3JL1CLVpThmehCMKtd7ua9qMJH3GZE",
  "key22": "2iYLvzyzcdRsb4psufq8XTkk7xq3Sg7nDq32QjWR5KQiFjmhXNXVPF2BmDRqLWEW6Fute3Xk6ZJhf3nMXKVnt2rU",
  "key23": "3rX6WH2X7oG8qJ5ikY6pkuWakAbnq78uaNGY7674ph8Z9LWv5mfjEHqQVPMZnHGargSSRzXuFxF1P38gzXhrfzcK",
  "key24": "2u1Y1eCJGTCoruaciEA298KPaLdzQv9t2o7JYBhxFmAk8FBGAuTkeGM1vzqCtKQHpnCKg5AiEVR5HdMaG5N4gEtf",
  "key25": "51x4Zs9aZAkLsTiQf6DsZiDDJyTUXQdma3oAP5hetJuE3hVCSq8JNHejRmbBZ84nEgkCTMhWfZVW2PYHR7peXznM",
  "key26": "4BN9dnYxUVYY9wEgqnv6jP2L14bivyd7trsoXJqdojMjCbHJnLKJSFAKJbK7zhGy5PVgL88D4S6Xy8YqTY1VvTqY"
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
