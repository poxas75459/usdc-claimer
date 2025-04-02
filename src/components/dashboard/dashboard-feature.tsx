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
    "4RazUwdsGZ8DFzvPCHER96qexVhrgQyGTjf5qLfbSRMhnr6KXMXV9ncdL16jPfQXeBquBEy9DVXkV1hBY8TVUfuF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YwVX64PvwrYQymX8GgXYvLXXiJyYg5oTozvLVFuYBfPwE1hhMNQNtQTZgpLLPhMN2dG8jYJQZQGK2aZiNjznpTy",
  "key1": "4xAd3jygsTnNoowJkXk1torVwyYVsQtDAcmp3bKKJ4YSWKsgQMDtm2rPvTseLDxM5HL38hRx34FxrnjcXPKeS59T",
  "key2": "25Ympe9osEX89N7LnZDTiWeFkW1pKp5RBAwbCQN9us78rh7FyDJU7R2yTNuyaN2RQ7WCixnD9Ai7cCuFeYnYWS8n",
  "key3": "4sS3mTeyz9ZL4PvWDbMiEdJLfen8B2Dn9pHmWy4Ry4CB1LG7GcQcinHpzjQg7sqnpFQSANQKK7NTaNsAeL1ohbML",
  "key4": "4rk6fbhoemZh9eNiS64Bf27joQzXsFnsWaHErs2QtvRwWpN7eqR9qt9prczaaFjmVvfoKKARny1dqqDY7pcrNgeQ",
  "key5": "52qbnctomHEd8iA7DYLVLVBexFuxxst6Kpb7pxRQ5RE4brx3mznXnR15BQTCPJW1UD9LwynoAk5iAzBKTUY1h5w7",
  "key6": "5zTNfusMnUFAVBtLbb2aY88Tq1cCP2qebTFhs5nN8vWT4jJHZkFfDouB3d53RZpUdt3g1on3gv6qj6HPiGErcV8N",
  "key7": "3dd55KdGbx9pH5JTjHw4wcwZVhDMbzQ21VfJr794QasNwUSF77gQhxTjurGEz4qSgUwQGpikM8PM1xp8ho6ac6Jb",
  "key8": "5M3KQmZK8eaxBNJJKfpPHmDjdr87Fn1hNnzQ9GhtNjdbSpEHx94qzidK3pHoeeoCdvwavYfBdhLg1FasXVkVUUuv",
  "key9": "J4E3XqShUuYFYzZe8msnBwcWTBgqH9da7NBriz8boqK4tHHM1a1jXjdJn3mpNRLPX3gCpaPpyKrDHdv1hiM3UYV",
  "key10": "5PHtxg2ioUiS7n88EDVKUo2nhSsCiAmYDFpzVcoH5hUhMoREjGBD2BPfohnU2eKheVJocg4vnmVQDALoFddQFaiX",
  "key11": "58VrakX4pRTjHHeP8GEN7vJdnVMoBiSE6iheTdcp4YZXfcGCU6w3sc2BiTJDiYtVZrSQ7fVacLNmPXSqTxYFvG7X",
  "key12": "2mQpg56Nq9Fdv43avD41qdF3HP9gtZSiTDB3wup1qVh8hrMVYisvF1MfxmXMkwtEo2cmwAu1PmYqAGGgpCZkzAa",
  "key13": "2TzFfYRfhT6K16WxXs74AVuXJ17Qr3fBtmjSYh1YmDz2JTX2PtuJRq7PDfffpfVBjkHsrezV8DxeyUXXrn8h1Eex",
  "key14": "3FXSNqHRXQ1aRLT8vKDTk8kzpNv7mA4qJ9x42zZj7g1tyNnpopexNC7JAbkq8KM6u1ZHo3vjX1KmNHTf9s9AQRnH",
  "key15": "5Pt4YThpktdzofKT51y1ZCz88J6ajyK6dbEZTPMef7ixb4Zr1VqoEwZtAHwMEAdUjXGdTi9yqjNxzCA2iCUtzWdQ",
  "key16": "51iSG4G1T81CcRzfjKwoj8re2o8E1ojZFsszySkQoMTi6LsWmTkS9arkHLhufgJuvrQASskwwdg6wyBWvUfv7deN",
  "key17": "2iPtUh7rMZv4ywAxueuV2A9WSPyzZ87MNiPTaB422ENMijVFzvFJvaMnz8baG97V2F7mG4UtJDpJ87kwKmTgd558",
  "key18": "3frUNLLKhxrei4SBZ7z5xMW8krxf9eqawTzq5Lrsd3hT5WcZZcJVwxQToXp8ZuCRCKhq3iZjtME5CSwUQgW3UXZ7",
  "key19": "4TafHwLWNVZd6bEucGYToHUnAyzBupbJedK3p1EScyFjRyfeeP31bgKjg8WDG33usRWSEyrDKwRHBidXKomq6jjC",
  "key20": "4qz3VoRXVm3nXav73Ujo6oem3FGcbwDSzs3kyY8VT2FjaTKLEQU1YP72Kv2BRpjLHD5x7CJLJuJDCoJ71kUn6tKR",
  "key21": "4g8RWPL5CEqSzxre483xQ6yN78NFG59Tvd5EouYUNhSJ1DmWbwhHRpshkmfRHYUPuu2qGQWuhmZmhGFxfHtA5tAA",
  "key22": "i2xGLBVaJFFLbSRRLbgjCACgyXFF5j13tk7neYbGTy5yQAB15UaCNjGfXQ49wGfzP48JSZFdd9jnW2jQST9NxZD",
  "key23": "66aF5HxDHnxsvXrEAXJ7qXeY9QnoPVN6wj1M1h1A9ixSfMCXy5vfUXmz1DfjfWXCEWgoTrcNoTJJQivxEZ3a5Z9s",
  "key24": "KEgU8ZDwpK5htdEsoyeunKKuH2dSPmCwLiu3kn1GysCWasWL1qsDBZXgViumPQkmqEL128uZmDWy47jTXHizcqZ",
  "key25": "3WJmmxJybkTp8HG12rZKF3ZqbECEGpj8vz4vFwDLBB6ajgsuz4YkYUUmvfKF3v6dapLtb5mPHELPp751pm1VthDf",
  "key26": "2CSKQAna3nA8Uj9nnERhKZuuzk18TSim4iLdnZEGuMdNXxS8pFRWQytwDRrNnGKHfHggnhPYJ3k28kwtvpWCK28A",
  "key27": "3c16ZUPyKbPLHEUHR6LFLGHb7u7faxpqt1ptfVaf3WhszMp2Rhgv4zYSsZBL75aguhtxFpmkJYmuusLXsa5qo7nQ",
  "key28": "26AzLTHeAi5f7ybj9YskBwpjTcdAdi6RB5ppckXhjDrpmxHKLrDv3suhuePKe5ZkU4nnKXBXQPMujofDQdCa9RkL",
  "key29": "4xJVcHCWu4Yfz1zjtv75pq1ih9HDrRoKgkBwutkcM81qcqHPA9TNjBdFj15Fn8f9Arzc8oGDErgvR6UjaF6CRCFS",
  "key30": "2nASeJZQ7vNw8QkMo5Z1tRfhcELYPEjoyEAggQVeSeLD3qxBY7DyfAoVz5GNTfWDRTpVvgne18VCh22yBdTfg9u4",
  "key31": "2UvBrby5HnWE4ANPWMnUox85d5MjkrKkiDLTfC1cdoAZpFdLt4xFEE8aYbHPQMfkTMk2p1raNxQrr5G1BbDwhYcW",
  "key32": "sGeT9ZN4sUB2UcGk9tcJr36UFoPofWGzxUT3KFnWTDXxHfpxzrzSuRsQjjA8MrkH4jXGt3LnhYui1oRSWLD1VES",
  "key33": "4cVdo87XcvFsgmpnQ5HH9bfrmMVDPWVVHVusHtQC3hYomtbYkjX6MTWs23whM5q7E4hH6EZSwyGi2SKKQfAYisav",
  "key34": "5JkjUYM6zVvEiBNixvHi96fEzAApL3BH1MMvZ4CXRiAVfYpY8p8EfXuXJb9LggxogWFhdrdbB2UeYBqoQAtTPi7U"
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
