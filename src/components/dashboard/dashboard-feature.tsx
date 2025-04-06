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
    "5qVfuYDq33dN5Ctijp22x9HqzuRsJMmDoVohtog9CyBujVk8UP4ggJftvgTieYsaj7kFvNhL76HKHEXd3o1x5Ex1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z9ict3vP7mgJ1pKV6ABfA3crDZqHAsaLrBohXohG5h2N6mF9YQvpjU3fEq9AMuJL6zzbx9JyHcgSdETfCzgLnsX",
  "key1": "5ptF5uj6mREDsRC5vpybo1EH369Z9rEUMeeJmUVnbFKCE9qwKSKGJqbL8vnmnvjqnrwdPBAJ4pr3jPNWzCitGpaX",
  "key2": "2DqN4GQhBPGnBJM6h1hJAEzS2oAiP3GphzZUuwxTZo6szViP3LL7ojg1j1wsMJz2JGbTHqNSfqSpRFFm8itMcbNz",
  "key3": "mcYd4AaKWr6ywv4A2T8RmGMR8Q3xHTG39Q6VJNjDuMGmW7VUMsbYjZY1Q1ReayL9wGshZ28xtGZiKV616kqcMAG",
  "key4": "5peuSkrUx4aYASBwX8ScUWwc2rByEeR6H4k2GtCyV1FWhBYkPNNVjwJWsr5WXbPYVo3ePf9RxoHh5znHr5kXs5ux",
  "key5": "5PSaD5t4K8zZjHN2EPjJRkEd8ovcqs8fe1jgtuMe9cK5jDPgxENtYyNL7eHxuEcCeyNcJvBSQahAw56WtusQLbL9",
  "key6": "2FGPAwcivuBVnn5GUQfF4LLEmBT9jbcMXxSMzQF54NLxWfvhiaYzszxDaRZhz93zH9tHztqPe7wZxCwCFyHwRFgN",
  "key7": "DaNs8LnrwubHMvSekQeTnhtZHPeRciSQogttb5b7ekaKzz9GXUNq1ce4N4Q2WskVkUuzQ8UzRrpWqbqrawKJkyJ",
  "key8": "2R5KSSYtwugiSabgbCRRYUvK1RDFAZj53N34SxSnjmz6rsqbbsnxkDPywrFbZXATHzHdoSFB1DtxarpoBogzEsE4",
  "key9": "2CCHDtC5gEmGEfZjfsPuhTdZXwvMrkyf78MixrRD9Q5pyt4BWR2JEjMGaYxjYpCQx6MMJLebU9Hssg2yEUnE4N3n",
  "key10": "3CvCfEfoWCKNAQZpwMyiJstwRV6ZX8sKeLWtWNaDNrr8fN23YVfvNEVw4jbEAN3NpVeqAAmdwbLMGLRQ7fKsdU4R",
  "key11": "4AeDFZ3hiaKHhoYHjJ8EwsbW3a61YydFVdPD4pZtuGeseZJr6Db8TVNVgJbHkeZYvnQwqeBoydXRULcufHz9HLTH",
  "key12": "5xzvBqPg8qjLaoe73HGXBVyW1fENknumyJkJytyp7Lmn1nypZ3jBGjpnWbNF7xoTzniYDSJ1ktg8fTSuNjQXw8pB",
  "key13": "2mz1hb8RSa6dzE4fHWBh8SjmhhQYmyp8M9JtLXLsHWJqwoDL7eCLPBzTZrK2CHom4m88b5pbgWjSoz2Yy7M66SwE",
  "key14": "4BL23CQLfaX52yarmzkSzo77usBUDjZXfHKmLQhxR25TKJHVJ65TigNXwCRTtsoLYN53qxmZNjh4w7DvgTvWcG5P",
  "key15": "4HGMSySxVV7CQfHFRv8LbMVLZpAb9Nea8QaZyvtgBQaZf7QLEkmxvTpDeFVPid9ttfc4hGkwkcyZwa2E7YDQDEcf",
  "key16": "638WNGdFWk8pBhqSfMXPgTRzgn8DFK6Rdd9f7unDvQkr71G6b53LYJbSpE1amNVXtQH9UHH7kS8Zv47JMLzXiFS5",
  "key17": "2fCtNHZDAoZ54VGZALXofu6NeE2poKG4gJyjaCE2YP2wYTUXHXYuCBvo8GhmEgokX9LivLWfz7R19NRPAqMhd4Ew",
  "key18": "s3Rsn7hZqDR5Lh2ugkb99vVXgGuPyE5qQCwAjjrvRaBPkQZdryqjxaB8HKhdoaKMgVy4Y6XaXJ7ojXF9FsVJ7Hb",
  "key19": "56gx3WE4Q97csyEpGGER2QmKxnifLePzfKsUC25Umymi7CrBdUXvcBjr4HfkJZRXwxL4XN6U6ACjkQ1Xu6ZWHL7H",
  "key20": "43dNmvFe8ozKFdS8cQmf8Psa5jtMaHbJX2JcrTSrsk9aWgKNc3663AfrzHYnb2nTiviLgCoGkprWeFWA14hs4ZxC",
  "key21": "25TDHBWXCej9CKUgv8aPqHG4MmxkUK9BExEUhbm3kfDnLmonp2eDtL8ZXigFNfy6qx22LMwbyMDHtZRvAFpkrfew",
  "key22": "52zPsyKVNVyDHMpAYGNxGRKcUaLPpyP47iEF8DtWfkacVQgYiXUJbMY44YLK4E3YFFAUPNKzZgFatkt7Yp3LvMRH",
  "key23": "A6SeLFjrZuhRgNLVgBund3unvju9DdkLXrLXUeYPv4qj3XMaJgUfF5sCDQKog8gDdTB533bKeLMsHiCvFM8uncQ",
  "key24": "2rSjfgrgjUstjAp9WyDtcVn2CGB3Bin5WotTFnnkraezx4yVBQENC1TF7svapL7yuegWFrqJQXJynLvVStJvBKFM",
  "key25": "2FjfEygXXFHJkUDrxCHVHstfCrzs1uKT9d48TKbC1cuKgDiLsYMat43zFrjw85a5tzcFo1jHvzjsp7TAHeQ54vuQ",
  "key26": "49qwvtN7D62ywboH4pNggtFVs4yNvPu9gCgjk7JbYMtv4czJ9esKBpC2VgxR8J2WhWpC67vzwRQBCeEuLTGod8hw",
  "key27": "e2qvwRF8SpUApLzZieArypv3jj2Fzv6x91WN1wmWysjCkZbJKz2dag6duUPLLnTSCgzb2efDYksi5tgu1pteLpj",
  "key28": "645Ur4qt9nqCPZQYwtn7H9uyRndu6gpLYFLTdZNH1xuSNLe4tB6cox6hLRufWKMbVhByZefVMKpGs7do1zHkMWB4",
  "key29": "ePostj5Lhf3doUwMwzbWC345pVVEMaUAexVgsycKu68x5kGY5ojCkRhhZEjjDRRNAdFwuebwUKS7w5DcMFJ7NDy",
  "key30": "5DzADn1bfFFkznaBdsZKAifRWA5ufHJRwjAaTdTCgDMZQ2NwMS6i8CZKXyGVx1oCDbGU7fAsy3HUFk8WnpHhLSio",
  "key31": "cu1vr1erHEcn1iHEC7LRNfFdNrjqzspAVHSQ1ne43UzPPAk2MpbRm9dBrygKtAhiGRM7SwdzCYJJYWupPNqsyWN",
  "key32": "2vVSgsfmZQDZWFurTE4iE2Vhn5TbFd7D3k6yXQMqnRqNs7fMCzhCNMd2XmWFxsWrfzLu7cdqRkLrsW7VfEzoSzHx",
  "key33": "2FZc32kDrYgHZnf2eVamcsYYF6WBMG4CXai7wKZHet7UEDH9tqNsGCu3YkqLMEdz5NCGUTwixvxkk81C42ch278i",
  "key34": "41tbZRFD773eYTKZVnZiguXVJcT4W38DQW7ezDc9WRCgUA2yg3WbvZg9tPPzZRRaWqDiLgwTfMDA2qZT9SrLcEpp",
  "key35": "5FFKWMcrCHUn83p47zBzahwnpDjPj4A1uKyjpHTGNZE1LrJi8pQZ7UtKBAP3k1zExGTFU6F4qTauB2xDqY2jpdKY"
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
