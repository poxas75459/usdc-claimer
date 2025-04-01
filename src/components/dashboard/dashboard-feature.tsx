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
    "4N36hudmzbuuNsw8jbhf7qc1dEKDACGmTdS7aucdDnmoqRojos3ZvdhYr1NYoTeqBgKdUuN11imyYQEGUtgg9xAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aGi5fTnAr9JTLvDUhs3BTTWfEeKkWN26PjPE2Vm9RdutqxGBNLncBvHLGTY5GQTYY6bAyPtK15VXp4PZeV5GZKX",
  "key1": "35ZsJxEWF5PY492Y7eY9erEPXHjfKh2cexxWTq71ktaA5MXqiHQjD2KeB7szXpqDXbZJhGtBZeWx7DP1ufi6z5yn",
  "key2": "4hQ81nGbg8jt4a8DPhN9ZZDTtGZmXCRVLXNdpyQkAUDbrwRZ3Dja2RXV9GvvSMZ4th3FHJXbPSniogQhHJP67eDm",
  "key3": "A6pGi42HXgdQ1992gqfeT1wgrKNdChgtLgA4pro1q5XoMjevaSwci4963xfTsRbpX5N3AuHxh8diFjgfwvPrphS",
  "key4": "5BRSN8HEKxbdQZdrkBUNPG8VHMq53Hj9apejT5U6tiYKVGSqVignpDpC3UzraGAC4vDRsWcrBnMG5cLHc7MP3yhg",
  "key5": "3sNYDazrkovTZFjJFQiDD9GhMa22PpYAfhqmvHnNuXrrGC9JZPVzrFjFh5bgRuMMFzoYjbCw7AERUdZmo8faueg7",
  "key6": "37V2P268L7DjGqjFC4xwqx8BDGHpWSBczVyjaH6ZwLsRaossxkGAPRasnJyCduEbSnoVDsEg7PzYFoGEA58Ltjmi",
  "key7": "CHBLxFCiGC9y3LWRbu9Y9ymXpvUf54t2WVYgPf4mcpK7T5fBiDQ6mzKyf8N78V5DEoTk59ijJmFbQB85241aRpA",
  "key8": "XmTJyrvicjJkne7J97Uzri3m8R4BoKYnggm6GKcDdDuDNkHpLk37FZLWg1mWNu3m52YbWYwvCJDMCZD1vVLguuT",
  "key9": "3LoHELfbFTU8orGNHMsHxSBu62CmxwNHEcMLyAP1FuaxdfNfcq9aGDBoSzbPRSBXgHKyYLHXGRYF1Lyk2YeeUTcX",
  "key10": "4DEEHDCzU7qQn8B71u1Tjm9Yz51uj5UXGEGGcyuKnbkbwm4vdj9kER4afpVBrUBg81rBppQZHSPAkfjeARvvUYQQ",
  "key11": "2QPq37cHyvdYauGZJeB1Be37kKrSb8YNgjQVanxH3ERxuruo9UKEhRKgTiSo8ckfigybqUJuzjncBatP6rGioK7E",
  "key12": "4j3rz3MMxZcRvMjpnKs68G1aRb6RDi3xmVT1whdFD2N7GgmKbe93teGrRjNpcg2H2hrKW1kMsZSTDJw3ewP9t9Sq",
  "key13": "3a9UKztgwREarrMqt5e3Zu1yrXpxxPqjt3fqn6RVMYikZY9jZDE3LigqgFq39hZRbsrSU1itCNE6v7gJkvdd1znU",
  "key14": "5vymVQd8iBeFzriwEsYTwHSGBk3Rk4qF88jtWFBUiELiJy7WRAobbRkSGRTH9xna1xWkbgJjwRzQZuiDzCFwBPQ8",
  "key15": "5TvjJUtCgBz6ybhvA733cgRUGGUAQyiwSUxxt947FTMgT4SoY4NkcbdHVyNkfHvjhMgaMoYK1paZpSQWaK6kuaHG",
  "key16": "2ssX3JwYB1cUrkE8RQbBycFub9ky9HdQf1Az27Pdaw8xYnL6sJJvLCTYujyZzQ6zt1QoGX5jvLqhfVPxCAZjChXo",
  "key17": "5u37Ty3iHFmTAW9XQhzBgSbc8PbKSAte7N1Ujjcw6GASVzrYMiNNfZ9ooajXATqeLzY5S76dFG9kPGFEL756Wd8c",
  "key18": "4cnzXwcaAqfD9YUWWX2dx8uAW5ik4rTKCTf2RBKujQS9hhj6yxRq9jAhmvAgh8UcMurKysKwEsx5Y8xEHF19B513",
  "key19": "5BEMP1cGeqgyx8CMeKKVdkWPchExabqKkLvB8vfEFHeW9rdH9575WpPn2MZLZhvht2TnYqJ4u7KKSjVfp8iAg2Wa",
  "key20": "U1fFAgrQ8tautWR1rxLT8rwTYKD427qTk4r37crSq4HBb3HhR4HLix6q5d61zSDQpCXdn7Bs7WR75CAJh699vGz",
  "key21": "5Bf9gLhX8BJ6Hfz8SRHvDbGC5hN5B3aQpT7VrnWMNr5yjFpisJ3ivJiWJbBPoq4HfD2mmid5jrPs7p78o6Teb4zJ",
  "key22": "5xRwwsW7hy1eKtobK4j3nixygbXmksci1hwA67J6Kr3xQRszV2zgndRLKmGsXiqUnM1b4L3BrusuFCX4zt8Bxn22",
  "key23": "QenmCVdXyBTTY7wSD4bSUrefBDaimsBTKdJuLUwJ2EKg9Rs1jaecMe8NjbsL2ADY3AMVaJvJUzLgDZBXcpjqJvj",
  "key24": "5dhiX9jkjuk27qz1SdVjhT5oC8r6UdH7ZY92UC5oehJTzNetYrEWnxrTgjgyaq4pBbwXKf9QXTTTmxdgHnqUr3C5",
  "key25": "2axbd9UH8eFHg6hBAfX8SrP1K5uroDjD7cqLDB6yLqwdrSpbYViCCRg6pXypbKxsHijeFqeXRLwaPJS2YRH6R5gJ",
  "key26": "656iCWc8UTk8qL4wm3hsMLQf11XZxMB7ixMHkw7kNM8VbLabh6t4Gr4F3HeMzNqzEfvR9NYnjAeRgTRCevLEaLNd",
  "key27": "sqKrGpgWvo1vtK6WiVWKaUCR6JCwjMCHKbESdoeuzzjUdsEcw6BuJa5rSsuDdJtP4gybPVZDTPWsUjVQKnDAYVx",
  "key28": "WN2SLZYaXfTHbkHoZ49SAfuE6hekSEus9a2D74CfTJYjvyUqwXyXP7sWrap9C25zvfFLFE3HnXnhcTZJZv8acnm",
  "key29": "7hUiAgAbAkz6kv8y2WBaiNwwn1maobW5UHPZfxyvDdjGubXBGdkfAfGXT7z9K3hJtYZjqNfiH2TDAwNs2tyibKS",
  "key30": "322WVBAhsyYLrGm8Be67zokJrx67WMVHuXiLqX6crYrt4FwbRmGXgQs2t6muNjmcvQ2Hg1QkWsjd4HSLtDPxTdxM",
  "key31": "3wq4YRYZBRGhvZJR1XD5bZXnoRpFbmXSYMhkAVGKkZFTP6gpzbVvuPQiXdgmYcdnecwFs9PwjaVp5SaYxmBBaT5P",
  "key32": "4d7FqMNyysaXesytKS5Sd6QVNLwRheMtN1jFTenUY4QZdvVa4xMvLgmDWbQAxWzJuu3MPi5W5U4LuauYntjTb7x4",
  "key33": "3vdZvHT1HjMLetiUPmKsghy8PB8KLm1LB5BR6C5EnvV8CWRzDjPA75x19bWfJ2dY1ZTqW5qVVQXhszNqDp8x1Sxv",
  "key34": "5hnDJQuKUSCZBYpb2h2aQJCyBVbzF63QLMcwYMUzEgvRPnWmBC8Sq8kLdyfDsJNkL1rVBeTRvjQBAFVPmiij35Lj",
  "key35": "62HRZauKj7wsD8tX37XJpj4Q17ehLycGwcXaFArC1Tdf55wFJ9TE8wrSk3AFEi6JUUZo7usXDxZ5gDHg9uiAGitq",
  "key36": "36TzWHEnShMqQGvouxgyEwCmihY6CfRbrS1Bfc6JjRYnQP1Kaacoiou1A4aKYJCRLgSk2Jifjn1SSBxHM8RLFEug",
  "key37": "4s1y9VVX6xshYJkzJPpiGb1mVHn9wezkvUfCD9KZrpGnmsY8h3to8GFNNdeunpYdhK7ucnEzx2PwAokrmx9wuAUq",
  "key38": "5gJ2Uu2gtkp3WCJYZJmhXdo3ftGyisvvTo2XFKhfuBSXUT7quYPCiZvydWUuHT9eLCo5e3hfjhiBFzPmpMY7P7bH",
  "key39": "JAFGjmnoPEyGFrdddwsJ3Zb69egXDwBWQJRHS64gBfK1ue5RgfaNwwqgpsqv5dKdFpqc4hh1PwmsExZuR1fvpop",
  "key40": "2Hegi5H52Jk3VHrsJaJDjfxLCB9tmbMUPeV8MhS8VeW4rtWRr722RnpveR996kE2qZMuXpnLkAgnZP659iJvfrSp",
  "key41": "2rnGLdqkUWEr5nriRRDsRsVpdJmc9WFXWSGjRsmJCWFyCsZewbYt7sBdZ7PswTHizsSjQnkRP85MUWuJkjLZRatW",
  "key42": "55eR65ozvzQs8hBGoc54oP4dkAkgG3g9xwzJnXoRvgDvrGxBmmkqGamJRKhZt3iXU5wrnB9eAJcRJeHe7ooWr7ZD",
  "key43": "5GvE6Mzc7YLNDcqHqJc8N4RWSVRLC7pYWeLqQa89hosE7mNrfzYU6bWpoxsR6tVhNNGp4b2jeY2gSHW2CLu4zEBp",
  "key44": "62N3YMaL3gEfHyHV7ez47Rcx1QL2LpqQGdFEkfkCAqk4bidLTP36r1serHNXFyuq7w6mxCkbRoBoucs8jumprR1m",
  "key45": "3WxBMbRC6ku3HcLvRdvX388wqhRm7uZXseVrbZrkQGkLy41ZboctLGwZfkMtduNaSGQGYACEN9EZPWrAmiAwcvYR",
  "key46": "4kcS19KmTxdEz2GnMegwDZjJda67pkY9FPqSKC6MG1Yq2PzgwET4LUdcQTVL7k3C9eySooi2tFqFMTz8GJRfwmqd",
  "key47": "3YotMLQeNkB8tyjAwS5xWpasDKyXSo5gg2mbNUAXC5DPtNpyVh8PfzdFNnYi7qHsVRNNYUvYXT1FJv1KHypSteVU"
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
