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
    "67LsAu6QHN61mw44EpMPMtwEamSwJvmBMAUnKkVbhfQuT8JRVVQmnbJJkiJPu6xu5epLHpeyYy564qu2ZhS7XgjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jgLiPTaByDspjLuEJSaMrxHviyu4XAkkx6USKCdJd6VUyHhkQxZbNbtKgsU5jrHCR2oSZD8yLXhN83pQDDBvc9r",
  "key1": "2S9RfrB6E8D37vXDV2WCXy5ky7JfV7CU2vrWDPhvU62fG7DuqzQT42agiFpwEwbYyLAMZNszoRhMQNqXvf9h8ivK",
  "key2": "4g4PRvxh7DwvtRr5dV4futArKxrzvydHJ4N7AN2ZFydrPcJnwHrzidauCJ7MFk1oLxDjqn9ckh5PdZkoY1TjciQ7",
  "key3": "4w8w2DQiiXXhZB8D7whU2wHz9Rt6RYSRhYXbWuR67WJaXbU7p3TJwD1Be7QtZE7afi6bwf5nsQePFxxfUcQGLzGS",
  "key4": "5J2ET7v8cNkFBvmSb1KTANJoNR78d6LvJzPtvnScV7LhhSTaHLeVrLXnjXpE3xSmp1qw7BcYdzoQgQ24oHfAkWQX",
  "key5": "3E8NMQPtpjai8ZRDDD6tmjYcTayZUuq7PJGFXHz4EJKX4WfD4G6H7GQJ26kZYU512wAFXGesoAjJHrwFU35fTm7N",
  "key6": "ZgvdEAiPSNTyqcuB7D1eTh6sZ2q3uxQkQNj9Dnu8MDAMaatNrpGXWk6JyshVVfqTwAS3yLLUVfwcPEFvH4bLP4w",
  "key7": "4JfKct6MRFHsACiHPabJfL4QLRcqmTAgEbNzenWU1t1eVRmi39o8sZke2CkuH9YQj6BSazwooJ1HZ8i5oCPBWo8S",
  "key8": "5FMvaxQNDVm4eNGBbMhygJEF6LG5Ae9q69nggFADyFYuijaQhNoQz2zKSVdnbfpKBwRKEjEkDZ5vxZhYhnSr4wVb",
  "key9": "4MXbR7ynwRvMmfSUnUaqBzxMdj6sDV5USPNDohyMQroXsKRXcJPyjQLYS3yHT2o39ZbtidZyPWYn52vXj9Yuxn4y",
  "key10": "fHiyFmRyRX3FW2JUsdXCdo6RyprQGJvTt5LNuJCvKtodMtsR5JnYqDXjNfopLzPS7Up54fXLzxs3nk6hDKPDJUQ",
  "key11": "52pNn7kh3EAKrEAgVz8991mzMRnSmZGUwJCoMAT87xF2Zswbxw4ttJY3WWRjPRCwV4Pdjy25Zkzw8XzCorkya2pu",
  "key12": "2UviW7r3CN5MqzxsVqcER1EkEzswGjxwtJN9LcgcF6VNvNHdzLTxKSwt6mPJLJUpfggEJX1CVkEU5ihVn98XRCYY",
  "key13": "3bPJ7cGDmMN6Jr28ZP8zEgJbWMVjSL2oxeftmqLn6yVezvSxmfaKwFKzZ6M3exgtVVqnmtqsPGfBAkF6rRPNJC2w",
  "key14": "3iTNa7q4RzMotf6qryfmMRSUJN8TVoNeFq9rvRJUXVvMwGdCq1zt6TH9c7RWMTXPLS4dApNQcDddn2HyZkqH4NmZ",
  "key15": "5XiP8juzyVAwFdtsAhzPZUrA8F1ANkw8RWpGf6wyyJuzZXeDGN8UxD2bn7ihGPevXnXYv9XYQ9bX6TzLz5iozGYu",
  "key16": "2VdxsiNce9dKmbMDgZkd9CqQ6LPDEEyB55K5jx9FwXeUhdUUR7MdRgrcLXRKZnxjyd6Px4gATKoDDGzRsLVYfaHD",
  "key17": "asvz2CDhyNuvPuDnZhat8bGdRNr2ZD3MTkqyPcyZUev5MtsfuNuuC6w33y7KbyizDRQVgU8ZHMUtkNkwjvsMbgY",
  "key18": "3CCjGrQoB2ia88wyepP1Y54MRsrLjYPXHYMnQgA1gyQmuEKmRp2eaG7xwqPFPRPMYHvzxXe2ZzCyt4of4SxeksSC",
  "key19": "adSfwHwXha118rSMTruBUgUipGE1w7xs9xt1tYgg7eKKfLyQ9UFfoC2uqVmu3BbyVPbWV8MY7F5DbYBepM3xwo4",
  "key20": "2QeT98JbiKjmdoQf6rudyA4qkM7J2cdBav2uLrTURvwwVKQvp5gqWWBN65xE7RCAzBCGkWFN18EBx3858aB1ts4Z",
  "key21": "3pif4Qv4y5X6bTeTHU4GM2bzwT5i4S1fEbUwU9iFLyisR1ARse1FmyFLzHzVMNyjzwQkop8LE8aw256ryToYQfTf",
  "key22": "hTwdqxzpWvNCycLa5bCjnNGYvPaUFAbvDvkrnyjCV8tpcKaRKL63XYPjkiw4erGpohroSXKiRq8hJZquSto6UoG",
  "key23": "4SeR7a2k1LhD2YxqAUNScywMc6Aa8XSeN6LMdzmtQ5x7KEwyfWr4Dk2ZVotVz4rMZAZyYV12TQuS2gPCzFULUNcC",
  "key24": "52gbpd4VkujGamwXVsaoGZJCvyMCRQ3wxhpPE2mXMJ9xQwvZcssdmdEUKjXEF5gqdMcn22KaBECvJWdRFKfpCkPd",
  "key25": "5ZSQarshLSzpZtapp9Ctk6Sd4LLeza2CyQ596msJ36evXRdfTgbnnTDESjqg5VBbXreo21gwEXzqH7pB99vq8fTz",
  "key26": "3VakXemBHRhuhnt9By3e3xZMdjhKGzsfNoFRAhqxYeknCHsHJBvdWM7wQLv6pk96HtvHDbURsoE55YEjc5fCCqeZ",
  "key27": "5E6wtqCWwk4e9y2AcPjT62HX1ySSeVa4WXqq2TrHSLC3tywu65Xdsnpqao1taBJ4AQ2p9VWH9crgZepoBHHgBLSM",
  "key28": "3oDiuzu56onxLQQn7GiopjiWHThsu3Bn6DmeQaNC7SYBGHd6AfWFY94aCYqqQi497p55AdzjRhda9CBsVZET22zW",
  "key29": "zCJR5b9H13vo23qjEn1BemxUmW5BDukDjnENoVjAv6ytt77SVwpCJvAqu7GARM7bvrv8tPABGGxRXBvE4Rc7cox",
  "key30": "5RsYi7gjYtM9CzZoXQefYGoLFoJkpAixfXuruymuAn7CGZ1FRFWWriJZkqYPWr8GCkQwL48wbok4bnnCEbkWYFHf",
  "key31": "2bj4Hs7XMLczQ75nAtRA25zUfYdt2UFzpnwc8EoSZa68cPFXNCF5oaVejW2cgecCn9qayWyGN9CcrACSBFJjiTbC",
  "key32": "4cUbFndM737vLMYPaSGTw3jTBW2dD5qrJvfYzAoT8nKGJebf76ue6HVREtB1Y3DERDGeK9bdV26WDF4FJzdxy7TG",
  "key33": "24DYLEukbU42AHjfwtTpGHsrSPDgS9Wsjku4qX5rxZZ5AcWv1LrRszwcaPcXdwNSziZ1KHg8UkxPUWU97B7bK5Qy",
  "key34": "5LkSSpP9MoRYKvDETG1SpSGgG58zfhUxxeVYLgdjVTnezvtpA4hByuNV9uHiPVGFcP3Aoj1yY9GaL8mBZsiK3V2y",
  "key35": "d4uEVouuWUt81Ub26tdcWTAYdFfLCRBNT4dpEpoqiUKsLcXxjx6YfGpE8DgANkZUfDt4pVUMJPCicZ6FMoZNL9a",
  "key36": "5ZaEAFsELxanbxHhdhs4JoN3tcZg7vRN1UjMoX6UfFtNeLzXw9dL6uGz6PzEnFQkR1sQqLK7khXCdPagEJTx2CbA",
  "key37": "wBXZDNeSHVmgaShR7EFCuqZQUqARkFmWS5DWFFTbbmDA79DWFQyvGXaTe1i5uKHS3va876jcVWYuZPV9s3svBaf",
  "key38": "4hkKgcnifD7Zt2mR7J3epGs3BtxaTw2rdfzQfZkYuNyXZjsEqN7TMnnU1Gdj28x8b7fryrNBpoZsJF5rcUFuqHLv",
  "key39": "5BAG2F2gks8crv3GdBAYyj3Dina6Xdt2KEuSxRiVcc84WMGoRCjr2Wy9wU7L9heZhQFLyrEyGXUN7AcoCAvkw8kb",
  "key40": "2f5NT7DFNEhvSLEE9gcoMbdxz9YLhw7RiukAErjeBem9FEh9foCjfJ2wrZtM9BjvwXywSGpBiDoRXFqPRcnivbC8",
  "key41": "52zfkJDBRcs9DvfXwHvJCpUG5dRUELqRP41FAYZXj4apAogcbLQsVQfNXyPAzDbiooCXT437soonzA8pEnrZ2NR9",
  "key42": "4tFenB2eVqg6i4QwcDCG4uZG84EHshAsumAqwXgFdQ86AYrUjfDC9aVifSASnQgttYdBTFEUPkm7rz7ea2mzZGmQ",
  "key43": "3kAZiaNJkaT9heMsWi2zMK2dGUtbyHMVNiPZK97hgK1vCDZNS5z61cSy4TdbhbHqVAeCu4MiTxBkCG5rdiYWSAUm",
  "key44": "2qXNFrkJtJuyffVZzZPBjgbNEo59TCf13k8rgGNQbz5B29ZmXN9FAM2EZeQBTP8VGWa5HwwyhGtXmfzrieybMCHv",
  "key45": "2UQD2aW8U8wdtUrvtqdYGceHaxKz5qWhURN4Ld3rQMss5ggrnMVaYHE3BtZGWPvEPAYnHXNhwB8ezo7U61z6JP4d",
  "key46": "4dvCRmJKqa9vTCioXvKnF1BJY6q6WoftpwPQK84aJtBsRktujUCUkhzmDege22M2kD8G2s34ys26Sx657Ydq14f",
  "key47": "5ZkLgZHigii6r8evTfZjSc8EZumm38swYXntjTR3ZuGnMeqDNdRhg7KpySd41dBLrhoTir2xju3j4AHxrourAwTE",
  "key48": "vdwxs81uC3Bt3xDRRSVPxuZpaFaeyM8zSrQAyEwas6aJKsnV1cWmyWHCkH9UGLQLPq5RJXVTLc53tyipDMQ8v4j"
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
