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
    "DcgirtG8ZdMJZ5GqTqees2tJNoKQTgeeotw4FW6GqtRNhuoWCrFQ6nKfKseTa2YsuSrL75RZiHN1UStQ1KZsRXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gzQMwAaAsX85NZKeYtUWSiNYRjcAFVHetv4YhtxcyUxPWbUvAUnxUW9SxCJVJhbn3JeoDqFQvbUF3Bx4cjpdwB",
  "key1": "5C6Lg8NHHxwJV1JszTsavFEq2SSzcoqVZ8TQujVhEEptiZoCUTRbBGSi3PePu4pJ2GN3NMqhVLhmBAEzYhZou2rz",
  "key2": "5uPucjdMyrnXDSLyzMxW3H8LEwYbkC1ZhxGzYyXXwqQLDh3uKQaXcmzrjWE2TRDKvi5XH354uF2aLWtoNzMUpzTR",
  "key3": "62a7K1hHAhLCm7E3M8EYBV9apk69x9RA8yuh5EXWMKbz589DZRpQcJRVyHy13Pw4gibrXMyJBpUFhT3CbFxypZnJ",
  "key4": "4qDunjiasERw9XiuyKuoiFiPFW9V4CKBxMG7U8kTDQLkYbguKXaaVmUnBrga2pdz4oTNHy8yiJDdJWVqdJufBPrf",
  "key5": "5mYHgFqBh7rnc7mACxPmFm1ANEpsYYvRZDh8oZbr3gYAffep4DfhEGSszjF59W61uwQhBKyfwBzE8fg9DoA932a1",
  "key6": "5GDeUD5VRV4MFNmwXUc14rEB4J1riykieoX9CTmtBUtPHtk1WFK2Hjr2Td4qN2Ndbfu525gpPz1iVrZTZ78d1Rkd",
  "key7": "54cW6njCBNA3nKwezQubkvECzDm785Xgd198bWLazzPZb92WWfR14rnG7MPgHgctHBUpKhZSCpKpM9SXLsjkfpwF",
  "key8": "3tR3VpWEJvkd15MkbCrTL9Vye5eYX8ZUT7jsDKEwdZZR7JfU1iaUsfeqbZFabYxioWKhqKG5nXjpr1fnJV75wSBX",
  "key9": "4mXCR9pZMjijpjjYmT6iM1cpgr2iuoAffhvnAdDbeAjaKyzkcnXptJPhuzT5f5SfVkW4LiaJvRsyVk1dspppC5Wi",
  "key10": "46NcGfST4xFWgHiUvQh7pdy8rpdvEEYiDSrPCj1EFvsu2UyisuJD6dsdGQFZRKe1EgQ42Q7q8SKeAZvnPcQxdMoN",
  "key11": "4DqqrdhAaGQjmKBnmK2uHutTvMcWWMXXt1xPwxEDDjMi6H4fxNBbPzfUxadnLWMPgTe7y7bXWkAFRrdLrmZi6TNK",
  "key12": "2rhJ5aivhKaRpPHe7t5g6482gTNuCUzzWDwtdr3E72MGAFbiGS317aUj2ZtPB5rNTjTHAno8FQyYcJCB6NUuUfao",
  "key13": "EbBKBBP5T4uBkhPXHaEHRKm9Axwf7QNZzD6MBrfR9Cv6uAuFB5UX89Vim5MBnf1NT7F1G4TyryRwheGK9mVjsgM",
  "key14": "KHaggquJ1eBqGz3yFogdxiFtL5qiWTFLDWbm5GmJiiviaT69e1vTCojTc1ew9jVWx2b3S8918rAHfBn2xUsLHy7",
  "key15": "2qFSKgzB3fWnzQbFkyfKCqF5rWZBZEwi63q7CZLoxDZWKZMw5U9ojv46meQbr6mEbb87YDRKnXS4vStgEsafEZtz",
  "key16": "Cugi6SqxKD9DRT3WUvQrM9u2WSvfyqef1kNciw6hC1rbU6qVMwDEYJB7nmSCc61pM6E13aG5xhQRtpJ8mSfNVDb",
  "key17": "MV43T6phay51qLZ5Yh1xD1wzPpk8JBjB89wqhLKB588nQPpUVLLCSng3vsMCp6qH5CbDwEbc6YdLxepK4suuaXC",
  "key18": "2at3b7j28dPdHA3m1cYyrLUsf4eGrUMSdETEEdmo4u3PzjSywRjKhfiTCx5tKnBTSxrbiMqnEMwthNdsYejedqZ1",
  "key19": "4Ec5YG3xzyR97uVjkCr1JYVuqaVcwMNcsZC7v3gzJoJTvTF675Qfua24JkZ8z1iuPEbCtgBcqPUGverGoi2iNU1G",
  "key20": "2Pf3tdigfGoJp5ZTf56X1czMZxKDccq8yFAL5ErwMyDcxfci6TNo5TwLxx8LdH2vizVhvNboBpmunfxU1RRAxrNw",
  "key21": "4T1aNYG7cMy6dViphrhyAahhZKuPBALAMCyvfhAd3yDHTYwTSWMc1jTdMrPnvpcZVCsi6MSC4fwEm2BHkm68XveE",
  "key22": "22JkJsNkY8qm8BA8auNQxPj1nox9wfKr5wuS3mkYCQfpADfqfLJ8i2JbiDn16ahkHc7W94RMx2b2GwARhj79jY5S",
  "key23": "4nBEWMAaauyVcjAyJJxNsPPpRSiZ5a8VnbnvYUxbv3bSp79XNvCtqiYZrycrRUsvtNFZW9wEpoMabRUSrT7AgKKN",
  "key24": "31Wu6FADts2wbdhSCVwf3tpkLZmhzRTshtTfViah4WtYkwGLZQAFg89wXw4EacfEWuhh9m2Wufd43ysBoSQBhqhB",
  "key25": "4Jkschi7s4u3pDYWE6e2H1m7iR3pUpYQbaDKiupurjTjm1bhZymyci6CrhXmSQBqc9TwMv723Z1nPTvxzsNx2JMv",
  "key26": "5ThHbxhVN1Ur13q25gNbB9u2nFHGtDmSurC9cCQFjnUWyNs1QQ6NkWsq5ut6xr34fyV7cG83ycFfpR7N6iS9fxYJ",
  "key27": "FUhGQcwisst4d7MQ6bMKRDWX6X7cagjk7UV5xAGFvNUYNszoSfREu7PsHnBwA6NGs1gHbugjhwJiZM38FDZ4SFj",
  "key28": "5A92HwUKcVkYvficgDbkZJUc7Xwt31HRDFvyoXVF8NYeRS7jJrwixVPhN3dJYi6JhqRoU9aNNDWosTUhUykYt5h6",
  "key29": "3guHVa1RvYXAptrv6TFXKfVkQXSe6459hJokwMi93YVKeRrUNWqABvXxURPK6p6BkLjdJdUGbioqN5F4LGR3gCRp",
  "key30": "2QDALX2RTemzahistpiwLifsNRSS5jX2MoSo3s7rcYBkKGe3pptoYSgnudQSZGGQMuU3edd2t8ynqq1CPQc6uWKo",
  "key31": "65T52jbDM5KDtz89oV2R8UbvNWbuSGrCoiU8edbP5GHDeQgyWN29KGMFFr5JHS84ydxhJNA4yVQqT8hjDNSCp1fv"
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
