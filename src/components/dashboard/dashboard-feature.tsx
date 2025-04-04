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
    "58GqoJFSUWd2q6gNdxrfy4dCg9BCu2GRWSgmF4RFH5GMXmkZtrRZ4ex2fjdmf75pvMkqatbinqP3NhpkFPEihtSf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T9WetJUPZDpatXVXdv8bSVecMCQnvoUSkE6wHqCcAqpRRCeYtj61U5QiaLnm6QCqMXdGVmn7LXdWXK2qUdccHY6",
  "key1": "22uCJpskVQC4wgqGicmSgyWAZb46EcKc2cVatY9Kwq2pRHcABPbv1F7YMrC3n6ykk6rKoqf2oAGApGYueiHHfsXF",
  "key2": "JMLLCxai4CD2VXmm5MKk4AvUKFn71Z7bwcyu8zwW6ufErmYqt9ubWmSmNBrV9gBmGfKJjwLfCo8n96LfKxdTJyV",
  "key3": "2FfrTkBUfZLCvpQ24P1cKUzdkgvWZsBTWiqhfKduVxceBgVRRGQNam5r5juB6omjadUo7qL97LfUVKiUDe4q3Wdn",
  "key4": "3yeXMCitKD96QSvNQa49uMJDwjXydE2ae5e3F9DaUwPtoHrAEvds2CF5jAHwqn11PmkE14k5VyR37E5kJHjrTtpB",
  "key5": "2WiaNShHfJf6mztsNcjnzMD3MdSqPcZSddpcXVwL9cnHegKqSMwqvrfbf2vmoHrEpWjwhWzr5KXEob8Pp54VTNWB",
  "key6": "MQBoSKzZPyrrcGcsvwrYo8rQikv6bKMR6HN7n71eZ9NKBXAGRrv1j11BYSUZ3ReZ1t42eDaw8Y1F3dJSfV41rkW",
  "key7": "4jnTizkGV3isqp4mKS3yXH7SircA4RVHthXeaVKgV2iHFedENsm5qb68njCRSitYrmVE25jAdtkAsxz14Xk4Q96T",
  "key8": "59u5TwPpufUUDei2xxsFSjpb4JxLwAeQ7DrQhBA4AXrvTMEzHM7qCTDWNLBEUR2p76R25QwiqBncp9Y5iJeBmCNg",
  "key9": "2ZamZaFBB6196gA5c2b4iKhnzcNr6BG7tr4HfuN4TPPPb1dHc17o6gtmgGBU8FvECB3VZf55KJtsLbpK91NzF8F7",
  "key10": "2LjnNtcTFEbmUP6LxcDN4qAbgvAh5FJgKznQTi2qaiZ7GYSgZtTvTe4MZ2YTg5gejXtyrAtzSysEVNi6aXDoP3QV",
  "key11": "5oGnvK6SrAfnN5MeEYThUxeVybZrGUG1oTFKokzYQFdUTFhMBAdq7CbB2Byh5Q8RSdSGWNCocSymouGaAiwx8dJU",
  "key12": "4UcBicNSXCHgcWwX3SDNNXWHNfBWxES5Nz6jtPQHphietjwZCh1LwKeUnLw28nWQMqpwWiTeydSzWkj3PLD1Ef6U",
  "key13": "W8cSg9m74GZfai6G2ut6G1iHbS8kCw2uD9rAHZh1NamWfh3zeu1AC4LpRVRzFz32sSLBaqKgFx1br9wMTRXw6dw",
  "key14": "5iTPFzXm3GGNCP8jmSQ71Bs6WSpwUmjVdnesHSfKQVdHNqtboMtd3j7VGpNQEszwHcvRdNFMFnv8iHFuyHj5H3Wj",
  "key15": "2bqxnCShKwzaP3zTgDquzKrcmSqWgEnzPr7zC9xqqi4r1kT3zNAKudEikXrLGoA69PucjhxdyMKf49HpQX52w7wo",
  "key16": "58tRy3inVVSvqWpRrkHdQdjgWQDLP82DQJspammr9iGQRCM7eVGNBF1pYFKAGs3TDFhSbJNKGX6dL1U6oySHXKiR",
  "key17": "4rfVPqUs2ECXrgSHq5BZkQHfTcf3fLs9g9VF2qab1ALqy1HYZvjeu7Hx8gr9W6iGowXDfLxKC4Ju7ippSotAiN8h",
  "key18": "92WqCWEqpPPntkbRXnWJyUCPDpcqXzeHHGVumxszRfNaHVNQGeTRjFyMcRbFKJhRXBfQM9quzR9B39MrPvwnjKB",
  "key19": "4LKFFMLgDA6qS1R42BR1oMF4upVhfePzaJMZTcNGZZ9nftpyA6nwvLtxnknP1RKK1tfWuaca3jvGwbJbfn1YNGE6",
  "key20": "3n8kYDdrXq8rJ8D5CGJ68XL4TGzRJPU6sGKvYdsqDks5rapgmkBEpkh38RLG8YrebVmMadEcYd433YXAStLAhEZQ",
  "key21": "5fpVqJZeo9udJEfCNeYFioRCnNnLQEdvoKwFXqby4M7XYTuiiYV5U7yA4JFVoXqL2pzEozbMgZ1smGig5k4pTaSR",
  "key22": "hSesaZPHMuJ3NZ51Gjn2aneS87W4oDm7iMryEeSqcpTE94PSEYeEA2wuLuAjJmqaLgCHtfA9ogX9eVDN2BFr8nd",
  "key23": "66T5mq3ochckwy64v2smsUmoHwmjQCpLtmxgFZGpQkpgkTSqXEmGbyU28TEcaEdjGoagm8BCJFqJxrcxcVd4Wzud",
  "key24": "UKzGVSvXWwJb3p1RrZ9Nzx8r56VKn4BdK27xvetooWC8rWAcLTyn2bVhyAuhSh1WEbSNCPvys9G8gZC19BPuwUk",
  "key25": "35mFDTUdEewQq59ZKDQcHSdKmHLzKJSiss6ddxo1FtfWvvccfRUKmykTDUGHqwe2vjqVbZukyf2oHkzyzMyv4sx3",
  "key26": "1ANffnhsGL9xVgzdPDoQPAUHqNocQH11JnaNYbFxjeKte4bJTTnVTbSwm59Y6jq5S2RD1WAPNARGjemdWVp1bXB",
  "key27": "5j4LKKNSg8FazTK77b6hBNDGFgmMWLJd46zDxLEviK1nZ9da5PhQdduytbEFrCZJ8iFLtoJaJBn4R5EnkNQPdBB3",
  "key28": "5tUvcCF31MQ3x4e7z3vkSUgpx6p91KuzDjPtAtuw1E7QQCHbrExnZgvpWbxAVLuPA47gmEYMJftsN9K6qb7SJ7Mh",
  "key29": "4JVnyDnZxZaHQCHpc33Ch6srvfTPHr7abJ54Rjf4wfcr2HJhxW3QSmL8xKy7iTRr82tA7U5y8SdzTfcqMWa4nTvJ",
  "key30": "F7CkTyo9QrnA9dFQyed7tBMZqa8kfUf9Db1x6zEkAuRfKYDwFyPB2ErSE5sFu88sAfTs46TYkNopPzsx4JwR7HL",
  "key31": "u1mSQRaYjGLFr3APYCyxDPdrr346DCt88zZKj1XAmRq69PqWh2VS9k5dQT7qrd7hrQR89bNFKYVgWRRuENvycQ4",
  "key32": "4kLvfRMJSRDWsY1ADAQcktuRZGTKPag4ywXrCd8WyMFfbjhMKpPBw1FABFTqFjhHTKTS3bvPU6TBJrebi2mEaAm4",
  "key33": "DnCYib4ksJUa4n9nqWWxx2EbETbFFznqYWSYQLExgHwK9pwdN4CetdkGzbwRMJDr5SAKjLu6HCi7QsmmFtL4cna",
  "key34": "5XkhruurPJcZbGHVocYLcDHdh59wWQVJv6oH5dZVcQT22vzwiRD6MLfoLN7pT3GJnuqhM9QY4rxtuco1NBx7fRKn",
  "key35": "3VkxEQfB9bwXcbUxMYcL2LLVa1au4GwMQUqLAdoqgUnJN8QVyu5ES1BHbJ9U6B12bWJ5XaDYuR7F1ZgUDiVPPfdW",
  "key36": "5NNhEfVo3BbxHjm9HZ1TKzULCJYTekVmSPhTtkzhywXVGjYe8sCFpT5vmCbbWWxQpEVGGcvz2Uj1PA8y9eLWVwEJ",
  "key37": "3i61XntsRug3m1Q8qDy4MCQKj7nBzaPz6cwRNn7SiC7kE2p4iRvm3ApYPcjLhmAEWD26myBD7wDQhmtwMRyzzvJi",
  "key38": "6759guzSY9C7ZzpY5MRp2QKJ6iccRJUHPU6YLiradGG4gNHa6pdAV5pio3hJz99MgXptU8ZfXzZuK7SwUY57co2b",
  "key39": "3kX2ZdqCtWpvv86RgMHkptiDsSdQqYd5qWL1XgY2z2z3gDxMnvqXLd2N8mq3MB8i3NshxpFKHhub1dn2vGCQzXF7",
  "key40": "2695LJq74vKp34RzdXbJdACTGhyTPJJREkwgxNt3nsarqS1fRB4qwT9mS4mtbXE18JmEcxHrSQv86YrJLAYsjrwM",
  "key41": "3CxLuNucrzBjyqy7Kqq1JAgBW3a69ozh8DkNtgbqXx4askPGhoZborXx7oJbAptahJm6svt49XeT8ANmBGoDgXo1",
  "key42": "59PsxdAFvjFadHubkNkoFoZP1cHGNm5tfoqHg3f9234tqzPAU2LFFRDNZcUQCvphqfu1h3eBxiL9Z3H7bwVtj2tF",
  "key43": "5UjbFNBKHTEW2Ypn6d3wVwbYGJ57uEAQXLnmmWwUDmBYtt4y8HsGL88iqLrFrFZVZ7HCJhHG5xo1GGakRd7sHopu",
  "key44": "383bqSLu8yPQX4o76XpQUi96KbZE5i1u7GTgkgvxptjHXTVyn18pKdzNTYW2Y6CwDNQ2bTDijMhYHDVfTgEvNTw7",
  "key45": "Rmud35uDWjEWudakqKkkN57edGr1GvZwTPStDDDfGZcugH3P1F8Sjsec7PApZz5VQudxc8oWqFd6Rq8nhjnAPdm",
  "key46": "2SSjij66Cw9Y5prb3ZfjFnCkkhMvweYdkPb7JSh45oLQ6rhqsKMCK2MaEGsUu2YAXtkkdZqsWREq6wUM7J6Ut65a",
  "key47": "4YyhvRe4rgxJGDsDtfaGycxY4asooNLAcrUDmKW4uqHWamKNCdnRVN7y7C17NShKEMjRuzWsFfTjfbcmBvkbVkNx",
  "key48": "4yLLq84KP82eQAsg2LBFT8XfKraDH2P2ehoD8xVBUtUA4cFiLZ8GJqgAknQ2pPwsTs2sk7NzNB91yp2XmxADoooz",
  "key49": "4k1yvDuzjm1cj92zgstPmbvrztve9Jc76PuES5si8f5LJfcJp79hMbZZXBZy5sWgvjwZFFjUshJAi5TVr5jDdTEu"
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
