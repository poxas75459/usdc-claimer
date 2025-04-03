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
    "qsxSjZgsv5huLM4MYCrdgfyAVdYFqfMBnLE9LnMNtzvdeLjB8dfXPEDhPKYe42BSwSeE6zvDd4UEZV1jhQfuDqy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EyQvcLRp3PjrULR3F4dhn8CmGAdsZW7gPfwiCSZLkBGaL3694W4iD5gpeiHUN22JYzCbEuhjZeBSnT4DFKoUgSn",
  "key1": "xiC7AW6NEgXV4ot7wtzL1qZfdN7AqoMHCTjGrrToLYg6WtD7z9KfCnVx21JZVxQhs59e8JRKFWCpGbVVZj7DcRf",
  "key2": "4dtV3E38pBFj3MRY2b4n6ZUzqSSjw5jAKQSrZx4Xk7ro69JrzGnLsTAMz37qEv5uqUwh41UZgBcWXVvLWrE1GzLg",
  "key3": "2gfgpFBc7eraP1X1EfbVJCGfNKcBqAumViq4XEfTk2vDdGXoDzb7cTSgnQZmnAGQKtuMUqb9DoFVXLyuygg3oeXo",
  "key4": "4us3jwDBfuezhHtTgbNE4L7sxQ9LdcqA6VihyZwwDRQ1cta8zdbCufk6xaKWj9fJx9Zf7v7itkukr8My72L5UNhj",
  "key5": "42Te75WN3k1u7gth1vUkCX14sYyMXxCKm6sNapitMF6PsYgYBstUaYYLsjx3FJmLm2C12taFrNChAMV3LfKF7keH",
  "key6": "4c711kDwABdNnJUzWqgohGPPjUbpQGc8qr71hSSW32h4SV6KyNFiS3qyQU79n6GH1eSzV7d9zrdNr9Yuftk4kVVp",
  "key7": "5DXp34sdWNi3beq9yq82GxzkxnPB3BrtAZ8CpKTh5vmvDY7RqEyJaUnGS371bXQMdQeKbaovHB2s8d8ZL2f8Gzpr",
  "key8": "46XrxTsN93T452DdXram67Pi32NjBm2q3sPrNKWj2yekbNa3VpWSy9WuxF5MGgPprCeJXCbY7h6KWCxgKaP9hUGv",
  "key9": "KFTmWQqjrASZVtbAkrn5nn9N4yYghYWKLbmX4bJgmv8qWr571ojskrguv5qnwMXhSYKedLoqpMXMfY2iPofEbgF",
  "key10": "5VczNh1vWEqdFf2vWyK4Tr6goe4QnnkVzXgYHNJFRVjM9Bmz1nTk8q5J14FbMaNiL6zsNG1d8nBkjD6HBiCgqqtn",
  "key11": "xDBFEijFhDnhY72vkTfGJK436HKrTwwH3K8jstwc6L3JnqcCDMLZeFJQbDVdiuQJipmMpqwq5jwvd8WmHyQNVfV",
  "key12": "3Q9gn2v44R1m9VnUcZeccNhcUQRMywvTEhynCMUQxAjJ5gYy7zmPALpXUGgUsVHNasJKvCU1s5q9B5bt8bBxanGR",
  "key13": "51uC2RbzfJbXFpCzvZTQhwBszHBy9i8YtFVQa4QomZFwr7X1uXQtj632bdrgUaYqJWrRqTnzvphaWT2ebADoBAig",
  "key14": "5ueYBgPRFoz7f4SC3Ru5X2VGaf2mHKjQ5QWtsJkzSGKxAcLq1haL8dn2QHJH2aN8TWQzHiR7p7TCBrD9RMD73tpU",
  "key15": "FLidhto6gszZonFmkmsYNX5Tij5Fhv2W8sJHAcdw2LgxX7eFpemeNN2euKp9sW9YCtq6ZWJe8HPfmS3Y5xC6CZP",
  "key16": "2uudHATJqkHCKB69podpc7yeHGFsZ7xtKiEboa6T5dz3NVAXxKHfavZj8uTeaLfyMMnUuLCcyfxjSoAwPt2Emf3p",
  "key17": "4eNqKgx14Ax8BhUdu4zPR7oaBRuGnZXeL5rHrE3PtYZndLJqtPWP6364RqYyqkEhdZqTmyuyMz5c7GdLcPjPYfP7",
  "key18": "4a7rEDTSEzPmsuFhv2Ja981mRkzvMwAqLGMdvipFU7kPttpkW995fMJCJsJSayBngcu5zZURRLGqpQkpjj4T3NuF",
  "key19": "33oTNKUgtYUWTrtxURqzZPm91VZkPDuZ28qHT2jESRz2F2scdgxCMfjYeYUUY5TQ6cZMvB1t999LitQHJHSSrFdn",
  "key20": "4ePmAMhVD34PFmQe6DgHvvBistMWbtFRYo4JJ9DvUvgCq9YLqVFDNsPepQqKeasXWhVr2RE4GrFjKWQy3cQdDqeb",
  "key21": "3tg184ZgzaN6KtPXaF17LkJo7M9nGuaxKH82NSpJ18Sndv2C6cxNAiUWxMsAY4r5GgqY4zJZxy25Evqub5zWtcZW",
  "key22": "3JoBRZpmy49hyFHSDTowAcuD6cU9zku4XzUsXkrbctJAwgSzKHPT3Sxi875TUutjtZkiGp8QjGKzA2BFqabx642Q",
  "key23": "2QHeycZaZB496eWr2RxzGocB7YBiNZYthc1ccmiQMJTvZwxf3bCEfrmryTG7wrkiRPu9rL4y5JCqZfLCmv63sUk8",
  "key24": "4aEPPFyEmNdmh4ZaS3iiBPZSKzuJnW4wx4wnP4LScb2Cnf8zJSAd6NzbQkrUhGGoT6MRxAZPWmpjeDvV732XqkCH",
  "key25": "3uyPUSRwBcSKxUA1KLBLuiDHcJwfLhwh352oDbP84GWgJ5BNcfRXi14RqmEPLvGj8xeBsPdN8qArb7SNETGykcPB",
  "key26": "4xHxe3GaBhY4M2hvaK3yf3hPuydkaPfbocac9JzxGL9a85ej6V7YKJvELsb3ysjGhaz2yK2NcnrtDnfgNUSxPE9N",
  "key27": "3nqsCuxeC6HEfQmjVskXsoEVqK72niJzNoCEB4Ktxnr49Hqimqe1kGyUFtWZ9pZcem3Bcs6t8eybwCNZJ839wE1T",
  "key28": "4GaksDY62U9PB9z3qtrDHwNFaD5qFxmhubXYrMUCte73XEuKnjQZRkS22itKkpdJXuM4QdptRUcSt88bAE3FGfwZ",
  "key29": "2rpP77c8atHm8wVhoYreEmknRgRvgxN84YVhqjyBNxhg2NtC9wiRx8Dd9xwLqcvFg3ww8YGie4knf62Ct2MBhgp4",
  "key30": "4iXQZzoCsS8uKSeCwuBo7sdZgd6mPjngtcKhuAa6N9JiLiuDugPHyWCk1CTD2YaYwpoC2FkAjm54ekSqRXHg3wx1",
  "key31": "4B1xVhv3oTmNSw3KazPvQQ9AtoYrvMDvtcBJ14MfiioTZJhnwFc6PG4AwLodnguq7DjfLfgwjp3Fv6jTMsmJK3G3",
  "key32": "35fxJ3qtK8SgfsJVCWWFgqrE8UamLq9gXfQ3enLAdkBu9AEBzKxCmdqRcR3KurVhKrudzqhakkZF58disgUdqkox",
  "key33": "5QVUdXwoMzqzCJcWXR9hWDLwQf9TVagydzJdPM7ZvTGJ8HVu7Ymr4AimxonNxUzucLMWKvScUXVFUZtXc2UEQHiL",
  "key34": "5hkE98hoYvvjMBv4nZ4HcEAQSjpo7u5SawB2E77RcH7rDdsCUfZSyTXW2nkvkcZfAVzt68BSc7furixmUHL9e9ej",
  "key35": "7Gkj4cv5CBBAMhYvwgNBJJtWx2qq64Sf6rtAdM9ApQDX81A42JfpA1aKfoAEKRg4doYmnH9mpbkzUVsz3BRGEnk",
  "key36": "2S3MnvNc5ddwD8kbmtJFo3xUf5ukCfGgDpCrUAktJbmENYfxZyT6B7mJ4dUYZyNjd1ibnThDChtFCrbZg4xwtnws",
  "key37": "5vauSnKQbxRGKir3UazRHB3kCBD92RmoC8emPAkqp3B6JtDjKsRWcQXxKPqM4hRWSH3AQFJkZsBzYi18cHaGAwNY",
  "key38": "4w8fEcfimz6wJzDzSDq7CSWcPTeELwVHyRfiWNGCEbQbtG5hG1mLhHVuXzY41BYAXh95vn5pF1AC2hvWQYYoHo26",
  "key39": "fnQiVjLhP1VmJUc7bKDaEsmJVe7VZN5YUwKddtBJgG6wLiMcn7Ssjxkc1M9bfUWEh9DGovgaASAqZhkZm2ZmZRn"
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
