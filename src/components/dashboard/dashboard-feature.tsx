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
    "GLr4jfjbLhrXjY4snhzyDHcnDX3f36rbUcEqhkhWFr4exkp6aHcME5Nr1556FEfeRPSTUcnGiRhHrdXd77RePrE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q5q1G9xMM3k8FRZazmE3rTt94vMQeDU8px9rSC9FeP7y7U6mRtPTqpTtBXdPGsvDo4jXjmkUMv9fQig8Wgf8rWz",
  "key1": "4pDCE3Pa1WuTsHmb41DtukAsk1yZrLV6FhF6iKTnMJ3h8ExS3TDFku1GKXsxMxVUGpZ5koZE9JUH4GTAZMovYLmJ",
  "key2": "neeHGb5kXTpbCVsbrxNuUAifyxB9CtZMGHpK2vU1Aj9FAtCpEmNRvk8LzbZUPK94f8HwBJXjntn7E6bN6H69kpe",
  "key3": "3J1jVrbSu3LkQnKCGUmGU7GQdaTAEJb82bkv7kvZkbheg7r8Rrg3SPDyHF7jzxuENzJYML2VaX61MP15Zv3EskZH",
  "key4": "8WEXYQxiZ4UShEk3xGte9UwpNQYLVB5LrxDyiEi7maEwgLWU4DsZHNL9fec5en3JcYdbGbytgCr5fKaAyVwMLT9",
  "key5": "G6bKp5C8mdV4ewQAF3w6XJ7axNQD1aUVuiDtU9yFEbYWqdFJpZ9eSkEqpir48Bq1mJRVsuCzRSxWGKYNP6FpM9z",
  "key6": "4Huv9zSeAtV3ymvrqXhPiS8KSxquSFA3HBnJSjuLKzAcpkPp7G48KN98kBMb7Y2HSidbQnSfmMEagnT6W612nZ1s",
  "key7": "3wafT6HgtamunKxevkYKSMDD68oJG1qRz1r3Bk5XQStoLD7K7U2WP97apsfHW5JbgEa3Wz3iX3DRd24owpsdS6MM",
  "key8": "66aWnMNV8Kz9m5M8PeUbAcH3ZwFsGVrFecUZk4AmtURD8UpCZZF1H3exfA6vQAy18ztjYZcxetabAp7XxUqU1us8",
  "key9": "5PfmeQCBPLh9FJoggzaLBuCd2594nSKLbaeRwsiBAywKtbvPPiPmkdAPffJp8kWDatfEV4DYfxLctnMwEVXh27hB",
  "key10": "243fnpTZaNPwXbKGr3LYeccpUHdjn81cn8CaoQ6bGHxmfoLig1AQ3LTR5RLHWeQX8Tj8nXdiQptdAxvu41eTjUSZ",
  "key11": "3XrE2EQ87UaJcgQhnyv3RXQ4mTMtRkdVEyeK3XCwzwzhJggLs7Yh2cmcj5fdqZxWGpXQ1S1xdG6njA9pGHUdWU3Y",
  "key12": "5Gqock3RHkG1NksbehtpNj52rPqpYLixj3zSrF216p2CdaSDp2xdni3ZAGLhR9vitBj4qWcGRkCM1WaPyheUNa2X",
  "key13": "2iSJFHbJ4MCUrkggNZX439MRWnLwGQ26f8tTetJtPfdEumi9Weua2uySa3Sk34f7iJmGmC4twN67pDWvjTDNo8XG",
  "key14": "37xYegd8dq2LwA2aAsH5BfiKc8KXBjhYVgnnmuAWA3tN1RtnQ6pLTeLpa3jW8xSc9QHaGnzKThjvvbHcKxo7odwW",
  "key15": "4xe9Y9CQFqeFngEgw9kNDtmfhqWjx3CYPn6whg841xjxXK866bL18PY1fTbeqWsTe451RDaPnazyveUg2k1YdLvP",
  "key16": "5ty6FbY74sGeEPUATNm8dJQxB6RJfkm9iBVDtMfXAb8i8zmv4Jy9sa7qoxLVRNWhMuQKK2Xu482D1xnJSHktmzuw",
  "key17": "Qyw8FQWnnDVfyDxFtC26qy25uYttNZhdVw56F8czXz95bxpwXphNoCAbqRfipKoaGR2oFk6AqXgGSjzGWxWEMoy",
  "key18": "2Ljsc2z6A4xE2g2fe8rGuN2MU7LyojirpwhuWrXeUgDLrZNmgZZCoQHrMdQzFihLya4y8Er7WR5dPQ9JVSvZ44D2",
  "key19": "2wKAXPe6SDhnxXQxfwsaK6o7CsggdujWoUHMy2BoAx685pfgkPkmzFgX2ByC6X7HaQ7gCvaca48uSTk4oV2NQGqm",
  "key20": "eyiePhR4GtvHuG2Kx6jzSzyXy3H8rgUzkR1Cm45Seqe4RptHMF3bXHh7fnWoJKh6Mep3uDXdTPfcwhLk12TFhiD",
  "key21": "4okwTdUjyreM3EnX4o8dYeoUoKxZJSTkjWaCnMQSSa3DwAJz3AURDiaqDuUEhXfPA4m4Xbw1FWWfToGAbZ9gusVv",
  "key22": "Lnymkcvk95NhToMBJ13Z5ShhUyjV2wSjkiyNzCKvXaL9izWgvnqUtBwBwH44qmjssakdcTobXJKQwUrSJ3zdvhW",
  "key23": "5SUJAG2kUSsFuhPRbJjZsCKH1oe7GzicjdTLxw35bxN6gjzxWd78tSw7nXPk217898EKch3B1rH9zVfzP3bkEU24",
  "key24": "5K85vZTGB9QKmxhS89UBaYmisWX8p6hKjJFswT5KBbMomHwCcU9TiiecoSpYiFfD6oRXpsfMcTu2xHvqKHmvL5bb",
  "key25": "51GFxR2puJLj8YZQc74jc6emQq397M1RqciubQm8WyEj2XcbNKEfB9mqsoCYkH9mwoMuaWZPganJtm2gCybVjQvR",
  "key26": "3ZYMdCr7VYNSdqEBo6QcohhB9vzSvdzBiRAdaoXJG7P9Ey2jWJWXfieDQAHuTKEJhqfayrRU3okaRYmXNtBAars",
  "key27": "Brdam9wfeAATb6BHX145hafQyvAJiAr8CeynmLrHvtdcuX6RgoZQSiPyMDxPLFT4tSiK2NaUuJbLyj2KhbyPDiv",
  "key28": "3ycLJA2WTwQm5wDTeVVVpMZ9QFRRgzrYKsGwvsAP8SHuTspJR3YESDvcHFK8iZJW2to9Bh4LZKLTmixED5ALqq7x",
  "key29": "2TY4UEjLqNUKFSxngCtohfPJrg8f4rDrp9HBkyFmVLJkYBipLtwAFDevkZRTysiWqc198ZMwMPp4qc87mCwGQ32Q",
  "key30": "56LZSESZgLFXudYyBZqU1HAAzM1rJ3xsnGAckWUHNKaJ12c9h2rwPfracyfYj4qugrpJxgDX1EQePzDKRXqskn4m",
  "key31": "2NJ3ScXTxP1tPuGhsLLoZueiu53HBQWX246HibaFiLSnAefSEfu9BXLDyoP9Y4Lua5ro8Xh9QB9AmZE5q3jJFgP4",
  "key32": "45UHkTogE7uoecMByjxensnHVbwSww48aMMCAjwLJikVUue38PKEWFpKT9MjQncAaY2UcXz97TTzsLLUZ2nxSWn6",
  "key33": "4KVjtebVq3NBGVeQXeyvqybBJA8X18AkbZdEFZT8Sobkf3ZbFvmUcxm1iwfU19Wb5XkGs96dwMX3PqMtjkrEUSyF",
  "key34": "i1U5vbk6zb9ChF5zGTsURdiMqB6ShZoumaj3RLssrVsMk5T4jLzKFRXyfC3j8Kh9LRAxQqkiNtULAQ3nW5KeBzy",
  "key35": "244ERoJr9eThncamc2CpmPxnitnos2b22rZmksyMZwfoE3erh1cKtzJj66YG6vKZXwHWoZ2txrq1xMFKe4gupC6S",
  "key36": "2Gs3bLqXQXhzu5gKPSST4q34feCkhdekUTJCqi9ntsgjNWy5ymrtr6efV23uNaiY2MyfX9fJbkBRBL4M3PmgYNUB",
  "key37": "5mjRP1ed8fp1a4ZKpi7DqyHrd4SLuoZxKnb6cQDiJ4nRjz6hWmS5Um43zw2ZnoYW8TfVPGX8oqtThygkLbCjTQRZ",
  "key38": "DTG9nunNWccFYiuwWro2Txp8LMAGrt3MXZxWCDhA1He6Ym95zL8nWtKFsJ2RENB1Mt8uFsgiLxWtRpBXLuTkS4b",
  "key39": "5tYyx4MbEcuPAwByAMpaegRi46aQmNVCHZT5f818kxBnuLL8oBCPSTKWKTTbXLKD6KvVFf9WqoBTFDdeoBndniTA"
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
