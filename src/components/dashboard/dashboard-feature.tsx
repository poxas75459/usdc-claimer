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
    "4Q9aSEFCjgcTLzE6BjxcJDYa4xLVBmutrXb41Ji5dE7mzWARqJPa3hX3JKhD39qyRDMqagaaXYgMueiyzFrwxUeV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FjwGRpwpArG2phbKSuN8hrwqUzwtMVGnM6aRyUpQTP65LrSMo6Zbt7gJiVwRege2ZjvAucijG9sE6MzatcEuJB1",
  "key1": "3sHtjCFFeJm65EZPAfXRZM6E94yV6NJQTLNwbkpX5GD7Pc5Ah38j8rz8eW1qy3nV24n7eFvZMeuDaZ9FtevC8cDa",
  "key2": "3FR3VwDAzZW2nG4daCeuS8L6cCipqwDyNWFwFTBRZ8tH7s4MjN2TkRLm7QP2Y1PgUvUw5s8LppQVix9hf7ss2vcX",
  "key3": "2eYxQwdYzJ8nCuoBVeUVmN2bYv2XXrwaNjLFAw89KdSYp5fJFhZtUaZxHxQbQXsDYYx4BMntLxCGiaXyR5FmymqQ",
  "key4": "3LEN3ERhGL9xMNbz1b9Lntc2VXhyB3wDz5M2EBpaBSBQUX7W3qk6hZNdWzUCcmQ9AG7QEEQyEDzRVE1TwAw2A1wn",
  "key5": "3fJ3XPrMMNqqhriAfq9xBdaxkiS53LwJGunnQ1CjQ2rfauVkFmMnYLcwg8JxoqPcTymVdkNrJiQswUoZBBU7giNS",
  "key6": "5bgRbUCisY2urgV5p3kGXuFhZ555t1wWkunk5tdhvhCjM3xoTmqHNaRjvVSJrRwVb87s6yNveqNLRmGuGQPXnKu5",
  "key7": "5p5iegpc79M2TtvdUseQNCDJM5a47wczKVpfdXPjvAHgStq6GkcQDNzGjRJryNwoSw74AUdWKxTL1gtyHwpaSo4r",
  "key8": "H33PnhAsotz8uJaaUbqVyZNay5AZ9EHjjosYEjnNCHg6kLgxXLyHe4qnMKvsFuVDGcU4Type6dyodCuXjQvFJ5b",
  "key9": "2R78pwSLKz9SiA5RDUCVKCQ6Q671Qj25jDHECN8wAMwceYJgF7F1MJJwWEFELMB3VevrYgtCYYF2KtCGRWQtamfK",
  "key10": "4A2buan8gmAaJReVEzc8rVw4naCnQg4TvoLP32dUE7oAkswwCX94Kuu1kJF2k73pwgioPWz6MzW33AHWRPbjP2ka",
  "key11": "3LeZAW7AYAj3nfwUsKz5wWqNXtM1ZvexJcPJbVpP5n67ap1vuMhzULzjfmWqPtcBHPRmMYQiBffoddK6VWjSTjhX",
  "key12": "4hMGvrpaUzzvKYgwa2QBCTSBtbrS7h1Hd5Tb14yhB7eJWQqNsPtVxPgnQDH4vVGMmhGWAaJ3CcMbFQLwHddNm2Ng",
  "key13": "AkX8xogLeZ9orS2RDRfVTCy82PymMj8nw6Vf5AHAgwyjnLwFYEHG51e3QTjacW2wvUXWsWTzi5MebAfz8yZUfQy",
  "key14": "2iFDfFivxReu8GJCfNxgNFLyjPefCVcebGQKTjhYKd66z4SStoLdpv9h9vwaW4wEXa4uuLtJ4V8rpTuoKGKrLcj",
  "key15": "5uvBJNFqFStfPwGUA9X2TCgmk1AMSzAZpBPthdaaTF6wJKxxXMmdvykBTYejfCKwq2q5hJLnqbgmz64Gr4SZrDyz",
  "key16": "54BRZ8bnYy9uFJRW85ahCBUGVcq9c4mztQ6w2ahRmLQ6BVeCTrmCUWhd8w4R9gWEUC8Ugs8g5WrzbwacNwi4aCpN",
  "key17": "3187SuyAdX29AFdGfbSRrfXN7gbKtD9QR6gshLyERLK58izMn5sPtxnccU1Hxkz98fQqb7RNBvK7Ny1573rWR6vV",
  "key18": "4PN9thP2zL4CsmNbFGrqxdHUV8QvsXyxnSXoVernXfdceN74R5PsiV9WzVazCCQNfLzyxkprfsdZWVMvPr3CCzNG",
  "key19": "5rDmaQXVCXjmoibGqMCzyJufyqDRQaSApKq9bBNYCYBgUR4kBe9cdxUGEEx2GobQKmkmjtscadcDuVd8rG2hpG9p",
  "key20": "4HF8LYrz9XqEg8hF8Z6LJEuUKLXQhmWUXvgex8RaTADkaMYMbLka7vukqRPhV6ER7HAFDTDgRqWAuvj5hMcFQbvo",
  "key21": "25w19uqMXYPgDwmucQHwx7EZMyAsAKuFdSidGbuE3yFvTBCeVzvMJz8Cdk9ckMUtvrsydtrCueLMyu89om3Gt1WT",
  "key22": "4d19GECAkPXR6WkrGfQDZLA5LWCk1LQ5hG2oLUhRwNHzWTKoSrUJL8A2WptXSJqLSckKcUzojH1EWjbJXnQdD187",
  "key23": "4ddEBQZnj9AcnJx2DNzViNa9RMTCQSeiNX4QnuKs6WircJsEJDqUqH19NNZbfDLfHYN9vV4bcPW4w4kCTadkrJLg",
  "key24": "2ug3hHRwsD5wb9xwEGBtDEb4qJDoErx8AUxTddntmMv3cqGxMcveyXG5yxConbUG4RqzEAfjjyxFAFuBY2gA1wcc",
  "key25": "4KBBRvisCZpCynPau3Lh9JtLepbHyaoHHRsVPgYYCh39DrkeZLUgq3sYuyD66w9nBWrg73ouSgzYSuiJyMQpwL38",
  "key26": "5QnAagVFBkwao9VboxEa3yctvWAMY2k4FZgzXMow4VuVKH6GVCSuMwaSdHuJXbEUq52hQogPKJc28KfQDhspRJLf",
  "key27": "2LoaJe9BhU86MxmELY9mars66PYNEKsFWFzfpxPsrSbpwfVKKYgoK6Wx5aX1iuypeGDHsz76GyxtBkFAwyZ8wB19",
  "key28": "46kGHo1q3Bpa9F3En2NiPGvSCjCBhzNbXQQyAfz5uqdJSFCjF6u3UbQkHn2V3ZzK4Kv2KXagGMRn1aekPGn4N5nj",
  "key29": "5fZ1vYJdj9VgFyQ1woG8D1Y95z3X8ZBZGPaQ24QfkdGcBUnNkDMxvDM6XeNU59LDCa1TACvjotfAepKNazxPMf4t",
  "key30": "3Se9zfPhYYiiMt4zjkGP6pKG5e3nxpaHHB71ZoDXrPce3t3f1Me4vLCnPSqv43mpabaDAxAPQADVviVpgSytoRnv",
  "key31": "49B99k4GGyLpr5YzGwg6WC8z16qpFPVjrbwHgLsyaC7qF7iCVFQQkysxwK9vtbFqMDjzG2YDRDuN8LqJ2MS9M46n",
  "key32": "25xNF3yq5PMwW7nsnHLXqVogzHFSmf6FiYkKG7zu8yDgW2vYqd9RqRPoSNy76eWrb5znn4uo5GN4RhTZZqbKu85y",
  "key33": "2XjBFJVrjDeE1VM6V6jKy98yDFdnTKgJKtbELgaDFMB2hnUQP1BAv5MiDzGYZ12PcsXbccuBvLKCwp8kCRSvp3gy",
  "key34": "5SGsw5yWbc7KCN2Wbj9WwQ3dSxdfRGGByCj5AQ6RqXvKpDyfytHuDCbuHa92AGHvEynhdEc2LJtmNvEuDYpvA97y",
  "key35": "3Agz1vBzYRNsEEFtn2wHVqhgK9XzXM3h6XNJgkv2xyVYeFcGws9vbY7m134E8rwdt5K1B5y1tp5AFtmzcKxv8KVv",
  "key36": "3FH8RQNuoBDpr6FqQQ8CAxEDq6bMr68UM2eTwi812S7Dtc4vczDjmmKe5NtBW1XbHD6ok62ctJRcYQR5wVfhCagn",
  "key37": "4J1eut73xGybfwYhkPdcHMWRwZyYeG6zMf8YFyHkx4qUHN6qzaxQwEiAg1mJJsmScCz6Swu73hTcRsZ8yatvxuuY",
  "key38": "UPugoyW7o2Jc3tXcXY41RPZ84z19ZoZmoQhqFmLV16ax6kmVSiYLFoYiFAVmyWegN65cAn3fdbhR2owT3coXDrd",
  "key39": "3GqheyTsvHN626rYxNVmHjvDQ8pXxsHR7qhJf6p13w6svdByEMLcMeSLxLMSfyD6tSQyaqbv4Kt1QEGEgX64kquu",
  "key40": "3mQQcbYXSX8jMuriepJeSXB6vYFfhenypMrP5kaQuc6TxX3DbiiEeA5u9k4BEfboRVJ1F2r44FUwnsUBeL2uL15z",
  "key41": "5VCBQeaA2wTh7fFXo568zGGJYjv2DBBHKyYnm9THvMcSpGjW1T2ALYDs3vtYdwrLssQNc924PfuyH5NPVdvhM9KW",
  "key42": "eZBnAbr87DFTKvVGALmjPoiA4WWS5HEmhLB1z3rvoLJrvSmbTFLo8paRntxsigZDUNkeuZauQUzj1SeHKc9VecG",
  "key43": "4xvV8vYo8XDdUojWDMyTCeB7eG9qM6r9DSr7zwaVQT4i5udH8eq38CR5d4bFqK6cVRhxoBRq3zeXdC6TuusiFRmM",
  "key44": "HXFn7x4Xm8eEN5W7NrdN1xy4gSQzM3RJgmUdijVjXukPdoabgZhYcnTHsUXuz9bpaVCQHfKySTytt1bdrUnSz15",
  "key45": "5gMGTdx8zgCXuZNwxCE6R19DSRXf4X8jUS6bXNGMUr4NfjFuZ9AZqMGAMSNA1KWDBMrnd869bC3BUz9d2EyaAY8j"
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
