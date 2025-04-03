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
    "3DA8UdPj4Uh2qGr8iAc33w2LRXveC3Ze9EBWMKKq8ZVsdzqyMBMxnK7LbA7UcE91FAgS7jtWmuSqxRunPPMaEjYS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FMB4NdXjeYrB7NV2ADfRPZ8tV17SyddSMwseCUdNAYvbmHq1PVGgPtMKXhcQTX7St2cA9dRgUzHznbGc67vNcA7",
  "key1": "8MBNRKH46mXbPaeYdK8omKFjmVhV56AKaQMK1VGek7NqKdMNAqNoWTKey9BS93MWnmcn2nPwqoU5cFyX3JiiQuj",
  "key2": "3ZnmfvZMXGgvGoGvDKksZHiz2MwCoRSpP8TjkwgTYosthJF21ZGzeGb5u5QqS4GJnXgxNbAYgq2KyjtiiuknPrsd",
  "key3": "HhXG6sQq4BeCVCQ8GBMSHmC3mZ3MzrGnLcRZNCzup8yassdNMEHA7wEvJpX3VXkSsWzmPRhssp4PZAaUaVbzGA2",
  "key4": "Ay9rHEsMkgfZKiALCyn83J8wBFdzCPbsvcTC8u2mB6c5e2hCkVS96L6UJbXsGwMevN6xDHrVvLrdaKzShKmRzBp",
  "key5": "4TnLnCobGuGjMnvqr4tGgiF4ijCVB3N3dBhNu72n2HpmnM7AHiyXJUFyy2vgCnzKTDDUnnC2ujbeK8qiVNMLs8Mc",
  "key6": "K5JHyjG9UydecKpoYNYPWwVURZQZasa59zJN2oYFjigDzNnmejXKrgnNXYzCRjKNtVjbUAn1TkYtnHt6bC3hBiG",
  "key7": "3wZKiVjPyLFhBhzSCNC3y8RNKkVG5vKJVVUgs7gCG74Nrf3XGd1PtKWvBcuaBvBJ9G611UyVobMjicN2o6pqVppT",
  "key8": "4KCPBqHSp1BNanfcJySfQomDq4xAxSHkeS7VTKhzS7pCM5AwYkSxMM1fNjZFw7nr2PnJoCpMoSpvaqExQUxFNnMU",
  "key9": "3Ja3BGBF6rtPiBpjWBkSLrkYQ6Xo4TL7DumndfdHJD1PXrw4ebZPEqvwQasAvGfDqPdgxVawVf9P6qMEvYRvvtCS",
  "key10": "bdm1fQTvyQAEzfFYZKy6WQA4z7Ld38oAsnSdmoyCcHLZAdF9Y76yefCyHThTF69Bi85MpX8zVrtW88Dn8zBYHvR",
  "key11": "h8rS1eMNmhRaK5CJW7Xu2Sp4Sudo8BhjnX9aSiSdafsCYjSnDH6b2xjReBhqKMdj86GE65bAXMPiSd7V6FL5god",
  "key12": "YPVSTVJNTvZuD9WGu2btvEBoxob2v5R3DFBynZuJSFfPjGVi2wFXmNt25j9BMvFJYPEpfttPbkMdLCCG6p45Piz",
  "key13": "3oV5Z48SQa69WxEXALdNiYde6TKpiqSRMQRguHD32juKt9zkp6mVtkpTKYxj1fUHRGF7KdUZiVKe42kqtr69MRQT",
  "key14": "34UQaEGRF1YbHjeKARRyBHGs95CpgxHSJgeC1trMaFXTMcnFnFBn8kJSD9Q6yEDKM8v9HYSuCWbDZEChpBLjT89B",
  "key15": "3iKBqng3zmwkGnSrHufaxujtS6T7t4gmgNMHFsbW63a88ERdgKcpdR9PG5WWoKFDGNoq1k1ZASpjEbUAf2QuPmY5",
  "key16": "RzoqewbGx3UjBwTAWhkXJtiapbtNvG3BYiyZpjBuPoQZFKAKWYjgeZ17ahxvBchNFTU1MQFGu3SGvi52eXKRm1i",
  "key17": "52pmuLvac1Mj5eoUrRicaHvMvHjhhkB91KmV7qqiB2F3Phxd8FkVFQwnyvXcaPjaN4Ggb2tnsECKmE2L9FEhGyuW",
  "key18": "2xcm9cj6jCvQJJejWBPGLbjgGx7f9tYE5FayqmF5jgDmcA3CsL3pRgD9enGYgMFbNxgsCKy6rRGGZbpRAeA7LV32",
  "key19": "58upFST6EyaZq2hdWgZwwd5qewVoBMiV2cmtQJUzzNzv9ucmbb7oE6rQjcV76LtBmHRXjjzE59GZwbtsocixKf9z",
  "key20": "2rvC4dGejvEwb2Lonq2kbW5UCsmWqMVUaTzed8po2VQNzXq6fiyEtATHXNgJBPRbJ2emUL43RT71ouzq81DKYixQ",
  "key21": "36FF57WAyXnULPE8a3hamEv95S2CtWGTKoVLLtLXYWyPV6NbXrEeekCRtE26urU5wtnYR1R9rociEytTuuRrSRQG",
  "key22": "4vSLETgahXVLiUZL6wUuEPeWnLZ5MfbWVR3mBqrdihmZi1JQb1RbU6dSysYUW3yappbyVo38q1A4TNkRZ2zx7aUj",
  "key23": "52die44NvZv7Qb6ueBNc65EdE1XBJ2GKFS2CVRR7WEtLbJXCsone9N8UMrCZJLujfcehKrnXRcWCZCPwH89XnJPi",
  "key24": "2e4fJ27w5ChjpQ7EBuqxFxySFCN3fijefm7jAF9n1yfhjXMUqzWKv8WzoXpyyLfTZm69rpWz6wGfbBRjbirE3Jpj",
  "key25": "bW5VKJ8kjDFFkqymrgjigtCC2y3fcsFmUhzjcUtzZGtUiWiRtNxYbiwoainugsxbd6c2NjWhk635A9Svr5DXeJ6",
  "key26": "LUWDGhatjw6qUNJfpV2AFoxdeTV9n65mMPQqqQifqCRg8vUbnWxDE82urhtYYS1VB3XUBDvfu7ogB72PWXZKdFB",
  "key27": "HHW5usgJphfkGgx1F2nU2JCMihFWZzNHb3wH19sT195sYtj7YStkgbjhF3vYExRPLFe3BMTrDhv4qr4o1VfaZAt",
  "key28": "48Ws8KiFBhDT7vptTaTmDeMrvUUg1CUdAszAAXNnSYH2DpQc1R9BgUgSwp234FG19B3UHVgB6C7S6Sgv9TGt8RE2",
  "key29": "4YGEtRFLcPnhDeYnuJsH9djPcam5fXwv5WiZ7PKWFCtSWQtqpsiXaGKk7yoezc27a6WJMobvvC4G8Q7XbFzArWSS",
  "key30": "2VSpXWMmhDbWEvsn982kxcLxq3YPWU8DxeB84UtFwwyf13ZLtPfM2fKbUwxtojzSZ1a9h3UDhUrx12MqvPKKirUL",
  "key31": "WnDjRRgAj8i4K5qGo776q2ghHmUUERAa71s5LqrAnfNacwAxyrYTLrM4VPhjes9fBufwqbiVsQ6dW4wP5sf6m5V",
  "key32": "2jmdMPmdVBEwgJSS6zKC5GFh4U2qbvxqCdVUATB32V2nnXFRCW2Mif8Xy54QVPUg69rkZaFc29bRsqAYNzBsdk4G",
  "key33": "3ZpJvKa5ASMAh4ktAeKrViWMTodKcGe3KQze9HV8jxPguKUbAsHPDoyeVjqJgnthZp5TLAuP1Ghrwz6YKkuftzG9",
  "key34": "2okdesv1geptLXE85B6UxZxz2Wk5WKBQNUeo2b6xV9mVE4e74yddvf7WjEYUWzCHzq9zaqenVRbXEjnxqKfkb33Z"
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
