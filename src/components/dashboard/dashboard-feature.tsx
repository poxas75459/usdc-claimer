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
    "4jHh6CBiYSL3y3yBypZf1QrhwKsULBS2Pgmg4PqNuohcJ8MSoHzUVWHyM5zhsZVCs782UdYEQjEdBgVsZ5ufjJX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qFuTxaSaRAY3AR5rSzc5KXsothuQTsW27Gtg9ibeK85X8QN2PPMtqjsqhJraQGY8sfKhAC6kGJLHjpMHggeBoyL",
  "key1": "4VafxrKR6oYa3wNgmAYupo92A23xPwTfk8yW6jYA93XswB6S8GQZLPtEW7DbVzreXUvogE811sYcpgNwNC8zzcaC",
  "key2": "3odvxabULQyJ5mHVM6fNJNYSpFfG3iS3RWhVi1FtoHweziiky6RbzT9FBdvKVs51rBrRThgrMMkx4zvisTQomR5B",
  "key3": "dr5y12ij969MWRgLcSnDpfgQvvAcCL6agtAso2LPcF4k8ad4ZCB712SPop6FCgcDq4D6WYCKszvxyeUnNcLfKzX",
  "key4": "59gxApncj5xcxN9AitdbmhSVuGNtE5rZJU7dfjNcNud7jsa6q8cwQRbZiNMYrbrFViejEkNuh1AYpG2JFXqWfssT",
  "key5": "4vb9PEDjdoWRHGAHKtMBWE2qzTYyfWizWCuuPX1N5ESgh9xxbNiVuKki8ehZcWzknkaBcsdGykocHnWsyC6tQp74",
  "key6": "4QAADNaSUjtcjTELG2DjcYMHZ4taEh3Kms443XrdkXL4aNR4u2GH53BBfT4g9rqYKfCkZy66EevsvmUoG9NaGgKF",
  "key7": "4ZEyxdQDvogdU1pogkn3qJyW5G81v8j9H5X1STUjfdu3YYKrEgNTXYYdE6YHshTfa69Wkxi6x7ywsGxwrmspuhP2",
  "key8": "39jZf51kB9GsZwn51ZBVR3c5UhpNbMxYGynNPeJTBoW6sar4K55ZoEcbiJXEDQu93UJe19cpLcsPZdttj9nXWRgH",
  "key9": "3ExwHueFALppwGSpsKMNhnbWWrpiDAZAVsixoCyY9aCdrRD5qXMEQKVCmQrjuGYaKTzqptpBYpPmkKwTmpger6su",
  "key10": "MssvUfBmExxmLoAB13WsXAnKqcssQLGSwhustip6QX37djx8tJuekhtszgb7zQUvuZckEpNrAnpdVcTHthmaptC",
  "key11": "4vXiN8JL1hB9HcGZmiePbLmdAbzJJk3vTnC21sJ4UPuU32b9e5iTpDqPZkmmfToDnSjgh2RHC5kQm5TjcWTWTRMx",
  "key12": "2vG1EaAypDBfaGAHtazwyZvmLNeqfwVCyrx6QjB26jzotF2nE19ebNDDq7mMiMSo5GCZn6bPDoF8Tj65SxKrMoZC",
  "key13": "2NWnvnwgdWJuEdVB88ZavP6ZvhuLnnMfRkiJVx9dsNXcmkXZVRT7naXKe7ARmBFccPBdf2Z1UatP1MLJNfnewu1p",
  "key14": "51wBpWWmVzVcYiFiLtzfCiTDVAM7P5UD3JqqigYdwVdPU6d8fz8UyMky16d3b8Um3v2KKF8xjcb6XebWjwxaVA6g",
  "key15": "4UVogKpWmAcXuv1gwq57vbvYHBMLxgLce4qnU8t8qP94vA494UgtPkBHJseM9QR3snBYUTFTdVgSJjAidj1yckby",
  "key16": "sPvLyDsroE54YSRPcHZnbbmHbbrefMWbSABuSgrJgGBHbv6nEq4JWnVHfXKcEJo6HgbZfJKihKevz1yi7qkYfFP",
  "key17": "3jRtHmA3hb2G4Qn1L8R3gDFTpWsS2bJErXMUKMLbz4dH567jgPfR5dukwf1sGVGjokHLaPzuCUhvdQ923pUawr3Y",
  "key18": "2XtnxkbsGc2brq8cVRhDTXi5evRdpf1TynWFtUJcR3ZTdaVFhrXgtMpUrB3ZGxd9QnFsJivSdScWchWWQpE44QSn",
  "key19": "WhCGcEjn4HtS6WhXD2hSLMkx6qKKm2ZS7D57boDjCngNmijNSa1AtFXkTPe9rZeEtcw6NCcZ6UBT4Xcyu4kErVx",
  "key20": "32XLNv1aF8z7fxNFd2WWoTUEkPrdvHHpYtWPMPNkh6ad1jnq2tc2G8GBgEkHE1cELkRptkWS791jdjgtDfkJEWZF",
  "key21": "5MfwNpNAJN81qHn7M1dFW5KjaRpfr5kZEvZbxU8ENHPWcJcf34ao1WgBEznnJA76WE6QVbkDt9VCiBHZ8xckVBhh",
  "key22": "476bgfoyCSw6RssqFwVwuYUQdNLSnvmb2vRAKbrdWRr9u4cvsiRTK1YdCmfaDdX2oCHMysjzcGcEXB73HhtSxCem",
  "key23": "XhrzevxPp3qwCREyMQNqTpZqHd3DXJSq98VSHhRR9Yf8ed7a6H6htRZU1X6zDFtPWXS8wHuyQPhPYq7kfdjvZV9",
  "key24": "3isiREnvseZzsgi4t1fi2C9J1Du9pLNysQGhUX5BMBtBs8SjfrYiANYPPbZr6HGjh1eGGetrTDAjUYrg2NAkJehN",
  "key25": "5tNtCNZ53sX4KNgCqccJFScr4Lt8c8nq8xrJ6u7yMZr5CxCf4MJdKBbKmNAqs3RsZkt5e7vfeNE63fSsJ7WYExNx",
  "key26": "41qdq7fahDsbpkBt1NrZYVi79tsE1xxU7mjkickFLKS7G4DvdTWRa2G9pyVNiuCzLYyLmohxLUeo6oC4gmvxWkGr",
  "key27": "3Kjwgpbd8TscL3kdcLAgheSWikyyFcAfi8nsyVTmAR4j5CtgPP4zNMg1K7iT1SE68UmmKjYHrqKvyGbortyCmHeA",
  "key28": "5teFBTpspJeuPXtSmaoM6mnfBtWiTcW8FyBkS9bawUiGf4hg3FxFecQff5dKQWtXh4DSmj3SJsTA28NPa6LhX3DT",
  "key29": "2b4Mk1Mui7FUDjmvA5HsPJaEAh6LeT4BfLNirBjwAignZoqytpNCuYdKNRjGuQzFnsDtkoGbULV7h9YsEMPsiZnw",
  "key30": "4o9uxBvFZzhx6Up8TttjhGjmztbnChV54Y2DmShY8WdJEdYviTuyiKWtwCDU8BhjZV8rYqE5kYRJdkCceu1L2JQr",
  "key31": "5HNGqMvU5ffgAvy5AYRyTCNjT5n4CCtfV14cd4qwnxKysr99DV3sMbBzJ5W53JLtUsMF5cSZEoaPxDDXoKiGWUEg",
  "key32": "2WRtp4jb2z3cBngLqk32qouPci728jiVBmqqMyZ5tqeJ8P2ZxCvJVLRSKamawZom8yzPZtxi2Rkc7MrTwuC5zNhq",
  "key33": "45CuEZN9C3oP4DV4CFrTxUvLXg1Y1TzKjHAfApQ3B6UidduC1h4nebkL1podtTVnPqM3YyG7EWkTzQ2Mj19Fef21",
  "key34": "2WxVy75xJEDGRCZJGeSRvFXVbmKesDFvY8sw3EhmNWW2TQFPR9xHm1WvjFGmUyuCZbMjB67kRDcWMX3xbfAaVTMs",
  "key35": "5qJPMMpBm4ZUR9qE1g6XXHJ91hw1GnEBLFSyr7ngWGCmGSgzEGoLw49PZGeqcrab3jemysJq5EpiR15yR26jsTNn",
  "key36": "5HR8XsnXnEv8ZRCnv5NK21BKsFMCq3gTsmQWLidCDWP8kyZsrZNEkXpXocjm4JPCr5gorLRfY6fkrmX6NWB6ss8y",
  "key37": "5FJwUPhuLpmx5MNCruFnC19aHtkPmtVprwdpe72ntCnqjx9JWpBwJ9vdxB6m6YK8YmuhjFqpnYhVzpYFwtBsx49x",
  "key38": "YhDWFq48Re4ZjCKiLTj7HkUnTsVD1JcBJmdCnM7RnYcLZFfasg66DttyCzyfJW6fqiRJJV53D6iQabrzX4PWN49",
  "key39": "35LzwaCvC1nKTY19DD5w1Mq6yHgV6mbhgXzWJGPDPVRqv21b3M5uQS8Qgoi6ch8kiyRDqiFEzbx7mWc4atWejnVF"
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
