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
    "5ftpf5APkpq3fwW7y5J8VBhpSoX6GRV6MVvPzQR3eFRJiCaiXUZY7vX4rBHw6HXQ57Nnvkb9b9X8WtpMLy8p8hLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iAYstKEHdBDknHEnHc3wNVngxCkURFCnug4kCrzeveVhkbtsbwMvzsMPCXKqGKZ8fnPE61RrkXp5EdHdnnLDttN",
  "key1": "3Q9ALKvqffheR99rFLMJf5D3R9kq92753asErpgL6ExNfWGDFibHATvPaPmWtvYZkJMGPZYn7KYBAh1pbwmvXmmf",
  "key2": "5E8V6gVFgXCjyGXkrVy94hknY2HqvUPtgjxDfRTEsg9YgaxQVPjmuM63UC8NTahHCy3n9tej4WZD8htWFPoQvxtL",
  "key3": "4rELzfzh3R7yA5S4V1ePpyhnbCuK6jq7bpzJF4Yc1KvK5XYmCXUweFS3r7REVQbzZrQZodVCgrPKw8LzrSEAvWHz",
  "key4": "4pqCLPFrA2SN2cUy7mWuJTpp4wRZYAekoxmCCb7QEhQ6QtkaDxrA4J4ptjAsktLHDzQQ15y6XwyiSKJd61DncdoM",
  "key5": "YSVY7T58GJ3ZttfTWY8vFRHEwW2aak7CksYwSjZKXJyJyyyRCKrhyL3qwxHreTeG6KF8QDc3Dmhohdb1EEzb56E",
  "key6": "2uGFDCBoiGmRTA9zXq4jUfQQSrFum9Waa1Wd9jciB5LmxJo5pwHq7QWYXp3DKxxweZCaqPwwppgjHhTKTNsoHXmZ",
  "key7": "4XVQyLjD3jMjmcX5qKv7HKoSqKKJYLed8p6jzbgFf8fKa4D9zVazFVEQsadXbHVvn5WiDmnW6NGZDz2TdxKyFLtm",
  "key8": "5Nh9W5Q3AJZRDVyrxfLP5etPWj4Kus8xWUqAiL36zzoDDNb8kqfqUSNmMQxcsC26aa13QdpZKtrVkUE6cPEBsSUT",
  "key9": "28aDqEQFPKksHFLXRX9Xio6511zszsp7gwmoNitZEyyNZ8cYvG5J7wHV4xpZoJBnnCPFoXkQWaX8z4utkzMKwoJw",
  "key10": "66WLxzjREfFoVdFcVGmvgGUDtnWf93DVqArYLTKQh63mxk829KMv15Ex2vt4uX4tybNw5vjPXo8z3MSvQMAzVYKo",
  "key11": "4Yr6o69itUeHERUrkLZQyvsTvahA9jZ71aqm2zEhcXyfiUHd9EC2rFELvJpQTr2bLpV5VWYsJDLWzTq9wFgHiqfj",
  "key12": "5LS8KKaqb6paFUVMyjH6XfZMijFE9M4WXp5ErsnxJMi1RgBBPY9fojXNt3ZY7sUPCvnq9hFfcb8YmyytLHod1uN9",
  "key13": "286j9D9nYhKYdCgsFE5DfBryXZoqr5ZbViJqYXNid2rCcdadfmZSap8V5u33gDYz2yi11JvURfkNTeMpi93ppc1S",
  "key14": "2e6vPNdp7UF6xQWD8jgXe9vzhh9rQ9QHdyN7a1sHMmgeru6RPvernuty7sr1Rf7Vc5nSkgYCzNdwGVfXtnkDMk2R",
  "key15": "2QKwTWwtAEBkwwUcRzXVYn8YqQ6gx447y61LxRPCxjuKSPq7VJEWHNvQhfcQXkhPNHNux3WXG36J2VpUkscTtQcT",
  "key16": "2gaASgwZk9p4GopHXwnEyo4FS6T143VzbstouFMMY4Ue15X94eX8YbESt95kiGMNJoVdWAGhQfVB29KSRARooomV",
  "key17": "4exmuETVoNr9XZ3o2R4L6G7WhF1J4MKMySdu4o6C9eWGLB1bPLeGsTBsAd5ystHsp8paQ6DHq7pFkWREpkJbuXFJ",
  "key18": "2FmPvPPyThUUZwzZ9noP9rBVgLt1Mf5Xm8YbTSevP4VxVR9nXLbLrCypuYC4K8T8to6aF9YhWZt54sZmzZuRY5PQ",
  "key19": "XJQk11Yp5Dan15aSJB5ERHFXRRdh78CpfVuCzhGJ4mkcw5GpNzbfRsxRyEBnXjYiWSAs54GjZrQtRC8sof39P1E",
  "key20": "5HA7fuVhgGHkrnsK9CZP8aUo1d5UZoomNhz9uruczXjfdwYvMxgtjMbznjwh5iaHpVFm8x3TXQ6eqaGLLsnqVH1H",
  "key21": "438HoJNawmRp1cRoPacg7CJTYqGF75dAj7JgHaZ2UvrT31rBPUGjjDZMJky1AopwGXH8RZ2JchU69EakrJHisUjk",
  "key22": "3dpnGAj8F8EJFVP4WXueMMA4qBG1Y7E5wWjGvMSx6sB5fHPfqvzDGYKcbBPoMZdXoDqtgTw4XCWSZ6inw7GCRCPi",
  "key23": "5AfHSXJPsnRRsCur9ZbAuKUqpPYbMpVTiTisLqysTNBgMvBeggZ7Rb5e6VrXhRxvy4YmTZYpYF68rxj4xbcrjXxY",
  "key24": "4cfzQXL1RDgerVhTZsgCM4pXnR55o2ni1xainzZy6Jqz94TULmD1qpAD8Ewz47rxwjSi2LDeCrMVvYqGPJ926uJi",
  "key25": "2GP2YwZ7ctPJA834jm3DMCyf8rHU9Aw5piBN3HfwDJjzpcAKhQSmEYnVwZpMJUUyCdDWUtf4SSkG66gHGGSVg9iD",
  "key26": "4YHC461h48KdJN1TJhFVFBtu5noZYcSKC98B45KRY9VycptHUiaZSTBP3JYEaWuRaMDx3NB45RzJkXUZap8uobYB",
  "key27": "2vnYyTN3y7GA1n3ptWXCqP9mMB9UPkbPZBdnUEh5M6VzP35cxic8Wmhfi4vZgZcGHJH5bpLTG529yUB6RbouqZs1",
  "key28": "2ejVq7BJ3AfgXouJDbziJjZaF2FkeThvYBMSe94QTne8HDc1PqBGsB9L2WThX5C5nSjMYgsTukQCaKgCpaHUrRGw",
  "key29": "2ALWo95yrEiaLS4NGWKnLm86Gxr1sCPr7EEEycFs19Znb484mzzHPfaBeQRBQK561E9uf7FMfNRbydpJPKuHmJSQ",
  "key30": "3JbJ48CdE4kLad1T1ziMimkJXZ6ugQjxcMWz3XqLbquviA6ahwYboux2Adm2ApWDN7m7omBzGXV1fMmpg5EW1Rrb",
  "key31": "3c9xCMpFwh5VKD57Sbp2peYHPhCoz4ZoT8P1iVV3DVaZzB8kz6xyRgLuhg5YvZSPi5UA9TNE3sWNMpPhpgSDDW9r",
  "key32": "32z8Hh5hXSKTDB1pP9Bf2j6ar8JCDLqLSQBSnrWmxZd7GGVJfjfectrdYLQwAexhLbh3hmvWxQHywZWa5xWhWiKc",
  "key33": "34v9n7rCUauEMo9B9w1x23zXgvv4aFH9f8Av83TjyZ56fMmpdRscBXnqwdVaTfFee9WYyW4USTkbyFv67SHNHC76",
  "key34": "385E3N5XYNAV9WhZZP3tTiU2d6TjTUm65MnRm9vJu6wNpxUGqZMjyx6dwfQ2m4xTeydq5Zt7rv5SaTnSZyTBHeuv",
  "key35": "21bGjdkUJB8474hu4K2UadQj6ks1jhE2crecJQq6t1jqangojYXM7VGXxEjZx7TYGtkun7KymuKAoLzfRouFkdoS",
  "key36": "3o5vQPY9zZdeBHKcmpZphnTGbKzY4bDf7gdg96Y5LucLMrTep1Yeb6118CA1MsE7psFkVy9c3Ro2NppTqqWMvLcU",
  "key37": "3ZicAhF2x3fHvBBXy5Azko28b2Cg9ynbgyrZ61GHakfdujAAWEXQrMgNdPMHE5Wrh62VKp8cRVm8bgL5XF94h3mX",
  "key38": "5Q1meoa16bJUeqymrbFco2WzQioUuBtx8cR5Zf2KbX2C8SqVjUwJ9t3ESi42Bp48YakJXrjWpHhsL14ua6phyKVU",
  "key39": "Vo5YQHvx8FUo1bp9zJ3igwBhnsTkjCHDJBaXEPwbsHedNjQbmWiaHMCCp43zDzrXz3i29cZkRcGdrietoG2KhqK",
  "key40": "448MJ2xWT7MypSxvAi4CWceDEqfg1ZUoLd95iuadnXVf69YqHb9FkqFsyCsy3jeQ83fhVtYtFT2QnmquHK2WwHwC",
  "key41": "QJnp4EAfVpjyQTW93UpzgoeieTDHA33DWisSs86KbUQ6qqDTpVxCQAPZ7Kt2Uco4cj3rv73YQ6D6GDSuCJbK7bR",
  "key42": "5Spqfj3eRkvHEENPRkeeXsMPVq9a4LzfHpXbshnK2Q7uWoR9yBBpoH657H1qLrVkiwShGafbgAKbfPKkEMJCwE1z",
  "key43": "VxkVDeagdiABQryCS751p9YYSk93UaBGwmVzkSJofbPWB1yfp5bz1AzNE9YAYo9NhhNiqsiAvrTDjusG65R3qyK",
  "key44": "3FYQ7Atc9gEC13mTfAM4rKQf8cJpwHViYkByyhE9Poy7CGneHQ2ZN8EVLSemBsRJrb3Bi6p6t8WygtksQ2EcZStM",
  "key45": "5Z1HoZeBq6sTWZqpY5VYrbMbsHG1ToASaZjmso8FLMqXUmbQpm4ZRPLXEFV7AyQ4WRx2MAZPgGkgZM5NuvgZaCu2",
  "key46": "w6q2n83rzpLHe5hb8EnKMtYYxtetXm2imdpjb8sS5gsQQurnnmLCQZqCeZPE2U6q1M3QAhCNwcqUAbvSiN7U7xj"
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
