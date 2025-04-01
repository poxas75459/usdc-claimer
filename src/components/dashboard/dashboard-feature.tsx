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
    "3baVj6Yh2k5KFpUJqDA1mtUxkF8DwokcniEajA9WPzyCj2mBjD1KtUTwrcx3nw6QzBLCAMpDqyFXmDjfEKSscSU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nL8N7JJiidfjF4v2iinzCt1muJhZNzXNCE3XVhdJpERSQYuU3KNTQWoGQz2tEShQX59X4Wv15K5T5s6THKd1adr",
  "key1": "fsepB8kCim3gTXQmZEF9BHaSk7EjQBUy4m8m1S5dBRRogB5j28AZY629mipvQhdWgzL3CiYGLUBtXMn5WSJijCi",
  "key2": "BjRHK7jXiMkDANVF4rZugExn6wTcRi4NFpWpNFxuCfyBZxAChetdof3Yme9acnwq9SxrTC6aADXEtkDWAA8ML9A",
  "key3": "5VLL56HnzqG9GUWXr1oSgtYf7CuE6DYEYAxmjeqy3uYQE5gEqjkxdkAbYgeAREfVFvFqWz5p6XrgbJbvLqp8gQL5",
  "key4": "36eg8wNse7HBYUWKZRvgkSwrEDWdiwArp1AkwRLCujRBDafa2VmEs4NEkHinKswhiURCC2pEfcMj5bnr41k5AT9H",
  "key5": "61vRaf6ZGCDzGjvY5c9HiPPkvU2YNJiKiFu41A3KQEKZbkVFoTy4vB1DSqcGqkMjTnXCUXMVrA6ZBiLwmZamm7rN",
  "key6": "2AdqXhyxodEvLBWt3mSq1VC9ba8w1R2MLcRJaGAyGXvLLT2crLLcgsLQnntAEGuuZ4Hdh6b1ymTwuyAMNR9iVT18",
  "key7": "53o7pa6WfxiN3n7MxM9w69dKCawmvAeGx9pPW6zsUrtMu8RGt3AdJBUZR5UembFMtzsjXkqqHpYncC7LJuH4D9Pw",
  "key8": "5xPJbRJUG1UMQfrsGg4sNcnMmcBzmbCD15W1HcRf56ZeZsY3YmhKiTSkQ8hsUtxynwCve5L3oiB9B4QEhkJHDQG3",
  "key9": "AvGEqF1zyTkBdCy9n6BYUebvnuXG6DFVBqJJiRZjsV3CNAaZAppLuQm9yCUpNx4ov95mYxaUFhK7aJh7Aob4f1S",
  "key10": "Q5852Y4LgqJTB75mkXPvnsmzdE28zysuYWxNFLKv3tNN7K85TYWYfF1zGJJvffDGCSQn7a5TAqChfQgndWNzu6r",
  "key11": "5ZwxY52MgWXkWMUjqD6azz7vqMu2UhTqbUmtWbAjdbExyaiL4btJyLh4hqkBTvZnq4a3As4fZG9X4Aa3JyMZDrMy",
  "key12": "54SbnjBT1ekBQyg3uwpcpKgjMBkGynLAwzqzn4oXsotDDPrGnEB6kLZySbAhfBwz9Ajsyq3GYYLDdbG3ZkqyoaZ6",
  "key13": "5Qpdje8oXgUjBiSoiJ99WW5YBsuRXFGy8vXzQtT99ZToZRtGx5Y2mwHV7ERkgT2jr47rKHDfQvnnEq8YnimDjCjV",
  "key14": "3Lr18389f8PbQ83yDGs88TFmGxnQUtHHYNgXtBqCxgNa7tAzmZxngj7fFm5p9s1J24LoUFYWtvMxxZPFKiqurVW1",
  "key15": "5SZRRnMLLWrpQ6LvjhVzNibPqnncjPCeArZSVDg5kGLTmnvCqKcU2pyfmCU7DU2CjaAHun4XufB4V4rn5b8pfSGC",
  "key16": "3HCLvdGDAK7gBJ3C16xPUv2ThYgefpqf9z6C552su5Zh7T8qM1vWG4sLbB6RsJyZPs89sUm3x9H2pggR16qYeCSD",
  "key17": "3vcS38ECFtJkp3YPE41C7rHir2NP6qUDdKquWZ5g8wbNMGR9cgQVbpQnd2s29HLMrD9Cua6wDzYKL9KaY5VEtCi4",
  "key18": "2xtaHFmj2ZUXeEYSSKTZekG8gPEhKJ7NWEwi52is8YMFg6dDj8VKRpcEwskYhYeieojgyhAbPsYPNpEoN9LSzN1K",
  "key19": "5FtgSJmcu1CFPUE5ANyY99cjGYbvFLehSjjAei3sBmSQCGYUJRCuwFB66hoe57J5Bi99dwmyaBs83eSjALrAtpFk",
  "key20": "rHypGXSjjDa8UGzabyz1ynSBcEPuNooB6LpZcJqTFRAMucLAsJTSCd7HfCfewaYt8ecRJUF1MEyDYREVsM9VQwA",
  "key21": "2xHXzcSuSNT7V6rB7zwNQHwQxtVcDvZeqLC8d7gEKP5bc2vrMhmhzgFSGyEVoTcrefsphEQe99TPFZ4aAEZLkoBv",
  "key22": "5sxZxm4PT3UefWPZLHxuzT7eiDz37VYDRqXir3rniedMg39y59V9FgEAivgQxsNJoCHXMJLmGWnptCg69MABuJdg",
  "key23": "5x3R4yPmz9dAZ5wJ3hpFjd9minGmiWNowNS8KjkAD8bnAHSGsHEiJBhJvGskCAsZzyXdeD8ykWcSXYB1LByviprB",
  "key24": "2nQbJa7e6F1XnYXCTH3Znm8MXBNMPE5gJkTNEPJ55L56pxRCKjKDsHkuzgXr8nBbVLZMLNhj7Gwt76V7kumXsTgS",
  "key25": "SiEdjb2QcMG82qw8mWCnLojBCmkYSfSD5Z6Kg6sXRcXv8v2KCLXiSiK3QKLDfFkHxwLQTEUqo23tfKTmVqSDm2K",
  "key26": "64Eeo3GTrcZH9gxxMXJRVuA4pdStwjCNp9cmjsc3S7qfBLPVVEctywxtd8kFiF33msUL14HWCwom7PbGL393VY6t",
  "key27": "3cjxYt2b5Qo1NZV9U6C7VNgQRb1yCRTecJyxxfKc98emjkc4YCHLt6M8zcAcAYsRXTesR3cap4bnWbfGLPffADk2",
  "key28": "nJJ8At6idCoTCmzFEzC59zmxdYcYDYghkTCZyNJ4dDXJuvjqsNrtymuYeSS2aXibwkHqeGDbeS6wGv6szZZSKeB",
  "key29": "4bt2Htw3QqdTG2CRXHQSTnCLPrnEFkQBugPfUj7JHH7m4UV8Gcfipb7XNYmcidi1rTENFjmkjPwoHxUt4ox1C7ck",
  "key30": "5NvLx3bR7BB6Fjdxwgbz4VSsGYZDjzmLjqVy2sf3tfhvqq5Wcv92mrVBmyRBxKLzrfjYyPpXR2nWDj4dxbF57mK9",
  "key31": "YYHtFyhtSJXo79J1PmbruoJrrEmhamdZJ9uLKZUfN3znAC4nrjYrCpyR98Z2A3zpqLWYALRbFeQEN881H3jdquW",
  "key32": "371KLCNUHoq685XDXt7ihXxf3kcBWac1RXNpRZUnQTEoZ6ysGaSquRPoLJjGUEDGBaSrFGBRsFNp4cEZ1yt3sbck",
  "key33": "4NFUYXW1b6azJj3Tm2rEMzDdXdyqe3wpCzbkJH44kwyKLjTrFQScYpRv8WPtxvZsfq9nwtr4Cj9wVR2KmZFfgi5G",
  "key34": "fudZLXSdHgYfmpPW1CuUNBeuSvahajZ5PSu77AKTT7Du9KVfpYxP684rzJ7u6znSojJoVgcVRTHSwaTLSsnkgsz",
  "key35": "3HuvdgQYyN5aaHFjCE1CtABGytEwcbmEZkyCFQoj4vLRZkyttU2taj7LFLsBWMj9hbGVBfers5Bk16iX8ft7rZ9F",
  "key36": "3si6ZG58FqVuBnPkdDTSKtUUwcWwqMiCFQdwMbu6gRaAgD3FFCaEcVpmpmn7mWonU5ZRCGWD9Qtoat4TMX9GWFj4",
  "key37": "2L2RrxzTDrK1HSGvf2SeFAGF3Vd5k8onQ1P9B9PVuVsYEAPygyNezy9xDnGERuoinm81N4CJxLAqTUiRfXY8AGUY",
  "key38": "2YM9BpmtTQgXmP45Q2XC8aAyfytxZ81FDxK3arCWmXKPGkpPp7GFu6uUMkue9aoN3orNP2XTmL6tYJsJXZo36sKq",
  "key39": "3LdkkihsaMQ1eGed65V3znE9nUVnNc6tcEs6F7h9d6eHzQQxv5oifdPT2yJUF3t9kAnLjUqMqGgn9YmmbSXNTptx",
  "key40": "27RhbWPFYdsU6NjuyGXYkXw55yRNN5qf9Gd17q33WqACgGsggeyaJHJk2ECB7ubWhkktFZVqmZLUf5S469UwWAiz",
  "key41": "2HywLhxqdY345wf7e64EZW6N87quRz49JNPqkCGnf8mVQEXzSGeKeo3xnD5VsQ2LwggAuxzG2k2HywSzZP6B1ZnE",
  "key42": "4gCisTrG76Ffzs9hYNkJ6BrLy8jMn92BxaN7BEv7ocWGxutShUE3b442pY3CDDMqKVg9pTVv3uvg5qDTgDHnnhZJ",
  "key43": "2WdS81oWgL4PKufJDUwYXPbPVU5sChKNzdCJwSnh2SHoZZ43tTwxKdtjVxLer9XmfXKbsi7nU6LeFWZVxbdWK6HR",
  "key44": "4CGYWSVe2o1UVb6HduXiwXoaDEtt1XhChQhPwQudSffLJRuyR5jSTzX2YJGfJR6jTu5XYNts6xp6iiogRdbC1Gr3",
  "key45": "61Hck1FcMEJMPCDYDhDBdK6RPtNbmvt4Zj2G4NwYFhxs3JUbz992dHMz4uXoAhLbQogGnfU2adZ4T8Q5hubo6dcc",
  "key46": "5ryPb6qhdRenG8gnyjBvRYBhtfYrtu3pvLBEZyDcGnjF8MyDQMwg3Yc5ZJ9cbdYbVraKMt5P23UEyh8FPQ55YoRU"
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
