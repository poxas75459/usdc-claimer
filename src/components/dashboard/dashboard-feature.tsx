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
    "5tMqsHMs6eC4Jw1JhR2zw5YmdH33Y2XtdzqE8oN8rRXmgDUoSqcnFpkMarudewPp6mnCFN1BKSxaCrLgTPgdeQoN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EPMWwxU5FKJB4guSU9vPjxSvvbrWZjNVygC9ZE9YgcsAWShPjUq9z7SWigU9KuCtCbB5UZefYhq8vignPqPyuNy",
  "key1": "5r8RCowbWcRreMCKyhAo3xEcAPfV7Bh63GspSwS82z8dSEepCWBKZWHptUUgJfivZCAe8YNUFGh5ZMFmiPBs6xLa",
  "key2": "5oGovYPKWhndUJDZo4ZTQeYSCkD3AY2ugQQVYmHNt6Xk7DqfgT7F5gQPrk67a1QMt3Gj2enJrLkb1gahUQrzHrEC",
  "key3": "2JxGbsacT7Xr6KjbFCVphiF1WEvSAe8WVzvVDns8MbJfepRHra5qz95f1F7CT6bnrXaEgxsujwxPbTacBKCH7gPo",
  "key4": "npKF48PkicpbAwB1VAV1V4RrEvEjFUJLpooBuxyk84TWEkjcEZnTfKKmZVNjijLp5zeTp99uSQXTybcXCxbwZv5",
  "key5": "3wLT6iEjTD8FvFtZx3Gy51mEFrfPT9mQ7kgp9rQAuTXPpxcJAuPvybVaM8MFzuiP33tePrropzNC4LLfx8XHAqk3",
  "key6": "AQVbKLQgEu2D8UQx5ztnCpTfW4N3VLBvGyJmtQqELb6ZbzMMWxXZY5Mb8HEQQgkFuJAxxKASebLp8JYFee2UScb",
  "key7": "3ZZ4zn8dKXBkUMdtMdBCqCEhfM9T2xzpSg3SbCGo3ApPHwgQx5KJsR5QBoK3vZ2GhS1XwYY9RmhTcMBdPJ1Z3Smm",
  "key8": "2oreGPihhCXQ54rWnKWNigBc8EfcmbpjqHi4unQwDtEbfGPT1R851hdU4TwS7gveQmBoNN2T88w8rRjN2LNDeoRL",
  "key9": "3eNGS477EA7ZPuXKXZmg1AoCtvRexuxDLRnUT8HDwwkv8D5jqAs6k1evoyhTcwrNRzhGP3Zd22bKQoYQmbopPoaE",
  "key10": "4vsrzFGSvxDHyNLu59bJN1hy9Ym2CMfBwFLdYxdKjNnQ9RL5U54Xbnyk8tAChyrxZmYBy57xjv4frN4KJ93W9JaW",
  "key11": "5QkidDWLU2AL7ujt2F3JrhfEFX8ReVBUS8goTgskh6kNw5L7BmeHPnQy7Q9tYknZEre4a5cw8dEBT3tqR5gJqaD7",
  "key12": "4iRkht4MSSDx26PiEuVxBLdQKD63AdfRV6fD1BuN8tmjnDcNkaCnXchSAbk5mP7LKWZiJk3nq4hFNCu2qB1EfVPt",
  "key13": "5ox9XH3mFyRVY3o5eEGHrzNP37jYziGyU9sRPLMGP2wjN7ZK7ikGzY6eGqJ22KcSjDRpVKavmakj3XAuPDjKq8RL",
  "key14": "5dQ61Yioyx7us5KooGZ6n1imR9XpMt3fFBSGqDcSFb9pm5EzFdvJioHcLoUUbFKyras8p6E9NZrZvFHsV6pbqK88",
  "key15": "oPrVf41TatqFDe5QNJAUxXeXSAZz6Kf7xry3VfSE6dSw6bHn6iAvhtrCpFXMaYduwma5jFbGR2PtTSBnwkcwCes",
  "key16": "x7hGNTnpbwwHSh4L3BfZd8NF8cGo5LqXtYQueK7oN9J4iLVH1xQhayrFAtCU1oZ8wNcNRFZrNkiuHQcC49iFE2o",
  "key17": "54yHQTZDDLhPxgqMMk1KvwKiqTpAEvC4KLQJAzMGrRL1A5NyDjBopNyJRuaLvVvB8bRzteUEL2fD8u6dJwDuTxb1",
  "key18": "3SfvCF11cxHdGPhz3aRutG9WwsNo3tpZLnPm9QQvdEggUtYoTN8XfxaCiu2MkNUbg3v1zR5kedHUxfo7MciYhYrf",
  "key19": "3L3srR6G989GFwzueDXD15yWLVKTknGYoFPtEG1BQjhzxbBFyW2tB5eRgY4UD9NAGvTmWP9fU2YX3UmYdiVP7Y1s",
  "key20": "5DM5KakggRwwEi9MrrxLEXUNL4qrmvzztCZeP4B9eC1jYEwXVMZvPRhQGqDHxTA7MSZzTtbWq5mBt8s6VJ18srGn",
  "key21": "4AXcH9x65iTAdwPmE7d1TJ9tJd6b24W9Ux9o6zt7HqrNk15nuyK9N8H7f54chbCJoT6a6uvrw2kmYgCmdrUSNo6a",
  "key22": "4pk4p9ij539zaJbvvu4umZ1RMVxvEtirVePW3TEFr34nWqVi5nCvtAv2DhC8ChMwXdu2xopRL4dncPWj7o67BWyq",
  "key23": "2EGLCuKC3aEUMsNKwwhZofjBURxx1ndGkpNH7eK5FdtPXBqs8Ei4bxCLp8YEYyXUJuZrT9qAW52SJMYgtypbrmYQ",
  "key24": "4z9vgrsrrRjKwJwYVfDuxkHmZdMWxsg41Udh3FryeS41qAJqFcSpNYeG34528iuwUvhrEs58NZpo1sCs7LFbLxyG",
  "key25": "2Nhsf64TBsoKYeFxKtYtwbvN6hwiG5scwgVEhhmPRm669quUZDQX2Z6SMW9V76xp44gCsYx34WUeejKrHmqPjnud",
  "key26": "UDCwyz3fpV6XQvzFqzVD3Cg9t9KPmjPNpju76FTNypRWcCTzgaerybNzcTvK66C7HLH94fnG6Lb8SvJXyrBzyb6",
  "key27": "3oLaiSkvYwxb7hNVNxvSUYW9EeoY66Ejq6DtwhvirzNumLu7SEFEcqFisiYryzEPncZpRFy45ARcZ25y6eDX4FhU",
  "key28": "37Ez2joxATjrassa3xsUkGQ8JDMioo7sTZc9RzVDyR87mb1NJ5MTTS5eZs4adnfLc8d2KUT8znGdT1nv5KeEmNgt",
  "key29": "hNZoKs5VEwdP9R3eyCTBUTLHHWqwGubHnBSXjX4FhdhGf3FhutZpzkH5AiVs3wYBEzsYoXQ4ibPpV2mCSDMoG9e"
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
