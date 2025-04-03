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
    "2be3pHcswHA5kLNgYKaa8PSo6K8cXL9qWLFTphC4gmGQHdvAoq7ddJP3sbS2XvHG5T4Gh1JFbYNsuTLoSXPPgbmi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xGGbcogYoXwNNFCBFm1usxmivgSDY8g4nHNbc2XmyqgY5WmSVWaSSr7sAmg9B5twzTWujtoVeGg1fQw2uf4vmBw",
  "key1": "41Vqj22ta4hHgbntUTgkLsYdWp2Gv6QNJNtno3qJdZ6UhksmVtE5pVtgn8jggRBgjC9aQVd3zSETeW9EJTUB9mWJ",
  "key2": "2zHukSCmvg1pX3KWayyDpTB81PTE5bq9EiwPsqJSvZy1YK3Tqxu1PcoAkrqYnGCUDuEWWmKD9379KnqggmgUdPCZ",
  "key3": "2NsBvqx55gzBpVDLHfJPLtUPtH46QXCvnDwdAnZrygWpCrQGCPa3Q19xmVXyMaWFdfhNJrXWbMrTbv3PJuN1Wi2L",
  "key4": "3hYJyPcqguugCYJUrUvfw6UkvVu2SiRqYJMbyBoaejvyovKCzycZmCJyHLBm3ZtkgL8URY8LhHjiXxcvZRC9zjQD",
  "key5": "5S8KV17jCXkNm4otc4MSY38PV5ZqGY4agzhhyXLGzPvDNgtkgzWQZRYNgCWWkKgTpExsZN7mh2tZ1FdebdXFmEsc",
  "key6": "3ZXDwLnHGBQcP499SntHtk7j7SWT9mFNKYynys6cfXKXPFHezY4JDmUHFByJX76akPyQCWdTZBrrv8rJDb5zPcDh",
  "key7": "5bs56oYKLYzJynUK1FmAeebWWiaYuU8p6iyM5JWF2E9t5YXd625FNsJLXRx8VNPLdtxZ6FDaDKgdvuUyrgBVV4qn",
  "key8": "4x3gjc1mcdZqwF9TroZSD7J5YW1oKfceE9dtE5WjwSEAfp6QyiaJbKuacxq2J5W6zPnfG4vj19EvVwybM99LWmrC",
  "key9": "2p5Bf36P5hidghMoPYM54Dq84LBQLakhckJ1gGZCb8gzi7gzevGHUNTazfk9wUqLg7qNWsnjkJCDphFkVt15jvqY",
  "key10": "kebvDQYVRdodqYrkE9tuQXmAaaDYrkQzZuV16fsu6bbvWAh5uvR3j5xTFguuoWGXWXAhEAk4ZeeTyUFXH3s69LD",
  "key11": "5uZTCHCK5pxUHbqLixNRcQxW2ovVWLAZoQuUu5h761Zstju9w81d57cgnTY2pbGGUxRCmBTnBzqFsvRZ9LdCUssq",
  "key12": "4ZxaaWfEW7chGNUpbdavvezJ6RbxWpdHm9qc5cF6s6MEDNqsfprGaY2CnNTbwD4knK5bLJxRZQM8Wvw5boeCGCRk",
  "key13": "2xEcxbjmdeoeBCksuRHeUrw6ezsD15MewYTJmgmqBGQcReikbsXJcT7rSfw9iDe1vMbUJ19r1jpJsRhcXaQvcL57",
  "key14": "4Brfjee8U33i9WhoLUiDBbqA8Kc3mYiyscVfySNoqnpFzJiAZNeMDPHGPqsy8Wg94GQCjAZEsWP1W1sXdWmdap5k",
  "key15": "36hrCiKZQJHh4mxbqQw63LFxBDbNoDLvKttQMyUKGcZZg4VoVX27EPkGBinqE6iidozt5zVwNhnri6oSEFsHgwSC",
  "key16": "3obyj7nFCFr5TUKCgvu7oakuHrRcZbBhhW5QBUFme5LrBySv8pwGx6EMiFfunmD5MDoL5UqinAXLFsJ9KXTwbkLK",
  "key17": "23Uh83dutyGvMZvwtyCwX2K2qr4ggddzAPccrLihKGF4JTZg7CDwkLU3vrvGZTDotipZQJUdNtxi3uK7gtMfS2dC",
  "key18": "3eZcgPNK4gy9xDaHy5Hi5pEm66sco2rjYSXwqMtDqhPRmXaxo4eJDbW1oYRyFdJYYbm5tmDpzTWYUhJYWp17F3SC",
  "key19": "3YbByg4WTM38GaB9nx1PaFXUKk3gbxBteSvy7AMoZ4vZsHt6DUxjFx2DwFMidvL2B5LJiV25WfaHswaJzWavbnfo",
  "key20": "5LAY4kxH4HgzqeA2qLQdSNt9xJP2PXWeGAQwUeMM15zyKV9rBypxfDSafYUiXTSYgb4GcHywNPi3pFcuwdZPrWeC",
  "key21": "22bFFWDxsDGhPfpjAy2Z2qrRRrzZm7hT8FGHYRykGeHPVVLRRbGXv7FKByj2j21kGN9S4vQYmCvXGELdmuCG6Fkp",
  "key22": "ybpaLaxGw8oEGcZR6GNKUcgJAmAnXg9NKyiRdd5cCntevbcDobb9gWbP8Ci1RhsLagzCqwW8AWk6JzJNjPYfvK2",
  "key23": "4PYjo34w6vhfLSzAL91VZAuNVMC1Q88iNAc28psSqL3BioAJgXPRfAcVLjCGp3ivcxHzFLGgVxLoaRoxAUkXw6CW",
  "key24": "srJb75zNw8EbwdBgt3MCRTkUWUsHFSihxbq7qg5CuCJP8NFnXrNKExiECxZfDjfvnEuNiM4ScZiwQQavcYDsdAg",
  "key25": "2H6sxete3iEzbFkpiLGma6ZKKFBWmQeU62xijR5FVY61zpeYzTYh1FfVfwMt5sq8zaKNX6ifny3gv2DPgTGqyYBS",
  "key26": "3M3Qi1RLK4LKy18jrktYQWSk86kMPAZi59vqezTHqXvtMbq4vaZzfP822gdv7CGFHLiufK2L9EHkGRRR2GWJVCc",
  "key27": "2t9Ets9VTXXAc37oedqaLjkHjXqEwZS7ijJon6un7tupsUdknRfQAmKGWzMSrfQeftLQBowJZpft5AnT1mYeFZxy",
  "key28": "3cQmMnYG3d6Gyxg9PRVjR7bmewB6CATfrLxBinXXXzpStsBuKnK3TD2SjZJf4XyGiLpdU4ka7TCE553YkvArX9UQ",
  "key29": "2KmY5TYajfugM8HksBcUz5GRu6ySXh2qy3eCmf5rsVPXHz4QEBct76fd3s5VcXonK4AetrQL7YD6TkcHjPqpHzbo",
  "key30": "EtYZya445C64fXr4egZoSJeu8JYWF8Z6RYSuQjVZEVeLLun9oZ4MWTPeJnMBMm2G8cvTcY8UkCjyjYtuSqL9gE2"
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
