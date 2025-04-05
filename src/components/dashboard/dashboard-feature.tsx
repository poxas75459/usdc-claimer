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
    "2wQ9wA8NreaHZ6CRkmwj7NE6iVfRb9vKAQPrt1kayUzPzzgMFEb6bdtbx6HvDk5gXJUEVydB9X5o1xgw5XXabAZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hfekUhmryskfBKB8xxCCASEjLkF7N5WR7quSQYpAcGyyyJq3ZQzkdpBusFcq7C7tLPSNnF2wQx81dMT8ifhCAAe",
  "key1": "4pEBmkDDygGp5XyA8xDah1Up6RbYoL4XupwHVuqcErjmTzNzVdqeZ2K126j4YoLiQcMQbt3LTx4LS5Bn6ZeyM1RL",
  "key2": "66jPAVnENomVejn3zDp6FjHw73137meMZ97z2bYMdvvL9wcTgfSLoLUhgnEudxTX72FX29ASatj4mj5YLGwH221S",
  "key3": "cBN5xJdpFeHikN8w6FgWLrBsqgo2MhreFYCLVsd3ZWbDe5vNjRnz4WV1ekDkK3chYPpuMn2eDRX3rGw7MJ5Dpo3",
  "key4": "3auEdKeoTjJB2CfMQyaoA8FktdS5uybrV1b4WECfXn6LwG2SGVh5HUbQ4CUheNcosJ8roPqcxu7rZx2gH4YwXJuu",
  "key5": "64Y8xTN3LXo6GMT274LvawDXXH6MPHpvtgkKo7SVa7L5gY1jGPs69ZTU9HZaxxqnNEuJDSX6bbZLDdXvnyAZypNQ",
  "key6": "NmwPXJNp3dsXKa3PQGLqS3XLtG2wCvDkrapaqRcs4jvnKisusanFpJkptmyW6ryajtd6YpG61tGAyghHagSuPgc",
  "key7": "5T3HgkWTkw3sSmJiNJSkjp7MWtfu61ba77pEWnAFi1jRYt6R7QuDSuZiYWcWvW7ieGoN9t1SHQ4FABAAYaUwhXFZ",
  "key8": "5TDczHsiU8uX81UJTqS7V7bJANMPpzPpdL8rGNkoQzYiftjY1nHWvegvcSw2BU7GuT9kjvL1bJTzGZBk43FHSzvP",
  "key9": "buXxAtNXnENxdjuq2MAJUSeZK2XD8q9YHV8VEZ25WpMJSmXWe5JBuUB816HdEP5v7H65bT9ysyPXj7tsUFWPEnF",
  "key10": "62v6B8UCrgKpWj7c3Ho91gKfuKTq5NgDjio1kk7n8dPNYSr4ja4ow3CTj1jL4PDL7UqUTfgqhFqLw7pDAQAKvqxc",
  "key11": "14tZLnF5RAy1f1L2dpsfnmLrzxCrzC8b48cofF11xX4YJ19PJ6b5WbkXrjbY8JxcstVaU4aPvKqYjvSXSMP5Exy",
  "key12": "3Cx2QkZ5FcpvarULZiayMYdeJ1vkCM257WFznjQm7QutRfsfzfuuK4wQT9n3SVyZbYCcx4JWJoqvsoM2uFaerU23",
  "key13": "h4FSCwn1GcXszsRsKYCRk5L9WySMQzopFVVCu4SrymGJSG1tUAjhAcCAmc9vZzuaPsVY1MSoHyB2T7eFM8nQ9vU",
  "key14": "5RxJNPtjajqSPZS8g2ipp5uoPd4UJ7UiaWekEjqrLFbqbL5xKeJf2cGZraybNj9bxULwxKq98pSmN8yvWXjM17gM",
  "key15": "4TPeYNgaBErQ8rkoRWRTbTn9dP22CqbHDuWiv2jKQHpNkBWM6zSsvRnZgp9QXFN28CFzA7x4F4ZWeYvRAYRiBjDf",
  "key16": "2L4gdKV8gP8Tw3TFyviqpCausKmc24bjYyReC9UJGGCoENsQGHA92S6Zuj1Gvt5bR4Fm1Tds5Jg9zoyyBDmauXto",
  "key17": "yRHLFdJdMqLDMeBALUCUgZYTaqnXeBrU6J2RSfxXHs97gfsE7uNRz7YCCKs6aqD8rc3UWbdZJDKYMHXJMUcqkfm",
  "key18": "wZikFNUgnmVSUCk2PcRqGmWH4a3x9YKJ7TRWEqZRASzvgjQgpd5jscm4Nnd8HpVm2vmyJ8Y9qwyirxREwZhhmQF",
  "key19": "5DiS2nKswcTzUe6VVbZp1jEY5sLn4fMfpFqQ7fe8AcDr7LEdTau57uD9fPduyVEhAkWAoXLHB18k13sA8RWm58sK",
  "key20": "5oJEJuh8EbjpssetAYFg7jGDqi2Zh5bu5vtA6ThWF42XzNX9MskgUN41QVeGHzaUB4z4cwrCMJx79NNCyyBDPpLD",
  "key21": "3YWiRvmJyyWu2gcDdbWq6YRz7EzK8FAhGwJovDXuv2xnsdo96BT4arXzUbUTFmuzumrDERex5LEddgVTAG8xxbEq",
  "key22": "PWaYq3AvTgnT4n9Rxr5ZTpNJs1KDxjnyjMy5eBP6YtJ1yXbxJgtntNNaGp2am8rGZAv1Mt4agahZZ1cRmbAKstj",
  "key23": "31nVZmzcqei6smemQriija26rpXyWQizsA8HBuZbHGfuDCy6mmaSVMHDbgUeimdwUBeDDw3FXxHVk3MQL1T1DkCj",
  "key24": "3hoyASHHZWdRnMYzWq6DkTDAQ2CwNJKAuwqCCR1xVjbLacHquSHjTXiV5sJUaPuYnUEGLqyEvVnyPzvVS5LpNuGS",
  "key25": "Lr1F8Fz1abG2cG71bmKK7Qv1YoFxeexG6cqKZgxfu1SeS3JEvns6zkf1hJ1GLTAqmrwMtHPQ7ooapuZeq4wG5Go",
  "key26": "61RxwSN7RogrcgDkgQUoYmbtMtPs1As9tV51UDawEDQHEkCJHDAXim1YrZtEopouZoeeeb3NU1HhmCkrFFbqXQdF"
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
