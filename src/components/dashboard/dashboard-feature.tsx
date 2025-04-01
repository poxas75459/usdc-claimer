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
    "47E2t8aGmXT2qjiHnkyTaJagm78F2v5uQLBK1JFXHpEs3w8Kn5yHqXQcKRwC6mpQrZgfN7KXERT3gCt6tAzmeg5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yDq6aHUKs4LgkxraJhvT19qqGJW1fEBjbz8w75hi7cCeoKiNfGzCehfnvV8RqSVRqQCxP8WY1ErA2bqunsodYPf",
  "key1": "5GBb4x4UYPk2pwvjN7QXUCatPXt4KeVaQ2dZgZcu1bAeKGk4SooWrY2Ng8brvaTxMEtM8mygjFjyD25ZpRiU8VQf",
  "key2": "5Ycw2QeDPAwwBK1LjaKUExs99Zc4sXpBvBW2N2zxEZgC9NZ9SKEQd5qTRnehy1bcWsHWcQC3ASFN4dKGo97DH2YS",
  "key3": "235EMyVa4UUJH8jHBDKLxFivgRdsnqwhbzNpyTqTkc8RjJS18kSZj5yypbvZ4YjtS6uJC981yw57N4Nj1diWKPZP",
  "key4": "2eeVpPxLVXTJ72nYq2PfiELZeNP4fqQUyTRR8G2gnHkvgqPkWDUqnanxxxpT47fRCY4MNfB55Xwoz1HzALonTzqh",
  "key5": "4NWZ3QeBrZQxyh2hpJbAnHfDSEKeHJSkNC6AX7UDY2Q18BUbGz1MEZKCdYQQENyFZbPAe9UjhRDaSEDVVtaYLZVW",
  "key6": "5sNw5TAZmTg96GJikDoCu8swEBwRGH2iav2aqYtyb8H1WeZPsGJFUJTH1VzPv8ZEc7FScW3hnp4jg56HNctgYAmQ",
  "key7": "2zPnrKRDG77pbpEyfbb9JoXPpKJXznuBNV399cv98MVMC9utQk7zm7yoYnioQ2uoBKoqbnTfrPybxT533J6onumN",
  "key8": "4U6tx5UYBVfTBMBUzdHGnat1ZtRb3NfyYTNnXC7DhonZFQz1jZgndMk8uH79HontXpSeGkL6CCnmx9ePAcABaPFE",
  "key9": "3SeEm1PYLxZK9wWi8GJbYYQnPeos7XDdqsH9kBzJuu6fhhd6Zrdss1HSRBXUXfd7QqkVb2rpCqxDQUar4BkVzrZW",
  "key10": "2h9qfWTPgqvDjCr49PxjbZ9SdUmUXu36Mzd7omBnEZfzzQqgQjm6xCnGp9hZh2gtMBTaeCKXUMeAgJXUkxUjzwtB",
  "key11": "5rpKcNQ6mDsqStoyuQsbXff7WJhK48PpV7FfqDNdbM9BKqMnjKa9vK6ieTHSHM1AcjuSzk2d2y2K19gAoTPrRKpQ",
  "key12": "4VJTqzVnrsnuWFCumNHFXfY2QHberFMwDJhFtznYhYDC433wxdbzhksFo2ZSCEMZs9svHAyf4NA1G5Gd8fK1MCCR",
  "key13": "D3JYKTXmcRzRoJCrejyPT6Y8L6wL26pNWcHu3wDqip8rgmErYgGSLFVm7kXxXArXdu1BTWCiBGBbxah6uycYoSz",
  "key14": "G5q4yky2b3kJHZGu6SNpXFDXBNPEJPKcePRjxqgxaSUnTQTw6FAJQWgRY4iKD4FbJ98MHTC5AxXLPs8MZQoXBsr",
  "key15": "3RxLxtPmRzu79HbUpPfh5SdXuX7W4qQyewCsf4HnMvdJqZCiStFz3dbo9MqsiCZh6h8RJ5kDPrQZ4UskDjRbGBTg",
  "key16": "S9Uc5i1VzTo7Qnk4NudyGt6kbGDJkKsroTeAPg2Sq1jt9W5SFv9UAnETFyNX3UGxVGfFyxHSvs3j2bNXqdp1eYW",
  "key17": "7sVJooU3vYDfKPLASxrVKbiuu1CZs6CJMkm1chq6kaiBrHrycyS89WTGPWtPZH41VEKpgEVmmgCAh6ZZ9vdfTd6",
  "key18": "2kUWgsLfn5uXYQZGN4kWjZkqougkLnihA5ZvvvQqbdDTKx3oVbuG5vqmL5GQf9gbnXfj4gUfFEAgJVT2WczU1uZU",
  "key19": "2Q73weAY7s2CxbvVqWaKCtFFUsz4Z6pD9bZiuPkViN3dmvcQyYm5gxiJVQkEfThzL7EFgLkiuTnsyza97qX3V9ie",
  "key20": "2LbFKt5xhjb4bqrHmRqhUmC2ShqyFwUzo1aQaCmoLBbVmnoSuqMTd1qbBkebq62uc1JQrzZckZHpckQEwebo8mu3",
  "key21": "kmkUof7oERrYsXaaYK9kKvStgkv9EffNBppE9hibRC1fruMseVwri8zFmCZHuaCBbJnFUffJy7ZSKDra3bYXbYh",
  "key22": "3fszAWFiwd2V5oRAkFimGWY6NX7vJw6551opkBQKgzjGcafBF2wSmHvbWURJHVSV6hajcQDcqhcq1vxCjQHJfzqU",
  "key23": "6si5j3U6tmPNUQ6gNSwLMSnbFQpEPkYCBra6eL6wnSoa1DMU1gAK6MF8fgPKBnmtTiYeyqJWZb9h2bGVZTmpG4c",
  "key24": "pdRMFScyfZ4oRp8eSFYXRt97FfsuhGLU3sC3q4Rftp4nrv1y16v7ZLoXrUcLTenwBQ3uYQpzaGTPDqfsY3FisHQ",
  "key25": "5dL7p6qAQ7RUNCSzY7XeD2KKseGHWmNbfD1LChsWeCmXBtUhksuQNMAxqP3ixjHqUS1NALFpQ4ezsmDioXEzzLee",
  "key26": "5rVswSPh678DKhB7xVerHxxLsoWowhZKDL3PcAHdXgvwicFWbkPr1wo48KVdzZLQN27ZFwPWphonkLbKqZXrYLoB",
  "key27": "YFcJYqLVopQVXLV6j4saCgS2wZUc6MYy5AF6xKjUvfFJeRLwqYmdBg4bzK9XD7JTqn5ebPuZBAjQ3Jeeg1Ptgat",
  "key28": "5yoq2Mie1jK4sKwnL3vqJ9ryax32uPCvSfTRCibYrZmnrjgvtEVpFVEyFYgDY6jjU96n1GKPL3LTB7pe8QaqXirp",
  "key29": "5MAsXFMuJNyVscLFVhSJkZntrZQuJY6CeUdjJkMmpE2bHNuxkNa7mDYPvajsoUJxqe2NeWbcYGvmpm3KpHHz9h5K",
  "key30": "2CRPRTHxM2ZE97e4DFC2iP9Y6ezyzQ4bu3jUfzBsheQcLyeDBems1cpghkRRd7d55vMY87bp8LGSpV3CQwB7DpvC",
  "key31": "58pNG672iKxG1MvyC8sg9BYXkTr8CFqeAkDjvZAt8r7fdgho1G8YkxJVJKWupjRwxzXMZ5g1nzdBY98XU782JPAt",
  "key32": "xQTEwRBNHdU5GwQDCCVseckqAB8hYj4tubJJJQ7oLPQ1P8k5ZuxBdJNyRFF3gMD2vAvEUnfuvytDNRXFKmLjMxt",
  "key33": "41BbHGY3Wrwo1Hq1KfmXrk7FRmZ3ASv2PtNQSHypyfs7ZCKWaNQ2JmnWFhaoRpCLfX1WUoJFFLzEUHvLcZMcoYfi",
  "key34": "2crL3WMg8qX9BSNLcGNoZN5bXyJVUnU3kCHKmHnFM2ER9C6qXfTuufVRGiyAA11so9FY4X5YWoumdRhTVt2X8KKE",
  "key35": "5RtG2W6cs9zb3dzpP1uqpqw3jk92SaKC96WRex3VotFGbstKa5E9fhgnrwVc3PDTp5ecrZPPXE5GVGZNgBdk5Bzu",
  "key36": "5GDBeoxMdbxVs7nZQZv345eUb5QiWb5s1N625PBf9sQVnFrhwVVtEk4N5rddwdEEG1SZ6oX39q5CmPNckDrMF6hH",
  "key37": "5SEhtkxtRSFauhSCXyubpXbGCPZEUdNtg2MccK4QUtQYxNHMsFVx6EqJQLpX9JTQ9kmobe2fgsP2J39AUQQerJvM",
  "key38": "d9owcTvEyivcz3WysoHwQJB49crnBQ8yAj8191LpHdwRkRitxsfp8BWY2k6932FGuxNZJLHh4sAxUedwrDrgc7D",
  "key39": "3kSiz8aaNDp9eMy5ipDAghhFjAhCUELLBg3zEVWEQGVrQbNjSFPsC4qXNotrHtER1HCoa125wUCgh7TvkbhniHyq",
  "key40": "dzcZS4sGo77hAk73PuqiqUdR3VJh4wiNrJmcH11mK8KggVKF12qx6a2GTpicC96QAgtHBLBKQ4rTiBrekGDsCHp",
  "key41": "3XSB64EgvqPuXLtarCE4FvuctuKWMuduMS7r6oDcUe97tpHPbkvRhxj9rtMVAGNvbrT9AMtTL3jeKmJBY4cAucSF",
  "key42": "5g9Srp7sxREvbRpdPW6nhVUqW13mLk67b1HchuxNej3dFdgN1SZnZj9QwuDcTnUT3MEek89gjDC8Lugn1WHRZsbG",
  "key43": "4hYE1rPo5xuojY8TwEkGt5X6wctpTPzQcmdkQ7Bg9iWqZy92w18P46mq1JLijnqPgzDkiNzSmDDP6mwDoPTaLUL5",
  "key44": "4aUgfYFsXmx2a5zVshsh8wndSbBPmFg8iMRx9Uv6ncP9QFYqja3Vp499Vh3p1153wNsBGPkog4fQZc5Y4k3dVtZ7",
  "key45": "SpB1puucwkSa67F3gUYio6jkSo8GUf6dffM5S34S4gCTqB9HuxkjZhmU7hHMTco4HLqdADoo3SXTy8bAxj52KGa"
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
