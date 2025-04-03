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
    "247UftorKJLzuk2hrx9jtHQesNEgXSTYXN14gbfcNf4398SXk4J82HmnjjYcU1bKhhcrrKF2YxSpM7KapSWaiaP2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pVGQFYc9GM2dECoVRrRrNuavj8zfuM5whgx7Z98Ge3USBoxrQLh9ZM3haHX5mhsfD6cH1TeRbvyagKYBGDwqbxu",
  "key1": "bZjUzF3U2xsyo6G4AEXVkS9axRHz6P7kf2SDKUFPkZGuL1thv1p5e9acYNXyjuSEZ4oWrUMxkfX9zY591iWB7wF",
  "key2": "ZpwuEbc6m3BVaqifmXRLP82UwAABzHEQVfLitDdro7SzHA9zMerf1aKzgMfNoLTrWPsGWUPKP9sefhKYwC7QDqR",
  "key3": "2jp58p5jHk2WUhjZyfaWoLFwEVLjtHWGEjCduFVyfh93jNAivaHT5ECEByPc76TMULZwsAzW8DAVpkvMLH3bbQas",
  "key4": "2vxSQ8R2mD3td573rtxoTrLoKRT3pTkFhcqmNdAtxFNBMQkqWG253QRmYqVvKrGaPyn7iegZ2jfJYn6FvSu8rL3V",
  "key5": "5Qoepdyoq51efXiUD3HkCPESHnUbr6nx735npBQLECuPenquGANsdKSX5KdNxzraHKt6qZLdkcSkZbrmSetYobjX",
  "key6": "B1sEn1uAU4om9WcU37q2N7YgEcjAu5wUbbwwRKXwLUDCmDaiQwnrojz9E7R3zWDbTD5DrNg1PRa5Y9YXtTbQsrB",
  "key7": "mYHK1nAFPiCnpubXyCE7xVk3rDopTu8jZJo8Q18pTqRU3qLf78ncgPnH11FWNo5H2a5e7RSBboM6oSdZ6UAHfTy",
  "key8": "29f7q56cta2Vn1i7pzDjdyDdpooTarDLSiiNoejf21UcwrgmQsWSacx74WMZ3LeDLg3wdxtcBKBfY6aD6vypoTwh",
  "key9": "4N2nhsnojQ9aTWwhTja4KtVesWunNrHoLSm8ZXAzPYpiJ28jJZzaCpoT82jFa4znuLxPgFYrBzkWk5fqqx42gsTG",
  "key10": "dHvgN3niec7Fb2zPRY9s7MUcahuq77NunZJJ9uw74NAKt8WQLUFzSktjmmXBnETiUzaY43JhiGycvH1PDRFU4bC",
  "key11": "2Qx2rdsCTN37P6Z3YXHsx2ou85wcezKsGWJb619cb1h4AV1xP2Smjk3ZTuiFjxwr4jSk3Gtgx4GeMwAqqLoDiSHj",
  "key12": "aNjok5L24AkvEaptDnAhHRvLA34iDevTmF2ebsQ8arYU4dTG9rXAST1AcxwDMyy37V3eXJgk7cFsKg1gRMo9yn5",
  "key13": "KMEPgydemm4dtnZ5n2XeQSqoXHTCqzJZHLNxoccctaj5baHtoUrxvRjM6YdHvf2beu2XhvJpvLh63dVqetZ9Dpx",
  "key14": "3V9V3ZsgaVRFDLZc7tMA48wJGZvKLkCxRYiiqvzfatYFxw9dseyMDdhhZbCv8xAwHYSwtCVNmCTaYhf7xPPpSRSD",
  "key15": "2HZqL6ZW7WmUEq1jzMTkWuwnUwCMGKim6NiPNkE7Rr9imTdHC8oMT4RjnsdMiME85adAUJZWrxEtawF3KqmhCKvZ",
  "key16": "3w9inr7yn6fsbt9PGf3WsgBwyvdUm53WdXiNbT3cX7m54ST5KVxx98ML7p6j8w32kAvyR1RsLjQAaFYVvCowSghK",
  "key17": "4hPSejCGQSmUjbFqJKsYkbcRkWFmdk7yHMMoRzDhzFEP4ZTRRMh58VN6mxsEt8BMz8ZtYHEKp5BF1e4T3ENYqBGP",
  "key18": "5BpJtAU9D2kMiyWyJEDgyic3WtMpWQMruiFhEEhnMBuDgw26auKaUX6Hi4sEQ5DZ28AzfP878XCuFxJ6fLk4NJ3z",
  "key19": "3eoFBzTg5ypPMhg2rHpiGtVTrGoSVb9Thedw79fq9zoD3x6A7FAPMKc9dTKR8AgxJrAkYBZhi1gA9ombSQEyKCTF",
  "key20": "5NEtjCPsBLgXbLN4QDnnvPzESZZQ5oUVG2HxqJvcXzRwfrisPSFoZHjNCELdh8jcB65abBHMk9UFKVzeZrBBfNbv",
  "key21": "wrP2Fk2pkV7Lugg5Xn5gEyDY6k5ujPn5bpMzoKsy3ZFNA43HiweuPadeByDxDmVxGhXTc6D9ZXZp44f1DFiwVKY",
  "key22": "4zxZvDMso6Nh6zSmH3K28Pn2qPUkrjunDdeyGSaRfiZGudjqq17D66K95DTSj7mCKApBKHneUzK5gynB1wKrVMGD",
  "key23": "55Hfof6xwYhtd6c3a4hug24HXrZnekF1Se46LSbNoqrnnUuFqME7jWm8FLJy86Luf82PTQMZy4jf715zvcbX63Dv",
  "key24": "3RoHmvQwNCZxTXijEQu8MyEnbMC7pbZP89n6eHu4WbwtKKbTDAHjWgFF7hjkdQRcbsF8fEVET6ZasdZvyCwD6M3B",
  "key25": "4wkaxBXNvzvw46HqEkaTDRiZAHW47qgqaA9JLXHktz911xfNKg1izAqmkkTpXdrCvwjPVp82kvKcQVcZrYFBbixQ",
  "key26": "KRyCGcpPFArGWeweeD2JfNvtTa27AyhZgqw5CDapBE2m8Eb4VdKR8zyB9LvxScca3UAM3tXQM8QnxsA3wNNdc7F",
  "key27": "KDcJ4hCFSAo9WJ4FTxiCzyfAAkMbMpaJuA897H3CgwMdYFCqNP5Rrs5R77gJS2NJ35E3DRnUiM3NRvBryLCT22u",
  "key28": "gcXkRkSeSKxbbYaPACvZNbDySeSJtEa1VZEkkinZUaaFosgKR6tNAcEu2sidU3GoVveKGZtjmvfUWuf2wAKJeq4",
  "key29": "bDKZr74Q3r3aSPxszhukqFisfAgDtnFvjDRUyh5C9PQaXKTc1mPsPzfDvjpoT7HJjEYizRuGaGRg7xySJKF2ARN",
  "key30": "2QtdULpEEgt4JbM8f69cMUZwVHGWddmBFsDg9uM8wfY2ZgFLsWET9V3S8gWvMvwyKg3VdistWmo6hhVtD4o4kV5t",
  "key31": "41TUH7LhRtzfq1Tnoj9uagsLUqM7hizit1p31UR7c5tcYaMP8VEFs8PXkVmeksF6sr3HEq9yePoWjN2AQTZV3a7f",
  "key32": "zh5KY963NMinAAGDjpoYw3piuiRReKwhfZfKCNBeVwfN94YSN2C37S6E4sxD2SZLhRHXcDYj9azhZZtYPG9rSbn",
  "key33": "55nj6y6G6HofRcGnb7tEiVxaknQ5sfih9T9CqcWJ2zGzUTzadLrC6nRLdUY6LiNvBQvUPWJyzgJF6b7rLzrbMzzZ",
  "key34": "3D7ZnDuwEPjn5teTar3dz3PR719PDvXeGGziqW55r46mi8WyCTJyFtaFWQAg2Qfk5MWiKNN4Ym7YtgsB5me8rvJD",
  "key35": "5xveybUtzFwEuvX4uHSYupWdYWoYQsHrfqr6soGE1atgKbXRE3JBK7irwVBzrEieuFCVbwjCTLvMg4EgC3YamNeS",
  "key36": "3CXs2anARApCTMU78QMNLSP7jfR9kP3LoD2QUqZ4imx929rXzxhHsugQcwPjGX8XFq7bZW34uWrWsVwi4PsrQB6x",
  "key37": "2iwust3pDFxv2A6dh6XjeLBZvRhUQr77UaRu51MQ3ujW5WtPcMG1xv24NKJbWN7KWUP7Y59GwUMyN3A3rtAdb83M",
  "key38": "5CKQVsGVqBhp5jWgJh9RFFHKwHNRo5Vu84Tf9NAHWwh4GQ3jyWRESiQo218ktByCYH6kZoZuPJcrjehzo9Ao9hur",
  "key39": "nNnryoPwkn2CLQwEKf6tWSSu576yUV3w9iH9kUKjwfR18XE7CmLD8CjaD8nsoWdDEmynBx3ywGetJuSGr4tdXez"
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
