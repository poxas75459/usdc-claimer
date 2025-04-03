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
    "5VsPa4NcoZBng1X6bpWdw2Jwqtd1Uhy2Thw22CZ7Cc5NwcqkyXa4LduHPX5WzxCYjA7Lz4ic95h9cSbqiq7sMydH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kQ1KiWmfeVU862DE93N2fnia8bCH7f2w5CyJpRaRUFnTrj28iTS6zMar2bLu4mGyE4PyNz5SFLb2uRTSiqJhSDs",
  "key1": "2aqNLxwEhG9ER5PkqJnzLgyn7R4RgxSMmVRX6mg9QFf92uSkUaM1KMTsgaZFLQeM8ND5BHq5u1yF739Wqjs9Gh55",
  "key2": "3EpmzaKGFNBsW1soEmpBTeBqx9knKPXebG3BxsUcd17GmH43pE9swXxCY9rAhLA1P6sFauGSu1LnYA7e688tR6DZ",
  "key3": "4BzM5TDsY2DsAPctGgQYfJghTx5vLErDBBaSnCTVgR2AGxcuwZsasWnv1UiSvdDSKas1uuQv5d4JnPRMiTVsRub9",
  "key4": "4KKccjAXd7zLeYvzJB5Z8F1rYb7gDZsex1mgKdFLj1KTM2c8ZRsTCZe4n8G6xDLKej951ENaoYio6DCocCeBGvMR",
  "key5": "4dpyRaKU4hEJMQ1BEjF6Z3PftPHyjUC5TG5JcfLNUifSxkQr5zDQLqtqbbRXm7oiYGwQkZfGY5sxnAiQ6Xg14RGQ",
  "key6": "3zeceRMwRYBQUeEp8o7rK2aB1y2HtcTXwV6gqbWGLsNCF6VqfJtnRZquggGsYYFpoXaELZD669XrHKy2UfL35XAQ",
  "key7": "3eeALzrmH1APBeSLfqfMXMzWKJkQTot6QuMVicjA7VMnYsfbBVVSW5zLCEh9a6ucfqbxPHmii7eYhzAur9MPRAA3",
  "key8": "5YhRwxqd8pibAqwmEJiWdkBZSQGS5vukZ7zWiNzvCkRX4pQCvmXFZcxPDocHoCoHFDWVWaFckE4ydumSsiUfcSLA",
  "key9": "3dpBFw5HH6Br1aBHMMQgzBdpqTvED1kyecLD6Ap3GKmVaWFYuL6ympH1B4YkRYAHSkhKxcJg8bC3cx3KADSv6eWY",
  "key10": "5cBde8DXmtPMiEocqvjnNi4p5YSCzv3HGjLpaETofSVK1Jnc3JvZ2B7ZYpGz6qcAYtwSxhUBe5vHsxsBKJVE6hpN",
  "key11": "5KQ2yz4dpkM8Q679mwsZcsBvwWixoZTykbvRrtY5g2q3kmvbC8vVQMXanLSxziPGjVSpA7zPR2xJJbja4foK4Zpy",
  "key12": "opzhavAYEQ1m1R63Hs5212jYaG1g4GrysRjqExka5UYwAhDyhjyD1i3eLejhvni1HqeJV5DY39tAhhLen6t54mn",
  "key13": "4n3vE3jsgkgV7GB6rMUSUZHhoL97gt2vnE4FA2cKU8JRUjUptNMNmL7a9EJyf6JTWb4inn4Wxi9pya6dh6Jckbmd",
  "key14": "5KrHjBm6sqwdmYomgnJtD8jPPfTCjSXKiNER8tyu5yBJvrcsGkMP9eb4ubjYGSuWpmbbzA2AyzYgSC7CUCsu6Vwa",
  "key15": "2gkWQgpjGihwzoPRZYV3d2akExsWXW9obCFx7gjosBZPHoLXzFr5LjhgBzNnPBaW5SYWw6pscHc1cKuawYVPhwDB",
  "key16": "2eAKm6jRGnkEC3tJC8hyTLzKgSs76zcFQZmdG2zb1sneZsgoKbporxrZ9LRRLag2zAGfEmBSMgBAhdrjvLigpmoK",
  "key17": "4aJGunt7AHsqc7zEshqKgLHHzLk3xcxnBFbsPTepDu9yBpR8mcYxQREMgrhU8yaNL33aErzYD5Uqxm96odu574E8",
  "key18": "4qCiUPv1UqDtfsJk43bHJjvZALphwu29YzBD4h5z9YEvUR5ZAPXc3StgCi2Gv3PX3UaudbDTetmKT1FBXKrMrbpi",
  "key19": "3vgYLxU39xHWETJdF6b5BDvyKRWSmJHg7ajxgqjNweXTnhsGxzX3DibSN9otTNf9sG9WagrX47CPbFd8QfXUT9cy",
  "key20": "4SdT6gb7kkNada3qoMWKKQUqyUnMumJNhvBCAFdq5B6SS4ymRi6TuPaY8TPGaMwuRe1BMJTnp6uHQxhW9QQQ4sbj",
  "key21": "qMDa3RzXiovyuv95c8rahniCobaMhDrmJxANgTW7UertWtPbsJdMY7yqDL5bmj8TFxckpsw4rDAyyZprevRLi3g",
  "key22": "5pGwhHHY1Su6TSZkchSoZ9gt6h1uREB1GYjoS1aZbTYgY8t6QKsgqvPQTSSbSoWrbFapGwThVWqiJYVi47vXhoLF",
  "key23": "4yPFQUee93jLUzyWazc2ygKaJgrV86d8yN383GkvjYNXUYX1djwpWx4MoX464SBFR5cN7BTfUSWomA2xKRS6bsZf",
  "key24": "33YdY7gCu8PSJCt2TEBYVR4QCFUXEFBcLf6GdERu9vV3NRLSTdp2JTbX3oVjTvKRdkM2oVQ2bGoJ6KTt3YCLP8TN",
  "key25": "34512DgAQL12twKDLBnspShVrUGRbU29ffbbHPpEcdh1QhEjw4rTdfoSFmkj1cFWcYwzR8bmsCtX1eVKfdkVjaPq",
  "key26": "4eXGtftHLzPTWAYo1ijFDW6VDBgbxWvVFGQr5G9DJ6VTAXgWgTvP3Pojn2YPWkJBhe3AUnVTnMfyigdQTdBWaTFn",
  "key27": "TuecxMtUvMWFn1GZYvb9DzZpYWUTH3rJsqPzFy1XGim2NdFqbaoNWJo6GNmMrHLCWEBxxH2embP2FpsUPaxQiT1",
  "key28": "2v3r4o9eaeYca7rWkYCKXzGdp5ZsmbeVovpx2xPjCeV6TaQFMZ564BM7NVL1mRLh2No5iQCFQw8J5dX9UqYmC1k4",
  "key29": "rFZ9vsNSxQd2r4DnFq7Am5ne7JA5r6eMugYBy2bzqCbpPUEnDjp1DDNPPRLJTfjXFur7YqGXzXUdUW5ZNYRvvEK",
  "key30": "3Pb5fnqRQ4GmQ6x52Jx5HmhcqhaKrRJsuFgBQFTULvyNWwUHD6HmQKyW2zBxsbSPt5fJjBVinkCcPAuDCHJqFpwx",
  "key31": "m3JuRwfBTy9Tr5W5UgjyTC8A83XKeQKq6uY2y9equqkjVkU4Ch8uK3e1PqQwXQBnC9QJG1wzWpf4bjMFvkQ8XmQ",
  "key32": "5ytDaMFzggaytk85iQxyFJSUPfJVPpJHbg1NVyNyYCWyWeeNH6tVtZ5URLKDDtc16VsMGsFMVUArMZXrAWRFXLov",
  "key33": "3Qwuvj3ZvTZZJxJVY8SmkQrGaNnU7Ldqp5YtTdnb7LmccXQdVCtUZkwYyM2SyUp9NH2mWa9ic6WotdMvGJucq4Rs",
  "key34": "BZbQRAHhsXTFBsSWVopuBGsAerWt4S8VXXZsWWe6q5cGxGFzjS79HnkZ3gZL8iqKN3AyA7sZ6MDorqn4ykrSVQY",
  "key35": "3DUQqarPBSJ43Yf6bWuDGxuCjsu8mzgY2GbNcmbFkSZxgpv7aUzdhAt9b9w38AAmHRgp5ekro7jUnhH2mnz4QJRi"
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
