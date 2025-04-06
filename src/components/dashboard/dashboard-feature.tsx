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
    "5Yib5CuQ8qC47pRDd5kT8XEWpabJnVVDqqrFzFdQMtGkJPBSVXfdvHbtNJmK9oxavJtEjPWGhM6YFyTLk4Pwy5gJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wbind3ahFXz43iAg1fKA8GS6Tu6G9s4AnHqVfroPzNhcPh3dDe1kQ7xzw5tk9MU3z8ufTjKCDoRh8gTA1MvzmUt",
  "key1": "26syoabpZ5aFBGut64tvujszvtBMuKbGdmA9pm2jz28QQRwtpN4aqVYDqXt13akC4kSuSXmGfBKoJ3dyiFqMWSLe",
  "key2": "63E6znoZ94s7D7mkETvUUqTVAXY7VAkxk28iwj93qkC5wfmhchhRiLfig5yDgZDns1RR9mM3CGm2DZ46VsYBFkjQ",
  "key3": "5zMne8BWz5XYZH5RCSrLWier4v8S1yUhQuWkCEnx5sKrgKDWUT46qN9tyGmRfewXWXeEDzkvQKnaS2xFDBtLaEPt",
  "key4": "3tuseHs7sDXNKD9SBL3XKYqoLNYwMuuZHtcJ4Z2UjtRyM9NN5LJ9KmyD1qfGsgRALC3rdCbC7cLJTe9V5Nn4VJ62",
  "key5": "G1FoWHznhEFn931ajauFueFQQgZPVTFEgsHDvibKU98visvu6wJ6F9mKewKnndXroXc2Pydv8RVFgdfSYSRHyaz",
  "key6": "2HyQqikoah37Bis4Tnb1JcJ19cGbmcRN3RnqkCDw3cYwWKEPvXTnLw5YrUipzG1FuV3hQ8xG68PgQnotvbfWcunv",
  "key7": "58nWV6iTiMfycrrzKDzs7UZnzJYohXdiH1YHWYDBfPZa42BMFEE6X848pFFN9xwntuX1vi72Cj42v67D1zWE3pev",
  "key8": "5A4CHsxEA33ngT4beyybzbXD7BChNtVZmSxDaigtK8hSzSb17KYuuYhD4b5KvTRBeyqrsHv2G5ExzJduYQnuwB1e",
  "key9": "4L2mpsTo6Lpyvcgriwqw838hZfXW3JHvdtZpGerP4UUZsFGvf9yq6Ja6Ng7mXHhiwiGwVbpC7zrFNEiJjExLLnnz",
  "key10": "3x4q3GF68kH3nsBpER5Ze4cLnh5LTVSHuU6zuqt9QfT8BEMMRjY3Ta8SG7DK72Zx2NyfXyYxqrvezPoXtueT3SSB",
  "key11": "R96gnmzmfTJ77cNuwMjSbTsrUDDTxT4exdKwQ6reSpnc8ziX3Kf8U9Edneen2VzCXjNbS9J81HyRmzxQ5QvsFWw",
  "key12": "21fHwft4gvE2SH28KQsnGdq7WQjQXVvNUBZ4L19rgYHHu5112Z2WTQQUsxCePA3JvzcXW2FVcYRB4vwF79FuRPVN",
  "key13": "3QT6gxc1StmYK2H2aZQWAvRAgqWBMnxwJRX3EpiDGssuxSbNvqLtp9gbvYTaJAVZ39p74nFo4krbuvX76ut3rZvz",
  "key14": "kVhUJvtQkaGhfJ2W5QaCA2qRbV3SSxdrFbtdRHxLCimL2FNWpS4LiPZR3WS3jy2ERfMKDd67aNMXLFzod9Neu2q",
  "key15": "2dfBg7ZjQG3TfZKMBZ6ZQRJKee3fUBfqssaxLesQvYsYj39hiv5Uzq8J7kuPCauBECLKHpE2UcRjPwAk8xBwwrBy",
  "key16": "3j3SuVEFqtGyn7kBkFJ2TQFobbKZzUP1FuTqYrp4uL1jEJ9GasaRRxBr7EK19RScaa7Yop7RvVXayADSLZPEHCCC",
  "key17": "2WNJ35pHHNtsDdeKrhX4prC2vHvTkzoMcC5YEvuq7BnTFJ73urayyrzxFo6tRk3H6tFGGSs2ceRb6FELLCJEMW4k",
  "key18": "5yX8ej1d7hDLU2waJg8PLFjdtAzmsD6CjKbauPRgPJZx6KmQe77BhkgcLrPkygQoEwAB5kaFDkFLw4VQoHzgiiqZ",
  "key19": "BaaCGmMV8RSmk3va73hHzNS2rNLXFidfiBM1Ji2dTKR8z7y5TGBugYzumJePyMyYZAyjeJ6W7muLTaAfDQNdELE",
  "key20": "4fUGGZBgVTdpTPZX9GHJeqo3SHBCD4RM3JkvE5hASsrKysudBhaWJfWqmNzWLxUhT4gimR7eAg8Pbq87rn2ALRde",
  "key21": "4AzMWLgfUQ8P8Nkuu3cpvhjxwu7ZpZ6Zmkapn7KmXZ3c15paT31xsP42LR5F5WiigBgzNPFewH4KrLZRU8NH2buG",
  "key22": "4g6V9SuqEHdUbvtFndLFRP5dB7YkYaqiDyY2MA6DeXkXbrqewa8Z6wL25rufoAA7ex88GLN2AyPQAaCWM37L14br",
  "key23": "2epwGHCanjdJxiyripNNbYJpoCJ6CSrsNqkG11deav6T5x6UZs6sZrf2o1PDvTj5QgfTgasUZLxZ2ADm6xGJz1BE",
  "key24": "BXN7fFimUpoUC9m6o31kZmKgEpxSJthozzhAhL9nr97YBmuZvKJumURioir2c6iarTsqz1RCXCq6eza5P2PgWre",
  "key25": "4VpqBDu3LqCfrRJmnBtyismoJjvEZBEDC1p1XDxSmZbsRtuPwBBPcqZrpMDGCCejPfu8EiWDBq9PkBx3wyLhJJ5j",
  "key26": "38DSA7kFWDs12HuGjAgTX9BvFo6n2VPqbExUScQ1XgavLjBBChjZF1adpYo5DhDBxkm9Bs3djAEX3i1YT7fJYEAE",
  "key27": "GLEhSTBzwexSwRehAbNrW6YLiM7KPsRa7ZyhJmQFMSHRQ7b1gP6qD7chnzyLoYLfVUvqgzFbaetndx2YKbJ5gFK",
  "key28": "L6gv7GoaJgYnrdtqPSjVdq84rCvQo4GJDCWtFSvYWVKHXvVPoxXw1C71T61MpTF6ADML74JBH7TbEW4TF94yTPH",
  "key29": "5xAf7rtaXVsccaayv3AEAUju81sjwBYeD4ZMW9wuVokkahYHZLVCvY9sqyermXA5ExRnFEy3NAMwqc9dTV2sPuWg",
  "key30": "5wp1FmUrrQjrawq3AAtjaMgan2exNSwpdtVxnTwDu39xKqnu2dWsdBV2QzWKgyBgxbZSxLiRhg6n7uTekk86HBDe",
  "key31": "32M42hJQGRnmdpMHxChBTga1CbGWsuz7kQ9AKi893vMhXMPHda9Lq6H4eQ8Vp992GJ2MF5aLkxHPwpmxUr6ahuxe",
  "key32": "3H5QEDqqH9xC4jwYgHwmBQqDF4z1hbSQSYByLZTqKHL6FpfxfHusepQWeGBeVPZTV4L9Yrv8qCi78eYrnms7n1EL",
  "key33": "R3XwD337KqPJemme4R9vdKR5hsNT2XrXRDqqXMMGUZbLEJYo56cdninsUzsgZBbvRPiRzQpawhPd57ZwfHcPyng",
  "key34": "2K9YK2Sy1TiM1bNfbZsDJjfgemFt9wrfWqjMjLHxrpnZVv1CiZcEid8sE8nm14wAB4sN11dnuqYjUeXeqJr7mpbq",
  "key35": "3ekStCtbp4pxN4eSETmqTb2Netg2WDXnQzx9wiRBsiWTYEUk5HVYq7ZKiGCoJv24s2EW7KH8fg5hCbyCZYa6yPVF",
  "key36": "44Tm1RnzSpyedix5whv35gcMNwBKdjd1QXCjsEL8mWnUvxdY3gtKQkSYsJqSH6nBHwUebMUBcCiRf2G5zs68BdaE",
  "key37": "4sf256WyLaf8eCYVWLoNbMnL1irGqPGMEAKea3V33wzKHrscSpAc5xRy6GAkp3Y4WTBkUc5AtSfEH3g2tWoQ88uD",
  "key38": "3SHnXW1zZwB7KdfFK1jJRedkM5WMWDvsdjLKY4PcWgTJ952gQjQnA5pLUjFCnEgHPU6DUY5Sc6TMM8k2dg1gzKRf",
  "key39": "3UUe1RGuPZ8R18B7GCKvH1LUvft42w21ErTZjDAauot74MV5Pdd98dc4vza175BBdESb7dWcTgoKCdoLYjvW5fUT",
  "key40": "53bLVNgqJnrNwNmroc2PGLTjuUTjgVHHYSSFEy7x8oxkQ7BkACyN9P6sucY2ndsHrMsFbBxn9tpyRGnw2LoE9Jbk",
  "key41": "592LWtAqmZhHz4guPDmgunGMfqpQYUWMPvbaJ4LheGaZHvR4nrnvveFzF9569YysTMfCj46TXuvJmu5DrxehJ7BK",
  "key42": "2yaR2anoidnGWFc6stxhCbuQsoitZfzHVNinsWeqmm4YMpmzi4qXNGUhHqn2vM88znE2MJDooTEJbr2voM6qKG9U",
  "key43": "5KPrJxwtTXrxDBdZc6Vgoc8N8eGawQ6ZHD1bEoMTKXjUgqtZZFD23oW21espxMF8BBgCXoWRVcoVcNxtQahBuvar",
  "key44": "3RFdukvKRKgtNecMBigziqiQ2ermThSGUYzQJWj8yyqLrVWUTuAgEBRe2cKk1WQSeMEoyezBsz6F43ep36D1WWDQ",
  "key45": "2myXuYcJiVP21f2NUNmgi5BGdNJsxLQXUS4Cs8ZX2saBNFwzGJAmad5sAoKLkW8twFyCSjFve6ukMAQXkgs3JonD",
  "key46": "46Vevni1mSGZpPUSWwV3HxZRrrioH1zJAonxMveeQvrVvDmCrewPy9bnS3oS4kNCkM8PfaijtFYEioJ7v27YGBT4",
  "key47": "5pGJjrPvkB1RJeGTjw7KYQB6EyMY5GQgnUrFykdCddqBnQMDZMT6mtyBgS4oiNGy95TM6tEdvQr25Nqmf4jZF1oR"
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
