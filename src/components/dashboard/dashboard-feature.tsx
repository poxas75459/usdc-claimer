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
    "349BDiTcEwtGH2DvaTjPciFsipg6yW3fDz7z17pCmPw8qWjmy2xRJKEpCTXsrDqo5RSxawhkJZ6qLPQQi9SeSjNq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cXf481XYGNmqRA7SWYgwUunkAYmg1WSxSt8fAzjBVkEXvHHWx9pFVAegxfkyaNqwptSgCNDLjTQWWed8UGdW9vc",
  "key1": "4CLMbk6mFEBkkfJc7ZFHdgWwqacpUNvhUxTtC8yvFx7XsPLq6UjCXQobwAsbEAt6dgxpwKDPvREoEvJFCvrh9gCe",
  "key2": "65nwU42PeyoJQY2JdvkSheBk5MbsrKwNKWPcSchT7UtL9MYa6nzVn42SXyR989ZfZWxjiMQsfB4ZPiegmJUHbVFm",
  "key3": "5HXeYbTPWrkMk5uppYDsf8cAmCmjiwYqfwBJmpi2KuGBrULaxb5ZeUhjpovNSAu8GDh5SkQrnvSqX7QDY6kLYUKQ",
  "key4": "2D87MeSfwdP3vLx2nSxfiBnbPXK1ghDzct5ot59KmZZdooUxdYtxxQp5xRzFTWSbXKTEkdBLWXcm3HojBFi4LqNC",
  "key5": "KkJFymAUUAv3ctuzbntUjLhU7CcG4v3nqGaxrDoQ6aXrtzRrb4q41EArobM37YSoJrMdRccRuyWQu3NUyaPxwnK",
  "key6": "5Td9wLoFLQewr1d1kGcz62BkNcWtFdcEXjiVzGjeP3bgiNvbgWafL6rxaxa2MKNTeNJUQtY5TYEBKLgJt5kLTxvh",
  "key7": "4VWXrBCMZStM1kT46hTJBxe3kj7w1y4RJ8BCuaKiAzND6hEQaPNfeYJnJa2iHPLzoF8a9nXVceBEALb4LEx6uWTd",
  "key8": "fecSeYcuvdUNkiKuTbiwenmif6F1czjMqYgYzUd8UQph1oQnVSS272PD8LG9tdYMYznoqa1SbBz14sWR5ozrhTV",
  "key9": "3guRQobSvgtibpeYT4BS3nSxCfzWX2Zp5wc4oVf8zFr2CGUvVpm8hzzQJgbYR8L2GsbU76bZPBbzmFu5wq4wBVwE",
  "key10": "4RsUaREDHMrcnCQtXHaCqbfr6CaXUzJZtd12HcQiDqATCZuXrvCt4firZ9ov9pDbMAtCBJnPwJAbhzDKgBnbZgkd",
  "key11": "2QrfmVDajEKmpuQKgCkjYK7EMjLu4iKQ2ywkEqutXWNTntMDgZSsUAu6DQXdoa2sjqcNMJVAboeKHZS5Arm4o16V",
  "key12": "5HcZzZ8Lb7rd76rMhhDJ9uqoamqmykpsJuUCW59w7pyXacP2SgucAaw5jWSzQjQtuWKszQJxun99GteevChXsK39",
  "key13": "222ZghZyKi8otGe1pxPJ6t3Y1eCmKfXdj1TzM7FP19SVeboKWq34zMVo6KKdiyfm9h1jkXPgVhG8aTbmigGDfMTF",
  "key14": "2EMeUbNUHtJTG1ZQ5G6wEWbnKcpFsGa3RSCnaYXtyJW2LM2YZU7DH75uP5qmhVNLHwdm1fTX6wgKrTwWswEwzjo3",
  "key15": "3nKCzvPn5LiWQVHgdRtWnWBFyRRBxhTHsa747g7PF1cB5UtTSfprrHYKnwJTBL3P6DiK5wkT5UXuGdnqLcZA8Jwj",
  "key16": "52SiLfhsG8U8SottQ6EBrS3YESZ1kFNZmboBsy85WKbMAdKXEAkd56nWDx5M4Dj5AKwLskPT2tcSuzNnmpd4FJRR",
  "key17": "4gSdpPEWzwZQn3F4vuC2fzNVP4YPKGZSGNMuEJ3nLwieKuHdohpjFLxjCSdwuFVDJojmtFC7frkXQ9yrtLvwLNWZ",
  "key18": "326FwJyeMKTCU5RdYioacaJ7gqo4So7D5ZRVRmWaNeecFTBRkm4RtTtiRWegVygfV6oXAixrF3Lx1kTCoj1uf737",
  "key19": "3hWTNs7JL6H4VqebECJN2XhQho1EpDPnCzrQup2FEkYh5RLny5HyGJeBr4eGY8ULySHSXaeq5hZG7bq3gdfoNLfz",
  "key20": "5Yo2GeFUXx3brNuVeFmBMFvyiYGy3TWX3rZUqwmTBG1owaB2j7yQE9ueU4WCGKbFbVZJmP6pRFnD7N5ctuZL8MvD",
  "key21": "2DeFWC8itbu8CEkc7MNTyZH8mwSeYjVsJgRmM8KS1No2jUnXRQT7b4JHZ7ANxP4D8ora4wwJcMTP6xzMpHbHtC5x",
  "key22": "2btYYJnXgmHxXvGkqGVFpzqwrfbFYvaHkDmQ9k4uvfaxrWbGL3vhJmuXGXF63AsRRS79uQqb73MW14gau1hB6vRL",
  "key23": "4QmTXiHcQnSc1QhKYBYWYoz37Ky1WMkHZioZqyrXEP2dRQ1Rn7xvS1TH1R2DcD9UwkQ7tgSbuwzkquw9b4uofamV",
  "key24": "46n5XsWkPUUmT7euZqAxpQabQuVHovzDZEGnP9gc4F7dPTzBB61WY2XiUVsTKG4xhhh32CnE2DujWyMjhGp9vF47",
  "key25": "48bFwBbsCFJPfMcLthnF457rrFyYZd7aDvXSJvSFyWhvWK5fKNrpEQ9n4gTf2nwq88N6RcTUPwYz8tiiLvCdrmCh",
  "key26": "4mH2etuvteQvcezrASPqyGKWuPdPMrSuPXw3aEUcsDGAQHLtwUcyCRY5NwjgMeVhTRLg1UwQtY1t3ByJXjTBEKT1",
  "key27": "4dravyJsEamDSLqnKkyL5PN3pu9cY6mM3qqvEGdUzL45RM5nz7WvxHkrcVTAS3bPb35tC2zn17AQFmxne6vJtxX2",
  "key28": "3ETcM2XXjQz1q7CkSdXMzoyvpoELp4SQumW7dhTbagJQMiDEZtVsxCWoxtJJpRDvPApCrwf7mqFps5RZJjdtW3mQ",
  "key29": "4qDH9x8aWAn8qFbyc6ewd6FEAFDjCcVS1Yfe7sCvvEWQM5px2Fh9fnYoKN1FnsQy5eFujSW6923gbaCE3e58t8uT",
  "key30": "2D2afvvdGAxC2rtNaiMfHcEVswU5RqJd43ngNdJM6BnPr52iiX3cWDQTusuxpsQh8faWSws1jfypQCmbgTJcNbuZ"
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
