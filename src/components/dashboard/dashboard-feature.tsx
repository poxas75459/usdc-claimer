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
    "5gQSCVjT6MsMF1oiQLQQT6B7HzdQAccDKNTctpfe5F5vh4KpfBdW8RWFnwPeVu36akxzHyHmJcfF6GhyDuKWxpxE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36cMYCNH9jyC6VBoXGax5KeRD2TuF6ckEBHBpc1A4BX6cWZEtN2Y2LspuYyUjY4FMUAMsbBrVzDJq9sgARpne2Ce",
  "key1": "rkZuEE8uNqvs1cjquMxRCgUrmHtDo3pRD68wnZJCiucS75Fb195eZjymmUuJ4ZeqSDaVsxbCY6b7QiTEm1TDHjE",
  "key2": "2TSyxvrHoQQ1AbmEYmmZq1nAnQNY3i2UX6F93hsj6FHcV6U4KiH9nyj2fVePnjzz4VtXVvyTKFUmN5A6T7qV4b9k",
  "key3": "4VNhN8WDA3oyE1CPmGLV5XDWPrDMKLTxLf2Jpj4WP7UDSoQhWgNA9oHAL6x7bX6TAn4BNCV8eQ9BsMS5pHuhHb5E",
  "key4": "3iCVPyJ7Q7qZSAmXkWGKw5GSJn5L3vk5MVVZYbXf7B6nMhLUUNG6ummyeeCR5jbCPQADq2vyJd7MjYfUe2sBmuWn",
  "key5": "5qKHQxeMmDRzBwK9u7NrvSPwn2m86ZEJ2gzh9gUunjqWwwsUhCGpgWAFDesGa66anQ3sf5iuXFbna1kG7JVmqoKR",
  "key6": "47JFQ51KoZVUEAh8mxzMq5Wqt8EudSsTxnSF7V8Dh8wS1bT9QeHt89Ce1Urq3KqDrNyKJwvCufruZkv7AtuNiAAp",
  "key7": "4F47ECeBwYz8zVdTSsPe6kkFaKyfGojQSuF4DQLUrk9pmMZv5CCeeQ8BMTebNA5SSuGadYK14nYfEZFnroacg1Be",
  "key8": "5zHhxRg1yZfSiagwVn73UKHxJss4TsHzMfjtzRpFWibvfaAPeQr1qAx58FDsqDnExw9avyWQ2MKtDiY16E3WkT3V",
  "key9": "3iV8XqzH6qwbRpVmw5xbUBH8jafCm8XfDSsSejVjjHmmsFMDPUDHmmP4QG7h7Wtn5rZB2mB9dnKv6U8ZbvcZbjmc",
  "key10": "5JsQKAUbJ9qudzi6vZnn7dz8q6DcVHJVEJtFYZiz4MiV7XKz4ZgwBphqVC4UA2cnUzNDCzgmhSoDAMtGqDG7SafS",
  "key11": "P1AFspBt1tDThxpSncp5puQQ5DCvzGokKMM3tUz63LjQiW7oojRng3kdtXy1HTmdZqmqPkzbJ6iRYXLdTXNEWTM",
  "key12": "3UoUHgzwZVNSQBMv9Mt7NTK4Y4AJzR9kvAm549a3L3ESUivzuYCBxJFHxohF8FyJRaPW2SSXLHCPntFnCghzYmjh",
  "key13": "2bFoKShtGtK1eF27KnpozyXkW84gAREZacc4QDtaV3gx8C9YJ8MHuUhy9fmuxJV2PkU7T2Uspw8Q5sqpqHAEs8VX",
  "key14": "hR45zw6YscXz3TMzDsXcj9obT5ndyWJAz8gs6JFef18qJGfw9TPJVJ3x4E928n3qmV7zDgENJbv9BN2D7VeWNTf",
  "key15": "4eEu55Ws8BPK8EWPjWoToPgqwgCg6JPnB5r48QSnYAZS1uqmpxi58Somprq6AuvudFKxjT4XJAwU9ZbBLGz257tu",
  "key16": "3vjboLfHKt5ELjiNirSkorWakgS3dByFBhVxcrReSv8C1owNMVUrjVg2iH12e9kKBavP9SowzNMz28nszD5BEi4R",
  "key17": "3F6hXJB1zm62GsAaGtZF9g3uMdiBediFyy9D1Rzoscpc2MaptGHk4kbD9RxhKrv7tPptXzvEBkzrPza5Zp65MaaM",
  "key18": "2z93gMHLJaf8wq3YuYjzbMN9mwN571m7ywVmCNgXh3R65k8JzJbXNVi8VyZxNLEapfGndsvckdx7sS2LYQZx2was",
  "key19": "4eZa8aMN1r8fPHHetWgarQzbXLA4XAGBxmyiR2NBuy6MAzkjefSc4cKijD725cygF9KxzdmydDsZytspHbUggMZm",
  "key20": "Cmxk64VMR7VzhjceBSeAC3vJpvZqiN34RViJkARYY99PKo33dVhtYMoTrw2fqFHh6fJgHKUt8suSPTFZ24ihmu4",
  "key21": "BdCSKx9QheeUXWhD7nnPrRvzQhGbGuANqu7vaA3eucNvUKVjqB6VM54cWHA2AyjoghSTH7Kdjr8gjan2267YDwF",
  "key22": "4iDiCkGCEtigXwpTLfQKPQU1HQuZ55AY8Ec3uSLswpYt58jjQ3M9Z1bQ6Lh5B1uEQbaPqLn5Ggs4HSvLgUVZKv7S",
  "key23": "22ARQNLj1odLV9o1dpQfS9JQWEuhwMCUqsRvQ66ddb6UrYkGAvR1BQN6aUoGDYh5YVFqgm31zwQy5bFd4Ui3Frm5",
  "key24": "4DBSf2CgaHymgnJ3vGE8tk3f93gsbNkuqbN5Z5u4ZckBf4CEbfecE32MTVWbVWVKZDFSy6UZvEGjgQkEZbRh47k2",
  "key25": "3dL65QuqttCLz8ZXN5NCbpd3f5Xy2vvU5GP2L85CavKpXmA7Dda8vdFVX2F4f4Sk9b2ts73iQd9MiiFw1kNb2Sns",
  "key26": "3dEkW57pZKb8Q27PqLFCdgYeki4DH5GJ3TWAxZC1eXLQWQdjdZ5Q5GrKYc6HNDxE4TpveBaH83knw3axGvK8p1YS",
  "key27": "491wCTgc3VyuBB75UtQwQAtvDGw168iDHf7gA6iPkFACPVns1BJu8juhYCvLA8suKE1T2Ewg3UMrVf9Ri5PoXVtQ",
  "key28": "33xdjFxe78rREktgZvYgwwz7aSjQvMANed2pKDFm4FNJwiHWky2yoo1STJg7wZdv6NtcvstgxW8EQYtxE1DdcMe5",
  "key29": "WP2rzABqJLw1GmSv7QWGcARYDpt2zdyPErFyz7DFjd4jK7tunrPBF7BxCdsie24eYubVe141jmiKFQXSvSVt9CX",
  "key30": "3AEiu2fvQxGULb4ncQgPD9zD4fE4KwuRedfYPek3MkfD9Dhp7qkxFG4sqguwdZy3Sv4gSWeAD3r4DLMGvDMbPTRV",
  "key31": "4Vj9U2w2KqgStQuYgZrZUjvB84WmPfiqcgSUrWGap8j9qh5cka2rnSZvBSY4ZN634ALgsqVDzmSVVZxwNaiCsF9M",
  "key32": "4yW9FChhYGscWm9wQUmsWJoikkCkCvqHa4nRcbPUcAHSkSkY4tEVfWkLgdMdpmVV3g3hXTxR5SHGTLevXGLVTxq9",
  "key33": "1ox1WEhS1RL6yUWdxFBMgbtCRDnCLMvbcayLxeWo5BVcwVirLrEsWaip1T92Y6vJfnV4L16Z99Jgi8gdCNcPJLN",
  "key34": "5GDMYRcfv3JgUdGUh3N5GfWX4Cy6VPGBEtqj5MnJ7Jzdg3EHG6PTSXrcB7S3QaUFkyaDzWBW7x51VkkXushytFtH",
  "key35": "obhoBYoyZWGFReTkjwbYdHP3jdPkczDw9gvDon5mEt9BBxCZgjam1f5MSjseuXAKnSDL4ypDQirgxLEwvVgzpp8",
  "key36": "vMaem2zc1xmvEFEAzQj4guQWt1nr4TfrGRqkx8vGRGsWdZa3PtutyYjTndDaHBxY1mqEpJPuyyBdagrS1yZrZY4",
  "key37": "29Q5HELy9ks3ztai9Sca98ekfKojZMSeYFrwe2wUYbPbvgpzfbbFskxWRkivFYBTa8nspRWLhSAWLUr8qRTzaCkH",
  "key38": "5CSSUb7pLLxREX9YmokT9zd5reTKXHLP8w34MadqpELrYj3VY2SkTzVNANUrFAmBXz3aVEcVncDw7fpnikxKmSu1",
  "key39": "3Z7jjn2wmLb6QeGL9BzVLUaqnusQMPiWx3CBrqNwQNfAeYCi9WDjHr4UyZZvQtN8hRPkEsZUvBCqZjfVatJY3ze7",
  "key40": "5SArUgymjhCBPrevNa9EL8BZGzkoNez8GkfDw3mf3Tajvj9xFTbn9VU9WfeAGCRoHLqyyHSreK3DSGv5jog43DLA",
  "key41": "3SRqRDfd1fTrCG74RFLE6f2x7Wqky48v1ras5G3xw7ArURAYn2tgiZwiys4Uy723LbFaBCkeNgqcaKkUQbGiYNCS",
  "key42": "2RTSWc97arg3oe4tiLwUjwTwPnxmHFbQB6ZbiUmnYHRf4EVY3Ep3v5sQvwBomWg35S8i7Kt4ZMDhFRdWw8ytoY3c"
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
