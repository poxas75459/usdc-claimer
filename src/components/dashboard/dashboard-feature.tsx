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
    "2pHwhMucYovpWF5yrFFCG9uKm7sxUR4uSfe4D1AAutiPLrKfrcRKE4qJzeHfmHQNJUtLrqXca2U4yxZh3EKnw3Eq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "469T8nkzhX8Czk8XAwNUmoPBKWBQKFq93FhZQoBy5JEoFifW5DjF5gQzwVU5Np4UEsfcqcfF8UPvxkMzMKXSL4ta",
  "key1": "3E5895tGX54dVD33JwRVMtGQ45Ctw3z7uU2f3hFS7kzshWLSoYsCU8YwD6FhxN8RqSEeWEfwCncSjSSSq7FcgBZy",
  "key2": "2DoHe8RzyLUaLrW5wr5u6CSCm22Xjc1wsPpL1oPUmzvX9Pym5WfHJvzTt6GwrxAGAW7LrWf9U7r71NqQAbLfqwii",
  "key3": "GVHTRTTUNNG98VA7Syju1xZreSKEUfcRNPQc3bB3nhspX2r3g17ZHjQQAE7KkHxWZMfsPimbxsFVHFEBMyxUwcX",
  "key4": "5d8AhMfn8QYkrrzsBx1K6in21nMjzsmDvA92iUHmVkJAPW6TEwSzKKCji6bDXFxHqTP3gtxaVUrpTnHodunyrtCi",
  "key5": "YUxC7B2oLvgp3DLhKbcfRwuzcPyjENiqd8PFc8ifvt6MiVXB479xYAP13iLL8EqPyxywVHcAoDPMsYp17idGkd8",
  "key6": "2B3QjXVZtbviaM94m2kRksjt3Bt1uQ4Zxx2U8fyERNLZ4f3f3MDEgA9P3Gg1ewDyLFU1h6CvCExsLJMu3ArDWTug",
  "key7": "3jB5DxRDmTZHVFzUDTFEu7RqUG3aFJhSPmoQCj9fCXqDSnh555hBHrL1oPPBPFwq9LRxWof4BjBuTuXuhVkvFHSR",
  "key8": "4XiCJVm7nL2ofuq9vVxnxj6c69SMBiWiY71fgNWLWLBgSWxggRzR4M5t4Fy9ZGVHX4CWqUbEZTj98fyLJk3NA78c",
  "key9": "5PEQ2tdfKLRbR8mEoFpzMTDHLH6z31xmR1Ksv6ZwZAtj7isSV5xpbqzy2UtjKy5h8x8NPakh17GRRaYhzTkVPcuk",
  "key10": "3ub42WJGhNdgmjgA4WUzt6AtPoyzUis81aHrTyn9sqvb3M9dT1EJYU24uxJCskpZHCSW9KbK5photeNT1HdJj3Tx",
  "key11": "4hdWS9PFCYkAvUtcLZPJW3uvhx6U6p5byPUp7k6A1pvg4qEno5iev2YZRbW94EGdqQ7b2qktYYst3BTqg5DY53jZ",
  "key12": "3aroXgqYEY8EWyyvhZP7hna9tKGT9X7Rx7LaV3jRSQsyELpBvUXnGu6nowcN2qYYFGqK2dhBbh9URcQn3APoUYnH",
  "key13": "52ZcQiwRFhVR76AgW9AMCXN3vSeZ6bBxTX6E3Y8wBShk5bHuKhsR1Lt1hKnEHCDkkpdvV5HXrnvTh4uCumecNsE4",
  "key14": "3J3Hrx6Aw9MhZ1eqUzm1CfvxMMcJTTUMg3QfJNtvZGQAoaxEY5YAPwRNwkmhuz7niPWEZLXWrhCmPob8n9qeqeyE",
  "key15": "ip9AWMbZLokLns76GqYLodB4GTJx7da8TeHyHyUrQYXjoDRSzWU96jmTw3yrfebiwxMVWJNxZLQ1jsUzDAN1kmg",
  "key16": "1sjtRrb2YrKQyM84XELz7yHMEodhxpYRe5pJ6kLn8GhoqHSiHNxAzWAojQxEeyemMuEsRtB8ddrMjm43VZPJa1m",
  "key17": "5iPsKLizS66uU2nEK75R9HocL8xweXepmQixkdSeA5knsRqMHuwfAV1L4YCYiXHn2rsvDyX5Qqu7p4HACCtzWBzZ",
  "key18": "2w2ymV1EatYue9vu1woh7bDtJhpo2ZAT5mcaqR8CWGZfoPbRns8bEgi1cvSrFveAAT3PU1MhSgw8pJQsSNAX8Y6g",
  "key19": "5r4vKQeVQpocFtrLJbALhZdXV6WW72gvSqWCNZ4Xoz1191exJ7Wcy9PoaXh1C6Bh9vivErd2CyTX4HL3ha3PuCvG",
  "key20": "3vhwphgRGG6UGDKaovK4jt4VTbgy9cp9vcd3oY5apnyBQAob6rVvWSHeHdEFRTuzRbeYsZ4E2hMuJLJKrvjoPEoU",
  "key21": "5guHAoRuE2Ddnax3rEb2uvJZh66ZoGMziQNLma2c46ynr2iJ8ykF4GPtX6FxtmgyftM4tMtp1fDvp246Wsq6S8tH",
  "key22": "4ZjzFJQTjEx8QrbDN6xwv6FFMdux9bdCXTU6oFYPfgEwLhca891FGNuoq9GVNXNTyqagnWt3jWqymrLUTS1vM9gW",
  "key23": "3mFtPWGndLE2wPkxM36AhMRs2GGi3Cn3hE4u3dM5sqfohAkDK71ikgNjK92J5fH4gQwafrcf4R7iyvxgwoAcdvs7",
  "key24": "5hGvcm6tdbvozUwi5LxAmeMVZ8xk8jse2gds8Tg9Pa4hW3X4j3wGCMu95rhHxYRHh5HZyLhwsgGJagxBqn4seNQt",
  "key25": "3ufHtUwu27WNfT1U3pBQWFkWWrAYSU74cvf26PvnEcwWfH8xJGU6LJo6PCGrHG3K1bMYS8i38eRMozEmkHfq6Pq4",
  "key26": "3WTu7fMtqJgFchA5Fz9d6NRt6n6aVkrFT9CDpG66Rdr7bGCeRCoFBxY7dmy7Ltp1agak4EtdE7ZagLyoeLnXBtQX",
  "key27": "4KmriZERkFWgYTo3JQynNKCh2yWnsSs6b52eRpbyg1CKQhXtvrQG2tZ13rYDntpvmJjHugvimVz3afTmADFZdNqV",
  "key28": "4F5PH8rTYDPX5dmpu2Vo6fzcoSxb8Vx2LV2pfoHyTkUnF8JB1b13oLXbKe9VNMom4YvN2PAZ8wKm3qLjS5MausMC",
  "key29": "2w8w5xh3dR1PwV5LAbuaPh4zKXSmH3vMi3XBiaxDHN6Y3EgqNchPohQeGuppt5yJorRht6vsBUYz1rfFJHq7LKta",
  "key30": "3iEXQEy9SUco3kBSKN5qF2Xq4aTDcCd2Ngh9wJojzi7mgDSAeERZXks5yv8hjD95KNPHNCXbNecpD2tCYPqVLR4N",
  "key31": "5okVoEwBQ1hGNsnVCmGMniroAjqn4shAbLLSa5yMbrPpNVzpgpHK1uENZPwkhryzeBcDBczqvQXJhTHB6vwQhfoZ",
  "key32": "2xvroQpPj1PC1FFS2G84AbLvfBK4P4uGwchoDsiFAjKL24pFhXxsBBC1nsM35VmSNG1yvLfCstWNB31S1HVFv8pD",
  "key33": "4o1Ys4BTR4psihBQPHmb7e1itgPRN63n1v3ud95JpBugsE6JwkiwWq4KqSSWYnDvnFWcmRQ6HyDNSPTyTRzx76wQ",
  "key34": "4AF4p373pHu1MGj7JPrFTNPZw89j1SiqtdHbntAg6cfrbbQzFyAtmjxwrQWhn5CfTtwo2UBStNPkz4oWbnHYwgGq",
  "key35": "H24u3shseDBSBoBdXLgHBJfXBChrVqx4eR6g4ngR3SujkjokpdvoaG2HE4Eew9bHKZfYfGH1hizbR5b6a1pauce",
  "key36": "2RT6FzEvnCZuDpcxXv84rSbLpKZj619EaJiiNBxEr7PA62X5hBVFFpKcbzwCgoVEtDKubcBsJTJLLFsrCWWUqvq2",
  "key37": "3n7bKzoGp8sb2KdwoXwoueZPFnDsthNYLaQQue9UkK5StVngimtUxwzfaVUMAuxWyjxEWw6qk66hEqBYVtEiKaV8",
  "key38": "63fPiywCF3xPtL3YYDK9kiJEtJ3qsPT2zzscjo9dVEA9ujthuvX3dsJWXWjXfe4ginoD5PkzqcNPEN7T74MNZzom",
  "key39": "2xCrjrENwq712iTsAZjWnmDyuWdKTD9cf9SnFX3YvJuEAJvPzWPRFHpNjQenZTcTaYd6gBKJvyVhEBE1zG1tJn2b",
  "key40": "2mqV6fVkds6zLkDH62v3R1gTQZXuRBTgbBkJJmPLHMXw16kXy6bD3i2yxGPKV6h9yVTWkf8Z1RGnN7g5w4Q3obvv",
  "key41": "3x6m7yWh7U5YaGcw4cJ9y6WkaPo2NxSKinZLmEQwGpAtSkjU8Nog4v4UvnLr4bue9q7YBe73qToMVSUeyPt2Tnjm",
  "key42": "27M2exnA7JN8goF9oGvPcPiJbZBvZtJGWsFx71WTZpQgb9RtNsozv7rTDhB4sffbHZhdsF25xTz1WjXi5rfWehuT",
  "key43": "5Rd6unJUdV8sHh1Zfsame1onrGiUof7Wxujbqqme9VDaksszh7Y6UePZ3bLWyiHW3dJar6US8AdTEebSmKPMtGyE",
  "key44": "2D1XMzAg1B2RoTxbsPjAhC5RBguk871UM73uwxSQYhixZyJuZJeEUFMfU1gw52ZUnbvbekmv83ndcq5oawca7gz7",
  "key45": "2oj9H7VWRr8obbkBHsWgW4jrKFbc3MZyWB4Twxdjr9DnetXhXxCabBsWJ5fweMESmk36ThtgYAqX2EjJBTvRHTMr",
  "key46": "Lnmy98bMvHNRLX5Qt3SPYgnyz2ggtLiRE1mwMmkitsaTtNtBhHjr6dJZ947NeifMZGeqtD7shuJ5rUTPtSg2q67",
  "key47": "tqh5DFdPps8V63qu3M1H5h32r8fVpyuS2fhRE46bS7jeavbJ4tnk8Grxc7ePPLtNArF3LoaCxHPdev2SodQnBFM",
  "key48": "5RaXYNpwcFvMVKdnopu4i6iWxFJYiVa7Eh3DeHDMXUgp1FnvX46khK3EhwjW2jyJdj4r4S8zcMbN59iWsKXHf84a"
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
