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
    "nbzevhfmg7RWpstj4DNSU22936GZkLndoBXR5WJyzJn33tSqrt45gPZCh2hQyq5wf4AGAG8CHANh2antu6yzAuV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LkQxxRvzvMHnN9uvy5m6dbcZZDE53LSfW4kP3NrPpDVE2aN4v8MEos4mkVjXqbDuU4sNybimXNAVGDGCSD82oyw",
  "key1": "haQPAKBgGSe4MJ7rs2z5j34pUQXXi5JLQBkewqsNRQNoeoriQzek9LRraK72xEKP7mLzD1NxNsKtcp2tzeAZYEH",
  "key2": "5fqUw3otFe6baJiaFfXJFbTC5LpFULywMke37wjZcnPzJpY6nisMrhdyn25tcQjmrQo9Feq8mLdj89TZ4KDJXS2m",
  "key3": "5qF1hEiHEmgwvRLaJLGec85kfynXSX8M2oKQ1gxyMFwTFu39mPxbb5dMC9Fw3hSTCNx46bxmqPmrvGJKPFJjyUym",
  "key4": "7AnHxk1azHsrE2nNFREosUiFqSvrSkR27hpTBMNRQpvzGBvyXzjLa7uGxHFfR5VpSsqdPwUMuhZrBJpLhTw5Ns7",
  "key5": "4qoMWpFRycs3FpjELkdLozYFwP6R7yyny9KGonRfJb1hpbCRwfWPEHfz8ZYCTMRj78QXUWGHQArpDWzTijiDVqkZ",
  "key6": "2vaYmqoSgHnMccftYuyjgZK16oMQa6rBuU9wRNjqwDgZuwQchDq7rwKbTCQxH3v2sU3YnCoyhFazjSe91Qc5xDvR",
  "key7": "3MPaSeFHME6TJSSwCbLiV11f2YhxUSZL6JPbJz4VDBHr4pxokAdGGfLQqx6GgcsfLJqx2BeGkhRTdfjiN12kSZLw",
  "key8": "5pXzeNRa1gkNADNfKQb4j2xSJ3KKqh2VLS91KmS9Wo7URXU76AJxdHna8WZh6AqTWnWwAxd8UbFcX27mAccsrZuJ",
  "key9": "3kpf9Yvua5ndtCuFPDLs9DAThsFat7C8YvZ6a1xi5Hh9WrxhdgybgRh7eAGMMbwA3VxxodV5yt5Z5V7FcyFz4d3i",
  "key10": "5kbTU2941S5V1nGYTDYyPSgBqWakvM95KCznqcQ2spfaeWYjbo2RUnTbwYSAbRvmG9E2KyNU8oacv7sFS5E1s36w",
  "key11": "3NGu5SyZj2qZkChmfkmyoJAHZyEGzQibvGF71oP12HUxcnJpayF6NVehvsDwSHiUxXqW2dgCGUjfCetPZjGrHpHW",
  "key12": "Gn2vhJzirxNRMQ7XtPMuMRQhaBNeyho1kSVfgLFEt22N9crUjEqfKp74xhE7tZ88afa6mAbup7Vbh21fJqEkF6K",
  "key13": "5hxAYDFmNCmZtL1oAj7zB1pJzksmSauMEC98qRofpbMKXeay4VGzjk4fksCppHFGEmPEA333GDMHYwcqvzrmDuPk",
  "key14": "5hrFSXmUBKMi7KErU8oeYKsb68FH49v5qDQp33xbUPPTZ4iYDff4JmVUuphkoHXK8DWNK5qY6nsm1EvepYhJCjAw",
  "key15": "4wUTquVVfnrdaJPEnVStMDKAAyeRet15YyUMTVDJ9U2H9QLcGvyxyUqNtdhnM1BeEDt7TLJajtYc5sAUR6rNkFDt",
  "key16": "2kN1pzUwSbkBZ8v7phM8E1o9SHwrBiEDVCh2YdwSppTuAhBm1apxMiVPzbnkD3mtuPg6oXXa8ZopqdZwZ7kkUkrr",
  "key17": "3bbj62BehiK4ZReN56713am8XEFAQu34rpbPHekvtM7ZRSAX8WM6ZaNkDv6JNXTEGqVJCRd4KG5D53iEbQ7G4DAq",
  "key18": "5EsAeGy5g6baPWgo652PhNE4mT7FQgZtB9ak5AddTTeVFg9WYLchzeN6UDi66gpxwmqmTHXttuTNLcPf5o4FoyGw",
  "key19": "5uKqoTDPSDXZW8Ytwjr77tdpR1rqRjAmARjVxubFJsC7r2EPUaWgMiJmkL65hGpQZwPFd6SmiM18nr8FbGuhTeFi",
  "key20": "4bdxhBr7GzAy6JVk2eY2YQs73kqiBoQc23BNy7niawG9SQqcxdVW6jk4rC6kaE3L4HYgkdHveieVwyDs11D1uZkj",
  "key21": "36fJN7ivi7DCgX4jxncSUNPue9KZd9a2LpTMcFqzWfKVx2yr2aaWseEwCWDnp9qDTFv6JXk12CwSDgnYpFiBBMAC",
  "key22": "5qNo6BQmt1nbsyEypYzQhEd5aGbpRJxymgFwmG9ZVrxiQSf7mU5LHTforVKSobbdXzf1zgPXvmHxdWEidMBEdt7d",
  "key23": "oG8Kkt1Fvo964AYPQjgjJnYP6vDfBeGzKdj5zTAwydWarcoLZomcTq2Pu3xcjydkeHW1NEM3EsfePkg92WStSJL",
  "key24": "43X7C1N2BYJiS4qa1xSav9ACapvAmqxPq6h34c4rUhB3cZLKdwK7Vwd6yhho6pbL8aNLhJqcwjCEuYHRVSfZayk8",
  "key25": "4FVZvmzVTsiJtieXLrgHj9qQexWEyxDSh3C7pg3895L5ngoJeGvKnLDDcspxJm1q7HGKwAoq2nWJZr9Sm75x6SfY",
  "key26": "j6Yc2E6Gh1xpNPqVSeSVyDoRPvFBqJRUbb9KaJ6yb5pSLFUVyZq3jF9CwrR7UMKzWPTcUmjXcQadDTTh5T1r7TV",
  "key27": "4kmFU8bEwaWVYNsgRMoM9qyGncCjhD5kovriEfaGXjM6ycUEc56p4RNAeyWWkvv8GD4dvzviisz9uZGk3L5RrPGb",
  "key28": "4hPpZ7hk2NuhkULgZtXsF1DoawnCQPgkjyWR7QoP4EWRVSFApYcawWWG1Xqmtd77ft8oxoZmC6AfUNuwWyGugjAt",
  "key29": "3mdPdeF2VDZAozAPtaJc8uMEittxKMsubGzZ2ao3cXcsVRahxsp5VXZ9phpDpKR6zTuUVMQNGT4nbqpMNdmTACPi",
  "key30": "5pgSs3X1yhQ1UesydqyotBJ6FoT8To8TeCDfSBJyDgESibSw9RKQiWCxETwEkojxtT4zf7vUXF1RAqeNv74fEWDE",
  "key31": "uSzrvTRA1GYF8HjNRfFR4P9Let2RDUoZN4cxp3BGntkJ6cWAo1qSzJSUT8767qtP36nJNw5fyvmu5HNQo54RTMj",
  "key32": "VCj1a3HhfhFFeV7usghcbui2Uw8piyqGXEJb1aHAMyDqd9fBjtAahx6ap6o2XgEhhunNxQVxrhLwzg7iZJr4g5i",
  "key33": "5vwWyJFLQCZM2M3Mnce7vV56e6MuwUxXKKWmRa7JYNhSxKygp66RfVVBZ6gZ8cLm4N6RQUH4teG6PSkbFnn7Emcq",
  "key34": "GBnuvfZBPFj6dZDjWomJZ8DbzXtqibyK22gU1JJ8zAKx8c7FvR5pxwLztMfmdz5J9A2X915mER8bKs3GNHK1U9M",
  "key35": "7t8wR53mXKCM8nv54jQxsevZiTv7PKVpKcMsJeHKhRAVgtsdTto6GYaqpGYjS7jvyAVRCenArq6D2CXDUi66gCN",
  "key36": "23NDyfHM62TryAQEianA1yS3oHBqjgguU7LrMfSJRYwiq387ueQi9fi5QGiAgqgUk7nKNK48MDUe2DCCgNxdELJE",
  "key37": "MMqLgLh6ucpoVFFvNW53WRJrz2psyR2GZ1N8FcUy4gM1em1anGnjB4fSwKnFMSpDNtjZrvphE4KYegXSGMWpjgk",
  "key38": "3REXF1K5M1xu8bQ4JdYJoxrYqtUrpDHtpYXFwxzTsi3QHU8saBmU8gR4XZg3yDbViKMyiRAHRgVpZrfcTwxUZdKu",
  "key39": "4ChXy63VX5hTNF78Rnhp15kJJq3WheK3Ew18wN9fZABqS7iW8DR9UZ4cbn8bzj49rvh4MNoGhFwM4YcnSSXNgCo1",
  "key40": "2kDVBHrDDpVX5S4wmMo1S8cZQREzeoRH4jsiiPFu2g2ExsNkKcLuZfd8AqBECzCMqHe3AzZuwbhfXbN4YgPeqCCt",
  "key41": "5tZqAc1MSRcCEToSAcpfnwLL63PPEMRQVsV1CQdrNMRFNGoBCwTUb5EC62NjdaVmFctsvdaXd5ch4KmHhXVSarkL",
  "key42": "3L84uFcAiSkhKfZph92Lz3PXBBpZGuESftt8SFfLaeF95xbrPwGAktHapuUDpciZGWp6RUzoazPExxRiEPEWn9nZ",
  "key43": "2uytw4m9YSx8knzyPnFfEddkmzASvoeoxMdmAHJYqfdumfBpao7dL9hLuccpau5eZDMSUJpj71DygMF4Xaow2JXc",
  "key44": "5abB1yEjmMyrXDvbuTpQVGpSBfXkJ38CnzU1vTyrUZrCvsdjLW9d5Nt57sHwmdWS6BRA1Yh5hpSyC2r6ZGjkhDhY",
  "key45": "4ZXUyU6j7dw6Qabc5CaSNcKiKYNLdbQqebD1zFDiXviBuNDrsropW7rz4VTA9BcwGjRFaXckrBu2RSTh5usmQUx6",
  "key46": "vp9Cvr5MqEiDoL6JZQGE6sKMb4a1x7V1YGcofUfXcC8e1JXSUcNoPhxFKYUXnyU3sscqajypsW5dEYccd2xJbLK",
  "key47": "31kpJUV1wP6L7QSWyZ5FzA8QvQkt15BRFNmmvxkbRvjWwCgbQApPtcsEYsq7n1dDGanzb1hptfLzdarEuvPz8ene"
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
