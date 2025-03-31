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
    "4Qopoq49GTEdMv5tEPTd7btLPgf2MpoHxtRSTMAUQ6nDGnL3VQeNK1zMVKaykPBCh9JfisNaDKP3kdbJySC1qZzJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cpi4iVk9vuK7BMkuXP7J1iS4tnKUDNakeZpyekYEbxxNM1KRZCnsDgS5TkYvUqFyRtnBJUC4Ay5EuQw1jmzQgtf",
  "key1": "268ejn7HPYVWCc4LxvSJiMpGuhjUVXNSmxBKkbMZLFEL5FaThhg1sBuN4FdhQ7E6hoNCemgRMvtiN6er6SaXoG5H",
  "key2": "2Y4L4S1GoBdYUUkxRekT7XZKN2NUxoonmxvoEKHuwEdX2VvKD5aY3L49V5PpVGqZkeUVhSDJaxwcq22BRZ6aqvPa",
  "key3": "3SQuMzjntsCq4qnuU27rv2iR55qQLyPbSvEyyDMYB1hSTuFZdLqKtxCkMZiGo7psH12t6gnxsXQQRd8qsuuM5Agz",
  "key4": "24h1VK61nu8Dv4jU4UDMSQNmCpmbvcGXLTZwjt7ECazsXe16bawChGUPN8F2e1XHK8zVuCRjxkfvmvXHwroTVTHw",
  "key5": "4C7xR4ksbxBuQtFkcE2TCACEUuPKq2atgpoTXnnVUDMN6WUC3ci4upSD5oKRPuyuAf4bizJu2fik7fkaZ95iDLyB",
  "key6": "3VLwAVSaQtAFiDtvWzSsMpJ9BoYHMvucEXoH2PUVA7srKsrbDvteyWLep6sQgotzCV8jpUHs8WHS1SRDdwLqd34V",
  "key7": "2Zjaoc8fvh2L5n7HgSNcXkUBhhLehfZcE9KXHdVGrurj7ZPdfe1RMpQ3Fn8QsmM33dmMjAwJVqqknQag4dGAnxyV",
  "key8": "5z5YjcL6CsTs4HRXgxCJuu7DVmDAqCPNgG1A8KC3ZdSyxwyG9NLMkk9Y88buC8RDojL7o4wF2Bo8M6cTNyDEf4XR",
  "key9": "5gM5bDx3p4AKECYXCe8XWBdJS6TvzQyEn9gmaLDGwFq7N3aeZrK6NoJ32A3zfLTSbRJiPttkB8sLGpKvYV8BdFm",
  "key10": "rs8ezcD95RpRzxZNThMPmeFDSv13cuvfDQw6BtTNcVkpTV14AxRrecsdJcA4mU7PRxQHvPUDCssVVL3KUgPnFhs",
  "key11": "4gM1zPfjNvxaGfp7iSnPPyKHQVrRo2kn1qD4ju2UdiNrnqJufdnU9KNYbbFsd8YgdJ3uGP37vNWJeifxxGgaJA2h",
  "key12": "3BJywY97DpqUKQBRrMHNtwdFFuc1YfBBxf73GRvoudKDr9M6GWTKnHZH6C7mT8ZhnWitJt9FTfjJQZ6PF6UnupSD",
  "key13": "3Ukwu3n43YcwiAWeo2ch99K2X344J3j1J7npzegDVkPj3EjZBzjrSayN8BCpMnLXjLBitaRKagEsmXmoBD8qEv1y",
  "key14": "tS9rrYzwEocLcaGAWJSZn8bizoqCAbiz9tRLi3xi3N94yNXQ9DaxJcbqLXCg9eWSvgeALXnX9DDus9wKqeQAfv1",
  "key15": "3Kvu5QVvec4YazEc8UPMm6VTFf7XwG46JawGcWRJYvmoWXuuGweSS8F8u1wJGZBKbvqjjbDPbNW7d1YMPse3FGyi",
  "key16": "3KMwtK3FZWyaTWqUUiZYinxk2J4JN1FQ5b9x3qdFAxWVg9oZfZsnsdFTkfPtivKNGQJTLikcudxdvNcDknsSSo97",
  "key17": "59xKbwu2ZHVPszgJ9rWH6aMm5oGvUtR35BRKQox39RkWxwh9i7fjqk45UsMSSbBH4R6BuffkF2P4YnaVhbt8Mau4",
  "key18": "3DAMXVisys5tqZZQbjxD19TmPxytNNxJJpCUeyb9ENp2LqjWitbU7dfnHzM2Shx9RmvFGmxFiRx2ftfgjLSawHxM",
  "key19": "51wGYHrYVxbhQNQ5mUrFYja2RkUcxoDFpwDZnCt3zzfettQBGNbXLhK7NwuBtXnszoJdcdyMG9gpihFFi5ni9yWt",
  "key20": "62cBdAW6NTLaDMmUjYekeLGrsVLipgy1ogghpL4qwj2FVSCm7XG9WyxxegL4UY2gJxqumTe9xTUh23tH1sZiNVyg",
  "key21": "B1inVtJGpJNJXp1y9z5AHhFbaQbMQQkD7mAVz5gPAHctX62GgtXdAiQ3eoCyEyJCsL9kgwzLaMUL9JjA5dZVLgU",
  "key22": "3Cu9pWVJkFUFkKWKsmJxb1EcgmGV3TUeQ6RoVvjjksR6NjA37czikQqAipuE8UVQnuG8hoQaN4P9NHrgKHLHod45",
  "key23": "uyPJqrwJHnDNoSto3UKMEFfB2kHkjLqUiiFdgVrCn1WNXLBuvovkg5cEtPEspFrwSSFwr7zuw6fZ5bRhMthN9ra",
  "key24": "5RXUbfN1cfku7BxK5fHZcv6ArTchKDoupNrk21xKTHHBL1QwXR5c9qABF9QRLiTkJ25sik8FY8iyGcavq3rSKgq3",
  "key25": "45PkkEUCLoHk49xvbDsM5Q81eA1CqeJMxPS6NrdgN7rh5tCXJNyNrCP2c5ugmavKDyZbS9LzeyTqVBBaTp3uB3Ki",
  "key26": "4VxkpZ6eqbFJmcnVAwEup82wpfNxeq3eMP9kpmsXZF9QHfWUZLEJuhU5Hf7ehbvESR1jWgqwTZ1A6pCNfwPQ1Gzx",
  "key27": "4F7EpMSBJNsUUPhCugwsUGt2XLBHfExa8xCaoRbyGNHnF8heT5TYkU2mrzHK1ouwiZspfbkEVoJmZkJ5WXgFFWyM",
  "key28": "XJVkeiLtTqtUdnWwE44Mi7iHEUzyP8QqkjLuZE33rKtSWqB5LUyF7aqstEq9QmSUMx83UqeJbCaU8n1T9Ziyc2Y",
  "key29": "2vSXnNxEQ2XZxiXsuFUXSxUmaDBmy58qvgqEiS2oc7HDvgenJcW7GuhZBwvf3pLXQQdgqY54vn8jYmMQJT2iFAzZ",
  "key30": "3oUSS7EpzWxTvNB17heFi9eM4hAsufAQXnVsKUbPkp9G342f3BJxJDu498XWLuvwNuQ1jTzBXzZto7bcVvSHPuB8",
  "key31": "B2FFeUf2df5uaEcvs1SoXnMSiP3nQQNxJBuJpuxE1vJoyv16RVZHx2iijW9sgKFj9PnuMJ2DAi59yNW81nPpQuB",
  "key32": "52D6my5ueyRxua34E4ETxG8DbQcx1nA3YenN8PUU2K8khQHMnBc99i7avPCUTi5e6UqM9625P8swzNq663bD5U4g",
  "key33": "5VnqTkcdkUtBhbgDVFjtHF6cmFWJyNAPV29hvH4RDKZQzyiSB3HrQTznQQcVGBV4CJQYSAQcww3m6nmGaPUxdCtB",
  "key34": "3Ui2GUA4WH3Rh7izLGj27nGP64tb68gGoYg2sTgavvyNcSVxhhR1ModeGgaTgV84CQvQPUqNMLtRnzivMzCngub1",
  "key35": "4JpFGQnYbqNucf1zPuBxrvJ287LE7jQWZw1CE3ratJipZYfbyHxQgkf8eou2LPkoRuFSSzYnM47wSnUZPG35tG65",
  "key36": "fzVGbKgVKWsaCsrANaPhFDiwq6XBURW4ufL7hJ21LHswid4Pt5T43MuttZSGmmXwUbwCiskvKB4UU11JcH8wYbK",
  "key37": "3kfvFrgy7GDXgBscLSfa4jYEsPc8efxVBZuHJMUeYqCTzTYydNQsJRHDXkJZbEPtyHyhbtgMVB9MLi1BZDDiakD6"
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
