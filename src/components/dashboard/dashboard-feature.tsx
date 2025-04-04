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
    "3aLoyoGWZFsUJiBXDvTAteVZwUTBD1dPgdguow8MoL8DY5dXmfjqbTKxseUVsBpDDnTgmo9dd9QjCR7iaYrVnjLs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36xmYT4SkFfBVxHryNsc7E2D4dLFJUQyw71tBkgaTRAKvNYJfEJ4hH58RKB1VbVd1cHc9VnU4SAj9EUtj9VnHxiD",
  "key1": "5tyKUqAFDTmZqpKQ2yFzB2Q77JWrQJF6C9uZGQWi1up68UP7yizspwr3vr3k7NVCU9kkTPruGuVxnJ9XwuK4AvuM",
  "key2": "51mEbdC5gt1bAQDVQJ2wnsQ9xuZdQwwkYB6hWBpxcPfqcmUA19bNyjJRp8mAPLqWvamaJSG7ysMTDEYNdyWUD6W6",
  "key3": "5viLRcYKmG3E7QAZHSHqyc7amHWshw8LVRTb2hK3oBrhAjBc89s3g42S98LYGTyPnwAttCF6pMrtBDZAKghdm9t5",
  "key4": "3jTuS3VDRGhQCNsrfLdNMjPAJPaE6cRtcPvSM2zaS7txYyDpk2FA7M6rZ7YEiFGCFwGsi53EpMAUUxyKThyu7ZcD",
  "key5": "5bqaEtdcMGsJAjBaFgm8SaQZdGEcRa6mw3Bg3eTvTNXaHHvmEZrYFk6TSvRpuJBLU1RarMy27nQueebDs2aDCG26",
  "key6": "2fv25Qn5wySsc8VQE4amkwAc3PqCrQMqq3kMeq9vfnMH3caikKiFEVR3qjTqUFsCHzW3GRUMHxJjxkhJMKrx6yS4",
  "key7": "2X46yegnnD8AugVEaUyRzmhWoBMCYL5VEESMuugsJRBhEQd4UDdoW82dPXZW2c3LdQv6QJyCHgnYi3HtsF9BUYMR",
  "key8": "uFpVLSUfp2g7Tkw3jTYMtj2V32U1KooNxs7xjUz2hdgofDJbmzvQAjVJwCVJvxGpS5VnDcAqVyCdhK1Z5gmyeqJ",
  "key9": "2SpYMrgcFWgViVcverVx21oA6oZZAk4xE6Nb3djpxewbXM9H2ks5TuUJhhX7V25yThwBQ9bZfYhqQ8KtxG43PZBZ",
  "key10": "5gCH8djG5kdAoNK8hRwiRx6n2qUen2VnVdFTFoYyb6jPaeLeUPvZUk5kDddvxtN2kjSUG7QaAaEniBjhD2fngCvL",
  "key11": "5XUEd4vRPxAUz5dnuS7WLRFCv9mnZh6SXdJiR34PDs7pVzTw4GdLqHgDtSXNoL6H5AK2DrBR7fkXbyJZNViSAU7B",
  "key12": "64hxRaKBPwEqgcXsoiYXLK3YsXVzqEep2meSqdVHEheKRoTUxCmwLBsgHMkhPXQXWGjeLNGnBNoyYQpMZ8fJZp9J",
  "key13": "3dUiw17AbGVJLCUjHpHa2ujvyYFNsZ6VTtw7tX8zdtXFD1CuWJgwTr31drjgkN2YXJcEoHA4UZYpUe4hC52EGben",
  "key14": "3GkvMNkGHJXnQAqnWBs9XVHe3PzGg1Mv6E1sEYpYAtrKFuRQRQLb1pxTHMsvQDRKR3YNrYfuxvewf4YtBtnSr38b",
  "key15": "3gGJn6kLh61f8bJaNeHehrxqRNhiLH55m33eB6tECHUNWKXuk6jMEsvXzT11knZKEAgXZ8i15L1w5ue1WwVFGbct",
  "key16": "64kfK7z4aDbMQqQtqPhcuHJNdRqHQhYG6PX9uPfn1d75nGBUiMHZ598GPyXwsuAet2gb1DBWA9CTFHsvBfGS5mMa",
  "key17": "3uFJWczPrsRgfQ44z16j7B9tYV5fExaMdyr6eF4iLD6mUSLz9XFPY9fmvgESpLfXAqWeBTMip58ivSKwASGgWpW",
  "key18": "4Njceuzpw1xxbd5nqgstLZfmvs4mW1J96DEiLyaubZVLiwjnUJLPxnv6xdKFKHEDZAdp56wTE7a3vjVX1eBFWxzj",
  "key19": "3MoMsPatphLuP9yeMKQM3zapViBcToSNHBoYiMoUUt5Xpeop1g7mMJHLfsaK4Hqa2RCHW11P1EgjPoWjXgM9CbBP",
  "key20": "285d3917yyLQQYnpn8kREuHJYAgPABssGD5bYQGkwafusgx4R95zppVsqJjjgRXxT1tGoWrK5ZZStaiaiCjFZHuu",
  "key21": "4RVxub9XXDvZ6gbYmaWhJhWf57fREMteyQNRym2FeK6J6TXJTunZ3pYq7NzbJZzCho92ex4HjfQAVatA2GcQyHfE",
  "key22": "2wLNwHw36JV96kAVG9k7z7UNnuG4SWD37xSbUprrw4NPeeWpKLxpLWMTPxRkk2GTk7KdSsU925DDudxRRofEDLMg",
  "key23": "29p7dLjGF4XRLYDP4VwzyPH98cGhfjyMpCjzNSoY68DQdmRazfDeCKqdRz66iYE39Bgj9S8rMMW5CGB7J1FaKPwg",
  "key24": "4bmGwH9kMipS1ZR6jUuYh53QvZVESjiPxsfUD166YXxfqJjK5yv3fKj5U2Mnnn6WpviPZ62DPWJ577NRxHiGsxHo",
  "key25": "3GzMtEjRurP5k3v99skQSHfEZzS71cyHb9P7EGcE44z5xdcFycHkPzP6cpVUVWRYTZRhDL4Gtap7GhBYy3qKMdAd",
  "key26": "CkKznHM3G8gLL832kncASwUD7kgCYgzpBRukWyHsnENQfzVmqTRCBPiuY8ffEhNT3S92ETt2tnkoWDVHPMzmQJ4",
  "key27": "2rsCdqz5XuFa599QQkMB88HrgQ7d2NAwMps1ibnBnwAdtPFSWDh9Dob2W2JqnhjYM9X8kVv6HDVacfRBQLqZpsJp",
  "key28": "229nn8cu4B3SQJKYCc7ysuT4vCuqYrBDfZRbi78Wwt9q28AqvpvxB2Lb5ZCjGfS8hLfea5EoFfJRyfugrRWZYmZh",
  "key29": "2ev6Y7ZdFsSKkp3kFPxuDF931ABh85KdS7S5w39SXrAaNpJviZ8yPWMs12CnjrKKh6hitd2x4j7a7UgjgASKPkfM",
  "key30": "L3cqi3pDUAhP2gQzbUB8ozFDod1eGgcvZu4UwfWnBppFUKBWe1iFUsE6uGQSXzPexusArUuqQRU12bo6fmWhNRm",
  "key31": "2AW9t1qV1gBnFVuxnm2qTS8s9Uf7fKajmF9WjGF6PUyoMond5nHHDnYonWWp6AyBmhaJhg3SiEp2RGicm6JuL3Fz",
  "key32": "2HpKpmRJSPuNDNTdPekJoazmm69hjvyQxnTnHVV3weivd1GA5nrbVQG34rzr2EczCP6uzPyscuEhhMbVWSg9CYy1",
  "key33": "5DAgP45DNVttHhUCs4qhK6FtgS2SpEiKBmSJqc32zqrikptaH5Dte92smFSLaQKhwwKoLYNbTbKkmnSNtK4oy2BN",
  "key34": "3Jh2djYGtAB4PJcZ43NsVTh5ryNuS94WpyrmrE969CPAx4YyruPNBfjpGaNu9tuyKHBQc3n8k3C83fXm2V71U42d"
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
