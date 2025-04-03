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
    "3iS7SiFjmSER6HUo7Cgyg8GzjAthgiStTFK7LA6KMrKMzQfgqn5ZnBdNqtieEJfYGjE1Xke52TSzYkznBFMcuLaS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rev6NF3TxiX3rhoUqiC7B7FHevkfQXH3nTs7L97YGqCfZQTjDtzCgiieRaiwHGSVL7Msf3f6FMWKJWJopwmBy1p",
  "key1": "2ZNVfhFhaidPA4G6izNRUpKHm9HLrSyE9ok8GGnDTkrsYX98mhzjoL3nJEJ9Qmktf4HfMhXojYk3WNm79omU18r3",
  "key2": "p4kB7XMrBFbd3BebvTe1dENALbLrnquyt4kNycqQzLochAeG1DXe2VNNtBtJuTCMRJ2FWQqXxAqTeR7HKQ3cz2J",
  "key3": "4TSZHLPtwoXQa4tVcJpotmQMW8Z4fgZqgVViZTR11NbkzDox5eoT1wqAsCjjz6UQfxWR1H3HTbnaGX9xzaxDvGW",
  "key4": "4ywr5m2JUiCjjZtZMKRmBL6qUtR3xSTbhoLUPD1oWiNpcLQEfy4K7vELpo2FCt5Q8j7ZFPZV3X3LmoxyqyAt4bGL",
  "key5": "rUC7NyZ4vFf6SUbBUtpjGEzV2Kt8Pe6vy2puBeDjAJFXQmNLMQm3YT3V1rz2gZGMLeF8HsQjqyBpnyU1QuYZPfK",
  "key6": "66yu6fJJLuQWG7KBeZiJ5z4V55aAVJg41FMbcN5VxGhAqtJSfue5DvgS5AsiTEKVmLKSB1P8pWHADbNW99h8eY1J",
  "key7": "3YN5bWb4USPR7b8xamkwMhSkYECuvw5gxVu1cuAnrtctRis7uvxm3D1W8d9PaBUqcF8QGUm3Ub4kHXZWY7cXr641",
  "key8": "2WZEN4MFmMvKWZF5zKMtE4XE4Di7eoo5TPCWfnP7TDapUvUFDHU5WZv1PBRfrNYirX7DEVwUns4fGdqrmxXtFTuG",
  "key9": "5gVLzgdMRZbRZcYgBVZDrsqu73RQcj3uw8Y3dWegGNDhshs6krr1xRPDfpSiKVQotHjocDNo4r7MQEEUBkGtZep1",
  "key10": "2XxMYAPLziFEN1tgeiNVgBaaneZy4WtMeJ4D6AfhKbrbnMnFpufjndGqbaRfjSuVUtQzE5XrktVD7UMNSZWj7RMN",
  "key11": "3KTxjwDhz35n11aNYCW8DCHr82ZjoVRrpSGxjHEqC2HSdWT2hrnYb8mG4KiyhW7DtBnr8RzNHqzkHhiqb8V7xP4d",
  "key12": "5sjSmZNpAZbrsuuhp42JuCdTnQvvbjBUK9ufcyDPVVCK9h2jbZaDYm5PLCfwzz7LaLTBbWMtfkfSUhXXHtxH3myT",
  "key13": "2cK1yMqgNNvPFRQ4EscmPUfQxbGCpZDBcj22nYGfqqZpfYfmiCiLodj45HUxKBieLJVzWqRGsDV9y6ZZiiBY5m9Q",
  "key14": "2wYyCP1Auj3yJLxTBFRs744fuPq5SgSe6Rr8m1ZGLX9yYvQod1qug9CApq39A7UjKdo1NN5P8UdHbwhBxTmUVkd9",
  "key15": "AzTJ7FPBuaBnXiLruChA4qQEMV1VJJsijkBfBoWT8FySVFDzhWbkV1Th9QzQRv8LDjCL3YtUEVJQQ7QP9PF4Urs",
  "key16": "g4LFUPu3YuzJjqkg6JSwn5te96BYAKjWsZVPfzQ8RtNLaUgmxMjSkGSUAafxFC664n6a8pvx38WKrijg5hVV4Vq",
  "key17": "3Bjx48puoeAH774xRvJmchRMJDhhiKwGr8SDgdrRptcU2sj8qJf6jVgTKsrLUfPSTX7hAakXvYywPM4EyxXnJu39",
  "key18": "yxF6Rs5km69YbvcnrxetJ1sfPguw7MatHDTJWKZmNsbG2FKDT731uqnERVvHhwszdqHTSFToGKwC8QtK6UfKs6N",
  "key19": "4eqJATS7auHkpumoQakHkaG75vHHBUCx5yLhks27ZFzGEa2JyMYSXK5y7WhKpJ6EHsxqG2wX7AxbTnBEL7q29boi",
  "key20": "24kKqqCa6Vp4Ji8bHN1mL6SEbsPU3x1gXfd3Uk35TF5RtDVLxZxG83VL3i6ssqPekCw7HgmRV8opZYH5mYSrzVHY",
  "key21": "53tXrpi9tJkiGeUqy4xxbFwYhMba3rh7sxB45sTgoigminNkzBG6gbpepvtiF7vHQyYgxZZd1EpEgVi4t31LZnWG",
  "key22": "5BMsjHMXADhCmWxLhYX4r38M9hcA4joMjcWpGsbvC4dJEuAoFJKiavo7pPGr1vBtSDJSAp8dTKAhdHqFk3dq21h8",
  "key23": "4JdpAfjzJLuruShBunMDyJki96XFPReoBgQFNzURRc2TfC5LhoiYKbfnnhyKRyyf6j1yq3xGTAi35dMKHPWakjb7",
  "key24": "5dA3iMKdq8EM7ZQxwh38aSw9s7DHiRfLGrFNbSN5u4BmkgrecWxYfEokyAyRDx9oKjpfrE6gLoBmEQDNCCixJ9z3",
  "key25": "5ywy7ZoERfxUop3dgvAqAbftxNpeBX8aMtGdsJJJYaqYhq5MFdK4JstP73YfBb2xEB1KNePf1hgX3LfNLYHzw6Sg",
  "key26": "5Tyd72fVpVDVvFZmwEEWwJWnLEutXhc2zs4GUcLZ4cyeAkVNdt5qfZtoSts8UihG7UwcB5NWer8qQG5u4wVdLHiH",
  "key27": "5Z1bh5T6QMtpSPRabVyK2iWr4uXat3YrEdc2UR6YCCSQTxTm7iNAKMfnQDgWzSms14ffzaCaWPJvpkjPBupLuoYQ",
  "key28": "4SzvRbsjbP8L8ecaQSE4agCeLvorDvFS4kZ7cRFjpB1yekdsnP356SKKgL2c8tY2zNJC3rYD6thUqraQDVxQTBBo",
  "key29": "4SoNY6ggSGPNqkNQxcufJbKspA7REizKnHSpauFe1D9iHvT58ToSfcG7SSHjPD2QXLUDiKbqAt1iYGTPzApbSiLj",
  "key30": "2x3tuRTx3VsaeNbsWqJgCdCjUZ5dF8jWsWminVY5cT1vLdj145eYigKrNQr7xftEe6mwRumuJ99qCC3WyjPyEW76",
  "key31": "kjpTn5mPuy1bKUdRrgvimCK4d7qn1mYQ4coQweQ1DjAymmHSENUYT3Ncpo9jWwTtCaikU9ZRxN3VUwjPq7n9byA",
  "key32": "29rWMWxvTkuuQH2vqpL571DihoWdvY7YK7ioLWJKP7DjcWT7UcXjQ9TyGLerrBKubuxb9EVhWTinMfk7qX5jFZAd",
  "key33": "21uUicBcY1myr9FYoQa8bJuv5JAymMuwCpEUUJ1n8h2tbBMHTPdScwR13s4gmA6uLgp4kvpNSsS4uPuBkF1zW9dY",
  "key34": "2fzkkyKnhPpCEYeQpTWHLr5wKEkgfDh2mNgmDH94kcm8UTw6diNHj5vCTwaXB4DTKQ18MiYbP2AUdU1K9gqDYQ9e",
  "key35": "3xx4D4DfPd2Xtc5f5wcLUQMdzCpLri2xodefvjLYjhB4V2sjvKvS5xqWdxrNvXTaGpMzTXnkBeWfoBKjKnmt2otD",
  "key36": "5gWHk22CfKZ1hPDJYErNKX2vELAhPAumMcN4ZPrebXLxdu1GDWTkr34EYUVoqZHS1yvJphuPw6NqcXHpr83wEzbS",
  "key37": "2sJCDiPGY9BNjwgMdp3UQrxz7zQtsKrGMF9jUysvpvj4wJLZVAKoUeGB4DZ9JFu82v3noGZh6VgBrCwRYwRZ2hbH",
  "key38": "4pnvprQv3dErfLhNArbBcCkETsHugo7kXD8A42Dk8SxChpBPwqL1bPyjDC2aHzZ1DiDuUwWprP4AEwdfQdKP7LTM",
  "key39": "ufNDSDTUQkhnMzDwSoDXvk7E5e3t4JJYsFMe9P5QSCt9RcoFAoveXs6Ky9zbW4i2xhTkzGNRawxxPnKLSnZBAni",
  "key40": "3ThAjAzCCRXpyoj9WZqtH7tbQs1buTCuZY8SxsFuwMf3jYb9XmEj8nJufvY6rqzBZqaaaxazsxAn1GCAYcjN8Ev1",
  "key41": "1GKyP9QXTPP5tYnhSuu9YDqqukEFL1QWGi4PVDv7TW39e4EKEQhpj1F6v1YV6cA4xa25BHQSuJe5tkrdnedsmYA",
  "key42": "fG3bE4PeGYhc2xcyivd5K24rKv5h8yc4X8UpNZqUgwk6ZKVivsAucc1xMQJokfV2d9sqQz1As746AAe2eFxWqJN",
  "key43": "4qmstcauyuW7ipYcdiQB3qQYo8D2wVeCqYnheXKMfmU2srYTBAPX8f4EhHGoeuL6yPqxubxmMENdAfLJHHFXw7gV",
  "key44": "2iqKYwJV7XkpJQYxFurB7pE1HexcQ1t938kdv3mAFA1xHgRFJGAMpKrepDStsHajqpZ1QUSFEt8zMXmVG8a6hF5u",
  "key45": "cAokzHU3CddBm6rjP4BbDSrgVXpJSnPkiKqWP1RSifNeGW4rPtkWYVeWKo6aw4ofsh1KTgnRsu34xZFnLFcE1so",
  "key46": "57Kg9x3DuC78CuHuEZg8UEfdfapnaHvkVqpK6VAhKUChKGQ4cARmJvRmrXZceeJ4RZ8Vtae8xTZktvGDRaeK3Cny",
  "key47": "Xg5XAfZvEeGoQuNL5zgEuwamvUE1ersC3USPUBnbTAQkDoukyv1yGyY7zvoUEZg2CQtzVGw4mbktD32wwkPB1je"
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
