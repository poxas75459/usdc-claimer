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
    "rxTJmiKUdm73aLehciYA2ZuXtaAA4AqJYKXfSubbY7GdkZXop6r9AgTTmCctTN7zAinQx9g7ySi6Acao4igvgra"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57yw75meZRKFojzixaQ8dtRnonyCni8693vJC8obyxg41rztaf7NyUWJmVYDhBiworK5FCbDcYKAJqAGEdtKuU45",
  "key1": "rsHip5Z95Ze1vZhzdQ2Fk9qxqZx7Xz4auXvmfpEXsqASEBp4Qtu3ECxa81by4RgcWaz3H2sKbJMGSLxHmMyRgLh",
  "key2": "BdCXcgKqx2FhU8FhpdicxgnQRKNeigGf26ezVyYf5hvfForYunVZD6HpGMVMdQf5JAqKNqo8iYYrapwXec283aZ",
  "key3": "24gLr2m6oagne9E7fYJxD2KeoDjizpyArw62nJLREP1xUQQeo1wPockNJbNM9t8WqgFpNhE2snPR9gzetkd5KRcj",
  "key4": "2wwrETcxJvtf9U6DbiVbndtTLQxRShx5YWrRndVvTdhKwJoKCNATHUjPALSy8tSau3ph9mMT8VxM6UEwvzbTvF9Z",
  "key5": "2UQvT2t5erZurtjnyT8nLNUvieAugcgobLAccYaETLerMRecuKvMpyZo5CAUhAZZd9BZbkqKHy8gG8rh6AqkRUQQ",
  "key6": "3cRDR78861s9haWErKvBZygHKDZm6yZpX2iwuKn3LDrZ23gAuNvvLushSgx4PV913d3gGM8dAj2KGXjQjyYch94A",
  "key7": "9rq2tasdd1K1uVY4xMWgUcFPchYirMvw2PCvAHiqW9nndMuLsV5x6VWWse3JesVfRKD1xoUFdyjgczsW8ndfz3r",
  "key8": "kPtJyijfatijKjzhpAoFCFUqrayn8yFazKnRrdGktpdPhfJrxf4TVSqUtQ6Cnb9RNAwck27tmkcEZa9vi1xF3an",
  "key9": "5m5gN3bjChL1zQFTPpUyL1VfYVYLi1hkhpwiRa3AWz3VxogvhPGbaMGUgAKAVsXLpyxstsvsKM6bpyZZAsL2qDzP",
  "key10": "tq5SVPyJdJJhfrJZ42fb58xWfQYQTxcPrEKTWJQxe27ivupJ5YQaeGdssz2ijobgSWgoqEaCVntGdjThWJxhVH8",
  "key11": "3uss9we9aWv6ndqx2Bk45n1XHs92mPsjVFmkAc9D858j1iwgRnnuddwunpiEDBthUY7DeNW47BGDRpvDq6a3jpJ6",
  "key12": "4XpuuofPpDjU9NMwiz8Q9ZqQXP4Vbfs7ATMQkaARDxRGNWe3GNSznuf3oPeyCrHcRmDf6We3mhtz34BiEgXMoVn3",
  "key13": "4jkaBpRB8fX54q54Emu8qFTrWawHEN8nY3y1zstB7bMQKgY4GJ2n1BDV3xmvMgWWVAYnrqGZsL9ARbBZrCYZduK6",
  "key14": "3EAFPohjM5n3unFdrSsvorxk3psxf8bcAk1LDrfEq39LY3isQ2NEEYffpAv62tVJhbNettZtATNMT5XgrFtxtmRR",
  "key15": "mh8MeZcgNevBGuwUBZrQMnTMkXykTPD3BjH3g8ujNPY2vAWjz9H3arjJuNmL7NuwBoEHg2FJGxrz9kiCp2XRBAA",
  "key16": "4Vjg3kfAJ6QvtrHecsvQQS6YZb48KCvW5ZFXfRChdjABDzVTQ6d6qVK1yei9z4EfTkSpifm8r8NXE62Spt3Lvc2v",
  "key17": "YUHqtVke9jXMoUE5ob7vYxHxuZ1m2xn4QXYaeFmpqugoSvpJ1NT3yPRzAbspP2tSKG8pvTq7EZrFTBMAJ6Hknd7",
  "key18": "4Q5Zci7KeyQAcLTa5eXpX2j2LTbqv56gQh18gCg57HrZHfQvGaoKxvffMrsU9VnyjNGnVwsSCEgdqcyU1jRE82wF",
  "key19": "442KCvguqFynpDQUEvB8M9fQWJWrXHBR3jmuCmy2EmeXELqcy78G9tHJatxnSLwFKAYFp93gxuiDrfuU9Dygb75d",
  "key20": "2Bk4AMAHsvWfGpi2ZhE5bfWUjzGQvG8DVECE8d62ACwp18SZRHq9WeH86rfG6FBHxVEzG5Sa93e7v97eTYDFSicX",
  "key21": "DkJopKkB2yiAmWqUdEs4NZd83YzEQcsKtAax6swvevAfxeKYHf4XUjnJkMAPNoEKYbhmHvWeRJAGWY5DaBgjpBw",
  "key22": "28NF3qLxqQV5megyAP6PH1DzVQhrh8pxATjxRfweYrD67nTd7t5XzWR9TLLv8BnF1sZc9Gu9UNiC3JwnD1kKsxqu",
  "key23": "aqVv24RbBXiHMgQQ25EJzY2tstV3DrQ9tMXPjt4YkgT7HnwaBtVoALLjPnsRGssWFucCh1nMrgpDvpcsyfATD2M",
  "key24": "iZZdvP7cUyi3nR1ZHt6hhjH8rfCWGZXELS4Xb6Hz4KboZH9Po8ujkfSTatUeG3jLq9LmLKqeaVgw8rwVAhjRhZW",
  "key25": "B96MU465xoejiGH9Z2JuWC5k3V5kvX7Gq52HBbSFp7qSjbnQxixwXEP5cP55tmxwyrMHEvcpeoYDrKGsG7nqMC4",
  "key26": "3khkMc1cizW6wYcJq4e8963L7gM5ABG1EcWTkwxkMBo5gJRs4BYoBh4hK41PK5imbMSGJG2BEqQDT1Q8JE41cxnZ",
  "key27": "23gehzhhxwmkpHUgWUiTyZBNv8X9NeyXcEgYQesVzRim4i1BT5ZoSos1xD9sutghYEXJ3wjpTv8oniDLroCTg14X",
  "key28": "6vDjBh4BmXLsFtvz8d8q3SaWKcDS1kUUkPL38zyrvHDHGGuJBQzJX7KRn9wTwiLDbYRWiUFD3C6BZSMqKK236BW",
  "key29": "4rPgu3hBbgNhAripN4SFheNrXPXqVb2yeihZwFBgWgScYXN8cs8gLVpEkBfnNoog11G7VHeDtH2JbnWhLTduZBYV",
  "key30": "Qh7kMvZg72fvMs9Qo93HsvRGK2zweQ1aMwJttxau5FTaDaXn81c2JsnvQ88wyW64vyGxwjNocSVU41HXXF1UHRP",
  "key31": "2fvQDVG7fkEt2qFgphbRSE1JitAbnEFm6qYGm236456rkvnd8F9ugADcz3V2Mijgpn86dJaTY4uNNRbUu7jny66i",
  "key32": "5Cz1PRtxgvdVpPcdycWLgTYXGgmqe8Wi3sVbRUAwdK6uafrV8BWGmub9PY1mP4YL726hZF3SH2AX3NYyJijPu1qn",
  "key33": "5ykBMSzJbH5xrXHqgRNHZSE1TbNJFBDT9ZnrUoqkzkXjDJ84AADEa1XHXKVyWNRCxASXcv1z1aaQXArHSsrjMfDK",
  "key34": "2WFCvZVyzM4gbXuLeCktheXftExKcyyBdFEBhnxBosKiJcJ4kViQoYSRE2SGthkybaBrSLCMSKcry2andBNWkkAz",
  "key35": "EPTMKMKgf5iH3CFmMQD6HEdW1xcNpUfb4ugHC1FrWnGJDyx4jKvWwoCjESSktaaURVKn87aphCS3e9RHenm5wJF",
  "key36": "2cuQEDonWh9YVmog66YvhMqFhqiMHfoBuZhA1eztHPvChJ5t9kBU5BVescvzXJbTQQwBEv6NTZSREZYTUNWeKjmh",
  "key37": "5CZ8UpkxgyXSYBykXAkkUphwAxbafW9iuniiSvSRqgSsZ3tVvL7pBBqNwvuvr17fDebm9u5JkkL6u22q8LFeXVb9",
  "key38": "2JJk1eweeTdQmJU7M18kqX34H369Ha2nrXumdBXEeJmwmgoTN6QskQfgMfWKxB1n1CruMUJBarPWfYPcXAzdtiMj",
  "key39": "5gWvPVdVVGQxoT9fJsBwciY9dYuFyNNGrSCozLP7uuhMNNgGRDi9EXWWCNZAHL1z2NMa3iEEutDsCnWar2PaPv8H",
  "key40": "5Tf7DAaLkF7dnPF3FG6ZPKWiUcoDQr8DxnB5BN7BQnPNUsv7p8EXdxFELaK6kFebcBmBHYwANJm3bRgBLhh8yMdN",
  "key41": "5UQ4xZBBi8GscrXNCiXx6zVDUTeitbKMrXMBY87GGzSH8wv54LQ3bFLUqgS3hnPqt3WkKDM21NAhXnbd2iXtEPud",
  "key42": "bBCJrtiMMFY8hrt6vracYTdBaGbrN8rQUFhWu3pDp9NMzc265Q7ASoMUGBGJcRH7zvoKr6vwVf5DvZoqn5wLXYC",
  "key43": "6uTCYBMesSNxyBuZHetwYuEBYpA32qX3UiigUGjGbDW1d7HfdCeiHDL17BRFJBRn9wVRpVYKzyFMa3bo7FvDcU5"
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
