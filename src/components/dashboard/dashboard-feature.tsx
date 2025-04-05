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
    "5uAXFaPweGkazRviQYy3JmhyvwmdcyCjpN6o4tWXeZYvo2oCuC5TJEAoggqzLm5MBUVt94ri6FLZ1QqUwCChcGPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zDNMetXwxH2k169EnBnkeEwrwqDEMW5oTc9pDVJ7kDE3be8Riciiep8TaPR3h2BPC5wLG73mbqbW5wAcUYrtHeR",
  "key1": "ZsiAErJ9nY61winx9ooPpAyh6PQshJBkZf72B9F9poZydsNXWd61yeSSK7HvYpTb5v4CdTxip3qgF7G74mktyvu",
  "key2": "3nYavSre9oiZFChbz6mEGihiyVE7tyjvewvS8S9i47eHb1NvMe8GcpYSkToKcyz7M9sKcFkhhzEiqjH4fLVKhkiV",
  "key3": "E4NEns2QQwLxxR877cncJBzjhc47oQLtADBUNXvDeu76jdG4KbgygEcT2hLrjz7uMRfpPpcaMmUER6cEyv196wa",
  "key4": "5n91YDnxbSWE9eQh7dcua7RmVMPSPzeSJ1iMVYp2SinPvtb4xUud3D3ww4dE9FNXn3aSm374r4i7mjWUWR12ugSQ",
  "key5": "4SijuaZ4oZkj6FZxRVYjGfvy8KhxPRgzpFHZw8dxziYEPo4VHnEvanTf9zzUMsdmeARBr1FdHDPiYw11xfijSk2",
  "key6": "5yCnXc47cv5Rkgh1nLY5UWRLueTsshgfYUchHqHiHbTyJzqbBWYAPgRYVt7jGhpYtdRfWDGeFNNVnS24NLU1JP5R",
  "key7": "3XB41fnukFbrkCLmXznk3NckTE775c34gyWBDKtje4Ab2LiG2TN82SGCTNrGayCXYqi1G6B8qdnYEbgLLapEoJPk",
  "key8": "2TBjYh2rLxV7grhaeivzS6X3V8WcBLGuXJrZ26rRgrR2UtkvosiiDNvPrpoRkBseKyTQP8tMVX55GC2D39LvJBA5",
  "key9": "5YXcoE3sW6WzS1BYvwpngu7FGQXoPB9MujExfPoMdCzRMYVDQo3g1PwhaNWWw3ho6XWtz3V2uhXBBig6iVASJ2p1",
  "key10": "2TKdZp32qiCSesctJ4R4eVqvMPmkN3k7EnwTmWkPL1eh17JZVZdvyawyhSPksFqVMhtbSRvJEkR3MaQ5b3Hmz4Gz",
  "key11": "2uwqr8ueH2fYPpdw3tspNLor9n9WY93ParyiRQRoSCXhsv9SXgV1ALEcVJpQ79tNFtw9SNJq5LJkKZ5XUk967cfP",
  "key12": "3L4opatSBvSzRbYfVuUo9vvRUtjnsw3PpgNrMK1m9Auu7ru39egE9KHo3KCgMxMrNKtMSfiqBqkNpto46rSFBiT9",
  "key13": "2gwf5ZTbkp3KfjGPDiprkNczbrxuys5FcACHsAyKDRg47moAYHde9W73f4rFk19ANfwFQmQEXoVePCz9LbqjwEYW",
  "key14": "2n1DpQ86mWRf1vrELFnBTKRQJzwajE1zsv7619poB7vfWYfbqhBEPs2gpsEp6UpyigWmTrjLd3fYmH11NBkP2H3o",
  "key15": "5KrSPuuK5heHN4tPm6Bt9Efs9187HTZMvopg2maWBmowSdqQ1frB22wfdwMoLyD69TnGFrBoZF1nvXVzXSKfbaP2",
  "key16": "47N9csWffYMA4RAiK3mREyNeKixjviebiWkD1KyuX85ACyxrEKdQLwBV4SxrM64pvmWuRhTtL6eWcLZqU1iAGLAP",
  "key17": "5Jys2JjQQ7d4BdY8XaKQ3ffdBppN8bfN5wNWoA4UvKyiJFMAJMFSQs1A4XNr3wZd5xS5bzukxNWY1YECyK6Ri9z8",
  "key18": "29fccc88W8joR2q6xhHnuBxNat63bP9LtVnfkhXE39PvtHMou3k3o93meyizBHpJKYNqHhUAxRF4bv8JikHZ1kRw",
  "key19": "5ZoP61bbmuJLduKM3Yy5HpR7zVfLSD5s8fgUixZN382Na4roxmkoLSRRkWFyK49wEVtiFDL8D1bd1SpKAviwCBLp",
  "key20": "RpypJydidWcRDsqVUwTdhazX3N9TSWoqnFmLzGUgrjWZLtdgT8eyvdzr77YVhtcD4LbYsphHjamtoDjMpRxTHcq",
  "key21": "2YKeTZFoyjM41CtAYXaBhuYhg5g5jrhVYHFHu9hJksNed5XjaxnmC4HCd6Pk74RhYJsbnsxriSUxnDHbzL12oEpd",
  "key22": "3fBogkyBLha37Mw24pNCUiX8FkjLsPs7RscgT2cQVRezsBpNDzd9wLrH4AL331bCRfjHDWjUS49y2HpLJE4rgRZF",
  "key23": "2YbPBTfrwmWjjCt3MbzVssUjMRUTgEmjH7irUSJD8Tx1HPYCzASiSH3yWN4npTBwnoziFozHWW2WLg5jbzRQNgcV",
  "key24": "23wF4aDV9zC64wvqYD7vKNGmBxtXCu5MBoKCK2fj9mwyJLFpAfM7davGdzCQd8sb23AZCREN7uaVqWTKBzidXHWd",
  "key25": "4ytXRibpe2eShLvVveNKwRgVbSjQDPwpEATuU2S5pxDvziZKJGtGt7mudPqqa1g8bGXBgJ9tw4PjnqBmAcEH3eNb",
  "key26": "3e36D3ZUWj4QqMsadGMBBJoDWSLFRCQrBNEv6yq3dT5nHrUish2onAtx4BxY5G9L6tUcLNRKV13bfH8imxXnqBe4",
  "key27": "39AsFmsd8Uas5AXwZByKABrgerjdpqmLftoBqzpw6StnMaE7fUio4DJv5nf9i5DsCty9gwM4bLTNfu3oGSHtrn3o",
  "key28": "4oNQU7n9dQJZUTYwt3eBc4czW82JCmyVDgsBsWJEM5RuoXyQBEqN2y2NMB2unmBA3nTU5XtkLAxLQMT4hMzU7CL4",
  "key29": "5La1CY4Dh1vgNTBi5YtB6QDE5bDLBBZLC9JRVZ2KscjYVSJX1z6XRCiqcb22vRgmo9rH2z6cbJ6J2GW3CbXn25Uq",
  "key30": "2zJ5cZSWnW2X5eSB78EuWxnydxGqTN4p5B1583zeQnwgHqNYfsamsk4fs9jjo61qREchrWNa37RShVwWrnS8K5tq",
  "key31": "3T6hiDE4GLWtSBvdJZRskisE3ut4HjwbknL2MKYp6vyQSXsB6HTniiPgcCExt1cYw4QwResuwcSXd4C7xAQg5ZQU",
  "key32": "3ASotV4VZNF8FbSrU1XGvKUM5bH1jGQksEBidQb1xfLJ9PVmbhW5VcoUwcHVJZS5dXMo8oHiroLh9wWjRiet33fE",
  "key33": "3nmBJqBbd4j1c9sis6p5ipBaoBvMMo14JDxjQutcZ5NKszzxTojYma7xVdp9adFwe9C6RjvCJvxcYoUjbWdh2Mf",
  "key34": "2LaCeGC6wsMWJrY9jPGQiHvSmLnrFRvky34fsLEniiUWjmriFfC95hPQEbUtspLk68oYnQMYxLf2MNd22hRFbKSg",
  "key35": "1RbPXidJL3XLFKq4zbbDTM3ZQvxkSPdpTfLT63ovWLhHE1G6PoM5qEC9mmB8T1VCoN1LQQGYhMTSu77d56zm4Ue",
  "key36": "5anSBsgCELKgp6Ce7gfzy17XztWFQVDXhDMmBdcq4w7a81UN1NJteNaEbr95NrSdHDz5d8v3hHL9h5Ki1cirDo1m",
  "key37": "3y4WDPZy5BobjWgS2jwwdHHr6Np6HowzKf2qM5BNbDoGsvST1pJAjjUdYSJ7QAbCTACM6TYbkCFwiUE6CKmA547i",
  "key38": "5PwHe6ERdNH9QZVQHof7baCNkFYEE5Tx1xEn5QUByFKGbXZATesxHXiUPgczMxsUBRABfAdXtnBBjP1Uk8hpiqkm",
  "key39": "4GgyhF6ztw9SiV8aCGLY4XKZKExZnwosQ6VWgrNoEVLG6K8EQ7RDg9VeRUtksUmJDqofkucFPDuS3oKJcZtR4XzJ",
  "key40": "4F7bWzm8TGcRKAN5ZVsQ9TssSLQbS4mwapoND9VkMchEkZLTMZNnDdbFDvuMykERx8b2vbBrvsKRGcByZgoG66nw",
  "key41": "4MzgUA6sAdKcCME7FxR4G3yjEgSrdVvD7wHH9jhq5Jt5N7cvi9m4dwNTn8cNpYRtdYdWFeM1NoNwsvic26X75CAu",
  "key42": "58fqA5hgKhHK4qkEVQ6tMrYjZLSwo5taAkzKAALq6NyT1jKnPZjSgYbK2cJ53Ki2P6iBTbmLtKG9XV97teZfGTzh",
  "key43": "3cNuQ8jMXqL2bpDrDKu6abiEGncrMzuKttjviyjvThb2kkPb4jgPKrjiXG2jMG7jFWdsrrG4W2k7WLds5S4KLx11",
  "key44": "qaf4NmMwSHm7uBsVDb5XxVPFKTazcJ4TUjuhUFESVuA3muy9ryyQoQ4bZt7ouG4symShJ7GBZJjJHti7GaV46ZX"
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
