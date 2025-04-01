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
    "22uxgZymDuwcf1jktmToJ4t8ydvmBPgSuaS3PCGDYrBHBx4MPzC7LXSKBs6tDiJJ86JDPSPmst5K6Linwp4XT9VW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f1ahpPpo44cZNtFS3yc1s2zaXEMkak2J4EJD8qF36zvCXK8g2vsDCEopG6uLXuEk5ywR2Hs6FzBkctnb2Ayuaea",
  "key1": "DHpfeacQwYb6kRZTrxEt8KHqVU26jxQo5pRzwtUV9rJFBtNyZMn3Roxoy7pzHWKD3ismQQadqZbdRSWLrYhWW3g",
  "key2": "4f6AGyh6rvyQBAWKeDXn7chcj46YVJHCv1C4kj8t1caaCNuADDBm9SAAAhS13CryWjY6uHpE7krD89Db98LsZ2W4",
  "key3": "c6qm7QevQBkSVLJfLd3oTzfawMwA4KDCVdSEQTJ6DvgYnm4sMRFYdi6nH98sRN2vhcaNpYbQVGRLBkawHSBbz1B",
  "key4": "4Geam55u1ohJVSRojMYwBUZ6qFyHZJdbRnJzo93vQDh94pC3LHNfvGWnFfh9AoWjvBRuKmCSmjPRCSASRUS8rmLG",
  "key5": "NwDSGvwkNELPTEjUWaehK326eNvuBGmLtYP1X6DYsutE4dpsC1VomKEXqshbX3yTnEMBa4p99aDrUmzVSriKCvP",
  "key6": "4JRieaVh8iQ4MMjRbvsaq6ghWNbAGdMwogbZ4cUoEqDNKm3QLytncwbyytWFDSp5W37kUq1raf4ZPczFheypgQni",
  "key7": "3opRXYc5g3VTHvPqaQBK1rJEqdjo5ZwmZohDst5hqnYKaT8hEBE4FSmpcEux8XpZeRr9xzy3dXk9y2ozRJ1a4jA",
  "key8": "YQwZtEPWWrtBVn9TrV1c6yo2VeJs3xmXj7mdjYKc8QHzthbFPTgWX2TVMVACSjYgPrA7N6R2kw7S895NQxN7Z2Y",
  "key9": "5nmiFH4JxR9cYn517aUi8cSZUTWh2RoEzop3NKWv2C8nJ4UqXzCVMeLECaYJUEMWzXP5tmZsDUYuBS4jNGoHuFFg",
  "key10": "Em8XzAS4gjWFPnoGeKAwg1bz6nnqukCoqfYqtnuvcgfBrcKSZP74EKCqnAVsYZHxr77wede3mrqJkvZgJ394ymP",
  "key11": "2MD1JDrHMM3g5Aa3dujknTDwBoAhWZaCB4JgVyQgtuj9jpdmNPSEJUnBeWyeAzFrJNjBwKfd1rn66ZMopEQdJojj",
  "key12": "4qXYBEGh8YwZ6RWcuHjrfMnPh8VvuofYZUAfzcsA8dfX8XdALSGfMSbxzoVjm9kcgAqykxse98yY9kSwybKkkvwA",
  "key13": "297EwJidZGEEngb4YhYk8mDx8NAt4Cxmgd7M9Es76pZ1YVTGe7QydTt44ZYxHyRVDeYKecCP6PEvibamL3LXoCFB",
  "key14": "82SDqSNTEmLehqff3XaY4UbDTSSJ6SY5YMBhxKgULmE9Z19iUvgG8xM6cEw72fhvrN3UpMNaY56WpZcsZjToLwz",
  "key15": "5btv55JXDp5qoGTHKxXJ3G3jCD51pjpad85qXbJtAWV61NGBfebseKZK2vsDKP2AkDpiYCuPSHB7LDPVMEnf23ax",
  "key16": "g5G3tYCrVeASA2HsYHhwexSLJ5kG2iSwwVCi41LDiLoCu5L1RDapPzehsHmgEU6y4tBMCDLJj7dLdAjaSsU63Zh",
  "key17": "kDKEj32MUBDieavVAgMxLVstbHVifhCFjrMsKWJ7u4KSnPrhxn4hUApmJiy6Mabpde1x63mgPTwLQqHqJ7WZMJ6",
  "key18": "4huQbqVj4jRLsZ7Efr8EwHRYGPkBwsqNjXcTr3vKp6Dvwsp1om2Ds5jGAGASUskDu3JudoKw9QquK2JcXVvMsLse",
  "key19": "3h1f7kXmCMStx69uCXRMpnzXrQjZqQaEDohpfo1iqfU5fMPq3oNAJBJeCPeEcQLb275n34nhZjxgDfxNhm5JJgen",
  "key20": "QU1ffmuGfetPLXeibUuTKipYxadVmoQ7MBTVi42oNzpYjVDLFz24uojr1s4LQ71YtfXSXimHiByEZYbVxCaCey3",
  "key21": "5YBc4mb9K4XgntgStL8JupRFLsdWGiGMMWmRrmbwFFYkSufLC38CDUkdKvjEFTyZWxu3eArGpLhVa7PyGtwMey3F",
  "key22": "3LM4zGuZuis2p6CeMWqfBD5mUhcrm8MMopzF3daDMshQLP8ECTiB7rU4HyraepRuLtZcupBcxmhvf35u8BdceXaE",
  "key23": "2JnRJhGJSVAzjJmAL9LqCTrX4vweB4dp3ZeEXdt9rPmNifoTca8JjJj9DEDLzWzYbJBF1bBJSdQEK7f7wMctq26G",
  "key24": "3X3srA7KSjWhD3MbUuaBfgP5Ps6jQowobDih4BpMt8qX9aBzPvLjbFPLApDMbU7Mf9K51wuw2seXBPCbLm1mTSgY",
  "key25": "4VdM1tLAa4uzGs6JUYdnown6psXmbjfY6vDAW2CYRLHF4E39ma3pj4mksNZiQ4idoGr5NNbfgRqZKVCbV2ZACzmR",
  "key26": "4NAALxNNcvkqSr4J2nW4VXRmTCV8zE4dBFiSUULT35pxNtS4YkFVjDmH5e6HU66hp3RjoBK4Xx62yW5GwLre15dS",
  "key27": "49Nr9iLL8WQDAFbj7A9m9CWg2sgU54bKZLRfMs4vgoUZMsZavzTxdVdjAWrwFwdtBY8AX1MFsrMpojbqkN2Jz4Jx",
  "key28": "4xbGyRyAWasEicxJSKSQCHEBadegBspPyDgXYcK8tGaeNek7oN92sLFZWnMXLRFiAfkAs9yqKrvEhUggGz4i54XT",
  "key29": "3Ywr6LMpLZyJSRnQ3tZuczzP68rG6GCJNsTdCxF6pRMMAK9WQHYL9FJEXU4c2UoP5tUGNzMAc7VhomkoLDSecZjP",
  "key30": "5uz5JdNMUdrVHCodYpjgaqboZomNGMGD7nFaw7CTEx2JNhCMUh8d78hpan627eExk1JyXPSXGTdrb7iHBjdbUT3",
  "key31": "5SqyCq4n7v4QBKAKR6Limb8gjr3qVJHyQUk6pkRF4AGbxyvSfyVcxtdDQxCAWSNiNPinbS56xgxY7vs4grvoeygM",
  "key32": "43LwNZ7qZ7UfWEESC7ZzNGr4pKUHXStxAmruZDsoNRnfB2wpJk6LzZJ9HQvRmsgfLL1DvzBkpkGmtBD8vHWzXQyP",
  "key33": "4SDyG7dm6iYp4ZrKTPeadQhLMxiNcBxBpxUqJ9ae4nUYF2SmK24wZnxAWcZo7Poq7yPsaSPbtF4nmQPrrJPbUGSu",
  "key34": "3DkrqSviKx41LS266SHmbhXqFduUGTUcccuMLCytNrQQwCBPz8en9GxvHYe728niHaQoStDxA9rof13YRP8Ykf7G",
  "key35": "2XHAK1PSTqNyXR5voXPVQHW7bB3m2Upk7WpeAqkmj8jecftDoPjvAr44kJKU3tUU1tUHUsVskJZQsxbWCz1hh9o2"
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
