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
    "2ds6kS13jJ7m3NwS16uNFztN2dpHbk3tNGJ6aFQX8MgftArce8caXhHNaKcsQ4ydeKa5Y9D7Qzgm7Wor2A7jXung"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qRrUAY5t6QPepnPPrriEveGp6VCaVako8khjVpqVLKdvXnkpPviFTM5qWRE2FUUfmw31HTCYKt9jd4nUTRMavC6",
  "key1": "4BHXe9GrTJcn9tPZfBXFunszVhzGT3V86ncZgFit7uHdQBSQpCSe1p4Kt1gUAqJrdvBrvgYzJuHXweT7TPuRcrqf",
  "key2": "33VVSe7ZhjgmH3sxMJEqNhYawqEq8i6k5S8t4aTBRMov8vZotUoXr4gmryVb2CKUL4YkbJ5rnn9KfcgqpPENv5gd",
  "key3": "5J791vrzYBiwVJ5sQhuxeCFTq4eZk6vpcyzoLrS2yVet2Wg8CcpEXZQgHBkapgonmXuDYXBztMxJjVy97HWjfBMF",
  "key4": "qMfu2ZANmxEeQ8BvGXGFswrphPxkRbRFnsqQN3rZotrGuGLhzGtXNXwBePbNgWe3FnDdfzcZ9enSwjRu16unoRF",
  "key5": "3HZSZPRUujKbCLKqJNdw27YoFuUh3BMPXHSRJ65AjeCHEhxhVp2zQishYcZmTAxHnQkShfmABPrvstAkKnayr2H7",
  "key6": "gZCiKpvKLjX9bt6WuajVRUvQZ9DPLFSzz94YurWxCm7QPW78YkKQgHpKX9MVPfupGkt4JcDnkEG5YSBWTZN9wUS",
  "key7": "43ksNpjnb3xKKtsYGsG2pXRQmkFezhKFcARvCzPpk6o6KJcX9Qq95LTaLM4xUCWyyqRFTvfx6f1ezDQDfoH4xQ9E",
  "key8": "3jKqRwVCwDsajkmrZdiaWa8Ag5pfy1pwJfe8dUDdwNhJmNe5xwME84TV4JomsRnkeF8iu3Tph7npGigmjpPF6xoX",
  "key9": "23S9vTF5bxkPeFGanGJRRHFN8NujcETNv13cM1oEXmCBPqKhZRGGViroahJDEM29XV1NERhFxb2HMwAMGHVfi7Y4",
  "key10": "53Ho3SmQpruKMJ6BboxNZTwi3xu4SznzLBmNMoNPeoiz7ZXWxLyRFSHVWSm1q5iNfDcvfGKs8pChTYtM71vfyCM6",
  "key11": "4ZHhFKvtncMbpu9ESfoioaBBewX8ZcVHfDt7Ta4DVvTe1PZvGWZXUsrudQUw2gxrBGdEz79pvwM2nTc7AvhEbTm9",
  "key12": "344iLnSPPgoUA1cQEgTyhxRFU6PejukZ2cBbtqviEUviBRLcH4yjFzXCekWz9oVE2pZBp7oBaMtv78PnoDxh6jn",
  "key13": "2eYRDDyciRqEZ4VTPdzDwcaMuthWsNbtfd2RPDzNLoAUSHuPKx4RFPaSJHanmC1dyhJHjAcC8VpJGN4upixgikwa",
  "key14": "5ZzrkZujtxY956PWyydwRauWDXMMnnXxgjwur2MbbNrZiLnw1uPCzxcbs3xvFHNuJy8okY7FWGfXL6Kxu3QCxmZA",
  "key15": "L8JWbjP82D7BdW7jtjnaFK91Ee7ZEz33bkxyQZe1MqZ9mSsbgrDPFikz8qAtw7Hd8N8QDDYoapGYCqXkgPhKUGZ",
  "key16": "3ndtzLkvNKVWLmmrLVxXDnHxLRapzZFghQSXGFXjr4X57KQHUYBecnamfeBP4PJFF2BdyyhVzo2vEAXmSy7zGhtc",
  "key17": "3AYEVquNpaZgLrEa2ypQpt8iNfdBNJzo22VsAkvC2gfy2E59gS9wQmuJvowRkaSEvwxrjUn1uTyR8tHhXx12c559",
  "key18": "5R9tYXDw886xXgYKYGheWXBu3zQfipdygDNU2rKxcfVeufLd6sStVQ18sixLLaE4XVVheomp9RSfZ4dNAcUrNsm5",
  "key19": "5WZtWnAr4JG13ZCmA2EsZJdoW9tnQ84hwQUrR9Zak8nD3QMWNND2WrzXqyuvdFHbJc1Q6c6rik6Lhj9ZsZu4EAwB",
  "key20": "u9ozaUWHvj4fvhGNHLg38A7CEDhzSse5ELgRkXJBZLvJHjHxgr143u19edgGbdbnEHSLiyv5p4uvsrUrZ1MJ8WD",
  "key21": "5C4ssbe1NV6BaqcHuTxZuj1ZhSKy26QXYxNh7GFg6b9zfRtAoWGeBswbivRLGt8TR2cPC3AdZygdZYBV5whWSgSF",
  "key22": "3HFXX51VbohhoicMKrhZpAfgZXoSaeeSoWmjzASrbxiVF8mi7F4gFUKv234e26P1Ar42txzwqnpA6RrtS34ySzpg",
  "key23": "5S13toXzmiRbhQr4b7PWGjuLVHdCEdRzczjwCoDpXWT2pRF5sewM1hsmJwYifiUbqEEbrzeR7XakXv4HdiRWY3EU",
  "key24": "3xbFxrhhfokk1DnK3bbrcM9Be1g3odgv5R8tajDhQph54TxmV1NTSZWyEnwn7EoVkLt6rfrBV3Qi34QcYgkTue3B",
  "key25": "5KERTfDQYGsNfXqTLB592vEYmdtWSVoyspQHofnze1gKzSrYcJo8RXYqDahxee8VJAdSmqRRzVvBY78Lk3YvRMnh",
  "key26": "9H5334uCs6TbPUEFPAhUJ3Ey1BEAwtbiT9n4YqtQZsEBUC5vd3vDwruUhP5Ej4v5abS3t58L6wc1roFGSDVyvLK"
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
