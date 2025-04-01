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
    "A5Rc6iUkhQf7q6uYZw4n9DeCaCDQQrG8isMjr5dHb57rwS6PBc4KCsj19WfuBdhduDTiAgsAxkf4XuZHk9u6pQu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e6vcSEtTs6qZjMYUsKDd6bepiwuAbdZpT6RSYQg1XRFmzHBknKmspGB5sxaYSH8pDEmK6iTks8NVCA4cAmSD2fh",
  "key1": "4CT7UvW9nGNv56Yz7e1H8aBAMLPdp27meyVUiCuZGgw6Xdyzs65AcVMYZWyeYCzU4Y4XYgvQZPerjcMVps2eDh4g",
  "key2": "R3mDv1YEgFPKFU1r95UjB8mwqkW2kmDxW8tpHeviXkyJ6S91Az91KYHmijr5t71qizUgFZa53nAEgSe7ToPEmnT",
  "key3": "2o9uGwvqGhxTGXGsT9tQTfvBcFcj4XjZYdnGg8QnwCARaTA168H24tHchyqPGsmXPjHCVaMAPPdXTj57AEHkDEw2",
  "key4": "5HXkJ7yCPHiSd6FtqLo1oECEcBT5mH9w6tkxKjkDxSjaJ9tNRuUYAi1BTuXgpEER6JYYs3t4sCbJ5EfSUw5xXqEv",
  "key5": "a326Nxg4pEJcDJyC6BmVqKJizG4VQJkUGiWFqUvjTNiPTkMme187B8QTHbtVsQ64sKkjhdBQcS4LcJneTRYWn3Z",
  "key6": "4t2dgBDj9C9tgpsHg74VkprtEqaZkJs6NetUXfBbouCqYAa4XcrCphRjqt7w4HFw1AE6sMDRyiYeTk8QmpJYyAG1",
  "key7": "314is7UXnngbPTVrfkuAvvNqrrCaH6EqMs5W7z1rTnQXC2JRL97AnJ1fF8xNnsQhgMM6si1gtS84DRMUnd2uj3ur",
  "key8": "4G8iAF4HHeqzMyx4MtMa8QCK3sML2DZQ9zAEjqDxXVVvqVueUSpTrCSayuF2qDzEFvPAp6fiysiib1mv9z6JcrvH",
  "key9": "5Yetbz4mb1qXYAxK115fM8feFYaptidUZwznVbavznTAp1rtG7ifcJrHSw9qYJdnrPCrioRWQskrxDeQEAYrusS6",
  "key10": "AvfPuSSjyFE2aEJH4AZ126JWu6qyGSFUCba6HpwmACEJR1x1i5t6f6VnKgcwvQ1rLdLFN2gy2y7fVbgY1odBMjv",
  "key11": "5VXvFTuEiQXbXgyh6kXLgK7vrJCjqR2egaTPoaCqywiEiE8cesDJ8TvPNTSj1sjDkhveaxMwmRJ3d2NwNco9m8PA",
  "key12": "2nWcpfxLrymKXfWJ4PSKUf8VTRiaivZGvnponbaA4t9XqmC4893aTmUbvEPEoptvHf6EtSmtXUkABZpMbWL73o2N",
  "key13": "2DLdywSNEsZZVwZE7z6HTh85jeEvECrG2d3a7MiopvRFNg8uDMkEKdFCi39x3yUgEsCnNL3JHGMicQsUofjwXz5C",
  "key14": "3fzXNi6RcD4vU2FG7otZmpoX8fgh7Q5Dv44YpsmxoHVFfktwKV85LFUwNvXHaASCNM7u9btzk6YjdduTWejTByKf",
  "key15": "2yASXM7fn9H6BdjQFxEW7z53X7mBT5NDePGRe1B11amUqhrjMFmq15mjM6RDCGTsX3kNs4oNNQVJpnr53h8WPW4k",
  "key16": "4sgbjAFHam6id5c1GnM9FyNVgFBHsP9LBkDeCJgLSSKRqwTs7iTwDxgjNYLCU5ScYc1994c7i7bKUHSuVPHaSQHE",
  "key17": "36h4aQXdBpCRPfzhahUjCKKDKR3GwHrU35UjaFabzsA5nDx17DoYBwXT61wA4Ne9Saf2mwenpsnHckyKinDN7zgQ",
  "key18": "5nyakuwaBbCibeaHdjPsXSYmgpp9vXcSi7RAVoC4C5Vn7ygsVxpBvC9W1gTP9AS3ihQCjp1rrsv5eNnQ9EbG8Si6",
  "key19": "3cvX5tAw4j2sYnXGES9mzKGjRJnYGqvrcLPyEZAwHtM7rCE1cMLTeu4Gx75mhprm9aJRRdm1sDkdHJBVkHY4y3cx",
  "key20": "5mfWyKbUd6vwG89tFN53aFg4c8Ga5Fds5NYdCTFuQyqY4q8NhNP4Uy9SRzMchApsqKSs5w3i6Nvy318ciYezWhdd",
  "key21": "2GyJbCmVn4UrrWSYHvosRU8fRXMWUeu6DkZe672AhFX999Q7w4H9SJavC9mB1byHfGcPZbrFUL3aP7ATLTFCGKKe",
  "key22": "yaWY2tqoZeRCDXk7udXbjC2KrVrqX7xCPmJFDNACrk8FdsTviDJ1jAVteTBkaAKcno7r7k5oVKrYzkkgkpvf8kj",
  "key23": "2SFVqzmzoehcmgHuiBPNij9PE249QpZAmCMsxTqcB9YUhew13Ca22MKsW4CA2EVkHHPdATjWprxB3qMQnvCY2Wio",
  "key24": "4BtZJTFBN6DRwi45AP2ZBKgeZRZFpiGvLTnWk4HiZx7YofgMpDWDQhj9CE9vedeoBfQDKrhzBM8ScL7F1C4j5FrU",
  "key25": "9MZGydB4qGyRDPCVXVdBVdmA4T2vv9zSCE2VufjRgdcKJ7QrHh1Begbpc5Ja83piYx2ymmwA95nfxHerTQ9F4vd",
  "key26": "uNUoGRo5Vgv53gvDADDJNrTsphABEo75g2zuoMBcJAHQfM1jzJfxVmQMEAYoogP7PqnZH81w9oHnXBritfsWQJW",
  "key27": "2munJMuRu53MiqTryTqpMXi8TapbcjLWw9WysMiUf7eEyHiFDXWc482yC9LyevnV9AaVC8GJrmfF29uhKmQ3vS2t",
  "key28": "455wAJ6iD5hGe1BXcKYCXSKJdy42T1L5TpMXnSn8hoqaSjYBLxdDZSdcLQoDE9AryNyWP7aDZT8umFuv4XjbDaua",
  "key29": "pfAhaspgzBVRPqkNd3ggk5nrfVmYcFyTDy7f4NB4ELf1K11Mg4jQss56MABHdBTjJFt8h14zrPuVkfwkutFinMM",
  "key30": "49xKodAhKG4aFP9kAot7cj4WDV9dWo9zNdntz6xVwKEE9zj6q1wRpbUKQorrySupcE6iiZKwoCNfFrBJcp7v5UUp",
  "key31": "4uqKVL5NM1biUbhrxcq1V2veq2W81DM4Tt77Jyd9wXkuhWafKLPHmvA323PKr2p26bJgSraKjxVmYCbFVK9BPvCa",
  "key32": "5fzXvRCpGVWv6Z5UUEeE3MqiPGFQtSx5wV7zRw2Hc4Y1pXvErUwzkRpAPx4WHSRu2ioL8WeTGNypkZ9CCc7uS7pX",
  "key33": "bhyCSsqRQWyfmayssZ556AT8K4wmnWsi3wojE7YJSUNuooofhEs51kaASPSg3sEahQNi5RNqeFQvHUWJX6SeZud",
  "key34": "2o14JXVs14uKfoDeVxef7dKyca9u69JibxSXMGPFzcmNGqsUXeBN3tUQVzqGmCpbfPacMxEZUrFZLhmA5nCHuJ4P",
  "key35": "3HTuf4rfbybtto4enM1BAA3EQysG1gFHXrpWH54TwenB5AWKTzkohLmPGWLvgTbGQTMQdFYECZTw3f3zK8dtXJdz",
  "key36": "5UBiRAsqbgLZnjvsUzUwurA1j3zdDH2sPTaAWYqG7zkJC8dGoU6ZMzYbnMbGvReQxaTf1TFztSG42RZ83k2dmmRJ",
  "key37": "4xTXaMpZ2fEw716YRnaAdnPegSZ3CsMRyZirjWd9qJUAnSZis6VahktcVHq8iSxaFstpuPM9AGf36B2LN3rLw91z",
  "key38": "pitekTixRYspQZWXjfeva5ugtzJKaiPti7g5ZuZnCLDT3BEjCxr7UZ256reJHmT7ANdX9e1fFbonmgZSfLJ4ap3",
  "key39": "3BCWzjRdsn9ayCfPUj8gtaHXhbyyatefYbJ3GBxKJ7Qdimdv6Zsd9qJTCkpVKALTKQw9eXs25h3f6uAFWYh3A8de",
  "key40": "4agLrVwcNnAVdK61qjbHPCreXo63r3peBCAKZXGUYmWNaqRYzDFb9f3wwihpPpiUu6favQQ1B3beYVfFDLh9GAhT",
  "key41": "43ARRfKesYs4NJ7pMDLQRh7GLQjVKrskzdZeivpqcPK2AyjM23hW2Z2r6YsA4r8TgYTEYaXYr3aj8GZbCBLvomvx"
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
