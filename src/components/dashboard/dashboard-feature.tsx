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
    "365Mca2ALdPrgLQDaopHXv2vLUE5Csyr2rSt91ukvWwSxcamWugCEhro75ousFFwhP5dBrAg4kQVYqcKopJZq4SU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ah9TxQtngHEW873TXkpqsKLMcdR2oAYaD7s7KEbrujEmoaV2J65mCnzHqzAYt3PgBSoQiW7nXTmf5Wr57naNCJk",
  "key1": "5XfbnjZWcoN5dj9VRJV9zorrEJWLonNX715qxGZCyCAt9WoU7Tp3QPhSZS2M8ev2zHhXZ2bJdsbrSZFMwJfuY5Xt",
  "key2": "Mmb3HDKmVUAe37LhdCWkxCT3hHjojVErjaBxha2XEM9BzFKVGoYnXcWwWxcvFFTdSJXDdRB522e9tGpDvCmYzQ9",
  "key3": "2MeJaX3zsR8aVWucXbVK5W1Xu4NfazGMB6gUEhtrbfAmjdTd1dn3hZXScVwABEkxfEfAHPZ16Wq74iwefb7TJ1w",
  "key4": "5gPx3a6yq7RtK3sMKjH9AyFQMTtvTu1AfsxFqiHaWmwJnpcusvrfuoBvdtTjcwWvLWwmN9feQXxGbQ5VrG1NkxQp",
  "key5": "SpahUk8dzEiBJKRCejxCPQFfQv55FQQ4MERRr597VFGnNeJDKfZXnWk81gb5LrWdjMi8nNGTa5hWGMn5ocZ3y9S",
  "key6": "3c9etW87byjBpW74rZtoLjYnCDTf4zs1sGYoHaBn3jmU6btHphruyTp3711fSif2zTUJm4V1hNs8Pgkpz2nUqf3L",
  "key7": "3D6N3d8Cx3yjR9Ji5FCh23tZnFjnfrWbynmg6JC3xaeLrPmFr2Kb6u85SpnkLEkHFyxkm72rPYG3sCyFsXxVaHEc",
  "key8": "4eFBhHrwURg1iy1MYbGme7SbSfrDF2vj9LybPAH7YnmvLNxRj81ANQhkcU5eU94y4YzUNpjpYe3b6q2x7Wq5x9pD",
  "key9": "3AwYbWwFQGJYoN7f8NEHGkJ3gwSGmNXYvwkzSfPbyr5BEFHfmFYa57bQ7fSiQSDBFfoVst1hZB392pChr8PM4SGL",
  "key10": "wGwEqwf7yVHqrBmyTT4MeASLXxsZQUD4PRL6xNrQS897dqx1gggnHvNZ7LF4cDzwWCSJgq7jm7M7FNHb4YAbaQC",
  "key11": "3q4czTQ5seu1fGeovCNJHf87bGDhYUZkskgPMkWyfAj9XfgocRvpZ5Y3fxJKdcvAYEZr5KAYEuEXr9NN7iqxaaqg",
  "key12": "5CB6UVx61cKKAi673RcewuA27dr2uKZJouLK9GF8thXfnxQSvsYS1JoHxZeBrSF61ekVf2t9XNMU4hg9KY347yW8",
  "key13": "5oo4Y9E9EKs6KmFx9h4yzL844LynwC5sK5MyZ4Spx1L6NpY548j1Dcmo4WTKoAubgM9PTwpxKamnQuABrxWSW9b3",
  "key14": "2aJmhivp6fMENYL4DLLVXoNFB2tCEN4ZgBUrP1tcaHMQ3QyqTDK7U471YXohkoWPsP725X4EycaQ76cxCQMqTBvZ",
  "key15": "9c8NgXqqeSuRysS7tvGSba1CgmU24d8c5k5QiYyqDMJYHSB47mPHhd9XzsFpRdqAkw7QyFNtJXUGtVhn3Ay96KC",
  "key16": "UoxY9hsBdKN491ayvMdcMr3GAoEvQJ3TDGAdsH4Vr1Leu6qY5irLBL88xq3eZczgpg7R9rPVqoG2Sy1KASS3LL4",
  "key17": "29Tkp8KwVfERwj5uJDdK4aasEMLqGmKhRv1p3L1psRHn2WruVS3TnqkcG87Q8kGNHNa56q3Kvb8r2SUHKuGHZ3fU",
  "key18": "LkL9HNRoctKKTsXCWEeq9APzwBvb3LWV91KM6T1a2fQgLbjxfGwLcrybWJyndRy2wSzwcZUQ23Bzc9oxd2mu1a2",
  "key19": "5Y1tKtB9J2GEVge9fJzpTJQcentkcogD3pEKg8HUSoN97LLRydFEtwjnWbi9dpQAWo1XWUS4FGfAq2CQXKMKKcm8",
  "key20": "3uL44ZXjtNYasKxsoL3xQ9jty1kz1DhmxfpedjyKSYmFSGnrUJwTAcatjaijvW1qPzNkTsaxy9gS8LBJ4DCnfRUu",
  "key21": "5ugSakdyQFiL9YKSPBoqJ7nL5pja7Ttj5xXJLmdAdQECrM1HRqJDzZLBR7p1qsUTLQfF5WYg2d682A84wvhcmMxM",
  "key22": "3Q8g2Hecd6fi7ZqweaX5Wj1PB4Q6WrAeMHDZh3AiAfrpwNS8trFzFHimhFAX74VTTc28HrUSPXX6g5n9j9cmYz5F",
  "key23": "MgqiHEXg22o8Ja9Dzq6nZpSB4UwVAYgmcw4VLo3VKw23w4DEH2TzAG8ifbLvHEQZEyJuk3AWHHivZJ3ub9HYFtu",
  "key24": "53GzjjviUGpfHL8AFP8Cn1P3TpXBtGpVm8wuuyxxGb81KiX2fog9RSLHQqYrQLp7CbaWRWUXxtLyb17aQYz9UXKA",
  "key25": "d9iMpSEu5m7pRwDCEEbrsQjKxtXC8RM2bfUVHLhSJbePSqmWx828DNRzPhYNTtNieseD14SLRxTYc35QQk9QCV9",
  "key26": "5vustZBxLoqkssDgmBP4bhHPTTHkhto3PPu8SDPGc1HhXD2jUK7YXWcoKEtmGoxreaosrTRREtpZ25rkFMwEP8p9",
  "key27": "3CyoMVg4TFfBquabR8UjPyHA4CR3BaqvfPwykQ8LqrtRMwCYat2RJB3Ka7G6SeDe9mekvTagDNE1emCLUdPGzEwr",
  "key28": "2vW6qWaVaXkYvL5tcmYEMqwKaa7xizV1CRtPyyGtBQ2j4bLRyA5L1Snj1dQbhUWPV21CMFVKgptxZhag3Agrvzn2",
  "key29": "VZwcebq8qBbFFfjhekP6jCn9PeqmyL6LLgkFHAJ3mjdU5VJX3sAY6VWXbfHUgtsadHMPt5bMBDtb7CyQaGPryy4",
  "key30": "UzynNBg9nDneKrWawyZr92H7RyLGGktRvmteXSzMqRzdoX9jjoMnUnvb8nLGZqfvGPitUiXTjZmM4aJpg4u9Sb9",
  "key31": "4uJf1QhuvhbAPGZSfshrZTynXZd4zdkYXmHrsMBUijE4RqZiLCqGCdq2roE8sZWBAvGm7q31yiSHY9RTzRJKigZa",
  "key32": "2mtcCkuD2TwYXm8EsnJeXUQ1pMndgD1oFWs5UByVJQskMq2oQDJ5PRiArV4pLUgWVAZkVhA2jAk6KgNWMs8JnWxR",
  "key33": "5euWby1uKRWWGjjG7srhyRyoBKHAth2e6eibRM4KB2n3q4M7SPSkJ3er5jJcYMd3oavtefh5idfwUQJud8QoxQuk",
  "key34": "NEyrs6zMStnC6nWSpH36kGvobWJPNKUHTL4a8oiPakWn8n1bCqBVKGCRaWNBvqT5LZv62hS3j43F4LPvQ62dpLQ",
  "key35": "58iQhcY8qrqaDvG9KnCVNFenK5kQATCi9ckpvXG3bTimdWyoy6K7exFPXiyVShHUyTjmdmi3iLUmtKKtC5P1pK3s",
  "key36": "2pv679z6WSdY5f6aSxJQ6M1bDnq1D323o4UGm4hLk3E8nh3B4ropzNXaoBaHo8fgj3cELWzU7oekkjaYX3TrXKRo",
  "key37": "5kAPMCoh7yEX3uBsTkqbYuiWrMVeqyGBhahqW2qWopL4xvxbmenCRPDNouYa3AW2bUSZPd8Zgr9ZCwNuNna8XxCT",
  "key38": "3rAhhLxB6viowdMmR5kcQeMwVunCzPybxkotQriFM5gU4eZb1EHNA5PynyNWnVhgsd6LuKizVAmAV1cRjYmsprRq",
  "key39": "5TTXAeNxkMdyeYnQTyjUtKia6je3LUWj3VfPrMdsjALTMkDYrBVaMNBpeYCkD27ZjFyEFuu4KhJjkid4eKso4UrV",
  "key40": "5zyVaNmiQncim6qM9n55sxNLKCRZoXXXehhmLkmoZ9tiAgtFVthKLGfTAbJWEmtSyXBZammiqRy2FfBdnt6x913f",
  "key41": "4R8g3hrKm22FSvS1kbuHsMh5EQnV1sQdzKLeFKzWy6mAhMUVPcWaAsKpA7TV8TAMKcVmQ4ChnBznzTyzgj4DU4gu"
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
