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
    "Jo8YB1bARt13Y6e3jWqBPdPHhhAXA6EuJinxYxXjGeHvpmZBqS1xCMJtKymcNT9j592t5VjUka6UrbJ2a6f5hUc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LdFaFcp9QQ2hbGT1WY2EBBWYvoCfNQ2CJaEYk5YysGwDDn7M9BFVvTGScvH7eTh9piKWzzDgw3NFi8ctUvM8SeT",
  "key1": "3SNQAKQTHbyhygqs4xz8PT8DbytBBhxVsx12bLFNNjqb9fX6L3UTffnCRSvbXvBefy5wV3SsPzohLYdiUsU93vem",
  "key2": "4nPiFwWZm3pJCUwjzxRZwPmMcKEhKXJh68KpmXRjLXtnbhHZfhh9RqdZoWFmpTC7sBWMzDQh9y5g5dmMkg3Sk3UW",
  "key3": "3PvCYuXgeG469k4pTnsJAwdKFZnfRp4HumoJDrS8u5tUJZ7mENbNfG7xkAb9E9SRiGJHovmXBv6cazHTyVBxGjkY",
  "key4": "2UZvjjXJYnze3B7Xe3351bL2Dphh3DhRUZcN6XDkr1xk6KpkJwdiyuc4818nJ5Em4rEg8NmZXmuvuviPZcq4Dn6y",
  "key5": "5rvbnAJXNUrkVNzvQWCFeCbVQLuEvi4p4qFmz1sZkSRD7wnnkd7TXoQwnLoiFfbAXpiuh3V5otcAJiGkr1gu9yMF",
  "key6": "2T8FgYnKyPX5WLeFJnfYjVLm6DHRd6jqr7ULASku4Tj6jPTXNvzJMUPBdCp6MRcSVNVm7mEWNa26wT1bWFSCkiUC",
  "key7": "5HtzVZMpDqqa9EHVq6qykqRmg89F3EiLVG1Rup7V7NkCEmWguHpP67XiwtfEaX8T1raGQBfKC4vvtYAN22Td2FvX",
  "key8": "59d8byYUV6RSL8RtfXne4wbccTAhczZVL4oR5BC4Fj5Y9RWcVQpUDdvXyGMifoLMsf5wFK63ZS7Eoy5PKPjqm67m",
  "key9": "45EAfFtGvfRSNdRfdVe5bKW6SoA1hkVbHTEYQGs4Te9M4r8bgPxFKcLBYBU3HZhpBdHi1GhQFwSn94ZHakHoA824",
  "key10": "5My4ifrRahnWKtKiWrXioFtG5rVHV9pTYNkoPZJDK9du5A9yNws9xB5pGeaLtsxTTNbGikxrxVRo4XgmJiSRa2ud",
  "key11": "oEccrE4yuqvRZijQUCLRicQAjSLh86JSHBK2bXHwyJjpge6XijpinjMewVDumxekm164HwxjpnMF9FMHMvgHxyV",
  "key12": "vbcfyAsnUW6Chx4rz6qkK9giGbw2CraeW8y2rhtMLvEFkoFHNexJsXbsYM2A1Vewf6nJBqSy3PUW5PncZiqpePR",
  "key13": "PpvK5fpPEk3coqPmab7tK4aoNsUv9wb6PoT1ee48DgHi5cXn4Yr5hxEkvRJwv8NLqVeSDXCXgymTkqgHby9n88U",
  "key14": "23pVygNV83T9Uanq4CZj2odeQBkmQzJNxwZnVbXBX97ZZnHFz5EWa9x5XrpduTkicjxG1VqVvXDvu23Fjjng8ZfT",
  "key15": "MAGB8T979TLwQ8hepAvb4yXyQeH3Gf3wYxzfWyqWrgw2YCzLskh6KKKt6xGkB8D7JYs133WjNZQ5KGZfmG5veey",
  "key16": "3MwnkwBSgbZX7JfhsC3iXcpvEo7y71kmNknJhWtkpaoouvAHgmsb2wA7sASAtAHzm89XHNVpjq3ZTQkwHe4QQPpg",
  "key17": "4jF5fTo9GnqwEBBAN83HFhn6jQi66JA9CC3ZRDPc2BGx81z1UkyY1UkGJeWgQUxhHJZ862jpu8FNBPGxm8CpJ8G",
  "key18": "22sqHZb61aBxZpWXQ72eZfDAxQucnMr5mLeYNDP3DjZiQrN3sr5fPiDQ6TDAy87ZPyzkannnaK3ZRiHVpXhvw2FC",
  "key19": "2LDkmR7zL2Wu9h6FWUfXQ5EyS1oodevL9He21UApBs2gNY5wieMPNpxqvyVrKqyyJCRn53tGo3hTBEp9FxuY5j1p",
  "key20": "3BS3dRi5wZjbwiDA6oNK738HQtf82ejAooABzwuRVZNP5wTCcR8ojBA5h2KFFNm15UiwfJUeUP1R2GhwRL1GW9wP",
  "key21": "55SVQQAb3orpEhy5PM4qHxvNeLJaUqDtn1sGoDhZuXfCeu9BGCAsiHM9nTEqXKTbWB2DvN5593rWnJ3dgEnBdk4Y",
  "key22": "5zZEdu84x9mqi6s4GTgATLndJwv8cd76RoVY5VW7mk7sunhWgMKfpGeRZ9LLknm4XHkLX3bX5MHrpUKS5p6SpioT",
  "key23": "2BYeQUYHMuxHp1aLJRuUUT75852NuAHgHHvsqTZSms4r96iW7QshG5iAvR7GqG8Fqtk2bx8cKBaPn4Jy8Hjeckpd",
  "key24": "2xN9KvSTdnauwXuSFfxjcaUqGqvRV8Aiz4QKSt34tfjHRg3NyDxsqVBqFx2rb8ygAcJipqPMVdXHNkvZk1zm7tDA",
  "key25": "4Eszuxb2eZNoBFQSzo3J48murgxk3ixpXUgNhTMwyx3QmxR29LLhzeLTSKtUaPGWYCwDe5dsRf7AqJJQfdRq2RXB",
  "key26": "2XLbmnYKcnxdKJGmktxaSJi4yzEjyjuFzVWgePgeKXJ19y4orLZsNQAGtKPnjebJj9dPR4kS2ZqWhSgGo8JHf5FR",
  "key27": "5FDidwGPQMSKwK3zrPwKT4iMWBt2LvV5UfG6L4rcNL6bgzP8THzQSWc91Qxh4V3WYPvo9BP5xYdhRFbcRLpfDX5x",
  "key28": "3cD6tb3akbF4Tqf1vzEo24J92Ttwey3Vp2Ya7rGnRXvuv4hRHhtFCvRW3y91oBr3fJ6A6cW3pzn1uZHttEYBaoaa",
  "key29": "4bxBcxpTsqpqt8SZsQrLL3dwmzvATQKtyLP1XUhFv53rU6KaRqYZ78SQe1JF57stZm3iMrMVRkaUGwVJRFwTy1Ex",
  "key30": "2uTtNdifuSzWGTzi3FYzBGBmTKMCLJU2gMU3hgDgeKCcNb81S5TSQ2siUcdYUSUBn2qsJxGcHhHzqi98D3zDASL7",
  "key31": "57v3QqZkK4twa5Hp2jwuQnWNysquUqkX4ZyWFWsvNJHNBgxT5sYzeD3EmfAMYHpN5o8Mgj8woq4Kih8fA9STaQeK",
  "key32": "63fpEZq9s7bcJvUsQxCrbfC35qboagKoXAEYhCcz5EMya9cjdbeAVCie2T88AL1zUFeV8DzfGz8DjEHBJyTdbMx4",
  "key33": "3sH1iwAN1uWkENhfDmG3AdrcJQttahmG5C238p6b4hkZt77dBqb71KH8vBfHH9Kj5t5iJpB6UJU8PMT7hikreEGq",
  "key34": "4mm29NMTuvNNHAbfKyWVnVwC3WvqjMbg9ZUNF2VAnfo5a1ZKu3oVQUvrLuhF8LMrMgt1LaPkX12hZUMB8b2cYum8",
  "key35": "2wdQCuBryvgbL5wqdkDUMgeyvj92nDYbfdujET7JPd6M8k4K5Eb2U4UuGcULD3uUoMhkgeYhUc7RNjLf7oZKRycD",
  "key36": "4scfHnuihCgm2mvqgBAbFKdWynU5fLuVLR8ZJxjXYB1HxK94X4WUd3RVLD6nULpVBa93BnmHmay3LiDi9C3BPGC2",
  "key37": "2DFnekmGtXm5Zzb3ziqiuaq4XDYnNQ7DXvGXkf4asajKqAuM3XDKzMTN41pMayA6EZnDSmJTGbDy9wE5nf3vp3FQ",
  "key38": "5qiWFhoCwWcrmjLLF5rdTNhpFjqJ8X8jM7mhNs8pDufMsHaJkumbwU9sNP285nDkWaYpM45hv9r2pUjA8PRQbJcV",
  "key39": "5N7GT3r16Vd99ov2RjZ7jTNsvKhFfkYHV59PcByncd4taeizAC2d5ugoyevGj4E6S65wh8hoMzhFFmXKqMPwocp7",
  "key40": "5vN2PnoBZ2DR6D2pQLnF9Bkpchae1SarmGBi4aYJBRKhTW9d9oeJGttc8tAPV7ZvhVo7Wkmb3WKN4vj9G9APoar9",
  "key41": "uTj2WAxqBQHFLhZvc8oq9BghrtPkQmqDqucfDJW354bYMDijJcxbSz97D14nWfHMp6oDBmXh6RSs2o3D7AxY9Yr",
  "key42": "61jBGdVq3BRshQc4Eas9BbgPiQtKeAG5BN8UJEN9WRA6tBRC8eRAYdvvuYpYty9tC23yzEXGWYacC34m4KCRvKvM",
  "key43": "3AvGV52jNkHtq1rkLViEGUVht2vwpoetNNceuaD47LJnhc1MCKMkCpP8XjGwpHvzxzaHuVK2zgNNyWHhDdAmMJmK",
  "key44": "2e61kAzigNo9EEDRRrGgZXEhcPYBBiPLCmZ8tecDAfn62FUywdkHLBExBmhEfcEz1V5Kr5mt4AWaQBUtxiBir4Nd"
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
