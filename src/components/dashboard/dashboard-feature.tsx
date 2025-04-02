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
    "2GNAebFVWhKgVko4f4JvMtYgxeKFvVTUF4x1j1C7EKc5D5fjvZLhj8PdEKDYT4vLZBPy7peNNvZr6HDZUEEWBNrx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mq4D9AY5bWnrfSeD4b4hHmAMTn85eTzrJZBDokbCT9gq2qim71wFvviJi6bW7z3WNPXagqgebW4oJ2CLSAUUxuD",
  "key1": "58qwSeD9VRFjCeVPELEUibQHFgaLHKJ7L82NBWLLzZhE9ojWtxoVe19UXwstgpAzHGfUMvN6SdntPwzvfSogcRec",
  "key2": "REGaxqHMeAgeLFbTMvMvNM54kRadZ8kT5z3MBVgpEpZeqBhSyxJLnjAhNVqVrAc6HQWoUMSKsQD4tHaNDzkAWWi",
  "key3": "5o3cuTmfQEtkogkU42dwETW3bocEPqXFNj36HeBzYqA5FGxm1cpYvSKoZoJpEwbmtKBQh4EWfyeLoan4viwquH7z",
  "key4": "34Aqa7n9kYb4Q9nRK7LZ6hfqfxxmntvemKNzwr3TimfZMUJdTfutAMQifUfTcTU6VYRYZKZ5buYE8UAF5LqKXbMS",
  "key5": "2zP9zsz1uQF6KPSvwnNeeJKFFXEh98iip5ymnAKQC5xf5cHbb1t1HCfdLvHXnQEj7sR3CTRSPRMakiLz8kmT3Fw6",
  "key6": "6352kW7Xrhc9h6ySpZ8frGJCdhRUNLW4gMkhPKohuX2mSU4grbTfWi8o6LuhEDHEAme2rwX6BPo8u9kmPxJ8Wdk6",
  "key7": "db3VzwKT5HgXq3DJ53FE24K6yfRcj6WrS5ybMJ5YSZBVNPZ7HeczZAWkWyx2XXKWTTYJJTiDayFNpog7bStnsWq",
  "key8": "5HbonFU1A45UcPhuTjerfQ14GivEVH9fjhaDSKPLceVLuSHLnJnDpnPoFJLZFT9WYAuPpGGgZgtZEXwH4dtXYSAE",
  "key9": "3fLsHpNKoXP92v24SoLLfrL8cF5P1whPsPxk1SKjnv7gSDrL8kLScssSfZrQhpGNCda73Vy82aeYoCzfDoehvH9Y",
  "key10": "4wZ8YMS5rgrXrdrQ5X3G2CCwhQ8ekbMR5md71oXJejkG4xChsdR8TYPmWkTf4sNMpFv32oBsph1Tuna1oyY7c7sX",
  "key11": "95mFGZpALV8iNdPnbrN3Z3GUqauL1rmTSb156h3QYPT95WFRPdQaz1wbs7cvPCYgwiFyQmS2Jf3Aa5GeE7Fh8uk",
  "key12": "3tenG64YHPT7fLwz5VTYJw4LoJsJBYH3md6aU6YMNtVeE39BvcYPeXEG5RvKtEy8Au7NNAAQu2nmZ6bR56ftA5fq",
  "key13": "5y3QSPCdwnHN5yXHzKEGm3x7MNhL9DCbQgtRWcBNMVHdPzUHauFe8jN3ra4CMmNmSTsCKe97hQYGgjxP2XwuHM9h",
  "key14": "4pUP9DsDPSZ35ZS1hVKKWUKwY6TMMPFcEU81NEP5gxqV6Thj2M5FRrnn1xeA2gUhiYUrZCD1RPEZqLn6j28HKxdi",
  "key15": "3dzG8EpmQ7N3YMo42u4RoMpLHNkMsuXHoP9y8cATeBibfooGxevqAwCTC1FabyTuquWhzfgdH7RgbgEzK8stY2jZ",
  "key16": "MqTNfrKLBCQ85eWZBaxTNmzbTcfmnDNh5qC3Bzx7Mr4iBdN3oVhLhj2XZx7szqsBTueP5LKuvKkaU7EZHdBFzjR",
  "key17": "gy8nuqPBUHfrarkbdrLhpUPpnf9byAT1YSf7CdK9AWvTogL7T7xRxeWCpY7VyNu4FuWvuZEiA4WgC8uspDWJwo2",
  "key18": "3oXGL5suZ3vYC3KkUWZHPDQAswS4otAsKRXGP85XaNyZW9RkTTJtDDcwwRZfHsDXhLKiyAocf8UJgH64U3oLxLSm",
  "key19": "3pdMEWeEYwYTZPBZMxRGZKdGkqPNha2dQZDdxEyC6XjNbrUi8J79aREqP8nFpCyC6y39GspBgaXbaNYYDUPC3B6y",
  "key20": "UXi28Bi4bQtcjNpAAVKojpgMmPbZGgBjA7yEhr8hBRnpxzzpDNAWYPDMLtJFoxXE4yJkqHyoTSPt78kpNFugzbb",
  "key21": "3ErV5s6TekNxYam7QsAnvg9Xp44NTBTGv8mp9ihFEVNsZp1jswQ7JkXXmui3SfXQcuL1KM2kSpDCgAFt3MQ1Dzcf",
  "key22": "fMd6MWMeFheitpgkRdEZ4ntEFFkxrHUrkivjcpbHfX276BVgQyFqSrLybctD6is9Bkj1GUX6TCnjNmUQhNg4cnz",
  "key23": "51xem7bWKW4LFC4bb7cY9x7wZTg4oGPdp6jar32aGQDyvGSYrhp6XCEkkmaTspTMn1XCNUSdx9oVf2yRUw5CZJuJ",
  "key24": "VVL3StmzqhppcETFGFUDV5mteEms1WN4anKyEsr9JomLEYtLkWRpsPhaEaAWR6JEaGRJDREjiGoge43vDg6JwgJ",
  "key25": "3jy15TwQ1NKMGrqPkeUvUEK44YRWJHKGjJ7ikrPT6zbtKzRKrop32gHuM1SKUM9KEWjAZtPYRZaJNtyMdDiWrtML",
  "key26": "9VNiJZsKSFAeTrCmsmmf7M9gJU2ptTNyLArDAxiuokjeV2aP8q9KuygFHL5StE5HE3Ydn67mtkUe2quKGFYZtxz",
  "key27": "276kzEHpzYjdVuouLhM2p7JCEnuPiTwcAgzMhqvV1Ef5yEheSnBgFfofuRFj5oUB25M4bcKfiNDinoyuB59r1B5d",
  "key28": "3VKgt877evg39ma1UXdeY9jkriV8oGm3WMGELFMVajXGpvBfNige1MPsYhYtPbha7xyBsefbg1M4cXFTjLsQpNLM",
  "key29": "3yfhmruFrSBUnZG9PaiusAaqWpuXbERRGWJKWe2A4KzAxK6MBfKqd2eSsQU4rmhfDY9dbQuHXUKbRPiY4TkfuUg8",
  "key30": "5RW8aXQwUYj86ZwLo8Ue3YNjAn4qcJGjXGEhooMjgwWSQwcEvpgXBp4PQCERkzWrN8Yb9JY9VrzeD1gnZFqZNpUk",
  "key31": "2GVUB8LfGcyFFjQE7fkpH23icGEo8Ry2rDrgVVp3BHwQQgSGTgM5GVLLDxmypTvQXy6Kt9b4sBWvig7FTYg7fcKw",
  "key32": "5cksMghK9vduTGp3rk15FP5sp8WXWu8c44vRuxNGf8S4k6Wbhdofx9KipvAzdnmj1aHA7cHQTXzop3o8PQwARvGs",
  "key33": "51tiFd53NA3RD4SvenJYaPQVvVe1uRCm9q7PuE4ftvqNhf77vrtFr89EHAQH9ofZSvjEBGXratKFy2WdGtPcQn5Y",
  "key34": "5Bfdnu15ZTT3kCRL6BmaaQxsgjdAAZj36pKvpXN3NoUhh3DNPKncFf2N3tThyyuV2XdYStERHYFP5vNS6Nt54xKz",
  "key35": "32Ex14CeQ6kZcKNmhqTZ3Gy9TpVdSNTa2VBvu48MoGSjpSTEwsXVJXFsMv36kGST86gRmuuEMVHXMBaMtNVYAtpg",
  "key36": "4aYDy5xtHVuK8FH8grdVc5Ftuwxxp78kCy2UmERzX586fbiq2pEyrhjpkqyvEsuq82zCVwYtTZSqQMDLfWLkDK3t",
  "key37": "5KytmkZT53hYQcLzhGgqqmTMJrBgytbKo4aMpdTjnA5Se7L1wTQycHzrjzNVWFJryzBh6NMDcV4zCAhbt6wqWtNQ",
  "key38": "4qXgBZaaeNbtx6BHpD8r1hRuEKjrYf8EzMQ1XrC2ir6pJTE2D9sjjkw3rZPpj6mpGKHumKoPm6wegBQgJ7ZYw7ba",
  "key39": "5FLnYnscAfXwbd1SxXtkoW44SajKtNwzMxpP7rJrmxycwZNTAcxT8f41iUXmJjpDAeiosSrbe6HhVUr2PS2hzeae",
  "key40": "4fREchCm4iqyQ46d6StfktjqnPdKDN92ew2zZSdqRpBoLQoyZV3PasQbpS9XADv97XyVmmTu1nLEnhZaySrNjgpV"
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
