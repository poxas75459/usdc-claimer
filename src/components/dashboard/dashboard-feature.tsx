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
    "5ecRiEpZXRhhXfftrVnKgFMtz24qXaSn4xc4CQ1fZjEsA9BFnQzjp1NC6nGauLSDtEDAdnjBWf5NL3KpRLoh4ims"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24PqJLQkkLTBAQCkncGh2XzDufgqDgHJEwZSbiqzvEpgLCyG8Xak2ReCwUVJm8o2QE6nZ8P2qeQDV4yUkjrVTi7C",
  "key1": "2Z44iaE2jZ5tmiLHHiHPozZf8DvemrhF41RRKdguKgr58omq7MkxR2iTCs2Jgbp3bQyLDtqfggP2XVsbLPhKxF7T",
  "key2": "44b1keKSW4g5fD2gbiHCdrZwqppqgFYoJHwwhnvcJ5TqxHSdTMA8wLgf3GUFjvdbPZ85XbGNj66z84ZyoMWXg6vT",
  "key3": "4VzGn1qnmXbHWefrisqJHYbVf31zZzUrSVF3PyGRkgTbZ3JfsxAhygxwbweWdRzNM3AZhZ6VybrwRqARw7SSkNry",
  "key4": "3T2zueTHv941ttr2VzH3UchA1F5beyKDu6pSWi6HyNi6yWUXU6fHsBtw3V9cLBfwF2gsDB6CxgagH31W5ndupUAh",
  "key5": "wUw69WgD9ozTz1ZRowYp75Lz4YByYzcFVzbCsrJmYP2bimNgrBDeyFZZ8Ur3GwexSFYKH8i37b8yivJap78o134",
  "key6": "41REGWmBcq9UzcHKesMwUTBQfVNzbBGMJkudH4odhfjExKoNk9i9a7FjsSFbJkx9hnYdFtgZsKLiC6FxSjQL1FXY",
  "key7": "2HARmDYtpMmQrkDqk5cbkrC8c7XUwZ9hzGA4KPGeM1YaUwofjMSLipcPUxjBu9B9YZh8bJa3RKUH1SjZZXZG9GH8",
  "key8": "3KQo3sudFoCAdATRVbkBPhw8DxTVvW7kzrxWF2vPqTmPogcTWmQU2mmTLhCyJDadLQinkHuKkeER152QJhr6oUop",
  "key9": "5j39c8VLVhdfeeX1FR5FCXK4bBMZCnpdTZA8stWfwCSrnvjSn2Pek3Smj3UKu7WLLLaSviqjjv32QmnUF18WXXVF",
  "key10": "4rdRUdYmaoWdSA6Yc85DHbNjFNv8fHyfgZqzf6nBxrQCjbWGpKw9zztP68njbZnxNxuEyqYaj6YfjkiXE43WAFBT",
  "key11": "2JpzgdqjLupPhtZtSefLiJp5EGjki9yLcJaPMNpDi7wUjiiEMdaQuxo5q2fJovfmeUDQBJczKVcwdHWgU2iMVncR",
  "key12": "5nPBCBr8VdPbwkJCu347GBA6rXtScnHoVMJw6BZcZqHeUPDD76RZ7AXnGXwdmVQMMhWEx6nGnP4qUrnSieq4HfQ7",
  "key13": "4aREwc8izvcNUR9CSzwHjwgyVf35oQDqs5Cn6RoUfx22DJ75XbThUQ84fPzFnmWVMnSQJoXYKDcZPLGwnAL1mShe",
  "key14": "5kFKjZkeVQgVDYtpmdgohLvUJVRDiRJGpE6VfrBK4e5jBr3dMLDBSyxuicQuLfWWyg4Dy7b7EQN6Ab2A9ECf4JEc",
  "key15": "5y4ZVC4dFsB8cuZkmtLE7csakoEmR3x8515HSwBxJtk79GdAwSEnFP3AnM9saHM8PXwqEMQD1QoBVvw4xHsQjie3",
  "key16": "2NDEA78w3CyxS2c3L7LmFha7Dbhd39MZiQWWjLjFCwEpM6LvDUsoSWJdXLYCFpmC7zJmSYg7GhebcmZvhhUKAKiX",
  "key17": "2M2jYjrdewpYiCAu4Qf4YKnunUsFbMnc4KaxjNYf9Qb1efNb6zbrTCjsHN5kTkcYeEbfFKyuHyVYSgBF4Y9d6HX2",
  "key18": "2cQ4YhEVLoSsBjouoEME1JX4Rxm1Rf9Eduojkrwr6DzUAdJoM9neFVKPENFuF5nDvwZ97Y3VZRLYKbDB35nsFW9r",
  "key19": "zGDJUCDoxzNZG47nXiknYBrzpb713wefx6qD19RBUA5jgzo1DLtD47xg5far44wY2osxmWcFRWBbHQU7KAvG3SY",
  "key20": "66oGTVzJZhVSS6rXDr7nXim8dtqyvcvw4C9aDd7hkiQGJth5fRaDVt5c4vSbHkhuYn4sq1u7nKc2v4MLCcaG2uJZ",
  "key21": "4ib6uitJpjnHdX4EzFj8JAidgr1f4yThNgxC3Pr5yLve5xoaRksTbuiMaK8Pv5fJNkDSVbB58vjqpY86j5X7HcgQ",
  "key22": "29kGv9tNntLMLm6QDFmhoQ7MQGZGv68X3zng4YpT5KrrxEKcU7vKTQzEN1rP2N6wt3ybcLY5tBNd34Y2JmFbWHn1",
  "key23": "4B2jiTNon4RcDKpZpJ3VMP1WUgALkemt7PmnkFrpfEhieprUn4hqJKQPcUCqp3BqLtNQbDHPr6tXFHZN1QFeXE2K",
  "key24": "2c9TBbjuPPQGQgCF27VQNZZU8kMRv7Q5kDxs2xEbXX6XtsqmQQdEm3F2S38g9BETKnYCp23o1gndxhv9F97BFG7v",
  "key25": "3cxpS9nQiDA1pqmsUwtMmseptQGdfkkfMTdFg5tUHbGuxxohXkUqB7RJeqKNcuxqfbrP49zZokpw8Tk3oL8fWihR"
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
