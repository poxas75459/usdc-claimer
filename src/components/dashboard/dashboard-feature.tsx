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
    "4HoARFffMLe3A6rpt5fFsDh9wsprhNfrTwe5eVjbJzkuxUfT8Z1PRHNCig3s2KEnjTamdhBybowpQAfih7YNkmd8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eV8THZBtFb7s8nVK6C4Nx6LYRtJjb1tG4s93PLG6g3AnDus2hxR9hzE2LmBxXEAETSodKaNPczNn4CXaxVtQEQ6",
  "key1": "4dUG3Hv16MTLCNCqLuiMeR8UNVTAkn8dBYrTbngeBh7yCce5QMazr5nMFeTzjbgLnxuXKkdeoM3hrAnewitTkHhx",
  "key2": "3xUw4CWpREBw2AoBfuzdacAD46wMEmNA4dtBvt2wG9gcorHf5uDpiFz2WQwrxgiubsyNZSHGeScWib9NSBCQmExK",
  "key3": "57tanCJ7fGMWXeTv3yJvhcTssNofyQmpveFyTZLfU5yhRJt2JkLV7BJpjuZHnbtAJJwaFHmFa5ujCLXakKXAKoFn",
  "key4": "3cKWPB25BNDX3J5gNt6DsUMunbVJSUfXPWtuWjig99X9RW7axwMu8ZyCBWjGxp9KmPoK7sij8ahax6MUKGmeHhSJ",
  "key5": "21erJQ6MiatN3fBK4A1ToGUfeZ7Tv76STcrxiGPt1hCuxkWxgKKTSubfhrpu4Hf486ALA3r4gi65GGAudSCqAr28",
  "key6": "2mQJZSTrvNpkJicz1Mn4159JNE7u4sXNCk38TDT2dHUcgwtFk1n4U5A7cDEzGVywSsnsi6KZH6jpECfEEXHyveCm",
  "key7": "2rkFWyAxNUE9ZXdFt41Yt4AcNBKNAaeG6cp2zrvgutuDSeGjXSLe5LSgoUQBa1THdx4Qt2cfvxH5b3J9Bw65aoMi",
  "key8": "5jCejdw3nYxx3Lq4XTEZCGUaVew4o4QH1zRk6x956FVN5mWSyzuQi7v21KVpAkSsaoogorTSWtRm8aqwVdACo7mt",
  "key9": "2pdTMzJ9NSJj4eZMuxDDQFwCPyDrhf6VCU27MxHXw2MYoTX8CQW8gyNxebeghrQDZN6TKRNewxAZ32WU8uKpSTny",
  "key10": "5pyHKnNK5EFbswdBq6UoYNAXH1o21fiTeJP7d8aLZVXngtM6MkHzNK5Tb92KMJMJFwALKc5eh9h7z274gJF1AfJY",
  "key11": "DNa7QRs3A1hAybzRtKxhgbcdejG6WZx5UmFsNVkjWHWJJHiWmsNcgTNNC7sqGrfVdNzSEMEzwpnHqVP89isXma7",
  "key12": "2bT9MN2rjFJt9avbttMCpFv1txoFcy89fg9utFyGk16H8ZnVBzDP8YqLbugYrMJzaYPfyNtoFsuKTaoTDGeTpkxw",
  "key13": "TUCVsSnTPWnekEjn52vpLdAN6WpGa3yy9WKdZ8Xs4A2jr7FTvPnEs2nZ6TepsPyBrcZtGPH6WaUatosrwzP3iA8",
  "key14": "ERRQNg7keMz17nHAEvKtCKVgaph3GPANQkS7eCbnytQkUEbUdEokbYQ2R37nMzd3oDo43Rw83NrYH5Pg4kyUztH",
  "key15": "31rjKEaCHbsLXSY78iTPwzx6Uk4deQSoRsZ4aviHEGDfemjKrC9k942Y7cBZVhirmHc2cyaPrazFrLNqvajgi1Dv",
  "key16": "MdJxDdCMT45zzGmHzJNhQPaJKfU3YZyWMsDeErHGkwJCLPJCF6qiwvTdpFh6TXR2N2Yv6DMUJimsfEQeyLKJ6SU",
  "key17": "5fr242mNtXMeZQ24dxDzmuikNhtcKXFP6xF8syqf85aN4F4dntjsSS2kjrQp5a7dRz5hs1r2cPeiGwvEHAhP5KNV",
  "key18": "4NhkvCjv1K1n2D3zQimCqRhAm6nwo72McfDa6ghQaRkvCUiFzWa2wox8nwWe12JXFUGUiePFi5arR3Xx7z8P1QJ2",
  "key19": "4cg2VPf7VgqswsV8aHH8p1sJyahAGXZLGRs723bMQ3fA2poiFFFfwEcfu3ZQ5GGLUoYavCvub6G25uQsk8jquPH2",
  "key20": "2iMFMYUUxFWB5Lf395V49XYzaJkUysQjipEmjUCytPQircUfA5L4JbV4roYCh7pzBm8crMWGK2PdYtutQv4hYrTJ",
  "key21": "2YvZRQKaG1zNJEKYUz8LHMJYKJypfZ8tkLjYBLsL29TarNwcebZzHzAAxMbqa7yGf55EL7ADxoWAcPx5dJjoJwWN",
  "key22": "5kcQ35HkunPBmF2ftYbrtax6bbLf4FXHQoN5iSscjTuuwbjW7peJYgyyDiXgcko6ou3rkyX7rRmKm3bJQANEfYpq",
  "key23": "W3LmFx8qTiGtuosRfjLKW77ZK3NfGDHDvtiHP82rZ3GPMJdyt1BNEsTvXacnYAAyfCJfDK23U7H3GMz5Uz7iqNg",
  "key24": "3ndYC3xRtjcN5Nj94dTJss27WobDNn6CZQCrZhrKccscoSGs4Nwe7vremLyTipj9fLKYL8gVGhYaXrTg1qjSp3Rf",
  "key25": "2txZzMV7uvBJ2g5ZCSNzACNYVnUeNkpy1ZwcN5RB9Pdpwy78ABgyMh8s3ecTXBCrYtC2DoZLmJ7WqMxZtCdwginF",
  "key26": "5gaFmFTDP3k1wLX1e4Ccea5d3utp53MWNHHNKTgDaV6cdH1hk8WE5VtsQXaiuGa4UiP6Cubkv4fs3WDBU5NQsX8d",
  "key27": "4tuFWcPVirodYuG8nMcFUDj2m3o1Av8GeuaqTSn19qaj4phbFEVtdC8LUjuG8fERaabc2V71tDRJHw3v6w1ftGzX",
  "key28": "2Kz2fgXkiD7AKSe2HaJbSbjoy7xWvngWHhBWZpt6bMhWjjYStXerhTevNvn5ef2YePvhnTXxg4CVp3X1Gd5AKUbi",
  "key29": "4NjUXS19UFGDARa6WpsfvsmyHSNj2nSkRVdaSRSBz18WMBQ3DY1cQrYo2wTMQTALuP1T7wXM8qHck4J8i1DoKd7J",
  "key30": "3bdnnQXLQDEVbhKncZxoRH78H57sfeQnqDYKAt2FaiEmQ7AAQxr67srBpiLcwfRhMxhT8iTzupH1vNyxknaV8Eap",
  "key31": "5DmYiZn9qYGKbsvVcZ65LC6LqVevR6rUftF6xsPv7aAeP66rrybAVynB5biRQ8rMZCZYL84aNYziNMSQGc55A1TT",
  "key32": "5SUqvRWntDNuiJTnfen5GxABUxX4tBawD1gdM4nvvQDwLnemzupvepEupPxuuz13AuMVBtpjpHXpZUb5kCKyc3Rx",
  "key33": "536GFFjaFBxjzG3JhJYFmenJXinewg55FyBuUWN7wFh9QpTfbxr8ZGSFehtr7i7Ke2fsMPfDfwDswJsLCrTyhyHR",
  "key34": "25Zn5bDazfrQNuokDTr5ou9kRzocxs1anZi6A6GRLemSVbZRo1DXKftT7bDc38Y71odhqyvuvqiQ6tRx6Lrtbu6U",
  "key35": "3yeA61rqxkt2B2PpRVmFtFAtCu6pC71BG37K3FJ6jB9DAtugrwsLwTEhwVznnDXYEGj7NfhRAHtbCNodY8JoemtP",
  "key36": "4qZQ7L3jsCKF9Rjij6LJFmQAwC5XutskhZNCVNVunsuGFefGgqZtzLgSguwQ3RidM6L96zD7gMaVnjdoeC4Nbf1L",
  "key37": "2z7Zaqe8sCnutCMnpiBvLQSNRhf3iBeGU5L4becfGbFZTS6QUePxfEyLVS1SbEW5sUPLS54b59BzTVWpibrfLgqx",
  "key38": "oEkmLHwjb7wacMMVDPqeDxGkYp2vPYH3SRE2QBMiHL4WfjcJDEDS5y7Ud3GwZspGMjf7UYP2FKSBVZyb99pTX1Q",
  "key39": "noozBw7kxVqaRarm66Yq7gqb2B54dcR1fcyUJPdnkuYbdafMpbN6WAZfke3aut31KU7fqJos5msFsrXzV1EEdJb",
  "key40": "3iC333PZZiYhXhDZWdRHtooe53VjBZcYjraKiJ9daEGTNtuQxQuvw8LBHzrewLTKBREkgwSXMkhRc2UvkbvC576K",
  "key41": "3FoCkTSNoD5tD2aVPDd3yYSQHvuzZXQ5PVBVePfPwwSuVWaqcDk73qezNJPxek7eEJRZACd6n7AZe1oaX2dGtTtk",
  "key42": "33eDiot86QhWJAESjRhxxa1t4DFD6cvqYzp7jjQBj4PgMNLH6DnsKcDCmRbzWwYrnKiKNJMJGjMJg6dd2LY9KHfr",
  "key43": "4bNSdvuPGqaUGwTbK8iyv7eGUYhgVihkrzZ4U7CPqFrtugbUAuott72MSL8nQUsYCBd4XHboMyMZ5ah3NgizKkMp",
  "key44": "3ZFVqebRVjQ5qqSA8LYVxWT7PkxxU2Sw28UQpz4bQXwtjxzceLVUxFZ8cd6VB8soE42pn36YksBXkMqx42RmgfPV",
  "key45": "2FxBQwkALxkGavbEH3SftUCd4mx8kBdpqQrkYGqkt5j2yJejA5XdDTcHpkMsJnWj4gj9JBuBvUPLZN1BaEFz3odJ",
  "key46": "28ksa51iGXoTGPEeMVihdPysPt6p95oFsXZ96buYnkeT5F5YwZYaN3ckNA8XkYJAfQ5horYbVKFUVeuSGPUBmfqo",
  "key47": "2p7c91FQwhNmTJQAChxo2jVNkoGGM4Y2DJPgi8geqcrqUUxaSDUkZ4hDgJh85GWRgSsZF91BPCDJWURZE4Tfduue",
  "key48": "314ZGqccBpsGCsGHhRNNqFrTAkvT5oPxUnCg4xPrZNwbT6uJB6kn8XPvBJroATySW4bmgfoYP6UYfDZsJeHZWkBT"
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
