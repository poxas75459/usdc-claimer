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
    "iNNm8e9CRp44pseQ2fURLned3uy9EGyVk9ssMR7rzZxWobUB6DifGRVhEixiY2m56pWYiNht6LSjCHFR8tKmNN8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "scyZAxFLwBu3bzdWG6EAAgZXUaXvG86fRmvuX8JZtEVyF7G5H7MweuMRwmtqqV3BbMCu9GvPUUNqVsjMEwDzou9",
  "key1": "3kUy7UPnPFkE2YvgkFwH6Z6SGygiMrPVixuTqdCkeKZbEcCA3rM2eSVVe3FfB51X3h7dfdM43crSrESXUvJZpHBh",
  "key2": "4QeynMKobMRCifHCQq3kGLBJyFbszpT6vmGs9AhtvRcUbPVBCipZYFjVnKZY1vXsmM3J2vjhq3uo9MtZFfoSZ2op",
  "key3": "3QWKA3MFpH7r8Q3Lvn1BcttfYJBEcxGApsN5k9EEHvPUuWhfZFwWKwGDrkRmCyu4VqCRPQdZi2T2B7DqLvXjwjVk",
  "key4": "4qVyvCWCuha3QivyDd2vKNU1sYYCSfBYf4nA9vM2xXK8Ahs6W1Dy9tpU8RWVVS4dJ5ByPFrEgBqCuuK1TpXdZLEf",
  "key5": "4rEUoEt61bM2VbCYKg4oRELkhULv3zZGBh1XpxQKLXVdJk5Hy2YTuEBt224QFAAwP7JgzVJYvAxfmnQhMaSXDMnx",
  "key6": "3DjSBAftTGiAJhoABy8wk1nWSwRDQY1KGij4LwXo2JZsnAcy6ZJbjhFgxtxqhZXDnt8Yqt6K28CfLCYhJtE4JUeD",
  "key7": "5zgiDw7VuU18sUT1qQK7gfBifzbVq2w9jhUJ6rAP95twEFiMChRivyRwxxnepwJcSnr8cFg6GZK3BrCxVvxNz8Uf",
  "key8": "3eJyEAtSZo9bDBmvtp9EXaUBWpNNj3eVmdfMaHBnAs91ZZgSK7aZjbNAxUxGe5XfWiE4DLv7G5W6Nmp7HSWzcxNb",
  "key9": "5mhxpa6V42Xk15KwDJdPC1jWQy6JoiiDC4RexDDA4qtLRmnuUUnTBbrbB3WMDsSjCKbMFKW2VcpHyv5rS1F6jbNM",
  "key10": "28fCUA7MkF4nbU5CqMF7oGT4t9wjwR9nkYHk1yhaZtuw4eV8UJtsL6V9Dry43oXvNVgA1j6RwLw8ihHKWr5K3Xtq",
  "key11": "5Qjd7XkikyA1fYg5bqqpqkwhpwLESHawWLWYdxWvLBtQxk2FCk6UtQDqW1AURkcYmDc1ZkAsUZ13WV8wLjhJGoSo",
  "key12": "5XJBhenJ2fDGFkeHQDXd9eL7is5YbGfwfbWJtgNcjE7yApR4SjdLPDy2uDyYaonuCdZqmQRQKze3xsibCcS2p9WF",
  "key13": "28yprT6iQEJ5WbeSBydHB7rBNRWPtpYiVAdydJbLTgHhGYVWKfmwYAMbjvbwrf3vLtnLMz66bDHPXEh32ThRrXqS",
  "key14": "2pvyfW6jAacwUt7TJRcpCn2xPiJqLwFdKKqz7r2zwwGQAFFxLLF8L8CiSENok1Ls3LfzSMiB2Z8GpVajipZS5YdL",
  "key15": "5BwP3Afu4G75xfUNJNjAQYpxyAnuckwPS7GfEbUjjRTGSsEbX6KtMAtzW1RZ4HQFCUxQAtNTn53okoz5NMeomezp",
  "key16": "gacEm27fmyXvJgCB737UCLR8FWERNs1YstPYa4LKQhwCz8DGskLpysM2F9TUmEwwX72EjCdAwMHj3Kqtvc69oQx",
  "key17": "5MJ12zSNo1qPrUtCAg16CDaWKZAy9eBCkzv8Yww9ZXBxf4FaFB2f4mdqzcVZ7jvS2z7Qd7M9HSVsL4p6bVKNjoYK",
  "key18": "2bccdktMZbybjCcbBgssjrapShQsPhRv3qxGdwKYujzrzWQqdzBu3BJGbW1KY6WncywXAEc1xhvPeLfDmn3jAckN",
  "key19": "ztEHnB9yAqGGCzZAS2Vov7wXz69mQmD8ihD8Ra8muNmYNiH3rfbgT3PUaBcYD5J9Ai1k8Z47ynQ41Tb8gJDSByr",
  "key20": "2EazpMS3dxN1ycNTfQswK9SSp9TSEaKmW4M9T6yitUVnbssGHViajbEpmH3gyUjY3nvMsuft3B37R7e83gRboL6E",
  "key21": "5xKuj3XbHN2L21bhWpR6CD17CbGoubV59jKmfGwaPWmJd51TCuxAjuJyDey4UfD2wB5aYUM8qnMSQTJ3x7qtEPMB",
  "key22": "3cYfPqfhHvsCNP5SsebCX9TmyEqmsfBYs9TPuL6sdusH2dEAdpcCHVy8w7RniSAeHwfeLRWxxamFWieVcwgQHjfr",
  "key23": "ERhBVKxbDHG5DeyWEoFaohafQqUHxRSPa5D6gzdu3mShoWUYqyJLwmabys1hPRyYac5uuRMkhoC28Cf4xYoJfRr",
  "key24": "5DFkjkmzR7znf1geXSUpGWDabFfvEM3FUdDWASbze2N7DAi55ckYtPnzowVsL1xxCjJhsfLvdGV7mwRcQPuNZf2N",
  "key25": "MwUW1sqXLp3StYrmW5ZS58LCE5UQ8pX4dmH9umv33fA2icermcHGdk7bg4xALRpZeMAhT2n4zgdxMTh6gitVkax",
  "key26": "2xYdz5tFJYqkfmdrPHHbTM6aG82p63BFSFHzHzq4wRo6u8is4Kr1GAzJaK7NgnCm2a2cwXk9a1A8wZ1stEvrfdW6",
  "key27": "y179bULcHGEaedCAxUGd1wVXZFn4uYFPYvtR7AH3dDHeUfy1GnohU2ADc6dHYQv8XJGGUUcwgS9RhMUW8E894UL",
  "key28": "2vQeVcWSdCNYb4izGqHPScnaWie4myfGouEED1zTSdrgFjJutnH7RoYLbch4AVaEJPseSkoStcYRdtHfEeeKCCQ4",
  "key29": "2MrXCq6fgAhCxumD1BaWtjnzZXHTa1QXVm5qRiUN1bD474DHx9GVy4YZMawuMAs7A1HAnrq247JAXXUWynmV7HVD",
  "key30": "xhHc7m3aHNnQgiTnLVEHktZ1HHJdNuRckQEJN9rJy8SatxWsMUyH5M74EhtTxRAsnnJ7vFwB1euTznQb7ZPiM6B"
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
