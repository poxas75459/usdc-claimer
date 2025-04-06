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
    "67NwqszzcVk8ZNwbeZ4x2XTNKnuVmS2mwJFq6MxcJQbyP9HHqZpynQJ3BfjVaq5UHZNKz6fjCRyHT2YFKzDKjhDN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xySsEFXfkQtjvah6aAhMdAHrjxMtHJfeE6rdBjY3vEq9DpbHRJr4Qy33myQyKgwH44c7mhggvqZRYFomr4vDmR",
  "key1": "4hBrKoQ5B6Ya5fHXov9Hqp1pkdENgRWMR16QRu7Tz4SS5RYAd8o48HVrViTM4j7DXdrU7xdk33AjDVRocsu1AbiZ",
  "key2": "3st8wXwuNL7YEfPPXNxsozzUbJVF8Y8AJ3Ztfcng9TaDE6zpBEYfydFyyEQDuxDu8618ausArsbe5u8FxmVp5JsP",
  "key3": "8vR437BNCg3mY71zrf1TdmNQQqnFnxECEmJ5rM23Nkequ44NaKMtY3oiGK2pmkFzt7win4WP5b2PKntqGvx4L1q",
  "key4": "4wW4bLjR6kV1HdjaMpyKfhsusEpXLm5qhrJ8iA5wdozM3iPP6YQeFLVSk4MiQrBbNMbwraQvTtVyku1uCsqdkUwV",
  "key5": "JnaPXyZkAGWwPv5RVQJ9BcKBajUE5JGjvRqLWfhHjn8w3vzhbFChs8ySC6Z7qrMDHopV2RAhKW9GoNjTXPd3pKW",
  "key6": "631co6YMC8VVwBzzGMJzyC5kaHNVcZXhXA2k41JdKP7HxEnZ2z9n3uSnvefZZJVS5i7VPhkj7S9piZ2GrLQSgTYF",
  "key7": "45UeRyvCiuQt9FyCuEDDiD6ehCxh2mAVd5k5UspNPH7azD33QgQ7g9H8KWakp4ePNHPLEyzNTjXZ2nn9a9xGH1S9",
  "key8": "3GgTzUr7DKuzDUzgMvdvgEQC8kRNUNYsjPCnQPsDvKVXKmZ98S4vXaDz4A5hFKHeV7HPXmprLzVrnT6VdV38UDbQ",
  "key9": "rErfjBBsYBiWeosNCxuJUMHAEGNNhnQWyJWGm3xYuk1pGwLgTvC1HzmU78W4KzNYfDAAbK3qSths57cjPcbucRE",
  "key10": "5C7qT6FHyCrYkA6cn3KKMiG17g9PAAHqq74wc3pC9JP7f4VTnBbjhQLcWAfKdD6uuY324eCUCEgkYbfLZUjPqDDX",
  "key11": "4skZM2tP4qPcSDeWMVeCr9CoPTzQGZQSRyLV8o9HTB5t51rNhC6CxKsmR5rNtqxzZDkEnXZq254MJEEekDuNhSP2",
  "key12": "4PnKcs9qjD1eHwogFi3FEk9DpyNjZrDjQSQ2SebqSBvnjJGhiX8YS7wSEou7NsZn1HdzJJRYMyaH7vPxZ6M1hkvu",
  "key13": "dMkxiUEmajiuWmnQV8JGkFxbdQP8BGK4hZEmYg7k2fqpZ2PyY8T74nKr9o9XbuMPsuWkLeP4XGtScB4HYJaTWHJ",
  "key14": "cjYn47rUN5hviBF68ZbRqgWCxeMxfmN4qPePz8civWa9sxHNDdyXDDaSNZMu86k8DBz9uo8beTDwSnSdfwiGmGh",
  "key15": "5TsikFtTBjBbcT3HWDreUcdGCJnma5YkfoAmKFqWAcRCwFP6c1W18tzUsu48UMMyoXw5ZK47zhk928TzcdQMw7gH",
  "key16": "3LHvDAZtcydNyE6mVSCt2D86gefRs34GEWwk1UNCNUodDzxrY2pkDMrXG182cEPJNYcNEf6VeooRnd8pmqJKZKia",
  "key17": "464ysX4rHMpAKZhYJJyJGQE2sNVMUq7t6uw7ZxKJiQpRiqgkPvbg2Bz34UCDTYCUcoiWYNwPya2Np2mjX7QkYrnz",
  "key18": "tqV32uKXt5W78BEgzYg1XRUnE3ZqYCLjoCR5JgXZAMHmBU4KAB2CQ5U3SsdxCPgkWwW1YAgDqVtfvxPtywLhg2j",
  "key19": "2n55bbKTZydzyFVPE8rMLC4CERGhUwTw8oVo7wL6mDC5eccJK38HMHzZchU2XPtWAvpy4bHqHorexUrzY5aMSNdE",
  "key20": "5DRK9nx9V2QnUP9cxMMByxgVgy5vavB6SvEuQxaZPuvkEiTiHGixmHxkcTzKr1gVXPtpzLN4kbUQoH67jkXpC7aM",
  "key21": "54ueUp4cWXXhvL2EbtgXohc4YzvaBYfnW7ip43HCx1uZeZSv4sw1PnnTkqSzGVjwFJ6X3EjgcvHVczRjjJWUfzs6",
  "key22": "3cLqkyoRkfQ1bPtQ6x93A9XfkvVE92UzctszQdjpYuFSp12CSLyEpt12bu9hWRsbGsbZoM1PDeS439o1Sras1hC9",
  "key23": "2ZuLxgPH6xaSibX6MBiBqR8UCuoitG8qkPmXZmR8vmBgK5Fhv7T8tKoa1qznPdaNKPK7yCv4oXaCbLyh25bAtgcU",
  "key24": "623CxMTUKNYYFSpEGDaAsd8gB6cAMnR1xGAJ9jB79wUZSPU4PwzmKe3Y5CpAEeCeG4siwdzqg7JrLLMCrjibF3AS",
  "key25": "3roYqWgi16aUVSUpntDG9NF4bd5496iWtkrobLe5Lqf86XztNN1eDyA1A8e5L2EoHcnSXUpGq69somTeeYehz5oY",
  "key26": "Sn4DXXeP6MhXT9T7swwEDBD26mvuvuqezHCPyL7j8sdpqDv4ssUy188DqmCGacXWSwJCDifEHdkxfAKTU1DhH5v",
  "key27": "3PBTBhDKEyMa4Dx6CJTGszmXtcyM6d9QEqbrJ3M1xS6tapRFe57A4B5tQr9ojdVLtzE8bGpkgUHhz7ctmX8CVCdR",
  "key28": "3mK2yRbQQxF1cjBm9ZGSJCaeVoBUM3s2SQ9Ep81uQ19KiZmJUjzqKXAWKfoj3XUVFBWzRfpMGnJBLHExnGninbEn",
  "key29": "3vyuugUM81jiUqwD1yNBQdct4uPqtQwQfP5Te8adiTG46b557scACrBqWg5ZXisNT8us1RDwkHdZeALwARqJ48ZZ",
  "key30": "3S6jnKHukJ8AaVQkmZNwcBN4tGqK1KS7R9Jk3PY19S4MgVVzPcTwVyTtNQRvZeL2yieRNBtA5f8jFhiDfMtHgbMM",
  "key31": "2zA8L9RjmrjnGTvGHBmqQAfLQwrcKgiSPF4bLirWFzzeGL3Q7ikaRfPsXNe4iVJzwNxkbKZ1dsFSJQXqCF3s8gzk",
  "key32": "2TfubgikUX54fYDHPUnpKhYq3RxE1JDt8firREVFKRn1sT2shuma9mhTR4Ety6yK8TYxGDerchteK3B8ugv9erw6",
  "key33": "3x2hxQDj3kEeW6v1WWVGgLy3x8QtRrrEn9odS8H6WoyixZ1Jg6JBbDyS781MTEv4zZVujhwriKS2uNkuK6xqGEiy",
  "key34": "47pJ2hey2DUVCChLUosSZEBc432g7e4tAB9QCpttcw7DnA9zfoa8sfKQ2X9BCKSSXhbdpYcsZsYgUKYchsuXDgjr",
  "key35": "2hkNEm9zEiGEb3HDsifwbNc1nqCGJdnZQUxwztk1BwwwbhunrGEt1bxhHoXpVJ2hb35NBxmRKtro5tUR5hjBhR8h",
  "key36": "37nLvcU5PF4BZQ3caCaukiyvYUYFJVsXomy3RnZMW71jrv6dg4PdZm7ABSR2uj7wB58UbS7vv8wY5xSd3zHjGhBR"
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
