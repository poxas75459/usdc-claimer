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
    "5xnmRNwEUWRH1nVBSyB7E8J9taQcuomkxvrYxGRpTzX3taHito9RHeqRe9qjtbVrZo5QJLUM22ShSg8gxhsg2nwF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pzRX78MNoueHA96GMPw9jC7SZqGH9QFiwCtxW3JPUW6XFSJxbEY4eWNaRv3qhQgKuv6pW7HxpUgtTvTryMLN1t8",
  "key1": "3ia6xDWvZKvfDtshCQH4tjSfVu8osF4VdhWcwq6ZzbvNn7XfK48g1B1nFkLPHMSeF2B3fMnJ7Vhi4CFfxkbiaXcC",
  "key2": "5Wc8z9moatcWpWFmjn6rwWNz3HX2L47mvKGZZ3AXioz8dyn9gQAXD6WNUYGLqTcoRrTu59Up5Do13fXfgmyyrW9C",
  "key3": "TTre1jvxQ2R9rvLBc3ucDoMRaQy8BPzTNwh34aS96WaqGpKBoD47N9jRXpg9N5w6dBjuKrvSSkRXSWZfpJohCXQ",
  "key4": "5fnGD1WPHqDeGxKxa97dNuvNn9tdHRcUW9JQcyrHiJmjmiWLDiA39KyGpvb78Xw31rQFmiBdYJfToqy4gJBUh6mG",
  "key5": "2X4cZ6uAsCKwzo423TDGSJpq9NyjfNrZafAc2nC9GEP1iM1czmaeAiPJdQ7A2EgnfBqNzDRzFVRD52Bpas6ZRhyq",
  "key6": "37VwWC4GccUjoD7Z28R8Wr2Zitf7iPv1PzkFTVko9SngsgHef6qQH1a2XvJe3WKkrGsfwpwoiZLTx3RhUe661RGe",
  "key7": "5uRUGQjECnPsS9LK2SEj75zyuy4pvzUreZcKAQCD94eUheNDVTaVacbP6TZHL3idu2xHcKDJE6BVsej9cNr4BuBx",
  "key8": "4JszsWP6iDvgJ8SYKkLeNdQ3noLvp2cBUE7zSoxdcRVU1mTQdwoZHkwXF2kCMU8pKK5eqZG3qJh3t7mVP3T5hnMT",
  "key9": "3uAoUzef4fgS5Kg6zS7JvXwpVJxx7hNfyhCMStaAQVCitGveyQWQUnooPq4ayo6yQPtEAPteX7jrn9QLwRibaAb9",
  "key10": "5ATkvp6tTTE5UURXno8VLKd9n8wnMNP9d4ij5mtFe77FUV4gHDEhvUgAsjN8ZS1KkhmVrHK7GQMwqWwcFnRX3d7r",
  "key11": "3onGzQkFxEy79HtaNaNmyfHEouXWLGKiHUVoVNagEsDZUSjCZZy2UaBorZWvHoff29JTC6wYvFZzXWYChCFQf3NW",
  "key12": "22q8UraUzcW9ALXmeGVCaqkUWzKK2zi3R89SpRm6ad7DPLoAPjnaxN9pbFUm6rJGK6u7fR8Mt8Pc1Uc2WEX3tRGA",
  "key13": "5AUzJhvusaPovCzin59zaPRAtW19fQxkc8oFxUK9ykxUgQKZ9XXRY59T5zfMaqkrqh5waKumi9ik8ZUEMSA6C3Ut",
  "key14": "3GtFcHeXwhMUunLuhyqXYTMbQLZvmDQ5JJzX7d6Xe1uNb17aMKx1NuneiJLHbU8XTteV36Av1LhtbKgaVifQv3rt",
  "key15": "mVkBkEWUF923t2cjkVKoFGcApjDxFDHPraq8duZa37df4wDTS52pgmCeYZ7iq9AJbWtgrhDWXouX7RA65qWtfmF",
  "key16": "4e4wouVmZaEKcED6KHXdj6i7gFdmsSBqbC6M4usKzjR5Lh1Rcn3twBkqx9uxNQ2hBTMN1r8yfMU8F77z2KKPUUEw",
  "key17": "4spnQTF8zUq4JJ4FzNwPK3Lz3LMib44aZ8W2qgu73YjwD5HfhjAXzyLNyiCRhdtABTfA3V5o9SjfjpvrSi9yeSHi",
  "key18": "443daoJ567bTaBtki3uWqN6d9ZCMNwnREo5H2X1rbmHsPL6FJtJcTvfzoHRNWkcrwM11Q6WXrYdy8k7w8pqW3b3H",
  "key19": "58ZUQ7KaySpsWjgsfagntzPxykP2zwn483xHLmzieSji6DXGihq5qW6xx8mUUMD71hD5b92wZNj4wSSXnL4he8TQ",
  "key20": "4SiBe41Dn6tgVwozvXEhAYatgkBeRypD88bs5GDyNCBrb8mqeGrvt1uuV5Vvd1LkMUxdDcRgkU91yUaQEVHamoxX",
  "key21": "5S5WxrK9ziJEg7XvkgcgwWQcfuodC4WAZ4DdmR4244cmhsg9BwBR4sibgaGowMLUsGM4mQDkS3itzk87sgnraPBo",
  "key22": "3zvUTHza25bjuMzxwSi3VihDahJrJbanKLCZnZVXuQuTDqUwDtxYuPrPqmWAtaedFSpoTvZEdBffk24Ce8oftYsw",
  "key23": "4FjNChFQLaanEuX46m7qz9CGAu7dfDaiQrPRXhi3pATCB3vpCGfZ8bLbkeRwsXxfDUc5P6bdxU9KCwcPpuwmL88u",
  "key24": "2DcVMrDKjD9hQPQEduy4hwCb8CihqYY5ukBbEpqx3KYYSCyYaV4ANTSTHBFSxJruSgihrDFichRLJBte7JqWqmvY",
  "key25": "3EjWjtyAhjcFxVTtV7pfYWZJ3PVWAPCdhbcQTh7DHhDWU6K3x4Dd68Pp5FVjpTvgSaXeu9WekcpZAwdNEMyhGX4V",
  "key26": "2wo3nfUmpeMrUuHGz6PBhft7uusrbfGnE1bmcqH6KvTvfBnK1KBQ9TGPrp862YdgrB3dKP5HTYQVTT9ZEER2VugV",
  "key27": "2752SJbo7jHiK4G4kctTgKYHYoEk8W86QV86GG9dTPEHRbZusMJHXtgpDMKNVJhmYw8Esh5e2mfJK2WCwwU8efc8",
  "key28": "5e2y3GFMLY6sVh5cPZc6tn5ViwkcvYR6tcmm3so869n8oZJneDeFf5GMdwH3t8hcJrfp2U91p7dkwcHqUPKA9wRa",
  "key29": "wpVkqBD3uFCXDpAHPKgfNEvyR5jx2FpQp3uFBPzMkwGjPrXjJPmhPNpTUs1XG2VzMZm4bk6xH3DvdrE4eotDiqg",
  "key30": "2vNeAvcE6e1UQ25cycDCHWTd283Xi5xYkMqmX3N9yaLTHQVSrryWQHrhcm2YiA3xApPJUCXskitDXcrhekdM9EJL",
  "key31": "3FGr7WsjidFid9hP4LZeMR4TCfq6LUaQfb7Qk2DFiBwZgLrWGNRxM1PW3KtUfUmgckRmjqXGQNgFLZ6bDhyfq3aR",
  "key32": "3gvgmRaL7yE3hbWELbuFfGM7pNyXodgVKZxMhDmxwa6pHzJAR2EVPVjSbmaRjNPzQVqQ4EuKp6FMgHc75pdfmS95",
  "key33": "Q9E8TVRkLY8PLBfnPwjsfP5GTP6B976vdgpaxDcVLRxiRQ4XCvx4PhpCDtogTqa7oUhv8bQDv6fvei4wGFPEzK3",
  "key34": "4oSkGfUq2B95fNReGJyncWv3XBAQ9fwsXdNUXtjTetu1nqJUJzzD5xS1xGeTYEnXQm3xfNLqYwSmH6vYKXDEd6Gd",
  "key35": "3qUhi9c2Pm7FXw7CuC1XNWjWTcpY7BB5Zvh1ysmywf8ionsBNpqb9eMTLQN9jjHwGFnQ5bip4f4mBfUmf2eeH8Dn"
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
