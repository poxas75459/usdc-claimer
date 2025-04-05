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
    "4NL7GZBjTMZjarfb5GHQhVwxrFS8Xa3A3QE7XwTyRnoQY9c3a1v5i62afk7VqgtLS5PhN4UA6MCy6oQ1YzRuGHje"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vREeWMvfhxEaWMkeKdUU86BK9RRm6AWzWwipm4ucCGYpbVz99EW4F66CpWxsWaZDFfYEGFMhbxNTggiridTeKCu",
  "key1": "2Q2i7abJ1Fm7Ygm6axU4s3ht9bNVKkhHoDbp3AJy6JELW7MJPq6P38G9JeKFwbmAXTqCJVu5ws6wvAEAkE6KTJ8Y",
  "key2": "4MpdSXee5vDNFdxdq3sRdWpED9bUGNWdoozqq1gE61hE2PTxrQpC9waDmqewja8jEVUdGDWzJoPyd8R8qwF6WYvo",
  "key3": "5bwd6J8f8eGWyx5tq5SeYR42hj7rsHxVHH2VkS7zsQNzpHC7Vuu5zMgoRqgqQ32ZyKQmzrGAtzKREuXiavqSWLXs",
  "key4": "4cSNHFTGWWAWZyc5zx6GQzHVwZwL9EKNgFwYHMFWxssXdGnKvcAL11mAwdfn7k7KDfFA9txkmGWYz5uqhjLkS3Kz",
  "key5": "2w4X5oXFUt5oFY25UPPoqUAmQA971Fb6T9n8g4DXcCVaLV7gwzRi12nzftuxNgsidPaRbpVd932UyY1iBBrHyVre",
  "key6": "3aVrWpuSu1dnx9YR2EM5PjdvYPAgLTdeoPZi5AbYy1sHVfbkh2yawDkNSq5cFV7SKDupqvdPB2Kqp8ADKtgbew9P",
  "key7": "3dMxvDMsJK4gMxTQBCKLfxLqru3kVyZXyEJzjCymXi69h9rCuEFE5ri1v1nG9fZSvYyPTSaHnn1Fcw1fkQN1JiHX",
  "key8": "5UXibKkSVfeScMTZpVwQXuxH9zT5HiiDCt1rWMQEojeNvBcy6WewWJhcGY3pnSH5f9W7PhEVrPepp7tUfncjTdzi",
  "key9": "445NryMMwWXnZV1AxJZEmgFtBpq7ngnLb7RPJCZdX5oy2XDdiGXnW6e4yWafBc8EPuXNAzWX3aznymRSi2yG67F8",
  "key10": "2HaReeWTeVvYeFERJ6PKhTtHuf6AwKtjER4As4U16tVqNFn3z3yQ5aZYymFCxAZ5L7GtusaYoFMSEqKKUYLTuzXK",
  "key11": "3AWzK4v7MqwnVB6KYH5QY6gErSfeqwy4hUmR3m13q2Pqjyzhk54hyV5hQFJD1VKBHnF3mFKXzBjoQqx1bSe2Hfdx",
  "key12": "2jRtB55o7gxWH1vbKwPy6JZXUyEUSxFpZbgkpT5gtZ9jFoji2nn24P4afShqjRRhPVYt978Ho9UKiHKKoY2qqhpi",
  "key13": "3QDXyBQt2Ap5tc9sW6JKLwaQK3HFBbDJqgpUJkqxqnpurZn8pEpiHrWoPnM5VcM5qjtmGSnCLyqDAMaBj43pD96P",
  "key14": "3tpSwQrZUzVuNHSx4AL9xBQ83A7xRjHs4fCky2kKZmKjynbvBht3UBSqspdJ3MR7dg4JY6tyKjannwtgq8yn7XEK",
  "key15": "62jDMah2TQHoAjGxVF5WCXXEHrVMswtNWpjUjXmTg5ztQWTt4kYXtZNpG4wsUNCYEb3vHGjhwTzZNuj7GQcNhRRi",
  "key16": "3CZdTmH2BcJh4sFUnVK2kdJMR4D8eZs4EZVNqyTCGMvsXh6S2TYhk4Ygsv6iZ1SSfhdGjbE9WDBFSwtCQviiG6hB",
  "key17": "2haZ9ABxmtyBZQApfqd5rujrbv8YWf8GB1fZstkgU59se1NmQTxurGePW9eiQsmmfkuCqAtbso4SuNBK9aG86AnJ",
  "key18": "2fiAPp1t5Jm6jowieN1UAyBSE6tBPv5DjrnxNkduDom76JLTzoAbiEPr2mY5by6cd1MvdPKmMavxLtoe94NUFKyu",
  "key19": "25CxNLtMEg7ojtA7Ses29LmU42tfiamsFQvwA1Q3r7B5gVNvd67fuJDTbWeoMZwSrLhJQnTB6Epy5jMQHxBWPZQN",
  "key20": "5pkp2edSyTHmJAad6fjobw7SLc5UczJCMSU4mi8sC65dpAW7tLWqZkUVa2updAYgTNjEVFFhQg6YQ1HZaaRWG6JS",
  "key21": "2HuAeXPN8qTdmZaF1CkpTz6QDvZLncr5pgt5ZyYhv77CRMLThYwgmxkN9aUP6wcRrMuMUcnmpqXLgwFnHLUrgdjB",
  "key22": "2VJsJut2MiQ5DTdGnoZWPUQSK7WMAoBKCPQhUykmx1FjLdRNZdfTRkX8TRynd1TJEv9Qe8mMkn54sMxijXcgT3Ua",
  "key23": "2MNbAFkbZRpamxXADL2QEYXhkMdBL2HDUuE84waGZwwU18USK4xpkVjLPtgwGRgA3S8QMYHxENRF444VDfwUEEQL",
  "key24": "2yPGwRFSguA3Z6hzg4aWv3pVpKcTCN1Ec6AtKTQTTXmsWgyXFwpVVq7ksmDSxw6QnUHLuDd7yvrdhgVqjdNxSVSo",
  "key25": "34xgFBYKSooDwvPzY94wBs5F15ydzbEKb77bpZ7pSpaf2j8jrQBaHsrYsNmKHCHvjhzH9NijGyMqgqSRMU4RmLg3",
  "key26": "jFFLZ4xPFwgsb3dMr3jG5vejxdVFwQv3YEf5iw644hKq4nJbbxGmKMv6BpW9ZXBqM2qKiTjSuZhZj62Pysp2ozd",
  "key27": "61MLwU1sGrjTFkwY26CB2BL9jcUXLqkr38cetCHtYKU24GBGu177T42fkuDxRtkzkeH54sVAmYCFBMGwTcDJcAwT",
  "key28": "5frczF2wM2s31Xwg3voRBJUHxC3g5V3EweBm9U39Q7s9mmWbtfMCyY7edQREZcDqcrTDtAtky1TkCeYifEqYCuV4",
  "key29": "2C9zqevasb5JL46E9hfR5jLj9sgCofqSJcnt76dtwnzVbCaDx9om2kLgpp6jkqZL9NH6dBSem665Fk2hYf8u683G",
  "key30": "4Lo1rW4PGYxXz7udUyXj1ReNmjbM7k6LWCDuusVPEggBZpNQKoetbpunNty9vg2jTy7GGULb11ouR5wAHh8Goe6v",
  "key31": "5CTmFwsmbtHHd5tJDoQZAF2YZc2K1ccrLrfhtx7rfnAXD9x78aLJsezAw13B7h2dcVEhmzahc8ajMTybQ7q6Nya9"
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
