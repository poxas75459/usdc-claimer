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
    "5KxbK6rZbFD3oC9uwM2kaju9VJ21Y47k8f6qcRaKmHiSVd9vYzZrUqnqVKsCq35X58G49Q3YCHos2hAWwVKGVeCA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25mSQs8zRvEC53c4zBeKwn72Bmehhz4QKt7qupjYiWbJq7S75e4m7VRTcb5Z3ZKwfrvHxKyhScJhisc7P7vLf33L",
  "key1": "2BV7xkMfccpkVnLUxYzpAzdsQFQnJYEuNHPiYCHSwV5E8ab9xfWHK9Pf8eeSNdP8pk6sMeyFifTaUEcmxMYKgdam",
  "key2": "5qbVL8U8wkzceEUuBPBuD1VbfwM5vVs4Z4s8mYKwtKBNc49bW7vcfHQ2BRpuZFTyFeB9Y878BZws8eNtAkr1VZJU",
  "key3": "4GzqPTC4HC8utNEyUMfMHEBDcyd8hoGXbzG1qC7xUcLKctQfy2Vb6Csz1DScB9oGDHdr4hGxSfEkJQLEBXVXVGoi",
  "key4": "4J8crJwEFUQJSqbYLANaQkHAMtXdJuc3jWE6dUkir26YwUhvGWi1zAeCfaea1KEPcEn4gxzzahygXyqzqXLbHSVw",
  "key5": "3WfDNc2djRZe32nTCEn2YFBkrVzYVaCSiMzTM32nR3yK6VRMjC1ZTKQcoFczpXDBo8NqSH4dsLSeCk2weaRN5dGY",
  "key6": "5XadxcSufswmsJoAiuGY79wA9zb9ttUUj1jLVSwVod65C5A4eRZYhps7ihthhaQ6MGrHzoSphqVRpb5dFMJrv5t5",
  "key7": "3ajLfruDEQQpcQyyyJQ9wUN5qKeHQHTzAziMxMrxLUeU4tBFpqboK3vrrJzxhEe9h2HrNH5V3qFo2FqnzPYSvUvh",
  "key8": "5pffrJ5qpvvwdif3XyC2r7XwrXTehgxhCdELh3S1HRHBnXStfTaQiX3bwCLEVWYYVrK5t6cj4zWMD62b7nr6Phjm",
  "key9": "2VPBaCgFh6JgBn7PJnENaVy4wYdJoLG5wNzGWjtL3WKtnBBCzsR1RVYn9ydpUG65P7sMvPqp4nmeJkoubGfgjLyW",
  "key10": "24EWkLD8XKxR8qi4UQBKhtU8GGGaRiddPStqicgDpUyPuUp1bugRZfFVfV86HFGVdG544aod3NoEHYRST7aooNmP",
  "key11": "5ng8zL9bKSSi8mDLarF43e5jpFfDURMensK6TWGB32CLYzEwrv5ekUyCGDh7LCGqYVBuw2bgGuwwrnNifHNU1RTV",
  "key12": "2ojdTxiYg6JRouX2tQYNpnXLunkEikSVoQAGomMmQxm4eFsD9xAJby1JXZynk8ALPLFNGzLbAKN5duyjPwBCuvG7",
  "key13": "2MjAGukESEPUvTvoFB8g7zHQHucXLXvHGXKkhCrT8CYtY7qGDkrHTZkxoY8T1TLnMKdPKvMjAkvwetFys48Lhum8",
  "key14": "JqeMUWxWk4933kWMYRq5kX6ghaRzfYje3dzDgpsCd4KkPLSuRyZMSnAtX47GT8yW1u3yYDAA6QKahQ8ZSpSfR1f",
  "key15": "5L9qSNS21qPC5YTzQgxqy8t8cVh6axFodCQh3Z4eYjGA9W42uUUGeGx39ug5duYZivqUiZrDN12WgpQ2Lbvbevmc",
  "key16": "3inFavgvFqohbpY6BZU19ZJG6cwj1ff7hU3EPAofrPKFN2ScT4vuHXNXonzRGeajrp9cJ1hvwv23Fcaf8rDKttSX",
  "key17": "4YZyxqQ9P4jyRstuVfAhdhC5k6u2GGGk56QmQdNDJXuBMdjHvSydUytHmeL1wwbPR5C7bzVAjjrpHWxxAhZLKCbo",
  "key18": "5zoneCQe4ZaLtrkHYAD4ZtiXcMLCoDWzerRNRjyZbLWpGezwPLhCMYp7JxuXhPQEEVLbmrRetDQa2cmbkosoHsFK",
  "key19": "2g5X7gFmcUtPn5jBpyVvpXPRPzi6ekQQnADQR8kGhyU6zcdEcXbHuVkw74sLp9ptg71GUisDwwMzYYuUrs9X6yim",
  "key20": "3S423UvAK6vdXda86J524AoQn94KuQQTDLm9oLRqharCENFcpWz2q4WMZ3ZrQ2d3uStpj4zG484B7N8J7GGgiZRi",
  "key21": "4ojGTMMqRymZNrzsdpNZ5YNA86wYU25vKcgDjVG8qnajJxqMaYYFS4iVuQz6dyabME1GBwwDaG6i3t6pjnbXEBdp",
  "key22": "2qrELYqwScwv7XyXc65kw5AtSn3yEzQekNeR5xAT4MC7TcH4e6KzLLPfavUqRUBCUHEDzTBzwAJ7F4rYczw6LCe9",
  "key23": "3prtcfTT3e7qPLX62tFmJv58bv8AtULZsee8GuT9M55LpHZLGP3ZYFoGANDvQQkdyBWkQEgajJQPNyKkd9NYTbEa",
  "key24": "37rXLxZmSq8QSMHEa5vPZTa3VuyHYv91dS5Y53cJz77PYSjtRTAZwTu3EhLYHg1Fb5VghXvaoqQyqQfFgQGxywEK",
  "key25": "NorJn3iaz4VsdNVsmJ1aWWsrkRzopTinAKYBa7ZnSCNv9WCyXGGyeFN51AwVxnyLSFrtCJEVFzELmYpSNRASDnq",
  "key26": "YpTKV5kw8N5Gg96kEbDBTRWPK2dx5fks39jvVwxJjqDfbd2V3iQosFwiBN9FfM5FhiiBwR65RaxoCpiqCjpQagu",
  "key27": "2ZoojRajhXGx8ukMM981Be4HawMhoDpCxBrz4XvVQQfG4ehirY2sPWYcyJT42XNkrYkxwPqpJ3MgTjxc5Kxpwidw",
  "key28": "2YHuQgiHEdz4JgEmwg9F3q9HkxS2aextsWaefSW2YYWQvTZ2p6FLizzd6PyUmxdrD6Fcq1zBcV6kEAwTH1gtNnJ1",
  "key29": "3DKDGWqESK3TkmmcuZDKrn6r3BNr8Dg5WpeGfRAziP3vc1wtFXCxxQQKoxWz7MS73z4EvR1n8kJp6Ym9xHgR3ddN",
  "key30": "uZN8LvrJcJJn6wWEW6HQ67xAuusat1XYjYVPkAFmQ35vtGpWNYNSmftj6o7Ada6cioHE4inczwu4edjG6nn1NXe",
  "key31": "3iu5GoEdqLEU8JmQ1WZWxVMWYChjK1apRvbWAZgNUuVHJS4QA4sKNZoD2iZVS2f89KcKXmkcj9dxcuViBQrndVGn",
  "key32": "5VSLCzkyQmxLkcXGZE1gXCSgQ7yEfq6CXQ1N8WYMXFavdWJkyra9UpNKvMZ22rcg6yJ76qSdZqEksMs3oUXVMnUP",
  "key33": "5DdG1fDoimgzKCpwgjviV5F672xmNaGao1pkC12fsM6CU74Pmi6N799AnQ1S5HJQpwA9Q4N6GDa9TiYcBiJwvdu2",
  "key34": "2nNnKhMqQMj3FtgV9FGSWSkWJNuvBgUuAAbBSr7m48wvSXW3E6CcMsxyJNzqvFtQDkBJBnpqyQ2v7pzSg9b1ALh3",
  "key35": "aNdV5jPttJZMco86qNzfUNhNpMg3krYAsKjxCvc26tgavmQm4nhGfJkaSuzs9uRyQQtJoLvDVYY6LYP6cDeBW3U",
  "key36": "2jLtfuNjCJ4HTrnvhfhu8JhHLMNdYtzw5vaKnFWHoXAxee15dGRyJrccY3FuUEZVNHjdvcP4To1nqvVL3gtw7ubd",
  "key37": "fjokXxez2Kyus8dyzDgT62d7K7WSw7VYGD85ALNjwGyGAfCBtqcMuQPa7kBw5aEvbtWJeK8S4YgH1QzxArRNGjA",
  "key38": "2XX799gxYfaQBCsqt7T5ywJvzXRH63kho3VxjkLhSdQ8cFYs4fJdf1vP1gSQxdff97pazym7pJKWguNNuWQPnxVe",
  "key39": "ikWauqzECPVEgZ2TGx3ur8S63npCKgVdiHkg8WRxpPHh4Kmzq4Jdx9nT1QoiUEvviLevuT2aPjKuaZhvWHdPFRp",
  "key40": "5UHwNEjqw9ViQPgRGr6BvJyjuzKTFrW3L4Lq7u9P5qmu637hYDooDLAfkd3pApfpEiZRQnXvjvxTeFXtiRV9Lp5m",
  "key41": "eiRDMnyNBRn634sS6wXaJZ8MNgjFLwvDDNJePES3DYGks1wvE8acavSG5ygzudxQjEgATUUabHtt16rA9YVHy3c",
  "key42": "2o2ETnPfaapXJcfzHnVNreqbwhkTduJ5x1nisp2Zg4FP232cNTEpoVsWamFtgPqdz8cHtARtKUDDhSV6Qg1S5hFM",
  "key43": "2uiaLEXfw63kLcxeKXDHRjdE7EpPWPJSNr6fN2nM5QdFx4McvtK9qHZcDo8omAwkawxuFRfZheW6WmsmdScwRDxn"
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
