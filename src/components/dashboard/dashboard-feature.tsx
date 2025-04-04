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
    "5FUPufb7Mv6hnVesBi1z3jdAQ4RzFu4okPXgxNAgAfsXAEdfMRGuvMvfNErXvxekHtQDAQPATcaQH5ZC5Wd588mL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WajrtcdQhQSdVPy6KrU5GhFkfCaimpvuxMECeUXKzogyryLFozrsNoDHHhunq4GqaGYh3RvSCnEU4zXPbSztDZU",
  "key1": "4v1FGEeEvjDfzviNMaJ6QSWnTB6553EftZShBQRFPTqUpPREcNuyxfzeLjgvyfLRPXnWw8Vmf8zbt5gYWF9Cgisx",
  "key2": "5PjhPwjWTuDpfThEgmBEzQpzUFP55LPcqZcVMiebzx9eiVbMzNCFy7qPQL9WkxhCvPR4xS2fGJFjK2f8wF3NKedK",
  "key3": "2Fxj1AX17qJ5acazG4gSg4gsnsaEozt4bJz8uKPsL8KDmQ2LsGeA713hr2pGzVQQEJHBsMaS7UhnrPXtz4wsxg18",
  "key4": "D9qu1u5gcVoig4oGdTdaPSBdZxpH3VfaSL62MiUeQRaj9F89pgQZzWpRXNFYa9LJQPf7uNgH6oBjTjNEenpn1YE",
  "key5": "5jgGzTw9VfgdF8aNknHmGGitxmj1z9DrBduareQ5MNfAi3zCzsheKChfcmVsjTrEmVP6nSZVKecTSFz9YkVZt7nr",
  "key6": "3y4jiBVuddKJk5QifB5scJ8bCE9cZCGhTKVoQYkQ4a3VPAhsoJ875FS7HYVbefxezzDBeQQShMHn2HzwuL8UyayS",
  "key7": "4kc4R1LQFvt3Q218KWKsTg8a8yvXKsb8q4NeF8wMj9avZZXUc7W29XGUmQQBvKjVjepHhbiThBjTBU53k1io8CnM",
  "key8": "3oDPRWMoUwMFsfCJFWBu1LAWynauxR5vvqoQ9sEeErK2dekBrdMwwEbNRve33zXoXZ65coNJnTUf4mQDwsYR5Z8f",
  "key9": "5XC4sW7mwdKZcuevCcETh7GcTEv8wJfu3Sdee4bXUZMKMWV2iMMSWTDLfVwhdukLEQT8XSww9rJVGktTCRWRkPE2",
  "key10": "5SEpLLVT6r4UiZKrHyDSWJ9EqyBArGx2TFnqnLsNyrGhDjDHrBgRJAeHtoawWkpBWerLBZKC3bN6PU4NaPZzSofW",
  "key11": "38jGxL3mp7ivp5fxYzohM7dNnfXHEcn98RhHG6uKHUMaft6RXukFkbioytuPpRKB5eVQweiqeWLz2q17JF3jdcif",
  "key12": "32CrMyfTEUxUJipokAxshTj8NqyjkKSj71NvdmFGqh98akZ8QNdAohW1RWGgM6gDfcHjBHg57upm7QFtMcRtwmbr",
  "key13": "2mGYjMQV8uzepTpoLn9XbFCCMrZQZYnuKVNFBfcqvcKBwLficcDHvL4YMxvZxRSXsithbREMgMxmXTz8ndL9xbZB",
  "key14": "43rZDnHYGxytcF7LXAPPZiD3AfYf3PFv6TfpamcqSFS1jpAUoTb65cozzkcbX7Gzisxo8DYbYHgbeeszmcEc18xP",
  "key15": "627hwEFFDNDv5JMDgfsVVM3huJ6PHm5enMg9mMYVzbBu83Fg5GAEe1Xnyg2ZXh8Gkzm9LYFzXzBJku7aUDJPwZTs",
  "key16": "FTdY1ppW5SdHzQzC4cC8RvD7gDiyUjbaPpe8LPY2zaNuGgdtXU6JUxcXH5XtZvWhdiEoYsZSxjRM1AaR7rjzyny",
  "key17": "2M5pbTUiezjNhodm3SxaPwi263cGeiuxCkYFUpMpsGi1HkUBTeHcC6zQqEW929tnxY3P5Rra3vwkupqrQLcNkAmD",
  "key18": "2CgxgSQvpuxPBiWA1fWbp31M6djwMiPvfTcmdQD7L1Mu2P5GGwrJPJP3Ndx5CxEajwMcHNm6qesc4wpWXkT8KiWW",
  "key19": "5j2SnoeXU9rb8x4s4yRyCnYQqUXZJymVzBWD5wNh4pbYGzikYyov5j5Lqig55X8MLaQoAAkY4v6sqURgbBEAB4EW",
  "key20": "3Wcye84oNyU3wiHrZpjyU7P6Af3PhdA1hiGVBCny74LAofjvs6yoHDJJfx3VayfdXVp656RTGDpRk8o2N9Bkzrz4",
  "key21": "3qxz25SZ8oUbRxMgbrUxu2g3AKTcK8hp9mxfAn6x6YkArCJSDoWkHB167gNtFzy6zZ6XhRGK8VNWDJSG4PLJoU71",
  "key22": "4gbiBrZcBZgNihVXJ2Av5thhL5Twopor24LhCFCBnaZge1wYbyeq6X27pEMTYY8Jpxm6eroe47uyNM27zkUPG5sF",
  "key23": "27kx2euBGBaA664nEQGkk8JoXbpemFQqbHNszfz8hRopk95phdzxYSCtY8yVDvnPVu2Fk9TmqFbHfn4Xu63gYx6H",
  "key24": "4pbAkWXEXDra7TAjbuyWrFLtvQwRwF7F43EyYvkoWRswbaeYKxD97VsWtA8P2nUvkT5jiV9jGHB4cEGtF86BUKif",
  "key25": "27dXUaV1MT2EimLnMU7W665n3s4TzVQzFB6Ys3TrcaHnZEMjmegABW9JFhsz18wcR9vykLcfzbDj21PKF3FaguMv",
  "key26": "48fNW4MMyuEzt1XaJ2E7SGcsZtEd7dsaFjFGRvEtscymZfwbU6w2UJXyZuCyY8G6PRQYFfLH1b3Rtgy6TDUEEAc9",
  "key27": "63XnWBH2Fqrj6cZKWxBMJuQgPtPMVKk95jRdB3L5s1N5n7n1Dhr8jbVPfXzMrx9DbK6gCc5TwCTdbetfa75qux4",
  "key28": "41LbiHVyj8KAvzJKGFJ6B96gW9y9SUaaxwqFr7T4FxCoEP796DgWzYvfAFU6DYYWp7xbRkByu43rqMXBxCiZcXFN",
  "key29": "5PMz5Jw89KD92kUoWEnKkeR7XKSmz96N4UGcgW2pKvgnVEtDWeAQQHyLas2R8XcQKnxqpiHFAaMEAWwMrpXrKsSL",
  "key30": "4SXUe6zdXXwJnjzzZEXmYgyDV4fHUiXrqnzM43KsPJP9HVuFuMQmx2h88KRHeqgwfhFPrKHsC1oiemAHjyPBxWof",
  "key31": "4aZi6wH3ZNbtoNbRgXV9Bo2fVg3sHLKzs4AaHDVFjbuLHC2EA3NMs6aWJxp1czY3iXem9khBjAqB6MaV2aLae2Sz",
  "key32": "2yDzwycqwy2EC6LqFkeDNXxm5tFBqDcPzftb2ZouMYRSwo7rVdDnNu51TrKPB4KAkiuaUnbXDuiaCbJGpKm5AR4X",
  "key33": "5jcFBWuEEH6VbDWZKaPTsAFHo53L72v1Q6i6VjB7uufzRGK6QSdtrnSpeZCiBMRv6a8ioEF77F4toXwSDHbypxzP",
  "key34": "3BHUQE5PjZWi1MGKXS7oJwR9Q59wwwBPHgub1MHXriozWXrLtGKYR1BcX3Me9z1jtkej1Jt8S17W2X1PupKd2Do3",
  "key35": "4QwdcZ1sXWs2i541HsL93k4a18TCAXnvubKMAJ7Uda2fvgH7Um52fUrJa1Gm9oNDv5MCC2P4HuhnW7AjW4Aj3w3k",
  "key36": "3xS8fQxfdGCzPUnhPcbUHvvwutmzVwiTJe8bPEdGeKnabNA1Eh4PaBD1VcbJfKPEsa4f9k9hVeX6gtnZLZ4ysf1m",
  "key37": "ZtagFiaoUsRigksGFd9VVyXmtictJoeySjfy2MU5E8YCSazbHXyHis7t3rjKZZcnVqVrYEz2BfdagJWXiw4Zo1U",
  "key38": "QQhJ4dH4HKyFMYTUvii8uXapgad7Ju7zDaDsWfwjf6ZTRC9Fj3jWpVETBgWyxjXBJXcjFNRYCzy2WNNLPKnvYKg",
  "key39": "58CCujjbvz6r2SziGF3GdQh9tq5Bo8PESLpDf6zrPsyRUPCnPEiAZLFAuF149sm9X76pijggz3j3nL5xmfTKUBzu",
  "key40": "nuCM9R1k1Ngg3Xg89MQyeEJPhfyUmFdy6wxKTv6i6JCYpzFmyL8TEuofZ9Mt794Gi3VoBFdG5HBdRrWuLkz1Psc",
  "key41": "2BG1My5fQyjAZ9fX9iLHv6vGCzcsUJrUQC4umBATEa39dteQAK6bsf3Wmo4kxze2JX2cryxXgTttteEgBM499RtQ",
  "key42": "4ixmWNypip5KACY3kPRv1QxNPnojjH9FJjN1sDxsSMszykBdiaLgCkPAfEqdsGTWuXJfdvomypV7qhrJucz4GKKZ",
  "key43": "3DFm4c1DcJAmR6xTTqfAwoqVFMeLLU3XjReAdSCo9d1Cuv2NSd5thVSaAnQSe8ekM4cMSj4DzuHTAYYqarxfvUR",
  "key44": "4wXuKJ5TkyrPZqiGNDQr1LjyUvRgPJDA1jZMRJrpTSfPUEdCpPxFqZC2UpBsbr5ZAZvdPitP4kNXsRyj4hd1g3yi"
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
