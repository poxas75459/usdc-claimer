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
    "52wstGBNyGaHiZeLGLnGh1X3ihs3xdYkYcUyi7MHUjKcyUNYit6QEo9hq7d4gbbrspdqqN9S6hAJzTBdaaGj1Fct"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54H2V4oyqU4Y6jkHV33YYENMF1kFC8JGpL7quoVfSXjGnF7W4HXEyGToK91acE3w6FN2Mor5b1CFA4guDCPTKRHd",
  "key1": "2fSKda65brJ7Z43VSPzjR9orNFkk8ouqcx1YUJy2ForTStBDtpkmXbM4p2zZdDYxsMaqVTaVpQ8cAPCuiRkyM7Cv",
  "key2": "2WXyJq6aM4giGPGrtzZwW3ZhuMQTEfJrEAhkxaxvsTpnNbMjS6tXBdwQ8yZgUXSERLFcPqiLP9uoS4UUhmUYYco8",
  "key3": "5GEPnxXMWar8vFJjBYVhtcmbxgfxdhRAHRueCmKS657j1K7udtZatL9Bk4z1skqA2KWcVFXfdAK4mCdbsuyrpWR8",
  "key4": "58kwbVgTUcfBVpdogix8AHKaLFquYRCuaKXXKyZfkWodnxvtGL1cdcjT2DPHV9Ur3Ewr89R7m51q7Se8DtFWYbkN",
  "key5": "2br1u5Tknhkmy7RenciLeJ4vAr2bRcM1pTViGUHALJ45p7jJu4FW1UfuDpZwBWwAaCMQAiuY9r7NsaVTqQeejnJE",
  "key6": "c526KuC3DgmEoXstPgNEKg1stagMkwa9LrX7bsWvb2KQCtVnpik77AmZJrPRxVYmbj1JMvTUKhGCtkmFMTuTHdA",
  "key7": "4i3pkZ46sC7Xp44i4mNvSDe3njtbN2iq7JcPpPciF2v7ChrtcN2xDACUurJ5T12n9yKSbi5q86tASKCZZBn4amn4",
  "key8": "3kyW5sUsgw51hFUVzSm6mnVWnxuR13oaQX5PJPejX69QLsV1dJwxZ8S6iWYYsDqYHGC8dEwRVrQGZbvKdBTGruCP",
  "key9": "3cXByJn3j7G7UuZMm1wg3cjxz45fm5kRZmWGbhr4XErDPxAF1WmJvfQ1KzpZeCcBxpyiGQvmeHiMQpP9PQx54dW6",
  "key10": "3ToDGBJinQdsRswLXKfCr8ZtDdPJqk8WMEGMMrb41fmw7zmfRc71LaAtj6cdvHJSJHNWxHroRBFXoEFgJDmcNRWQ",
  "key11": "3gctLfjR48ZdR9ZDPQdKXRnq6JfAhiHokTsPbypAQcpy89X3M1kdeJQRakVsxqCj2rdEB6NCcHnq4roMpLJqhmo9",
  "key12": "5gcFujX2as2QP55fjvQ1P3Loketv5nVUcUbhHfhXKByeQt9VaAyU4T3AeeD57h2ybcZ6KmuLLcc1avZU3dbpic4G",
  "key13": "4jjA95NKv187S4Erp12XPR8hedJsdhicpW2M1W6wg2W2igqsZHb1Viy7j5UNew9iLA9FMcFVvUtcpyaV2vN8R3TV",
  "key14": "45PrQenijLR6RhifdG3PUhRCoNs3JdAtPy9wJQ7Ubn27r6XbNg1JaLGJwbWX6wGo5NXMD2ZmPyPhEctV74Ldmk8S",
  "key15": "y8gLmmAt6szEMsJUPbnPHcXa9wvQbFJzeJJAxeHJDz3oMEjEKNJB3HqSLAXnJo3WuLtqyVgkZbPAdKgHKD4BG3z",
  "key16": "cTNsMb9MMR7DXLAZ42yzokqT2Q8rEh9SEwRZXBk9iUNcJVexMFDT23qWmHt4z8mKbcN5ziYeLSLtwZNiTcmV2q2",
  "key17": "3wTm14XmXGQbFnS8PH4LpiKCmP7nh1HjXnJu6vbjHgchPEc9yjshb39vjScuqBwY15z8n1g2QgbZQCALRSSu1sim",
  "key18": "2V9Tv5GkFPEEXGD19ECapx42hBTV8Etn52RJ5HhypH14GdkKWpTDn5y2fM28rrkqu2XdburptTXnqK7zYAAH2SJ2",
  "key19": "3QG2TfMKQih18v6tSGcwwPCKb25eZZRDoB9JkgzFj9egDvytUEo8eu34jCkJtpAhv1UbXxzLxnj5nmqYxXrwi5rm",
  "key20": "51ArnCdmHKrCJxSP6LEQo6MW4CuApNzMTQ3CSBMkGNnqMhTqrvVceWFwhJ5RJKafaD6Ps8XC6Ta28Beo8e8dxFur",
  "key21": "3wPgJWYH92u2iM2kd5qzV9fMSqvZg6dk55VhDxu5VjE7cSeXS2bJ7k4XBRp9S6wdMVXtZdrzZBsrqqWYyGmEczE6",
  "key22": "2X6QRUmu9EHnrGNxgcD3yGXoiGoqf15NYitq35ZbbcaPxaZEeZDzrVJ6b5cDb9Jv1hHo5ziecqJHjraVomDbreHe",
  "key23": "4pecPFrC21yt6JHZdu7XXbXqrgMoqtkKyQWwA3qPbq1N48DjjPCNUqbPNSsbkJfoSJkCLYQq9LdRqBdneD8KcJgX",
  "key24": "CBQX2NtUn2fuDTiRernxb9dyRvHrHCTiDMtt7G2r979hyPEZpQVNcUqWMfkoXd5k2BvtdLSmZivWcF2bYB1vedZ",
  "key25": "5Bqv9SdBnx2uS2ez1BRP1EuBVauPBWPkGKerEyEAgC2Tk7P8Poyhvjw9PUUeSWKMYtxeJSraronBVAUBa99P34rA",
  "key26": "4r13BF4e2YtESjiWJQbaa6gxSL9fWT2kqeH17ZAsocVNV7gJxBqMLicR277DWTUxcVpa37o73vmguSzcPnBD2TZK",
  "key27": "3eizZDvVGFUJXBAGzGDUshhyBu7f7HUSP7SEoYAW25Qjw8ZQDf74QhHzb75Ed2ee6kPqtPCvRg3G6UVZ8Dwkn1NR",
  "key28": "3chhdGJY3eui3p3rpp8WT7uq5xZwtxAj21TmUEGzD9bDbmFvLFasY4nbBFnsjHQCe2r2rJAHQ8tKxXqTMstjKV1H",
  "key29": "3q53WgnxPSXyGAECLnb9v9WRS1uH74q3nLy6vDjFynWLgTJ6qQTfRDbEeEd4tDwGDF3imMsddGAu9JUm2ZUmw732",
  "key30": "5i8xFMoB3V2kXwkbUuzstAHV2ashfvbKQbkWMVNCMUELkXH8HDWBADS4AKzmLDAst6SpQZdgrug93nVAyLDLvMDN",
  "key31": "xKdQnhGsEVdHdor4Kj9XQzW67AWgpegX27fkyP9dV7HbatYPKvSkjvVV7XNBL7dhEziXe9d8VXVeS2RkXnVPPyL",
  "key32": "z16TqMCSbb5Kvvax26wXaahbrtArftkKU8YsfG6ojaTFQgSEpXUH9thEdHmCdUSKstCocZJrMvLsDtdz3s9ncgV",
  "key33": "2Jq6hfYuasi3p2QmSVooFT9fs2fQDBfDdTv26jg4LeAhFbeTJtbL4ikD5xDS9izSBYgZfPAsWA48wck6q6ky2Qia",
  "key34": "5aqdeb5u6skhM4gghmVpFyL6VuvEpZ3RzEcM5HRhuxpmuq8ufHafiMVE3DZfuxp8FCGTLJzMaccut8d5jZPFaiXL"
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
