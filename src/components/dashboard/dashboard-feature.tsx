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
    "3mmMP6eZqjduEkk4j9wBJkhv5dBcP87fDHTCnuH9DhYXwhe4ToAbo5DJPbAmAsyiYD7dq7PLGLzKmSNXG3iGTqb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mGSePTqwFHmBz2HJZQxnFnXjonxuj1APdc6GWrZFCc1Fbr5FX9hEofvW7M8Vf2qqwzNb8mFEgVhWZAbkBqBWNKV",
  "key1": "364p3Vw1QijEtmP7PS4rnw9r9U3vdsrK3sNwJG9Jn3V8JBk7Qiz6ANSpefkssWjcZVPaGZPq7JPhtJ5xvSsrCTHM",
  "key2": "TpgTDe9YanWjQPsFbopAFn8a6XqKareqh9arda9ECRkf5nZVdLQDDNeMDySTnPFcFdbnE85qiNDGZJJh8DF1zBD",
  "key3": "4NzsCBkgFF8oLo97cLyAWqLJLt6k6jawygtAu7yt8SaGrRb7F21Q8uvz3NUuXgvxUNrLn4s8K99E4c8pjNkypojR",
  "key4": "Zys9QNbMfdiYi9RY3FXM7MMH6ZW7AK4YjsSH7HX7njiXbHikcY8NqrW4D45FtBVSQBMCQuq65RTXsoef3LzwFqA",
  "key5": "55c5jQAB4TY3zqQzcZ8KsT6vbcPuKB7itwcGjDVpwGyDukaCqP6SbuS7sLFWugdQoJEJ96nBhkjj3frXzK7SLhg9",
  "key6": "2mzEVQmiiQHXhoqxDR5qajph1v97NE6g9SPh1yHvGRkLddWYqozhpHSa3smUiucjdS7vK3T59TuasjgoJryxb69u",
  "key7": "4aZFGnhTzPXyz6seqc6chA2qnY2XbMe24zCEMQwouzFNpeUSD65DPC5MbXPnACXxHyXNm8if4DMXi9cRjbgWGawM",
  "key8": "5TYdyRHb5qTDe3Uv8Xbzgug7KKPmcNtWhFNDvFP6j1Quizz6Kzt8aPRkiEPc8eY9y3XLwP223q5vqgNbaztAA5uu",
  "key9": "kaxihoZfssDpPYFj1g2usejA5fYMRiFpfsvoCC7U2fDHkLDWDkBQrJx47cQTsGCurDfusL54DyUJdr3RQYmwWKH",
  "key10": "epdQ6KLbUmsw9eDpihGKFr1hHWvnsws9sacb81auqLQcngbkA5QbjvTgFSuGyYdF3QCQpPHznR1rdJxp2KQKjQu",
  "key11": "5JWZD4FZJLQRD4rexFFqxREqEGyHmZaYqMaEybvmuBZd63zdPc99hiThhku8zVfXZG4fTmisJkUKm3QPCFcViUFz",
  "key12": "ZGD6tVfNgXxcGRmxbn7bNdTUGNh6oFcvhThN4KYK9mStnUEkt6kh89vF7fREX3tkSs5FFKgGLCz11kqPzNHjLvy",
  "key13": "3LghMuHpBu9xSegn9muPr6Foa7S63fuPzUGZyaaMSzPrBTYRD7fz1e7d3tN1VF1s1ghN2v2g9jLwNkn5NJLmGsJN",
  "key14": "2CHGCaGgvmtYKz3hVry5b5Dtt4d3xohsFy5SFHr9q8dbp4M8kf2GSZTaZFiDB3pmhZvQy6mnP1kEj6wvU5GFoHAK",
  "key15": "5HvDGpZkLfAhfWmSbPQ86M7hYD7eiSnWwVj6auRvymzE6LKNEkjFfJAQN16rSb8X5CjJx62PwhQ97ihwKZiNsNpK",
  "key16": "4KAadsdcRVmmEwFLsyKft3RpwNRhTFbEsWVRACZoy8bcdJLE2MWeSsbvv9GyAnyiyWmvmrvqzRsimHpZBN33rZXv",
  "key17": "3yAHRAzMjzG8Di4j4pA4wTUMWwGiAcSyS6D8qx5Uo4PMKK7EUqvxrrJ8btNetWcYkvGNBM89pAMqXJ2NBqunCbGQ",
  "key18": "485KDy1xsaQgYpsSMVzAtryMUDp4XFzMQSoJdrorZY7HuBwPks5aNHqaLwdm32sf8XLMVR8UqhwPjmgTTjEbbGvE",
  "key19": "41vmboM7LdcRPUmXxpA7JoFkVqk5bCKzYw4DXFf4JCbGGzSCZSALZRhoMUZ1jT9MzRGW7dsG1Xngn5accHwuHBFs",
  "key20": "2Gvq2HQNU5AZ32JXvueoj7wcnF4L7JcANQbPof24sVddwqmLwLVMmpe5ks6i6gAzGQ3gNTWDFd1XkLG3iNY6XmQu",
  "key21": "58aGnpsPi6BZ4wrz1dx4wStj2yH38jYyKz9KW5LcQ8rBqc9NHFy5RDUnpTBDgwNLMqzWbcX1nsZroG2jnGAFup2v",
  "key22": "eptBJayDsiAbn46pWD4jMY2BiHgr1VXCKBCa78nQmywf8gnVAtv7THUpg7a2GH6M8TdYUvngh5pCVby4fP9vse1",
  "key23": "2kLJvwW7Z8JvZLgK7bS5gnZuyPaFzRgfAnFk5MP9cX66V2GDv3weWudC3nkZtEhcicDWyPpLmHPvwsnNg6HNG6t8",
  "key24": "2dwnDr9VCzj63Axt3qCemtpJL8SLQ3KVvy8iFjekDJU52tsoxACgsCnBANsDpUCfk9LaxUsTvLdRYbkWFC86epSi",
  "key25": "5RP8cpmJTLcDENR4WJ18ybvTE9cG2m71goHD3QvUW8CR4kdmnCryqGYRbdVXKQnQjfnQ8eWBd9bAxsX1AYfX86PV",
  "key26": "4TAsLkHPZM4zLwVELEaP8bPpgqZ2UiX53AD6KLTE3yifrkCa26oTeAEY3LZfSvCuy5Ysop6rQtYZ4SuJN2hugnZn",
  "key27": "4gV86kUqxtMyKTFQr4vm3jyVfxJDLw7FTbLg1WRyvenAun3VQuLx567oMn7Qby3AqegCDNStbX6SmAdC152edkTp",
  "key28": "2cDFX6FUtuMCQuDKZurkuDGJ6ZBmnnrkQAjAEvCcjje7QiTixsXcF4oCAQH9qXJQFEYuZxCTr7tZYrqKRMXYun7b",
  "key29": "2VzZTeWND8UJQvZu4PVe34mKtetP3bpNgSJrgE7QwFAFf2MnXu3EfmXDpk2ozxjfCWmRUfMv96p4NwzxudH3zuGD"
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
