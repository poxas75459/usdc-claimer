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
    "2urnA7NQHkX34B1Ec9oNNeNLryigZDS9PVAKN2SFT8xiNtLs5tfJB6XukMrQpp93abpWXMJB2k2VqjwixdYYNWQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44BbBtcRZuESK53PGhbYk5w5mpVDnkQiCQfp9AZGLNrHrKYVosK8Vjecdnk3jugHCen5ndis6n8goGNbntkF1NJZ",
  "key1": "41PDhWDqpJD3euhhJwnsYH8caQSTPKDZaaP5jPmUzvLd7EemakgSd63CDKmUmnZPNdcit9P58bNGymTK8dyy9oZT",
  "key2": "5cupAo2kxCLRzGi3pWCzm16vHZuRAHv2W6fK6nDCQqkHgAzqgTGBu7q33zZ4DjvbrQeM1UG57NiiDCh3GHx3w8Lg",
  "key3": "DTySYY5NBNN5Mh1HGVfBzp8CuToydXe8R76yo77uuLMepkNy4qkFGVpsuEsQ1JXN3gnDgiZUPmujoLt9fk7ZpZq",
  "key4": "5My3x23UkLAW7Cq4L7Dwe2aouAHLSFtDJynAnC8mQBBe6ZNC58JRZtUhaZD8YoJxj4htxVBa5Gcsnd9KCtFUKeio",
  "key5": "33tUQKD4oSqMFL4XDevmEvJRth3RZU3bcBEf1HLgEpHEEK1w99ZjAd4p7biG3wpXXioYYnSV2ps7srV43kRVJUqv",
  "key6": "45D2iNuSSCVJ4dkRCmy6DNTVJGKBPU51AvMFAC9BXYNZanhoDysDZXrDYHkYPGJdGwQXt2ieebtpHpgqhTPjRUbD",
  "key7": "4zTmqyweNj6N5xF3pvAFkRHKRv1UKWCLGhSrnudfy3FgXLNQJeHHqC17KgVC8CNVhzTSAxXDqQzXuLYzLHAwyRns",
  "key8": "mTmmFmZwvRW84ECCvV5ZAR7UT2TWP3MiD3X7SaGsUwFZJKbj9ofGUUkCHvSVtPVnvUciZSh3pgxd3WcPGpbpejb",
  "key9": "AcmNXc3s6BMnd3xN2RF1LWKETt8HM4C6gkchS8DBakUgRmjV3fUMnmZHGxmMwncN3D4hxTXDY951XG4RFX6pWxX",
  "key10": "2jfKWaxjxDBqhcWXScuv8mSbkHAoaVL1VKMCWHseWEcYGKtyiGiSww3wWibrEL7nH5CWzjnAw4qtSzCAapgvU66b",
  "key11": "2krGfV7YatmPMsZjT82GXb45QZMMzXE7gkxT2bpDWwW5QaEqkhPZYSUzzQWDoTXKi2A52DrNX5zWKs3FXSDa62Va",
  "key12": "2obbwSuwQFxZQ6BzDc8ACBfpPgogaiku4wNfF7p7MjuuT3HDWkPMVc7Se6Cs1kTNoJAdfCEE53n13CWVj6EYJFFC",
  "key13": "3SgjeL29TWJyCBV9ap5CQgKGwKLXL1ZywHQKyydgiTrySUQ4zUeUfvJKhc5cBVp7ei98fhSE9gTHhJKF2GwDNawf",
  "key14": "2jiPF59MtkYGNejdRNkBXUUxbxZc3SBbMrVpt3djrxwtNkCcP5577ydoNCwFGEPB9Dt8dbrjRhhyVPrmMNSSq4B3",
  "key15": "24EKpzRconeZ7w8GY97bJdnCXEkKmWaeVvvfupiSPFwsbNZkv5RsnLdiQEF9SqrLGVQ3PsS8UGrnYjAAG8uQjQz4",
  "key16": "2HtTASo7pzQc1TbcX7ozjayNHLhp98tNqJVv8WuU6LDpf7gDoW7PYKzysVhMervLCJchXmjMdEsA1m1oVs7rr2Y",
  "key17": "4qgP3bTLER9gCbo2bTKwWT8Evxdsv9uupjy78M4zuE3Qp2KiHfJjPywMQf8RASqWeAGu8Cw1dL6cyn1BgAR3PRTX",
  "key18": "3poaidNVaKkiAQHPePUegqDXVoQQc5tC1JYifkLgzqupgk2NMKNhob1ifEcihfJr5gAttvChHnGMo2gSBG876g7P",
  "key19": "27PdS7CGeTrjJSo2ixMrnFRM1M8FBx2WRU8JuK6puKVBnQ3eBFzHLJGxDpXTudBfk7qv3crw2fpyxkEWe1DJg4kb",
  "key20": "2oJh7SnMs9a2xydhhm36EUQ8ZQS9v8xZv4fmrS1C2SCAxqyM2yrDRxsKGQ7pNPdUkTRxjrvie1F2faCUfgJNqGL7",
  "key21": "3Ksc3yWs5gRacUpFZoHeeVpKtvPTJc3VwHTkqj7EprgyS2mpcdFLrTif8cyKRmizE2FukibDbqwnRaHmAdYukuF3",
  "key22": "3RUczy2zC2QG6bDxDMPVYptMzGrkPt9okZKAXg61ziJiFd51wBkGXiNGXS8faT77LCbkXdmt4bUbreoHovQeWQKv",
  "key23": "63vsDHqwLnWQqH8DnvQuLmuF3ZH1s78C8rtNHKq62LQLxLdNRZMGdkUi9NbyGEewEB9HE6v6ztKc2UqeiH4jQd3s",
  "key24": "6mXEYgBTjVv8wF3DiNDPjUrUafLjnZCSfYM7fz1tuVH53raLS6RRU4pi22cCjdBcn4iUtVqnKDpwqFVAhaLs3oj",
  "key25": "3oT1o5fjotj2EqfYPEY9aJLgY3HM2qHhfb3GPgXu6MZgm9jKm9nUqQ3XtosfLXPEMg6Ftv1SuEqYzGuyefwhf7FQ",
  "key26": "n7jceCQX5mtwpaYDHg6fgms5653z8TZfkJQiXhQ9Ta1eVrBy6mdePWChMRquydFr9KtSZPkGcwkYtzBxLAavVwt",
  "key27": "3nq4Rqb4bTdwLbAPG4K6MFbbaQyMFAeMxvU4LZSqsSMP1FismD6Co2WBmwJdrydDABqCE6XudqUsfLNCgenbXVw6",
  "key28": "2L91xL3GuywNFYhXpBxVheyWUiPQocmmSJ8k5rZ9kb9p9u84ZNrpbmMgFEmXHbntrgqiFjBBvL8BZrF8kKbaPSUJ",
  "key29": "3WyX7mRMiwT3zqSsN1EgLzPGXzJgshJqydWCQriYFAQAZSGFiwKMwKvjzEdkNKefNVJ3zWUTVPYiKjbWWfj5a7yp"
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
