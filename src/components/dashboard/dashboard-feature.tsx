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
    "7ohhxyfuzBuEd5ACV9wPsRyq9RtcQ8GQU9KJQngAKv2mB4hd7F86GFqSwC2RFPtA2HKeRKZE5vvKejbGsxDVF67"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n5B8ffEQKT5iCcQkA39wZRHYJK2bzpqGwLzZE81i9yFFQmVRXXyrfwHcx2Fj7BaVtmisiczAtegiE9c1Nm6qcLv",
  "key1": "2Nkx7FyxwdQnRfdsjK6LNuDZtGfNkue3ETBZ5r7PurHLPMJgJQAgVsgrvutMdYUqjcXvuPP3qiq4cxVuz9dPJHDL",
  "key2": "3vKDUAYvLkifSx7ToSkjWqcrnh15fjc4ShK4coF4pKBiwEv5w75B5wGJbkFyjtQUv2qLqt2d1LQAhsgMdkNtLqLv",
  "key3": "3U2S6YbycbxPZ3pSdyU6k9N9BWoDDKcG1Z6mxsuaZJk4SyBZgPNpes4U46g19gwqedRCwWd78WpqjCzmzgHmc36G",
  "key4": "4PTSQXqN2SvZWkRgScGZWTp5K9ysCu9Aqco8gcQHCuCbhry9H9MRWKuKDY3wfMQTQqQFnbJp2Ge1EUjgW2P5z86B",
  "key5": "3oQ5sZ1dXpQn5dDoE5NRVbzTthdj8wDH5EYsrVSkCh6iQRTybDHUBTQTuUopMhYUzkWrxki6sU416NsYLAF1RQbG",
  "key6": "cwbf5piwxDcYr5czt6K4oMpJr6pmBPiWyvUJezwA6LXWV5jHnjz1MkQkQ9eCAQKZrTZNfJSxQ7MyQxJKCR1E49j",
  "key7": "5KshsBSr6msT4oS9xB38iz1o2PLfeBXWZ8iJfLRgrWq49e41yhhZ7Nx8SiAoMFLix3fqXGApg8ZqmZTwn9G4wYHo",
  "key8": "yWQEKNyrn1jL857FPAKCcC6TXx2kW6MTgJF9MgWzmbpYi8dLZhiZaJh5yAoVc8Y3ypoBM4absLbEKbqvcgcESvz",
  "key9": "2ta8sKN297ZYdJW8w2o29KEwfgbSYsZpwxKns65sicZK1W1bzjQ9HhjABd8tf1iCR96SuRbhTZaNhpz5dZy1qPL5",
  "key10": "2rYdKETkHNHsNwXAYuqQs5fpw8i2shght6HUw5UtKsZnHLg7GEaeiJB6TiGqKi7hhYSgRWW5uwM362TvLMCvQiba",
  "key11": "2b4q1FttibAgTopDG8cxoAYmsBNHSZY7Q2fcrvkXZKEYhkismkVYHucrfCz1ExZGtkU9dGu8fgK95Pia8z15hXvp",
  "key12": "46GNaCMKX4EnxC8LPg7AYAwF6TEmyUebj1fuCSfovyxEWtxWwF5B6TZ4zRPxwQqer5B4XwaCuQfvYnA6AK1FGMSz",
  "key13": "3MuwkYUMSC4hJmUnbPNWt3ZvpSKi6n6zFgsscu9MWB2DE6BAPAbyM1iiTs7ZL7BCRHjBv9J2K3wz5Manhcf49RZW",
  "key14": "4z6qzyQJxYw8NjYrGPLAYpfno4Luy5qspaV8fG8rzPWA5Jofz58PccevQyrMJBrDiapLDkMqkYCQmS82LGkV8skF",
  "key15": "JdgbDPGZa5zRzUpScU1q4swxiULYKg7YEpBT3RAYfV4sXzEEE5Vfs4Kt1b4Cf6rQgZMKd6TqbvnrN8k2awSvB47",
  "key16": "5GuqyC6rbrg5J4QQBHVSewpXVgzAThRVEMjghaPwmTWBkHUAawYLx2C9PrMz72wtXFxv7kZb423jzwVvkQvoQHpP",
  "key17": "2ptt3VunXhvR1o651McUfyPey42f9KPdRJQoU2FusvexWDkLdXs5ejRgELbx4oh6curcGNXRsugYSWYQXJR9uLL9",
  "key18": "NbskPqC4fASN9LaPNdw5QpRNgaBczLtHD6ZsVKfeCRWzrRyQ6bmoritgHBWTZXy9ppc7ozpTuGiBQaUoVnRbGgT",
  "key19": "2i8i11KUW2nn6zpJNpd73UAyCkZ7S4sANAygZLdSzS9Ur5G2m3w74apAUxT6AExgCKCn8Db6VXxE7yzCdfc1zSg5",
  "key20": "5Q1dxKdZHR2hGZbgNn25xE3hDUS2aFYVnNkUoppv3T4M5sEAqYgxKMRWwTXijt7GEXzaTrKfNd7jGE3eALRrz68",
  "key21": "5Z7bfUbqDhHuYU7mwgd1ekuo4EfjQbhttkoLUCaMVmfuYmwuQnpW6Fi4C8rZTUJorSWwJewjYwiWDwNkzXcjW39P",
  "key22": "4psCoK3AqERvxs2Fi5ydfjMiMqfwhocVixB2wcX5PLQqDJRa6yQKY9HbaL3x63JdRBj5TfPje5MxdovUxoug4qMQ",
  "key23": "ezw8iZRXN4Tn8tyhjWCE2fxtKVt76f3a5fMXtv4bf8JdZcbAQcSeZg4N4dne1pxx6ZFEcwPetuyPuYki4fZFcG6",
  "key24": "4BkzGhxx4kivqJso92CLcDv41dbaPZkcz2xGvRRg4Hzq9fjGkuPzVSGpkwfTaDfosBqp62D8c33ittR6Xn7KcdVB",
  "key25": "2ruHpaZNnF3D1oZ16VYBRo4fEN6mzjNB6yMXBZVsjpSeCJFyQVDiqL2af4kuZxe9qYL7Tue6mQpfzkGiGtuxncVo",
  "key26": "5BFe23mk5cQxEALSjufXQBQX3fyHsismqo8tqthaj2HbSARSeFtJHEwtEjVBT73rhd4JwvsHVKstGxNC1TUAjNwo",
  "key27": "BrXWLenZHFoJsrXqQnSBb7RRLLgJtu1TDijMC7soBaHULSZb8jqBrVnkDubG8BRYCUGjQSVuFzkiFFAA9jsQ8En",
  "key28": "maRAWi4Ssk2MMtgmTRvzHyuvAroiNNg3QkcuCYaCexAPQx63iU2AcpWpaDy2B1SYCGNy9qF9esJmobY6o9bByNz",
  "key29": "pdUjjK5V9xAHqT12ckdckzuuWtGgXvYi8aVrxTWZk3G3xDvKyL7XnLHymoBc2oENXi3QcWWFr2WYLDQbdgsLBG1",
  "key30": "4ScXA9veus5CDCwZJpa728rawKwFh1Ppd4YHT4JTo5ZzBkKzEte6G7yXrPbimzqZJRS2sJyVCGWtPrqmjVT26BkZ",
  "key31": "2UfbkiEDDjHECaMarqw1CiswjGUYTN3RRCREviJ8a1s54dMaDSqgjQs8j4csT7cy8vhByenaKUMMZRdJNQtngHJR",
  "key32": "3ZGCTsPd7ePJNMEnrr7Cct9cGwoswVHaCivbzAqmHRhUsY3cGedmKfSemsnDc2Sa15ZsEmnA2YJQ6ySpshkgXSNX"
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
