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
    "5MaRk2e7wBsnk47v45HXaovHHc2E6zzjQKKaQyoETic1mVFYupUFu2qrHX5UzVLdZLXE82sp9RbcfVVHLsMLrqgq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dNDyn394tDhrzk5j1vmDEzuU3Rsyz46rPD892yN6oFXHHtqWRWUZceZxexNFEz73cYgtFNFwRykpxUcEzTkeE7W",
  "key1": "oFa4s26rmwXEsYsrFY8MfRMCzG8cagh178q5Bk2Lr1hAGknX6DPgVnjgXXTYoSS5kd8ahQNSA89xvC6NZga8phe",
  "key2": "5psDxYJgKkwuwgKh9m5vGUzXgZUrLo2TqcwyWycJx2yysYjLvVmtR9d9hTReGc4qdN7BUvtC1sNiCYgAFK9UuRRy",
  "key3": "3G3saD7YYkXE52AqJJoR1HDs8iBhR76UDALTDFU928da6JF97ts1f741fjMnDX72zcRaod1djpKGJFnDD78JYdt7",
  "key4": "3kowuns7NLfB8kidYfuVFLrKFHiiumtp3cHHoZoAerCgUbm5tbuyKdUk1n12LvpZiWyMZqnkHmtymqfFPger9U5y",
  "key5": "3rN8aRat48Amxhv2RAfDVY7bZJU5KVE1ohseuHYDUMuVs8fjnLj84G7VjerBrWwDE3x2mxRJM45Jrxq7Hk6aizN8",
  "key6": "5XGMeaxcomqdGABh1itfzRkGV2bVAPZW8AWLsjHLUs972AXH4p6fqBLfPpfNL4oZ9BKaasKbZPdrbvn3W8NS5bnG",
  "key7": "2wScri6wfT4ruwXicgD8hLAZNwkujvGXqP31qdJKM5HqPhVQueG2N1YDPbkzVtWbCHdJgYwwbi9ErzswCYiS5Hnk",
  "key8": "5Qe8YnHM2A7wFbw7wt6TWU1tq9yCDDeHnLbfQv9etRxrMGFMUmZTRQhCJoQcBWsW6F3bfQKEgTrurMPzAZ8QY7gx",
  "key9": "4gh2UnJkfEPMGc1DdXiGVLAQ3eZaLtbtHchvqWoNjPBKx3mxJZ69mNW3wGnZWKMXN5wzjnknW6t2agtd79e9PPbh",
  "key10": "4PgYDkwRxQYoXt8fuuHG9VfPPVd1bLoRr47BdMbZLDKNd3Vcjh7PbtmDEFgB5HE6wXRwPisD35zcVpixLNrY75Nj",
  "key11": "5gkTNtsJ76hJEj5YVbgtVjDgfHcYKEHQNR8npBNZ2HQAzGEZSEhpfPKbAJ3bP31CowvEQxL2ZaafWPJ5mgcpGm7o",
  "key12": "3Yhcs4VhC22c3zRmCtPuJpmBcgukSef312SFZFjCi5BqTnxcEopiR4mjiVbdLsiApfmo5QfLrSi3KYGw9EZSUmEg",
  "key13": "3NLwCv3vQCTkgKqcPRkLP4A3myAGAGLC9n19KF7S6cTaPqu5axsYw2bgpUtXPVZVHtVexDN3zxwberLsLy86Ag9f",
  "key14": "3LQaBG8L6anCqRzTtN7QJEokLRSgBZQ4EMz3LHGmcg8a3nDXiYzVLbPdq1d67denmqaWmE56LY9iw2Ekm8uyqA7G",
  "key15": "4dUMbt9hNELAo6E98mdGrDRzwEfm5faRvHEqqCMzSLiiYTKFXEmK7Q2HYDjdpczZJ7qUtpfmvGeS5Jd4sBSTa4ZB",
  "key16": "5R9K1qhUQCZyjQsprzwoy4K4w9XAtmPApfbkNKzr2adTxGk7H396o6PXVJCzysx63SEARTZX8J6J9dY5ANXCKLuk",
  "key17": "5ruvc5ZGpPGTom1vEXA872fRhoZqu7mS68TENccxUdtsRzzuU9ctW2ZAcS9Cjc9Z1UWTfdKw9DDK11WnUT7g8RTf",
  "key18": "5vBS3BrbNoDWDtUAF6VrqqS61jSJ767A2TQeazbAoEdvzBAZcPqaDEwSqkF7tTfbk4HTAu6PimoryaX2Nhnpb1Ev",
  "key19": "5NCDJxsNbXjvm1YhEDw4jwwjsMxMx79bDsnU2dus4ArgbKdPnEBnybetzsN8MP7dNDrGkNN7mFge6XTcaY2Nhxjj",
  "key20": "2yhbZMZmSz3z5Hw3y4AXq1zNWZoJ9JE3qEFqgmRPTLovwcZsoomt1fmNVB7Drq7qaaRK5ghL4pFw3MMvL8cgE6ww",
  "key21": "5Tn3BKwfHYujZ3MWNis5QYtwpdyBpSynH6kvxCTumBZMZAtvPNCnAqKvM8CyF7jeuh25E16euU7QnZ1Rt2q1YmZb",
  "key22": "4Lew25MULfHGEWpNuKypS9hYm3MokH1PrXRP3oashsnnKwWPzqsnuMBpiygk9eLQsLLJkZipc68jNyrKyRaB8bzw",
  "key23": "3kwtq5nAa3A6riVAdY6MNzECikGsxPWCifeHrF6ZELiB4YnXZMktKsE2knxXgKHoqz5WD4zRG9TNDs5MyRCR7R4u",
  "key24": "4unGh8NpKMJChVuBysGgiuu21rQ19kjEnznp4rfV441oWcQq54wEjfh6MLP8VnPwXxhC9vyRMujNCYT5ACMnDfxG",
  "key25": "25BXzsohn3tjho5dVKQdL5jWoxYbfj1qhF52VD83QcxCLa2NDb8Bs2CLLofiocraPNzdW924AD9hVQXnU1GFiGhR",
  "key26": "4e6mrYj8Ph6P5EQFJxi8RRCYvae5REfvnoEtVkqAFKKFQmdbRE8NTEiENCWKmUx6rHeLvmbqKZ3Wo86LawXm1dC8",
  "key27": "5fThBoWF57rVmLRWSRqJQZHRozEtqakF8q7fW7McDmxMFH9rugwJAtZswXn5Nv4HMWu6Jzg5rAhbGvgWXDk9Po8v",
  "key28": "4J6aMYZwcUhPWnssSUAhNHVPVHa7rDYiaMbfTUcuzhtAXknjpHW2qAPG68BPCy3QcwoUDF6EELqyW9VS7FKnQiya",
  "key29": "5p9iSTV1esh7hZcFhZfZQJ1tcXdQStqXNNimqxwj417ybx1Kn4KGbQhU6UA3m55krxg6pJz3dkYRYVv29n9yaEXN",
  "key30": "2Y6UvsmRnVMV3YnYQS3naJDyvfTFXGqceyLvn5qD8xsepkSKjvfqQtUs2uniB3T8HSX4YcgebBXDVX4GG2uUhZ3c",
  "key31": "5pbLQQjb8C3zjow2tMuFMkdJ4RyRzJf5kp7y4wMgbisQJfAF2xH6XQhW32KFte2FuyktuNVNQZBTMFo8HLd25hCq",
  "key32": "4ugjwvE232NBqbXPZMHkNY4bbHrr2z55wwVksizmo9ynbCmGuRr7BEQnVKp8AZQDSQeUh58SsLmJ1sAFLWQr8nL6"
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
