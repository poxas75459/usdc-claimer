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
    "2jRhZ2uMamuSwhFioFTG9w8en4LSbBdJFY6GuhfNcupWmhoZMy43SqNygZ9xe284iyS59Mr7tmhtMHSdB5GR4DQe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dqN7nn9u1abmY4Wx4DybK5Gymqz24bKYKNYba4tjwnXmUYyaEF4dCZzQSzuGRcYYYZ95McGquDeqwYq6ufMeBwP",
  "key1": "4erwMj4EuSApJEDGJYJez7pS5b4eUhuuUxurMgAmPdcTiWiu7uzpscoNbQ8oBmzFMVCQCTKd3QrdvCAufTxFsxWK",
  "key2": "2A8xLsmm2zjNSWNY1H43CnfcyUyKT149Rr4S9fkdAHehReoUdx1h7sQcsEUw29tynk9pAaC3injg34wsYctLsYxZ",
  "key3": "66vgKBZKo2bnA7xEXpPyM5se7ocPokZCuuXfQD1CZDZQPGJzg1bn9NKAwVrUH357VKVSdCQsS3X4aHQVFbGHbN5o",
  "key4": "2BCbjuiebQ2U5beaGHgQ4uksxxhRCxML4MWTHNxkVTEgE8oDrkqkuvxRNAYhRxwa2S9eStShUtxZsMmMgX8MkEgq",
  "key5": "4Myn7jnUP496xFqaJGA1q4BoDDQT3X4QbAjhF7zbExwWUKSHsteoKnMkaGDGbcnvz1nDV3DXtt1RQnfeFK5SSMkB",
  "key6": "5uZ4BS5Kk1rdeStYjPTeqQ18g8m3DpNXJ8nXN3LR6ZzgxVGwAtjKdofchaPP3aMzkzLKrWzCoGstabK1BzJArdm6",
  "key7": "18B732dnqoXwbxurMMGEssrjA6zrSydg5L5wwgdWqwCzoxvsW73PVNfjqHNDsiJojyK31DUaHnJDsSaPGkjUmSn",
  "key8": "2MpCQ2PXNPm9F74oasLh6grkorEEw5pyoxMLyZE9zqeY72BijMaMbnXtthGhtmwBHkVmw4SsjuefXTbkT7UB166B",
  "key9": "3zYqd9NBxyCRAGRz6Dd8KwBK5A1DEBuB4NWwPMbsUe9uWw6trapBAbv6DSudYv9SitDbkJnTW2LomDs2DNeiCA2s",
  "key10": "KUScTTZt3Er4VU7co7pJkMef9b8C52RsVfUMTkCxo7pz6iFdXrQ25rZeKywcyFvcVQDCHrC7QQbLBM2Hm9F89ti",
  "key11": "M8AunhTshwzG5CaRNPCRwsF13NZMZonLAVaj1yD69xggBko4HJYhCgiz7N4gtUxKMDwYBffkeh3GnZkwmJb2NTt",
  "key12": "4221CqQpMKRPBZQFrXxuHkaoCGbrVfpoMfQpEfDyrjLHUrkFEnXGjG6LarpFhD6PYhRMgtUAzsQPFoare21CT89e",
  "key13": "4NriwTPw7Uqa3d1eArrdG4L7dv8qKmQsKGuuNCDGo8wntVEaSvxgHciCvD8pyL1BJ7RHZQv8s4nog6weiX9YDLS3",
  "key14": "3kPxZxn2t3aG6xjec9AumoC3PYhUDDiXgUyxwyDq141JJhRnJDFbVGxPrGxkG81FJMf1UvZ52fNKTf4gZdtdvega",
  "key15": "2zxGySn7gWDVibZiXmSou8Fs4NJR8Kp8j1Ao6wE7mWoFfGXn1WqzfA9Qgk6ay77g5HFkZJAueF8zKWdTMuiNegxg",
  "key16": "4bfUVKpMxS1tT9QCuREsEJFdkjgcqbPZbAz4cr9ofCSZU7DURL55gjgG36a6woGCjJ1uLGNKPETvVE27XcyGwPLf",
  "key17": "26XNQXJMS2r5B4EyeaZU4jYL8Yw5LcfdgfddHEuRt2bpKek9f6thDm7bwtKdsGgWGaX3VjseL6ieX5zpqrX2LM5f",
  "key18": "5C5zdJuRW1MdSvyaToui6H67iBBKrvevVkUV55JtQRAq19wdpPZoLAVrrtwVV21rN9VeRPT1TTN76tmJ6zYu8HCE",
  "key19": "453Mb7YW8Qep7HE4C89bpcKB3yPBRftukHzJ93a1NDHYwRCRbfS3CyyyKj8QwAMRwkNrYajV22svQodXnKW25H5V",
  "key20": "3MUCxWXVWWvXvLtAbkmKuhhX576YAVvDHqfj4yo49ZTjKViTKYf5tUJUPkFehGnQjRjnBfqFNcb375athSeSF2NJ",
  "key21": "2Pz11g24ea2b1HjZT3bCqRQRbK5UNuFYVK2JJe5ytUDyzu1jTy7Bc7PMbKm2MZHYijqqqGoSxKWys4jDapcLY7ZJ",
  "key22": "2PEbtyYJDFjotdxJNDFs9o8XUdGFrvVQQrLaoYKshhG9yCXn9yLDMtcbwsiVmfBjSHU3vdLj6W7fUJpUUABXSgMd",
  "key23": "4uSBya7ZWHYiyAxNgnq8kt8txiWRieJsMJumkx1g9XkHmUsiDqJ5swvvYAFBcviCkbLFDN4oB1rB6pBuWBDitjrR",
  "key24": "4Re9tKgWxF5juubW21VTibMBmrUVAR3678WteCvVQaprF5VmMumGMAvYtAZWGny2RDAYPp6N3q3f7pP7YgA5mokV",
  "key25": "3jWtpeeQSZDyrxPLsPzLfYccCG1RtAzqV4Ays1KvuEDrKUyqveBKcv8c7Li3uEJUKXoeHvjGfxmtNru4d9EsUA7i",
  "key26": "8Fa9qT9K2VfxQS73Mo8BdTvZuJJm3Fzi9ACY3N1rbYkGJiTrguL8oBqDp4qvX8NF8nZ7YKQLCkK5ZkXqBjvgzFW",
  "key27": "4p2paALqugBTfhXpWYcU2bWE44g9PfGo6iNK9tDw7P9jPmJ9ShFny3huLL18DJXfwyWUzdsWAGiUKZBguBJnjrhP",
  "key28": "2YxBXp3pz7Qqhgp4j55Svkyeha8BEwBEM2rfQJwMrt4bYhDwpuiXW1nq5ERwNCxaV8s2d6GwDZ13V7LFp7Dy6KHN"
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
