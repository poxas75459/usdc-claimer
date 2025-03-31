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
    "3MvmWunaRMfKGiudrRnFHzkjuk9nzoYj8PxPqFtzdgUDg6pT7vJog1XBt49Hr3xeBkWWdWyvJP6Sq8rkQYXqMbrz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43Y5TbaCbdn5C8BimUYKGndsakwdgn3uQTAHa1rQeJEJgTgYqgdGq454CSVERD1yVuemmACJUtjupSjyyvMg5qMW",
  "key1": "BU3SWUhC4movZybRqViZnmcX9qFq8Wt4R6FePkDjdEtRRiN1EeofNby22zwWofCpbTkcDALjcR4K3vngp64q8vP",
  "key2": "3oKMPFPtmEQkjXzcwQM36VhAXUqL4cBnM1NYgdVXPNWEkUsex7CLNjxb9PHHGDCCJ6ubXgbYUJbMmQGYeaW6rvBm",
  "key3": "4AmvDPojMxrusJiiYpVwPWyV7BQuMJt5c8mtUo4mSvzuuLBXmTVHpLy6k7UeN4RXmz4tbiRSu4RegwaFzveZ21xB",
  "key4": "2eTx6mLNRyCzMBNN7zuto18ce1sPnrfzSBM7EZDA4T4YkAE4n8ZgoYtFeKDsEgVuqZ4MK9rx1WHZpQiacjpWq7dd",
  "key5": "Zk4ip8Td4ZepZ9krciaWDDMHphad5vbT7ZxU6TEsiNsWvMqYfqD6W8MJpMfoWD58vr4zEnHGv8S945HZ5y8QEBt",
  "key6": "5yqPRSrYSoMr6q6qNLGH3u2bJdZJekqDPk7QzvgjLLmyW312cGa56BNCoHLBKuFrKePfhSiRkXG5SKHejMewhgtM",
  "key7": "eCuhFfcQfFTDDVQpNHmZhQDutbeVC5ZGGXRxvUa8SVAmiF7RaZakfMWKBHn68Q4aQb3KCsLr76tAe3CCBBfgmRN",
  "key8": "21WsrnHvwqk7GjLmPuG97qxCG7DzdtzoEuYFxWRQL6rbYspUhMGqyUHqfJtJr9QjzRwyNGFzWiapzsmcxuUxcHGu",
  "key9": "2wH2X9c1xQJabSDpsgb37Nqd5HYSuXzpmFgq8qhwwket3kwmgDhTTQQ5W59B9MJYRZTkxNsqirW33jzucn3yc6r5",
  "key10": "2hh8CcbCGpfCUQxTpnwwrBipjWQmomwBKT3xL6tM41kWyDmGYhiJ2iHUy8C8BQoNdgxZXj41uZQHRRVhecat4hNh",
  "key11": "37BQ9Cfp3EoQn1UToZ5YHEZZScJH8gZrXXT8esKxJNKWn2mgTTfCTt2H2bc8JL4e5hJRqiFeMYQQNBikZ3M2hWqT",
  "key12": "394R25eE3SAodPn2AF8mwV8S8yKehZ5cnXQye58tTD63u9Hp6tHam5vn3ku6K7JmMFgA6Kki1dbLbMKrYeenWa3s",
  "key13": "38A2eUpyVhDNs8WiPi8ESo7TWiMFZYDDRKawqt7vfWJy8PSMQQMMux4LeiQA72DU5uKdmbAL6JN2LFrSkayHwqzL",
  "key14": "3sTzmDuwByNo43t1WWa1c361WxoZmCqupiSXc2tgbGXx6gFoVYMLMrsLJo3E6s4fa287LjLzQjSZd3XscbXkDKaq",
  "key15": "5qaSuLT4aMTaWAg74G9JSTyEv1VbDrpRKfcLaZ9FGBvH51GtJpw7EJ3k5zTrynHyAugEozxYiZbezSiroTXf8H4f",
  "key16": "2T5RHA89k3CcdbhUih3QhByc8dQDQm5W8z7pSwZLct8ef6YdefBFLJjz6u6eMARHVFgLTwYRXXaj3Z1VHtckQdNk",
  "key17": "48LBJDBUi4iJpHKzzxuzhcDuqJZKH418xpQBwCiaLXoNcswo6XYfsu2QTpcEGVd7RMs3iXfY66LRfjj59MVEzPQF",
  "key18": "S44ciLzWFk8V54Bqj5KSQDgTNE534Z37jQHN3eiefcXZjb61RKVssKZhGvHrtoMnoDuQoijtZphFL6VKsjnckWP",
  "key19": "5AFsLqm47XsViRYTos3KCaUZDoZeFeaHScJfG6ktsWT1F2mYQLzcSGgnNY8PL9ZKmtKR4T5Ni4SdRQer1QJzkcDB",
  "key20": "53M4Kfem5jigvFf9NQSHUbw5vmYZYzDk1QX9LTpgvTHHqd73dGuoyWcFTCxuccV8JMCe1Zn78XTJh3h8bnCASZmu",
  "key21": "4E21nfLFZt97zeu7ZFogbzfGUG3Bnw14mfx5W4oj7Y4Q4CXnnHv84KjfJejDX4eC84MjjC5FpFwdPaHSZ1ifdKa",
  "key22": "2cTsXEkuJu83Gwc1kcTeYaUKowzcgcauXumdu91LBTWmnwVUWW5YioCPahq3pk6tmZsWCYjBzB23Uqe34iRCaozG",
  "key23": "36yoHrdKAH2pUGErupEo2dvWuzMC81qpSMXcSgyTyqBT4hXamQBnA1aG6ASZfMvGYsgGak2tLC4GHtF4mQSajghk",
  "key24": "3eCpujbukUy87gY3BJcGYug2DBuV8b825UE33rBAUFoCxad41Jkhyxx3atWKxAqbHGLse7yPw9YSHj7SGddwnpvS",
  "key25": "4odLNsH3CXFjMzf8JeNoN8d4JvsDQZV1bLBWZSQYuRTJuzvTydqdBgDb9dTpMz1pwNFtFGJF2uqnLMdiuXtq914D",
  "key26": "63v1bMuKbrVG5aG8jedJAmiEW8HX3smAVBbhj7WTd3yZ94R2NeZ3ssNydv6q44jChxdSj1xNhB3sds2RS9VKKs9B",
  "key27": "44EcsRtYBgfFjV7LSPtgLWo8SASFgDTfHRDMJwkVq3mHMqyU4AMsKR8rMMt9d6hMYgGveKGVteJmUV4bYKvXr6Qk",
  "key28": "24FHcfrPD3bzf9hwDPmc3YLxpcw4tyLMzMLGqycn6dZoNKNv67y3Dabzoh3zB2BevEMt1wdpVygCeGFYa5iRWscq",
  "key29": "5Wgkgrz88hvPuW1fr8pD4NMr7qTHQ3V9U2fMpw61GKzXULG7vPya2CWP2zTcHsn8jFvoHKq5KTosZ6eMzqhqpoRf",
  "key30": "Z32ij64UvastWDNdgnB8zi5xLTEdrbN2SSMbXtx6RqrvE8nuZr1nFjViriSKVo56R3Tcj1gswS87GPrZb84W6hv",
  "key31": "4TwtsS179RyKTFGh4GK9buswBNQcDcbKCFRza4FExZ4U4QmanGgfrfWvvcHuabcoYkG8SFK8fZaWSZZrtkWb19u",
  "key32": "61zjWMXmRsJH8Ay9AEorMrGpPCxdYwG6ZzuRmi5pPbDy2fp2usjL3JLQj9JPJSTiYBRJRf19gt6LdstoCGqQUd1u",
  "key33": "3XqGdXsFRMnDXbYAm7gX3LqBQbbmdY6VFGa5HDg9njwH5MB68TeMtZT2PVVo67W2x6Qmwv4pnmWewfT94QzrH5gK",
  "key34": "RQQgmegHnqKPZNv6AFBceRH6qzuyxUPcgSqvbJ2a3MChxRtc97q6brcRmXbG284Rw5Dy2Ch2YH7AwFzu2DtLY9F",
  "key35": "5vXWCAMsYrs3Csh6mTSndMpg2kDNtFFCJcTqX1WUjTuoaUi5bU1FxHuuDdt1ybirCbY3Stnq2AttFZQ6xGJEUXA1",
  "key36": "21WxrGGjx9BSr4nmjYKWytCWkput3JTmF51XVvvB4B5mvWxe44rCDNEGDEq1NhBtadEWJMN4MQwQDKYC8ES9cAHF",
  "key37": "452wfj7zEdnpkmVxHPGXs9YMKzQfgDT5BuvpXv222amXfXx2CYvreMfDucSrbMK7BssQR4W5PZMTYQt66J94Jjbf",
  "key38": "5UefmptE6eMs9nRScwupShfZw15mCRsPufTRedUZZsh6Sau3qeqvQURft3CjZXKyDKqFxgTdChoA8xxXY3ppKx47",
  "key39": "2jnrc4bkAKUPuKpn9GNi2d3UU2AgHYqLJRm2ZjU91YNeaw9G52bpjJau9SeZ2xWv3PTLQSiMD6skNVZHsQmFU3Un",
  "key40": "2s2n8b8jtbvbm7fEge3Wd1DS6XjV1o1vLhqpFgbZMNS3EU9GkxYwxqXrVgisWAXMoMvWyq8xFVQj2M5CVMtoJEkQ",
  "key41": "4gtQuB5o9LADTDG97apKMfshrqn83hWYj6wwPmdNfginr5uvmMpgvJi6sfLB9r1nZwR8ZSxiJ6Ld2513wEH3ANWU",
  "key42": "4fdf4maf69jvWhvVPeTkVPCzzfXJ5ZxbVtTDMZrFPjycPV9qkTMNUDJUtmXyvFpXMPuLAyMgtLYyccSUkhowMzrc"
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
