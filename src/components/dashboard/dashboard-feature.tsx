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
    "Adkkiu6sdwAj5CS1oXYVpurmMXeN74jtT4VcqK6K69jodY1f6reWouNRgt5JemSPHAJCEkG53kpkkCW5z5ASuFH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53A6EW383dwF6qmbDGUXRGkddbkf1wcaGfc8ayK4rFw9M5uWGGwCUSbmynU8qw1776vobL7fSSAkkeCL1RB7M3wk",
  "key1": "4Kt9jdhMcQHqyWv8MrcBcubaG6PKoNEEUtp2xqr9UgzCeLkqSytwYPq5RrSCnhd6PuAWb6xegfRuqCefWTMnaNUB",
  "key2": "26h8JqY1wojYdtpFKMLiqF4toc3FhoEVo58dpe1U1egb4MU2NMQuamgWSMXg2f34z9LDwS5eG5hAmQL8CK9fqaKH",
  "key3": "3vxYcg6UTVA2xP6sA4vkfKqjx6RtvjcaSvZ7BxmeP8T1Fx7XhCbLRvY7FPDZExehhGC1XgC8KPdExPhk9JhinqhK",
  "key4": "bvaVuJa2DABehtfzMGKuX6dPQhC8stvgBXbKLYrQaBQMpmq19UcLshseP37LejDdfH1JWjCKD4Ejpg2yboMcJcQ",
  "key5": "5rn3Jzhr18vafm6afwUwFKiFWX7pmJYSAP9w41Wtv85B9sRALizwXswrTAHETgDBYkms8azi6636jM6QsJevscgC",
  "key6": "2fQAzu6GD2HGkgrmkWGKp4ozx6U3QbvhzDNrnDwwxqAABGb7eUwbfqFS14tXRn4mMWgs46yhxz2bJEMbwYjAX6CC",
  "key7": "2nXPffbJNEvLjBApPMGEtvc1mKX81tksxZ9URg3ESxeu3conFCTToFfWrJ742gN8E8ZA8bnKA1PHZ8ejuu9uN7mX",
  "key8": "57HFh9g7EDt9TVu3w1bmLzpVR4kkDPkkRhyBqMR6CtoogEZgkAwXRbfLKtY1wrNS9jmWRsS1vNJ5kABpPmEzvmHp",
  "key9": "5dASMrjwdUHxWnU4L5tSb1bejXRtEExRJ1ATQLD3kdnFXPE56CvdbDUj8n7Man38ir2hrsFHg3t1buCFt2ZuiF8X",
  "key10": "5UKdu79BYTNud2t7u8eSEjUAw3xXKiE7X3X51KM6vAbWLuRh7wWq6L66NpN2ua6FQqvkijMbmoD2XXBcmaszVMMv",
  "key11": "5aAQEn37EBSik1g86oPqZdefnhX1X6yJxw7aMSzQbByG88wvoLX4E3UqCLbZbXdinnD3YSZuVpXTyWFc1cuX3Zfu",
  "key12": "DgwPq6kA12UbPANJze9arRVLC5UeimhE7hsk4ExxEQh2pXV13cuPxfQsPosWSGd3H9r1Fvz9rjEKWYe2ziVLj2P",
  "key13": "2LHsXBD3yLo3y1m79NEzqxGS9rky37jbZNtbbwyPa2pDBhCMkPqUx9FSHSPGP4oBLcoUbp3SNShj5uX7PQuAZxPK",
  "key14": "3WdNfdDqw5SFLU3mCeAj2gnNCNQjbQ6tNEo5H8iP7Akb4pdYRU1Adzs3dfi8nFwRgGoPr6cTn7PqFY1ksmjn13Qa",
  "key15": "2yrubKzFDz51Fupudc53F2eJQX3sxAHKzy26JKBvE8q8yYynxj3Kgg6KzjnSFPCD6TyFqGag7zPWC1hEntfiDzC4",
  "key16": "57i1EMxfSNHE9nULKHSPZiBxbwDnwBJbWwjbR9BzCNvviKGvm4rzfhZkw5AEoBqx3LReKv6sEYr38MmHExRxMYZL",
  "key17": "374SgSkfx3wS4T5dEWBTnmwNB6Gy6o18zupYmmpGaK8dPFmUYriPVwSQJF1MXhfsFFNSuoGQ1apanVGWz79q7cTD",
  "key18": "5tFM85Hqef4VrihPG51pBihXE3tNd5JSoAJHyyRqX4uyMxVvX4jYnwyiKMgBF2mVtEHyM3tqXVDts5Bu398sSwxY",
  "key19": "5T6YtdSuFBqqw4jL6DrRErKs4vjrV4ZTWERNBHXmm4rbTW6EB5aSP5h7HfhSjUAB59t2iPBEHFf2KspQaKKh1tog",
  "key20": "4xVnsiMeSBzXE28X3Z1jfD9EJzdP6L39X29trBWLiiRaDPNLptdpFrTs2J9uZp23rWeQsxLJ1xdzpjZbDsAWCYrv",
  "key21": "5AM8af7AaAekTTucftLTq8kJvQsgr1fqEKtkahsn5i3eUB8fJxiGq5xLJWaLCt4LCQhSVT5Ygrsv7zmbwQZcab1K",
  "key22": "ksjPApkhzjMBQpnUe4M8LQjJFVhyorDRsNEcFVydRc3ujM2uPRHfjSX8jPueGD2wnXkARJDoq84PsJGKm8M5uCA",
  "key23": "TBQCcWUGnZJWpAV9oJaxPYD6Z4hjeFShT8B7CNo29FEbxuHHUPG4kafHLmFNiKjAScQh6vUHmXXKseNHiayWQGq",
  "key24": "4YB7A1fNFtYsRhe4U6u55t36qjQBQvnQkGGPi1jxoVNm2gKvQxHKZcvNfF2Dcz3KxudF1T5xZKrmyhNaHZxU1Wfs",
  "key25": "4usixqYtt1vgSNvkZeWamNUutinhNjpjpMNv4d8ReGxCH6sP9tcVJauQaXTdc3hFaVPVvSm9vkRH42mJ7Bbzd4oT",
  "key26": "uS89gUY7wjitpAKaacUL9Vxmp7EwhfNYnusNCV4kwfhKPQGtHcDWULmr5aDe29G6QKXp5rgwpLE54oPwuEqsyhg",
  "key27": "3vyP1f7K7pQKJMRjF52jkiTyYYwstxmS6SYVHKtwpW9zTgRdJKZSdcSQzHoPgimaNcPQDERVQ2wv9G1yQZN4ELhp",
  "key28": "5SNDT4VRLzD9tyQoNQqxNmRbVP9M6e9CDRu3JCV29pWKyUVPKWd6GCA42hxhA9n6qLztGx8awY8892AXH9uqVLcP",
  "key29": "2AvSwuEHYzBgGpA39zjShfsjc7nsuB7TUdfVrWrGzVBddmFF1cCDW1uWXQGQA5oXAFiJa8XAJXgmquZsuYddNryU",
  "key30": "j95rnjE7mByQahpxFBYoBgDYk63Rdny1fzyzCpSHJUoZpdNSRqwM7SHYrZwidja2Y1wd7LXyRXuXFmECgNv1QHh",
  "key31": "5iJUoQwXEq5u9Grwdnxz9tepDHqRS3xcEDRxaELomoB62CryaLjJDZR55Kfsi4wMkA2vSAF1KeHpP37up2GKV68p",
  "key32": "2KmWnUSGCtyji4ex9mdcnNaRYfcDDGnzaNsPfnpCeTsMXoPvXcdwbfo1wcMAdub2DgNXaoPgr4egETTgztfwPqSr",
  "key33": "5fBMQzDAzYc61duoFsgEmN6S6buGnTbgeFzHyTEhhSwPs1QBVA6ZrdQnvQ5GBSTTKujs297hfkX9NWZfM7B8XG6c",
  "key34": "74d1at7RocsjNdPorUif7ejgGGHWQAiLBSBVxRBzgrs6rTHdsnD2iqxkKr7fB4bqkpRRZspivJeR4rTj2Dwbw41"
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
