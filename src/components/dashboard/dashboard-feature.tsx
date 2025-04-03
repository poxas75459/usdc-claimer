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
    "4n7aBLFMzAF5jyJu9K39ah1FKFVJwpE1uGEpmdZ5cTTKAvn2w6hG1aXnyZVzPDLw4x54wb5UR1H842bUK9FhPoMU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ax42Jewyjt1T9npdgye2gA9KPpiAqcNMNRNqNqxDwNo8boHkoNWMt8kuSqWFjRPXfurHMfoqJXDm5Vfp6FzZfcL",
  "key1": "MWeXpgFAkkg5yoLKjKxC3A8vct9P6QpQcxB7CLW9tXbSETW45TBeg2edRsH6PULxPzigT4rrEFNzL8bzmjDnB3i",
  "key2": "pt98gnQBz6FREvnp5wq7k5sSSGfNQWsW2TYJTxrh7J75FrLVJiZCq8Tn53R9N1mG2Xhmst76WwdhZQbnipC5H26",
  "key3": "5g14yb7qfMkQ4ynBCnUJS7YiWTupHSqK3x95MLXKKXJYMyLiikGUdbpfSewiEcS5KKqmj89NYPQVW2pLsA3GES1A",
  "key4": "22aU5A7wokKNG2kuKQWRiuRnySqovggSttiHbYvDDQ71C6AocZhgvsaUwGJbZBGUQ1nNcq6uGBgzKFjAWV8FjrmQ",
  "key5": "41iLgfEAu8NuQEo9iiHiUCpAiaUvhTWNDztCqNEe2sFg9d5HXh6VAhJEgyH8R9ioYg5idybiHrda1Ztb3ymRmdjG",
  "key6": "3HaAzACncs5aFP64NsGv65hLTp3te3r92AjWvpV4hAjkUVqUmDPfh82nEcBdt93Sh7c1qDadmTbWs5tTFkViYkE3",
  "key7": "5YjFgkjyHBnR5Jmc61tuK9q3cbtvCeXf5BntCisSaNTiUkKP3sbwBda41VLKnhXe2oypsDBMkTkcohEzM5ecwfQN",
  "key8": "2CM6hATYspxb1WqW5zdkHeuTDoqqe8aXZoh3UT6hRCR9cZamAQq31Qovk9aCK1xpr88ktDtp2Gk3Ki8BAqwMjyWE",
  "key9": "5p68JkYAKhDjXrbTUY2113taES17EJrw3xEMVoCAXyu5LdgN2tZHBWZy2hRoekKn6QbZQBG1BVNZPQ3wDrToWy3",
  "key10": "hye1aWxDksa1mhDQTcapG4mYQzVGVf26uEazeNjdyRDG9UcBuDxwyQCVHiptACG8UY4gRY7HAqDTtumAfQL31Rk",
  "key11": "2ANURRun9GsYvuC9cLJow5wFaHVGNnTaM1K2uSs2uGVMoAjV4tYZY3cRNKeSgfvQzhHrRjqfcYkrAmQhT9SiVGUg",
  "key12": "32q39vb1hUvqvLhBXegbaGoGmbCnrqqfhHg1RcSuaEDJNnj62NLqPCbXAewr7xLKyi3rmpUts1YMo9amxpk8zS28",
  "key13": "636pCBoSAoB1N5SDufQsnr4vrnS5UXgnz2YPWRLZnM3iMf8VidsM8voCSsxgBZeYactJ6nh7dmnZ79WddXUwsQkg",
  "key14": "34DTXYPnZqQAS9XG5nyLggKc5bXLLsaYspQa8bFe9PpDcVbT6CyK5Hd3KCZrAd8vwYE7dkauEWaBU6wPGGmhV8Fi",
  "key15": "3UuAvK1Zfa4inKwG8zaRMRtj55R1Nn1NPS5dWTGu38rSr8wm6fFGjGvZBYeUthHP2Cw9RoKXkqoRhpd1KPWF7RZM",
  "key16": "3Mpwwm85uNjR7hPsTsf7baSxEZhCxfY6TEyFyjCn861tuUTUgjraihS746FRWisUYcAoZfLMay7zPpsw1uW927wC",
  "key17": "2Db1HNPwRYw13dLhEwxYkETTM4VGSr2zCFJV8yEU4RD5yPov6Y4G8QNEYQSgPnL5VoUizMuyfFPYMtAotf6tBKB1",
  "key18": "5uo2xo4WSCTHMaaDF3gxduuP1cZZdFLpHPNDhojRHKnHSDSod5xWrGN8JFH5L3wGza81bFamzyr8evLgMkQFxE7n",
  "key19": "62ywERxdkLtizJrC479vHvwSYBC3dfbxHSHzQV4sPnfrKhN4TqzFo575MCzbgoifN5tLcaM8nexCJkUeDgTQTNwV",
  "key20": "faneehNfFD2xnUwXJ2QJWHM7DAiBZxJ6cby3NBWCR4Jkw9wWLFWx3LDSADiaGSvrGtbUfFAjuvsvMhWDQm3bqUd",
  "key21": "4rd5WqvxGJXnFnrwVUnZo6mZwujRbqP2uktZeymu9uXR4xHjgQYMSV3phX5sbBRVixfaxU9TJ4oJXUZ2oyXPq54x",
  "key22": "51p88wbVHoGEMYMt6Dbq2RhNGLwuoJuoTzRi4XDpqaFxvMWeNKPEJNT6UMHC3XaCsNs1BLBR95Mp6pXTdG6Khv9e",
  "key23": "6HXX8F9Y3A9LxCgckJWDWeJMSug7fsQSRvdcZdUaRUDHuEkW4o5BJoQu4KgyQeyjkVfQZAJn27GBqNwn8y8u5cq",
  "key24": "2vwk79Vn14TAFQoSq68S7qkustJKt7K8dLYUuQJ3K9DGHYm4S1erjW1XyhJKHv1fBNWqRQNBcJDZuVzi49HDqyaL",
  "key25": "25EBMbjbyYcvdPgvJxCcJCKqhmmFhWZP962zWvYYdowjpwi2HWtJoJEPb2p5Ttg7oki1UJi61SKh8fE78GbC1bNG",
  "key26": "5s4ZJadh9fvvUWD2mduWPyeFwAtHFNXRdaezsFM1jGXJ3PD4AmfkXHxBWK86gT15RncBJ96U9qwSW6nakAUk2bsf",
  "key27": "5AUThmp9McyVADZKrhMecLPce8w2urcgqkyxvNJK3ejqEXQ3eKvE2b8dXe1tYMh7rZC6goVsAgJkfWjm1XFhEdCr",
  "key28": "4YzW3Uh7m2rgBxxF4iDmaTQAJB4PUS5K6FghhiAnmg7raoQZbPM7yNLmpUE29G1BnJCev34j6nuCwXc6Va5nMtvP",
  "key29": "4pwHidpjsmFLS6rTbJQCFBFTUwCkpun3brEWFYGHdVuAG9ijmyCdtCynfAoHwjNU5siv3faD6BaFMYgep23PyzRp",
  "key30": "3pQDy1zF2QG4HXHHZzJTerQL2WCPqYE57GyvjPUNCub97Ag1NXrX6R6RWave2n4VzRiFErVhXQgcGy5FUmhsqzRr",
  "key31": "gWbBfdykS1sPVL5aaVdudcMVePHwqfxj8ckR8jP7NSDyaozFq3afVAB7iwcwVoLxUNNQ7V2eTFvFb72mpNL3k8j"
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
