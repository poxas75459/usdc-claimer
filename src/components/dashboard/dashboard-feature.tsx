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
    "2gyhRhcUGgEd4CXAwMbT2GAEVH7nxNyhoDmy9xFfwdKh2kMn4jB7LWhnbWRFF86EFAFi1Jw93YKnmAKFTQy9bgfy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ziLeZu9gqby14W4tNwhQkUWTW47F3YDvAMte2VePahWnnHqmw3wP9n56G8Fc5KhJYUWBmGnmBNzkGrY9H2rjJXH",
  "key1": "3GzGJB8aT9az4aquRy2mAchgUfRbXWvY2dboV1fkcFAjUizx21gpFb5PBxgzGzgAhVwrfi549zckCuPUQsruwCr8",
  "key2": "k5TYEshs6zu5tsfX882f7oE6Yir2qJeJhKetFgwzY9Tdow1mubGkDeHfFury44yFFSh6iDw16tVrvnmf8UuFdL1",
  "key3": "5gtb27HXUsDd3PbVcTTDf2R9QP5AW262ozsJfG7gkwD8aU6yZ17DRVUBq2FPTkispD5T2JZfZVVBHki6teuy1ii9",
  "key4": "ndUUncAgTiZfprR3rzHjsk15c5yzxwxkFwdvptHuuauu4iZxsNkRRhtXu9DNc97nYbp5wh8JDRAa1m99fiHaQeo",
  "key5": "4Tw1yFH3T881Xz9oWZUjbdaoLey7yXBha364LDsf6WeZvK6T7x6C952iYJ7XdVcPWEKgCuokeKnUwCwhgRKkR9ti",
  "key6": "5cKQg5KpogesEHvKFhzE7aMWjsWcgcNmeYs4qbvwghs6S5WyrNZVG6XWehh36JD2qdkfsPLxV8CqUndEoja1Ei3Z",
  "key7": "4nZHQgWsNCH1gQdd2KAzBFiqHFtAn5KjaTsRnHzHUsZQh7dkhzpNQzJWi6H6xroSwb7tCbRNEWjA77PsKFxumWne",
  "key8": "3zJ7A4pprbuAUgT8rNWWyjEVpQ6Syqoyrv36EekPJFd6UUBy81Q1baCZs8FX2dQD3fKoTdGsLY9YNaSDADxb2pFH",
  "key9": "4N2TLC7oZEcL4fkQBVMifxb7jnsUXKoBzhY1Cgbtj8fuaWQ1w8fBefKpjZpAnUWJU6uP9vyhsFVectSr8T5xwtYU",
  "key10": "4KMJ72XcPq5VvfLzFDsq4eU55wd83tTZVyfDKGGkDq77bJhmtoi44Th6JLMCZRPf2azyGsqiRcXvctC18w6omC2e",
  "key11": "2QTE3DVxcxnWuzBcqHWf5eSmLMnu44HPk7cSrU91N1upqwDhRwcXgW4APyv9fFycsdgLh9eCeoLEr2VT4YqngVGk",
  "key12": "TBMU2fmYyj6rCm1hAKKrECeh8okevdUC4BYnpidX1Fx2SvLf3PCLbGQe2Fd5gk9oGFgVrhbLbavWa1yG6Esyoep",
  "key13": "3VsZnp2QuPxDtbQMJJ6WjHF3hHi1zo2pGncCFyLbxpuUZbigfXiWTXNke2r5t6iGLKaBXvEiU1MMHnZPhzUbX4PQ",
  "key14": "zGPYwMXbitdLgwkvX8oDTAchHhMfDUaPs2ivfEhULBKL91HKsnKg4aXdaty4vKbLXUND45aoF7dhoqbBXFqsUZz",
  "key15": "2EQTUpFqUnWQ6Z55apbVBVipeoVwdMwdsvk3AkPgc2NmDzNE5fXfYKAFW3idjy3LqAqi76iKGc7uXAb7fZDevtri",
  "key16": "wukorscPqdEixHkpKa42LkoPvgK5SYnqHFMba4CYzHy2ESBcwKqqfs9R2JXZVqoVbwraDcH8W1rD4H3Ksnrxfjf",
  "key17": "S9Hvj1u6cjCQBuUThpbR93oZtE4QQRk5h9ubaq9pdncEs3NTAms5xqqaoHQeqZ1VW7Tg5MztvDQay7LRENXjHK7",
  "key18": "2huyArdCZUPRkfs6dewt3s2y7bH2CRh65cf7DsZf9KsUyipM3wzjusWNuskQyC5BS7vcnj4w3GLRd2PkcC1zp2HW",
  "key19": "23LtyUJ1QuzF3sT2PmAmxXCWgQzLEnuS4gz7YGSWNQDdWo87CDRHuhrGYihGgLgEK3hGq5bos1xen75wYJ63A6oU",
  "key20": "5dji5ybry83E72D5QXQfvGmKP7eCV1AavEAbDsHYGdTwkSPyqqWrMErEFhyntigT8uc9UdeU5N5Firvt4ZmRiTEV",
  "key21": "3KrMKADCj9BaZaPk2U5EYK6Qyo8QGUn5B4vG8m1nVYZbby61FLdMZk6FDBrUPwpbsCsdJqTbe5CQeEHEoiSpYdF4",
  "key22": "5UXMGPgiSn7ZxkcBcyfoiLmVKkQfNBxWFtfjyvLBbh3sy2Fib3jt7N15yXyMQFzAe2ifZagYEeWKzSa9r3GxqfrP",
  "key23": "2bhHDTpCbtSMKaLzbQjZu833tLvEU4FcujQavnYcCUjHXVG5HJQFMV7KQWEZdRGNumSpuP9wFNtzR3dKqc4bH7j2",
  "key24": "5CuWJGmsrgoBKRz94RB8SW7eLzdWR2gh9GXS4cWohbNLV41JwPWVzMiary7QRbvhMfwgFcoft6eyxDt5rRMfB2ZJ",
  "key25": "2z7fBspZEr7aGqUmnnvHEQQZABeH9r9DU5kNujVoa9xwgYmnbbYawfZSSTQm8FnRegcogKU7uPXnfHAbiQLRimzX",
  "key26": "5xEp6yLWk84D4MXkJeKHxPi7gEje7yaJYjHcHHk562FaybnuDeF7NoSkY8S4YmE6bZYUxVf5keif6S7NsmdnvSLd",
  "key27": "3fY71oRrNzQvrW12cgWfSbNaH9apFhuirBDCCkoRkkhPB55UaQpai6kh1jTAdhAmdEySMvAjWCpkWnP6rH8GPpjn"
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
