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
    "DrCYeECcYJ996VFonW6mjHNBNmgg7d2cGmr3dUbtLiKaQmXzTGuv2kkz64XuPDbFdS132zuVuR3rznvr8Zzgoe8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z7ikahMgEZhbqFexkgWuhLycSPRkkG8d37zkZLEsbPipQWGyf7GS6mQn6R7rHWvFZ8YWHAtF57dursomzJqXHvy",
  "key1": "DZaJVYrbhPnPCoHoStpNEZsacSxXRqiZn4z2mVR8bFnVyGWaWPbrdjBqsE34jatHvQSU7yQoKxDh8Gy7ubfbtCm",
  "key2": "2HuiSFM8v1QZuvfCwM6wRrD2EtcrbxGqC1FDxcQK2yfFDrcoyhwHUBAaBfwUSv6uYh7gtVnUFeoLtbgt6YKHfiFR",
  "key3": "sabuMc5KpKM8nFQxt7yZQq9gsE4pWcAnDab7ChYMdpe88YysPm1Ghw3kmuV5ujbvXBBNvgRngVCZf9gga8EseYt",
  "key4": "4hnZDDgoxKgQkcZo6erYhWmojGY1HJ3i4kCvMwU1C6dimJ5p2GZtfTKeizu7J22UiVXS923uw6GdZ29GupP1pLrv",
  "key5": "3GnPoNLHt4nd8G7PfT9MYDNmAGLkTF6hKRZnjfjZmSgfHRx7a7E9B1LDSH2pDwoC1NgNJFApog26Jr5oK8eSggoc",
  "key6": "3QyQh8rTdKhySS8d8jgegTtoFwzZpMTzVqSXxBUiSHty3sZkHoXTFuYAXyrbpFnbJp249c9pcKwryqKaJQ6N8JyA",
  "key7": "3cXzEvqMxaCyHaEiT9qXS2sSB2jnTGrHw7dBZLrnQ5cYK5hNRk8mswbYmAsudBDjcUh1WJTrYB2AwrwRQo8w3Ai8",
  "key8": "4gmZFnP9PsUWLBxkqxH1pVSRHvPyai8wSuhy8sZr4h8kcZyerVBM16WVkSz1mYQunJZdPhQbSHHZxBvnSLDAMJap",
  "key9": "5fhVuCpCNKKToXbN9PMc1trVfe37Z3y5dJS78uwisskcZPG15W4LNE738aVbEdYaTd43ruiybfnuZXRQNrN3F9Qw",
  "key10": "4x734vs9q6RipgEp7CuByhGqMhB36LBeMJ8CYbePMrWGvisRV1uN2HVAmtfUpuDm2TdLFV9BDeQfyQGRZad4X6AP",
  "key11": "31iXoet3ciDLEhHRh17ZNg8PVNcJCeFUH4cLSEXZpsg1qoDpmcct8VmKEajyd3h8a8evQQ6ESVwYe1R4KX3kc1EL",
  "key12": "xZJK4yn4rgkX6ZcUE7Zx8MRRp39oYf2LyCCzuZRAUj6XwKiTQtbzsxsYZiGkJJ6C5PZG1fFVBAk89U4ypp7Hctm",
  "key13": "keHpjWaNVMUkfxotrb49ZnmCtkubeYxEZtWVmaEpZWcxoyxgwqLs8N3wTYVxBWjvX3aZcA5PC2db3cC87oJvJ1M",
  "key14": "2ct1mFKsqNmFw6UiQ5nkC8LjjJ3tYqKoSuoVjzL54RCGXEVYqUqoeNYRJoMTVBFJkybNCSvnXMoimwCac74kcpfj",
  "key15": "2Aneon2bSPa4B1T52VR2pscuESZanNKMBYps65R55yLXJ7K9cdxhUjePWjVCiCup7nUrB6KKRhDgVGydYtkMLs9P",
  "key16": "21s2BdhoWfDwUZjugYqLgLBWfwpi1DeyJ7qVTADhj7akMZjSnNQC8axQcTtS6gomFbsMTqrTaFeJpM152kyqjqA7",
  "key17": "4pNa1kUVe8hKGzZW29xeibFko7hpkGiNhGMLJWniwfSHUb3YDE6xZgZbQqb4jFV2vrUpfHkX6ju6TGYDteEWiLDr",
  "key18": "2eDQtwxS84HNfjwBkuqwcv35u3vvokLEzH46yyFcHPiv4o5YsVCjMp9RPjeLzQ88Khi7TfbZ17iqsx1rdKZJbreo",
  "key19": "3kj6A4hNcHzxB4QKsa35oZnJLYjbMgV6C4Lq5r6ifefCw5gX4sTMJmZSNdx9pHwkmwpeZNojYVBBeNEvAa8xxYy2",
  "key20": "2JLmHTT8gjjGJBW2HwroRW71s2ewt2EMgpA7E6PYDJrmDpEjZMM6izsccRLYAbHfNBw1YjKr7BTEhrkkNK7XVnqv",
  "key21": "3xjgwFfJoUHmUUSDrXHcSrVx985a4EkTfZtU5uG1GpuFJgV2nfHU2XbszKFRDuqjCT9QtqK2zJBYfm2aDx1Cp86m",
  "key22": "AJ7vqffk8s2H9DJ96taazLwvrkT3A1KMsJpX2q6NuW8M4jSDtjXuyhbkxcmtfmTt3SFLnk59ctkY7PSbuxH9zv1",
  "key23": "3deBeYvBkZ9qbgsRXr8LKW2tRvyj9h5597jwYzoaMr1xMEQSuNYU8FFdbJjV95RvPgZEG2anNmsA82XomxCKPsrC",
  "key24": "4At3F8Vbfxc7HbdYHPWp3crgYVyW4hoU7ddvYxDPjfghpDK9gvSvwiRbodHMR8Wu1FGgTT6nHwXDdABW2KzsptVM",
  "key25": "5Wpiarf6ZkDjVTYF7R4GGt28MdU6y68Ms8MTESWrqaPvALNogG2ygzRrnE3tAdfPkipNAKvUJA2ev3cPfiVfa5rx",
  "key26": "2DxBDNCa757kJp9Tew5qLK831JmhQKiTNmTYb1bN3FEc7BNTH9rwGCVzyXZtBXvemhceQRjrzkb7wmfTeMsTRoYP",
  "key27": "5rKLDQqwr6MM3HGnqaFytFusQso3is5Mor4VCp6gyy3399PVMeor4Bs4sWaDDTBoh3mMcPcbVvtBpe2NsiV3uYTh",
  "key28": "28KUcXUo59hZF223qhtrbpQ6BavQCSsnYKejoaHLk3En4wHC1s65H1eJ6kHkFLuSWUU7Pu72bjU5CBzXG3rDhJjy",
  "key29": "3aFyZVHW1ZJy3ABdirugwXaVUcGPVwnzRNQkJMshdWu1L2Frbq9AWmLVeGhSHrhQv9NV5H9szmuqKfgCcHB1Zrht",
  "key30": "2b1AHazgHYN6yak9EpLFWV6CcpsrnD9ufcrDi3iqXtSWc6kTychzJzbgX1auggYeHwVXpUZGvV6qzNqyAyrKzPoo",
  "key31": "4TfAsSXLjuw6B8Mh5wuyDzvYS56H6fs1vNvSpzzCcVdE2ErUASyaFnhK2yZqWaXsmjT6zuhtpNW8oSZeBTuEe8zU",
  "key32": "fGVih4yYMf685JnHw7B6fKxqCR2YMGCfq3eqAfXaQ1KyqK9PKFi5gPGTXsf1ro19U1DZ4pUw8rGNEsrdFiksJdq",
  "key33": "3M1iksJuqfcQixxFyFVofdC4Cq4dAEn2Mo55RJJxu4PCHWcsswhp1Z8YqBWuDRuEcrvJB69T3entzBXS4t1HDR5j",
  "key34": "234b4w8g9bnXX4a1c81k8CyLaSqPzTKeJbp5emEDtnv6e5onvrHqd7dyvbwTSvRi9JoHj1oZiBnedgB9dEVWQ7yv",
  "key35": "649LXEerbhnpahh3DfQxbDSbcvU54TfSwfH8nfsXB8mE29ZMNaMiN7oberY2935Jof5hQtLma9iEydBzK7FsDNH1",
  "key36": "59bNvJSaUyVLj3zKjn8yzkCvP4wK7bPShXW2L2APjiK1yRuJAcGkHN4ctUkbqqeW8iVJYtbeymQoRbkCrFsufGeZ",
  "key37": "5DqFKzBdqWsYyfXBZ9R3XSkGkAQLdJ85oMcDUcn3fL7nqWDtijj5quokFcAxuFqqRHa5XmQF8t39z2KBApyeGms",
  "key38": "2wrThZZQtsBHuNAQQ3kmLzw3YrgbmQ81aHpakjpfSY1FtRTiGVj51nqaMYLZw2LdpKEKB3jBVCmVFEaAqPwLZA6D",
  "key39": "4wSmySVvieMhdp1Bs73TbSutM5T1WdW2huBCeUbUcW2UHc6htpqmUnzdiQdj675sop2eC1YXirb6scv76tphTNk9",
  "key40": "4oCgnuc7YSZNTNdaduBa2tSTKjs7KPQ3dh1abKF9PT48uep1R8RSiRFJT3GBjfdQC7ebMYur85mmPUj8MB2em9iP",
  "key41": "3S8wLeTaVPD4exYvbZR5jDRRLne27wxTgS7tTYSs53ihFejeXAQWkLV9fZ9JBt5MfLgTyicZgbJe1GNHhHZRshWT"
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
