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
    "3ovPRuzvt5mc3o1d8C5m2M5tXoXavYmPvPmJUo6bbm9dJeYfXCrXZG15roybk6NBtLr5v7X9SFavsxcKD45iKXJg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "91CXxzVAAasSnFt6PRjjDCnX5Wfwqcb48oQd7jkyLHkuae6FzfjjXWMVJLyXWpsWPQ5vC4Hacxm7yDCh43LmXmf",
  "key1": "5hCEoRAQ7imVwtcw79DqCzSSDVQ8J6sUZTP1FZ2VE4ZRJ75mp7gAyp1SD1zjcM9E3uiQmbZyD9wtbzPmGqaRqCcG",
  "key2": "4XMZs7ra6Xgv3jR8JrDoAZSyhccKzQMRFqYeGdiZpC5auprZwiRjGKyd3UcgHcMpoL4qKZMm84nAhwK5n3w8LDUq",
  "key3": "3DeudWgx3eN1huzk2qzaEqr5DBBoueoAs3XBpp9Pcs3U7eGZAcK2aCmmCSzGvY4ZxqR7gZe7z8NsCwBXVwC3uYzB",
  "key4": "5yheE5aLv8SibEn55MBsZbzMSHRPZcY7dfTTgbnm5447azoC54T46mMFhcB4EUCCZ9vSHbeju9B4bSEgGmvqSoLQ",
  "key5": "2bAM1nCzQgHTHV8TcfM3nVbEMMX6T2xQ5GFec57Unc4wLVtYhgXfDNaq8rWNyEgZ8NUMDMLY5zhQRzFnBoYpjGGt",
  "key6": "4yfY5ucjo1iUft9DHgvLdKuHsA3Hiz7eYtifUg8qLxsa4AnLYxAqDmhqe4uxFwBTMjHk9xbaMm7hqY3e1QKH39zY",
  "key7": "3BC7NAkJjKYpKLYNaxMFoQrrKPFpwaPpiTWCMfU2VFRw3di45CNLYUcxM6osZ3JCbmDA52WELPwsV13hmDDuP26e",
  "key8": "4vkiAv2Nad4UEjQ8LV9BSpcph2ug4NpjT63mRsCijSacsnewRYPi9iWpLGwE2uDsofLBsvJUetoAo9A6UAoqwVE1",
  "key9": "e5atFN9Pn8R1HnRDy9oRdRNJ2TfZeuGKH4xbwUxofeQfGMBAfxUTRz6fRiiriSKhk7WBzjNVCwGpRFFJ3YYqJAR",
  "key10": "4eEf8K1PtzQKNiU8ckHuJu6FreSPNThYDH5MrFFePbRtURcavdi6BHVp1JtDGfjFpLtBP7UMoABdYZC1mr3DtPam",
  "key11": "3udZPgWZcsn1hK21vjpAeT3Fmw1N4onzQnsoXjkfd3oKmcPFzerZVRpsT6q5tbad8Wiapne7pBqVycxN4LzoUSvf",
  "key12": "2vEXQiYm8Eg9oNkHAk6R5VDtftyvgYxUi7tiRUKURWq2UXyds7P9fyM1mpsMJyoAkrJPmyubxv7i5uX3GNDA5at7",
  "key13": "23aQAXxpsmdp8WMVoX5vAAhH57JjY6R6eCzzUM9eLjFGPFQP6MaKS3eE5tWoBZh2LjHQnivfpEips8HBYVMDGh7e",
  "key14": "4yVFt5WGU7LpfBnCEQ3DESYXsj2Aewa6uS5VfSFUdWNcnfLC7d4VQANjH7uXHjFEdsGA72mJESXC96PcB3L58RJE",
  "key15": "3ibw5fd6GfBayJa5jAtC6bbVW8Kueni7YVG3Lm9PZbTrvST5v7HQijeqrf6ubgKy3HVEvV4HdK6NxxxzqRvwBpDa",
  "key16": "V75eVTjrm17fvjVNBN5g8rYcvYQqBMnrJAF7eQyWoBwFUtPPZ3eCyMKQpukihjVx3fmot7tmhwqLDxv75fqu1kZ",
  "key17": "brEDuFw1W1sYnMuaGbFKdqPsxjXtUXALPPJNwmff2L1dTcAJhijaLRhXbf9zvMLkBDnpLNMFm67rtrE8rJpq1Ay",
  "key18": "WLR5gQ3r2oTC4JeiinZCsmxYdc8DnMksStJJNK8hDTPmDHnA8VDM1x8qxhHKJEtsHjYBB5AWmWBZMHQP3Tn6MKk",
  "key19": "3vfWzP7JVDAbW4Mcf8DYtFeYjzkbEao3idABKGbyPpZw9U5LpQDBNrkRM3mDmkaURJhSpPjs2w8KBtHSiZMwVGNd",
  "key20": "4quUVqqCaBZaEvqexDJhorEAxbGsD1tW5YP4ifUkdCEkTDRSRgK7P3SQWxLZJnKEw8qeFVNDnFxBLTWvgUJH7nY",
  "key21": "5GHhZxM1kLuitCE966qqid9htr6hVjoD2RmA6XR9oRxK8Jh3iSdUrAt9nTjYMWRb4LBAbcpbxwChoseadsHQiGzo",
  "key22": "4EPsRbezuuSYzLJJLD2SHmLrsoVSCQoCYykBm9x66rxAqb2Vxut5XtTUoVDomLgaj84JjWqN8XNun8GAe6gXEUhL",
  "key23": "2kNjegUrkCJXbwDEkX2mrtEAgiM7tpkBfeErH61Z55j61xrDPjiQUNbeVv6KZvuEbpFkarBcxD6EauNqzfCFX6qZ",
  "key24": "5ceAoE2PgvKpHehJWHbayvnTnw8vEurXjYTRE8CWEy2k2r37TGjVfu2MsNYQkENN3k8ofsd5ifDrxv6M6cnyRXCP",
  "key25": "36KhzRBAnJT4uZNup57J2c8PUbpTXEb1oeeo2vuvugNbWCgXiW6mtJ97vfZfBjHJbgqYHzsT4KvWHoqin4XzKvkJ",
  "key26": "38gBDDAceAttVPexRGGDBUTqMtJweMnTzgpCKzWxHT5LaX7GNH7NLXkYwBNsvz2jx3VVKGYBrSyqky1qoY8ctNtc",
  "key27": "3D5Y8ysRCDYjDDkxWjMwWYMLduqCQkJx9XdSsNcMouz8jKq1QxdpkRE3q12uXRJnY7h6qaDU2t3MLsZxhg8Pdiw6"
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
