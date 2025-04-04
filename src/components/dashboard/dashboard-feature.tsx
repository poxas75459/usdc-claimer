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
    "2mGvBNpQQZ9CBrt7znA9HUHQYDb86XvFtsYiRCMhJbqVtTk9igyeTeKerv7jnPpMfzKb9RMdonPcKy5pTJ63xPYv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jsxyejpK2CS2AA8JKhSaTFknrr9uqaZYJBH5Rm4oryoYBygRekqh6p9Dzo1At9f93S7eBuTFSndLg7b2oPVcGpZ",
  "key1": "6Akesh1Dw9CNdwtSgVJNkZVSD2yQusFgtCUrcW58B1moN4vjX6UADjHLFo635PWDwgfg2j3EnbBpPzg4mQ2vNi3",
  "key2": "2P5D7rsWBnp8BbH8Qvj1b41ZWz2LHhCTNGoB421R3CJDCWKoTTpS8YsMet4qTZ1ThVRWxes72Hchdbs8FVDD5vMK",
  "key3": "3GhNJXx9KX5Q45pURkpB7CWYNDLobmD41u2mtHm8hLbszSSLouFg6RyRPimYW8VQarkJWyFK1QR6Ny5Pcmcb8d3C",
  "key4": "5yjhBof7YrHh6TEB5DTz1oQ7Ucv3NVo6i64tMu9WGppmmy1bWurYRtQHinij8RvcUqT1BWSsTwpJnVq5AfGVvU6u",
  "key5": "4WfrLgv7pVRC48RJnNGd2Abs4wrCgU3DAZcMJWzHXJWUzqnosRTUTubwr6Ye6kkerbZRLukuaW3ZETauuvUMQVzK",
  "key6": "TZNiGi87i9S1qMnHtnTzaNZts5PS4UraHVB61LVtWs1eBVZgRbVY3p5VmnUtz5qpfhNQZhxeUnRWmKBdqaVLubr",
  "key7": "3RAJH5dEzJcfVV9pn46veBFCAHDZZzTzq4NYvFAG32XdVYZyxQvrC8qp1WpEkNrz2riEVWKWrYBVMQirnmG6HYuc",
  "key8": "2iFdhfktmkm2EXbGMQyXezRHZmoSBKrqrCPu5HZFEnnU3CAgUjnhwhGbjLsrpeZnPGYci5Ljb6iyXcLESktAwf6w",
  "key9": "4tb1gW4CsYJShAnENytZcxMAr29dExEs9k8cnbJo9r8vsEojWrG2zvKsRhXuVCZAb2CJMsFu7xozAjJ91VoAQvM2",
  "key10": "fBPDEAnt3s4BRUbJebnwLhcNrzVxod1TKVQXtf79xmJY1rvguni3cAuLiw5y2joR7JgbpTdyqMzZ3QmJUC74JgF",
  "key11": "23HGkdT7mjpjWxuo3wsNXiC65QaLj2FuFxFNAyhjTwfM4psQp13xgvk161jR1hxHdwsyvRCV9AMLUCJTyt75PGpu",
  "key12": "4dGqzMYfdmcgvzuZoAnLP1uEasE7c5Wz4yun8gPqVnoBvZp5LNsUDte263PeNzPUD5rzjpNWe99pjAS4MwJiuFXy",
  "key13": "2cAzNYMbNmzZbmeqNgNmyoShFbsy1HweVzGpvvFwcH5Afiu9Sqy2eybeR58z3LBcDsxh63BkEU4n9BxoBymaUGQF",
  "key14": "5TryR46Lw8CKW9Az9tmERmcvjwUPS4KSKzUddQzUeVHQRo7Age1r1QTDAuiM1DaTAhQbZgN6oeY1AM2aFg3NADdU",
  "key15": "2tfbCPVNNiR88REuCTAuEZ6tjUckisjcTJWW83NBmw3LqwXknczhFyXR6fi4dP9TM5LdEP8rKfmEib8PKCTTDqbA",
  "key16": "28qtef7ywjmm953kWYUbq5TApkfKHmaWcn5CnHrKDSCy2tqkWZtLD5mZLfH9FgVnH7WwH7wnWB6tHh7Twb2GaCk9",
  "key17": "5swJRLStoLQXkZxvsnUq72hJR15DEb2HfWgFP6s7zJdfYJHhPEHW129vYJ4T4xWFAxk8UA6zTyWAmE5Hndjmyxso",
  "key18": "5sftAMLB5Hyhz3jG2UpqpVeWbEu36YULz5uHti3v3W3pUGghrVT5TNJbcTsugXfXkXcwY6c4qn4ynqMAyWgz22hz",
  "key19": "4N27g8ga1pn7Q74CRJ4M7L7UNXVyXWWbfar86xpHUaZULDpZi7YddQx812WxR265y1kiEEqmC2F7t3vnuWALdw2v",
  "key20": "2M3TJuefqQsBKsKBmyjVK1vEw2C3Dv6U2msxJBQQKSKEPWjsCcZjg9RQjaQitbuKAQ4cj6erbME5kxefMSDdTnQB",
  "key21": "5fgfgpqHvfaMC7zJogdfDyEBpoW4rb8MuPM5wTUJiofqx91bnGX56YgmyMyXNeDWogmUrHWje57eAoGidpUVEQsb",
  "key22": "3zxBAso7hK7cbxzHPhFQs8gH33aubLGaPKjsYt1i7hcQUvmRAQwAhVV8zLn5iwuQQGE4jDCiM9CRhDLdwrFmoK3E",
  "key23": "59zozLNM4HkAcjhwJ1WqGQ6fJM1zf8eGHW3EdqhrhxL2zr7x4qX7iYKVGYC4TqD38jp9nPjmYs8HoQGjL3Puw5Fo",
  "key24": "4osWs2F5uqy7z1qZyvaZAG4ECDHCeipghsSxRZAe5aEPiXeiG3sxhReAcAeTTFMTN2MpFcHizDPVjuYKEWHRkrdg"
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
