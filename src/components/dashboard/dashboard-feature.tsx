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
    "3iVPCmnzYhFYXoKFLAuZpfUTMg5ig3kYuEHLfiFbbyuze8KF4XEkPC5pZcchFmnjsvkFhQFTnEfKfspxnnBXyLXU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t2MdsiV1GnCjnJa6FZK6GMG2qZvGWjjBHxZjYXo5VVPJpVVfCPATFYiEq8qHq41fsuHnuH2V2TGCggY9eWzqjn3",
  "key1": "4k9v9TTBuQoqxefk7w2wKAa5NK4ApRvs7P5Q4daiX4Z5XCHFhC7LhaRrUJAZ8e8k3qedHDHmq2dFiByYs7XmGvT1",
  "key2": "34MQzKovM3mQ2QA9Ej4GhKusaGR2WnzQDBqYb4RgPSL75PJMxx1xSBmzHFqbnTsjBptgt24WkV7fu5iVZNAtUUpx",
  "key3": "5KTqAWsAKMveB2f17g5pjpwpJb2Kf4UtQ64bswKj9Wy6uHoCgVuyhD3SmSGxZDWmj6fg3xUfJjWVnSozT1DvZQry",
  "key4": "4eB5r6WoeKPdc92GGhPd5uvNRcMs27QJHECxbPGV8tXD8o9vkuUTFNY8ejs8VQcvT67rUe2mAHRVduLdaeKCtrhd",
  "key5": "4nuGSoLE8gK4h5thYBtvPq913LWuYVmU8SrHkiRr2uW39vS7eJ8UCaQcTqt8XSa5n4MAfPnaNB9tRXY74t1QBFwY",
  "key6": "5JydTfzcHvfQASZ4bEoS1Qx8azLopTtd8w6RKE9GY9F7319GmG1Y5qMmgZpdCkYJaP5oT8r77UaCb8y99FvXDH5V",
  "key7": "573AeA8jZ41ZiGg6wjz8s2v4UpjBas3LJk2vwPjGaow9qjzTXAL2sFPe4oqViJSmiVtKLJPrJLF7qugWzuVWmpvF",
  "key8": "2JWMTbYZsz4k7uDCp83yfHAQt45JDZywohgnZA3G9adxG79yGgwqUr78MiqsCRY6BdttVqdorj5PrdL5imbtyZyD",
  "key9": "59rdsd74ZXZyBSEnUGQo7638cCCpvYh2yKPKe6JbaR7tmF99apiGaHBc85UbQobyBspH2za7zMRnj3ZgQecbCNDp",
  "key10": "3DMGedHTF8CLi9iG1RavNcJS7SjTSRr93pvtfxUvumuoX3LmJjwgQgGtHK9xajTMSgEsRhRH96KukD2FyCkP9oYS",
  "key11": "52JgrjNbk2JkDfXRwFxCAVjN2f65z3eVWYUFD2PUacaBBELVUv1yoR62s6txg2PD7o48PKv8xuTUdJttMaRXr689",
  "key12": "2ERh9zSbqB74K3cehapbzwYFcWEsH5N7dsCB8S3ujEfMDDRE38d22r9HV1nFbPfyU5mWhfwFVWZXXiuQiJtRSweh",
  "key13": "5pBD6HJu5hgT9ycn45FFWGPYbmGWMhhUNnn3HKcKsyHExd2CFGk6cbZ1psMYSsEWjCjNKQG7k7DhhQxAevqVnzpC",
  "key14": "2RoFTqnYopahw3SXGbXy6iCD4wsxj89W28AxBRLJz13SUfdB7t8NmzTRvRxijqhKLpA2rru6AzYucGmTYCh3FRLz",
  "key15": "4GN4Ezq9kNhvWEpyJCGB2zwyYm5jeM4jgHDV8PprXuNxeN8JkzbDLaQs5iU1YuD4MeGWAyazctdh6VnQqQuyCaoJ",
  "key16": "2iJThbrBQ3hMANoSYTPBfVthgJ2K1XgsGF4QP6Btktte8KhaoWqtaKujSB15UAHqowysFWVWqUbySgN18d7qyZ3M",
  "key17": "2mBf4UW3s4GuGaKsPVjy53QR8CFmxtqXVVG4VJj6VgbVrH3vhphKuQC18ugr7DxAxrXKa3n5fXs5DyhcVtbQiMxD",
  "key18": "ELgUmiAMr71wAVZP61rfuQNooaYaZ8QinG2dYaHrduJTnFzFvwhctTkdUk57WAuwB1MEHr6Hw9PuJvb1bMKyKo7",
  "key19": "43HVvLyqMpGUJJk7oQ6Nn8ch332nqN52Kdug1nyz2nMxXSqSUcmjvXEa8mqpohquZPP2a8jRuwNqR4kyDKbtSWu1",
  "key20": "4488ifcsCz3ZZRwC8ESwEaUwoHJGk8VsZDMnWAGQ5csNsNAXxNBusfQZv6XZycB1pxtSH5fWKytxsGd7d1ZsFx2z",
  "key21": "5UFqftR5Go6nQ9umdnacTML67HyfM9A2eUZ3CWXjcgfyd7R4io3UGeVa2yH8MzTf6XCdR2B8DTe5cDEYMdJZiuG9",
  "key22": "nN2aduY6BtuMaTkYjzWpwHcZVLeEr5JdRJzaFbtKAw5JC5kndpY3tcysp5foaNpBANG9dy5MCPGcnA7Gw2DeKx4",
  "key23": "2nVh89nfWmYbJBY5MkgjouTK5spD2eABbJ55bWuCxUp2Nj69DXUi34jV58jVu2e4yZVSsKAUwk3T52Q5eNv2QzM5",
  "key24": "ACjdJG4qL5wZUT6enP2Dz159hYyPiQ3eR7FMU1eGpuRjLHN8oJs4zm9Kyvr3rW6dqCwNBfW2LPnepXiR2VysihV",
  "key25": "e4rx3kWyi8McLp8mmnXNdagnns6MxLxXPRrNfB2JeTXMFTs9q3mhd5tnnGN7ShYmJQ1UuufF1CJNGbUxaahJtKU",
  "key26": "4NYhMFnStNzZ2eBaoGdASR1mPCZaD7bbysoFXb117j9LBTUSohWjwVVhAMpwhof6BCViwTZ8ReHphdTbwaYjVB9b",
  "key27": "2v4cYixzcLNNH7hY1xxywCmU6SkQJN5TX2mGzkDC4fZJEyConZNAzs62WVkZVM1BAK1XJZMyEK4F7YQ6764kmvu4",
  "key28": "4aGrrNva3DLFYdnzfhGRyQkrajFPV3cKQyiSyFoKZTaZ2RvuiwLrr5sMZeebDyLrAqeJEzKzZ8JqQZrumsxFy3Ve",
  "key29": "3Vy5s59TVtHzzPbe7NX9j2ANAo6mimhMFHTXrxVVrPqoWDC9funQqZdYm2uEwjxymPoGEdAV25HNo5UZZxda9NMp",
  "key30": "123AhzvvQDQkW2Nw1WGBMeTAwJeqf9bdkvR651NrHZqEaCZYe7pzq78xYDMA8egff8MRbnA2b4sWCCR6aLNTnfzw",
  "key31": "2D76EFUREKpQce1613KRdCxdpvoyYJPb9JXsjCnY1iiF9JiMqiJB3qGuoGreQEbYxrJ4yko4miUrA1KNVMwNvzLc",
  "key32": "TuyFJbGCw27ovGdpcofWsgUaKjYHXRRDdVzu4f68oEsNpFzqgod4ihirMW6kjyc9QyE7FDSa48Jf9JJmMxakBVG",
  "key33": "UHxEWBSMesXQCjGanztmJgVubN5YHYfxknVABfc6Bu8nMuqZDxRdjMLDiTaZ8PS558i7oPbPVz4uim7ujAR3qfN",
  "key34": "3jKNZJjhYHtKmtoayPpSBhDAmcP2GTjitppwq4Gw1aMiKpwG7nyuf95q5K2PcG1Wc6GocinaG3UDq6fzEZsMzJe",
  "key35": "55aNTKvLCRQoCBJMXHhT9gt99RwhenMfpoSXzfYANy5PGApj18uLvkPpe4AkFM3tH1y2a8o4516X7Y2mHgcXUzYN",
  "key36": "3RCEFBXkWLqL1ZG5CYBSdkzBLiotn87wBm32cAtvHFxEvr4tgdHX98K1Q1YXU9k6EbcKXmwtjUMDqqABzr1T2ot4",
  "key37": "3PGi4CEmKd9aQjaoBn2n9Bz419PezvQ1J1cWwWCZ5KAbVwzu1tq95MTu92j2Z9yXPKKqjCDXCPv6NARdgd849Jup",
  "key38": "5HeyVE8uxHedBky4CqCbaC66gwB42sVNo6v2h6vuHrjcbG4A4XZUZQA8DGjUfcHiifY1GFa6x8EWtkRSW7EF2Bt2",
  "key39": "2A5uDZfFTKoWVRNyZpja2bvyEkovtaiZvZief5PEkeGaHruwXno7j31Haa12fdBDkxF95UbaLZcndhcpPoLERi24",
  "key40": "3BTd6DqUaswSzZrGjMxkdHG2kQRiossCjuALqsW1DhvoGNvD7L4KCeCc6KEF46Ef7S2RLMdaGosejuQsZKbsQBqb",
  "key41": "26ZzwPqGF6R8dpNUqZZcuGEJ2xKSpHDqGDYXYfyE6sH9ERbwJeWzSn8T3gb5jNegZMRuDT6AReVBGhkZvJhNncs4",
  "key42": "4vGvQKjuvc958uQYfntU3KR8cCAz7Zuf95DBwN8WS9a8qmSwd3EuqV9EZc2UfiU4xVMpqMWcdJJ3Df1x3XHnFang"
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
