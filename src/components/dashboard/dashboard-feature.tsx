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
    "33DMPq4SeVcAzacWHFnprkUo2iJFf3CA2L5Lsj62qdK2Ba9zZx3xwkFektFyBM1wMgiiqvaJjvZUnUuDJebkgdZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZWqCNADAp2KVDQnYFdK1q1AC1w5Hgn5KLK3YF6HQiYrbcKb4XqgsTW5oxFpnea6hPdnTXBqC6kFj1Tc5cc2W2kb",
  "key1": "5M5gSvdbAhdjYRe76umSn4hLBKCcwWf8fD6nNoAvqN945PsxJqjsoxF1rMt613QXUnSN8fBNQSWzZ2gLQT3vTGwf",
  "key2": "5Yd5y2FHVaPtNF6YZKa3DjsVG5K6kWB94zL5Z12zFTQKMqbCzFsNxikdAxzVZ5hCJW9syLCkiZ4u2zad9jhZKQtG",
  "key3": "2ysSoQ5iiq7Gt2o1CiyPbMa5VRvVUMn7Yi2RSEXq7HMPzBvVuaFsK4RftSoo7zDQ8Ge6StRBqkET2GNV8pnzMUjo",
  "key4": "4vqab42ryCAKzujpv75fiKKNEnwpBU9xbY5pAxFRWQLKM2kAkxNpiuqsDF1dWWsgWydx7jdyKFeq922smyDu72bL",
  "key5": "5tggPhSj4wGLWS3HqsWt2k23RH3g463tZX5qKCuXW1wc9EdrdBdfCA4NYJgTdsWJkaw9zEagqUSnp52oeiiAzqWE",
  "key6": "5mUq8iPpCjr2sGNqQn6WE2c7YDUidoopdcXPfMPYmR2Fiqyi6UndrrBPuFWEfbv2dmV1RRz1J62CAhQgVdw3TXJ8",
  "key7": "4NDTXrjLoCupQ7vrYgoS4dmYwvAaLmqNywjg1B5JYrcCNcAMc4TprTofMpPTiPiXx5bS3mUHXCYCCTzzbk9mCGxB",
  "key8": "32ZNgSJ2F8fgjD7Piiayq21fguXCT96Q6zh3Ef9yLGbpdqaYGZ2bL9t5JJAuNUaTLQWNHLBfbJXZoXzXXmyFAd7y",
  "key9": "3gHotnUMsDnqFP871Wa5VqysRj2eqYrgZX3p6AfceC3qc837GUdpmz3PU1B6HfxP86eURbzdrKSgYe8rTHK3iwX5",
  "key10": "4FU9xrPZdJVZxW7zLScCzKZmwXA2tb11YSjn8BX8EoZds6Ek64YZNuFKWBXXCnQJqfU2RepNHEHjmTKTGsceWJCZ",
  "key11": "Bw6oZeFs7FwptpJWRrAXhsE5zTkmiRPL9wib14WAsES3jmQJ2R6ycYLAq5wZjeFpuK2waNHqPjW2wS9KsRrs51z",
  "key12": "2apvnNwumigGUdUGycwd1U8P3xFnpGxXK59Gg8cPnQ8cqKUz7gibk5fdU1NEy2KbpEUQ8ihbXfWsg3LVCEKUaaAn",
  "key13": "4LQrKn7u8Li1M8xugmbF2eQP4dsp1TdqobTdZsd1HXPjpZjcpeQkhVkkcUQ9YFtkYrXXnFmWWrWRDVCoyG9JvVx",
  "key14": "32MpKejsFHB5pocNgZLEQu2ikGoEgSFfRwxX8Ega47SR6snQZQsUKf25iWAnZ1YynaDuyyqp8rcDCNtky7omRbcb",
  "key15": "5bnnLx9gQfttiUA2fqVSWCoZ432S2cf2fQuzoJTYvpUE8pNt2YYv6NaKVbd2D6QyGUuKHmJ7QiWxACEW4DXQH2t4",
  "key16": "46j6kWkDDedPWA5Xpkf6HD7QzuqrkvZStjcmFcnawosJogg867q2c6YHJj6XbMuJiV7bb2GPwX43m715bbP8xiHe",
  "key17": "5cQ7BkQfDezj7yzCizW1Ebf9aN9Gfged3zMJ6PY98EDoTkeTMm7tqCTqTEZDAQcJcdRDsGpXkLcW5RUd7FCuz4ay",
  "key18": "4JdkAEH4JGXpTfjuTVPLqs3Et8u93p1i54JqZQPF2nbkbVHbNaF28K9yPbmexSbpPZ6CK67iG6uWKqCya1Huyx2u",
  "key19": "pcuRqhAm9C6YS9DK3vga8KZ5Kb5JQRS6aX7KNgAWaUgmWdka742qzkJMKerHbkGXi9baNi2aZmEmu7uSiKFFhDN",
  "key20": "62wKDZzjutDXJw6rj2YKQc9shP3DHcWYQwNBbJBTbYTd5y3gqspRtkMSRPDGHppoNbwt3YgtDaeh7toqbTPn59ZP",
  "key21": "3pHdujmRsRiJFxb5uQ5nyP5H5LgHcDpKzafUNqBk3B64pS9kEwMXESgWUpyRPPnf2kRz2Kq8s7VK4x3zwQuFeJp3",
  "key22": "3jFm6yCLSPh18vw78geAynKpMRgdhVQVdV4QFTXoJi4veXkYJYi7M1SLsVteeauDhoobB5ycPTeQT3bNbung89Uk",
  "key23": "3zQsj4VAHRXh6qcprpmoV7geha9nMhTpXyA3nnp78hSK1tpbXD5E41WTCsxADSxei6z3BV7j6Een2stqK1szMnuC",
  "key24": "25zAzzsfZRz5uYp8hzTG7XsMZvJErTCe54TpcZnQRrNKjztmjPzfZcSpta7hU8XT6qimTeRn3jPvRN9pw2HXuM9v",
  "key25": "N9dFLWF2Xw3E4iMQhvV6rZAZk6yqRCk6PvYH7s5HaNuUBt3yX3bdRdH3jf4tNrsNDctovLiQULoj6c4aZz6xRaQ",
  "key26": "4Qv92i854VuEBBDoyX4m94Rrq28G9GrYhdvk2Y3pzP4eAskqE3ZmfavKqJvLDfw7Y31mDwTj8rH4Tcm6c7XSoJuZ",
  "key27": "NTnGjkV8D5pZtdgzGDf13qSMHZSb6W5ktCDjwRSsotmiRJ5SUizCBU2pKzDEb7iviN6ApbE4f4z7A6PRRpaGumo",
  "key28": "2X3zmSY8ErmHBPVWk4TAsCXThpMuWESLMvyuqVXH8y9wCVRRea6YY6zFrXieeeCzsNzzUadceAftXu9EYEVuPoYd"
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
