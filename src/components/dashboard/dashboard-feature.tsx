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
    "4jMeaEVA7UF4WPGYZ2tDwJWmcHMdgo8oH6LLy4J1GCUwB6V9kT7zFZRarqxDTe3xPJarqLCbd1jBzw3h4UFdajtC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JfMhmCyiCngfSm9yGF7Nn5Xg7AggxxoQiDizF7kTG6wbq9iFW1U11kRZoZCAGeJ1L6EaL79BQ4WaE7gkK3Uuhhk",
  "key1": "4e624bAz5CqD3SfsvxjEcZYfQKP4DG1t7FgKACjFEWYSX3HHMm5x3yb9UeK9EzW9tMMoP3go9D3Afu6JxnWFvJeE",
  "key2": "2cXG5XZTwg6XHffmUfuknmVJpLzJE11PycPR7nHYjp98QFuoWR1MY8k1s6cKCJDvxQjbMkDCnq7ChMnW4bPS1pUK",
  "key3": "5GwUTUY1uhLahK7GZFnYv8Bb3XpDovFHY9wgs8aX8nNQTzjidywRceXgxHN95sKZV1AuPNsA78K2XgYATphzzhhr",
  "key4": "4GxAFMLMTfY1BTpes8fjLHjcgvfCke1ZXv5k93f2Q78s8hB6CCFphsCtsCmppVAAjgVLZzMdSe5QfPNEhhRyEoqV",
  "key5": "pAN8bhmUaAXnCQQhJqfYeEXzvJ2VQcK7xyzqhxtGxJqocVPFmm3TPX3RaDKajBgQK7MP1CgaKGx32WbGGiavwv2",
  "key6": "5AKGWZaRmMGc8qrWLv28B92BMezLJTWmAqNZAUdsAseCsL8gfimT4Hn67uiT8PTVx1v8eEcQpb5x2FcWkc7tgewV",
  "key7": "4FCSekasUzaAxArWC9Y21z6x9bsHQtcGegnxYjrELR7McT55pm8XxMQR8j34m2oU9hALyv2pH2UFfjGVFGkBK7Dr",
  "key8": "5nxHHcMr5vTx2rccqmgmhVFZfJBYhzdiFjRVJQSSMqrDk8ynk35XYsy1UYR1TdrAHcBN9oF2ZUUwRJ7XAtA37ReG",
  "key9": "3BqA3PuDkKttPqiGZcDdhRdebKaywoux5DLQoJ1GkzaCmN4gCSDkpWPaVsU4oLBEU153LFdUmq4oE8GQeS5dTAK5",
  "key10": "5KQD8WQghz8H83BJh437TmWefFMncM8rqunFgiq5FbpAdYi1eEDooRzjX6W5wG1PZ3boPdnHq3kbG3aeDaWNn4ZY",
  "key11": "3NtoRydnivbGHp2k3ZsdykonZ6Y8TvPGsKjykWt6cpsspnTmJiNxqyQKwfKT4xjJUPM1QuNML5eZqrKYmQdLLe5P",
  "key12": "4yKY7PTc1uJPzLzqMVkegUthVKWLvi19Vn6eMyGTqnydkTUyRvyVJHfFxrvKoPdtSFcGATrLCkyAoBF7aKQHN1YH",
  "key13": "2xdc8xjutNrxFFU5bQHJmJk2XbQUW3DYNfC1U6b9dax3FCWUVaAJWMNaavQFn3h13ZNfDkvETvp5iLbvu1rmmbTz",
  "key14": "P2Q6WeTtBSKoHSUp8P1fSvXobRNCP1UoGUXKbj3ZfpkPHaSu3yD4Ps9o9jcTmhUo4zvW8uj8F6V14NW1xQ8gS2h",
  "key15": "2JPeqjhTM3ChX7LkKNP4LkoYcLB3jTWVJM7PiQDiwyaijoKcioChUJHJQY4dq1W3PRVUVdZE9kN7qhRUDv32wjN5",
  "key16": "4U48VUGRH1fynQQAD6VLynhaphBhhVfaE5sKF3ejYCBe7vNvAq1yM55ccvTHXyaH9ibHrYNFwaEFMYgavf77QbeW",
  "key17": "qAZhhkebr861p3pdjpitEDMyQHQvJbhLqo7yCG22vXf2LsH6jmmFsjJW4rw3EdjM2bAtcfax1za21P5gaYjruHc",
  "key18": "2vwLFXUdXu94VJz5AukvG4vN83siruDJY5PpyjegATn1R82QWUDmHLXx74QqXxAJtZUMLVWHeX5zVBuvZrY9Z3Fs",
  "key19": "5937K4sDSXfQ3Y4at6g3xThLfymSsh6YjksS7ecHf91BFwvwrafzK1FzvNDZ3CD9uioroFxjSbuwzctjYMb3VdB2",
  "key20": "228bHytgqEuuQwAYC6Xqxrhwqz36oinS5Hh8Tcn3qHdYjr5oCYMXDDrfYEov1pyxvEB3N4YRzvTJk7w2CvdMGHWg",
  "key21": "5gUcdSppW1GBbvxCSFNYyqGxV9suahL5vbhw6ZRtiL8JHpbHXoAJJdA6D8cT3HGwtpaRacvg9T1oekdVAhCegNPb",
  "key22": "4Ebs3sW6Vy5kEuYzkjS7B5faMCnpDvD75fWyMCBrkhKeueiWXMMhed7Jk6AmCPDtgPLRjTeZwnBiK4CoqDLSsQSZ",
  "key23": "3vsaHQ4HFcCVJqEfkmgmLzAM9mDNnHwCKqJRas6FmjW8mVPEfPaLEmYPwbC1YyqWU2Nb461jFFsEiLk8U8P1zAzd",
  "key24": "5trR7x6mkk66YpSMn9uRAFCCMd86TzVT21MV5Mqu4v8f9vXPBS4uckpciCHdfhwHGXGV4uY8S1zAUpvqeyPJHhVa",
  "key25": "3henj6zsimd6mtziKTQrxAUvWv54reH4Wir8WxyhgAReFzTmDhUXSEk2NTdPPAdtFZ3jDTLt3EEeRJgQmWyEezH5",
  "key26": "3zyAzvzGcVa23H6MC12Y4nqverd8KCzYtwcXUUaTRiTN3tkG7ntPVgvJyhLYcGtco8LZNW1kirD4aPSaBB1R5Cbi",
  "key27": "4H4RE4QVf892QVZhnquFguEdFksuRLG3v4R5xCrvVg61r6rybAyHa7fp8G721oVMex3nuYh4aHpo9v11mS89H1bp",
  "key28": "2v1Txydkxn93r1cGwa357QHfgjWnmTHvXVYGKYV5EfQK8887BVjHnNVWtZQa3H6YazfKsXp9wYiXHTwPPQFytdyK",
  "key29": "4QXNzfidAShbGxR4yUCsvBNc289UH2i6MsfyP7fhmC9yc69op33aV1x51qmW2RH4JqBZ2JSMHWETgRgW2t5MqzjT",
  "key30": "4L7qkUFYNECFRQ8bTi2U94hfYDXHAnS69v6XxW3r3i5pmJSRuhcR5iR8JjUtx7o4CqDceFi3stx3X4CEUgiq4BEZ",
  "key31": "4Ci8LXJT7dkLLRrofVsYD4dgiQcWGzV5AcqADzuDf1ijLoxeZNophvW5xpyBzw2nsvbR7ZUT2tAwgzkt3Gy8Q13n",
  "key32": "4XercDff7qd6CHjau3QPT1pyXWDYEAziixCi7GZHpzx87aX5pVGH1rB9S2Q9rKqyhH9BN45i78yNkxCLejVbWxD6"
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
