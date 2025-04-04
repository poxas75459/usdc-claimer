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
    "Zd9VLPmzHj7UwBLqBy9zmBspnccRH5NbHpLpVhvix9GySmb2k3B3WCgv1q2KCwGSCupesWYKeMwKmiqGCJS8o76"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bk63E3FkgzUedJzTN8MxwDPL9nSGAo8UMynhQWz7LngGLJv2dVkJEpGLUnqxTvrXtsvgfaC6c9c5KkSK1o9qm7o",
  "key1": "4kztMQ1X6Kj1nqub56X53fMobQZqhjqtPdkWGSLyqoU2mpb1WWaaCxgNtAjXno8gVcxdYDa7heXaycctNteNrQJo",
  "key2": "2BVec2TntWDsckVASvSaWUgFYgM5Fp3YPaZxVZheo5F8jzDzpVWVJ4a5B5vNeVhCHN5XGoTD5Mym41Mu6cymHxQ9",
  "key3": "CN1zNpbxchuVRaFyibsioem2zrYBZZM4M2XUe27wkSgWUkp1NyfRvpi5RSAGCfVj37fQsRakYuPomPRdRFfA5ev",
  "key4": "47CGdnas6ymtyxP4zRkHN7C231q3h8rZAxA51MdTrSFXzUsnoKSNbevMen3MiTQwVt8zTLWDuzYoMMWnf6KkBf1R",
  "key5": "5F3nKF7NVcui4NM3BZUpfqLRrfsPqsebADXicpRNSGy97Q7vtStAXGkmt7rhzgBFYE5aGeF9L1oLGGHWKTd69sik",
  "key6": "48UmLJhEth5UHiNToYaKBNvcxka1uR7EczSfevDw3diZrDMcqQ2GjQGqBkZ9ybaHfg9nrik7nW1JHMu5mcCmR1Cr",
  "key7": "bwqBGpyK8W8bjQohi1bH8bUYWPkizRD4ASh6BxLrBinQUViU1jZVMpyuPnuoCpeSnftcv7KM8X1b8Cq4HKm9tgo",
  "key8": "42vJmRKaNpenTBanymfhMdBnjTY2Gss29FxbLU7VRafVoAQL1vMUw6SbJ8SrCDt23h55CPD2QY1QVj6vVRJnihBt",
  "key9": "6CuN3RUDWoYoBAxDUGoLaD94Gm39ZkVEd3kxPwopKsJYwnK31SFawau4uBZaphNj3uypXJYa26cTSiS3phJGsLh",
  "key10": "66UpELsextuoQ9DgyNPe8CMQ6nrKYoxXSe6MsHrXd6bxsM5MQrQw2wfgbYuKyzmF4c4VAGJqRkxCNGJXy8FNnQRy",
  "key11": "33ppAvt3ykaDXXntSSfXoHy43nj5qrLVJABFS51jh9f4D6uVMrPcZU5NrhTDo3TV68XrQvx6QrBVvqmJ22kz1WYA",
  "key12": "3nPQs7af46XHmXpkVRzF39Y6W5g32a2JbGbnohkg5kuRMFAr4GAUBDFm1Nb8QiLdY7jYr3XeQK1BhB6a912WwVyr",
  "key13": "24XTeYza8ha9PBz6PoFMNQsstjn9ZnVbPLyfBMBf1z5G9jeyWXCBNG2nAfT9Hzfe4gqGC9B48Aq4zKHNrDmsPgVS",
  "key14": "3pr6FqYjP1BV9sKdhfb4EoNuUdALM9P3zkNXi9LmuZU5cPezL51QygqLG9wpJmfhA8FP1WDxb9WRYwTcF2SpADh7",
  "key15": "5JBmFq4WNxNV4NYtVpoPY1na4DDsv5Gk3kbdXzMWnipBF36Eb3PbHc6nmSiE33RxCVswG9fMAPY1YH4XK8WaSt78",
  "key16": "j8sNUNG7E55FayScJnm5MMZiwxcp3xFzGQUaKFPB55DitgSReKkWtwrtcYJ6aSuLVpaRSP51YizskUKcA9WUris",
  "key17": "4aZJVLMUJFzLZBSCdoKCXC6zUyb4QYCn7bKea33neraEFNM4auS3gazGT6megei1FefzMLW9nXMaJxZ2CatTyPnf",
  "key18": "4iZAgh76AP56DBARm1BNtVXUyiEHoNmC4mfnkBo7nviRYXZLSUsLTPh8VYRHgCsFfSmn9ZD6M2bSwquh3fyFArxG",
  "key19": "3dDdPAxTn6r7nStF1siEWhCzBmiLXfgjHgXfUejW3VPLDetYdNotUyCSpmU4byCas31SNdXAt7nKXmGZA4euUhyM",
  "key20": "63xZwqy7gkh9bbiVvUseCxyJcwEDZCV9TMYDWMVD17XCsfwugboJtWBCqAWxHWgN7yQRgJBqPsr55CsiBkpW3i7R",
  "key21": "h1F33DVTtBjUhRGqULF9XKuDDkkG47htx3NQpaArxKPmJEsE3dmwgdgTAvNJk3uwZa8L3DQtto1XxywokWbGiAA",
  "key22": "29y6wNzCUXX99DmX5XeZnkWXcSuRLZpzX2rzAsd8hCvc2dAf6gKM9YiaBKfRf548GJPxYy245HN59xdALbME1M1V",
  "key23": "52WHt3XQNhxVNVRRS5q9vzL3Hw35GwgU2R8Qvo7LntaEiaGxQLaNwSH2zYbR3CVEncQeK1jmF6iWcyX5mVZUuFwf",
  "key24": "5D8FnDJPh4B4kWEAGo86M2DtteboLXfdXrGj782a4ueTtqaA2YP9rMc7jMUy7uVEniUcTtoPAqCDgvVYjEcedKLU",
  "key25": "3sZmptSqdgNuvXhAfGqPxXxA1nfK8URwmptaLyha3Jz4jM3yf4SHLcLuW4ArLPQBAAZJ2xFNsGcotv5ewzwe4rxf",
  "key26": "4d1aVND78yMeqH3Fb1VXphrR4zrHBFw1HfR9mD3gEF7BAE2BeJU7g8YQ6voVb4n9iKPArzo78tv77ZjLaTKgsY2K",
  "key27": "3MX9u672FG2UMZr9qAaYK6qVPmYyGATS2qmt9SuLYCpf4hWXS9wfWfs9jUk9wJiJoBAUFiDVGmZrLiGBEGgNxY9X",
  "key28": "2LgC5GmpNY9xQCBumLJcef4koiN9fRK8MqMeosWQjd4ruoxh39HYpquzGsxXdW3vmDeyJieHYu5UUAmKyxrRMH62",
  "key29": "5vAiTyYXFFBJkFSUFZHFczvBxGbVhN5fm8oNRM2wajps7vvmWAvxtnUGJFunxe5xaKvKnhCvVDKXixYoUVJe5XBz",
  "key30": "b4c51ezy3hNw3D9rMjCMBKEmMMeKekbj74pqxMem4JtiAEFtjYH5kvD1BYbaZ1Cp6wwT9W4CmGKCWKGnaBKyXLM",
  "key31": "314cG1J4TnFXZWhkkqwUkwvm8uaszWKdm2jktR7tc5kVpVHpziMkCGpYhL4gACW2zfHqYHCibij3vAdoQYonjHiK",
  "key32": "2vv7r6AMYjRZATRZgsPMg9PKEvJVwbGmxviy3wj6u2FJKTbRhUhmmAZ3rr6EqnxRNYGdxbipTg6YrpXzkzh2XUNU",
  "key33": "vVuLntS2MXfK671cLt3qTrtckwpWAPECJjH5FL4Qt3PuoM1GqFhtHbDNZHmKUXSMWrWnkyqDxZKaKfYHWTvRLh1",
  "key34": "2VMtTkGMceRMXKMqfJGowhDbfsGWUC7wPHajWJ2cyZv5wiMv1mf4ceADyyNq63nbKSdV7mNcmj5noC3wh7m5xuPA",
  "key35": "523V2uZMVy5dX5xJCnYkHP1eLwrAmTQWR8o5mfTKVYY3J9oBDj6FfFZLhq2SVNhpJjRbNkBgHapqYmLwusHmtsQr",
  "key36": "3rTe79uU8j93mymzuTSepyAecQFKLzdFcX783sKc5hKJQJrawUTaPvMFN85mVShGuDACf3QSX2pqdDbZCTKUiSje",
  "key37": "3w3DDR6XnvHeHsJbtmvaKeYnYmfkSi1Cc6GMxyC6Wf4ZnVvqQzqNyWxtQArFZ3cuBE6sUawvWxBLLK1ngc7q7UdR",
  "key38": "21i2z3rzrQMwptDUco623Kv6x9E3g9bp17211EcyVMHUkU4gtpckU6UPTNaHnH33CrMZEhoPscZADrvkoFDGxaTu",
  "key39": "2L5A4a8Jq2YKsMfdsCT2g5JjeduabVopcfpkbnsV3tHJr4yQGT3evmNXcUhXWjebW4ndMXR4tKhmKesnyQ7UGKos",
  "key40": "5Tz9PvnR6MbYrYbn2e1Q79fpjAdhCYJU8raLHTuQm5AgWePDpDaV18YXdzq2fXXJxG9UJSyWGFbkPCfRoMoYyDgg",
  "key41": "2dMqcPRwadphiQf7xCGiaZH51bASTs4nfqPkqmULccfD4bJpnqovTD7QwQc2XQQ47VTZsdD8eah9d58Gd1XronpC",
  "key42": "21cT2SPJi8iTcfcbhjfWSfaGKoXqgdXi7jCCLaSqL7yvhdmF4gRpz5LviJEvi2RQWaiLnNiiL8NmpTk3eAip2M2v",
  "key43": "4q8Cqu7bBVMKUv3ykXQfaNDcXjFRrY2yJ6FaSYssaUoALWYY2ehpHoeA75rpPEEshaJtSZUXxs7NBkkUuVubsnx1"
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
