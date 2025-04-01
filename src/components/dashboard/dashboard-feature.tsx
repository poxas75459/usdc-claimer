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
    "WpKjsyc3cdAxqDiiCvJP4qU1jA9txBpcCUj6GcaUojAtkFL2gW3osmvp25cXG9fdz5yiQHrwd8FZ3UBCap8ainZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QMFsyjeefPTw4Dkjz6tepAjAVcwb51DGsJ4k9ctBaFwnTBGMNrtpUGvMxeMNdD69rUQ5pVEfj4t9ViTuK7qaXAb",
  "key1": "3YkYyQ9RCLpqBo2SuDh93qHnugYEHgPtBUYKVib74gfT3eyQwHStvGusyfNdBvyab6YL9KVYKYUS5XeZ6s2JyADr",
  "key2": "3XXPsRffsX5oqQw4KWY1eUw3fgbw3b4tX2ofp9bduEZvLQ6BiK5WrcEnJHgAuhSugkdyTBqEd4iVR3FZYqfbruzJ",
  "key3": "3pFrWb4xWg4f9uNHgbmkkYTfXcuoYgVhd4hhDsro2piFPNTPG7pA8FRQ6Jh4iqLypsVVXMQCA6jLJt3EuQP6RSYw",
  "key4": "59nRWFkn82spD3mh9Nya8CCVCZ4qppGnSYxvhgb8QwdqRHCeaCEb1TaTsmB1ks5Ld21jj9PL16VvXdr5ZMe1KJAC",
  "key5": "5mErNdH4xQSxszkAus4WtghqYKRy6GBJ5qPvEgy8dmrFa6NEpDje2pNcoG7hoi4Yyaj8vx8u1n8c42zTuBjcmADe",
  "key6": "6V9A85G8EXXmKTiTnVA2Qhio1zed2XH45yE1YuaJcmxCCECVbnKorpNPGR5hb3Se9PFQz1hDoyTwRaE6yh9JKE1",
  "key7": "3qqA9uRav972rDSR31C1QgPhSeFMQBii293qYHdP14tNUR2DzTFtcLF9rmnoEx9TgmueBDn7awFL4c8dK5oSmvME",
  "key8": "3dD22DHtr8au94M9xDH6D2sk7uPcCnGKKmWTSY3YDVgRaDBGLohZCfgagDXzifXvE6JyVwDpC583YyPVi9vDe9ZB",
  "key9": "3PGKSghNz2RR99YqCZp4fnZMLPGVhd92k6LMm4b27g1zDEC9uGzjVXtyEVNVfKT9xVQ7Z9rwVPgiz78LrEuLQsuC",
  "key10": "5VUDnX7RTxf4iqZ9TFT94zwY54jMoQPp7GurV2chwHWabn5x8fEhxXirrkFtTuJt7qEGm8rZZAnNfTKV886ZStuD",
  "key11": "2boN2fQvERKtkX6FNJ6BBkcHcxq5EQFxfHKFfJTihess3EhDtQQP7iVTTcZjB8eDjMYuB5xz5JpWnQTnXHFtmaKC",
  "key12": "5oFdKeuiAzaifymLffKasKYbswF6YQtRfnEX4cXQMHbUESxSoYgdq3LjyFQ763fU3pEEabYXJSRbrN6h41Dxpt3j",
  "key13": "4vJ4xzSWNk5zd4XkRcmU4XSbmNb7sJVpRQdsM99CiWHL9yf7quixaUbCXYASXUvvs3SuNRF4N9XyJUotDakEjjkK",
  "key14": "4rfRFJBaTfLkNDfuEkkzcUFEys4BHPKgt6SUYi2r45nmNXadHK5byZqZZLpk3p8P49azNi5qxAXbKNSx2miH86QK",
  "key15": "4wFUjAQ8a6DZWeGRyqvyhczhiWSn53q7Dk9sNF12Rm8JRZ1gtj2N3Dka4VagNznWxNfPRsYRTAK9dSf5smwSREi4",
  "key16": "34uK297ADjCCX5cxFbG4ubkPDsu3pNKLW2BgvseowJt7JNzAu1z9NLMEqjuGhD8gZGToj368YURK1eiUV51fRaUp",
  "key17": "AETKbNFLkochrmA5Mtv3BQw24NgecSh9o2PJ2tMnkmjYkVtSqFQT5Kqfwe1bg2ES3eFarXFxFQk5sHPzxEM5ig6",
  "key18": "3cwDwkZoSdaxvNw29wXvVeW1wbGzi8S6ofnVSwCRgJ7kAFZue4WATyjtmg5hwJ5zcLo7Kuu8QNo7jxUbWBvuC7AG",
  "key19": "233c4uVfL6N68a1eTyY8AHSX4WHB82Zp1dN8joQc9V37GCsgVbf8Yg4kGxGbKsBNpNyp2zcDbvbVn7ZZhwwFt5gK",
  "key20": "3UsxVivXqtYZivpcTNeZ9T2MewYTkj5sD311DcDPSwP2xYofcNqawRvtKhS9PQ5ymdwUWMHa3ufSo4MwkJQpeH6D",
  "key21": "27QowgoqMcxJcF3hLd9hApj6HNpzJFvHejx7hecWcpLpgoKayktJCq4MVYGRTAVPz2NYiB17kuWewkh2PNCwChid",
  "key22": "3CFrXRicdd2FFCXFCRA19rhNwxgVa76doJstPyhC5eyByA1yRLLDUKUdHoMK37mQZVjZ37nSQkebNY7FWRYnXugd",
  "key23": "3VZer2RreSt2daq2G5M8sYvuHEMqoBGigmCMsu15Y4AMq2jQ8QbkcF127afWdG6pkmNBrTdphXd4zwdabGmnES2s",
  "key24": "2DQ6vBXwEZPBn1sePmVwzaRLK63ZYMrTYKnaAxqbMEuqV2GtR6Pcv1T59PmFnJYXuFUwgHBwXGCAXn7VQnW9ap3Y",
  "key25": "PW7c112PFSHHE7L8Af73XwgaG3B14Nedt8YfKzfUUEbaztnLLF9ahvmxcmbFRHto8qNqW3MPdXio4rymqRw7uHM",
  "key26": "2kYNaqXXf2XWeiwCma7kMA7vKZkWXLCHudkhiXa1vmLoR3ioMSZVrDnFJ4x41txgkoNPVQu1E6YY8eT5v7j8WQYN",
  "key27": "5qqaw6ru2F9i3ZkGs9TMYdKQdTSn8qnqQd5KaNdDQ9KAH4Wzqi2LP9EKrLzYGujTDyvF411xAQD5GWWqtL6WhNgo",
  "key28": "396vLjsQfQWa4M86nZWz9Wt6hmEaPjksUZcTnbssDu3Gv66ZDLneg7wEuoyjPZ5Hd8jtwvFFo3AeSNWhfmXebLtx",
  "key29": "4maJGemtydfPyKReciE2crwtWEHYYyBqCv399L277uitjzrjZCJYgXkdMNQAWh9zT9L2A2WTMU2meNHmnZmJXSF9",
  "key30": "3tajr73PGLMo7Qh4SzezrpnURTUtZP9fJ51VbKzdNY5jpUTzcgcexW7cee78Qif5XQjueiQ2pSLwU7X1pH1Skk49",
  "key31": "N2Q3yPLF9tYdWKtCrxGwfNnKR1uKLGtvyrCiZGnrjbAj8w5ERGHALeEK864o247auRa7GeGAA22aywwqfebtPyK",
  "key32": "2gVtzrfCZu5mpGo4VHmgZNgGgw1Q6Fb5LUr9qjttTCNfrsVRhqRDTwZ3GS3cKtAqayHufQK2teqDUYAqgfVyx1vs",
  "key33": "36pXqZH3KFVH6iqG1NUmeWTX55WwcbLYgwjzTVZy1EA5uJ3qMhMqD7cwxw88g5FWQCaLx5LkHqPoj1FgKCmv2Ump",
  "key34": "63CFD63LeZ2s57CCmLifyvhYhuHgd2yioesxoDrX8jZkBnLrSg8g3J49Jok62vm52vmSuivAktEkUL4H5bUC8Wjk",
  "key35": "2RAdH2DuZ2HncLibJutHigg12gqmThpDM85yVTrpeRgnPFAVrvaMQW9Pp5EkeJHUUe58vXWC5pPCdkwiYAsGFLat",
  "key36": "5m99bEQkZtbusZXAecxMEpsFoTkqenCNsjyPCPrMJVMLtSFVrGU8zMjRG7aXQDDDdtFovnFooFa5gP7ftVxhL2AR",
  "key37": "4Rz8io8C6wi27PbfEkqfe1oaFVmcLGdikvpoENoVbg87aFAW1ZvxZXpjMzvGRA8x1kaZ9rdWKrpP79QdmNVg9uM2",
  "key38": "569nLL4WnAjgLisu5NyYKGW76kS6YdV99HsfvXJABux3LQpaFZe9zyFn8qdECB2uePSgRfGPGQMbNVUqw2djmHMX",
  "key39": "5ExZo9GsVWrCuCYoJKwSU9WNgiSK6kcUrEKpvHo7CPEawrzmt2uEdTZiYEhooWDQion9FE7hrYe5iTqsPxLoonSw"
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
