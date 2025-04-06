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
    "2VehVVKrWaiFyuRFebA6s9Qit96njQ8HLZzgUU86VuNi9HxLYEKADCzbdswGbUm5nzVhqeaeJQtbT3zPvaAsDhhU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nZjwsVyZvfLtWKnp7DuuEAERoVpjp2qLzrnScBWAZ5miwRMwXYufhuUrJV33FEoDEEKgm6KA5wXrYa1WA8RY63y",
  "key1": "jvZNEW2q38Ae5VcPEj3oq1EYA1NTmQ4MDYAY8nFgvG5hD1eKeA3yVyMAErNgS5et5PNkWTxahuwLqJHSZvn14Hc",
  "key2": "563VAP5VVinD7gDVz4rteWnGcMcf6KFiCPo5KsJPhnVj6SrShKntzQV6ktAkJfdAYpZchBt3LF5Db6ZaPZAqQJdk",
  "key3": "5KrzsQxR1MfniGcQktoLdhTUqSGj4zRtwQWkM5cgmE6oL1dtdaXgDSoGziYmvnJ586o5xM3VBgDCoU41u3q2nNQk",
  "key4": "5utFxiLrE4ip5aUQLhNPyV6QYtXxiQ98ShxDkozKaqH2iLv7qU7TQjQ2XLwFHn6t1y3tokJBEBQX9YzrHKU3jBg3",
  "key5": "K2nWWXjZ3ZEGo64GWz2T9iFH5YCZwDT6t7CkV1cp1PiC7grVHiKkUfn3dD7Ukp7TMiTkCP49vhY92dVL3toP8WC",
  "key6": "4wp4F1PcbTA4bTXWSKsVFUbydZr8UrJwvmEjkF6xPQkp2X1gHGJXvWtRcGCyQcHQ4eiWEZfhqWCgE16RRMzsfLzZ",
  "key7": "5T1HWQTDcQgm8Kj6ksdAwZSgjnm2ZXMtqS9ypEmtBZqMfG1FqeoVPz6o5m1jXhk5nhnDRy4pRUbVGxZb85G7FzJT",
  "key8": "bGdmnpbMNXrZnYmLZCEKu5JAEKZntAtDKkY2sVbUbkxgQVmL6SEmP9ZBbMaQHGjvi8aZoYU2R9V5rnWek1h2kEp",
  "key9": "M7sboqPy2LQGus9K1yabRmt2ptzYEk7qCS7ofyX4FD29AzETPsfJrV1aSvCJMTGvZ9L4vMfJbQYH961uhKLzaZQ",
  "key10": "5TLHohb5XYSZPrjqeeWfkA4H7K2DN58SDmP8GGWyT3qeL8snPudqRW3q5jHem57pgcJX2uBYRMiBeWnmLhD1VriS",
  "key11": "2MmMuX7yHuboQUXG1Jjfs5zrcvKC1xV6s9jETBNPxzUJ8bwP7e25H5mHRRagyqFg4yo5EGs2sG8pL1ypR79YyoL3",
  "key12": "i2geNfHZbcbod2xBa4MAopeW7kLDkwsj478QwTtiUSxKH2EGiWvE7kGcmx4JA13FEU59vv3bFWzn7VKruvUgVo5",
  "key13": "4JJSXJyi4jcw69XmUvWsVm5wJtTA9gf8nDxZSzEFMLq87tSScvJPA8n7PLzt33JFeS3RhoUWGTv2hoLLp67x91F4",
  "key14": "31Vv8ampUcWFn1axYoEgX256rhh7dp9wx69vZFo7GQMPaBiwGA3hUifJsK1tBVi1YnXqGkMdLVKW3DK9sYKm3wsF",
  "key15": "5bf115XZNC3QdKC2dEGtTNM6YRrhoJMz5Ys9tsFTQiRTFaKWKsRid9Z9gDaTDoreymYSx3DtGX2wLXa4egUKwa2e",
  "key16": "4VgL8VWNTEwNZhdiCEsjBpbHj3ivmikfjzeriV3azLnZy8bb2NncJbkacqtRX72QCEZre6oQoMKDSzJ5X24cMbUC",
  "key17": "5M9XNPg1jgfbnCcf5LG37LFDvwTZq5kqcaM4EMvMJ937B9AjeABqokiEU1yy1MxppVRSwJKiSLerFooTt4b6zSBS",
  "key18": "5ofSugEm5ptcDMNASbBr8gUzCTYQ9gW1LpbRgNTUaRHMJbm9d6npkJ2Rv4FBbvtycB8sneHembtgriTzT164NEnE",
  "key19": "4Rs8W7GkXERhCYbBiXBMXby5dhemqi1zvP98Kcj7nbnjsmvU4BytRRdwH63LGYHKe8M9GW9chHJ8S78eyAmsxZaM",
  "key20": "89UifUmd4F6m772heovC5kWGC15kN2HRnFMQhxDT9peAZPygcP8tELFikrLXAaodZ8rgyLEym9j4zamfDuPVWyc",
  "key21": "XPw44mYhGc8A7fJwZKpfRqrnV2hpWJNmN4zAJSCZMg4Q319rcAtqeH51pm21p21vxgMDnQ7xxHRKHanN3jJqxvu",
  "key22": "3XVJHuqbqwZZG4qLQbZmE6Lb7s41gPYdTFLEHeCQjXRCAwK6i4p7cNMNRWfUG3NatLpTnGg3eWS7qx4gqVtxSNLu",
  "key23": "26RA9SfiAvWsBWXwubZGawoLEgUbLjYD22rUw1GVe5whpkxvhF9bqPWpnfH6y41VVTsaH3MbyCfaMziVeTbAzsdR",
  "key24": "5TnzxRtQ6NNnV68vkRnotgKW4kakv4JUp18R9KtKhw18gBfkzcB2DrNNYx7NenZMbKnnuoDZ3vgcB3tDmhq4MQyM",
  "key25": "5jEkH8jkNpX1h9Em2VCoRHUonjKZn4TxTQswKyejjmouo2Eu3Nf1pi1R9Era9FxYo99wRzgtGA6AhCt1i8twG84h",
  "key26": "4vqp8cYg4GmQr3udNuryq1SN3y4hQ3AZoD6nwK5c5zeVYFkLKyqEf7wcAWPePti4VPFZ75qBHes9r2vYt48p9oLy",
  "key27": "38CLT9hgu1W2W42KJUXbxRXHWwcxcz3VbgiJFGvoQR7GJTuS9A7G1xfLEKhaZgVH7v48oMCD7GdVKhdooAKaHEdp",
  "key28": "4XrYMN3EzRP92ByERo4p2JQXm6TnTmT6NcBveJqYnmQhqmq2ytS8kGioBAMbYdiNGnDPwE1rpwJHbMkK1W2yGxUF",
  "key29": "KPbxASzU55JPScSk9SLHFYdazrcXdzE1DcYyAcQVXM2AJ6sqyeBJ4WXc96bfFUFKNakqWRA59rNq4Czqguzxrms",
  "key30": "22UNZNbYHaGPmkrTp8HmefbViRnD4KE67ijnWJX8Bgk9dJ9Qspe26wcJSU9ruypcgw9cRx5UvSocNY7Ju45Vc4LG",
  "key31": "5y4Pr175XDSqzX1FraVegcm3Cq7sVrx1KjL6JsxhQ3YSh8KFxE38H9JGtJkgSMuqXxx6bqwkvnnx3F3suJ3NSGPM",
  "key32": "3hSPAv1HR8FXq3Ww6XoWrTyC2asnUN9bGXKoLvqvb7KmJgtcYkXXNKHnXnhn8gLNbmt8zcFGATbXMpkFPpBtB9rk",
  "key33": "ZJYLpzEAyrcN9MfQywQEbDkuhvpQJ1ZTh4QiyM1VB2msdFJEYs9nWXvEWz9EzCAxtcivLXug9nQjwvZSaQXei7R",
  "key34": "4zdtbDbp5a3hpoc6hDXcaM6yThdefdd7j6BcjFH65vQowu6DxACJR26mDHyT5HM3AeRBnZxVVgH5JPvQDvhaX4kB",
  "key35": "4LkbQkPVojvtnSMXCXuA4DK8XxCjMX1H4jyjZJjmaUMon6VMsTi2nbTNwUVEBdDMFJMwxv6hzcKR52w4fLwP7sDz",
  "key36": "4o4rne3vUFUUdPkavE62nnVCnuyPGnE3HJennSqMpAfHx9hbhNiAswhzW6CPJdHLZdtCtncjFrX1pWxDzKQNCAEx",
  "key37": "KKh6CojLqEMTeWzFEQejFs1oSC9LsBixAAphE2gTKMHiMNqZKkpaFC2SLM9QMXFthJxvhLDVa6YZHRoYEsu89YW",
  "key38": "yJ1RvqMSPogj1nscowTSPHwsrTFC12kP9XGHm5ZPGrEqdjmeNDqZ2jGiaGk9DQgBxxQxc6jAFMUMk449TPC1tWL",
  "key39": "2udVUY7REeou8GYbyB2giiooAkF66Hc2aY9fXdeYUNgRny8sHexcPtWC3G3617piuCB1JBc9o45h57WyfpavTz9m",
  "key40": "XgK5GWKWeVAWkHqJqk6fqGyH5gzJ5tJ9XexXYh9BvXtiMuWMEn6zdMPsGkaaDtetjr2kSbkkh3U2yWNbM2akmXK",
  "key41": "2DLEK1VT8uGVZZGGCExiUjRNbhgoYmLoSSWiYix5UAQhke5QBnTmuFL7GDPps1ntk4jdzqnhDNkZQyWufyb2dCuV",
  "key42": "2rbXCoWJcBt8MBKtz2XUsTbFcFJDLFbo2UAx3qzzCvu6TVkpHeLEWeUty2HeHrBfVtkQnw2f36zAgMBoFLdmPUmU",
  "key43": "4PVuX6j4dF3JY9sYmsJu7RUmfVF5GaufgPe6RifSrWpuPEqBCCPXMJvxJ1DtJjbsro8YSmn7ieEmZi31xarUKyuH",
  "key44": "4wDYmZuzp2toFP5KmADTCmQuqpVpS5BrrM7G1GuPJoH1TouRxFbs3jgAv3WebpChBwpnK14zyDPCaVXx4qSazXSd",
  "key45": "3jv9B6EoNXWSqGEyMRZQHPUAQ6ssEdqLGkwUwFhWQp6jj6QQLmP8oxMyMRauY1u135QYmumvf27hppD3PvGYr2e4",
  "key46": "3H9Ds1d7HpzPxcW7qFttAPG6vGzAaDJeuCRp3zdhSNBpXU4dPWrHVhGQfvD4btRkXKpHqsMS5CppTfAmRyzEtXgX"
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
