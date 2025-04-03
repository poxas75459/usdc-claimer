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
    "3AhZEw13wYweVQJ9bj9GCndAnUMua1BBjfKDghwD5KxWuwHkNMmW6XDdLjxFj8DKx39hRAwFkuEu1CNj7AYY1Dvm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49HQgqoEF1v85L7p98VbjQBMuY1wekzNNfj6u9jufa3EKc6syrwJJybQit5pCKdXKd11XMgvVxTu3n89NijbAPuQ",
  "key1": "5U2B1QgFRe17J1nSAVuvxz1jVF6PVu9ZkMLTygeFs88Y36ZbmSkeRKCqeFEMvCMVZSq3ixsHFBeKHVrQ6UNCbCwL",
  "key2": "21T3yp5VeMyHHcJa3FaGXgeZAcc6fVgCaikgA8KBPcQaKPuD83nAwyYhFfri2cExJScp1kYJ46634QAWdKMG3bHR",
  "key3": "5mV7DmhfCvg6TrE9kXvZCwq5FJFdQ32ML7KKKcyZrB1hM7CQTkNmUtt4GAZ81z9qYBmFcqKpfQdyjSaBmDRuiYxq",
  "key4": "VyLdV6CtN8iytySN3imeN4USziUZbfTKZXhETXW3cU1Ryu5XibPYNLFomXjvZirfFSSCr5CKPN9PGsVS61e7ppo",
  "key5": "5P2ieVjMtbxypvKKJRQBXKRkCYiGi55btbV9kdZ81EoskEGbn1DqKgKrCBqqMPXp2Sou2dJZX2nsNNuSefxYHhrF",
  "key6": "5npFxLisuP4kxci9MHn1rYk2dbLrbKVe7nrypkz8nTgnZNuoc3zVmS9CN2aU93LT47Xw6ZUeNPnqdqing3xdmfaN",
  "key7": "4UykMm8pXEqoyhExw5NrWTxYZJD2wv3R5jQjC6y4jPUMYXLXGoTm4kZAkJp1mJJiKnJHmrDmrC6CwJxPEUr6VpRc",
  "key8": "3w47i4r17ryUZZkp4zfCKcuMYHxxQLrP3DGKBLZ2RkCCXYizpEvUjYJYpsSfHDssAL41acHbmDx6V21fBLwA27u6",
  "key9": "5borVXdyyz6QWusyuNuZXTnwD1fx2bjYWNjKSKnSEtdk3vfVDZsd4urKwt1WDVrhRtGrtSqTm4PtKS21fZqGmGaR",
  "key10": "3WZnU9Nnt6DqnrgUMsRy1om7T4UJxr1QDMGd6QfidySadMNT76YtpGvTT8AP9Tr2KzkpPLbgg2pQKLMiNooMxQPp",
  "key11": "2f8WSJNrxzx6wavm2SPVNwUMyeJ1EBkjMzPW1WD9p6zsmhwcxdQVqZ57HypFc8dhTCTqRF9RmUpdrJoq9Cyc7DLG",
  "key12": "2hiEpsWJQEe7sA1MN6FXSS8HM6FVA3VvRGsPwvNfchRsFvjbhnHXR5Zvn4kREWCT47s5P3RECX5nXMFocrB2SYWm",
  "key13": "4HCfLRoJZTKiRmBELKzkM7xPTWvwHNZfH2YGZhpfGo71TnEqT7UvaZU6fdeqSypJgZbghu2hGawE5avVGsQsdsFn",
  "key14": "fXkLasbFCELM6wAaHTvtDVnEaB2VZvCs7LXBG51tPXQgiHyiKjNogDzNhMP7XwBtBHMS9dPSjhyLZ7QuPqUkFC7",
  "key15": "4PtubA9SS8TU2fAzNdwrNefUCGyJsB1Zz2XcjF7YxT97e3LyKYfomUCsvamsiURfYSx76Zf9Q2mXjGmMuCeyjDFx",
  "key16": "4KD9fq3Hvq9if9phjxQ5ZGcpKDj1RyFbzKNXn1hmjz8b1ATQH1XNKNJLbyyf9PXnrTkRVM6qVrXdRkHevXRXFLqj",
  "key17": "35xz5MQSyb8AzpzsDgvBF26KnMDeH74qeR5KczYUCQbwrGZFDzP9LY8hi8go9nHrSzWo4GsNUcAcoRkKdSGD1j73",
  "key18": "X8GFzB7Ctb4ZPT4n6ihhnh3RVSzcMtADz8NcwJa3wrqB9gH6gzoVJLL99VivM3bkrsNCmoURRcSBj9NMz3AqMSZ",
  "key19": "43Wu6xp3k5Y3FnnNSKrStQgq1Fsyb954skQi6rjv8tkA4pXaJYXom8RKjfA8t3BMk9V12UnzSpp5YDRp6xfXRtxS",
  "key20": "2EYBr77EBnCr12gkE126BoJkyXMXWhcTsXdpP4xfB6vhYdP6z8BEpFnn32oWwpvPjxd4aEp1Lb4rTfnp4vKerALE",
  "key21": "37wqmz6LWw1BCNyhKuC3NrmQzn5kbAGkZ3Wp4YpnbowyNQffD9CHthVTfL9JaBd18ztx5dn6yxDvo9FffLHw1kX6",
  "key22": "5uWepnMihhA6HQwa2fWzGYbxBevMoH3gn32xqXqDSHsSNXwyBfy1UiK8Xa6zNY2ttY3XxBgmUbZEMNxAvEHFzWFM",
  "key23": "5kAJATZAVCL4dAt1wDNkzDSkbFNfbCcpaCymVg1XupbULTP1vFPw6dedGK2irWradG7cKbZ4TijttHQYGTVYKruU",
  "key24": "55CUKC1aJc3PUEt8CJLmyJmmq9NPKtafhBSegpEGE6hnukyPn8AgBR2WoZvbfkzsm5yzm7Z6CPxGGgZHBrEHDGDn",
  "key25": "b8CNq8avC576K2MrRRG9LfRYupr221EfBDQG3vjeXUWAtyzztdUDcs9zC8Jq2LgKwFcreTJ7yNTj7ijLwG8K9Sv",
  "key26": "2u1uSWRDHcf7Ye3GiPw5VAUmxxeAYuP6Qrhnv4bsbTRSssJiDS8TYufjYpXBw7ZL2a3m5tkq2nzjuCwYT8DtVsXb",
  "key27": "2JFgsqAXKpzf1JtMnrxp6NRxb7YmjTm3YjRuJE5oZ2AeUY1Svowirb18Hnipi5e85FUCbUkUT3MsRme5gaq3dhKg",
  "key28": "LLpnEmjFQ2sTWtSsn4buaHbU1sWUSnxAzprKbbeSHGBsMXxyaLLgfcTcUZMn4WtX5qSejh21Dbu7wxiN7dU58gf",
  "key29": "2m9v3fBDcg455DeKshryuLgBXEdrskFNMVkAh4DbjT8LFZZfsbu67ZMdM45PXdM96a5AB6Ld5hQztiJUodK4wBtr",
  "key30": "GPLpQ1uYB9mwMoMNwZUXAtLL2UCTrwYzY9T3RPrp2b1uJakehNHNCs9yzf3sHEL4dSkSKgr5q8oqj9zc9REZNQW",
  "key31": "2s1Yxp9oy4P4LXpyxhY6vr9HUXeTa7o37o1pUMt7fz87i454PRHV121uSXH5WpnxkMR2aTNfAriqwrq1EBU9LSKy",
  "key32": "2W8BK5LfJgP1gJpsZvT3vPNv5XkKvqLHC5T2QiuZ2avPy3CubyKCxvTWz9SrY6Te97ZPgJ16Uh1oxgCkCAc3QJTy",
  "key33": "3UXg7d3T54K4ridDBcuyZtAmr8Z6HVCaKe4rBRHHUkExfSnQiADVrmhYA8AsnPJG2vggwd6fccuszpEcGkyQJ8dT",
  "key34": "uHG63FfiM587EszYrNrhMWy2LBEwjMrGX75LxqwqVgW9y8yB1UeEK7seXWcwnjz1GdAvqnEdiDPmnMQxB72DVLh",
  "key35": "5psVKK6m6fpRLiAuaLStnYvWpGGzN98pUvs8euR62Q4MUYp91GhZAKWRSNLpuibgzn8mJgC2DdxTtN8UnyDebToK",
  "key36": "3VaUV6zPQVLNzZR93qupFEsaDxZVaMpsLqWNNgdnwj8sCZFZgqZY7eariXbhZE98QHKJTtbCmR3KAtybbqZ3V3CU",
  "key37": "gsbsKXKCcj9uKec6V52fYkNw1BJWuN1ZUdFb4CiGiN4kKbF6Bgm7hR6DBn2PtfS9ir8JzSx4yBr9r5GcroDqNrq",
  "key38": "2eJDX47uYUF8LRh7UMyzQnNgi7subjkNzd8fnRPSZs92ftRLz9WBdy4aRpRJJZ6UN5wxsBUtj9g1vFWkFYeSjx6r",
  "key39": "5sEEWY8nVgWAnnA2vTiGy81x8UGkfqJXD9PsZhfoWZ8ApfWXZWy8VEaQrRZANHK3oh1g9eWNf9VDYntAWWgaiRPF",
  "key40": "3AL2UoauLzKZnuSKXLiJjbWHFspVt33o8CTR7Mv6jCJjvxXHaU9Kqx3zwecy87pEc5Yay3CFg73qFDDuw1siJWT6",
  "key41": "mZkXNcHscbUAL9cLXk4kE8BpAEUYZ6ak3ma9ngyqc48SZwVDaCdEwTGBq8qdptu1wPY49J2XhScZF7fxnd9dUfn",
  "key42": "5HyRaBvSHGQX5fBa74oU1CSnm5f7YtELx5CaBwPEqn6R7ucJsGyNKkrVyBUpahqPhiqJDoWTzAtfMA7n69zVmCjY",
  "key43": "38TNzbSu4MhJHgBKeRw1eXRxPbjkVsYiWTvqhXRxeYVfPQRQbDcVFXUw9tALcShwxg6UvtoCKVcezRg36eVRNtJd",
  "key44": "4PasatUteR3mZX3f2dxB7wWYsRGoeGPUiG7WCzTPi1Y82eBNugTTcaVM9f1Pkmbtqk2wtmV7jPX15yzMuxSHx577"
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
