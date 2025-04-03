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
    "2iFS7AvWRuF5yBRaXtLwmGzNKy4q55VrsQuojizieNYi6BVdey9GGdvCxmuXi6T1XsZwhDQu9Muos1NpBhXcLuHY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rnE9gNc6MJJBEBXdgMtv2ZY9rgwbZD59Gap5sophzTHP9UZ7YYEhDJPmFqtMfdzFuXirTudm4BxmJyTFYNxiVmi",
  "key1": "28BTR3ok1mtBMdpYSubU9nUXffxvhcDXSkrsMkmK9fEkNRU2MgE54SUzm3xN9Zg6S815xETXoDzKyJMdQQJm1z7J",
  "key2": "3BnkKgPKLVsaTFN7owcPRR9Lz86abF3tPpmZ6XPuL8ZUe5hWvPm9TohjAFc5652xUqmiSrfdoTvFjL9t2Y2XEF8e",
  "key3": "3jCAGiCFnwQXAyotbg4Ygx66geCGcguZ2dXfQxPHLg5TRKHHAirVA15tMETapyFPFJ7PPnCkfFihpC2FaoU2xnWP",
  "key4": "4FYum6RxgAYj9uuNpV5XDo4AG72qmxefBymUiAtT3rw2qjceinjcH3j5icWeRKyFW6AANUkU12pPW9AVhDRF2TD7",
  "key5": "2Hkjz38x2F1cTR61uEWKqhXbkMQwEqMUxG2bwe2c9RU1eB4R4L7GZiBiEVVb7ypAv1rCr9nZaCqKje2Ht8fYFgEP",
  "key6": "yYapHn4SK9ybGYMVSQfFzEJPEWd6cx9QJTGSw1kFsSCQde3tzc1jNjzCWLRVMr9wDVfA8wjVSNHKZAFGTn6kQEq",
  "key7": "54Cq51Pf2Jc3WekrmwXK1ug34MFxA7uh6hPC4ih1VipyWErJQuzmTFfBDtumn7Hm3HQy6U7tE3BbpLHxg7qz69Lh",
  "key8": "zSeuf1KryXLkEeZPtxMFsQ53AktS8ySUYYgsQE8UVzPEs9PBLHTvmnCAZUgygwkjrTdSBHFg624mMcU742LUHbA",
  "key9": "52M531dvnVbV9ruML1areZ3woCP4PHffTX4V5JLZiobTjd3KxCDz5GqhkfK3M6aNqFr5qGhEweMQnxJTGYDrDPx2",
  "key10": "5jo7jhPYC9SnAPPhYFFEbtvh8NUjcmRmgAGVxPVJR9E18A1Pf8n2i6bJpQW7W7BVsLXpSJV1V9f63J9LvgrwsEPP",
  "key11": "2MzBJdfWTRWb4JsYi67vpNvTqeT7z3Bn4af7KKiNPyXxuXPQbMLWNn3mEQdEJYdbZUkQkZ2C54BWQgVi9j1NMBFV",
  "key12": "4F7HA27z7X6YP2q7gJryqg8QaRkkAmGgoY2wGvbEZDzDP4eUYdSUkh2gQpTti96oVm8Y1X3MCTg8Sy5pMekGYfnj",
  "key13": "4rVr6R7fxHhdBoWRbdc8X8rq2HQDrLiErxbEoiDxh199krUeZzVX5EaoQqKVuDGEkCAsXkh3gJVVAAfNP3qrTTC3",
  "key14": "2TFuTLgGGGzMsUSB2CQ24reqhpx7hY6aLJi497KBjuaaXmLtWcrrxu8KZmuWV1rJUYguMTtErxHXB5Xzy85f4ADk",
  "key15": "2KSnsBdUBo6YwSW5HEFMr66KfUt81rtG8jqdjY9wfLue9DL4CCJbeGQDhqb8Y5RDbPMDApZ7RCVntqrpman1ZNJj",
  "key16": "5ct6JuVpggdm5i2FohpNpLeaUPvixECg4xfcRKf5P84fWCFVszBANJC36KnfYV5VA43zyBEDpLDGfppAQW6zugSX",
  "key17": "4zQGzotofueyWRnGFjVarEAYkqazytFbdfLWLFGon4mRALWSHXa6SD3whyYntwps7k4s2yovp8sUEx1EbwFjxH3G",
  "key18": "xBeJVzo8w4dcJganqfc5VE4jw2MnbWKqLbMMA1EbzVHPfwoUKfLnj79KVHXSxLAiBraVcSmbKwUjPynRxB1P7Pu",
  "key19": "Ghz22NtqFTe9rQaPNa6PVarrRozHcp866jQoAgQa51cF7sEEjQSBscy8qnkWkVRLghazBNThQAtrAp8a6dg55g4",
  "key20": "svKiLqFC87F2CAntuPRHmgZpsHsHfZcgEwiFp18PVzhcVEtigfKpGG9rimhyxCsrHqbHvrsG3gTLMeduYtxK2Lf",
  "key21": "4bruSCzdcpjmJ6BQ8rWaWoxgJjoH9jqxUwGX7DsTYSBC4Q7aKky34MgEdWo1cbcjtGqxW8xpiDHaX1cZB5k62hXJ",
  "key22": "3oPuhkEZgQNTGnV6CqGmR7aFkCFJFxxPXPP4aRWZiuZWBUCULqHBFKmGuZofZzv7v7QLVP2tvexRKC7EMfa3Piwm",
  "key23": "49VM8XN1FmEcNbzY8XN78QndFMTBrAseeSW7Fau4LKjerQCuWJjyR1kHTktXxpfFkNaRTsWz6S8yfm32ksGYSr5M",
  "key24": "26Zf4dJFVCC1A1mTige1SsjmRcNEVdJdcp5camouLvZgGAXdBsuxFp8XQ14Cnc8uSS6xdcTXkYZwpCj4vCmCNbz2",
  "key25": "2Tdwjbx54gdGCeJex48M9NgiBxMVXMjs13WNBxZ2fKX6QkrgFLUEYoFci4NfGAGZzPpS88bag6qzUdLmngTLrhAE",
  "key26": "3RXJatnQxFTvr3pG2fjTWxHzYDpjLW32DBfG9fepdErczfApPDPzPK2CVJQboFNVTeQrHPXN8LJqv6CmV16Gqe2J",
  "key27": "2dKGc4vbB4rptA3oEtGVEcs4xRg3KVJ9aXLZ5E8QCRY6i2dNMZQZ4HuXFDY6DzonP7RWSvEANGfbasaFXzqX1k7o",
  "key28": "3cwqhFf3R2WrcTVexJ5Nm4eo1LJFVGGpN9MZWfogGL7S6RCx137B3kSp1Y2q4AS8eRhToptCNg6gpLhSy4drfeL6",
  "key29": "29gChuQMVKPmgKnWkvLeN4Nu32DwkCL6SeQ5o989uCbBSJwqbFbDbjVr7AF2f7sMgW7rPP5aCSeGhLuCqc2WX2iR",
  "key30": "4SmsdfnmTNTSYxMdq41Mq22J8HGSgFcrwxrwrjrer6ay8Kr9CHhJvQkTPo2fEf9aR6NGnVj8BjajuKtsBU7TuWxV",
  "key31": "42xThubozGDoLmHn8esvbNoyQbixK4sMX8LPsFPHdvFXVbvnomvXErKGk7DCgyr57ha6X8XTea8bLr515rcW1fkT",
  "key32": "5XQgt6rTuSB74yWbXNK9ZPgC8p3zJBwkZatfhxJKZt4WKgiZM7L5eUwrcFoWAoT1xh7B1BkmTRvZpaqDKtGo3rnX"
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
