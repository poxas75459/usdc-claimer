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
    "2iE7tNWuXZDTs66Empo2gKtpq8NV66tzifNYTrx9a6gCwqzSsE8z7GGVMs764sNtA5y49qiDnc8ghQfKUYExQ7Dx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aN6pC5s1d8LgCVRx1UySvMrzfo16Ng8f1dD7ozgWVgpz5TU7FDzdSBoUiyjYg1MWESrWuzqXucafiFxkYZE685b",
  "key1": "eFw5JVynYc7TJymcsdT1rCG1J18DgZ1zNryx4uQ3dfx8Foatt8PzV4AZkwrjrGe9APudHYwLBn1rKpRJhf2FaiR",
  "key2": "5hgphACGstVwGvj4uEUrQoRrDhJTBEvFZLoXPn3Q6iNLKjneerq5V4r6FFNL2QSdve3UdxUMBGg5EmdFEfdfCZVY",
  "key3": "3WX7TPGSNwtJFVvJmcR3Ftj1KoifQ9fyyrieSQSuDBxgpx3NNPCsYdEBCdsDmbhoHxdEwRz98u8UKanBx99pGegM",
  "key4": "2HQAHL5e7CSibzqSF6L93HQH89wXboM9Wpj4BbV6ubFJ3xQU1zc56YscWUSjrSYJKqBy8JSdZC4BeY2Mf7K5Uh2o",
  "key5": "5T2TBsEjvmZTp8qrYMjNPWVBpKXfVmj2qjMUiHHhkPqbXHAUfqi93aMRKocSFnAGuRqdWqWUQcV2Qi27nwDv6BtJ",
  "key6": "3S9vjVDMnkZU4X58Y8aMc2eed1DfbmMRzDN3R8F2d37o1uNaB6RtLn4izCXnpPUauvhY5nXCAvm6a7oK58RaBotm",
  "key7": "5az9ZZU6Te2j152pvPUD2qi6t8YxJdawmGiKYxqeM7pFS52vhPnJHZ4mHBLvyjpRZNt7Ykt2uaU8ikmaeMYfwXMn",
  "key8": "5K9fsz7vo7kbKUKVHj5QCV7easnGF5HbxCXBWtnbT9HyZQkyEwRrmi1zZeGAQCWMHXgDe9B5Q4HCj6t7HdMo4DHE",
  "key9": "3jiWpvp4JwLnFXTtHbz7rswWNDbjaBaRDfySK4fGbCJrLMPjtfVnFUc7pXrTo754tiRMPSh27ZiZaioKbfTGwshv",
  "key10": "3bHf8AN23CjHoXDW1C3vFDgR6kAQcbwK586G3j7RGVNaFB84weqK46kATB1EaXRrftTxSiHM9cxj4rYLmBHoBMjJ",
  "key11": "5W8TuJ3qVWLiuGXR38T9AMLWQa6QdUzVQxj6vhiszQhxhcqwpGtC5ZLN5ThTLWWXGmk2F1bUexEngzSBsYkaQVvf",
  "key12": "5BTWZfV7RGrEGnK3PDjA5hjupU6ZGqjHdewYQP1tdbxSpc14txTk8MRZy7nxyDqFWvj6JH32iJh6H9uQFweB1rJL",
  "key13": "5bT2vzNV5Cwu8nh1Ts7NSntdkGozv8SXmrKuypWyTQrU8hLgucbFfyaR5AJBehCBBuNCe9KWfhdaKZj1D6MhpXQ9",
  "key14": "2JR7JRNvm52mDyTMzy6P48nAxLRRevw4j1eA54mvzAHZaWLFrboj3z4vHATYNE78KSaSHPKhD4yyP734SCmjV7DK",
  "key15": "2TKtriYHviomn7QhSkXoHkEBedQVY2qka76hMsp73QRo2c5963jTYw1FmAmpgMSsivUJhkum2ZP9x7WisPShUwEw",
  "key16": "2BdVWQ4b85GUvpSwceoYbbCoAsybGu1wLtUAQbrLsHRKTAqWsH2GhuXoBWmVCT2ydanZQLMhSHQ18DvFv4dYBJXf",
  "key17": "5pXQnyapECBZGBPvBSM15Hx6LdxGhQXmzmjqAekuTkhW1V1Bjke7tZkTLSfnmk6P5n7gXWsSyxksxxCBccmt932s",
  "key18": "5kNYZK9iFWC74LyBw39qy25h5mfop7anBeHwEg13F5o5ugJiB55dbhnSHSuKbQzsMi5FMrZKewyjdHG2fP2dwyJp",
  "key19": "3U45ziYBxKJzq4Cebm9zibdsc4miuN3UyEugr6gqq8HXgY2asCMN9Ru5KY3DR4VHfsiRbA9Fir9nJkBSfreqra3x",
  "key20": "2dQahAoM6BrwkHg5mDntq6UtxAvwC6uTufSiKQHjPibLTFz7E7mbYHXbHMsk2v9d3wLVt4ZawWZcEvor7aZENj7L",
  "key21": "3YoDEpjoTxxqhYAbPhZiUoLZc1ESxbcDgDncdETzSgRjaYx6aMCUE1zxLMSpN63Bg9cXSeWvQWUgBenxa6XQANq5",
  "key22": "4y85idJxJmb69ztj7vhBHic1MPzVbmePMDQ6jUuXQXvpUK6BL6WCatjYBw9kiFcwmGYah7kvPnydPPZQzR7TebbV",
  "key23": "3EsXkefFJRd2To57J1uyC24WapLos47tU9Xg91kWjrmbtHU1pV5nJpTyagtWTgX34DPko82jsYccJxhiQtKUPy9r",
  "key24": "3aonZSCrY6NMw2uTfx2X15oMPYpDTqmA7p5K8mH7aiEiP9SAR1epzNztF5R4bxxoQ6At5UqH8ijRCerES2hqctoy",
  "key25": "2dLycddJdTeLGiGnrbG8KVDpbQqdZahBw9MctdoLbKqPaBKUZfRkSRnzcJYw2AcNERL6qfYQNoayU9h88BWpckRc",
  "key26": "3w79X5FZqe51bkqtFEBei3rpjiW7bpFxhmGKhVpp9YiK1G1nkLnDPtWc8XnyXiUF4ZRtAxye7osJoDHB9zHqCwtR",
  "key27": "3f34L5oRTRfNSVrZpgTZgAHM1ECnRjZwzTzT5yGUTSo5Bu2f8f2cw8KJ9sSDj4LaAviXH1Xrutn8kXme48rc2THK",
  "key28": "4pAghYek587RbSkFnWgBZUPkGzmj2vYE4iqQa5Tdhfd9VHT5d5TUR9HLWktGf6bMbQxizE6hN4Atao7qiPM4oaRc",
  "key29": "2jTLQGqADZM9toeF2zaUMaxePGg5Na2w5UZERM4wnMJV2vyrwtoZXnCLwvd5bE2v5ZPMty7f7tjjsnUfp4ugYiyc",
  "key30": "2HvTLgyLDZoEwXNcv71ZTGJbsaadqiPgFR3Tv48nor38o1CP5fPkDjLtybtWwj6LxsvPtoP7wrtaoABVAopCRDUs",
  "key31": "BqLU5bYPsmiSuntqH6PKoiDCeuNYm2xaKZecFg6XrUXkGSbokr43V4toLT5AtcbTgNsR3Mu1cjMAHpGU21WsCes",
  "key32": "JdhNGZbEkdnVbeEwjfwvziTsSgpVvnL7p3nYcVbJeTa7DMUG9xq78GieHjuVVWB9u9k2rJwrT8AmvBkL8zQQrkC",
  "key33": "4HUANRaVYRmmm25kWq8R2SgwtaTj67pErQkWhGJ1ZQBuvDDak8KvQPJ3AdTSS2Y1X3t76h61uvEK4iRLpm5S7Uhi",
  "key34": "4bBoUiizpdg95ffq14Vd7XvNzkjGTahCeVexAn9UvMwe4rhyftxvosfxmbiFAd3fmnm1YDHK2m2rSgEhrgS86fiX",
  "key35": "5ZPKTZM6puUgFNPmkYxFwQtJDG5fch6HcHHA6gEEYAVwxt6KYsSCs4TJEb6H2pVigUjGST76iJxRNAZGzS8TAaiB",
  "key36": "3B9DvVifZPE5G7KTj9ApwEpspASAd9Q2g9i6EaRTd8kaJGzemE56632AF6Bm5LUCrqgv7mqmHHc91y99Gvd1EE3R",
  "key37": "29qKGw992tQy7SJwgwX4PFhDXkeJamZGCm1RLW3AhCf7ueHqNHw4J6x2k7jUzxPALxqkzHAcrmrBWSha4PCQJL2h",
  "key38": "bj7ENK1E5RHF8Ry1rLQh6uaqtpJnauQug8GHKjZSobRFXuassr7pMPRUVmmPENWKGBeBfPXX86hjdBQzGBeJzTB",
  "key39": "41nHfZX8sMpvtx6EY9S2pPqR38GpBiRb6N5LBYJjNbBJHu94tEWZt2iPR6PSSVCG7NuPa55W71hdwSpjzwWCrneL",
  "key40": "aCRszqnhVN3S4bVZjmdp1tUx8G7YKPaKr3mR6Y8gcW2oCnwjqBdv2y6knXQQudVVsZWmhJA7msT79HNU6d9uPdu",
  "key41": "d14B2xtJXD5M1WsVg1hpPfLX1sLC4GYxSTAbWyUnpMRTCTNRJSHeW3ZCht9kjKnnfE55EKP1EjB3N4PvA8Gzzvi",
  "key42": "o7fUmT5fAaJbPS8bLbwKSGGPLmt4TBPzz86q8cBNk6tKPHBAC5LxxfJPs9xVKg3bsHaFoiK4ZA2J7XDvB8quV5n",
  "key43": "4RhaU2mduwVGDK3Eymd86GXZCM9DPHro44f1NV2jJ2aTGk9afTSeJhtCgGKd68kjxWbk7r4nVgP5759GkmB5uVP2"
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
