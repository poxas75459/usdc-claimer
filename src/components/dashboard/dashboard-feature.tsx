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
    "5w3du5pcunGaiATXGmtZn66W2aNMX7kX7cZ3WfeKMh2pYfpJckLdLnBRfCB1nysxUe1c7jPe8PF648KPtdQoCZag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DM5a28vnBVJHj7DnwEZUDS1UFnzBCXL1PCi13Sb5spWdYuYnELeoHeCT7AnZn25EsedfRSgo7eye1qWeLCZBQkn",
  "key1": "2VFYXT5TXRxpAVzpYYk5iF7ACfV7pUvABv9CdA8xwdnP3AMUikRULnxCYRsXo8LvMMXKJzMPXhCdGphFhz9mmPzt",
  "key2": "3cyuAPCDVaKmddSrbE2f3NGC9DBdutrpdVZReDxNBrqML2cH3GxKRq8ZyFioiMibjjsdJtqgkwC8D4aB1yu4fR6W",
  "key3": "2qEJaxcPFmZJ6sTmANuLRzjPMRPnxyWf1skSQTGQxeeS5EuJeKeDtYjQKn9mrbSD6jnvJN54eZ3eGHiCmR7oCovq",
  "key4": "EsVDCsF9GeefLHyUf9qr3WFHyUWiPMs5EBNDK2x9a7z2h7iHBdHNQqrVhr5K3zvnqeQfxYJgpJPG7S1CtTNkFTg",
  "key5": "51R3YgLfbjwyhDjirKUzqzjqqhb4L7hA63J5NxQQ6Rszk2EskwwCMm5Qa7zPDK643zhDKYeb1L9kaCsMU1scqRyZ",
  "key6": "4HokrQS7nAuZj4nH6LxZHV1ZqNUSNDBb3cn65nrUyaPjNJAEQnz99X8Hxf1A8CBZh1HkBypm1ZvLw3wBRtFbx5YY",
  "key7": "5PHGGC5BUskoarmoSbPoLvVcZTJDoHgjgyVTua7T2qkGwiFtNfVVfpjeKBRUoEv4rFnuAwvfkbCd5RDzdxLdwJa",
  "key8": "3UwsbSDmQbw1XkoKKar2zZubBpKETeqwfvdqwEU1DGFM9T4Z72NZ4T75pUBzNxxpihmvYoRbmkDp6gT7roQgxEGk",
  "key9": "3D5pjdqA6m8XsxAikVp94RZNooaqpVAMzP2FF5MdXxn4aMbeGrikwEzRhXVL6zuNRWsCVMTJVtXNQpNPU3fxWTPB",
  "key10": "57W3DD2Hh4LGE65CwEQmNWucDfAaSAjoTX73HohsMYqFnGRmtUvzuLVvXUMURYh1GBWkhkNFuxoZnZaRF4zTsPM3",
  "key11": "4XSPJqVs6ZwZtReBb5jAkKktYATWo7KBZmMCzUdhjatPoZEUnbnSo9H4tChanZGYn4yFy6TYNhYgm2vqtrAwSR8T",
  "key12": "2BEs9gCLjjGgnbcoSTrSnUcST3Wma9bK4GGj8UGjv3tYLKWLBYgTBRph437sA7rEC3ZK4Ho1vfvN4Uea9Abdi9LZ",
  "key13": "2EqCJnrcPt56hyCPmqo9hFLgKDPRi9zsnLjyLNYkQxQBeGPVZLweiji479HNGP8ecXq2YTU4ozNaK35pN4wTuo4D",
  "key14": "5c8sj3h15o16gCRA3Bwu5WABZ4VcMNvN77odC8ZdwLnTdzy3bEY4fvX8kV4VEPNvFPrZkspGXj13Du3s67CyS2Es",
  "key15": "zJHzj4nz6qaXQjxUure2fFTgwViheJ9YNcshtWB4csazBLCkQPDi47rtoCsw5poRL1JRKyH2tseMZCA8M3v75NX",
  "key16": "5V8J9JyYkJkTjYWEex2AgZqehupRY7mYsYHEpmoshJZQGziwX8n6BuqbHgPrjJ5FN4AXCYc556JbhMTZ1NVpDZ2o",
  "key17": "5vH6SXYqULtxHHaFMpjm6bonjffTm8X3rVRuDPkMzsAguVBCWEqV3VXBV4RaZSqpyerPqGe2k1guG5AfNnZHxvNR",
  "key18": "WnVfpexzZHag4JWdQSkqD6WHCEsXgpaTxkm2tngEwVdxNYMm7LBWMq8h2gWhGhcJftbWTniSrpj2bLHwTS6PRNk",
  "key19": "2ivkj9dzQe2FV2h2WJ74YK8Fe2FrePgji4G6FyzrjdkRR2i9SWvMJ25a4fmj1HAw1aw6VMtnZwdWVa6Y3XoHfvPJ",
  "key20": "g2NQ4dr8rq2SCTzShCPnvLw6cTVNf82aWhmzRo9CwjZMnfmKCAWiAddLgBNgnWVdai33G459bfRNotDerASJXS9",
  "key21": "4DF3cxG9bp3DiM6QXeydJgZbfbdKZwfXFYHrvfDUeMqwPpFKbKdNYpvNq5oENuvP2ihsyZ9oq6DjuNMr7p3D7H35",
  "key22": "4DHuK1WfY65HCbhRkKA8XLtsSYwyPTWVvzNAqzWjHCnBtDTR365RohLtDsa4aezR8sBP8wmPKbybFvbfuRG6uEq6",
  "key23": "2HGHg4unvrmSXduUV6sBcnfs2BRjbBiPomAaRxn4Qu1yeCjaotWk4yxKY66cP48fUQE8B5oU3LWaWdY7cgNMJNnp",
  "key24": "5HDqAPgcpe5FFT4PoW6vcsgQiaschWwEdgk4X2uzg2p5Sz8cDv9rdgN9chJBgYiQPqMV7F56MXVo12SCfjeK6FBv",
  "key25": "2GednN8chZND6PFdqFrHAJ4RzDdBFes2xfhV36q8JPVizDD9vEkKTxKbwvFztaoy95rGnVLdpdoPdFc8LkA3od1t",
  "key26": "3ZvG7MurhWwDcvKaV1XMjf4BnE2JFHJq8herWPTX6u23r6KmUKYYoBzz48ishJSs5FvEqogvFW6uAS4s7qPs8KVB",
  "key27": "YhWApMraBFj5RJob9WojMC9JMHnZHikVQSHGyrBZCZnBeKvpTZmmDEx8cnTacYtjz9PRBp4uNs8KACfV2VeWkGD",
  "key28": "3SZksv77DpSKszmMNMZzBNvH6NVXKR82aFCkUZPqUYiUQffbSHbkN87Eq5QUoQWtpsVxYf96osdeyA1gELazjDQv",
  "key29": "2uLW1b8wwPqw3qgfkpUUcWYYS1FgLq8y25wu87oyk1dZKuUhEQ9D2VbRXDQCegZXAiJSXPHNjRhHF8nzC5zorytz",
  "key30": "65JokUDsNvGGkWVPmChAZk9xPX57ocR4GCAXxuAsG54td6cYyyqyh92ZVNJunEDFvDCs1vobS1AWC1nysYLtsgox",
  "key31": "22Cr4yQB5FYFaQ5KLwUX7q89NvjFeFDwuamzqJaK641eJqg9FDN9tmwoiC8T2uGEK3gfa85KGGaqLBAGP4vyuuZW",
  "key32": "3j8BDeXfDbBtkARpX7BHT4sBYefdEnHgpZ5pmsaYV2QEreZTopZ6hdJ6XPbN8CRDSkjR8bHt2hR1Jfg2SXHnm236",
  "key33": "3SpeM2EiriHxCpAsvsEihCV3VE3iLjHoUriCSqL6ZppHuGrd5ta5zSfZ7enHC4fpxyVR19YZuoGaACiiBEfJrrZ4",
  "key34": "126hqLP6y1AcpbewuZw4CiUpenEXSf9jeuHePFE1iAqztseFzwZVkf1zLKrQFEa8wffBtDeqFmZrTCJ4s4gpgQpW",
  "key35": "6bEm694DtBqDhxfVR5LU4VrYV47yjX2J6w5ffpULwBSmo9LSFAPtvpWyoZoPL45aD8aAohzaZh3Kn7CeK5Mg4Xv",
  "key36": "3wKQTztVaMKXQN2aqiWufqaXPev52amBtXTjWSSCzLkueEwt6PnBuvR1gTerJH3njvg3goyiGXJHADjZ2Po96YpW",
  "key37": "4oLZGF3bSvqgw5ZhEyeN9Y5DASAEq6Y7ojRGwPGjs6PUcdjzuLBHZPBMkEvM9uxoFdvzeKZ2iuHgsgMXwFgfwy4P",
  "key38": "3oY2pnZThTa8SSQqokLAc7p3gF2rncBs9oKCzRiKdzPForHkUmXiaEuPZLMcpf7o5YX1QFJowWhV7B7JsgShwLFa",
  "key39": "5H6z7ZkRA4jXRz3yoFsoi7hBUgkExkQjUeaNDvYw1G155LRipcLX6kBnw6JZuWbim17LzrcnGfEw62Z3Rv89XCEE",
  "key40": "3gD5bbmc7ZdhXru5QvKoHE7yUfLq94LFbANR3DPwnYx7UP8JJ13B3CdzQ35sy7uJChj5s1AFYuinFweJjK3Uu85a",
  "key41": "yvPtxQ4crVFcyt8RXAE8aY8Fc9DszWwFATigCQhZNYZcNkPubDYBffWmwJn6xBoauxeMPvayvKmEYA76539VJ74"
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
