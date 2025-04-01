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
    "5kEsdQmqoybfLpcKArcGT6ngwKVBn5ffPQNAR3FW9wjw7dufY2W9bG9ZdAt14LcTHAeoCwTETPGjdGNANsLbTjeK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W4A7TUPt84u9MniqvXhz1eekbtgsL8ZHMn9eoAFNURENhAuohxS7a6RbdyFqwAE3gs4qdWBRmpHNpAJL2zcJF3x",
  "key1": "4tAPS8riziKD2oqLb9UuzTzcbAmJqSe6r9Vs14FrCKw53Vo78jc1msUJ4AJqu2vsobjsDPLvp4SuhQnMSyv8WPqW",
  "key2": "x7BvUcCJoqmFoyEewXKQt5kUYfv6AVSFPbKSXhEPELKxtQNjym9L2tvxzbHrrMGiyCqqCRTf63QUkyNMGFLqriX",
  "key3": "5dTRDoGZ7NDymJMsTHHMwyWYRnM3aQr68reiurh8JF5AVyhF7MPE7k6Javu863QpxRBk3ShqHmpysmvpgRsNKGWK",
  "key4": "4fujmWrLurp4zcE2gwqzkn5K4Pa1roQxBHm1czevfrq9CtCUrHhJU3b5KdAhULNTtrJpedj2v7uuUeuFFVS7aot6",
  "key5": "2inRDqMfYgn8m6pHdrQrMaJpWF9f5MnpZ67Wcwcexw36jp3Mz8HzedGz8SxxeYyKv27dnhkKhHsv3MbRdjWrFwj8",
  "key6": "4UynvYrt2mX6XbCaJYcZp171PSS3ue5DtNaXsEQC57gy9o7eJzxqiUc9kLHDirWDQyoB6HrqLYJnY34NHSQdbh6Q",
  "key7": "2NAmjRCWjULp9eUvWZcVh6dUzEDbTa3aYZ9LzvtihEnTBa2o5P98uGJU4F8YasDS5PfCbRChUkdNH5pNicgmBxG9",
  "key8": "2CENcDrNZWg5VcL6CqGStRmWMYdCE7jcrQSrbzFcCqpddfB7a5ZZkqwpLFLKyNaKmEoqi4tMsXtbVxgLerxVbDj2",
  "key9": "4UuFm85WaESvPL38FTwE8iGXDwwCMCJVQK7MLds2Wytcdy3MuMrqyXQEhWAadzrsqN2dLULFtnSHQnmRp2g5xjZ6",
  "key10": "qeScJnzGUNtgwB7EJ87XmzGUvYSN9v4yH2NSbQcMHJQnGASXVLRfyj3qZE2ouVB6JF9m3rDA393ZgUezk75k2eW",
  "key11": "qhUTM9dq13da5xJrDtStHS7P9ftf59Vd6mULm1UYWWcynYFVqUPV5hQvQ5jaDQTSEQ61ZadZoJwZBjohX7dESPi",
  "key12": "5Dom8xh2NGsTQjFUqy72nNQjcumj52VTkxnpdqt51QfqXSBiq4Ygi6YsZmV1Kg4etKF2W3LYgB1ntciJqJzypNkR",
  "key13": "26V4AD3oshnDJH2MoSefuFRMHN3iwCxdsuiZU87dx2aztyonKJfqk2jxJzTb9hGXk4SUVYZKjbDcaUFUBwghKFMk",
  "key14": "2xuET15gEKcK4hTnEJr676DvR7ntoW6EWKDR2HLmCbqyDJmM3pNzaUDPyGcpWM87RnPNJUBLWfwYCkPvzEfWSkJN",
  "key15": "22db7UYkck6XzVZFHAej5jf9FjdibEpWBDRt5TurUP3peo96kv6th97NVKF5eVfJ6Wd45Rf9vWM2c3hSMFzk1ygk",
  "key16": "5qzZ8aiqY6ceWBABuTzgRXxUUkdJjpJz2fWfuWUfyjieqGt4z2PngM5QR3ngiBR7gvUSu1nZdXALJeBKxdCFcLtX",
  "key17": "5faQL6cGxZwnDxMyx6XgxJKDGsuY5Eeb6cQ6bPNciw4SdmEFRyy9fJ2PBpkg8j4JLPRL7pVUK8pJhDSpm1w3EeF1",
  "key18": "63i2yqGTpfrRBC6ApzkAZprYfiuCF1fMEWBmVU4oNuhaHAgWNgU3qPrcGwocwhD5XsdyepFT85GsScwUYpZtdzkH",
  "key19": "3rRyqH3GUutmyX9cSKwcXSp9dRMsJkMCzFtLjf5GAfiH74Mbz1B2n72vVEgdxLrSGLcaFjenKryKDgD3BmhARMBg",
  "key20": "24yBPP2ueMrK7RXAQuQGjJ3SXfDFhJUbPDwdbaz8yjmwNY8HDehHPkMkqb4yoSyXb6zYWFTh2g92HLbYe1nYxokZ",
  "key21": "4guiY3hG2X4hcjdsfGgjXyTQanmEwqhz7xvt28y7JfvXtvz8iFvaLtbYH1naUGW68AZ3NQPrrb6KGbvxxtsMXYVR",
  "key22": "DaqREGx9VHrgcggkSdwaYjLM7GVYucRCSpWTrzKeW3pkTut4xSgUb75QC9cnPCHCgxpmhmU4pyCpwa2B2NjZ2V4",
  "key23": "4Gz3JdF898g2DxkLKk3VijMgjH9aG2yna8bQjn79zAXKGF1cgmygM7HCFBzCNfviUjrLJxG9CyRh6ARwzDo5Epmd",
  "key24": "tFV38fFhffmckYjqPzQoPV5n4mt5vfT3QyZY7aGXUuikKcKvDVhDuh1s8XXrr81b2XNh3B61s3nrF8ZP4hq2242",
  "key25": "7aDWktRTARLjaSiDfhScvhhnti2zcfDJzmDDTj8UixZMmv4PNrLgfckmMEq3gMSx9HoiMJV5WL81FXbjm3DNtRN",
  "key26": "4JoBdPTrofc82agKW1WpGP8Yfb2NXv94L67uSAt6Tfn3ZdgVqTWEsLWqPGHZXHe43U7vno8xTyA7xpkmhQHkopUp",
  "key27": "2JWdFcK6yXkTt7epcEFkyye9zCwmRrxMRDuKLQ7unurpx2hvJiNuvzSMAK211JyCuYjS3jh76qC2F6cCmkZHSpNN",
  "key28": "R3Vz5Yd2bmDNaSVYYfDV1uGZhSDhL6zFePN6dW5ekWkwexM6wUBueLaWTqV5P9mS5QRexSALNGZuu6aa6ArLHXK",
  "key29": "4ZFknLe5Mn4f75BJGAdgTycL3x52AaVDhnwsPqpz8BwbwaSXEE7yBpwVMbrgq8eTfpNP1exMpR9tfotTAmKHP8bK",
  "key30": "66ffKmVuezk6purq8nEJoHGteteSQjCDzZCjGb1i4UXy8964JiH2CkNMh6nJ8MH57ftCc4uHUNpsqvkgfzjmxm29",
  "key31": "4uxfzMTNYG1ZSrEe7MPfBvHts5159wWM4uk9go7ma2tCGm81ieLqTRhRX7rL9dJPH4BMB8fSSukMRwpWBBe1YkeJ",
  "key32": "22ToxexZ6mkybUMc96QZtUNpnaMQicFVs2fb5BJdZAKdn19CmpL99jg2CywianJJD9WKQzqZhhRs4TgX2XVPUubt",
  "key33": "MwiXHZc42xK2ZNrxY7CMmtJ4tXK3TrdryJRsZDVivjqsDTeSTw6cC28LPdWgzYrfyzxTEtq6emeDaJRZ6PQkRBn",
  "key34": "qYfJBEGwnd2uga5WXAQ6w569XQWUxbC46HF9gsJJqEiEznT2NVNQWEoxdYAmn65feLPd6x9ak2nrqUPr8dMuoh9",
  "key35": "2dFtjxBMYD7xv5KwacNtpFzP4k6sypJXLB9k8kryaAxDdzbReS1XTiDL2GPJyxV6dDTsboZBoJqgbDKhSrTXfAsF",
  "key36": "2RDbPfh4DycmoJEv3jbFVJLt3uwrHQ16VB6ssDekqkd9ABCK42bsSKVfVisFazaGcPDxAb3keGN9Us59S7ZtcNGP",
  "key37": "2Sqp72MkX4UFnQeBWRHwpWNev9Me7h5gf1StapaMfoMKdA1wD8PC9c9htdWvnVKS7Bfqe4WWY9zrR9fNsXJWYofJ",
  "key38": "4rMAFwJajMu5impAW3MqSYojB3wPUz2n2FD2c5ehnQ3Zdn7QC4v4hiTbriaMra7KpBd14zHC5miAwgPJHgsZAqhT",
  "key39": "4YV89pJSEGQU744cg9Ew1u2WkTAZKAwi4YxhDCnquZ1GFDK7FxNz1oXT6XYexMR6JmMNmPQJFA9baQTtPV3Gh9n",
  "key40": "3fvvasnmTAFDkh5oNnrh2PSXD9Nqu2LZwFRL2u2EA2QqNu2kxL8Wugp4bTeQdunhwzuURfcWu9seaAyZny5HdRSW",
  "key41": "3iSMY7jS5fEMJ2va1YvY1KfjdbpbPokJhHcw1KPjH8A9EtW2FNDFfshzjTRwPt4yoXHSyHdVtxAkmhmjzEPRqBJ9",
  "key42": "33GmPGzAHYByv6iHEEGJgp6H86bpsCDNNYenT5xo3Dfj5fwRY17L7QH7nPzmmVLLhSW3s9bgzgbZWtutC24JHZko",
  "key43": "231dCAKqCmRX3Sai2V6wbUAHHXa4rzvWi2q834a5WSc4QdiUi7Ag6zr9DacUMxXJj5iLot79NsFQFY8hg6GvcBTD",
  "key44": "2nSKNrrQg4JDJg4XW8QrqqYnwekEWcPoMBT7aYzqXcXHXg4v3o12ja2JBErHbC55END6m15q8vdnUr3EBc7p5Fhq",
  "key45": "zgMPDA9rrfnMmJyziuvcKigbyqEMQfwX93rd867Q4cMNy2yXGeHNSou2TqLUKmDnP2Ko3TD3DQSWn5ArRuSf32t",
  "key46": "3qc7vQAwitSbmcZNvvUQBhuZfHWMMksNQzn42oTuZdWXrNtwcsdqgouaA1Sej4uEbSKMhyuDigR5e8XzEr6nfuPw"
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
