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
    "128QfZrAQ1gaWGQX6n8uv14NuKf1tfP22mwo4kXN8sFttB5D2bqKxJVm7LVwjxuJ6DRN21HGCXxAv524U4HtmLRv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QMdBGPffUptQ7dZp2dAPGKGyiDtfKY6pM7cDo95cHPef2uZKpvydiXe3GZKDnnU5BrHGS8yB1xX2iUFouLj2x19",
  "key1": "3af2jMkmaKzzjpEZt27CbwvnuSVPA2y1zuyMwisgcNLRyyhHtYTreofLAPgknwyTfRFMRSxjnTnBazSYgrTLH2iB",
  "key2": "4cipFoTD3gWj6VgsFsNgn9q1drNnHfYeC4craA3v3wYNLEEhk64eZV1SQMT8ezJ5VYqKeTRAdiYw6v7K5xkGPnb2",
  "key3": "2AtQxoxtQnAR7k3aCXskogFmqVyaHgkKYcvjjBVNLAosouk36JHdybLGAQKiCoGcDW2vbUWKq9qdRqeoL3Ui9AA6",
  "key4": "R9rbPF1LB41YRhuAhPLHmFcitLAQPd8ShxJ1XDyX3YsEFCAXdoKcMEC5DbkLzHKUVtNRbj3D42fcGAQ5YxrqLbb",
  "key5": "4qXmAeKFRgdVzAkrSTTo1CGFkEUr8yEVDaKwDYUMYkdz4DQUCq9PQA57JFtcEjtsVzvgtUEkXv2spVzPvSw3varZ",
  "key6": "3pd1LBC8r9W3FSpxkzPg2HLpgVUHMpKKHDYj3xDtLQEGdegxTYjLxZhDRDzxEhhXgYhrjKhKCyrU4ztBN5eELjQt",
  "key7": "2HEKJMdiDtrSE8DNUDyuoGZLD7Bvxej4aZc9XzB41YjQFCnYcsecnjYmJwFYYk17Mof1UsVMCkCs8x2gsa8nL87y",
  "key8": "2RXFevsaAhowwB53NZykqqyt1Tne9JS1m7wACKEcJrce3oomY4VSJovNzeX9HGqwJ9n56TvW5MBcrQ5rJ3WkumTX",
  "key9": "3bBdSUtGDq29xZRfjcnuCGaKzwBXw26LwBPESVE3p41KJp1BMxjRP3iZ2TVXRDw5DoprZy5kLfJKkf9Td8MYqKDJ",
  "key10": "35Ynbb658TaMWan9uCF5cFDmrchvehcFUutY3uEWzvK1L4FMCGiWJ19g2Pw9jtDDpgCCWUyZqwGqAjA1E9phrwvk",
  "key11": "4vmRqh2vjSCHCUuDSXCXGdccdrvtBF45UYg2aaNmSAtdNvrxnusAo8tQ5ZXosNDBzvfxLqS8MhSYrJxiGeHyB1jR",
  "key12": "21stRirvTAppTRxj5qJsvZ396mH8y7Qp3HSfAtZ5cnJrWU5BL6MA92UiwjwWjWV9JtysMGBstbMgAScDRLSvistz",
  "key13": "5SDgjWbDjxA8frk3EcVynhHAH3gW3kBa2jEB2uZPoHtb3EME7mbUTCWBAQPYFGzsBQwwcAZpu2m3xTzGWsMvwnrd",
  "key14": "4XBSg3QJsvcorqqUTM681DCk8gv7sb8eGv9dhGU3ry4enkUwgdCsNhAKAAiBsrihGtgFf7xPRv4yvn8Wpwoe3QHL",
  "key15": "J5RQcjRLA3FgDiRmYw2WzMxBv5gmU9Jc694ii9CgQN8ULYBDYfz89xiTYqTrLgWEvZrArR8MR8pehgEpYbdWi3L",
  "key16": "uzp4k9A1fBhxe4D4CBxwJ1Vp2rBbPz5F3LG1Pq4TPauSVRmrAoQkds2rLPyUbZBrQkcDdFU6puhybWpbzePiSK3",
  "key17": "4j6uxriyCvpaM9ueht1X4oeuxKzknbUuEWne45nCAdy6J1usu385RVFP6aFsjmjGcHG2wZHpauYQCiqkHEdsSayg",
  "key18": "22YeeCZA3suk3t8GhiehA8dQE4ZqsASTEgpJX1ooE6GGA2nEMSq5NT4wdB1b2deoAjoRV3PUK9U6hBT25bBU74Vb",
  "key19": "59DoqVpmDSqqxaB512LWCZGKGHLe5iPLQAqZMH9gu3nCpy5ZtpVYsAF7Z9PFtzJ8p9sPicNSZLt1fWGxn71VSyzi",
  "key20": "2ajx9NCbA4L6VC3Ni4wY8GNhA5wG4qDTxECUT6yFtEZuGUDc8WJg2GzKFNz2v6TVFqYq8qNgzUufyq7sNFGhdxC7",
  "key21": "Xit7bBHUu72okdoTLG7WtYyFBws3QANRYbCoWFwhmqAKQEtdjFLYe4pNcSgc1Yb58HmJxpz88aSecSHLHM7pEwD",
  "key22": "2epLzKkv5bvoifgjqC96865e4HRgJDN1enfcAUpCVrwgRjBtSondppHdGAzUZcN8PA5N9gD9h2XMacXF6zZ8CLs9",
  "key23": "5fGHyJMAGxyrEfyfbCBqDuwx6G62VKCpQuGmrWHDtiwGzFKfsWBDhNtfVszDUZN5ydyEzYjkSh4QwuLLwbrLREpH",
  "key24": "5qyLh9DZESqDytfXsvBXEZrX2C5c8r8NraMbSjVtzcVRy8qN7UdaXXXZEktiqg6udzjMTJBVFPNSrRuvxseXtnsc",
  "key25": "46V511CyytMH4cry4G7A3cFoceDAWHf8A7XtGmdfZbiActzhZ7grgLDA3wbnRZdWFhj26qzYgoM6jqGFw1w6jhN8",
  "key26": "3CVbuNqfxkcsBGUpqmdBuKazL1EbogiKwS9c7XaEp1YC9raqLW5fxD8kvrWNQbXsNfkAmDJupwsfQT8XrqmvQHaw",
  "key27": "5VttpMrmJ1atkJHpE7qAdhtW3VxUXuoKVSAhnwGDijX1NcBPi7qh7znaYzoym5JkdnDAJotKNVssTNbEtoa5fdYk",
  "key28": "555hzU8LmtSFVVdZsKTzUWM7fm4wJyBSnXLewEHYNJn3QsJYgCwsL1omuymZfmBBw5HZMZphxVEaZmmQmEHQhkiV",
  "key29": "ubL3bjLZ95pfoRCXhFgZTLVLHXBp1wc3RQ6dp5fL8bfz9Kg8F1DYG9F4kPYxP4izE7V1ErwxZb4j2ca3xLuBXzU",
  "key30": "3dLbpjNoEk8tXzMb5zNgc7ApuCXKrgXQjTpWro9DK3QNHisTxmsqTyeEiHR7uEiAaUgVyoFaQEhKACdcgpJ9yYyo",
  "key31": "3YQXhAHgZtHa1KHY6EjgYeQtEB37VkdzFiwFAWNyt6jYZavV6mAckhPveU2iKeQ9fx2oM7HLcqyG76Bgqp7Wf4gA",
  "key32": "2zBjb9wNZ1VFiHUeFLP9nhL8ro9qByg7Rf99JWFdY6GemU6XDV4JJssb9cQww1MmpBCwdz7b1jyNTkWhaP2iWguq",
  "key33": "3YMc7ZyUKyyyR9errgsQQogF63v5BJ5QFJanm1LsqtwXWWc9C1pNxJ1KfhpxHDXKakwkhRauzVUzKJds2UHKTBXb",
  "key34": "JzfdLpFjVjFZF7ak2tB456RSrptzkjggH4MeyZBZrk1fSc74Ufj7k4C3LGAY9isnEBUmz9DQwT7sXYhnjgFh2D8",
  "key35": "4oCevQQRhdvgticu8bFJZnzbhg2Sq1xQT9RgTbGgKruhWDoFSxpwPawoq6EBLi1RLjHf4uwsxV23ypnSM1uqj9MM",
  "key36": "4V7gG2XGn3o2WVXDih7DTtiVUC5ag5HhTYPJtEwzj6eSJuubEj8nsGaynTwY5QDTzW9Yty9ZVPxG8mwJPjqainjY",
  "key37": "N9acSF9NpRz3WTDRqjotUdPUBT9GU4WnCjSscoyz3tqb85mXp8mbHpDSAHyhQYBWbxwDoxiAUbZreLeLge34ARV",
  "key38": "3WeTTbBAV4TY1Yb7Eyr9tAwZKEmVFqR5HXSJQzuXCp8wt6oRWbHBRPgm7WHWYj2UjQBfLPgmq7qw2qjXVTf53gzB",
  "key39": "34KZvSXqq9d1dUrZWTvgv8XfZZGeSK1qtm7MKH3J5zYF1m6jqHjE8JwVj8QFBqvms92ZbxuBkPidmrXhnaqUzxAU",
  "key40": "NNcAMcA11sRWxomn8iKHpriGZuoauV4F4zAufoCoDwf1mvF1NwgxAZ9kwaNQRMYbg6DttaknDsR1XoN15s1Fi7k",
  "key41": "3detq7D9ux5y9zz6PEZfDmaQPH9ufjdAb1qpDTU9GowxXjsB7AkskUzxeZNDT8GfQnvQF7HkTEEeeLRh9TVT7hK5",
  "key42": "4V2iJ3vuhskDQpUeqd9dUtfhZVNiAwd7zu7MAQn7WEiiPrJ4aZCPRV5QXuLt8ozP3tUx5iaTUTWv5FugodyhW2ER",
  "key43": "3VXj3AJvrZ4MfQJ3doc1SRbPgYd3bSvWaJEeJhKZNt6nQjemvGq7mepN7wEkAuVEW39HmYpsFXY1wejLmEMRDuy1",
  "key44": "5oG2CrrmoSgyRpj1oVFsjRdwUuW3A4HxezZczraMuTWUBspLBdgZdcWR5rJSyE4umveKbm2ixCsJBnLFXfxTT4G2",
  "key45": "zPyEbxDbbDu1AMAnRhTpd6npt9djJgQHqYRxT7ZpZJxUZwAXYTWpUewqRUvxZePZnagRDPccgTpHZkL758TyiFG",
  "key46": "qKhDsm68EZS6XBAsHmbCVaQ9jXT8DvdS9Ao2coC3Df1oXmquB2Md6WaNBRsSrTzAm1DWYAtEjTEeB6apsc1zRFe",
  "key47": "4h6NFm7BMcXJPiUKga3HaFP1wP4EmEf4WTq7WnHqaGQCg6zBjcVLEba7g34jtisS8c9Miv8ETHpmBbhshP3dxYdZ",
  "key48": "TgXnjqZZZ5rG29Tv2LNjp2BWfRqm4BVXLyPzCp1WLtsZU5HbHgz4jzfDTpEo9FzGMpK8SNe8akvLPtEGRWTyPZ9"
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
