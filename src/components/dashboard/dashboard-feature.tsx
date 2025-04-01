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
    "2Q1dnEQiCu2uHrNiEP82fVH3DoUZ6QKcdSfMUj77WdDre9JMBDx3rjLQKXXoRzYYykJmAwbwLGkfwvjmmFVy4aor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hy8i7jh14r3gVduxVy8dJ6WURHzpNmbJKvPRRcNsnq2TbtewjcWqFw8BXE7Z6ERxumNsK2LUMeRwJnSB53xmbHK",
  "key1": "6JQcAuBgpB3Ms9XAnu1xTTSQnGwT7D5LTGcpDvGHQvd28mLdReT2LotPb3pJkU8dpHhwT7JHLsfurhbid2KTnf7",
  "key2": "5tR2jnhzSS5NF9iASWoEEU1ECw62WakMXp5BkMwzUd5MqjdVQtwoDMGLMck9H1AMkYXEYhXqPBzY8qF4V9YEx8nb",
  "key3": "5SRnACgi1jGZVrZ49miw3MTk2rbij8P7tyACLmRVpSo4i2gUWoCTQsYMRpMRXxG8cbjesE7uu8K5ktoxbryk77fP",
  "key4": "41UXfjtpGqaLc8MACwwpCiWMAciswDDmnrkUGxUVdRisGiTo7hPYWpX7f6C9j8FsRUaaZnba7EBBgunybmhgFt94",
  "key5": "4vwkY7vDXFzkdv781QgVVqfVw8bQHGSi8nZJpGnkyRRjGzurbJ5gv44y4ee4Hon5eXqkX9KWPYp1c5hQa3PMTX9B",
  "key6": "4HAhtuHxsaoxhBhr34vQLaBbtKh429SbN4T6NBzTqiajikJ5Y1wd7ioN2v2vFiehjQDF2wfW1e29yFKMozVt1qnZ",
  "key7": "4ai6Q4fvzknNg6Wwn8W2BkQp7toimm3Yjmp4KQrJgLLqLc3fWR2xPWgeDKVcmms88iRWvXimW1UAFUXhNhZWzbKD",
  "key8": "zsMDH4G3G1Jh5Ai6TBc38gTiVHpCyRGmXDJ11uDTHv6Jde2YKCTJUeY3UGB1chRLs8n8zWmYkFVYaNgKrePtTV8",
  "key9": "3hsrdko79xLRtsD1P96skx7o8b9MRS9Giar5CDanAbzDqcwHy4VSsMna3CZtTkGhkVM7gSUw6kARLcPtWeLo8Wp9",
  "key10": "3rHK2JqAZhnH2AjiyVoogtS2u932gnyH8DP2yVgC6ya3Dzm1zf1wgJRkT1ukNi4w3cvpnL6n24gvbCNmehaNMgrn",
  "key11": "3SJL4vkQfDoJVvkE7yYDSEjNaEr1Jtryu36fupZugUeca2Jmq3RmzLhHzEKo2JaxLhWNJbzArkoNc7rNQuwJAMha",
  "key12": "3rRjo7sKrPPoBfUfZf8tDoU6nNvegvtewMiNWdsE9DcmZT1MBFuN4H5Db4GwRvHjtv5f4zZYosGz8445AwhVvsMB",
  "key13": "5r7WY4CYKBHuQA2VivAqWCFF9U6wgVFXbfsQahrhRKJzBuigLJyXgt7qdSrUkXPuxcNNhpZRWxcHb5uKY8T5vMeA",
  "key14": "5BTwtBS5syTutdyLziNqDjfYokUitnZSRwLNKzjBXnYjLBMWFqLVBxr7kNTsipxoAevtaqrrBefoZqP1tkW7WRiy",
  "key15": "5spQgvUXRuTRZeGYcpjz6wER73CGqsmBKcXcwHTyLoXLQGKf8PDLXt66Z6USWX8c9pAckSHgrRmPGAjWKLnySH7u",
  "key16": "129dSEEJQbdQurY4uPN2YQZYuykgCNnuZaUVmPLXYZtv15zeNuGdzSz1NRsRbeEVMt73bRh3GFM9dwZMXgu4wDXR",
  "key17": "37UHX343b5sSttF9nyoP8RQWZQqxBaSs5nvSPnfZmBenw4fvMna2xvoxJXWoDctQErmKvV8ZC9J4qn6KExVXq19c",
  "key18": "51zHJnFW3viDvHkAnSdu5FJjEHfozrVHXeitvJucmiQ8eCFfcscYUZp3M14fKUafeA8s64wTZdiezy8Jmtida5PE",
  "key19": "2V2k2Nq37ULLTKVBeCvRseBt9MNLpThuXLYWE4c7CvrSn9c18fdR8gHMUXuswoHuu3Z1kxVUTGQcKC3mM4tQumEC",
  "key20": "pDZaoM2Fskm5RiKYRK2ZNo7A26GzMkLahjLx3zv7a25wGUQVcg1SMmtcW2sRsMpLT39RLVYtbDBCjN7r9wonKDN",
  "key21": "5f3Ud2q2AYwfeDMd9d6Ba2BgTgeHaFZyg8CPkD4BR4JZ3rw3cLjr5TGS3eitc2tZyS5HV7BQQ276Hk2yrkUWuyEw",
  "key22": "3H6M4dcxLSFoCb7A3Yn9T363Cg73mBgVas2f4hbMh2zvxukJe3iPu67yWdqHMqGnLnq5r11asGeaoBQWZfKergmj",
  "key23": "2i9RvYa9KamMVc71sKSTzrUE26n7R65va1aBny2tEcBJ8UacQQDkBEkxE4XGc2jqw2un6GxopsVHVaxqr4FkjZ7w",
  "key24": "UszrdDGszUZBagzKY5rD1oxVhqL9PRJFRzgDmj6RD6ehSxLo2vDMFcExkmXysUDGYnTDsuaDnEdcsRBYvCn8cAs",
  "key25": "97ktE2dE4BmDjs1qPYu76UUKN9UEGRALDVudMEno6kY9fS5an5QNj9za5sRKQSxpHmURjGUEKMZRMHgbVEoGuSE"
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
