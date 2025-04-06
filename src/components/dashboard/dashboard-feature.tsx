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
    "4axazjcaREGzaE5QCKQARYt9fCrNBcWDVQjohy8Zdhm75tve1uKuhELSHsMyF9U3rHKjXPzXPkf91UHYnaWCc6cj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FuBBESvmXnz3uqgrQDMn2ktRnt5tDEkL2qSegF3L14n4ypVab3C2Yq4MAtokFj1suHmUtNaYBxvxH21Rv763wr9",
  "key1": "5MN2vatduLgUPEim2QS9cu4RVZTtnuF6xHHGg9RFg1TGob2SWgBbhtkz9YEkNPkR5djjcqrP5dcLU5DijBTDWCWZ",
  "key2": "2vGCx8azWnbFVHvGWgbrB8JryJ3WMzf9VttRzMu1iJNSWgWdkxEobj7PftGR37xXGrY9LQ7zN8J3H6GRrrx5y7yT",
  "key3": "AAFkd2TWf8Zcq5CafYVZj6WapdNH4ayyotPUFaZ6GJ2MCUt6qsaCYpLvJRS8eetmnHH7n9jstXifj9A9BfaPLDU",
  "key4": "fuHswLQqDqqSATioCAQX5YnrK5oAGfFGtMHptgCQBZrDzVwrSHzgekRECfLrWyPBfimKNYvWjYxvSB9hng6mwFR",
  "key5": "2AxL9H9GR2KB9C7RF6o7vD4TNAD6VGqvRVjPZUoKz2RwkYDAUz4GPpU2swQbeVhB8auLYtjZXawmDFv4fnd8BPcD",
  "key6": "4nUf8remz52pCke5T1PZ8S1u43Y1n21j6Y28PEdKz5fNigCm9bLegaUW6kR4xeWiTQqYyAoYgDnQcJpNVrkVBrYS",
  "key7": "66AyeorxSkjDs21XvvWN6Fv2fST6DrtL7LYXpXQA9a2E7JHuKa5xQ28yWpJh1WB6WLcuDu36sm6Dfb33WiTxTPwV",
  "key8": "5te2xHNtPfm2NzD6iAq3Ai8FE1vExrM8unaeKtfjnkrWGvWDq75AzHiFRgBqmo8ujHUK1bsgtmHawL1KxPZZUDW4",
  "key9": "3zvWwzFbxwbMzJEaaA8Yt3uPFBtytHcRzifEGMYEcgY7SyDMpQuoZMpPn4RPKHhRx17WLs8aLcDsDHAvgzpAW5RS",
  "key10": "59GqCJkHcoUPMrsCnHKtYwrREm7YZ697oEdKFskZvXYPghGcEWYhHWGEn4uheuEVNdcbKJsmphN1EH2mtW1ETsCL",
  "key11": "UCzbV5E7K8LGsRoJPiMuhrJVjiPFitZHhpHcRQNsgD4fpD6pkK8ER4skiALdC6KKmBw9xRDW1wjeNVdkM6HhJKr",
  "key12": "3Qk7ZhWLxTJiaxetKKHp9eZCwEFnLoaQ1naMgSoqd69dttBWwkidKqY5nSBksGj22NoY183ZMzZzc3Xp8PD1GAMr",
  "key13": "2Mtsrm6BM9L2A62CPQui5bqtttqNdY9WvAvTMuHpr5ms6BdUBTVRfKrSrzMzFFuq5rXSA2Eikgf3LqQGiWspPHjR",
  "key14": "54Zh89Lhg4cDmYCYedLUPBXnadM7j4VhD2nraLikenxhCSZVQr7K2oRyHLXn8N43M5z5HrS5ej1bXdvpEWGPJoNG",
  "key15": "3ud26arFBHd2YazwWJL5EvSiV36CVadR2rCzvxkW7vfXXe5fXu5r4khHn1RCsZrcTsrhSudakpYmcQ5HiNFA52Ui",
  "key16": "58LHoCoDedQRCaKHDCVWWf1MLRisQvdoSb5XFGDr3449XAbVqtahQurWGr8ENrBztMGGBkGsSS16eNzQctDLuuzU",
  "key17": "4t1ExKnXHRKA12bhLtK4ZdkvNFeY3CFHqV35dhkUdpJFFeakx4obbprV3mX5DDUVGiQzGSLL5ii7KxsMraqCasRf",
  "key18": "2AzTbgVSw2RXcc6NuhUfJi6QQTLc2RftSCXFKMNQJNqowy1UMjECqoKospbaMyau2ABdAKhXXxeA7mnFu4pgd8YU",
  "key19": "2MsCoC2yZvcsyR27AXk1XfgTrri832xThHx8yJNW6uZM4eNR58vB5PRmZp4kwvgTaUnbzv3d4Mp5rQHpKZAD9GbB",
  "key20": "5UYKhkF72xw8Tu3gMfFvmrfiqdrAJRLLaAPx8EPTqXMAvEiefTiP4KRFMq5cbfsJn61PLr1AtxYQ2XknxVZzCNMG",
  "key21": "3rNTvR5RDYuzr45v8LDYwoUbAKMwUgTJjt7yLhjbRcbLDXzCkqAbYEb8s74qptBJByBftdHUg3zGTQh3P4vpBtA4",
  "key22": "27sd728m3DMr4ckJv6QyQ6fYpfEJVwpGfM2rRSKrAboVZkfK5NKtqPnEmH6ARPRWndiMfxt4gcSUt2r5dWNaak5Z",
  "key23": "yCmYBumsxR7ry6cvJUoLfEw8owdCpxUbxtuQah65JD2ZVCQsSotYiXrRSpmmSiYK6faSBvmaaM8nFdRnxKkWaWz",
  "key24": "4MYCRSpUKMFL9bfAPrbcQBfkgjpogz8uJJdjaYhwRh95JcrWrdNrN5XwBtBAGfEppJfyZqVnEcLT5AGVuZzEf1HV",
  "key25": "5MUeYVf33mMP864ArLTFT8q1ENnrapwneoEdfMaSWsEo5n6hgaWx1d3dsPgYLA33trzuLNTZkMjfvRPpmeTq3R5j",
  "key26": "2ddgu6Lh5WnNWRXN2ordR9WgYDGbtEtwv6q7UkkMYHYMpCRGeuETrFA1DT6KdGXEfTcfZqzgvhHDinKMogdNjtVy",
  "key27": "JLZvk7FzVhefQL5nDsTPvarWm9fkotvzdCwD2bqknkfym2kCQoLHQ4WHTncsPzLKJDRiMoL3hDZNBWbVi4y9Um2",
  "key28": "2eFv6zfryJVhJdkSYoeJqy2HmkPMmE4eMgbWE8Nepkg8ThZ2B3AvMNRPZktbSx8apbUjaGW4ruEBDHYsPM1sFjkA",
  "key29": "WDpb95qs8jw7dSW1CyJwJA7dpdtYUzDoowXgQoPBGtU1FCz7JvXLRkF5KmY6TKjPHQLRrhtBytoXdzUtHvWudmT",
  "key30": "5WtjxLxVWojBziRiwnJqVmNDFFqmycQK8gFGsbBomdK4A5MVsmsaTVV4H7HNkK1keKgUDutpyizshFxCQMm69hMR"
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
