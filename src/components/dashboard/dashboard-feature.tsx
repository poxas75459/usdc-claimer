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
    "4U3Kui4LBYXgtJVtXQzbmBHi9cZrZKC47qNmhP1mpySm4zhAU9UXe8sXGCNtc7nNLGNcym5JFopBBVHzax9s9PU9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hiLjqDPjdM3DjBbCbUCpNZ7hhFgDJzoGcmvu3Brh98TCCpx7z6HvoJgzqC9UrvtG4Hs2z42ygokdo6vHTZhT6nT",
  "key1": "522Quij6ftc8A5eb5tB7TRPf4CMr4M4W9PsmzTxwbPH4kGTRRbmLCuw4Qcp7Tnfnzen935fgE9txHA54XRFoJ1fp",
  "key2": "bhxWe5uNDpjzJ8cgkfWNNRY1qE9HnQeWqUDYWgKFFgVJP6hZgCow2Zv6UQu2Vz39iwRZbwUNt5hKGQsqMj9S2JV",
  "key3": "2rRFmM3w39VnusVfj9hMzFmehEVbwFGhxZQTwA8HvJ4FR8HmorMRa1xJtba32jiLBRyfRSDuLCKxbFQwXdLE8XNG",
  "key4": "5RbpxoRJtnNFg82afBFdmayXKZPqr5J9QmpkdSCx3DpSxnqAuh1EQwYLaubEu2NwTcHN1WAtqw6a21bgEd4a2Ggc",
  "key5": "465USWYyfWmfcGsqHXTGcEGQFdWHw9BGzKP8ira5RrwmC55ja4QBEjWogStu7PCQKVPFcMtqbDbPubF65kdmHSZ2",
  "key6": "4Hk13aH4urTBgc7mAXSewdjhgGbxRSx4GyBU7XhBaubVjKCpgMM8YhR7qgGvWmGgaBpGhufuhHxL5kjBB5qwbU8J",
  "key7": "4vzCJoQHSRBruq1w2mEPnTvspVqo5BRSxz91WbCQKDh19dPZKqhvjqtj1Pq5VFKdjGQ5fp3F6XaAzJZd6iinwoLe",
  "key8": "4tG2ikSw5zfD3Tz1CYWgfJxsC4ZBpHGMFu4kQLxpDSKD3KgvLAz35QvRe1DtmZJ19EC6cG1DEZ9x5vvBChVedKnj",
  "key9": "42hUsqairoviC1VXTvT8QGVh7jZKZQw5h8bKKqZi2iNzuTjU6USJcuLTtGACj4FKdsvqjaJSQwrRQ4oyfrji9rKi",
  "key10": "3eU9THu5JHaDwf5BwPGCqu9juDXW8VyBTdhFkLdtZunW7AZBph81DEmaTaAAP7dMEtV43ByR9Ahs54qPnAHgtmdN",
  "key11": "5dpdb8jHzLgkQeW2WoSMDfA54bygDZaLq7MN8xNzxarVocVNLtFP3oBvw6pmYrAtasPDF213yxVeSCo3dZsj6hfP",
  "key12": "3J63J3HseMpvQcnSZQqUMBcB3WaofccqhC8KN8FCn8Dc7HVRfYWk9XZx4M6hneUoz16YuG8LNfkYR7M6SKmWCdBR",
  "key13": "5a1PjmyyoQs6UvY5jQQmerJAepkRuboG8w5fayCWtJqwM9Hrdm9vraYChGta9Vn6JH5wd15uoNKJwBawkSd8gvUz",
  "key14": "4cViPm1TvYrUs1rZGYGxLtcjBt9ctPRoCqoHYcaKaZ8UZ1BrwiQbbFKpXoE6KHRVthPYoCC1pE9cjnpQCEBE6GmN",
  "key15": "3LYsRDWa6bfVYWZypq5VSn7fgyEAuJuGUNaypa9C8zqTfopsjvBMv53Pdv7UVnfAWcNHfvSDQZ8RsQjpuhHM6sAE",
  "key16": "2GqXAjp3X4zjbrCmSHHePbka2JDJHVuTdGjXQ36dJmsxX7rozqozqMVHanZJWcix5RsWV6txYyyz3M8ADRCo3Cos",
  "key17": "2B5mqSHMX4zUzrqLRxeJruJxeLsLBzUHybSz7cYkizXbaVaswEsJV9YhhBQ26rj4PwB7wUc8NBQF93w8QXSQP2KX",
  "key18": "4UkbyySUw3gb3wcHRvV2YcrFBZUMuHLDnzrhPPbbeXttuBEa8G3pwCpK6fBtUroFRyoUGyjmvDvroVqztEfqSgT8",
  "key19": "65t6xHKdweby4PMqiv81ykw3jtpabwUScDGckXrADbYpHiSYAq5Z1UWXwZQ37w8KtWELMAqfLYLMN3W43htZnAwW",
  "key20": "4tUu8Uz87wAzP9wmc2cCdxe4tr8vDvUJNSkpoe45LqVtxvcUKMT4pc7kWD1nxkZmoJLzbhBvmCwSSRxKHtdPharE",
  "key21": "4d9v4pT2Qnim8ZdWsiZRuJ8YzWuHntuJEuq1m99nhnSJTKHtdpKjtf9yVkujcg1gXHHgXfotaGsBpd5CgGr3Trcy",
  "key22": "37o33rJSH3qZm91QQmWww3PwYAG4vH3Cv5qxug7r8U4VSA2F6unePbi9ThLBNn3VHYNx2LnCvACMCku1NtWCG9dr",
  "key23": "4WdJE1yTqXuCW9SzTa6YVrRyxLiF9pZMSCz4qMH1igT12e54VqGEtgirZLb6abz7azVZZquKJRNMLu1F7XDksy41",
  "key24": "3FMea4BK9wM79tA6PeBpL41c3AcWEM4nAwNXZ2mq8rCtXbWwDvsmNaRdXnWeXcMQHsLkMUbYoguDvZUcmQqQkyRn",
  "key25": "3X4QZQeLz6omzpaeuNQwt6Sr8GK3hWnWCQzuJgTQzAvazDab5Q7trtmLo9jExKg57utSPYQ4YuUXAep7NjpeiRo5",
  "key26": "gqEMG2LNcBwSffLDe5iCyUpwR1btxeQV8swbtu6bdpdT3p9tQuB8GCnDdzB53HCaZr4PPSWrAu2M9YrgvJXK3jA",
  "key27": "32YBDwMVS1jtSXR8GY2soeJ9NVtVe82MeuZ95U4XBirQPNBMGRfBb8W1sYLsbk6AzwTFMT17aAQJjTeTL2kRBz6X",
  "key28": "XERkeG5kFkCHfwdGHETANaAd2kF8hsrjmS54VMixiXYVY5r74svDfKbxonsvHXpkB2VxWhBSd8Xn2nN7bZJV4uy",
  "key29": "5xiUZp5ijpvtJ1xcAfrUjvYPHAJSPiyeMxJiJaEhTkkoyQYWvEqxQZm5KePQh8Cba47ZKsYH5phzsG7iJkYvUvaf",
  "key30": "4TifaaSiakxsTJa7NbTpPQyroCgaGtiS939eHm5k9oFZBb9DnUCTPFvuYaREQZj2FCDGFmsXa1nYbMySP8Ng62Jj"
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
