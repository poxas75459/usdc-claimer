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
    "4vdKRmEkzztdQ9j71jr2rgv6Kfx3VSSBm84Z55ZUndDgwKeQTxgqpwPLAtejkSsWBXjPY1ByXrs86Wif7dqA3wNP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sasLwVFQyPnHYM6rt4dLAjXcKKqpnQkFQdoR1JE4eb2Z2auJdZCgJ6z4aguLFHTdWRsS81M9czA2wuGwxkx6EuH",
  "key1": "skBofMkQ3FvqCQWPkPjE5gSR72PKXt6MdFsVPtUv3xn3gasyiSMDjd2JchMvdUFDxHgTJGBptmLFSMdzodLBtAr",
  "key2": "2QJmXLGRHDDwqD3LnvZW2e8nf9oiVJLGRYaGyfzNEYifvV89QP2UPfTaWSQD31MncNVaZbVdvGNFVXsXsCqFdEXp",
  "key3": "2UqPTFVLkFqBCXREaiQz8B8XzTt1c4J5DGCzr4Dzd4U2ZoNTV6rQEgqcYH2NeqeS8wQVk1PtG1hYvUD8PAKuAqXY",
  "key4": "3YqoiEcALscfojTKYvyMtYq49Y66MnX1Fg51oWRuwVmPds2uxoyruduqqArWBM4qMJLkRJja1tfXm8iDhh4A7Zvz",
  "key5": "2ccLmkiEziWK4rCEKUJZDyM6apcpmj4Dq4AsF9uLGoRi1ve3ek5YamQohjRgV91A3nu6bmz8L2d8dSEK9ntkUEhD",
  "key6": "3NrJbvjPE5oqZHY3j3DGK19MPMqyDqEjciMbWzcDzhmJMQS7h9WoAoW4MK9Jonfm78MzKJHe6Zoy8SNcYfSwCrtp",
  "key7": "qDgamVRfeoMdKtLvZyDzJpszxAywDLBo969Ve9q5uf47C4wm7eBXFdhTWdT3sMJgDVo2etniTXpC27j4rvjnUwB",
  "key8": "mF4BGe22NjEZF8LCab2ajvYhUTFqN2fe5KtrtKCiyALCAhGphPWrmmSoKtssUFxgGk81Pe7LvBbYJyqtXDo2yXy",
  "key9": "5C8u5F8cFHRZ63Hc2dNgkG1sTT81TGVri6mwuVBjPKmvmLRQRtQGGhtwjX1Fz1LRfSiW7RBJeYThZxD5Qqs6fpeC",
  "key10": "4xWsE4HsQtMuDsk25XEVHsbBcogTc6muLThiijEEeZ6NQecoExN2e4AJNd1guM1ovhCNFjgnjA7BMrMLeKQnL8H7",
  "key11": "4ZAHnJKAn57pCgPnCkJ4ox2zjQXbCRWeKX6xhLHdg71gf2x4q4pzZjkxsbCdJFvSgEFhvYWSZbAQWfEd4ZPNyLNM",
  "key12": "3eaG5g6fJet9QkBVhLX6sN9ekHLEXRDGpPQ8L3t2Eo1V5gVLdX4BbPxPrqKtHUd8AaUi5whupB2Yv52SVpKgeNHU",
  "key13": "5pTD7Koy4YnNSzGjPVvzfekfYnCipCJcXwxfvNc8rhnQJrQ7Lpx77aizjt8rbpYW2WE8QcNA7WCoCcpqPWeFUN3A",
  "key14": "3omQm35qUqLGendQ7JwZtXii9pFWpkNdJkGVuHCeJ9iSSyq222vw8ZtKyqPJAMU7D8m4xLM3VEfTKQsoSh9to4Mk",
  "key15": "5sD7rZgVhvVK7XW3sGqh46pbVDCBQCzAdbjyTtDxXAb3Vpc2i4p3PQmL7EBRLr7rbkk5yLSNZsJPa4Ums3MD7hug",
  "key16": "2prCtG5LDqGiqL2JuMpbaSspXyAthKX4yzXPUXPqdAgrTicPVX1HNBDTJZXa3mCyegpgG4Em16Tx4ZiLzv2ZbuvZ",
  "key17": "4brA3vq1Uf7EgqHkazoHpco6AQurCsktN2H2RKCvdcXwVM5NJWLzYWotgu9wK2modkr6L1M9FS694YmD3jQahbUC",
  "key18": "4t44MPM5y7G7QLjuxrZoEmXVEZ3xG44BbH49CsinMZqXC6YhhmgeEURzkF6LfNcx4BN4M5sJAW23De8uo1U8NfT9",
  "key19": "5nnJuAHQDZUsX38fBryMspft5cxcPE3codZcYLuVj72Hp8GGcdCBmEGw53fEJPsJbmpvKys6pW8mECE1PK2uQ8ZL",
  "key20": "4UjJ26aDGzPjA6379SJrmyKGNLABT5yAA4sAavbHiUi6NVdxxgw9UUCPQdXXmZ2RRiwDeSU9xBLLNAbTK3RyHwK6",
  "key21": "5YeUSbXdB8P6F7XBuDttQmQLtSxjpMGRMRkTGgjaZapDPWh4AvwPffRKec4GsRH6j8vf3mkGRrapymBXEU1Hkpmd",
  "key22": "5FA1DdkuuZrxv48KxFR6ftrJeaHyVyaXSUa1q5z7wSipsk77da33e2WFfbNgy6GFTPqfUeRXv6MG6v4aTDJcJcBv",
  "key23": "4EwNYiphtb1PUkXXDbr48gwvmMYA2BQZZPmFbrBAvs8rjLyRgKVEQmRQmHeiTTC5fKFS9H9S7yddasMLUgM5XJuV",
  "key24": "5JmJ8Sheau7UG2ZsCjwbC5bNsnKdHAa9gXhfPWE68KXwaufy28L7AFPXpupuCrSG7GRS1o6bJZ3t1h56ZnKgr2AV",
  "key25": "2oqsjcXbrX9aiE9SSAz3nZjLbX8rRwWeCfe8iCL6YsXHH6sPvuzWhgdq2wraDohdFKmW88oXKGUffGKJFa4WYz1U",
  "key26": "5KZGhFNuHKyJLA1n7QzqxMBzcH9soVxb7Dwf5cKLV6i48rXESQ3yi3BzwrsLko7FeESixp9RXRojj5JRygk5M3FC",
  "key27": "4zvuaSkC82YR7t5ZHirGyhir31JmtgyuE8dN4sx2fqPg9mfKkJZnr2e18x4xFDmhgsB2UZyZ3ykHGsjzRTavXCfK",
  "key28": "5PyTno5JQEGCvGauRGk2oqxyCm8EvFav4qvbKFhoZkewWhtzTU7Ha7krj3gQPGwdffV2dxjA8a9FEGhFdMBJmagW",
  "key29": "4trz35ktcR69qvi56f3SKTf5aXM75ZiZZcqWNaX1vqMAuwfW3ikt8zVDWWsRRrWyR9G1BZ1Y65kQW4WTtkVihiVA",
  "key30": "5ZkMJxxhCAaZcKVzCdgYu5dK6FGLu4GWwU3BYrWrZ7GtJK4k2LX3MkaqRvpwmRyD9vABaP12JJi1m4DoAvKmVEds",
  "key31": "5DVs3VdWZD1CqmiZyQpUxJV2hZFYhUg8xKmec8nTzh9oeBPzVYH3Xh9RrzVDuC75wTT1i2xeKAmhZRPN6QH4Q8dh",
  "key32": "3yVowRkqhzKriARhT15xVDCNE2yPhuy2wgWUXywdvx9NEGF4KBFvLfZFZcSNtMHuKam8Cipk9obaCNe7wKsYPhA1",
  "key33": "2yZg6Eb6uqJCvLf2xW16sG75rCFZKKVWcdf8P2KXWWVVy39Z4M57VvccawVoLRXJdEES4MseYLEUguGMc4gffKbL",
  "key34": "37i6kr8oLDZZu5i1cZdG2DMzzAYxA41hfcGZZyCPT4AdhbBRF6PqeTa8oBARC93pgMdG7dMX8iVJjjjdzZzLNHx5",
  "key35": "2kJbEL68Kd6GrptFTFHGyDjRXYww8Q8qqE4tPrDUjGJ6iZX1ruEYc68JvATnRTrAayBeC4yQwg54QKS7FuqQXbLw",
  "key36": "5jTcC3YjUBND2WEbsZgEyhrNLA3vmojfnRCNq297rNmo76VmjZgqfMU1f3KrUpLLuXpoh9muhqEUJGKiY4M8iyQ3",
  "key37": "Zv7ScBWpvCNNGjRggbKm4KsfRTPGP8YV2zk7uZCw9Z3zwKYfGziVpipPCJUHucUuFGjNBFktZ8KFC5MpCYZZKpW",
  "key38": "3PMrsddRJ6f6PsmGS64TMwoEffvmqa2K2CrpRuTAbCQePSznqY8hvzz5F3DcXLhtvvNEQkKigTuXtfFwsiibTePP",
  "key39": "5V89nSUqdpKtXA9kNG43HHsXgDnCmX2WdYQQcfYABkX6aGfqqLVLamCBcjxxEApMDSsGpFEjuhUpDpcz7RVwz5ML",
  "key40": "4R8ugjNBJQZome4qjBUx3U4m7w4LjVfeyt6bB18eH1Szmue9G7ktJgYtzQHXvBaVSbs3uuVqaEx4kUQPPT9rLnck",
  "key41": "q6euBcTRJ3pLPf5iGt8p1pKS5Ro3Txw71SnYL2PMTLVKpKttZfZWKDX4SqVqyr3c291xvjdQr9q8S5cpPZzdG41",
  "key42": "42fCJHpTZ1vkB18VG24XMEM557xnXYFWwbK1R1YBAaLyEzMVBGR7JrWm2y7ZTBNcXrNLxfdrgGHoLqdn4HU7sFXj",
  "key43": "63kLBL1664bn8AjZDLs8c9scSnBKDp3fbXCymSYvcNKZaNKvPNNcqdFEQYm1AihL93JqAMrNh1eYeWgcgTiaD5Wg",
  "key44": "4aZQxC7L3nvBqgLrd2pVe3mkEaU8B8fjvDPpn8BtQoUgjw99mzao3yKDdpwDgEu6DmVPyFY353MUYBGt6qQWg1WW",
  "key45": "23Zbzg9uBCDUQ3mcSSEJuTjNNnsCGdbmogWtiZEDu4Qd6fdfDQaCSnraDeeYQjGs3rUMPXtn7Q6pBvJyCjc3yidj",
  "key46": "2nzCTJkQMzkNZtUAeUnwbDHLr9ddnou62wiadT7rakkWk1fR7SMyqN1D5YhPxWZz8ZoARzb5ebfKmnniBxAMBcHg",
  "key47": "4TgftB4DWssMknVCceRmY4Va3o85bWud4ThBKE5JUkjWaejZBM8hFjdGGcGmbVCC5FpZyiHUfjn3ZCvfZ7YUF9pq",
  "key48": "jPwDg4hLcpGtX2pAMJUD8bvGYGqpmX6ZN3RfS5DXpSftTspkDtMGV5WJxkskTVRKU33T4iiHUGrqJHHgdMbr5ev",
  "key49": "3Sf9N417Dwu7PsbWuhqAAct2VFYr9XkBXmzc5JP5LafycU1xY8DF7p8mxuWV36Y9ooLjAN26PkcT1f5BeuDffqWq"
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
