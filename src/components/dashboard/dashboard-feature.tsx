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
    "4Y6TJGCvQoZMuBtqFF94A9vaY1yuFctZ2QqrNiNWJQGARihfTTH3GQpL6M4Tcu4QGTpfKmJurv24w2tivoFBWtpE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eBrzSW9r725XcNQEMRoAMsd2sbvT8vEmbBet7nvuvHeoTLu8BWiioX3UT5FekETLQ4dsRWFyapqVu9zdJeNBLDC",
  "key1": "2Kv9B8nCBCVZtj87Dcn3sxnr1u8AUAz6LA4NMiaZiR3r58KP9VXWFaUaKgSKE1epms2watYUCsNNJCRS2EKTK3ae",
  "key2": "td2F6satsrAcPRWmERLtpidU7AEURF1Jyb6qoG6cMEQJtWfJ7S65hSCxrxJoMYd3H7KMJoNgcRJfZGwcQTCFT2q",
  "key3": "5T9UaUf3Jwk3dutU835z9ViW3Ro4Ft3wxzf4Dz8nxbmNPJta1WAL1KquMUzfY6jikoh4muzqyCQiwzVyJATfKnCr",
  "key4": "2Njs1FSyHg4922LpHMSAH77erEQ8kK9hhVdXcJ42HKTQy8e7wU5c2hCrXyDSTAZMk2atHZ1XqbyMnpcRgojhfviE",
  "key5": "5CnvBxP2Uw8KJ9Ecq1GEQ2sbnbTNGbQT8d2vszGMVddV2EwuPaztc8XyfMzXuj6yDLiiYVgjk9RDfahwdNPvXRyy",
  "key6": "5ZngXSjMDhzjk3dXCXXQg3nX2AH5b6UtChrT2TxivwUiW9hmDxfAWRMY7kZSbEKSwQ7vY66k9yYyrr9hzeTFG5AG",
  "key7": "2EPe1bG4srJGiYMAcemUjaHp3BkjSbcQKzF1E92mbpSpFhDPFXaKYfWtmHChzC3QKNxHWT6oEpM7Fxyzr5XeFndf",
  "key8": "36rN1VnvtHa21AYmAmE22QbxAcLMtrpnjjj3cHEbZ29Wo3ebCoXouKm6dAXhbuDFoMDWQyK7ffwR73V6PDr9chwT",
  "key9": "5CiNVpXzYmzP2bgvAztPjpiB7Ebu8Ro4BhznnrqUWCVqKWdwsgLRLfiT6kKCtdiM8RG9223SzEqvcwdV3KEJNe9w",
  "key10": "ZTVNnGob32y8nrjUiE64jMGZtHpL8G1nyQ52GqAnnp2HHjn8kr9R3KVaYvue3bdrVWB42Qn3LqHzQQ1jDJewHtc",
  "key11": "21TU1vaLbdr3tqx1ssApHo7CM8VV8nYF4sqLPpUbNc9Q5beFLV7xvjfeFDDtQhzgxDwCXkHX73tpKNZZRxDZXpdA",
  "key12": "rr8gJt9Bwj1KphH1qAko7Q4bHiC576ux62kkCap4LwDHfcdeg2qf7iHQUnSTSGvwSiMHADtU2QQY5dtVxjrGrYx",
  "key13": "3TENB6RTnQe1iNebtT6dsqnJ8KkfhkjFpBGEBYeq9vKTT65Kwyjxj8EykaXqCPyWc3XWqzesb5WCMuqhCfkmyheb",
  "key14": "3yf56kNGHftP8orkMVUTiCMgHenhZoisQYSgDYCNkyEtcwt8NZAmds3gsQUZLBBw6MbEybcLiwRMTnctSXVK1y1g",
  "key15": "5EKXV23gnjYhoAVB6o4FMixJ8H4LYvpYvzcTwpYLRcxBbtzpSQdWE6q8885f5ScmGEPSLzXUeBGsqNrSJVKPVFUz",
  "key16": "4Eq5Mdkr5TEHiKQycA2kMzLHfw3Ua5H3ZpfStVxrPFxMDxg4MvzrNZ1K5ePdQPf7dRiasgDDgKudEnQNumSmZyb7",
  "key17": "3AKDcmFVqutGcghwWkaAag2VTwTFtB8geAryNZS2KzoYLTUnx9Dxc4mJo6KdR8KmiyTTCQ3B5WDRgQUMm4naaapx",
  "key18": "5Hd5qbzRYe8L9mkhsQMCMoqu6P4Zbfy8UAppaeN4QfxhcoVFhtgbzNUfNEybjEKLmU5JNMhhSWHhBUCu69kZpua2",
  "key19": "2pg328TweQz43m66hBz76ebmVMNayi6QN4yRmDtPAbr5SbyrwsvyttfoQ74PbAQaAYiUnMxRAaUuTtwNK3Tp2wpv",
  "key20": "4UBVTgufEH14VT26aatFsYacD8K1vMhBUbaVhce6EHfUjyFaG34MYSXpuw1Zkmu5FkKabYSTxAmKgpY7KqH4psP8",
  "key21": "37cXjEgzYeC4qgMR8fA6yxd1Z82ZFArSWigRq1oJ5UVUnXMFf5MvYrCbjK82QJPXMsSTS3gkpjMbjN8uA9vJ8FPC",
  "key22": "2ZycvmKaLjRNpeionPFyF3BFm5B8fct61ChKw7x7EWNgxosFWDDZ7PJcT62adrWzWSZ2SuYVC4CEt1w96CNHePXG",
  "key23": "5w58jxn9s5xyADmRys1qcRhYMD786TfZbgEG7fn65izGdQAwBTKhUS4c4sv5njpaMk3tMn39qzqDvZQDtFDpibWP",
  "key24": "2TZVCcNYnjpQPojTuYEucza48f7cYr35M6ZEeTRSxmWrUNHhcjrKivBcJ1Q9bXrf9aEiB9Ykkr12gFt4sTPHhsxf",
  "key25": "36VYEhgp8PYxRuWDmW82H3RmBaVmqsQvr19pLjrEQPu6NiPGXJHSkUsk9LboxgBApf3ERpHqS74q94Jg71JLBUTD",
  "key26": "2Jdbrx3gPM9yjCvPctkwu19qSt3ckPF24zz9VhNM4843F1XWRM6pdp4K9qiqFp8atFY6qybanwLMLDi3qKibAyiE",
  "key27": "5XfYRBeSREhxusXyAbjQQ6uHFTKvQQttcLLAMVKrKhhS6pmewULDmmBPZ5YSv3u9vrbZCUR47UaY3n7X97pUubvH",
  "key28": "27fMrrVcudbetiQNg8LWnCD9cNRGBhZSK7hMrfYrpHyK87ystcNQjMSm8tt6RdkA9xHdQREaJtFLvn44Y6o5Fafg",
  "key29": "bQuLiRyW4Jpzx7b4XyZg5BUL8RxAmEzGBDZLZaExsqEoTGZgrFvFR3bTv3ZTwQnJseCn75W4y8KgvfJ7fnh8ZYB",
  "key30": "2ahnjfyfyJ46mqHhkfra5ycAkx5FAE9GJ8eP68HV3vEfMF9gzENAzi618hEd3a6NtUawjNYn1Zy5WyhB3iVzmBE2",
  "key31": "WskH7dPQouVCt5bagzVFBDNNfaWdycLQ5YH8TVXvZcyCMvRqhePS5Q584BcrD1QMvkKP89a4A17LWbU1ep4YjqF",
  "key32": "3neAjKCmkk21d4u9Rbbo5VgCLCJj7CjL6KQA9WKN4taEcc7Cfz76eaUXLjLYLTpvg6LZ7En8q1jsda2VPrn7QFrW",
  "key33": "2UYQfyvLmTTYRHS1xwcJzoFUg1z5bRWuzmxqWL7CT3L3261wSncRip6LVyUuiCCPCgPEVah9DniVSqUvSguB36mt",
  "key34": "NYxpww7fVQgs8i2rMuX4tgM11FBnxmejkY2ftr3SKJExM5GuCVe42Qn6zHVE2aYZarRQjKD3vUdSqZcnJPpsCKL",
  "key35": "2j4EPE1WTA89p6yyd9XRtjGaNMh1iXFnjhJHJuTsYvZEQXwQZERepUmkWH4XEwG1nEfAMWJrk8fYfeznkUwREgpo",
  "key36": "veuMnQKV92tQ98dQY9GjRqyFWF7Q27m3jmgr1oEm7THywqd7fZB4naoBdNPN2f3EFUZjFK29f1PFz6u9dLTnPj4",
  "key37": "29YmZbeJBgHSxoYFmSdseQ5HtJcubZgvqFEqGgjAU8PvfDkbr2ixaMR6antdZ1CkDmBdCqpvQdNoAE2ScjZJeTq8",
  "key38": "a8qQ3PifKNhBkYXypwbAiarvYSxgH4Bbq8oXHGopazkecYLLQ6VW1pK27vRcToUoap8FA9AgEVd8kCMZBVCVrkB",
  "key39": "5Yu8zNgTPrQmbz8E25KYvWf5j824aYGdw2iEJh4d8WPFSV4WdP1fKj5BPV1Nhg5H8u7F1qsbqgzRShbypzpoUCjj",
  "key40": "4ZCqQYxEyZ6iCudk2DW3P4KAmrWCmUSCHuihD3eovfJzMKS9FpqvnZv1e3LDLVpyRCp1cYFXXMhWbrPP6EY9HxZ5",
  "key41": "Dwk1qBc7J3Hvk4at92KfDqrhiUN5PFogPaMRPGdWUoKYTrKVLhHiB6jLWEFCkZVbm7er7GmWmLVono2wb59YkGk",
  "key42": "3mPMfAat7GAoHpnW7KNkjZuDCksQD8mvqn91DYzxUTQ8RmQJ7djwpsTDGV9PVYTi2RpY7F2F5f1FkQALnbj4FoY4",
  "key43": "57MJKgru7mhPrt2uWtWah89ZaPj9B3g1RFzvSoBrBb6yivWJxK4aiL1NdLeGAwsoZZ71zNvV6Ps3VVV3ZjxeSv5g"
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
