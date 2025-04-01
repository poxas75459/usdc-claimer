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
    "wCwPLxKsCvDNEm3Ha8HUm98P8zRmZgn8C6KVDf6QqnNgmaGwYP1EpVqjoB5Tgv3bTeD2Ks86jmoxFiCzPB3o5gK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FYc7icczPqueXFyvpCyEBkHaSqAwhiLhAwenJpd7zh1SeKzTP9sDMtcg7dnkZffXXQCZhF2nN3mosYYMtC7xEPJ",
  "key1": "sPwXL9ej7LsSwgRYfZuHBwXfaTQsGqb5Fdz2fqUpNRchReNhcWZxDET5CRkRryTcELNQf3zsBKgjwNfvB5y9cBW",
  "key2": "4vKzmzdg4FjWv7XfxjvPK3uEaN7uZRbLy2ne1UaciSzQhkxoLqug2PP314aLuoXADaoyQ3TToLqQVhbRSeqaeSsz",
  "key3": "4Jc1eVXTmQnZBPvkXKThjhBt2gva7d6N9XkVc9eSR3uZpGttKTYvvkcedfSTP8QJbJ4bKNQc53idj9EG2S4SKfHk",
  "key4": "e69VXCixrKkU3EJNSQFGcQ88vrgB3Li7TACXffuVfq9kvoDyPxx9bVKpTDXPrgq2ZZFG4tUXoQ7owJuYPoPz8YP",
  "key5": "5kYw1duQkhzYvciW79y63VWDEj95nvbtKFf2anTZL7V9vHJerME1ivx78DQNQmxJPgW87q3HgjpAvXR2AwZE4EpK",
  "key6": "5GAUKDWPKv1XpaREoquTPw7mCz6NnZ1TbryMRQMG3QCQsLuyZugduXXFnC6He7sDo942SMiCr8176pcgJPQ1AXD3",
  "key7": "3LSWyyzqpemuNmiamdJz7p1cvbZ4PNTAHmoFRN9x355jTcKDVKB25v5ai2XEinxMKLUcqs6ZXJbsiZQgwa2yQB4r",
  "key8": "4ehThKsB48qvEcD38x86q6R19ZhfcVpRSPNRxDqiJwHLJYGrCDvSp17JsuC1ZDyasnFiyLCVoec3DyErXEWTqcbD",
  "key9": "FUam4NcgYGRuciKvBXhgQFefbCat1TFvTdSVBAEFbQZDU9Q7FMy8ChmMugtrUo1g4a6tfSu27HgRn27C54sghTy",
  "key10": "5cqJ5aPAUcBCwfsGuKnm3c7zg7WEnjgTHTNgcLw7hexr38xJibdqZtRuQBYYWYgtcto7AtCcSfrZXEeh4TGfoT6r",
  "key11": "gfPmZgqnidESgTii8kWNF2m33aZpHiKfS8W9Aq2kVffDvsxfznjbsZcsN7mw7uj6ETdwqJbQMKvHXirQTwKQKdm",
  "key12": "HRatLdKx9gVJVADr8t8eTYZ5JXui7QocVKfLRPbqpYYs3g55nRYohRAVu87dunZK7BLjiFBeT6bjmUo4CZYfQHV",
  "key13": "5fqxVL5F6Z2GSFFBBYq92XycSRkocEs8s1YeSLEs1QUp5G5tKmuL8Nq7PtxT8k9CepEFAa7EaTSxrF7C1V6yMqrT",
  "key14": "22RBZPv4idpGdYsDJPk6HrMRundAh8manb1c2Ydqd9Z2oJqJv6EEPvesApD7KWg2HG2FdR9b6WtYBzdpvwvdk1rd",
  "key15": "3azVESotMYJcCDnYSoUDkPtvPtYyehVaB86ZLz5GM4QEQht9T9JbFuy2HAwaBARoGUTQjGdwLYmX7saNBZoRCy9f",
  "key16": "52KDaGgnNbDUrpbVBieMnTnkWYQa83xX1uiYuCXVbBSVhNZ6hWZufLUUnPUepxL2J97tqBpJrkkCeiXfkupnsy8z",
  "key17": "2qUvHaRcPn1nniysV97P7RQUuVLJcvoaEXpKfu6LwRd5S5z2Sy4UBZQip7e75YFYAWAeG2ouGyfLg8dTCpxdS5iZ",
  "key18": "CmeTBh1WS9RVW6gjFMnXDHndzBhaPWwhDMm5GdutqhzZ1tjw24o3CUi5rnXPrySMgaV9VPAZhq7W1Kf8acsR5Jf",
  "key19": "bkVwPsDumNGUjQAvCG1kEECKxtVk8qWVu8a3q6G1a6jVfdvdiiX71cyixH6mMNyvaqmsnTnWPGRqWRNHiCuoQX2",
  "key20": "2MBoNKAUerrrEjx1SiHakxJzZAh1VoW8m4SPj4rykE2PdEfNkfaQHSJ1evBnWSbMowbfuGLXTMjMEhHkVvSdsSKK",
  "key21": "4X45CH8M2JuUq33egyqQcz7iRewvwSmd24N1LdVy1Ttwz2VqAiiy6wVytbrEyaYUUfeQLAQ9mXY4zK11KQavHxg2",
  "key22": "55yD7WMwZCaowr1r1ni6XeLmm3UVgn2Ei3rRRc3HK4v9Aa2L8d95MSVv9AhDkkEChcSzeXVD7uzM47yK5FmvhRCd",
  "key23": "4onhDV2UGu9gbo3MSiNxudeSeryCwkbQDHAQmyQu4WfVhmGwZCwaNTsM564qGxfGFGZYhZTCTCUz6hqCYQyuYKvE",
  "key24": "2T5KuY6M9EKgBrt4aCuh31KTzXVVJfYw69wY1Uwbi7MNmxEeiUZgDwKf4GoyjWNHhFaQssBBeUaNuKM7jLixPEpC",
  "key25": "51S31SixpwpLpryNEpMhGQtVAcEPMP9whragvAcwDKxNmba499Y8B3dC7wmKp4kRcjVtTaDPCntYRDcdvi7ncfyt",
  "key26": "6j91snp3GBxsYbXkdeEpWNi9FYLdtQ3r69qA7UrDebEaqENDiFBE3gJAhboDm3sU6zRKHm3BAnHKL6X7i7Y2DCt",
  "key27": "726rGrnpchK4vinDuBTwgk3n7XeToqQsbGKPSD3x6jYgrBNUeNhx8GJdjAr99YoAawqtGfXM72VizfBP568Egjn",
  "key28": "4e8YSNmA9UgA3EaLZ2cpG8Tp3qkJTZz426Dvg5gJAuyo3EJjuJCDghUE2shAGy7nZvAb1HoUqPpXWcJzG7aN3wkg",
  "key29": "RRPjJaHmyGDmnvVPhv6Ed4wzxwBLuVmFQCZ41R64dG1cYqdT4xt7bx3HvVaxNBhpeHCfCgZXxdXHEWZypFve2hu",
  "key30": "3TsmcvvXwsR4widpafjTweKXBHVeFoUc6E4zsKu4wrihDhj3gWAALmFDZbm6mwixtjSfWno7835BeAjim2EGYXEG",
  "key31": "2Vi2CC3BaTLqQFgEn7PD3oxn5qGVAbGfCaUi7NTE4ayN9PgxaE8aQRoKAUDCvqeNDC3GEsUbAYfDC7rsw6FLckwZ",
  "key32": "5bXB25avFBoQC84mkFAM1bjAFCTEzLToEemcdrTjKnsGT3tjuahmNqWcnhwR2kHVLRTFJ4mN1nHi36dqqFRCwBvW",
  "key33": "5oWKaT6LhybfYFeuiFwHtaC5v77BPddw5qpMNwQDoVH5MSe9dNp6EhUG67MQy7Pn5sH7uGA1s8XpWYRy9KKmnDud",
  "key34": "3Tf8tXnXdUBvqj59BB3U1TH4A7BeefdJJN4WTaFk3UTMQx9jEsVJznfJvAHVqGtCiWhtRm4kjqBeEGKNeuNfWs8j",
  "key35": "5p7vpri7Ne8waUMrpzjYXfwF4PgVWsLtFmZE45bDs6Fh7ABVdSiaUxwmNerdUvFq2aNTZkH8JrcXRtih5ztVVKz9",
  "key36": "5EYmjnNa5VRRe3mtcm87VacmB8Qy8AZJYELiXe7XR2P6nLqA5iGS2PxmjvUzp3EcU6zhx9AvbxzpfSKSMkcBNqNx"
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
