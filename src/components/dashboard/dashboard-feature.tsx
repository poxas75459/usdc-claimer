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
    "5FuGduTcgtPcc1JV7HkQQNN7w6CcLMGFmYNPigeg7BRHt2cGRtvwzEyzWp1dgFgDHMdx7dNKTKvn9VRrKKg64Ssm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DDH53gEBdCmVMyguTiyRZHZgP5pGnBp5k34ieieno2c4Xu1gY3RFK8iVnAx3ExLanThhH4iBnBwsqzBu6n3g4Y3",
  "key1": "ogj73W9ATHN1CDVScRaSEBG7PoGwh5dtV9XbNZkLm7VSyR8cRRp317Sdq8UBtJjafDyGaPChxRBNjTXj53JTSco",
  "key2": "589hUZ31LACFE5VjQwRcfmERVuHQXGx4r1qfGF6Nm4XUqf8s16gbfKLPbvW21bvHHdHgfPtLXVKptRhigEyyZodP",
  "key3": "5jDwmxkuzPTpuxEoHpcKbWZ8gqVktfqnwMFr22uKBGCmqk8wxp2wzYAUnPzz9BTjjngAtWUKjB4espXNyX6eH3Wj",
  "key4": "2t3r9o7U9K7kZKGdS8jAwoVhaiZn9FAQHCxoAubm5Z6rWU5g3yeHX9xVgYhSuqbaSHh48Ag9WfiaFjKnxL8du15h",
  "key5": "4gqGMamr4Zku1gmedqMUMUxWxFYTijgLRQKT2STCrHF8TfZjM7P1Mk5iAZcZD4qJyz7iYzRAej55q2rXCShSbqGw",
  "key6": "5koMjzTPN7aRhCMWH7Ag4i3yvrUzweAg6bMuZmZH9kRUTcw5ytj1yzdwAWxphbogkvscdubpeu7uJW4BuekGhk1g",
  "key7": "qJuJP6N2hQTCSEFtRQh8jCRTmerxBuyitk1By1cKPKchNPUExZAEpUf3XJbipoxyhdNQF6XHUSzF8mw1PuP6w5C",
  "key8": "5GLUwiPbFQjVucx44Kgnx1GXNDCUpT3fAdp5Pp13MqKpyUBY6a9us6akbTJ55ExTQkm3aqgzNr9PgUoUccEARdXR",
  "key9": "2EdQEAbvrfNjuJtt3Eb4UtkJdjiy4KwjcWYBUkkijssoRrjuixM75m5Gvxm2pP3PnXZUXGmYoeeYtjV3spFmZQux",
  "key10": "2gbxEe1WFaToau3mMcg4g4CHTPUNMLMDdMZAREXiqMEvUWof2FrijZSkpLXCFBKsFw1RVvQDZQM6NTnwyzK7329Y",
  "key11": "2xD2vjEHxfM7sPAk23YuCxs3W5LsEsPh3h6PouCoxnSSHXzz8aR4jyhYsgTkwKdKRYhsc8umzjfKvuNWWzkuLXsc",
  "key12": "3hEZTsceoRec46LmpQr64H2rzfdq1TtAZsHbaeXsU4Lmk3tQc8TQtYN4w22p8DimSvVuc6Dm4MfnApsgn8x5Gs5p",
  "key13": "DdZ1UD9S5HLSvZFTDeGxgvuzi9DDrezD9Ca6JmeETRgLffdg2N2LrVKf2YyCb8u5aq31hMCVMJuJhn8fVerv5yR",
  "key14": "5XV4yLrDiuZgFxACg5qW7v7v59vhyYzqR6wHkfW2Lxrs6CrtAPRnBVBgv6arBuqYjxbPiSDp6XLUp9CQN3SC6KcL",
  "key15": "Y5SLXfX7nCpUDXx7LpVUsPvPgKR6VhKcnXdkCJnswABbTaVGM7gBWieuJ1dRg6wB85yStQFzYxLMu248SA4rgS5",
  "key16": "GrrnW5yqJF6LHkKASSYN2r9MhF27MjEmTpwn9vXcUbmoub3PjU3ULojb7gAhRAoBxoyA6tr67tnbERTV9hHH5Rw",
  "key17": "3rkwqY2M57AijbCnMJ51EcuNDG5qw6RSByWDsgyhsdhcS44MkYyHMHXPm1GvJcBf2U5GSisr1wzBqDNXhdKFRhTA",
  "key18": "58BY6Mh8JQKM4aAdHbcMsCPyjiP53KqwNjhCfRiALooAS35qMczdL86nfvaY1aYWdj84B4onC2RZKk2gGk5LV4jH",
  "key19": "TyjmamLv5X5Q9vtpAKMT3vxRDG1ceEFwCDAqJw2NCL8rturJs2bdRwjm85xkKQ9FxJEC1kvV7wLYq5GaGUfFJzE",
  "key20": "4J8i64JpRKfeCVsWU92GXTD2e1NrDzyjGnMagH1hyMnFpXJnVrnuxeaGbyJqK92QbhcHbHWEeCsKhjFrGWETTSBJ",
  "key21": "4uYgupHLyTWArYDRF7X5tZBm8Q8o5NSCu3ZVdsVB2WYkMNZPV7QNxNyfmFchUdmom5jDwexiAU89xGC6tpk65goD",
  "key22": "BWdRhGwGTzPWZrAANGC18GQUasB1BmLHs2oBNeB7PwSscnw9TbJXcz5tVxiWjnhu3DP3dZFK6Qt7uPH1pLjs8WX",
  "key23": "638t6S3GhS6dhMZCq6zdpRzs6ohdUcUKM2YHMDSY6Yw1Kauq3cxCrmBQCMDjdKmJxXGrNECM1UKSuUkYqtTMTBtq",
  "key24": "2M8qfpKR1sp2qrYeH9oRYagJfXSM5EyxdfAqjhDAM1Bscyg5xEaqvPE1mdw5H1Epu5s3oJVsjVKwtkpCVHgdR8Zg",
  "key25": "3tjh2DN5BWo8sMarg2imgZQgb11CNoKNUuY2FSz9xrU9pw3LMgbHvHtAnWrrAW7BRyhV5r4pD63dTbE4SpjFzqzt",
  "key26": "3FGF2NQG1vP3CDphEKeYckZwsGyPzVw78MtAVM4yM7fJFNQFhsJuyfLqSDqydP5RakUVAgC9Mw7vfr1C9HaHNthK",
  "key27": "3hbgm7wSX4qkYwSLxr2qHAXMSEhYG1ccWp56zFF9rcFFYcTnprpEsa6g4gJyBqi59P6jAwkLpvxkazsc1ZXibfd7",
  "key28": "33aqXSdfsxw2X8Rw1tguhtxdHWb9Mgr5AnZdcGUAWUyHgdN4rD4Zuz5KpMufm6mcnSZFvUJhEnZSgDhfhVVc9q7M",
  "key29": "5cSLw75dQfotxBcHDuSo2fGyVLXVQ6tC3tGF5AkQ6kY5LjcweR8iCK2jkpQdKo4MS5DUXT8tCDrKuZs5epFhS7Bc",
  "key30": "DodYWnzDZ13Rrsar7azFCbhW2YqJWyGJhM7scR1yWBXu6mhU7r65ermUxvxhwXUTRYUuSLzawzqr67KUGka8VAS",
  "key31": "x9FL9Q36MR3usSnRZaKJ84rnPoz4NsrdaDBqPR6oghphkbpUY9iAgTqfUf7CADrMVLFmVJSvMbqnzPBBavY6Uwc",
  "key32": "3eJX1sQ8LQ1RkGT1fWV58wqzjCPitNWaUohYbALQN2DoLu9yzggyaQJRAHbYFoqc9sMr8nz4SnCzEntXY4ft3a6W",
  "key33": "3PeS8zjsJZKYeY3draZLiSPh7qCUWS8o2LH7S3P4ieGDssyqrtf36xZShuBX6f56UT7DEAaQ1qsKnH2FB25TLqMs",
  "key34": "4RS9FcXxXRNZCt8S1WFhteefMPBJ545hUQ8vsXVS8FeYPEie97KNNedt1AiZUEB8feosoPg8NkGBXGRA7ZtmH4XR",
  "key35": "5c2BVrnHfXCspVhue7577fQ33hfZSUBzfU2mD5H6jEiQ7hSTKnbwGif16fgG6KcpDq7z5VisMHsA1an8mwXBCLHX",
  "key36": "24mq5hYCTGSLx46NSx5RwtXFF8ryfUekdZbuhuJ9kqcn7YgehPVJxh6Z93kswSKrm3N2sEitUWNEEXnEk6wcMpVU",
  "key37": "CWsfj537UrBtTyaT1iNmGrJLvRvsyZW1m3QRayxrtp9HmXGPgZCYMPmmYMcNBGGEeMJXzyBxftV2MKfpLc18G6W",
  "key38": "2xuzk9Qy9Z1f4ovkuwxmqJAXgu5xux1iAZNRnPnFjAxwvsH9qnXxQNmH6XN78ckkg9uEByWLNxVqQbFzhWM2go1b",
  "key39": "uxhJx73FoWeW6krNH935Y2QXzF5nCpmiv3ukDtBSmeyj7ombrPs7kiTLRHaTM7zDmPPCAAxsJoD2rJSLRCPVtFc",
  "key40": "2zCgMiiDmYGmuyLqn5sVaEjK6dVCDFtVe4xLXBK3SrUQfeds8ffmjKjwv81h1pfyxETHhWsXY9eb3CBRDy2bCC3S",
  "key41": "7rcRZ6YH6DkpTUTtCXdBLoo4USV9jUwFTBAPVhoLtxvhGcWXXvLnWsa4S2kqPcakVnDreqPr1KgDs6GdGj3Kbac"
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
