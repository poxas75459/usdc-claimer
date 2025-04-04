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
    "5zDndHkteBL44otN6whDxT2WskU1Kg7hjJJrDC4YmKok6UhVCmwkdWQYRLCLr2TruDnaoHPPYxaQJTRt8sNVbj1r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bAoBEKtcVX45Bb2RZbEm3REqx2g4BBasH62gqgGAzS63MrYV63Wztf1z6PDBNyG2h6XewJAjveiK8N4uDkYhFaV",
  "key1": "3jpBHFQLTUb6DcjqxfBowrXhs5mbVVEgANScBQTjmai6Z9NpJKB73f4EZ77Sa4A8ZSgySfnKdRZAp6cWNwngVXfB",
  "key2": "24Xba6yMYQCNAFS8f9mP9n1bQeU7Lna5EgW2Snn77etvCKXAkxRMoCh2MPj2pVH9sf6ZhaJY29FKPThPV5cxxVeo",
  "key3": "4X3iTWcY8gAQf1Lx9hoQD82xLJynnugnsG9XUQvoGG9DmqmGypTNcB3GgXMrj4eeEaJV6vWqe1opS2fzSzBRuJi4",
  "key4": "SpsGPix5wVVggNRUNAnM9yRWcKNaEtcrsaWYD7FVgC63b9cQw4E4WWZjoKYGU2QCVJPEmqMMsqdtxU5oND7Lugr",
  "key5": "2rsUwmWT3PBkjU7hJGc78X7bs9bCsA47Gejrmj35QsRwfQyBrRCiK3URBeWtQgfNBSRsXqjNAC4AwN48tkVYC6hF",
  "key6": "58AAUEpw4AigC2o2KrimUE6AZ1JyiAEYbUZvegegFxSeyrvhbDtn1itJoYdrsAvzUMbou9DBDrhPg2wksa8wNreJ",
  "key7": "h6VCKH57epWnhmPXX7tpCwYTg6MpLbtrBfrjESKZt6Qg2WPRhPiuhq2pMjjq4nSjUyuu5DhMVd9UD4q8T6DSLsk",
  "key8": "XjqhYij2VxqZhvWwbNkwVGt44yoXqajxCES5jWU8xpKrUJFFVexHsi8yXzG7b7nj3quNbdnfCrAZHVKWwok7XWe",
  "key9": "31ro5SQAd81JoBpWUMCgsuBuwLKsiTvVxZDX2AbafAa7tBCPHxpkjsTYmr4Ebam8MEhxRoqd7bPaXuYm3mkrEre8",
  "key10": "3CwACZQ7S34qmXYE51mG49kKS4wL18PZhz7VmJVDTzknwsG4hFKmK3bQtkBqHsHdVZvnaE9YPeXs7xsiBBB74vE5",
  "key11": "4uz21vkoWNNERTJ9Hww232Jd6CtzPDzyeupwnyn81REEt6qWt3KeHyAWgPam1rdgBCAs49b4K8T2HCGRo7bovn4y",
  "key12": "64ApG2vRcbpBJo1iytSUYdDKJzeHikicain9spUH2z5bgGBcgnTuQm1787kBCtyxoqiYioG8113UjZhQ3YqpTGJQ",
  "key13": "QBYPCdoo9ARHUZmeJUrFCFqgYeUgButsHf6V13tR2nqjE1cjdESVAnfJtMZ84hDPYbVYSKv7dKkpSmjW3jzB8gg",
  "key14": "459bucm3NL4WjmfACbNf9jEzzs1WqDg6daCTrigJNQByHTqEoRmhuBRBYBLXwS3EJKH9CEASiMBXGXN5zYEMXHPL",
  "key15": "3PU1Hv8EviSph13qrZGuc2KFQPDotLfzF1z61St3vYCe1sxZ3uhPzHDWCnEVp2LDNcn7ouqb3ZfpMLSxkPvD2MTA",
  "key16": "5g2sSpwy3JQ7Kskz3JR2CtpdVSvBqaf2i1ZEv6EC5DCpKpGjjKwop4mY52X8kjgdLW1UJrBtq5iyETAgFeHky4i3",
  "key17": "5gpuxnhnQ1JSegEw6M2DEoBN25njb7a4AWZaRv3hXxBLNNpMm2hr6Gk3Qb4Z2ntwvp5KT9EocgWiE9owpKeSpjm4",
  "key18": "4TS8ZHyun3B5iT5BgQrmnksmGgm8GNAKjgj41gBACmV3x9gUZ8dE5YkSVHPiJyjs3iNeTTrYVKD2V28P3KGoKYff",
  "key19": "3MyrRz6MbrHDoUUQALS8ZJprQYAzQf19GmiR7k1dFM8TrTqybwMaAq61JftZ6Z7YKQJiqSpdTHUobF3shpdtVmiC",
  "key20": "5re7QWxr9J8qBgVbceNjUKfUPdZfRd65hWhSKq1eUaPieD7AEvUqKr1tGAsQMYun4z4cgM3W99fGQfKT3t8VyxBo",
  "key21": "4duNvNNMXdzCiCJKAe16Hzwu3oadXyKQ73Rb7XULWkvraQWCwBpJJH8zpaBtRbRCmWcBZCaKEjX6xqEsMYVj5LNK",
  "key22": "QuqDzvFg2xfKrMTtF1iRcEhCpyZ5rKhBzeYknjvcBG6eJMHn93gMPdAuWHSM4XBuQWPNV6xjj1kDGhsy34chQDL",
  "key23": "2fXYeeX56KFkvSYdwEBiCmuxgfgUzCYsJCNKxZbqu5nGBHbHn8JL7Y8U45WM6vm7xEZfm32YVWWpzJjaoiKwbB5k",
  "key24": "tdKdhB5q8Zzx7bKm2HZ6WnfA3s8ARGsnGrRywEvu2DbgLxR7iWRyAYkzkAnCVRQmLubbNGU84E7miV8HjcEY4b5",
  "key25": "5Nec5UWjgbiar1zcksMChmpoW3sA89AvoVa2Kkp49VtgjwXVikFAyTo3XFA46y3Q8T4CJCUgzSdt8nQbgRduybpt",
  "key26": "66hn5Bz88JVDNtHpFQoYDR2qZzbu9rqsyJbURP93vcTceDBoZQSbBR8UJSPKbnPth5Z4F5s4cCgVtYYX41Qc7wMy",
  "key27": "38pxdCePxxM75mL7zEziUFHuc7bq4h2MipkHnZJohjeNEwwwtAACKYw6JwFL4TGzJj3NYKzUMZ1Ykzdh3B9MCiKV",
  "key28": "4BfbHnHBFBenBFYVFbRGxkmDt1eRfBWoALwNvxRCUuHShWuGNdnJzKrM9Qbg4RkHBKpuJAvZLqTPcuytVwbFx5bX"
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
