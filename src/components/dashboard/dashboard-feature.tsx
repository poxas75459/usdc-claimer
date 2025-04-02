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
    "27m1TeSiEBms8qB6RcELG5xtYejX974GiemsEX3Ad9piS2TZMXTDgRd5HdyGY4K6pjWCEwpZXZMe84h6BxGZACbp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TVBCWHfsJN2M2EWF4oKK3bVvTFsMhT8JH8ngiYoCHPvD2xuvPG5SQkqk3DR1c4u3vx7vyv1s7J933B7xqG6b3ch",
  "key1": "43YhMu2FJCFz3JhdidLr6cRaBYRHvQKkwTDhti4JSjxx3UKTqepKc3ESA1gwsA9Wy9AtHiWFVXWX9HCLjv4JNZWw",
  "key2": "28zncY2HMBmvb8zXEMusskpfwYwumWHL8Gps444GtZLPJnZSbyAQArgo4vX2V5RhJSVxsdWDkzmQXdbqkHeMJ8VQ",
  "key3": "2pkNGoVuY2dKcLinC28RxiKWvupfSnmoD8iMnTWMvdkdLieagiXMv3oQZZDMsQdzY8WM7zDneymBNocV9ehE9Hq5",
  "key4": "3aMFMHDRwdqcj3EW8Rybzsp3dFShGgV7biWV66wFvXK9oWs9mnDYm8XRVGFQYsgDMDrewR5Xtgw1fiSs2ZDMP1fm",
  "key5": "52pT7xbmP5Axfqgtx9QGcV66NQKVq4hwTForZagr5fReh1c6FWLwcRBeh4Z3dHTC88hWaScBLitFqdm9gxyCAa7v",
  "key6": "M6zke1Co4qMHzQ3oAgyTvbgq8KHQdwajRpaeuj4Ld4SworP1aR2BLHGijuS8kmt7ipN2C4aynm4n4Vj7RakgyA7",
  "key7": "3JCQJMb9bSDnDqQArh7uNqTsMe6bTf1DThmsmWfgJK33A5zka9pQnV3ZV48Ww8pcKKjJnmFKvDDYCtQLzdGRYwLx",
  "key8": "iUBCBj3Jqy2hPzcJZSZwL6YMSjpK6bCH2Xcx1PM3XNbBYCWnHXshRMeJkD4rsYyu5Cw8M24sZw3Tt1un46BB6wY",
  "key9": "4fY9TJBoLVfJudDiFm9X8cCY6jygKFv1W8J5dw1pzsLW5YsCXzpt262MDfYSHMyTWsu8mvVgJrtc2bJtynoaSUq7",
  "key10": "57qkjoRiWqApG8LGoHQs6YXvoAAyZ2hkbSdps2JT71qKVodGzHVMbxPeuTgmhiZFD15Y9d9i7xLDweAx1daTdCYm",
  "key11": "5MrW4K2DGB9KL1Hycre3DfjpyW9XmotQQD77bCmWFmZvNj9yhYfKqR7BH3zkPaBFsgV5xE5R2MSA3izn5mmKEe8d",
  "key12": "5QMyWFGGd1yv2apc31SGdueEmycnMXbEJiKZy27eMeocPkv5ffRBv8tNBb4RNvdfgrJEe7gNQL4WBkPUUp9LbmGC",
  "key13": "52hh5cZUxZU25GfH4pyiY9BQtTDfeHrFpbkoX4ybDvvNXZD3X17LTWhKo9VVvUw7t4wfg43veVyyBG2ASXvhgQSr",
  "key14": "2GVc3HdXR7cfoyabn88ug3GyMSdHnNCzvzEidGsP4to5s2G7ScLdyU4hhGKHBY9aMwGxG6yGk1f5Yz4QoUt75RUo",
  "key15": "1J3KGCZw2RNVyfdgv2vfkaeSdKUvjP7fBUhQ4ebv876oHsxfd91rSNXgBEVNo6ZdpN9uNLByWA5nocf3H2BeiXz",
  "key16": "41qijpF9fqU2ndim4kSf6P6xAwsdqntfw1LswDwVQXVgZWmTxDAkwYSUgvgmAgLRMaGdRxME4SMtFZEfCj2dBHhE",
  "key17": "Hrsz2KepRTCXYJwvJFAeV3JftPp56Hh7vike4YrpgWra2ozgp8oDQRFznAihvUcnTVXwybX5Xm7Yt6dYr856CQM",
  "key18": "3nDCFpB2ZDBYkWrbhrFiERuQ65mqXqVWdtB6MSYcU2tiEznvqQio57S1EHGpFMRNsD7z53FMGv11cZbTrvTqX63b",
  "key19": "3ftr4rm96o7wJ7Bken9yAiCtUaqUji8vGsnLmosTaf2ofGiFMVBZiKRkjpTUaePP2niLeWWEfDkqDAwKSKQe31HQ",
  "key20": "2Dc9sBfeKzWzL1BXaZEMi5yHZWuZNQXpm56wrxtVMAcpe7jtqJdSYjYism5Tjziwh5J2VrjBo9jVchNr28XSB7Jn",
  "key21": "4BUn2zX2pkb26CJ1vodr8i6zEHvbQ29u6yeCt1zgccr6Vvhjzj55c3cjYLpCj8ZTYcpMqTZhG6wmiJ48ok96Z4dZ",
  "key22": "4WMXS7jCXowG5Dxa1nhWsRcf9rgQrzV5VcUrjCi8DQqarm7EAHQzauCiiBymch9B54ECkz95hBJa88aZEHBJwMwy",
  "key23": "3eTPL2ZfnomodqJKnUZec1TV9SJGAErW53pUUnjG6wu97yBnqgAqrsQHZaXWocx2fWZsZm8rSLmMUuyhgHyyfGE4",
  "key24": "4AEdSfkqWytyhmzNcJiAjEJQYE9YNJ6hkENsCcUX9wYWVrN9QqNArDsdhs3d2ZuyZK8txtiz2wfXnTAU9QLXv1Wk",
  "key25": "4R6JWUqKpHhPy9ZLEvYauMkNG4f4udCZnVyqPJLFmTX49oMnPB9yFd6FTKFthFqiFEUToA2vx4Kfkr4TDruSmCKU",
  "key26": "3HwdiB2smqDmB8hpoKTyQa9eMdcXGpHPPZgGLqPNiqBJuE2eGybwLdRrox6EFhuHH9Bq8apoqYc9bikUTY5ytyY9",
  "key27": "5Zn65vK7vMizVzeNE32UeR5zwLgrMSykGreYGwsxonEvJqKMBfiDB12q148CETGeZaQHz5dj3NspBQzoY2njgJwU",
  "key28": "4HSYsVfvGsQvWGzThKNm8h2PowDqnejcK22SwpsFHThX8J38b2hEQQQeyULd6aFMADegqvUdKBii2s7iyPUHQqqy",
  "key29": "2ynYUM1ojqt5HNJ89TrppNmjUezUvYc7UYvFDeJBjRWufdtfzxL94KP5PgcEGjuUeijVbxHf1xQxK1A7vzZpRnvC",
  "key30": "2PZtR2GZPLMKktCiuA26YghoRoUeLWeLSsadX6FnYnF8dZdcwE4Vcect8NQNQSUt4i3HKevtZAq6VNuU9wCvGvgu",
  "key31": "217omLDN71FqETwXveKCXwwmP6vCdL5YXrEkt8vXPANjn5d75HxQyaC9G1cHAe9Fs8VN6pFEDUebzDqr4RKGQPrm",
  "key32": "4Kg5MZc27EhDgUnUD885NGyzYsjSG5TMPUgZmxfLGVMRQGPVwZJiSwc6giTYCYVav7FfTHMR4dgVjCJMakjx5gBC",
  "key33": "4TsmHZze4MqZUszZSJx4fVXjsLpTG66NHhjFtxSWWLwY4ZV3KcaoJqn3HrynEkxqQJd8RxjmTs1bru1jVSfxBgVd",
  "key34": "59rkJ8TuaakxdUaWqnnA4nVMHyGp4AwJJPKu4MSmoEVoXaRzrfyZcmBMMF8upfRmSy3eHaVQxsKmUj2L7546rV8r",
  "key35": "3vpkUwD5mtwMiibC9SigqSZvpG95ys7BPXpkGXEUx4zF6bRQWDL9THgAiyC5iDS4iAWqVHsxeTYvrdES7mvsNnyX",
  "key36": "2wqJkiBrNJh44MEEq7JXhSdtQsVeqgYhqxKBrFP9Nvf9BFdoVpSkXdpWGK143JzZqmPRMmvHsXTzJekecdCw4r72",
  "key37": "3srK5VMuax5zvZ8WELPA9242HZGRBsf2SFpKMCofuDsFjSPqHnk4LzYw7DxTPgRBfn53SQr9c6YjjMpUNcFPE7b1"
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
