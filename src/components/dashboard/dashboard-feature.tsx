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
    "4Tyq7xtXCRnry6PYc6ryKApvc2CMnwwa79nQjvyLpFDzftgVpNnwoqYAZqADfR7PGyVXkBU9AB2r2v7KukjfZqVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LoMYJWa82KJq2HmVeV3CgWgN5mP8hqNzFzx8N5BGHkzhEdd753PDxVPzC1r8LDat4VGrrESxNNqmtTf71vFQFki",
  "key1": "5Vh5AuM2s5pAdAfyUrcmRd4XMtJBPPHnduoujtEbDDmKMGW3Kg96myDhNp7PXN8x4FGhyPQy9ooft3u4exsmrdpV",
  "key2": "3U53bG2rYhUvw3f8DvpJALpgJtdxYBHaTeHqpHSwc5HqSyqWu7HnYK32N7QN3SuvM5FxZF2kZWxBwYxzAPAya3j4",
  "key3": "4tGnX5Jt4m72iCsW2JKYoKqtruueuQZ4fuRcGqCk4kf9RneK71nJ1trkLYgoQkyuvtFzGafTBm8JgP9ZCkGusH1e",
  "key4": "5Ta1gdudpak76a1MK5LzfKeU4VHHjBsy3q68ypwahtFUT2N9J14f8zpcso2VVAeNuYxKDCynLmdnRPZitCP7nXFe",
  "key5": "4GkMwVeCi6j9gVastizApT3EJ8uwQfLVKCehzU3gNAA2pZXYkFvcsjP5aPUYL2hBdqwNNrCpNGzVxbQyTJjP9nTU",
  "key6": "zmpE7r6KLYb8FEtebi5gBsPgKjcfS95XbyN1gF6UU95NEpcuN69ebawYXfzgJw2avaQr6yhsJfWN2xTipX7PnfH",
  "key7": "yMouijxY2B1D6xmgPfUnSa13BW5zLhZBp6Psc2nEupykWm5uU4Eem7aCs7MGa37YCfXjnxoWRjtHSQGpe4nd8Yo",
  "key8": "4v1nkWT13EKxP9JLseAQNtmRe2cdKj2tx4dG5uudicXAAggMbriKv4ZwDjuhC4oDEfw46vAZ9GB5KprJUddEhFeR",
  "key9": "5joPMuovGp2BGnHCUMzJFza95ipn5BLZZH8zW53wb4iwbLJ14ZjxcTxNMYmHztGQM7ZRuXo2bjdzecPCYkAXUZaX",
  "key10": "bmTyGNvKFFYezAjyRVyvPzRqzu7ep6auVE7BkqF6XgPFzQXvJYrvB1zk31ziYXaMc5pFNZWh8kyH33CgjGsdSf9",
  "key11": "4ueb3ZCcJLJiYNiNP3iW3S9SsdDor1JgJ9mpCT5nnPr2uwwHG5Y2UbMDpQAqqbs817AaktsTs1AmMQAJebfmQbWi",
  "key12": "5oY5wJ6oNiHjnVZgqTifskg2kWXNn4rb43mgiDtq5h5FzmMhUSQGvvoit3JwcagUwUKZ67J4FvjBmWoPtGTxDBLq",
  "key13": "msjtW96LCMdoZz8ceyfweShdzkfXgArbcJuaDJLCui4piMeNeAR9BSFae2bvXdGANFAYURstDHhtc7QwPxgsn4n",
  "key14": "5Ammj9cHAddWcVcAoir6YzJugqnBCmBN9PZdbNHp3krCNcmkuncv23WK91kxXnhgbWd1UbmrN8zfgrFqvFnTLB8k",
  "key15": "2dn2K5jBxAuypQzySkNHGC7AweqrSXo4Q8nQ3mL5gJoswX8GAPhETdSYP1thWy3JYNRiEG6kjK2hW5nXa8ZXxw3c",
  "key16": "2YXVRXDkPYJ781pP96KCseKN2juhMu39PzLiRWjgYEmfK2KeTH23pJnzpjMZaPK36Tz93ZeuTAzCB6tRnJh4MUhY",
  "key17": "3scerpRy3cgq2LSGJFEmp4pAQqwokutAHbX4ZcdDcwojk9epPLWWN1g98BG5p1MUAgZiMJo67smVfFMV4dzxFH23",
  "key18": "8NbsWLmMrYcaJnnCNzfKMWesvzdGZRwcmYzuqqM2bKbHj7FCS7v1TBBXyZnRTetTBpyFDDBW4BRkK9pBfPh4RXg",
  "key19": "3JiCMZ3KSHfpx86KeMdxZfiD3wmc4JgsPnvkJ5qekLodmFH1rh9nUcjSDbzwW491x7qF2u1sGyfSZER6sREcaNj5",
  "key20": "2RFLASbz1VfsHt8t9g6gtNzEXmf96KC7VpmiHgeYBNpYP7QicjYxbbvKFibzmCnLSYhKGCT4PYp4RFuZLKvxr9ko",
  "key21": "42bUv41H1guCqzCbN1fiS7Ch3gUSMTWoWXZC5p9dNQde68fGewsNJhDt9E7BYFQM54wkZVKh8rtQmL1TypzrYC8E",
  "key22": "3XWkDFx8ecWBH39FgfZ6xTs24X8mB6qsVEjyL7RgyZt23uLubox4sPba7vcsxnYz2vcbpweYcyK2QymApeAHSxo8",
  "key23": "3mbCipD1cVihaiiZJQnavZv6XBmP1nzkuPyvWLw55wjMFhTsqmu2vZaN9pjBykwENJBZWUQQozM8HCfm14ZCWvCZ",
  "key24": "2CVHiGh5ZtqTKSCefC3zVwWX6CfiEg5NAYbmFPzUUtrmz4JaJjDVbZ3SWDK4o2KegLCqGnnHEXJAb9e6mGXLg7AA",
  "key25": "4XBGWvQpBW44AA4agpGgHqNnf6ZbKos2qrTKb7W7SCLmEVS1PqYUknsMtTbm93jje9C6kSLWiLBa7hK5bTPYG7TH",
  "key26": "vadai15jsEfeS7UsLggZEJntsAUz3uZNs2Ftwtzr8s9nnRzQJRPidPYpX6ABEhEnYLodWQ5qk315yQQtXYaQgBu",
  "key27": "4NzU2Wmnw2kxPpjn5FfDrATyARMcsNrRhsr7P2jBRmuvnRFCshLcqFMbmVY7Eumof2YQvhTQvh99BK64XEhdYRxE",
  "key28": "4QuWADgzj2uB35Yyj2NSzx8MPdhxPsBni15s9MkEqn1PJuGsJCk1Hjbm1xobMVyMb6jvPJ6xVhTiZWMZaaurT5nf",
  "key29": "64mKTVnU1SZtxH76UbVDH2vfRUojw1oDSFqyCEGQLNaXKyasmrbm7SCN7UCZMG57GqU9x4t2aRww71YTmwjjoehv",
  "key30": "4iN43dgy2qmBU1srDA4wbVQtA5wM3moKbdAKxZtDZohv3G15JNXdDaUpxJptyz6Tyo2PByBsvgYkJbUPcTNtMY5A",
  "key31": "3x8KwPhitFbSvkfGTocozarksjUhGeWfb1tmssdiTqaKKPu1XjYb66NYTystwy15tR8WsjsEwgAffASuFk9gnGW3",
  "key32": "2zLDUuhzGfHqyiCCLGrNCfLLK8on9gxfZZqnmf172voxLJvcFT3FCqHKAZtKQWX9HBiya5GseeB9wquaAA9XNtLa",
  "key33": "D5Unw4L1ZJ3qWM3AGAw7M2hcjeKgd9Kg2CPYdUxgwYd9gjLRvwcKzrhvjZ81duCpTVHfz72y6VGtzfW77Tzunsb",
  "key34": "2sGHUi27UqARjqQspBLT7bDEbBP1CQv69HyEMQcHHBdwjEFCLcLWzEtZfbC5K2hmSX3mSBVt9cwQoigmCXsbXBcB"
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
