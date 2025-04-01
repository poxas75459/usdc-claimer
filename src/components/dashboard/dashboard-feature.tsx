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
    "4YFphaEEeTpAT1Ciw8Kc5Gj9dtHHJR4wwLMBjVu7dKEcggmgxfNeE831Ga6qAA7eTDz8ohuuPvv1tzP3bG9MM5zK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UP8uFcZBE2ArnCyXLKVrNH7jnP4gysnNdzmDCtxZH1ci1T9psYgnxivR7kgcMoFp9pqoutaXv612Dj1mBX4yiJX",
  "key1": "ws3mJJgxHUCDeN3kEN1dbrtk2DiSkS2wGGJcsYZemBv9AJMWiKHkjBaPrLn4QyHy6A1B9wdkG5aTSuJcdkFcgmK",
  "key2": "238BwAoHVuh5PRamqbcLRCdVg9snJP63Re2Cnz3onFr4UNSU4uLosmTipUrbG4RczLuLgVX4GjPeWYg9G4LMpmq1",
  "key3": "3ccfuHxL7EP8mZGrSAL6ZH5nUfkknwx8wJhsXaVpVVbhzojbriXMj8XppdxjaEpPSt2vz9o1r4wW9jPvS263AApD",
  "key4": "2YQVASzFfyGMYUHqcJbJRZEPGPRuCp7ajmwZghdBNHnKqarVorvFb4iMojznp9VuUatv2NpjJNiGEPotBubJ3PYt",
  "key5": "K9BbLzphsDPX9uEGyAsGZWX4NbkY7wzWWPB8Pc63BSZNiu9inoC9AJ7YikQRuWNvWSXkzbk3umKLMMfiSZigX81",
  "key6": "4137uxnQzcrvmob3f9NywjeskzAhEy4oYPqj9pYi4UXTyk3vSqG5sRbugzpB7f1mD1R3Tkap3W7T73RqiDuaDL87",
  "key7": "2yA1qrc9EJ8AyKBrfWcRyLbW7hZFqwDey8ZCyCKhvG4vMcBJqg4TKrVPgwYLVNKThCsbo4yvRJVqLPePTYoVhVbh",
  "key8": "5SvKbC3MmcC44FZX1vpY6qRzcsXdWXyttvbEbF9jt1cTFVC8uiC91wNEreXVavHsiwNMYDrYP3HvmwpZ3FS8P2oR",
  "key9": "8Yyw2YBr1gmiv5dkNwaTMiHSJCqedNEt5guCJjspCpELJLtjHS1DMfY2c7okHt5kXa6svDJV6Vq3gdthF9ue5CN",
  "key10": "2gBrY5RgAQK6K5PGZDmJEdxkfuvM9kNJQWMsQBsNsnwa51ArCXYrfLFBh18gX5xjNMWWrA8PRdyTcajAaX4zzudJ",
  "key11": "XHGaDBWPw9REmthyywbXkEcXYtPgZztqqm1x3ZScBT3rLij3fPAubvFZZrFL9hHiQFx4ZGo9JE189tLKvtyaxXQ",
  "key12": "G5Z5K54nau26rXnXp3tDZTMVshDnSNdKMiLUhVf4pExdCUZEzY5Y5VEhiqmLEib86CTBfUU6RFEKNiyqM7BYqMJ",
  "key13": "3iovY9EP33kknrVxZwpRRxuCgnsXPj7mXDa3b6B1HHG9CajrhngaEn5WzFwrZcqrLciRshpAem4TpdzBDSjwEfpd",
  "key14": "5jCq4isLQgaSham5hyGc5Hg9AiiuTJeDXLtjiNAg5aPku7yZiPychSohGu6EmHKT6PqupXQ1acHjJip3c2h7qEMu",
  "key15": "46p7vNuBpxaRxn7Rq9pCreX8BWMq5ENW1LB9BsY8D7xdhSwRKRuPua7AWEupCyh5jdrY2uCYj9pWVS1cCBuMiECJ",
  "key16": "4BDcTKCvNfHcTpJA4oHfaVN2emesPfgLMGHT8Dhjk9gsvPbRrvJ7qTd7tE2LBbFnusCQeBeMXKt8wkHuMtTcbv9G",
  "key17": "BWcEvNKgvGFxKXs98S1rtQNFbzp8Po4gVserLxSsyoKjA4cYFuWra53rnmSsjP6Uy9Wi66x1sRibMi7kLyXsqQg",
  "key18": "2Z3nmSoqnfkUgDPg853ZYxhvK2MzGA55niKr4K3vxK5MwRpasyoD1ZFMNeFE7Kt7iNx8YToHo7M8eh8cDPm5bc2Y",
  "key19": "HDneERVBiWxjzSPk8tGQVq6SdTxRozhkGk638PDPnCpJpQKs6mf9WevoznHC5wQwYXtJKJKh5UZ4fCQQdy9bJdt",
  "key20": "4oB56NEqi5LmiBD9HA8hUY9AJdnVkqtqd6XGG6L5Ri8QGVQVGnRFEiCMHUWKaubE69aNdKEZG7sUEz8jdTUBNt6K",
  "key21": "2Fe8xC7Y5XGmvzwKL1nw6FcphTecLiBWFmeMzY54USfxPbd5Lk56rJr6aR38MmK5xaKsHY1FE17XPBBJAJDwfpCk",
  "key22": "5yDLx9BgeR3SDpnyzFrrc6yCLzvCeYwdcgkZY6yZhUN9RCTybYb3wtUzvVTMUJaqKzoJKsEy8P971CzsMKBDsF7Y",
  "key23": "2o1nLNawJWKt4W9Tbo3Ch37EhWz4FnpTEoDCio5RS6avYsEuQ2oWPYwKNVRA4CNz34P4hmmxSqYgAB6q1LyNvowG",
  "key24": "224VjWp8mqvUKsi5dGqVvzmoXFnHZtFPmDjTLH5hWvDB2HDqrbn51FQAHwu6FBamFFgx5gerttxWinvLsYUo34uW",
  "key25": "4a4FnZ2phVBntJJpUb1SLnKkWyzut6yqH6J5beSNkxLZBfnKyGkFQZvPjb8PkyTSCeRHnK8npKHcyn4gTYVW8hfM",
  "key26": "4KndDm4pj34GgCZc2rufUfHMF64zKzwhxzopXMXi4gD14EQxYpRV9ME7k983BT8Pt7rMebJP6rUaEnhbn5msdCMU"
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
