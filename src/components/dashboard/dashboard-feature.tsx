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
    "FgFsvrEKiGEg9QqXEUfocmXpdWm1xgKEtytzATEcNhxn2W6W3EXnnRxePFW9Qe16GBmgK6iqVmkLeYTVqBtQuQT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vx6aWnwcuGgAR1SpaHjbNYmURSQTQXwCA2xUWPyxV31DiHiey4bnWjmgeN4Ebh3PtXGQ9VYdkP3onBVMnm2Gyb1",
  "key1": "sfNmjGpCM7VZxofrZnShLKRwPuikTmddLytB8yP9QEicJzmQgpb8MVcVFvqwycdkK6DZXxqM9XX2FgMEAHJFnex",
  "key2": "m2oG4Xk3KY7jszShfrz119AeGCqeLnUHLUuvHbY66gvXHenjEueid4fXpe2DRAuu5RhJYZVF3vARCL51Am28Qhi",
  "key3": "64jpf2sGxkordps4EiNBcTijkuTPTzSZ26Zs8YeqpBywe5R4xudRCmzjhKxhYTYFc4noqoRTtHWRGig584zZmxjp",
  "key4": "2HNqXhJkwq8zjyMVixzbYPDRKrwHeT6NcQCfkoTT4uxi9wTcbUwpMhz6i9DwZjkoxxb7TVx52NifycmJpgrGj3Bz",
  "key5": "4fnW5SC6LELRZxVTKPwkGgfCCPz4itoAXGnkUDArH1UgUPEzqWpn2gwJT7tUW7Hr366hcP2cKLEPdfgV4aKuwatW",
  "key6": "ZKugLzLbpAJTU232q32esuhovNwnxGgKsE4WWcVZ1Gd9KoTg7DDEGTFcJy9WsuEYvpgqkQPoYyb8yZfGjqF5MNX",
  "key7": "3TAqRHHHFMXk8Ef2UVA9Sa1dWhfQY1rNoLF3dnuaJmtHiiB6kQbfQHckcRZ7EP1Ebfxw9oGcAyvLKXjMfdEcRWuU",
  "key8": "4GycZcMZU9y5mGe7YBdEZvZre82x2xGjxgYdbbGg8cNNioW9JdpTWDH9RYESBrdSua34gM3tSVxeFgZHecRJLUQy",
  "key9": "4134rxJeZtpbWzSSiaCwCHMhXs3tAtbdxFMTcCsUVPS2k2VicwojY2MwwAov27ameWKeyjq5RGzhBUdGeo6v4bif",
  "key10": "4Fvc6BCGthbCAbqaofkcGggiXXjYkZEmW5mzpJ3jUsLNupFeqVkabhfHC9rxDSxVdJfs6UV3xBuewKRpFYDtQoJg",
  "key11": "jipPaxBshYjAuLQc1zVYEhUPpdJWHSaAuLJvgBJ3E7UdLhsBob63BuDLWVZhTfwxKNw5GZXit32wjUQcFbYuUwM",
  "key12": "5M4dJz4GRwhRgV5SxMByfZHBkrNtebimhL5dTEJ1AHVGHf2Vmu9hBYCCVGNx5Sn2nNQhJ5uRck2ZTmVLWwDS6UwJ",
  "key13": "66aCwJrPoVppU3oy99r5QG2QfWUEW7fvPkXWeh2A7CoGmZewKBTz1Ku9MwycRMApXfJ5RjtWKuub1hD3DtDLXfxc",
  "key14": "4KSaQk3Cu8a3JudZnykxWmbVWnXUjj9g6NDYdBNXQPqM8ho6BpBWTXMdPbP4QGhLzqaJ63DNnfc4K9udAZM9vB7A",
  "key15": "R984CBbYCt6DaPHryGwny5QTSnuAtqQCj9ZCE1iBgyKpykY2SV3kBzeEau2DkkpQ1VRQmC2UT5X8s7stN44473o",
  "key16": "39WmqqNsgNvjo7gyDh2j9Wo9BUvtKQGAfdihN2ooufL5jJNnSEAff8wsoBsfo8sGPF7CUvo3c19Ubwpw789iznsA",
  "key17": "3Bx8925ZXD53QkyHQAXjka7sxVBBGE4oba4M7Xy2fXB1WZDENYwicBS6yqNPpnsffhf7pXQBnND4asUL3MDq7LMg",
  "key18": "yu1QNAWKzYWyqvHUmzXeNTJEA1ePtsbfxAS2TrqTj1yCL5VEeM8KEtoXhRSACvEnFjVSaWcAXZZECAvQfvBTpg5",
  "key19": "5ciPcX54AeREMDhGBxeqAUWYpevauGzVQ7fJcAqrwdb6c7CXqoN58RRDq3C7v4ZK7Gs2WYVJWeGr1qHFEH4Qd6Xo",
  "key20": "4p4rsKaf4k4fKmwynUacq9kYGqiFKh7kheejnkADFaZHBJgi8WeZUZMwcHLAsNGLKD6YnDPcPmdcLNDeJnqtNRji",
  "key21": "48wCXjbUo3gsBbeUWDgUMjxTdUbSr5dG2qySporsxMcfkARovW3h2kHeKqvj1tmNqmDm5mcnPhTUGWY9ZHgLzBgQ",
  "key22": "4V3Rxd4PUkKHEtx5BgAAX2twA7koEueW5cAdcAHDaGAgG63De45bhGssPQZhKqfHuFj2YP6b3vdYWqfGV3t84fhi",
  "key23": "3NJTcaXZB51kdwwM5kDm5Az27nsQH8araBJkkdjGBYZhyVgSwVM4j4UvWqX22ZHkpC64UKuMjyrU7pNzqiB6i4FZ",
  "key24": "5NqNXxSicQphEotR49vJWvEWTmBF2v12VnB4yfPD9sT9tis98g3RYtLQNU27dByaGSMPCtZuYXp4c4vsG4ttg3t6",
  "key25": "HFGSpa7mtfbmrbEGzdZedZkYkHa2djxh2zumr7sUZTRBtJtn8gv2rQqzW7FSX94kPfcDPD9XKuqW7jrnuKpx6NC",
  "key26": "31FzKnGVbHMQrmXCDC9AjHhPqXgjemcGqid7sfXhQwVAex4dpBf6Zcm1T6NCrhb5ucNbhoxZVs7zbTkLNdQriVWZ",
  "key27": "3JMWANWWAJokSxjnKa9GTaNdLC8Kj29bvPySAnqaCXFvaitTNdYWjXX7daD3TLwGZq8TUtBvNY9Hk8RWprnG2pLS",
  "key28": "2o1XSzsJxEUCPPyoJVqhvXgSaZng2gdsYeocDSzuC7UveZed1spxj9Uisuw3yZE8bJ4TufJtbg8YAsgoL8zVr5Ly",
  "key29": "CZGcwHXj97GbqkWcQJ13EaziJPt39E743TxHBeDSDsuNJdnvymSNEr3Jc7HqGoU6i1qcaoocWHG1S9ogoGnQARA",
  "key30": "UNyUDQkmaAdn6SQnQMBEXsoyfS8VzVrY39mKFcvGEQ9CfC8YDVDUWAb761immibfxZPMi7SE8Th5VmHruFMCXFC",
  "key31": "66xUuoUvQax7TSogxWhBZDaXBn4auzunVLhAwboVkfsQ5i3moRmvnm2gRdS9JJPeHtAS94ho411C314aA6gnCLb3",
  "key32": "3WKC4ZS7Nq45Wp2gpMGFfmZzTtm643DTFcD4qZ8fZe71toeWvTUjFuguJzWFoure8eknYPqeXYSSC97aq1wcTD5V",
  "key33": "2TceEvRg2br8SnA1wMrCmaGoVStUfxyxBpHu1B259yi8q1suWY6h2yq2Q18eDbBQAucd9EcKNfTzq6VNSC8BShZF",
  "key34": "qVt17mDbgzdmx55STqSrSAWjCRiWQQ87gaETLiE7NHk7GyThteCa5Cb5zPs9TYyM6mYPAUxTPBccE1hbMAnxjst",
  "key35": "4PT4XrhD3b7PST98jDAuMvw3fKt9myfVJKJinZubdk12sybz6cDZDUk2ArzoxzUH33f9cA2RcBuJButZHEsBtmU1",
  "key36": "3gv67AeQM7MMWC4D46Dg272t4jZZWLeVew9r6jjsrGi4rojJZooJRmWxJGYJvDwh8NeFDnngs6e24kjLfy72rJyx",
  "key37": "4ML9aTUnNjV9UE4wJ18DaZLgBU9aLAPXyrnNCmKDDwcbbJZ1HQ3Qb6nSuU2Ake9szHBPmv8uKuwsEETCwJHizASg",
  "key38": "3ExeoqMSCcBKo8KmP8HH1FPHKKV7SdQizeA1tyBwLnNAXTvivNtjCT5fWA159npwHWf5od5Pqk8yUkaEx3BDfpWv",
  "key39": "5yPt2bJGKy8TVxr13mTdtrtEXPsX6ACfpTDVALLB6bHUUgvouQXkj51ECGcTrnwmPjRiwdjtrubkTcTPJfoTfPtb",
  "key40": "5Te1kwF9QXQS9J6QdzNqMtfGqKjcFYy2A1DX3s3wBP4kmVXYQmLJTi9ZELgMfFKs1G3BiygFmFiRc1AXqDTHdTok",
  "key41": "4oKeE5dpEbLRNJZAaGh3CbMNXU2UeCDerN2NUzGB8oPikFjxLZ2au9PdzMW5YoSLxKfXKn31d3j9wFP45fCko7VB"
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
