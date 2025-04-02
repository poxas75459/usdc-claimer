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
    "3YwAzdyXrdBgSjm77q1Chqb3sNbcvAZ3KDo572ZbwxKZopZFFvgEfLWEWN95nGJ8QDJtpwSeu6zSFuaFgUjkdzwj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FQnqREmp11Cen32ffTiAiWDsACmsZtw3JLg2gt3FecfArovfLnagcdh2CJBZyHc4sz4J7qffRPdZB8gfcgrAerw",
  "key1": "2rSd3FTsG99syaALuLsA6GEd59rtnbpZ5WS6LQTqiCdDEc9ZXZxRWFkbWE2mHA6QzUTr18osDgMuSyyFTusst5Sn",
  "key2": "5GwT51rwKmQgcjVtTqctDR6x8pmZF9yNt1bMUSiZMSqA8Gt1MV9YVQGHjD1ZZ4GVqfLxDbzgAd7n4n3HKmpMvFwN",
  "key3": "KNxcvZ8PjJvNtRtsD4vewRbVUCnbzziCJqUr2zPS3m9wGHuZkjNahAGVRjhgTVT44vc46TSjpWWibpA5UDiJ1vx",
  "key4": "5BvzKEegP98DnLJ783ZFzndTy9MD9tyDT8vB84YNEBKjfUAkZtZZ2grU2aFLce2rDWvKajRV7zeQ2Diacez7Noj9",
  "key5": "WYQwoUuyeJGtMJtrXPkAAW2XTBbefq6K8MwYuD2nrmMbpcGfZDZ2ydabsLMomy21uqozWczv5K78vFVVGBeHUJT",
  "key6": "zHNTohmHoSeD9N8tUWQmjb7vxko68ubBTd2kEPJAbPjMqbu4anqvvyQoFS4idJ7tKXnpGCg85m1RsqWkg5i334k",
  "key7": "4wtTtV6Qm65SJdtUzz1yESLSzJENR1A6fy63w3EF9buuLraMRv8rrHhXXUX8FgpzzJMSfx6uNtArsRrV68b13wn9",
  "key8": "31AsqFxEBx4gZ1CPtBiDb6H7nnDbpWSKbUVtGq7PEwWoQpFmJvtcsAUBuB3aziRwU8VwZSaPhy1qiBG1n8uuQynp",
  "key9": "3UQBMadickeqy7mYep6rYt1NEmH1bqZ1cFanUMaYc9mk5FLoC5UsUmfXDm23oARCK92FXmTTohsDBVYjWDH4RzSB",
  "key10": "5hd9xRX4i4TYNEtNB9jpGWJMHMpQUaETjfgRVV5zxXg6ivtY7Wzak6VvwhCjhcABz1nCCEfobPQJ3GD9cGAXFxB3",
  "key11": "HcdwRxmaMvj7Q62mgfgo9asUWxHCjcZRc7QP78AsRfyssxRTALcXdmM93y3GxaUfNgK83WGuCXb6McqrFrkajBW",
  "key12": "26Z6XztmP3SoVGqY9r3z3TbG5ZTCNJPyx5YeQG33yXWT3wVrS14i8CJY5rzBSSSUTGtGV4D1PBCvEVcKDDDpvk8p",
  "key13": "WbxpgBYXFSmFRVjYDjbzRE8LZ1vraZpNM4PFb9asfeNJ3UcdyZWDXmpx6zfcKcgkmwWDZLFCPRBwpHs7KVermJM",
  "key14": "3hPzPh7q97n9p4JCzL122o5gYMqFaF6KY779YW2CrwiE5KdceRAH3XZdb2tQjVrRhKUxgZQHWobpx5Kti2KrKcdS",
  "key15": "4cDb7AfvC1cQncKpJ2kwozf6JH7MEVSMCgouBLioXQCmJjG22CXGHVWWoL71XZ3HjcPzxMbhHAiimYWGfivqV1qF",
  "key16": "5VKy8UP2bpNbZy7q1VdY7MB13SyL6da8L1MJ4P8BviaqrzDhrrNx8nk94oWrHcTPj6uhJHxx25uixbNtuXtFW1xh",
  "key17": "WS6Jdi5e7S1FPrWR5QH1fW2b9QYmEAV8ELnbo5TMNEkDwuKyJLroiVsTNKAkv8WbJ9MfzC2yK2Q5971xQ9DjokB",
  "key18": "5Bm8SfyrnCNc5nhWVVtgfEdVxt92JDe1BrTTjbwEtuMq3D7h65Siin37Yt4Dkd6mh7meFkHF1ifBE9qW3uYur8cu",
  "key19": "2zmAh6vp4yrWrPSPYybhw7DtJr7fah4nnmHDBCvnUHwnKvsw5qFm3ojwsM9ojoXiHEtUSWX9D2HTmU87aRC8nSz7",
  "key20": "4W4NXcQApEY2tfMfz9SWy5pMjiiD1SuY4KdoQukoA2vEH7viDrAkU8UnHivDtgj9cMSU9Bp1QnEb4JSuWLcP111N",
  "key21": "ZnH5Dv3YdbPFunfjuTopAEgq3Ag1bW7aj5xkLkeATTduNqxg9Knmu7kz3NrPeWt8EJVjPkswFNc7jCfkcrKtQky",
  "key22": "1bbS3zR4bzFJtq18BASEvY1i4UBQEJhobNE469aabA5wXWjR26YqNmvk6jSJM4zbRqwb3R5tZPaWY35nFELG5nM",
  "key23": "3F5ZSP6JxMw4YNGznbBGEH9v1Aod7hBijQi286u1ijZnUjwdo4K7gCNELFKXrxvYBVX8AKVHXySuWtqJeibhqBYt",
  "key24": "2kwrXsNEGCQBB2ky3dZQAzDwL9eocYCZxb4SjUF4wx1c3CFAY4vNkjYEUtfy1iEtqPMMuciWdHNpVYJcCTnLne2E",
  "key25": "dA9XNcUaA8pr7sxW1ySD4P7Do3Q3wceLR9TqfG6XrMm8P7HuZWD6R7gzDcGezgtvnfWPZwX73EtosDoLnDH2v51",
  "key26": "37Np8VnNxcLumCpD9dQF4XGSphm2us5ZfmbKBuJfpxp4PpRirrUzVBxcw9T4tLq6EVrKrKhKaThKRYFPZLuf6xyy",
  "key27": "3oejC5r58zooEZJLANT5RfrGUpSnJgS7LeBehvjhGVgCx23nT4fe4G1v8v5vdGt8bqDmMo85y63VwbfcvUd5F1de",
  "key28": "51Et3bXUzQHb1xvcZ3qE13ShntMbe1Jwmsui5fC62fEwMAnqNedmAWtEHiAUcaHSMk8oVuB75LAzkNGzjW5qd2ui",
  "key29": "2iWkkFTLeHvQcXoeHxoxVXJSSfUbqhLZMV1oeFnZrfp1fdPLC26NnoTaA5N3u83zib2o3m6aZzSsZ3ZZKPbiFNQi",
  "key30": "A4Z7skHfNpqk7ZpzETpPK46Nb9J9hYNGTXzsVcxLrRrVnz75dMb6bWZoZv4wef8tBqfhsX88YwRZah2gEqJwXKD",
  "key31": "56Vnx1tfpFfD7Qt2cz5DTRxr5r4eF8LBPHbriCr78jJCWscn7TtB2vUTHP79VxJAd5ZXYUbfoiqhkSdo27dddUTx",
  "key32": "t2aLn9oFCkTGMP246nwVqucjLiQqFSgbhA53o5umc56kZbQnZjSNGhmtVxGjWJdoeu5kkvCGjWWjQqsif22FYGL",
  "key33": "3y76JygJMWNXSEtYggex7dkmf9p6aeQ1c7QyHrwEp5zCiFssUc9R28aRbTYSSUuqYccP1pv1EWdMhdj58iZThhfy",
  "key34": "25MVFmW5LDugW4NH39FEdSqcWsATuFmgVCM9uK5BTkPHX9BcjR9SsvnqkMQFHDGUY8ekXeEnVe79mQ1p6UrM6QGa",
  "key35": "2RQsHUXr2MuyPoiKsPJaZkHoZnPgFhQc4GeCAsXqxEn1CTGmc1G3ojLSRqBknEQpKGJJ4xvEWkFyvrj6S2xxPAyN",
  "key36": "5obtoAydNXKK5SUYvzmKhP4v4Ja8FJ2niP71kfcv9poYPTXX6RHkUkBsEU1WKYEWqbf4fYE2TgHjrvPJiu4yVb3g",
  "key37": "5VVhRWpMS1FjVSqM2AwJcFYNmzst2CWwaL3CcJF3dCgYTCcMDNuj27kaCvYYaC1HphU7M79E9Ly3AnaG5BAQvxNg",
  "key38": "4FcE4e2BPZrfb1241LHFEhPLymE9c2mbfB1wPSDGcZ3ECyoEYHB5Ro9Y7YLFFapzABDCZwhhxJzzQ36jCH67G3AS",
  "key39": "5enZTLEU3y6gPsW4uUkTZrQ6cDizNUSeRdNkDGBrZURHXwtp9eQHfKRPEdYQCKJpXrs7FK8pWaFpKMDvd2F8Ls7m",
  "key40": "3CzpcdLWtJaLgeR1XMUhuiboFrEZSSYaA9XD3TowpBW1Us5Qu87t72hGyY46pugJ2rhiSAx5qAbfMq7wkN4W2bhr",
  "key41": "5SoxR8n8MNB7MuMNiDeS3KAWNcoPjJSDFwyf4XB49GMAPkkscrGUUfMRyDtXCGBSuwzeb43zR951to1tBKxyTttg",
  "key42": "3uR97EVL5ydztF9jkJ8A1bY4PGtH4t2dHAbjfVSScKyi2DGTit1D1pBn9TdMvkZ94CT7Nffnh1uEUYEvjFV7mrcK",
  "key43": "5R8zsZiHbcs7xXnuzVw9nzSTufoF1mTLhxmsxQ5to72UBasVGTc7v8UX8vdo7dZUDX4oD3Y3jTKJ3mt9gAqC1Jyo",
  "key44": "5NgE1nEjdaVVxkoAo9ix1wR71EtxPwQe1MCypnxH86ptr1Gb1nbPbHaxs5Kvu2V5SUb1rKMMFzGcSGSRpw1LmpXB",
  "key45": "4rBTWjafce8STGo5oobqofhVp1Rqc1kUFAmk3R6cneSeA6sTtawwwYW81SfhMecmDkh7couy3JLaBP6f3jaWF2Yx",
  "key46": "9BSo7fKoXBWUj868XnSFHwsqaXCDPtKzmCqyCPbmetv8uAorZxXeiSxGRi4ZVL9GkQ95qLppu6jPC2hxY3AQC1S",
  "key47": "5q6VThZe24Ag6SAA1Zrm1smyoXEhEGyUw14XhCPR4QA9wMwqUnxqLfJxUTztzryPMSwQceRtwhB52757pUy9pCMF",
  "key48": "5hChDKNUD3D2kx9hQid16CtpXdSGHe34r8sAE9xQntxRZWvf32gukqKm4CPo3w5MWu4gTxrvVcsdSGnEmWJYGpvu"
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
