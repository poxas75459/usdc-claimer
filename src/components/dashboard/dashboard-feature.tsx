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
    "nivpKkXTFm1kFQ75LXADLv7bLU55dya2pxhKPdikPiqPn6YqiiiPbz6B94WBQ3u1mLiPMSP6qyxBBJGnYSESMkf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38HwDvkKzhqV94JT5GU3g8S9b1f6vL5SjAMXCVvUrwtGDuJm9xRxphYjTQndhirrgHQ8FikH5zvLfDAgL19kLdYL",
  "key1": "2c9euCAg7iek4BcE6stg68f8ciPJaQnCPM9eEfms7izKk7mR7xhzFt5CHfJ6UcKMczBNuZQ4oMS2tWAbxzMj6pCp",
  "key2": "5sNgvucRx5ebdSq35QB4gUFGaHGgQd6mVpY9DhSwQtT45fErgZMQmqj7eosyKrNXQcLq3aUxzJZeAXhmkbJhUR7e",
  "key3": "5h4EfZ3jtVJJtkctmnrjqNq5NjV4P3hrNaH5dTg3r6HzCKWFaG1moJiMJRAtbFshjziZg34b3rz95DRapddufjh4",
  "key4": "vcmLQzXTpKv45arzdQ7mBdRGr5W5HpWjsFtyXnb6VawyVE7mrkUGC3dzbstTjj8kRwxMxLzANRupDGP2qry5xh6",
  "key5": "BE2Heh3bgx3aNdxRJFfHpiBfrz49VwCMpArn3HH4MSDivikCecNFi519XURi1LqucWiz4gUpB8G1CZfukYcbZ13",
  "key6": "32UxcSzg34577PMpXAfSYLtKidW9EbCDWUiXfWkpz9rqnWp4JcBj7F4dSoLDnMei8AYdbwmAgbGJgvs4j8UVtjUQ",
  "key7": "355sovo3YkY5Ce1JBhsTEjKhxsEDiHMg4LVheAakE8869eCJ2WZJ9USTjEZNjbd5uW8hd1RjT8gEuzNvmPbJ2gBL",
  "key8": "2osnaG9wNnApyqTg2qK2LynVHR1hu1qDAinz9UqCC693v5mX2Hu98Rdk9dKX98hv8X8n4ePCZgeV5GUMKk84GLEX",
  "key9": "39TM4tAw3Sg2dCKgq2YS4ebocVBGizdDEuJsgVeaJfjSzKaEeadrV9xT9UYpZ2yF3QaA3ueG1TeK8D16ZFrT4kjC",
  "key10": "51FUJ4CroGADhhEqWJRk8WQXEKpbACkGGBDECt9pRD8221WhUSangHeC7ZgGgURMuM5FggbH656X611rdiaaHZnE",
  "key11": "nkCAvXBPvSA96nVYQ77Ck4VTgpqK2NBoEjGrQkaH4aD2xedqZssck73yJ3YDYW9WSVQb1R98AZLePMhfxc7KQ7z",
  "key12": "2XA4FuceeSyL8eP46r14EByeTHz7V5U7U2Z4eR1chZm2BrSzzrrwwra3oj7mTZvdXoGZcZhrnex5LNpHKtrijGtq",
  "key13": "21ge68uU6u12wZrLeghB7uXyqGX8UrzUZph5URXhqX95tPH6YYfk19dRwQWT4yKRCpZPTYX24cfDk9iq9JjqBkwQ",
  "key14": "4p4emoBTZwC1zbgsBFQzuWXfUfiW55V9crNGoT4iiBpZxWxfejxp1uwdxt5pkqr82mX42G4B7qbV5vUogrL5urQz",
  "key15": "4sd9PwpTugDDR3ND5sy8Zh4tbbYR2EATeM7PD1o9UCrrAGcV12wPG1T5brVe4fZLD78jGxVgTLYc7ZUSzAMRREtp",
  "key16": "4Z5nEZWJFTHf1g8cdVJb2NGkBdKgFiEUE2uhkg9rdqv2ouvn6eLH8rWPP3UxDVxupzTEArKAbTsjvRFYMf27aNu",
  "key17": "2DuCLgm1hvmmkFZcfzRHn153ooisPyTFzCyNUQfQ9LDwX7jfo6wpC4dpAfuo8i3PJuJ4DvBStpntAdzQYcAYnrpc",
  "key18": "5okLtk31nLcpAbkNDGAA5K2ajVEJboBd96KcfnvegiikfrMRJb4NSS79XWhJJbKogdB74DVXtNb7Tu7y8tGrDDmq",
  "key19": "SMenh2w1d63woy7Q4WRxRDyWKaVpRH4uujR9LFG2jtu5bfeyBwzSwGGyqC3FMFdvwbTyfNVKqKrefASkVhtzFRM",
  "key20": "5RxUQWj8Vpd9W6Eyq9F8XwXXf4xsxq8LruYM162g2bnhCyq5Bqe2TjeU1jWf9A1nSi52EFTQjSrGPriuN5FwNoeU",
  "key21": "4bQtobL2mbeL5ABBPmEUfoXbg8P689r7yUpNt7pdiKhN8A3iCudpK8AtSVXCNGw2n4urhEgc54Ld4SXgqn4NuKTB",
  "key22": "3c7sVwbcYhtsJGrdQrFCoBJfPzcED7QSfvFq5PX3dMf49qiFhupvq78ARtHVnQ9AJ2VJ6ifzyivHCU1H32kCGJu2",
  "key23": "5SZ2xQtuTzgxdkzLkDACNNCyxsG7UEhDzsDy15gLZi5iVEjkj1dMxH6xayvDv9afdw8Gu2D14pA2bdyvdAZXkRMR",
  "key24": "2UHuiB83awCq8ZgTsaBTuo58b5rdfTgkB5BuB8dmb1UZyFWjdg9sL8i8DDZaJh62ZGEvBcdUNB6M6JozXFXFpZvT",
  "key25": "3KyNThUmTaPmHJYENDRrZsp44mJQTpAf8axMRG4eRgiPR9ypw7bra3uGJUAGPGVhBQa7bar6CzfFUjFJm6GUWGr6",
  "key26": "3svbNNdnPajJ4hx1rPRap7pmTVBw2riQeaWFhjSejwqD2xtKvtr7rTCeNiorTP3GEQzw3aHxiALDkd9PTbcJCbJt",
  "key27": "2v2X5y9158FrsWYQqi9HmaNHrv27qWzFf5DKsLME7KNEjJcSp9fmUaz5yHPtN5ruBXpHszV21ZUPMfUswsy47Zed",
  "key28": "4U4z7UVLSiSZMj915Li2A2to29gSx7dyWjJnJHKXZWkaGcCAiJpyiJSDixjsJtkTXen3kruxybwnS4PNRukzEpw",
  "key29": "jPepc2wAre8Qfp88Z6NSJjnx7P2b8JtefWcSsvtrPh6rb8eu9MsAhgLpzBruSm5BpbwxyyVBK7a7ufm7UXCb23K",
  "key30": "5RuKq5swEKEKi5CMLXzP4u4T5DeqWgQ5yWrR52NSqwkibq5YfMaWKd9ksaY2dZDhp7RFHEiVB8ZofBi6eVoop9XR",
  "key31": "4jHhawkDMKn7GUfoWUY17ELh2hyhUBY7uhCHJm3BEmy916Qom8NWRhNXR324R9FQGXkPqeBhRUCsg4SSoX6rwDg",
  "key32": "6azGYwuQVPXgsKzEqSnTihmTrog4w2fHXC9X816vWNCapTYYyNaGyP4rKkSEf1rVhgXNFKXBMAxzdik8hRKgNaJ",
  "key33": "3gi11ARt52AsS3TCSEJ3XBywVaCSBXq6TomQEokGy21uMNLUFBquvih5gCK2jWoTSiD5gSfZifzBK6rsx8HZhdJZ",
  "key34": "5HqPxRqWkGCSuUrNXyepKrSs5VXCobX329NFotgiyiiVeSawUYAQ8zjRnUY2fxawy4qJdoSK7Gj9PGkVWNKMcrdG",
  "key35": "2wKcuFV6WzQnSPpnCemgthrZeMKRW5Cec9sBCb7wmDWejEDfBB5vHL9iuFqqUDMTQUYvmziPAkWYqhcV1VCbfVwN",
  "key36": "335swJCFCrFRA8mkiaZkDCmhPSEe49wBYn9BMdiUbCxJmqp8TggrFoFZbwvqnTtLxQnkCE7iqFiHaAG49DKgR7zN",
  "key37": "59WMfT8yGc8MXVDonZgJaLg477Abgz7JkYfybsniu98s4pdkiuVq1AnnvnQCwZeQ9848Jjrt5JRBKKHK6Aa1rNA8",
  "key38": "pW5bVjY39RijV6Jab2PoEFJXLkEgddohGLriNmCKvMWnDtB4abj9Voo1bbnixdc6m3nYVLm85oaeQBckq46Y2kg",
  "key39": "247AigvN72jJwBgsWduVK6NKdCYFaQY3DLV7X3e7DYhmxRqrRxd2kSZaFCQqYwp8ojQxWkojvWTpFQQ9RgZZT9cf",
  "key40": "4g3SRJR6HaFUGshGswQz46vpnFaupBZGKFwJVJyYCW3dzh4XGWebAu8oAzMaaECWGB1yiHemQQqcqkSkkNeYatbd",
  "key41": "2GNbmS9msnwKoUQzMNtFtrQU4beCiM8PDmdQuLPov8KBDYgVi3qUUoejNVexirsVbR5JbP7bdDRJ3Thzrekqtawz",
  "key42": "62EG3m6NU2wRsLeMvyP15oKfsTCKamcwGJFnnUVGKB6ST9ge3skCawRPiNcx3RH57Peo85ozftfAmgrvyQoHda6C",
  "key43": "Pxe71YC1aEz5JomfH3ZsHLtQkLidQxzMEkCKrK28Rus939msQqkLaGaCx9r7WYLN1KdnXkwM3GHopK7aXazK3iU",
  "key44": "BW5XnoKzFQy1xh4jNJN5wPmnyfkajCxFyrjqHGjNUmYqAE59Dqm3M6EPUAYwX33qyAdMz25fpUSyXoZkwTHEnbS",
  "key45": "4bsmVzLcqKXUKgdabTiKCEJFSYtobC45U3CqPHsYYF65ye2EbkgWdJo6Q775PymLJ9z64CvsYqZk3usYWYShPGuL",
  "key46": "4Nk5CP9Z2Yx3TLD7oMriY9QURwQCYuqsuL8LiVwnZBKibLwXscmmZdp3vk7SCQGCBUdPgRaaPJypRnk7uADkbJpM",
  "key47": "3VaoTyfh7T3b7sWmndWeCKEmPwL8YNxhDR2nTEdLnywoxWYwkBU8Nw5z2ZKuDsZFUY3qj8rRfLwAtjA8X792C3D6"
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
