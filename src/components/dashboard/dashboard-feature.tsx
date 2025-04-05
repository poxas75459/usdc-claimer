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
    "4EcN3aKLKTS6iC1njccAPQaXsLMdtgzcWXZRVKdgShBXqzHB5bkk4yhFhdqQUsTNyxzKNuDoAcGahgjwG6LzauhL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qVAQ3b45ajEstjzicinZ93fBbyhshaw688tyVQFG2HWyNNLrK5zaNpwn6AjHs1aWWRADeZbLuUVmoVKWkqC39MX",
  "key1": "5CpfrUbDEXYdwkYCKU8JKTYU2iSmd2tPnCVDhj4HgsedjNT22TjcuAyYUvZwZTjZC7qxTn43d1aFYeEEYMADgEBS",
  "key2": "4KxoRLv7tsdrvNttzsMYCmAddDSCortKS3x4iZMC5bt7hDDx6siq1htzt7nL5E2DfXShgSRjTfcAFEJxX1C682SX",
  "key3": "tXCq4MXfMaNf3tic2yZC9X73htWn1E1T5Fk7pvdj6gZVJ1HBaZLz7ynkA9vLAjS3Kc6xx89CqWQBZcyAt5RJDJd",
  "key4": "56gTJjEsYWJ39KSFnCcoPQwSdmMph33HEaBWTXa6GP7JFEQgNm7mQmiZVW1RiHBXCgpd7AEgTbJbkftZAC5baJfZ",
  "key5": "2AZBytB9ZsG9WxW45XwnoEJwirEEjU5dKKKY8jLkHfVwE5P3teQxNnNpVpoSLDrZh3GcGacbJdAXjqnwR9N9SsuN",
  "key6": "57twXDy1ibf2s4QTHCmWqPBYFeCZo2rSRH7pf2PXHt86qAw2dTM6UEsSe95JYixj98eQMifnpKU7pFYRPEcHqTZx",
  "key7": "5zsZudNqCodfYyUd1Tqdy1RAjDD6J55peYGCeBC2LA3piPdqSwRPxFcCdmWf1HSThgoCsmiiN3X94RggMi9YZwHM",
  "key8": "bLovkVDvtJFdsctmfAWKr6McddkuDQDBtFGmP2Bru9BgWWC98Z1eofxvA8Pee5EhEAcQvoRjgFJkmF4fHVx6frR",
  "key9": "3C6ZkMKQnAzXtPrx3p8RzWx8w62HQ6MJRVAJcJyRLiMW7HUpDh5zKYtty3dVhqauYopbSbQdYSdB4aC558L8i9Af",
  "key10": "3rwVouVsu4p3h9pDeTdSDcbKpV6isdGrH1MBeRPGr1rzXKJQRZt7NSBV1YkCFH1eQwRKopLnJHkGDjPAsZKeyD3C",
  "key11": "3qS7LD3jfV85mwNcDEph6VuRdfy19U4dQKo5KsdYLsaQWpwgGBfRXweoUXbWaFGjQrG3SYZcptj1sgwkTC1d76Fw",
  "key12": "3CwHapivzcujRsdUVcjdaYk5Fe9BZE7kVK2SGhAGxx7Nk97udthv2R3YBs5vZgcwekFEqG1NLQDog7B52JpZpfYu",
  "key13": "4SsqnRKGDrebRS9z2A7V12h6drpTJjWmx2J6X2knU1JWhxqNqa4HJn3cKFSb4DfFAAUBRWvjg6cNuMo4kfKbbheT",
  "key14": "3AZdmLYp53dFoMoV4evj4KMNGrFNky8orKTxdXY3pAdsoE3dobDfuMpP6LjC6cB8SWEp3cuNybuBZNoA6rjsWrWH",
  "key15": "3bKid3YPDCEvB84Fqnh31deBPfAt1j6B2rPvRXA3j7eZiuVAcrjb55fweHj28q4P4rGccMQhNWCB15HDqGTGyHsX",
  "key16": "5A6KqRieBUK5gNKJtGYYM1PHbtZfE7NfZ8jHPLXaswaxmR3DFqN8S23oKZWseUTiSMSPPgLVS7XkTsr2rJgVyRU5",
  "key17": "5jayxLpBMgmoLy1uUmsFE112fqjXi2J4DSjEECMs6QrEZLSxawy7pjpdxNKgwHuLpRzcRXhzDP8yGCEVTZVXYhAR",
  "key18": "5fK1pWoQaQEFqY5t6dZbyvPwMNtNb5WaL7PyMrjdt3XC82ygKrhkWh73v88wXvmUYTvbx8buBiTziRc9JYPkRABZ",
  "key19": "4f5UBRBpJkcbqQcZPaPCdS9sydih2iYK8CmwaqjMmUHmd19eYKSCKLJvw8ahY7nLVPEJwDkZUX2ickUVyFbPWgvx",
  "key20": "2UMpkEejvDhfaWXnyhNQNh5C3bkvHN5wEaAdD9kY2x6iGN9ouHHb2PAsEv268NLNEvcjzoqAJPPR78z4eBXVpm89",
  "key21": "2bUiNS61puZ8JajmkxMoU8RjX4UjqQPBWKGRQK4QH5TQvYywajm6sYbaK2NjQwiLihvs5Ff5EwiFBzVTUgfJRcxS",
  "key22": "5JgGCTAnbKVgfxAMeysKLLDjxxzugu9NtJs95fa5KuJowbkzzizdiMgWe7gFX2XyDysJvkDrsVNxhCoPJ2LVPjwJ",
  "key23": "66Py3MrwV2YVWERso7MRxs6UKhUpoj6zLPPY7S99qyh6hk4zYuz1pmiMGVkxihKMpmJGdcm5K1fZXrsiGDPj3cHq",
  "key24": "4BwCGpGtrE5cJWTefzpAX5BBYXpVeeopvkGgm8NnyjByb59UQJsXcbzNycgmzWt6AFiaDnWuP3rVunE5YEVD2E7t",
  "key25": "3CLx6SuJu4pEunJU7hNv5rPcH2jUejovsafjoj68Wt9QwgzWuFcopwTKe83UyN69f69oQM6QxPBoMt6JzSa38EcN",
  "key26": "3dNMvkFxHK5aRG9s2fWaE3yCqkvrK1euw6qz68f4Tx7kEe9ths3QnWzm4BTEZqo16NrQSXjemXQGocsjmxYuZJm",
  "key27": "MBGLdPpUsnf3aVSwynfd5QGFvdNQvLpczbNrSpi4v1hUdQZQC6Z2YHHb1qJZMsMqYuZBDD2wUkBT11veHLRMktE",
  "key28": "2MiUg7WAd5x1F1Ro2sEjcv2VfBgHDNqycYZj8AEru3b3WkbtHb8yASujmCeW5ynVK5ec2CijVZ9czjsiL6QkyUuV",
  "key29": "3RRTwCTZeJNUSJDWdSZVkfKgWZvLFGTGpTRydZBLCHd9MeMz7u7B7LBeG4jpscF36thMZB8sGR46FK3GQ52TLAxd",
  "key30": "3MQar8v8QrLJdqbkdk2a34eXrdZmq1j58taWeFQD7SKFZW7CpdcRH7txD7GzXuGW3SsWkiPmcb5XLu926N82huQB",
  "key31": "2tH366anAMbso5U1S6NqtbGSFz47fkbUXVAhaBjARLDPdb1g6choZuESzE1HcRPRoF4vJBXMQJNWtG7X5dLBQzko",
  "key32": "3nyzysGNmyuWDeb8FCtYfhyvc8teK52hUsrfKTvDcCnzAbBCcPyvDszceRaQP9TqeHh9z2GuBasL3QgkgzBbfUtw",
  "key33": "436Z9UwSUxMXLwTpaqN3D7bk6CRmh2o5WPekn7pGxYD62Aykhy7sfVaWHEt2BnQgACLN4hnWRu4EU6ZuciSvNVRz",
  "key34": "2jUqLcg4Ukt7JHGUMaCi97a9pzNx71tn6te8HdvxhjUNbWgXV3SW4haUk5sZMB5onf9rGRiEiVZdCqJL1Nvedw3U",
  "key35": "3MWH6ofR1t4QuCghz7Yy4xzvP2g1BVxbtdWM67DALKDHdqgRovEQL9Uh3qY7QNFr7e3KUyzD9WVfsFrcRucxkXF1",
  "key36": "57Us8CApKWSLYeLt5wQx31AECh6ZPXHtjagRLFKwE2L1gruZNrLRRB6kVStFHCNTUE8eZLAdwspScHBpfR2wUr3y",
  "key37": "4JMDZ6wsxj9NudfBDfJsjkVivsjorPD88fQc81MfHwy7Q3yRC87v3SthGxYoPsLTDcmzbnWfMrU1G4gAREXt6E1w",
  "key38": "2bVD3BbwHch4QXAvzjVKH4TaKkUWtrJB8oHHHCqVy7sybqFokeFFmTkS72dsbeqruSSxdWy2QHj2FzhFYqcYP2tq",
  "key39": "2LFCya6CTtrg9SXNRWRXVtdtB7Pyne9MWvMVZh3WVaGN4DbEmNVWiWk8QtLkk7MK6nY9FuLHoXpb6J4CfJt14cbH",
  "key40": "4WX69Z7nwxfNrhNPaTG1KnxGgMWYjy4S4TLroi772jEgziZr3kutw2qxVhZeaEZ9QEHGRiUUuCkuQicgeLHmvg9B",
  "key41": "4X3tvABw3EJLAQ3pzB5zf37bpfmuBJt2zeYohGnX8ZRjvqm6kHFdJZrU6jwunazZQ2AgR3hBgR6oziPhoHCnwZKU",
  "key42": "owtUsSk6wdjuzaFQbyRkvE6zEQR6VFMsZDoAvrMFMvCh6WzfD8pJzf5AsgQiqYQZ1scZ1ArKTWiuVcZwsSENeD6",
  "key43": "5cmHWWf7v6HUooEN9rGg1UToJdCrgErBiKPJrV7fDXqmFHtTfiByWAJmwETUwSch5jBmA2x83Dk5Zwhc5BxG2PYF",
  "key44": "5b8EtFAR9rYY7YYvsYQKDWwz25ubhEkJ3AKkny5HoH4BdvKvN62CvTahoxd9JqKpcZoW3M7aRF16CdzQxvFHMqtm",
  "key45": "4NfHfkUssoKZgJbRBYEtSb5AdurHom1UW5vFen8pu2vJmD8HUPqqXyqqrZu9Wd64FQf1Kkg1GTu7ZQBFhDgAWz4D",
  "key46": "59wiW2WBHDqFeHqRzyxsFvpEoqr4kTMzJfxrEGqiVyN6NX5dcTkTW2xdwpBBvfWXesWvxTmhqKgNwUfC3sjECB6p"
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
