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
    "V4NCX74gwKB88yU2ekL4Ku3r1ezxF42wJUHWqCsoj51xCgGUGkSKrQuB6N2jkjPzk6HYZ5pNHTjdshWtmYdaR5K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zJLcYZtw7XVbnkrGdx4tD3MrEUXVfVpkKuuBSA1fe61KBRCjfX5UtVvm87cc8VaFhscJKEabFVfUSVWhpnopXjy",
  "key1": "yYi2qDqsRrANAsDL4UMdzCrqxpGiLJMLtuHjWfTk7vdVDiaxhM5Lwo3RtJRCYBQXCanuHbZu5GFwphGthzdeBcE",
  "key2": "4nbKC6GepBCBCdNC9sxLDnfR5k4kH8q8kbwtnfq7SqPnd2ZmGLn7a6JrFh6sLR8qjXnrnf3RR9kKKJeEr3SATscz",
  "key3": "5BACXzCrY4d17uh1oUQdTsJuFghDbbzeVcv5HA7ZG4ZREiWfADzEs5aEXCcF1xjDutjjbwauxAmXCcqVEwSW72Nb",
  "key4": "4cDPQaMVU2ocmRwxgwYpWeiDSYunvz39cAYACmc6g3a9noWHMW4CLGcNGeeR1FtrkugmKf3NnczV6dn24gYwc2H6",
  "key5": "vDNEag77vo8h2s9wYn38pRuzMXBX9D62JhFiZbVzaWNg2jnPWAhvUC5dDJwYBeSCUSo9wsNKMYRkd1yZZqs2Vdr",
  "key6": "s543pFMS6HUKhd6qroxryZEdGKvjqqYukJG6NdqcY4TMApQhUoqnLwqhU7NNMimguF9jCqsRewkn13A72hLyFtV",
  "key7": "WayQfLb46WxgxAZTeWyPJ4TjsuW81Yf1FGh6y13n1gAkTECX89UNeM5nhfEK376J396wboQm8o7fHPaAq86CJf2",
  "key8": "29WpXuhJa36rcRXhjzTGipPM5sUt5KQE3Ch4hMweUD3qi9zExXaAgcg7isqKaQ5nmPpwgRbZuRw8pyopkTsZqvgz",
  "key9": "JEQQ7MQmHnQfXeUcjqUb8xq7VGQ6SZB5TL5o5pg6tBYqifYuxs1R4eSusn2PkmuF1rvLqGZjJPufzhA5AmgiAih",
  "key10": "sNBtPXc8hubwNtSiAdNZvFtWDK5wHzMEzM2o7ipqieXM6yxMBu9zZfhToFc65U7L3MD7QJXaQpJ6PMP45vmaLTg",
  "key11": "477RsuUqh2qwyXViqxWQ6JxYKGj23i6MAnnA9j8Wjn7EJnGSULsYLtR1FkrQM2UAcW7wmeYaKCpqjPeRJSUPk15u",
  "key12": "3xGs5jSQF6zob2eFwuyG2f2c4vGpUJvVKMBN7N4eHPBueTz1BEseVmCp76kduhz2TD2r197RiPuXXy4zhFxoobbm",
  "key13": "3yYSz7TqqPLT1c4LsJCLgQYJHATD6sTeorMgbSMPGNwgGsguFpUbYrFQNDQK3SEHEMy7NBtvNB4F2aLv2MpvManK",
  "key14": "TMXjzF7Wo35cMggwa7T6z2ENtxwLrCrv7zgQZm4185qmcdX8QSC98HTUxgEMecnUnCzBYaL4CCW6D82K2DXfz9S",
  "key15": "2MovHhpcyEVPntfC2kXQPgKG5rjnZP6GLnss7LX2QdQtLhQuVEjUDBBCMt3daGvJxSv6tgxn8hZY6wUvMynhH4qf",
  "key16": "5rf5AXJQm65qYZHkr1tUh5GPYf9dzMzuWpeMdL5RrpzLx7YtT9dSpi7qSuXVdLHyGzSxBY2NqmPva17uxa63qxsg",
  "key17": "SuGx4oGEy5dV5Bw6pbS7QU9q2HeAou8ZN8SFtpVLhjmoH6cwdCs4KmYSzCSRLjg63q5yfUNAue4Gt4bLETUiuFX",
  "key18": "59y1tdSed8NYfrMTBZj854mViE6PZZSg9TKpoURjF9B6An9kQzUzpfW98NNCVGDQmqvaJmBtj79z3ehLnLb4EivP",
  "key19": "vGjWg6H672A4He8NM67nPK3Zyky2zXZ8GSPzFGyBcNKPZkVR4NfteTnWLoNiHFKQRG1g7uFWttZE4wqwSBQXmDa",
  "key20": "bkJDRmjTLpHUWtWsGoHw876BT7zsjik7Hh2U5y4YDLn5JPRzotry5AAqDebTyN4G7rLYgVyCM8auZvBmrGYN23V",
  "key21": "3ToMR9rPkLADu1ji76pKfQQu4s8NVXsr1xfMmyvRbJrqXPkCsGwZtWkhVSKDNhihXGxRiG8Hx1Wi8w8VpQbPSQTv",
  "key22": "43GjKrroKytangwo5VzJc4ErPZBgExJm121bfndB8tKyAaMbA3wizEN8CB4w7PeMjkYSrSeRUcWxhhMGV8j9BmUM",
  "key23": "2VtAa4GgjdezjZmvvELmxchYDEVps2FXaCu2Tgxg64ixd2DZCTzNVqo1s2Ao649frTHbf6KUZmdrR9fREJ9wWUJ3",
  "key24": "4FBaBKorho9hiUC5UJAdmpvMK2pmKxAAUo9tV2ZVFiiqN7PB3w8UqteY9XaoSLtUrs8Ds6yvvZ6UvUc36vpCewJV",
  "key25": "WbiJzGqdMKozbMFLUxzzob5BaNHWyakxj85us5pbbRsWhS4o6Bozj24e7YNV5XT2Y14gp4nS35dd2nbpJeVWYSK",
  "key26": "4thcMSJHjmt3BXgYU7LcJb3ajPEK25HZjDC1cn5N3tMfS75wsYVmeHrMrG4bVu157Zbi19fmQZr9BfaerHyszmtg",
  "key27": "BxPTsMLaPiiugdiVcpLLo61T1hC177eE9nQpUQDQZstWT8cFFsf6sxea8144oAWiooF2JJV4gkR5skakSSB5XPa",
  "key28": "4c2ZzPnJ3xaScC8N6bvx9bv7sGFgH4tZjuPF3WfuxYenYFn64a82RgrgsFPPhVrxWG9C32azd1rykXoREBCezr6B",
  "key29": "651BxQaBB3JLEmqunfMFmkyck8A33ymwbmVmcy8Xv1TJ97a9eZgLjkWwbX9jEsMp93rFqqAMHaUmrETmKRqgXYKS",
  "key30": "sYUWaJJ9fGR2K3svSatGTL7oFnj9B9VwH9AM3eCYLXt2vqZfjEDQDvNKaEtKYbioP93VVS9fbibPYiJ9JQHgUhK",
  "key31": "5hg92VqmLN5yyBUZ4peM5PJhthSpPQTbihpiQSngToXv27W97KBLVzfwQBV58rVrsxqsX13gQtnYqoqwAFAMuQ9t",
  "key32": "53VMBcTcednZvU4eevrPVuP9seCTRAa8UvM9GdntvPGcRNDNUoF8cRBo2Qtw38N2oDZNnKFS6iu86XciQXCuTHwa",
  "key33": "kSQMcMijkVsuYCA6KVjT42BL6ogcuzMRA4S1hPgSGc4mytnLWAiXGP7yDQKatqDwWAwkeghwkiwN68PYyMY6jx2",
  "key34": "3MfPBa5Zv9921n7MtKvp81DCeexYGFt5fHtjdwqSu9Czbrqu2qKE975siANcfPtUNt6G85KuvsuxW5Png81ZRKKr",
  "key35": "5Ambm6jsUMx5WbPriqp3eC1TuTAmHZ7HxB7dvt2ui1B5P8pu6S8FUekXH8aKD4dSRAsRmtbPFGRvs65vdFg328Bd"
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
