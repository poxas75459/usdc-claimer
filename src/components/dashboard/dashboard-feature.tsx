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
    "LWFZFdZfNgFkPX6sSeZJSfp5cKN9UFEg3zjw9ZLq6N17HCcGGDXrHwqm6kMMg4fkGNpSrt8tyFQv9Q5iFjwopbA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gjmcc4CeacjusAyeqopJyfj4jFfWnKpAtKiAaHMhasBnnC6jwq1aqami1V8W7imrUiDKgjPtFdtonwXLEkeUupk",
  "key1": "4J7Kx6s7PCXnmcF4nAzbSx4Hun96LaE8xztJt6CAv5hDoC2ehgvPFt7omacKokRywBDPhcAjZd6LjycCRkWg3VHW",
  "key2": "2yMagoeUWkcnfsWiMdRY6rPEpLXv4ryTXiBA5DJcoRocdUjCKPsohKcRQTWYnb2hUXs4ppNZtTY9FopEFRQs17Er",
  "key3": "wYVH44MtLWfnedrz8pMkN2yj9vzZEPDa8a4c4EHN9DtRAbaPRcns4Wk2hJS8We81ztGrKzVLDgMgLr9eVz7VGYt",
  "key4": "3ybb2egkwejU3zRDnKWdnNB2Mvi3vXDArfPfrHJPNbPjkw7BevxzhVtZQFjbzHEmEcHS45vMWNmmwWdugbtx4efN",
  "key5": "4ZaGbtNj8Zj5a6xNj1eKf8JLrY3EfK73TkcKvdAy4Cfrpt27hP2D6S5951A7kM1rFnYZ8keB1eVfhc8oSgqUWWmJ",
  "key6": "3wBHxUzbZvRa2g3fCJkZNGQakncM6tpWoi3tzg4r6Wqwb1Twsh7gjvTmr1pZEibWnTytd2FMEKdadD3muuEhMp4S",
  "key7": "67nLaNsXovqcDDpoZKyZKEZ3o7M2nhD2UrStwg5iLhmtMEJnur29Lg3dszvX3epatS3sKR3F6xYy3D4jpQqogzyk",
  "key8": "4qGB7SMBW3zCsmk3m5Jy4rigxGA2cCJ9yTxKotFCKPWD5x3Y5dzqPniDW6KxuzERsprnYrZAeA1z6q9dE6twC4uk",
  "key9": "22woQDLXWHb2WPDzieS7oPKab1LWmD1NaEHj44NgKyLonRyV8TPcSzkJiSLRXwHMTyionwJHQoxJXgfHsTwBewVY",
  "key10": "2H3RdFxs4V9MdRzmsXkBbFB8PKR4F2tjJ5GCqEWW37ZcYmBJRhfTJYE4Q1D4ch5ogjomaRzCYas3i1KWFPjKbbP8",
  "key11": "5X6D4auw6UxqxpHVhxdDkcCysDVKDeTDURQdTBQQUmu477oNkZqPXm74hePVDDeHz9zK6sM6KfTvodwwqZjhB6Yn",
  "key12": "49t6iTUqbGywYw4RvrTqUcxN9dHgtDYf9n1ZGGiJArTB4jP4x2iiidqja8d3yYVQqup32Y5qVY3y4aWS9QXkPent",
  "key13": "4Ej8zQ22tWFz4nfbZDgpqEe9DYQuP11A7Kq6qkMMJTw3xP8ZXZ9uQZ6xNktpoFZiqQrFReHxcPiGDY3mkf34YmJf",
  "key14": "5Pk6KGZygxdLpRPm4jf8uDhFHp7QNRiQDFPRoFLj3TU7vekv8Cba2BrLweQpXEEoqCb14XwvQsgdsqmecwE9kJos",
  "key15": "3S2sdrVQkBBgDenjhq6XMWGvWXGVtj6XXNqQ8DvYXsfYEM1zRjAaN1e83q56MMm7G2j6ybfRqSvNojnKAwCnQJjR",
  "key16": "5T8uyTwWgv38eN7atkbTXixZDbqcaDE75T2isiMsjW4qiunU3gP2CUWiXTKdvABerB2YE49ugR1icCr6Bo2adge1",
  "key17": "2xtGvrZ7VeG2ioGdmjsPfgYqrtjDmGCRmb1xhBhGYmbNCCJwbo8kL3yHtXDygqWoAJBeBLXn3GTVq3SrGbhwZpCM",
  "key18": "21x1eZZdfD5xQ3PgfUa7V9hgr2VxLZqvjSQwrCq5L6UV3esPFaD1P4e22d1erosKwUvoNFjLAeAoUR6A2rXyKCih",
  "key19": "wKq2rw8Gk17meFZ6C9BehoTFU5Sb4GBbMyyCEpToi2Txdmpdwb2BHzkuiBf4BtjSwYMygLVg7WYVVgF7yUtk5DF",
  "key20": "62mq1MkfxoUAZWuuxThFcGcHWxc2Xsq3Dat1DaoPJYMnAYHEbYMEW4Lim1VbTURAY7w3S49cJAhCKap4Khhw9R2z",
  "key21": "4WGxXttzvQGpVkyJHuJUnZSiQTqzWEwa22HGhuKyHMNmxwx4FHEriQPUdq6kMerkKGgCLstuL91Sk94YQYU8KACV",
  "key22": "rkL6qamqCee52Hn5v4aAqwNJ4UzpbJ5q5tPryeWQmrcBvRLNeXs51fJGFkRn7kUxhuwVwkifbPTLxBXz8R2ECMF",
  "key23": "bJ5H4LfCePSN9ifvwT8GnV7e5Y9u9mGwod6E1psLEyb1PDRfvHBv5hKobe5q5juEmX4jsjVmZrngrmexrASmEhW",
  "key24": "UDL9RqUqWUEP1PVbQctEhxc3LJ8XP1GzDdGHRdHRdP9jLNpnXjcWjZaSEK2miaRE57mDXuZxzAfErP2XJ9AmTVA",
  "key25": "23Zax9CsURV4CKGdwNncs6fbhYSKGgZMLbUeZWzERSSAWpEnxUhobj7yFY34JYDJwkL5PgMs8gKxH8ZR3y9qQNzY",
  "key26": "4QDYQPPNL8V7CjQgW5y2WxA1GtaAKRWkTtZkZ7rJXq8riRcGoAd7LSaMBxogYNreaGxdpVMES6DjPseA8y45gjLz",
  "key27": "2g2bdMy7CemixH9HYfxkEF2JWBUKqX2wVFmnEnYrLMPwKkigTvmNZXfsAi9X4eS7KFwFWjHWt6j3TSkqVhjm4H4o",
  "key28": "5KM1nruibZT9dbchFjPEXxfpv5XaGd5pF6SdWoyW7omfnG7yazqYdPJVb3tZ4FW8jZXsyTZxufqj8VQCDGa5t9WC",
  "key29": "5FBBLHtGKYkAoddCx3jcJv7Rrq8p3sRnEJ8UGvoWjCC3rr42ZXvNTwEyNS21p6Xf5MMeQx582USEtP5jK6FZFAuY",
  "key30": "51MDLeRxS5E1VjuPdZfEz9HvfXJ3TQWxnbT9h3XJJJuwUezVwmQkwiJ5GLtoPFdUfrGtENA3dwNgtNsKGGNjpvbz",
  "key31": "46MkeD2CRYySD5o7RfrcMGtXGa1sCxvgAyCgX4RPDzrbF2aut9ScFCAVXA9mQQ1iCvgRQhSeKgYGwN8bFoY3TsAQ",
  "key32": "23zAPvrwVZMoSdweQnN6z3R1uKxEVY3x9CSYV3tQp2hhkTFa32g4d8YY3QLppBWSjmsLAyxobmZ7s2CQnmmxFT2w",
  "key33": "2CbY9CvpnyS13u7sdtaPXhDGwek3eL7AfyEZZkK38vhwuH6jNdR3bsUKe2KiLynAhhagGhLma7YiN3scsdmRdAWb",
  "key34": "2zNdsMYzQ5S4PqBHRAVL1av6ML8dFFfEjc8Rjm2aUpF9pUvzVqa6rE1z7MjPMhekaTzQqHKUzfFKZz3jWk51Zvpn",
  "key35": "3C9hFab2upR1c3jEvuoNrBmzc2t5rK6AJUwsAdxKYd1uEAcvgFBq6HX5i9EAuuGqVyhzfKR4s2GwZAg8KHncN85y",
  "key36": "Y9h5g7ice4dxtSjENH43ci19YB6TVTdtUnk5D1w3CWteJTpdR8U8M1BB6ZuLUixcoWdihqcf6s877V24NJ6tjcV",
  "key37": "3RTzF7cNs6cdDFFd2otGfd6m4nW6n3p2SFn7whskYaG4snAbWKUem1q8pfxTmYJdCo87WfV1CKzakxEpryzadTr1",
  "key38": "27bhxUzcJth1UQXSK2nw7HpMbixZRqdCvoiWEUQqCycZmMXEGJiPpRXFxZFVn7VzpbjxXyZqQHojTsBR1PeUKbZF"
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
