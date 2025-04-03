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
    "62wyngWQwVwGjnsdGNMoDMJDtcCDuCHg81VobSppHXfgsqRUjvQMZGt36nrbh3pcstMLpEgSfmCAVNbx1BodGFfV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B3dbnUHoBv43CWFqZ8xFcNiLGdQJe6YRV2E7h8oJNGdNESvqnUPoympLY7XPrvJGbt2pWSFTdJmFh4E35SVrRQe",
  "key1": "2buLhbKuy2a9c6ihF4qYskyLVjy5pGCRnTixuQ7hZZe31o3iWBUWnKZeYCkYwZF9gGgmNM8eKRTrKcMSC15wpXWQ",
  "key2": "2MLmLcRvQbfP73Zv1u4HT5d2e4oAfvQWLbbqpHE54phut1bbLQxpjL9ED3Nh9HiN6BWNuQpDgP1SFWVsSk9uzzoz",
  "key3": "2dN9EKoEH6Rf7mKMhvKVhY6PGgPcC4KkzcyYkKopCpZyK86d6rpkjsrdo7ywJaF6qpBkn2nqG2p1kf6xXcjoqrbG",
  "key4": "2UmtQp7XWp5DkNgyEqKq6uPcQtvthMefsKDUBFAmnxofsYHhp7d8zfGZ5q1Gng9mjzHa9c3iJtWCevNr2ezmgoGp",
  "key5": "4AKdXsvE1juNveGtV2oxZBVHvD8Z6iKjUzxXRPz2WNzBZ7jhDxmYjnAfeDnyM2tsU3e34c5cCka94FwBK8Wivthm",
  "key6": "SvHZdHswcwFuA9i6PLio7uQVktCpNP8a7rR6hp9JpBdpC6RSyZ3q5LyYCxUgap4dhpay758zJcYbgxRqrHmCRqT",
  "key7": "3qerJ88mNhuec32AukXNA4KV77eqaaBzyrNBAt3DMV4E2jrchYnyqwVJJ8RNzcNNUoEq8tb7P7Kzio9oKmmdUPkL",
  "key8": "QWZPrzCgEVShahxAUerV2AC2iJYzgqWmfpvbPVYhBR1zAxGXWj4V28deK5RmLNRStCZR1jYKSQr6ynDhLzaoPp9",
  "key9": "4HQPMYWz4LujU7iKp2n1powHvdB29Rxco8oqrxjLiyT4mCZE6SmcH8e9uDbTX5XyC9N1Rvi1yTpMobetMdvWQ6Cb",
  "key10": "5moE15g5E5atafNn697ayGHfd9eWy3fgg49kGUD1ZfS2jqJR7MmvtSoTtJ2QFbGDLt4AfgX8N1U3X1b917NhfaGk",
  "key11": "2qt9LSSgMWtCqRTVyqAGPiwd4Rxd6ftwECENR3hsJvWSxqjxDEqqUN7pEir7WzKaUipbjsZUfWfFUfEazkfHD3d2",
  "key12": "2qP7qy6dvvw6Nd3yQ2YdsonqhxcL2QvX9f7uhVcDCz2WmV72qME1UqQpGqE9nhPri8Cou9NGMb1f8PuMLymmL2Cy",
  "key13": "4MUHnxQ8T6a37ZfU55fjTLVoRFG2u4qmG9d8jKiVfmH4kJJtFRm5D4a4s9hqQJidt2oyMZkeG2KQ8soFdrH74Kd3",
  "key14": "2iYS9D4URAi1nCopCaibetAesZc4h3AhEU5vyRwpHtRjfwv4L2e6c3Shy9KsYtCWB2fR8Aj8sNuNCDMEVyDXGhJg",
  "key15": "2o86QsvhZx4Bc64peEVfZFjtXU5GXtaeGkVq5NVziEkFiSPcDdVS7Rfjp8yoH22fkLLg32ffURyCwxyZBVze6BD5",
  "key16": "9N8x7fDhAp7DVondCoHRQwS41PxvvexMSXE9wjyaKK28jhNqjvaCVqat15j32kwCTNWSdqY7ffnrioFh5LVPaPp",
  "key17": "4CeuFtbDbsruz6oYTPYcQSgoYfrJ2mQg76wwP28VEoPh9efReVZepTYVLhk3ZUGR6VH9Rf2wMBhZMhTimhtCXY8P",
  "key18": "49W37R1joy3LoJ5hqPbrpaibbv28mVeFYbaJkqTnYUFBnmJ4ziZxUThNsionUyVDw3PC4gx7BHoqid5WVipV9Ckt",
  "key19": "4MJT3HoZuhAqAit2SkYeTCZWUPDRQ7kALfBP8tpWmkiJHRC2mCX2SCJn7yWLjcfK7zeWiKR7WcVv5KthYAPKTUhB",
  "key20": "2Dh5bTW27y8VAKKte2PkaSp43VJXquWu95BXGBdhXvpkgyZQ1ZBG6Y9NbQ8UPuWRtR1fagWydygnVMtfjkrTUksD",
  "key21": "32UDZtPjk7Kdt8yobdTG7mwBtJ27WebLZ5PXZeu6iJST1ySdi6xxkYcrR3A6MMLMTsCzezwzxfFQBLVQqVrQxnPQ",
  "key22": "3qL8uFfsF9yjDbUoXK9LNbDVCCxATSignpECxMCjAxp38VirYS4RS2aqFLjwcfJA9CY8jmrXiKVKkMaZLNQZMAWB",
  "key23": "3eKY9xmdJKF1dkEXpBcByezhroXGkZdHJK7fpbXLp4gdFqq3yKiqJBqcQYw1zEXjGk6yyno6DaCMhk1CFMCtfYPk",
  "key24": "4cXSFA4gjHjHurfrguf18j1kr8xaYVcpNFPoHg8BZZzDA5vmvNMgv7n5Vv69dMoezeh5frCGuYSSRJDERpdUfq4D",
  "key25": "2W7bWWSXEZNTNpSqgnncsps39QzuPMNyxPLaanrnZ7xdXgDn2LgS8N13XVmQSeBRocjLZdyk6vLjQ2YHpC9BBYFw",
  "key26": "5NPE82y37R4PhRBBczCKNr26ehUgU2eku7opeVfE8FyqQoXTemEVW63KqBnRZEtQkt5wpHSWysdACRzDK8rEKKzm",
  "key27": "5ZPLakzhUWjgd1GFNHdCgg7KU8FBder2dLny5CaUSSXkRXNhNbN8EPkC88mdreWHRPb6yBDJtRkscfTJCtRYH7Br",
  "key28": "25LWMbdrF8DJahkKa6bSEDRsQQY2zPei4QbZbCCLaQJHnXkrKwzopRve5YckkwADcKo4mKAC27NSBVHZpApyvnzS",
  "key29": "2b5CnAW11umBKxmWZH7vhM4SuiAjBRWE2kTYycspiRADrzSv5XaxQw6U7atZxvEABoq5P3fkyj59ybncr7cbCuho",
  "key30": "4NpuHMpFaSVCKhcqhtGCPDNYZBWeW1hAQn3Vd6Fy3RYKwy7MgA1djqnhWgxaXpJbcrqWm8eog4wSweASL36rJRVz"
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
