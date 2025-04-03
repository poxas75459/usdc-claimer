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
    "65s8wiYJE7yo1t367DzFFwiynGf1jQxbANeQfZNPB3Tcnz53M2tMTKxSLYa43hLvYiPc9NMTAqMzTBfB3JYAxbgN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pvEBdvF9sX31GNTrQXUynuKkc98mo7AkANk9mXCKEbW4Z1BHSFRDiXbhme8vf6m4UJQ4JbCDDctDXvf6BdBrAGt",
  "key1": "gpgztzBHvysqhqSQzhhXsyBgSjHMu4XGxyL8ViyFUkSXsS5EcdWEVSPbJ4CQsqN5qMughauBj1qAsoSQXcWcy1k",
  "key2": "4YQLm5qF7CRcwy1akki4NDwC6tSEa69YWyohpb7k34v67c3PiGnGMuWVaSW6id4h4ZrQa22aDH1voBCXFknu6VVp",
  "key3": "Kn74AEC3KgekYNh8yz336ogjqibDZUoDGmHbukzTNDXTGFX57moch73eYDTCDpFNfiHRupydDPnhCWUaM8EhWMX",
  "key4": "duboX5siJDJPFwgcMyHarhWzHDHV3a8zLtLYkK8fnHf72MeqEeJCnGfXqArTNcAVZFW4JwQZdK3X88n8gZ4mq4V",
  "key5": "3iwcQPDhmm5b5P1w5BNExMeYEjdFpbH4sxNmQsQwCfqaaE9WnLhJLJkESyqSEG5Ex9YfMoK8ew3ckjVhja4ZCkCq",
  "key6": "4G1zx7EGD62Ya9UwSPpM53d5rvsV66ksow9t88W6PTH9SrNcjFXw766mumokFPchFJSrZuHCbx4djjaDduRcjuUd",
  "key7": "JE4QoehbM6yKDFPCuEe4hn1A3QCxLUdrLQgKLwtGea1ECt5ck9pi28gyvD9MBwbMgb1qcAF781RjQ61rdr2VkF9",
  "key8": "62hhXbdnjMdLhkhGYWWzcbQV6Zi5tAqcp2e7o6o22M2QBi8HxxdipezEUN1eQRTtoPdF1uLjJknaQpDUnozcDP1Y",
  "key9": "emkKKgb11iNfgAQ4vioahbVeJGcy7xQJMMVGJjhRKnUebNXcwf9FZp24jKAE4Bj8JRFyPpYcp47GS1wocNf7KvN",
  "key10": "Jv1Hfrt9r3acGfZoTjHocKFqt4jLqptDMHV81RbWcM1Tfw7BuyjX3dEGw1yvV8BbRynBWoAgw2rWJuxgVoMKxBr",
  "key11": "2ftMFAUGMMxcyxGf23BR9BhgbzNtZ8tMLESpXja3sQ5VwUTtxUDmBECwfUJmh7KtHp44n7TnZZGqsjDPKrgoDKTK",
  "key12": "35yY31Fz3DTmVuCMdmJhKf2KaB7cC97vTDq7zMsAV2EaUdJJ5WZg1igwADK9bQ4BSiBTjn4TRK15ZXJ8bSmcEUx7",
  "key13": "2XhSmkJofGggt3zSHJSRpJynXVgwGhi85b5xqCLPvuQDEmdVJJePEjibveVGG9YwV8pfqpuj255b495tFP8fqCoi",
  "key14": "4X32TcQ1JwHwm9o2T9CcVEx13kNGmtKBgGiz5Mso5Mfo8sqAUKWnGD6RuWMv8sqt6LtvQm7UY1DG4mBozzTpYAyU",
  "key15": "48JEuPopKfyY6zZkyBY8Ze3QJ1pn3oKbNmvqoREUFeRxawtB1iQerShANY2GpEk1qyCuNdhF3q4r3nbPQyQpsUrs",
  "key16": "53ziQeSTnASrN9pXw8GTYPEdyqU8ZvWkEoxmzLvz6kCBxMQe5d4Z2ujBW3WZJRp3BQ5Qbw2QEGsv1XNqqS3bKXXc",
  "key17": "4JxVS1v2dsCaSNe2kgaXyz5jr91TGxnPZ5KvU2HGTGKCFS7ThojvsEa7aJFUi7Rf8Nwvv8VzPGJKwJJNNU6iCQtf",
  "key18": "52GBGjsVrM5c7XJ3cB7ZEeWTQgMrrTDGhi8aRW6ubvX5jQjWQHrwWEg8dCCYkL6FxanRWgxjB66P72KKmtGz7miY",
  "key19": "5E9ySBfQcy7dfMGXtBM8QXj2euni8N7bri1NoWv8m2nrWoNzHKPHEumd1Ruq5iNVE2ue3ZCDByp6N22hgutVpoyq",
  "key20": "4dkaBxdsTWCs3zapQXZ99AuFi7HUnnq7kYF6szHd97Sw5w2K7otkHPP7oZA3NuCXWeVZb3Ja9J2Uaj6T94Hox5To",
  "key21": "4AkM8ikuqkuRX7r6YdkgkpmidNWoSvkQk7GYtzbDKyvxeBhEYrMT1ErcTorUGvrWPHPc4ruu5MLk5Tor22YuQpVd",
  "key22": "4fBDVBhtKfmFEanpE4qme3354FKsFdXT77kKNbGqfjdy8TLbv83V3sHD1bx3j2Znxpxam3cAmBa7UPELXq4smekw",
  "key23": "3TWYxJgFFKsPFXsxJvASX46C6RKo4sc2jZTFbnL7w2c6GkBtZr1qTqbmy8C9tNdDdpJyh1G6sT4CbHChuRjm8hy5",
  "key24": "5zwA2k5cNhL9zgNb4mpGC6iZWHLF7sJ4SwtZHbPZn6YmCA6ptoza9z6wVAgJEbAZjXSCSBzMvtU1kjjsTxhEWQrj",
  "key25": "cUgewmDrE5Pqs39wXu4NkfR4WCoBR2odHv3CYjQCaycNsMUXp5qZc6j9ENVU8Q25JU4ywLnU4h7QnCmgsJMKgx8",
  "key26": "3VJAn4w5UUUrHTJPBGXQXBkUKZSStJrb2eLpSpvfG7fRGZYpfy46NVBm34mCCRWq3dU8j8forHgUMrNFfVNuwsB5",
  "key27": "4vHATXu6yr7nJM2Cmt4cgfG5xC2guiDjZ7fwuPpBY8RCoXwmgYuj82BVdB4xiMM1Nb39ZT27FJnwxPaCC5EHGiDH",
  "key28": "616rn1MkTQ5PA9Gt6ut6ERvW7p6SeEBtDobDVfVnTMJerMfJMSFQW7rrf7T4ReANe7Ehy2e5Bod4pjk8UiAH6myp",
  "key29": "RAACV6VZTziitMJcuCQBvLndETzvpNWCHhEZ4Ucg6pjGmnEPJqdmSMNW9z6tN1KjbgFYULCB1g3sAX1oUs352nN",
  "key30": "PUSLtHtRMVPZ5Csj4Y2K3BtdFPcYzyJSBo3RJSLSye7MhhVWzGQZ84w6EdaxVs4aTRGbRz35qA2ZZgNTPD4fpau",
  "key31": "3w7VKvM35ZK9DnrFJTtoDWjMjS2Y1SmzDiETwyDAAoPH68d6MjTb5b1S5hKHZsD8ZGPXoJfM6KBvjWjRNoR6x8zG",
  "key32": "2p6ZSss5Ef8Z5x57J3ESKDAK5TuZjMnNBRVkoqdDVJk1g2Qh1a9F9rXAMPSXg4sCeR93gdoGJhFtRQLd96chUAUe",
  "key33": "4xtR8Xg4361Q1AyQPZ7R18uCXuGvRpZybvqNk3VuZySjGgFuu1J1cKkBTqnPrbKaTCtCbquAQnz1Xe3ZagdB3p3H",
  "key34": "3dig9ENzYykGvpBa3mLvDMfhMp7zArXWZtL132GdqX273DSnkcvfhvXekRasTyfgyNcPd1HtaTReamSXrh5fJouN",
  "key35": "b8mBXdesA9cYytQsVgVZbsDLU29PYoL6khig62ZAE1NpC2Cf2XujSMqni2WpUvhLMThE5bW1W1G7Suf4zCvUYDu",
  "key36": "4Wa3h65ii5vaet6cMZJKaNdmUrnRvZR2FZJDGUoc2pYM4FgSgVBcjGXbWncXNdB6kh7FxiuqTnBHvE1nWd8z8mp1",
  "key37": "2M8qpjV5ugXLGADnbJCTkXGFA2EfqSAXG26bD9tSb6jSEMvTn7VoDKYw63R4wJ8axyb495Q6yzLj7CBHozCFD8hP",
  "key38": "3ieCFTFwSj35QbwDWDm9Pn2VU3Vn25fVnNGCXgpDVZAo9hRu5xhisYsvXEaKdnn24Fv83oTP3hGRMMjHAj8t9UHq",
  "key39": "2ERPcmCJAuAtWjeNuzH7JtsKERftHo3smGcnW1978mopQF9zYfSkxEdQy5ukUF2RgzHFpbBqLBzGfqTHNcJUMGJ8",
  "key40": "aUgNkFSCMKfEruNzEhNaR47yArLv2pw7SCm8oGj8bzHYHEGrG4NmqVAipnFZgKuG8MJPrar7aukpFo5zE5M3fEW",
  "key41": "2wxtiUJBoJCWRSnwqLLW4EafFovxAtwaNJGVNbjqRXD1TFbH389428roMeMKrqu2RXQWDcE5qa3XGLEbmGjyNkga",
  "key42": "2sWzMHJKrdJukUJsDUAWB3Tom6VasoVRJyST95Vn4yzoDGHC3QhEkMuQz3AL67NXMEiUQNRszVztbcXk7ct4LUSs",
  "key43": "25fmV69MnuACn8gC76JvvExWk6z46SCkG3Q99R7YJr4UKrG7CdmVcEUzm8FN9xosWSLrM8ogNCjae17VMxxxAkD4",
  "key44": "59cAcwCMvmj4J1H79ZDJQyFAKZcvB4yUzFenig4pc3PnJF5SANsjaTcsTLkqy6bFpJr3xUyxxfbpWAdfTMQ55pPo"
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
