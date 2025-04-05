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
    "22jfAfmULpqGhjkGLB5xF3YKRaxjQH2Vn5XpnPbpqRC59jqWCpyVhorrDmm1e31qCzkWKW8JPrM7njJ5nbvpGCkn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KqJmXrzXt6uEqHF4ygCXNmGMFtErvHFqRb34o6MPDZGgkxAjhsgeZTDEUKt1uVnynM7QunEXkefKns8LC5VwQsM",
  "key1": "5fxrtnFX84eFn4M2H3NUGEnFTELDJi1hzjg2xocVPLimdQaoGnLy5Fib5Vqh1Htu7eEN7HBToGYknpgWtYNvPS6t",
  "key2": "5NsZ35ZNZmu4qJBhuXSeB8udo1BGcM8XgQjmGcdHpbmGNNABHLEEzBiHZ4EbSgFTLdKZUA58trg4iPKE3BcQ6NJ2",
  "key3": "2zDJB1uifWCfW7PxxaqZy5G6aqkJtHmzUsLSuqMAbZHHwW1Zh2P5T5jY9XFYxvumuvvPtsxeh5dZzBjckv3mBcTL",
  "key4": "3wAbBF3TY7sHvmzsEWqmxW6s3ZkizMi6TMj6mHWtXL1S2bLSqPSpsaYfMyBqzme6vDYM8PPHFKYsb53WnuUk4orJ",
  "key5": "4utJrTMkTDQKGifaqoqa52aGagAMTzfNq6YtqQaroCDtttv5pEbSJCcj5ny3K4p6gVs1mPtSAkYrQXXc3VH1Z8mc",
  "key6": "4RfrStCWU8WCh5hup9d4VSQ5PNJVqCgMtVVUczcrECet3iFxZ1zG3A2cYy55ELAzhLRscxt1JXVBbcokX9oUmGVJ",
  "key7": "T3UBM1Q1KNiq1yUsv8YaYxGoscuBB1UmnsGmcP22ppeVoFJv2vBJV1orGkwZShrWa9XLEtpEX2Cx8ucJvZAJLer",
  "key8": "5fS1FPRtYAd2LPnF9MY6HM4TshU8uhPxTZwQJuVqq2xzsKn1MuNYWDZ8u1beR4PPDZpF7kmy8qxLuhTCviJntiSK",
  "key9": "3PTnH9kDiJUHB6rjk5oEr4rJCzKAbrxs4qZcVjqcUr5EZLgKshFZtXiLm4wBgNYjGUyZdvAkaGAwMnkWtu4cVKug",
  "key10": "59dbCzR4o92HyqdjthQCPtxofcAuXKhabLfbG8DDRV36KKxr8aQAz5NniwRMZs3R91FuQDrLF5PWwMjX1u4jhd8",
  "key11": "61eccHpLsK7EHcWWUmqsuYfeTbP5uT21fc515J4TgQr4GS9wMKftnZYMiaaDtkJrsHo1cGGTw93rzgxtNgyhsF4b",
  "key12": "TP1Hf24RVdfoM8jDN69tKDeudGpwFJmQ4ZNkW75MLCu4hdcqBS3qV1xpjHnfSgsntDf7awLBsWfhiEfPPoyDiDt",
  "key13": "5hFCZERXg8Sruqq8bbGxaT3NcpxECBhJoQvVeAf6oUGYj9ckCLVRTAXKkg6nk6e4TxDrDF4dpg4iTUJzRzocpCe8",
  "key14": "5GibiGQP53UGAKkia5AePDan3VXWszysoshjT9Nm33Xd9Cyv3srWp6ix66gmVukLnc8sbuhnkEbN5ovywhWLELrd",
  "key15": "3BBJG1nmNMCd1jvdxgt1Mz9A74uqTevwQg9fLAu373XxDDTGjwG4TGKrWvC8GhdQHTKebEpCYSVvn78oCGNMTesG",
  "key16": "3xo5Vkwf2BECaXgfrKKC1eFieL8iCfdwQdJNLwWXHZXwCb3v8vQnCzC5hrCvnW6STSLrniRnUqHoUA8CrGFgAvtD",
  "key17": "4PvDpKkUgKaPPvUvkSrpassbDMAFSeUqbo47F7NfYskUtKqRUtZeiNJgc8M5q4AfFYH76u3nvBEzNg4ZqjmWYXku",
  "key18": "5YowcqR2CCHU4prvF9Ex8VrQ1guTui5DoxAnaaHygosukDES2xgP5By3y2e9VNKpvoi45WeZdLxYDxZc5XzU9mPc",
  "key19": "t4x6kknzaward8Ub1qmqFToNa3nsWmrgpjgHXenCdApZ2uVarPaDX2ZWzpPWEdxzP7rZPWcBnUMb7vqAW4bitf7",
  "key20": "oabcTW62v7rgM4aU5KC4Y9BSVFtGTJs4JD7P9utLbWeaPBj4z4yFaMGJRpMedtdfcYapWxmBCJsoz9bVWvH8qdK",
  "key21": "2oiAhWbC5h9qD6qCPi8qsb6Gn7bCw9eVFqB26KLryqnf1xrAEnHPCFg5yDNZvMZcp2kJQQJN4r7MUMiPWk5xxCDk",
  "key22": "61DtWYj5Zc6ZUexjdDz83t71L9VPMraVRmaZZkLwwMC2Nt7mZjxZTZEY6NNJ7p3vydAifYKtvUeaw2Ldwwrq4T1d",
  "key23": "5L7LtpifQFAorgNb5vSRCVY3aJH5mATkjzQLnhgfh14UYGV45S9KTLkPgz68qPwETYasHt6mykrxuKo5dab6eE1o",
  "key24": "4xX7iBVm6djfA1FseZSv6kn69aYp2NRGtZk8dxxuCMvvrbbeXFhuojaV9MaCj5ZzyxLMynAGmEC14Dkgmgbbe6iA",
  "key25": "3yoJtjeCcBbkmL1o9PGZD9KvRscw3bUSrCTVXtaExvCp6Bu7iPxVykX1wsK22wEHsDEDgfTym91oy7T6NeyUdSHE",
  "key26": "2ByysM9bFZShp9bpSw7fW8rUun2yhJFsvTEJMXabMgu7RAEv3JXPwtS6wbppG1WGdxRj4umHT4vo6nycYeKS6VJn",
  "key27": "2Xnd8tUvV7Suwz3FVjLj2jVUvw2o5Jf7GZeYwbb5KuD1G3Q2zsGGL4goxC4kx2hBYrUTpD1Z1BRPJrA2UUN2vZ4J",
  "key28": "HQ3qW7rMmRFb29KotQm7u8bxpThK9phNjcHC29MMk42Ym8xqp8w9dB7VZH8vfuUSkudKoF2Rz1PuxJ6mbZUzUAY",
  "key29": "2FFPmA6guJvzQ2W12YHX6NqboGqPGP3JBBQNDPfkAXKSMEVyzMrrDSgAUv45wBdAMvUutbas3NWVnDeYxTjBQDN2",
  "key30": "4rJjdGXKD7qDk7BjYyus31SK89QogngVB2rTJTexnntfUc2s684Tjm88VX6Xfq2xgaL1EMfzGCFbru3rekR9dVbk",
  "key31": "5mcwz6ZEag52SiDhesLNDke1hCPDMNdkYqEVocdofVY9VwW3zhHUEBCvyqgPovyK3aTP74v6abSb5hnKE1CtH3UT",
  "key32": "qmMp4Q7ZJ83NkLsp2MdZpvdkFYaTR5HpJMxhvnW9brYNkWbFgu9cbRC3D3sgrmu16AUjJDtt19qnAnyivQDd38m",
  "key33": "xFbnW42GGDEDrCGkWTUkTVK1GN2zFrxjUsZcYL2oGYyVAoV2dSGtNAStMB2ePHaBNr1hMoyVou3Pe3nJ9aqT94d",
  "key34": "52AzEv1vouY8MZEHjumm4sXFLqZxG8TFG5kJVGWZKnPB2vupPiHEzyqGg5UmUBTPZDGaJ9iPn1z6xA57dhM9JHY4",
  "key35": "5nXDEradt8DhnyHhArKD2JHgPjLtJk86bvP5H1hpFXjsCzH3CuPU6k3afNe8ZousgwMu66zzZdj2nnzrNfYgdnBG",
  "key36": "5bN1VaDxGLyr6UtKhdRJJrLC8Gh78AxRM3VihnFQg6eeScijMcAJyFX8U6AQHv5f4swyaiQBs12F6M18ewJ4RHsB",
  "key37": "5HJfNbAZtMmNgV2tJpBU4rXxFnqVno45eRFipqyySUtbvKtMteBSSEmW9gHWCpVBEdSvMKRdciz3mCZ5fmrLaQF7",
  "key38": "24oSfWeCBmgphmnvDwAd6BHyDJGLA25rEykLbJ7TRE45RAZbGvry5qFk2fY8bN61tzzesQgpbk2jqXsBRkM9NZNV",
  "key39": "2UP6o8sPvZhrhmFota6RoUsuSx2Wb5qq48o4giBTMqK6jZfbk8iFkUhn4SBtknFLiNtqGpxmQ6CXYFV4xesUxqSZ",
  "key40": "6ZRoWbzf2vq3zUZvREK17gpad86v6sNBD9dLLzK6z7roxRRu4wZaZSkkWd7NDNNktTaRpxp6ZFZzH5dip2nRoPQ",
  "key41": "52pUj84ctK8aV7rKJsGdVuq9AryxXf2AVQHEVswLFnGQtrCD49uh9TiD9ydPJe83GUf5vKnPeqLBu1dWQVhS1sen",
  "key42": "2jUdENPLEK6yKWTsfoX2txV6m4Eq7jt3LysRZWjiaCjoU3NCeTkMC7H2GjBNhf9aPniz4oMqFDbLCZAcqfziWoQq",
  "key43": "3CKbnzdaSsFkUua4a7UyiPFVtp1GRR9XwMxPnPXGjxgYdbAvMHyis3gixjp44EStUko3QXikBqi8ieP4Q2qMiZeb",
  "key44": "25sTPrR8yntKTCJoMs1TQpoovkeGuifGhqXj7jcBCXbGHpDBTdcJBYDnEt5UFCQWC9taJM9CoHKDGsS2pmCWUZrJ",
  "key45": "3atwiaSw7m3YkX7PHeFtUwvFpgfNRnpxjvMMJd1Vc7D2hReuwm58EAuxmeM1r2GcGzopbnbgAqg7yZ7ZkcVVnjKp",
  "key46": "tQH7naZgyPe7twESxsZjxaz6Pz3vgSroBKWdma5Yw9rFnwC5Tdi9pKGbWUc9g43n1UqSKzqay9H7sRmMbcxxNPH",
  "key47": "4aEveyAUX8St7t3sxFQRjZrNbyLgnh8XRwkMbqvjD1uy9MvjvNTtb24T7rSeLK3r2pUu6vvTqK5HLRctEw3iTSYk",
  "key48": "3tworP9HKZWsUrcwS8S795sR78kS7VVtxKZ1rXjaepa4dFjCAqzkAeWnNSYaYLdZK5MvgNuKET9vmVpfXbCj5iR6",
  "key49": "xJyxKC7ZWXY2fcpPJkiJpMmdJXM8TjkYGJuHWmZnuJcYwE3xYVmWLC1WBqy9JWZwBSBMcYp4Bw3VGFJGQ6jJvME"
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
