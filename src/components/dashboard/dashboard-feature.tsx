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
    "2PhSvY25RUb1HAKo29qrZqHqJ3BZu4dkKGjefJCqemgJCutPg1aQdaTXvh5juaXBeVdtjFWi6j7z9xzrn6azkya3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ka4cbYG6PFKBWexB4MzFzNn49aWEYKE5X29zHRcuuwEreH1r2Wayt7VWBJjdhuemnWaJ5q4kwZWmxbQuEVtxk7Z",
  "key1": "KKXD9WnvPG8jSyLaNtXQze9pfiK5ysTjvxRs7ZaefzACmxaQAuGhRmpdVZntj5vPpdwqgiACAyBsXsdATpvjg5U",
  "key2": "2K2nXuatBMQn5a2DXacDK4iJ8QjSHmKeTgLc6ZhCNi66Wmf4Sbn8Q9xQ2rdHq8LLPJkmHhnrDt2F5RW9iVFSoCnq",
  "key3": "538GaVVRG3m1VamjnJDVCewFyt6AYsR8wFfCvJhqCAPZ4srJpBTjXfAdA4duRorrJfdgyC5VbEHNiLzR8eaLAfoB",
  "key4": "63JYiTmzeS5YHjb4gQq8bCNHYTEQd2F2f2wSGeNWoi148xAfMTTnk4q3gX7wbSUvrGjoYj1i7A6mZAKauEPrQFJn",
  "key5": "3AdPLTSAtRDd8Z5hZyrWcNnqiPRWfn537KdXdYbN2B6mRGtTuRKN6no6tPKHJ6n77V8dH9FZE4GHXQnkp8kwPtUp",
  "key6": "2SYCN3VCd57mdEZcfeGhZnbZKrWqzRjM8XLNZwBKqo8QxA2w3Me3PP3pyiMcrpZ4vkcR8vg6Z9bMaGdJPB6aLvso",
  "key7": "2JLVwpaDcD7KMkxxrC24wgxf1B2neY3ie6GAB5kHGX8GcGmkPCGvQv7vbwCHmWe6KdqMWpeVtrgbUKCcqnyDxcRH",
  "key8": "43UhqdCFnTinYCrSZaMeqGwKUkvG8AdPwZAtmuDKKbgpL8gyveNEagqrV4bdHQPWbgAx9WFZWKhaQHfoH21VK3rG",
  "key9": "CRiDfh7jVSZHbuUUVXGxK7yVMoCqxR2nMKJ9nFMA4xQ7Sds4A7aupYrfUbTS75wW5yJpz7iiwkDmv88bgcu7sR6",
  "key10": "4p78D1PsU82oNK7tvaJyguYE8ztEbM4Apfy34XSW2TcHWuvVFYYoEhheUobvDk4jssUZ5cAvGSjRytVnXZpTvePp",
  "key11": "62cvKoNxyJZbgibzb7pcnfUSvx9FsUV35kdZPHmQaNjHwmToHNPpJh5prm3An2XX9WoMD1h8mXGwqZE6nuqBR29T",
  "key12": "9STiBVga3zYfjEDUPH6NGrwmxs75urAQj7bKL3cr3DFedxqLCvAbHtkPtFbeBF1J1NYveJzgqb3S8xL6M1PVYe3",
  "key13": "BYSngkE8UsGPUGmtnnARX3o7h2mr4CqkL4kUctySjjNvZRKzYTWPPNoCzTspxx2QtwnjLSEGHB58GFpjZqCx3kH",
  "key14": "2z9wQFVp45oziu5qPa8Eum2GSpV6vCqdTGy7ySoiiBPUkehSLDQgWTkko6PRkaB5uRajpCvsamQa7p4U3XBc4wCj",
  "key15": "66on7XnnCzkdex85fm9vuuBbaHvTTGkxYof3B24o1CjJpNCJeovheaR9uESRezA5K2hXMeagqXgAUp8kVseVJjwf",
  "key16": "3mADBTfpikkhTq5YgERH864jgB45BJnqR4z4p2V5cBC5niTfJLMY6ua2HStdd5mAZqn2VoxGsTeyN2ZqzugDF7Mo",
  "key17": "5pxHxZeV6QTWnCCH5iuSmrjcZnzcUsRRLqeFF4PvnLNsWLxxDFCSSS7aZr4UpoW6dKtN3sWBwC1pYUevPSsRfDXW",
  "key18": "4XdybdFei6iYco5zVGVpp2sJx2u1vAygMGcEEoaRA8ydTS3Yod5wX2ofXKn9iozpXiKJ2ScD72u1tyXU5GMB6rYi",
  "key19": "3ionjrg8wmMch7fHbPZ1927bBp1WHKitbbtzaQaYQk2DcKe1pFC4RFgLvWGue16Th22ZYH7WWNuX1kbPbqWAGNxy",
  "key20": "3NtGWWMac5sT4Atmi2uywc5Uh6Tvv2nhZfuTVrTqLWdxSECzVoyueukRfDVhusbZ7hFB1NwyFE5hrE4QXTRPkkgK",
  "key21": "4K5jKWdPS9fuMpnaoc81q9NwDNkVVWBpG4NQxnDQ9SmZ1QDEqt8vBtZY3ZbEQJiWT1GbFqCcmPGsjEiuLUhdwqvt",
  "key22": "4QegJsWJwPRo4RyL17A9ZRqHjNgowNPCxd5AF1uUyWXu6auirLb1kGKB3C4dCrRTcPz2LCu1Wv5UgDNiMPbvXrLo",
  "key23": "3PuNtEC79PjuSYPZbxQu712cAijmD3L1Sd6BBaSLjZFBdNq5fbwkXQuLj9WXq9jTFD3Q3zXG13pRP1mrrr6egebV",
  "key24": "2TZ57TY5aXLnyqBA8dewCURLh6trPiJX74afDcDn8fP2poayGfgXwaAhnmE8qoCEi7r3xuTyBziagjJWJcXiRTWM",
  "key25": "4SLNisqvNr4tqq76v6RvzSFDhDFqe3tBREmEoMdo62oo31Bpa9yWX6f7dm3qRGbMuPkiZXuXNVK38JAcX2TDE175",
  "key26": "2Ggt7fKrSB5VMBkyAACh9AZx7bjFpauz2Nivj2NTAVubxVDzzsXdTcacwKCTRRqUjAWRcbaeW3KvLFpLCZwLHy4H",
  "key27": "2LJXpQAhqyJt7QvUZi639tiDwSxzt73GzUSjJ52yXxG7qSkALg2CRzaayf4SmKxBXee8X25nuiexvFai1SQHqbxf",
  "key28": "676LpobxtwZVKUGNaCmYmwvcQ85mxNEvsmWhxH8jhSYAZmy17XKLxANQWjXTT48igutJkTdnuFJCAsi4QwJ53b3t",
  "key29": "5CAUHwsxAmeQJB8AJbo7kFPHUD4tzd4J6bR5ynmjH85975hjZbqwE6sq3K8dVpW179cx2U1jAY6bapgQfxoqot6h",
  "key30": "66KSPh2rFRKyuvqkAQpiiapq73pWmD7RGMrD9FXFswUdyiiN4vMNH6BvY61kHW7obM6eeT23QR41uVhtxvL2783n",
  "key31": "4vnW9tNEX4FwziJLNf3fyv1Bk4GZSCRRPoHiiHUWz61ekiHnQXsjeHd7U2XNUux9wnHrg4Aynq4CinbCsWz662rT",
  "key32": "5JHTwbzbhgwjCLKDNmoNppQVXCaExnkfis1ZarxwzTPX2RXtV1hbYCkywudmg4rmhPn2XUom1gKp3JzCq1MysPHy",
  "key33": "3Dknbrq6sFdeMNCgf3pHqQ55aG4YpCKcezaTTTGE6TSyndPpFVpDSE9dSGuoFPh8MLArmzeTTi5FTj1veiNhFVyX",
  "key34": "3nMWx5G17w2RZF2VXwwUFFSoD8iUYSGRz2dgctypnkGh193gXnyjMev345Bv7EGRintfgdW5zXZ4stSwB6cwRYA",
  "key35": "V7NZXgThV4pFkPpCL5LwGWJiNJCWdgeeQPuRuHVhmLF9pfHK6CjUMagF8nHuwTUZtwyQN9cghVfTapKLFJsSQb2",
  "key36": "3SmTozBx66U2YuDMi4FFs3qkGnyrX9yywswibeDKGgnabaFRrvf69BVtdJZGwZJg7yciknPR41ynhp4E2VYwXPeD",
  "key37": "yQ7VxFqNUpmAfhMZt8fTSVCfBYBmnA9eXJbHaDFsqs3z9q1UGP35ZAwFHdPEN5u4wPKipcmCFKjG6KK7a65BGgL"
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
