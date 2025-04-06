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
    "36zXbHrX7fizz2qhGXtyernsvpRPRCmmX4zraLGp3w779ycJSjUkggvDmpbfSSMNHsDBpMnEU67qXDT621N7C5J9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C4rf2wR9Rc7tX99crhYLQnwW9xDAnLLLxk3WuA2Fyyu7BAQk4S4yVemdxuFfbR1VBYTKZPPVQyqUe1SMqgCUpAd",
  "key1": "4sgWqU7Mt9PNcvDkgRFf3EGEEgMhy5DDAmKmppaKmcoUWnov4tjYY9juMAEG3NxRvXngdGupF2kYhJcnyf6ekmVQ",
  "key2": "5fbLQK5P3JyuM9Skq5oPU3mnUrYLtsKwuRyD7xM9drQgkbwcPpZwDNsDA6ULDuTSbxQF7Epxza25eCSPmnFEycvs",
  "key3": "3L7EwHLEnwkLFGhAnFAfMJf5NGttBhoGJxkt1FcMKe37oPVyJ1Tri7v2kTF8VE8jNZ4tMUM6FPFmKNqbAmpVfVQR",
  "key4": "3yiMoefSWdj9pjQpHjL4kSqweX6K5ZnsMtefcoTR2WBHuFjkb59teTUZiZE3icL8TmbwNZX54pzf3TryLZP4Xanp",
  "key5": "62RQ6bQKxB3i2zYYeGLHm5j5YtEhhYdGkRB5XGiDohPuDfgjw2R8qFFG6XLZdwZxt48wRw2Ygg8hCr5ATgwmji6h",
  "key6": "2Wvk753KjRM9H2PStL2by25SAWp4x1RyWRNnUNsLcqJBw88XxdgV1zYLWV6G8hE9K2dK9zvt1WeL2cBE8cmjJ1wZ",
  "key7": "Gr3nFjz2T9ooXXzyCjH4H9zAU3McYCw1p9cr74Rt3JUeEVPGov8edhcx3RU2cUUEvPXV57n8We11SoJTA32CZmE",
  "key8": "3nf2WJ7Lkfnsq9rECXkBqXw5qfFXgLRvHY2xqRd4m8eBuybJgJ3hLFRXX2gTcNkTEPbBjXAdgMNBNmdmER2p3Y67",
  "key9": "4zUNYPGJt4Vv26JiY6PA39qDyUSTMHHPmJgfimWJYvt2Q2eoz8TmVNKhv1K19VfxAHqmYkvVoe55ZTspRjeAW9aA",
  "key10": "2DWqoqbYdEPtPBCne3kj8R5aAaHvkiUtJGYNQ1MjYEa2513fAjWYB5rb7SzPbEXX4yrY1Ft81HQiCx2D4NQWiRV3",
  "key11": "qYsybHpbGfH54b4RJKC1xueq7vNwLDHdukvWXYtjjaKdH4fZXeHPB1RqfAYiKDDoooHEXPVhgLuHZmMmPtLssNT",
  "key12": "2AuVnKEK9qPM2UENCe3nwe9LY6DC5HgvLFjUtMqDUcEWXo4kzLryFEdjfYG3FKfvsCoD5mQzY8o1sfH93H7WnK2a",
  "key13": "3N2gj5uezHGVr4phkuaFkPrBVnRLJfBqgG4GvugtddjvYmkWM1JPyftzrRwdRmH8eoMJzdNCwYutUQaF8M6ypDvM",
  "key14": "2y89PYpynjyYR5CkcxDLbtG5wRhuE4TCLJskyD3WGHVBFfA9ynj4dudKMFhdCMboXFgTUyFRDpBtepeDhEseMioV",
  "key15": "5ofmSf96n3Ha9gC9xctK6UThgxQd2hzaREn5eCD2EoVmmKscAVpdCKyvfBCAGkp6sTopqciRosgBkNqqYsrongrR",
  "key16": "4oHoGXfdqEajpqqvnUwbvg2AcnT9qEixohGzkYv9sXBbQftNNniPq6Kz25ZrWdrHv4t7RcZKrzkddMAEJnZNbKcv",
  "key17": "d6vgUDSCaXJf4zxYM6BjANfuUFWn6BrS2uiFH5jaXvwjDZ8DGNWQ3ZKq69iKYw961mJsZTD4VLc8wi6FmgpC2DY",
  "key18": "35Z1iNvQnjHEWWfUezi98qm9WcDyD4BTJ4tAuTUNej6gnfvXTHPnewFfHAVZj2ZDtgjqGzuVFChQEeUd5esdAC3X",
  "key19": "623E8UhWvfT2W7Egjg7XiUwrC4AkjdTZPxR6MpR7qv2juc8AJhJnCVNjg1ejoqvggLJWYMwCVJSad6z95r8jMNTV",
  "key20": "qVtjVCVbTBxvg4YuE5fHWGWYCtyb7J1JzyiucDytTLEPzBhvo2qkWYgMcQFvVVt3bEXvfaqLkk9Zi4DseTjoXZP",
  "key21": "rr5DnTiuUTyaSnAExAArobrQBYWytJVRbde2TLv9KpcVdFod4s354MizqHMesn8Rkaz19LGDU79CSXAYHKYqyFG",
  "key22": "3VUJwJtva9ZCCNLdTLTppxRuX85qCQwoaZYXsKzSijTDo4rUpZEsNyVGX4LhdKDMzub2bo1vmKaGZ71nAmJCTK8U",
  "key23": "MYDzpR6g4Ekh1DHqvyi67mm9FQ4fL3MG5NEoDVAy2Evr4yFMR37cqpBnp84qJMhHbXHPSEAvJmP5u3s8PwsD4fe",
  "key24": "yNb8PCD5QX5s1wa3BNbEwmD2w2dWntdLGHn64qQsAWzQbFfMqpnPJyaBSDrnbLyNupgZoWKmMFdebKuY2Rtx5ub",
  "key25": "UZ837E3dLFptgyzgVD3Ck3QAkeRmPyjRAKZbpj1owzuhzMe5cSrs3FVtuPH2iQkgJUwWdeL7usfAW1ARtRqpnPG",
  "key26": "DfikLFvCJA5m7X49nuRC88YcpSMMS3kkxdLzWk6oieG3jnfPKHcXXRBtTBzC9pCaK8XSofcBafW5BoKfm9rZpmv",
  "key27": "244zaFwrRMkPv7QNHxq8hgNPDZtzScGRTbxPYqgxv71dHHeL596Ne2ERLnc4C1CLGf8XDBr3E8k4neV6Pgh7v8Df",
  "key28": "2jiccEuhfc2D4CyY7pqLAAhXmTtWySWu81nNpwFkEn5jm9syzbXHVTVdNtPamTfs9q4pHr1fozPAdcB66K41JLAb",
  "key29": "31GUc4ntzSD4TrSD6JL4UqDpPUbKm2hQf6Mi1g2KUwMgvYd9sHXhRQvzvXxnVHh2od5A5C6cXBkwWXpj1cCBxKUJ",
  "key30": "61yDpfmLpneDjz9KGhhuEapeeDJvtBWtAgDwUumpdVKxuJABvL5ME8wwwLxuFtKkXDgGFwoJpFtF4Z8W5a9UB8DV",
  "key31": "62GyqcHrE1qxr5QBhrcnd5HHXAarJ2DmCGpNvdVptaCX3hjHJ3MPsAsBpGy4wxUQJJSmpFQRifR1htFcGvHxFaYG",
  "key32": "29GWV5LpRmqMQjaUEwoJWDEPsG8u3dbkpgQ5fzJD1wjTRtuvv1kTDTBtzPPWg9eop2hrXidBcVsR6HGgZBpWb6xs",
  "key33": "4ZfsYt6oM1dy51dFFMCjcfydDwJeEtiQn6mEguKcAjcAeFnkx75D7Vbr1jYLBEpuTxCjDVWB9CQquhDT2mVcpc18",
  "key34": "rxe187W2AU5VpcHNnmxeyurhxf9jqmAcCPghDptVmFT5PFJBTTZPYy9RypxdZxu4Zrv4HAmLsozPT1EsXGtUmBY",
  "key35": "28ug2z6q7zCX9LsFFWMdEyDyrKcGntc5UzB3qUEYXC47SfZsqQ9ZD3iE9wjuZPUNcQeHP4aWoiqTwaxwfgAndmX6",
  "key36": "2YEg3CZg1NTMzK3QrYH4SjENYYuBQ8vT8CVdrkrAzJTKxpGCZmcksE94pSmkB9Bq6t16xp2XTodrRMuWNsQ6sU9t",
  "key37": "3qnQw3MfWUaT5BCc2rpFMioPpwmZVtc3k6odr395CHdZ2LcTMHDycTCWsjtSQNM5HQBujj212UN6vbauPSmfCcNd",
  "key38": "3M3nv1zU7r2ujD7QaMoEdHxhQ3sVjKpL7DyoN83XWjoTJkxUkWYJWuY2RuJnkzJEq7aaG3xtuLCaS8yqcTywrXAW",
  "key39": "JSvEPKBRGjMXk5JodPVW31PPHxdYHVXqsvbjaN9zgG8nLmETz2MCHmcKjwKJyv4MkHv6uH5BmZHuErZiD4iGcd2"
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
