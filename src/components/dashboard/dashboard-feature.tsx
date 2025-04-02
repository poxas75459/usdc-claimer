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
    "3mWqi9SmvLJTjwRLb6Ea5f5SKkbZ4xYGLbDft55NrjUgnEKDx4qwCZ1J3MakZLZkU8ghqkC96cSsjSwRtbgnHxVc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z97xVkf3Etbss3vrUx7MELmvrxg4v4isxAy9RSvNfmF8nXM1iyvM2kioArnTcDmjB8a3AUUxxFkiKhNeiGg7QHe",
  "key1": "2Zmip9hMJQFg9vJmvXyiqPLjWhD4uvYNSqQAcbWvb9ic6XFkaWgmsavHmtRgL8j9DANRYJMQSG563PfSFVD7xBJb",
  "key2": "Jbxm1uKHLAqCpJAgKYYRNjwLRdo3kjS8PWRK3w51rR5ksU4kKHGb84Lek9XaH9qeNgCt3NsLahNpoDpQUyuS3QX",
  "key3": "5sKp1aD2URTVxRbbSTL4ardAKxPvLNZhzacPtXvy1aXLBPjGFC1eKjwnUDHu1DqxKHtHx4MVHLMADM1qtGMUDDrw",
  "key4": "4rg3RrBY9wgAc2aazSMBPQoXds9nuMqwP9Amqd4sEw5srCH7AEtjnRuVnQWAikP7NiEUSMAQ9Vqofmq28xKC2AY3",
  "key5": "23EREmMGQD6cUhT8dyTphCrx554AATsCfSMfeVRev2YEHzdm6F2VJxhxHtZqrBDTwkEpsftumQri2Q5dHTLHUggb",
  "key6": "3PC9HYixJKvpESM3K4i4PYQdiq4nTVz69Y2GmbunX5k9ugVPYPUeL5ToSU6SRqeBv3DVVz4r7kgwKQjnqQZ1QXzL",
  "key7": "4VTVgVfJYTRxG6VjfbifixZquWGFnLstRnTsE9pMP2zAzx8ZbUyyi3Sf3rvdr83mdn8zqC2ryCpWpKahcJcD687L",
  "key8": "SzGdUCv3fFpaGZu9QU84Aw9QZqxDb5nHKGhb9KFemyVxXRFyKyq9FdpbSvQWyAEWsUoMXatJ76vYyXDLMgiR1kv",
  "key9": "3BMymmZ6GNe6dk6MGC15Q1Tzm1spf4GnPR3VsGBHGns5fpkXygwtvM8ZwuY3Qg6gawaSAVvuczY1TxMTMjTi4xrk",
  "key10": "2Qi97YUFyTDjcHVnUERedHx4Nj3fYj1fi3kCAaTHrCoQZh3Fdtp3TQeWgpGTzMaJqEnKPVmzc58AUkYikqZJ384K",
  "key11": "fBuxK4BNde4UkRQULi4VV2xsdth8iD72u9c7VBMpXP5fz1wztebrYzpMMSCs9wu1roHSpLjXcQwV3NP1kuTMR93",
  "key12": "4SKgbdbP9iLP49hQXMLYCDburMHX4ez94CdTsu89rZWd1GjBeXEkcakZwKJkzUqyiKvM7sL3wpr2bo6Pn9dgjy9B",
  "key13": "5SGEC4ejvYHUAW1aYGjyD99VtnyBB5sx8dtDnCzFzcvM3ASxXYuztcvAwjbDjP2KwFgwR6eVF43vRMCeyDieTqok",
  "key14": "4jTp3F3S7ujUdV1GtMwMWtvPnS56QBMLSab2PSfc7XHhqvPTJjXkKDoRksApace2oGhNsAdJYEymSf6rAhsDDfrx",
  "key15": "2L8E26PnrXwRfPP7aTZQakAsTjYfYgL9f37cMaETvUoNn6cjyXtoX6uSuye5cbXAWLiubgmcXQG6zSgYaxDaPx3u",
  "key16": "HK59cjAAhaD4a7eu7BvfJd9VKBv76NaYQe1zu56stWt49xgs6BFaxZDwc1ANExhFjDCaKs71V1GzwbEYrA54vyS",
  "key17": "BPiySuc7U422dLD1jmhMpNZzRtuzVHnVLJvDL4hpgrECBPSD2TQy8zBv4tD1d1nqjuddQSGML7CCXeKdkQoRLRX",
  "key18": "5TupfwHWQaUTRXn9mFwMJwX7TRxBx3UtmTbxR5jpApTU6DcTzbLVci5i635bKLKuztkRnuVXhZFAEG7M9BY3BQEg",
  "key19": "5sgYpncEYLSUdq2eN1rDQYvFVjtPwDVuWncvWgrMESMv3Z9CBY6caiCjf4aGJk25nwXJiv1Q8ReGyqtg7mafNhte",
  "key20": "5DCP52W7bn1ArnRuWgu5y5eGhwcGYYHvnjTmiHvXjRMV9JqLxq1fWnrJuubqnbYuPzWYYjz37E4yWhv3Y5EmnbVq",
  "key21": "CBPXB1BKonT1EUhJTGgekjFxJdfzYjJQUvxsRYhQjuGMXLa8sRyHa7TjR8VbhAhg2BWRSLtXZdLTjN5T4kJ87hr",
  "key22": "39CFm6Ms2xutc1or4tj4B64ezm1VGLsSrpDrSexcUTgqFe7rfmsfpL932BwW349v8h3tbL5aktsDgKsqGWq4oDwA",
  "key23": "zq9KzuQvJbULzn9brKBUHZzzK6GzbmvYwf83UKXdLNnfPcKYSE6pcbbok4t89gAcsAfHy5b2GrwZPTdaFabUTyK",
  "key24": "5atoVJq6NX6nw3hcPusuJExziLPQkzBzecfemVMfs3BG2dhjvUmXtMXQ6orYXexGkCWR47XAwJQyZ2WSrnbuk8nC",
  "key25": "JJaaSJ15xtsDWG96uosr4TtfxT7KYdKxhe1LbgmCpTX2jWmS8NJN5NagrfJ7QKAEgzoFEHtcXxer79b4bTdFa47",
  "key26": "2QQB888YBkZD9jqXrUQ6eseJB6THXLjh3jPApPRSbhrZPQ4MJNPpsmD9Yejtfh7F4xZR5bgjGhFXjDQTjDsVRoed",
  "key27": "4yj9fSLBarz3QeP9UE98SWdV1bWGrPkp6JyX5ZBxXewacbDcwNmwjPgFZsQh7bmYwK11NLswa3zDZLUedMPWftkf",
  "key28": "5YQABATqDTrpnfiGcLj4A72PCL5VdxNPfzhAkLRd9ujHTt4hKHyk3VpnyAcQzyKji4cRbRj8fjrSEpUyxbQkTVWx",
  "key29": "4kXbWRiiNcrzX8AYHhzKUkjxHHTyVeFBaj6Zh7uRjyamcmf4f5MJ4ocf5kYY9cAyNfxf8k2gw78mexxRoVkTfWMD",
  "key30": "5XZWJ3oWqEFuCgxBpNiu9A2zNyK1E9LAW2Q76tsS1wFJpmuBkycequ8KgrXCC1UpAZAyyJX9peELhZkvis9X6fNa",
  "key31": "2vUbUke2UMt3cReFTQfSDo4w7xBhtcSrjKV8hZM9DKm35XBpBfXPfcJg4rTruyNVAvk7tC8warN1Abnf7p7gzybF",
  "key32": "hZ5cpdu9hSbKfeKv89SE3KLsqYwQEDZuJftrhGq7XxnFLUxmyU67dmeYhjnKgRNB29NFSdmyX35kvz8JmSytW1L",
  "key33": "5B1Z4FP3JjZenqxDDC89ZQ4FKrHNFfmqazNXZbBhARGZZX3tesmYiAGsMLNuAWY1PyBBC7iutsTEpBcLVGwCmrtm"
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
