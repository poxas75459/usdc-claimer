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
    "2sW5jShZ4xBMYN59YKN4gjx69xDXf1SZWQZz5ekL6Wj4eSeC41wgaGSVua4BCrBFgLobPUfiNDZMc8Gzgjmu4eRW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K2oMUfW2d9pchth2EY1SXbX2QL9CHQ89em7npT9a3tQnjtPkHZQ2a31AnDjbW2U5hKnUwz4FGLKABSTy4BUHFnR",
  "key1": "msjnQQFi7rFfeqeFopdcR7VwCPUvWBGd3AS8Vyxsd8rZSf8SZ42SDWAUuXF7FkQwbG5kuC78ukWqCHf3V7RKbrn",
  "key2": "4zgUuR2cY27y1kaYR9QNLqnme8USN9EvLPeP2keN87j8bhgjUW8B9rnW1t8gjKDk71kdseP1ZDZb8U5jexmsfuv4",
  "key3": "3fLY5iWnCnEJHb85PEazGumgDoKHoiv7PTZFUWhk5eQpgGdiBHgCwYNY1j3NvQPE8su3vZXS4Cy1ziEYBMaLFKhH",
  "key4": "2ZRY6H4aaw93HQ9ZKMZyVKvwJguNVQK1cZddhbqzL8rfWMdwsdjy28UNLep2zGoGxZADisqMGWF1bAwTtezj66N",
  "key5": "5sTSwQ3fKC5iqkn6N1J5yvig4Qi6kec9fppxoxrxnXrsBsskBxJKAkU2Y3p9QCUKvxxnDne8D9jySYzzgXqbLu66",
  "key6": "5Tbr8ccvs3qDxy8qKsZUdQLipGEdGqtFrjF5SMKvRDzzg69Zc85Qz7xtEKfnfKsYw8XSd56zhAnDtnNdms7eyNhz",
  "key7": "46J7UpondTvkin2ubAxEfRfbyQj1yLf4ksym2AZgKg2KgrasGkxTMruywCJwjEjVt5NeK8Toi7nQS3Cv5W2Qafvh",
  "key8": "2hv5oQAbN5YtqYkefZGXLZM8osXtzVH3dpxFUgmvh2Uc6mtQzpTfXpeVCcjAx25LnG5EUkKuLQ5E6Xe7rjoaUZkW",
  "key9": "2eaDVwfGRwkccQfL58rPJLY6JLZ48remWptyN3tEGjxcS2R8YTfmojzcixoQToPc599XuG7n2YoT3Z9PWhZhACEg",
  "key10": "3SxWBds1frQEk7L6tBEn4FYUEqg5WZzVYRMDPwLeQsZYmgA6hjnseN6qMxrCH7qRdsqSoyiEpd9gToH13ev68GHh",
  "key11": "49WKVW546VeN5PEE2a9cvY1joYhvHc1djPrazLsxPkkdcgEAVdeWxfNbbW6s5mdyqmZzfVoHZhtc4TCfzLqqAAt2",
  "key12": "2sQ5aPaZxoBA4y7LVh4Dbp989ATurdK7BqZ45jmjGmwJD9n9fppQCqa6QH29ofchFjTPaFjmteRyMmckmBf2KSBJ",
  "key13": "JyWvcssbsHsivvxSLDjZaWR6HKapu57dmYRou8nSGd3LDhZGg1koGHtRQs2F6sxfmUQusZTMsBfdpVL3WJnFzdL",
  "key14": "41soyutavY9djmZGK8BRuTBSaHVSgLBgFuhb35thAsANuYLj39N72YdSiaec9CMNMG4TMmnfqkBVqgcUNNrs2JPh",
  "key15": "2N5aqXp7UicaZQKWKhGpX3yA4HC2rCrkDW5NYWuZ7HJhZN3LvE8JcKjueA3K37TLsjWMooYsJY5r1acanfQ78jrr",
  "key16": "5sqDWsL62VVaoA14EHG2Vuu62iUBdqfTFk6mzJYqxwLGouvmr4Q1QpAkTjq7agiJJYKA9C6su3d8DMk2wseFdRWg",
  "key17": "5cnA2Y1RPEfz7Q1kGZqURGcctLQAeQMEo2J9kH9SvLnj4tBQu7toNWNkgRQuDkhKWtamW5hQA1PfTT5yaQgnn1L2",
  "key18": "2MGegH4VffTPLvedfBYgtsPrSKeFinM9JRvGvLm1YUkxXyspYvWMm6CyfPDgGDPyZ6GdT38waXGEjtXm2xeYAsBN",
  "key19": "34wBKYGm5Ez8TKNpjZSA4MyoPHdtkQFYoq67BE5EQX6goakzzHQJfLxBcfJ6ZS5MTP5zE7pe7Pe9rmR6nrhNkaAF",
  "key20": "3AgMswVwqiABaHGJ3iSQHHLScuVuCJBnud11FHW6Hyp1tU1Wd2ip5tNjAjk5YKZjddbAhunph4DLtKK5K4escueW",
  "key21": "3otN6vGqgCze95xZvqpuiCQgqnNSzzQKgNs2qTNxx21LpcmUxLoHMvrfz3wZWWanD1ej397FmNFV1BuU7eHPjsgR",
  "key22": "bupBjdCbPGagbr9K6rY6pvnjvU1hy16xuZezXTNX6RvS1DEWN8AikemnNGzr5GDHL9AxTidJugbZysTNCMQZAdY",
  "key23": "rAfrP4nqXqBybRHkRuU2tQZ4tNtJUwVRhFdR4TXCktBWFxZSjEYWWpNUs7CLCHadyXJAew8twmdzGUxT2Lv4Qew",
  "key24": "3NSQy5axR414jhwiAptJR6JWKT821y2NgEJKz37ETKoewQvcP6Cut3jSiz3Q15EpKjEuSxXCQxLf1Aibf5EgGBSZ",
  "key25": "5KdNp5YWAeHvwFMLTxCVHc8uTmX4cvc8Qgz59EzJX18ehMNVCKsTHWCp2xbxyGgAQRp74dQNz7tB4opRvo4C7roN",
  "key26": "1QfkH3quRsG5Q7J1ifKEcuMxJMfpgycscGdKVbUWHKED17bMiKZ8s6MvHPXcxEMSe7noLDNwiLkjt8KrrbYrhTy",
  "key27": "2GBnRMtAZrogvUufyHb28NVGhisto2oJEp7YjRBMfR6K2ivHMxVf5WksekwfiuKhDYB9EjK4UtjjgJkNmwLgFMZM",
  "key28": "3Ktb7iiQNnQ4hKydDcSUGhZKvb4mKWDMxJv1X51zb2SehwuxRWpHbtLFjcif96mXKJ64MqCDufMgm1wkrRi7itMH",
  "key29": "5oPH2YgC2Agqh9CeLfNCj7RRLqeQvCuXbx6dbJVSgLAuLWX7Ge9vRsUtzPBALtAh1KyRMsYBrXr4jCs6YzruqD5z",
  "key30": "5aVV2CfEevTxmpyuA15hzYqBDfQ5NDEAi5X5QTjrd3arKUfago9VifLBy1J5QT97qFa9DWwUHTEdps4UU5xdDLy4",
  "key31": "3KcSFyG2bMxbjY4Tj26jpm4GRQpK5bSYhwvqzVXHvFQeXk54mVn8M4RMNghFd4XNEc9yX3XqLDt2A5RNBRNYd94N",
  "key32": "57v2WPAQW4rCjcB9DDAjoMjfhKJgRf7mtnE4NFaMfKo4F9X6P69oGFEtxFANLiUmAwdtbvN8ToBxicWq4XDRu8mF",
  "key33": "5YiuKkhbCNL7YmnSPVUUwJWRQ8QyqeQYcKSAiERnkuuQZTonnYMBqvXLs4Scku81W43xK8o2dDrQT2YRTEMFctYS",
  "key34": "3Kbjzgq9FmNvCNkPW44rTf2YDBfjxNEAxCrZRzJKdkV7tsN35Eg3Yynw1ncmCqFqERKnV4jumG9ktcfovnDiRHxC",
  "key35": "wXh2cV84GkRQszZMJhbPVzNn1EydMWKquoDY7pLu9NcMWLgbwMjZCHyKAQ2nLQDQbrBHD5sHHHXtXrB8HwwAXba",
  "key36": "4HPipGbjLCrbiaabzfFoZYCedbMxhJ61FxKFuvvjfWteynqsNNNc2sZSCoXUN4UZ71Qwkhs2pXnLmTtRskrNwfLX",
  "key37": "4xe47m38JCPTvtt2Crygzg73G8rbmWGEMP7C8vSbvFckRnoBT5eEYBcu8eWbm4y9Ww6znMNqCrdyuVXSsDHEiECb",
  "key38": "4ochUDem2XijEGKHLT1Geh7W5LvnnBFCrZvNSS41Gzju2i8mTG48YbuexiSJ7Fzc2z76NnJNoVL6ouKRLb3WSwJi",
  "key39": "4J9Fg2fHzhw9WaedeeAuLJoZe1C2hs9nbX6t97x751xtNqyQtksnTeApszo91AJRQAsN7nAgTwm8oKomn6pymyue",
  "key40": "2pe2v3kLdV2BQykY4vfbzkqeUmU3tXNQeDuLZPjrFvpq3Bqi6H1U5Agw7hnMap7eHpEWUc3aQqdMNnhBgwdC5a3M",
  "key41": "3QeR81uavh2puH1xtvSBoL5vjce8Nv1FqSE2QtBm6nLyXYoqAHL2gJrYqv26AMBV2hBxSu6iu3tEhar9Wg93gAz4"
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
