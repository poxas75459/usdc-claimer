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
    "3hqtBsVPoGC27T7UjMAFngmiW5GkHnWZReAfordi6WEqnaCmubdBWshzz36Nn3qi1tPoeyrFRqNCSZ8SH8pdBKBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gc3uAN2iRCCmyQ7gWEQAdyzgCcC61w16WmVzsrgJA5NJX49EL4PDLkkF7gAQZppGPKr5F5sEaEa2Z6yohAbNCQi",
  "key1": "23A1Q6j575ELwsPxKxftBoZUCwpJnq11UuVFrWCSuKjKJ8neHXdBJDY5mkta9TEztg6sB4iY4iqMdSHiBqi2AmAB",
  "key2": "3eyVCSYnYLY46XMRqoU82Uty9qfQPp5XZZXuWMt9zQXKq7o6H1U7LmhBytVcx1DRxdHg3eiLHjg9kFUK6yKdivTS",
  "key3": "2HMQhDxKBtsmBJaZLch4K2Xe5LJsquaxU4sNkHfV7VVaUZB9XuvVqdz3acfJ4cFtYPfzXZSBWecZZdMt8crkgXS6",
  "key4": "2EMPktZyxdYUeLP8TKbsGEhxrLs6iHzQNFBsNdsy8bq3CmgTyh9KXUyeQi9rTCsjm6raZyUfnd7yfLMB39ALw7DS",
  "key5": "5ZbkJ65bVZbZes2fQySqpqJ4E3aJ3kJV3DvdpsXMXg1u7H1PzUBbKMqs3YiMwrJL7ThmVobQhHdS3q8CvyrET3b1",
  "key6": "2gZB9upyERVuKRgj4xhTY2BSNUdGXyYigNa7TQDcxaphP2jj866pedfVfytEtNsUDJm5yEErPb1KDbBuW33rZgX2",
  "key7": "2LFLGXfhagwcspfcXtvFWE5hJf9Qr6eDqiK6uh9tvTuxWJDFGDc322rtGY1mqmhngDdcvVmqfSHmz9FK2NHGudZA",
  "key8": "3YdLsjjT8WpGkuxa72vekgoGtBb9iudpSUjrijFjaSVSgUxsmUu2FQLsA4oBFJkCFXffdkRAu5Vw7HCvDS25DQDB",
  "key9": "5cqjBVTX5Pw9YeDFEukMwKPXeZjViWp9nWEQFYTJPQJWoFigavz6vLRjArs1Hj4LNJ77YZwpDxqQ8ZDToSizWpuz",
  "key10": "3rJG2sdiUrR93LN7ptDnqnhmrnkWipgP5RU6XGACW6zhX8EJrsgp1yPSegQXHpetySPQaggueP88MsokiBFA1DQU",
  "key11": "sznnpUjr8Dg8ECygpovfSg7oQyg7cH1ezeDCoZQhZknZ4NKhyKAuRnk2Zi1kiCdjPpStKaMdpkCsE2Aj9UFEFfn",
  "key12": "2AG9NmSgPB4d5AAVrXfTyVLXtfuYbVkqL8H5Sko7ReHuZB4wKPTY6ZYjefd2vb2xydxhbsX9ta2KapRPAmxX1Bb5",
  "key13": "3uheYMDLv6YzQ4yrfpaWFfGydWenmKaH8MkDvoTGHRytRrcGnrYSyy7oSjgWkeLgUKU5K3VH3Q9Cp5xBghJFFVEm",
  "key14": "2zBBYWhsrDEvrVdYjZpXfW5otSu3K1AXpqwSZbo2zBRMSb1i9G6EJXxUpgd9RhhVRVvdhZ9Lb49JNo1T2FvmAkuF",
  "key15": "4go2RGxS6jDtJbVS89X6hnuPVr4BSFvfFiGiuoaaUyBwRthPDDPXnZJGXmYachqnPwTvZuG4xHWwFJJAg67szgGq",
  "key16": "4ujHVFRzrwd2Sk4qgqjVAihXE3TRkBZ6wensF6dzKvKEztzjgKApNEizAaeA9E7kxrBmdL6bzXSDBR6Z24VL5GUZ",
  "key17": "4BW4tfUiymVz6LNB3edw7ZrSdFR8duFnHktnsiuPb2NGnAoESpj88PxfDqXRHT1BPiUUv1j1imJi5EcYy3KsdcVP",
  "key18": "2c4YJaCMQMtfmdnLChK1GuGVubk1hSFmhv4sM5TRPrDUoHijkaoDWptaUgZD7UqNeqxxHRiq9S5xRqYJyXiUxP6w",
  "key19": "4uRnhGdWwYMQDzan7KbP8ZaVouShXnfQEUx2usmSRX3k42vA89Yp7Zr176FCR5a6PKd8MwoQ4aVA7PRJ9HBuHjuq",
  "key20": "5Fvqmc1jN7Vu7WoqxjvbP45r81f29aBS4kQP4q1Uq9ndhV4vSHNsnWbNoP8vzxPZEHyGfKMjVyuoJH42daqAA1x4",
  "key21": "2GiVsAKDbqEbB96N32pdRMXym7EwvpTqw3atnrdeifoM5wMpvCSZ9Gtk18dZJohcJ92YGN6jPVc2zAkmSFac1eQZ",
  "key22": "2r635xVMQaFZgPnhR1N7EYHcxh69YEFbZDFbcYZmL7rFPXLcvv1pdVVLT9Nb4e5svDs7EceyiVovEef3ERk24DHM",
  "key23": "5DvYWASuRNhb3Ymics84ad1UkLpzbzQvbQ28muLmCHYRLvnV74zob6i23ETW1iwdehmReDCAnpnM6G2bxsNaaxtW",
  "key24": "5Cj7oeEqMpQyDtCajTeyeCbxHnxz9MSviDHdxheC1a6KydSmfFX7rdprjcuqPgeF21AevisiHBpthj5esfsaE8NT",
  "key25": "3kfTPU3HgTaFGEQV8mHdbVAztAeaXFuidVgTXY83f2vSRExnVf1e1Gtk9NCqk6M2kMAPqojwX9i9D4Xo1BfxJJ3Z",
  "key26": "exyfAoaHYmtXdqyNFsBA4AGA42vQwtMpzB8qYcch6Kgijwu8DfDZE5hVHGry65yr9qcGWgjwniZeN8m7EiiDr1U",
  "key27": "4gLdjrHXMjvTTwPpcpfSSU8uEQ8DKkA3FuSHUVL86nJf7Tr1S2yBzsNfLPhYqtadxQ2JeWW8GNHSo1DcCxt3NHGA",
  "key28": "Lp7hgyXAsR5wmA74wQDBqa48ne8YAPUWPXjfMNTeqQf4KQjHGG38KNreyG5UHYnjLqZs2pzMejJPAhgMLatggX4",
  "key29": "4inUGrkEFwRAKvrmoNxuag8coe1KLshFQ5iKBrqZJFdkE9nWzyHg72GpJhMYCdT3Y27QCV6R5JBhy3VDgLVMEFuH",
  "key30": "45BhuEXsFVjdHKnfaadEvJ7jRjDPFEgv3SBTr8tfprFRvpqz4K6EvLqCTtTyRLZBVw6fzuaC9aimPQ9iAZqoBYuj",
  "key31": "2hhNCtNUDfgZ9EdwnoiVm1avi7pLrqShYm5g8FTpBe1pspyk7YRiZnQgvp1QfoFDKwhSfzPc3Ubc6PDeedrXjSvz",
  "key32": "5SKavpxhgy6uYkMTjJVfJH6qKH268vix7c2DFPmgeUdkGA2gdKzMM5i5wx9RbM2RJnAqzgie23nX5996ob6F3RGi",
  "key33": "cbChuw4rYQumr1ZEQKxtpcv9QvdNbjEXoU3ifyp3hrfE6UhUetGucyigJAMAVeSfEb5cpBYKjAwiL7NtC62VVop",
  "key34": "51Xejo98V2zYKj4kXxRst4jFTEePTdmU6dZx9p9zDzWTjdVjwwxAh3mfD19RCY2CsRGYFK5VHHF4Pfjhm6zZhfi1",
  "key35": "2DnhGhRJX2yVwboHt72xaZ1XQoaLDFcJLCUrszpG7M36acHRLEd6zuSqxjA27NKYonC1CDM76K1BbnkJYpQEaqDN",
  "key36": "iNFuhF87HCYoqJkh82DbCzjYCuckJAxxmeavEiYpnSzQj8gGVbgiaFa2NZwRijLk57pHDxsawucRECpEcQixqvz",
  "key37": "3vDsxT2x6r8BEtiy1RvsTsWmVAanxm925QWjDYYtmHDtMfmFW6PxCHJKKXR9hDDnNAHXcxhRgNXHGRs5DgAQhLoB",
  "key38": "5r4tQuzYabD8aAfUEnRLwvJt2f6pDADn5GAXiTyQygvDLyepSYNwkRMNBWsEXba6k1Ziuqv7bjGL197qfrHudzHE",
  "key39": "41nfnK3aYf4ACzAxu6geA7e5yRGphi2mBbuZfkpK5Y5TTTWDfPpUW3QdbSPVRbGN1kVznaeDNKBxg4p49JXVfuLA",
  "key40": "29PHqTtNarw8pXP2KWm6Yz5UUcibSWWAWRZQu4KDNZzneYUi3Qvkcbr7eRALwQJzqPcew8C114feQ7N8gPKA4nR2",
  "key41": "2FroizyXiwzvHtJQMbJxScEvLHRoYx9ySUzYpWBYep52CefUMnSfPFWNijkHiA3Ke723witLwAq6hVvpAykrkCko",
  "key42": "4UsyVaVLpq8YRK4T9TccqJ8jQK78fXvHtwDBkd2DgVUx46FG2WaFNgKMx7b2wdTfz2nruhXVD4obpt7B1jdxLFgM"
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
