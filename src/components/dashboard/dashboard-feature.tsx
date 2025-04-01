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
    "5gJEprtv3TRkSMiw6VdvaHN3BsQJcFaCcsdqY21bMa3p9p6FppzFCTZpY4vDWHV1QTysQq12jT8oS4xfTSeceCxB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21n9hLuboqf2LSQotJsp9itb6rDUMvEk9rJNnkzzg1sNtfAaezTq4yCgqQRJGy4acRsf5Q7yi4NfpfAEN5SZpRqp",
  "key1": "21btjamc4i1WNGPKJBMNSf63PUHGoBS9whRGfWNKVfhjWsMrwcfMD2U1aFaDtfwyFhpFvX5e17SmwQBVvbvWBpWs",
  "key2": "L2VVFSH9PMi12fEqnjLVNftrTKWdqT8eB1Sxvi5umFrAZHcJXBBCUzHRmjMdeCx4X9dsBYVYcmASpeCgpGXFGpM",
  "key3": "2oGSRFQqj9L3kanws8Ebfm554cjz8YdggbVepErGz4t1xPtk6qeAH77gn28ytDXyUjG2REJraJRKP9G1EzMo5cLE",
  "key4": "5BV6VQ3ceohZ2a7SUXKMwRKYALP1XAK7DGCWcJqT6psGFzXigsN8X4s2Z1ZYygNYUMtHRB973LBNBv56fRD7UunR",
  "key5": "4JmmJ7rNGwwsUXHreTk8eDFc12qq7qeVBzAqjDTyUUCjN7DQdrChifKjcZ2qR5vYWoBth7QySKmCprJH2qodd96n",
  "key6": "2eGbXWM9VJSJvUzKuJEE37SfLuD3LJmK4ugEbGfoDbyqmCBJCvFntdpmvVF8hC3w3riznBn11wpyQSprTdNSN2rX",
  "key7": "eCYuuZjzCWwKavdy9CXWJYsK1seJtQnWiUzHCQLxR8nbV684ScftEkKKa4fbBZfqWXLQs9CE4xP9arvPTMNXJLb",
  "key8": "22NhUbdGH9GAP3qGUELaGy9L1qfDNbf9ipGhQXFuGBHmjKJvjgjs8FnY88xQjtEHVfmwBZio6Cq744FeCneVbWTK",
  "key9": "LKfRHFaCLi2DNxGWjYk7Gf4zRG2Nw2nDNrwp6QR4NAw6sKn5pnb9DrDmwuDnZk8AzTY2dH5b6tsUW93aGXLHyg9",
  "key10": "5R5VDXjdZR3fqLxe5JVt2F3LbHYzQ3WLbqxy5CCDWW95qiSHorFVdfc5QgaVsuJ6kUFtUz7jDMoTaD7vPmHwX5a2",
  "key11": "2kZZTqpxsmWNDzPSR7HVKJ6oE2WHtEuUHgdvtcgEt1wh9WKbDdkPhqAG7K8CJjJDfrP3jDBtYN96WYStHUQAPVoe",
  "key12": "3AHoFC1w1a8XCCnNGniKP7SSNeAVpFvtyqoYReb83tgzuxcjqTy4Ds9GN7bP46i5b5MJQwFDTNn7DuYkJxTFWa8m",
  "key13": "3pXoxQsqg8qDmMy5h8SfnsMyd7AjPBeXQtF9nwPmt11PkcMYd1oThQVB5k4AjgMNS2DiUvDdLaTvNzW2hAQJscFB",
  "key14": "5jYYJevPW9wnBqqoVz5v5wo22xGoWQWezUA2MEA4fisQJjht1QYnauz7jTLpFchwCKvnNh9jzFWyTqwnnb557FPc",
  "key15": "45yewV9vxRWamRErKU76QFbaMqLpaAuR5uwGoeGkgZuvZuda2qF67xx5FfM5AuDoqhRtTGn2gWAGe7xMQrNrtXkN",
  "key16": "3dVA6ZfhQyr9nVqA63NiTZ34QTCfktxX6iqXktmm5SYN1bazCbxFJ8XqKFecyhp4vtk8RhKkKaQiaYuoVjU1f9z8",
  "key17": "4t5D2HQZWuAm2iWek5KwGiMv5oXh8VA8Xu67EQuVSneG8U9543ujRQzbZjbYNekw1a8KsbArRwkos1Rc1m6NA1VZ",
  "key18": "2fvrkL6xCge7VEDG1GmAo7qVxUSMtxSvK69stdNnXH8HjJCeVJPKNwB1FCQ2XpTD62AuAEvaH41cS8visgYyZ3Bo",
  "key19": "3vvCvgancA6B2AiP8UhM29CNLMg18na6jZztG9yp91NCYokcoMPEzD18NkQadUzjqhTpuXdvyo5FNxgnrSY2LsaT",
  "key20": "4mZM5CUx6xT6tDJLd3s7VAscdU1omarn1BRAr4mnnN6tn4wEQS4z4hLSSrEkNtGo6o8GecrQrQPzWsG2nRhJwoSN",
  "key21": "256p9Pn5mLuWeywnE8mqSkavYg87sb3V7jNb137GpjFQSGBZ4fWy7L87AFuqGHFKfBfkccGUR9T2GqUsauqKokzX",
  "key22": "3oVpUvtgNM7MkjtYnNfTWsRMrLUffkaL2u8gaw7TFSQ7AqLNit8hYfyKj45hab6HGBs3AMb2bRYz7Q1s5D7QAhn1",
  "key23": "65PWBaiKFGpnJPeubfckrvabv6Y8CoaMNRhDAiUa3eH1SFpBSYpd2uup5qYAjHXkSNycVgF8fbgGb2DTJEEan43N",
  "key24": "4nWayWHHpWwMQXJwGm2ukrw3y3htSipsPwJR4wBocbqerEzDSCHpvdeaWWk6naSKuU1HEa4KHpjTDq2M3P7pf3Nd",
  "key25": "4jXh9UYXWYL7qewdeNNXdZGqf73DgAXnPRoMD4gWgwMhmZez3vxt9GBL9VE1R7euGhSBBkY9JzrnrQojDwjYA4ZZ",
  "key26": "3BhNGwCyhZ9M37g9NDCXKaTCRpDChSWKJiipoz37XGbYj6czzPE6fKSTzi6Jdef8df8ND96BzGfoEy9acN3PbFQh",
  "key27": "5CcXz8aVWY2TB6V95Vafe79Zr6uMVADmreQsVFxDAGJDBP7T569AnQV32Ua5vCHyiYccJthvWb3xTYUC6Wvo4UEg",
  "key28": "4Gnfno7DjoBU1ZbeHgprWefc7VMq32o6rb7T3JQjgBmBWGkJdjWbz2HsCBx5GbFQk7ZRPcVTnU85TY7qudpwE8dj",
  "key29": "2PMDuCEZq2BQwKETrZdxmvRfb5aFf3yeztixeGuse93ygLA8QcJeamYGLJ9avDEWePQwGnyX7LntVzkrW1zkkqHZ",
  "key30": "2ZmShbTHpzJaw2wsvHPDtntex4RAy3MKBuMfebRqQW6kFuRfgAW6HpJ6kTQWs9Sa4r8DfvUHZPErdB3k12QhSV5m",
  "key31": "5raSvcX7tLu6cYps7YhHSL4aAnFxvJ6bAs2CLDqxuWzPKv161As3svZSUefEdmoVNsqQSeMeKXqsn3wqsFNGG6Dg",
  "key32": "3rZHGmL7nx2NVMx6gE1rW7s3h5Maxn17vxvY1SYd1TFQqKWSa6sC1qEvwtLLU9BP4mtNrW5rxx2KcVDQ7YAC4xgC",
  "key33": "3aMpFnjgytaJApC5owQet19CucPQS57C3g59EdADSBaPwcyCcQ1sMwDP28hZQyNgSAMFF75uWkJFJU2QrUS18GgQ",
  "key34": "xkimkEnUUKxmTDvDenNpFPytRkJgmBwUyw9eW24Ri9tuFsMPNYYosHBkgRpLpCJkPbt9etC9TMpQo78CYrwtGn8",
  "key35": "4DpvnftSWTRVVbymRwLe57JGf5Q5xPAPZXajZZJ8HJtUdDiKNbaLdeD2X8N99Sbfuyf4xhMHm196GRdT7M8vgxwM",
  "key36": "47SQtXB8HeKVGHdgavLSUfr7ZfkdxD5wFU9XuJ3mUTYnFaqxEWdnDkGEgcfw3EewCqcEzvyBW4YsKdFnq71AwCKS",
  "key37": "2DyYn76v9sQy4XWuMiM8ybjygzorhbGkQa918kV4VprsqAZnTMFBBorL7BQTe2YZUGcNqtwoN9weRbESWVnQgYEc"
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
