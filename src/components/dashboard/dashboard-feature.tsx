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
    "37myQuy3qmcbdiEzXHq3hdmNvTHw3RXRj36wCvxg3RyTtsZ5Y45XATMhx23G4EukZuXzjw5sFY1AL3bziu1dabCa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vA2GwHhPysiZa9BQ8TadhV1wrK4JbCguYTGdQD9j1AfHaoLcVb15V5kPD4mGpSKpXUjYuzEwZQtS3zr2p35jBE6",
  "key1": "5dWDWEdo5aAQWhgiadruAhs1BUBRx5pptSidk37e9rn4x3Y5frPdsCAYoYPm5tZfuX1JAhGMGJPKzh7RRbG3A3UU",
  "key2": "3ZEX5xoJcpSwbikHgcyA9xzVSvadU1ev1CEheYHeNQpJSKp8yTMUQSsC4z1Bktdq9kSLAcs8DjH1CkSb7j9Lb6mw",
  "key3": "2NNWMGh4AEp6xQPZQb6XKYNhfsKp1hYkqgf7DWkm3h2eQXFYwyffTKpCRhDm8fPzpXzWWEVtTP2H77qKuc6f4nD3",
  "key4": "3dUPYWrtQmhTn2RK5uFAdbJMjYoYpNkXnihuxaJty1ZnwGEAEXXQG7nCmQBARsVVBqabiGKVE4bDvmnwxisKpuvY",
  "key5": "4GxNxVsqniEQfpbtjnjxi9do5mj9FzzPAmNGTEpbL48L5ALxYm5ujhmsmx2sPii5CW73h8XB1m71MQm1sDXdqhgY",
  "key6": "4NBx2RB4FVdFMBRS5A2m5uvUD5qL2V45wPuMvpkoERjmZekrSRyiitYHzrRW45maXHq7pju96RybpZkJ5uWYv4xV",
  "key7": "5yPZRPZjKniHERgukVGD9rrpLy8R5f9CN1drepqWZLufXauu2nrydFdnRGXDAtXpvu51KaEfg8vMTM5JCtRHuCbF",
  "key8": "4n2ECKzVoQkJPAFg22kpydMszuckQQ27VRGF758XsCfKuMF5xCHXb29Qdz9tfK6x7FDShRkHycK1f4dZNY2kSF1F",
  "key9": "nc5HoMjoecR99Zgq6Vvhkik8EQf1WfNZpB5aFA7PqeBRTNs8UoEBpL6spQ7QA8Vmyd1hurHDNBq4NkTngjgxVLQ",
  "key10": "3rExtMeQmi2z6qdVEhA1MU8mFLi6G17LcGWLWj4ycTB7bKbo5Fv9KTjnB4yxXFwiwp11xCNB91SuuYbuMLUP3PAP",
  "key11": "586aZGFB23aMst6quGpS7EKaY4DnFs4PGfCMYipAXYGgPzUUPZXizWtgskaaAZMdQpkkFirZQ54sYeC4TX9Fu9sL",
  "key12": "27rcHJbAzHChLZSGFGSk1YM3ADNzRXSPM4rhN5ehsTDjcKbfbNaJTDaD5eiaMQe6QXanQCdtSbfZfx6hpVR4t9UC",
  "key13": "9SuP6rCbYjfRm7RVC9kDL6N2QPKid8V7rYvms1zggzyAU2RMLWM6fyBxN6j85M29Xaw1DXPiGm2Ld3sFnnkYW9y",
  "key14": "WuRQHiYoYpuvDEcDahavoX9Y3XxC2k1F4G1ZFNSx5KZ8PCXRSzMd6fp3tF4r8VrSk56boZsGAUEuSgPThN4CW9w",
  "key15": "2MndJnUisq49i5AG2rCqqUTGH38XsMj17W7wse68xgcFm5REcSXkbNpnu1JF9MVqyUxnzpXr4MH9qsodgvKHN86f",
  "key16": "5ivCU7S2pm1YjjPbTguvYNgWGVqJFbEjqvqr4tnz3NpDwkYiZPqFdxbemfk53Yasv8zRKtBWN4ZPfYGYyKE1odDe",
  "key17": "2Ur5kaUBjsQDdaT81W6cvKcaHDjYrKt8R1t1K64CP9qTZdMZEFciiJ3JChdWyktVdFZfvVNkWnJQf8ciSaxMPdfC",
  "key18": "3QS2p7kdzHvPG8Wodqur7vRFd8yE997Sx1ox5pJABpZYWm7Ep5ifKWgF1VoaJCAjMtSRuexHJx2XMdLdgYmHsbWK",
  "key19": "3ZjyHCFvDCYNsg4nGR4UYaG1nzU2T4jBwqSjdqmJuZEHGaahPCMAamedgfAFVVpgw9a7hCow2LBif58vTPydjPKM",
  "key20": "42dcYptCd2Mz5yeQBkAVuo5XZX9RWNKnmcYgKg1oToW3DikFRhXAtua5N5BCJ1RKZY8ajDnywrGx46X8QteJcdpL",
  "key21": "HeFqrZyb8KZdHnqehX3WVnKphV7H8DYhFyz6LyGhb8V6s2TvDpWwwzEMwQy5dSj4QH9nCx3qngwoFMdG7pe7f9E",
  "key22": "2L1kXKQaiEWqV8qWzVjdW5KwhAi6bjofG51SWzHKjLfmeoPshQV4nSJnDTTfBLPiYss9ANnuoeaAHtgdbZ78D58K",
  "key23": "5sncDFz3p9vYVLGVqefYBcQFmPcgFgQ4GkRLEi4AzoYHi9nZwaG1SaW2ri7V3Yn2bBdzJHYXLKxWyWbDH6BwDjZz",
  "key24": "2wk5YaHXZSLif4YAk5dxDWGzN1Vt3o1aQU6Eodhvmmkr1yoLkc6mHt1FauMKBNczHhsJpHZ69Z4kmTfSJJeWCDfh",
  "key25": "2TWU9DwpiuS5ZhvnJ8zEPQkuJ4eSsV1QbmEbXNwhdTvKuHiWVmhXjTtFtVEDxLno6Yj928xCyFMuePNdHTw6Uk9y",
  "key26": "483Zi8fsNrJz35hpKj8kY6kvpcUodizNG9mHpWVHYv4hRRWw1sM8bMdeqpRdGtGTWHrrBRoFpFT4AdFvCoFBnMuf",
  "key27": "4tCCwM95Xh3GhpMonaoHVJqEdkzzkMWqnQw8HkXatDFfQu4j71JvoAic3u2GzhXoM3Y8wVji5jefy41QMzdPjUjU",
  "key28": "3dtSSnrNJebz7guemH7T5XpKrzsiQNxkuQ9e2C7683Ko2xz1dV9GXb8xD3tYfJZQvgdnetdV3GVEpHqHdAc4Ho4M",
  "key29": "3dggKUiJ7KSA4y2kiNUgF7gsVC8nyJ9VQdU4bP48FoMGzUsJjFV2nTrEmYgFAnSPHimFUmqUZTEuB4Go1uFbd1VK",
  "key30": "3QMUrTY7QqoffWxYegUyMerqtCRt2pAJfnpZab5aSCAFwhRFvW7Z1Q1x1oH7t1Ha6FshpTA9UqLbT77chB72uyYM",
  "key31": "5stQLnvWB9UaxTfdmmKo9VTe5v4veejQwt2yuCZtJanCXNNnKimH6XJQxYjn2JGXZyr3mcakSRXn2HiGFUMMrTMU",
  "key32": "iqMWHKE61iZDC1DJYB5GLR1T3xPK4stJdwMw2PcT29fbZvpJR4mgtEufwuPf8Uj7ybxeb1PWNW6jotdeN1wie2K",
  "key33": "2i8j9eGjQbuf8Jaymt5FLVXEHHDm2mJ7LV5CR7F5ohsTmnXxJjPFKJDAsLHYhWn74g36bLd6T1vDG8SbY4j95aJB",
  "key34": "317Q2raRiJQMeqEQQSkw4zdkBQdvMdyc7FrKrwQ4LzoJEZeBY8KPZz38S7W54GG5H5ivc7QaSb8XBtN4EroK6h3T",
  "key35": "3dDo1d7rNLBZYKsReS8oC8WCWaVQpZL7vNp69fyJASbcF47VSGh8oMh9G1iZSJfE5RihicCyKQEN8hrFJmdpwXZi",
  "key36": "533BWB8JbhbvSJELpF1WJDgKNC46fGMYeKow4BChgLUh2J5DsMh4pjE3GVfpceCNSSwsA8rex9HjhA4y4e9BKTUn",
  "key37": "25wNe8N4M2T7nEYG4HvCUZTh7eCung8vCSp1AetdhFR9LFSmirnXpEMG7AhYHouAgrr9j9DfY2afqJkpsZN1ksXf",
  "key38": "59b2uhCG3zux1dj4heYZPptswrYtc7baMmuUTftHhQ8CqTrDoRa7hAseSj9fXqGqpbqDNrvjNm1rCBpLhKhDB3VC",
  "key39": "3DtkJSUSgDSs9ZkPpcKtUwDhQBxFWjK7f6CGttncxeMsb6gb9a6GELzWb7QUZxYF4aMVJ3mDm2ofZT4LXAijNrhZ",
  "key40": "5VNr35MUqEAajpXwxLFJKfP6Rmbv4ossywH1ukWcpj1bVvnJuT6E3ut8gYEBmDbVF8pVK7TGmU7HFsJm6L2Yhzck",
  "key41": "TiDgwGugaF7PpHo26opFD3r8Kzbz9oEou4eSa7TN1aj577VZi5nSDyy4NEWYMLcjqAdm6XnAshUdeBmDPkJMwre",
  "key42": "5teWCkTexSUwsZnRSrp6xFBPCnQuR4ShakXKucZzDXSu6fgBQw6sRyCcFd7uY2Qs8kmrXTRwacsrH2BykTr6Vx54",
  "key43": "4msFVYATAJDq7jhXabqhotzZuyiin8Xrzvrfkwbd8smwciyJMaZNUyp9JR7EYaVMtFeaHzbh98gf9m4Y3Qsa5mHT",
  "key44": "GmXd3JDBeECKxuUB9AGdowr7SFs2d7qrGuFs2NmUn6YpCxBdsmnMiy8PyDGqpyHH18KupoVbyBD61mvZuu6CHxz",
  "key45": "PddguzAYQvM3XP4eKmRPaHiNNtb3ZtiubtvbC1sReL3yiSkLEAitT6muAPrfhmKchuro9saQA57K6BRigiz8XYH",
  "key46": "ZRyoocFqNvdVrtoqmddbqCon2wFFZ3x3SjLAwa3AmwSodS6Tr3fDiP2sNCMnJcprGFLsBjw75hRATJRnEMMKXjY",
  "key47": "4kPnqRGEzd29pZ1838sdtnxbAT4FMkALHbS4jTBwV1Jf68ksverC29fzgDCBDRGFaPMhNxMv6uojLkwTbGBUENKG",
  "key48": "2AF64RCim6cGiF9dPgtfx229NfXLdMH7HwMuES4Auae1dJVYpk1aKHiHQJcXJx4YuFG2Xr42z8aG6dNKquMnsCob",
  "key49": "2yF4F7woWKPkMQ28dB1fJKJBUf5FzYRfMHx5ZVFwi6mYgUFxARshoxJEUzWRX4rWYkaxKTiyJSRURHYNNPbTPrj3"
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
