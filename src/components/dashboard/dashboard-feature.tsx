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
    "5iqbr9tz8hF4xKkceN5yZWMUjXDPugUpqTU8UbxBRndXqPLdF1JdKuZc6VPqgxJMW1vpgv3NXeBXGiKu1VK2G9Pn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aoBebM5aD9WTjqxzAqrU6jSWX8xVVhQRUGWJZUNMcMnu4dXLKkNEPJYupGXinPkRhZV4fH9y5EX9dqEKjfFfz6a",
  "key1": "2SgQcGPNsnkACojdBcQJf5Qs5Y8WVkkpV44wk4VPgu3St3Z48q2RjVgianpmVJqynBY3oAJLPj6LjYRLyXhzeZDa",
  "key2": "ZXt36Ap2xQPZmcV2ecMLmyhoA4bWCSjLUeUcCoM5aDnVhdMGix4CHy1BS4V6EaQrnKMsn5bNJ3QfH1Tm2ej3bB7",
  "key3": "RB7MbTEdX6WVxpthpCC34hy1PR4UQTivFcuiyvFb5SSVfQRuQAhy9EmtzJbtn7NwQewwe5a1pCGnB54bstpHdAw",
  "key4": "3RgzYF7XA5t8EovhgsVwvY5yGhEVFuUJ1RkzER6YTTcmU57Spkci2NQVJySM9i51cSVTeYaGtJUz5LkGqdhnXWtc",
  "key5": "wkyRhzsjqF5pt8mjw9PeFJ4PAK3btQZpBcDTxqhxQjQ3qjsfwcDKFKmSokS5iWR9RoDr68JQkQNpfTYiUgfQAvq",
  "key6": "UBeuzyrrMu8Cbz3qf1GeNZJ3GpYS7ceG9xoyLtvRAPPNwMCVHHCv75pi6kgkLD1zJXJpUdtjPHtjYAK886akpDt",
  "key7": "3FJbB72JMNx9fP5RsBncsD7BNq8iVuxCyCCycz2yzUissizeCptyFw8ubvw1ChZuFZbRBte9asUALRkoNKrJGDtX",
  "key8": "5quz6EmZvhJuNpZjBBd9SuEhLaN632FT4PTvrMsuSXTxxNBwLRz2Gt9n26Mm7ikm2N7s5qKm9FsTeF15DmakqbUZ",
  "key9": "31amdPg4yWEm2cDvSwfhDvf2wapXzKBJzNPsSaUrFVUqWPGMF9g6Df66vDpzKH3MybF2ZY6L7icD9PaozDjaJRGa",
  "key10": "42w4ERZ1UZ2NixzYHLQ6urph7AJszVW1is6LvSTPxL5iF6J7oHRe6rgLrMRBoZLTsZfTsr9eQzeJTTn4ww36x1wX",
  "key11": "4bvLcLvLdcoqGpMQ4KVE5hq51iWgwV4dWGE46ykiERDU5aXmHsW5vDDWZQwjkJ92MME1QKCKuKmtVcJJ8Vgs7Qs7",
  "key12": "433syGXT7S4XJHdgZU8ddWMubioyUq37gqFMA4udXsFJF6bBVTS21XXaWk9kvhYwnCz1CkEJuvcBwNgfVguc3M9P",
  "key13": "5WuSJNwGg53r8hK4STEiHKXKhfZV2ytaS2ADX1JrXQAhqRxqz6BXGDgzdBUDSfirDab5MkwZSAxdPfaZmtBiFsT9",
  "key14": "2ULyN8hnBMBx9ytowVUHZLSg43mhr3x2fKUGQyuQxwb4GafGtiLCEuZ8hKJcnkQCWsCVHgRCX1PurDghNS91mh3i",
  "key15": "4r9ap41jbP2jT96fwy1fwDaMFmwDRBmXxaQFPm1qmw8nov38DZz9izKeZpgRFVc98ePohxxTSrqQbMURMZCv9Tkg",
  "key16": "4PtKfza4hyMfqcTPd4MxeXnTSeLUAgq6rRSwsCQGK2v3v2qoBwkThFwLTFoEszesbUpkS5FGNjx8LNraM4poUkiS",
  "key17": "4F7TimWgU27EUYjMNcAzm8By7v6pVG1FkSJxvUkqSH97tS276QxKkRu6LijVuR4ByWLiLHd9kZRLLqtH6t72Xbtn",
  "key18": "461PUYgAmqgAqzyfHfLzzYgahHtbLtMKmu1hkyDxgaB9unypsLuegU9st8zWgtqbRae1mYBkvZRGHyY2JPCGVmmJ",
  "key19": "VncTSmkLT4a99Jrmf7U41h9DhBqjJyXBCKm25m35hdrfAVC5d5dnz6bmpF42P1jQGMi4VgG6CPoMNFstYQ3taQD",
  "key20": "KTngHGKwEdDZrRujjncMNDRCs2oykXqcgRjRKDrt6LzSyP2CV3rnxryTNa1CzmawvFixBF69nqKJ2cdVuEPMbw9",
  "key21": "5jTXZmZV9iKsHT4Wsc8YRQ6i1A9K6Un7KsB3m2UTsmjNqQc3GA34QBoq9BgJWBh1qw9SmVJcRAUYjMJa42j15hm4",
  "key22": "5iqCSFRrzwpLC4hZLp8TnkaY36ciYV188AvbuCyyFAPKDXw79gsRQM3yHMnKmUR7uTGVZDtxjftJxZGEkhy6ghU4",
  "key23": "657KMkEpMa8Km556mBv4naRqBJQJ1K533eLMvDD4uFXM24s7J5pu5xjBHseiHysSbsu2KMSTb4XkRAP5WW1rMyXC",
  "key24": "5mUQFNZz8H6TEFg3qArgQqF4JVnvXSM4fL2roUyQkfTmvtwQ3JZBPWwNF8Cr9XuAES7QPhbRnwxxJMipPDnKahyo",
  "key25": "5qeuAdPw9dWnP6jpEcSytJ6yRqJYMKSXr8h8ihQYJSsNnKav5CPiesmYukpMpjFM3SZw2wmDwZhL7cqrD6YtpRV7",
  "key26": "4WYNz6bcaPay56gysinT7hK5eecx32iUMRF7wvfrB91WJe2hrNTyiffCzfZ283wiVey2HAwcJ6gyiNCMbh3frfUC",
  "key27": "2FrhhUK3EGSFhm1bddmRpmGphR2cESL9Rm2xCWZLjH57BGH26qaknfTHYciMxThqzTrSaCw9jnpHPWU2AYuGjVNX",
  "key28": "Xrns9vdv6TYjt2hvFYc8dc6UykHGmGjVC9vgs1LbpWZ6WgURP5LtM247ueKdaUieZqFyrBNyeRWHG67q82ToELr",
  "key29": "3GzcVTfkXtqWreQgDSiEqHaJLMGdshzkyjgMKv693GKnK3f6xeXSAMxs6D4qoFNrj2Kn5q95SJ3tD2GDXWHTkV3A",
  "key30": "2giSAzuj9cxcuHvGgfvTST6PKjRECmPb7wpyStQJtJVk8r3FP1pMxfp5veyNGPs2cesrMNo1Pwa5yGNiXeuYH6tY",
  "key31": "G3B5i5EzNxLCp5Jh1HsejiQytDHT2JU3kFbaFFmspeTfAeRUMtETn1szoBie5fADN1aHTrmnjYin9x1FU9A9NPF",
  "key32": "31YytkbH8rgYxzhJEuvYC8BUQurzYZA6ALJuQNc7GsGrTQnhLFviBFi75d7BZpVT213H8f4F6CZw1ihui4u3we4r",
  "key33": "3UqW83pKb5q7xFXBELgL8KsDuutRQ74WYzYuxbPyGqZi8EZMauv5mXh9XCnKBu2engDrEdzC2A4KDybMDx81y9X3",
  "key34": "4La9ZSGAgtMZQYa8TRKBkkhn79WbxTSAFwL8sqYDvwg71hR2Rm1wUcBUbKUipVMVKKQzPmvM5yqtPkJyFMwF7UTD"
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
