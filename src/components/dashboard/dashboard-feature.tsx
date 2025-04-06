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
    "4NafK2XSsrpgC61q8TEbxra51RUfnKJtWsuc31hzqruqEZt1HE6dFHavmc4RVkyufTScULzU7fcgkxzvLHv42i3R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F6YdmthQ8dVmWpffqHuXVtNR6r1kPQ6iap6pD5ZxfL4NF6Bd8fnDQgFB65MsFrJkdVcX3ibayw2EhomS9cfrHTK",
  "key1": "532Z4qP5AFvJe3bdtD7ajuxVvKHkuuAGMYTETkxQowcDitu8BNbxb3aREwxZbdbSkfKU3rzyG5BAaAbPi2vScQHT",
  "key2": "2e2YXocSVVF9XKp8sucn5i6vTqKNZYR64xfvAKzFiooWb7uyLb78Jz4jsrnvYmby2yesyp5gJkG1HFhnvMo1NT5Y",
  "key3": "3NxAdCim8mo5fxv7G8dvF8kgidtXVxaRfBWpXrHDvZHpAHmxk76q6MARAKBYpZPrL4UzDQWR2vu8Ww3nLLXxizSr",
  "key4": "4sRLPnhnZvSbUtXrR9U63xUpg76BCtwiP1ZUz5FPhggqxWwjUce7Yh6SP1H4v5962oz2ZPkyhre7maBdpARWptwb",
  "key5": "48g28xoR97YP6sf2XBZA7qR4o9pmCoqRXJCGs8q76wiSuWWD5w4y5WW3LBgYMmMRPtFVbqfhNdJx4FV9KdNND8Ly",
  "key6": "3hJVexqK5hpznqGXBfz9BJWpC5FqpbM1Xmi9ga9hGSnvN5JzTHedbid8dCQ44GzxK88tQFf9d95QHcQZKmyqjPvx",
  "key7": "jgAYt22RqYALibPeiDTZzRuMjHVQZipuXmVnTKEtdCeqQT17sEbmnUAX7FkpDHNVtwpRDwYguZFkfgu5qWDTJcJ",
  "key8": "22oA6kHTrJVFcQvsk2XwA5qi7hwq4m7BhH6PCiSGEnWJf8PpTVSoFzVM4BvSkA3APmjYXjZb58s7JUcGE7gm2Uux",
  "key9": "5ZKXxsWNWcx3cuqntAUAbTiBrAdYJhhQSvETvJ1pi2n8VokS1UzNKmQvGiJtwcTkFhgW9K5E3uW1hsS4bxNhZiA2",
  "key10": "43k6BytugvrnvXQe2UdjVDFSGFuBKEdKxeZo3bDJb1goQV41JAhVVJ2FPZVazJg5jy3P8s4e6zrsAjegFEhnm7wV",
  "key11": "62knVjhPqgUHVND4yoNpeZHBDUAsQEBP5YK6q9A96jurwtnYZARmWUVT35e5963UH7czZCKPDNd3zrFpSTdTgr6u",
  "key12": "5SiE2m4123sahqvEM5PcpMdatyx3Eq58DWeFBmDsxNWoSa7dZRAdzqGLFzEwmYdPVnxt4AAbAredhQ82cyhS4cWM",
  "key13": "2xrs3KCCXpBG1NzdkTjyAnGyKrfFvgv4j21sbThemL31xuM1NDWmmPeakPGFrYzqb9YshKQzdnnyKhye6Sg5s1ZN",
  "key14": "4rxaKur5a3tdwqp6WFuUpQFhrJG4UDQgcPoa9ZWFfJ7GK3eTbTTqv9MqeUsrRuHguCTC66kSTKGNJVzkKFHgQpM6",
  "key15": "3Lb2UVGro7bmzZtEUwLKvyHKxu3y4nB3qDfnS3DMPthJHcxGXLSF74jf3pkruWX82fDUKvFBV6TVN26DBsPvdQhV",
  "key16": "64gtLXh2cTyqw1JP1RyHA6pq9R5hrYB5p8q68tfriV42QM5dvrhZ4tN1WodXhCYHqphBmmtufkE8pwEWVbdFJpNn",
  "key17": "4rkjE8upiaTX7dVYg5pzkhQbqjhqGCWiJa6mb7QBb1N3BHNiDMtxn2ypJrmaYJ9UMnpJGASWXrxuy4rsbebMjkM",
  "key18": "493Ur6bqznMEkT8t5pSB1UQwyZhKVf6saXFSq1N6RALtbmUDVnoJA2Mf5HbY4UWqKoZ9rh4znxS5rxvj6H7Hutsx",
  "key19": "PN8EHDrHsAmUWrEFraNKBr57rXvi3A5ed7qXNvfAubKAzYeUNtBvCqSAeFi93CtRUSYbPFkyeYmiZJWJt2jb8EN",
  "key20": "2HG3En8JXzgQSZNn5y6xikyx3DuXzRtFmwJ1iXTCK9e1c48t6r6XQqAfKsYPssvFN8hkvURtW5R2XwXYmyeMgSM9",
  "key21": "63qcYSxwBCJGsxD9BCeckwSSZxXJi9wxtUg17ygxb9ECuthJ6JDwSWmfpT1KeSw6KjzaKwXZZAgrEVVo9VJ6Wcpn",
  "key22": "36MugFEDGQ2k9NrsMbvFSd7HdHgEKSMhQJvRphfVfS5SWfiQuPiyD7KgaEBjaKWj3ebu6bv3eqdtGzDcXCoHi3eA",
  "key23": "2GyC5QfaFAWQnG9gE8be1U3tJfkhHzNWYpj4sXWWBNj7WTMtH1YfK8E7dAZsoLoiFnEatg6aPphJ99jmAGq921zo",
  "key24": "42fEVmiGLvAj9fdU7YeU9mDgS5tHgfoJyLZwRdEhEH8ESPdyJxcDGxbYyzgPuKbMKzXnjUBVH4hpqj3t2WuTcyJg",
  "key25": "2SiiUNaaQ3Uqmb9dsWEb1msrgqjdxknEFEQvMGhU61XYvaJsMp6q1Qows1dxErbCGqtRCdsayNR3Y4kberb9j6tg",
  "key26": "28H1EDiBWdTCdTRNdmoc7cz1X3GZ3Pq2FBuh8iRmDGYbJwy3aTBTFwtL5B8qxXHd2agxBaPT3NtitE9SKC5bhJBR",
  "key27": "64Mb5B7zpfH1t1HMx8xSYcAe9Fmq9aBJCrYpiudSFososeunmxctboMAAAjT9iFY7iMZV7kgAcWuhNQSH8FN9fkL",
  "key28": "2CmGBHV9XWcjb4xwVzLz7gUF7g81idDJ9yipXG2dESA2pUGsgSYB84edQmZaukZwgKS9Ne2Apz4HoWnQYGU9cwmD",
  "key29": "3GnbmoTquAA4TcPPgTVjbpoN2UYMfMNEo8Gh6CGvcK8f6Z791xJqZhU2Na8FaGMGJBrvvUypH83dHr484Wu7dvBK",
  "key30": "12bZsg1eN3CSegbtpYgJ4nqHi7Vna3t6QNmvUKcyz6pEdd7MqPQiLkxKTJKw8MUcPbyeX5QNbqqSZAwW8ZbWjDg"
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
