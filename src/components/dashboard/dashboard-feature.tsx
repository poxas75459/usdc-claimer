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
    "5RZYudKuJekMN28oYcvBdWPq1PPe9Lxy9aL3fFzAxLEzp5U2r9UdNF9475KbSHwH4VM7ECGTHgSzGgdM7TNehhpo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NpBuczD1p92TaWjDuG4pbaUaokdXBkYMpqU8dFPVwgiLbSBZVV7zQgzcRFShykkBWVpavxhXHmMokqVWRZN9tng",
  "key1": "5JCCFrNRrpdtKDo42GWu5M5egtE4SU7S2CWhS7FxNKtLC3Kr2pthPbKWgXAdEStQBrWm84QNqWnMLQrj3bEUVdyj",
  "key2": "2ef5EHyonyWd5Bm1KPEovUK8bJrQw4NpjrKCR51Nud3nCXw11tkkyUyjrJBZE1Di7rTdxJtBZmfjLLi2rm4LG5DS",
  "key3": "3Z83GdjQj87roiWcGh7XopLTLLBr2uJE5FA7b4xj8DtAnc3R6hXDnP7mNzALBKJNm52dtqrAy3bJnukkUS9SRBaH",
  "key4": "x1EHw4Fc3ChHR79jEi6mvtHXG7Dgr7zhTEpkk6bbwAdv1gYfE6L9h6LyVFYj2J1PpneofCiLy7ekJEWvakNb7Ns",
  "key5": "iSZzwoNZTnoGnMdpPfMB2tP1F7o1nh52T4goqYVFR8oH6joRTiQRqJcaWM6AxafKyHK9X2XPt6FQRYEfgSvERzj",
  "key6": "sXDWoioVueSVLkE4hBtqoQjb1kEKVjx2W1NPpGfadryrTGXagLBKFeXEt8KPNfQUe6ZSPxMfV9aapUrLnHvFzZf",
  "key7": "5urT7f99LE9D2BC7tiW6cEU4SoepY8vispJ93SGRHB56ZYq4SkAc6dXGizWpgnLXfg48zT3hkbDrNzEDw2cXScvK",
  "key8": "3wMR4NUpVG5tDuXrjvsYDmeMpfp88BmwHV8oDvg2p8Nkd2YEZgZASyAEkDNfP4NzgxtYbCt8ubmvxbmCjN7C3neg",
  "key9": "4xzf4T9DosN63kBNREWM8YpEh4f623DhnsgEsqZLghJyv1jVTiom9YdTzyJ76YpKiWS34CnatpnPimhqtBySdY7i",
  "key10": "4sRf4VFs8z77bf5bzpQcWY9NbqoTCowF5MbeAmRqJxK8GT8nsKdaC6PaWHrf4rVLizpFZe2ppFkSVxTDXGbVWRSJ",
  "key11": "3NXh4mMVfwqefrend93brvoCLfCbCRVDnvfCYYcNJorAB8kzvHYNHkfJMowJaS8pPmEGfYmZUcLBT4GfMskSfoE5",
  "key12": "55yxdjuFoJ4wdwH5UQnruj2z8hU4cR9baLg8dYihK7t2mrxz1FyTSnjrXqmF5Xc38nM3vjMdfxVKJ83ze1hSGXDv",
  "key13": "3zSwZMATD85bYDjT52fuMYRSNMQvMjUYb5CEVtrsZLF1tqBNqBXPNRj523cF739s2TCmZcsWfC9h3Rg47eay25ba",
  "key14": "mkFkfKRzeW2SabdUW63VbSFicsh6kTxJEVhpGDfBYBqrVtAgfrUe8cxvEb7NL3fMCCa4M8UJM9UrV5hwNtfTnXP",
  "key15": "47mABjZBPtpPNtk98sp51tLxokE4vuxnQeaZo81KezTLeNs7hNxPxMkfq1zf5caHrBgFtMfdh6frx4YphoEFggRx",
  "key16": "5hgzsB8aDevKQm8TMWTVZFKAaLR9f6s9dVv6xiBLYQHaJCpDTQyUn1jqc5UEGEsEzubhTis3KL7gSNboaUgMT66M",
  "key17": "5vJzjpKfFvmJBE4y2XAZ3XdsN1hUFmrfQWa72rTzgSWdMEWEZovJoXq6aHDBd6PhcxTUFkudScHrubg45i8Nw9Qn",
  "key18": "8xQi4bz59ptmFEYndKJZsajwvF5VLJgcyBAp26keCbubpcPTBj2bi74kYgqwyNoBNNDw2Wc1QJt5mbSWg8XZ5he",
  "key19": "5ZvfFkEdnbMMB6r9WL6H7zAVtUktpjirYNDZagexwz9MokUpGHzPUeuzJKvpg6DUBZULkGdjBhd5cko4XQz4ZZkd",
  "key20": "5DdwMW7TLHaNN4L1yRFQQsjhA75aL3uP6BY41eDbauRQQ124wnDo3HNEk4MiemRPgsPe6sRc9UYycgG1CWQSoU5P",
  "key21": "43StFfFjLPR5vXAH4wAkE62cg5QeduVEn8bFDXTn6eHAf2ERcnt4YWnXRLoYmYmcN3Eqz27QFhwmJtQxyRQEqvu7",
  "key22": "ffRn97ek34wpdniCWnVLuckvTFgxdcYaxnJoAbQq6JC9oXx5voCF8ZhJZoXUqwqqBpt775wgLvGiw6XRxw9S82M",
  "key23": "4P7goN5azvSMYVyC8dKCMmS59NRufLdUrjsrQ1dizRrUr5XxWURNbt26igeX3v69PezCq5NSChG6ZC6xn3q3VyKd",
  "key24": "5sYzvyvJKXJtXGpcwWjj9u2CYZ4r8QEWSiV6WE2SgxgK7GEDUzv9Ffr5QS3Ffaptk1FUSWFNpRHLHtT1admWudkK",
  "key25": "26pP2crd7Gear3QkrNEbpywhZ6jPYoknWuJreSeuwwwf5rp3PWE2pZkJ4DpE1ahXdjRLqoJzB8djG6uXL9eoEYty",
  "key26": "wbSBcBaJ1yU7ecyzeuQURk1RmyE711bwbQk35RpesyvcfkbE5bMhPDyyrpDa4C98yjrFtfkFoMXcaZLZULpMLww",
  "key27": "2FXRYmz5VpgRHHR6hEsMkAiemaQ7UTjhntGjadXkwL5JopeHGGQNL5Rzfds3ehP7TgemLKTAUNK9Ki55HT6pMmBM",
  "key28": "38BF9GyVGjC33RDHZ62qvjLkYNk4mrsbTBY14rh2H7E6Yfw1cxHg2NZVJ3M16LShrF1AE1VEByqxmcxwwk3kMagC",
  "key29": "2Md6Ga8T8Gktvo6ry3mufyB31yPekKnWSCYRDAg2Kg2GQHSPuEeyaGhL8B1KeRvm9dwDWHJXYhaJfkrmBibNty5w",
  "key30": "2c1zra53CCSC7XSThpvLKa95seccNgb7MaVWUTz2weFFwLqUjQRHCXMMo6AsgWwTX3sYC1ztVWzuxfi54VxuKEie",
  "key31": "571FoUGuwzVTxErpW5EJJERfVNpizMhitbA7iBocmYmQHrx12fjfA4E1R8ZFz2TPqTconCnZWmMQLtEDaUWuDTw",
  "key32": "4SzhXcgF547TYF9ES4pyQx7w9w2b5RWBg4pvwcr3QMY9mMtRa5UmPNtbVXBygF5JmyHHCNmtfCSvDkvYt1TvxT9m",
  "key33": "3HzvgkqxsgUwJscPkPDecs4VjVyLxg2TmGhfjomxTWko9TrLDPR8baXjtksDiyeiaTG7LkgJjAozNQiHfdt1tFSU",
  "key34": "5Lad5TqxquoQy1EAPV59VnC6pTRQPDZJ29MuQaMqcdX7TPYKkmn69YAnAxjzJEwKiMRK4mvPLwEa1gQjyoLnoFmX",
  "key35": "KUzrT8cZka1RQnqwCevzpr8SY9CYf1hbfKr83pTVdSCuWFL3FMkwhr1kbZ8FwrJueLfFVbn3bjTwQ35YN4fDSDn",
  "key36": "63qBbcDi9e2zJzTEiMhMu9gfW2nEhgcCF5ZduVg2Z3Fpinwmrfcxzq9HNSyMm5e7Fs28NBx9uXDcgrFjEWMg9Hb7",
  "key37": "5fErSHfh4Gpuk5WJte8LH2DSSAbLaZf3CfEYgwEJ8KCbDGyj79Ychk8AVXAihxhiCgvEtKw39pwgWM2tBCuLPqq2",
  "key38": "329obfwkWsrKuLuBEyp2K587YeozCLzDe1ZvcZeocoMEUQYPhZ7gWBozPw62MD37PZDyGqwUhDS19wZ5wfm77srj",
  "key39": "5PJs1UnLg4Wu12knunzY9HzTYPqtrz1Rb8cdCCJYnjQwdzdW42rjTXoByht3RjyRXX9Qeu5mUf2M5ZQ8KpYKaRxF",
  "key40": "5o8QYFCnEGap2NvppKL5cB9uERotwpp3oqEaNu2LgLFh7UoC53JNWfdfYcsHeZ2j6MGBj2h5jHnqayTD2BNu3Amn",
  "key41": "58G2ZfFVCg3XKRVDWD9tjE6PP1NZSYfzmHchMVXRW2nBNYEYnPjPBUEewcDiTkaxcFbmu2Rv1TcTNZb24g4a1Cdi",
  "key42": "26tVtCdSKW1wd3g1DUKPzD11239DdWsj4ujeTCNQKKRDFuXRShiimZhK7QhjyJTZPih9YYcJDt33TkmhsLsGP3SV",
  "key43": "5LLqEQ9FE157ZG5QVm8uAEzMjc94FudQ48u6DhwNYUT8cShgwcqF5yAznPvE4TxH1cWaHj99u9Heybs4hJoKpbg4",
  "key44": "32vy22rycLidgRkob8hEofwHRVLK1f3gq87rZgSQzNSUFZVLWUjTbg9B73KWMXjqYm6iqCg8nwNC86GwnKJSwtf5",
  "key45": "33wtLPawb3BuaKVtjqd1qybcdVptxqKXKegAEtyVoTXkPgXsCrrsHNsbj6iBsosPwoAPBCjeacXuGZiDpVAHWzEN",
  "key46": "9vnLsSTZqj9UKSjFKT9PJufcfz1MXT162SpQceYg815gtHv2RvoKk2TprsRyRqMJCwyqjNYH2mc5HjH8wMwjKWH"
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
