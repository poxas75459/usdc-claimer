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
    "3JJkh9dZA9FyYxhEcyD5aLr2HaFSLgc5CkodnGXvbsn4x1zX2Xn47e1Ef5sqZMdf6HKBV9LkLHsGHX7Q8tjavEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oD8CP6QUdUtvc951tVb5bJaSWDJgwVcop9XeWn7iqjPKprGy1UfmkVvpWkc5uf2TH8zzmacv2xVFhsvGmrsXNZr",
  "key1": "xuU256462ZU3LGakkoP7EmMvm7FjNJSwjqKVzg6w6j2ys5gkRBFzygk18KDb94uF1F3BsgrY3UeWetzaAHV6oHW",
  "key2": "2Tyt5Wn51MDzzoX7nVh8eVAuGrvmXU6jvHRpkVHGBUtQbEUgLwnsNeE13C6P14aRr3eiNygDKz7R6Lqt9qmBFNza",
  "key3": "fsVPrRKRLfM2Nm4G5SvjV1fHdnaNzwJrFyQf4VS2eLYv6ZZ3HpBEQRJqvWudPQ2HytAch4XZ19xmtmqMotfAN8L",
  "key4": "2x6Gov9RcrbRS57GHnjq4czVyEwWZJgyM5GpsmpjeVf93YpWxTGsNm4jMjjjFug5rXFhc5LEjHLqH5s95wsFAfpb",
  "key5": "59SJrbgKW9fdETrXLzodcB1nGtF3WKheMPKr95HhNeLPV4ZVV6y6LFNmXZAdKhrQA3iq9WbXTYkYctZ1cPhLMoRR",
  "key6": "4xhKkqLpbcsUouQuyQwbsEcgz2GTZNuzcRNkNEg7w7TmjgHdM8pJodFtVPivSdh6tKLp7jd8MsgNLDrJtBtNbcvX",
  "key7": "3LnD9Kr7tj9x4gG7mATGscqQCo8cWYGpfPrirzfXbz8fH5zUW1NYezcgjXYjMh7yFYM78bP4GETV8grggUe3YmyM",
  "key8": "56b984Hj838tESxu8HXgg6acWWd2oAqXVPnVDMJXxdvKYwSiYPpQKSP28GcCZdZnQszcJSogPNVLVRAawRDX1LAB",
  "key9": "2bUd422jcyMCUww3dBGnPAsr7RcRgfXkKCFYVch8e3QKBB7rznR2yBKsWhiV52uGvPXqvr387J28dpHndv6u4weH",
  "key10": "4hwMtzG9XaG1ZVcLxvErRmz3oUeCx3kEbwwogPofBeaq5icaPPp4SXmHx1GhyaPc6NxXAD9X5ffHs9nXVcYxut5P",
  "key11": "2ongU2oLg6mbLiAxcLc9eWv4A9oASwr8Vj46VySZgCQNPms6BHo9k2LTBpdDFH6rRMDkyEhZibxLKvfgSLqwfk3A",
  "key12": "3CShLqdUTUWPJE188K2qbYURLrCqKS68AyMXewHd67dVKCb4GfbrxxbfykHPzLo1D4PiGquRNxbz9MdFDN4xNA82",
  "key13": "2BBiQeUBcE9s7DJTF6VMfRbiLi8tkDscqFZ7PUw98vyo3AaEaKVooVJ3rreya7oBq3fR5q6RWLgcL7GkRTQuWn88",
  "key14": "ECwteeHqgyhSFyT5Zm3cXhocyzYmfnoBs87ZL3E3rzYyrv3aMr3KNXj6QEpqcVVn4KFaryZk8pkJw5AhkmqqwqU",
  "key15": "2X9Cs3nGu2yLp8edUon7T36SzVrz6g5fVwNiKMHJFQL4AEwFL1aEJ5fUhWxGj5JjivA9WdBoABzCUw2Ev4kn8aE6",
  "key16": "5C3yZS9hx6RpZfZqkwQvbVjCCDcxH94rtGhiKAovavboiqUyxHrbH7xFsatHA11RcD1GXJtoeQfNAoQFXM5aBgRc",
  "key17": "2smh49TRpLAngeJFu5S4UkzotBPte1Le8D7u9co2dcaNeLTph2dpXVnHMJp9h1YcdfLQHYBeV3maQ5C46hAYMvXn",
  "key18": "4TACrEtyBzrrL6VTDuCTP7AVcAz1fddgiPn3EkZXoqdhkiaCvBuGkfGXrFoPEmNvXrBCFeZ3jv61chjJLJdSiJzB",
  "key19": "3cMaG4X6kqSMPT83uRfVpbrp9umUN439iJtEbD1Zr68yH65x6HqtoUMhdvAt5rFWvYJxK8yJJcPL5GAFtD9dhe8j",
  "key20": "5kE9fsMBXh7i9YmafwL15PT3xsGnhryNXExyHp1zwC5SDYVthmGteMTCxXVZ6azKBX3SgFs5ndDbh8yc35ve558t",
  "key21": "2sgE6BExdyCsi9oj4eZrpomQVxqibMCqFXFYJ7ti86qYg33rqy2vfDWyBN3vjJe8U5nMGx7CuTSNqX8QmVveEFrE",
  "key22": "385RdzD2Zd7VhbcUHyu2LRKGsG3UVLGZJuGjRTSjv8MiDr1ioTGeSZssahpr6MtvHPzA8pBesoehxoZNqzS7y6Cg",
  "key23": "2asKAFSJLitjk9RYh1jhs2Mysx52zTh5j2GMiGg49n42N9Y7QVjkegisbUeYzktVxs5ZPLCeCwuSxdPHDtDe7GUD",
  "key24": "4NxSi7HdfssvKAsBxNYr5ReC83VP4Dhm2VHLThEYya85JtsQuCB2ZBAK73bUPr7f6xWLK1FnkqWi2EAjzdDcFRNV",
  "key25": "5dKDDqTpvEHgHEqjidMi3mg2BxtTaWTY6ZHHsQ417hSvPXU6EhvwfBuhtc7Db8CFtho7SHU7ubr44KXaoGMUU7WZ",
  "key26": "26NaEVK6iRVxGncpmgAdJXgr32cHs1uz4aXjiZk65NjazmYGmfJQ1dSetBcwJPjFupj3JxMSWTRUcZPj8eF8WhCN",
  "key27": "dSv6EdWfqiz5pc1rq6Z1tAMZCSGQsihCwDCdPnieCZ5yn3pq5WM1uPLSRC1q6WTvGMBG817i8grAkM9LLgFT84H",
  "key28": "3NpDtt3WfGB7baUoMCkwAiHgQ4a9WFGCmpmGpgafUh3madh9FAZ6ynsCAnSCAvNhnBk2pBFUbK7nNYBUXdfnGXLu",
  "key29": "fEX7CKmTxz7cnFWkM3rMZN2J9Bi5VNPkmTDVXUomFzXvFuAsmyb1w1ogDQQEjZk6rwFivAM27ZXpwY1JTdxon6o",
  "key30": "ESVuGPjQD9dgknpUut63FQzg2Hr8asCZNKYeE6ZatpDeXEfMAyeAzMe4zoT35RuB1yv3Dx8upNeTmk91bmEeBM9",
  "key31": "xKrJFvqUDx8uahrG8GgzUSFKxDWy39xXjYP6Zx7dxA7bkcDVkhcGjMStLFuPgAFuYTQruN5o55mZy5V3LTAdT8y",
  "key32": "2p66GAgCPXVHMazCYPxSS79vJYLLaLYJNnh9mT6EGe7mG2nanzyfvoHEJgcgxsJedEXxfVfnnCBi38FQ82M1mQEo",
  "key33": "62d1opyW6beQj74qBXnigNGQSym8bvvYAq7MTDFUW6RJhuqVpSrX3TZygduu8g1D8efG94dB9MdFSYsC1KuLEzEd",
  "key34": "3cxjGq6Y3FkPDfPtSqJJMEcjU4GLfVa8NGi4NzhUKwoim9QF5U2XWPE68cmFwBz3forqqW4kftVnNRTH5rr2wCFf",
  "key35": "37Pt1KHnP8742iqVhWUyeocCgYkKS2sDNb4SnLDh2rz1qh6bZJt6X2ZRaaV4XeFGBqSypn2JvDyTN5zUhSh7gvwD",
  "key36": "WiqvRvTWwwueu7YQMLK4YnSB6k3JjYZaS8CeNFRupPXee89XMB1VjjFija2S3SDgby2cd8Jkm2reYBd7d1aYxA6",
  "key37": "3biNydirtXLkZR1h34E8DipTW7pjrRvJQwuiAoTki8eS1cSL1ARr9HTxJNYwArXLLRd4zsuufp1zDQrb9Ecn4KLP",
  "key38": "5jFGWhNgteDTgzrnyyJoZTBBTbjj4Y9DaubskjHmufGrpdV58r2L4KQKam5nz8tDgqvD6WHLdJTjVDjPLA9cDVM5",
  "key39": "4xWNq5EHPsASrjHBZvizchNQKpXqy9a9e9C114nCpMreyaGLHEthrgULXBiJu9BhNCkfXgsL7GD5Y9nQsPVQiFSv",
  "key40": "4FJD8rxRkcKbPy3szaxQRofYAyNXtfZNGLD3J8Mv8RsFBwuQ3uRTjwy5SicCpLyjkWH1fnqkaMKXpeb5MXGQiBye"
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
