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
    "365F7rh7pFLPV2e7cZHZRd9RjoSuJJZTWxdvYnjEzm8BzdKHNsnD3fkxzeTfvTtC8WN1Dada5wsaREnr1FkGeZwi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SUqs2QwnZgDdyHFarMZhyPaMk3vDQ4GwXjQW4T6U3jCkhqxwp1CXotGR4Zuj5TVFfYV79TySSW1YaRyTrjBfkhz",
  "key1": "3repFaiGZFhHNFqeZ27BNcj1y4mBAzib3Y3LUPyi3mJy1xjfAeR4enSAVscnyotxZk7zrQYhRikHDhVwH5aD9D4j",
  "key2": "3BoS7ytLbJTF3N8bN8Jvn4jck2pLcnNdboLdCaR2SQwza7ZZvp9BjcfDUZgNQhY8ajmodnpS9yZDv8G5y6vF6xej",
  "key3": "4G33MWbRFuENTRjZHK86ZykUN9UM99BjsmqZjSYegkpmYg7tUkbsFDGcodC2LXjdAZpBiNJAibwk8Xc5qzdk4wK2",
  "key4": "5qJa4v86dyrQzjV7vCPnid925bVwS9hEAfap92euzZWW7UfrQjmZLgUK8afmsFiiLbJvaYk3nMgmxCRiCBf6NVsu",
  "key5": "4FontYkwxJoBNspakoQ7mSir7de9NLpdKKy3acWJGAw93mGqZqDqg5cjriFyk25errUashHFVR8VwLB8EWVdHCGy",
  "key6": "3D3xF9G1wXuYXaqBJEso3F3RMtdfXQNVC5qvmQ57KXikgWhaZtZ2C1ZqGxLbWzyQNHP9LR9t85AbM5VTRa7LXJ1Z",
  "key7": "2sDcRUtcNdnzx5JYhYRN9idLY7b3JcQxyubhfdmyhM2tjJXTi6ZbdkFMFA26UCYax5hC7ubcKg1zn5iygAWcNfM5",
  "key8": "4guvM7XKVXGxuxZLLPsQGrg6W9rVaaHPGat84a5Xdmp7VtRwx5t7XJoKchpp7HvbPn4VfTB2juZ91hYMpgjiGLqE",
  "key9": "Mb8fPWEVCeLaoKXjC52SpMbddZMhCEtPXGs6CWdnBZUQihABth364rBU7kTKBmLhgvCELJB4JTg9Cz4BEeUiWZb",
  "key10": "2ZP881YZbchvbTyHLS78Kzj9iV5HorgAu4jG5hGuo87aXCiecWAzSzTfKMvzRKx4cdUKFspMr26o6i1jhJGvcKSd",
  "key11": "3GfvQBwy4j8wh84tiserVf4z1Vnjtbfh1G9rmmsZtCpZeDQqYdtqQQ5RqfgxyE77axL6HbEZrPBXwvsTVmzh3zj5",
  "key12": "2K3z19fwZC3HhhKxJVuk7bddb99pFTdjBgvmNx6N3a29evEfwGajQk8gx3gvT2CPQfJ4RRA9YvhuDD5o4ruQGrAg",
  "key13": "2j4yZPfJUtXw9WSogozXs4CDGzQau5bXZqR56ZAfQ5oTjKgeFEAhjGzhXjAqWjUm1NYfqMXWHWRWZA4CGsTCH4Fp",
  "key14": "33MU75AfrfPDKGXFWk9B9F4FZU9SmkSxaYB9xu5raF8nHAbjgjZTzqJ25Wh325fy4vDpgdPFFKc19Rr6oh87N5Y2",
  "key15": "57CwEHWLMsbSK1MCehUFZv7mUHfu1AJX33P7inGgDVNADNVZJL6cASDUZYRCWd8s7UE7ngukapBXja1sEEN4EiNf",
  "key16": "4kH8QVrndkXdF8faZ9rB42X4kuUr3zQT3eQY1Ci5g3AWwQGVVszLbzg2YGcWcJiMr6jykwxbiQfpQGUwoTtZrVzu",
  "key17": "5FJm59847TmuRAdKz9jkKjBSQcrcZoC9iCqyqv9S2jMbNMWdP36RbDLKMxzypbRgRpbg2pVPAWAPAc3BawkP4MBj",
  "key18": "38XAXwh16tcRX19u7g9T4fpLHMZ8sHMQP6f2sHcJ3ssVAhynprfDmbXGcz6Rv5F45wGQASWgwdzdg9UKb2j5KFbS",
  "key19": "53fv717X8FW9X5aq7gXC76N4ZSpqcukgabPaw7Q6BikVFM6gwBChQ8Wzky35macKe2TRsk8uyw6xjAH8nboMcBXB",
  "key20": "2nGXds7ktRmqkXPatkJj1Sh4iNPkKxgmDHApwK2GVjkFXEM4dYKe47BYLp9KWoeNZPTddSAjGH4279F8nCiN8P3R",
  "key21": "eKr5BDxPQwUi7FVzvfWXgNnkJxNhrDcgZSn9r7KYSwTFvYgTkRRUfutAwwdwHMzLGLVT9seZrWSZUJCrfFiSyUM",
  "key22": "53Tgxfxhv4xiAwKXQCFn13mGchz2fWvFR6E4HH8Y4U5WumfJYth9pGAMJagbAdhsj5AXX9mw2DwvohVv3m2ABQ7P",
  "key23": "2eVppmAmdgeDUZYNtwTTKZQnF8L2jcxEXjTECPXHDbvwSekkFtN6qK79NFWCKpQzrfoYHQcDC6FbJDXwyjM4pU3n",
  "key24": "5FPZykR33rUQcZXWp4nEsE42pzyEQZh8yTftR2vKpRLj7AYWm3rSYTBDxe4qakFCScP93yRo8iX4AUpcbotmJtGb",
  "key25": "2LcX83qSKt4pf9UpSfJk2PPyTVJ7DGyt7Fnet69gyJAmK8xespZ5EWkjeDStthPtJCsQYiQdhNpUhjDF1BtX85qs",
  "key26": "Ex2MKnkv2fAjG57NzThfqxy47Huw793QRxExEBsiiRyhSXKbfrAeW52w5MDpyoAE2RXhLK1zu21DstufW6DGjZD",
  "key27": "3Bug9aHHJWwu4AMGr1jhuUyGZuei78TJ8aEdvNJJ9FeztVEPjwCqJoW1egLPnCuNTf5uYqJ98SDPJzB2SfW587gb",
  "key28": "43zb4MiSPaTTUNiu3szRPRz2oezF9V62WP2LQykciAxtWtoiWP6WaVwKM92adG26X41QfpzGsjV5ycEC9MWfKAQa",
  "key29": "2XdzJJUj7FW8SWH5ZnZYJf4zxiKo6daaw446e1WXaJ4s5pwn1S5tvkBTo8Sc1VXEAfHcM9TcnWuvwTiyANP4dhRz",
  "key30": "3KND4bF5oBDjmmEuznNqJGa47WBrRFhddqSkmTo9TStuJ4iAqkfL1YRkX4kV8N5QRFJvnawHJ5hsJxwYcQkhV9nV",
  "key31": "25XvDNZT5cNmUscHHnJ6LGhYm6xgiHn3esY9NvH3oPC96A37FtRzWHvL6ktbBCKebRY1LA4ZMssoLj8fTwhjEeEu",
  "key32": "56QZK4xjfcT3B5Sudvz9w73L5C5yebJi8W7RP252EdFfVvszu5UqYcDamaSACtb929czEk7TFL7drRg5aSNiJ4PA",
  "key33": "2zvXNxPC54Cjwo4q97DLcXDKoaMVxuKadkdsGknPSwsyPtUyqou1MCmVCE2B1r9b1U12sFNdw6bZeYigCtJ9WJG7",
  "key34": "FhgHK7E6j1zwCq4yLvXuHRHBPS7B7tWXP4nQPNpaibxRrRUmUX4XYqGuPS3B9ctxNxSRLHS54fVifHey9jJFsQk",
  "key35": "3fYvb99kDUifk38LbhqwYaH7UkC6x3u3UcMsZhvaDs4vgYH6wohFramStFvdNGSUqNrXBeTYZDjyZqRcznisk2Tx",
  "key36": "kAZi7yyq7cJQ4BWNVN3xmNBAZuyCbCryS6jXi3RMEB97zqLZkXE1nudV21igpDtUZBeUkSyeA3jt7kKpf9Z7bab",
  "key37": "3QgFKt9u8pxtSTS1QfZTEuNt3bmTUHxiG16UT5Ut5EdyqcvEbwtLf31yNoAKmg8epnKX5KEugMq9Xxp7F2Vf2d2a",
  "key38": "xVqyTgDTqrbdo2tyhzz5axJssdS9hyrtqTFaxkEi3vp8DNspaMJWKjgxymGDGzdCkQCnFkdGcSGFdUvgsdo5Lb7",
  "key39": "4DM3FV7WJpLPjASRfNqRyg8n9ok47qF7LzMEqmhhcGjtvtqFjhh7vLgEFGn83BJ9YX4JLsVHGZWdCLXqbmqQ33L2",
  "key40": "5uv9XrQpAcbr2Lr1n5jcjdRYQvaAGMNSneMQofJAypsFfgXujCMTacA8W55GcS7Ui1i45Dp8dox4ZUM1jG5JHHXS",
  "key41": "3CckFmgfbB4x3fDycoW88qPWHtSV4qpjaWuQdM7bGktD83MLYZBgx7fwrvmFfArNT9ec5UyUnEzw8j62rjrV8789",
  "key42": "4GuN4JA3eCzfmS1TgnjM5bgci14BHLWV5GByShBMnDQCP1gnJzjnESZF3N8UyKZ5NvsVkcf8xbqMhXDBKxrKwRtz",
  "key43": "2gZSGHFBV6Ehhe4beRnEvcfMj1fKWJfNw7oLyv32vnXy9vLAUivRUwCZPTD8x6BFALXF89QWo8iqpBKsJiinEKCx"
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
