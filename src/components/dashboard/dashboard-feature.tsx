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
    "5UErpqBrDd2TQnrwBFqS1TYnyYBi6L5obVPhNdpmYSVUCw2BFjQWyUfuB4UL5xCahZ5Km6mGu2vguCQo2SD717vW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tubS3Dk3pHjFEdpPitK9mGFfk3oGmd3MzDyjm4jGm38EWmqikkuJa9Gquf1q1nscxAjpGvmR5Hb5cqb3HqexFDu",
  "key1": "5Bw7zDXRGm3KBMNTkEfc1VM2YdpGZ8qPaQkmJ13N9HN13sHLnwJ3JfiqX5GedvERgx9Zh3mt57rMkbJ2aC9JWjCC",
  "key2": "2fswG9QxbE8xACoWafJg9rTKqCYC2oDHb5QS1ZBheXL6t6bRDJ1jfjA2BKYhjHcZ6PEFREHZvnTqpDvqnw9hXMr3",
  "key3": "5zJY8ECVwLDaMUh5uhbPX7AfSSu4FMjHiTqeVsKrRfMPU6gFw82tAHhn4nsbd5XaAmbuzcz2dzCrggi1tTApHuNc",
  "key4": "3ocXTiGbwqR3LL4Pg3Vg1sxHsY4gfUgPzYCG6NvcrzKvjxC5d3MAtReTpRHntkU3FkgUKCm3Cpn74Bz5j9xazGc8",
  "key5": "LXyzs4SM7LFAmZ3jRxVP1P9y66PH5dTRAi6RXvDYANU8rBRZWgojyCUshYGZW8ePmi5h3xa2mLA5RshdUBakaHt",
  "key6": "3oPPPjSSQiDzVT9RTGUzZ3fxfF5EWqoSbuheC5TGnfgHVmyiUbRD8Drv2fghzGpSp81wtSaowTamA1sp6vsPKQcT",
  "key7": "5rwuRumcPHiVX41EBK23RQZwUfgh4tFaGkDD7pSDkp3cv9dXVmN1PCZdydKNguxrgsWZzUywKKWm8NEApRVc51kh",
  "key8": "2jgMGZAoPKawdw8RWeZw79xYngmvtdtW5frYmNj1jLLGNs5ZezsNZrcZ1y6QSqLAd4ki6bSUMXTZ7uwUwa2zX1j5",
  "key9": "KHgYXzBLHZ4ikk7tkXYXhVksfuHH3vmtZoX5tuFegEQXsNatSMwQwSSph4jzSXVvLGS9kHqx3xA9bYRuigWTVeT",
  "key10": "BS4sfJkCNw8QJcyssjvAjoWwxPeNjsUYiNZMoRnUVxsQYbdRxSLwDeBWzQ2BNq1w1VMdgLBPiwAshMGep4vub4H",
  "key11": "5vFCfQ3bnhJTF4tzD1KAbfiPTA9F362wwAaBLiK1Mch6dtaQ6fLWo145YxxMkttuT6qeSsadCtaRf3o2xPAjyF7A",
  "key12": "2f76z1zNBpyx9rd4qtoq79WytfnAGDQ8JanN7465zxuwvuBuZXv9J2NvrNHPfgEq9XDBFnnpHSgpwbjVjhhZ2MJb",
  "key13": "3FF3akzSCLPUV5THPj8DbnjAXTkGeSuiZF13cJ7VurMgbDcqCqjeNNS4dd5mfPAUWp3aVtcFf8cdD3qzFMEVXLQ2",
  "key14": "4UKr2GdE4dZn65gD9xsyX7hqHp6GS47PvrT3xKUTewu8BmF7Xyb7cmPNY47ogadu31WPrbt5exkpXwT4xWucXMtw",
  "key15": "3TLVHSzLvHy89heYur9hX6jdAeeq4W3HnN2BUs3rviFekC4g1QU9hDdn4vfmniYkkvhDvnmg2GbALDR3f3gk8i2K",
  "key16": "88YSqxctmdEDhgFHRuegyAff3khf9bb2QZdzNXVwV6kudFBTAoPLWjbAhMTPSPDCHNVUUj2nd7Q5isaeASiys7Y",
  "key17": "3tdD7kRfY5RkVF4BMCcZ4Wb9Gyk28mzeHgqexu93y2K3igZ5UJyCWmE2EdGouSGsbDkV17ixajtu1dHcvwpCtCKB",
  "key18": "2UoFBzYDuuAEz4mfHcSMtLftaieDZYjjnRagNR2PqaPtcMUQF4MWH1VRmMUhf5zYvHSCdP5yyvr7B6gKFgDG4zdN",
  "key19": "4GNL5svMJ6fXkk8Nx9zvn8KrDVNmQsMRsK3jqLMSAbANA9e8VoNHaZ3v6HKLpP46aod6v5TRcPfberxupS8TKeG6",
  "key20": "2W69VzK1xwtbQ3haqskADJzU9jCh7qP3wbrbvHR6vFqJhSsw76kxu9JLRKpyKLyaTK3eZi6GpEjfYaoE957Vj3Re",
  "key21": "3JbAqwtM9yWT5fMhYZv2EWYtZvokVPWkRzaiDdmG5Dmx53A3rX5LFAkip3ap4H1RdAF1K8XTvTMFwwLkrkWCELxo",
  "key22": "4qVUa7S3e2JjCCfrnTpQ3tqiGBiZ1aT4E4j2ZCSzJRxhthoC48banMfikh379Lkg4Zw9ws44TXiH6hWkijW1GiX3",
  "key23": "548ogWmnskhJc1gUti5geD6KpLo8CHga3NyKGkJZDFkUJSsNVQRu8gk1XyepHp3e8UtmyuQeceo611i9ao35S6VW",
  "key24": "B9bbwGvSY9rBvAXHAZnENnnhd5n93wjpNdJi5LpChWAiSLqrPKHVtXnVwthsA2CmvZsASE8A8Njv24wWiRYcNmW",
  "key25": "4LKtz1UnPLGsbtGXF1HPmTaJ8wyi2BF4ae6uTokWMKr3mvy9UPp3APujrjVy58D5Q3FikynQ2haDM6SwEhayPBhK",
  "key26": "3kVVjdBMzjEYHs8KV4zhLV54pCUeyMTXJrxMEqhH3uRtqaLJfToeb86fqNLuZCXnJ778uiUPQmm3vf4nPhYQm2e7",
  "key27": "3vNAaeHCCakeqXmvXU12PpMKPK4iJqmW39wAJ3DShXLiKWGUqVA7xnzwXhRxtFzBVVDjamFzi7zvWrhgtdZQzhq2",
  "key28": "5NfWFwcDAmWK5gcgZQMUiCeYuenquRHhWGJcm7B2PkAFawsJeeZ5DYDzQTFRDQMPejA4kXA7m7hMrHiRnkfeA1qg",
  "key29": "4XPQkgi9voKHayLYnKtKGcLMVJksBr34geYbbHAYXHjSg3xX5BqRfYJ9gbt3JwmMBAsfEDuMEmtkvZnDvET7cZoS",
  "key30": "fZ7sMyXZu45sPRNvoCGjCM5UAPJb4BttXxRTeYGDoRLzJE59KpJzLDAhdfoFssffKniyJUkbhU85FtPVtA1CnkX",
  "key31": "54XrL2eher4rE7vTtSEfX8fGHKaUYCUoHwPrgyNdE8zV9EV7qigoDjSSztcivGkEze4RrabSKAjsg3yYV8H7aW4J"
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
