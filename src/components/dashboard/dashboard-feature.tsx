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
    "CvgRCCXGWwNLgMyLU89AKo5xLKMf2QpByi74XeLK8qnzJQJ793JsqN8uqnPcf6uVG6o55UUGo2TdrBoCBKL6ttd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SCgH41JiYwQZSjRGUZGEaEkMvjryupTJuA6ss7CgqXppRqvSGFiyafPQNJjb2iiRn4DQkBXXdrPvxwvmPB1WTTm",
  "key1": "2EFPDk45UdDGAziCWKS6pBR3zUV7SB7Ht5TomD1qUZH8824CKwFSeqoYch5UMgnCHKMCA6DgEKkN7XgqHQ9wkATa",
  "key2": "2uFRn5MRadcTHww8v6YZTY7yGpSUrKvTcbtFYXxfNP6SUckpCrAkiEj9LgxVt3DLjCaTwf9txB3ESwoR1eY2sqPS",
  "key3": "2iJ6veuDCnUuYT3Vp1A3kQacWesoM5VBZbLF8mfnCMUcFU4MdTz17m42Y4rU7xULDtR8uaUVN68pKBFGjcaxaYaX",
  "key4": "2dt631YP17Atn146uwR2nXLiKf5RwB9i1zyescCrC9Xj9pmT7rsvXhbQ9vgJzAJisFuxBa45yW5rn3NFMiyUgR37",
  "key5": "2vguBzSSoHuSVqkSKfwrD11a5oT8oWivQvwz7tnjjKdXsgsa8oV8J8GTJmsTHYjhFCTMXBofyT9VzRyskRBZSVGX",
  "key6": "e4PcNgf7xkPqg5muc2HFaKLfEeZPgasqsNwEVbX2KLhJB9d1e17dXTWSzQDU3cbzay6D4mvaHJEayb3B5n7CxkX",
  "key7": "3hsvAVbJCZZDQppeJ64h7ypkWxyuTsxCUbyi8NFCJh31dJ2Me9xvMXUqjJ94b7Rkg97dSGiwK12EM28G9iH7yFy9",
  "key8": "amWEo35irviRkXvjtzJdWbDGcuWpmiCy7M82EACUS51kdGTSmQDqokcsy8SX1MJbmHc8v1Ba2ycFD8X4GDPV7Dw",
  "key9": "5kHGJJKtqXH1riKtAHdy89EG5mxTfEUwK9jLAQY3WotYP1i1RNDqK7pi2nF7aR23BtNj9N7ZAbP6CFot3tPxVGuV",
  "key10": "2rVvxWPBamiWTzXLTgek4Ck5gyk9jw8sKvrjx2x2xLsUYQ4F6GCc6wA5Ty3DYHjaBd24NCnkT2vfipgB1p1W2HXE",
  "key11": "65UokUdgN5WhTJWntKcCbMusmGxTUXSMa4Bu36bPJzB9dmMqJVSFB7Mp6UJQTdivUezRh3zJKtViLAeoSDuAJdhw",
  "key12": "4ZQG1H8wZ247YXEyANsq7P2YqLKe3y6QXJzR7UGssmepb8SBXMxdvXF3hEDr1mTJrA57Y3VDiRg3Fba74SXaFHXg",
  "key13": "3Fc6wpmDYHUqVnD451UNcGZWot2M5bDSQgJ2C7nGbrNbrE5qQ871ZfWMtncFDbUmPwhJJdgMKRiW7jJFgGBKEGrq",
  "key14": "5BUZB6ZpijupXDhec2mPyemiAkZL1ZHKyFh1G2bNiDtybGSGvU9Aq87F7U3BuvvNTU9kisQG8GjPtYiYArucT8eh",
  "key15": "2iVjenmuYNkSreAXbdSNdUTKNk3pKnHJACyFp9HQ5cgeQvoZNGj8hxiRMpRuMfyD3LtEzgXZEKG1fmEDmVe2fbmY",
  "key16": "34gHBLZKLM1yJHthLY5Fu4FLZ7g3dh3kPWj3vm5V8YZQibKj6tTJfRASkJYVYfsNM8Ftj53nfTEn8CNEpFU5bWhV",
  "key17": "GbYfccA3ZGvBCCTG36mww4teAbVZrqgWHksQaXVNgjDdYWSon5cutDdVvbfBXiGtFzkNgfBQKLP3toxGBvcttSn",
  "key18": "2Cb8b8SAoWiJKoHF2r35KS7mj5Z9xWHi8NAQsHVMn1joAwQq4cBFEvxmpbYkU8CKYqHx2EKv3DarXrEJSqQZxw6D",
  "key19": "A3awbe813SduMbkxCsTkfcBPjTBGWjDL8623ZD2M1LMp49ampqGp6DoG4uncvVodKEjhyDTY1gzw9mX8w2rq14u",
  "key20": "2ZjzTcEgCFpAuTu5XZcFWmQ3CsnQZpaArBYbaJ8hLpRAWQvfARX564EE3dxAVHPq7MyHPJuZaiTQ43GpJsPZUvD1",
  "key21": "5phaa4UFknioxjQ1P5RcnqLiAWLZYXGj4jBJzemj3aeQJBBUDFTeii9rbEvHda44hyJqqFpnvdtnc9VFYSH3zTKw",
  "key22": "o2EgdZG9SJack1rTGJ2aHDY3c75P6b8ogDehtuXr5ZeCisrdUnF45spXq97DwT4jtRW4jSRG929rFecBE55ZRcd",
  "key23": "3Frhx2U861wRBj4b5L6mTVDRVQzcxrhTT4JVhgu2t3V5PMhN9d5SFJjTzMLfKVcUcTsHq6td9gvNWg5pww3AJY8a",
  "key24": "5aRNmUNDJ7s6PogA58AHoXTDzVcpqqW14tdSqMiMFgTPSPxZQQLxQEG2EcqeDffsjZ5P6qG966mBWHH1dB6WkXHA",
  "key25": "54XC7F2fkJ5cfFhBeFfkd8JCUyEg1UydGsyjMKL41njfqB4rnPbfyQEXNakfRSR3YsDAbVRRTRGKJijyPTXY4XyD",
  "key26": "2j3rFVYxika9CUCb1zvrGjB33f1dv9YsPwFKg6sKd4BFd92Yde86z2TE2UAApn1Vpoe9eJJuQbThmSCkzjJQMzEN",
  "key27": "5S6uQ7ggbkVQEpf3nf1hLppJ7P5kNnGefg8F1ujViPuLUCDhEn4Rh4cyxo5BDLni598FR3WrwTcKo4xbiusnKu1t",
  "key28": "3hZBj6PYAY9BKVjcNwkmmQpvGZMJEBFNrRveBHB3xbtuScXfAWRkg18sV6GLThjAeV8DwPLF9d6Qvq1MAvPgAJUL",
  "key29": "2ak9NZUmb5GwkvZEAHaqjAKpAJ4HdFajXpNvtfqCtEnKH7Pfg4NhHV9jtW2wpohBdVY5NPWPSSjgWVJRoa5bhwp2",
  "key30": "4neDQqjAy7UFCgweqYxcwhst3Xy8wzabYhoVQo82Qc56Ei2SJj3XPe8QV1N8nFMQum3MGbmyLvo8pNbXKpku2Wry",
  "key31": "3TiaDK9s2Zy7mKwtkb3eEJJ7mS3BWnr6UDedkVZY16fnsi7NTs2jhEx3HyeH6bxp7SBpqjQpvRVwWUVvfHw9p5pt",
  "key32": "fqj2XWxFfoyrJ18LZgXE4eE8jcSPNdQf3NV35KBZyMfdb3NSUGESJJGvfcJtQcKkKvJHcCm34XNEnGm2qK9morG",
  "key33": "5mTywZSous1Md4CtocG7jmB12cgdqm9EeiiH2ioXtYjWPffiL2dq2B5pqQxvLuAQQhW2HEfcxEfd411tVAVqkNVC",
  "key34": "2UBYrqGpGbFFkwS5UrMKDfJMdtZuSJTyXtPkJ6xGyNiM9j9mJYytmsum3etQ6ZfmU7hmzecNguwQVoezuShjsBCD",
  "key35": "5kXJRvCcLXCKhyfFgAqupu9rpRCP1hw8Pwyqgw6xR4J4oiPDgXxruWtFxPrgPzNcW1nHEVX2XZnzzZFpGGAAKfXK",
  "key36": "zcfe1bbAE9K9TeLh139rH1BYFa9FcRyKeZrftGG7v2jVmZrUEP2Ap3eqocMFXn98Kecz1BwEUGgD4VKmsfXHqvz",
  "key37": "3dY6cfgx33tQxbi2owxVGXkLxRFJgYXtpCxpChjiuLvNcjr7ekdj5EWWrCrPWFPQEHuyzXda5md5DL3gRpiWMcXS",
  "key38": "4bHuWNBonmMqCwcYX2WxmqV3bGasZQumGztzwRBM8XP7wwSNtuL6XwWkX3yTdnvZibFnvVHnwzEVjWvibT8C56Bo",
  "key39": "mUVmM8y4x8hNZipCz219XRatWx3wmx4CeLY2iawemEC43JvUC2qRFwExG5LZXJNA4yntbEJcDsDS74ZFSvJtpSw",
  "key40": "4qcr99SSE5LQ9DYmq3YhBKzhBU1MUioGUhksERa6sPLxt9GK7gw7MxvM8u3fQTtStnrdDqZsESdMukeyo8rbM1wn"
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
