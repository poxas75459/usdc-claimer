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
    "k8GiJy7DJE9oqLbfMmwyLewWxRGxzfPtUA2ACMKCYV11KxNZfnPzr9t8UZjAFqY69kpsexbt6z9avKfozSVsAto"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43jBdc7cg3GczeJpQhRSstq1prjqyNiLXTJyLp4moo7nBNEx6eya9xd13Lf5EevUCDwKuZmX3GH3oGpvmc3e5Cfc",
  "key1": "2aBH2C26N1VNzLWZdsEugsYYSdyzrV1hTLKYVjgvpQeFGraVTET3xQuitJFVk2cRJhAT3DVWTLQGiZSXtFVBXnTv",
  "key2": "5v6TpX9B3tgSToBQx6qqSQL9rUsBCDhQskHSUHfREhL7jx5BDUBbzPxgqSxpJLhCM6D4GhDZK9qcdXaqX19caFMV",
  "key3": "2TNCccfCbZT8aDQ7vKbwEej8GoheZEd1JRuwnq4MDZRaXbkbPjhJE2HeVC5LDuCybsa9QrcakH1MeRcc4NrTw1Ls",
  "key4": "4rVqxaoTg9vJc8EdvaJ8ML1u4q1kSCXnvXjZD7uJf6ymTvPVJUjGwSnuLCD2pmKzqVywzV2VaeFZTG7dXGDmz1qU",
  "key5": "43URENuPp3d561DbFPdZKLjrx9Khi4cKrjBg3db7ECvtX6XDcYCutCA8fHvoXyKGdKyiWiWjc26qya1PWaU7fiSt",
  "key6": "4WgavQsLyWV4rTmB8YpRpaq8KniTq8RQMjvj9vKi6jsUCixcufqZ3y38mmPcUQR3JqC1SY776rKzpnth98vG8chH",
  "key7": "Z7deVLMprLZFd6fM9T86F7PiHMNhQ4Xz3ruo4eBVBufJnfSvceqmJX7pUfJogX66eYqjBr1oXTUj1W1dUXeE9ng",
  "key8": "mL22CCPabHHo8QUc6xkebZpa7yW3MspbKjeJruHSJpkQ1jdroDJzEtHBf64Lde9LzcD1UpGa3TrTYR1FaJWTTDM",
  "key9": "syUrGgHqZwPbqHSE3rymLzsqT5kf9NJCrBtFi6TgXebJjrGKJibAtorNbQURuR2ySihy9jr5tVpqkhbNi4thZrE",
  "key10": "54oA6ak8uak5MZNMYyBwMN7jdqkzHZGSyB29Y3TEfit3hM4RRGvKhRHFdHzKjNKbJVuwWkyzK3f5pEVXdC7MkYmH",
  "key11": "5L8uUbvKXrNu7FXdCV97hS3w4KDzN12pyNZwR8DGLuaEAeYhvEkwW6hNX1i83eM4tbSwuisz13bT5v5cZV3nJyxc",
  "key12": "4Nfv3QkkPmLvBHjz1cWejsSwTtBSuRLByBd28F3s2DdSYLpa1N2PRcPbQ1xERVBXHvH7JE9uvsG4TmnGsG3Mwehb",
  "key13": "3f76dtfqQmy1vppx2n1dFoYWZxe9x4yck5RV9bgKZVHBdphipqetXGkHFG9vChDcYUsDEBsDzi191oDjBeGvSWyu",
  "key14": "5p9n6HBMBQyR1xDRej5xA2zTt6EAU54WAfr9syrHcwsbs2qXBKcdHiMDrZY9JbUseZE8ZkSyCNTrsThyoRsx8UvN",
  "key15": "nk72ubPznxGANqiQtWFfHqpWT5DBjJYDRtkkaqQzjUFeWyTNVgwXdggWMPQPZfU5JBZg77PbWQxpGqLMHbYLmKq",
  "key16": "3SmLgKyx3qCESSSWap2K5pHjHf4YbiyipUzf8fMpN9jdvKAujChmBTw1iAxWojYZttKhG1Fj748w9UwvGFZoxS1H",
  "key17": "2HucwKBejJmivYjZnYqcofmgWu3HSANvxqadeRqDhmbhd98rMn8QoozEghkfqhcneLJwNv7GL1ivjJbQXHo8qHTE",
  "key18": "3pGtm56igQYCs5AipJSsekNmFtKF6imhfXcn8DmFDGsQdyhKQKBxNrAQbfNrsvxSfqux2WcrHdVnLQrMNGLi8VRR",
  "key19": "515mhx1tr2eVUWpeBCGKqGy321Kn9Vas9x61KhtfXRpFMjqLbsseNSFMYoy4jiiNnDnU37FCHQ456uZ9W4bGc5f3",
  "key20": "peUTSaz4ax5NGyrCfeVhE9ZMEhVKU3cLRckjeYZaE349QpVCQyCM5sNbU5ejXvLkjwzmaR8a5rwv3DwsJJLpamx",
  "key21": "5j29RjK2rVxd361N2zNK1L3h7B1QCn2kGpy8yDFu6t4a2fG6oDGppMFbFwhqwJtdKrRQ3rjVS5v3EkfrpHkQtFwe",
  "key22": "cjFQfZY8kBeBA2XnrVvMW3Kr47oecfEF5dyjSAcFiFSACS2P1a4jJ3MaVhD1y7hsF7iLsDBuUANSRh2gDnFayzF",
  "key23": "4ZaSZGFcWfhaTXiifTVnnKTRUTHTrCoz3cDs3FreFhektucTE2bwp1FbxqcntQpVum1pfGkjvMonJsWRcZd17gJ3",
  "key24": "4sKrbcXnxt9dq1y5wkUvgqCnmkA5fiJYcfWwEfc79hE4izHFVemXGPUF36T9QWsiCApezUkKepnemXSqVLfD7Pb7",
  "key25": "4prc1FNg18AdD4G9HvfAuYm733xrFAAeDcmVV7PzbmwpvdJEf6g5Hu8prnrirHyTzUykotvry7G9hJvzNL6d7Yht",
  "key26": "3poGRwsNj4Tk8r5arLgtSMJpZvSuaspcmadJtP2gRsR7YhFiheKVpp1FGxMJdnMmrJkmLx1fvqBdF8VaKXPuyaPB",
  "key27": "5yrfpN9Fs1gamiRS1Rynmmw6SVvnzeNLkKaSQ3MH5q7qLcRGvA6D6ry9Fxxr65oS7FHTuJ8kgQ9CnnMsfBRoreVZ",
  "key28": "2LvUTfMeDhL2rW75og5Y7RDoQRaETfC7efoYAHKdVKE2NcGnPD7Js3URp64UZYLwHkUmutTsuARFSTndmKLVC4pG",
  "key29": "48D5CMvtw2NFTttwUk7fKJ4qUhQCxkZDQdtSMKAcuZy13G3fSGZK1ARMoMnSyUYuxgXjVcFFBRE86qAg98sabHt8",
  "key30": "3ZmDBtt1qP5t1eaUNfupZvGQaLBgzhteqUYGjKiKqbEabiWxV6z4VqZFVFUbGd1aHnr4JPBhgfQgDrhohxnvWJfs",
  "key31": "2s3kKBSFssxS2beSyuTqWCCHxDz2FdRhL8QUsSidn47HioskAYkFmUjemPJUPmSWLPuEcFHkttB1BzJdX6WgyXFq",
  "key32": "5KJv5sDQbzvq3D9QkHYdYFYEmYzdAb76E8bUFnKVHtn5TaMSuGNTHJu67X16M7zurFX4s53iih8qS9Sb17tyLgt8",
  "key33": "26YSk5tYJBcKihQAXFAxQXun7Vg8J6Xh9R8aCs6hBMEHFT95D3fHsfC5jU8uvEVtRrkjMHFZKqnfiZLEMbirj4n5",
  "key34": "2mWJKwtSeets2ytL8rFQhgHN3qye1rvPgZhfT1MW7qAN5i6WnreXVebUjKovRXdPvaau5pUoZ9a3uWixnhSnJtR8",
  "key35": "63D2gP7HzPgxLcqvEMw4NQz6d3ZsgyDGPqxY7BWp19DWFZ3XieszEHwTNcqyQ6F3C5V1saqJb2QkpRndBU67z3ip",
  "key36": "34m4q2CqkbzGnZsfc2ghcNkiijBjwV3qJEXXjkNUcQjrTXEsRC8uDUopPnBHxB8bvAiJt6YaRceoubSEHXoDDpp1",
  "key37": "2APybzZhsKJVjJ4nQkwdsQsnzzyhAmncszde5o4UAyKYr32b9Mx97DyEHfKietkAiM8LKFKAwQfB96sMvN5w5u8N",
  "key38": "53YwevuBdDVunFq5Z4bCoDJcmt7oQ8Bdjh9i9TGbh38aXU96QjrXaeD99GLLRQrd6kgiYcLUMqxbQJ2ksb4b1oYJ",
  "key39": "ZygwcBH74LbPHcVoT7UkEWPBKMDqNKSqu7NRAGaUt9JmecU9p59j37ifNvahjB4ovXi4c2eT87anAeukcM2gu8R",
  "key40": "2ye11cfcj7GSzZDfNdPKYxAzovNtaBeTwhBaYextPMpqCBMVdXTLNJdpDgLpaWcj9uFnU8e8AwEyueHRTArERzmA",
  "key41": "4jdxYQm3DWdGqBPnMGHTnccn4pfvvSMxuqJEw1TphHoNycRvRMQTt9TwXy2wCXd9B4uKSVPpsd1WxjHggNQQ7baG",
  "key42": "42cVQUwEKvJL9y9VYviR6wwBNDvtbZKFEWFaCFCQZT7XpMZ8pvykV17rBpKnVXjs44qdX6V8YHeQFtRXKabHdXfV",
  "key43": "LnQa61pC9Jkyi971VEUpEKU4z2D8XJQgGsQetD1nCYnpsQQmzAmx2bw1vL7gyEPQwkBtJ7UELZ6875DhkVoixFG",
  "key44": "2Pn2MRypb1xX1gENJsRSNUYVMJJHWNkrgRzwraFLixWdWifcuxaypXPuFCbgHQQ8bmD4xA161RnsxT285b1dvHPz",
  "key45": "5ao1e5fah9fuSaFt17Z6jArLskMcjk1SheE2WkG6U6u7HovkTVAua39JcvdPKtgyJq9Zbp9sv4c9SmmZN9cdDHxd",
  "key46": "2tjWcZuFfuzLWyf9ECKBhGmZztszea6KNcNWyLuoa8aCv2aeAUeeAKvYaZKmedek1zB1wdHAy9n26VZJYo8CGBdz",
  "key47": "2TmhrtqQZDiZW5dwrbS71ym1s6VgodHCJnrp1DKvwnLTW8726RGsC6FoZP4iiuLn72scgjUqLXwa1mqDL89EkRV9",
  "key48": "3NkMuuQjsSTZ7uFJvTpaDgqAuyqaA17NsNXyxbs2L3tsAP3qmPUvnGt4Q7q1F5ipfzgUjVCxmZphDuYBm57dd96M"
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
