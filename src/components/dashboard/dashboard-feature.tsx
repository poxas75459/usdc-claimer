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
    "63rH8YkhachHQNXRUQpL7Z8pxxX3zevWzn3qcgkEHLwMRwNe52Jabr2ifAd1wdDRciNDnME4GVGLZNznGP5uKrTv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49szSqt1a1ZrJUQ26FCnpGQUa23fVQtxTuq1Fv4W2BwdMewGxSpmQ68cives5zPfGJcCGd8EZoGPzFrszZG4i8WA",
  "key1": "3fASPdL3msxWLcTwT52AeNvZ7zy8bijfao8LmAXN1nWML6saA9NkvhdG9HWXfSevb7RCvjN8p4yPKxM6DHUjj1jm",
  "key2": "3HnKTdRkFkQkNssNfhftze5yiWwogpiiCqHhX6mLY643CeBmtFVnUWr3W8M8nLxGnPuAetxWrrLWi5YmcSGgFxpQ",
  "key3": "5uvQ3GN3ZqftRTb1u7bAZb6HmRpFzucTK22pKRGDZSNpd46T2VUXnAnFfQrSbxinaWCBvb6uvCP6YZPhE6QDDQCV",
  "key4": "VixgNAFSSoscZgVMqnybqKqyrU8PeKVU6e6eKBkMmbHo4Qx9X9puDQxbsq94KkPSzhQwzvfo3kyiqTiDsz47hh6",
  "key5": "3fvVBmBcWq2qpTb7oDHgRapZAD6HESDMXtGViRWTqyLjCkRrVLEa2ZhKvtCWZSqFPpNocGpjgoitYDe24MmyamyN",
  "key6": "46h5aamoLPfF5L3dSnYsDwNFZ4twPPDsUDubusWJ4g3fRqipwq676MYg9rspK1zi6HzkTGS6k8DmwpaEZcb6DYGv",
  "key7": "5L485m6bvXitFpND33JpavsE5YYkvZud8pGBTSQtrN9GENyJUrQ3pFtA4fyNbBfpGxyqSmDza1qzFtwU8k9yJZVd",
  "key8": "5zZsf9L6nWPn8D2cbBvHAxQubZgtLpwHuMqW7mWayywPinXRK4Nm3BoMYscSNK7bodE4wn5Umhpc4LeMY2FvCBGn",
  "key9": "397MQudtvjKGm8Fr494LiEz9qi99BA79Yng9LESg95WNqXBm9RyNCb1WGbWy76mvSmKEukCPpWgFEmmZdoZ3eqap",
  "key10": "5Bt9bE5oU12DDhoxhizKY1FGcD6FbcPpoVPHJLpX2BC8Np9LdbfJovXSLTeNS7bgZuMep6wvNbNDXqRrLmx1mhLT",
  "key11": "5MD4vuDKrcHybpVs3YvFn9koYhamUoUoszvaa2uHqY4ZnSGGRD7ru27rUHTgR7uELEvV7hnVYVmLVi4YPwYz4Der",
  "key12": "4Ca8rCyHC44kedvtaLUmd4YahRBnnmsN532vDFW5xjDkiVgvEJZxpkDPqrKAc8bMAL6Q4QMzPyBfkFhoq4xNaiVy",
  "key13": "5A6ZYG4UqrBrJPMgcctRz8PJcUd97TSXhPz4yzJpYHUjiVY26UbzbGs3SjH62rKbqs3rHcBhaLdQCUTxnrMUofrB",
  "key14": "2EnZFt3zSK3aXGCqEMQkzh2yoKwWNCMUy63QwXTUPxFEMMSGuACToscwm9j2Vpckyjz43zDVFDJf5YShUjn3vsRV",
  "key15": "5UDm7zt1Z2pmqpqn3ZHEFuRkHiyhLMzwPV5EJXgjPKmrAPnnE8zC8EJryR5LQ7EKaNRX7JG6NS3AzeTFbbL5T8A8",
  "key16": "5umqAra8yYrtXH2Yr99dC5yRmYxnrZ6sGzXSNp8CgVKDwRT9mSHbrxS9hFdTUgf1Z3bbJ5H5dsmrq2fAL7hRraPh",
  "key17": "42YNSvGxXqkAPAmWZE7GQTod6uXnG6sunn322bGauF5LEKExorsNnrJZWuCsm4kK6d5VSgHaA1MuN1yehoyH3xDe",
  "key18": "34J2zJ51iEDrFYqRBp3HfxreMaUuRzbggWwF7WQ1tpCZZcaoTCUzqskCc5KXgM2LrovLunn6mZ8PEZu2kSTaJcQX",
  "key19": "3eEUfZsF1aFTXxTuyiC8L6mrNo1XCg9pKyUkrWVqtRk8Aoexvqksfd4yEzfmdhp1TUyBLgPBmGnxmWsK9e1zxiA7",
  "key20": "28mbRXmhAKUSezk9NuWB22Lce1RLAQuKFeHSxC617ihZamvxwVHwxH32gqKrY6qTznmngjv6hAbAo3pZ4i4Ls3WU",
  "key21": "2SLprcXqFtH3UGNjmUtMrc4ofeAZ5aHSkXgLonuE5MgqETkqRjpR1BmbshG2i9ymLAEwdQ52e9HTFJK3JaqoWAQX",
  "key22": "5Wj2zipNQtXTqCPyNeESUijNLQbVJHbvKybRKbtTgjARbfQq2FHJ3aAqAyUWzanYgr5znfbb9XckKSUVEQr84LR8",
  "key23": "41dUQJpgqeSG6TDEUfWGwqBbjnbAPYgk4VsNZBr6Y6foSx7ZuW3yuiQZf9CdgAUTu9rFXTJ6mRTnNChrajtdiXBF",
  "key24": "4UCVq9L2c2USnx4f4UTr29haA9wka6AEuAdsAvVs6XF6qA6afp7tz1kTpUnabjwo7HMuTwr4GXbX9r8AhdzoDkWr",
  "key25": "2t6pWbNUrMbBfRe99kZ6YYwdf9z59icuD9FTgE1LswsCdaHapgFu6UoWA31tDogHc2bwchWjMQ26PLuxkTo4F3Ux",
  "key26": "4F5L5U6eMHvJmMLhQy2hJgnDQ37d6L1tFrcxC8mdSUZHRFm9bEVdixBT4qpHJAoS8Wn2SQcdVSoNDgvYT638t8yS",
  "key27": "dxb2QVRNKmRgujLgbcF6CMyv9YmKSAPVToTe7q9U7Ay7aZAnYFEWnRKFZkpSDF9QFzUVfhK2No5hWuKM5kQ9R2E",
  "key28": "3eZEwonMfrcWpY9HXDuzznuz8mtBuQaBieqvg9oFcdaBXigQr6Nzyv4W6bQK37nAMgGKnZ9D3p19hHYqRPPoYMRY",
  "key29": "26792WCq2zMita5N14h7BzjSJUN5xcyn6KyMbAMaUox91xReZBfakQftkGu8KWzWq85NJbraMi1NWhYER1juvksN",
  "key30": "Rv965tEvXDbCA8Tz1HWqdQaTYV25PhXfco8vo6CVfRXUUgszFKF4UHGtnzFqg6BT1PfZasK2QZVP3BQZHCAE8hT",
  "key31": "51nfdwSH4PxRs7xKtWht9LTUSmhS6c6ToiUuwR3SPYR1vJfmA5PTbwJVnuLAr1dNvVAb2cM8qrvrt75Gdr2r9Gso",
  "key32": "4qxZZqh2wVN8fLbe9r3jWDdCsMtEQY6nQeTaG5BwGVCFad9bQJi65DnXENniWCB9ZV2j21gchgmEBVRRopEVR3CH",
  "key33": "65HE7t4mJ5rHKttp9iEa8wefuw4UqS28uEL5SoeMQ9r84PnXUbUP5s86RUwS49FNhnGf3bQ8kzTf3jk8g2FVb8j8",
  "key34": "iejkQTrJ2UczRig3jFNGtcg7EAdrec44r653KbxNtGRWT3MJCxG8sK4g1pUgfNMbdcZ6a6dbj1p8kwUifgSy91A",
  "key35": "cGNK8KxH51BzzquaGcqvWZBpBRcQ4vkUrWGpfAsikDdD4amq51BZvvGSVkAkzd4KNJh25ke2VysRCWqrr9kTGs9",
  "key36": "3K5TqQiPheB3C2aH6XY9dsbi39HDZKuUpehRqsSMTbi1HeNQYuFZ6WFoPzyHqJLAN5ArvLM4RwSFXCjA1RVwvHkv",
  "key37": "4Dx8LEWqcHPRHPumXZb8aNQ6FoetFHcQWNnTLFdDnDWYVmX5HbK81rTWqKQGJ92vLrs9S6akqXHXspTfCSHvW8wL",
  "key38": "5Pcp7a9m82CoCUApSWtu2Ca4pjnE7rkdDzSyZnepoTsNqWGbaUmDBT3MwtRrTHsajTu92eD6GSdhUydSLvjYdr5r",
  "key39": "2RJebZvPZ5zPhEMSYkwCdmsZhAykVjP4szBHFm9SZAJ5bXmYRuCdRi23Mau9CDSfRHn32WhQP3xvNwZJJszWoMdo",
  "key40": "FVzj7T2YNwWqNaXg2sAySzfkojqGoUzidkDWnTzzPBxkSC4Q2L4hrpDqUR7j95J3XoDEQoWW3C8ajG5nT9prcTe",
  "key41": "3z1AzuZqHiLYAWVWXzTefTHsgKEsC5W3TunaJEFpzwWxncYiRNrsRJj5sK2n2G5GD2uHKbskkK272KxUh9gcffiB",
  "key42": "4NaiPJmZSSwxvJ9qoF8NYdMUgz6uycqfWdBdwQwvhEpTZaSnCrTE4gkperzZqgeMg4U7KbyjgFWGeQ8Wm3yu8z3Z",
  "key43": "3wp7d4L5y4oBe4DCYtasrzESWkFUicN16deYDj3MjLiTDt13a1R9NRHw7AmMLWypdFv4mYBEE2jNH72vbrdjAyet",
  "key44": "43YFBtBRXimahMbangkyGfRc4PKAdRdKUwr9v6Rtrtw7VNHRJzD37NmTTGs8QceuuUJmZEVjTumAc4MYG15VWQRg",
  "key45": "5TVsHhPY9P3axVNmSUAaUvwayU3f7RzPcb9U5soTLCDbum5orkjxy6aDgwzPHkqtNnzXB8fY5beQV3p518NzbGYb",
  "key46": "2d6hYnYraSftrvvvAueHLsRkwcRYwK5ji2TEsjVNuAoUPGFo8ZNCxvKS1rA8KBHVLRqtJMVPMAnV2Kt3Ub1K7Qjb",
  "key47": "2xDtzCGz8UZe22wQZYbBoJondKp8xPEHNrT5qTi14QJ2JHzKB9h2EbFA2YihVchscEQypouhEKUHbtQ8TfDkA4Et"
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
