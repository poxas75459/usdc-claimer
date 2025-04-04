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
    "61zKxKefHvNZB5Kmw2Ma2Ri5TcRuATLvH7zPKXqTCNq2weEYoLMVRXpoqawxjiUVr6AeE38USRV3YCxEKSX9KMHu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xq8u2jWvgNssovGWbWsr5Wgxs8GiYmN2YWDkpWEtNhjdvScRP8CLgTzU9GLMC3Fwhx2H7TVaR2Vgm8ZRGFaKZaA",
  "key1": "3Th8xaCf5C3r8wHnrJSB6x4ksTu51B5MM7mCpsq6K7U9rSXwzdQQgXamXojubdJPerHrdYJW8EueQ8w9CB6wTqXq",
  "key2": "52VLJ91JC71kJunHTKu7hm6x1w26CnK6WkRTNHcVrDPE36gkL7NmFMFo4oK4AdusGMXWAJpPDnMJvxeNo9uuAAui",
  "key3": "4wAnAVfmeKGg5QdcrfYQ2ZkiX3utgJfMZQdBVHudFHFriph5ykcWoJFSKPwCBvsHXfGoQqSawhWyMAvsTXrJDbt6",
  "key4": "5xGLvNi3Qhjcr7UeENnSsFsVKpieSxXRfUMgPXa3ju6gUaNDGqh1QQpX8ExyRJP8d6ALEuEYPA61SWXgu7jbwoEX",
  "key5": "FpXMEjN2LEPsVxL8bX7UKtMWBXidX1ZBLiqNjj3RwTKfsWHHLMD281Vu1pjwdP5JgWutLWM5KMmTK4qdAQgZxG1",
  "key6": "4K14bYiunxRNWU5f9owyjTtJWRbGKb6KneVtpSB4AHz8dGmLiKwvmHpNbjxsi1SA3uL4HvC8bmssUv3q88eY6otZ",
  "key7": "397pphrBz1gtXfkWLiUF1tGJ62hzrxEqrWwkkbb9ngVYyQ9EmcC9nX5PSQhShZwYhDTwEUndKJFyzTNNyFfwYqzz",
  "key8": "5ZaTwkj288DgnHPDRYRBu6F4FsSg74mhpniT3xhygWcFA72X6tR1EDtEeAzMdWQuich4ehap1yfi4kA1pPJ768X8",
  "key9": "52bm5fiJX22srKr1eAKzKyyXWP9Lkjsb5souvhG15L1XYp4breeSE7N4CAMKH3pxx7tmHtf7ZQNQvqT14BUC82aE",
  "key10": "2z2MWSanspYFYJdeYpCWTK7Yr7BQz262tRFw4RK3RpjTSXqhPkpwZJfcTzXE6QUVbYvn2sQDAk43VcxeE1pkjMV6",
  "key11": "yS34nPLqpY1tmzYAuC26X7TVj3zo4bnNKfpFTdxKmZyhDDL984RpWu7jyep2eXFyYcJL9rWr1F78mauAVqpQpZS",
  "key12": "3XPmocPNTJ6HnbkVcifp15m8gmrXGVkMgUrcy7xa1DcphHfXhei7hPYo5NfA1VBJuXcKPrVMZTKF1wU1gbmJRH7B",
  "key13": "cEo9JtBA7u26zdkRd2RVYzMndqn9EnoV9oBps4cSt1rS4Hiaub6LVug91Fpffw9iWdkeJzwVuAe83X2CgjMXKV6",
  "key14": "39dZXwHxS8q52SdrKwx2XwzDmwecuUoAyHkXzi4YdDoquhtEHtJeVvAp55KxRWoTuDphkxZtscRhXtvjcpYU8r2W",
  "key15": "3iVBJAfGuW5krjaXb2GnJgnCAjUHKTFV6PZdfb6kTYHXLnwPmdJkzAysefhyQqk24nhudrQWo8pq19mY1tvfz6UB",
  "key16": "4965MvoF9gUnz546M67T44iWGzjuenpJQtrh37d1aFGBtJEumoFg7aUEzx5ZadGtx7EqawZ1tmVzHaekVYxq6Qsw",
  "key17": "5LShgChjjwAwGsbsDmAgzGgsJw8yvw1ygQu7FPYxMNCj1BEXJSqBswdmkeLghkFJ1tVk2bu7EsWspJpK4YpWUovS",
  "key18": "2XDjxD8BKrxMu5MrbCx8CpvQnZaYSjuLt1GG9KrhL9yBHKavg1mzGVkryKmJ5CqdECgBD9n1SX3v1m5p6DEKWufx",
  "key19": "MLD2gK723paH6VjvbGLe8Wwz6kar4ifEPUPWNeK1UKGEgLoWBjVDYBqDn3vqkw156XGC3TSd4YedUWdEArK4u13",
  "key20": "4JEdkbEWMJ4GRacM47htFwZK5xAeWF9RJf3bKoTCqb6c8Qz8ZvtsdV3Hx7vsguLk7bpE1xb9WXVgir6ukS1Gz3k5",
  "key21": "5kaUmgePSAS8R3xNyZGgEUydpuYsrT52BrahBz6MvW2VE6Prza729nAfxRoTNu3HyPpxcjDsTBpMV4EPJqbXbzzK",
  "key22": "4bNYqCC5E1Q6XWVEByJp8vJGPzcih7Bczqk7YVzZnUJYJR1nYn4ymT5R2pXxwDq8MUhtKh6i8r2gowSayw2fTtQQ",
  "key23": "2hFuQ2ZcVA9USgQubR3jt8sPyjwCtwgSz3RR9tLheVKPuTCGvLRn1BKrReJCfbroFK19PV9uyksV9rWZpaPkb494",
  "key24": "4fzaYz9yV4TQLeZuczucmxuaFhNNXk7ZCEdE1g16bvv3ou3VqaP3eELkKtWxrTnFbHLe8whBB9xC7ikFzw1zgKFL",
  "key25": "3NztoDqFBiPxLk7Hy1Ty9Ea5Q9MaTLYnBxTpzrPDaNhv5AbRfHyMHdBCKHrS1HSztKPNu3d8F8657vZsTaffacyZ",
  "key26": "3aBNxYxTMxSeaTxDB4K2SD4zpCF9q5pqwrARGXaMxzkpc1omJezfwUp3c3sAAbZiie8C7EzimT1uLjqVuuBHao9d",
  "key27": "4ZuwU7bpRWhDH5mny569MF5wTwCQZXEoJp24oUDWRC4Uj8HuVRaVJXGsgGFrBoxi3fVQxRu5fv4QMeiYspvaU3cr",
  "key28": "2pmnWEYy95HCXQGjNrjtchkiEPZSCBopVVksg5hMu1yjbZX7XAo11KEKfU5suSyq8r1M6KsNvxUiJYUYpXHAiKiu",
  "key29": "4ZwTQA2PdaCrN7tV3QXWDQhecDDBy1rzN5A4Scfpbuvdyt3veLTZtP86gsSLafGNnPZiRd32nkgr5ymU3jyzZE37",
  "key30": "4X2QhS1iKF8YVXBxWuX3ph7Upubq3efUpTLdmv7zv4VoDWgSXkoxNKeYKfyicoKvUMerjfTc4sgw3oYd1VMBQXi3",
  "key31": "2sD2pXzymTZootocrrBTEpw2HQuvWN16PwbLjYrxDMUN3goLnR9WfCZSBo9rD3SXM5aipYoLxPMFDcGzDispDTV",
  "key32": "wH9zRXTHGiECyk3YcV7apvBRK4APjkjQxyvQ49BiYH8r3bnfAKph3jwuaNMeHJBd8J9R1mbomhcfiTTvjsdVEAV",
  "key33": "3wGDJj4DnCBLVVzNeL3o6wfcNsMqwPWteWNyikcJd1D9Ra3T3qYSffBr4TFfWdv5aqSsGZDRfkyCjPUpEpqAqMuJ",
  "key34": "4kx3kzJbWaEkxUNEVSmTWTyQJvNwvEBaEEdwUqDN2qjALdvGWWLmmHGKpZhdCG5YpPsQmYXcc1Ex2KQ52y4pFyzZ",
  "key35": "3TDjgm285sppQNUkiMrxcdEHkDdPbTxCU6H1J29sb2LyBTUpqAXMX1VAS1y2ovJbdtVYBEurXPwiAwjav7tynhR3",
  "key36": "3J1V6iPJVG2wbZ6Rg6BEdZWD2TxiQCMZCdnzWF3p7RMvRvcPRkE1L5waHT9ygxMPcoCRY3NrPJZyTgNFcPVzeBm9",
  "key37": "dpZpndkRTn2ewBKbCCsQiuikB3rFjAwu3TSRhDg3yP73mPaiJ86zNFoN491WeGeEvtQf7QhSdTABEKoxYFYeUAD",
  "key38": "4WEtoBxaRM7m7SoeXpaAbyLS4nnLXrUk7hcBkngPAJZZH8kYSwC9YPVg7nigqMEkR5ATwuDB5LhvYnr34gtVb6g6",
  "key39": "2gVdE56caW78tCfwW2vsCEK25szhi61nN8Ja3pgQmvDyWoGrEnf5zCLXxWthvT41JSfdY4SvPAsxUtcY22dyGw8E"
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
