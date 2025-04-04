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
    "4mtA6RfhQKD7FnV3Ts6wNNig3jPxiNxs1UccuUfdi4oirMN7rbhFGghUyf13zVGqXjFappy1R5wjy6RqUqij1Rm5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w2LHDuNvxYBwe9E2hbSSYqd1p5jsCTatDBGbA4n5jHoVasFtxKgqTs8zQv3W8mfgweCepftsjLSJGXuukJTh9jv",
  "key1": "LhUoJrMqdtm52PFYK2cY3yt6Zyz5cZ4kaFNYypdHr5pKN3FSWXNRioQi1dSAifSUEGBzi5X62D2sooL227hHHLY",
  "key2": "5npn9SF6BmWtFWt991EYRSZ22Vy2rvdYYj2HxKry3mHAFqEGazLeR8m7B2J262RBNdcnBy2fzEMVdZrYPMB7VFEy",
  "key3": "5NEEg7QnA6Ret35hYKj54oPxz4KopvaR9sJJupY3KSMDPiARudqjoZgSv1f6dQuBYVnvTqUmuDuXEfLKAMhBkzVj",
  "key4": "5s4bhnZnyjNY2bjmzgavZbfZFidxyjW7D1YFKMQGYCMhiKECRKhhdrJXE7VY3n9mb9pcPjGX7eUwXmu3m5tk25cV",
  "key5": "2J9FE9DoU46a3G56TYX75QuyMz9CdKVbJWAfdsh5m5K6BEQxQNtxZxB8WeJWCw7BEoQN9jpbivPefyzxnVWPkR8",
  "key6": "5Fp8hx8jxnc62RMC1oPhfcW3zSKLsLzADkPE8dmME6nMEAbcAACnG7brpyBBv8j6yB5q1ePCQdFi6q1ffoRbDjkB",
  "key7": "62avCiUDgU1WZCWk53spwYsi3Y54UmSiDaGi4gUGBe5zEHGypHW15v6Fs9W2zVJepuRHqvbjGNBhrMSWzqa3RQPT",
  "key8": "5ecHtR6oC7p6KWjQQ9mFfq3gXLvZpxYNHLZMjHzAFjoLrLjZEK6uB1akjNhAArBSHy25wZfUFFmtrJwu7VBDRB3z",
  "key9": "2R1PDdyFcJiszceeCx5q7PY4te8yywdh8thcMLTbqNxpeXqrYRN5EGJXyG6gVnQXUGHrAE6rVwHdWnRhd2vhXMEM",
  "key10": "4mHrQqeh4A6UWmFWbk2uAeftVUL76sg8RF2ojurcGDbggtWAWBhzf1UJcqN6HJomo2qcbBW1dNYhEeG7eUqjuPVw",
  "key11": "66P6VifP2QARFkevdNr9gyCKUxF4LQCfp34uADChv6WJ653fxswH8AjMcSpB9udSdgNVKhL7eeEtF8TLhfxUJK5X",
  "key12": "3V3rT9GCjRHKZnY79eyof7GQRbBeYCd31fh42s8YYRtyytkMBTwpRuY6eNk3PJd45SJjwoCrSAH5diAWwSQAxf1c",
  "key13": "645is4XEmSQYUkhBKjfmML2qUXsetMxQyeS5hexbu5fmri2X57XRZoorNcf4URCmuwJcrQzVMjWWGL6uhaYAzd8c",
  "key14": "5RPKPhemf5PDozg3oKhgtZQKaS8LEM3mT3ycYoDNLJow6pT8qdsP3BxUFj2Wv5nRTqPZtmt4FJsgN7Em81JHhmsL",
  "key15": "2HipdVMq2mndNgNRyvZfUh1RHigj9f55eHSB1yD7aipDwTbFtQxHP9tRcVk2J5NSvzQiCnyDsJQTiAoJq4aHj5hg",
  "key16": "3bqSSGkJbZqzJJvhmNHafH7SYsdjEJkyrGQ5eEa4YigwcFTpxu7eGfMTp8yYt4tdCYVbMVCnzkS9FFYDyw3ypg29",
  "key17": "5rXFB7mD9kLChgyBJkZmN7aRvzKFYmZHrDqkg2EyRYp1WH8GRqE95zTsAZi6UREykzDSvccEBJ2GVaqSt1vTWzZw",
  "key18": "4i78WxtiKL1XLUceGCuDQrmXJ6GCrH4DnXxvhthPa4Uj3x3duq6auYFkDE8Nzzzwudi6cbb6brPbmWb4otYQFeKq",
  "key19": "4rVragKPbBgEATWECXt9FnFo8rRUR4bYaXPjtXNJtm8egiJngvmHtsbMUYbTu4w6manbiw2bFXHwUxWBsjP1zkKL",
  "key20": "3vF3dXkxfv3hGrGmAy13wM4pCxhsVhYXiUtXMBhC91v8QzjQk9wAfon5cn8Py6EcffKZUgpcCru2XguFWFLur33s",
  "key21": "M1Sf2cQ8Vxg9WVp4AiwT4VN4xZ6iQrgWKoBB74Y4RkC9oALiii2NB37ov3GHVAdZsiwK6nEfJvEnn2ztBJ9YtD2",
  "key22": "GNZMHfFsXA5RQjyMtYQts3PtrotamgitXzKAyoJRBuN5HQFLd4YZixyrXNGKasEYurEJUCA8LQKjukw9L4h6qAb",
  "key23": "nNbkrs2xNV1gxXauz5Bz846QMabLeth463o4nT11CyxC8WVoeGn99Eq87rTyjmfCUcPMnXdxmSmxDzdJTb3zCFe",
  "key24": "W9cKPwjHXGkWUgcf8WMiJvixZRJW5vVxmZiw4deh4FRBAQPjtskG2bGenEFMKc5N4GQ5QvPhWMEPsmX8qJD9etk",
  "key25": "3q98pXoRrefCAQNduJcE5ifueVUDcNyg3HtQjFoPHN7eKYd9CaqayMKosbVjb7YgakfKMUTeMQte5meXTrNZRvCU",
  "key26": "Q9616Fo3pnzqqCqZp9ijhGGxdG39jS1bxfNjVzRFL8p29P2jzpYkLrpYd5bVyMuJpwmbRqmFP7YY3uCZ4ggBvjK",
  "key27": "66JqsAPz5NPm5i8b9uVKxAHvR7QRLZKKgHMspwe878TAdV2PgH68SDQ3MxLMVTehDe9RSUe9jZr74naeeEjXTJHw",
  "key28": "5asztzR533fuz8hDVxhJurMBuztrMVRbggKUwkCGyQiGvV2pPL42AxzzQ6UTFQJB5oUQA2jGKsXLS5wMeUHgKzvb",
  "key29": "YML8m7rzz2MBPZcUsUr4c3CSGP1xd5Diznwfp6Hcx493APaZDizfVzNtgYghSr1R88Fxv4aKjfhUL11bzJGQiHX",
  "key30": "3oeVqHELoKyHgaQ2d2ZQ9ZCn2U1ttaGeuLDkyjhXjfRrJ4aMQniBMHjzXXxTGABwonQ6GQytEBVNzmYiGX3BruY1",
  "key31": "JXMBCfn2SbKmuA133oCwfrh3V6QPGzT7jGip5c7VX42NgEzT5X5CZeofZiqkHGfFLuN5nK3q2zcYKk4a2thU5oB"
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
