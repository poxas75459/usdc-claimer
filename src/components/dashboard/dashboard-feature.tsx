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
    "5Db2M9NJdViFHdwzBxXyZKzX7GBw8yfyjVdoGizmD6sowUBqjyhaDrfxQ9d9Kx1VzFy2kZLyYNTCkVXjhZtTs9vy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dxJdGhBgaFjiE8Vx6dJetibSBt3BC6qkoirVwS6MiiNRBtCkrkqaS7mxwyWphuj5vEtBwT5724eG4BMkCnLgXHS",
  "key1": "3gUFgQyY1d8drs4UDzuPoCJrsAkE3GcYZQY6BGqQ49XiquR49HNBaBWeTY1jHz8WKa6wWZc6H5QsbXPejf41s7cd",
  "key2": "23zviPru2fUuurhJNiWCSw5STHjxhgUDpdZLebmFeQ4isMRrW4Zaac7rEFk2we8z8gxrPz8q7zMY2vtc1mkbdkrz",
  "key3": "3McnrXnfWtTqB8U7efKkh6p2fJKvkeP1CyekmtddQn1o7C63voDkhchXoSGFcRHfc5HBPC1FmkeHFvpaNJZSqJ7U",
  "key4": "44faCCKSS6XSVZQVUQF6nZVXDVLhSuMZiwYFX11tb3QCaLdMZpbKxqkoCp8XtkbHAUcfLrXRWUYrhU75Bj129wZy",
  "key5": "3fPNJCEqvJqACFESsGGDZtxAfZBgfFh6iVei4AsEhN9dFzKnnWvnuJH7AGrXcEd4HT1CxcS2nH5VnhSoyTMNgioe",
  "key6": "4nC1P72UMsBxGAkSvLTS1pNZYJ2s1uQhQ7XbwFk9ek6txVjjNuzoJGqs1VAz1JDPHxUFPSYE2stmr5cdb9DRFdVH",
  "key7": "3oixvVUQzPW7a2JPdFy9in1wTdvWYwtxM11JsvukRvgGRsC5AaX2QFqdxuAiLkP1nRnVQsETW9RtCxgWVJncbtwt",
  "key8": "4i4uUe89KyxXs5qFA3yDBo5vnagsbKnXCCn9xsj3KYkuNYuGagmQvvoHPUK3AeRhcADznHpPB3XCSesBLdQErEE5",
  "key9": "4tSwMkuH9KDRThRRZHQWWpW83p1QxFHck4T5sjQugNFj7MPZLKdSQAiQCVXokqSWZ2JMDyFfwWrNESGqZt7Q9sFD",
  "key10": "2SmcRVKjCF1xAyEQnHAFnafYKBfsGmzV7fCGhnmc4xrmUyfpiRyP8jae3DUQWJnBerjb9FXDZK5goahL8LD2P6Kx",
  "key11": "5evD5SBqwJUfUQFWVXSGi3peQtdvXnvmzkv3mErho1AWpQW8PQo84qrYckG1wscxvRUx5gLi8HWFc9pH9t5YbotD",
  "key12": "KBTbHWLeNF8nWi3sK9YcmUqr6b1AiRmxMATGMPFawuVq2Tp49pvgqaLoguDrtXxEdugZdBN1icwpHyuN1iZJyhu",
  "key13": "4kohpTQMGMu3uxfXJk2g6TRe32M6boXwQZrG6iVTAd1B5CUcx7G1ZEu52owhNuAQs6XHWwctEUL6rZZ91DMfLUtv",
  "key14": "36ePFknPsPXgNZGBZNA27Yo7eGKbfX7SDPhu2ynmLUWaRNbHghXcrjFjzHz5Ju6AzSYRXaukTvAkECAMwc5AciAX",
  "key15": "49T61qjTZq5QMjFQV7UzjvW7M5ztTBUSBERYgHtPjYVCk16pYD2nC4aFjTmQ38Jwy3vLGRRmKQkmJavQtEf4RbG4",
  "key16": "3WCoycpoGP2T1teTxehkDA23vQV9kfdFeHAo1FNhxk1B3fBGYQLVCd17VAXnhXue2HZFQUqqkRK1Udt7NEZPbhEP",
  "key17": "2Q92FSo7ZJPPs3b1WkP6uXezvFiyjsSRjWSdf1gLXndtauu6pjPE5aJUY3S8fANGstgczktAEeyYEcAov7BfnPYR",
  "key18": "3h6Adfoi7ojGT2ukFvG1k9hoqPYAvAm9SSapVUPuRrqhhjLTyYXodsqZ9tW9hiZStC2evFAvLEqyF9Q8wFH7aVpN",
  "key19": "sPgRzLDG4ZuxVKZgxvtxPesVqRtujLoBpnpDixey155QcnZ4qyaXYpQLJvjYkEcFLERT3subzRpzufcpt4mnGtV",
  "key20": "5NwRaVJWXeMxAu7GjWpyaTXZgpq1cX77kzVrB7m9TLm3FFAAUDPPKxacbhJcSRNjZkQYJvgqSdCFZULEG8gTumeV",
  "key21": "PNzxBEATD1mVX2iW98t8QGTiYAsACMCUMxcpZxRrzNPx9yW1cGnAZEdHnLsAvXdLhgACJwZU3P4pGJq8V2ywyVz",
  "key22": "n3raBfDxj5rWpgEs66mmJe5WGt1ZKLUTszVKN2MBq7jiUs5EgEu9yifeXS5UvCRgFHGk1quF7bHfeB5wnVaJLrC",
  "key23": "3pn4WH1t2VZE8ZHczx6Mw8JTLc39NxsdgfKA6Fn2YuzD1ZAZEWZ6E5Efo8buzQzkR4E5qJx3VXDzcW6gcKERZtei",
  "key24": "BszzVLeJNoESNCrsSh4UeGyQt88cWkwttUnJ5uFGt2b9G5gPhytT245T7orkHc4sZaztJ8141f9AnXCD9UxAVw3",
  "key25": "5663iLGDR6xMUZRyM8QHv47cgYbWT8XXRstKcvfPZkm2dFi2iFCD6E5ZQCCPMXfG8K3kyfM11Ct5z4SKGC63qg63",
  "key26": "2Z8TtWx5E8mErtmX4Enc4LfPLkPewbNG3cvCwDnDAhmoCGVj96p8Wg4E34EapWRQQKbgKmF7WXDD6f7GhmtTAN7c",
  "key27": "4Qf1WuFbcC64ENJSbBiTGHwPTCteS8KRdaDUxKWRdyyR2EH2vF6kBHAXDVNvLkVKdwhngAuemNRdkPRTtpadCAiM",
  "key28": "4tyoArFCUxdKB6NGck9Y92ie32e1kUWycWBRFuHCtMDFehLjvD4fVo5hcojFdV6KwP5frCpSQn5uxyQzivMQpSFL",
  "key29": "4vDDJmADeC111bXPUj4ZqNyeHZaGYt1tMZMZdvTacr2TVN9zzWPzrkNynSSaLxaAPu2hpVawVS16vqC3a5jXxNK3",
  "key30": "m2mmjZwkUFuVzM5854JgE1B8x9kExUqAGtLs1REKXefTxBqqPkmx6hdnqieQ1CpVkiepvVU9fphswkZAxseTGFh",
  "key31": "2u1bZR3PkHYbYHX7a7hTGKcXKjNEMjuRs96PdTzMJmDG9CwHtbFGuVx6LAxcNcz7dA7ngd7fRShmAJHnmuJus7Ah",
  "key32": "o1ti8pdqcMAnZpc3sNKhrUTw12SY1uybsaKBxqoQtorYrtdL5V67VjQLjjYisuWArhdDmD2hi41zFmMisL1mgSy",
  "key33": "4QmfuRQTbhDxhFmoG6Buy3G3CsNzvDXjtz8Kbjym1SGRQd5UXVcRwbyYwgHMKDLK5P2JSPuQNd8Q5jRbikzbo5TS",
  "key34": "NyAhqqq6LuY46Q3cJogLDKkEx3wUbJ3VjDLX7HXoAEhCz8nNu1n7iU7168M7dbjTCmmTjYVsm4yhHJGoNt3Pzne",
  "key35": "fhtzRriLsoA5YSmL43JuVDfDPt3G9mHSAoKfoBK1oXLyTKFr282qfwLWGTYnkDwYnXxWAHKkbtEPM7vZqbrMGCf",
  "key36": "V8mMhyXWXT5g3MrEiWeCV9X329Q1LKLninXSXXvhFLs3fFV7ZgjUkjceULj3R2o6XzaiQA4Aow1sndQVJY1nbE6",
  "key37": "4geRJxU8gN9SPyMyc8YcR1J2tZLGsi998MgLLqJ3yZEsD6ZiRWjfcCyuqL2uyNXGszzkXpTocEaS9W7oLT7ZP4Kk",
  "key38": "4c6jYS4PpHehqJjXTtQgD3qxkuDsi1LgrYRtFLz8du49t2PAvtBtKHkxF9Qd25dVi23Qb13Tbe4KWJ1eHp3m8XpU",
  "key39": "TJoqqfRine7kChyEvnN3Kya6xzKz6EGhqBqagGaVrhaFG4atvbsnapL5aUHqhUzV3enU4msxsyLxJi1yDbn75BJ",
  "key40": "4bsY86GZkU4f92ZTkFBzDeLJwosSvyWrKaKxp1pzcXQbkYtWFTpekxcxH7dbKuxknJUG1sCPsdWXxGm4jFJ627Jz"
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
