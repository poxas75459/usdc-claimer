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
    "3Qq41N3GeHQZ7ob6oS7ew9jGB4VPxD2fYNEPhWCTLaemMP2Z98pKC1HftvYR6cr8SzaJzNEKuD8rPqqPhpsd3iAi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WQVZrYCqRW2ivZm16jJ43rvrHMMUMS4B61EvxgUCR9jtEnjE7b4uvLi1LKarZuGZXLxaP8KquuY6njP5kpU2uvx",
  "key1": "wCMdjzRFK7yn2L8T5ymM35G6nJBd7ZpB8njkwXdSnETUHGGhCAkPfHGywosygPQ3K5DrMwT796fRTTmBLR1iroK",
  "key2": "KwsBGBHFVoKgCPxUQArdNyKzDwJjrYUBK5oBhGo84NK4roHi5EPsTXorUjdKQE84hWjopvDR5E8jkdFVE9bxuM1",
  "key3": "3cexo5xX1rLrT5GDPeAXe62JJEMjeAZr8SiJBGrR7Kr6mv2FMDS6xZGXH91bnxTRuwiuXPmJz67qqxc8jWyiqoQf",
  "key4": "3AVZN4BSBs2ZfAtJwzcVuGP8YgaMsrwoNe9CwddGu3P3sXWhfcpAETkXR3fXbQektBCb6c9CxAD9WESmKqfYbCrk",
  "key5": "4JuX46Nos1Fd6FqjLjKibQCwMpkZrXP45P8NrPRTfF7mnEkUq9bViv2sNktvrhPzuTYUQMSdtTyopdBvEDeQEEVD",
  "key6": "tLi1j5XzqtWWqgMZfWxmsVPZsYufXUPiq32TFFBLa65rxbAdpUGQtaw5vW6uYPrvquMaZTSem1xLzpLAuxbUbhh",
  "key7": "4UyLSHjqfnWqdFfNeWqGp2MCGujbGY8zcGu6DunoZQdfHyAsrwEWAnXCnvpZrsv3qGmDL8FCsF1oxCQHD4MaF1Ya",
  "key8": "4guhfjnoNSz2W4uo4G5iGVKTMw4ZZDFByfeGqh5UXvWwauvLX9QePZsiQ3CDVAExjNFJcoEHa6hgPRXaTJh2eG8X",
  "key9": "YbiBjPrxc92c2faJRwwmEQKVjdGDkafPzGrR3kMTjARyuiVfUhkH6ZEohcYn4WApt937HAYTyRviY6YKmGJGoHB",
  "key10": "2aXvTmYwL8MwnAgrPiTTEjWWXWRpo6r8atdMxxsUy5MttLGPsoV2vyiQLDiLTR2qaPG8g5Dm549sPQVtcjSEte5W",
  "key11": "5z7B35zP6cfj7WgCWFHE1aoMRWq6dZMXH3nd7xqcLQQXSfXfdPrK5H4hq6K8bXQK7ygR1TquDk8ijsyeP2eJ9eQf",
  "key12": "smW9D6aK5nrDq4XTn2zzXv2m5Lccm1H48rb2d4moAVoDYKFcCKWwyzJCTxzFXweDGEnAAJAXo4Y3oyypg6xexCn",
  "key13": "67DgsKYkosJX8Qbp8jQERuvJEDsMzFRjRG2Gp4GNQQtQAAzCQNdnQmJpzAcFmkNt96mynu6jU32JjS8qMwJv9yMh",
  "key14": "5XUuALLJyFnDa1pVkH51phpZe1Nt6GjjaeV7oQMWVBAgt8eetH4Q2sYu19KNMXh4YHWRy1dnLXRW5rT9r82Uh85E",
  "key15": "2aRuHNVyeyQqvQHxrYbhySPJnvnbGsFedebX5QMgrsmSTbZZZYujkH1AcZRP61HusqcVCAzmcGA6R5GTM33C3QAz",
  "key16": "37ctzjkr83SmA5xvwhXFqMScvWGU2punT6q7gVWbmva3gxPL4UK4ow5DR6BykWsJ9HvZGY3SmsUxLuSePbKHqf7F",
  "key17": "5Bz89CoG7e1UdcwAFzJMuWeg9RnN8eaRygfiANheEasD8pLgy3outp2cdEGYxwfH2AArcQzN1Q9tLBdYifspS7pH",
  "key18": "4c1bAMwmd6wsRugUUu7nLC92j5ttAzNwohFvEMUjaJqdAb7ZgyipjwPwQLT9WRGSgDABRD1MmTsYJu2jThcUp6TS",
  "key19": "4riLpfLRkMtuJ9UVCmpu61XYTiqBbTzFSEdFX1d1RfsXtoVaszKYLBqqpQxQ1noAqRx833Q1aNUq6GSnn9yfDCfu",
  "key20": "4FwiHfuCjZrTq3tedU2euwVuPMK8VHVqKg82DkJcgKw813ptfEVAPkZz5vkf9u42pESWpRdjghGT8B8SxjuAu4M8",
  "key21": "2RVarYu9j5br5QjdzR2AZvMTGUoKoDSz14SBmaGG7a1xYNKr2rD2zZuyB6uvNDLUA4nU1PaNyt1ESCuchoAbjYYX",
  "key22": "34np9H4Jzia3aXfHmwnhciZDkjAcushqnjZw6Cc5HN9rPqEuB1us2wsCM1nnmCHixrx3HC2gZEhCo4ypDaEiqP2F",
  "key23": "4KPQir8FbMeUrufBUdmvb44fkZbQz9FHYrbLiEDxHpjkMyG4HVhXWiNX9uPmCjdTakC3S2jDrQJ36HCGZYcc8jAC",
  "key24": "uL4y1gb5tfHiMccY4gUjVZRbKxkJYe9wQE7cWc1FaTDVSY7DNpKhEGZ4iTDoVTdnhTdc1hMP9yLMcE6A64cdY47",
  "key25": "2M95oRE4ur82fgfXHAV3BXePUeVLnhwfKkecr8thr25U8GPAjBY2qBBNtGFndrRoC968ic1rQxZAATN6VZ2rnTDq",
  "key26": "3B5QkZZkgKeCFqufVyhEMDZbQXKZZHv6Hhcnuvp1QErz49jqJHNNNJiGA3uu5LoQnHkq4KMzVcDcVEZ4G14BorNC",
  "key27": "4LNLzpfQU25qGPzXgv9zbbRCpj25QxAoo2gg7ELHc51QQDh5y9dzfTL52Mfkpvrzn8rcAfBMTAtaiZxLyB7dqfHr",
  "key28": "uG2jyE3amEUknYjzMsasJXY5Mz6aUt5gqAaLRKm6qfaR2ZyvWw2h7CghBTUGGbUapM9EXrkbNjMTCquT5RmiXbU",
  "key29": "3Fr4RmpqZkW89jzXKN41nAY1N159XQjbW9eJpfzNHSTeoGYyB8CrzStyxvHpsUG3TLHTWCSesh8gWAXVRKz9pqA3",
  "key30": "3rjrpfDyh7zaUPunofePTMHhnD2px1jVjyK7afxQtQ7wJGyRXYqLMGQ2tUfzDpM4gj9yp9LtcAV6zPY7aNPLqaut",
  "key31": "5nEvj8jrRPHsPTt2HYVJrNJgAZSMqRJMLJDjtdz1Pa2b9C28U2D5qiya1QqEnqUGRpsgNMhUy3Gn6dWCXG5HT11Q",
  "key32": "3sMmaSGekpMNi61NPXsijc24mKXbXZtdVFjzxF4Cmzp38W6AvVsuwE49HGA2ncccpvB3YoFu3R99WA91LErJb8Jm",
  "key33": "3wMnmoXbJeQyk8uQnUTT3gSmaBpcUqVsF2iC4zSQStUxqWBpSrEJuVtzCmVH8GvbeyZNKvkRDnJPgUTGTqmuP9cX",
  "key34": "3332iRpbPzSTczNp4TaYPFf7umNhPnsuJ6DqhmQtKd5EADgog3HZEDGovjApTaTSNnjEdANckx8hKYVV4kMzX2nj",
  "key35": "4XR6Vfb9hk6fbyTCuvK8xz7qsZZYVgNKmUJU2kGsDsADfhefduSQNBbp1V3TCSiCt1Bm9QUEqn98rkbPMuTesfDB",
  "key36": "2HPFvAZeti3W8rJr6qNSh1CiXCfimLaXAscYbyjb3cqBDHqy8Cw6aipVTw2ND9SbexjyuAboUbgUJZ7YYA84UUh6",
  "key37": "5S5xt8EHBtg9NHhEvFjyBNVuzD3zEi85dLMxdRtfxyvJXL9mYM36VYmjCjNTYrZ2e4soTdPJArz83yRRi1M8WqxS",
  "key38": "fUE6NwBSoq6VD363maDF5ZMHBmFhF5Fo8rBP5t2QTFL9QEDUaTkbgeHYy1qnLKpFeZahFY3XGcLhdbQfx9G5dXx",
  "key39": "4cYDQy6tUxZY7WJJU27mUBkwiuZzRtgtdeSuHcMrX2mtJzE9crasdujbJLooKe5duHhoeKWzMEEgYGMpb8K1WSLV",
  "key40": "oR5xnHnvo5PuP4AzkbRptXcnstZfsgZFzJBtAwnQ1a45f4NuQ543JGhLbtaQBBboc9JgddUPkGJwo9cMcndfiUE",
  "key41": "4wVpzFF72VpGsjuTiTXqDzqX6Q3FEWf2Zz98pFD4C6HjBKnzfxTQvLNP7s2Lph5tgz91b3ivccTHQ1H47oy9pWYY",
  "key42": "W62sDbBqz2ft65hNoZ3upeBkAEwPV9BmsvXEHEgvFiZ6kTi9udjixehi2Har16AEatYUuQjG1xMVnKcxC9SQMYN"
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
