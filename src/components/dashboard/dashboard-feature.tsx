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
    "CDKJQHnEWHgv4LTZ5cKs7k6XCDeA7WzFbRswRbzQ7JZ2HbSV7Kn6Q8fpAtKE52B46qZiu4bGKh4gpUQFQqfwZiq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V9FyMwGWUJmMuKFqw4gr8eZcuX5TsSjbTdxVhBwnqb2fLGQgqh6aftY7qGxarCRa5EiLr9YRLB1hN6acqg9UTTQ",
  "key1": "3dq5bUGfHfbKTUFVzfGt8bYZBMjRDsbPuUpKwVR72MXjNmh1aepsdmPzeAwJ2MwPPXGyQm6MrY5NG5Nde9HAwW79",
  "key2": "5WZucBvCFRcbLGpQs1PPM49W5oRAntJ2vsAZQFVcRjHHqiTUB87aYveFS5C6CpYwUMfsSaxuueS5K5UZCp5dcQC7",
  "key3": "8uXTR7328KCPqQJqXmnmhc6Q5gEvfUeudM2Vccd1tyZkiviRwULSGTHpZuVqdBL8bfoQWsCGMsxqXEUYzrYy7kx",
  "key4": "4witqc74hxirmE9vS4jm42eiMevXJetok7t1fSTQxxighkrPda3xktcHxsajPMFokZ7yGVM2z6wnHLaCSFPLaJgj",
  "key5": "Vb7fPqtGtXDRKZ2AcpfZHmx6F89fiD8AifdAJuXHqgyXa8TuwWrTyBxhUL7UPxYWNFTNXEpEBeKSRnTUnmL3FqU",
  "key6": "4V8Yqs67s5vp4BtdvjrscVKea9K68xNwTrFKdTk9BHQ4YBbgW6BBwExoSnhXXVxUcGvkXQ4fVP7GhgH5XgSyKCw2",
  "key7": "4r63Fzw6qnVjXwRr7iTe9EJfxYA5ejaxUTWzkdV8nFCpxU32TcL7i2rpQu2gaY4fT9sGrCJL2geM2uyXWeSP1CMe",
  "key8": "5ekKEfckMnuDdf7bE316jLcvVox83cfLoGeQoCcWDBynzYGeCUajz39fuFAwMYmEn7AaX4TwzmKRvvqysrXC3Ha7",
  "key9": "3CXrenw7km8cModZewrSyUQvBZcsfLrEhru6L1D98FKWPyZZdrhmiNhLE1UMLQGQ7WEeeSk2aiMbCTf3iJN1ejPi",
  "key10": "3KjPUadtVqGLKz9cYq8neEDsWGcA8BCBRdaCNgC5fzC3upkBGhWgVnpDYYss1G3p4oJrUduWcuPFFZaRS7cZCSz4",
  "key11": "ibkSUoYYkscPyJ4wNHxPdstqCETmzQfD65VHEXY3ZUrGAcUbtkvwCN8eLuHpQ6k1ahyxtGiSu4fUto8an3z1pJ2",
  "key12": "4oeCsGzUd8uDxpTd4BR8jmFzAWsdDSrDdXkAi2mxExB5xN2SDstX4BQUmtnaSSQwZgWsi69tpriJiJZKjfE7Fuy",
  "key13": "3dycQ2U4Np3DTCPBfMYUi3Ak1DvwwoR5AbrB95GaMpkXzL4PE7rshjxqeAw4cqDYwqc3T6A22fYiXcZYJ3TdxGTe",
  "key14": "5r1CT2B9GDUNE5FUDJbWT4YSB37DGs9wErJDP8JgtB1GEt8yGEDWQb889t8dowuvw3UqzueshE49YVML6pP71WV6",
  "key15": "23jzN2wd8fsEFHtKiB85LXimNg7Q3WgnsAsRLWvU633vYNdiwkDHbQaiKqfHU6r1y7w5BSq3TrrLDpgW1596o1fb",
  "key16": "smtXXku3VrJsq5mpid7SjPwdofGh2rHuge9EtqcT2L2htttSK3LZsFyxHpmuEBcno6mxet8KCjBFYz2rkAtJbh4",
  "key17": "gYJYjWJzhARhsk9Ge3twqiEffJtohUtouZXHEa3UtsnNedL3qXrPtWmqSFaqfSZiW6y1cJTxMSEJ4c4WakEjv4g",
  "key18": "2NSWqbiZTcz8kAH6ccTcWxJ61ShtsNzYDnY6h74Jj9yhxavuFY6Qfy82jhnJte3c3Kw7LxgjNKuurHYrCtb2inmP",
  "key19": "661RKjFKF5k3MsQ4djpgy3jgrZZK1VaGT9tt8dngXqCZupDnP4h91EGBy8bB3VZErBVhWDhkPy1T62wgYNj7HvQK",
  "key20": "247dEBmsrYqbQHfDzrcDz3qoAR74dUspbCK22s27f58EzrLrUXzRfz5fEXaPSvhFSb4bGgCXWXNdxLZVTHyAnPEY",
  "key21": "4XgjZEcDEnaJQAzM4kXpinmTftpCTsAmh3AWrSTGV9KxNo7TvJwtfnwqaugJMW5L2dmjCXdXosdHLFiF1DcpazZA",
  "key22": "3rGB3xEm9weM9SnPEqNMZm57Riqu3URE85jmbRctHEuzv8FfWZ78ho5DZNeh6a38p7G5W8bH8zTTk5RYYzDbJjhu",
  "key23": "FFKSFFhFwNN2adoA3wfHcTte7RBd3EnDHZQjBxycvJxEYCDNUyKQdWzSS5pzxmdFP3uYLgRNezSw9b7ZPjDQmqy",
  "key24": "3iNWHS2mUTZrPhzSZgXgDiLZ2W5yg9wMFZKGomC8Aquhe4q6Tkcw16ZojeXxWW8MnCCw3UVAd8v53aCEzg5HPjG8"
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
