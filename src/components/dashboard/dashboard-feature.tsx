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
    "3x8i2YzBmrm8HiyGiYAY4o82QM9eZYmRyUtsGLKQu8DCeyXtEmhWDjD1YeQ8G5Ti4PCSHUhT3LTFLqdRLdPeuSbV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nxdAsnm1QDn3dMi7kYLLikgiiqwKmEEEvjHBBX2z9VLJDDLFGiSdcN2BGALBCG4D6K6S7vV3UK22iS2pGzYPQYL",
  "key1": "4pq4tMWDeLveAhAywqbJjAFBGfQvZJjQEapiLcn9SZzJi6Pc7jpwypmYhQWMb8jo3B3HxzsHzu1HmaoEGve848EA",
  "key2": "2Ju5kjSn7VNuNHvhx1AWXg2wSN5tTLgAG4ME9PxZSDhmGQUmzwc7WyDqHpt449kx9QW38D4UyGTW7EsoNjUd36i8",
  "key3": "4dWzNvr2PC4znkB9LawFbVwe3Liwfxd34cZA3XHCGFMiujuycyNn4RyRKoSnSQkQamL2dHNV4SELYUG6VNmwGPFm",
  "key4": "Xw4Xd6GPBS6t9fj92eryUYT1ss5WwBdU9WvSHX2uezQTCvaSXLmrXHNGcG1GbnmekYLPVvZ6ZwGDWW3HMNkwYaW",
  "key5": "DkT3ZqJfTLFXm8PGZDveUAqvrgPHnXWwJ8rWiAhiXwy1NzppGMUbQdjprqrBMSPRmeivWfr6SC1NvUJaRT7CKNZ",
  "key6": "2aKxyH3CM65xQstCe9tYbX2Ls5oragK2TBJ3HCzmtPoeAgfvGGFJ8ZwuMctj2NV3pLwMV8yewVsJT6aR8a1oXY5r",
  "key7": "2QDEr9HcWz28V9RC4b6yG5Vxsee629HyqG8jee2sJfdf4sXdRh93iQCfuDuaeDvetASgsuBDwxWLM2Bj1Gzd9Dx5",
  "key8": "5rMuNoY5sxPDMQRKBWRnrKz8kDecifdW3a4PhCCwph9VWUwUYkG6jC2iK6MCaxoUvgbEvfM7k6XKKsP4wQt5zxbM",
  "key9": "5uXF8z45uLYZLV2YMjXJmBBGgFpNHvPKKTQ5WDGpZ4Z8rirE1H1TMTyUNEkkWcFuD4wDybydgjcZ2FwWQSvr7VDU",
  "key10": "r8wZHX4DBArq8bbNZSHpoY4rWAoYnW1N6qNcvfSJ9scmbDGo6Dwg7Xur6ezDJuhdURKr9DJBjya7mF2TTQCySeR",
  "key11": "2gWEpyCPpxvdM42Puv79XFCygfAVUtfPyyS3cYdVJBjDVGJ8qMp5GXzi99Z3gmW1pofAWGKhWcah4qRumvQvX8X7",
  "key12": "5W6u4TazBkJATKRMN7Hkqf8qzNq2UrFo7LRBGQEoYLBPUsTAxfGERSjxDs11cyszN8xKVzGiPpdUiL7hYv4Eh15D",
  "key13": "3ut7nQk3Kbr4nx8bcvbcNCRnjdafKuYfAHbc7JWRxf6ZJ1jWNdcGetUDYmKLRTSx46umZxMXcMAMJ2bqeMRoxeJP",
  "key14": "5zniRhDoKMhhaNvmBK45gQD9fJbhBVRk6Z7PGRq18yGrnduh1SG4TkgbWYfTjBZ3xW1BusiQ4v3JsF9UELdqncjt",
  "key15": "2x6X1RSwfHzxvKfe1k6yuj2mt2VnkRX24suHSTxqxsMXxGacwChvqmGiAUMHec2yM5GsSMrostfSKkMGcPndQJ6a",
  "key16": "3mpiVTYxhU6ALuatXToXCcTiqWbVKPGvHdfQ6XsqP32KbEanND9WZu66nXQo1x44CfcyYiUGJewKiicbTnAFNfvr",
  "key17": "RDBCBwKqkyjwc2CSBoVJyqoPgvxeP7amTL95hnjrAaXnZxp3hV4Pz1sTZQG5tHJEYX44ix57TPHAbzajW4n9ooH",
  "key18": "4W3h1maZmNVZa1ybhd6TVo19drV8uNQnLPFqRMZW2m5wsrLZwqbtZ7GfMD55Uczu33iwZyEhywLU8ESeAxT5tZA7",
  "key19": "2QoDu847B6VmBoWqiSNcELwEP2wm7Y1bo1qjA8KyHKjMBPCmiTYjeD42KuqD71br3Q79HkkqXeZ8MR17hujwQ9Zg",
  "key20": "3ZBG9ckALZMXFWpAujsGN5NiATXjsefgqKzyP4k85UJGYrd5MSazn8cxWwM665MttaqSWvbWFmqdzmKUkP9pB56N",
  "key21": "Y7QZSFfqhG2JAZ2o8RERf6s4tUv9AHrK42aW1EDMbtX7yZpmXeZK88pYWUhQd1adZkAaHUNJW9xWCDxyJ7A2AZn",
  "key22": "pebsDgdv4uCUSVaDTr9FGUrF2QYGAnR7xpDCca1wzUW4VV8Ye2Cwn3nE1xj7GutAgCngWh6B8CsHph773rs4Q25",
  "key23": "2gpEjdNdC6t95t9pdmqU6C1hp2FTLh2vqHbd8edhiZKsQ5RzAE7BagcheS9FaSDXJ5cKR9V4KJC3BWyeNhZP6Wnr",
  "key24": "5ka4FF462rQk8Xv9Wby5gnW2MbAdf4WTMkQvRk7iUAbDXe5x37gX3iY367HeTYduxRYU2GEXc3tBRsv4KusPnmEK",
  "key25": "Kgcfi2tGHSFdoWEXa4wU4BChkeHgcWtRGUYcXQtVrT1KVaNNZ2fxeVfbuuTjCAmQAMUUF5VaFn8hJwWuL3CJjAR",
  "key26": "3ngqMUKAUyZGVRchPpeRK3zhnBoh4T1UKkFpFJgeCkkPDywSJWz2UKorw83aTbjY1KHEESmhZDRS9wFTod5viT6b",
  "key27": "2TdtJ7hK2MZA7wTHp7qTyqUypdqHi4NA7fkXueHg7JTGboXkUheScF9GaJmoFbgftKp5gswLpBCFWtueaBsuU6yy",
  "key28": "3okPQuHB3mR2neJUjbEPSQBvzgswi2EbyNjTKvVkqAt9KuVJbXDwv1ZbSKvcZ7xDkSsNzGfGwi7RV3L2teY8Z2ty",
  "key29": "5QTf2ZoYPJ7itoSpFja4R3PgugChraMRoHkFmrEqwcAJPugg8aCJBmHgzgEDFW38M1Bd4L8NYaJmgoBx5kzQ8vHU",
  "key30": "581Xgx1iiduURHtWotKe9F811v4MUNgzpzNNDrVppufdHvtGtPZSzb4xpvxTwmoT9BNeB23N7f4kVLwBwqpudAUt",
  "key31": "4neVHJs1VMLWMYjp1qrEGuowX25qjsTo5K8LyfR4erej4KGeLgaKJr34EW6UCP3fGdCVqrFXeqcaN3AXxPTmCpxc",
  "key32": "T5vCk2Ln8EQdj29oMGXssU67psgX92N11ih8LddbZsQ8ec6QtWdhf4aNLyZ2GBoeAmQMT2ZzC4eUS7j3Se16JXb",
  "key33": "2kxqFBdz3qL9XT6NM7mV76A9DSWjiZDcJuph3h5hSV2rhiNxc1c6EtehNcPRJjEqpHykadmhcvVo4t62ZHKK5krV",
  "key34": "5NsiJgivWWrLWtg1rXBXFtEdp1s6B8Lhd21LiBRgQyShnSEyFM2eJMcaEgkYeByn9MvkkjmZVo4buhSAveEsbhd6",
  "key35": "57L9ECNwRgFjGtiYwfFspxTNWngwNhjEdmu6z4VHB6YobDeLAN619xsvDAAcp6C4HhVENhyn6ysv9qyuQbrQQr4F",
  "key36": "5TGCusPAkWfR4JskwyaAvGDHzvaQMrkvtPxr4NQnTkrTxb9hDtdWex9372VnSS1Gvituh9wXYGMNFAAbQtobYiC2",
  "key37": "gZVArdaMCLBbSw67yZtwV9DCCWJ3AKaKvtXdWB6SwnQs8f5e8WgbTwUkrGnNT9NfZpfhye6CL8verbhHkFpFsQj",
  "key38": "5BuQqp5yxtJmVSzdZpeoe5u2cmRcSkEWFW8KikUuhyrYcQKy337LkbqeCcGDnZQ3jDBfJ2uAnEpmprAYrtuNjgZN",
  "key39": "2H9iXUgVP57fjMC62Sb82KPSzkHssNVzJA5aPpi2Py5tgEhNhvLxRcfEmep489vByuVwdMcSxXbjHfhX8SpFaL4U",
  "key40": "5dvaniMz9X176MDqzYjXyuX73fLZk2zojMKkUVF9JE5kV7aQPnkcvWEYYwWjW4UDPFihWeDiD6qNJyR46o25ZBpQ",
  "key41": "Dh8PGL8v8KCMfPYwiooKdHS87d9CPYtGem68CJVDyZQp5KAoUioafND6A3sxF1kdpTRQFAY6a32Ni98LuaBBhvX",
  "key42": "42Zc148upFdB4oLhX1nYxzjyRA7RypYKctDkoko2LZaKXLdeg4ZN9ChiRMSoiuCMU12KrnCtpFAdyCdpNm9cfGZN"
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
