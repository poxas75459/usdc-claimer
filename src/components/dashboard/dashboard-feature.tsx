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
    "2x49vfGV2weg3WaKLqhApcKjD38UBUa9QANZjMBLFx88KfcqCaYfSLQzhypLLHBFSkVcaHCioRwVUhxUQxuo4whw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sBjYqFzQe1UGYauFqvhtoccg5abYgSxR6XDSnH1sTdZuGR7snxXDW4hiVpWv5kcZhHg7ku8W5eJ2QMMC2W25wtZ",
  "key1": "58dS6ovmMcZ598P2AJ2JBTfSJGToivRWrYL9Z48UtZRyma7vctPgN5spMYnQKjHSSg257euLrnypLj6VXLXxiGzu",
  "key2": "3JFcHEHoRCzqRwpnWnAKYLxZUjokKFYzfqeL26ey1DSaegDBy4nunq6ZfDRQnypt8gYMnuo8Q34wDE7w2zpwM2t3",
  "key3": "3zmygPeJs8YrhQsoenPMwniSiH1UhLHWsSUCgdMPvumrrZWBZay9fjuY3gqZmAHm7Q3SwQTo3k4dMSAvJAJ6Jktq",
  "key4": "5B7mRd8XQ5B3MkobGDgGxRSEyaWKHdiAKkopExNTtER1zVDq6nXbB49VyjEaCKo3zyrKW9BmoWBX2wurUfCQ8tfB",
  "key5": "doxeWVYwx3WZxpVTU2qTSy7E3qhpZGP1v5FAXSpjy2qE1zLBFJrkxm2mfjy8sqTDunXRcKrKzKyuYi7u6LoiAFX",
  "key6": "38DcJv6Nt6xBogEwf2CD8zLWq3PjBPnZHdxNp7a4dkTV7RPdf6qwdrts7BmxwmZAGFhHet4D6c8eKJbvZuVtKPCj",
  "key7": "5iHbuPnmH5MACd8TEnn5MgGdYfHWociJgekjCb733gWHuvJGVMWvfZ2vgpsGN8Ppzu4QpJKpZewL4AB8jFuu1K1C",
  "key8": "5HA9BprQzQReNZdRmGSHydHffZDrubD9UUMBFenUQF9s7yiNoCMofpr7YVtNze7hTGWEyNJXAFDPrsUk8tYyza2w",
  "key9": "3Mo5ir6Sz2LNw39zEhcWPFp6211Vz3zuwFSeFmQ44T1c6Gbdzv77goxzRqD3YAF4XQBtTXUibJKmhL77Dt5QrVii",
  "key10": "3UXXf25oJv27mdf75WTHtdPfscNj1GHSKUruZPJvFmdpbdnETifG85Ua5MCNbzwzoAbfAfc6eVE7jhw7HDUrtoEF",
  "key11": "5eRoAcTDmbKLkBs5A93LQ7bNaJ9GFBpwSR3YC9XP3uADBzGyLH2xh5zrkytkjab25g4R5tPsgCsQoxTq3XqK4HWb",
  "key12": "RxcMxBgefU3r8jtpad7Zb9zgA5ojyiUVvL3kqJcC4ktqm5smHY7QhQXQ9RFxDsa4RsvQyEbHLqSMJ4YDPU3ZbEB",
  "key13": "z6fJ5DP7UPwyFTL3tMJjTAUvSpMrnXRepBgTgLaW1U7CqZhai9hFX54vYWJR8Mfo8RYEi4R1H6vM3ec99f8M7bT",
  "key14": "5aACYEJsLwMJwJmWcgc8xFKnxWawLGfTVPinwqgoFdCiRczXBk3Y892u4erZwM3yET9CVwHQNEZx3ePqhRRHXEaV",
  "key15": "2xcGh9P6WA8aAm2m6ibGWF5AZrq5CBGjANF9oXpZWGstgfuBgh1WZdHRdKs9HSftdw7GTm2veVJeo8Pza51FFCox",
  "key16": "44Xvbzi83xUPKZy6gMWxjXW8ztUw78a4vKEMWj4xeEF5F6VcpymJ6dUUPfmD4mbSkUH5yFyVbnGGXPLcx9GxxHHv",
  "key17": "4zTErFewbzpswyuvyq8LuM1jbDwNP2oRdH8G5EmFrB8XmNMSxfY2pjLxYxUTdBgExPDbb7KBL9oHonKruNbHyh24",
  "key18": "5Zz63x9HN5TY3wVWd5CoQ89Tt8q2iFjAUunMNyZzcthNVLgYdjMg1x2GBsw6n37fNCJ2CfEqu6G8v5NdZSdcydJA",
  "key19": "2wT7FBMCXesJ5mZLCmPZMvAZAaHJYwNXCeBRxc3EWhRLbvhSEnrKRfkrkeYdWq5PNFAybCB4278YW9zRshQmFi1J",
  "key20": "4vQhWWuvHjHq5v8i79wtTWtAdrkfb4zj72xwq5gBENrxyPdkV9sqW1FmmyFrJJmUhrugC2cDFyggp3UTbaevAbZq",
  "key21": "2GQkdcG8LkYpQQDoWvMyTxF8hVUxHFtFVDXgLBNsDNHrgYMjJVrak4XhE5VGg6QqqWyv3bBTBSFn7KCpJmFheGdS",
  "key22": "4W9iLyzaWHpmC2xsRTGfLx6ZTFY8wy4GZtwbhV3bSRjMwoVPng623PpG8tEZWot4gAm6WP5FUL3Cgbm9iADgMPT3",
  "key23": "PTWeaZa7CTHXgQX5LdUBzbsVSiPpUhfKbhEtdhkDHVymAGU1xZRBw4VPT4nwawFaXicM6mp7MTeEQw19rzD9xbF",
  "key24": "3rzQtqM5uMrSwbJdxVsFsZxcfb5P443nxtf1xVRdQiXEkzx7gn3ejFE2eFttjv48kuA5jCy9VqccQyTPVJ8CDHZs",
  "key25": "1hXEsxQFZrsRc3gS2iS2YqgMAHo9niA7XBTMEt5EDhRAhmMBTLaLBpXKKcUXusm3ZZKgtcTD9nD6Hu54cSqx5Mh",
  "key26": "4DvJRP62uqmTGbXTtFfU1U9ohHjzesizxBRsV9BtPRthSnE4EzXFqon2LnZpfvngKpyTzKaeEo3gzxSLJwSrFuJi",
  "key27": "U9GZLybN6TXcYDeKBe47LgG9y1V5VeRYFrBFTxic33qkwbuX6P3oKQXUaYPdHN7XSqye9VfxEM9ciEe8Y4vbWqw",
  "key28": "4EG4uUtaK52SGGNdPnfKnhnwUhFAUTpBZJ1zFEmKCkzpkSrKnzcaBnD3jJ4J7iTqVoxVeFdHWMBamPYJhj5wgjRB",
  "key29": "3xxnA53uT7jwCEHw9AtELkwtmsNtk3dHrv9Y8JEyymj7Zi3gt1vVLcxnDukXFUEFB6doTUnNKfq6yVYpLp3xGFpe",
  "key30": "2FVVoLKb5kGTiZBymLJ3VYkYxfQA7DZMvm1gGuDh3XLy8h47s6qiwx8HRsLibsb6kwGvbsc4YrnwFvohCEH4K6x",
  "key31": "2cQQbiodrqsbcKtYwEAzRFYvkqhB6U4qMQi6AtzW1R7dTC1Fhe6CpiDPhc25EBkqt6NLhZPPCwxtkxksKGLszA3j",
  "key32": "3rZgYtLxYxqB3fwSHhMEoX8yGZodebFYu8UvXpLSjS1oedkjan52tNwpJy9iCsprsb7Xw3xARZf1n6wtwdc2RFo4",
  "key33": "3ezrvXZBWnsgV7LW4UwYfBKXZW73zXrMGN5cW9Np25Gmts2jR7vTD8UGQCD7ojqNcNftx1pNNojtUCvmyXqx11xc",
  "key34": "3NpbfzQZ6JjTCvNhbgQ7kApP5VBPkSUrAVYp3mVA4AR93Z6uQaGZ2jVB1Yv3FmZZDZnZNgF9TCC9Svc2NpjykcHY",
  "key35": "5KHJWwkQgCayCmMqiwQ5w721k57Tx2cmbjQVGUmzHVKAowBHS3LXpKnS4Gz3AfRViPyphtsEqKbUX54U2i93LDgK",
  "key36": "3EK5ymeLHL6iHKBq9MSD1dFT8tSn8Zip6QhicNQ2m68AqXdoajGVCPyiLmNayCHFkvcyyDS8SGUKd35q965JJEjc",
  "key37": "4HMRs1vXsa3fi5mLBKRzyDEGCrHEoNicdvowCokgNzbyAf6B41vEjWTC9cBBuv7i5SiVc55xiL4fpmxBuu9s4W6f",
  "key38": "599cArH1iy8DtUy5cAdjrwe4dCTKviMJxy2qMt72yqQtG8pmCF2Sm7MPUpBF1aw4UQYCjUxDmboDfY5HbarQ1TFu",
  "key39": "355MZ7PvQKjVwtRj4sSwRxudRZdwd2nnEVAgackhNi4uznzHaABRpYrq55Q77qL5eZSYAJDF6PzqBBr9nw8qZnWF",
  "key40": "34SqEfWLroAt9zbirUs79HprmtPF8qWFSYPPZozw7xof96TaAvxBGqc2RbRj7aKUeTufgUyWvRhjYjhozkso3VGh",
  "key41": "5rPqafCixRJFoS3qNqUmwz9EQKdiX2D9xUaRdoxKChroq49d3pmsyidyeMHdydjTTxSsMy4oPpQ6kBtqYw2QAFbv",
  "key42": "5rnc1WQijCyFKsMn6M4p3gXzUsYgnRkbXxorXeP4JUqFngxAjDGPrYJdQwtpNf3uvYm1fDUKuE2vcEUG5edHH387",
  "key43": "311crUqiP4V6XYQcqYzxTPdZ2xz5aKJHCMYWSozbEvaQLr8XmqM8xtQKJzg6JmKX7jxrPTMJK61AT4Y9Bjv8zhJY",
  "key44": "3GUs778RZFvQjJdLuj9Qt4fhjFKYdeRc1or9YGxjqc213TtBYbngonKZ5YX4Wuv1Xx92G45xoRBMKNiBMiNi1Pz",
  "key45": "4pAzEM41jPRa2yd2vgd2SfnGd8irzxEYbsdXiRdZQxKcG3xmsRtnXgcVXh3qC6Nh1149sTmMQqABk5PuutTQbWAa",
  "key46": "3AfKdg341CgFQBsWQ35MXa7JKthLNaunJQypqhz6Simq7Pih4SHfzaV795ACTBdPPhBhYNXrjbCT2K15ngDjBnRv",
  "key47": "2Hr2u6Dz9cEHVupvYSHKkRzRKfgoZfTNt4bM459UMwoC8uRr3wF8XLuf8AktJm9cnQRM1puMMQu4NvNQxQrgY2gd"
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
