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
    "2DT6mVZcqVvfti39SJ7vYDpdoVxbEm7wVGJff2HLcThRf23YayapPxvtLdnGhxZDfm4rVVW4kMnsQHkRf7gimmSV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CC9ChmqS863WcKR9fm53pYTWATAfjtDxQfvDnn7dXfT6PNPpzNNL6aCYYsD12E2W4RvR7Wu7CFAWVNo2rDxxqna",
  "key1": "3gWsutFcB5PL5mnxVHgmBe93YbaQwkXiDvKH6uw9oRuHL8gRVdKLyk3BU25VDZDDKwMuUGxicozWqM8cnycgvYmq",
  "key2": "2j51Jnx2TnNyuPH1Xe8wt8BHWP26GjKcgPGRpwJESHMNCizCXbLfVQxbz5VZgv6GxXsG9hqi3iJ5nEjrJzgAgTmo",
  "key3": "5r1LwRQMGEUa24Ws97dkud1n4aEr2jeiMeC2h8zEpeQ9sTMTAhqHhnXphTo9PAmReEJ9yb4EK2Kv9Y3fhJ3q9XbU",
  "key4": "2DHAywG6o9y5z5Dy2Zw1ShnKaMvA6upvAJzHU14ugjJk7qYPETUJBjx8eqcGmgg8Q7KfUz35fap5M44KGohDk1L1",
  "key5": "2ct4qahQ2zxRZthsoZ7fJDNMwcsxFHx7EvPu9VNZgkWFtzQH5RJFEj2DF2VRmMfKW6sRXrjyL7YmvtCQb2TAayQS",
  "key6": "65ckW1Rz1rqL9SkecHRgWE7R3NG5b7odcvQkdDuqEf9Hoin3eYDjjihhSKxrKhPgrHBmukDp5WygWUn87uZ3atbH",
  "key7": "5DLtiobvEaDpArkHToL8BueLA4PDsvKnJxBxpZrp1oZgYyghughYNDfY81c3NpZ2t5mLctBqwPYgxdA5wo9779fG",
  "key8": "2yFiacnWzfjT2kUsL9ME4eyzZac6tKxMvx2twKtXFNUk7iMuRrgYxbYCK3XUHKCH77tkgJZwWu2KcYNJoZtDjYjR",
  "key9": "5Hqssz3gBEw7mgszjmLQCajUZ4h7Yd3AKKAJ994tdTtZyCrq7LT4u1st7zvvv8ckn69BxoEt4uYWi1utgaPJxP8D",
  "key10": "X4Y3RY8m5vL1VzkLXZcBSYTHzPVLmw569q67kaCLdXBY7ycJTzYjDBeG4XhWjeMyXhkmvwLwjHQ91kCfecf5Sxk",
  "key11": "27jJULuZAhJVZ1v8DZTKMGdD7JXkBu4zWfvs8eVRPEGQreaMKzvUie96Jaj558uvZb4AMtTT4ZJFGYwLJ7dGFpKV",
  "key12": "3vmvUYdces2ehHTMNB9gdxgH6Miqm9v7uGZ8UJBRoy7QXDk2GNRQyXGxeyDQiByJFo5J4CT2TRVJRBUpGy1diAGG",
  "key13": "4PZoJx4NtoS7A8VtcuNuau1nZt5MdF5HGgEFw7T4rCvowznU919xDBMaDyvMs26ewoeqoitgiB8QziPJSBeePiLT",
  "key14": "5uvrJdCLkQmZYRiPGBeDRTgKNefRT1k7tsfVR4PhkfEvmGFRvPgGm1wKBJU2G7fQJKvgBqMRFJZSJkyQ62ta9m4z",
  "key15": "61Hg1SCSJY3dRdc1PMJCASF7nNzueANL4ZRwSKrQ79ojm6degVQTa6J2ySBFd3ZUgfKU7c2tWM69Q2D7oiRMKYkc",
  "key16": "5gv8vfkkgeZgriNKGnHw19FSMXuwhRneFPu8RD6tSDdoLPUTnkd8QvrYnum9GD6CrsHkMy1U5apkjkkUBp8YnYo4",
  "key17": "4bn4ZVZH7p4h7zhNLvh4BpnQvwbHPV5Amo4D6eTLY9gvGhPiLqs6ae7NDsA81TNanC1cAxAMzCytH9KrVuuK4Jqi",
  "key18": "2ixgG2K9H3nDuEgq5VHBhwcSKWQvuFZ4PKpcxrJrThqu6sTcFVZj6vmFrvrwumBTgcJsYeWtsaa6EqMwAUFgf5KP",
  "key19": "srKUGFKqHHy56FV9wRfvUBiXsMdMzov9dU9Du7E8YMpATCTsku3DTZw1ywyM8WhrTyCMNqX5k3oidwchDzdAcEG",
  "key20": "32ZFTLp2o3HgHdYsaXvp8NJ2Td6tj55gYBDCWuZD4pdfrUq47LofJG23Y7RrJ1mt5S5tGcuVbT9XTodLoWzkvDUR",
  "key21": "63oD42ebNH28mj9wbjLQ7Jb4reYzVzeHSimpjLP9Bk7PVKiEed96eUAmRQTS2pK2mFvwABxtU4i8yZQqunUpZUHa",
  "key22": "5gAGs36pgmvQMezystZFZHkaoJo7e5x1NLUHbRstEQwqe94DfgCcF2ThMrzM7CFPNSV2CN7biFn7SMndo3rBakph",
  "key23": "23jCP9v2YDtuGtsS64brauzo2BuFFLZPoZNHN7qEwouthSbc6octPaAz3P7Yc1zuxXJMRH6aKrmBfufu9CuCsNYm",
  "key24": "2KoDgu9U6y75WPbSVZh4gD74AkNSnH6Eg9isz8fyVYbb557TkVRvXrtrMmEBPvyVSgbr6HPMkCpADJGgUzzaN1qf",
  "key25": "Y8wL1CdtDUXZZt3WJzJz2pE857ps2WeQUe34AshTKdDyAXK8rb2X9FUR8G8M2bFW39DQU8dcu7dA6MrDVhhFExQ",
  "key26": "5aLbTvbkstKDtZzjBpdzQwdSpQ8gWYbe3bjij8aR95LpVUwJAjmDSzgH2g4uKnqZ1DX1GXisNiFGZjbhD7qqVAat",
  "key27": "3GYVpLZ4NVfvJBZ6BtDs8ejvSojo2sQXv5KWWHJR7Yp28ytr34XJpRaDFfusWUY5omrDetyf3ffPWSAvoY9s4XDa",
  "key28": "4zwpYu3UF8iQr68wLp1L8EqiJgx2XMvusepzFUc3H7TG1iwPYJqYkAWCfLZPDB1c7PffT3EoDMQp3wyMxKvTUPmn",
  "key29": "4Af1x4eKxz9yrc8YCk2QGreLBiprUUy4QJeRQj2UHm5oGfDjuPUbQz5wGmGisQnT5m8fMBc5Hx34G6gw94cuGBZq",
  "key30": "37PxxBnm19HrMYUWDep1xR9AjipjHA3fFBAZ9VnzZKM4mzZ14B8eSuRpDm6sdkZYUgEDA62CxrJJDVPXEkqZ3LJL",
  "key31": "4kn8iH86t4WShf7f6BacVe9Fta1HxPZLi2i23Gmv6U6ZGcDdEYrYMWdJvc1ppKFEdyiL9UBxXMJjb1xM3JpsFSbG",
  "key32": "4SEZM7SxziTvXTJ1TwixXN79FHg7jNteyazBxP1BrT9zjYHNQC9BNanfRYaxF7esMr2trh2rhmmM1ijsm5ZUqVka",
  "key33": "4hxKh5Z4hUuZTZby1r1b3QQ8xnKeXgtjE4KW9groNqjhjUKXcFXxUn1kbrXyGDx3eDdCg7skxQqGNvSFGeg56jQs",
  "key34": "5Hza9NYZcUxscRV2StBU1SfZuJC9vGnTtpjrXYSH96JanuXBfJ5iyn7zmx3PtG8R6Fgp6NbNY7X2W1Ms4HeBgJ7c",
  "key35": "5UFE73fsMVFQ6RnQ2i76fzkapi4XQJtJznov5hQ7XDD33Cxouj4nsW9ArNJA1DUQUUn45wVr3Q5zMuEhoPLLMnon",
  "key36": "2fD1zAGYNg2pShUAWJnq6TQRsgaM4zhKChcTjD9Lxg2HNXTzBWhZHeccdvR9YbLc9UznBzH1e79n9dy9wCdNchzK",
  "key37": "2rGzMAHfVVVc9PecXjB54NHZijNgHXk6Q8uHZFzY4cYT9fdBXJ4S5eQHWFooyvKJDutwTevgt7z8vsVMuX3pWrqs",
  "key38": "23U7EQnSEp1usEcDzivcxMjXbWoedg62ShDJACpyRLAdvuvL2cJYGF68tEm8FbiqRb3pau4SsJvL6cJ478Bv1L1N",
  "key39": "3dQPqLdNH4dCi7oFL1Msgcun8jS5E58XXagnRkFMVGexZ4guxTv9RFPXRzVzLK95fdbd8crQd5YZdPSsDggQKxx1",
  "key40": "36EhkkGoeEgevihVdWUEGG9VDT6zQ5EfXAaGGwkA8Zd6zRLFfKWdUVM3RHT6WXdQVh6Qz6F5y35ovWF2Sw1WyyRg",
  "key41": "5PaJFMdQ3HAiU9nEq8HSPcX9Vzw4acErfPcckPK68rBSV91AGQULi6NKecZKVi6wCNZUhLoiQBBfxQHMBZuvXiQY",
  "key42": "64vRMzxT1Cov8zL3JSAszqUwtfKgi2QdxsvrqMt7VgERxqxS5ToRoadKyhU3KLkwFdurp9McoxdqXEn71LtHCMcc",
  "key43": "4mHK7qjFhWnj2RTHLQ28mwLns9anBLjKWAeqE4dTrWmtbYCoh9UgRbeAzf9fk6kjhAyi7wM8nPwFFC9U4sUAR3T7",
  "key44": "3meRF4VQFYJ4eeZANTbHk4hcPV569mUXpnJ6tnCujiwTgNk5mVJ8m6Uo1pm3yQWUQh68Z5qSgcirmcvdokWHXs8t",
  "key45": "2WcQAU1AvBoMri7z2fLLpdbpHkEsZ8hq8AJG6GxBPu46hJmkiaqJGaQajMMc7BdnJs9FuDDcV4Srxz5WsJywABWN",
  "key46": "hY988RzyxUkpx1XUXyTi7qYRevr89dNrJAuHyQz6c7iM76QcqsHK8mppcLvCPi8MvWFWjUBtSnBw1c4LgTjnf2u"
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
