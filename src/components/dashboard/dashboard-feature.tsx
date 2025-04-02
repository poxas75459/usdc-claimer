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
    "5msJxrWrdauKWx8BMf9KiTx6f2HuLyWLpV3QgXm5Ewmh22Q5kQ9LoGx2L3Wcoq8nm6bEkthgU3YCVwwF2KQYSTbo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nio7DwM6LxG7QUZD86wadJdvkfKUcesxcsM1nxu5hQo7NS7n7412qc9PogR4ytJTTxeeSUzcGgfN1SEnYJkKev3",
  "key1": "4U99s7rSPhDDeTZwrnVCrhoxLCZREadZg9yAC1q8nt8NaTJczB4GVjnG2UfJYZYqmEeBBtoiHp2FWzbi9LiZfVje",
  "key2": "jMRRtxuvMuFDYRiTvw8tmNNNupbZ273kPkxVk6bptemWDSfwNZyLK9JN3WHSpHszWGFdi5ejd9njg2TqCsMZK29",
  "key3": "23Sf8nASdkxHoY4nNJuxegigwCbPNpJT6RDMTJz7JskWGQDU128JRpqo98aJ1NKBJ1Ydz9eFpgMymC9T3jupEjmv",
  "key4": "3fNTNGRDQSqj8a8KWavMZP6Ly58xfcvftg3X9bZiGT57RSnpzqPFtdTQ2oSPK7NuTdEvjCeFU7G7RD4FPceNB2KA",
  "key5": "3x68i1E6FAGN9T54xoswAWPQWpjJrVLMtFffjMMZ5s4TBjwJQtZpn3tmApLrpsHA3QEAVPZjZkLXB5NfxBp7XTU4",
  "key6": "2VUkcK982xWjpTfnezcSCbF8GwTw9w8zgWon9e61Z4ZBruWUD4dGQYRMKD8QW8cDhmiBXmyDqiKiQR3uNGFKVHBV",
  "key7": "5vZbKKMJmKdAeqSQ1QbXerR1gKJcwHiCHeoWKJo5BC9Vx21C42rgK145sGPqAUUwzxc2XC7SQf9Vfu2asw3yWxAq",
  "key8": "EMaCZDi2vZ7PqeXXaiR5FGfuACXPkCFM3q3YXkSpFoLjHzRz6yaQn2BM8sjmPNfzKx3YJHeV5UZLGw5zBnSpugE",
  "key9": "ZztfPwwHPpMzmvBDMbdgkwS18CzBPqDDLKCCBtPKdbSPyL9oELS1NHzrHPEsz4UHExLCezaUqobZUj7bkTwvrMF",
  "key10": "28d1YB2jrHZAX8GZiu4Df9WkmzHHAj1KBrVbgpWW452rALDy9k3j25zJShgmaeN2ktX1VcgescWHoiyyod4eYJzp",
  "key11": "3kQjEWDeN97BXcugx9vSFU6FRrzKtYz2sVg7BKweb9L5X7jZmZ4vuPgVUM4KuUo61uNABd9BgBc4dcFnimsHL6sz",
  "key12": "29oYRRXt1N3aDE8eEjKG6Hm5WmAxkPJHQhEBR7FidKuiWfcDZKXV2He1CK9SmHSdW4CSaXzdfGX95Z2hKdayfV3p",
  "key13": "zaGoSrT4SpnxBKZtjegW2PWMVJ5vWTsRJeXeYwUT1SGrWYhVTgSJ19Vv7XdAPWTA79NsDa6h9NuXP2Fn8FidaHJ",
  "key14": "5mqQ4Rr2GQdCpToyfkvVhaae9m9bYsQd7urUSnLyetXKtj6xaDsLvNKa5ALk9ZRFjNYBJhoE2mZHmjP5uevKh5ni",
  "key15": "65v6zk13CS9rN2ZhN7nFL3uczjC3oRGYxhxky3U672VvtuJVcomEBu1ANt3iZFztwfA6ygoMaHniMngbEHcBkJAs",
  "key16": "5XHzZZeKbx38QTek1dYMBDByiqrpnj6AFktYorMNRN7gHBsGH1cUsMikqp9iaZDi1iee65SLwkkShFyoaYZTfMo1",
  "key17": "3JigS1fJGcDsLLCL14HSumDd3LYZSmTpMgnvTJWK5pvxYLD1FNNm6pSysrLCYu2oCgwYmTbBvYqHq6yXo6BjMpzu",
  "key18": "2YDG1HRRcvrTasxN3imBMDaX7dm3c1jmBNMRaKNBaupLkhEn2eK9aPKHdJWuAvGvqaTSnG4AMgGdFzQDfPxiD5KU",
  "key19": "62qJz7LZSkakangxbNv8Mvo4JHv1ajBM7XdbsvgtxRY7zDuo7F4DTVXC21ukvpWJLQJmZN7Decfo6HDteRD97tpT",
  "key20": "9b5axWptUznmLXCdhyHoUTiedv3KUwx7efg1PFx9zGeHXFDeqkQUKqqHh9BEsEvF1Yr8sqRmcfyhSM5BPngVzMR",
  "key21": "22XeeTvZR6hxPATMsA5bmjGSMKF87CLsP9kDq9jGV5xeVQkhGPw2ZGnw4awLhMTBbeEsL12Y8DZhoqo6r1N849pu",
  "key22": "61ZsnGJYL3aoUknvncE9Bd4xvcEBXNkcWkPJk8x4snjmrx1RwdQfUv3xBNpnUdR6nuNcWBpAq8TMvwEuxEAYqcy2",
  "key23": "3gVhQ6iB8mTQF1NB5obtt8MhvHme1enQ6xQt7553WLAENXoqLZbB9KUd4z3BS6Nsy6TMoVxjdPQRKjx1g9swCqh8",
  "key24": "4CJhJsxyrdAfxYnZMkgXCG1UjydqnHFJU2NM1xajvoFjBuEMUW4hD6zXyevjkAShWdn4debidvA7Sok7t3WusZSt",
  "key25": "5PymWAnBP3ZoRaNM6eWWPP6KudpqiJvVHV1FFNgP6XBa1aKvo7FMSLtN8FEwG7B8coz5AkMDeHDCVXE87g3dLGCj",
  "key26": "3njd5nD1CVHMSZGtP3JpKSgwAvnwQWwa9qcd1AyKGppsZtgb8JETGYfo56ExFaUThSqbiXDyCm4cy6xkzW2fP497",
  "key27": "3pw4MP2crdGuxnuVTXo886W4XCBStNhUZgX3cfykhhrj3DTYUrG3P6TisLx6EGdyo1QP29yWoJ4rz8SHyiDgiBLQ",
  "key28": "5UxrRNT3nfQfexMUv2oEwGpt9zScmSc6YhA7A34dgYZLZqLd3eMeFNiiitL2fJaAcV6BD9RH38m91ABESL6Yyfjc",
  "key29": "2EEhwVvvkQoxp9JkhhXjGwb2pywdogBgQRMg6hWffPr9caZJyZp4Prqt33iME2pHGfS1LSYo7ywps4Ji5NvYxXZp",
  "key30": "3JQF7KH8GWtMNAsRPZhspqqm9kyDLh1E1taaP7iN73kzDbmULwu1GZJJe3n4BhpS8VRYjhVN4hp4TWi5Nu9s5aNH",
  "key31": "82uwzp62kqp2dKjYDQ9Jb5xkkw63KRi2owhrGHytD1835NDTxTKs2rEXy6kXTYw3FNLFkyGhxcFE42AMgMdK6L3",
  "key32": "2ob3ARVBqVRvTgfGfHJHtoS7NXWxoW29BBpezYvG7SLCzQN4CpkGode3xiGyJ2K3XZkNQYX4iZgzB1uv3QLVJmCP",
  "key33": "5Kb1sUWoZ9yLuXW7gL5vP3GFYXbw936KNr6wxwaYbEU5GM4o1kgK8ZeQ1Pxs5NBtFYKydtXPdWVRtAd2rPHsByrR",
  "key34": "2LUWA3HyC3nAXDKC78KYXqauvK6mXwTvH4C59huBqJh1RJe692iNkvRMeWQm64kncCXFfgNWPjj3Gj2yJDrLiKtv",
  "key35": "4aEg9Wn8HZhRLm1gQgmUJoD8tT95BFZupfXha8v1dGBPbAfFrFvRzquwGnZUwft5po82qDtGLjgkj3vJECx2pBXx",
  "key36": "DJe5XqKasKzP96MXndQmGR38awuPFB89xNkT9qybZef2Ncdimt4mP7NRoWEZXHDsnm3gYYK8yaq6wiJ3k6EEQJM",
  "key37": "5VvwQVchsoC4ZiQazGVUUtMEqgTQJHCtPrgoHxn2n8J91KNx4wSiocMzPLnrVVPQ5dJm25zk7umFDKrq7myZ2q8n",
  "key38": "4ysgXf3tgYnsth1Wkd4puqjukewRMQkeXXoUjnXfqhC8HNKeEjy4aNEHJCCbwphC86sTervv5HXrFYpXeg1YcscJ",
  "key39": "4GSW3GpYVwxf7J9ZYSZRDwLZYaSKJbRS6TXB31MPQGG5bnsFVLkSAGvUC8xpe5BMucD5oKyzwT9NpNcTPnijwfQQ",
  "key40": "5U4DNHy1SuL15f4ib9Sy5wn794ZaTmAkLWrojvMxJtYWMuaBkBgcSQ19n9FAh9fagahFrxaDjSoZ9tYz1ew1EVXg",
  "key41": "4UaLud42zuHaeztYX2chbet717zC75KYVesmQp5KcDjypxZKVUhYRewFdUYgpa5CMcK2wYeDQha6QQDfsLi57jCa",
  "key42": "4nJ6rJMv2wdR4hYgTAxZaKSYmpyUFGRbbHeq6TowLPCoq71kuuNDbsoLGn5TLLcX8JSGV3ZTbTGp8usYd9Jvvp2n",
  "key43": "2Q51RabAEt9HJ9A4HGzUjC5Ws6NEihDtjbCNtEzejgUEeUWPc7iMtowSvHfTxZSp7EBeQpMSGPHaSRSf9hcLmmeD",
  "key44": "3PyjngqybEbZPa7mfR6xJvnSLGzraCj48D5UCLNUJUmQJoNDLLCsUAaUCDXKK6e8CGuNioiaELBQQbzkhQP5P5BZ",
  "key45": "XBjVBhodmeqPkstHz4QKF2gT5spPEKdTGz2hJWrxFAQtUepWMEGbZXDaWPSoRzSyekXACUvqy6GJuQnfHzsHj6e",
  "key46": "4GbStkgebGW2TTv771GUXBX6VECyS5nqX1cKTyZ8APv77EAExpbfdvLxD8BHHYugXR2CkmwHNNHyQgx68qNQrfcZ",
  "key47": "3wttBuuYMAD74T5SambAcft8NH2eWqmE91RKZuR8mqSdGWkBC7vgcdPLnEn4eUgaU3wPMQfy36BifKtcGsMLxwuA",
  "key48": "D7NQXsFhs4eyTJZthFbAB291kjs9dspC2Rb6n985behXTHu6GHV56VRECmfeze8eXbqXqxz9RGV9rMD8NYG5JpE",
  "key49": "TQr6R1GjQZKGvmLg5x1KEaExTQZYJ9vS2UePYuBcgSkRKUCC6R3u2gFEH4Hp5nHSgjQtjM4r6jtsX3fAZxjNBkd"
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
