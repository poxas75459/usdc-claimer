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
    "25TmjvgtSKdT4GmRpd37U7rkzrgMEYq4K3oPNY9VNZenDXUY2KJFwa6nmVZo3vqnKJePx6mDf5i6uXSf9dDBR6A5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rqks83Vv9e9A9XSKswdk6XEN6gjYGf1ySCjz7QtBvbqvnZSLWxNzKtCGdCwNFMi3dQrZHLHzKbWsQdGHpcMvrLk",
  "key1": "566z1fsdf5fTzEp7XXaEikJvzji772GM7H7Jf5wGQgF5ruYeBpyCj9f9U59LFi9iQ6sgQBFoZY9vCvXvMkAhTp2r",
  "key2": "2FkETnhdVJipZTVPsjbFJSStaUBAnC2yQcXbjFSX3y3m1nL25UPYBXedAdfQuNAcZxmzH2wmuXVtDKeSCEvJXC9Y",
  "key3": "3sf6TgwT3enrcJHT3gQ3Qyg8iT5pTZrAgpaosr92cC2kPfgwaZ1paDShcSfzEPJnDxPHAGYxL1Ud6ncpk1bzYo3t",
  "key4": "5PaFEUMfgQs2TRM5TnC8UUnW91vht7Y4YkajYsx4Av5RL9wtxbacDEyhbjMUZWT4x46S4iSM26smVXV5NhLtBdch",
  "key5": "4Wu1v8382aSPhQULqLZ5oFv1ngS5KCYcUZToasGhNbhUqjHYsof68miXvPbMogjTMmHzqVYFrv7tMTCBwYxxzjsA",
  "key6": "65uX2Sxfj8bX8z7uBMEhPVeG8YG9pVq4nGVKJCRWfaB9k9bQNMFjEChGnxVVEagRLnfbRbYnS2RrtMU9vGXdCCqx",
  "key7": "2cVtr151QX5TbphKTKg3iKUonXL9E3neomggTkj7JTfUyZD2HwU4FgLefQJ3izHBGYDbq27CMefqyLLCZkkZnaQR",
  "key8": "c1WqeBcAUpHtx5XjtyyrEik2LYkRDCyZC2i2Zu6CRhhqM8ezkBNdXdVS4gxnDtTEeVBKFMfXGnk61adDvSt4VSP",
  "key9": "3tA8ANzzaAkasoor644hrDVnr37VsEkmQr8JGjXFdcgQd8hXdCZPEEuWuvxZWwW5VWhz7ZBJxmsbcCfVLo2M2KEw",
  "key10": "2zYaw1qEuiLf67HutSqS4f8pGu18xzkpii8CdDg1v1BncTwFodxipCEqFV2wvAoEJqLV6Q5ABngW58x9PX6kkeQD",
  "key11": "4qqKPJJQ49eVmby7mqEbVqYhpKuA3VZ4ePjd5enArkE1RmaEf9tu4NqjYxSAYKjkP8viT95q5ZsSSft18XjHYrCa",
  "key12": "3SVMN4JCxT1oCMdddsHgcUf84EXzbkEP5eeWPF26tpiNu3Y3Y68RAbQ1gHPJK1LTHAibvZrDxeuVscCtJYigwjTC",
  "key13": "4s1zCNSA3AEMXryL3ErAcD8uUB62YTmzwgScwRzn8Wf1gx4z1DqW2SDuajXLXjWk1rHmiuUAx5bfmtMZA61CCd73",
  "key14": "2XyE3jzH7zVcLy8pqGkwcFpKrETCaQd6MCk6W2SAmKxn7HbvLMZ6Wi8PzaL8uiJxv7FvAVzGJA9ER3QkCi2P7D3E",
  "key15": "4yhbpygXghK8J6Gf5YdFu3dPeaGikeaaqrtV7KMb6WYdoLzGYfqBGVteRTiLpSyWVJ44568QoHXPUXM6KpLNa5uP",
  "key16": "PLmHLvsNuERJJuwwAibybPpufimvSyoSEyYVWkUxtLbqQCzGTMEXoeZMSqzKsvwiBqf5EfDC4VwFenDZviyQhpB",
  "key17": "4DPzxyZNwLrJs3JckN8h4j4CVdkAo9iF4KkkrDws3YEazSMoGS6F2HzQ6oZvUAq1gDSNfxPg7MafbiqXHjQFMe8M",
  "key18": "25CrsCto8hhMTt9XdXUEcSY627FpULhL4BquhD4GqKxVVo48JVPTWV5N1zjyqSEGtAoqbFJa6e3FoAUJEoPCziG1",
  "key19": "49PQYKVWPu4scoT982qCQLi3Xvog9GEb3nsXzg44jrfRzoVaZrt8eQseXPEbyd1yrgZJrBmuxT3iyVtAiXxyf9TT",
  "key20": "2kh57e8e6tzxsCJAxVtKpQh98Bw2kDAnP1jhK9rff9xh7PyiyrmZxtbAutHuUzPeiTNVEP3wxKTvhq2rh3V57aBq",
  "key21": "5u6cTcUGe49sH4SpEZH6Juq71iFarHuQUwwhRgJSa9BVpegKQpbmqCC1zDQysBTvWVJaUozagXvbeEXarUQk3acz",
  "key22": "7SzYQxqwemDesVympjNodFQc22XCnHZQaXreYbkjKjgXoAEnpsxmQ5X1XuHyE9HwYgNVcWWqnvexczvA2V1jiny",
  "key23": "3zUFEaaPFwHpoPf3Xc9pPUDxSVPBm2pQrk8eA3kGQeMFsxma8xcuUMvznxiGCXQMYG8mNH4JktgXSUw9riCdc2VL",
  "key24": "3PgshkosPZkTU7HvBEJXdDwk4ewi7UUq8N8EjEPAvDxhjUqCr39EDALRDGVaoZnXxrHCwK3DaRvEvVwjZkETu7eh",
  "key25": "5KqESzPi14TqUqp8kLWc3ZhN2JwtPrgPV2GZ7mgrm6Qr56teV7tA82hQzqzwyR4vmCerpJth91L1YiEtdNHCBaJF",
  "key26": "5pud9vArFd5TSubGbkLt5vpJ3VppjU8NFf4xaNzGJHYbc8XDSqJXo3kr9ERoTDKfrEtC2vesXMAr7GJ1deJq6gmG",
  "key27": "3Mcr4NAGtjz9DRbGoivya3QxyaGEKy2vkrinqA7WRexYMUGVGouSAavgD2pB8LfdZcHbfMJWcT384tKmKVh4F8hT",
  "key28": "5tD6FUgBqNKzRhUDCtEHiRptm9X98sCZVCsdPaBrbfRVL9CMXBPmrsBex9m7ZHqfcdgLKyU9tF5Jd7zxEVEgarNL",
  "key29": "QHvN64tHsBrdJQMAUETD2QJTYgkxGSxzoMDaK2NCcDVRh2owLAmx21C4xdTgeNmBt8Y47XsRnnFcX716L45SX3A",
  "key30": "3hzdLXeCDruLML8btreBrKvLVPM7KJTxBfS8dDzxhokg2Hu1gSMk5BCwe1z7DnQvrjKwNG67McdHcVRztfn6wmMi",
  "key31": "48d6t8XdKqqNMfJgvgoyv5qydHo5mkTeQ11vwCeECkZds8bLNdfuXq1oXeShRw8bopJjPXEAnQkQvRy73D5jZhFU",
  "key32": "4USvSmJtPUcaCsdBmm1cdT47xL3kPKawsXC4xzfufCMaSjv1tdHWoBmNRgy88NvYJFQ1YmJ8Bp7ppn26MD3wzX8x",
  "key33": "PBmMs3ieE15kBmMK1rskXT68hkkjB4i8i6JcZTGxdDnvRhxQchq5WEgypQz1dSC2gMCfEQYtgaKf9KTbkDYSCgj",
  "key34": "9o3yQQqEBmi7ZvJmLPXXAN9ce2L4x3kP5DRGMYVkV5XFxHvaNG5CRcZGpS9xjoUhyj73HUEkmjJaFY7YhmaiQTB",
  "key35": "BSHruYrTKVwQhG49yLMwnzNKR5DLCXtHP6qDYokWh2g4ujHnUYQsgGdyS6FQ5GupfSAXLP2gvNrBTYXQ63qAw3R",
  "key36": "ui1Wejc8mwZEFRVoawNpBL9XP3pzEm5ncrhxsWNUSF8JXoWksKjsP3pxvNwk9iU6rGA5XwooxZCrFqE95esgmxe",
  "key37": "67kSz9nQhfASNX2fFdX5VyL3UCkB6dVZVQopGMXbjsjfMySuqkmzeAQ6mTMXNntuoPxPjCfTWAzXmdseamLrvqJM",
  "key38": "5J4HAbwN8wP1BnDgnnsbnSYVdqTrbGF66R8BHqmQ3zqjszQ5gQvjjQ9VfBxFaWwrRGYNMBcW7oHuAg29PemMbsFm",
  "key39": "3yC1cD6CMtd8WNsHw3J48qXb3fyxMsc6ZrtrJGvqe8hJ7icsGbisKzSBfxjHiygHswa7m34b57XEfXeAgXbyjN2f",
  "key40": "4HpSnu1mcU2jwqoE4xBTjMn97q9pXrrbtexqWEVJ6n6GGSu2bA23e2u46jFufaDnF3vCgX9SbQojN7pyicx2gjJb",
  "key41": "48mG7vfzqX4wiz2i2gNcnFm67P6DCkQWojHUiKx99oECEykUE7LCEUGVeh4ypz57sNzVFHUB2tSCGAhMzZxe5GgK",
  "key42": "2E7AYPMb5vUq9A47n5AihX4g321xXhjE7iNz3mkLnnxG9wHvaSV94A37FtARPDe7hJ3XBu7CtLSWGTfLvgJpFt83",
  "key43": "5e11k7kCoPMXACcbji63MtVyHH7me5zh4PU7XkAN2fG67FGurzeatVUujfUjNEkKrFUgtJUogHmdmbzUFjtL5FLr",
  "key44": "28tuXFmsiqkDbnSiR57YJayeq2eQwtKyzHoTDUcFGohaa179qjuW2fskNrzixYn2uMjzGn6WAudNTN9yFRmMRJ77",
  "key45": "4EypSTo48zvvntj7uCxALxD1wcZ5qhfwb3W9gZ4oHdbvPEtBhFMVTa1RmZr1EySSwQGHhJ7FY94TudQTYuSGKM2",
  "key46": "hW2Ue4ntBLptjdmDuy1xEsHH9RxxJJW6YJn99ZcU8FZCwgz1Eb6xSvhNGg7CEZiCiTUyJxUnBt4TGtkbwE4CnTN",
  "key47": "58G7kHrjj6SN7oYwtNy2XhSHGFDyCqpmTLxnCghGNVmv6q3fN9s9SwEppj12W4zR8WhuT6hqdCmiALMX2pfiHDK1",
  "key48": "4vC2ktBT5YUwPoExw3wZWnxwfBVk4GvdWvDmBiUNKZrzmiNi8WrXp7NygfWrANo39FHcVSMi2myaHjYd7NebiXrt"
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
