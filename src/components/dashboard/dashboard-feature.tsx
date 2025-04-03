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
    "3gvDRGq1raRwSVYZpeiRfHKMeYNXrPTw8h3hS7VtGb56WC2vbFhPvWYHVVMHBypmsuxr71kwpUcfaQGYHmmKMpmf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T4UptV22BjGi5efdHtyM7gE5hvouEh732EgStSJB2Czt64c2g9aDNfUmrt14Z4WcNwhqJdNfCUJtufyPb7Z1Wc5",
  "key1": "4XGQtxPq5EEnnppc9dy3FcQeHZjmD1AN34pdzShjhRDxBcsK7kB8APRW5DZdw4HNgzcjigcr1ntBCA9QVsCw61b9",
  "key2": "4LhKhWwskWUyQsDhcrnYBb3P543KemAWoU2fFguRG9ksQRXUMEH3PTGUQJUopEzBs6kTFuQZjh3pHzRcBB2SMEuB",
  "key3": "36SMmmmFM92z2TbNHTV3StCKUzCZmv5mMRJoYgGvkYigHYQPWhLZMSq5VKbUuGN6jHuHiEtUHBdRKAeYfLsyKRZJ",
  "key4": "3zAHiXaHK6cZoSvDdFFseKu71SVM1WvJXh2dBtChcz7smV7pbZKc9YjyNu89yZa1Jxuca2rAQyziUniF2C8UNVHh",
  "key5": "2vNHXamWCpjayD4wxvr4bUthw63d3gDFM24ZVdgX7skuMMtUgPGetv5bNdZR5hzTvDHdB6GafRxgF5QheiUj3LdA",
  "key6": "fcYF8KTr3Dxtrix6KLxZPLTha7N4rkrBXFbNj936qvWaxrH1S6WyzGJH73zXE7oj7pWdPfR58asejS295kADKLy",
  "key7": "3StwToeKTgMDqMasUCKhPapmdyoe12fXXBvSVHTVGHnBV1MVSHnv7Mt4gee7tUogrNibHBUmKuUQwHxSxbB3SiAQ",
  "key8": "5Thd8fUwRruPZMtKrxqEDWqZwY7hwp1QTH6zEauhSjv4VuK5FtiBreEXnWJ9PUi4cBhwcEcsbEpH2pSXRTW3AUpX",
  "key9": "4Yx53VYGkAffTkqQERhTbfGkENDPXKB2i5hqAhXVzGaiybHgCDmaHjgAaXYifAfQKXSWWoS9EJdd9q5sV2KD9DLB",
  "key10": "i6cnuycGxFFqjULHX1L8gCCHCjaUuuDLqMhLUS4DkhfVNGmWLEmnuLnJVzSL2xjAPz7tJo46iphhYRQWfxTwWH6",
  "key11": "4ypsEoMikzKgVZAtBL28X6NfGEF9Bp7sZf9xX2cSZaZRqSsabY2sEqxnLfSxpJiebMm3zTNycYTnp24fmc5fWZNh",
  "key12": "6hfJbmSD91RxcE97k3yG55rbKZ2ynnCcn9wpQocnA4eGRoGMs2jic78gny8EKLcaXEpPJWv87tNX2YRyAxkqN4u",
  "key13": "2BSvEWsn9p85TR5tP1biQtrGetmz7BHnxHZEBNFMtogZPg2vkPW2fTPnVoE3dszDzR84tTAWRqDuPQoUG6v6n2Mt",
  "key14": "3fvH4CHSEQn9yfJNq5BaoxHETbYeMXwZ5Rp8p2DfHgA19waa8iEcEzSThmaMvYNLHP8AsjqTgvzpnXPnb2yvmf28",
  "key15": "27vqXUmV96oK2VbwXioL7cmxqTREJXRGAhV7KhPr7ixjp9TPrev96KMm1kJ8BABmqfXYW6YmxzcCHwetsBfuWWCy",
  "key16": "2GTcqgwkjoxh59zHUCb5vf4AB4jqWeNnHXU2VziLrwUrtfEZA1yS5HsBFjytgEq9dscTt5mUH6mqWDNyH5T3Lz2w",
  "key17": "63MhrpRoW66g2wEUK7aC6TJMHsnqGGjTdP82NWy49QpyN698DJpWhsgVZxEJuZNGuCd1en8gMvnybTpNLmTduagK",
  "key18": "62RgDG8o8JU3Fm67VJeEaFR3bB51cEueQvCmgkcYAaywHbHCgJyY1LkEE5oH6LgTH6VWobdmo7YgLgqty3GeNVcC",
  "key19": "4setMr9p1vq9gLpcsg5xncbGXbzsvdyy74oLeHrQGVHvszLE4aCLzZN7F1fiVihuyftg3gm5WThih99cqz5KDJKv",
  "key20": "3T2pNhXMpJ9fchSN2KZWkkh7H8fnnbdrAod8rfqtVrUNs79SdTGnnpw94QgEp8ne4Dehxz6KmGPYiWnUpuJ9bwv",
  "key21": "3EvWRdgfEKguwM3xQonAkTUk4WxZUF2wDLYB9VwdWykuo6XwMbwiwK32vp1iHhi8fSPgMo5ZyjPrusK1PTUoXEzh",
  "key22": "3BqojsscJ7Xp4XX9D135D5S6wc6rbBE6ntPGDC2C3mY1M3mhiB2G77qLojK6gh5cy7H635w36hGrsyERdzdK1rsM",
  "key23": "37SkPTqeWSsuCAA3nrZGEEhbpJSmyt3JtzivtDPzZ8k7YusH9v7R7GXfgoARH9j4CbBqdAMTP6isK55WH8ACLRQy",
  "key24": "nHhxCqyYjH719yX3rC2nws48BceAhsoYi3shAHwhvdCnj76eMbpKgaLPr5wb6jr8dnuweFJuuJsNyrBAhoHPkTJ",
  "key25": "5k5j9oz3woeky4mQ6D8UNroM8Nf7wDsr8dqJmtVKXMKYWmcRopFST6YYXcn8cawKdyFZ76E8NKZ8UxuyuoY91bfu",
  "key26": "3Wk9QxgyuW5f5zZWTkjMQBWuPnpkysTbfzENKNh1N1Qhzjt135BABzVe9c4NBzdQK4EqVnMudAJB8Uke5h3GMzGN",
  "key27": "4yFNg7P1GfQRJ9ffo54ZfXfDed4P2q74cQ6uj8EjjrJsHv7cGpz6vuqhSoq9jmmoSRepSbmQqpoCRFEfMGneCads",
  "key28": "58EjQQYTzJLrypD33qK9f6ijRQ943mun4dmPwpBVJGiQNPayvueMCX6ypTnkWRg8Qr6mdHcusWLHs8uwCZdiXjTz",
  "key29": "515fUit6NFqsC9vmfrwe8NFg4Ke4z4c2CTV9UP5xukvhLiDbKGj4HqdZEyPzhCHTy2mASRhDxds4cLGeX7fzsjMb",
  "key30": "3hZ1szaMpRjQWeS8er8eMm7LXSUBufx2GLZEHyZfj9YDvW24hE9ZCf6HrSFEAJeEQFNkAJRo4vP814VZF4PzbBVv",
  "key31": "BTKJyn6oQSnnKVs7nuxTHPN3RtibNeBNoaKFHo5cdxpKCASeeKdxTxdkhtedLV1S1JD8PsJGfyEWH7ZbCNqrZom",
  "key32": "534zxMfNAPUKydWbNTzzvjbhQXKes7KmEmi66H7bWiim16Xjsbitu8SPYoDxGikHeXU1Q4epScYQTrFdQBFg1WeQ",
  "key33": "5ecKcU4EhBBsAJB6D27FpXGeeW98XBdxXDfjXquqfobXqJjWLu2Rq1At3NZzuooxeWu6XnrD6RqtmzAgsqU4SA4x",
  "key34": "nFf1muByTo3XiHBPzHxBc29WWmAV7ZuqVA5Cwm27xaANc8LuE9fEZNbkAw4CfsQ5KGinRcArgEajv12Ed9B11PK",
  "key35": "4YdvfFFoWBmyK1zuQbminPMh3EosTA2emiDXN1Rv1nKX2YvWzTmsENSe9LDejFbF7Tv6DY82gzLqpFYn8wNLEb33",
  "key36": "rkL1ANYX9s6JxTTC2WKsLEP7xPgZiYm6mHYnMFVCjXwZz5GF949Ko83hz7dMQGL8tQCWUsy8nM6zR1SCehARtkK",
  "key37": "GWSHrAQ2vvnLi8aEWdCdU4E86oiRsTKggG2JkKe5E3BuPTyuTytoWKCa8FncCMo325WTdd2kRC2YwUfUrxwSAh1",
  "key38": "3Qx6DQvzmgUk7AhrvnGq3USzgJkZmag5oNEZqGdGYg8KAV8pTeGXwPu6Gh4GXZWhCboLARqK3qwWwqV7RdV2ZK8X",
  "key39": "4K1HAkaz2Q4UpXAs8cWrUmt9K3YdPhFN19eCbLLR8AJ3XWRXX5je4TSiNi9XxEt8F6HDFH8aaWhLsNuiQnQirNF4",
  "key40": "2GmFr8rSPWuBvCNaABM9G7noiW9aWXZ8rEMRHkf6MtNRvjG76rfUUgBJBYpLiAXChTDvgPkqWiLnvxY7AN89Qh4q"
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
