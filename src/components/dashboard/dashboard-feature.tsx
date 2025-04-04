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
    "4k4sQxCeP6WCfR9n4uVELydVTsgmYFpE1eiAC8x9QJKrfV5rB8cxJKWAAgBPLy5xgFpDzGz5XubLU3ApZxFs2NB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p3ygcpWtzSNmVNWTWcn39tkqLMipGdVarPTE6bAX9Vb49KZRg4xmHZ5HQYKyBbz6gwmi6xCYqFdwNwct9GUeLtS",
  "key1": "4sAZucJAav2YVM5DTZw73r8RfkwicYZ18fF2gDZcBx5GbVVcZG1xufKMobMkK3xAkZbkXsEEinge547uthBtzpwx",
  "key2": "2dQupRWFKQpUGNckH4MTPZcWMx7SmWbu3TM6Myd3uFS5TkWCRD6RjmqQnRGhCqaHuYoyDWVArGPnisHukaArE6Zw",
  "key3": "2Eab1nCkvseWMfpX6TvLrgDxtw1cRjPWY3KHjcHNYo4A8NSGLAPEuUTmKAPGWsd7jMNQ2Jg2J3Z7H8kHEYr8Auwf",
  "key4": "WWJBQND2dEGgqEhWRNoVErVgbmCpzBjWaWzyhqWRDv32uAKzBNQaUQGBuB7eSwg6MVZKtctftpV2aVMkJTnQ5Hn",
  "key5": "omv9VaUMQLsKRv9XwWaWGUEWrA9hVxKy4vy2JhkgNBdULZTbiDznHiEY1ZxLQBNCNxh4Jpq95obhm4pHgB9Vf2f",
  "key6": "5LMzzQtNpC2KDcK4hG82qnNKVVWok7geK7kttUFeJwVfys7TVXMNjsyau6ySY7qjetUrUUH3qknv1MbW1SSCbuEi",
  "key7": "3drR3nJQFMKmzCYKWw4gYSFL5HMr79BFhPrrFJjNcLm75XmuCuxpGELepup67G6gidkqnacfi4crxkqM52EVt5SZ",
  "key8": "GEXVfTZztiygrHCsFGsCoxJELsXTUHp2HgBVQ9BhfARdCMJNpYhq5p5mk1rmjwSR8n7U9VdKS8Aqmqk2kPkg4k8",
  "key9": "5zNRiKzE6yaPQqUoXi57DBQYskoJqo2dMx9krXHJTBrsPmTjK5aP5pqTGBpn6Jy6kx1zHb8su4QJZsGQaoKrpJbd",
  "key10": "5gd9ro5zZAHow5M6hmheqrJf7mF5gCLB6igz6SyH7yjtJZt7LBSP8g9RwnS9JbrPp5gXV6boZudEzaQQS9EvcQDh",
  "key11": "kCTbTAaqsCVpYCqx9M8UBo4Dq7ABS34hvCvwjRP7VKPy4YAgx2BBm2Y3vHTHxJ3jYBmnsRd415STnrjAq4fgHyC",
  "key12": "5oaK4eHbhTJ4cnX6tdvy84ixcbLyozoekPNDzs6n8375ESnb18pSP4QxveBsxJ5BXEYGbcm8mhcXcZFcz59b4k4v",
  "key13": "5TUit6jox83a4bJMNbftmnaxbtJXkcs2E6BUtEEEuGY2VyiFsXpz6fSF5MrUcktFW7qGANABTiUbFqDa3YMN8Rhf",
  "key14": "3hAnKgfnqbq8xjzRQhQEJaraz9Uj4hvQNe6s9kQWzw5EXzpm2sdcQYa9oGFtT9RpAvFBy5qcMWFnW8fVWuFpXaV8",
  "key15": "66PhBsnFc16Q93XE2SVh2R5AMVRD2JJABiLi2VoS12kYuGdMZSx22zguffVygUX2KHEqt6LNx7amAinjXWjcdeKC",
  "key16": "2wqCNdZYghe4nQ6srB9N1uiY8Wd3sPs3hEfzG21J1dFjsgzTrezMQFtftRsUuwhg9HmuXEGFt3Ep7ckqyEKuHdGU",
  "key17": "5KZQRg5uCVyRJ8RKuj95fdo8PGFkAQMKjojSTWWXQbGUjFVmPzW9wKdZJAXv3SUr7M6APMCdaWdmQKVn9xRXQktB",
  "key18": "VndjFpdvQA3VPpZpYwBtB2Cxxf4VpPYXucbL7QzgtqJAB3mz1WwUPm5Cw3QZtUBo8ZRjRRcq4YadC5sLVMXonhM",
  "key19": "5qHNijBzrDwRFzqwvphHDUkYeavVneHn9rjw4woPcfx27KboBbV6EfZQ5NMBRckTdFHGN8kb2ckT5f6zvundVbQA",
  "key20": "2H95HK2HVmji6vB52q3AftJhbSAGX33diVL7V9gKaMW2qjTTbPAtq2d9Y7QKvGopPwP7xPNrzXgF9wcTsTZtHfiH",
  "key21": "4p3vPtSH6Zmq9BGYMmNXGhzPJXBkvv7QUgyGdax86zeJBbaJ5AqCMPYVjTdwjcjvQPpkyN1Do5RXPTyG1bxj641K",
  "key22": "5EdMtmbmtwHmwKEq4cwMHiUTZAX4Wy5itu7UZ82gFJgFxybQcPjHQzEiBWrbE9tUZmqMa4Jh7pQ3uogqXqMGg6vQ",
  "key23": "aZykpsKaUd3PkUvy1KFFvDGquiUe9P2rxXntkCyXXFBsf8pVAZZM3occXqtbsF5iT2iEsPeXTdjutX4m8NApJ24",
  "key24": "3aWbyemPbfbezu5deWqY4Z4SidB7g4ayPB3kPGAWczTLYGvrTfvBXajyLMskVHhW4PFABeuaDAvPa4igTyvbn6dG",
  "key25": "Eu6neApRQUWHUt2ZHe1QT4M82cAtTyqTwgMSSeAS11qf4PSX4N6dGs2HPJTA4Z7m5nsvfcwizRZZZfPTN8U4nJQ",
  "key26": "5QHewbJ6DgK592JeBaNuQzZ4cRngVGk8wdvt8pgV2sE6r4UwHh6DBYjLn67crTGV11WXGo7m9QfxVJz1NsNUH7mj",
  "key27": "4fdZVDvA75fiBNDb1H2vfoHCRQRRdHHq2PtnRGjQCeZDB8i9V1dNt3QnU2z15yW7uoZ1XqaTDBBzi6r6UD5TWnhD",
  "key28": "65TNboKrojsebrZFDsNagZD64E1YN6qAXBdEZGnbeDqZNVyeW6UmicHQTABzAXVa4aDDUZW2VUt8CLG2MdrPnACh",
  "key29": "g77wfadwJByTGiea7oezPBaQ4W8GHUdzHoeYoZne7h84kmMv1EAhcJmtJWX1eR5KieK49oxjmdhGNagbYhZ3qFe",
  "key30": "3WtbWhk58oLPumJFXTvEAGhtYVQwktt1KiZ2cTvka1zP2D48rGYBt4XZ98WGYJgX2UpL67hFc2g8YNXzBTd9WQn",
  "key31": "3V1uerCUVLqv83ZU1PXrHRNjaGuDmCqzctfq2W8S3FNcdFaXJeZQEEKVdLLa3nbAPXEcEcwQtFXr4fbWcYiFHLDj",
  "key32": "3ZXZ947QS4dzg5RLB4saDJMaX4QPdwUcYvUGc8W4etzCzpikBnWPNqDsZJZq3xniFMSRoBgPnXd7qnvYZkwtHUgS",
  "key33": "2v9fmmWjyvYSgkG5QDQFAAU6pQ53TeVL6CehkZQtr5tDCiXUKc6Q26KwaRsrXq6tsHPy97L6GYnGchcyiRX3cPKv",
  "key34": "4W2rBj2NdTpFZCguAf6Npa7kERLD7xhT2x9i8MbqWkhpmU5dTbd2RcAQa1evHybDAQoi5gUyS2HRphhkgGBgFVTU",
  "key35": "9KCZWdDkLwmVXfxZHz1qhTwEuGqJZuBxuazK33DH4v2nxkD8AMtCCyct59dLehKTkFK2Dd6hGMd1g6vdRBtCtRC",
  "key36": "jekLbsaZH9wc1Krf6oFKwgZ7NfL5oiZUBPbALKSs82hreF2EpqxsaGX3LrSMNq5XR8N4FHxBcPwVx6me9ErXuSs"
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
