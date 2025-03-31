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
    "4AveRoNAs15MNaV5CbGBt6RLyuinfiNDF22yAks7krPAUwX173jcbsheviuthhFgtwX7Jbhh3Y3dqbtf7j7kYEBJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DKS3qXXRvcB8Wmd8fVUhZctKJaRbL87zD7VGjQhKw2sKwnv6jKFMw5Qq2G5GLPhv6pvArYaT2ucvv4oi8AbxC4Y",
  "key1": "2AeRZH3iGnEi4a85nbt1ZMu8cxQhgoeYYHzFAV5Y9rofttk4bKTCaenUjQ6sxZ6dHZt4VbJgWC1pXHJkib2AAajH",
  "key2": "2uSpy7M8hJBchCXfUfrZB8fpdzAf4kx25erL7jBZCNZrXm7JeoT1WBaVaDWxaVyGRhPrce3HAcFXXR5q26dETeNz",
  "key3": "2mXgPnDX2ME9re1tak1VKoBjaQ9ELqN7XL6VWB4UxYTWif2pihkh6MsryZPyMnepPQnQxNuLcndZfrZUuuBnBtJR",
  "key4": "5MgBQXFoZtg3oj1Uyu6d3s7wwCDPik9exUuyfpBweaVCqXewjMSnWo9aBPGhCyGwc4jTwtYo7hXkegfCa6BLMm2y",
  "key5": "5RWsH3SB32xECvYTGVtaaJAPXiBADe3hdMX3THebtnBH9yANXeLM1iPYjMRQYy6JriNwK8d3GtaM4Yfwemq2e9J3",
  "key6": "4KZr8Lq1bwwV8uyN6XVHmjCrsuQ9CvodLYNJ2gausyiW3CaJi2pCd4iqJ9FeqUQtKPx6upzmWPiyd2EgjZKT141S",
  "key7": "2nzLox3PNRaAoovuxArx5rnu86TkSdSBqZmdd6w2ffJYCecLmbYQRgQjd1tSiNk6J6GSKPwvN9rE5UgTxvra6qEw",
  "key8": "asHPQErTryBuT3U4rRHtPRb1x3uUhuUFw1YAwtrKV5pPtANzfavXpouTmZf5yJDuTtVNy1qSpuzY8L2VrTTsWEx",
  "key9": "4n8RrgBdGXLgaGkhtieJmvJuAxyykuzsrQWYfCJswoPgiwnfhie9vQvviB1vE36YUdcVhf7GgpaCcYTkYPAYtFNK",
  "key10": "3CdeFzZpoH3z7q6ch969NVE3duLSo4dnPqUUzLDDAk5W3GdhqAfUv8yyLHR5zvAwRppMgH1iC76DksciJPHi7sr8",
  "key11": "3Jr7MMz7zLQx2yFpVNZfBgo27s9CbY1jxeHfRe19bnmw9CakkmnjX2C996MkR3WkUiKvbzgkDuFpVyrt646jhteg",
  "key12": "44xTFUTBeHPn45aXqunihtDGvKJuEjwym9MLtgVnNGEMjGQxABZF9mjHkVcGp5DJv7YZVxWAJBJMS1s6WDsPrNXN",
  "key13": "628SwoVn5a2F65aqxFVWPD6LN57wji6LBvr9XY5ykyKYxxJwwbBbpRgPEqXvfaeaQDDMzigaJQgpXZQtu6K2oTKx",
  "key14": "4PWGnwSeyghUpyndGyHR5zaswApKHLu6f4KwTjZDNMxUUzqm1EL7gmqixo7ywNazASDmrQDDZQaKHkREca9ciaYs",
  "key15": "4cDiZeVd9FWdx243baJxH6drcPy5ZyXUA4fLtCouMjX9XBBCQFPYPx8MsUc1KokDJiMGeVdKmcJxJGyYQeVYZJCo",
  "key16": "RS9tCMyfjxTfAkd6wN6CtnUY6hoD1fGh5uTf1kGScqY5RwcTP4WhAqQhbgVucNJ7pj8CJcVh2C7BxLc4u5REKPb",
  "key17": "5vLsU4fGSu9wzPTtPE5U7kJckmRNMMRS3yf3XEeR1dXSVUbHwphxWnTdN6cKyAnXfL5UYcD3CftE5VNYjFr9kwVA",
  "key18": "3wRBy1QtA4DPrU59RiDniwTrGSxSrSQLxVsfpyvH6jpdAzRZBLj4jjg1oi6PVkkxrvxPFSADT7gShSH4cM2brK1m",
  "key19": "fPzynLXmjvviV5b3F47zq5Y1qrWXYw1PqsBp2WAu3ehjoHj9hxgccMLixprqwQeSM1REUX8d1wrgxNz9rJZ8r6R",
  "key20": "43CDVFnaDPK6q15rYFHVW8iyc9Q5GzrYpBLspAWXCcdAestPD2oUSeUaovjnSvm14aqi3XKTLPWzWa8R4LWKSNoz",
  "key21": "5S4gAQd4sWdBeppXfWMgdF9rZNuzq6wkomd31s5hCWHgQJuXPR3k2g6EnmPRzypoYAoqJ1yqupfF61bQKPQ3WKEH",
  "key22": "251t3grkXVLr4Lw5mtzyP1bi1i5dgusGWdPqCqaPDn7xm3nzDcenNYB9Tqz8a8jBRZDnJnYR4SZyMPgmyrUv68R3",
  "key23": "5rHFiye4RNyjrMvJ8kNkCcetUT7MbJ9rcqAbPiWzuoFKzZiVcqWMFnG4oMjpgv6GUUf4pjNeCXf16VpCd3ihqcNw",
  "key24": "5rSA27nGj2BwFcGSEozkFjpdUgcGuXm12SyPmgX55BKzDhQqNi7S5J8iy1G59WXHwfU1BVQJ7qUKwbJRxsnjFd3A",
  "key25": "2X4b32PcNAY7tSVJaz2sm5BJNmNVmqrhapMbo7SFtVCYPdfEcEATFNVULuqQS48BJXRr7s5g8xEX9awjjHN97Jav",
  "key26": "2zNPgsx43qjKkXgoGVFVtPGx2FNMtT1y33cYhAPJSKj4JccqXC8D6ECJoFzSfeqmanD1BN9HRqB3KqY41qA6bm7q",
  "key27": "3peTGMoSuJH39cncSq2ZFBQQFoB6Vy8A4AvcWUBgvp2unLvRLHmokHcFMnpZU4ateJxpXReNJnpKgXVoy4734ucm",
  "key28": "VPGadaC6JjSjgRcrTv3feP9fWffCRkLSmPbU15RMQ8h1MLRjaZJgAT2xRVUn9LB59wCu7SFw8qggJosgkZjgDoD",
  "key29": "4PxaBbd1ZFbPiv3Z2otE5JdQny56qaaff1hJyvrb5we9Ku6QJrMdNZGufEYYCaFTje4qKNJ3frqPx1UKrDXjw6Uo",
  "key30": "xFQcg998f6uJ4sEVY4JPmbTW4yp2UjkRMe611yKAZpAn1dfMQRWVgHnqCt4JJufwzUj2JEBJHniwp8z5DcodPRj",
  "key31": "UuaGvscDATCigKqVpnPC1F6EjexkYZAzABgMQRC4QLeBEhxsjLYx5psBCrUFAQJVuq7eeG7oQ9zyapvaj6pCAK5",
  "key32": "MhEoC4hHaguZTDuq8cQTUSUqUfK4EjpLWcbssqgvTSugPZ9N71feMB3m5NZBCbRJ8ELpbnzWpAfyMzBao5uaV6W",
  "key33": "3Um9y842yQCXfQk4fNFGWgNxn9oxKYi1YJFaReLzDcVhvYftfxtvdShx4gom7hynCx8w9bakVCyVYcupVjqfmYRs",
  "key34": "4btgJgiWyLiWcg4C8tHNAcijssmRao7nXAY7VZvUR8zH1ESmMu3HpJe3ddR2tv8DSqg1DYvRe8m6PB2DdDjKyd7x",
  "key35": "EVzjAwgBPBWTNWMtDdL372DprThCaXx8BzBXjKUJH5CaggM5eU1vqXu2xpfRFenSrQMMWkTmD6cGbqjZTpgSpBi",
  "key36": "pSbfPNm2Hx8Be5mMaZzzFsbknnh11WNF3QNBvyYWq5DJPEgTNQr3S3H96EWvGDFvv99sMAdZ76J2keARLxSJCDq",
  "key37": "yDQuGhBqxQwPMpNh9kX1pKEKEfCpYRA43K1uD5nj9chwogff8Wd7xHPEoPndWmVjnE4Y6r7j9MuULSKWbvmhd7T",
  "key38": "4NwvFoR4LgX1djvogVa7Ba4ea59kzhuPmsdmf1gTJvsvRgH37RcqgKD26EoyvAq9Ew9AEs3S7nPNCwi4vQoyVeGP",
  "key39": "5T7janrLGwkJgxr9rWEPkhoNYTt9iwJYkWAfRDcVkjhyki6dfVM7X4DuoKK2CpioV8jD9EphySqbJdmCKYpokX8b",
  "key40": "2byfiP8mLBmQrpsJeVGrVVpAWy5xQnCwxmScGTN13147kS1uzMDTybpmQDBcmQ3v5aYhyMNTJ8mBWv2P3EGAmd9v",
  "key41": "BvKHLAjngsHHHzzXp8p2wE7bAZQbcZ5rtVfAW37FHKtYFMUs6C2gSjfVVVYodZVyrRdT3UsShErxWG4poCDCuVd",
  "key42": "MQZAZdtTpMF4cQMq4Aqw5cWVzbaJ8CyuDemn5DqP1XNDVKPhH2sQxVb1oPm4YjdGrVk8hFnwNJ9mzQsxemgMukM",
  "key43": "4PjATjYGhh5fbMQeAzUjAArvncCFc3ggZr4iJYeo7SLP2r1zVCngi92TSf9VMd3avoTduVyHM73RWdncXQyRS3uK",
  "key44": "5c3znpPS7kD4W89etoN3DQjYu81Jwo9SiUYguJMZ7kT5mt46wN14SVJkACz7NafFdr5zswVRzqr5rRM7AEXSoxsW",
  "key45": "2wzpUifM56cDzQg1zNyuTJGtrP5nkaWmg9JsjigNjGjqBXun1K2bECX7chj1KNhLEMrVRMULPzxJg6TVr1cHUQuz",
  "key46": "oz8JTcRaMXfH7T1SXnKZUNmMFSxoHSCmup2yzjFDi6RLJRsazYv5GPG3KKGHUmnTW1Wo647VcrPEvC5LEsSfgNH",
  "key47": "3WW4ubGMpVe5ZW7qX1d7ZSijuXBT1uyMaLU1b5PSzgwPVyQp8jQM4veUgivaGwB8g9QdonV9vFZsLthhiR46QT2G",
  "key48": "4Hxx9YykdAutymqvB2KEuNoFrggBzigRjvQZ11PGFW5nUjqVicq9zXPVyKgu96tesGitqKTMYFX5JMLBS2c8Spj7",
  "key49": "4y7yvtoZttWCwqSMrEy8VujaDe4ihaqMXwDdYjcHu3LPZq7SvAuf9ewhdppT51iFr4ibKLUBvFRfWDbjhg16mvUr"
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
