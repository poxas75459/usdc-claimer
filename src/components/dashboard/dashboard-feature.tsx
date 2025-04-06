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
    "23RxZNi8QY9KXje7PxSoPx2KfNXSdMvshRSnHUnQ7ju9cHfizn6gkWupWofqPtA29NZX4fEDmcqWNV2LBrTTyNEa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PtB2SmCi8WqmcVPt3QmrhyKwfVd76rUnU9q9G7CnhJHgaveC9YtExhD9R1QMQSH2Hq6p6fLhaqYZ5gqjzEahDnr",
  "key1": "6B6uLbYQ7dMwbZLezykpY1VmX5SziKsEPr8m9J6qj9HM8yt9pRY7PTdEtnv5h3d2JU2HrhApvJVN1svxaDxV3xP",
  "key2": "5fiH8oHpEjiF4NcNgQ9B52bi2LBbgcVEcJA7apRn8qQFsAncwhnLstkQpPUxqCaprbyrMKdF9zEFecKquqwBHhvB",
  "key3": "2qdEjEfSqZ48K7E2eYz8HRfW5pD6yKNmGEcwgJS3N9Fx51Xxwzvmj5j7BRSgKbmrLWeUrSoTDH1AqsNqtPGEZfPz",
  "key4": "4xhaDCa56jmYRrEfRHrJuohR6eLoTxkeLo5n7x58v7ATbrMAFWh3FmXwYsFzp1fiYGWzzLyqWgg5vEkmEEt2Q4tg",
  "key5": "4zaZ9XR5pD6nontykHPUiD8cHZ2Yethf4nLBMP9rouHGGQHkG1ZGNs9Yi99X2saPfCEkgAc2KwouW3i7GZePw4yT",
  "key6": "3zZK3Q7nfN9pVKWLnirT6oM3w326E418sb5yQSL2nXwLEScgUnE8KoCsveahShitP9rNixorr5pQ7oKQeapfgtgE",
  "key7": "3cr2Gxgz1E4qih1SCWcMtiUos4pmhgd2D7p7SbiWKj8q3Ca2C3ErNLE7Ki9ues6HJKCzkZgDxGvFGoATaxubn2bK",
  "key8": "2SNF7dG4AerqCXGujLXGoTXTdqcaTmkatqapS17wriUbUDUsA7Ka3SXRZmny7wPmw7sGNWMuBQmysWYuN2aG4CG8",
  "key9": "PmSyxc53JPEXd9foYtTW8Gmjj5cwJ6DdV9Vk76cHxehNuiqfNYHjPEmhD1kyKHT6dkRqP7fujAyP6EDLpKknQi9",
  "key10": "2X4ejPexnxDX9jPD5j8Hfr6VCg3e2dHq89ZDVU8ZtX43X2ARrZ2K3jvYX9zJFfbzJ3U883yuAj13W5iSubu9bsPX",
  "key11": "3SY591ix4QHb9JLRVa7ejn7ux5LizPR7yYAgF23SQ5KJRA1Lw73PqoGZ4Eg96T6Y7z1ajnCjJ5WyRbBtDit6ihRk",
  "key12": "3ehdEnRAzkmY6VJ2KbtALYsz8RmisqLSmek8iHrv78Zd6u4oUSutc9e58RQiUST894VTiNV61ECJ2iGadWo6ueWe",
  "key13": "2ZDK8rvWTkeqiF3TFYY3cQUFtQ4a3LaDMzfLrKf7aj1YvKe7bk2vrkcakALoeRn2PUCjqFpiXBXr8ewTiukCvSri",
  "key14": "tiEmxUKtMRHpY5MXdDsFYKtQQgDoaUBPpP98N1un4xevCxB54Z9TBkHDyk4B9dZJSgojExbqasn4RenKoY3peVq",
  "key15": "2dHTNS8sefC3b6W8sEBAaySSwLfLZNPy63PAVmxpLveAE3FZjxtHf3dGruCrWfT8xv26dj6N4Pudc4h7k7rFtFKH",
  "key16": "nwZccK1wjy5MFFZAriLjBZkCfMb4cm9eSDwS7g7eDSPFzhJfbXFMbhfsjtfLRGmwD2nqzusqp4P7iJbazFRPEEM",
  "key17": "3bT77cdSiTt8GwPuYwXNAa2A2T8WvBUPEYq8BmxdaFqa5Yw2go2ZTRbekwkQGaeB7nZfw7zYC5ASNz1ZnP1VJGDj",
  "key18": "5AHFkgLrezv4vjtA4FJQob9TJeVeZ18vjoFPw8N1TxWcaQkPb7Zn9nz6FftnQq8Uj4HW1KKV7cmxDv6Fv2EuMMXD",
  "key19": "2yKL8T6TVgaj7xqPt5xn6KWiqebDHynX3qkxkP8Q2sNja6n8sWqbojoENw8BNBTp6Qmd7v1ko5YqzsHn7PATzFhx",
  "key20": "3aYi5vv93KygTEeaDP9mooJprh2pdHPqhJTeDMmnBgYDYeHeEFjxSXbR5UA9N7zNYPLoShtgd8B9Npm9maKaCDkW",
  "key21": "49hgbW2DvSYymPN4gXFu1kXA95Q3MibtScTFVEfJdjh2FEPXrr6D1zMNk9BBT5dGDFPcotQTXf7J2rDepr8a3CuG",
  "key22": "3ky5fpwwkoSZZtkj3k4BSP6SYvZ27kyLZV4zqP4H2m6XwDfTAqEkvHwUdhbSy2P9SajZ3hjYGVcW13A7x5pueUfJ",
  "key23": "3aW2mrzcFAB48uaq3yDA8UAAtTVy6irV4W5owhV76cJeBpEv52L58dw3GYqLXmzgbuoFVa9wwQvKYt8UYKQQ3Q8B",
  "key24": "41whRQzK7c4XZQQy2GaZxYRfDaGmX33yV92eS8KBPT5DD1xJix7WgQYaxw1hDPb9nKdeyr373iY8bmSTNj6GR6zQ",
  "key25": "4d4owrbweLxhk3gYPRmM2y9ytqFb73omnhP5uV1YA4zHtj18aGV6ZmkaxCaJ9FHzHsou4xjpe1jwyHUbSmGdLNfa",
  "key26": "39yTzn5V2BK2Tx2xyGXyJUP2Cz2YA72wGcWAkBvJqATrHSmfR9BsiKnLUwFdvrTWSqaPvsVyHsRV1h9oTan8Ay5q",
  "key27": "cSXZvxKEUGRPagpu5vo5dViUrZpZw6vtJLSeW4n8ewAHJfp6Wj8fQ6KqXcag8DhptKnY445HBHwuMjEUSRYv7HC",
  "key28": "2kHq9HXz5ELk7FW5A6gXnYVsMq3xtqWmM7e2nSsv46MoJJBZmRn1QXsAzf1r8zBvAAyz88Tcuq4x92hMoxW94vag"
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
