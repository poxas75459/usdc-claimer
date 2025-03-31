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
    "61Yx5HGqthRoF1mF8WXGeDQhMgdc3Xnmfmxm57jGKyh49dVLh3kzLRfFpu1JyW9PjKheKo3H5TodaeigsKH3Uztj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bzpgYYKwj9q4AWp4X5Nr7tviW4ErCzMMEk6rF3B8BWG2iKL9Xj9YhN8YXStrcCEBBip9YNC1aJs2eu2VeKEgdVo",
  "key1": "4KMwQ7BAnRrXzGwom8ifGNGeQFBa6oCJyV1tRCuZsn5hgoaRzDzB5vxY5G4JV1oAPGobQerfzdm9aRpDqihegwjf",
  "key2": "ZQkuZhsrxy65C57VS7x8pEQjVsG1g78kZKX1XBVyimRYwabUaKEdhuTi3fqNR8avxy9uxhyun9LR9thvjm4wKEe",
  "key3": "2ux9p9hWKCvgeNrYtsWViC2CKRxJBqkYko7xTM4f7g3WoqrgP92UuzoKthb64oyiYsEBXEwzw87fd38rWRHBFhgn",
  "key4": "3LNkbgi7ahrKFeV4daqgCu2oKuUkmsuMnxMLNG6GFvowj9CnTY42nFM4Y5M9jueAeuuYpjZwNE15twD13T3ZVweL",
  "key5": "3xadrvL1DTZaG8xCqddBhzu3xqrtJCVN4K9bSHYerFFqWBdbb8dx8dc3TW5PkxYGZ3dPgzxnK3BUKPskWW1nqcrE",
  "key6": "UBFMfsABcaGeciYiPmxfWwvNqGeaxuCK5bdPdXLUD6KGsKZt4MxBpJJYcUJbJkrKptn3eZCjCkRNKC9vPADboUL",
  "key7": "2vE86tshzaWhbD9NQR6RLwGe3UrSy8RtNJ5aAKvGpbfhgg62skkYZvQEmxYcgTFZ4bLjmjUaAvjMsRWcc9b1s9QC",
  "key8": "21egZUg49yQuVg6y47vmUUS2Ga1vtKyk14Y78Hhmn7hv76HbtUQBXxdcx3AwdSTfPj7jZLhU6qLnSjkVBSWdhme6",
  "key9": "3sGzTZ1vXvgpoNuh4aGrMeQQNMcJgkgSZSQZRATPNaHdqajkDugDwsgDcynf4PZrcT7QuQKrRkkMtyL3fY8ACLpn",
  "key10": "dwyUx1s5iJENGhgQjjxXiNXErsq4VykgovHzHxaB6VzRVS97sY6KyCqXBXsFbQcJo1piZBcp76QZS3DgaFsN5BE",
  "key11": "5bAwjdTXxtH3EUvac4UsYvCx2sWxi1vqNF3qRt842HqCDU8faCziWxR5QfP2ri4QAD7HDyzPrvAE6sEVov4TWfoW",
  "key12": "4Dw5RyAYTazMbLCK9kHji92VkaNRWDHrNL3ksz92FY9kPD6xCFrThBx2WdhAHQEE7kpEHaFhpuoW4KcA2ShUSaM5",
  "key13": "3bpM387f3sk3E8JdHM3QTWjDypkLyb91eCY35vhRJ9ymQv52uimAmxyq2x7i186nrhUGMkepBBNgfXuWGHh7kxV3",
  "key14": "5ByjnYT4jmSCpnFuHo6RPuXtpbHZ19UrYw2zf4V5NzkqZ4B2xreczXcHDzmuRMnTic6aT32B3kcbFWbKPiuTXdCT",
  "key15": "2V6uBUFTBWjuUwnyJKvTfKsj96zH9mEyuQyXogNRpKowaGrVq1SekJuPe9YCEPyrYXExDWx1ik4gPnrWet2fTKFU",
  "key16": "4c6jKxtpZ38ncSKdComyiA9QtVJcaH2WfdWUgYpB7fn6ZN3Dd6LteMZQizhdQADwA24cPWiFgk96MXQbDbdaDtwg",
  "key17": "3JsJuStq5pq7nVokSZjLCtASKanwFA8QYsDYVPDdEkc99n7fmzKNK7uezrRaoat3Tbbk8duFUhJLY2MtVFn5RLwS",
  "key18": "5p76J3SbozUwcg3cNtkEdbrPCSnn9FeTMVAwm2fFCKtHtDrpfDKMg9RsrTxN7cVFGXjwjq7gZy8AtRGnryE11VfA",
  "key19": "58JuPg3ZtfFzFtTov8KKzH9nsee8TRQb77DmVJfKj44XMLHonC8wsVywyyCSooeLNBWnqAKkSgkwgWcBjJxDo61b",
  "key20": "3asqSSLqMzohedxebCxBcaH5EzPbrB1QY8rRhCt51rx59t7ELnbFcKLsqumQo7pLtq1zHGQBjiQNDprQVesFzDex",
  "key21": "4sDCmnKkyCNS3HRN26DbrLG4zq768qAsF2n6HDh4KkqDjDzwGHe6Cv93CEbaHBbwcfvNJUMjyU2tMdPUWfeCqjZT",
  "key22": "2mtLUJUj6cGz7F4zbYEFRxPs3MRi4TyARCs61JbRY5ASedgF9FMiLQu8md9Eye8w8ggeTW5aW5BGstYAAWtL1pie",
  "key23": "4k5Pq9PAH6tizqN8VDDtKaiwbfFf6VnNvAAMRZyqouQFRNG6sSjq3vwk9AyjNCg28KLVq2mhjjzfM7Sehyj6CGzD",
  "key24": "UG6MRapMfaFdbD3NCF62aCidHPqrqHwdXPLVbPpFeNdKGgTNzrRD45Azg8vqEJsdRqrD5FkHUbTPc11i4ZHxRSP",
  "key25": "cN1MG6RWcWc1E3ntMt437uWjiGGednQSWTYjt4WbMT6JavZtd2N2rVKnTf6cMz4mx1paAec7bHZ1av8DzijiXfR",
  "key26": "5nH8aXifUc8NJ7o72RBYhnoDxxc79QQ4p2JAbNTmYwTaa2bjm54a6aCxoPo3qzaGc3xCi1dCng6bjidzuaJCg1PJ",
  "key27": "43xuEoUQCXcEEKuogdxdXqUpU2YLgv24AMBLCoq5D4Xa6WkYwqJEEVF4NcpUo5HdCY1zEMznmrag6uuVWPZTTCAG",
  "key28": "2tHnNeZQP1YeWUvMANdwf1APo9Eyoppr3hySbMLH8vcCAixvhv9EqvEZpKZEMjJ8B1Tf8o3bqUL6eohgqcQ33shs",
  "key29": "64Kvs8oK6bWmSuByo5XpPTudZWsWnXU1pi1emhazXFfhn9ZbwtDVWeNhfqCGVviEKMN7NWNrNiqLvsuKFaEpFW8S"
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
