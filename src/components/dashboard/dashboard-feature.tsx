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
    "2MCeGvQbo3bDjK4HZooHfEoG33RDDWkmGEosmZdWcZvyoRczXSwwwfZFLDLauy8rFaRZ3rxZRDpVttWN9bFExe8G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WdF79cWzV1LASvXSg1hLbhA1r5j4CHzTh2oY7RxuQmPc6rciYqTvGZ1oeFcM2HFYo4GSa5j7ckJ7iseoanbgNGi",
  "key1": "47yTtHmTAmihX1L8gGi6DiW68JMgHgikKGYdYKmWPgvKRp1iM3dZi7LMep1sCcRS1Nc3KLxCQvm8HdQ394sVErof",
  "key2": "4BMuyMenEBTxKDnXHjgnNEfpbmMmJRVbFYig5EZffiTYH6WfPK5WNLw7yR648NFv8qdz1185jvKtFLbVAqZH91mP",
  "key3": "h6nk6qtuNrraWDPTQxKjiH8eqmsYnELPtGLF3ZjyjiQXGUch14n4AKTQwgvtAfxQ6nrNJqFzPh9FhJhK8MwDBgG",
  "key4": "3umd4eX8zj64G9MiBkZis1Hw3pTUV3z9VugVobDaxGoNEwBKxJGg8yDnshXzxM6kQMD2Hk5suU8JLp4UpQjgcCy6",
  "key5": "2S6skNhutqkPKMEkVaJeM8PT5832Bq4Hvp6YWXwyjc7T8KXamuL7ii5hdJuLrzJpWApr45rxXapDpY554pnVgfWc",
  "key6": "62jTnopZ3xbLsLdcVCqmnfmArnm76hi6G4rbEAa3zgk3QB4nd2jgxL9p2XXt8KN8c8LSkLTnK9nQQza6GbiwZnkS",
  "key7": "jToiDFpp3FCdYpamCXyfL1Pe4PenHaGLbmR4hqbvhcfgHe8gVKweH3pAefHF58X96Uhm5bdgkXLa4u97Li1Az1x",
  "key8": "2Gpm4M1Gbu2yWGKh6Fq7vxwJ5tXA4Pfyf2GWk1FGzNDw3LszjGS9n24adMCuiZ5Nng5cFpFCkTsCYNN56oafPZVw",
  "key9": "33ecW9SepMnqqZmGMqfGDEYyvpVRBW4DoHw6KemVnNsPKJpH2WAcDb5nenc5WsAeRW1xpLuciJLnYcCu1ESAQrQG",
  "key10": "5EjuxKG96UrSTWtV52TvytBahwoyMhFDQCMGsMFuxcy6V2XtAJ1NZNsBEz1n86ta55ZsPZQcLpWVwG7VZr68JVtt",
  "key11": "yK6JJEizCJcbB1pQToMnCTgK1YNajwZDxpDVjKrQnpTuWjcQxR4RVD5dUdkgDf5otsrrgdPNrvuLbB6LsGWjNSU",
  "key12": "K7TzNzfKk6DkELWiDdRCMsHRrNXjueub9QBiUqxjhxoPeDy3sk2tRvukQ75G1QqK5hiFDVHXVwfubhLxXzSBauX",
  "key13": "2i3raQDd9SAm3t7HQBf8GJHWDQf7FH9rLcceq2r7fyLWKHyks78yrThhZFQZeMDAqBL1fnzxM5axaTXny7DtK9Sb",
  "key14": "4gSWy5fxFi1Dx4QRwrGJ23qgr11yqsSQuC74wrvuHvpLPA3mofGDX4N7xA8BFtXJzKGkzf2jMGzhFCC9r9jmtpjH",
  "key15": "QibfqWLPJqkZkZ2cNLgYzZvLm8ZZFkQvPuwGti6YZtwKVpA1sCo1WQ3ppiKhQjnmDK4oz7db9ArYYtMijqYa6Sa",
  "key16": "2MeFgPFtTJ2csVWxVpZoUfYfGJCUU86iejtDSKk2CZePUfmAjDhZioXsDX44ZdrgsLbpuGSbzxFGsjBL9ym2pxMw",
  "key17": "3AFEsLTzsPWh6MXygfvbg4aQi9mGvMPhPgYRH6PDwL9rFtBusYGyE2gmikFN3h42Qa8Na86VU1Mi2KqkbGipFx8r",
  "key18": "46TRpjnqqgpF3Bgphy4RbxxuktBueKufwCy8bJWtZWmXCGnsKc5KCdKh5fUf3JJJRZuRt1iPciihg7RouKZgG1hB",
  "key19": "2XA2XtGsdbbDVYDCgpjLGP4YuKCfPWtsX8vLbHvuYpaU1CsZFP9jdxZMiKAEsj4cPYWQcuhhmot3zMus6QJRpWZs",
  "key20": "3eMhW7QttxykvTQuK2pNLqTxejkco8Eijnm8G7mHsCGGXBL3DBJMsXaQVd9aAeNoFPX39k7y7KMb9nnp1EJv1CLA",
  "key21": "2Wkik2phvNjAzbGWJhtMAxivXX1o59gTbyxNhaVVdPCjS8CYDKWrdJP8KCF4GhfNuxR5JJmG2BKW9uWPv7dYnB2k",
  "key22": "5hfmjFAVsQE6NqkqQnprWUjUhgECso3jXTHRH2s8v4qYkdjEZQAhsTJkCGN1wiUrSvJHmVpRCeMi93uHcvpypt7U",
  "key23": "2kcJga1hRxX5mvSTm148mtybDVrT6gGJG42uwYXw9Z1JCwhQJNQmvohFPJZZ6itM9hknQJHf6LX2JDEDhNenNkKT",
  "key24": "28TyG9mEPxNu596eYQwZXDjRFm6vYUHMDcpLt1KonKLUcpiWF7ZUUnWSgr75HBdZjgAaSL8QNFh6TLAr6UD4zn3J",
  "key25": "2XEk1dzwheAWPRUo7pGWz6eR8oWgigcatsFVsKsAMXh8Reut4n6picTXrvVSYop5P8cft4hbqBnjwTn2BEHavDfb",
  "key26": "3hUBZo6gM3EvR6GuviPgHDprpbV9oH6eCFohgoydHbipdFLQYsoVHAb2nzEUg6Vjq89F739TiAwki4UrYabSgHX9",
  "key27": "3Mm3rfGFCTJ9BV5NAnmEZeNNjDAKmJvsJWJ5hU5qSjnwk6BSGL5gef3it3ytV1HEn4ZpHkHsJEQR7jjNG52BTXYD",
  "key28": "FQEThnx5XcxF9wDgjQabFKhxrAWEmJ7XcvyiGUKBxyLBLY3PxEyeER8fX2uAV8x3exog1avzy97Jdn8ny7iTtE6",
  "key29": "5ydSXbmKNh6EpX3vSBtkWfQqu3yW3gkNdc8U8Ae1esSuHSazfLQzSMZRaPmnuXRbqGF86pS77nrDgmhBStUx5aAv",
  "key30": "4sZir9qhLzrr15EtzzQSKvP4wqzP48b14U3k2wqAFCppveMp7j2eG4LPHi66WHAZiPzA55MyiT6RHgCUEnzc5kYz",
  "key31": "2XFTLCg9j8eckifFtqFTFCASoyBBTDgC2eVonKjbouMT28sxRFJVoHvUkcMyJUEe3DGGadvdu3cQbX4DRyxxVmDb",
  "key32": "65nhdQN7hrz7GtwtTmh7X3VHBW9RntynCx3gMUW5iVBHst5NpajZoV2euHaqegkKAtneZy8UgEZCUcSFS9jMnkFj",
  "key33": "5h437EBqDxdUN6EYfSSt4fPvb3ixf7hg97AiZhE5crPFQu4ky532w6pETfPN32CtZesmhJtxdWQGQQtuM42zC11W",
  "key34": "29zSRXhD25nwjEXfZ9R5uMSNCCzRjAEgSgSv72UhmwGmTY5vonbZZfumP3ASW7vmAJ9DcZycYuyCQLnoxsCbSdXX",
  "key35": "ZKDrZkYgtAZKG8XBbCFu6XX2eTG8EzRGP2XcffjYouRxAMiW2vEHiDL6BJrKH6gB9CMGyVWcAJeJVVkC6oksmJ1",
  "key36": "4hXQGqvDvVHZ6P7Es1sryF8wtv8gkknwUNHZP2vnAUQaaVyrPte7hpusS9BBrc4KGiNkDX4XmgCPaYf48kev93Hb",
  "key37": "2Dm2fQx7ALcDSVJgWD7kzvZ2LTL1VS6AAiD4HC3oPzDEVxtoLEgZPBHtSAh9wMW2VkSvvqvshs5ESuAji7ksvZp9",
  "key38": "3dKSHizH3NTfSMYScFL5osxbYvL1cu2iPfFCgwkdtJmfWMeRGABkn5qkGsaLWx33FNqQSGj3sbsGpzPxNvphshfj",
  "key39": "Lm57KwsiM5uPbnpbW9eyrtf1GRQuj6Eu8dfKFkWF9LbavuzT8wYdtsNEeENY5bKr8bhQgEuJsxgX8kHChdbFMJM",
  "key40": "5vWF8SQPChxCxofRH7t48KZ5JefJTAfN46TUsgpeV7JorhcaiRP9hBgj5jSaP82apQKNiqR5D2hzpTPzU5huDcGd",
  "key41": "67brndmHGJqudMsuUL6uNJBLZd9Cae1yB2bR6w3idEeU3xfrCThXSSmr4EadzpJe79wYZ39DctWW4JF6kXcpmsW",
  "key42": "4dpyxKLuaxjd4qnUuYhYdk7X8UP2ht2XLB7n4df8Hr3CeZeCfPorK3RnnpGaJ2DdPG7zpcMYULWNBMaTdVN4uhu3",
  "key43": "2Aqjsygsk6zDxYXsj58FB5BnqLgsnNhxGuAbHYVmhwRM7cNqtTiV1QgnUk4PN2vSwH5aTqEZ3xsvW6xogpishgY5",
  "key44": "5zVdyqSMuifwzNKgF7pvJonZ7ALysNGPmGD4Cegt2r4fZCuD1D8gjSGjgCdT8wLPzWqoNWHvYBW6PZhyFoTRZe3w"
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
