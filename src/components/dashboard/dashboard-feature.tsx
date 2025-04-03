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
    "4kANRnFYa1DjonPq1CqYYoevwCKPToogojNdDW7ybQgbyqki1WgtpZcngsi7m7ydCoQVP9JGbWiC3K2s1HeLzb2g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T4GYwqBnfPV94JjvkPVX582LdYLsUvUGLYeufiCbH4uMiYXUK1LWyRgMa5KWt2a6a2Ktt4JCWqH3n5Kv6y2Rnrj",
  "key1": "22oi2kzsiFcRNZ7fkXHULFwEC8i1fKFc7TfpA5AHeDXUxqrth1MSZgPbv1eiy6rKj1HHtGKQWXSt4YNNdXGBYvtj",
  "key2": "5GE9s7FUomTL3Qqt5t9Gf3yM1tphUJRqaXvVitsVh1dULGfXia94LviUHbCsP2JVbxwpkvxbdhnUg4g2u5iqNKZn",
  "key3": "4z8pKwjT8pBFNe3mKcKedoRZaHqKB7nvxgR5nsbW8brF5U851oefkssXfYLvR1d3vdQZpqoZ5pNuxNC2TuoNxFUT",
  "key4": "5kjzJBNvfagMf4iqzs9mtvAnG8eHTeRxUWre1FYTa3ATR5x3HoBikwyBXkj8NEoeXo1dAuHXoVX1nnMDA3vfDBao",
  "key5": "4gKw4LEVka3VGPsXrkK4MCMJFuhvnN1UDT1DionipC8AFPweCGWuPhYJhWRPsDvc7ZZ7BrFKRxBVg4EdyVAq5kH7",
  "key6": "5TFecu2pQ8VCTjBexWfsQpXQESqnBa5bsjk77KkP8rnuu9rkymoXVRKbRCYCFDuF3KjztdRHkbibv5rjZpxHfUwc",
  "key7": "62bXwe69ZnFpjM3oEre3modUcd8c5fCJTGSi1yQ477cmiV5s3E8AtPrdZYcKki5KbYUxtxeHRKwzmCKhy3G6VQmc",
  "key8": "2Bm9V6SZesGjen3QWcakG87YJGmJhuWMJSxSunUrR936c1kxKngAK5WTPCqdhjVK825VAJmyKeH7ue5cWcUX9wHz",
  "key9": "29XZRZhFzubbG8bTPL2SCrCCqguxybtpmV4LzE6fAdgjm73DV68uTE68G2ZT7npNTn5sRtGXfYz1jHzeDyzPFQ2Y",
  "key10": "4Ps72c3WG5MNB2UFPSSaedgpvXV8kLML1uZ3U4a9LGa5PBFPqot3CSbZcXS1KBD97cw6eS5mXDoK1ykQUXYSPGEu",
  "key11": "2tEyQVz5EgvVKjkPGwczgXxDohqjckrjTNysTUVQMGRdXR7tD5oiYBtXWsjLES1wq5VYjFV4ViyVy5NzDVcW2NBd",
  "key12": "56CNSgSUnNhKXVM2dGqGCksS4SkrxhPfz1btWHxwayktuHTJhqm9RMFMjpDHNRFmLMCQyzRp9o3vENNumWcxBYWw",
  "key13": "3Te8TKBs5pW6RdmC4xSPHGSB44E1wY2a3Jmicn5kKUPFtrWE7DCsP9UXyXdxK6LdzuVegCTRcmaAAMpbEx6jZi3A",
  "key14": "hCpgEY4M3dzoUejsxe5tk8ALcSF8iJFUpTWt9Kmo2gc6BeRynS5J96hJJoSYiDEumCk58R1Yf3dC9RLgMErBGQk",
  "key15": "4hBMKyyZa7fEth14hpGySjNKQtdLRaUKa1hRUMG7AFrN1LcRAxEzArUdE2GZwdsjLQTPzaJ2t2eDWi4j1rpjHXKh",
  "key16": "57N9hKbwUfqLnDa6qwaCLc51Rrk9Ab2mvfLVcfVjZSY4RrXTiXd9D4WWMhGWXTehp1kFpjrooTRVD4pMgHjFW8d5",
  "key17": "3FtPAd9VJxydHeeugY5KXGNBZ6ep5dJ9DHdvGRC7NbET1NNKQCT6YD25rYfiQud3H7rqSPBgFFY7R4eRbeyDdWUB",
  "key18": "4FoJt1azqZ18SKHqh4twdm8Zg5NUgffuyechpyvKSLpCYKxBR6KyWWqyAQWeHktJ63VpqPPP7wodVKTt3MSAARop",
  "key19": "FASa8PjN5dqCLGpZgQYYx7BimzNrH7zWEiEHQ8waDiQc22UPoHc5osPX2Qxs4Gx4oQsSrE2ymZY7Apt7SUyXCM5",
  "key20": "48BhU59P8qBD6vCBD7axvQnm2QWpYPbSQSKAGeh5h6Jjyu1wrwsPAZq1F3R2bvLa9zdS9rX2nyrp1q1vjtTK8VjY",
  "key21": "5mZQhadGLixJRk62iDZzoWX4KFHD1zJ46JbQoUs4Mh8Su6t9CtDXty1poehb5PvJNAdosQD3vH3p6WKmn3tkV4yk",
  "key22": "5j3YeewC2hqvCPh42FjmovV6NhvB5pA6jtuhE2zJeDfsQpT8N3iynwoAPcRGmofpxgpQpmQDsdmD1hBsGweFXvhg",
  "key23": "3EntFBXpubuEnhGfYER7Q5Qrj9VEJpGZwbZhVJLShEpUrsr1wX5UEj1PWtXEozsrmdoRnXVp3UaQBnMuUhniN3NM",
  "key24": "MJ3d8yEsx28nGv7XakN5qmD2vZkMuxTiUyWQXe8XJTjo6B2UxMGSvsK3AK3R4HXJbJjEtny3dRSaHTzmkhsNs24",
  "key25": "g2d7nuq9RzqEVWiaEsYGR27kVJdS2d9GLnkg4jEeZy3e7CsRMTj4vS3mcGGgzHG3knr5ixLjNgjDg3TA2XYdgnj",
  "key26": "56zJFY9X9Pn16gVNByv8Ayk2EekNuiY4HfhKQgKNcaJNGQs8sUa5HcaNaoE1kroun1pnjcx1ozwVbBxSKFWr3mMu",
  "key27": "WUKDq6k5vXa142EtpcNzdsaKtwvmdvWFEcK9sV5Fh9wAf18q6DfFyNdAMkTsNCXYfeg6Z1fANNTyHC9dnhinwfq",
  "key28": "AxKfhu37zDEW1VHsrsX7J4grLYWepnuybGvEk4pPzSgmH3E2HDjzXz6WqKbEwdNJXbmLvpJHnCriiGr7ZevP5m5",
  "key29": "2ZRvdar7kDaipe8P7WZ9hddDwpo21fXnB8cn1LSXZQdWmV3TQaMugeNdUbek4n1XYFcHQGq2NfkudTFH6bEN1pLD",
  "key30": "3cWcQgFx6NB3UdRGyjSrLdNL6me5V7dtHmqtCLMcH9dFqZsNy1AXjey6qSvKuZ2t12ZkZ6Rb7ZnSeZh1pGTBSeZ1",
  "key31": "2Ck5b2TZwjizfTHTSSV7NRCGn1cmUtomTJYxZEac1x7dpRwRWb5ozBkh6h78ucsLfAzr7eR6Qe5uBJVK8jP2UoKH",
  "key32": "3pQs7o1WNEx1rib7YTFLysP6Ds8vyWpPaKvC5buj6vQ73wh5zgi52Xpu3rtTuJNn2duxLSo2bg2BaUWFioqvproz",
  "key33": "4GLbpUcJShWXhidXBYWYe8qkBcFijZCL5yY65LWaNuderLaPFiCusinCFbmUeCzoQNZsQsJoPrD6YArUaxFForo6",
  "key34": "3NtbtwNy11qLvA9Zb1btfYhxCyP31UXNZqeywnFW5YL5udUgGcnxvG2Ld1HVqVuS8GrTw25XLb3eAhYkvgZzdBLu",
  "key35": "3HkxhC4r715ZiXTSzW96wYwCnAt1kc4JewaT4k3PPDHjy1uPVr7Y3m1otfVeVBoP9nTWF2CVmj4YjGGV9ZWKN3sG",
  "key36": "3bsVJqocDuPVGYmMeQcxuMXKp9ehBQprV8CQhoxABAkJTo2pKF9ycDJaRSczfi3YxyhddjZe7jx9fbkkH5eXdRWQ",
  "key37": "2k8Abvexb3zqwWag4MYauNu7JrBipNk6eV9twhpQbHh2HntmJzras5ykWHs44QTEKfWQ4DDXCFUbNRYr2FmSJmin",
  "key38": "2zDrBmVzq9BuZ2zFabLdnsHFjjktLwbYDJPj4HSwnmFw6Pf9zKBtFimbtTAzGC8BkGuSCYvo7QGnEhJXzJFpnqxD",
  "key39": "3vnGWpbji9WnbpTfBM7TeYCkj4eMTPoHiHUokh6cAXnTF11bFfsYoeftpe1af4HvuwRGRtdJPyMFiHjRKfBrkWan",
  "key40": "EysiBpkMmsB8yqbc319iWkTjVYf59CeU5zQhQUaGPWk6V5iHZmkeSEFRnVDww4vgF7JsrK4CZTQNYLV2PtMCWwR",
  "key41": "5zRiCAPR2w4Q81Bp15qWkZCSj475ynSd5fVzJTX4w2wfH2ohQ8pC4VmQwdzMjKo2LpmqYD5wuqQX1TsNkiKFRBE2",
  "key42": "TV8xqx4bu91koDhySHQ27UZU6kFEZA4cmgoZVMc1G8GwopwsmaZ3SVrRSCi5raBevZnxdUgum7FrJyrarqGG2sL",
  "key43": "44nXkcxdfifyWBaoNwkTVJKPLUV7aoDjSXn1EDrpzcgRgTcu1K4wGoocUToSSGezV5rT7PgBUomVQEkKXBcRYFv4",
  "key44": "3pZv7TNoPdaq5zcsX7kucBspw822Q3XFHYGfzCkNcf4djmtVZrTkg1m6iimJKPQH2gad1UbNbNr89E6aaujMZ83Q",
  "key45": "NsFmoejpKXGYnb5q5YuqfPWBKTSdHAjGLDwnbSdHY7nmB1McCcgfJvActp9u98bAsko6wZJ6XNmMfV7cRc38Yws",
  "key46": "3zRA2t7VNwqks1uxpupaukMBEbqc5WDnD6R5uPgRTDDsBWNUsh91NFaUmVQZ5JagNRWHKBL88ZfN5569nFYjAfxt",
  "key47": "2bszRMvgxabfjsSLrFqSjfF62eNzKCsYP3yxDHLnEv9q8DiSfRZAhuvuedE1zQ5EAsmJab9pyJBKXEYxYvmd2qeo",
  "key48": "58o3DUUEX45SgwzM3a9FD8wC8B2x8sMfeijcKiA6CEKdT5Z4Q54g8GLrHFA1yWzU6deWxo3mpZA1HkXWhLCoTVtg"
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
