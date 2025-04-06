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
    "4cDP1xr3MfY4xWLdkFimTv892a689YLuEYzqCAhCavTHnerRw3GXRviwMHHaDtRA6iSeFmREzWEse73MeLjGfJVx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64XX8yyY41mPkwVFqHhgide4SHgpwgBFHNdhnEHJaGKUe5rKyMm8TE1Ez4hnUNSEAhhtBm4U7jrADQ368x3qPQLQ",
  "key1": "5ZzcMQP8Egq6HezSyVr83yxVAWa5aSRZC5RvpzumyYabfMQFC5iJZNoMybCzsqD6oy2re3JHXs4HfVMLrjacZhn7",
  "key2": "3PoYCCMhATjDtxZBwXzdk5XQZKskowNoQ9BGkJgPUQBmfifuKu7aY1iegror8R6cdHSkQ428QgDNHNX7TekurE8x",
  "key3": "4o1LfrD9ZSUQCzQudxq5GFarLxpPEKfHpyTEQ7hbtJAC9CGbnQVi4h5dgZp7YEJdD3vgGVp5zh3qpMCCa3CaWaGy",
  "key4": "4gRC6Zr6Bk14aMLzvi8GwvVbYQyybvUVjFeJeqUTHhpci9KvgUJAGcsD1MyoXhk3MiX2a6mkgLtxU77Hd6Sssrpd",
  "key5": "4g2oDhNiaT23H8Cj236LRsMvSy5pze8bVruGF52VHqSCkhK2P616nU4sGE7FB5N9WyrftEdFVJooUPBPzN5DpDHj",
  "key6": "4RD1Pdo79ALyF7ut77aqgdJRwzK2hL5PRnmt4VLfuoW8vYnb89jHycPHJtyfRLfzzhGoBuHgtHEbB9R6d3dhjKjr",
  "key7": "5tpKcThEFnbysJWkFgf4TxP6rPwvUcWCbesjFQFKhtdAzGs4Deh64NYmVCuGxzSfBfEsEZwTfCPCMwXDXeP1cuk1",
  "key8": "292vHJPXKzGQJvm4zedZxhMivLuphGZ463YfqiRz2iBYfmHz42vwV8ErAZ9DTsSXH99TYreKKGCxqGb4g4tnFjVd",
  "key9": "keEcSgGQjDiHPvJc9npsAKPc1fRGCdsGgJr51zZsPDFpsK2ZHXg3HQKG4MPSBSAX7D1XMrYntKxheKcYhE3DGJJ",
  "key10": "2LEAsSwXHGdGJSP1dNcjzAmTAFQpFeaFJWce1xkrdeq1kEUiwUdR2edfqUp631aDs247HfLMgm6tPiTFEyBfLber",
  "key11": "sq5Bp9CEtAdQSXxvHmy9YJTFHtpzrLvQHZUDV8wzrXixcCc9K3ExzhDUu5XHe9cEkK7zd4qbkmYzrFnd8E4gJaJ",
  "key12": "YJevXPU64F9habAA7jPcBfw7fjQw8nK2NBootiBYQp6yQZ8GKc5xGG56uPZTT2d3JyiNtninF58sAai8NxVYPy3",
  "key13": "2ckZNEq6PPt2g6K4VmE3PywgKY5sQK5oD43ZntMFN2BkKTGPTGpzo4TTsqbmRMRVtNa2bd4txBebuw4n4CCyghVT",
  "key14": "2QZq4Fs6vEEYhDuNZ6gsB81PwMwmY7DDX5Xdec8ajbS9vpYp1ZqtyrTFj7VKrFyNACH2mW5WKMQwihLHobzKgjeq",
  "key15": "33Qg7SHWoNPFmukUp3Ep8J2hvgdwKhBosLuxDyDed2j71TXWvpZnRjLq2F32xNJYXapRHBJavnAVhGP39sphaM5H",
  "key16": "mPzo4nEHhp9qaUbSBF1fNU8tQX4KyxPrYGGiPBuKCgjRyxoANGTZK9cSTjyQbD39hBKM5NqgwcAKRLPhtzibRw1",
  "key17": "3iJorFhah8NeFAbtqWNVX4gqmvpXKDB7o5bisqQib1aHJeyecsBk3HxnChCb6bEQv3RJuJC3wEGx6HVHgjNje4tK",
  "key18": "54JffGm879qT7RaYVVXZneXQU8Ufeqmrv99FQYyFWBE3RRyztKXG3XrQMS7SyXoC4zNi33a6VNM4CTN7sST14Zbo",
  "key19": "4xKSVHCSyRzhiFSBqf2DJH9pT6mzyFn2VRbrUfPvtFRFb62CVPMJxHZb1n1mCPQVVWP7hUdDJ2ToFhnH12o8ZQjx",
  "key20": "2iwr4g76g3Ry7dwk4NBKTUfudS8vovJJhkvwCxTGjWkRDJWpfsKvTacRknwYkvqAUtUBvwy5ASiThu7Up5YMd5p4",
  "key21": "49NhRuKhmbk7ryZYTNWy1xhyHe4wzuhrdwALSBaCjWhf5VhpvDjq892kcoQ9dro6QgvC1pK47C2HvdMtEaamj5vF",
  "key22": "3mz9qNu2yKyuj25C8KMnpxM4aGyFve42vdxZY4DrwyU5PKS69aF9ZAeedb7Lcab6SNkspnynq5om1YTFfD3C9anG",
  "key23": "5bdSrKHF4fa7fPgTGkHsvcZvyGaMTZxnbDbFZa3Viq72TR6d79Go6BZ19BUe7jwJ2DyD4CXGXU8KSpEquzbTeMXm",
  "key24": "3nHoYtUTmK6QVUxw4yrSsgHvo61qRVJm1mpQEBKh4i19D48CSyoeSnW1EmMpNX2HByv3SuydjpVz3MoPCbSSivQy",
  "key25": "3afYeKnHQFjhHPKPnT6gjjffB3WaBkPLHCGwcFo823oDm9ipqnE54ccsXwWyC3wB5bKN5zRZ1vCzqTuvSoeoxKMj",
  "key26": "4pgMxCybdvdCYyZn5c7FB8LfAaEK1sxWRtgFVVQSQ455K2P9pkjUNxxvQ5EVwgjLZ7rZtNzeXbGLWNdmsnPj2u13",
  "key27": "5c3gpkDtXzyqCeQgz6eeGS3Sk6tkcNM5VjsZD8DNfpGFFMfcACpEAaSz5iVqMYrmyt8i38aBqpjjFSPQTQo6MDKm",
  "key28": "3xoqGJij5DJiqHYnDmt2JbGj6hXe8Lye74rFpQY8nSiUPvv48bzBuHQckEnjNoXEhBpSZN81y3yvytGxYtBQe9kF",
  "key29": "4oND61LmDjpR8E3FvqaxTLPzuw6bnmsRbb7Y5jrLsSVKyKUonzcrALovjMBZuscVzTpgsUgsNsFNPcf83WCMYkqq",
  "key30": "so7ZFespPKwqw8y9C5GGcpaxSgHhFgAUeawNH8RQ3eDucGpcdcwfgHtwbQfhQoaB6eyJ9sHsGsND1GXDYy7AtjK",
  "key31": "3zPbxWQAA22vBMNafGdxiyhMkNKyUSMsQGZz8aFmKeqFGBzELiwDHKuAwJr9czfMbVFtcWrUsH8cMZ7wSVNbnkvp",
  "key32": "3pUb6JWs4oAjeDbNGXoFTTYrEZL4VCaM4y91VoJZ9p1uA1V2WmXXA3XyhzbPqbxJTLtrdZefmCmu8pJzxHAyVRtM",
  "key33": "3VwTSUMWNMXy3MSAxfKvGbpVEmJ1Gok8kJWR9prDGKHTGhwnDzTwsVgCxLvbkkmxZ5QasRWWdSg6b4H4xSvPMtn7",
  "key34": "3x1y4uzRDsYu6XKwc5wrR872LUouW8e4SHC1YdGccv9gdSqnDp623w6XLW1S2VN1Dhv6vnEhiecaq8YesZeAoF6Y",
  "key35": "5535X6LBq1Fo8dWoMQkf5TvtkwdQMFgqweuwPe6KKV4CZ4mXG21BhNHSbJ1ieJhMWF9e9XVuZu1ruSuU1AAwBRxS"
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
