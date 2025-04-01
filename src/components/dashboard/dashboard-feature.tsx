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
    "2WWxe6xes92CsCYNVCCaKW37okBU4t9TFyHxV9rH8vrmRU6tT9J2wj71Aon1xMncL1sdArb6Hmt776iHg9oeWtKS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ALJcGaCEEpPmp4of4BXCoe1GgPdT7txUQatPzMcjw9fhV1aGLxJbcDoV2yifaoczKog1YYg7DqJaaWgkaTc3Qfg",
  "key1": "4m33aQXg4HpQXf7N52bjLL464EqeF1kuxAhq5dfp1R9f8o4d7xyN3a4J1Y2pKrN4x3BuPsB4R3HewQYV2qB3XusF",
  "key2": "2QPMPF7ECbqg51Qt8HNdH1FFpPG6zGDNrkFb9w37DdJTbCbLKS1DinfPU2ueSjrwcuNhtZdGdwVbTQVxi6hahfFr",
  "key3": "3Jb4puepvYQ87X5BuR4H9s1AxxfM8hNcfuxFWeWzkCkzuF4MuY5WvniHcVMAphk4LT9EznaAwoCjXkaAh4Nu824i",
  "key4": "3fbLm2ADzFTzSQ8KLLuCVfT5vuAWp2LVEyVQGx9ZAGaawW9uYnhNSGxxiKJHL2ybxbTfD87qGQ7e1muWFYLCT8sw",
  "key5": "33bKGAdNtdo3maWsZxxophMhd7YxWLENGptAEQBLwmUKFokTRJDT1Z28eT7zXZXC71SPQZaeG22gG961QtTBNUf",
  "key6": "2UNJHNrki92oCHdCVvNY1ovQMuZoGMR3S6R5PbQzENC2jDSqyGxuPKg8dCYzcKEiFLQrLZh4TwsJ5M3HEQY9QsQz",
  "key7": "sGKz248UeJkR4Lik65X8f9TD7PXGCBjtj1dSiUcLVFQrVQqrWjrFHLvNSvg5bFc5xxtwrNUnEJXi4thEWYJbHsx",
  "key8": "Jyp8ZY3nP4E6YCbmhtYfSWBUsMyg8xUcXjGusrTDSpJG96nS3muueWbPpGCpdfLvrCVZMB7EDzkaVAQwwNGBCz1",
  "key9": "4dw6mWSvyRvhBBbKbUECRPQzEG77yWtPyE4b6699qWXbEA5tDG1TuwEb8wjSTTbgSTnboeVb67qwxa6TtnyhxNHX",
  "key10": "3akFnXJbuCfrCGDGUh1nkiMw6zegSBGLmdsUuttCkw2penoUgtUzj1kYAP6SB9x7D5s1B9gLMJAwrkLf7q2gQLqt",
  "key11": "21utuyevvKynA24pY6ThCtkuPEszqcPHLn4wzGKqFKHGs1njMjJsXrmCa35cXqSnouWLq8AxoZBJRcDvKNsYezuD",
  "key12": "SLtRStHK9rKf57pHaeGTcvKN936DzRfRs8QFmC6DWNM5waMVarT1rwHMMDgsB72g62enWQb6qbUiEzMdrnSG2Th",
  "key13": "59HSaxTpbTKmJzrxRngAgg3RRGYikLgZi5SrCXUfEcfqWGjafCh2mr3HQ4v7uq9TF7QGjUzWrkNCDJftBCcJoS3Q",
  "key14": "2nDXmsxysLeVzgRMC5aRTsZHvLKd8zqmPu2o6mLAevgXT3fCcJ8LSzu3fzN8EFcX7u45NHsB4kyKHvdtyDLEQYbX",
  "key15": "31XKtQJ5iPoB6xV9eXmiKa8PSCpXTCTfND1r1NJgQLtawXRxqKok7GDsPWUZ24EiMEJSwDG99QnMP4WK3gi1ETfW",
  "key16": "2tZjEQ4vAjNTYmhTz6v97Pt3vKcMtX2yQqRtE8GBXMg6Cps59hmNHV9Rtv57T9pTohJzskdP8DkvVGxbwXfDPDD5",
  "key17": "2qek4Yuegtt1gxo63SxJEq5YgGUSQZi6uPRoXtkRU1RERRRRFNQXTqsaZkxRm4ouvQRKDZop2YxCac6sT3Kss6pA",
  "key18": "2pMyhuQrnPotErJ5sBNNfH1HWcnanBYPZ8HgTWyk53JN4SZbipR4YXiXeyrzbb92YrGz7xKUyifqYcYEbJhRiffz",
  "key19": "ByMr7DZ4yBhNuBAZ2nQHELYxGegVoo7Tac3xceMt7fuNmwdbmNZqAPKrxgGJdxM8VnpirgsFXBJMYjLHjzgngb5",
  "key20": "2gJXkrE1uLxr4eM1tt678vq42fAYU3jDPKijWvXRitfX2CJH9E2xTk5JaNbrdUGHNrsWgSfkFLgqbcCTU5BrtZH3",
  "key21": "2gn4FsMHvBraGGjxWGUXxiLrceuQDSNw5uiWt2q8b3GRsHLTCs9qY9neWGvBLm6RCejSHVwrG6GAr6MUpKP18yPz",
  "key22": "4A8bg3CCZZfPgjnshHjEiQtesvi7q2rcSvLnGbaUjwyby7js7FJA2iB3KxJW6RVCWjEFj5yoZcUKdJmW7ykSARiq",
  "key23": "WnLMfp9YgrgTzTupAUi2xcYHoaNCRmGGiZByiacT236KRLiJ6JuHwgm2CJm4hCquBSNuTdaz7pg4EBXSWTDPxKJ",
  "key24": "ciMKWUVL5JBTcVZ4o5pqj6x9JZ4tW6kD5bwBSZ9z5uACbXm15iPuwosRijmLyPk7LM5SyDJeeKTxKtT6XEW24bH",
  "key25": "5P1Sw5MwXkpvc76q2772VMoSyAADHdnPYBScbDrwb9YgzGde1MPxr8G9w8NgSVKUuJ9SueBiLx13EQUWaNHwxfWh",
  "key26": "58Ws8pfRX1aqbwWcmzj1Mu5dNaJmVW93Uxwk7XHHxdkX5or1WwVjmhQ15LZoFd54jcSr6VeRa6X5dNyNKM1tTznJ",
  "key27": "3q7GWDTSDm9T2DjbcGpM7pvUvRoTiiBRHpMeDn7ZvJF2b8T66kxTYZT4n8BWfBDUiTqSD9DdbpJ3DaELRg4F62aw",
  "key28": "dnQ7TB9QniV5JrBhzEnMnaiK3RmM8urwQJFkeJkRJaD2SktojYG6VjDpQ15X4zwqmcduMqtf7hhXgQ38QtnKDEA",
  "key29": "5zHX9smcFx3ZjZGvYmVAr8dZUFmDFcta1cob32kPmQcqBNuesxym7xx7VR5ZcFf6WwrwogWY659KQbQWi1Z2H6MN",
  "key30": "3ho57b62R1eu2j2fd82SbpafTmHSNSXVqvKaw63HAGNxPgNhHozTaWJYeThUzKt2LkiigKK2sW2Sbnr7Bz2t1nQc",
  "key31": "5yFSErxcU5YomhSK1JnTopu5TMkTPV5dUDdV69svU19MeJEQNeoREM6napeny7PPEkGCssDEszWaaPWQGb2af7ZZ",
  "key32": "3WuYv7YuNn2gf8ohyaaey4MbswKVPH2C5qZmAL5WaXno4MejyaRz4huByDH9WuDEdT5LsjN92NfmgFTgrRBsYw9e",
  "key33": "twwztPYVib7hkaW7bXYjGuUzeSVVA9ot3Au7mgFzk8DJ3D9qvp3ATN35XGFVmVvYJDq7MHzYX4dXRmNXcaBu42i",
  "key34": "BqE7hVctt8T5Nd9kgTg5LodwRpEag4KxuUQsbfWLgyDXucyQv1XBh7RfJ1VCz9BvCXjGFaVro8dYucQT1FFuYza",
  "key35": "4f4HtFTrCmQ5Q6HGksk5mErRQvXgFjzUkBn6FKF9yMrSCyV26HuwKZ3EoogKHMs6t8tSJkqqs9o2SKobiqXdmuZZ",
  "key36": "2SQYk8Pc5G2bYqVBCDVVVZATXYUYHPMEJo52sjcjvdrAgeGmcyahozGMQVSxPckDKMYaB2WsnD9VTzEkzbhhspbZ",
  "key37": "28i2uDe72DTFn83PJGQPZCVDZqRboVFtCvF8ipoNyPfpBSTh4oXS7Ui2rkJ1yH79L8nJ4Vf6aar8a2abo7PriTAw",
  "key38": "3TqPNHGYqWYSBFbpThuTReviPrwqsZHMqKL3voLTEAEewG89PmVcaE7TsxAVEprMP3cNwzZNJQ7R2obfdv3T6gj7"
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
