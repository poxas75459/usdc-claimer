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
    "5hr2jfSG4MvNbrFWWz3W5vBExofiFVV5ivt3vqMkB3JW9U2TyC9VbiGuUfcFwDVZ4d2fXX1eAfRQ3RCApH9iQjTQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bgiqu6vksfqZSur6fwhR6tnodhzPWUCC6gCUbgQSHKAD81HGAriwwDiyNXDyuxEgNSre7mRceTfikpYUcNW9bXW",
  "key1": "5QN915EU252KtcjoUALvastENgGsRghdxBP5esAMbX3MeqxbqXYoFDP2HEFDAL9sFjYQdBWyBxgB2JqoHJHYUmMD",
  "key2": "5eiW38sQU6K3u4EnffBWdbVnayaZsCYx13hfu85NzAzx8GYrZpToBsUUS63iyn47HgBzBRtmB1Zh4Rg5TzENDd35",
  "key3": "xReBFovKCtsUqrncJYDWpA5zwYWw8RBtqDyg3QkZMwth2NWRkZeb9Wz3VdKxHymQHHkPUHKj3K7ufPD6X4dEa8e",
  "key4": "55t6QvpoTXGeLwKJQR8dkJ2M2NVE4Vi81uZyhCLCP2qrmNSudY4EJkoUq7tqWQapHsUVFxknLZuFLxauw6JNDTx1",
  "key5": "3KLNoRJZytn9PL7sTmBWj6iXP9935CSaStdZXiAkjJirLsd78b2spS9md2Wkh2znUThDw7zABSDkzy2kzhC8Qffm",
  "key6": "2v15FTb9MfXGHgmtzBAyFseoab9rU4EW3QBUkDXxyaaVy4KMtHVSZJKkEyjBmvi95ew19BNJrTiA4SCnPpfsvzya",
  "key7": "2SHfCSUpM8j9xiAUHDsmbtBygrmpNspjPe7s5VEXhk44bDCc4Jv4MT4Qk2tvi3QGz7xL5oanzUikZnkjyoGdCFcp",
  "key8": "5UgK99LZnKtnt7CTA3mRG5s462gtUqkwbFK2HScm4akUaBsuLajUNMTW6YrBZgYqFcdTkban14fvkFjKg87ikNfH",
  "key9": "4vHFSJPRkyQWkQEBzJt7KstfuwFUXBDHW2b4ydVq9orcRH3ctHeS7pY1PssjyvEjxvHcZbdQyXYMNShx4JcD9ctY",
  "key10": "9JxmVDQta8TzS4xb3QmTQhS7UrryQMR8NQMwhF6gJHdb7J8q15zTH2wnaJbm84eZYSXhFKCG26dbpMW9J4ZBM2b",
  "key11": "5j3HNguB18r6uPzGRennfzBRkUhcKQtw5vSkcwDKqbNnx8YNi1kWgJKE43vUa6oQg5VCmhMKkJ186QYL46he4RKN",
  "key12": "37Sj8e3wrwVZnYg1uzroGqWZ1C1pbKtXyzV2v3YUMRyG1m7WgvbBwE1jHLDtTkZumkbs4obEswvwTZktpWTtM24E",
  "key13": "FGtNWfg3dgKhwaJtJqCMd3u9ocmvAANANWhPAYPTeegdDqfYrb8wXTrRXufGMXqdxRtnvw3UH5UU2aufq98askC",
  "key14": "3WFYTdW6cGMkoYPhAEuncHEHEFw2ryFwoq7BrH88PRzgXZRumykXMQXD2Z3AFwDnUHto3ybEgukCnQPwvHcR4D2L",
  "key15": "MznH6Yh3UMpg9t26QjQYoEEgJLshQNRfZZzcQg9aK8AjweWdeM5Ry8vwvnFx96PV7VzHn5eXEtcTQp69fYZh8z9",
  "key16": "42hLay9WdNd3JVfZwSja9wkN4tBZ8FtGC518vy3Tdy43V6g48EnJHY3kEtuijESyJdcKGbbN3n8VpN8dSojWkUUR",
  "key17": "4wUDzGioUuNb7FW6kRrqHoQt9jGNXr9PiEenHh6xMttdvYBhvUr4fpE1sSHuwk8QbexYqtpByY2c75QPLxYfDnKy",
  "key18": "4T6mXNdiEDrP1Yq9xM25WuxXA3UxCYCMyX9gexore8xgtxijKbBHD9sEe6oTeiFFp3U51gxsScaGe5DrzxsSL7UW",
  "key19": "33cVwNnJBWx8Ehe7XVCUwLoiw7HBg8bkPABKbDKW3bAhAhNU4WsPLiQYG7y1aBiEjKYz4ADiq2UaQvunFtCFbEvN",
  "key20": "3mfXUoSxYckKeZKcVt6FXJQWqPrvfizNqKU1UnWMN4PtcmR93CDs6TpFaLQM7CBWLJXCxJoutqsGxV9Mh7tBQiB6",
  "key21": "2GkaxFNxQF42vspH5NAHTX2XzVCE2prrPJJSRPDYS55xoAXENgcrCt7DBhhr6PXjmy7B8mV5fJLgt1YssWaT9wM6",
  "key22": "1i5y9PVmhXxnMWTCYjJFA8XPj3gBHruYXA8Xbddcmq56JtZbKnv27wshMXtorBZXsWMSnrQZYincu5KA9Ui5p8V",
  "key23": "3bWpUBQFkz7qQqMv3MgrtkiokJ2E72fb6nLVXVmcHEg1iyU2XWpCAhXHqtpzrbsJc9fdUBCxziN3FgaGB8zDKy9Q",
  "key24": "3iZgiZVLbCSxuNG6uNy12bso2XUAfvqXqaKgXfDQu23WLhtytThJ9xhHpng7J5xCcybR8zoypxP9Q8YhJs1BCgvd",
  "key25": "2nGF2Q3beBzEgPjF23BVLjpSsHeKk3PrjBfbndKjKmKokG4MHmxphWVhWffy7nnVpY6EapNY1XqdpjDAAuNPFAf3",
  "key26": "Uu1Vv84rCSdD3rtjGa5tTTB3jd5z7XCjuuSS5cJMJFoFviFiKkBrtrkon3QJLc2ETgVzXJYBT73ND6YmF6HizVf",
  "key27": "4xbfZV1nRALWfSDCHsdAhvVc9xhnkkHU5URvsuKYpZ7ayw6Y5MzdfQkaeFTJbxLiMbads65NmZFZGFF6ccxesKd3",
  "key28": "2q76rHxGApj4x3TJZxeQZFdvmBF7XP6zCDMUpvDFiyRG9VomPHHqCQf4Sarq5JgRKnbtooDsUQJKLnXMv4mVYtqA",
  "key29": "3KwJBdAaXFuebK2aQ4YDht2BGTEcgBUZM4xmr9YjQhjNEegAnfCmK6dYLczqkLE4UYhZBqcmkVZt7Qtfkj3ABu7L",
  "key30": "3fWrxm437Ai1sDnxnhxjLqhX9WV2unQqRX1oPGRdoh8m2W2eUem4x6mhqjHhW4hrX1NvDy7KxQbNFrbuR4bZv6tm",
  "key31": "NhY5ZoKemhLiUR8Cgd9ycqejMYpeW65FSWqPsJCnqPm12oxt6AgKmuDotPXDKcsQjcaBFu5T9vvphDUjjCRUqG1",
  "key32": "53YLukW3mJkFTtUsiJ8maTvDG6Sgx7GbbbTErTQHWQ44PETpmXKYgFyoieeoJgL1tK2dcwsKnbU2E3KL7yNfoL2v",
  "key33": "2ooiVKB1z1AuMFmc1PdHsWdcRUmmMsVR2yZNekTMyjGusTMrXgwLPtZVsFgq6aUnvnfgJQ6yxUJLhSJnPVXD3LTA",
  "key34": "3XTB78FNwBw4aGbR9sEG1LeqzqVE3LQpv8WWCKHQGU4VCCKB5djdeqwgRjQygAe3vcdocsC7xceGFojH3Ddszpnd",
  "key35": "2YVqnu2v2pXEaMXQyunRHgGHA2L8k8aZtDkKiYtc9QsA6G8LT1bgnvYJYhf6gH4AiFC6nuKco6bwMRrx2FR4TyFe",
  "key36": "5v16GJV2TDHcAnVr5Sk6jtLy2jXyVdVsKFadctFeUAgdYyJADvsgrdyhpkAPu9SsmwyP9XHuTdevkNbMmHJcuXke",
  "key37": "4Gfjda4TauZTi3Cj8ms4fydBEJqr34gJKd6qZbomAqsXXBCPvh94uBbii6q6253Ea2RN7iakbCmYP6FJRBiTMV5w",
  "key38": "5zuiHRF6aWvLAYCZstWxj9e8UXnzwowTcLTyVKMNWP6yJyFUEqAxj5tsQzBaL9ntUYGKca598o1k4CLtPM8TZPBP",
  "key39": "3UCm2DG5U48qd2YqF1EKShc1TjzppBgdF9T57PpdMaMc6KFAdMKgNbE9NjVtGHXU2Aj3HjKrtWsxd1gumqc5XNGL",
  "key40": "55eDnrEqfaTajCWUjXGgVCqE1QJMpmWEEBAjPPwNewJe325GgsjFqzS3NvTaqsaret2m3TjbPZzcNKKiYDNRneAJ",
  "key41": "5y29MzDcp35dzGcvcxq9Cp1iUCpudD9e5jN9Z4HmcCJtYcZ4pU2JytugRUmZs59ELqCyVSNfcDuG7v7MXjrarT3G"
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
