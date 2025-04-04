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
    "2bXFkguoimCLS32Voiqr1VwkN9jsJJiTKULXyeDgTGKNkE3u74Z43wjM1VCnb15sK843XLnm3GYhn4dqCdR294sF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ufk9y24DLhKeL94xuBu3pPfAy7bBVZJnzU5UqEckam5Zd5nCEx3hKnUpF9LgwK862xwLPaWcQaSMSuXGmkL3MEu",
  "key1": "2JoHVrrY9Cj4qsNdLHv8SKszS8PUvmjUfxeWPLeYia5vg9C3CZnGMYKXccoQa8LGPA9mn5tke5voaeP7EhwcsTDC",
  "key2": "5njCmSWHeRkX7FpVBauT9KYGR7DpPMYMqgi5TBEgVG75iSmT8w4kkNKm6weK6n6H43qKAosFJPUpLVhZ8gqxERVi",
  "key3": "4pxDMDPr6csyXkDxddtmCCey69P13G8WmDV9SUyDF31vV9S3nBiWRuD2CAMZxsonic9JoLMyoZfo8SZoKTCSpQHZ",
  "key4": "3cU5UzcgfAJ2KLQZLNz8ySn2vdk4AgEez596YWfxjZ172bjbLricW7LjLBEK2TMXYuEgnkon47JXtTb6ANGstX76",
  "key5": "5B2hzPzzJLxexfM8qfByzyjAvFfD1jAu82b689oVWDiizt6fuVRuL6EwSR2sths1cvYUJ8amd3C8PPEtXDFeQzCC",
  "key6": "1PBG5vxgQov2FJAa9ny5JeQ8NDwgazUqwRUAYLi9NQx8cwpfycibj67sycGhf2p6EAVKVeM2KjjPCyEgW93CYZW",
  "key7": "3CFqGJjjMsCpgcuE4xkK6WV665J7bbbqC7Tj2RqZ4F8PELAj5bmLaedj6rCVPGnD3YJ9LNevawJusnuGTJCqi8Hd",
  "key8": "fDFKeuH9hZ6x1EfnhzKJ3HDjHVgpG5uKEGkwKZcewgfNyNQzaKoUUiS58h9HfPh1erCDwP9YkwF2GWohfjJMy2G",
  "key9": "cWSauG23FGXAKz1B8YovEV81XkBMDgSyUqSi3xTVKS2cpFeKtGbT5t7Cr2FRDbhrynsz8JzWQwjawa9mJSwRyRa",
  "key10": "swrd4AjWSAWVtUpXgLmzCepv4f9eYFJVvm9dLvrtGi1fktcDPGvzFwFv5zDTYvQbvzDp4ZcUFUhMAegK7GiKwmq",
  "key11": "38RD8Q1LkFd1mRwYt5hFXzQKrQjZPDgNSwHN8rYTLpuesv9yuSjiHx5ag9CcjUg7pv1EqHVHbH4LWBjcn6w9JzeZ",
  "key12": "bKVV5NipFWFQnKYVfPZW3LNZZx1mvZo4xZsqPtrV7v5EHCcWmt87BRzPVXyFdHkRfd7MgkzEbjAMj3ErP4Z9XxA",
  "key13": "NnpAiRupmuHkoFG9LcTRSHBq48HZk3wQ5d69rKTqzJ9owkYdm9kjVC22TYvFZdM74199aKvkedSfLNk8mWRrMBm",
  "key14": "645QkbsiegYPQPPp55M4j7CbEKLWEWxARsL4UzLJasqFTWtg6AiK5QUNnKhoJDW4K77NZE66SKyaMTsHmX8rUWFA",
  "key15": "3HfoqVy3oXinxWtPbTnTMTwHr2ywWUNKiTbx8XV42J9T27mQFGQKuCktxP3bKgqQria955NXjh5Bv2ZFvmfLr5Kr",
  "key16": "3hPdCpMVjGyUShAhSVous67cNaaLn52AhLxhA6mkpkGoTAkGhRPaNva6FBkfLnSesw7LydGwefRNzbASzobHeXWm",
  "key17": "RcuKTvbSiSijJQvfDiYvLr7ddm47gL4d4g2CW2Gsbt2Ff9R5B4HSWcuXJ6JFfYfGYwvjvv8ANnt3uiSRUur4ur6",
  "key18": "ybppLC8EbRZq8eQERsiGSqDZotRSBxrwLVmN2egjdTTUdfYaguuivyVAxV3p8Q7Xkc4ZcZ3q7GPRJZ31YzXMhEs",
  "key19": "3Pe5X6yeWwz9r1wtAQzUoVA4NwSv6Umkjf2sq4DMvnCEWYnUsSJ6XLaPYiRW1qfE8KCAh373UAdTWg8JQ7otG8by",
  "key20": "5MVYJjGqJTBKdQQV8tUCLM8qVyL97fYTvk7yXrf3wEoHZXvwZvN8fgrL1DZFfWNd67FX1NhENgEdu8FVqotcEsxY",
  "key21": "5tdQ2W2QZbRcav4oE2bpb9up8VmC7kZ4Li7gFGnDsvVDxxSzC79c4RzpN6XWWrB9DQJQiULb94oaDpZ1yXgqbdZt",
  "key22": "2GAb1WZM1axWNNhWPrZEc496khjyyNDj2fUCM7isEht4WF6QCmkQg9XcrYoHCFhHA1oiHNdYA8eUo6JURSnBv8Fo",
  "key23": "4t8Rpg73pT35XR6bYNzx65BmQML8srPfwoNQLrU5UJS9Sk1VYvJcFhDiDNFCvZR2VCoJGvYzA9kcNrLmwNDoxcFL",
  "key24": "26TPDwsewppfKourh7CXcfAjcEQfA7HpYTHB6xj8m7tXPoRJa5t5RfZrK5LDgtiKjYKoUyzLpPxQjKwFEEkrgnjA",
  "key25": "4EYSZauehLKpL7sR2NG9FpzRFpfw4m85vJNyazcVFL55bbebRhgcYue53o6iJbL2Wk87ArBk9k1TYTv5WxEtuPo5",
  "key26": "3tyhxrxheSLpKvEk5vMUPQEojFdTT1dNpWiPa7ZVKvwMZbmRadvaxRx4HtRdHwRqAkgTVokJD8xvUw8tw31na29R",
  "key27": "587hRUKeYDyYqmDGnXfRTPyuai2aeXzpQYeaH23P9bnqVPoif2XEqAPvfVrewq1Fx3P3uJmHczawiySgDXorPGfy",
  "key28": "3prdKrYj2AFGbKD8eS6z9RhAJzvgwdHgyuQmzWHBiryuoznz74NNRnMwdB9sbGoYhQ1oB7o7wgng5fpPkeehcqvE",
  "key29": "2aBkbv6D8bVPMvHUC1GJHpERjZFV6vLcuv9WxUrXQTZ6yPfQhWzZLigcbDQNWTh65tDvUwqvxtgWkVvsPRT2yFtr",
  "key30": "5ApUvfikoZbEP9GqXKRWkm5XXQSS5vEWHbdAy8ecDB1FeJZ7xmRtJmT39qoBV7FicvWGb945ZZt2fNCuCtYxLXBS",
  "key31": "5pBJeqyD5VRoTyoMtp7ixf7rcXAFUNau6hZWGxPBkb6z1GxMY5s9xvjMP3sHs9PERpQFeiNC7qNhuW3mXnzvd36o",
  "key32": "pBqXybaMs93PeqRR7pZKYT7WMvDxGebQkGLb6sykpY28zhwjZdi6SqEz8qi8oYrCyHknwHmjoz84cdDeUVBb8CD",
  "key33": "52opzDo4CQ29eVJSjCtcgxpEufohomacAc8qdVgiNw9Gt1LqkKUmbtYA49hmNwvJbdfe2zeHdnLFbUHCPr1yo7Lt",
  "key34": "5cewzuWYhhRwxiv42djBpCbHegoyfLbp2gQqTuNWQcxB9tTqWac1Vj4bcZKvyeuWFhQcKgcu6XevuUcgVLBargRX",
  "key35": "2Q7q6gTcAn1ggPu9qsteXNuQJ4c17fvqvGRiEK9SnKs8DnL63zBjxUNQjMPy7AJN7VSzZqyxR58A3bGXk4JxFiij",
  "key36": "3n3qHx2PPARN5PMfr1JC7hcUuBDzJuFhB3k45ChuRmLZUEEoajGNuTvFX7fs2weS7Baf3f7g8U36wxN6P5LdutsD",
  "key37": "5w4rkimnVMMPHQ3LdtRFNsp8prWbrH5GVwbwnaFBrKL3WuoKkcLP2bU3usj8vuvwsygocv8uqfqNpueSqeVKbwZp",
  "key38": "7cF2qP56NsKLxhQuLRdnaCmCNyR9YtsVdiC8noMWsDX9izkuLAq8LibYBgfdHGDcau8zEtQVC52z17dUvAsLKGZ",
  "key39": "2E3LjvcBdJXWzLJpQrte72vUp8uTWoNU98TTEHTnRuViK87nnUztsLbaQ1nGKoaaSCAxW5RY2nn3kfT2c1D9qfv3",
  "key40": "5iWFWL5rJV5SsShabCZfKtWB7QYHXYyYUfzGiL3TSRMgtfTUNkPpJeHE67t1b89LhDmHce1vwb7spGfZvnrbNt1Z",
  "key41": "QKATPj7gwJ8Y6fy4RigvG1N8Ye4uVj51JRozYPf4YaApBaU2TNcn7XZVtiFKDqAkwELz1Zcg2EFBpqgP7LyC7aa",
  "key42": "37xpKx5w3NXRShi1N45zwgDmqpooTD63WEWs1QsXij5rjXKPcx7puzB4i4VfjkPvX49tWjod5WKdXr94djEyWvqV",
  "key43": "5wVZ5y6pixbgBody3cgAC3ZyRNbRAhkGbFvSSqQtBTrwk8tgumuUAcJjEs6LG3BM5j8dQ54sw2Li5TQf9WLYYPCA",
  "key44": "5GW4TcjxRCVZsGuGSXZ8p4Ys7nFMc2fRRV1M6Tht6W2Ea1683ig9n3DVV1X46cJhEFMXmkdST9vv92pJEnM4558K",
  "key45": "3bUEohPNCR9b3SYFoqJn7F9eixGwBwPgHcDmPRUYc7jQGaNentLwttCS1PzdTLSaMCxkb2U9tphoanrpp5eye7qB",
  "key46": "4wAExK8zxw5wgB4SWm99AS9VzqDtJjxAyXWYFbzdiwPMs15zttq3yrrTNzkiB61vWRikXCcYkyfbPGybS2s9VEuw",
  "key47": "22abpRw4Y3xFNBof9RaWfBRw2V3T1wEg3bNZXwheB6mwbpRobAUkSDua3hNfogqYkyqkokucNeu8n63LfKbYUgpX",
  "key48": "FVMLR4kh4132uWMLQKBnP33LZGapJa9LLYaDESMMSMC2HCGQgXbg7FU5bpvCKMn5nsKPP68EhWdHcazcDAHUSZS",
  "key49": "2Q5FDMnT64Lqc7wr7Qa1tGmhkNUKh5Z3AKyW5Rmu6W7FMX5tUX8hyc18xXtqZ7KgnfYSGLH3Ff5y72E1EeNcPfjz"
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
