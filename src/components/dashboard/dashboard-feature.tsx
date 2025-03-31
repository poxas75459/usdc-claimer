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
    "3wZPRHj7cAijeUMUGD72rhSddX3ZBwbgYp37vXmMpN5yqx7nsumfwfe2YHcuJ4Z211WYd5CnCWZKtr9U8Y82CJd9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52AjdC1EpXPycY3vayRXSW8igg6cypZwmfKCCZhAghLaShRfJdtuoRxGAiWzidRrNLBVL19VKg4HQxYVtuboJBNt",
  "key1": "4eYY6yYfKwd2YzD1NavaZvhUjMs8Gr1stTHdpJdGwLMgL6JnwdHk1arvfFxh3Vm8ohdsAh6XbzwY65WuccZQx3EM",
  "key2": "3xbosjADvJ8HBJ9WKaLR3kLJFxPQJbTcvtHPH8ny4wvHGEkJkYgMfQxVbVZkDQ1HHF44TuS4gge5VaJK4KV728T2",
  "key3": "2EAmpaYasY8cCcVJHu8CKyuZqa6xoL92jpmoujvgDkidmxszp9Leuy9fmZRhBVAJPxLjNx2PWCCV5sfMNnbFoZsL",
  "key4": "4aAoQTLzEV3LkNpsWGacFyUVy9WBfeziYVAnDcYCgoViTxKCTDSFRm7Lm3jqaeFBuofnwZ4nY41Th1UYCqCYiu14",
  "key5": "2MMHaB6JNhfuFsh1cU1SXYPvaSRCyCyNjNTCpsVRPersnZ7yBU1Y2cvqZYFaif1A49DMr8CZuS1W5ddq8dc4uGkx",
  "key6": "mvWQp57PEyyvjiMsveo6NToVGERLqJfCfKzTyWZt3nizwR6PeEGUeEYMwzcwkt6fK1zRijFtYWcavG6tnvb9Zuo",
  "key7": "3xW8tRmpzBHRMFHWP8qA6EaryB97RAmZ8SgUqicTjNS5JxdM7tFmHtYmZzsF1diiCsx1tfiz7kpBKA6AGyeGbHuy",
  "key8": "4MQ7M2vPX8PhooPiKJVje66PaufL4weEpQRLwMg3bFsUyPQp4R2EoYrj7xqyRja5uowiPi5HqUwwXzT3GttQfgcq",
  "key9": "51BybA2UGiJVxWo1tTvbBh91LX2vDAck3LGPkqwzX1f7yNuBFGpzPZkzQy2Sb1urLUK4FC6FsC6dsEfupqQgoEh1",
  "key10": "4heK3bQAjG1fZWonxvSLReshWNPjuHS5E9Um8hYWL9jQqQzDqFAxeboh8LE9XKiPMtEQQdghjpdBU9g98B5ZHMn7",
  "key11": "4ExAt633FLBE2QVpe6z8QnpDare1ePjsUiWAJXM4kTHNkK7J8VVFpqiVrdBCQ9fAyKQQSb6jWryLuVXGwka9yQXe",
  "key12": "5qyhfUcgCN2r5ZAX1n7q5wVtEcwTmEGqondihNcNuqTCuwGPHeWV9a2ekgVZz6xDiaFrYgG2Cu83ktQZ98tHbNRz",
  "key13": "2KRWQXp9UQeWw9WBQM5yKG9i7xthfxxXNTafPnHRkjs9EN1J8KPKyBzYNoWkmydf5qbmjk6q8KwsS7nEbshzVr9e",
  "key14": "BFHBG9pZ34uSzjoHLK8HtXYE6H9ftJAPTFcsGHqHQwMrahFEkkjayPibRMosE4GJj7tcudsiJQUtPQX9AKi8Jzi",
  "key15": "46zXGvXxKiaACc5RkEzonYVqR7yxa4J7LCY211DoyaarhcRQcPZqZstFwwmvdnPsZwkR873zzLhmoSaNoWm8q3mo",
  "key16": "5unfT2mGmKRbUMmp8Nnj5F97dVWeYeYLtyb346swbpotGm2KJQpwfdzFgbLPPATLtHtwjjpF6W69JmXLK7vwFc5m",
  "key17": "576RG4jNw55Db3UfrWNQg8MxMRRiiztMmHBB11BmZxivwnVeJpm17TpUWcqQx16THeYfb2oAx4SBFZkP97WrD2Rn",
  "key18": "4V1hTUp8y6rzBpnGvcdMRuKkKKzoDSkCRwM3zpgVXs1jvV8LSC2UzLkDbRVD5TDWjSNvkkihw3FCE8DUmptpbST",
  "key19": "4tdNadwcuUrs7cH5avqu1FeipZQohh6vYEhCF6KaKE4u6VjLkPFgd2sKqkBq4ambGauCZaJg79uHiAPb1AwKVHhZ",
  "key20": "3VUi8PPq7pWE927q2Lhnba17s2dxmYgYpBvjPH82as2n8JG9MEntdu4efvbnv3F1YbZxpWCL32Jjjt8UY5PBjxFG",
  "key21": "yEb3dQNwQYeP5CULNqJ1JWB76Vc4jXBirqYjZXxPSTwL1ZAA2v6XsHYT2xGmvKd3UyysZYFpHttmLoekNwufwvX",
  "key22": "4WUkTLPWC5BF33ZFVdJ6E7zrJFpZkXGh6sUN5tkZi8k9VoMs4dRK7B9ipo8a6HCrA2Sr8JE9J3m4VWAdhF3pHaz1",
  "key23": "RkaPDZpVNo2dJtnzPpDxjsBj9zUz4Lh7tdE8VLQ9YZzZ89vqAhwA37Vcf1TNGxab4dAwCbLTwQFUVFJ6i8WQqMy",
  "key24": "2wUYCL8uPRuhMjJcM98TbSDUkfE5rjRsfLQ7NSSudKt2CGKbJk27VScXTEoLFkdGwwCo59rF8jkz7GxRT9vJdc3D"
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
