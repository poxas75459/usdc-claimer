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
    "3asLWCr294yXPV7isJ4BwDnNnnmWnj3UuYRLZp2V1KWF1XtJknntRRvSxbpDSALWMYv3appZZUrZjVNBQQ3ZMYnP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yJJ6nwuGcBcDgzbuffyMuycibJvhxzzE4rXjkt7Gowo9MbZCRNyJVwNsdkjmiY4GEaZuw9w8fp4auzVjtbmjfVg",
  "key1": "4uiZhaC8aWFavMpmCDhXBLmH5pY3rjDSo63bx9wP4FYWDeVyFFQeUZpQhzGfqtwMawjhJZb66CmRT2XSDXXmkavN",
  "key2": "4CnULSLy95QSYwyth7dwprorJPao3W6xC9kd3AGAdHAEb1JZKnGxcwaN6242DkkVVhGzfXQ2BgezMXxCAPcbYrZy",
  "key3": "44NHRrvK3szAWiUx6A5N6NaUFWgGquNSWYcY4xLTEqfdNrQGM3DUAVV5WcYEyScDJwRbCLrWmiXj4uhJrhLe3XhL",
  "key4": "43yDxVD385ZqErnYupc6AJsz5U6ggT8HWg5ErwSWE21wLppqWrFthNaEvxZk7tqKD3KLLsGM9XcxCBd7i8ecNfXq",
  "key5": "5qREzrLZVzUpGrZ5bEkmoRsQfqb29t5xxjaRQmgDNrJ2284SUCLnGMzbGMEEp2YkivnvSNv6QUfb5idmqfcwMgV",
  "key6": "4KDvYA2dyWB9ZSj43nBpfqqgbdFKJrHPAsMd6Zy8Qk9riUutK6r9TF7ygnBb5WnsATEbDn2g9GSFaLGA37rXtz3B",
  "key7": "3QZoCnJXp2B4Pdjiw4SDsDFxP1SRxx5K4to7DhSb8aKPYhh6CKd2XWQVXPHs9LrqSyc8gnyStU2udkxim9N4Yf1Q",
  "key8": "6FbpeNkRpBpShpXM8dPotk35f7R3vZjthmrRR9ZyqchCMg3tS3gkS2n6ZGNbzKTkXvyKcNSkcu79KmrBJ9xnLXq",
  "key9": "3YQhfNLZ6fUF8TCviG1wSpQNRYEKd5T4BijWSzkyEW246WvZEA8i8CcaBgQ2kUeDy8DgScRaeTH9Md8Ez1o79vWv",
  "key10": "5LueKAq8MJzgq6JvJBQxYrRFBpEEJyCdhDosyASPj74GFkQda2fdrZnUf1tXy4k3yM61kxXgtvYkXyENPgGrEFr1",
  "key11": "3r2qytQJvDbXB8KHAaBm9bqxaNAjKcA8YGhopJkVxcqhnBTkFVQaHDTYw1NywNhAZtVuc3u5G4ow9iMJnpV1oDjm",
  "key12": "3pkSnAwRKxLU8GQ45YYNDf2xW4urCjmVRvGbexn15ZwkLFYjqh75tuuYkSdXu4aKgBFJSZtKYUfNY11dL35ahHoo",
  "key13": "24ACnURJnzMXaWfhMHPf1Wrf5d5LgkiTpz4gWTgJGUu1KRLt4n3bGKQBZZ2PBd9puGCtZsNWie2tYcGrEytVosx9",
  "key14": "2QZbYMrxATLaRU8LKqnX9gdmwHbZF6rM43H3HNePgnL2C1UR5CarzUuRicP78M73r6PcL1GM7MmjZbj9kx9YJrPn",
  "key15": "5jvixe6BNwCxT2RC4ypxzPD9rFXhULJxk7S2LdSCuC4og8XtXsdYqzFDWgmLvvpH1PgJZeUwL2wSDXhqfqFQ28dV",
  "key16": "4LmEszy3C6z4XJub79awNcaVaNSBJnozgcSFsKVN9urkZLRRKxBRySctp1NiEozVKcvNHJejgHunLSs6A5yGDgf",
  "key17": "53gBmghE69riSscriGjFkuD8zsyrdb9dpLX57UDoBHMJGsKVyLugdoqCX3xkMRJ3NnubDQJ7uaLTAWL1fhsVnXjc",
  "key18": "2DrKq616aNCDDnPuzzjnHxyvmpcBnmit5PJs7NcBFKTEgmLqEXnmp9c3jU4zPaN4DHWVq8A5EmLd1DJcLcCiKtTx",
  "key19": "5PKHB2gvTk8zbdUZ5JySgQs6LJ6k6duD5Pgoi5giPq2mk36BPP1ULGZCVzTxPqQ5qDpBp4QkPuvL5s4NwFj6sVrT",
  "key20": "LtNYHhXs3BevgKeZjEfocrVaA9grLBxSuiAgMjZ9BQpPQZtXwjT8Vq9ScYjTY5vMSWA5dsQQF8L7pMABv1Zn8N2",
  "key21": "m5THK9TicFLhGozZkdBGyyxWCYGy9G13nDvk98JksLrfP1QLSJNYtPrMwd69Ey72tab5PfSWNRXR3EZ3pQnppXG",
  "key22": "3cAM6b5TkMnewxV2CDPG7v1E95zKvfYokKuqAFnFFSj8dzSZeZvMuzcXvwp7ss74eETG6nTCNX4Buw59A7NwLRqG",
  "key23": "2XGqA8XN8uSwbMnWp4aPFTeB3v4ENtZaPrDT4gNbLRWXYAtxA3KPQ6BMUJiebJcrq26H6U2PJfDiELgUywbfKzs9",
  "key24": "Vs3d8W867a95CFjGZ1zvLRqLaxPVPxUX8aN2jmBgF8HPzBjU5thC94ii5gi6MrqzdtV8KvHhb73vyC6AuXRXD3o",
  "key25": "4spz12cY8ukw354p8kUpkkGeBGcvdhu4t5KeS3FsHfh4nUDNKTSWiprG92e3asiLFwDfXFCcrgwkVgZtgiepRTLA",
  "key26": "32QfJsqEci1XXMT9dcEimaRG23mKbu7DV6ktfYFhfdPjZ6q6bhEaYNoodMaJSouoKJJGfVmoWu3CuKtKhJ1tvMfH",
  "key27": "4NtpR793pa7teJwf9u3CAJEiw5BHKtffe3AcJYTDAPKeRLVVvk14tvQ9vHinYRgkTCm5oUFxYd3TAqzt7GxEgFd",
  "key28": "eJT3DbkeTC9738MdwEH3eaBvsKojWWjdhqtXqiuTDNF8RNpR766sDK54AwBAu2wSryoMBfnV71zxc6Lxiu41o85",
  "key29": "2UjAjWJTQTYCHe7U8rmqLqghNgCf5yo4S6G8NKebeGYmRfzmq4JjEr99XxBbQ3pg8vMyUWzUEPE1aepX1ok9R45J",
  "key30": "3WD2P5Q2ksDj25va4cbM4Ho7nfZvDnhG7dZK9KcRJoDcKZUEgUztqfM5HKrMFqSVAiRk1aJT8boYERgc69QCrbfd",
  "key31": "25V8FZCMekqai9REB4bmAsSQp3zh3j1JDwpUJdLE6MXHcj1DmNWLNz5T1VesdY1CF5ipATJB2bvfPPUq6fPEJKq7",
  "key32": "jUjJMxTb28giesmU4Fp2oqBwn9rKFG5KfPb6uQWg6cBpUz7jDTe8NKC95fauXRSdBTtveYNMUADdvVCaYiwypcA",
  "key33": "3xTKEfJPjUL3Uma3QPrJpqcWRRER9G6mAEXsMCPyA4iShL865UDFtp5TetzohWP4z3S55vZeDmt6GCZAkKctMZHZ",
  "key34": "27MWHitSuS9RRnRKAvjF8xhtbLfHsF431zFPU1BwUqNDNfoEi6kXKLF1baH7JCfFQwdgmW29DtnHFMRcUVYc3GrL",
  "key35": "22FTacXDaUKP5SyxTTCkBreZ5Yq4u7pRVnRa2UZn7t7yL9c9FRYtx4wBfXrjPswbmrg9CPHZsuP4VkND2kCaPSMa",
  "key36": "5Cip1d8TaDt972QJbS4GeuV4g1kVL5GRsLSH14h3zfqFTsoug9eQcppb8RMUKUwsXS4NYUCM34QUWMGNh9pGgLwZ",
  "key37": "2cM5wZqJTvP37YnXbjPArxWXCdKvcjc7YmaZjdykkCFrsAoViXpc6rJuvuUMY9fXHyZzta2t9vBj9RUrUyG734ZE",
  "key38": "3MxTjaxdQ1z59TBS7JhHqbBmXA9fDXqbozkMX6hgDb64MDbtn33VoTyLj6W4ZdRZpsKwKcvcjwpm6RtAqnhfcLTA",
  "key39": "4duhggRqbmfFLfBNYWJ8sjc6fgpnXzam8zqCAmZw85HkfarZotrJZ4kGwK38NmNKp8HHwMz3EScQAhgu6U36z9b5",
  "key40": "5LfVJ5beT2ewWEqMrvcEuPR88wehcoXsWaXfjGy1UpgNzZ91wrPakgdnMJWkykiLqNkJC12ezjXZMRtSmiuSy17L",
  "key41": "PezihHyK9BCkfD8o933pmRtvnQ1efS6pfGZyKVopxDHTGXu2FyDshksaRcfWJkQwgx8uLYUiWnamfgjVQK7jJ3P",
  "key42": "4kckAZDCfEmpgSoumKFpshuESroE9Gyps6o2FjxwnfKr5LAgt16cgG7xiwLczJURFTL8raYc2phQGwaqrfzGAYon",
  "key43": "4zB3xqxaf9bDcWNhLmkQtg7qcWXbb7Xrkd3DuSbXkApZXcsFWXFmhLQyNeqGDTa8zd2XJRLTyaWjVbWXQThnxDhY"
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
