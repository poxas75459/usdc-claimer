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
    "3ZdMK3EJZEzpNjsGCayhboeart2WSScAc4T7q2KgLinFtmXT3ubt7mezcW9oRGga6s3P8izVGguhj2otcS4RJRrq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54W3iKMaqxe2FtWAxJdJDKD77ZXYA7LaMAcJZcRCsECDQwH4D6tSounUfLHi3gfyS8rvd73LyTifHqdw6ZXU6E39",
  "key1": "4ZD3i4APSPshuJzDNvjqV3P99SiaAWtSoKBhMyDSFotmnSHMZwv3tyXFfsHfjpt2T6yuxNphBwnQmNndWFuB1dxh",
  "key2": "2Rw9zQZs2XEGjLMQjZBcCi86swqcFGWLvJY5hXTBx76ZovKVkv1v3fRNuCd8UXsChgNsgCfcB5gGcHRbViStBK8p",
  "key3": "4MrzbPW4jGBrKZPmiV6kJHroA7xBCtqdDAqqo9RmcmvypdmuA9jBttKyTAAZZG6SzvLqUgM71i8HHAc39UAebFt4",
  "key4": "4xyiNy4MHf1sje7rs4FoUHpb7j2iYCSCxDURTSGTJLdtc4sFAKcYwUiD3iHwBxs2GeR8MjiMM4XNJ4TZnfG7k3mj",
  "key5": "34tdmVFjTHvjv2qfwCjjBEYgAZSBZQQPC1BrBcAhTsws6T5FGjU2vLJ79Dx7qhWLS9WB5GiiCkbCx9VctG5j6GWB",
  "key6": "5t2AWJ2p9Y55GeuT4GR6cjQV7e7AVRM4e9PC8WgHkYvJZvidxKBoiToh3Cu9ev2x5qbUSBdYxzBGLXuGi2dVy7J7",
  "key7": "sZ3UD2KLn3Ezu7EQUiZ7C1jgCpGNoALX7zkks8v5Zf7UeHuTeYoPrPUnfoZSrcbimjZ8mcNm6sN783C6APzKaFo",
  "key8": "2NgCkjAn8Q5qP6T2ueVfSaTDS9nLFJhEmQYZHwb6jv5zn8ceDFmRTsiJVHb52n9u9Dn4SzzNS9TEVPo6JxCK9L6z",
  "key9": "5bsaxkKPbhTE4b8PN5AkeDmcnXhGA2EG4THNG82P82Jqh9ybo267pzudikCfLF2A26PgFRuBRb817eyhEPhfkGh1",
  "key10": "32JjWmxQFEQeD48PStzAeSRu7XaQJve6EWyuf69nJLuAAeVHBTnoqK1WSG9dRTGv4vYowdZfB5xN55CUic2oGZS",
  "key11": "2xFNNsmESk7sA9SJjMtiQ8i3hnwGitAiC6yRF8F5Dwiqst2pz7uEf7BMumqvZskNL6iy7k1FcqfGUfcmJ1h2G3og",
  "key12": "2pkty7G7623D44STgZ8aKorxoRCo1qVogaknLtiGnhjtsYaXkwUfciZw39UfcCxYe9fLq5JxhT2RHyx5TgGHCtBH",
  "key13": "2pdB7ZwvQH1Dz8oh7R5TBJRVJNtPcFrp3uvkDbEgT1Ro78LS87jdS8GrRD2QYXKwR83wXG2QUN3yWEftUa8GyDue",
  "key14": "3oFuCwemtE7pnNVwNUN1bXjM4Fu4CT9hxAja3xN71xkcCUYYTWaLZmQbzKQ4RZoUGbifYgoX3Ld3Xfo35a5e1pKX",
  "key15": "2R9RY2hR1jaJm5mw9pt11eRaH6mJ96vPk5ttsRtqB4oRUKYj8hBhqK33LYS2EwoMEhFXqsKLPBga1QWPpVbUVdj3",
  "key16": "3KZFgZAC6SKQeQDpgxhFyn5uY62jeC8HErFy6CMc2YmVTx8ZFQtkupdLxVsFzpSGwtQDGecncjCeLAzhiwSsRUYd",
  "key17": "5DbzwjMDxYBHJjQGmfSAsB9368U2eybEjsXcuMWF35kQ24NsR7Yb4qzJE9SwjqNwTPKi4f6S616pDBVFnRD2zpHc",
  "key18": "3RirdSGn4zcGjtSxajpDoUEngtn4TxJK261zN3EmrWTaQs74KfuywCUFxtR5GyNGX344pkTfNRYjCzsX7fSgUjn2",
  "key19": "3j5fVosYHqZ8JVyrBdq8FnUvMT4HPM7cQbbGczfYhwuz9f1go6RHm6W1ZUMNWu6P4S2rn6aabGHjo3zYjht5994n",
  "key20": "5Df3szqZqS74xXEPJgzc1PfAtpzXqouWtV9AUCU949vEryyVFhNZRFZA3UcxB3JaCw9ZM7Pkt9BHFC2toPLVY4WR",
  "key21": "JBWxE12V3BESnyMpr9qYoA2c9vXEBSp1PN929d2qASaZRXsPzibLX59dT6K4JZ4xhbUw7WMux41GTWzJnZ2RGRE",
  "key22": "5ZDGyCTyQ2gwH4se4U7VV16mB8WVCdc55qjmMbk7rht7bVXAaefLkULD7GjDzZkGyz9mnvj91yWcyDZ79VvwbPfu",
  "key23": "1WkPP32PSpYXBDjPnpi7TK5TCpF95kdyjrk1QdZV2vj3pNwKjZyD3NQM6LX3YCPh3xyYYPDbgMc4x2UEEV9geYx",
  "key24": "4z38DkXD5CwHncMqndfLaiz11unqTQxQkEqZoaRrDyYwZQtdUcGNbUxpWp44qwxHQrc3vK22HABGKu5WHhqPAi3H",
  "key25": "2AXj4Xp3DvBqEXoxqkGLQSyN7NupB5z3ZoRUgC7ht5nDvPtvzhfxwVaYaQGW7Pn9ucSx6fYaeeyya7ZVU3YsEByJ",
  "key26": "2rjsycsgVn3aaPDktjDszApPKNjkgdirw4sbapwx2LhrsUrurCB2trMGYwcV4kdkUkhtoVjDVAP3wRXaAi9J5Doq",
  "key27": "38szimEiiz4K3HQWH9NSwZaKJ1UEPey6qQgNFEN9BfGRDeH4pE6DxptDsJD2kHXZhmV3ad1BE4iS3wVjDF6xvQjb",
  "key28": "44RFetUS6Yny2Zow3VaWLU61R2sWxn6iJkiMxi8Z1NhLCg2GVNBjr4JxatW379f3MmSRUoB1zwoLFKc5iYLRPLgh",
  "key29": "PxtVZbtcajhprjEK4FCd6VFpxbyi4Qa1mwWdSKNEcSmmiPAYsn1vYMTSRyUHky83gBsg4XitPq3C778jJsZsqet",
  "key30": "3jHci874mZaXGQuP3sWW7pUaUpQLeUQCocDYdqrFbjf9RWQzNBmabmjCDrxx79r3nDtrNoABQJdsToVvEtYci5wY",
  "key31": "kv9nUV3pJkUpdUc5kQJeW4AvXkyg5QRvHsCzujg13AgGeNTAfMkkJrGVKrEBddvLkTk1KK5XJrf2pBVPsKt3itv",
  "key32": "5b1ozBJB2UGzaZnm8peDaRX7yoEmaHbGocaA5jVpr7LqwYRHcCBZafeCqoc7GuzyTWpJ4CbaNSyR4a1Yz188T7iZ",
  "key33": "44QnUC4S162EPvQquNAsUEbgkXNpELCR71h5DJHx8iWzK49QdvK3n889TovwuUEHLdXzptrDep2uEo9414YY7XdV",
  "key34": "5vuGwkem8JnEy1hLQuf2LXH7RRFyniMCo9LXR79UzVvbmDHpzdJJE194LT4NQjLDNQxpnXwFmWU6rqopTzxgruzD",
  "key35": "67dCuCq4pkMxDs7hozPwK8uVBKrQH27X1BpChtroYoyi1V4UaHuuhzRyMVJ6z7hnVgzahtZz88bD3nsWfxAcWY7V",
  "key36": "3ZhBUprSqRbK3JB6jjG2nb48VjKX4fqXJ6apwQSx2WuTJ9Gw4TvQ3JunGXDkmZUjWHRkz3dMudnqiE3EWeuf8nMw",
  "key37": "5DEhPdu4zGcuD1D5qEQ6fRytY1WYkFZ6nGzXcS4nrE8mfhy15zofCC3GNB6eReb1gRX7NsPAJKR61w4CraCQ5QAJ",
  "key38": "2FWrMC5MjU63MHZCUmN8EQyw7tj9eDot9ehuvNhwP8n4zYp57W4q5wqxNePqTW4eggMrDtHBJvCjNeYTAYii6zey",
  "key39": "2LAs3X17eo2jZnTCZssv3LcYqbe6LVXmUFGKz9wErSLqK2QGiGoWurJggVoCoj7WtuWXwW2EQC7uXnw151FLoyrm",
  "key40": "5aHB2pZKJfpXoofnPQ4hs4A1JHHLMoqtaWbDBCqNsDLFiRgfSNk2PVGFRNosfzj2TP13YEfotTs7QDtGj26YtZBj",
  "key41": "D3R6cugvk2LGhKwDoc9NBoguPhne8fKQkzrys8LVNdaybqHcfoWTvknDCx6YyQn3d7EKhhxJLoJaq6XuNwQHYnb",
  "key42": "55CeKNwsoqF1Rbe9maKWzGozDdkg5mj8vUCsGyZM9uEEkKcxW9daXZnmXi8KYJKtfqctc3sGr75Xhr1GA5ZeDMbd",
  "key43": "2dkZUHCtSBeUSPPM5rEbzeaoK3y7YHUauQcefhfmC2d96ax8aSF7z6p8vzwrcXPKwwodRtTpprYGpbw56D6qsTMn",
  "key44": "3eGoaMHs7e8n7jsyKH1m7DfQWkzWKqCjofQrQs9kR6FhzdZ59qbx8EyU5G12cFEkdEh7DJSNmGZfs8PrxUVQWWia",
  "key45": "35oKUSnmJysKLEqzefo12FetEqwCq3QJzc7NngfJR5CBUnNutdDvWatmfeLm8a6VoDu3MxZf2k9MP8NzE3u723b9",
  "key46": "3wBF38L2h1A3CP5YjNXFSiUcbzyZxHHFVhmaYMQLrvsuAcwKQduY2WJumeE1VHDG8oZ654rwEcVjZdQdcesPJEmL",
  "key47": "5Vm4sSwg8nBYuUoXnzofy11xXozCFvtLsxhdbZCqE1oSU9Z8JLwN2hSAzJD1DjNq4e79AiUc2qYxj8GbczYG9dX1"
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
