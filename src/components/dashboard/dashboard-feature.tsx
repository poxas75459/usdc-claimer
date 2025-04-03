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
    "52yBck3LitrML6dj1uNvjC5qGwNfCuHTPpXkt9CvDyUE6U9GPn7KWUXPAzvN6esVcGQ8S3CccxaJycVnNCjXtgMH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e2PgkMfvdNxaC9UnAmEvmz9j6xByQDFgZgqEBvX4iZgBpM3U43DVKFUjRzyvpUR5zFAMHdar5yQaw1PsB7R37Mx",
  "key1": "2wf3hdVQsn3s9e1YR7NJK4CswiymF7QTRBKFuJExCGPFzryCgNdkG2qy1Ae2j62iiuTyqWhBKK8Dm5b34gm7TWLv",
  "key2": "585tHiWjDdeBuYxRUcDzmZ7BrG8X8juPeR38PmpHNabuE9tVFHdwYhQtXJigcKbPprbz3CZgkWPycReAsk1GHrW",
  "key3": "NDMKdLTF8iHQMRHqwxopVZoPmL56kaPK2VMTmYtcvgekjmSGMVCW3JT2xYgmUmjVG3ALJ3qduyDjWSbwTttEHQv",
  "key4": "5BcQh1SksYNH9o17YhPDHvJAP4JNCDd9XhDm4JWnE463tJEH7W7yRFHwAdHJhiotwrt3y87zDMEw8wzXAwNhzLWv",
  "key5": "2VzGZvJRtWmoBWuRYSeEVwGYcZtppcfBHDLgF4VyRFFfSb6ncEUP2QbFy6rH76uLsrSSELXVNDgxepPa9UqZWjru",
  "key6": "5Ad3GvuL6BgqbBhNKVvwYnjg4rXWbq1taKHsx4T7xVNjTY53Xf9GCr78NwCeaunp2QdRRwDjqZbcg3oHwNgEnH1M",
  "key7": "3HfpaDoixtm5HjYJJjgQncYdXaf4qmTnMii7tyd3Po2sZvMzcxukyaKcNfF8LmQuQjuqevqRmC96hmHopvyDKF5A",
  "key8": "3a9HNZxRH3jX9szzBk7PohDsBQEQwesKUTpm1LXdii1DwEDJqQM34BqeTig8dTnKqwDP1A1ARZ79uFxLmYU8Wnm7",
  "key9": "5TbJjAwHVp98iYf3PKcuxLW1A4WtUyPj8jJMpGbDKpVcdrqQC51C47N1FXpc9w4y3qbFqXRo9SGzRCPfCAtTRR2R",
  "key10": "2rwJdpj1GwbZ9iug3qbqVzYbY9KKt7rYknMbySy75pVcKtarWviXz3BzTQmHeGf1dUmWg64zXQww6CmSDvWpyrGq",
  "key11": "248M5JeEV7ZjMpHpi6AD5uNQ3JMVggb3fFQq5jB6qjMVMA6t6aMu9LVtgw3YedV6NVa6bHKFThyaCCGbgK6Ku8oh",
  "key12": "5uPExsb93778mCdnHYuLkr3nGjbiwsySp53RPVq86ejZ5QEL2XZPBiWiEP8CtujNu6WQ9UueRqTvKZhfGT46hjdj",
  "key13": "4LJmodcmf4Po5QxCkwDVAUhJyXsURKE13ZTx5oSYtcqHKu9E89tDAGuoxwnKuCWbATDACThzswB2cRvBn5mU6ps7",
  "key14": "4385FybUKdCCp3MLNNbifrSff4bFu5mNcCFn1mbz5dC7LKTwNeFW1CVD8SnJ4VipJbTcZwbYzxs7BzDyqt8rusjh",
  "key15": "6mk8M9fwBbvi1k2Kq7fkgjcdmjyKtoajApGNx17jEYSWp5JLD8sdPpmRaM4kN7nuqfKQBzrJDKN7oo8ZZ2rCoPu",
  "key16": "57fu5F5gaDJyE9EjZ4wwFji44y3JU8nKjn47geVH7Giyin7j3T4pencGNYf3EVzNfaowBkojW86DaTX8g3MU4MVL",
  "key17": "2KRt6M3YA6Z3Gi3T8C9zPBQ8FfeNQ6u9ocY96hRDApWE28zCwT65226MeF8eLyCZRhvMw35ny96A75f6j8JkdA9g",
  "key18": "2iCLCgCuaq8mkPwiDtdEQwQFTrCpWDGFz379bAqKtM4aFTsFfB9pSzvzoyuSY7tw3tAjNN69GvNqc7o5yoHmAnzf",
  "key19": "3m9sKFkS747mBTP4iz4u2BsfnEUgtf4zNye27YfU4716C9pQfq5wPLgyZv1x6ZZVpfTeqDC47fwHiSx2DePQRDmY",
  "key20": "DpGbunmMHwLz7ihn7akn8H5R8GDcESrfdHf3JmAPUgvRozWt7BWPQKi3Uh8XSxQ6oo6921vtg3vNnu9tNpuRpVp",
  "key21": "2Em4MTUKSv2e6pCQzUkHQnB9LuM1HLuMDzJ2cDX4sP8a7MV2mUWFo4WPUteVuZyLD3KUfDtzfiu9wv9mpdCgVbAt",
  "key22": "3uGBrWgKHd2tAxGQAKxppnkP1TDaxYgTu8nuorSbC5AwT4Kq9qHAhjLyU24Vigii5YRoBZPLX7QYw6KXuYirfwrw",
  "key23": "31FK22M9PiT2uxYVT9cKpDBrTJJY19UsMtZHQk5HaCndh4HihmZpzyxuk5WXvNEpuWghcWfde44q2gEZwF15jBh6",
  "key24": "5dfTyygVtZozDGsDL41EZ8F7DbLjhDkD5ooe2A8kJceAwa7gtYXVcrxjGLfqrpLwTQQUBKqTBTG3BgWbq8QojFhi",
  "key25": "5vZtvY96fBY6G4pDGJ4Hc78JBPTXqVRvjWjDaQNhfcf1oGHrxVpvKd4ivQdEc6yvXzmRikxX2WTn8gJRChtx3fWa",
  "key26": "3NfMHZxYjmGH746GNQ6Tz1isUPPrtBCwJEVFdNmUbAQfFYJKL2KSSubYapDTtRBsNJ4KvfnLegaTfiHxYpg3NSfS",
  "key27": "2VGHtm5AwD1beR6YgqXNGd3efidfDV9YtCrnH53Fy1BErWK2bRiMFCw9sHnvU45JdPJxiiyboZncjWHL5jwgbdx5",
  "key28": "4viG3syCtCbQevZKVozgNsy5HGPhupVtPpaQuvFjwAZEQLtxcpHWyH1Xwy9MkR7igXPkNjYJWg7AxsusJG3mupH2",
  "key29": "4h6rAJJmTfXoiS8o5RLhWvqZcsZmzMVSc8oKHpmuWvgDSZDSMr5CrBjx1pJEAaKg7jSe1UzQU7Wy99HXoHH5LDdR",
  "key30": "5nzxVUx4vttjYa8wghm1Dcf1RvwUUvjLotUgdm1waroFimGZpj7LFirnfcb493QZKvWya59tGSupx8Xc8GAbuh1Y",
  "key31": "4SrXnLPuVkxm4BZtV21xfGwHhvNfuyheai9Jiu8xBV18Nt3UqvgxGZavhJZRVFbx4dxuLC8yQLp8QzsEqBDuavys",
  "key32": "TuvLYpo11H4cySmam82tAEYoYRPWNkJmJGw8FpGiqWeK9uVrTutHgNKCiYaNqv7tgBUVz7Q5kEcfFwhdyfsGvaQ",
  "key33": "23hLYL6xL8npikRxqCNZ7ZyziS3DAM1beJq3F9knZt1SuySnK1hKN3JfU2Ywk51o5Y6z8TJDg3V8Arqxi8vVpSk5",
  "key34": "5EH9HyecEZqXqYoye2Bx1AZ3wkjjPaCtd5jaRBeL8wc1W9khX6HdpB4gG2JfZ1KkhCvbQb4GEH8XBpn3WJTsrT1q",
  "key35": "3LHAq6e3gUzXuVErXs7KDkxwZpSgqTav5gEzkFDRVy9f9ncbNwVC1WkKWLzAXvad4oRSJm6W161NZ2uj5FdiFhiY"
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
