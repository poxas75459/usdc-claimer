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
    "FJyGsu4jnvgXG66Ui5p7d1riX9FXaaogtjvh2DhGTD2NPxE7urBszNWS9hJwMs2TWDgr7WkXgXtTSJHTmDXybw7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v7Xox5Hg1KetZKj6VvJyh7bcUzQJg65i6fCFdJuuKWqqEp87coqokcW8SYJ4cMPkeuJXzsaZaBnybP7ZbHhzWPR",
  "key1": "2knHP1d4jsakZMB1kigxuG2CntCTfJ6HrMH1jrrKRkb9hKzmFxhcbrPVuAu4jgmqDg3NtrfuQP1DnT73pE8NqLeh",
  "key2": "3Yh4Hwjs5gsszjVQGiWFHSuUNMLZuFYHxX378NSDwQWye3gdy38zRUvxVFsuBSfgPpHBTYgRniyPcvZKVMhToZzZ",
  "key3": "4zAG5bD5y3BSQX9iCjqwfoSDLWHAebS5cQxGsv4yfkoZfVpnVgBn77xQ3ZqvAkq7NAsAxzH6JiatjHigrJZq2DnF",
  "key4": "3eZ5vuLgFms6Q4V6bzkCbag97wVzqKqLd4bimCfeDE4h31Hbb3edhBwEb5ipg4xeF14xHC9vgFPYFLkmoWUiEYZy",
  "key5": "3rKyKtiDv1yaiXuZnAsJxb6rVALyZ58Jm2teNTKXGWPCsAK2vzBL9w3U9G4mbcRcgDf1g6fNdhTtXudHmy2QV8To",
  "key6": "P9inM3k5a5X4vZfCUstLEmhJyijAfLoPg1G6TPQWWiP2DkDoJ6BcbC1mv3fmEAvQypdKgPhuD3YP7okzWTZvCm5",
  "key7": "5HfNQPNpQikM35ZFuzto8yYS8uosGtQfgGkKmovkwzuXZndT9ybfJu4fddoYXjCMdJy4fnBGzC4yfT3gCz3NQt7K",
  "key8": "5GR8fb8Xxy9MoKTxkruqGn7FAPVYt4ocBiMVMQhKWFiXZWVZBJn7KL5SY2zqscUKShQ1hKzhJNPMVaHmqEBdvcxq",
  "key9": "2Z7fMD7PRb8bQEtzGaaVzTsSo2CMqJKf638aUQR6NMfZMj6Rai6vUd8TdSoRhhrMVQAom3WXLoDYpwJnT9UFoeaJ",
  "key10": "3fxfLoEfBh5QFszvo62cTy77UFXFDU54Pdnw2ey5rc3vWbsD64684siDfLh71KXTjTFfwrN7WAL7HCjsqbFPBWTa",
  "key11": "4QZFLzkCwPfPfgm5Xcn6rNXQUBGAiUyi1sm7wtd4D9X6KaTFs21ziBdAh54QM7Ysu4Go9AnoxyZUgtTr3jdQUkxC",
  "key12": "64U7kykQbpvfMNkch3R31AZQuteTJ62qYsfeSiMFfQkDmCpR9sDBAEM19bYroBTPdY3w9aTYXtCwQbGKjfQSWcwm",
  "key13": "4MdH7AS9RZ5KaTidDeh4MLQ3rgU7M6Z9gjFcwxaEXtTGgFuRjbSqJ3mUGXc3nfYpGPpzeXVZ9PKodRhPofpvgzVi",
  "key14": "3V5YhpnuxjmXsfCv4KbaGUheghY6fsxUeF6JzjLjDSmouGA6mDgBf7fzCs3jqWKjnjL3CU7A2qehFvEjtDs4yPBH",
  "key15": "4t2vWtFyf84HR5L6WqUw1PKYiRx3biGzxbksfhSUeKNNP12jig4hdvkgzq6jS6NV3kQ8QY6wmQNQjV44zMF74APW",
  "key16": "2P8iE5N8QuRdFdb24R8grB7rJk2u8gN8Rt3oan5V4gp5bzopG9MtNbFbqVW5bKnodQr6VswnUdnrUbWvvz5M9v42",
  "key17": "4WqwKS6tDXhVLBoxRUaavndHUG5KqFvk81LHRegWQgHp3vNmux1KTX15rXaz6DJkoQMm5S4advatCYAYCVL6tswp",
  "key18": "VQLQvcnv47Qiq5UPYT1exmSFYxhccWzetYfPA5iW4AJCQgwh99nzpXmRckQaGJ6EsU41HfYhptWZQSZ1Efk1oTu",
  "key19": "2ddKbuaRr9C9rWuYMacmsYxm1VTLUAyHe4YRtdJqEoAyFyBstriMYH5xrc2PVH4uMgi7N7xsH6REmVxt4QzC7qRn",
  "key20": "21TnPdGxLSmWtRMUFw9LNjxGoQ43jfvY2jXuDCMZyKwdxbCEfCNiKSKjmmzpriTo4YmUFdfhsivxezRsMUbgtu6Y",
  "key21": "zhHLSKVTR7uYjEs1vwvQ2Kv9Hx1HVdy7AAKv8oQ9cudpXk6q2XXKSNeHvLDRsHzNobctv9kp6ZUJJsZpFjN4nVo",
  "key22": "mv5eX8QaXgVABcECKYPrvouuCYZGdwLB2BQAtvCjnYFQsoLQaPbgoGBsoJQohNB7HaSBkfdi7wSixrJwH7LdAyK",
  "key23": "39eZYwGAtUgJBa3fJ3RTByeEKQ4EYAJTzCVod1jtb5wfZgxYrbtMQEznX7PbKMkKmPJbz7Yrp8gJ9ecT6cPT1tNe",
  "key24": "2YXswGUCEEc7aBqJAuuYziXoQkuNCUVajBygvYgY3G3M7ZzeB9j1Dm1WpERgmzsP6KdqVNksSUQhxd8NJFF7dJEe",
  "key25": "4XWCcB31b8pEuMGvVsD692FpHyYey5CcUdPcMupx9KaW6meCZNQiSyn4kyJoQf1Bk4tBMd1asMSC8eGR65Ap5qVv",
  "key26": "54muxEPkWrcNf1jogG3Z5spUCbaex45SduN8WnF5mHaNAsdHyQs4DgVoapP3DKNHTnndjXWYztzsJrTmjmNmTELq",
  "key27": "4gsgDy5hWNjsingKMDp8KeqLYVLgeUbZYRcy3u8zZgzGycWZ7bA22cQMSEybJfjwxUNXTnfVaHc2xcYtZeKVU1Lh",
  "key28": "2i6T2RJQb9x9j21CZVR6yLGTs6hXuX8xXPbggSmRPrig8jMgLbfWzXGp45N7fFj9U82n6UmMH8MkQQ5xn5Lh4S61",
  "key29": "2ZWFW2HuuqvjwnQoyAc8kxsc8dJrk7uofBbqvV7Q4LpJw95UbEmtm2fJeYLSDCH3ZQcqgJut9PkAs8hihZtYq8Uq",
  "key30": "2T1kWiMS4rv2v6zy3DwdmkcR9igE92VGuSaD7oapyAAtcAFLwh8wU3YnjEWxEhhFVPDLoHJp5wRMdNLQNXTWJNTn",
  "key31": "66DGRCX4kb493KGhSb9H6LJWXm3coDudAmsr37zEyoDKKgcyifXhPQ4B2tW9ytmGjoDv66WFcaMxdvwBRbQiaCQk",
  "key32": "34Tvg5sNy2sVasNcxuQri422ModWoJsYnF1GfvxZxdSzfMjweGz9TZvqWLV3P5dgTAXqMisZeUvt45VPCUtttKQz",
  "key33": "2qFHzqtNJktBK6JNwLTf2sGoH3APUNxhBPmaE3rLUpg1QpgD9RJUGbv3rA9fMgcyxSQrW9PBjCQghLgJGi58uJkE",
  "key34": "3JqPQWhmRY4dQ1Yo9eRi7wyhU1DEnSftihwsu5Han3tVJimi2te3THqT9n6toJawXV1RJGsEpEMY4aaVggPZMp4x",
  "key35": "NMS7Vwsdyi1rKoqrsmEwA2wY9QhUUvekGarQobgu2QV58oVrhMNb17v4bCkSpBM9BN9AKxmjhwA5izGfazDto3i",
  "key36": "577bhS6LcCSvxSreQVzsAjeE7XEzA4orYnkFS7G3nXPcVoWuVx1Uik5nrSTig4JLpphrfm3L5F422LHVzqJ13bVq",
  "key37": "3XFonWg7ZGRXYLJLLwQodDjwASPTm8uNv5rd1Q7mmLZF1XDJ4jDEt6dbyJe3CsfRuR46WSw5c69o6nph7TVPrYPj",
  "key38": "5YnvBP1SdrCAfNMNtTPVhxfApPkQdeUeg4EzMh1WLeDUVMMBTVPVyTatyJhVxfYVGTxwiyVy9etQTdchQJ4WXdAC",
  "key39": "3WEtn3R3WoYpBbgarriN2wFTBR37dRGVUKVP25YgqNcNzHC7meg97xAgBKpPECFEB8jV2jLk4SzBcVmHLqJAHKKX",
  "key40": "wFZJ3H9SSNSnGGqbpct3GekenMPtFpqfXHk4K9yYh6Hb4kx1SWjukdWAKnP9tXmTXXySf87gSxjHf7xGWNachGk",
  "key41": "2TrSX1gYSmiqgELrJPHFS6zo6i6u9XhywyedC8R4s8qGsBGb3uiVZts7HMGSrH9n1VBM1bMjexq9A48jmGReuLc9",
  "key42": "3i13S4qHAHMFqFjoPgGscZRke624zLvzcenc11y5xrSQAuKNStqFfYPctpGcWQYSCgTDj8osoVm7dbcB3h7DfssJ",
  "key43": "fcz1p51Zz4fz2JcY9wt65cyWXRaUEb7Nv7K8Tqmt5y6smP1at5AzzgQwSo8Zbon8XSesioyZRMV1ABRKKimj3Xt",
  "key44": "27Aeoe3kU6Nxs5Lws1MMsQV3X29dZceQTnUCRGFi9U7RyEGTcVkXNhkFTNiajmsz5UpX2AJMbqGdE79HqYcrYk5w",
  "key45": "34t9nq7S3Edv1vg1YcNNMBuKVBgLvSFfHWLkVi71xuUBosY1GspGpDGYgsTHq9yrhjLoFiNPvzFqpULaoGJCH44V"
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
