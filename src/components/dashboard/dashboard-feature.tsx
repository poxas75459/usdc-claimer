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
    "2gcVXTVs5hXxNSZ4oKViFvJH26tVbXgB6AdxoERbLufMQWbN3P91cnN5LbUkve6pF2TyaxhrqavwCNsGfbEAhkXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JYACvnUibQp4PqmEBkSNiLbr9CAnbZwV1iue9xx5GrG3nRFse3oGWrkG2RrpFgFfhWmHhKBiYZMrUCjvfLrTr6t",
  "key1": "5yHtMj5bWT9v5QsM1HPZPVKLz92RfjRYDKaKvybd1wYzGPPio6p9QRhL9ypw8MJohMkkbWBhxoETZnhENs3x5h49",
  "key2": "2hPM91KSfyupXgpL79Nr5MsdRs9Dcnka77hyhASKusJD5dJfq3gyXLCetYKxm7bvhekWthpVWFwt81X9Hmd5fyBf",
  "key3": "jg13i1qsXQ1HM1mjr8JWhHnNYGUWTGoT3QUBc4M5q6xHKHUxYeF1UXsQYajVKuBWCFibnoSeuNnccqBzGEdiyyE",
  "key4": "jLCgeepLkMUA6okPf1G8sfY7oEGTtQhWc12FLNtupHtqhx3wNHTXUGfU4c6Rv1bHP1Q4RyrEWQTfxNFF2km7NVf",
  "key5": "FQwiFtyqt1TQzLoeYQfF3iUt3mYrRG6Vmg95xWoYJsJ6kWVuiuVxNUCDqktkuHbCFDMxFdRpAPPoH1WEPEmSEVJ",
  "key6": "3g8KpRXY1jtwRRdPYEVWN75Jbr5Zk3iozdsXtLVZoxxnZdbkuE4aMvsfaBipnY75pqA9SG1rjmtdViM3dCKjopvK",
  "key7": "w9pM9jfQf2M6RLPonrYJsUYHpgReYLRPC7UzUaXJGbodpUVcj3fGdbozcZp7Lk675QKRyrrPtMdk9rXjSs1RELm",
  "key8": "2jFpEpgJZpfNNm4AkXsfCMtVjSGG8sTpYwggkzdTs9VuEFMifHJeUJbDyP9PSrBzqNeEzgwhXDWznVrJbf4sWg3i",
  "key9": "5VmaBaLUXxjywpqb3RGwpeY3Lh3AXXczi5ociW2hDfU8t6Awt1fVKqqiy2fXb8YzcWAYQwnPCwvnbiPfjnwYzoEY",
  "key10": "2WgfX9Df68adqZVVoB2adwpmp5CBJTQWrU9Lw4LcNZH8J8tuXjxTg64ZC8w1k99EbUPAdVS15YAvxs581tkZEVWw",
  "key11": "4QnKcPQBqJ9FEMy8obpUazdy3NvND8ohh6iXvgSLju6CqcDEBgNspmWY6fLE7hx2cPV7g79g4ybAeKXqfj16aub7",
  "key12": "4N5HLjWuUeKjBug6XQ1joaV3QMKHzPKi3FP7tYsZQREq5D8Ewv7rovqMW6TsV6XNrAFW2bzZWpVsSJGkGyYYjNXd",
  "key13": "3upZUe8hqGpR93Fu5vXcGVJvPvFHZxgJiCQ8XPWBj6Ne4tGb6xiFjdBTg2C1PEbED5a29R1aZSH2MbqDqhm5QHi9",
  "key14": "JeMeDodvi2hxYJaAaT39y1kAynJK1sjjUqALnzwnSHdEBC4xHiSyzB5FMZEFf96nG2RajGx8EC4d4hQXPGDcD34",
  "key15": "2xJnK4qUjfi3QwtjWUL4XQmuJbDmgJ1ZSH6JYkhtkyMDcSiXgAyrLayQThQv2JXP4NpxXMHEcLhGtPtJaS6oZpCm",
  "key16": "55UE1fMHh4pAkXpds6EQ3KBGc2cr8MmrgySHf3XS6w9NnenhnuD9ig5pWYGYmtUMBD2uUE16iwFrDrggbt8m1vco",
  "key17": "2mcZb5CkmAmtfwmm5KbC7fjthMr2WzbAyzBsd4GwZ9KRw56SgyWZnw93ASdgn7njNm7vdBkzMqGFJJwui2e37sgE",
  "key18": "8bnDCn6UshxNVwscP6knxn5kErfSFwkdenw6BMBX1aVEBvXqLnaVJ5mXtGyNFbZGZSXTkHQc9kpkUwtt6Xiw1tE",
  "key19": "4LmEHdxAHpjZiABsU4PBBPMywVBa4A3Seq6kgp7rVckH5p6AmQFVafn16FtJspRLycHnLq1Gp4Uxd6UzFU31NhSH",
  "key20": "och6W86nrJ6VmscBH15oNrQZCxdUivhwRc7MfFTcbvpM5yXgAerHWy3D16xh1SMo8TZN3aXj4fM7ctX8fvsUvGm",
  "key21": "3qJWcfCxoRRBiWaK9zfs2N3oDwhXUDmShu4C8V1abr3sCHrph1Rr27dD6VyvXX6rMvqDaRPFt7ueeSt837cnXQmm",
  "key22": "4fc3tUaUVWGGwnRoDZpUMo29FbgkHVYxsDXQQQBdkCtPc9qm8kxgPE1uYMuneQAT8yckZVqfWTQAMU1TXFzANF5H",
  "key23": "4zmkmr8YmcpVuqKMYqwYHgdGVAxdn8tqH2W8yLQEshjumQcR7yZPZez5tFaPVntCQQHxLc2TLxRVf2cfEqqxjq55",
  "key24": "37mktuLoUbX3BzyZYRQekjKbtGz8p3N1NEhuYMpoJxvcGi3FAx1Rgog1wmgqQofqDVRQQnHP4SFkojFmyFDvxXmj",
  "key25": "3bYp6EnMPUcJjSAiCw98sSDemjihXFn4CaJ56FanGwWTakNrpekMqjAwdnGh2GTSDJUkdrx5LsidJ9rDdHootfpL",
  "key26": "rjVHtoij5M9jmtyZNxUHEpidnQcCUTGQNjUd3FUcJ9aK9hcxrYR5fse21PpK3akti9GwqQYDyc723wunnFqzFU5",
  "key27": "on3Pmns8ZZPH8u7DvwDzsyiNpwhsLVy6wPc4svADCViaiV7mUmkDLUbkmbf7zkNS1qaEqUU8xYtxmmzL1Tc8doE",
  "key28": "c8NapKXQjZ7Ly7kwFRCkfAuo7dW93Zjzo7Tc743RNkJw5WUee3dAC6mhRXAxsxYcVDnaCADP7WFkSZ79ed9FeAp",
  "key29": "4uf8ehse7aVY8cUk4vy8TNf9mVVABLF6oGvtPEFvCJmbDkE1zhTPFsgyS14sphgf4qBqAEwuToJoa4vKkY9UnpQ8",
  "key30": "5iHmD1hxEZiUGJ9StVD66BBi922oSzNiY7rVHkRNkX7Nrd4KqeUWzrDVgtv1awaED2UeHdFTgzKDWDCgvSHwpTUS",
  "key31": "3gYLu1LTxxFGyt3cNegLATnXLmbABJ8VhgawttP4ZLMxxqgoboKq8JKip8fVdnjL86KSuofsHzHEhfJBuKUj4v7d",
  "key32": "LxrmenPgwu34WDP1aqUWQ5gdFM2L6g9jeg8VUeNS1w2qdidgaScupAxpbu9MmrxPwGUxiaFbJPKLgCvBAAu9sju"
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
