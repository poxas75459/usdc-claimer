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
    "5MQ3pqegCGYLMzZTt2e4R8eT8Q1h5KijwZWpXWGLVhkAHi9BNnp6skhtr8TgASnANbULEGCmVkx5nPNdELn8mbqD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nwzFNQ5yTaDLzVR1ymLhrybzxvQMkBzeFnLnQa1m4tKjikNw41pwDJF1dh45ocpMznTETXsfNb6EEzGk1mv3ozu",
  "key1": "5b7Q9i9R5qciKeCrNoEi9133DR7QBcuT9HAGkaxcNysYC8MAprLj8MDE4qjimuA5uBdCVrxw4467Xhy2Ufwb6F7y",
  "key2": "5nG3rzHtv95CvAZz7Bbz818kpZPH2X7UHwn2UPqnrvnt2UuaTRcAsKzpLLBDzSfgBq4WiysmcBUEE3EwHiE56nN5",
  "key3": "2MMAjdfc1mVbzWqqcqnKdgiGLKzjtzwapP6eVoZidX46jcAfEfdhVHxjgTZY5F6eatHt7fSoT5S4PfEcrxcdwcca",
  "key4": "hw1ypNZX4iE1pgHbiCfBGxi8KXY89XeHSMvLsr4cYqL1UCrJKWo8qXMfY9dZxXAK3nJzbUjsxpwFfHyfzq8GTXj",
  "key5": "4jBKd21BbtXEEkFwDtqvLRbXRiinL7kLfcJK5Bs3DrUBAwoKncxm2DsWciFq8HNMekS3qaZH5r1FsPi5fNrjbDFk",
  "key6": "2UJAUubs87oXyD5zJAkGs9M6rpYF9aKPD9e9tjNjHYUNeLsvSYg6bUnF9sX1iEFuELrzcZ117Y5E96yMkXN1jyLz",
  "key7": "4pQ1hTw9sfzEQyDZg3b3q1s5kWhvKFuvkCRcXwMUAe6opdTRqTgXRTGGsuthGo3YEKSGNAnD7god4r3LQTB3X2os",
  "key8": "2CcCHgHKZjWRHsjdQG8e2mQmxjy6k5Uv8NkauLYsGX4YcniFdk3xGWZEH8FqhUoQ7qbpEpHJcB5h4rrNh9TMENBQ",
  "key9": "4tJaGyHZFs7v9WLEAWyJ2vkJPzfYuwHXtZnMJ88sZ5QvYrVaJDi6PcbYEmFyrrSgHBpCCSMfFaNuFFBmHCTtbQx",
  "key10": "4CA8snfTsberamYjDqccRhbtSRUUXUT6zg1dLDi4DF4oSVGgpTREXBNJC2ekDCtPJz1gpnndm8RcWp2ofj12heUw",
  "key11": "3hsxpMFzTDLKYQ4T42BM4pkDfr5Pquw94siP4HYyNF7JnYeEwu95fLiEEJh5WTWQcY5q3iGqgsDc6UzTv2MPzj2L",
  "key12": "5zuc6SyPrftq7rtFyYmxvC3KZfSttuoQiR6M9Fxb7VN2opYaKvjBdq3A34NoWnuYBwL67CB4U3A56b7znSrqX2rC",
  "key13": "XhaRuy4EpK6mxV1ZcgbTEX1cRo4QZkX8YzCBhc6k4mB1giPZTTpe31h9RVq6imbHY9JpwtcJtBig7gKrSzTzFiu",
  "key14": "kjBmjNqxQbqkDHGqtekbkbJ5hmTcaS79fFQ3ajKxvnwkMswVHf6x5CKmHJcrATD6iznWfs4Gmca7LiggMs2oQUx",
  "key15": "2aCpToMjXKBLnrmkgG4tNu2dXJxLf7YPqy5VCNHXzMvYqpZexhvN2YrmkAXHGWQWz5eVYbV1yNxS7hbe8CZz5XHS",
  "key16": "FBXq87axezfHqWE9UQE3yvFdhowV3MmBZGFKMhgLrUxNyWR3GhfAhk3q1H2a8D78apEf6Lssrxufirh1yQDhYnn",
  "key17": "2rT5fQXHyYrmU5g7YbPrujxPc8kzLUbkoE2RzK2incUjBj8yw8hYmpKidVP5u5crxekuD46pLvoMBzwCBeM3VhHw",
  "key18": "497rrNEcQJGix99VXKro1PmzUY98VZjUuXzGDpLAvTFAqz8YqMfbDyABxc5KFidSs2FUjgCMb9iAdxZpvebrd3LU",
  "key19": "5F7kErqiJMAs2g8GPuZwR499F9zgBdbPZSDe9Rw3NpKuzv6nwxrsu2QMdtitqd3YVKvNxstBg1dZTKqjry3sGkSH",
  "key20": "3F1gpQDg6d5oEau1TRuMmBYBPTcuD7vj81heH5RPZWzhfUGpG8yCCaoxQeFJUMAhdAJMNyV3j3BXYRNnYseBePrX",
  "key21": "d8xBUKxHAeypcMyfAtWxMonp54DpRi8d1gDBHgrG2KxRXvu9TC1zAv4BeuY28dXRTogSDcJoZUEYoL1EsprPQkD",
  "key22": "4VWYDmELaxqpLntxVzBasaHbrqDKsdqRDZDGBiEHhW8S671S6Vfqb3snfdE4w9WcnP9kQnei1wyNTdEGisjuzK4G",
  "key23": "5EkisyGP7Lyyr8XmHpMe4FLoM38GZVuhxgWBUQ8pHo5G6UKmvmdD724fqhuRMrUbSx88hApAE1mvBeC1DzLj11vt",
  "key24": "mGYLLvhBdKf4mTrxgWACfNDTyYGun6DTrZorfpC75SfBMSm9YcpjQ4T6rJDh7TqNrQW9F5EUSeZU2CYpQMgKASM",
  "key25": "2RThr1gy26SbAAAFu1gJ2Zq3ogwLw5k85K7hkk9E1pxLRxyGbnnmb15jYwKeL6gNgbkmAfz3udkLRXNsHVDtuV5W",
  "key26": "48aoUP9fVpqqwvXsiQsxqprXCD71VjDtCgZMGw94yqju1BG2iNwtCHAnJCmMtp1KrDnmDUBuhgYoxv4Sk2swXKRK",
  "key27": "4toYJj8dEAzYNJYCTpTM9GMpLgLyo38VwVRTrypLo1y3Aq1VZDBmp7JE6ytrPCCvFN7eSL7FSzKvr76Y2yYpfxkq",
  "key28": "oYQ8mgRHfRDaLibzj3d4vwimt7EaMBnLh8ecsB5rGdhJ4iXKfpVpC1jjdcXixnbq59v7j48BgEJ8rBNW762xNDC",
  "key29": "38GjpoS92bqXWRSBF16E8gJXxfyRxH7qFGWwYUs66r3HL8RQPqtaqQL2ATfRGeu36pp6JUH56MEJkoehNP6T6jpa",
  "key30": "3edGFgR7Q8jfaSXn7vLWrctneZBpcXRCWNW1bZGGDoHCszUCEJRS2kEbtsaFsquRxcEmRXBAyX56RL6HhGbRkD3c"
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
