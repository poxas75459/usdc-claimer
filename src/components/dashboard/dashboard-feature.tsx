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
    "5Ue3n66ANbyFr2VkseLaKXZiG8sJT7cWB1BbUBXkXUTrRFrAKsacMaY3okLVfXVKLic2HfSWwMVYzVudnpQLbA63"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29rRZ91yah6ri1DdTZv9Q9diE5MN55aoLimGSuvqPqfogZVNvpZybAzhJw9fHrg8KwwFi4mvyja1kMSjZKJPWR2w",
  "key1": "uEG4LF7Mub4tvf6EJkhgounrnFjrWM8fNJiDwnXxUPsZ95Gj3NsmHF4CoCMpzdGatEkkPWKUHYL4XM5BzEhLf22",
  "key2": "5nA9uFB1k4T841UtKLTYwZNkMZrReSqZ6pJugLxpS3ZdohfpBJ6HDs1RiJqQokibMa7MeJRjbQHA9rigNDQ1YNpr",
  "key3": "34xTV9Vk718kWDV6oJxHfUcQ3zu8hjwHTQXNNnViLnbvgXFvnC2qypeN1hhLCJshgSHn5yxP9sHJYUWaUkGkXAkU",
  "key4": "33mqFZwzKYoVMfxHF52E9dQKvNNHa5NLSZJuYewjd6TnhcHqUCuher5pfjFsDxXogAqrDDFqZaueQoknUnJu5Cv8",
  "key5": "4wFEgWrTsfZY7G7eyoKYEkfyAnLUe2ZaizF8EMjFWx2CPRvCuFKc2c4p2GFXyhMnYMsGz5FrftQ9WZYPkCJmE58s",
  "key6": "5gowxcM5VTNDWMH92hityCSBqKRWJ4mGYRQ4jVfPdo9QpvAFgf7qVpwSCfuDjznNXrivH4NivRGuGAT2jBhRjwiH",
  "key7": "zQs4y1ge7WmAAdCZFKz86NAuhS92ySig7YXmHAS9HLbjPXpmhcVe85Wjbjgh8NBVPDQuqWGZsy4QnXM3Lm4GHK1",
  "key8": "4aPhirvCcPVE3DQ43LjAEGfKvZfKE1LRmXZC4stoETF9gw5rMjCvf4m2i4PT3vuMjDDTYgHQSKYQFzbod5tFS4Rk",
  "key9": "2oGZviPVxnvTPwHiT76Uw3rXcii85HWri3jv2zpcRASLXjXpyq2xxzafN53rTQSSCoHwxsQjuscbWDvLbdRkwqM2",
  "key10": "63wz1SPoSvEWGjMn74AeYDqamMy3o4iPe7j2uP6Tx5aatyfn7kWHATEiGyJUUmtYsQXxLDTkSA2Kp4TyE6gtzgKD",
  "key11": "38tdzP6z7FfaDesVSiJrsMzjNcDkPsrmjH2qPAV9z1DZenPU574qk3NKHkj6nDEykHTvDchU19Hx2qhCJfAD4vbV",
  "key12": "3qqrJTRSESrKtywoQVC4DjJcbsLqUGXy6HtC3KmT4zEEuAo5ajJnArxuAWvPH8DS1syLuC1rH1Xp1o76JvPw5GZX",
  "key13": "cjyZWhJgTo3qKNEjcbixpcHPFz1xYuGS5p9yKA53JQNNtJY3CPyjr9ZjXjoXookdsEsHGonWHkyPwowy433sCgS",
  "key14": "4ccz39eFytaBYuYcJzBPyT5pU2J7c6h6Bka6EhSd65mc731Xz7PTAN35DJ2iWw3AmscQjyDE6kxnSFX5wUPWit2U",
  "key15": "5Q18SpwaxK3zZyS3jBfmy9kcuHusfDVjbGdaVpnAeVRfTBySsSNfdqAP5aDhMH3Fp4cqmXdmfMGmbjAkpwqwz9X4",
  "key16": "2uZVvnMkme7B4iAfRjKSKzHndwuqNoEaN7xtbDnCmV5vG8eP3cFkMWYhZRhAES9Zrdvv2PmWbvmSEuUY7yur1EFA",
  "key17": "5wZ8nhgiEV3G7r92FeykVq8MHuLNfQVPtWogUse5pGrwTn5WkK5oEfi5U5MBKi7zHjJFttEPwpg6gc5uHe2bkT9z",
  "key18": "4LJzPNkH1roviCxv61XsEPyjrGJ4CCsxLZvbFBbw7qCk3QdACRo4bJMBw1D3Fgx9aHTi4AVUtRHbyeUaAaVAcU1W",
  "key19": "67NSrg2vEG6P6Jb7ATdZHqpWdmZNUSHh5m5d51wZTYZabJLANTEZRxxFq9n8suM1eTnJF72LxmTUHAbbCx8k5Gxs",
  "key20": "3rrJis4zAcp9eNg6MrbVrF5x9pbX9bjm3KLE3sN9DzU5BEa6iAWWg9dNMtzcwNganxLD7Q7rUhmCTo5p2ZVLPAqe",
  "key21": "3Ghm8Ds1Fd6m7NbsJZcaC2CxAf3b4S1VFkWvA2bBcNSz7BqwxCbMJikn4CWTgFaktQYB1BV7D6oYcgPK4Xm1MkS1",
  "key22": "3No8swkkU4RvaHgiHaf7ZRGtgDY3iDkkBL1ZUeUvEeXpbiYu4xZaXvvo4cmCjCpUUvM3UhY3ZRzxBEbWu1MrUUdx",
  "key23": "3VbTJP36LhHUT6w4bR9bzG5FLwJ2j199MPmrwCPU36uDzwiFh32uhCKXkhhD9E9H2vBmjY7EfM2n2zCx7pEK2FUm",
  "key24": "3VVfbx7CBYUT3oWmrNPbvQ3DyTuYwx9r2ZwofReKHwo7qHVKDtHRuYwVmo4Bir8UKshTXqhVSSJSAsweT9AKWmU1",
  "key25": "3T6ALsFT5cMXo5CdExW6N6797fBeF5ky9q9aPp3nSg3BfKQJhHq3sepz98F2yK4o9VkNvAuJgbDRgMwMJXMySmLZ",
  "key26": "5U9BZHtRdNMc6x1cJySNohJ1WSpXx1sXWh2xnC9VbEdzu9mDpjGhDvjqPvir3tBbBXkhJFgkLe6bV9Ea5dXDpAF7"
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
