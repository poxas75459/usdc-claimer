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
    "3Un311WZ1di5887QomVrug2hbLF4Y9vUy39kWTQ85LCHFS53hxjgx4Zu4hrSFFKE5ZRYPo4H7upMyrMayUhaNKv9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SBLgnzxf47m3yygR1PbDNBDFWRCb3dBRSvQaaVPhKnK7fKs8sL9mdQQAuRbXSbBss55GpQixHaJmJJehKAWLRMp",
  "key1": "4UpkJsjCBbaKcLvyxffxagxyzKgEguC3vkjcCSaeditCJT6f7QBJ3b3yySAZt3L77bX1rWazRcFhRiJsx6uAMVYz",
  "key2": "57WqC6gLd22w4ycVAhGwZwNT7vWEuQHrCTJ4dn2ydTMvHKyBy6dA7zYLYt5Z2nVL6mpYyFrDJV6UMXWxF3MifqPt",
  "key3": "3v4e3AuJtyUTkswzw9JfScAQC6ckTn4JbwgthiarUoKBRothp7GnqjXYQWMpxQj8KcFvzPgdYRjL3RW7g7KvRFXM",
  "key4": "4WD2SQPWHUFeoL49aVX8FqQAmFDVsL3QHBgtci9aR1yZ1W9fpZhyV821bv3EkcuJYXdbncotxHapZwBqYfSNqzwC",
  "key5": "prMzEEKcztRkYB1RU3sMf73d8EtUKo6qT28gdUP2Qzpisz1qpaTfedeWAZHDEgccpsfkuzb1CzjXQintkYK58RK",
  "key6": "je5P4ej5onhFFc4Rb8JSFWpceJcXTY1TKvmuEKk8hgUWsApeKhkuu1dsoYKjXytZ3T2k4AUysxUMqxGgR6qXVhc",
  "key7": "5oiFubGBjhMG9TTnUcttB6k2FpXf9srLG3j43GWPYVyPD4o9uQLMFmaQyjeGo5bm7c3A8bSHD4CWwJj18CKMSed5",
  "key8": "35VGEPbeA4FZtWnJUqp1Hs4keUe8TwhkBdoPp6b7sReaEy8eJMZQgX8viFQ7Vf2Z5hALbgT34wBN4TZhHpXrQpGP",
  "key9": "5NchhuDgEvQJ7tqEaJgs5rtxJp89ALmEnKL3Wp667poctkt5YipHgXVcHx67Tnc7YHzcS6anmrE4jsj8FBppTSLn",
  "key10": "cDHnc3LnLvCb2kLxkUEteMFTQVhUSZdAPmG5P3Mj8tkvR1FVKLrKpzuytGauzkG5hrZPfwmbUBJi18bwqYLKsGv",
  "key11": "3xob5GdFxmFaLNZxY69zR1pDGmQnXuTbopzqB6iNupFCmaGQT1c5VZphEpdtnnFrkFtio9Egh5vvGBrJK1HpU1ft",
  "key12": "3tVNwgZJfDS9HJyjvDUaLL99bW3syJ1SQuyPryqkk9AVvUAommniMoRnwqfF6MpYcmGReoKsQFpiN3rHw1VUXCTc",
  "key13": "4mVHZQfouo9rHxmNgjjSC54TBQ5EPJGsoXkRN9AELhAmS71E8JuJXfFw8A3xMheAr2pocRvxZ1X4WboDJtu89ErE",
  "key14": "2pdssX1FCt5H3AFv46EYHH7jZXb4EMP9BwiSA3oH8MUuvKLknFyLiKSrv8jfBNym3k6FD2QggemgDBYCoGce2uwZ",
  "key15": "2PQqhtqKV26ANqLrRdAtasgdSdou8VMgV3uVpm1BhExnsiwCSUVNACNnrjQyhhZzyDRRRmfpYuZn8bMvdpe2WCfn",
  "key16": "2TEQHJpmaxXBbthSrdPc6Usqw4q2mdRNwYrZ47N9Fj8TuR3MpG6M77XXjkAG9h2jLgr8XiRV9yD7A8SpzqXm8Hd4",
  "key17": "3iqF9vvRiZue15GUZFLPHP6jwL61GmwqaNTN98TybGquUmYcVu5ctiFZtrGPothe5yQinT17ctJ7E5x3z6RKpvUt",
  "key18": "3nZhf3toShQ6gKpPdC6vyRFUgji3wVmNTksWX1boNoPxxbjHf4WfwpRQjBAyhX9zjQXe813FJV2Do21Bd4ue3KNp",
  "key19": "p2UdnMzdzLDAscUjoUfLBrXjYVq9VToATPaLDrrUEsHJbPp5c5VpbiqepKGwwH9fFQbnRMxwJMQkvV1YksJCdMX",
  "key20": "59WkERruZL3vHDSf7wfw7DvPpjoaspwNWvE1EdJL7r6kgLFoP7wyMDQB9taRQdjHUp9KfQid6gYrxZDUGvYiUjUQ",
  "key21": "8PCxkDx4UT4VV4Ay1EjVKevSe8sLZtUMaifmoDxqMy1d9vZf9WQYsTQR8HJUj7o6VSYZWUtUPz3yMxcwtp4iiSQ",
  "key22": "3ZbnrHpA8kDEzqAtWKL383tHkxzMSqGiF3gcvrV5hSAgqM1wnY6ryZGBGfk1LiHykvHPxFv72srDKKNWNBMakANY",
  "key23": "2gYKTbfXa1KcqXeycRwreHkRXaz19jqDqsqfh1NugM53cqvJWCpFv8Rv6n1uGZKT8dMUmHgEHjcp4hqUFac6sRqA",
  "key24": "331LMctsZhsi1SBJjTPuKikMDj2TDfseKcimb2xrAf5G1P2rPdBC1BpA9A3ctAjVmt9b4BkoiFmfaqQuyxaCgj7X",
  "key25": "65bvFsNJ8oavmJ9dm7X229w4D92tB1qjT5BZEhchPUtDpNkpzMCDFxLCRuaRs5SAT6cUEue95H1d5zH4Wg6bjtid",
  "key26": "4HTVXRJHT1FAwfEuCBuGHwhBt2Grkrjivngph2HMC5Awcq46WuCRyQajP3otHRJg9pD98fDXBmhbNGqQgHyuh5jU",
  "key27": "65UoEXBS6DyHUEeBhqzfZv7FhtbpkEwSvHnafXxqWgrnyHKpNxtu1iMEDHddXbWD87z9SphCNrvt6syW5xuQbamC",
  "key28": "3GGHg7DtCaLwV9s6a9w1dRgDyffnjEm5gTaKKZ81fBd6NYqv6mrG7ehq2ADPgkLSb7Bm8i6LtkMYQRZPhnqv3364",
  "key29": "2WhbCiRmJQQiZAwE5QZqzm73MpuDZDQuJBocFRi99SNNUWkwUCjbtzrKpTZB1RrrunKCQmsYpMDzz8L4h9uxL9C8",
  "key30": "2DbjJC3aS7KnaJgNDs4TU4e1iHV5QP4DTyHa99PcYsFVasB36rWAfdEPEXeEN2xhn4jwcsXxpymhteV6MBhdYFAE",
  "key31": "3TGXJs1wRAEdUnHqpSBFTXqrj1snDAPYsmj9emi7CVzHnvxq4ydUHRwR2kkRrGSVpVbBkadWhAZNk157B6UuQP1n",
  "key32": "3oPDh25aiTTWbKUwNQpcWLs4eTJRAUsSTLnPLTPpGWVcdz3yXUoNy6eeFcqzks5NKWQ8J7unKgbqvNgEW7zHyG9L",
  "key33": "5ZzXKDj7mA45dQ1xSwg1DGTh2f4TAZLSXckXmAhDwVqx3AAJCAb4nhhcUYqcFuEj2VNJW99d68RJzDY4erV9xo7t",
  "key34": "4CPuvV73ffeYw939v5mkqL5ZS6UwuXqY5qi3nr13yBhHVQAB9DeTVovGHrmnZkWGi4FD1AsZpgjrsxuEz3Myed5W",
  "key35": "5ALpRBw4B2svT3bDTHPdsbUkxuT7T2KWGVE4K5efzpEi5dNsw6EAbaMJeBrqn8tEsyjvpuVTzBFfatKYEwtKh1Yy",
  "key36": "1bRKQw6hcVWmZjs9taPyU7Wm2jYNmoDMgXpbPrTVmAWM249ZCnPZNzm6vRonWdjbNTnRwXGWBUM1vfmMjWjiF9J",
  "key37": "5yQEksnQv8G37MzbdhdxF8VtGZZWdpCF86DQfkqZMwdG9ehnDjdJ4BBayESt4nv8rtHka85dcJApDoo5PU921hh8",
  "key38": "2Ye8g8a4eRzHAfh5fP49EbKVwcgJjZZHA9DaLjCVcdpFhWDWSi7CxA9zrrPwYay2Jr98uSbUqLy6ns2e79kVfXMt",
  "key39": "jxum22UUsWMgYA1jAYxqwhvViCJkbypWwNPkS5mRGesdzkyw8mdpaoLa3Q5vQpCJycmPSNSBMy367ezSEz3zKd3",
  "key40": "3GxxHW7KGZdbzWW2n7fGPo8UkRji2Hn5LQ8WeLyoLtiaFNsRXBB75tiMRQcWCVH6BdSinV4cG73AeE1GQKt2fpqU"
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
