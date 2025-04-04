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
    "24ydKkas4ZotDBz5871f79jp1kgCxGx1AWJQx4GnmwkuVpX29UHETWq1zDZbEwR8jxCU3ivZjCizKHCzbkkdQNYe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iuRia29KNZvm9joHy85jsVbNVBqexD3K3xPn3YfFU3svT67gY7PtXNCwiiwMXTphfd3gSekLpWg9AUQmtARrWh3",
  "key1": "3kVT1JTcqfrxfefuWdFGd6gsBb32mtGSrZbjumcq7kF31gKFbvUM9ewGmpuJaxybor5Qe6znMBZrkMwnSKrU8k4a",
  "key2": "5SVRWrs4WjtPfJkkNMJPgGxSg15cm2AVnL4FuaXDfCXna7qKSHMhPiE3p5bGCURk6tnMhaMvA3oCmjABm2Fir5Q6",
  "key3": "V3hLXZRsSXE9mmN9tdW3q8yCE4hq8c3fqUBK28UvoYtWUUyqRqieaRUYRKgihxEC6CMmWnTydX86G68jVfCVyXM",
  "key4": "33WyLTH8QCpkgusBhSZbWUDi8swMSCgRD8PPwtetG8dpz4iyGh6YgaWC5hZQPR6who9whcUz1UBkR6mWMyJMcdFU",
  "key5": "26jbFzQrHTwvbdUshfCjsJxdJnVETxYvZiLxPK7at4L12q5gnUzKExabj93982Z1BdvGBt7Ch5XyK4kZ8He2aq9N",
  "key6": "5CZQ8RxcNEhifo2hdXs7YdpvJRuNqzmiq3vrG6Rozg95TK3PWoV9VxwuJU3JVw9eRfPCefU5DEJBBQnaZWAQd5Yh",
  "key7": "zCMMj1265XcCWmnreaAxzYQJ7c1XjnyjcPg7vuAiFJCh63bnxNeMU4cqFTWJ64snZjKpoYiNURNSEb8AVfS68jC",
  "key8": "5Sxwnsxu6W6m4oNSFLiw6Sm1mvFhG3h79A8ExSX8vsLHGDUyWdC9gZB8HtV8167rwxEMUCWMNvsXcgjdZhNhyVXk",
  "key9": "sbefM1ZKuKCxTxM9QBRDYsdRvtBE4GbwQN6Z27QPLYH7fMDbbxpGcYQyfXNN5qcJnq3dPMtGf1yDt4GN8wtoJvK",
  "key10": "GVW64PZy3mbGQsdi46v1b3S7ESFRxvr3QaPvZVji4e2uEAST3WhWK2VeJz7Hvf99ZPo2EZyu3YZe6wjxKZ7wGEm",
  "key11": "vyExRr3TyuP8D3YCQSVcfkCvkkjvnFqxNacZmskKwruQHykt2Az8LpZUyzH2LHtApm4BWet8ZrM3N3aZk6tmxwZ",
  "key12": "3gWm8NyCUU4qnHdUvkHgZzypwbfi51a4tTVkMeryKdjebUivcU8KHU7y6sPwZS5HnUwmTmitht9yzPZDU6oXJeWR",
  "key13": "2gVZejdsLm48CqsVh4JMSnYAzBg649wiPFHrFzppbAT4unxfzLJqXAvg2Z3bgEK4kpsWkwZGyFcAnetMP8e2fGK8",
  "key14": "47esjoit5YGcghcJKY3UTaLyM3CeBB1YdwLcmWzRxo46iERtpxKuqKJy3Rh6hCCHT3EoVnhRXNrKiU3QeyVErVWg",
  "key15": "4J4Xs23xJXCE6JeWCsaKvpDDzx1pq9CTkxBW6yxrohcveDSRWGNLetyHsGBh4DAd8Xa18ZUUnWJ8hErz8TnZ5mUF",
  "key16": "5fAQeBpRVfUnBzCBMiYAdvhDKHZMVqkWE2fBiM5gw9afunZPANbGAEJaRU22wEJMEwcyeuZiq4xRTkg2XQfx1Dci",
  "key17": "65ss6dugjYR3kf3o757P5kphpXj2xZvCtZecbtP2m2xMXNwvs51cH5SHs4Fax6BZnofA5qupVegvXzory1Ka8CyW",
  "key18": "3JEn9qpRr42vSpznvrZwedzoYmAh7GoQ7PYM9zoWAKTFSrx5hSkkGXHiyArNFswaRV8NfAEN9ggttJLU9SvnuiA9",
  "key19": "7VmTBXrirTciuyvaLrjCvPPdt9GpneGwcK19s7ut9hWBkwTGUsHtmhHnGaC9psxCWd6t2QsaLgxzg6SUcLiK4dB",
  "key20": "5Gg4CvJRotMsc6ZtcbpDrtTFFzyaypaFan1v4L5FLBbk7k8Qn6F9SW5FqYE6Qqnzvm2VMXed7NKeHZeZXtERZ1vW",
  "key21": "5h5sFAreWFYkDcNVyVVAnGGoZvvDCsXmV85ZgAzxEoE8cTd1Ye2WHW34hH3DkFrZrscp9cmcNwDMiS4GPJiMirBz",
  "key22": "5Ym4GE3SdwYg2gVwomkBndn4BfgQ8cuzPbJt5SyJHK6jHEHSZxmTTo3QcFohvA9HreVPuDSY8Jw27FjVDkrwnERs",
  "key23": "221G73PKzHKB8MPzZgmiAqh2PzLqg45bRe5zFLG1MERjfm61kbMia2bahvESDiP1ZoMnhhpL8sMaTBGWPu7U2Wb8",
  "key24": "4ZNj46bMbcBfKdypxoJTMZ9UB4Xr1eZnss1Koc9jMXpTqLzts9DhGEgC4zRFpAUADPJ5xhNAmZceGpN9jdx3VGRL",
  "key25": "2sEMQXSQTKghtUbcui9vkrrBq75qjjHTAZ3d5ycCUiDSoyBroL5H9zK1c22VgNfQvXjX9AKKb1wFEYFbbpNzUQTk",
  "key26": "3ps9wZNh5H19tVo8tt2TLAzT95R22dYLjzJb9UmiBYwfkGDZeyom5mqYeqsvNueaU2AFsKojtVceEDr1NoHYNzoX",
  "key27": "pEw7DVycwkf5671nYTsBia6YE2tnYJbL1LdFjaJ7JaEFpg7rLQaXLSnYbLGqbyJuvs5gQmr2dSpE8T31jfDgNge",
  "key28": "2LNfGYpMmFNtcTUFzX8LUXgjnBLVtHEAJtFESUK8uxwwfNH5Q2QfNQCLNs4pEcYEPFkbAhkBmAxBNStS6UfKvFpt",
  "key29": "4ridSFScXyq82qtAk2xAdNLDXVThxqbLYVCSXw7Hs6NswzNgRy4sgcPdVmXByWShZuXSZBrFkAzb2gMA5Zd2FFEd",
  "key30": "3sUFJEffYT8iaY6CK1WuNEXSPc3nVwgrWwAdQeBd2ziXX97vFceEPtXau8Vxn3jSica37H5kjtzRcgMcefQqN49A",
  "key31": "2Xms1LheFiS4gB2mXLgtBaWqKAnBmDPAh3L4rycRbfkzX6KMW6J5JT3FigGqNBPr4YeKkgLgK4WiiAUoL1kkfbYC",
  "key32": "2M77rcb5nn5rSC1i4qasTrvDFE6MH5Ef5LeAsEMSPhRgtoxnFKt6nxASRL9sHWArcB457fm8AJYrsDidFS6CrcjT",
  "key33": "5k3omQK9N3zWiPL6W2SnSCT4zdtm2Mmko6RfXbrmhbjW2nTf9gy5ytgifxjrkEtpWfsbQystxn5Vdu7puJTS3whw",
  "key34": "QhxU8pLt4dPCr2y3N3D3xiqeQ8pwG78J8kaoUcyjZf6uFvsPnbdT1hx7u4WaLkjRpLahssBfn2MnzazWrJf8nYP",
  "key35": "4ZRUZV6iBViugo5VLQHPHMFt45vrCkSMc1QmhJvrq2Vpvq8VkvXAcAjYFxzPad7zLckGBSKpc5moMZMnWKeY2waA",
  "key36": "4YRunpMW4673nD84wMamkbKEQWMgHk8G9T7JmyvPStNacCwEA5w15yJxfdmgewDLzpezkWZjW1RtogwFBeERsmv7",
  "key37": "VMwAWKjQhBdZYB34wk1XbkgpzSNUpuvH34FdGPBRqc1i2YLpPZL7vVDf9XNe1poTy2tiba3ZGYBg5B1PjCKT22c",
  "key38": "3AU8fHZ1PnWKM6oNB8LKNb97NQkgzFW4NtJBjMoP4oPHP7xWRsFYm1guyBKofbo4n5Byp59SEy3N2eNfCdSs57Hs",
  "key39": "61HD6KicFQwiP7v7bc3G5XnYdUwro1c1QgXEe2Jm9kY9v9fXt7iBUViMVyv4BAxydGBS5FbYN39P2c4FqAJ2hj4V",
  "key40": "5oeH78mLy5vXgvXfctXFYyhmeGmbNhtqsaUJXdjsoNauSd2MYGoMJtvpb5Tb5siAR7hqwmkx4pQMsUHzQZm1YUbc",
  "key41": "2NdkBk4iejKDTUS2gPcNJF2tti4eXLH4CKYA6WkyTnDsAqd7oMo2bXHVP6sjku6MpYHTCNbvJE5t54di4ZDe37h7",
  "key42": "pGRHjxqGZsmkDtcfxJfvt7rauoS66oW5NkF7GHc5V4eihLpncsrtXAs4kML4oxs1GdqRYpBKKT6SEGnXTXobWk3",
  "key43": "n21nCMr2cdaWZarduss4RRNVcqqTjHXj1Zg4xyxNe4vCvTr6oAGw1oVzpSawCuL2XUijkvqbDx79K5JZ75k4aLi",
  "key44": "ufDrUgTHJqs77JmwgypSVbb1sBJEeESTXqXhDSzvPQN8qMo19GSMGsCEZ2vm6A8huu7bZNWmLLXnLZPnisfjeCx",
  "key45": "GQUJXFVe2jb3Jc6sirTatBaUL8dLpoUUvvosLRKMcuouZ2Z21E8r7ajAKMADaZZahaLHMdhEjvEd9KcTy6e3z2i",
  "key46": "2HrXju1WDc8dmmWgPM9BDKdFZEvrtyEo7BBC1x6gKknVsyDWK8cBhe8r5dcr4RDbP6qjS48xKqWdnXVB9eSByk2h"
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
