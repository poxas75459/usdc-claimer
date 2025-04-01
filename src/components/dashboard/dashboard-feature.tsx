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
    "51nNH3r8vEPZhKWWk7CHG2dJ4iLmDcspDxN4cgQ7gynokhtgnMbP3LR8FAXMbqhqaeMGZkC4bxmxGZBCkYTGgZa4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8UKrXA5aC7GMudm96YwyMfu5P28N9HY3B5zbAToqeef9wxNTYGMGZDoyywswWjYoC95L1VyTJo6Zv4XJSsgjEQe",
  "key1": "v7pkvTUx4Yp4neHBnoeTX4Mm7K5A6WkMbDWeztY89Ja6HhNpXUV8dwxCHMUQWRY7iKWy3TnAZ9UfzZ2H9tRK7oV",
  "key2": "3ED4gqhZKjWVvkd3VrsMPkXHM1UZ6GCAjtYdiXj6Agc9PsvZEeydUvFU1jWf4Uy3aHwm7RVw3dvQDHPVYdqnqzGC",
  "key3": "2KEaauqAvuGcXdFTyHrHjpxSUoYrYbTexdQTYREGTFBohDhZ5fhq8KqcF2D8CBiNqBnvjBzCfA1NcpdXdA5fYNXF",
  "key4": "prBKRwpGR97zFrMCUr7EjUZtpnUJauR8NRmBbnp42MbYBeBecxUumJmTia6hH9eG8ym9PRfXWZmutLdPWudwt4m",
  "key5": "2YUWeeg5Grypryd9t5yVbADLTutKgcCwqPwpBRW89HJSWL9BphaKYMQhLzfDq21gdpG3NcUmxy44SwYkdUFipm5p",
  "key6": "3fHuodxy77XW1AjrZRHMwshFJ4HPEqmTwxraACtTUoJpkNUBovhA56Jd5YyjyEFde3Wes8TBL3oTmdLSYYWZnUop",
  "key7": "2B2CiCeRTAkFUSJPAoQiSR7c4Zqsh56XZqpfVS9tXGaRGqALxFJBye1wy8kSEuNxUUQDbHDtziq4F2qr6U5DenEn",
  "key8": "65as6pYRXuYs2baJgZhm1x86h7yHx7JyYgaRB7UucJB48ZfG7H2XkTz2TmqGFBGt4W7tMmXSU8TvDUPjUWLhN9MP",
  "key9": "2bBVVy5TmYSZtRkx6n9MP9Fb6jGofnanHW4eaLzhoHAQfdTg2UvYvcz7SNCpzBVZ4xtpJVNrJ7pag3oHV8SDBWmK",
  "key10": "3bLsG6NqRjpSSLdqs5imRMiJXeASyfGFTh6vTFJ1PAEAH3B5nVxeoz2HHEuhvU1hHj32w6ViMH5SwpA9ikwRD9Qj",
  "key11": "4AKERtfzQbFaGrRhz4FRcMhtetYxAQBfu2ePGaRfEUdf3314GrxwThicNmcsdD8WCZYX3kDyiGe8VEfbHdBNx1v8",
  "key12": "2AdsGK27DTjyMKi1pp1npj8BrTaCpVgD5HXm3CAy5ncsPLoFCkaNA7ob8138vjaY8kBiDaCanLYbP895PC7USutP",
  "key13": "M2AUBdTU2Evd5jdcg8LXe2eKPU6amyGYtvCJJxMXdoSnG1PuryNCprsKLMqcZFQJuseB8Tt8m74U1bnTVmj6d2G",
  "key14": "5sWtFs7HY8ePZqqm69BpZz2nPcgg9ZWFEnPD9oZUc3s7dDmW1FcVuWu31ELxUnmp3juNKLvB88zzLUrVr6nvsthF",
  "key15": "3NRGHPopSjoraY1HjD8fZxkYaBRRUjE5DocL9SZC7A2NfaGqrqL4G3qXGiGvMCo6NVTztYptnbp8a7hHU34mH33c",
  "key16": "5LQ88DPr74sAQoqS6SgfVs1Za6VytgUqkV5FRJsNVdTTq88sQTDSf5pT2z8LtRQJ2ibBsYguaJTrx7XaaRGAs9C8",
  "key17": "2T4h9XUb2quZtsEkYzZk2JeqdWSkHTqFRqp2yAuq6s2YEdgjkJVGPXY7u2VMdVZW2tdkfCXabvgjgx4sphgihvbr",
  "key18": "4yV6qLB5XMYeeaBuUZeDZds8LCmrQwaYdXyQyFKbKvm3TULkLTNkGZPSZbtf3ERZrxFt22WFnt6yhaaxob1dm5yN",
  "key19": "y5oWzMgYcL5na7DqLdzSQ3qUDdZvvN3LyJBZgX1B1CqcoRM2tBYzt7wsq4zu5vrFkjZKyurGS5KPNhaSXj6LyeJ",
  "key20": "EU4QXG4VCWDRwisCxckRmsw4uZbDactF1yGJT8UfE3mLRhcNsbYo8ptMbDTVW8weWD5ZXC9kRoJxitn7xb4KjMv",
  "key21": "3vhFWFvj93GfoWoSefv9ebAQxJwe2zmZFDpYPE2fkkaAfiMvkCXu9PEUhrRAGtBnJSdCwb2ofE1eCF7oVKjq1gto",
  "key22": "4ZF7bWefT73Jeav8ud6D4wUnSNE6Zthz3xQ2bxoMtZWpDBCEUC6d3xypHarFCoR2v9ypGcMzakxJRXDkSmLPBANT",
  "key23": "4D1wkanBW5stAu52ukBe2w9hjWccyhKP8co4DquL49srQ8B2iSKpPM4oMLZ3QX4NNfLWYk5xqLXsEJKdxJTB7epf",
  "key24": "2tUVKqAVjB5TuLRKTPDPHabtcyFN68fRpQ2LTLRJL5gFaGcQW4R9dwrmT8tocTqpqFRt5o65MvqHiUPmP6rmKt5Q",
  "key25": "3EshqWoSbLtnhU5jMMBZ1BTztWWziDTvGXjLQrh7wWnwfGdVEvBHHczmYrZ11KTVoiF4hwZqnhcu2iREHV3Hr4aV",
  "key26": "4dYH6z4zqqSmNg5V55Hm6Cx3JFG4Nfqdc2c1VU6tf5g6E54TtYAbvzt9BpbirKeHpsd1SFciKafSSqaAMo5wrqH9",
  "key27": "2wqoeAzjRHmZPDr695qRhJaiJoGdbCHD9o5Yxj2biHzzoqbsnGHCNDfdUVmh54v4bK5CDQqA9hzyddECGxSV1ixf",
  "key28": "4LFugQJQD2dnjtvD4nM7oPVp9MtcfhMkAJwY2x7XxSYcMLQ5uj5icH5TxWrDc9vVby87vUZ5MthTSmgxBDErbRev",
  "key29": "2WrT2mqhLS46ChAbQC2KLprdcUsGE2g1nRBQxGuL4DeChQvGjNYtAwqinrd4oXXhBF47Gq1mstPLyUeUsLizRcRH",
  "key30": "ytKsjUrpgRqzz32UMM9ja3qCDXa5gekVTYDDnAHA9UXbh5Z6DfBviC8jfdDGkHBBwJQrb6W12oAgHBHdog3V4na"
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
