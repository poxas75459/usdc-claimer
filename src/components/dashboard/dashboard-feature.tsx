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
    "3DKHVETbUah2C6C5G35yzbSq6qYuYJfKk2wrtV6LU2c9iwgYKG8za9gVhow2JL3nJJM1nTCnDkL2sNFivYsbGgTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NS41r4F6dWnESU4fThNMfvKv9tsPa2YKWc8JoFmXbkNsBFZEJqpwtGyXcM6G2HwsTJZGArHZWjCsA2S1h9jsZE7",
  "key1": "5rPKuACR2VQ27xysWapaPjSWjzMgdK6wmvBtV3tHhxVUDaV4skuJrb3wf3LnVWVA8BVEXgkjdKTLWtRyFKhnwezb",
  "key2": "4TT16urTKZbptUmdLHKNqH7ukhg5uTHNBK6t6Bi3Kx7Cdpui7GWrysRQVSzASeTqH2kTb7DcLK2aZkX1QUhEp9hY",
  "key3": "5YWwgfY3F8DNZoXGSC7zuKvSMPnuSLVpEGcJkst14Cb91divNvxeUZs4ukHUsh5UHMAshw5SqTXC2nG3wk7toamo",
  "key4": "3aZ9QjwkdfTaUkXmVxw1tcpzciPcy8cfpyuXUd8i7KG2QzQ9Hw6JWZhuzFVNVBVtxQG1Eb77bUbaXNASBr64oPMh",
  "key5": "5CE8gJhSTNnkqF9fUmSVXMx6G6grW27456yQBPYmbqn5h1g8SeT2diwY4FofErqrH1iKTsU8ZcRrCJZnK4xak1bG",
  "key6": "3QB34R1rgC3eDZwvvYYd5V4cfehvfcqPv3gcTUi7o2CEHRwAroh1TxX4iS954W1Di5sXqx9xGg2LxJivtAwBvxDe",
  "key7": "5ZeBYqYNy6n9FU7D3ge1KGFm2ncL5Kwuxg5RUQPGh6h5BUtG8pay4QufqCSHRy9DgYAB1x3iZu5jRv8bDTDUDrzU",
  "key8": "3xAv45ixwUVXQ3viD8Ec7EHVzZYJqtHck8sDxKKDhcZDxjsqyqbFWpZHvG6Wm3uUZDBwYDceZDdVx9EJ4ZA9LwjW",
  "key9": "wNFYfJY74KVYbC4PahdoMPmKxJRHcroBixYH1DTT5dU3YWTXDZTeUhrDL74Tifc1Q2NK11Z9nTeLBHhFDjYKw4H",
  "key10": "5c7G4LrkWTgRzz3K3ukxaVb4Zv52wpKHjpuJnjcSxEk9Z8GmxD2j7rucgxgipADygXbQfZ2WWGkXeh1AKGLpP7Yg",
  "key11": "9KxvCMUWJKbd3NFiVkogNYUF4BAPyzuBKf1vDXbL1QXv4ix2iJvCunEHnPDcVAojn9g3pxL6SJ5eb34rWt8fM58",
  "key12": "eM2aF3wB4YAo9DtF8KAb2UycKdWFDeDaXenxifewjuH6hR9ZxgvwNwRijxzUzX3hNrodTFjVjLo9WYvvxxUokoz",
  "key13": "4HN9VLCZ8MEVTq7AFYq7kTCAzKNGXG3Z98j9ZkQoWTEWbwPtRCyJ2KpgdXH18fbtSoyEfxDy9hgNPsZTcy8o4NpR",
  "key14": "5pbfJxbauDkxvXzr2b8gUBvJA2KDARY12Suf6Gh7zoxWrHVVASEBUBpvV5qSWttpATLEYGehFrixWtBcXvoZn51W",
  "key15": "5Kc31udUfmJCTXzqLmXyx57hMqSmd99K1NacDnBgSD6jmPpr1poug8F8feEnGA8qoSLozhezctfc8N9rhSRtuz7N",
  "key16": "24mWXBsNfHH2JDeG9gCuqWxhkQPsxVW8vfJSK1TPY8j2s96MLEEfxWqZ8iomNR8ezyVfhjkBEuBApvKP4Q8tdjvb",
  "key17": "4dyRwoT61KdwNPhEkE66VP5XgQtcaDXxGk2WNStMBsC5xuxd3LZQDMHSBkoD5rsCqNDVu9KTZX3zDAUFmg5JmcZC",
  "key18": "RqNbgJWa6KZeKr2NWdv7NDCHgWxxAktbTVMNkbhxyZMFApLSXQsyAZvMpx9UzdmKBoi1FxmmptoXfDdbaqVuDxY",
  "key19": "5rWYXCT1fqYAK6bqBwGrUTzfaM47MZ5WnnKRaGiNbyuev8SfF6aS5afb5azCeZDPin36jVVC9VaY16hM1P5bcutZ",
  "key20": "5JMgajD3PJDH86a6qBK8MrDfxcvkEwckpvnjHzzbp22EXsyB7DoWgMCedGqispWb1jzWBsaiyq5qqyGRaJfAVsvD",
  "key21": "44vJZPqd9pM7F133JjuAVW5SvMkXh8NhuApuFbunqB1Wt12pV1vmtXu7UvvTqpTetEy1BfkPDje8jvwNMLSeLC38",
  "key22": "3SykQiLkLEVxgo8z4TaS8oWr4ZbGuJBEcrAxBAbeRrPpbuQxdEiLQgwLjy1ag2mf1RATysb2Kxv5cXzwdRBjGsua",
  "key23": "2bpwrwG7yy9FbEfi8zc33W814YwA9xsh4Nq7BRJJ5ZYMcivErd1i85RWBcQFY9EoHuG886E4HV4kSuL9wZXkJAdF",
  "key24": "m8RaCM7kidqZBZ3xiUnzd8JCPzNLF4CmgM4Pu6cK7VXF1c8mhbgr7NvMq8kCkXMr7coH3nBvjPwHWb2ZByfZG5v",
  "key25": "4cxtn2P6fKw5pHijBhVKZWX8g4MKMweXHRAg4zMhjxV3t2cHf1cg2rKj39xye6FKtjm6ZM1iqfQabsxExw1jMcdn",
  "key26": "5HYbBQNzibtYdfURV6pWRsQaPvqJaQHywKRRAz2fkf3YhqEwM2MsHkUmEZSQx49MvESTScnkS4t3Udqn4FriJ1P1",
  "key27": "rCebjgsxQhZ1avtYbBRLjq48vXr6NZg1gRRWaVrnfV7PswknMuCVXrKMgcN29mgFMQvcJgZLx3WJnTHS8sUPtxS",
  "key28": "61vwUbPtVRR1nisefkUUtddCkTdygGqtmFoz5H6a8Pt1SKrW6nfNCnCAQUouQtFmHBqZ7L8nX9LyaUKPCos74P4k",
  "key29": "42M7Du9Qk1rUr35jbXKPxR3rnLYsXyabKQEcm7xFoPYYNVGK9sEMw151aRy9JPfk3w2grhkwhpiwWX6DdUNmuGKm",
  "key30": "XqBbR4JSco4NpybxCJfg3UqnJPaQwmu4E2RVx3kzk5B4n8mquUTHpUm5zDEZ4d5anAoCq3KGTinNzHLdpF8akEV",
  "key31": "5kjkyXrTcfoHnCB3y5D4c8SWgMnLHNt9igo7AKn2KnwmtoUgbuXxxQLtPVefHbamZcWXEhQbj1iM8EPubjvXkxC1",
  "key32": "4fmU7vC4PsR5N8tx98xiKmVDE6xHc3FiuCovj8b13i1yeiHwCoqTrbmTThaJQxxBeExwhqKEttSxMhvfwU91jGpv",
  "key33": "2heEuJRMKYeHit3jmbKvUW8WpmYHh5kSY7QWaUNPiWENAfYMPYzvZwS5zptucD69ESsZah8KLLotps7iF7DoGCpZ",
  "key34": "3hBdYv5PQavS69xQVGbEbSbW7u9yx3rrrMbUgMfDb3VwRTjbP2gaKbVT1T76KEWp5pb891zASZDCKZ1uKcwsPApr",
  "key35": "3QF8jqySzB6o4dMhnSAgDjb8CPhJnSpFpsmKgyocPMApR4LcKBSEGX6dUkADc76CTRn832293L1eNzPh7ArURX7K",
  "key36": "2TbVTXwh6MyYgTf8TanWidoJAsA1k6EXcWpdaV1v7Z2M9yzrraMxR3PKEqdgdTqR3kvetua7yBBiyjQfuJFWXRza",
  "key37": "3FunVPBF5cb88biuYtvtAfCCyQdUfCSxeUtnq1JJ6bKuWauRqGfp5rzRfpKrxitFWAM6gADHGUYA6Y9yiMJiSAmc",
  "key38": "41TwH5z4LMFuMAtm2RLvwMUqFJ9FLioNyEbrikUFxUBhiqhktwEzFq4CKFwGq9RXRyEy5gR7YtZ8G7cU34gpkckW",
  "key39": "2nBX7DGZYopafioVhHXAN4CmmHrYNwu1z8nuo3cKP73k6LViyBSYyXViTxPxKHh8AFv27DYUE8wpggmKHZxF72oK",
  "key40": "2PiGdv7kuRr1umfaLQgQLSWUwdWmciDQ6LccH7GUrwLTTuYmQ38Z218cswqQt2DSyYZbXEfUBNiCekfPYtmLDQ2q",
  "key41": "3Uk6L5mwBLxpDmCJ2awsKikxyvt5vFvnmVWBvLm8fRaE4Q6mNnanr5KDkMDrgn3wEsjjdgAEq9rBqG7D7HhvzWYy",
  "key42": "2fi131G1fPB32vDKzYFGLKhnEdQZ7zDPRL7N2fDVfn1h3RVShEsdEYxebYvyqeYtzAdqPtq3hypKiGbtmK9QgUzB",
  "key43": "48ATGcqxe2w8WZApmoPTGecL7TbzcwPJfwy6K4AKkw4WgZdAsQr5mt96CdRtUsez9PQViazwCisJsj8d835JX88c",
  "key44": "4TVG6wbEvWQ5pthDRw3urdE28ipHfo4HevytTgPd8fny76D3J23QzuGAxvxnAYUZ9bkoND2gx1t15QhwV7tWhV3C",
  "key45": "4UaHeofSecoW9FuvieY9gcWAaAX7Qe9QbdjctRVWBmKzSw75V3gAL3jev3XCvMmrQjcdXWXHWvkDdrxunj3LgNqG",
  "key46": "4CZBfPzK4LHTNQCEVFTRTWev5YwsUrWjeAJ967UqwiKpSMR1wKjtRSkQnxdRJT4vJe7x7bV8SMh55Gfsb2icqyZW",
  "key47": "2qi6uqTBJgoHwat6EVSYtTrGRMMhoupVUxW7wYD42bh4SFpv5u5bcZVS6Fx2DQo5JkWQXRFvN86XSNmvuKZ6rQ6A",
  "key48": "4d2QSJXhoexvu2HWguBXQrXE3QMrLsiPVHd1pqYbGCPyugkgKoEbfJxhuY53jRVatguwYau4gdnhPvcsQF1PEwPx",
  "key49": "d1dmXfyLM2yv8kmNP46Q4pUZYt3epzgghMQxR9Xaxi3h72VNoWNKAaK1U9wn65X8eTgKazrZ4t3uFKfLbPsLUYL"
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
