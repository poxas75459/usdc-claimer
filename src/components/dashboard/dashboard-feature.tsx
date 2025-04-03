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
    "3cNUkKZgq1qHhwbGeFcaLa7TdSB9GQcw4mmG6PYABjVL1CsPQfkgZmvUHYE9kjrmLv3P277i2kz6SE4oeWej4Wj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59GpkDmetG3y37kzmb1jPfkF4sYWh5T19MghTRuJ2QB58T67x59fT46AofbBpMfpqpuVxpHMmwp6Mg4MaS3mA8xT",
  "key1": "3Xo86bGssrGUUC7R88CvqCuRnWEJPzP3VMGiCwVcjTWsEWGL7nqxUvhkrc92pNB6AkstPtmUbejxhobP3cxcE4UX",
  "key2": "DK1ixkP8q7rnJjAPwNWw2c2KYYNdTGCrvXYuBDZt23WBFPW7hwvmjvQAFTS9VvLkkfJBimwgGJf9TWWKFGJdQ6z",
  "key3": "49Fg4Vx2JjiSeZsSg8TUqxxRJtzBpguEYy1h6x5y5ZSkywWpNwGi8BqX4NZgbtK3AfGzMVy2PSfp85k1ZPbe6Utg",
  "key4": "5sehz49riVXnWMQzEqpYvvRzSbgWY3Yr1mWzEx8sDbrq4k3qGbVNRYBQnbdDPrwDTET2hTRHz9uGwY5Zfe8HA5BW",
  "key5": "5cp1WxVdkyJWzCSLsVTn3ZHtNvKKkzzPsJmv4D9RDjcAtb3vG53dZ7eJ828cVxsRZwbuPSRkGv8spJUBAeapTwJ8",
  "key6": "2qJykiDfyrtSNPkMbMtaWgWP5mvm2Adzoc3AGUYiwjn1ZmdyhNiNfHZg8MXCAiojCXf1hYQNUWwWH4DnPvLDPw5v",
  "key7": "2b6Zm316ymnk3s33WAkk6aURvhfMBC81fd2yweVSngMrCRQteY1fqbCFC3RqF2nbXQVVNK16KotDE25PYA2vABPz",
  "key8": "3dzzMUsNhHjXx8o15FjTfeq1jB9RmUfDmW483CryBGC4VVj7ysgryQEPbVygJqZjLG18EMAEJxTjfffnyA9d3FQs",
  "key9": "2cVndXnZ2CRDoz6Ws849UVuzfB9q9hwe1BcTQt7g1vVXqNR3ac6HY3LSdkmVRRvXjxzonRD1k5nLdTVkqoc5GNbP",
  "key10": "3DzvABxvVGLvs4ftJocEsFLE2mNuQM6vUnRTzw4SFQsBPipR5CMgKaVNkPAN4vrFrj6FE8gVzKum9QPG5ioqaoBZ",
  "key11": "DbPojosdYo6sVhxtFTq3Tpg32dixPjY3i9PZQbzjY6LygfnBU8ZmjjHZRg1B7tcQEJe5DRmExt3sDMGRxUqksBP",
  "key12": "58YpA4Rpg1UgfpEdjYiwpRbAHkb1VFQZUvJsvKFFGVoZMpfNwgj45nE5xmM8HofUVQpkmRMFu1Bn3EbSSeaLa1Lt",
  "key13": "5TTN2uirpnwn3z2bHSk2bUxA1wsQw5mBSgnU9nN36SQcAHGdJY2cVH3dUKmtDohL6qCJkLetgkrXbv8Pp1oz9mqf",
  "key14": "5ZEC7iUxYSHYzqp1eNUzQoyHENZfhVgShSHdqhBeELzSxPu1JgiA6K9GYEKqLkqon7a29TwRKL65HBLZNprRvVrJ",
  "key15": "2quVaLwRoPJnrMMN18eCCqHkmMwss8LLutDKNTauNWSjdSFzP3wL1p55xYcRQ89bPW74M5NJK7MJSjnPLGBM7b2G",
  "key16": "uJXwdtVd8kmJBRgb8i2wHiizA3vdJb9zJSzPhXAfCp5pP3tFwYvZaYsC81n5wKiTBQdVgkqnwHQgcmmyd9iuCpF",
  "key17": "4M9JGrMYdt6rg4bDDvXXf1mAbsSoVe3VJ4TrdkwgFogZnXtxU2wicqRqmmZbf3pVbRdcJ9LNfqzfdhEHcm1VCbvD",
  "key18": "2NbZx78PPUxDFS26C9WXBFhaRMozPRGtryeDoB4Y88u3tvbkT2JcgE5ooRqMc583rYLSu6hVTL8AAEku5BCF1dGT",
  "key19": "3gNLKLyurxjT38Z7AJqhxbpgtfDwmobxWSx445PxqTaDaou3JCdM422hn2iHxCde99usLWgCSQGbeQV5MZDisfA9",
  "key20": "5zzd98kPF93DsuSdMC7iAQtbu7ZjaaivkvxgYM2qmkfm7eBrWEMXTbvJ8ypjUVqEmvVMFpegB9gr8A3r1jppB3nX",
  "key21": "33s6c8Jt21MgwSvqo31NieKzL4uVjbLfohQtcLBbAhPPWP6kisuyxDM1CF5F2uBXKX39Vf9TizT7NU6TaCkv7qiB",
  "key22": "2VBA5GrdHrx7NxvACAyi9qVyxuiBvAcw4ndBt8jA6GQFVakRcVYf6zXhqmUrbT2M9xM4XGPAwVyPmLrVWxSVFWnz",
  "key23": "45ecudYx5QQuVxmUSVfgkQLju7yaCipay9Wni9xchV3HVxgLfrC2aaTDDEip6ZYSVVrexeuHCAXo2aB25xRLYCjY",
  "key24": "VZiBmeaQskjexqTFVtrbFKBBFButr512QHcYh7WwzVZ6TNHiHgLNdS5EYqfpbH7rpDHVgNv2WRbRpsTxDrzL4wm",
  "key25": "4uoFWZ89DnHKj6j8jP47LA2dRSH6VKkgKxi9mHvJBTFwaE7JJ5hWMFSuweZiDchp8ibQwzfu4c88AnMN93NkCeVM",
  "key26": "53TxjB9ZxdHgsrGz35aK3eEQzubCcm4WX2TBjCWqobuenC9P6up5NNp7ra3DEoNPui194oB8YbS56YiYh9RXtYwp",
  "key27": "3VAzkPiWLmYxK1mrW7iDwvi1PKvP3mNZ66iAdnCL6cZVEVfweaDBAyGemmhWxnjng5Ktvkf4FiGzs3DHwoQ5A5xE",
  "key28": "5xQ9H6ZgrJTvkTiseGEzWhE1LofdtmnsrTHQ143xfae85dHCHrvFAS2ZBjA9U63HbU5VAfCu3faUkVimmZvBhgHH",
  "key29": "HAWpmTNG75KvbPStianN5Cf8n9XdVcBGPWsr8oe76q1jfPVdz5YhDo15DrwA29nvVGWnYizF7U6GrWGkp2Jywz9",
  "key30": "2a6hzSrx6KEMcM4enbMs6AHhyuzsXKQjTByFhMpgAJFgYyfaUWKXGTBr7vsHhBGEFochdWurgLyxxNY4FD6Qe6Nk",
  "key31": "4NV1AKc8EifjY2h1xMXEWEpsAYdFhQWw83FTQ1gRLPBSh1bFpF7ee8YH2gw56Pr86M1r7go7vNLBrvrDh51xjjMj",
  "key32": "2MJH71VtWkAMtHvMtwxUvviRQiiMKgzAjxWxGmzhgsja9mVcU9uF8RcNChtjdMHqRv4eVfAmJhVqBQtQT8rwTvcU",
  "key33": "2F2movKKzYeda15KFjPtpCBA7fBSdRsnRe6WiNtGpp7aBPpbDdE9TmEkrSxh78F79CEZLVYRstikQYfHdZ5BNQwc",
  "key34": "54S7TUWiXCpg4sAwanP58tuAegkPziQ8vs7V8pFrNeegFd3yrYETthGha6QMENFT7Juw1F5fkQ3yd9gKdgNViCLz",
  "key35": "2J6XT7jspsrjkkMcN8UsKxN7fcsaiafPhpCGyqmRNrv3xghiYejQjzZ5WYq5SPN1oCe2BZcrrytGaVdvmeVs51FU",
  "key36": "2c4CBaar1Vbx4g9Zu4Rk6GdAFfRoAbDLCnq2yKHuxcNRv1VBzWxFqRer8Z3aeDDwV6sUgM25ffyD37LTHRkoWfo2",
  "key37": "4WtCNkru37fayqjkMPRQYuWyqZgYvyCsMyxHvg9q1dWtwEhr26cHs3SVE6p4MLSabMmB3aUbkekA3HfBtV9hyJDd",
  "key38": "24YjxT3ZGUpB3tUD4cDrcDaQdNdbhtbhpKnXJbQhS5Vg9BsuQUG1CHBUC9vWYn6ET8gGvsKEmmoPHFny2CGV1V6Y",
  "key39": "2Le7znJxGVqp3xv4m23sWr485uETa1rZXHVY4PNPUzieNvPmRZrXGZXFpzgzxvEoVtofEk7M4UqXrCEP8GNaAGjw",
  "key40": "SFy5iWtcQuQNLmJkYHNUeoJUDpRbwq12p9D5WD45Pimz9ZGk23hvxYSzESLyAGfvzLYsKRPcUvBV3n9wfZQ9LYc",
  "key41": "3yKFYQWnApK4dk4vcz1u7i4sopV17ny3hTK8LYdfKbQ9KcvGJZeXbQLY5qYbtFMjTKdUoXqVWcvGxa9oyGPChm3Z",
  "key42": "2YwGiqrpNqYYKZQC3jwkQVxV7ax4KihjcAUxLFDXQgtJk8WkxmqaPsJKuvsZwjgRmJBxkrkw7iJx6y7fak4XCMXd",
  "key43": "3g2JnvbNDfjNiAqjsFZzoc5DeTU26WmpxqSHKMuw1akQspvydnHbF6tqG4WP7aN6XCxEpKJ4FWuwSgQ3Yri3DDHR",
  "key44": "SEC6pYZd1csrSfKenw64qwU8cuqAdjcg1w1SRjeWHW2C8YThy1nbC2jtm4xeKb3RMEHsj1VPaHDgrkDynoiPAkZ",
  "key45": "2MCNdfLGPkZFEngTcBD3VHre2NrxJwP1beY92AqhTaxQ1gnsxYw2WJw2cT2qTc8R7yqEmVG1eMWH5G9GD56Sw3HB",
  "key46": "3AttmoGr5JDAaSMSZEagtcaWqG3WJgYUEPxyiEMx22ihQnhtjgjfaTmuB9JQbdM4Pe9E8rKTDoqFbkhE5MQua32c",
  "key47": "3fFR3pNJWLcrXr9tqDQZAMye9bnVjQGDHCX6khPen6n9vQRPwMK1eLCMAo5aohDrrX79a4UUUMGxuwHTsXYsdiaL"
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
