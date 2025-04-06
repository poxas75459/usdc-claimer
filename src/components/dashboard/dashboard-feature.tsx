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
    "4cLh5YjBbU28RcGt2QpJ2vdATdHFGHaH1B37pjKrQtXtfxSG2b1NWFDyQm6hHEVrHJWwr44rQfCD2uqwRKBxwEsb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HttP8QxVE6aURJdLaXMehjHAQ7XNxdE861LE46c4BpWRTaZGEsMdyf9gZzwMRL3xHgz1VsEh8VLHdy7gRLD8Enf",
  "key1": "5X1Cvba47rNzFCLZQae4gjKPN1FnAFsXTVQgUAqrVhrNn6yMu6V8vzvh1sx2zccYJj9d3hGjthZP6DbDihLsh6qp",
  "key2": "2YtMTU1BB59f9QMENrtj7rr1BuGyH8KaqY47S9nKdmayi3daQJ3XqzTihAvv9v7MDzBP2fVks1R1SSPLZPZP1nmC",
  "key3": "3TUwax1PN6kjfLkPjhB3r6jynd7uEbbfqAXvd9XVidPaBmfCeEbSTJ8W4wiWquP6nZJ6rd6Kq3QgoP4h1JJ6J14k",
  "key4": "ysUFwXCJQJeyhHG8CAueHK4p6G5ZLAHS2gnKNC3zC6YXeM9YEq3LT1zyYEcRmcuQ9TSpxFXUtvdWuPRVnzMqtfa",
  "key5": "58wPVn79SnDxziZLdDYicAnCRoXNCmqfdnj9YVaXPPAoFsJrQsxeP34eMCXuMCMrNMgESsJQf48FG4iUwcRdy1Xj",
  "key6": "5TWD3J32iFxABeUtpBbkSQM4xx9xuAGWMYjAgYmFKV8mEidrHdhWuQKvTWBa2WYT7AWvQAxJrNjB6EVEZHx7WF44",
  "key7": "6pkquQVGa3be5SKMD7VpPGoZLGMgohJDR1qobiBcsf37vmRsSZC9YhSAFN6xMtwjnsYo99PygVVJDi8nUdeATML",
  "key8": "fkagRBBTBSeNZanteq1emHeQm6AvUiCa1WKU33n4gkZqB2EGBeir6gS5J3kYFZTBafZecrHqfKhCESuSbETcHbv",
  "key9": "2cvgZsx9v5KZWaYmXwbmp5nBYr628oXnU85RiyTmLJf7aD4PjAHjSoDuLKwWgcwLzW1j4VC95GYFz6mVxVEHPY6u",
  "key10": "3ZXhWMWu9YrQTZzpkgTZh7mCFMKLiTFY7bKpaA44rX3mFT4U6MqfoGAW6d3on7owhQxdHkbrViuvW8W8kt1mDgpV",
  "key11": "77uCeitXae2qWZKfvLTXDwtzqWB3nbm5XRM94DZetahWnVW96W5VsZSHJwx47VLg22Awha2vRafuzB8apsTfCG5",
  "key12": "SFABonCBSbbRTsJJH3BatnNdXQFxKoACeh2rFJq9XDaXfbvvrE4MSPhx79qqQpT5kTWM9eRT9oYx75Ggunawaxw",
  "key13": "5z7YWi5AaHsNKWBvSWEqt8ZDYPE7tUrDFxMgXXT1f74ANF6HbniQQjPPkhCBNPjCPztfpGpg9MpwC4GmhcLPXpNL",
  "key14": "4pNVEmuoSDtncaDFknjzWNAEaELT5uZoJpSTEyprDk21azCbqFqL3HrRLWLVJV7dYh8t2hxviWMA4iN9WrREKMxz",
  "key15": "JcvkgwBsXPfuFikgkkBtPu53YiRWPeGA9Ko7oh9AwGqJ3hmMXfBh26U6nZPWmTEL9yiw3rEVsDgK8GCNR46EFaA",
  "key16": "5QDKQmFiYBYDTtkvw8ebcG99uSDh2vKSqzhM9LjNhk6h72HcQQqzkaYmo1aWWes8DRSpRjW1ECHDFtvqyUHfKVeU",
  "key17": "2VsStq4SGo3mQa2rz57Y1Wg3nSgSri9D9rkB9DPYun6TL3c3SExwwwcmTz13v22Dv6PxFrQ7tXSiyhRuWuLNETfG",
  "key18": "5E1H6EGBMbWmuLboCnsbe6ZKcFuL5WEXhhj1EAxC3fWphhfe99iJ6wAaW1BhrYLLmoqir6i3B1ja3b4kkRosV1jr",
  "key19": "52atu3XAW6FPimhsyEGgLxmoSbhYX6mtRFKfLhr9PGVa5KcgJJB3kWiTKXXkAjdm5Dn695Ndf9wCoiDQt9WoQx2k",
  "key20": "469qENbEPkPsvSX21d22ycs7tNo5N776cs5K3GBEUPgvn6LTiYG3VToQhKoNiRjpnqLxoUVGfQtd3VKkfZdiGj7B",
  "key21": "XFVL1U14eNHvycJ3AbWN56dxo3R1QBiZyjxe5J4M5qBH8Uabgb4Bqb7d8XFaKthTYiZBqfZpLGiPZNzqA4cvB3S",
  "key22": "qsBFZGVqCXDxXgy9VPVRxEuSQEUMxhdZR1gyNEwMzwM4kf3AsowQ4xmxL7ZhoCssePSUm9H1uXNxY3KLSXgQ9a6",
  "key23": "Wr9u7MVms5cMU478MHoJWp3kHzroBhK6ByXML2jYEUiabqpdbFuF24LdwheCZ4CxQ6WQSBt3A9CWHJd8ZXgPrSs",
  "key24": "iUz7BJnghPZ34bwoEJmpTf5KvBke6JKjHVvuZziPdRjbSoWTLExPAvntd5zfmxMjVxAdeEjJvBg497sU6ofh1rA",
  "key25": "2rYqZmr3jzvovcMJESju2obCwQp2G87vC5rekuAjdCUXU49As9bH294BxmCG4hqvxfcDGuWpCJaGpA1m2HUdKAQX",
  "key26": "5C2ew2P6KtzKg3cBzVRax32QQBZYFAc5RFcCzx1mCNnjk6raoCaHdzuCA7pAnPCgZ8FNTfRbZMHPEvJrDTgm5vwr",
  "key27": "4KrwEcvuZdgj6DAZMFascP4rHm8PAPTpJHivdbHuUDtBF5nQ6vB2LGNntBzZHpN8kC784B3zzK69hns8NFR315qe",
  "key28": "z1HWBMZN1fmZ61Dt4Mruywwgg8o8cJPB71XaiWPk4f6NHrTGXov9rSusjHkfzm1YiqqwwSC9XZTrEKFP28VusjT",
  "key29": "o9R5h79S7k4k15Whmhvstjuc6ZSUE3nJ3QjJdkRnGoAsZTXg79PvzB6ooEpgxrtdqsNuiD3Bj7B194naWuKLZYi",
  "key30": "3E39QuV8S6vgDt3fEAs7cSczSEin9Kf2bpNAkEhchS8tVJCUB1rXer3xQ1HncqfgDdFYDxsYnkhbD12pNRF6QseU",
  "key31": "EEkCaU7hmByBbm16nFEdzeyaQWvpwsD9Dnjvty9aU7yCj79YPv3cbYipSteqhABdwRnBsetfuCzR3tqbQ3uF1ig",
  "key32": "5fMwvRLkh9xMRuN4Y2LoDq6HLftoJxXWRBFN3sQzVsbhnrm36E6ztBookHq8za6ZbH6En2M24d3HBts4yD6TRSgX",
  "key33": "4CnH7KQoqyhYAsZXyGAAhwr2PzFPbrptn9Qk6ayNeVm2g8bUAgr1PJdnygA3CRWptFGm9oaibXLKmAM1p19kDkPM",
  "key34": "4nk66mXzzrZ5T1b9Ao61SvySYoYGzrxre74DoZLnE3N6ch5bZjNXBWgP8psmiDL3WyaacffARRDrxJugH64B7PPr",
  "key35": "ozcyH2VeWzmgGJZLijHAkGSdxN9pogfx87YpZzJyzXBhSi5TE9rhXdVWjh3TVxjAX9mEcjEEGisaN11nj952i39",
  "key36": "2ZffkMToP6b9QV7167tART728JJW4tQqWNgCYK75bqDzr51oKz6SaPoVRYBQErRDS2A1fbYDfVY3XYAiag1R1Emp",
  "key37": "3QBUqpjQREYderXJNb3dV44fD1hsXoRcADnKfNrTu97iEduRd9x26G5BodiNZcwr2xQqegYpbaLjWy6X6ZgyzVyo",
  "key38": "3yeDonNVBUwrq79qDUWnRcZs1VxwLERzXs7KGjooEkoB8Edx5Z18ZoS1urhCTYZGMiaejq4v6bZFYsPZX6AC2fec",
  "key39": "3NVTr6MoCFaPcDQ5hpFmGx6EsnsW3KdB255iB7f9PoMGioiuasjH8ykgLqaA1R1JVbzBgeV2gadRAkAp1PfEdeK5",
  "key40": "3XGx87Z8GwzqyJDcYcsFXbWxDc21UHqXp8tAosuv3bUa6qwA1pQZ4JBdt3EUHwvZVGKs5NPPWbcqVdriKfWANsuR",
  "key41": "2Ne1PNUWBzbJkvPTUnKDAvEb1XzaARSuhqG2kJWXjfnxma37jREZMyMa5wsXpFVMruAT7V99dQeLYhoW1xYpCdff",
  "key42": "4cBQcPLJuKJMbAcoy7vRcrCgEMGvaeRzFJ64anSpv9ehv7ZbiUw7hWJgurLxcB7CZ4BMin9j6sbZsAc4UxDftCtA",
  "key43": "4EXKdT6GkmNRzvwK8xkqzzhR8mqrWU3yX2yj4sKRYk1oJKPP4kJnjPDYQcUAYS3oq16Zx4A8i3qFh7sN5cQqircC",
  "key44": "36Ros4KSEzMti6E6R7CdaFACgAfr7DKceJuaG5VZKCo4RUDXEWyJ2Rx2j46rG3pCVFsytnKyiLEKdTe5q7E5zeJ9"
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
