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
    "5CaLLcbbpgYVwG6WbQUisH47hR4qc7QUAkyAT5qX42dj2Z8rrpiuEyBqomjgj2FNhkpt7dHgUuQ4m9ZPgVJ9Bvna"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mFN55ii1pyaA46GKCHt75FVect3c1xJ5wpQp4uu7Bey3gVWY3aeBpbH83EFPkXCdprEy1tDZUoYtiE7xZn6s5Hk",
  "key1": "5jfQiK1ZBsxhR25S6xweJpFZAboABc3AfSc2EoF7nWMo72zYkiN4jgkx5kXaKn8G7xVWB7ZmvmQiu6gTsjbvSkn8",
  "key2": "d49sRg8cJneNti1GB7yUimfQnhLM9hxK9GLGY6pok24vdppGGgNVqRHB6dBiWh56m2mwiNr4BVot2YT9cTZSGLP",
  "key3": "2yXn49zY62n6aZTfTMfHsENXRPioXxx8hLsxEPtwSpLkR8musw96cRy6jp7poKrWihHJKQUvvXC9B7zcweGfKaBx",
  "key4": "4cZRfpX1se1QQj7dNQgJoW3LzfwZu4F4dqrH7JAgUTsS99B9gdLDoMM643zrDXpMDBhfykPkRG359RquegoeHkUh",
  "key5": "3J79YYS4ab1Y3bUVgsvjviu9VrrUZBJ14p8Jd75N21EfGueegut1m3nQ8Qrt1XnY1mDwnYCGFJLwdHgjnSDvoun4",
  "key6": "2L8JNajdfVsA3Ne4mghZqq3aniYsrFZxfyCa9RzfHbqakWvjmg96DLUHgoWpt3MQoRSr2j8J3apDZtYwKRcTDsg2",
  "key7": "RFpVFDLkhtByXhXrRpwq3AQt6bUP62GUHoTjXnZjHWBYFKjbpQE7kqS82T1TnKsfhiUTu9skYniHaLqYdHAgTeT",
  "key8": "41XaiTg4QCAijdkRJexTUZ6qHMQE8mbZLvp3HjuMf9ixisu1PKRndh7kbVpFd89AZ3BGHFeHZgYp3P7NFP9XZRpt",
  "key9": "2bqNy7jmFndUexFAYHd9SHdoNuaaYSNQckANozL9Cnqqy5jqvT5MmkuiQrAogWLcc2ErPjQoD48sYWnm1j9YxUTu",
  "key10": "bfWbrB3SACdCecxqWSXWTd6LR2faSSmRsyaunXRHwaJ3fuf8TrurfZmyvTSCJGMxBYrRCJ9LHg45sU8Vi7xbBhU",
  "key11": "4C61zhZia2J3vZFxcUvioozg2ZzqciCpzKsu6mvKGnFRpfsgaCnkj626JD9pbvaxuc2hiFAxy95Ro2yg7yhJAAGy",
  "key12": "ojUYuBRDjmKcWCqQp1rZb29LNsCago72zhgj1C1GkrjuEvT72w9oDbjy7bZQKn5onsttGoKx4quLqtdGDVHkYuZ",
  "key13": "wQvhfg6Ci9xtJW4k6L2zpZ61bnQLfusDLYA74UM2ZQ95qNTKYm5LWVCwyGr5g5mCgwk8kkwuJX1TQ2LcYBTgR6z",
  "key14": "HN1UzWEWeQxmFnuXHJt5R3YLCDpvcWn8AaDH9QWB8NEPQeJ1FgcwfFDNGNhgLKmRKezg4BxnYKdF6CP2xcBn63N",
  "key15": "4RjBtXegAMJXtBGZ7uN1LALhcVLaTDkSuU1UNjT8FtQ8dSBWnZigSN5RZ1W49AiTEuXBMpLWoHNTzCve4n65SQrJ",
  "key16": "63iTwZmth3LSCMAFWHhWeqQ8cJzSc8TkoaCMHdnDPmU3bYBggUtU2TSGeBopqBSZqb4KULiENhz3GYrBMFVfMEtD",
  "key17": "4iGEPK6DsJg9UsWwGNgRbXhELwfPuz1KsUD7ZyQRPqJtX88F2RzQ1W1DxhNbxcomxTkggHj7SCKMdXjAPhanfndG",
  "key18": "G3UCiQh4kGFdjShq9aK2V6QFcqypGSBSepW7sbYzHCgUugQnV6bzCYQj6EsetxhwdRXgq2keg9uoCsQJJvcxdMk",
  "key19": "3xNpC8yJZBNc85ckQ8JC267KC93MXg46JSZAXtvxrLjjD9Li4rzUdGErHZNdjd7WkvwYysNZCsUwdq7euFyZRjHR",
  "key20": "3XrwjzrkXKCBKu7sN1XrjjzaQkLLDJZ7BvQuZn3pLeypGAgs5kZmXRohxSYjCuyhfUoJ3UnMugHNDjdzM4oHEbVD",
  "key21": "4nbo7owhMYGFyQEaa72zvg1jo2NQSdYGwR6SBCffpMr2npGibekKiVrR54Qvksn7QaSSskHDvnuawg7B8e747cTT",
  "key22": "3TuTqA7Q9sd2tpSNCekzcS3sNWhUp8omk3Tnvbw3ycicciSWcwBLLiW9UD1g2wYgf1FA1rKHhEzKf8JCWWJAUC7r",
  "key23": "5zCjJ5T9NnTuu7nQAPwSoNbJ98roE2tFa4ESj3QJWcXcnT8KdVryo6GHuLSECxbSrZVYoU4pyWVCQbbUZPfHAWAb",
  "key24": "36JhxASV24vmdfs7x5utgVXR9xt6rMtSutzuyqfyzroHeE7bJh3FyQfvPHxexiUz7nfSijBSA2nyiiJ1TXVoPKip",
  "key25": "5g1DcfoxXzorCrWuxcQjyuz1GqgJTymrLLi2xBf7GdRp9gQ7kE8nR9xoipPHj1uByYwLkFKFED6qLb74wQuAXsDx",
  "key26": "2eu6aq5FvHpi8CahyGKLpSHbSaf6Ly5FWuicfTLkAycQgoqDrkVM4QP3oH7RqjMNzy4AFHRfYpADk9np96pdQhC3",
  "key27": "n99Scr7iFvatQoExvM5TiuiBJqFQ2Q6DJhbu6zdwYCn2wkepRiTMVDJXev3s9w6Jc8eEHA3tBn2ziXgEUzF9bxG",
  "key28": "VAM5Hh56ne5iBLum9UqESjgjKBvqfEaFCcSK7euP6agzCXbtraAQeKx5R5sNCzTjc2v1DVenVFdVDUzB5sz7bYk",
  "key29": "3EWmkfK6oo14AasgsvmjkQCsMt3aWcGcowVPFXfJUBEycSpZM55PLZeALwTCet6FBd8jQL12VgxuhiFvQQvyohre",
  "key30": "5MNu2mGsrkh1aV9bZW927dLkoicDkxbwip9CqJoAQda6hvpQBjFezTsYRRMhxAPDQ4Mt7LQi6dXTNQvQQoApGkYQ",
  "key31": "3wZahVAwbyq69FsY462piC4kbQ4oabJrvE4hwTtyut2XP4SqcuKemjm3NagveczNgyknnv3C4t7DZxXqpmL2tZ4X",
  "key32": "2Nph9a9bdNWbznR8uU4MgY5JtXjNteB1TstZHZHJGni2KcZDCiF2eyVpyYFnrEGUejxeJAsufhcqqDCyyV38SHHN"
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
