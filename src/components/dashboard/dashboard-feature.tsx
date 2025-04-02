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
    "34Va6MBr9CHNt68Dc3e1SWVbK31qPLZp4A6TMitmW7gVjWLF3c4DoVTTGu1NizzozonpxmhofoiRsMngNGHMoQYS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ghu4n7bcj5JAmWtCeqgQookka8i2mhxKhtKAHuodMNsvUgjniuSev4hL9dkSpne71Y4wEmwHdY6AZAGu2qxVLLN",
  "key1": "5LAekvgYMbhkgGcbMnax8nd6up3Z8MG8N51erH1LDXg9bzozk7KTCGjy3udfvHvUxXVMr2vz2fmULqFFTHSghUH5",
  "key2": "SKUcdNdPGsbs2LUZFBidj3hvKWVxTqcgi6i4XyMoYVo8SqzjeYQGyArnjMDBtNeaWeNBsvZU76Bu3wm1dmKCuXJ",
  "key3": "65ApwjGN4DHfMddLEt3w6x2wob1rqJ2yf8TgwRznuS23xfVA9oPTAYeosP9LwNS2mveBbRsu1KDnvBRtM8r7ZXDb",
  "key4": "27goToi5RKGX3EoJq66kNVUwnCVJxh8WtdHHMYTCq2yKDrPzEZ4JLhqBTNbg1MFt6CUBdsGzUiWC7E8tGwaVRzkc",
  "key5": "2Hi42EJfAqoVDkop7z45bDGZkDkj3PZWhFFEs5NGMwUE6CNpw6Asr6g8m9ySQfM5ttMDjvkX8NXXGrsV518cHZ14",
  "key6": "33StMFgV8f9Hvxi9ev7PdWZdSCnh9LekqQtXurmMNP6V6TMFz1KsTmGBNpNiysvrH7f4UWcrJgs4wZVqG7ph9jkm",
  "key7": "2MTp7qWBQeRAqCKKxTDSxy5gdcLiQmr9AVBz9iWChS2czgkD8SkHV8FNFn3PZVs4pQc3h61RJhSmikqhAKnh8xKn",
  "key8": "3uAZinwCLfJtFZfn8Uqoe9C6hhyH3B9bSaDSPpn5zEUfLSqm6cVR2VQZA7brk1wNSa1asgXWtZnBkkmjuMeMnbBK",
  "key9": "2phh86MXyTQemWhDJW7HTzf5ZdV2tNkMkhZCZVzkCZHxwNTtRnjSgkyQciLwSRnYFnrjzWaU2hCAAu5KqwXBWVGp",
  "key10": "5SNRHqYtDgdtgcakjxPtocFNVcs8f6HCF8wawBji9uKCKNcy39o1YNXwxHp5aHrowMomiaWKRS8rrLA7Dnuzwo3F",
  "key11": "4FZ3wWVnURZ2djBTu2tgW3rhJDFKuMbC3hLBsYMErJKhWTkzbxPudANRqjFxTsRH9LGUcY2Nqo23g6WDr928tkXQ",
  "key12": "4GXpYsx2VbdoFHMYj7r2Yvi85eeFQSZxdapVp8ofSEzD5vPtuJZpQ9gvLpGc2tQ4szApJq1HzkebgsUvppE1vNpi",
  "key13": "2tiUsFKPYCtCSPLK7Si3Hyga3R3npzqstd74aW3WkX5CobPHnfLfSssxoxizomi2job5Cn7qsxFiMgLygnPPxj7u",
  "key14": "3nmWdtARyKAHbmcS9NneAqr4BRxtvPGjuVsMDo7gGj7uxWjWcgzpJn32xpcen3P6TSrTNYwsWkBfNcTfTfGTyCrf",
  "key15": "3Myfik31kBM1T1kYPYJB5pJp6etJNnqc76q4myFW9bHjpSABdUrZPqiyKzRKDiYyCb5zabmJoenGwHuK5ccfCNhD",
  "key16": "5MCmE6UBREVkXYJ9GZ8Aq1WzuMos2eYn5ug917VJH1zjqneZkJY5PmW8FkFgHvx1qD4tVwVHmDRW5qZBHe2xUTNn",
  "key17": "3mvLgBgxQvD2jE9AaXvcfSAdD2gxEoCXF2tFqNTHyagRXo4odHPCYKbChVzaumCHeJi75iHfVUcWVt7B9fmJXhKx",
  "key18": "foqBH1ZJGtEFhVGCma8FvkrVPRb5XwVbQyCa8veb4VCjbFBmWDauvU2AH7E1EDpfRHcVkJTkQR2DaAaiiNbnjK8",
  "key19": "DSGt4VdehsKcdjktJaXKe3o9oszYmGAkiu7LVL4Te5JmUAC6YAXFmDfsULs6r3gR7HGMaANKLW72HGyku9LnfwG",
  "key20": "3Xo3QUE3wysfjTt481iG6ZabobkT6qg9mzdtkFXQBbrP268L76XSZmY8afyLRe4mjYEmfNsSML4VyhQ7mwgjs2ub",
  "key21": "KJVoRU1QibLkHCBW1ycFUCSYRHmfJMmJMXeLaC98g3paKKQ4PgTo5zaqakhp93i1pBwEuVpDeAjjW55M3Q4e6Lo",
  "key22": "5DeRYTpyVHcLsdrhfTJDqzm8mYJ6iTmtVBVV69q3eqqTJf76EZjqUk9aKiRnYo8PsYEMb9MLKxvKx2xhUPZ7puM9",
  "key23": "5CmN6yEQkMfpmuakP2Kzcz3ZziKgRcm6hv3gZaSh5USkjxsbk8AfNxPS1vb2kt8XJ5UTaKCYfPGx146VXdgTJp6Z",
  "key24": "4S1BtQZVJUU1VNXvEWNmq6xeEdRuv2FLGiuUTX7Vvawpo3KpbpccB3AgATACAkA4fPH5TD64CHdYGkZoGJdmyuqo",
  "key25": "tU4qHebrcoy3oaPGb94L4suja5KvrkYcNA13B5ykRFE7dcpzeWj6tSg3ciVz3eqqtpeNYvz7zCNGrhtUcGKYVWp",
  "key26": "4HUbkqBjFEwasApYqVj8uts9e4YhfNYnVGJR82MY5Kv63d9S6SVD5CAZ28xiRN6PgsgVM7ArD27KAdWV6H6jGUxP",
  "key27": "2KSbZXSTnAQPsDrrFafZTVv5qe4WWwqeEH4C2HDb1T3WjmX3pKMLeA3mGop2V3QtV1BrkTbeHqGVGAhxn23V41HN",
  "key28": "5aYSeTpJSuohCrRuMMk9Kr4N9mZwwdgjYaFZ9babPX2E1qBFu6L9fUnLdpon75Z2AXDfftFKABMryuoGTQgM7fZz",
  "key29": "4qDsbBZjLhyjFLFyEMAhnU784Y7z4RBFqg7J9R1QatLD1fAyUTTy83ECuZj1MaChDSpc2TfrraWUTcsp6GPKtPtg",
  "key30": "o54impBQUf8ML9DP3sdZBn7RpJDDQcbeTeCQLyjsQ2ABEc7rqfmRxkdWJbykRpE3LhgvR2UEYLFUFXQAUmXLqhZ",
  "key31": "3XJcjDgMKm7D9qrG9rBUAuckkMHQdpQsvNovZHzWYbUaz2WwaTj18Yn7FwFoiB5DJhT9UcdPCQtuZYZ1sCgScubN",
  "key32": "27YuKAEXzuEVc4g68unw8cGvJSt4FumUBzjLXLyDTCPjLnQjWM1iJ4EqwwtvHPn5WRZRReT6AmUSm7HAP8vrC3iY",
  "key33": "628SBdnUaetzAyjPFBUH5TywLSxgBLfHrvptBHLhBt3pqzMNXnYgCcfFzgFoKhkQ7wUuoE3PRQzopUxMhJ2xBXti",
  "key34": "3SSKPqcV2Zxe7mo47me5i1YtMFLV5fBhEnVbn73vah71ASLYfe5ihNFU7Sw6XkuBdU9xzEPjpfmXK4iQimMSJXsU",
  "key35": "3B5yvoBKs9MXxSeE4tzVGKcf3LpSte7sgfVD9ozWjYw4pLphoGZVZAh1CmiLzZNBDb2gGVXXUMd7czbryERj5c9v",
  "key36": "4UqscK9kjJ5FLQrRGSUHd7jfXX8oXiX9DieWnUueEAjUd7SHnc13DnVdnGRk4Cu5ipvEUwdMPWnV7s1X4Rn323oq",
  "key37": "4YGAM4SZF5haPZFLgXvwmwQfecnehQgmVxkGBVXDmBqyJCJ32FQhCqmvyEoDXwnRhqiYKLLJd9f9Md8eREdwQXYa",
  "key38": "5x521SU9QXZMT96uwBzBnzC8a188mzqJ1T3fuX8XLK2VNHQAxBWgGuKMfa61D39YggtwCyt6JaQeGRA1UwZsvEtQ",
  "key39": "BCfGr5sK4qGdkakEFwB1N46bgreSfbPyjnDLKbe1xakTUhiSgsus7iTMeVq5cG17SUPmYqRSnjq2NxUvjzpmrax",
  "key40": "3zsfuhD3m7eocpgE1cC5UxoACxeaVuFD97RChf78T1ekBB6F3vopo26ippdwTJXhih1dWTsRtsnDANZTgdRMjsQg",
  "key41": "2xqw8SbLWPxu15vPkCqxSpkNAZxmwPPET1KxnjyYe7cW3kTXsQstQvFkbrWx4mtE13h643VmvmxmrDXa2zLcXzMK",
  "key42": "2QfSNJXSZs9emmo5hwHYeA6FY1dvbtYN1wTwpC2KL35nV9PEuwpa1irRAkFMjpCcCtkgD23kGP8zCSTyVAxMzQ36",
  "key43": "3UugcyjNZxRRq7Ce8S3w3DU4HUGeBWyFNTVXZgvtKFYaTynrEDPWCwaFh6yS3PXEnvDGksHz19pkHAJNvmmMptQi",
  "key44": "35eh7AW5hwcn835f3UCz8qKjiSQWuxSZDGviZytzY1CaAydrMMXBnyeugmXVyZtx6AsXyANJPa9NnSfe2FiZmV1p",
  "key45": "52NVA63HofnD3WBQYRG5uphcLLw3njfLyTtGUnrQSzjkaEJFJmWd5efiuhPxMKePLrqNzyYwqGxotVeDbwNViUvJ",
  "key46": "3mp2HYB2HAwG17r8hzVvcTzYHyyPDYHx5yRuMPz9CwbDJJ7GefhMQhnCtFkT1wGeKWyMUpymBfC293M59R5idhJj"
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
