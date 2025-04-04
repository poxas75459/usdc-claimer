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
    "34d9kiJG5zuUuqtCvf8kU7bRzYMLfXKaAyxg5vZUYEfN1MrcbRDnwFpGNsigxdK4RjkRKTSqV5TygfG6HT9xxrBm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AzXEtqmyMFXQjek9kpZDKRUNCassZenNwbtjTqqa7w5SNBmBGGqDVUo6a8FNxhDUR1SBVnTTE7jrJqdSzrFJpCH",
  "key1": "kYskcimVZxJAuX4MZHtS1a3ELSz8jYFkUqXCYXZwNgza2utt9aezQU5TY6P7sxsHrjswNDGdGQ5xNLR7uQFKRYR",
  "key2": "3RfsjYsBFt2RDqXU3D7ejHBHhcB3sY6X2BbR4HDkuHH8dr6r6kBEjEuetBiTCFSkh2qTaBo9E5oAHE5HqUyqcKtR",
  "key3": "3BRkM6vNSTAogXB6TsD4vUu9hk2GneheBciMELkfbvN4iEXmCor7cfiRko7vgH6FcJ4cmDWshpyzh9kTN8HBBTAa",
  "key4": "4wwukg2M8SzaNQYojh59YMJieU8HP4XJ3HG8kfpHNPbzaA9EEz4KPianHedEcEueZT3aLzXoyEbUL6Lq8hjyqWQP",
  "key5": "58fz5hV8bXEz8pHehe2sxAajPFv7zCuS8DojS7UQKaPUBZ286PFLo6aKcdW3Be9zbEfr8Fbgvec6dWtGphFhDck",
  "key6": "52bufq4tQTbV7TR3vT4ZjbLuD2zcmZFetz8qTMoV8P5767yhXrXpFBPKd2am7mA3anJdYNLKyjsb8pjFwQVi919J",
  "key7": "5mwRz4eikuB7B4pKCBTpEew5nyzt8FKKnuFijX8TsULjV5fqSVjQvGyP7b3Ac5EsUbZZgkk4dS5KxjkMryYRnBsW",
  "key8": "4fR14GR9ipZKTjiGUdUeMLt8jzA22LMqheoEuKtKTtxTk3qXWVzX4nQNMfHcqLsyepe97p7CLbAzKY8hJwsRd4SC",
  "key9": "32QU6792WdKWSSy1rkhKYSZJQk4zkqbBG4edYoPouGwLK2SGSn5FNAkBpRk68SJgipym4aPrCPQpAjaPXh9ANWbP",
  "key10": "9k2GQWdAaK9ce3tjTE1uM9xQaY3dEy13jLdwtcUaycNSpitYYhFWTZeHwBWGxRKqNuSyruvnnxTPMumv64Kd5Bb",
  "key11": "3ZnebsBErt1B2beyzBtuoxQHCbsu3wQBnDRQyUBg5xUCjvrEKZtHB17HDy7j5V6fJHVTqMtrHTADx9vaGzJjtUkG",
  "key12": "3W79g5GvZa4H1c2v1xMK5wjRK9aB2fymbLAR1nJKLQsjEdtKiA8WP9M5Nhyd9ietxWV7GABd1V5SH9fwtzMx3LPD",
  "key13": "2o3iw6qjbQDtS3n1yupkbk7heqBhiKmqfMh26FhAnVMjy3eYdYzGdXAUSyTZJch7XsCTftJ1VWdWHAKpQpqfZkZ1",
  "key14": "2SK1WdBFf1EZcD9tmcBjv1FBiyXwNc5McGyqZcJL8PraHveTdkhceitffMtXaoUNqAwQVy8a67VvR3SMdtZKHQQA",
  "key15": "XX2jFLQGgahEG4rpod5qNHoZdd6wR2JdWMXx23qic835TLUx5QvB9NaV64JD9X28dQ9J3TiziveiRcXy9bFxaCs",
  "key16": "3r3CEZwX8MLvbNtvFBY2aj7MxzLnQwTE6FLCRDiTNFmu3EjBhFBxnqXV4UzPzrEX24ND2r7XSThSZQcGTtMCNscj",
  "key17": "5LSH1coTwz8t1NUD39Z5wDx3Djtq95z2yxBTLsBeWfgZRzutZuWKDfBC66SHvyFfzAYBaRyC5UkoFp51f4zA5YtU",
  "key18": "3Dr5zSAXu9vCWPMA9MuHj77BMmvsYuVb3Njqpg9m6aVDcQAVLAZr9Ae4jPLKuPwNdTruBqiZ6YxpMuHngy3odfp3",
  "key19": "5by3G5feDkbq5vvfLyyyutpBGrKHva9ymGgfMsotAy6WMFMMhgTzVr7vE54j9qxSU52PRbDPDH8C44CzVVqWUWyK",
  "key20": "7DkMM19rvWcYqEAMhQ7opq7vkFSmrhmvfXQqoFUMMAiQNzXoeMyKkpgK64A6bbat1hAHHX1c2hzPotFMnoQiopG",
  "key21": "3PQ3KypP5Wmj89eBHGqrBf5kc4sj1BDimd4SrqRKozK3eUg3zFxEkvYqGVCHpL92r1ru1aCfmCFVigECX8jX5kwk",
  "key22": "4Pfuvq1SgQTS1JAdLyvZgsntqn7m38M81tzEEBPESr4Zh7UA66V6Ez4Sq8G7uq3tam39kdzm2me7GDcu5WZ7EAaa",
  "key23": "2B7ZP3F3YWtysuo7HXEdiEnWaeZ1qUfsnLiHGVKKoTgpvbfdSjEwJ6tyxmrTvTbZs9AUEZx2uzdZeKTXrp3UDTdu",
  "key24": "3HMxoFGK9fzvkq6ArnsgDGPzzqBqoatzJXNvrng7dwCRhRiC7XNWniYzPuZf4BE7juejd1xmV7fPTxPHtfJzwPfg",
  "key25": "3h2h1bBLvyeRHwNRvsNCanHvLBFq6xtde2aAybYAdof4SKZFWQixrJPjT5LMQ8Ghiby9YpQpq2kFr1CDbUEo2w9m",
  "key26": "3KJJ9VTFKTVyzxfwvB5ksBvtbr7EsFEosuF4H9HfuXY9xbrbUonushdUGFjqpnQURk6MM84P7y7FdTEcradyRqSQ",
  "key27": "56DSNJj8fc8oEw924x8gMkCeq9JnsdWsY9Tyd6MWq48m3Dnfz2AE6rmteNkbDZVjbsgbTS1goAgE8SGzN6hjFEnu",
  "key28": "3avZzaEqmNFetvQmMAfsw9TGFaVUnPZrxabhUbSchQ5BXAHh4Ssa15mHTGPa2caN32zChxPYQE8rk8wLCTaKKQxG",
  "key29": "BYUmHRPmXbBPDTBhufgo9ddHxtJdx3L914d6YRzqDVDD9evLkjebDpD73uu6GR3nUTxcBKgTWeJHPU6B8p7RaFf",
  "key30": "5Ej6viKiRTBE5r7Ty3wqAgMrobtJFKasQRG6ieAnvoREUyBesF2Y7CQnsrMqabvcJCLHrArb9CyRigBQw3eUBkWL",
  "key31": "7nbnGXPxri9U9tG1PC6u5ukHqWqWdcETE2Dy2LjKdCPQUQiARRMrc5oKBN6yCRNEMdvccDHyDyuMXXCeJuefQLf",
  "key32": "3AdeyaRXbygeZpeE5576sTM5C4nUxnwVRjavM7vyDTTeva5XNDcCy7xbpTN7bomRLoohWdC7BDXPyfK8U6M5GM6a"
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
