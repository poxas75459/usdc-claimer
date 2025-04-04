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
    "3KhwDADHPP7aUydyehzSSGnSby5LqkNxr5fydBBgfWqwn1NRuFcmonmGBmNy4sxvsiEB4nnJoGgJcY18Q5vtS1Xr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FWCBMP2yyYXgrGNXKfyVH3anDZybPqSVFSSKJzxuT6RuahVay6Crwr4NsnN7BxrZJ6uY63SFCQzqNXrJxUrFVZ7",
  "key1": "3Lt9tiU6RDJ7pmgSpWLmd1iDDuy8d4z9M6cEPHP2mDfpGnm5n6RzxgiQPBC4esf27ozrhUU8yrJAqabDe6GjKLPL",
  "key2": "2Vic2q7Bck1PFBJ4P9o7vJQfKXKm5BcAZ6gBf8AUcNqSVnU9WbTdCr8JRox929Nx1G4ccXimxcR7MQDoa6QSEG4v",
  "key3": "5DPB5APkYWmH1QLRq61pjdH7yNtys2hXddfPwJwUcE6kbPAdVK8oPyps7pN7K6KJaXBMpJ7b5Mrj7GPAyfGE8eaP",
  "key4": "peCKaYe9i5pLg36B6KrwhpFX1SRkanjgXKUj3gSLRerVbiVb9soyzjF7EzW4FaM63a3PSudt794wWtmSmQxARZU",
  "key5": "285AmrHeE5BRBccWKHXSoV81Ko2Jtywg62WY7u8zbfgFZEY6HzRNNDFnJBBmHHPX88dN3GZtzNz1EEz6QUHj84pC",
  "key6": "5NihT3DydzJwNGmCR4m63KNdfjBwT3pj4vUHG6kBzEbKG3r3GaTet8TvG6RvpdHV8iz4ZuAPwmeW62WxfGA1xkb5",
  "key7": "59AbSQCSDjcn8VLJ535mM8772Tfv4APcgeAVzBGmDHQnap4s1n8WBGCwNm5xVqAw2eTg5uYkXQt5neERuLcdydhA",
  "key8": "5pSBdKFXQMEoueoAwwnhZLLPovc1vNm91St3kRvHfojgDAvSWPwgK3zmKD4uN2V3G1dTSrRfJgptLkJ3ay3e2fFg",
  "key9": "4jGiSeoQTwwQahRJo8e4vfqbkStnjFJ5oneeRYqnFBiBDCDyApebRGqYxQAknMDufTML9un4oip2sUQgBrdpTzGE",
  "key10": "57tbEewbAcAymKSDAXBNTYMVKT3RNveJ74MvXzyUvexRHbjNudWtNS4LNsssL3MZgfmBJ6KBqhPBVC8qFzLcK6Q7",
  "key11": "4hpkQ3kgeM5QTnAcvSTZmka5oC8p3i3wU7PLfLBtY76xdoyQpKp39BzSznBEjck4uXeVja5dNmESV9Ta6DKJDDu1",
  "key12": "2ApdXTCXUbtQ3tgWr1PJnzedwwiq2xDPmPvQziWxENM7G1aUcXuGcScc9XPZeMZ7bbfLDuaaEvmMoKM2r68ULbjg",
  "key13": "2c7381GQB4pph8Cb1HzrnXAFdrcrLKqyHiNkNdG4LjhqjFADKevFfN5FGnNXCSm4PcynqpXusMR7F4TuewEFTAAw",
  "key14": "iRwEoaWeRueR4AmM9KoMzRXWUzJ358xZeYUSiYx4C93zfbTf6wnNqrD7nBxJN57RbM9f4qckyYzuPwCbAvXrtfv",
  "key15": "3CoL4YEBbYpk3bgJ92MB9V7RW8HkvVfBskz6i2r7ptKpggaVabfVMY8Jkr9VKYxAuwGcx8bBhmWketQpM7u2f89j",
  "key16": "2QqsXy9ieACbAuKwYXNmkvLQDizWJ3coaYLy7iLeEomErb8VDENfRtbCWZmSBEUt16LZZ6Q91f3AH9oSBia45xwG",
  "key17": "P99xWSLm8v6CwvxXNzzyAz4e1VSK666qtffmJfS8Kgk1SG54MZHbqBAzaMEQrWWG4AvNpyz2CF7SbrnuvxbCBqF",
  "key18": "57UsvxvPrMDhndbd7XqKiR6uf2eVKmdXpMiosq2b1sx28y8HMG3Z7DWK7L2y5s5mqWifKgW7SUnLaEpSajGbKoK7",
  "key19": "2NTiQhW5hQhVEwNnYfJDNJ82tZNLvwBt9oBHFhebddVNRrAvT6oJYcy2ksbVafFJz9ZNy4XsM52H9aF7iVg7GJrg",
  "key20": "3SHRJbrVrbdiF3s7TBQJnWi5XwN8SJjKuS7qmeWE8cGhXgBjiGMYDct2yimjuqFsuJ723etEPriwKqwHppsEoWmT",
  "key21": "4GeVHUtAbY5eRqQqtWP6CoKKvWdLhn8KWdRiMLzFmtWCEeRZWLDMHe7BXYTcCL99yRNcyDAyyMoexhkqZF3oAn4X",
  "key22": "4QM5TaDc4oL7GPtdBfTcjA8c6R8t8z4aXT89wLKxDekmuZ9faB7SzWw9RnvtVr2cxCGuBYXPysESxuoSDPTsWLRA",
  "key23": "4bSwMxZX3pmWXPw1ZvtC4MTPanqdx3tQCHZpmbcbQyrgG71PDYMYMuCWWZEVqrYyJdVAiLqHjy3u77G3kVnHa8r2",
  "key24": "3UeKFoQQY8HQoPjAVYNGj6uhGF4JsGwWWnydiiHW6HSTkUNsnAN4MJ9hKzvXBDKSi8w2LmcGNd7M7ALhEAtD8WPw",
  "key25": "4WqqipjC65y7qE4SCRLGoTpQjS1mcKWx6WcwwU5fQf3cywYi9bGfpxu1JxB2L2hdzP2LTpXaN8sTXDKHP8e3ue3h",
  "key26": "3Cm4ew9RX16ceMxM8uU6cXCTPCMkvSPd8JxoMFLcr4rKKKDBTuRtur7cPrv8NuPH1R4HyppCFfVsRZQmMSo9cjG7",
  "key27": "7caxGHcJVkRRoq58LpTcbKAG2pp5wHrSj4f3hTSs68WvpVsymhCgkCaWedq7pW4eqmJdjfjTmsQGJu68CJ6b4zh",
  "key28": "2DH3j8BETftpLg17u7qzAQqzRmUYFznAVvcqTdAFdcWXP2UzmCQg9fTJezvQZC3YWdBuBRTmWVQhR1Y2PTMTGySK",
  "key29": "3jgaZLqEgHBGDYTnKZDjjtEKTV8QcmMu372vJpSstexu2iKAhzgdBSq99bBmwMCEkfjRWTkmLgLHmFqNhAo1At4Y",
  "key30": "3ekVC7XzoxW4JzUcV28x8VGNjaq7DitCrJyaanAxmMdnT1SQNNwgEmVxg49GvQ1rsfgffTySwHizR24yLvS9gbS4",
  "key31": "26XLhnj4h2UDyFFoNXe2Unfy2FJgY5s99AkXY9zfEKPfakVHQ8SvjsXDw1pJsQWZRFL6g8aixTaw4gEmPbq7oKky",
  "key32": "3XYMbcrhUEoRRWPNazi7UsG84FjKnSRZUeWHsSZHoJHRxv2GMn4rZ7Vhpjpz6vJb3hQ9umnt6Pxm9Us9ZXn2eQMb",
  "key33": "61ChwuU5vjvL2d3y7acmRZz7qnz5ZuqMvVSWB9fz3ojUUkdSjvHJEvnhJjGkXRhbxFiMrWtJpg3dfLMEd72uR2vy",
  "key34": "2uGGhYtes1CLahcRpvGJkGdAiJixMrqeZSjRd281NxExKax99xV2kQ5x1iHBcZj9N9R1w57rJbJpTH1D3MGKNguU",
  "key35": "4xATixxm5Lmdd7H1LCuH4t4Hsxs7V8Zy58iN5JQVpyPunSoB7kurwriryfnD7Z7hEiniBiP5oTJP7XictACtVCok",
  "key36": "2uPyuNrM8TFqzxsMkXbSf8WUHCaTWW1nhzhmpbyUcwqx79J8ZhcBxU25KQb3qecAs8CC1cZegv1JKGCbrmuQEf7f"
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
