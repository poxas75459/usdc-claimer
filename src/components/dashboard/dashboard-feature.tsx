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
    "5vqPrqKQftKdBU4Eu96iwhiLZxFncYFCZzU2Njq8DsvvWvh6tSvPix7Gv8AiJbL5PaAJKUXA3ZRNRVFkpQKFuubT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hoBEaYcHeutsoKWNZNUMBv9cqAp2Ua1ki2fXK3ALmueWMmwxtcg2cCUGAEWR6qjR47wB8F4uGXp9ZNtLSLPU7ZW",
  "key1": "3NjGVZeUGSqdiQG8MwPWX1JRa6ueLVZ7gNKxJM9UiWfoXtxZ3P6C1rqoF8cTLGpRbv2Dh27buTYTWZa9aQTR6vdQ",
  "key2": "3ds2CAa772EtYvmXBY213s8mmcu7TVH4pJmFpwL7sUJzF5u59bbDpwrf7MyHB1FeuXrpwMPwxXzn48kJ4eGpx2dG",
  "key3": "46Zi2BiYiS2xsCxK5EJGvy27R5yRHEcGHv2uHVHRtutA86ZwjDtLDcRdgJ7amVmRaAbGpb1NUY95jawmUTXiHzwC",
  "key4": "39r7qiNQZsBMXFFJkQGGAjrdRe1WtnTuHsEqkEytAHqHsaUfLsi2unjnMTm3DkGehen9eKMJtSCeF78MDDcFw6KY",
  "key5": "icywcxGRfjNNwJM5w9yfi1uRZxE134KHcHeLFcKyWd4B2TfsxZm4VHDjRqoc5RMAftsMLXLt8DFx73pq8mkiZar",
  "key6": "2NqAyA7DbjGiSErxoaSDAi1SVuiz9kHk1LykyDQ2rxwa1MsRKEKDWu19Ca7ciKGnmWa8XLKj8bmWjaCG23yhEE4D",
  "key7": "2EqTFm92pa1zWxyNAvgozzVNupi17VXJJ2xpJNt57d5cxiJ5VJ2rTi8KbVNRvu63MoybB7ojCSgX7Rs8H6btxd1P",
  "key8": "2VBbVSjYR2FfPiMizviioSjcMfrN2UxTDxEeiShYkrZzi4NjUa5mWYXsnEa4UdoaxbHSz1bbrqdknvzU6fBrQW8B",
  "key9": "29jQXt4Bk6EgTnYMCcSC9PkQVS9ZYpJXZyabMkWuuBMTBSp44sAN2M15XhVe5L1TnSgSRFDrfmzKQhLAuHcQxBBR",
  "key10": "3DBvkXJ86xpJHBwi2pKcm3k5hwGciXejUmV8sPD3a79yhcLifr5DM8bKCeikfhtmRm13e27fQcMyBhfp5FL52DXY",
  "key11": "5LVUEid4NdiCRiPNbRkpJH77BUbU6TqE3AZ4bFe4XDXNTKQaMV1vwLnFk8UWc8WzHJt9hFZB8j2gTfyLyxK6VRML",
  "key12": "3hcmMrZ6z8Ynux2L3oNhWw9PSPA1QQ6f4mrTidoycvxbrRjFpw4vV9WeGCxTqkruzQG4Dj1oenobRERu9riQAAJu",
  "key13": "4kZcUjVm3s9oiCi9Q4bzEFzMSPciWdYyCBh5owFkmmrH36AMiMa1c1rBvWtRf2NEJFrEWdocU1dCSQUaXn8DP3Tt",
  "key14": "2pk8SA2aTzRCWz77FRYeQWuoYGfviysXwsS3H5ytmabp48Ue6Xs4YKGEP2Ja742kLVn6nSJ5ESCVZ8W5CdPVKY3x",
  "key15": "5iYEvvZ8MJWtG8Lw5DZzu5xdwZ5ro3SaUbx2Xa3uZckBWfLEccsJyNXpmQhChSohyMzL1pF8oDp2HivGptpaDHYs",
  "key16": "5B45SBAZik7cTNSDf47Wij2uqARreAvBFnooUJwHT51vk9pYCfoD8jpEVcAyc3vsYdPdmaYz5W12ruHMR8dsnwTD",
  "key17": "56YNMTEQABwvHpniFo8B6LJBEF45VdETzaSMHv3twjtMLXgbbnJs2BpxaEK6AoBkv8LRPZEerGnkfzZ6SgxAFmnT",
  "key18": "43kNJXpNwEUVM1jwgg4H6xRwTBor92txPnsexuzgCvsmzNgQqRKLDcNRLvXyH3ZQSizXoVpEcUcgV2tmwCivBTv9",
  "key19": "oL5s9EAK35qKWBCBoykKc5tm79skPyMZLktQ39cfutwQ4kfASf1tHksjx1LzNsJhaC74fQJ4zmg1mk8hTAhHu1M",
  "key20": "4dXPLjGja7aeKNt4JdawLLe8pqJuQUkbqxio91DkH2uVK8N6QfYtdk8ra4Y9ZnVmTULpzpthuzdMjLcYkaHKdeCX",
  "key21": "58jGTeuAZYD2QnMyCiUDY9yEJM2VtUxPwzba16nMCKM8m5u3AGMTs1iWqeTjjVmyV5x9RgC68hRpWS4j95bcNKqC",
  "key22": "5K3ecELzcy6pCLEDqcv7zDQJgLdmp9BEGtzbRakoQ1oPDvvEGfDdRdPrvxNLTT1RJokZskgUcf5z6TMz6fYcV2vP",
  "key23": "4aKLoSxFdDjKJKnTy4ieYNEtXRer9sQmWB7pYRdxrn3UvAcKdVdFZpLhgjEJKZ5UZYjbnwRHtN8nZJG9MDsBcL7G",
  "key24": "2FgPZ6qQfN7MVFEutqAjVTX6aKvzmGR72dSC6mKWyQ5Y4YpqCVfdD6M14amgw5QBefSvJ4RiXZJSuBHiqhYSHkU9",
  "key25": "3ofCe56qn8YKJLTFj95PZxjuh3W7u9kbszwwY7J2CZSAzC85KJp62KtgrHZuFHZZL8GS8MhX1Diqp5mBEpZ3mveb",
  "key26": "2iPQEbXF1QUkGn5HLJDQFtrUPx7KrFpasJSrtDnFXxr7D2PBu4PYUB1dTXVs6bnat1QSpBSZUNiJzsABjDBzepHY",
  "key27": "353QwV6AHEab9Y9TSaogWnyL4Nywhs5bZPj9bDCHbW7BiWL3eZbfTyvhpx5VdtGEeR36q7UeXbEb9y3iWm57fczg",
  "key28": "2nGNZpmjfshhKdJR7e2bTmjgsNRg9xo8DPwb1TFxzQdvRvp7md6Tjmw6R3fAJ5tmTUTKiKtrLmGUXDfAvuMqSAUq",
  "key29": "3PgAg51nSYPJ737zF84eJ9WJyU5UyDPb75JZjsmy1fU8j93HvPuLpdvdYbobczwG97xNT1grAPGaQ6bTj66ZV1s2",
  "key30": "31ZkWW5vhzJDe5eoDCmNbedKFJBYb3G1yJ7ZMr4GHUj24eXyF5GVrRSfBWW7V6BBEt1wjowjvSFd74PNLho5B3yk",
  "key31": "43qiKuxVYkMEr3FRQ9fvuQMZRrBHA5F7wszSWFVHyugMDCWPoadkumvz4gZudWgS1EHUUJRCau7QrVHeKmPaqE2e",
  "key32": "qZsSHuoJFejXweNFmi6HGudsLiYYQDmzV61bSHmaRXbzQzTnNqUJHJDWxCoAag7d5WdUtskur8k79TXe2uGkruZ",
  "key33": "5p6kYFjjCCehuvErih9LkVjgaXF8zN7HyuRDmGj4C4BGvWRgJUmrBsr4vG1fxxwgY33be8uFS3QifoYhHWtuT8U3",
  "key34": "5zdUCjTLfksr8ZX4VYhyFiPAMWCKXygYpumMQMdNhPonTyVJphGnonGVRXQ6ftBFGWxqW6NjzYXFNyikvzFVru8o",
  "key35": "isyHXk1v2s15nw747VojrcGQhnZ8v2MmCW3ftDwQmpSo2ogPdkkWHTHrCyxdiFktukwzWFW6uEUa8R72755vWmH",
  "key36": "Ch9RqoVsUQUDYhhtfmRjcs9BNaoP7RwrfTW5WuEEzm9tKBbc4FSdeuVMD9LmeFyVxVMCBWNG3DHrTdV4B8Wtfui",
  "key37": "5UDxrdLn1GsveDodnGsZhTZ5eEpgWDCJhQCwo3uyoDjVDiw6Fp3DjtxMcmEZpigq2QjXrgesowTEd3qRoueVM21a",
  "key38": "QaMA7EQeyoSCBr4fqGvPk6VQis1nzEhsRQTW7baBQpAgTs6fQXEC6eERo5RG7YkWd6jJDkz8sMqN8EFfndo3byc",
  "key39": "2ad4kPy66jPgPcNdMF7nPKNfNYkPyw6YaS5us42QmCTaw7iSt9qrMinZoe4FUFpLRSJjD7eEdpBjq9CdDpCAZDdK",
  "key40": "5bciegL3BEKCkDBnywbo5yvh7tiL1rYQ3J3YTzcSmjZDgSZ4G1sfzxPoYDkH69AMRz2WzGaGAymuSN4oi8W9ALsp",
  "key41": "53ok8jCgwXd2SEAqQh98mKWx12Z219ZuviRBUkp1V6B52vz5Ji2ezr2DMBq46vBYMM73PdvsbPBbEo9iZdh9mcfN",
  "key42": "3wyd5Ywdt5RgaxF3TmJCeM6e5fsdVCZ6a536V33cETevmbywLXKocvXCM3q2bgqgvDYhgYGPaNfyAdxFbHyp972f",
  "key43": "5V1jh7fxwe8i8LNkN9pfU444b4e14DcmGkpowriYT45gNcs8M88Njn4UU11BEc8kCYAMshgfx7HyLKBKzHr7LqFt",
  "key44": "5i7eqm9vPbM9koNeitjSSLXYyWyWstJtv12y5pw9HrkfCis1w7RkXAdoAaPLydJRd8gYFEVz1DEZLPFe6M7Wcsax",
  "key45": "pzeBnUH72EA938xugUH8Kgy2LDESH8n92RMAonkrt2U5TsYj1KcfDV4YzeC949ZgBn3MJnsPiiXQmscPCUA1kV6",
  "key46": "3bNgrDPGY6DsgEDPVzXRTNaFVwWa24PLiY1wCshCVhAyAoBPx3X1VsYVpFZXc7LJT4saSiDgGJXMk8MjRjPDQog4",
  "key47": "3RV7EnuPKQuGixi6ndUDSpokNRT9Q7ySfCdnbVyo23rKM2EetQ6s4C9XxDQKt9o8mbRCR2DN33BC7L6uK9fyvEXX",
  "key48": "4xSWti72LfmgDa77UchSHDQqa6NnAnREY3uV7JU4GJGxY27bjmoSja6t4gUKvezf3LFSXH1cU3uwzqaZzNRrTnMZ",
  "key49": "3vkP3aWumx7qhQn8DQxFKUcb4YrVRBWxHwqELYhBk5FBKAPycGfxesyrzG5nTk52LB5ErEegxFc1e9nDhNxG8SuM"
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
