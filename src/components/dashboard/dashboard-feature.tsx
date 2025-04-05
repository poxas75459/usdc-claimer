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
    "4pzA4EH9VHasrAeqeGKPcnpWhzpFjshSyiakg2YCMcJeoWdbbj1ZvKDhp9Gwm6BWmQzafz5jhftjHzJhvzcqQ9dV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66rYbTgdU23QM3bs4CK146LW2bVyY6nGqgPFmZcvBkUBfXeFAkSbJNGqz7cUAgRUXoiNxw7mSj6rLCPjVedwz4p2",
  "key1": "3Du1MT3D2GA92YQeiD8bP52Bw2YXdcTFjvQeiGGUQSKdgroJ7iXfGJ68xCzZ8Z1HSaQrWL89nc4kADKFyjn8guCi",
  "key2": "JnMrkdBd3ZVDPZYLJ5vL2Btj9cWg8xaS4tvSkqVKiFZVKf5ABHrjuC94SxrJ7v2tgRRM4FeFQhEb3U147jTrZLG",
  "key3": "3MmVpc3sKnL1JQahKrYyv7fGFfuxonYxdm8UeivXxXgZNXFZk1kZTKvc5JaDECLLGB4x7ckC8YZo4YpH5ugcCvwC",
  "key4": "wzg2Liuo6M1oNacnyCwUtTmY7ToxgdH2ntDLmkr5ZiziGCMsuoR9qpcAWSCBrN4TBF8VmsBjVfPPWQJoDd98nfb",
  "key5": "4Q3gFVhx2VJtHcRRRhwDF4TMEK6KeSGTcc3xSfcdmmB1JRs5u1YsdS4HyTszxsEe58bs2w3V12VDW35n5DStU9YW",
  "key6": "dqfqRCx8ZdYhP5azpqm1oJakDTV9ibBfhFXYuiYV9bFyS8ZUz6cMfLWbesaHdYQZ8SK9cm54ghJ8mnjLkHCRioY",
  "key7": "4P1aFwQvAfZwAz7ZFifzr91wrckrRi3w4L6JTcTY7CsY4MeNAMA55szbrawXX8Vp2DtxgytkqLARbWWmFYexgA4Z",
  "key8": "5s3GPEzmb9zBA3eV8iv4WSD4LQaWChAwFrMLazcUTZ3XqdGFBvfVfEVPew9jymhpCGjkNVrUwzPFo6TcVybhH3p6",
  "key9": "5X9Vba1PSvjAisc37yY4JD4bi6CfKbzQXkcSKX2b5Ko6xBD3nnhkJ9ahozcHBLHECd5jghEHgH81GoMshEuqafdJ",
  "key10": "yzG99kQ7n8xRJYBGVYi1PTgNzFjtLhwcJUEkz2d5M4P8jKqUtvKSFitmFfxxmCCTd7r8EXJ6fSAx33qDMKLzyuv",
  "key11": "3iz1hRZxBCb68nBwGof6jewwmSn7ZgCmmVhZ5Ss2UGzjMFmbpRNJ7i3L2gxpZcRqJGvE2aE1qW5foe5sMdwTZQpm",
  "key12": "4XPCCBNN2fqY2fVGY4bedPiv1ZfaAvPtaFa2tKnh94Z7QdZgrKSvTYDM36Rqw6qEwVWKKtF2GEezJ1eqpmkCkpKK",
  "key13": "57ehcaDoAAMAmVcbcC5hL31xEjn2Kjs6HCJ6r1RCdBM4r4RcWvp2EUAQhd5ZR5pvXBexwjvEZ3vkDKRENr8KevJG",
  "key14": "2FLLYkTro5SofDXGYAUtCjckTqzRVhxUL8Rg3KhmDHYzweTh4VuMhga53f1jYEJUnWuNVVahCQeuhLVhJTPqdGEU",
  "key15": "3AV8z8Q79qnUEobxrcDTEb3NKJwXzQR8XYxQE1FRZ1c5coKrwxoHdDTkCqBQZBFjfuVvCbzJMEFmzxYvYGAUKNQU",
  "key16": "2xSCdYtNizd8NkSPEi8k1RDsKdmQWuHh6jABU5ocuhapEVZgbAcY88TWXAEwaSjnkavjYxmiCAswg62vX7BVYxLU",
  "key17": "7NxvVmgHAHbp79grx7QKV5vnc17jNwieQ4H8Us56TFy4DrVUhWZoaZuaYfTjiUqnjbLiGKP4iNvP1qHitxA44ae",
  "key18": "dcgcq9GtH3HzqUptScLHUvZb7GgH4oDhQZ49QSzf8qfv8kZf1DPDPWw1LoxpXaa1VS7A8zveHt28idW5oAWBjMP",
  "key19": "5HdoYwXeWb86xKsnK71cHyz3M6WXS5337dhD5aEW2RKDPP8EtXL84U1F6ESKk9xhgfmppgkgtYafaz4tpwnxkbAy",
  "key20": "5JyuyuLUbLSQrcPMZTG6FuasoqMtYfnsH6R7WfCQ9HBd29SB85MER74crdN6pcRC6p2oaBq7rfCUfjRmJZUpRfr7",
  "key21": "4srMXHBfM9qwr3cLTNCjizrMKicJZjerCrm1GB7RRsUoorhyaDz1feGQSjdtBje5PRCdfW6J9wmGSv7rMdUeS2oX",
  "key22": "PhqsJPWmCW3bTRyhVpcdLoswrkvgJJpbFyyuBiPwWmidkgdxqZPcTgmbHtWR1jKZw8GmcfGP8dkhdYssjvskFyS",
  "key23": "28pZdx3X3WPwnaW7uYS5PRUxY5bJXMVrEvSdznWpNMCdDvd33zaDJZDGzshmpnyf23AJBZNmpCw3jS4y1uji2aFa",
  "key24": "3G3oXidwy3u3gdWBm9wEHHuvXvpee4eu3gePX6DpcSR3VHXsi7iQ6P6Wt7atXGE14yf43kaEcYbKq33AUhprzzcT",
  "key25": "5aVuqszAeZEat27exbs4Yd95LCtCD5vKF6uzUn4sRfr73kSnsFUv8oMnZk2xyMZbNfYfnGamaTSo7QYf6SYjKD7z",
  "key26": "HzoR295YRTG7aWnMoxo4wGqySdQdQqNyFB2bGUDdtmHCNc5EVnbQ4TR7dzn9KmytSfnxJpmr8JeTevQeUJ8Jg6W",
  "key27": "4he87Zw4y4fLJe1wArbvxRmNXLQfvq46dW5amtotYFBLeDgpGoy1deEc416SfqvmdHmbELKfJt65qvuA1AAUTFgV",
  "key28": "5gayBrkyhAVsLQzWSQSehKiFcauNxNeCoDUvNiJ6V8Qqsji2D948k9vHRq6NvNgBBzmsGdqiNPf2aKifKAKtHdXR",
  "key29": "2zF7owR4PNuAbifhgarhYJdzHT3mSMsv5EeB6nnWXqrK8mzAtcPtUHWw1ze5UCD9XT3afMe4XvDz7m4nsFF1AWUw",
  "key30": "YJd6FpsXkxc6dNZLXoA4bXzR1ZwUhNNrMiB7xHwRWTWCBiRnaVNfyBdteCWDaksiBUEDRkUwYRqVtH1Au2q7Lk9",
  "key31": "zY3MBeqDeVMWrVodRHfFrGi4T5wc4wbUXyJeZgud6o7EcjpeePb2sPw9wfHGUFz9bHBK6v6RJz9mM4ibQhPrqhf",
  "key32": "Gevta6j8rjPth8WJvtKLVEbr73QTS9A83RLHtmfyHohBxWZBMRwHDSSj5BgjLjt4hJyYT2ZoDXg3Sinwm4HUjbb",
  "key33": "5i1gcHt9yJRZj9nB13dzz2LvehzpYgYKcd1qcfdDKTUwH1REMv9BpMxuez8oNYTtyRTcQ9NQGGbAhUbyxWkZtJPe",
  "key34": "4Fu7eVevQYZYmp8n2WfyT5o1aA1RkVnApDNrew853nQmjq4f6aGKW7p3x6NCowXncbZSnhZ1KGAy8YLiGW4bbFkW",
  "key35": "61YgeDpqDKSmsHRjLWyRETTscXnzHtzpUumUEuFZ5oYVtwcJGpHRRr5HxExcSL4WY1kRHCWQz3ZuTzfQKCu1CKhx",
  "key36": "4jmdaSxgabpkNgrjbypXyTH4q9xLpemAfTKSTqqLeJ1URipp7AnLv7ojKoeQ7nHpZv89VUyoQfxxzBXSrtRDn8R1",
  "key37": "38Jpfi1Jv6MAFE946QGjCYQys1SY2uKfDeSzUV3mTdrPjsREzGFkmg22efmMdXjfFDLr8V51Gp5jmf6yzMM1xQL9",
  "key38": "54x6kw2jZvwf1eeed8zod2iqVP76EuU7NcHKe6vAvYqW2xEXU58ZEK9VVvQis9VVfGjd9Dy7FsPG1jKpWL8sfsTA",
  "key39": "4ApF6tjYEBmGDtXHfhDzQM82maHabzbHAQ9uLgqsEe1ziKGXqerzd7U3CYV1A1PxxwTQ27qtT3PDwhJPEJxX4jDG",
  "key40": "zQHgczbqaE8rAcb87kM1d5Us8qCosfT8VaEUk8EL9HDjnNvufTm5fB5CoxKfZTd5NaoJnbsQtwnWmLXdmHxFrym",
  "key41": "3W9a1mxyN77tjpXm1irf7wNyMrchyqQSxmw4assrTzXAh5ZncMS4Nw2i5G79rpHkvW472CWtJBPQbxVHQFsfjXPF",
  "key42": "5K2hr5t16vS1FGsVq7gcCtdqPCt7Dv6v8caHsUapY8PtQoJFz4cEt8K4TUTRHkLeAx8fh6H3TqvQvc3qxUUPNrWR",
  "key43": "2LkTDh2Bp5zboASbuMCeHugHsmjyQa2fqvLRhTEtHzpZrT2aouc8g3tFgE2prWicz7EsygdfAvmi8S2vZe99vsu",
  "key44": "23VSiZGVBbmxNc8xjEmi2tGL9U4bTCAWtFZ6vEQA5ZEiWv9dDkpfeSuW9H8aLJtrS4ZQS33gze6hXFYFmacAWLcN",
  "key45": "4xAsgGT5zvKr1LXyPg3nMJAy5XxKRNnFwAAp7nfyzfwvn9rgTbtj1MLjYhmubSdjX1u6JuJHFHHdDfLfvEhhXMzk",
  "key46": "5owadtomwMpQDAEQvZL2jFBUXUqL9s26RuNV9LkQDHLdCu3PFcB6wq8nRcVrYRuaq1W73psXFgd8Mu3s5E859E4V"
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
