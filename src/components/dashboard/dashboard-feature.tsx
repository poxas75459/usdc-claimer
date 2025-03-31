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
    "4hF6WfqdSWsUrycvmrNtzAJZCVFtpvMn6YuA2LRKLh6uiTDtjPY5Xo3wt8Qny5MiUkAzVnXNJQ8gtPy8kRNzsxig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LfjugY2WeX9qNdegBKEob2Wyr1HzjXH63GQzEwHaXan8h6Va7SLbtaBxVir2pJGLAoq3qmXqFi3rJKSDSFiKRDN",
  "key1": "28dPAQJjcSrkrWHwDLWkruZq8YLUiZ6crZb2ap4XMpzLH9WHyJfDcXx7qep6t853rum5pzywA4vSBbVvwZL9CaEs",
  "key2": "4uQqb5RJ3sHvPC1eYC3qdGYjDYQDgzrhNAitpu2pweYLFcyYwCDt4G7ZUkqR6H4kyzh94pTmdLzcjAjHZhJRYTAE",
  "key3": "56YjwTbyvRGmN4MD8UruqVsWFVCHp8dFSyj8GCuKZ8Lzw8MAx629AzwETdXjXBUyCBLRL62WmGTypMf66EMd1xA8",
  "key4": "3QjUZDn9fMLR9GKNkMthbp5hUULitWGEuRRUqyCCZTEt7g1J3JJY2WtkJGo9dkk6WyJe1oniLQNtMHPmrYAC9Xri",
  "key5": "2oGZAAKSz7G8rUzjyEDwTkH73QKmfFeXvtXEHpgqTGuUFZj6cDh957sTRjxmbJKRJGbUDjexNd5NJgDubAv5vkuS",
  "key6": "5QTE1QHzewoNUJV2pWdxC1JMeL36dQTti6Ye9etUJgHfeHPy2VoTqkhpWQ4eYpVSLtnKqkAX56F9HZuNQPQ9LxpH",
  "key7": "4cLabBMgfjEzRbiUCpRn6DXeTueHTo2zx6qpUyyx6C5ZaUm2NjDovGUR3fJLrxbFEXApQ5Bc9SnQ6Z8nN2tkQaxb",
  "key8": "2RTSQayzRhv6xK8hJNowet67VwuM1BX6sLXB7c6tGnmNfuHpZWVCzUEGQSTKxca9377QVBTZRacCW7rCevL7H5a3",
  "key9": "2zmjTXyh6ztQQpnhm3Psx1i1gyn7rZwDT59zmoofXde1qnyL7A6k3CW4v5w5bGEPXMRjn494HHCVXkRFPc1WNtVJ",
  "key10": "3CVArXS8Ef5Vid95XfgudhfeYPM3PhY6aF4Hi6N2BTNeLTousnHu76vALajvrumBnwQrTEUt1sdma6fTJ9gBn2gd",
  "key11": "5PoaJ5GQ4RxJuCsDHN7C2fnmjN25Z1xq5xTdimQoeKy54hLhv7f42q8veMTh9WQBEFKjPpR24dHVxnkeSgK14QYC",
  "key12": "xcFUauPRrH76pfo5Ur3Q2k59zjj5tBWiKg69kjVNLJxND8ewAxZ2k7igCwBeEQB2ZqvVCky3R1dvKbyfSAkTkbL",
  "key13": "4sm22PnpWjR9GDix9KXKXH6QWGPkHD33s8ShwD8WCTqBmwo5d3PuX7LMbC89LbxkBnRTG2yN4G7KERcX8vEgdQkV",
  "key14": "3VtUrtf4ETi5eo8rUyti9snXga5wXihCNToyVvdhh77iUgdaqLBUSZjB7i4gjeCSTmNztuMSq2pznTWSsjyS5J6n",
  "key15": "4wDESuThFP9Vw34FSrFbUnzYGPwgEd6vUBskP219uyF6kRbEyhw9yjYXRoKwtv6qK7U1BhCZbEDh1C6VZfNPyfjo",
  "key16": "5SCE3QPh3TqG2wpo18xAevihTXCMHHjV3VhKaYLvABURGUbuU9i68rVvgYqBwa5gHPVtj93L2virTNNHQjiJLYFa",
  "key17": "3VSX8CsekRCE7FfJB8xyV9XoMxgad4YLcr3vR9p1MLnsaBUWrwaPpnwsAufrUYr9dUjXXvprsPmFZEZM1uDFXLkw",
  "key18": "3AjYbZCHxSYeaUJjYMQ6XEsAzrrtYBy7REzTcmYTpdBuBvsFrZrLJ7pgmQD8Li8v8NpgNbzAUiSQm78GH8rURT72",
  "key19": "4C8rUmSyYfpywxQ3H5NsUu4MQ6tRjwhecfEpKeSokXVYFXyZ8VN4aqSTaiaBwNoeXe6eykbdnmvGm6PUzpDFH9sJ",
  "key20": "5qHy3ZM7vR5cXV4YoYd6S7EopEW7utS7U1fMmx3zPJXXNc5gd4veQhucwhf42NDxdn8kFbVuH6dZZzwLEhSmPk7v",
  "key21": "3AAcL5StWtNEQozc3QzrJHcvLzWkSPh8YGiirKjZY4Dtmy8rKZNUKdNMCY9eczCoDWDbFQnr2PoCbZ6EbPXYJ4Df",
  "key22": "g5vsYLsZCXYuNnbK4Gmwz9AfMNbWUiVSsyfNSbi3JVccuJ26knYGqJjeXyYGB2syFJXWqsifAQDvKHN2qigCNAQ",
  "key23": "4jGrmB6epdVNLtV4JeLxkQ9yTgPBii21AhHz1uwSodisPsVtFJA4SUvGXUQHdPgzYuRRkHZrgoQUjgCxKDkKk8E3",
  "key24": "3Y6HLZWQP57zAZzoccYBQ9ALpfsG7HCVbkc4HP7qCKkY2kqatES5u3dBA1JyrJJiEVt6PeSVRYabefa8RVj7H5LB",
  "key25": "5k2ahZhVGzXCUNWumPr8d7kkUJRgcPMnno8BPL15KZoACwjSvkXZ7GwwTKkN72WtJdJsSQmZjh9AyEMvinonhpDG",
  "key26": "5gWpyxCUA4sqguXbp3raDsGJXPhXpVZ1z1tPvKHq4SMMr2kV7jAQRiKXZHwkqBNb74Sy3Gf2eyhGhZ7rsCdmkn1u",
  "key27": "5zMxvmWxroqMmvt8iJZ6Ex1NRS1w6xxtPUwnteYvaUtgjEctBhTkpzPEcBTqKPL7XDdMAGNLRDsfbezDUn3cH5Nj",
  "key28": "2qob9mCXznwwgAXmuqB5YVg13zD2rkBXAgsLQRKKJnquXjXrtN4d9BECnmre3cyG6MNgJDvGavsHTgSwfhvUHFLd",
  "key29": "3REFps4YPPHkyWLGKngeD5Su4LeZpaL6dXM6k6zaouCGoHFo5SesrbQyosLe2vUfGEztSX4SJ24dSmzigfYDzSzU",
  "key30": "4akyBMahLZdyAmnDS14KV47n5i41CVFm5VRVz7rmVESDqjM48nZ1vdy3hFAGjrqEA9KBUrESp8YLA8t8DhRF5gBH",
  "key31": "5TCwXhjGE24jUGQCeXWw6WY94SEdhCd9TaGqR2Ge16TrhyWU7LgE7xH1HWxkmfuVoqboXs6Dmtvi4Gdp6VhkDR8G",
  "key32": "3RGESX94KwG6shmuHGMEriDk2hSeW47HkLenieT1PaD7C5xejKo2mfXeAKgDeggnK9VYnHdTggjw9UtqgYUE2iNZ",
  "key33": "5udxYxsVvF2cJkxiRBL2EQwximrmdq7SY4HRrPhPt4zLkgW2GWg9LXbq7f62Fz2zSmFZicavyH9j2igE8uCyvY1s",
  "key34": "4hukLJwyKVmDh7eBm1DgE9EqyTe86HqCXkPq48hhqh1bh8bXr9jabE7tDPLJfu6UDuUV7NcWcsGC6UcCDM9Cf3yJ",
  "key35": "67VRvUYfDXWny8B2grXHjhbAArHBeHMn2a3fjnrMLsX2gS8w6HqCwQgeZjuQBT3rfJtCsa4t5tQDn5pFyx52j3En",
  "key36": "3F39fpHwPpSAeqv5dp9NB8dvPaLtxaLujjwT12qtWEdS2945SasQs89mhw7w7BHP6nte9FBb7sTd3c1L9DvcPXbp",
  "key37": "3QEy9fznGofcCy8KaQGECXgKb9yM9wuPgbo8JRBCc9ugbhopP9mDbbFd7hRiBAWHma4czfmL2QESJwhw6sD1LW17",
  "key38": "4JsxMAdso4Nz3ivn8xuVNN2vCLgM5VP5oBv1NAAJLxGLTqdawQ8KsxynGHyctH2FDWQ6B9odmBkA1vD6djkCcokA",
  "key39": "26E9UsHY3h9Z76sGSbE3iL5tcV8qhP2RKwhSaXsNgUeb7uTsmCNChD5VpG2ScRcpw2bMwJdU2S3PNNWmSDpSh8AQ",
  "key40": "r8Y1S6y6agFVf8CRpowYNk96LUbAUZUhiNqWYRqcHm9MarCACbVcBGRLWhzXikYLQcjFx5ooUe582wQhLYHaLcY",
  "key41": "4oU49q5is1DLqqaU1pDjpkZjfzFFuoe7gCw3CAkDSUxa7S3hJND7ZFRx6owL5yur7kWCTJRgSA79Qp6ty2LP59NR",
  "key42": "2DsEg8A6kJuZpMJ7Bkkm8m4Wr9DauxvQTpT3L2Um8qi2k7vwohn2kajsTEbJEPzKUUwu3F7r9gEnxPRzR3KXegdd"
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
