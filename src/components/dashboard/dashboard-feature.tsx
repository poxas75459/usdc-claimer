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
    "KqEDMSTYviSQRgpRHQVYd1bFrAh8Z2GiXonQeyoSBSW4nrgZ5T6r4KHpgNtHtR2fMYLhK3rnkzMvwwQHcFHoPm2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RgAkgbGWLxr8aH79bLN1irzxXHcTdgaicLZ5sPL7VX4gtuWjBe7EsEsjRztbe3n5KnmJm4EhJY366gJrKkrJmuz",
  "key1": "3bwd3tYdgnGfZnV6qTKczkYuf46yfkHeiqkUBTRhc4anEnvCEtMdU8NVYg3yhnzwHRbioQwxUfAVFpyopCvgRf5t",
  "key2": "5R6EZZoVz43PRUQ7bbCjsgiMda432Qtb2Um5gdXmcMe36ZbL8cBv6trcv3X1oBkvo2QSg9hJc4fP933prCRu4ast",
  "key3": "5xaXdZvfZFB2SH1hDiLUD1CkpvHjFBKnjQRkxPP3r8kXoZwUUjgkceqPuauwMXpsM5Yx9GvEz9QQqhbvSYe4MgEX",
  "key4": "3u3qK2s1siSQXf9Q1suF1tV7ZfUrwS67y7ta81UC2mfjiWa9SocAqYEBhKwaZHGeB56C3i529DXcj1BMzgwHPHT6",
  "key5": "3LBrhf3ZuN9eTyHkr6ozGZ2G7abXxC4vgXV4r6wBQi7H7TkcbBbYhtUQQJxw8i4UJbhN3cWTEkYs2H1KfYunnMLL",
  "key6": "3Tj1v6tdknMLYqLUeUUA3XUaEEJsd36w6hZKYKKhVHTVG1G9nxFbkkgYUEQtpbTNdACKfYPYpMFvHS9gpb7Sq14R",
  "key7": "2j6PR56ngRJFZsjsik5zZjARTuDWaQb5RitXU65RQJndX4sn1GLNwbbZAMEUJeU9pdMfC2deU1xqZBBPBNAsa1Fd",
  "key8": "59KvMJaQJdK5WSwCFP51aPwMdpRYGpXmcVTMVAn1vKPP6yFPpiphUVCwm7DfAuMG86S9bonM92dH2vZNMEUg4uCx",
  "key9": "2fuEXp3c3kjM4qTXodWJFbViB4FWMKrCuc4JyX7K9caopr8rCpQjq2nJozM9gS7uYC6zyWai7NhS8HRBie8Nu6Mh",
  "key10": "3LM6gjhQ3NQ9p1AdnxuNwHTpdQcswcT87YjsnsH5ssBnMigMEWUeaURbykJorWEQGhAiNei7PtW7TW4ySZ5KXkkH",
  "key11": "3zwGXWhnEs4N2CgmS74rAvPBqqhRwxQivJsRgFY2YJCcdSLEaqpeqDjpvzg6urmwiTMitTtieFKkbWb5XGaVCXVu",
  "key12": "5M8gjCFdS5CDSpeS9tJMFZryGtQVVSmJXRWuokH5XpEELbQr4C2iyHWpNRCK8MW7VznovHYLnFxEzaX4aP3WcYjx",
  "key13": "4QJmZuQbQEsj7pZR6rw9uTX44tBYoS2wDYcp55hdKjbs8W7NGSnxbT4xC1LXx4iwVuRUiXiaxnkyX5fjuMWvTtzN",
  "key14": "5fxofWiV2Yhxc8kC1K79nH5jq26BVmxhti2FkRMedPJgEDGnfN9ae6CrQUc1rdTSNiMf2gbkEHCyD4spsRua4zK3",
  "key15": "129PLYiHCZLnHHQvq297AetoYqEdyQtq11w3syGtd5eaGFSySWsY8QnyQUJubs3x1Gp8cMhnkGz6UW9w39DbR6Ae",
  "key16": "2TXTsFAp8yfovdHvEnUdqjRc45tiGzEnCY1Vp6GTXjrz5H6uSSgJWGvnTJM9QawdZUepMzNHJnxjYV4zuzcjt5xA",
  "key17": "dXAKEUMxEAq1Ygx7ek2xeQsdwsLKAVFEnaUcE57ezKDgeSxebgiqzCW3gVCSqzkFnj2cZv8DbA68nXadGV6F5i2",
  "key18": "dzy2yhtaR1beHjen8ZVfnJEZN9yd7Qf2oGuXaR9hacYJiZ1GgfwL9goDQmuKrjTwkrpx3vYKFSZCWWjNJTxdTF7",
  "key19": "2PB6z5BHB7zYhZpSDJHsknEAMLLVSKJ5SMUuHA2sTWKu1ugZcLraAsDYK2vr2x18w8QHivTTCNr1R9bbxegKyKQy",
  "key20": "3ZjNGhaaY6HRszk3K3o79mmwmxZCppUiy5RYyygJaQyA8qmHyD4hrc7qRC8UDusxGBHLcLpeDd4P8qnCNchZMm1N",
  "key21": "5EkY5CqmA7a6518EscYGnLeWh66fvv98oc8DKkmywiYAYgiDr9na2zPoVVKsQx5YJJkrXaDg1kjwwC9uUf95KzdZ",
  "key22": "2nXDrx8Jbd4gEtRYLVKWXBLvXi6jf3sjHFDwJi8vkkQc4bEBxDMcdMiiJgysT3dPdm7vL6GeSWtkFpFfQpM5vQfx",
  "key23": "4UBv2NGTwFU1crmtBxF53m6TzeVvHhVWgaYhSQXDfJXAeoVp6u79b62q2WnjvUGgMtZVHYYNNHwPGziJLb2E1Duy",
  "key24": "7KibbJgEx7P8ai694hmxPhW9GVseib9ytdWnZBVRMvN5cdZxpxwNg9droFz1f7gddGDttf2awjURUjEmwBaytNN",
  "key25": "5feVHiVYKVzGwK6CjrDTt3X81yLrMsKxSVM38aTQTHdy6JztT9BdjXEsB6FS4VkzLqQiqTNuF9ZAvGxMo1nXfdtE",
  "key26": "2TbAc8PyVRCm48h4LBDy9B5EpwvF2BTjpdQz6Aq62ZoVnr2PDNLfajF68ZxmJre1VArSMHLnAcZ8FNiJ7hPrAWyc",
  "key27": "nNXZ4f5J2k779wAtm5pSx9DnJHeamKjWH8c1yGbzGpgYXnjnZf2yoUbXweZrj8d6eSrHVVQVorVBjBYE3L2VUxj",
  "key28": "5bFcpBA81wbEo3i3HJ7q1y68GLKN8efyQFw5uQoGzFcXE7ubW7bCrJrvVXfa7Yw4DWbvGuo1fKwoEdMvxbH5zBVr",
  "key29": "c5eSmKYXuGJ84swAsKJ3hT671kkvAPp5aVc8BZrCgrYoPxwoW2jq55f7LSrsw86rSNZg4cibzu86XBhoerRPtmS",
  "key30": "5awPX9Drr8GiTJ8XqAqF2ZVdzremHHr8nq977g2eYVyHeHSEyMjHsiqzmywCnH7bp4wkk53xU833pgFHswFbpLYp",
  "key31": "4dFJ6ceowAG5VovEi99eyRUQH1xkPBtyRdsd8AXFVvE7zUhgAnQwSATxuZXqKg7ZkJKdsRd75nbHyFJY9JUofx7r",
  "key32": "2KoYaeUUMVNmk8LukVCR7ui9niYBoxZCHwVRnBCkvxthk9earChEVMHfLKzj5AaZWB5f7Jvw43AF7odwYb9GdKu6",
  "key33": "612Rf34wQ32UsJTyfxaw3bpR5ThtvV1w6HLV7P1skqpy9uwvct6tvR39DsawRK8GbenBdFHRaJJWXgcUbu28N16X",
  "key34": "5CdGg2CsPGDLgUg5TjcvRPmzzDHm6suY8YHJ75nsXmcoebsxuZyWYhPHHoMBgeCuEBRtQ5j2qh3JQs96NJB89DSc",
  "key35": "LKRsiXFKWSE8m3q17ahfoairedkqdneboBFGNS5FPXiS6RT4L8ceQiB1RNAXrHzBGy2u1zASouoqsFE6DbNG2qi"
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
