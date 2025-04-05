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
    "hFcRNY1ZdzYf8BJM4AMf7MbrbH1hpdcgtrGg5JGK6EP3sQS2eHFur3qa92UHSAMoA7Uh7i4Gg1ouXtYrSQi66eB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xtsNc52hkFqZaxFKxkpyyoaUDRyonbRf636qCxmvufnHr9xJjvPTpFsrcQeGb1hfsbjPgWPaaurXni7PqJr7Apd",
  "key1": "2fj4sAzQBVCZ17FHDjQF4JoDKYo4srbKYMfx6wJxipJmTSZt8UBmQVyyGzLnLZJpVah2aYG4qKETdmZYSNJwGpFT",
  "key2": "DNY7D4di6vhQ5zHjTzUq4Vxdn8VpyYbYThhavKxBab5Wco9Ws1D5ThXgVPknpX257wckjvUoRGXYx2DWFfmsRSH",
  "key3": "5ywB5tvixScdRqH4Fya5SNyUMHT2ucH3sYoCxmXJAYztg2rjK5Gw2ADKDNmr7qcbW4rbo5D4xhrjDK4fZCxkJcbv",
  "key4": "56nviFaaDufaa4ZWRuKYzdofSRvyvCGfuinN1GJxdqCVFrwpd1ywJFL8qx775iKbo7dbW6pwswJpeNHyobU6jX87",
  "key5": "3bMrbWR6rP2G3j8UJxDXjyUFBnULt7wjLoid9MydrRrd5UNpt94Lj6bxmkChkKV6greWeJratP7Vr8JCfWWf68XU",
  "key6": "5xVaqBiTZbopy2PvZBTndm944mGhJYdaQwgz3HEZdi8KhBqGudVhaBYhYohJ6F2Wi8UoorAUDuE37qiFc9NvboPU",
  "key7": "2EfCvLxsAW1wDGwTqSChzbcBNjJnHBRyLtDEwjcrYvcZowkW6bsLzct7K7o6PSU2UZQxQHcfhdzw4F4rUiQMb2Bb",
  "key8": "3pbtSTYEHQUuNmMM4RZagvYARYXmZ9HmY9ctN4zQxhZfRPvkrSvGBwtsEB7DGEzZArAU9hUc1kBUp9goHqMHH1Nh",
  "key9": "4NLrjgKMPxUYsNsfF5NXbLVisRnXDrEY7fxRy1DHtEpGXDupatAyuqFuFboK34gaywYw4Q4iqpPo99mcXdBMCjp2",
  "key10": "CDCnWkk4jPjfff8VoSiJGprf8ht3auoueVogG4YqFAxvz5yC3BVgaKc3cqibbTka8hJBDEYEb1SihH7kz3CCCQn",
  "key11": "5wT5Ma8wBMWXeGRNLVsvhZccE3mkGbA2WbtgjmwQqiRchubxV8C3yuGpZHahBNMtUnz89bV3PAHVC3aXFjkRJB7M",
  "key12": "zKrsgHndyaVhaBQWMKTGNWMMGHrq3Q5MKv5C5j7Bu3rL45HuxY4d46gCNa2Bfo4URRiQ9UQtTggPk9BKKyqgCMm",
  "key13": "3UHszsx5vsDGEhVQ2pgdPGkwtFhW6bVerPKtiXBRdLLYkcrhJJQpa9uK7C8qHNYyaRYUb9Jpyo24rqY4NgadGfyA",
  "key14": "3Ksgkx33KQdW2ADzh8h7coCbQLMsf3hGmFjBSTa4SjXBEjV9sW3SsHz4TLpB5A3559egwQxshUR3qjZKGJvWT1AF",
  "key15": "252CszZje8HfZJe4nHR6y2QpsVmm8Zy5SkMHoJCHqer6vcHH3QQKYDUTbCPRPjiDJjHXtCss8Z2VTBpWZp3xbrEn",
  "key16": "29cTmP7YxbbTozS1TkW7dc58yHWvWcbnXBhANAU4nTDrGoPBxm2njPtQqtV6gHn2ZkqwceqsP1W38mZ4QHZzy17o",
  "key17": "29Au8w7f1L3Pgaz2ZE5ULXGvgM6UHgKGM5E5x5W4WH77tCKRAWRrnQM1hkXsJhsnhrS5qcWHfxio239LGxxmEreM",
  "key18": "4rmt64BqGS8QzufYaZvLWNn5XjwbC8Hcna6vkdtfj2cjNqK72UMepE6gysgiSmhhG23rV18rTHDJUM1H31stHkfb",
  "key19": "365uBR9YoxiAT7PmUTA5p3wVKXaxSrvSYPxvNA3R23GrQhN2RPHAvPtWMtmKm4WUDXa8x3kG5kNUoDRChMKtTZkK",
  "key20": "UfSm3w5fuSd7Qz8PpFMggQRBJ9P4ijASNzX5MFRgjerckJ9DNk81wPP1aGW26xPJ3CnFdTfh6GbemQf2MD3ToSF",
  "key21": "UxSaK1sCzsoc7wYmCzijxt9TN3STHwPuYrxbk2gBEgMX6HXEQaDFN4KPb8hn1uVLna4u1G6x9j5M8RK7wkPFx2P",
  "key22": "2RzoeoF47KGGHmB7uXHaR5MMGfF7s9RH7YPTLhFAdciG2vZTydwUr3AYN1Z2GdeCMwFuExzwSdCqJpnwJB2GjqaU",
  "key23": "3489nHe5xkFBgQiKG645FqMdZ8g9qeejxhoKaLg47RWkvqDYs2w6fhpmEHfSWZzkCvDd7MwrBkMSMuLz5MRHrjH7",
  "key24": "4HSqNSaesQLfJvPc9HfbQ4hrJZzayzcmchkbL7jBfAbAijMBx5BVC6ePUabe1kKb4QcA13xrKrvZTTwh51S2jvEZ",
  "key25": "Lg1yUYqUg2JkxbcYxCQiacjSmGAG93NkWbDNbddZ5RfFLfRkg2qNFGrUNiJWpGwChZsUWrjqcRnisCMpyYSrSDy",
  "key26": "29UTxpoBB3ECkpjniqwBhcG3fFGNhfgJULLfyj9WTWW7Jm9DSQ4KihXfyN4biwPJmCzKNuryz8bfpzhXkU2U4ByQ",
  "key27": "2URFCNr6Sh2VmxJHQH2X1yKyf5Dqvrh24uVPWRhv99ktD6zjCq99YPmKGRQi1xqyYsPeFRL1EUu8M3MVvhHMthxm",
  "key28": "4kjX6a2DWgsXMSe2SrkTmHTvXYgXyifm9gwtSZ67Hz2JEqj7YBjwj44dcS45nDwiDuaeWM4rWWFSB3gZkUesGev1",
  "key29": "65mxmWfjYPMCnPQTfHGXpQN67HomXx5MXzPeYrc8xEchrJuNoognvXmMbThb7GpMnbRLEKPgaSjnGpqjG38qn2xf",
  "key30": "31sjcFmoD3virfPb8q1QfLrD6ouEZtfRqquPFn57wJWGpUUMk8Y7fEVzeHJzvE6kjSwv1GRe65x4eASyCMwJbavP",
  "key31": "59GnzfkrTVmsDWjcZx2qHSbt7qDLP4RNth9oR4n4cLZWQsEEkTWgu1tAYnSDXnMdEXiFiKiKrbURjBjGSoSNP8u5",
  "key32": "5TRLC8nNLoW8UL5XeKumB4SwoeMd7WvA6MzNeBE4xnWVPjJsdSfRAueNa5ntrpt4uVp5pbTF2ocGLfMNE9p4vqo5",
  "key33": "3bWxt5arjvJdPHampf29mN5dtRDSELAamffdgCBucrt7vso97AbELekgajaHY8NeT3NuJBeLk38ebvzegSJ3ookZ",
  "key34": "4AAtBFgEMU112AEURTdL5Hudd6gr47cgVeoPrzm1teQ5S1pTTnbDGvp4GKzji6CFVnDr3jDpxEc8kzGg8vGf3xhH",
  "key35": "E8HSMfndhSE1AaRHQSQczNmcxBgHx97vqLtDr8jCYgE2BC18f1NTz2nJFJMuCW58bJ5kywBecfEKE7RxZYvjGVs",
  "key36": "2npCADTx9hFHhF1sVLFGbzR3VUi5adxBfo35nXSzzK4hg44iRpu6tnk5QWfRPQyPcia5nKnN6fFx2MKuRvsR1uqz",
  "key37": "43PyVjFpRd5y3v3Wstdw1AVejiA3U4yPFBWH8wf5tMmXZgbZ4tFPJ6G5EpyjcR9WLtCCBhbv9nPsyu8aXX2gDZpk",
  "key38": "KEQDhuMuUMkP3c7q67c4xcvBovQENGFC2jdg2wZG2z9W7CjbSAQAjH3GEVPrvGkjA6Acdjs58LAh84rzQLrBL9o",
  "key39": "3JoCFWvqJuUYU2WXAkQ6jpyMri8a5r7oWbUY2zznqYn6JyP9QwHiANAATBw4LmeNJaqNHc4ZcnyJ3QNNec3FuAtR",
  "key40": "4uNQjgiKAp7VxZpb59R7TdGu2ReGj2V2RUqHmtRarM8jJLfydVyce742xfbZACyKsu2yDDNCbyLF83fgZeY3vb4H",
  "key41": "53bnV5cQWf4yMWz4VKSKJTVEHWMVKxukASfkpioTVNHyh4pHkdvrEZnCCSqYKJstP5EnFHMYrLb9PWCBLVmYB6UQ",
  "key42": "2csT4HgaUkCGR99GmTt8aCVzsHwLmUULn3b6jSRJoc4JXyEmr3svKUNpPU5WyE5H61gtuE7RnSmSdMnVM3GUg3oQ",
  "key43": "2odEz1DTVLdRPWgEUKrSoxrdrSxAtjHaJCKNctbffuFhojeEvdS1HyJcAkkf8NaCVpatayP284qTNFpLEhr5b5uu",
  "key44": "2nLV8QjagFjT2Qdqd214WUDsXkghcNHoEPyUttmQrkm3Sens9rsozmYgYS5pqmkPGDSERi68TcmnZSKNWeSq188C"
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
