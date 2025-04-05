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
    "25ahoR93AK5CivnvoyinZ3Puuy42mCPdogUZyCPzKMvk945m8MriPfJWcrwdvxzbDCREWnMVNt2G5T7DrFBztDxu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KdRvyQzqdq75N3R2UQUJ6sCBh71rMZBfvYfEnSYPytakFmrsUS4RSqLtyHyGvpUAU3HXuWtC81fbNiitQHZ7Euz",
  "key1": "2bA9Z9MAroKFYmPNZDAvCUZ8yv3wMyxJyQJr5VYEfQwcyBdj3u9P2Jemt3gN2Bjm7pCKgb8nPQC95Ho9HPx9BpaH",
  "key2": "4Y8AZWfp1fJjMCxB1BigN95QqJ7v9VD3CauTR3dG2en77gaJru6UqpZBFLhcKF5GAZ1tWKK63vHDKPC4Q8Qrox8Q",
  "key3": "5ZBWB8wtvfKJL92MNwDiqwfVnuMAjMsZSLXx1csCYfZukcrbWbiStpBCDX44Qfp7xtiDLUqfEJum9fVYH8Hu5Du8",
  "key4": "y5da1FrvDabwHBx23rxsDF4XJFf2iX3Z6UuceycG2Kd4Gu7QQ8zYnFvK1E7f4NUyGRUDWcMfUa3uoULZrXjeG8p",
  "key5": "5NR6YZUuXZzQDnu6jdY8cXLQQgVuLBccjb4VtXPvLuyJqQqFxzZh7sfE4it9T9BPHorhFutGjr2BP2Vy5FFMMpzA",
  "key6": "66JtLqYtYQMKNQySWFcAtv1SLAiJhSZCT2yXDCCsNwqR7c52BZYL6qfnzBKaWkbEMRqozGEuenuMHiNDfux3x2L3",
  "key7": "65V9XuFjfe8NXj8NQMpuQXYGXGTJWXJMEzz2woCZ15LYypnSXi7ZMb5afofEETCB4eFmfyXBnZQw8RptFYEXV7bg",
  "key8": "5kKJ18GL5zuMBDufhooxb7WoLZGNc8hDoya7R4UQXyJUJbdCGTCwJEQkvaNmeWu3ewoV1WBbPX9hJicnBGxufXi9",
  "key9": "47cSSw5JUcmsZHNmLd4uC48YH5BxwR4T58Ga1FB9ytYJFhLkBjequVqLtq5aZAQzzpreqv4Uge3EQwQ2ytDffZ8U",
  "key10": "2MvxX18hXyWjfYHUq4STtkWiPZUPRjwSSFNtzRTiB6GzUMy8NWd1GJPuwDWLToLvQgMabc5T5peajiXmTNALCjvH",
  "key11": "aMZYKL35KuU6PgRVAB2QXqyLrewqLh4N6y6wxYKhNNeV5AMvmMDBVJL3W8Yo6rEcQSVVpZhrhJ6LvbXodKbKXw3",
  "key12": "4gMqhxgcA2UF19znrvU2Gf8kMfmafKA3ZXdoVYDpCGRE4jsRS1JTYza1PAAaCqwJuLBn8CT4fTm5SNqxzSvqLxcW",
  "key13": "4SRLEk3HkD2SyXzwwLwpV93sPxU3dtcxCtUQVHTNHAKHDjRDgfQNwUUqkaM9ppcnFQXTyA7p1AaRhisbh7nNiv2W",
  "key14": "45Ye5Ysqhm3wqqiL7e9Nc8cauYuNEeY3ymiwvBVXUdbeYcnDDTZ7x9bbZARwyVA3yC1qQVfx2j2RwhENjy2DkRjK",
  "key15": "43qetkmhw2LhVkSUQJkKLnwZgapVZTfxz3i3FqXEcyCMM9Fmi216B6G8qRb6MjNjwhAYfkbyT6p4oarWtUE92wTh",
  "key16": "37NqgbpB9dA1xB7v2rPWEnqRuGEMYyKAjVtUcqjN44EXnDXhsWVSQx5i2wSkSinMNPeuD46G1DawbvipU8CxESKC",
  "key17": "4wu3GndJU4LFdhqEd28MtPxgKyXkafSHqTd5AJ5sACBdPVCKB4TT7rDBiAPsaUUAjmp12amPEDAa9NoWc5q4QYsU",
  "key18": "2sJY2EAAhsSxFiaewiXKSieBZQWoQbGPANH35cB2oekDybmZWM9mknW58kMn4T7sLZGtWxGJMThEnmh2GxMoQ1d7",
  "key19": "5GvB4S7giDZBUoLYoY4e92hB4zCNj6xyCk4ns8KNENLEBmyCKajEHK71jNYcdDwoouTYTknKmd5wzKJgh8Pv98P7",
  "key20": "4Cva1vp6Nei4UFCYjqjHvgT6UYs4VRtuCinByzE3kaYxsCekU8ymvkFGEhm7nCWSKhKBTxwG5Zs21BWMkLWqCk37",
  "key21": "4pNdDdWamqKzze9xo6SpgmUTMWUvS8s2YyA5GgXGGE8u8K4TiRQ9TH2XawbDtJcSwcAvL3rdYfuuZdKPZMMwdHyf",
  "key22": "5CeYdseLH3n4LZN7yHsa1KtD8r94cbVnjFrehFupWaQHWeTx3XSm75pnkMgSaHh6vpiCUvxb8pgsSayw9me85bv6",
  "key23": "44vnfGDLHv5ffnFRoRrpBxzbhvMSshZyYNuLurjhdWUM9RfaDAiM8AN5PcEtCRy9oZMdHGkvo3DHua45j8sZfUBt",
  "key24": "4tSa2ZgcBRaXb1f3ARQwn7XcXNLvSncC65SrP2qSjbirQKPAMouTEdU6Hs7U2BLAspAtpWLMsTP2sEm4KVB7b23i",
  "key25": "2b7PfTK2Y7pVUZE7EAZZDcPqrShb2236PrMdcrbhCnitkfpiYFARS3wK2LPAyXDYXnFyKs9BRqyunMWCpvXSzoxu"
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
