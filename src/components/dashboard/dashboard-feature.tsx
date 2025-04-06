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
    "2cuj2XLsZWFVaiyh3zceqGNKFaxfaYdPr2v1uJJTgVdLevzk4RALgZjufG4NeVv6TcYECGk1fG11W7HKDrDLoMgw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JeFyBE23dHtXXi2UV4SGzJYgHFTanDJHpnctThN7fgXxizt6KSAVn8hwg3ojosRZbg3hEfXJzFNaBjhcYcHPrsV",
  "key1": "BzwKDVt7o6Ut1zNnQ97SsWm1e2fq3p6sfWcKFN6TYb1iN39DDyPkdK75NWCikDbG55jcwogQYZdsJ8NF7mkMyRF",
  "key2": "3K1vg2zAz2Avbfz1cWqwp4v2zcWQEL5s8GguL8WFNzy1K7gfKfW6uxF56aampSioCyVZUBFGuTzTwgsTT6jkq39y",
  "key3": "7fG4trhT7XGkrQRTjDHjtEoHrk8Ewzk3d1URtjhb94e4ZmBv1s2ivYJGg17afU86We2bm7jGNmsPc8qiFgCcv34",
  "key4": "4Jp956ejCfWBrxLT49QWN3BFS8vZ9sqPNwpFMB5WBzCF3tZyvVebiPZ4Wd25VmZ7siy6ytnUDBH49FiDW1Pcw7ck",
  "key5": "2XfPbXWfuaVf96KE7gnksQfWKMUrF7pwcVKSJq5jEjQrtZfmkVTMRPjE24BxKaLVfWvj9E6vq5xnczYjptCm7ZUi",
  "key6": "5mkxZFUB74JnEiJAHJLcmZg681T1rPpwEHYHw1rpHFzy8U2nKnctsRapqKLiq5f8zQGQXUkG5JoGt2aXJYmCj6Bu",
  "key7": "2xfXi57oUqqxonZULaxxvCejLoy1Wwt3VFajDS4e3B4L2CVjqPMkGb1nVaUrFj1icmEXxvkfZj4ZgDRRt4wxYUJu",
  "key8": "Z2VowVJaYMqoWbeUe95Rgad2Wumui7EsPwXL3SKLX8XbWbCqu2pnNLsXqdKrtizZjLso9h74XmSxN2PKgi1QCvw",
  "key9": "DTcUpp6E4QTodbsBq1LuwTtmZZc21sm6AKN4soiSmMG4Y3DNU53o9bKwbuu6Bu1GMZHQeGNGBMgZhamknUaeQSD",
  "key10": "LY9SV3WyZhkE53XkBBmP7xPGB2QshyzPsvwy8PSqSZgxMJLCeRX5wuErXdsX4XE1EXA4SzHj6FyfzcvteUgzSBF",
  "key11": "21i3ZxAZC3cxStyQknqv7sCawFMeyHTxGznZkiXbtY4jUg9CTrF51Gb6CvYS9bSYiyuUjKjj9z4gKMsMWxnvnpJa",
  "key12": "2bh1GoGfoyUMDpxMrv557TcfxtLJKyRDytGvkgi8LyvLBTxWsRrbn9XVYoGP6sjb9A3phR5ZKshLjc7fBCUSm9vz",
  "key13": "66dtmRtDDNYqjqXTwNJte3KNLq5fBZvCmeacGJ1BnqKJVTuCXbhCB5S1vnaqQPWzf33GBtJDxuqkyBB2mXi4uef",
  "key14": "2eQVFbjQmMX9BzgtPbzsiYHGyiwD5JQEocA1oaFdGozgFA9cQd54xmpdiPmyFjpcY6QgaKB1dzttvcNupgzFQA7G",
  "key15": "4nLn4eyLrgSiQUefh43txTnP8N1e93KoQkCfo5gjZWrPFy74raYwTEZCN7yWNyvRY9hcg2c3uBxMaSCaE7Z5BtBk",
  "key16": "574SqFVRCkzMfcsWx7xpJ9jiFAXcBmkwwhR7TEsK4j8cqvTv1L4rrEM3ywd7PpMNZH37pJAVT5QxuJSctdgoRroT",
  "key17": "5EBBYyirvEummHmJrBJjkh5LpeGQtmZssXPjp8b1TZEWD7yhHZpi8mbAKBdJVDqrwLtfuwgzJ7yScW5chtaqU259",
  "key18": "2ChEfErKJqPSUsw3tVXbxJ6NQzJZk7MgQeWxfoPyuwmCzEewN9EkEPyUneT55xGHrLFVg7bVM2mGrFW3G9yjsLB9",
  "key19": "3tyn59raN1KvCyv3HrtFA9c5oPVVC6MCsv8fLS6gGMgxz759PeXDSZfDT7sZr9WRUrjajVsWU5oa8xwEYdxaUdyR",
  "key20": "5MXByRyEzcYfTt5SGDSKLDEd1NBqNUbQfMDakvMoGPPUsLJhzg8iMSG5VhxpqsW6ePy5noyCS2h2SRuGCYgGqmop",
  "key21": "5AWmb2Q9xNPZsGpeecmzuesogkAQBQWfB8sRVxC7CcjymMxmbX8idvvnuGcz2ZL87V2cJtxHVijJJfgpepxUUATZ",
  "key22": "hJr3MRz3R5rRBiTHnVJ65xGRXmFYEZhH3GRszakTQSeKrs8vXMYcC9hvzD9HVdVGh7Bkkjzey4yeKGfHJFNZL2z",
  "key23": "3xNJaK48VsGTqJMi7WS9QxMEPPzQn2rUk4nDPbJiQPUUHBvnjFXFBUW1koMxps8f7yshw38ZYRLhMSf9wCi4QR6A",
  "key24": "2ChbZbeaRTXitN2iqwHFdZLvRi5Py8k9s7roS3Rj8snnf74rBdZdt9LpK7mUbKqVPTUwG93MisLQCc8M3qzqyyhS",
  "key25": "5tRAxYyiHeADrb4pL1HPuF2vwcea21KiEpjRykDePkmr3UjXWnq8TgrEjPtY3qEcBKcQWFMSnn5N6wfurHao9idK",
  "key26": "XenP8JeY8NqptTjn29r1PPRhJvD5B4MyM3jMBQkEfpXRSJEF3yvPomtN7QESwhHT8Poo4xBNMBpQdhRivQjQK2C",
  "key27": "4qpZiMmueaYbKXwEkP3s7b25x5ZsugGVWvgY7mBEo4xQszR7poGc51EHt2BWM5d386QGfrUpWRhsZadJPUiX9R2a",
  "key28": "5mBQPVzh15nFYJLBN5X9VExmxxdsy5xmGfpwn7S7hJ7uXXg5D5cx1DHv5iGSyRYttbzTfm3mWi4WXxrV8fuUerNm",
  "key29": "32C3bdpqTupH3ZuiudJCHtGaKRSB9eBykVS9bsPbUsux1FHa4zmSCtsgUZPqxB1GV8yojQQwfP6haQ55y3q5i4iD",
  "key30": "5K8s3ujrsqYdSaD525J5BdHccTxRK8p6eYcmkz9p2XRwCD3YxqWg6pq9cLwGCX7ujoFv8dJCPrLtQpoRcELS4KCG",
  "key31": "5dvo8w5k5n7VTyouP9rM6rGGykksXHWVqi3EfF9i9ye9kcRrkF2WZYzR6iHezmvMoQAEyuwwHUPpmSqM5BHLASsb",
  "key32": "2SFBpfCQms4DarhG9BvwugU7fyssdwU3htALggqR5UNVygbkn3B7RBdteBWo7HqMLzCg1e2sVNoqbHkikcoJJawk",
  "key33": "F3Q5FUzquFrHZVHgD84dhNjhza18RbSbrvRi7JLMLra7MfQwqV1hkz8MA8TtSJs5WQA6qXJPoQMtbwDuPiBZToo",
  "key34": "3myi254bM5AR8YHBVdKJ1yTe2oejwN7DNJDc9RcA1ZM1V9bnFKmYJW96aCD8x5adJmqkxK4CyW51PGfjVqgK2ott",
  "key35": "5zTTWv9noUmgBBBUGbZNDxe7iRiih8erLnpeuNEtq6nx5acvGUdtfpQzqYTbCqrLpsvXGS1ySpVVKm2en4qkJTon",
  "key36": "3jJxcXn1uG8TRZBqhNuJBcuwij2CG1GASdPJ3THPANw4W8h73rwa2Gw5krEdfkgJ4n6nfzfGg416wEBwm9BqPNnR",
  "key37": "3Nc617xgA3divhLWHG3NncmeeSV2MwhyLaahMhB6x2exP28sjUNP1zMMrZNXCQ35jeg4Yn6FjUYu9unqwLAXETHR",
  "key38": "Np1WwNn2bAUYasG27QBex86zu3PEuKfGTAmWYdi8p63T21ah7tpDqfGVmdd54B1cCRn71aNKz99nG2wRPbigVSH",
  "key39": "2rGnReTvMwCqxN6y7amJHqvgbiZvp736CY21zckETeqpXpCgAdbRHfLjbgLPC2FvWd8M3s3EYVb3NJS922sMEAm6",
  "key40": "29ViD6bVU6674NWUhJiECefHWZEGNix7B1XXhMZqWdrg6XMsL75FeERM1XyrcPoEJVp5mKu436cVDkRK6TyDAGs9",
  "key41": "5mk275Tg1QeimVZXj8vLEaEVpmmb7V3QoPSBQMYiPbDUXW3niYYsSqaKz2cn9iEom9K4S78nFVWBzyDFuLMcRaRf",
  "key42": "5Y2XEdivzRCzGEozT2aX3UpiFDx7z3A1ChYbipNukhArBg5zRgdxVZYVuqDCqzg1JLY1cnhbkFWrPAJXBztMLo3e",
  "key43": "3qtQSLCwCDsT89DB6nL15Hur1RT4SWc7uNc9oyddDk2n4hA9hgGpKhF8SBsF3ZEqdoxLLpU2CPAmiM4TxRn82jEx",
  "key44": "5U45hFVeffZEWwbYgfP6moGatktdNgg7dqjpewgBxxqgoewmYWPQYabDcreADizQyDpdM1681wpbrKm4hoxrMgh6"
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
