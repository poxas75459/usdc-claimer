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
    "23Ku9tjJ5swDonWvjFVKvtoSirwF1XeLks8UrhgXfWSggcy66Hgvpz3YJ2Nx4Cv9TBamaYQB3YmHYmzMGhJUu4VC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qpRb3w6mrYLnckZuVQHh14Uybp2JqeSgAkhvq5Hyyx5YxJrS7JxMaQkMyNCzMPky7J1gJ8SZ9ggCyp9bscRGJBG",
  "key1": "3hJtj94wj7JXSjRoUWkivrJVfH3XA3sWjtthPeZ21iriabzpQPHie4929zsFpNfa2BhccNH54QxtEj2WWz2ZDDrJ",
  "key2": "3iWJ6CBHbNXriw6cUedE3XomkW3ahKHCK5HPKjJc5DxcUWx6Uq7YBYR5BVrL645bKEcC4AiyB9seMJ8LFqv9Y96C",
  "key3": "32PvnWbQfqc6qogLDtdFkYWByD8VD9GeEhQ7AJb2eeAWSa5kw9s16yMBojw47zex8qGUQbeRDSsbAGPZLys3iQGP",
  "key4": "7pD6CMcynHM9sCbw6uqYJvjMt9CKHJbkZuaRrueAv3aeNpa7RNU3T67cS382tFatVXeE8ubvDKqBtvVFBndFRPY",
  "key5": "5mePQTQ7sv13s6kJw7esWqDtFWxgVSxwpQusWkNhMFWCxJ4Vghu6K1zq8eBhyot1iD3k9wTBFCF87v3hpESFhgBx",
  "key6": "233CTpfFfWBrW6R1sikiYz9wD9KFX7AX1F69xeqpj9wskebmXdou4ei1Ddt9iHTEvPG1bxh8RQuFsvpLAVBhuGXt",
  "key7": "3dj8iAsNLu1TDWDwDCzMKEnkTNwcnUaRSXqDHn1CbL3fUPPCtqsxUQV34EaBHPS9ExxESi4kac4bhSN7CVuF5Di1",
  "key8": "5TutaYXF8x7cwxkUeuWtNSAx5g9d1UtJeAzP6xrbs813qnqyU1nDFxajTUfUPxuMfayrFuDYyUFULUFfcLkZuV1W",
  "key9": "4zLFJSiqzvsfk8x8npsT6Tt3b3ta6iVxwdErpYTwrpwarrXxUwB27zt6KmsoFV6qWSKCwoRxmGY48Y1uDqRua8gq",
  "key10": "2wWK7qt4tni7iUoPttWdNwHFL9zZRAQq5TqhQ7FHCatMpRzrgfow43eZXhDrsSJPQbwuRRdQreTtwN2cPf319JjC",
  "key11": "4gqNgy8LtRjK94uR3R3NfFF4CJUoDQij31hVJ46xQd5zrvL6gw2GtHnkjv1qDE3U4Dpn8Z76AfTwxP5oEPahHJDc",
  "key12": "dqpe5s19rBPwpfaUE924qFtPeQ7FRGEUcfLaYirrmhSbQH75o85CRVUzrjoGAtmzBj21jFYAe7jXb4o2fqwzzHx",
  "key13": "55dtkvjNeBS6tEyMTfeWJUwd8w21zMTVA6Rckt5keAWaSw9971SHdoYfx6r5AVbSzvjcWnBCtovdsWJdUM8bzkgX",
  "key14": "3QD8KUDLCed5fKYxN4M7h3Q7yGtSuNhwXPrTFCJwq2X4mQg5BfqB87rsy1Aw7Vasmtr4G8kYzgnoNGX5MJZ6AGT7",
  "key15": "3t51hpL1pdD83z5A9YUbXU431xNkq8AJvieoEnekULb6V9uKU9tZsCA6bhZaq5Kuk5HhgiRJuiHftfwJyvufwMG7",
  "key16": "44McCZEjdxAVpwAdJkUNRvivRRAdbd5eC8Y5z51AwaL19sjquJ92UeynVNGeMPe8kVPFznU23vMBBMVG1577XLjG",
  "key17": "3eeEvRgjve1S49JMRdbqneyNNBM4DmT5Y4HcYBQaWvv9SksczyC1Fztp9ygMAPDrxde486UewRYUFnJsyt277Ggz",
  "key18": "5SRFihb63fbojJKTQAtDy3sARs4W5zaacuy3FpqsMXN5qQXT5MJxKKwgVW3KeBjJMCzS4PYCCbXs9eqfFGcTGWCZ",
  "key19": "3w87Ld3Jyv6QSLMcFKLbfYowqcdq87zTYxdn2CQKat67JpHs1vsEkvBHR53RkWg94oJs9Hiu9a7D45cGkAWTQPRB",
  "key20": "daojuPgWc522fymgfNnTqcfu6Ti4jSH18tNosze1KAf5sAUvXCwEDVnmiJ4ZMjAr2auvW1gcqw3rPQ4DWsWxgJN",
  "key21": "3MyVWEKeTQX7vGjpTCC2fo8fg6PQekMJGz4VeN572oNAv8wUa64WBaUezwFqfU2X8isB6ewQ7xqNYwyeUawYxSSp",
  "key22": "4qVzkHaJyfhr4LyhXb9CsswrtBaY5w9CqZxs3TR6fQWJ4mDrSEU5DzdYjAciJA7iPM8oA8EtmskQ9iuaT8DDo9jp",
  "key23": "55pTirTT268oMoe3aKbaq5EYw47dQDquafG8EzsDyrWcVf5ScGZAjgiXUgFhaKMWsTHhrVoVWc8F2o4snsYawrjG",
  "key24": "u9bVWpgEk21DLSx9STaoi6NPpWyCwjiKst2CD97Fb2gkS8irebbvSH9StkgX82DG2rDAgptqk62LmKVqFTvT4eF",
  "key25": "pke29WdgSGtYugbLxnhC4J8cCTD2hodUxNR5DP33Shwn1HUvPmVx82iRrpN9E6q5XJNpd5bvFdbbau8wwieEXr2",
  "key26": "2NpTmoNiW2B15FsE5C1HK6vTSgx2VSvciVw1LAmwqMei4e7xUCGVFNhrmWY54zSPwcMzGncUKgg4LxxVAuAzkNL7",
  "key27": "4o8F2eF1vhhvMw5bs98vuuNPnBHzj5EKvhcLR4zgDhXcKSBGPMY7vVCUw5LdFU6LkrqCMKbX6EyBwuYHbDuH1VSM",
  "key28": "5Kksg26Bqgzia4xozSatrK4RKqHGL5wfHYcXKvizBiWsb8jg376WsvL6TKmYPwkKPLbajsuDxH8CMEUhX8axXRPg",
  "key29": "D4pSBsRNm4QqPHWv3Qf2bAeHqJdBpwLmMiSZaCM62hg3rw7xUTmaEa7xKJ2GtfqmtQ4gg4qWGETQ5Nkbe5iEmFZ",
  "key30": "2aW1r5dzCqiWM8XWsciXKhn5Gj9tMyoKriGy76tfTtES4yV6XFChpBi9UYZJ1LEDMkucXvQ9n3pkosuS1xq1pEJ8",
  "key31": "52EVjxE25pngD3GLd7VsnYhVffxuDv8yq8NoYTRGsLsaSFNSWyQmPD7NYzkjYSJPR61hAFeDeJQunHmvujxfHcMc",
  "key32": "4oZtvnvL6dJGqiA7eFMyquWMyEUW4rNrpbLTrf6AYcX6BvPkqxv9Gfdj3pCNTGpiTv1B5r6k8UF3thM2PatEWNCC",
  "key33": "5M4GBKLJoD59guYA5Upt4W2ABiSJfQZt7TNqECYGWAQFpYV8LcxavhH1mimPoocARpX1gJWT8fV9k26kZ3xHMB7a",
  "key34": "3QCLGfR5Ze3kVj87jyg5V2f994NHXanhwSb6zM9sR5X85rBVziT51LJuagFevaUprEAyk5tV6GRdaL6Ax1SpPMKF",
  "key35": "4R58HDkNPb9cCVxpmNzBwtgLhgyW5Lpg8v5iE7tefLbYcLNjGr8wFzXsvSwCQw2KKEXT89qNPu9YWDgYLco1WiTY",
  "key36": "2avJRabvQDmWtNhsAfjXgrV3k3EDuaG1UTAsxmZ989bMJmevCJ4weMi2qyctaNrGqrpf7tDeHcTSdwUoFepdjqRo",
  "key37": "29bVm4BGSemEkHVaaDJJ1368KNa5aFgV6wjcjGBb9qc8VGmEcjQePKkbiv7oFzEoD22sgwMVraBGFpQU8M3HBBL6",
  "key38": "2KVY97yJVVB9oyebSyD8ySBAytgHzJFNBtvceDRiXLMmLVPD3RvEUwENj7dxkx249K8eQFxTSHXnvt4ZXALk6zU4",
  "key39": "3QPbBMUxZEBRSTFKMQBJntrpYzUttm6EKgb9bTQ1B148FtdCBPzcJbxLeQyW7AFPW8ymfSeCuEcx1n8BgLfeuhV"
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
