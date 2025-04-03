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
    "3x8CiCw8Tpa8tn4ZuRhh634ahMWgHkzYcxgnroo8R9d4qCVt57BPU6DJWSU4Hnhjht81Q9h3AboWYME9hBq5SVHR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "12Jodcz4eidJnsw23uh429jhmpp4VAuaHrWJvhRgcMVQRyY6eLFiziRDVZsM2yZWmfqvjcfjWwySeDUctzxhQq6",
  "key1": "3XTHFrYzfx4JhuNs935CoaYER9k5JE1AR79jBooUT3ifcHhxRYV2S9CKupMTJTTGRZRe7xZmWC1ZyxCdxoKSUcHw",
  "key2": "5sn8WWBezmLADEyz99jhUtSk9dT8a9MSGssbPtTdBp6RaYdcGUq8xZSWkFHHxdPHu6Y4GL5LpRTqYD1uA1CcZ7nq",
  "key3": "7AvqfDGbSoEkdHDiKsiZgTxjZVeTVSDBwUV1wWqhiPZiFYn4M7Sb9rbSg4DhtvwTsjygYVGQiTZNDyNjnmocnVL",
  "key4": "4pbH46ZTeVbhCw7LoswhruWzWFFjvTF3URxDHBBqrogkyQEDeLaL1neZmcvjwX5geaZNLw91ua7unfzJbzH2LFXW",
  "key5": "5CQoukmsUZFsPqPjVkSRqecdqw3QpvPT39Tfobj9tfgyivQvZCumMsig2XwKg7VZExVSNPSQKnyXCXueihnhU57M",
  "key6": "67Sbd2ers1zDED1UBaFAxTq7mSh3jYM4BwBt56QHrFjbrVWvSPnwBPq9UMZuV6M7ecTCnZAUkj9hT4AbjXK94vhe",
  "key7": "56ZbFPUw7oj1ojnz2cNRpayZpVdUgPMZVzXuAhr3SLykqLcGK6hyqBfJAVXS1A35jLvuRmEWbwcZL8ZRxZM8U1DK",
  "key8": "4rVsR3CQ4Ar3nraagdiYbtGrwhZdtruSm33kB1PLwiWarTGYCw8w9cU3EwDdCMJmPkasBTCu2Hes3PoKeZwqkvNS",
  "key9": "5dFgvrs2qWqxcr9RqJAqu2oHHWYTgdm4L2oDj9xnEweKnUPX2pZ9EHRUaFZkZdhXTVQJQUyBU8dTDjmynbL55BVU",
  "key10": "58jUpQEzJjJ5ktLES5QJ5efpLvXzW26iEiLHC1QSYzsZBYmKb9zQouHiZepk1eouv9tYP78LuQpx3SdqrgpXM25s",
  "key11": "MPG5U1hzVi7hYku7uXKbGBZ8P412jdWoF9VAYicmsF1SyXp5LCzjfXAtqWturNpLzq2L489DBvh3a1uT4QsNXFA",
  "key12": "3z8V2gzoWbm5sXKmF8HFhyY67dBdTdF748mG1oHCYKXGWPcMggrjForhGN9aArjdd9uEY6u7tPJAg9eUa2NQwFpU",
  "key13": "4HbAc3UHqa8Rfie3bY3UfE59Kcr6QEMGmYDa7NtS5GaDJuqpG4UGhcVH5EDjbB5BqQcF4NB6yBVsbeix9VsaG6zf",
  "key14": "3mkJGgbT2tY7jeQuY1Ms9LsFTTWScW9nQMZtkQaLAfFLLPs4432qjFoozrJT36Uzz2nW73dhn16jE4ta6D7a5P1o",
  "key15": "mgCfZLQ1dG4Y3rAMkmibeNdtyguFKJdr8rKXsHpE8RGT99rNNPLQRhz67GeNcQ1yeHNf5WeACsswyYueAAsEyLd",
  "key16": "2yK9z7y1AwYrAfFJ1og7bRAUW5hYAf3pHQUVMytgrL1151u4DhaZW9e7VavwkApZAdEW7dHyXwMM4uSPz3Z4apBt",
  "key17": "2bhXUoBjcNzMZuRBVYjqhKPwaUiEZsaBUUmLdXRABBY6LZNtnoSiHu3RXgSk8RBNrNSPcYUXnBZ8MzbS6fLHmrhb",
  "key18": "AAhgKQZVHFv5ZymTThGLQSEXFXKYzetCg3Ms6TiacsWaSXYeDFx8pn4WoYBzGDFWcKsYK23hzoVAJMQQ6ou1oSF",
  "key19": "Cw4vDfCDYtiVCKzwzPWWDVX8Ph7Zh3TsvsjTR6JyuRTBRFuJKCfZ2iJoCTTD2fuJuXHnWvL2D8YkcNjTBQjTwzv",
  "key20": "5WNs8yG214x4C8KTSGg82RUcAAcKZNnpZ48cK5Tb84YFnht8eNgdq6sSstRXKh7hPGBzUkPgvpkZSN42KcyKMA7r",
  "key21": "5JWmGqXJEeCC1z7XLT83hbbJ5HqDAtJUjXMkojYWHciXnpCbQELA383QYFWUxrqy66wRBy7UwThcByJ4r13gNWRY",
  "key22": "26oT36c2zgzk7V1S2vo7eePXfeqtNGoWdetRPQJzz2axSoqV6Wyxj56ggx5azNLopexMP2HNpx9r1ioJBc1r9H3C",
  "key23": "5n6BUc9tqtJaXs1HyXD7zrdsqeu2CbKgU6hfRTvNMWTHtwPH53p2heGiSweSaZ4HD4ZLxvanPcRCRgJ9w2jMxysZ",
  "key24": "5Zew8xYb7N2mc7kTXjaA1CHk2tmMnsxwu52CQViLhqqk9yXVzALhjw5gSBY2Q4HcWaRSDHmjSMr7sBC8c83dhohW",
  "key25": "2Fw5jt8qeYsvzz3Fej9pHLKtaE4pYJaDGbgn5gjoer3ttRaRQHKxyiA9GNw8bPtU5oxsNs78zQFyJZBFvi7ku95F",
  "key26": "5QVBCz7vaJsv3qwh9jrvsFxVWAhb2HEfDee7qYDpHkehLAC148p7NRitKmyMN4pvcFmN8eqJ7VTstxXfzS6awsWM",
  "key27": "BnerYFpARCW5w7KGAQmy12zY8ZC98fhmyyjAJDbBXnfdR1d69uvHGeGMyvTYmgUeR7pM3tauADinH4hrw61TBLR"
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
