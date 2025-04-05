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
    "5nA9xiyiMiKBrZT7nFeJEtyLLACw6C7Uu8BmeXAp86dNYUuGfNYC8RGQbmcP9ixGVRHEBEKkkQm3Nt5gd9hUzcBP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b7CkvgY82w7B3TbLd58DAQsvW4WpPQBwrQG822r3kxhzbZ77qfRF6a4xuY2o6JmkjoCgKdEfzz6gVBuiw7fEj2a",
  "key1": "62E7RWLLy4fTZKkrngfYQ5crBRxcuP6rhbebV5RHTpAFAxoxndA6iNX7dwYUUBnWc91nAwgp3mzzSNDivZgxGzZ6",
  "key2": "dkLcqN7W6C9NetiQpo9FkQB5otSJfiGrrdDWFwyFuAKgY9QYgBi1Mf1oeFK1n2SN5yg7W1KWDjL1mfFAsDYCXrB",
  "key3": "5q5PFkLr4d3e3vt6JucjeXVCQ4p8HcsfrNxG72CAsDouCUVuPqUGzNgo4kKDLs4zCVNm2UNvnbhXkWvzn9TPLU1F",
  "key4": "3YMy1J5UE2z798prKN19RtQ48P72gW8BfHxqQW9mKoacFY5LKWuUN1rQ61aLgjdt1KVUqfUvgQb8nob8ng4yE5tf",
  "key5": "3KsFkwyuX6xEobB8SYWUahA675VnvjrW7R8xRxhwwzd4AFjLuwpsKes8nk7itcbqVW6zK1Hwp5qvvDA36xeLDq6t",
  "key6": "5o8semokguuci5mLNgNbzSwLFBsxYcj2SGz2oV24aQrbTiVhkorw1cmYAafoxvH3fX34Z9Q4nFeD2PaciyGUujJQ",
  "key7": "32uJipE1rmqthL5faMzttYJcBrTCp4MLGZ1cnQoDcxLWmDSeofU6vtMrFgiSrrxuehyQqaqxA7kmEMmR8CcX9dvn",
  "key8": "6395YmKNYsTD8iMoLYoS6q8AggBoexTcaf5DRpfszpDdeJL2PvpAGwUhLHFEJFsCcfAQNVX9vEKuF7jrLWwQo5yx",
  "key9": "Zno7DJWg8qSUSd4rPxnY8VQt74GujzhEZAEMUt6ytpRAEa4EW6qy4CAEYEJi5TLLGMpCDnctFP53voQLzgqbhM4",
  "key10": "4kYTyCTdWxmDNFbiabCXBMjf2RVFEbourjukUzgrJ9Vtb49m17pez8J6QvDfB4sq2nfitrC2dfowY4ZWpH5eTaGJ",
  "key11": "33r4aCWCWoUxQfAuXMzJkPdnQ8kmvYbm7QoXzHEao8X6piAcYoXwmfwz6SX9WJ7kb4t1pYdZV9EKCq6V2JyASxQq",
  "key12": "64Eg4pU2RBuCgKCSPU79oYP7F4LD9NdVvP6u6xaMK1Vd75fMawxnH8PF1AFpQrvxUTV944adcenEcenFgQmpsbBX",
  "key13": "4JTQXcEcyj9T1Sf44g2uaZoseDW6ckn7tRELMPnbw8bPcy6R14JfWgj6AcWZKRurgXcqNh8tXJCB1mfSCFBcFteA",
  "key14": "4EyrS4pKoFy3F8A8YaS5oXTMahBhfx6PdD3qhZwhhsg7mU6TjqRDM6tWDh3SDzajX5Vp5vzCgAwd7JSW1sK2r6KX",
  "key15": "2j2DFSgyDEvZ8nQnN5nyWXEUD8nkd6JUsseQudLcwivndHfy8BgY2QCzQyYy6DtFHYFUev8FEEUjxMeS2SWy1XcD",
  "key16": "67Ahn1Tv1ZBXWECxxgnY4FEEAz1gBidd2yFV3XbGtyPo5DVL7TCy6CFjx9zM7aSaUdk4hB16mjeBisCpAJU5RLky",
  "key17": "RTco7iCPYnqpBXrHX6TxKoY4nEdRAkYdsCB18bW2ixq5ruT3Shj6FJbV9NAAGyVZfKN6yVAFP3fwMEBb7iqvSDL",
  "key18": "fH2KRkA11x3sr9ARDWK6jHMGdXZdf8LQFkmRsUKymS8zrXiDcenz9F2EC5Fah6C6e1kssmQkX6vyXQreNXr1ygd",
  "key19": "5qHL234q1CBU4HfYHfMXdUqoHYQ468nfSGWut8ef1JQCqDvm1w8eJBUNqJb3FXrcHZBtBC8t56PvU7QMQnyWct2h",
  "key20": "5ogJ6TNz8WrNpQHzb6tTYLFS15MxH7cZxJHwbYvD2jZBTsUmoiGDy7ckHoE5GZr8TSxVMR4ntFVFL7sVkgMfZXXi",
  "key21": "UUWa8w5qdLYrs7vYKLmD88SdCypSjL8Xgo3ZbeoyyKNk6UgR3fMpHaC8MEfytUE2SWeS96Rxk9E1eK6rfLmDTnF",
  "key22": "654dFDRpuDHQoaJGt5fWJCWZBPxn7qAbHTHX7CYdunSGF6ne6NtpSxpYkMf8uAEbRN3cKrqntdDHhv5LhQPzuDR2",
  "key23": "eXAk6dHauAxq4PAm9pubZTtJf3gNxvp6LRjpBM2PGLo3zSxe3gT1kqETaLThPs3yjya2BQw9sd7tqWmgZScN3dG",
  "key24": "235YVHzamXJmWpu8dRXwiTuBGAhLX6ceRsVz4eSpAdG6ZLw3ZLLfpix1dgNhMLN1t8ujMY4gQ8Py1VBqBxSH3j4p",
  "key25": "5FptEbUZPGBnLxevKHwMWDGPF7APtbGJ4Nx752wTU9KsRfiMwzDxKJYzYi8P3PAcWgRPwAFsyf2oa49c39rzPzui",
  "key26": "29rJ41VGheWNFUaStS8Vgf3KdZUkkt8u8bvEQ3e2L8ZTWrhersbwfnabmA6PiakgKDqUVq3js3GiqPrdTTwkZYue",
  "key27": "2WJpxUd1xty43dJvKZihxTQxe2wn7tUozVFSR72sSAspTfdzQ6tD4z4Q95cijSDR53XMecmn1wr7WYkCo4kt5Fq7",
  "key28": "4M5vaBX1YSKDq9Z46d6pBbMPWfJg5NFAYttWq6Z6Saba2d3DriJtBr7J8RJKqx68iFPUTKfZGqixJPxsdrbAyUS3",
  "key29": "FW5MF1CjGDJY8u9rFmE9SGyUjr99G4PTRs4mBfHqbKWb6r8AX9xUeiV24eQUmCBggLiUF2hHzGBekqAi4ChhWZj",
  "key30": "3aeraFgbLTH1ndf2FhTFfPrDifWzW9pHpxUUjZGWfUYbxh7h2HJD67qoV7Sm5bbpE61qhKSPbLWjKqQiD5SgRvdf",
  "key31": "2JegADzuexoaPM4wt6Sx94ogC81GiMvHKy6nFmC5rzN9Uxbp7g5pWgXsEbsUTRbMK6ywQwC16a2uSfkth4VVHnGS",
  "key32": "24hdbfJhCytDoNhZVaBQUTsyPWemzsnKUo2w39m8eeukLZGnoZdAGe9hfPW758Pvw5kxmRp6g6gjW9xZuMn5JUUF",
  "key33": "4xhRD6oz7hNbnPuNHW7UJYhT9qoumtN9BZo3TY69tvXoGC5d3mQHQYAr2FU8QuRyGoA4p7KFJQ8KKoCWcw8GUVoX",
  "key34": "5qxkfzc1MivQqgLHWMPhGbM4U4BKhUvtqaKnvGMLbNUbNR75EWMT7P36p7CxGkR33NwbJCPS2RmpCWbTEUXWHxXW",
  "key35": "4cNfbDwSybg72bjx7pRXoZxo7zxnEaf3zQtybH14pTQfAJjQwc6tgKyQVePxA6BuBT4ND5VKDwEK6uimRZ1py4zb",
  "key36": "3zQ66vsFu4P9nk4j7DwiJYamugCqMXCrpBBHCRXaMA7yDeTf7iHqMw1yEUQHxt5PtTy94drHe7dstDBqUPEn1fWc",
  "key37": "5SBThP5wK9AVFuYNToVZHAeZZHReqr5kCojsRhF1NdZrFaypei13WJPh3fdLgoBRtt12WDJoX2qMx4a9iXsG9f6y",
  "key38": "36dVezr44nr6pQ2TUp5wN9AaDc4K9dXg1nm2GRB3akZrBnDtC25yeRM3vbqMRkQ8v1LBb6GfcEH2Snzp9bU8cFHj",
  "key39": "53Tsb19eNfWbK2ZUQciJiJYTSeHsiiyjfeXnaUNWFvU5RNWBumeB1srJ6pcHzwqvGcD45fepXc9Unqvb4RG83KKH",
  "key40": "63Eh2BYWf4kr68R1uztP1ktoBPMv8Ds9xHhrEJsUAmoEqXdCQwkCxiH4cQspErP2k1Nu41DAkFB3RgWgu7CSZcqW",
  "key41": "YgUeChZDKackFdQ3P1iUshg1TufHsKZey9js4aiF1DYg2VkUPJYggYQPrxiHVszSRMk94JenfFNk8t7XEfsi78A"
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
