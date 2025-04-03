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
    "2fMuB2ks8sBHW8hWMwvB7J5Qh11hAT7mFAzG6tfGf4YRDks3YHaU5hE3HKzZNHmL95cjUJeVSnpsFuxzzVdjerZT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fLShfykcABngp1XC8tKjwxzCHiCgPaiHChiuX8p9UyLY3fnTFnvvNUi9oVu2uZeV1D1gz8NR2KHusnqXpJo5yYG",
  "key1": "48CPok6CQC96SYEkH73HHiw9D2aSASMcx41SM4FbS7iFFMyEB8AzGfXf3j9m9coLXGpfxKt4S19u1oPJz2ztsZnA",
  "key2": "5GGAg2Xb7iX122onBcrFxC7HYzkMpjiH6fggDKFRcX9A5qswNDAShRsVyxBLG2aD1WV8xZeVqkaw6cheZcc93on5",
  "key3": "JVPdgfXabwQ26GLaX7EGbVgKj3MS7JsfqL6p4ghhXaY5o91JsvcsLTwMZGf4kryTSJVFP7JDE9vKpCcBrTqFRgL",
  "key4": "4kdjqwg9jWTFSVMiL4bwiT7GY82Kezeb5DECbMXP5Wn7zAA4Lh5rPZz8EFUTfMNKYFw8uWGKXDgwZro5yyBb1Kn1",
  "key5": "H9YQgFDNc2G2LQkExemtgWTwsaRfSz1zu6BnHqdAEkoWpXKSmB1xLmYQfkF8DGvCQ5HiXsL54MCmm4JScqyXP9s",
  "key6": "3Xu6He9YJfh2eKJPTcEFFw5J8DPbUXTZBMqkyKxpe4TN3Jr4nJkjekaENTt61FB5RaubBzyKmgmMMARLxvoKG9Gs",
  "key7": "65miYT4heoHFTgZxLerd43XYiftYJ2ESpGUZhv2qbgWJc2iiVZXG9C8J15ptr45RXss42rGvNb6TEAmJ6v4pdL1j",
  "key8": "3h1YX8C9tePFXPhpM6dBkchcYUM8zwuCMZ3WjbKNqoRdVNPrvqgiXsQmBAbYgFyyCHHRVCyTPzrbswTRbXTmV8Vy",
  "key9": "614hL8deqiUKKgpgQhsQrSU4P6giinLyqzBKf66WXwpQJHNYtoSYeZhmvQjUxc6K6iEFuJgFsF851kd11WcWrwu3",
  "key10": "5PnFqLgAx6aR9k71QDZUiwh4U5Q57vNsp91jFctRD998fgasMu14CPCEDAbbGbaaTPz4BVVGUyY2q1VCB9DTSYn4",
  "key11": "4kTHkdUvfq7C6vijETwGGzjkHjxmBFzAhkbbJw1yQ11715MGoWmSaS3ch6i8BvsSoHTMyWJ4tmBa1cyymwVsghZx",
  "key12": "3dCmHDyiJzcGxfgoVDkUCi8Br7t9W91AsJwpLzRKoDmm4SVraNU9ePT7hqaZXaq9Z1ohT2MG6sUYhUdrDMG5pUYJ",
  "key13": "5Sed66NahkL7T6GBh2vfyAd8DFbhfMAC7pDTWqynAmWgnsy4ABia52pvSbn9vnDP9TwmaeMV3nLpVCK7Kc3CLBT6",
  "key14": "33mfDmLvgm6ZM11SkT8S26dakbvx7HjwxCAfJRYmMQVvrVmtsrdzhHt18tmgQKEwk4vWfzWRgsKdQpyVwsQdMNFf",
  "key15": "3kPXfEbRd2db3Jig64u3NZhRWU2qJRZiX9QkVPnWdakpWNHgkA7srmQMVwswRbKFHMkHBYUoQp67o6XHemrU2HLH",
  "key16": "54vLcnvsh1DiKATGWsw9yQCNn6DievptMrgbvb6rcNzNq9m7xSCo9C19ipABHpvt1FM9UNA4yEdM7UkcStJpwQcM",
  "key17": "4V4mQeg2QTRRbeV1bn3kS7AsMdEayG4qfF3fhB4G5y58QRUjx4tYyW8rotjTfqG8H21zuTDxvT2VQEZ2Y8Zthouh",
  "key18": "4aSPtr2vL1BqekMrgh53AhYdQbBNLX2N7iixgNbYbSxWFD2Ej8yv4VsJoy4mtgffoL9NLPWiMnDogaRdsp4NVr2r",
  "key19": "4mhVtDmUkhePKw63zaZ8qpSu89Sb8rDbRXyiSkkuDwJ6J8b3qY6NuTVUqoeZaQv2ySNecBmzXVznKyp5TPDgdyVT",
  "key20": "3Woe3NnW2dWdMiscrfkwwaLUu7kXKf6WUkmtw3WcYe64mGvfqksYwsn27L7nZ6BS371RNTsfhhSQLpN2KRx7qrBy",
  "key21": "31Wk7ZdhmuXu7RUExdVa9R5dFbykmmtH7XAZyqa5uHGF6E6Pjm5hXe6BR98BgLgeE7ami3J4rXdrxy4tvDkffzNF",
  "key22": "sHv17JaZx9dfCxG7EnzysbBTTBgNsiY61nAhEbiVY3DJ9ToL4ymM2xcrCW1eXswDWVdag37eM9oPkg8yeuaEddB",
  "key23": "57c2sdALtcdEExy8Awh6SKwcKdvb7BBQyVkTY5FKCVX1Gf3gvcbXK5frA3ZGFAGPz6u8rH2ZukvyBBkv95kdCcsM",
  "key24": "4devDyXeesX6aTBEYcFQVzHBBrq6kJcJUs1nXMKDmpeY3zUVaHTDZpAvStYVi8AhJMUreNGmJYXSyCA88ACW8nKT",
  "key25": "2jpUzprHpukz19BaC7Y6J95xPLXd98zXUDEQvycsg9RRXHcmnHGQWVNStG3vmrqnCgfFTqup87oB9nDHoioJhWUF",
  "key26": "4CAWUqPQ7eS37TVa5rdSaWyXhCeuSeyLamiw7FFqkLZA9GezemZfaW4bFupWhMaMc2BMno6CgbQpRaR8oAhjHgFL",
  "key27": "48r4FaM65LXkoppK484QDKfoVnWPvJ5vjX3kHPRw55uaW9xfhLFd6yW3YkounZJeNAytcvV5Rm1R3FrWqAsun5Bu",
  "key28": "3j1U6BdcuesCrEAA5EFSgnBYpcyqPsY3ppgoGwo7DXhKTp6qMjLbNHh8eXDbfbWvfRxhj2iUX9fEz2to2SRqP5EU",
  "key29": "33qsHrqSr7vLNHGMnVY8P5v4zi46MAQ9T8ZSrdt72rGbFZ7stSca3YhHJP9M5GA8MAuB6XqvpA9GAyjmYguJtWry",
  "key30": "5ewwuED9AAVWwUxkY3PUfvhdXYi8XAse5pZ7xc7vuzWEzrFev5DXNy9ysMVcZr2wzHioDC4cqwKtCoivrXDjo9k8",
  "key31": "3bQqNmgdnDJx8U2dMyEJDtApDkQDSKbELUEigzhyiktCxgp4EGwNRpz5gCyeuiFLRoTo49SV8gfoCqwvCFDtsWUo",
  "key32": "5bBSHXseVJAE1TE7HsutGPcJstkJvfr3pgK6nsnVCoTWYtzmgermq2SiFFGQjgbMHVgZmsApkkgHN4MKE7ZUGF1f",
  "key33": "5Eii2HprGx8B5tNCEuBhjDW2sZ2Jnp378JckPxQh15BTCxGhbwtgdapgVjdD25bryjT2v12YFAapVroKa1LTgv8S",
  "key34": "H1aXP5thQNAMv2kpJgtvJsfQAg63YCSAnwyxUbF1uAL9CtJ44EVdExoekdQ72XuuyJfmviZ2rLgTT4XX9BYa8n9",
  "key35": "2PnUhAWugzcPfNsNS1t12oCbyHrEQuyTL7qiMUuEUavPURPBxLtD1Na8o7canU4ZYP5ThHpssXMn6qqzcJjABdj8",
  "key36": "5PSigRXBQ7pYdAFWx3hzMjALo4KHHiBq5VxgAgkHYe2APzPFKL6Czy1oHK6Naz67PGUtsgkCu6B6Fq7AnqdhxW83",
  "key37": "2X3kStLTVqtjLJ4uUuEWCeUFszcTC6k1h9XCLjq32Y4KRQEVsRAaDsPffPD7ok6rkSsECR5YqqwdWqZMYMSKkN1z",
  "key38": "53g2XWsrxhDKNjYzdut5yH8u2sKJBqZMj6BwTuJsg1gpsiEM9Nbi3gcYVn8b3B3gVDRdzX3qEaSCjWmE7y8xVfRP",
  "key39": "47xLtRe1dqH2g4piBK1xd4YUUoQwijvzNsRuxoBRE2HRAyXWzMMPGQCwniE8bTbtbjBvYMfiQjx356R4qEU51tEC",
  "key40": "24Prg32xt8Np6j2KhXn7HE5N7w6BRG1wjm8f9vTqpqbR6NcdFzEw1ZkqQZTCPtJK1Wz3t3KdZVpDAdFS2adwwpY4",
  "key41": "56d4hmu4DD4K7iufGaWT5bow1GPpJKL4jgGLeDzukTuoGN5iHoMeBH7qYdv9Qj93P3sfcet8GQ8Xwtw6dyZ7345",
  "key42": "4LV5Nd3JLTSojts9BmMK6xUm7VwAcrWpnRwxxpfJh2ph2bk75MqLnSHLdUpAPUoh9cP3qKEGGzG4DtU3E7qhbBav",
  "key43": "2BaYyRH7dRRNp1QQ33WXcyeCXHz7eTvT6VphbvkUG2bG5zuq4wExdpiUkbgZJpQ5SHtf6UDw3BWsiSiyzazU9kb1"
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
