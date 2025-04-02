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
    "4w6Uo78PdaykXKvH2aNa7Nvocg5HBEhjHAx2KuvhQqAhDBJd4Ra9Umc2kXiUrdYW37coXBTgMM76tq3dMwcLiHFY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C6NWiTDZjcygKEt4h9QDdu6c4xFosd4chzzxjAWtLsdRtXyTYYabiedRu2CBkeBuC2MeY3nntLPsnnsMPWs7AxW",
  "key1": "3KyLQndUFNW2TVU6VwTnvuc9eh6AZXBiWvFAFbtaxQTcSgfsotFcRA7UGWGzZ1ZJHtSWcyyrpgjpAyMvVbJ8ymak",
  "key2": "4kJeBYHFwy3fL7M5gN9vbuePw5BHvXhTzjhQELcemuW8z3jeqqC7ENZWi4hwXng9DK3StxLNuW6NFpHbYVw1iJxk",
  "key3": "2C2jN1NZTBeP2Bt8wuZKeVfk9fg1waQMBFaAcKuwZgmL7kMx9bCF8WWH3ujYxt49Pgkg7ygeXA2NNgSYVFQXEB1K",
  "key4": "3Kpxb6nBTA1hAaYy2iW1oS2BHCSjhsDhv9Z9HrbwpHjnWzwoCxt2LK14kobSFEeijMq9EzAC9c1Ny4bB2S7HYnnj",
  "key5": "4zSV54SttHLHQDbuAyqWeDUxKVVVndh9DYjwyoURFErAu1xgWrxvuLz8idnAVv6WuZyWXBSEVK2PZ4VzuGXsr8Lj",
  "key6": "2mzwFwLeKXWuyTybw647mQXs1ormfLydjPMu3FBKc17NPxUALZCjy5cFr2KT16tfJMHgZ2p3f3WBMYzhRLdAeYLD",
  "key7": "56wWtmv7QWHU9K3KFXKkW5yX3LM5NgboDJEAcRw5ke7fhSXs5N29gyh37ACmwDhP89BcKjHz5ur8MB4ghXj8556Y",
  "key8": "2JnhHhARAUvRWKnWas9mSaYpidSPbCvz2PeX5mgtDxgdf7NxBMi18QwzCvhHgQW45R3xxNqvq6a1q7J1UttgjxiP",
  "key9": "4VcFFshtCTdQRPv2HPUNznC2iYWeY8jGQsCJJBhUmcYAK6NaTUvESLvxuDxdV8XyAEY7VnBU4Rg2vp6e88fGQNtX",
  "key10": "2tDWeysejtnXnHTr8tvz3GUBLm3MJLpJdMYhDk1bxkciE47NYNrkvEhQGYHS2xy77uUcKDrYBaUXnXFfFtFQyu11",
  "key11": "eREtrJJuxRsTgUSpSQnYRDSkMYseyLSEMVFHHYiVX9qgpNzULgypngCh5GRvqC9bdWYAAnQr32tE7AekRKHpioG",
  "key12": "2Md4oztzPE6rAK7BBhW2YKBWJmibuf4UucB4r4Ux7ZAVPUvUpMKwKjhJFi32c9qtHSPuLDK8GQ9BAHAJbYnegAfz",
  "key13": "4TUQUAQDfsFV2N1kCF8pTdEeB1RhaGqxkeJ3WxtAMGX4DADk89r33mL5h1p78vEEU453yvytK7b3kvrWWjrarmNr",
  "key14": "3k3knzs88tR6CpzHNh7cEUyQGhixJhofy6osRAMB52QfjCMC4S1YXm7eTkxzwQ5jS38MJnaeiXWHphKN566eB4vx",
  "key15": "WSbGSQMsQJLiTWncfaXcFjRgjoFmRkhrx1Q1sJnT7PwZMM4zRrMK4a6htr2sYZ4W3KUTc48Px3A7eF4yvPGwZu4",
  "key16": "3zAmE5ZdwmpNnzAHSSXoDjMEpxpH6RTaNV3q6LmkrWKnACzG5Swjp7qu6AYsbkvwYTxyK6CajXJfNav3cmZVUBzZ",
  "key17": "dAviSFuCDQmgNvufUZLxoH2cKgUyauav5pfvvqyK4KQohtPHbUqWL4LfMo3TzeYbSmzpc3f4knEKcgtBvcyQ7BM",
  "key18": "44K3xPTjyx4ijDd1xdxfjqa8MK73u3jkxYwPPcgUCzef7xYWkiMUZa6aHGVxL1qaJcWsvoYNaJJFjeF2AZBmHoJ6",
  "key19": "3ExBB9uv6SQf8CLKeR2KCrcKfDPXHRfVWH5WA7kABShNhDhABtAsBTPSX9v2b9rppnjhQbSA57TSt8MiHtDunZTT",
  "key20": "39qymGJYD31cp24kvEBf3NLtkZperaFujFwdu4okG2Qu5bNaJPVUM9LAYdhmcDf7jjk3FyZqfCMeR4UkFyLU62eC",
  "key21": "4um51DmCuRx4mpGvbvMjfttKVjqpeba8VUxcDgRhbjzT6RTpxD7G1hLpJtMR7rcikZwu3byHgyxHrgzGcdCnkoBD",
  "key22": "3jcPajSdDoyqyj4jDnFw4CLgRMwMhmVAsjgC2QksPDk3yf5n5Cr1BRL8vjjea9f9niSE7CGre26SD7MfN11K68Ht",
  "key23": "29QGG1oi7DAbYyu9S6jqur3szyn1Eod5v3KXX3zxcpcnoMDQmxhXNG3BTirYMbAt6LzR9xJwtsxTMZ17BP3vJ9La",
  "key24": "NE5Ed4z8Jj654bcJxRmJqG1r4VqcrLCg6K4pYS7dg4Tg8znfMdcJKezPe6YnsuW5MB2T5a37kGaY451GTovRW2C",
  "key25": "5WrQkyxkz32k513DAFFMtsnSoQ8K4ZAXB95hQjmTa2iPHrkn3LuyHwVvUL3poEVwj3djUNVo4xckBJ8DGpGUgcYG",
  "key26": "3ppB7WePh4NoJzoG3ujGVBnF7yTwCDxJRsjhNzdGwMLQYwTyn1GEVkctDJWNv1s5JpKwKTNhrAK2aeMvZBP9AGDX",
  "key27": "2WtgnWT2Jkghiw2kCnE7771U1eWTzHzTUWRWNp1bMQbyknYK9tWjvgPt7qAqt54JvUkJKZ876TLm1y4EBFWPuk8F",
  "key28": "3XzEWa1hL9unAHwGcWZbHPBdYfgeQRzBAvdwn9z3xhc7CBiXHafRqLzwwzwezDR7xqcEaMPXnzN1PD88mtzPTZzC",
  "key29": "2RWcf7UnHhLfGQUPHg7Cgb1EggugoSKaAYao45fnRFEqmqL46iYmBHhQEC3Y3Ewqw46FojEdiCTqBXRECKi7hcFM",
  "key30": "2uYRB83TL1HTf7AWHEm4XSD2HwoaAU3GFdFdsSdXi5yHqybNmDPiQmZgAPGDxiLqdLNVW2MbPaLsM752VFQbf4u8",
  "key31": "2yCUgyBbJbDfjFcnu96Zdpd4tzUPLG8zjHWUGoyqBpCjQ2izDApsSjXNo6N2yHY571A7V1CUNDYzzddYNwV6jPTU",
  "key32": "4hdWF5YibJ254RiU8qDwE1xBDyVcEyhPo2he5yvBUiHeeGydQdxyVr3ZXeUVXUiKgHmFikoTmCygxCgZStyUDGGf",
  "key33": "4rcVKNQxNpQwVWF4TPxGHg8bKZ7pGTkVDMp2ef2JwPJ1Qwr32QLfTXAfkMzts8GqmfgErfVjFVcJJR2qMLXEzRGb",
  "key34": "3M59o5WxXpSjedjXqrMofrbtB2SwrsU1afoXiyCvDUobkzN3VFr93r4CXnXD2DCrL6GCJP9ndX43VGjmTg2D3DzW",
  "key35": "43eZwawwt4YFYz6UhpMkJh5HgUPAUsvLPz5jGqWScjwu9Dz9PLo2dMf4stemdzWSVdrwuCncShpBMnmm8TvX5hf",
  "key36": "3oMnoZnL2gbVVPjbGsB95nyr9QdnQMN41vyY2s1KnmNxp7HkGj57FUFw3TxBdKWBN3oepTXygQtoGuredAqSBXPS",
  "key37": "5LoGr1TLc2PpkGAJRsU3Qn6DZFexTSmafNGykszC6JJGDAgtYaSahHYm6JPxmxaZFUASZHG9g97Dy1PvMpD1KYUP",
  "key38": "46N5aqNmhjrm5Dxomt7kuJTSSjmUgGEqUuKjG5nW5hhWGdMe8kSQBupMBBfupyHwiqQpuG1XWhtc1z1o7hg6RryR",
  "key39": "3cR8KvbnTgS3pHjtz238BPqccZwFibDctuCDndwpt5fs3xgaxQSDvtoTdtExd1yQKgEwE5K8To9TQKcwPQVbymqW",
  "key40": "3bKSYJd2YnCriiNMtcMDtpWoj8zfYxzkNrwtzWW53nswH34um3GDnT5AwUSZkuKqS2ZGG3cy87QUd1Qyk6cfxbCW",
  "key41": "4gmY5dKdTSk57Wm2diAfqaLzGSrD51ZJ8uJkFzRtXQkMDdZa4LXYbXqpmYdvBqDeg3KF96jPJmW7AwRTfhtC7BWU",
  "key42": "UN4W2GsWmWq3xgw3hRzQFEpyDce44mwKH3v4DbZuPuhQoPMZp6dVVYK8388taCJS1aDV493FFD5CiaZBV8w3r2D",
  "key43": "7QbBewYXQgipyyPVrfvYJvUtaFj7zXhSr9E3copPKKp9c5yC3P9MpnnGk1tXWJRojjHG2fqoY2cbaZU1buaYJaV",
  "key44": "3Yq1KVq3Ggxh8FyVewMVygEZGPr8AixxALi1G4yHqrmE2GWq1mUdaA6P17UvpUFyHuG6BLP116HRUH7Q2Sxr1Wja",
  "key45": "37peEdCxjt2aDQktgtFt2gL7fZTwJoXR7VTybKio3u5mMoMmGKwmjynVv2Db8zKhLK8QJsN5qYEoqfUh8GDHBYbB",
  "key46": "4AnxENWMKoUcSRo7MyLShQFj5HmBPtv51X8mzYXeszz78FpHXBHH5qa3dcJmhmHhEcoPeu6bZsQscRxSoMR14asC",
  "key47": "YttLztkWu8aSzgwAwxKkX8pMEFLxuSoWdkUX7Lwud7YS7SHzz3W87vzgHJ4vBwJgE62sf7Nps2sQT3Ah5rqWidQ"
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
