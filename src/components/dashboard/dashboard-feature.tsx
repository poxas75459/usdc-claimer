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
    "5UKiji2ovSzT3GgzrqnCX2NRpT6vkmULgnbE6CEdJYJ9gYaWqUQGVT45ArcMJJZ91UHQ1zwvFfAUfNEk5oigGBb4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZepKAFSZff22SU1aVxioxZhxgPKiAYQTz5TGiX9esPfHZhN3GqDAxJTK8oVL3HRexCS2j9BJxjhGvMr7RiMCRxZ",
  "key1": "347Dc1auz8isB7WZE6SAzWaGoQVrmrzJdkopNYt3cWQgWr5mGDQef7kc8j43QSTqHjcTBMzFdsPkKvSbP2n54fQT",
  "key2": "2sfxCKdib3ZtvwJf2Df33fjSFJatfuUQNKDf7T51ofM11tLhSqbK8P6xqKuzFLFf43vdohZMfG14qWZaXuNX4wFj",
  "key3": "9nkSvX2pk68g98pnsbMqkDQEQd6y5ZfYmY9M79xdK7jw6fDtdmy6QmHyB3j1uJL3pcK7GsV5gRY8qbGMm6PzSwd",
  "key4": "3UMMozz6kf61Mv4wuPwH64p5B2CrvjxMqgY78NuYJnnLMw88j6jf69f6fuSVGamX7w9w3x4JsmJPNND6h3uNAZDb",
  "key5": "2eWEY83uznxuvhRurhCgdRtWtJQDMMum4byiseGyrZ39qudbHQXow9p5akGeKX3UVPhu9DufkcSbLW1LbFgixWUn",
  "key6": "2tpSH4sUkqaUGGxLPJ3ZVgi5qTDBbKcVqgqdbXNExm1gNbCRnyq8mfHYeBcFQ2mdReac2RocjrfBEzwZao9ZPqjy",
  "key7": "5gdjaG3KCuXFqKmvWDwne3nnpDuCiYPW7v6sLDQofGUDwM7SRT5VSJziwU5eDvRZxzy7HkMW3Sw4W9mQCDNHqbdp",
  "key8": "1g8x8b4VqYTjUzBe29tVBM7NXWespGSPFtfLdS3ewQA5Z56oCTnF4HYjuWL9sxjgnFyo1dZmxSDwZ9aJERQgYML",
  "key9": "3zoUd5ufkBZtBNYRxWKgtvy52zhV1y93zs98P7aerpWJaw7K9QHZDqMf9aUBPX5WXj69bnh1y7n931y38MU754KL",
  "key10": "3PmWMctYxBBMyTkSKo8wKGr5YFGawW8EF927b5Wvycb1HXxtML9JXSRYh21T62Lg9V54NzLCPdejWXeYbd7JhjdE",
  "key11": "61A5FYPeam7bWuSD8hHTz2ijv4kHLK9WpBZstaP6gd2bDczNDQF1e4WKm4cqH3uhJtdBpNwThvoaFvaUHJQnvwLY",
  "key12": "kDxtVZ4n4QFQUcFeNUTX7ZEvGiJD6YFmomp54w3QkH5xqs1YaPNjMSkFX6Y94oNHnJ7bcMXQmxDRrn4FggmcJNw",
  "key13": "2uqtSC8ugAY2LcHXc4eFQeqUDVDPbt6M4aa4uszNA5X39YTEQAebXVBxHxcqTPw8SvJEfyH4MmQx5rjcVGrYiZs8",
  "key14": "3okRFRhx9LUpdR8JTxY9WUYq7mHAt8p3udMJzUBVWXcJLsocFxZPworLGBr9x9QoKx5RcpnPd38VbiinPFLenhQR",
  "key15": "2TeFo4ZRCAmsZckA8iEoQDN2mDMCLL18Jnv9R8wxRc3CK7GejmAaasjJVYa7GCqMUjjfHoVmbn2yCjJVz4eN3nig",
  "key16": "5nxhDXGr5LdC6eGVXXpvd8gorveRnLNYB52JB3UMwf9oQYXjvRem1fe5ZKAXNzcXZyTCt1y6CRT5VcoLr7ErZpsX",
  "key17": "5EmHsuNdaRZu3Zg9F7jCXW6Jvqx81duTjTSfyUF2fQruUXYPcy6GaQ5VAdH3dofCgs4cRyaS8941v9cfBUDCKFiF",
  "key18": "2dXf7XfwbcBYLBFBaFwdjQjgAgJDLu4t8FVKV3tExzsCoi7rgKVneMNS5MgL1JfjxVjzvpnkgUdDvuWhCCnZ2Qg1",
  "key19": "F3GcuHQJ4GMiBpxoB9Uf9jFvZ3qWrTNVcvbGVV1Nb5cRE71y5JRYswC9d7UEQAw2fJABTwtYigmsPb7iWr4fY6f",
  "key20": "5Vjw2HgVefVktPqobYBRrs98j3QHmMP8jX552T8B7nDipHXtLaH1JxqiJXYYr7pJY1Bktj1Cd1qJGP6Znd56B5t8",
  "key21": "5jWTdm4mLU5JfmWiKTJV77S8Rja4tqDTRhMv8NBTorkBZDSdae5XDmPHPvEzhC6iTi454sSBuVSLk9FU7YWj38vJ",
  "key22": "2r2xDuF2bpNE49ECvyyF92AToowVZiGyQGomVYG18MDboG5hBWf3yjn63HZq6uRiDu8o83pL3ooY31p8pWhgwffk",
  "key23": "23UQdeHrewrVnQRAwPQgDd5LGdDb8fH4VAjhxjEig5R5DwdW2tiYdyy49SwNjniBz2KutMjpWVqc1mTANfCF5AJh",
  "key24": "3h6ZbR6MtGQiRFy2g6FLZQ53oQRVZoVqVp4WoXk8FtytXHA9gHwMErtnHWGiaXXr18vZoFq5MWuGWfBCM4pNH24h",
  "key25": "2Nrn5B3SV1fZFh6hiua8C9aLcWFXCN2bpdWR3aDEHWtMq4JyHFt6pHLX3Y4Y4CktBR4GuFpbW5pgToeLEt3S5Mw9",
  "key26": "3vFWMH2myYYq2wcykFtTTrGtQ6sQSwX1ZS4YzMd4GMeBM3M2Jf9AGgBhBHSynFsFpceiySjeBUT6erwiaAowNk9L",
  "key27": "X5WjNYNqHwo1o2bsbC2QLbKwZLkatXKLowjxjNyDLAHooP1pcGN5fmXiipyiAHSWCKc4bYnPSL97pPt71vwA6yz",
  "key28": "ncNNvg2ngDyEaKZAgUD5hViN3vw9hDq8rgmZx7NXa5NYqaUDfyJzhdrGMrnTJrtbRfv3d3pciRQ5JyRTiSG268o",
  "key29": "HTn5SqZRVRfthX3L87qKsrkSkWUvNPsEBKeko2YjGnaCyAPfYdhMBC4CAGRnkgv4i67uZ8jgfoGkxx8AB9EE3iM",
  "key30": "3vivLKDcGFiauhyYkRFpFUYHF5sNdgTAXbUkEc6GgNHKDZ6w4QFDdsx4H2XQ68qNRo87aH6Vz25riPZBv1MdeMe",
  "key31": "54eY42SbYz3mUf8pVjzhhTM5fw6ZP1RVsEVMJ1WZUvYKvRdWZvSY23VeRHXekZGKjxmFaNooU1XRqkVCLsHoL7i5",
  "key32": "tW5ZJFXR87qpUEnRC8dAG3KyCUHi4kG2kkR7E2TdJPD97xT7YQpGHbiw8JQ1ZU9fC9AJTBtpZbHeocSGh1Q2jmi",
  "key33": "3ohA2zzh523i74ZRUV6AHkNkpkujzjaa9iUxRhAF8mFqJcLG7MDoSbNsv3sZYEbHTLFMgznWgGdDrd6WJn3JcSkn",
  "key34": "66JhyYQL9U6ChhK2sPEyUyWvABVuN75oAPXYk5CCu37GyzbWnK77PDL2XCxw1M5gas89fJ7s7wqYRPdAqtractE3"
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
