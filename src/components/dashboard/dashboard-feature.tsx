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
    "LxyCBtytKvUpPRjMtSxPiDivzbArcoT396BX514ssfqsTcjovz59mgstGRTvTr366ztKtuwuTAJ3mt4ijH1ZE5d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rFKoWtWebLBf6Thqybp9gPm58sfCmpCG4tsxNczQ21joggzhS3C9D4yL4CqgCNCCXhczeeczmctng3iDFes3Jkw",
  "key1": "3cCkV4BFEywsqTjG52VVR1D4foEfSCFBctpMw1DGx7XjKWnWRQxMskQaLg3A6Hc3tmxokrup9GE2bRyZ2nPp7W6Y",
  "key2": "47ABFDEjp8b6JYFGZZtobkvAmgRj9NxbNkZa825kaeoF3Kv5ZJfaNQvSJrCDFTgcRZsitJQLf6aQ6iFGbzNWqsYo",
  "key3": "2eRpXvbx3GwS9ZGdRsMHV9kZEwNUJdBnZaZXd8BpPshhHd8W1JntGXxYHhmS5AfMNHWQFAdNiWePjE7LFhAkQkCy",
  "key4": "2kUniHsfjRCoQP13crQYjgStcHZq4vWvdSuKB3Hhwg9tRNCxtPKnvomMzvzvM2gzSLiJLnVj9413Vd1JSkgPizBf",
  "key5": "5HwQ4vQk8rCnJ8KikFdo4Pj1RrVYyNJik6T6q8sWGzbz4btMyCk8KAQd7PscGHjAWPKmybZ8qpsxiDAxqR5mNnzY",
  "key6": "3TKqhHvkKH8hWfcLRCAyB3mqVg5kqCwUoW1u6qeNC4Bn2exzfkMd4szwnDPWqqnXrVLPfyxkFicZtpDBRhiWdxgY",
  "key7": "4me9Xm6Qc4S6eSdHKLui2RBYXbSbqW1ze9jE5krsXwYS8d9S9Rh7rBbHyHNU8gaJ42Cjmqton35HuNUvswM3Thbp",
  "key8": "5SYsWPeaMRvxe66q6jAWuwL6MP8fmbgtREmLFZeW1gr5pJBZmH61nNNqFbRz7Q5qLkqJV5CGiGfn6rKZqoaKJv9B",
  "key9": "5CKkQPna7NQH6vjgJsRVsCzW5kSdEGHGiDyh5b4EyXVCZ1xvSERJETVxKJGowVNR2grNhJggR6H7yppUo6AMkePe",
  "key10": "5HcWgLNKJFftb3b1z2PWAWpsep12m7oRuDg234y8auAxu4ACkD3L6onZZ9UHZ2UmPBvUNJRWFPMwKVvpzEAGNLNt",
  "key11": "5VUqARbefoDhLDXCTgM1UZ6Y8zkw1hUa6HAF35H5YaADykjqHmYCWkaDkJdRnFAM5dwPWWYKwUsHjkVhu7mf2y7E",
  "key12": "1b3FaQA1H4NinLNpY6qoGuwhTCmeEDZ2MJEpnwr8FbARcw5xm7VGhChxc7X5qF4jPioiq3xQGL7Ggafash21PbG",
  "key13": "5VzksgQGAAK3UJWiUrgud6XAZ3k5K6MLaHTih4TF9Ffoa2By9kJ6FMVk71CPKEPngwJ2YdSKSeLhsnXUaeyU9J6Z",
  "key14": "hhR21Xtp8rz7JbbEY277zZf6nqDYNUt4yMGrNESewMkQxqPYZKca3h3riGbK8h1qBwpq2LhGHpBUccEZJMtBSzp",
  "key15": "3mPdRUhUWuheKEFx9auAt1sjDh2kKziPfQFBThw5U6K6rA6uobbUSeu6ozqV5zAeypQfnW6tvLzqfbFW4hCnedUo",
  "key16": "3XqaPadvMsNJsbVfRpBT9MPVQL5Emc2DmDuSQMXXA44ew39YiC74LEymCdxUj75mmwK4NcLXKd5ECvZsHnhdiSwW",
  "key17": "5KUk13krshSeNEAtMxxPGhKtiB9C2Yj9YCQfbkVmqLfDGQwnhrzZRVVza6a91yZpKfZ3ACPxsdYUpmqmXzZJ8B2M",
  "key18": "5Zgp7aMDDpB6E14WRodzZZY1L9HCWqawfNzgbLsXGLYqMM25NMkkXUTAVEceEaudqsQBHGkytXcsECzNRmfjLjyw",
  "key19": "2djBTrUpe3jto2k6j6JZoWckZ3vTNmCERsua3vm8nLK6GKC5JKNLUmkxFQwMCeC6BnjVEfXA1Ceu6b2DrNCobmPz",
  "key20": "2iVtkg5UExewE9L6F1fLzQDg5bxCdwALmn7MqqYq448PFVHeYat6bibgKiYV6eAPSAc47kcg9Hf1UociMNHu5NPJ",
  "key21": "3kHLRnEYodASaQfSALh5omoE5oGBRTU9Zj9BRGepFD9Tk1aKRaG2HXmhkC7E9unnBWMCxs6qsjKrBGVt21eX6RBx",
  "key22": "4JquAEtYxik3JhXXjbJBQfkryGwSMfreeZfgQ2jtPH5xJzboPEEXuZwCoRXCqRajak2aKyTHiWZYipbU95DUUuXy",
  "key23": "3Q7ey6i9UcKWAHwjwTsdd5Pmj26E4r7uajbVtJmAbHkddjm5vNEcQyPFA2r5SzQWK8jbwvUKsfTRq5rhMtm4kktd",
  "key24": "4zh8x5LVtBZbQCk4qVEHJ8Nf27reFVmKKbM1XEnnSTQQAZYsw8ReGhacfUcc99yjdfZrq4qgwMGBqsPMDmUJ77SL",
  "key25": "38fRaHKrszWfa14PXZNPBgypi9KEQytBEMiXTDECt6JKA9WjPJwSGNBGw52Xw6M15JZKMPGSeVfYwQwDvShdAryD",
  "key26": "h3g1n3JThoEwkhSxX76b1C7Db6fxjgupyBpsRWXFstFFSeezKMnUsoHcNWYjVXiCnvVbgGyv8BvubN3U6wr1ELL",
  "key27": "LsP8D3XZEoJHxEBnjruauuvbjrG4LgmfbJC7ma17Qn3wXw2nFtRqoWsweC7LvWBqyHgUz5RPURxhtPKTqSd9W4N",
  "key28": "4ygUK6erxmHLYgpGzGtAKXVqunFaTveXXPRUDnW4MzyfLxYX3qE7tYtBCEAsjWyWmRyiN8mKN6DcLCHw2HJUg36Q",
  "key29": "3NXNcpJiun54W3pZbJ7mB7mWiYQZunWbnjjU2yCHfZ7USyKUiCs6obF3tyLU3auANr8RSziNrqZfuXCc6VFmRCn7",
  "key30": "4itvJbn2uDXQLBg6H3cr9XxZTY2PD9LTpU6XCHf2ionqp9Ry25fmstwDNJMDNXc4xzTe5QKHSydNjdx5CeGZRtEu",
  "key31": "2DUqdd5xgf1WSV2PwZMZhBubXUY9f2bcd9ghag6CRViS13ZQ9tuQ6mRW4oMdfx31Dayua8ghrXWCMFqfBsSFN65B",
  "key32": "4FssbHzjqS9nYUXeHwZ3m1jk1CuGWocsHfTvSV16auHC9QEdAs3ZEnADLpiEmk5SdjpiymnqgG3kES4u6yGsfyUb",
  "key33": "2vDuRaPeKqgtaksQhe3eV2ex2wwLujvp3a1pi3LYJPasxUXDtjR7yuwFdZ6XirHfemii8EgUgjs7cNBJbQ9UEBT6",
  "key34": "3C9eTWC3Skgut9zQ1fs4eyr9aqzGKQHoAeZpZaUhVbeHkVMXEMYZYzckpnHhdo7Dr31tdzw3ujhANcD5nZzKAtHz",
  "key35": "2asksWWbSdRhJo8mekZd3N5ctq15k5qasygKjKh2DMtvEeBr6nkoUHZ18Qmk9fACudUJYp911F7xGq93RK1qaNkJ",
  "key36": "2DqfPqpg9HNniDUxSYhX2mGWK5Ew42Cn9UCYz1FrxQRn9NjRTBWs9gVJKhzna95f6BWwiXpAxsGY313gBrcynLfr",
  "key37": "PSjprZX2mZMXxBZhKZ4k3gitW1jRtFXyrCdeGG1NsrAw5zBhYm18Un9fFsWBZWrZ6XzbBDExy3cFD8Rd9X34tVj",
  "key38": "5TA1KQe6Px1ynvBwV4A9nqPZi7WRCBPQ3VyJfsSiTeQ4ntPqMZSDirqAae2H7xZsxtYkY8dQrfXVYLtrL5JrU1kn",
  "key39": "4gF4BcDDPEyebDt7yxtg9Sb7Gf2GbUYnjMevN4vAvm5efHiG7CXJRLKUMTpSatvEjmezSNf8ygrkECzHjC4R3ejv",
  "key40": "57n3ztqMebVYTs5JDwpqSi5eRkgNy4hQqZ24SYHbRykgPVqzHfAtMZqDSG8Nu2FSaqJ8rZZi1HuunC2hQ1R6b43m",
  "key41": "2oRnCjAS79oyEKQTrjJ12rAxzjox8ZEWjU2R1yFNwJg2bLtx9DpF7stCmX2pU7DZ2U4K4eagcbjzYzUgQBkMbChW",
  "key42": "3BrLzwq42XVH6MfBWwWbiWR8LNEzrMo1vRK3Fv1Jzh7nC6sCZ67Ak2favLRWXM311QDZcivXxBfM19GghGfSH81G",
  "key43": "77Co1Qf4kCJ9FQknxmqr6kj9DmPvPR2Xg6fbVeWFSfJ83M7jbvvxzcq7rdwtDKzJ7r7a3JAyyKjZds4bFePpHqt",
  "key44": "3Bbm3hYobwiWuEHK3JmpWKXZyAgESmzQtK6Q9y7s1o6koCD1vp2h5eova2FBgAQzSAyK6Deq7bqXzdg9bYn7wnbF",
  "key45": "4XRaQNvH4My769NLap35BhpHnfEbtBCcL2HsAY6G5wr6hsfeHnLm9xRFRBB1PDpGYUZBrEZjVkTpKbPGhGoNLPdE",
  "key46": "29HZRTz6AntsivhfgyAeAhXV79hMppiQfm8sibSeFvUHLHwb2wNhTXB1vRAGtdMUTK8jTFWrReb6ntt1DKrRvCbG",
  "key47": "bKTyhGsx5TE5ykyC3jd5XZdzJMLNg7hZXUY8ZvZam5hv49PgmSCsjAE5Y479D1tso6UMWPaiEGkbf2CekmHj1CE",
  "key48": "5ZxiPYZYwsAqKh2r3pQ9SSQJKmDqxWEQP5dSdA8K7TmEeB5zAfrQfEPqcAcmXqQXVeYuzr4S8XYE2pFpBpFzpoj8",
  "key49": "4XNSpjwwxnbedd5UpB3KQsteHkt3Se3Cw66NYNTEDoXoW88QTAGYjw89mcKke4Thejp6XH4SSXat7BBGnBfovFLP"
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
