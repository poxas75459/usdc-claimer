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
    "5j8LR3qqwoR4d7Y6KvxVD7TgFqVPey8b1FWKHapzLURdxmKCjMd7BVfbYfNpVhbffo421Vi8RpGs5NhfWmpLn9on"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36UUzXGvpssTVUrWHscEk9EZcMBSpNKBZaDdgPSfUGEht1hDtmBZyVZgx4p4RsYH6KaRGGYyRb99vDNHLoxSoHzC",
  "key1": "5chG5stSshVrcqe34qZp5MGndb5coQ1NXmmQVjjkiSkxL9jqU3MizK9uHXqmmvMrtwzJdsLEvEaecQzkxoMjbzxa",
  "key2": "boWXSzAgi6RcR3smSZUWU8nGEb8mnisCM3LVmiuXRY5SmpkZLC6GdxLNxSvkHEiZQAGFTeyDhiBY6zeJLA7yab5",
  "key3": "59SrduCqBHfSEABzUraPvmiaiJFnrJN9rSz8TSgf7fNozCmxLnUtBDZBdQ4gLwscgqp55CDdqjfFW3GTVLb2A5Ni",
  "key4": "mf5JChbTrmsBtZYnweqCA1W2z4aaLw7zCVwiHSHW3c43nzWdQzvqU6EY8hGpjSoVBDm3YYgcTgtBGSRKpTHbx4z",
  "key5": "39JUyGwXK4wQMxdNsGAUWP22eKZMGyxhS2ZEVgKgXSEjdqGX86VAAH6NJfPTzeJaUU5T3AgGfTj47F4jbY2P8Abc",
  "key6": "2ZrSbDNpPkYcw7XBq26CvkPrf9mkUzMYhE4qTfxug7DTG8RZBQyB6DJMEFaiw27oQvGLcDF13tkNJJyJu9AjGCgd",
  "key7": "RgAbb7oKZzKdkAkYKcikx2ASaAaXKrtTmr7UCnvj6kH2UvjB7d2fk8ACzoZq15797eUAoSqV3R31fxoaouz5TWE",
  "key8": "4woeupJnma3nJj6sqfp2CFigVFMjGBBV3tojiNqCScvn9hqxHT8VCeJuZb1M6wHbyQjasjzJrX8gUxRHMbogi4yv",
  "key9": "2GJzXs3ikNaEeCo3FJpygjkSU7AojiE9LjSVPRdgoQjErPnPQ4daUqUVDb5oC9sF8SDVsVbUfzF6uF2rZ1kyYSya",
  "key10": "wicbFj3jiLSxhiytydjCdW377pkkZCWkNGdTcqQ56wDuXRgvFnKV2159i9TBMKaYavaj9NTuM8pYvGpcVoreBaa",
  "key11": "5pynGk73ZDxKN3fW95pFnkY2d3aAWRZr2eBXKFfZFLopteDUPXVtDcXnW1FL4r3dRWGLMMaLa3k96UyjLbAaYMnF",
  "key12": "4nrhnkWRHWqGhvV6ha9gbjqhGuhQi2gsa2bVEehJZfozQbi2FkkBrP1Vaaxrm6wpfdnRwAe45gzNrbqobokdwDnV",
  "key13": "5nE3PbX8DJgDVu6YyWuMDq4V6ucxfV1CoJqKrdQ31KUf3gn4WFCxJrYm1fY7VcTSNz9DZRhHEU9oswnzqj8DhofC",
  "key14": "32Nvp1VsS1yWDKFyCsYAihoWG9pjgAeyYQDKm6vK3tVRrKm7SfzYZ8pxxdNvDYGoKTqQscGEVufC6cp38gPqvdRi",
  "key15": "3vHyxZw1ewdF92FFGnbDjqf9gYCNEh43TrwpeWrNPNENHfS91dDjn9dH5wa4vfZ4fvFq5C8DFP4ssynrYyATJ7XT",
  "key16": "5gUzfNbkpigdDtGuNBUfipY1o5Xdu4UY5uSrmdj4vLqLwrUV7rFPWXBcGMAknFqx4uxXEkRsUUNcMgFEscSPFbCG",
  "key17": "2QFEQjBkx1JQtiwyMBQGnGAVG1Egat4XzK9fbfKAY5uFq7aAHVT9FXHkR9ztGpL1pQX4q2Q7yhBb5tprj4qWp82j",
  "key18": "1z7Sn6AUoYXNvjEMPZD3PgC2EPcdogbab1WrzDDcFDvJjBeMmtM8XEr4HAYcbDpkUFH3AN4nhP2JvKi64GxFvVb",
  "key19": "4UP43WQusmR73rryVEhfXtuYfgSfhNGecnTpkvGZf1PuRzhHHezz5viiGgGukczhj4FG2Zvaj6pgf1sYbNVvY3jm",
  "key20": "456vBTafsqMTJo7fUn1z3MhLigayGegPMnVxDpy1E1zdAhbsk9C5eFopU2FdLpE6RYQzsCK5WvNm9s3N2UtsJatz",
  "key21": "3vh4fG74TbgNpVjKSMb6NbKYLGdxxcbMs6qCE8hjC6G1nTkW7nHVboFpchb1w3jALVVtatjTYtkk16EVAQf3wgAH",
  "key22": "39Ku7GC4pdSoekk5JVWJURYT16VTj8KfAYs4eAt1cXLt7pNcmguSUb4BiP1Cm56bn9cqTaTrcRfDt6MRXt7vZJhT",
  "key23": "48LGoU7xv594CqsrxvMnkddZ3dq1HUYS6K6C1ZSooUg6w9B4hrMzsuDJbjGLfQp5pfbVgQWhohv8A4AE1ir2kHMQ",
  "key24": "2EPftK3BgPu6yrsuuYgZoxRNXVEvBAbvmriUvMepbC2aNXNeojzwaYMAP5GQXa5PSK7f3AMLskUWU7oXhfqdmsBT",
  "key25": "5CEMUca3jXVco4qLYfWZQumw5TNsUXJNzbxa66JTGRBTRr48BuoUMTRXFUzDVA3G2SdxeUENgGxSEQFQDdEaSAWZ",
  "key26": "62BdV3Z7yQvcpKCzx43kQdzv4M1cE2DWXipjPfqngyRkDFCPLQmLbSpiVYhADkqiQxLj9MfRoamQ251DX6KEUiCj",
  "key27": "3SrT9FfuyzbB22VwRN6rx76jRKBuVchiW7MoC6QY8zwMA9nATYscfshfSjedURZrjgrserqtLtzgLxMU6TjDfdde",
  "key28": "3oox4Sgd9r6gbVd2HkASA2LsZMV4Y3e9Gfn886NVsN8owN2YAgTskxLadHiH5KKDZLy8nVbDyP2rauoyGXc759i8",
  "key29": "LtX4UDLB6J3YfJxHzW6KJyoA3XbgJ7jGsMuZNwVDUXV4bKXA4nBvUEkX5MTQmVc8wCzCDek4UMq662eqSHoVqia",
  "key30": "2Gy8wNpB4eah2sLv7bPKgFcCfLtEuXVPyT1M5Qoa74rK1ijxbE8HYPYkVWfdTiDTF2JEKvMUyXPMTz59gdXcKD9H",
  "key31": "2FYnddLyR7e2ouEmioqZjtvhfW5jedtd4Qnmh1CjNBDEJh9Azny4vCrKXXisAorXMeH5HjyhKNdXYQwtffTdEDyT",
  "key32": "3cmRCAmA42APWQjNNYhWz4C4RnWYzW8iihRJw9X5BtJhB8MjyoqHBiGvB437R5jy4xQTFsczE1tP3yx4vuXyXVBx",
  "key33": "5mouTMPPc6XawobsvehoNnyui421589CK7dvqoUAqv7yLPbNQeMQLBDkYg4K2Hdk2w1Ctib4onUKH3BDPJUwJvwJ",
  "key34": "3Nr5MHth6vyRtxPnS133JhWSwr66ShsKZjThNGqhM4nkV5aQ2UmFPiQYHxUP16g6UnwZyNLHHtm1UTZbCMAspzjU",
  "key35": "ZevZNR8waKVGyP7zzmcNHFhvaXpREwtQGqWxpaL79FpnoPwoPa4Xw34vLi2n53LqWFVSxyipD9SeKpiX4UWpu8E",
  "key36": "3o8v5qUavf4wQARhWPDiKAasw4M78yoptoEoHp4BepYnMNoBYDJoKfDtzjskZdA8UQdZd4wjxDu9Uz2nZVtWkRvX",
  "key37": "2DVXyGfLzwjtCCxkfV5kYhqxoEF6WQyyyso8Meyn2THsiwz5ESUdRwa6yzZCB5k2HLFWFWxj2kYWYL9kCcqL1XKj",
  "key38": "51NieLeXkGgUoyFoiStN7Nh3xAzLLMssT5bdiktwcfd74EtVxKaRjfV17ks48DmhPy2sjPgdVSKKhTFg6dhP5HcZ",
  "key39": "22uzR32QX3Lvfvk7va4aPXSYnfsRSWX5JdKRg5Eu2fHhvjiRUQhyEQznn7GpauDxT4DS1atf88j7wt2cnfu35qDW",
  "key40": "s5tiqektg2fZTMB9Rx33Bz1RKghjWbuMDHvdkWXVJWUU8AvHvb2hp4YyGy2RH29uE74RZyzvq6BDug2yp1VQXvW",
  "key41": "2mPmCXuYe7vYTvj5xpasCrP8JHSmxDtfBruqjwXujJ9rQ3R94o9viz25iX4GCmQiU43keUZ64XZo8NMTj6Y6akyK",
  "key42": "552bVJRDZQ33LFgPipudU6b49MHM8C7BN3E27GwHudN4KA35wAGvV3cMuN9kHbsPEnTE2WUciVm4gem1uAPaYqe1"
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
