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
    "5gvzY7BfoyLhV9xouuXgdgG8GqnFcELooRa3QdtKxTmUu9Sp6MWertyH9ppDjmnVUxA7idaSjymC9SaJYA51qDgp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NY6LLH59bEVydTbrFbMuZsE3XUQauJWYrBLBatS29toxRsa5sLL2JwQBVJsfwCk2AJPd5Pf27K13eaReEZZARGt",
  "key1": "5dESBVv8EkA1zFV8rdchJRjQN68NGRYK5ywaAfShj2m95J8Ro2VXnnoDFW1c7zgv5P755dUZB11AVZCN2bb7dprW",
  "key2": "nzcmKUfHArVF6uLkjS1MDMw6F3bjmkazNpdbXKuzuHtsmrPKVXLVsQZtTUY7V97FJEsKj6Gf8mREiPH4rtQwiYz",
  "key3": "58P5hqrcQRXfoJrUo9aoqgvung8wGyMJuFvRZ6havPndmtdXakr8L6aYqWLQKRwxsR4KxPss3eHS2aacP6feo9FP",
  "key4": "2ABtFmQ36Jri8mQyL4rwQLkoCjXyhPMtonbWnkhLXxsL9xD8aY8Erg9vHk2X2k4sePgUAst8JBXPtiE2WirmSTpN",
  "key5": "5QF9EGyQobHvTUbidns84xUagAkUEMXkm8UvXLtHpkYt6hqqVdgd5YQt7ykwsc7QEnTAWd3tQzdZ9REQMc96RWfo",
  "key6": "4fCB5saEikzwUU6ocPYrY8TL6Vmdvv7SoyaQDQkU96T1mF1akQcBqGpQjSQxmYxEFXDUr8EpJeC9LfGF5iPdNcSn",
  "key7": "48ocdoZ2SFFFM4WGrWi6L2mtu1d4Bbvwu6UUDSsrG87q7cwUo3UJWKvo7dG1oQtvYwSipstGBJX6dKFA8oEiMAq",
  "key8": "2wxPQkPgUTYaB8q9YPgZ8Zjq9JbrTuycJbKKgLPtKJRG8f3PXmUJBxsSdHq8LnPQiSPqNASCRwwWY1XLDwGVgvLH",
  "key9": "rBgcavrKNUZKVnyYEddaDfcXmfAXpuanAyJqhPZzU5b2kYt6zNAumh1LxQNUUmeH65gz831jCtq1G49uAzLfyD2",
  "key10": "4V4soUDMHHkvEwgimtCm3vX2jJ2JamXZNFM4BExBKza4BgtEbgjoFJwVfDfUVnXxEPy8b5rqWJ446aFvw3h4mBX6",
  "key11": "5cXCxNmmQkTyk1SDYyK2NDaSPdSHZ5ZpHQLvx5dDSACfiq3nWxPSnDJE7XWCEVZk5UobmuWTs8AtdpKaCBftq1as",
  "key12": "3ReBhnRAGwiZ27hXWAdRi2YNE4ZWGgX7PpzFJizmCZ8n62VVEGZhQBWsV7at6rWysMbEqdRPNMd1RRpQiajwbq62",
  "key13": "sUVFb2Nr8jkLs5GxB1VoA6eLL6a6xiWCBG275DgmAYP2QLt85CCBH23bABNiz452MALLqTpHJ1yNmqajzvWeY2n",
  "key14": "4VJ7D4tZhmSNAsagASfPpAVYcA4Y7gYBcGMn8yJkKiLDccQPxy6VweXT2p2r2oobbB9f31ijRcmPkGtRXoTpa9mV",
  "key15": "5Gow4UARSTM1m8mAsWbYymrGyhWqtA3qk3cxFvAG9RDsZkYsBpriYhJGp5B6YHHfug9MegdwLJ5KXq8Quj6b7QXV",
  "key16": "2WWxH2gp4ZCh5GLQreNuwkKFAwUcuJ7zWS7ew7EanuQHESLfccXjh4oVHTfkFS4SAgAAwQqLxb9TnvGEHHZtpDkR",
  "key17": "4sj2xHxwfQK6qCf8oPeHHMX5XWMqtFtWVPzG5mf25u9gEVDcybETxy878CFMPxLqsdNG8doDcHMA6JypkmpCwnY5",
  "key18": "2K98eXAna2CFfBSa4jqzkv12RW84VxPWfsm9U7oB114SdhCzguixLqWGz77jdEqeADR2bG81UEqrcLghdeM8KTwH",
  "key19": "4mAHd4cRKoxVHisNj2Vu4WMxKvNKx4oQRKdMtzAzWAdGg5xpoLeuTk2Wh7z8AQ3DfvobHkrFSzxyzE52mjmFpXGC",
  "key20": "akAW2vYWa3dCx8AEwnXGWFtd33MwQFtB9myURvqrBjDjDd5fDXkmKrjaq75twuK8QNmEXodxbmr3S1MdmdWyf3e",
  "key21": "esdqY4ozVSBsY9qmtv5k7YuJtHAJ19UEekPZTz4zrK9BuFqWsZuqDpUPG9yWHaBCuvPGBiyuB5ubtBffQoveSEU",
  "key22": "36ntQE5raqUdnubramez2znEyJfqhWYFU31pPsuK7FFoEbSoEwnEFAczZbEwsY7wYCXNHj8rVX3r1wxqqjjG3DMD",
  "key23": "4Li77MhmUHvCwMFQ8PsjhUXo95dgQmqEF9eCaXRoz3RcGbNY89T2JbMHnmA6eJ4vjBhRjueaPpQbZmXNjqiT8G7d",
  "key24": "5Yr9hJWqxQZAfquo9AoF3AZnfp9ugB99TrXj6MuMvhUoGhuewF17LUyMPYiimTGrVCp5jMPWwFeZa5ys9rqk5KPz",
  "key25": "3HJeXRxyg5S38nuoKc3sRU2ss8fanwWN8bpu97bo4fyjJtcUoa6VtyjtDtnScq4RVhjVd99TSVy9g6C2sMqwWo5N",
  "key26": "2bcFNLsFcrAACYqNzvX8DfkNGfRwRM6WVBifRbLdYfJVKhBDJvCSnWiutpyfnFGgJ7AawjvkNe3tnvnMSQ2hR6EB",
  "key27": "2tUbptdD2kcQdoThHkY4Z8z1RWA8cteUBZVk33MaS1ciqxGKK9nVqhP2wvQStS7WKv8AM4v18ThAvkFsTKnihBcc",
  "key28": "2BEDQ4rJFwtDyemsidtRtbN6QMHxR4YEhrPR7tvt4FBZRgPdKQm7Y93HyqjD7Tt2yX9DzuWgjUo29rmiSYgxNCGm",
  "key29": "57jA48gXgh2oXJYq9SNZKtmZrqNdj6vNG43jPJKcoSx7KxskqbudUm92rqL3Bws3KrV9zpu75SQFe23HnJv1K6Nz",
  "key30": "5WyUeWwKuY436iS9AZzzH755JM7WPRE4VCT1QjhqXfU6FUwLh4H8rrnZFNwiF9Uco5gcJEmR4wTGHyrEKPMKcad4",
  "key31": "2kampuBYA9AbRrN9i3M1L6srw8y5VMvuJf4Tos6RaM86QNQGzhVSaXmxEGioGEezECE9zmaUdarACozGmpsBeifT",
  "key32": "2BLa72EyJ73M4kJDKK2haVwnLAHEGmjpDPEZn8juwoUXyht8SZ7cy9pJzDQf9SnQm4V96ZBpzfCiYYSKNZrLtHn9"
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
