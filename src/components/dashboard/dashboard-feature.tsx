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
    "2itH1J6CvDXaXXNiYGLB7v9fx5ue5Nc28pbpdpCAcUSR9L2kx6JzsvjybtVGjzsw1c9roZcX9q9FqmFvFnAsXwd4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kSPnLh12rr3hJAV5dASSE5bSKS8ZJTW3n7W8Yb5mhcVJk7w3ivsM5qokrktANeQ4JbqAbgdN3xj1Q3iUzdfm8r6",
  "key1": "2qY9xHqQctnwaNcs6ifnE9afPHk5dXVhzMV3PhdF9UTkh2quDqbeK2LLhdwGJGiNcD1oUsJaFDuBp41LvwAtYWBB",
  "key2": "2t5BW9Uhevv2EQj7kbNNrCoMjtNPtL1emrGGNTcbmdrgaUxbBe1qWcjKrmzx81EkQBxPo3ZtgnSekUEqYhZDszu",
  "key3": "XMKrehjYUQFATpBzZs1niwsjKGCtabKWHQ3vftqgtaSRs9K6TWG248HdebhSNQKW5W3GHz3eJs8FiVUvJhCNUGE",
  "key4": "nA4iTmNkuzsGr781qmKyQkw3Khk8dPZpkKGbRYq5RBnAj7UXk6eKvYYuQ7yRD8H16Kbv9KrC8s1xQ6hCRwAfJFr",
  "key5": "4qD2pjjELFJEc9Fs4wLTe3zu8ynV3zA1q5xq1DowfoW9xJE2oWYftdTuwjTDVBaShp2cdXE1q8QbXmrWTZMDyhyE",
  "key6": "nc8cKxC798wDZUJZA3UoG2z3ABiFqQoM3zCsG9wcSr3VDKEghmMCuRr82xMAeHZZ1FzLNVW74rhWmPfH8Pv3Tb2",
  "key7": "53u8baz1TBZ1LAUQqipu2VN6Bv4K3jJm8qVwkWJmJjYdwNgmaMnZWypodT6hcjJJQDk8Se2H5nLDEwJp3mJFe9jd",
  "key8": "2FDyh4SrLfs7v6AdeoRuVi8XWGknFXggep3nKVgED7KMeWGi6MXYpfPQhbqVWsMbXFYWpn7MaPWwp9KarbNTWdDU",
  "key9": "q7ZQC5p7W2S32PsPhR3jvJjAx4qzJmGd3uxkrdYdyW5nxBTPFAedHbCJujDLDM1bEXa6ZBaN7UnZE9tvARH23eR",
  "key10": "4NBJZxij9sNrigzudNg6PNgrszWVa7ANvmRkSAdsy6Uv8rqgYxYNYAFz9VWNS7MT7GFmoJU6zKN8KeKRiRbL8C3L",
  "key11": "56EV5fd5ZY2Fmz1Z8f53SRVQv95gfMXf1mtmacG5caTgCjWvu7nt7iRf4YXGKtnakivjbh3D7M7unW9HMBDGJBL4",
  "key12": "CZUekUGTfCdKSAVkqdHrYQQd8hweQ5gijmpF126RvJSFEKUZrXWFkCqt7m6SLSGNiLa3QRsuBjRuTYHfjGxPuHy",
  "key13": "3sMtBW4HQeXQRa7wDtyrP78KjmF4u4NMZc7PywTJ6gauJsbCHZgMKXme98F9JGDhKEH9j8UXgEaHPziYcUKzFcu2",
  "key14": "XpTJfVnSGpxYCweVk2SeJZtXTBC45kbqnmUF8XMsdNEJKmsjjFKihk6Fp8z5w2ktBUrnKkgj7whHqNy5kLKG92H",
  "key15": "J8Lmv34wK6TXfKEiNKWTvvrucKPBZVuDxs3kxD5FDXPFCoWA5VmowjcwN9YxE7UVmR2KX62yG8Ld6ZJv5uF5Jt4",
  "key16": "5dbGQ5xZMcDbVVpXaRVUVNt2FHXg9sjV1BTWQe82Qw95LWegW29iNQwHBNTVyZy8jC6rJ2zSFhNHpujJdb9ptf31",
  "key17": "5FJ4noq8zZ46y7xqF1cx4SUXe4iZ9CdGWdsyyePqR9WtDf1KEcWTMYAyce47MRG156e7wkamG2QPBwgG8Hb39a1Q",
  "key18": "3AE6girKo5CtSiU5BSr9E6kowp8uDN4CrZPHi8rYcWZ9jEnFEC7gBLKnxJdNjXsvfKTtYe8R2TUs6KfH9rKqFUgx",
  "key19": "37oiPkKVtJcCPxNCdCPZmspaocCg3UeMahdrN8Dt7iDLaAvSH8NhDb8kxfT9GGhQpgiTJSdVranWzAT5kxyPfqQN",
  "key20": "3R1ip7Zgz1Aga6otRxavG1ZGzyNraPpHsujxLeoxmfqiz347hZwyAYoj1eh6MUGjSJns7r36ybY71id2SXYuQqUq",
  "key21": "31QoE6GbpJu2J9Cvrt4QUDk4nzV9HHqKJ4Df6FXFGkA1VyoRegatYcp1CLwmJgmisPjage2fwuGqnQUnHvnXoW2Q",
  "key22": "8MbaP1ycwpe8qHqwq3VpEq7XFsbo2tYH442hFFefMHrcEE6haft8sLDSY1xYrcJU3kb59sc8Zq8z4CuJFz7Msqc",
  "key23": "3dnBQUVfP9wwmrdNC5kYR7Eax9gaPEXyLLnnDySzVPrJcuqm5BxCyd7QQXhCsvuRGEPH35pFWPn9KM638WU2WKLb",
  "key24": "39JFrijxor2NrAcNLRT1vXYeJpmCcFi78Xrg6Jr7RpjEgqRPWH4fd7qZuzo4QpDhdBRVQXsYYZJYwZLJg3WmnRv2",
  "key25": "2mytioyB2w2hsG3Z8idn3twA4gvnCTQxWkqoAvnQ3zp5phXntvjJrxDRhfTLLRWzCL9P1B5zuW6s5qKcUWakxKn7",
  "key26": "26FFQLobQbssE78Q7eCSTprNSPttbvAbjMedsuGwBJgHaaBtZi8K3X4w3QyY5g2BiH62VRFrxdNe4x1K9St39YNW",
  "key27": "369ejtv9Cbrk3cN43oBpx8V3HdK9xtsSnBD1yw6X71tZ2TL8Ye29oXM1YQnr7vCNLxJ31hxsBTRbTi7Tycs8m7ku",
  "key28": "4C65Bx5t2JdgMiWLu3xbwVeZxSsfokt3QW4o4uAMPh5NXaLtnBfV5JoyC11eUJq5kSwVsMhhhcgojTuU9chCmGHd",
  "key29": "STqFHUswbiQg8p5TvP6sf8UF5fyceX42ywGdSbRfhUTuBz1HfWckuuagbYr9V8kgem1MQcWHEuDfCwCEeS5rJTZ",
  "key30": "3mb7HadrcWsViNmNeVoK6RFkPJ5XwEHznWEp4RaSwzmsJsjLTgriM6sYixndWMCycgfAdYp7W9tMm2s4JJF9n4qv",
  "key31": "42HZmQSHfMQvnp1wayCKe3ZMSzdYXB6quZtMYEBT7TF9rZTt234U2j4BxPUzGzxXmy7fx1ekg22vLvxSBALnJuKg",
  "key32": "4Q8FAJLsPf6StnwLv18LGZvrgdQdEQQpbDo24VdE1NYSVaPrdQCZbSPQeSPEaH1MyYe3x3spUivH15sekFVCzgV6",
  "key33": "5u1gKMCqw2C269VoUBS3Wu6jire7Lmpcofq9qjwokhw1kFzYREb3a4uFSB9nPzP1jHpN4ghfoL53XRUCmN7oqQmh",
  "key34": "Zaz4M1YnH3oavd49bLiN37hauUNAMUSKvAhGqwcXkdBErqf4ePKm4TJ2bDU2s8vbKVeM1Ujc3CX9KPJ28apmD2n",
  "key35": "2q2B9qYt833CvSeuTRu8ndzmf7AwHApmX5GaTX63pvpikxoWNP7HgfnkVMUmNtg8somJMU4dK5dLbMuYoRp5Wap1",
  "key36": "2Px47mUEWxrQryAUJS3dj2wiqvyZ8aAnQbHykYJT8ADNvp8qZVnat2UJHnHLtjpQzvKJ6JKmBKzoMSbFcHNVN8ei",
  "key37": "W3hYmKqeSgdj6BQB72gWk8oT89485gjhRSMeg7dmPTwm3NGE6ZMVspZn7rmhbfLKsvjqd1tXDzTQgaGpTMwydCG",
  "key38": "5Me9jzruQSMgwd3LsRpasnNons1jQb2QB1HGkMFpiWdYKBhbWcQLJRQqpyj3Njr2DAvki8aECeRC4kK8w9BYqGEu",
  "key39": "49B4tffRSBZSiatpsDFMsxHDRcjv8zkrmXqcDx9bfR1ssJjPmMU9BZU8dUcf8eBHtqQ5hRHuqCZ45w1dGkD6Hatq",
  "key40": "4qucwqZaAqLBZbbNk4WDeGYUGPiUxn6dXAmXMkcbfJouthwqCocWWFVxH2RuPCPAc8SGBxMYCEaGULMthKNP55Ev",
  "key41": "4tFd4kyAmWt1XQnZMCYhWAJ2okdrpQt27M3ENH7rpPLfMp9nuqF3FTC2az15QTsKq4kiGMaXsUHhkv1xWtp1By2r",
  "key42": "3D8ytUa5KYZ6gZuyYAc9fc3ecNwwXNaou8f3hjwsxQAL76tTWAwxBxZ7qYoot6UTxvCDvWXWihQyVqhd585gqRmz"
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
