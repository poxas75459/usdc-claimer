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
    "3HXfXLZqrmcVeMh6tmG97qsk2wHSD6wERNafcgxwrnZaRJvwBqQqSm6wjxrPd1Xv6Ne7UuNNPYeatbVGgpF2Ttxe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BgtDCxPMbKt3sWvpw9XK1jT8fCein4wKKUfBt7oeK4dYwASkAy5iu536dYiqSYb64Bengpmu7FKcpyEe3PamSuk",
  "key1": "5MS6YdosC8B91KL8nd9vwzD3Yik2Rw5cUXs6cWyi7oP8YtgRivUb2BEB4w1AmjyMH6q7p9L7hMYo6wE64xA6h4P3",
  "key2": "2LMYMCzYFNanPzHzUG87YwDEc66nGR6HkREJaDT3pEvbUhprWHi1P4QVe5NKYweYCf7RFfGuyr77aDtWiaagZkBt",
  "key3": "2QzVsjE5i8uwdMXjcoCN5G7npgSDQFNqnByN8u9Tk2LoY1qwaW8fTJ43KtEaXNZQJZonU6GZJF3U6Z5aUQ576DhH",
  "key4": "LyYv6mvqg1BTjb9fDwDDuLi6RjQKHyVZ9AGXN6kBLSbXVT8pqs1KhxqGRGsnCy3aR1XZhqR7QYDsDLHKV7DtPkR",
  "key5": "4UWYbsBu7opLk4CN3TSvk5YuSpY7zMyhrrgpjyEjHEa3iwLfppaRxarNoT8BWUVrkksnVeaC63XKjESH2xA8vBJY",
  "key6": "4ayqh7ZyMeiQfDpJ5kWhtW5wvg1qAPvScEBTexRrjUYgxftPN23UjG4RNVq3Km6cqe6MmDRhpvwEupmqFN7MwCUh",
  "key7": "2WXCeE9vJAhFXN8rmftY8fSSmgjohquX4mvXjuyjsHNKQMU6YPmfgUUe38WdETqETqCow8MY4GSkdx4H4VemiijC",
  "key8": "48eZorDjxKHtdJ58rFyMPmXSBPkYWDKJSgZC1LCKsDKyAvSH5DC4V2xCXM1Em192ibxnUueWzddPXxnptVkMkBCG",
  "key9": "5akhsEGRkCeFzr3N5tasvWnRsEFwU2infnL97Lav7oYJxoQDteqBNMozJNKY7CfvH1ZW1jsLqjoQtiWFE2HBjmCB",
  "key10": "28UaM1Q6Bp7ZRLVY9nH2pRr8eFXg7agnULv7BGHJArC7BhWaFYx33fiVGUYbKzNkaJYFM6uR9fP1nSnQkEp2hwee",
  "key11": "21Ddp75twfon9A8o4QbQMkwPx9tGSmfTGkvt7LfUnyEph4EJnGw1Wm2kHjEKF3rsDqmqofV1tWqwwAeLeUht7rob",
  "key12": "3Y4pfdXPUrNHU6qv74cAh7mKmciZcC1zSaRssuW3z39jFJQ7VVZ9WgUwFn7CyqmxquYhDgRUYGVJjQKe7D2piSvX",
  "key13": "s4qsBoxF135xDe4j51qECrSZhjSLL555qy4RHPSCE8vrbZv8RH8SgYPqkXcaUzvsp18AyTioo5jcdaXgKkagAMP",
  "key14": "5k2YE7YvbeUTqk5KKCfyZoVo56B5xLih9WYZkUEf8UkX7M19LEAtNJ8Aeejg8rKxaXVMg9uaehvZYeUJPaC5249Q",
  "key15": "wjFrMhbTtxN4hbTFwRKUMr4S4y4RTeKTh96JPb3KvAGHg1Z3VFUdcsNKJccg83xgukK7jvKMCSnaxTnhRQ33rCP",
  "key16": "51JtQPaqspYux9QXbW1x5QZXHtMxDg1c36Rvd3LMcYtZsi7HHyp6cQbH9KTd3tg3jhkhb1pM5KV5zn2DHJxgmv3R",
  "key17": "5d7qUcMsv8tnNwFESM6MB7e73AdqwuSkDhVqfacrk588GRoApoh31pYjUUhNL1DNambMyNV6BbMDdSz9EHGXbCeV",
  "key18": "2KrGq7xhBbLR4j65cemrznV2xkAj1dmZufGE6dt5td2GjWRxvapv2WMvvKEEBwuGqrpBzQEeGh2Wfe6DKTSmGExV",
  "key19": "4TnvM4dPG6CFgHBFwS8iEHssVisgxo423CosE9SxK6p3KRdx35jGcDUJ3Pmdsj3BiQicWY3NeaTKxYWSjft5sFd8",
  "key20": "5pT2KQZtp2cnYrrosNWiPg1jw2KcWdp4VqPoBcyorMnhQF9AspWnJxskVxkmwTLVUayHMv4gGrjYtZiXTYDcBzhB",
  "key21": "2k7avyVY19x5aZAiGWAuJhrZj3SW8Bbek2vTLvdpLacy5cjVga9xSh8MWvSkgNGYVEFmdWnuRGzy16sa2jeoNCUc",
  "key22": "4tPWCufgTLA2z2cEbhqqfBb9Rcb2tp4574TNuxw2U4jJQ6zib4U4ZDWjmVyWrHhuvadPYTnrhQ6Ks9LMNBErem2F",
  "key23": "2iZPhhFdCjMvdxzqHmE8gaErae8z3UQmzCSv1vAqU6HgKMPpWNTsFtCb79UinTPximq1p43jME533RU6jrqqfosV",
  "key24": "2APwHxfRLvERJyXbpaE8eKaiqUTprNZ22tY1uWJiZJBH6KmCTSfFu81fN4pYfWHvrxfeKnsfqgKeTzVYK1pEw4Gf",
  "key25": "BhmZEfXYeghNhsx2ryiaJpPgKyzHYXZmSxncQZztM3izHwLFYx3U8659gnWbELgk5nckueoz8u7pvsxjVcH9sdu",
  "key26": "43PkRa9oG8HHhVEy4XcsvdBesMS7Ukj2Y93mrkCBFvjjYBzHzJTp2wk9JKcT9YrQNBZC1NGqqzG4JEWchSeKAStP",
  "key27": "jRzAudhKF8ErPtu5eCVq3F6WejsR69KELRZAkCEUsYzrzFuVnZGxzWaHMoigWjdE695R3PasAGEcBKvSxjz55VY",
  "key28": "3LU7SwaRFAaJt9DWkEyC2oMdbLXCLjtWwm6D3WkvrWqQkVS3sjKupcqPWqsqzTk3P4nrmMBq5e2xG1rsNR1gz5zc",
  "key29": "3hJ4JeFraEL4SGqzUVr4g171yeaNigwVq38vCdAjW1jcnpi686DVPAkXZbcvW5wmHEz5b3MxXfon7hamiwyCsMb5",
  "key30": "5Qts4rKoAaFTQyhRwWNWXZQyDYATHgx2wU9fMNtEC8SpgFtVB3nVYuuFgvfEBvrU8PuuLUMokfmFokiLQdaw5qd6",
  "key31": "4jDGeVcinv6QCGafkHaN8KjqzX9eMsrfXxQGvNFjKaRJZEEUQrbcTgYoKCvdpjKidkBwpZ4CGTtjeJwWvdQa1gpe",
  "key32": "3tviPj6rWxV1K88htgEcgAM49PDUxHXiqCxLrQbRtZttvEMPJ33rRN6GHyTrrC1EqxoyEEqpEKXnzK1ncyi5rAtt",
  "key33": "5pJdUeT8dDWVd7VZQfThwPERrfbiZZpdAYfQkpD9zUthy47fNEhQZDmy4Ttk95zS9PkV2WABo5y21uMxwDg9gkEt",
  "key34": "3zFUHb7rEqFmsDMETPYU1FQvxrSzw8KEbnUkeAa83MYo5gjbNoocs7enuFKmigTfdSPzXduoZZF2DdygjF1KV5NN",
  "key35": "3ok1FJGnLdtxCpbZTDKW6Q2vw26erxnBRi9nLLsRDJN5YEVmBtgRFHj3GMy4W5BUggt58fTxhB1KPseSo7T8uJu",
  "key36": "4JdKL4NNkKoEYwBXMr3V5Uj8apYX5FaXM16E2aFoFcLPHNQBQDxFQFcTjG3X12x6He5WkeUUZfeqGHcMwokho4hy",
  "key37": "5Y59CGBZkhdyVYwZyMhjp9QsJAMvTLJ1ah2r8vMF99kU6MvbG7fhegMzbRUVJVksjkcWTby2B44m1YxJAjH3GVEt",
  "key38": "4cwMfMquFQ87yVm3YPd1piDex7KgCaZFAJKU3GgUWx1A8NHgoLxd7ndoAddEv3VKVMRfM2M7gJkYTsno7bQuHBar",
  "key39": "4WSsNQ4Ss2Vm6FKXALbNT4rEpuNn9STQhD6ZFBnweeBWRX8hqHy7kh8xJGbTPfVPpne9sYhUo9bMBSmysoq8fQUj",
  "key40": "5tcornompFgT31Z8AmsbHk7KURJ6hYZUbLiTTMFy2CbQiZNk2jEGn6Qzin2DHD5RAaFzfx75JhgWQRVdRx56QSPm",
  "key41": "zvqXcYDkodRPAYpb1i2TUAxh2zkQejRUzZfuQwR9z2jFh4RyUcnGtjdJ6wLZXbZbe6f8kY5qgzKxRPRXdoGnQqB",
  "key42": "22g55zCoPGXAL8GYXMvWhoJecMHNMSEHDAM67uTLS7LzYHotgkicQQuuJuNCxy4zUQcei97yuboc8h1hEqdsmvrv",
  "key43": "4wcy22KDVaMnToDW5iYVRU4L61sq8YS6WgntBCrYXPVFaMMK8vk6JPhQ86mip762H8cDuR8zcpUTmazFmgBf4FE2",
  "key44": "HdGGP9Ffm34nZrikUpm4HDGhePC8PKHSn2hxe845igQ5zWfHQzFR9zQxex9Zz4zwNW3CFcASzeQ6ad5BLHjjZes",
  "key45": "3j96GJBuEajx9AvriAQGTyHPoTnkWA5VR1mkbj8K27udndvUzJVVnCQb1gdWo8ETv5JCxBDvgRpJgfDz8PU82Pt8",
  "key46": "2R1N7is2wuxCSkKapB36z22QtDE9KbVEfG8jEY2WXyd1oJ8Hr34AhDp9XXojski7TjhVRzpYD3WbkqnAdRz6UXp3"
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
