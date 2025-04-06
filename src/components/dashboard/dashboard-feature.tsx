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
    "3zJ2uF5kMhWAbP3LCbXo5Ewd5D4bZhFHSxV4RgQQiwEgy6bbAj1wy7YhB8niSXTqosBpoviyoCGxYHvcbhPmVBHb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F9EzJv4hb4rvdUzyTK91jxtshqbGQUwEUQyHVMXPj2GvCUVKF7Z4tkLFoNpnF9kvW6vWSHFPhca7cBmg7KPMKun",
  "key1": "3jcvS1jLybc4sF3Qye8GxiJprFrP6RvD3sT8fQJwNwjP2w4Fjv9PDCjZLW5Nx55BtkkF11UbRkGnq8132i96dUc",
  "key2": "2uoL4Un7Cix3jwBbEXoup7W73zk9FEt2DDsnoM45CzfWUuAURjbcvLzGUh5GKdgxobyT7s1jGxgB9XJjdhp7zAz",
  "key3": "5YRsG68WTVoDZVnbkPKLVQD8JHXnXppNJpQN7zNxEGUpEAr5KfxABq6ggDTurexzN9dKCfwQnd7Z7FoSvCQDMfJC",
  "key4": "4XYWf4J752RuLP1eAy8KH9Dbx521nLXBdEiaJ1EqRPQGGbQhPCopLs6gVeNsnyJnxmHCtcPek5ue29NbykeNRz4",
  "key5": "38Ab2E47zmBesv1sMeRfdReo9wZrxLMHqXz56U41PUwr5ncF9D6DB1ZRyUgdC5XmNz1Ddy4YPn9AmBajX69PVJxr",
  "key6": "2kE42HyqffozWUvfjDR7znaEp69VZuRDEYYWvUa8jiA6u2C55e5erBrCYaKJKpshGGecJnhS3JencPyfnAGhHKZM",
  "key7": "4S5Wn8TJE7UyAHDBfPF3fbKnnnM9GTs8A4GfTF2aBJQH9urPMyEmWtcFNAuAtyLKbzbmLwTAi5APpqkJ4v4tp5GZ",
  "key8": "4Y2V7D5j9WC5W54p1rw115YQtpCBZERpYUsHb2DaG7feY7HBxaGLoe6Q1LvFobszLvvLButpYpCDDWUv8FKEuubj",
  "key9": "4SM4ntgwMGJBJNRNb4EtZV57xkSXUDYDWzJ7KeAcVqxfhoLQ96C3PjvmG2vmdfwCV91xM9RKeXABbbWDcq7wEwEi",
  "key10": "3RzXfz1pgZgxiFhjki2WtCgiMkqamSCDyzMHhJJwsmxmsnbhQMnk4ipQK1kBBQCWF4jMfudbGTAHwWrVjbrUGqmZ",
  "key11": "36HJ7emu185qbRGvJAf9t3wNvrfUaCWYz3EwQtnsvkJy3vMHCaG27bu3wjJyocwJJZnDvniw2CDTaLHsDwM7t8JF",
  "key12": "hAH7xx3sh6vn7aTLZFC8xFeKXmGE2LP66F13QUMRKKj1TiaZ2TFz1Mjs43bRBGT7ZTwNQ8Fyg217oKhkvMzD3Ak",
  "key13": "2rw8akCHqNz6FdePLSiC5VAxiyXRJdQtZayeQm2wBBHkJKXRsjRpXmAuuFQVrfCSkRix6JXE7HFRhnHoSk45QK7D",
  "key14": "PEhyrLxaLuMvQcKMif335mVzpXbGgd65K9Ww9JiEd2ycwEY5C6LeKVe4AQ3vsThW5wCfy6jYeYxvx6AfdTUF9AA",
  "key15": "5KAQNmyKWhURFNX7pih33jjWDhgqSkPkrCDGLyE12QmTWDsyKrdvVzAhkphGsa57xRNTg9Js3pC8vcYYKGBJDGjU",
  "key16": "3kZFmpAMkmStxXYw59rxegkLFN4CVYGL8GX4EB72c5525SHBY6BGV8uAS3A5NhGqToNk1PjDUeMnnLp3GRj6iVmo",
  "key17": "aFTE5jTMUxYSZCxT92nNUWVq4159mTWPjoW2EMNRBbZWW1c1eHjBAVCnCyFfiLCoXb8ceofAcBp8zDaM3iMXhhj",
  "key18": "3EoaiNq9CFctXrxAr9LNdfkpWgFmQ3MGfpdJzdLdWgKThNLiza9ropGHdBodVDdkeuzUYcqG7ZYBm8ZsyhJ49FnS",
  "key19": "57o5eU6YJLjPVbtpN7TZHDCeXb6zDrvHro9JKob3whzijjrkTP2yBKrUvrq3Pz3G6vRkWEiEds7hLnkw3hQS7F89",
  "key20": "31CALVeDBNPcCZ2W7KspxTJUwGUgGeV4yBLZvgBWTXYRtzdRiNqWYN6DWcGHjhER2n7JZprdC4etY8fiZxQ6a15J",
  "key21": "5STsrWzTmecfzgUfgXTRqhyTsThDCMFubAZF4U7q5oBogjbfeqvSpnnwdwoD46Wo8BC6KaFVFbJY64X2UgZpKnuh",
  "key22": "3RGd37sS1dzsa6AgTc2eep1ZRaovx6QBxfKjMY9CRUCPNNV7NHFXkCmmJhQz6D1Knbqsq2SJZSGuYKbParFSG527",
  "key23": "4Cyo95RuyRqGGFaFq22EJ8gMuLNWVF7bL4VLoM3GsJMiLGJcASis47LQYmQqcd2DwCf5TD2sqKE2sdh7r7Eh11z2",
  "key24": "5NB5Tf4f9PzbSSrmTgEAo8KuxLyFdhnh3bEVwmui4F5gKHNuyohnUfsvEmN3kZiCvjb7rGQ6W2LUktrqXYV3THxY"
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
