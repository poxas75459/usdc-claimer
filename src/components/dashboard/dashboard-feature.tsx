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
    "4NT6YWA9x9qhMfZen5iwRFYqB5mvm2qomukPXieb6VuczxqPCGxFYt44jdYCAFeRyDx5H8iosKUEAhTVE26Pu4xS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t7BiAxiWagyRqyBQAzgtbKkAdDfuzYWrBLn3bVxxxXU2kuWn77Tin6NtwhCC1JecyTw8tRZY7HktHZ9khQDu78A",
  "key1": "7BRTKs4XwqQKQw7vEEKmKY1WXHJ5ddBaobc5y8KrW2oumKZpVqNh1JNZUEwz8j35xjZLXynFT8nzMtthqfkAsW8",
  "key2": "3Yyn5MmAbZ5qnAy4JjSe43zwwRDVQFXWSN9VnBQ7TiXSQp43MJzdMJxVVZTpABkPA37z3NKSk5a4SVai57JHsP7U",
  "key3": "28m5fh7FFKrPGEwTUB9FuAw8C8rtS915PqsqEowTeo9E1uoSaHqfzfE4W9zFXoDvtRUk5daaBZSHbsed2cWCbM7i",
  "key4": "2sf9vgWjsSAUywYWsXbQo8CZgRrjKWkpjMj6NibcKqM71r3Ad4MfDJkAqUF3R4H82Lu87c7igD7Z6G2LoV45Z3ky",
  "key5": "iCnNH7tKcKQasf4PAJ9pEQPCpQJL8jRjgDUK6ZZmFfNdyD9mS9RtpcBk9upxi8RHvhHLMsLyRsD3eJm3NjphSjs",
  "key6": "2ZoTBLgQ2d1E22ueqaAxwEfSA3saULJDkgekwvrFF4a6M1MGrVMG7w7qkpN5yYa8W7znY6Z1c6D5hUTZcNmNLED3",
  "key7": "2xFWZK19PZLMsTDDauKYcVLH1YmgfU98oiV1mU2jgAMfiUAWr1SWabs754waqYAvAAuNXXZSHUERfyxUuTnk57sz",
  "key8": "2cxHNveETGtXean8UcrY6ZgqojrbBNJSQviJCHz6UqgGz7Bouo9uizPY5TAsD8vQUBHhJGXbJvPcEWLXxKzwKjDT",
  "key9": "oEq51yKFmKoz3UMYgRNKBs6dNPqFY55GN7fXeLJ1mnCzFidCBwTL6Z1YQ3khKcBPAQz83LouS8P7NT5dAWPBkfs",
  "key10": "3vq7WuoftHcvT3RHGZqhqiBMRmL4YKdRrKz3EHaWszi7zqjWmvr3Q2mFxxYznDn1JTV7ngrbW1tubAFZWMu41J74",
  "key11": "3f9ZkU9B8evufifRGzDKMw8dtizKGsr7Hm6T1Kn9oje4K5XQ1QDv9e58vQBz8nyyAvS4ooSZeR1fwJuxTvGjNNZ9",
  "key12": "2Sbe1XiqEk8gQNn5bVdEMiHuaGPWNRVVXC8GXZmFE713ZEjXWdaEyTxyTianQSVBkgNE1BZyFiBwTdALxiGbj2g6",
  "key13": "2eJkTYxmzKiX4npAp45LqUvu4zJvo5mMG5PhXavZndvDE1bNawnjYyxTh2Zjc3VtBK5RQKF8F1qcPrRNsXGdMtYi",
  "key14": "5Dogob34LeYXZWbTTF5rhSaNtxzJDWfo2ZmkDZh9w5iSt9cEphCCDnq8Qa4Jz5bNr2P4WX7EuamgLnNKp7GBY9PY",
  "key15": "2cwQ6z6wopQzscrfLgCFS9fRKLKM5ArxosmiSMBVE9bptHD7rACVgYD3vMh4oA5CKDJKVogR6j9hWfX7kzZCVagP",
  "key16": "rDjkE8a99cp8QuEZaFfk2C5vYPeySvDWvHrwhT5vsrZGZUuPaFs6tJNU1VyKBKmTDP3H8Pvx32YM7fmcQExDQsb",
  "key17": "3BtVhY8sqcDWbpbsG4b1Pq3QL5zXsVT7NXPFkhW9JPZJdP86wTnkFVhcm8xp4rNdCuoDFRimahGpYQSMYCjUNqD7",
  "key18": "47dadGJEX6sVPURmpSuLYwyvjUDAc4feTr5ARLXmF9yFu2YkHJ4PKsftRzL3YYXUwzYJ7bHCKMCECzc4ShfE4g86",
  "key19": "5ZFGvrYPa93EsHDakUsCf5c5xrY4MGdwxc5kmA82kkfGbRzQjzTyL5KJTW6PB5WzWpwEdKNYd1EU3KQdicRiPigr",
  "key20": "4bjuiyE2PMz7pJe3X1a9mweE15tz1DSVHuv7p9xn2x3PC5RAGs9qS9FHYjqj4j5WrNckhNs5VMPLN7KaBSbTGnna",
  "key21": "4zaBArAgerm6v6SGh6i8qGt6ud6xaoNNLc9KFUEEu7cuZtVdV9kGWwb3cz2Qz7Gac1D1Wm7kF286aihRCXqDpack",
  "key22": "3mVJE4cA11b95ApLfNUtoqafX7HDpmee4Uw7F7qM4H8dLfpAJCgyc9bXByaezCJRjNtfKyGKt59P4G465nr7o8Cg",
  "key23": "4dMCQzaM1Rsaavo1GMypSGQj8Um4wAbmwo8d9bhJQzC3zwyURdqiNFLjMwWScyAeYKRxCNGrGzWatdiGMGYA3PDP",
  "key24": "41yDV3QVwhRoaw8WMUVk3WQxcdNaZgRdn7vYzESLcdfpCuiAEaMxtPxSuu94riUzXbRDyJLZB8t6mHEViQPXzetk",
  "key25": "4ACUZEWXCFAWik3qeUoVZaiqAddrZWvgLjCsheTpY29UFW7FqUSNpPM5Fd9o2itR32HHGTiMeiMJLKX8ucdZJapu",
  "key26": "2GXb4g54KWBqyGwxW4C9pTZy6skoUgLGu26n6Pz6SajeTnyfKg2Es85GnS9ujewKYoTVKWNNqj9FjG6FpiMY7WKM",
  "key27": "4AJgEApG8WtYs5j35YXnQDvTSZNB7eDXYtmNxuz7UYv5Kqup97evzvvLS6h2u1tz1tnhZSsEUmHeFXgTo2GDQR4H",
  "key28": "5ZJQTKGsY7H275HmmLmXcPyJNnFwmzVSy5bxSSWLFMx967NLdWDihY3fcoKsTYNdMmsH6ZjhVU3EhXyjwogVXGy8",
  "key29": "4ZqUToqyGTZqcvfci2rg6wvgDXanwhQmrr1FZAcNq2TGsDpYTYEyW9v4REw2XDMyhf2d6rYzvyaTQTQtciJ4iw1x",
  "key30": "5ZSGQseG5oL75oiFoNS1eDWTMQbi67JDQaG6YSciJmfKUZ1jwkEhPZjGX1LfMSzFyJvgyrc2rMLfmm81tDb72b9P",
  "key31": "grFU8gHVDnVLXHhbec1mmzLUZUWBFSiXckNLcYxCNnVGQAyaNmoUhScyesm6Lwq64TzUXkkV24am3vdwM4sp7rr",
  "key32": "3rNvmUMQCjXZafLrvYka3wL7o9Fh8ugHu6xkpp38JGBeicf5t4zTLC8XGgTCneihG6pToBzdgdWBayxVTm7LJvdP",
  "key33": "4zoCTsA7UfdNPDKGv6se46XZFWUs6myGZZNtQNmFwWFDWEApMeN89vAE3sZJLKkrtmNhwqw3cGLbr44nXDiutE41",
  "key34": "NaMYppe1t8aryQiAuckwLbZX9E4QWKU6KCDrC3uMZtyKNPhR8SikUFiKJnEwYbDCma1RZ4369gxsUQT57U5xGTp",
  "key35": "65hB17PN7JAZyqyTGeww4obgF6kW4fZBT5d7vVxeiukzDpNEWSQ1tFe12W7mX6XXcYrcoiK8eccnBSmx79cDG6v3",
  "key36": "2o2kerzPLxzDToviJYJs4ZNGuLgqB2mgWfxDpbpkkU36jAcSmDF8LQrHh97dZJ5yEj86MxP2LMP7DK3x1MQSRqqy",
  "key37": "hveTM5UmyoPXkBYkwPGqUcp6PG1pbAn58C5NvMYgpiipwgfrLJFDXJ1ZGYkRwJUnEAju1xJ1yVZ9F1uAgxixEJM",
  "key38": "4Kp2rHQJZZkibFfYYBB2bbC3xCSKH7pcbzVDai342NPcbK1Ec3n3umhq5wZZSgTAiN9cLTnScuuPWTLkiSFJjory",
  "key39": "CNjg68eKv26eJnNuZsf9MokerdXb9mocQvSWHM1qp6mS8b2GFQfCkPfqRzDVBifrW6jnPybsYGr2ymiRrKYWtUs",
  "key40": "5FKpxK5ZZmd8seQ29wibjS5Wg9JnVqwBtiCZ9GWh5nkTJM44vBMFaDhuudJ3YCAwy6EyNvumRApkhizXs9sHWAYG",
  "key41": "5zPUXCgMxMk8KDsMBHKRnMLxi8PCAF55ZiDL4zQwEp7jRCZQcq6mLm7D1edur5BDsy5t4v7mgM26w42U7yQDJEJh",
  "key42": "JUhFQMHR2eA7BaehdrdCemyrsMWQ9nX4UZ7bW6i1D6v8huKLA9XeyoUuS7tCveWQ1QdtxexR2AwMrC6pkgdLHaP",
  "key43": "4x8k4iqT3GG7B4kSwKnw8RKA8Y9BxZ3essD4WPuqG5p8Dta21Hbx2SwFYP7GcaTrqzbEbdbHZwkQZLeFcyZ9jwaP",
  "key44": "5xAw6fipdPeM6rktz4yT6tBjH5osvhmes7GFWSt53BxQZaWmLSFgF56t64AELpB5m7kXZAhNnhq7seisuyixi66i",
  "key45": "mnMKQtfCcGJPGVeegYnhfE9tQxJki1wm6DEMXeJUxNDi1SVkE1snES3dWaGhpDiXfGW7DNgN7mW2W7iyJ42aAjh"
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
