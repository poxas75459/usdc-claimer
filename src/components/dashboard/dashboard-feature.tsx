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
    "2HCZGMypj1cKWYJ4CACp3qPuoD5WgcdspARkJyK5dQZ43my4nnPKxga2VqD7HYefiZU9CBNWWamX9wPu5JtYYq6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hvMtzWRVuLEsDnwNh5uTNQx2TfESJfbpvLY4YBr7yXHjuxqUy3AJAPTN6j9zsyFSLAFMMGFB5gJhqzs6Xg3N23B",
  "key1": "36K9f17w4acwjRxSjyWyjW6rMPdvD1CkAwG9fQkxeq4hieDRM1Ar55rBcLoE8oTrqwfoi1xwQ8NdTxQcZ5djjFS7",
  "key2": "65J2JXhjTrE5B1uvEHg5JXxDL3jMJtL5HPbUf6rtRnQgo5wuyTCRW2sfJkDQ8ASvoFsV5rkbnBpzQKCiamPGqaCY",
  "key3": "2L8eZJeaBEweiWHuqez8wY1bWVx9bfuTBNSLBYiBTkPic8YfztzSZitxUbAcGEwgGHyGxcddJJ7HQbfTGmHqjqYr",
  "key4": "4RBC5mFiJyUTtguzeeLpxjZ2CEBoF3hf8DoJwAfppQBZGsprGRcHqw3mhwJHNE4NXhBEqwMsCeWkDsdR8S4g42rB",
  "key5": "4JB5mscyJnxVuixL2GCMJ5Wg28EDjmW4eucGxMegVaxbK4edA8Uthm6yfB2Vm4wGg5wQTuYJQi2oYK77ty8a2PPG",
  "key6": "48YDycicxQrMpJo3YzPnVyUJLCrMELDatsnCmoPxH6DuK7E9fCCxFaBsikdbRZRVDq9o5uze3J4gQbbQXoE2AUx3",
  "key7": "5QP8s6go1s6Xrx61jyDRcLmwHny7EcoLVwz5GoUp64jdwLRreVfsabde4huoP3y9TvUt6StxmtjvSbMJDBJKreXR",
  "key8": "4bHKeq9rvGVThCiJ2RWjXymEN6fT2hHhVEQXyRzYntYz7T3WzqLyNWzTJZTdYThbT2LMdgzUbsoutY14iSBw34Zp",
  "key9": "3HrSi14JDk2cJeDyi4ZcL9sg8EJtiZNMu7Me5HWmjUdzWC47gEiHEuLnS4sNBFSsME74pVcyd3cpRVFCQEyDnUJP",
  "key10": "3qxZyWdCw1tZfMLULyjfNfLbPMQ37a51okLeG271E2teb4vMbJpcYfe6zKxaZ2KtVuCL5N1dZvMJgzRQV68oZUEb",
  "key11": "3nbVEWVFWk989wcD2jqXX1hPsQ4o1TH9djZtEoqQJNNPyqrMFRaFBW2XmTLnVz66TBKmXbdcTg9T9uVac78xbXRS",
  "key12": "597MUFBhE1RtQJuxiazPq2frssUBsUfXPLVpoCx2cHvPoWKV7LWmbjSfHxXyYcfTovxtXRYFDo4JecUR7bBME6t5",
  "key13": "4gNKLUpyEeqYtJbDhi5fHBWxbbkp8cpV5hHrjk7gcFPwcjRexm8LeBTBD7hnkj9iVqBzaCLPxXAVJocpm5j2PJ9f",
  "key14": "47QNeYuHCMqxE8iUb5ViWzYK1G5NpKgaArBqPbcza1GFtcJMpeH9R43z73Z3rxgP15DFhD3poSNYnVuN5rn67r2f",
  "key15": "3S2d2NcHDwWDvZPxELJ13AJGWk22awGXCv5XchtiBiLTVjK9YhwD55hc6g4CwQWPUgdijkxm27qvMmsD9uKqKwzM",
  "key16": "r6x17ATdTQjqJvmvadYDtY1xWfq3Q67kRjvoHMKeZRFeGafWT6wFHZe7GvP2u5GHXaFCWj1vXa6eVgVx4gZRGAK",
  "key17": "2x1w8gLbonw2FNfTtpyPaa7CdoF8Zp42ZtzVfvU5VqcnztdAptSr28kLFH68JVucFFMNZN7XKSyDLqkxkxXsjDfH",
  "key18": "3PETWaYsYr58j7qCsZkLDt4QUJX55GNimAvgVPoRb6XbxaR1pZ2EBqUahnhQcXH59VUwB8DLdVHcZ9tazKC519xy",
  "key19": "44QedCeSbaPh2hxiBA556eWAMiV8gSqjVnhtmbfViz1g14zN6dQZVGXbGEw6n1iio8MGFiCLwUYFJ7CLEer5ZqZb",
  "key20": "5FEoWyo76umFDAPvdE7NWSgbhA74oej8prn9RLmQaD2S4wcVRuVmH1eXZQkc4RWq97vVokobS1ModoBzodMj2r6h",
  "key21": "2anbBQSGP22pU4G2TeQTJ4j6J5U1azDHLpc8LU3fQodWrcfDdqWBq1ocVG1DSs8pNfmVowNGRwDo7iGdZ1mGXyVD",
  "key22": "cu72BTFVCVMLw3Lac7tRmKpCC6HWJo1E3vN5dxZy4BZTtLVzPWhHAhwQ2VNhS84UJwkcFqmiMzTgezF831cquSD",
  "key23": "4bWiy652Sy1mkrbgSTaFNdP3eVC9K221KmTGwR9BGm7sUq2ptZ5LnTjHhkvbsz79rDZdwo6G4aReRPpBLGX7EcQu",
  "key24": "zzdAFNV9rDdwTcx3SDxEaEGgS5F4rAyVL78tj9P5hyv9REwbQbHgmcPqDM2kcLU8XdXEw9Dz9VhmYcCBWcyr4m9",
  "key25": "2vWHTyv6EQMNX67zfTYdbiKxkAE1o1QtRLNZPDBeJoSNaX5Q5f5s4S3DD5wH6TPmUBcRynKKXNpdyjCdj1KcikUX",
  "key26": "31uDBqTveNCdZEpahsGzfAyXe1BqGxCWg6w14ca4XKTFB8kb9356iyyxLNL5vGEXjk5xT2WDsSfwYhhFKz7EwVg9",
  "key27": "4RiALETXyzkRcPDHJbE7xugEQdKBCheDKsFMpwVFWez3u9mBBkCPWuyYz6K6sTYvpHBWg3eGpH4dug6GrBuohzJn",
  "key28": "2M1SeNoKQPq2WBfFaCuTc2JgN88otbFqeXDu214MJGGJPT719nFaLLgry48aUSMfwADTzdXTVUHN9mca9UsZPafT",
  "key29": "4JD5bym1yocT2K42fQrBbpXwfopJ2TxPrpeoTSPuJAnFnzTek6geHjcGGZDC6YoyaEs8gNWnTMk4iThKCwafbTwq",
  "key30": "5Ev6jHbxXeMKs164Rq5ppcjACBM9ZdsLVJ8HcedrMcGb6soTxaqVVB32yVh6UUDx47o1oFzsgTMGyPopfY7PndfX",
  "key31": "3gh4NZQHmjozvScHnBrDYQaJbFQtNQFyMAayHvhHyS99v2A423fNgUMmmHy7aQstxuLegkSxiZBg5rmNjDSUwT4w",
  "key32": "3rBaoGCmGeH9gi5EmKGYkrEtqLGhXErW2Y7fdWJXA62SaF8yz4Cm1cokvoDcHXX6uEYKKkshzczQvtqzpdTtgZRg",
  "key33": "2wD7LZAq6GeN6fmwF7HsmrDgUV5pzQ774AbbWEnDjWPLst9xd8rQXRVHA6deCVNZmGB7bep976CkFwin7NcnqXg3",
  "key34": "5CNy2xk5UCMrKPch4GWbGptM4gaq1GfitfGVbUNGgwk7MMCRwHXe4kL7Qf9erQ6yXZMia3z6qWudNQkrJzENwksT",
  "key35": "3e43ghyc6QDsTe9Q5tZYoMXGPoKtTpkJq9ach3GvysJ7xZdtoSLwhumFNtoK7EuNbh1sVL2ufwNWmTDZWH4pmPKB",
  "key36": "64KyhW9yWqYQFHf9FNE5NYBpguQh1MdRDhZkfizf6b6BgH52KY74awTPDXzSbMtq24gAA6q98zn84vCHSijMT8pD",
  "key37": "EJD6FSw78a1BycQ35PcdEsX8kWHPGeAuYahCbfUbFNqEe52PAZ2vJW3KLX7kYKMgtoMjJW5PFf6VHa96fhLDCNX",
  "key38": "5U1HnsfXAEAB32uwFAoRzqyJWnmftYAfcVH4cJ8sSQ4ztqaqtYDMadTxxWTJShu8dyzLWGB5NSyoVU1RXT5VJorM",
  "key39": "s6gy5ZJmWBV5YedWa6UmoyG3jaqQTymB5RhxWBWrg1XhTcBNHDgao12GNtXAsJyBJob4yy5Xazd8iXTsnqxaLu3",
  "key40": "DSNRa9jCDMNKWGjtuLF9SgsNbgBPZTFLfiCB9VLqhgXsxjdgCAk9a96NAik4JSAwn1fhDWj4St4mTgGethXpKtd",
  "key41": "5L31zfhrUNqM8eFDYJYbfW3QafccGWr9SbbfCHF9vr95ieHW24CCgpYiiBFQDJKuM7GLhjtqfLsbKmeDsUr11W3j",
  "key42": "2GcbfAMjYPVA5eduxRQynprWbSAcwU5ddhFPqSVoqx3kU6bFPwho8JN8QNqDHvHBoqg6o9AxeqsvUvA6ffV5iDUm",
  "key43": "4GPz8UYfUSnrqv9zqHRbsVePDuTxwNeA8pYmNCtJEPPVCANUfkfXLZ5s4CCZGjF56wm4tppwaKYHabBTGASagMPr"
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
