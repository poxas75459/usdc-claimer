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
    "5Hu4FwhyFUU39GC3oTftf5PmWSMnAT1eNFCn3dBmeJf9nruwd4mrPxzq8QJGnpniYAhvPa1NoMiaXtbiY4QYdLMr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TGaSSKp9jcdnP5Co7hJskFt5SwjoR5MZDA1gUz7B5uASt2r8rSQ9kDjMiQvjR6GKbJ2w2tdr7PGzU3Bw17cfGsf",
  "key1": "4FvbsddFZuXSCVkbjG31HUta7YNjeHKKJDWM7dxM1vn388nhkCzSyHrMfpuaMAhtNGR3n9YySJsDskpP3WocwwPF",
  "key2": "H4jecjm6rDTk2HWguhkhH2fQud3TAL2oDoH4YrSBJXz5XHqCEN8yUc4FHNRtxfXpWzG1vHLNn9aCskL6XCG3cBr",
  "key3": "5crEXgQuz8K1G3m4szPGKqkGwgchr2fbXMHRdG4i2riDBchDjh4KVE24Bg5eS7eoFPimtTEJx6XZqdgUDxtHvpKs",
  "key4": "62XjRX9f7r7jqkbPEPRPpyvHaLwCmWJXZ24vKHcqGoeXsc7PTqUiBwfQZJPcJv2mH4JwmLYW8CPahtSaidLbWSwK",
  "key5": "3eA3aitKdcxJvnfJXH2ieJsD7iCgHaQ2dhpSMghNXUYLcd52sjDWdxEr5u3265GMbo8Vx4GBaYCVu7B97GU73DZe",
  "key6": "287cVfKroWHu9iBxCXqxXc9aajcFAFX74cqPN4tkAWmjVavjTVuVLZkpx8uffCcrMnaaPCUNBmFagzarcUZRSs2X",
  "key7": "5R1Lwd328mJExaEXjjRGYpJs9VXaNmXRLuJp4FTB6ty8TqYCWFLaHC1h5q1zSpCEfeffKwfg4RPEeaepX6yMSNkn",
  "key8": "3KR5TNHj6otgTSrUnKd1Xvwc6xRMDFBAccwdfHKXKchDANyeZcqZuieszxbqaTLy9W7JbKyoihABCT1pQxgfddRo",
  "key9": "5imByn7xZC3Fz2XY9ufyUeyNA5uJKgPeJNW6podCALkjczEHbgLU7Gh4JhrBbMrNcDgWvxtpFY5vUfWZZxZJAhiS",
  "key10": "36MrMqvEK3skhKsPwXQTp9XaoqDxRadRq7ZDEPXufQ4Kn2CHSTPX4s5jLTKP4LjkgTBP1SdrBTfnKNmQZU4SpPgE",
  "key11": "4iZfpEdKXc6CeaMmTnxKJ9HH7Tf8vUemvXYQgzo3xkwnyTS2LGZFfq7mpBZZWhCBPQfQQdSvxTRippmVbyzSRK9C",
  "key12": "2mdbMrkPBXMNso7jEAWAxzauHp7zrF2vXCJ2s8zF8P2KqUBTEC2SvutyNBtApzZ8WwpEyaSNMJUkptmPJ1dojXoP",
  "key13": "54oPD2RwSJn74qY1waeY2zSgoA5Tjv8KujhpCkw77zVABy3YWoLVgvW9DBWLsgj1aczPp2TyXkuxYtTkoU5y1ntm",
  "key14": "nadZ6gpNgHuc2t5WXwqMP53GtBmK15MNfN51hJmBbtY5uJp5fh7pjgahFYhnRjmdgiApTgAd48hCotjZ1Q4nvc8",
  "key15": "4pkHPGTSgj1aj8FujtTaXnsDfjk1WdtkmsZWzqHurnERUq3tDDFdQvETYQz4v61Hy4aMV66EswCgz5sHrsJNpfrg",
  "key16": "4erK5czKyE5YqbCJjhbKsrM1hfapQNWrf6JhQ6CEnmw4zJX46gkg5iHoe9s7xHuBUyLbuqwR3RWDgsJ4Vf7SxxKj",
  "key17": "3ScCrFUFoPk9rtbb5LQ5LUutnAe47SXtVC4ZKuffZGM1Cotm5UvschxGfX6WREXEbYSadr93BF9bmg5r6Q7HLYgM",
  "key18": "dBGyQMpvBD6yoqwuK7Qv1Qb5oPCoBB7yiWvw1taoACFwEUK8FpVcnx5xtdprnVidtEUSi4AyJYhRVWWgnVrvvxr",
  "key19": "3mspT9iYLoepmkzs7VtasvcftKKsKaPJ67PXrvm85QtDakn7Ps7weJS9BkHNMuiQCPLSLv7LtnUk2XjBJjyVTFHR",
  "key20": "2z3WyUcdnDuvvv4CJDiWidEDvXeEdiR8bB2Jym1DEbEzidKmE3i1N1wTeBqMuTpzqH2i9cqp6tApM3QtZvyevyBS",
  "key21": "4xwGPJKZcQkRDBAoJR8JcaZgo4aqQHvm5rG5uuh4FK1P8KJLKeyogze8Gt6hjbmKiJY3s5W6ipTr34ST6V2fSHZU",
  "key22": "4VfSrj655Vk4tUVtE6CCorXZzXmG22GvvvuV3oXnKiggBwc158Y9vkugqGa7nnC9yZB5oX18u36VXDKXoTuwdVGD",
  "key23": "4wdt1o6W66ijNtv3vChThXYFerLB7jPJSmJ2xMCK36C95Hveof9rRip2jxHBz5EM3AoonJVk59por6q9SaGdcmwt",
  "key24": "5j15pSLM2TLPQ4RvzkFGSR92PZ7t1bisNmeb3G8A8LahrtTZ6TM68tpGwpwk7Y1JWUrv1muo8WcB6Q2AGF5xXPkZ",
  "key25": "58VUuUHACZFudAb1MqW2t7C2mnWaXFPggmqBeqGouPNVZ9DMcMysMGQRpi4vKeqPZ53XyJGhE9uam3wDqDNzDz1j",
  "key26": "3Dyy3MD8i4khFMryTuFnW9xDCkHgGJXzhtAdriUtkcwavWZdbfpQ8zuKZeHW6QE82FXDgfJtYCQJdD4faaBs4449",
  "key27": "RRDw8WSQYtuXLfMCBnyqAtxCD5PRFDynaQFF9eczvcqTvXCGdm2TryJd2hSHuf7aGxATtp3BgcKSExLuV8G4394",
  "key28": "3bM8zRrZmWHw3Xy5ZHtzpDSjAQ6p2BZ65S28tpHicXGz82PFAW7pvdRDsiErNKMSJyKmxSmoUf6sahoTFWW3wgMW",
  "key29": "tKmqghfgQUZDHBMt9xih4txyszWGf7cPr1dzoXaFPRc5ucAYMp1D7hDqVGZSTR2Wtp81vq1QREfYJKen1LaNzHp",
  "key30": "3Lt2KpBHVupZrgPd8wgE9x4AsE14LaNvuW7GLDP6jJoPHibEzX3BqkKGiSk2womFn3iTiqtWbve5MSiSKmpnrr34",
  "key31": "5VqRrat2UzhiSHrswztgrJEj4MFev4b3VsHuJtpSJ1F1z7yDqsathHHRWPfQSuPXWQvwxzgURAcoPfJtR4rHAWB7",
  "key32": "2haRu71sgceWMPc93cZd2BTtRuSoSwDjML8dKpUvTuhTpwX4q9AF1tMZ1b28eKvkzoW8rz483MSDwJNiSk2Zp1f6",
  "key33": "2k8RioBBFTobf7fUeqeCLX55PBKAhbpxjJvKFckjCVyNv6qjBBWYrPnb7tW7jtLf3R68Hv4JZhqKEsJcT6A9gC4X",
  "key34": "HctSXdr1ZrrBngAmGaHizen5nBcv5uLc86bVNAUXkEdt1eTXFBsh6hAzeg9o2UvgZZGSbT1heqpxzCWxwnPqM3S",
  "key35": "xvLNDb75j5ZvT87nwo56VGsZmQtwt1J6EoSGz41mMfNy2WfF9QGz1CaBGzs1FzwicMriCqzJbCqg6pYAy1MH4Y8",
  "key36": "3V7UkzJ97tjfdcYc3k889V4iPUc9sKSHdeDgHsEm8NNhMWi2gbQ9ivaXzQQcPb7WSNbMzygpK4aAWZ2pKekNW3eT",
  "key37": "4AeWGhEXzwqS7ScorBQ9BG2tYYBXRkHoSB2LcpqvDTBnFzkmzjwno3aCmj4qTWbUyE5LANUJ1mYYZS9zC9Qnvz8E",
  "key38": "5wWSUiFiyTVeYsbqRxvYKNWmf6qZuRedzwKdMCV4B9PF29fiDZi9Cz3H4Ci2G8HscTYsBs8LVrJv14R9sk4ihhDM",
  "key39": "4jtX3FT2PSwn3oMhereuehfbwE4pH3rEzK33wp5HNmxwG7fXnajx9ENFanh91y7nNKQ888AzgN2g98oQW3i5ruuk",
  "key40": "4YrqBeMigFUVjao9STNKLZtavkThRsF4b6VBHZVYbnu9e8GCTAQJVfJHhfz6hYztbNGrLmx187SsDYySqu8HZgaK",
  "key41": "E3DJw7iuBishqGXoNxwcNSC8A3xs41PceeBj2jgdn59qgYZK8RgyJAP2TiVrqzB5WHGcyRH2Vw5eumdifpLS4Nt",
  "key42": "mKk1STEjNJsBVPiX1MKoLiEsDLbpZ5CtYrjCc3CFPxbuKpMabU4RXP5CfG3dcUXjebmPNYudLTUFc2Zkob6hHu6"
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
