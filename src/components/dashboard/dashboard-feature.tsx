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
    "5JBbmKpvTGccSJcQWcbEZieWuJr3M21nLtN9mCT3gKyQ2SJrFSPE9BBXP4hbXZcwjq4MPkzH4STBvi2VvK6SsWzp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64cnaMHm3evzJgt6fjYsAbQcvp5R9Z4KatioZ3af4RJwPMYXka7igQT1kVHGavDzYdvkPNTezhEzUBWHkyPHr8a9",
  "key1": "2mnguGD4GK8SKnsCnRWzNG7ZXfx7zv5rhVxU4zrJwZfH4AmBJQ9paa5adPEnqKk32V1KiqRUmSWEBh1t8R1TbUFE",
  "key2": "3EcnVAWyJqQMqq97i7WMg7kzZ9R12YRQsiCM8R4ydFDJx8ZRMkk8dL7HqdG3ewFkTSuovMr4iHc8XE5CAE811rP2",
  "key3": "5aPJ5BZvFsgQje43UZ5Ksajt3DDNGiapZNbJPdMH2pUqwKnZk13P8ddwua9xxQdFL1Ts42CcB1qiJ3sgi8Fak3DF",
  "key4": "hiT5UnV2AyTGZhsqmso5RFt4MebwRJowkMmjEod5E53dzz3dR8c9u66qXkQacShnR7kMjWDRz8pALzmzTscVLtV",
  "key5": "JpGrSSWfApZEvo3JPGAvNZZ8V6YfK3L6mCaAYfavwL3cVdLiLdxRHcbe71VkvQ8q8QXKBpM7L2UTiMvsnXHkNxi",
  "key6": "kAShqdJkMy5hTqGEhpP3YjF5jXN2kw9ViXo3patmTzDpuQUu4VEJzTrWrvBovn2pn3irUMhgYDUhCvnKNNTeMxy",
  "key7": "5qTko5vqQo464iiLNbzW84sLvrXWbQhoPNttmLwksSZxbF4UJ9VQd3Cuc7AD5WXDANKARPsEbNNXZwjqroqLSkAn",
  "key8": "2tqBovnqDgAxgxyJ3UA2AEWkxRztDq4y3wuh6yNj48dhkYgN9ZZq834SxCxUpwjU4QTpUCk9sLU8w8FDUKGbEYHn",
  "key9": "E2gQvY8Pd7uTyh5MRM6GDuHguCucjMRYftmZCYugvf95ESGCBV89NBWLNCwnX34c8YXDXsSLW5Lu89mGD9dCMmg",
  "key10": "4Z3dwEMSxAuKxyHSKsaZD1wzaib51qqnvUvXSFu4gtidgxZyZsDtQiwprmpQY99wpcg5iJtKbaTzp7q5nHW64hDo",
  "key11": "34Qet7jLzTYEQF1gTtbVh3Y4gGY3SfWZ4h3LaDEhUmbjindgyotc5vA1evZjXyVJW8jEojFZwRkm3PGGnK6hKCTZ",
  "key12": "43Fa24LC5j84RfrB9cdCjb2GbHZFiqFvCm5FLinRkXZHU3asEg3Dm77LQnN7YeTsV1cRRWZVdWqwehywak6HEJgM",
  "key13": "5B6LtiCoYpHxfjYmmib4y6omJQE7JFFeTsMFuyXkzJmTu6gkHL64cUCmDjj8T2ch8Yn8quMRSDR8xd5CYqJvB1fT",
  "key14": "38CyCYLkAEDwGbgpk4SEZFXyK3dY2jNiDvySvhvAtdsLNLGLwywvzQ4TMFqP9oxdopUZHbwwqtAwP39D2TTkdiKS",
  "key15": "2JNRhFeE2H612gxdf1W31PRJVgvKwFE9EeTVC22dcp2jVzAmQ3A4peH9x44rkpHQ61DopSWyDMqPvemW2C8eojDW",
  "key16": "3PbEcetz2vSPz8XYrKBCDUxjAUBkjD6mLwGQrwVEjRingRLk4cZqru8fphupEwMZPkbARVJchjNS9QP2YSApYbRT",
  "key17": "7pE8HVnweHw61f9ouxDhGvP345qkkXbUCWSg52noUTA9kSziGsy3oZ5gB2tKKmYVoCneTaHNALcmHvY1avprksg",
  "key18": "2A4FDd61T5xSjaf2LD12S6uG66uTtas3GWL9bziJ8Ug23MRTxBCUJPqK2zMjoJY64syAownJXUB6LW6XPaTDVTUm",
  "key19": "SQHVGogZcLH69Hz4hVuTQ3s4oGy5V7Z1zudXUCG8K49FiDXFVpvWz1HRLG9h2CfwhQbSfryVBkezoVV5f8DBqBq",
  "key20": "4iHpd6LJttVv7oUGuE6UpMPRgnZKSaz7hfpL1yeNWFWh3jd7Mhw3yD5ZRjX2xsKjZaHG795QSS7S7m5DBv7tsY1o",
  "key21": "3qGKZaidzZFbX2MBSSgwdXRZkiZaLRdNMhRPxXABWt8n7smyVVAoZZp66pcZsihdAYu32r5a87qy5LfzfDCZNibF",
  "key22": "BELQy3TtyddKAKejMgVaLbU1cUtkAKXsKQMAKJUQneT5WagvfrbSqiftkiEcx9kLcJjqUKzHGfcjULj6wyaEUvm",
  "key23": "28dUZkBe73Ph9FriZ2ceoWyxGNEF1xroooLx2vHF6A7cxtD3da9kCqgPtrKep7PATtRwa26tUKNpNN7yMmHxK84g",
  "key24": "5vX7UbUw8ugTsLQCtcdGZbCFT2qFg1Ns2C6okDWXq8u8kmKJ2HKnPsbzKBzVF7aEfCraicivxTT9X275wG1D6mGx",
  "key25": "WHdEPyRcNuWQFHEqtCQKkwU15fkSSHkQHdrsLwPsMj29zksyXVTAC5ksQTqLEB77MgT5uqrgkabnLqVgvAoaPx3",
  "key26": "2Z8sPMkb6rws7WRJhxN1KmTqDYPfhHCEpsVXEv7cSNdGgAdsbsWTEw5PE3qiANH9NCU5GcexXQDDDjudX2Ka89zc",
  "key27": "m5zaUvqKoDr7YKz2MPAf3arKzPUhoQDs2ug6qydiu4KgQjU4WNMatKdtqGNcZLtJ8qXSP8UiMAwHjzok1kHZwZm",
  "key28": "289CEVWNvbUMD9KFnGwUtzrZ2LRD1JbY3fe9aVWb8uJzjXpA1rPfErMExzahW6swJYavAAmB3x5ecdLz1iVWRDiM",
  "key29": "2pQvPxipSexsJHYHgNX2e87FJhd7obGSkoPxEEsCiLPHphxiw4aBg7HEmq3rq71CCe1zRPyWTu5t7azKSeaxacSa"
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
