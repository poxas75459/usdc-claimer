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
    "2t4fbDbRsCQDQe2vqiXp4dP9tgYLMikm4NYhAPaZqZvx3zBwDuTm7R9KSnghBYibNC6iu7dnWUPW36GExqrBB4zj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TJjT3U8nAxEotbBzBy7LN5CiEM8N1JvCma7bstHYaEg8JJbdo4nWzjr7hnFDu96TP56nmggtCVaELQCNxstfcZK",
  "key1": "3faAhQbVFh2i4wT4Kpcfp5aL3zZ8v7PY97Luug57hTGAcXqCLeht4tQHzi3ywZdbcmQDq7F5K3onrCdfHhu5ugLC",
  "key2": "5MJ5ZpU9Kfcq1nZveexh7yd7NUfVQGRrLkf6tqBA3AtQVjPxp8FK34Nz7Tk4fk7TEeTd3VeGTsU2ErXPmP5N5mGT",
  "key3": "2KhV8weXtC677D6NkceYNKDdahbiYja2dVWWXnMAdxxedoiZ1RUEcm7gQBi5NhpxkevnmnVrMgBafkQKYRxRUJKE",
  "key4": "4vJ8a6HV6Q2ZGiNRy6xMcmZMr7RvDypvHJpxJXxXySPLyjvqPEr9evx4WFvbx9dCNdtEfi8YiRVq1yRVA2ZprgUe",
  "key5": "4ZjYBnDjXAKxjDFrTLCaUfwnYcP9QtTjSK3TNUwBbEuzaYpoT6oeN8nbXjd8KKbgnJgMekRC75UfHSitSnNhgmxw",
  "key6": "23BuyLU7G7UGWc12niGGRcapBbM3w2Hw8B8jSf6Wvrd3p9oP28JQjmrq1jV2b1ynT7RQCPLQJTD7nsknJk5XCcA9",
  "key7": "656hkyTNYxL2GMfXZigjv5F5DCjyN7iYZS3sn3xYKpsJ5ViWPmbii6ASQZN23k8VbFKZ4nhVpjp4pYBhDDGU2MSi",
  "key8": "2Z7GjMxFUw81245CJA5weqPhAkyPQ8KkG7k2Z4bUEC37gtSic95Zd13eXkVPHuVGTJDmWiouFtDafPXohVcE5JEw",
  "key9": "3Y4Xnq7msx6fk5jcfD9yrXJGLUbonjQSaTh7dc86SCujGo9HFLgnBWwJbV6VXGcvDJQSEAQdnuCt7ESb1G4fP4TS",
  "key10": "28H3JAa9racM5445BwU1JNK9uwgKfNrAyWrdyHfSraYwvJVY2WtHiwLKHeB2LPig9DtxwzYJnpYRD3eXzsxajpLM",
  "key11": "2b6NNdUiiDFcS3A3faeJgm1V6ud2UW5qEJnF8hs7HGZqVtwUTLn6sqxizYct4ceZJdAQ44xXU1hFo1W8f3QV6ryy",
  "key12": "5cihYnc8iqKpQU1iQd8aTHoTpuHHsqin3wCBGYCsmDfAjE14UcX8Xaer9xEpBNKTQc3KQgpXdx2tjszdoSjTGLHY",
  "key13": "21upbzMMhmQobtgsMbtY4iEsNeS6Xbr3NtZ9P7YqZ2ETpg92b8FeuLv7HwQuP4WpvbkqbRJe4u9JBYKaSYDpRLz3",
  "key14": "4VaUDoR61Ar1uznhyNLTNJ4XNx8s4ddTAnAYWbntYXAa9tpwLKvuYcyQbxwTN7B5mqQYYuNHwKrUhga4UF46xp91",
  "key15": "4PuZDyLsxncgf1DJ4rxANizcnHfuZ1rnhdgAQ1E2sJA6njDD9o8uQftmvP4tssihAZ1pCz9iX1AG9KVL2ZRhyqPH",
  "key16": "2uEnymJT9fWkjSDpdzhku6kQ55Fpy8reRvCMyJpK4p6K5LGRyadMGFUqkgqomkGhPsXfvphBBiAt3PSkPtrcTx9h",
  "key17": "3XZV1VXfRbKZo9Ep3bVVJcE4Xw6pEzW5t1vn6dCRJVLLE3gSC6oBLpSRczi88bdTvA7Gu7AN833yz8wHdJvns9q2",
  "key18": "2YC7JyEpiECtQXJ3DZkzviDG5cTWUDg6AbYJfrDjw2zyiwrAXK34JCd7ZUU4r15fQHteSrZubHoi1h7UWAuPDLjP",
  "key19": "N4eMdhMQyzWB99RMXV6driyfRvRVEppcJpzJT3QtAAaUGvDLmfYNMkL7Ado22boEf22YjwaSaktXZLiZLJfQHja",
  "key20": "3Q6b3xaavfG4uFcMMnc3m4Jb6Uo4zhaMRYa8pB2m5jyDAW2qj51qPqXg2jCZrqNnmFgmcvwoqorWZbCtqG4XR3gs",
  "key21": "639LvMHJBB7fiv8Cs1hRWS9TR4zVwq9T3GWXqtikrQSG29kkn6Qx7W4MGeZ85GEH9jeLKcWgnvBVDDni3CKa12ow",
  "key22": "2B7SsY5zyQaNwtfvSYHgdwqjvwmRDXMt7xKnKG1Prn5pHye77oG2ZuHvd3vRZ2nFaanBNuqxcAjSjHgmyKxB4vZd",
  "key23": "3Wv8ujcLpqubBWHnBGNvvvUSyw9GvZ7SUpdaF7LTqZScUK1uwUVAUz7kz6pohkyk2rdp8ya26AeXC7DxEkHkfMpZ",
  "key24": "1QpaoGNyiLNiWQQDs65mmBVTSVBUfTavXKfv9x5KJb5taBRPgZyXg1iVjtjuGrDzx43toHd4WmHzKHFfNM1git2",
  "key25": "2drN45EXiZA7gm456zDyj6aEUVKYNeR6hRRvKbjCrpxyR3NFpeUShAH7SzaaKZk7U6CpAezNLiD2321WBuMRBxUQ",
  "key26": "2uQtcQB9hLr48RcxUxUVpu1dngcfs19VXQyoR1mMzMBFmiAwkfH9KUji75tCTfuZYadRDEE4ALiKYaidHZ3gsBaH",
  "key27": "5cYQ82pLSm6b9aVZLZLsLWWxhSb5PjHFidthkkhLWsZTJLrZ6vKqpjjFu4eWfHhtnJBuTjjCSfSGUaDPoMuBLATS",
  "key28": "3ufXUwdK3E4RNojiDxsCvdp6dZP2FhFbyjggYyMSENxBxjkdC6jXDz4WeoFFMgueM6BsSkny7xgvjfn54ABtJ1ND",
  "key29": "2mS87hbPJgRkWuHop4XKZa4mE442jxCjZjfmbZEzJCaY8VtfsCG6q6z7F65Trru7tYrXG4umMXbfFWWf2EUVwFUV",
  "key30": "5LLhdfZVq8FMc6AoaFQ3jRSypXtaRmWAnXCXcdsxFmFB7zhA1Aadd7GjezdXEcTbzx1C7vQrbBudjrvFr9mEQvh5"
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
