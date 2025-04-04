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
    "38Ls4bS5bNyvKzy21nRMt5naBf1jRMisuMLxsxmu6M4tuxeXPFus3yYgqKaU1NjBRr79GsXyBVKLZZqX9purvE2q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jMTtkEZpX9QTko8jnNrbUgU6DrBmjLcYx8oB1d1FNzfcKxsA5tSuG6seEBmdegpGxG8oFzXiQ2GwCxtSQ1FgmB",
  "key1": "mWPNXC5xqcLgVZeaWMdkmfafAsskAw8J3UktzkxUMMjDCzY1NFioom4eiRZeLPpR9yd6ZhpfHFaJgQE3vW7vcVR",
  "key2": "TZeepCQDMikdQrP3H8XJz7hAgFsiPKPM2463vLxTr2UwmHFdXMhkZaBTjBSWNJPCGvYwn7tS64HSrUHB4zD3ene",
  "key3": "4wMLbwmm4Fbmb4X9JCN6E5mAGfD4Sij7zMW3Ua7uehjjirDQWgk4PSA7LbyNz4mwqQa1d1AAZT7E9HCTJYVoR1aG",
  "key4": "5aDXG5Gfdn9WPyVqHML2MEPhHAjJVzVGMknkQiKikkR9n5fPhd9u2KMTgHn8iTwYqnMWPW7NF5HstQJP5ArdURn",
  "key5": "5CMiXXDUdqyi4KLjrFjdtgtYqSefkD2Eb5bUq1JYy17tuSxmNrVugYJv9ipn42KRrZ8vqVyvHrEoTZVzuuetP2FQ",
  "key6": "2R3msM9sW2EeyXiTa4ugn1tMuPKkrgbvYo4uP9ndAMxfBRmwLzDVFp8KvK31em57mDdJZRsZ8Cqa3ZMJz4z1tBuW",
  "key7": "5kduJhu9n8dc9LmfUkJPB9KChmvgX2uAuM7ue3ADi5skQWgvE6SersE1wRaDasUnR96eFqD6ZuBpvr9oLbHQkMpX",
  "key8": "5VjzMFsxUPrMKuFdQVK9CQSiJm1KgUY5QFekn4WGj5iLGLc4GczcRUCgCptRJd4zNqjsL7tzhdvyFiCRutKVcSjG",
  "key9": "1nDt72UtPgoF5WLF1haBFbg6DdnXU8pu5XXxbgSHLCQ67Bf7nJeKDwmAWTwHixoiqLARrZ3E4xQUQ1aEB59YhAi",
  "key10": "ZXfMVZPkU4qAJQ3KcfZq6avrhkNtDj5C46Rq6SbJmARkE43h3LefvPRzwY5powanqpYwGR2gyKm6XAxaLRgdEA3",
  "key11": "2o6wk1jdVe3FmQNbwYdTmG2c3sWt9zGQZksxrPBQbenN1x5EZkfSZm76aygssfqxJd4PXphZx5PZPTewpPkroJEn",
  "key12": "4L25HVtrkNoYBgKtesiEN2V6J8inyCzBxoJppVqysL6fGUoWvDYfoiG6q8SZz3oe1j4oW7j6tizPFXugYEWE8SLC",
  "key13": "wA1rUWm3bLrhoUxibfxfp1igmMkhNFy2LEE769ET5mhJ1C6KbZxXnyZjc2cptJbCZoSFgKRP8gW5GzoGSnSLyob",
  "key14": "4mDhvBRLCTBRidLQVwDYefq1CmAHmAdtPCiwdEHSiT25qyCg5ChcQdbe171dqsqsPP6VSYu2GFMABdbScNYzQVLn",
  "key15": "4Bivi3NkcZk3jLgnWMgueonhDAUvUsWjzLqZt5BujD7BPH7BXovmaJos1mXYEzYCwhJsS2yirnnJqAvn4sX7p7Mf",
  "key16": "4Xoe8jqqpqSETLdATvh1zjNC8XXUN8MT4eduDUY6i2UyTZbGaN7RoSE3iGsGotb9Qnu4sYtK2Smtz6bqsKxyTuK2",
  "key17": "jpbEGEbhcR98KdmsdLPzY72RF4Mdg4dTLTKKVNVCcfmngtvufXMjgger3wkk8bwixUWFwWLYhfrBaPVCR8FV3ur",
  "key18": "gYFKMMZcy1n3ScZ9aht9kaa5jiwfYPd2mrXqZHhnigjWTDDuxTVJMn27DFwoTsR8ieEpduA64fMbtxydoN4jAf5",
  "key19": "4eYnSixENT9uq3MsXKH84aYPBvBcBeyTKsRLHZayUU3Xa4DzXoNrVnrZMYmyoKJdRQRs4rS1RMryBgXcgCDmoz6",
  "key20": "33hYyTCYsN2UybDGsSTC39bsDfzqDTXrc97zyHHgx4FfQ3nxcDkjw8jSLM1rjuxxv5ZMpsreWafEZReVTusvu1q6",
  "key21": "5g1fj7ihPx93mMH4D47YTzm8ydS6v6DBeWBPEhahZX8Ke91dEyrbqqdSusxeu9DGwD3DaVh4wFSiUrPoyXw1641U",
  "key22": "3S63icXmTYoAMuJE3kj25xokE2mpS68Md8JzMwPRqa5Bk3arkzoUcESMHo6TgQfCjdv6MqS6kJtAsd9JN3w5nkTZ",
  "key23": "i3EEcvnYToUmGkptxmZBJkdDonMsMZ9Qh43baBfJoYDoZhf47SJMdZvPSMR8YJHrMoMgJsgB6eRL1guwihGE9qe",
  "key24": "2uutZtdsQkiAwKv96tbBX8GECwYRwoVxLQwNHCcHPFKFLcf11wAM3g5iFJ8jG6PhKktQAYKocsfTBRH9HQKKdRsC",
  "key25": "2S5busDxQuyJbZr4oBdYFErXXHo51SGFxtAXMom31JbbfYL587ru2vgcR8aRDZsQR4ReHvW9RW6wWkJg5fiAfwd5",
  "key26": "3rBAweaFAEBL2oVyY1oqo2Em8ndCpAJmj2RpCZ3DpmbgkgK2NU5pga2je3do5FYHkyJu8oY6soAuJcQGtz6oRQ79",
  "key27": "TaURgRxgNcLiQt8spbiHVMQsMVCynWB4u1XPGWJvXvD2w6BKuZp9wwWenuxNfNnM21jPrEAUq1R9HrutV7E7fZE",
  "key28": "HYXG3erFgTfTYYYMVA9HFabnSeTxtsHUmqGoBqJ3apj9L4VrWPsdynq1CivFomcTUUTUozHT8S2gxHNzU4GLkQX",
  "key29": "33DdNtofq3ZvJgQJU3aSJrRyucLrtn7AwqvV9jstTB6Qq2DSHSjeuR2M9Vnz514Qh68qmFem8dJpFMTopW8eiaHK",
  "key30": "5AHAri9QHKEpxZ2wyEs9y9qCyKb917nzm3uHRyz9uTNno1Qr7aGtKrBQo3F2Z2ZA3mRodC2PV31gLBsaiSAjmuCt",
  "key31": "2u2FJCVBkUGbum5tBRB8McYz3z9PocveLFa9p2K9ek349gksKRf3Q23GgA46hhQ9EAyGUEqeQD9RJL8mX4MB31As",
  "key32": "Fsq29mJMRciut8sNKNHcoYsJyLB6ZeBHUAWhMMxj4upSnN2fEAWXy6eG8YsmMhfBKi2AnjcYbLh57m3V9vbCHRi",
  "key33": "tTkHqaoj8fAywWne9sLEBKY3AnB8RuM737imK5a93iLP8XicrmvQg6DKAR5AkYVFSHs3tqD78WitBUoUYR9rEZs",
  "key34": "2bkWGR1dKw6r8FkkeEtpRM98NgpsKcwpVoQtGqjR9xnRJ4SbPYrjdG2eRNFfZqLz8jH9BzJgwQgdwAhkVyn8GAtE",
  "key35": "4W8G39X4hZRJpHvNHFVdazsHPzjG4xM49dTuBSL3nbWXVphJEBVL8mFyQW9kY6CB1pBRo1kGR2EPhZqYnDMcByam",
  "key36": "3p5ETAq2F8boiT6L14VNFe7CaGNAby9YFfgo1rDSgXrHeMZczg1kVTh2pWPxXD3kAKgrHTDGQvQ8K3YyyPMunhUV",
  "key37": "5H2jGM4n5MtSBUdnrQbwKrG9kt3QGxyaW9NQEtERbqwvNvsWZtpHqsPpbDsxyep9WTbhWY436TfMEFuyrzt2p6fG",
  "key38": "5GRQqWrLVL3eXRB7YBAsbgnq5XN8bhjJnN34XWeWx5Su3yCD6k25qPK6CvYYpfwJE1XNzkvwHaFznGbUgP6TfGpa"
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
