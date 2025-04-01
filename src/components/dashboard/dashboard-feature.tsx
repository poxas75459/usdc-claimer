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
    "KvfhZVNuxU3j59omsvRnNRDRxqhnmL6omwJuwwZRK5FoNXfs8v88VxbrjmqgtQeVq1vZMd6x7zF4aZ3AchzTvib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WBkaeZtT4gcnts7eeGBF3dAizLXZE7aWBnnSDxXp1NFsB9oQP6YTLQE7F2gKRsRT5Ar3ieqEXWNgzyLzZ97bksi",
  "key1": "4cpbyAp9BXCij3gvG36RZReHZeMqJABGyQAs93h461ALqZqDmqQTNPdv2nK5Lof6jYecLzSbjR3CfY4xqnXCCPWC",
  "key2": "2dWw51yW5BnsLAoo1qd9pFS3apx4XSPajpabvFx235Z7gDtgLfUdwMrGn1CahnDfyE5fFY5p1EkZJNdzv43g7e1r",
  "key3": "3ckFJVU3b1NkacPYviY3XwoHaoZsZkxXHQDgDCDoBLSMzwsMivmNfj8yxB3QDQu8U1wq4rJqFYx4RLjts1pC8wkb",
  "key4": "rVaV6LvLnbxPABWX3qGfECKHyLy1gVWL5raxxRoBRtn5eVKVyV3fGxsCZSJj22mpav8jywRfBp6NKEcoYpsUYRk",
  "key5": "3ciYiWf7pAzTqbdDCrnuJQYesphWTMTdx8qFbzi2e6ZmYJ9JhjEm3VoJdVS4xCt2tf2DMTYbc2c3qRb6i2fevXnM",
  "key6": "37DMC9JNJDn9GK9aFCtj4b9uqHy1Gjq3DvtJvykvz4mSYu9SCVzKkmKC1x7yjuTjdKFcPGXfV5zKUp8HhxS4hYB4",
  "key7": "3kGE2zuUBJix4jY4iaWSDi1JisJd4SqBQ9FkeBs3sUutKfva9FpxNq1Y7LLPa9XcKRxffoVay8GvJLgjUCqUBco5",
  "key8": "3f2pseYL42d8KobC2psdkT7og4ic7HxmhMeUGF3GW2qfsDDUT7AMkiUowPFdqmon5CFUqMBfwAAv2g9AmJUvhMJQ",
  "key9": "4EQRYqqkdTveWrqNeqQSavXjYG5JmqgC2CvLPLmZwfMRSAbGZ5y9JqfUXdzz3PuDotMV2S7AzEZNxuLwoDLSDmPg",
  "key10": "4vU1iUjeh7GkCoKzWgAciyqzefyXkjBmRnHVwUbzC3u2QvjP5ExyjrCLXN7i36emm9ntDdMKZRprojq7iH7NJKP3",
  "key11": "4dU1gpxGU1k6vXchjadrRaT983mbGnhRTztQuUFAKjYQuVbep3xjdkMqLNhYVdArhQt4cAbCBKmGqEAP5BAqyEZe",
  "key12": "4HEA9sEC7E8WvjEtmTGFpfgThf99CnZ5w6LZM8NHDHAjz2iaK2JemEBQUi9KDXotwrBZrsodMZghmjRdaE8QpGUE",
  "key13": "5zJbF5mW2bVbRvGmbUuc7pcRpRZmPKtrLZ135wmnfRCATKD69jW82LyhZmQnAqwXTPg7gwZa1okPnzgQ64KHWyUf",
  "key14": "5QnaFNJzCYjG1XJcifA7u6kQA5u8ycaDAXv7TcT2VY4BnL8oFU79anss489TpDjstkf4kXG1mQ2L5Qewsu9QxfHY",
  "key15": "KmC6Ce1Vn5bAkTrynqnmeTFWoNrjNsL2gezAMgddrJHGtsc3ErCbbPbNrvkmH2Mcj37ijEPHxYqraDM2m4wyeQ6",
  "key16": "2jM7ZBX4ecXS1MaG9VFyN4r8kmCvFW9sS6H9yq5g3kkKN3Hwvd5ghNgB6b33Gn8CtDGKUmCzQDAdjvREBAk2e64o",
  "key17": "3UkZKebTXy6XhSTfqZPx6M2QWXLMPE1DdStNtwJWu3SdbnLNWYQRMr8kPP22EoWbewQSSXhxsaTabYrRRGYv8hh5",
  "key18": "4LuZJYCKGLauFRcNxqTh9MNziX5qEgDcyyZHafkqSEnyaAbbtviGxqCpb4yHecEUxy9QC1oRTta7TrmRwUEMLKCe",
  "key19": "2zYbZYm4pQinnpR3RfyhXM3eHTAY1mciHt4JGwXGdtZybDzCcZ5HmWYUypqVhUC45uqRUr5QQxhscMYXftvFBzyV",
  "key20": "Ztw9JghPGUqs49iXgWtmpgLwZdWbFx3J5G7EzDX7J76pFoDHccKGFpfmfUumfd6p3FJeHDTMp9Hbd53jBiNfMb7",
  "key21": "4JMP24Gm2qF6odRZmVHoy913ShZyxPFfwrQqpAPd9zMHVzpW6GzqXUb2MAE274hmhcn5DrrXrBQW27VaDXGC46qf",
  "key22": "3c8yR5MtV1ZUGTvkfHAU7BQDra183GD3xC3Bn5wiZmascLZeLeTfAR8bjDEwbww56BMZCBdhTXCwt4tPAfc5Vx8H",
  "key23": "4Fa5hJQFtiV1imoCgQkuSwXPuydJ6tbcya87dKzR7eYZGfFPgNSkK2Xv18MXRykasMSWiy135cGPv6K6ZmFPBJbK",
  "key24": "2JgS8c64c984DXRv3Eg5vB4skjeKiiYVDDH8hETCxu2R3xLDbH7L6p1ScS9bFcyHLZZt4mktt3iaCL6fhjPo3cyW",
  "key25": "1GnDdYatCDw3eqtscbhPdXKbiKP8bkXPxsHH2JSWPZ2EAvxdB1qyS749tHv1DfEbTgVNKVt86gbZE3JVmZQCGgP",
  "key26": "3rgQDt5tNZtiL5Xxx9g2LwpzS7mJcPj9TLJDWnYvhGtJUemkEeHueMibJkQ6GAy2yr6nNELRzuiSnq5cCT7LTkTe",
  "key27": "5mZQxBE5e8JJHNcjFmbRMXDMitvSurYL7yQxki6BpWCMb7Lqd9iani1ByN2ame3t1WE8CytETXYKJ4rsa7hrWK5F",
  "key28": "67XEPn3hhgpUWKorffAUFFZVVktygdHwYrQmc3JRnmywiRNUNLJdM6Jd7N2CwdzngpxJSFTbb5TqevdBJgSmhqK3",
  "key29": "3FFjL1aUzC4Z8SYFtPh8iM3aatybWSVFTbyamcHAZ4AZjst7aSFbMLdzAJ3fdqrbssqxQUmeP6zBV1QCLGMFr2TB",
  "key30": "2TKjmNGZXPPXDcmcFJMA1CE6w4DGsMUCjZBdSyvEsbpMA1y6usbM8XbizKbxzpQEBWYKBb8rF4PnN5EPW1cfj6jR",
  "key31": "3ahn6meKE5T4srEtPyQFChruffNW75CPUDtVZ3RrHGgy9R4HqqkEjDDini1GEbrqhFSdUet3rnfiSzWBdwkSp8gU",
  "key32": "EyoWJu8tmocpPXvCZjN1Qj7EESiEbdcHoS7651KBdo9KUJRFT3RKAa7czpo8qsr8xaG22h8BpGpzYWVoFv87Woi",
  "key33": "5qjQjFgDJutJ19VtJUoMULPQHSSHkpYTPDmvv21qJwKf8PvXC3juXFT4GD8mazpcyCw6fCFp1VN3NN2Z4YRFEMaa",
  "key34": "5fxWWw9EeTjCgSqkgPhN2XKgudY825JjDs6mmDyjnH21RYugN91WP5nsNtCoT3U18edzJqW9kBu6xc73kWYzMpnD",
  "key35": "2aLxtHZnFStXKhDvie1RzQUUSWpZsbniXTJojWBFPeLuxLZrku4Q6mLjLpFiGwuA2UtNhUauEBPV7GyzBNNc4tm3",
  "key36": "5LP4t6pZnEqVoLqb64CkUJnK2W6xHyDsf6TRwLXwq8pfNwouC8HZ3Ft9sWx6TfqC9iMdjPqzj89MYoSWzpveBL4f",
  "key37": "2awnHcuxjQ24nYyrk2HDsEFf8FMU19zzKtDNoo7NsWGg842JWf4CjiMJeYEMxqoJPmf9PR65pJTDsDoQPKraXexq",
  "key38": "3FXnUqkztE34DmxaPkf77epzyrTEf1s5ek1KPvg4dgpbKmERgF8cA9JWbo7vdWg1YAJxXRogrVYxRkMirF8wyqhS",
  "key39": "1oBs3qTKf9qK6tpCdgJ6kVDoTMMcfeVv5fswxdrPXU6233dWXtnpPdkCjvvyFjTyFaxMdvy9ibqER5F9ts2nUA4",
  "key40": "5fZUDdL1mucMnHsY6hiCXKFPQjd8YMYEESwCfQ5N7TY9puMkFvpXb3CERvyZETm3KgrFx2xheHGzBszfgsK1ityH",
  "key41": "DNKXwv29vVaMHoFyXgtbkzz2cvKinoLxEPrBgH6reV5wfMdtKUhUV1Cfp2T3kztne7EzBK7CRB8hGCpVAJy2d59",
  "key42": "46Ry1FhUtL2gPyDqC8h3nAaqWL1bozQiNUGsva5URPS9EaVtUZVuAVvmSXB1rFdJVZHTRcXb9NaNQf9PRN8G7462",
  "key43": "U3VAbwQLQKoZN9EMzNPerKxobK9WRaG7ZPRzpVL1bUo3fTMjacgVUejVwBm2t7eGLdGTznFNAaf45ga4ufjkCtV",
  "key44": "wz9GQUX696XPyrKntTJ92hM1N1CfqH9kqdd35NbLTFFyTKpzu8kDjt3JYK2sfUsWPtyUkomgvuV1zdimmsM14QL",
  "key45": "3nVQJf6y7FbtzxHe65AdBaqr5wUhY7XdeCMZ4CRhAr7GYeBtFZ3DdXsDVeKEjHKbtuA42C5nDc9KJiA897rskEd",
  "key46": "3LEkLEQtUxzg53saVAEkViCZdSg5ptbeFhsXzm3ukmPjD1XfC67N5EaeH4xDXkgpAD5rXt6Po5B46aa1FgS7a12r",
  "key47": "5wrqH7RhQgY5PG99nfjfSqCRFVYghDfhsSYRmCNBDXPsVDdrgcE9wrfVM4fsRb6ysb38fN1Gdt2ynYFtGUqwkpbP"
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
