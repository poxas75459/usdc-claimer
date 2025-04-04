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
    "bXCGAGXyYSz6NsFvfnLfNrAWwMqRoFhWwpmTTVAxjsShHMwxf6c64hZc5w5enSWcbndCQqpvrivt7XaHFoVY67S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zxXP7KJj9EnnUbAX3uL931uMyNoDNdvudZjVBzg1EtHS5nf1mu2W6VLDZKAxFnQEwyL4GTNdRNTheNANL3wWWuM",
  "key1": "Hz5FB4Zn2xPqcAwqnnw28MqsEBhNcr1jfkc3Nn3CEHZ56mv75VA1C1L3Dr9J7tBRM3u6eQ2EoiT2xcy1a9vrLzh",
  "key2": "cnRHKpK2KxqQU1UHvtvrVtcNMLbxY83j3X8uUk3CeU3unM51xTegUgUzWyhnrfKEHThrJPgYwbZDYTgKBmBukem",
  "key3": "5Z2RD6sQUdXSctB2uWc1LV4bDcSYLjdYSsVUeEVgBS1Y81YeroJqJLZnZj3YLnwWSjbFxXDCpqU47P85yYqWyWCz",
  "key4": "47vHnMmA9N7FzFCCFaieSiXNDZ46fEMErgryWRrXkxv12J8ptRVw7LjmPHXVFBdb7ZLXpJ6mR3TCGHHryqcEkBYQ",
  "key5": "5gPsMt2tyqRxqqfgSVqwpoC1PxDHodkADGCkGT6WixyZ5nbKPxyFsfmGiEmUXYU9F3EAi8xtKtAX7x198kQRghw7",
  "key6": "3jsskhTtrQqjkfSrAc69gshqj7AihDmfsasa7vErv6XeRpe2PrYRMQVrpkFoiKqnHHBaZxjRzNcFaepzuD6ekNPt",
  "key7": "4UEqFCLAssJBNB77Jdc24dsiXCfHteAD5X7Pop9ExGzMGXuqUq4J2EF4cVxUeLuFtLqpND8Vvt3grdm7QcZ3GbZs",
  "key8": "5ymAae9ektU9hxFzShoGdUc2twWvtGTBaf5UZuC4TtaKR8wpNLQcGsQkyaH6m7iMtazdGfhecFrjnwyk2HDE84Qv",
  "key9": "5JG3QTmNCbkuKeEG3yEKbtUSkduHXtZXuafnceCBJbYJcFu11zBZKxqpha6P9VpRMW9kwp2fzgjYrsP5xtXm2ULX",
  "key10": "2cVnv2agshiTb8GUvLzTHnjSJZi45Qj7SE7fB3BkMHyzBV8QKJxZQWGEq1KVyoEj1LfNgYjTYKfXx9c1ifvhA9je",
  "key11": "DxkSTyiYCK4rjtJAisgS87L5WKNw8Sau4hmve3se7xzGoQARLUMJB858PZ18q1qzJDnKCLtYGt7cz1GtBEpP8pz",
  "key12": "5UjpoaxKTqPjKFQ8bZRhuqZZQxNgoZpukN6NP7fyaTficoocZtXkEMgD8aAk7yk585juHgx6hrUuEiZD589e92Gr",
  "key13": "3gEbZ2Xku7muecLGtHjcAXC87py2STW9rGVSfDXyMQ8qzGhyxmKuQqgk123ceh41dEdXhNmYiECThrMWbJ8unBB",
  "key14": "4yKD9JXbM7fukb29S2cMa187qvhSZH8TVEyzKQEN7tY5WkkHghTbe7bbd62EDqAti4oK3AyiCnW46Dchb9gRLtN5",
  "key15": "49fXHTW8Mr4XjYsTVEryPgjQVLYc8ydY5PAskvJKKfGHg4V6BE9ZzRR324N9wJbCgPpwzLEo3BS2Y8ss4QtuKjc5",
  "key16": "L4FwFuoAtK9oAumjS6UcNcPZhDxNmvqsHvx7jp6ZocWq8htFajyY27enxeEHb42UvWvN5kV5LG58ts8DMdBospm",
  "key17": "49rwQd6DBXBC448GSXWyvVVZMhw5sKnmsHG8assfjPYWWLLQ3F2iAPTEBFc5QGLW4SPgdW34scHi6EZk3kF8SoiK",
  "key18": "31V9KTK8vwGfY8AAw7b834ru2oGBbkuTYQ9rxaZQ8UaW1QEkM6rC4RYMfPnXECcZjiDNjCFajYgz7d9kkwumpMr1",
  "key19": "4aVXdL5hFqsN9QjcQndPPLC4UtN6oc2MfRJ51zCVmALMCdyNZYHydXcoWZAatwENr1xjoArByLE9BSy1UL7ox6qu",
  "key20": "wHdah1cHnb9yWmoUDChUAoScuU9Lkto6LbZCeUiigS67uFo48Krm5nhjTc3LBppinBRV5QSd441vuAwUEGoT27B",
  "key21": "61FdtKNzzpewQL2ZwAo2eLcDMnqpegHpjXkewRhWprjbSuyMXRX3y4fGpDTMaDopaPKd59LHcwg1nfqNCPn258ot",
  "key22": "3gNChKuk6uxCkBA8g3vFVDCDFNX1MG7nJ4icLzwvSowcZgkE2bXtepqvMYkFjB61kPwPhgJXACgmS5FJABUu3w8j",
  "key23": "Brq4h2tTHemb85KsxokLzeg4hNek6hDaFCqKzE3BwoVv8km6CS4UF5tXRE1BU3tkuEzPRYVdzJhs52SpJc5FQzN",
  "key24": "54iQMSQjXbmZaTvBEBp885UDMPy85YPi9ABjzKheAJqw2aPnV8hCr8GrXHQqy4guyyvGfi4Gy59vr8ad9Fj5zo4s",
  "key25": "5zAz7nukBTXpxw93wckbBLd22fu75znQ6fyAWKz1a3ukPqjK1rhuDLnWWBdejAchosxoM6fnVwJvQZm76fReV6SB",
  "key26": "a4qHZjjs4hHEUdN7xAciLwgGGiRA28zBW8Cfzp1KnUiLCVoez2tbAUUgEN25wZM1cYNR1JWdFXN2MARUuysTPmi",
  "key27": "3PYotLEdMDCXbCcdLyByZtfeS7GinfN4fvEHQHHaRcM8m5YhFDb8vm4mqWMCFYuyyMQDBNbGTAY89pf1GptsBd7Q",
  "key28": "4N44YLED4u5Ao17FyRBazt8P9nD8w2BVAuigN26Xmae5iBo3XQRKgymu1STCmadfB8vaZFXdGpxpsaosyDx1soyb",
  "key29": "45MQaFz2JWzvzZ8byg4TSBhT1pSegr2SJbmHK3bnRd5hqd37YtKn5GBPSXp2Zyte4y8VbGU4fbNPnUT7XvKSdSPZ",
  "key30": "5yeQtDKEn6v9xf4BtwYszM3GGKm7j2NMCBXmx75NMjsgvThcXZ1dmuuQGZ7tH2WQfVDxHXbjuWrdVSKZLkUT8qu6",
  "key31": "4zy3Az6ozQfXEyU5jHFXpjDZ5G4FdR3ARS7g6oExNoTVvU4rMoJ5jK2z43S5mWtRe4Lvjxjt95Fn8DY5Gknovyeq",
  "key32": "4gjWnrhPvQwj3yCTrmyspbViZodtXE7z2iS912XF87KCUL18Ue74p8qVfdnAxTXvv9TMrD8iEucmxxZa5fUPPJRW",
  "key33": "2X1xzwNjPh8QdDWLJJJtb51qRZzSaQQ4Njfd7vLaxTZ9SeJA6RHT5ioYsE7rzxBmroc3nPE2U6ocsRTU3Y3T8zxY",
  "key34": "52qccgAcKnsmLPJUQBKa5Wdv7irxxy9UQKnbcMkMEjeTUDuiqTUvVLPqLBbj3najhaXr3vAqQzK2HteevFigAg9",
  "key35": "VPhJ9KqSaMjiBfHvNxnLTyuiRQHBBJssYhoNnJSmmVE5BztQVDZ4CyQStE3YWiAuNzX6tXDGX32Pwug8Bu1pB3D",
  "key36": "4auDAy8aUFVqHKPV4AsZ8KKcYWawGAaqjSy32UEpfveZdgqxzEvXcWLKbL5Bo5CsMceq5GKa9ykQhSKRLfhfowm1",
  "key37": "4LNcHDhXdEmtTXA1hgw5ziSD5uvQziGWNEfKvn8eZQFepdyQdi4tedaDBitGvcspAEWPU8mwSdLSd9a78M9ZbQRW",
  "key38": "naLMVoq2VyqZAWajEcaNwddHtxuxW9xgu5Gz1zusEXBZ4d9wribteJhQjCdKERxRtZgaoY1L64xmPykWp823VDv",
  "key39": "5zkb2aLrTCe9z9vWDQ2cipdmUzEBjQnsE2Z34dcun4p6kgVccbHNBDb9q5P3wtMAXMhAxMpgnBLESYYR3cgusq7h",
  "key40": "5zd8muLVcsK2CL1EW31yZGQVuTi9gEMu2k3VuURWehDCrYDvptnWKv1reZyL5Pg91bWeX1QGNVeZkAcx72goP3Zr",
  "key41": "3F5Sm2NUeX8ZEsbKcFRHMRdYq2QgmY843n4FCoUCtBg3TMdtWJ5CQyqxht69BFM8XEpWH3isBv6mZPcxbQBDXf8h",
  "key42": "bX2F5qU37tvZBLEEhEQfybSzsgcgcniW4E8ahUFaAVnK1UzKXmBthhJzVBwagQvEV5mVNedoeVQKD3jvvQDsimB",
  "key43": "3xsJA7gAma1KXUQ2GrKXaXhu3jM7uLucZuq8fhmFf5sSTkmBM5usSTicjWGNyxfXaZRwx6CjZLtdDQiXLJvWC8Ti",
  "key44": "3JC6VTGEckcYJcHo8hbQm3vmLdeFusFMtNTM15CVk9cftQBHFqKUdUurqf3rKQPKjgowFsJv1HzY6s873umz5sHw",
  "key45": "2Bm7F9yyW6VckEUTAhVJZBBxvwy2zQ2Bf9aMgYX2ywXSAZdc8b6zVnbKyDSBYayC7sBREwwAG4zHDzREHSJzva6Q",
  "key46": "3XPXwHG5BW4fxZbiqnw7tkH3287k41jdJD3CRA15Sk7WMVVd2QysynU8n9N5ubkQhFsJAxjS7ihppfCSBsiRBe5a"
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
