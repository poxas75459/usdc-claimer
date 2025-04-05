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
    "4vtfWVRycCWeiaqQ7QHUMCaer4U2hxWzmxPtPk1q5qmjuVhj1irjiRvSLdsWWi8NMVM1dw7L7h5rqsQsDJk4crX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vUiNAmz5sKgWCgPab4kds6vLQRvquxz8T1U25itsbzPEBuaPQSG8M2zVUXXQKYYQqnSVd3sAesduoaZgnmV6QHQ",
  "key1": "2ha6pdWYKBorj5RnCc9WWDsgY5Piv1Z8jgd6ANurWGB5hR51JKDRszbUHeB6VH1mhgJWaii28bqW4BzqVTx7EprV",
  "key2": "Y9drpzwtoap3XTKS5BcCbrE7tKud71FZLHT7CT37n8o7UEMsECTd4TTtkX7ShuqVpyjwCnVi1MrUzRYXXpT42xr",
  "key3": "5QgPAqnWf282v9kdNvyxj3jM1SnimfXqcyH4LcWRV9fTBjBEudaC2FewrMSy6Gu6DbBvxS9EuYyjM6yKXnTXWRKw",
  "key4": "3DNT93RezLYchtXYQ2RxKT5BhqfkF4UVz58m36LLk9cyqh7RVQGnr6zCR2hfvqW7h8dKJeSz4ZMEXsK6J5av9GsM",
  "key5": "4L1E9ooKSHBXAkdyL8t9E1QszGiF5RemSdXAAEdHvBdSa43vwRJ4uKf9SYZNyj2XCeSgNH7YhrojZjbnpmNz8jKE",
  "key6": "3LTmW197WKP4PusNqotSERMS919Q8ShzBafC8EwqhRJqjAFEPTVdLSoeRLAgJdneqimJsNpnt6fbyZKZbaEZQ3Hy",
  "key7": "46GU9WLqcq4MFbXUgLffMasQ46z8jcquab4aa9tZCiCPGYddEhNd5iVPwrwGXCS9tFcdeVBJ3WMpoe575E6qR33E",
  "key8": "3U33ymZHZV3qB1RAcC9Ua1MrJHLB56nTgfByTMkiJUWAE4EyWrQ2Dq58FfZK2hUDqYYHD8q4FK1Z1b7UeVkofFsP",
  "key9": "3NgyPvYZ5Dp7TpzJ91fnmpiQLDUdApAc4mmUuR9inDtnfB8iGbA5Q4Rn5XvdP1upoz2ocGBcUofEn58iiF8A1k5Z",
  "key10": "21tfTethCLZie2pyHqG5NmuR1VJ6eeitmyAW5JfUKjfdY6JoBhNLXzfdnpACXK7NtJgy5LbUsscVPb9cwEot9uL2",
  "key11": "365i7yw4KRC9RcWv98hezMNJ2YKSqS87vF4HP4EG96mzHCMVcEnneiZDTdaHDidZgNLsPCw2pmz5gmY2JK3Cd96R",
  "key12": "5GChNQZK1Cro4SSY6wvxAZ39mUUezbYrAkakpj994CM5diyZwtfSqWYrFRn6zhD9F6ByftdVwN1NoX9SujwCvmao",
  "key13": "3gcLZfEi2bsF9KSyK2gZYFVgvSxuJkWJeRqoXLSAtTSYHHmwhsPEw4V7HEVKhmxQ7VeDBUMAfgT8dgaohjv3EGZ1",
  "key14": "4YsLirQQbVrvdanVVHf2HHxmACkKRiL4qocYVpQb487zuz9u7zeS87SQooynu4adXEf46odYazgemcoWmJ8d58yH",
  "key15": "4gcafhyTnFvspazZvf1Vy67DfW1mU9NLYeZG5tYKizr6LQ5EGtj7n85NL21QWe7rz1vywSaLjfC62Ezifkw4GJKu",
  "key16": "67o6Dub87psfX4VJnJXv5bnrEkBNFW33vmFMiXLwwUTMH6VejgbwAxZZiYRuewiS5VMwvfTHxeV1Pxf8Fsy5KcYV",
  "key17": "5JgUK6WHNzfbTagkjJPgF7cp8aQeqroeABzPUwP1du7oTXfsAk1RMBs755iNFwMaKStXBEmTKC5HbGf3ALiwvaQX",
  "key18": "4dk8VxT7esWCRvTd9DdiGAAHWQBJ7x1ik6QS3SjcHFLcGMpRES5ZDP48iKtuhCq1joeS6PtxWPAPKznr1Bd5k6bh",
  "key19": "3G7XYtpLzRzxK8DYQndJb7s3z3YWkUW1jVxm2qX5f43aXbRg9XnZumpWUn8qKyKn4zQTtY7TNNP5sWXPD9QrPY8h",
  "key20": "Y9VGYxTDXo82szkeSH9TkcgabKQRc3VgQ9vYjyMSzRmqzSjyxoHSqAAeuHF5bnAgDdBDbD4jKFWUnAv1TdBvZVd",
  "key21": "3n8NrVEkYoC1KxovEjiQ95HQ8Hg6z91VGMSY3wnb7LGrNKgKJPQsXh2CSR1N8pKZrzGsfLs4uBMPda8QxA4ffNZS",
  "key22": "5nBX261qu3sVsPemvnAZtfjHwRqCdj8TeK7vSh2WUvFoyi7XvHJugdsHM5Eyav6Kh3EJ4BBpihxXnVhBZY4to7Hj",
  "key23": "oosRrhDKR8AoxTHENikatXegF14GpznMQRQJWYVsUpVmFquFe4zxQUbHRa6trTuXnmdAKd5E6qQWsYE25z4U1ij",
  "key24": "2tijyyERCSX7oXC4SUo5QZzncTz5w2kYoaooeRpqZ1coKwz4ziBvi4kDe2EvAUGefUEJXxdvZmTEKGughcnFqbDY",
  "key25": "66vqHPE97CQf9RSmeKogzpnpoxkdWbKgjCcBLmR8EPTkjddjxVkaX4Km2sJgYN7H8AhDbZqd3RiDs6onT8iqKT6e",
  "key26": "z4tATViv8nFBUQ3RgVGbDU4LyAj7S5WX7MPjgjQkLW91M3cJmAxrvEzTKj2rJgRHuE78rmGH9SkKSJo8D3Fq335",
  "key27": "4MRGTQJNbSpvwhnsKdzyJwtwoaksWZv8Cqa4mAr6M3ABUuUYSWJKxu8YLDaigGZLx9xvf6Q6wPL2sqkzU7Jsxxkg",
  "key28": "67DmydBwg4XXNbdipYMBSdKUNbZpw4wZE1xJp7A3F6sGw47EjofM424bz1PCZ8QgMvnHX6H72WsXvg9EawNcdpsk",
  "key29": "4KaSVUGRPZwkPW1wfTwHsm73YwPKfWngV6wkkqUjhDZZ9TaN7UajhMquCNkzDns2wqRj8TdbreCp7ryU5GWsMGE5",
  "key30": "4dYQb5aqvk8qbSLBLSMaaeE53v1bii6XyDeGJTFFNEL6J5fpHUk1ysEhkoXHn59jcgAzsRe1vuXxAswfUwqqcHMJ",
  "key31": "3tc5LoQQEosKtMRz6bAaLW5h4S4bft7vGS8FmaSzBnzUg4uuBP6F2RqQ528di3scraeg5im9ASkncVkpi8uTagV7",
  "key32": "3CXDTdPLsnYrovosDwpQTTEJUJhMz3GguuXp4UizpN3ues3kapZUMJ94iRbCtJQHcJtpqnJZ93Hhb7BTbTuKVMYb",
  "key33": "2CqCKvsyQrqJVpV3XWKcLfLaiSkGXfUvyKXBECp8M2PtDn8bgj16iQ8jfEgnPCuggiUiAvgnjRc2vkT5DLj8JVvT",
  "key34": "WMCQCgwbXoiHMWnQsfw2nfJ84cCEuSxUAM49U3Gy549BZ3RHGiwnCZuikdJv3v7yb5GSxy89QfS3v136RYo1jUi"
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
