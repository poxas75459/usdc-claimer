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
    "3EtjfUtvhAerSsuWcwK7eoG88YNppndTvBWfnufMeEAWfnJaSXAJ14BvBFiDY1GKT6bompPsqQCMcktuY5QioS6D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WmPARGjHdMBy8LKpPqMay71RZzHGXK25u7KFFE2c6GgEPLiBCJ4jqpajfUDiLsgr6V8dALDqfVSBgUFM2N5xLRc",
  "key1": "5UJ3XW6okjEtCrsp6ekka91NcxQNXjLwufv6Ttou94FxP7V5g5111Y134xwD7FoBkPskyvs1ZK335YLHMJZGiUzZ",
  "key2": "4rTojSiYP72y26AC4SVW2EJnUoKtbwMX7zvUc1jNRGssBy6tJvkV9nJRUSUuqEXNLkBCgrgyDa4htULFFReZw5dy",
  "key3": "5mA2JX5asEqVSJfacaZAXvJmgKhPwEhBCd79nKx4ihU3SyVNALsowgvbYjwwAMb43g2QThZDWiBg6VbWwrZS6VGG",
  "key4": "9JWFyLn9dUkSRVdMeNRVmXUFq3jxYyyyTKF8i91hxLspc12y45goKEiD5heiFids8t5sYY5EkgCTSGeKHeTqVDx",
  "key5": "45KJE9V8dB7mfwWPaz7rBPK7vBSaA7jn4vtMsdtcpkZGWqggL6mjgp7zFvfcw1kNs3P1xBGh95z5fWv6vCLeC6XX",
  "key6": "2MXu2R1Bnmb8DnCic1aLK7odQmiucEP28oBxH6pq6dV9UjTW6v71B6r4yNSJzsbgK7bY8anyXBWsPyU193zHZXNu",
  "key7": "2XxcLia2jpXshT64XSACNsgTV1wx5z7ZqsfM5iBsEbGP1K74YkiHkDidwqCkrQuTad5nExNf7C6VjKGtyNBzvafc",
  "key8": "4jUFJYErZcik4Y9eCWkiQMPPyshNsNTomVDv98H99TWMGWXnFKCRHxZYoJz8emeM7RpBqXEoohfJXAzQ65Gq3j9U",
  "key9": "4bqMCkoXaNBUoJFxZZEa9k38GTKMKT1cTNKg1qNg9Rskc7Uqz5cms2s24rpeoJgGMJrSZGVM36WD4w2SCSm6soG6",
  "key10": "53aiWQCuo7va7Nv38kjxr6ktLHa27BUGtJg92CSNAAgWMNsscBmdL51igH9X2nH7SANkTRbT3n9GhEitrSLgvagN",
  "key11": "64VfDoU6nvXepnZWvRf5AmUvtFcowDEC4hAhKcqWuKCYHUQuprCs5yJ5k7LvQD8fAhFEDRAKhmDJ7GGxd3XoNmFt",
  "key12": "4Z5Zu3F8k4guohVSRy9bRh5LizSXtZFxvZht7ktFKKufAQVSvLu6LPaNeZvuDeyyYRLKvV3szZPdMwjJF3eHvcmQ",
  "key13": "4QfoEQA7T6WwWiT2jSakxg3KsYFAjmCb761JHgBXBYoyVgGEmgE5ABp6oFFg9zUhcYY2HAiMRiEZnXUagEF6BiUV",
  "key14": "ayEegF6koC8SkQU1Pau1mWzHYp3n38Gcm9evvDuZGh8aBepCmjbTn8edu9reG1L4PgbQBqJ3j5whhepg5EYnvQt",
  "key15": "RqTeZrx9WtCjHCa6MDSsfzFEaW1Purk9DQwTSdVRvbdsoeMCAKZMuacHNaxb6EB9sPcEuXeUFTebBXCGkZrsAfJ",
  "key16": "4YpaSELE8qXPee5MpSfEKrtmkeusq5hRjhZetePKqd9yUf6WDdW2crfxSrLLnRB6ZbjNugaYZBZnj1TxAakdNyKz",
  "key17": "5EBzPhAcZ2TQYEoW1sXntEfVSeZedQxXT5hwk2jNu7cNgAL9yntw7s2FsDmreYJZcK2NBspchScHPV8f2qAvppbC",
  "key18": "uGdJKPgyMtf8kP63cGachYK9JBgjamvYWNDo4Gxz5NQEccGQ4K6nBe63omuTfVfTYEa5ZTucRkh8QD16wyEMEx8",
  "key19": "422sx9frXph5GigngzokWVRCkdExqgiApJGmsbb5Udo75x93GjsUFVGDXwpJAV9MSJnW7Vroc4tXtHPnA8bv29SU",
  "key20": "5kN3MTYajaz6MhMhszewPLtCeK935znprUfuYdTFS4QkFunAmn7SiPvbwDaFWUzRKCTPsKN2L5DHSq6TGoQe3zy4",
  "key21": "5LRqPU2qoc3w3ZmxnBwMeiZSvDE9qiYENsyq996LBwGKYPVyC5Ln3jg7LrxpYXrR7HDmJk3vHcWWd8sS9A6aswQw",
  "key22": "3fv7ArY4nEbB4tzJs84U4TUMVuACg4ER7sxTbhhf9EV2PgTamWVqxsGf9kp9X8NrvTRoNji8sP1qRj6FBw2TN2j6",
  "key23": "44MPeJk1Ng1ipxUBB12sY5tVCWuZoNsmizLc2N852VTRWvsgCipAusjxj9LYNnjsa7UJpHBz5HrquTAGYYRQp2xA",
  "key24": "4QEYLCuMrKozNHv182vZdJsrqdLfL1vGi1WcVP3cEB28Fvu9NgDshsg8hPc5wVCQF8j2U4b4gSoAvWkUwLgWozNU",
  "key25": "4fptsSTifiQ2qeEDtDEhEDoaBUAD2jrAeYKxnJ6aR9eazTzW2U5SBEJxrNstWPESBDT3tjjRy21aNvX6yr8cNFWV",
  "key26": "5gk2kYAwiouWA4kamRooiFn18BsqBW7KNiuS1kYYCoHxBas6hUUELwWc6o1R3B59JwY5wLtsH262tvTi7YqKZ5dh",
  "key27": "Cry5u5WEEjhZxDFFX9ihjnZY9U1ZSHQKBXEprKpMQrkQGtpa7QGaPD6WEkKYdGV1jrFNsV2pL9jXjASTxRoJDxB",
  "key28": "3Ensnnniq4spp8to3YGUj4L4K4Tdg1wVYEAZ993S3aMkwy8Cqymv6WEJA1kFn2aUvCmkUkXXJqPU4a9Co7Fn1dDz",
  "key29": "59KS8ueicZBERi86uqFkVqayf8p7fXaZftDW2T7hvk4gb95YAEUPrRdp5zkz4UBfLq99Mtdt6zF9TGzysccZ3bLe",
  "key30": "2QhvgP3GPude9CxsqTeXqyGN31rV8oejqDWdGhRvTpzXsJxMnXHHJNryswZNEqrmUSPZoncQbHGMS63vmCQz1iFF",
  "key31": "2uy8qz57ryM9sLqSxmJLMVp4AtP5NZC3K2JbYUZXbAbKuaKfQ6hRVyJgMnFuZvH3dnVL2ktKdeH8XeasowsJJ8XN",
  "key32": "5i87Y8rBQseJvv69FDPo5ZH4kPtpxEA4WKEN2vxTZzCkPo7mAMSsKPX7ASWYuoYsmcDztYZghx6c4bB3ZXxgCJtt",
  "key33": "55h2eXZEk9zVudfNt5X3NczFH8y1bbat46o4p2fqLsQfW4byuA3JgmBX4dxXs8KFAENVewcFJB2Y1aVfqBrmLiWz",
  "key34": "52gPZAgZ7mHoLeaUSgmEVsYvz2Y4PYoMd6oM2yv1CPUgJpd7JJYgUJV24h4UqMvvcXjGddUCVhaNSCwwBnrEzvKX",
  "key35": "4KKAirCGxVNSY674qMjGR3eQfmuiZjrh1d3HnL71DjaSv5QiXovoFNsUv6wvkj2zUdWw1h9TaCc2EHgzn3rhBHex",
  "key36": "5jDAjYDaWASViEvQxmVKCyncxrUwyBBX6UqxWCEFjApWuhj7XccBG6eQrSKqB8LqX7J7tXHxqtSraBjiueVP2S9G",
  "key37": "4WA7Hj8BxibisdiKCAznRSuJjTf5CVAxbh72aAyaocorW7HGFN1rdXasJQLGv7xNeBLHqPGa3vTrWrgaMyetZkcw",
  "key38": "4HLWNwi7Nsq5YdepBanTcsEZCGgEhjazsBD5Tp632GhktL7xyFjxcQhcqXMS86wgbi324RC3y5aLzz2MXU7D82MD",
  "key39": "4KXrxUZBqoVma9TadJU7G4oPa8GdbQ8pNgmY6scJQgVdvHARbJPVepvzthiFJcQnfHyeFWGfWcaf6VT92kL1Q4Xp",
  "key40": "Fa5UJ3kJrL9ZZUsKbB6apKAoeF89pVkrwK3iMwKUHWjmJKa1eUpAQFHbdqMtzge9pKq3PmjjR7oxB3Zobzipk8C",
  "key41": "2tHHrZHiYY2NdFt6NSxVDi7ZENxhciFKSQyYTvzLMjBrMLtFMNeh129Sk2twx9bBce2UaKovQcHEVQ1Sy4xdKgoG",
  "key42": "4Jesne9yU7naVMYx12yYMAV87ofmFyAiz4jzm32WCSoVt38kiHjspCCGbVaxDTg4kMjWF3Rt8HRRKzn7empDsoET"
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
