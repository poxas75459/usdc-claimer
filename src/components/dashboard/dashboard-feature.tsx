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
    "4kCVSt9y6qS8vMxjqyHxCCYePmUgK7NW6YA7fy3X27aezuCZpYWZ6mV13ak8vVQGsotDrwctp9QN6wMYN3pAhKpd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QDjcbkd7JMH3Wc7GHDa3ch6xaxUErxArtMGGmE9tA9pvPnSLa6BknJ3Aan5oQdtVSo54WF5GeiL3sm6XchS4nT9",
  "key1": "53ReAv3dcivM6AShoxCeyxTBAxxNC6t5sKpVAvjtD2eFcKgeRWL81fAFhQGt57aTYHNnLUvdKjzFz5kYbAmsW3PJ",
  "key2": "HUEdtKrXjAoTTY5po5cSLbgZpcAVd7TVGappYgBfra2AzPjJmHteoM5anQF8YA7MPg2fs7Tg2pJMuU7WMK2aHKH",
  "key3": "2m3v6959WojRZ2EZzbhHkuxHfzRYHpzb4yGPpCELMxpAcPazj6seyZsj9dD9v4Dt7LY2zXv8LoZSftr8JmyeYgBP",
  "key4": "23PPm6dtftWhprAih8tLx3phncFaaBBmNpjPU8rM6aGgjmx7uquthK7kiqHfm9VywEJ54MzG8BpNHgoSHEjuNQmP",
  "key5": "4tJnKfAqd5qsDBLTZXi27iAvatrRW44HZ3jRAm7RhdcLnCkyPq2SKeKSBp3yKcD866QD2DSZip7gpGKpwRStC1Ww",
  "key6": "51CVqu5LzD3zSTxWpUhsJNwYJV6VCax9AdP2nyTkybDXeYDAazozTGiMDkFeNJDo19daJqi8kxhyMrAcuvV1Knx6",
  "key7": "2r1ggfP9SgkuWCwE4q7uwHt9rSjtiX9eFH29PKLbwsaCoDH7NCKVgBVCfDiKiUQmD1TEsyfCpVjbYkm8qxbqBS6v",
  "key8": "P1PSzrUzeJerXHmmszLvGzq7Rmce5anydqZF9hwc5q1EMuZ4Z9ng3a5tsEuFUxBG41GTH1pzrpPpST23eNVTJhu",
  "key9": "4xxc1Eacmt8AfuZiRfEYTeTRB1WWumUqmuBUHaLVeY6Hxa4bk9z2XQFaws5DwUxWNfSdKmL8WQYPz9wpKJYwCehx",
  "key10": "iqb8d76PnMjVKYghjsZNhKf2KiJcPMK4S17zZTRkzTSsAD2ejTyCWoaBLeFDrdD3c41dUk7pxREUAoq1R66ZQ6g",
  "key11": "38nxY4S5Ssd7LzGvtuWtgES5YCJQGZtZDhFay9qnrQ13LhoJQZK1CGUsBa22z3vJsi8yovwfB6a2r8oBYkG11jzS",
  "key12": "2PvdKUWpWCPRA6F2Km739BKqWAVeXDjAFRDuYDpr4inxZtJEqcPMFnTPKVT8ZmdUhkaHUj9vfxDdVp9XJZCqApXL",
  "key13": "2TkaVSSPNWHtshUT1kLGMD9pqbgLwy85nPrzeE8UJEpuVJzLQ547qDeGjAkxAVjYrrYJAPGumXdxZn4oECmtgFJ1",
  "key14": "44Dr2oCNfSrDxjxJaFDFi3vivB4im5Y7TmKywbD4B3A7wtkpHcmbm77j4eJR33YcRp5ZCNQHx551dkXcbj8QVf2j",
  "key15": "2DLSrrQiB1dDBztZ9fHEW7oXQ521yYKYbj3eFmBke6P5gRgu1mBAuYQ7UujdqZAk82j2CQV6WKuAhbLtR7uJ293K",
  "key16": "653wJGQGBaBm2Qpk72myXviAgikTCFGTzxW4Jsu9HxVHWxKn7Yh6bNiuHtCqkRuVtxLEtF9Ha61jwCEsT4DMS4sm",
  "key17": "2r82s7fzQWtrvjwjhufm44VEBxpJdDQERGVo96cHKaDWkNi2iWxf8S2NJt7mMxmHBVEgRDurf4hMDATpsvkNHK5i",
  "key18": "2wN4UZ4mFZkJDVSRQkApofJdz6m8gdHMZHLDhLGUkmWHNG3ekywkrv9LnYPtMBUqX4WyqYbMkYgCJCyL64LMbohe",
  "key19": "5e1PgtJH7q3Lwkg2xeXDUBiPeJTWJusTcPTqWEDfeTzMMaLFZkhAueDHTyTpiC84Dec21pUPv3q4ZiwEDcUCGCY9",
  "key20": "XAwRNp7MB8aY34UjyJavKak2uk6quZ8LXFmb4g1BWxks9eNtKF1G63Xmk3Xbz2bBSkpxkvYekX9Sqoo24SJnZAK",
  "key21": "4RGsgttyimDzpTTCVFDWHCFGd3R92ZLx6zrHz11AVUF7KuSKgeZvcG7zw8jE7aft8N8hkQrHetaEqdpUsRtQ5FZs",
  "key22": "3wpbDCEceBGX7c9r7CRXsxZiCsEFH21BZL4VqynHcdRoLkodxDSatgZpBSuQPWMPBquDK9HtTJZP9cM7Png2qvq7",
  "key23": "54HxDksK3bE32cfiiWE49YbfYbSLDVbx6FEXqBuqfJkJmKreuvuKBRys7tCyfGpm1ki8yn5kErg7facKPLPkf2Ak",
  "key24": "3CcYEoWZ5db2ZcL4yATid3CY9GkBRE39ExYwTyM8ug7g8Qfj4veAvmMsHeX4tpWGKEzQTQC12DkRimCtGrPAy5zU",
  "key25": "4Y4jMMHediZMbVt3F7umSCsfTBjynajKGEgHzkXCX5UUCk9RwhDhJA753658e7eXxUhdMHSSagrkL3HQPVyUL1in",
  "key26": "3WxHNcSZyoqVK6fzYLEyXywXtPJfXgKcfcTASkQ8aSYjpXumxopuV3p9aUY8YmSdfHrw8sPHYjQVFdRfhA917wDD",
  "key27": "3AUCAeZfebSEqzoArj5yuxTthiULdWz52jdcutfMaC1EuYcyXV6PvCerubYPwdNQKF3AejeTQopdyUqsW1pq4wnB",
  "key28": "5VQ8mkSp2atdcoqBYc9iMA1KwTzvetuF56kGfJqWKnnLqVAkhk9y22D16BibockUXyP7kffrj6K1AYM3Lx6DzUZ9",
  "key29": "3YMMaDb1oxHXuYuB1LXDJ1D3ubScjrTBd9wQu7nxovT6chzrXnwMvs73t8u9bTVcoaZRWXdFhyYHCGSyU9t7cTL6",
  "key30": "42gkSSjtvGtZh7g9btzwFGVHGuhcrjN58FjG6PPKWtZnwXekcXDm4MAwZS3vMjTDGXpDjD113pCviW2M787pXyF",
  "key31": "21kMTDHP5riuExBv6qaDMDYQM6vPWzWWe2R3sBmjfjPuqYy9dNJqEixqzCduvtuWsaGVc2FPx6D5Z8xJyqh3eVyi",
  "key32": "DazeRsasx5UXipMJZpyGjKAaZ5HuHFnWcZcGEAKjkNkU45FBAoffqh8nm1EFgR1VmMkB91y7H5hnTvtpauybwfS",
  "key33": "5rFm7pSJGbHGEXevweTYpmPJHBrPZ67kwjsfT1hfmjB8m9u4C6dNfCaahB4QMRSsB8LiH5ARSHnqFA9hYKZeRRJt",
  "key34": "r1QFZFfqbQTWbW7gLTn3MaJqwkN51Ddfnqsr73MppRzf3ntaZqwS7cKeHPyT9AmvYFGsecwXKGoHjyWvtT2NX4Y",
  "key35": "5yxjUiXTj2jCH6f6fuguSnLFPbCzCQWiCATJA7Vx6YX6camvbXw2D34njuDNqnqzEySbKVErriCup2AY96gm38Gt",
  "key36": "yrw6fWJrG6iMLxyeUJLP4LntwBLEuKjNMRGmxTiqF3xdDF6ZjUZCKHutuBjhuGYDwCe72enpjRm1zMm69KFYTdZ",
  "key37": "5t7ecDauK5SWVGuAaZzyDirJTngTaK9vUfUr1HcKeeuUzYnVdiWBGthKwZo91qTeMCn9C7aquHVxstcEhvWByfDF",
  "key38": "ZLtjh8FSt74iMjNxiMWNLSVmGjS1HnBQqQpFgF5U7XuuZJjXC5EA6EEwYbyKPM9vouABnwfduPSPSq3k17n9aa2",
  "key39": "bdSB7MCBpN8jwnZgNTkFyDBDdA53UPP7aLDg8FcdXVMvrfDWcjmuGexjEskyUrXyxfE2iPXKyrfVDHrpZBmFmeh",
  "key40": "67GVBegP12mDqc1qPTvjwiCHDhHgRcgM4gkSZ3n7hZewEZPprX7fN6GTLbsWKGRbbFeYLwLRk3pM1Z9vkiQwiMc1",
  "key41": "5PEw3BHGGzqanAmjHaju3uYcDrwSCRPiPWukHjdhkwyYM6DMJVgsVkoKm4wHATthqUs9R8WHKrgvuM61ZJTwxbkY",
  "key42": "dxPsPnSFAYuSJshUHW8nro5PBeq6fQcDbeqhbRyc1v3iuVy9VHC9t7Rhx4btYs92yzRESvRJcYnJLwAVmbbkRuG"
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
