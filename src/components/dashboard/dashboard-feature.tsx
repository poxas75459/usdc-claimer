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
    "3xLyJEJatUVZTGbc6neTB1y11a77BsEypYTDtAq8ddPrT52MeBkxKapbMh5JxCum5uwF6Dkvwa5wixxJMLJnqebU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25Np5bVUV282W1VQVFZVKCerYYcYdoxAxU1uWCYGxxCkF4gfTHWfLeXSRWtyz2xddHq9APs7cSP5rYzXLm1vCsbn",
  "key1": "5tZi78ur9povyQhDUWpuKo41AAnC94ZYKhe8pbhp3abh7eFV9LoraBenobxFoAQ5WPoHXqsBBgXA2FFTd7WGgxUy",
  "key2": "4o1W4mQ1RFG91oQ3kVHhprbVDS137b41pm3qPo7kFcerLtQWEX8Tkt8zdKnKrjsGYY4uWwUU2E5CxKxVLzDUNKzM",
  "key3": "32oL2zB1EYYTR96niYJyTZjEUDD5trDtKwrjaa2jnkJshnwXiknfcxs16dP7BmgNBDZywG2EMimVMoQVD9oPoQ1M",
  "key4": "5bDdrUprJb1yifMTaqqq9ZBkgzib2oQC4NguPc6AHMRzkXVv3tFgrMZvBn6JpouMEBM9BSvtwNQJMhSk58QsYnXP",
  "key5": "4v8B7CZZ8ioVBab5Vq2yKu5SDpAmHUNwVLTueZSbzCWhoEdtKKbgbz8jpxYCqYm9hpRaQoH1ShV25dPCe9DvwWDi",
  "key6": "4hHs6s4Yj1x1HK17CQXWSmQt2eiLTUkC1FLD57jtc9vKfrPAx2DyWD6rLPwKWfU3UZTv6JZQDYG1QDfuscFM5DGV",
  "key7": "Jqe5qihq6T4ETiCNqfyS5Ko27A6eNBF2Y2kaKNb8gVBziTYFeUNUtftAGEfevqhomcGPeyBkdV7ijt1agDPBFg8",
  "key8": "4LJFiWk3siDEFUTEEWNjaKMggEmaCJyrN4Evw2WhwHMuARUrsbwpDhv1qrb6Vg9AEuwfpq8cLbAZ8RazupxduPJB",
  "key9": "B9ZKmYKY7swbirxjNUVA2ugZrGEA2RP1uiZXpKDFE8527Q1LAMVY25AQUPSwkWhxn1hEc1B96DwxJ5uvtbmNCjx",
  "key10": "2zWkAz5tzqgeme1AzHLAf45E7k1XenFGH5a8nubAar5fDuuVA2FoJkSTJoPCuBHiBjCQrLXdawrZvcZE5mZYZCxj",
  "key11": "547i7gJu6yAQFEZdtosei5kC7oNvjZCvnxz4dcFSwkXb4FzL6qrmeEvdGNQyVevadxtnjVijQE53F2hPzK7rCs6z",
  "key12": "3ECHNpzpw2Y32yCTvmyp289db52azJM2VdSa8gnD6nWQFEVsvtu2Lb8GkTd9jnhq8u4pYd5u7FD3k3S5P6TjD3h4",
  "key13": "5CXauV1VKneJG8Ydg7jcV9r1oo4PxGH9aTe2iPeSnMFK4Pd8aEnYpsV6mYNRWTrHutSQqaaFKSoALBrptkDNmNjy",
  "key14": "45zSJrtQy3w6neezJz8m7zBF7ivaCRUhM47zUzkvuRHxz2YcRYkLZpbkoixp3Kixr9ZRHCJV7saXeJLovfQMxodZ",
  "key15": "2hvB2hNHA2xwHWw14jwSeiW9xPFcknpeiTxyD46MoQysnzbjB4LhH87TGUrAYxSWMM8emCCZWrYLuEDzMvPgN4ve",
  "key16": "52VJtZ6dNyJzADjtV2DhbZZwFbtw4Haz1j2R3B6cVoimfkkMyBe34tF1yaHDjH99wHksKqyZxZrDdP3HsiN1WWhc",
  "key17": "58vJymZiZfQQcvXEaWGFEtsNwp1meGBxovLdkp8kdVLJF22WjgrNY6FYWmSVAefoBJKoR2VC3xfYWQ7mnJD6gK3X",
  "key18": "pNULAuSyARXg3q3LcWPvhTmbpYQt7PncVmgrjM9GKWCjePqicre3kMqnGDFvQRdgqg1sF3KkPzFDHMnKb1tdfdJ",
  "key19": "iqopC5mshc8tDyJyiYrogMc2NRXN1nnANdXbLD7xA45WeFte1eVGb9LpXLHoQrEAqh3KPjSEFMsj17yxkUHCgDo",
  "key20": "2qCr7FfJxtcqFLK7Q5WtjCnSKdybjoatEmK6Ut39RkmrK8iu4SRmZ7VUH5PcLZaRbidt9rSDZnQPgXbyNPcqTzTt",
  "key21": "42LWjQ2KJWRRJtruvXsXDZxiVHVhF1UdRTpqDwPU3AMABmc1Uqggg9qe4gg5ZvBBSC9EcZQQiubdJL4yLcoPm8r9",
  "key22": "FxBCPwQfbbwzttaSu44Pz1ipMccp4UZokxcr3Qp2M215FFDaMyTzMHkummPhEYo2a2fHGmPqgwSGNGFQPFeigFh",
  "key23": "TRjPueTkosqf4huGLLkhDvok9se839U1KeYjxgKyd6iLCUD98yZR3EHSnefwbFwdLkfDcxAuBquxWG7zCejqQuv",
  "key24": "2wSkUWbh5LFeC7kN369AmvY75HVJ11GHsvPNAWmScEv9hVPQbp61YT6UpSuuKZgQX9ZdY3xQHrcKkTWnJfkYgocs",
  "key25": "64bWj12vxeMh5PNmSbSLkBsf9xdPgV2bPYpN3W9jxFmCNsYQJ9MKSX8Ga1C8StAh1S9FPKCgYebVfa8LrZNxg46g",
  "key26": "2cm9nrWfKvNnB6Ca3JB7QSAPAVmMjjtmGaLYQkpL3h8ER5vsqhK6n2F4iWumtsBJzxmYh7bft5icczTt3yeSZsi6",
  "key27": "5jNQj7WVnKRCEVQrvKXnvqKS6XnBmRsWf8UUccQQ8imQHwRoquXyghpD3UE1QRsaMMi2Tdbc66NWLSGnx35H92zr",
  "key28": "3AtnVC75B2AM3LQWNmgtgoMUWtzMqaVzLFnVG577NbtDy2nW3JZvr9D9Aika1NLy94JzaGxPnxVQTfeVL3ZsRJp3",
  "key29": "3uZfAPf53R8a1j4hvZvEf1FafnPkQq5xc6ALDfmgeTztiY3kRCCuEUr3ky9tiAE4F2j1aZGLp5mzMSEiE3hTVA2U",
  "key30": "5NFYXBp5P8y28WfJMpyT7qHWVGJfVVZpQ2ksMx35gbV79VRjsPEWpbYcq5ZrGhnMBk3vmK4jYpUgo9QoWA9B1P1T",
  "key31": "4tctSvGg6nnZeJQRyv1kJUF78j4DvVYRu6HgbAPiWfkKnf5hjQ4xLNU5DwAi46HU6LjP37FW6sNfm8TCoYRkNiSo",
  "key32": "4eWoyj2gYkVWXST2dmER4DhNBaDvajAKX21hoojeyLyQ6EDcFsEuGR1pkfpgSZ9jJHr9rE7N9Utr5sAR3vYeCWLi",
  "key33": "2y8LDwWX2R8nG6XQx6DXTaaNLStFoPQ5kKVDNxcfa8VMQXtBbGqWnYBfNzXAvUj33D8AhYfEh8HQR4NUhTGn4GhC",
  "key34": "5peyZpAvBQaeVoRWNPWLHUyKLF5pzLdwH8HwUxDQRyXn7m2bYwoZd1h1DTfSis6bSixbyz1ce7u2yWStyQ3yuBha",
  "key35": "4nwt6uo1noASLM4G71zWnLgBvT4fHsQNRhM8gHz9LmRCHc2bXJHcocuZyZSgQAU49AjWz3kVCp62ha2rwt3m5mZY",
  "key36": "5n8MWSsM5sCwbCSD2biiatF8nCtbJCHfhMXtWeMPvQhmza49byESLJAqtuKU1MS6ZaS9Ss49kZev2P3bYttKM6nb",
  "key37": "5UDdUqNB9Z8wfNTDtd2cCm9Ja4ub5kSdDLJmEeTdvRXvP4sebE8Di478NKYbaybrS9VNZZPrp3iB5qnun26vFSvX",
  "key38": "3sxfeox1boFq72ZRvkZktUnuYjZSTmeSg5ALA3uMmu6cgkErM1ddnuopU4qjxgbf7is2kmo2KPDepjkJVS3YwVGn",
  "key39": "63qffcDiqhafuAFeTAJLs2u8TgGWwUhzo8gStEfkYn9ZnuHt6BJBPc9ZAuTXqtdAParje893y2Txx1s1HQVRHf7L"
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
