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
    "3tNcV8SB2fDjou8rRjG4KWm96k2B6c6UURLrietUW29KrpSNH2epJUn8gyJNYWKG65hkYKpoGschBxRp6XidjqXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pPFusfadgja52ShzNAnWwSfBpwpoBuhFPTjUzcWzbHz7VRmm1LQGpnUvaaxmvtKGP93TVKhjxtvsmNHz2J9wEcA",
  "key1": "9ABTPu7MdQa8eWYXS6yFss5fz2xES6UWjhmmVMD5pP7fkZe5d5ADAECna1YdWcDeSZYPyGJkdtWMzDA5BKKti7b",
  "key2": "5Mocd1r8KTZ9so9n5af7yAPE5gueQ3PjeiMQdZtsaLg3hAqciZWqxCuTvK56Qs8pRSrUPo9Xbjqo3wuJQZUuFArH",
  "key3": "66EqXzHyQpJu4Ut7fESQTzzTmJ9ovhVxHfgnWexxdaXeaFZUyp8MxXaYkqZrtEQ2u2Eh5yZT7eF6WsrjJwGiTWTR",
  "key4": "4NMwGyK58VEGYpA3mCyNwR5BWnoEUJADJKahDWP9drc2mPEepHM7Yh5VtSAhVbp3QEBcVxu225P7A3HtLmSQEccc",
  "key5": "4vpT13pEu9tTAcWbaCATPmFJrsgiKdbrCLtkhhGYY7JLnopJkCa6UzntxQDSdoJ2X6hwbo5vQnNFUiU5SHE5YobK",
  "key6": "3nYpMkj5Zku5H3mp64HEuPwue1tFJNVWeQ9YakC636mTuPdeq69jc1zd47inxeDRjpU8fS8txKCMm8sxXXT3Ved2",
  "key7": "2fN6d1p6AcesTJUYfMubBFxVQHDKumCrA2nSqeJ1y1u6XTLNkmRunr1ZzvS3efzWuxkHHvhpsQqkXPMhemP2FsU5",
  "key8": "4nKL4WoYLw1NAFw8FYWX6MriknWXU1PnLdGrieMHNkkLEXFRoKNuiQvBd4jKkFm7WSqCgfk7dfYsnfiZsYGhGTZC",
  "key9": "fbgCqPewSPxmwqfxbGAV6539uVBwccujdXAMpo7bjvwRJPXQpC9ko48Yzsx9HRQg9XFjgRFTSXi52vdfxh2Dirz",
  "key10": "GTNnKJPxM8foCNqDndibFVJDpUFmYtT5Yd4AzrxhCjW6uE6oUYLjS49GrtviR7npaDxeBEqAtCWjQomo94LkTHV",
  "key11": "9Vxn5YoVFmzv1MTtgqvu9GxSUD18tEgRqVATVegUoqN7bDkxqV1qpbDoWeEECwPfbnvC7kHKe4zuqnjwF5j34nL",
  "key12": "5DJPLwykAZ7qAyBu5KSU2ZwSREZPg7kzxB2snp6RxyH3aQkizrReSNEq9Rkp1GiVxXZ9iR3y3Wh3S4R1iuiMGz2k",
  "key13": "3pAvxrADkVmZuc91AAy4PwTt2Qbu2NqSwMFAosBABzG7ptn981LPNQiSsVa2NS8jnxmZBmtUefNx52Aq5eQZEVxv",
  "key14": "3RxyeKm1L3rfoM9DFvvN4svjr5g4L3CUebsxUdr5xWqa4h3T5KbgUBvhkNCz6eabmt7whm6Ag7oRmi1L89LdetsM",
  "key15": "43qEwiKPmCudnUztUHupo3s3wScbQe1mFzYnL4X42czjaQo7EXef9jRTMphdpe9FMp7wLTdtPzDTV7PbjiUXMpy4",
  "key16": "pbX5zLAkiCqcMLTWaoMYwSV95Yy1mDyEXfwwxE6jr6dZxMF863ufDg7FoF65HJihByDaYj6he5irjpZr5cwq19k",
  "key17": "5PcUCtB3FV3Us4ZS72MBCCSR7iXzXA94LssZAAYwAtW3FoPxSWAz2aRknwy7pYdT4oFNLuhodFpgTYk7WC7TiYS7",
  "key18": "3v6N7HuGzgWtfoSAY6bMJkcXsPkvsTqSpctcqPFT2ToT8P8rR3Vwc3A2UQGHWhRXnaiVJRg5KgtDvgrtxz9soDBP",
  "key19": "3cwnwPmVtALrpnkwVjMUmPA3zHxtxgVYRN19Jneb7qRDZJfdGHhJsUqRiV2x5PFdSqWYnaHjQsFMY1hbCG2zjffV",
  "key20": "2TQVdQGVeBYhqzSqZp9AHd3f4BNrL3byht2FMW4nq6Qc8Xg6rV8jiHDeCBBq7tBREgSFs5CDYbdsiwxj1Ap825xs",
  "key21": "25mxHoys3BWWqEATvwUdkbYcPvj2q2bLTErRd4mnr53HHp3XGfdjFnjLLUZqm7LH9Fext9dJygkW14UcFLrbon7q",
  "key22": "3Qrht6bacVKaPYs1TyZRoicMqrDeSiMDE2ZDBtYaXAhqqg3eJgBPz3JXXmJEehK2y13jqUJabFMycwy1MjhHNX6r",
  "key23": "hub443MwG9qDahgSRGX6NGSyCydcEMHJWZEjcJL6feUXEDEc4WEd8PrJG7Ps3oiczbdEcL8pCenf4QbGmp9KXbQ",
  "key24": "2whiirexPrxsPfvZHdhtqZX1jMUG5iDgi85uycvosGGjD5hnGPrHKbx5H5XiznVTHc1Pvk24f6MMo18h9CGkWsxn",
  "key25": "5QvkdczkbMfo3dmXwDmr4FdE1G7ESPLzK5pZ4gHL1SS95u6pEumd1oiVFhsb9QVKhc2ms4eHZW4x2Tx3bPAbxuK6",
  "key26": "5baRsbRL1e7ruY4KrFvg1x6EHCR9rkAu8kGVyskAU8XwVKLc8TMPB7DnUdfFmUWwYdYbQoeLf4V76QagCtvdzLXU",
  "key27": "3zvkXCaAsyy5udaD6xsuwkr22QuTJRYpH1FQgrdUR8TdLJSho7btMPAowNNhJTuu1FZngGPzoyxT7SUpisfmDYDE",
  "key28": "5a6hEG8JFSTg1QNdFMWUqykhtfquouvX776LZbot74NxcXD1ZUMZ7qcswkayDm1cDMqvxhF6NpwgdJLRDnEZg5gC",
  "key29": "3Wo6dgCbGqrxrN5CF8cyvqzPqhYKG2axnuJzDoYtSWwN4cgECVv7s9tjbm1bpp5TkPA8vJuGycZsS7ED6i3iNgLF",
  "key30": "5EUrJqDmf1ypRYeTwnLqL4bywb87NpVQoxzvFEMHBJcRyK3nrEyBefoHNgb4tpqpDTzCkQ5VZU4HeaMozWdiURFB",
  "key31": "5jGkWbUGk2ySHKMG6qWpNBr6xZnMrpgkB42aQvVt8GtxPPzbSR3Ag26uDAvd4pQpALut2AdjCqRExLLq19aj4UXB",
  "key32": "5GUUPyUJWQj7ZKsx1VgmbuWVsrhiJmNwa9gajNfXbWvqTqunKU31YCJbBznKPcp5DUiBw7pb35PstUxCKLfLuJEF",
  "key33": "2uwrWpSbnPJUfphh5VHzZQdbqgQHRXeqrZfytKcKZcnRSkYPEFzTqp7hBkM2ypvf5gjVvuVDiVeZeAJPSDPgqFvj",
  "key34": "iprc3QiMKVCF9SjMYXJ5WiLUaQA2tVUpuiJDQQvSFhnVxtavJhtdTjUxhAWnYqZ9eSgBtDGzRhujNQfYnSWgHRf",
  "key35": "5X1TuYzYmYgkC2SYj1kPUTBoxt8hhFStRKvJQKtxLuvoLqaRZjZzcj2cyxM3FUk2Dn5JtpJ7SwspdXpeLnhLTr6V",
  "key36": "4GSNSwa47ke6V7C4x6bLDpxLPc5oHxLZHP5uTUNsNMoBNAzB2zjnk7ENJDKp6HHHeG3tNakpNXvvxSrJJP8mzyAG",
  "key37": "5PTLMrGkDqANSBBGAQaKtmSXXN6CSRTMzNt9Had7ycvvFpHquKTBuuTXr4rfbebRoQvL2WRwLvwd22ATNnmLaNn9",
  "key38": "iyqzRexX3RPrbTtN3uaEEiEoUfRCJT5vVzft7yJkZ2jrMHxUTEcBiwG6iGJajtSjEcTxpn4DKypErueFbdCJv27",
  "key39": "48dxAMMakfbT5HdqxQYbkHeXFzFXCkuykSweFYYKL5zeCAhquxK4xqvxGPF7KT6qsveA6TLX9MUib3GfgevHMtbp",
  "key40": "5u5sE7Mu4UV3SFSxW81Qk4hhHwRrR5Y48LkcEph2KsDtDFCat6uNsobaGuK6D5VzjX5G41QCiiaN271NZydazM8P",
  "key41": "K1pRNVVU5qGR5yPCkQ1xAv8jjYyKm5bYpzgou5KnfGJR5VxikeAfEecM46CybuBkPaFWa3cTRCnU91ieTF76EXa",
  "key42": "3XzXXtqM88oo2yxM9Q6ubkZ3c44CwNJ5P3b65KQSsyFLF9jcC8Ch6vX58orrMAfeQgtjtSuWcYFbTV7vwnXe7Z4s",
  "key43": "3Yz6kaTPgzYqxPSnprdc2Gw8a5AwKJhZ7eRxan1ey1W1zBUdRjHZqEkRkKkbuSPTaqBAtNV2EFS5c1R4THsiY6vG",
  "key44": "2XLwYP8SPvL66n9ZVBob15UTDQvpEAAd3dfeiaz5vERmFZD7HYXiLPJkG3ose85hhXs9qVfSNZcJF3Dkia2259up"
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
