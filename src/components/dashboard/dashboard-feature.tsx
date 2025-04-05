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
    "5HPTeqECnyuXRtLYg1DbHidv9B4QnN7aNiQj7BZUNMVCsTtoa62xFeQaCsXVGJ75gxvoQXjDKN9425JTVddcywtu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UEriY2xWJ3foxTfjA4kTqfghYu5XBWPVVq4TjWTMUL7fZFXtD5oC6pti8tRSRKFppTw7jJADBNwswzGDQa3nAJf",
  "key1": "5ydoQ2Huud3ZLjVgQ2vJ8B4RquKhGmgRpXcjyko5wt5jwD6jWemSfrXnp66zz5rjia35XtXdSDkvh4KzLJtnHX2c",
  "key2": "3bmv8kTUrYHNfoPeQTcYSiqGYRwgybj3hYduqrtj8hDGmphzMUoE2KF1KmG856L3G7DkqQMBs17LX649pGcHfPii",
  "key3": "2VNSZjEBqTG5NhLiv3BwmcPGtyufLMfSC4gGEQpu1beTSpc1ePYT5JWfcz7kENubK3exDfDfHcto9qwb58E5v7kJ",
  "key4": "3YEgs2HMzijcEUhcTLJf5NGUkEDGH7ww4Wa9V2WZ6mi8NP5F93cSgstCiqYFrsGysrTafmaiCjxrcpKEosfasy2u",
  "key5": "31ScsXz3WvyKnsccCCR1JUjpeSdzAWowcHS6vX2QF8Q8nXE8JrqaeYtJb9v3h9M9yC3SEaqWeVSLosYiMnf9VrhB",
  "key6": "2V8ydedEbpPGfM7ck7gNXKFt5NF5QgF9MEHN86rduEXnYxQyeKf6SDQCX856NPiRb4PFFqH3FFoHhY9mUsCaA55j",
  "key7": "5DtUuB1fSCCmniP4UmXMhgEFduT9x1ZDpM9Mu9TanshcxTSPQFJNYv9J8zKzwrxvJA52xH1rW8gbj9ewND2MsRTT",
  "key8": "2opsk1TLHKjYaHC6X5sLk1MLrzoGbJSENnM3KnxAvJM4vbBw2Zk6afjC2uU1eypK78YfU6fTL5wQc34rqbMsftFG",
  "key9": "4UyjhrFvLL8KgM9iRdqmh2B2Wo7fYKFMGe2ErQ7yYuCbverxukxr4Kw3Pk2CUDYJdVGTgeL1BYc45rw3p92Bjv1j",
  "key10": "2QTKNfENR3qBdNsTxRoDBUJj2Tc2iFxMWqG6j566JQiR9apoJGsfySCmuCRqsHRvWnvGum4CDfyaKrWeKtEY9wgV",
  "key11": "Au9prm1aRoaNmYBHvBrYm9nDHP4TMXVcyiB8cHhTn7tWCMKudt1z1jN5B5cV8TvUvuhnpZ5tXRKq9uSmcGVYeQ9",
  "key12": "6XPXcJ5u7XuFF6FgdtLZQ4K44jk3PGVxDyozLnGABuyZ49bBAEHiHWQw5ppkeyNM5AYWeJ8ZAn9NZEVeX2SeDBU",
  "key13": "4bE6WZ3m6zpxLoqkqQEAa9iCBt9DdX5Xw9xdSdMRpZEEmjpe5guEb3NAj5hQpbmjjqkaJxE5FxRFoc6ZoWr4qGD3",
  "key14": "3N9s1uG33kHqWSUS1H6PPLN7xxxPcWx2S8xSpSgXbsQcPUas9noUoyufMw5HgciDF9B4StGahSfFuDeh2QG8dJ9Y",
  "key15": "5WjBRKgqYPziacYAPkehXt3tFykJF3Q822q3HHcE8TG783hdNmk2aDvaWmHnV6CwvReqnueGGkxSrivmnXETpRGc",
  "key16": "3NkBZKHp16Kkuwk8e6X2eU8P1jPFtHboqX8u1VxXxZxb8T1WbMFAnpqzgXGotRdzYHZKWvenU4GeXjwXjQLAhr7T",
  "key17": "gbruqxbE9J7SXoJGT6Fz7hB97m7841oq8ieKwwW9FeedZpyeb5CJUtU9iQfRgtMGfJFcKUTrsMwTwEopbB9tTT8",
  "key18": "Uq1QRL7oJ54wBH3kNHCkVtweGfG7ocdvZmi1STuzEr3oBLcYJZ1KMzdRjTVYDvUhSgaptQR9HujWTiMLpvRzMkA",
  "key19": "4zwEv4ZPAUFBYS9Jz3QR99QcVDW9we3kezJHuW9fSeJ9Wej5tSYRZx7R8QumhRYHSrXWRNGkV4bSQDP72eNbCjjt",
  "key20": "5fEo9wHPKFd4SNN461tXqLeQ8vMQXSAEN1mBUqobmbztJdrPTUt2QWcn9XDs9EwqQnTgeh1beJYhrcoWaS2fkMTV",
  "key21": "463h4T2JNdRrRGss25sQnZ5jmBoYD1YxyMbLfo5WHXYdW4vVuaxj1YXkyj2kpeAvyiwyzeqo5jiKwCQ2bc7jZYcv",
  "key22": "3FWgrUt5mYxrdXPFAv1SRZ9FJio8jNGMNX9VcFVxptErKoStbuj3bmcZjsu6mfH8AyXmFB1SmTcaBc7LxGnC3Krh",
  "key23": "3prcBDXDZSQyDzU8ZVNHPGo9NQkxJQWbAZcTUn1wvKHjMA37KVHTq1Cdtxx82Yyrnkvu57xosK2JmamoZeLGKfC2",
  "key24": "2faTNmTA74Tw3MLB34rEsLnf4G6968NLtJTcLng4kSQaboV8uWDYixdk56baThn4ZZdv7QYbm4fc8DGNW5ikiBLp",
  "key25": "4wQx4jcEQDjyGdc2YMuzuV4RTPM85t6EqdNYHoETL5wicMn1unC2UkRRgXThfasU9oWJ5owZ5cCPwazDmLUmHP2V",
  "key26": "4Sv1SXDQm9HdKrHsgBcSg9bnVL9A1VVYe2CSPrFpvyefARKC2TMwft58WE5R5a8V5BHKzE6NahKRSUgkspjsoGe6"
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
