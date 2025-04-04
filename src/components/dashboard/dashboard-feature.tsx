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
    "4xkD9JneQAFeMP2rupuJgYjwnJdUYj474ccej3bqNqptP9tFTjEkn6iYkeDW3CDjHfJhfEi95ktDuSkiDa6SJFSE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UmWPPd8GwH6wNhdBpHQwvWC4dKLmHFgx749jmYTaJtYJjQfHJKwf63W1b86pnmdXvPaKSW7sxSiFCjnacQRXwBi",
  "key1": "3LAy217vmraJeB8N3Kbgd4nQCySzZyrskr9GtzpsZAGWjrqLLVZ6oRN2QiXmHHHktgVL1adB5hwKM3cfvPfxWJRT",
  "key2": "3ysP6tZEYDXTQ2oVFYn7BJPLF7qQfNcVWSAfMzTvwnxupps6xFZADRJpwUBfV3is1HL1Vu7Q6HAyGxDF82Gzt7mu",
  "key3": "56A1RRCoTEJMhL6Ln9JY6F4fhbrsd1EgjHu8dHA8LtqsYzsQ8vUvfZJ9AjYKLUUNsmgUbZ2ZB6fdiZ4KdkgDif82",
  "key4": "4Sfr65CDHDW91zgkSYbmAjVvSNCkPBXCUwLW5wUtmMGzveK4WkaotNbBtZWUPMG1d1TGFaqfRxPoFxN5FLHdfeNP",
  "key5": "2UeEQRapB4pLkn9kY3B1AbPCw8GWYFhB77JGXsM63mzN8BU5heLbKAh15arFMxQuNTwVqN4VrmuJLFd8mhwPfahJ",
  "key6": "o5BpWTbpgdZJTeezvJXZrqb32BC6QjoEnWHBnby2LrUkSsw4rBTXWUdaPudazTzkLCvQYJ8LdFnhRrnXuKmi1yY",
  "key7": "2Dd3LikmKjSLHLmRQAqBEJokDAr8R6CrEcjt9Ew6Q2ugYvECST6BcrdEByKQySSFBhmBYg93QAfKoqasDJ6Kj61w",
  "key8": "2Vx3eqeHjMj71VLcsAq2ekwBs7qUMsSEVc2ckM1UvU9ymhdUFiYCbhdr61ih8jJiG75svFhxA38uVzQ6ewDdJjzq",
  "key9": "4CLN3uk7Th61Fz5x5VymhbTi1A6TuHCdsLnTnGn6r9P76cKpAn36Htqm7wvF9fAHnfxr456Hn1J9VkajBkWXdQj5",
  "key10": "58DHdYpCGL7NQEeiQ4yrTFAiEpXUdHcpuENkY3LdLLESKYfVmV9WkaZJHGyGZJx5Q4TCgL2wB4cViqWHuWBZ1e3K",
  "key11": "4XwYrnGh5wXuKznssFE4vD1RHecndZ2ApySb4ka8uKhqBgpr5v2XgmbmZsDVMiwnmEUuTLBmCoYHwKgYPP6E2BfM",
  "key12": "pqrtktyqeiNtXm1F5Fk8Q6FizNa6tCZjAdmP1rUN3YvS3PapAsZmco2njiNWAA8XxSVz1s4jroHQBrSvHxfoybG",
  "key13": "5efs2bJGjWqxchYedxwncd8cZyt6fRRij2xtj4cDAAdrppJRSNRHiv6rFawBbRViTCpUUkS44WHeqGXMYdtaVXfa",
  "key14": "431iJu19QFqcrpv1YQtiGhLdBnTyK8rjwTdihsZcuYqDwSp6sc7XssLxepMx26ZJcwNBKnvSoVNgwxf7od4N9vbz",
  "key15": "4Jk3zhx9nvmYTyRztz74DSBDNJr1fcuUbwUMaRtXV28bAZtmgrxCRnPp4iJnnZ4x4AdG75Ux99R4fsECrcbJuAvx",
  "key16": "3JMvdcaco4L5yoJdj2E33E9P8MrYhLYnGC2fJLuvuD3cLRu4fgb1eiTSxNmMpZrV3ZydvDmKg6KMyVdKsiG2t2Lx",
  "key17": "QxAVtf9Qovavw6qQG83kHRrxorrrFANPoDdLJEnctgaRyokLJ88n7gx3x6ZsD1ft4WJfUfLSuK6y6oiRNBKPetx",
  "key18": "4R1aVWDsMBvSGLqVXzvwZjhXKcoU2XCTmwdPux8V7tSydZGUsDSLNKYDBCoSgbd9ny1T4S29FXPAxipuRTqpHfer",
  "key19": "4fvKynQciDyYjjTMWDfJTquVTyr6DwLG7hEDtx6ZFDFQqjpEFfEdAvZgWr3gVTUP4Xpt3e6pEoZS7yWMfoqyT7P6",
  "key20": "2SucNZ2RH86QYxv8ADpTkn6vK4PHRBGt2j24TgD6mMbBEYzxsYAGqgVQK7bcWqJtz9Ve8Juh1fHowKnGZg1HJefb",
  "key21": "3z9Gn8kb32XodQfxmPb5sAMjec2FyGS31vgYkVrDzSQVdHeWwBQn95JLkTuMcZHiBWPnHoWLwbkNBjXQrjTQZVVS",
  "key22": "5JPodfYGAT6PxATkGSZzdysifpDGeXaBDZta3HpoXUDqAx6o2p6HJ4Ds6SwsQSQ6rqoVRpa1owA1WL7AC9XKX8CH",
  "key23": "4i7XgieU2zYbDBEU8ELpNXtWqEymac2FQGEQoyovpGrnuRbuZA2i7D3wQFU5uu6kRKQDG33LmPzhSFY5fizwgTJg",
  "key24": "5bVumBYVHjWJVLJm6MYg8rsdEVxo18yMgkcod5SNn55aarmze7zNdy3XttApz1XbHws5xBkxAyLjhojUoHrqZYiT",
  "key25": "5KUgVxzf2fu6wGVjrFyBtBKCCwK3C4HVAFXYCRajLhGDuyDdp2Z3PHj2XXfDF44Z6zGWzPmeUDECSAwMsd84nXa2",
  "key26": "VyxB4qJm7gMEaTbvLTyzSimKJjEbRbxjb5dchhdBRrYKWHi97XDAWcRsP9sskDYBn6dbxBRT1iSK6kvxk8osmgv",
  "key27": "2gqLMvCLzUqgoq7ys3XPz2tNyw1TxJQSMHF6XKUsSqJu7p3vxEPQsrvFkmcgUgy4PArz5mUi4SzZmfq9tNuLWnnH",
  "key28": "35Eu3MRTytfL3tCg4pucskwa3oKzCBgEpRszkR1neYR2894KjNg1RrY9adfwsPTjwXARzmBN2TSWMmtWueT6swao",
  "key29": "35CHYJGmmCvCXrJXCniwzo2be2gwPR8QFR5ayQDwV8kEz9LgiadyT5pkLk34YW7ZArZFgjisG5SyjWhNSXw1U5pT",
  "key30": "2S22myQAfsRMgpB7KJpucMSP1JtJv2UreHb9uQiKXsJCTW9fgwZTY2miP8KJ45vfA9i565nMVUyT8GPGvSNMiesr",
  "key31": "38nBAmwFoHTGC1SjLi6CfwtNFT3sY1uC94fqS3ZASgPjSM8EM9PsW7emiYk5zomeCKZDXitndsAZBWbJwVRYiRHa",
  "key32": "2jpfF9M75w3vR7F25hNfDryc47baK2fcK2CxwMi8Lmc9QyXKvDRMskdbammFRHZbbzoaHxgLkVEf9o5CXmd8K97t",
  "key33": "4km8vPmeAt24TFR5FYYHBLhUX68aGzvAF3qHta7jzFSRs1fvVmzdpStLDcauoV4wcY21588YWoGBeid6XeGhi3Uj",
  "key34": "5Mcxvsq2QTFugHgHBAbTtPBKp7o3LM5FNYTSZhtS7kivstzUituc7AQA3YmNQipUpmNew1jAhFr2mkx5LkDaEHmd",
  "key35": "2daEQhnmgCzdMNJmZA71EAA7YYyRLwcHwNNdnFoekMvnZrhS547TggK6SiTaoQXmFStvY5Eq6MPUB3GqxnmenD22",
  "key36": "jD56hhR4edtGXe6YBGAHDgMeDohEs7ieVYKQFqncEyRghs6VYJyU9HiPEUA33NrCt8h7gDijNQeDquYVd7LSrPW",
  "key37": "3vwVXYAXp8T5XLLdnw541r9bnfQKYeioEAMx5XtK5ZwebTP42d2ioYQM1ffrhK2udCxCthqCAhe39KfrLxPrNf7C"
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
