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
    "5MSGFyj2tYmvH9efEcSqu5PSz2miMUuJHh9UkohVoFBuwAa3Szruwo7DRKaPTeHis3yJK9C3s3qSSiLkru4zf29o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AXtgoQB14ox2bLCYAiVRKzaauzK99YYPBJ54FaFaoUVK3zF4CerVk9wGknBKu8jugR8CrTFX9iBZfbHXdGU4MuX",
  "key1": "2k798agezj5XUPewp18wgnbdYtTBCPM9p5yZfDyGWysdEB46ZMNhiXo39MjX3iY11CNw6i7tfUFJA25MFzHBgii5",
  "key2": "3LyvCh2Vo56RZCXMeHtxjBWhfzpGFsRxwcgvmo4LSXV9qMEQisgY8Rsg115WzvMQjGm4R61r5s949oTcEj8xqGt",
  "key3": "wPHXnrkAca8aExgjc3gcNYyqwzeXNnrj1ZSZ2zF2L1TX3viJuf5Q9CTmpay49JMGEBEkPgYwPDsShDY2abA5Gj2",
  "key4": "67LzsCdt6CLzpECpfudTQG9UAVtCVHDTe7GDfNF4r5ipi6gdWmvMuUrZccCve5APJFmonz22oavjkN6anRwJ2TQ7",
  "key5": "3Xs53PGuwTp1ZLfk7FDwnsaQZMhLn8MPZRGoVjF8CJWYvRJsQ5aNHuN3bK7PsBxLQMzSaU3kNkEazxpTift5PUWV",
  "key6": "5T2yqzXr19mCgbfmbJjvd1n6tDgeWdtXKCU49bwYebCdBPcTpz6JwoehGsMB1w2gB9RbF64aX6UW18tFqEUsK5Zu",
  "key7": "2iLYj1auF4SHQ68ZxffTX7QJCkNsk3v1gAcDXCsthSKiGyaUt6cNHqFBsyTGvM47vM2HUkisvZT6FR8oZ71kinrd",
  "key8": "42aPQHJynG4ht8iobuqJcckxwVctostkiD2isu8GrqBCYbQXZPLyGDLs5U7HEWkBNsPwVn7U6Ch9kXM7QRfynYnU",
  "key9": "2uChuwudZFss9ye56mtwZjWVsCHxyU3jiFBiSwbjygGoWW6p928wE1W2QpSmsFvF4zmybfX7uzZgAng11ebCZGRU",
  "key10": "5VCE66MMQ5NishCeHsmo62XNEMzcTfLdHma2UZmVBPFQDVMbiiiQxEquUqkF8XXtMnz1s8pmvzGAzQozjCUbG4F8",
  "key11": "4fsfNAWV8UWsTS7jhFb1D5iJDWJQwwaRcQJrQn8HepExLWy5n67ooeYbswKtHNf3AyPxymZtNv2pwdGDzeWHfnSu",
  "key12": "5MXF3P4kt9s9HyV98EMSojmLvoBmLk24htHYgHgcTtxNgSDrjxwnpWe1F9bBMo2AoBAKgzV9nTK7Qh9Ube4ozvg4",
  "key13": "ppjyK3Jj1UXYZ4MnSeNAtmr9LakDqgjmoGfrchCoZU32jKpqxp7BdXmdYkJj4e7HBtzWGsuzFfjxCHaViVuGgp9",
  "key14": "4tcFsqvHp6uwKoPaJbazgek1iBArx4Rgw6GMFZttE89cJQKVMbFnL7VgzVkqJJzLck3X5Vxz3jSszfpRU44f9QC9",
  "key15": "4zzG3L9wivnh1TXeEmqs6nsXEVWzgrw4RyjnjTH5iBtoG6fkXgNAWqqDq7pXYaq8bzwBZhLHWjDWte1EcCmCywXv",
  "key16": "2Ui5eYf4DUWWtjb6V2SbnDc2xYDkEZftNQrqpmTH13kFEEV7PQ2xH7aUzKkQUcDquKz7TBJPjvK9DNz9J2Bip5La",
  "key17": "5H8yowygSRGZfgn5rHbADSfSZSeDHQuKHK55hNGRhdU7ZqyEfsfQPjFRqDTCZgfDkW3Cp4QWkfpwPSQcc727iP9b",
  "key18": "3CZy1hK9X7hh4gTNTV3vsQU98Bsgs9z7JmMqYJRAWDmwtNWCK9KcTgDCb5zyNstCpNsgcyzNUXnHrSf5y7J9XLdT",
  "key19": "4aSwrVLzPkTaiLDoKFiFk44pA4D3aKpNyC6qetQrfCUdqBawrZVaGzHJM3vnrYd2GS5PYAfaug4UNr28KdpHtkjs",
  "key20": "5SSym2Y1TkXVhVBR3MmhRMRmG9rfTTRrHEgcedUMGkVKVo8QrqpEQ19uhfrxEj6pYt2omjAoZVU9k38q73ZEfLXG",
  "key21": "44DNcvx6H2DgAChhZk5ejJoCJ7VT1582VgRcEzYbvnHsPrEsxyvANd7H5eQcLe1GoZQLqMULJTBEusz9UjHtPL8U",
  "key22": "65z8MQzi4xBUjDRwU6U2pYFBU23ejzGZ1ZVaQYGnhyJxuZsmfQR7nS2uyNuKDznv73Z5qRYe6wjXEHVFAZeKeqLJ",
  "key23": "53zydKSWRfhEmk9vpFcMsGetWsnQXeC56VzED8NTZhFDiREZaG9TXGAxv1Lva6pqhFx3voJAsK8B2F4SkpR5PBGQ",
  "key24": "4LRkq68rM6n3Mm8L7jXm1CNgaYYeFHEvqTV9QkoViNFzZ42WqjKZFFVeGTJLEvbiPTJiQzbGwjFkwpUWXtYUejvb",
  "key25": "3UEDk4hDDr5iNVTF81vEs5LcZVVDCG6UJtAMVNDMehx2CojdbxNHceRcy8LhZda8HK646jBTvMLuWKPrEHyim7Mc",
  "key26": "4smucN72xhTYhypXP7inVpffxCUvdYUrPEZb8yCtQjTTiH64qgbm1E1jwm65BDwEhYHBysgScgj41iD1tUNYB1jf",
  "key27": "2fZrJvGeivegwmLERq2927scYzhqiEE2gs8pMJUgfjrRwncF2uEynrdsJ1oJ2vVb2wM1e2QeWtDA9mroVsSzZzRL",
  "key28": "ANbCusoLFs13D3jCqkamx611aVAUpbG3n5QfoSCBTs1mqgRtv29HbxSM7UJiqfKbD34taPEz1nfbYgmmi7y3rok",
  "key29": "UCEknJ2LQp2Nv3ntVFVntiDW2Gge1JuosGESix59CCpVHsL8FUYkCXk1aCYPS4UCgGrKCBYW63QbsZRKqVZ7kw6",
  "key30": "4HAdjGTYe7gVniFUb9xEMLuEdN74JbTfEa8NxmNvpJrWEmbimPZvLKAeW4iNNe7Fz98RS28pHvD2C16rLT5rR1wb",
  "key31": "3W1ociKV1YZJV9US5e1NJsVb8Zu5d6GzQZeJ1wMuHeG3Lsmgkvi5BC7cEHsG3VoJWdmFPkLqfbGvFnyUe9M8aJLD",
  "key32": "4hGkDNrnAmqYaTaF6okb9KXgpsZkCtavN5dnxZJbPYk5gKTN8Ri955XUa6mR9WuVvZWJyLG2vVxXfzWC9VY5c4o7",
  "key33": "j4cii1an1wGE9LVJCthJEgFZW73jAzVtP97fhMqR449WBBEuH8SgEEqW5LmPy3riEpSCeZGFVCy7aktxVNdfWo7",
  "key34": "3fu8E2z37nE2bCgaHru9Bcn8AsY53VjPgSBTSh9nPKHM8Zn9gu8sDKX1B894uxLck42mKJL7fY4G2c2DyJCXQGQf",
  "key35": "VJ6sGehRobWVXWonKvKPDJ61Xp93RpUVBmj6aTuNfDpUvPj5SeNugpNp5qLkj1Ub6xojhqUagoPRz6sSXtcMScY",
  "key36": "44YDY7VjgiEc5nPCzVv8vkMwofpnUZ4A6aLZmJyk7rFDgYPUYyAmeL1tq9TUTwLhMogFDQvtMYNn17NcvHMh1NTj",
  "key37": "xgYjEVTU9AjQug7JvkkgEAvBLyPVsJRwDZhYk9EiXUFQX7nT8j6ZhLWitEtnhFZvrLfLdksmz47ugZ4hwKXTheH",
  "key38": "23xaqp5TqjokuuyPSTxdSW6TNAVQ8W4XAsncdRAxQqXCBrANRVNxM5qe3MJRPTFD8aJjzWnNDJxC6DL3CLc8am5M",
  "key39": "21ssFQcwWq3nEfZgp7joBiF7AgVKXm8NpY2RK1B6XftcxxDZ5MPqHrRuTA7VMGhXUGJr9ATPRJSz2pRASezy9gYc",
  "key40": "38Yzxpt8bpNwd1b6LmvVZukWr2PSsLCF9WhA9iVk1hKyCeDbmUZbUpu8f35ADtWV1u1uc5evWiPPMTeVvjb8muak"
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
