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
    "3m9br1EgobtZe8pScRZpbkM3S1Ufe91MUVqFatk7rX6pAC3vuWvE6GUZS8g5KxPfNpnyysXq4PEgvLpSxPUuafkr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hxNTMyMFVZ2oha21XZ8Qq5L5RdqetoQ1iUQB81ZRFfoS9rKofN1c7cG4Zv2mhPoouAHVBhRBoRr5vUXTbxz72Wy",
  "key1": "2CH4vL9LUVkPCqFZbgriwUYx3ECY89tVaAoBX2rfpdgfCNha4FFxmX1nJhq76TJG26oe4fpj45tBM654WLVrM7FP",
  "key2": "2zyxAtiExc8Xgxx8B8J2AFenHCobr1Er3hHPPAM4fD6W3wG2FWDApnDiG34Jzhq5mpgR8gWaFxaHDU1A8EGZ9T4R",
  "key3": "3Qn6LcPkuVAJM23nySACidtCSpDUiMFKm8rYMhSg5m6AD817YuYCwzGAsBQYk33Kjcx4Mv4VcsYcwFNzvgzcth6a",
  "key4": "ir5Ts8w238xRqyD1NU923radN7xDvs89BuXGhK61LR1Heix3u7mSrQQ13oWqfdJr8WPpLbub3eDyR9YVz2h2gs2",
  "key5": "5Leth2H4uVzztPvKnmoYoa8N9qU3J4SMz89s3ertzrs8cgKtfhr3Eb3Sc73iN9eJDqcwPfb9mK3Kc3sTDz7DRPLZ",
  "key6": "5hDYE3VHf9z8v4my7ZrdRbmeq8hYeudumx1kU2nVrworTrTuQpAi4NzvCyXJkYZk9qsBzzPb4PgBd3HnVqcoFvSR",
  "key7": "WBzS3GooAkyoqKhYqC6KojTJzHuNMGLe8UvVtqQUYZDmERtf6SeUYxvM5HZ8gKvYHx7f5RnEhSwuSUZiK8fZ4vW",
  "key8": "2KBA7xPoxwA7cGcJ37piLqjGieC2HnbJudxQaZCHVuWYoTDkoAD5sUq7W8pUMcLSevzLjnnPkZTWpJjhPCocvk3X",
  "key9": "4HTjRrwhhXxYXkCu8vRDet5Y6bLADiwtNVhtmeTHfAY4WfNT5ergCPXvTj4qWXcjwvEcLHmMrwaxhWpRBVY39Y54",
  "key10": "4vuHG9xucxWNvU7EfZDV5W6NMDnJhwscBL7ZsmdHThFWb4EnUESH9yhM2Pwh4aUSg8a4JNuS8yTER2dBxGRuPbY9",
  "key11": "4WK1fvVaFFjQLLHxdUzpLeqMnTXhv8LfdHh4C9aYg8juyWHW6AFLiQF6YsZSdYCnpy5A5X1rjGrnyKNAB9UUJjp8",
  "key12": "5S51Ext335WWMYjrgBXL63sYAPaag7q11RyF5wWRreUTdGg6x3t5Xc3qGugb3MocVtAt8nth7PnGFhh83GgG2gpw",
  "key13": "2f1kxWWiizwiPzxwu7P95DsHNn57Cidr5r8EJgj4LUnetK3djUwfEAdVSif4PtYLG7LbM8XhUzEa3NoasiXABFbZ",
  "key14": "42trUNo4Rp4ECeQn7YMjdXPL6zcBMC2kzHvEk1aFa5EPLjMzfHGaxwbeqGt95kraZN9xfRbJ1Pq73mTtvvW5tpbg",
  "key15": "42aTfDv3FVo2n1VgRvcHdrTwipiacd9Hvu4MkXB1sh11FNBwjAJgpjevSfmiz9bTn1FqgEuMPBfGUNjUN1opcVqs",
  "key16": "4MvBwzVhMkyvifjSq12e7ELGCvE6zQvskkbT2g17eaFJBbq9GLBRjdZehtiq1RX8iQoEYqUMUMZmoazNAS3TyZY5",
  "key17": "2RG7emRPWUu6yws4f2MBVkgTYusny7xDFgRBKGeubLR9357R7wkuAEdpkjeVAUgFT6ySZPvu8Ft5fLbU5Jk547L4",
  "key18": "3uABG4uv5sF722Axei2WpMAHS4oqQf9WJtXRioqQmwrZhWBaECeGwjTdHcXSKyoBB4XQFsFYxwMjG9XbjUdm8NKD",
  "key19": "5fRbuM222NwZSyzKgvGiJxYBE66gA6SajVSVRAVLCmcuT4EA7AyzBYabXBVUB8LHJx1dngz6qTVCdZjApXFFuRUz",
  "key20": "25Yimc38629ieCikEZFXey4QArhrBuZmEUAmfzJRV36Bt51PYYEXyoPougWmEhFjAZ2YQ9gftVg3VYfQ922JehvU",
  "key21": "5jVVnujuHexFgTfJEi185NEYS6Rzcg1z2p13F374R77cig8CwUhXEJi74f4Go9JjJyjf1iBrjjZ3PzKExeaDcse1",
  "key22": "5h7zBbf1LA3XAh3pqrd7eBBH5pjpoEyFFH9NyFSUsPiwukfxmaMetZKRCMq9dCe53RtLnTmEmvb8XUt6srmLCHis",
  "key23": "4JZkLrTUPQJBpUizKfFCYCt6yoPmfftNHMjFi1o4WEJe2MoR4nrqmnfYmjATjbr3PByMV7ZRPqzmpxzLHw7DFqsJ",
  "key24": "2d77g9KtYNVp5WTrcymKrhiqgxRTcWtfAYUDxZSkV2oGRTSCwPKWNTLbxiMX2P5BDB1iNUvjPU1oSH3BdiJPMKjJ",
  "key25": "4E4Kv4x4yMvtf5wBz5zimBksEsAy7wmSNbbNqKmPZR8NZufzaf6UejgmzLBzNmGyEsyUnouV18XLYPxjmTf6s4ma",
  "key26": "5E8EvzmeqonXK6ZykJK8yqMFJSPupxefUaYNMHm9QaT9P8orPhSfXctkaYkymnPDhVQ6X32hFNSEwGjS9CCd3qF5",
  "key27": "4eAcw5QQY6eWUQggaWktgupehju3mb5qPjeHjdDHD7ojBR5vEMPmusd6Ee2oofQc5d5CWZKYuWpLgoMgATFwnem1",
  "key28": "67RFWZVj9fQcN1BUBDD6cmXnz2iEBNie9ZCLwnEkFUWeQ1ixBjYbVBZkZHiezAbBUwmJL9DutYbu5jQTSpXhaDHo",
  "key29": "364WoC36kcfBFWyo5yk2X5GVWykawjzgBGC776cEWeySt7wvWby1aQnHmbTgQ36EunVbABuzyt25UQKJrJxAMfBK",
  "key30": "ZWjsgm3UeCXfAPxJgttX2Na2EhDASwyMkNc6uDnuRMtASbxBhYqwBr3Ako5bGQKEaohXP952HkDQGXF9KX4UepH",
  "key31": "4dpXLdnCCteERNvZ7fL756EcNhkb7XQ25BjQ2dDZPvEMiQ8QUTJixnr7s8njwHs87xBRDrMEDCf6HDjCvZqd8wqo",
  "key32": "3euqEBjktuz11fszYTQ5WKHi7vWXEWWqUDi6uaxuxj3JGwtYaDHcSkWnkimai6iBRxm3M5udvTLaVLH8PV7XEvv7",
  "key33": "6d99hxRnbySHkExzHEU4YW5QzLLZYU1t5JkWLenyZeDZm3irYVV5tGGRWy7uT7XnZXs2GcdHvREvSY4jgaGhjgv",
  "key34": "5dFBf2uPoisL85ZufTNYkBPc2e6mcLxu3abudLMb8Vt63dKdafAMG29abi3sXqisfoaucJQAJwXGbyeH9iA2UQqH",
  "key35": "4MYa5MKMEvK69s3X3qGzWsTSvfUDwzbbCwjv49GSBnN7qWAWsRg3nqTyKqw844rGkf3pQzD1Zx8Fd9JqyToXvkE1",
  "key36": "2VUfLEqBpb9BKWCaJ7wFmCDjqcfGSoGGcsmgxFF447QFeB9HBA2iuG5jRZChMxNfVTFrc1QB8veBZrgC1qLLqMNV",
  "key37": "3798Ktovg3X5FfTjnX4zsNoDbtqBw3owscbUpX779tUaSzFyKM5F1Y6eDAiv8nWLRJu9K2LxSynJFx5xStgqSrDp",
  "key38": "2FsAMcuqxnJRvEjEEtEuGgdJoyWC4fjQYygN3PiU46AEdrbXtSVPNiQHbXHCzpdG8fuVfAU9nNW6QzY6bprTDhuY",
  "key39": "3i9ZeG1w8db851PjKsMQTBihnJuYPsx8zEjxnxRWRFqnM1AimnP7AYq5yJ2Z9B1DjrLBgWRbTShqytnjEcAhD6fw",
  "key40": "4etRRGni4WqfNtt6EDZSeAef9iHXwcN5QVFuw7YfSb3Umt3w2SVmsaJSo6jAKci2yijnV8MuzthsQSehgVpxhC5A",
  "key41": "2VYvhxBaxLZUWZLgZKVtXjYtJyx7i4Swqg2cxCuBpjH1ucVgC3sNPbCmWXH7NacF8V3z9FWFdBZbUtPnGnPg87Kh",
  "key42": "5jdNnHqkStnSa6XtKsvZ8jEWZuQ9dVWQiQMAaJCVjnPA2puy1yRxg6Zmou2LYUa6TLYRWucmicKNACRXD1q8CfV3",
  "key43": "3f6VS3qZqvz4aA2wnqwJDHkkWFdFUvFX7YtDyrVcsgenKzf3CNRKYCsHbpNSjYEsXqbZjBfZyi5dvkeTGYJdYHR9"
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
