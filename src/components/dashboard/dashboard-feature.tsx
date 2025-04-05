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
    "378pDhCbPmRH2FmS79CfEP9gvBxjgKyfNN2zPg4FKk9GLsafutXTmKc9rQrve5o9nB7i2tCsJLvgskAgjVuPqKss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xYcy4S77kExkqNwpsXrifz5iwMguqaViueZoPUfdY1uXh7dFr8CCWcMLPwM4LBewQtwxpVTriUowQh3xst4vENV",
  "key1": "51EiLMfGvAcvXmHw8b64gMxQoc1AqGkcpfoVMCJvX3rP8Nw65C8dfVJDbsyNzqhwNLt1E8cdUnLC2CxHAYe6hSHE",
  "key2": "67nd6rrK9uUAh139oQDkztBEgH1qoVQfthebRX9RwkPQSRpgfdN2evAzMQyNGZRtQba8Q9jGvFh6XPXqKwGKBoh3",
  "key3": "3gDFLW86vXnQWig3hSHP7UWztbpfnpNueiJcnmpsH4VmPrLzt9tSQ1vg98WsFVyAVyr6mLdanjgKM1ZSeRJVFsN2",
  "key4": "47YeP8PKeRVdL9gJCmvvz7JqoJduqbTosE8aCMq9javfvFoAoeHgxJo5m3KESjSivT1ZjecNKD4v9xJJgeEfLbRa",
  "key5": "2xYni6rGDKJkAvsJiVE9H1ufmWr4RunZRAhxmDJDzK5u4fz7uzao94uu3Kq5Pcjg6xLryz3QYYDVvb5WGjdaB5Xs",
  "key6": "382S3ZouBhwZJMRvWtsZ8FdeWQixLmxidDFuCJLSFXbXrF8VwAACdezPrTgRXjh3HbzArTYu9zuE84roNJN66h7D",
  "key7": "4mF9nNgFqFtFRHM1zLz8NK5AsRLYxkaZG7F4ctq7B4PDjXxc77RKCNaMay8mopJKeJ8fzcHSQAnCQczvjk4RRZf5",
  "key8": "38J8bjyU35r5NMU37suHwbR7nQfDKbbTeEuWjGt9fNrMG1FL7JtKvEy8CC31quEqUSk5AuMWRooLx1QmsRx8aCZg",
  "key9": "2dJG58RNCpNPVH1qkpJu1yRQaC9WXS7QoeVmW6y7iN4skwxa4mNJQr623ZpLputWtkSGQApkg43pJjhMPEg8g7Rq",
  "key10": "2V3SAHDF1T7jCB4pLeR2vwNgQCPVEMR3WuseBasVfH1pmT5qvRirvLHtSBGxVCMM9hf7dDuZnnzsJ3TbGLMJAGsp",
  "key11": "5CXNt31V1vPFBMGWG7dBsYUi6YNNurnB5FhSaE1nojSaVqgqZqpv31nzwikxdLBYyBrPYYsJT58DZAerWQNLvoPZ",
  "key12": "3ZUkBqvvKW66T5jVUbp8YUGPyu3ZpUWQCu5hiF6TE1LW33h4A23UWLqQrE6JZTANzT2R5urGoP1LdabuwXFJuuaN",
  "key13": "4GEDcc9NDMbKBa98rkp1wEzuRFLjrGUFHx1Rde3ExcDFJV15rbh5qPynWwJqrZQqhK9oQAM53zEktjUSNzAp82or",
  "key14": "36M3LeMMn4552qvVCXrYDJqJP8WztoJa47uJsore7dTzVq9HaaAtehDzf6hftYERjo722USy2seozBJ8QaauHeho",
  "key15": "4aJjfN6zwhDUNszWwBNogHYbVshGTxcspiiTKst5n9pDnGZWeLh7JPNyqMpsa1iFYFSewWSEwarhmeqXUvryXGEr",
  "key16": "uFUfU4LBkzbeKNozqcmeDPKjUJkoA1Z5wGqXmf1PfnfZWdetWjkg9VvJP4EfZZ9Y4GywZGV4kVywEu22D39dNgA",
  "key17": "4f9v5aQUwazSEsRfVBpnocNixFz4SKuTDbZPhToi9H4qfZzpReJ6jznLM16tkjV4TV4iN9BygupP7yrUxrJBkNT1",
  "key18": "2DXE75Z5em1Pxp3UntVVgZPeXx8rS6B8CRwLL433XwncJJ6N6BNN4ToD8Q6PtcY7aQ8qHEKTQ4r3M71RnLtVR5Hs",
  "key19": "48SbUeiKTwatSLmCBT8pRVa7dAmPFXfJYo56U5wzbG7knGvmCDF4pwp45yecr3bnxGKMdzvKgNTwqaWawzjQrY5E",
  "key20": "3RK5UPtN7tJeHw7p6kbVdWrQoPcVQBiPKAzRkCgjSwmrk1GhWHpgrcDNoJti6BLbRLkuc3PCvPY7FVjCLJyqbfU",
  "key21": "59aPNzV76MYtd4S34zDxRguLuc66HdhY49dVgjYnJLWPixYAHwsXicgAKqwvrVLMtAKV3B8bBCV9DtSEBta9vx6s",
  "key22": "4CWVABXYBWorg5Bk3h2ojHFZ2gWEPK3q38J4ST4Qc8yfAdMounSjGDpbcd5pCeNKuK1r2ff8pRsgLJ2NGkU5zcTJ",
  "key23": "3cdVM2J5Fsjb95iNKPH8d3vDLooibZhUwgiVRG8roMVFPzSW3q5BpSfcoXaz2B7YZ8NawhLZnZYenArHoQEReJkb",
  "key24": "5hUojMR6t6Vswp4DUeRjkM7iGcoAUxWR4z38NTEey9F1GBfft977GMwi278xFLGdHdsCQwka8a7JwEQFVG3u3F34",
  "key25": "3dxfZ5wZujVkQX7WTVbgj9E875NyMYUUtvqa6dVrAFmiexcgoPVg91HptrM8EUqPzZVVvajuoV6BzQMdNiJEnAqN",
  "key26": "5WrK98kGa6n4t3W7bW6UDPBmHAYeCDpdSNNdCLHHmUh5iXxGZ66AmfNrq9DcGfX7GeBkkFwB8TBEr6pVGrCmL76B",
  "key27": "vPRcXZeoHSL8GF1qPsvqJJTSi7V1139XXcG4DXXasQbzfKEwYKnfpakPytuk56GgU2YQnbgaS3FYQx86T5mqwVp",
  "key28": "5Av5DfLfdJwmoA3onrnpgefbqdAUxRfNpTjPPRKkbDe5LzTqJukz2cHCeUVL6KUf3mjrVnxwwy6sUxQY1VV1TyhX",
  "key29": "4Dthfb5NZHS4xdCC2HihFrALuQwbkuHjtTwmM18XPHfHnDianRXu8HsuSTiWBWw1xMbz5qygENCsNjSJYBy3s2LB",
  "key30": "iDcqJxteh6ztaTx2JQbfouTHcR71FikmpcScXTx2zgfphZjaNyWRL1Fxwfa6iHEyKayYmU21BvqxnfKk2Lcd5VX",
  "key31": "32cUkpCbNJKBW75cjmwkqYUVT2r9Qibn8jqfWtzgWicP3Sn8djscQ6MSMftAdrqqJSZSTHQXfWJmHQ4qmXQt2pDP",
  "key32": "5bW3TF1tyAQgAE1pNpjJsVmkDKAkhp2Nr2Z11yopUsVcvNMbnYRGbKv4b1dmoqFfn2cYT7yMg63UfvMRB2HZJV3U",
  "key33": "3Pv1jyVMsHn7zioaq8WNjWDQ8LpLLRx2VQkNW8FCdZSxcMRrqdBs7tr6sTC62xixDE1z8i3tUgeKk5BhucrvgCJg",
  "key34": "4inJRouAze2PeFN2jvnmAMBbUedNMsRmLhf7VMQUpuiTpqaBZjrvnhKYU3zSRw9qhJwK44NNqTahA7T3Sa1cJLth",
  "key35": "28FkTEezAwaHYmsHkJBpfEqnk2UqTUZH4sc3dXJXkiWuTWKeAQxXxKxJwf4H1hE7H5RovSRKi965RsLCysWmCSRx"
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
