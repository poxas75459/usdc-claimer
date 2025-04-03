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
    "3JdGvhVtRWcA75rttN2Yx6XLLzZyC1XHLYUjibGzzjvHP2HC8gwCQKEynWWEf6vfMrECpnGFyhXBy1CqNK5AC1fU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hiSAQrYnMik8SMVT2bbkxLSPBtwkjBN2pdt6qx7vz1qHn7LKQ4DXyQWSCDywbp8n2K7cGmZj1HaK9M7Sn2WzNh9",
  "key1": "2beQrvLxXNEMinYP86PNprWvvCjApCRKhRseYotCZuRichEAPCsFVFT8CG5hVPFhqHGyTbyrxj3jpF3kdo1jth3",
  "key2": "5Ft8uPKdJPP1jx3bNjY1anDxHjyrFBs6vHmaRXhB3DatLKHioHgDDQvm3MP1fqMck3M58Yg64K8jHb7Bo7QHjqLw",
  "key3": "nRuDgCGVMSjvQ6cxaNBKr9CoaehEqf34wLUBJZH4fDC9VPz7ur8ghTv1Jkx62QzxbK6YF96WKzPXcTnYCyzq2aV",
  "key4": "4MFno7ymisHRdgnRecs8YXaFAd539yZ98ZCowNQoLhu61njnx1hQpxS7fyL6R9p3C17t3vYaJszWsY9Kf4XCkQ5E",
  "key5": "5dmhV5vAgPkyqhcpok5EPB4byzCCzv9aM4hLhG3MMMYm6P47t6ubYi8KiMtq1LJjvcn79Sv7NpML4pPbDab16G88",
  "key6": "3WgqvUHLHWbPPkM8oBSSvj4EdGWtJ78i8kkwwYQ7cjxp6h9n3ZvPJZgZ7GJdDEAy1SrnVPnxYuiHfPsHmBWKVdZA",
  "key7": "5kTpHFfmUSi8Q1xEz7kobJvovGdVwadr8xBsX8KoTUVgxCWdLe3bTCjUm8PkzcpUHzyG8mDRNPRt1vArWbWpqFAt",
  "key8": "22crxJ6LkViHh5Gi2B8wMUvae3X8sy5QMa7yQvpeD1MhRxK5VEvmn4pN3qxBVsykfqrjoWMbT1j9LEfmvNsdnMpH",
  "key9": "59huWn2PyzKEQgxyzfQSYwtZg5AtiRdXpienZSHhSEpizaYaSJyz9wVXcWjRA9kCeK9GYznvAxxSXQgvYSZ97npY",
  "key10": "3yr9PuWw1Pm9ZP4TrTZ6qac2KKfdiZHjXoRyv2YdGdz5Xqk9WyiB3BS6tLwGvC2s4odMBPcFWm4QhuDp7yER9ZQG",
  "key11": "jaJnVabRKwiaLsf1h3zfZjBx2pGw9hZwzvqGTSRkcBC4Zii1kZn1n5Mjrohk5x6LdLF5DC2vUZ71jzUCDcvn1Gf",
  "key12": "2Ym1J1kHSs6G7befpJxiy1i9HDYFhxv68TaEhd2RjxR7Avj1THAB8CsiBn3RuMRZgTsasVVdrAqC5PABNvtay3Nu",
  "key13": "NQ3AKoUApDG1VVz2oxJ1JnXHNRwG1AspXTcFLCJLr17W3UdKfbTRK39CgB7w12BxKf8h6KVtWwHYK4DnjVD5bYn",
  "key14": "3eo4g3qQQUSwmkQcwLDEZUrFvJiPxwRjUmyUXzqeTP9WdwwWw5k9vfS2jKYk7J6weB1pWKBgMZMXVpbUqxGGD8wz",
  "key15": "JcSiE8C8jJratm5ZwqB3Dnd1iGxfo6rL5FsFNPgghEDTC2zH2BNEg1QSkGHfgPMQCH7h1HJgR5E2rA64QMzWi7m",
  "key16": "3wCyME8r4DSSUiSCimUqckjxw3CcnJqTMYhMP76oTC3XnhV4gd89vJfWgE2NSMppG1LscJYqjk7H897ggVy2uNxF",
  "key17": "63PctmBBhmRFyW7rYP1J4hD3QYDtPfxUsgC9VzjShuo9bdTe79SYyzqT2VNv5bz5z6tk57vyVfeS8zxqpAjeQz19",
  "key18": "4iVTHes33C1iuCquQrwUHwRELZTgZKLEgoGupPHngZayTE4RmKjH1erSAWHaTA9xUkSszG2cH9WBs6arkpDB5tSu",
  "key19": "3n9grVHBQr6mWgDxETKxAZLZvw4HLoJTWF7QiFBbUffrffnzE35S3ti6dNvNKsP7fvL36zAcxs6RP4EKXPF1yxBY",
  "key20": "4kBSjpp8maZZwWKmBV8WDXzFLrZS94MnJskZLZjxWQ438FXJtCMxphaY9XF8XH6AhM5Mru2KATR7xZYSB7rG1UXs",
  "key21": "3FaakgeknoPi7aA6NKi7ELUiPaEWEukFY2ZaCrJn6W7FBqTU6ouSeHwFS4Y1AkY8p4Aww4NvatNUunosLGDwoAk2",
  "key22": "37wzrfAfFcDXbnKUzviXj96DLSynx7BDvQ3vQt5jqXFpdpKxBLJLpCtxyR3d9jZsA5bWxRA8ByJtwRuDLtdqyV9s",
  "key23": "2wDu6SVq9a8WiHqqrZJKCUjdBcoeDWCoJxpd4bPWPe2qr3gDJnyobBMuaiE4CQHKbDDYHbEdmWkABsEuW4fDTt8y",
  "key24": "3Xdugt3fhBKHfcJZu4vejUQ9cbQze1VCApYbdD1VrrfAeWwQg3tcAvyXHn8VMLGHedER2PYp4XJjn14P1hh5iMuH",
  "key25": "2cj3zBaB6nXDYNo9VfZGxcQKv9LYUxc3vg2oZmRiFBSTRSxdEtYGkHwvNtfc3fL3ToN5ux4wCQBP5P1z7uhuRLZu",
  "key26": "45aeVW8WcF4yXzGpC8a4BopRCeAyEGd6M8aoRwqNPxwZrhcwPi61s9BRvXJ4sctF4fkVRf6LSu6CaHQJ3snh18su",
  "key27": "4vevqZfeJxjokxJVvh7zUBK76czRKsAXyuo8cCsowWsTDkBLnRs2WQk6rXLTJPSA1Rxa8rCYMiozUYAz2WZZjefe",
  "key28": "jcM5jWWaVTab8W5174rnX6pXhtnW8EJXmujFALWCdKejLDpnuNeh5FsjsHr6ueu2HoPVXTE87ifvAmR8CZHSL91",
  "key29": "3HnqYQjVwx3SDS2MGot2CSocXvnEoSTmis7T8XxPEESBT6zmCrNncgswAjuZWvpHj2w1ovsaPmQnZAqM5C5fuKtR",
  "key30": "5ECHbTFsDTWYG71Hgmc3F1rcNkqyXwDX2btJRi6R6Vvfo1b1tBdiKGiNr4jT9ecU1DrHriGt55T1CAMmnu7k9uuD",
  "key31": "4TXLPkKn6H14h86rCGvi5nJJ8KCV9zUgphtszzbaqrd7CDZoM6UvgL3EVAdCDMS9fQwVfWb9n9REtzviqadeSKBh",
  "key32": "UvrLLKQMS5ZFK8Q6A68BtHB6KtRxkCSA3dCws4ikZCbKKY6H95mttB8V5DJ5B69K1CEbQmgEfHTcXSNA9QDcibh",
  "key33": "2tpE2CAUy2hainJ8C8QEAKUqxeGmjUzQqhafp2ddFacVmbArDXLiMj767xzDJuc64j8Z388aWNUA2kaChj5bU8Vt",
  "key34": "5kR2JGBuvkA85q7E2s1taWQYrKugXF9hFshFRsoi7Gx2u5Ky4LdVE8767kD5EvAPVApeanabYg3YyQtQn4U1SgW3",
  "key35": "5j8LcPt9WtS5TutBApA2yLPz65c87YbzTWgKYCa46kHTUGPGhiAbzggA8EAmA1Nfbh2ZcnZyipDNLvF3AeC3RDfK",
  "key36": "2RVGFgWo8VfdnSvNuBMEJD72JvaTgirLx2CEt3CWtAjuxw491YBLnFs6k4cL7jYCmjeUM84Eu6CNnQF7k36bhbXS",
  "key37": "41Q7za9Eojcv7EuqxEdZoY6jBBBSi4t5kwukbw8yiiP3NUVHZddZBb4iZQvuTULserMaz6ZAonogLaBWAqSNE55R",
  "key38": "4amKcb2UdMDsRBHCXJj6HPPdPgGsFdyETPn8XiocGAB4gwSy2fbJJADqtq7vxuRX8AKnmUoQymmKEMXsfRxZDpBM",
  "key39": "2AdSyXL1ae7vUza4T7EnS31VLPgxyyJMLEJGAhxULv9aroP3m77haZEiY8FMgEJGgsXZ4Km6tSrD2eguHTGFFcTR",
  "key40": "2ye2T1Qpop1YahG1MTaZPJmDqxBruMJRmDLRdvX49eCndQn3k7krmRWtUF8rujzSp6U31fDwyijvT5FkqXCak8ym",
  "key41": "3YiXrPg5Aef8EARpoNPtmaHGGCRGnUub8pvSpmnpg4eRrgDcVYgJmsH6uCUa1jThNjwxfH9qmMJCAxC52fLZEDFN"
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
