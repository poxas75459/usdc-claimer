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
    "3Vxir9m3fnanBZseBvA3XSbarFnUAHbs8ggdqBsJDP7RsRi3YWspSAjDhb2pRvtSz4DL83mWb7imgftGb8DjSjJM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N7z4jYqSvdMhPLUQ1uK3WbDx7cpHaiZkCgeAoWyPbxTNLjLJFMpVuHAZ5DA6YLhs3eGnWPeTWv7qMvTexAot1Kr",
  "key1": "PhbSkrLMTMRSzD477zWWy2XNivEhovHLCcbbdYnLa9TtzN8vrQjjUHU3TY9z4oV2BAAikrdNDzGnYejS7GgvptL",
  "key2": "2u8rCYDW3AP8GHdyE2zKuyZyf6L9aGd2ByM53dcZZKJ5JZWq5ersb5UkRz81MQrNHtrozWrhngiG6TBHKTZbicze",
  "key3": "39uMpf6admTtT3mZHAhUWSBtSpvku17SZfZT9Q7qgrGEotRMa2KmFN5H2LFJkS3b5qziccEd8bmmasBaHGj8nC1S",
  "key4": "3jqoaBYRmxoz8iALiy7mdGd5cQUjTkGvFu7jTeWmSazU1STq8eRUDBVhxVmq23xdTKxZf8hG3cWRutdTwNF2D3Ko",
  "key5": "4Emb4ExyuX6uQ2EBSg88qztpA1JnPskH6YVDonDKtUNjGj8ZtHcfzAoBF1tB9wdxV1LDpMpyrtegV31FVrFpNFk2",
  "key6": "5ACWHAr178bKG2vM59WNhPZheMnamrSuG94soznyUkuRHeW9bAUFchxXsLyEjRvxZNU9WQ47inVvzzSwp6fSrYyY",
  "key7": "5Hk7kdn1adMrgujUpB5JJbZXkYsz2raK26CsQFWQTpVBKE7hL33WAJ8p2sJwjChKtdPRgrW45fAkY6Vx6BoY7ThD",
  "key8": "5Bkz4LxMyTfqj5yLbg9onWSQ3E8USezh3YRk4MCDMYqmnonsNnAprVX4LyXr2VVB6MSw51drDqCMCP9aSEYHAL2X",
  "key9": "4T59qxxPYXSd4JqTjirhi2yNDuPBvvpPq77Gina6HTuPNys4XfYFDRRBaQvmypUfPnTFCWip61aJAs4rVtsu3sGD",
  "key10": "4MWSa4fqZjdvtwTi8TAP6qfxuBU9j9LuAC3bmoLq91aFqqJR4J3d36bYjYfK78Vam2oEuutxP3xwRRTL9eCyo6rP",
  "key11": "4BDTxg7PpX4x7yQRxVeYQW2CLLZUKrY8NmfHFrjkmNeAFEEWGAedcAkCFBsaH38GfohLXpnJFZBYx7GDz6WUYRqf",
  "key12": "5XhAc7acGZQ8Mt7HFhNM98xPeN8FVaMb28afPAhbfyoHhqpr4ybpTNG7XfEFnwTEskdaFnCTrdJ9bU2Y5g94Wyxg",
  "key13": "5r3cSmVfsXNmLDhVQsKjG88wZwNEoFVUvfEhL3XyY4wMumvPTmxwoqnmKmk6AHE95tFnaJ5t9FZ81HeVTp7ux4da",
  "key14": "7hGQyoUozVn38U8nLNXG9zhHPVpH4P16qcmi7f7MuDS7DCZSV2bGsceRtR9giibtpbACj2NyhM77rGuRdJxP3j6",
  "key15": "4oJi7jdjHd3z2Mzu5xNJuuSm4vs9ohuGSDCNTM3X4CJuFSG1rZDV8YFCdeAFjw3UwGbmpNJn1MeUgUfZApuzwJLW",
  "key16": "5vL2oHvkn9PBrnpj5LkA5UUMPgPhk6a5LwKzynpHkJ8LJK2XaK4vMQyjFSByWmafu5vnBDeGyL8rJfJSdzHgrpGG",
  "key17": "3PSvZuDHDEasaBDJA3sY3UKANaKJcxrpUjvMEzJmqYYAcCCkUZh6NRDkEdJeNfHcdGDWcso8v8fLmL3JAgMToxyz",
  "key18": "3e2UfCFCDGFew32aqAXAuPHp6s89b9xmKRwjGjYSKmSwbTbdfjhEiAsd9bqgvoAhkUWKR9xvcvUNSNkxGXDV7Ydh",
  "key19": "4vigtbaNfJizwE433jWGmJWF2Rn8xvaELr8DwRwgqYXAo1pf27HLGKR7pbTyFSZrpkD1jWnpdNKirfn2g7iJMmgh",
  "key20": "5YHwxaSsd3chYHh52SiAhVfExr4PrKfzLHQ7qtvGVWSEPeSsv7vRfqqUyeoSLRMvHhmJGX2shiXpeGoQSxfWUEJz",
  "key21": "UKwUJP7NmkbNGivscof8aK1HNvZqH7sfvFBcbBAGEpHAxzDhGyFKWFcVbsEXQGAUvb1wJVU9S2wsqQTfLSjXg1x",
  "key22": "33Srit2grcbv3EFDHyfkF1rKGgVG1Nneip6vstfpjsbMd9mbNifTj6FFvaHrTX8f2HrRm5dGg8ataVmz2hQ1zVW7",
  "key23": "5sqjqb1fZBRVyvyBVAoLyMEqqCMCJkaY9tLuXZm7c6nQ4rixaUQ5t3d141i3axqtSj38vNDF1y4NCr8gmMte6XWh",
  "key24": "49cPc6uuvHTk9aPdgfATC9Pk7jAmWF9rsB1JtLyMr3WnGAuPoNrnqinnTwNvNjzeUzGPKJ4t2c1pvPE8C2oBJq3B",
  "key25": "84xfENAWC2kKoYnqUbChwcyccaeQatVyYbMJ4MCDwepXzsHbH9VrzVxFS5rSVM493J5okxorSNyizgkPcj655N1",
  "key26": "2rMDvV8xSqNALDtgCy1pEoKPrrNAQmAqYy9cimebqfZQLCND4wL8NaY7nBkca9EeCgtjRkcsAb8PaKKYBjDXQ6dz",
  "key27": "4iACFeqREMCk5TKYD1YPvs2sVmeE2gmEZA8dqhXS3aDJ929kVueDQTcAPNG4uaxz96JjQkSiS9P3PTggStihNcbh",
  "key28": "32qMRa7e6uhGZMLzcLEUub9Dk7Z8iu33mumi9g5vyV2KKDuhYCBJCcdPN45qqvx6zf4UEDRoNr1sXvg8kcmC3HPV",
  "key29": "MpVJR44XyP9cPQ21jXyvFevzAYDFkWsPDZTk74MfojeQ3BK9aC27qVso7EAYoPief6KjBzRY4s57wQuYhmH4pqb",
  "key30": "2xP5Pg6HvvgnkEkkF9pD4ebh2GSQP1SYDWkZYsfCP5wrjZA7x8xeQz3GbySkfKXmXNaSSRfHzM4YtnAHZ8GPVhrd",
  "key31": "2zQwukfNobfETEKUpgSUjXHMouAHvfXicvXpHyrYuChc7Lizoo93ht3XDh4hmpRi4nBVSAZ9PedEtaLDrYELwTsr",
  "key32": "5FdBNt6Fb2RxDysdvALv4x3xhjo5dTyjNjoTxgCMaPXLkQ5pvFKoQtBTnegKBPeomYAitsFYgCUWPmZxqy1g3Q7g",
  "key33": "4TJ5pGEEi7EAPfe6aB3GoDKa7NwmHyHjgi3gdt1F1qs73qZZSYELtKGB4whFPo4my2VDC4EjJJG11GjTJvXJP5ra",
  "key34": "31b5Upch2TUGtJ7pHu3sHpK8eoMveJPjdWmsNT9MegtqbnDvLPAK1QCUBRBdUDLv8wzEBAZnra43rrJNcXMoPnhW",
  "key35": "4kMjwSLUx13dwmgbRKzAEdfjiMGuuw1qLHiE5RYYFt8r61w8hXJ4ex4vxD1vFDAz6niJ4jksW95DV5eyrnYicbbY",
  "key36": "hvQf4Myi5pKLB7U39raE4dof6ciCyPN5ZFE8VNwo612Pcp3UkPfnyfuHB2zucdzvQL6HBVtbxC9E5YSjtupFC1h",
  "key37": "3F29HT614f8axY7ZE7vhFtkj35hiwJRhpkXBzwTMYBJykJWLdLEkMVFRqntDutscrF5oMpKqpXSJjpaER1W5GrGB",
  "key38": "2aNQ6cnTvRMtd83wtFEUHd2Md19LG3dkztVer7ddH4UMo795opa4xpz5SBcm8r9SPSvwWcdFHvaK1jr7u8oaTX1c",
  "key39": "4BZbidywycbhSkDRMn4R4sYRCZNLXcKh92jXmntDx94xv43NjJNtyovNirqMYEGuvdnDiyKVVXVTyGv8J3B4SoxG",
  "key40": "4NP997PyHRMkvD4izBzQGgEG3QKsfEUZyXBdwunKdifSqyj4YQM7DEh41g64trgLfWF3rcBWDf6bxzLWc9QkbNhH",
  "key41": "4wESxsaSzj4NxsoURQ8fPcbsobFknf4A424uNAELf9CyzEqhWuVwWGRVpVvz4528bd3ccbNofjhyk4qUHx5qtFd6",
  "key42": "4ccMusXEhRNLoQ1T5Cc2vn1CXsJizytFLatgYDB3ueae5129MVFRTbdWvuV3woV5VBM5dTyWcEujNkoeaJZZfyi4",
  "key43": "4jyU7uUjkxtUFirgMXzwdn5wR62qZjxjWAS7zTrJSNaCtooqUr3ZYVrywecKdSXQUX92wAsk9XPMyBLbvJvvFJfu",
  "key44": "5WqjmAkX9BjbZXwGeMuoyuNHeBqwH67fRzhD95ELc93vVUpJUKKEWaZBRfnXgDkKbauPso4BNSy1VSfVHnq3g7Uo",
  "key45": "4BCr46EyKhmSut4tYndEr6uoWPTaHKTZQgoJgGszbbdXtk4WJVSUUn14zAVDZSeVmszJNR5TQjAg1CW4BEowuBst",
  "key46": "4dVywD63G17E7HMuymcQxe7KhFzhcsH5HKnYCSgrq6JLd4hwi2PM7bGdZw1uGfS1VkUwV9Cn365wwDKaR3iX5F1s",
  "key47": "471E7R1w76d1Af3suHjbVz4g2prGgMR4AtBd24yLn3xfGyEBRoUKC9bkZZPz4Em2KCdALRYKcsddD68tw4dakVuK"
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
