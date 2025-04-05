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
    "31LDw8NdggihTXb97zGfCbMJ18B8rxB1Yu7UR4NcycaVDjgy7DnBxNDFN9RRLLeTmZRxwAiVyB1S7fV9XTmon2G3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QzGgwJq51DzSsS5MV5fbuiHB6ztKS84Z6WhdDo5Nw2rUy3pXAheVGpo9D8u328fdATrvZK9ze1dBceExzStEE7o",
  "key1": "88mt7Y7L66vrgwRcd233Z39DCQBMRfzJGvDBCokSsPiK2LWRZfm9wi7zKAK43DLHR5og1gHqLeQH2ELKbAAVAbv",
  "key2": "4882EGFPESoKu3QkHkxXPrg6sjW9uAQnWajv4C5y6xHD7PoiT7kEcGNSoLzdMjaP7zN69HdsLAg3rmzM3jgBcrwm",
  "key3": "58sbWbX2Av2sChVFvwEzcHQLoRmxsGFwfhNRgkYX5tLNF3gzbVGXqSZfSZH7Zibs3SLrEXHiVtmY4daL5NryjZNv",
  "key4": "y4Lhx7QEzoF4eCtvtbDbvLrQdsHUHqKx1cLmoMmvViE42B1Krd8DR2FrvjzEHgCVfCyruUPKppuR89xYWf83Wjq",
  "key5": "SnJbMeXpmzKQJAz8CPnNjKfxXgQc6BVziF4YJgPTQJNQ3ZJArBwMrf2rwmqiJnCmcywCBedRqhZyHd3YWEma5Pj",
  "key6": "3p3FGqdqjX581bynherBSEtbwLUJiy8zugc772ZZneGndFcD4DMsGiqDBqHnDmEK681qJVRKFxfLqJhC58kE3NuR",
  "key7": "43yZDaRYqNn9yE7JBqwdKihgR3kisxrvPFzuCV9H52MASguySE8K8VeGShePvkEzAue4RQSFay4q211mryQFGKe4",
  "key8": "5sVwxBZ5WB6DcmXuPMqUzZtY4XnNH7Vw9biTVQSgxc5PVV2GAQvqiV9aybkTjW9umS2fxpPDhHSLQnMwqXJNuPuL",
  "key9": "iZaWjZZ1q3Ug2UfFWVhXxTt4jDvYp2ab9vALJFue8JDntEZx6ZbsfRcyGjzS5gQySkXUyb4wSbGUzMjeByYeCZR",
  "key10": "2aJe1dXv4cvcc93JfKsynjxyARLQJNo7MMcC5NVKAvGxu3GPetFgne21RUrKfnsFTcEQZhCkAUk9K2T73Tudvcns",
  "key11": "3dPqsi7NjHCD1vkdAPmxgfser63aH5wB3rdJ89A6niZomwCF3wB25ncNSkyHhX23vPMKTv9CBF8gFwYSS72gu2cH",
  "key12": "5oMF55TrR9ywZznjBrxWu3LChKKWAnnvtQgsrkhqLpTihMqv9gFFU2pVLbUAviHRoa3kiMG2PgEcCSw7w1mTerrY",
  "key13": "bRvL4oZ329nVq8pysteaR4nT38eq2noU4Xkfpt11aEXyz21zoa9kU5Gmtpm7vMNW9q5VakXLnJbLKqNuCPYT15x",
  "key14": "2Wc23rGhxXAwRi9a3bx4dPgQo3iAAsmag8X8MLkY7h5RkTzYar2ptpoBHQDLycwXXJaBpi1uKd53CwhZj326gsgq",
  "key15": "3g8MoadNRK4YZTdyiJh6Buctw4UjScWSTj3T5z4kt7jKSw9Epe6waevj22bcpkNxLZqigfLmLcun2nnSUeo61ZFy",
  "key16": "5jFu8FaLsJUCmyEvJaD4TpkntWqifUT53ZQ7Q8if6ckbawwj7N54HEZHAPwPKowqk2wtYGkRnYmTcoURNe42haiM",
  "key17": "5Axu2hVNFnKVQYLF1hTvZKrdLY5dwZCSbGM1dCPQEHHq9PxoDoWjdcvGVFCZ1UVHL5S6yY7odjkaVwiZdaVN5HQF",
  "key18": "3ofkfgjC2Q9Z3VyRg52QCzewfpKAF4jTi8djWwNfht369txjUVHjvpcG98EWMdGn9MyEqXWGJDyjoFQY4KdLo31e",
  "key19": "32L5exytoR1MNvr8baSJ7gVpmcazqFYAZB1vvnRtXpzFiSkQtew8VnHVX9exQnrU8kBdccQ275e1iKys8gn2ks2u",
  "key20": "4GpYkRGD1F2Ywz5pCBKsUvVEEMNS5LT5pzqzauPUFErBzbYCYSCqtDS6CSjCZ2PeoA8QzxZs46mpUSkEFW6UWdM3",
  "key21": "36kP5tLzqk2AGG5kkoSF9wT3ow81YNpA68RukuLYXpzTXRavd48Q3mnCb2PaBk6n4pk8pzErL9taS956yYnu6iNy",
  "key22": "4NDxSe24QWnm51NKVUsn7TKoLzSXDPa4TqL6cH1dSBYMJRnfz1nLcq5bT1ZiAoJgspc6CzsJA7uinb4DrS7L7qKg",
  "key23": "4cJJvYqmPyiLWP758kznsyY9yUSqFE4jEMEB83NdeeJJJNeqgWrdgp4yVS9RHMGcyYHTpHwHogfSwfx7YKYKykWR",
  "key24": "4LJMnz8g3eyN2FHmUhEk4cFtMmy93K4hJJeq8EYvQ89rihC4eJY12vchKFmfYXRXdDGKfgYcZ73eofpGNfNbCUNt",
  "key25": "4e2c4MzikzbCMJsaScpxewQtc5JSgtnoiUjGTg6QEEeEtEXoGbTm3612UdZ38rqqHFgC6P7miKYHriotbJ5cSmZU",
  "key26": "3WnpnqZeJ4Q6GTMr53uuwfRT31tethNjrV6MGtkfudCWPyJqXsfxmQJP7ie3H4TMj7frC4dsHkVUZwWne82aTJ9K",
  "key27": "36yRoLmJX9KBV7fXjYmAxKN22hyCP6d7hUC3LkUKyXQS32T1Fjar4wiiMvK7snHb6auGKMrYYuGvN7Jba87JjAiK",
  "key28": "63zwEB1o4q9GunQru2XGFX6sEVf8u6o1GNbmEACcHpUmaAHWqUorM8bsNvNuFMXitXcZntTqeDMSM5g8TCTEZ8es",
  "key29": "2LJ4VkxuvvT9LtzDpxNfV2hL2D6Nx63QaNb4LjbhbfozJN2FWedYDumaq4LLfX2n8wbGNyhopgGBXvB513Qhm5fQ",
  "key30": "67b9KbJJgvawv8Pd4gtx9eSXBK1M1Cp3HbPtpUoeDNm6aNirqBHbnHNbU2mGnAxN4XeSW8Fr9yWLZu9T5sKvr5j5",
  "key31": "4c37Sx4MHyuDyb3c4hF4bsLN2PjtwQDf2DzgmB2eRDfgjvMZFERTEpTTzR3DpMnvpiKuCFxr7zcBof39Rp5DChxJ",
  "key32": "5eYGPJSTpYvjpd3qgxdBxcHeewK4rYEc27A2816M7dVU9C8HvJjRWJVqgtdgX4wABR9fRp9DPon3Qmkwcc3dm42e",
  "key33": "4jaUKTcJrevYbpN2r7awrtZeazYRbkihArKr9CDKCkuR4CCSrVSNfGnBfJCBh4ByUuUd6hBf16STL2fuW7bNM3Kx",
  "key34": "4w6XfQw5MYUGyT2yM9Q3mD4MQaEkXpYEpAhFLNZap8dj2X9Ezeyw61DYMb66ek1TBE1iY3x34j7mTBF56o8W32Cy",
  "key35": "rMYNzRnzr3LtsTo3HDAA9jRvpczMft1Ars5qkLviBjyh9Scg5enppnvTukYx2wpidZvwpJ9xJGXVbc5PNz1doPJ",
  "key36": "351Gr515fk6UNnegroLjFCrYaGsVhRtrSBFGXB6MRqfwauxubb4dytj52rTVd9WJkoBcGvKVhEQjAmdbYGtZueW9",
  "key37": "vTGgmhF4dGTAZFbKQEcE2znQFVbik4g7CevPomCYbRgWkYuPkvbDTLrRuenVoZqvERGNjeXLA16UAX6L9FwxFar",
  "key38": "3uZdxWo8Kvk8fRyWZ6TtB5dM2LC6S2Um83ce3TZ2PhgpB77AcW5Ea68H8xcxAf7uqARVJKLz6o9R2xBDJ4z3nqYk",
  "key39": "5QK97r4mzveauCwFejxBp82QmGmTZqi9gWb5hK3RSJeg9dfK856Gtu5Mi1SZzmG4ercQ1vGZ8urMcWHHethBx1GV",
  "key40": "5uhBnSE5hqbknbW89jakpuQZTstSrgV3M8SXhRxvBZ7gAysqPec22isWYtFXFuz7X7rcYD8DQsrqsVtrHV9hNUC7",
  "key41": "3tw8SYnhEnoRK8HxbFtgzs1FBZ1zB4DB7a7MnNRXnTq8ShTDDrKRLUf5HEdxxbhdkRAvCrTQi7r9G8e9vsbJrpG9",
  "key42": "255mAJVEcBnbx9goxvkBXj3KrjdbpnUggXyTkAJRHtH7SQ8KiH8mKGJH14BeK68N9awV9D2CBJ1Wx8ZaTxbeyuGG"
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
