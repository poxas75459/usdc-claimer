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
    "XP368NsG6agMhVEuvNSiHioDGFw5pM3PGMJ5dvycMbCa7eF2isMxe87gAAG9YnLxuu4aK6z8rUptMXKKmpaRsxR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MiexWQmWHRT6MoCjaTPuKfL3Mex3j5upkU3rmxBjYYHcUjXugkwUAXqTbiKQLug9EUxoLmTsZp7rwcoNSJdxPLh",
  "key1": "5UF7hpMhwBvkmoad1kqS8SLusAxaUiCo92PZRbi9J2WjbuqfCewm4Bk2w6Hu2fNdWM1uVVx9akUKES82uqqhBh9w",
  "key2": "61HeYeo46cyZJ2zGvLpiYfmoprEsjbiZWpN7Dv4VTAAVUx55QQPDT7sJAAMJh9X6AhiSzeX4HWXE5frqz6LnY2QM",
  "key3": "614Ki6AfnbhyZmj7Mh9kRMdev6XEr6tMHX86pPqZZqoemC1fY75XRASKmrBGUeNhZVik3J4FJcrrkmZDxyz64AYe",
  "key4": "64cPS8fQXkmTSfiRnkmLA8tYnoLJUqmrT8d3muyAuXjG7nCiAjr2zM1HcqB4CrFwSaiVo3zFeVhfBGVGxtaS5Hg7",
  "key5": "2jXPgqbV87hzWofQERBLwY5xF32jnTRrRUcc6owkPvBZYtzP3VfQkE1Rgjfozz9jcEjPTyyQpD1XF3KSHTH8j2Au",
  "key6": "3vk7RV4sYjXJqi7z3quVAGLafwPPYpSDczURKsJPW2CYj9f1a6yseRdVLXHfFPTan3UXsuZPfsb9HcWrtmysxUoa",
  "key7": "3z5uyJg4Z4DcB49r8EtbT9bZz2WRNkW7vAL8zKwZ8trFhduqyXdAXvVSoJEUYBeShBAxtikBFpGaTFWfpEgsF2co",
  "key8": "3PR96TiaFEeNgSCgeUZ5WmUNNhAF6L96hGvAmDUzAUaWVy9ZSrAt5wYRtceX94kgaPhepJUzgFhMyqDisuXPy2nL",
  "key9": "3jqTEJKRCqpgJYhb6FhPEdmBbx1f3aDrVuY41nMiY2wpfFQ6PfY218cUdiwH7LrHCSwy41hZhFMhgv7wZ7BSHaoV",
  "key10": "5YvYhFVX8vgxGCvB9Eg7MxoRzVTkce1rphKAgLxrpXPFsmKL1zUxjWjFUbdajoh2qZJu6wquU4AwAq7ZtT7wjyyu",
  "key11": "23AEncvGRsVNzZCTjY4yJYpgBQujawtuGN1MbS1HKviQokmhTJPX73YQqFWGr9EkWPdFvBTY3jhfDaF2u5Lr9Zp8",
  "key12": "3hBKMhYsSrFZ5cgBEQu3QY9rDUVNgi8tKycWFhMt4AT4V4bFjvcMcjMcbUURNAm4Gib62Da63APqXRn5M2VHth8L",
  "key13": "2oGj398WQfwzGm466NogYeZT9QW2mH19nC6WVVnPoBC6KbUZv3GZFtsaYMtyATXr337u7hP6EN1TRyVfpy9Hf2WL",
  "key14": "5NLrnjSbzhrTLtu7wCuUuKQPCfSsn1rxLCVYjQDDTyYsBjfideoCmUREMprZ5JZH2EsKCXRYouTK7333Px5a29YB",
  "key15": "5XJAnkfq4g8G4wy1WiariMBG7jJwghbLMNQkZNBzzD5FfC91YjSz5ZNMMwFLHGNX1h2TRswFw91sMvc3za6d8oF7",
  "key16": "5yEcFdB4JZiSXr4HYYvK4NtD1iB1Pui7KUH2B54kW2jZxGvQft43btwchpdAkAtr4QAapBNWA8k5e9478vi3LqZC",
  "key17": "2AFZLoQysHLz5oKgfNbG3dQzvJP6axM5hJszp5JBugGHeK9Rbi7axgUstSi2ed3jjYnBW6FWjgswvq1YBYxUCYED",
  "key18": "4NL1sC1jDGapMHHdjyqFg91XLanWKaHnBkzJUpv3H8zJA3wUKXYeNRXL2Z8tW5jk1EeZiFD9PMXFaTBErfFSBCSb",
  "key19": "3iwaAUjbtBrdEJzoZ7mYidXKjckrRuULWcr5HfnVpKCFyHd9fyxYLqvGFnBJqy8dQAEWoryDKhSe6DGGyKHJf4FK",
  "key20": "31GSVFX8w7ogGCZrjDMSPohBnvJJQDZgvYnQA2jNbWEzVo5gLYHS8fa4A8YbJrNw2ZxswNkZQmmhehUARUd6qgdY",
  "key21": "3ybNuKo9emhBWQ6UV7bAC6q1XyjfRAjbcpNJtQxuZkThzXgd5Xyf15o61cEixazsDvdoQ6Zt3tzPW22sCmwyrnov",
  "key22": "4RRSCR7GtfUxXfyLsEXrrGNuHMRLG849KYVSuHNEowsgdCdpkJRGHwekiD6whrnB6UgxubqEixCWuJmfpodBwstf",
  "key23": "3KjPiAxv1HieHrgHJyMehx2v7TB9CrVttnVErP5RGq5CDC87adVTfahiExonFvZ2WGLXAKMuQd5oTdWws2ceEA1q",
  "key24": "eYAGYWgML1zQpbUTooS5C2Dqa2uxpTNYsssiTWu6CXfKHykqXFvvBibXfjxtAYNyU58eLG8fd8V7usrcRv8noGK",
  "key25": "4xDEQEsLBQGzUYKmioRPeb7SVe4VUuiCmwcV9wYEptcTVMBKwgowdN4nen2KcddnaYkMjqiBK8pxPrnifX7cusR2",
  "key26": "2xcBs9iVF6soZ1oPPioj8zU2Z3WJyUTzFWngCVWjt5fuMtAsduHJFMesCcSveb4yDF41wfN9siw4rsRXfrruaYoS",
  "key27": "LpTSe8jsqbbwHtYJhS4c4bSBzDPDMvGBEKuaTfh39LwqUcW2sMSSA8dyXctCG1hJ1poFKbpBzZkyS3RBPrxjTjh",
  "key28": "2Ut8WuEtpCHxK7DBPG4UWy4RL36d9C2G1WDJF53ebRgJKquuy7p7nPR3VFwZNXMQuMC2qgvt9Ekp928uEbX8eTHZ",
  "key29": "5KYrEC9CH2sAkFYAsADtd7oo8o4v3mU5cQAjaqQ1BScrqgaxtbM4QchonHNYwG1b8ZSRPEvKYqv3vBXkn9gs1pNJ",
  "key30": "3wRwQxLnrNQ668QE19G8mvKi7PC8WMj3Ktw4X46CtCDniaMbBjZacLSacemNGT64hyrPhYQrXTV8XfNc551jXo4h",
  "key31": "3nXsUWh4hVahJcwFaJFRuaRWpuLVp9i1sMPRRkzDM1dy3D4xffagSrprqcBzzWxR3Yy1rJhiBGtE2zeEg2Z2gc2B",
  "key32": "4w6mytyWimUpFWqPLYchsFo3LEBY5N4x3vFUzH5aVoaeU9o9x5Cybi6ohRA2bDKDWVSteyukR9E1SGbrArWEjkUd",
  "key33": "4tstVCXxxeX9hTnAc7HLCDFwwtNg7CcqSsnrfByENjCGo8KYyGe9GwZm5e1o4MsWcDu9HUcNnzJKCXKiiCjJB8SZ",
  "key34": "JtNgS5bSJdbNUHFFqvKXwjhpiYkkdvYRnSHqpTuXxKMN4V62ChpR3d8syt69QyNX6JBZ5PRguEWffxUu7zB8WYX",
  "key35": "5dfDJqAtJcWSAcernW9G4fDkXLHj768i4iFm1MpJgJbwu1PZx2EopLB7S3x123dnQTW7SNCBaSZy3zDkksz6YZHn",
  "key36": "5JxXWnBb15by2m48aTrUeR1bkgaxUux9drFeSEMgV4e4vxfGeJrXgWGe8sjijd5UBknNiEXMq2aG1oM2JQizUK6y"
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
