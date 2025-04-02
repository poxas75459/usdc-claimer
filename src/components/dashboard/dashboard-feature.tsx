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
    "4aHDAhZN8a5bhxVb4mk4WsPc7iizb15nC87QfhpPHzDx7pgZNM4xSR9JJ8AVJVspTDiniAggTY7NT7UkXwKAHSze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jhFRMf4WYgnaB9Hg6VqrRm9jYcFNjph1rJux3TnguWd23eMswBvsifRJthW1woz4UkwyaCdaqhB1QNe7YAE15xQ",
  "key1": "6ssujS3Wjm4ESiciGyfY6YcmRwEoHf1akr7LqEqnkxUSGwLsK4WkBZr6zfhxidk7GSQJJorcJxw1eeNckpV9KpN",
  "key2": "5M7mJ47199NjaM4KyQcwrDDvEWtsDRJPKK8uh8dorG6a7h5vRNRnDKQ97Gk7YLDPmQq3BaAB3UWysnf3qGwY5aps",
  "key3": "5hxmKoWZcfMBxritdWp3Zm3mKiDTgHdQ1VhPG2L6x54kc7AskaC8Knti8FUfkDV8yLBqX3Rs9oGdZF1Tv9kBRgNc",
  "key4": "Fs8QgJwEjHfGwSzDnSAUHEwBUj8PS2cuHFDEx4vMngUPB1xVN9mNETLLQJK3Bq9J8xpzyaTPgyWp25Ddtyqj5Ae",
  "key5": "DuXXzJUA4ZJFf1R3xiV2mr4kFbyUgKFikCu6wAT6GGGvmfdCL7smwKksXsutJ2ZcSpwhFyivKcbyTWKMukpKGeH",
  "key6": "4j9B3Zku6vW5WBjoYJAdaMbKX6P8XTqCrZJhrJJ45iUy4eY6SdVCBM33CYCbYnVEbnRvN4hvocJdez9AmTctfPE3",
  "key7": "uBfnZheLuhBZWMK4fsBivmuWrVo66Re2xn1LPf1gqwtYjX8TSUgCDiMqhoHY1rgW1HntMHSLcVad75PDNt1Frkb",
  "key8": "2eJnt2Gmqjq1wLFxJcy7dN1qRsdurTzk6ebXdAPrhx33ekZF9VKZ37AFW74cCYpHBEckAup4QfFTkkxXyasraPNX",
  "key9": "4f4ZfxmroJoy9fdk2HrnMjQF2ZhSsjugj4akfCyXoZ7u1kbjSE6ubh78ogKcx7qvcd9GwCcDjsj2LHWVEN7rETHE",
  "key10": "4THdNb3xA3Mo78LBiTDXPKK1JBDaJmJWv1KNDX33VczCG21qMNeUgA84c2tHDNnznd4PdChZkmchpYy9GLUdup7b",
  "key11": "4W3STXn3hroY9arkUZjV3DpavqSEph2TLcMMomRinZy3VUBV7GN21HRQETC6aUGs3NfMPzP3f27Rq5cefWPK38cm",
  "key12": "5r8pphiKDfJknt2z3y4SphqSGWEdUAVvuGCG7wPsxxo3jFNyypcQ9FpQcfkEtNqLpUFZ3NVThwDC2LgqztxWUs85",
  "key13": "5rd7vZGrUvgq6vMdRo8mhm6UesUP3vBWEhzKfRwhUDFanBozvqJRSt6hpYUh9CV3g99uPeP5prRajrkhtt4G9rPG",
  "key14": "VUibvWHY4fVBxfzKNmrZAwUmijfCqaR6RNv1Hy5TXX8M1U7aUps5VYEPpDeoDF5SiiH6LKzC3gLLcAyWBaZXbcX",
  "key15": "mpSm5F9PyrFnQvVQjqpRpdrtNfjrxk4g9DYjmHYXUZRTuDHo4RCWSNCbfFPUjmjGeYzTV1XQQXeNT1pXyut57LG",
  "key16": "5BUVKTt2uxepCjvQg2H4gyLHKMjwB6smoj7x6XKN1Lzn1KFWk3ms5SWnpt4hmEzbhsNXV2squobFmNmAzRykAH1a",
  "key17": "5iKbMgcdMLuenKKxP14W2chffP56kZU7D2G39VFUYuf9XdsG5BSDs3DWNhpC6uncNGJnzCwCmQukB24oyNsnNg1b",
  "key18": "EmUwF8YGQaQzXw8ETLnrykmxC5g3BjnKiaDBcyaL1hdQh4e4Vcmp5SUmJYNQJ1NoYbSrEdmpxvqtDkm4E137dif",
  "key19": "3Z464w2WTqv3XmJNSNdpTLW52jEZZQJUxN5ekD34pVR5aRkPPp38GrMpfqybStrNnVQbZ7RKYxMs7azq4bUWmfUi",
  "key20": "2heeyUW9Sok1jJdk5NZd7KeuZrz1pszR9DGBHExs93H6NudZr2qhkWJhAE8zSk5X6DrKWFFcNEba7yeAwhw2Mog6",
  "key21": "4vLXhxTnphj6m69fUoGMzuhzoYPWvnoSdEHrxZiSb42ohRezBMvviyTrDvN2Dux65FvX5Rd5nMEQaW8pZ9E5UDTi",
  "key22": "5KWo8kzPs4uDWgpkZ4dGi3YtP14QbhwrEkoBwkqbxM1vAqBcPvhCH4aS8nxyrLkHeTU6omeRMNrJWqfGwNssZf5M",
  "key23": "ZWoqKRUnX2mrdbBfuhygAypU1q9c99VRL4xgShWPTKTYfWaFgMQKDXdWLxr6y7FqZDvZmFtxnbQ4N3N2MUMa88w",
  "key24": "4yXhTuLkBbD1bxRFdZBqQoU63HutYyYGjGZ1EVgZGQdMYQ6SiFtdyKXttjee9v2NTz5YnmBU35hNR4GJxRLA3vgU",
  "key25": "2ZbqQxpree5mtFVfi55SQ3Xxwhgpxvmi6G6MBgjQGfMMTm9JqW9fsK8KVb5HWycU8qkoE2RgkLVLKXgNBFzNCJ7S",
  "key26": "3kicDrZaoaidK6vcumk25ivE2JPxAgqkd3ZEmJK38JL7PT6VpkPXMKy4JToaVAWvxSCPctpmczmgyVKQY99HdHnX",
  "key27": "25ap32GYZGW8PZm5XDFnTULDazx1WfqiLx7GUfMaJKa6Cb11uytyGXuRMcKFDmrfmoWy5fHyD3t5XENjEr49TFRi",
  "key28": "3jzs39XJttyWD7E3z7U9otuGukrx7WRKJJHmco4aHbxW4HNzXZyBJm42yxY8CHq2rS6bPFUPuRUAWXYa14cxC6JR",
  "key29": "4YczYcVUemuvkCb2bq3T2bh8YqLvv45MFrJSVrBsC39fHtJ1shbFAsRP2dHrxryot5fHdp5yqfsV83p41CLYFHyu",
  "key30": "2QBye6MMxsX7bTCC8fRWxLDfbgRFGueTbbW28FAcaPHnp58BSvzqgx2Xbt42xjRH5eZnmeEApGp4eJFRT3aB9RCt",
  "key31": "9SwBfkqHdmGTqoBxEkzp9xJ43PC1DizzgM75RdG86JT6fL1ujMNtFouo2ZQcYmEE5CsSPVLLxanM88Ju9CYdmQ5",
  "key32": "3fFGpXY5zYv8RQdTDu65kCgxyQ7mqJXrVNUywArUXhJ6FWoaNPZRyF8HFWneXG18TSgVSR8bFEUTDTPS7bRC2oqx",
  "key33": "5DNaS2QSg8CxFrx2XmbuK5Ab8fvd7oHzEvJHjiowYUZhzXwQro8FfZLF2QXWyxEpSrhW4tTQJm87Q4k7eTFMi8hm",
  "key34": "2CZufXxmyBBgmCB4g7DwrwaLDV4SJhGH2vYfvdkRNqqkLnwB8FfjFVJuWu913Uk2atevsedHEbXEtY9QcDz6c8PH",
  "key35": "NwbwCX8PQwUem33nsTC4ZE6iyMQ5VndNCH139gTCRwDuv5Rv8qUfaFfvqLzehQwiMiNEhGxSN7akVxWxNiY72pn",
  "key36": "3pPnenNrPCf8B7WKcgLLEE8UhPTZFiFQP8ZZBHkHggvaq8XWLjNgStyrQpagmLvMCJXWr5qz6BRuQtUG1GbLYzny",
  "key37": "NJ1VN6MubaQoZpBdfnghWQoncK7oG9o6K9GvSEH6fovpRbBgahLwgSzcUePtt7TidjQKj4dXLmBn9tdgUfx5Tiq",
  "key38": "2gPowivo42MG9bNCCdrmHZEWf9EhWA4xXsfhuhAg4icUq37bav7jADJMxWJG4ccp8LcjWnz7hPBhf1Sb1mUoU7uC"
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
