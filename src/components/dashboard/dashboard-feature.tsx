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
    "4gV94EwA6ubKkjq3Q5z9xyAA295KvTjG97vTzZ1oqeyGw2ztr9f7cVvXjLbXyqUugvZTPUxRscf7PFs1C6Bd59Yv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FvNQcMotzjKgFcaJWVCy1jUC4AbS3z76ghrqfV5bLQQ46eqjygYXvzDBdt8ngR3a3wSjwD6Te23wpPC1McRnsHs",
  "key1": "3v43Ez9M6pbsLBASEHJ3hF594hyEm7NpYCK6sasWkJBd7uCaUuEkpNtVRsC188kcTYVscRc1gVtTfyHvBBsmHi9",
  "key2": "55tRN2aNjasTFWqaArpGis5UJ9KdXrbk8btvHcbYabFaDwWaWymUXHPfc9nbBp8VZouEeYC4UQRMSakA3x41Ebfi",
  "key3": "2jqHmR4J3WcALRCNPuJqnSmBsA3HrLjJi8ommfw5sakwiDe8LmQcYbKcNBus1HV5tzxxp2SZiGqZzzf5aMHs6AvW",
  "key4": "4opw6Sr7SxmSrkFje1ewse9Xc5TpLeCHSxHqSg6QoefmgorsrY8MHa9dKTpzxLizYTaUbkr9tNMu1oRUy77wsBL7",
  "key5": "5T4qtj8B6PYFqeYdF5Z2GtjUS44bmePfjFfCJBZphZKq26YJUDmDXSH5W12dQ73GREst7TDmQ3pMmXozq3mAURQW",
  "key6": "zBz7RLbCESBnMoA9fWiFCwqSchngcNN5jnBBcmc3Rfp5voWxWaduMEjYyK7qziwh3TeJybRmGJc9weJYyxXxp6X",
  "key7": "5G5BqNpj2P3pWUHiFDy5xPCn1SYRPU37Ag3e6AkLf55rUhATKtEjJVZ5ujnX8WEZ1NegYUHPYLusLc7xjmHW4och",
  "key8": "5Di8FQebMZrGB148tGeZPFBakpEpRXmoGXLapLKSREvHgSYQs6tfJg1ahnqVQc524WyaEzKzFKa4S3kEPwXWYxLu",
  "key9": "4qYtM4KfwxSY2kPnCJvFfMnwr5UZfQR2fHUzs8B4nZ88mWBvPEzeizZxuYv9k9iiyMEdZcAeohoW7HeEFnpQfZdN",
  "key10": "3BtsTAFr3SGEGsfkpLkfnUb6wjYcovhq3toAgMfaB377s929nHhYEgazqQ27aaY48CrEKU5evAQWbACQRgD6GPXd",
  "key11": "5UehaiBgR6XUpCaTBoFMMLtj35DwKTeFaPrzRH97oqw4u7Sdtqd7LGDZMzi73fDZ7aabR3KE27Tz62hax7mWovff",
  "key12": "3rESi1nk6kGueXAxURaLeKe7etWQK6kzEkKLtstb4NBaCNDrF2kSgvM4wN3ZgRvq4eqt3qE6LBYYXNSUStg1AbSH",
  "key13": "2j49qys2R2AMAsAakyNkCzDPTQxAtT6v7i4U9HjipB32MPTH1FBEso3gs9oQbkhKYE7YtUe8yfdn47qqphTiqEoc",
  "key14": "UZ6FTPU9ofHsauo8pscmvetKTGgWvQy7phAhToxfCFkj8H7JvwYsWean2D59yM8Q3aa1KjBKFgoW1yKvknWCXd3",
  "key15": "4TwcE2DweKfg6LUAmTxfqHpDKhutQVPeA69iSoptqmbxafoWdrhdPCXmHYBij2i9veSg1L9c83xoxxLpY8Y4mREr",
  "key16": "3Thuwpokkihvk7Y6u124mJ4FaWvhtBpjj8S5anmPB7N8SLaPULvj5nqZeMYYMvuQ9vBDfbst4p8oDiYfvhTZwR91",
  "key17": "48LobinTtnNMV5SpMaS8TUbiRou1RLn7hFDmtzEYT7MXsoHckCyBsBV5BvTQJxKUgTC83YRmuE3zecFqGCe38Q2N",
  "key18": "4UVYzDGLdJz8MQcrpXSqbsoepu3taX9LEN9Nx6sUm1nzB7TwoB3xGC64ieJtHwQqpEx6pgxewzxYEhT4PFmRGxDK",
  "key19": "3C4KS2uhUkncsAhnEai7vVQy3rhYUMKXtFZV2MZ8r5djgQW82EAZ3jRvgxgKmEnRNtokdwTG9BD4AXQxuWtWRLXN",
  "key20": "5Re1NJaVC3VkEhN3yifp9X9BJoEo4YSyQAdnYhiJAgi7cKu9uN5TYTf92s1eXmKaNFmgxagBNut6GdvZfxT8DXNK",
  "key21": "4xUSp1nyriUiNmyDHvuS2haWxASUi37AN1gaS6e4Ubbzs7YXSAGJRrYbtyova9qzPuJDQfta4MrWD1BWGiVUvRBj",
  "key22": "2HDGFpzDsRdZnCR8KUPyNrhXsuKY55FVBdQf5h4NfSnnwDt91Mv8874nCFNHabWEQEW71rBWFdBykpoDW7tvPiNk",
  "key23": "4DHE2Cee695GSQ1eQUAGLDz37dJBWdBneumZ7RiiyAbtv1topQ65ccALCVCQb1RKDUZ65ZCFPj2jEsKv2DsppGX3",
  "key24": "4Nwtb8WZqDYazsf7Ji3hoMxH92YLTU8PZzvCMSPSyyHn3NNyr1bn5XrY7DjoUpbgUCJ6CdvaB4sKri1C7g5AvNHD",
  "key25": "5Jc7F4BrhyHZ9FygcG8eEQ75f2vHWsma1fofDaFbaaegYFqmwLH4nRygedd9oiaHTsGd6gcSUeWAjGtJdtJpndrh",
  "key26": "3Xb63akuLFwLAEhnwHAaNDXSz3sAHWz3VdHdBUtcQJZJ7q5yjGC9MjQvZQqvHw9wdXL9Ta19fs9tWabHdLBVvQ8D",
  "key27": "5iQRGFby1cnHt8MMxcg4EvZdXRacFQgBXB5zneHwydg9mqfu6GyWHsqfVxaVo7wn4hf3TvzjpH9jrct7AWaARVzZ",
  "key28": "4aeJ2m3o81CYNz2gR6b9YALFcMZZLrqr5H644zUmjBKuvNNBagam1MmkyjxEJ6osGq6trW74LbUXqvWiAydUF9DH",
  "key29": "63T2kL72SuzT5URbZHdtv5Ukkm2UtSchpLtE3GF4ghADDMGSg5Vh5Vn1bJEPtyVaccSsnn7mwn4hRJgSwATp4D7x",
  "key30": "K2XsDxfp6GiTdvcadJtbeKjHTrJU1ZAntHYA2nFcFAxhgVjiVAXCVegpRiAE8HYK31N5Jc9oBhCTtLt5JeDNrF3",
  "key31": "4tgDEgPXfta98w3hxiVfRvQPts7peunMDyYwgd9WdPgzj7sJb6dRQrou4JX99m88nQHkPgq1BYSD9Rkx9zzufXUL",
  "key32": "4Sw366LH1BXYYkeNdeKmhcZ14BynGdkpnXVoh8RwE7rGRSk9tVXf9KiBFPiGounSHRCv2n7hoaiiakmEUc9g6B1e",
  "key33": "KwZaH3b9eeBN9Dh2wspmYPnH5UuwrAWCjvqvp9xJyeqDMF9vxgB7u6SkBYTCDkTiBCGMy8fQaGR4k1voTBmumSN",
  "key34": "5dVeLjCakxRYHjuo12n1Txeyd32fYyR2PcD3mGota96fB9np4ven8rRsNFM8qceoyRjB7EuhHbQWd2bAgG3x8SsN",
  "key35": "2j5m3oKDfa4hjg8WBwkiMw42fmd4JQCTihDHYqDZMYm2CiqoTeY8e8A8Rm2wg4ymychmrq72qHqmiFGPwZzPejot",
  "key36": "4wapWL6bRZbD1XxywZDLEKYVgLw1p6ktbkcpXomTNza3KcqxGRqCnRKCdkyhiDVRTigtV76etTz9n5sS8vcvhwzJ",
  "key37": "kSuoQ2Ua92yF4jtuCiUU9Y2paYBQA12disuUZsy2mWmcMkG5eqt6yyHznxru6mXLKWAZvheQ47xkHdreyRXo8JU",
  "key38": "Ez2jUkYEhUdrQFdpzBRQvuztGTLqTpdBaZXujqREtEYQcFZJbK79PHH8JVkZcrTuoqfwQvXgd74AupbfKWYWprU",
  "key39": "3GhQqWmWNXRpFwYQ8j7Svb7SoaR1kH1cR1cNqn8FX48acp2vhNDncVkFRDJ2zG2E2QA8E7fH5B9zH3THsCqUA3r5",
  "key40": "4kfgPdFgGQKjKzAjcP2c6vjTPcv6VDBbUc3mVnc1BZT1YgiM2cZN9oQr39aYSJfqhJbVDLo7nzKKRngCxg7AeyFh",
  "key41": "5aTeLEQFy91YyyhkTiS8ZeitLmQCop9DFKDjBsEbddwbry7qCuiQocHV6y8PTuRNxtspGE2QikwAfeHFmfBQm9kQ",
  "key42": "31qajjJCQBtVtfSP6cZWwXUSndaSrEj5FSRDWteakrpEZ3FQbMLTnGPW6mx6suBJiiur1dDyMuh6cA6ktFaEfuL5",
  "key43": "4ysJPsj2HztQ7chF2dpzGGoyvETXDj6e1kpix7GnB1N3jFpf1rd1agEKNBnG6XwnHCYgkTHnK1veoxeFXKsqNVH",
  "key44": "4xY8QH6DoGtqdq3orAJWqsv6qeDZTsKhS8Rq7ZGbiEJV8WxrXdi51azATd6mAYjXPQwsxtgCasSdgHHDSNNnxoT4",
  "key45": "44qvazp2aMLT31zrUTAKcrPDuA2sVUSP89ezVYLH3YMedfbL5vUPHhfnQzfKSw1x41auxvkQCL43iF3RSH4zGf4x",
  "key46": "4utQcYwwRRzVqA2VKiEL6haXi2yrRWPwg1fPdbbNQftPaAraDeAcnkYN1w99VcYB3PLZfouxLmgKZhMBZQi9vtWd",
  "key47": "2T4w4xfRJyMHL8w3PreaRqvK7gAFfbKGm5V9ebNEeFtQ9ipKkZbKVeZu1ojgC3vZ88rm4xGCDFUjbgHeRiTdCB1S"
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
