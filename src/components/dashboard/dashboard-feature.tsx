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
    "2PkfH5RxeiF4mDANikHzCRXEp9xoeDkj7Swey9n7NFMhCvF3yTu6Vktreeq3j6aiMuK3PQaxQeARSf9fHZNqhsEp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dUd1BDtCd1tRsLGVccVx7NxD39TNoRVQRDNKSr1zibYWGp9rCuSFMi724JepV4nSsHjmF99U74oeRggEqEVd63n",
  "key1": "4rNE41ii1xWjKYhAJkMR7EgvHkEMiYwM6mvMQhUA6YZ64GE79GW15PTjQFd5jyMFkw21LNKkFb2Vh5VEhLtZiyEP",
  "key2": "LbefPjMUkEt8CHE6KBnDkir4MuMdMaPHgrGb7xTCYmHHKxJ8xo3divoYx5Jbiq5EhdXiCWLX1jPFPgBmfyhrdDq",
  "key3": "5hwtcN7dchqyDV6tNEmsdXpqr9Wpt3DQbcspkoNWHJWepwxQTfFdp2iR5R5E9fRGXUay7aP9j8N3YkGHrXe7ioeL",
  "key4": "3fVy48oFdFzPm781y4K3DovDUfTf6ZhPXePJ4iA9yAaNhNBNvwahm8pw8HzNcpb4rKgKFk7eGUvEMAh5CibcGbg9",
  "key5": "JhGQ2ELoQeuM43jBsbFvkwVptLf6GoBuvzB9zCQo3t7VZD8JBmjo2UXhWhH7yRteiDotjD2j2BYZa5knLr8RtpK",
  "key6": "2foQJjTW9ymHmcpAE67Jp5ZC8tJa4GoX6Nu3RXCH7M1Fzk2MQR9e1Ywet9AZMa1DmxZ3E3JmUmJr7iCWkgeyxcvc",
  "key7": "4jqeSCi7QuSLmjLNWWJ86mzcp7Q9sxBS5vrJqhqNZTw8RNbyj1TxLxpBpQqEkj1tZFhQQDR4vXjHyjc4PCg1SZ1v",
  "key8": "5ikHszG6ouA4fvVrLPotvATpi2K9bUd2CoYMZmwxZMvLYgsrnF6wajyD4Q2ovrXErCg88K6k7YB6G9D4qV9YWzhU",
  "key9": "5aEUh2MgjMJxYJyJEEiaR5JsVR6wWC1iNXGq7aAR1mAj58bhdQ7R9QvuCfEBnfEMUAwtcAspjnam9pLf5ifrxKK7",
  "key10": "2NCR28CvoK27aE2SLskAqYPDHykNhrTiHSJYeTsGJneLguxZRwPJPRUiUFcLDHrW2jhrGqrzek4yLmv9BYjqa6oR",
  "key11": "2qqU234AGyXqMpnUFfKC1HKnuub42L7xR1mtntcFz8AG2qranPtmfqkqg9FUPXBb47xYCLy7TrM8Rh581Q2dVCqP",
  "key12": "3g6Cp4bzHTmVuBcxPktLCejzNEVPEiQ64aDZky58nNJ61at19YvTTZ184as4Ywx9noUdAv1kVARZfTAZfYxg6uiH",
  "key13": "A4R3nU2yKB7nJcrtePPCoybZMvxdP46HsASMg9CMfPWNBSoHhP15zNdkgMFwyASux1gwvErJyNaBb5Cbqnb1G3q",
  "key14": "5P5DdAs1XVR9jwuxi9Lm9A7y2eY53MY2nUZG5CwLzFxfLU7ajqXUsWAYoJkQHgHVVvFNJWQGtG9miDS5vdcytHb6",
  "key15": "LwjrcgysKVLgGSNWcx1uSAkKrnWt8f1HYFsAPwEvavLBTerh7tTxq5v3pXetE46CXp6bTw3etFFDNVWs9izR59c",
  "key16": "2rmSwjTDkWQCAgXL3suk791ZDn7YSzfZLPK4QNBa1GhiKDDDtaQbnLfvwzfq3k6Hg6AZRsxZy1NGjdiPSzRctGdP",
  "key17": "fYfLaQTQx36ShNMRB1LfshKBRqoUcEi1YB1CVRwXfvSS2F9EqwnVUwM4ZVu2WgDoFEsHaZ4Maecp2g11MUh6k69",
  "key18": "5Q4hNARreL6hnXzCf5eHisptUfPPQJ4qybmXgibbAeTB2j2jy4xvFB1utDvQMaRfzXLntwUmh8LJX8EZNFA285PE",
  "key19": "3sJPhHrBD8LKNJUmLp5DPsgFvqdiHzwRiMexzfPHsdADnjxo8V7LJ93PoheL6NL42Xd5cbS9Uj3bAoM7WeHgn2rv",
  "key20": "7f5wtndQPGqfu9CCCSY4WquTFPUR2n3CjBmixtmbzaqZuMsLFsMPrsTdXzqaEcdZfYXHr8KYWZTMRUaquWj6p7Q",
  "key21": "3Ty73yfJB8EfFLnNffdEJt39QYPxugFB5rXQbFmF4cPmWfjDowPVChLJGfeuRfubTvF9qV55iST7Hn9SBwmQ3Ngo",
  "key22": "2N2mKUJQCRjnZsSuaqtkNyWNuW2KYaJtHixBas7ULWm9bwYtHADzVVm3EmTcHE4yrxKZAN84qdE749z9qCheUR4k",
  "key23": "4iGiBvuuvQLPAdV79wZ8VpUs85Co6VMpVc66LKF6TdRLRNgQWjjUV9XDtuXBLBKE7vukrKC8ZwrkwWRz5h2x5geW",
  "key24": "2ZE5g4Mn115SNK4aLZJx4UzoxYvewjtFeaQbywKDmnfetx7JN19yNGPZzpmrWLnrTerNTxYmGd5dZEEGV4qBtqH9",
  "key25": "cXD8fUSaYsUpTWTyVtWHgLyxxdqTzLnZQzPCagkMCgsfk42aDQut15GcQV5DU2KVar2Vg6d6HiCgxQ11x3nmF5f",
  "key26": "ZdMyrxSn2zpjXutwusoXvGpFZKHPRnn3cacbPZoiMsnHYbLnELeTTZxpo5EExjZcm4LR5hfirhj9mboZcnw7tcN",
  "key27": "5PMq5QNHWSsi9p4eU8SpweFNMqMxeEDq7THdK7MAZTPE6dHUwRB1V8z7GKWBRWQMSRLMvdvN75ib9P4ssdZBHMx3",
  "key28": "37XZfDHPAL9eVsdyJcZajG9iqRHiJiCpvJAnY2yAV4n7U9BJb2a4o6MWFxs4hLiVsmizvayiGFKjv9CrX8h25icR"
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
