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
    "4KshSCHhYVU6pZfTB6iTpXcVkmgsjsLU7gwoDw6snuEDZG1e1LVdMWF1dgC5HTw2mvnYhsLKk1DEwUE1evuChcWj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VHYmymA9QvgTdkZeig4iA6NrpVMHuxy2BosiCQSt9Npce2wF1QbgDpwsVMBZxVLt6zR7h49jMrVrZFCG5M2GQKX",
  "key1": "SMh4b5v4LgLDy3zt41TPiLcJCgGGXDJU2SbihJ81LTbfhJizcoZSge33gA88qpiS1D8a8eiBM2ExVt2BC1uZzK1",
  "key2": "3Y8xd1i9uvqMQN23NJDnqDkEt4vARG63xyY4dWBdtcv8KTtphbEJsVv1RzGKgp5ki8NCf6e7Nmz34fgjSspT1J2x",
  "key3": "33ztthYf7ejLSkuz6LJizk9gLmFDQneetgNwgbiX7Eb7dPzQ9PoFPHyea4hFdqhDnGwCWMgo1vpRKRc8uEBo6Soa",
  "key4": "31zUz3ebVy6ZheBcHhTbbwCePtcHmemT6f9uPEUgXUctQhaigJudnCJwNGrxh4nBejsXEucq2GmHzELynZ38KQ6y",
  "key5": "4nzKfini6pbnkUiTmKSkPAnYveZaSoinkBKiSR4uoxrEwuin7APS85gngZnSHajCxZD8GWmpC4tgsLK6jUGTmX44",
  "key6": "2uKHUVq7gornHzz3G1U9KrzpapR9oUFbFwdmHprF3JJQZMFFpaE63piukRQ7ugB6z3gGcRAURk5Up3J3k7yPqLnt",
  "key7": "48TCr66fJbBjLhn3jnJqcZbu5Hi6VYbkw1UrkFYKp8PjeYT9DKd5obR2gPbyQHZ82Q3NHvxGkjqwmTbmvmbf1mJr",
  "key8": "5UKfCGEoWxCYYpMTyrqLP3HE98Q4kXP1L6zjnKEisBCu9o7pDCcWFBmKrxaAu9UgfKRCYuMzgpSCn7TnH4vRU9w7",
  "key9": "5WJMAS776F5RMzfMicYybA9t3Zwn4pS8Goq71SGRekxuFSkDavrcs5C7yZf83nCAW2CJrNFHkG4BVKsSunj1YHUM",
  "key10": "4cPZqrkCL4zgpGeCaTfWW1QwHuhrJMnKQbtTHAQnYyrDe47LyRZx21WhEz5dcQQ4518RVmoQXRbpBEXGx8wUL5wG",
  "key11": "2ePuSXtimTroG17iXeM6owQJMxWBNAbuHWKZaTTgAPjr6GbYcJa5H2RgHtA8sFk4BwCVMi2FSnCHD8nrr9GznYyw",
  "key12": "5ZhdiXNr5PXBxV8oGXfFuh6XNC7psYKvZUjC8tuTe7QJqFe2AVwEaszCurMMx5JZ3W3EQEKA59is2GdiStjsrLyh",
  "key13": "HCtQX7gQaAQVZTvaDYKDXyia9nVPcdmbXu55Jbo7815jCdppimaTFFiutWwJS2Y12gtHeSjsGtP4ZEunfTMbUcH",
  "key14": "61ki5XiaSZn4R1VGf9NWc36B7aqzCY1QWVwdbLqYzogtf6d4aNVEioeavXygT1d3P2xgqNZ1291URWSuuDB7pxqa",
  "key15": "fsnM1TSbDpZ6fh3dXyyyfkNFqdkqp8nFk3f7TAUUn8pZyRjXJ8xQYyNCKGV533u3wZADM4NZj7x4MpaEGWiW8et",
  "key16": "VFkisY5uzo9mRsPuc35fyJFYuGHYAqyfezu3mvPkoa6JgboJwCTSRjhS48ajtLE2zb5GEQ58jAFJ6uniVdbNwux",
  "key17": "4LJYTbEx7g3uD15ZoA2c5fNsCh7D47CgRtAdKDZdKXmCWQzC8TJPNys6jayFfh9ja2LDKye7FhY4CS3vg46zWk3c",
  "key18": "tCJVsMBGyiQ2xaMq8xdu5BwBEDnMQbrARpcNVLWvEyYswRpAszDp564xNPsWjFSJETUyEr8UsULHq5pMG9JDZD7",
  "key19": "3izetB91v7JyJQRstJrUNvhc2FV4m3ztucesfonmvraEqqXjTtF9pFzwbYpu3SMZ9P1Z4YwzyR3DGAxYteTzRjGU",
  "key20": "TRDtnfw5jQaY5DZxMmo4KNuAwAwFGdSvKcote11VJXmF1oSKA9E8sjR5nD3SxKe2F2HqAsurjX7EU16pqzaoNUY",
  "key21": "4sW9SQZENQTLVv3CYyVDNBdLfF8MUdvxwo1t54F3fEeF5FGkeKcGRxAVtvfYTzxnMG2gJn9VygWPugFPzmYhsQ7t",
  "key22": "38ARr1ZFLz1ueFnazV9wPfYG9DydcMjdx17NBkd9FLyofpAZBffWfMMNdZYQai7goMJk4BNLvLRDxW8bnpN2v9r4",
  "key23": "3TX1j8ckQh65yKEjcaT2N6LbQiYVDnN3CroETBasoRLkeLkLeDG7diwRCbYURD8ZZMGCwZpVB17dG3zX7yFQ2x3b",
  "key24": "53fqgBmzvrBpoR5nZwXAvxRUkJQt8mjKqwcfeVvQzKdAgSgszqmR1gtr4kh5B74HJHCnZyS2tQ2ht1kQWnQU5JEk",
  "key25": "5sCCJDtWFeUQTfQpnUDFBRES2gAoEM7R1uMCgoNCWL8UXM8Jtx5d2wx6436F297xbrRT9k47ygMQFxrNDmb3rPiZ",
  "key26": "AKRAiTuiUP8qPPnFB3dyo1U2qZQF75EGn38S8Q6yEZGkvuasD7GbBS3RysQhLYzaJmHF4UJNXc9GpGVKLnuAGuk",
  "key27": "5xyJh4Kzdp2HYbCjzKvMr856VW156qowBeuzGvMEYnH7iXhr3ibJqQEktwxSa3fCyb5CKKCyUb7MbutJSKr2Frmb",
  "key28": "4erWacpRQfRx7SbCY7CJXisUfkKPg2NMNf1MaW3d1dEtsbdGK42jekm7yX5YNFhSz1nkMpLsKn6SLcouvyjktRyG"
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
