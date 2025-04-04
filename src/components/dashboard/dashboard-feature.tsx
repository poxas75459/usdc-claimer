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
    "3zuDWDqrSk8ux4xxHAYYyWC15QAEUaP9d5q9chkphGbQDFswj52c4UDiPakt85mN2MeKd36MnmHzqkz3jNzByY5v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UwcDyVvqU9oHXLLw43JwdXdzPY32rNeD9z6SLNrppEkeS9GGgV8PUF7wY4MUEC53SYJQb2hsVJQu1Ya5SdYEgz2",
  "key1": "2JHTwU4jKmvWdvNip5Adb15jLqbrDtN4RiNAsWbSA1FS9ke39MxgyFMorUnrfwA3xXxz7D7bNzwJKe3GEgJqPJkE",
  "key2": "KbDvHUgBHpzJnCmA3oF2bpPZzMzQ3BFMvPQwpAdth7KmNtLxyNDqqLpYe9i7dkdgVTTTodz93V5CHQWbowoURSn",
  "key3": "25bZQxfex1muqrw6URLEyu9qA9FSjqyAdyT7kuDtreBCNs9etSTUeJV1SjYns1sdFXu63Fi7bQzJnA9UaB6qw1y5",
  "key4": "cjNuDSEpzgUTGVB3qQfkaEeF1TD8skKd8E5QBvtE1FZG8wMxQ5PXtGZeao1cHxgHmDGvx7uiqRPoSNxR6LQ2ZUc",
  "key5": "3xGvS1ydTjPs5QDJKozVk8ScnVSt94QBD265GpwDeQpLkFdFmdAxjTogqQR1DZQGWSqD4j83GsBFgzcnNXiNeZtZ",
  "key6": "2BmAN9PctzdWqH74PHHtf43GjQ5hqNhumXj7Gy6FGoeEojDyPPEvPNwXhyF9LXkwGZSCvJa68TcohSKuLj7Yfc9Z",
  "key7": "z9vsRRZQf7JuwSiwiG8hoVU6FTMWMGTx2Y5A4gS1Gk33fprZUmbtc2WKDbZnWXFEJuccS4fnHRWi4FuAd2WfYn5",
  "key8": "2yv7PgBdHHxD5xz79uCfbk5KMLGTLtSWZQtsfrDMjCvKpf48fGWfW3qK6tGn2bxT9E22b63hh4LRqyYxYrc2GBrU",
  "key9": "GdBESVZv4NRDWgB24bRGzSnuDyFyD2bS8GZ82AuVjjPxByrZiQPqAh5swH72KTu7hdmidoT5h3vzHNk8QY7JD5n",
  "key10": "3rsknM7JBWgCetk8BVR3BsYoXb9C3Pd5GwNnRo8WBZEHqkwPhuWysKU9myGgkZ9pUokgzc3Wjm5LX6aNakyXhoFe",
  "key11": "uEiCKG1kq5g76rmnpn7a31z2jwcwpQLARsjWVPhXADGgyZ1pjshrsSbPfUyPTCrVboxivcwd6Liiwy4HmPC3q7e",
  "key12": "49gXfpvQjJ5UWLhyXNyAyY7Rxzj5XtoJbi5yG3b5WKsNxCkPNBLFmc1We2cARSuATamsxLHbSDuPALv3DcQu41ky",
  "key13": "3VTKjEwHcCDWo4ocKvnwBNQ8nWvkbSpUWoNiVzEC1ubCPKfrLGHHmJt3PT2ming55AtSQiKke7LakW8ubw4dhq5M",
  "key14": "2bQxRgJCExiGz8oZ38wmStHfo2hH7MmGrgJbPwr6WiUUmkrtjPyPbwzgK1gc7v2rXE1MbDYGArumSAePuB1TLsdg",
  "key15": "2Hrsm71XRGbEBCNXqaqHdsFcNrdCkyjq1eUMoCx1si25BVbXntd51eBD4BNesbXMBayVuJjhPHwznjWifa28jUo4",
  "key16": "25oPZ42FZ1uXybxL6gEB4vGGXvcDBZpXsqNsY9cSYFLaBf4A3ZUrdjXsCH16ZUbyfZbSrcxfviMP1VqphWr6gu1g",
  "key17": "2e7HP7NDJAu4Fd4a6xhqNooN55rNxBaPnqB8NdcyZSTa6GE7XUi1dM62t4Ef1dGq8MVUJfzUEradQJ5o5DQMXBTg",
  "key18": "4zZxTRAECueHB1jpBAcyLHKWFrh86ML7F473fdR1skZcjXKSGVAuf1Cj9KrkT141eHXcEuJRVHJtJAYqDFzagjPg",
  "key19": "46RvUr1YdUX7CNUMxTzeKU7Lm6eLjvvH3JWoGQs3h8H54ZP34HK1YuR658MA7CCH3Y4VDoWdwcQ8YTkp6gf3ejtc",
  "key20": "66pDYYWRHc7vNJ5yhQTvVGHiJgup26N1mLGj9B8eTUZMqErJS6iTjjRf5FLBNwpozy5pJ3e8ZDjkd4YhVkjEjBf2",
  "key21": "2KiwrXAafXHkMqmVpXqV7aJfaHT4mVh6693rw312Gp2fJGy3Hvfz3YY6J6H8dzTpDDP4U6RVvZ1rqpiUZbKBtwsF",
  "key22": "22PJEtVteEvTHHacvMcdyEZ5TiBdBPV6ZWUYu4275QDGg2qGym5yYkr8jS4E2SftAMHBmS1GUw6NsqD86Hte7j4V",
  "key23": "45ATg3ekrt2Mmf1zrGPxfwfw85MbEudMjwxwP1Jyuzvdzrwoh4EFgH9iEmQphCTQXBxT5iXsAx9SzNsRNNkniBHL",
  "key24": "4M1KFM8tfaGm37gTYG9wYvY6UifHMgA4AF1jtpy2D5gyuMWmeA57KgXFXvZeUCt2jboX8YkahoynujtC7CEV3pmX",
  "key25": "45PvNqkKaKX2mEscjfqGVBrBixSZ4hpNBZXsJTqcquE2jpXG4eHvrEBmwd1Fh69W9bHFognQB27WGEQYiTq427Qf",
  "key26": "5BeJrVhDAw9iDHN1EMhAZ9ud4ifpzXjxb8s4KaSi1NTQdm2k7jEaWPxyY7qmBtdSFeoZ4rjprXXBPW5u4iVrDe8c",
  "key27": "2hh7VJc6rKu9LkriMuJqvjpuJaAuKkvYMHmCG1iLEaKZbE27dcVsxxXjivvwd7ayKt2qfccaxY2fVC4exvxJCnYn",
  "key28": "y4uhPrqVcXXVxAYGa3GSk1v4XCstQcN492omXShmQwCiVCAZZ95WVi1NgkpM5UCPGFJTvaSSEJ4YjJySKSauuEq",
  "key29": "2ZMVJL5J5TgMj8MXyEipWcABjb3UhaE1tEhNxCMwmrXSUfzu1vRP9Lwe3x8FgNEero3EC5e6KfVSAhHiUSVGCoB1",
  "key30": "5f3tcnK2snLuz8bcH1US6fFExkFKyRKTP33CcdTPQu9RGC59bqjEasfVkTL4gW9jJK65NJEqUPotedaEuRv19TYC",
  "key31": "5fjHx9AXMeULkc4RJtmfJUT61dyLSvd3HDAoHX15mPfn79xHCTfLYrJ72Bd6VQJqTLdAHdt7rYYVUFDhXtTmDpES",
  "key32": "4AdN5GpF3GC5hmd4K5vNMXdXAdnKPHFoLLbbsMFfzUxkfxDuzbwDKiPkw9dx7y9qXKcQ29JE9Q4rMKQ8an6fZ985"
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
