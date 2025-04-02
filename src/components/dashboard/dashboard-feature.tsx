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
    "4j3TnBeGGHqyAMRbPqGsM6aMggqeMAHddGVZz4rrdWJHVZA9qde4Ycm6zXmnp6zQTfuFYHpTHrGh7FGrH9zJuDfK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LPaVo3j8XTqeu5e5a9nrdBKTcvbqB1y7JbVpf5ahTNPE8zfCro9jS7Edvdy4EeMDa59pKDgp2a44tiUmE7AVfKR",
  "key1": "5L5rrvsLFnZpqA9xrXjoSiRMHVY8PEBELbrHvmxYKTyuSDwXBBsrbK7tWu2NjmaKNN5KB3JYLu9aDH8x8uPtkCkq",
  "key2": "ehK1bf7Ycdmeh5KYnGgYvtCCVvhJPLfcWx4rsmu1NkapwokWiXV2CPx3XYyTzT8cNB5Sa4w9eyNjHWZmwSEy5yd",
  "key3": "3kyq3gzGzkrPysR8DSP9p8VycGKiEHRWgxuc9q7pLXxxVa5pa2ZZLjNFLApHzYuh3pbVWuz3JVU6oP13jMdGMdqP",
  "key4": "2DaW91PE9fgCP2UExphZ4Aac7wt3XG1MfPHh11aJzpBuv8APQR98dRwfzuutUX2jkAEc24kQPHJiBQaJb1cGCUHC",
  "key5": "4Jjcp4WTft8s8pPWP7NH8xR89i3HSd3KcPPqDAPXfMnd1JNXt4HyGdj9aPMZbwtmHyK53NSbEi4S8UfYgfuRCXRu",
  "key6": "2w54joXUYawFbE1W4qgfgeanmt3ctD53Nu6YEDaPo75zaKiStL8YHCD7NUSNP55p6bEhNGGxD5h7g8PjCW1etMgX",
  "key7": "3Mv7Rekcqk29nGvCDHsGgZh1yGBNq6AUSvxEKcYKpnzpkZpeBJ97G19DNJYfiJZZXnMTQ5wFZqibeqgZsEGZnQvR",
  "key8": "2cxZhkq2DkeandKkgR9mfJUBjUBx8VRuBmcPJoX742Ss1e1fBL8p9w37SXrGQCBRFbqmsWBdvssX6HeKxovd7hke",
  "key9": "4nXBDdAhYxLUVfkkYQ6was9C3fd21Q4JmcbgCHVRr8DpSmKB39X962YgoCtUFtmYxnzcxnXoPAdu9sVFKPqaeGkq",
  "key10": "2YpgKHCVupY5ADXotCQjqJy3LKpH68eKz3ja6uvF887ynP2Q2vcT2iBB7Tfm48cY6nUFdn8oYNuEGzSGttvKxBzT",
  "key11": "4xjmc23H6fDaRrznUfpPmKmgCixUoonNFPGmkfA4skYZ1a3pd8EJLrwYnrha2LQNxzYjcZDc3RBZjKq3rbpeqfDg",
  "key12": "5RNHqN3Drvp6cST4PEWz8PVYcpJFvrwRnqQpEhyLNw1sKmzZddhcvMLtp6BXB2GZp3xDRBEvg4WD6spmSuGHoGWx",
  "key13": "4yGBfKayPNRkQyX8FG8AstPKYBgNMxmv7iR7f7m5ZLT9kXjPUM4SmNmgYmb8TNKYRj6zNNYAquZsyrZh1LfKemrL",
  "key14": "38BASqTbWXTWgeAhnAsdygkwxVox5oXth7B1NyvqnmNdByfAVzQY7D9S8fc7tZMdpnc67gG2DXdiHmGzjZasMJQv",
  "key15": "vyXeuHgYfTtKfpdZgREaq7QLMgGC5EfQRi1q2AYLEvmgHj4GQvueV4gyvheRq3NbQBg7SeRcQxS69AYNGu2xKvF",
  "key16": "5mVx88czEbd66gYnGLFapYvjSTJJcFkAz4i5T3YK5HNLnNGHnYkcZa95dftHVbDmu1BuMyjWFrYjUV2XiCTxtv3F",
  "key17": "4B5AuzG2Zocz6yqnkof7P5TiwJdPA5EBKeog4YiUN1aAa9XAVkHDnKHdoLQxWXuyNo4HYfxyhbqgaSbVkiPCQGAR",
  "key18": "2Yc23hhJR8hh7pGvhpsGKexe6usdn7s4ZaJEL2RyztY1vfeaqomvfkHtun8SQe5DosWmiYNjiFDm2ZmuiD8xhaij",
  "key19": "hbf15FgCN4vs2oDd88JwR7ypAtEW1bW9tymwfvxPJX3Ynbzf7E8wZyPE3FTvGjpmMptVqtwWJSommrfNVWhcyHq",
  "key20": "2k1JSojVHPrrrJnphweVUMNfFHhAnL6Pz62hzwFiF8jD358zaaSWgNS9mHTCnKpsXYVHvnabxcfPRnLKzPxibWC5",
  "key21": "2ogHL41fbQTyfu1iW8C3pxSeTgRpbxcQPwhSH87J5WAJtHheStwYDnoN22nQrNnoPCfimH8s2n2Jf87Q9LKb1Cip",
  "key22": "2zCwewVFa6KA2iZJk25y7F6vWNnZprJnaWoFDFfKDcyhjJzkBgVmgaFqhqKR4xRmrWBVKHMgfpGpLLgXHfzm7gjQ",
  "key23": "4K8yyktkfGJVMfvfF2Z6tyd7WfyEGx3MxpCDjF9iVDNBx5fN9fbv8qbki8G8cnNLDzUqRdsuAeJiSEPMRnt2FTNR",
  "key24": "JY94zci6pBM2capUK4oDuGrCxRZeqBfjezxD8UzaSBJ3EDEDJmgRg3XuxZrpo62U58x7R9Uv8TvXpnyZkrqSFUA",
  "key25": "3jdJVspocSadZdLk3wSuFrzdp4aFDeKjgrWfy8CwSAk92ghJLCKnihBLq9X7HwWPgxt7zLukX46VewP1LYQGjcQR",
  "key26": "542vp222m3qBU64gnwTT2TH78nRhHKWogUGeNL3JbToydQgtwpi1mJsnYbeepTczGxmdmgPvb42J3stpR2638rJo",
  "key27": "5VJTchuRshYYZsWTLN8SizKDTMKWXrqkyEH85z16RSaaUju8WvhMKxjhn4eRfEDm5FvnZduwzZXC6TUb5qhojZMM",
  "key28": "298Q1VGqKrFq5qU7ur4wxeALov67sqkuWvV4Mn7AYKU3Kp8gHBup9sBRoxFBNjQqQjcR8abgzonaq18Qm6r6ewud",
  "key29": "2SRoNKEcXMuex5ze2aDANbcVsfKNUncRLM7a7hbT8dgGKGVfPZiDVCK18QooHj74fBQ752S61bjrhwV6iQk7DgvZ",
  "key30": "wtb33L35nsqGw3P9AtVfcC1YEjvqGqbtGfKjqVQg9LvqRxHLtncJn7iNy4eJvcL2DYufvobp9eXAYzM1iPMmRvM",
  "key31": "5EkTnpxGiSdXZAjGr1iU1mrNuiqaQCnUfDX6TDoPmF8m6u4T1aaXcZzQgYmW8NVctov7YprW5RrHN1YwbdEuMpLP",
  "key32": "3yXVPWhyBAYxVN45AEES8YZ6HJFiQHX327iufTr1ToNZZ8yHhenQw8GbjrWWdtD12iQNRZyJaXrFavsgTrnCQ8tV",
  "key33": "5LpBGYtVwoauiiV6EP4Ac1nGteB3uZQmp9W12cufP4kwDra2S4XwAD8G2KAJQiubeMS9CsYDdGFqBXGgm3SUn9uN",
  "key34": "4ztFLWPmu7d6ZMG1QJmnoBa5KGvknoVaU45537b6D6DxamFhPG51iCdQ3EFcokowsgHbRpPoxtpvPf331kzcnwDz",
  "key35": "4F8HDxhdCFMhTvc5NmG1E5fNZrMcbPfJuhX4f8U5Ujey96jZasp7rAGC9Et6zGwLV5GDfFBjyXcGBJgzKqHKNp8p",
  "key36": "4SFDX5wBkXifYkiP7dNntKm113mrr4q9nnytBEsxvxH2QJP9KqZ7fowjQFnqHFUQzUiSXBjeDQmheDhXT9AXySMS",
  "key37": "51vUpJxmCDjT7DS2t4h8pmaZJCtuTptBRR8KC5f7iJCyPv57DxRxtr7dKLaKUbHJRRVFRG4Hw7MSbZF8R73eFesH",
  "key38": "5h6kDw6MULve9ofqoi9Mbk1SpniZUqMxFjEHEu3wyTJXxjPGKqD5WJcBZuCCoDG4R18nPn2KinU4kxRZciceLvfw",
  "key39": "525MLKVTbVhZehNg9PYtN2RsNqpH2Z7AgLp2rXu7BCaPeTGaxyXDwr6qLYh8SVXcRwKS7au2pmCxBYZszYg9mB16"
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
