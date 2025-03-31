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
    "3xSpuGw5JLU8VDMohh3B9u9LfLdNHAEPndtDp4r5iG2AYyWqH8EiPRBfFYLAu1wudbWbSQHWpxaxaAbmmgpYEEMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DTYffAtCXkkQbhKegmRRUAu4X8hWjBUGAEwrCrsUHF7aPnHYDRrDg6wcRsdG5DjYVUhkVK2ddYQJhHuqQ8SJwau",
  "key1": "2wnnghgxE1G8DNXZWd1qYf9Nv74a5p5T2MjZN4bHLwD627xzEcq7VXtTNpAsjSmevQyd9GmpyMRsN9zX7mryRPAu",
  "key2": "643qn6rENJBidV1VTCR4ZHrmcCqwnxSnjShSh4UKeA7cf3jXqxeGgCvFMigZVJnTLoNaufGfmScBzGMZM78b4K8q",
  "key3": "2z7YoPyKA2BW6AGg4rqRMrTxhjQ16Dksvkc7oPBo7btpVX2FhRE3u65dihYCk55AAqoq8BNZq9shbZ6i9PWF5wkc",
  "key4": "4VqoqDgDeg4Tmq3yfhuDxLFrjW9RkeVDh5ttGvj2VWfwKFDrkYgWJxqsGQEv24WtPWTj5SSMHaNDGgTaCUKWcmK7",
  "key5": "r5Ka6ZZbUuCZ1gHuhX3Apj7FJdH4ndtPHiwUMRPTvXjTBV41mnrxJ83NWbTAfSms8gEdERm9jGH9wVueXJmAh1P",
  "key6": "3XuBxPV1seBnxkJGme9dtfeENQ6ur5VqBNYod7H192jtXJVm4CpYNnyWSseyspHbMTcqcBrAELnprA6pL3wi5WkD",
  "key7": "NvHSNW3bfjNJDtarW8dpUDiZaS6WDJdGNt4rhJZvqSsRRPQTH5s9XyoyafyEUYhygf8NRwjexMqr7akVyzAfLii",
  "key8": "EDQyyhMGJ9cEVRCATMMj6WakcjK87Zh274jk1CKzBxVfFqnNdShwPH2yxHDaPFHrJ2PDK9chfJV2UkzNKHmFGfs",
  "key9": "3yn4XVmEeQHA9LGkrJcpRw5uhV5V8FPo3XGCYsBZEEXWbGrWRuCi2pW943W87JCyBELG2YSLvGVuhasvRPYhKKJz",
  "key10": "XfwzXCPRZBG4CVoXv1ya4U51bmJsZK2bigzuz4KJHA6Xb5jvkkixPGfgAuZJxXozo8xWc4b9Jpx3sBdZ4QmgqC5",
  "key11": "5hic5JGiiw2TS7ZdsnneKc3QysWeBWmeuJ21wqVb5nsjGAAtLPnyNDbnwNeZKxBL6sSa5UJ8UrikTsFdKFUB4aBo",
  "key12": "3stprwotWUPok6jr8nf4jEnixZYPCH7TDKkAS5Gz1aDxAfnfnsLGQt8zysYfji1uRUSEoX4jvDPgwTBJTeyLLQ9o",
  "key13": "ncGQxPqFrBTgkqmFqXhtQASbPN6UrWcHt9KmMRujAvY82ha9Qmhk9hvGeMD67LSM4giEHLTJ8P8JCnjuQYdECP9",
  "key14": "5Gxw89x6FjMqLs82xGjceyySgLGmk7rFpdPs9NwvCURH2XnNjQG6gJzRqeiqgm4777DXqSGVKfuYJddY7TsCCjpu",
  "key15": "42WZYNSRBqmazV7WaTjxekUnep3r8Q7QCL2NhRtDAHbswdU6KCFAey4pth7Q4VeKm6zrrFLxxniVDMHVzgVj4Vqe",
  "key16": "4592ybG711mCCML3iJfTBFBXSZoMvrYD3VyCFcTX27KbK3GWAbTeU1SYzqQQr7KbfMLzZv4vmrQESi2ApcpTbcKr",
  "key17": "55nmhCfvs2QgwVWx77Lx9rymn8xbiL2yGpiuq6HKXQHLcPCs9HLYscQ4sYBaJ6kM3nFVEYKWNw2aaKd1NxLAP6R3",
  "key18": "2M8B3ATR86uUtu3xFQznobsFXojyk1ApYE8GVF2rL5jyJtGFKqPD2xjutDgfJrJXEdtsNCVomvKUTQhxUEhheaVE",
  "key19": "2viWTJvippyt5MW1MhTEZaz1AbxbH8ir5ZR9XA3ttgPNLQyqG83ZNkKjEJjYFqJx26fMg4jZjJceUyLsad7nAFis",
  "key20": "5Uim6umUuKDfkBD74DMS46QAjuaGVtWQijb2Mk2yjJUna5XxZ6ZYxVUqERNndi3GsLajRyoYqfitND4WTziLZCNW",
  "key21": "54LJDi3VL6kbak9tNycvB75xax352u16iUsxRVEaN47CFqgYF79iKpCZQKHTeoVpuKVsJox6Q5h8od5HpTXVrCay",
  "key22": "2RBWnyYocHUJtMrQAPQN2mSgFn5jme8KtuSCXj2FTdPj53e12nbKVZZMcGdm9eMsEMmHpqGqrpFh3EGjPrDuqEdG",
  "key23": "5yhvjffqjV9MpBo4bbLyo7x9ZyBSNt6J6KdatWAJuQwFAG28BNaYC8hEwBrBVSyZ48exRkLfR64NJNuaA1UTiyrg",
  "key24": "4HHNEGy1Dif2Lot24i9pDejRKyRCbAQ4sSiz88E26vcNJ9QLU7UpRx1BQW41D5bDbpEbfiw6utvC22mZLh9hPp9M",
  "key25": "5ojacCtjqQmojAe63CuwB8tUqh8dkCD7NWchPwu7UB3jeZRzJKAUN1ctUmt6wgReMCDNPofU4MBjCgEHanQu6bim",
  "key26": "E67D6euEetdsYkhiXwha5QWYigjPs6o5PhPAZVQ1RRhjbLSPboVZAvBkx89woDU2qWz1JZp84av8fVRgoA365LD",
  "key27": "63Yw9UnUpYzQ3sU42G14wmaD4vkd6iF3QcJNVfGg8bjDtVKBUxnaRJGquDGnWm5xGZZEbAcQN2zNPhoqtafXZ2oA",
  "key28": "4i28UMDVifa13rS9zz2JkgpDRqF2vCysXvQky6EkthbSrBeETyAvqXfFKgfaZsVXb2e43844owLMKFNmkyeyyZyY",
  "key29": "2pUdrF1zaW2USG5bcmqY6tNcXnJm6bW5g6VfzViU1U6tj88BwsLmzoxAAaFfF3Gbi3qa5MYJyd1PibN8Tk7L4HzU",
  "key30": "4kBEyy4JyMPqeG2v3cAv2Mtir2E9CnEmMXbc5YNUMQBK9iFNSrAdnpRXoKYQN9FUWZTucCjhT5MSWk2iGziQrnqr",
  "key31": "4DKhYxoxWwC3hph2y7roYKHo5i3sJmcSzoCuEvhv3X5iRrhK6o8e5k89q4n1qnbicQNRpzy5u1cLWKAEW1Ek3pjx",
  "key32": "6rWtvR2gSiEem9UJLMZBk2iAyCkkrnTTpCvnNqhHYJrC3sXZcmiavhALYu1WJQ8jcnByLm4BqeT1ZS5Y3Fd3h1b",
  "key33": "341uYjMhS5tfSZbfbvpUNBwTUVSArXr7mqfWd86xYJyfkjX4CoD1jeyy1yDURKGefttS9dEoXxKoMKAMbjWE3nCE",
  "key34": "4YgwFHjTAkvAHtHkb8QsimhpnqZzH4imcb5Z1v5prCRoyoqJLMB1sGLaf7a1bgp2NzoaHsaeLG59XfcSYCmsDGED",
  "key35": "3pjrc9c7JC4p5489vFFG4AdSHhdZYTweN2J9GnQ7773GqHiUkWtD6WbAbDZTpNA9m7CWsWvjTy99sMxABDZ6Xfos",
  "key36": "XoeqvJZxtT3PefPK6nbT1ixcHgpvpTYDeDNkjZc6iNcVhMeh2pAodZodfzpCmh9J9dnRVwVjejjPDGxxw4dS7y7",
  "key37": "2W9wwFH8fPcnAxWwKRosQ9oMQfpXu9vBYsKqq6LEGonmapLuqknEgpx8gVFwoRjrK31QhDUz6tHUKNS7uwuSeR63"
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
