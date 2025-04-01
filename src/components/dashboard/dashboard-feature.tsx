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
    "28iFHtZ7DLxveKBLZajpbMc3GCn9HY34sQ7YGt9c4RyF2aT1Mr2r5bRNhSAamfydCPv4E2GqAtmPtqSJ7DMx4pYg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kigztgmpCE7tFRHdF5EDrt7nQHEamuKQvBzzgntKiSNnCf6T1Vb6j2sGBpVPPhGrbb8N4CYkeoDJ7K9zHj1foWp",
  "key1": "ukx2kMhLs2Gf8VyHB513Jm8G2C2qNasBAbhRrZCfTtE2wqxgJggEvS34X4YuSmKeVbsw1F6o9ZAgcALbP4MDN2S",
  "key2": "4q8CJEZaxtBzaH4AtELTw5DUxX1Ab2uhxf4gE4XpVgKYAuqcYfbaT3XoVfQrbX7UPxsT23ZzpAHoe6a9BSHVqqLy",
  "key3": "66LBnF3vQvisnJKcDtxYnoxx9v4d9oKezgSVU5zCCRzbNJacLFKXMdxTtnMVo5jpy1JRi1ay1bE7GUp67vwVCnyg",
  "key4": "3C7AJMJRDFv9VBppdYrWtg1u4sPgodHxznyZVkxHtv5AvVdPfhvQhsn5RF7mAvmoqZpUCCZqzEFM8vq7GgX78KLH",
  "key5": "27Uk6J3CKPkMR5dfkvvKg2XQWwigmyR1pangBMcYktiprfVWja3KzjBJrQpdScjaY1XF7SCSJgaYqj2dRci7p6Nk",
  "key6": "5oqqygSGyfAMTtdXNR59Mo2F3dHcaduEoNx2t9XLYjZLKupunN6Edbv5fBmCvSD3BrfHNNwPCx4piRxQsEw4dN3",
  "key7": "4HXgsAutaae5smxEDYwzFNj7bNVosJNueXkvBkBUPa9ourxDT45AyakBfvR1QB39pU6fnXdPdiV9qDYooCcAiq5c",
  "key8": "5gGG5kLSLvfDbnkmBoyGBiJeLW8YQ6bJsxKM9pWpuYezWr62BRgUBvxY6CQXEcjNS6GLszE1dvHwvaFtAnEqv1fM",
  "key9": "4AFKmczUK19zfewBNoskbSxAbmQyqmfTP64E1WVdU5Cqmdzj6RUQgkxdZZ59WVW1JHprER76YCC13sFoFDHw6D6m",
  "key10": "3bdU4QPBTXspTRU4UaZoL3NRaYAyyV4bvvFMM1ncxPkq3YDyy89kKoWwv6pHrHj2yGV9c6F4XtsJH7UDAcPnVeZw",
  "key11": "52ij2Xa6ekAaeRKgvMXK8Yq8V7HXXL86H17aUeoPUP41F55uKGF7cX37ArMBUn88hW6SWBnAyj3JfNnfvRg8iFwu",
  "key12": "3VjAqPNqrxDobMiumcG7EJhJN9Xz4PrNmoh5MzxJZVdFxTHrhboQyvzmBJPMTkVp8BKkKUXngemhBNo2AVn2qnpz",
  "key13": "2FSPoVzLSJR1QQNFwDVESPU1oJAJG82JmRU6CMhkfHhwGxFHnX9Rb92WCMYWGT15tejJcqCqdA474cpef7MHadoM",
  "key14": "5n7m1t3nn6QE98ohVzWRv3RH3QzWcxmKvRcR52n3DKWozaWqohMoqnJE1kpXT2dYFhkV5jzMzV1RKy33cjQEG8fe",
  "key15": "3ZNtAHBxiibDvm7DjmDBma7M5si4nzdp6wXb8McxpbXSN3Ci52GoKWrMKf2Ay6UggVMVP4UnKPbYx211mdjvXzzE",
  "key16": "4KkcpubBdqmUjdwigJTKcCvVHWsBJZFM2TVppP51Wr9BavM6Nn3KkSHqRRWC5WPDXv8WBAaWH9jSymnjZwaxkFL2",
  "key17": "3XB6jQ9Ni9exjWtGCdr9dD58Jybk1VyYfUKSdCL8eF5XSmz4GrqPdBUFzVpGQh4W9iDC12f3NgEQcUPhWVRzTVyn",
  "key18": "4QNu9QEExwpKrwmWB94BZtafRC7sztb14qPNc8Fs9iJB9WKUwwPW2GfDHNvwR41Tz2kyLe75HNh4PSEhEQVZ9nuX",
  "key19": "5TStV5Dp4BHnS4mnte3FDhHvmcY73BJmTyGCtiajnCSaMuJFoYMmfnBEjC1RqTqHW1TGim7jMCPAckRbfnLBS6U5",
  "key20": "3gzCYDoyqJG75dfd1pEiwsLcAjRXjmipw136DaQbjMB4RHKCWfhCpW4SY8x2Cxf37gCmTy3QhojLYFUq8JZHEoRj",
  "key21": "2ccYfiYcsQXGjrf1krr4zqGzGR2o5rjqDj6ZGDvVyirJQFBH1pdc4ZvRkzJA9BhybjwfaQURLodwALompujAnRzf",
  "key22": "5woc1fPxR6AGJSYEn7HzQCBSEgqhkhSLRfdcfNJPMbw9WyuHL7eaD9bdECqpGufuCyysqEqLMCqF4DewngciUXdb",
  "key23": "63Jrhmwq5gLJEHe8WEvVLZ9dLg19JLF4TQsMoPMpJMMSNy4zzFvcCTq2K3LK9LqgTA5KzUs7G5YXkPJZN7omWh5t",
  "key24": "3Ga24b45nV2Chjr22PXCB73hrhC3TW54nMuej44QTJKMSrdSNdV2yyTzd3KNcqpA8PVk29sigr86Bin9zQU3Hs1e",
  "key25": "4Q17gn4TEfMNmiKa4TLB6WQqf4oHUWDFvRJWghhVkrGkbMMT5tERF1BacaZbHvNys5kNhbJQGqEsFm18dqQRgTbB",
  "key26": "4J7WXchq2vGbykKLMHHWnqAjSQTAtgVDMtcmmRu4qNNy5syuDiz7eZW3MALF4gtXZsyyFs7qBuCzZUU7Egv42U2Z",
  "key27": "2iEhYLtoUfPcLVktFCWQa9iQ819j2iq9Cq93H5B1abeVDVsExbSxCRDJB5C2aBo29waJcNfiArwMHwbcJXfQ531y",
  "key28": "JUzGMJof29vD6MgdZLrEFh5VA4XN1bgJYbEZXfzuEHnzWehwTh4jmfmXYN9MgjtPy9t2Mwq37Tnxm8JcrWRLuGa",
  "key29": "TygXscJX6sALcWjvvT1tj2CZKD7SBhnNgUWvYWnMLYihdmf4DdnfVXAvPUcWiJqtTkHscEAZPtRmM1N49ySaXvd",
  "key30": "4msfLTrrpPGSm7v997eBuiGakWTDWW6GqxCmiX9B2YjAj7aKCp8PPDUAVfRg4sfqwh7GEwz79ViH4F78iAtmQsxG",
  "key31": "zSujQV5qeQVjhzzaZuuZnLSiPYnUcc93Y5ZMpVLGbXnLBf33AZh672KYRLAKLg1MCjZwtTobAYqRgzet2C5ynGw",
  "key32": "4UbY7wig9DcKrvCfwHjG11wUCg6sG8TSkvNfzjgX6XxXLRQm7eRDT9HoVsbaVQQ13E2vGQv2bVUr8XwiXB6H7SaG",
  "key33": "4dNfLZvDcUKadG31njtNZqb1sqD8rGjVNPLw45kgMWsyLBgBRyufbNUUiCdRHw1PdWvVsbHDjRfQ975P1eKPdYAS",
  "key34": "23aprZ74fPKNioyi8ZYJjXPRz2QnkBFDkTQjSA7kqS2xTSWkd6JvPhum31e5KHZP3oN8aUipQpFswCaunMse83UG",
  "key35": "1dzT36EHyGVp1ChaQxAtqhSmsJTaLx6NcoP2u9epr56ZzkJkphvLjeBFxKYsGA4pkG5w4LsdT8oQCLTk589wMd5",
  "key36": "4bGVt5yWviAr6HsBhsp89zHE6SM3ovFVqtCWMdtjYi1ncXyR8mAbCGz62gWn5WfM5bJGmKnzZxuvBMrxTQ9SeYZR",
  "key37": "4wRwyCDaNshruVWwkJkHh4P71Q15mpWPCKX96zn445rBmTF7zwZ3Tq7Fvx4xs8d4qWB6SHoQU23YoSdinuakGUQK",
  "key38": "3aanKtQGycfGFuJc4hYfNS84QRBcY3ynC1wox2fuqHnpx3a8Tu9TdF8tj8dcYdLMecGaquRwtUtAG6jD2GSFVSxH",
  "key39": "8du7LEvtvtQ75358aSnjDxZA9B5FaqdYMUo4VoEivKHd5ta4284cTYsT52bYADiT9Pz9bdVV1w3FVAG1uzw7pwX",
  "key40": "23FevVeuujPWtFE2La57CZEYXvSwj4cZv9oSib9LR1ZPqvhnmeq7XCy5mdVD6hCouHAGYoPjFUtQwPN44kwy8p6c"
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
