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
    "4wuGDqX1TD556KM5SwUUjP8LR884FZFd7wztuV3aaPPBEdEE7zKjoGGHNwJpT5qx9a9ujE6LkvCqe4brSvhBqn7L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EEzhXJjaYjWNd4V5mRMaZyBs6TXZxdzCfTyE1NNbeFH6xRJnJPsSeKVjxA5Ndtejf7q99evoDXVfWakGEPPSLoc",
  "key1": "41YCsha8yk19TXhW82rJLeSh4AwJg2XosqusJUc7EvCMaBFeU56a7FMByZDgiuVRjyhiBAbMnHbwkfCb3yd82TjM",
  "key2": "2Uh33yoLbmcxRFK7PFrH4ah5V5xhe3pEmB1uqGEi3QuThFNrg2ZMMJvgDTfwaeJFy5KuKLdwRVMDurszM9PDf7S2",
  "key3": "2Q99e7r21AYvMvqAFQ26nDfXjnN5RjgRP6LTbJj7oMfWu7qR7SBd7J1yQJA2pkUraRZgWDXdYtNixvDEQC7695ga",
  "key4": "3JgajuxBZXevGABfD9a3kVJAe7k8x8fdHTL4HyAPa3hr483ZyHRfDAxDz9Ewf76XgDBdzu6BSeYkgwCuZaVjLqk9",
  "key5": "RrGihRSy9RQrNQ8T9g4TYvFcfJkktVwx8vU1D9R9AqCwL5Nr6LRqCrwQBCgdvTQQTq5z78HJfaRtf7NiaWyo1bG",
  "key6": "3KgdCJzkTqBCGF58pCN1k5osf4ieyjiyBuUEeE6YioijPFDNyXEsNJtcwizsYDRXyvei9M539cBKT5GbHeRPxDbX",
  "key7": "5inkNvhVmKFhCcaRdBzsEQ48rh2CdXxo2hmLoiZMUv9vedZeNp5V4j9S59yKomg4o7651rdYU3fFDu4ikGP869gh",
  "key8": "4pqcf2QPkFD5ZbAEocqFJyh4ixKKBTZK5BZtTUeAUYUhHMKGMA6tZ4owFDEUrPPecWsXgWx7TeEkNWWbk36qRATH",
  "key9": "3fn2oFt3M3yVj5RGD8582oCaTDBD48iGCQD7A4rBcc4pMtKkMhVTaxVKzWdtdrcXKHRd7i98smRxT4L2NMhUtkn",
  "key10": "4wb1ovaHifAMcz5Au166yFJq3JAYpjeiwRoceddVF5kEpZKcoi6NT75RB2L9tXUHrmr1JDcUbkBhwma6HF3zc3cT",
  "key11": "2gLMgGLM8uXvrm4n1BRieY8V3MJAUhidVtJh8qiERehYTFAWUBihKnQcTYhEwipZ1N5MXQaJLPFFK2ZJWakSAuHN",
  "key12": "3Tewn22WbkZ7YkPAqmeAjPW6RsvCzxWpxTbhAPaUG2Sh7yU2RWWDGmr4hVd2EkcZmoKciX4kmqRdYnDCv546fusL",
  "key13": "5gFii2F8g8vUnNem6wo3NN4QHaPEB5H7SvVhLY41YZ2qigb4ScjHWPvj64VsLBqs3i5D9C5hXmaDFN7uDeJ4cXhH",
  "key14": "3S61FkgCnRGAPSySb9DrEPFrJstTNEu7tbGqg4bg3nAt7eNKKkf4oBemNdmMvFn9idGSxEmJx7une1scsFsy1NeU",
  "key15": "5xGvzqwkNfQUPVzwpRi4zM6TwuipKJe2KWo5cAbStPjM5zZUrA8odRDwms8TaujfLuq3XKyiUopeLnonoVQR2Eyf",
  "key16": "5qJqZs1tR8hSE8D6V9C2XQfifaPKxzpJuDas96zMZt1b4gTG4DU1wGeon6eC3g6q3AuSXbsZJyx9rnoawy5xV8yr",
  "key17": "2ZPjxk6VkJoPHD7i3TP4SBApeyhk1PP3ALas1WLnn2ef3oYypxmwTComXTcbMyX8JZeScXeAA4q843h7yN2zw7HC",
  "key18": "3bRLG2k9HJJiNjyMuFxF8jbbdBi2je65QeY8XMQCuN7mQMtXk7K7xFEXSouWu8pYP1e6ZZmbmiLgq7DD3qPyT623",
  "key19": "3UwnC5a87zoJoNDStSUtXruda5KYHef6ZbWjUexrLiwiLiaFqvx6b6eKvbe6MP3cMjjmFng1Z9YwMh52zEwRSy7p",
  "key20": "HEigJUCsPa2JAuyDeUMjf39kBXhV45mm4krieM27uL7HMYNEgP9AaNsiuNEXZAcVrufi6n3v96RoZ7eEUv3Y8jo",
  "key21": "5WhsTUayKBLtMp5Qwib1qufNyMvSP5AAMM23rd2tMAW3ZeW9gvP79zKRjJhvJKM7chdHS2ZjjrKEDnT6DxnucvcH",
  "key22": "2fJhCxTr8tVewzPbmC6ytaC7yZU2zHP9AnhVpBgDJrAn5UMcaY51rXTaFWvjBnkuUbShjtxG9oVwwyCmBjK9gEsK",
  "key23": "bcPqVzpbRz3BZf9wy6K2fdg7DHXk95PhxDB7ukJU1u2AqTvEQTPDx9rojSx3BwQFQFKtXwbH5iJAwa6Res1QwHY",
  "key24": "26HqTosGP9XJKNpDFV5jJ3yxy9caoMjtHS25w9xrDvMFJfSGHfBcdMPT6Q4xuv6n6vzLyEL8ZLV5MXTZBzrRtEYw",
  "key25": "B2uvr77L6B9QQ6gEzoMGwaoGk8XY9cLHCQZSwfro2EoumooS9qXy14UNQKjXqZgQo8qLSr4LGochNyEUpSE9A3h",
  "key26": "2uNdY366A2gTq69zxA8qU5RMjLvFzoVgGTjReLh59HBgYRbVbUUyEpGDtT9eHv9Za4dy5tNY1SC1ejSbjDQ5BnEo",
  "key27": "3r2b2RMhbN3oeSiFWQwuFuYVdvcnoZ11VCWBhJNAnCAoaPWXoVsEihUsbW2rhKGRjT9jifqgwXVoxJvTTbNAFVN2",
  "key28": "9xNh1AJDXrMcJJtEsSaUHZkosPmj1Taci8dLMqnn8h6z5YFWxf5Fd8A8yBz4mHznbm4XzLzaw6P5zwe1xonmXDG",
  "key29": "5PuEfpgZxUmNjJWLK1EdyWCRRTPfNHSEMYbQCBNgQfh9m3jT28pB6SvpJFfGh6mc9bN7WQZuqP2EfDYfXQSoHcXw",
  "key30": "8gAFUziEziKupNYn8wJsMTWiQqLcPxUkRCgJKf3vTZnQhnM6dxrung7MCxC7L1RKHZmZZFT5sMs4bX43KTnSijy",
  "key31": "4pA5PGGoWJNta41XtCT6n77RkLStEkB41r8K1kf41FP3Nj4QJGd13LLrw5qafvdEFFmnFtPHUf7FkU5r1YJVJ4Ss",
  "key32": "5Z3DvWmJAZk6kw8d1m3p6DfKJDBQwWKUcTUdvXtAgK7f11op8AP8kvSVaPCTRRuMK1yRwti35eVwVUYZDjUtfocx",
  "key33": "4uJ1gUuSWiYM6hDZEDrCkbVMJre1Jy8riaXTsMkd62ATGjSM3UckuH3K4xUHrRxP49Y3yKgBwGupoZj4GtwHQF7J",
  "key34": "4pMpmUMiFcemDcAEZbmMYJhpw8CELSi2zRNMttbJ7oE89BF7hkqhAkXbZya7RiiSyze6utFbeDyV198RZgm61bQ6",
  "key35": "wPUjDtAvjssPsMAWjTbm8XEHpgnKThow6JSKXnxeXy1gAJwGvr52RnsGzsV1tXqQ4xvRoFiTpm8QQQ1rEiR5kBy",
  "key36": "3StFpLJCRMYNAKJzn25Xy8mrtrxJHBXbgrL46uXPkmKtGc5y7WDjVN1uP2zBkUyvw3YfX1uPJSEsjBYbYC7m6sy4",
  "key37": "JAoCEJ6FFATDhjq4f3Cn7wVAiY4VSPu7NeawhwWhQnaSs6md67dKH511tSJywYV915o1TZV6WUYnmQTocCoErDA",
  "key38": "2bxktnSM9DgsQTiFTjo3a7ZwYjMwuanzhu7a5Bt8TrgPLutexRfL8S7eBHzAgjgV6mbesnLfSMwtTLqo96L7ZGA7"
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
