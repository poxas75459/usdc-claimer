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
    "3y5e6XhA4MFWpW3sKtjCpx2ckqpT1PAwzC7GvzbZQvuyaEnjKRSJPbUvvdHXFCwpPd6n93RAenzkL6bqALodJqdn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5umCqjrYe9igmbHPt3m3F4EU9DUaK69t8GMRDwBAg5V2LuRUJRM6MAG1Zeh3GGKm4oBkAR6aXwpj5Y7wWJnzHBRm",
  "key1": "4TLW3yFxngCrzqRadmBkS63n4xUeMyrAp26Waee97ECh3eR3rDRjzc6K8bUDdmXzNMzgfX4pNbr2FgXAfg6phFa1",
  "key2": "2DJvm7kPVQj4HJUi6WcMBRPDi4ApC8eeXxhJ5rUfS9xVbKvCaGe19JybsskLSc8texmkzj5uJVmvS56ThToK1JKH",
  "key3": "2gb8p9P378ye9XzhjJvcYfTG82gD4QmbeQHme4zUQtkCHZxWqVtuNhvjg8xT5Zhas3k9zojqnK1RezA1Zr7KjpKx",
  "key4": "54yUGSRg3J7YSvYGygGqEvzhztD1EEm8W19QUotV29TV6GUbdEaa1GcDtzkW4unF48jjFaa9Rx4HTuu3yCmZYAk3",
  "key5": "5sf4P6opFc2z3xTMaKPhLKeo2CYKAx9DUoApXw9NHUvv9TpAif5pZgPvVtJZt7Qwt3nYKBZm9qjNNsJoqKeHaeTf",
  "key6": "5wY4M1RiLe7SKSGQxTUtSvXkyDaJGVLe5LtsC3AfCHAHkkFG24mcsZvsNYiRj23snt6WqYxERmn44hF9AA4ioUbG",
  "key7": "4inDhS8oebXGPkkpbY53bY8nmhcVng2RsE8oGuLXJ4ZUa5wa1JsUSAqDgKNACHuauhfNS2DTSSrqhXg1RU9gzH1C",
  "key8": "d3axG3HQkvFCFyffTmMqEiMF7TfsRffCFw3vWyaXtojtL1SvGP3QoKfsqBDpHp9xrx3BrXRupasCVYuEHFrmjro",
  "key9": "5XFbYaj8qBaUBkQxzxKBC2gvCR7qBBkrEdSmSy8f6GAEJ9MCLAsAZQ91Uh8z9r7iTQ3G82KHWvdvFe5mS2oeMuMY",
  "key10": "4LKiKGb2Y2yyHTXnvDDvDAXchxcia2uuf9oRHBRma91vhFU4SUrwhSKe7pPFQD4oLs8TJy4JDLDCFgm1RNyjmM43",
  "key11": "2zKb8Dev5mnqYhuxJHFcxqJYxrqa2b8BQqVLkk8BEQZacuGumVnCGHuULGmq2CB6sqd15yVhbdLnJztVN39MVy3y",
  "key12": "5P3ok7XuHaBsNacNNdkamX1RarUufTVbA8iMpbwyB1Dcr8enqvcfhTK9v5BxjPVQ7QhfMQsQ3TrtWRauEzW9BrAX",
  "key13": "52ki6ywfUf4VVXkoCpjQ7Q43we4CzgKVp4bfysTakuiTV1prJpuu28bQetM6kxdHFGQgAEmAGKPZMHFJzZ8NDXmv",
  "key14": "3CnCxVzupHZUUWNMPjV1cBmnbhD7C9qSs1DAtzQwfqkbCetziKHVaNPXmxcqYxf6J1Gk7W9y9odBTwU9X3MtFvUY",
  "key15": "22FwFzspSWqGiP9SSmwuawkezi1QAgBq7jAbFHcX8pUtYGATDtTbgYJRwVaN141uNhP2jSdZ73KimUAC7TznRSLf",
  "key16": "4MZZeUnZWeNjxmaVCmyzhvckqWJqS2N1eN7JKkoTG6n53YdQqLNL33hAqNufFGHAgtBg5r7VSp1jAY82Jkmv5j7M",
  "key17": "3684yxarrG2owkmoNs2Z5zCzq6CjSyvVCrfTpVwrJXhrzdJoPNEZQ34Fs5kKZ4cG5tjLtXB2CqWQhJFHpqMq3oHi",
  "key18": "4k8xcJkAbPsES18mtCfm2qSyfw5jNsX8DtgSjXmb2M83a34G5XUFirxXiaX36B2F83RzXG3B2hfqJ7bWVMhZcgxh",
  "key19": "rHZhmYDKYp5JsadjqnyGEGcN99eJ4B3JUeMhABo5cPQGvrtKHGcVBrV2bu9Si2PeX1bwk6gufHgmHZX26AwnQks",
  "key20": "KC1a3n5LMxzDjTCtg3BUbv3h7n8kV2JwuFTKnjkEHQTqGYLbtsJpmAY8GQXCz25Ba7vq7BBNUwbCtBj2kPLjbcX",
  "key21": "3zqqsjuEmdanamsytU6UM7sZBQ8WjLbxHAwt3aRUqLymrpM5PJw9r4quCzrt1oDhDcd4WBsNuRYHr1hWAM7c7NNi",
  "key22": "whifwoSf69y6D88C2iThSn6kxNErMLAkxoPhsAQLdE6hErGs93NHWjf28hvPA1CXxLYGsZrhjjaB6BrvcQFgfJx",
  "key23": "5XTxsX8DoDcjwA2Rg8YL7mnLcL1ZuSWBFXM5JWugW6zA8YR5YfYwa6csmf24znD5rH2NF62aRCit2qUc2KTVDvKg",
  "key24": "2KuqhJK1tfdNwuZtw9By8kwCUNN2B1dQ21zEukP75iPS6yE4J7Pu1rSJWpWy8MDf28Cvu82QqGfpAjyt36h2x9p8",
  "key25": "CZLP7nE7imFPwF3PCZfGpYuJAXmKbvFXnTtvjHmUDjySwy9fxiPqmZc4tdkZoy2raQE56s3AdFQttzTdTM2g5oh",
  "key26": "BBfNucbYN3wgtZumKMHSumQaRdFJb5sJT9cpFNTK24VgdL8E7pVxAMFMJr7BKVjWZHXxK2xtff8TpPahbZxLJqz",
  "key27": "5u4XhJsMVeTrxBkpghKqcqQB51r8M3jT7rzfnf1aZw5W7wVDfxBt4ENESsoNRJUysAobfNAAzbwJq36AG6Xsb16j",
  "key28": "4CMG7tsEG7HCRdGNQR2feKxdbqYSpLWZUBr4vBKj7QEY2oQ9G5DNKvLXyvmh5VeHhbv9kv39ivK3D7TXoM1bVc7T",
  "key29": "3HHHTdbWL8uUqo9pTiqKFm4L2kFwcMZ9U1SzUFmTY4eJUnn75ai9TTGcdiUBg1WHPDaADC8rVxUPNap6YFxFwYxf",
  "key30": "4zro9dV3xA4FiPNJFx7CNgSfHbdTqL4n3bX4o7fzMrjVgY5RhXsxNWt9xvUnCFZBGwaq8dDBgsV2M2ugcvf5CGM2",
  "key31": "4JNEyHK3hwViSNL8E5Xt57bGmqzityVVn1U1xaXzH9vhELdbFnB8gC6fA454XUW88wqEs2rSQspym8R4ESNtCBsP",
  "key32": "ffeQKEy5qgbLfubQr6FJztoxKKVkrSZza7Z1muGtw5SGRaBsSyBo2VuRjE5ne3xA92w8Kh396owi97KTN63Q5L5",
  "key33": "TVeUF6T9tXzDLdT57tUGDiZeJ2YxnqR3CWu235GqSS4pNsMnQzgkUcwYixvoQcR8zhWwiC9DwjzyCgkN3y1hGZP",
  "key34": "2sdEznMvyycXzcVArG7bAhTThSXCJCHKTwpSfMPHyo28QcwCoUbbv8z5qdDqJcyLb2nSHGWD2r8M4tVRaFUPfEDV"
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
