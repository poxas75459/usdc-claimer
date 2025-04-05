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
    "2cGHwYYZnvnLpzWurScVSmGmypfyHKtMjcZV8RNh2bNgCpgg31CBT3n8AsrmFmSKTqbXycn3VcJpoevrTvZSXDGU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44ga4nakssrXpScfERfwhzhqUPXV5B2ygqvAyS5r68ya1Fw6b26pBNrvEersUHufhfv6NzeA1M4zdoY1rYE1Wg1P",
  "key1": "2aJ6CLbYdfP11YjXhyUHo9kSc4yW6eK4j9Z383HW4C8Gea42MJf5PUzRPAmHAZhfdAhiYLtYMt6ZrbedvMpSVWXh",
  "key2": "3YSSDzgXRFmgSE23SsiT42Hv54DvQtyFv22HJBUG4AG9ARrR76ffc7pVmao2yeu9aRmqhEMZXxiYuAEsCV2cV1V7",
  "key3": "5KESgBq5bdvEVNmAh3UJ7URPZvCw4Cro5HBX1tauVHWm7Sv74DFHSpryHNyTsrg1WJfqL6rfqj8f75mxjZoRn4FA",
  "key4": "3724hD3HJeZbrh2KHMFkRsxqhCFaHKT9yhTnvC47R6uc3LH4QF4VZbE1gQxyZkFaBHMBvd6ao1TwAME9wmqnKTEH",
  "key5": "5iRrJQPoFo63BV3VemWcL1QqWqoNKJoJGKBpBv7GVz1tFotoLqNy7GHSGhPoUPsMFKmNLAToauqUyPSMpjV6NCF1",
  "key6": "3CiUo5hm57ttFYQHzwZ8SwPytoyGmb8Djs5LhnkSKBR6X3xMYyb5Qrh9WTJQ5F2Z9sVhgaejpfH97TM6mwktuLER",
  "key7": "2wgLwv4bPB3SiAPUWUoTJR88YVhuRDh9RCUZYqn8DYEPSjpWW3j8hKF3KsniYHsLaXBWm9CyZ8svUmfRUP79qCbg",
  "key8": "5x8facm33EPma1x3Nc6oDMAWcMZPGuQWo3ZkNN9DnWAnoW1XLDievA7o8dD4tniepDEEmJM2gbAGwaTzyRxa77wq",
  "key9": "bFpq6jkezVWdGPNsE1nK2CUzgnTK5Ef2ib6yWQjVVV5nyK98s1T4drYzZY6UvVUjmsKYLGUcAKP2Vga7rdGz4gv",
  "key10": "NUxeeN4n9YqpgjVkAuX9ArCND7SNx74hxgUfRFd6b5abpw47dRyoaAuD3rKkTvFbJXDWiUvKvPhTDoCf1EVuak1",
  "key11": "3YB1jbLcTv6GrarJRUDiP7gzxaFoyNHyc6Bd3yuwBoH3y19pVH538aXJdRkD3W5LQSKdeVCURmdVGwCeaBYzuSvw",
  "key12": "4XyNKHH2KmdoFgNsuPLwTt4GV3HMuoEMffRENbYfWo3zYsmvsyrvC1qQuTtF7rXyB4VfHQkmCPBbZGE8Uc2dH8Bs",
  "key13": "9xW7VEFW4JyrzvUzyXTF2gMMbphLEnVCLaWGhxzZp8Hq2bU7pNkDx63FEF4D5qhw9974m7bTtHqkAiiodn68iHg",
  "key14": "4i53GdBmd3xdv3v5AdUyFVGXqE4PHnTHoyD2PeN996CGQHsfibGAXJ9kD8HV9G8hVpoetr45HpbXukqJusSm5N2q",
  "key15": "EefEjTRvWvUqqYukPNqBXSZRPHAACxg8En8sphBcnKGwQWbxKPXqpYBXkZaa9DibyAZTsyLG2tSmKwdWxe97rz7",
  "key16": "5Kuv5fBiAhGSKjraEqtSPxqdVjPStatiVgvEx7MErNjDbmwSh7DebVS7oT7NZxsfkFyBBr4ypSyvtM1qAL25266F",
  "key17": "3qZ3LrbmWymm21WUjKNzoNE5oDEVYCMRSfSrjnMvyMPk4MKEsX6FHJvBh6vrxDYncavQWQCxr9mtr7BbhydDQDyw",
  "key18": "22JGdg2ff3tBRPUkXptQVnVMwVVbQ7PxdnPRBrvXMTGJ5jf42A59d3kaqzpiTgef46L9iRPMM3e4kr1MQiZgBCMS",
  "key19": "2CCNV87V3nnAiTTcVrhVVG8UkCCC4fXHdaM6wsQaV4viGbGSTeCzcShbvZqj3nC3XdrC3PihWCu26ekpV4id7jPt",
  "key20": "5XSn8eN3ETZN6yfeAAQZZCftW5XMZbsLgzHDHgHfCzEx6RSXR533JzhwfKoxKEutc9Pi31A4xUkLW2DxFrdVZFfa",
  "key21": "2AQ8G9G18dU3PpRgnbzYQxTgJj2Dv6FWiUThZ98853ycrircG1B1VDAbFY3juNnfHarc2Jm9asky7eMy7n6LQuTJ",
  "key22": "4rtH5XRaZX3KouXWfXySj5bH1NDUEVGZBtyEb3CFSWHY1rNmhgcGZQYtorZn2utjDResoF2hw5R2mXLzeJ6Dcp8X",
  "key23": "5z3BkQFAWzUNPhoaKjfKt5WkjGdgX8GTyYCVH27Vp49Jm3wKW9YocwyppJYvSWmuZqqAVVFekYxnM55EyQi2QZFj",
  "key24": "49nFuKFtBCvJfx6g4K2jr9FHShsp6owtVUsEAEQne3btk1pka1aWCoHdus1DA5KR7tuZ4FcE8jCtrT2R7jYioKPM",
  "key25": "4zaav5RrLM8WJiv2NRSzVGSLgGzoWqgcvqXvmke1pA1CFpqwynqBsSYZsxPH73qqePz7hXgh8c3YkbVhii1DCSiH",
  "key26": "2C58jg7igouw8j9FZDqFFDaksdgagxcL9uCZZuVJYjYcHFaCFRb48AaErNm2H19P63EwGAVJA9kYxBqVvRqzzs4z",
  "key27": "4JXgySkeiEbC5MhrhXTY8agL5PjKpquzXDNGkpYCPoZDWTYnKywMutdWsF6kr5mx5zHwi6V6Wbm8PbKVb8JUSTVn",
  "key28": "48caCoSpxG85Lq7xRvv3djLC5MqUk8pGDPWusRFpDdERH6LiKNB1hgVe2QehdriuVu1zhxaARGH6qLgXn4U593iS",
  "key29": "5qhaH9LuoFChFhmrLqTywUVnCNFSxKzChpZvgezA7DKEopp6Udzm3sAGz7GqPTBodepJbwoEnxN59cPm7EGLGMzy",
  "key30": "352okVyAqo3b456YZca8tdpmv4QPqSpHSDMKzQpiC6odT2Fb2yYssk2ypHAShmeqUPQm91U62urVdtKZw5ge8DQz",
  "key31": "dWW7ZYDdjQT7pf7sEMWatvv4W1CJcb3JgRo5sV4ZP5iVoGGCF5vcdCovz2NnB16CKrCGt8kG3dDRk8yaet2S8DB",
  "key32": "4NokvCFhiKyfLwiDMJ9udoLXTMpbNDAAsvWbKGBpSs2EvJaamHbP3DvxEPtEZ1arTgyqEq3JfN13PsVa4op53RkJ",
  "key33": "57LYApvewL6FhBAwkGeQdrmMpqKM591V7G9WvmB7NJsrfUKPa69AFHHWZnbkMEzGC863zjZaWZ9kjgXx1qE9BQTx",
  "key34": "3Qws8AbGWRZuMVL9pmcgea2MUsUZcBj6XNexT5CLsEm5g442Ebx3fnEmSVRMSNjSMq45vEJ4pbKzb3Ep2unTxYC4",
  "key35": "5XPMgV8UQ7dJyvEFgneWkBs6SXJWqVdXGUcosb754QPhe6bHMN568s38eS41LruYYSgT5CxhqugkyVAfsfdUbckf",
  "key36": "2foMcwaNiKLq7d76SwKrL3HWEic6qSVAR6omMsRoCHnuX5b95cHTwrzvF3ZctZmu8TstFwmpSdv6CDzV5sEWx3kj",
  "key37": "2z2S1aUP9MeNaH3s2JN9vJeEnrB7KcmsTtQAedcASf5UekYJwt1nhedMqU18qhPVva3DiQpeyM1X9kCHniv423v5",
  "key38": "5j4RMUoYvXT4xrcUtz45GkWe3xTM2Ha9zGKCZGhjcyEfxbDf4hHU7Qc1SJBUywCDjxMCKJVfgFifEGmc8pgkrYh9"
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
