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
    "36CRCb4bdW9SLUQrQc43QCFkN59q5MgpLhhsa1CHygBFnkpAboSoK9jMAM3r9hytdawfF6MjcQFFCCj9Tv7rBvRs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CsvSQDLsahXJWbnSBqcT3nB5Czji7abt2XWXRF1fAL6EER917xwcnXjUHERSas8LhtspRhKRzpnKNBb1HLhq1Qs",
  "key1": "59a7YbCXbkKKL7zH8YY8Yp8K1swSvSfN7syAngf5VsyrEP1EiW17gst4XXAbGwVJuNPpgtNYAvP7J8BEyX2Rd1Fu",
  "key2": "4kANyECLRz2KgCwYPpe5Lqvupg2iMJosyhGWUmozv9NLHySGKu8vj61oZwcZDyiitESAMAtNJxXfM67PUGDkTCaq",
  "key3": "3qR5w8xAtTGphzJPAX2fgWj8RGvgdSu1PQd6Yn3kM6xzGN4i8ohTpA2SooaeZWZmAqUB6bzDAjBB6ueT3k5TU3Qh",
  "key4": "4AfbpX1si39PwvucmbmXuFq2DWsqDBZtKJn6yDA1Y6NSfCqt4Ewxt4JdKqZ6ovRtRCgXqo9U5u562oQHHLDsvxdr",
  "key5": "4FPZ8TX7mPYyzhLPwhXroL3CxQAz2BPGQRb6rHgfhY8kBfhpNUau3ioHEGCWxVfkDomPjZbwsBLDNj2b6JSYrVDH",
  "key6": "ihkBSk7HfyjRo25u7JTgqxY4YhUSX3ikKRGUXkZWysX8QoFo1nhbiMn49LpvrmZi7JUbRJHMyGe5989cYBD1e7S",
  "key7": "3noyv7faizBvHiUHHXER5JGG1DnTjUmtTXTbShXTjpYdF7PbmsonH6cz2dPD8FKaGYA94BAfFAiAMKL4J59sqvFD",
  "key8": "5t6urc1VpoziWSACQHA6fZHghuCrEk7uCRFAHeCPaaYPEkvBGerWNtLkgMDmbAo8gW8zAMga6ncx7wASDzcR2ZRL",
  "key9": "28UevWWhNChqgPDF3J64k4hEKgrgbTmRFKZHnWYcp8yCWGFk7LphjvVqQjJ6Cr4aEZkKpENS8k5dS8vkMHH1zz2h",
  "key10": "2jV4nGYt5NygecYZE7YHuJyggY1RT4Zj1aqwuosu4NebqYisV17PVWUe2GByjHUuRfJvAXU9CpbKv2pRkWD8Mr42",
  "key11": "5Q7RzHYFcitye1a18nU5pCQYE8ybyCwqLb68h9MMj4MpAk9GHtVQA8PRygBSxEDR24UtSQU8QQfJt2tVxid7FDS2",
  "key12": "5BP9S7EwcNUotXiQUPugB2u3fTWCX1ygFntxUo2Pg9D6CaUmyM6cJYgZ4fQCmtkagujym9UhTWPgLojAGscdeyQe",
  "key13": "2dQPpEvFfgAVyYrMfzBefNQWQH5khQWErSctqaJd9Cvxkf8NDxezfnguYxwH68jpSW7eWRNEKX9TupPJxe74kZsp",
  "key14": "51iScoF8qL1GjDZAQjvGMqAhiJgFVdany8soqaTpg3xzgWKXjXpQdmAFhj6EyKkgQyy1o9FQN7LDgTQSMjimUzkk",
  "key15": "48fcry2EsJjZEdFvEcSAQx7xcWYgGDgHF3ohzutbuVvZzdzfiQDVLkRCYsjmt7QvRdKPkGvopcx8wcMWdr5vE2cV",
  "key16": "3fZVSrhok4bs8EoCeaotfG9dHAxUt75MoCMGRJiYTMJ2217Nq6Sb824VAofjJoy5wC1k6gsh4t7GTtEP9D7UFj6S",
  "key17": "4Ee3FAgqffiMKAsqcA2DNuHhS2TC1SqP1YvfFyhrqQD31oVvRxvpDiZPs9UAtts6DCgYXGS4k9Xdma5aLh3aCE3N",
  "key18": "2LyzCptdKUXETRTjTU7G2QpkGqQGpgsmkAYS4cT3oZbKrnqgWjjXe3nWFjLse2MSGYL6GAkquaSnCwu9dxTGTyF7",
  "key19": "5DuVhKQGqNdnDYq32TUQxFrgy5SwDHYUfxWkoUJUco9DyxtexMErkBWtNRvYM5DDcvFvE5X21M6oFwdM64PgsWeX",
  "key20": "n7cqNViLtHGMbUKzoecwsxegdwGSoretthjCwHca7A2mBMkXuuYgFBkZcmQz5VYXWPb1BKs6ouVNMJoxfACUbJG",
  "key21": "3Fi5Qi4QCJxxbwHJUSrF72nCb7bUDrU7Y7xmMAP9twVrBPW2GckCJaL92yiZEErsDAthC7dZLRfQ6vJQ7hsyUsuy",
  "key22": "S4prT3HgkXWR6SUVVEZvpWu8XFcmRhxSiLhieqMk8vKjSitDcBAjz1UriR5A2ZJPjTJVfcd5nQDhsgWx8vZD29w",
  "key23": "43p37PPtNQbzmUKCLgUiniEPw7eoWxFEsBEySHVgTL7Qeao7rfWe2HwBLfUKDhVbfNeHkzfYEpS1Y9X6BZwbqLpJ",
  "key24": "5wD4DgA1aFRrUXj61zHvEXhRAtYnnvSvvjcRNGaN48bcC8VY9qiJiR7BkpDdhoRRXq79a9wXHFyWALqYMyVmpX9j"
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
