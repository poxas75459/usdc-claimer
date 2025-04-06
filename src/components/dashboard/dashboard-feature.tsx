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
    "4vfi9feypUuPEezoP7GKnm812fBc1gX6iYceGN19Xk1SQSJG5AcF3pzeiDmbxj4Zz4eLP1F8TEq7y395HZ6Zwigr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DdAoZTJbbVJgVQR4qL12452Ai8Yh1RCJKojWh8yS8x9tEimHg94Bs2nNrb17gaCH54m9xZbSBG3tWAbbiEU4St4",
  "key1": "3afH7sRLLrHrQCPKwR9vaFURKfQ1zKe6ffNDggxoaWAznJhcAHgR7Twhydxe1uGAqR44StVfiCAugVwKPNVy4nwK",
  "key2": "5KfCdv8Msu1fFx7zxkbNWDCVzuRWFpAB1avKzhyh76KfE7qFbVjszTrDhBnaSTKjjeyqY3PAqjgcZLEyGY5zy3Q",
  "key3": "59LmYsDR9nz98oA8SyJbm1dnQ68zeWTupZeNKtiqQhid1CN7Gd3KNKzjdYHa5WmnDd4PA228Bt2pkxh5LS3RCv6q",
  "key4": "4qo8CiTwvsiNLy8ui9sdtSJiLt6wf1MCGvE3LTvn8xs6qMv9564mFrb5df23zZrC25y6A8ZyBUcxE2zKiXD9uWBM",
  "key5": "2rbxaaF1xbXHJ9BeSo53PS8sp6jiLKd7TPAYLK9VXMxn7YJjU3c9PotRmCeLK3yFnui5BKgg2F4TUWLxVrYEZLB7",
  "key6": "3NsKwCSE8DTAPj2dqMcP1Hj995UyKsXkXAuZmFuhhVdYPZAfbBqsBUTZAAWE6WGKjo7ASMP3Wf5kmsD2nMb4hszT",
  "key7": "2qH1Dzi5q4F4t6HdTx6teRCHLcHk17Md2W2kQCU2NNDp5hckBMEnV7YmYZiVLF7SxrR1VqbjoS3stBnnZiCSM4jD",
  "key8": "hdCeDtiPEXkr1jGg6dJBXPLkb6T1CpQknj9rjDLxuyiGsaDt7KRF4bCocT3Q4oK2wBCxboTTDuRDBe8ZcCXGU4r",
  "key9": "4eghe7ooRCJeiLxYpD5TXgMkyZtyjDWbQ3NFaPKvabCLWWvJwbraQubBk93XHdNMqpE6PAaDf7S2ZnYJTu3ej2ER",
  "key10": "SKbDXUxyK64RszV2ZsiiN8ufZSkRWQhG83AiocT9gymrktLKfERf8iw5u8cpvCBPSV6MJ6oCipEiMqFMH4jgf2g",
  "key11": "5bBoVewEwKK81hu979VfBtPhuY3FP3gdL9cnozJPLCBCR4ATRbuKMCZdRGnyyUQkurV56gCkaoKWLYWoHUR79Qt6",
  "key12": "569sRzQ5rf8wisuWwXCg9HG3UvVBNxCmcPu1VVaZh71gNLFcMsFTWUdGzQdfx8BhwTbEqPjK1n6VHavQJqXcFDn5",
  "key13": "2RdzCwWYavZqZu6yArAHif1mis6UrFAa6VSxLtRGEswrLuw9CJPE2AumYLFTD4PTMypU3SVuM4xJ9BbkozKjBWSB",
  "key14": "Bj4AYS61KVfx9VaAam4aRfRWgstLAAgYJDaXUJcDLf3knpJKCshDJftWcXQBxjtKarxyTPJZ8yha53NE6U9biAG",
  "key15": "3UenPM3bNnn3cPgZPrf2rP8TtgJRQXv9HC5bVKuWxjTEQ9iDxWxeSX1nw5W3X2aCWSSHrNZBtoLPaxRBdHM1MNoZ",
  "key16": "3pNjbJ5qcabWpA6TQnnZyFvc5qBAACgwyR6Jhj5Je3CQ1tLa4iNnFB5WHWzcGQUBRsJ8nhd8JMD4Eue9xx5Fn7BQ",
  "key17": "5Z2gkUUC1FVvrrM1mEqt9v6nT9EPpsWvoNyuEsuCtYKGFndbsi8WdT1NNisjvjYapJ94Xaw1ztoKtUGHZym4UsKw",
  "key18": "2xQqfQEjYyvY3rbsWZanmEoL377RbXtKUjedFkDvAz1N9MYiLuYPRCxyAPen12KcXFw67fjMYpoproRrjvETWinv",
  "key19": "4rh24Yt7nk7KoY9UCq4AQFxZCwRCyLRhzT3qKhzePgtrxWqdurL34w4T2pYQPKUZJRY7xTWec7E1oT2hUhvzNNpW",
  "key20": "3yArAJs1ZdYf4F1FZXC154wPaWwjYhE53soMU6q9FxTnkAN1cGnsVfL2fHT87ZkGhmxg4iwSWxgVyScpAFM68mg1",
  "key21": "kyAR2iRJFAPQ6Xy7TuVopySurm1NKFKBfNHkgFLzg8s3Z1yVFc6BGy19E1v9v8tLupdBQHKakvnqJYgFmeX5zPa",
  "key22": "3QR3kMuZSTuGKyQn3JMPhA3bJgBWAkwwtPwXX1bBu97yumsqy7xoomWXxAjrtWw3T3Ek9ZCDzMHYEZSqP46s1Mwh",
  "key23": "4CRXiw3W3eVWVTdAPgoDrPaXtWV2Bx5we2quRVofdKpTvXbFgGZp7hkiZfeMpZ9dTzVMNs5KgnDwGtWzQDDB3oqM",
  "key24": "5FAhmaFj5q4kQo7ANgFepfAd1SEcuLNvAg89yhbpM6Aqo9finbR6KdvfFcwogyvj36eYzyuMYHSPiZdcnkPXHssa",
  "key25": "5g8KMS9LkQtVMcCioaGxXFTfqUBjWR1gHFnKAWLm2FYqbvgNL3rCy3rJUQeqJkgq3gi2dx4gy16xBqg1PBNKudqw",
  "key26": "21aFUthTHiHegagwBFHjmdfwDvuQVFkbm2ienSywQPEw8Ha9HFMJqsxgu4VvFMn8HvfMWgKXRHU4AWW3UXcGAdnZ",
  "key27": "5VC1ismbNEs9V44RAkaaC2HyeezMD5ncUpZgBwdJtE2DenQ54V5zJRSW1VFVMwHQzfUwsB8JNQERvrGJW2kaDG5C",
  "key28": "2tL3QvYC6K8D2HLf22ufT683pfvvgwaXtKDi1cxS7h8SahiVzoDeiuM2ES8E8zYv1eDM3PpE2hHgM73vDZyNVSEN",
  "key29": "5TRP6Nb471CDwLA7ijDesftgU1JxdyCaGqC5j3KurLQP6mUUY5dUJCdMJSFXi3JDjKQbVhcviK1sedzpQ7MET5Lz",
  "key30": "3hWFyzkyEStbEy73unkVWfrEzMh1wVG2JNMDKVP8jvy7E5e5RqvAo9SYmQ1qop7D7VWsJXzPUjE8UkEwaF9TYyei",
  "key31": "4NnnByRpgiu9rtn9vDXXKWo4HaEH6ejMZmfFUj7MUZtnwtrxq4P5rb5wNusTKWCWUWc3enCa1PcjHy88gkqHKVnw"
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
