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
    "43Ea3YKfaxRLre8u68jBpJFJUS6GY3wGjtjMgbX7PFMQHuHKe59otGwEe2BUXVmYT3mNULUHCKVx8kfRardCtFvm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KSi4EZG2DB3q8X4obfJf5LiWuueikpvSeT4MncCBCSSs4c3qmz9unxuQddDrqTbTVw3CJVAnQ3E8YJSfxCZPfnX",
  "key1": "5e5spaXSyDGZnArf2xM2vtE1mzstuJR1To4Un1iN3c4nHM13hMJG5PzeJ6dPwz3KeHD12tbpAafWc1TVC6bkQCkr",
  "key2": "4pceqKLhYFNBBpjVC6KESS6wDdvvfiWWbSkSnmY6fsb8v7nyHBbHahtkQ9KKPkc1uF8uunGQehwywtWnM2Y3c2AK",
  "key3": "w2vKp5yUgcnoLnUtLXXVX7dugV5a6zCkWjTXF4skC5dTCMiHsePQj4UuEYDbWcGdAtbUNsjBzcQAeAgkrMjorYK",
  "key4": "3dfmLwvPxqgnf4Vfhvb8q8aMghKqst5fkwJHEbxvUPsPChtM9171rpmQbUonwuBMx7yDjqoz8EMSBmdCmrAAVbY5",
  "key5": "2WdawYmy3SN5bhK4rDSGhw4aVieL2Wt2m8mPovoLo7yYtfB7soxV4R4hoApUWRWuiw1SxFubbPLkEP6g6QrhRQef",
  "key6": "4g5e5S44Zwh5bFq8qqoeF2ubHwQoHdoFQ4ot5t5mV9eiq5SRKtC5kWtSLHJgarKVFv3cVYnZykLzerZugLHQkbry",
  "key7": "5UUERb3RCAsRRAjQHSdqvoieaMVMj5v6pRWobkSabkAsKpWoCwPpQYMraF9Z9ghd2pUrS5zBZFM6ocpAxqYWGXeg",
  "key8": "GZDNQQNrHQoo5KeSuBZBNr7pxmL9uAJ8NuVjFq2UaL5e1JvMftxPKn7NrnQgX9iXJMg1cZQvVUoCDqqqwgG8aKB",
  "key9": "5MzWiQFKXAvsXd6GgrDH8EWFPLPg6oV7fKfioE9jYjCnNm7YuFwHdMQrE2im1QcNBLzL2nQhPmfpF2RRCTLzsnB4",
  "key10": "EvUd2yfpkVBeurREEXonRjMhiSRfRX8s6s1196tmtw6K4seJfrjvQgUksoybxTxbkvuHcRKnAdezapHy6q4reJe",
  "key11": "5DFebJKyXJLNocovUykvXkiaDke8GuJ5FjLDwiajnLFzfcAndr4iWWeu9EGv6qnBxLeoxqWTadJcKSeRwUYfkNHn",
  "key12": "63B8B8TUXpDFFpX27ssAmVYtKkdQbgHWrnvyQX2wS9EUL5e6uwytF2wRvj9Tiv8JcFHPSprDUofnfRLh8kWyVEcX",
  "key13": "5kkTXag7tL1xzPXfiLR9U9QTrLNZKou2YH542r7FtF5kFZB76eRFSzLY8SEaLbUXGDtcLxhVidKLrpRVFSHMAWSA",
  "key14": "4hY7RKd1QVKBgNCiTkXg1Xrq2BL8gk1y42DeHkxPRU6fsEPN1rdd6R7v2SoDaxpiuxX1C4TkfpjkE5mRwqQgxTSw",
  "key15": "51sRSQGJjR8waAAzUgniAG62q5vZYxZi7RpiQKEzPxUUXRktSLo7ZGCVj8t2sUKsiHPFSsDwe9VXReHxoWrrKW1R",
  "key16": "5hByRqjzdh7QHLfHCMX51nD7dkiqf6pb5aBkJqUUfhtNowC6CrduuPf2n53PRqNyM7agBirAiKkfs9Q2tmGShPRF",
  "key17": "5xX4oXDYGn6NMSfAQ52FCtvjNbwkiKLaf47PAhoZ9mac6h3wJGHxgL6vDg3WdixbAiAZzYpJVBHErVzj8RftLZcx",
  "key18": "4MPd8yhg2ANaqCE5ZRmr4GJG8XkcJcYdTbz5prDjPGzveZf8RQ9NFS7Eyr8xRKMjHzTcqGq6SPnbdj7asUxPqyeG",
  "key19": "3apFMkunA1bNcgGs6JmDXy9gFZf5BJKfeHzkzvPDHA8wZjd9V7Rrqw1qtEwAAx9wftYoLQUPVQcvZrusEjyP2Jxz",
  "key20": "63YMMpbss6i6v2KoyCvSYbch4JAnGDHEagVBPGqwwrMder1SnpFAurf7iHHtTXsWrPiARCkTEEYxMq9gjTDRYKaP",
  "key21": "4NMCBc9TMJcNPGAKxVKyA1P1SxC1DZeUAxnQRFhXAr8LVNTZf8PWtjCQVJZS4Hk7u1FrpXabigfRt5dEBdwkLa9Z",
  "key22": "48qbsWPW1ETCJvV8urB9Fex4ddzEsh73gg22B2XQKZRGS512xbwRAkPyABqrNwBW1M6j7AJ6UtdDZbMSmGzu296v",
  "key23": "4n9qkeBCXt69Nsc5WpX5AeTcQ6VYrihSV7xDCtQDcMoeBGFygVBanV4XnTW3QieLUyEFqG5xbi9RrM3FZQFas9cL",
  "key24": "2qURFXkVooFvZfys9ywngB9rMFDNKV6kGuRC88mT7f7g6ZGJDzF2uAgzquVgiioWVCuLScMYnXuYBHp3oeVUEDP7",
  "key25": "2PzEBjaTzZA3nyGCdBPogGwaDDPyULjbwEVDquoJJ2VAaaQX9Ex1dw8uFVFaoXwfzNW6hKC7g8KA5CBkERgrs3ZB",
  "key26": "5N8HDoFk3yJ7J8wocm1komrsYTJuC49eJuRzdm8jTJ3X7T54p9Gq7F5jhKiYqobkqwStsAqJ4bmWfZKWTtSqezs9",
  "key27": "HyxTAtJCVAXk1MfFoRVhMWWGdpPfhnmA87HZRaQXCCNrRiNofecThf5qVo2M1w9GHKic7RZtqGeX1Z8n2LCsXgi",
  "key28": "4RL9chCJdTu8w1RrP3u4kWZuje3sGqBNGQnT8WBABx39NpM11Lq6rVPkNtDHG3CM4oKpqh8H71z2U5s3Kc81An4K",
  "key29": "37QwZQcXyKLWgEzEXnnHkQCMuFTZ23G36HsAGiX9GMXNRUGrhApPo3Utx4zdnfJyyYHeDF9m3FYgCEg888ktu4My"
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
