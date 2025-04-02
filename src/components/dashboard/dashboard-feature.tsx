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
    "uTsV4nYfKYTE27M4WX7gYWTP9hJ2RauoRHASGAhbTGpsrMuHkG4iW5xfnfTTRdCBES9Cf5TcAjK8cbueESzgJVE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UmByq76AkL5E3nvnu2TVSQgA5gWKgjZ3ZEY5aJn2x2tDW5pmE6msdGMySB4TYHZkYc4uCufr3jPvgrBhjTWfUQA",
  "key1": "4Sgg322z4tSfQhXXiZm7L54kLygrKkuD8kp1mo2D1o7R6dqszZbt1qE7m7t4xNYPkuaAQ8Gb1GsERPA5LSAmTRQ8",
  "key2": "4DS4b3SRbk2RPyy2i518P7nvw5gtxMLgBs38wrstoq9KT4mpb3Vy1L93Kn9TCW2ZKWVW1eZQgFnMTP6RR4XmwezD",
  "key3": "4FPfnTPR2KevgT3vYLHEAb7K1XbNw8QUdNixD9F6cvrMs9SFG8pwUWaF1vPZ9LHQS74Pzz8P2ZQnsgBi8Wg9iJNP",
  "key4": "3BxyX3rCHB9HaA5vfmsNJ9rTZwQawzf41sdD3yEY9fbN5hDTCXpCBUFss4LqvgyB5oHeVP1W44noTRVVK2eay5db",
  "key5": "3S6vhAeNV9xRtsZP2hyDcmbEFCZidGNDwqiiYGu8jxDj7ZewQtnBQ5LLtvzj7mKUf4iyqzk5kjGRqkQsYvk4XHWp",
  "key6": "3RKUJ4gxvrBorKP3gUbgyJDswzoLBAphvtDPBMtZcnYDn73qyTdqiXmJyRDgp1fjZF22ehz7Xqacs4MkqbonFoG5",
  "key7": "2hNjCdBrZLqt7S2idRDKhrN2e5npcGanRsBop4mqLckKyLePa5rCTXreULamfiffu2594PVNnsBmyUdcTxnDWwNv",
  "key8": "4C783EBB8HYwcMuo9WYmaZGagCNEJbnZ8gr9AR3q26DqBQFcj8vfT1L84CtSizzjF9hFNvVZEdkrzoCwY3LPr8zN",
  "key9": "3qr4pW4uiwbniFjUPb24FiL64pACiqvdXWbBtiD5N3dKBSzKz8dTCyPMuQ5got5uS5yE9a3jxN3DF46DGHLkzSCa",
  "key10": "3LUryHffRSNeftUYr7iWCvwffN3iTHDhfVQEfYorjy9GGLuLuaqRjFMM3ihfUz5ggiTMyGW9otmcKvMbm7ahpKq9",
  "key11": "5TXDN2x9cySdmwqmrRznx9UcmtH3D9GKYg5sHyFf2jsCxRMERWaXuaiFLJseJLBAAMwGCXmhgpwLBQspbGzATwe7",
  "key12": "NDfLYPhq6zxj5JdC9qU3cT6kTs86ce2xG1Ldm4W8GsiKKo9RwinArCwcZrmtAxWrCxCeDwzf2Fk5n89kc717zd4",
  "key13": "29vtfzwknbEjPi9qeNxYhQsUxavHqjD42NFyToc73GfLo1jwAcxQ4pXCzPfHdYvFqb69RcbnQDDWMXpZQnpxoxfQ",
  "key14": "5h7WNiBigYRpZNjkhwE8gsHA53FeMFHCAYDQVtsnVnT9EfhYHkmBEDfk9YfV3Z1zoKHf6G1iA2C5mVQWX5rb2kaa",
  "key15": "5jdPoBcFkStGDa4NUb88tDGom2XKnQ942XniSY6X9qeNrJHQSh77NihCkTgzwfx3YKifxvtpvKSde8kgxnCwniWT",
  "key16": "hk71rB85PYHW7aacwkKaezet7JE9ESGFKBU3MuXwXpq7AES46Zd6R2ux8JLtuL9Re6pTrQFWMiKPoxdjp42GhxZ",
  "key17": "2fCWtknM4GdsRGzuZUmpiYx9u77gS3caQx2JDCQX4Pv95f3nhdTUiDy63vQFtQaUrHg2BWfnkdmotCfSuSF5f1D",
  "key18": "2HhqwgwtiMkmQYtQCutHG1bLaRzwUWMfm1nz6sQ7yLGbpesyKMAhZ9Fp6y6w5tuxnzhC4LbNy5iGLuqb8BsUoeSe",
  "key19": "3YW46vDcyYrfuXimoGiFRor8DCgWLq8Lx7vPs6VawXiSCitj6zhH9x3hnhB472NbgLVxMwXemwGGPwwqTuPBrbDw",
  "key20": "3hs4aKMZAHYWU8hvfo56pgr1Mv7uGfWxoA2H4BLsiQPqqKXMnCvnXm1ka3DK9kutignjsx5AMa695CQQVjbc4Xmk",
  "key21": "2DDHsUBDDZ3emC7Ebo43TPogRKNzQLnD3GNPLkP294cJHJygWCVhXdH8MgBX1vsXuuX6XyDUy9itccDaUePahmzG",
  "key22": "4LqYR5BfsDrKcFXuLikAZsCA46UU3ts7Ytq9hGw6nCN95cmdBa2igqJWLMRTTRB6zkibWvWxWkR6okU2eZqi6JzM",
  "key23": "5Uk11xEeSjqanuCj5Qjf2DMzqLSKoiucSBpJJ6W2Ne7APWeY312j8R4PMqLeyXWaUsTj4RpzistRrov8e8msqtec",
  "key24": "2X3tmJoodHjZ6yQX1H1m7gYpCGWVEpwH99V1DjEHCTSGXPTaiRfiDE5rqcGAnKqsE6bWU7QdT9G9hpoPr31nLgti",
  "key25": "5fNT2jjWZMFiKFQ9hG3LKMYZn4VE14vfSDLV8xQzy3nqtT1MsFnSaWGSbPmHH3Qs1P58VPuTjzJTpB4Y8aWZZr8k",
  "key26": "4PiYvTEKTVBcdndTfJSYQRTTPNPeT7NnZpixDEL4C2W5dMXYY1ZcrNPihKfHTu94xgK15HX3nUJcAppZgRVDvAJX",
  "key27": "51BhtdveFXHv1pC5H8QjKmuhUUsh8dRiuL4VDJSD4m5jmHfuch3NSR4Epj1TRrQ4KUpkR9aSzXkhXLJxrRVeq1gZ",
  "key28": "2G5d4zUnND7WHeAYxpxj4J6Bj6GCqo3FSSLVfBcLG8Lc9ojc9P4gyc789rD7mJUUesYjJQrDW5TUJvNEwqv9SbaB",
  "key29": "4kWJJshem4kShhSL7vZLU6CEixoznVBC2KWv7dGVcqR9Yn18dj1YmAQcoPSyprgWQJYESHSGb3aNcVozyhsS9pQF",
  "key30": "44y7Xn8dv9x96XZBP4GutxUM6TjFBKD8jPaH9W1DzHPmZDN4N2HtHparZ9HiALyotm8dndBfEmHULMSA5XTZYLxQ",
  "key31": "e2xUDkSrHztRihDEsXrYfHGkehs9NwPnR3so647S3gW6VuiToXE9Gevi9VsGGft6j8oPNS5GCNiGSgA2Vn3Y7Jr",
  "key32": "vVYUuQYUnjb5x5EdrqJNbQAt6AXjSsB8NUDYBRWa9H9ce1a33NdmDN2fciEpTC3Khyq26AygbqFS2LjMNPEiTFS",
  "key33": "3uJwCkLn8xEXS2z9Lk4D43JmWMgNgetXz76t9W3E7X4WRH2kYoTQmejAhoLyGSwZ9WEkL5LMeumiD8cAh3xrb9r",
  "key34": "5xyRtLMbCGRBCcwgaVckst6sVamfHBUQuJgaDswBsQtPTTrFsahMHA6c218WdVZ5GrbFzn6FjihMF8GwhcZkkMwd",
  "key35": "2VEsHH4AJbbe5acuePDBADNrsNYr2Wr6j6ooTYxTQRdMLpkwWRJ71Du2P8W4rNzBhG5uaX4qNgQXiCygVcQtrkyH",
  "key36": "5a8aY4cbD1hyBH6FNN2SCzpuLRpwTJ5qmud9adLyVkzZwJJ1Z7Mhn4F2Pw3kXqUnuPKExAQrJH2qZ9vzxz5W57qi",
  "key37": "wAdUvB39zAEDezz9nyzuzrCM3KU8DkSjy1qYLygHVKm7riASy9c8bau8WALXZybv6VvCVre4XWrXxNqTHBg6vkj",
  "key38": "4nSBWZizTLgEyFyKCWST3LKLyH3fmCAa9UQtcUNKrM3t3krFRPxhqYnY5372D92eonjEEGAmgRCT58NDcWCfeBaB",
  "key39": "4wL4JttTQ3mDHahCXhuAGV9myZB9KWCcBTtREdrTiw1vqxW4kUuYiKe4NysQLZrqxXUUqeyZpuTbcCiChJmY2SzH"
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
