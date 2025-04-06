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
    "2aWwRHbrEt2xBmqArvSS7W5WVA3WS9Dz4EskSNecCTeJw7vFceNzgqukXTxMvAtn4LhupfkVcTH5Cjx3bDjq9BW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YKqALbXCb831iy9dLsE58pJMZaC9RkcEH7wBzeJPjxpbpNAt1L41fW4Mj68uTW9i7j8koTUTYjqREQYWrU7aJW7",
  "key1": "5pp47ZuSSfXQMaGyhF2DRFzswEwxejU96mvF4iK4JAwgmMk3qmmQK9YLxF1NSvxNytsGRu4VztRWNSTt3fX2FKu3",
  "key2": "5ma2PSYY8p8Eu1HCsHnMKqfvchND9CDU5xX7qs9KDic1MwBqifXHH68YSXsUiDyokyuwBKEcPSRwhqfkqdy3Eejr",
  "key3": "3KVTsdsTCWL35SGG7nYAM6uh4kxUGyGaJZNwmMN6tervUajHZdW74wzS4Pv6JczvRg7mHNYzYoYwJPvNgHHFFcER",
  "key4": "5gwAKwxkbpLgSMjuezaX6DUSjpX8Qn6SdgegDgkjnmELYDuqznWuPKJ9x5isGrLrJ7wFb9PgLneFte9R1tYKoMTT",
  "key5": "5XH4YvFC4FrsS9KbYNr2wpZeQWpK1PMu662oP3QWPTeh1iuV7ikp3UHiqgVXPDVoW1e4nZyuoDHdadBieuMHcGqo",
  "key6": "4h1g8HwF4wn659Hri31YvpRCJBRHgr3ZVq2u2m2QPYUXS1cpzJYdNMANdJ91x2ddgYrftJxQDPAc23oMoSYFwCqL",
  "key7": "4Z3RWAwxZEHYJKjn3wp1BeWMj6j3FGj2xUPTehLMtATGLwEuWp1o9nvN4Hei2QLk5kGHfsQVsSFLMYkJ7y94tWm6",
  "key8": "2aH479Tzu4QhVMQjVP76XdVCgJ46HPZeqDDwTaRfq4qiwD4wneVXj2C3kkc51vr1vMjG99dFhVR15cXTuyKNtG9C",
  "key9": "E8Vx3iVnKbFvZUAYDtmufBWHksqgDBStLwBa1j5fBvKjn67pVZTMgDCmrsQa9RdofrJrQmGcJFNW37QWZzuDYj4",
  "key10": "3DM98iioQN3WtrDgVwgXVUh3Y9zL1iQq8hQqfPwEf52jPWQ7VEeceHDAcTXYdcj1g8p1ugn5HBWWrreWmv7G9KpN",
  "key11": "G5KU53fo16huV2a5Est6AaX6MZMf9WHpDM2mY7p9q6JG2pGiUe8Hm5JLUephSguyfLaiXVXJjQYEdE36GvxGDj6",
  "key12": "3oxQu614mdMZ5tkxPLMR5oMZkCUnz66pC7RZLmpw4M8tdNpMHDzFptekMTY4ZiQrjgR1fhnCMUR21PcEXAs4x7sJ",
  "key13": "5WPhhcBD7Lw1bmViWs8344c85s6tkKmGdniseXET6wepdyAnVBoqgRTmy9sF6rTVqKfytpDZnw97PFrLFfufWBKa",
  "key14": "3KLqMj2t67dwJJ1vfLxhXKwNRkn3duZhu8w5SMmgAhYdowmE2ZnbGBJVaNP8Z3JZNWfgMVE24zkdNihFRMH1svne",
  "key15": "2TBpdKCdPj65qqZtDn118iThezAR6LDHWySfxZMWgni4UWjGLeCWxXh3oUCqQtXBfC4WofwpXpsaJVAMCdcSt7Tv",
  "key16": "25CVdDZy1FBVZ4fcp2gNjBzHv7eXgk2MYWsjDygwk2btDPJ4Ujai2yg6S8eJf7k19bBeNh7zC8ByAcwZiKsunR3i",
  "key17": "5puBq9rj9LtKZ2DfeEhtsdozuJiZUWb3AXdFdPtvkCeoxadiPdWz7GX3oQEebD9iEhDJxohc9R7YtU39Ha2bCMxj",
  "key18": "67e9nMYm7eqedLsryGnHsySvF7mzbnGf6rb5mgpUy5EFRymJnVoocvp9rG8fGMpTPYJoFjHcFYfx1wdNUs9gKGFh",
  "key19": "ji6rJwPWc7HBnXd2aiLgAFjWR4quuKjp4zqhMe5CL6ZMw2BiMiXNhYgVC7QqiMaswoNbAupRvZJvXGgH5ux5QgU",
  "key20": "2yDK2pgzCPXRsLBHAYviU7Y2BUPY7xc5TkDhVLYwW854uDHnP8wx2dUFUYoXAFrcPkdS5sEYqPVy5dq9i4PkUYB3",
  "key21": "2993xzCvmhnvAeY1Rj7dTgFMPAprY31ZzoFEfaMG5fh6Y1T6KVJGBpjGWG3sTb1HqHGPuuvUVjFo2RrN6W4MQ87v",
  "key22": "5nWfzecWrEePafBZPvepznRCReapGKLyxsdGHn6TxyfFHgFob8ENVwf8GF4LxfpMe1D5wVdXrpNQqcKKSGjaqdyx",
  "key23": "QsE2oZMwTQifMnVosJyeeVhrwKNCodgq71pbxqkXYtd8XFWZQKmJc3GiaRqqR5wwo818WMBD3EDzrvYUdq4wmaV",
  "key24": "2JcGafpEoJCH9HdffiGGRvatU9XKcX7hCazFio6KmLZ1CbSTCGx246xawGAx1TeF7Rhjv5G78EQCQCo5Ue7tEFgV",
  "key25": "3Kp2BRcParHtW8zpzKQDNXqxcoqTddAxp5Kge8BSnpEbdKuEb52FD1ZCNj4skh4sEyaWnk8Sbs3ixSMq9Pw7CduZ",
  "key26": "3ctpZS1vWKt8ERfHqKCcmqJ2gqgkgQSy59pV2eSYMChHqsMZ6TrcEoF369nXQUL6DBuxi3DJ9eViwM8pyyMzqL8Y",
  "key27": "29cyqcjxy9AR9X4igv8dq5d6q3wUiWA2ab1zo8jSpaGSYH5Sujg4D8GUuNfq5kGzNSAJv5RrA9S57fvZviGvYNJM"
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
