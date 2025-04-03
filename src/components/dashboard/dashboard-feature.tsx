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
    "5xkC7jWK2wo9zzpy5pMpeJrtvT2YF6Ejc2Kx9k4nyF3ehuDXFpfPmT2HuxZnjQYxGYrEXqzxVwWJkYe8bP8KLCKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YVLyEZhgJzjCMc8rUJn83xYBAeW75NaqvdfMVDvJudAubYLUSJ3v8QxidMpUDh4upH37ztj8qCBJHGW5ZrsLBor",
  "key1": "3jXpFob79AzUPAegL3BCvM8zSggZ4Xntx7mE7Cdf3eoWhBL2A3RsHwUJTfP2DUft4QQfDhDXNsHdWMoiLCjSv4Yu",
  "key2": "3oEaXLXehPAJUDLE6Mm1nrTvA4P2qGWjXjAd5QkpCmnTNd3QSj6ABfq5N6Ec6QHFfTonrGf9ytx8vQDtAL2rfZJ8",
  "key3": "4VMXAh1egdJQf5kcjFvtT6QrQGneu7ZzSYhEpVxJrf1rC5ukpAEBArPYhNcMyHJjMiSUdjhGqdY94Q87gk1YKBjK",
  "key4": "9Pc3bJpKA9wD2yRYMD9KRZav6JBJ3KBYMs1Cyv5UKsRWAiKduy68r3iM6Y41573EzyACCiKpy1NFzX2284TsQ4m",
  "key5": "4jMaWzPVADCvRceNWs3hDycbzfW4EGagEAYCvtQ1CRPz3yNJMLyfYAYu6YePrtc6VGzbbnc3JLtktKo9Pa2TsJPL",
  "key6": "5M1FCbe4gN5EytXCjePJ2ntDXaXgA6CLFPt6TRaBGdXSNrqGvrWhJ3o9CRrRpipMYmEoYzHR5fFdzaTaMBgBY8CH",
  "key7": "cEhCp4aipYh359DWrSbQhfJevhnBcwRwdsbC15VMvwGBvVXZu8BJok8CYg2k1dn4Et6UnhMSNuqHPZ2RWQX5Hxj",
  "key8": "32Mxmziz1Bu5XAomjRQh62ryRQEnMuNGhU8sWWqi3HpnLSGNGSj2VUwCWcfxUoCe1qeCGk7oAamptNuoF8MSqarh",
  "key9": "2jwjefFwKdtE3gpS23hYbekmAbzueUi3GYpLZ5ntJYCXTKzWRGJyyZHF3DTqezJMtP8bbuxFyFqQz7RM8uyR72Tr",
  "key10": "5Fmag1t1vdSb7GifM5uET4YPQdvRQhyzsX6evExpRaPKaJKvNbPvz4DH4XWU9KjjPMm64LyVzxedTFWWMLxM2tzi",
  "key11": "5CLMWoVmfcX1vQedKE5599eLkrKezRF3fvcNcU7ppreD9mFpujQ5P4WPuSm2djMixtU74UjFjkdN9fdcRZgNzhJx",
  "key12": "3iF544PPSsrDokQidP4SdfJLjNq11ZSgBZSmP2aRRby8FV2G8xENPXYADeu44WUd1wNKHUP7zxGYH5UK4gZdujkR",
  "key13": "5fMMEeQkfh52Uj3nnW6TaHUUKRM9iAiTD2jHdsjoENRyDi1VT9Ui5V4ZroGgPsh1vzD9KWdSDMeyWfMx4PaH149z",
  "key14": "4HpAARw3J3GsBLyopEXJYMxZZqxvBbQyb3Z7vGidD2emcaa6EdkefKcwMnMDiTAnKtH3SW4FYqLRSwexXQyp77EJ",
  "key15": "3DBxhvCcfXG6yWNGcjwtiTRUWam6LmKRNCUesq4HEek8oDgE75qy6mWr3cJjG4Q46iGjt5rnJPMGnxgbSjVw4UDt",
  "key16": "2gMFnVUrgeTeErC3pCfDmM7fGP1k1q6S2mnTAKNTtq5vCoUaWLmZxC614tZQVkTVTaTpvmNhqGRQk2pFCbvo4Xm4",
  "key17": "4mnuJmtXWSChBEnCTSycWigemLusU8DfhV5jaWRQBD2Ggu1rK9gbntcsahksinowKegtYQCxNWJ4vQ4JHaN6rcor",
  "key18": "5nxi9pdKUrreAiXUVQ5knj7KzWi16BythuWaryoDKeFGJvitetDe7bESJLz2sywru4kY2FXh8GRNXFPbKZvJeqNf",
  "key19": "5T5YkJDeiva2m56shtw2BSAeNSN4MsGahBRU3kt2VUnyVMTgupPjzAEinPAP9PHznwFie9Z6dt2inac48QCAYH2m",
  "key20": "2qo2iTBhp1Sd7s9b1LQ4QVr6z7kEb7F56izTeLkjoH6R7BoiRhzuw8QjR4PmjLaL8dsknQpmjUsHTJhy97WFiUvv",
  "key21": "kkKNWgCKoLsmurrjUckyk9vrHqBEvgcDAMq5i63QSUYwWLFdJkTfEPsphG6ebQmifE5X9YanNyke3jVinoT48dR",
  "key22": "5TW8181PGLBjQaJr41JKf4Ld9oTvcbyFpjN99Vt5GgaqVdzNqVGCxUGWXNcYnoZ3Z13SHMAW6ySmgG1A3TwQdzrr",
  "key23": "5xner83BfDxCGtjtToZsDa2fMhKiKEoTxwavjtckEjUKQoeTwNVoJnYJhBWD1XCpbwR4BwH6DrzE7omh4Qg8hY3x",
  "key24": "4BF8TK658iQsCfLpGneEeJd8S74xE9duwt9fy84mgsXsT9TA6qNp1ht1WvMTmvJyq63VgBmcu3Xt3KT2QUj4gavi",
  "key25": "3ZFgxuZ6WYSxx4BRM87ktQsmRweEMySZakTEfehwAq7JAqDAWZRG33Yo1HgEgNDHnsVrb9MpoAFYjnfpxhRNT3hg",
  "key26": "4RDQ77CZYBvv36PGj9EEaNiW2vYxoyNST6cpnHzTV5bQraz5GeyQDVxFuHWSvj7k5BatRvUZgVXnBwsRbvv8f6nR",
  "key27": "zsRCa9FE9WyA18QDmxUJUux8mPjWiJrtENm4CRQq6r1YCpby7iv1XpibHbXThxvJbJzhPmA5WMem7ubWjNAeMPQ",
  "key28": "2CghRhzPho7peVMTq4JGNZaASGLnB8G514tYS27DeXAtWVszeApJbAB1a1nZ1R72EqADuSfa6ZcQ6gTKtkDTFscc",
  "key29": "5EffAhsnPaR7baz5iYBxDVN4svKMpq8v1vzRiEprRXMoRyzPhL4fTNLfexqJuahkkrZPsSfqsHnXHfC5TcGu4k6y",
  "key30": "616Nu3vTjgsB3QbeJqwLZHEL4G18scenDH1bD7wk1ra4uAceopDEAGEcpEth3JR74PKiVVEhPqoko5s6TM1Jvhgn",
  "key31": "5mqxK8LRRg7kpTA5gkbWA8udPZwHD6A5aJ8VgafYuP3jFknT5FhV1WPGHkkHqDD82sFEKh2ZzSzgH87xV5Z2nnB3",
  "key32": "3C3AggNsyp94uvLSa8U1puuP8WoWPc6nz852fhXUxYuQrgqJESj1cwqtihVC6ZkcL48PbyZboSE7etH5x6iMKfcj",
  "key33": "eyq4ZrSovPP3jPEyis15MFwy4EJnzUFJGVY7z4458BabFGuy5u3hgG6NUpA2w9eh5r7iRQmqpPFuBST5gsAePry",
  "key34": "4CrQpvEqVviwMpariqroT5uxm3rrJzgi2QxD2oAYtX9PPZkboRGSTQqz746C5BWJ3BK3HKTrn8tzEM72dNYTL86d"
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
