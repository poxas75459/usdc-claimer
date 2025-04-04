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
    "2w6NhhZLesAJ8qxCX8Ky5364DunGXoEDoXrBH1wuuSV2W5WMYKVcyT6iWPy5Wyh2rTKc4DXYM256yqxDnBf6BevS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JmqYVF9m22JzTDS5K4GTdn5wARxieHbKCkefftFp2kddc2N1sb3NkMZrEZSyQ7T3CmFg5FwReU2DycNA6aitqg9",
  "key1": "4CrrJ84H2oNw7AhgPDwTxn31Cg7Zh1Xz1DbGKNmDVwHnW68sucwuoAiVNNiQTwX8RFPaMPcYyweLjmod8typcVi2",
  "key2": "CydyJVsab1nGNEu48qL8MiubzNhgeiq182DAEcwzxVNZWyhmKsozC7UfsiW9oGJSJCtcmm1dvFCDn1cdAu4RkVM",
  "key3": "4qEC5bD7nJagYAmuEUgambZz9L5muNAyjGv8m1XomiCCxaXpGiCcYv5X1wv1wjyy9cffGy3H8L8VDqJke6iuQC9X",
  "key4": "52JBvhZrjh5wWNxQPxHdYC3HAqsy4R4HMToMjnHVzaxqtuPt4ozr6CEFjcdCLs7DZUuVsDtNaURr2Git7nLtTv2f",
  "key5": "ixRuokwsFurCKUwLpBUGkroBNEsNf1j64kBfztLfjXvAZZzqLBqCqdcV18RtkuBzKuje5rNzVYym8ih2iLv9jHi",
  "key6": "2HLf2hqazwdNLKZBvNVraHDrJzWkEr5MfpD9imE58wYKJjDmpqZsRqX73rKxm5Xpbg2DQrworvE1FU5x9xGa96mi",
  "key7": "4kBi2CHUqg1JE1f7FAXnHFQPKgnRFEs4TjG3PN1ZBUNDv7z6upkcW5CfDmkxmJMQC27vjQFs4iLcnwJ6kRG5fJow",
  "key8": "2BMGNmHU3vea2eJ6V8m3TGqsE4WjZF92PLaR1QJCvHW634dVpGdRbfuDj4ovtmoevnprGuUf8PyfgFGg9d11N7rN",
  "key9": "2826trpZLjGmwYg3LpEWxXZmJ3byyLGdy9Jc6vqMsX8gMfQrRHKYMezZDYFW6qrLRHoE6YHKKxXvqS9uvCp8K4E2",
  "key10": "ckjYSzYAJEEVZhXbKniE8FUHw1KjJcN4fC7E1qvCYRzovkrYAwAyS5sDn46G7bu4mVEPg8CCULUswwnziNdgZ4V",
  "key11": "5Fn1xbVjNGdtxTckaoZgB8b931zEq2ecSHru6VNY15ZZgYr7xksETmiuoatKiVdqznVxq9wLMDTuwfsmDLhAvLnp",
  "key12": "224oakcuMSXmPtwdH3Fipkuq17D8ZhbN6ybgjtiGWGPwBgoHFzD5ZBqNrFxebheCYA2YdizE9wrFzvagg83DPk19",
  "key13": "i6w3BXZxkrQnYWWXbPDUEbdPxXpGNxYdnrQcHQLmxZNVD6ZBk8Dm9viMzyjNTZK5gLHjnmJ1CPsjvuL8UCYTSV4",
  "key14": "3kKcRMuLFUTifCchmpkFx1jizkAgCCzF6eAxcXZfXt4oddBuydUfqNjuAFZREb3Zb6J9fd414f6PgQ8DMuXFRj2g",
  "key15": "5xvus9NeQ6KWt1hw1qgVDNbez4DfhEZwjJa1bWPyidxWgA3Dxwhq9h5XWB2pnrKVUd6VMYiaMBbTP7qmjngdFPg2",
  "key16": "4Wx9ZrFjWgBiXUunfGTQnQGmMB8sZSbc8tdQqRxHTuS1CqBtq6Ku4EDxFyQeguZ3Pj5kTmfptLi474wobUfGPTcN",
  "key17": "2dxD9s5ygtHC9A7Za8eovFbkrCWtq1LF7m5g7DvtBnHSJ4berdh2TKgru4Yz15YSGgJqoyDaBJg31hv3AeoAKZLM",
  "key18": "ACHZu7njtURSy6gs35nQ6nLfJeUjQ8D3LwL6Nw85rzhHMq1TnrhEEjWd3aGRRWqRSwnbMeKta6dscdLa3Xu3WrN",
  "key19": "3Y8FzwxMjskURbzfKuDWFUNhLR48tEpkcpYz9NZAfpBBSKPrifqRsrvYbNSQMvJQvL6D2PXyaGFMhUSNgC2HWwPr",
  "key20": "5NcMhq5QEbUAgNFkRChYRmGKtpKZz6DKCVRMJspqvakfk1aAVYLPjNhWFMV3NXtDzJyTKoW9FVipxx1Q6w9Ecx4K",
  "key21": "5L32MWHM6V44biLqDFAa8rKUmfHSrFVrf6efqKgUSy2BEu8Rkw7wT9W3BfiDEcXH3dPNuAux8ud5LkDs88nT633k",
  "key22": "3ELr3BpRN9NSknCgRg1bVheMw6kUGKM5zX69ZQpnSN2PYMnSK3LifhRFBEBc5YAd7V8QQd28ug83MfrCWFRgJsD6",
  "key23": "2Gf59QLdMxTcUe5G1DqzppBpgvXKPBkeVoDbW6WjZgF7yDSmZnA7vvRa7Qfbzb1LaiftjWFYeJgPg8nGk8SsUpgm",
  "key24": "2BmiVPghJkJP1Sj2xtKJPRcbQgGp85tPWSXJM6Fsu7NYJyMYyAy63TKu31DFKhAtp467NsBtUPJehWP2AkBn9jBX",
  "key25": "2DxFj65uckUvYvsBdHS6hLh45o2XMkpyZaQcL9cNAqA58X9Fb4Q2FgnpsW2G88DDS3fSFx4LBNxMhQMEvS3gVss3",
  "key26": "2SvBzBbSX2hm7e4Hy1G43qaLkBYPXnbuA8rQa1zHcXnsULEdxqwz4eosZ7QQa2CLRurNPVbgwYBjFnRSu9RCfz8L",
  "key27": "J9g7EK5MvXB3ck3UMPB8kREQJFjJ35DRCcncLywdBW9S8spBpUM8pYWb4q1DcDzzbpyaLZR4eWmuWUUyipmz3YJ",
  "key28": "3L9qdyrzcPkzgYPDQJskkqaEU9W4L7BrpmEaKMZHJd9iR6g7bqy93CpDf2MG2iJmHV277b17nH3Ub3RNdGeBHUhp",
  "key29": "NAb4GYoivvDLBtUCUR3y5NygFKedkMenA3R9MvvyWLcSCCXHvjydSTTC8fJW8y2BAaTiVQMYDTfdAVaqCykhhQV",
  "key30": "2P3pYEUuoKDzqLYhLR9gEb1qbjtX4scy1wQ8ZDp5jbn9uH83HbqtfzSiRLqRrb7i4ydQYYkycU8HNkYj6vQxxFpE",
  "key31": "4ZCMPGnvMDwu4VyiecMJVynBr41At67CGqVNTQbkh2DvAWxgcRggrK9bgJ9WgpZhBs4CvTHFg5uZ6Df1oen6ByUw",
  "key32": "3azwamFe3XDW3vmPHpL8NyGqe3T4vZPBtgVHxexbTXTPPiht5xhW2PQsoZCMkkaxLKrm2NkLY8Z9fA7sE89NXYbz",
  "key33": "45CDsuP8DvzBxMXDCF2r22Q8od3B6SrFCic3YiJ51xi7wswfM6eyvcoGNzjpc4ekyCwBwmQPQ244JbjGukFJ7NTa",
  "key34": "4K2Dt1g7RhndzXq95rJGmLs8bBLBLyNt6EupbpfZw11REztnMCNZRgYYtQdibwNBnaoE4XE36M7Fe2HLTHMA38WC",
  "key35": "29YsrjApjw96Pn2gVgyezZUCSz7qmXkSzgMYwpfn8rLGJhpUKDKfpwPRST8mav373vpuKV8BBT2nKM3He9Y53YX1",
  "key36": "3PV52c5gh9xCxhUjz2sJxu8jJeYXwkWocrE1oD9UkoSXr5wpgq6LProFyjrKn1fzj2nhKWfJ3Gn4QwwC5Hq8sEoz",
  "key37": "4ba7exmUirzD9sPxEZn8upSqDTdCZPCyfK7rCcXEXSknRmVtDpL2Fa6uUK9JBeEqpJCxgpsXdMDCKD6JzaFM9V17",
  "key38": "3rYHY85pFWjioB2E4XtmfuKsxmdF3bMqqMjYjJWXCUdq151RN6rThpZtmLXQyzj2GrU6AigGha75CTgeHNfzTfTR",
  "key39": "5HatJx6JyAHF2gKqXDHGWBEoaT2eGZnUVb2YcXUFDYz6KSwYH7ZGsYQxExJm9vrEN2pk2mZdKkZgbCMK9NW2izun",
  "key40": "2AUpr8aFAxHhbsJJxRhvLfxctab2gGemERRu35CWRYaq9bqzXapLwoFSwJEVPxNwWwJ8Db24EbGW8y81ewi7WUXt"
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
