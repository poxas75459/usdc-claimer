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
    "5ocGPX6kF1KUCx1zW9shBhq6KuHpdwkKygmwgzr9ecKDt4YYDspnuAmkJoLj3thikbaL4LkuUbLX5iAitnKUUAbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2THwfdXRJEaw8SFdQ8yL6H8vYycqX8u2BQqS4dGSsH6S8AvFtLiCTZgHgkgj6SHKVZAkRySQSxQ9F52tYZdnkWJi",
  "key1": "3g9s45ZLNybSsjvrPTgBcbtSQpiTKeMssyyARtPtB9kYy2sodRCTMv4u6ofkprKoapq6Lp2P2JiYDVJLexjuDAa3",
  "key2": "3WAfGwhsneVhbiQr7XquLR771xAeEzgD2gDPzyat5cfMSEb41u6HLhHfeVDBJn991q3DistzFvG3az91dTabrCRj",
  "key3": "4hKHerqhHWrdtazjfPAzRjsdchtQiYcs3Ag9uwqz2Dwrs7c3XCH12WPU1JzrKBKCYJ8XdA7cVzauaibLmSLajg6x",
  "key4": "28rCighhC84p1cxipSVrYBgmgdHiKPVWAAfvGvYApHampkyaZqLhjgFPC72RxxRRG7RZM76wkmiJDdm1JygRBfBC",
  "key5": "5u64L7TrZVBv3416R3t6aTuYYuJ6cFeQeojFnC4Xev57fqiythQCJNkbgwRbPXsLrS63WDJLrVUviw2ptV43HnLZ",
  "key6": "ApWkqMing78vMzbeFKVmh2aBS6b4PCkoPiuSubBUtb3SMgFS4dEozcykDrRSJ1ZQwt2ZbSb6QHS8RwKNkWzy7Hp",
  "key7": "2U6e5cojArSa3wmZgZUAFEtUZvMk435siFZJQJEZMmqhXVU9kLjn4FNgvFiheT8mXLsHbhtZ5URooBB91NGnvoBL",
  "key8": "4do4SYuMKS4FwtS65EyWJAa5znGFoRkt34K113eBv2z7Aj7SS5CxQQwhpFDvWs9kVNaVsznbsd9m4utBCqRFDyZ4",
  "key9": "2GzM8M74W56epDXP8ZDUSZGZ5EGQWwsWM893gRM7ewL7BLF6Wc4WsqxPaL3R5FgvMnnHhG4h4KbjW21h5mRzND4P",
  "key10": "3jzG32M2CRMPy8Mzc8wgs8yJzbJLHtn6TEEFkL944vVcCMKppFHVyzEfFMyHzmp6MCRyY4y2F9qUnVxphMLH8rKE",
  "key11": "yqUXekpSMLakngytqeXbfasXUaEGj4AdzpE8mMrre23JzSNc4ejfbbshvTyqStZwXs51DfXpDtyBfE89kGaASqm",
  "key12": "3iUbaiowpCnGzGMF7CkxTLDuGU6Z685WoZLvVHKJFEoajZbymcZyxXH9gtgj5hZNdec74CqY93wxxXg5NMmUhCCj",
  "key13": "2CZ9AUuNmB1B8BjtnVK66JxJSkFDNaFDQfT8ShJwAwhC7StvzncMJPWhrC9NiFWDwJF4ksESj6dFxr8EeEdBZJgW",
  "key14": "4J1TsTudHTZuYRQEAseWnirEcuRvfvwuEgKcwFhL752L3KCrUqKQ91vrfvKyYXdCEDJvHb8m5JeuLfnix7LGivSv",
  "key15": "5r2pJUmQ5ojW2beNT8SbAGYpifTuf2Eqvww8ZmMdHwCu8NXMR5RMb3oQK1xoCf7EuTmWnijHAtehnZ8iwa6Tkirw",
  "key16": "2Z7SksF14HnuP2QgHNA8oFVGnficc9s1AWF6LRiigmhqSS94jCUvKFLKtjBrR9suzipBZNr2mLW82Lmvnanyy9iR",
  "key17": "2T8eQW6wpZWA9khws16fj4wbkTQeQzbHA7JGDG1NU7Y3fiLPczTHGfcJdi43KhZWPJ755Lv4Rait3xZhpkMcbDzF",
  "key18": "32f3oXjS2KjMUpJbhPkTG7gspgj2EBM3VTZcHAwe34244usCKfL6LM7hW3VxFxf6dDqKQDoengRq28aJi4eaHATi",
  "key19": "3fJU42nCmMnpL1wXLHdy6Qsg6JHH7kgr6aKENiQG8QCJwy7W4y33A9L8mMyjiJjXyX8pib9fJ2EUG8QFa85F6Ho",
  "key20": "6xdqiYMWFL7SKpiGiGV3TtF2evRkrBTjogZay9d6N9A8ojyBu3qQTVAkjaRaSTyPsdBPjpAa3V3rGW9KBjdtpL9",
  "key21": "54yrmAdt6eURU9ujLQdKbPp9NWJSvsE2xXAJe7FoR7GCHcxFNd63f5V4zLkyrhcqRCgdLUAWbKSfbrFnAAXA85q7",
  "key22": "NHn3yg9gRY4HCMBoYM11gYTMbkM4HNFNmvCM5xbPDzc7dcJMguACRdCaNQUmcGefLmz2216G3z28GFbVzDG2Vkz",
  "key23": "4wvrVBb5kkhHHtL6CHfrqKuPfxCvW1AgTje6PQ5AuGHFzLheLShEcMLy2XUyK53cGsc11UHs7BtADk7GDPUvRDnH",
  "key24": "2RZjtBHZKZG4d2ZmBbitfmdx1NDVoSHBTur7GErXxjxuXx7Efnnipk872bTrnbssh5sfuXQkjziP72ktZZGdkTbX",
  "key25": "2yytrY8deBUATu6q22zrMNufJ1gESu4fXdmZobCi9vXdsXQSWAL8LGM5H12MxU1CLxrTrSunKAV6Q2L1etJEzaUt",
  "key26": "3aCMiEeG8Ep9tPPeBUR8voasZdcnNiGXgrdXyw7Cby7KjyowV7tuFjevsiPoKdzXGD5jFp8WSPLM7wL3CVQB3NWW",
  "key27": "52bJVfqroYydbeAQ5ZNVEp23totEAZx4JUKpCn8vKMr52VkjCsUbiEDc6kQSF14wt9DHtXjAEXMwnhZYzw5iz4iG",
  "key28": "RQyETC35YoGbq6G931MqdPBBQuE9E9cwu21KLLZh89Acpm2nJhqnyreiHtpiMwxH6SSyWGCpGjTzc6GTmSPjazF",
  "key29": "zeNDFLfbRzL2Tt6D2gPejuZG8R82qmf9R4amBVw4TD67QEj4ZLWT89ypfhmsHfFEEheJPsAHsqx1tmx9vggyC15",
  "key30": "5CThuZseAiimuthfSrdrzpzUMSqHiBJQTJjHgLm5gjYL2eUEGzJUFozZFhtWehZMc8q7NWuDuoKXFBB7m9JDLxaE",
  "key31": "2meQX7jZbYg6357JkU69DxeJLLTKH7pgRT7QFwXxA6LL3LNHc4PWxchitvieuyyudaXWYwrNd8hUairaDH1jcpHu",
  "key32": "AG7iq35ev9sBfukPFiqYEefaFBnADus5PauvSuyEfoKkCqKDRU6iXktsP8EZG4mpSMgo3NHer1ABDmygtQgdFUe",
  "key33": "5eh3aQmRf6pbPtNpZePsYcN19CY8AdePdxy5j2iuNEEHiGE7Wg7CJPTsoaxVFN2KXjF5toHZxMoBw1SyKTuT3U4T",
  "key34": "3GZLsH1Ds6Ms6wZ4UWdY6jRctr4s6oS8LfcrrytvznxrfLFCUYsDBXD7iwS8wW8YxFeLVVKhZxYtJCKBZj8ehj4m",
  "key35": "31GuqvnxQu8vdM1ZbBj5fAWP9bRhxQEKk9KYCs75yGDV7o6KNNpWjnRvhX7tk5mMqcaAR38uFG7SvANnC1TFPHf1",
  "key36": "3erFunL1DNpQcX6nLecRt87Wry9sh2SKxJ3KzSgKx9FH3QZbFkYbC4tK1RJuuzeqrbeK8mY3wwMyZ438xkN41VCZ",
  "key37": "5i8jBZ8hq5hWsr9WmESJbLU8bpYTKnTbvhvetXn5JHdYTQEDuonKPPQiRC8Sc1tznZzuUMQstLfHfv9prC7psnSr",
  "key38": "5S5edGNvixqjyxXHpTWFhoqBQutMcehpqcJF9twa6uqf1bRvWCebiWfxuWxVok5JsYmeP4xLMYjvDDCDMftijdCq",
  "key39": "2wQv1hPbLXVYfUrMaWXtsiY4jtif5YKKJDMCJxR6rYJuQL94xhexxwywZ6PEEshdNjCW5dknHjH8tqNheMhxNtRY",
  "key40": "Pj4dGTC5BPETyWgWzzQ28cCzyUwv9yQkogHxKttokFyUeLj9bTzSFWESzb1GBbV4RvpenQf32NdfRPgu8jN3BRg",
  "key41": "5GXw5LjbTCL6xrSAVX9rSdm95sYpqDoY1JzAN7Y2PPxeUGWQuqGjpNB2apKPp6b2doCQyyrmHWgGvmyP7FjaE32H"
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
