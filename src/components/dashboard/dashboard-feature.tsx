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
    "5N6HwSBiuFpMS21GwDfECFcNFQbyW92zi1ZtCBMbppXdxWoReUN8aALCXgUA1QRKKvTmTMjnXuozERarNZQGTjTf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XFdtayiEebQyT1QHVNJrRJfTd39eHdszZtRHqjsH6jpAfJnZwU8zDRHoWhKMHeEjsU69PgZbJ9HgXLL9cts4q82",
  "key1": "bquGNbw93EusaHNMgM7vzsDc1fjDgF6mwxpTY6nMYdkYk2VEfCtcfePk4JsGoa9rPVukj2r5wskHMJGtxPNPbVA",
  "key2": "2CfLWzywRHgyZuJMJbYdUB4t24LMGijkYgwnQAnaFim7SnbvsqjcUSrJPrUCjP1WY9j2p8nmhdxhKsL61XdWLzWy",
  "key3": "5dGbi2LzzV4ocDVuJrDEjFWGcT8Udm9q3rSjW4E1x6AcwZNnbtHxR9TQi7kXybDMuD8rgNwx9d3jCkiQivBW3kFQ",
  "key4": "3MbRwWPLmbHydbToLXPR3dG19dfCu5ChzVhW1nP6V9duPsJranBLN8D1ZEbghCgwt78p61e6c8B63YGFzd2STr5W",
  "key5": "4bZ4WRqp2HnoHbhrqjDNdZUUq7aHS8i2iJTTzayR5CvBRkQ4XrnWyM3K6HHQ4J5Ui2ikgCfgD9x82aMpHFnqgUZL",
  "key6": "4NxDwsxL4nHqGj61gmdPiqVwc4DHC4zQpuWLzybn4dPNYWMkpzU6owZXQtrdfW78ZfiGoSZ4sBfXRAJEqTm9PEKm",
  "key7": "4k4sFbKfhpbSybxvY1YVJtuAkfc2GySL92HAgncYZvZDASucag2W5fTQ1JN1gmLbMKccCUzFyWLMGzMvz9WcYD2d",
  "key8": "61LcxugQpCC6r3zPL7wdvtfpNgiHEEXHNW2nGeSN1heeLzereXmSgfF3aN7nSzGsHkXiWVS6Pta57694Gton969B",
  "key9": "eopDvpXfbjtMc2QGGRnbxLLTZbKRQcFKyHVZjaAx6YYxX9b7QmkhdzLH47A8zEwdKvTQ69P8r7wnTFoHtMQtwYK",
  "key10": "5eTJ7YHjTcBX19ZXLxJMFMLPBpM2h6NdECqo1aXUsaPHopH39DRvGXZHQo5FEvt8NBdBLwkr8rqDkDYb1GgyCtZp",
  "key11": "3QrVkSxfpRCUCNN5qphqggLQKLy3kzdpS1eiM7tyKU3zoutBeJQHiSLNx5xgQLVmyL8i6yrMmdT1X6kpwQ61KrF9",
  "key12": "4xunAsnLw88uxqvcpV3xMFZeePS9eSujggvQhE99xCiURFEKCine5mJBSWA6VdjE9AoSRgxd3CHbhdMM2PSDv4VJ",
  "key13": "3gAxJZWhyggfK3Kr4XihWRsvxhZSYuGAhVGCpWDQshi4qp4apfoRWrXjS11Hm5vYyfTcxXg4JJUvgZkV47DMTNiT",
  "key14": "2QcBzi43JaxBGmbzVsJ24eALkEivcKfGWzaZVpkp2oQcZLfHfiLAww2Em8rpxcVjomYx3vzkKrgqTqZkZsSF8Qxr",
  "key15": "4GFkKA75e4L5KTczpfMLnXUMmkryR4HcA99fKTfrfYRQg7TGwzYdjWQSmDkg12Gtw2pipMAXeYBDjwW22EJsqzEu",
  "key16": "3RJGtiMd4xD23V43985V7oVeAHN67abenXHKFiWd67Y4nTb8XCL2odHDAhr3vvAnXjrdnEzdsV8aeq5TMV6iMwof",
  "key17": "57jFaQYMjsaKKnjkWu3edrNNVbgECDFkgsMEHPBNCjSUFy4XD3QFZCUqcar2kzB3FDDcFNPnW2iJiquQ1YCrMiAR",
  "key18": "3kEExTEuixrbL8HfhBxdzL2Pdd6B94yVSkP5YKPBS1dpCLeLfHAzwukULatBkouYbNk3CiuZLoff4gBaw49mpPc6",
  "key19": "2T5XkVdAa1iajtC8FsjYpiwpBTPSAyjqgYxNAVDhNwkYShtvTpowvm8iax4iZH1ejzHptb6D28CJ7Xmk88NW3NZy",
  "key20": "52dFJpw7mfhMj3tY2FMwk7BmpDLsND8HcZn2jBB4c4kzvNoxhu3DLTnqa9FnP5RYSAUSKaDrV9MRoRo3RvP1EmpT",
  "key21": "4LZkbiwor7QHNQQwM6YKuuBGuoYCe6xg4ysW7EpkuGLTV5k62TDKtwMTGfzvg9DFX6kKbwsaHjBt7WJ8FFRtpa7j",
  "key22": "4F9q48dBUdsFx4v59qmyrMFu7B3URdMvezPPMDL1DARcXnCPjANHHQBJVwgGhT7c6yj2FTay2Dieb9jVCP5wzpuB",
  "key23": "4uZFK4uNCowmuLMEG71aBMnYhoXNhi1knpApKJbbcHKsH8qua1rArZ7GsupyGvimiJGJJWG1s92APXdgVygDugZC",
  "key24": "5inPEh1WTNUs8jcD9qj8wzxf9gYiKTc3SxS6ZoWwgFhZimTesz4QRRDywXmErDiwHL2RcXMGAR1APxKC2TkKjeMm",
  "key25": "cctuox2rmpo71PVPXgKUmWKgsVmgeJp9gCyqridm8nHnjzqjezkfgkCxJBgoC4H6r6odfGH5Qa1fHATYoVrMuzP",
  "key26": "2LSaCMFZQmgZZHLoj12uTXfGB1c9y2TFFGWzjfCi2nsXY9BgMarn6gcaepL9MKSPfV7MVS8d6R7nnsh9B6noNw6W",
  "key27": "Ujd6qDKsCd9oDc7K4r3WB2PreYxNdYjfKAsseNvSugyKs9Kuu7fjiQcTLegKrdMMLoTC14Bqo6RRBz6cMPhPf9E",
  "key28": "5B2ktQHthR4978PxeBBfKouE2E2AfWWTtPXShtFYZhtsLTt5EBmbshixpPkyyirQUhTx71auFsmAipFKTWvAv4Hg",
  "key29": "5xY91QypA7raRiMKocxb6by49RfrcJRoso6x7pF8x6zgvN8tSSCVJVC9fPLJmzdMSRb11ih4BEKLu3rdoUWWPXhG",
  "key30": "3RqUhbQeaHaTM4WCp2GXiT5YY85rFzMVvH17LB7RC4BZBsDkBAq6YjQcPcqAfSCyHDZpPFm5Pk7H8rHvP8639Gjg",
  "key31": "3aZoe15RqZUsERkrgbpG89prZy6nqoj4CEjqHauZzV4fruiaQQERUWgsAjebxbUCprSL2DUFhznbAkcERL6XkZxe",
  "key32": "39EMFYV2qWA6zSdpZmWG2tBL1U1KKtyaGBoSaeeB2N1TEoNK7n3TKg6L9CFq5CGFXwhzvr6u9x5BWQqjTdMDgyag",
  "key33": "37KGnZ8AgVCmpivFGe5g8HBvyic9FxyPdHxBuPJv2ASm3NP145kgCVAWPnmHmZgMYvnTqaAJtLzVCwdCYHo6YFam",
  "key34": "48r9AuPXMo9WgpZ1k8xF9vsmvLzwndXm9huwtGFbzSaHMMWqDf27mdQGCzSMsP8vNxD4FWc8pU8sMnVLVadQDKXE",
  "key35": "MydKukKUHi8QSiG5uZ6Jnx1tLQ6X8FD9ATzxYki4ERpLRLFybAbi9ZeJUv5x1YC948mvvKV8ekKEBh87wDMW6R9",
  "key36": "femZffctm4rPydfVw6hm51634u5WntWmMNTE9r48fzv3vNhNK89ke9cDZsS3Y67AqwqsRXycjFQ3LTJsR9rkCC3"
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
