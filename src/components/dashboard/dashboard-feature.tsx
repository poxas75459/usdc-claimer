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
    "5NNoRmSy1AiMqMwQCThxGDi5FQ6bjwB7vf9kSYpJS1r8robdMj5xa7HxAu1LzG649kBJfLYht2BhnQuq3T9eiqB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fXK91TFp4tGfCEVXesp67CBZfN3sWwMvi3ZYjPqkiEY87AhDQokagyBMarTU593CmHoeFb9r2unDSEGGUHNjjMD",
  "key1": "552FD2RKk8afhaXKs5Gttj1izV42N2qX5m9odztm651SfcMWYHrb3a9PFjvghzBCKuQ4YJ7HHLK5fXRLqhJq3h8E",
  "key2": "35RtE6cntB131RZsHYXQZw19aQ4jxEem6gGhTC2cqEfTUKYQgJZicnBuDM6y1PygCuJB7qtNnyJUwSwh5tcWtCq4",
  "key3": "2gSZpVUc3UmQg2v9bLbqub2CPVRRmXry6LdwtX64k6Q2HwfsrCk6WjnA2cmTFNJHcoVB5kCok9n9HDiJCmQ337Q3",
  "key4": "5RwGV83Y5pQpJvd5CvC9KPviNzUfXjnJZT1UnhTTid8ojVs2sLbPz1vNZ2jy1zcjhj9nWEWpL4g4Az24o47Hzq4v",
  "key5": "3NM8XQa5dcHrdy9JgTpFvncWoHWd6YD3Pgjxvn69obPztT4JPhu6SGukzs6BeQG5qJDuvyFMPpvvz9K7NW9TCuwA",
  "key6": "2pvjymUaEipCcH9i2rKo3sKnMUeRtmwVp9TsnZRkdKCNPhRX57UKhU4oebbchzX85VaHUa43d1sskBCNWk8PXH3m",
  "key7": "2CgQkrAbmMUE2Z6j3AB5bgepy6RABd5y8iBQzapsGFxtQew2e51scojMNrZCtA7eRhgAiS5fbCmKWZSqq6EYjMKo",
  "key8": "4C5n4YFykW5mhJP7ePF45SQo5KNbeKNDNAZAyUAw8CdvSqQCDos7e52T62GUngCfBEcace51y6LGa4MePSK2Uw9g",
  "key9": "6SSypZ91PQ6NzmugHvFYfYQjTmpMFMT7PgBLhGe3HZNupiRmcCyDzibXvvqCkJ2bw6KZdnjjACbwjsm6GUFTHxa",
  "key10": "5zvU51m7wXUHhrZ3r7wu5RvaaKwVWFpdKybQbTUSajRne75YZgaBkrhbHucQZhMrrdw7Y35fjdnQL7KQEkV3zKDF",
  "key11": "2dnLTq3u3dQjebPgFW83NTZDb9qofMreEdknnU9pHYs9m4i7TDmuP6CgcjsUc5tLWuHKoR1yNnwZU1vid1Dxgeb",
  "key12": "368rnAmPa3fZfnihRYEomTbbkG8q2oSoPXRbzuMjf9LmFu1UpUvHCJeMQMfC4vRnPX6qj8Bc8rV6w24TXBftuPH2",
  "key13": "4oNPhRTZoJKm8R5yuP1MUzE8cW4XThAG9uhWj1i8vsLUmTBpuoDzvVbpuWi91wt8fA95eBA2pQtFByqJ2coWCgLV",
  "key14": "XPQJ91w384oWwrBVttvN3p447M6fHTHzcnzc4yJ6uGnTJYpc8dEcsEJc4GkZBqXU7HUUXC2CseYwgU32oajX5d9",
  "key15": "4bcsRgo7pmrAog9RNUL51ieydoV6dXSeSSBzoZXtTatfVC3qAaRQnGzncoaHZ733DseQAnbMQCo5Sfbio1TsypKC",
  "key16": "2jmeGsU7NkhdynhjLN5WEfStHhYkbLWkufVDrPdLiLfgzgfLUftBP9LP3oJUgZD8W8f2H6QbVzY2Tfwh2A22QkXk",
  "key17": "29ZfNRtPQNk4wEcDgwtmM1upk2LtbMpYivFEc2b8C3g1TJnssU4wwLvaxGw8oMT2PFzFcMrv2H4wdKMZtFM6sTuf",
  "key18": "2CuGDNcWLZZRckTA9pzSSpyGjs762WAoBtC1a9uzs2Keq6tJ76h6HQQ7TgHE7eyvXB4cQHENjh5Qj71NH8zZFs2s",
  "key19": "cERgaMbJeZx5ejyFoKTJXSmyTxseDQN9FiubpPkJtTb9sNtknzUHhvZAVrBqm4ytDiuWpVoFYGWP3oWpcrZXoVB",
  "key20": "26QJTUnN8db8adTWJzJPDHTVjrTZNAv2TcD1kDkQNaoTmdZ3K9BSQUwLekvZTQVqxxZ4UNC34CnkyWhNHXQyCeYF",
  "key21": "u24KhS6ocWxyygwFpWCyfyzkJUD4JfpRaFnsp2oPsejY2MU9WGvTzjMkmUe51t8zKCLx6GHJ1quRk8HzEQswAmU",
  "key22": "3S7bPNGHVHWCPfbdT7UtjWrMtAoWLAMQtpy14AA4vfR1eiKY5xi9ME9jYN8dQ38khx5rXn6Jf44P6zqBnxswAGTn",
  "key23": "3Pb9VgMGTqV4kUYY2tJVjmfFBEpDgijBpzo43UyMbHLLJqo3mAzqoHEafGkLW3gcKTaSNfFtkwpAiMHZ8kMgwJ3H",
  "key24": "5HQYqQuXK6gfuKu9GzUVEiFFvtPxjtKY4K7WiVtvQd2hrCMt5LH3vMfsVQZ7pDXkCfUZghghBTrvfFKdcbjvtSkv",
  "key25": "4x7XivJGfVpERUQSkmk3iNP7M2f41vdYsBEdfmLhTBvfHxiywSv8vpwEKDyk68NBEb4y43oKeRE8RRGJBe6Akzhb",
  "key26": "3nCh4z8eb1t7rHoEqwvvTr94QPneDywjVxW7vr4dq6NsNbLVAX8zYbEfUUcTjPDGvQTnp7G4mPfFAFfBshfPrMvY",
  "key27": "4X3NFm43hv1sBCrDuFZcoh4Q2h9yAcwxfaobP4wMXLVx47jGE4mcH3onXGT3QxTsSndJobCrgugz6UikCJpdFgdM",
  "key28": "626y1S7h4qf2MrN53MD8Z8rm5CBVhhyJLo1FRdiXC1w4rcWUEkJ4FEuW5YwNGraXtseSus9yeBTTiwzt5f622sum",
  "key29": "3CGBM4uyLE8ZiyEbMV2ZWVem5CKZ3Q2smYJGjMV3LVhKTdvgMohQmoyfPLQLbU8SvvavQy4SersydFZYWXQRuVfK",
  "key30": "2tStrTH8KhjpfaWpcuDthh9AXQJviivt7rwdn2t1LN2KFGmHDpDRM8CBZiVWfLRSAE5ySq3gy4a3fDdWXWSerYnq",
  "key31": "JZRRPAffzGuAoNYyqDTNAsp3VVqZ53cbtzyBUV9AUnrtWMVKFNKSEaCjBC88QW6v6H36yRUUdHChRuXxaytaaR7",
  "key32": "qWNyHZF287FwAMY26i6e3juAadzeopquiZDwii3h8VjZQCtCr3p5MRgCS94yeXowA6idXWStWtDTZpnoE4jVpYd",
  "key33": "4iQC6Vj8GEDvggvB197aDNBB8S1F3J9GzYREqwhtNEMyRsKpAFjRsuv7Q5zpptz7UvgNfLjNtM4DU2Rx2Mxn4BHF",
  "key34": "5aiGnoLLnc6mb6srGitd2kUhRT9TFMVncbgDQFc4NBFxiG4uooFMbJjHFR1pKDqKWTBUPepSjE2EemnUwUSjmYgR",
  "key35": "2KP1vs5W1ftd1q4moGmDc1gFzhTJetFuJNrNu1XavgqgdHXFw5EKnP2XsKVn7eJ4xq5JQCZu9Ru752YpuXRpvSzz",
  "key36": "MkaTE6XZLGKwQmcTcoXpX7YCM85Ea5a99NmTCzWuXgKbAgm4L6GLVPZnGBWx9fBS3gLjpH4FDdwYMerztQWij1F",
  "key37": "LvKXT6rM5TYbh2GBwdaGg6xgigyTFcKn3aTGKAkkxbZoSRG57hH9fvS5FoB1yTynD6ggnNA4XDK4WByX7pNyWqm",
  "key38": "gaoBDdxQZiPbp1zxnmwqhxzmjiGe2BbhZ9AeAEb7bAfYw7cUEenwJYdhea8TnpUt5gzcApysg6Xz3kSbJH4M5rH",
  "key39": "4S1y3FdasMozebruJCrb9zHftsx5gKr197wwS2fxjDx7KPkkZFKYjbanwcrGUNM6W73ddRicn99tZmBaeRxXAp4C",
  "key40": "2cwBE8MjGeGpouVcy44UmP9HXNpFQ6CCAFHYdUuf7wFYqcrARXR4B1i5U8KmpXkhpxGBsibYUVppU4yBSiWfhiAf",
  "key41": "4zGuHybvAUxmUbsYsae31xaNmPEAeXCnHV2DKDdqcmRBueA3PFwWUka9yFeKN4z3QnaZZuZJQdbcqMVtSFP7ogkd",
  "key42": "5GNBE4w8yfuNgXthbwSSzbGxDmfB7fY9e7sB7xzLRaCJZSTS4bDsSYuk8mLHQhmqLz88nbwv8AAq1fVY6UjTGRmf",
  "key43": "5Wiggideb8HGdb1srg5nbKwzmbyfMiKwyizgKamdRFqQTUR7Qon9ofyEUvY6i1BGnFG8SRQNtAcuXCSrq7RFMJ9B",
  "key44": "3o24WwCX5WZWe7ut85uHb6PRRUwgWaNrb1Mm1XrxB7ErNXmMY2PXPhR9xzLQy7hWxyGwTM5hjcYicCkaHpoeqvwk",
  "key45": "58BtgXVW7intF7nDmamMDSPiXpoqthTiPYsdb5LebfiRdfTKjunB5bQSD6VegXQtHq5iQ2xV3s5iLpjfyLQbYiRJ"
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
