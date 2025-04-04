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
    "aUYDqWQon6JC27seQa4gWSfsFDJjFLjNb4YDiuy64Qhs6SxagdDHyQehPwUrgZr2Sfm7PDyY1uE3RRzSjcpDnCj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xmA5Np7tHW9B8pcjh8kd8yjs6NQNFoL7Zr6ve393WYvrGoCchfabxRno743qUDM3w6uJrHWepH9Wtbn2EZFJWQD",
  "key1": "5oF2ELSLzjDiVPdChkKvT3Y6eFwZ4XT8Le9Ht5gNUREqwYhohEUi1wf8voG1CFGFKXVb6ppNb1qrhULcAJMorb2p",
  "key2": "5PUf1UHd8B9fp143ogMLhbdSkAJW8GXKbue29LhsonvGY234TwB6zmW6pRPEgmGx3XrF2P93vjEqfVVBYiQB5RCx",
  "key3": "5kT3QueVNC3KJuhq4hVfmRqbWAHMJ6DNHjVnxo8pJRzds3p5hcDM6vfZ4z1HER1cmwDTeCdgDnoMLY7qv4NHm23f",
  "key4": "3UKftBQ9BS8Xt7KsAFkZUsgAoKdF1KNsvyWPntKg6exWk3gszKYCCVzM8DLg5a6vMvzUGwYwdEn7heS85kjU683A",
  "key5": "5vH4hAdD69GkLAvyZcCdUCtfKmoBZR9y3DCAt6aPKxnsFkELZ3BLHJnuKx4XZoa3SciH1jPjn2wjWPtQzNMFCfcb",
  "key6": "4H6T75GoXZhFnqqWvZSPuYjndBa72WpJeP8NtfT3PcFuuigLeyDj35o7BDpf1k7tqUSBU1nPQMKDwdS1Lu4jAyyX",
  "key7": "4BYfKPYAmWzf19wnSwP9YMFgXwuwQaEkcfT56PsE85WYTW9bEwm9wEj7nsF4yGuhDQYYaF5WAzujbVT46zzAazk4",
  "key8": "24HiPPhw3RbR3wRngHBFkRGHM2eqxAswKjF5TtcoGReVikTamPZ7i9H5B4FcRJCWJQZSwmwh2Q7aZnVYGiE2UbGG",
  "key9": "5ytVFDmcdMFmyLKUfNMWk3ULiNkNeXwm2vdydaAyaEjrRhjSHBQuH5kDFfpuwuqmjN73mWHe7GtELeFcrXPnpTS4",
  "key10": "oPAtTKnB5nHUmWFbUHgRe1Z7vAbuVcWXYgtGmBHUxFHoNd9v1AQZubRdGwcd8EQXJ5SgvPmX5D7xfyMgtthKZYL",
  "key11": "nMEemRZe2Exya9Wz2hCf8dRcXiesM5xM3a2xikqyieTA9ptqtC3tfbyuV1DsNEY2LYTXzAQjDmjEs7YFYEudrdy",
  "key12": "3bmFQD8sYQVzJNLxoDTHLaeH2CiMKCqzeZvPpJYSamzk8QT9PZPVCNFNYHN4fPZ5hEWv82cVApWEXF2y8REqbtQZ",
  "key13": "5QR1cZjH3fz2dTDQcYbK7RWvjqdvTTd7Dg7Rm1GqUk3CXQtqxPsagcwDzzXt5CvqDwcBfeyHeRgkUrjoKzWLYsBe",
  "key14": "nFkFCagP8CbozSafW2TF8MRKdRD1XvgtxFKkvdXZagNDcAd7rNPTHVSerZjcFiXgyxmVFujJomGPJqWsz6Pmjdd",
  "key15": "1W4yyvQaxSeA2JEWHWyJH2Us8CyMgUbfNKXzwk8aKGx2KE1buefcsqojs4ftc1whf27wvgCRYnjMUSVUki94aWV",
  "key16": "51TWM6FNo52c7VRpHxAfEoW691KMv88NV6mZMptLZu9A2axBUxfg4B8bPX9ZaempYHYW9BjTzQwDvhMba7vvkA7M",
  "key17": "5dVWA6iCpoKGppbims1uKpeGW12QZCyYZJKiZqr54tz32xYhTsr2XZaUrBuJkMyPG25WAreiT8TntvUxHGzU1FDf",
  "key18": "3HUFbQYit7xGFYU7kJq99adjYD71HWtzPFMakyqrSUj8e54ZU1pLejx7ZgiehnnWKosryMC2AUJGw9R1YVLuwhoH",
  "key19": "4QTuaegNsejQQs6dhrMbWncFjgkkUqvMKVMwVUfPQaSEdGDDiYYzK47cawTxorkVLWa5CvCBjPAPWknzvWdCXjqk",
  "key20": "4nRiusA7aycaaHyWWYv87KL1JQF9BUQ1QhLLQ5C5F2tW3L8keJ27Aa9guBxX2Dxx3yh6oxCGsnWZrhVzLFCFiBqk",
  "key21": "5XD4CEK7hAdrfGePKv4jwSCHYd8UQGeBhP9NjkBWbcDq5mfb2vPgKCXkeZTtKFaexYLgtWi8ArRNqQTDLdDWDWsq",
  "key22": "3QmfmBARRuUATZ74P7xm9uFBbroqGjNreHXUJF7nTeEL526zPdWMBtqeGohKnK5k3moKGkx3nEzUyZ7L57SP9i5E",
  "key23": "47btq7RUyEgEje1PKMesGC5XAv3buPoQL6gdBQeBzXjtrwmajDTNrrFuC4TDCU3XGrcHa2HbKHPBx8dPnqNkMP2J",
  "key24": "41NwQ3H1zNdD662N4w4TxhXQ9HAcRxxS5aS1GUn4JZjZg9KeGefqtPiUQeUmTNQYRzwiymgwV1myJX9YZ4nUNtpu",
  "key25": "66CHJd1LxhV2n2ThdLdgJyCo55s1F7pVMQh2dEUbaurdjX2qT7eo27o57Qk7WaeuafQLcZrk5pkx9dn1zTiPhQNk",
  "key26": "5r3cxYyziDpHnNrHnJtqctGpxR2azZz3Ggmnasxx2ZoxKZPtCqaYogdW5fUtMPe5zfpeECEtb2fNz3HYJHwwrP9d",
  "key27": "4RgdoKr7upmMgbMJzc5iBshbiNpUkaJacgBEbs4HhxYegTjcwTdGxheK9oWHYrXw2Hc7arZ7foda2gLjSBNzavLU",
  "key28": "3eBv1RbVuW4EMwqWPGU2BuTut4sqAunmz81z7H18fbKTBdebwhxeeR54M7JEp3AAuv8ZdVKGHkm3xyGcMMqepGDA",
  "key29": "5mKHrvtHSFU3CFSVM2uSMVn6mvr3LLChV5WUWekABiTkYm5oXoCstZQQ44kAaMJ2NYb4YpewURypqjXSqTZn2yPY",
  "key30": "32J4FAP5zCKem3nfEerjkaVznZ6CCkownmJuceb8yL7QjSnhe2X7K4rXD4NTnVC7Ns3aMupDHesvUHAknYzLTtY",
  "key31": "5VybBkZRLPadup8fG4q9HuMNMsyPssXWtjfSUYZFoHs8o9qTMq2z7s9gyDWPiLtE1xWcf4Ene55TVdwdh4E1vqB3",
  "key32": "aHUFjB89fnuD166j4URmfG9K8QjFYprSnChMSDQ9GpceovVAucBy75F7WcN2NGENDsVYWYVZgQKYyH8bQVnzYkA",
  "key33": "3fCbQYuQaYYUrFhs7ZS39qe14xjmAG4wYyiwgGPjXyziBRwyPztvnmAdWR4ckJUTotB5vdibJBhmNZ9XcugfUZbS",
  "key34": "5nDRLMxoxHCGTGwtRDbMM4hDdoSgC9NiiDdDSYayUmQPHUmq1c9D5XUtDYVQUfpdzU96j4Mes64eCqFCgY73inZN",
  "key35": "3L51gsNgSpVtAbxnArMoYGnCHMpGmZ5rnKucq6x1HJY2fkZ4mw4C5Y2RzBY2Tktn93rLSiqoGed2J4hm5iuQ7Cba",
  "key36": "3WaYSK5p9jteJXFSqLyFpiUfC8XNS1NJSud8egcgWkmoSW8vjCKaxc4fmMSCD6Ys5NuY4WpefezNWFCuoPqYAvqf",
  "key37": "4HcDCFWpGNj2A2Xcbj87vCLQ9gsTr7haD8359RoATRYWtkbam2Xe5e7MMtZ6wgEqYrSebdLvDXQxkikhxkHpzYd4",
  "key38": "5Wrv1Vm3NajkDLiqBYXuKMKDpZXyAP4nwBVqzHoZW6pm76RSBDqGzKYsfKbGcjrE5SaT4hFzGss7YmX63c4LYVQ5",
  "key39": "3WBh8FqhjTRHEfJTdXgxffPjiR9igaAVAqbJByPbRys9kWHkp1Xae91gKkTVnMpfNGn7z7qPnLj2UmZqo8UShQ85",
  "key40": "3kDKGkXaA1e8VRumTxqugnPavNFCVto2U1pYuxLndjYaaPRfqGB5rymrJKhBP8eVhMXRFtjnU9dCP2zVHFADxGzv",
  "key41": "4GfGQpR18Fz1qyLCovzkvUCxwcLsKRPekUhJVutFgkwzBXzsiCQH1GVWKynjkXq5ULUHS2xyZUcB86vtRU2EXAXm",
  "key42": "4FySGhbR1qxqTikVTKDmtEE2qGSSVcTcTTfgVKfLxgH9VmhoKWKaMr6SNdw8N3oVZrEYHpqdVPvk2Jn1TzJTivhQ",
  "key43": "656Xq3iuSyfo249AmwR2RJDxVtbLcsAGKmTqqGTFezCL9h9i9wHs1ka5Zevw2sfhxSeiXqADxvsU6vZ4TgCP3S4C",
  "key44": "3F1eAvDoktMd1HJJmnHxmzJurHjbEJZSN1D265UP8nKft32jfQ1aCyeiSMqQG8HB9tC5pxTXpnCLGu12JADUi2eF",
  "key45": "3HYgVjwnZQiGQxZr7VzVnxD5asAvR8HggRpL9jeqf7YJJKo7oF3jtJXG8r3cGwNKg8BivjLirU4MtrWuq5YF3HB",
  "key46": "mBC185Seydtpdm9mcoTu3Cex4c7ho9LqXA6zcbLyxMBKv7QXLow1PGH9zqq6AALT53iH4Zpx4J5y7HUXAqqHqz6",
  "key47": "2WJ9fcwhL7HDvRrsmCiFzfwpRYKRNqeb9NS1iz5TutL3VpANyakzsCwtfVcdWkGpNxR38YQ1D1p8udFhEZmwwF9P"
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
