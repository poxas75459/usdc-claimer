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
    "3FyBteRirUPgzdL3xQ9kc2mvSzQ1UYtNVtgpRGQ6byvrUF8YnxKCaUwe2mDsc7DuC2GQXXrDcd1QkfrzCGnAafo3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qsDmGTZGBLoAVRp28Mje9SvxeEwKLqrTWhcrnUm3v3Jy2a72HuFtPeNYJJRpYiuycNnXe4MpeBbUadsGYfsYoTF",
  "key1": "5VxkEvNc6NNQrRHGkzajhUM8c8a9e1sXS5Eqpe18f7sjNR1n8mENXcbqoD8d8RzgbKhbKVoiAFohDcG1cFtezrbi",
  "key2": "eoAvFSxsHqyS1rnexnc28S1PGBwE3nNWpmc75dsHF61dheMxUdTFMTNnqsnXYzQc3b44ToaVN2JRzQQwG1U1C4e",
  "key3": "4Bqvvs2oW9zCZc8poPMp7joccFcpDCqLR2iM15c53R2kYJmxs77LnsRW73KSHMmNnckRTJc3afLvrWeEf3vLQyQE",
  "key4": "Ac2X1Ydo5tbVwuhVc23CSccj77qqP3YzyJgwJir8Zn44NUpcCNBYn4fCLPXaNk7RviFPam23pQvT1ThtczGv8YT",
  "key5": "5RBdH4GAPTzhgFUMFokgbJVvt386tGxcms8FCdvgVDjFkkQT76158fdMuiq8PKUDJvt2pQ9Pz4CMkYsWL1oqnFTa",
  "key6": "4orS8Q1YjwLGhMGA4UPDDq1NjbdsohVohodscXfXRRLWH1G3t6mayzQRCCz3uRGGeWynCk2X69nHij4PpjU9aZsc",
  "key7": "57cM2U5Ghk4Qd6mURkJLNBf85Ey41a6pQBnVxRx2vQ65SUe4DE8f8KnqEMJr2QQd9Y2n82FZxSTFWLCr81iHcn6Z",
  "key8": "4Q6XQDzYXikiDVGphdf7L3Z8Kj8pUDqgbkSWRVTM9APuzpguwrjacj7AYo2L6xnrT8zr5ikiryTCZmC9y1MAtoAj",
  "key9": "3hoUsocTcxGh9kiWeALNgZDBL3P3HKZ2tkgYMnJfBZwXFAH8mYXM9xBdTgEsx2unT22NhfHqgjfEeqpkSD43vTE8",
  "key10": "51QFXWVkAwPwoBo5iqfUDocsSCs18EDpBuUNNnsWvWHQ8KDBoNFcF5gz2M64i4hQVKygrQyQNryqkZNvnxGzbuG8",
  "key11": "4HTKM5vF46szjWFPF1pms11kXbSrjVGzTyjXqzUy1HFLBYunTmZKsPUrVCwZow9sE5RU5EoMiqMEwxz9EKmRdZG1",
  "key12": "5Bmh2ARKFc1ugsRdAFwLN5D8vuarumB3pRh1E9c7kxBfhVesgo3ZDMvUPg85k2suEiMe8D6mnX8h53k8f8aBfksm",
  "key13": "5xKB9WE9u7KyHYbLNuNzjYJykb185nCLrKnJPyUUoMUU3p5H8aZ7rZZ1ZS2ZPqxC4csbhXv7vkQTnLsR5T9oRyHj",
  "key14": "2JCamjdwcU1UtPwxKo9su85g8Gkz6WywrE6PCDxKmr12gCwkRCrrLAwAyCCNKPDjyqmgnM5DZa6zxABSQnFc5h13",
  "key15": "55cBxDcjYJhtrkspeV592DrAoyKsXkoQPFtt7XnYq5oexT9JCMY3fKkFNh65gLp2VWEJgMgRsLP5iGHVDzM1GwyN",
  "key16": "3Uq9QgVKaDR5jC8GPYJiGVmvYd9upWApYF26Vo1Uk1sngWz35J5AtEKVo3b8j9DfKkgE64RcgpFfkkoNRZgjNcBS",
  "key17": "5YQduwxuwCfo7CNTqgBMNy85Dup1dem9MX7XugbyiRkUpyLdt9KEn7hiBUdXHqbZEuL3fbisUAH5RopijU5U4iBL",
  "key18": "2oHv5iDK9nYFrqECB4SkZkVqWqnFndvgStvnx6yuna87PDXHCW36wHKqZi4BAMcKq6qTQoJuFYiBoYCW2MwUkUvg",
  "key19": "2R5aJpnZstoFg8dGiWigP3edS1mtdef6ceSW87fnGyN51xLCR1313iymbM1XHf68NDRP724bdC3r8pBgRdgAK4LV",
  "key20": "4xjjRydcRMcFLBW2JGcMRiqQfLntxhYpQkH4QRy4m6zFVAdRtcdWy6a4HE4aCEHDfsaeRWvsTuko9gj9h9kbEzWp",
  "key21": "3RYMECdGJhoNqdwRf4CPNdSxV8unBn9taMFeVW6XxtvPRUmkEvyvdZu8zrWV5dvComYC7bXpeFRVx2Hjoxbe2KJp",
  "key22": "2N52Uo4AEz51vudhPKwCMLKW44qtjrH4ceqXoAfvxr7p4iYNXnd5yvnN5jQfTy2AJca8xB55MDaop6kcXMJFhBKr",
  "key23": "6jrNhGMSyEuZBQw3Gd2ADEeVG7YPtXDL1aazBtG1LWqmKaxvM2A3sQvYfFTqV8mwpuFph5kv9geDjojzJHWfBgN",
  "key24": "4v4H2m2vVBNBC3ergVhmNjsXcrPphonQcSF4zAfsZ8uYGpNccXtrUf5i4xdC7pD8feMWZzva7DgmPBsbFE51QLUM",
  "key25": "2D7nD8RCFRxppUAiCF5RA7JM3wj4fWYXjTbnrAcxNDEvYyz1RZhhMSefVBiPqinptatJ5aEbS5qvrEb3N5pFYgsW",
  "key26": "4hxgajFShCUDyhWW2fdmWt5Sx4V3TS6TcKFmNFoo3GogQ7ptRUSo4GE7CYDbwhsxuiKq2A9A27NuVjSRsc2jfeay",
  "key27": "mtRATnuAjKk1hTiXYvFWAJkqTrCFDAVASZbwysPagkB7fuKq5fkn7Z1By6gaYVXeh2dytZMEn4BogabassrPnkj",
  "key28": "rvZxyfZkYBgUArYRbZ27zVsEWg6znoQoVbGbWJcfkwipGdc8hBt8AUyTzyrRjJw9nkwMYfw1o8tLerEEfGwNEqi",
  "key29": "x3XAozhhBZHv5GLywPjGaXWG21iMr58f417r9npmm3BMM1jKe7V6BnJTJfJ1sNYWT9gp9hp8NGwqgfT3EffdxMj",
  "key30": "hxeXVJ1eobakSFQz741NUha3boA4j5AuaEfCHBdiktDiDh8j3LgjdmB3LXPeonpECUsFnNnkhGk39oPdzesm8hi",
  "key31": "2kXA62cqrMkBxZE8d1cMnPdywMN6EamUfzT3bX9aowEatsoud2y64Hgd3aLaAJ1C3NmQBpQL8ztfjP2fcTaNQAb9",
  "key32": "3mNCUYrFarAKKvGudQdxZWaCnDzsvgsVFVStcwvThfoitaaZNe9gGZP89BKMerz3YmBbTQU3BJDtCuRZS81MzKKi",
  "key33": "2v9gWaDDDPiQyi7zpBynhikyJVbxrjSexfFgTAQTZJFc8x9Et9TjyKZWZJ6icgnL4rn1Du5KkUy3xBLyYEzvky1n",
  "key34": "4DuyZbHJP8dUgtw2TZGdwNZ1drTHrMdGThJEszeVD8ZnYusUNJ6gGuQygQbMGmwT3u98AMmP434trdV1bcS8UmrR",
  "key35": "DCbb2vZKzgzJVUVYpetFUUwRK8hMnDzAHJL9xvyDZFShwbYGYM2kCBkFM2qa2QivfKdst67FB1FJSv1XhrsWh5g",
  "key36": "62YaAoPrLt2AbvrcZe8PWFWAXikAtTPQfs1JYJZLxz358JZ2YASkqNu4v3xsGACawaigRboFtsj5VetQWi869TSE",
  "key37": "c2eBST5wed2STMn5b5WSdCGsLTpDYKATqkoYj6nRwMCZBS4nvLmoj7ZqU1MRn6UxwkhMKM32HxXURZixvuxGGbX",
  "key38": "4EJXANQmDeDe5M2G6yMpH5HXzgw3gtjTqVjZZNuFp5CKKUEf6Vy15kU9LHXK1f5nYQiDZbYadTcg8V35VUPjJbxT",
  "key39": "4G7Kh4os9zvNFNyAt4vKKbtVfc26DM5FEFsK7j5DAFXHf29vRSL3APBeCbprqxsL2dUJvrTp9mmoC6GREHiz8ps",
  "key40": "4ozXRjanTEVErkrPbYU35g4WSQcGUXQ5KYGpdnGHwCRWNoSomNtpGeakF9sov5Ymb68gGjukAuXSyA8hDPvQWsg1",
  "key41": "4mmsnV5B8sdPr76oc6tXXe49nVEFa9irS7dYEveyCjocHhJvmML7GsiqB2GzbC18bvWBUNNdacZexv8C2w1Juhnp",
  "key42": "5bW5gYw8DfhyB2RzMj9TZ8kJZw7SKzQrc4RMYstsBieJidra5omsx62rQf2q4tQp96JgY5Do52puT3yyWwgKJjTG",
  "key43": "5BMRFoPd9iwJ7pHs18yD1z1Jr4M4NYoHw88aR2RyAr83hHMfgPMcmEUHWuswfkULRqYJTXqfgTLKSG3niV3jZn6P",
  "key44": "4JKfWfhErmzYr3oHxCMqkx5V1tTmhom6SBacoX8oSRzDkLEuDqLJDmnWpHp3vMrjK2wyyhNwPDEeamT5n632Uy7x",
  "key45": "3c2Y9iwow2TMPJ6ESPp978bLr2xnjuiGpA1hFkCsNDcsKRq6KMcZso3TduBrymh6Eg5jZuGJYaY99auubKFJe5MK"
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
