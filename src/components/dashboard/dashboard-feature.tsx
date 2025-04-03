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
    "4CLmrBENKyv9nzbGpUuz57ZT6Z1UwEHxznxN1MYE23DE78qhBQ7kasCyayyDmT13VVQwUojJGc2abRu4duinrVtk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5apfoE51xur17iUe6mV3HWSfovPDnViGMLH5S7pQBjtWEp2Tno5YYmaJ4urk6cYsXCb8ewCKPeoCyyPraByFmxEU",
  "key1": "2UDvHszKhsQFSFpGPeJ29r3v7fgTcAA5PQ5HWj3iWZiDBykg6FEwbMNETja48i1eJncsdje1zsKKyDjgu2smCMbX",
  "key2": "5xShtmNtna8MEYKay1UX9nmJzjtTAjZqDJr8QT6rbTfzVETRYXpoC8j6mv19rKgJC8JLrCUtvm48qS54gpt5L5fC",
  "key3": "3UFTLW2AXSKT192qeN3WmwwHdoC9FVjLssnKoBP5pCnc5fbGFx9yhrGg3jf4amnzgumTa5JuivPQqx1fgdbzDbBW",
  "key4": "2Rp8KfzRz6756KcftsSW3nEshfxbkF8D3UNzBTdWLx5DxEZ9viTciBUkhfq9EcZhqgA4Ydpvcc4ArEEW4DYqA3fV",
  "key5": "4uvC91cKqcTzjH3fKrciNaTXtBoR2DC78ZDgHLvYZJH468eKiY7kG19rbGvFHMS5oxfQR284jYKTZQnA96QrKHqy",
  "key6": "jYiTFZq6P94QUKhBEyXpJGCg3kHMNyzkxkSK8PDE4nb9mhuVPR6xc1zZDJQWMpewgT1SvV9jatoc6NznBk2eLwo",
  "key7": "2RxH1voKh4qZuujCiHemmATXhuiYT49DU37bPvEGNcVZKKL2BzkDjsYiC8yEipb2YiMnNLLGsFjLENuUmkL9rgNc",
  "key8": "KS23CedvrqDgaCDyeebsVGHenbzQGebYy16QLhuvxDbnWckc5xG89anFphKAsWgY7Pr38mpB9yTAN5w6AM3ewva",
  "key9": "q8qhFRKd7THebUW3eEsYTV2JybmSWF7UE3BehJFmwTdy8s4q7aVz8NoRGF6t34JsKyuvHP6rcDEeHThbfusuMix",
  "key10": "2G81YwET1Byorp6eGumJEfanzV5spYmxhw3r7y7X2YyLiqweV5A61abcr9rVVrc5N74ASaBKYgpxsYxVVF1qau3A",
  "key11": "5mUDQeQFjxpdKFxYpQnDNDGve2yeeA81jvLK4SmsFdgeyDGiTMHntN3EVoPihtaTTHJnS9KzLeKmog6LjvBRNQpJ",
  "key12": "2qzfUEXkoTVhLBQvwKDqh5EPMVU5PshW8ueanHSYerT73fG3Jri6zATbf2gystwGi6w6NrXhmtTuj8NckRjxGGyN",
  "key13": "3YoPmc9nS9s4ynmS7Pq2MHhJTbmY4GcDxQxz8fSD8LSmZs8BKMx1TrVw5taLN5ZDG4XFSDDcYSRxbxs56NX9NbXb",
  "key14": "5nEeAgJKC24kw7rY7TdxzFT1upX2WF2ufN1ojhMZfngwaYUbe7r2qeVPwuTrV4tt1UQXHA4bsak65jRWcr4boDzj",
  "key15": "32b3ko5mqB9fKN9dkaFXyHYMhV2N1MQSGmYyF21Wu5KcuRAgjbx2z6HqniZ1trdLiSG8nhhv4cTqvgbbZFePowpp",
  "key16": "5taXWWU9w5uj8JLPz9w62wUomnXupFRSZXXxLi13VsAubaFMFXkFNCiQEttRcU7n2SkzoPKfZzFAJHhPC9uB8Usg",
  "key17": "5EmyLH84dntq2XmknPT9F57kxW5sRTfvUbNHNmbpTqat3PzGuFpDTLFMiKkaqDSDrg4i5K7JmxNUKnTsfxAREzQj",
  "key18": "4VeEocSKsWNDyxPHR8bkVf28Uyw8b67pf4aWrTbARZ1uqvpndMf6DCRvSz4g5qemeUCPAtHfNtBT4fdyePE44aVs",
  "key19": "4FBdY2DMSMmnHXEdav6wMFQjVXkoyWx5DfNMmQTDxFVW3tXLDFHG6qgrv4iMP4NpFXyJt1QSnBEX3iyjrzdHYGjG",
  "key20": "S9avZzBbD1ojrVQsMb5xDSWKyWjEwga56v6Q1UxQnYg8v4JNgp1RChUvuwdd3pGJzEPrYgP5BkR5VCrUYUwDJtk",
  "key21": "37dRMZbVg3D2zU5WZQ6sHExCaTRXp9e46otW5Pkkunqr8RFWafdFj4EfusZacm6qMvoVdHuVBAAu75WNC5kcXDHX",
  "key22": "4DJk8rL183HEgep3uZh34NZKPNBUaHeYnpupjjufbuvRwv5FtQkrCUJPn6U62WuAMF2DvkXkcWxosZeGy9SuU3Ji",
  "key23": "4JgxYr1FwURG3NKy9mjtvcgVFWs4G3fPoKsH3qGj2WDQznPnCEnPxsBTADyUHpNvn53azUsD3PBRMSVEF6y5v31D",
  "key24": "2DyAwuVRhR3vHvzpp5pKya5cVaf5q35ndTmiMf5L8KBCd7vb6SoksRsR1Jaj2J9C3Zey3xNqxQiJHZiyEKtsATVf",
  "key25": "3WBcRDMpFE9LNNwWCfAqi2KeC1x4LJcmp1c5ZC2JaETjaUfQN565JkDuto7HtnZsuReE2wZeRap6x3mHT7fRY7FV",
  "key26": "4Lq1iccwo5sXdNLctMeKkHUunkeYWAbkEdtqaeENcgjnpgJzUuGAvkyXVnPFohu18YEFaMCbGLmyXi9W44RjeTvr",
  "key27": "LKiQn6uFZH92ZWh2S2qbBBXSKWPtaCDyb5NoJFAAvPaYkArrh7iRMfhgpwcJH3PZ4oX7SmZ8abY8NoZ8hYADd44",
  "key28": "5Z8kLsx5pG7qbKS9MZTUTD5oami1jVR1WGNCeb86xCkjcw3Vxo7xBc1uURoDewTg1TwA7RCKLB8tgfuGcnE6Fxm2",
  "key29": "3mDrVDmZPRpoxKGqAFdRS66teKY5MMw4rcjFA6vGbCyTjX9eSaFEC2A468XdViaWoxR8d8bUBeNU9g38MFLJ6b1q",
  "key30": "3uR2LxM3wmuYrNRu63mkUAyKzTRr71EcHkDgrDSMURJQPN1Jt4rBH5VtBjK68jyCVHGWcBkpW6gvcxmvdRWmpLSY",
  "key31": "5YQHLrQqzRW9aH5fdVmC9Gru4sYaLhGWBjUCoP7cM7R4ShcNLSHkTdFSHJAg3iqGgwF8gt7mtSu7DJNnpTtZq5Dc",
  "key32": "2tiMbJVfhJLkypEC1ZVND2meC6cGjJ4w7JnznNiJyQ9JwWdWbeAWB9AzZnxCFQbveTGb7xhg97wr97mf2kELnmdb",
  "key33": "3YSfQ5YwHKKRUDngUXUiSRjeyE8w9EHY2HpTVA1mWBAfdK4yjBbCsMxa7t6A69NnC26NYwnu39Rd2uca1WbtJrG5",
  "key34": "3KrHjL1Ubqx57sNhVXaxLAjFXQMopG7natm3sf7MFug9UGZxViawQJZM2MF9VNrTjr9twTrL2rsLHaL1r1GCcpsE",
  "key35": "4HooCnAQLBMw97SQBkjkJw3xFn9MsGVeSwHWUBZHMfVzooA82dAG2r53jU1Gj4kgwwzusFNG8X655XxAFiMoEse8",
  "key36": "459hySwqJHtZn7ATVLhNEErdE3jhtGDF8a8NjMa4g9B67PrJS8ZygDFRH3W6hxdVDGcVnJCV8UXsoarhup2LhLHr",
  "key37": "3dh5f6fkDzABqEmxUauYRP1S4dLjJ4235DoYEboivqqkLeQnNe6mz133RT48Ht7minmfBxoyrCjjMtuJByxz7jzt",
  "key38": "2nK6VFba7LqEnx5Yj6C49S5tPnYSwkqkoMxqNJ5bkUPP7vhdvB8Ao9WnyT6EttRbhDvWrvH8bhrNXAyGRyeWDzij",
  "key39": "55Na4t4fwCuH5GhrR5jfJRAmBHJQJPDhqdgiseuK4WiNfzy4FE9Z1UbysD9SGnWvwqjsktSJ5nXLuvq18WPrUW6Q",
  "key40": "8PUMDtz8WSEUnuDMnVsX4TGYSaXdynrCEP67WeW46LHWkyz66facsVPRuaJH9fCXb83Lmo987PS3a69GTUed34T"
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
