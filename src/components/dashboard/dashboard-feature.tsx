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
    "3NTScRMXL8gtDcAbTatwXzSKAbR7Eq25P25Qwi2ezfVm1caJsrRRsjuN9NgAMzGCDkD8Y7XjVDYt2qDmKmHamvAQ"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "59ZuE73sayHhoud7tyVpsSmx5ktCiQwH9iW63xKufBL6cWFUwZxhJAosseozLLKnKM8eLsUYpm3G2cj1wxp7PUFM",
  "decoyKey1": "3sSWJKMi5iigD13hdF26e3yf1baFXRPQgVD6YpuqjYJ38JcpJyUTTWYKq6mNuhGD3Boe2jZVTPTseJSs1FQvJTM8",
  "decoyKey2": "5XfeGxbRTdHtvoEgxZskRTz3B8f4JcQPJ1U1JNHxtBk2CvHvsdNkYRXzsijBVgrBHEVfn8RKHugk4fT7b9SQuM4q",
  "decoyKey3": "jkw1rkf8HW1oYwYDVLHdcmdtGpxksp5YjJq2Ap8BogkZgE1oADTUQUkxkiRfuqR65rxKMv1ZohReXsxyuVSCATD",
  "decoyKey4": "2By1cxUjLPrsgbMtkcqzKirKg6MHZ3TToty7PhsFkSVtL2PfEs4Z1yiWkBCqgYzDJjBeTnoEWp9ggspXiTmkewqX",
  "decoyKey5": "22EoBQGLfyp5nS7nHrgWSw7NwBPFqiuzZj5EwWUcNXKP3cj5DkBMK1GfvV3Uo6wDfriwFcXVpCsgvjWDwxkc5BCD",
  "decoyKey6": "3W342y5MjMGFrEGvowTMNMG6p1yiVm1QpwryQdgw1kJBfBH91ARvtf94n9eVn5kjehQZsHWUY5s6h1o6PMU373i",
  "decoyKey7": "2uSWkig3htwsBJsu8q4MEP1bAXUDpPRSLuvqhKhFsRU2Ka45zSYHiQk1zGiEDcZDFSn1a5qSTxXSynxoot9fAC8X",
  "decoyKey8": "5pnx8FzJPyS36ae2vhQi9NgRKqtvnQb91cCeDxhye9neBEdqGTXh1h1e1hUUide6KMX5nkdoeaeFdW7T3fL15yM8",
  "decoyKey9": "4DK5T19YwnbQHzbcoJMn28iJZWuXFiHuzcwFw5BM7A3uQJUQu9VuvGKV9tzXGsre245vKh4HjpjvLuLHBWwZ4otc",
  "decoyKey10": "2gvFmWhRHfAdL7baRvS4T6FWyG5uPNtMYLojWHNz4z9kbc5SovqL2DTNobC2FYpdncRqR3oNK1e3Pni3JkpBjuE6",
  "decoyKey11": "512vrXLZvDHrCHTfqEv3VRYZg2Ssj1An4QNHaYzPb2cBCFQC4ipJfk3TwXtb4hADqDuKnMWBLUgAxD9fgcF7csRd",
  "decoyKey12": "39gTxoqTMndyNiFZpP5JKZo18wCekjAseRk4ozcHNF9CBTur9YntjDERDrGBscdfDEnPvNneMZCve8fU2eGN1dre",
  "decoyKey13": "5rVaskAe5gfwjVmdt6edoSHuim8f9gt1F1679pSaRW56KR5zdTALoMe9b3SC6yYkbPH1r7V6nAVkHPtdBkX5KzNb",
  "decoyKey14": "5QAqfNec6VXMMceH14GB6fSQpvKETnQXjKihwoKkUtyFQSa51M8KGgybm9nnAyyq5z4kfHzWXGAoRMaGjszxm6L1",
  "decoyKey15": "51U7ezcsfMWfBovdsnT57SMQTtMyeygXz3f7HqmdEKejsyDopLzj4KJzQ4c61tVbasiUbt4gjXdNbzDNxrqYhCKz",
  "decoyKey16": "5xPLysmrArXNez6oH1xb7euETuJNnBX9Tkpy7RjqnWTXbG9Sce7ax9xY5wVuvrCLu1rMoDe5c6RL66dzFyGZpr41",
  "decoyKey17": "4AjLLajVgBYubC4UomG97QyXZdbgfKBPEdWnbs2J5GBhC33YEPj1pjpPARg7vqfQWmK6ZZKtwLn7tNiiFqofxQhu",
  "decoyKey18": "sGVxVnSM2ncCLG6r1MKHU398fV4rUBrEUbfCjtByZxKRBAw5nvjAgAqdQizWmt2Z3XxwLZ9tXBbsP1LhXtKxyeV",
  "decoyKey19": "616YEyd4gnKPBdMLh7d4hHDhnwAyybHdLHfiwuHKoFVKW3XfY8skb8goTTDFWvFgigoHhDBHPyUuvQxTL7rMiSHU",
  "decoyKey20": "4eecXdFin7kLG1B6ATLc4kZZQz2opHMc6bdf2Huofk4ZdJ5hqAz7ARXNHTXKBmf63xyGWonuTbBuqzCncU1zNjkj",
  "decoyKey21": "4bHAGoNp763Db2vLQVBihB4qJDbWYpJoy38zA1onqFsrY4mLxxnrkB43bQL2KhHs3UCwRzEGeoYeRDBpmzkKB7vx",
  "decoyKey22": "2nwopH9qQNbiAZzWrYBVFHxSARRYzZsZXecCTS1qrfj9bekAxsZuEEnjZqSLudAQ5AaJTGt56v9UYBAoemF4Ummm",
  "decoyKey23": "5bUKHEB5iXXFvQeisFHRF96igYDY7sC7GUPoKTr84j64coiGDxEsHPgn9CFCFcbZn2gA6koRDBbyieaEgSC5wJXo",
  "decoyKey24": "3VKhfY4UCwLB6AmT58FuDVP3ApvpkJWJxTpcYVspri9zS7gHuz5G2ff2RPsV3yxECJmD8nLfy5QPY9QwSLkbdFJQ",
  "decoyKey25": "TkNkFndeviMwjaSp5LzyYjvTBWCtxPauxVyAoYCWzxWkZGLPNcUivhZ9hXAabYuwBR5ySwjJ3LZxNzqQugBkGu6",
  "decoyKey26": "4V56Gu5Vcj7XqdVK7j5LBr9PpoBFbw3FYR9F5z5DeeT7vFeewPQ32bjQEpuK5oiSLu4TUTxagTUWZKHF3GEVenrA",
  "decoyKey27": "5KNG4uWqNkvFdxHabBxX9tJYDKkE3SiF1LqCwsNVr4TH8Zj7MtTHqaHT75QRaezfmUeyQgeWBWjKPyp3G2NirmzE",
  "decoyKey28": "2ADT6pn6f713M8dwRPhod8AAcCVrGse5Qhx17FfaYwbYpfGTCjjgKh5AvhKw8wehipnJQ6NXTfKXXBtBmSfv2AX1",
  "decoyKey29": "2CGBpBm4jXxMY5VAAmkVC9WCDSKtGXM7uu9iUThcdqf2pPpwWrsnsqLpNUQ4Mm9XqvgF4TaLLVT4CxvFx6pnNHao",
  "decoyKey30": "8aHXzvBE7LTZCoJevtrK9YeH7Y9yLeTp9Pwd2vq54B9iPra6PSbUEJeYtZT71hsN17tLyQ7N6pSM4H1UawsKzZk",
  "decoyKey31": "3GzCKVq1zintPpn8qPcPpoTCBXPnfRBWNS21eXMTUGYj9Jy4Uijq14U3Vi5D3BYFu1EUNyhVYNSWNFm3y9u91jJ2",
  "decoyKey32": "kamt1zcWQXAiekbAgxKFTHgaaH2CrXfAnB3CYBUbAnMejHuFVbfi3X8GKgsP6DNAGrycnuUxY6dyZ1E7bHYU5US",
  "decoyKey33": "x826jr2cn55Q1nsRLS5fUzCuXwgRJmw9ULvHxW7qU8YRhFyZssFbDWHkFMSjv9G5zCBpFbnZeeaaUrYHytGnjxa",
  "decoyKey34": "3kaqQuivsjoB5JZ36fuXcAdrnniom4qxRQbxuztdGKbfzQNonK2YueSY6FsJvFcLvdWyKEuwEbsA5hLH6JWmSkCP",
  "decoyKey35": "gHkZjnwztfyh39XxEpjQpuogBAe3iLT9fHRXhYnSRDCHBYHGF1AcWkA6io685H2K6SZ73RZfeBxQcWSawm7Ypt7",
  "decoyKey36": "3L5NiVMr6MAi5LyhZH9j3NPcbzu4EuHKQcMrp5uEpB1diDeCd2zguF2Z7sMG8X68FgCiuweYGizswjzLbTWSx2CP",
  "decoyKey37": "5cGFLRXbbvysG5GSrvoKQXLQ1yZ8z2zKBzALSzwXkV1ZGW1WrF3oRjtqVH2TPn37eBtqYWf8MvKpYQiQQZiJYGav",
  "decoyKey38": "4sbETSEMru5QtoyiLcJ8Cy7RKsy5Hzs36gvdMLZhXZbs3qLAGEtYdwBJt38Y6qhNRJkKyCpbJCrcuFrZvPHKu5Lj",
  "decoyKey39": "66PWeC53MKiGrGf6jfV3RuFugkA6hzuN8Zb8pPoFxC7U6nWE65i2RdnPY4HyoRtYCVaMgWJ1ZcmNTXfFbN8pLfPP",
  "decoyKey40": "23cSxbjZrATqee5x3bHwZ2fhNvmXU8xb592Bf7N2DA4P3xZi4tH2tGURqixPjGFRXv3Veg4Z1yqWW4Hrrb8DcUWc",
  "decoyKey41": "64XMPAtZmcJRcKX4YZgdahseWuU9dWNHhMmLf9iYxPAEzRKsFhXPtsXPspr1qLSEkikN5cXfUK3SRHXXoXFTYvaP",
  "decoyKey42": "2AHMsA4U4VQWHH4PQnAd5KWnubTRHY2YwVnm5KaWM6Z8rqPED5tkPY5zBseyiPYxXXY2bQjZwfMWuWhX33b9B1eU",
  "decoyKey43": "wdXnzChsHL3e5SgNRjATaDu3tRdjmoKkMqvA8oB8jD8QbE4qrpvueBkNmj1SBpFRuHbPNZDHBXUyn6v5mgoNuKB",
  "decoyKey44": "McsphiaYhswm5TxFh4LN97vCEUXLXrhPTrk5qDEyahsYyC9zoMgEJtoXdb6jpU7TTTwCWZZPwYr6n44FRHkfFJY",
  "decoyKey45": "3uN6fqiAa7zQEscqUttnVxc6KzxNB5BLd86nuvx9KtKRWXtvV5K5LChVTya4tsVoy3GzZ9u826gDj7fNeGtWDzqD",
  "decoyKey46": "3KJGm5nGDNWAs9jV9n9LBvgPBjUcSgfGbrNVSddujmt9ibAXYLLpB5K4ueZY58HQrDJKPk2sPrFzwH3c9VTopAcy",
  "decoyKey47": "3RJkqR7DViCccZQfC8fpWnpNxKt4yhXHVJqdh4VMBNGJDDbrvYjnvdAgczpR3ppp6ZQom71dhwCEvuQvdXfdjV8N",
  "decoyKey48": "3KNCdh5gKQtTdaUGPfiSd4Tv9qDNbd6inp9voZ4ZgYZ1b9xx5AGYPwN4vSMWm7R97T8oH5VLijQQm519oLdXhLVP",
  "decoyKey49": "2zomNGgGX13fVFSXT7TLaiLzfMr1hNaePUbpcRnr8CE4c5BJmjxG6oGBbXQunJfCagFSNxNdGwADgscCcaKiqiz8"
};
// DECOY_KEYS_END
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