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
    "3KynwxKXzJoPxStixGbjDP5SJ6tcvFooSdK5VsZjHsVPu9ZU7LNgU1otQ8wcusPGNpNGwfVhFqqTf1PGHuq9AJRa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34VXi74cZzKyYjqCfGvrDGgQ4pvgeyxC8t49JNTEQtUZLNojQZTcTi2DyE1HyvtP15UX4KiLrgZY5EKnsD7A3HLy",
  "key1": "66tiJfW19raYL19YpGin2BQ4X2WuohyWzoqBhA8onXYscAH2rZHJyZoyoqPvnZkfmD9wySSZZwKVoTyftPCh4pMu",
  "key2": "2JHcA75FfAU1rn592Pwc6cFA98EvrPsw7XK5UCHLQosKHKP6du8D11BQSPm4A3tQC4Vm2DaGFvS6GFLpmvfRuyU",
  "key3": "42PUUo3QRABMvGsEZ9ZzQ8NmS32RyW5a9iaXLrd2h2ppKyLK49MTG5xWdRoSdyNYAHKSHaWP3DmissSawZZdxBGC",
  "key4": "4pprDCpYXbKyQedFBoaXNfXuQG4rvLEaG8NdLmPnxuzCCvapHN4RwknLHLfhMNK6jh7T5xqR13729GLJvc9vWCHx",
  "key5": "WMBidbrxmsNk8x7BkWVfoSKvPFNZPv6houfSADfEX3KxsU9M3EnZwudWSCMk4V4V5MbpgAsDgvrh4Nnm9AYgTFg",
  "key6": "4yafJ3f3edgDxSQYDfQj1MGzH8MNEi4gV7Agx8nPFpqbfSiTfZj98NWH1BmPn7mFBy78ewbFD3JWfDj36Go7iUZ",
  "key7": "4Gwb9XbEiMrpz9qXTAj1FyPgTYd5uFM5hKYrJJw7XLTonu55h2PtCg4X6rRKhVndyMnCzhyLiRFtAo7kSz8SF8Y7",
  "key8": "3AViwKb88CnBTtT1jc5RhLAPWbYMTjK9E6sW7d9Kmg46b43Qx4QRzXAhWEeDegP7wwnD2TUMzDHBCwn2sU3uFwoC",
  "key9": "2GpP33KogbgkWAvhwcAR2hMiN2wnN6CDq8Vfdjp8S9xG2e1U3yg7dc5E5YG6e77HQrVdiHJfdWrTo7SSs3cxkVnR",
  "key10": "HW1tDsfSac6Qi6HQzh3spC3rbAhDFnHAFaN61srtY2FsmQ7GXhaEP9VYkzwt9YXhNZmvrh4ZwTBaxcevvRE61oP",
  "key11": "4MhgjUMeEp81SpuYf1PRfhcFovNewzEoVCfnsA3Ykk4g5XPo8yji6edqKfNFAV6cTNksiAa2n7g4xikmpy1oWthU",
  "key12": "3aES7S86tTqze6R73zDd5m5j7Q4n8XsMosEKXc7tyDSymrgERNL52L3f61uESVnEnUFo6SwKBxRxFE6Mv75A6NhF",
  "key13": "5K4oAmJDwQCHYWCU3gEc4ugDd7K5ymavpK6GBjUxV5YwYRGvVTSCeakFPJ8g9UzyPeNVGCEvpewjTvAm6aVFPyDi",
  "key14": "5uPS5HFYcBeqEge68zrESDHHAztaHaxiN7pB5q9Gi1hKHsHzLr1WLkTPyUPL7tHqZmAEuWw92b7Y4upSgtqcH2VX",
  "key15": "2uQADMt4rZKzARPqeBqmdCWGd6zquohFBYHw8gfWJLHwtRktARwwgeRXp4YR6ef2SJA1cXnw9JiRMNXjoZhvwjsw",
  "key16": "LLuqSBxvgxzkxBAZLub6zS5CDz6YomiTmmakqcTxs2oJRvPNL95ZvwyY52sjS76vEaRYcNWNkxKGaCUmZ8PndK8",
  "key17": "3VWWDAsHFJS1NXFi2ehPMDUMq3hvnrfkLqiAVBBE9hXF2T8vxTmM57zJSyWNEqvWME6JE5op6iD95CPa89AtTzPp",
  "key18": "P67EzURiMjE53Kf8nTwLqpfXQtnXQB11s4o14NgJLJVHytyuNH3Z5PtnRnxEFcpqN28YaCJXAeuJbAv2Q9juVm7",
  "key19": "4pwnrLaQR6wcjvtXy3o1k38AwmWxGespz655U168N4cSKk9aa9XHAhR2dEvVu4qRkrRrnrJUNndujutryFfZbTAQ",
  "key20": "Kdh2kfG6gwZH1SEDNZEbH1qmtYLFexuXUJsxJxPpWNfwd2Cc6s6XWbFFfkJfbK5pTmiRbupUuwcc6sNbFEdgfyV",
  "key21": "5JAhWF51Zajcw3v6cwJ9HUQms2jw1pRfVYX7EAZeXKePSCEf5iyuuvqkHNz7FANjyhQTsnYb2YdGUH2bNVs1wVQC",
  "key22": "55BipSduWf9Q8PzauGdVRBEVc8LebbVLQZhUc6i9rcUrj9GuTZAwUkA42qghVC6qDZCsu3B3pDuPaHxBpCUUmwDf",
  "key23": "21mdUxKC2w15go1UoZDKPfsRkf1wRB1bW6sdg1oT5LuFVoBgScBq6MprRfE66XKKnrmhShS57nEYfSayoRFfsU51",
  "key24": "2coyrfJhepuz8GKPMNagxfm8oGwxD4bR2yRumBMDGTr6NK7og67ciLtThMgZtwzC648E3CfKAvN7YHAtsNqtLYKp",
  "key25": "3LHTPKCAP9YrHpDKhKvBTwvyw95zs8ePNZdgfoDGnbQogz1caV4rKfNaDFetiSE9d8iTNPucodTXo2Uu5233E6gu",
  "key26": "27KLRYNVvX65syzwfmn5WmajU7rEJR9zaRr6qGuikxwdPe7W6mynbvWkA8KbUHnwC91N6VbzUibvHk8c8G5NBNBZ",
  "key27": "2nNobiUw28ZZusc4B5HNo8W9tE7AGQiDxppduZ5rNGUytX8zAE3DUZY1JFTHgUc66ZitG4pR5suUYLfjb8FQh1tc",
  "key28": "5aHK5PDmjtWJmMHqpQxwwgBLbkrVctF7b4UkGaRe3xznnTcrdr5f8VfhKkrzkJqNRj4mGCFmotmq3QKTrMkYmuUg",
  "key29": "42ktLdiFsMjBUf5ekr5wmXbfBAd98QRwxKDrw1M2CzMRFtgLJYbi4mmdgqyHGF3QB7bz9xP35bptZ2GFVhMk4Vdd",
  "key30": "5Li57dRTzp7yQWkeeibMEdugEDHwvShFzqC5ZicGuvRP3xhvFvAoctMK8yC1dLBSshcSS8KXDwiu8jbAfEGTFr8r",
  "key31": "2Sj7t4xvXFeghQFFebHy4atHTFjBdW6FZ8Reyhmmsan4wxoZtwVAccxG9yB6FkyxkXJGoJmfJVMKewgWyHtCEpQ8"
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
