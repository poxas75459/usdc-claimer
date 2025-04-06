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
    "5i8E91b8T5Q1rhNitJu9hTsXxzd4K3ZuLmE6UPKMPfY5u6Ys69gwe5oTwZ9s9GtthKRFL2vLF8ftskob1w5BKsfr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AET5UmPpFccMdTtZLrbchjDTk7RHAZmwRdPBRCHnhQYyZRYVyqMTT3PvGW6J4U4gcaEWM16Uvi1NEgKHTiWePZX",
  "key1": "9X5YNxVycqqvSeBRxVS8ZEPZAT1c5HN7pAGsYXJ1oGLAa4FhazfeXF7VcFAuV5Boq2DV1MvLYC8kQnvuSVSEcKf",
  "key2": "2Q3yZ5Te8QEy5ErBtLrcwKxRcjMQpzebFmd9d37TQtjH5yXz791hve7FUkhQbqQQM5n3dn5bQwnoiJi2tY8PstMN",
  "key3": "3ydYkJsiCSCEVsb2PdGqHi4RyXzNp9qNUgxCekQgZFEfEYgz1PaSnNbLLgSRrd1Vx6MwswdzkyqM8wpahBAXpD22",
  "key4": "27mx7qQjofVogEGGQmDvKEWbx9F5RKtiTETzUmgcjPCZhFthVq3k334wGbKnEjp6vRVpcR3HvpVd643rbEjJaFC4",
  "key5": "2QRST2d1E4wNakS5Wev1XJGChKwECVcmEnAvmsbKw3Dt1nA6PRGpcGbk6tjfGX8K6zXkCiw1yTEW2PpLaE3oj71H",
  "key6": "3cn4rsVuoJBC3mUHgCib6uNr6SNH1r4sK9Z4d8ZSMyRK5P8UaUajN5SJ8MBto75AVzGofxfBTcpCXZSuPcBMmb9j",
  "key7": "2VUisPKJzd1Mqgn3RjRtbij55MqLYdvLZj1F4rRYDPK3mZsjorxVkgRKsPQedX2ppkRzULo35fMb41TtnSS55YYB",
  "key8": "4yNNN5RTPUFwrKJZF5Vhik2XopYy89LiWRDbc71RFA9pRLUVv8ucZrZ1iX6RiRkYXA2GELPkZdeKXJ4fahNHXUkH",
  "key9": "v2vDWiGkScDW73qjKwUNAS5HerUvgC2pZSwzbnGRXREiGXHDsRBghbzMDGtHCHgHUkMomry8GcXzfuNBFF1xRpu",
  "key10": "BhRXjNLFkJ9RAWkUKuG2zx7Ld8WWFqa9VuKNHN6n4p6XzzVYpHYdJd1XqzB6LsdjWtKPZ4SLGSnh32SyRjGtUeU",
  "key11": "3oFEm7iJ2sL1f6guACL9dY4qMjzN4U6t5XdXoVKdDjQ9jQTJpB4BTuuPVTN6x1MwH48yaG4Hesj6zuU5K1Rvi1Qu",
  "key12": "hP95jGNH7Fvfv6tZBoQSw1Vnbpc2jYBHvShqapP5JDb3atddKsX6yUjThqB7LDiew1sSyMd4wY6B3kkQLH4ZgK5",
  "key13": "2wmwxaNUaakN8paTnrAoabzcBWRx8UaMAfZ6HdRDxhQspCj5wLyfeJDcLhgRLDWZqethkh1caL2x92tQ8ykxUK8U",
  "key14": "5DWXScYFPfW8aycYdvjUE8pmyJF7Cq5xATQim8YTQnGC51R2Vk34RpC48Q3tAVkxuSF21GV3Sa4tE2aG63XHKrUE",
  "key15": "2uUTYcEjtSbTrCrSFVPMypL7KQ554LhadCDgBVXxSS5njaK266Dx5Zc2cPYBDkuQGBMd7xhVXnsj84qYDZCyHM8g",
  "key16": "4eV1q9TziJQuUTc8jyxpPmTBqKRBYvrziVEAJUDjr4h9YkpvtFXCADEABJRc3bZnBd7f7LC44NRhJBudg636CrBs",
  "key17": "2THpd11Zfj7zoeX63KCyrLSnRaDWisk3gNm5xZbxQVQq5hPa3vDJsHJm6m3ymaEpeNPJV7XZseBn8gygWnuXGL51",
  "key18": "41EG55hB9YXGLLRWqGAYRGeRHcJTR7e5pykf27hg2HyhLimbmxSf7kiHZsotamhUWWPCsKQuTj9DfZk9gX2XVxtp",
  "key19": "3u8Bw8PHBkA64V726pLGZZKJH1m9bsTiXPxBYCdPL9bhhuvmP5pSKep3iJuDAeJeu6NLHwz9hnGERTJCFKGG6Pfw",
  "key20": "3wDWVrY44trMJ5osc5qzzcSzz7ehw8vwFEiiw153jcrgXCN2cxp8y1S4ZvMwUNJ2PuDbdfBnreDiFRncpJgp6QGj",
  "key21": "4fV7zEbvswztBB1erCwxm9VwdTLAG8zd3xTPpiuRrKyvttfKfcmrbaEWFnebR4dKXoYBwwNKr5nSpdqMADJ7QwyK",
  "key22": "3mGddYsMfXjn5UU5aTx3zyNrNyhM2LD8RjmE8Vj7uTVhNQteDEaaGVUkaVSpNptnkSjFyyUZyGTq4Nh6yn37yBku",
  "key23": "4mRhF62bjqnEeHhjtjzsCP8uGvT13UkQ1kKj1SzZ7wbbfWApDkDoMc7QjSoM59h3DpDiRL1R2aBWXbKVruPzAQ2z",
  "key24": "4gKCurYzwuBW4XASAYQTSG1fu46ZhSyH5Z82vpzPY5zb1WMsrn42ABfUrTjGJTP9tYuM7P69QwoNqTg3AEh5Xv8Z",
  "key25": "5nmeWNXaDZc6pfBDUNw9LFAWntXfrASsKk2YQ4fB7hX492R74DLq4sA8rViMiwE2dr5W8TWfNmYUhso1eidee2kN",
  "key26": "2gPFqArdLffJaNuNmGQatMMo3Eha3tMiAwystTz51oPBVce1zjtSAcjwJGPhw8ngZnrVtC2U7ywmDLkpRPfDuF5Y",
  "key27": "3FUYvJj4svdNjVK63Gf85GbXVKREjgmPfRnqGbVXCyzfkcH9xE1stjNLWPj6EB7UyWDUCSJiwFzT5B4SiQzTXgzy",
  "key28": "5RkSNEWE8RMKDxVwegEVmCRtykcf8kn2Yv3t5UEf2CGVgKsNZyfBLs2VS2pxZZekxVVmr7D7fFE14Xyqnx1eoGHQ",
  "key29": "4qzBWvx2VmLRgtUEXKmvpEU4edcdUoAHzmTCX3DEhq4617RfTpdqZN1ziZHEvCfhpjpfQ6mMTbzmR3rHUj5BS4ie",
  "key30": "4TGunanZmXYxS55wvvbgHKozzLtAG6dxKb4ihM3C3kfbhDhLqeHW49efzXpauS3zeYaaQcgAQatpW6ojneBLDkXH",
  "key31": "38uCCiDREHFS3jLvRVVLPG7FyywcKsdqZe1o6HkJToEuMfK8tiEs7hsnHWEyt8ep7yTeYAQr6H9iGp6fVVomTunL",
  "key32": "66sqVU9eg92E6J5W23MJqWjHSdmNEJVtEf9RsioUCT3kFsx9uTTYKTmG44qDfQQaZLwGi655YN5YU1QmLoGEnLZt",
  "key33": "5jHn9uAAvTWPsENSvQHRqd4fx3DSVSMr8uptwmzSgYZc7QXKwhtbmrZGsmPW3RqxrRhofHYS3SReveDeVaJURyJC",
  "key34": "2JVtYH3aKC1HDds5LrjEHPhKdH6tnk8zWheM9AHe7bMjm9DejQn2PDsLAXhvxsLHDp98xnUpbwGsB2BqvQHe8W4S",
  "key35": "C8So7GYBNvi3NPajfcoZgWmJB9KQTYosKv66pp9sJb2iYXUAMKknE88o1eZ9RMfV71C6oPhdbQRcsPu8uGzHCkX",
  "key36": "27dDsEdqjcA9Gdw1Af4YnYAEydLYtEaZY5Pb1YApV22TBce4riY3NioQsLHh2K4kiyTPGbj2xYwcfXZmMYDrNkLu",
  "key37": "2HsAXWvS6G3ZFcdvgdTVWcxZmuRxxm9reyQmv8Cqaj6jtCACih7VQkVsFQaxiJCGFRguyQFAf6zRayTSuDzLkfRU",
  "key38": "B8UMq31J2sbCP9bMEs2CGErELcFUuDDVb69h7mwW4rD7jkFaMGfTmEZjEX7qxy4cZvpFLbptv4uvB7mKzG2MTJx",
  "key39": "2ZeEib1asPX13xFbt2B7L5QVGZgJBJSpHHU5EeDgsiLqzzVwWKzkcheopo7y7PBZj6rbcR1uNhQ76dtGL9GeKEQZ",
  "key40": "8nKhRvWmkKRcqAHxHgp6wnbtCYNZjxjEcD8jaC8wvbzjm8iKqRHiUDsrZkFSUeffs7XbGZdQVE4Dmf2aYEvVSou",
  "key41": "dic42TTYUmzAtj9JoV75HZ8R3eJknewFULNpAtcXmTQSyVusuVrG7KYwhKSeoTVAcTAEGqcyQ4L8YsN44icrbNi",
  "key42": "5fxZybsVd1YbbrbFV8hxPGuZBupnq7nXB2KxBKwYHoY66J69BEuYs19N6TLJJMdG6xcVoCBd8TbRUHS23sJY9uKX",
  "key43": "63GVLfNYDsJ2CzyXU73CD3PK6tpsnEDWB5oHNGhwYuRVmY4UBmsUWkHug8sNyLgBcUXFKXvDzKc9nVKq5icfcnxu",
  "key44": "67VCohj3o6ytpJx5cPMJJgFnPhbZnGicU1nPajSbUgHsY9ZULQnVW1H6KdPMVUtzuSenKmmr7QfXgH8cnTbJuGCr",
  "key45": "5p3hVbZyQhprLBwkTcqZ3TYXkwCUnHYWAvTyFnxtQgN7GbNWAc74w8r76JeVfRpw1WLnmnuFcnEBi3DANPP2pzr1"
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
