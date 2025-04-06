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
    "3AxnHHKA2ecWkegXxbm8LFRgC962iRphozJwSisNchCzihqK5yJY85yGxcjLEao5gZq29NMx87tym98hdYdyVLUo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XWskF97QgRyEigMg6pE1jUzAdNuye2ZCbVNDpTfKbYrVwo3cWxhN2q3S8YTfyMZKEr6TFAa7KvtnoWR9DGcweCh",
  "key1": "4yF2Fh4wvHZWfBkcWhbt42XzNaMVzZcn5jjx4Hq1nPsMqde6PX5L7qnioJrdWBowTYEjAZRGKR3rfHb9bJHhcUVh",
  "key2": "3ovTdiUcFqaMGUJHgGzEFp1KoeQeWUnsw2HvXEGctw6iWf8JmENrVtdwYLYfzfrDfjZ1adchW2tYJTVxhTBjcccE",
  "key3": "3Scy25How7HY8tN9NVyAKzxWiZMAn51MzxDdUdvjb6Meziin5A1zznh7nH3MxTQEAMAMTDc6HsMtShDUz1yGLupH",
  "key4": "2xkGzdenEwGZcNgpUwtW7bPkAvXRgLAffq1b5NheWEuKMxNi2E3HaYuaoPsmd1twZG5upSG2CzKz8amNNXfjhxnj",
  "key5": "CASeLtiirXBqAUjCYAwCjPRTt7xusHyBaZ6BsZxRdDG8kbvs6Sv6tD7z1D7R8rnaa9d1PVB7DgYXv8WbUcmhdFM",
  "key6": "5w5BQSKicNAh74bU9CfRbSdt16RCTJcixpCAucrqTdGLWfwc5EomTckdkLfUeiEzBKsdg92QkjFnsFjFoNKCaRvv",
  "key7": "4dvc6NnYG3euccTf5jEtZkiz9CUHbgLYvZn7RbuiyywRjxX8ezAQiv1WBUNCWXfimz2ed1DQXSSKvvyNevCMEbK4",
  "key8": "4iVSEwexRvpFTbnABqUPzpqhGz8eXDSAMCFjntBJYG5m2FXs4QUUxGRtn7JshRzYy5eBJrKXMUzAKgQjem9ovVK2",
  "key9": "3uqBdspP42Zd9gmbBCTdyMSeJupeUkRMrNLiw1RicdwZCsbT7319ddGiRyMM6Tp7GmZ2dbBUMqNa6x3gYjJrpsdp",
  "key10": "3jeCMLgsjTKKeK1zUS2gt6h5EjYHnbTk9rPy2jqX2zj8DBjujqp1pem1LFchmpsbc8FGZXn9HC86ANdPSShURYHg",
  "key11": "4W2i7egiJ1NNBWKobDL1PTTpeTUfFtgARWKdzKEFAGcZmh6i1Lq2YZgvDKcpH8E7LZEUQBMLTxv1k1j3KsTGEbyc",
  "key12": "2rmW6F367nnLMMvozkre2Une7ktkvp89APcY5BY3GzNY6x1Artci2tFbfzNWDGPYPsowbJuqAhbMQbYLxPWkberA",
  "key13": "3BKWPF7vBqGJnEgb7rJE1hsLTbPj9wBQEuWgEcSSupJ123FKvt9Zbi1eEmRFBe8E5oFdRoEh21g4VNiKUyjQdZHF",
  "key14": "4CXwWnVciACYjS6FNKNAVGbt76M6XFRBm7x1M38cLUMTHQ5aRgJFRVama2FTjDDLCs5FDfh62ZgHNYz9aKe1gEZk",
  "key15": "rVE9sXYrYCtZpdZRjwSxVN8gwbhuCn1mGUF5SbksifhV5W9HR83W9aJ88M6qqAFVsv1VGgv1yn5R6vGWEEr2wgU",
  "key16": "3NuCRmszYudH3A2j3xLxEVhbgaWekKD4rrCnsoDc1UAGB7PcsYSPgGRmQtsBPUwt69e3WX6ZnDRZVVnzPjLqRYAc",
  "key17": "4qamrFAdnJ1L3vbnmszHyE3Q2392mTDC2nvB5XZmQMo5jvsgBTmpRdP8AGiLgYnbeTgEQ9urTgx1ir4JK3s6ck9z",
  "key18": "31vdwJsXDsqVnsDTinQhTn4n19EMpNAFviqbdVT2jU19pEwNGob6XApsWgPncy9YEqeaCU6M2pXkUj3Mo78XWich",
  "key19": "5tLMucF9yatd4jqTygpoCEUEdDiGvGjv1M8L9L6kGRLVwyo69pVxgD8MwMm9ZVyxxjthCTM6BGZTDhqtZXUe2d6d",
  "key20": "5baHfVMUMumtHRG1eg7S4ufCtbATy1bcrAhZtg35dNX5CVP6NhKrr6EuGKAnTMQMLhJVk8Sxdf89sVUPi1i2NvJW",
  "key21": "3rfNiRTgKjc1E6JM3dMSth2dhRiRt36VDsR5do5tWJ9FkbA88aqqdHCQPLWfQkq9QtGXQ1GnskSKLk7jDdqNxVH4",
  "key22": "5LBr4Grk3jk6xqsFbVnei2BBuy5eoRLDD33XZ7eG1cxyq7epFxYXDcQBoqiFrv2KprUcnbnFXZFRryCee2revTxN",
  "key23": "28ii9Gkyum5ebebKBWDJ3ykUNQhXstNuYFy3dw9qGBKjmdTYKxHsgSBgmQcDTSLzjW9avEhzsMExMEq9zwLzjgMK",
  "key24": "4mfoz8DvTLpvm5Kc6kkoWSHdc9SKgm2QjEULBivaFYGTZeEmfNpaod6cSnhVqw78ms9AdXDQVxsaJyotoxx8dK2G",
  "key25": "5WaQoaBfwRFTwSLm8R85jUDwrecHaCa48gLJT6Wekd8Fjc1UcsF9QhgcbExacrnvoF6SZrSatJdw2iNuZuxzjXxN",
  "key26": "2sdQoqC1jUfaMnw749nMoa9bgKGMFpYCaBoFk2RWBKvVFLxZtFK4YLFcVguwovP5sYiGsZkf5A9iDEgJnPkY354v",
  "key27": "3cFHCsEYdCbrVycmAGzbAXixnr2bTGnhrAz9iFtufBp69MoFARhQRZ9VWNKrxEYpZ4zWcYLbs16SbnEeN3pC6cQY",
  "key28": "48j2ZgCCkeWJ5n1kgNkCdutiVvBehkwpRazs5tt7CP8jJM8pyHjMSoakRRJFU484frBUuLETgRpYy6RhcdhEaFCg",
  "key29": "5mrHhfWvUFEK8D5yzUgTWQBWWdMEiqkv6aZjTDUqznJGX585tzusLQP91dya2YfrVgDNVV7UAx9vmPNnzuNdinnM",
  "key30": "izDAmFGqQ8HYFPRs8P2qVbFmjo5mK8ZXxsB8jnWRLHTvaHkcJkDZPFCkv9m3oFfuyYdYgcMFyCoaTTLRB7Ww1Ct",
  "key31": "Y9LvyB1ukP5guwLSjXG7xZKQmWkvjwxRwmniKFpq4NhzvHBr9Cfy9CGXndDsLuwYxaAjU3AA8BnBVon8bWWRkSS",
  "key32": "aVpEvPEViMhZYLt5Cz5Wgi1xxBX8QcXTrJBTrsWsHRynhrnHySmj4iFXiWHSAt1K7exupgRKnAxXLBc3MnUFAp3",
  "key33": "48nBfMUDG93yWEhN2dCjonsPw7ohJ5Fr4aJan6E1cHACcmacsMyriQ9p3yd8NGvwZFiYBW6FKvn9KxGqpAjtfM2x",
  "key34": "5BC9HXbQqBAMVE89ApDcpAmSNCTEycAtyyqx2nAW9ASc958ShzQie1tpVcBkL61Fp3H9cxewmPXey8XZdBcjwoMg",
  "key35": "3ec4TmwR4j24iBoYwtiFp5KLExPzQjgcKkLmbDp8TK4uVxtNoHgRRtmtbFqjtcQPJ9phCDwfKFJbfW4jun6sQXeU",
  "key36": "bw5jz9mjKtKm2wbdDFeEwVp79WyUezQT42V8zgf5dK5HHpXFRh6gUotH5jy4KhPqzBGxNkzsHtjZXoMbcFhPpfg",
  "key37": "5Fde5BhcpemjrPhevAL11gcwVVk3LPfTs82Myqv6woV8cEnSeCzaGCjRxVA6o6TETNbeKJ1UM6stChCTqmrPng5u",
  "key38": "357eAEGmP637QE3RGS9vwsTJNfokD43nM325nL7rX636ioDLVDCVZwLmG6vsR1JF1Qz4ZCVXHbwDi8JAupkLrrQF",
  "key39": "2GCEjWDNSfQLcWumAEd89Z5PTwRFHZdc2WnE2RaQhbkfNTcUE4xK83BVrL1g1z6f1KECcc6dbAqdKiv2PvCyP52f",
  "key40": "ZrGiMRgxSpspFwLoTm79DCHbw87URAj7CegwZ8rzu9p3D2dncqXohhErWDkUbszhkjNe5kuSVimVSaqUQTVgRDc",
  "key41": "g2KUDjPtCWX97smcgQswBuCWHVxUvqojZam2KTY6tx9ofsGQ9byWpDtGPGL1cEWALPfoRJ7fPxSbuuKcx6ZJx9E",
  "key42": "64NV5e9Kn2JQPsrD14ncACTv6F7sRukXWfSgRAAD3wMJfeEe1jwj916p7Gx3y2zmsq8TUJiiHSCjvJGCCemy52UY",
  "key43": "3t7D5fmPtoGR7eXxZhT1pqVA9WWF8GeqqZo2AABcbN1Aj8AKWDRh8j1rizq4FLEwdJtzXwNjgvZdzQMUuDDSTPdD",
  "key44": "5tRUhKdfvgVoHnB8pZop2LbLoDHc5FQAermTTiZpNQcDK5DSXrWDxWx1JYwyZ5DahFzv8fNHwwuJqw8CUBdWqogB",
  "key45": "58Ax1gLcvNZhc9vF7cA6XRnpNTVe2sjWpcQLCHicTHR4gLgBGejAE8F7eHnos8KRu7kXfeWqwGiauyFeVtP7NT4E",
  "key46": "1t9jy8kN19T86cJ5536xAjdqUPqE79dDHvstSz628Fu1BRe36b5kNfktw6ZSXjLg6No39c3bhJxEWWWWHvbXt8C",
  "key47": "56u2QYuZk5xA5vw85kQhMTgG5uM26qHvfzC5xftghu5sXNnFYfxFepbiPmcaV28DXHjWZNtPAAFRCCUHZCiLNZ6S",
  "key48": "3Fhh6txmau152uZBKdAT1kD8cPTsmfPanGq2PxKkBxJ2nastMmPzWdbSAYSRmw1pZ1kHZUXkTid94fmutK1NBkAC",
  "key49": "48cbkc6LQukpDpYMcboR8bfBVSFfAuseQEV71vjPiLLUUv7vSH7MrVrhfbN7MjKSua8nqqh2JCTcJ9zEhB9zbpGQ"
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
