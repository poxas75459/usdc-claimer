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
    "4Qvt9hnx5SF5T7omn7iendx8cFSpeRvBnPpA6doosFW7AiguEDt4QszQyk8oQ7otXQBCFmXtArmhEN2CaWGEPzUo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K2jsCUiKwcTk9h1m32yUdwokV2bL7F4upgt9UTwewQ2fQB5Crt3Ywxfefe8A4TcPFeS5waknGU5h8WiXGQLZ8Nt",
  "key1": "RzoeEsLTVB8XrUhACeKGD94kRdMDc8qFA8PPoWU2u4N9wWMjHMrqEAZvaxgGAyCxYaxGkqsmU73hVh7EKsuGtQ4",
  "key2": "5oa4AH2p2KiKSA92FMRwMsYjQ6FufyRpGw7mCDUg86KLUVr1UriAuYVHDzTNWy5KD1mSKjK2yk3PodkMz6hhCPDC",
  "key3": "5upxZp9qDuPSzDgJdzzqoQN7G9bee1wqZcCjmXiiRscgSsN317J65NV3R4fkLthAQvDhUfp7R1CstpP8TNK4s9To",
  "key4": "4TiG1NJpYQpTt1PmGxGQj73hGeUKZjqVah9JXbi2GghVbtH8uPdXaeYehyDnR5APFeM2esLxpQsRNE6CNYiyvEet",
  "key5": "4fqXgsq9UUGA7jM2quddNbEs4oPfS2EATXEVmHiTKJzwRT5Bfx6Nagaa7XD5jxmDtuau11f7Zh24KxdBdoqjx5we",
  "key6": "2yB3LAsqAm7mxFTvHr2PkYbAQp2WTAA89pXoBqbr2Y9jdXQXrg1tbv9gkbWWt6nUnKXeLNVKKFo1kSffcyzERVrz",
  "key7": "3Pv1B2HdrJT9P36DhWCXV5zdKtJD4f3xcN3TSrCMbEVqr6eTfD4ysZ5ToQTNy8j3y2Lzd81zbizmGymhjRxGaDwq",
  "key8": "3PFqPr3gC7NT1zkEKnDLkxoYbtcYrc7ScRxJ77qnnYTSxhNxsNtSEjdz5EPuDJJF5dTJtpUFUSehbZ4XtKcPhA9o",
  "key9": "KvfP5Xo2HGPkYXKKwkurociey25TjssDKZgw76FfhF8Hq5wGXLLW5qtXggxr1JXJEhBvMxYhGB1B1SLWujLxf9v",
  "key10": "5Kp61AXbHvtrZ3PLaBRyLQWKjyHmPyEvfX5Dh17SWTTCyuGTwvUqoZSHH7ELoKMTWPYoCesi7EsFaeWLYojUcMuH",
  "key11": "4m5iCEQTNjhXJ2Q7v6y1Roq28xgyzPgPbVqNsxnr54yg6xFjzxpftqCabDUjmYHNn3Pi8La2Jm5k1gkXoomBAik4",
  "key12": "4AAUEMFnGZxfDPGKnLEYDETYKaHodRg2TwF2jSGxH6FJv3GjmMiBHbiQziZdpYapW45tJq6T4jCXxMbaX3ThJcYC",
  "key13": "4Aavr5dNjRecWg5aqCQE8GE63G1G3jNm6MGtgkMpYSt3PaZc3fNhESbp3aMJoyiEBUshWJRyUuQHumdUFV6XChuo",
  "key14": "46L9VLjbRx51KVYWZM5pHjQhLLSm1i9ghunTZMedio1SswtyyhpzgBnb1i4XomhcF7dBmxX4Y5W9hE5Qvz4HhUvh",
  "key15": "3AtcEAgbvAZD9A6QeLt6yNXzmTbAwtdyV18rZgbj8GSx27rntn4v3uhGfYqcwNuCWGpydi99FuDeENzzwyNoVq1r",
  "key16": "2RB3heKqRLrBbHEZ7VoDqP42C7No2zae7z1NVv6BbWpAmwMgwRziEGu1pNDxfaMb1Kt1fSeTkggi2nWVGN5xXyu1",
  "key17": "24UeBhQoRD3ij69V4Xd6gMvW2rrWbbFgabEmBybnn5XsnSUR2xHfHVKa9GYMZPnGWdL7CxeEQ2kVGpJ2R1RiCyKT",
  "key18": "2Fyx9PxoyognQr67zrjz6LKt15JdMA2tq17eCzW2TbZs9Adptcb7UwmYsS5zxwt2127bSUppeJGZSKXrY2As2sav",
  "key19": "3gkQQ4oupTquDRrEjpmNjdkCHpQm7c3RJ9zK6uPUx9LGu7RbwqnUbBFo64KiAcjmE8SKgLDwES1wkZaHFa3fEaF1",
  "key20": "CBPZFXFFgevXjJiByuX6m8usJofUKjrZ5hmhZs4x8iUxuYusYYaxkzmeENRVEX5SB4NqKYtWE8dLaeojS4XarEs",
  "key21": "4fuukTSPBGW2DqmnsXEpjT1aBypd1BtQQ1N2xZygTe939LQkmdAeC5HJX23Y1mMY5G43TsAmdwN7BgN5x87qkJkD",
  "key22": "359VEork4ECjD9bWoJvaMvX3vmPy7MoNo3DT3eNnCku1kaR77C16RwTbd6BQQ2ceKze1J2EbBsyTzn2MupZFEoVS",
  "key23": "4pHJnycxXoyPBD3q93DdECQpArNkM9GdmM1bPXkYtTKPB5po7qyywjXWyPVBqFJ956j7oNyxdHDNyso9P4fZEbR4",
  "key24": "5sTvxU2mhJvExFtaMM691kerwvJHCamoYgwQRH4iqmSSvXfobXH9fSgdx4NxtFgE6WZrnudwdZVnPzX27GctnBrL",
  "key25": "TYMt1LysVecDsXzWPRPJxRTMHk5KJi9dZhvdKjTcbymi9p1bjtUhFcvfxyS5T8eKEU3rxLpeLWV2p8ywKTGpH1w",
  "key26": "4xzKGQRFkpFtJGDAqZowmsMnZW2Ue5y1C4kTDgNdHrT8oVU9iRJbcqwnPozZuidxyadoDmetyH4Va4vF2qJvM5JY",
  "key27": "UNZDENqtbrc49pPPtKswgoty7fu1JfBtHoX9qooYMsQYhDso4nDZgvEeQKkBAsMZhDgXzE4AttxDkDJAMj2zoER",
  "key28": "ojSnY94hkwHXvDTYZo3vY6Ab1DiZ8Hgad2cbKqwzK3P2qabtdfjvuamPTzz1tBuEjDoWKWzFcgnUB1LAmbv6ygc",
  "key29": "zyfEFUPcGi7S9jd4BS4ub1VCa29UMigg6NnGZushzNK2KuqbpWfPEdALQKMqxuhwRhsn4vtAZLit4HRwGEuU3eh",
  "key30": "2D31sHqK5Sun5JC4QoYjtpHR9tk1yhVGneKGnWSJZ74ntaZz4Ev5A8PSqePsVTM2q35g3u648wQk29sWz6j3CPCw",
  "key31": "265hqBJjPYQuGdmtLkRwkeGemZe2ULdiNdkwQE5wudq5QH7zVpfRhnaBycWF8EGQtmvD3uu74RTrX26siR6kChD3",
  "key32": "2Ct29m7monkYET63B3g47VUGGBX7EFSAsYYN4HJh1GgQgJkPy77vYUboFwwiLk67CJ4Dikv9zbmDTBEh7CbqEaNe",
  "key33": "2jbPUSgFTvkFR5ATR3BajVWnJgMHBoXsAYhaMy8oTQYyNY4fxfXKw5amqTDDioHmJEh6BePrhANTxyud3d2DZx6Z",
  "key34": "J9PMaqq1jPjCq4b58Mfwja4rpWii3JLSPojChE8x5JCT66zuWRNX5zvDA315UNPDEkHCNPMjUxgNLY9A5EwdzDV",
  "key35": "3u21HDALjQG9g6b39CBDDjpy2Jjy7SVRvBrbqumj8ijWJ3ayt81XfMtSp64VVCxTdXGzojx3cpVwxuy6vSM6Pv9h",
  "key36": "453sWcXFrvr7gkLMkj49FSVnWt9UVhtAzfKe5dthwuxxSVaZSBedYRXfKCfRF8yY9rmeD1nDFWyE1Az9R6gaV2VX",
  "key37": "2CBt1YukU7K3kTbXAydFKTLdRrvzFdhm9K4zBG9QJJCo7NK6fTZUQCjcKRA7pjpsMPxQMT3WgQ9EGGrSB8RjxmnL"
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
