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
    "37idZhB476ZxeR3wTruA2A9B39ySKp2z156ocv4pNRKdmeFZ4LPt2whwAYJLdDQjVL31yLLo1iBj3g3dyYxxpsCD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nenLYC8vkcxjskduxTEzySzLCvESMSHyYTuAZkWeZNQKVUS8BDbfyheqrBAMA2u26uZWmF9ZkLL2HS8z1pGtx6Y",
  "key1": "4BL9uLMhem9SsHWaN1ostbMGj87wU3ypfUfQCy3n5ahdxPNkzYyvTJSGqZKHks3Q1H4vTkmSEMjjDTJHFLdjuADy",
  "key2": "5DFajUxaDeUvZFSWtTDL5qoaZnLuMUCSeRTqo4pHsC3gJ1NVSqXAT4Ya9XGKz6X12RRtXNXBBxgxEnSsTp9b8exi",
  "key3": "2ZnKtSsviVbQT7Rko2tK5BxY3qsVYPLHKKVJx2dQ82u8Kkcr91bNAcybtYtc5RZc3LWkY4brK8PAQrCcAyrGfxyu",
  "key4": "5VFT7A9Ez4cBFEC6BWigpvNU1j2fc9NMU89v2k4idMwf2mykY1r3cw1kEWSBatHZn5qrwPZJJfLpB4JqvuDarWCp",
  "key5": "2qmUwg8d6t8Ycv2BYz38ioDJhGuWgP55qsCxSJGRSJAUQ5RLvrENmnY5vGbxiipYN485MLxhHum8M5nGipWmBPg9",
  "key6": "sPti1Ts1dN2pkg4zJHwvU2FdNXMg9G11FkvmbeLGLc1N9RwfjxXkDPeXDX3ztVQpXR6KpqVMR2JRdMcfSA8Zzzu",
  "key7": "57ceimMUuG4EEHGPegkyhvmF1TdptZnjVZohgkJh6oGp7aRJPxXC64qQ5R42vsWxmtvMPdnCZ7tWsUGrY6guWUbm",
  "key8": "4Eg3MYED11vjhM8dcZ55Gn6MehZd4i2fAgCXRqDJkf9vssXpXexpyJPaEYh4mrdSicdQBDXhLwebwRvB4j6zgLA6",
  "key9": "4nscMsvuqUFQeNmQxD9ncqeBvrxeLQoWhtZ1QJDZhvi8D1tVU3r2GaY6GkX9RsY3ch6zHfCBxh1KbZMv9xCa8yKH",
  "key10": "516NgdSm3QPxd7pKdNewtrBGa7BYu7nx3fsjKbYSRqVn83GWf2YX6Ggn6nbwXfU78eYWoi5cmqWuDYhmEM8yQ3dx",
  "key11": "2mdFyGs2S4cqVXJKb6hWXPMyg1nHxuCT9C5LTKKv8zeha8prSyRgAghVJWWjD3qdBZkf6FfCU7PasxxswpVgBzLi",
  "key12": "5JgXTsJBm2yxQEZ6h1PA3z5b5aaGpXoZ9DwNekceYteixTV1g6FiEhY3E7bQwbKbTW6dRkG51vxcB7TNRjiq3Gka",
  "key13": "5rK3DWBpnovGQYVhivrBFhnUEWTQPrpDdfva2xECCDsdR1bpCn7WHDWphUuRn3h2hrefexaYtwTcFivR377xL6cQ",
  "key14": "4sR3xhadmU5YXeS3JA8q3A4fVKTmfN8Sux3Eb1uyAbkDpjw2GKsCf8VbqLRnaULNF5xnBcPihmKrymHqC2N9NynR",
  "key15": "3Bo3MekpUCMPUTwTStRkN7mw8j5PdUoJLH8Nq8M1YrgWUtP58DRDoJb17aevoeUpbW5ZpLorBjPavGAVAh9jZiJX",
  "key16": "3XPRGETgCyUBADyZzH42uw7MJuRR17FjcdFvZXu46Y7sVr8LTP7P8gfMFmLF1mYBqKGoDa5N58TXeVPsysYP6jhB",
  "key17": "2rwxMkq1CXsy5SqfSsVMGhDXDhQnLv5J8cuAdRgLP4fE2WJ7AxMNVUNx6ChbMRL4EMBFwDDtAc6bWWsZiuxSxkm5",
  "key18": "2PUA8rqg7TLDFKutBWwXT3dhCFzm1awuhvCUBR9NE2zfMcvy7UBzeLV9fiG6HMteJm1PALy89bzdLzhPNpZySwqm",
  "key19": "3LoMYRDs4isUDJ13Jn6RmVfMbpgVsZdTboRhArYLGgB7f2VkZEESJQD3XSdZteoFdxcMYqF1jixdktKXyomECkYb",
  "key20": "2JirQrq9TCvqWf8PVQ3h2A6KCVXw3atX9uoLy8Bq9eX4nS5eKvLevhgzVxUhJVD5CSdPDhiCgAtbEqso1t1rdh2N",
  "key21": "Q7pmXbB62gk2VTbzPjbKsFGq1xa7Cg2xrZDLZNP1sBQgxtQsezdrbSNNHbmMbWAoZ6yDgzqS4N1L43kEhsFB5Ln",
  "key22": "2hDrT1NHZxJtNUFMXBV4fVKqpaq5DX6hi2vFZN4xdFVwK8f7u9vQkdC74BTRpbTgzLXUBitEa2727LA7kGRVC98N",
  "key23": "QGYihq4cfFBNDAbuVSPyzFfhSMo92dBks4fiPgpsqaCFt7KstKggSDk4jTyg6sVxw5VAT3nynM6Rd8cVwDVmn4v",
  "key24": "5EkP3nr3w2qH4dW8w1fqWzZPc2NzSp3F4cV6LtB4RSpBixGJj97BPEJUZUFLDAGMpqpN8iU9WLAuDhz3dNhSHq9h",
  "key25": "64knyjHbE8pz2k18NtyEHacCeBhMKYtDMMVjYbTH2HtKaaTEsQzFbbnGHHZcWKCyfKNNxKyrF5upN8eSygEs1pDo",
  "key26": "5PncHah87TYhp8AHdYSe9mTghzWQqsznesdUVABh7H8JZcDyyj66SGZB1mqeQ1KVjTdq3XSYLvgxgyMepCQzJbjb",
  "key27": "4NgWc2uScVQ8JM6PhAjs6FSeorSYBPgCWn7zuFrvscqfhmC7K8C54syFAEHa83zg1BbNGFYCeKXamQRKBK3Q4Gzu",
  "key28": "2xuYab9FJGo7xs2jSypn12bLNhQfFqnNNT6RZkuxwvVj2i5zWQCVpdo36CGCpSPDqeSa52TvCj6SxxwNyYcjTPeA",
  "key29": "iNvXzwhPBa2TodPKdpbFRYV2aWnCJ6a6C1rndP3bnJkNMTbNrRiiycmcDsdXVtrQNGMLdqtsfwYJyhSVPC2ss8D",
  "key30": "34AKfemqXJqVgBim5mp8xJPUkLdr9qSMMkHSLFwegaGsyHr3efxcqqsnsbxHyCkFg1uKZLcT17zg7ZSVBopevQxW",
  "key31": "517DJM7YkhT6HcUj27grhqxpXN9LrthxTZJ5aatfhuZcA6CQo2nCKLzxje55jjDCxSRk5WCgMFuzy5Xe8BjXpx4B",
  "key32": "LxPPvBrceqisYtJcwSZBd7MLid14kbxxtonGKDdiN7vM962KifqY5fxB1Dy9NywXqgoKvYEDZb3BbjFuAa9vLPq",
  "key33": "4vecA3Qf6LXveLtQ1uFQPBKSEtJaRhvSQEUM8ARxnCDtfiVpAhoAqxZd6eifrR1RhDzXinT3USiJiDH9UG3aF4DD",
  "key34": "2QdbFnGuCQfSjoxB92hUfFuvr2e2r9yDCbjkHqmboN61rZjxE3iUbQCa3vdCFRs3nkoGn7epw769KVriDR1n6uiX",
  "key35": "3di8fS3RQq38Wa3UVsLMNz61T1uRnp1L3VP3wfbzuAoNFmCJEoJrFdtDRhiiPrm5GCihLPY3aCUSTeZZFx2GUxF7",
  "key36": "46qRqF8QeK3ZuHTKuesDopMvchAhXiC39WZ3Rws4nckjE6LUHgsak2d5uRaTBjjw2YwRYG1aHpkojuQeJgYnN8aQ",
  "key37": "4CCx8b6qxJaVxvbQoQGR6bRigboEfqmspbxSqG2Cmx8H7za2qyCAtzmPMMaLEpvbaBfuahojG1h3z4imPwTjnWcV",
  "key38": "513hVRLN66B6DNhVRzMh4f2iNfrAyMaq183V16u1KwbmLYvTuDBo4cZTBzwAj5nsrdRko6cwwqBRNrwrwiFPMBRP",
  "key39": "2MyKH5ZS8RVsRKaPMMkaZ9NHszdJzoZS7ppkc3fC3jYpXi9fTLXQRHTfuuNBrBwip5iYTiRL1SLeFjWkpGrJBHTe",
  "key40": "31Uf37hmwig573d8oSuqqcTtnLcRdFQQSaLWMLd7ujfXrTisb328xz1Ge1wQxA9vUswErNZdaFiQnAjPHrhRMqhk",
  "key41": "5PnJSu1maHcXdhcQjHmwi95kTEmZeodra2eHpLy6G3DPMhzQvfSW8ycqrzuUzyEagVpJLGDC3XPJdYA11NEwuEKc",
  "key42": "46C2T4rw63TdFagpRDovUUMwHfMn713jNifD6YY9mKKFXAXtnScyXq5FtxDpTSuPsAct6mh5q8N3RWuZS3dNCxpB",
  "key43": "59C6EN9q2Sm4LBSSRAYEZZiH3hhTJ6WUKQvdCxXcNc7P71mooTvKfHKNBW6mbPmQf7gfBKCJBBgvLcffyuadBuGH",
  "key44": "459E8KyHNMc323WvPwcG4pbqNhRNuF7XAeitCxjwrG23Vu8ki4SrpJ7fpg7VwcnHCKDBY1dG7HX2iE3ZGUTykLzJ",
  "key45": "3GHJoh2foqP7M7zet6kr8Rjmuri2rKh5yDfDdg8mp9m9cS9yXRAWKDL9CNUafKKKSC6zMc15EK5GGEKpQWhfWZPT"
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
