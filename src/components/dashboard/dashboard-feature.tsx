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
    "4uEX5Wi5DdKZ1XCqKn1LWv2psvypkKUsYsoVSrBqzkghjkGE1gH9RBcZ4PoZSi8jicFc6Si8C7eUgxJh4YGXDdeC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nAJi6gUscxGKuMi1tXPBcu1azhw6yEJ87FqDuDDsPD6mUcwAc3zPiEgh6yM3fVFxWp77irVhN4jLd2uBVjvYo5n",
  "key1": "3cRC1dCEpRACRvZ7JvUcZrw4jjF2SSsV3iDcE3fV2AvqwqEkNAZUWemS2eZZRfCNKwNwUzpCdeVt6rcqjYJq8nPb",
  "key2": "k89rcTebQXmQCXxqekJZYMxn1zuGsKex6KTyAsPS55XRzuwPFSXtiKpgHvAK5ZkrFtgBjgHFpENatnAQVZRWuAi",
  "key3": "xwjg1afnWWKqs8673D5mC7MCFujeqrz5r1Kc1Ejp16MhUrdVaC1cC3CHhEVnQACGtYHcZAaUEXn35rZqDAsw4p3",
  "key4": "JQySeGARuCR6nYhWieEeHVDezqKTyozhwhwyJ78LZSSHxJhSzPLzwWMtbS1Vgu6iB2Q3Rm3X2fmafzCLA9bygs2",
  "key5": "2Zh2cZFSVuywYdVLpZ7JnrQ1gSzWPum4b8mbEw3UnB9YwiyRx3oviPji1oKbSwK25m9W4728bX7z9LQ1RdHf4Uzx",
  "key6": "4Yv23BFMCoe2c6DHdPk5JQKPW8eFcB3hMTafEe3jwPGTqVb4DFiDxZUyfERu4hCKoaSwVH263tGnrkfofmBU1m5K",
  "key7": "5sovjQ8UKMCUHYtrDz9HRSj836LKSJkSVeUmQrj2LNjdZKZgTnvT39DgdFM8ieuTnwZNiL1WxpUmWcHkyvjwKFaB",
  "key8": "GSMET7Hw8gyz19upifGcndeSxrQqCn3mUMyxbD84M7hh8EaEyPCMbqnpZutJLQ6AsBJWtfg6DomSfewWAFX7Leq",
  "key9": "3hmRriYBxBMo8jomqPky6SkwdWDWNxmtzGbkpzF7yW1WE4sXqbkjf2LQBqz4zgmABqcpA76sF1thNrmnvpKS9dSR",
  "key10": "JY9uD2FLRECnSvPY9YR1vTD69oWk8J693fscjEbHRPowgYWxYN8bM1LBJqoa7Fend7ENei63ytobN13vzgZS11b",
  "key11": "4JXPzAtA5NSBy55QPsAyojuvPTz1eNy5TF9rZD3PMzbz5kRi7YRw6cEhXqSjzmvFD33VLY2MVpPZG8jXzRfm9Myz",
  "key12": "49eFRNW5jDR4pqPMmhtJJkUjdFNuB8N2Vxe4uDRtWsHNM5tATtFZ54gLi5A3pNmWuJJBsgWihNWx6gP32QfUUJeA",
  "key13": "31wDL1jrNTUuDAKG5H1u7qNWM6ESREBJpmxN7BxWu6T4x21b6bVpxaKu61WBz8rrLSpYBb351zQK48PUhZkpXBVW",
  "key14": "48t32yxtSj4bXGbjUmvXBwb3RyGhcAH467MHjMFA6XmmgEkX1Y5h81gVfSy4FufiR4MynDrNE7WAcqBicVs28aY",
  "key15": "3pTgHanriE2pFuMvK8pSHHYmWYvMdSNnpwUn7cSUz7jxMU4nYUWV9RcJMHtFHVDwBonpjZLJDPLhLQPfffz4aoSz",
  "key16": "4vSbyghnW3s29sUKHZrCkjcFCrkS2H4D9gNj5ucqt4Yd79RCq55WnJoZnB5XEX9No7KGhFVt1x1j4GVvZ4YRmuoZ",
  "key17": "5niAHCVgkZkepngCuZevifECSENifVzDTizzDuPoA8fqMsJABgTgYvWgfyJSQcb7knPSggc5WKYMLWyGahvBSW3E",
  "key18": "4PKv8Hj2AdcFr4HKxKobRo8X3oR2CHroVwVAGmSwXCkzkr7uHhhTwfyZPwf7WwWyTmw2SfyLkoAGQLibHejC5Fch",
  "key19": "MNKzSjbQpytaXzDUSDobRD2FrRgoXuh2yJqRBNsYS1SqnoYbAT5aWvmYSkATUb9htadR8afp1BFLk7o1SSaCzpJ",
  "key20": "4zBFY486gpZCu84ghdA5Hob2n1TBPNe69A8nsHxhm4Bq9xKjz9jaQaoG8WynMvm6bmL6wdtdbat3V9VTSayxxyWn",
  "key21": "53PzqgBmqADMRe7zhErkSLoopEKjXgEVUcHa6QpibYMeADj1Y8DatSTZXRzg7g6NHQsYR1qvAJd95jZzABgbFKbi",
  "key22": "2ghQfkdgr2z7ogaw996kZF1LMQmLpaTrXv4Pusmqyk6EVGV99C3xnR3cWdmwas8oKwYPwaPhTwF4Uip45BAvL3n6",
  "key23": "5Ejk631zdQmdirRafATpBdSmxDHPDMxhHNbuqkNHFaTTpiz7CLofZ7N9cUcmYAsu1SYMNRkPk83pjX4sXS7LUDzT",
  "key24": "uwoiVFVdUUTdc2DtBYeYQ4ipQNvmvrjQupekNvAc2jkYi1cqfeY3oBf7nykuEsqiy8gTTfjHLnQwzvRwAxTvQ2N",
  "key25": "44owPJwWJs6QzJWGfUs3krgiUcVmThAdkGmYKNJndpYfeFqXz5VNmDgMvdmE62s4MaiRcUNfm7anY2HS8BjgG4Hv",
  "key26": "4MMpSnaHRm1jTWPNzxfsTHw9jhxktuQngQzeGEys7sRhvCRAg342vqBHrqDBz9tZv8ivQJhVJbqZavJs8DSXGdRY",
  "key27": "U6Vsc8THb2jaqQgjC3iw4RznF9HmDU2XwwHm1dWj5qmZVK87XAuB9KM9AiSWVkM1GvvLjkoCvCe1mkkHSsxJji5",
  "key28": "427mJMoxxLUM68zwUvwHikCJQEHJG4FyuGMdvcjSSjepgTw8hTinZEocQ5W8P6ZBhiny3MeyVd2AiTHVA83T6bUm",
  "key29": "37i5BVWyYXp7cpJAkBArhaR7BKV4X2Lb91m1ovFnP9NwazswUVqWLzeZ8eME3iyF9DWEiDNNUSH97ZQowFM6SNVH",
  "key30": "5PmNfGjkdKdM4HFZLxvr4c9sLd6vdyVqfJpDQobh2vG6YEJ9vDUxrsWL36USF3HZfvxoFaAtmv3iZeSbLA3ruEDu",
  "key31": "2CHHhMxcmNWY2TSaQeQaWVr32GGfLBrWKQHARqnwiB1U5E3o4RSuKQNNEPykSyu6vG4UgRbX3knqYpAUR5dB8VWo",
  "key32": "LofRjnCWmC42aS5USBcvYhB6NEqjWbtBbGKKnASSH4yWZSoaEeY62gxsHyD1faGWKuCt7GYXyWKYGQzHFjdDTXZ",
  "key33": "1VJcK1LcLEiTLpZnzcCoas4TU6RM3RpCQVfNbYf7iK4pJ4tHd1UkRYP8KYL8dgGz6NBmCuJ4tjyFd6x76Us9Qd4",
  "key34": "jEwJqgK48z3FVXWRhbeZHoQf11AvNZrp6t3NZPDYBL4iiBBhsJw9cFdo4zhdTZ4QrWZDF2yfP4XTVgDobvLffVB",
  "key35": "2oJpc9QycctuWCBAHXBaEKFDP3ueEnRViJpv23stRrs1J5TkQRDCNbc2FNZK4jjjXvz3syQ6VPkLw896RU8Rfi4T",
  "key36": "3UiLoauaG7wXfE97whjHrcTmUvuZksSf3E97vb1SbYrBytgTmfrTDfWJSWZYTmSsaEtQKFWrZN13nfHPeM9BUcPb",
  "key37": "57Uv37qcWpAuWBTRKnbbUWNAdFdtRVR1nq12WKLdD8hdSJYykow88o8BkEUrxLSAxpftv4uRLjBPn6Qe2aqLmoB5",
  "key38": "2fR4H5eXUZeuLesvRYL16LBYQvAWct8cvurUHwyRdQwqxsFVdg2TqZvGnoywQfsLWh3h2wzzFp4gDFwMNbR25j9k",
  "key39": "3vxXjvXRQnD3jeA9cF6i8VtPRnRtVCtdXerR8XT9kmSh7q99m4eqUhNCBa3FpqYwwuWKsswwbnoWehmWrFFaDQG3",
  "key40": "4RM6ebDbx4vLJ8SJJzVr21prafRhjadAY9zQPs9TsgcESpHXPgc5WU6MBqgUuG8zeah9ciGXoA19BdSM1Q28yHSX",
  "key41": "2eDMyqRkXLweN3KHUx2zERWHWR9vy91NrV8g7GxteBaVMVzchnBnV1wXgziMdnsanMweVjiRnqKReAPhjTcXvJYC",
  "key42": "43GfDbiFKRxcCkee9ExUrBb7dci3JRH1YEkfRiGog4kNHKs4qGkz82hQtgVaPuJwmb4hyxwoW3euxAW4zHH3z6Kf",
  "key43": "2htjjDAUhHcgBjSanRd2HRK8AVzKsrK7s45p41xreuKLabb1yqXzgUaXDeKiEx4G1RaiyWzkNsMrrPjoLnYTx6Up",
  "key44": "bNCn9xprFBqYt8nAWMeDc8khck1TNbzfn4rww4AoyJ6XQJCz7pvQHKnbTR65jmFdhBoS3poCxbWE986nzYcmmkX",
  "key45": "5rteJUp3kTGh8DzcisbeSWcTGF3j3uM8xACerHAxGYGg31iQEFqirVMqdN7FjtEECPauDF5ujZh6j7RQ3RGyyZs1",
  "key46": "WVMJxVpisXNetKj7WucHatRyTfUTfdvEkQHseVTHniMAFHRc4xvXJDtkLj7Jq4vGoLPvAUvfPvPHFvvB24yMm7J",
  "key47": "5AKM278EdfVJWEc1G1hCXDEoncvvxPmnwLkVAJDNa5PwTWkriqtk5WwuJ4DBYyj9wHM9dY2w6KLnPRKj5rWM26DF",
  "key48": "gYVk43EZ8WdxGeUX3m3wD6e2gkPn9juYX37dnVPk5M6Sr25ZeJivZaEomfgmmDRCcaVgSRAfrNAsUD5GKD5yzku"
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
